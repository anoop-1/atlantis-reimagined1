#!/usr/bin/env node
/**
 * Day-8b — Marine NDT Report Format URL list.
 * 57 ndt-reporting-{city} city pages + 3 pillar pages all touched by the
 * MarineReportFormatBlock cascade and prerender bodyText enrichment.
 *
 * Trailing slash per CLAUDE.md §15.4.
 */
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE = 'https://atlantisndt.com';

const seen = new Set();
const all = [];
function add(url, tier='A-MARINE') {
  const u = url.endsWith('/') ? url : url + '/';
  if (!seen.has(u)) { seen.add(u); all.push({ url: u, tier }); }
}

// 3 pillars
add(`${SITE}/intelligent-reporting-software`);
add(`${SITE}/best-ndt-reporting-software-2026`);
add(`${SITE}/marine-offshore-ndt-services`);

// 57 reporting city pages — read from src/pages/ndt-reporting-*.tsx file list
const pages = readdirSync(join(ROOT, 'src', 'pages'))
  .filter(f => f.startsWith('ndt-reporting-') && f.endsWith('.tsx'));
for (const f of pages) {
  const slug = f.replace(/\.tsx$/, '');
  add(`${SITE}/${slug}`);
}

const out = {
  generated: new Date().toISOString(),
  source: 'Day-8b Marine NDT Report Format cascade — IACS class-society sequence (cover/cal/L2/report) across reporting pillars + 57 city pages',
  count: all.length,
  urls: all,
};
writeFileSync(join(__dirname, 'indexing-url-list-marine-reporting.json'), JSON.stringify(out, null, 2), 'utf-8');
console.log(`Wrote ${all.length} URLs → scripts/indexing-url-list-marine-reporting.json`);
