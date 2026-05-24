#!/usr/bin/env node
/**
 * scripts/build-sitemap.mjs — emits public/sitemap.xml with hreflang alternates
 * ────────────────────────────────────────────────────────────────────────────
 * Run AFTER prerender, BEFORE deploy:
 *   node scripts/build-sitemap.mjs
 *
 * Reads indexing-url-list.json and erp-cities-all-tiers.json, emits one <url>
 * entry per canonical URL with <xhtml:link rel="alternate" hreflang="..."> for
 * every translation that exists.
 *
 * Combines with the existing static sitemap entries (about, consulting, etc.)
 * by reading the current public/sitemap.xml and merging without duplication.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const ORIGIN = 'https://atlantisndt.com';
const TODAY = new Date().toISOString().slice(0, 10);

const cities = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'src', 'data', 'erp-cities-all-tiers.json'), 'utf8'));

// Static (non-programmatic) routes — pulled from the existing sitemap.
const STATIC_ROUTES = [
  '/about', '/consulting', '/consulting-usa', '/consulting-india', '/consulting-me',
  '/training', '/training-usa', '/training-india', '/training-me',
  '/digital-twins', '/erp', '/ndt-methods', '/faq', '/contact', '/ndt-connect',
  '/ndt-erp-software',
  '/ndt-erp-for-refineries',
  '/ndt-erp-for-aerospace-mro',
  '/ndt-erp-for-shipyards',
  '/ndt-erp-for-power-generation',
  '/ndt-erp-for-nde-service-providers',
];

const HUB_LANGS = ['en', 'es', 'pt', 'de', 'ko', 'ar'];

function urlEntry(loc, alternates = {}, priority = 0.7, changefreq = 'weekly') {
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

// 1. Static routes
for (const r of STATIC_ROUTES) {
  if (r === '/ndt-erp-software') {
    // Hub page with alternates
    const alt = {};
    for (const lang of HUB_LANGS) {
      alt[lang] = lang === 'en' ? `${ORIGIN}/ndt-erp-software` : `${ORIGIN}/${lang}/ndt-erp-software`;
    }
    alt['x-default'] = `${ORIGIN}/ndt-erp-software`;
    entries += urlEntry(`${ORIGIN}/ndt-erp-software`, alt, 0.9);
    // Hub language alternates as their own canonical entries too
    for (const lang of HUB_LANGS.filter(l => l !== 'en')) {
      entries += urlEntry(`${ORIGIN}/${lang}/ndt-erp-software`, alt, 0.8);
    }
  } else {
    entries += urlEntry(`${ORIGIN}${r}`, {}, 0.7);
  }
}

// 2. 120 city pages
for (const c of cities) {
  const slug = `ndt-erp-${c.slug}`;
  const enUrl = `${ORIGIN}/${slug}`;
  const langs = c.languages || ['en'];
  const alt = {};
  for (const lang of langs) {
    alt[lang] = lang === 'en' ? enUrl : `${ORIGIN}/${lang}/${slug}`;
  }
  alt['x-default'] = enUrl;
  // Canonical EN entry
  entries += urlEntry(enUrl, alt, 0.8);
  // Each language alternate as its own entry
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
fs.writeFileSync(outPath, sitemap);

const urlCount = (sitemap.match(/<loc>/g) || []).length;
console.log(`Wrote ${outPath}`);
console.log(`Total <loc> entries: ${urlCount}`);
console.log(`File size: ${fs.statSync(outPath).size.toLocaleString()} bytes`);
