#!/usr/bin/env node
/**
 * scripts/build-sitemap-v2.mjs — sitemap with ERP + Digital Twin tree
 * ────────────────────────────────────────────────────────────────────
 * Extension of build-sitemap.mjs. Adds:
 *   - /digital-twins pillar with hreflang en/es/ar
 *   - 4 cluster pages (en only)
 *   - 4 vertical hubs (en only)
 *   - 120 EN /digital-twin-{slug} pages with hreflang for every lang
 *     declared in erp-cities-all-tiers.json for that city
 *   - All language alternates as their own canonical entries
 * Preserves the existing 120 ERP city entries + all static routes.
 *
 * Run AFTER prerender, BEFORE deploy:
 *   node scripts/build-sitemap-v2.mjs
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ORIGIN = 'https://atlantisndt.com';
const TODAY = new Date().toISOString().slice(0, 10);

const cities = JSON.parse(
  fs.readFileSync(path.join(ROOT, 'src', 'data', 'erp-cities-all-tiers.json'), 'utf8'),
);

// Static (non-programmatic) routes — matches the production sitemap.
const STATIC_ROUTES = [
  '/about', '/consulting', '/consulting-usa', '/consulting-india', '/consulting-me',
  '/training', '/training-usa', '/training-india', '/training-me',
  '/erp', '/ndt-methods', '/faq', '/contact', '/ndt-connect',
  '/ndt-erp-software',
  '/ndt-erp-for-refineries',
  '/ndt-erp-for-aerospace-mro',
  '/ndt-erp-for-shipyards',
  '/ndt-erp-for-power-generation',
  '/ndt-erp-for-nde-service-providers',
];

const HUB_LANGS = ['en', 'es', 'pt', 'de', 'ko', 'ar'];
const DT_PILLAR_LANGS = ['en', 'es', 'ar'];
const DT_CLUSTERS = [
  'lidar-scan-to-twin',
  'iot-sensor-integration',
  'ai-predictive-analytics',
  'ndt-data-overlay',
];
const DT_VERTICALS = ['oil-and-gas', 'maritime', 'defense', 'aerospace'];

function urlEntry (loc, alternates = {}, priority = 0.7, changefreq = 'weekly') {
  let xml = `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n`;
  for (const [lang, href] of Object.entries(alternates)) {
    xml += `    <xhtml:link rel="alternate" hreflang="${lang}" href="${href}" />\n`;
  }
  if (Object.keys(alternates).length) {
    xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${alternates['x-default'] || loc}" />\n`;
  }
  xml += `  </url>\n`;
  return xml;
}

let entries = '';

// ─── 1. Homepage ─────────────────────────────────────────────────────
entries += urlEntry(`${ORIGIN}/`, {}, 1.0, 'daily');

// ─── 2. Static routes (NOTE: /digital-twins handled separately below) ─
for (const r of STATIC_ROUTES) {
  if (r === '/ndt-erp-software') {
    const alt = {};
    for (const lang of HUB_LANGS) {
      alt[lang] = lang === 'en' ? `${ORIGIN}/ndt-erp-software` : `${ORIGIN}/${lang}/ndt-erp-software`;
    }
    alt['x-default'] = `${ORIGIN}/ndt-erp-software`;
    entries += urlEntry(`${ORIGIN}/ndt-erp-software`, alt, 0.9);
    for (const lang of HUB_LANGS.filter(l => l !== 'en')) {
      entries += urlEntry(`${ORIGIN}/${lang}/ndt-erp-software`, alt, 0.8);
    }
  } else {
    entries += urlEntry(`${ORIGIN}${r}`, {}, 0.7);
  }
}

// ─── 3. /digital-twins pillar (en/es/ar) ─────────────────────────────
const dtPillarAlt = {};
for (const lang of DT_PILLAR_LANGS) {
  dtPillarAlt[lang] = lang === 'en' ? `${ORIGIN}/digital-twins` : `${ORIGIN}/${lang}/digital-twins`;
}
dtPillarAlt['x-default'] = `${ORIGIN}/digital-twins`;
entries += urlEntry(`${ORIGIN}/digital-twins`, dtPillarAlt, 0.95, 'weekly');
for (const lang of DT_PILLAR_LANGS.filter(l => l !== 'en')) {
  entries += urlEntry(`${ORIGIN}/${lang}/digital-twins`, dtPillarAlt, 0.85);
}

// ─── 4. Digital-twin cluster pages (en only initially) ────────────────
for (const c of DT_CLUSTERS) {
  entries += urlEntry(`${ORIGIN}/digital-twins/${c}`, {}, 0.85);
}

// ─── 5. Digital-twin vertical hubs (en only) ──────────────────────────
for (const v of DT_VERTICALS) {
  entries += urlEntry(`${ORIGIN}/digital-twins/${v}`, {}, 0.85);
}

// ─── 6. 120 ERP city pages ────────────────────────────────────────────
for (const c of cities) {
  const slug = `ndt-erp-${c.slug}`;
  const enUrl = `${ORIGIN}/${slug}`;
  const langs = c.languages || ['en'];
  const alt = {};
  for (const lang of langs) {
    alt[lang] = lang === 'en' ? enUrl : `${ORIGIN}/${lang}/${slug}`;
  }
  alt['x-default'] = enUrl;
  entries += urlEntry(enUrl, alt, 0.8);
  for (const lang of langs.filter(l => l !== 'en')) {
    entries += urlEntry(`${ORIGIN}/${lang}/${slug}`, alt, 0.7);
  }
}

// ─── 7. 120 Digital Twin city pages + language alternates ─────────────
for (const c of cities) {
  const slug = `digital-twin-${c.slug}`;
  const enUrl = `${ORIGIN}/${slug}`;
  const langs = c.languages || ['en'];
  const alt = {};
  for (const lang of langs) {
    alt[lang] = lang === 'en' ? enUrl : `${ORIGIN}/${lang}/${slug}`;
  }
  alt['x-default'] = enUrl;
  entries += urlEntry(enUrl, alt, 0.8);
  for (const lang of langs.filter(l => l !== 'en')) {
    entries += urlEntry(`${ORIGIN}/${lang}/${slug}`, alt, 0.7);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries}</urlset>
`;

const outPath = path.join(ROOT, 'public', 'sitemap.xml');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, sitemap);

const urlCount = (sitemap.match(/<loc>/g) || []).length;
console.log(`Wrote ${outPath}`);
console.log(`Total <loc> entries: ${urlCount}`);
console.log(`File size: ${fs.statSync(outPath).size.toLocaleString()} bytes`);
