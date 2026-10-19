// NDT Level III consulting section (owner, 2026-10-19): crawler routes, link blocks, index fix and
// the build guard. Copy and class names live in src/data/consulting-section/index.mjs and the
// shared template src/data/service-section/core.mjs, which the React pages also read.
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as Lucide from 'lucide-react';
import { SITE, UI, esc } from '../src/data/service-section/core.mjs';
import {
  CONSULTING_SECTION, CONSULTING_PAGES, CONSULTING_PATHS, CONSULTING_SERVICES_BLOCK, CONSULTING_BLOCK_PATHS,
  CONSULTING_BLOCK_MARKER, CONSULTING_ICONS, CONSULTING_NAV, CONSULTING_ENQUIRY, consultingTopicLinksFor,
  consultingTopicHtml, CONSULTING_TOPIC_MARKER,
} from '../src/data/consulting-section/index.mjs';

export const consultingSectionStats = { routes: 0, topicLinks: 0, blocks: 0, reindexed: [] };

const iconCache = new Map();
function icon(name, className) {
  const key = `${name}|${className}`;
  if (!iconCache.has(key)) {
    const C = Lucide[name];
    iconCache.set(key, C ? renderToStaticMarkup(createElement(C, { className, 'aria-hidden': 'true' })) : '');
  }
  return iconCache.get(key);
}

// No-JS stand-in for the React enquiry form (EnquiryCaptureForm has no static fallback).
const FORM_HTML = `<div class="p-6 rounded-xl border-2 border-blue-200 bg-white"><h2 class="text-2xl font-bold mb-2">Request a Level III consultation</h2><p class="text-muted-foreground mb-4">Tell us what the audit, the client or the code is asking for, the methods and sites involved, and your dates. We reply within one business day.</p><a href="${esc(CONSULTING_ENQUIRY)}" class="${UI.btnPrimary}">Send your enquiry</a></div>`;

export function consultingSectionRoutes() {
  consultingSectionStats.routes = CONSULTING_PAGES.length;
  return CONSULTING_PAGES.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    canonical: SITE + page.path,
    bodyContent: `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/consulting">Consulting</a><a href="/consulting/ndt-consulting-level-iii">NDT Level III consulting</a><a href="/inspection">Inspection</a><a href="/contact">Contact</a></nav></header>
  <main>
${CONSULTING_SECTION.html(page, { icon, formHtml: FORM_HTML })}
  </main>`,
    structuredData: CONSULTING_SECTION.schema(page),
  }));
}

/** "NDT Level III consulting services" cards (same markup as ConsultingServicesBlock in React). */
export function consultingServicesHtml() {
  const b = CONSULTING_SERVICES_BLOCK;
  return `<section class="${UI.section}" ${CONSULTING_BLOCK_MARKER}="2026-10"><div class="${UI.wide}"><h2 class="${UI.h2Center}">${esc(b.h2)}</h2><p class="${UI.sub}">${esc(b.intro)}</p><div class="${UI.cardGrid}">${b.cards.map((c) => `<a href="${esc(c.href)}" class="${UI.linkCard}">${CONSULTING_ICONS[c.href] ? `<div class="${UI.iconTile}">${icon(CONSULTING_ICONS[c.href], UI.icon)}</div>` : ''}<h3 class="${UI.linkCardTitle}">${esc(c.label)}</h3><p class="${UI.linkCardText}">${esc(c.text)}</p><span class="${UI.linkCardMore}">Explore ${icon('ArrowRight', 'w-4 h-4')}</span></a>`).join('')}</div></div></section>`;
}

const BLOCK_RE = new RegExp(`<section class="[^"]*" ${CONSULTING_BLOCK_MARKER}="2026-10">[\\s\\S]*?</section>`, 'g');
const TOPIC_RE = new RegExp(`<nav class="[^"]*" ${CONSULTING_TOPIC_MARKER}="2026-10"[\\s\\S]*?</nav>`, 'g');

/** Index just after the section that holds the H1 (the hero), or -1. */
function afterHero(body) {
  const h = body.indexOf('</h1>');
  if (h < 0) return -1;
  const end = body.indexOf('</section>', h);
  return end > 0 ? end + '</section>'.length : -1;
}

/** Services cards on /consulting and the Level III page; up-links on the detailed consulting pages. */
export function applyConsultingRoute(route) {
  const p = route?.path;
  if (!p || typeof route.bodyContent !== 'string') return route;
  let body = route.bodyContent;
  if (CONSULTING_BLOCK_PATHS.has(p)) {
    body = body.replace(BLOCK_RE, '');
    const at = afterHero(body);
    const html = consultingServicesHtml();
    if (at > 0) body = body.slice(0, at) + '\n' + html + body.slice(at);
    else { const i = body.lastIndexOf('</main>'); body = i >= 0 ? body.slice(0, i) + html + body.slice(i) : body + html; }
    consultingSectionStats.blocks++;
  }
  const t = consultingTopicLinksFor(p);
  if (t) {
    body = body.replace(TOPIC_RE, '');
    const i = body.lastIndexOf('</main>');
    const html = consultingTopicHtml(t);
    body = i >= 0 ? body.slice(0, i) + html + body.slice(i) : body + html;
    consultingSectionStats.topicLinks++;
  }
  return body === route.bodyContent ? route : { ...route, bodyContent: body };
}

/**
 * Pages in the consulting menu must be indexable. /consulting/ndt-technical-procedure-development
 * kept a noindex from the route reconciler's old "no unique research" rule after later layers
 * rebuilt its copy (found 2026-10-19). Runs after the noindex re-evaluation and the prune.
 */
export function applyConsultingIndexable(routes) {
  const menu = new Set([...CONSULTING_PATHS, ...CONSULTING_NAV.children.flatMap((c) => [c.path, ...(c.children || []).map((g) => g.path)])]);
  for (let i = 0; i < routes.length; i++) {
    const r = routes[i];
    if (menu.has(r.path) && (r.noindex || r.noindexFollow || r.prunedByDemand)) {
      routes[i] = { ...r, noindex: false, noindexFollow: false, prunedByDemand: false };
      consultingSectionStats.reindexed.push(r.path);
    }
  }
  return consultingSectionStats.reindexed;
}

const internalHrefs = (html) => [...String(html).matchAll(/href="([^"]+)"/g)]
  .map((m) => m[1].replace(/&amp;/g, '&'))
  .filter((h) => h.startsWith('/'))
  .map((h) => h.split(/[?#]/)[0] || '/');
const PRICE = /[$£€₹]\s?\d|\b(?:USD|AED|SAR|INR|CAD|GBP|EUR)\s?\d|\b(?:price|prices|pricing|fees?|tuition|discount)\b|\bper (?:day|hour|shift)\b|\bday[- ]rate\b/i;
const FOUNDER_BAD = /(?:founder|Anoop)[^.]{0,120}\b(?:NAS 410 Level|PCN|CWI|API 5\d\d (?:inspector|certified)|ET\b|eddy current)/i;
const ACCREDITED = /\bAtlantis(?: NDT)? (?:is|holds|has) (?:an? )?(?:ISO\/IEC |ISO )?170(?:20|25|24)\b(?! accreditation;)|\bAtlantis(?: NDT)? is (?:ISO\/IEC |ISO )?170(?:20|25|24)[- ]accredited/i;
const PROMISES = /\b24[- ]hour\b|\bguarantee|\bwithin (?:\d+|two|three|five) (?:business )?days\b/i;

/** Build guard: pages built, links resolve, no prices, no accreditation or founder over-claims. */
export function assertConsultingSectionClean(knownPaths) {
  const problems = [];
  const titles = new Set();
  for (const page of CONSULTING_PAGES) {
    const html = CONSULTING_SECTION.html(page);
    const text = html.replace(/<[^>]+>/g, ' ');
    if (knownPaths && !knownPaths.has(page.path)) problems.push(`${page.path} is not a built route`);
    if (knownPaths) for (const href of internalHrefs(html)) if (!knownPaths.has(href)) problems.push(`${page.path}: link target ${href} is not a built route`);
    if (PRICE.test(text)) problems.push(`${page.path}: price wording "${text.match(PRICE)[0]}"`);
    if (FOUNDER_BAD.test(text)) problems.push(`${page.path}: founder credential beyond ASNT Level III UT/RT/MT/PT/VT`);
    if (ACCREDITED.test(text)) problems.push(`${page.path}: reads as Atlantis holding ISO/IEC 17020/17025/17024`);
    if (PROMISES.test(text)) problems.push(`${page.path}: time promise "${text.match(PROMISES)[0]}"`);
    if (CONSULTING_SECTION.words(page) < 600) problems.push(`${page.path}: only ${CONSULTING_SECTION.words(page)} words`);
    if (page.title.length > 60) problems.push(`${page.path}: title ${page.title.length} chars`);
    if (page.description.length > 158) problems.push(`${page.path}: description ${page.description.length} chars`);
    if (titles.has(page.title)) problems.push(`${page.path}: duplicate title`);
    titles.add(page.title);
  }
  if (!/not accredited to ISO\/IEC 17020 or ISO\/IEC 17025/.test(CONSULTING_SECTION.html(CONSULTING_SECTION.page('/consulting/iso-9001-17020-17025-ndt')))) problems.push('ISO page lost its own-position statement');
  if (knownPaths) {
    for (const c of CONSULTING_SERVICES_BLOCK.cards) if (!knownPaths.has(c.href)) problems.push(`services block: ${c.href} is not built`);
    for (const c of CONSULTING_NAV.children) for (const n of [c, ...(c.children || [])]) if (!knownPaths.has(n.path)) problems.push(`menu: ${n.path} is not built`);
    const targets = new Set();
    for (const p of knownPaths) { const b = consultingTopicLinksFor(p); if (b) for (const [h] of b.links) targets.add(h); }
    for (const t of targets) if (!knownPaths.has(t)) problems.push(`topic up-link target ${t} is not built`);
  }
  if (problems.length) throw new Error(`consulting-section: ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  console.log(`🧭 Consulting section 2026-10-19: ${CONSULTING_PAGES.length} topic pages, guard PASS`);
}
