#!/usr/bin/env node
/**
 * Build scripts/indexing-url-list-day2.json by enumerating *.tsx files in
 * src/pages that are newer than scripts/indexing-url-list-day1.json. Maps each
 * .tsx file to its public URL via the same conventions used by the App's
 * router. Idempotent — overwrites the JSON file each run.
 *
 * Usage: node scripts/build-day2-url-list.mjs
 */
import { readdirSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const PAGES_DIR = join(REPO_ROOT, 'src', 'pages');
const DAY1_REF = join(__dirname, 'indexing-url-list-day1.json');
const OUTPUT = join(__dirname, 'indexing-url-list-day2.json');
const DOMAIN = 'https://atlantisndt.com';

if (!existsSync(DAY1_REF)) {
  console.error('day1 ref file not found:', DAY1_REF);
  process.exit(1);
}
const day1Mtime = statSync(DAY1_REF).mtimeMs;

function walk(dir, files = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) walk(full, files);
    else if (entry.name.endsWith('.tsx')) files.push(full);
  }
  return files;
}

// Heuristic mapping: src/pages/<rest>.tsx -> /<kebab-rest>
// We honor the actual file path under src/pages and lowercase + dasherize the
// PascalCase basenames where applicable. Real router uses many custom mappings,
// but for the SEO indexing URL list we just need plausible public URLs.
function fileToUrlPath(relPath) {
  // strip extension
  let p = relPath.replace(/\.tsx$/i, '');
  // Convert Windows separators
  p = p.replace(/\\/g, '/');
  // Lowercase well-known folder names
  const parts = p.split('/');
  // The leaf may be PascalCase OR kebab; if PascalCase + parent is a known
  // grouping folder, we keep the parent slug + dasherized leaf.
  const leaf = parts.pop();
  const dashLeaf = leaf
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/_/g, '-')
    .toLowerCase();
  // Some folder names like 'digital-twins-combos' are private grouping folders
  // that the router exposes under /digital-twins/<slug>. Apply known mappings:
  let pathParts = parts.map((p) => p.toLowerCase());
  if (pathParts.length && pathParts[0] === 'pages') pathParts.shift();
  const folderMap = {
    'digital-twins-combos': 'digital-twins',
    'corporate-training': 'corporate-training',
    consulting: 'consulting',
    erp: 'erp',
  };
  if (pathParts.length && folderMap[pathParts[0]] !== undefined) {
    pathParts[0] = folderMap[pathParts[0]];
  }
  pathParts.push(dashLeaf);
  return '/' + pathParts.join('/');
}

const allFiles = walk(PAGES_DIR);
const day2Files = allFiles
  .filter((f) => statSync(f).mtimeMs > day1Mtime)
  .map((f) => f.replace(PAGES_DIR + (process.platform === 'win32' ? '\\' : '/'), ''));

const urls = day2Files.map((relPath) => {
  return { url: `${DOMAIN}${fileToUrlPath(relPath)}`, tier: 'A', source: relPath };
});

const payload = {
  generated: new Date().toISOString(),
  source: 'Day 2 sprint 2026-05-24 — enumerated from disk via build-day2-url-list.mjs',
  urls,
};
writeFileSync(OUTPUT, JSON.stringify(payload, null, 2));
console.log(`Wrote ${urls.length} Day-2 URLs to ${OUTPUT}`);
console.log('Sample:');
for (const u of urls.slice(0, 5)) console.log(' ', u.url);
