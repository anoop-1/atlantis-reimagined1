/**
 * CTR wave 8 — 2026-09-02. City page titles, from live competitor SERP recon.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY THESE TITLES CHANGE WHEN page-upgrades.mjs DELIBERATELY PRESERVES TITLES
 *
 * applyPageUpgrades leaves title and h1 alone on purpose: "the H1 and title are
 * left alone because they are what currently ranks." That rule is right for a
 * page earning clicks. It is not right for these.
 *
 *   /3d-scanning-phoenix          82 impressions   position 25   0 clicks
 *   /3d-scanning-corpus-christi   measured demand  position ~30  0 clicks
 *   /3d-scanning-san-francisco    63 impressions   position 28   0 clicks
 *
 * Nothing is being protected. All three carried the same generated template
 * title — "3D Scanning <City> 2026 — Survey-Grade LiDAR + Drone + BIM |
 * Same-Day Quote", 75 characters, truncated in the SERP, and leading on a
 * phrase ("3D Scanning") that is not the phrase buyers type.
 *
 * Live SERP recon on 2026-09-02 pulled the actual buyer phrasings per market.
 * The head term in every one of these cities is "3d laser scanning <city>",
 * with "lidar scanning <city>" and "point cloud <city>" behind it. "3D
 * scanning" alone is the weakest of the set.
 *
 * So each title now leads with the measured head term and then states the local
 * wedge the page is actually written around — the differentiator the competing
 * national template networks (GPRS, THE FUTURE 3D, Arrival 3D) do not carry.
 *
 * /3d-scanning-louisville is deliberately NOT included. Its existing title
 * already leads with "Point Cloud Scanning in Louisville", which is the exact
 * measured query it ranks at position 20 for on 276 impressions. That is a page
 * whose title IS working, and the rule that protects it applies.
 *
 * All titles are within 60 characters and all descriptions within 155, so the
 * snippet geometry that wave 7 established holds here too.
 */

export const CTR_WAVE8_OVERRIDES = {
  // Recon: SERP is not map-pack locked and not directory locked — it is held by
  // national programmatic city-page networks. The winnable wedge is industrial,
  // and Arizona has no refining, so the page leads on fab and plant instead.
  '/3d-scanning-phoenix': {
    title: '3D Laser Scanning Phoenix AZ — Industrial and Fab',
    description:
      'Reality capture for the Phoenix semiconductor corridor, data centre build-out and utility assets, with Part 107 airspace and Arizona BTR limits stated.',
  },

  // Recon: the weakest page in the top set names not one Corpus Christi
  // facility. Leading with Refinery Row and LNG is the whole differentiator.
  '/3d-scanning-corpus-christi': {
    title: '3D Laser Scanning Corpus Christi — Refinery Row, LNG',
    description:
      'Point cloud and as-built capture for Refinery Row, Cheniere LNG at Gregory, Port of Corpus Christi terminals and the Ingleside export corridor.',
  },

  // Recon: no competitor page in the top five references MOTEMS, which is the
  // strongest available Bay Area proof hook and a recurring dated obligation.
  '/3d-scanning-san-francisco': {
    title: '3D Laser Scanning San Francisco Bay — Refinery, MOTEMS',
    description:
      'Reality capture for Bay Area refineries, renewable conversions and marine oil terminals, built around MOTEMS audits and Cal/OSHA refinery PSM.',
  },
};

export const TITLE_MAX = 60;
export const DESC_MAX = 155;

/** The geometry is the point; a regression on it silently undoes the wave. */
export function assertWave8Lengths() {
  const bad = [];
  for (const [path, o] of Object.entries(CTR_WAVE8_OVERRIDES)) {
    if (!o.title || !o.description) bad.push(`${path}: missing title or description`);
    if ((o.title || '').length > TITLE_MAX) bad.push(`${path}: title ${o.title.length} > ${TITLE_MAX}`);
    if ((o.description || '').length > DESC_MAX) bad.push(`${path}: description ${o.description.length} > ${DESC_MAX}`);
  }
  if (bad.length) throw new Error(`CTR wave 8 length violations:\n  ${bad.join('\n  ')}`);
  return Object.keys(CTR_WAVE8_OVERRIDES).length;
}

/** CLAUDE.md hard rule: no Atlantis price anywhere public. */
export function assertNoPricesInWave8() {
  const MONEY = /[$£€]\s?\d|\b\d+\s?(?:USD|GBP|EUR|AED|SAR)\b|\bper (?:seat|user|licen[cs]e)\b/i;
  const bad = Object.entries(CTR_WAVE8_OVERRIDES)
    .filter(([, o]) => MONEY.test(`${o.title} ${o.description}`))
    .map(([p]) => p);
  if (bad.length) throw new Error(`CTR wave 8 contains a price: ${bad.join(', ')}`);
}
