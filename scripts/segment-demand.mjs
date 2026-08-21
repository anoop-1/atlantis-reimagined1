#!/usr/bin/env node
/**
 * ERP and consulting demand diagnosis — 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * "Low impressions" has four distinct causes and they need opposite fixes, so
 * guessing which one applies is how a quarter gets wasted:
 *
 *   1. NOT RANKING       we have pages, they sit past p20. Fix = relevance.
 *   2. NO SUCH DEMAND    the queries we target barely get searched. Fix = target
 *                        different queries; more pages on the same terms is waste.
 *   3. WRONG GEOGRAPHY   demand exists but not where we want it. Fix = US-intent
 *                        content, not more pages.
 *   4. RANKING, NOT CLICKED   impressions fine, CTR suppressed. Fix = the
 *                        citation layer, which is already built.
 *
 * This separates them. For each segment it reports the impression and click
 * totals, the position distribution, the queries actually earning the
 * impressions, and — critically — how much of it is US.
 *
 * THE COUNTRY TRAP: combining a country filter with the page or query dimension
 * drops ~87% of clicks on this property, so per-country segment numbers must
 * come from FILTER-ONLY aggregates (dimension: date, filtered by country and by
 * page prefix). Query lists are pulled unfiltered and labelled as global.
 *
 *   node scripts/segment-demand.mjs [--days 90]
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://atlantisndt.com';
const argv = process.argv.slice(2);
const days = argv.includes('--days') ? parseInt(argv[argv.indexOf('--days') + 1], 10) : 90;

const SEGMENTS = [
  { key: 'ERP', match: (p) => /^\/(erp|ndt-erp-|erp-modules|erp-industries)/.test(p), regex: '^https://atlantisndt\\.com/(erp|ndt-erp-|erp-modules|erp-industries)' },
  { key: 'Consulting', match: (p) => /^\/consulting/.test(p), regex: '^https://atlantisndt\\.com/consulting' },
  { key: 'Training', match: (p) => /^\/(training|ndt-training-|corporate-ndt-training|asnt-)/.test(p), regex: '^https://atlantisndt\\.com/(training|ndt-training-|corporate-ndt-training|asnt-)' },
  { key: 'Blog', match: (p) => /^\/blog/.test(p), regex: '^https://atlantisndt\\.com/blog' },
];

async function token(creds, scope) {
  const { createSign } = await import('crypto');
  const now = Math.floor(Date.now() / 1000);
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const unsigned = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({ iss: creds.client_email, scope, aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now })}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${sign.sign(creds.private_key, 'base64url')}`,
  });
  const j = await res.json();
  if (!j.access_token) throw new Error(`auth failed: ${JSON.stringify(j).slice(0, 200)}`);
  return j.access_token;
}

async function q(at, body) {
  const rows = [];
  for (let start = 0; ; start += 25000) {
    const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
      { method: 'POST', headers: { Authorization: `Bearer ${at}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ ...body, rowLimit: 25000, startRow: start }) });
    if (!res.ok) throw new Error(`GSC ${res.status}: ${(await res.text()).slice(0, 160)}`);
    const j = await res.json();
    const b = j.rows || [];
    rows.push(...b);
    if (b.length < 25000) break;
  }
  return rows;
}

const sum = (rows, f) => rows.reduce((a, r) => a + r[f], 0);

async function main() {
  const end = new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10);
  const start = new Date(Date.now() - (days + 2) * 864e5).toISOString().slice(0, 10);
  const at = await token(JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8')), 'https://www.googleapis.com/auth/webmasters.readonly');
  console.log(`\nSegment demand: ${start} → ${end}\n`);

  const pages = await q(at, { startDate: start, endDate: end, dimensions: ['page'] });
  const out = {};

  for (const seg of SEGMENTS) {
    const mine = pages.filter((r) => seg.match(r.keys[0].replace(SITE, '') || '/'));
    const impr = sum(mine, 'impressions');
    const clicks = sum(mine, 'clicks');

    // Filter-only aggregates: page-prefix alone, then page-prefix AND country.
    const filt = (extra = []) => ({
      startDate: start, endDate: end, dimensions: ['date'],
      dimensionFilterGroups: [{ filters: [{ dimension: 'page', operator: 'includingRegex', expression: seg.regex }, ...extra] }],
    });
    const [allAgg, usAgg] = await Promise.all([
      q(at, filt()),
      q(at, filt([{ dimension: 'country', operator: 'equals', expression: 'usa' }])),
    ]);
    const aImpr = sum(allAgg, 'impressions'), aClicks = sum(allAgg, 'clicks');
    const uImpr = sum(usAgg, 'impressions'), uClicks = sum(usAgg, 'clicks');

    // Position distribution over the pages that DO rank.
    const bands = { 'p1-3': 0, 'p4-10': 0, 'p11-20': 0, 'p21-50': 0, 'p51+': 0 };
    for (const r of mine) {
      const p = r.position;
      if (p <= 3) bands['p1-3'] += r.impressions;
      else if (p <= 10) bands['p4-10'] += r.impressions;
      else if (p <= 20) bands['p11-20'] += r.impressions;
      else if (p <= 50) bands['p21-50'] += r.impressions;
      else bands['p51+'] += r.impressions;
    }

    console.log(`── ${seg.key} ${'─'.repeat(58 - seg.key.length)}`);
    console.log(`   pages earning impressions : ${mine.length}`);
    console.log(`   impressions / clicks      : ${aImpr} / ${aClicks}  (CTR ${aImpr ? ((aClicks / aImpr) * 100).toFixed(2) : '0.00'}%)`);
    console.log(`   US impressions / clicks   : ${uImpr} / ${uClicks}  (${aImpr ? ((uImpr / aImpr) * 100).toFixed(1) : '0.0'}% of segment)`);
    console.log(`   position bands (impr)     : ${Object.entries(bands).map(([k, v]) => `${k} ${v}`).join(' · ')}`);
    const top = mine.sort((a, b) => b.impressions - a.impressions).slice(0, 6);
    console.log('   top pages:');
    for (const r of top) console.log(`     ${String(r.impressions).padStart(5)}i ${String(r.clicks).padStart(3)}c p${r.position.toFixed(0).padStart(2)}  ${r.keys[0].replace(SITE, '')}`);
    console.log();
    out[seg.key] = { pages: mine.length, impressions: aImpr, clicks: aClicks, usImpressions: uImpr, usClicks: uClicks, bands };
  }

  writeFileSync(join(__dirname, 'segment-demand.json'), JSON.stringify({ window: { start, end, days }, segments: out }, null, 1));
  console.log('  → scripts/segment-demand.json\n');
}

main().catch((e) => { console.error('FAILED: ' + e.message); process.exit(1); });
