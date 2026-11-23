// SNT-TC-1A vs NAS 410 sections on US aerospace and aviation training city pages (owner, 2026-11-23).
// Owner: "for training you may start with ASNT-SNT-TC-1A Vs. NAS 410 explainer for all target cities";
// answer to the scope question: "Researched on aerospace cities, short note elsewhere" (CLAUDE.md §85).
// Evidence: "nas 410" queries (288 impressions in 28 days, 2026-11) and the aerospace employers around
// these cities; candidates working for primes' suppliers, MROs and depots are certified under NAS 410
// (EN 4179 in Europe) or under a written practice built on SNT-TC-1A, and they search for which applies.
//
// One file per page: src/data/nas410-city-2026-11/nas410--<path with / -> __>.json  { path, html, sources }.
// The "nas410--" prefix keeps the lazy JSON chunk name unique (preflight 4b allows NAS 410 in chunks named so).
// Crawler: applyNas410City(route) inserts <section data-nas410-city="2026-11" data-keep-on-rewrite> before
// </main> (after the geo-depth block). React: src/components/Nas410CityBlock.tsx renders the same JSON
// (lazy, one chunk per page) into the "nas410:" main slot.
// EXPLANATION ONLY (preflight 4b + claims gate): Atlantis provides no NAS 410 training, certification,
// examinations or Responsible Level 3; the founder is not NAS 410 Level 3; the aerospace offer is
// ASNT SNT-TC-1A-based training, ASNT Level III consulting, NAS 410 / Nadcap audit documentation support
// and inspection. The page list must equal NAS410_CITY_PAGES in src/data/nas-410-clarification-2026-11.mjs.
//
// Check a block while writing:  node scripts/nas410-city-2026-11.mjs --check <path-or-key> ...
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { NAS410_CITY_PAGES } from '../src/data/nas-410-clarification-2026-11.mjs';
import { scanTrainingGeoHonesty } from './training-geo-honesty-2026-10.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'src/data/nas410-city-2026-11');
export const nas410CityKey = (p) => 'nas410--' + p.replace(/^\//, '').replace(/\//g, '__');
const BLOCK_RE = /<section data-nas410-city="2026-11"[\s\S]*?<\/section>/g;

let cache = null;
function load() {
  if (cache) return cache;
  cache = new Map();
  if (!existsSync(DIR)) return cache;
  for (const f of readdirSync(DIR).filter((n) => n.endsWith('.json'))) {
    const d = JSON.parse(readFileSync(join(DIR, f), 'utf8'));
    cache.set(d.path, d);
  }
  return cache;
}

export const nas410CityHtml = (d) => `<section data-nas410-city="2026-11" data-keep-on-rewrite="1" class="container mx-auto px-6 py-10 max-w-4xl"><div class="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary">${d.html}</div></section>`;

export function applyNas410City(route) {
  if (!route || typeof route.bodyContent !== 'string') return route;
  const d = load().get((route.path || '').replace(/\/+$/, '') || '/');
  if (!d) return route;
  let body = route.bodyContent.replace(BLOCK_RE, '');
  // After the geo-depth block when there is one, else just before </main>.
  const geo = body.match(/<section data-geo-depth="2026-10"[\s\S]*?<\/section>/);
  const html = nas410CityHtml(d);
  if (geo) { const at = body.indexOf(geo[0]) + geo[0].length; body = body.slice(0, at) + html + body.slice(at); }
  else { const i = body.lastIndexOf('</main>'); body = i >= 0 ? body.slice(0, i) + html + body.slice(i) : body + html; }
  return { ...route, bodyContent: body };
}

const text = (h) => String(h).replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
const NEG = /\b(not|no|never|nor|neither|doesn't|does not|isn't|is not|cannot|can't|without)\b/i;

/** Content rules for one section; returns a list of problems. */
export function nas410CityProblems(d, knownPaths) {
  const out = [];
  const t = text(d.html);
  const w = t.split(' ').filter(Boolean).length;
  if (w < 600 || w > 1150) out.push(`words ${w} (600-1,150)`);
  if ((d.html.match(/<h2[\s>]/g) || []).length !== 1) out.push('needs exactly one h2');
  if (!/<h2[^>]*>[^<]*NAS 410[^<]*<\/h2>/.test(d.html) || !/<h2[^>]*>[^<]*SNT-TC-1A[^<]*<\/h2>/.test(d.html)) out.push('h2 must name both SNT-TC-1A and NAS 410');
  if ((d.html.match(/<h3[\s>]/g) || []).length < 3) out.push('needs at least three h3');
  if (/<(script|style|img|iframe|form|input|section)\b/i.test(d.html)) out.push('disallowed tag');
  if (/[$£€₹]\s?\d|\bprice[sd]?\b|\bfees?\b|day rate|per day\b|\bcost\b/i.test(t)) out.push('price wording');
  if (/\b(our|the Atlantis) (\w+ )?(office|lab|laboratory|facility|cent(er|re)|campus|classroom)\b|\bvisit our\b/i.test(t)) out.push('physical presence claim');
  if (/\b(?:the )?(?:first|only|best|leading|#1|top)\b[^.]{0,30}\b(?:provider|company|companies|training firm|school|consultan\w*|choice)\b/i.test(t)) out.push('superlative claim');
  for (const h of scanTrainingGeoHonesty(d.html, d.path) || []) out.push(`training honesty: ${typeof h === 'string' ? h : JSON.stringify(h)}`);
  if (/(?:Rayavarapu|\bour founder)[^.;]{0,150}NAS[- ]?410 Level/i.test(t)) out.push('founder named near "NAS 410 Level" (claims gate FOUNDER-CREDENTIAL)');
  if (/guarantee|pass rate|job placement|cohort|intake|live class|instructor-led/i.test(t)) out.push('banned training wording');
  if (/customer-specified aerospace standard|\bNANDTBs?\b|rather than SNT-TC-1A/i.test(t)) out.push('hedge wording (§66) or NANDTB');
  if (/@[a-z0-9-]+\.(com|net|org)/i.test(t) && !/info@atlantisndt\.com/.test(t)) out.push('email other than info@');
  // Explanation only: any sentence where Atlantis offers NAS 410 training/certification/exams/RL3 fails.
  for (const s of t.split(/(?<=[.!?])\s+/)) {
    if (/\b(Atlantis|we|our)\b/i.test(s) && /\bNAS 410\b/.test(s) && /\b(train(ing|s)?|courses?|certif(y|ies|ication)|exam(s|ination)?|qualif(y|ication)|Responsible Level 3|RL3)\b/i.test(s) && !NEG.test(s) && !/\b(audit documentation|documentation)\b/i.test(s)) out.push(`NAS 410 offer? ${s.slice(0, 140)}`);
    if (/\b(founder|Anoop)\b/i.test(s) && /\bNAS 410 Level (3|III)\b/i.test(s) && !NEG.test(s)) out.push(`founder credential? ${s.slice(0, 120)}`);
  }
  if (!/Atlantis[^.]{0,80}\b(does not|doesn't|provides no|offers no|delivers no)\b[^.]{0,120}NAS 410|NAS 410[^.]{0,120}\b(is not|are not)\b[^.]{0,60}Atlantis/i.test(t)) out.push('missing the plain statement that Atlantis provides no NAS 410 training, certification or examinations');
  if (!/href="\/blog\/nas-410-vs-snt-tc-1a"/.test(d.html)) out.push('must link /blog/nas-410-vs-snt-tc-1a');
  if (knownPaths) for (const m of d.html.matchAll(/href="([^"]+)"/g)) {
    const h = m[1].split('?')[0].replace(/\/+$/, '') || '/';
    if (h.startsWith('/') && h !== '/contact' && !knownPaths.has(h)) out.push(`dead link ${h}`);
    if (!h.startsWith('/')) out.push(`external link ${h}`);
  }
  return out;
}

const sentences = (h) => text(h).split(/(?<=[.!?])\s+/).map((x) => x.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim()).filter((x) => x.split(' ').length >= 10);
const shingles = (t, n = 10) => { const w = t.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean); const out = new Set(); for (let i = 0; i + n <= w.length; i++) out.add(w.slice(i, i + n).join(' ')); return out; };
/** Sentences (10+ words) a section shares with any other section file. */
export function sharedSentences(d) {
  const mine = new Set(sentences(d.html));
  const out = [];
  for (const [p, o] of load()) if (p !== d.path) for (const x of sentences(o.html)) if (mine.has(x)) out.push(`${x.slice(0, 90)}… (also ${p})`);
  return out;
}

/** Build guard: the file set equals NAS410_CITY_PAGES, every page is built, every section passes. */
export function assertNas410CityClean(knownPaths) {
  const problems = [];
  const have = new Set(load().keys());
  for (const p of NAS410_CITY_PAGES) if (!have.has(p)) problems.push(`${p}: listed in NAS410_CITY_PAGES but no section file`);
  for (const p of have) if (!NAS410_CITY_PAGES.includes(p)) problems.push(`${p}: section file but not in NAS410_CITY_PAGES`);
  for (const [p, d] of load()) {
    if (knownPaths && !knownPaths.has(p)) problems.push(`${p}: page not built`);
    for (const x of nas410CityProblems(d, knownPaths)) problems.push(`${p}: ${x}`);
    for (const x of sharedSentences(d)) problems.push(`${p}: shared sentence ${x}`);
  }
  if (problems.length) throw new Error(`nas410-city: ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  console.log(`✈️  SNT-TC-1A vs NAS 410 city sections 2026-11-23: ${load().size} pages, guard PASS`);
}

// CLI: check named blocks against dist/ (link targets) while writing.
if (process.argv[1] && process.argv[1].endsWith('nas410-city-2026-11.mjs') && process.argv.includes('--check')) {
  const dist = join(ROOT, 'dist');
  const known = new Set();
  if (existsSync(dist)) for (const e of readdirSync(dist, { withFileTypes: true })) if (e.isDirectory()) known.add('/' + e.name);
  // nested paths (/blog/x, /consulting/x, /training/x)
  for (const top of ['blog', 'consulting', 'training', 'compliance', 'maritime', 'inspection', 'tools', 'resources']) {
    const d = join(dist, top); if (existsSync(d)) for (const e of readdirSync(d, { withFileTypes: true })) if (e.isDirectory()) known.add(`/${top}/${e.name}`);
  }
  let bad = 0;
  for (const a of process.argv.slice(process.argv.indexOf('--check') + 1)) {
    const key = nas410CityKey(a.startsWith('/') ? a : '/' + a.replace(/^nas410--/, '').replace(/\.json$/, '').replace(/__/g, '/'));
    const f = join(DIR, key + '.json');
    if (!existsSync(f)) { console.log(`✗ ${a}: no file ${f}`); bad++; continue; }
    const d = JSON.parse(readFileSync(f, 'utf8'));
    const probs = nas410CityProblems(d, known);
    if (!NAS410_CITY_PAGES.includes(d.path)) probs.push('path not in NAS410_CITY_PAGES');
    if (!known.has(d.path)) probs.push('page not in dist');
    for (const x of sharedSentences(d)) probs.push(`shared sentence ${x}`);
    // 10-word runs repeated from the page's own <main> (built before this section existed).
    const pf = join(dist, d.path, 'index.html');
    if (existsSync(pf)) {
      const main = (readFileSync(pf, 'utf8').match(/<main[\s\S]*?<\/main>/) || [''])[0].replace(BLOCK_RE, '');
      const pageSh = shingles(text(main));
      const rep = [...shingles(text(d.html))].filter((x) => pageSh.has(x));
      if (rep.length > 6) probs.push(`${rep.length} 10-word runs repeat the page's own text, e.g. "${rep[0]}"`);
    }
    const w = text(d.html).split(' ').filter(Boolean).length;
    if (probs.length) { bad++; console.log(`✗ ${d.path} (${w} words):\n   ${probs.join('\n   ')}`); } else console.log(`✓ ${d.path} (${w} words)`);
  }
  process.exit(bad ? 1 : 0);
}
