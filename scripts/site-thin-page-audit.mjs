#!/usr/bin/env node
/**
 * Site-wide thin-page audit. Walks every dist/{route}/index.html, extracts
 * the <main> body word count (strips nav + footer + Helmet head), and reports
 * routes below a quality threshold.
 *
 * Usage:
 *   node scripts/site-thin-page-audit.mjs                       # default threshold 1000
 *   node scripts/site-thin-page-audit.mjs --threshold=1500
 *   node scripts/site-thin-page-audit.mjs --prefix=/blog,/training
 *   node scripts/site-thin-page-audit.mjs --json                # write JSON report
 */
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');

const args = process.argv.slice(2);
const threshold = parseInt((args.find(a => a.startsWith('--threshold=')) || '--threshold=1000').split('=')[1], 10);
const prefixFilter = (args.find(a => a.startsWith('--prefix=')) || '').replace('--prefix=', '').split(',').filter(Boolean);
const writeJson = args.includes('--json');

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    const st = statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (f === 'index.html') out.push(p);
  }
  return out;
}

function extractMainText(html) {
  // Prefer <main>...</main>; fall back to <body>
  let m = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!m) m = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!m) return '';
  let text = m[1];
  // Strip script + style + nav + footer + header
  text = text.replace(/<script[\s\S]*?<\/script>/g, ' ');
  text = text.replace(/<style[\s\S]*?<\/style>/g, ' ');
  text = text.replace(/<nav[\s\S]*?<\/nav>/g, ' ');
  text = text.replace(/<footer[\s\S]*?<\/footer>/g, ' ');
  text = text.replace(/<header[\s\S]*?<\/header>/g, ' ');
  text = text.replace(/<[^>]+>/g, ' ');
  text = text.replace(/&[a-z]+;/gi, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  return text;
}

const files = walk(DIST);
const results = [];
const buckets = { '<300': 0, '300-599': 0, '600-899': 0, '900-1199': 0, '1200-1499': 0, '1500+': 0 };

for (const file of files) {
  const relRoute = '/' + file.replace(DIST, '').replace(/\\/g, '/').replace(/^\//, '').replace(/\/index\.html$/, '');
  const route = relRoute === '/' ? '/' : relRoute;
  if (prefixFilter.length && !prefixFilter.some(p => route.startsWith(p))) continue;
  const html = readFileSync(file, 'utf-8');
  const text = extractMainText(html);
  const words = text.split(/\s+/).filter(Boolean).length;
  results.push({ route, words });
  if (words < 300) buckets['<300']++;
  else if (words < 600) buckets['300-599']++;
  else if (words < 900) buckets['600-899']++;
  else if (words < 1200) buckets['900-1199']++;
  else if (words < 1500) buckets['1200-1499']++;
  else buckets['1500+']++;
}

results.sort((a, b) => a.words - b.words);
const thin = results.filter(r => r.words < threshold);

console.log(`Site-wide thin-page audit (threshold: ${threshold}w)`);
console.log(`  Total prerendered routes scanned: ${results.length}`);
if (prefixFilter.length) console.log(`  Prefix filter: ${prefixFilter.join(', ')}`);
console.log(`  Distribution:`);
for (const [k, v] of Object.entries(buckets)) console.log(`    ${k}: ${v}`);
console.log(`  Thin (< ${threshold}w): ${thin.length}`);

// Bucket thin pages by route family
const families = new Map();
for (const r of thin) {
  let family;
  if (r.route === '/' || r.route === '') family = '/ (root)';
  else if (r.route.startsWith('/blog/')) family = '/blog/*';
  else if (r.route.startsWith('/3d-scanning-')) family = '/3d-scanning-*';
  else if (r.route.startsWith('/ndt-erp-')) family = '/ndt-erp-*';
  else if (r.route.startsWith('/ndt-training-')) family = '/ndt-training-*';
  else if (r.route.startsWith('/digital-twin-')) family = '/digital-twin-*';
  else if (r.route.startsWith('/consulting/ndt-consulting-')) family = '/consulting/ndt-consulting-*';
  else if (r.route.startsWith('/consulting/')) family = '/consulting/* (service-lines)';
  else if (r.route.startsWith('/training/')) family = '/training/*';
  else if (r.route.startsWith('/compare/')) family = '/compare/*';
  else if (r.route.startsWith('/erp/')) family = '/erp/*';
  else if (r.route.startsWith('/digital-twins/')) family = '/digital-twins/*';
  else if (r.route.startsWith('/corporate-training/')) family = '/corporate-training/*';
  else if (r.route.startsWith('/verticals/')) family = '/verticals/*';
  else family = 'top-level / hubs';
  if (!families.has(family)) families.set(family, []);
  families.get(family).push(r);
}

console.log(`\n  Thin pages by route family:`);
const familyEntries = [...families.entries()].sort((a, b) => b[1].length - a[1].length);
for (const [fam, items] of familyEntries) {
  console.log(`    ${fam}: ${items.length}`);
}

console.log(`\n  Top-20 thinnest routes:`);
for (const r of results.slice(0, 20)) console.log(`    ${r.words}w  ${r.route}`);

if (writeJson) {
  const out = {
    generatedAt: '2026-06-25',
    threshold,
    scanned: results.length,
    distribution: buckets,
    thinCount: thin.length,
    byFamily: Object.fromEntries(familyEntries.map(([k, v]) => [k, v.length])),
    thinRoutes: thin,
  };
  const path = join(ROOT, 'scripts', 'thin-page-audit-2026-06-25.json');
  writeFileSync(path, JSON.stringify(out, null, 2), 'utf-8');
  console.log(`\n  Wrote JSON report: ${path}`);
}
