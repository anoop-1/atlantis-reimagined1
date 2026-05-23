#!/usr/bin/env node
/**
 * Submit remaining unindexed sitemap URLs to GSC using leftover daily quota.
 * Pulls all <loc> from public/sitemap.xml, filters out:
 *   - URLs already in gsc-priority-progress.json (submitted or alreadyIndexed)
 *   - URLs already in .gsc-multi-state.json (submitted today)
 *
 * Submits via gsc-submit-multi-raw.mjs flow (preflight + 10-SA round-robin).
 * Caps per account at 200 daily (the gsc-submit-multi-raw script enforces this
 * via the shared .gsc-multi-state.json file).
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITEMAP = join(ROOT, 'public', 'sitemap.xml');
const PROGRESS = join(__dirname, 'gsc-priority-progress.json');
const MULTI_STATE = join(ROOT, '.gsc-multi-state.json');
const URL_LIST_OUT = join(__dirname, 'indexing-url-list-extra.json');

const sm = readFileSync(SITEMAP, 'utf-8');
const allUrls = [];
const re = /<loc>([^<]+)<\/loc>/g;
let m;
while ((m = re.exec(sm)) !== null) allUrls.push(m[1].trim());
console.log('Sitemap URLs total:', allUrls.length);

const exclude = new Set();
if (existsSync(PROGRESS)) {
  const p = JSON.parse(readFileSync(PROGRESS, 'utf-8'));
  (p.submitted || []).forEach(u => exclude.add(u));
  (p.alreadyIndexed || []).forEach(u => exclude.add(u));
}
if (existsSync(MULTI_STATE)) {
  const s = JSON.parse(readFileSync(MULTI_STATE, 'utf-8'));
  (s.submittedUrls || []).forEach(u => exclude.add(u));
}
console.log('Excluding (already submitted/indexed):', exclude.size);

const remaining = allUrls.filter(u => !exclude.has(u));
console.log('Remaining unindexed candidates:', remaining.length);

// Prioritize ERP, DT, blog, certification — those move the needle for our goal
function score(u) {
  if (u.includes('/erp')) return 100;
  if (u.includes('/ndt-erp-')) return 95;
  if (u.includes('/digital-twin')) return 90;
  if (u.includes('/blog/')) return 70;
  if (u.includes('certification')) return 60;
  if (u.includes('training')) return 40;
  return 20;
}
remaining.sort((a, b) => score(b) - score(a));

writeFileSync(URL_LIST_OUT, JSON.stringify({
  generated: new Date().toISOString(),
  source: 'public/sitemap.xml minus already-submitted',
  urls: remaining.map(u => ({ url: u, tier: 'B' })),
}, null, 2));
console.log('Wrote', remaining.length, 'URLs to scripts/indexing-url-list-extra.json (sorted by priority)');
console.log('\nNext: edit gsc-submit-multi-raw.mjs to load this file, OR copy these URLs into indexing-url-list.json.');
console.log('Top 10 priority URLs:');
remaining.slice(0, 10).forEach(u => console.log('  ', u));
