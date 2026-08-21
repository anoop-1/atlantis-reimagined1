#!/usr/bin/env node
/**
 * Keyword cannibalisation audit — 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * The owner asked why impressions and clicks are so unevenly split between
 * products. Measured over 90 days they are not merely uneven, they are three
 * orders of magnitude apart:
 *
 *   Blog        263,041 impressions   3,257 clicks
 *   Training     25,444 impressions     572 clicks
 *   ERP           9,272 impressions     102 clicks   (US: 380 impr, 0 clicks)
 *   Consulting    3,218 impressions      49 clicks   (US: 1,109 impr, 1 click)
 *
 * The instinct is that consulting needs more pages. It does not. Consulting has
 * 250+ pages and the demand is already there — "asnt level iii consulting" alone
 * draws 281 impressions, "ndt level 3 consultant" 218, "ndt level 3 consulting
 * services" 190. They sit at positions 54, 65 and 75.
 *
 * Pulling page-by-query for those terms shows why. THIRTY-ONE separate pages
 * compete for "asnt level iii consulting". The purpose-built page,
 * /consulting/asnt-level-iii-consulting-services, ranks 83rd. A blog post ranks
 * 12th. Google is being handed thirty-one candidates for one intent, splitting
 * the signal thirty-one ways, and picking a different one every time.
 *
 * The mechanism is visible in the markup: 1,925 pages carry "ASNT Level III" in
 * their <title> and 1,110 carry it in their <h1>, because the city templates
 * bake the head term into every permutation:
 *
 *   NDT Consulting in Houston — ASNT Level III (Level 3) + API RBI + FFS + …
 *   NDT Consulting in Seattle — ASNT Level III (Level 3) + API RBI + FFS + …
 *
 * Blogs dominate the site precisely because they are the only family whose
 * titles are individually written. The imbalance is not a demand problem, it is
 * a self-inflicted one.
 *
 * WHAT THIS REPORTS
 * For each head term, how many built pages claim it in title or H1, and which
 * page SHOULD own it (the canonical). That list is the work queue for the
 * de-cannibalisation pass.
 *
 *   node scripts/cannibalisation-audit.mjs
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

/** Head terms worth owning, with the page that should own each. */
const CLUSTERS = [
  { term: 'asnt level iii consulting', re: /asnt level (iii|3)\b[^|—-]{0,24}consult/i, canonical: '/consulting/asnt-level-iii-consulting-services' },
  { term: 'ndt level 3 consulting', re: /ndt level (iii|3)\b[^|—-]{0,24}consult/i, canonical: '/consulting/asnt-level-iii-consulting-services' },
  { term: 'ndt consulting', re: /\bndt consulting\b/i, canonical: '/consulting' },
  { term: 'ndt software', re: /\bndt (inspection |reporting )?software\b/i, canonical: '/ndt-inspection-software' },
  { term: 'ndt erp', re: /\bndt erp\b/i, canonical: '/erp' },
  { term: 'ndt training', re: /\bndt training\b/i, canonical: '/training' },
  { term: 'written practice', re: /\bwritten practice\b/i, canonical: '/consulting/written-practice-development' },
  { term: 'api 510 program audit', re: /\bapi 510\b[^|—-]{0,20}(audit|program)/i, canonical: '/consulting/api-510-program-audit' },
];

function pages() {
  const out = [];
  const walk = (d) => {
    for (const n of readdirSync(d)) {
      const q = join(d, n);
      if (statSync(q).isDirectory()) walk(q);
      else if (n === 'index.html') {
        const html = readFileSync(q, 'utf-8');
        const path = '/' + relative(DIST, d).split('\\').join('/');
        out.push({
          path: path === '/.' ? '/' : path,
          title: (html.match(/<title>([^<]*)<\/title>/) || [])[1] || '',
          h1: (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1]?.replace(/<[^>]+>/g, '') || '',
          noindex: /name=["']robots["'][^>]*noindex/i.test(html),
        });
      }
    }
  };
  walk(DIST);
  return out;
}

function main() {
  const all = pages().filter((p) => !p.noindex);
  console.log(`\nIndexable pages: ${all.length}\n`);
  const report = {};

  for (const c of CLUSTERS) {
    const inTitle = all.filter((p) => c.re.test(p.title));
    const inH1 = all.filter((p) => c.re.test(p.h1));
    const claimants = new Set([...inTitle, ...inH1].map((p) => p.path));
    const canonicalClaims = claimants.has(c.canonical);

    console.log(`── "${c.term}"`);
    console.log(`   claimed in <title> by ${inTitle.length} pages · in <h1> by ${inH1.length} pages · ${claimants.size} distinct`);
    console.log(`   canonical: ${c.canonical}${canonicalClaims ? '' : '   ⚠️  CANONICAL DOES NOT CLAIM THE TERM'}`);
    // Show the families the claimants come from — that is what gets fixed.
    const fam = {};
    for (const p of claimants) {
      const seg = p.split('/').filter(Boolean);
      const k = seg.length < 2 ? (seg[0] ? `/${seg[0]}` : '/') : `/${seg[0]}/${seg[1].replace(/-[a-z0-9-]+$/, '*')}`;
      fam[k] = (fam[k] || 0) + 1;
    }
    Object.entries(fam).sort((a, b) => b[1] - a[1]).slice(0, 5)
      .forEach(([k, v]) => console.log(`     ${String(v).padStart(4)}  ${k}`));
    console.log();
    report[c.term] = { titleClaims: inTitle.length, h1Claims: inH1.length, distinct: claimants.size, canonical: c.canonical, canonicalClaims, families: fam };
  }

  writeFileSync(join(__dirname, 'cannibalisation-audit.json'), JSON.stringify(report, null, 1));
  console.log('  → scripts/cannibalisation-audit.json\n');
}

main();
