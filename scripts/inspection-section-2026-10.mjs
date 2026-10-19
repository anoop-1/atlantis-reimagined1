// Inspection section (2026-10-18; restyled + regional links 2026-10-19): crawler routes,
// regional up-links and the build guard.
// Copy, class names and icon choices live in src/data/inspection-section/*.mjs and are shared
// with the React page (src/pages/InspectionSection.tsx) and InspectionRegionalLinks.tsx, so both
// layers render the same text in the same site look.
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import * as Lucide from 'lucide-react';
import {
  INSPECTION_PAGES, INSPECTION_REGIONS, SITE, inspectionHtml, inspectionSchema, inspectionWords,
  inspectionRegionalLinksFor, inspectionRegionalHtml, INSPECTION_REGIONAL_MARKER,
} from '../src/data/inspection-section/index.mjs';
import { rfqFallbackForm } from './inspection-l3.mjs';

export const inspectionSectionStats = { routes: 0, regional: 0, regionalByFamily: {} };

// The same lucide icons React renders, as static SVG.
const iconCache = new Map();
function icon(name, className) {
  const key = `${name}|${className}`;
  if (iconCache.has(key)) return iconCache.get(key);
  const C = Lucide[name];
  const svg = C ? renderToStaticMarkup(createElement(C, { className, 'aria-hidden': 'true' })) : '';
  iconCache.set(key, svg);
  return svg;
}

const pageHtml = (page) => inspectionHtml(page, { icon, rfqHtml: rfqFallbackForm() });

export function inspectionSectionRoutes() {
  inspectionSectionStats.routes = INSPECTION_PAGES.length;
  return INSPECTION_PAGES.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    canonical: SITE + page.path,
    bodyContent: `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/inspection">Inspection</a><a href="/training">Training</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>
  <main>
${pageHtml(page)}
  </main>`,
    structuredData: inspectionSchema(page),
  }));
}

const REGIONAL_RE = new RegExp(`<nav class="[^"]*" ${INSPECTION_REGIONAL_MARKER}="2026-10"[\\s\\S]*?</nav>`, 'g');

/** Up-link block on regional inspection pages, inserted before </main> (before the related links). */
export function applyInspectionRegionalRoute(route) {
  const p = route?.path;
  if (!p || typeof route.bodyContent !== 'string') return route;
  const b = inspectionRegionalLinksFor(p);
  if (!b) return route;
  const clean = route.bodyContent.replace(REGIONAL_RE, '');
  const html = inspectionRegionalHtml(b);
  const i = clean.lastIndexOf('</main>');
  const body = i >= 0 ? clean.slice(0, i) + html + clean.slice(i) : clean + html;
  inspectionSectionStats.regional++;
  const fam = p.startsWith('/inspection-services-') ? 'state' : p.startsWith('/inspection/third-party') ? 'third-party' : p.startsWith('/inspection/') ? 'inspection' : p.startsWith('/services/') ? 'services' : 'method';
  inspectionSectionStats.regionalByFamily[fam] = (inspectionSectionStats.regionalByFamily[fam] || 0) + 1;
  return { ...route, bodyContent: body };
}

const internalHrefs = (html) => [...String(html).matchAll(/href="([^"]+)"/g)]
  .map((m) => m[1].replace(/&amp;/g, '&'))
  .filter((h) => h.startsWith('/'))
  .map((h) => h.split(/[?#]/)[0] || '/');

const PRICE = /[$£€₹]\s?\d|\b(?:USD|AED|SAR|INR|CAD|GBP|EUR)\s?\d|\b(?:price|prices|pricing|fees?|tuition|discount)\b|\bper (?:day|hour|shift)\b|\bday[- ]rate\b/i;
const FOUNDER_BAD = /(?:founder|Anoop)[^.]{0,120}\b(?:NAS 410 Level|PCN|CWI|API 5\d\d (?:inspector|certified)|ET\b|eddy current)/i;
const TRAINING_OFFER = /\b(?:CSWIP|PCN|API 5\d\d|AMPP|NACE|BGAS|AWS CWI)\b[^.]{0,60}\b(?:training|course|courses|exam prep|preparation)\b/i;
const PROMISES = /\b24[- ]hour turnaround\b|\bteam of Level IIIs\b|\bguarantee/i;

/** Build guard: every page built, links resolve, no prices/claims/training offers, minimum depth. */
export function assertInspectionSectionClean(knownPaths) {
  const problems = [];
  const titles = new Set();
  for (const page of INSPECTION_PAGES) {
    const html = inspectionHtml(page); // without the shared RFQ fallback form, which carries its own copy
    const text = html.replace(/<[^>]+>/g, ' ');
    if (knownPaths && !knownPaths.has(page.path)) problems.push(`${page.path} is not a built route`);
    if (knownPaths) for (const href of internalHrefs(html)) if (!knownPaths.has(href)) problems.push(`${page.path}: link target ${href} is not a built route`);
    if (PRICE.test(text)) problems.push(`${page.path}: price wording "${text.match(PRICE)[0]}"`);
    if (FOUNDER_BAD.test(text)) problems.push(`${page.path}: founder credential beyond ASNT Level III UT/RT/MT/PT/VT`);
    if (TRAINING_OFFER.test(text) && !/does not provide training/.test(text)) problems.push(`${page.path}: reads as a non-ASNT training offer`);
    if (PROMISES.test(text)) problems.push(`${page.path}: unevidenced promise "${text.match(PROMISES)[0]}"`);
    if (inspectionWords(page) < 400) problems.push(`${page.path}: only ${inspectionWords(page)} words`);
    if (page.title.length > 60) problems.push(`${page.path}: title ${page.title.length} chars`);
    if (page.description.length > 158) problems.push(`${page.path}: description ${page.description.length} chars`);
    if (titles.has(page.title)) problems.push(`${page.path}: duplicate title`);
    titles.add(page.title);
    for (const f of page.faqs || []) if (!text.includes(f.q.replace(/&/g, '&amp;').slice(0, 30)) && !text.includes(f.q.slice(0, 30))) problems.push(`${page.path}: FAQ not visible`);
    if (!pageHtml(page).includes('id="rfq"')) problems.push(`${page.path}: quote form anchor missing`);
  }
  // Regional pages: every region link and every up-link target is a built page.
  if (knownPaths) {
    for (const g of INSPECTION_REGIONS.groups) for (const [href] of g.links) if (!knownPaths.has(href)) problems.push(`region ${g.name}: ${href} is not a built route`);
    const targets = new Set();
    for (const p of knownPaths) { const b = inspectionRegionalLinksFor(p); if (b) for (const [href] of b.links) targets.add(href); }
    for (const t of targets) if (!knownPaths.has(t)) problems.push(`regional up-link target ${t} is not a built route`);
  }
  if (problems.length) throw new Error(`inspection-section: ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  console.log(`🔎 Inspection section 2026-10-19: ${INSPECTION_PAGES.length} pages, guard PASS · regional up-links on ${inspectionSectionStats.regional} pages ${JSON.stringify(inspectionSectionStats.regionalByFamily)}`);
}
