/**
 * Zero-impression prune — 2026-08-16 (Phase 0, owner-approved 2026-08-16).
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY. 43.7% of the sitemap (2,301 of 5,264 URLs) earned ZERO impressions in
 * 90 days (§40.5): method-city 61% dead, DT-city 72%, consulting 60%. Google
 * allocates crawl and index budget in proportion to perceived authority, and
 * 5,264 pages on ~85 clicks/day is far past what this domain's authority
 * supports — so Google indexes what it values and ignores the rest, INCLUDING
 * new pages we actually want indexed. The owner approved pruning alongside the
 * expansion: noindex the dead weight so budget concentrates on the ~2,900
 * earners plus everything new.
 *
 * WHAT IT DOES. Sets `noindex, follow` (noindexFollow — links keep passing
 * equity) on pages that BOTH:
 *   1. earned zero impressions in the committed 90d demand snapshot, AND
 *   2. carry only generic template content (the §20.9 GENERIC_CITY_MARKER, or
 *      near-duplicate similarity vs an earning sibling).
 * NOTHING IS DELETED. Pages stay live, linked and crawlable; the flag is
 * removable by simply earning content or research later (additive-only, §2).
 *
 * PROTECTED — never pruned:
 *   - anything with >0 impressions in the snapshot
 *   - families outside the approved scope (see SCOPES — rollout is in
 *     owner-approved tranches, not all-at-once)
 *   - paths in RECENT_SHIP_MANIFEST (shipped <60 days ago — recrawl has not
 *     had a chance yet; a new page's zero is not evidence)
 *   - hubs, money pages, blog, glossary, resources, compare (never in scope)
 *
 * ORDERING (§ the reindex hazard). reindexQualifiedPages() at prerender.mjs
 * ~13182 UN-noindexes qualifying pages. This pass must run AFTER it, and the
 * routes it marks carry `prunedByDemand: true`, which reindexQualifiedPages'
 * candidate filter now skips — so the two passes cannot fight regardless of
 * any future reordering. Sitemap filters read `!r.noindex` later in the same
 * post-pass, so pruned pages drop from sitemaps in the same build.
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Tranche scopes. A family prunes ONLY when its tranche is enabled here —
 * each tranche is its own owner-approved commit:
 *   dt-city      — Phase D  (~264 candidates measured 2026-08-14)
 *   method-city  — Phase C standalone commit (~744 candidates)
 * Add a family by adding its matcher; nothing outside SCOPES is ever touched.
 */
/** The 13 industry slugs used by the method x industry family (2026-08-16).
 *  Kept as a literal rather than an import so the prune module stays
 *  dependency-free and cannot fail open if the data file moves. */
const METHOD_INDUSTRY_SLUGS = [
  'refining', 'petrochemical', 'lng', 'offshore', 'pipeline', 'marine',
  'aviation', 'power', 'mining', 'fabrication', 'automotive', 'steel', 'rail',
];

export const SCOPES = {
  'dt-city': {
    enabled: true, // Phase D tranche, enabled 2026-08-16 (owner approved 08-16)
    match: (p) => /^\/digital-twin-/.test(p),
    // Verified against dist 2026-08-16 BEFORE enabling: dt-city-data marks 328
    // cities "enriched" but the context text NEVER SHIPS into the built page
    // (aberdeen's own context phrase is absent from dist/digital-twin-aberdeen,
    // 640w template). Shipped research does not exist in this family, so the
    // research protection is a never-match — the earning-pages protection
    // (demand.i > 0) is what actually guards the family's live performers.
    research: /a^/,
  },
  'method-city': {
    enabled: true, // Phase C tranche, enabled 2026-08-16 (owner approved 08-16)
    // ⚠️ The trailing segment must be a CITY, never a page type. The first
    // version of this matcher was `-testing-` open-ended, which silently
    // noindexed all six NATIONAL method-training pages (/ultrasonic-testing-
    // training et al, §35.1 — built for a 502-impression gap). Excluded
    // explicitly, and any future `{method}-testing-{pagetype}` family must be
    // added here too.
    match: (p) =>
      /^\/(ultrasonic|radiographic|magnetic-particle|penetrant|visual|eddy-current)-testing-/.test(p) &&
      !/-testing-training(-|$)/.test(p) &&
      !/-testing-(services|equipment|standards|guide|cost|training)$/.test(p) &&
      // Method x INDUSTRY pages share the method-city slug shape but are a
      // different family with banked research (2026-08-16). Never prune them.
      !new RegExp('-testing-(' + METHOD_INDUSTRY_SLUGS.join('|') + ')$').test(p),
    // Verified against dist 2026-08-16: matches exactly the 253 pages carrying
    // a §26.1 market block ("Why {City} generates {XX} demand", from
    // method-city-depth.mjs) or a §37.1 gap block ("what the work actually
    // is"). The other 338 pages carry neither — template + uplink only.
    // NOTE: "national service" (the §39.2 authority uplink, on all 591) is
    // deliberately NOT a research marker — one routing sentence is not
    // city research.
    research: /Why [^<]{1,40} generates [A-Z]{2,4} demand|what the work actually is/,
  },
};

/** §20.9's marker: present = the page has no city-specific research at all. */
const GENERIC_CITY_MARKER = 'is set by the local asset base';

/**
 * Pages shipped recently get a grace window — a zero from before the page
 * could be crawled is not evidence of anything. Dates from the sprint logs.
 */
const RECENT_SHIP_PATTERNS = [
  // 2026-08-12/13 method-city gap + depth work
  /^\/(ultrasonic|radiographic|magnetic-particle|penetrant|visual|eddy-current)-testing-(charlotte|boston|new-york|houston)$/,
];

const textOf = (html) => String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

export function applyZeroImpressionPrune(routes, demand = {}) {
  const out = { pruned: 0, byFamily: {}, protectedRecent: 0, protectedEarning: 0, skippedResearched: 0 };
  const enabled = Object.entries(SCOPES).filter(([, s]) => s.enabled);
  if (!enabled.length) return { ...out, note: 'no tranche enabled' };

  for (const r of routes) {
    if (!r || !r.path || r.path.includes(':')) continue;
    if (r.noindex) continue; // already noindexed by an earlier mechanism
    const fam = enabled.find(([, s]) => s.match(r.path));
    if (!fam) continue;

    // Protection 1: any measured impressions at all.
    const d = demand[r.path];
    if (d && d.i > 0) { out.protectedEarning++; continue; }

    // Protection 2: recently shipped — recrawl not yet possible.
    if (RECENT_SHIP_PATTERNS.some((re) => re.test(r.path))) { out.protectedRecent++; continue; }

    // Condition 2: only generic template content. A page carrying real
    // research (a §26.1 market block, a §37.1 gap block) is left indexed even
    // at zero impressions — research earns on the ~22x pattern and deserves
    // its recrawl window. Marker verified per family against dist (§37.1).
    const raw = String(r.bodyContent || '');
    const isGeneric = textOf(raw).includes(GENERIC_CITY_MARKER) || !fam[1].research.test(raw);
    if (!isGeneric) { out.skippedResearched++; continue; }

    r.noindex = true;
    r.noindexFollow = true;   // links keep passing equity — this is a budget
                              // measure, not a quarantine
    r.prunedByDemand = true;  // reindexQualifiedPages skips this flag
    out.pruned++;
    out.byFamily[fam[0]] = (out.byFamily[fam[0]] || 0) + 1;
  }
  return out;
}

/** Convenience: load the committed snapshot the same way prerender does. */
export function loadDemandSnapshot() {
  try {
    return JSON.parse(readFileSync(join(__dirname, 'seo-demand-90d.json'), 'utf8')).pages || {};
  } catch {
    return {};
  }
}
