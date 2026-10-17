#!/usr/bin/env node
/**
 * Test for scripts/practical-ndt-simulators-2026-10.mjs (2026-10-17) without a full build.
 *   - renders all 14 pages: words, title/description geometry, H1 count, schema shape
 *   - sibling similarity: the site's measure (8-word shingles, step 3) and a stricter one
 *     (5-word shingles, every position); fails at the 0.55 gate, warns at 0.35
 *   - link targets against the current route list: committed sitemaps (public/sitemap-*.xml),
 *     literal RouteTable.tsx routes and the 14 new paths
 *   - hub insert on the real /practical-ndt base body (prerender.mjs) after applyAscanRoute,
 *     and the city block on every real /practical-ndt-{city} body and practical geo hub
 *   - assertPracticalSimClean() with that route list
 * Usage: node scripts/test-practical-ndt-simulators.mjs [--verbose]
 */
import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  practicalSimRoutes, applyPracticalSimRoute, assertPracticalSimClean, siblingSimilarity, wordCount,
  mainText, practicalSimStats, practicalSimSummary, CITY_PATH_RE,
} from './practical-ndt-simulators-2026-10.mjs';
import { applyAscanRoute } from './ascan-simulator-2026-10.mjs';
import { PRACTICAL_NDT_ROUTES } from './practical-ndt-routes.mjs';
import { GEO_HUB_ROUTES } from './geo-hub-routes.mjs';
import { SIM_MARKER, SIM_PATHS, PAGES } from '../src/data/practical-ndt-simulators-2026-10.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const VERBOSE = process.argv.includes('--verbose');
let failed = 0;
const ok = (cond, msg) => { if (!cond) { failed++; console.error(`  FAIL ${msg}`); } else if (VERBOSE) console.log(`  ok   ${msg}`); };

// ── current route list ──
const known = new Set();
// After a build the regenerated sitemaps list the 14 pages themselves once, so a sitemap
// collision is a path listed more than once; RouteTable literals and the city/geo route
// lists must not contain them at all.
const sitemapCount = new Map();
for (const f of readdirSync(join(ROOT, 'public')).filter((f) => /^sitemap-.*\.xml$/.test(f))) {
  for (const m of readFileSync(join(ROOT, 'public', f), 'utf-8').matchAll(/<loc>https:\/\/atlantisndt\.com([^<]*)<\/loc>/g)) {
    const p = m[1].replace(/\/$/, '') || '/';
    known.add(p);
    sitemapCount.set(p, (sitemapCount.get(p) || 0) + 1);
  }
}
const otherRoutes = new Set();
for (const m of readFileSync(join(ROOT, 'src/RouteTable.tsx'), 'utf-8').matchAll(/<Route\s+path="([^":*]+)"/g)) otherRoutes.add(m[1].replace(/\/$/, '') || '/');
for (const r of [...PRACTICAL_NDT_ROUTES, ...GEO_HUB_ROUTES]) otherRoutes.add(r.path);
for (const p of otherRoutes) known.add(p);
for (const p of SIM_PATHS) ok(!otherRoutes.has(p) && (sitemapCount.get(p) || 0) <= 1, `new path ${p} does not collide with an existing route`);
const before = known.size;
for (const p of SIM_PATHS) known.add(p);
console.log(`route list: ${before} existing paths (sitemaps + RouteTable literals + city/geo routes)`);

// ── pages ──
const routes = practicalSimRoutes();
ok(routes.length === PAGES.length, `${routes.length} routes`);
console.log('\npath                                              title desc words');
for (const r of routes) {
  const w = wordCount(r.bodyContent);
  console.log(`${r.path.padEnd(50)}${String(r.title.length).padStart(5)}${String(r.description.length).padStart(5)}${String(w).padStart(6)}`);
  ok(r.title.length <= 60, `${r.path} title <= 60`);
  ok(r.description.length >= 140 && r.description.length <= 155, `${r.path} description 140-155`);
  ok(w >= 700, `${r.path} >= 700 words`);
  ok((r.bodyContent.match(/<h1[\s>]/g) || []).length === 1, `${r.path} one H1`);
  ok(r.canonical === `https://atlantisndt.com${r.path}`, `${r.path} self-canonical`);
  const types = r.structuredData['@graph'].map((n) => [].concat(n['@type']).join('+'));
  ok(types.includes('WebPage+LearningResource') && types.includes('BreadcrumbList') && types.includes('FAQPage'), `${r.path} schema ${types.join(', ')}`);
  ok(!/"Offer"|"price"|aggregateRating/.test(JSON.stringify(r.structuredData)), `${r.path} no Offer/price/rating`);
  for (const m of r.bodyContent.matchAll(/href="([^"]+)"/g)) {
    const base = m[1].replace(/&amp;/g, '&').replace(/[?#].*$/, '').replace(/\/$/, '') || '/';
    ok(known.has(base), `${r.path} link ${m[1]} is a built route`);
  }
}

// ── similarity ──
const site = siblingSimilarity(8, 3);
const strict = siblingSimilarity(5, 1);
console.log(`\nsibling Jaccard, site measure (8-word, step 3): max ${site.max.toFixed(3)} (${site.pair})`);
console.log(`sibling Jaccard, strict (5-word, every position): max ${strict.max.toFixed(3)} (${strict.pair})`);
if (VERBOSE) for (const [x, y, v] of site.rows.sort((p, q) => q[2] - p[2]).slice(0, 8)) console.log(`  ${v.toFixed(3)}  ${x} ~ ${y}`);
ok(site.max < 0.55, 'site measure below the 0.55 gate');
if (site.max >= 0.35) console.warn(`  WARN site measure ${site.max.toFixed(3)} >= 0.35 target`);

// ── hub insert on the real base body ──
const src = readFileSync(join(ROOT, 'scripts/prerender.mjs'), 'utf-8');
const at = src.indexOf("path: '/practical-ndt',");
const bStart = src.indexOf('bodyContent: `', at) + 'bodyContent: `'.length;
const hubBody = src.slice(bStart, src.indexOf('`,', bStart));
let hub = applyAscanRoute({ path: '/practical-ndt', bodyContent: hubBody });
hub = applyPracticalSimRoute(hub);
const hb = hub.bodyContent;
const practiseAt = hb.indexOf('<strong>Practise now:</strong>');
ok(practiseAt > 0 && practiseAt < hb.indexOf('<h2'), 'hub: "Practise now" link sits before the first H2 (above the fold)');
ok(/href="\/tools\/ultrasonic-a-scan-simulator">free ultrasonic A-scan simulator/.test(hb), 'hub: Practise now links the A-scan tool');
ok(!/5 workplace environments/.test(hb) && /12 workplaces, 12 method families and 33 practical lessons/.test(hb), 'hub: catalogue sentence corrected to the white-paper figures');
ok(hb.indexOf('id="by-method"') > 0 && hb.indexOf('id="by-method"') < hb.indexOf('<h2>Built for Every Skill Level</h2>'), 'hub: method grid before "Built for Every Skill Level"');
for (const p of SIM_PATHS) ok(hb.includes(`href="${p}"`), `hub links ${p}`);
ok(hb.includes('What an NDT simulator can and cannot do'), 'hub: can/cannot section');
ok(applyPracticalSimRoute(hub).bodyContent === hb, 'hub insert is idempotent');
console.log(`\nhub: ${wordCount(hubBody)} words before, ${wordCount(hb)} after (base body + A-scan intro only; the build adds more blocks)`);

// ── city + geo-hub block ──
const cities = [...PRACTICAL_NDT_ROUTES, ...GEO_HUB_ROUTES.filter((r) => CITY_PATH_RE.test(r.path))];
let applied = 0;
for (const r of cities) {
  const out = applyPracticalSimRoute(r);
  const b = out.bodyContent;
  if (b.includes(SIM_MARKER)) applied++;
  const i = b.indexOf(SIM_MARKER);
  ok(i > 0 && i < b.lastIndexOf('</main>'), `${r.path}: block inside <main>`);
  ok(SIM_PATHS.every((p) => b.includes(`href="${p}"`)), `${r.path}: block links every new page`);
}
console.log(`city/geo pages: ${applied} of ${cities.length} carry the shared block`);
ok(applied === cities.length, 'every practical city page and practical geo hub carries the block');

// ── inbound links from method training pages and the practice-test hub (next-steps data) ──
const NEXT = JSON.parse(readFileSync(join(ROOT, 'src/data/next-steps-2026-10.json'), 'utf-8')).blocks;
const TRAINING_TO_SIM = {
  '/ultrasonic-testing-training': 'ultrasonic-testing-simulator', '/phased-array-training': 'phased-array-ut-simulator',
  '/tofd-training-certification-course': 'tofd-simulator', '/radiographic-testing-training': 'radiography-simulator',
  '/magnetic-particle-testing-training': 'magnetic-particle-simulator', '/penetrant-testing-training': 'penetrant-testing-simulator',
  '/visual-testing-training': 'visual-testing-simulator', '/eddy-current-testing-training': 'eddy-current-simulator',
};
for (const [page, slug] of Object.entries(TRAINING_TO_SIM)) {
  ok(known.has(page), `${page} is a built route`);
  ok((NEXT[page]?.links || []).some(([h]) => h === `/practical-ndt/${slug}`), `${page} next-step block links /practical-ndt/${slug}`);
}
ok(PAGES.filter((p) => p.kind === 'method').every((p) => (NEXT['/ndt-practice-tests']?.links || []).some(([h]) => h === `/practical-ndt/${p.slug}`)), '/ndt-practice-tests block links every method simulator page');
for (const [key, b] of Object.entries(NEXT)) for (const [h] of b.links) ok(known.has(h.replace(/[?#].*$/, '')), `next-step link ${h} on ${key} is built`);

// ── build assert with the route list, and its guards actually fire ──
try { assertPracticalSimClean(known); ok(true, 'assertPracticalSimClean'); } catch (e) { ok(false, e.message); }
const probe = PAGES[0];
for (const [label, mutate] of [
  ['city name', (p) => { p.intro += ' Teams in Houston use it.'; }],
  ['price', (p) => { p.intro += ' From $99 per seat.'; }],
  ['first claim', (p) => { p.intro += ' The ' + 'first' + ' online practical NDT simulator.'; }], // split so the claims gate does not scan this fixture
  ['presence', (p) => { p.intro += ' Visit our training centre.'; }],
  ['experience claim', (p) => { p.intro += ' Simulator time counts as experience hours.'; }],
  ['unbuilt link', (p) => { p.intro += ' See [this](/no-such-page-anywhere).'; }],
]) {
  const saved = probe.intro;
  mutate(probe);
  let threw = false;
  try { assertPracticalSimClean(known); } catch { threw = true; }
  probe.intro = saved;
  ok(threw, `guard fires on ${label}`);
}
try { assertPracticalSimClean(known); ok(true, 'assert clean again after the guard probes'); } catch (e) { ok(false, e.message); }
console.log(practicalSimSummary());

console.log(failed ? `\nFAIL — ${failed} check(s)` : '\nPASS');
process.exit(failed ? 1 : 0);
