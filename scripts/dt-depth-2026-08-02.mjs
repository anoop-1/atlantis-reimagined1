/**
 * Digital Twin depth — 2026-08-02.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT THE DATA SAYS (90d to 2026-07-30)
 * The DT cluster has 389 indexable pages. **331 of them earn zero impressions.**
 * The whole cluster took 4,313 impressions and 22 clicks — a 0.51% CTR.
 *
 * Query-level inspection of /digital-twins is the important finding: the page
 * shows 2,135 impressions but only 201 across 30 named queries, and what IS
 * named is brand ("atlantis platforms", 93i at position 29) or `site:`
 * operators. The category term "asset integrity digital twin" sits at position
 * 63. There is essentially no captured category demand.
 *
 * The exception — and it is a clear one — is the comparison pages. Those carry
 * genuine third-party intent: "predix digital twin" 91i, "predix alternatives"
 * 16i, "ge predix apm" 15i, "ge predix alternatives" 10i. That matches the
 * finding in CLAUDE.md 20.3 that comparison pages are the best-performing DT
 * asset class, and it is where depth is worth spending.
 *
 * SO THIS MODULE DELIBERATELY DOES NOT touch the 331 silent city permutations.
 * Per CLAUDE.md 20.2, (product x city) pages with no demand do not get more
 * investment. It upgrades only pages with measured impressions that are thin.
 *
 * Rules: no Atlantis prices anywhere (CLAUDE.md 18). Competitor positioning is
 * described qualitatively and fairly — these pages have to be defensible to a
 * reader who uses the other product.
 */

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── Competitor comparison depth ───────────────────────────────────────────
 * Each entry states what the other platform is genuinely strong at before it
 * states where Atlantis differs. A comparison page that only flatters its owner
 * is worthless to a buyer and is trivially seen through.
 */
const COMPETITORS = {
  'atlantis-dt-vs-ge-predix': {
    rival: 'GE Predix / GE Vernova APM',
    queries: 'predix digital twin · predix alternatives · ge predix apm · ge predix alternatives',
    strength:
      'Predix was built by a manufacturer that also builds the machines — turbines, generators, large rotating equipment — and that heritage shows. Where the asset is GE equipment and the failure modes are rotating-machinery failure modes, the physics models and the operational history behind them are deep, and the APM suite reaches into reliability workflows that a general platform has to be configured to reach.',
    consider:
      'Its centre of gravity is rotating equipment and generation assets. Fixed equipment integrity — pressure vessels, piping circuits, storage tanks, corrosion circuits governed by API 510, 570 and 653 — sits further from that centre, and the inspection-evidence side of the problem (technician qualification, calibration traceability, procedure revision at the time of examination) tends to be handled by adjacent systems rather than natively. Buyers also weigh how much of the value depends on the wider GE stack.',
    differs:
      'Atlantis starts from the inspection record rather than from the machine. The twin is a geometric and data model of the asset with the examination results bound to the location they describe, so a thickness reading, a weld map or a corrosion rate is attached to the component it belongs to, with the qualification and calibration evidence behind it retrievable years later. That makes it strongest exactly where fixed-equipment integrity and audit defensibility are the problem.',
  },
  'atlantis-dt-vs-aveva-pi-system': {
    rival: 'AVEVA PI System',
    queries: 'aveva pi system alternatives · pi system digital twin · osisoft pi replacement',
    strength:
      'The PI System is the reference implementation for industrial time-series data, and it earned that position. For high-frequency process historian data — collecting it reliably, storing it at scale, retrieving it fast, and giving engineers tooling to analyse it — it is mature, widely deployed, and deeply integrated into control-system estates. If the question is what a plant was doing at a given moment, PI answers it.',
    consider:
      'It is a historian first. Inspection data is not time-series data: a thickness reading at a condition monitoring location is a sparse, manually captured, procedure-governed measurement whose meaning depends on where it was taken, who took it, what they were qualified to do and which instrument was used. Representing that faithfully in a historian-shaped model takes work, and the integrity workflow around it usually lives elsewhere.',
    differs:
      'Atlantis is built around the sparse inspection measurement rather than the dense process signal. Condition monitoring locations, corrosion rates, remaining life and the evidence chain behind each number are native concepts, not things modelled on top of a tag structure. The two are complementary more often than competitive — process history explains why corrosion accelerated; the inspection record establishes what the wall is now.',
  },
  'atlantis-dt-vs-osisoft-pi': {
    rival: 'OSIsoft PI (now AVEVA PI System)',
    queries: 'osisoft pi alternatives · osisoft pi digital twin',
    strength:
      'OSIsoft built the industrial data historian category, and the product now sits within AVEVA. Its strengths are the ones described for the PI System: reliable high-frequency collection, long-horizon storage, and an analysis ecosystem engineers already know.',
    consider:
      'The same boundary applies. A historian answers questions about process behaviour over time. Fixed-equipment integrity asks a different question — what condition is this component in, on what evidence, and what does that permit it to do — and that question is governed by inspection codes rather than by process data.',
    differs:
      'Atlantis binds examination results to asset geometry and carries the qualification, calibration and procedure evidence with them, so an integrity decision can be reconstructed later. Where a PI estate already exists, the sensible architecture is usually both: process history feeding damage-rate understanding, inspection records establishing condition.',
  },
  'atlantis-dt-vs-bentley-itwin': {
    rival: 'Bentley iTwin',
    queries: 'bentley itwin alternatives · itwin digital twin platform',
    strength:
      'iTwin is exceptionally strong on engineering geometry and the infrastructure lifecycle. Where the source of truth is design and construction data — reality meshes, BIM models, large federated engineering models across disciplines — Bentley\'s handling of that geometry and its change over time is a genuine differentiator, and its infrastructure heritage is real.',
    consider:
      'Its natural gravity is design, construction and infrastructure asset management. Operating-phase inspection integrity for process equipment — corrosion circuits, CML registers, code-driven intervals, inspector qualification evidence — is a different discipline with different governing documents, and platforms rooted in the engineering model usually meet it through integration rather than natively.',
    differs:
      'Atlantis is an operating-phase platform. It assumes the asset is built and the question is its condition: what has been examined, by whom, against which procedure, with what result, and what that means for the next interval. Geometry serves the inspection record rather than the other way round.',
  },
  'atlantis-dt-vs-hexagon-eam': {
    rival: 'Hexagon EAM',
    queries: 'hexagon eam alternatives · infor eam digital twin',
    strength:
      'Hexagon EAM is a mature enterprise asset management system with strong maintenance execution, work order management, spares and materials, and the organisational reach that a full EAM deployment brings. For running a maintenance function at scale it is a serious, established product.',
    consider:
      'EAM and inspection integrity overlap without being the same thing. An EAM manages work — what needs doing, who does it, what it consumed. Integrity management asks whether equipment is fit to continue operating, which is a code-governed technical judgement resting on measurement history and damage mechanism understanding. EAM systems typically hold the inspection as a completed work order rather than as a technical record with evidence behind it.',
    differs:
      'Atlantis holds the technical record and the reasoning: measurement locations, rates, remaining life, the mechanism assumed and the evidence supporting the interval. It is designed to sit alongside an EAM, feeding it the work that integrity requires, rather than to replace maintenance execution.',
  },
  'atlantis-dt-vs-aspen-mtell': {
    rival: 'AspenTech Mtell',
    queries: 'aspen mtell alternatives · aspentech predictive maintenance',
    strength:
      'Mtell is a machine-learning product for predictive maintenance on rotating and process equipment, learning failure signatures from historical sensor data and alerting when current behaviour resembles a known precursor. Where there is dense sensor history and repeated failure modes to learn from, that approach earns its place.',
    consider:
      'It depends on sensor density and on failure history to learn from. Much fixed equipment has neither: a pressure vessel corroding slowly has no high-frequency signal announcing it, and the failure it is being protected against is one that must never happen even once, so there is nothing to train on. That is why code-driven inspection exists for this equipment class.',
    differs:
      'Atlantis addresses the inspection-governed side of the estate, where condition is established by examination on an interval justified by measured rate rather than inferred from sensor behaviour. In a mixed estate the two answer different halves of the same question, and buyers are usually better served by being clear about which half they are trying to solve.',
  },
};

/* ── Use-case depth ───────────────────────────────────────────────────────── */
const USE_CASES = {
  fpso: {
    title: 'FPSO',
    body: [
      'An FPSO carries two integrity regimes on one hull, and the interface between them is where most of the difficulty lives. The hull, ballast tanks, and marine systems fall under classification society survey. The topsides — separation, compression, water injection, flare — fall under pressure equipment and piping regimes with API and ASME lineage. The turret and mooring have their own. A twin that models only one of these leaves the operator reconciling the others by hand.',
      'Fatigue is the mechanism that distinguishes a floating production facility from the same process plant onshore. The unit stays on station through a full sea state history rather than being dry-docked on a cycle, so hull girder and local structural details accumulate cycles continuously, and topsides supports and piping see displacement that a fixed foundation would not impose. Inspection planning that treats topsides as though it were onshore plant misses the loading that is actually driving crack initiation at supports and penetrations.',
      'Access governs what is realistic. Confined-space entry to ballast tanks, splash-zone work and live-plant constraints mean examination opportunities are scarce and expensive, so the value of a twin is largely in making each opportunity count: knowing before the shutdown exactly which locations are due, which are trending, which have never been examined, and what evidence the last examination produced.',
      'The record has to survive personnel turnover and change of operator. Ownership of producing assets changes, and the integrity case has to transfer with the unit — which means measurement locations, their history, the procedures in force at the time and the qualifications of the people who executed them all need to be retrievable, not reconstructed from memory.',
    ],
  },
  'heat-exchanger': {
    title: 'Heat exchanger',
    body: [
      'Heat exchanger integrity is dominated by the tube bundle, and tube inspection produces a volume and shape of data that general asset systems handle badly. A single bundle can hold thousands of tubes, each examined along its length, each producing a trace that must be associated with a tube position in the tubesheet layout. Without that positional binding the data is a list of numbers rather than a picture of the bundle.',
      'Technique selection follows material and mechanism. Non-ferromagnetic tubing is screened with bobbin eddy current for volumetric loss, with array or rotating probes following up where circumferential cracking is suspected, because the bobbin coil averages around the circumference and can hide a short circumferential flaw. Ferromagnetic tubing needs a different approach entirely — remote field, magnetic flux leakage or partial saturation — since permeability variation swamps conventional eddy current.',
      'The decisions the data feeds are plugging and retubing. A plugging decision is per-tube; a retube decision is about the population and its trend. Both need history: a bundle where the same quadrant degrades each cycle is telling you something about flow distribution or maldistribution that a single inspection cannot, and that pattern is only visible when successive inspections are held in the same positional model.',
      'Damage mechanisms worth planning around include under-deposit corrosion where flow is poor, erosion at tube inlets where turbulence is highest, vibration-induced fretting at baffles, and stress corrosion cracking where chlorides concentrate. Each has a characteristic location, which is the argument for planning examination by mechanism rather than sampling uniformly.',
    ],
  },
};

/* ── ROI calculator depth ──────────────────────────────────────────────────
 * This page holds position 4.7 — the strongest DT position on the site — on 388
 * words. No Atlantis pricing appears here (CLAUDE.md 18); the page teaches how
 * to build the case, which is what someone at that query stage actually needs.
 */
const ROI_BODY = `
    <section aria-label="How to build a digital twin business case">
      <h2>What a digital twin business case is actually made of</h2>
      <p>Most digital twin business cases fail review for the same reason: they are built from vendor benefit claims rather than from the operator's own numbers. A case that survives scrutiny is assembled from costs the organisation already tracks, and it names the mechanism by which each one changes. The categories below are the ones that reliably survive a finance review.</p>

      <h2>Deferred and avoided shutdown scope</h2>
      <p>The largest single line in most integrity business cases is not inspection cost — it is production. Work that must be done during a shutdown competes for critical-path time, and scope that can be moved to an online technique, deferred on justified evidence, or eliminated because the equipment is demonstrably not degrading releases hours on that path. To model it honestly you need two things your organisation already has: the value of an hour of deferred production, and the historical proportion of shutdown scope that turned out to be confirmatory rather than corrective.</p>

      <h2>Inspection effort that produces no decision</h2>
      <p>Count the examinations performed in the last cycle whose result changed nothing — no repair, no interval change, no re-rate. That work was not wasted in a safety sense, but it was spent to confirm what evidence already implied. Risk-based methods exist to redirect that effort, and a twin makes the redirection auditable rather than merely asserted. The saving is real and it is measurable from your own history.</p>

      <h2>Data retrieval and rework</h2>
      <p>Time spent locating the previous inspection report, establishing which procedure revision applied, or confirming that a technician was certified for the method on the date of examination is pure overhead, and it recurs at every audit and every handover. It is also easy to quantify: ask the integrity team how long the last audit response took, and how much of that was retrieval rather than analysis.</p>

      <h2>Re-inspection caused by unusable records</h2>
      <p>Examinations get repeated because the original data cannot be located, cannot be tied to a location with confidence, or was captured in a form nobody can now interpret. Every re-inspection is a full cost with no new information. Organisations are usually surprised by this number when they first count it.</p>

      <h2>Decisions that a better record would have changed</h2>
      <p>The hardest category to quantify and often the largest: equipment replaced early because remaining life could not be defended, intervals shortened because the evidence was thin, or a fitness-for-service assessment not attempted because the input data was not trustworthy. These are conservative decisions taken in the absence of good information, and they are usually rational given what was available.</p>

      <h2>What to be sceptical about</h2>
      <p>Be wary of any model resting on a claimed percentage reduction in unplanned downtime — it is the number vendors quote and the number operators cannot verify. Be wary of savings that assume headcount reduction, which rarely materialises and poisons the internal case. And insist that the benefit mechanism is named: not "improved visibility" but "these examinations move from shutdown to online, releasing this many critical-path hours."</p>

      <h2>How to size a pilot so the result means something</h2>
      <p>Pick one unit or one circuit type with a known integrity problem and a measurable baseline. Define in advance what the pilot must demonstrate and how it will be measured, and record the baseline before starting — retrospective baselines are the reason most pilots produce arguments rather than conclusions. Keep the scope narrow enough that the result arrives inside one planning cycle, because a pilot that outlives its sponsor does not get renewed.</p>

      <h2>Talk it through with someone who has built the case</h2>
      <p>Atlantis works with operators on exactly this, and the conversation is a technical one rather than a sales sequence: what your estate looks like, what your current inspection effort produces, and whether a twin would change any decision you are currently making. Affordable, accessible and fully customizable — and scoped to what you actually need. <a href="/contact?service=digital-twins">Ask for a working session</a>, or read how the platform handles <a href="/asset-integrity-management-software">asset integrity management</a> and <a href="/inspection-management-software">inspection records</a>.</p>
    </section>`;

/* ── Application ───────────────────────────────────────────────────────────── */

function competitorBlock(slug, c) {
  return `
    <section aria-label="${esc(c.rival)} compared">
      <h2>What ${esc(c.rival)} is genuinely good at</h2>
      <p>${c.strength}</p>

      <h2>Where buyers find its edges</h2>
      <p>${c.consider}</p>

      <h2>How Atlantis differs</h2>
      <p>${c.differs}</p>

      <h2>Choosing between them honestly</h2>
      <p>The useful question is not which platform is better but which problem you are solving first. If the dominant problem is process behaviour, rotating-equipment reliability, or engineering geometry, the platform built for that will serve you better and you should buy it. If the dominant problem is fixed-equipment integrity — establishing condition from examination, defending an interval, and producing evidence years later that the decision was sound — that is the problem Atlantis was built around. Estates of any size usually end up with more than one system, and the integration boundary is worth designing deliberately rather than discovering later.</p>

      <h2>What to test during evaluation</h2>
      <p>Ask each vendor to load a real corrosion circuit from your own data, with its measurement history, and to show the remaining-life calculation and the evidence chain behind it. Ask what happens when a procedure is revised — whether prior results remain associated with the revision in force at the time. Ask how data leaves the system if you stop using it. Those three questions separate platforms faster than any feature matrix, and they are the ones a demo script does not anticipate.</p>

      <p>Related reading: <a href="/digital-twins">the Atlantis digital twin platform</a> · <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/digital-twin-vendor-comparison">how to compare digital twin vendors</a> · <a href="/contact?service=digital-twins">book a technical walkthrough</a>.</p>
    </section>`;
}

function useCaseBlock(u) {
  return `
    <section aria-label="${esc(u.title)} digital twin detail">
      <h2>What makes ${esc(u.title.toLowerCase())} integrity different</h2>
      ${u.body.map((p) => `<p>${p}</p>`).join('\n      ')}
      <p>Related: <a href="/digital-twins">digital twin platform</a> · <a href="/asset-integrity-management-software">asset integrity management</a> · <a href="/inspection-management-software">inspection records</a> · <a href="/contact?service=digital-twins">discuss your asset</a>.</p>
    </section>`;
}

/**
 * @param routes  prerender route list
 * @param append  (route, html) => void  from thin-page-upgrade.mjs
 * @returns count of pages deepened
 */
export function applyDtDepth(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let n = 0;

  for (const [slug, c] of Object.entries(COMPETITORS)) {
    const r = byPath.get(`/compare/${slug}`);
    if (!r) continue;
    append(r, competitorBlock(slug, c));
    n++;
  }

  for (const [slug, u] of Object.entries(USE_CASES)) {
    const r = byPath.get(`/digital-twins/${slug}`);
    if (!r) continue;
    append(r, useCaseBlock(u));
    n++;
  }

  const roi = byPath.get('/digital-twin-roi-calculator');
  if (roi) { append(roi, ROI_BODY); n++; }

  return n;
}

/** Pages this module targets, for reporting and for the no-pricing audit. */
export const DT_DEPTH_PATHS = [
  ...Object.keys(COMPETITORS).map((s) => `/compare/${s}`),
  ...Object.keys(USE_CASES).map((s) => `/digital-twins/${s}`),
  '/digital-twin-roi-calculator',
];
