/**
 * CTR wave 6 — 2026-08-17. De-cannibalisation only.
 * ─────────────────────────────────────────────────────────────────────────────
 * This wave does NOT chase click-through. The 2026-08-17 diagnostic established
 * that the site's CTR is suppressed 4-6x at *every* position band (5.68% at
 * pos 1-3 where ~20% is normal; 1.43% at pos 6-8 where ~3.5% is normal). A
 * uniform depression across the whole curve is not a snippet defect, and the
 * live HTML on the worst bleeder already serves its rewritten wave-4 title.
 * Rewriting snippets a sixth time buys nothing.
 *
 * What IS still fixable is a cluster where three of our own pages compete for
 * the same queries. Google has no basis to prefer any of them, so it ranks all
 * three badly and splits the impressions. That is a ranking problem a title can
 * genuinely fix, and wave 5 set the precedent.
 *
 * ── Cluster: NDT software (2026-06-15..08-14) ────────────────────────────────
 *   /best-ndt-reporting-software-2026     248i p12.7  3c  ("ndt reporting software" 177i p8.7)
 *   /blog/ndt-inspection-software-2026-…  139i p19.6  0c  ("ndt inspection software" 123i p17.9)
 *   /ndt-reporting-software-comparison    134i p64.6  0c  ("ndt software" 109i p67.4)
 *
 * All three verified live and serving 200 before rewriting. The first two each
 * already have a term they rank best for; the titles just do not say so. The
 * third also carries "ndt reporting software" from p39.9, which it cannot win
 * and which holds the first page back — it is given a different job instead.
 *
 * ── An API 653 cluster was investigated and deliberately NOT included ─────────
 * GSC shows three pages splitting "api 653", "api 653 certification" and
 * "api 653 requirements":
 *
 *   /blog/api-653-tank-inspection-guide     2,935i p19.1  8c
 *   /api-653-certification                  1,535i p37.9  5c
 *   /blog/api-653-certification-complete-…  1,016i p18.4  1c
 *
 * Checking the live URLs before writing overrides showed the collision is
 * already resolved and the data is stale:
 *
 *   - `/blog/api-653-certification-complete-guide` **301s to
 *     `/api-653-certification`** and generates no HTML. Its 1,016 impressions
 *     are Google still reporting a redirected URL, which decays on its own. An
 *     override here would have been dead code pointing at a page that no longer
 *     exists.
 *   - `/api-653-certification` already serves "API 653 Certification — Do You
 *     Qualify, and What the Exam Really Asks", which claims the credential
 *     intent cleanly, while the tank-inspection guide claims the inspection-work
 *     intent under its wave-4 title. The two are already differentiated.
 *
 * So there is nothing left to de-cannibalise there, and rewriting a page that is
 * already correctly positioned would be churn. Leaving winners alone is part of
 * the fix. Recorded here so the next pass does not re-derive it from the same
 * stale GSC rows.
 *
 * Honest expectation: this wave is worth tens of clicks a month, not hundreds.
 * The growth problem is page-yield saturation, not metadata. Recorded so nobody
 * later reads this wave as an attempt at the click target.
 *
 * CONSTRAINTS OBSERVED
 *   - No Atlantis price anywhere (CLAUDE.md §18), asserted below.
 *   - Copy stays informational and never implies Atlantis certifies anyone.
 */

export const CTR_WAVE6_OVERRIDES = {
  // Best position in the cluster on "ndt reporting software" (p8.7). Says so.
  '/best-ndt-reporting-software-2026': {
    title: 'NDT Reporting Software — What to Look For, and How the Main Options Compare',
    description:
      'Reporting is where inspection work turns into a deliverable a client will accept. How the available platforms handle offline capture, multi-method templates, ASNT and ISO formatting, review and sign-off, and what usually goes wrong when a team outgrows spreadsheets.',
  },

  // Ranks best on "ndt inspection software" (p17.9), a broader management
  // intent than reporting. Claims that and stops competing on reporting.
  '/blog/ndt-inspection-software-2026-best-platforms-compared': {
    title: 'NDT Inspection Management Software — Platforms Compared by What They Actually Handle',
    description:
      'Beyond report generation: scheduling and crew assignment, equipment calibration tracking, technician certification expiry, asset history, and client portals — which platforms cover which, and where the gaps usually appear in a real inspection programme.',
  },

  // p64.6 on "ndt software" and p39.9 on "ndt reporting software" — it cannot
  // win either, and while it carries the reporting term it holds the page above
  // back. Repositioned to the evaluation question instead, which nothing else on
  // the site claims. A title change will not move p64.6 on its own; this exists
  // to stop the collision, not to rank the page.
  '/ndt-reporting-software-comparison': {
    title: 'How to Evaluate NDT Software — The Questions to Ask Before You Commit',
    description:
      'A buyer-side checklist for inspection software: what to test during a trial, which integrations matter, how to judge offline reliability in the field, what migration of historic reports really involves, and the contract terms worth settling before rollout.',
  },
};

export function assertNoPricesInWave6() {
  const offenders = [];
  for (const [path, o] of Object.entries(CTR_WAVE6_OVERRIDES)) {
    for (const field of ['title', 'description']) {
      if (/[$£€₹]\s?\d|\b\d+\s?(?:USD|EUR|GBP|SAR|AED|INR)\b|per day|\/day|per hour|\/hour/i.test(o[field] || '')) {
        offenders.push(`${path} → ${field}`);
      }
    }
  }
  if (offenders.length) {
    throw new Error(`CTR wave 6 contains pricing, which CLAUDE.md §18 forbids:\n  ${offenders.join('\n  ')}`);
  }
}

/**
 * The whole point of the wave: no two pages in the cluster may claim the same
 * head term in their title. If a later edit reintroduces a collision, the build
 * fails rather than shipping a split signal again.
 */
export function assertNoTitleCollisions() {
  const CLUSTERS = {
    'NDT software': [
      '/best-ndt-reporting-software-2026',
      '/blog/ndt-inspection-software-2026-best-platforms-compared',
      '/ndt-reporting-software-comparison',
    ],
  };
  const collisions = [];
  for (const [cluster, paths] of Object.entries(CLUSTERS)) {
    const seen = new Map();
    for (const p of paths) {
      const title = (CTR_WAVE6_OVERRIDES[p]?.title || '').toLowerCase();
      // The leading phrase before the first dash is the claim the title makes.
      const claim = title.split(/[—–-]/)[0].trim();
      if (!claim) continue;
      if (seen.has(claim)) collisions.push(`${cluster}: "${claim}" claimed by both ${seen.get(claim)} and ${p}`);
      seen.set(claim, p);
    }
  }
  if (collisions.length) {
    throw new Error(`CTR wave 6 reintroduced a title collision:\n  ${collisions.join('\n  ')}`);
  }
}
