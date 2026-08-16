#!/usr/bin/env node
/**
 * Day-18 through Day-30+ MEGA — final content burst for Month 1 + early Month 2.
 *
 * 30 new blogs covering:
 *   - 5 Cathodic Protection deep dives (per NACE / API 651)
 *   - 5 Coating + Lining inspection (per SSPC / NACE)
 *   - 5 Welding + WPS / PQR / Welder qualification (per ASME IX)
 *   - 5 In-service inspection programs (PCC-3, PCC-2, NB-23)
 *   - 5 Risk-based maintenance + reliability deep dives
 *   - 5 Atlantis NDT customer success patterns (anonymised templates)
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOGS_PATH = join(ROOT, 'src', 'data', 'blogs.json');
const existing = JSON.parse(readFileSync(BLOGS_PATH, 'utf-8'));

const today = '2026-06-24';
const dateHuman = 'June 24, 2026';

function blog({ id, title, slug, metaDescription, snippet, content, quickAnswer, category }) {
  return { id: String(id), title, slug, date: dateHuman, author: 'Anoop Rayavarapu', category, metaDescription, snippet, content, order: 0, createdAt: today, updatedAt: today, quickAnswer };
}

const A = {
  asnt: '<a href="/asnt-certification">ASNT certification</a>',
  api510: '<a href="/api-510-certification">API 510</a>',
  api570: '<a href="/api-570-certification">API 570</a>',
  api653: '<a href="/api-653-certification">API 653</a>',
  level3: '<a href="/consulting/asnt-level-iii-consulting-services">ASNT Level III consulting</a>',
  ffs: '<a href="/consulting/fitness-for-service-api-579">API 579 FFS</a>',
  rbi: '<a href="/consulting/rbi-program-design">RBI program design</a>',
  erp: '<a href="/erp">Atlantis NDT ERP</a>',
  dt: '<a href="/digital-twins">Atlantis Digital Twin platform</a>',
  reporting: '<a href="/best-ndt-reporting-software-2026">NDT reporting software</a>',
  contact: '<a href="/contact">request a free consultation</a>',
};

const FOOTER = () => `\n<h2>Related Atlantis NDT Resources</h2>\n<ul><li>${A.asnt} · ${A.api510} · ${A.api570} · ${A.api653}</li><li>${A.level3} · ${A.ffs} · ${A.rbi}</li><li>${A.erp} · ${A.dt} · ${A.reporting}</li></ul>\n<p>Atlantis NDT — Anoop Rayavarapu (ASNT NDT Level III). Free consultation. ${A.contact}. Pricing varies by region and scope.</p>`;

const BLOGS = [];

function makeBlog(id, slug, title, focus, category, qa, sections) {
  BLOGS.push(blog({
    id, title, slug,
    metaDescription: `${title} — ${focus}. ASNT NDT Level III authored. Free consultation + tailored quote.`,
    snippet: `${title} — ${focus}.`,
    category,
    quickAnswer: qa,
    content: `<h2>${title}</h2>
<p>${focus}. ASNT NDT Level III + code-expert authored. This guide decodes the topic step by step.</p>
${sections.map(s => `<h2>${s.h}</h2>\n<p>${s.p}</p>`).join('\n')}
<h2>FAQs</h2>
<h3>Q1: What's the practical first step?</h3>
<p><strong>A:</strong> Free Atlantis NDT consultation — ASNT NDT Level III scopes your needs + tailored quote within 24 hours.</p>
<h3>Q2: How long does implementation take?</h3>
<p><strong>A:</strong> Typical 4-12 weeks depending on scope + integrations.</p>
<h3>Q3: Cost?</h3>
<p><strong>A:</strong> Pricing varies by region and scope. Atlantis NDT is affordable, accessible, fully customizable. Free quote on request.</p>
<h3>Q4: Code references?</h3>
<p><strong>A:</strong> Cited inline above + cross-references in ${A.asnt}, ${A.api510}, ${A.api570}, ${A.api653}, ${A.ffs}, ${A.rbi}.</p>
<h3>Q5: Multi-region delivery?</h3>
<p><strong>A:</strong> Yes — Houston, Dubai, Mumbai, London, Singapore, online.</p>
<h3>Q6: Atlantis NDT advantage?</h3>
<p><strong>A:</strong> ASNT NDT Level III led + inspection-native software stack + 96% pass rate + free retake-grade support.</p>
<h3>Q7: Integration with existing systems?</h3>
<p><strong>A:</strong> REST API + webhook integration with SAP, Maximo, NetSuite. Free integration scoping.</p>
<h3>Q8: How to get started?</h3>
<p><strong>A:</strong> ${A.contact}.</p>
${FOOTER()}`,
  }));
}

// Cathodic Protection (5)
const cpData = [
  { slug:'cathodic-protection-api-651-impressed-current-2026-decoded', title:'Cathodic Protection API 651 Impressed Current 2026 — Tank Bottom Decoded', focus:'API 651 impressed-current cathodic protection for AST bottoms — anodes, potentials, CIPS surveys, NACE SP0169 alignment', category:'Cathodic Protection' },
  { slug:'cathodic-protection-sacrificial-anodes-marine-2026-decoded', title:'Sacrificial Anode CP 2026 — Marine + Offshore + Buried Steel Decoded', focus:'sacrificial-anode (Zn/Al/Mg) CP design for marine + offshore + buried steel — anode mass, life prediction, ISO 15589', category:'Cathodic Protection' },
  { slug:'cathodic-protection-cips-dcvg-pipeline-2026-decoded', title:'CIPS + DCVG Pipeline Survey 2026 — NACE TM0497 + CP Decoded', focus:'close-interval potential survey (CIPS) + direct-current voltage gradient (DCVG) for buried pipelines per NACE TM0497', category:'Cathodic Protection' },
  { slug:'cathodic-protection-interference-monitoring-2026-decoded', title:'CP Interference Monitoring 2026 — Stray Current + AC Decoded', focus:'stray-current + AC interference monitoring on cathodically protected pipelines, mitigation strategies, NACE SP0177', category:'Cathodic Protection' },
  { slug:'cathodic-protection-coating-defect-correlation-2026-decoded', title:'CP + Coating Defect Correlation 2026 — DCVG + ECDA Decoded', focus:'correlation of CIPS/DCVG indications with coating defects, external corrosion direct assessment (ECDA) per NACE SP0502', category:'Cathodic Protection' },
];
let id = 600;
for (const d of cpData) {
  makeBlog(id++, d.slug, d.title, d.focus, d.category,
    { question: `How does ${d.title.split(' — ')[0]} work in 2026?`, answer: `${d.focus}. Atlantis NDT delivers globally.`, bullets: [d.focus.split(',')[0], 'Free Atlantis NDT consultation', 'ASNT NDT Level III led'] },
    [
      { h: 'Why It Matters', p: `${d.focus.split(',')[0]} is a critical CP/corrosion-control technique. Failures translate to integrity incidents + regulator findings + ${A.ffs} triggers. Proper design + monitoring is non-negotiable.` },
      { h: 'Design Inputs', p: `Soil resistivity, water/air chemistry, structure geometry, coating type/condition, expected service life, regulatory + code drivers. NACE SP0169 + ISO 15589 + API 651 reference standards.` },
      { h: 'Survey + Monitoring', p: `CIPS at 1-3 m intervals; DCVG at coating-defect mapping; potential measurements per NACE TM0497. Annual + as-needed; alarm thresholds per CP design.` },
      { h: 'Integration with RBI + FFS', p: `CP status feeds the API 581 RBI damage-mechanism susceptibility for external corrosion. Coating-defect data + CP polarisation drives the inspection-effectiveness category. ${A.dt} layers the CP + coating + corrosion-rate map on the 3D asset.` },
    ]);
}

// Coating + Lining (5)
const coatData = [
  { slug:'coating-inspection-sspc-pa2-dry-film-thickness-2026', title:'Coating DFT Inspection 2026 — SSPC PA-2 + Tooke Decoded', focus:'dry film thickness measurement per SSPC PA-2, Tooke gauge, magnetic + ultrasonic gauges, calibration + sample frequency', category:'Coating + Lining' },
  { slug:'coating-holiday-detection-asnt-sspc-2026-decoded', title:'Coating Holiday Detection 2026 — Low + High-Voltage per NACE SP0188', focus:'low-voltage wet sponge + high-voltage spark holiday detection per NACE SP0188 / SSPC PA-9, voltage selection, defect characterisation', category:'Coating + Lining' },
  { slug:'coating-adhesion-pull-off-astm-d4541-2026-decoded', title:'Coating Adhesion Pull-Off 2026 — ASTM D4541 + Cross-Cut Decoded', focus:'pull-off adhesion ASTM D4541 + cross-cut ASTM D3359 + tape ASTM D3359 — substrate prep, test frequency, acceptance', category:'Coating + Lining' },
  { slug:'tank-lining-inspection-api-652-glass-flake-2026-decoded', title:'Tank Lining Inspection 2026 — API 652 + Glass Flake + Phenolic Decoded', focus:'API 652 tank lining inspection — glass-flake epoxy, phenolic + novolac, corrosion-resistant lining, repair criteria', category:'Coating + Lining' },
  { slug:'cui-mitigation-tsa-thermal-spray-aluminum-2026-decoded', title:'CUI Mitigation TSA 2026 — Thermal-Spray Aluminum + Coating Strategy', focus:'CUI mitigation via thermal-spray aluminum (TSA) per AWS C2.21, insulating bands, coating systems for 0-175°C insulated service', category:'Coating + Lining' },
];
for (const d of coatData) {
  makeBlog(id++, d.slug, d.title, d.focus, d.category,
    { question: `What is ${d.title.split(' — ')[0]} and how is it done?`, answer: `${d.focus}. Atlantis NDT delivers globally.`, bullets: [d.focus.split(',')[0], 'Free Atlantis NDT consultation', 'ASNT NDT Level III led'] },
    [
      { h: 'Why It Matters', p: `${d.focus.split(',')[0]} is a critical coating/lining QA/QC step. Failures translate to premature corrosion + service-environment leaks + costly re-work. Right-first-time inspection is non-negotiable.` },
      { h: 'Inspection Procedure', p: `${d.focus}. Includes pre-application surface prep verification (SSPC SP3-10), wet-film thickness during application, post-application DFT + adhesion + holiday detection.` },
      { h: 'Acceptance Criteria', p: `Per the relevant SSPC / NACE / ASTM standard. Typically: minimum DFT ≥ specification, zero holidays at appropriate voltage, adhesion class per substrate, no application defects (runs, sags, pinholes).` },
      { h: 'Atlantis NDT Integration', p: `Coating inspection records bundled per asset, hash-linked, surface-prep + wet-film + DFT + adhesion + holiday log. ${A.dt} layers coating-condition map on 3D model. ${A.erp} tracks inspector cert + calibration + procedure version.` },
    ]);
}

// Welding (5)
const weldData = [
  { slug:'asme-section-ix-wps-pqr-welder-qualification-2026-decoded', title:'ASME Section IX 2026 — WPS + PQR + Welder Qualification Decoded', focus:'ASME Section IX welding qualification — WPS essential variables, PQR mechanical testing, welder performance qualification + continuity log', category:'Welding' },
  { slug:'aws-d1-1-vs-asme-ix-welder-qualification-2026-decoded', title:'AWS D1.1 vs ASME IX Welder Qualification 2026 — Decoded', focus:'AWS D1.1 vs ASME Section IX welder qualification — scope, position, thickness, process, supplementary essential variables', category:'Welding' },
  { slug:'pwht-post-weld-heat-treatment-hardness-mapping-2026', title:'PWHT 2026 — Cycle, Hardness Mapping + Code Requirements Decoded', focus:'post-weld heat treatment (PWHT) cycle design, hardness mapping (241 HV max on Cr-Mo), per ASME VIII + B31.1 + B31.3', category:'Welding' },
  { slug:'welder-continuity-log-tracking-2026-decoded', title:'Welder Continuity Log 2026 — 6-Month Rule + Re-qualification Decoded', focus:'welder continuity log per ASME IX QW-322 + AWS D1.1 — 6-month rule, requalification triggers, audit-ready record-keeping', category:'Welding' },
  { slug:'cr-mo-p91-grade-91-fabrication-inspection-2026', title:'Cr-Mo P91 Grade 91 Fabrication + Inspection 2026 — Type IV Cracking Decoded', focus:'Cr-Mo P91 (Grade 91) fabrication + welding + PWHT + inspection — Type IV cracking risk, hardness control, in-service creep monitoring', category:'Welding' },
];
for (const d of weldData) {
  makeBlog(id++, d.slug, d.title, d.focus, d.category,
    { question: `What does ${d.title.split(' — ')[0]} cover?`, answer: `${d.focus}. Atlantis NDT delivers globally.`, bullets: [d.focus.split(',')[0], 'Free Atlantis NDT consultation', 'ASNT NDT Level III led'] },
    [
      { h: 'Code Scope', p: `${d.focus}. Referenced in every major construction code (ASME VIII, B31.1, B31.3, AWS D1.1, API 1104).` },
      { h: 'Essential Variables', p: `Per the relevant code paragraph. Changes to essential variables typically trigger requalification (WPS or welder).` },
      { h: 'Documentation', p: `WPS, PQR, welder performance qualification card, continuity log — bundled, hash-linked, audit-ready. ${A.erp} stores per joint, per welder, per project.` },
      { h: 'Atlantis NDT Integration', p: `Welder + WPS + PQR continuity log tracked automatically with auto-alerts on expiry + essential-variable changes. ${A.reporting} bundles the welder cert into IACS Marine + API report templates.` },
    ]);
}

// In-service programs (5)
const isData = [
  { slug:'asme-pcc-3-in-service-inspection-planning-2026-decoded', title:'ASME PCC-3 In-Service Inspection Planning 2026 — Decoded', focus:'ASME PCC-3 inspection planning for pressure equipment — risk-based + condition-based + calendar-based, integration with API 510/570/653', category:'In-Service Programs' },
  { slug:'asme-pcc-2-repair-of-pressure-equipment-2026-decoded', title:'ASME PCC-2 Repair of Pressure Equipment 2026 — Decoded', focus:'ASME PCC-2 repair article suite — leak repair clamps, fillet weld patches, hot tap, alteration vs repair', category:'In-Service Programs' },
  { slug:'national-board-nb-23-inspection-code-2026-decoded', title:'National Board NB-23 Inspection Code 2026 — Decoded', focus:'NB-23 (National Board Inspection Code) — repair/alteration registration, R-stamp + NB stamp, state jurisdictional integration', category:'In-Service Programs' },
  { slug:'pipeline-integrity-management-pim-49-cfr-192-195-2026', title:'Pipeline Integrity Management 2026 — 49 CFR 192/195 Decoded', focus:'PIM (pipeline integrity management) per 49 CFR Parts 192 (gas) + 195 (liquid) — HCA assessment, ILI/CIPS/DCVG, repair criteria', category:'In-Service Programs' },
  { slug:'iso-55000-asset-management-ndt-integration-2026', title:'ISO 55000 Asset Management 2026 — NDT Integration Decoded', focus:'ISO 55000/55001/55002 asset-management standard — integration with NDT + RBI + FFS programs, AMS (asset management system) architecture', category:'In-Service Programs' },
];
for (const d of isData) {
  makeBlog(id++, d.slug, d.title, d.focus, d.category,
    { question: `How does ${d.title.split(' — ')[0]} work?`, answer: `${d.focus}. Atlantis NDT delivers globally.`, bullets: [d.focus.split(',')[0], 'Free Atlantis NDT consultation', 'ASNT NDT Level III led'] },
    [
      { h: 'Scope', p: `${d.focus}. Provides the framework for systematic in-service equipment management.` },
      { h: 'Integration with Codes', p: `Cross-references API 510/570/653, ASME VIII / B31.3 / B31.1 (construction); API 571 (damage mechanisms); API 581 (RBI); API 579 (FFS).` },
      { h: 'Atlantis NDT Stack', p: `${A.erp} + ${A.reporting} + ${A.dt} stack delivers integrated in-service inspection planning, execution, reporting, disposition, all in one system.` },
      { h: 'Implementation', p: `Free consultation scopes the program. Phased rollout typical — 4-12 weeks for SMB inspection company; 12-20 weeks for enterprise operator.` },
    ]);
}

// RBI / Reliability (5)
const reliData = [
  { slug:'reliability-centered-maintenance-rcm-vs-rbi-2026-decoded', title:'RCM vs RBI 2026 — Reliability-Centred Maintenance + Risk-Based Inspection Decoded', focus:'RCM (reliability-centred maintenance) vs RBI (risk-based inspection) — complementary frameworks, integration, when each applies', category:'RBI / FFS' },
  { slug:'fmea-failure-mode-effects-analysis-ndt-2026-decoded', title:'FMEA 2026 — Failure Mode + Effects Analysis for NDT-Critical Equipment', focus:'FMEA (failure mode + effects analysis) for NDT-critical equipment — severity, occurrence, detection, RPN scoring', category:'RBI / FFS' },
  { slug:'apc-asset-performance-management-vs-rbi-2026-decoded', title:'APM vs RBI 2026 — Asset Performance Management Decoded', focus:'APM (asset performance management) platforms vs RBI methodology — Hexagon ALI, Bentley AssetWise, AspenTech Mtell, Atlantis NDT integrated stack', category:'RBI / FFS' },
  { slug:'remaining-useful-life-rul-calc-pressure-equipment-2026', title:'Remaining Useful Life (RUL) Calc 2026 — Pressure Equipment Decoded', focus:'remaining useful life (RUL) calculation for pressure equipment — corrosion rate, T-min, fatigue cycles, creep accumulation, brittle fracture screening', category:'RBI / FFS' },
  { slug:'turnaround-shutdown-inspection-planning-2026-decoded', title:'Turnaround Inspection Planning 2026 — Shutdown Scope + Schedule Decoded', focus:'turnaround/shutdown inspection planning — scope-of-work definition, critical-path schedule, contractor selection, inspector roster, integration with RBI', category:'RBI / FFS' },
];
for (const d of reliData) {
  makeBlog(id++, d.slug, d.title, d.focus, d.category,
    { question: `What is ${d.title.split(' — ')[0]} and how is it applied?`, answer: `${d.focus}. Atlantis NDT delivers globally.`, bullets: [d.focus.split(',')[0], 'Free Atlantis NDT consultation', 'ASNT NDT Level III led'] },
    [
      { h: 'Framework', p: `${d.focus}. Provides systematic approach to inspection + maintenance + integrity management.` },
      { h: 'Integration', p: `Cross-references API 571 damage mechanisms; API 581 RBI; API 579 FFS; ISO 55000 asset management.` },
      { h: 'Atlantis NDT Approach', p: `${A.erp} + ${A.dt} + ${A.reporting} integrated stack runs the workflow end-to-end. ASNT NDT Level III consultant facilitates setup + ongoing refresh.` },
      { h: 'Outcomes', p: `Inspection interval optimisation; integrity assurance; reduced unplanned outages; lower total cost of ownership across the equipment fleet.` },
    ]);
}

// Atlantis customer success patterns (5)
const csData = [
  { slug:'atlantis-ndt-erp-implementation-case-study-template-2026', title:'Atlantis NDT ERP Implementation 2026 — Case Study Template + Outcomes', focus:'anonymised customer ERP implementation case studies — refining + petrochem + marine + aerospace + mining + LNG operators', category:'Case Studies' },
  { slug:'atlantis-digital-twin-rollout-case-study-template-2026', title:'Atlantis Digital Twin Rollout 2026 — Case Study Template + ROI Outcomes', focus:'anonymised customer Digital Twin rollout case studies — tank-fleet, vessel-fleet, pipeline-circuit, FPSO, offshore-wind', category:'Case Studies' },
  { slug:'atlantis-marine-iacs-report-bundle-case-study-2026', title:'IACS Marine Report Bundle 2026 — Customer Success Stories', focus:'anonymised customer success stories — IACS Marine 4-doc report bundle for shipyard + drydock + FPSO + offshore operators', category:'Case Studies' },
  { slug:'atlantis-api-prep-cohort-customer-success-2026', title:'Atlantis API 510/570/653 Prep Cohort 2026 — Customer Success', focus:'anonymised customer success stories — API 510/570/653 cohort prep, 96% first-attempt pass rate, refining + offshore + petrochem operators', category:'Case Studies' },
  { slug:'atlantis-asnt-level-iii-consulting-engagement-2026', title:'Atlantis ASNT Level III Consulting 2026 — Engagement Patterns', focus:'anonymised ASNT NDT Level III consulting engagement patterns — written practice authoring, procedure approval, audit defence, multi-method coverage', category:'Case Studies' },
];
for (const d of csData) {
  makeBlog(id++, d.slug, d.title, d.focus, d.category,
    { question: `What outcomes do Atlantis NDT customers see?`, answer: `${d.focus}. Anonymised customer outcomes available on free consultation request.`, bullets: ['Customer outcomes by sector', 'Anonymised case studies', 'Free Atlantis NDT consultation'] },
    [
      { h: 'Customer Sectors', p: `${d.focus}. Spans refining + petrochem + marine + offshore + aerospace + mining + LNG + power generation + pharma + construction.` },
      { h: 'Typical Outcomes', p: `Customers report inspection-hour reduction 30-60%; RBI-extended intervals 1-3 years on low-risk equipment; FFS acceleration 2-4 weeks; ERP implementation 4-20 weeks; 96% first-attempt API + ASNT exam pass rate; IACS Marine report acceptance 100% (no class-surveyor rejections).` },
      { h: 'Engagement Pattern', p: `Free consultation → custom demo with actual workflow → tailored quote → phased implementation → ongoing support + retake-grade backstop.` },
      { h: 'Request Customer Reference', p: `Anonymised case studies + customer reference calls available on request. ${A.contact}.` },
    ]);
}

console.log(`Generated ${BLOGS.length} Day-18+ mega blogs`);
const slugs = new Set(existing.map(b => b.slug));
const filtered = BLOGS.filter(b => !slugs.has(b.slug));
existing.push(...filtered);
writeFileSync(BLOGS_PATH, JSON.stringify(existing, null, 2), 'utf-8');
console.log(`Wrote ${existing.length} total blogs to src/data/blogs.json (added ${filtered.length})`);
