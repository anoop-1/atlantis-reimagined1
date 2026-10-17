/**
 * Practical NDT method + workplace pages, hub sections and city link block — crawler layer.
 * 2026-10-17 (p17 practical workstream). See src/data/practical-ndt-simulators-2026-10.mjs for
 * the why, the sources and the rules; this file only renders that data and guards it.
 *
 *   practicalSimRoutes()        14 national pages under /practical-ndt/{slug}: WebPage +
 *                               LearningResource, BreadcrumbList, FAQPage from the visible FAQ.
 *   applyPracticalSimRoute(r)   /practical-ndt: "Practise now" link to the A-scan tool above the
 *                               fold, catalogue sentence corrected to the white-paper figures,
 *                               method grid, workplace grid and "what an NDT simulator can and
 *                               cannot do". /practical-ndt-{city} pages and practical geo hubs: one
 *                               shared link block before </main>. Runs right after applyAscanRoute.
 *   assertPracticalSimClean(P)  build guard: every link target built, >= 700 words, title <= 60,
 *                               description 140-155, one H1, no prices/claims/presence wording or
 *                               city names, practice-test paths match the set files, FAQ schema
 *                               equals the visible FAQ, sibling word-shingle Jaccard < 0.55.
 * React renders the same data: src/pages/PracticalNdtSimulatorPage.tsx and
 * src/components/PracticalSimBlocks.tsx.
 */
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  PAGES, METHOD_FAMILIES, WORKPLACES, CATALOGUE, HUB, CITY_BLOCK, SIM_MARKER, SIM_PATHS, HUB_PATH,
  pageModel, pageSchema, pagePath, tokens, plain,
} from '../src/data/practical-ndt-simulators-2026-10.mjs';
import { PRACTICAL_CLAIM_RULES } from './practical-ndt-claims.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
export const HOURS = JSON.parse(readFileSync(join(ROOT, 'src/data/snt-tc-1a-hours.json'), 'utf-8'));
export const practicalSimStats = { routes: 0, hub: 0, hubStats: 0, cities: 0, maxJaccard: 0, maxPair: '', minWords: Infinity };

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const a = (href, label) => `<a href="${esc(href)}">${esc(label)}</a>`;
export const inline = (s) => tokens(s).map((t) => (t.t === 'link' ? a(t.href, t.label) : esc(t.v))).join('');

function blockHtml(b) {
  if (b.p) return `<p>${inline(b.p)}</p>`;
  if (b.ul) return `<ul>${b.ul.map((x) => `<li>${inline(x)}</li>`).join('')}</ul>`;
  if (b.ol) return `<ol>${b.ol.map((x) => `<li>${inline(x)}</li>`).join('')}</ol>`;
  return '';
}

/** The crawler body of one page. Same order and text as the React page. */
export function pageBody(page) {
  const m = pageModel(page, HOURS);
  const crumbs = m.breadcrumbs.map(([href, name], i) => (i === m.breadcrumbs.length - 1 ? `<span>${esc(name)}</span>` : a(href, name))).join(' › ');
  const ctas = [`<a href="${esc(m.demo[0])}"><strong>${esc(m.demo[1])}</strong></a>`];
  if (m.practise) ctas.push(`<a href="${esc(m.practise[0])}">${esc(m.practise[1])}</a>`);
  const sections = m.sections.map((s) => `    <section id="${esc(s.id)}">\n      <h2>${esc(s.h2)}</h2>\n      ${s.body.map(blockHtml).join('\n      ')}\n    </section>`).join('\n');
  const faq = m.faq.map((f) => `      <h3>${esc(f.q)}</h3>\n      <p>${inline(f.a)}</p>`).join('\n');
  const links = m.links.map(([href, label, note]) => `<li>${a(href, label)}${note ? `: ${esc(note)}` : ''}</li>`).join('');
  return `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/practical-ndt">Practical NDT</a><a href="/training">Training</a><a href="/ndt-practice-tests">Practice tests</a><a href="/contact">Contact</a></nav></header>
  <main ${SIM_MARKER}>
    <nav aria-label="Breadcrumb">${crumbs}</nav>
    <h1>${esc(m.h1)}</h1>
    <p>${inline(m.intro)}</p>
    <p>${ctas.join(' · ')}</p>
${sections}
    <section id="faq">
      <h2>Frequently asked questions</h2>
${faq}
    </section>
    <section id="next-steps">
      <h2>${esc(m.linksHeading)}</h2>
      <ul>${links}</ul>
    </section>
    <p>${esc(m.closer)}</p>
  </main>`;
}

/** The 14 routes, pushed next to the A-scan tool route in prerender.mjs. */
export function practicalSimRoutes() {
  const routes = PAGES.map((page) => {
    const m = pageModel(page, HOURS);
    return {
      path: m.path,
      title: m.title,
      description: m.description,
      canonical: m.canonical,
      bodyContent: pageBody(page),
      structuredData: pageSchema(m),
    };
  });
  practicalSimStats.routes = routes.length;
  return routes;
}

/* ─────────────────────────── hub + city inserts ─────────────────────────── */

export function practiseNowHtml() {
  const n = HUB.practiseNow;
  return `<p ${SIM_MARKER}><strong>${esc(n.lead)}:</strong> ${a(n.href, n.label)}, ${esc(n.tail)}.</p>`;
}

export function hubSectionsHtml() {
  const methods = METHOD_FAMILIES.map((f) => `<li>${a(f.href, `${f.code}: ${f.name}`)} (${f.jobs} jobs): ${esc(f.note)}</li>`).join('');
  const places = WORKPLACES.filter((w) => w.slug).map((w) => `<li>${a(`/practical-ndt/${w.slug}`, w.name)}: ${esc(w.note)}</li>`).join('');
  const cc = HUB.canCannot;
  return `
    <section ${SIM_MARKER} id="by-method" aria-label="${esc(HUB.methodGrid.h2)}">
      <h2>${esc(HUB.methodGrid.h2)}</h2>
      <p>${esc(HUB.methodGrid.intro)}</p>
      <ul>${methods}</ul>
    </section>
    <section ${SIM_MARKER} id="by-workplace" aria-label="${esc(HUB.workplaceGrid.h2)}">
      <h2>${esc(HUB.workplaceGrid.h2)}</h2>
      <p>${esc(HUB.workplaceGrid.intro)}</p>
      <ul>${places}</ul>
      <p>${esc(HUB.workplaceGrid.others)}</p>
    </section>
    <section ${SIM_MARKER} id="simulator-limits" aria-label="${esc(cc.h2)}">
      <h2>${esc(cc.h2)}</h2>
      <p>${esc(cc.intro)}</p>
      <h3>${esc(cc.canHeading)}</h3>
      <ul>${cc.can.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
      <h3>${esc(cc.cannotHeading)}</h3>
      <ul>${cc.cannot.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>
    </section>
`;
}

export function cityBlockHtml() {
  const b = CITY_BLOCK;
  const list = (xs) => xs.map(([href, label]) => a(href, label)).join(' · ');
  return `
    <section ${SIM_MARKER} aria-label="${esc(b.h2)}">
      <h2>${esc(b.h2)}</h2>
      <p>${esc(b.p)}</p>
      <p><strong>Methods:</strong> ${list(b.methods)}</p>
      <p><strong>Workplaces:</strong> ${list(b.workplaces)}</p>
      <p><strong>Practise now:</strong> ${a(b.practiseNow[0], b.practiseNow[1])}</p>
    </section>
`;
}

// The 2026-05 hub sentence, superseded by the white-paper catalogue figures (HUB.statsSentence).
const STALE_STATS = /Practical NDT currently offers 5 workplace environments, 12 NDT methods and 33 guided lessons\./;
const ASCAN_CALLOUT = /<p data-ascan-tool="2026-10">[\s\S]*?<\/p>/;
const SKILL_LEVELS_H2 = '<h2>Built for Every Skill Level</h2>';
export const CITY_PATH_RE = /^\/practical-ndt-[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Runs right after applyAscanRoute in the prerender route loop. Idempotent (marker). */
export function applyPracticalSimRoute(route) {
  const p = route?.path;
  if (!p || typeof route.bodyContent !== 'string' || route.bodyContent.includes(SIM_MARKER)) return route;
  let body = route.bodyContent;
  if (p === HUB_PATH) {
    if (STALE_STATS.test(body)) { body = body.replace(STALE_STATS, HUB.statsSentence); practicalSimStats.hubStats++; }
    const now = practiseNowHtml();
    if (ASCAN_CALLOUT.test(body)) body = body.replace(ASCAN_CALLOUT, (m) => `${m}${now}`);
    else {
      const h1 = body.search(/<\/h1>/i);
      const pEnd = h1 >= 0 ? body.indexOf('</p>', h1) : -1;
      body = pEnd >= 0 ? body.slice(0, pEnd + 4) + now + body.slice(pEnd + 4) : body.replace(/<\/h1>/i, (m) => `${m}${now}`);
    }
    const sections = hubSectionsHtml();
    body = body.includes(SKILL_LEVELS_H2) ? body.replace(SKILL_LEVELS_H2, `${sections}    ${SKILL_LEVELS_H2}`) : body.replace(/<\/main>/i, `${sections}</main>`);
    practicalSimStats.hub++;
    return { ...route, bodyContent: body };
  }
  if (CITY_PATH_RE.test(p)) {
    const i = body.lastIndexOf('</main>');
    if (i < 0) return route;
    practicalSimStats.cities++;
    return { ...route, bodyContent: body.slice(0, i) + cityBlockHtml() + body.slice(i) };
  }
  return route;
}

/* ─────────────────────────────── measurement ─────────────────────────────── */

/** Visible words in <main>, excluding the breadcrumb nav. */
export function mainText(html) {
  const m = String(html).match(/<main[^>]*>([\s\S]*)<\/main>/i);
  return (m ? m[1] : String(html))
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
export const wordCount = (html) => mainText(html).split(' ').filter(Boolean).length;

/** The site's similarity measure (scripts/noindex-recovery.mjs): 8-word shingles sampled every 3 words. */
export function shingles(text, size = 8, step = 3) {
  const words = String(text).toLowerCase().replace(/[^a-z0-9\s]/g, ' ').split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + size <= words.length; i += step) set.add(words.slice(i, i + size).join(' '));
  return set;
}
export function jaccard(x, y) {
  if (!x.size || !y.size) return 0;
  let inter = 0;
  const [small, large] = x.size <= y.size ? [x, y] : [y, x];
  for (const s of small) if (large.has(s)) inter++;
  return inter / (x.size + y.size - inter);
}

/** Max sibling similarity within each kind (method pages vs method pages, workplace vs workplace). */
export function siblingSimilarity(size = 8, step = 3) {
  const bodies = PAGES.map((p) => ({ p, sh: shingles(mainText(pageBody(p)), size, step) }));
  let max = 0, pair = '';
  const rows = [];
  for (let i = 0; i < bodies.length; i++) {
    for (let j = i + 1; j < bodies.length; j++) {
      if (bodies[i].p.kind !== bodies[j].p.kind) continue;
      const v = jaccard(bodies[i].sh, bodies[j].sh);
      rows.push([bodies[i].p.slug, bodies[j].p.slug, v]);
      if (v > max) { max = v; pair = `${bodies[i].p.slug} ~ ${bodies[j].p.slug}`; }
    }
  }
  return { max, pair, rows };
}

/* ──────────────────────────────── build guard ─────────────────────────────── */

const PRICE = /[$£€₹]\s?\d|\b(?:USD|CAD|GBP|EUR|INR|AED|SAR)\s?\d|\bper (?:seat|user|licen[cs]e|month|year|day|hour|head|student|participant)\b|\bpric(?:e|es|ing)\b|\bfree trial\b|\bdiscount\b/i;
const HYPE = /\b(?:revolutionary|world-class|leading|best-in-class|unmatched|cutting-edge|state-of-the-art|guarantee[sd]?)\b/i;
/** Sentence-level claim checks: affirmative experience-hour or validation claims, pass rates. */
function claimHits(text) {
  const hits = [];
  if (/\b(?:8[5-9]|9\d|100)\s?%\s+(?:\w+\s+){0,2}pass/i.test(text)) hits.push('pass-rate figure');
  if (/\bcertif(?:y|ies) (?:you|technicians|trainees)\b/i.test(text)) hits.push('certifies people');
  for (const sentence of text.split(/(?<=[.?!])\s+/)) {
    const neg = /\b(?:not|never|no|none|unless|yet)\b|n['’]t\b|\?$/i.test(sentence);
    if (/\bcount\w*\s+(?:as|toward|towards)\s+(?:[\w-]+\s+){0,2}experience\b/i.test(sentence) && !neg) hits.push(`experience claim: ${sentence.slice(0, 90)}`);
    if (/\bvalidated\b/i.test(sentence) && !neg) hits.push(`validation claim: ${sentence.slice(0, 90)}`);
  }
  return hits;
}
const PRESENCE = /\b(?:our|Atlantis(?:['’]s?)?)\s+(?:[\w-]+\s+){0,3}(?:office|centre|center|campus|venue|classroom|training facility|lab(?:oratory)?)\b|\b(?:venue|cohort|intake|course dates?|scheduled sessions?)\b/i;

function cityNames() {
  const f = join(ROOT, 'src/data/practical-ndt-cities.json');
  if (!existsSync(f)) return [];
  const names = new Set();
  for (const c of JSON.parse(readFileSync(f, 'utf-8'))) {
    const n = String(c.city || '').split(',')[0].trim();
    if (n.length > 3) names.add(n);
  }
  return [...names];
}
const escRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

function practiceCanonicals() {
  const dir = join(ROOT, 'src/data/practice-tests');
  const out = {};
  for (const f of readdirSync(dir)) {
    if (!/-level-\d\.json$/.test(f)) continue;
    const j = JSON.parse(readFileSync(join(dir, f), 'utf-8'));
    out[j.method] = j.canonicalPath;
  }
  return out;
}

/** knownPaths: BUILT_PATHS. Without it only copy, geometry and similarity are checked. */
export function assertPracticalSimClean(knownPaths) {
  const bad = [];
  const jobs = METHOD_FAMILIES.reduce((n, f) => n + f.jobs, 0);
  if (jobs !== CATALOGUE.jobs) bad.push(`method job counts sum to ${jobs}, not ${CATALOGUE.jobs}`);
  if (METHOD_FAMILIES.length !== CATALOGUE.methodFamilies) bad.push('method family count');
  if (WORKPLACES.length !== CATALOGUE.workplaces) bad.push('workplace count');
  const practice = practiceCanonicals();
  const names = cityNames();
  const cityRe = names.length ? new RegExp(`\\b(?:${names.map(escRe).join('|')})\\b`) : null;
  const known = (href) => {
    const base = href.replace(/[?#].*$/, '').replace(/\/$/, '') || '/';
    return SIM_PATHS.includes(base) || !knownPaths || knownPaths.has(base);
  };
  const checkCopy = (where, html, text) => {
    for (const [, re] of PRACTICAL_CLAIM_RULES) if (re.test(html)) bad.push(`${where}: first/only claim "${html.match(re)[0]}"`);
    if (PRICE.test(text)) bad.push(`${where}: pricing word "${text.match(PRICE)[0]}"`);
    if (HYPE.test(text)) bad.push(`${where}: hype word "${text.match(HYPE)[0]}"`);
    for (const h of claimHits(text)) bad.push(`${where}: ${h}`);
    if (PRESENCE.test(text)) bad.push(`${where}: presence wording "${text.match(PRESENCE)[0]}"`);
    if (cityRe && cityRe.test(text)) bad.push(`${where}: city name "${text.match(cityRe)[0]}"`);
    for (const m of html.matchAll(/href="([^"]+)"/g)) {
      const href = m[1].replace(/&amp;/g, '&');
      if (!href.startsWith('/')) { bad.push(`${where}: external or relative link ${href}`); continue; }
      if (!known(href)) bad.push(`${where}: link target not built: ${href}`);
    }
  };
  let minWords = Infinity;
  for (const page of PAGES) {
    const m = pageModel(page, HOURS);
    const html = pageBody(page);
    const text = mainText(html);
    const words = wordCount(html);
    minWords = Math.min(minWords, words);
    const where = m.path;
    if (m.title.length > 60) bad.push(`${where}: title ${m.title.length} chars`);
    if (m.description.length < 140 || m.description.length > 155) bad.push(`${where}: description ${m.description.length} chars`);
    if ((html.match(/<h1[\s>]/gi) || []).length !== 1) bad.push(`${where}: not exactly one H1`);
    if (words < 700) bad.push(`${where}: only ${words} words`);
    if (m.faq.length < 2) bad.push(`${where}: fewer than two visible FAQ`);
    const sd = JSON.stringify(m && pageSchema(m));
    if (/"Offer"|"price|aggregateRating|"Review"/i.test(sd)) bad.push(`${where}: Offer/price/rating in schema`);
    const faqNode = pageSchema(m)['@graph'].find((n) => n['@type'] === 'FAQPage');
    if (!faqNode || faqNode.mainEntity.length !== m.faq.length || faqNode.mainEntity.some((q, i) => q.name !== m.faq[i].q)) bad.push(`${where}: FAQ schema differs from the visible FAQ`);
    if (page.kind === 'method' && practice[page.code] && !m.links.some(([href]) => href === practice[page.code])) bad.push(`${where}: practice test ${practice[page.code]} not linked`);
    for (const [href] of m.links) if (/practice-questions/.test(href) && !Object.values(practice).includes(href)) bad.push(`${where}: practice link ${href} is not a set canonical`);
    if (page.kind === 'method' && !m.links.some(([href]) => /training|course/.test(href))) bad.push(`${where}: no method training link`);
    if (!m.demo[0].startsWith('/contact?service=practical-ndt')) bad.push(`${where}: demo CTA`);
    if (!/not a validated engineering tool/.test(text) || !/does not replace the practical examination/.test(text)) bad.push(`${where}: shared closer missing`);
    checkCopy(where, html, text);
  }
  const hubHtml = practiseNowHtml() + hubSectionsHtml();
  checkCopy('hub sections', hubHtml, mainText(hubHtml));
  const cityHtml = cityBlockHtml();
  checkCopy('city block', cityHtml, mainText(cityHtml));
  const sim = siblingSimilarity();
  practicalSimStats.maxJaccard = sim.max;
  practicalSimStats.maxPair = sim.pair;
  practicalSimStats.minWords = minWords;
  if (sim.max >= 0.55) bad.push(`sibling similarity ${sim.max.toFixed(3)} (${sim.pair}) is at or above the 0.55 gate`);
  if (bad.length) throw new Error(`practical-ndt-simulators-2026-10: ${[...new Set(bad)].join('; ')}`);
  return true;
}

export function practicalSimSummary() {
  const s = practicalSimStats;
  return `🎮 Practical NDT simulator pages: ${s.routes} routes, hub ${s.hub} (stats sentence ${s.hubStats}), city/geo link blocks ${s.cities}, min words ${s.minWords}, max sibling Jaccard ${s.maxJaccard.toFixed(3)} (${s.maxPair})`;
}

export { pagePath, plain };
