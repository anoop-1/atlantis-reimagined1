#!/usr/bin/env node
/**
 * The invisible-pages audit — 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * The URL Inspection API would answer "is this indexed?" directly, but every one
 * of the 11 service accounts is a DELEGATED owner rather than a verified one, so
 * it returns 403 on this property. That route is closed until somebody verifies
 * an account in Search Console itself.
 *
 * So this uses the proxy that is actually available: a page Google has indexed
 * and considers relevant to anything will accumulate impressions over 90 days.
 * Zero impressions across a full quarter means one of four things, and the
 * bucket tells you which:
 *
 *   noindexed   — we told Google to stay away. Working as designed, or a bug.
 *   orphan      — built, but no internal link points at it. Crawlers arrive by
 *                 link; an unlinked page is invisible however good it is.
 *   thin        — crawled and judged not worth showing. The fixable case.
 *   near-dupe   — competing with a sibling page for the same intent.
 *
 * Buckets are what make this actionable. "2,446 unindexed pages" is a number to
 * despair at; "180 orphans, 60 noindexed by mistake, 900 thin" is a work queue.
 *
 *   node scripts/audit-unindexed.mjs            # full audit, writes JSON
 *   node scripts/audit-unindexed.mjs --days 90  # window (default 90)
 */
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://atlantisndt.com';
const DIST = join(__dirname, '..', 'dist');
const argv = process.argv.slice(2);
const days = argv.includes('--days') ? parseInt(argv[argv.indexOf('--days') + 1], 10) : 90;

// ─── GSC auth (same service account the rest of the tooling uses) ────────────
async function token(creds, scope) {
  const { createSign } = await import('crypto');
  const now = Math.floor(Date.now() / 1000);
  const enc = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
  const unsigned = `${enc({ alg: 'RS256', typ: 'JWT' })}.${enc({
    iss: creds.client_email, scope, aud: 'https://oauth2.googleapis.com/token',
    exp: now + 3600, iat: now,
  })}`;
  const sign = createSign('RSA-SHA256');
  sign.update(unsigned);
  const jwt = `${unsigned}.${sign.sign(creds.private_key, 'base64url')}`;
  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });
  const j = await res.json();
  if (!j.access_token) throw new Error(`auth failed: ${JSON.stringify(j).slice(0, 200)}`);
  return j.access_token;
}

/** Every page row GSC will give us, paginated to exhaustion. */
async function gscPages(accessToken, startDate, endDate) {
  const rows = [];
  for (let start = 0; ; start += 25000) {
    const res = await fetch(
      `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
      {
        method: 'POST',
        headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ startDate, endDate, dimensions: ['page'], rowLimit: 25000, startRow: start }),
      },
    );
    if (!res.ok) throw new Error(`GSC ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const j = await res.json();
    const batch = j.rows || [];
    rows.push(...batch);
    if (batch.length < 25000) break;
  }
  return rows;
}

// ─── What we actually built ─────────────────────────────────────────────────
function builtPages() {
  const out = [];
  const walk = (d) => {
    for (const n of readdirSync(d)) {
      const q = join(d, n);
      if (statSync(q).isDirectory()) walk(q);
      else if (n === 'index.html') {
        const html = readFileSync(q, 'utf-8');
        const rel = '/' + relative(DIST, d).split('\\').join('/');
        out.push({
          path: rel === '/.' ? '/' : rel,
          bytes: html.length,
          // Text length after stripping tags is the honest thin-content measure;
          // a 40 KB page of nav chrome and JSON-LD is still a thin page.
          text: html.replace(/<script[\s\S]*?<\/script>/gi, ' ')
                    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
                    .replace(/<[^>]+>/g, ' ')
                    .replace(/\s+/g, ' ').trim().length,
          noindex: /<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html),
          layered: html.includes('data-citation-block="answer"'),
        });
      }
    }
  };
  walk(DIST);
  return out;
}

/** Internal links, so we can tell an orphan from a merely-ignored page. */
function inboundCounts(pages) {
  const counts = Object.create(null);
  for (const p of pages) counts[p.path] = 0;
  const walk = (d) => {
    for (const n of readdirSync(d)) {
      const q = join(d, n);
      if (statSync(q).isDirectory()) walk(q);
      else if (n === 'index.html') {
        const html = readFileSync(q, 'utf-8');
        const from = '/' + relative(DIST, d).split('\\').join('/');
        const self = from === '/.' ? '/' : from;
        const seen = new Set();
        for (const m of html.matchAll(/href=["'](\/[^"'#?]*)["']/g)) {
          let href = m[1].replace(/\/$/, '') || '/';
          if (href === self || seen.has(href)) continue;
          seen.add(href);
          if (href in counts) counts[href]++;
        }
      }
    }
  };
  walk(DIST);
  return counts;
}

function bucket(p, inbound) {
  if (p.noindex) return 'noindexed';
  if (inbound === 0) return 'orphan';
  if (p.text < 2500) return 'thin';
  if (p.text < 6000 && !p.layered) return 'shallow';
  return 'crawled-not-chosen';
}

async function main() {
  const end = new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10);
  const start = new Date(Date.now() - (days + 2) * 864e5).toISOString().slice(0, 10);

  const credPath = join(__dirname, 'gsc-service-account.json');
  if (!existsSync(credPath)) throw new Error('scripts/gsc-service-account.json missing');
  const at = await token(JSON.parse(readFileSync(credPath, 'utf-8')), 'https://www.googleapis.com/auth/webmasters.readonly');

  console.log(`\nGSC page pull: ${start} → ${end}`);
  const rows = await gscPages(at, start, end);
  const seen = new Map();
  for (const r of rows) {
    const path = r.keys[0].replace(SITE, '').replace(/\/$/, '') || '/';
    seen.set(path, { impressions: r.impressions, clicks: r.clicks, position: r.position });
  }
  console.log(`  GSC returned ${rows.length} page rows (${seen.size} distinct paths)`);

  const pages = builtPages();
  console.log(`  dist holds ${pages.length} built pages`);
  const inbound = inboundCounts(pages);

  const invisible = [];
  let visible = 0;
  for (const p of pages) {
    const hit = seen.get(p.path);
    if (hit && hit.impressions > 0) { visible++; continue; }
    invisible.push({ ...p, inbound: inbound[p.path] ?? 0, bucket: bucket(p, inbound[p.path] ?? 0) });
  }

  const byBucket = {};
  for (const p of invisible) (byBucket[p.bucket] ||= []).push(p);

  console.log(`\n  visible (≥1 impression in ${days}d): ${visible}`);
  console.log(`  invisible: ${invisible.length}\n`);
  for (const [k, v] of Object.entries(byBucket).sort((a, b) => b[1].length - a[1].length)) {
    console.log(`    ${String(v.length).padStart(5)}  ${k}`);
  }

  // Family rollup — where the invisible pages cluster tells you which template
  // is underperforming, which is a far more useful unit of work than a URL list.
  const fam = {};
  for (const p of invisible) {
    const seg = p.path.split('/').filter(Boolean);
    const key = seg.length === 0 ? '/' : (seg[0] === 'consulting' || seg[0] === 'erp' || seg[0] === 'blog'
      ? `${seg[0]}/${(seg[1] || '').replace(/-[a-z-]+$/, '') || '*'}`.slice(0, 40)
      : seg[0]);
    (fam[key] ||= { n: 0, thin: 0, orphan: 0, noindex: 0 });
    fam[key].n++;
    if (p.bucket === 'thin' || p.bucket === 'shallow') fam[key].thin++;
    if (p.bucket === 'orphan') fam[key].orphan++;
    if (p.bucket === 'noindexed') fam[key].noindex++;
  }
  console.log('\n  top invisible families:');
  Object.entries(fam).sort((a, b) => b[1].n - a[1].n).slice(0, 20)
    .forEach(([k, v]) => console.log(`    ${String(v.n).padStart(5)}  ${k.padEnd(34)} thin ${String(v.thin).padStart(4)} · orphan ${String(v.orphan).padStart(4)} · noindex ${String(v.noindex).padStart(4)}`));

  writeFileSync(join(__dirname, 'unindexed-audit.json'),
    JSON.stringify({ window: { start, end, days }, visible, invisible: invisible.length, byBucket: Object.fromEntries(Object.entries(byBucket).map(([k, v]) => [k, v.length])), families: fam, pages: invisible }, null, 1));
  console.log('\n  → scripts/unindexed-audit.json\n');
}

main().catch((e) => { console.error('FAILED: ' + e.message); process.exit(1); });
