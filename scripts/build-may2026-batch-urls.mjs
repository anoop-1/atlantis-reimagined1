#!/usr/bin/env node
/**
 * Build the tier-tagged URL list for the May-2026 expansion batch.
 *
 * Enumerates every URL we expect Google to index for the new pages added
 * during the May-2026 SEO sprint:
 *   - 82 new Digital Twin city pages (Tier A + Tier B)
 *   - 88 new NDT Training city pages
 *   - 17 new blog posts (orphan-slug fills + 4 method pillars are part of blogs.json)
 *   - 218 glossary term pages + /glossary index
 *   - 33 standards detail pages + /standards index
 *   - 1 /resources/state-of-ndt-2026 landing
 *   - 67 + 82 = 149 existing+new DT city pages (re-submit so Google sees the
 *     enriched body content)
 *   - 30 rewritten ERP city pages
 *   - 2 rewritten pillars (/digital-twins, /ndt-erp-solution)
 *
 * Output: scripts/may2026-priority-urls.json — same shape as
 * indexing-url-list.json so it can be merged or used standalone.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const SITE = 'https://atlantisndt.com';

const out = [];
const seen = new Set();
const push = (url, type, tier = 'S') => {
  if (seen.has(url)) return;
  seen.add(url);
  out.push({ tier, url, type, lang: 'en' });
};

// 1. Rewritten pillars
push(`${SITE}/digital-twins`, 'dt-pillar-rewrite', 'S');
push(`${SITE}/ndt-erp-solution`, 'erp-pillar-rewrite', 'S');

// 2. State of NDT 2026 landing
push(`${SITE}/resources/state-of-ndt-2026`, 'lead-magnet-landing', 'S');

// 3. Glossary
push(`${SITE}/glossary`, 'glossary-index', 'S');
try {
  const gloss = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/glossary.json'), 'utf-8'));
  for (const g of gloss) push(`${SITE}/glossary/${g.slug}`, 'glossary-term', 'A');
  console.log(`  ✓ glossary terms: ${gloss.length}`);
} catch (e) {
  console.warn(`  ⚠ glossary.json not loadable: ${e.message}`);
}

// 4. Standards
push(`${SITE}/standards`, 'standards-index', 'S');
try {
  const std = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/standards.json'), 'utf-8'));
  for (const s of std) push(`${SITE}/standards/${s.slug}`, 'standards-detail', 'A');
  console.log(`  ✓ standards: ${std.length}`);
} catch (e) {
  console.warn(`  ⚠ standards.json not loadable: ${e.message}`);
}

// 5. New blog slugs (4 method pillars + 17 orphan-fills) — pull from blogs.json
//    by date filter (anything added 2026-05-16 or later)
try {
  const blogs = JSON.parse(fs.readFileSync(path.join(ROOT, 'src/data/blogs.json'), 'utf-8'));
  const fresh = blogs.filter(b => {
    const d = String(b.createdAt || b.date || '');
    return d.includes('2026-05-16') || d.includes('May 16, 2026') || d.includes('2026-05-17') || d.includes('May 17, 2026');
  });
  for (const b of fresh) push(`${SITE}/blog/${b.slug}`, 'blog-may2026', 'S');
  console.log(`  ✓ fresh blog entries (post-2026-05-15): ${fresh.length}`);
} catch (e) {
  console.warn(`  ⚠ blogs.json not loadable: ${e.message}`);
}

// 6. Digital Twin city pages — pull from prerender.mjs `digitalTwinCities`
//    Resubmit ALL 149 (existing + new) so Google sees the enriched body.
try {
  const pre = fs.readFileSync(path.join(ROOT, 'scripts/prerender.mjs'), 'utf-8');
  const dtArrMatch = pre.match(/const digitalTwinCities\s*=\s*\[([\s\S]*?)\];/);
  if (dtArrMatch) {
    const slugs = [...dtArrMatch[1].matchAll(/slug:\s*['"]([a-z0-9-]+)['"]/g)].map(m => m[1]);
    const uniq = [...new Set(slugs)];
    for (const s of uniq) push(`${SITE}/digital-twin-${s}`, 'dt-city', 'S');
    console.log(`  ✓ DT city pages: ${uniq.length}`);
  } else {
    console.warn('  ⚠ digitalTwinCities array not matched');
  }
} catch (e) {
  console.warn(`  ⚠ prerender.mjs DT enum failed: ${e.message}`);
}

// 7. New training city pages — pull from training-cities.ts
try {
  const tc = fs.readFileSync(path.join(ROOT, 'src/data/training-cities.ts'), 'utf-8');
  const slugs = [...tc.matchAll(/slug:\s*['"]([a-z0-9-]+)['"]/g)].map(m => m[1]);
  const uniq = [...new Set(slugs)];
  for (const s of uniq) push(`${SITE}/ndt-training-${s}`, 'training-city-may2026', 'A');
  console.log(`  ✓ training city pages: ${uniq.length}`);
} catch (e) {
  console.warn(`  ⚠ training-cities.ts not loadable: ${e.message}`);
}

// 8. 30 rewritten ERP city pages — hardcoded list
const erpTop30 = [
  'houston','dubai','abu-dhabi','saudi-arabia','calgary','singapore','mumbai',
  'london','perth','doha','kuwait','muscat','hyderabad','chennai','kuala-lumpur',
  'lagos','new-orleans','denver','aberdeen','oslo','jubail','yanbu','edmonton',
  'rotterdam','jakarta','dammam','manama','sharjah','bahrain','qatar'
];
for (const c of erpTop30) push(`${SITE}/ndt-erp-${c}`, 'erp-city-rewrite', 'S');
console.log(`  ✓ ERP city rewrites: ${erpTop30.length}`);

// Write output
const tierCounts = out.reduce((acc, x) => { acc[x.tier] = (acc[x.tier] || 0) + 1; return acc; }, {});
const outPath = path.join(ROOT, 'scripts/may2026-priority-urls.json');
fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
console.log(`\n✅ Wrote ${out.length} URLs to ${outPath}`);
console.log(`  Tier counts:`, tierCounts);
