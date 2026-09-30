// Preload each prerendered page's own route chunk (and its per-item content
// JSON) straight from the HTML. 2026-09-29 (PERF / Core Web Vitals).
//
// Why: every route is a lazy chunk, so the browser only discovers it after the
// ~290 KB-gzip main bundle has downloaded AND executed; blog, depth and
// compliance pages then discover their content JSON one hop later still. The
// prerendered copy is hidden behind the splash until React mounts, so each of
// those serial round trips lands directly on mobile LCP (Lighthouse mobile:
// "render delay" was 5.5 s of a 6.2 s LCP). Declaring the chunk + JSON in the
// <head> lets them download in parallel with the main bundle.
//
// Mechanism: vite.config.ts emits dist/.vite/manifest.json; this script maps
// URL -> route component using the <Route> table in src/App.tsx, then the
// component's source file -> chunk + static-import chunks + CSS via the
// manifest. Anything it cannot resolve unambiguously is skipped (the page just
// behaves as before). "/" is left to preload-home-chunk.mjs. The manifest is
// deleted afterwards so it is not published.
//
// Only <link rel=modulepreload|preload> tags are added; page content is untouched.
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync, rmSync } from 'fs';
import { join, posix } from 'path';

const DIST = 'dist';
const MANIFEST = join(DIST, '.vite', 'manifest.json');
const MARK = 'data-route-preload';

function main() {
  if (!existsSync(MANIFEST)) {
    console.warn('preload-route-chunks: no dist/.vite/manifest.json (build.manifest off?), skipped');
    return;
  }
  const manifest = JSON.parse(readFileSync(MANIFEST, 'utf8'));
  const app = readFileSync('src/App.tsx', 'utf8');

  // ── component name -> source file (manifest key) ─────────────────────────
  const compFile = new Map();
  const lazyRe = /const\s+(\w+)\s*=\s*lazy\(\s*\(\)\s*=>\s*import\(\s*["'](\.\/[^"']+)["']\s*\)\s*\)/g;
  for (const m of app.matchAll(lazyRe)) {
    const base = posix.join('src', m[2]);
    const key = [base, `${base}.tsx`, `${base}.ts`, `${base}.jsx`, `${base}/index.tsx`].find((k) => manifest[k]);
    if (key && !compFile.has(m[1])) compFile.set(m[1], key);
  }

  // ── route table ──────────────────────────────────────────────────────────
  const exact = new Map(); // path -> component
  const params = []; // { segs, comp, order }
  const routeRe = /<Route\s+(?:key=\{[^}]*\}\s+)?path=(?:"([^"]+)"|\{`([^`]+)`\})\s+element=\{<(?:LazyRoute\s+Component=\{(\w+)\}|(\w+))/g;
  const templates = [];
  const splats = []; // "/compliance/*" style: { prefix: "/compliance/", comp }
  let order = 0;
  for (const m of app.matchAll(routeRe)) {
    const comp = m[3] || m[4];
    order++;
    if (m[2]) { templates.push({ tpl: m[2], comp }); continue; }
    const p = m[1];
    if (p === '*') continue;
    if (/^(\/[a-z0-9-]+)+\/\*$/.test(p)) { splats.push({ prefix: p.slice(0, -1), comp }); continue; }
    if (p.includes(':') || p.includes('*')) params.push({ segs: p.split('/').slice(1), comp, order });
    else if (!exact.has(p)) exact.set(p, comp);
  }
  // Template-literal routes (generated with .map) can shadow other patterns;
  // any page matching one is skipped rather than guessed at.
  const templateRes = templates.map((t) => new RegExp('^' + t.tpl.split(/\$\{[^}]*\}/).map((s) => s.replace(/[.*+?^()|[\]\\]/g, '\\$&')).join('[^/]+') + '$'));

  function resolveComp(url) {
    if (exact.has(url)) return exact.get(url);
    if (templateRes.some((re) => re.test(url))) return null;
    const segs = url.split('/').slice(1);
    let best = null, bestScore = -1, tie = false;
    for (const r of params) {
      if (r.segs.length !== segs.length) continue;
      let score = 0, ok = true;
      for (let i = 0; i < segs.length; i++) {
        if (r.segs[i].startsWith(':')) score += 1;
        else if (r.segs[i] === segs[i]) score += 10;
        else { ok = false; break; }
      }
      if (!ok) continue;
      if (score > bestScore) { best = r; bestScore = score; tie = false; }
      else if (score === bestScore) tie = true;
    }
    if (best) return tie ? null : best.comp;
    // Splat routes rank below static and :param routes in react-router;
    // use one only when it is the single splat that matches.
    const sp = splats.filter((s) => url.startsWith(s.prefix));
    return sp.length === 1 ? sp[0].comp : null;
  }

  // ── chunk closure (excluding what the entry already loads) ───────────────
  const entryKey = Object.keys(manifest).find((k) => manifest[k].isEntry);
  const entryFiles = new Set();
  (function walk(k) {
    const e = manifest[k]; if (!e || entryFiles.has(e.file)) return;
    entryFiles.add(e.file);
    (e.css || []).forEach((c) => entryFiles.add(c)); // already a <link rel=stylesheet>
    (e.imports || []).forEach(walk);
  })(entryKey);

  const closureCache = new Map();
  function closure(key) {
    if (closureCache.has(key)) return closureCache.get(key);
    const js = [], css = [], seen = new Set();
    (function walk(k) {
      const e = manifest[k];
      if (!e || seen.has(k)) return;
      seen.add(k);
      if (!entryFiles.has(e.file)) js.push(e.file);
      for (const c of e.css || []) if (!css.includes(c) && !entryFiles.has(c)) css.push(c);
      (e.imports || []).forEach(walk);
    })(key);
    const r = { js, css };
    closureCache.set(key, r);
    return r;
  }

  // ── per-item content JSON (scripts/emit-content-json.mjs) ────────────────
  function dataUrl(url, comp) {
    let f = null;
    if (comp === 'BlogDetail' && url.startsWith('/blog/')) f = `/data/blogs/${url.slice(6)}.json`;
    else if (comp === 'DepthPage') f = `/data/depth${url}.json`;
    else if (comp === 'CompliancePage') f = `/data/compliance${url}.json`;
    return f && existsSync(join(DIST, f)) ? f : null;
  }

  // ── walk prerendered pages ───────────────────────────────────────────────
  let pages = 0, tagged = 0, withData = 0, unresolved = 0;
  (function walkDir(dir) {
    for (const name of readdirSync(dir)) {
      if (name === 'assets' || name === 'data' || name === '.vite') continue;
      const full = join(dir, name);
      if (statSync(full).isDirectory()) { walkDir(full); continue; }
      if (name !== 'index.html' || dir === DIST) continue; // "/" -> preload-home-chunk.mjs
      pages++;
      const url = '/' + dir.slice(DIST.length + 1).split(/[\\/]/).join('/');
      const comp = resolveComp(url);
      const key = comp && compFile.get(comp);
      if (!key) { unresolved++; continue; }
      const { js, css } = closure(key);
      const tags = [
        ...js.map((f) => `<link rel="modulepreload" href="/${f}" crossorigin ${MARK}>`),
        ...css.map((f) => `<link rel="preload" href="/${f}" as="style" ${MARK}>`),
      ];
      const d = dataUrl(url, comp);
      if (d) { tags.push(`<link rel="preload" href="${d}" as="fetch" crossorigin ${MARK}>`); withData++; }
      if (!tags.length) continue;
      let html = readFileSync(full, 'utf8');
      html = html.replace(new RegExp(`\\s*<link [^>]*${MARK}[^>]*>`, 'g'), '');
      if (!html.includes('</head>')) continue;
      html = html.replace('</head>', `  ${tags.join('\n  ')}\n</head>`);
      writeFileSync(full, html);
      tagged++;
    }
  })(DIST);
  console.log(`preload-route-chunks: ${tagged}/${pages} pages tagged (${withData} with content JSON), ${unresolved} unresolved (left as before)`);
}

try {
  main();
} finally {
  rmSync(join(DIST, '.vite'), { recursive: true, force: true });
}
