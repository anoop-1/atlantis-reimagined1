#!/usr/bin/env node
/**
 * Identify city slugs that have a route but no rich-content map entry.
 *
 * Usage:
 *   node scripts/identify-thin-city-pages.mjs --segment=erp
 *   node scripts/identify-thin-city-pages.mjs --segment=dt
 *   node scripts/identify-thin-city-pages.mjs --segment=all
 */
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const args = process.argv.slice(2);
const segment = (args.find(a => a.startsWith('--segment=')) || '--segment=all').split('=')[1];

function readCuratedSet(name) {
  const txt = readFileSync(join(ROOT, 'src', 'data', 'curated-cities.ts'), 'utf-8');
  // Allow optional TS type annotation: `export const X: Set<string> = new Set([...])`
  const m = txt.match(new RegExp('export const ' + name + '[^=]*=\\s*new Set\\(\\[([\\s\\S]*?)\\]\\)'));
  if (!m) return new Set();
  return new Set([...m[1].matchAll(/['"]([^'"]+)['"]/g)].map(x => x[1]));
}

function readMapKeys(filePath, mapVarRegex) {
  const txt = readFileSync(filePath, 'utf-8');
  const m = txt.match(mapVarRegex);
  if (!m) return new Set();
  // Capture all quoted keys (any casing) then normalise to slug form
  const quoted = [...m[1].matchAll(/['"]([^'"]+)['"]\s*:/g)].map(x => x[1]);
  const bare = [...m[1].matchAll(/^\s*([a-zA-Z][a-zA-Z0-9_-]*)\s*:/gm)].map(x => x[1]);
  const slugify = (s) => s.toLowerCase().replace(/[\s_]+/g, '-').replace(/[^a-z0-9-]/g, '');
  return new Set([...quoted, ...bare].map(slugify));
}

const erpSlugs = readCuratedSet('ERP_CITY_PAGE_SLUGS');
const dtSlugs = readCuratedSet('DT_CITY_PAGE_SLUGS');

// erpLocationContext map in ErpLocationPage.tsx
const erpMap = readMapKeys(
  join(ROOT, 'src', 'components', 'ErpLocationPage.tsx'),
  /const erpLocationContext[^=]*=\s*\{([\s\S]*?)\n\};/
);

// digitalTwinLocationContext in dt-city-data.mjs
const dtMap = readMapKeys(
  join(ROOT, 'src', 'data', 'dt-city-data.mjs'),
  /(?:export\s+)?const digitalTwinLocationContext[^=]*=\s*\{([\s\S]*?)\n\}\s*;?/
);

function diff(slugs, map, label) {
  const missing = [...slugs].filter(s => !map.has(s)).sort();
  console.log(`\n${label}:`);
  console.log(`  Slugs in routing: ${slugs.size}`);
  console.log(`  Slugs in rich-context map: ${map.size}`);
  console.log(`  Missing (thin): ${missing.length}`);
  if (missing.length) {
    console.log(`  First 30 thin slugs:`);
    missing.slice(0, 30).forEach(s => console.log(`    ${s}`));
  }
  return missing;
}

const out = {};
if (segment === 'erp' || segment === 'all') out.erp = diff(erpSlugs, erpMap, 'ERP');
if (segment === 'dt' || segment === 'all') out.dt = diff(dtSlugs, dtMap, 'DT');

if (args.includes('--json')) {
  console.log('\n--- JSON ---');
  console.log(JSON.stringify(out, null, 2));
}
