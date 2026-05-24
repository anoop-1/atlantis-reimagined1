#!/usr/bin/env node
/**
 * Submit 20 US state consulting pages to Google Indexing API.
 * These pages just had noindex removed (2026-05-18 fix) and need immediate crawl.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CRED = join(__dirname, 'gsc-service-account.json');
const PROGRESS = join(__dirname, 'gsc-priority-progress.json');

const STATE_URLS = [
  'https://atlantisndt.com/ndt-consulting-texas',
  'https://atlantisndt.com/ndt-consulting-california',
  'https://atlantisndt.com/ndt-consulting-louisiana',
  'https://atlantisndt.com/ndt-consulting-ohio',
  'https://atlantisndt.com/ndt-consulting-pennsylvania',
  'https://atlantisndt.com/ndt-consulting-colorado',
  'https://atlantisndt.com/ndt-consulting-michigan',
  'https://atlantisndt.com/ndt-consulting-illinois',
  'https://atlantisndt.com/ndt-consulting-new-york',
  'https://atlantisndt.com/ndt-consulting-florida',
  'https://atlantisndt.com/ndt-consulting-washington',
  'https://atlantisndt.com/ndt-consulting-georgia',
  'https://atlantisndt.com/ndt-consulting-new-jersey',
  'https://atlantisndt.com/ndt-consulting-north-carolina',
  'https://atlantisndt.com/ndt-consulting-virginia',
  'https://atlantisndt.com/ndt-consulting-tennessee',
  'https://atlantisndt.com/ndt-consulting-alabama',
  'https://atlantisndt.com/ndt-consulting-oklahoma',
  'https://atlantisndt.com/ndt-consulting-minnesota',
  'https://atlantisndt.com/ndt-consulting-wisconsin',
];

async function getToken(c) {
  const now = Math.floor(Date.now() / 1000);
  const scope = 'https://www.googleapis.com/auth/indexing';
  const head = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
  const claim = Buffer.from(JSON.stringify({ iss: c.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now })).toString('base64url');
  const unsigned = `${head}.${claim}`;
  const sig = createSign('RSA-SHA256').update(unsigned).sign(c.private_key, 'base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${sig}`,
  });
  if (!r.ok) throw new Error(`token: ${r.status} ${await r.text()}`);
  return (await r.json()).access_token;
}

async function submitUrl(token, url) {
  const r = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    body: JSON.stringify({ url, type: 'URL_UPDATED' }),
  });
  const body = await r.json();
  if (!r.ok) {
    if (r.status === 429) return { status: 'rate_limit' };
    return { status: 'error', code: r.status, message: JSON.stringify(body) };
  }
  return { status: 'ok', notifyTime: body.urlNotificationMetadata?.latestUpdate?.notifyTime };
}

async function main() {
  const cred = JSON.parse(readFileSync(CRED, 'utf-8'));
  const token = await getToken(cred);

  const progress = JSON.parse(readFileSync(PROGRESS, 'utf-8'));
  const alreadyDone = new Set([...(progress.submitted || []), ...(progress.alreadyIndexed || [])]);

  const toSubmit = STATE_URLS.filter(u => !alreadyDone.has(u));
  console.log(`Submitting ${toSubmit.length} state URLs...`);

  let submitted = 0;
  let failed = 0;

  for (const url of toSubmit) {
    const result = await submitUrl(token, url);
    if (result.status === 'rate_limit') {
      console.log(`[RATE LIMIT] Stopped at ${url}`);
      break;
    } else if (result.status === 'error') {
      console.log(`[ERROR] ${url}: ${result.message}`);
      failed++;
    } else {
      console.log(`[OK] ${url} — notifyTime: ${result.notifyTime}`);
      progress.submitted = [...(progress.submitted || []), url];
      submitted++;
    }
    // Brief delay to avoid rate limits
    await new Promise(r => setTimeout(r, 200));
  }

  writeFileSync(PROGRESS, JSON.stringify(progress, null, 2));
  console.log(`\nDone: ${submitted} submitted, ${failed} failed`);
  console.log(`Progress saved to ${PROGRESS}`);
}

main().catch(e => { console.error(e); process.exit(1); });
