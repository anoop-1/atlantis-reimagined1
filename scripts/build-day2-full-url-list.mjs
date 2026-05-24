#!/usr/bin/env node
/**
 * Build full Day 2 URL list from git diff HEAD~1..HEAD (the Day-2 commit).
 * Outputs scripts/indexing-url-list-day2-full.json.
 */
import { execSync } from 'child_process';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE = 'https://atlantisndt.com';

function pascalToKebab(name) {
  return name.replace(/\.tsx$/, '').replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
}

const files = execSync('git diff --name-only HEAD~1 HEAD -- src/pages', { cwd: ROOT })
  .toString().split('\n').filter(f => f.endsWith('.tsx'));

const urls = new Set();
for (const f of files) {
  const rel = f.replace(/\\/g, '/');
  let path = null;
  if (rel.startsWith('src/pages/erp/')) path = `/erp/${rel.replace('src/pages/erp/', '').replace('.tsx', '')}`;
  else if (rel.startsWith('src/pages/blog/')) path = `/blog/${rel.replace('src/pages/blog/', '').replace('.tsx', '')}`;
  else if (rel.startsWith('src/pages/digital-twins-combos/')) {
    const name = rel.replace('src/pages/digital-twins-combos/', '');
    path = `/digital-twins/${pascalToKebab(name)}`;
  }
  else if (rel.startsWith('src/pages/digital-twins-usecases/')) {
    const name = rel.replace('src/pages/digital-twins-usecases/', '');
    path = `/digital-twins/${pascalToKebab(name)}`;
  }
  else if (rel.startsWith('src/pages/compare/')) {
    const name = rel.replace('src/pages/compare/', '');
    path = `/compare/${pascalToKebab(name)}`;
  }
  else if (rel.startsWith('src/pages/corporate-training/')) {
    const name = rel.replace('src/pages/corporate-training/', '');
    path = `/corporate-training/${pascalToKebab(name)}`;
  }
  else if (rel.startsWith('src/pages/consulting/')) {
    path = `/consulting/${rel.replace('src/pages/consulting/', '').replace('.tsx', '')}`;
  }
  else if (rel.startsWith('src/pages/digital-twin-')) path = `/${rel.replace('src/pages/', '').replace('.tsx', '')}`;
  else if (rel.startsWith('src/pages/ndt-erp-')) path = `/${rel.replace('src/pages/', '').replace('.tsx', '')}`;
  else if (rel.startsWith('src/pages/ndt-training-')) path = `/${rel.replace('src/pages/', '').replace('.tsx', '')}`;
  else if (rel.startsWith('src/pages/ndt-consulting-')) path = `/consulting/${rel.replace('src/pages/', '').replace('.tsx', '')}`;
  if (path) urls.add(`${SITE}${path}`);
}

const list = {
  generated: new Date().toISOString(),
  source: 'Day 2 sprint 2026-05-24 — 4 segments cycle 2',
  urls: Array.from(urls).sort().map(u => ({ url: u, tier: 'A' })),
};

writeFileSync(join(__dirname, 'indexing-url-list-day2-full.json'), JSON.stringify(list, null, 2));
console.log('Wrote', list.urls.length, 'URLs to scripts/indexing-url-list-day2-full.json');
list.urls.slice(0, 10).forEach(u => console.log('  ', u.url));
