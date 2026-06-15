#!/usr/bin/env node
/**
 * Inject GetCertifiedCTA on informational blog posts that compete with
 * commercial cert pages for the same queries.
 *
 * Resolves cannibalization by pushing buyer-intent traffic from blog → cert page.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOG_FILE = join(ROOT, 'src', 'data', 'blogs.json');

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
console.log(`\nDone. ${touched} blogs updated.`);
