import VerticalTemplate, { VerticalConfig } from "./_VerticalTemplate";

const config: VerticalConfig = {
   slug: "renewable-energy",
   industryDisplay: "Renewable Energy",
   industryShort: "wind, solar, hydrogen and battery-storage operators and EPCs",
   heroSubhead:
      "In-house NDT programs for wind turbine OEMs, offshore wind installers, hydrogen production EPCs, and large-scale battery storage operators. Built around the emerging code stack — DNV-ST-0376 for wind, ASME B31.12 for hydrogen piping, and the API 510 / 570 / 653 toolkit for hydrogen carrier and storage assets.",
   primaryStandards: ["DNV-ST-0376 (wind)", "DNVGL-RP-0416 (offshore wind structures)", "ASME B31.12 (hydrogen piping)", "ASME Section VIII", "AWS D1.1", "API 510", "API 570"],
   methods: [
      { method: "Ultrasonic Testing — PAUT for tower welds + blade leading-edge UT", levels: "Level I → III", roleFit: "Wind turbine tower QC, blade root inspectors, hydrogen vessel inspectors", codeRef: "DNV-ST-0376, AWS D1.1, ASME V Article 4, ASME B31.12 §GR-3" },
      { method: "Magnetic Particle Testing — yoke + WFMT", levels: "Level I → II", roleFit: "Tower flange welds, foundation jacket QC", codeRef: "ASME V Article 7, AWS D1.1 Clause 8, ASTM E709" },
      { method: "Liquid Penetrant Testing", levels: "Level I → II", roleFit: "Generator-frame welds, hydrogen-stainless QC", codeRef: "ASME V Article 6, ASTM E165, ASTM E1417" },
      { method: "Radiographic Testing — film + DR for hydrogen piping spools", levels: "Level I → III", roleFit: "Hydrogen production-plant QC, ammonia-carrier RT crews", codeRef: "ASME V Article 2, ASME B31.12, API 1104" },
      { method: "Acoustic Emission &amp; Drone-deployed visual / IR for blades", levels: "Level II + specialist", roleFit: "Wind farm O&amp;M leads, blade integrity teams", codeRef: "ASTM E1316, internal OEM written practices" },
      { method: "Eddy Current Testing — tower bolt inspection + nacelle gear", levels: "Level II", roleFit: "Bolt-tension verification, nacelle drivetrain inspectors", codeRef: "ASTM E309, ASTM E3052" },
   ],
   skillGaps: [
      { gap: "Wind farm O&amp;M crews running drone visual inspection without competent secondary-method follow-up training", impact: "Defects flagged from drone imagery cannot be confirmed or sized; rope-access mobilisation cost without integrity benefit." },
      { gap: "Hydrogen-piping QC crews trained on ASME B31.3 but unfamiliar with the additional B31.12 essential variables for hydrogen service", impact: "Hydrogen-induced cracking risk not adequately mitigated; commissioning hydro-test failures." },
      { gap: "Tower flange weld inspectors using AC yoke MT only, without ECA backup on coated joints", impact: "Crack escapes on offshore wind monopiles where access for re-inspection is prohibitively expensive." },
      { gap: "Battery storage / BESS commissioning teams without process-safety NDT discipline on cooling-loop piping", impact: "Thermal-runaway risk amplified by pinhole leaks; insurer survey findings." },
   ],
   tracks: [
      { role: "Wind Tower QC Inspector", progression: "Level II UT + MT + VT, then PAUT Level II for tower welds", coreMethods: "UT, MT, VT, PAUT", hoursTotal: "200–240 instructor-led + 1,200 OJT" },
      { role: "Wind Blade Integrity Lead", progression: "Level II VT + drone visual + thermography awareness", coreMethods: "VT, drone, IR thermography", hoursTotal: "120–160 instructor-led + blade-shop weeks" },
      { role: "Hydrogen Plant Inspector", progression: "Level II UT + RT + MT, then API 510 inspector + ASME B31.12 module", coreMethods: "UT, RT, MT + API 510", hoursTotal: "240–280 instructor-led + API exam prep" },
      { role: "Offshore Wind Foundations Inspector", progression: "Level II UT + ACFM + MT for monopile and jacket welds", coreMethods: "UT, ACFM, MT", hoursTotal: "200–240 instructor-led" },
      { role: "BESS Commissioning Inspector", progression: "Level II VT + UT thickness + leak-testing methods", coreMethods: "VT, UT thickness, leak testing", hoursTotal: "120–160 instructor-led" },
   ],
   pricing: [
      { headcount: "10–24 engineers", perHead: "$1,300–$2,500 per head", notes: "Standard wind / hydrogen QC methods; emerging-code mapping included." },
      { headcount: "25–49 engineers", perHead: "$1,100–$2,200 per head", notes: "Multi-method tracks across wind + hydrogen + BESS." },
      { headcount: "50–99 engineers", perHead: "$950–$1,950 per head", notes: "Multi-site renewable EPC programme; dedicated lead instructor." },
      { headcount: "100+ engineers", perHead: "POA — typically $800–$1,650 per head", notes: "Multi-asset annual contract; OEM-specific written-practice bridging on request." },
   ],
   deliveryNote:
      "Renewable energy cohorts skew hybrid — theory on the LMS to manage geographically dispersed wind and solar O&amp;M crews, on-site practicals concentrated at OEM blade plants, hydrogen production sites, or wind installer mobilisation bases. Drone-based inspection modules are delivered on-site with the customer's own UAV fleet so essential-variable transfer is genuine, not theoretical.",
   complianceFootnote:
      "Renewable energy is a code-stack still consolidating. We document training records to the conservative side — SNT-TC-1A baseline, customer-specific written practice mapped on top, and DNV / ASME B31.12 / IECRE essential variables traced through each module. The result is an evidence pack that survives both an OEM warranty audit and an insurer survey without findings.",
   caseStudy: {
      headline: "Major offshore wind installer — North European campaign — 28-engineer foundations cohort",
      body: "A major offshore wind installer mobilising for a multi-gigawatt monopile foundations campaign needed to certify 28 in-house QC engineers on UT for full-penetration tower flange welds, ACFM for splash-zone fatigue inspection, and MT for surface defects on coating-removed inspection windows. Atlantis NDT delivered a 7-week hybrid cohort: 3 weeks LMS theory before the campaign mobilisation, 4 weeks on-site at the installer's preassembly yard during monopile staging. 27 of 28 engineers passed first attempt across all three method certifications; the one re-test passed inside the standard window. The installer's marine warranty surveyor closed the campaign with no personnel-qualification findings, and the cohort cost landed 22% below an open-enrolment alternative.",
   },
   cityLinks: [
      { slug: "rotterdam", label: "Rotterdam" },
      { slug: "perth", label: "Perth" },
   ],
   wordCountHint:
      "Renewable energy NDT corporate training is the fastest-evolving vertical in the inspection world. Wind, hydrogen, ammonia, and large-scale battery storage are all scaling through capital-deployment phases that are running ahead of code consolidation. Our renewable cohorts are built to manage that — we anchor on the codes that are settled (ASME Section V for inspection methods, AWS D1.1 for structural welding, ASME Section VIII for pressure vessels, API 510 / 570 / 653 for the hydrogen-carrier and storage chain) and overlay the emerging codes (DNV-ST-0376 for wind, DNVGL-RP-0416 for offshore wind structures, ASME B31.12 for hydrogen piping, IECRE for renewable equipment) as bridging modules tailored to the customer's actual asset mix. The buyer pattern in renewables is different from oil &amp; gas or aerospace. Wind farm operators tend to have small in-house inspection benches and rely heavily on rope-access contractors and OEM warranty visits for blade and tower integrity work. Hydrogen production EPCs typically have substantial in-house process-piping QC capability transferred from oil &amp; gas but lack the B31.12 hydrogen-specific essential-variable training. Offshore wind installers are running construction-phase QC at scale during mobilisation campaigns, then handing the asset over to a much smaller O&amp;M crew. Battery storage operators often have no in-house NDT capability at all and need a foundational program built from the ground up. Our pricing tiers reflect that variation — the per-head cost scales with the method mix, the bridging-module load, and the cohort size. Drone and rope-access inspection modules are delivered as separate workshops with the customer's own UAV fleet or rope-access provider so the essential-variable transfer is real and not lecture-room theoretical. Recurrent-training cadence in renewables is shorter than the SNT-TC-1A 5-year default; OEM warranty visits often require annual re-validation of inspector competence, which we build into the recurrent calendar. Send asset mix, target sites, and headcount — we respond inside two business days with a written training plan and indicative quote.",
};

export default function RenewableEnergyCorporateTraining() {
   return <VerticalTemplate config={config} />;
}
