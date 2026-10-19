// Inspection section (2026-10-18): crawler routes + build guard.
// Copy lives in src/data/inspection-section/*.mjs and is shared with the React page
// (src/pages/InspectionSection.tsx), so both layers render the same text.
import {
  INSPECTION_PAGES, SITE, inspectionHtml, inspectionSchema, inspectionWords,
} from '../src/data/inspection-section/index.mjs';

export const inspectionSectionStats = { routes: 0 };

export function inspectionSectionRoutes() {
  inspectionSectionStats.routes = INSPECTION_PAGES.length;
  return INSPECTION_PAGES.map((page) => ({
    path: page.path,
    title: page.title,
    description: page.description,
    canonical: SITE + page.path,
    bodyContent: `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/inspection">Inspection</a><a href="/training">Training</a><a href="/consulting">Consulting</a><a href="/contact">Contact</a></nav></header>
  <main>
${inspectionHtml(page)}
  </main>`,
    structuredData: inspectionSchema(page),
  }));
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
    const html = inspectionHtml(page);
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
  }
  if (problems.length) throw new Error(`inspection-section: ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
  console.log(`🔎 Inspection section 2026-10-18: ${INSPECTION_PAGES.length} pages, guard PASS`);
}
