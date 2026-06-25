#!/usr/bin/env node
/**
 * Post-build schema injector — adds FAQPage + BreadcrumbList JSON-LD
 * directly into every dist/blog/{slug}/index.html.
 *
 * Reads blog content from src/data/blogs.json, parses the
 * `<h3>Q1: ... <h3>QN:` FAQ pattern, and emits a JSON-LD script
 * into the page head before </head>.
 *
 * Idempotent — checks for marker comment before re-injecting.
 *
 * Run after `node scripts/prerender.mjs`.
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const MARKER = '<!-- atlantis-quality-faq-breadcrumb-v1 -->';
const SITE_URL = 'https://atlantisndt.com';

const blogs = JSON.parse(readFileSync(join(ROOT, 'src', 'data', 'blogs.json'), 'utf-8'));

function buildFAQPage(blog) {
  if (!blog.content) return null;
  const matches = [...blog.content.matchAll(
    /<h3>Q\d+:\s*([\s\S]*?)<\/h3>\s*<p>\s*(?:<strong>A:<\/strong>\s*)?([\s\S]*?)<\/p>/g
  )];
  if (matches.length < 2) return null;
  const mainEntity = matches.slice(0, 10).map(m => ({
    "@type": "Question",
    "name": m[1].replace(/<[^>]+>/g, '').trim(),
    "acceptedAnswer": {
      "@type": "Answer",
      "text": m[2].replace(/<[^>]+>/g, '').trim().slice(0, 1500),
    },
  })).filter(q => q.name && q.acceptedAnswer.text);
  if (mainEntity.length < 2) return null;
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/blog/${blog.slug}/#faq`,
    "mainEntity": mainEntity,
  };
}

function buildBreadcrumb(blog) {
  const items = [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog/` },
  ];
  if (blog.category) {
    const slug = blog.category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    items.push({
      "@type": "ListItem",
      "position": 3,
      "name": blog.category,
      "item": `${SITE_URL}/blog/category/${slug}/`,
    });
  }
  items.push({
    "@type": "ListItem",
    "position": items.length + 1,
    "name": blog.title,
    "item": `${SITE_URL}/blog/${blog.slug}/`,
  });
  return {
    "@type": "BreadcrumbList",
    "@id": `${SITE_URL}/blog/${blog.slug}/#breadcrumb`,
    "itemListElement": items,
  };
}

let injected = 0, skipped = 0, missing = 0, alreadyDone = 0;

for (const blog of blogs) {
  if (!blog.slug) { skipped++; continue; }
  const htmlPath = join(ROOT, 'dist', 'blog', blog.slug, 'index.html');
  if (!existsSync(htmlPath)) { missing++; continue; }
  let html = readFileSync(htmlPath, 'utf-8');
  if (html.includes(MARKER)) { alreadyDone++; continue; }

  const faq = buildFAQPage(blog);
  const breadcrumb = buildBreadcrumb(blog);

  const schemas = [];
  if (faq) schemas.push(faq);
  schemas.push(breadcrumb);

  const schemaJson = {
    "@context": "https://schema.org",
    "@graph": schemas,
  };
  const scriptTag = `${MARKER}\n<script type="application/ld+json">${JSON.stringify(schemaJson)}</script>`;

  // Inject before </head>
  html = html.replace('</head>', `${scriptTag}\n</head>`);
  writeFileSync(htmlPath, html, 'utf-8');
  injected++;
}

console.log(`FAQ + Breadcrumb schema injection:`);
console.log(`  Injected: ${injected}`);
console.log(`  Already done (marker found): ${alreadyDone}`);
console.log(`  Missing dist/blog/{slug}/index.html: ${missing}`);
console.log(`  Skipped (no slug): ${skipped}`);
console.log(`  Total blogs in JSON: ${blogs.length}`);
