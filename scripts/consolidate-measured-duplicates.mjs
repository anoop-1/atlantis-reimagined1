/**
 * Measured duplicate consolidation - 2026-09-02.
 * ---------------------------------------------------------------------------
 * Two duplicate classes surfaced in the 90-day GSC pull that the existing
 * consolidation passes do not cover. Both are self-inflicted, both strand real
 * impressions, and both resolve with the rule this repo already uses elsewhere:
 * the copy with FEWER measured impressions canonicalises to the copy with more,
 * so the signal lands on whichever page Google has already chosen.
 *
 * Nothing is deleted. Every page stays live, stays linked and stays crawlable.
 * The canonical only tells Google which of two near-identical pages to rank.
 *
 * CLASS 1 - GLOSSARY vs COMPLETE GUIDE
 * 203 glossary pages rank; 58 of them sit past position 25 holding 6,872
 * impressions and returning 8 clicks. They lose to our own long-form guides on
 * the identical term:
 *
 *   /glossary/ultrasonic-testing        777 imp  pos 64   0 clicks
 *   /blog/ultrasonic-testing-ultimate-guide  3,433 imp  pos  9
 *
 *   /glossary/radiographic-testing      315 imp  pos 61
 *   /blog/radiographic-testing-complete-guide  7,252 imp pos 10
 *
 * Google picked the guide in every one of these pairs. The glossary entry is
 * not a different intent from a guide that opens by defining the same term -
 * it is a second, weaker answer to the same question, and holding both split
 * the topical signal.
 *
 * CLASS 2 - THE SAME CITY UNDER TWO SLUGS
 * 66 city clusters carry byte-identical research prose under two slugs, a
 * state-suffixed one and a bare one: phoenix-arizona and phoenix, richmond-ca
 * and richmond-california, wichita-kansas and wichita.
 *
 * MEASURED 2026-09-02: this produces ZERO duplicate live URLs. Every generator
 * already resolves one slug per city, so phoenix ships 27 pages while
 * phoenix-arizona ships 1, and no two live paths differ only by the slug
 * variant. The cost is wasted research slots in the store, not cannibalisation
 * on the site - so this pass currently consolidates nothing, by design.
 *
 * It is kept as a standing guard. The day a generator does emit both variants
 * the twins get consolidated on the same measured rule instead of quietly
 * competing, which is the failure mode that took a quarter to spot in the
 * glossary family above.
 *
 * Distinct cities that merely share a NAME (springfield-illinois vs
 * springfield-ohio, both real and separately researched) are NOT touched: the
 * match is on identical profile TEXT, not on the display name. That distinction
 * is the whole reason this pass keys off the research prose.
 */

const SITE = 'https://atlantisndt.com';

/** Tokens that carry no topical signal in a URL slug. */
const STOP = new Set(
  'ndt inspection the and for with a of to in guide 2026 2025 services service testing test'.split(' ')
);

function slugTokens(path) {
  const tail = path.replace(/^\/|\/$/g, '').split('/').pop() || '';
  return new Set(tail.split('-').filter((t) => t.length > 2 && !STOP.has(t)));
}

function jaccard(a, b) {
  const inter = [...a].filter((x) => b.has(x)).length;
  const union = a.size + b.size - inter;
  return union ? inter / union : 0;
}

/**
 * A self-canonical is what the safety net stamps on every route by default, so
 * it carries no decision and this pass may overwrite it. A canonical pointing
 * somewhere ELSE was set deliberately by an earlier consolidation pass and is
 * left alone.
 */
function hasDeliberateCanonical(r) {
  if (r.consolidatedTo) return true;
  if (!r.canonical) return false;
  return r.canonical !== `${SITE}${r.path}`;
}

/**
 * Class 1. Point a trailing glossary entry at the guide that already outranks it.
 *
 * @param routes       prerender route list, mutated in place
 * @param impressions  Map path -> impressions over the measurement window
 * @param positions    Map path -> average position over the same window
 */
export function consolidateGlossaryDuplicates(routes, impressions, positions) {
  const glossary = routes.filter((r) => r && r.path && /^\/glossary\//.test(r.path));
  const guides = routes.filter((r) => r && r.path && /^\/blog\//.test(r.path));
  const guideTokens = guides.map((g) => ({ r: g, t: slugTokens(g.path) }));

  const out = { consolidated: 0, keptAhead: 0, keptNoGuide: 0, impressionsMoved: 0, pairs: [] };

  for (const g of glossary) {
    if (hasDeliberateCanonical(g)) continue;

    const gPos = positions.get(g.path);
    const gImp = impressions.get(g.path) || 0;
    // Never touch a glossary page with no measurement - there is no evidence it
    // is losing, and a canonical placed on a guess is a canonical placed wrong.
    if (gPos == null) { out.keptNoGuide++; continue; }

    const gt = slugTokens(g.path);
    let best = null;
    for (const cand of guideTokens) {
      if (jaccard(gt, cand.t) < 0.5) continue;
      const cPos = positions.get(cand.r.path);
      if (cPos == null) continue;
      if (!best || cPos < best.pos) best = { r: cand.r, pos: cPos };
    }
    if (!best) { out.keptNoGuide++; continue; }

    // The glossary page has to be materially behind. An 8-position band keeps
    // ordinary rank noise from triggering a permanent canonical.
    if (gPos - best.pos <= 8) { out.keptAhead++; continue; }

    g.canonical = `${SITE}${best.r.path}`;
    g.consolidatedTo = best.r.path;
    out.consolidated++;
    out.impressionsMoved += gImp;
    if (out.pairs.length < 5) {
      out.pairs.push(`${g.path} (pos ${gPos.toFixed(0)}, ${gImp}i) -> ${best.r.path} (pos ${best.pos.toFixed(0)})`);
    }
  }
  return out;
}

/**
 * Class 2. Collapse duplicate city slugs onto whichever slug earned more.
 *
 * @param routes       prerender route list, mutated in place
 * @param impressions  Map path -> impressions
 * @param cityData     the researched city store, slug -> { industrialProfile, ... }
 */
export function consolidateDuplicateCities(routes, impressions, cityData) {
  const normalise = (s) =>
    String(s || '').toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
  const words = (s) => String(s || '').trim().split(/\s+/).filter(Boolean).length;

  // Group slugs by their research prose. Identical prose means one city, two slugs.
  const byProfile = new Map();
  for (const [slug, v] of Object.entries(cityData || {})) {
    if (!v || words(v.industrialProfile) < 28) continue;
    const key = normalise(v.industrialProfile).slice(0, 220);
    if (!byProfile.has(key)) byProfile.set(key, []);
    byProfile.get(key).push(slug);
  }

  const byPath = new Map(routes.filter((r) => r && r.path).map((r) => [r.path, r]));
  const out = { clusters: 0, consolidated: 0, impressionsMoved: 0, examples: [] };

  for (const slugs of byProfile.values()) {
    if (slugs.length < 2) continue;

    // Total measured demand across every page a slug produced.
    const earned = new Map(
      slugs.map((s) => {
        const re = new RegExp(`(^|[/-])${s}$`);
        let total = 0;
        for (const [p, imp] of impressions) if (re.test(p)) total += imp;
        return [s, total];
      })
    );
    // Most impressions wins. On a zero-zero tie the longer, state-qualified slug
    // wins - it is the unambiguous URL, and ambiguity is what created this mess.
    const winner = [...slugs].sort((a, b) => (earned.get(b) - earned.get(a)) || (b.length - a.length))[0];
    out.clusters++;

    for (const loser of slugs) {
      if (loser === winner) continue;
      for (const r of routes) {
        if (!r || !r.path || hasDeliberateCanonical(r)) continue;
        if (!new RegExp(`(^|[/-])${loser}$`).test(r.path)) continue;
        const twin = r.path.replace(new RegExp(`${loser}$`), winner);
        if (twin === r.path || !byPath.has(twin)) continue;
        r.canonical = `${SITE}${twin}`;
        r.consolidatedTo = twin;
        out.consolidated++;
        out.impressionsMoved += impressions.get(r.path) || 0;
        if (out.examples.length < 5) out.examples.push(`${r.path} -> ${twin}`);
      }
    }
  }
  return out;
}
