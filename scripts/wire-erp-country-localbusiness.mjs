#!/usr/bin/env node
/**
 * Wire `countrySlug` + `countryLabel` props into all `/erp/{app}-for-{country}`
 * .tsx call-sites of ErpIndustryAppPage. Idempotent.
 *
 * Single template-layer pass (Step 1 of Day-7 plan):
 *   - LocalBusiness JSON-LD now cascades to ~25 country-variant ERP pages.
 *   - Builds local-pack eligibility for country-suffixed money queries
 *     (e.g. "construction erp singapore", "erp oil and gas malaysia").
 */
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const ERP_DIR = join(ROOT, 'src', 'pages', 'erp');

const COUNTRY_MAP = {
  'india': 'India',
  'malaysia': 'Malaysia',
  'saudi-arabia': 'Saudi Arabia',
  'singapore': 'Singapore',
  'uae': 'UAE',
  'usa': 'USA',
  'uk': 'UK',
  'australia': 'Australia',
  'canada': 'Canada',
  'germany': 'Germany',
  'france': 'France',
  'norway': 'Norway',
  'netherlands': 'Netherlands',
  'qatar': 'Qatar',
  'kuwait': 'Kuwait',
  'oman': 'Oman',
  'bahrain': 'Bahrain',
  'brazil': 'Brazil',
  'china': 'China',
  'mexico': 'Mexico',
  'indonesia': 'Indonesia',
  'japan': 'Japan',
  'south-korea': 'South Korea',
  'south-africa': 'South Africa',
  'nigeria': 'Nigeria',
  'egypt': 'Egypt',
};

const files = readdirSync(ERP_DIR).filter(f => f.endsWith('.tsx'));
let patched = 0;
let skipped = 0;
const log = [];

for (const f of files) {
  // Match `-for-{country}.tsx` AND `-erp-for-{country}.tsx`
  const m = f.match(/-for-([a-z-]+)\.tsx$/);
  if (!m) continue;
  const slug = m[1];
  const label = COUNTRY_MAP[slug];
  if (!label) continue;

  const p = join(ERP_DIR, f);
  const src = readFileSync(p, 'utf-8');

  // Skip if already patched
  if (src.includes('countrySlug=') || src.includes(`countrySlug:`)) {
    skipped++;
    continue;
  }

  // Verify uses ErpIndustryAppPage (not ErpLocationPage or other)
  if (!src.includes('ErpIndustryAppPage')) continue;

  // Find the `trustBadge=` line (Phase 1: all country pages have it) — insert new props after it
  const insertAfterRe = /(\s+)(trustBadge="[^"]*")/;
  const im = src.match(insertAfterRe);
  if (!im) {
    log.push({ file: f, err: 'no trustBadge anchor found' });
    continue;
  }
  const indent = im[1];
  const newProps = `${im[2]}${indent}countrySlug="${slug}"${indent}countryLabel="${label}"`;
  const out = src.replace(insertAfterRe, indent + newProps);

  writeFileSync(p, out, 'utf-8');
  patched++;
  console.log(`patched: ${f} (${slug} → ${label})`);
}

console.log(`\nDone. ${patched} patched, ${skipped} already had props.`);
if (log.length) console.log('Issues:', JSON.stringify(log, null, 2));
