/**
 * Visible FAQ on depth pages — 2026-10-18 (consulting workstream; CLAUDE.md §59).
 * ─────────────────────────────────────────────────────────────────────────────
 * Every depth record (src/data/depth-pages.json) carries a `faq` array. Until now it
 * reached FAQPage JSON-LD only (React SEOHead and the crawler's structuredData) and was
 * rendered in neither layer, so 444 built depth pages carried FAQ schema for questions
 * no visitor or crawler could read (§20.8, §58.3). The consulting teardown found it on
 * the three consulting owners (written practice 6/6, outside Level III 6/6, PSM 5/5).
 *
 * One rule, both layers:
 *   - src/components/DepthPage.tsx renders depthFaqFor(page).items under one H2;
 *   - scripts/depth-faq-2026-10-18.mjs inserts the same Q&A into the crawler body
 *     (same place: after the facets, before the contact line) and sets FAQPage to
 *     exactly those items.
 * A page that is not enabled is left as it was (no visible block, schema untouched).
 *
 * ENABLED: the consulting family (this workstream). Other families are owned by other
 * workstreams this release (training, inspection services, software/ERP/DT, standards,
 * salary), and ~90 depth records carry FAQ answers with time promises, prices or other
 * text that must be checked before it becomes visible. To enable another family, add
 * its test to ENABLED after its FAQ text passes HOLD (run the module's report).
 * HOLD (per question): a question whose text matches any pattern is shown nowhere, on
 * the page or in FAQPage, until the text is fixed at source (owner decision 2026-10-18:
 * no time promise except "we reply within one business day"; no live online classes; no
 * prices; no "HQ"). An enabled page whose every question is held carries no FAQPage.
 */

export const DEPTH_FAQ_MARKER = 'data-depth-faq="2026-10-18"';
export const DEPTH_FAQ_HEADING = 'Frequently asked questions';

/** Consulting-owned depth pages outside /consulting/. */
const CONSULTING_DEPTH = new Set([
  '/ndt-written-practice-development',
  '/blog/how-to-write-an-ndt-written-practice',
  '/blog/snt-tc-1a-written-practice-requirements',
  '/blog/outsourced-vs-in-house-ndt-level-3',
]);

export function depthFaqEnabled(path) {
  const p = String(path || '');
  return p.startsWith('/consulting/') || CONSULTING_DEPTH.has(p);
}

const NUM = '(?:\\d+|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|fourteen|sixteen|twenty|thirty|sixty|ninety)';
export const DEPTH_FAQ_HOLD = [
  ['time promise', new RegExp(`\\bwithin\\s+(?:a\\s+|the\\s+)?${NUM}?\\s*(?:business\\s+|working\\s+)?(?:hours?|days?|weeks?|months?)\\b`, 'i')],
  ['time promise', new RegExp(`\\b${NUM}\\s*(?:-|–|to)\\s*${NUM}\\s*(?:business\\s+|working\\s+)?(?:hours?|days?|weeks?|months?)\\b`, 'i')],
  ['time promise', new RegExp(`\\b(?:in|takes?|typically|usually|about|around|roughly|runs?)\\s+(?:about\\s+)?${NUM}\\s+(?:business\\s+|working\\s+)?(?:days|weeks|months)\\b`, 'i')],
  ['time promise', /\b(?:a\s+)?few\s+(?:days|weeks)\b|\bsame[- ](?:day|week)\b|\bnext[- ]day\b|\b24[- ]?(?:hours?|hrs?|h)\b|\b48\s*hours\b|\bweek of\b|\bweeks of\b/i],
  ['live classes', /\blive[- ](?:online|classes?|virtual|sessions?)\b|\binstructor-led online\b|\breplays?\b/i],
  ['HQ', /\bheadquarter|\bHQ\b/i],
  ['price', /[$€£₹]\s?\d|\b(?:USD|INR|AED|SAR|CAD|GBP|EUR)\s?\d/i],
  ['pass rate', /\bpass rates?\b|\b\d{2}\s?%/i],
  ['method count', /\bsix (?:NDT )?methods\b/i],
];

const norm = (q) => String(q || '').toLowerCase().replace(/<[^>]+>/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();

/**
 * The FAQ a depth page shows (and puts in FAQPage), or why it shows none.
 * Per question: a question whose text matches HOLD is shown nowhere (not on the page, not
 * in FAQPage) until it is fixed at source; questions that repeat a facet heading are
 * dropped because the facet already shows them.
 * @returns {{ items: {q: string, a: string}[], held: {q: string, reason: string}[],
 *            facetRepeats: number, reason: null | 'not enabled' | 'no faq' | 'all repeat facets' | string }}
 */
export function depthFaqFor(page) {
  if (!page || !depthFaqEnabled(page.slug)) return { items: [], held: [], facetRepeats: 0, reason: 'not enabled' };
  const faq = Array.isArray(page.faq) ? page.faq : [];
  if (!faq.length) return { items: [], held: [], facetRepeats: 0, reason: 'no faq' };
  const facetQs = new Set((page.facets || []).map((f) => norm(f.q)));
  const seen = new Set();
  const items = [];
  const held = [];
  let facetRepeats = 0;
  for (const f of faq) {
    const t = `${f.q} ${f.a}`;
    const hit = DEPTH_FAQ_HOLD.find(([, re]) => re.test(t));
    if (hit) { held.push({ q: f.q, reason: `${hit[0]} ("${(t.match(hit[1]) || [''])[0]}")` }); continue; }
    const n = norm(f.q);
    if (!n || seen.has(n)) continue;
    if (facetQs.has(n)) { facetRepeats++; continue; }
    seen.add(n);
    items.push(f);
  }
  const reason = items.length ? null : facetRepeats ? 'all repeat facets' : `hold: ${held[0].reason}`;
  return { items, held, facetRepeats, reason };
}

/** Plain text for schema: markdown links reduced to their labels. */
export const faqPlain = (s) => String(s || '').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');

/** FAQPage node for the visible items. */
export function depthFaqSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: faqPlain(f.q),
      acceptedAnswer: { '@type': 'Answer', text: faqPlain(f.a) },
    })),
  };
}
