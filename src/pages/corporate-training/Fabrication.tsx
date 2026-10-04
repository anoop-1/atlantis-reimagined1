import VerticalTemplate, { VerticalConfig } from "./_VerticalTemplate";

const config: VerticalConfig = {
   slug: "fabrication",
   industryDisplay: "Fabrication",
   industryShort: "fabrication shops, structural steel mills and module yards",
   heroSubhead:
      "In-house QC training for fabrication-shop welding inspectors, structural steel mills, modular-build yards, and pressure-equipment manufacturers. Built around AWS D1.1 / D1.5, ASME Section IX, ASME Section VIII, EN 1090, ISO 3834, and the AISC steel-construction quality standards owners actually contract against.",
   primaryStandards: ["AWS D1.1", "AWS D1.5 (bridge)", "ASME Section IX", "ASME Section VIII", "EN 1090-2", "ISO 3834", "AISC 360 / 303"],
   methods: [
      { method: "Visual Testing per AWS D1.1 Clause 6.9", levels: "Level I → II", roleFit: "Shop welding inspectors, owner-rep QC", codeRef: "AWS D1.1 Clause 6, ISO 17637" },
      { method: "Magnetic Particle Testing (yoke + WFMT)", levels: "Level I → II", roleFit: "All shop weld QC, structural inspectors", codeRef: "ASME V Article 7, ASTM E709, AWS D1.1 Clause 8" },
      { method: "Liquid Penetrant Testing", levels: "Level I → II", roleFit: "Stainless steel shop QC, surface defect screening", codeRef: "ASME V Article 6, ASTM E165, ISO 3452-1" },
      { method: "Ultrasonic Testing — Conventional + PAUT for structural welds", levels: "Level I → III", roleFit: "Senior shop UT inspectors, AWS D1.1 Annex K interpreters", codeRef: "AWS D1.1 Clauses 6.20 / 6.27, AWS D1.1 Annex K (PAUT), ASME V Article 4" },
      { method: "Radiographic Testing — Ir-192, Se-75, X-ray, CR/DR", levels: "Level I → III", roleFit: "Shop RT crews, pressure-vessel manufacturer QC", codeRef: "ASME V Article 2, AWS D1.1 Clause 6.17, ASME VIII Div 1 UW-51" },
      { method: "Welder + WPS / PQR qualification support", levels: "Inspector + engineer track", roleFit: "Welding engineers, QC managers", codeRef: "ASME Section IX, AWS D1.1 Clause 4" },
   ],
   skillGaps: [
      { gap: "Shop welding inspectors holding generic Level II VT without CWI / CSWIP credentials owners specify in fabrication contracts", impact: "Owner rejection of weld signoff, shop reputation damage, contract-clause penalties." },
      { gap: "PAUT operators competent on procedure execution but weak on AWS D1.1 Annex K acceptance interpretation", impact: "Shop accept / reject calls inconsistent with code; rework and rejection rates above industry baseline." },
      { gap: "RT crews trained on technique but unfamiliar with the IQI placement and shot-density requirements of AWS D1.1 Clause 6.17 vs ASME V Article 2", impact: "Shots rejected during owner audit; repeat radiography costs and schedule slip." },
      { gap: "Welding engineers writing WPS / PQR documentation that does not survive ASME Section IX scrutiny", impact: "Procedure qualification record rejected; production halts pending re-qualification." },
   ],
   tracks: [
      { role: "Shop Welding Inspector", progression: "Level II VT + MT + PT (AWS CWI or CSWIP 3.1, where the owner requires it, is sat separately through AWS or TWI)", coreMethods: "VT, MT, PT", hoursTotal: "200–240 instructor-led" },
      { role: "Shop UT / RT Inspector", progression: "Level II UT + RT, then PAUT Level II + AWS D1.1 Annex K module", coreMethods: "UT, RT, PAUT", hoursTotal: "200–260 instructor-led" },
      { role: "Pressure-Vessel Manufacturer QC", progression: "Level II UT + RT + MT + PT, then ASME Section VIII / IX module", coreMethods: "UT, RT, MT, PT + ASME VIII / IX", hoursTotal: "240–280 instructor-led" },
      { role: "Welding Engineer / Procedure Qualification", progression: "Level II foundation + WPS / PQR workshop per ASME IX and AWS D1.1", coreMethods: "Welding metallurgy + procedure qualification", hoursTotal: "120–160 instructor-led" },
      { role: "EN 1090 / ISO 3834 Compliance Lead", progression: "Level II foundation + EN 1090-2 / ISO 3834 implementation workshop", coreMethods: "EN / ISO welding QA framework", hoursTotal: "80–120 instructor-led" },
   ],
   pricing: [
      { headcount: "10–24 engineers", perHead: "Quote on request", notes: "Standard shop methods (VT, MT, PT, UT)." },
      { headcount: "25–49 engineers", perHead: "Quote on request", notes: "Multi-method tracks across visual + UT + RT + procedure-qualification support." },
      { headcount: "50–99 engineers", perHead: "Quote on request", notes: "Multi-shop programme; dedicated lead instructor; EN 1090 / ISO 3834 implementation included." },
      { headcount: "100+ engineers", perHead: "Quote on request", notes: "Multi-yard annual contract; owner-spec bridging modules." },
   ],
   deliveryNote:
      "Fabrication cohorts skew on-site. Shop welding QC is a hands-on discipline and the equipment, specimens, and procedure documents are all in the shop. LMS delivery is reserved for the underlying code theory (AWS D1.1, ASME IX, EN 1090). Hybrid is the norm for multi-shop fabricators with a centralised QA team and dispersed shop floors.",
   complianceFootnote:
      "Fabrication-shop QC documentation lives or dies during owner pre-award and ongoing source-inspection audits. We hand over an evidence pack that closes those audits — written-practice references, exam grade sheets, OJT logs, vision records, and CWI / CSWIP credential mapping — formatted to the layout the dominant owner specs in your customer base typically expect.",
   caseStudy: {
      headline: "Example programme — modular fabrication yard, multi-method QC cohort",
      body: "Illustrative example, not a client case study. A modular fabrication yard ahead of a module-build campaign might scope a programme like this: LMS theory for VT, MT, PT, UT with PAUT extension and RT delivered alongside normal duties, then on-site practicals on the client's own equipment and reference standards, scheduled around module handover gates. Welding inspectors who also need AWS CWI or CSWIP sit those through AWS or TWI separately. Each trainee's training hours, examinations and grade sheets are recorded against the employer's written practice, an ASNT Level III reviews the records, and the employer issues certification. Cohort size, duration and schedule are agreed at scoping.",
   },
   cityLinks: [
      { slug: "houston", label: "Houston" },
      { slug: "rotterdam", label: "Rotterdam" },
   ],
   wordCountHint:
      "Fabrication NDT corporate training is the highest-volume vertical we serve by headcount. Structural steel mills, pressure-vessel manufacturers, modular yards, and bridge fabricators run continuous QC operations with weld counts in the tens of thousands per month and inspector benches that turn over faster than any other industry vertical. The buyer pattern is dominated by shop QA managers who are answerable to multiple owners simultaneously — each owner has slightly different acceptance criteria, slightly different documentation expectations, and slightly different essential-variable interpretations. A corporate program that trains generic Level II without integrating the dominant owner specs in the shop's order book will produce inspectors who pass the SNT-TC-1A exam and fail at owner audit. Our fabrication cohorts are built around the codes and the owner-spec layer simultaneously. AWS D1.1 is foundational — every welding inspector cohort runs through Clause 6 visual acceptance, Clause 6.20 / 6.27 ultrasonic acceptance, and AWS D1.1 Annex K phased array. ASME Section IX procedure qualification is built into the welding engineer track because most procedure rejections trace to Section IX essential-variable failures, not technique problems. EN 1090-2 and ISO 3834 are embedded in the European-customer cohorts and increasingly in Middle East and Asian shops contracting against European buyers. Many fabrication-shop owner specs also name AWS CWI or CSWIP 3.1 / 3.2 credentials as a contract precondition; those are examined by AWS and TWI, and Atlantis does not offer CWI or CSWIP training or exam preparation. Pricing in fabrication is the most competitive across all our verticals — the per-head economics work because shop cohorts are large, the methods are standardised, and the on-site delivery does not require flying instructors to multiple sites. The 100+ engineer multi-shop annual contract is a routine arrangement; we manage the recurrent training calendar, refresh the cohort as inspectors turn over, and keep the documentation pack current for owner audits. Send order-book profile, dominant owner specs, and target headcount — we respond inside two business days with a written training plan and indicative quote.",
};

export default function FabricationCorporateTraining() {
   return <VerticalTemplate config={config} />;
}
