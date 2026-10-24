// Researched local "depth" blocks on existing geo pages that already earn impressions
// (owner-approved targeted geo build, 2026-10-24). Evidence: live GSC (90d to 2026-10-22) and the
// geo-targets analysis — place-named searches are <1% of impressions, so instead of minting
// hundreds of city pages, the ~100 thin (<900 words) or striking-distance (p8–30) geo pages that
// already earn get a researched, page-specific local answer and routing to the right product.
//
// One file per page: src/data/geo-depth-2026-10/<path with / -> __>.json  { path, h2, html, queries }.
// Crawler: applyGeoDepth(route) inserts <section data-geo-depth="2026-10"> before </main>, ahead of
// the intent-routing block. React: src/components/GeoDepthBlock.tsx renders the same JSON (lazy,
// one chunk per page) into the "geodepth:" main slot.
//
// Import from the writers' scratch output:  node scripts/geo-depth-2026-10.mjs --import <dir>
import { readFileSync, readdirSync, existsSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'src/data/geo-depth-2026-10');
export const geoDepthKey = (p) => p.replace(/^\//, '').replace(/\//g, '__');
const BLOCK_RE = /<section data-geo-depth="2026-10"[\s\S]*?<\/section>/g;
export const geoDepthStats = { pages: 0 };

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

export const geoDepthHtml = (d) => `<section data-geo-depth="2026-10" class="container mx-auto px-6 py-10 max-w-4xl"><div class="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary">${d.html}</div></section>`;

export function applyGeoDepth(route) {
  if (!route || typeof route.bodyContent !== 'string') return route;
  const d = load().get((route.path || '').replace(/\/+$/, '') || '/');
  if (!d) return route;
  let body = route.bodyContent.replace(BLOCK_RE, '');
  const i = body.lastIndexOf('</main>');
  const html = geoDepthHtml(d);
  body = i >= 0 ? body.slice(0, i) + html + body.slice(i) : body + html;
  geoDepthStats.pages++;
  return { ...route, bodyContent: body };
}

const text = (h) => String(h).replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/g, ' ').replace(/\s+/g, ' ').trim();
/** Content rules for one block; returns a list of problems. */
export function geoDepthProblems(d, knownPaths) {
  const out = [];
  const t = text(d.html);
  const w = t.split(' ').filter(Boolean).length;
  if (w < 350 || w > 900) out.push(`words ${w}`);
  if ((d.html.match(/<h2[\s>]/g) || []).length !== 1) out.push('needs exactly one h2');
  if (/<(script|style|img|iframe|form|input|section)\b/i.test(d.html)) out.push('disallowed tag');
  if (/[$£€₹]\s?\d|\bprice[sd]?\b|\bfees?\b|day rate|per day\b/i.test(t)) out.push('price wording');
  if (/\b(our|the Atlantis) (\w+ )?(office|lab|laboratory|facility|cent(er|re)|campus|yard|warehouse)\b|\bvisit our\b/i.test(t)) out.push('physical presence claim');
  if (/\b\d{2,3}% (first-time )?pass/i.test(t)) out.push('pass-rate claim');
  if (/anu\.anoop|@[a-z0-9-]+\.(com|net|org)/i.test(t)) out.push('email address');
  for (const s of t.split(/(?<=[.!?])\s+/)) {
    if (/\b(Atlantis|we|our)\b/i.test(s) && /\b(RBI|risk[- ]based inspection|API ?5(79|80|81)|fitness[- ]for[- ]service|FFS)\b/i.test(s) && !/\b(not|never|no|isn't|doesn't|does not|owner's|engineer)\b/i.test(s)) out.push(`RBI/FFS offering? ${s.slice(0, 120)}`);
    if (/\b(Atlantis|we|our)\b/i.test(s) && /\b(CWI|API ICP|PCN|CSWIP|CGSB|ISO 9712|NAS 410)\b[^.]{0,40}\b(training|course|exam prep)\b/i.test(s) && !/\b(not|never|doesn't|does not)\b/i.test(s)) out.push(`non-ASNT training offer? ${s.slice(0, 120)}`);
    if (/\b(Atlantis|we)\b[^.]{0,30}\b(is|are|act as|serve as)\b[^.]{0,20}\b(authori[sz]ed inspector|inspector of record|authori[sz]ed inspection agency)\b/i.test(s) && !/\bnot\b/i.test(s)) out.push(`AI claim? ${s.slice(0, 120)}`);
  }
  if (knownPaths) for (const m of d.html.matchAll(/href="([^"]+)"/g)) {
    const h = m[1].split('?')[0].replace(/\/+$/, '') || '/';
    if (h.startsWith('/') && h !== '/contact' && !knownPaths.has(h)) out.push(`dead link ${h}`);
  }
  const product = (d.html.match(/href="\/(training|ndt-level|asnt-level|[a-z-]+-testing-training|practical-ndt|consulting|inspection|erp|ndt-practice-tests|ultrasonic-testing|radiographic-testing|magnetic-particle-testing|penetrant-testing|visual-testing|eddy-current-testing|phased-array|tofd)/g) || []).length;
  if (product < 3) out.push(`only ${product} product links`);
  return out;
}

/** Build guard: every block's page is built and the block passes the content rules. */
export function assertGeoDepthClean(knownPaths) {
  const problems = [];
  for (const [p, d] of load()) {
    if (knownPaths && !knownPaths.has(p)) problems.push(`${p}: page not built`);
    for (const x of geoDepthProblems(d, knownPaths)) problems.push(`${p}: ${x}`);
  }
  if (problems.length) throw new Error(`geo-depth: ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  console.log(`📍 Geo depth 2026-10-24: ${load().size} researched local blocks, guard PASS`);
}

// CLI: import the writers' output files (array rows {path, h2, html, queriesAnswered, sources}).
if (process.argv[1] && process.argv[1].endsWith('geo-depth-2026-10.mjs') && process.argv.includes('--import')) {
  const src = process.argv[process.argv.indexOf('--import') + 1];
  mkdirSync(DIR, { recursive: true });
  let n = 0; const rej = [];
  for (const f of readdirSync(src).filter((x) => /^output-depth-\d+\.json$/.test(x))) {
    for (const r of JSON.parse(readFileSync(join(src, f), 'utf8'))) {
      if (!r || !r.path || !r.html) continue;
      const html = String(r.html).replace(/https:\/\/atlantisndt\.com(?=\/)/g, '');
      const d = { path: r.path.replace(/\/+$/, ''), h2: r.h2 || '', html, queries: r.queriesAnswered || [] };
      const probs = geoDepthProblems(d, null);
      if (probs.length) { rej.push(`${d.path} [${f}]: ${probs.join('; ')}`); continue; }
      writeFileSync(join(DIR, geoDepthKey(d.path) + '.json'), JSON.stringify(d, null, 1) + '\n');
      n++;
    }
  }
  console.log(`imported ${n} geo depth blocks`);
  if (rej.length) { console.log('REJECTED:'); rej.forEach((x) => console.log('  ' + x)); }
}
