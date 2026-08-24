/**
 * Permutation consolidation — 2026-08-20.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE ASK
 * The owner is looking at 2,377 pages reported as not indexed and wants that
 * number down so Google "naturally promotes us".
 *
 * WHY THE OBVIOUS LEVERS ARE WRONG
 * Deleting pages is off the table (improvements are additive here) and would
 * throw away link equity. Adding noindex is what the site already does to 630
 * pages, and noindex is a dead end by design: the page is crawled, costs budget,
 * and passes nothing upward. It removes a URL from the index without giving the
 * hub anything in exchange.
 *
 * WHAT THIS DOES INSTEAD
 * rel=canonical to the parent. A permutation page stays live, stays linked, and
 * still serves anyone who lands on it — but it tells Google "the page you want
 * for this content is the parent". Google then reports it as "Alternate page
 * with proper canonical tag", which is a HEALTHY state rather than a problem
 * state, and — the part that matters — it consolidates the ranking signals of
 * hundreds of thin permutations into the one page that could actually rank.
 *
 * WHICH PAGES, AND THE EVIDENCE GATE
 * Only the ERP module×city and industry×city permutations, and only when all
 * three hold:
 *
 *   1. It is a permutation with an identifiable parent page.
 *   2. It earned ZERO impressions in the last 90 days. A page with real demand
 *      keeps its own canonical however thin it looks — measured demand beats a
 *      structural rule every time.
 *   3. It carries no citation layer, so nothing bespoke is being buried.
 *
 * These are the same 696 pages the T6 layer pass already refused to touch,
 * having failed its doorway audit at 80% similarity: eleven modules across
 * thirty-one cities is 341 pages carrying 42 facts. Consolidation is the honest
 * end of that finding — if the content cannot be made distinct, it should not be
 * competing as though it were.
 *
 * Consolidated pages also leave the sitemap. Submitting a URL that points its
 * canonical elsewhere is a contradictory signal, and the sitemap's job is to
 * list the pages we want indexed.
 */

const SITE = 'https://atlantisndt.com';

/**
 * The three largest invisible families on the site, and where each belongs.
 *
 *   /services/{method}-inspection-{city}      501 pages · 376 invisible (75%)
 *   /industry/{sector}-ndt-{city}             321 pages · 272 invisible (85%)
 *   /inspection/{type}-inspection-services-{city}  200 pages · 150 invisible (75%)
 *
 * 1,022 pages, 798 of them earning nothing. Unlike the ERP families these have
 * no parent inside their own directory — there is no /services/paut-inspection,
 * only a hundred city variants of it. The real hub lives at the root.
 *
 * Every mapping below was verified against the built output; stems whose hub
 * does not exist are deliberately absent rather than pointed somewhere
 * approximate. A canonical aimed at a page that is not genuinely the same
 * content is worse than no canonical — it tells Google we do not understand our
 * own site. The absent ones (mfl-inspection, paut-inspection, manufacturing-ndt,
 * marine-ndt, pipeline-ndt, corrosion-inspection-services,
 * tank-inspection-services) need a hub page written before they can consolidate,
 * which is a content job, not a canonical one.
 */
const STEM_HUBS = {
  '/services/': {
    'acoustic-emission-inspection': '/acoustic-emission-testing',
    'guided-wave-inspection': '/guided-wave-testing',
    'tofd-inspection': '/tofd-testing',
  },
  '/industry/': {
    'aerospace-ndt': '/aerospace-ndt-services',
    'construction-ndt': '/construction-ndt-services',
    'oil-gas-ndt': '/oil-gas-ndt-services',
    'petrochemical-ndt': '/petrochemical-ndt-services',
    'power-generation-ndt': '/power-generation-ndt-services',
  },
  '/inspection/': {
    'pipeline-inspection-services': '/pipeline-inspection-services',
    'weld-inspection-services': '/weld-inspection',
  },
};

/**
 * Cross-directory duplicates. Twenty {module}-for-{industry} slugs exist at BOTH
 * /erp/{slug} and /erp-modules/{slug} — the same page published twice under
 * different parents, competing with itself. The similarity audit surfaced them
 * at 94%, which is what a duplicate looks like.
 *
 * These are not thin pages and neither copy is wrong; the problem is that there
 * are two. So the one with FEWER measured impressions canonicalises to the one
 * with more, which consolidates the signal onto whichever copy Google already
 * prefers rather than onto whichever directory looks tidier. Where impressions
 * tie at zero, /erp-modules wins as the more specific parent.
 *
 * Ties matter here: audit-management-for-pipeline-integrity-services holds 115
 * impressions under /erp-modules and 0 under /erp, while
 * audit-management-for-calibration-laboratories is the other way round at 24
 * versus 4. A blanket rule pointing one directory at the other would have thrown
 * away real demand in half the cases.
 */
export function consolidateCrossDirectoryDuplicates(routes, impressions) {
  const byTail = new Map();
  for (const r of routes) {
    if (!r || !r.path) continue;
    const m = r.path.match(/^\/(erp|erp-modules)\/(.+-for-.+)$/);
    if (!m) continue;
    const [, dir, tail] = m;
    if (!byTail.has(tail)) byTail.set(tail, {});
    byTail.get(tail)[dir] = r;
  }

  const out = { consolidated: 0, pairs: [] };
  for (const [tail, pair] of byTail) {
    if (!pair.erp || !pair['erp-modules']) continue;
    const impErp = impressions.get(`/erp/${tail}`) || 0;
    const impMod = impressions.get(`/erp-modules/${tail}`) || 0;
    // Fewer impressions defers to more. Zero-zero defers to /erp-modules.
    const [loser, winner] = impErp > impMod
      ? [pair['erp-modules'], pair.erp]
      : [pair.erp, pair['erp-modules']];
    if (loser.consolidatedTo) continue;
    loser.canonical = `${SITE}${winner.path}`;
    loser.consolidatedTo = winner.path;
    out.consolidated++;
    if (out.pairs.length < 4) out.pairs.push(`${loser.path} -> ${winner.path} (${Math.max(impErp, impMod)}i)`);
  }
  return out;
}

export function consolidatePermutations(routes, { moduleKeys, industryKeys, invisible }) {
  const mk = [...moduleKeys].sort((a, b) => b.length - a.length);
  const ik = [...industryKeys].sort((a, b) => b.length - a.length);
  const out = { consolidated: 0, keptForDemand: 0, keptForLayer: 0, missingHub: 0, byFamily: {} };

  // A hub only counts if it is actually a route in this build. A canonical
  // pointing at a URL we do not ship is a 404 signal, which is strictly worse
  // than the thin page it was meant to fix.
  const built = new Set(routes.filter((r) => r && r.path).map((r) => r.path));

  for (const r of routes) {
    if (!r || !r.path || !r.bodyContent) continue;

    let parent = null;
    let family = null;
    if (r.path.startsWith('/erp-modules/')) {
      const rest = r.path.replace('/erp-modules/', '');
      const k = mk.find((m) => rest.startsWith(m + '-'));
      if (k) { parent = `/erp-modules/${k}`; family = 'erp-modules'; }
    } else if (r.path.startsWith('/erp-industries/')) {
      const rest = r.path.replace('/erp-industries/', '');
      const k = ik.find((m) => rest.startsWith(m + '-'));
      if (k) { parent = `/erp-industries/${k}`; family = 'erp-industries'; }
    } else {
      for (const [prefix, stems] of Object.entries(STEM_HUBS)) {
        if (!r.path.startsWith(prefix)) continue;
        const rest = r.path.slice(prefix.length);
        const stem = Object.keys(stems).sort((a, b) => b.length - a.length).find((s) => rest.startsWith(s + '-'));
        if (stem) { parent = stems[stem]; family = prefix.replace(/\//g, ''); }
        break;
      }
    }
    if (!parent || parent === r.path) continue;
    if (!built.has(parent)) { out.missingHub++; continue; }

    // Gate 2: measured demand wins over any structural rule.
    if (!invisible.has(r.path)) { out.keptForDemand++; continue; }
    // Gate 3: never bury a page carrying bespoke citation content.
    if (r.bodyContent.includes('data-citation-block="answer"')) { out.keptForLayer++; continue; }

    r.canonical = `${SITE}${parent}`;
    r.consolidatedTo = parent;
    out.consolidated++;
    out.byFamily[family] = (out.byFamily[family] || 0) + 1;
  }
  return out;
}
