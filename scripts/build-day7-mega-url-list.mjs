#!/usr/bin/env node
/**
 * Build Day-7 mega URL list — dedupe-merge of:
 *  - All Day-0/1/2/3 sprint URL lists
 *  - All Day-7 touched URLs (LocalBusiness/TOC/CTA/RelatedGuides/consulting)
 *  - Megaweek list from 2026-06-15
 *
 * Trailing-slash canonical (atlantisndt.com convention per CLAUDE.md §15.4).
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const SITE = 'https://atlantisndt.com';

function normalize(u) {
  // Ensure trailing slash for canonical
  if (!/\.(html|xml|txt|json|jpg|png|webp|svg|pdf)$/i.test(u) && !u.endsWith('/')) return u + '/';
  return u;
}

const seen = new Set();
const all = [];
function add(u) {
  const norm = normalize(u);
  if (!seen.has(norm)) { seen.add(norm); all.push({ url: norm, tier: 'A' }); }
}

// 1) Aggregate all prior URL lists
const lists = [
  'indexing-url-list.json',
  'indexing-url-list-blogs.json',
  'indexing-url-list-phase3.json',
  'indexing-url-list-day1.json',
  'indexing-url-list-day2-full.json',
  'indexing-url-list-day3-phase3.json',
  'indexing-url-list-megaweek-2026-06-15.json',
  'indexing-url-list-featured-snippet-18.json',
  'indexing-url-list-quickanswer-2026-06-15.json',
  'indexing-url-list-batch2-2026-06-15.json',
];
for (const f of lists) {
  const p = join(__dirname, f);
  if (!existsSync(p)) continue;
  try {
    const j = JSON.parse(readFileSync(p, 'utf-8'));
    for (const u of j.urls || []) add(u.url);
  } catch (e) { console.warn('skip', f, e.message); }
}

// 2) Day-7 LocalBusiness cascade (25 country pages)
const COUNTRY_SLUGS = ['saudi-arabia', 'uae', 'india', 'malaysia', 'singapore'];
const APPS = ['crm-erp', 'cmms', 'inventory-management-erp', 'project-management-erp', 'accounting-erp'];
for (const app of APPS) for (const c of COUNTRY_SLUGS) add(`${SITE}/erp/${app}-for-${c}`);

// 3) Day-7 TOC + RelatedGuides touched pages
const day7Touched = [
  // TOC (24)
  '/asnt-certification', '/ErpModulesHub', '/NdtErpVsGenericErp', '/best-ndt-reporting-software-2026',
  '/blog/api-510-570-653-exam-schedule-2026', '/blog/ndt-salary-guide-2026-global',
  '/blog/rt-vs-ut-complete-comparison', '/blog/eddy-current-testing-complete-guide',
  '/digital-twins', '/digital-twin-roi-calculator', '/digital-twin-readiness-quiz',
  '/digital-twin-api-mapping', '/digital-twins-ndt-guide-2026',
  '/UltrasonicTestingHub', '/RadiographicTestingHub', '/MagneticParticleTestingHub',
  '/consulting',
  '/consulting/asnt-level-iii-consulting-services',
  '/consulting/api-510-pressure-vessel-inspector-services',
  '/consulting/api-570-piping-inspector-services',
  '/consulting/api-653-tank-inspector-services',
  '/consulting/fitness-for-service-api-579',
  '/erp', '/erp-industries', '/erp-modules',
  // RelatedGuidesBlock new (20)
  '/api-510-training', '/api-570-training', '/api-653-training',
  '/asnt-level-iii-training', '/aerospace-ndt-training',
  // GetCertifiedCTA new (3)
  '/api-653-tank-inspection-guide',
];
for (const p of day7Touched) {
  // Normalize PascalCase route names to kebab-case URLs where applicable
  const route = p
    .replace(/ErpModulesHub/g, 'erp-modules')
    .replace(/NdtErpVsGenericErp/g, 'ndt-erp-vs-generic-erp')
    .replace(/UltrasonicTestingHub/g, 'ultrasonic-testing')
    .replace(/RadiographicTestingHub/g, 'radiographic-testing')
    .replace(/MagneticParticleTestingHub/g, 'magnetic-particle-testing');
  add(`${SITE}${route}`);
}

const out = {
  generated: new Date().toISOString(),
  source: 'Day-7 mega — all prior sprint URLs + Day-7 touched (LocalBusiness/TOC/CTA/RelatedGuides/consulting depth)',
  count: all.length,
  urls: all,
};
writeFileSync(join(__dirname, 'indexing-url-list-day7-mega.json'), JSON.stringify(out, null, 2), 'utf-8');
console.log(`Wrote ${all.length} unique URLs to scripts/indexing-url-list-day7-mega.json`);
