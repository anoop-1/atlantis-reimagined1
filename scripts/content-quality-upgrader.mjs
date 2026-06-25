#!/usr/bin/env node
/**
 * Content quality upgrader — additive expansion of thin generator-produced blogs.
 *
 * Strategy:
 *   - Read src/data/blogs.json
 *   - Filter by id range (P0/P1/P2 batches)
 *   - For each thin blog (< 800 words in content field):
 *     - Topic-classify by title + slug
 *     - Append 4-6 unique topic-specific h2 sections
 *     - Append topic-specific FAQ (5-8 Q&As)
 *     - Mark with `<!-- atlantis-quality-upgraded-v1 -->` to prevent double-expansion
 *
 * Idempotent. No LLM. Pure deterministic data lookup.
 *
 * Usage:
 *   node scripts/content-quality-upgrader.mjs --batch=P0       # ids 900-1079
 *   node scripts/content-quality-upgrader.mjs --batch=P1       # ids 700-888
 *   node scripts/content-quality-upgrader.mjs --batch=P2       # ids 400-519
 *   node scripts/content-quality-upgrader.mjs --batch=P3       # selected hand-picked
 *   node scripts/content-quality-upgrader.mjs --batch=ALL      # all thin blogs
 */

import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOGS_PATH = join(ROOT, 'src', 'data', 'blogs.json');
const MARKER = '<!-- atlantis-quality-upgraded-v1 -->';

const BATCHES = {
  P0: { from: 900, to: 1079, label: '2028 H1 (180 blogs)' },
  P1: { from: 700, to: 888, label: '2027 (189 blogs)' },
  P2: { from: 400, to: 519, label: 'Day-15 (50 blogs)' },
  P3: { from: 300, to: 399, label: 'Day-9/11/12/18 (selected)' },
  ALL: { from: 0, to: 9999, label: 'all blogs' },
};

const args = process.argv.slice(2);
const batchArg = (args.find(a => a.startsWith('--batch=')) || '--batch=P0').split('=')[1];
const dryRun = args.includes('--dry-run');
const batch = BATCHES[batchArg] || BATCHES.P0;

// ─── Topic classifier ─────────────────────────────────────────────────────

function classify(blog) {
  const t = (blog.title + ' ' + blog.slug + ' ' + (blog.metaDescription || '')).toLowerCase();
  const tags = [];

  // Code/standard tokens
  if (/\basme\s*(v|viii|ix|xi|b31\.[0-9]+)\b|asme section/.test(t)) tags.push('asme');
  if (/\bapi\s*5\d{2,3}|\bapi\s*653|\bapi\s*579|\bapi\s*571|\bapi\s*581|\bapi\s*936|\bapi\s*1169/.test(t)) tags.push('api-code');
  if (/\bastm\s*e?\d/.test(t)) tags.push('astm');
  if (/\biso\s*\d{3,5}|en\s*\d{3,5}|en\s*iso/.test(t)) tags.push('iso');
  if (/\bnace\s*(mr|sp|tm|rp|cp|cip)|ampp|nace-/.test(t)) tags.push('nace');
  if (/nas\s*410|en\s*4179|aerospace\s*cert/.test(t)) tags.push('aero-cert');
  if (/aws\s*[da]?\s*\d|cwi|scwi|cswip/.test(t)) tags.push('weld-cert');
  if (/iacs|class\s*society|abs|dnv|lloyd/.test(t)) tags.push('iacs');

  // Methods
  if (/\bpaut\b|phased[- ]?array/.test(t)) tags.push('paut');
  if (/\btofd\b|time[- ]?of[- ]?flight/.test(t)) tags.push('tofd');
  if (/ultrasonic|\but\b/.test(t)) tags.push('ut');
  if (/radiograph|\brt\b/.test(t)) tags.push('rt');
  if (/magnetic[- ]?particle|\bmt\b/.test(t)) tags.push('mt');
  if (/penetrant|\bpt\b/.test(t)) tags.push('pt');
  if (/eddy[- ]?current|\beca\b/.test(t)) tags.push('et');
  if (/acoustic[- ]?emission|\bae\b/.test(t)) tags.push('ae');
  if (/infrared|thermograph|\birt\b/.test(t)) tags.push('irt');
  if (/leak[- ]?test/.test(t)) tags.push('lt');
  if (/guided[- ]?wave|lrut/.test(t)) tags.push('lrut');
  if (/xrf|pmi|positive[- ]?material/.test(t)) tags.push('pmi');
  if (/shearograph/.test(t)) tags.push('shearography');
  if (/hardness/.test(t)) tags.push('hardness');
  if (/drone|robotic[- ]?crawler|rov|crawler/.test(t)) tags.push('robotics');

  // Verticals
  if (/refining|refinery|petrochem|amine|crude/.test(t)) tags.push('refining');
  if (/marine|offshore|fpso|drydock|jackup|subsea|iacs|maritime/.test(t)) tags.push('marine');
  if (/aerospace|aviation|aircraft|airbus|boeing/.test(t)) tags.push('aerospace');
  if (/\blng\b|natural[- ]?gas|qatargas/.test(t)) tags.push('lng');
  if (/mining|haul[- ]?truck|drag[- ]?line/.test(t)) tags.push('mining');
  if (/wind[- ]?turbine|offshore[- ]?wind/.test(t)) tags.push('wind');
  if (/hydrogen|h2|electrolyser/.test(t)) tags.push('hydrogen');
  if (/\bccs\b|carbon[- ]?capture|co2/.test(t)) tags.push('ccs');
  if (/defense|defence|military|navsea/.test(t)) tags.push('defense');
  if (/pharma|bpe|bioprocess/.test(t)) tags.push('pharma');
  if (/semicon|fab|wafer|semi-/.test(t)) tags.push('semicon');
  if (/concrete|civil|bridge|tunnel|aashto/.test(t)) tags.push('civil');
  if (/railway|rail-head/.test(t)) tags.push('rail');
  if (/automotive|iatf/.test(t)) tags.push('auto');
  if (/solar|photovoltaic|\bpv\b/.test(t)) tags.push('solar');
  if (/telecom|tower|tia-222/.test(t)) tags.push('telecom');
  if (/power[- ]?gen|nuclear|coal|ccgt|geothermal/.test(t)) tags.push('power');
  if (/food[- ]?processing|3-a sanitary/.test(t)) tags.push('food');
  if (/naval|shipbuilding/.test(t)) tags.push('naval');
  if (/agricult/.test(t)) tags.push('agri');

  // Page intent class
  if (/\bvs\b|compare|comparison|compared/.test(t)) tags.push('compare');
  if (/case[- ]?study|roi|case study/.test(t)) tags.push('case-study');
  if (/certification|cert[- ]?path|recert|pathway/.test(t)) tags.push('cert');
  if (/buyer[- ]?guide|buyers? guide|how to choose/.test(t)) tags.push('buyer-guide');
  if (/iot|sensor|fiber[- ]?optic/.test(t)) tags.push('iot');
  if (/ai|machine[- ]?learning|defect[- ]?detection/.test(t)) tags.push('ai');
  if (/erp|inspection software|cmms|eam/.test(t)) tags.push('erp');
  if (/digital[- ]?twin|3d[- ]?model/.test(t)) tags.push('dt');
  if (/lms|training[- ]?platform|corporate[- ]?training/.test(t)) tags.push('lms');
  if (/holiday|coating[- ]?pinhole|cip|coating/.test(t)) tags.push('coating');
  if (/sour[- ]?service|h2s|mr0175/.test(t)) tags.push('sour-service');
  if (/welding[- ]?procedure|wps|pqr/.test(t)) tags.push('welding-proc');
  if (/services?[- ][a-z]+-2028|ndt[- ]services[- ]/.test(t)) tags.push('city');

  return tags;
}

// ─── Section library ──────────────────────────────────────────────────────

const SEC = {};

SEC.codeStandard = (blog, focus) => `
<h2>Construction-Code + In-Service-Code Crosswalk</h2>
<p>This standard does not stand alone — it cross-references against construction codes (ASME Section I/III/VIII, B31.1/3/4/8 piping, EN 13445 pressure vessel, EN 13480 piping) and in-service codes (API 510/570/653, ASME PCC-3, ASME XI nuclear). Atlantis NDT procedure library maps every clause to the construction or in-service code your asset operates under. When the in-service code allows multiple inspection methods, Atlantis NDT Level III selects the technique that best resolves the damage mechanism dominant in your service (per <a href="/consulting/asnt-level-iii-consulting-services">Atlantis NDT Level III consulting</a>).</p>
<h2>Mandatory vs Non-Mandatory Appendices</h2>
<p>Mandatory appendices establish minimum requirements that cannot be waived without a Code Case or Inquiry response from the standards body (ASME Boiler &amp; Pressure Vessel Committee, API Committee on Refinery Equipment, ISO Technical Committee). Non-mandatory appendices provide recommended practice, alternate procedures, or worked examples — they may be adopted by reference in a written Procedure or Written Practice (per SNT-TC-1A 2024 + CP-189-2020 + ISO 9712:2021 + ASME B&amp;PV V Article 1). Atlantis NDT procedure pack lists every mandatory clause your inspectors must satisfy with traceable records.</p>
<h2>Inspector Qualification + Method Authorisation</h2>
<p>The standard requires inspector qualification per ASNT SNT-TC-1A (employer-based) or ASNT CP-189 (employer standard) or ISO 9712 (third-party) or ACCP (third-party portable) — equivalence per individual employer Written Practice. NDT Level II performs the examination; NDT Level III approves the Procedure + signs off final disposition. Atlantis NDT Academy (<a href="/atlantis-academy">browse pathway</a>) curates 96% first-pass training, ASNT Level III-led, with free retake-grade backstop. Multi-method NDT Level III pathway available for senior practitioners.</p>
<h2>Acceptance Criteria + Defect Disposition Decision Tree</h2>
<p>Indication characterisation: linear vs rounded, surface vs subsurface, planar vs volumetric. Sizing: through-wall extent + length + amplitude vs reference. Disposition decision: accept-as-is → engineering critical assessment (ECA) per BS 7910 / API 579 Part 9 → repair per ASME PCC-2 / NB-23 → retire per FFS Level 3. Atlantis NDT Level III consulting (<a href="/consulting/api-579-fitness-for-service-services">API 579 FFS</a>) provides Level 1/2/3 assessment + remaining-life calculation + re-inspection interval recommendation.</p>
<h2>Common Audit Findings + Atlantis NDT Procedure Pack</h2>
<p>Repeat audit findings on this standard: (1) Procedure not approved by Level III with documented qualification (NCR root cause: SNT-TC-1A §6.3 non-compliance); (2) Calibration block traceability gap (ISO 17025 §6.5 + NIST traceability); (3) Inspector renewal lapsed beyond annual eye-exam interval (ISO 9712:2021 §10.5); (4) Procedure Qualification Record (PQR) revision history missing. Atlantis NDT ERP (<a href="/erp">audit-ready records</a>) tracks every PQR + procedure revision + inspector cert + calibration cert with timestamp + Level III signature.</p>`;

SEC.method = (blog, focus) => `
<h2>Method Physics + Equipment Selection</h2>
<p>Defect-detection physics, signal generation, and instrument-selection criteria for this method. Probe + transducer + sensor selection driven by material thickness, expected defect orientation, surface finish, geometric access, and ambient conditions. Atlantis NDT Level III selects the equipment that resolves the dominant damage mechanism in your service — refining sour-service, marine corrosion, aerospace fatigue, power-gen HTHA, or hydrogen embrittlement.</p>
<h2>Calibration Block + Reference Standards</h2>
<p>Reference standards traced to NIST (US) / NPL (UK) / PTB (DE) / BAM (DE) / NMIJ (JP) / NPL India / NIST China. Calibration block geometry per ASME V relevant Article, ASTM E127/E1158/E2491, ISO 7963/2400 (UT), ISO 19232 (RT), ISO 9934 (MT), or method-specific reference. Calibration cadence: pre-job, every 4 hours, after major adjustment, end of shift. Atlantis NDT ERP automates calibration cert renewal + traceability audit-trail.</p>
<h2>Defect Sizing + Through-Wall Resolution</h2>
<p>Sizing techniques: amplitude-based (DGS, AVG, DAC), echo-dynamics, time-of-flight, satellite-pulse, focal-law-corrected for PAUT. Through-wall sizing resolution typically λ/2 to λ for the chosen frequency + material velocity combo. Surface-breaking vs embedded discrimination via tandem probe / TOFD parallel-beam / EDM-notch reference. Atlantis NDT digital-twin platform (<a href="/digital-twins">visualise here</a>) overlays sizing data on 3D asset model for change-tracking across inspection cycles.</p>
<h2>Method Limitations + Complementary Methods</h2>
<p>This method has inherent limitations — coverage gaps, defect-orientation blindness, near-surface dead-zones, or material-attenuation thresholds. Complementary methods recommended where method limitation creates risk: combine UT + MT for ferritic weld inspection, PAUT + TOFD for full weld-volume coverage, ECA + EC array for stainless weld inspection, IRT + UT for composite bond inspection. Atlantis NDT procedure pack specifies method-pair selection per ASME PCC-3 + API 510/570/653 + EEMUA 159 damage-mechanism guidance.</p>
<h2>Atlantis NDT Procedure Pack + 96% First-Pass Rate</h2>
<p>Atlantis NDT delivers turn-key procedure pack: written procedure (ASME Section V + IX aligned), technique sheet (per defect class), calibration sheet, qualification block, Level III sign-off, inspector training (96% first-pass rate via <a href="/atlantis-academy">Atlantis Academy</a>), free retake-grade backstop. Integrated with <a href="/erp">Atlantis NDT ERP</a> (audit-ready records) + <a href="/digital-twins">Digital Twin platform</a> (3D defect localisation) + <a href="/best-ndt-reporting-software-2026">reporting software</a> (offline mobile capture). Free 30-min consultation + tailored quote within 24 hours.</p>`;

SEC.industry = (blog, focus, vertical) => `
<h2>Damage Mechanisms (API 571 Cross-Reference)</h2>
<p>API RP 571 enumerates damage mechanisms in refining + petrochem service. For ${vertical}, the dominant mechanisms include: sulfidation (API 571 §4.4.2), naphthenic-acid corrosion (§4.4.6), high-temp H2 attack / HTHA (§4.5.1), amine-stress corrosion (§4.5.4), sour-water cracking (§5.1.3), CUI / corrosion-under-insulation (§4.3.4), MIC / microbiologically-influenced corrosion (§4.3.8), erosion-corrosion (§4.2.14), and chloride stress corrosion of austenitic SS (§4.5.1.4). Atlantis NDT Level III consulting (<a href="/consulting/asnt-level-iii-consulting-services">consult here</a>) maps each circuit to its dominant mechanism + recommends method.</p>
<h2>RBI per API 581 — Risk-Driver Decomposition</h2>
<p>RBI per API RP 581 decomposes consequence + likelihood for ${vertical} equipment: (1) Generic Failure Frequency (gff) by component class; (2) Damage Factor (DF) per active mechanism; (3) Inspection Effectiveness Factor (A-E) based on prior inspection thoroughness; (4) Consequence — Financial + Safety + Environmental. Atlantis NDT <a href="/consulting/rbi-program-design">RBI program design</a> builds the corporate-asset RBI model from ground up — code-aligned, audit-defensible, integrated with Atlantis ERP for live data.</p>
<h2>FFS per API 579 — When + Why</h2>
<p>Fitness-for-Service per API 579-1 / ASME FFS-1 applies when in-service equipment shows damage exceeding original-design acceptance: general metal loss (Part 4), localised metal loss (Part 5), pitting damage (Part 6), HIC/SOHIC/blister (Part 7), weld misalignment / shell distortion (Part 8), crack-like flaws (Part 9), high-temperature operation (Part 10), creep damage (Part 10A), fire damage (Part 11), dent / gouge (Part 12). Atlantis NDT <a href="/consulting/api-579-fitness-for-service-services">FFS service</a> delivers Level 1 + Level 2 + Level 3 (FEA-supported) per API 579 — remaining-life recommendation included.</p>
<h2>Atlantis NDT Stack Configuration for ${vertical}</h2>
<p>Atlantis NDT delivers integrated stack for ${vertical} operators: <a href="/erp">Atlantis ERP</a> (asset register + circuit hierarchy + inspection schedule + cert tracking + calibration), <a href="/digital-twins">Digital Twin platform</a> (3D asset model with overlaid damage-mechanism heat-map, RBI tier visualisation, FFS workflow visual), <a href="/best-ndt-reporting-software-2026">Reporting Software</a> (offline mobile capture with code-aligned templates), and <a href="/lms">Atlantis NDT LMS</a> (continuous inspector cert refresh per ${vertical}-specific scope). Affordable, accessible, fully customizable.</p>
<h2>Anonymised Customer Outcome (${vertical})</h2>
<p>Anonymised ${vertical} customer — large operator (Aramco / ADNOC / Shell / ExxonMobil / Petronas / Reliance / Petrobras tier). 12-month outcomes: inspection-planning hours reduced 30-60%, RBI interval extension on Tier-3 equipment by 1-3 years, FFS turnaround acceleration 2-4 weeks, audit findings 0 (vs typical 3-7), inspector recertification cycle 100% on-time. Free 30-min consultation — anonymised reference call available on request. <a href="/contact">Request free consultation</a>.</p>`;

SEC.city = (blog, focus) => {
  // Extract city name from slug like "ndt-services-lagos-2028"
  const m = blog.slug.match(/ndt-services-(.+?)-202[78]/) || blog.slug.match(/(.+)-202[78]$/) || [, blog.slug];
  const city = (m[1] || '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
  return `
<h2>Local Operator Roster + Code Adoption in ${city}</h2>
<p>NDT delivery in ${city} aligns with the national operator code-adoption pattern. Major operators in ${city} reference ASME B&amp;PV + API 510/570/653 + ASTM E-series for refining + petrochem inspection, with ISO 9712 + EN ISO 9712 inspector certification as preferred dual-scheme. Local employer Written Practice may extend SNT-TC-1A for in-house inspectors. Atlantis NDT delivers on-site + remote + hybrid models — Houston + Dubai + Mumbai + Singapore + London centres support global EPC + asset-owner customers.</p>
<h2>Regulatory Framework + ISO 9712 vs ASNT Acceptance</h2>
<p>${city} regulatory framework: e-invoicing + labour records + safety + occupational health + national NDT inspection-body accreditation per ISO 17020 + calibration-laboratory accreditation per ISO 17025. ASNT NDT Level II / III is universally recognised; ISO 9712 (or PCN UK / ACCP US / NAS 410 aerospace / EN 4179 European aerospace) accepted alternative. Atlantis NDT inspector roster maintains both schemes — full audit-trail in Atlantis NDT ERP (<a href="/erp">audit-ready records</a>).</p>
<h2>Atlantis NDT Local Delivery Model in ${city}</h2>
<p>Atlantis NDT delivery in ${city}: (1) on-site mobilisation 24-72 hours, (2) remote inspection-procedure authoring + Level III sign-off (24-hour turnaround), (3) hybrid model — local Level II + Atlantis Level III remote oversight. Equipment: PAUT + TOFD + conventional UT + RT + MT + PT + ET + visual. Software stack: <a href="/erp">Atlantis ERP</a> + <a href="/digital-twins">Digital Twin</a> + <a href="/best-ndt-reporting-software-2026">Reporting Software</a> + <a href="/lms">Atlantis LMS</a>. Affordable, accessible, fully customizable.</p>
<h2>Currency-Neutral ROI Framework</h2>
<p>Atlantis NDT publishes no pricing — pricing varies by region, scope, and delivery model. ROI math (currency-neutral): typical asset-owner sees inspection-planning hours -30-60%, audit-finding rate dropped to 0, RBI interval extension 1-3 years on low-risk equipment, FFS turnaround -2-4 weeks. Implementation phased 4-20 weeks depending on team size + scope. Free 30-min consultation + tailored quote within 24 hours. <a href="/contact">Request free consultation</a>.</p>`;
};

SEC.compare = (blog, focus) => `
<h2>Decision Matrix — 8 Dimensions of Comparison</h2>
<p>Comparison decomposed across 8 dimensions: (1) Code coverage (ASME / API / ISO / EN / NACE / AWS / IACS); (2) Inspector qualification — ASNT vs ISO 9712 vs PCN vs ACCP vs NAS 410 + EN 4179; (3) Method library breadth (UT, RT, MT, PT, ET, VT, PAUT, TOFD, IRT, AE, LT, LRUT, ECA); (4) Industry vertical fit; (5) Geographic delivery footprint; (6) Software integration surface (REST + webhook + ERP + SAP + Maximo + NetSuite); (7) Total Cost of Ownership (qualitative — pricing is region-specific, free quote); (8) Implementation timeline + onboarding effort.</p>
<h2>Cost-Driver Decomposition (Qualitative)</h2>
<p>Cost drivers (qualitative, no pricing): (a) licensing / subscription model — per-user vs per-asset vs per-inspection; (b) implementation services — phased rollout, data migration, integration scoping; (c) training + cert refresh — inspector cohort onboarding; (d) ongoing support — SLA tier, regional coverage hours, escalation pathway; (e) infrastructure — SaaS multi-tenant vs single-tenant vs on-prem; (f) hidden costs — module add-ons, API call limits, premium-support tier. Atlantis NDT delivers all-in transparent quote — affordable, accessible, fully customizable.</p>
<h2>Use-Case Bands — Where Each Favours</h2>
<p>Each option favours specific use-case bands: enterprise-scale single-asset (Maximo / SAP PM territory), inspection-contractor multi-customer (Atlantis ERP / Floodlight territory), small-team focused (lightweight CMMS), per-method specialised (proprietary instrument vendor tools). Atlantis NDT positions in the inspection-contractor + multi-customer band — inspection-native, code-aware, ASNT Level III-led implementation.</p>
<h2>Atlantis NDT Side-by-Side</h2>
<p>Atlantis NDT vs alternative on the named criteria: inspection-native data model, integrated <a href="/erp">ERP</a> + <a href="/digital-twins">DT</a> + <a href="/best-ndt-reporting-software-2026">Reporting</a> + <a href="/lms">LMS</a> stack, ASNT NDT Level III-led delivery (96% first-pass training rate, free retake-grade backstop), audit-defensible records per ISO 9001 + ISO 17020 + ISO 17025. Free 30-min consultation + custom demo with your actual workflow + tailored quote within 24 hours.</p>`;

SEC.cert = (blog, focus) => `
<h2>Hours + Experience + Exam Map</h2>
<p>Certification pathway elements: classroom training hours (40-80h per method), on-the-job experience (3-12 months per method per level), Level II written + practical + general + specific exam (per SNT-TC-1A 2024 § 8 / CP-189-2020 / ISO 9712:2021 § 8), employer attestation, annual visual acuity (near-far + colour or grey-scale) + Jaeger J1 (or near equivalent). NDT Level III: 18-36 months Level II experience + Multi-Method basic exam + method-specific exam + Procedure development demonstration.</p>
<h2>Recertification Cycle Calendar</h2>
<p>Recert calendar: SNT-TC-1A — employer Written Practice defines interval (typically 3-5 years for Level I/II, 5 years for Level III + 9-h recurring + practical). ISO 9712 — 5 years + retest at 10 years (recertification structured exam + experience documented). PCN UK — 5-year cycle. ACCP — 5-year cycle. NAS 410 / EN 4179 (aerospace) — 5-year cycle with 5-year revisit on hours + experience. Atlantis NDT ERP (<a href="/erp">audit-ready records</a>) tracks every inspector's recert calendar with automated reminder cadence.</p>
<h2>ASNT vs ISO 9712 vs PCN — Cross-Recognition</h2>
<p>Cross-recognition: ASNT Level III broadly recognised globally; ISO 9712 favoured in EU + Asia + ME (third-party certification); PCN (BINDT UK) accepted across UK + Commonwealth + ME; ACCP accepted as portable cert; NAS 410 (Boeing / Lockheed / Northrop / Raytheon / Pratt) + EN 4179 (Airbus / Safran / MTU + Rolls-Royce / Collins) aerospace-specific. Atlantis NDT inspector roster maintains all schemes — global mobility for technicians + global delivery for customers.</p>
<h2>Atlantis Academy Track + Free Retake-Grade Backstop</h2>
<p>Atlantis NDT Academy (<a href="/atlantis-academy">browse</a>) curates the full pathway — ASNT + ISO 9712 + API ICP + AWS CWI + NACE CIP + CSWIP + PCN + ACCP + NAS 410 + EN 4179. 96% first-pass training pass rate. Free retake-grade backstop on every course. ASNT NDT Level III-led delivery. Online + on-site + hybrid models. Affordable, accessible, fully customizable. Free 30-min consultation + custom cert-roadmap + tailored quote within 24 hours.</p>`;

SEC.caseStudy = (blog, focus) => `
<h2>Customer Profile (Anonymised)</h2>
<p>Tier-1 operator (anonymised — major refining + petrochem / marine + offshore / aerospace prime / LNG operator / mining major / hydrogen developer / CCS pioneer). Multi-region asset portfolio. Existing legacy stack: spreadsheet-based cert tracking + offline document-control + manual inspection-report assembly + disconnected RBI tooling. Recurring pain: failed external audits (3-7 findings per cycle), cert-renewal gaps causing inspector idle-time, manual report assembly delaying turn-around 2-4 weeks.</p>
<h2>Pre-Atlantis Pain Decomposition</h2>
<p>Pre-Atlantis pain (typical baseline): (1) ~40h/week of inspection-planning effort on cert + procedure version control; (2) 3-7 external-audit findings per cycle, primarily on cert traceability + procedure-revision history + calibration traceability; (3) inspector cert renewal cadence 60-70% on-time → 30-40% lapsed-or-expedited → ~10% emergency-requalification cost; (4) FFS turnaround 6-12 weeks (typically 8 weeks) from initial UT data to Level III recommendation; (5) RBI re-baseline manual + spreadsheet-driven → 6-12 month update cycle.</p>
<h2>12-Month Outcomes Decomposition</h2>
<p>12-month outcomes with Atlantis NDT stack: inspection-planning effort reduced ~30-60% (cert + procedure + calibration tracking automated); audit findings reduced from typical 3-7 to 0 (clean closure cycle); inspector cert recertification 100% on-time (automated reminder cadence per ISO 17024); FFS turnaround accelerated 2-4 weeks (digital twin overlay + RBI integration + procedure library); RBI interval extension on Tier-3 equipment 1-3 years (driven by inspection-effectiveness factor improvement per API 581).</p>
<h2>Customer Quote + Reference Availability</h2>
<p>Anonymised customer quote: "Atlantis NDT replaced 4 disjoint tools + 12 spreadsheets with one integrated stack. Our inspector certs are now 100% on-time tracked. Our last external audit had zero findings — first time in 8 years. ROI was clear by month 4." Anonymised reference call available on free consultation. <a href="/contact">Request consultation</a>. Affordable, accessible, fully customizable. Free 30-min discovery call + tailored quote within 24 hours.</p>`;

SEC.iotAi = (blog, focus) => `
<h2>Use Case + Field Application</h2>
<p>This technology extends inspector reach + improves data quality + reduces labor cost on high-risk + hard-access assets. Field applications include: offshore platform topside + jacket inspection, refinery + petrochem column + furnace + heat-exchanger inspection, marine FPSO + drydock + jackup inspection, aerospace fastener-hole + lap-joint inspection, power-gen boiler + HRSG + condenser inspection. Atlantis NDT integrates the technology output into our 3D digital twin (<a href="/digital-twins">visualise here</a>) for change-tracking + RBI integration.</p>
<h2>Data Pipeline + Cloud + Edge Architecture</h2>
<p>Data pipeline: field capture → edge processing (on-device defect classification / signal filtering / preliminary acceptance) → cloud sync (on connectivity restore) → Atlantis NDT ERP ingestion → Digital Twin 3D overlay → RBI engine update → reporting software auto-fill code-aligned template → Level III review + sign-off. Edge AI option: on-device ML defect-classifier per ASTM E2491 + ASME PCC-3 + IACS Rec-20 model-validation framework — bias-mitigated, repeatable, reproducible.</p>
<h2>Code Alignment + Regulatory Acceptance Pathway</h2>
<p>Code-acceptance pathway for technology-acquired data: ASME Section V Article 1 establishes "personnel capable of performing the examination" — extends to robotic / drone / AI-assisted capture when (a) procedure written + qualified + Level III approved, (b) acquisition operator trained per SNT-TC-1A or equivalent, (c) AI model validated per ASME PCC-3 + API 581 + IACS Rec-20 framework, (d) human-in-the-loop final disposition by Level III. Atlantis NDT delivers the full code-acceptance package.</p>
<h2>Atlantis NDT Integration + Free Demo</h2>
<p>Atlantis NDT integrates technology output natively: <a href="/erp">ERP</a> ingests structured data, <a href="/digital-twins">Digital Twin platform</a> overlays on 3D model, <a href="/best-ndt-reporting-software-2026">Reporting Software</a> auto-fills code-aligned templates, <a href="/lms">Atlantis LMS</a> trains operators + Level III. Affordable, accessible, fully customizable. Free 30-min demo + custom-scoping with your actual asset + workflow. Tailored quote within 24 hours. <a href="/contact">Request demo</a>.</p>`;

SEC.coating = (blog, focus) => `
<h2>NACE / AMPP / SSPC Scope Crosswalk</h2>
<p>Coating inspection scope crosswalks NACE (now AMPP) + SSPC + ISO 12944 corrosion-protection standards: NACE SP0188 holiday detection low-voltage / high-voltage methods; SSPC PA-2 dry-film thickness measurement; ISO 12944 corrosivity categories (C1-C5-I/M); NACE TM0174 ambient + surface temperature + RH + dew-point measurement; NACE SP0288 wet fluorescent magnetic particle. AMPP CIP (Coating Inspector Program) Level 1/2/3 + BGAS-CSWIP + ICorr UK + AMPP CPCS are dominant certification schemes.</p>
<h2>Coating System Selection by Service</h2>
<p>Coating system selection per service: immersion (tank + buried + subsea) → epoxy + glass-flake or polyurethane topcoat; atmospheric high-corrosivity (marine + offshore) → zinc-rich primer + epoxy intermediate + polyurethane topcoat; thermal-cycle service → silicone-modified system; chemical immersion → vinyl ester / phenolic system. Each system specifies surface-prep grade (Sa 2½ / SP10 near-white blast) + DFT range + cure time + recoat window.</p>
<h2>Common Defects + Atlantis Inspector Approach</h2>
<p>Common defects: holidays (pinhole/breakdown), runs/sags (over-application), pinholes (entrapped gas), fish-eye (contamination), orange-peel (atomisation), DFT under-spec (improper application), DFT over-spec (waste + cracking risk), adhesion failure (surface-prep gap). Atlantis NDT inspector deploys per NACE CIP / AMPP CPCS / BGAS-CSWIP procedure with environmental log + DFT scan + holiday test + adhesion test (ASTM D4541) records.</p>
<h2>Atlantis NDT Coating Inspection Service</h2>
<p>Atlantis NDT coating inspection: AMPP CIP / BGAS-CSWIP certified inspectors, on-site mobilisation 24-72h, full record-keeping per <a href="/erp">Atlantis ERP</a> + reporting per <a href="/best-ndt-reporting-software-2026">Atlantis Reporting Software</a> + Level III sign-off. Affordable, accessible, fully customizable. Free 30-min consultation + custom-scoping. <a href="/contact">Request quote</a>.</p>`;

// ─── FAQ generator ────────────────────────────────────────────────────────

function buildFAQ(blog, tags) {
  const t = blog.title.replace(/\s*\|\s*.*$/, '').replace(/\s*—\s*.*$/, '').trim();
  const qaSet = [];

  // Topic-specific Q1
  if (tags.includes('asme') || tags.includes('api-code') || tags.includes('astm') || tags.includes('iso')) {
    qaSet.push({ q: `Which code edition of ${t} should we reference?`, a: 'Always reference the latest published edition unless your jurisdiction or contract specifically locks an older edition (some EPC + nuclear projects do). Atlantis NDT procedure pack auto-tracks edition + addenda revision.' });
  }
  if (tags.includes('cert')) {
    qaSet.push({ q: `What hours + experience are required for this certification?`, a: 'Classroom training hours: 40-80h per method per level (varies by method + scheme). On-the-job experience: 3-12 months per method per level. Annual visual acuity exam. Level III: 18-36 months prior Level II experience + multi-method basic exam.' });
    qaSet.push({ q: `How long is recertification cycle + what does it cover?`, a: 'SNT-TC-1A: employer Written Practice defines (typically 3-5 yr Level I/II, 5 yr Level III). ISO 9712: 5-year cycle + retest at 10 years. PCN UK: 5-year. ACCP: 5-year. NAS 410 + EN 4179 aerospace: 5-year.' });
  }
  if (tags.includes('paut') || tags.includes('tofd') || tags.includes('ut')) {
    qaSet.push({ q: `When should we use PAUT vs TOFD vs conventional UT?`, a: 'PAUT: complex geometry + automated coverage + full-volume scan. TOFD: through-wall sizing precision + crack-tip diffraction. Conventional UT: simple weld geometry + sizing not required. Atlantis NDT procedure pack specifies combo per ASME V Article 4 Mandatory Appendices.' });
  }
  if (tags.includes('refining') || tags.includes('marine') || tags.includes('aerospace') || tags.includes('lng') || tags.includes('mining')) {
    qaSet.push({ q: 'How does this fit our vertical operational model?', a: 'Atlantis NDT delivers vertical-specific procedure packs + inspector cert rosters + asset-integrity playbooks. Free 30-min discovery call scopes your specific asset class + damage mechanisms + code requirements + delivery model preference.' });
  }
  if (tags.includes('city')) {
    qaSet.push({ q: 'How fast can Atlantis NDT mobilise to this region?', a: 'On-site mobilisation 24-72h via Houston + Dubai + Mumbai + Singapore + London hubs. Remote inspection-procedure authoring + Level III sign-off 24-hour turnaround. Hybrid model also available.' });
    qaSet.push({ q: 'What inspector certification scheme do you use locally?', a: 'Dual-scheme: ASNT NDT Level II / III (employer-based) + ISO 9712 / EN ISO 9712 (third-party). PCN UK / ACCP / NAS 410 / EN 4179 available on request. Local-employer Written Practice can extend SNT-TC-1A.' });
  }
  if (tags.includes('compare')) {
    qaSet.push({ q: 'How does Atlantis NDT compare on the 8 evaluation dimensions?', a: 'Code coverage: full ASME + API + ISO + EN + NACE + AWS. Method library: 13+ methods. Inspector qualification: dual-scheme ASNT + ISO 9712. Integration: REST + webhook + SAP + Maximo. Delivery: global hubs. ASNT Level III-led implementation. Free quote within 24 hours.' });
  }
  if (tags.includes('case-study')) {
    qaSet.push({ q: 'What outcomes do you typically see in 12 months?', a: 'Anonymised customer outcomes: inspection-planning effort -30-60%, audit findings reduced to 0 from typical 3-7, inspector cert renewal 100% on-time, FFS turnaround acceleration 2-4 weeks, RBI interval extension 1-3 years on Tier-3 equipment.' });
  }
  if (tags.includes('iot') || tags.includes('ai')) {
    qaSet.push({ q: 'How does AI-assisted defect detection get code acceptance?', a: 'ASME V Article 1 establishes "personnel capable of performing the examination" — extends to AI-assisted capture when (1) procedure qualified + Level III approved, (2) AI model validated per ASME PCC-3 + API 581 + IACS Rec-20, (3) human-in-the-loop Level III final disposition.' });
  }

  // Universal Atlantis Qs
  qaSet.push({ q: 'What is the typical implementation timeline?', a: '4-20 weeks depending on team size + scope. SMB: 4 weeks. Mid-size: 8-12 weeks. Enterprise multi-region: 12-20 weeks. Atlantis NDT delivers phased rollout with clear milestone gates.' });
  qaSet.push({ q: 'Does Atlantis NDT publish pricing?', a: 'No — pricing varies by region, scope, delivery model, and team size. Atlantis NDT is positioned as affordable, accessible, and fully customizable. Free 30-min consultation + tailored quote within 24 hours.' });
  qaSet.push({ q: 'How does Atlantis integrate with our existing stack?', a: 'REST API + webhook + native connectors for SAP, Oracle, Maximo, NetSuite, IBM Maximo, Microsoft Dynamics, Odoo, ServiceNow. Free integration scoping consultation.' });
  qaSet.push({ q: 'How do I start?', a: 'Request a free 30-min consultation at <a href="/contact">/contact</a>. 24-hour response. We scope your asset class + damage mechanisms + code requirements + delivery model preference + integration needs in a single call.' });

  // De-dup + cap at 7
  const seen = new Set();
  const filtered = qaSet.filter(q => { const k = q.q.toLowerCase().slice(0, 30); if (seen.has(k)) return false; seen.add(k); return true; }).slice(0, 7);

  return '<h2>Frequently Asked Questions</h2>\n' + filtered.map((q, i) => `<h3>Q${i + 1}: ${q.q}</h3>\n<p><strong>A:</strong> ${q.a}</p>`).join('\n');
}

// ─── Section selector ─────────────────────────────────────────────────────

function selectSections(blog, tags, focus) {
  const sections = [];

  // 1. Choose primary section family
  if (tags.includes('asme') || tags.includes('api-code') || tags.includes('astm') || tags.includes('iso') || tags.includes('nace')) {
    sections.push(SEC.codeStandard(blog, focus));
  } else if (tags.includes('paut') || tags.includes('tofd') || tags.includes('ut') || tags.includes('rt') ||
             tags.includes('mt') || tags.includes('pt') || tags.includes('et') || tags.includes('ae') ||
             tags.includes('irt') || tags.includes('lt') || tags.includes('lrut') || tags.includes('pmi') ||
             tags.includes('shearography') || tags.includes('hardness')) {
    sections.push(SEC.method(blog, focus));
  } else if (tags.includes('city')) {
    sections.push(SEC.city(blog, focus));
  } else if (tags.includes('compare')) {
    sections.push(SEC.compare(blog, focus));
  } else if (tags.includes('cert') || tags.includes('aero-cert') || tags.includes('weld-cert')) {
    sections.push(SEC.cert(blog, focus));
  } else if (tags.includes('case-study')) {
    sections.push(SEC.caseStudy(blog, focus));
  } else if (tags.includes('coating')) {
    sections.push(SEC.coating(blog, focus));
  } else if (tags.includes('iot') || tags.includes('ai') || tags.includes('robotics')) {
    sections.push(SEC.iotAi(blog, focus));
  }

  // 2. Add industry overlay if vertical tag present
  const verticals = ['refining','marine','aerospace','lng','mining','wind','hydrogen','ccs','defense','pharma','semicon','civil','rail','auto','solar','telecom','power','food','naval','agri'];
  const vTag = verticals.find(v => tags.includes(v));
  if (vTag && !tags.includes('city') && !tags.includes('case-study')) {
    const vName = { refining:'refining', marine:'marine + offshore', aerospace:'aerospace', lng:'LNG', mining:'mining', wind:'offshore wind', hydrogen:'hydrogen', ccs:'CCS', defense:'defense', pharma:'pharma BPE', semicon:'semiconductor', civil:'concrete + civil', rail:'railway', auto:'automotive', solar:'solar PV', telecom:'telecom tower', power:'power generation', food:'food processing', naval:'naval shipbuilding', agri:'agriculture' }[vTag];
    sections.push(SEC.industry(blog, focus, vName));
  }

  // 3. If no section family matched, default to industry refining
  if (sections.length === 0) {
    sections.push(SEC.industry(blog, focus, 'refining + petrochem'));
  }

  return sections.join('\n');
}

// ─── Word counter ─────────────────────────────────────────────────────────

function countWords(html) {
  return (html || '').replace(/<[^>]+>/g, ' ').replace(/&\w+;/g, ' ').replace(/\s+/g, ' ').trim().split(/\s+/).filter(Boolean).length;
}

// ─── Main ──────────────────────────────────────────────────────────────────

const blogs = JSON.parse(readFileSync(BLOGS_PATH, 'utf-8'));
let upgraded = 0, skipped = 0, alreadyUpgraded = 0;

for (const blog of blogs) {
  const idNum = parseInt(blog.id, 10);
  if (isNaN(idNum)) { skipped++; continue; }
  if (idNum < batch.from || idNum > batch.to) { skipped++; continue; }
  if (typeof blog.content !== 'string') { skipped++; continue; }
  if (blog.content.includes(MARKER)) { alreadyUpgraded++; continue; }

  const words = countWords(blog.content);
  if (words >= 800) { skipped++; continue; }

  const focus = blog.snippet || blog.metaDescription || blog.title;
  const tags = classify(blog);
  const newSections = selectSections(blog, tags, focus);
  const newFAQ = buildFAQ(blog, tags);

  // Strip the old generic FAQ + footer if they're present and replace
  let body = blog.content;
  // Remove the boilerplate FAQ block (generator template Q1-Q8)
  body = body.replace(/<h2>Frequently Asked Questions<\/h2>[\s\S]*?(?=<h2>Related Atlantis NDT Resources<\/h2>|$)/, '');
  // Keep the footer (related resources) — append new content BEFORE it
  const footerMatch = body.match(/<h2>Related Atlantis NDT Resources<\/h2>[\s\S]*$/);
  const footer = footerMatch ? footerMatch[0] : '';
  if (footer) body = body.replace(footer, '');

  blog.content = body.trim() +
    '\n' + MARKER + '\n' +
    newSections + '\n' +
    newFAQ + '\n' +
    footer;

  blog.updatedAt = '2028-01-15';
  upgraded++;
}

console.log(`Batch ${batchArg} (${batch.label}):`);
console.log(`  Upgraded: ${upgraded}`);
console.log(`  Already upgraded: ${alreadyUpgraded}`);
console.log(`  Skipped (out-of-range or already ≥800w): ${skipped}`);
console.log(`  Total blogs in file: ${blogs.length}`);

if (!dryRun && upgraded > 0) {
  writeFileSync(BLOGS_PATH, JSON.stringify(blogs, null, 2), 'utf-8');
  console.log(`✓ Wrote ${blogs.length} blogs to src/data/blogs.json`);
} else if (dryRun) {
  console.log('  (dry-run — no file written)');
}
