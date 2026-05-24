#!/usr/bin/env node
/**
 * Build URL list for day 1 (2026-05-24) — converts file paths to canonical URLs
 * and writes scripts/indexing-url-list-day1.json.
 *
 * Mapping rules:
 *   src/pages/erp/{slug}.tsx              → /erp/{slug}
 *   src/pages/digital-twins-usecases/{N}  → /digital-twins/{kebab-from-name}
 *   src/pages/compare/{Name}.tsx          → /compare/{kebab-from-name}
 *   src/pages/digital-twin-{city}.tsx     → /digital-twin-{city}
 *   src/pages/ndt-erp-{city}.tsx          → /ndt-erp-{city}
 *   src/pages/ndt-training-{city}.tsx     → /ndt-training-{city}
 *   src/pages/ndt-consulting-{city}.tsx   → /consulting/ndt-consulting-{city}
 */
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE = 'https://atlantisndt.com';

function pascalToKebab(name) {
  return name
    .replace(/\.tsx$/, '')
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

const files = execSync('git diff --name-only HEAD~1 HEAD -- src/pages', { cwd: ROOT })
  .toString().split('\n').filter(f => f.endsWith('.tsx'));

const urls = new Set();
for (const f of files) {
  const rel = f.replace(/\\/g, '/');
  let path = null;

  if (rel.startsWith('src/pages/erp/')) {
    const slug = rel.replace('src/pages/erp/', '').replace('.tsx', '');
    path = `/erp/${slug}`;
  } else if (rel.startsWith('src/pages/digital-twins-usecases/')) {
    const name = rel.replace('src/pages/digital-twins-usecases/', '').replace('.tsx', '');
    path = `/digital-twins/${pascalToKebab(name)}`;
  } else if (rel.startsWith('src/pages/compare/')) {
    const name = rel.replace('src/pages/compare/', '').replace('.tsx', '');
    // AtlantisDtVsCogniteDataFusion → atlantis-dt-vs-cognite-data-fusion
    path = `/compare/${pascalToKebab(name)}`;
  } else if (rel.startsWith('src/pages/digital-twin-')) {
    const slug = rel.replace('src/pages/', '').replace('.tsx', '');
    path = `/${slug}`;
  } else if (rel.startsWith('src/pages/ndt-erp-')) {
    const slug = rel.replace('src/pages/', '').replace('.tsx', '');
    path = `/${slug}`;
  } else if (rel.startsWith('src/pages/ndt-training-')) {
    const slug = rel.replace('src/pages/', '').replace('.tsx', '');
    path = `/${slug}`;
  } else if (rel.startsWith('src/pages/ndt-consulting-')) {
    const slug = rel.replace('src/pages/', '').replace('.tsx', '');
    path = `/consulting/${slug}`;
  }

  if (path) urls.add(`${SITE}${path}`);
}

const list = {
  generated: new Date().toISOString(),
  source: 'Day 1 sprint 2026-05-24 — 4-segment 20% boost',
  urls: Array.from(urls).sort().map(u => ({ url: u, tier: 'A' })),
};

writeFileSync(join(__dirname, 'indexing-url-list-day1.json'), JSON.stringify(list, null, 2));
console.log('Wrote', list.urls.length, 'URLs to scripts/indexing-url-list-day1.json');
console.log('Sample:');
list.urls.slice(0, 10).forEach(u => console.log('  ', u.url));
