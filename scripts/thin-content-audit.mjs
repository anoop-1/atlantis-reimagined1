#!/usr/bin/env node
/**
 * Thin-content audit — 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * The owner asked for every thin page across Consulting, ERP and Training, in
 * that priority order, so they can be upgraded rather than guessed at.
 *
 * "THIN" IS NOT ONE THING, and the distinction decides the fix:
 *
 *   starved    under ~400 words of real body text. Genuinely thin. Needs content.
 *   shallow    400-900 words, no citation layer. Has substance, lacks an
 *              extractable answer. Needs a layer, not more prose.
 *   flat       900+ words, no citation layer, zero impressions. Google has seen
 *              it and declined. More words will not change that — it needs
 *              differentiation or consolidation.
 *   layered    already carries an answer block. Leave alone.
 *
 * Pages are ranked inside each segment by IMPRESSIONS ASCENDING, because the
 * owner asked to prioritise low-impression pages: a page at 5 impressions has
 * demand Google is barely surfacing, and is a cheaper win than a page at zero
 * that may have no demand at all. Zero-impression pages are reported separately
 * so they cannot swamp the queue.
 *
 * A page that is already consolidated (canonical points elsewhere) is EXCLUDED —
 * upgrading a page we have deliberately pointed at its parent would undo this
 * morning's work.
 *
 *   node scripts/thin-content-audit.mjs
 *   node scripts/thin-content-audit.mjs --segment consulting --limit 60
 */
import { readFileSync, readdirSync, statSync, writeFileSync, existsSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const SITE = 'https://atlantisndt.com';
const argv = process.argv.slice(2);
const only = argv.includes('--segment') ? argv[argv.indexOf('--segment') + 1] : null;
const limit = argv.includes('--limit') ? parseInt(argv[argv.indexOf('--limit') + 1], 10) : 40;

const SEGMENTS = [
  { key: 'consulting', priority: 1, match: (p) => /^\/(consulting|compliance)/.test(p) },
  { key: 'erp', priority: 2, match: (p) => /^\/(erp|ndt-erp-|erp-modules|erp-industries|ndt-erp-solution)/.test(p) },
  { key: 'training', priority: 3, match: (p) => /^\/(training|ndt-training-|corporate-ndt-training|asnt-|aerospace-ndt-training)/.test(p) },
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
  if (!j.access_token) throw new Error('auth failed');
  return j.access_token;
}

async function impressions() {
  const cred = join(__dirname, 'gsc-service-account.json');
  if (!existsSync(cred)) { console.warn('  (no GSC credentials — impressions unavailable)'); return new Map(); }
  const at = await token(JSON.parse(readFileSync(cred, 'utf-8')), 'https://www.googleapis.com/auth/webmasters.readonly');
  const end = new Date(Date.now() - 2 * 864e5).toISOString().slice(0, 10);
  const start = new Date(Date.now() - 92 * 864e5).toISOString().slice(0, 10);
  const rows = [];
  for (let s = 0; ; s += 25000) {
    const res = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`,
      { method: 'POST', headers: { Authorization: `Bearer ${at}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ startDate: start, endDate: end, dimensions: ['page'], rowLimit: 25000, startRow: s }) });
    if (!res.ok) break;
    const j = await res.json();
    const b = j.rows || [];
    rows.push(...b);
    if (b.length < 25000) break;
  }
  const m = new Map();
  for (const r of rows) {
    m.set(r.keys[0].replace(SITE, '').replace(/\/$/, '') || '/', { impressions: r.impressions, clicks: r.clicks, position: r.position });
  }
  return m;
}

function scan() {
  const out = [];
  const walk = (d) => {
    for (const n of readdirSync(d)) {
      const q = join(d, n);
      if (statSync(q).isDirectory()) { walk(q); continue; }
      if (n !== 'index.html') continue;
      const html = readFileSync(q, 'utf-8');
      const rel = '/' + relative(DIST, d).split('\\').join('/');
      const path = rel === '/.' ? '/' : rel;
      // Body text only: strip nav, script, style and all tags. A 40 KB page of
      // chrome and JSON-LD is still a thin page.
      const body = (html.match(/<main[\s\S]*?<\/main>/i) || [html])[0];
      const text = body
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&[a-z]+;/g, ' ')
        .replace(/\s+/g, ' ').trim();
      const canonical = (html.match(/rel="canonical" href="([^"]+)"/) || [])[1] || '';
      out.push({
        path,
        words: text ? text.split(' ').length : 0,
        layered: html.includes('data-citation-block="answer"'),
        noindex: /name=["']robots["'][^>]*noindex/i.test(html),
        consolidated: !!canonical && !canonical.endsWith(path),
      });
    }
  };
  walk(DIST);
  return out;
}

function classify(p) {
  if (p.layered) return 'layered';
  if (p.words < 400) return 'starved';
  if (p.words < 900) return 'shallow';
  return 'flat';
}

async function main() {
  console.log('\nScanning dist…');
  const pages = scan();
  const gsc = await impressions();
  console.log(`  ${pages.length} built pages · ${gsc.size} with GSC data\n`);

  const report = {};
  for (const seg of SEGMENTS) {
    if (only && seg.key !== only) continue;
    const mine = pages.filter((p) => seg.match(p.path) && !p.noindex && !p.consolidated);
    const rows = mine.map((p) => ({ ...p, bucket: classify(p), ...(gsc.get(p.path) || { impressions: 0, clicks: 0, position: null }) }));

    const buckets = {};
    for (const r of rows) (buckets[r.bucket] ||= []).push(r);

    console.log(`── ${seg.key.toUpperCase()} (priority ${seg.priority}) ${'─'.repeat(40 - seg.key.length)}`);
    console.log(`   ${mine.length} indexable, non-consolidated pages`);
    for (const b of ['starved', 'shallow', 'flat', 'layered']) {
      const arr = buckets[b] || [];
      if (!arr.length) continue;
      const impr = arr.reduce((a, r) => a + r.impressions, 0);
      console.log(`     ${String(arr.length).padStart(4)}  ${b.padEnd(8)} ${impr} impressions`);
    }

    // The queue: needs-work pages with demand, lowest impressions first.
    const queue = rows
      .filter((r) => r.bucket !== 'layered' && r.impressions > 0)
      .sort((a, b) => a.impressions - b.impressions);
    const zero = rows.filter((r) => r.bucket !== 'layered' && r.impressions === 0);

    console.log(`\n   UPGRADE QUEUE — has demand, lacks an answer (${queue.length} pages, lowest impressions first):`);
    for (const r of queue.slice(0, limit)) {
      console.log(`     ${String(r.impressions).padStart(4)}i ${String(r.clicks).padStart(2)}c p${r.position ? r.position.toFixed(0).padStart(3) : ' --'}  ${String(r.words).padStart(4)}w  ${r.bucket.padEnd(7)}  ${r.path}`);
    }
    if (queue.length > limit) console.log(`     … and ${queue.length - limit} more (raise --limit to see them)`);
    console.log(`\n   zero-impression, needs work: ${zero.length} pages (reported separately — may have no demand at all)\n`);

    report[seg.key] = { total: mine.length, buckets: Object.fromEntries(Object.entries(buckets).map(([k, v]) => [k, v.length])), queue, zero: zero.length };
  }

  writeFileSync(join(__dirname, 'thin-content-audit.json'), JSON.stringify(report, null, 1));
  console.log('  → scripts/thin-content-audit.json\n');
}

main().catch((e) => { console.error('FAILED: ' + e.message); process.exit(1); });
