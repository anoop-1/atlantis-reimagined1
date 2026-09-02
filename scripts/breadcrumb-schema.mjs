/**
 * BreadcrumbList schema for pages that ship without one. 2026-09-02.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY BREADCRUMBS AND NOT FAQ SCHEMA
 *
 * The obvious move on a CTR problem is to add FAQPage markup everywhere. The
 * site's own data says not to. Measured coverage against measured CTR:
 *
 *   Blog        89% of pages carry FAQPage    CTR 1.31% at pos 3-6  (worst)
 *   Training    35%                           CTR 6.12% at pos 3-6  (best)
 *   Glossary     6%                           CTR 1.01%
 *
 * The segment with the most FAQ markup has the worst click-through. That is
 * consistent with Google having withdrawn FAQ rich results from general sites in
 * 2023 — the markup is valid, it simply no longer draws anything in the SERP.
 * Adding it to another 4,000 pages would be work with a measured null return.
 *
 * Breadcrumb rich results were NOT withdrawn. They still replace the raw URL in
 * the result with a readable hierarchy, which is a genuine change to what the
 * searcher sees. Coverage is worst in the segments whose CTR is worst:
 *
 *   Glossary      0% breadcrumb   219 pages   11,259 impressions
 *   Compliance    0%              474 pages    4,783
 *   Consulting   15%              794 pages    2,633
 *   Training     38%              569 pages    2,494
 *   Standards    35%               66 pages      843
 *
 * SAFETY
 * The pass runs on the FINAL rendered HTML and only when the string
 * "BreadcrumbList" is absent, so it cannot produce a second, competing
 * breadcrumb on a page that already has one however that one was produced —
 * route structured data, the base template graph, or a family generator.
 * Noindexed pages are skipped: schema on a page Google is told to ignore is
 * pure payload.
 *
 * An intermediate crumb is emitted only when that parent path is a real built
 * page. A breadcrumb pointing at a 404 is worse than no breadcrumb, and several
 * URL families here are flat — /corrosion-mapping has no /corrosion parent.
 */

const SITE = 'https://atlantisndt.com';

/**
 * Tokens that must stay upper case. Title-casing "fpso" to "Fpso" in a SERP
 * breadcrumb looks like a broken site, and most of this glossary is acronyms.
 */
const ACRONYMS = new Set([
  'ndt', 'ut', 'rt', 'mt', 'pt', 'vt', 'et', 'ae', 'lt', 'ir',
  'paut', 'tofd', 'mfl', 'eca', 'acfm', 'dr', 'cr', 'rtr', 'tfm',
  'api', 'asme', 'aws', 'iso', 'asnt', 'pcn', 'cswip', 'nace', 'ampp', 'astm',
  'erp', 'crm', 'lms', 'ai', 'iot', 'roi', 'saas', 'cad', 'bim', 'gis',
  'cui', 'hic', 'sohic', 'scc', 'ssc', 'hb', 'fbh', 'sdh', 'dac', 'tcg', 'dgs',
  'fpso', 'lng', 'lpg', 'ccs', 'ffs', 'rbi', 'mawp', 'map', 'cml', 'tml',
  'rso', 'hvl', 'iqi', 'nde', 'qa', 'qc', 'hse', 'sme', 'epc',
  'usa', 'us', 'uk', 'uae', 'ksa', 'eu',
]);

/** Small words that stay lower case unless they lead the label. */
const MINOR = new Set(['a', 'an', 'and', 'as', 'at', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to', 'vs', 'with']);

export function prettify(slug) {
  const words = String(slug || '').split('-').filter(Boolean);
  return words
    .map((w, i) => {
      const lower = w.toLowerCase();
      if (ACRONYMS.has(lower)) return lower.toUpperCase();
      if (i > 0 && MINOR.has(lower)) return lower;
      if (/^\d+$/.test(w)) return w;
      return lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join(' ');
}

/**
 * Build the BreadcrumbList for a path.
 *
 * @param path       route path, e.g. /glossary/fpso
 * @param pageName   preferred label for the final crumb (usually the h1)
 * @param exists     predicate: does this path exist as a built page?
 */
export function buildBreadcrumb(path, pageName, exists) {
  if (!path || path === '/') return null;
  const segments = path.replace(/^\/|\/$/g, '').split('/').filter(Boolean);
  if (!segments.length) return null;

  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: SITE }];
  let acc = '';
  segments.forEach((seg, idx) => {
    acc += `/${seg}`;
    const isLast = idx === segments.length - 1;
    // Intermediate crumbs must resolve. A crumb pointing at a 404 is worse
    // than a shorter trail.
    if (!isLast && !exists(acc)) return;
    items.push({
      '@type': 'ListItem',
      position: items.length + 1,
      name: isLast ? (pageName || prettify(seg)) : prettify(seg),
      item: `${SITE}${acc}`,
    });
  });

  // Home plus one leaf is still a valid and useful trail; fewer is not.
  if (items.length < 2) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${SITE}${path}#breadcrumb`,
    itemListElement: items,
  };
}

/**
 * Insert the breadcrumb into finished HTML, if and only if it has none.
 * Returns the html unchanged when a breadcrumb already exists or the page is
 * noindexed.
 */
export function addBreadcrumbIfMissing(html, path, exists) {
  if (!html || html.includes('BreadcrumbList')) return html;
  if (/name=["']robots["'][^>]*noindex/i.test(html)) return html;

  // Prefer the page's own h1 for the leaf crumb — it is the human name for the
  // page, where the slug is a machine one.
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1];
  const leaf = h1
    ? h1.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim().slice(0, 80)
    : null;

  const crumb = buildBreadcrumb(path, leaf, exists);
  if (!crumb) return html;

  const tag = `  <script type="application/ld+json">${JSON.stringify(crumb)}</script>`;
  return html.replace('</head>', `${tag}\n</head>`);
}
