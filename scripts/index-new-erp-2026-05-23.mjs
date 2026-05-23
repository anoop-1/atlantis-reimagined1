#!/usr/bin/env node
/**
 * Append new 232 ERP page URLs (from erp-pages-2026-05-23-state.json)
 *   1. into public/sitemap.xml so search engines can discover them
 *   2. into scripts/indexing-url-list.json so gsc-submit-multi-account.mjs picks them up
 * Run once before submitting to GSC Indexing API.
 */
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const STATE = join(__dirname, 'erp-pages-2026-05-23-state.json');
const SITEMAP = join(ROOT, 'public', 'sitemap.xml');
const URL_LIST = join(__dirname, 'indexing-url-list.json');
const SITE = 'https://atlantisndt.com';
const TODAY = new Date().toISOString().slice(0, 10);

const state = JSON.parse(readFileSync(STATE, 'utf-8'));

// Group 1+2 -> /ndt-erp-{slug}, Group 3 -> /erp/{slug}, Group 4 -> /erp/{slug}
const urls = [];
function addSlug(prefix, item) {
  const slug = item.slug || item;
  // group1+2 slugs already start with "ndt-erp-"
  const path = prefix === '/' ? `/${slug}` : `${prefix}/${slug}`;
  urls.push(`${SITE}${path}`);
}

state.group1.forEach(it => addSlug('/', it));
state.group2.forEach(it => addSlug('/', it));
state.group3.forEach(it => addSlug('/erp', it));
state.group4.forEach(it => addSlug('/erp', it));

console.log(`Total new URLs: ${urls.length}`);

// 1. Append to public/sitemap.xml
const sm = readFileSync(SITEMAP, 'utf-8');
const closeTag = '</urlset>';
const idx = sm.lastIndexOf(closeTag);
if (idx < 0) {
  console.error('sitemap.xml missing </urlset>');
  process.exit(1);
}

const existingLocs = new Set();
{
  const re = /<loc>([^<]+)<\/loc>/g;
  let m;
  while ((m = re.exec(sm)) !== null) existingLocs.add(m[1].trim());
}

const newEntries = urls
  .filter(u => !existingLocs.has(u))
  .map(u => `  <url>\n    <loc>${u}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.80</priority>\n  </url>`)
  .join('\n');

if (newEntries.length === 0) {
  console.log('All URLs already in sitemap. No change.');
} else {
  const updated = sm.slice(0, idx) + '  <!-- ERP Expansion 2026-05-23 -->\n' + newEntries + '\n' + sm.slice(idx);
  writeFileSync(SITEMAP, updated, 'utf-8');
  console.log(`Appended ${newEntries.split('<url>').length - 1} new <url> entries to sitemap.xml`);
}

// 2. Write indexing-url-list.json (tier=A for all new pages — highest priority)
const tierList = {
  generated: new Date().toISOString(),
  source: 'erp-pages-2026-05-23-state.json',
  urls: urls.map(u => ({ url: u, tier: 'A' })),
};
writeFileSync(URL_LIST, JSON.stringify(tierList, null, 2), 'utf-8');
console.log(`Wrote ${urls.length} URLs to scripts/indexing-url-list.json (tier=A)`);
console.log('Next: node scripts/gsc-submit-multi-account.mjs --dry-run');
console.log('Then: node scripts/gsc-submit-multi-account.mjs');
