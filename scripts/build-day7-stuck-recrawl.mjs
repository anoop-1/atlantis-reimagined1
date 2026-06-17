#!/usr/bin/env node
/**
 * Build Day-7 stuck-pages recrawl list.
 * Pulls Day-0 ERP URLs from indexing-url-list.json (232 entries).
 * These pages were crawled during the 2026-05-23 to 05-29 blank-shell window
 * and Google marked them thin/empty. Resubmit forces fresh recrawl.
 *
 * Use with `gsc-submit-multi-raw.mjs --skip-preflight` since preflight would
 * also re-flag the live content.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const day0 = JSON.parse(readFileSync(join(__dirname, 'indexing-url-list.json'), 'utf-8'));
// indexing-url-list.json shape: { urls: [{ url, tier }] }
const urls = (day0.urls || []).map(u => ({ url: u.url, tier: 'A-RECRAWL' }));

const out = {
  generated: new Date().toISOString(),
  source: 'Day-7 stuck-pages force-recrawl (232 Day-0 ERP pages — blank-shell damage 2026-05-23 to 05-29)',
  count: urls.length,
  urls,
};
writeFileSync(join(__dirname, 'indexing-url-list-day7-stuck-recrawl.json'), JSON.stringify(out, null, 2), 'utf-8');
console.log(`Wrote ${urls.length} URLs to scripts/indexing-url-list-day7-stuck-recrawl.json`);
