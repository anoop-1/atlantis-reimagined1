#!/usr/bin/env node
/**
 * Route recovery from built output — 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * scripts/prerender.mjs (~1.87 MB) was truncated to zero bytes by a failed
 * write during an automated edit: Python opened it 'w', truncated it, then threw
 * a UnicodeEncodeError on a surrogate pair before writing anything back. The
 * on-disk backup (prerender.mjs.backup) is from 2 April and 262 KB — far out of
 * date. There is no git history for this project and Volume Shadow Copy needs
 * elevation, so the source is not recoverable by any ordinary means.
 *
 * What DID survive is the complete output: dist/ holds all 5,611 prerendered
 * pages, each containing the final title, description, canonical, h1, JSON-LD
 * and the exact bodyContent that prerender.mjs emitted. A copy is preserved at
 * ../dist-RECOVERY-BACKUP-2026-08-18 in case dist is ever rebuilt over.
 *
 * This script reverses the render: it walks dist/, extracts each route's final
 * state, and writes routes-recovered.json. That file is the recovered corpus and
 * can drive a data-driven replacement for prerender.mjs.
 *
 * WHAT IS RECOVERED AND WHAT IS NOT
 *
 *   Recovered: every route's path, title, description, canonical, h1, body HTML,
 *              JSON-LD blocks, robots directives, hreflang. i.e. the full
 *              rendered state of all 5,611 pages, including every CTR wave,
 *              body override and the new citation layer.
 *
 *   NOT recovered: the GENERATIVE LOGIC — the loops over src/data that built
 *              city, module and industry permutations, and the layering order of
 *              the override maps. Those override modules themselves survive as
 *              separate files (ctr-wave2..6, phase5, round7, citation-layers),
 *              so only the assembly code is lost.
 *
 * That loss is smaller than it sounds: permutation generation is frozen as of
 * 2026-08-18 (scripts/_permutation-freeze.mjs), so the generative loops were not
 * going to be run again anyway. A data-driven prerender that replays this corpus
 * and applies the surviving override modules on top reproduces current output
 * exactly, and new pages get added as data rather than as code.
 *
 *   node scripts/recover-routes-from-dist.mjs
 *   node scripts/recover-routes-from-dist.mjs --dist ../dist-RECOVERY-BACKUP-2026-08-18
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const DIST = args.includes('--dist')
  ? join(__dirname, '..', args[args.indexOf('--dist') + 1])
  : join(__dirname, '..', 'dist');

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (name === 'index.html') out.push(p);
  }
  return out;
}

const one = (html, re) => {
  const m = html.match(re);
  return m ? m[1].trim() : null;
};

const files = walk(DIST);
console.log(`Recovering routes from ${DIST}`);
console.log(`  ${files.length} prerendered pages found\n`);

const routes = [];
let withBody = 0, withJsonLd = 0, noindex = 0;

for (const file of files) {
  const html = readFileSync(file, 'utf-8');
  const rel = '/' + relative(DIST, dirname(file)).replace(/\\/g, '/');
  const path = rel === '/.' ? '/' : rel;

  // bodyContent lives inside <div id="root"> — prerender injects it there so the
  // React app hydrates over the same markup.
  const rootStart = html.indexOf('<div id="root">');
  let body = null;
  if (rootStart !== -1) {
    const after = html.slice(rootStart + '<div id="root">'.length);
    // Body ends where the module script bundle begins.
    const endIdx = after.search(/<script\b/);
    body = (endIdx === -1 ? after : after.slice(0, endIdx));
    body = body.replace(/<\/div>\s*$/, '').trim();
    if (body) withBody++;
  }

  const jsonLd = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((m) => m[1].trim());
  if (jsonLd.length) withJsonLd++;

  const robots = one(html, /<meta[^>]+name="robots"[^>]+content="([^"]*)"/i);
  if (robots && /noindex/i.test(robots)) noindex++;

  routes.push({
    path,
    title: one(html, /<title>([^<]*)<\/title>/i),
    description: one(html, /<meta[^>]+name="description"[^>]+content="([^"]*)"/i),
    canonical: one(html, /rel="canonical"[^>]*href="([^"]*)"/i),
    ogTitle: one(html, /<meta[^>]+property="og:title"[^>]+content="([^"]*)"/i),
    ogDesc: one(html, /<meta[^>]+property="og:description"[^>]+content="([^"]*)"/i),
    h1: one(html, /<h1[^>]*>([\s\S]*?)<\/h1>/i),
    robots,
    bodyContent: body,
    jsonLd,
    hreflang: [...html.matchAll(/<link[^>]+rel="alternate"[^>]+hreflang="([^"]*)"[^>]+href="([^"]*)"/gi)]
      .map((m) => ({ lang: m[1], href: m[2] })),
  });
}

routes.sort((a, b) => a.path.localeCompare(b.path));

const out = join(__dirname, 'routes-recovered.json');
writeFileSync(out, JSON.stringify({
  recovered: new Date().toISOString(),
  source: DIST,
  note: 'Reconstructed from prerendered output after scripts/prerender.mjs was truncated to 0 bytes on 2026-08-18. Rendered state only; the generative loops that produced permutation routes are not recoverable from here.',
  count: routes.length,
  routes,
}, null, 2));

console.log(`  routes with body content : ${withBody}`);
console.log(`  routes with JSON-LD      : ${withJsonLd}`);
console.log(`  routes marked noindex    : ${noindex}`);
console.log(`  routes missing a title   : ${routes.filter((r) => !r.title).length}`);
console.log(`  routes missing an h1     : ${routes.filter((r) => !r.h1).length}`);

// Sanity: the citation layer added today must be present in the recovered corpus.
const salary = routes.find((r) => r.path === '/blog/ndt-salary-guide-2026-global');
console.log(`\n  citation layer present on salary guide: ${salary && salary.bodyContent && salary.bodyContent.includes('data-citation-block') ? 'YES' : 'no'}`);

const mb = (JSON.stringify(routes).length / 1024 / 1024).toFixed(1);
console.log(`\n  Wrote ${out} (${mb} MB, ${routes.length} routes)\n`);
