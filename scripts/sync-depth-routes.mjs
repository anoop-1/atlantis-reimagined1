#!/usr/bin/env node
/**
 * Sync depth-page <Route> lines into src/App.tsx. 2026-09-02.
 * ─────────────────────────────────────────────────────────────────────────────
 * build-depth-pages.mjs emits scripts/depth-pages-routes.txt and the header in
 * App.tsx says "keep in step with scripts/depth-pages-routes.txt after each
 * builder run" — by hand. That manual step is a live failure mode: prerender
 * reads DEPTH_PAGE_ROUTES and writes static HTML for every new page, so a
 * crawler sees a real page, while the React app has no matching <Route> and a
 * human clicking through from anywhere on the site lands on a 404. The two
 * layers disagree and only the human notices.
 *
 * This closes it. Idempotent: it inserts only the routes App.tsx is missing,
 * directly after the generated-list marker, and reports what it added.
 *
 *   node scripts/sync-depth-routes.mjs           # apply
 *   node scripts/sync-depth-routes.mjs --check   # exit 1 if out of sync, change nothing
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const CHECK = process.argv.includes('--check');

const TXT = join(__dirname, 'depth-pages-routes.txt');
const APP = join(ROOT, 'src', 'App.tsx');

// The generated block is anchored on this comment, which already exists.
const MARKER = 'scripts/depth-pages-routes.txt after each builder run. */}';

if (!existsSync(TXT)) {
  console.error(`Missing ${TXT} — run scripts/build-depth-pages.mjs first.`);
  process.exit(1);
}

const wanted = readFileSync(TXT, 'utf-8')
  .split('\n')
  .map((l) => l.trim())
  .filter((l) => l.startsWith('<Route'));

const app = readFileSync(APP, 'utf-8');

const pathOf = (line) => (line.match(/path="([^"]+)"/) || [])[1];
const present = new Set(
  [...app.matchAll(/<Route\s+path="([^"]+)"[^>]*DepthPage[^>]*\/>/g)].map((m) => m[1])
);

const missing = wanted.filter((l) => {
  const p = pathOf(l);
  return p && !present.has(p);
});

if (!missing.length) {
  console.log(`✅ App.tsx in sync — ${present.size} depth routes, nothing to add.`);
  process.exit(0);
}

if (CHECK) {
  console.error(`❌ App.tsx is missing ${missing.length} depth route(s):`);
  for (const l of missing.slice(0, 10)) console.error(`     ${pathOf(l)}`);
  console.error('   Run: node scripts/sync-depth-routes.mjs');
  process.exit(1);
}

const idx = app.indexOf(MARKER);
if (idx === -1) {
  console.error('Could not find the generated-list marker in src/App.tsx — refusing to guess where to insert.');
  process.exit(1);
}
const insertAt = idx + MARKER.length;
const indent = '                  ';
const block = '\n' + missing.map((l) => indent + l).join('\n');

writeFileSync(APP, app.slice(0, insertAt) + block + app.slice(insertAt), 'utf-8');
console.log(`✅ Added ${missing.length} depth route(s) to src/App.tsx (now ${present.size + missing.length} total)`);
for (const l of missing.slice(0, 8)) console.log(`     ${pathOf(l)}`);
if (missing.length > 8) console.log(`     … and ${missing.length - 8} more`);
