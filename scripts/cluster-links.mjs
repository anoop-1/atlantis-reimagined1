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
    const hub = byPath.get(cluster.hub.path);
    if (hub && !String(hub.bodyContent || '').includes('data-cluster-links')) {
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
      if (!r || String(r.bodyContent || '').includes('data-cluster-links')) return;
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
