/**
 * Ranking release 2026-10-17 (CLAUDE.md §58) — crawler-HTML side.
 * ─────────────────────────────────────────────────────────────────────────────
 * Copy: src/data/rank-wave14-2026-10.json · renderer: src/data/rank-wave14-2026-10.mjs
 * (React renders the same strings through src/components/RankWave14Block.tsx).
 *
 * Hook (prerender.mjs render loop, straight after applyOwnerLinksRoute, before
 * writeRoute): route = applyRankWave14Route(route);
 * It runs after the owner-links pass so the owner paragraph never lands inside the
 * answer block, and it only inserts at the top of the page (plus title/H1 on the
 * consulting city family), so nothing that runs earlier is disturbed.
 *   1. Direct-answer blocks (§25.4) at the top of the main content on the owners of
 *      US queries ranking p3-15, plus the inspection service owners.
 *   2. One exact-anchor sentence after the intro on indexable city/method pages in
 *      the UT, PAUT and weld families, pointing at the national owner.
 *   3. Salary owners: sourced data note, author and date after the direct answer, and
 *      an Article node where the page has none (salary ranges are not touched).
 *   4. US consulting city pages: title, H1 and description scoped to "{City}, {ST}",
 *      the national Level III term handed to /consulting/ndt-consulting-level-iii.
 * assertRankWave14Clean(BUILT_PATHS) fails the build on a bad answer length, a price,
 * a turnaround promise, an unbuilt link target or a founder-credential slip.
 */
import { readFileSync } from 'fs';
import {
  RANK14_MARKER, answerBlockHtml, routeLineHtml, routeFor, salaryNoteHtml, isSalaryOwner,
  salaryArticleNode, usPlace, sectorTail, consultingCityTitle, consultingCityH1,
  consultingCityDescription, consultingCityScopeHtml, insertAtTop, insertAfterIntro, introSectors,
  wordCount, linksIn, plainText,
} from '../src/data/rank-wave14-2026-10.mjs';

const readJson = (rel) => JSON.parse(readFileSync(new URL(rel, import.meta.url), 'utf-8'));
export const RANK14 = readJson('../src/data/rank-wave14-2026-10.json');
const GEO = readJson('../src/data/geo-hierarchy.json');
const OWNER_L3 = '/consulting/ndt-consulting-level-iii';

const cityTitles = new Map();
export const rank14Stats = { answers: 0, routes: 0, salary: 0, articles: 0, cityPages: 0, cityTitles: 0, byFamily: {} };

const ARTICLE_TYPES = new Set(['Article', 'BlogPosting', 'NewsArticle', 'TechArticle']);
function hasArticle(sd) {
  const nodes = !sd ? [] : Array.isArray(sd) ? sd : Array.isArray(sd['@graph']) ? sd['@graph'] : [sd];
  return nodes.some((n) => n && (ARTICLE_TYPES.has(n['@type']) || (Array.isArray(n['@type']) && n['@type'].some((t) => ARTICLE_TYPES.has(t)))));
}
function addNode(sd, node) {
  if (!sd) return { '@context': 'https://schema.org', '@graph': [node] };
  if (Array.isArray(sd)) return [...sd, { '@context': 'https://schema.org', ...node }];
  if (Array.isArray(sd['@graph'])) return { ...sd, '@graph': [...sd['@graph'], node] };
  const { '@context': _c, ...rest } = sd;
  return { '@context': 'https://schema.org', '@graph': [rest, node] };
}
const decode = (s) => String(s ?? '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/\s+/g, ' ').trim();
const escText = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const indexable = (r) => !(r.noindex || r.noindexFollow || r.prunedByDemand) && !/<meta name="robots" content="noindex/i.test(r.bodyContent || '');

/** US consulting city page: "NDT Consulting in {City}, {ST}" title/H1/description + one scope line. */
function scopeConsultingCity(route) {
  const c = RANK14.consultingCity;
  const slug = route.path.slice(c.prefix.length);
  const place = usPlace(GEO, slug);
  if (!place) return route;
  let body = route.bodyContent;
  const h1m = body.match(/<h1([^>]*)>([\s\S]*?)<\/h1>/i);
  if (!h1m) return route;
  const oldH1 = decode(h1m[2]);
  const tailRaw = (oldH1.match(/\s[—–-]\s(.+)$/) || [])[1] || '';
  const tail = sectorTail(RANK14, tailRaw) || sectorTail(RANK14, introSectors(body.slice(body.indexOf('</h1>'), body.indexOf('</h1>') + 2000)));
  const h1 = consultingCityH1(place, tail);
  body = body.replace(h1m[0], `<h1${h1m[1]}>${escText(h1)}</h1>`);
  // inspection-l3.mjs already closes every consulting city page with a "this page covers
  // {city}" scope section linking the Level III owner; add the line only where it is missing.
  if (!body.includes(`${RANK14_MARKER}="city-scope"`) && !body.includes('class="city-scope"')) body = insertAfterIntro(body, consultingCityScopeHtml(RANK14, place));
  let title = consultingCityTitle(RANK14, place, tail);
  // Two slugs can name one place (carson / carson-california): keep titles unique.
  const owner = cityTitles.get(title);
  if (owner && owner !== route.path) {
    const alt = tail ? `NDT Consulting in ${place.place} — ${tail}` : '';
    title = alt && alt.length <= RANK14.consultingCity.titleMax && !cityTitles.has(alt) ? alt : `${title} | Atlantis NDT`;
  }
  cityTitles.set(title, route.path);
  const description = consultingCityDescription(RANK14, place, tail);
  rank14Stats.cityPages++;
  if (title !== route.title) rank14Stats.cityTitles++;
  return { ...route, bodyContent: body, title, ogTitle: title, description, ogDesc: description };
}

export function applyRankWave14Route(route) {
  const p = route && route.path;
  if (!p || typeof route.bodyContent !== 'string') return route;
  let next = route;
  let body = route.bodyContent;
  const touched = () => { next = { ...next, bodyContent: body }; };

  const e = RANK14.answers[p];
  if (e && !e.layer && !body.includes(`${RANK14_MARKER}="answer"`)) {
    body = insertAtTop(body, answerBlockHtml(RANK14, p));
    rank14Stats.answers++;
    touched();
  }

  if (isSalaryOwner(RANK14, p) && !body.includes(`${RANK14_MARKER}="salary"`)) {
    body = insertAfterIntro(body, salaryNoteHtml(RANK14, p));
    rank14Stats.salary++;
    touched();
    if (!hasArticle(next.structuredData)) {
      const h1 = decode((body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1] || next.title || '');
      next = { ...next, structuredData: addNode(next.structuredData, salaryArticleNode(RANK14, p, h1)) };
      rank14Stats.articles++;
    }
  }

  const r = routeFor(RANK14, p);
  if (r && indexable(next) && !body.includes(`${RANK14_MARKER}="route"`)) {
    body = insertAfterIntro(body, routeLineHtml(RANK14, p));
    rank14Stats.routes++;
    rank14Stats.byFamily[r.family] = (rank14Stats.byFamily[r.family] || 0) + 1;
    touched();
  }

  if (p.startsWith(RANK14.consultingCity.prefix) && p !== OWNER_L3) next = scopeConsultingCity(next);
  return next;
}

/* ── guards ─────────────────────────────────────────────────────────────────── */
const PRICE = /[$£€₹]\s?\d(?![\d,]*\s*(?:a year|an hour))|\b(?:USD|INR|AED|SAR|CAD)\s?\d|\bper (?:day|hour)\b|\bday[- ]rate\b|\bfrom \$|\bstarting at\b/i;
const TURNAROUND = /within \d+\s*(?:hours?|days?|business days?|weeks?)|\b24\s*h|same[- ]day|next[- ]day|turnaround of/i;
const CLAIMS = /\b(?:#1|world-class|industry-leading|leading provider|guaranteed|pass rate|first-ever|accredited by|nadcap[- ]accredited|iso 17025 accredited)\b/i;

export function assertRankWave14Clean(knownPaths) {
  const errs = [];
  const all = [];
  for (const [path, e] of Object.entries(RANK14.answers)) {
    const n = wordCount(e.a);
    if (n < 40 || n > 60) errs.push(`${path}: direct answer is ${n} words (40-60)`);
    if (!/\?$/.test(e.q)) errs.push(`${path}: H2 should be the question`);
    if (knownPaths && !knownPaths.has(path)) errs.push(`${path}: answer target not built`);
    all.push(e.q, e.a, e.more || '');
    if (e.service) all.push(...e.service.receive, e.service.finds, e.service.misses, e.service.links || '');
  }
  for (const r of RANK14.routes) all.push(r.text);
  all.push(RANK14.area, RANK14.salary.note, RANK14.consultingCity.descriptionTemplate, RANK14.consultingCity.descriptionFallback, RANK14.consultingCity.scopeLine);
  for (const t of all) {
    const v = plainText(t);
    if (PRICE.test(v.replace(/\$78,350 a year \(\$37\.67 an hour\)/, ''))) errs.push(`price pattern: ${v.slice(0, 90)}`);
    if (TURNAROUND.test(v)) errs.push(`turnaround promise: ${v.slice(0, 90)}`);
    if (CLAIMS.test(v)) errs.push(`claim word: ${v.slice(0, 90)}`);
    if (/Anoop|founder/i.test(v) && /\bET\b|eddy|NAS\s?410 Level (?:3|III)\b.*(?:Anoop|founder)|six methods|1[2-9]\+ years/i.test(v)) errs.push(`founder credential: ${v.slice(0, 90)}`);
    for (const l of linksIn(t)) {
      if (!l.href.startsWith('/')) { if (!/^https:\/\/(?:www\.)?(?:api\.org|onetonline\.org|certification\.asnt\.org)\//.test(l.href)) errs.push(`external link not allowed: ${l.href}`); continue; }
      const target = l.href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
      if (knownPaths && !knownPaths.has(target)) errs.push(`link target not built: ${l.href} (in "${l.text}")`);
    }
  }
  const s = RANK14.salary;
  if (!/O\*NET 17-3029\.01/.test(s.note) || !/\$78,350/.test(s.note)) errs.push('salary note lost its O*NET source figure');
  if (s.sourceUrl !== 'https://www.onetonline.org/link/summary/17-3029.01') errs.push('salary source URL changed');
  if (s.authorCredential !== 'ASNT NDT Level III (UT, RT, MT, PT, VT)') errs.push('author credential is not the approved wording');
  if (knownPaths) for (const p of s.paths) if (!knownPaths.has(p)) errs.push(`salary owner not built: ${p}`);
  for (const r of RANK14.routes) if (knownPaths && !knownPaths.has(r.owner)) errs.push(`route owner not built: ${r.owner}`);
  if (errs.length) throw new Error(`rank-wave14-2026-10:\n  ${[...new Set(errs)].join('\n  ')}`);
  return true;
}
