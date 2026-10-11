// Critical CSS for the prerendered pages — Core Web Vitals / LCP, 2026-10-12.
//
// Every prerendered page paints its crawler copy as the LCP element (see
// src/lib/prerender-handover.ts). The only thing that first paint waited for was
// the render-blocking app stylesheet, and on a slow mobile link that request queues
// behind the app bundle and the route-chunk modulepreloads (Lighthouse-style mobile
// throttling: LCP 2.1 s with the blocking stylesheet, 1.0 s with this step).
//
// What it does, after every other HTML writer has run:
//  1. Reads the built entry stylesheet and keeps only the rules that can style the
//     prerendered copy: selectors without a class (Tailwind preflight, :root
//     variables, element/base rules, and the #root / #prerender-veil crawler rules),
//     minus Tailwind's --tw-* variable defaults, which nothing without a class uses.
//     Every rule keeps its order, so when the full sheet arrives the prerendered copy
//     computes to the same styles and nothing moves.
//  2. Replaces the blocking <link rel="stylesheet"> in every built HTML page with
//       <style data-critical-css>…</style>
//       <link rel="preload" as="style">                (keeps the sheet's high priority)
//       <link rel="stylesheet" media="print" onload="this.media='all'" data-async-css>
//       <noscript><link rel="stylesheet"></noscript>    (no-JS visitors)
//     The handover waits for [data-async-css] to apply before revealing React.
// Page content is untouched. Idempotent: pages already carrying data-critical-css
// are skipped. If anything looks wrong it changes nothing and exits 0 (the pages then
// simply keep the blocking stylesheet, as before).
import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs';
import { join } from 'path';
import postcss from 'postcss';

const DIST = 'dist';
const MAX_BYTES = 20000;

function criticalCss(css) {
  const root = postcss.parse(css);
  const hasClass = (sel) => /\.[A-Za-z_\\-]/.test(sel.replace(/\[[^\]]*\]/g, ''));
  root.walkAtRules((at) => { if (/keyframes|font-face|page/.test(at.name)) at.remove(); });
  root.walkRules((rule) => {
    const keep = rule.selectors.filter((s) => !hasClass(s));
    if (!keep.length) { rule.remove(); return; }
    rule.selectors = keep;
    rule.walkDecls((d) => { if (d.prop.startsWith('--tw-')) d.remove(); });
    if (!rule.nodes.length) rule.remove();
  });
  // Drop at-rules left empty (repeat: nested at-rules can empty their parents).
  for (let i = 0; i < 3; i++) root.walkAtRules((at) => { if (at.nodes && !at.nodes.length) at.remove(); });
  return root.toString().replace(/\s*\n\s*/g, '');
}

function main() {
  const indexHtml = join(DIST, 'index.html');
  if (!existsSync(indexHtml)) { console.warn('inline-critical-css: dist/index.html missing, skipped'); return; }
  const m = readFileSync(indexHtml, 'utf8').match(/<link rel="stylesheet" crossorigin href="(\/assets\/index-[\w-]+\.css)">/);
  if (!m) { console.warn('inline-critical-css: entry stylesheet link not found in dist/index.html, skipped'); return; }
  const href = m[1];
  const crit = criticalCss(readFileSync(join(DIST, href), 'utf8'));
  if (!crit.includes('#prerender-veil') || !crit.includes(':root') || crit.length > MAX_BYTES || /<\/style/i.test(crit)) {
    console.warn(`inline-critical-css: unexpected critical CSS (${crit.length} bytes), skipped`);
    return;
  }
  const blocking = `<link rel="stylesheet" crossorigin href="${href}">`;
  const replacement =
    `<style data-critical-css>${crit}</style>\n` +
    `  <link rel="preload" href="${href}" as="style" crossorigin>\n` +
    `  <link rel="stylesheet" crossorigin href="${href}" media="print" onload="this.media='all'" data-async-css>\n` +
    `  <noscript><link rel="stylesheet" crossorigin href="${href}"></noscript>`;

  let pages = 0, changed = 0, skipped = 0;
  (function walk(dir) {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) { if (name !== 'assets' && name !== 'data' && name !== '.vite') walk(full); continue; }
      if (!name.endsWith('.html')) continue;
      pages++;
      const html = readFileSync(full, 'utf8');
      if (html.includes('data-critical-css') || !html.includes(blocking)) { skipped++; continue; }
      writeFileSync(full, html.replace(blocking, () => replacement));
      changed++;
    }
  })(DIST);
  console.log(`inline-critical-css: ${crit.length} bytes inlined on ${changed}/${pages} HTML files (${skipped} without the entry stylesheet or already done)`);
}

main();
