#!/usr/bin/env node
/**
 * Striking-distance queue — 2026-08-17.
 * ─────────────────────────────────────────────────────────────────────────────
 * Built after the 2026-08-17 diagnostic, which found the constraint is NOT
 * click-through per position (already optimised over five CTR waves, and the
 * whole curve is compressed ~4x by AI Overviews) but WHERE the impression mass
 * sits. 28d to 2026-08-14:
 *
 *     pos 1-3       528i    (0.3% of all impressions)
 *     pos 4-5     8,989i
 *     pos 6-8    68,343i    ← 43% of the entire site's impressions
 *     pos 9-10   24,494i
 *     pos 11-15  22,464i
 *     pos 21+    28,778i
 *
 * 68,343 impressions are parked at position 6-8 earning 1.43%. The same
 * impressions at position 3-4 earn ~4%. Moving that block is worth roughly
 * +1,700 clicks/month — more than the site's entire current output — and needs
 * ranking work (depth, internal authority, links), not metadata.
 *
 * This script emits the ranked work queue: which pages, which queries, how many
 * impressions are at stake, and how far each has to travel.
 *
 *   node scripts/striking-distance-2026-08-17.mjs
 *   node scripts/striking-distance-2026-08-17.mjs --geo usa
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createSign } from 'crypto';

const __dirname = dirname(fileURLToPath(import.meta.url));
const C = JSON.parse(readFileSync(join(__dirname, 'gsc-service-account.json'), 'utf-8'));
const SITE = 'https://atlantisndt.com';

const args = process.argv.slice(2);
const geoIdx = args.indexOf('--geo');
const GEO = geoIdx !== -1 ? args[geoIdx + 1] : null;
const DAYS = 60;

async function token() {
  const now = Math.floor(Date.now() / 1000);
  const enc = o => Buffer.from(JSON.stringify(o)).toString('base64url');
  const u = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({
    iss: C.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly',
    aud: 'https://oauth2.googleapis.com/token', exp: now + 3600, iat: now,
  })}`;
  const s = createSign('RSA-SHA256'); s.update(u);
  const r = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${u}.${s.sign(C.private_key, 'base64url')}`,
  });
  return (await r.json()).access_token;
}

const tk = await token();
async function gsc(body) {
  for (let i = 0; i < 4; i++) {
    const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tk}` },
      body: JSON.stringify({ type: 'web', rowLimit: 25000, ...body }),
    });
    if (r.ok) return (await r.json()).rows || [];
    if (r.status === 429 || r.status >= 500) { await new Promise(x => setTimeout(x, 1500 * (i + 1))); continue; }
    throw new Error(`${r.status} ${(await r.text()).slice(0, 200)}`);
  }
  throw new Error('gsc retries exhausted');
}

const end = new Date(Date.now() - 3 * 864e5);
const start = new Date(end); start.setDate(start.getDate() - DAYS);
const [S, E] = [start, end].map(x => x.toISOString().split('T')[0]);
const filters = GEO ? { dimensionFilterGroups: [{ filters: [{ dimension: 'country', operator: 'equals', expression: GEO }] }] } : {};

console.log(`Striking-distance queue — ${S}..${E}${GEO ? ` — geo=${GEO}` : ' — all geo'}\n`);

const pairs = await gsc({ startDate: S, endDate: E, dimensions: ['query', 'page'], ...filters });

// Observed CTR by position band for THIS site — the realistic uplift model.
// Using site-observed values rather than published curves, because AI Overviews
// have compressed this niche far below any public benchmark and planning
// against a 28%-at-position-1 table would promise clicks that cannot arrive.
const BANDS = [
  { max: 3, ctr: 0.0344 }, { max: 5, ctr: 0.0253 }, { max: 8, ctr: 0.0110 },
  { max: 10, ctr: 0.0069 }, { max: 15, ctr: 0.0037 }, { max: 20, ctr: 0.0025 },
  { max: Infinity, ctr: 0.0005 },
];
const ctrAt = p => BANDS.find(b => p <= b.max).ctr;

// Page-level roll-up of every query the page is 4-15 for: close enough that
// depth and internal links can move it, far enough that the gain is material.
const pages = {};
for (const r of pairs) {
  const [query, url] = r.keys;
  if (r.position < 4 || r.position > 15) continue;
  if (r.impressions < 10) continue;
  const p = url.replace(SITE, '') || '/';
  pages[p] ??= { path: p, impressions: 0, clicks: 0, wpos: 0, queries: [], upside: 0 };
  const e = pages[p];
  e.impressions += r.impressions;
  e.clicks += r.clicks;
  e.wpos += r.position * r.impressions;
  // Upside = what the same impressions earn at position 3, less what they earn now.
  e.upside += r.impressions * (ctrAt(3) - ctrAt(r.position));
  e.queries.push({ q: query, i: r.impressions, c: r.clicks, pos: +r.position.toFixed(1) });
}

const ranked = Object.values(pages)
  .map(e => ({ ...e, avgPos: +(e.wpos / e.impressions).toFixed(1), upside: Math.round(e.upside), queries: e.queries.sort((a, b) => b.i - a.i).slice(0, 8) }))
  .filter(e => e.upside >= 3)
  .sort((a, b) => b.upside - a.upside);

const totalUpside = ranked.reduce((s, e) => s + e.upside, 0);
console.log(`${ranked.length} pages in striking distance (pos 4-15)`);
console.log(`Modelled upside if all reach position 3: +${totalUpside} clicks / ${DAYS}d  (~${Math.round(totalUpside / DAYS * 30)}/month)\n`);

console.log('rank  upside  now      impr  pos   page');
for (const [i, e] of ranked.slice(0, 60).entries()) {
  console.log(
    `${String(i + 1).padStart(4)}  ${String('+' + e.upside).padStart(6)}  ${String(e.clicks + 'c').padStart(5)} ${String(e.impressions).padStart(7)}  ${String(e.avgPos).padStart(4)}  ${e.path.slice(0, 62)}`
  );
  for (const q of e.queries.slice(0, 3)) {
    console.log(`                              ${String(q.i).padStart(5)}i p${String(q.pos).padStart(5)}  ${q.q.slice(0, 52)}`);
  }
}

const out = join(__dirname, `striking-distance-${GEO || 'all'}-2026-08-17.json`);
writeFileSync(out, JSON.stringify({
  generated: new Date().toISOString(), window: { start: S, end: E, days: DAYS }, geo: GEO || 'all',
  model: 'site-observed CTR bands, target position 3',
  totalUpsideClicks: totalUpside, pages: ranked,
}, null, 2));
console.log(`\nWrote ${out}`);
