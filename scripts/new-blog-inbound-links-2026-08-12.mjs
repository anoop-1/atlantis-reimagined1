/**
 * Inbound links for the 2026-08-12 blog set — 2026-08-12.
 * ─────────────────────────────────────────────────────────────────────────────
 * A new post with zero inbound internal links is an orphan: crawled late,
 * ranked poorly, and invisible to the PageRank already flowing through the
 * site. All eight posts shipped with 0 inbound links — this fixes that before
 * Google ever sees them.
 *
 * Each link is placed on a page that ALREADY has measured demand and is
 * topically adjacent, with anchor text describing the destination rather than
 * "read more". Sources chosen from GSC impressions (90d), not from convenience:
 *   /asnt-certification .................. 11,820i  -> SNT-TC-1A employer guide
 *   /blog/asnt-snt-tc-1a-certification-requirements 11,820i -> same
 *   /blog/ndt-salary-guide-2026-global .... high     -> US market structure
 *   /phased-array-ut, /glossary/…-paut .... PAUT demand -> PAUT equipment guide
 *   /erp, /ndt-erp-solution, /ndt-inspection-software -> AI in ERP + migration
 *   /digital-twins, /compare/vs-ge-vernova-apm ....... -> AI in digital twins
 *   /training, existing VR posts ..................... -> VR employer case
 *   /services/mfl-pipeline-inspection ................ -> pipeline audit prep
 */

const L = (href, text) => `<a href="${href}">${text}</a>`;

/* destination -> the anchor text used for it (kept varied per source) */
const D = {
  aiErp: '/blog/ai-in-inspection-erp-what-it-actually-does',
  aiDt: '/blog/ai-in-digital-twins-for-asset-integrity',
  vr: '/blog/vr-ndt-training-employer-business-case',
  sntEmployer: '/blog/snt-tc-1a-employer-programme-us-guide',
  migration: '/blog/inspection-contractor-spreadsheets-to-system',
  paut: '/blog/paut-equipment-selection-guide-for-inspection-companies',
  pipeline: '/blog/pipeline-audit-preparation-what-operators-check',
  market: '/blog/us-ndt-inspection-services-market-structure',
  // second batch, 2026-08-12
  buildVsBuy: '/blog/build-in-house-ndt-team-vs-contracting-us',
  vetting: '/blog/how-to-vet-an-ndt-contractor-us-checklist',
  jurisdiction: '/blog/us-pressure-equipment-jurisdiction-who-inspects-what',
  liability: '/blog/ndt-liability-chain-who-is-exposed',
  turnaround: '/blog/refinery-turnaround-ndt-what-contractors-must-deliver',
  dataCenter: '/blog/ndt-for-us-data-center-construction',
};

/* source path -> block html. Anchor wording differs per source on purpose:
   identical anchors repeated site-wide read as a footprint. */
const BLOCKS = {
  '/asnt-certification': `<p><strong>For employers:</strong> certifying your own people under SNT-TC-1A means building and defending the programme yourself — ${L(D.sntEmployer, 'what running an SNT-TC-1A programme actually requires')}, including the four findings auditors write most often. Tracking it afterwards is ${L(D.migration, 'where spreadsheets stop scaling')}.</p>`,

  '/blog/asnt-snt-tc-1a-certification-requirements': `<p>The requirements above describe what the recommended practice asks for. ${L(D.sntEmployer, 'Running the programme as a US employer')} covers the operational side — the Written Practice, the Level III authority, the examination records, and why competent technicians still fail audits.</p>`,

  '/blog/asnt-snt-tc-1a-vs-cp-189-comparison': `<p>Whichever document you adopt, the obligation lands on the employer. ${L(D.sntEmployer, 'The operational guide to running an SNT-TC-1A programme')} sets out what you have to build and maintain.</p>`,

  '/training': `<p>Also worth reading: ${L(D.vr, 'the employer’s business case for VR-based NDT training')} — what it genuinely changes about time-to-competence, and the limit that matters (simulator hours are training hours, never the experience hours certification requires). For companies building a programme from scratch, ${L(D.sntEmployer, 'the SNT-TC-1A employer guide')}.</p>`,

  '/blog/virtual-reality-vr-ndt-training-simulations': `<p>From the buying side rather than the technology side: ${L(D.vr, 'the employer’s business case for VR NDT training')} — specimen access, scheduling and repetition, and where VR stops being a substitute for supervised practical work.</p>`,

  '/blog/vr-ar-mixed-reality-ndt-training': `<p>If you are deciding whether to fund this: ${L(D.vr, 'the employer’s business case, honestly assessed')}.</p>`,

  '/erp': `<p>Two related reads: ${L(D.aiErp, 'what AI in an inspection ERP actually does')} — and what is theatre — and ${L(D.migration, 'what genuinely changes when a contractor leaves spreadsheets behind')}.</p>`,

  '/ndt-erp-solution': `<p>Further reading for the buying committee: ${L(D.aiErp, 'AI in inspection ERP — what it does and cannot do')}, ${L(D.migration, 'what changes after the move off spreadsheets')}, and ${L(D.market, 'how the US NDT services market is structured')} if you are sizing where you compete.</p>`,

  '/ndt-inspection-software': `<p>Related: ${L(D.aiErp, 'the honest split on AI features in inspection software')} — including the one function that must never be automated — and ${L(D.migration, 'the operator-side account of migrating off spreadsheets')}.</p>`,

  '/best-ndt-reporting-software-2026': `<p>See also ${L(D.aiErp, 'where AI genuinely speeds up report production')}, and ${L(D.migration, 'what actually changes once reports stop being retyped')}.</p>`,

  '/digital-twins': `<p>Related reading: ${L(D.aiDt, 'AI in digital twins for asset integrity')} — where the value is real, the data conditions that must be true first, and why fixed-equipment failure prediction from sensors alone overreaches the physics.</p>`,

  '/compare/vs-ge-vernova-apm': `<p>On the analytics question specifically: ${L(D.aiDt, 'what AI genuinely adds to an asset-integrity twin')}.</p>`,

  '/blog/ai-in-ndt-machine-learning-for-defect-detection': `<p>Beyond defect detection: ${L(D.aiErp, 'AI inside the inspection business system')} — scheduling, certification risk and report drafting — and ${L(D.aiDt, 'AI in asset-integrity digital twins')}.</p>`,

  '/phased-array-ut': `<p>Buying rather than commissioning? ${L(D.paut, 'What actually matters when you buy PAUT equipment')} — channels, probe and wedge inventory, encoders, and the data problem most buyers underestimate.</p>`,

  '/glossary/phased-array-ultrasonic-testing-paut': `<p>Practical follow-on: ${L(D.paut, 'PAUT equipment selection for inspection companies')}.</p>`,

  '/services/mfl-pipeline-inspection': `<p>Related: ${L(D.pipeline, 'what operators and regulators actually check in a pipeline integrity audit')} — including the operator-qualification trap that catches NDT-certified technicians.</p>`,

  '/blog/ndt-salary-guide-2026-global': `<p>Context for these numbers: ${L(D.market, 'how the US NDT inspection services market is structured')} — who buys, how work is awarded, and why the workforce is the binding constraint.</p>`,

  '/consulting/rbi-program-design': `<p>Related: ${L(D.pipeline, 'pipeline audit preparation — the records pulled first')}.</p>`,

  '/resources/spreadsheet-to-system-migration-plan': `<p>The narrative version of this plan: ${L(D.migration, 'what actually changes when an inspection contractor leaves spreadsheets behind')}, including what software does not solve.</p>`,
  '/consulting': `<p>Deciding how to resource inspection at all? ${L(D.buildVsBuy, 'building an in-house NDT team versus contracting it out')} sets out the volume threshold and the obligations each route carries. If you are selecting a contractor, ${L(D.vetting, 'what actually predicts contractor quality')}.</p>`,

  '/api-510-certification': `<p>On authority rather than competence: ${L(D.jurisdiction, 'who actually has authority over pressure equipment in the US')} — API certification, National Board commissions and state jurisdictions are three different things, and the difference decides who may sign.</p>`,

  '/blog/national-board-nb-23-inspection-code-2026-decoded': `<p>The buyer's view of the same landscape: ${L(D.jurisdiction, 'how US pressure-equipment inspection authority is divided')} between jurisdictions, the National Board, API certification and owner-user programmes.</p>`,

  '/blog/turnaround-shutdown-inspection-planning-2026-decoded': `<p>From the contractor's side of the same event: ${L(D.turnaround, 'what a US refinery turnaround demands from an NDT contractor')} — mobilisation without administrative failure, discovery capacity, and reporting inside the critical path.</p>`,

  '/ndt-erp-houston': `<p>Turnaround work is the Gulf Coast's defining rhythm: ${L(D.turnaround, 'what a refinery turnaround actually demands from an NDT contractor')}.</p>`,

  '/corporate-training/data-centers': `<p>The inspection scope behind this training: ${L(D.dataCenter, 'what actually gets inspected on US data-centre construction')}.</p>`,

  '/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide': `<p>Where this code is applied at volume: ${L(D.dataCenter, 'NDT in US data-centre construction')}, one of the fastest-growing structural inspection markets in the country.</p>`,

  '/blog/ndt-technician-workforce-shortage-what-helps': `<p>The resourcing decision this forces: ${L(D.buildVsBuy, 'develop an in-house team or contract it out')}.</p>`,

  '/consulting/ndt-consulting-level-iii': `<p>What the role carries: ${L(D.liability, 'who is actually exposed when an inspection is wrong')} — signing a Written Practice means signing for the competence of everyone certified under it.</p>`,

  '/resources/client-audit-evidence-pack-checklist': `<p>Why this pack matters beyond the audit: ${L(D.liability, 'the NDT liability chain and what the records decide')}. And if you are on the buying side, ${L(D.vetting, 'how to vet a contractor before award')}.</p>`,
};

export function applyNewBlogInboundLinks(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let placed = 0, missing = [];
  for (const [path, html] of Object.entries(BLOCKS)) {
    const r = byPath.get(path);
    if (!r) { missing.push(path); continue; }
    append(r, `<section aria-label="Related reading">${html}</section>`);
    placed++;
  }
  return { placed, missing: missing.length, missingPaths: missing };
}

export function assertInboundTargetsExist(routes) {
  const paths = new Set(routes.map((r) => r.path));
  const bad = Object.values(D).filter((d) => !paths.has(d));
  if (bad.length) throw new Error(`inbound-link destinations missing from routes: ${bad.join(', ')}`);
}
