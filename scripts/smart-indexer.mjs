#!/usr/bin/env node
/**
 * Smart URL Indexer - Checks GSC index status before submitting
 * Only submits URLs that are NOT yet indexed (saves 200/day quota)
 * Tracks progress in indexing-progress-smart.json
 * Usage: node smart-indexer.mjs [batch_size]
 * Default batch_size: 200
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createSign } from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
const QUEUE_FILE = join(__dirname, 'indexing-queue-smart.txt');
const PROGRESS_FILE = join(__dirname, 'indexing-progress-smart.json');

const batchSize = parseInt(process.argv[2] || '200');

function getJWT(scope) {
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
  return `${unsigned}.${sig}`;
}

async function getAccessToken(scope = 'https://www.googleapis.com/auth/indexing') {
  const jwt = getJWT(scope);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!res.ok) throw new Error(`Token failed: ${await res.text()}`);
  return (await res.json()).access_token;
}

/**
 * Check if a URL is already indexed using GSC URL Inspection API
 * Returns: 'indexed' | 'not_indexed' | 'error'
 */
async function checkIndexStatus(url, token) {
  try {
    // Determine the site property for this URL
    const origin = new URL(url).origin;
    const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        inspectionUrl: url,
        siteUrl: origin + '/',
      }),
    });

    if (res.status === 403) {
      // Not verified for this domain — can't check, assume not indexed
      return 'unverified';
    }
    if (!res.ok) return 'error';

    const data = await res.json();
    const verdict = data?.inspectionResult?.indexStatusResult?.verdict;
    // PASS = indexed, NEUTRAL/FAIL = not indexed
    return verdict === 'PASS' ? 'indexed' : 'not_indexed';
  } catch {
    return 'error';
  }
}

async function submitUrl(url, token) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  const data = await res.json();
  return { status: res.status, data };
}

/**
 * Get verified GSC properties to know which domains we can inspect/submit
 */
async function getVerifiedDomains(token) {
  const res = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  if (!data.siteEntry) return new Set();
  return new Set(
    data.siteEntry
      .filter(s => s.permissionLevel === 'siteOwner')
      .map(s => s.siteUrl.replace(/\/$/, ''))
  );
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  // Load queue - filter out comments and empty lines
  const allUrls = readFileSync(QUEUE_FILE, 'utf-8').trim().split('\n')
    .map(u => u.trim())
    .filter(u => u && !u.startsWith('#') && u.startsWith('https://'));

  // Load progress
  let progress = {
    submitted: [],       // URLs successfully submitted to Indexing API
    alreadyIndexed: [],  // URLs found already indexed (skipped)
    lastRun: null,
    runs: [],
  };
  if (existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
    // Migrate old format
    if (!progress.alreadyIndexed) progress.alreadyIndexed = [];
  }

  // Filter out already-handled URLs (submitted OR confirmed indexed)
  const handledSet = new Set([...progress.submitted, ...progress.alreadyIndexed]);
  const remaining = allUrls.filter(url => !handledSet.has(url));

  console.log(`\n=== Smart Indexer (with Index Check) ===`);
  console.log(`Total queue: ${allUrls.length}`);
  console.log(`Already submitted: ${progress.submitted.length}`);
  console.log(`Already indexed (skipped): ${progress.alreadyIndexed.length}`);
  console.log(`Remaining to process: ${remaining.length}`);
  console.log(`Today's batch size: ${Math.min(batchSize, remaining.length)}`);

  if (remaining.length === 0) {
    console.log('\nAll URLs have been processed! Nothing to do.');
    return;
  }

  // Get tokens for both APIs
  const indexingToken = await getAccessToken('https://www.googleapis.com/auth/indexing');
  const inspectionToken = await getAccessToken('https://www.googleapis.com/auth/webmasters');
  console.log('Tokens acquired.');

  // Get verified domains
  const verifiedDomains = await getVerifiedDomains(inspectionToken);
  console.log(`Verified domains: ${verifiedDomains.size}`);
  for (const d of verifiedDomains) console.log(`  - ${d}`);

  const todayBatch = remaining.slice(0, batchSize);
  console.log(`\nProcessing ${todayBatch.length} URLs...\n`);

  let submitted = 0;
  let skippedIndexed = 0;
  let skippedUnverified = 0;
  let failed = 0;
  let rateLimited = 0;
  const failedUrls = [];

  for (let i = 0; i < todayBatch.length; i++) {
    const url = todayBatch[i];
    const origin = new URL(url).origin;

    // Skip unverified domains
    if (!verifiedDomains.has(origin)) {
      skippedUnverified++;
      progress.submitted.push(url); // Mark handled so we don't retry
      if (skippedUnverified <= 3) console.log(`  SKIP (unverified): ${url}`);
      continue;
    }

    // Step 1: Check if already indexed
    const indexStatus = await checkIndexStatus(url, inspectionToken);
    await sleep(300); // Respect inspection API rate limits

    if (indexStatus === 'indexed') {
      skippedIndexed++;
      progress.alreadyIndexed.push(url);
      if (skippedIndexed <= 10) console.log(`  INDEXED (skip): ${url}`);
      continue;
    }

    // Step 2: Not indexed — submit to Indexing API
    try {
      const result = await submitUrl(url, indexingToken);

      if (result.status === 200) {
        submitted++;
        progress.submitted.push(url);
        if (submitted <= 10 || submitted % 25 === 0) {
          console.log(`  SUBMITTED [${submitted}]: ${url}`);
        }
      } else if (result.status === 429) {
        rateLimited++;
        console.log(`  RATE LIMITED at URL #${i + 1}. Stopping to preserve quota.`);
        break;
      } else {
        failed++;
        failedUrls.push({ url, status: result.status, error: result.data?.error?.message || '' });
        progress.submitted.push(url); // Mark handled
        console.log(`  FAILED [${result.status}]: ${url}`);
      }
    } catch (e) {
      failed++;
      console.log(`  ERROR: ${url} - ${e.message}`);
    }

    // Throttle between submissions
    await sleep(600);

    // Progress log
    if ((i + 1) % 50 === 0) {
      console.log(`\n  --- Progress: ${i + 1}/${todayBatch.length} (${submitted} submitted, ${skippedIndexed} already indexed, ${skippedUnverified} unverified, ${failed} failed) ---\n`);
    }
  }

  // Save progress
  progress.lastRun = new Date().toISOString();
  progress.runs = progress.runs || [];
  progress.runs.push({
    date: new Date().toISOString(),
    processed: Math.min(todayBatch.length, submitted + skippedIndexed + skippedUnverified + failed + rateLimited),
    submitted,
    skippedIndexed,
    skippedUnverified,
    failed,
    rateLimited,
    failedUrls,
  });

  writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

  const totalHandled = progress.submitted.length + progress.alreadyIndexed.length;
  console.log(`\n=== Run Complete ===`);
  console.log(`New submissions: ${submitted}`);
  console.log(`Already indexed (saved quota): ${skippedIndexed}`);
  console.log(`Unverified domains (skipped): ${skippedUnverified}`);
  console.log(`Failed: ${failed}`);
  console.log(`Rate limited: ${rateLimited}`);
  console.log(`Total handled: ${totalHandled}/${allUrls.length}`);
  console.log(`Remaining: ${allUrls.length - totalHandled}`);
}

main().catch(err => { console.error(err); process.exit(1); });
