import VerticalTemplate, { VerticalConfig } from "./_VerticalTemplate";

const config: VerticalConfig = {
   slug: "aerospace",
   industryDisplay: "Aerospace",
   industryShort: "aerospace OEMs, MROs and Tier-1 suppliers",
   heroSubhead:
      "In-house ASNT SNT-TC-1A method training for airframe, engine, and composite inspection, run on your own parts and reference standards. Aerospace certification under NAS 410 or EN 4179 stays with your employer and its Responsible Level 3; Atlantis does not deliver NAS 410 or EN 4179 training or examinations.",
   primaryStandards: ["ASNT SNT-TC-1A (training scheme)", "NAS 410 / EN 4179 (employer certification, context only)", "Nadcap AC7114", "ASTM E2374 (PAUT for composites)", "ASTM E1742 (RT)", "Boeing BAC", "Airbus AITM"],
   methods: [
      { method: "Ultrasonic Testing — Conventional + PAUT for composites", levels: "Level I → III", roleFit: "Composite-bond inspectors, engine-blade Level II, structural inspectors", codeRef: "ASTM E2374, ASTM E494, Boeing BAC 5439, Airbus AITM 6-0011" },
      { method: "Eddy Current Testing — fastener-hole + surface ECA", levels: "Level I → III", roleFit: "Airframe fastener-hole inspectors, engine-disc surface inspectors", codeRef: "ASTM E309, ASTM E3052, NAS 410 Annex A, Boeing BAC 5980" },
      { method: "Liquid Penetrant Testing — fluorescent post-emulsifiable", levels: "Level I → II", roleFit: "Casting and forging inspectors, engine-component surface QC", codeRef: "ASTM E1417, AMS 2647, Nadcap AC7114/4" },
      { method: "Magnetic Particle Testing — wet fluorescent on engine parts", levels: "Level I → II", roleFit: "Engine-shaft inspectors, landing-gear MRO", codeRef: "ASTM E1444, AMS 2641, Nadcap AC7114/2" },
      { method: "Radiographic Testing — film + DR for castings", levels: "Level I → III", roleFit: "Casting QC, structural inspection of fittings", codeRef: "ASTM E1742, ASTM E2698, AMS 2635, Nadcap AC7114/3" },
      { method: "Thermography + Bond Tester for CFRP / GFRP", levels: "Level II", roleFit: "Composite repair stations, secondary-structure inspection", codeRef: "ASTM E2582, customer-specific essential variables" },
   ],
   skillGaps: [
      { gap: "PAUT operators inspecting CFRP without composite-specific calibration on stepped reference standards", impact: "Customer source-inspection findings; rework on flight-critical composite parts; risk of unrecorded porosity escapes." },
      { gap: "Eddy current inspectors who cannot defend probe selection for fastener-hole inspection on aluminium-titanium stack-ups", impact: "Hole-to-hole inconsistency, missed cracks at fastener edges, NTSB-relevant findings during fleet checks." },
      { gap: "Penetrant Level II inspectors whose recurrent training under the employer's NAS 410 written practice has lapsed", impact: "Nadcap AC7114/4 audit findings — accreditation lapse risks the supplier slot on a Tier-1 program." },
      { gap: "Engineers certified to SNT-TC-1A but not bridged across to the customer-specific written practice (Boeing BAC, Airbus AITM)", impact: "Customer source-inspectors reject parts at the gate even when SNT-TC-1A compliant — schedule slip on AOG and fleet-priority parts." },
   ],
   tracks: [
      { role: "Composite Inspector", progression: "Level I (PT, VT) → Level II PAUT for composites + thermography → Level III for senior", coreMethods: "PAUT, thermography, bond tester, VT", hoursTotal: "180–220 instructor-led (SNT-TC-1A) + OJT set by your written practice" },
      { role: "Engine MRO Inspector", progression: "Level I (MT, PT, VT) → Level II ET + UT → Level III pathway", coreMethods: "ET, MT, PT, UT", hoursTotal: "200–240 instructor-led + 1,200 OJT" },
      { role: "Airframe / Structures Inspector", progression: "Level II ET fastener-hole + UT structures + RT", coreMethods: "ET, UT, RT, VT", hoursTotal: "200–260 instructor-led + 1,600 OJT" },
      { role: "ASNT Level III candidate", progression: "Multi-method Level II prerequisite → ASNT Level III exam preparation → employer Level III appointment (NAS 410 Level 3 qualification runs through an outside agency or national aerospace board, not Atlantis)", coreMethods: "All Atlantis-supported methods", hoursTotal: "Method-dependent — 80–160 prep hours per ASNT Level III exam" },
      { role: "Nadcap audit lead / Quality engineer", progression: "Level II foundation in dominant method + Nadcap AC7114 procedure-writing workshop", coreMethods: "Method of choice + procedures", hoursTotal: "120–160 instructor-led + audit shadow" },
   ],
   pricing: [
      { headcount: "10–24 engineers", perHead: "Quote on request", notes: "Aerospace per-head scope reflects composite and engine practicals and the records your written practice needs." },
      { headcount: "25–49 engineers", perHead: "Quote on request", notes: "Multi-method tracks across composite + engine + structures." },
      { headcount: "50–99 engineers", perHead: "Quote on request", notes: "Dedicated ASNT NDT Level III-led instruction on-site for the duration; records organised for your Nadcap audit." },
      { headcount: "100+ engineers", perHead: "Quote on request", notes: "Multi-site OEM/MRO contract, customer-specific BAC / AITM bridging modules included." },
   ],
   deliveryNote:
      "Aerospace cohorts skew on-site for any practical method touching CFRP, GFRP, engine components, or fastener-hole inspection — the reference standards and customer-specific essential variables are too sensitive to ship. LMS handles SNT-TC-1A theory and recurrent method refreshers your Responsible Level 3 can credit under your written practice. Hybrid is the norm for multi-site OEMs with both airframe and engine sites.",
   complianceFootnote:
      "Aerospace certification under NAS 410 (US) or EN 4179 (Europe) is enforced through Nadcap audits (AC7114 family) and customer source-inspection visits. The retained-records expectation is stricter than baseline SNT-TC-1A — eye exams, OJT logs, written-practice signatures, and instructor qualifications must all be in place before a Nadcap audit cycle begins.",
   caseStudy: {
      headline: "Example programme — aerospace manufacturer moving in-house inspectors onto a customer written practice",
      body: "Illustrative example, not a client case study. An aerospace manufacturer preparing for a Nadcap audit might scope a programme like this: LMS theory for UT, PAUT and bond testing on composite structures delivered alongside normal duties, then on-site practicals on the client's own equipment and reference standards, scheduled around the production schedule. Each trainee's training hours, examinations and grade sheets are recorded against the employer's written practice, an ASNT Level III reviews the records, and the employer issues certification. Cohort size, duration and schedule are agreed at scoping.",
   },
   cityLinks: [
      { slug: "montreal", label: "Montreal" },
      { slug: "toronto", label: "Toronto" },
   ],
   wordCountHint:
      "Aerospace NDT corporate training is dominated by two specifications: NAS 410 in the United States and the broader Boeing supply chain, and EN 4179 in Europe and the Airbus supply chain. The two are technically harmonised but diverge on hour requirements, vision-test cadence, and the way customer-specific essential variables are integrated into the written practice. A corporate program that ignores those differences will pass internal audit and fail Nadcap. Our aerospace cohorts are ASNT SNT-TC-1A method training, taught against the inspection problems Nadcap AC7114 auditors look at. That means every PAUT module on composites uses stepped reference standards similar to those the customer's source-inspectors will use; every penetrant module mirrors the Type / Method / Sensitivity matrix in AMS 2647; every fluorescent magnetic particle module includes the centrifuge bath maintenance and ammeter calibration drills the AC7114/2 auditor will expect to see in the procedure. Atlantis does not deliver NAS 410 or EN 4179 training, examinations or certification: moving an SNT-TC-1A engineer onto a NAS 410 written practice is done by your Responsible Level 3, who decides how the SNT-TC-1A hours, vision records and OJT logs count. We hand over training records structured so that review is quick. Customer specifications such as Boeing BAC 5439, BAC 5980 and Airbus AITM 6-0011 are used as practical context in the method modules. Aerospace scope is usually larger than oil &amp; gas — more composite and engine practicals and more records — and the consequence of getting it wrong is also higher. A single Nadcap finding on personnel qualification can suspend the supplier from the OEM's source list while corrective action is verified, which on a wide-body program can mean nine-figure revenue exposure inside a quarter. Our role is SNT-TC-1A method training with clean, complete records, so your own program is ready for the Nadcap audit cycle and the customer source-inspection visit. Send headcount, customer-specific spec list, and Nadcap re-audit window — we respond inside two business days with a written training plan.",
};

export default function AerospaceCorporateTraining() {
   return <VerticalTemplate config={config} />;
}
