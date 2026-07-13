#!/usr/bin/env node
/**
 * Day-9 URL list — 13 new blogs + 290 ERP city pages (buyer-FAQ cascade) + 3 pillars.
 * Trailing-slash canonical per CLAUDE.md §15.4.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE = 'https://atlantisndt.com';

const seen = new Set();
const all = [];
function add(url, tier='A') {
  const u = url.endsWith('/') ? url : url + '/';
  if (!seen.has(u)) { seen.add(u); all.push({ url: u, tier }); }
}

// 13 new blog slugs
const newBlogs = [
  'asme-section-v-article-2-radiographic-testing-rt-requirements-explained',
  'asme-section-v-article-5-ultrasonic-thickness-measurement-requirements',
  'asme-section-v-article-6-liquid-penetrant-pt-requirements-explained',
  'asme-section-v-article-7-magnetic-particle-mt-requirements-explained',
  'aws-d1-1-structural-welding-code-2026-explained',
  'asme-b31-1-power-piping-code-explained',
  'asme-b31-3-process-piping-code-explained',
  'nas-410-aerospace-ndt-certification-explained',
  'asnt-snt-tc-1a-vs-iso-9712-which-certification-wins-2026',
  'digital-twin-for-tank-inspection-api-653-integration-guide',
  'digital-twin-for-pressure-vessels-api-510-workflow-explained',
  'digital-twin-for-pipeline-integrity-api-570-rbi-integration',
  'digital-twin-roi-for-ndt-inspection-companies-worked-examples',
];
newBlogs.forEach(s => add(`${SITE}/blog/${s}`, 'A-BLOG-NEW'));

// 3 pillars + ERP hub (buyer FAQ + title rewrite)
['/erp', '/best-ndt-reporting-software-2026', '/marine-offshore-ndt-services', '/intelligent-reporting-software', '/digital-twins'].forEach(p => add(`${SITE}${p}`, 'A-PILLAR'));

// Day-9: extract every /ndt-erp-${slug} from prerender.mjs (290 city routes —
// buyer-FAQ cascade now in static HTML). Match the erpCities array block.
const prer = readFileSync(join(ROOT, 'scripts', 'prerender.mjs'), 'utf-8');
const m = prer.match(/const\s+erpCities\s*=\s*\[([\s\S]*?)\n\];/);
if (m) {
  const slugRe = /slug:\s*['"`]([^'"`]+)['"`]/g;
  let s;
  while ((s = slugRe.exec(m[1])) !== null) {
    add(`${SITE}/ndt-erp-${s[1]}`, 'B-ERP-CITY');
  }
} else {
  console.warn('erpCities array not located in prerender.mjs');
}

const out = {
  generated: new Date().toISOString(),
  source: 'Day-9 — 13 new code-knowledge + DT cluster blogs + 290 ERP city pages (buyer-FAQ cascade) + pillars',
  count: all.length,
  urls: all,
};
writeFileSync(join(__dirname, 'indexing-url-list-day9.json'), JSON.stringify(out, null, 2), 'utf-8');
console.log(`Wrote ${all.length} URLs → scripts/indexing-url-list-day9.json`);
