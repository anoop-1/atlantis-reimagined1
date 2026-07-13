#!/usr/bin/env node
/**
 * Atlantis NDT - Sitemap Freshness Pass
 *
 * Reads the 9 sitemap XMLs in /public/ and rewrites any <lastmod> dates that are:
 *   - older than 60 days, OR
 *   - equal to the legacy placeholder "2026-03-01"
 * to today's ISO date (YYYY-MM-DD).
 *
 * Also refreshes every <lastmod> inside sitemap-index.xml to today (index files
 * should always reflect the most recent child-sitemap update time).
 *
 * Run: node scripts/generate-sitemaps.mjs
 * Wired into: npm run sitemaps  (and build:full)
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(ROOT, 'public');
const DIST_DIR = join(ROOT, 'dist');

const TODAY = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
const STALE_CUTOFF_DAYS = 60;
const LEGACY_PLACEHOLDER = '2026-03-01';

const SITEMAP_FILES = [
  'sitemap-index.xml',
  'sitemap.xml',
  'sitemap-core.xml',
  'sitemap-blog.xml',
  'sitemap-training.xml',
  'sitemap-consulting-locations.xml',
  'sitemap-digital-twins.xml',
  'sitemap-methods.xml',
  'sitemap-other.xml',
  'sitemap-glossary.xml',
];

function isStale(dateStr) {
  if (!dateStr) return true;
  if (dateStr === LEGACY_PLACEHOLDER) return true;
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return true;
  const ageDays = (Date.now() - d.getTime()) / (1000 * 60 * 60 * 24);
  return ageDays > STALE_CUTOFF_DAYS;
}

function refreshSitemap(xml, { forceAll }) {
  let rewrittenCount = 0;
  const next = xml.replace(/<lastmod>([^<]+)<\/lastmod>/g, (match, dateStr) => {
    const trimmed = dateStr.trim();
    if (forceAll || isStale(trimmed)) {
      if (trimmed !== TODAY) rewrittenCount += 1;
      return `<lastmod>${TODAY}</lastmod>`;
    }
    return match;
  });
  return { next, rewrittenCount };
}

function processFile(filename) {
  const publicPath = join(PUBLIC_DIR, filename);
  if (!existsSync(publicPath)) {
    console.warn(`  skip (missing): public/${filename}`);
    return { filename, rewrittenCount: 0, skipped: true };
  }
  const xml = readFileSync(publicPath, 'utf-8');
  const forceAll = filename === 'sitemap-index.xml';
  const { next, rewrittenCount } = refreshSitemap(xml, { forceAll });

  if (next !== xml) {
    writeFileSync(publicPath, next, 'utf-8');
    // Also mirror to dist/ if build output directory exists
    const distPath = join(DIST_DIR, filename);
    if (existsSync(DIST_DIR) && existsSync(distPath)) {
      writeFileSync(distPath, next, 'utf-8');
    }
  }
  return { filename, rewrittenCount, skipped: false };
}

console.log(`Sitemap freshness pass — today=${TODAY}, cutoff=${STALE_CUTOFF_DAYS}d`);

let totalRewrites = 0;
for (const f of SITEMAP_FILES) {
  const res = processFile(f);
  if (res.skipped) continue;
  totalRewrites += res.rewrittenCount;
  console.log(`  ${f}: rewrote ${res.rewrittenCount} <lastmod> entries`);
}

console.log(`Done. Total rewrites: ${totalRewrites}`);
