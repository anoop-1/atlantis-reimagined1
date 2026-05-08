// Pull rich-result issues + 28-day search analytics for atlantisndt.com.
// Usage: node scripts/gsc-rich-results-audit.mjs
import { readFileSync, writeFileSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const credentials = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));

async function getToken(scope) {
  const header = { alg: 'RS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const claim = { iss: credentials.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now };
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const unsigned = `${enc(header)}.${enc(claim)}`;
  const sig = createSign('RSA-SHA256').update(unsigned).sign(credentials.private_key, 'base64url');
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${sig}`,
  });
  const j = await r.json();
  if (!j.access_token) throw new Error('auth failed: ' + JSON.stringify(j));
  return j.access_token;
}

const SITE = 'sc-domain:atlantisndt.com';

async function inspect(url, token) {
  const r = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ inspectionUrl: url, siteUrl: SITE }),
  });
  return r.json();
}

async function searchAnalytics(token, body) {
  const r = await fetch(`https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  return r.json();
}

const today = new Date();
const startDate = new Date(today.getTime() - 28 * 86400000).toISOString().slice(0, 10);
const endDate = new Date(today.getTime() - 2 * 86400000).toISOString().slice(0, 10);

const main = async () => {
  const token = await getToken('https://www.googleapis.com/auth/webmasters.readonly');
  console.log('=== URL Inspection: /digital-twins ===');
  const insp = await inspect('https://atlantisndt.com/digital-twins', token);
  console.log(JSON.stringify(insp, null, 2));

  console.log('\n=== Top 30 pages by impressions (28d) ===');
  const pages = await searchAnalytics(token, {
    startDate, endDate, dimensions: ['page'], rowLimit: 30, dataState: 'all'
  });
  if (pages.rows) for (const r of pages.rows) {
    console.log(`${r.impressions}  ${r.clicks}  ${(r.ctr * 100).toFixed(2)}%  pos=${r.position.toFixed(1)}  ${r.keys[0]}`);
  }

  console.log('\n=== Top 50 queries (28d) ===');
  const queries = await searchAnalytics(token, {
    startDate, endDate, dimensions: ['query'], rowLimit: 50, dataState: 'all'
  });
  if (queries.rows) for (const r of queries.rows) {
    console.log(`${r.impressions}  ${r.clicks}  ${(r.ctr * 100).toFixed(2)}%  pos=${r.position.toFixed(1)}  ${r.keys[0]}`);
  }

  console.log('\n=== Pages with 0 clicks but >50 impressions (28d) — CTR bleeders ===');
  const all = await searchAnalytics(token, {
    startDate, endDate, dimensions: ['page'], rowLimit: 1000, dataState: 'all'
  });
  const bleeders = (all.rows || []).filter(r => r.clicks === 0 && r.impressions >= 50);
  bleeders.sort((a, b) => b.impressions - a.impressions);
  bleeders.slice(0, 50).forEach(r => {
    console.log(`${r.impressions}  pos=${r.position.toFixed(1)}  ${r.keys[0]}`);
  });

  writeFileSync(join(__dirname, 'gsc-audit-2026-05-08.json'), JSON.stringify({ inspection: insp, pages: pages.rows, queries: queries.rows, bleeders }, null, 2));
  console.log('\nSaved -> scripts/gsc-audit-2026-05-08.json');
};

main().catch(e => { console.error(e); process.exit(1); });
