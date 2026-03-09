#!/usr/bin/env node
/**
 * Submit new March 2026 URLs to Google Indexing API
 * Submits both new method+location pages and satellite site URLs
 */
import { readFileSync, writeFileSync } from 'fs';
import { createSign } from 'crypto';

const CREDENTIALS_PATH = new URL('./gsc-service-account.json', import.meta.url).pathname;
const credentials = JSON.parse(readFileSync(CREDENTIALS_PATH, 'utf-8'));

const batchSize = parseInt(process.argv[2] || '200');
let submitted = 0, failed = 0, skipped = 0;

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
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  return { status: res.status, data: await res.json() };
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  // Load only atlantisndt.com URLs (not satellite sites - those need their own GSC verification)
  const urlFile = new URL('./all-new-urls-march-2026.txt', import.meta.url).pathname;
  const allUrls = readFileSync(urlFile, 'utf-8').trim().split('\n')
    .filter(u => u.startsWith('https://atlantisndt.com/'));
  
  console.log(`\n📡 Google Indexing API - New URLs Submission`);
  console.log(`   Total atlantisndt.com URLs: ${allUrls.length}`);
  console.log(`   Batch size: ${batchSize}\n`);

  const token = await getAccessToken();
  console.log(`✅ Authenticated as: ${credentials.client_email}\n`);

  const batch = allUrls.slice(0, batchSize);
  const results = { submitted: [], failed: [], timestamp: new Date().toISOString() };

  for (let i = 0; i < batch.length; i++) {
    const url = batch[i];
    try {
      const { status, data } = await submitUrl(url, token);
      if (status === 200) {
        submitted++;
        results.submitted.push(url);
        process.stdout.write(`\r   ✅ ${submitted}/${batch.length} submitted`);
      } else {
        failed++;
        results.failed.push({ url, status, error: data });
        process.stdout.write(`\r   ❌ Failed: ${url} (${status})`);
      }
    } catch (err) {
      failed++;
      results.failed.push({ url, error: err.message });
    }
    // Rate limit: 200 requests/min max
    if (i % 10 === 9) await sleep(3500);
  }

  console.log(`\n\n📊 Results:`);
  console.log(`   ✅ Submitted: ${submitted}`);
  console.log(`   ❌ Failed: ${failed}`);
  console.log(`   📝 Remaining: ${allUrls.length - batch.length}`);

  writeFileSync(
    new URL('./indexing-results-march-2026.json', import.meta.url).pathname,
    JSON.stringify(results, null, 2)
  );
  console.log(`\n💾 Results saved to scripts/indexing-results-march-2026.json`);
}

main().catch(console.error);
