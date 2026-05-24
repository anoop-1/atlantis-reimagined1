#!/usr/bin/env node
/**
 * Fetch-based multi-SA GSC submitter for the May-2026 batch.
 *
 * Uses the same JWT/fetch pattern as gsc-submit-priority.mjs (no `googleapis`
 * npm dep needed — that package's transitive Rollup binary doesn't install on
 * this Windows host).
 *
 * Reads scripts/may2026-priority-urls.json, round-robins URLs across 10 SAs
 * (gsc-service-account-{1..10}.json), caps each SA at 200/day, persists state
 * to scripts/.may2026-multi-state.json so re-runs same day skip done work.
 *
 * Usage: node scripts/gsc-submit-may2026-multi.mjs
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const URL_LIST = join(__dirname, 'may2026-priority-urls.json');
const STATE_FILE = join(__dirname, '.may2026-multi-state.json');
const PRIOR_PROGRESS = join(__dirname, 'gsc-priority-progress.json');
const DAILY_CAP_PER_SA = 200;

const SA_FILES = [];
for (let i = 1; i <= 10; i++) {
  const p = join(__dirname, `gsc-service-account-${i}.json`);
  if (existsSync(p)) SA_FILES.push({ id: i, path: p, creds: JSON.parse(readFileSync(p, 'utf-8')) });
}
// Also include the main "atlantismarketing" SA (gsc-service-account.json) as SA #0
const mainSA = join(__dirname, 'gsc-service-account.json');
if (existsSync(mainSA)) {
  SA_FILES.unshift({ id: 0, path: mainSA, creds: JSON.parse(readFileSync(mainSA, 'utf-8')) });
}

console.log(`📋 Loaded ${SA_FILES.length} service accounts (${SA_FILES.map(s => s.id).join(',')})`);
console.log(`   Daily theoretical capacity: ${SA_FILES.length * DAILY_CAP_PER_SA} URLs`);

// ── Auth ────────────────────────────────────────────────────────────────────
async function getAccessToken(creds, scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: creds.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const sig = sign.sign(creds.private_key, 'base64url');
  const jwt = `${unsigned}.${sig}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`Token failed for SA: ${await res.text()}`);
  return (await res.json()).access_token;
}

async function submitUrl(url, token) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  let data = null;
  try { data = await res.json(); } catch {}
  return { status: res.status, data };
}

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

// ── State ───────────────────────────────────────────────────────────────────
function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function loadState() {
  if (!existsSync(STATE_FILE)) return { date: todayKey(), submitted: [], failed: [], saUsage: {} };
  const s = JSON.parse(readFileSync(STATE_FILE, 'utf-8'));
  // Reset SA daily counters if date changed
  if (s.date !== todayKey()) {
    s.date = todayKey();
    s.saUsage = {};
  }
  return s;
}

function saveState(s) {
  writeFileSync(STATE_FILE, JSON.stringify(s, null, 2));
}

// ── Load URLs + filter already-submitted ────────────────────────────────────
const urls = JSON.parse(readFileSync(URL_LIST, 'utf-8'));
const state = loadState();
const submittedSet = new Set(state.submitted);

// Also skip URLs already in the prior-progress submitted list (avoid dup w/ daily 6am job)
if (existsSync(PRIOR_PROGRESS)) {
  const prior = JSON.parse(readFileSync(PRIOR_PROGRESS, 'utf-8'));
  for (const u of (prior.submitted || [])) submittedSet.add(u);
  console.log(`   Pre-loaded ${prior.submitted?.length || 0} URLs from prior-progress (will skip)`);
}

// Sort by tier priority S > A > B > C
const tierRank = { S: 0, A: 1, B: 2, C: 3 };
urls.sort((a, b) => (tierRank[a.tier] ?? 9) - (tierRank[b.tier] ?? 9));

const queue = urls.filter(u => !submittedSet.has(u.url));
console.log(`📥 Queue: ${queue.length} unsubmitted URLs (of ${urls.length} total in list)\n`);

// ── Round-robin submit ──────────────────────────────────────────────────────
const tokensCache = new Map();
async function getTokenFor(sa) {
  if (tokensCache.has(sa.id)) return tokensCache.get(sa.id);
  const t = await getAccessToken(sa.creds, 'https://www.googleapis.com/auth/indexing');
  tokensCache.set(sa.id, t);
  return t;
}

let saIdx = 0;
let submitted = 0;
let failed = 0;
let skippedQuota = 0;

for (const item of queue) {
  // Find next SA with quota
  let attempts = 0;
  let sa = null;
  while (attempts < SA_FILES.length) {
    const candidate = SA_FILES[(saIdx + attempts) % SA_FILES.length];
    const used = state.saUsage[candidate.id] || 0;
    if (used < DAILY_CAP_PER_SA) {
      sa = candidate;
      saIdx = (saIdx + attempts + 1) % SA_FILES.length;
      break;
    }
    attempts++;
  }
  if (!sa) {
    console.log(`\n⛔ All ${SA_FILES.length} SAs hit daily 200 quota. Stopping.`);
    skippedQuota = queue.length - submitted - failed;
    break;
  }

  try {
    const token = await getTokenFor(sa);
    const { status, data } = await submitUrl(item.url, token);
    state.saUsage[sa.id] = (state.saUsage[sa.id] || 0) + 1;
    if (status === 200) {
      submitted++;
      state.submitted.push(item.url);
      submittedSet.add(item.url);
      if (submitted % 25 === 0) {
        process.stdout.write(`  ${submitted}/${queue.length} submitted (SA usage: ${JSON.stringify(state.saUsage)})\n`);
        saveState(state);
      }
    } else if (status === 429) {
      // Quota hit on this SA — mark it full
      state.saUsage[sa.id] = DAILY_CAP_PER_SA;
      console.log(`  ⚠ SA #${sa.id} hit 429 quota — marked full`);
      // Retry this URL with next SA on next iteration
      queue.unshift(item);
      continue;
    } else {
      failed++;
      state.failed.push({ url: item.url, sa: sa.id, status, error: data?.error?.message || String(data) });
      console.log(`  ✗ ${item.url} → SA#${sa.id} status ${status}`);
    }
    await sleep(100); // gentle pacing
  } catch (err) {
    failed++;
    console.log(`  ✗ ${item.url} → SA#${sa.id} error: ${err.message}`);
  }
}

saveState(state);

console.log(`\n========================================`);
console.log(`✅ Multi-SA submission complete`);
console.log(`   Submitted: ${submitted}`);
console.log(`   Failed: ${failed}`);
console.log(`   Skipped (quota): ${skippedQuota}`);
console.log(`   SA usage today:`, state.saUsage);
console.log(`   Cumulative submitted (this batch): ${state.submitted.length}`);
console.log(`   State: ${STATE_FILE}`);
console.log(`========================================`);
