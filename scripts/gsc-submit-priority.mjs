#!/usr/bin/env node
/**
 * Unified GSC Indexing Submission — 6-Tier Priority System
 *
 * Tier 1: atlantisndt.com (primary site)
 * Tier 2: atlantisndt.com satellites (35 NDT vercel.app sites)
 * Tier 3: ndt-connect.com (primary site)
 * Tier 4: ndt-connect.com satellites (future)
 * Tier 5: GoVisa primary (go-visa.vercel.app)
 * Tier 6: GoVisa satellites (passport-power, visa-free, evisa, etc.)
 *
 * Features:
 * - Checks URL Inspection API before submitting (skips already-indexed URLs)
 * - Tracks all submissions in gsc-priority-progress.json (prevents re-submission)
 * - Seeds from all prior run files on first use
 * - Respects 200/day Indexing API quota
 *
 * Usage: node scripts/gsc-submit-priority.mjs [batchSize]
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createSign } from 'crypto';
import { execSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));

const PROGRESS_FILE = join(__dirname, 'gsc-priority-progress.json');
const DAILY_LIMIT = parseInt(process.argv[2] || '200');

// ── GoVisa / travel satellite domain patterns ────────────────────────────────
const GOVISA_DOMAINS = [
  'go-visa', 'passport-power', 'visa-free', 'evisa-guide',
  'digital-nomad-visa', 'travel-docs', 'visapath',
];

// ── NDT-Connect satellite domain patterns ────────────────────────────────────
const NDT_CONNECT_SATELLITES = [
  'aerospace-ndt-center', 'corrosion-engineering-guide', 'industrial-coating-inspection',
  'ndt-career-portal', 'ndt-digital-technology', 'ndt-equipment-reviews',
  'ndt-safety-compliance', 'ndt-standards-reference', 'offshore-ndt-guide',
  'pipeline-integrity-hub', 'pressure-vessel-inspection', 'rt-testing-hub',
  'tank-inspection-guide', 'ut-testing-academy', 'weld-inspection-pro',
];

// ── Load or init progress ────────────────────────────────────────────────────
function loadProgress() {
  if (existsSync(PROGRESS_FILE)) {
    return JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
  }
  return {
    submitted: [],
    alreadyIndexed: [],
    failed: [],
    runs: [],
    created: new Date().toISOString(),
  };
}

function saveProgress(progress) {
  writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));
}

// ── Seed from prior run files (one-time merge) ──────────────────────────────
function seedFromPriorRuns(progress) {
  const submittedSet = new Set(progress.submitted);
  let seeded = 0;

  // Seed from indexing-results-march-2026.json (today's earlier run)
  const resultsFile = join(__dirname, 'indexing-results-march-2026.json');
  if (existsSync(resultsFile)) {
    const results = JSON.parse(readFileSync(resultsFile, 'utf-8'));
    for (const url of (results.submitted || [])) {
      if (!submittedSet.has(url)) {
        progress.submitted.push(url);
        submittedSet.add(url);
        seeded++;
      }
    }
  }

  // Seed from drip-feed-progress.json (older runs)
  const dripFile = join(__dirname, 'drip-feed-progress.json');
  if (existsSync(dripFile)) {
    const drip = JSON.parse(readFileSync(dripFile, 'utf-8'));
    for (const url of (drip.submitted || [])) {
      if (!submittedSet.has(url)) {
        progress.submitted.push(url);
        submittedSet.add(url);
        seeded++;
      }
    }
  }

  // Seed from gsc-indexing-state.json (Python script runs)
  const stateFile = join(__dirname, '..', 'gsc-indexing-state.json');
  if (existsSync(stateFile)) {
    const state = JSON.parse(readFileSync(stateFile, 'utf-8'));
    for (const key of Object.keys(state)) {
      if (typeof state[key] === 'object' && state[key] !== null) {
        for (const url of (state[key].submitted || [])) {
          if (!submittedSet.has(url)) {
            progress.submitted.push(url);
            submittedSet.add(url);
            seeded++;
          }
        }
        for (const url of (state[key].already_indexed || [])) {
          if (!new Set(progress.alreadyIndexed).has(url)) {
            progress.alreadyIndexed.push(url);
          }
        }
      }
    }
  }

  if (seeded > 0) console.log(`  Seeded ${seeded} URLs from prior run files`);
  return progress;
}

// ── Auth ─────────────────────────────────────────────────────────────────────
async function getAccessToken(scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: credentials.client_email,
    scope,
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsigned = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const sig = sign.sign(credentials.private_key, 'base64url');
  const jwt = `${unsigned}.${sig}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`Token failed: ${await res.text()}`);
  return (await res.json()).access_token;
}

// ── Check if URL is already indexed via URL Inspection API ───────────────────
function siteUrlFor(url) {
  try {
    return new URL(url).origin + '/';
  } catch {
    return null;
  }
}

async function checkIfIndexed(url, wmToken) {
  const siteUrl = siteUrlFor(url);
  if (!siteUrl) return false;

  try {
    const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${wmToken}` },
      body: JSON.stringify({ inspectionUrl: url, siteUrl }),
    });

    if (res.status === 200) {
      const data = await res.json();
      const result = data?.inspectionResult?.indexStatusResult || {};
      const verdict = result.verdict;
      const coverage = (result.coverageState || '').toLowerCase();
      return verdict === 'PASS' || coverage.includes('indexed');
    }
  } catch {
    // If inspection fails, don't skip — just submit
  }
  return false;
}

async function submitUrl(url, indexToken) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${indexToken}` },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  return { status: res.status, data: await res.json() };
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

// ── Build 6-tier URL queues ──────────────────────────────────────────────────
function buildUrlQueues() {
  const allUrlSet = new Set();

  // Collect from all URL source files
  const sourceFiles = [
    'all-new-urls-march-2026.txt',
    'indexing-queue-smart.txt',
    'complete-satellite-urls.txt',
    'us-eu-expansion-urls.txt',
    'ndtconnect-all-urls.txt',           // ndt-connect.com main site (2,901 URLs)
    'ndtconnect-satellite-urls.txt',     // ndt-connect.com satellites (555 URLs)
    'govisa-urls.txt',                   // GoVisa + satellites (405 URLs)
  ];

  for (const file of sourceFiles) {
    const path = join(__dirname, file);
    if (existsSync(path)) {
      readFileSync(path, 'utf-8').trim().split('\n')
        .filter(u => u.startsWith('https://')).forEach(u => allUrlSet.add(u));
    }
  }

  // Also generate ndt-connect.com URLs (from Python script's URL builder)
  const BASE = 'https://ndt-connect.com';
  const SERVICES = [
    'ultrasonic-testing','magnetic-particle-inspection','liquid-penetrant-testing',
    'radiographic-testing','visual-inspection','eddy-current-testing',
    'phased-array-ultrasonic-testing','time-of-flight-diffraction','computed-tomography',
    'digital-radiography','guided-wave-testing','remote-visual-inspection',
    'acoustic-emission-testing','thermographic-inspection','leak-testing',
    'hardness-testing','positive-material-identification','ferrite-testing',
  ];
  const INDUSTRIES = [
    'oil-gas','aerospace','automotive','power-generation','construction','manufacturing',
    'marine','railway','chemical','nuclear','petrochemical','wind-energy','pipeline','pressure-vessels',
  ];
  const CITIES = [
    'houston','new-york','los-angeles','chicago','dallas','philadelphia','phoenix',
    'san-antonio','san-diego','san-jose','austin','jacksonville','fort-worth',
    'columbus','charlotte','indianapolis','san-francisco','seattle','denver',
    'abu-dhabi','dubai','riyadh','doha','kuwait-city','muscat',
  ];
  const STATIC = [
    '/','about','services','contact','blog','industries','case-studies',
    'resources','faq','pricing','careers','team','partners','certifications',
    'news','events','gallery','testimonials','sitemap.xml',
  ];

  for (const p of STATIC) allUrlSet.add(`${BASE}${p.startsWith('/') ? p : '/' + p}`);
  for (const s of SERVICES) allUrlSet.add(`${BASE}/services/${s}`);
  for (const i of INDUSTRIES) allUrlSet.add(`${BASE}/industries/${i}`);
  for (const s of SERVICES) for (const c of CITIES) allUrlSet.add(`${BASE}/services/${s}/${c}`);
  for (const i of INDUSTRIES) for (const s of SERVICES) allUrlSet.add(`${BASE}/${i}/${s}`);
  for (const s of SERVICES) {
    allUrlSet.add(`${BASE}/services/${s}/applications`);
    allUrlSet.add(`${BASE}/services/${s}/standards`);
    allUrlSet.add(`${BASE}/services/${s}/equipment`);
  }

  // Categorize into 6 tiers
  const tier1 = []; // atlantisndt.com
  const tier2 = []; // atlantisndt.com satellites (NDT vercel.app)
  const tier3 = []; // ndt-connect.com
  const tier4 = []; // ndt-connect.com satellites (future)
  const tier5 = []; // GoVisa primary
  const tier6 = []; // GoVisa satellites

  for (const url of allUrlSet) {
    if (url.includes('atlantisndt.com')) {
      tier1.push(url);
    } else if (url.includes('ndt-connect.com')) {
      tier3.push(url);
    } else if (url.includes('vercel.app')) {
      const isGovisa = GOVISA_DOMAINS.some(d => url.includes(d));
      const isNdtConnectSat = NDT_CONNECT_SATELLITES.some(d => url.includes(d));
      if (isGovisa) {
        // go-visa.vercel.app is the primary, others are satellites
        if (url.includes('go-visa.vercel.app')) {
          tier5.push(url);
        } else {
          tier6.push(url);
        }
      } else if (isNdtConnectSat) {
        tier4.push(url);
      } else {
        tier2.push(url); // NDT satellite for atlantisndt.com
      }
    } else {
      // Anything else — check if GoVisa related
      if (GOVISA_DOMAINS.some(d => url.includes(d))) {
        tier5.push(url);
      } else {
        tier1.push(url); // Default to tier 1
      }
    }
  }

  return { tier1, tier2, tier3, tier4, tier5, tier6 };
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  let progress = loadProgress();
  progress = seedFromPriorRuns(progress);

  const submittedSet = new Set(progress.submitted);
  const alreadyIndexedSet = new Set(progress.alreadyIndexed || []);
  const queues = buildUrlQueues();

  const tiers = [
    { name: 'Tier 1: atlantisndt.com',           urls: queues.tier1 },
    { name: 'Tier 2: atlantisndt.com satellites', urls: queues.tier2 },
    { name: 'Tier 3: ndt-connect.com',            urls: queues.tier3 },
    { name: 'Tier 4: ndt-connect.com satellites',  urls: queues.tier4 },
    { name: 'Tier 5: GoVisa primary',             urls: queues.tier5 },
    { name: 'Tier 6: GoVisa satellites',          urls: queues.tier6 },
  ];

  console.log('\n==========================================================');
  console.log('  GSC Priority Indexing — 6-Tier System');
  console.log('==========================================================\n');

  for (const t of tiers) {
    const done = t.urls.filter(u => submittedSet.has(u) || alreadyIndexedSet.has(u)).length;
    const remaining = t.urls.length - done;
    const pct = t.urls.length > 0 ? Math.round((done / t.urls.length) * 100) : 100;
    const status = remaining === 0 ? '[DONE]' : `${remaining} left`;
    console.log(`  ${t.name.padEnd(38)} ${String(done).padStart(5)}/${String(t.urls.length).padStart(5)} (${String(pct).padStart(3)}%) ${status}`);
  }

  const grandTotal = tiers.reduce((s, t) => s + t.urls.length, 0);
  const grandDone = tiers.reduce((s, t) => s + t.urls.filter(u => submittedSet.has(u) || alreadyIndexedSet.has(u)).length, 0);
  const grandRemaining = grandTotal - grandDone;

  console.log(`  ${''.padEnd(38)} ${'-----'.padStart(5)} ${'-----'.padStart(6)}`);
  console.log(`  ${'TOTAL'.padEnd(38)} ${String(grandDone).padStart(5)}/${String(grandTotal).padStart(5)} (${String(Math.round(grandDone/grandTotal*100)).padStart(3)}%) ${grandRemaining} left (~${Math.ceil(grandRemaining/200)} days)`);
  console.log(`\n  Daily limit: ${DAILY_LIMIT} | Previously submitted: ${progress.submitted.length} | Indexed: ${(progress.alreadyIndexed||[]).length}\n`);

  // Auth
  const indexToken = await getAccessToken('https://www.googleapis.com/auth/indexing');
  const wmToken = await getAccessToken('https://www.googleapis.com/auth/webmasters.readonly');
  console.log(`  Auth: ${credentials.client_email}\n`);

  // Submit in tier order
  let totalSubmitted = 0;
  let totalSkipped = 0;
  let totalFailed = 0;
  let rateLimited = false;
  const runLog = { date: new Date().toISOString(), results: {} };

  for (const t of tiers) {
    if (totalSubmitted >= DAILY_LIMIT || rateLimited) break;

    const remaining = t.urls.filter(u => !submittedSet.has(u) && !alreadyIndexedSet.has(u));
    if (remaining.length === 0) {
      console.log(`  [DONE] ${t.name}\n`);
      runLog.results[t.name] = { status: 'complete', submitted: 0, skipped: 0 };
      continue;
    }

    console.log(`  --- ${t.name} (${remaining.length} remaining) ---`);
    let tSubmitted = 0;
    let tSkipped = 0;
    let tFailed = 0;

    for (const url of remaining) {
      if (totalSubmitted >= DAILY_LIMIT || rateLimited) break;

      try {
        // Check if already indexed (saves quota)
        const indexed = await checkIfIndexed(url, wmToken);
        if (indexed) {
          progress.alreadyIndexed.push(url);
          alreadyIndexedSet.add(url);
          tSkipped++;
          totalSkipped++;
          await sleep(300);
          continue;
        }

        // Submit via Indexing API
        const { status } = await submitUrl(url, indexToken);
        if (status === 200) {
          progress.submitted.push(url);
          submittedSet.add(url);
          totalSubmitted++;
          tSubmitted++;
          if (totalSubmitted % 20 === 0 || totalSubmitted === 1) {
            process.stdout.write(`\r    ${totalSubmitted}/${DAILY_LIMIT} submitted | ${totalSkipped} skipped (indexed) | tier: ${tSubmitted}    `);
          }
        } else if (status === 429) {
          console.log(`\n    Rate limited after ${totalSubmitted} submissions`);
          rateLimited = true;
          break;
        } else {
          tFailed++;
          totalFailed++;
          progress.failed.push({ url, status, time: new Date().toISOString() });
        }
      } catch (err) {
        tFailed++;
        totalFailed++;
        progress.failed.push({ url, error: err.message, time: new Date().toISOString() });
      }

      if ((totalSubmitted + totalSkipped) % 10 === 0) await sleep(2000);
    }

    console.log(`\n    ${t.name}: ${tSubmitted} submitted, ${tSkipped} indexed (skipped), ${tFailed} failed\n`);
    runLog.results[t.name] = { submitted: tSubmitted, skipped: tSkipped, failed: tFailed, remaining: remaining.length - tSubmitted - tSkipped };
  }

  // Save
  runLog.totalSubmitted = totalSubmitted;
  runLog.totalSkipped = totalSkipped;
  runLog.totalFailed = totalFailed;
  runLog.rateLimited = rateLimited;
  runLog.cumulativeSubmitted = progress.submitted.length;
  runLog.cumulativeIndexed = (progress.alreadyIndexed || []).length;
  progress.runs.push(runLog);
  saveProgress(progress);

  // Final summary
  console.log('==========================================================');
  console.log('  RUN COMPLETE\n');
  console.log(`  Submitted:    ${totalSubmitted}`);
  console.log(`  Skipped:      ${totalSkipped} (already indexed)`);
  console.log(`  Failed:       ${totalFailed}`);
  console.log(`  Rate limited: ${rateLimited}`);
  console.log(`  Cumulative:   ${progress.submitted.length} submitted, ${(progress.alreadyIndexed||[]).length} indexed`);

  console.log('\n  Remaining by tier:');
  for (const t of tiers) {
    const rem = t.urls.filter(u => !submittedSet.has(u) && !alreadyIndexedSet.has(u)).length;
    if (rem > 0) console.log(`    ${t.name}: ${rem}`);
  }

  const totalRem = tiers.reduce((s, t) => s + t.urls.filter(u => !submittedSet.has(u) && !alreadyIndexedSet.has(u)).length, 0);
  console.log(`\n  Total remaining: ${totalRem} (~${Math.ceil(totalRem / 200)} days)`);
  console.log(`  Progress: ${PROGRESS_FILE}`);
  console.log('==========================================================\n');

  // ── Auto-reschedule: set next run to exactly 24h + 1min from this run ─────
  // Only reschedule after a full run (hit the daily limit or exhausted all URLs)
  // Do NOT reschedule on rate-limited partial runs (quota hadn't reset yet)
  if (totalSubmitted >= DAILY_LIMIT || (totalSubmitted > 0 && !rateLimited)) {
    rescheduleNextRun(runLog.date);
  } else if (rateLimited) {
    console.log(`\n  Skipping reschedule — rate-limited partial run (${totalSubmitted}/${DAILY_LIMIT} submitted)`);
  }
}

/**
 * Reschedule the Windows Scheduled Task "GSC-Priority-Indexing" to run
 * exactly 24 hours + 1 minute after the given run start time.
 * This ensures the Google Indexing API rolling 24h quota has reset.
 */
function rescheduleNextRun(runStartISO) {
  const TASK_NAME = 'GSC-Priority-Indexing';
  const nextRun = new Date(new Date(runStartISO).getTime() + 24 * 60 * 60 * 1000 + 60 * 1000);

  // schtasks expects MM/DD/YYYY and HH:MM format
  const sd = `${String(nextRun.getMonth() + 1).padStart(2, '0')}/${String(nextRun.getDate()).padStart(2, '0')}/${nextRun.getFullYear()}`;
  const st = `${String(nextRun.getHours()).padStart(2, '0')}:${String(nextRun.getMinutes()).padStart(2, '0')}`;

  // Use PowerShell to update the trigger without requiring a password re-prompt
  const isoTime = nextRun.toISOString();
  try {
    execSync(`powershell -Command "Set-ScheduledTask -TaskName '${TASK_NAME}' -Trigger (New-ScheduledTaskTrigger -Once -At '${isoTime}')"`, { stdio: 'pipe' });
    console.log(`  Next run rescheduled: ${sd} at ${st} (24h + 1min from this run)`);
  } catch (e) {
    console.log(`  WARNING: Could not reschedule task "${TASK_NAME}": ${e.message}`);
    console.log(`  Manually set next run to: ${sd} at ${st}`);
  }
}

main().catch(console.error);
