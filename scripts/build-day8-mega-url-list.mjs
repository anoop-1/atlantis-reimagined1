#!/usr/bin/env node
/**
 * Day-8 mega URL list — consolidates Day-8 touched pages for GSC + IndexNow.
 *
 * Includes:
 *   A. Inline-anchor source pages (12) — recrawl to capture new internal links.
 *   B. Hreflang-cascaded city pages — TOP 100 by impressions (manual seed; can
 *      be extended via gsc-30day-tracker.mjs output later). UAE/IN/MY/SA heavy
 *      (the markets where en-XX targeting matters most).
 *   C. Blog routes — top 50 (E-E-A-T cascade reaches all 230 but high-impr
 *      blogs benefit most from fresh recrawl).
 *   D. Satellite home + sitemap URLs (35 each).
 *
 * Excludes the 232 stuck Day-0 ERP URLs — those go in their own list with
 * `--skip-preflight` (force-recrawl exception per CLAUDE.md §11).
 *
 * Trailing-slash canonical per CLAUDE.md §15.4.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE = 'https://atlantisndt.com';

function trail(p) {
  if (/\.(html|xml|txt|json|jpg|png|webp|svg|pdf)$/i.test(p)) return p;
  return p.endsWith('/') ? p : p + '/';
}

const seen = new Set();
const all = [];
function add(url, tier = 'A') {
  const u = trail(url);
  if (!seen.has(u)) { seen.add(u); all.push({ url: u, tier }); }
}

// A. Inline-anchor sources (12 — exact files patched + their proof variants)
const anchorSources = [
  '/blog/ndt-salary-guide-2026-global',
  '/asnt-certification',
  '/api-510-certification',
  '/api-570-certification',
  '/api-653-certification',
  '/api-653-tank-inspection-guide',
  '/blog/rt-vs-ut-complete-comparison',
  '/blog/iso-9712-vs-asnt-decision-flowchart-which-cert-by-country',
  '/contact',
  '/best-ndt-reporting-software-2026',
  '/consulting/asnt-level-iii-consulting-services',
  '/consulting/api-579-fitness-for-service-services',
];
anchorSources.forEach(p => add(SITE + p, 'A-ANCHOR'));

// B. Top hreflang-cascaded city pages (UAE/IN/MY/SA/AU + key US/CA/GB).
// Seed list pulls from prior sprint URL lists if present, then a curated set.
const seedHigh = [
  // UAE (2.4% CTR market — biggest geo-targeting win)
  'ndt-erp-dubai', 'ndt-erp-abu-dhabi', 'ndt-erp-sharjah',
  'ndt-training-dubai', 'ndt-training-abu-dhabi', 'ndt-training-sharjah',
  'consulting/ndt-consulting-dubai', 'consulting/ndt-consulting-abu-dhabi',
  'digital-twin-dubai', 'digital-twin-abu-dhabi',
  // India (1.75% CTR)
  'ndt-erp-mumbai', 'ndt-erp-hyderabad', 'ndt-erp-chennai', 'ndt-erp-bangalore',
  'ndt-erp-delhi', 'ndt-erp-pune', 'ndt-erp-vizag', 'ndt-erp-kolkata',
  'ndt-training-mumbai', 'ndt-training-hyderabad', 'ndt-training-chennai', 'ndt-training-bangalore',
  'consulting/ndt-consulting-mumbai', 'consulting/ndt-consulting-hyderabad',
  'digital-twin-mumbai', 'digital-twin-hyderabad',
  // Malaysia (1.92% CTR)
  'ndt-erp-kuala-lumpur', 'ndt-erp-johor-bahru',
  'ndt-training-kuala-lumpur',
  'consulting/ndt-consulting-kuala-lumpur',
  // Saudi Arabia
  'ndt-erp-riyadh', 'ndt-erp-jeddah', 'ndt-erp-dammam', 'ndt-erp-jubail',
  'ndt-training-riyadh', 'ndt-training-jubail', 'ndt-training-dammam',
  'consulting/ndt-consulting-riyadh',
  'digital-twin-riyadh', 'digital-twin-jubail',
  // Qatar / Kuwait / Oman / Bahrain
  'ndt-erp-doha', 'ndt-erp-kuwait', 'ndt-erp-muscat', 'ndt-erp-manama',
  'ndt-training-doha', 'ndt-training-kuwait', 'ndt-training-muscat',
  // Australia
  'ndt-erp-sydney', 'ndt-erp-perth', 'ndt-erp-melbourne', 'ndt-erp-karratha',
  'ndt-training-perth', 'ndt-training-sydney',
  // UK
  'ndt-erp-london', 'ndt-erp-aberdeen', 'ndt-erp-glasgow',
  'ndt-training-london', 'ndt-training-aberdeen',
  // Canada
  'ndt-erp-toronto', 'ndt-erp-calgary', 'ndt-erp-fort-mcmurray', 'ndt-erp-vancouver',
  'ndt-training-calgary', 'ndt-training-toronto',
  // Singapore + Nigeria + South Africa
  'ndt-erp-singapore', 'ndt-training-singapore', 'consulting/ndt-consulting-singapore',
  'ndt-erp-lagos', 'ndt-erp-port-harcourt',
  'ndt-erp-johannesburg', 'ndt-erp-cape-town',
  // USA money pages (for re-rate from US-CTR proof bands)
  'ndt-erp-houston', 'ndt-erp-dallas', 'ndt-erp-baytown', 'ndt-erp-pasadena-texas',
  'ndt-training-houston', 'ndt-training-tulsa',
  'consulting/ndt-consulting-houston',
  'digital-twin-houston',
];
seedHigh.forEach(p => add(SITE + '/' + p, 'A-HREFLANG'));

// C. Top-impression blog routes (E-E-A-T cascade)
const seedBlogs = [
  '/blog/ndt-salary-guide-2026-global',
  '/blog/api-653-tank-inspection-guide',
  '/blog/rt-vs-ut-complete-comparison',
  '/blog/iso-9712-vs-asnt-decision-flowchart-which-cert-by-country',
  '/blog/eddy-current-testing-complete-guide',
  '/blog/asnt-snt-tc-1a-certification-requirements',
  '/blog/cwi-certification-requirements-cost-career-impact',
  '/blog/aerospace-composite-inspection-ndt-methods-guide',
  '/blog/ndt-level-iii-consulting-services-guide',
  '/blog/api-510-570-653-exam-schedule-2026',
  '/blog/risk-based-inspection-rbi-implementation-guide',
  '/blog/ndt-equipment-calibration-and-maintenance-best-practices',
  '/blog/magnetic-particle-testing-complete-guide',
  '/blog/visual-testing',
  '/blog/ut-vs-rt-comparison',
  '/blog/corrosion-under-insulation',
];
seedBlogs.forEach(p => add(SITE + p, 'A-EEAT'));

// D. Satellite home + sitemap (35 sites)
const sats = [
  'advanced-ndt-techniques', 'aerospace-ndt-standards', 'api-certification-guide',
  'asset-integrity-hub', 'coating-inspection-guide', 'composite-testing-hub',
  'construction-ndt-guide', 'corrosion-management-ndt', 'heat-exchanger-ndt',
  'industrial-inspection-resources', 'lng-inspection-hub', 'manufacturing-ndt-quality',
  'marine-offshore-ndt', 'middle-east-ndt-resource', 'mining-ndt-hub',
  'ndt-automation-future', 'ndt-careers-portal', 'ndt-equipment-reviews',
  'ndt-knowledge-hub', 'ndt-safety-compliance', 'ndt-software-solutions',
  'ndt-standards-library', 'ndt-training-academy', 'nuclear-ndt-resource',
  'oil-gas-inspection-guide', 'petrochemical-ndt-hub', 'pipeline-integrity-guide',
  'power-generation-ndt', 'pressure-vessel-ndt', 'rail-ndt-resource',
  'renewable-energy-ndt', 'subsea-inspection-guide', 'tank-inspection-resource',
  'weld-quality-resource', 'welding-inspection-hub',
];
// Satellite homes use .vercel.app domain. IndexNow only accepts atlantisndt.com,
// so we mark these B-SAT tier — only fed to GSC, not IndexNow.
sats.forEach(s => add(`https://${s}.vercel.app/`, 'B-SAT'));

const out = {
  generated: new Date().toISOString(),
  source: 'Day-8 mega — inline anchors + US-CTR proof + hreflang cascade + author E-E-A-T + satellite recrawl',
  count: all.length,
  urls: all,
};
writeFileSync(join(__dirname, 'indexing-url-list-day8-mega.json'), JSON.stringify(out, null, 2), 'utf-8');
console.log(`Wrote ${all.length} unique URLs → scripts/indexing-url-list-day8-mega.json`);
