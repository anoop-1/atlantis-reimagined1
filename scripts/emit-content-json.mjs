// Emits per-item JSON for the two data-driven page families so the SPA loads
// only the item it is rendering. 2026-09-29 (PERF).
//
// Why: BlogDetail.tsx imported the whole of src/data/blogs.json (12.5 MB raw,
// ~2 MB gzip) and DepthPage.tsx the whole of src/data/depth-pages.json
// (14 MB raw, ~3.7 MB gzip). Every blog/depth visitor and every Googlebot
// render downloaded all of it: ~70% of all bytes the site served.
//
// Output (public/ is copied verbatim into dist/ by Vite; the folders are
// generated, gitignored, and wiped on every run so deleted items disappear):
//   public/data/blogs/<slug>.json          one full blog record
//   public/data/blogs-index.json           slim list for /blog (no content)
//   public/data/depth/<path>.json          one depth page, e.g. slug
//                                          "/inspection/x" -> depth/inspection/x.json
//
// The source of truth is unchanged: src/data/*.json. scripts/prerender.mjs
// keeps reading those directly, so crawler HTML is unaffected.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync, readdirSync, statSync } from 'fs';
import { dirname, join } from 'path';

const OUT = join('public', 'data');
const SLUG_RE = /^[a-z0-9][a-z0-9-]*$/;
const PATH_RE = /^(\/[a-z0-9][a-z0-9-]*)+$/;

// Files are written only when changed, and stale ones removed individually:
// a recursive rmSync of thousands of files hits ENOTEMPTY on Windows (indexer
// / AV handles), which failed a build.
const written = new Set();
function writeJson(file, value) {
  const body = JSON.stringify(value);
  written.add(file);
  if (existsSync(file) && readFileSync(file, 'utf8') === body) return;
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, body);
}
function pruneStale(dir) {
  if (!existsSync(dir)) return;
  for (const name of readdirSync(dir)) {
    const f = join(dir, name);
    if (statSync(f).isDirectory()) pruneStale(f);
    else if (!written.has(f)) rmSync(f, { force: true, maxRetries: 5 });
  }
}

// ── Blogs ──────────────────────────────────────────────────────────────────
const blogs = JSON.parse(readFileSync('src/data/blogs.json', 'utf-8'));
let blogBytes = 0;
const seen = new Set();
for (const b of blogs) {
  if (!SLUG_RE.test(b.slug || '')) throw new Error(`emit-content-json: unsafe blog slug ${JSON.stringify(b.slug)}`);
  if (seen.has(b.slug)) continue; // first record wins, matching Array.find()
  seen.add(b.slug);
  const f = join(OUT, 'blogs', `${b.slug}.json`);
  writeJson(f, b);
  blogBytes += Buffer.byteLength(JSON.stringify(b));
}
// The /blog list only needs these fields (see src/pages/Blog.tsx).
const listIndex = blogs.map(({ id, slug, title, date, snippet, order }) => ({ id, slug, title, date, snippet, order }));
writeJson(join(OUT, 'blogs-index.json'), listIndex);

// ── Depth pages ───────────────────────────────────────────────────────────
const depth = JSON.parse(readFileSync('src/data/depth-pages.json', 'utf-8'));
let depthBytes = 0;
const seenD = new Set();
for (const p of depth) {
  if (!PATH_RE.test(p.slug || '')) throw new Error(`emit-content-json: unsafe depth slug ${JSON.stringify(p.slug)}`);
  if (seenD.has(p.slug)) continue;
  seenD.add(p.slug);
  writeJson(join(OUT, 'depth', `${p.slug.slice(1)}.json`), p);
  depthBytes += Buffer.byteLength(JSON.stringify(p));
}

// ── Compliance pages (same pattern; was a 4.3 MB raw / ~420 KB gzip chunk) ──
const compliance = JSON.parse(readFileSync('src/data/compliance-pages.json', 'utf-8'));
let compBytes = 0;
const seenC = new Set();
for (const p of compliance) {
  if (!PATH_RE.test(p.slug || '')) throw new Error(`emit-content-json: unsafe compliance slug ${JSON.stringify(p.slug)}`);
  if (seenC.has(p.slug)) continue;
  seenC.add(p.slug);
  writeJson(join(OUT, 'compliance', `${p.slug.slice(1)}.json`), p);
  compBytes += Buffer.byteLength(JSON.stringify(p));
}

// ── Practical NDT city/region pages (2026-09-30: ~4.6 MB once wave 2 landed) ──
const practical = JSON.parse(readFileSync('src/data/practical-ndt-cities.json', 'utf-8'));
const seenP = new Set();
for (const p of practical) {
  if (!SLUG_RE.test(p.slug || '')) throw new Error(`emit-content-json: unsafe practical slug ${JSON.stringify(p.slug)}`);
  if (seenP.has(p.slug)) continue;
  seenP.add(p.slug);
  writeJson(join(OUT, 'practical', `${p.slug}.json`), p);
}

// ── Geo hub pages (2026-10-02, scripts/build-geo-hubs.mjs): one file per page,
// keyed by path without the leading slash (slugs repeat across families).
if (existsSync('src/data/geo-hubs-pages.json')) {
  const hubs = JSON.parse(readFileSync('src/data/geo-hubs-pages.json', 'utf-8'));
  for (const p of hubs) {
    if (!PATH_RE.test(p.path || '') || p.path.split('/').length !== 2) throw new Error(`emit-content-json: unsafe geo hub path ${JSON.stringify(p.path)}`);
    writeJson(join(OUT, 'geohubs', `${p.path.slice(1)}.json`), p);
  }
}

for (const d of ['blogs', 'depth', 'compliance', 'practical', 'geohubs']) pruneStale(join(OUT, d));

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;
console.log(`emit-content-json: ${seen.size} blogs (${kb(blogBytes)}, avg ${kb(blogBytes / seen.size)}), ` +
  `list index ${kb(Buffer.byteLength(JSON.stringify(listIndex)))}, ` +
  `${seenD.size} depth pages (${kb(depthBytes)}, avg ${kb(depthBytes / seenD.size)}), ` +
  `${seenC.size} compliance pages (${kb(compBytes)}, avg ${kb(compBytes / seenC.size)})`);
