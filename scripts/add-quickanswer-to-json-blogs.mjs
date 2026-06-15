#!/usr/bin/env node
/**
 * Add quickAnswer field to 5 JSON-driven blog posts in src/data/blogs.json.
 * BlogDetail.tsx reads blog.quickAnswer and renders QuickAnswerBox.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOG_FILE = join(ROOT, 'src', 'data', 'blogs.json');

const QA_BY_SLUG = {
  "iso-9712-vs-asnt-snt-tc-1a-certification-comparison": {
    question: "ISO 9712 vs ASNT SNT-TC-1A — which certification do you need?",
    answer: "ISO 9712 is a third-party / central certification recognized globally (especially in Europe, Middle East, Asia-Pacific). ASNT SNT-TC-1A is an employer-based certification more common in North America. Many inspection contracts require ISO 9712 — projects under EN, BS, or international codes typically mandate it. ASNT-only certs may need recognition by an ISO 9712 body to work in EU / GCC / India.",
    bullets: [
      "ISO 9712: independent body issues cert; method-specific; renewable every 5 yrs",
      "SNT-TC-1A: employer issues cert; tied to employer; expires on job change",
      "ACCP: ASNT-administered third-party route compatible with ISO 9712"
    ]
  },
  "asnt-snt-tc-1a-certification-requirements": {
    question: "What does ASNT SNT-TC-1A 2024 require?",
    answer: "ASNT SNT-TC-1A (2024 edition) is the recommended practice for employer-based NDT personnel certification. It specifies minimum training hours, experience hours, vision acuity, written + practical examinations, and a Written Practice document the employer must publish. Employers' Level III signs all qualification records.",
    bullets: [
      "Training hours per method (Level I/II): UT 40/40, RT 40/40, MT 12/24, PT 8/16, ET 40/40, VT 8/16",
      "Vision: Jaeger J-1 (near) at 12 in. + Ishihara colour test annually",
      "Written Practice: employer-specific document signed by responsible Level III"
    ]
  },
  "aws-d1-1-weld-acceptance-criteria-comprehensive-guide": {
    question: "What are the AWS D1.1 weld acceptance criteria?",
    answer: "AWS D1.1 Structural Welding Code—Steel sets acceptance criteria for visual + NDT inspection of statically and cyclically loaded welded steel structures. Defects evaluated include cracks (always rejectable), porosity, undercut, slag inclusions, and incomplete fusion — with explicit dimensional limits per defect type and per loading category.",
    bullets: [
      "Cracks: rejectable in all weld types and loading conditions",
      "Statically loaded: undercut <= 1/32 in. for material >= 1 in. thick",
      "Cyclically loaded: porosity <= 1/16 in. diameter, more restrictive criteria"
    ]
  },
  "asme-section-v-article-4-ut-requirements-explained": {
    question: "What does ASME Section V Article 4 require for UT?",
    answer: "ASME Section V Article 4 (latest 2023 edition) specifies the ultrasonic examination requirements for welds — equipment qualification, calibration block requirements, technique sheet content, scanning patterns (e.g. raster, ratchet), DAC / DGS / TCG calibration, and how to record and report indications. The article covers manual + automated UT (including PAUT and TOFD).",
    bullets: [
      "Calibration: side-drilled holes, notches, basic + DAC blocks per code-paragraph",
      "Scanning: minimum 10% overlap, scan speed limits per data-recording method",
      "Recording threshold: 20% DAC standard, lower for critical applications"
    ]
  },
  "visual-testing": {
    question: "What is visual testing (VT) in NDT?",
    answer: "Visual testing (VT) is the foundational NDT method — direct or remote (borescope) examination of a surface for defects, condition, or accuracy. Used as the first step on virtually every inspection program: welds, castings, machined components, in-service equipment. Requires controlled lighting, viewing angle, magnification, and ASNT Level II VT certification for code-required acceptance decisions.",
    bullets: [
      "Direct VT: unaided eye + magnifier — 6 in. to 24 in. distance, >= 30 deg angle",
      "Remote VT: borescope, drone, ROV — confined spaces, high-temp, subsea",
      "Standards: ASME Section V Art. 9, ASNT SNT-TC-1A VT Level II"
    ]
  }
};

const blogs = JSON.parse(readFileSync(BLOG_FILE, 'utf-8'));
let touched = 0;
for (const b of blogs) {
  if (QA_BY_SLUG[b.slug]) {
    if (b.quickAnswer) {
      console.log('skip (already has):', b.slug);
      continue;
    }
    b.quickAnswer = QA_BY_SLUG[b.slug];
    touched++;
    console.log('added quickAnswer:', b.slug);
  }
}
writeFileSync(BLOG_FILE, JSON.stringify(blogs, null, 2), 'utf-8');
console.log(`\nDone. ${touched} / ${Object.keys(QA_BY_SLUG).length} blogs updated.`);
