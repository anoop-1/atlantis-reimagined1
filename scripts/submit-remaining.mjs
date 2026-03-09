#!/usr/bin/env node
/**
 * Submit Remaining URLs to Google Indexing API
 * =============================================
 * Compares sitemap.xml against indexing-progress.json, submits everything missing.
 *
 * USAGE:
 *   node scripts/submit-remaining.mjs              # Submit all unsubmitted URLs
 *   node scripts/submit-remaining.mjs --dry-run    # Preview without submitting
 *   node scripts/submit-remaining.mjs --limit 50   # Submit max 50 URLs
 *   node scripts/submit-remaining.mjs --status     # Show what's missing
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITEMAP_PATH = join(__dirname, '..', 'public', 'sitemap.xml');
const DIST_SITEMAP_PATH = join(__dirname, '..', 'dist', 'sitemap.xml');
const PROGRESS_PATH = join(__dirname, 'indexing-progress.json');
const CREDENTIALS_PATH = join(__dirname, 'gsc-service-account.json');

// ─── Parse CLI args ──────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const statusOnly = args.includes('--status');
const limitIdx = args.indexOf('--limit');
const limit = limitIdx !== -1 ? parseInt(args[limitIdx + 1], 10) : Infinity;

// ─── Extract URLs from sitemap ──────────────────────────────────────────────
function getSitemapUrls() {
  const sitemapPath = existsSync(SITEMAP_PATH) ? SITEMAP_PATH : DIST_SITEMAP_PATH;
  if (!existsSync(sitemapPath)) {
    console.error('ERROR: No sitemap.xml found in public/ or dist/');
    process.exit(1);
  }
  const xml = readFileSync(sitemapPath, 'utf-8');
  const urls = [];
  const regex = /<loc>(.*?)<\/loc>/g;
  let match;
  while ((match = regex.exec(xml)) !== null) {
    urls.push(match[1]);
  }
  return urls;
}

// ─── Load progress ──────────────────────────────────────────────────────────
function loadProgress() {
  if (!existsSync(PROGRESS_PATH)) {
    return { submitted: {}, lastDay: 0 };
  }
  return JSON.parse(readFileSync(PROGRESS_PATH, 'utf-8'));
}

function saveProgress(progress) {
  writeFileSync(PROGRESS_PATH, JSON.stringify(progress, null, 2), 'utf-8');
}

// ─── Google Indexing API ────────────────────────────────────────────────────
async function getAccessToken(credentials) {
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
  const encode = (obj) => Buffer.from(JSON.stringify(obj)).toString('base64url');
  const unsignedToken = `${encode(header)}.${encode(claim)}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsignedToken);
  const signature = sign.sign(credentials.private_key, 'base64url');
  const jwt = `${unsignedToken}.${signature}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  if (!res.ok) throw new Error(`Token exchange failed: ${res.status} ${await res.text()}`);
  return (await res.json()).access_token;
}

async function submitUrl(url, accessToken) {
  const res = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  const data = await res.json();
  return { status: res.status, data };
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// ─── Main ───────────────────────────────────────────────────────────────────
async function main() {
  const sitemapUrls = getSitemapUrls();
  const progress = loadProgress();
  const alreadySubmitted = new Set(Object.keys(progress.submitted));

  const missing = sitemapUrls.filter((url) => !alreadySubmitted.has(url));

  console.log('\n=== Indexing Gap Analysis ===');
  console.log(`Sitemap URLs:       ${sitemapUrls.length}`);
  console.log(`Already submitted:  ${alreadySubmitted.size}`);
  console.log(`Not yet submitted:  ${missing.length}`);

  if (missing.length === 0) {
    console.log('\nAll sitemap URLs have been submitted. Nothing to do.');
    return;
  }

  // Categorize missing URLs
  const newPages = missing.filter((u) => {
    const path = u.replace('https://atlantisndt.com', '');
    return (
      path.startsWith('/tools') ||
      path.startsWith('/resources/') ||
      path.startsWith('/ndt-industry-statistics') ||
      path.startsWith('/ndt-complete-guide') ||
      path.startsWith('/api-inspector-guide') ||
      path.startsWith('/ndt-standards-comparison') ||
      path.startsWith('/ndt-equipment-guide') ||
      path.startsWith('/ndt-learning-path')
    );
  });
  const originalPages = missing.filter((u) => !newPages.includes(u));

  console.log(`  - New pages (today's build):  ${newPages.length}`);
  console.log(`  - Original pages (baseline):  ${originalPages.length}`);

  if (statusOnly) {
    console.log('\n--- New Pages ---');
    newPages.forEach((u) => console.log(`  ${u.replace('https://atlantisndt.com', '')}`));
    console.log('\n--- Original Pages ---');
    originalPages.forEach((u) => console.log(`  ${u.replace('https://atlantisndt.com', '')}`));
    return;
  }

  // Submit new pages first, then original pages
  const toSubmit = [...newPages, ...originalPages].slice(0, limit);

  console.log(`\nWill submit: ${toSubmit.length} URLs`);
  console.log(`Mode: ${dryRun ? 'DRY RUN' : 'LIVE'}\n`);

  if (dryRun) {
    toSubmit.forEach((url, i) => {
      const tag = newPages.includes(url) ? 'NEW' : 'ORIG';
      console.log(`  [${i + 1}/${toSubmit.length}] [${tag}] ${url.replace('https://atlantisndt.com', '')}`);
    });
    console.log(`\nDry run complete. ${toSubmit.length} URLs would be submitted.`);
    return;
  }

  // Load credentials
  if (!existsSync(CREDENTIALS_PATH)) {
    console.error('ERROR: gsc-service-account.json not found.');
    process.exit(1);
  }

  const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));
  console.log(`Authenticating as: ${credentials.client_email}\n`);

  let accessToken;
  try {
    accessToken = await getAccessToken(credentials);
    console.log('Authentication successful.\n');
  } catch (err) {
    console.error(`Authentication failed: ${err.message}`);
    process.exit(1);
  }

  let success = 0;
  let failed = 0;
  const startTime = Date.now();

  for (let i = 0; i < toSubmit.length; i++) {
    const url = toSubmit[i];
    const tag = newPages.includes(url) ? 'NEW' : 'ORIG';

    try {
      const result = await submitUrl(url, accessToken);
      if (result.status === 200) {
        console.log(`  [${i + 1}/${toSubmit.length}] OK   [${tag}] ${url.replace('https://atlantisndt.com', '')}`);
        progress.submitted[url] = new Date().toISOString();
        success++;
      } else {
        console.log(`  [${i + 1}/${toSubmit.length}] FAIL [${tag}] ${url.replace('https://atlantisndt.com', '')} — ${result.status}: ${JSON.stringify(result.data)}`);
        failed++;
      }
    } catch (err) {
      console.log(`  [${i + 1}/${toSubmit.length}] ERR  [${tag}] ${url.replace('https://atlantisndt.com', '')} — ${err.message}`);
      failed++;
    }

    // Save progress every 10 URLs (crash-safe)
    if ((i + 1) % 10 === 0) {
      saveProgress(progress);
    }

    // Rate limit: ~1 request/second
    if (i < toSubmit.length - 1) {
      await sleep(1100);
    }
  }

  saveProgress(progress);

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(0);
  console.log('\n=== Summary ===');
  console.log(`Submitted:  ${success}`);
  console.log(`Failed:     ${failed}`);
  console.log(`Time:       ${elapsed}s`);
  console.log(`Total indexed: ${Object.keys(progress.submitted).length}/${sitemapUrls.length}`);
}

main().catch((err) => {
  console.error('FATAL:', err.message);
  process.exit(1);
});
