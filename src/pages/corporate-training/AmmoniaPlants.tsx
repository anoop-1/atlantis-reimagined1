import VerticalTemplate, { VerticalConfig } from "./_VerticalTemplate";

const config: VerticalConfig = {
   slug: "ammonia-plants",
   industryDisplay: "Ammonia Plants",
   industryShort: "ammonia, urea and nitrogen fertilizer producers and EPCs",
   heroSubhead:
      "Corporate NDT cohorts for ammonia synthesis loops, primary and secondary reformers, urea reactors, and high-pressure synthesis-gas piping. Built around ASME Section VIII Div 2, ASME B31.3 process piping, NACE MR0103 for sour service, and the specific reformer-tube creep-inspection toolkit (LOTIS, eddy current, replication) that defines modern ammonia plant integrity programs.",
   primaryStandards: ["ASME Section VIII Div 1 + Div 2", "ASME B31.3", "API 510", "API 570", "API 579 (FFS)", "NACE MR0103 / ISO 17945", "ASME Section V", "API RP 573 (fired heaters)"],
   methods: [
      { method: "Reformer-tube creep inspection — LOTIS laser scan + ECT + replication", levels: "Level II + III specialist", roleFit: "Primary reformer integrity engineers, ammonia plant inspectors", codeRef: "API RP 573, ASTM E1351 (replication), API 579 Part 10 (creep FFS)" },
      { method: "Ultrasonic Testing — PAUT for synthesis-loop converters + TOFD for thick-wall vessels", levels: "Level II → III", roleFit: "Ammonia converter inspectors, urea reactor QC, syngas heat-exchanger integrity teams", codeRef: "ASME V Article 4, ASME VIII Div 2, NACE MR0103 §6" },
      { method: "Radiographic Testing — Ir-192 + Se-75 for syngas + ammonia piping welds", levels: "Level I → III", roleFit: "Pipeline weld radiographers, fixed-equipment QC", codeRef: "ASME V Article 2, API 1104, AWS D1.1 Clause 6" },
      { method: "Magnetic Particle Testing — WFMT + AC yoke for sour-service stress-corrosion", levels: "Level II", roleFit: "Urea reactor inspectors, ammonia separator QC", codeRef: "ASME V Article 7, ASTM E709, NACE MR0103" },
      { method: "Hardness testing + chemical replication for HTHA + sulfide-stress surveillance", levels: "Level II specialist", roleFit: "Reformer integrity engineers, ammonia synthesis-loop inspectors", codeRef: "ASTM E384, ASTM E10, API RP 941 (HTHA), NACE MR0103" },
      { method: "Liquid Penetrant Testing — urea-grade stainless inspection", levels: "Level II", roleFit: "Urea high-pressure stripper QC, ammonia carrier inspectors", codeRef: "ASME V Article 6, ASTM E165" },
      { method: "API Inspector exam preparation (510 / 570)", levels: "Inspector certificate", roleFit: "Senior inspectors moving to authorised inspector roles", codeRef: "API ICP body of knowledge, ASME B31.3" },
   ],
   skillGaps: [
      { gap: "Reformer-tube inspectors trained on LOTIS only, without the replication + hardness backup discipline that defines the modern ammonia plant integrity program", impact: "Tubes flagged for replacement that have remaining life; or worse, tubes accepted that fail in the next campaign — unplanned outage measured in millions per day." },
      { gap: "Pressure-vessel inspectors fluent in API 510 but unfamiliar with API 579 fitness-for-service for creep + HTHA damage", impact: "FFS decisions outsourced unnecessarily to specialist consultants at $100K+ per assessment; or accept/reject calls made on rule-of-thumb without code defence." },
      { gap: "Welding inspectors holding AWS CWI without NACE MR0103 sulfide-stress-cracking awareness on sour-service welds", impact: "Heat-affected zone hardness exceedances on sour-service welds; rework cost in the hundreds of thousands per spread on capital projects." },
      { gap: "PAUT operators trained on hydrocarbon vessels who cannot defend scan plans on ammonia synthesis converter targets (sub-surface HTHA, hydrogen attack)", impact: "Audit findings during commissioning by Yara, CF Industries, QAFCO, IFFCO — scan rejected, vessel re-inspected, ammonia plant restart delayed." },
      { gap: "Recurrent training cadence set at 5-year default rather than the 3-year cadence typical at ammonia offtaker audits", impact: "Insurer surveys and operator pre-turnaround audits flag stale qualification records — turnaround critical path delayed." },
   ],
   tracks: [
      { role: "Ammonia Plant Inspector (Pressure Vessels)", progression: "Level II UT + RT + MT + PT, then API 510 + API 579 FFS module", coreMethods: "UT, RT, MT, PT + API 510 + API 579", hoursTotal: "260–300 instructor-led + 5-day API 510 prep + 3-day API 579 module" },
      { role: "Reformer Integrity Engineer", progression: "Level II UT + MT + replication + hardness, then API RP 573 + API RP 941 module", coreMethods: "UT, MT, replication, hardness", hoursTotal: "240–280 instructor-led + LOTIS + ECT shadow" },
      { role: "Urea Reactor Inspector", progression: "Level II UT + RT + MT + PT, then API 510 + NACE MR0103 module", coreMethods: "UT, RT, MT, PT + API 510 + NACE MR0103", hoursTotal: "240–280 instructor-led + 5-day API 510 prep" },
      { role: "Ammonia Piping Inspector", progression: "Level II UT + RT + MT, then API 570 inspector + API 1104 pipeline module", coreMethods: "UT, RT, MT + API 570 + API 1104", hoursTotal: "220–260 instructor-led + 5-day API 570 + 3-day API 1104 module" },
      { role: "Authorised Pressure-Vessel Inspector candidate (API 510)", progression: "Level II UT + RT prerequisite, then API 510 prep + exam", coreMethods: "UT, RT + API 510 body of knowledge", hoursTotal: "140–180 instructor-led + 5-day API 510 prep" },
   ],
   pricing: [
      { headcount: "10–24 engineers", perHead: "Quote on request", notes: "Standard methods + reformer-specific module + API 510 prep." },
      { headcount: "25–49 engineers", perHead: "Quote on request", notes: "Multi-method tracks across reformers + synthesis loop + urea." },
      { headcount: "50–99 engineers", perHead: "Quote on request", notes: "Multi-site ammonia operator programme; dedicated lead instructor." },
      { headcount: "100+ engineers", perHead: "Quote on request", notes: "Multi-asset annual contract; reformer-specific written-practice bridging included." },
   ],
   deliveryNote:
      "Ammonia plant cohorts are dominated by hybrid delivery, with reformer-integrity practicals running as a separate on-site workshop during planned outages. Theory on the LMS during the build-up to a turnaround; practicals on-site in the 2–4 weeks before shutdown; reformer LOTIS / ECT / replication workshops scheduled to coincide with reformer tube-pull events. AWS D1.1 + B31.3 + ASME VIII inspection is delivered on the operator's own coupons and weld test plates so essential-variable transfer is genuine.",
   complianceFootnote:
      "Ammonia plant audits (Yara, CF Industries, QAFCO, IFFCO, Nutrien, OCI Nitrogen) all run to slightly different layouts but ask for the same underlying evidence — SNT-TC-1A written practice references, training hours mapped to Recommended Hours Table 6.3, exam grade sheets retained five years, vision and OJT logs signed by the supervising Level II or III, and the reformer-specific written practice for LOTIS / ECT / replication competence. Our delivery captures all of that automatically and exports it in the layout your operator and lender's engineer expect.",
   caseStudy: {
      headline: "Major ammonia / urea operator — Middle East — 42-engineer multi-method cohort, 12-week programme",
      body: "A major Middle Eastern ammonia / urea operator (3.6 MTPA ammonia + 4.4 MTPA urea capacity) needed to certify 42 in-house inspectors across UT Level II, RT Level II, MT/PT Level II, the reformer-integrity track (LOTIS + ECT + replication), and seed 14 candidates for API 510 inspector exam ahead of a major synthesis-loop turnaround. Atlantis NDT delivered a hybrid cohort over 12 weeks: 6 weeks LMS theory in parallel with normal duties, 4 on-site practical weeks at the operator's training centre, 1 week reformer-integrity workshop at the planned reformer outage, then a 1-week API 510 prep block. First-attempt API 510 pass rate was 13 of 14; the one re-take passed inside the standard window. Total cost-per-head landed 36% below the equivalent open-enrolment programme the operator had previously used, and the operator's lender's-engineer survey closed the campaign with no inspector-qualification findings.",
   },
   cityLinks: [
      { slug: "jubail", label: "Jubail" },
      { slug: "ruwais", label: "Ruwais" },
   ],
   wordCountHint:
      "Ammonia-plant NDT corporate training is one of the highest-leverage verticals in the inspection world. Modern ammonia plants run at the ragged edge of pressure-vessel and piping engineering — primary reformers operating at 800–900°C tube skin temperature, synthesis-loop converters running at 200+ bar with hydrogen partial pressures that drive HTHA risk, urea high-pressure strippers running in some of the most aggressive corrosion environments in the chemical industry. A single wrong reformer-tube call in a planned outage can mean an unplanned trip in the next campaign measured in millions of dollars per day of lost production. A single misread API 510 acceptance on a synthesis-loop converter can mean a vessel taken out of service unnecessarily or, worse, accepted on rule-of-thumb without code defence. Our ammonia cohorts are built around three principles. First, every cohort maps directly to the codes the operator inspects against — ASME Section VIII Div 1 and Div 2 for vessels, API 510 for in-service pressure-vessel inspection, API 570 for in-service piping, API 579 for fitness-for-service decisions on creep and HTHA damage, NACE MR0103 / ISO 17945 for sour-service welds (urea, sour syngas), and API RP 573 + API RP 941 for fired-heater and HTHA-specific integrity work. We do not waste cohort time on generic SNT-TC-1A theory that has no traction on what your engineers actually inspect on an ammonia plant. Second, we run reformer-integrity practicals as a separate workshop scheduled to coincide with a planned reformer tube-pull event so engineers learn LOTIS, ECT, and replication on the actual tubes they will be inspecting in the next outage. Third, we build the audit-ready record at the same time we deliver the training, not as an afterthought. Yara, CF Industries, QAFCO, IFFCO, Nutrien, OCI Nitrogen, and the major lender's engineers all run audits to slightly different layouts but ask for the same underlying evidence pack. Our delivery captures all of that automatically. The economics are decisive at ammonia operator headcount. Per-head training cost drops sharply between a 10-engineer cohort and a 100-engineer multi-site annual contract — a 100+ engineer programme typically lands 35–45% per-head below open-enrolment equivalent, and that is before the operational gain from having the whole crew trained on identical written practice rather than a patchwork inherited from previous employers. Send headcount, asset mix, and recurrent cadence — we respond inside two business days with a written training plan and indicative quote.",
};

export default function AmmoniaPlantsCorporateTraining() {
   return <VerticalTemplate config={config} />;
}
