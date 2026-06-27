#!/usr/bin/env node
/**
 * Round-5 Phase 1: bucket pages from gsc-report.json into actionable tiers.
 *
 *   A. Striking distance (pos 4-10, >50 imp, CTR <3%)  → quick CTR rewrite win
 *   B. Page-2 climbers (pos 11-20, >100 imp)            → CTR + bodyContent depth
 *   C. Pos 21-50 with >200 imp                          → deep content uplift
 *   D. Zero-CTR despite >100 imp                        → likely empty shell
 *   E. Top 100 by impressions, CTR < 5%                 → mass-CTR cascade
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const REPORT = JSON.parse(readFileSync(join(ROOT, 'scripts/gsc-report.json'), 'utf-8'));

const pages = REPORT.pages.map(p => ({
  page: p.page.replace(/^https:\/\/atlantisndt\.com/, ''),
  clicks: p.clicks,
  impressions: p.impressions,
  ctr: typeof p.ctr === 'string' ? parseFloat(p.ctr) : p.ctr,
  position: p.position,
}));

const tierA = pages.filter(p => p.position >= 4 && p.position <= 10 && p.impressions > 50 && p.ctr < 3).sort((a, b) => b.impressions - a.impressions);
const tierB = pages.filter(p => p.position > 10 && p.position <= 20 && p.impressions > 100).sort((a, b) => b.impressions - a.impressions);
const tierC = pages.filter(p => p.position > 20 && p.position <= 50 && p.impressions > 200).sort((a, b) => b.impressions - a.impressions);
const tierD = pages.filter(p => p.impressions > 100 && p.ctr < 0.3).sort((a, b) => b.impressions - a.impressions);
const tierE = pages.filter(p => p.impressions > 30 && p.ctr < 5).sort((a, b) => b.impressions - a.impressions).slice(0, 500);

const out = {
  generated: '2026-06-25',
  source: 'scripts/gsc-report.json',
  siteAvgCTR: REPORT.summary.avgCTR,
  totalPages: pages.length,
  tierA: { description: 'Striking distance — pos 4-10, >50 imp, CTR <3%', count: tierA.length, pages: tierA },
  tierB: { description: 'Page-2 climbers — pos 11-20, >100 imp', count: tierB.length, pages: tierB },
  tierC: { description: 'Pos 21-50, >200 imp — depth uplift target', count: tierC.length, pages: tierC },
  tierD: { description: 'Zero-CTR despite >100 imp — likely empty shell', count: tierD.length, pages: tierD },
  tierE: { description: 'Top 500 by impressions, CTR <5% — mass-CTR cascade', count: tierE.length, pages: tierE },
};

const path = join(ROOT, 'scripts/round5-opportunities.json');
writeFileSync(path, JSON.stringify(out, null, 2), 'utf-8');

console.log(`Round-5 opportunities written to: ${path}`);
console.log(`  Tier A (striking dist): ${tierA.length}`);
console.log(`  Tier B (page-2 climbers): ${tierB.length}`);
console.log(`  Tier C (pos 21-50): ${tierC.length}`);
console.log(`  Tier D (empty shells): ${tierD.length}`);
console.log(`  Tier E (mass CTR cascade): ${tierE.length}`);
console.log(`\nTop 10 Tier A (striking distance):`);
tierA.slice(0, 10).forEach(p => console.log(`  ${p.impressions}imp ${p.ctr}% pos${p.position}  ${p.page}`));
