#!/usr/bin/env node
/**
 * Smart URL Indexer - Only submits unindexed URLs
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

async function getAccessToken() {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
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

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  // Load queue
  const allUrls = readFileSync(QUEUE_FILE, 'utf-8').trim().split('\n');

  // Load progress
  let progress = { submitted: [], lastRun: null, runs: [] };
  if (existsSync(PROGRESS_FILE)) {
    progress = JSON.parse(readFileSync(PROGRESS_FILE, 'utf-8'));
  }

  // Filter out already-submitted URLs
  const submittedSet = new Set(progress.submitted);
  const remaining = allUrls.filter(url => !submittedSet.has(url));

  console.log(`\n=== Smart Indexer ===`);
  console.log(`Total queue: ${allUrls.length}`);
  console.log(`Already submitted: ${progress.submitted.length}`);
  console.log(`Remaining: ${remaining.length}`);
  console.log(`Today's batch size: ${Math.min(batchSize, remaining.length)}`);

  if (remaining.length === 0) {
    console.log('\nAll URLs have been submitted! Nothing to do.');
    return;
  }

  const todayBatch = remaining.slice(0, batchSize);
  const token = await getAccessToken();
  console.log('Token acquired. Starting submissions...\n');

  let success = 0;
  let failed = 0;
  let rateLimited = 0;
  const failedUrls = [];

  for (let i = 0; i < todayBatch.length; i++) {
    const url = todayBatch[i];
    try {
      const result = await submitUrl(url, token);

      if (result.status === 200) {
        success++;
        progress.submitted.push(url);
      } else if (result.status === 429) {
        rateLimited++;
        console.log(`  RATE LIMITED at URL #${i + 1}. Stopping to preserve quota.`);
        // Don't retry - stop and save progress
        break;
      } else {
        failed++;
        failedUrls.push({ url, status: result.status, error: result.data?.error?.message || '' });
        // Still mark as submitted to avoid re-trying known failures
        progress.submitted.push(url);
      }

      if ((i + 1) % 25 === 0) {
        console.log(`  Progress: ${i + 1}/${todayBatch.length} (${success} OK, ${failed} fail, ${rateLimited} rate-limited)`);
      }
    } catch (e) {
      failed++;
      console.log(`  ERROR: ${e.message}`);
    }

    // Throttle
    await sleep(600);
  }

  // Save progress
  progress.lastRun = new Date().toISOString();
  progress.runs.push({
    date: new Date().toISOString(),
    attempted: Math.min(todayBatch.length, success + failed + rateLimited),
    success,
    failed,
    rateLimited,
    failedUrls,
  });

  writeFileSync(PROGRESS_FILE, JSON.stringify(progress, null, 2));

  console.log(`\n=== Run Complete ===`);
  console.log(`Submitted: ${success}`);
  console.log(`Failed: ${failed}`);
  console.log(`Rate limited: ${rateLimited}`);
  console.log(`Total submitted so far: ${progress.submitted.length}/${allUrls.length}`);
  console.log(`Remaining: ${allUrls.length - progress.submitted.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });
