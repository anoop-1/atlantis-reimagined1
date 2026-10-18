/**
 * Inspection release 2026-10-18 — crawler-HTML side.
 * ─────────────────────────────────────────────────────────────────────────────
 * Copy: src/data/inspection-release-2026-10-18.json · renderer: src/data/inspection-release-2026-10-18.mjs.
 * Every page it adds sections to is in publishedPaths (src/lib/published-pages.ts), so visitors
 * see the same <main> after hydration; schema-only entries change the built <head> only.
 *
 *   inspectionRewriteBody(path)   full body for the power and maritime owners; read by the
 *                                 industryServicePages template in prerender.mjs.
 *   applyInspectionReleaseRoute   route loop, after applyRankWave14Route: sourced sections
 *                                 (after the direct answer, after the intro, or before a named
 *                                 heading), the visible FAQ before the related-links block, and
 *                                 FAQPage + Service JSON-LD from the same Q&A.
 *   assertInspectionReleaseClean  fails the build on a price, a time promise other than "we reply
 *                                 within one business day", a method Atlantis does not offer, an
 *                                 accreditation or team claim, a founder-credential slip, an
 *                                 unbuilt link target or an external host outside the source list.
 */
import { readFileSync } from 'fs';
import { INSP18_MARKER, sectionsHtml, faqHtml, rewriteBodyHtml, faqItems, serviceNode, allCopy, plainText, linksIn } from '../src/data/inspection-release-2026-10-18.mjs';
import { insertAfterIntro, endOfElement } from '../src/data/rank-wave14-2026-10.mjs';

export const INSP18 = JSON.parse(readFileSync(new URL('../src/data/inspection-release-2026-10-18.json', import.meta.url), 'utf-8'));
export const insp18Stats = { sections: 0, faqs: 0, schemaPages: 0, rewrites: 0 };
const SITE = 'https://atlantisndt.com';

export function inspectionRewriteBody(path) {
  const html = rewriteBodyHtml(INSP18, path);
  if (html) insp18Stats.rewrites++;
  return html;
}

function insertBefore(body, at, html) { return body.slice(0, at) + html + '\n' + body.slice(at); }
function endIndex(body) {
  const nav = body.search(/<nav\b[^>]*data-keyword-links/);
  if (nav >= 0) return nav;
  const m = body.lastIndexOf('</main>');
  return m >= 0 ? m : body.length;
}

function placeSections(body, place, html) {
  if (place === 'afterAnswer') {
    const a = body.indexOf('<section data-rank14="answer"');
    const end = a >= 0 ? endOfElement(body, a) : -1;
    if (end > 0) return body.slice(0, end) + '\n' + html + body.slice(end);
    return insertAfterIntro(body, html);
  }
  if (place && typeof place === 'object' && place.before) {
    const main = Math.max(0, body.search(/<main[\s>]/i));
    const i = body.indexOf(place.before, main);
    if (i >= 0) return insertBefore(body, i, html);
    return insertBefore(body, endIndex(body), html);
  }
  return insertAfterIntro(body, html);
}

const nodesOf = (sd) => (!sd ? [] : Array.isArray(sd) ? sd : Array.isArray(sd['@graph']) ? sd['@graph'] : [sd]);
function addNode(sd, node) {
  if (!sd) return { '@context': 'https://schema.org', '@graph': [node] };
  if (Array.isArray(sd)) return [...sd, { '@context': 'https://schema.org', ...node }];
  if (Array.isArray(sd['@graph'])) return { ...sd, '@graph': [...sd['@graph'], node] };
  const { '@context': _c, ...rest } = sd;
  return { '@context': 'https://schema.org', '@graph': [rest, node] };
}
const isType = (n, t) => n && (n['@type'] === t || (Array.isArray(n['@type']) && n['@type'].includes(t)));
const question = (f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: plainText(f.a) } });

/** Merge our visible Q&A into the page's FAQPage (one FAQPage per page) and add the Service node. */
function withSchema(route, path) {
  let sd = route.structuredData;
  const items = faqItems(INSP18, path);
  if (items.length) {
    const nodes = nodesOf(sd);
    const faq = nodes.find((n) => isType(n, 'FAQPage'));
    if (faq) {
      const have = new Set([].concat(faq.mainEntity || []).map((q) => q && q.name));
      faq.mainEntity = [...[].concat(faq.mainEntity || []), ...items.filter((f) => !have.has(f.q)).map(question)];
    } else {
      sd = addNode(sd, { '@type': 'FAQPage', '@id': `${SITE}${path}#faq`, mainEntity: items.map(question) });
    }
  }
  const svc = serviceNode(INSP18, path, SITE);
  if (svc && !nodesOf(sd).some((n) => n && n['@id'] === svc['@id'])) sd = addNode(sd, svc);
  return sd;
}

export function applyInspectionReleaseRoute(route) {
  const p = route && route.path;
  if (!p || typeof route.bodyContent !== 'string') return route;
  const page = INSP18.pages[p];
  const rewrite = INSP18.rewrites[p];
  if (!page && !rewrite) return route;
  let body = route.bodyContent;
  if (page && page.sections.length && !body.includes(`${INSP18_MARKER}="section"`)) {
    body = placeSections(body, page.place, sectionsHtml(INSP18, p));
    insp18Stats.sections++;
    if (page.faq) { body = insertBefore(body, endIndex(body), faqHtml(page.faq)); insp18Stats.faqs++; }
  }
  if (rewrite && !body.includes(`${INSP18_MARKER}="intro"`)) return route; // template did not take the rewrite body
  insp18Stats.schemaPages++;
  return { ...route, bodyContent: body, structuredData: withSchema({ ...route, structuredData: route.structuredData && JSON.parse(JSON.stringify(route.structuredData)) }, p) };
}

/* ── guard ──────────────────────────────────────────────────────────────── */
const PRICE = /[$£€₹]\s?\d|\b(?:USD|INR|AED|SAR|CAD|GBP|EUR)\s?\d|\bper (?:day|hour)\b|\bday[- ]rate\b|\bstarting at\b/i;
const TIME = /\bwithin (?!one business day)[\w-]+ (?:hours?|days?|business days?|weeks?)\b|\b24\s?-?\s?h(?:ours?|rs?)?\b|\bsame[- ]day\b|\bnext[- ]day\b|\bturnaround\b/i;
const METHOD_ABBR = /\b(?:ET|ECT|ECA|AET|IRT|ACFM|TFM|FMC|GWT|LRUT|EMAT|MFL)\b/;
const METHOD_WORDS = /eddy current|acoustic emission|thermograph|guided wave|full matrix capture/i;
const CLAIMS = /#1\b|\b(?:world-class|industry-leading|leading provider|guaranteed|accredited|accreditation|Nadcap|AS9100|ISO\/IEC 170(?:20|25)|ISO 170(?:20|25)|cohorts?|Level III (?:engineers|experts|team)|team of)\b/i;
const EXTERNAL = /^https:\/\/(?:www\.)?(?:ecfr\.gov|law\.cornell\.edu|msha\.gov|nationalboard\.org|irclass\.org|otrwheel\.com)\//;

export function assertInspectionReleaseClean(knownPaths) {
  const errs = [];
  for (const p of [...Object.keys(INSP18.pages), ...Object.keys(INSP18.rewrites)]) if (knownPaths && !knownPaths.has(p)) errs.push(`page not built: ${p}`);
  for (const t of allCopy(INSP18)) {
    const v = plainText(t);
    if (PRICE.test(v)) errs.push(`price pattern: ${v.slice(0, 90)}`);
    if (TIME.test(v)) errs.push(`time promise: ${v.slice(0, 90)}`);
    if (METHOD_ABBR.test(v) || METHOD_WORDS.test(v)) errs.push(`method not offered: ${v.slice(0, 90)}`);
    if (CLAIMS.test(v)) errs.push(`claim word: ${v.slice(0, 90)}`);
    if (/Rayavarapu|\bfounder\b/.test(v) && !/Level III in UT, RT, MT, PT and VT/.test(v)) errs.push(`founder named without the exact credential: ${v.slice(0, 90)}`);
    if (/six methods|1[2-9]\+ years|NAS 410 Level (?:3|III)/i.test(v)) errs.push(`founder credential slip: ${v.slice(0, 90)}`);
    for (const l of linksIn(t)) {
      if (/^https?:/.test(l.href)) { if (!EXTERNAL.test(l.href)) errs.push(`external host not in the source list: ${l.href}`); continue; }
      const target = l.href.split(/[?#]/)[0].replace(/\/$/, '') || '/';
      if (knownPaths && !knownPaths.has(target)) errs.push(`link target not built: ${l.href} (in "${l.text}")`);
    }
  }
  for (const p of [...Object.keys(INSP18.pages), ...Object.keys(INSP18.rewrites)]) {
    for (const f of faqItems(INSP18, p)) {
      if (!/\?$/.test(f.q)) errs.push(`${p}: FAQ question must end with "?": ${f.q}`);
      const n = plainText(f.a).length;
      if (n < 60 || n > 1800) errs.push(`${p}: FAQ answer length ${n} (60-1800): ${f.q}`);
    }
  }
  if (errs.length) throw new Error(`inspection-release-2026-10-18:\n  ${[...new Set(errs)].join('\n  ')}`);
  return true;
}
