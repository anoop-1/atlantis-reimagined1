/**
 * ERP Track B — win the winnable intersection. 2026-07-29.
 * ─────────────────────────────────────────────────────────────────────────────
 * The 2026-07-29 audit established that the ERP cluster cannot win generic
 * business-software search from its current link profile: 875 pages produce 75
 * clicks a quarter, and only 38 business-software queries reach the site at all.
 *
 * But a small set of *intersection* terms already produce impressions at
 * positions 20–40 — close enough that depth moves them, and specific enough that
 * the competition is weak:
 *
 *   erp system oil and gas malaysia        53i @ p39.4
 *   erp oil and gas malaysia               52i @ p19.5
 *   erp solution for oil and gas malaysia  33i @ p38.7
 *   erp software for oil and gas malaysia  27i @ p33.2
 *   erp software provider for oil & gas MY 21i @ p21.5
 *   construction erp software singapore    26i @ p33.6
 *   construction erp singapore             21i @ p26.0
 *   erp construction singapore             19i @ p30.6
 *   construction erp malaysia              10i @ p29.5
 *   erp provider aberdeen                   7i @ p13.0
 *
 * The problem is that those impressions are spread across a blog post, an
 * industry page and a city page, while the deep money page built on 2026-07-27
 * has no history at all. This module consolidates the cluster: the pages holding
 * the impressions point clearly at the destination page, and the destination
 * gains the local specificity that beats a generic incumbent.
 *
 * Deliberately NOT doing: adding more city or industry permutations. That
 * approach has now failed three times and is explicitly ruled out in the plan.
 *
 * No numbers in ERP copy (owner direction), no pricing (CLAUDE.md §18).
 */

const esc = (s) =>
  String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ul = (a) => `<ul>${a.map((i) => `<li>${i}</li>`).join('')}</ul>`;

/** Pages currently holding the impressions -> the destination they should feed. */
const FEEDERS = {
  '/blog/affordable-oil-gas-erp-malaysia-inspection-companies-2026': ['/erp-oil-gas-malaysia', 'Malaysia'],
  '/erp-industries/oilfield-services-kuala-lumpur': ['/erp-oil-gas-malaysia', 'Malaysia'],
  '/erp-industries/construction-quality-assurance-kuala-lumpur': ['/erp-oil-gas-malaysia', 'Malaysia'],
  '/ndt-erp-kuala-lumpur': ['/erp-oil-gas-malaysia', 'Malaysia'],
  '/ndt-erp-malaysia': ['/erp-oil-gas-malaysia', 'Malaysia'],
  '/blog/best-erp-software-malaysia-construction-oil-gas-2026': ['/erp-oil-gas-malaysia', 'Malaysia'],
  '/erp-industries/construction-quality-assurance-singapore': ['/erp-construction-singapore', 'Singapore'],
  '/blog/best-erp-software-singapore-construction-2026': ['/erp-construction-singapore', 'Singapore'],
  '/blog/affordable-construction-erp-singapore-ndt-inspection-2026': ['/erp-construction-singapore', 'Singapore'],
  '/ndt-erp-singapore': ['/erp-construction-singapore', 'Singapore'],
  '/erp-industries/welding-fabrication-shops-singapore': ['/erp-construction-singapore', 'Singapore'],
};

/** Extra local depth for the two destination pages. */
const DESTINATIONS = {
  '/erp-oil-gas-malaysia': {
    place: 'Malaysia',
    heading: 'What a Malaysian operator actually has to satisfy',
    intro:
      'Buying business software in Malaysia is not really a software decision for a contractor working the oil and gas chain. It is a decision about whether you can keep producing evidence — of licensing, of competency, of safety, of tax treatment — on demand and without a scramble, for years, across sites that are a flight apart.',
    points: [
      '<strong>PETRONAS licensing and vendor registration</strong> is a continuous documentary obligation, not a one-off submission. The evidence behind it has to be current and producible on the day someone asks.',
      '<strong>Contractor competency and safety records</strong> are checked before mobilisation. A record that exists but cannot be produced at the gate costs the mobilisation just as surely as one that does not exist.',
      '<strong>DOSH requirements</strong> under the Occupational Safety and Health Act and the Factories and Machinery Act shape pressure-equipment and lifting inspection regimes, and the records that follow from them.',
      '<strong>Geographic spread</strong> — Kuala Lumpur head offices, Kerteh and Paka in Terengganu, Miri and Bintulu in Sarawak, Labuan offshore support, Pengerang and Johor downstream. Multi-site dispatch and mobilisation costing matter more here than in a single-hub market.',
      '<strong>Multi-currency reality</strong> — contracts in ringgit, equipment and consumables in dollars, regional work billed into Singapore, Brunei or Indonesia, all needing to reconcile into one margin view.',
      '<strong>Local tax and e-invoicing</strong> obligations, configured during implementation rather than bolted on afterwards.',
    ],
    close:
      'The platform is configured for all of that before you log in, and customized further as the business changes. Affordable, accessible, fully customizable — and the conversation starts with how you work now, not with a feature list.',
  },
  '/erp-construction-singapore': {
    place: 'Singapore',
    heading: 'What a Singapore contractor actually gets audited on',
    intro:
      'Singapore construction and fabrication work carries an unusually heavy documentation load, and the audit almost never lands where contractors expect. Programme and cost are managed well by most firms. The quality record is where the exposure sits.',
    points: [
      '<strong>Welder and operator qualification</strong> — current, matched to the joint actually welded, with continuity maintained rather than assumed.',
      '<strong>NDT coverage and results</strong> tied to specific joints and drawings, carrying the technician qualification and instrument calibration state applicable at the time of test.',
      '<strong>Material traceability</strong> from mill certificate through to installed component, answerable by heat number rather than by opening a folder of scans.',
      '<strong>Inspection and test plan execution</strong> — hold and witness points signed by the party the plan names, with evidence attached at the point rather than collected afterwards.',
      '<strong>Non-conformance handling</strong> raised, dispositioned and closed with the trail intact, not resolved in an email thread.',
      '<strong>Workplace safety documentation</strong> — permits, risk assessments and toolbox records linked to the work they actually cover.',
      '<strong>Multi-project resource sharing</strong> across Jurong Island, Tuas, the marine yards and city projects, with crews and equipment costed to the project that consumed them.',
    ],
    close:
      'All of it structured rather than filed, so producing it is an export rather than an afternoon. Affordable, accessible, fully customizable — and configured for the way Singapore projects are actually run before you start.',
  },
};

export function applyErpIntersectionBoost(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let feeders = 0;
  let destinations = 0;

  // 1. Feeder pages point clearly at the destination that should rank.
  for (const [path, [dest, place]] of Object.entries(FEEDERS)) {
    const r = byPath.get(path);
    if (!r || !r.bodyContent) continue;
    if (r.bodyContent.includes('data-erp-intersection')) continue;
    append(r, `
    <section data-erp-intersection aria-label="Full ${esc(place)} guide">
      <h2>The full ${esc(place)} guide</h2>
      <p>This page covers one part of the picture. If you are choosing a platform to run the business on rather than researching a single topic, the complete guide for ${esc(place)} sets out what operators there actually have to satisfy, what the platform covers, how implementation runs, and what happens when you get in touch: <a href="${dest}"><strong>business management software for ${esc(place)}</strong></a>.</p>
      <p>Affordable, accessible, fully customizable. <a href="/contact?service=erp">Book a free consultation</a> and we will walk it through on your own workflow.</p>
    </section>`);
    feeders++;
  }

  // 2. Destination pages gain the local depth that beats a generic incumbent.
  for (const [path, d] of Object.entries(DESTINATIONS)) {
    const r = byPath.get(path);
    if (!r || !r.bodyContent) continue;
    if (r.bodyContent.includes('data-erp-local-depth')) continue;
    append(r, `
    <section data-erp-local-depth aria-label="${esc(d.heading)}">
      <h2>${esc(d.heading)}</h2>
      <p>${esc(d.intro)}</p>
      ${ul(d.points)}
      <p>${esc(d.close)}</p>
      <h2>Moving from what you use today</h2>
      <p>Most businesses arrive from a mix of spreadsheets, an accounting package and one or two point tools that do not talk to each other. The migration is sequenced so the highest-risk records move first — people and their qualifications, equipment and its calibration, then clients and projects, then costing — with a pilot on one live contract before anything is switched off. Historic records are migrated rather than abandoned, which is why the timeline is measured in weeks rather than days.</p>
      <p><a href="/contact?service=erp"><strong>Tell us what you are trying to fix</strong></a> — a short conversation, no obligation, and a quote shaped to your region, team size and scope.</p>
    </section>`);
    destinations++;
  }

  return { feeders, destinations };
}
