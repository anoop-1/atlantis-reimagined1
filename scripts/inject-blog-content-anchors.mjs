#!/usr/bin/env node
/**
 * Inject inline anchors into blog content HTML in src/data/blogs.json.
 *
 * Phase D quality-round-2 — internal-link cascade from blog body to money pages.
 *
 * Strategy:
 *   - Scan each blog.content for first mention of named topics
 *   - Wrap first occurrence with <a href="..."> pointing to money page
 *   - Cap at 5 net-new anchors per blog (existing anchors are preserved)
 *   - Idempotency marker prevents double-injection
 *   - Avoid wrapping phrases that are already inside an <a> tag or <h1-h3>
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const BLOGS_PATH = join(ROOT, 'src', 'data', 'blogs.json');
const MARKER = '<!-- atlantis-inline-anchors-v1 -->';

// Anchor plan — phrase → href. Order matters; first match wins per blog.
// Phrases must be regex-safe substrings of the actual content.
const ANCHOR_PLAN = [
  // Certification money pages
  { re: /\bASNT NDT Level III\b/, href: '/consulting/asnt-level-iii-consulting-services' },
  { re: /\bASNT Level III\b/, href: '/consulting/asnt-level-iii-consulting-services' },
  { re: /\bASNT NDT Academy\b/, href: '/atlantis-academy' },
  { re: /\bAtlantis NDT Academy\b/, href: '/atlantis-academy' },
  { re: /\bASNT certification\b/, href: '/asnt-certification' },
  { re: /\bAPI 510\b/, href: '/api-510-certification' },
  { re: /\bAPI 570\b/, href: '/api-570-certification' },
  { re: /\bAPI 653\b/, href: '/api-653-certification' },
  { re: /\bISO 17024\b/, href: '/atlantis-iso-17024' },
  { re: /\bISO 9001\b/, href: '/atlantis-iso-9001' },

  // Product money pages
  { re: /\bAtlantis NDT ERP\b/, href: '/erp' },
  { re: /\bAtlantis ERP\b/, href: '/erp' },
  { re: /\bAtlantis NDT Digital Twin\b/, href: '/digital-twins' },
  { re: /\bDigital Twin platform\b/, href: '/digital-twins' },
  { re: /\bAtlantis NDT LMS\b/, href: '/lms' },
  { re: /\bAtlantis AI for NDT\b/, href: '/ai-ndt-defect-detection' },
  { re: /\bAtlantis NDT Reporting Software\b/, href: '/best-ndt-reporting-software-2026' },
  { re: /\bAtlantis Reporting Software\b/, href: '/best-ndt-reporting-software-2026' },
  { re: /\bNDT Reporting Software\b/, href: '/best-ndt-reporting-software-2026' },

  // Service money pages
  { re: /\bAPI 579 FFS\b/, href: '/consulting/api-579-fitness-for-service-services' },
  { re: /\bFitness[- ]for[- ]Service\b/i, href: '/consulting/api-579-fitness-for-service-services' },
  { re: /\bRBI program design\b/, href: '/consulting/rbi-program-design' },
  { re: /\bRBI per API 581\b/, href: '/consulting/rbi-program-design' },
  { re: /\bAtlantis NDT Partner Program\b/, href: '/atlantis-partner-program' },
  { re: /\b3D scanning\b/i, href: '/3d-scanning-services' },
  { re: /\bCCS inspection\b/, href: '/ccs-inspection' },

  // Marketing / nurture
  { re: /\bfree consultation\b/i, href: '/contact' },
  { re: /\bfree 30-min consultation\b/i, href: '/contact' },
  { re: /\bfree demo\b/i, href: '/contact' },
];

function isInsideTag(text, idx) {
  // Check if position `idx` is inside an <a>...</a> or a heading tag
  const before = text.slice(Math.max(0, idx - 500), idx);
  const lastOpen = before.lastIndexOf('<a ');
  const lastClose = before.lastIndexOf('</a>');
  if (lastOpen > lastClose) return true;
  // Heading check
  const lastH = before.lastIndexOf('<h');
  const lastHClose = Math.max(before.lastIndexOf('</h1>'), before.lastIndexOf('</h2>'), before.lastIndexOf('</h3>'), before.lastIndexOf('</h4>'));
  if (lastH > lastHClose) return true;
  return false;
}

function wrapFirstMatch(content, regex, href) {
  const m = regex.exec(content);
  if (!m) return content;
  const idx = m.index;
  if (isInsideTag(content, idx)) return content;
  const matched = m[0];
  // Skip if the next href would create a self-link to current page (handled at caller level)
  const replacement = `<a href="${href}">${matched}</a>`;
  return content.slice(0, idx) + replacement + content.slice(idx + matched.length);
}

const blogs = JSON.parse(readFileSync(BLOGS_PATH, 'utf-8'));
let processed = 0, anchored = 0, skipped = 0;
let totalAnchorsAdded = 0;

for (const blog of blogs) {
  if (typeof blog.content !== 'string') { skipped++; continue; }
  if (blog.content.includes(MARKER)) { skipped++; continue; }

  let content = blog.content;
  let anchorsThisBlog = 0;
  const MAX_ANCHORS_PER_BLOG = 5;

  for (const { re, href } of ANCHOR_PLAN) {
    if (anchorsThisBlog >= MAX_ANCHORS_PER_BLOG) break;
    // Skip if blog URL would be self-referential (rare but possible)
    if (blog.slug && href.endsWith(`/${blog.slug}`)) continue;
    const before = content;
    content = wrapFirstMatch(content, new RegExp(re.source, re.flags), href);
    if (content !== before) {
      anchorsThisBlog++;
      totalAnchorsAdded++;
    }
  }

  if (anchorsThisBlog > 0) {
    blog.content = MARKER + '\n' + content;
    anchored++;
    blog.updatedAt = '2028-01-17';
  }
  processed++;
}

writeFileSync(BLOGS_PATH, JSON.stringify(blogs, null, 2), 'utf-8');

console.log(`Phase D inline-anchor cascade:`);
console.log(`  Processed: ${processed}`);
console.log(`  Anchored (≥1 net-new anchor added): ${anchored}`);
console.log(`  Skipped (already injected / no content): ${skipped}`);
console.log(`  Total anchors added: ${totalAnchorsAdded}`);
console.log(`  Avg anchors per touched blog: ${anchored ? (totalAnchorsAdded / anchored).toFixed(1) : 0}`);
