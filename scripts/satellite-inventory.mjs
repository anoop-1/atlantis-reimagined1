#!/usr/bin/env node
/**
 * Satellite Inventory Builder
 *
 * Walks backlink-sites/, classifies each subdirectory, counts pages, picks a
 * sample page, reads a snippet, and infers the topic / niche.
 *
 * Output: scripts/satellite-inventory-2026-05-09.json
 */
import { readdirSync, readFileSync, statSync, existsSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const SATS_DIR = join(REPO_ROOT, 'backlink-sites');
const VERIF_TOKENS = JSON.parse(
  readFileSync(join(__dirname, 'verification-tokens.json'), 'utf-8')
);

const tokenDomains = new Set(
  Object.keys(VERIF_TOKENS).map((u) => u.replace(/^https?:\/\//, '').replace(/\/$/, ''))
);

function listPages(srcAppDir) {
  const out = [];
  function walk(dir) {
    if (!existsSync(dir)) return;
    for (const e of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, e.name);
      if (e.isDirectory()) walk(full);
      else if (e.name === 'page.tsx' || e.name === 'page.ts') out.push(full);
    }
  }
  walk(srcAppDir);
  return out;
}

function inferTopic(satName, sample) {
  const lower = (satName + ' ' + sample).toLowerCase();
  const hits = [];
  const map = {
    pipeline: ['pipeline', 'gas pipeline', 'oil pipeline'],
    'pressure vessel': ['pressure vessel', 'asme viii', 'pressure-vessel'],
    corrosion: ['corrosion', 'cui ', 'pitting'],
    aerospace: ['aerospace', 'aircraft', 'nas 410', 'nadcap'],
    nuclear: ['nuclear', 'reactor', 'asme iii'],
    subsea: ['subsea', 'offshore', 'deepwater', 'rov'],
    welding: ['weld', 'aws d1.1', 'welding'],
    petrochemical: ['petrochemical', 'refinery', 'fcc'],
    asset_integrity: ['asset integrity', 'aim', 'rbi', 'risk-based'],
    ndt_general: ['non-destructive', 'ndt', 'asnt'],
    coating: ['coating', 'paint', 'nace 2'],
    tank: ['tank', 'api 653', 'storage tank'],
    composite: ['composite', 'cfrp'],
    heat_exchanger: ['heat exchanger', 'tubing', 'eddy current array'],
    rail: ['rail', 'track', 'wheel'],
    mining: ['mining', 'haul truck', 'shovel'],
    renewable: ['wind turbine', 'solar', 'renewable'],
    lng: ['lng', 'cryogenic'],
    api_certification: ['api 510', 'api 570', 'api 653', 'api certification'],
  };
  for (const [topic, kws] of Object.entries(map)) {
    if (kws.some((kw) => lower.includes(kw))) hits.push(topic);
  }
  return hits.length ? hits : ['ndt_general'];
}

const dirs = readdirSync(SATS_DIR, { withFileTypes: true })
  .filter((e) => e.isDirectory())
  .map((e) => e.name);

const inventory = [];

for (const sat of dirs) {
  const root = join(SATS_DIR, sat);
  const pkg = join(root, 'package.json');
  if (!existsSync(pkg)) continue; // skip non-projects
  const srcApp = join(root, 'src', 'app');
  const pages = listPages(srcApp);
  const homePath = join(srcApp, 'page.tsx');
  let sample = '';
  let homeWords = 0;
  if (existsSync(homePath)) {
    const txt = readFileSync(homePath, 'utf-8');
    sample = txt.slice(0, 4000);
    homeWords = txt.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  }
  const layoutPath = join(srcApp, 'layout.tsx');
  let title = sat;
  if (existsSync(layoutPath)) {
    const lt = readFileSync(layoutPath, 'utf-8');
    const m = lt.match(/default:\s*['"`]([^'"`]+)['"`]/);
    if (m) title = m[1];
  }
  const sitemapPath = join(srcApp, 'sitemap.ts');
  const robotsPath = join(srcApp, 'robots.ts');
  const vercelJson = join(root, 'vercel.json');
  const blogDir = join(srcApp, 'blog');
  const articlesDir = join(srcApp, 'articles');
  const guidesDir = join(srcApp, 'guides');
  const targetDomain = `https://${sat}.vercel.app`;
  inventory.push({
    name: sat,
    path: root,
    targetDomain,
    verifiedInTokens: tokenDomains.has(`${sat}.vercel.app`),
    title,
    pageCount: pages.length,
    homeWordCount: homeWords,
    hasSitemap: existsSync(sitemapPath),
    hasRobots: existsSync(robotsPath),
    hasVercelJson: existsSync(vercelJson),
    blogContainer: existsSync(blogDir)
      ? 'blog'
      : existsSync(articlesDir)
        ? 'articles'
        : existsSync(guidesDir)
          ? 'guides'
          : null,
    inferredTopics: inferTopic(sat, sample),
    samplePagePath: pages[0] ? pages[0].replace(REPO_ROOT, '') : null,
  });
}

const outPath = join(__dirname, 'satellite-inventory-2026-05-09.json');
writeFileSync(
  outPath,
  JSON.stringify(
    {
      generatedAt: new Date().toISOString(),
      satelliteCount: inventory.length,
      satellites: inventory,
    },
    null,
    2
  )
);
console.log(`Wrote ${inventory.length} satellites -> ${outPath}`);
