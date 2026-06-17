#!/usr/bin/env node
/**
 * Day-8 — Audit the 232 Day-0 stuck URLs against prerender.mjs to find which
 * ones have NO route entry (so react-snap won't fully prerender them) and
 * which have an entry but with EMPTY or trivially short bodyContent.
 *
 * Output: scripts/_stuck-bodycontent-audit.json
 *   { ok: [..paths], missing: [..paths], empty: [..paths], total }
 *
 * The Day-7 stuck-recrawl submission won't lift these URLs out of "Crawled —
 * currently not indexed" unless they ship real HTML on next crawl. This is
 * the §17.2-3 lesson generalised across all 232 routes.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const listPath = join(ROOT, 'scripts', 'indexing-url-list-day7-stuck-recrawl.json');
const prerPath = join(ROOT, 'scripts', 'prerender.mjs');

const list = JSON.parse(readFileSync(listPath, 'utf-8'));
const prer = readFileSync(prerPath, 'utf-8');

function pathOf(url) {
  try {
    return new URL(url).pathname.replace(/\/$/, '');
  } catch {
    return url.replace(/^https?:\/\/[^/]+/, '').replace(/\/$/, '');
  }
}

const ok = [];
const missing = [];
const empty = [];

// Extract all paths declared in prerender.mjs — both literal `path: '/foo'`
// and template-string `path: \`/ndt-erp-${slug}\`` entries (the loop at line
// 8086 generates one per erpCities entry). For the template-string loop, we
// need to match the loop's input array and project the resulting paths.
const literalPaths = new Set();
const literalRe = /path\s*:\s*['"]([^'"]+)['"]/g;
let m;
while ((m = literalRe.exec(prer)) !== null) {
  literalPaths.add(m[1].replace(/\/$/, ''));
}

// Project the erpCities loop into concrete paths
const erpCitySlugs = new Set();
const erpCitiesBlockRe = /const\s+erpCities\s*=\s*\[([\s\S]*?)\];\s*\n\nerpCities\.forEach/;
const blockMatch = prer.match(erpCitiesBlockRe);
if (blockMatch) {
  const slugRe = /slug:\s*['"`]([^'"`]+)['"`]/g;
  let s;
  while ((s = slugRe.exec(blockMatch[1])) !== null) {
    erpCitySlugs.add(s[1]);
  }
}

for (const slug of erpCitySlugs) {
  literalPaths.add(`/ndt-erp-${slug}`);
}

// Reporting cities loop too — produces /ndt-reporting-${slug}
const reportingBlockRe = /const\s+reportingCities\s*=\s*\[([\s\S]*?)\];\s*\n\nreportingCities\.forEach/;
const reportingMatch = prer.match(reportingBlockRe);
if (reportingMatch) {
  const slugRe = /slug:\s*['"`]([^'"`]+)['"`]/g;
  let s;
  while ((s = slugRe.exec(reportingMatch[1])) !== null) {
    literalPaths.add(`/ndt-reporting-${s[1]}`);
  }
}

// Check each stuck URL
for (const item of list.urls) {
  const p = pathOf(item.url);
  if (!literalPaths.has(p)) {
    missing.push(p);
    continue;
  }
  // Try to find the route block (literal or template-derived) and inspect bodyContent
  if (erpCitySlugs.has(p.replace(/^\/ndt-erp-/, ''))) {
    ok.push(p);
    continue;
  }
  // Generic literal — look for the path's enclosing routes.push({...}) and check bodyContent
  const literalPosRe = new RegExp(`path\\s*:\\s*['"]${p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}['"]`);
  const idx = prer.search(literalPosRe);
  if (idx === -1) { ok.push(p); continue; }
  const blockStart = prer.lastIndexOf('routes.push({', idx);
  const blockEnd   = prer.indexOf('});', idx);
  if (blockStart === -1 || blockEnd === -1) { ok.push(p); continue; }
  const block = prer.slice(blockStart, blockEnd);
  const bcMatch = block.match(/bodyContent\s*:\s*([`'"])([\s\S]*?)\1/);
  if (!bcMatch || bcMatch[2].replace(/\s+/g, ' ').trim().length < 80) {
    empty.push(p);
  } else {
    ok.push(p);
  }
}

const out = { generated: new Date().toISOString(), total: list.urls.length, ok, missing, empty };
const outPath = join(ROOT, 'scripts', '_stuck-bodycontent-audit.json');
writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');
console.log(`audit complete: ${ok.length} ok, ${missing.length} missing, ${empty.length} empty out of ${list.urls.length}`);
console.log(`written: ${outPath}`);
