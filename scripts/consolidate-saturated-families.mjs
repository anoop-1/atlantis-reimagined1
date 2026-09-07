/**
 * Consolidate saturated URL families. 2026-09-07.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE MEASUREMENT THAT DROVE THIS
 * 2,470 of 6,206 indexable pages have never been served by Google in 90 days.
 * The obvious explanations were tested and all failed:
 *
 *   not in any sitemap        0% of unserved   (vs 0% of served)
 *   zero inbound links        1% of unserved   (vs 2% of served — better linked)
 *   under 600 words           7% of unserved   (vs 9% of served)
 *
 * They are not orphaned, not missing from sitemaps, and not predominantly thin.
 * 483 unserved pages are in-sitemap, internally linked AND over 1,500 words.
 *
 * What DOES predict it is family size, monotonically:
 *
 *   family of 1-5 pages    77% served
 *   family of 5-20         71%
 *   family of 20-60        64%
 *   family of 60-200       53%
 *   family of 200+         36%
 *
 * That is crawl budget, not page quality. Google indexes small distinct families
 * and progressively declines large templated ones. Publishing more into a
 * saturated family adds pages that will not be served AND dilutes what is left.
 *
 * WHAT THIS PASS DOES
 * In a saturated family — large, long-standing, and indexing below a threshold —
 * the members Google has never served canonicalise to the nearest ancestor hub
 * that IS served. Signals concentrate on a page that can actually rank, and the
 * crawler stops spending budget re-deciding the same rejection.
 *
 * Nothing is deleted. Every page stays live, linked and crawlable; Google
 * reclassifies it from a rejection to "alternate page with proper canonical tag".
 *
 * TWO GUARDS THAT MATTER
 * 1. AGE. Families younger than MIN_AGE_DAYS are exempt. On 2026-09-07 five
 *    families showed 0% indexation and were all seven days old — too new to
 *    judge, and consolidating them would have destroyed work before it had a
 *    chance. Age is supplied by the caller, not guessed here.
 * 2. DEMAND. A page Google HAS served keeps its own canonical whatever its
 *    family looks like. A page that works is never consolidated away.
 */

const SITE = 'https://atlantisndt.com';

/** Below this served-rate a large family is judged saturated rather than young. */
export const SATURATION_THRESHOLD = 0.25;

/** Families smaller than this are not the problem; leave them alone. */
export const MIN_FAMILY_SIZE = 25;

/**
 * Group routes into families by URL shape: the directory plus the first two
 * slug tokens, which is what distinguishes /consulting/refining-ndt-* from
 * /consulting/steel-ndt-* while keeping each family coherent.
 */
export function familyOf(path) {
  const seg = String(path || '').split('/').filter(Boolean);
  if (!seg.length) return '(root)';
  if (seg.length === 1) return `/${seg[0].split('-').slice(0, 2).join('-')}-*`;
  return `/${seg[0]}/${(seg[1] || '').split('-').slice(0, 2).join('-')}-*`;
}

/** Nearest ancestor path that exists and is itself served. */
function nearestServedAncestor(path, exists, served) {
  const seg = path.split('/').filter(Boolean);
  for (let i = seg.length - 1; i >= 1; i--) {
    const cand = '/' + seg.slice(0, i).join('/');
    if (exists(cand) && served(cand)) return cand;
  }
  // Section hubs worth falling back to, in order of specificity.
  for (const hub of ['/consulting', '/training', '/erp', '/industry', '/services']) {
    if (path.startsWith(hub) && exists(hub) && served(hub)) return hub;
  }
  return null;
}

/**
 * @param routes      prerender route list, mutated in place
 * @param opts.served      Set of paths Google has served
 * @param opts.exists      Set of all built paths
 * @param opts.familyAgeDays  Map family -> age in days (families without an
 *                            entry are treated as too new and skipped)
 * @param opts.minAgeDays  a family younger than this is exempt
 */
export function consolidateSaturatedFamilies(routes, opts) {
  const { served, exists, familyAgeDays, minAgeDays = 21, impressions = new Map() } = opts;
  const impressionsOf = (p) => impressions.get(p) || 0;
  const has = (p) => exists.has(p);
  const isServed = (p) => served.has(p);

  const byFamily = new Map();
  for (const r of routes) {
    if (!r || !r.path) continue;
    const f = familyOf(r.path);
    if (!byFamily.has(f)) byFamily.set(f, []);
    byFamily.get(f).push(r);
  }

  const out = { families: 0, consolidated: 0, skippedYoung: 0, skippedHealthy: 0, noParent: 0, examples: [] };

  for (const [fam, members] of byFamily) {
    if (members.length < MIN_FAMILY_SIZE) continue;

    const age = familyAgeDays.get(fam);
    if (age == null || age < minAgeDays) { out.skippedYoung++; continue; }

    const servedCount = members.filter((m) => isServed(m.path)).length;
    if (servedCount / members.length >= SATURATION_THRESHOLD) { out.skippedHealthy++; continue; }

    out.families++;

    // Prefer the family's own strongest SERVED sibling over the section hub.
    // /consulting/maritime-ndt-consulting-bath-maine consolidating to a served
    // maritime consulting page keeps the topic; collapsing it onto /consulting
    // throws the topical signal away and buries one hub under hundreds of
    // unrelated alternates.
    const servedSiblings = members
      .filter((m) => isServed(m.path))
      .sort((a, b) => (impressionsOf(b.path) - impressionsOf(a.path)));
    const familyAnchor = servedSiblings.length ? servedSiblings[0].path : null;

    for (const m of members) {
      // A page that works is never consolidated away.
      if (isServed(m.path)) continue;
      // Do not overwrite a canonical some earlier pass set deliberately.
      if (m.consolidatedTo) continue;
      if (m.canonical && m.canonical !== `${SITE}${m.path}`) continue;

      const parent = familyAnchor || nearestServedAncestor(m.path, has, isServed);
      if (!parent || parent === m.path) { out.noParent++; continue; }

      m.canonical = `${SITE}${parent}`;
      m.consolidatedTo = parent;
      out.consolidated++;
      if (out.examples.length < 5) out.examples.push(`${m.path} -> ${parent}`);
    }
  }
  return out;
}
