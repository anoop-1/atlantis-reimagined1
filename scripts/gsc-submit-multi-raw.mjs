#!/usr/bin/env node
/**
 * Multi-account GSC Indexing API submit — raw JWT (no googleapis dep).
 *
 * Reads URLs from scripts/indexing-url-list.json, rotates across the 10
 * gsc-service-account-{1..10}.json files in scripts/, submits URL_UPDATED
 * at 200/day per account = 2,000/day capacity total.
 *
 * Skips already-submitted URLs via scripts/.gsc-multi-state.json.
 * Skips URLs that don't return 200 in preflight.
 *
 * Usage:
 *   node scripts/gsc-submit-multi-raw.mjs --dry-run    # preflight only, no submit
 *   node scripts/gsc-submit-multi-raw.mjs              # live submit
 *   node scripts/gsc-submit-multi-raw.mjs --skip-preflight  # trust list, submit anyway
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, appendFileSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DEFAULT_URL_LIST = join(__dirname, 'indexing-url-list.json');
const STATE = join(ROOT, '.gsc-multi-state.json');
const LEDGER = join(ROOT, '.gsc-multi-ledger.jsonl');
const DAILY_CAP = 200;
const argv = process.argv.slice(2);
const args = new Set(argv);
const DRY = args.has('--dry-run');
const SKIP_PREFLIGHT = args.has('--skip-preflight');
const listArg = argv.find(a => a.startsWith('--url-list='));
const URL_LIST = listArg ? join(ROOT, listArg.split('=')[1]) : DEFAULT_URL_LIST;
console.log('Using URL list:', URL_LIST);

const todayKey = () => new Date().toISOString().slice(0, 10);

function loadServiceAccounts() {
  const files = readdirSync(__dirname)
    .filter(f => /^gsc-service-account-(\d+)\.json$/.test(f))
    .sort((a, b) => Number(a.match(/(\d+)/)[1]) - Number(b.match(/(\d+)/)[1]));
  if (files.length === 0) throw new Error('No service account JSONs found');
  return files.map(f => JSON.parse(readFileSync(join(__dirname, f), 'utf-8')));
}

async function getToken(cred) {
  const now = Math.floor(Date.now() / 1000);
  const enc = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const h = enc({ alg: 'RS256', typ: 'JWT' });
  const c = enc({ iss: cred.client_email, scope: 'https://www.googleapis.com/auth/indexing', aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now });
  const u = h + '.' + c;
  const sig = createSign('RSA-SHA256').update(u).sign(cred.private_key, 'base64url');
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: 'grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=' + u + '.' + sig,
  });
  const j = await res.json();
  if (!j.access_token) throw new Error('token error: ' + JSON.stringify(j).slice(0, 200));
  return j.access_token;
}

async function submitOne(token, url) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  const body = await res.text().catch(() => '');
  return { status: res.status, ok: res.ok, body };
}

async function preflight(url) {
  try {
    const r = await fetch(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0 atlantisndt-indexer' }, redirect: 'manual' });
    if (r.status !== 200) return { ok: false, reason: 'status_' + r.status };
    const body = await r.text().catch(() => '');
    if (body.length < 500) return { ok: false, reason: 'thin_body' };
    return { ok: true };
  } catch (e) {
    return { ok: false, reason: 'fetch_' + e.message.slice(0, 40) };
  }
}

function loadState() {
  if (!existsSync(STATE)) return { day: todayKey(), perAccount: {}, submittedUrls: [] };
  const s = JSON.parse(readFileSync(STATE, 'utf-8'));
  if (s.day !== todayKey()) return { day: todayKey(), perAccount: {}, submittedUrls: s.submittedUrls || [] };
  return s;
}

function saveState(s) {
  writeFileSync(STATE, JSON.stringify(s, null, 2));
}

async function main() {
  const sas = loadServiceAccounts();
  console.log('Loaded', sas.length, 'service accounts');
  const list = JSON.parse(readFileSync(URL_LIST, 'utf-8'));
  let urls = list.urls.map(u => u.url);
  const state = loadState();
  const submittedSet = new Set(state.submittedUrls);
  urls = urls.filter(u => !submittedSet.has(u));
  console.log('URLs to attempt today:', urls.length, '(skipping', state.submittedUrls.length, 'already submitted)');

  if (urls.length === 0) {
    console.log('All URLs already submitted. Nothing to do.');
    return;
  }

  let liveUrls = urls;
  if (!SKIP_PREFLIGHT) {
    console.log('Preflight checking', urls.length, 'URLs...');
    liveUrls = [];
    const skipReasons = {};
    for (let i = 0; i < urls.length; i++) {
      const u = urls[i];
      const pf = await preflight(u);
      if (pf.ok) liveUrls.push(u);
      else { skipReasons[pf.reason] = (skipReasons[pf.reason] || 0) + 1; }
      if ((i + 1) % 25 === 0) console.log('  preflight', i + 1, '/', urls.length, 'live so far:', liveUrls.length);
    }
    console.log('Preflight pass:', liveUrls.length, '/', urls.length, 'live. Skip reasons:', skipReasons);
  }

  if (liveUrls.length === 0) {
    console.log('No live URLs to submit. Wait for Vercel deploy then re-run.');
    return;
  }

  if (DRY) {
    console.log('DRY-RUN — would submit', liveUrls.length, 'URLs. Exiting.');
    writeFileSync(join(ROOT, '.gsc-preflight-live.json'), JSON.stringify(liveUrls, null, 2));
    return;
  }

  const tokens = [];
  for (const sa of sas) {
    try { tokens.push({ email: sa.client_email, token: await getToken(sa) }); }
    catch (e) { console.warn('token failed for', sa.client_email, e.message); }
  }
  console.log('Got', tokens.length, 'tokens');

  let idx = 0;
  let submitted = 0;
  let failed = 0;
  for (const url of liveUrls) {
    let attempt = 0;
    let success = false;
    while (attempt < tokens.length) {
      const tIdx = (idx + attempt) % tokens.length;
      const t = tokens[tIdx];
      const used = state.perAccount[t.email] || 0;
      if (used >= DAILY_CAP) { attempt++; continue; }
      const res = await submitOne(t.token, url);
      appendFileSync(LEDGER, JSON.stringify({ ts: new Date().toISOString(), url, sa: t.email, status: res.status, ok: res.ok }) + '\n');
      if (res.ok) {
        state.perAccount[t.email] = used + 1;
        state.submittedUrls.push(url);
        submittedSet.add(url);
        submitted++;
        success = true;
        idx = (tIdx + 1) % tokens.length;
        break;
      } else if (res.status === 429 || res.status === 403) {
        state.perAccount[t.email] = DAILY_CAP;
        attempt++;
        continue;
      } else {
        failed++;
        console.warn('  fail', res.status, url.slice(0, 80), res.body.slice(0, 120));
        break;
      }
    }
    if (!success && attempt >= tokens.length) {
      console.log('All accounts at cap. Stop.');
      break;
    }
    if (submitted % 50 === 0 && submitted > 0) {
      console.log('  submitted', submitted, '/', liveUrls.length, '(saving state)');
      saveState(state);
    }
  }
  saveState(state);
  console.log('Done.', submitted, 'submitted,', failed, 'failed. Per-account usage:', state.perAccount);
}

main().catch(e => { console.error(e); process.exit(1); });
