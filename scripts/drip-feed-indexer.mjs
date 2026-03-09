#!/usr/bin/env node
/**
 * Drip-Feed Indexer - Submits URLs in daily batches respecting Google's 200/day quota
 * Tracks progress so it resumes where it left off
 * Usage: node drip-feed-indexer.mjs [batch_size]
 * Default: 180 URLs per run (leaves buffer for other submissions)
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createSign } from 'crypto';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');
const QUEUE_FILE = join(__dirname, 'all-new-urls-march-2026.txt');
const PROGRESS_FILE = join(__dirname, 'drip-feed-progress.json');

const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
const batchSize = parseInt(process.argv[2] || '180');

// Load progress
let progress = { submitted: [], lastRun: null, totalSubmitted: 0 };
if (existsSync(PROGRESS_FILE)) {
  progress = JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
}

async function getAccessToken() {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600, iat: now,
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
    .filter(u => u.startsWith('https://atlantisndt.com/'));
  
  const remaining = allUrls.filter(u => !progress.submitted.includes(u));
  
  console.log(`\n📡 Drip-Feed Indexer`);
  console.log(`   Total URLs: ${allUrls.length}`);
  console.log(`   Already submitted: ${progress.submitted.length}`);
  console.log(`   Remaining: ${remaining.length}`);
  console.log(`   Today's batch: ${Math.min(batchSize, remaining.length)}\n`);
  
  if (remaining.length === 0) {
    console.log('✅ All URLs have been submitted! Nothing to do.');
    return;
  }

  const token = await getAccessToken();
  console.log(`✅ Authenticated\n`);

  const batch = remaining.slice(0, batchSize);
  let ok = 0, fail = 0;

  for (let i = 0; i < batch.length; i++) {
    try {
      const { status } = await submitUrl(batch[i], token);
      if (status === 200) {
        ok++;
        progress.submitted.push(batch[i]);
        process.stdout.write(`\r   ✅ ${ok}/${batch.length} submitted`);
      } else if (status === 429) {
        console.log(`\n   ⚠️  Rate limited at ${i + 1} URLs. Will continue tomorrow.`);
        break;
      } else {
        fail++;
      }
    } catch (err) {
      fail++;
    }
    if (i % 10 === 9) await sleep(3500);
  }

  progress.lastRun = new Date().toISOString();
  progress.totalSubmitted = progress.submitted.length;
  writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

  console.log(`\n\n📊 Today's Results: ✅ ${ok} submitted, ❌ ${fail} failed`);
  console.log(`   📈 Total progress: ${progress.submitted.length}/${allUrls.length} (${Math.round(progress.submitted.length/allUrls.length*100)}%)`);
  console.log(`   📅 Run again tomorrow to submit the next batch`);
}

main().catch(console.error);
