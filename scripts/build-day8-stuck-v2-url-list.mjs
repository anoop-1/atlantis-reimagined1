#!/usr/bin/env node
/**
 * Day-8 stuck-v2 URL list — re-submission of the 232 Day-0 stuck URLs AFTER
 * the bodyContent backfill landed in prerender.mjs. Use with
 *   gsc-submit-multi-raw.mjs --skip-preflight
 * because preflight would still see "Crawled — not indexed" from the prior
 * blank-shell crawl. We want to force a fresh crawl now that real HTML ships.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const day0 = JSON.parse(readFileSync(join(__dirname, 'indexing-url-list.json'), 'utf-8'));
const urls = (day0.urls || []).map(u => {
  const url = u.url.endsWith('/') ? u.url : u.url + '/';
  return { url, tier: 'A-RECRAWL-V2' };
});

const out = {
  generated: new Date().toISOString(),
  source: 'Day-8 stuck-v2 — re-recrawl after prerender.mjs bodyContent backfill (no more blank shells)',
  count: urls.length,
  urls,
};
writeFileSync(join(__dirname, 'indexing-url-list-day8-stuck-v2.json'), JSON.stringify(out, null, 2), 'utf-8');
console.log(`Wrote ${urls.length} URLs → scripts/indexing-url-list-day8-stuck-v2.json`);
