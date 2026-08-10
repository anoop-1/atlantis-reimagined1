import VerticalTemplate, { VerticalConfig } from "./_VerticalTemplate";

const config: VerticalConfig = {
   slug: "oil-gas",
   industryDisplay: "Oil &amp; Gas",
   industryShort: "oil & gas operators, NOCs and EPCs",
   heroSubhead:
      "Crew-level NDT certification programs aligned to API 510, API 570, API 653, ASME B31.3, ASME B31.4, and ASME Section V. Built for the upstream, midstream, and downstream operating realities — turnaround windows, shutdown logistics, and inspection-authority sign-off.",
   primaryStandards: ["API 510", "API 570", "API 653", "API 580/581 (RBI)", "ASME B31.3", "ASME B31.4", "ASME Section V"],
   methods: [
      { method: "Ultrasonic Testing — Conventional + PAUT + TOFD", levels: "Level I → III", roleFit: "Pressure-vessel inspectors, weld QC, turnaround leads", codeRef: "ASME V Article 4, ASME VIII Div 1 Mandatory App 12, API 510 §6.5, API 570 §5.4" },
      { method: "Radiographic Testing — Ir-192, Se-75, X-ray, CR/DR", levels: "Level I → III + RSO basics", roleFit: "Pipeline weld radiographers, fixed-equipment QC", codeRef: "ASME V Article 2, API 1104, AWS D1.1 Clause 6, 10 CFR 34" },
      { method: "MFL + Guided Wave LRUT for piping", levels: "Level II + III", roleFit: "Insulation-bearing piping inspectors, CUI screening teams", codeRef: "API 570 §5.4.4, ASTM E2775" },
      { method: "Magnetic Particle Testing (yoke + WFMT)", levels: "Level I → II", roleFit: "Welding inspectors, fabrication-shop QC", codeRef: "ASME V Article 7, ASTM E709, AWS D1.1 Clause 8" },
      { method: "Liquid Penetrant Testing", levels: "Level I → II", roleFit: "Casting / forging QC, surface-defect screening", codeRef: "ASME V Article 6, ASTM E165, ASTM E1417" },
      { method: "Visual Testing per ASME V Article 9", levels: "Level I → II", roleFit: "All inspectors as a baseline; turnaround visual leads", codeRef: "ASME V Article 9, ISO 17637, AWS D1.1 Clause 6.9" },
      { method: "API Inspector exam preparation (510 / 570 / 653)", levels: "Inspector certificate", roleFit: "Senior inspectors moving to authorised inspector roles", codeRef: "API ICP body of knowledge, ASME B31.3, ASME B31.4" },
   ],
   skillGaps: [
      { gap: "Authorised inspectors who can read PAUT scans but cannot defend the calibration to a regulator", impact: "Audit findings during ADNOC, Aramco, QatarEnergy, or BSEE inspections — scan rejected, turnaround slipped." },
      { gap: "Welding inspectors holding generic SNT-TC-1A Level II without API 1104 weld-acceptance fluency", impact: "Pipeline girth-weld rejection rates 2–3× industry baseline; rework cost in the hundreds of thousands per spread." },
      { gap: "CUI (corrosion under insulation) screening teams that conflate guided-wave attenuation with corrosion", impact: "False-positive insulation strip-outs cost $40–$120K per kilometer of piping — pure rework, no integrity benefit." },
      { gap: "API 510 / 570 / 653 candidates failing the open-book exam because they cannot navigate the code in the time limit", impact: "Pass rates below 60% on first attempt versus 82% achievable with structured prep — repeat exam fees, project delays." },
      { gap: "Vision and OJT records missing or out of date for crews mobilising to operator sites", impact: "Crew turnaway at the gate — day-rate technicians billed without producing inspections." },
   ],
   tracks: [
      { role: "Junior Inspector / Field Technician", progression: "Level I (UT, MT, PT, VT) → Level II (UT + one of MT/PT) within 12 months", coreMethods: "UT, MT, PT, VT", hoursTotal: "200–240 instructor-led + 800 OJT" },
      { role: "Authorised Pressure-Vessel Inspector candidate", progression: "Level II UT + RT, then API 510 prep + exam", coreMethods: "UT, RT, API 510 body of knowledge", hoursTotal: "120–160 instructor-led + 5-day API 510 prep" },
      { role: "Authorised Piping Inspector candidate", progression: "Level II UT + RT, then API 570 prep + exam", coreMethods: "UT, RT, ASME B31.3, API 570", hoursTotal: "120–160 instructor-led + 5-day API 570 prep" },
      { role: "Tank Inspector candidate", progression: "Level II UT + MT, then API 653 prep + exam", coreMethods: "UT, MT, API 653, API 575", hoursTotal: "100–140 instructor-led + 5-day API 653 prep" },
      { role: "PAUT / TOFD Specialist", progression: "Level II UT prerequisite → PAUT Level II → TOFD Level II → optional Level III", coreMethods: "PAUT, TOFD, ECA", hoursTotal: "160–200 instructor-led + applied scans on coupons" },
   ],
   pricing: [
      { headcount: "10–24 engineers", perHead: "Quote on request", notes: "Standard methods (UT/MT/PT/VT), Level I or II, on-site or LMS, exams included." },
      { headcount: "25–49 engineers", perHead: "Quote on request", notes: "Add RT, PAUT, or API inspector prep. On-site delivery typically optimal." },
      { headcount: "50–99 engineers", perHead: "Quote on request", notes: "Multi-cohort scheduling across turnarounds, dedicated lead instructor." },
      { headcount: "100+ engineers", perHead: "Quote on request", notes: "Multi-site annual contract, named programme manager, quarterly governance review." },
   ],
   deliveryNote:
      "Oil &amp; gas cohorts are dominated by hybrid delivery. Theory is delivered on the LMS during the build-up to a turnaround; practicals run on-site in the 2–4 weeks before shutdown so engineers are current when the unit comes down. Pure on-site is reserved for radiography (regulatory licensing, source storage) and PAUT calibration on owner-specific specimens.",
   complianceFootnote:
      "Oil &amp; gas regulators (BSEE, HSE, NEA, FANR, ADNOC HSE, Aramco IK&amp;PM) audit the written practice and personnel records first. We hand over the full evidence pack — written practice references, exam grade sheets, vision and OJT logs — formatted to the layout each regulator typically requests.",
   caseStudy: {
      headline: "Major refinery — US Gulf Coast — 64-engineer multi-method cohort, 11-week programme",
      body: "A US Gulf Coast refining group needed to certify 64 in-house inspectors across UT Level II, MT/PT Level II, RT Level I awareness, and seed 8 candidates for API 510/570 inspector exams ahead of a major catalyst-tower turnaround. Atlantis NDT delivered a hybrid cohort over 11 weeks: 6 weeks of LMS theory in parallel with normal duties, then 4 on-site practical weeks at the refinery training centre, then a 1-week API exam prep block. First-attempt API 510 pass rate was 7 of 8; first-attempt API 570 pass rate was 8 of 8. Total cost-per-head 38% below the cost the operator had previously paid sending engineers to open enrolment in third-party schools, and the SNT-TC-1A audit-ready records survived an internal IK&amp;PM review three months later with zero findings.",
   },
   cityLinks: [
      { slug: "houston", label: "Houston" },
      { slug: "dubai", label: "Dubai" },
   ],
   wordCountHint:
      "Oil &amp; gas inspection is the discipline where corporate NDT training has the highest leverage. A single wrong PAUT scan call on a hydrocracker reactor weld can mean an unplanned outage measured in millions per day. A single misread API 1104 acceptance can mean a pipeline weld rejected at hydrostatic test, blowing the turnaround critical path. Our oil &amp; gas corporate programs are built around three principles. First, every cohort maps directly to the codes the operator inspects against — API 510 for pressure vessels, API 570 for in-service piping, API 653 for storage tanks, ASME B31.3 for new process piping, ASME B31.4 for liquid pipelines, and API 1104 for cross-country welds. We do not waste cohort time on generic SNT-TC-1A theory that has no traction on what your engineers actually inspect. Second, we run cohorts to fit the turnaround clock, not the academic calendar. Theory on the LMS during the planning quarter, practicals on-site in the four weeks before shutdown, exam administration timed so successful engineers are current when the unit comes down. Third, we build the audit-ready record at the same time we deliver the training, not as an afterthought. ADNOC, Saudi Aramco, QatarEnergy, BP, Shell, ExxonMobil, Chevron, ConocoPhillips, Reliance Industries, and IOCL all run audits to slightly different layouts but ask for the same underlying evidence — written practice references, training hours mapped to SNT-TC-1A Recommended Hours Table 6.3, exam grade sheets retained five years per paragraph 9.4, vision and colour-discrimination records, and an OJT log that the supervising Level II or III has signed. Our delivery captures all of that automatically and exports it in the layout your regulator expects. The economics matter at oil &amp; gas headcount. Per-head training cost drops sharply between a 10-engineer cohort and a 100-engineer multi-site annual contract — a 100+ engineer programme typically lands 35–45% per-head below open-enrolment equivalent, and that is before the operational gain from having the whole crew trained on identical written practice rather than a patchwork of methodologies inherited from previous employers. We will quote against your specific cohort, methods, sites, and cert scheme — send headcount and we respond inside two business days with a written training plan.",
};

export default function OilGasCorporateTraining() {
   return <VerticalTemplate config={config} />;
}
