/**
 * Cluster interlinking — Phase 3 of the 90-day plan. 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY CLUSTERS, AND WHY NOT BEFORE NOW
 *
 * Head terms move as a by-product of a complete, densely interlinked cluster —
 * never as a first move. The money pages this is aimed at are the ones holding
 * real commercial demand at bad positions:
 *
 *   "asnt level iii consulting"        243 impressions, position 44.6, 0 clicks
 *   "ndt reporting software"           192 impressions, position 11.4
 *   "ndt inspection management software"
 *   "best asset integrity management software"
 *
 * Each now has supporting depth pages built into SERPs with no commercial
 * occupant. Linking them into a mesh is what converts a pile of pages into a
 * topic Google can attribute to one hub.
 *
 * DESIGN CHOICES THAT MATTER
 *
 * 1. Links are appended to bodyContent — the STATIC HTML. React-side links are
 *    invisible to crawlers on this site (prerender does not render React), so a
 *    link mesh that exists only in components is worth nothing.
 *
 * 2. Every link carries descriptive anchor text naming the destination's topic,
 *    never "read more" or the bare slug. Anchor text is a ranking signal and a
 *    retrieval cue; wasting it on "click here" throws away the only editorial
 *    control we have over how the destination is understood.
 *
 * 3. A page never links to itself, and the hub is linked from every member.
 *    Members link to at most 4 siblings — a link block that lists twenty pages
 *    dilutes every link in it and reads as a footer nobody follows.
 *
 * 4. This is ADDITIVE. It appends a related block; it never rewrites or removes
 *    existing body content or existing links.
 */

/**
 * Each cluster has a hub (the money page the mesh is meant to lift) and members
 * (the supporting depth pages). Titles are the anchor text and should read as
 * the question or claim the destination answers.
 */
export const CLUSTERS = {
  consulting: {
    hub: { path: '/consulting', anchor: 'NDT consulting services' },
    label: 'ASNT Level III consulting',
    members: [
      { path: '/consulting/outside-ndt-level-3-can-and-cannot-do', anchor: 'what an outside Level III can and cannot do' },
      { path: '/consulting/ndt-level-3-resigned-what-to-do', anchor: 'what happens when your Level III resigns' },
      { path: '/consulting/nadcap-ac7114-audit-readiness', anchor: 'Nadcap AC7114 audit readiness' },
      { path: '/consulting/nas-410-responsible-level-3', anchor: 'the NAS 410 Responsible Level 3' },
      { path: '/consulting/ndt-level-3-exam-oversight', anchor: 'who writes and grades certification exams' },
      { path: '/consulting/ndt-consulting-level-iii', anchor: 'outsourced Level III scope and retainer' },
      { path: '/nas-410-certification-requirements', anchor: 'NAS 410 certification requirements' },
    ],
  },
  twins: {
    hub: { path: '/digital-twins', anchor: 'the Atlantis digital twin platform' },
    label: 'digital twins and asset integrity',
    members: [
      { path: '/digital-twin-vs-idms', anchor: 'digital twin versus IDMS' },
      { path: '/digital-twins-ndt/ut-thickness-overlay', anchor: 'overlaying UT thickness on a 3D model' },
      { path: '/diconde-ndt-data-standards-digital-twin', anchor: 'DICONDE and inspection data standards' },
      { path: '/deliver-twin-ready-ndt-data', anchor: 'delivering twin-ready NDT data to a client' },
      { path: '/why-digital-twin-projects-fail', anchor: 'why digital twin projects fail' },
    ],
  },
  software: {
    hub: { path: '/best-ndt-reporting-software-2026', anchor: 'NDT reporting software compared' },
    label: 'NDT reporting software',
    members: [
      { path: '/omniscan-data-to-inspection-report', anchor: 'getting OmniScan data into a report' },
      { path: '/floodlight-software-alternatives', anchor: 'Floodlight software alternatives' },
      { path: '/ndt-reporting-software-vs-excel', anchor: 'NDT reporting software versus Excel' },
      { path: '/offline-ndt-inspection-app', anchor: 'offline field capture and sync' },
      { path: '/ndt-reporting-software-comparison', anchor: 'how to evaluate NDT software' },
    ],
  },
  erp: {
    hub: { path: '/erp', anchor: 'ERP for NDT companies' },
    label: 'inspection management and ERP',
    members: [
      { path: '/erp/ndt-software-rfp-requirements-checklist', anchor: 'the NDT software RFP checklist' },
      { path: '/erp/iso-17020-software-for-ndt-inspection-bodies', anchor: 'ISO 17020 software requirements' },
      { path: '/erp/ndt-software-roi-calculator', anchor: 'the NDT software ROI model' },
      { path: '/erp/api-inspection-contractor-management-software', anchor: 'software for API inspection contractors' },
      { path: '/erp/ndt-inspection-software-comparison', anchor: 'NDT inspection software compared' },
    ],
  },
  // ── Consulting by industry, added 2026-08-19 ──────────────────────────────
  // Separate from the main consulting cluster because the buyer arrives with a
  // sector-specific audit problem — a Nadcap assessor, a PSM audit, a class
  // surveyor — rather than a generic "we need a Level III" need. Hubbed on the
  // Level III consulting page, which is the strongest earner in the family
  // (223 impressions against 0-114 for any actual city page).
  consultingIndustries: {
    hub: { path: '/consulting/ndt-consulting-level-iii', anchor: 'outsourced ASNT Level III consulting' },
    label: 'NDT consulting by industry',
    members: [
      { path: '/consulting/oil-gas-ndt-consulting', anchor: 'oil and gas NDT consulting' },
      { path: '/consulting/petrochemical-ndt-consulting', anchor: 'petrochemical NDT consulting and PSM records' },
      { path: '/consulting/energy-utilities-ndt-consulting', anchor: 'energy and utilities NDT consulting' },
      { path: '/consulting/nuclear-ndt-consulting', anchor: 'nuclear NDT consulting and ASME Section XI' },
      { path: '/consulting/aerospace-ndt-consulting', anchor: 'aerospace NDT consulting and NAS 410' },
      { path: '/consulting/aviation-ndt-consulting', anchor: 'aviation MRO NDT consulting' },
      { path: '/consulting/maritime-ndt-consulting', anchor: 'maritime NDT consulting and class survey' },
      { path: '/consulting/offshore-ndt-consulting', anchor: 'offshore NDT consulting' },
      { path: '/consulting/nadcap-ac7114-audit-readiness', anchor: 'Nadcap AC7114 audit readiness' },
    ],
  },

  // ── Training tree, added 2026-08-18 ────────────────────────────────────────
  // Split into three clusters rather than one, because the buyers differ. A
  // candidate choosing a level is not the employer choosing an industry cohort,
  // and collapsing them into a single 16-link block would dilute every link and
  // blur what each hub is about.
  trainingLevels: {
    hub: { path: '/training', anchor: 'NDT training programmes' },
    label: 'NDT certification levels',
    members: [
      { path: '/ndt-level-1-training', anchor: 'NDT Level I training and what it authorises' },
      { path: '/ndt-level-2-training', anchor: 'NDT Level II training and interpretation authority' },
      { path: '/asnt-level-iii-training', anchor: 'ASNT Level III training and procedure approval' },
      { path: '/blog/ndt-training-hours-requirements-by-method', anchor: 'training hours by method and scheme' },
      { path: '/blog/ndt-salary-guide-2026-global', anchor: 'what each level pays' },
    ],
  },
  trainingMethods: {
    hub: { path: '/training', anchor: 'all NDT training programmes' },
    label: 'NDT method training',
    members: [
      { path: '/ultrasonic-testing-training', anchor: 'ultrasonic testing training' },
      { path: '/radiographic-testing-training', anchor: 'radiographic testing training' },
      { path: '/magnetic-particle-testing-training', anchor: 'magnetic particle testing training' },
      { path: '/penetrant-testing-training', anchor: 'liquid penetrant testing training' },
      { path: '/visual-testing-training', anchor: 'visual testing training' },
      { path: '/eddy-current-testing-training', anchor: 'eddy current testing training' },
    ],
  },
  // ── Method x level matrix, added 2026-08-19 ────────────────────────────────
  // Two clusters rather than one twelve-link block: a Level I candidate and a
  // Level II candidate are different readers at different career points, and a
  // combined block would bury both. Hubbed on the corresponding level page so
  // the matrix feeds the pages that already rank ("/ndt-level-2-training" holds
  // position 7.3).
  methodLevel1: {
    hub: { path: '/ndt-level-1-training', anchor: 'NDT Level I training' },
    label: 'Level I training by method',
    members: [
      { path: '/ut-level-1-training', anchor: 'UT Level I requirements and hours' },
      { path: '/rt-level-1-training', anchor: 'RT Level I and the radiation safety track' },
      { path: '/mt-level-1-training', anchor: 'MT Level I requirements' },
      { path: '/pt-level-1-training', anchor: 'PT Level I requirements' },
      { path: '/vt-level-1-training', anchor: 'VT Level I requirements' },
      { path: '/et-level-1-training', anchor: 'ET Level I requirements' },
    ],
  },
  methodLevel2: {
    hub: { path: '/ndt-level-2-training', anchor: 'NDT Level II training' },
    label: 'Level II training by method',
    members: [
      { path: '/ut-level-2-training', anchor: 'UT Level II interpretation authority' },
      { path: '/rt-level-2-training', anchor: 'RT Level II film interpretation' },
      { path: '/mt-level-2-training', anchor: 'MT Level II and AWS D1.1 work' },
      { path: '/pt-level-2-training', anchor: 'PT Level II and ASME Article 6' },
      { path: '/vt-level-2-training', anchor: 'VT Level II, the contractual minimum' },
      { path: '/et-level-2-training', anchor: 'ET Level II and aerospace demand' },
    ],
  },
  // ── SNT-TC-1A spine, added 2026-09-10 ──────────────────────────────────────
  // The one US training cluster in striking distance (179 queries, 2,335 US
  // impressions, positions 5–29) was spread across six pages with no hub.
  // Hubbed on the employer-facing money page so the informational pages that
  // already rank pass their equity to the page that converts. Placed before
  // the region/industry clusters so their hubs take this block first.
  sntTc1a: {
    hub: { path: '/snt-tc-1a-training-certification', anchor: 'SNT-TC-1A training and certification for employers' },
    label: 'SNT-TC-1A employer-based certification',
    members: [
      { path: '/asnt-certification', anchor: 'how ASNT certification works' },
      { path: '/ndt-written-practice-development', anchor: 'written practice development by an ASNT Level III' },
      { path: '/blog/asnt-snt-tc-1a-certification-requirements', anchor: 'SNT-TC-1A requirements and the 2024 edition' },
      { path: '/blog/asnt-snt-tc-1a-vs-cp-189-comparison', anchor: 'SNT-TC-1A vs CP-189' },
      { path: '/compliance/ansi-asnt-cp-189', anchor: 'ANSI/ASNT CP-189 requirements' },
      { path: '/resources/ndt-written-practice-template', anchor: 'a free written practice template' },
      { path: '/corporate-ndt-training', anchor: 'corporate NDT training cohorts' },
      { path: '/training-usa', anchor: 'NDT training across the US' },
      { path: '/ndt-training-canada', anchor: 'NDT training in Canada' },
      { path: '/consulting/ndt-consulting-level-iii', anchor: 'outsourced ASNT Level III consulting' },
    ],
  },

  // ── US training regions, extended 2026-08-19 ───────────────────────────────
  // 8 regions existed; 6 more added on industrial-corridor logic (Pacific NW =
  // Seattle aerospace with 114 measured impressions; Great Lakes = Detroit
  // manufacturing where ultrasonic-testing-detroit already carries 112i).
  // Hubbed on /training-usa — the region buyer is a US employer, and the local
  // pack is unreachable, so regions answer the delivery question.
  trainingRegions: {
    hub: { path: '/training-usa', anchor: 'NDT training across the US' },
    label: 'US training by region',
    members: [
      { path: '/ndt-training-gulf-coast', anchor: 'Gulf Coast refining corridor' },
      { path: '/ndt-training-pacific-northwest', anchor: 'Pacific Northwest aerospace' },
      { path: '/ndt-training-great-lakes', anchor: 'Great Lakes manufacturing' },
      { path: '/ndt-training-mid-atlantic', anchor: 'Mid-Atlantic shipbuilding and refining' },
      { path: '/ndt-training-permian-basin', anchor: 'Permian Basin oilfield' },
      { path: '/ndt-training-appalachia', anchor: 'Appalachia gas and pipeline' },
      { path: '/ndt-training-southern-california', anchor: 'Southern California aerospace and ports' },
      { path: '/ndt-training-southeast', anchor: 'Southeast industrial corridor' },
      { path: '/ndt-training-northeast', anchor: 'Northeast' },
      { path: '/ndt-training-midwest', anchor: 'Midwest' },
      { path: '/ndt-training-west-coast', anchor: 'West Coast' },
      { path: '/ndt-training-rockies-plains', anchor: 'Rockies and Plains' },
      { path: '/ndt-training-texas-inland', anchor: 'Texas inland' },
      { path: '/ndt-training-canada', anchor: 'Canada' },
    ],
  },

  trainingIndustries: {
    // Hubbed on the corporate page rather than /training: the industry buyer is
    // an employer sponsoring a cohort, and that is the page built for them.
    hub: { path: '/corporate-ndt-training', anchor: 'employer-sponsored NDT training' },
    label: 'NDT training by industry',
    members: [
      { path: '/oil-gas-ndt-training', anchor: 'oil and gas NDT training' },
      { path: '/aerospace-ndt-training', anchor: 'aerospace NDT training and NAS 410' },
      { path: '/aviation-ndt-training', anchor: 'aviation MRO NDT training' },
      { path: '/nuclear-ndt-training', anchor: 'nuclear NDT training' },
      { path: '/maritime-ndt-training', anchor: 'maritime and offshore NDT training' },
      { path: '/manufacturing-ndt-training', anchor: 'manufacturing and fabrication NDT training' },
      { path: '/training-usa', anchor: 'corporate NDT training in the US' },
    ],
  },

  certification: {
    hub: { path: '/asnt-certification', anchor: 'the ASNT certification pathway' },
    label: 'NDT certification',
    members: [
      { path: '/blog/ndt-training-hours-requirements-by-method', anchor: 'training hours by method and scheme' },
      { path: '/blog/asnt-snt-tc-1a-certification-requirements', anchor: 'SNT-TC-1A requirements' },
      { path: '/nas-410-certification-requirements', anchor: 'NAS 410 requirements' },
      { path: '/blog/ndt-salary-guide-2026-global', anchor: 'NDT pay by certification level' },
      { path: '/ndt-certification-guide', anchor: 'the full certification cost picture' },
    ],
  },

  // ── US training cities by corridor, added 2026-09-10 ──────────────────────
  // City pages had no hub link at all; each corridor is hubbed on its region
  // page (which trainingRegions already hubs on /training-usa), so a city
  // page is two clicks from the US hub and the SNT-TC-1A spine. Kept to 4–8
  // members per block so no cluster becomes a 16-link dilution.
  citiesGulfCoast: {
    hub: { path: '/ndt-training-gulf-coast', anchor: 'NDT training on the Gulf Coast' },
    label: 'Gulf Coast training cities',
    members: [
      { path: '/ndt-training-houston', anchor: 'NDT training in Houston' },
      { path: '/ndt-training-dallas', anchor: 'NDT training in Dallas' },
      { path: '/ndt-training-fort-worth', anchor: 'NDT training in Fort Worth' },
      { path: '/ndt-training-new-orleans', anchor: 'NDT training in New Orleans' },
      { path: '/ndt-training-baton-rouge', anchor: 'NDT training in Baton Rouge' },
      { path: '/ndt-training-beaumont', anchor: 'NDT training in Beaumont' },
      { path: '/ndt-training-mobile', anchor: 'NDT training in Mobile' },
    ],
  },
  citiesTexasInland: {
    hub: { path: '/ndt-training-texas-inland', anchor: 'NDT training in inland Texas and Oklahoma' },
    label: 'Texas inland and Oklahoma training cities',
    members: [
      { path: '/ndt-training-midland', anchor: 'NDT training in Midland' },
      { path: '/ndt-training-tulsa', anchor: 'NDT training in Tulsa' },
      { path: '/ndt-training-oklahoma-city', anchor: 'NDT training in Oklahoma City' },
      { path: '/ndt-training-arkansas', anchor: 'NDT training in Arkansas' },
    ],
  },
  citiesRockiesPlains: {
    hub: { path: '/ndt-training-rockies-plains', anchor: 'NDT training in the Rockies and Plains' },
    label: 'Rockies and Plains training cities',
    members: [
      { path: '/ndt-training-denver', anchor: 'NDT training in Denver' },
      { path: '/ndt-training-billings', anchor: 'NDT training in Billings' },
      { path: '/ndt-training-salt-lake-city', anchor: 'NDT training in Salt Lake City' },
      { path: '/ndt-training-kansas-city', anchor: 'NDT training in Kansas City' },
    ],
  },
  citiesGreatLakes: {
    hub: { path: '/ndt-training-great-lakes', anchor: 'NDT training in the Great Lakes region' },
    label: 'Great Lakes training cities',
    members: [
      { path: '/ndt-training-chicago', anchor: 'NDT training in Chicago' },
      { path: '/ndt-training-cleveland', anchor: 'NDT training in Cleveland' },
      { path: '/ndt-training-milwaukee', anchor: 'NDT training in Milwaukee' },
      { path: '/ndt-training-minneapolis', anchor: 'NDT training in Minneapolis' },
      { path: '/ndt-training-indianapolis', anchor: 'NDT training in Indianapolis' },
      { path: '/ndt-training-cincinnati', anchor: 'NDT training in Cincinnati' },
      { path: '/ndt-training-st-louis', anchor: 'NDT training in St. Louis' },
      { path: '/ndt-training-pittsburgh', anchor: 'NDT training in Pittsburgh' },
    ],
  },
  citiesNortheast: {
    hub: { path: '/ndt-training-northeast', anchor: 'NDT training in the Northeast' },
    label: 'Northeast training cities',
    members: [
      { path: '/ndt-training-new-york', anchor: 'NDT training in New York' },
      { path: '/ndt-training-boston', anchor: 'NDT training in Boston' },
      { path: '/ndt-training-philadelphia', anchor: 'NDT training in Philadelphia' },
      { path: '/ndt-training-groton', anchor: 'NDT training in Groton' },
      { path: '/ndt-training-bath-maine', anchor: 'NDT training in Bath, Maine' },
    ],
  },
  citiesMidAtlantic: {
    hub: { path: '/ndt-training-mid-atlantic', anchor: 'NDT training in the Mid-Atlantic' },
    label: 'Mid-Atlantic training cities',
    members: [
      { path: '/ndt-training-baltimore', anchor: 'NDT training in Baltimore' },
      { path: '/ndt-training-norfolk', anchor: 'NDT training in Norfolk' },
      { path: '/ndt-training-washington-dc', anchor: 'NDT training in Washington, DC' },
    ],
  },
  citiesSoutheast: {
    hub: { path: '/ndt-training-southeast', anchor: 'NDT training in the Southeast' },
    label: 'Southeast training cities',
    members: [
      { path: '/ndt-training-atlanta', anchor: 'NDT training in Atlanta' },
      { path: '/ndt-training-nashville', anchor: 'NDT training in Nashville' },
      { path: '/ndt-training-savannah', anchor: 'NDT training in Savannah' },
      { path: '/ndt-training-north-charleston', anchor: 'NDT training in North Charleston' },
      { path: '/ndt-training-tampa', anchor: 'NDT training in Tampa' },
      { path: '/ndt-training-aiken', anchor: 'NDT training in Aiken' },
    ],
  },
  citiesPacificNorthwest: {
    hub: { path: '/ndt-training-pacific-northwest', anchor: 'NDT training in the Pacific Northwest' },
    label: 'Pacific Northwest training cities',
    members: [
      { path: '/ndt-training-seattle', anchor: 'NDT training in Seattle' },
      { path: '/ndt-training-portland', anchor: 'NDT training in Portland' },
      { path: '/ndt-training-richland', anchor: 'NDT training in Richland' },
      { path: '/ndt-training-anchorage', anchor: 'NDT training in Anchorage' },
      { path: '/ndt-training-los-angeles', anchor: 'NDT training in Los Angeles' },
    ],
  },
  citiesCanada: {
    hub: { path: '/ndt-training-canada', anchor: 'NDT training in Canada' },
    label: 'Canadian training cities',
    members: [
      { path: '/ndt-training-calgary', anchor: 'NDT training in Calgary' },
      { path: '/ndt-training-edmonton', anchor: 'NDT training in Edmonton' },
      { path: '/ndt-training-fort-mcmurray', anchor: 'NDT training in Fort McMurray' },
      { path: '/ndt-training-sarnia', anchor: 'NDT training in Sarnia' },
      { path: '/ndt-training-montreal', anchor: 'NDT training in Montreal' },
      { path: '/ndt-training-saint-john', anchor: 'NDT training in Saint John' },
      { path: '/ndt-training-halifax', anchor: 'NDT training in Halifax' },
      { path: '/ndt-training-vancouver', anchor: 'NDT training in Vancouver' },
      { path: '/ndt-training-winnipeg', anchor: 'NDT training in Winnipeg' },
    ],
  },
};

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Appends a related-links block to every cluster member and to the hub.
 * Returns counts so prerender can log what actually happened rather than
 * assuming it worked.
 */
export function applyClusterLinks(routes) {
  const byPath = new Map();
  for (const r of routes) if (r && r.path) byPath.set(r.path, r);

  const out = { linked: 0, missing: [], byCluster: {} };

  for (const [key, cluster] of Object.entries(CLUSTERS)) {
    const present = cluster.members.filter((m) => byPath.has(m.path));
    for (const m of cluster.members) if (!byPath.has(m.path)) out.missing.push(m.path);
    if (present.length < 2) continue;

    out.byCluster[key] = present.length;

    // Hub: link every member that exists. The hub is the page being lifted, so
    // it is the one place a longer list is justified.
    // One block per cluster per page, at most three blocks per page. The old
    // guard allowed one block per page in object order, which meant a hub of
    // an earlier cluster (/asnt-certification, /training-usa) could never join
    // a later one — the SNT-TC-1A spine reached 13 pages instead of ~30.
    const blocksOn = (r) => (String(r.bodyContent || '').match(/data-cluster-links=/g) || []).length;
    const hasKey = (r) => String(r.bodyContent || '').includes(`data-cluster-links="${key}"`);
    const hub = byPath.get(cluster.hub.path);
    if (hub && !hasKey(hub) && blocksOn(hub) < 3) {
      const items = present.map((m) => `<li><a href="${m.path}">${esc(m.anchor)}</a></li>`).join('');
      hub.bodyContent = (hub.bodyContent || '') +
        `\n<nav data-cluster-links="${key}" aria-label="More on ${esc(cluster.label)}">` +
        `<h2>More on ${esc(cluster.label)}</h2><ul>${items}</ul></nav>`;
      out.linked++;
    }

    // Members: link the hub plus up to 4 siblings. Rotating the start point by
    // index spreads inbound links across the cluster instead of every member
    // pointing at the same first four.
    present.forEach((m, i) => {
      const r = byPath.get(m.path);
      if (!r || hasKey(r) || blocksOn(r) >= 3) return;
      const siblings = [];
      for (let k = 1; k <= 4 && k < present.length; k++) {
        siblings.push(present[(i + k) % present.length]);
      }
      const items = [
        `<li><a href="${cluster.hub.path}">${esc(cluster.hub.anchor)}</a></li>`,
        ...siblings.map((s) => `<li><a href="${s.path}">${esc(s.anchor)}</a></li>`),
      ].join('');
      r.bodyContent = (r.bodyContent || '') +
        `\n<nav data-cluster-links="${key}" aria-label="More on ${esc(cluster.label)}">` +
        `<h2>More on ${esc(cluster.label)}</h2><ul>${items}</ul></nav>`;
      out.linked++;
    });
  }

  return out;
}
