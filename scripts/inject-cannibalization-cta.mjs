#!/usr/bin/env node
/**
 * Inject GetCertifiedCTA on informational blog posts that compete with
 * commercial cert pages for the same queries.
 *
 * Resolves cannibalization by pushing buyer-intent traffic from blog → cert page.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOG_FILE = join(ROOT, 'src', 'data', 'blogs.json');

// TSX-blog targets — inject <GetCertifiedCTA> component after QuickAnswerBox (or Breadcrumbs)
const TSX_TARGETS = {
  "src/pages/api-653-tank-inspection-guide.tsx": { cert: "API 653", href: "/api-653-certification", benefit: "Authorized Tank Inspector" },
  "src/pages/blog/rt-vs-ut-complete-comparison.tsx": { cert: "ASNT Level II/III", href: "/asnt-certification", benefit: "ASNT-certified inspector" },
  "src/pages/blog/eddy-current-testing-complete-guide.tsx": { cert: "ASNT ET Level II", href: "/asnt-certification", benefit: "ASNT ET-certified inspector" },
};

// JSON-blog targets — inject Get Certified CTA as HTML before main content
const JSON_TARGETS = {
  "asnt-snt-tc-1a-certification-requirements": { cert: "ASNT Level II/III", href: "/asnt-certification", benefit: "ASNT-certified NDT inspector" },
  "asnt-snt-tc-1a-vs-cp-189-comparison": { cert: "ASNT Level II/III", href: "/asnt-certification", benefit: "ASNT-certified NDT inspector" },
  "iso-9712-vs-asnt-snt-tc-1a-certification-comparison": { cert: "ASNT Level II/III", href: "/asnt-certification", benefit: "ASNT-certified NDT inspector" },
  "ndt-level-iii-certification-requirements-guide": { cert: "ASNT Level III", href: "/asnt-certification", benefit: "ASNT Level III technical authority" },
  "cwi-certification-requirements-cost-career-impact": { cert: "AWS CWI", href: "/asnt-certification", benefit: "Certified Welding Inspector" },
};

// Build HTML for blog content prepend
function ctaHtml(cert, href, benefit) {
  return `<aside style="margin: 24px 0; padding: 20px; border-radius: 12px; background: linear-gradient(to right, #fef3c7, #fed7aa); border: 1px solid rgba(217, 119, 6, 0.4);"><h2 style="margin: 0 0 8px 0; font-size: 18px; font-weight: 700; color: #78350f;">Get your ${cert} certification — fast track</h2><p style="margin: 0 0 12px 0; font-size: 14px; color: #1e293b;">ASNT Level III-led prep + practice exams to qualify as ${benefit}. Affordable, accessible, fully customizable cohorts — online + in-person.</p><a href="${href}" style="display: inline-block; padding: 8px 16px; border-radius: 8px; background: #d97706; color: white; font-weight: 600; text-decoration: none;">See ${cert} prep program →</a></aside>`;
}

const blogs = JSON.parse(readFileSync(BLOG_FILE, 'utf-8'));
let touched = 0;
for (const b of blogs) {
  if (!JSON_TARGETS[b.slug]) continue;
  const cfg = JSON_TARGETS[b.slug];
  // Skip if already has the CTA
  if (b.content && b.content.includes('See ' + cfg.cert + ' prep program')) {
    console.log('skip (has CTA):', b.slug);
    continue;
  }
  const cta = ctaHtml(cfg.cert, cfg.href, cfg.benefit);
  // Insert after first </p> (after intro) or at start if no </p>
  if (b.content && b.content.includes('</p>')) {
    const idx = b.content.indexOf('</p>') + 4;
    b.content = b.content.slice(0, idx) + cta + b.content.slice(idx);
  } else {
    b.content = cta + (b.content || '');
  }
  touched++;
  console.log('CTA injected:', b.slug);
}
writeFileSync(BLOG_FILE, JSON.stringify(blogs, null, 2), 'utf-8');
console.log(`\nJSON blogs: ${touched} updated.`);

// === TSX injection ===
let tsxPatched = 0;
let tsxSkipped = 0;
const tsxFailures = [];
for (const [rel, cfg] of Object.entries(TSX_TARGETS)) {
  const p = join(ROOT, rel);
  if (!existsSync(p)) { tsxFailures.push({ file: rel, err: 'ENOENT' }); continue; }
  let src = readFileSync(p, 'utf-8');
  if (src.includes('<GetCertifiedCTA')) { tsxSkipped++; continue; }
  // Add import after last @/components import
  const importRe = /import[^\n]+from\s+["']@\/components\/[^"']+["'];?[\r\n]+/g;
  let lastImport = null;
  let m;
  while ((m = importRe.exec(src)) !== null) lastImport = m;
  if (!lastImport) { tsxFailures.push({ file: rel, err: 'no @/components import' }); continue; }
  const importEnd = lastImport.index + lastImport[0].length;
  src = src.slice(0, importEnd) + `import GetCertifiedCTA from "@/components/GetCertifiedCTA";\n` + src.slice(importEnd);
  // Insert CTA AFTER QuickAnswerBox closing (after `/>` of QuickAnswerBox tag) OR after Breadcrumbs
  const ctaBlock = `      <GetCertifiedCTA cert="${cfg.cert}" href="${cfg.href}" benefit="${cfg.benefit}" />\n`;
  // Match `<QuickAnswerBox ... />\n` (self-closing)
  const qaCloseRe = /(<QuickAnswerBox[\s\S]*?\/>\s*\n)/;
  const brAnchor = /(<Breadcrumbs\s)/;
  if (qaCloseRe.test(src)) {
    src = src.replace(qaCloseRe, '$1' + ctaBlock);
  } else if (brAnchor.test(src)) {
    src = src.replace(brAnchor, ctaBlock + '      $1');
  } else {
    tsxFailures.push({ file: rel, err: 'no anchor' });
    continue;
  }
  writeFileSync(p, src, 'utf-8');
  tsxPatched++;
  console.log('tsx CTA injected:', rel);
}
console.log(`TSX: ${tsxPatched} patched, ${tsxSkipped} already had CTA.`);
if (tsxFailures.length) console.log('Failures:', JSON.stringify(tsxFailures, null, 2));
