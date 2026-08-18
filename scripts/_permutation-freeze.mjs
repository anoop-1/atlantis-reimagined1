/**
 * Permutation-generation freeze — 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THIS EXISTS
 *
 * Measured 2026-08-17/18 across GSC and GA4:
 *
 *   section        pages   clicks/month   clicks per page
 *   ERP              727             42            0.06
 *   Digital Twins    110             17            0.15
 *   NDT methods      279             66            0.24
 *   Blog             413            885            2.14
 *
 * A blog-class page returns roughly 35x what an ERP permutation page returns.
 * Across ~5,000 published URLs, 116 pages produce 80% of all clicks and 22
 * produce half. 1,960 pages hold 29,445 impressions and earn zero clicks.
 * Search Console reports 2,446 URLs as not indexed.
 *
 * The combinatorial generators (method x city, module x industry x city, and
 * friends) are no longer converting publishing effort into traffic. Worse, they
 * are spending a crawl budget the unindexed half of the site needs, which is
 * the most likely reason growth fell from +73%/month (Jun->Jul) to +8%
 * (Jul->Aug) while publishing continued.
 *
 * WHAT THIS DOES AND DOES NOT DO
 *
 * It stops NEW permutation pages being generated. It does NOT delete, noindex,
 * redirect or alter a single existing page — those stay exactly as they are,
 * consistent with the standing rule that all work is additive. This is a pause
 * on a tap, not a demolition.
 *
 * Publishing capacity is not being cut; it is being redirected to depth pages,
 * which is where the measured return is.
 *
 * HOW TO OVERRIDE
 *
 * The freeze is deliberately easy to lift and hard to lift BY ACCIDENT:
 *
 *   ALLOW_PERMUTATION_GEN=1 node scripts/gen-erp-pages.mjs
 *
 * If a future audit shows permutation yield has recovered, delete this module's
 * import from the generators rather than setting the variable permanently — a
 * freeze nobody remembers is a freeze that silently stops working.
 */

export function assertPermutationGenAllowed(generatorName) {
  if (process.env.ALLOW_PERMUTATION_GEN === '1') {
    console.warn(
      `⚠️  ${generatorName}: permutation freeze OVERRIDDEN via ALLOW_PERMUTATION_GEN=1.\n` +
      `   Measured yield for these pages was 0.06-0.24 clicks/page/month against 2.14 for depth pages.\n` +
      `   Proceeding because the override was set explicitly.`
    );
    return;
  }

  throw new Error(
    `\n` +
    `╔══════════════════════════════════════════════════════════════════════════╗\n` +
    `║  PERMUTATION GENERATION IS FROZEN (2026-08-18)                            ║\n` +
    `╚══════════════════════════════════════════════════════════════════════════╝\n` +
    `\n` +
    `  ${generatorName} was not run.\n` +
    `\n` +
    `  Reason: combinatorial pages return 0.06-0.24 clicks/page/month on this\n` +
    `  site, against 2.14 for a written depth page. 116 of ~5,000 pages produce\n` +
    `  80% of clicks, and 2,446 URLs are not indexed at all. More permutations\n` +
    `  consume crawl budget the unindexed half needs.\n` +
    `\n` +
    `  No existing page is affected. This only stops new ones being created.\n` +
    `\n` +
    `  Publish a depth page instead — see the 90-day plan's content briefs.\n` +
    `\n` +
    `  To override deliberately:  ALLOW_PERMUTATION_GEN=1 node <script>\n` +
    `  Rationale and measurements: scripts/_permutation-freeze.mjs\n`
  );
}
