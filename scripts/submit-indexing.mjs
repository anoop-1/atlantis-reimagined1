#!/usr/bin/env node
/**
 * Google Search Console URL Indexing Script
 * ==========================================
 * Submits URLs to Google for indexing via the Indexing API.
 *
 * SETUP:
 * 1. Go to https://console.cloud.google.com/
 * 2. Create a project (or use existing)
 * 3. Enable "Web Search Indexing API" (aka Indexing API)
 * 4. Go to IAM & Admin > Service Accounts > Create Service Account
 * 5. Create a JSON key and save it as: scripts/gsc-service-account.json
 * 6. Copy the service account email (e.g., name@project.iam.gserviceaccount.com)
 * 7. In Google Search Console > Settings > Users and permissions > Add user
 *    Add the service account email as "Owner"
 * 8. Run: node scripts/submit-indexing.mjs [--day N] [--dry-run]
 *
 * USAGE:
 *   node scripts/submit-indexing.mjs              # Submit today's batch
 *   node scripts/submit-indexing.mjs --day 1      # Submit day 1 batch
 *   node scripts/submit-indexing.mjs --dry-run    # Preview without submitting
 *   node scripts/submit-indexing.mjs --status      # Show progress summary
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const QUEUE_PATH = join(__dirname, 'indexing-queue.json');
const PROGRESS_PATH = join(__dirname, 'indexing-progress.json');
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');

// ─── Parse CLI args ──────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const showStatus = args.includes('--status');
const dayIndex = args.indexOf('--day');
const specifiedDay = dayIndex !== -1 ? parseInt(args[dayIndex + 1], 10) : null;

// ─── Load data ───────────────────────────────────────────────────────────────

function loadQueue() {
  if (!existsSync(QUEUE_PATH)) {
    console.error('ERROR: indexing-queue.json not found. Run generate-indexing-queue.py first.');
    process.exit(1);
  }
  return JSON.parse(readFileSync(QUEUE_PATH, 'utf-8'));
}

function loadProgress() {
  if (!existsSync(PROGRESS_PATH)) {
    return { submitted: {}, lastDay: 0 };
  }
  return JSON.parse(readFileSync(PROGRESS_PATH, 'utf-8'));
}

function saveProgress(progress) {
  writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf-8');
}

// ─── Google Indexing API ─────────────────────────────────────────────────────

async function getAccessToken(credentials) {
  // Create JWT
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = {
    iss: credentials.client_email,
    scope: 'https://www.googleapis.com/auth/indexing',
    aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600,
    iat: now,
  };

  const { createSign } = await import('crypto');

  const encode = (obj) =>
    Buffer.from(JSON.stringify(obj)).toString('base64url');

  const unsignedToken = `${encode(header)}.${encode(claim)}`;

  const sign = createSign('RSA-SHA256');
  sign.update(unsignedToken);
  const signature = sign.sign(credentials.private_key, 'base64url');

  const jwt = `${unsignedToken}.${signature}`;

  // Exchange JWT for access token
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token exchange failed: ${res.status} ${text}`);
  }

  const data = await res.json();
  return data.access_token;
}

async function submitUrl(url, accessToken) {
  const res = await fetch(
    'https://indexing.googleapis.com/v3/urlNotifications:publish',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ url, type: 'URL_UPDATED' }),
    }
  );

  const data = await res.json();
  return { status: res.status, data };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  const queue = loadQueue();
  const progress = loadProgress();

  // Status mode
  if (showStatus) {
    const submitted = Object.keys(progress.submitted).length;
    const total = queue.new_pages_count;
    console.log(`\nIndexing Progress: ${submitted}/${total} URLs submitted`);
    console.log(`Last batch day: ${progress.lastDay}`);
    console.log(`Remaining: ${total - submitted} URLs over ${queue.total_days_needed - progress.lastDay} days\n`);

    for (const batch of queue.batches) {
      const done = batch.urls.filter((u) => progress.submitted[u]).length;
      const icon = done === batch.urls.length ? 'DONE' : done > 0 ? 'PARTIAL' : 'PENDING';
      console.log(
        `  Day ${batch.day} (${batch.date}) [${icon}]: ${done}/${batch.urls.length} - ${batch.priority}`
      );
    }
    return;
  }

  // Determine which day to submit
  let targetDay;
  if (specifiedDay) {
    targetDay = specifiedDay;
  } else {
    // Find today's date in the queue
    const today = new Date().toISOString().split('T')[0];
    const todayBatch = queue.batches.find((b) => b.date === today);
    if (todayBatch) {
      targetDay = todayBatch.day;
    } else {
      // Use next unsubmitted day
      targetDay = progress.lastDay + 1;
    }
  }

  const batch = queue.batches.find((b) => b.day === targetDay);
  if (!batch) {
    console.log(`No batch found for day ${targetDay}. All ${queue.total_days_needed} days may be complete.`);
    return;
  }

  // Filter out already-submitted URLs
  const toSubmit = batch.urls.filter((u) => !progress.submitted[u]);

  console.log(`\n=== Day ${batch.day} (${batch.date}) - ${batch.priority} ===`);
  console.log(`URLs in batch: ${batch.urls.length}`);
  console.log(`Already submitted: ${batch.urls.length - toSubmit.length}`);
  console.log(`To submit: ${toSubmit.length}`);
  console.log(`Mode: ${dryRun ? 'DRY RUN' : 'LIVE'}\n`);

  if (toSubmit.length === 0) {
    console.log('All URLs in this batch already submitted. Use --day N for another batch.');
    return;
  }

  if (dryRun) {
    for (const url of toSubmit) {
      console.log(`  [DRY RUN] Would submit: ${url}`);
    }
    console.log(`\nDry run complete. ${toSubmit.length} URLs would be submitted.`);
    return;
  }

  // Load credentials
  if (!existsSync(CREDENTIALS_PATH)) {
    console.error('ERROR: gsc-service-account.json not found.');
    console.error('See setup instructions at the top of this file.');
    console.error('\nRunning in dry-run mode instead:\n');
    for (const url of toSubmit) {
      console.log(`  [NO CREDS] Would submit: ${url}`);
    }
    return;
  }

  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  console.log(`Authenticating as: ${credentials.client_email}\n`);

  let accessToken;
  try {
    accessToken = await getAccessToken(credentials);
  } catch (err) {
    console.error(`Authentication failed: ${err.message}`);
    process.exit(1);
  }

  let success = 0;
  let failed = 0;

  for (const url of toSubmit) {
    try {
      const result = await submitUrl(url, accessToken);
      if (result.status === 200) {
        console.log(`  OK: ${url}`);
        progress.submitted[url] = new Date().toISOString();
        success++;
      } else {
        console.log(`  FAIL (${result.status}): ${url} - ${JSON.stringify(result.data)}`);
        failed++;
      }
    } catch (err) {
      console.log(`  ERROR: ${url} - ${err.message}`);
      failed++;
    }

    // Rate limit: 1 second between requests
    await sleep(1000);
  }

  progress.lastDay = Math.max(progress.lastDay, targetDay);
  saveProgress(progress);

  console.log(`\n=== Summary ===`);
  console.log(`Submitted: ${success}`);
  console.log(`Failed: ${failed}`);
  console.log(`Total progress: ${Object.keys(progress.submitted).length}/${queue.new_pages_count}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
