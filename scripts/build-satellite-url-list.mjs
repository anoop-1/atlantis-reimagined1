#!/usr/bin/env node
/**
 * Build an indexing URL list for the 35 backlink satellites from their own live
 * sitemaps.
 *
 * Context (2026-08-02): the satellites moved to a new Vercel account after the
 * old one was disabled and started returning 402. Each site kept its original
 * <name>.vercel.app hostname, so the URLs Google already knows are unchanged —
 * but they served errors for a period, so anything Google dropped in the
 * meantime is worth re-announcing.
 *
 * Reads each satellite's /sitemap.xml rather than a hard-coded route list, so
 * it stays correct as the satellites grow.
 *
 * Usage:
 *   node scripts/build-satellite-url-list.mjs
 *   node scripts/gsc-submit-multi-raw.mjs --url-list=scripts/indexing-url-list-satellites-2026-08-02.json
 */
import { readdirSync, statSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SATDIR = join(__dirname, '..', 'backlink-sites');

const satellites = readdirSync(SATDIR)
  .filter((f) => statSync(join(SATDIR, f)).isDirectory())
  .sort();

const urls = [];
const report = [];

for (const name of satellites) {
  const host = `https://${name}.vercel.app`;
  let found = 0;
  let note = '';
  try {
    const res = await fetch(`${host}/sitemap.xml`, { signal: AbortSignal.timeout(25000) });
    if (!res.ok) {
      note = `sitemap HTTP ${res.status}`;
    } else {
      const xml = await res.text();
      for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
        urls.push({ url: m[1].trim(), site: name });
        found++;
      }
      if (!found) note = 'sitemap parsed but held no <loc> entries';
    }
  } catch (err) {
    note = `fetch failed: ${String(err && err.message || err)}`;
  }
  report.push({ name, found, note });
  console.log(`${name.padEnd(32)} ${String(found).padStart(4)} urls  ${note}`);
}

const out = join(__dirname, 'indexing-url-list-satellites-2026-08-02.json');
writeFileSync(out, JSON.stringify({ urls }, null, 1));

const empty = report.filter((r) => !r.found);
console.log(`\nsatellites: ${satellites.length} · URLs collected: ${urls.length}`);
if (empty.length) {
  console.log(`\nNO URLS from ${empty.length} satellite(s) — these are not serving a sitemap:`);
  empty.forEach((r) => console.log(`  ${r.name}: ${r.note}`));
}
console.log(`\nwrote ${out}`);
