/**
 * Final thin-page stragglers — 2026-07-28.
 * ─────────────────────────────────────────────────────────────────────────────
 * Nine pages that the pattern generators in thin-page-upgrade.mjs do not match,
 * each written against what the page is actually for. Several carry real demand:
 *   /3d-scanning-services              207 impr/90d
 *   /consulting/ndt-consulting-level-iii 111
 *   /ndt-erp-software-comparison        56
 *   /asnt-level-iii-training            43
 * Purely additive — appended to whatever body the page already has.
 */

const esc = (s) =>
  String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const STRAGGLER_CONTENT = {
  '/ndt-data-management': {
    h: 'What NDT data management has to solve',
    body: `<p>Inspection data has an unusual shape: it is generated in the field on instruments that each write their own format, it must be interpreted by someone qualified for that method, it is reported to several parties in different formats, and it has to stay interpretable for decades because the next inspection interval depends on comparing it with readings taken years earlier. Most data problems in inspection businesses come from treating it as documents rather than as a dataset with identity.</p>
      <h2>The four properties that make inspection data usable later</h2>
      <ul>
        <li><strong>Location identity.</strong> A thickness reading is only comparable with an earlier one if both are bound to the same corrosion monitoring location under a permanent, never-reused identifier. Without that, a corrosion rate is arithmetic on unrelated numbers.</li>
        <li><strong>Provenance.</strong> Every record should carry the procedure revision in force, the technician's certification state and the instrument's calibration status as at the moment of examination — frozen, not looked up afterwards.</li>
        <li><strong>Format independence.</strong> Instrument-native files retained alongside an open export. A dataset readable only by one vendor's software has a shelf life set by that vendor's commercial decisions, not by your asset's life.</li>
        <li><strong>Separation of data and presentation.</strong> One dataset rendering into several client report formats. Storing the report as the primary object guarantees duplicate entry the moment a second client is involved.</li>
      </ul>
      <h2>Where it goes wrong in practice</h2>
      <p>The common failure is not loss but ambiguity: readings exist, but nobody can prove they were taken at the same place, by someone qualified, with an instrument in calibration, under the procedure revision that applied. That ambiguity surfaces at the worst possible moment — during an audit, or when an interval extension has to be defended. It is also why apparently well-run programmes fail an evidence trace on the first report an auditor picks.</p>
      <h2>What good looks like</h2>
      <p>Selecting an asset and a date range returns the inspection history, the qualification and calibration state applicable at each examination, the procedure revisions in force, and the thickness trend per location with computed corrosion rates. If that is a query, the programme is in good shape. If it is a folder structure and someone's memory, it is not.</p>
      <p>Related: <a href="/inspection-management-software">inspection management software</a> · <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/best-ndt-reporting-software-2026">NDT reporting software</a> · <a href="/blog/building-a-cml-register-that-survives-ten-years">building a CML register that survives ten years</a>. <a href="/contact">Ask about a data assessment</a>.</p>`,
  },

  '/ndt-software-features': {
    h: 'The features that actually decide an NDT software purchase',
    body: `<p>Feature tables are a poor way to choose inspection software, because what matters is behavioural rather than functional. The question is rarely "does it have certification tracking" — nearly everything claims to. It is "can an uncertified technician be dispatched", which is a completely different property.</p>
      <h2>Enforcement, not recording</h2>
      <ul>
        <li>Certification currency per method and level, enforced at dispatch, so a lapsed qualification makes assignment impossible rather than raising a warning nobody reads.</li>
        <li>Calibration status enforced the same way, covering probes, wedges and reference blocks — not only instruments.</li>
        <li>Client-specific and site-specific approvals tracked with their own expiry, independent of your internal certification cycle.</li>
        <li>Point-in-time recovery: the state of all of the above as at any historical inspection date, not merely today.</li>
      </ul>
      <h2>Field reality</h2>
      <ul>
        <li>Fully offline capture — asset lookup, form completion, photographs and sign-off all working with no connectivity, and sync that never silently overwrites field work.</li>
        <li>Forms that mirror the technique sheet in the order the work is physically performed, usable in gloves and in bad light.</li>
        <li>Media attached to a location within the asset hierarchy, not dumped into a job folder.</li>
      </ul>
      <h2>Commercial visibility</h2>
      <ul>
        <li>Job costing at work-order level including mobilisation, standby, travel, equipment and subcontracted NDT.</li>
        <li>Per-contract margin visible while the contract is running rather than at final account.</li>
      </ul>
      <h2>Exit</h2>
      <p>Full bulk export with a documented schema, available at any time. Ask for it during evaluation rather than at renewal — how hard it is to obtain is a direct measure of how hard leaving will be.</p>
      <p>Related: <a href="/ndt-inspection-software">NDT inspection software buyer's guide</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/erp">Atlantis NDT ERP</a> · <a href="/best-ndt-reporting-software-2026">reporting software compared</a>. <a href="/contact">Book a demo against your own workflow</a>.</p>`,
  },

  '/digital-twin-ndt-software': {
    h: 'What a digital twin adds on top of NDT software',
    body: `<p>Inspection software answers questions about work: who is qualified, what is scheduled, what was found, what did it cost. A digital twin answers questions about the asset: what condition is this component in, what is the risk of continuing to run it, how long can it stay in service. They operate on the same data at different resolutions, and most operators eventually need both.</p>
      <h2>The difference is in the data model</h2>
      <p>Inspection software binds a result to a job. A twin binds it to a location on the asset — a corrosion monitoring location, a weld, a shell course — with a persistent identity, so results taken years apart form a genuine time series. That single change is what makes corrosion-rate calculation, remaining-life projection and risk ranking defensible rather than indicative.</p>
      <h2>What the twin then makes possible</h2>
      <ul>
        <li>Damage mechanisms assigned per API RP 571 against actual process service, so inspection targets what is credible for that circuit instead of applying uniform coverage everywhere.</li>
        <li>Risk-based inspection under API 580/581 computed from measured corrosion rates rather than defaults — which changes which equipment is genuinely flagged.</li>
        <li>Fitness-for-service under API 579-1/ASME FFS-1 run against the stored thickness grid, with pass/fail zones rendered spatially.</li>
        <li>Spatial pattern recognition: clustering of wall loss that is invisible in a table of identifiers is obvious on a model.</li>
      </ul>
      <h2>Which to start with</h2>
      <p>If the pain is certification lapses, calibration misses, report turnaround or audit preparation, start with inspection software — the twin only inherits whatever data quality the field process produces. If the pain is defending inspection intervals, justifying capital deferral or proving remaining life, start with the twin and fix the field layer alongside it.</p>
      <p>Related: <a href="/digital-twins">Atlantis Digital Twin platform</a> · <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/ndt-inspection-software">NDT inspection software guide</a> · <a href="/digital-twin-vendor-comparison">vendor comparison</a>. <a href="/contact">Book a technical demo</a>.</p>`,
  },

  '/asnt-level-iii-training': {
    h: 'What ASNT Level III preparation actually involves',
    body: `<p>ASNT NDT Level III certification is structurally different from Level I and II. It is not a longer version of the method exam; it tests whether you can take technical responsibility for a programme — writing and approving procedures, qualifying other people, selecting methods, and defending those decisions to an auditor.</p>
      <h2>Examination structure</h2>
      <ul>
        <li><strong>Basic examination</strong> — materials and processes, common discontinuities, the certification schemes themselves (SNT-TC-1A, CP-189), and an overview of methods you are not certifying in.</li>
        <li><strong>Method examination</strong> — one per method sought, covering principles, equipment, technique selection, interpretation, codes and standards, and procedure development.</li>
        <li>The Basic is taken once and carries across methods; each additional method needs only its own method examination.</li>
      </ul>
      <h2>Where candidates typically lose marks</h2>
      <ul>
        <li>Codes and standards — the examination expects working familiarity with what the code requires, not recognition of its title.</li>
        <li>Procedure development — writing a procedure qualified for a specific material, thickness range and geometry rather than a generic document.</li>
        <li>Materials and processes on the Basic, which candidates from a single-method background routinely underestimate.</li>
        <li>Certification scheme detail — the difference between SNT-TC-1A as a recommended practice and CP-189 as a standard, and what each obliges an employer to hold.</li>
      </ul>
      <h2>Preparation approach</h2>
      <p>Structured preparation with a working Level III materially outperforms self-study, mainly because the examination rewards judgement rather than recall. Programmes run as public cohorts, as on-site corporate cohorts where several candidates prepare together, and as blended theory through <a href="/lms">Atlantis LMS</a> with supervised practical work. Candidates already holding API 510, API 570 or API 653 usually find the code-related material substantially easier.</p>
      <h2>After certification</h2>
      <p>A Level III certificate is the start of the responsibility, not the end of the study. If you will be named on a written practice, expect to own procedure approval, personnel certification, technique validation and audit defence. Many companies engage an <a href="/consulting/asnt-level-iii-consulting-services">outsourced Level III</a> alongside internal certification while that capability is being built.</p>
      <p>Related: <a href="/asnt-certification">ASNT certification pathways</a> · <a href="/training">NDT training and certification</a> · <a href="/consulting">ASNT Level III consulting</a> · <a href="/blog/ndt-level-iii-certification-requirements-guide">Level III requirements explained</a>. <a href="/contact">Ask about the next cohort</a>.</p>`,
  },

  '/digital-twin-vs-3d-model-ndt': {
    h: 'The distinction that actually matters',
    body: `<p>A 3D model is geometry. A digital twin is geometry plus live condition data plus the rules that interpret it. The practical test is simple: does the thing change when new inspection data arrives? A model does not. A twin recomputes corrosion rates, shifts remaining life and re-ranks risk.</p>
      <h2>Where each is the right answer</h2>
      <ul>
        <li><strong>A 3D model or point cloud</strong> is right for as-built capture, dimensional control, clash detection, turnaround scoping and reverse engineering. It is a snapshot, and a snapshot is exactly what those tasks need.</li>
        <li><strong>A digital twin</strong> is right when the question is about condition over time — whether a vessel runs to the next turnaround, whether an interval can be extended, whether a fitness-for-service assessment supports continued service.</li>
      </ul>
      <h2>What has to be added to turn one into the other</h2>
      <ul>
        <li>Persistent identity for every corrosion monitoring location and weld, so readings taken years apart are genuinely comparable.</li>
        <li>Ingestion of UT, PAUT, TOFD, RT, MT, PT and ET results bound to those locations rather than filed against a job.</li>
        <li>Damage-mechanism assignment per API RP 571 against actual process service.</li>
        <li>Calculation: corrosion rate, remaining life, RBI ranking under API 580/581, fitness-for-service under API 579.</li>
        <li>Provenance on every record — procedure revision, technician certification, instrument calibration as at the date of examination.</li>
      </ul>
      <h2>A common and expensive mistake</h2>
      <p>Commissioning a high-density laser scan of an entire plant before deciding what condition data will be attached to it. Geometry is rarely the constraint; reconciling the corrosion monitoring location register is. Many successful deployments start from existing isometrics and P&amp;IDs and add scan-derived geometry later, once it is clear which units justify it.</p>
      <p>Related: <a href="/digital-twins">Atlantis Digital Twin platform</a> · <a href="/3d-scanning-services">3D scanning and reality capture</a> · <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/digital-twin-roi-calculator">ROI calculator</a>. <a href="/contact">Discuss scope before you scan</a>.</p>`,
  },

  '/api-653-training': {
    h: 'What API 653 preparation covers',
    body: `<p>API 653 certifies inspectors of aboveground storage tanks — inspection, repair, alteration and reconstruction of tanks built to API 650 or its predecessors. The examination is calculation-heavy and code-reference-heavy, and candidates who arrive expecting a general NDT exam consistently underestimate it.</p>
      <h2>The reference set</h2>
      <ul>
        <li>API 653 itself — inspection intervals, minimum thickness, repair and alteration rules, reconstruction requirements.</li>
        <li>API 650 — the construction code the tank was built to, which governs what "as built" means.</li>
        <li>API 575 — recommended practice for inspection of atmospheric and low-pressure storage tanks.</li>
        <li>ASME Section IX for welding qualification and Section V for the examination methods applied.</li>
        <li>API 571 for the damage mechanisms credible in tank service.</li>
      </ul>
      <h2>The calculations that decide the result</h2>
      <ul>
        <li>Minimum required shell thickness by course, including the one-foot method and, where applicable, the variable-design-point method.</li>
        <li>Corrosion rate and remaining life from measured thickness, and the inspection interval derived from them.</li>
        <li>Floor evaluation — minimum floor thickness, MFL screening interpretation, and the settlement criteria in API 653 Annex B.</li>
        <li>Hydrostatic test requirements following repair or alteration.</li>
      </ul>
      <h2>Preparation approach</h2>
      <p>Time on calculations is the single strongest predictor of passing. Candidates who drill minimum-thickness, corrosion-rate and settlement problems until they are automatic pass comfortably; candidates who read the code and hope pattern recognition carries them do not. Tabbing the code books properly matters for paper-based testing, since much of the examination is about finding the right clause quickly.</p>
      <h2>After certification</h2>
      <p>Most API 653 inspectors go on to own a tank inspection programme rather than perform isolated inspections, which brings in interval setting, CML register quality, MFL screening interpretation and audit defence. Those are programme skills rather than examination skills — see <a href="/blog/passing-an-api-653-client-audit-evidence-pack">passing an API 653 client audit</a> for what an auditor actually examines.</p>
      <p>Related: <a href="/api-653-certification">API 653 certification guide</a> · <a href="/blog/api-653-tank-inspection-guide">API 653 tank inspection guide</a> · <a href="/training">all NDT training</a> · <a href="/consulting">ASNT Level III consulting</a>. <a href="/contact">Ask about the next API 653 cohort</a>.</p>`,
  },

  '/ndt-erp-software-comparison': {
    h: 'How to compare inspection ERP options without being misled',
    body: `<p>Comparison tables in this market are built to favour whoever published them, including ours, so the useful thing is a method rather than a verdict. The categories being compared usually solve different problems, and picking the wrong category is far more expensive than picking the wrong vendor within a category.</p>
      <h2>Step one: establish which category you are buying</h2>
      <ul>
        <li><strong>Instrument software</strong> captures and analyses data from one flaw detector. It does not run a business.</li>
        <li><strong>Generic CMMS or EAM</strong> maintains assets you own. It has no model for method-level personnel qualification or reference-block calibration traceability.</li>
        <li><strong>Owner-side integrity platforms</strong> hold the operator's mechanical integrity record. They are not built to run a contractor's crews, contracts and invoicing.</li>
        <li><strong>Inspection business management</strong> runs the company — people, equipment, scheduling, reporting, contracts, costing.</li>
      </ul>
      <h2>Step two: test enforcement, not features</h2>
      <p>In each demo tenant, expire a certification and try to dispatch that technician. Take an instrument out of calibration and try to issue it to a job. If either succeeds, the compliance capability is documentation rather than control, and it will not prevent the incident that costs you a mobilisation.</p>
      <h2>Step three: test the field path and the exit</h2>
      <p>Put the mobile app in airplane mode, complete a full inspection with photographs, restore signal and confirm nothing is lost or duplicated. Then request a complete data export with its schema. How difficult that is tells you precisely how difficult leaving will be, and it is the most reliable single signal in a vendor evaluation.</p>
      <h2>Step four: pilot narrowly, measure honestly</h2>
      <p>One crew, one demanding client contract, six weeks. Measure report turnaround time, audit-evidence assembly time and compliance gaps reaching a client gate — with a baseline captured before you start, because nobody recalls it accurately afterwards.</p>
      <p>Related: <a href="/ndt-inspection-software">NDT inspection software buyer's guide</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/blog/cmms-vs-eam-vs-inspection-management-software">CMMS vs EAM vs inspection management</a> · <a href="/erp">Atlantis NDT ERP</a>. <a href="/contact">Request a demo on your own data</a>.</p>`,
  },

  '/consulting/ndt-consulting-level-iii': {
    h: 'What an outsourced Level III engagement covers in practice',
    body: `<h2>The functions, separated</h2>
      <ul>
        <li>Written practice authoring and annual review to SNT-TC-1A, CP-189, NAS 410 or ISO 9712 — including the review most quality systems commit to and few perform.</li>
        <li>Procedure development and approval per method, qualified for the specific materials, thickness ranges and geometries in scope rather than written generically.</li>
        <li>Personnel qualification: general, specific and practical examinations, vision examination administration, and reconstruction of training and experience records where they are incomplete.</li>
        <li>Technique and equipment validation, including demonstration of coverage for phased array scan plans.</li>
        <li>Named Level III of record on your written practice, available when a client audits the programme.</li>
        <li>Independent review where a finding becomes contentious, including root-cause analysis and expert-witness support.</li>
      </ul>
      <h2>Turnaround and structure</h2>
      <p>Most procedure reviews and written-practice updates are returned signed and stamped within two to five business days. Larger scopes — building a multi-method programme, preparing an ISO 17020 accreditation package, standing up an RBI programme under API 580/581 — are scoped individually against a defined deliverable list. Engagements run per-project or on retainer; a retainer becomes the better arrangement once more than one client is auditing you.</p>
      <h2>What an engagement usually surfaces first</h2>
      <ul>
        <li>Technique sheets circulating in several uncontrolled versions beneath a controlled procedure.</li>
        <li>Certification records complete for the certificate but missing vision examinations or documented on-the-job hours.</li>
        <li>Calibration certificates held for instruments but not for probes, wedges and reference blocks.</li>
        <li>No mechanism to recover which procedure revision applied to an inspection performed two years ago.</li>
      </ul>
      <p>The first three are fixable in weeks. The fourth is structural, and it is why programmes that look compliant on paper still fail an evidence trace — see <a href="/inspection-management-software">inspection management software</a> for how that evidence is kept recoverable.</p>
      <p>Related: <a href="/consulting">NDT consulting services</a> · <a href="/consulting/rbi-program-design">RBI programme design</a> · <a href="/consulting/fitness-for-service-api-579">fitness-for-service</a> · <a href="/consulting/written-practice-development">written practice development</a> · <a href="/asnt-certification">ASNT certification</a>. <a href="/contact">Request a consultation</a>.</p>`,
  },

  '/3d-scanning-services': {
    h: 'What reality capture delivers, and what it does not',
    body: `<p>3D laser scanning, photogrammetry and drone survey produce an accurate, measurable record of an asset as it exists today. That record is the input to as-built engineering, dimensional control, clash detection, turnaround planning and digital twin construction — but it is geometry, and geometry alone answers none of the questions an integrity team is asking.</p>
      <h2>Capture methods and when each applies</h2>
      <ul>
        <li><strong>Terrestrial laser scanning</strong> — survey-grade accuracy for process plant, structures and confined spaces where dimensional precision drives the deliverable.</li>
        <li><strong>Photogrammetry</strong> — high-resolution texture and colour, useful where surface condition and coating state matter as much as dimension.</li>
        <li><strong>Drone and UAV capture</strong> — elevated structures, tank roofs, flare stacks, tailings facilities and anything where access would otherwise mean scaffold or rope access.</li>
        <li><strong>Existing BIM, CAD and isometrics</strong> — frequently the cheapest starting point. If as-builts are trustworthy, re-scanning may add nothing that changes a decision.</li>
      </ul>
      <h2>Deliverables</h2>
      <ul>
        <li>Registered point clouds in LAS, E57, RCP or RCS with stated registration accuracy.</li>
        <li>As-built models in Revit, IFC, AutoCAD or MicroStation, at a level of detail agreed against the use case rather than maximised by default.</li>
        <li>Deformation and dimensional comparison against design or against a previous scan.</li>
        <li>Geometry prepared for ingestion into a <a href="/digital-twins">digital twin</a>, where inspection data is then bound to locations on the model.</li>
      </ul>
      <h2>The decision worth making before you commission a scan</h2>
      <p>Decide first what condition data will be attached to the geometry, and at what resolution it needs to be located. Scanning an entire plant at high density before that decision is the most common way to overspend on reality capture: the constraint on a digital twin programme is almost always reconciling the corrosion monitoring location register, not capturing geometry. Scope the scan to the units where the condition data justifies it.</p>
      <p>Related: <a href="/digital-twins">Digital Twin platform</a> · <a href="/digital-twin-vs-3d-model-ndt">digital twin vs 3D model</a> · <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/consulting">ASNT Level III consulting</a>. <a href="/contact">Scope a capture programme</a>.</p>`,
  },
};

export function upgradeStragglerPages(routes, append) {
  let n = 0;
  for (const r of routes) {
    const c = STRAGGLER_CONTENT[r.path];
    if (!c) continue;
    append(r, `
    <section aria-label="${esc(c.h)}">
      <h2>${esc(c.h)}</h2>
      ${c.body}
    </section>`);
    n++;
  }
  return n;
}
