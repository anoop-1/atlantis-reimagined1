#!/usr/bin/env node
/**
 * Inject TableOfContents on 30 long-form product/service pages.
 * Targets SERP jump-link sitelinks. Insertion: before first <QuickAnswerBox /> if present,
 * else before <Breadcrumbs ... />.
 * Idempotent guard: skip if `<TableOfContents` already present.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

/** Each target: TocItem[] keyed by file path relative to ROOT */
const TARGETS = {
  // ===== Training (8) =====
  "src/pages/asnt-certification.tsx": [
    { id: "overview", label: "ASNT Certification Overview" },
    { id: "levels", label: "Level I / II / III Requirements" },
    { id: "methods", label: "NDT Methods Covered" },
    { id: "training", label: "Training Path & Pass Rates" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/api-510-training.tsx": [
    { id: "overview", label: "API 510 Training Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "exam-prep", label: "Exam Preparation" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/api-570-training.tsx": [
    { id: "overview", label: "API 570 Training Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "exam-prep", label: "Exam Preparation" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/api-653-training.tsx": [
    { id: "overview", label: "API 653 Training Overview" },
    { id: "curriculum", label: "Curriculum" },
    { id: "exam-prep", label: "Exam Preparation" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/asnt-level-iii-training.tsx": [
    { id: "overview", label: "Level III Training Overview" },
    { id: "basic-exam", label: "Basic Exam Prep" },
    { id: "method-exam", label: "Method Exam Prep" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/UltrasonicTestingHub.tsx": [
    { id: "overview", label: "Ultrasonic Testing Overview" },
    { id: "applications", label: "Applications" },
    { id: "certification", label: "Certification" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/RadiographicTestingHub.tsx": [
    { id: "overview", label: "Radiographic Testing Overview" },
    { id: "applications", label: "Applications" },
    { id: "certification", label: "Certification" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/MagneticParticleTestingHub.tsx": [
    { id: "overview", label: "Magnetic Particle Testing Overview" },
    { id: "applications", label: "Applications" },
    { id: "certification", label: "Certification" },
    { id: "faq", label: "FAQ" },
  ],

  // ===== Consulting (6) =====
  "src/pages/ConsultingServices.tsx": [
    { id: "featured-service-lines", label: "Featured Consulting Service Lines" },
    { id: "asnt-level-iii-depth", label: "ASNT Level III Consulting — Depth" },
    { id: "industries-served", label: "Industries Served" },
    { id: "engagement-models", label: "Engagement Models" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/consulting/AsntLevelIiiConsultingServices.tsx": [
    { id: "overview", label: "ASNT Level III Service Overview" },
    { id: "deliverables", label: "What We Deliver" },
    { id: "methodology", label: "Methodology" },
    { id: "case-studies", label: "Case Studies" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/consulting/Api510PressureVesselInspectorServices.tsx": [
    { id: "overview", label: "API 510 Service Overview" },
    { id: "deliverables", label: "What We Deliver" },
    { id: "methodology", label: "Methodology" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/consulting/Api570PipingInspectorServices.tsx": [
    { id: "overview", label: "API 570 Service Overview" },
    { id: "deliverables", label: "What We Deliver" },
    { id: "methodology", label: "Methodology" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/consulting/Api653TankInspectorServices.tsx": [
    { id: "overview", label: "API 653 Service Overview" },
    { id: "deliverables", label: "What We Deliver" },
    { id: "methodology", label: "Methodology" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/consulting/fitness-for-service-api-579.tsx": [
    { id: "overview", label: "FFS API 579 Overview" },
    { id: "deliverables", label: "What We Deliver" },
    { id: "methodology", label: "Methodology" },
    { id: "faq", label: "FAQ" },
  ],

  // ===== ERP (8) =====
  "src/pages/Erp.tsx": [
    { id: "overview", label: "Atlantis NDT ERP Overview" },
    { id: "modules", label: "Modules" },
    { id: "industries", label: "Industries" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/ErpIndustriesHub.tsx": [
    { id: "overview", label: "ERP by Industry Overview" },
    { id: "industries", label: "Industries Served" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/ErpModulesHub.tsx": [
    { id: "overview", label: "ERP Modules Overview" },
    { id: "modules", label: "Module Catalog" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/NdtErpVsGenericErp.tsx": [
    { id: "overview", label: "NDT ERP vs Generic ERP" },
    { id: "comparison", label: "Comparison Matrix" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/best-ndt-reporting-software-2026.tsx": [
    { id: "overview", label: "Best NDT Reporting Software 2026" },
    { id: "comparison", label: "Vendor Comparison" },
    { id: "criteria", label: "Selection Criteria" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/blog/api-510-570-653-exam-schedule-2026.tsx": [
    { id: "overview", label: "API Exam Schedule 2026" },
    { id: "api-510", label: "API 510 Dates" },
    { id: "api-570", label: "API 570 Dates" },
    { id: "api-653", label: "API 653 Dates" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/blog/asme-section-v-article-4-ut-requirements-explained.tsx": [
    { id: "overview", label: "ASME Section V Article 4 Overview" },
    { id: "calibration", label: "Calibration Requirements" },
    { id: "scanning", label: "Scanning Patterns" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/blog/aws-d1-1-weld-acceptance-criteria-comprehensive-guide.tsx": [
    { id: "overview", label: "AWS D1.1 Weld Acceptance Overview" },
    { id: "criteria", label: "Acceptance Criteria" },
    { id: "loading", label: "Static vs Cyclic Loading" },
    { id: "faq", label: "FAQ" },
  ],

  // ===== DT (5) =====
  "src/pages/DigitalTwins.tsx": [
    { id: "overview", label: "Digital Twin Platform Overview" },
    { id: "use-cases", label: "Use Cases" },
    { id: "integrations", label: "Integrations" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/DigitalTwinRoiCalculator.tsx": [
    { id: "overview", label: "Digital Twin ROI Overview" },
    { id: "examples", label: "Worked Examples" },
    { id: "calculator", label: "Calculator" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/DigitalTwinReadinessQuiz.tsx": [
    { id: "overview", label: "Digital Twin Readiness Quiz Overview" },
    { id: "quiz", label: "Take the Quiz" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/DigitalTwinApiMapping.tsx": [
    { id: "overview", label: "Digital Twin API Mapping Overview" },
    { id: "mapping", label: "API Mapping" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/DigitalTwinsNdtGuide2026.tsx": [
    { id: "overview", label: "Digital Twins NDT Guide 2026" },
    { id: "implementation", label: "Implementation Roadmap" },
    { id: "vendors", label: "Vendor Landscape" },
    { id: "faq", label: "FAQ" },
  ],

  // ===== Cross (3 high-imp blog) =====
  "src/pages/blog/ndt-salary-guide-2026-global.tsx": [
    { id: "overview", label: "NDT Salary Guide 2026 Overview" },
    { id: "regions", label: "Regional Breakdown" },
    { id: "methods", label: "Salary by Method" },
    { id: "levels", label: "Salary by Level" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/blog/rt-vs-ut-complete-comparison.tsx": [
    { id: "overview", label: "RT vs UT Overview" },
    { id: "comparison", label: "Comparison Matrix" },
    { id: "selection", label: "When to Choose Each" },
    { id: "faq", label: "FAQ" },
  ],
  "src/pages/blog/eddy-current-testing-complete-guide.tsx": [
    { id: "overview", label: "Eddy Current Testing Overview" },
    { id: "applications", label: "Applications" },
    { id: "et-level-ii", label: "ET Level II Prep" },
    { id: "faq", label: "FAQ" },
  ],
};

let patched = 0;
let skipped = 0;
const failures = [];

for (const [rel, items] of Object.entries(TARGETS)) {
  const p = join(ROOT, rel);
  if (!existsSync(p)) {
    failures.push({ file: rel, err: 'ENOENT' });
    continue;
  }
  let src = readFileSync(p, 'utf-8');

  if (src.includes('<TableOfContents') || src.includes('TableOfContents,')) {
    skipped++;
    continue;
  }

  // Find last @/components import — append TableOfContents import
  const importRe = /import[^\n]+from\s+["']@\/components\/[^"']+["'];?[\r\n]+/g;
  let lastImport = null;
  let m;
  while ((m = importRe.exec(src)) !== null) lastImport = m;
  if (!lastImport) {
    failures.push({ file: rel, err: 'no @/components import found' });
    continue;
  }
  const importEnd = lastImport.index + lastImport[0].length;
  const componentImport = `import TableOfContents from "@/components/TableOfContents";\n`;
  src = src.slice(0, importEnd) + componentImport + src.slice(importEnd);

  // Insertion point: before <QuickAnswerBox if exists; else before <Breadcrumbs
  const tocItems = items.map(i => `{ id: "${i.id}", label: "${i.label}" }`).join(', ');
  const tocBlock = `      <TableOfContents items={[${tocItems}]} />\n`;

  const qaAnchor = /(<QuickAnswerBox)/;
  const brAnchor = /(<Breadcrumbs\s)/;

  if (qaAnchor.test(src)) {
    src = src.replace(qaAnchor, tocBlock + '      $1');
  } else if (brAnchor.test(src)) {
    src = src.replace(brAnchor, tocBlock + '      $1');
  } else {
    failures.push({ file: rel, err: 'no QuickAnswerBox or Breadcrumbs anchor' });
    continue;
  }

  writeFileSync(p, src, 'utf-8');
  patched++;
  console.log(`tocinjected: ${rel}`);
}

console.log(`\nDone. ${patched} patched, ${skipped} already had TOC.`);
if (failures.length) console.log('Failures:', JSON.stringify(failures, null, 2));
