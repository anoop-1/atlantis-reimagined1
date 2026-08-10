#!/usr/bin/env node
/**
 * US-focused GSC deep dive — 2026-08-09 cycle.
 *
 * Pulls, for both a 90d and 28d window:
 *   - site-wide totals (all countries) and USA-only totals
 *   - USA query-level  (query)
 *   - USA page-level   (page)
 *   - USA query x page (query,page)  -> routing / cannibalisation
 *   - global page-level (page)       -> dormancy classification
 *
 * Output: scripts/us-deepdive-2026-08-09.json  (+ a compact .txt summary)
 *
 * Usage: node scripts/gsc-us-deepdive-2026-08-09.mjs
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CREDS = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf8'));
const SITE_URL = 'https://atlantisndt.com';
const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly';

async function token() {
  const now = Math.floor(Date.now() / 1000);
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const unsigned = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({
    iss: CREDS.client_email, scope: SCOPE, aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600, iat: now,
  })}`;
  const s = createSign('RSA-SHA256'); s.update(unsigned);
  const jwt = `${unsigned}.${s.sign(CREDS.private_key, 'base64url')}`;
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  if (!r.ok) throw new Error(`token ${r.status} ${await r.text()}`);
  return (await r.json()).access_token;
}

async function query(tok, { dimensions, startDate, endDate, country, rowLimit = 25000, startRow = 0 }) {
  const body = { startDate, endDate, dimensions, rowLimit, startRow, type: 'web' };
  if (country) {
    body.dimensionFilterGroups = [{
      filters: [{ dimension: 'country', operator: 'equals', expression: country }],
    }];
  }
  const r = await fetch(
    `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE_URL)}/searchAnalytics/query`,
    { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tok}` }, body: JSON.stringify(body) }
  );
  if (!r.ok) throw new Error(`sa ${r.status} ${await r.text()}`);
  return (await r.json()).rows || [];
}

/** paginate past the 25k row cap */
async function queryAll(tok, opts) {
  const out = [];
  for (let start = 0; start < 100000; start += 25000) {
    const rows = await query(tok, { ...opts, startRow: start, rowLimit: 25000 });
    out.push(...rows);
    if (rows.length < 25000) break;
  }
  return out;
}

function range(days) {
  const end = new Date(); end.setDate(end.getDate() - 3);
  const start = new Date(end); start.setDate(start.getDate() - days);
  return { startDate: start.toISOString().split('T')[0], endDate: end.toISOString().split('T')[0] };
}

const totals = (rows) => rows.reduce((a, r) => {
  a.clicks += r.clicks; a.impressions += r.impressions; return a;
}, { clicks: 0, impressions: 0 });

(async () => {
  const tok = await token();
  const w90 = range(90), w28 = range(28);
  console.log(`auth ok as ${CREDS.client_email}`);
  console.log(`90d ${w90.startDate}..${w90.endDate}   28d ${w28.startDate}..${w28.endDate}`);

  const out = { generatedAt: new Date().toISOString(), windows: { w90, w28 }, data: {} };

  const jobs = [
    ['global_page_90',      { dimensions: ['page'],          ...w90 }],
    ['global_page_28',      { dimensions: ['page'],          ...w28 }],
    ['global_query_90',     { dimensions: ['query'],         ...w90 }],
    ['us_page_90',          { dimensions: ['page'],          ...w90, country: 'usa' }],
    ['us_page_28',          { dimensions: ['page'],          ...w28, country: 'usa' }],
    ['us_query_90',         { dimensions: ['query'],         ...w90, country: 'usa' }],
    ['us_query_28',         { dimensions: ['query'],         ...w28, country: 'usa' }],
    ['us_query_page_90',    { dimensions: ['query', 'page'], ...w90, country: 'usa' }],
    ['global_query_page_90',{ dimensions: ['query', 'page'], ...w90 }],
    ['country_90',          { dimensions: ['country'],       ...w90 }],
  ];

  for (const [name, opts] of jobs) {
    process.stdout.write(`  pulling ${name} ... `);
    try {
      const rows = await queryAll(tok, opts);
      out.data[name] = rows;
      const t = totals(rows);
      console.log(`${rows.length} rows | ${t.clicks} clicks | ${t.impressions} impr`);
    } catch (e) {
      console.log(`FAILED: ${e.message}`);
      out.data[name] = [];
    }
    await new Promise((r) => setTimeout(r, 400));
  }

  const outPath = join(__dirname, 'us-deepdive-2026-08-09.json');
  writeFileSync(outPath, JSON.stringify(out));
  console.log(`\nwrote ${outPath}`);
})();
