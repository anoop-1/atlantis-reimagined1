// Merge all parts into final glossary.json (deduped by slug)
import { readFileSync, writeFileSync, existsSync } from 'fs';

const parts = ['part1', 'part2', 'part3', 'part4'];
const all = [];
const seen = new Set();
const duplicates = [];

for (const p of parts) {
  const path = new URL(`./${p}.json`, import.meta.url);
  if (!existsSync(path)) {
    console.warn(`MISSING: ${p}.json`);
    continue;
  }
  const data = JSON.parse(readFileSync(path, 'utf-8'));
  for (const entry of data) {
    if (seen.has(entry.slug)) {
      duplicates.push(entry.slug);
      continue;
    }
    seen.add(entry.slug);
    all.push(entry);
  }
  console.log(`${p}: +${data.length} entries`);
}

if (duplicates.length) {
  console.warn(`Duplicates skipped: ${duplicates.length} (${duplicates.slice(0,10).join(', ')})`);
}

// Verify blogs.json slugs to filter relatedBlogs to valid ones
const blogs = JSON.parse(readFileSync(new URL('../../src/data/blogs.json', import.meta.url), 'utf-8'));
const blogSlugs = new Set(blogs.map(b => b.slug));

let blogRefsFiltered = 0;
const termSlugs = new Set(all.map(e => e.slug));
let termRefsFiltered = 0;

for (const entry of all) {
  if (entry.relatedBlogs && entry.relatedBlogs.length) {
    const before = entry.relatedBlogs.length;
    entry.relatedBlogs = entry.relatedBlogs.filter(s => blogSlugs.has(s));
    blogRefsFiltered += (before - entry.relatedBlogs.length);
  }
  if (entry.relatedTerms && entry.relatedTerms.length) {
    const before = entry.relatedTerms.length;
    entry.relatedTerms = entry.relatedTerms.filter(s => termSlugs.has(s));
    termRefsFiltered += (before - entry.relatedTerms.length);
  }
}

console.log(`relatedBlogs filtered to valid: removed ${blogRefsFiltered}`);
console.log(`relatedTerms filtered to valid: removed ${termRefsFiltered}`);

// Category breakdown
const byCat = {};
for (const e of all) byCat[e.category] = (byCat[e.category] || 0) + 1;
console.log('Categories:', byCat);
console.log(`TOTAL: ${all.length} entries`);

writeFileSync(new URL('../../src/data/glossary.json', import.meta.url), JSON.stringify(all, null, 2));
console.log('Wrote src/data/glossary.json');
