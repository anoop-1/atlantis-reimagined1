/**
 * Training conversion, crawler layer (owner, 2026-10-18).
 *
 *   trainingConversionRoutes()       /ndt-training-faq and /snt-tc-1a-eligibility
 *   applyTrainingCtaBar(route)       three-button bar (Check your eligibility · Training FAQs ·
 *                                    Register & Buy Now) after the H1 intro on every training
 *                                    city/regional page (showsTrainingCtaBar). Runs last in the
 *                                    route loop, so it lands after any top-of-page direct answer.
 *   assertTrainingConversionClean()  both pages built; every bar target built (or the portal);
 *                                    no prices, no customer names, NAS 410 through the associate
 *
 * Model, copy and HTML renderers: src/data/training-conversion-2026-10.{json,mjs} — the same
 * files the React layer reads (TrainingCtaBar.tsx, NdtTrainingFaq.tsx, SntTc1aEligibility.tsx).
 */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  TRAINING_FAQ_PATH, ELIGIBILITY_PATH, PORTAL, CTA_BAR_MARKER, showsTrainingCtaBar, ctaBarHtml,
  faqPageHtml, faqPageSchema, faqItems, eligibilityPageHtml, eligibilitySchema, eligibilityCheck,
} from '../src/data/training-conversion-2026-10.mjs';
import { RANK14_MARKER, endOfElement } from '../src/data/rank-wave14-2026-10.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const CONVERSION = JSON.parse(readFileSync(join(ROOT, 'src/data/training-conversion-2026-10.json'), 'utf-8'));
const HOURS = JSON.parse(readFileSync(join(ROOT, 'src/data/snt-tc-1a-hours.json'), 'utf-8'));

export const trainingConversionStats = { pages: 0, bars: 0 };

const NAV = '<header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a><a href="/ndt-practice-tests">Practice tests</a><a href="/contact?service=training">Contact</a></nav></header>';

export function trainingConversionRoutes() {
  const f = CONVERSION.faq;
  const g = CONVERSION.eligibility;
  trainingConversionStats.pages = 2;
  return [
    {
      path: f.path,
      title: f.title,
      description: f.description,
      canonical: `https://atlantisndt.com${f.path}`,
      bodyContent: `  ${NAV}\n  <main>\n${faqPageHtml(CONVERSION)}\n  </main>`,
      structuredData: faqPageSchema(CONVERSION),
    },
    {
      path: g.path,
      title: g.title,
      description: g.description,
      canonical: `https://atlantisndt.com${g.path}`,
      bodyContent: `  ${NAV}\n  <main>\n${eligibilityPageHtml(CONVERSION, HOURS)}\n  </main>`,
      structuredData: eligibilitySchema(CONVERSION),
    },
  ];
}

const BAR_RE = new RegExp(`<div ${CTA_BAR_MARKER}="2026-10"[^>]*>[\\s\\S]*?</div></div>`, 'g');

/** Index just after the H1's intro: the first <p>, or a top-of-page direct answer and the <p> after it. */
function afterIntro(body) {
  const h = body.indexOf('</h1>');
  if (h < 0) return -1;
  let i = h + 5;
  const ws = () => { const m = body.slice(i).match(/^\s*/); i += m ? m[0].length : 0; };
  ws();
  if (body.startsWith('</header>', i)) { i += 9; ws(); }
  // A rank-wave direct answer (or a snippet paragraph) sits directly under the H1: keep it there.
  if (/^<(?:section|div|aside)\b[^>]*\b(?:data-rank14|class="snippet")/i.test(body.slice(i, i + 300)) || body.slice(i, i + 300).includes(`${RANK14_MARKER}="answer"`)) {
    const end = endOfElement(body, i);
    if (end > 0) { i = end; ws(); }
  }
  if (/^<p[\s>]/i.test(body.slice(i))) {
    const end = body.indexOf('</p>', i);
    if (end > 0 && end - i < 3000) return end + 4;
  }
  return h + 5;
}

export function applyTrainingCtaBar(route) {
  if (!route || typeof route.bodyContent !== 'string' || !showsTrainingCtaBar(route.path)) return route;
  let body = route.bodyContent.replace(BAR_RE, '');
  const at = afterIntro(body);
  const html = ctaBarHtml(CONVERSION, route.path);
  if (at < 0) {
    const m = body.search(/<main[^>]*>/i);
    if (m < 0) return route;
    const end = body.indexOf('>', m) + 1;
    body = body.slice(0, end) + html + body.slice(end);
  } else {
    body = body.slice(0, at) + '\n' + html + body.slice(at);
  }
  trainingConversionStats.bars++;
  return { ...route, bodyContent: body };
}

/* ── guard ─────────────────────────────────────────────────────────────────── */
const PRICE = /[$£€₹]\s?\d|\b(?:USD|AED|SAR|INR|CAD|GBP|EUR)\s?\d|\bper (?:day|hour|seat|student|person)\b|\bday[- ]rate\b/i;
// Customer and prospect names from the owner's email FAQ must never reach the site.
const NAMES = /\b(?:Schroeder|Sosa|SLC|Midwest Cryogenics|GovCrest|Gonzales|Gabriel|Nick|Pedro|Jefferson|Mercury)\b/;
const NAS410_PRINCIPAL = /\b(?:principal|founder|Anoop)[^.]{0,60}\bNAS\s*410\b[^.]{0,20}\bLevel\s*(?:III|3)\b/i;

export function assertTrainingConversionClean(knownPaths) {
  const known = knownPaths instanceof Set ? knownPaths : new Set(knownPaths);
  const problems = [];
  for (const p of [TRAINING_FAQ_PATH, ELIGIBILITY_PATH]) if (!known.has(p)) problems.push(`${p} is not built`);
  for (const b of CONVERSION.bar.buttons) {
    if (/^https?:/.test(b.href)) { if (b.href !== PORTAL) problems.push(`bar button ${b.variant} goes off-site to ${b.href}`); }
    else if (!known.has(b.href.split(/[?#]/)[0])) problems.push(`bar button ${b.variant} → ${b.href} is not built`);
  }
  if (CONVERSION.buyNow.href !== PORTAL) problems.push('buyNow.href must be the portal');
  const text = JSON.stringify(CONVERSION);
  if (PRICE.test(text)) problems.push(`price wording in training-conversion-2026-10.json: ${text.match(PRICE)[0]}`);
  if (NAMES.test(text)) problems.push(`customer/prospect name in training-conversion-2026-10.json: ${text.match(NAMES)[0]}`);
  if (NAS410_PRINCIPAL.test(text)) problems.push('NAS 410 Level 3 attributed to the founder; it is through an associate (CLAUDE.md §51.2)');
  if (faqItems(CONVERSION).length < 20) problems.push('Training FAQ lost questions');
  // 2026-10-18: the global /training hub links only built country pages (src/data/training-countries-2026-10.json).
  const countries = JSON.parse(readFileSync(join(ROOT, 'src/data/training-countries-2026-10.json'), 'utf-8'));
  for (const g of countries.groups) for (const [href] of g.links) if (!known.has(href)) problems.push(`country page ${href} is not built`);
  const probe = eligibilityCheck(HOURS, { method: 'UT', level: 'II', training: 80, experience: 840, vision: true });
  if (!probe || !probe.ready) problems.push('eligibility checker: UT Level II with 80 h / 840 h / vision should be ready');
  const short = eligibilityCheck(HOURS, { method: 'MT', level: 'I', training: 0, experience: 0, vision: false });
  if (!short || short.missing.length !== 3) problems.push('eligibility checker: an empty MT Level I should list three missing items');
  if (problems.length) throw new Error(`Training conversion guard failed:\n  - ${problems.join('\n  - ')}`);
  return true;
}
