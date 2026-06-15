#!/usr/bin/env node
/**
 * Batch 2 — QuickAnswerBox on next 12 high-impression pages (climbers + position 11-30).
 * Mixes .tsx pages and JSON-driven blog entries.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOG_FILE = join(ROOT, 'src', 'data', 'blogs.json');

// JSON-blog targets
const JSON_TARGETS = {
  "asnt-snt-tc-1a-vs-cp-189-comparison": {
    question: "SNT-TC-1A vs CP-189 — which ASNT standard do you need?",
    answer: "SNT-TC-1A is ASNT's employer-administered Recommended Practice. CP-189 (ANSI/ASNT) is the central / third-party Standard for qualification and certification of NDT personnel — used when contracts require independent certification. Most US inspection contracts accept SNT-TC-1A; many global EPC and nuclear contracts demand CP-189 or its derivative ACCP.",
    bullets: [
      "SNT-TC-1A: employer-issued, tied to employer, more flexible",
      "CP-189: ANSI-recognized, central body issues cert, contract-friendly",
      "ACCP: ASNT's third-party route compatible with CP-189 and ISO 9712"
    ]
  },
  "ut-vs-rt-comparison": {
    question: "UT vs RT — fast-decision comparison",
    answer: "Use UT for in-service inspection where radiation safety zones are impractical, automated scanning is required, or thick sections (>2 in.) need penetration. Use RT for permanent film/digital records demanded by code (ASME Section V Article 2), complex weld geometries, and one-time inspection of new fabrication. UT costs 50-70% less per linear foot of weld.",
    bullets: [
      "UT: real-time results, safer, deeper penetration, encoded scanning",
      "RT: permanent record, defect type clear, all materials",
      "Code: ASME B31.3 + B31.1 accept either; some operator specs mandate RT"
    ]
  },
  "ndt-level-iii-certification-requirements-guide": {
    question: "What does ASNT Level III certification require?",
    answer: "ASNT Level III is the senior technical authority in any NDT method. Requirements: pass the ASNT Basic Exam (general theory + materials + processes), pass the Method Exam in your specialty (UT, RT, MT, PT, ET, VT, NS, AE, IR, LT), plus 4 years experience with a degree (or 12,600+ hours without). You then sign procedures, qualify personnel, approve techniques, and serve as your organization's NDT technical authority of record.",
    bullets: [
      "Basic Exam: 135 questions, 4 hours, covers all methods generally",
      "Method Exam: 135 questions, 4 hours, specialist depth per method",
      "Recert: every 5 years via PDH points + retest if applicable"
    ]
  },
  "asme-section-viii-division-1-pressure-vessel-ndt": {
    question: "What NDT does ASME Section VIII Division 1 require?",
    answer: "ASME Section VIII Division 1 (latest 2023 edition) requires Radiographic Testing (RT) of welds based on Joint Efficiency Type (E = 1.0 requires 100% RT; 0.85 requires spot RT; 0.7 needs no RT). Visual Testing (VT) is mandatory on every weld. Ultrasonic Testing (UT) is allowed as RT alternative under UW-51 with specific qualifications. Magnetic Particle (MT) and Penetrant Testing (PT) used per UW-3 for surface inspection.",
    bullets: [
      "E=1.0 vessels: 100% RT — full radiographic examination of all category A/B welds",
      "UT as RT substitute: requires demonstration block + procedure qualification per UW-51",
      "MT/PT surface inspection: required per UW-3 for nozzle attachments, lifting lugs"
    ]
  },
  "magnetic-particle-testing-complete-guide": {
    question: "What is magnetic particle testing (MT)?",
    answer: "Magnetic particle testing (MT) is a surface and near-surface NDT method for ferromagnetic materials. The part is magnetized; iron-oxide particles (wet or dry) applied to the surface accumulate at flux leakage points caused by cracks, seams, laps. Used in pipeline welds, castings, forgings, aircraft landing gear, and structural steel welds.",
    bullets: [
      "Wet vs dry methods; AC for surface, DC for near-surface",
      "Magnetisation techniques: yoke, coil, prods, central conductor",
      "Standards: ASTM E709, ASME Section V Art. 7, ASNT SNT-TC-1A MT Level II"
    ]
  },
  "mfl-pipeline-inspection-cost-vendors-when-to-use-vs-ut": {
    question: "MFL vs UT pipeline inspection — when to use which?",
    answer: "Magnetic Flux Leakage (MFL) is faster and lower cost for short-segment, large-diameter cross-country pipelines with general metal-loss concerns (10-50% wall-loss detection). Ultrasonic In-Line Inspection (UT ILI) is more sensitive for crack detection (SCC, fatigue), sour-service environments, and quantitative wall-thickness measurement. Many operators run both — MFL for routine integrity, UT for crack confirmation.",
    bullets: [
      "MFL: cheaper ($800-$1,500/km), faster, better for general corrosion",
      "UT ILI: more sensitive (1-2 mm sizing), better for cracks + sour service",
      "Combo runs: MFL + UT in same campaign for full coverage"
    ]
  },
  "forging-defect-detection-and-assessment": {
    question: "How do you detect and assess forging defects?",
    answer: "Forging defects (lap, seam, inclusion, internal crack, segregation) are detected via UT (subsurface, primary), RT (volumetric confirmation), MT (surface, ferromagnetic), and PT (surface, any metal). Sizing via UT amplitude or pulse-echo time-of-flight. Acceptance per ASME Section V Art. 23, ASTM A388, customer spec.",
    bullets: [
      "UT angle-beam: subsurface seams 0.5-5 mm, primary method",
      "MT: surface-breaking seams in steel, 0.1-2 mm",
      "PT: surface-breaking seams any metal, 0.05-1 mm"
    ]
  },
  "cwi-certification-requirements-cost-career-impact": {
    question: "How do you become an AWS CWI?",
    answer: "AWS Certified Welding Inspector (CWI) is the welding-industry's senior visual-inspection credential. To qualify: 1-5 years documented welding-inspection experience (depending on education); pass three exams in one sitting — Fundamentals (Part A: 150 questions / 2 hours), Practical (Part B: weld test specimens / 2 hours), Code (Part C: open-book on selected code / 2 hours). Pass mark 72% on each. Renewal every 3 years via PDH points + recert exam at 9 years.",
    bullets: [
      "Three-part exam: A (Fundamentals) + B (Practical) + C (Code-book)",
      "Pass mark: 72% on each part, all in single sitting",
      "Renewal: PDH points every 3 years, full retest at 9 years"
    ]
  },
  "asme-b31-3-process-piping-requirements": {
    question: "What does ASME B31.3 require for process piping inspection?",
    answer: "ASME B31.3 (latest 2024 edition) sets design, fabrication, examination, inspection, and testing rules for process piping. NDT extent depends on Fluid Service category: Normal, Category D (mild), Category M (severe toxic), Category K (high-pressure). Normal service requires 5% RT random; Category M requires 100% RT plus PT on socket welds. Visual inspection on every weld.",
    bullets: [
      "Category D (mild): 5% random RT, VT all welds",
      "Category M (severe toxic): 100% RT, PT on socket welds, hardness test",
      "Severe cyclic service: 100% RT + 100% MT/PT on root pass"
    ]
  }
};

// .tsx page targets
const TSX_TARGETS = {
  "src/pages/ndt-industry-statistics.tsx": {
    question: "What does the NDT industry look like in 2026?",
    answer: "The global NDT services market hit ~$11 billion in 2025, growing at 7-9% CAGR. Top segments: oil & gas (35%), aerospace (22%), power generation (15%), manufacturing (12%), construction (10%), other (6%). North America leads on revenue; Asia-Pacific leads on growth. Demand drivers: aging infrastructure, RBI adoption, advanced UT (PAUT/TOFD), and digital twin integration.",
    bullets: [
      "Market size 2025: ~$11B; projected $15-17B by 2030",
      "Top regions by revenue: NA (32%), EMEA (29%), APAC (28%), LATAM (11%)",
      "Skill demand: ASNT Level II/III + PAUT/TOFD specialists in shortest supply"
    ]
  },
  "src/pages/api-inspector-guide.tsx": {
    question: "How do you become an API inspector?",
    answer: "API inspector certification (API 510, 570, 580, 581, 653, ICP, QUSE, QUTE, QUPA) qualifies you for owner-operator inspector-of-record duties on pressure vessels, piping, tanks, and welding. Required: meet experience minimums (HS + 5 yrs or degree + 2 yrs typical), pass an 7-8 hour open-book + closed-book exam, recertify every 3 years.",
    bullets: [
      "Most-requested certs: API 510 (vessels), 570 (piping), 653 (tanks)",
      "Exam: 4 sessions/year worldwide via API ICP program",
      "Career path: Level II NDT tech → API inspector → senior inspector → consultant"
    ]
  },
  "src/pages/magnetic-flux-leakage-testing.tsx": {
    question: "What is magnetic flux leakage (MFL) testing?",
    answer: "Magnetic Flux Leakage (MFL) is a fast, contactless NDT method for ferromagnetic materials — primarily long-distance pipelines, tank floors, and storage-tank shells. A strong magnetic field is applied; leakage at defect locations (corrosion pits, cracks, wall-thinning) is detected by Hall-effect or coil sensors. Used in in-line inspection (ILI) campaigns and external aboveground tank bottom-plate scanning.",
    bullets: [
      "Best for: general metal loss in pipeline + tank bottom-plates",
      "Limitations: less sensitive to axial cracks; needs ferromagnetic material",
      "Standards: API 1163 (ILI), API 653 Annex G (tank floor MFL)"
    ]
  }
};

// Insert into JSON blogs
const blogs = JSON.parse(readFileSync(BLOG_FILE, 'utf-8'));
let jsonTouched = 0;
for (const b of blogs) {
  if (JSON_TARGETS[b.slug] && !b.quickAnswer) {
    b.quickAnswer = JSON_TARGETS[b.slug];
    jsonTouched++;
    console.log('JSON quickAnswer:', b.slug);
  }
}
writeFileSync(BLOG_FILE, JSON.stringify(blogs, null, 2), 'utf-8');

// Insert into .tsx pages
const COMPONENT_IMPORT = `import QuickAnswerBox from "@/components/QuickAnswerBox";\n`;
let tsxTouched = 0;
const failures = [];
for (const [rel, data] of Object.entries(TSX_TARGETS)) {
  const p = join(ROOT, rel.replace(/\//g, '\\'));
  if (!existsSync(p)) { failures.push({ file: rel, err: 'ENOENT' }); continue; }
  let src = readFileSync(p, 'utf-8');
  if (src.includes('QuickAnswerBox')) { console.log('skip (has):', rel); continue; }

  const re = /import[^\n]+from\s+["']@\/components\/[^"']+["'];?[\r\n]+/g;
  let lastMatch = null, m;
  while ((m = re.exec(src)) !== null) { lastMatch = m; }
  if (!lastMatch) { failures.push({ file: rel, err: 'no @/components import' }); continue; }
  const importEnd = lastMatch.index + lastMatch[0].length;
  let out = src.slice(0, importEnd) + COMPONENT_IMPORT + src.slice(importEnd);

  const bullets = data.bullets ? JSON.stringify(data.bullets) : 'undefined';
  const block = `\n        <QuickAnswerBox question=${JSON.stringify(data.question)} answer=${JSON.stringify(data.answer)} bullets={${bullets}} />\n`;

  if (/<Breadcrumbs[^>]*\/>/.test(out)) {
    out = out.replace(/(<Breadcrumbs[^>]*\/>)/, `$1${block}`);
  } else if (/<Navigation\s*\/>/.test(out)) {
    out = out.replace(/(<Navigation\s*\/>)/, `$1${block}`);
  } else {
    failures.push({ file: rel, err: 'no insertion anchor' });
    continue;
  }
  writeFileSync(p, out, 'utf-8');
  tsxTouched++;
  console.log('tsx injected:', rel);
}

console.log(`\nDone. JSON blogs: ${jsonTouched} / ${Object.keys(JSON_TARGETS).length}. TSX: ${tsxTouched} / ${Object.keys(TSX_TARGETS).length}.`);
if (failures.length) console.log('Failures:', JSON.stringify(failures, null, 2));
