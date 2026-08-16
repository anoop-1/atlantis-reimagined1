/**
 * Consulting × Industry nationals — 2026-08-16 (Phase C1, owner matrix directive).
 * ─────────────────────────────────────────────────────────────────────────────
 * Harvest evidence (phase-harvest-consulting-2026-08-16.json, USA 90d):
 * industry-shaped consulting queries land on CITY permutations — "oil & gas
 * ndt solutions" (12i) → /industry/oil-gas-ndt-los-angeles, "maritime ndt
 * services" (11i) → /industry/marine-ndt-new-orleans, "aerospace ndt
 * solutions" (10i) → /industry/aerospace-ndt-new-york. National intent hitting
 * city pages at p35–60 = the §40.3 wrong-page shape. These five nationals own
 * that intent.
 *
 * DECIDED BY THE DATA (recorded): NO consulting × industry × CITY cells. The
 * whole industry bucket is 48 impressions; the city dimension for these
 * sectors already shipped TODAY as researched training cells, and duplicating
 * that research on a near-zero-demand consulting axis manufactures
 * permutations (§20.2). Each national instead links the researched assets
 * that exist.
 *
 * Audience: sector engineering / asset / QA managers BUYING Level III
 * authority and programme support — not candidates.
 * §18 no pricing · §24.2 mobilised model, no fake presence.
 */

export const CONSULTING_INDUSTRIES = {
  maritime: {
    name: 'Maritime & Shipbuilding',
    h1: 'Maritime NDT Consulting — Level III Authority for Yards, Fleets and Class Surveys',
    title: 'Maritime NDT Consulting — Shipyard & Marine Level III Services',
    desc: 'ASNT Level III consulting for maritime work: written practices that survive NAVSEA and class audits, procedure approval for thick-section and aluminium scope, and survey-ready examination records.',
    problem: `Maritime examination programmes answer to two masters — classification societies on the commercial side, NAVSEA technical authority on the naval side — and both audit the programme, not just the welds. The findings that stop a yard are rarely technical: they are written practices that do not match what technicians actually do, procedure revisions that never reached the deck, and records a surveyor cannot reconstruct. That is programme work, and it is what a Level III of record exists to own.`,
    delivers: `A maritime engagement typically covers: a written practice aligned to the actual method scope (thick-section UT, production MT, aluminium PT, formal VT); procedure approval and technique qualification for erection-joint and repair scope, including phased array where film is impractical; examiner oversight and certification sign-off where the yard's own Level III coverage is thin; and audit defence — sitting across the table when the class surveyor or the customer's technical authority reads your records. Where naval flow-downs apply, the practice is written to survive that audit specifically, because a generic industrial document does not.`,
    mechanisms: `Marine damage drives the scope: fatigue at structural details, corrosion in ballast and cargo spaces, weld defects locked in at construction that surface as cracking in service. The examination programme has to be built around where ships actually fail — which is why survey-cycle VT and thickness campaigns dominate in-service work, and why acceptance criteria come from class rules rather than shore-side codes.`,
    regime: `Classification society rules (ABS above all in US work) govern commercial survey and acceptance; NAVSEA technical publications govern naval work with qualification requirements layered over SNT-TC-1A; and repair work inherits whichever regime the hull answers to. A consulting Level III who has worked both regimes reads the difference correctly — one is an independent certifier, the other a customer's technical authority — and writes the programme accordingly.`,
    markets: [
      ['/maritime-ndt-training-pascagoula', 'Pascagoula (Ingalls)'],
      ['/maritime-ndt-training-groton', 'Groton (Electric Boat)'],
      ['/maritime-ndt-training-bath-maine', 'Bath (BIW)'],
      ['/maritime-ndt-training-newport-news', 'Newport News'],
      ['/maritime-ndt-training-norfolk', 'Norfolk repair'],
      ['/maritime-ndt-training-san-diego', 'San Diego'],
    ],
    related: [['/blog/ship-hull-and-propulsion-system-inspection', 'hull and propulsion inspection'], ['/maritime-ndt-training', 'maritime NDT training']],
  },
  aerospace: {
    name: 'Aerospace Manufacturing',
    h1: 'Aerospace NDT Consulting — NAS 410 Programmes, Nadcap Readiness and OEM Approval',
    title: 'Aerospace NDT Consulting — NAS 410 & Nadcap Programme Support',
    desc: 'NDT consulting for aerospace manufacturers: NAS 410 programme structure, responsible Level 3 support, Nadcap audit readiness, and OEM approval navigation for suppliers.',
    problem: `Aerospace NDT lives or dies on programme paperwork: NAS 410 demands a named responsible Level 3, Nadcap audits the special process itself checklist line by checklist line, and every OEM adds approval requirements per programme. A supplier can run technically excellent examination and still fail — because the qualification records, the procedure revision control or the technique sheets do not match what the auditor's checklist expects. Suppliers entering aerospace from general industry hit this wall hardest.`,
    delivers: `An aerospace engagement typically covers: building or repairing the NAS 410 structure (written practice, qualification records, examination administration) ahead of a Nadcap audit; acting as or supporting the responsible Level 3 where the supplier has none; procedure and technique-sheet development matched to OEM requirements; penetrant-line and ET process audits against the actual checklist; and the SNT-TC-1A-to-NAS 410 bridge for shops crossing into aerospace work — which is planned qualification work, not a paperwork swap.`,
    mechanisms: `The examination scope follows aerospace failure modes: fatigue cracking at fastener holes and machined features (ET), surface-connected defects in non-magnetic alloys (fluorescent PT at line scale), internal soundness of forgings and castings (UT/RT), and bond and laminate integrity in composite structure — the fastest-growing scope and the one general-industry programmes least prepare for.`,
    regime: `NAS 410 / EN 4179 set personnel qualification with named responsible Level 3 authority; Nadcap accredits the process; AS9100 wraps the quality system; and OEM source approval sits above all of it. The order matters: chasing an OEM approval before the NAS 410 base is sound wastes the audit fee.`,
    markets: [
      ['/aerospace-ndt-training-wichita', 'Wichita'],
      ['/aerospace-ndt-training-east-hartford', 'East Hartford (P&W corridor)'],
      ['/aerospace-ndt-training-north-charleston', 'North Charleston (787)'],
      ['/aerospace-ndt-training-savannah', 'Savannah (Gulfstream)'],
    ],
    related: [['/blog/aerospace-composite-inspection-ndt-methods-guide', 'composite inspection methods'], ['/aerospace-ndt-training', 'aerospace NDT training']],
  },
  aviation: {
    name: 'Aviation MRO',
    h1: 'Aviation NDT Consulting — Part 145 Repair Stations and MRO Programme Authority',
    title: 'Aviation NDT Consulting — Part 145 MRO Level 3 Programme Support',
    desc: 'NDT consulting for aviation maintenance organisations: NAS 410 programmes inside FAA Part 145, responsible Level 3 support, and capability-list expansion for repair stations.',
    problem: `An MRO's NDT capability is only as real as its programme: the FAA audits the repair station, the airlines audit their vendors, and both expect the NAS 410 structure — responsible Level 3, current qualification records, procedures matched to the OEM manuals — to be demonstrably alive, not filed. Repair stations expanding their capability list, or losing their Level 3 to retirement, face the same gap: the work is there, the authority to certify it is not.`,
    delivers: `An aviation engagement typically covers: responsible Level 3 support or coverage for Part 145 NDT capability; programme construction for capability-list additions (a new method rating is a programme event, not just a tooling purchase); examination procedure alignment with OEM maintenance-manual requirements — where the manual, not a code, is the acceptance authority; penetrant and ET process health checks; and vendor-audit preparation for stations facing airline or OEM assessment.`,
    mechanisms: `In-service aviation damage is fatigue first — cracks at fastener rows, fittings and machined radii found by ET and fluorescent PT at sensitivities general industry never runs — plus corrosion in structure, disbonds in repairs, and the engine-hardware scope where a missed indication is unforgiving. The programme must match that reality: high-sensitivity surface methods, tight process control, and technicians qualified on the specific hardware.`,
    regime: `FAA Part 145 governs the repair station; NAS 410 governs personnel qualification with the responsible Level 3 as the keystone; OEM maintenance manuals supply the acceptance criteria per component. The manual-as-authority model is the sharpest difference from industrial work — a consulting Level 3 fluent in it saves stations from writing procedures against the wrong document.`,
    markets: [
      ['/aviation-ndt-training-san-antonio', 'San Antonio (depot + MRO cluster)'],
    ],
    related: [['/aviation-ndt-training', 'aviation NDT training'], ['/blog/veterans-transitioning-into-ndt', 'depot-trained technician pipeline']],
  },
  nuclear: {
    name: 'Nuclear',
    h1: 'Nuclear NDT Consulting — Section XI Programmes, DOE Overlays and Qualification Support',
    title: 'Nuclear NDT Consulting — ASME XI & DOE-Complex Programme Support',
    desc: 'NDT consulting for nuclear work: ASME Section XI in-service inspection programme support, 10 CFR 50 Appendix B alignment, DOE-order overlays, and examination qualification planning.',
    problem: `Nuclear examination programmes carry the industry's heaviest overlay stack: ASME Section XI scope and intervals, 10 CFR 50 Appendix B quality requirements, site-specific qualification, and — on DOE-complex work — federal orders above all of it. The programme failure modes are structural: written practices that never absorbed a code-year change, qualification records that cannot demonstrate what the auditor asks, and examination procedures qualified once and never revisited as scope moved. In an industry where the paperwork IS the product, that is where findings come from.`,
    delivers: `A nuclear engagement typically covers: written-practice and programme alignment to the applicable Section XI code year and the site's quality plan; examination procedure review and qualification planning, including where performance-demonstration requirements apply; outage examination-scope support — the planning discipline that decides whether the window holds; DOE-overlay programme work for complex sites where NQA-1-style requirements sit above SNT-TC-1A; and records remediation ahead of NRC, DOE or fleet-internal assessment.`,
    mechanisms: `The scope follows nuclear degradation: thermal fatigue and stress corrosion at dissimilar-metal and austenitic welds, steam generator tube degradation (ET's territory), erosion-corrosion in secondary systems, and the vessel and internals scope where examination technique is most tightly prescribed. Programme design starts from those mechanisms, because Section XI intervals do.`,
    regime: `ASME Section XI governs in-service inspection with 10 CFR 50 Appendix B quality programmes wrapped around it; DOE orders govern the weapons and cleanup complex; and naval-nuclear work runs its own technical authority. Access adds clearance and site-qualification layers no other sector carries. The consulting model reflects it: authority exercised inside the site's programme, documented to survive federal audit.`,
    markets: [
      ['/nuclear-ndt-training-charlotte', 'Charlotte (Carolinas fleet)'],
      ['/nuclear-ndt-training-oak-ridge', 'Oak Ridge (Y-12/ORNL)'],
      ['/nuclear-ndt-training-richland', 'Richland (Hanford)'],
      ['/nuclear-ndt-training-aiken', 'Aiken (SRS)'],
      ['/nuclear-ndt-training-idaho-falls', 'Idaho Falls (INL)'],
      ['/nuclear-ndt-training-newport-news', 'Newport News (naval nuclear)'],
    ],
    related: [['/nuclear-ndt-services', 'nuclear NDT inspection services'], ['/nuclear-ndt-training', 'nuclear NDT training']],
  },
  'oil-gas': {
    name: 'Oil & Gas',
    h1: 'Oil & Gas NDT Consulting — API Programme Authority, RBI and Turnaround Readiness',
    title: 'Oil & Gas NDT Consulting — API 510/570/653 Programme & Level III Support',
    desc: 'NDT consulting for oil and gas: API in-service inspection programme design, RBI implementation, written practice and procedure authority, and turnaround examination readiness.',
    problem: `The API regime makes the owner-operator responsible for an inspection programme most sites run through contractors — which is exactly where programmes fray. CML networks drift from the corrosion reality, written practices lag the methods actually deployed, turnaround examination scope balloons because nobody owns deferral logic, and the operator's audit finds the gap between the programme on paper and the one in the field. Level III authority that spans both — the codes and the contractor floor — is what closes it.`,
    delivers: `An oil-and-gas engagement typically covers: inspection programme design and CML rationalisation against actual damage mechanisms; RBI implementation that survives its first audit (${'the analysis is easy; the evidence chain is the work'}); written practice and procedure authority for operators and contractors, including phased array and corrosion-mapping technique approval; turnaround examination planning — scope, sequencing, acceptance routing — so findings convert to decisions inside the window; and fitness-for-service triage under API 579, where the examination data quality decides whether the assessment stands.`,
    mechanisms: `Programme design starts from damage: general and localised corrosion driving remaining-life at CMLs, corrosion under insulation where inspection access is the real cost, wet H2S and amine cracking where surface methods earn their place, high-temperature hydrogen attack at susceptible units, and mechanical fatigue at rotating and cyclic services. The API codes assume the programme knows its mechanisms; consulting work usually begins by rebuilding that assumption.`,
    regime: `API 510, 570 and 653 govern vessels, piping and tanks with ASME Section V supplying the method rules; API 580/581 frame RBI; API 579 governs fitness-for-service; and operator standards gate everything at the site boundary. Jurisdictional overlays (state pressure-vessel programmes, NBIC) apply above the codes in much of the country.`,
    markets: [
      ['/oil-gas-ndt-training-houston', 'Houston'],
      ['/oil-gas-ndt-training-deer-park', 'Deer Park'],
      ['/oil-gas-ndt-training-pasadena-texas', 'Pasadena'],
      ['/oil-gas-ndt-training-texas-city', 'Texas City'],
      ['/oil-gas-ndt-training-baton-rouge', 'Baton Rouge'],
      ['/oil-gas-ndt-training-williston', 'Williston (Bakken)'],
      ['/oil-gas-ndt-training-billings', 'Billings'],
    ],
    related: [['/consulting/rbi-program-design', 'RBI programme design'], ['/consulting/fitness-for-service-api-579', 'fitness-for-service under API 579'], ['/ndt-for-oil-gas', 'oil & gas inspection services']],
  },
};

/** Shared honest-model closer (§24.2). */
export const CONSULTING_MODEL_NOTE = `Engagements are delivered by mobilised ASNT Level III consultants working inside your programme — we do not claim local offices, and say so plainly. What you receive is authority that can be exercised now: procedure and technique approval, written practice ownership, qualification sign-off, and a consultant who sits on your side of the table when the auditor arrives.`;
