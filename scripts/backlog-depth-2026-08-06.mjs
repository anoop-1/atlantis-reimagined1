/**
 * Backlog depth — 2026-08-06 (§27.5 hand-page work).
 * Targets, demand-ranked from the thin audit:
 *   /consulting hub            677i @ 616w
 *   /ndt-connect               476i @ 441w
 *   /training/asnt-level-iii-training-{san-diego 330i, cincinnati 151i, tampa 82i, washington-dc 64i}
 *   11 /resources/* template pages (~490i combined, 420–480w each)
 * Plus: Course JSON-LD on every /ndt-training-{city} page (additional block —
 * §24.5 item; no offers/price per §18).
 * City framing on the L3 pages is KEPT (§25.2) — depth is added inside it.
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── 1. Consulting hub ────────────────────────────────────────────────────── */
const CONSULTING_HUB = `
    <section aria-label="NDT consulting services in detail">
      <h2>What NDT consulting engagements actually look like</h2>
      <p>Most consulting enquiries arrive as one of five problems. <strong>The programme problem:</strong> an inspection function that grew job by job and now cannot pass the audit its biggest client just announced — no coherent Written Practice, procedures of mixed parentage, records scattered. <strong>The authority problem:</strong> work that requires an ASNT Level III signature — procedure approval, personnel qualification — with no Level III on staff. <strong>The interval problem:</strong> equipment running on default inspection intervals that a risk-based approach per API 580/581 would rationalise, in both directions. <strong>The verdict problem:</strong> a finding that needs an engineering disposition — fitness-for-service per API 579 — rather than an automatic repair. <strong>The build problem:</strong> a new facility, product line or contract that needs inspection capability designed before day one, not retrofitted after the first nonconformance.</p>
      <h2>How engagement works</h2>
      <p>Consulting is scoped from the artefact you need at the end: an audit-ready Written Practice, an approved procedure set, a qualified crew, an RBI programme with intervals a regulator will accept, an FFS assessment with a run/repair decision an engineer signed. We state what we will examine, what we will produce, and what remains your side — typically the operational records only you hold. Remote review handles most documentation work; site presence is reserved for what genuinely requires it, which keeps the engagement lean regardless of geography.</p>
      <h2>Choosing the right service line</h2>
      <p>If the trigger is an audit or a contract requirement, start with <a href="/consulting/ndt-consulting-level-iii">outsourced Level III services</a> — the Written Practice and personnel qualification usually sit at the root. If the trigger is inspection cost or interval pressure, start with <a href="/consulting/rbi-program-design">RBI programme design</a>. If the trigger is a specific finding, go straight to <a href="/consulting/fitness-for-service-api-579">fitness-for-service assessment</a>. Unsure is also an answer — <a href="/contact?service=consulting">describe the situation</a> and we will tell you plainly which of the five problems it is, including when the honest advice is that you do not need a consultant.</p>
    </section>`;

/* ── 2. NDT Connect ───────────────────────────────────────────────────────── */
const NDT_CONNECT = `
    <section aria-label="About NDT Connect">
      <h2>What NDT Connect is</h2>
      <p>NDT Connect is a marketplace that matches companies needing inspection with qualified NDT service providers. Buyers post the scope — method, code, location, window — and receive quotes from vetted providers with verifiable certifications, instead of working a phone list. Providers get found by clients across the industries that buy inspection: oil and gas, fabrication, EPC, refining, power, marine, aerospace.</p>
      <h2>How it serves each side</h2>
      <p><strong>For buyers:</strong> one posting reaches multiple qualified providers; certifications and method coverage are visible before the first conversation; comparison happens on capability and availability, not on who answered the phone. Urgent scopes — a turnaround gap, a failed audit finding needing re-examination — are exactly where the model earns its keep.</p>
      <p><strong>For providers:</strong> listing is free, and leads arrive qualified — a posted scope with a method, a code and a deadline is a real buyer, not a directory browse. Crew downtime between contracts is the expensive silence in this business; a channel that fills it with jobs matching your certifications changes utilisation directly.</p>
      <h2>How it relates to Atlantis NDT</h2>
      <p>Atlantis builds software and services for the inspection industry; NDT Connect is the marketplace side of the family. Providers who run their operations on the <a href="/ndt-erp-solution">Atlantis ERP for inspection companies</a> keep their certifications and capability records in one place — the same records that make a marketplace profile credible. Visit <a href="https://ndtconnect.com" rel="noopener">ndtconnect.com</a> to post a scope or list your company.</p>
    </section>`;

/* ── 3. Level III training city pages — framing KEPT, depth added ─────────── */
const L3_CITY = {
  '/training/asnt-level-iii-training-san-diego': {
    name: 'San Diego',
    body: `
      <h2>Who employs Level IIIs in San Diego</h2>
      <p>San Diego's Level III demand is naval and aerospace before anything else: the shipbuilding and repair yards on the bay work under NAVSEA technical requirements that lean hard on Level III oversight, and the aerospace and defence manufacturers across the county run NAS 410 programmes where the Responsible Level III is a named, audited role. Add the region's biotech-driven pressure equipment and the utility fleet, and the market rewards a Level III who can move between military-adjacent documentation discipline and commercial code work.</p>
      <h2>The pathway from here</h2>
      <p>Most San Diego candidates arrive as Level IIs out of the yards or the aerospace shops with deep single-method experience. The Level III examinations reward breadth — the Basic examination spans materials, all methods and certification programmes — so preparation is usually about widening, not deepening. Atlantis prepares candidates through structured programmes built by practising Level IIIs, delivered on-site for employer cohorts or blended for individuals, and for companies the faster route is often engaging <a href="/consulting/ndt-consulting-level-iii">outsourced Level III authority</a> while internal candidates qualify.</p>`,
  },
  '/training/asnt-level-iii-training-cincinnati': {
    name: 'Cincinnati',
    body: `
      <h2>Who employs Level IIIs in Cincinnati</h2>
      <p>Cincinnati sits at the centre of an aero-engine economy: the engine plants and their supplier web up and down the I-75 corridor run Nadcap-audited NDT where the Level III owns procedures, technique sheets and personnel qualification — and answers for them in audits that check technical content, not just signatures. Around that core, the region's machining, casting and general manufacturing base runs industrial programmes under SNT-TC-1A, and the Ohio River's barge and terminal work adds a different code family entirely.</p>
      <h2>The pathway from here</h2>
      <p>The aerospace route and the industrial route diverge earlier here than in most cities: NAS 410 candidates need documented hours under an approved programme, while SNT-TC-1A candidates build the employer-based record. A Cincinnati Level III who holds both worlds — Nadcap audit fluency plus ASME/AWS code work — is rare and priced accordingly. Atlantis runs preparation for the ASNT Basic and method examinations, on-site for employer cohorts across the corridor, with <a href="/consulting/ndt-consulting-level-iii">interim Level III cover</a> available while candidates qualify.</p>`,
  },
  '/training/asnt-level-iii-training-tampa': {
    name: 'Tampa',
    body: `
      <h2>Who employs Level IIIs in Tampa</h2>
      <p>Tampa Bay's Level III demand tracks its industrial port: phosphate and fertiliser terminals with tank and materials-handling programmes, ship repair at the yards, the bay-side power stations, and a construction market that keeps structural inspection busy year-round. It is a working-industrial profile rather than a single-industry one — the Level III roles here typically own multi-method, multi-code programmes for service companies covering Florida and the Southeast.</p>
      <h2>The pathway from here</h2>
      <p>Service-company Level IIIs need the widest examination preparation: the role approves procedures across every method the company sells, in whatever code the client's industry runs. That breadth is exactly what the ASNT Basic examination tests. Atlantis prepares candidates through Level III-built programmes — blended theory with supervised practical for individuals, on-site cohorts for companies — and covers the gap with <a href="/consulting/ndt-consulting-level-iii">outsourced Level III services</a> where a contract needs the signature before the candidate is ready.</p>`,
  },
  '/training/asnt-level-iii-training-washington-dc': {
    name: 'Washington DC',
    body: `
      <h2>Who employs Level IIIs around Washington DC</h2>
      <p>The capital region's Level III market is infrastructure and institutions: transit systems with rail and structural examination programmes, bridge inspection across three jurisdictions, federal facilities and their contractor ecosystems, and the naval and research installations along the Potomac. The buying pattern is procurement-driven — certifications verified in writing, programmes auditable to the letter — which makes the Level III's documentation discipline worth as much as the technical judgement behind it.</p>
      <h2>The pathway from here</h2>
      <p>Candidates here often come from structural and transit inspection backgrounds, strong in VT/UT/MT under AWS and infrastructure codes, lighter in the process-industry methods the Basic examination also covers. Preparation therefore targets the unfamiliar: RT physics, eddy current, the certification-programme comparisons the examination favours. Atlantis delivers this as structured self-paced study with Level III review, or as on-site cohorts for agencies and contractors, with <a href="/consulting/ndt-consulting-level-iii">programme-level Level III support</a> for organisations that need the authority before they grow it.</p>`,
  },
};

/* ── 4. Resources templates — what the document is FOR, per template ──────── */
const RESOURCE_DEPTH = {
  'api-510-inspection-report': `
      <h2>What a defensible API 510 report contains</h2>
      <p>An API 510 vessel inspection report is the legal memory of the vessel's condition: it must let a stranger reconstruct what was examined, how, by whom, and why the verdict followed. The load-bearing fields are the ones commonly rushed — CML identity that matches the previous campaign exactly (a renamed CML orphans its history), instrument and calibration references per reading, the corrosion-rate calculation shown rather than asserted, and the inspector's determination of next internal and external intervals with its basis. The remaining-life arithmetic drives the interval; if the report shows the interval without the arithmetic, an auditor will ask, and "the software did it" is not an answer the code accepts.</p>
      <p>Common audit findings against vessel reports: thickness locations not tied to drawings, corrosion rates computed across repairs as if continuous, and reports signed by an inspector whose API 510 certification lapsed between examination and signature. Structure the template so those failures are impossible, not merely discouraged.</p>`,
  'rbi-worksheet': `
      <h2>Using the RBI worksheet honestly</h2>
      <p>A risk-based inspection worksheet is a structured argument, not a scoring exercise: probability of failure built from damage mechanisms and measured corrosion data, consequence from inventory and location, combined into a risk ranking that justifies each interval. The worksheet fails silently when its inputs go stale — default corrosion rates where measured ones exist, damage mechanisms unrevisited after a feedstock change, consequence categories copied between dissimilar items. Record the basis beside every entry; an RBI decision whose basis cannot be produced is, to an auditor, a guess with formatting.</p>
      <p>The worksheet's most valuable column is the one teams skip: what inspection finding would change this ranking. Writing it forces the interval to be falsifiable — and tells the next campaign exactly what to look for. API 580 sets the framework; API 581 the quantitative method; this worksheet is where both meet your actual equipment list.</p>`,
  'api-653-inspection-template': `
      <h2>What the API 653 template must capture</h2>
      <p>Tank inspection records live longer than careers — the corrosion rate that sets the next internal interval may compare readings taken decades apart, which makes consistency of record structure the template's whole job. The critical zones each need their own discipline: floor data as a mapped grid (MFL screening with UT prosecution of indications, not spot readings), shell courses with nominal thickness and joint efficiency recorded so the minimum-thickness calculation is reproducible, settlement as surveyed elevations against the previous survey, not impressions. The determination section must show remaining life and interval per API 653's formulas, signed by the certified inspector of record.</p>
      <p>The template should also capture what was NOT examined and why — an internal inspection that could not access under the heating coils is a scoping fact the next campaign needs, and its absence turns into a false assurance.</p>`,
  'inspection-test-plan-itp': `
      <h2>Writing an ITP that survives the project</h2>
      <p>An inspection and test plan is a contract about attention: which activities will be examined, against which acceptance criteria, at which intervention level — hold, witness, review. The classic ITP failure is intervention-point inflation: everything marked "hold" until the schedule forces wholesale waiving, at which point the document describes a control system that never operated. Assign hold points only where proceeding would bury the evidence (fit-up before welding, surfaces before coating), witness points where presence adds judgement, review elsewhere — and record every waiver with its authoriser, because waived points are the first thing a failure investigation reads.</p>
      <p>Reference documents by revision, name the acceptance criteria per activity (not "per code"), and make the sign-off columns match how the work actually flows between contractor, client and third party. An ITP nobody can execute as written is a nonconformance generator, not a quality plan.</p>`,
  'welder-qualification-test-wpqr': `
      <h2>Reading and maintaining WPQR records</h2>
      <p>A welder qualification record is only as strong as its essential variables: process, material grouping, thickness range, position, filler classification — each with qualified ranges the production work must fall inside. The template's job is to make range-checking mechanical: record what was tested AND the ranges thereby qualified, so a stranger can verify tomorrow's joint against yesterday's test without interpreting the code from scratch. The recurring audit finding is continuity: most codes lapse a qualification after a defined period without the process being used, and companies discover this retroactively — during a client audit, against welds already made. Track continuity per welder per process as a living record, not an annual scramble.</p>
      <p>File the supporting NDT and mechanical test reports with the WPQR itself; a qualification whose radiographs cannot be produced is one document request away from re-testing.</p>`,
  'training-requirements-matrix': `
      <h2>Running the matrix as a system</h2>
      <p>The training matrix earns its keep when it is derived, not decorated: each role's requirements traced to their source — the Written Practice's hours per method and level, client contract clauses, regulatory and site inductions — so that when a source changes, the affected cells are findable. Track three dates per cell (completed, expires, scheduled) and review the horizon monthly; the matrix that only records completion is a history, and histories do not prevent the lapsed-certification finding that suspends a crew.</p>
      <p>The matrix also prices decisions: cross-training a Level II into a second method against hiring, sequencing renewals before outage season, spotting the single-point-of-failure technician whose certifications nobody else holds. Those are management questions, and this document is where they become visible.</p>`,
  'api-570-piping-inspection-record': `
      <h2>What the API 570 record must hold</h2>
      <p>Piping records rise and fall on circuit integrity: the circuit definition (bounded by service, material and corrosion behaviour) is what makes CML data comparable across campaigns, so the record must carry circuit identity, class per API 570's consequence-based classification, and the injection/deadleg/CUI susceptibilities that drive extra attention. Thickness data needs the same discipline as vessels — location identity stable across campaigns, instrument and examiner attribution, rates calculated on true like-for-like comparisons. Class determines external interval; measured rate determines thickness-driven interval; the record should show both and take the shorter.</p>
      <p>The finding that recurs in piping audits: CMLs relocated without cross-reference after insulation or scaffolding constraints, splitting the history into two unjoinable halves. The template should force a mapping note whenever a location moves.</p>`,
  'daily-progress-report-dpr': `
      <h2>Making the DPR worth writing</h2>
      <p>A daily progress report has two readers with different needs: the client's project team, who need scope status against plan, and your own operations, who need the utilisation and obstruction record that explains the invoice and defends the claim. Structure for both: work completed by scope line with quantities, personnel and hours by classification, equipment deployed, and — the part that matters in disputes — delays and obstructions with times, causes and who was informed. A DPR that records "waiting on permit, 0700–1130, client informed at 0715" is claim evidence; "morning lost to permits" is an anecdote.</p>
      <p>Write findings-of-the-day as facts with references to formal reports, never as verdicts — the DPR is not the examination record, and premature conclusions in daily notes have a way of surfacing in litigation.</p>`,
  'pwht-record': `
      <h2>The PWHT record as code evidence</h2>
      <p>Post-weld heat treatment is invisible in the finished weld, which is exactly why its record carries so much weight: the chart is the only proof the metallurgical condition the design assumed actually exists. The record must tie together the procedure's required cycle (heating rate, soak temperature and time, cooling rate — each with code tolerances), the thermocouple placements against the requirement, the calibrated recorder identity, and the actual chart with excursions explained. An unexplained dip during soak is not a formality — it is a question about whether the joint met code, and the answer must be on file before the hydrotest, not reconstructed after.</p>
      <p>Cross-reference the PWHT record to the welds it covers by joint number; a chart that cannot be tied to specific joints proves nothing about any of them.</p>`,
  'ndt-written-practice-template': `
      <h2>Filling the template without inheriting its defaults</h2>
      <p>A Written Practice template is a starting structure, not a compliance document — SNT-TC-1A is a recommended practice precisely so the employer tailors it, and auditors read untouched template defaults as evidence nobody engaged. The sections that demand real decisions: training and experience hours per method and level (state yours, with the basis if they differ from Table 6.3.1), the examination structure and grading, vision requirements and recurrence, interrupted-service rules, and the named Level III under whose authority the practice operates. That last line is the one audits test first — a Written Practice whose Level III cannot describe it is a paper programme.</p>
      <p>Revise it like a controlled document: revision history, review cycle, and re-examination implications when requirements tighten. The companies that fail written-practice audits are rarely missing the document; they are missing the connection between the document and what actually happens.</p>`,
  'audit-finding-tracker': `
      <h2>Tracking findings to closure, not to paperwork</h2>
      <p>A finding tracker fails when it becomes a list of promises: finding, owner, date, "closed". The columns that make it a management tool are root cause (the audit finding is a symptom — track what actually produced it), correction versus corrective action (fixing the instance versus preventing recurrence, which auditors distinguish and so should the tracker), verification evidence for closure, and recurrence linkage — a finding that repeats across audits is a system failure wearing different clothes, and only linkage makes that visible.</p>
      <p>Review open findings by age and severity monthly; the tracker's real product is the trend line. A quality system whose findings close fast but repeat often has a tracker problem disguised as a performance record.</p>`,
};

/* ── 5. Course JSON-LD on training city pages ─────────────────────────────── */
function courseJsonLd(cityName) {
  return `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `NDT Training — Level I, II and III (${cityName})`,
    description: `ASNT SNT-TC-1A and ISO 9712 pathway NDT training for ${cityName}: UT, RT, MT, PT, VT and ET methods, delivered on-site for corporate teams or through blended cohorts. Led by practising ASNT Level IIIs.`,
    provider: { '@type': 'Organization', name: 'Atlantis NDT', sameAs: 'https://atlantisndt.com' },
    hasCourseInstance: [{
      '@type': 'CourseInstance',
      courseMode: ['Onsite', 'Blended'],
      location: { '@type': 'Place', name: cityName },
    }],
  })}</script>`;
}

/* ── application ──────────────────────────────────────────────────────────── */
export function applyBacklogDepth(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { hub: 0, connect: 0, l3: 0, resources: 0, courseLd: 0 };

  const hub = byPath.get('/consulting');
  if (hub) { append(hub, CONSULTING_HUB); out.hub++; }
  const nc = byPath.get('/ndt-connect');
  if (nc) { append(nc, NDT_CONNECT); out.connect++; }

  for (const [path, c] of Object.entries(L3_CITY)) {
    const r = byPath.get(path);
    if (r) {
      append(r, `<section aria-label="ASNT Level III training in ${esc(c.name)} in detail">${c.body}</section>`);
      out.l3++;
    }
  }

  for (const [slug, body] of Object.entries(RESOURCE_DEPTH)) {
    const r = byPath.get(`/resources/${slug}`);
    if (r) { append(r, `<section aria-label="Using this template well">${body}</section>`); out.resources++; }
  }

  // Course schema: every /ndt-training-{slug} page, name derived from the H1
  // context we already hold via the route's own path.
  for (const r of routes) {
    const m = r.path.match(/^\/ndt-training-([a-z-]+)$/);
    if (!m) continue;
    const cityName = m[1].split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
    append(r, courseJsonLd(cityName));
    out.courseLd++;
  }
  return out;
}

export function assertNoPricesInBacklogDepth() {
  const blob = CONSULTING_HUB + NDT_CONNECT + JSON.stringify(L3_CITY) + JSON.stringify(RESOURCE_DEPTH);
  const m = blob.match(/[$£€₹]\s?\d|per day|per hour|\/yr/gi);
  if (m) throw new Error(`backlog depth contains pricing: ${[...new Set(m)].join(', ')}`);
}
