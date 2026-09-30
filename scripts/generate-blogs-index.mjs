// Generates src/data/blogs-index.json — a lightweight version of blogs.json
// with the `content` field (2,000+ words of HTML per post, ~12MB total
// across 966 posts) stripped out.
//
// Why: RelatedArticles.tsx and GlossaryTerm.tsx statically import blogs.json
// but only ever read slug/title/category/metaDescription/snippet — never
// content. Because blogs.json is imported from multiple modules, Rollup puts
// it in its own shared chunk, so every glossary page (250+) and any page
// using RelatedArticles pulls the full 12MB blob just to render 2-3 related
// post links. This index removes that dead weight for those two consumers.
//
// BlogDetail.tsx and BlogService.ts still import the full blogs.json —
// they're not touched here (BlogDetail needs full content; BlogService
// backs the admin CRUD flow). Re-run this after any blogs.json edit, or via
// `npm run build` (wired into the build script).
import { readFileSync, writeFileSync } from 'fs';

const blogs = JSON.parse(readFileSync('src/data/blogs.json', 'utf-8'));

// 2026-09-29 (PERF): keep only the fields the two bundled consumers read.
// RelatedArticles: slug, title, category, (metaDescription || snippet).slice(0, 140)
// GlossaryTerm:    slug, title
// Everything else (quickAnswer, dates, ids, ...) was dead weight in a chunk
// that every blog and glossary page downloads. Full records are served per
// post from public/data/blogs/<slug>.json (scripts/emit-content-json.mjs).
const index = blogs.map((b) => {
  const o = { slug: b.slug, title: b.title };
  if (b.category) o.category = b.category;
  const desc = (b.metaDescription || b.snippet || '').slice(0, 140);
  if (desc) o.metaDescription = desc;
  return o;
});

writeFileSync('src/data/blogs-index.json', JSON.stringify(index, null, 1));

const fullSize = Buffer.byteLength(JSON.stringify(blogs));
const indexSize = Buffer.byteLength(JSON.stringify(index));
console.log(`blogs.json: ${(fullSize / 1024 / 1024).toFixed(2)} MB (${blogs.length} posts)`);
console.log(`blogs-index.json: ${(indexSize / 1024 / 1024).toFixed(2)} MB (content field stripped)`);
console.log(`Saved: ${((fullSize - indexSize) / 1024 / 1024).toFixed(2)} MB per bundle that switches to the index.`);
