#!/usr/bin/env node
/**
 * Drip-Feed Indexer - Submits URLs in daily batches respecting Google's 200/day quota
 * Tracks progress so it resumes where it left off
 * Usage: node drip-feed-indexer.mjs [batch_size]
 * Default: 200 URLs per run
 *
 * IMPORTANT: Pre-checks domain ownership before submitting to avoid wasting quota
 * on 403 Permission Denied errors (which still count against the 200/day limit).
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createSign } from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const QUEUE_FILE = join(__dirname, 'indexing-queue-smart.txt');
const PROGRESS_FILE = join(__dirname, 'drip-feed-progress.json');

const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
const batchSize = parseInt(process.argv[2] || '200');

// Load progress
let progress = { submitted: [], lastRun: null, totalSubmitted: 0 };
if (existsSync(PROGRESS_FILE)) {
  progress = JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
}

function getJWT(scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: credentials.client_email, scope,
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600, iat: now,
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
 * Pre-check: Get list of verified GSC properties (siteOwner only).
 * URLs from unverified domains will be skipped to avoid wasting quota.
 */
async function getVerifiedDomains() {
  const wmToken = await getAccessToken('https://www.googleapis.com/auth/webmasters');
  const res = await fetch('https://www.googleapis.com/webmasters/v3/sites', {
    headers: { Authorization: `Bearer ${wmToken}` },
  });
  const data = await res.json();
  if (!data.siteEntry) return new Set();
  return new Set(
    data.siteEntry
      .filter(s => s.permissionLevel === 'siteOwner')
      .map(s => s.siteUrl.replace(/\/$/, ''))
  );
}

async function submitUrl(url, token) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  return { status: res.status, data: await res.json() };
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const allUrls = readFileSync(QUEUE_FILE, 'utf-8').trim().split('\n')
    .filter(u => u.startsWith('https://'));

  const remaining = allUrls.filter(u => !progress.submitted.includes(u));

  console.log(`\n📡 Drip-Feed Indexer`);
  console.log(`   Total URLs: ${allUrls.length}`);
  console.log(`   Already submitted: ${progress.submitted.length}`);
  console.log(`   Remaining: ${remaining.length}`);
  console.log(`   Target successes: ${Math.min(batchSize, remaining.length)}\n`);

  if (remaining.length === 0) {
    console.log('✅ All URLs have been submitted! Nothing to do.');
    return;
  }

  // Step 1: Pre-check verified domains to avoid wasting quota
  console.log('🔍 Checking verified GSC properties...');
  const verifiedDomains = await getVerifiedDomains();
  console.log(`   Found ${verifiedDomains.size} verified properties\n`);

  // Filter remaining URLs to only include verified domains
  const submittable = [];
  const skipped = [];
  const skippedDomains = new Set();

  for (const url of remaining) {
    const origin = new URL(url).origin;
    if (verifiedDomains.has(origin)) {
      submittable.push(url);
    } else {
      skipped.push(url);
      skippedDomains.add(origin);
    }
  }

  if (skippedDomains.size > 0) {
    console.log(`⚠️  Skipping ${skipped.length} URLs from ${skippedDomains.size} unverified domains:`);
    for (const d of skippedDomains) {
      const count = skipped.filter(u => u.startsWith(d)).length;
      console.log(`   - ${d} (${count} URLs)`);
    }
    console.log();
  }

  if (submittable.length === 0) {
    console.log('❌ No submittable URLs — all remaining URLs are from unverified domains.');
    console.log('   Add these domains to GSC and verify ownership first.');
    return;
  }

  console.log(`📤 Submitting up to ${Math.min(batchSize, submittable.length)} URLs from verified domains...\n`);

  const token = await getAccessToken();
  console.log(`✅ Authenticated\n`);

  const pool = submittable;
  let ok = 0, fail = 0, attempted = 0;
  const failedUrls = [];

  for (let i = 0; i < pool.length && ok < batchSize; i++) {
    attempted++;
    try {
      const { status, data } = await submitUrl(pool[i], token);
      if (status === 200) {
        ok++;
        progress.submitted.push(pool[i]);
        process.stdout.write(`\r   ✅ ${ok}/${Math.min(batchSize, submittable.length)} submitted (${fail} failed so far)`);
      } else if (status === 429) {
        console.log(`\n   ⚠️  Rate limited after ${ok} successes (${attempted} total attempts). Will continue tomorrow.`);
        break;
      } else if (status === 403) {
        // Permission denied — domain not properly verified, skip all URLs from this domain
        const failOrigin = new URL(pool[i]).origin;
        console.log(`\n   🚫 403 for ${failOrigin} — skipping remaining URLs from this domain`);
        // Remove all URLs from this domain from the pool to avoid wasting more quota
        while (i + 1 < pool.length && pool[i + 1].startsWith(failOrigin)) {
          i++;
          skipped.push(pool[i]);
        }
        fail++;
        failedUrls.push(pool[i]);
      } else {
        fail++;
        failedUrls.push(pool[i]);
      }
    } catch (err) {
      fail++;
      failedUrls.push(pool[i]);
    }
    if (attempted % 10 === 0) await sleep(3500);
  }

  progress.lastRun = new Date().toISOString();
  progress.totalSubmitted = progress.submitted.length;
  writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

  console.log(`\n\n📊 Today's Results: ✅ ${ok} submitted, ❌ ${fail} failed, ⏭️ ${skipped.length} skipped (${attempted} API calls used)`);
  console.log(`   📈 Total progress: ${progress.submitted.length}/${allUrls.length} (${Math.round(progress.submitted.length/allUrls.length*100)}%)`);
  if (failedUrls.length > 0) {
    console.log(`   ❌ Failed URLs:`);
    failedUrls.forEach(u => console.log(`      ${u}`));
  }
  console.log(`   📅 Run again tomorrow to submit the next batch`);
}

main().catch(console.error);
