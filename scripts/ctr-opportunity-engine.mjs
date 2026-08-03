#!/usr/bin/env node
/**
 * CTR opportunity engine — 2026-08-04.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 * Four CTR waves have been shipped by eyeballing a GSC export each time. That
 * finds the top of the list and misses the tail, and it cannot tell you whether
 * the previous wave worked. This turns the same job into a repeatable
 * measurement.
 *
 * WHAT IT DOES
 * For every page+query pair, it compares actual CTR against the CTR normally
 * seen at that position, and ranks by **clicks lost**, not by impressions. A
 * page at position 3 with 2% CTR is bleeding far more than a page at position 12
 * with 1%, even if the second has more impressions.
 *
 *   lost clicks = impressions x (expected CTR at position - actual CTR)
 *
 * The benchmark curve is a conservative industry aggregate, deliberately set
 * BELOW commonly quoted figures so the output under-promises. It is a yardstick
 * for ranking work, not a forecast — actual CTR depends on SERP features, intent
 * and brand, none of which this can see.
 *
 * IT ALSO FLAGS WHAT CANNOT BE FIXED, which matters as much as what can:
 *   - queries that structurally never click (bare navigational, `site:`)
 *   - AI-assistant-phrased queries, which show high positions and near-zero CTR
 *   - non-English / misspelling variants with no commercial intent
 * Counting those as recoverable is how CTR projections become fiction.
 *
 * Usage:
 *   node scripts/ctr-opportunity-engine.mjs                  # last 90 days
 *   node scripts/ctr-opportunity-engine.mjs --days 28
 *   node scripts/ctr-opportunity-engine.mjs --export         # write JSON queue
 *   node scripts/ctr-opportunity-engine.mjs --since 2026-08-04   # measure a wave
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createSign } from 'crypto';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const arg = (k, d) => { const i = argv.indexOf(`--${k}`); return i === -1 ? d : argv[i + 1]; };
const DAYS = Number(arg('days', 90));
const EXPORT = argv.includes('--export');

/* ── Expected CTR by position ──────────────────────────────────────────────
 * Conservative aggregate of published desktop+mobile organic CTR studies.
 * Intentionally low: the point is to rank opportunities against each other, and
 * an optimistic curve turns every page into a false emergency.
 */
const CTR_CURVE = {
  1: 0.270, 2: 0.150, 3: 0.100, 4: 0.070, 5: 0.052,
  6: 0.041, 7: 0.033, 8: 0.028, 9: 0.024, 10: 0.021,
  11: 0.016, 12: 0.014, 13: 0.012, 14: 0.011, 15: 0.010,
  16: 0.009, 17: 0.008, 18: 0.008, 19: 0.007, 20: 0.007,
};
const expectedCtr = (p) => {
  if (p > 20) return 0.004;
  const lo = Math.floor(p), hi = Math.ceil(p);
  const a = CTR_CURVE[lo] ?? 0.004, b = CTR_CURVE[hi] ?? 0.004;
  return a + (b - a) * (p - lo);
};

/* ── Queries that will never click, however good the snippet ──────────────── */
const UNWINNABLE = [
  { re: /^site:/i,                       why: 'site: operator — us auditing our own index' },
  { re: /\bmy location is\b|\?\s*$/i,    why: 'AI-assistant phrasing — answered in the assistant, rarely clicked' },
  { re: /\.pdf\b|\bpdf\b/i,              why: 'file-seeking intent — clicks the PDF, not the page' },
  { re: /^[a-z]{2,}\s*(ndt|atlantis)$|^atlantis/i, why: 'navigational brand — already knows where to go' },
  { re: /[äöåéèñçüßæø]|sertifi|zertifi|sertifikat/i, why: 'non-English variant — no commercial intent for this site' },
];
const unwinnable = (q) => UNWINNABLE.find((u) => u.re.test(q));

/* ── GSC auth ──────────────────────────────────────────────────────────────── */
const key = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf8'));
const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
const now = Math.floor(Date.now() / 1000);
const h = b64({ alg: 'RS256', typ: 'JWT' });
const c = b64({
  iss: key.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly',
  aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now,
});
const sg = createSign('RSA-SHA256'); sg.update(`${h}.${c}`);
const tok = await (await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${h}.${c}.${sg.sign(key.private_key, 'base64url')}`,
})).json();

const iso = (d) => d.toISOString().slice(0, 10);
const end = new Date(Date.now() - 2 * 864e5);           // GSC lags ~2 days
const start = arg('since') ? new Date(arg('since')) : new Date(end - DAYS * 864e5);

const rows = (await (await fetch(
  `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent('https://atlantisndt.com/')}/searchAnalytics/query`,
  {
    method: 'POST',
    headers: { Authorization: `Bearer ${tok.access_token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ startDate: iso(start), endDate: iso(end), dimensions: ['page', 'query'], rowLimit: 25000 }),
  },
)).json()).rows || [];

const norm = (u) => u.replace('https://atlantisndt.com', '').replace(/\/$/, '') || '/';

/* ── Score every pair ──────────────────────────────────────────────────────── */
const scored = [];
let junkImpr = 0, junkClicks = 0;
const junkReasons = {};

for (const r of rows) {
  const [page, query] = [norm(r.keys[0]), r.keys[1]];
  const u = unwinnable(query);
  if (u) {
    junkImpr += r.impressions; junkClicks += r.clicks;
    junkReasons[u.why] = (junkReasons[u.why] || 0) + r.impressions;
    continue;
  }
  if (r.impressions < 25) continue;                  // noise floor
  const exp = expectedCtr(r.position);
  const lost = r.impressions * (exp - r.ctr);
  if (lost <= 0) continue;                            // already beating the curve
  scored.push({ page, query, impressions: r.impressions, clicks: r.clicks, ctr: r.ctr, position: r.position, expected: exp, lost });
}
scored.sort((a, b) => b.lost - a.lost);

/* ── Roll up to pages, since a title fix serves every query on the page ───── */
const byPage = new Map();
for (const s of scored) {
  const g = byPage.get(s.page) || { page: s.page, lost: 0, impressions: 0, clicks: 0, queries: [] };
  g.lost += s.lost; g.impressions += s.impressions; g.clicks += s.clicks; g.queries.push(s);
  byPage.set(s.page, g);
}
const pages = [...byPage.values()].sort((a, b) => b.lost - a.lost);

/* ── Report ────────────────────────────────────────────────────────────────── */
console.log(`CTR opportunity — ${iso(start)} → ${iso(end)}`);
console.log(`pairs analysed: ${rows.length} · scored: ${scored.length} · pages with upside: ${pages.length}`);
console.log(`\nTOTAL RECOVERABLE CLICKS (vs position benchmark): ${Math.round(scored.reduce((a, s) => a + s.lost, 0))}`);
console.log(`EXCLUDED as structurally unwinnable: ${junkImpr} impressions, ${junkClicks} clicks`);
for (const [why, impr] of Object.entries(junkReasons).sort((a, b) => b[1] - a[1])) {
  console.log(`   ${String(impr).padStart(6)} impr — ${why}`);
}

console.log(`\n══ TOP 25 PAGES BY RECOVERABLE CLICKS ══`);
for (const p of pages.slice(0, 25)) {
  console.log(`\n${p.page}`);
  console.log(`   recoverable ~${Math.round(p.lost)} clicks · ${p.impressions} impr · ${p.clicks} clicks now`);
  for (const q of p.queries.sort((a, b) => b.lost - a.lost).slice(0, 4)) {
    console.log(`     ${String(q.impressions).padStart(5)}i p${q.position.toFixed(1).padStart(5)} · actual ${(q.ctr * 100).toFixed(1)}% vs expected ${(q.expected * 100).toFixed(1)}% → ~${Math.round(q.lost)} clicks · "${q.query}"`);
  }
}

/* ── Featured-snippet candidates: high position, low CTR, question-shaped ─── */
const snippetable = scored.filter((s) =>
  s.position <= 8 && /^(what|how|why|when|which|is|are|does|do|can)\b/i.test(s.query));
if (snippetable.length) {
  console.log(`\n══ FEATURED-SNIPPET CANDIDATES (question intent, p<=8) ══`);
  console.log('These usually lose the click to a snippet box. Answer the question in');
  console.log('40-55 words immediately under a heading that restates it verbatim.');
  snippetable.slice(0, 12).forEach((s) =>
    console.log(`  ${String(s.impressions).padStart(5)}i p${s.position.toFixed(1).padStart(5)} ${(s.ctr * 100).toFixed(1)}%  "${s.query}"  → ${s.page}`));
}

if (EXPORT) {
  const out = join(__dirname, `ctr-opportunity-${iso(end)}.json`);
  writeFileSync(out, JSON.stringify({
    range: { start: iso(start), end: iso(end) },
    totalRecoverable: Math.round(scored.reduce((a, s) => a + s.lost, 0)),
    excluded: { impressions: junkImpr, reasons: junkReasons },
    pages: pages.slice(0, 120),
  }, null, 1));
  console.log(`\nwrote ${out}`);
}
