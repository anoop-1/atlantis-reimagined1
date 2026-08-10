import VerticalTemplate, { VerticalConfig } from "./_VerticalTemplate";

const config: VerticalConfig = {
   slug: "petrochemical",
   industryDisplay: "Petrochemical",
   industryShort: "petrochemical operators, olefins crackers and downstream specialty plants",
   heroSubhead:
      "In-house NDT programs for ethylene crackers, polymer plants, methanol/ammonia complexes, and specialty chemical sites. Built around API 510, API 570, API 579-1 fitness-for-service, and the high-temperature hydrogen attack (HTHA), creep, and brittle-fracture damage mechanisms petrochemical assets actually fail by.",
   primaryStandards: ["API 510", "API 570", "API 571 (damage mechanisms)", "API 579-1 / ASME FFS-1", "API 580 / 581 (RBI)", "ASME B31.3", "ASME Section VIII"],
   methods: [
      { method: "Ultrasonic Testing — Conventional + PAUT for HTHA and creep screening", levels: "Level II → III", roleFit: "Senior reliability inspectors, FFS engineers, turnaround leads", codeRef: "ASME V Article 4, API 941 (HTHA), API 579-1 Part 4 / 5 / 9" },
      { method: "Time-of-Flight Diffraction (TOFD)", levels: "Level II", roleFit: "Heavy-wall vessel inspectors, hydrocracker reactor crews", codeRef: "ASME V Article 4 Mandatory App III, ASTM E2373" },
      { method: "Magnetic Particle Testing", levels: "Level I → II", roleFit: "Welding inspectors, fabrication QC", codeRef: "ASME V Article 7, ASTM E709" },
      { method: "Liquid Penetrant Testing", levels: "Level I → II", roleFit: "Surface defect screening, austenitic stainless QC", codeRef: "ASME V Article 6, ASTM E165" },
      { method: "Radiographic Testing — Ir-192, Se-75, X-ray, CR/DR", levels: "Level I → III", roleFit: "Spool QC at fabrication shop, in-service RT during turnarounds", codeRef: "ASME V Article 2, API 1104" },
      { method: "AUT for HTHA + creep on hydroprocessing reactors", levels: "Specialist", roleFit: "Senior reactor-integrity inspectors, FFS lead", codeRef: "API 941, API 579-1, ASME V Article 4 Mandatory App VII" },
      { method: "API Inspector exam preparation (510 / 570 / 580/581)", levels: "Inspector certificate", roleFit: "Senior inspectors moving to authorised inspector / RBI lead roles", codeRef: "API ICP body of knowledge" },
   ],
   skillGaps: [
      { gap: "Inspectors with strong UT but weak damage-mechanism context — they call indications but cannot map them to API 571 damage modes", impact: "Repair / replace / monitor decisions taken on the wrong basis; FFS workload that could have been pre-empted." },
      { gap: "RBI implementations stalling because inspection authorities cannot defend the inspection plan to API 580 / 581 governance", impact: "Insurance and corporate-governance findings; inspection budget reverting to time-based intervals at 1.5–2× cost." },
      { gap: "PAUT operators competent on weld scans but untrained on HTHA screening calibration", impact: "Late HTHA detection, unplanned outage on hydroprocessing units, multi-million-dollar productivity loss." },
      { gap: "Junior inspectors holding API 510 but lacking practical experience navigating API 579 Level 1/2/3 assessments", impact: "Inspection findings escalated to consultancy at $1,500–$3,500 per day where a properly trained in-house team could have closed Level 1 internally." },
   ],
   tracks: [
      { role: "Junior Plant Inspector", progression: "Level I (UT, MT, PT, VT) → Level II UT + MT inside 12 months", coreMethods: "UT, MT, PT, VT", hoursTotal: "200–240 instructor-led + 800 OJT" },
      { role: "Authorised Pressure-Vessel Inspector", progression: "Level II UT + RT, then API 510 prep + exam, then API 571 damage-mechanism workshop", coreMethods: "UT, RT, API 510, API 571", hoursTotal: "160–200 instructor-led + 5-day API 510 prep" },
      { role: "Authorised Piping Inspector", progression: "Level II UT + RT, then API 570 prep + ASME B31.3 deep-dive", coreMethods: "UT, RT, API 570, ASME B31.3", hoursTotal: "160–200 instructor-led + 5-day API 570 prep" },
      { role: "FFS / RBI Engineer", progression: "API 510 / 570 prerequisite → API 579 Level 1/2 workshop → API 580 / 581 RBI implementation", coreMethods: "API 579-1, API 580/581, FFS workflows", hoursTotal: "120–160 instructor-led + case-study weeks" },
      { role: "Hydroprocessing Reactor Specialist", progression: "Level II UT + PAUT + AUT, then HTHA / creep / brittle-fracture damage-mechanism workshop", coreMethods: "UT, PAUT, AUT, API 941, API 571", hoursTotal: "180–220 instructor-led + reactor-shadow week" },
   ],
   pricing: [
      { headcount: "10–24 engineers", perHead: "Quote on request", notes: "Standard methods + damage-mechanism overlay; HTHA awareness included." },
      { headcount: "25–49 engineers", perHead: "Quote on request", notes: "Add PAUT, API 510/570 prep, API 579 Level 1/2." },
      { headcount: "50–99 engineers", perHead: "Quote on request", notes: "Multi-site programme, dedicated lead instructor, RBI rollout support." },
      { headcount: "100+ engineers", perHead: "Quote on request", notes: "Multi-complex annual contract; RBI governance + FFS workflow rollout included." },
   ],
   deliveryNote:
      "Petrochemical cohorts run hybrid by default. Theory and damage-mechanism modules deliver on the LMS during the inter-turnaround quarter; PAUT, AUT, and TOFD practicals concentrate on-site immediately before turnaround. RBI workshops are run as 3-day on-site intensives with the customer's actual inspection history as the working dataset.",
   complianceFootnote:
      "Petrochemical insurers (FM Global, AIG, Marsh, Allianz) increasingly audit personnel competence as part of the annual property-risk survey. Our deliverable is built to that expectation — written-practice references, recurrent training calendar, OJT completion, and damage-mechanism literacy are all documented in a format the insurer's loss-control engineer can review without follow-up questions.",
   caseStudy: {
      headline: "Major petrochemical complex — Asia-Pacific olefins cracker — 52-engineer multi-method cohort",
      body: "An Asia-Pacific olefins cracker complex needed to lift in-house inspection competence ahead of a major turnaround on three furnaces, a primary fractionator, and the steam-cracking reactor train. Atlantis NDT delivered a 13-week hybrid cohort: 5 weeks of LMS theory covering UT Level II, RT Level II, API 571 damage mechanisms, and API 510 / 570 inspector prep, then 6 weeks of on-site practicals concentrated in the eight weeks before turnaround, then 2 weeks of API exam administration. 52 engineers passed first attempt across the standard Level II tracks; first-attempt API 510 pass rate was 9 of 11; first-attempt API 570 pass rate was 7 of 8. The cracker turnaround completed inside the planned window with no inspection-driven scope additions, and the operator's insurance underwriter cited the personnel-qualification programme as a contributing factor in a favourable premium adjustment at the next renewal.",
   },
   cityLinks: [
      { slug: "houston", label: "Houston" },
      { slug: "jubail", label: "Jubail" },
   ],
   wordCountHint:
      "Petrochemical NDT corporate training sits at the demanding end of the inspection market. Olefins crackers, polymer plants, methanol / ammonia complexes, and specialty chemical sites operate equipment that fails by mechanisms most general inspectors will never see — high-temperature hydrogen attack (HTHA), creep cavitation in reformer tubes, sigma-phase embrittlement in stainless service, polythionic acid stress corrosion cracking, naphthenic acid corrosion, ammonia stress corrosion cracking, and the dozen-plus other modes the API 571 damage-mechanism reference catalogues. A corporate program that trains technique without context produces inspectors who can call indications but cannot defend repair / replace / monitor decisions. Our petrochemical cohorts integrate damage mechanisms throughout. Every UT module is paired with the relevant API 571 damage-mechanism brief — wall thinning calls map to the corrosion mechanism that drives them; PAUT scans on hydroprocessing reactors map to HTHA, hydrogen blistering, and weld-overlay disbonding patterns the inspector should expect to see; TOFD on heavy-wall vessels maps to creep and brittle-fracture risks. API 510 and API 570 inspector preparation is built around case studies pulled from real petrochemical failures, not generic vessel and piping examples. Risk-based inspection (RBI) under API 580 / 581 is a separate workshop track that builds on the inspection-method foundation — we have run RBI implementation for major complexes and the lesson learned is that RBI fails when the in-house inspection authority cannot defend the inspection plan to a competent reviewer. The training closes that gap. API 579-1 fitness-for-service is the senior-engineer track. Most FFS Level 1 assessments do not need a consultant; they need an in-house engineer who has been through a structured workshop on general metal loss, local thin areas, pitting, blisters, and crack-like flaws and has worked through enough Level 1 worksheets to be confident. Our two-week FFS workshop closes that gap and reduces the consultancy spend significantly. Send complex profile, target headcount, and turnaround calendar — we respond inside two business days with a written training plan.",
};

export default function PetrochemicalCorporateTraining() {
   return <VerticalTemplate config={config} />;
}
