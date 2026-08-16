#!/usr/bin/env node
/**
 * Day-9 — Generate 13 new code-knowledge + DT cluster blogs into src/data/blogs.json.
 *
 * Cluster A (9): ASME Section V Articles 2 / 5 / 6 / 7, AWS D1.1, ASME B31.1,
 * B31.3, NAS 410, ASNT SNT-TC-1A vs ISO 9712 deep-comparison.
 *
 * Cluster B (4): DT for tank inspection, DT for pressure vessels, DT for pipeline
 * integrity, DT ROI for NDT inspection companies.
 *
 * Each entry mirrors blogs.json entry id=89 (Article 4) — quickAnswer + ~2,500
 * word content + 8 H2 sections + inline anchors to money/cert pages. JSON-driven
 * → auto-renders through BlogDetail.tsx → Day-8 author E-E-A-T cascade applies.
 *
 * §18 compliant — no numeric pricing tokens; uses proof signals only.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const BLOGS_PATH = join(ROOT, 'src', 'data', 'blogs.json');
const existing = JSON.parse(readFileSync(BLOGS_PATH, 'utf-8'));

const today = '2026-06-17';
const dateHuman = 'June 17, 2026';

// ─── Helper to wrap a blog entry ─────────────────────────────────────
function blog({ id, title, slug, metaDescription, snippet, content, quickAnswer, category = 'Standards & Codes' }) {
  return {
    id: String(id),
    title,
    slug,
    date: dateHuman,
    author: 'Anoop Rayavarapu',
    category,
    metaDescription,
    snippet,
    content,
    order: 0,
    createdAt: today,
    updatedAt: today,
    quickAnswer,
  };
}

// ─── Anchor helper ───────────────────────────────────────────────────
const A = {
  asnt: '<a href="/asnt-certification">ASNT certification</a>',
  sntTcOnePost: '<a href="/blog/asnt-snt-tc-1a-certification-requirements">SNT-TC-1A guide</a>',
  api510: '<a href="/api-510-certification">API 510 Pressure Vessel Inspector</a>',
  api570: '<a href="/api-570-certification">API 570 Piping Inspector</a>',
  api653: '<a href="/api-653-certification">API 653 Tank Inspector</a>',
  level3: '<a href="/consulting/asnt-level-iii-consulting-services">ASNT Level III consulting</a>',
  reporting: '<a href="/best-ndt-reporting-software-2026">NDT reporting software</a>',
  marine: '<a href="/marine-offshore-ndt-services">Marine &amp; offshore NDT</a>',
  erp: '<a href="/erp">Atlantis NDT ERP</a>',
  dt: '<a href="/digital-twins">Atlantis Digital Twin platform</a>',
  dtRoi: '<a href="/digital-twin-roi-calculator">Digital Twin ROI calculator</a>',
  dtTank: '<a href="/digital-twins/storage-tank">Tank Digital Twin</a>',
  ut: '<a href="/ultrasonic-testing">ultrasonic testing</a>',
  rt: '<a href="/radiographic-testing">radiographic testing</a>',
  mt: '<a href="/magnetic-particle-testing">magnetic particle testing</a>',
  pt: '<a href="/penetrant-testing">liquid penetrant testing</a>',
  ffs: '<a href="/consulting/fitness-for-service-api-579">API 579 FFS</a>',
  rbi: '<a href="/consulting/rbi-program-design">RBI program design</a>',
  contact: '<a href="/contact">request a demo</a>',
};

// ─── Reusable footer ─────────────────────────────────────────────────
const FOOTER = (relatedAnchors = []) => `\n<h2>Related Atlantis NDT Resources</h2>\n<ul>\n  <li>${A.asnt} — Level I/II/III pathway, pass rates, employer recognition</li>\n  <li>${A.api510} · ${A.api570} · ${A.api653}</li>\n  <li>${A.level3} — outsourced Level III of record with SLA</li>\n  <li>${A.reporting} — IACS-accepted Marine NDT report format auto-bundled</li>\n  <li>${A.erp} — affordable, accessible, fully customizable; 30+ Odoo apps included</li>\n  <li>${A.dt} — 3D inspection-data overlay, API 579 FFS, predictive maintenance</li>\n  ${relatedAnchors.map(a => `<li>${a}</li>`).join('\n  ')}\n</ul>\n<p><strong>Atlantis NDT</strong> is led by Anoop Rayavarapu (ASNT NDT Level III, API 653 Authorized Inspector, ISO 9001 Lead Auditor). Free consultation for NDT inspection companies, training providers, and asset owners worldwide. ${A.contact} — pricing varies by region and scope, quote on request.</p>`;

// =====================================================================
//  CLUSTER A — 9 code-knowledge blogs
// =====================================================================

const BLOGS = [];

// ───────────────────────────────────────────────────────────────
// 1. ASME Section V Article 2 — RT requirements
// ───────────────────────────────────────────────────────────────
BLOGS.push(blog({
  id: 300,
  title: 'ASME Section V Article 2 — Radiographic Testing (RT) Requirements Explained',
  slug: 'asme-section-v-article-2-radiographic-testing-rt-requirements-explained',
  metaDescription: 'ASME Section V Article 2 RT requirements decoded — IQI placement, density limits, source-to-film distance, geometric unsharpness, weld coverage, technique sheets. ASNT Level III practical guide.',
  snippet: 'ASME Section V Article 2 sets the rules for radiographic testing of weldments and castings. This 2026 guide explains IQI selection, geometric unsharpness limits, technique qualification, and how Article 2 ties into ASME Section VIII, B31.3, and API 510/570/653 acceptance.',
  quickAnswer: {
    question: 'What does ASME Section V Article 2 require for radiographic testing?',
    answer: 'ASME Section V Article 2 (latest 2023 edition) specifies the radiographic examination requirements for welds and castings — radiation source selection (X-ray vs Ir-192 vs Co-60), Image Quality Indicator (IQI) type and placement, source-to-film distance, geometric unsharpness limits, film density (1.8–4.0 acceptable for X-ray), and how to qualify the technique sheet. Both single-wall and double-wall viewing techniques are addressed.',
    bullets: [
      'IQI: ASTM E1025 hole-type or E747 wire-type, placed on source side; sensitivity ≥ 2-2T equivalent',
      'Geometric unsharpness: Ug = F·t/d ≤ 0.020 in. for t≤2 in.; tighter on thicker sections',
      'Film density: 1.8–4.0 for X-ray, 2.0–4.0 for gamma; per code-paragraph T-282',
    ],
  },
  content: `<h2>ASME Section V Article 2 — Practical Industry Guide</h2>
<p><strong>ASME Section V Article 2</strong> is the foundational ASME nondestructive examination standard for radiographic testing of welds, castings, and forgings. It is referenced by ASME Section VIII (pressure vessel construction), ASME B31.1 (power piping), ASME B31.3 (process piping), API 510, API 570, API 653, AWS D1.1, NAVSEA T9074-AS-GIB-010, and dozens of international jurisdictional codes. Without Article 2 compliance, a radiograph cannot be used to support code acceptance of a welded joint, period.</p>

<h2>Scope and Applicability of Article 2</h2>
<p>Article 2 (T-210 through T-292) covers conventional radiography using X-ray sources up to 1 MeV and gamma radiation sources (Iridium-192, Cobalt-60, Selenium-75, Ytterbium-169). It addresses both single-wall single-image (SWSI) and double-wall double-image (DWDI) viewing techniques and applies to welds, castings, fabrications, and bonded composites. Computed radiography (CR) and digital detector array (DDA) techniques are addressed in companion Articles 22 and 27 — but Article 2 remains the baseline for film-based RT.</p>
<p>Equipment owners running multi-code inspection programs ${A.rbi} should be aware that ${A.ut} is the preferred alternative for many in-service inspections under API 510 § 5.6 and API 570 § 5.7 because of access, throughput, and ALARA radiation considerations — but Article 2 RT remains mandatory for original construction acceptance on most ASME-VIII Class 1 and B31.3 Category M services.</p>

<h2>Image Quality Indicators (IQIs) — T-233</h2>
<p>IQIs are the most-rejected element of any radiograph. Article 2 (T-233.1, T-233.2, T-276) allows two IQI types: hole-type per ASTM E1025 (the diamond-shaped plaque with three drilled holes 1T, 2T, 4T in diameter where T is the IQI thickness), or wire-type per ASTM E747 (a sequence of six wires of graduated diameter encased in low-attenuation plastic). The IQI is normally placed on the SOURCE side of the weld; placing it film-side requires marking with the letter <strong>F</strong> and using one designation thinner per T-277.</p>
<p>Selection of IQI designator is based on the radiographic-thickness range tables in T-276. For nominal 25 mm (1-inch) weld thickness with no reinforcement, the typical IQI is designator 25, with required hole 2T essential. The required sensitivity of 2-2T means the 2T hole on a thickness-25 IQI must be visible on the radiograph. Failure to demonstrate the essential hole or wire is an automatic technique rejection — re-shoot required.</p>

<h2>Geometric Unsharpness (Ug) Limits — T-274.2</h2>
<p>Geometric unsharpness Ug = F · t / d, where F = source size (mm), t = specimen-to-film distance (mm), d = source-to-specimen distance (mm). Article 2 sets the upper limit: 0.020 in. for material thickness ≤ 2 in., 0.030 in. for 2–3 in., 0.040 in. for 3–4 in., 0.070 in. for &gt; 4 in. A 4 mm × 4 mm Ir-192 source at d = 600 mm, t = 50 mm yields Ug = 0.013 in. — within the 0.020 limit. Cobalt-60 sources (much larger physical dimension, 3–5 mm) require longer SFD to stay within Ug limits.</p>
<p>Source-to-film distance calculation is the most common technique-sheet error caught by qualified Level III reviewers. The Ug equation MUST be in the documented technique sheet, with the worst-case geometry called out. Atlantis NDT Reporting Software auto-calculates Ug from the technique inputs and flags non-compliant geometry before the shoot.</p>

<h2>Density and Penetrameter Sensitivity — T-282 + T-283</h2>
<p>Film density (D = log₁₀ (Io/I)) per T-282 must be 1.8–4.0 for X-ray and 2.0–4.0 for gamma sources, measured through the area of interest (weld) NOT the parent metal. Density variation across a single radiograph must not exceed −15 % / +30 % of the IQI density. A densitometer calibrated against an NIST-traceable step wedge is mandatory in the lab.</p>
<p>Sensitivity per T-283 is the IQI essential hole/wire that must be visible. Cracks, lack of fusion, lack of penetration, and slag inclusions in the weld are interpreted only after demonstrating that the radiograph meets the density and sensitivity requirements. Order matters — never call indications on a radiograph that fails the IQI check.</p>

<h2>Single-Wall vs Double-Wall Techniques</h2>
<p>Article 2 addresses three viewing geometries:</p>
<ol>
  <li><strong>Single-Wall Single-Image (SWSI) — T-271.1:</strong> source outside, film inside (or vice versa); one weld interrogated per exposure. Preferred for pressure vessels and any pipe &gt; 3.5 inch NPS where access permits.</li>
  <li><strong>Double-Wall Single-Image (DWSI) — T-271.2:</strong> source outside, film outside; only the far-side weld is interpreted (near-side weld is too unsharp). Used on small-bore piping where SWSI is impractical.</li>
  <li><strong>Double-Wall Double-Image (DWDI) — T-271.3:</strong> source offset 90° to weld plane; both near and far welds visible, offset elliptically on the film. Limited to NPS ≤ 3.5 in. Minimum two shots at 90° spacing required for full circumferential coverage.</li>
</ol>

<h2>Article 2 Cross-References — ASME Section VIII, B31.3, B31.1, AWS D1.1, API</h2>
<p>Article 2 is referenced (not duplicated) by every downstream construction code. ASME Section VIII Div 1 § UW-51 requires "full RT" per Article 2 for Class 1 lethal-service and some thicknesses; Div 2 § 7.4.7 specifies fluorescent screen / lead-screen rules. ASME B31.3 § 344.5 calls out Article 2 for Category M (severe cyclic / hazardous) and Category K services. ASME B31.1 § 136.4 calls out 100 % RT for Class 1 components &gt; 19 mm wall.</p>
<p>AWS D1.1 Clause 8 and Annex G map to Article 2 with adjusted acceptance criteria for structural welds (cumulative slag, porosity, undercut limits). API 510 § 8 + API 570 § 5.7 + API 653 § 12 reference Article 2 for spot-RT on alterations and repairs. ${A.api510}, ${A.api570}, ${A.api653} all expect inspectors to read and interpret an Article 2 radiograph.</p>

<h2>Technique Sheet, Procedure Qualification, and Records — T-291 + T-292</h2>
<p>Every radiograph requires a written technique sheet (T-292.5) capturing: source type and strength, source-to-film distance, exposure time, film type, screens, IQI designator and location, geometric unsharpness calculation, density measurements, identification marks, weld identification, joint geometry sketch, and personnel qualifications.</p>
<p>The procedure must be qualified per ASME Section V Mandatory Appendix when a "Demonstration" approach is required by the referencing code. The Procedure Qualification Record (PQR) bundles a worst-case shot, the IQI achieved, the density measured, and the demonstrated coverage. Atlantis NDT Reporting Software ships a built-in Article 2 technique-sheet template with Ug auto-calculation, IQI-table lookup, and PDF auto-generation per shot.</p>

<h2>Common Article 2 Audit Findings</h2>
<ul>
  <li>IQI essential hole/wire NOT visible — most common rejection</li>
  <li>Density &lt; 1.8 or &gt; 4.0 (over- or under-exposure)</li>
  <li>Ug calculation missing from technique sheet</li>
  <li>SFD inconsistency between technique sheet and field shot</li>
  <li>Source-side / film-side IQI marking missing the <strong>F</strong> stamp when film-side</li>
  <li>Multi-shot circumferential coverage gaps on DWDI (less than 2 shots at 90°)</li>
  <li>${A.sntTcOnePost} Level II RT certification expired on the interpreting inspector</li>
  <li>Calibration block / step-wedge traceability not documented</li>
</ul>

<h2>Personnel Qualification — Article 2 + ASNT SNT-TC-1A / ISO 9712</h2>
<p>Article 2 itself does not certify personnel — it references ASNT SNT-TC-1A, CP-189, ACCP, ISO 9712, or an employer-approved equivalent (e.g., NAS 410 for aerospace). For pressure-equipment work in the US, the dominant scheme is SNT-TC-1A Level II RT. For European / Middle Eastern projects, ISO 9712 Level 2 RT is more common.</p>
<p>Annual eye exam (near-vision Jaeger J1 + colour-perception Ishihara) is required by both ASNT SNT-TC-1A § 8.2 and ISO 9712 § 7.4 — and is the second most common audit finding when missing from the Level II cert pack. ${A.level3} provides written-practice authoring, training-hour audit, and exam administration to keep your RT roster Article 2-compliant year-round.</p>

<h2>Frequently Asked Questions</h2>
<h3>Q1: Can I use digital radiography (DR) under Article 2?</h3>
<p><strong>A:</strong> No — Article 2 is film-only. Computed Radiography is Article 22; Digital Detector Arrays are Article 27. If your specification calls out "Article 2", you must shoot film unless the referencing code or contract amends the technique. Many recent ASME VIII fab specs allow either Article 2 OR Article 22/27 by mutual agreement; check the contract carefully.</p>
<h3>Q2: What sensitivity does Article 2 require?</h3>
<p><strong>A:</strong> Hole-type IQIs require the 2T hole to be visible (2-2T sensitivity); wire-type IQIs require a specific wire diameter visible per the table in T-276 (typically wire 8 or smaller depending on thickness). The required IQI designator is determined by the radiographic thickness, which is the weld thickness plus reinforcement.</p>
<h3>Q3: Is Ir-192 still allowed for thin pipe under 0.5-inch wall?</h3>
<p><strong>A:</strong> Yes, but the Ug equation governs. A 3 mm × 3 mm Ir-192 source at SFD 600 mm gives Ug = 0.005 in. on a 0.5 in. weld — well within limits. The bigger concern on thin wall is contrast — Ir-192 spectrum (avg ≈ 380 keV) gives flatter contrast than X-ray, so density and IQI sensitivity become harder to achieve. Many fabricators prefer 160–200 kV X-ray for pipe &lt; 0.5 in. wall.</p>
<h3>Q4: How does Article 2 compare with ISO 17636-1?</h3>
<p><strong>A:</strong> ISO 17636-1 (RT of metallic materials, film-based) is the European / international equivalent. Both define IQI placement, Ug limits, and density ranges, but ISO 17636-1 uses single-wire EN ISO 19232 IQIs by default (Article 2 allows wire OR hole). For projects accepted under both ASME and EN, dual-IQI exposures are common. The acceptance criteria are NOT in Article 2 / ISO 17636 — they live in the construction code (ASME VIII, B31.3, ISO 5817).</p>
<h3>Q5: Does Article 2 cover acceptance criteria for porosity, slag, and cracks?</h3>
<p><strong>A:</strong> No. Article 2 is the WORKMANSHIP standard for HOW to shoot the radiograph; the acceptance criteria for the indications come from the construction code being used. ASME VIII Div 1 § UW-51 (no crack-like flaws), ASME B31.3 § 341.3.2 (Table 341.3.2A), AWS D1.1 Table 8.1 (slag length per inch), and API 1104 § 9 each define their own pass/fail rules. Always pair Article 2 with the construction code's acceptance section.</p>
<h3>Q6: How long must Article 2 radiographs be retained?</h3>
<p><strong>A:</strong> Article 2 itself does not specify retention. Most referencing codes require a minimum of 5 years (ASME VIII § UW-52), often longer for life-of-equipment retention (typical for nuclear, offshore platforms, and LNG service). Digital archive of scanned films with SHA-256 hash chain is now widely accepted — Atlantis NDT Reporting Software auto-generates the archive bundle.</p>
<h3>Q7: Are crawler / crawler-fed isotope cameras allowed under Article 2?</h3>
<p><strong>A:</strong> Yes, provided source size, SFD, and Ug calculations meet T-274.2. Pipeline pigging-crawler isotope shots are extremely common for cross-country pipeline construction (B31.4, B31.8) — and they are still Article 2 RT in spirit. The technique sheet must call out the crawler geometry, source size, and Ug calc for the worst weld position.</p>
<h3>Q8: How does Article 2 interact with API 1104 for pipeline welds?</h3>
<p><strong>A:</strong> API 1104 § 11.1 references "an approved radiographic procedure". For US pipelines, that's almost always Article 2. The acceptance criteria are in API 1104 § 9 (image quality, indication length limits, cluster rules), NOT Article 2 — so Article 2 governs HOW you shoot, API 1104 governs PASS/FAIL on the pipeline weld.</p>
${FOOTER([A.rt, A.ffs])}`,
}));

// (Continued in next blog entries appended below the dispatch)

// =====================================================================
// CLUSTER A continues — Articles 5, 6, 7
// =====================================================================

// 2. ASME V Article 5 — UT thickness measurement
BLOGS.push(blog({
  id: 301,
  title: 'ASME Section V Article 5 — Ultrasonic Thickness Measurement Requirements (2026)',
  slug: 'asme-section-v-article-5-ultrasonic-thickness-measurement-requirements',
  metaDescription: 'ASME Section V Article 5 ultrasonic thickness measurement decoded — calibration, transducer selection, T-min calculation, corrosion grid mapping, API 510/570/653 cross-reference. ASNT Level III guide.',
  snippet: 'ASME Section V Article 5 is the UT thickness measurement standard for in-service pressure equipment. This 2026 guide explains transducer selection, calibration, corrosion-rate calculation, T-min remaining-life math, and how Article 5 plugs into API 510/570/653 inspection workflows.',
  quickAnswer: {
    question: 'What does ASME Section V Article 5 cover for ultrasonic thickness?',
    answer: 'ASME Section V Article 5 (latest 2023 edition) governs ultrasonic thickness measurement (UT-T) of metallic materials — equipment qualification, calibration blocks (step wedges, IIW V1/V2, ASTM E797 reference), transducer selection (typical 5–10 MHz dual-element for general; single-element for hot service), couplant, surface preparation, scanning patterns, and how to record CMLs (condition-monitoring locations) and calculate corrosion rates.',
    bullets: [
      'Calibration: 2-point min on step-wedge bracketing the expected thickness',
      'Dual-element transducer for thin wall (3–25 mm); single-element for thick',
      'Recording: CML grid + min/avg/max readings; corrosion rate from successive surveys',
    ],
  },
  content: `<h2>ASME Section V Article 5 — Practical Implementation Guide</h2>
<p><strong>ASME Section V Article 5</strong> is the ASME nondestructive examination standard for ultrasonic thickness measurement. It is the single most-referenced ASME Section V article in operating-plant inspection — every API 510 external survey, every API 570 piping circuit reading, and every API 653 tank-shell thickness profile traces back to Article 5. Without Article 5 compliance, the thickness data cannot be used to calculate corrosion rate or remaining life under ${A.ffs} (API 579-1 / ASME FFS-1).</p>

<h2>Scope and Applicability</h2>
<p>Article 5 (T-510 through T-590) covers ultrasonic thickness measurement of metallic materials including carbon steel, low-alloy steel, austenitic stainless, duplex, and clad construction. It is not used for crack detection (that's Article 4) or flaw sizing — Article 5 is purely about remaining-wall measurement. The standard applies to surfaces from 0 °C to 540 °C (above 540 °C use special hot-couplant + delay-line techniques).</p>
<p>Applicability examples: external CML grid on a 10-year API 510 pressure vessel inspection, ${A.api570} TML circuit on Class-1 piping, ${A.api653} 5-year tank shell course thickness profile, ${A.api510} field external survey, refractory-clad fired-heater tube measurement, and pipeline integrity-management thickness mapping.</p>

<h2>Equipment Qualification — T-530</h2>
<p>Article 5 requires the ultrasonic instrument to demonstrate ±0.1 mm or ±0.004 in. accuracy across the operating range, verified on a calibrated step wedge (ASTM E797). Common qualified instruments: Olympus 38DL Plus, Olympus EPOCH 650 (in thickness mode), Sonatest Master Scan / Sitescan, GE USM Go +, Modsonic Einstein III. The instrument calibration certificate (ISO/IEC 17025 traceable) must be in date for the inspection.</p>
<p>Transducer selection is the most common source of measurement error:</p>
<ul>
  <li><strong>Dual-element transducers (5 MHz typical):</strong> required for thin wall 3–25 mm, corroded surfaces, and curved geometries. Olympus D790, D791, D7227 series, or equivalent.</li>
  <li><strong>Single-element transducers (5–10 MHz, 0.25 in. element):</strong> for clean surfaces and walls &gt; 25 mm.</li>
  <li><strong>High-temperature delay-line transducers:</strong> for surfaces 150–540 °C with appropriate hot couplant (silicone-based, IRT-X, or Sonotrace HT-260).</li>
  <li><strong>EMAT (electromagnetic-acoustic transducer):</strong> couplant-free, used for hot/dry surfaces and through-coating measurement.</li>
</ul>

<h2>Calibration Blocks and Procedure — T-561 + T-563</h2>
<p>Calibration MUST bracket the expected wall thickness. A two-point calibration on a step-wedge with steps spanning the expected range (e.g. 5 mm + 25 mm steps for piping 6–20 mm wall) is required at the start of every shift AND every two hours during the survey. Velocity input must match the material (carbon steel ≈ 5,920 m/s; austenitic SS ≈ 5,740 m/s; titanium ≈ 6,070 m/s).</p>
<p>Coupling on rough or coated surfaces is the dominant accuracy killer. Surface prep (wire-brush + light grinding to bright metal, removal of paint where measurement on bare steel is required) is mandatory before the calibration shot and every CML reading. For external service with intact coating, "through-coating" UT-T techniques exist (subtracting coating thickness from the gross reading), but require documented procedure-qualification per T-563.</p>

<h2>Condition-Monitoring Location (CML) Grid Design</h2>
<p>Article 5 doesn't dictate CML grid design — that comes from API 510 § 5.6 / API 570 § 5.7 / API 653 § 6. But the UT-T technique used at each CML must be Article 5-compliant. Typical grid practices:</p>
<ul>
  <li><strong>Pressure vessels (API 510):</strong> 1 CML per ft² on shell, 3-5 CMLs around each nozzle, 1 CML at each weld crossing; minimum 4 readings per CML, record min/avg/max.</li>
  <li><strong>Piping (API 570):</strong> CMLs at 10/2 / 4/8 / 6/12 o'clock at TML stations; spaced every 50 ft on Class-1 piping straight runs; intensified at elbows + tees + valves + reducers.</li>
  <li><strong>Tanks (API 653):</strong> shell course gridded 6 ft circumferential × full height; floor MFL scanning with UT-T verification on indications.</li>
</ul>
<p>The CML readings flow into the corrosion-rate calculation: long-term (LT) corrosion rate = (initial − current) / years-in-service; short-term (ST) rate = (previous − current) / interval. Inspection interval = min(remaining life / 2, max interval per code). Atlantis NDT ${A.reporting} auto-calculates LT/ST rates per CML, plots the trend, and flags any CML approaching T-min ≤ 12 months ahead.</p>

<h2>T-min, Remaining Life, and Article 5 Limits</h2>
<p>Article 5 produces the thickness data; ${A.api510}/${A.api570}/${A.api653} or ${A.ffs} calculates the disposition. T-minimum per ASME B31.3 § 304 for piping: t = PD / (2(SE + PY)); per ASME VIII Div 1 § UG-27 for cylindrical shells: t = PR / (SE − 0.6P). Once measured (Article 5) and design T-min (code) are known, remaining life = (t_actual − T-min) / corrosion rate.</p>
<p>If the actual thickness ever drops below code T-min, the equipment requires immediate FFS assessment under API 579 / ASME FFS-1 (Level 1, 2, or 3). Level 1 is a screening assessment — Atlantis NDT Level III consultants routinely run Level 2 / 3 evaluations for refineries and offshore operators globally.</p>

<h2>Surface Conditions and Article 5 Limitations</h2>
<p>Article 5 has known limitations that the inspector must understand:</p>
<ul>
  <li><strong>Pitting:</strong> a single deep pit may not be detected by a CML grid; bunched pits cause back-wall echo loss. Pitting-aware techniques (corrosion mapping with PA, B-scan automated UT) supplement Article 5 spot readings.</li>
  <li><strong>Lamellar (mid-wall) cracking / hydrogen blistering:</strong> a mid-wall crack reflects the signal early; what looks like a thinning reading is actually a flaw. Always confirm with Article 4 (UT for flaws) when a CML reads "too thin".</li>
  <li><strong>Refractory or insulation:</strong> requires removal of a cup-shaped section for surface access, or specialised through-insulation techniques (pulsed-eddy current ${A.dt} layers are the modern complement).</li>
  <li><strong>Hot service &gt; 540 °C:</strong> outside Article 5 scope; use refractory-line creep monitoring techniques per API 579 Part 10.</li>
</ul>

<h2>Article 5 Personnel Qualification</h2>
<p>Article 5 inspections require ASNT SNT-TC-1A Level II UT (or ISO 9712 Level 2 UT, or NAS 410 Level 2 UT for aerospace). The same eye-test requirement (Jaeger J1 + Ishihara) applies as Article 4. UT-T-specific training emphasises calibration discipline, velocity correction, and CML-grid interpretation. ${A.level3} provides written-practice and procedure approval for UT-T programs at refineries and offshore operators globally.</p>

<h2>Frequently Asked Questions</h2>
<h3>Q1: How often must I calibrate during an Article 5 survey?</h3>
<p><strong>A:</strong> At minimum at the start of each shift AND every two hours during use. T-561 says "as often as necessary to assure accuracy" — most inspector procedures pin this at 2-hour intervals or after any transducer / cable change.</p>
<h3>Q2: Can I use Article 5 readings for fitness-for-service assessment?</h3>
<p><strong>A:</strong> Yes — Article 5 thickness data feeds directly into ${A.ffs} (API 579 Level 1/2/3). The FFS report must reference the Article 5 procedure used, the calibration certificates, the CML grid sketch, and the inspector's Level II UT credentials.</p>
<h3>Q3: What's the difference between Article 4 UT and Article 5 UT-T?</h3>
<p><strong>A:</strong> Article 4 is flaw detection (cracks, LOF, slag, porosity) using angled-beam, PAUT, TOFD. Article 5 is wall-thickness measurement using normal-beam dual or single-element transducers. Different transducers, different calibration, different acceptance — same Code (Section V), different articles.</p>
<h3>Q4: Does Article 5 cover composite / non-metallic materials?</h3>
<p><strong>A:</strong> No. Article 5 is for metallic. Composite thickness measurement uses ASME Section V Article 30 (Phased-Array Ultrasonic Testing — Composite-Specific) or ASTM E2580 / E2581 for aerospace.</p>
<h3>Q5: How does Article 5 interact with API 510 / 570 / 653?</h3>
<p><strong>A:</strong> The API in-service standards REFERENCE Article 5 for thickness technique. API 510 § 8.3, API 570 § 8.2, and API 653 § 12.3 each call out "ultrasonic thickness measurement per ASME Section V Article 5 or equivalent." So you cannot do API external inspection without Article 5-qualified UT-T procedure.</p>
<h3>Q6: How long must CML data be retained?</h3>
<p><strong>A:</strong> Life-of-equipment minimum. Trending requires historical baseline — losing the 1990 baseline CML reading kills the 2026 remaining-life calc. Atlantis NDT Reporting Software stores SHA-256-hashed CML records with PDF/A-3 archive bundles.</p>
<h3>Q7: Is automated UT thickness mapping covered by Article 5?</h3>
<p><strong>A:</strong> Article 5 covers single-point spot readings. Automated UT corrosion mapping (with positional encoding, B-scan / C-scan output) is addressed in ASME Section V Article 4 (when used for sizing) and Article 5 (when used for thickness only). Most Class-1 fab specs accept automated thickness mapping under Article 5 if the inspection procedure is qualified per T-563.</p>
<h3>Q8: How does Article 5 integrate with digital-twin platforms?</h3>
<p><strong>A:</strong> Article 5 CML readings are the heartbeat input to a corrosion-aware digital twin. Atlantis NDT ${A.dt} pulls Article 5 CML data per inspection, layers the 3D corrosion map onto the asset model, calculates remaining life per ${A.ffs}, and forecasts re-inspection dates. This is the operational version of "smart" inspection.</p>
${FOOTER([A.ut, A.ffs, A.dt])}`,
}));

// 3. ASME V Article 6 — PT
BLOGS.push(blog({
  id: 302,
  title: 'ASME Section V Article 6 — Liquid Penetrant Testing (PT) Requirements Explained',
  slug: 'asme-section-v-article-6-liquid-penetrant-pt-requirements-explained',
  metaDescription: 'ASME Section V Article 6 liquid penetrant testing requirements decoded — penetrant family selection, dwell time, developer, lighting, acceptance, ASNT/ISO 9712 personnel. ASNT Level III practical guide.',
  snippet: 'ASME Section V Article 6 governs liquid-penetrant testing for surface-breaking discontinuities. This 2026 guide explains penetrant family selection, dwell time, developer application, lighting requirements, acceptance, and cross-reference to ASME VIII, B31.3, and AWS D1.1.',
  quickAnswer: {
    question: 'What does ASME Section V Article 6 require for liquid penetrant testing?',
    answer: 'ASME Section V Article 6 (latest 2023 edition) specifies liquid penetrant (PT) requirements for non-porous surface examination — penetrant family (Type I fluorescent vs Type II visible), method (A-water-washable, B-post-emulsifiable, C-solvent-removable), dwell time (typical 5–10 min), developer application, and inspection lighting (100 fc white-light for visible, ≤2 fc ambient + 1000 µW/cm² UV-A for fluorescent).',
    bullets: [
      'Penetrant dwell: minimum 5 min; longer for tight fatigue cracks, lower temperatures',
      'Visible-dye contrast ratio ≥ 4:1; fluorescent ASTM E165 sensitivity Level 2+',
      'Developer dwell: 7–60 min; never less than penetrant dwell',
    ],
  },
  content: `<h2>ASME Section V Article 6 — Practical PT Guide</h2>
<p><strong>ASME Section V Article 6</strong> is the ASME nondestructive examination standard for liquid-penetrant testing (PT or LPI). It is the most-used surface NDT method for non-magnetic materials — austenitic stainless steel, duplex, nickel alloys, titanium, aluminum, and copper — and it complements ${A.mt} (Article 7) for ferromagnetic materials. Article 6 is referenced by ASME Section VIII Div 1 § UW-51, B31.3 § 344.4, AWS D1.1 Annex M, API 510 / 570 / 653 alterations sections, and dozens of jurisdictional codes.</p>

<h2>Scope and Applicability — T-610</h2>
<p>Article 6 covers liquid-penetrant testing on non-porous metallic, ceramic, and some plastic surfaces. PT detects discontinuities OPEN TO THE SURFACE — cracks, laps, seams, lack of fusion, lack of penetration on the open root, porosity that breaks through. PT cannot detect subsurface flaws (use ${A.ut} Article 4 or RT Article 2). Surface temperature limits: 5 °C to 50 °C standard; higher / lower requires specially-qualified penetrant per Mandatory Appendix III.</p>
<p>Applicability examples: post-weld surface inspection of austenitic-SS pressure vessels (Article 6 is the workhorse since MT doesn't work on non-ferro), root-pass inspection on B31.3 process piping, finish-pass inspection on aerospace welds, fitness-for-service crack confirmation on ${A.ffs} Level 2 assessments, and ${A.api653} bottom-plate weld inspection on austenitic-clad tanks.</p>

<h2>Penetrant Family Selection — T-621 + T-622</h2>
<p>Article 6 recognises 6 process combinations (Type × Method):</p>
<ul>
  <li><strong>Type I (Fluorescent) — Method A (Water-Washable):</strong> highest sensitivity for tight cracks; quick on production lines; needs UV-A inspection booth (100 µW/cm² minimum, 1000 µW/cm² standard).</li>
  <li><strong>Type I — Method B (Post-Emulsifiable):</strong> hydrophilic or lipophilic emulsifier post-applied; highest sensitivity of all combinations; longer process, lab-quality results. Aerospace standard.</li>
  <li><strong>Type I — Method C (Solvent-Removable):</strong> portable, field-friendly; fluorescent kits used at heights and confined spaces.</li>
  <li><strong>Type II (Visible Dye) — Method A:</strong> water-washable visible; less sensitive than fluorescent but no UV needed.</li>
  <li><strong>Type II — Method C (Solvent-Removable Visible Dye):</strong> the workhorse field method — Magnaflux SPOTCHECK or equivalent; aerosol penetrant + cleaner + developer; portable, low-cost, 5–10 min process.</li>
</ul>
<p>Sensitivity classification per ASTM E165: Level ½ (low), Level 1 (medium), Level 2 (high), Level 3 (ultra-high), Level 4 (ultra-high). Aerospace work typically requires Level 3 fluorescent post-emulsifiable; pressure-equipment work most commonly uses Level 1 or 2 visible solvent-removable.</p>

<h2>Dwell Time, Removal, and Developer — T-672 + T-673 + T-674</h2>
<p>Penetrant dwell (T-672): minimum 5 minutes for most penetrants on most discontinuity types; up to 60 minutes for tight fatigue cracks or stress corrosion cracking (SCC). At temperatures below 16 °C, dwell time must be doubled. Article 6 mandates the dwell be documented for every shot.</p>
<p>Penetrant removal (T-673): solvent-removable uses a lint-free cloth dampened with remover (NEVER spray remover directly on the surface — washes penetrant out of cracks). Water-washable uses a low-pressure (≤ 50 psi / 350 kPa) low-temperature (≤ 43 °C) water spray at 30° angle, not normal to surface. Over-washing is the dominant cause of false negatives.</p>
<p>Developer (T-674): non-aqueous wet developer is the most common (Magnaflux SKD-S2, Met-L-Chek E-59A). Apply uniform, light coat 15–30 cm from surface. Developer dwell: 7–60 minutes minimum, never less than penetrant dwell. The developer draws penetrant out of the discontinuity and produces a visible indication width proportional to defect depth.</p>

<h2>Lighting Requirements — T-676 + T-680</h2>
<p>Visible-dye PT (Type II) requires 100 fc (1000 lux) minimum illumination at the surface, measured with a calibrated photometer. Fluorescent PT (Type I) requires:</p>
<ul>
  <li>Ambient white light ≤ 2 fc (20 lux) — dark booth</li>
  <li>UV-A radiation ≥ 1000 µW/cm² at the surface (320–400 nm peak), measured with a calibrated radiometer</li>
  <li>Inspector dark-adapted 5 min minimum before reading</li>
  <li>UV lamp warm-up 5 min minimum before measurement</li>
</ul>
<p>Light verification is the second most-common audit finding after dwell-time documentation gaps.</p>

<h2>Acceptance Criteria — Comes from the Construction Code</h2>
<p>Article 6 itself defines HOW to perform PT but NOT what is acceptable. Acceptance criteria come from the referencing code:</p>
<ul>
  <li><strong>ASME VIII Div 1 § UW-51:</strong> no cracks, no linear indications ≥ 1.5 mm length, no rounded indications ≥ 5 mm</li>
  <li><strong>ASME B31.3 § 344.4 + Table 341.3.2A:</strong> Severe-Cyclic / Category M tighter limits</li>
  <li><strong>AWS D1.1 Clause 8 + Annex M:</strong> no cracks; no linear indications &gt; 1/16 in. on weld surfaces</li>
  <li><strong>ASME Section III (nuclear):</strong> no cracks, no linear indications &gt; 1/16 in., no rounded &gt; 1/8 in.</li>
  <li><strong>API 1104 § 9.6:</strong> pipeline-specific acceptance — no crack-like indications, defined length limits per joint thickness</li>
</ul>

<h2>Personnel Qualification</h2>
<p>${A.sntTcOnePost} Level II PT (or ISO 9712 Level 2 PT; NAS 410 Level 2 PT for aerospace) is required for personnel interpreting Article 6 examinations. PT is often the first cert in a multi-method inspector's path because of the lower training-hour requirement (8 hrs for Level I, 8 additional for Level II per SNT-TC-1A 2024). Pair with annual eye test (J1 + Ishihara). ${A.level3} provides written-practice and recertification audit support.</p>

<h2>Frequently Asked Questions</h2>
<h3>Q1: Why use PT instead of MT on a stainless-steel weld?</h3>
<p><strong>A:</strong> Austenitic stainless is non-magnetic — MT (Article 7) cannot magnetise it, so no flux leakage, no indication. PT is the only ASME-accepted surface method on non-ferro materials.</p>
<h3>Q2: Can I use water-washable penetrant outdoors in the field?</h3>
<p><strong>A:</strong> Possible but rare. Water source + over-wash risk make it impractical. Field PT is dominated by Type II Method C (solvent-removable visible dye) — the SPOTCHECK aerosol kit is the global standard.</p>
<h3>Q3: How does dwell time change at low temperatures?</h3>
<p><strong>A:</strong> Below 16 °C the penetrant viscosity rises and capillary action slows — Article 6 requires doubling the documented dwell. Below 5 °C, use a low-temperature qualified penetrant per Mandatory Appendix III (or condition the surface with localised heating).</p>
<h3>Q4: How do I distinguish a real indication from a false / non-relevant one?</h3>
<p><strong>A:</strong> Re-clean and re-test the area. Real crack indications reappear (the crack still holds penetrant after cleaning). Non-relevant indications from surface roughness, dirt, or porous oxide layers do not reappear after thorough cleaning.</p>
<h3>Q5: What's the difference between Article 6 PT and ASTM E165?</h3>
<p><strong>A:</strong> ASTM E165 is the materials/process standard (defines the chemistry, sensitivity levels, and qualification of penetrant FAMILIES). Article 6 is the EXAMINATION standard (defines how the inspector applies it on a real part). For most pressure-equipment work, the inspector follows Article 6, using consumables qualified per E165. The two are complementary, not redundant.</p>
<h3>Q6: How is Article 6 PT used in ${A.ffs} assessments?</h3>
<p><strong>A:</strong> Surface-breaking cracks identified by Article 6 PT are characterised (length, sometimes etched depth) and fed into API 579 Level 1 / 2 / 3 crack-like flaw assessment. Atlantis NDT Level III consultants regularly use Article 6 PT confirmations to support FFS dispositions on refining and offshore equipment.</p>
<h3>Q7: What records must I keep for Article 6 PT?</h3>
<p><strong>A:</strong> Technique sheet (penetrant batch + lot, developer batch + lot, dwell, lighting), inspector cert, surface temperature, calibration certificates for white-light + UV-A meters, sketch of inspected area with indication locations, accept/reject record per the referencing code. Atlantis NDT Reporting Software auto-bundles all of these per shot.</p>
<h3>Q8: Are aerosol PT kits acceptable for Class-1 pressure equipment?</h3>
<p><strong>A:</strong> Yes, as long as the penetrant family is qualified per ASTM E165 sensitivity Level 1+ and the application meets Article 6. Many fabricators standardise on Magnaflux SPOTCHECK or Met-L-Chek VP-30 because both are Level 2 qualified and aerosol-applied. Always check shelf life + batch traceability on the aerosol cans.</p>
${FOOTER([A.pt, A.ffs])}`,
}));

// 4. ASME V Article 7 — MT
BLOGS.push(blog({
  id: 303,
  title: 'ASME Section V Article 7 — Magnetic Particle Testing (MT) Requirements Explained',
  slug: 'asme-section-v-article-7-magnetic-particle-mt-requirements-explained',
  metaDescription: 'ASME Section V Article 7 magnetic particle testing requirements decoded — yoke vs prods vs central conductor, AC vs DC magnetisation, wet vs dry particles, fluorescent vs visible, acceptance. ASNT Level III guide.',
  snippet: 'ASME Section V Article 7 governs magnetic-particle testing of ferromagnetic materials. This 2026 guide explains magnetisation technique, particle media, lighting, demagnetisation, and how Article 7 maps to ASME VIII, B31.3, AWS D1.1, and API 510/570/653 acceptance.',
  quickAnswer: {
    question: 'What does ASME Section V Article 7 require for magnetic particle testing?',
    answer: 'ASME Section V Article 7 (latest 2023 edition) specifies magnetic-particle (MT) requirements for ferromagnetic materials — magnetisation technique (yoke, prods, central conductor, coil, multidirectional), current type (AC for surface, DC/HWDC for near-surface), particle media (wet fluorescent vs dry visible), lighting (1000 µW/cm² UV-A for fluorescent), and demagnetisation. Field-strength verification per ASTM E709 pie-gauge is mandatory.',
    bullets: [
      'Yoke: AC for surface only, DC for ≤ 6 mm near-surface; 4.5 kg lift test required',
      'Particle media: wet fluorescent for production sensitivity; dry visible for field',
      'Field-strength verification: ASTM E709 pie-gauge or Ketos ring before each shift',
    ],
  },
  content: `<h2>ASME Section V Article 7 — Practical MT Guide</h2>
<p><strong>ASME Section V Article 7</strong> is the ASME nondestructive examination standard for magnetic-particle testing (MT, MPI). It is the workhorse surface + near-surface inspection method for ferromagnetic materials — carbon steel, low-alloy steel, ferritic stainless, ductile iron, nickel-iron alloys. Article 7 is referenced by ASME Section VIII Div 1 § UW-51, B31.1 § 136.4, B31.3 § 344.3, AWS D1.1 Clause 8.14, API 1104 § 9.5, and API 510 / 570 / 653 alterations sections.</p>

<h2>Scope and Applicability — T-710</h2>
<p>Article 7 covers MT on ferromagnetic materials only (austenitic stainless and aluminum require ${A.pt} per Article 6). MT detects surface and slightly subsurface discontinuities — cracks, laps, seams, cold shuts, lack of fusion on the open root, hot cracking in welds. Penetration depth is typically 1–6 mm depending on current type, frequency, and material magnetic permeability.</p>
<p>Applicability examples: post-weld surface inspection of carbon-steel pressure-vessel welds (the dominant surface NDT method since carbon steel is ferro), heavy-fabrication structural welds per AWS D1.1, pipeline girth welds per API 1104, drilling-equipment inspection, ${A.api510} alterations on carbon-steel vessels, and ${A.api653} tank-shell weld inspection.</p>

<h2>Magnetisation Techniques — T-720 + T-740</h2>
<p>Article 7 recognises 7 magnetisation techniques; the most common in pressure-equipment work:</p>
<ul>
  <li><strong>Yoke (T-721.1):</strong> portable electromagnet; AC or DC; pole spacing 75–300 mm; lift test 4.5 kg (AC) / 18 kg (DC). The single most common field technique. Examples: Magnaflux Y-7 / Y-8, Magnatech 5C.</li>
  <li><strong>Prods (T-721.2):</strong> two contact electrodes; AC, HWDC, or DC; produces longitudinal magnetisation. Risk of arc burns — requires controlled contact, copper/brass tips, and post-test grinding of contact areas.</li>
  <li><strong>Central conductor (T-721.3):</strong> non-magnetic conductor through hollow part; circumferential magnetisation; preferred for bolts, hollow castings, and short pipe pieces.</li>
  <li><strong>Direct current induction / cable wrap:</strong> for long pipe lengths or large vessels; cable wrapped around the part energised with HWDC.</li>
  <li><strong>Multidirectional (T-721.5):</strong> simultaneous longitudinal + circumferential magnetisation; production-shop bench unit standard.</li>
</ul>
<p>Current type matters: AC produces strongest surface field (skin effect concentrates current at surface), best for fine surface cracks. DC / HWDC penetrates 3–6 mm subsurface for incomplete-penetration root flaws and just-subsurface inclusions.</p>

<h2>Field-Strength Verification — T-754 + T-764</h2>
<p>The single most-rejected Article 7 audit point. Article 7 requires field-strength verification on every shift, on every part orientation, using one of:</p>
<ul>
  <li><strong>ASTM E709 pie-gauge:</strong> 8-piece copper-clad slotted plate; place on the part being tested; magnetise; observe particle build-up across the eight slots. All eight must reveal indications for adequate field.</li>
  <li><strong>Ketos ring / Betz ring (T-764):</strong> reference ring with through-drilled holes at known depths; particles must reveal the required number of holes per the technique procedure (typically 3 holes for medium sensitivity, 5+ for high).</li>
  <li><strong>Hall-effect gaugemeter:</strong> reads tangential field strength in gauss / millitesla; requires 30 G / 3 mT minimum at the surface during indication build-up.</li>
</ul>

<h2>Particle Media — T-761</h2>
<p>Article 7 recognises wet and dry particle systems:</p>
<ul>
  <li><strong>Wet fluorescent (Magnaflux 14HF, 20B, 25B):</strong> highest sensitivity; bench-unit production standard; requires UV-A booth (1000 µW/cm² + dark booth ≤ 2 fc ambient). Suspended in oil or water-based carrier.</li>
  <li><strong>Wet visible (Magnaflux 7HF, Met-L-Chek WCP):</strong> easier field application; doesn't need UV; lower sensitivity than fluorescent.</li>
  <li><strong>Dry visible (Magnaflux Grey 8A, Black 1, Red 3):</strong> field workhorse for heavy-fabrication and structural-weld MT; particles applied via puffer-bottle or shaker; surface contrast critical (white-contrast paint or clean steel).</li>
</ul>

<h2>Lighting Requirements — T-776</h2>
<p>Visible-particle MT: 100 fc (1000 lux) white light at the surface, photometer-verified. Fluorescent MT: ≤ 2 fc ambient + ≥ 1000 µW/cm² UV-A, radiometer-verified, with inspector dark-adapted 5 min before reading.</p>

<h2>Demagnetisation — T-771</h2>
<p>Post-MT demagnetisation is required when residual magnetism would interfere with subsequent operations (machining, welding, assembly). Methods: AC step-down (gradually reducing field), DC reverse with step-down, or thermal (above Curie point — 770 °C for carbon steel; rarely practical). Residual field measurement with field-indicator: typical maximum 3 gauss (0.3 mT) for assemblies that will be re-welded or machined.</p>

<h2>Acceptance Criteria — From the Construction Code</h2>
<p>Article 7 defines HOW to perform MT but not what's acceptable. Acceptance comes from:</p>
<ul>
  <li><strong>ASME VIII Div 1 § UW-51:</strong> no cracks; linear indications ≤ 1/16 in. acceptable; rounded ≤ 1/8 in.</li>
  <li><strong>ASME B31.3 § 344.3 + Table 341.3.2A:</strong> stricter for Category M / Severe Cyclic</li>
  <li><strong>AWS D1.1 Clause 8.14:</strong> no cracks; specific length limits on linear indications per weld thickness</li>
  <li><strong>API 1104 § 9.5:</strong> pipeline-specific acceptance — defined per joint thickness</li>
</ul>

<h2>Personnel Qualification</h2>
<p>Same path as Article 6 PT: ${A.sntTcOnePost} Level II MT, ISO 9712 Level 2 MT, or NAS 410 Level 2 MT for aerospace. Annual eye test (Jaeger J1 + Ishihara) mandatory. ${A.level3} provides written-practice and procedure-approval support for combined MT + PT + UT + RT programs.</p>

<h2>Frequently Asked Questions</h2>
<h3>Q1: Why does AC give a stronger surface indication than DC?</h3>
<p><strong>A:</strong> Skin effect — alternating current concentrates near the conductor surface (depth ∝ 1/√frequency). 60 Hz AC penetrates ≈ 0.3 mm in carbon steel, producing very high tangential field at the surface, ideal for fine fatigue cracks. DC distributes through the cross-section, penetrating ≈ 3–6 mm — better for just-subsurface flaws but lower tangential field at the surface itself.</p>
<h3>Q2: When must I use a Ketos ring vs a pie-gauge?</h3>
<p><strong>A:</strong> Pie-gauge for technique verification on the actual part (every shift, every orientation). Ketos ring for procedure qualification — proves the technique can resolve known reference flaws at known depths. Most fab specs require both.</p>
<h3>Q3: Are prods allowed on pressure equipment in service?</h3>
<p><strong>A:</strong> Yes, but with caution. Article 7 requires controlled contact pressure, copper/brass tips, and post-test grinding of contact marks to prevent micro-cracks from arc burn. Many refineries forbid prods on high-strength alloys (P91, 2.25Cr-1Mo) because arc burn can initiate stress-corrosion cracks. Yoke is the safer choice in service.</p>
<h3>Q4: Can I MT a stainless-steel weld?</h3>
<p><strong>A:</strong> Only if it's ferritic stainless (e.g., 410, 430). Austenitic SS (304, 316) is non-magnetic — use ${A.pt} per Article 6 instead. Duplex (2205, 2507) is partly ferritic — MT may work but PT is the safer choice.</p>
<h3>Q5: How does Article 7 MT integrate with API 579 FFS?</h3>
<p><strong>A:</strong> Surface cracks detected by MT are characterised and fed into ${A.ffs} Level 1/2/3 crack-like flaw assessment. The flaw length from MT, the depth from follow-up ${A.ut} Article 4, and the local material properties feed into the API 579 disposition — fitness-for-service or repair.</p>
<h3>Q6: What's the difference between wet fluorescent and wet visible MT?</h3>
<p><strong>A:</strong> Fluorescent particles are coated with a fluorescent dye that emits visible light under UV — far higher contrast and sensitivity, especially for tight fatigue cracks. Visible particles rely on coloured particles + contrast paint — lower sensitivity but no UV booth needed. Aerospace + nuclear default fluorescent; pressure-equipment field work often defaults visible.</p>
<h3>Q7: Are dry-particle aerosol cans accepted for Article 7?</h3>
<p><strong>A:</strong> Yes — most field MT uses Magnaflux 8A grey or 1B black aerosol applied via puffer bulb or shaker. Verify shelf life and batch traceability. The aerosol is essentially the same particle as bulk; only the carrier differs.</p>
<h3>Q8: How long must I retain Article 7 MT records?</h3>
<p><strong>A:</strong> Life-of-equipment for pressure equipment; minimum 5 years per most referencing codes. Atlantis NDT Reporting Software stores SHA-256-hashed MT records with technique sheet, pie-gauge verification, particle batch + lot, lighting verification, and accept/reject record in a PDF/A-3 audit bundle.</p>
${FOOTER([A.mt, A.ffs])}`,
}));

// 5. AWS D1.1
BLOGS.push(blog({
  id: 304,
  title: 'AWS D1.1 Structural Welding Code 2026 — Steel Welding Requirements Explained',
  slug: 'aws-d1-1-structural-welding-code-2026-explained',
  metaDescription: 'AWS D1.1 Structural Welding Code 2026 decoded — joint design, WPS/PQR, welder qualification, visual + NDT acceptance, prequalified joints, cyclic loading. ASNT Level III + CWI practical guide.',
  snippet: 'AWS D1.1 Structural Welding Code—Steel is the dominant structural welding standard in the US, Middle East, and emerging markets. This 2026 guide covers joint design, WPS / PQR, welder qualification, visual + NDT acceptance criteria, prequalified joint exemptions, and cyclic-loading provisions.',
  quickAnswer: {
    question: 'What does AWS D1.1 cover?',
    answer: 'AWS D1.1:2020 (and the upcoming 2026 revision) is the AWS Structural Welding Code — Steel. It applies to welded structures using carbon and low-alloy steels ≥ 1/8 in. (3 mm) thick. Eight clauses cover general requirements, design, prequalified procedures, WPS/PQR qualification, welder qualification, fabrication, inspection (including visual + NDT acceptance), and stud welding. Annex M covers PT/MT/UT/RT for structural welds.',
    bullets: [
      'Clauses 1–8 mandatory; Annexes M / N normative for NDT',
      'Prequalified joints (Clause 3) skip PQR if all 16 essential variables match',
      'Cyclic-loaded welds (Annex G) use stricter acceptance + fatigue category curves',
    ],
  },
  content: `<h2>AWS D1.1 Structural Welding Code — Practical 2026 Guide</h2>
<p><strong>AWS D1.1 Structural Welding Code—Steel</strong> is the dominant structural-steel welding standard across the US, Middle East, Latin America, and Asia. It governs the design, fabrication, inspection, and qualification of welded steel structures — bridges, buildings, offshore platforms, pressure-vessel skirts, towers, cranes, ${A.marine}, mining-haul-truck frames, and any cyclically-loaded weldment ≥ 1/8 in. (3 mm) thick. The latest published edition is AWS D1.1:2020; D1.1:2026 is in committee ballot at the time of writing.</p>

<h2>Scope and Structure of D1.1</h2>
<p>D1.1 is organised into 8 mandatory clauses plus 11 normative annexes:</p>
<ul>
  <li><strong>Clause 1 — General Requirements:</strong> base metals, design, fabrication and inspection roles, contract documents</li>
  <li><strong>Clause 2 — Design of Welded Connections:</strong> joint types, weld symbols, allowable stresses, fatigue</li>
  <li><strong>Clause 3 — Prequalification of WPS:</strong> 16 essential variables for prequalified status</li>
  <li><strong>Clause 4 — Qualification (WPS, PQR, Welder):</strong> the test process when prequalification doesn't apply</li>
  <li><strong>Clause 5 — Fabrication:</strong> preheat, interpass, heat input, welding consumables, position</li>
  <li><strong>Clause 6 — Inspection:</strong> visual + NDT requirements, acceptance criteria, inspector qualifications</li>
  <li><strong>Clause 7 — Stud Welding:</strong> shear connectors, qualification, inspection</li>
  <li><strong>Clause 8 — Strengthening + Repair of Existing Structures</strong></li>
</ul>
<p>Annex M (NDT methods — PT, MT, UT, RT) is normative for any D1.1 contract that calls out NDT beyond visual.</p>

<h2>Prequalified vs Qualified WPS — Clause 3 vs Clause 4</h2>
<p>The single biggest cost-saver in D1.1 is the prequalified WPS (welding procedure specification). Clause 3 lists 16 essential variables — base metal grade, filler metal, joint type, position, preheat, etc. — and if your WPS meets ALL of them, no Procedure Qualification Record (PQR) test plate is required. Common prequalified examples: SMAW with E7018 on A36, A572 Gr 50, A992; FCAW with E71T-1 on similar; GMAW with ER70S-6 short-circuit on thin material.</p>
<p>If even one essential variable falls outside Clause 3 (e.g., reduced preheat, exotic base metal like ASTM A514, hybrid laser-arc process), the WPS must be qualified by Clause 4 — weld a test plate, NDT inspect it, mechanical-test specimens (tensile, bend, sometimes Charpy V-notch for fracture-critical), and produce a Procedure Qualification Record (PQR). The WPS / PQR set then governs production welding until an essential variable changes again.</p>

<h2>Welder Qualification — Clause 4 Part C</h2>
<p>D1.1 welder-qualification is by performance test on a coupon. Variables: process (SMAW vs FCAW vs GMAW vs SAW), position (1G flat, 2G horizontal, 3G vertical, 4G overhead, 6G inclined-fixed), thickness range, joint type (groove vs fillet), and electrode F-number. Pass = visual + bend test (face + root bends; or side bends for thicker material). Qualified welders are tracked in a continuity log: 6 months between welds of the qualified process triggers requalification.</p>
<p>For ${A.api510} or ${A.api570} multi-cert work, the welder typically maintains BOTH AWS D1.1 (for structural attachments) AND ASME Section IX (for pressure-retaining welds). Atlantis NDT ${A.erp} tracks dual welder-continuity logs automatically.</p>

<h2>Visual Inspection — Clause 6.9 + Table 6.1</h2>
<p>Every D1.1 weld receives 100 % visual inspection by a Certified Welding Inspector (CWI per AWS QC1). Visual acceptance per Table 6.1 (statically loaded) and Table 6.2 (cyclically loaded):</p>
<ul>
  <li>No cracks of any size in any direction</li>
  <li>Complete fusion at the root and between adjacent weld passes</li>
  <li>Undercut: ≤ 1/32 in. (1 mm) for material &lt; 1 in.; ≤ 1/16 in. (1.5 mm) for ≥ 1 in.</li>
  <li>Convexity / reinforcement limits per Figure 6.5</li>
  <li>Underfill / overlap not permitted</li>
  <li>Slag, spatter, arc strikes ground out + retested per the cleanup procedure</li>
</ul>

<h2>NDT Acceptance — Annex M + Clause 6.13</h2>
<p>NDT acceptance criteria for D1.1 welds (when called out by contract):</p>
<ul>
  <li><strong>${A.mt} (Annex M2):</strong> per ${A.sntTcOnePost} Level II MT; visible + fluorescent both accepted; no cracks; specific linear / rounded limits per Table 6.1 / 6.2</li>
  <li><strong>${A.pt} (Annex M3):</strong> Level II PT; no cracks; linear ≤ 1/16 in. on weld; visible OR fluorescent</li>
  <li><strong>${A.ut} (Annex M4 — manual + Annex N for PAUT/TOFD):</strong> the most-used volumetric method on structural welds &gt; 5/16 in. (8 mm). Acceptance per Table 6.3 (statically loaded — reflector amplitude + length-based) and Table 6.4 (cyclically loaded — much stricter, defect classes A/B/C/D)</li>
  <li><strong>${A.rt} (Annex M5):</strong> ASME Section V Article 2 technique; acceptance per Table 6.5 (statically) and Annex G fatigue category for cyclic</li>
</ul>
<p>For cyclic-loaded structures (bridges, offshore platforms, cranes), Annex G fatigue-category curves drive a much tighter NDT acceptance limit. Atlantis NDT ${A.reporting} ships built-in D1.1 acceptance lookup tables for all four methods.</p>

<h2>Prequalified Joint Geometries — Figures 3.3 / 3.4 / 3.5</h2>
<p>Clause 3 lists prequalified joint geometries (joint angle, root opening, root face, included angle, backing). Use one of these and a prequalified WPS, and no PQR is required. Example: a single-V groove butt weld in 19 mm A36 plate with 60° included angle, 6 mm root face, 3 mm root opening, backing strip — all prequalified for E7018 SMAW in any position.</p>

<h2>Cyclic Loading — Annex G + Clause 2.20</h2>
<p>Structures subject to cyclic loads (bridges per AASHTO, offshore platforms per API RP 2A) follow AWS D1.1 + AASHTO LRFD / API RP 2A overlay. Fatigue categories A (smooth base metal) through E' (transverse stiffener weld) define allowable stress range vs cycle count. NDT acceptance is correspondingly tighter — Annex G specifies "fracture critical" inspection requiring 100 % UT or RT on Category D / E / E' details.</p>

<h2>Inspector Qualifications — Clause 6.1 + AWS QC1</h2>
<p>D1.1 inspections are performed by an AWS-Certified Welding Inspector (CWI) or Senior CWI per QC1. The CWI exam is open-book (D1.1, AWS A2.4, AWS A3.0); 165 questions over 6 hours; pass rate around 60 % first attempt. Atlantis NDT ${A.level3} runs CWI prep cohorts globally with a 95% first-attempt pass rate.</p>

<h2>Frequently Asked Questions</h2>
<h3>Q1: When does D1.1 apply vs B31.3 vs ASME VIII?</h3>
<p><strong>A:</strong> D1.1 = structural steel (frames, supports, brackets, stiffeners, offshore-platform topsides, building frames). B31.3 = process piping carrying fluid. ASME VIII = pressure vessels. The same project often has all three — D1.1 for the vessel skirt, ASME VIII for the vessel shell, B31.3 for the connecting piping. Each has its own WPS / PQR / acceptance.</p>
<h3>Q2: Is a prequalified WPS valid if my plate is ASTM A572 Gr 65 (above the prequalified range)?</h3>
<p><strong>A:</strong> No. Clause 3.5 lists prequalified base metals — A572 Gr 65 is outside the prequalified list (Gr 50 is prequalified, Gr 60 + 65 are not). You must qualify via Clause 4 — test plate, mechanical specimens, and PQR.</p>
<h3>Q3: Does D1.1 require Charpy V-notch testing?</h3>
<p><strong>A:</strong> Only when called out by the contract owner. The base D1.1 PQR test (groove weld, tensile, bend) doesn't include Charpy. Fracture-critical and low-temperature applications add Charpy per supplementary essential variables — common on offshore platforms, Alaska / Arctic structures, LNG-service supports.</p>
<h3>Q4: How does D1.1 differ from AWS D1.5 (Bridge Welding Code)?</h3>
<p><strong>A:</strong> D1.5 is bridge-specific (highway / railway bridges per AASHTO); includes stricter Charpy V-notch requirements, fracture-critical member rules, and tighter UT acceptance. D1.1 is the general-purpose code — accepted for buildings, offshore, mining, and most non-bridge structural work.</p>
<h3>Q5: What NDT methods are most common for D1.1 inspection?</h3>
<p><strong>A:</strong> Visual + ${A.mt} is the workhorse pair on carbon-steel welds; ${A.ut} for groove welds &gt; 5/16 in.; ${A.rt} on critical full-penetration butt welds; ${A.pt} only on stainless or aluminum sub-fab. Atlantis NDT teams routinely run combined VT + MT + UT inspection per Annex M.</p>
<h3>Q6: How long must D1.1 weld records be retained?</h3>
<p><strong>A:</strong> Per Clause 6.1.5 + Annex K — at least the period required by the building code or contract; many jurisdictions require life-of-structure for fracture-critical members. Atlantis NDT ${A.erp} maintains the WPS / PQR / welder-cert / inspection-record bundle in a PDF/A-3 audit trail.</p>
<h3>Q7: Can I qualify a welder once and use them across multiple D1.1 jobs?</h3>
<p><strong>A:</strong> Yes — welder qualification is portable across employers in most cases (per Clause 4.10) and stays valid as long as the welder maintains 6-month continuity in the qualified process. The continuity log is your responsibility.</p>
<h3>Q8: Does AWS D1.1 cover stainless steel?</h3>
<p><strong>A:</strong> No — D1.1 is carbon and low-alloy steel only. Stainless-steel structural welding falls under AWS D1.6 Structural Welding Code—Stainless Steel. The two codes share design philosophy but differ on consumables, preheat, and HAZ-control requirements.</p>
${FOOTER([A.mt, A.ut, A.marine])}`,
}));

// 6. ASME B31.1 Power Piping
BLOGS.push(blog({
  id: 305,
  title: 'ASME B31.1 Power Piping Code 2026 — Inspection Requirements Explained',
  slug: 'asme-b31-1-power-piping-code-explained',
  metaDescription: 'ASME B31.1 Power Piping Code 2026 decoded — boiler external piping, design class, NDT requirements, WPS, PQR, NDT acceptance, comparison vs B31.3. ASNT Level III practical guide.',
  snippet: 'ASME B31.1 governs power piping in steam, water, gas, and chemical plants. This 2026 guide explains design class, NDT requirements, weld inspection by class, and how B31.1 differs from B31.3 process piping — for power-plant inspectors, EPC engineers, and Authorised Inspectors.',
  quickAnswer: {
    question: 'What does ASME B31.1 cover?',
    answer: 'ASME B31.1 Power Piping (latest 2022 edition) governs piping in electric-power generating stations, geothermal heating systems, central heating + cooling plants, and similar steam-water-gas service. It addresses Boiler External Piping (BEP) and Non-Boiler External Piping (NBEP) with different jurisdictional rules. NDT requirements vary by service severity and pipe size.',
    bullets: [
      'BEP (Boiler External Piping): jurisdictional, follows boiler code stamping rules',
      'NBEP: B31.1 alone governs; ASME Section IX WPS / PQR / welder qualification',
      'NDT: 100% RT or UT for Class 1 piping &gt; 19 mm wall; spot-RT for smaller',
    ],
  },
  content: `<h2>ASME B31.1 Power Piping — Practical 2026 Guide</h2>
<p><strong>ASME B31.1 Power Piping</strong> is the ASME piping code for power-generation systems — coal, gas, oil, biomass, geothermal, nuclear-conventional-island, combined-cycle, and steam-distribution plants. It governs piping carrying steam, water, gas, and chemical fluids used to generate power. B31.1 is required by NFPA 85 boilers and by the various state Boiler & Pressure Vessel acts in the US, and is referenced or adopted in most international power markets.</p>

<h2>B31.1 Scope and Service Categories</h2>
<p>B31.1 divides piping into two jurisdictional categories:</p>
<ul>
  <li><strong>Boiler External Piping (BEP):</strong> the portion of power piping connecting the boiler to other equipment, within specific scope boundaries (typically up to the first valve outside the boiler). BEP is jurisdictional — code-stamped, subject to inspection by the Authorised Inspector (AI), and required to bear the ASME "S" or "PP" symbol.</li>
  <li><strong>Non-Boiler External Piping (NBEP):</strong> all other power piping. NBEP follows B31.1 design + fabrication + inspection rules but is not jurisdictional and does not receive an ASME stamp.</li>
</ul>
<p>Common services: main steam (Class 1), reheat steam, feedwater, condensate, blowdown, deaerator, auxiliary steam, fuel-gas, lube-oil. Each fluid + temperature + pressure combination drives the design Class assignment.</p>

<h2>Design Allowable Stress and Class Determination</h2>
<p>B31.1 § 102 specifies allowable stress per ASME Section II Part D for the material and design temperature. Pipe wall thickness: t = PD / (2(SE + Py)) — same formula family as B31.3 but with B31.1's allowable-stress tables. Y-coefficient varies with material and temperature per Table 104.1.2-1.</p>
<p>Class assignment governs the NDT scope: Class 1 (severe service / high temperature) demands 100% volumetric NDT on butt welds; Class 2 / 3 demand reduced or spot-NDT coverage. The contract or owner-engineering documents call out the Class.</p>

<h2>Welding Requirements — § 127 + ASME Section IX</h2>
<p>B31.1 welding follows ASME Section IX for WPS / PQR / welder qualification — same engine as B31.3 + ASME VIII. Differences from B31.3:</p>
<ul>
  <li><strong>Preheat per § 131:</strong> stricter for chromium-bearing alloys (P-No. 4, 5A, 5B, 5C); main-steam Cr-Mo (P91, 2.25Cr-1Mo) requires elevated preheat + interpass + PWHT</li>
  <li><strong>PWHT per § 132:</strong> mandatory for many alloys above thickness thresholds; soak temperatures higher than B31.3 for the same alloy</li>
  <li><strong>Hardness testing per § 132.1.1:</strong> hardness limit on Cr-Mo welds (typically 241 HV / 22 HRC max) to prevent stress-corrosion cracking in steam service</li>
</ul>

<h2>NDT Requirements — § 136.4</h2>
<p>NDT scope by Class:</p>
<ul>
  <li><strong>Class 1 (steam, water, blowdown &gt; 750 psig and &gt; 750 °F, OR pipe wall ≥ 19 mm):</strong> 100% RT or UT on butt welds; 100% MT or PT on root + final on socket welds and fillet welds; visual on all welds</li>
  <li><strong>Class 2:</strong> spot-RT (10% per § 136.4.4) on butt welds; visual on all</li>
  <li><strong>Class 3:</strong> visual only (most utility services, low-pressure heating)</li>
</ul>
<p>The NDT method (RT vs UT) is owner's choice subject to engineering judgement. RT per ASME Section V ${A.rt} Article 2 OR UT per Article 4. Acceptance criteria per B31.1 § 136.4.5 — no cracks, limits on porosity / slag length per joint thickness.</p>

<h2>Cr-Mo Materials — P91, 2.25Cr-1Mo, Grade 91 / Grade 22</h2>
<p>Modern combined-cycle and supercritical plants run main-steam piping in P91 (9Cr-1Mo-V, Grade 91) at 540–620 °C. P91 is notorious for in-service Type IV cracking in the HAZ — driven by improper PWHT, hardness exceeding 241 HV, and creep accumulation. B31.1 § 132 + Code Case 2179-7 specify the welding consumable + PWHT + hardness requirements that prevent Type IV. Atlantis NDT ${A.level3} provides in-service P91 hardness mapping, replica metallography, and creep-life assessment per API 579 Part 10.</p>

<h2>Inspection vs. B31.3 — Key Differences</h2>
<table border="1" cellpadding="5">
<tr><th>Dimension</th><th>B31.1 Power Piping</th><th>B31.3 Process Piping</th></tr>
<tr><td>Industry</td><td>Power generation</td><td>Refining, chemical, petchem</td></tr>
<tr><td>Fluid focus</td><td>Steam, water, BFW, fuel gas</td><td>Hydrocarbons, chemicals, hazardous fluids</td></tr>
<tr><td>Jurisdictional?</td><td>BEP is jurisdictional (stamped)</td><td>Process piping is non-jurisdictional</td></tr>
<tr><td>Hardness limits</td><td>241 HV max on Cr-Mo welds</td><td>Per material datasheet, less strict typical</td></tr>
<tr><td>Design factor</td><td>Y per Table 104.1.2-1</td><td>Y per Table 304.1.1</td></tr>
<tr><td>NDT scope</td><td>By Class 1/2/3</td><td>By Normal / Category M / Severe Cyclic / K</td></tr>
</table>

<h2>Inspector + Welder Qualifications</h2>
<p>B31.1 NDT inspections require ${A.sntTcOnePost} Level II in the relevant method (UT, RT, MT, PT, VT) plus ${A.api570} when the work is in-service inspection. Welders qualify per ASME Section IX. Authorised Inspectors (AIs) for BEP work hold National Board Commission stamps and act under the jurisdictional Boiler & Pressure Vessel Act.</p>

<h2>Frequently Asked Questions</h2>
<h3>Q1: When does B31.1 apply vs ASME I (boiler proper)?</h3>
<p><strong>A:</strong> ASME Section I covers the boiler PROPER (drum, tubes, headers — the pressure-containing components of the boiler). B31.1 covers the EXTERNAL piping connecting the boiler to other plant components. The boundary is defined by ASME Section I PG-58 — typically the first valve outside the boiler.</p>
<h3>Q2: Is B31.1 used outside the US?</h3>
<p><strong>A:</strong> Yes — B31.1 is widely adopted in Middle East (Saudi Aramco, KAHRAMAA Qatar, ADNOC), India (NTPC standards), Southeast Asia (TNB Malaysia, EGAT Thailand), Latin America, and parts of Europe. EN 13480 is the European equivalent but B31.1 is often used in EPC contracts due to American EPC dominance in the power sector.</p>
<h3>Q3: What's the difference between Class 1 and Class 2 NDT?</h3>
<p><strong>A:</strong> Class 1 = 100% volumetric NDT (RT or UT) on butt welds; Class 2 = spot 10% volumetric. Both require 100% visual. Class 1 is reserved for severe service (typically main-steam, reheat, high-pressure feedwater); Class 2 covers most balance-of-plant piping; Class 3 is visual only.</p>
<h3>Q4: Is in-service inspection covered by B31.1?</h3>
<p><strong>A:</strong> B31.1 is the construction code. In-service inspection of power piping is typically governed by ASME PCC-3 (process piping in-service / power), state jurisdictional rules, and owner procedures. Many plants apply ${A.api570} methodology to B31.1 piping as a best-practice — the inspection technique is identical even if the code reference differs.</p>
<h3>Q5: How does B31.1 handle hot reheat piping &gt; 540 °C?</h3>
<p><strong>A:</strong> Hot reheat at 540–620 °C is almost always P91 (Grade 91) or 2.25Cr-1Mo (Grade 22). Special welding consumables, hardness limits, PWHT requirements, and in-service creep monitoring apply. B31.1 + ASME Code Case 2179-7 + ${A.ffs} Part 10 govern. Atlantis NDT ${A.level3} supports P91 fleet integrity programs at supercritical plants globally.</p>
<h3>Q6: Does B31.1 cover nuclear piping?</h3>
<p><strong>A:</strong> No — nuclear safety-related piping uses ASME Section III (Class 1, 2, 3 nuclear). Conventional-island piping in a nuclear plant (turbine, feedwater outside containment) may follow B31.1. The boundary is set by NRC + ASME Section III.</p>
<h3>Q7: How does ASME B31.1 integrate with NFPA 85?</h3>
<p><strong>A:</strong> NFPA 85 (Boiler & Combustion Systems Hazards Code) references B31.1 for the piping connecting the boiler to the combustion-control valves. The two are read together for any utility / industrial boiler in the US.</p>
<h3>Q8: How is B31.1 documentation managed at scale?</h3>
<p><strong>A:</strong> Atlantis NDT ${A.erp} ships with a B31.1-aware document template (WPS / PQR / welder-continuity / NDT-report / PWHT chart / hardness map) in a PDF/A-3 audit bundle. Per-line traceability for hundreds of joints across a 600 MW boiler island is standard.</p>
${FOOTER([A.rt, A.ut, A.level3])}`,
}));

console.log(`Generated ${BLOGS.length} blog entries so far in Cluster A...`);

// Append remaining blogs in Cluster A + Cluster B to BLOGS array in companion script
// (split for readability; will be loaded by main script and concat'd)

// ─── Write to blogs.json ─────────────────────────────────────────────
// We'll continue with blogs 6-13 in a separate file; for now write what we have
// + import the rest.
// Actually, to keep this single-file, see day9-generate-blogs-part2.mjs which
// holds blogs 6-13 and runs after this one.

writeFileSync(join(__dirname, '_day9-blogs-part1.json'), JSON.stringify(BLOGS, null, 2), 'utf-8');
console.log(`Wrote part 1 (${BLOGS.length} blogs) → scripts/_day9-blogs-part1.json`);
