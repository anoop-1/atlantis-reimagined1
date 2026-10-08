import VerticalTemplate, { VerticalConfig } from "./_VerticalTemplate";

const config: VerticalConfig = {
   slug: "defense",
   industryDisplay: "Defense",
   industryShort: "defense primes, naval shipyards and military depot maintenance commands",
   heroSubhead:
      "In-house NDT programs for defense primes, naval shipyards, military aviation depots, and ground-vehicle MRO operations. Built around MIL-STD-2154, MIL-STD-1907, NAVSEA technical publications (TP248, TP271) and the depot-maintenance written-practice expectations DCMA, NAVAIR, NAVSEA, AMC, AFMC, and allied defense customers audit against. Training is ASNT SNT-TC-1A; NAS 410 certification, where a depot uses it, stays with the employer.",
   primaryStandards: ["ASNT SNT-TC-1A (training scheme)", "NAS 410 (employer certification, context only)", "MIL-STD-2154", "MIL-STD-1907", "NAVSEA TP248 / TP271", "T.O. 33B-1-1 (USAF NDI)", "ASTM E1742", "ASTM E1444"],
   methods: [
      { method: "Ultrasonic Testing — Conventional + PAUT on welded structures + composite primary", levels: "Level I → III", roleFit: "Naval shipyard hull QC, aviation depot composite inspectors", codeRef: "MIL-STD-2154, NAVSEA TP271, NAS 410, ASTM E2374" },
      { method: "Eddy Current Testing — surface ECA + fastener-hole on aircraft", levels: "Level I → III", roleFit: "Aviation depot fastener-hole inspectors, helicopter dynamic component QC", codeRef: "T.O. 33B-1-1, NAS 410, ASTM E309, ASTM E3052" },
      { method: "Liquid Penetrant Testing — Type I Method C / D", levels: "Level I → II", roleFit: "Ground vehicle component MRO, casting QC", codeRef: "ASTM E1417, MIL-STD-1907, NAS 410" },
      { method: "Magnetic Particle Testing — wet fluorescent on dynamic components", levels: "Level I → II", roleFit: "Aircraft engine component MRO, naval shafting", codeRef: "ASTM E1444, MIL-STD-1907, NAS 410" },
      { method: "Radiographic Testing — film + DR for ordnance, structural castings", levels: "Level I → III", roleFit: "Ordnance QC, depot castings inspection", codeRef: "ASTM E1742, MIL-STD-453, NAVSEA TP248" },
      { method: "Visual Testing (MIL-STD-2154 context)", levels: "Level II", roleFit: "All depot inspectors as a baseline; structural visual leads", codeRef: "MIL-STD-2154, NAS 410, ASME V Article 9" },
   ],
   skillGaps: [
      { gap: "Depot inspectors holding SNT-TC-1A Level II whose records have not been reviewed against the depot's NAS 410 / MIL-STD written practice", impact: "DCMA / NAVAIR / NAVSEA audit findings; depot accreditation risk; mission-readiness consequences." },
      { gap: "PAUT operators competent on standard welds but untrained on composite primary structure (CFRP, GFRP, hybrid)", impact: "Composite inspection escapes, airworthiness directive exposure on rotorcraft and fixed-wing platforms." },
      { gap: "Fastener-hole eddy current operators inconsistent across aluminium-titanium stack-ups", impact: "Crack escapes at fastener edges on fleet-priority airframes; safety-of-flight findings." },
      { gap: "Engineers cleared and security-trained but lacking the recurrent NAS 410 / MIL-STD documentation discipline auditors expect", impact: "Cleared workforce sidelined during audit cycles; backfill from contractors at significant cost." },
   ],
   tracks: [
      { role: "Aviation Depot Inspector", progression: "Level II ET + UT + PT + MT under ASNT SNT-TC-1A, with T.O. 33B-1-1 and customer-platform procedures as practical context", coreMethods: "ET, UT, PT, MT", hoursTotal: "240–280 instructor-led + OJT set by the depot written practice" },
      { role: "Naval Shipyard Inspector", progression: "Level II UT + MT + PT + VT, mapped to MIL-STD-2154 + NAVSEA TP248 / TP271", coreMethods: "UT, MT, PT, VT", hoursTotal: "240–280 instructor-led" },
      { role: "Composite / Airframe Specialist", progression: "Level II PAUT + thermography + bond tester for primary composite", coreMethods: "PAUT, thermography, bond tester, VT", hoursTotal: "200–240 instructor-led + composite-shop weeks" },
      { role: "Ground Vehicle MRO Inspector", progression: "Level II MT + PT + UT for armored vehicle and engine MRO", coreMethods: "MT, PT, UT", hoursTotal: "160–200 instructor-led" },
      { role: "Quality Assurance Specialist (QAS) / Procedure Author", progression: "Level II foundation + procedure-writing workshop per NAS 410 / MIL-STD-1907", coreMethods: "Procedure writing + audit support", hoursTotal: "120–160 instructor-led" },
   ],
   pricing: [
      { headcount: "10–24 engineers", perHead: "Quote on request", notes: "Defense premium reflects MIL-STD documentation overhead, customer-platform bridging, and security-cleared instructor sourcing." },
      { headcount: "25–49 engineers", perHead: "Quote on request", notes: "Multi-method depot-readiness cohorts; customer-platform written practice integration." },
      { headcount: "50–99 engineers", perHead: "Quote on request", notes: "Multi-site programme; dedicated lead instructor; audit-cycle integration." },
      { headcount: "100+ engineers", perHead: "Quote on request", notes: "Depot-wide annual contract; cleared instructor bench; audit governance support." },
   ],
   deliveryNote:
      "Defense cohorts run on-site by default — most depot work is on cleared sites with controlled-access inspection equipment and customer-furnished specimens that cannot leave the facility. LMS handles SNT-TC-1A theory and recurrent method refreshers where the content is releasable. Hybrid is standard for multi-depot commands with a centralised QA function and dispersed depot floors. Where security-cleared instructors are required we surface a cleared-bench option through partner arrangements.",
   complianceFootnote:
      "Defense inspection records are subject to DCMA, NAVAIR, NAVSEA, AMC, AFMC, and equivalent allied audit cycles. The records pack is mapped to those expectations — written-practice references, instructor qualifications, exam grade sheets, vision and OJT logs — and is kept in a format the depot QAS can hand to any attending auditor without follow-up requests.",
   caseStudy: {
      headline: "Example programme — naval shipyard, multi-method in-house cohort",
      body: "Illustrative example, not a client case study. A naval shipyard ahead of an overhaul cycle might scope a programme like this: LMS theory for UT with PAUT extension, MT, PT and RT delivered alongside normal duties, then on-site practicals on the client's own equipment and reference standards, scheduled around availability windows. A procedure-writing workshop for the quality team can be mapped to the customer specifications the yard works to. Each trainee's training hours, examinations and grade sheets are recorded against the employer's written practice, an ASNT Level III reviews the records, and the employer issues certification. Cohort size, duration and schedule are agreed at scoping.",
   },
   cityLinks: [
      { slug: "houston", label: "Houston" },
      { slug: "perth", label: "Perth" },
   ],
   wordCountHint:
      "Defense NDT corporate training operates inside two constraints civil industries do not share. First, the documentation expectation runs to military standards (MIL-STD-2154, MIL-STD-1907, MIL-STD-453, NAVSEA technical publications, T.O. 33B-1-1 for USAF NDI) layered on top of NAS 410 personnel certification — that combined stack is unforgiving and the auditor expectation is sharper than any equivalent civil framework. Second, much of the inspection work is on cleared sites with controlled-access equipment, customer-furnished specimens that cannot leave the facility, and security-cleared workforce constraints that limit instructor sourcing. Our defense cohorts are built around those constraints. Atlantis cohorts are ASNT SNT-TC-1A method training; where an aviation depot certifies to NAS 410, its Responsible Level 3 decides how those training hours, vision records and OJT logs count. Atlantis does not deliver NAS 410 training or examinations. MIL-STD overlays drop in where the customer's depot procedure references the military standard rather than the civil equivalent. Customer-platform written practices (NAVAIR for naval aviation, NAVSEA for naval surface and undersea, AMC and AFMC for ground and air force depot work, plus the equivalent allied commands in Five Eyes and NATO contexts) are bridged into the cohort as separate modules so engineers move between platforms without re-learning foundational technique. Procedure-writing and quality-assurance specialist (QAS) tracks address one of the highest-leverage gaps in defense NDT: most audit findings trace to procedure-documentation issues, not technique problems. A structured workshop on procedure writing per MIL-STD-1907, NAS 410, and the dominant customer technical publication closes a measurable percentage of recurring audit findings. Per-head pricing in defense sits at the higher end of our verticals, reflecting documentation overhead, customer-platform bridging load, and where applicable the cleared-instructor bench requirement. The economics work because the alternative — losing depot accreditation or having a cleared workforce sidelined during an audit cycle — costs orders of magnitude more in mission-readiness terms. Send depot profile, customer command, and target headcount — we respond inside two business days with a written training plan and indicative quote.",
};

export default function DefenseCorporateTraining() {
   return <VerticalTemplate config={config} />;
}
