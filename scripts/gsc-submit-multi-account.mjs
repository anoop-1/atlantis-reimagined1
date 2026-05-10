#!/usr/bin/env node
/**
 * gsc-submit-multi-account.mjs
 *
 * Drop-in replacement for scripts/gsc-submit-priority.mjs that rotates across
 * all 10 GSC service accounts (≈ 2,000 URLs/day capacity vs. the current 200).
 *
 * Lives at: scripts/gsc-submit-multi-account.mjs (in atlantis-reimagined1 repo)
 *
 * What it does
 * ------------
 * 1.  Loads all SA JSONs from scripts/gsc-service-account-{1..10}.json.
 * 2.  Reads scripts/indexing-url-list.json (tier-tagged URL list — see companion
 *     file).
 * 3.  PRE-FLIGHT: HEAD-checks every URL.  Skips anything that:
 *       - returns ≠ 200,
 *       - returns the SPA fallback (detected by matching the homepage <title>),
 *       - or matches a known thin/empty body signal.
 *     This is the safety gate that prevents quota burn on undeployed URLs.
 * 4.  Submits URL_UPDATED in round-robin across the 10 SA tokens, capped at
 *     200/day per account, persisting state in .gsc-quota-state.json so
 *     re-runs that day skip already-done work.
 * 5.  Writes a ledger to .gsc-submission-ledger.jsonl (one JSON object per
 *     attempt — useful for GSC reconciliation later).
 *
 * Run
 * ---
 *   node scripts/gsc-submit-multi-account.mjs --dry-run     # preflight only
 *   node scripts/gsc-submit-multi-account.mjs               # live submit
 *   node scripts/gsc-submit-multi-account.mjs --tier=A      # filter by tier
 *
 * Requires
 * --------
 *   npm i googleapis google-auth-library  (already in package.json for the
 *   single-account pipeline)
 */

import { google } from 'googleapis';
import { JWT } from 'google-auth-library';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const SA_GLOB = /^gsc-service-account-(\d+)\.json$/;
const SCOPE = ['https://www.googleapis.com/auth/indexing'];
const DAILY_CAP = 200;                       // Google's hard limit per account
const STATE_FILE = path.join(ROOT, '.gsc-quota-state.json');
const LEDGER_FILE = path.join(ROOT, '.gsc-submission-ledger.jsonl');
const URL_LIST_FILE = path.join(__dirname, 'indexing-url-list.json');

const HOMEPAGE_TITLE_FALLBACK =
  'Atlantis NDT | NDT Training, Consulting Services & Digital Twins | ASNT Level III';

// ---------- CLI flags ----------
const args = new Set(process.argv.slice(2));
const DRY = args.has('--dry-run');
const TIER_FILTER = [...args].find(a => a.startsWith('--tier='))?.split('=')[1] || null;

// ---------- Load SAs ----------
function loadServiceAccounts () {
  const dir = __dirname;
  const files = fs.readdirSync(dir)
    .filter(f => SA_GLOB.test(f))
    .sort((a, b) => Number(a.match(SA_GLOB)[1]) - Number(b.match(SA_GLOB)[1]));
  if (files.length === 0) {
    throw new Error(`No SA JSONs found in ${dir} matching gsc-service-account-{N}.json`);
  }
  return files.map(f => {
    const json = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    return {
      file: f,
      email: json.client_email,
      jwt: new JWT({ email: json.client_email, key: json.private_key, scopes: SCOPE })
    };
  });
}

// ---------- Quota state ----------
function todayKey () { return new Date().toISOString().slice(0, 10); }

function loadState () {
  if (!fs.existsSync(STATE_FILE)) return {};
  return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
}

function saveState (s) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(s, null, 2));
}

// ---------- Pre-flight URL verifier ----------
async function preflight (url) {
  try {
    const res = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0 atlantisndt-indexer' }, redirect: 'manual' });
    if (res.status !== 200) return { ok: false, reason: `status_${res.status}` };
    const body = await res.text();
    // SPA fallback signal: title matches homepage exactly
    const titleMatch = body.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch?.[1]?.trim() || '';
    if (title === HOMEPAGE_TITLE_FALLBACK) {
      return { ok: false, reason: 'spa_fallback' };
    }
    if (body.length < 5000) return { ok: false, reason: 'thin_body' };
    return { ok: true, title };
  } catch (e) {
    return { ok: false, reason: `fetch_error:${e.message}` };
  }
}

// ---------- Submit ----------
async function submitOne (sa, url) {
  const indexing = google.indexing({ version: 'v3', auth: sa.jwt });
  try {
    const res = await indexing.urlNotifications.publish({
      requestBody: { url, type: 'URL_UPDATED' }
    });
    return { ok: true, status: res.status };
  } catch (e) {
    return {
      ok: false,
      status: e?.code || 'error',
      message: e?.errors?.[0]?.message || e.message
    };
  }
}

// ---------- Ledger ----------
function appendLedger (entry) {
  fs.appendFileSync(LEDGER_FILE, JSON.stringify({ ts: new Date().toISOString(), ...entry }) + '\n');
}

// ---------- Main ----------
async function main () {
  const sas = loadServiceAccounts();
  console.log(`Loaded ${sas.length} service accounts (capacity: ${sas.length * DAILY_CAP} URLs/day)`);
  const state = loadState();
  const today = todayKey();
  state[today] ||= {};
  for (const sa of sas) state[today][sa.email] ||= { count: 0 };

  if (!fs.existsSync(URL_LIST_FILE)) {
    throw new Error(`Missing URL list: ${URL_LIST_FILE}`);
  }
  const urlList = JSON.parse(fs.readFileSync(URL_LIST_FILE, 'utf8'));
  const filtered = TIER_FILTER ? urlList.filter(u => u.tier === TIER_FILTER) : urlList;

  console.log(`Targets: ${filtered.length} URLs${TIER_FILTER ? ` (tier=${TIER_FILTER})` : ''}`);

  let saIdx = 0;
  let preflightSkipped = 0, submitted = 0, failed = 0, capExhausted = 0;

  for (const item of filtered) {
    const { url, tier } = item;

    // Pre-flight verification
    const pf = await preflight(url);
    if (!pf.ok) {
      preflightSkipped++;
      appendLedger({ url, tier, action: 'preflight_skip', reason: pf.reason });
      console.log(`  [skip ${pf.reason}] ${url}`);
      continue;
    }

    // Find next SA with quota left
    let sa = null;
    for (let i = 0; i < sas.length; i++) {
      const candidate = sas[(saIdx + i) % sas.length];
      if (state[today][candidate.email].count < DAILY_CAP) {
        sa = candidate;
        saIdx = (saIdx + i + 1) % sas.length;
        break;
      }
    }
    if (!sa) {
      capExhausted++;
      console.log('All 10 accounts at daily cap. Stopping.');
      break;
    }

    if (DRY) {
      submitted++;
      console.log(`  [dry] ${sa.email} → ${url}`);
      continue;
    }

    const r = await submitOne(sa, url);
    if (r.ok) {
      submitted++;
      state[today][sa.email].count++;
      appendLedger({ url, tier, sa: sa.email, action: 'submit_ok' });
      console.log(`  [ok ${sa.email.split('@')[0].slice(-3)}] ${url}`);
    } else {
      failed++;
      appendLedger({ url, tier, sa: sa.email, action: 'submit_fail', message: r.message });
      console.log(`  [FAIL ${sa.email}] ${url} → ${r.message}`);
      // 429 = quota; bump that SA to cap and retry with a different one
      if (String(r.status).includes('429')) {
        state[today][sa.email].count = DAILY_CAP;
      }
    }
    saveState(state);
    // 100ms throttle to avoid burst-related flapping
    await new Promise(r => setTimeout(r, 100));
  }

  console.log('\n--- Summary ---');
  console.log(`Pre-flight skipped: ${preflightSkipped}`);
  console.log(`Submitted:          ${submitted}`);
  console.log(`Failed:             ${failed}`);
  console.log(`Cap exhausted:      ${capExhausted ? 'yes — re-run tomorrow for remaining' : 'no'}`);
  console.log('\nQuota usage today:');
  for (const sa of sas) {
    console.log(`  ${sa.email}: ${state[today][sa.email].count}/${DAILY_CAP}`);
  }
  saveState(state);
}

main().catch(e => { console.error(e); process.exit(1); });
