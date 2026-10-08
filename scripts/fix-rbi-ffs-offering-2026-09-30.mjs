// Owner rule (2026-09-27, re-enforced 2026-09-30): Atlantis does NOT offer RBI
// (API 580/581) or FFS (API 579) in any form; the ERP has no automatic "lapse
// lockout"; no unverified mobilisation promises / invented outcome stats.
// The 2026-09-27 purge used sentence-level regexes and skipped any field where
// every sentence matched, plus template strings built from concatenation — so
// these survived. This pass is exact-string only (no regex), per file, with
// JSON files edited through parse -> string-value replace -> stringify.
//
// Usage: node scripts/fix-rbi-ffs-offering-2026-09-30.mjs [--apply]
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const APPLY = process.argv.includes('--apply');

const MOB_NEW = 'mobilisation across North America, confirmed in your RFQ';

const DT_CITY = [
  ['automated FFS evidence,', 'cleaner inspection evidence,'],
  ['FFS evidence packaging', 'inspection-evidence packaging'],
  ['digital twin overlay of inspection + RBI + FFS data', 'digital twin overlay of inspection and thickness data'],
  ['platform delivers inspection + RBI + FFS overlay', 'platform delivers an inspection and thickness-data overlay'],
  ['platform integrates inspection + RBI + FFS data', 'platform integrates inspection and thickness data'],
  ['digital-twin-driven RBI, FFS, and inspection-data integration', 'digital-twin-driven inspection-data integration'],
  [' and RBI scoring lets', ' and CML trend history lets'],
  [', RBI scoring and ', ', CML trend history and '],
  ['life-extension and FFS evidence', 'life-extension and inspection evidence'],
  ['re-inspection automation and FFS evidence', 're-inspection automation and inspection evidence'],
  ['digital twin RBI recalibration', 'digital twin corrosion-rate recalibration'],
  ['digital twin fitness-for-service reporting', 'digital twin inspection reporting'],
  ['colour-coded fitness-for-service outputs that digital twin platforms provide', 'colour-coded condition outputs that digital twin platforms provide'],
];

const OUTCOMES_SHORT = 'Anonymised reference call available on request.';

const RULES = {
  'scripts/prerender.mjs': [
    // ERP "Built for ..." paragraph (ndt-erp-*, erp/*)
    [', work orders + dispatch, RBI software per API 581, calibration', ', work orders + dispatch, calibration'],
    ['Every inspection + procedure revision + inspector cert + calibration cert timestamped + ASNT NDT Level III-signed.', 'Every inspection, procedure revision, inspector cert and calibration cert is timestamped with reviewer approval recorded.'],
    ['timestamped + Level III-signed + retained', 'timestamped with reviewer approval recorded + retained'],
    ['API 510 + 570 + 571 + 579 + 580 + 581 + 653 + 936 + 1169', 'API 510 + 570 + 571 + 653 + 936 + 1169'],
    // region hub + consulting outcome claims
    [', FFS turnaround acceleration 2-4 weeks (digital twin overlay + RBI integration + procedure library), RBI interval extension on Tier-3 equipment 1-3 years (driven by inspection-effectiveness factor improvement per API 581)', ''],
    ['ASNT + ISO 9712 + API ICP cert tracking, RBI per API 581 + FFS per API 579 + 3D Scanning', 'ASNT + ISO 9712 + API ICP cert tracking, 3D Scanning'],
    [' (3D asset model + damage-mechanism heat-map + RBI tier + FFS workflow)', ' (3D asset model + damage-mechanism heat-map + inspection-data overlay)'],
    ['<p>Atlantis NDT serves the following ${c.name} operators + EPC contractors + asset owners: ${c.operators}.</p>', '<p>Operators, EPC contractors and asset owners active in ${c.name} include ${c.operators}.</p>'],
    // consulting scope lists (/consulting + /consulting/ndt-consulting-{city})
    ['(2) RBI per API 581 — risk-based inspection program design with damage-mechanism mapping per API 571 + inspection-effectiveness factor calibration; (3) FFS per API 579 — Level 1 + 2 + 3 fitness-for-service assessments (general metal loss, localised metal loss, pitting, HIC/SOHIC, crack-like flaws, creep, fire damage); (4) Written-practice authoring per SNT-TC-1A 2024 + CP-189-2020 + ISO 9712:2021; (5) Procedure qualification record (PQR) authoring per ASME Section IX + AWS D1.1; (6) ISO 17020', '(2) Written-practice authoring per SNT-TC-1A 2024 + CP-189-2020 + ISO 9712:2021; (3) Procedure qualification record (PQR) authoring per ASME Section IX + AWS D1.1; (4) ISO 17020'],
    ['(2) RBI per API 581 — risk-based inspection program design, damage-mechanism mapping per API 571, inspection-effectiveness factor calibration; (3) FFS per API 579 — Level 1 + 2 + 3 fitness-for-service assessments (general metal loss, localised metal loss, pitting, HIC/SOHIC, crack-like flaws, creep, fire damage); (4) Written-practice authoring per SNT-TC-1A 2024 + CP-189-2020 + ISO 9712:2021; (5) Procedure qualification record (PQR) authoring per ASME Section IX + AWS D1.1; (6) ISO 17020', '(2) Written-practice authoring per SNT-TC-1A 2024 + CP-189-2020 + ISO 9712:2021; (3) Procedure qualification record (PQR) authoring per ASME Section IX + AWS D1.1; (4) ISO 17020'],
    ['const title = `NDT Consulting ${cityName} 2026 — ASNT Level III + API 581 RBI + 579 FFS | Free Consultation`;', 'const title = `NDT Consulting ${cityName} 2026 — ASNT Level III, Written Practices & Audits | Free Consultation`;'],
    ['certified. RBI per API 581, FFS per API 579, procedure authoring, code consulting. Free 30-min consultation.', 'certified. Written practices, procedure authoring, audits and code consulting. Free 30-min consultation.'],
    ['certified. RBI per API 581, FFS per API 579, written-practice authoring, code consulting. Free 30-min consultation.', 'certified. Written-practice authoring, procedure approval, audits and code consulting. Free 30-min consultation.'],
    ['<h1>NDT Consulting in ${cityName} — ASNT Level III (Level 3) + API RBI + FFS + Code Consulting</h1>', '<h1>NDT Consulting in ${cityName} — ASNT Level III (Level 3) + Written Practices + Code Consulting</h1>'],
    ['Engagements span outsourced Level III on retainer, RBI per API 581 + FFS per API 579 + code consulting per', 'Engagements span outsourced Level III on retainer, code consulting per'],
    // unverified mobilisation promise
    ['mobilisation 24-72h via Houston + Dubai + Mumbai + Singapore + London hubs', MOB_NEW],
    ['<strong>On-site mobilisation</strong> 24-72h via Houston + Dubai + Mumbai + Singapore + London hubs', '<strong>On-site mobilisation</strong> across North America, confirmed in your RFQ'],
    ['with on-site mobilisation 24-72h', 'with on-site mobilisation confirmed in your RFQ'],
    ['on-site mobilisation 24-72h,', 'on-site mobilisation confirmed in your RFQ,'],
    ['On-site mobilisation 24-72h.', 'On-site mobilisation confirmed in your RFQ.'],
    // vertical service template (/pipeline-inspection-services etc.)
    ['delivers ${p.h1.toLowerCase()} for ${operators}.', 'delivers ${p.h1.toLowerCase()} for operators, EPC contractors and asset owners; asset owners active in this sector include ${operators}.'],
    ['<p>Anonymised customer outcomes: inspection-planning effort -30-60%, audit findings reduced from typical 3-7 per cycle to 0, FFS turnaround acceleration 2-4 weeks, RBI interval extension 1-3 years on Tier-3 equipment, inspector cert recertification 100% on-time. Anonymised reference call available on request.</p>', '<p>' + OUTCOMES_SHORT + '</p>'],
    // digital twin city template
    [' Real-time corrosion monitoring, API 579 fitness-for-service calculations, automated API 510/570/653 regulatory reporting, RBI per API 581.', ' Real-time corrosion monitoring and automated API 510/570/653 inspection reporting; readings can be exported to your own RBI or integrity software through the Atlantis API.'],
    ['(4) RBI tier visualisation per API 581 (Tier 1/2/3 colour-coded), FFS workflow per API 579 Part 5 (localised metal loss) + Part 9 (crack-like flaws);', '(4) colour-coded condition zones from measured thickness and indication data, exportable to your own RBI or integrity software;'],
    ['3D Asset Visualisation + RBI + FFS Integration</h1>', '3D Asset Visualisation + Inspection Data Integration</h1>'],
    ['API 510 / 570 / 653 + RBI + FFS Integration', 'API 510 / 570 / 653 Inspection Data on a 3D Model'],
    ['API 510/570/653 + RBI + FFS', 'API 510/570/653 Inspection Data'],
    ['work-order + RBI + FFS engine without manual re-keying', 'work-order and integrity systems without manual re-keying'],
    // Meridium integration
    ['Meridium APM Integration 2026: Native RBI/FFS Data Exchange', 'Meridium APM Integration 2026: Inspection Data Exchange'],
    ['RBI input data flows to Meridium, FFS Level 1/2/3 results sync back,', 'inspection and thickness data flows to Meridium for your RBI programme, results sync back,'],
    ['Risk-based inspection data flows from Atlantis to Meridium; fitness-for-service results sync back.', 'Inspection and thickness data flows from Atlantis to Meridium for your RBI programme; results sync back to the twin.'],
  ],
  'scripts/route-reconcile.mjs': [
    ['certification tracking with automatic lapse lockout,', 'certification tracking with expiry warnings and blocked double-booking,'],
    [': UT/PAUT/RT readings mapped to a 3D asset model, API 581 RBI scoring and API 579 fitness-for-service on measured thickness.', ': UT/PAUT/RT readings mapped to a 3D asset model, with CML thickness trends and corrosion rates on every circuit.'],
    ['personnel certification, RBI per API 580/581 and FFS per API 579.', 'personnel certification and NDT programme audits.'],
    // ERP has no automatic lockout: real feature = computed status, 90-day warning tasks, email alerts, timesheet warnings, blocked double-booking
    ['SNT-TC-1A / ISO 9712 / NAS 410 currency with automatic dispatch lockout on lapse.', 'SNT-TC-1A / ISO 9712 / NAS 410 currency with computed status, 90-day expiry warning tasks, email alerts and blocked double-booking.'],
    ['and any expiry blocks assignment to a job automatically. Equipment calibration works the same way — an out-of-calibration flaw detector, thickness gauge or reference block cannot be dispatched.', 'and each certificate carries a computed status, with 90-day expiry warning tasks, email alerts, timesheet warnings and blocked double-booking. Equipment calibration is tracked the same way — due dates on every flaw detector, thickness gauge and reference block raise warnings before they lapse.'],
    // fabricated per-city savings figures and case stories (ERP_CITY_PROFILES) are no longer rendered
    ["    <p>${esc(sanitizePricing(profile.uniqueLocalROI))}</p>\n", ''],
    ["    <p>${esc(sanitizePricing(profile.uniqueLocalROI))}</p>\r\n", ''],
    ["    ${profile.localCaseStudy ? `<h3>Case study</h3><p>${esc(sanitizePricing(profile.localCaseStudy))}</p>` : ''}` : ''}", "` : ''}"],
  ],
  'src/data/dt-competitor-knowledge.ts': [
    ['Native SNT-TC-1A / ISO 9712 / NAS 410 currency with dispatch lockout on lapse', 'Native SNT-TC-1A / ISO 9712 / NAS 410 currency with computed status, 90-day expiry warnings and blocked double-booking'],
    ['Native, with dispatch lockout on lapse', 'Native, with 90-day expiry warnings and blocked double-booking'],
    ['currency and dispatch lockout are outside', 'currency and expiry warnings are outside'],
    ['currency model or dispatch lockout', 'currency model or expiry warnings'],
    ['currency with dispatch lockout', 'currency with expiry warnings'],
    ['currency or dispatch lockout for NDT methods', 'currency or expiry warnings for NDT methods'],
  ],
  'scripts/region-hubs.mjs': [
    ['RBI under API 580/581 then ranks on measured condition, and API 579 fitness-for-service runs against the stored thickness grid.', 'Those measured corrosion rates and the stored thickness grid can then be exported to your RBI and fitness-for-service engineers through the Atlantis API.'],
    [', then RBI and FFS configuration and integrity-team training.', ', then integrity-team training.'],
    ['puts measured inspection data, API 581 risk-based inspection scoring and API 579-1/ASME FFS-1 fitness-for-service on a single live 3D model', 'puts measured inspection data, CML thickness trends and damage-mechanism assignments on a single live 3D model'],
    ['<li>Computes RBI under API 580/581 from measured corrosion rates rather than defaults, which changes which equipment is genuinely flagged.</li>', '<li>Calculates corrosion rates from measured readings at each CML rather than defaults, and exports them to your RBI software through the Atlantis API.</li>'],
    ['<li>Runs API 579 Level 1 and Level 2 assessments — Part 4 general metal loss, Part 5 local metal loss, Part 9 crack-like flaws — against the stored thickness grid, rendering pass/fail zones spatially.</li>', '<li>Renders the stored wall-thickness grid spatially, so the measured data your fitness-for-service engineers need sits in one place.</li>'],
    ['2026 — RBI, FFS and NDT Data on One Model', '2026 — NDT and Thickness Data on One Model'],
    [', API 581 RBI on measured corrosion rates, API 579 fitness-for-service on the stored thickness grid.', ', measured corrosion rates and thickness grids on one live 3D model.'],
    ['with dispatch lockout the moment anything lapses.', 'with computed status, 90-day expiry warning tasks, email alerts, timesheet warnings and blocked double-booking.'],
    ['certification currency with dispatch lockout,', 'certification currency with 90-day expiry warnings,'],
  ],
  'scripts/thin-page-upgrade.mjs': [
    ["'Risk-based inspection programme design under API 580 and API 581, built on measured corrosion rates rather than default rates'", "'Inspection-data review and NDT method selection that give your RBI engineers measured corrosion rates rather than default rates'"],
    ["'Fitness-for-service assessment under API 579-1/ASME FFS-1 — Part 4 general metal loss, Part 5 local metal loss, Part 9 crack-like flaws'", "'Flaw characterisation and sizing procedures (PAUT, TOFD) that meet the data requirements of your fitness-for-service engineers'"],
    ['building a multi-method programme from nothing, preparing an ISO 17020 accreditation package, or standing up an RBI programme — are', 'building a multi-method programme from nothing or preparing an ISO 17020 accreditation package — are'],
  ],
  'scripts/thin-page-stragglers.mjs': [
    ['<li>Risk-based inspection under API 580/581 computed from measured corrosion rates rather than defaults — which changes which equipment is genuinely flagged.</li>', '<li>Corrosion rates calculated from measured readings rather than defaults, ready to export to your RBI software — which changes which equipment is genuinely flagged.</li>'],
    ['<li>Fitness-for-service under API 579-1/ASME FFS-1 run against the stored thickness grid, with pass/fail zones rendered spatially.</li>', '<li>The stored thickness grid rendered spatially, giving your fitness-for-service engineers the measured data in one place.</li>'],
    ['Calculation: corrosion rate, remaining life, RBI ranking under API 580/581, fitness-for-service under API 579.', 'Calculation: corrosion rate and remaining life per monitoring location.'],
    ['building a multi-method programme, preparing an ISO 17020 accreditation package, standing up an RBI programme under API 580/581 — are', 'building a multi-method programme or preparing an ISO 17020 accreditation package — are'],
  ],
  'src/data/dt-city-data.mjs': [
    ...DT_CITY,
    ['Digital twins give statewide operators a way to standardize RBI-driven inspection programs and API 510/570/653 compliance tracking across', 'Digital twins and an inspection ERP give statewide operators one place that stores reports and inspector certificates for their API 510/570/653 programmes across'],
  ],
  'scripts/enrich-thin-city-pages.mjs': DT_CITY,
  'src/pages/blog/ndt-inspection-software-comparison-2026.tsx': [
    ["the digital twin's RBI overlay and FFS engine drive the next round of inspection planning", "the digital twin's condition data feeds the owner's RBI and FFS work, which drives the next round of inspection planning"],
  ],
  'src/data/blogs.json': [
    ['; FFS turnaround accelerated 2-4 weeks (digital twin overlay + RBI integration + procedure library); RBI interval extension on Tier-3 equipment 1-3 years (driven by inspection-effectiveness factor improvement per API 581).', '.'],
    ['timestamped + Level III-signed + retained', 'timestamped with reviewer approval recorded + retained'],
    ['timestamped + Level III-signed in ', 'timestamped with reviewer approval recorded in '],
    ['12-month outcomes: inspection-planning hours reduced 30-60%, RBI interval extension on Tier-3 equipment by 1-3 years, FFS turnaround acceleration 2-4 weeks, audit findings 0 (vs typical 3-7), inspector recertification cycle 100% on-time. ', ''],
    ['ROI math (currency-neutral): typical asset-owner sees inspection-planning hours -30-60%, audit-finding rate dropped to 0, RBI interval extension 1-3 years on low-risk equipment, FFS turnaround -2-4 weeks. ', ''],
    ['<p>Inspection-planning hours -30-60%, RBI interval extension 1-3 years on low-risk equipment, FFS turnaround acceleration 2-4 weeks, audit findings 0.</p>', '<p>Outcomes are shared case by case; an anonymised reference call is available on request.</p>'],
    [' Anonymised customer outcomes: inspection-planning effort -30-60%, audit findings reduced to 0 from typical 3-7, inspector cert renewal 100% on-time, FFS turnaround acceleration 2-4 weeks, RBI interval extension 1-3 years on Tier-3 equipment.', ' ' + OUTCOMES_SHORT],
    ['<h2>Integration with RBI + FFS</h2>', "<h2>Integration with the Owner's RBI and FFS Programmes</h2>"],
    ['<h2>RBI + FFS Integration</h2>', '<h2>How RBI and FFS Use the Inspection Data</h2>'],
    ['Atlantis NDT integrated stack with <a href="/digital-twins">Atlantis Digital Twin platform</a> carries the data + decisions visually.', "The <a href=\"/digital-twins\">Atlantis Digital Twin platform</a> carries the underlying inspection data visually; RBI and FFS decisions stay with the owner's integrity engineers."],
    ['ships built-in API 653 / 581 RBI calculation against the twin\'s data.', 'exports the twin\'s thickness and corrosion-rate data to your RBI software through the Atlantis API.'],
    ['<h2>How Atlantis NDT Supports FFS Programs</h2>', '<h2>How Atlantis NDT Supports the NDT Side of FFS Programs</h2>'],
    ['Digital Twin, Asset Integrity & RBI Built-in', 'Digital Twin & Asset Integrity Built-in'],
    ['Digital Twin & RBI Built-in', 'Digital Twin & Asset Integrity Built-in'],
    ['offers advanced asset integrity, RBI, inspection tracking', 'offers advanced asset integrity, inspection tracking'],
    ['On-site 24-72h via Houston + Dubai + Mumbai + Singapore + London hubs.', 'On-site ' + MOB_NEW + '.'],
    ['On-site mobilisation 24-72h.', 'On-site mobilisation confirmed in your RFQ.'],
    ['mobilisation 24-72h via Houston + Dubai + Mumbai + Singapore + London hubs', MOB_NEW],
  ],
  'src/data/blogs-index.json': [
    ['Digital Twin & RBI Built-in', 'Digital Twin & Asset Integrity Built-in'],
    ['Digital Twin, Asset Integrity & RBI Built-in', 'Digital Twin & Asset Integrity Built-in'],
  ],
};

// Third-party-inspection depth pages: "our fitness-for-service work / our RBI
// programme design" -> the evaluation belongs to the owner's integrity engineers.
const DEPTH = [
  ['our API 653 tank inspector services provide certified inspectors and our fitness-for-service assessment under API 579 handles the evaluation that follows.', "our API 653 tank inspector services provide certified inspectors and the inspection data that the owner's fitness-for-service evaluation under API 579 then relies on."],
  [' — our fitness-for-service consulting covers that evaluation.', " — an evaluation carried out by the owner's integrity engineers or a specialist FFS firm, using the inspection data."],
  [' — our fitness-for-service consulting work sits downstream of the inspection findings for exactly that reason, using the wall-thickness and flaw data the inspection generates as its input.', ' — an engineering evaluation that sits downstream of the inspection findings for exactly that reason, using the wall-thickness and flaw data the inspection generates as its input.'],
  [', see our fitness-for-service under API 579 work for how that assessment is typically structured, rather than a bare note that the item was accepted.', ', referenced by document number, rather than a bare note that the item was accepted.'],
  [' — a step our fitness-for-service work covers in more depth for owners weighing a finding against continued operation.', " — a step carried out by the owner's integrity engineers, and one that depends on accurate flaw sizing from the inspection."],
  ['; see our fitness-for-service under API 579 work for how corrosion-rate data derived from consistent CML tracking feeds directly into a remaining-life calculation.', '; corrosion-rate data derived from consistent CML tracking is what feeds a credible remaining-life calculation.'],
  [' — see our fitness-for-service work — rather than through the inspection report alone.', ' rather than through the inspection report alone.'],
  [', and our fitness-for-service consulting practice supports that engineering assessment when a Groton client\'s findings need it.', ", and that engineering assessment is carried out by the owner's integrity engineers from the inspection data."],
  ['; our fitness-for-service work covers how an API 579 assessment gets documented so it survives that kind of later scrutiny.', '; an API 579 assessment documented that way survives later scrutiny.'],
  ['; our fitness-for-service (API 579) work covers that evaluation.', "; that API 579 evaluation belongs to the owner's integrity engineers, working from the inspection data."],
  [', our fitness-for-service (API 579) work picks up from the inspection data to evaluate remaining life and acceptability.', ", an API 579 fitness-for-service evaluation by the owner's integrity engineers picks up from the inspection data to evaluate remaining life and acceptability."],
  [' — see our fitness-for-service work for how that evaluation is structured.', '.'],
  [' — see our fitness-for-service work for how that assessment gets done.', '.'],
  ['; our fitness-for-service and API 579 guidance covers how that assessment is structured.', ", and that assessment belongs to the owner's integrity engineers."],
  [' — our fitness-for-service work covers exactly that gap between rejecting a component outright and running it as-is.', ' — the engineering step between rejecting a component outright and running it as-is.'],
  [' — our fitness-for-service assessment work covers that evaluation separately from the acceptance-testing scope described here.', ' — an evaluation that sits outside the acceptance-testing scope described here.'],
  ['; our fitness-for-service (API 579) service works from exactly this kind of documentation gap when it shows up years into a unit\'s service life.', '; gaps in that record are hardest to close years into a unit\'s service life.'],
  [' — our fitness-for-service work under API 579 covers how that documentation should read when it supports a run/repair decision.', ' — especially when it supports a run/repair decision.'],
  [' — our risk-based inspection programme design work sets inspection intervals against actual damage-mechanism likelihood instead of a flat calendar interval.', " — the owner's risk-based inspection programme sets inspection intervals against actual damage-mechanism likelihood instead of a flat calendar interval, and consistent inspection data is what keeps it credible."],
  [', our risk-based inspection programme design service scopes inspection intervals and methods against the specific damage mechanisms present on a given unit rather than a generic code-minimum schedule.', ', consistent NDT data by mechanism is what lets the owner scope inspection intervals and methods against the damage mechanisms present on a given unit rather than a generic code-minimum schedule.'],
  ["That's the kind of programme design work covered under our risk-based inspection program design consulting.", "That programme design sits with the owner's integrity team; the inspection data is what keeps it honest."],
  ['; clients looking to formalize that link can start from our guidance on RBI programme design, and where', ', and where'],
  ["; we cover it in more depth under fitness-for-service assessment.", '.'],
];
RULES['scripts/depth-pages-routes.mjs'] = DEPTH;
RULES['src/data/depth-pages.json'] = DEPTH;

// Remaining Atlantis-offering templates found by the dist assert
RULES['scripts/prerender.mjs'].push(
  ['3D Asset Visualisation with RBI per API 581 and FFS per API 579 Overlay', '3D Asset Visualisation with NDT and Thickness Data Overlay'],
  ['3D asset visualisation + API 510/570/653 + API 581 RBI + API 579 FFS integration', '3D asset visualisation + API 510/570/653 inspection data integration'],
  ['API 510/570/653 + FFS)', 'API 510/570/653 data)'],
  ['FFS per API 579-1 / ASME FFS-1 — Atlantis Native, Meridium Bolt-On', 'FFS per API 579-1 / ASME FFS-1 — Not Offered by Atlantis; Meridium Module'],
  [' See API 579 FFS consulting and RBI program design.', ''],
  ['<h2>RBI per API 581 + FFS per API 579 for ${v.name}</h2>', '<h2>Inspection Data for RBI and FFS Programmes in ${v.name}</h2>'],
  ['Atlantis NDT delivers RBI per API 581 for ${v.name} programs — corporate-asset RBI model build-out, generic failure frequency calibration, damage factor per active mechanism, inspection-effectiveness factor per prior inspection thoroughness, consequence-of-failure modelling (financial + safety + environmental). And FFS per API 579 — Level 1 + Level 2 + Level 3 (FEA-supported) assessments with remaining-life calculation + re-inspection interval recommendation.', "Atlantis NDT does not perform RBI (API 580/581) or fitness-for-service (API 579) assessments. For ${v.name} programs it supplies what those assessments depend on: qualified NDT data by damage mechanism, flaw sizing, thickness trends per CML and ASNT Level III review, exportable to the owner's RBI or integrity software."],
  ['Q3: API 581 RBI engine native to Atlantis?</h3><p><strong>A:</strong> Yes — full quantitative API 581 with Annex 2 damage-factor library and Annex 3 consequence library.</p><h3>Q4: FFS Part 4-13 coverage?</h3><p><strong>A:</strong> All Parts native, with ASNT Level III + API engineer sign-off workflow.</p>', 'Q3: API 581 RBI engine native to Atlantis?</h3><p><strong>A:</strong> No. Atlantis does not offer RBI software; inspection and thickness data export to Meridium or any RBI tool through the Atlantis API.</p><h3>Q4: FFS Part 4-13 coverage?</h3><p><strong>A:</strong> No. Atlantis does not perform fitness-for-service assessments; it supplies the NDT data and Level III review those assessments rely on.</p>'],
  ['<h3>Q3: Does the scan feed Atlantis FFS automatically?</h3><p><strong>A:</strong> Yes — Atlantis Digital Twin ingests E57 / LAS / RCP point clouds and structures geometry deviations for local metal-loss review + Part 8 distortion assessment.</p>', "<h3>Q3: Does the scan feed fitness-for-service work automatically?</h3><p><strong>A:</strong> Atlantis Digital Twin ingests E57 / LAS / RCP point clouds and structures geometry deviations so the owner's engineers can use them in local metal-loss and Part 8 distortion assessments; Atlantis does not perform the FFS assessment itself.</p>"],
);
RULES['scripts/round7-body-overrides.mjs'] = [
  ['visualize thickness data and RBI findings on our', 'visualize thickness data and corrosion trends on our'],
  ['for corrosion mapping, API 579 fitness-for-service, and API 581 RBI, giving owners a single integrity picture.', "for corrosion mapping and thickness trending, exportable to the owner's RBI or FFS software, giving owners a single integrity picture."],
  ['for corrosion mapping and FFS use.', 'for corrosion mapping and thickness trending.'],
  ['<h3>Does Atlantis support API 579 Level 1 and Level 2 assessments?</h3>', '<h3>Does Atlantis perform API 579 Level 1 and Level 2 assessments?</h3>'],
  ['Yes — thickness-based assessments run from twin data, with Level III engineers available through our ', "No. Atlantis does not perform fitness-for-service assessments; the twin supplies the thickness data your FFS engineers use, with Level III review of that data available through our "],
  ['/consulting/fitness-for-service-api-579', '/consulting/asnt-level-iii-consulting-services'],
  ['API 579 FFS consulting</a> for higher-level assessments and unusual damage mechanisms.', 'ASNT Level III consulting</a>.'],
];
RULES['scripts/round7-body-overrides.mjs'].unshift(
  ['Atlantis pairs software with Level III engineering support — see our <a href=\\"/consulting/fitness-for-service-api-579\\">API 579 FFS services</a> and <a href=\\"/consulting/rbi-program-design\\">RBI program design consulting</a> — so mid-size owners get methodology, not just licenses.', 'Atlantis pairs software with <a href=\\"/consulting/asnt-level-iii-consulting-services\\">ASNT Level III consulting</a> on procedures and inspection data — so mid-size owners get methodology, not just licenses. Atlantis does not perform RBI or FFS assessments.'],
  ['Platforms past design life live on FFS.<a href=\\"/consulting/fitness-for-service-api-579\\">API 579 FFS consulting</a> handling advanced levels. Assessment results,', "Platforms past design life live on FFS, performed by the owner's integrity engineers. Assessment results,"],
  [', and where needed a Level 1&ndash;3 assessment per <a href=\\"/consulting/fitness-for-service-api-579\\">API 579-1/ASME FFS-1</a>.', "; where an API 579-1/ASME FFS-1 assessment is needed, the inspection data goes to the owner's FFS engineers."],
);
RULES['scripts/depth-pages-routes.mjs'].push(
  ["; that evaluation is a distinct engineering exercise from the inspection itself, and we cover it separately under fitness-for-service assessment.", "; that evaluation is a distinct engineering exercise from the inspection itself, carried out by the owner's integrity engineers."],
  [' than starting from a blank ITP each time; we work through that programme design separately under RBI program design.', ' than starting from a blank ITP each time.'],
  ['Our fitness-for-service consulting work covers how that assessment gets built once an inspection has produced the flaw data.', "That assessment is built by the owner's integrity engineers once an inspection has produced the flaw data."],
  ['Our fitness-for-service work under API 579 covers how that assessment gets built from field NDE data.', "That API 579 assessment is built by the owner's integrity engineers from field NDE data."],
  ['Our work on risk-based inspection program design often starts at exactly this stage—turning', 'Good Level III scoping often starts at exactly this stage—turning'],
  ['Our fitness-for-service and API 579 work runs into this constantly — the quality', 'Fitness-for-service work under API 579 runs into this constantly — the quality'],
);
RULES['scripts/prerender.mjs'].push(
  [', FFS turnaround 6-12 weeks from initial UT to Level III recommendation.', '.'],
  [', turnaround + EPC project support, RBI per API 581, FFS per API 579.', ', turnaround + EPC project support.'],
  ['<h2>RBI per API 580/581 — Inherent Asset Risk Driven from the Twin</h2><p>Each pressure boundary — vessel shell, head, nozzle, piping circuit, tank shell course, tank bottom — is a twin node carrying its API 581 generic failure frequency (gff), management-systems factor (FMS), damage-factor (DF per Annex 2.B sulfidation, 2.C HTHA, 2.D amine, 2.E sour-water, 2.F chloride SCC, 2.G CUI, 2.H MIC, 2.I HIC/SOHIC), and consequence-of-failure (CoF per Annex 3.A toxic, 3.B flammable, 3.C product loss). See RBI program design consulting.</p>', '<h2>RBI per API 580/581 — Inspection Data for Your RBI Software</h2><p>Atlantis does not calculate RBI. Each pressure boundary — vessel shell, head, nozzle, piping circuit, tank shell course, tank bottom — is a twin node carrying its measured thickness history, corrosion rate and assigned API RP 571 damage mechanisms, which export through the Atlantis API to the RBI software your integrity team already runs.</p>'],
  ['<h2>FFS per API 579-1 / ASME FFS-1 — From Twin to LTA, Crack, Distortion Assessment</h2><p>Boeing D6-51991 composite-FFS overlay, Airbus AITM 6-4005 acceptance, Aramco SABP-A-005 FFS-acceptance, and ADNOC FFS-Manual map into the Part-by-Part assessment. See API 579 FFS consulting.</p>', "<h2>FFS per API 579-1 / ASME FFS-1 — Data Your FFS Engineers Can Use</h2><p>Atlantis does not perform fitness-for-service assessments. The twin holds the thickness grids, flaw sizing and indication history that the owner's FFS engineers need for local metal loss, crack-like flaw and distortion assessments.</p>"],
  [', RBI per API 581 damage-factor evolution, and FFS per API 579-1 Part 4/5/6/7/8/9/10/11/13 input bundles.', ", and inspection-data exports for the owner's RBI (API 581) and FFS (API 579-1) work."],
  ['<h2>RBI per API 580/581 — Both Strong, Different Architecture</h2>', '<h2>RBI per API 580/581 — Meridium Has the Engine; Atlantis Supplies the Data</h2>'],
  ['certification tracking, equipment calibration, work orders, RBI per API 581, FFS per API 579, invoicing, HR, and CRM', 'certification tracking, equipment calibration, work orders, invoicing, HR, and CRM'],
  ['Digital Twin for Refineries 2026: NDT Overlay, RBI per API 581, FFS per API 579', 'Digital Twin for Refineries 2026: NDT Overlay, Thickness Trends, Corrosion Rates'],
  ['MT/PT indications), RBI per API 581, FFS per API 579-1, fully customizable', 'MT/PT indications), thickness trends and corrosion rates, fully customizable'],
  ['MT and PT indications, RBI per API 581 and fitness-for-service per API 579-1', 'MT and PT indications, with thickness trends and corrosion rates per CML'],
  ['compressor NDT data overlay, RBI per API 581, turnaround planning', 'compressor NDT data overlay, thickness trends, turnaround planning'],
  ['API 510 in-service inspection, FFS per API 579 for damage, repair/alteration tracking', 'API 510 in-service inspection, flaw and thickness data for FFS engineers, repair/alteration tracking'],
  ['fitness-for-service per API 579 where damage is found, repair and alteration tracking', 'flaw and thickness data for fitness-for-service engineers, repair and alteration tracking'],
  // repair of a first-run replacement that put an apostrophe inside a single-quoted literal
  ["flaw and thickness data for the owner's fitness-for-service engineers, repair and alteration tracking", 'flaw and thickness data for fitness-for-service engineers, repair and alteration tracking'],
  ['NDT procedure development and approval, RBI per API 580/581, fitness-for-service per API 579, program audits', 'NDT procedure development and approval, program audits'],
);
// Unverified "API ICP-certified inspectors" roster claims (founder is ASNT NDT Level III only — owner decision 2026-10-07)
RULES['scripts/prerender.mjs'].push(
  ['ASNT NDT Level III + API ICP-certified ${method.shortName} inspectors.', 'ASNT NDT Level III-led, with ${method.shortName} inspectors holding the API certifications your code requires, confirmed per project.'],
  ['ASNT NDT Level III + API ICP-certified inspectors.', 'ASNT NDT Level III-led, with inspectors holding the API certifications your code requires, confirmed per project.'],
  ['— ASNT NDT Level III + API ICP certified.', '— ASNT NDT Level III lead consultant.'],
  ["'Our consultants hold ASNT + ISO 9712 + API ICP dual-scheme cert rosters.'", "'Our lead consultant holds ASNT NDT Level III (multi-method).'"],
  ['multi-scheme cert roster (ASNT + ISO 9712 + API ICP + NACE CIP + CSWIP + PCN + NAS 410 + EN 4179 aerospace)', 'inspectors holding the certifications your code requires (ASNT, ISO 9712, API, NAS 410 and others), confirmed per project'],
);
RULES['scripts/round7-body-overrides.mjs'].push(
  ['procedure development and qualification, API RBI program design, fitness-for-service per API 579, and code compliance', 'procedure development and qualification, and code compliance'],
);
RULES['src/data/blogs.json'].push(
  ['corrosion mapping, FFS Level 2/3, RBI per API 581, damage-mechanism overlay', 'corrosion mapping, thickness data for FFS and RBI engineers, damage-mechanism overlay'],
);
RULES['src/data/blogs-index.json'].push(
  ['corrosion mapping, FFS Level 2/3, RBI per API 581, damage-mechanism overlay', 'corrosion mapping, thickness data for FFS and RBI engineers, damage-mechanism overlay'],
);
RULES['src/data/blogs.json'].push(
  ['layers RBI calc on the 3D asset model. Each equipment item carries its live PoF + CoF + risk score;', "layers inspection data, thickness trends and risk results imported from the owner's RBI software on the 3D asset model — Atlantis does not calculate RBI itself;"],
);
RULES['scripts/page-upgrades.json'] = [
  ['Can Atlantis reconcile FFS assessments across both onshore refinery piping and a jetty or marine interface for one operator?', 'Can Atlantis inspection data support FFS assessments across both onshore refinery piping and a jetty or marine interface for one operator?'],
  ['Yes. Onshore piping typically runs under API 579-1/ASME FFS-1;', "Yes, on the data side — Atlantis supplies the inspection data and Level III review, and the assessments themselves stay with the owner's engineers. Onshore piping typically runs under API 579-1/ASME FFS-1;"],
];
RULES['src/data/blogs.json'].push(
  DEPTH[0],
  ['calculates API 579 FFS remaining life per circuit', 'calculates remaining life per circuit from measured corrosion rates'],
  ['calculates remaining life per API 579 FFS,', 'calculates remaining life from measured corrosion rates,'],
  ['is integrity-centric — inspection + NDT + RBI + FFS', 'is integrity-centric — inspection + NDT data, exportable to RBI and FFS tools'],
  ['<h2>How Atlantis NDT Supports RBI Programs</h2>', '<h2>How Atlantis NDT Supports the NDT Side of RBI Programs</h2>'],
  ['3D visualization with native NDT and RBI logic rather than a bolt-on integration', '3D visualization with native NDT logic rather than a bolt-on integration'],
  ['ties RBI risk directly to calibrated instrument readings, technician certifications, and API code-specific fitness-for-service logic out of the box', "ties inspection data directly to calibrated instrument readings and technician certifications out of the box, ready to export to the owner's RBI and fitness-for-service tools"],
  ['account for most of the outside FFS consulting calls we see:', 'account for most outside FFS consulting calls in the industry:'],
);
// Generator scripts: apply the same table so a re-run cannot reintroduce the claims.
const GENERATORS = [
  'scripts/content-quality-upgrader.mjs', 'scripts/blog-quality-pass3.mjs', 'scripts/content-quality-pass2.mjs',
  'scripts/pseo-generator-v2.mjs', 'scripts/pseo-generator-v3.mjs', 'scripts/day15-mega-blog-generator.mjs',
  'scripts/satellite-round3-angles.mjs', 'scripts/generate-round5-ctr-overrides.mjs',
  'scripts/year-2027-mega-blog-generator.mjs', 'scripts/day9-generate-blogs-part2.mjs',
];
const GEN_EXTRA = [
  ['RBI interval extension 1-3 years on low-risk equipment, FFS turnaround -2-4 weeks', 'audit-ready records'],
  ['RBI interval extension on Tier-3 equipment by 1-3 years, FFS turnaround acceleration 2-4 weeks', 'audit-ready records'],
  ['FFS turnaround acceleration 2-4 weeks, RBI interval extension 1-3 years on Tier-3 equipment', 'audit-ready records'],
  ['RBI interval extension 1-3 years, FFS acceleration 2-4 weeks', 'audit-ready records'],
  ['On-site mobilisation 24-72h', 'On-site mobilisation confirmed in your RFQ'],
  ['on-site mobilisation 24-72h', 'on-site mobilisation confirmed in your RFQ'],
  ['On-site 24-72h', 'On-site mobilisation confirmed in your RFQ'],
  ['RBI per API 581 + FFS per API 579 + ', ''],
  ['RBI per API 581, FFS per API 579, ', ''],
  ['+ RBI + FFS Integrated', 'Inspection Data'],
  ['+ RBI + FFS Integration', 'Inspection Data Integration'],
  ['Level III-signed', 'reviewer-approved'],
];
const genPairs = [];
const seenA = new Set();
for (const ps of Object.values(RULES)) for (const p of ps) if (!seenA.has(p[0]) && !p[0].includes('${')) { seenA.add(p[0]); genPairs.push(p); }
for (const g of GENERATORS) RULES[g] = [...genPairs, ...GEN_EXTRA];
export { RULES };

function countKeys(v) {
  if (Array.isArray(v)) return v.reduce((n, x) => n + countKeys(x), 1);
  if (v && typeof v === 'object') return Object.values(v).reduce((n, x) => n + 1 + countKeys(x), 0);
  return 0;
}
function mapStrings(v, fn) {
  if (typeof v === 'string') return fn(v);
  if (Array.isArray(v)) return v.map((x) => mapStrings(x, fn));
  if (v && typeof v === 'object') { const o = {}; for (const k of Object.keys(v)) o[k] = mapStrings(v[k], fn); return o; }
  return v;
}
const count = (s, needle) => (needle ? s.split(needle).length - 1 : 0);

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isMain) {
  let total = 0;
  for (const [rel, pairs] of Object.entries(RULES)) {
    const f = join(ROOT, rel);
    const buf = readFileSync(f);
    const out = [];
    if (rel.endsWith('.json')) {
      const raw = buf.toString('utf8');
      const data = JSON.parse(raw);
      const indentMatch = raw.match(/^[{\[]\r?\n([ \t]+)/);
      const indent = indentMatch ? indentMatch[1] : 0;
      const eol = raw.includes('\r\n') ? '\r\n' : '\n';
      const re = (x) => { let s = JSON.stringify(x, null, indent); if (eol === '\r\n') s = s.replace(/\n/g, '\r\n'); return raw.endsWith('\n') ? s + eol : s; };
      if (re(data) !== raw) { console.log(`!! ${rel}: JSON roundtrip not byte-identical — skipped`); continue; }
      let cur = data;
      for (const [a, b] of pairs) {
        let n = 0;
        cur = mapStrings(cur, (s) => { const c = count(s, a); if (!c) return s; n += c; return s.split(a).join(b); });
        out.push([n, a]); total += n;
      }
      if (countKeys(cur) !== countKeys(data)) throw new Error(rel + ' key-count changed');
      if (APPLY) writeFileSync(f, re(cur));
    } else {
      const utf = buf.toString('utf8');
      const enc = Buffer.from(utf, 'utf8').equals(buf) ? 'utf8' : 'latin1';
      let s = buf.toString(enc);
      const conv = (x) => (enc === 'utf8' ? x : Buffer.from(x, 'utf8').toString('latin1'));
      const before = s.length;
      for (const [a0, b0] of pairs) {
        const a = conv(a0), b = conv(b0);
        const n = count(s, a); out.push([n, a0]); total += n;
        if (n) s = s.split(a).join(b);
      }
      if (APPLY) writeFileSync(f, Buffer.from(s, enc));
      out.push([`size ${buf.length} -> ${Buffer.byteLength(s, enc)} (${enc}${before ? '' : ''})`, '']);
    }
    console.log(`== ${rel}`);
    for (const [n, a] of out) console.log(`   ${n}\t${a.slice(0, 90)}`);
  }
  console.log(APPLY ? 'APPLIED' : 'DRY RUN', 'total replacements', total);
}
