// React first paint for the homepage — 2026-10-18.
//
// Owner (2026-10-18): "For homepage, I still see a 5 second long static page which is not
// looking good or on par with actual page, why cant we directly show the actual page
// without any delay".
//
// Why it happened: every page ships its crawler copy inside #root. Since the 2026-10-12
// release (src/lib/prerender-handover.ts) that copy stays painted until React has built the
// real page out of sight, then the two swap. The crawler copy of / is a plain document (its
// own nav, left-aligned H1, a link list, an unstyled form), so for the 1.5–5 s the app takes
// to load (measured 2.4 s desktop, 4.6 s on throttled 4G; longer from the Gulf) visitors saw
// a different-looking page that then jumped to the real one.
//
// What this step does, after every other HTML writer (it runs after inline-critical-css):
//  1. Serves dist/ on 127.0.0.1, opens each target page in headless Chrome at desktop size,
//     lets the real React app render and hand over, and takes #root's rendered markup.
//  2. Writes that markup into the page's #root (marked data-react-first-paint), dropping
//     things that only make sense live (cursor follower, route spinner).
//  3. Replaces the page's critical CSS with the rules that markup actually uses (class-less
//     base rules + every rule whose selector matches the snapshot, in stylesheet order, plus
//     the keyframes and @font-face they need), so the first paint IS the real page, styled.
// The handover in prerender-handover.ts is unchanged: the snapshot paints at once and stays
// while React builds the identical page out of sight, then they swap with nothing moving.
//
// Content: the snapshot is what React already shows every visitor (and what Google indexes
// after rendering). Before writing, the step checks that every link target and heading of the
// crawler copy is still present in the snapshot and refuses to write the page otherwise,
// so non-rendering crawlers lose nothing.
// Safe by default: if Chrome is missing or anything looks wrong, the page is left exactly as
// built and the step exits 0 with a warning.
import { readFileSync, writeFileSync, existsSync, statSync } from 'fs';
import { join, extname, normalize } from 'path';
import { createServer } from 'http';
import { createRequire } from 'module';
import postcss from 'postcss';

const require = createRequire(import.meta.url);
const DIST = 'dist';
const TARGETS = ['/']; // pages whose first paint is the rendered React page
const MAX_CSS_BYTES = 90000;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36 AtlantisFirstPaint';

const CHROME_CANDIDATES = [
  process.env.CHROME_PATH,
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/opt/pw-browsers/chromium',
].filter(Boolean);

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css',
  '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.avif': 'image/avif', '.gif': 'image/gif', '.ico': 'image/x-icon', '.woff2': 'font/woff2',
  '.woff': 'font/woff', '.ttf': 'font/ttf', '.txt': 'text/plain', '.xml': 'application/xml', '.mp4': 'video/mp4', '.webm': 'video/webm',
};

function serve() {
  const server = createServer((req, res) => {
    const url = new URL(req.url, 'http://x');
    let p = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, '');
    let file = join(DIST, p);
    if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html');
    if (!existsSync(file)) file = join(DIST, p.replace(/\/$/, ''), 'index.html');
    if (!existsSync(file)) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
    res.end(readFileSync(file));
  });
  return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve(server)));
}

// Index of the </div> that closes the <div id="root"> starting at `start`.
function rootSpan(html) {
  const start = html.indexOf('<div id="root">');
  if (start < 0) return null;
  const re = /<div\b|<\/div>/g;
  re.lastIndex = start;
  let depth = 0, m;
  while ((m = re.exec(html))) {
    depth += m[0] === '</div>' ? -1 : 1;
    if (depth === 0) return { start, innerStart: start + '<div id="root">'.length, innerEnd: m.index, end: m.index + 6 };
  }
  return null;
}

const PSEUDO = /::?(?:hover|focus(?:-visible|-within)?|active|visited|checked|disabled|enabled|placeholder|before|after|selection|marker|first-letter|first-line|file-selector-button|-webkit-[\w-]+|-moz-[\w-]+|-ms-[\w-]+|focus-visible|invalid|valid|required|optional|read-only|empty|target|open|backdrop|placeholder-shown|autofill|indeterminate|default)(?:\([^)]*\))?/g;

function usedCss(css, $) {
  const root = postcss.parse(css);
  const hasClass = (sel) => /\.[A-Za-z_\\-]/.test(sel.replace(/\[[^\]]*\]/g, ''));
  const cache = new Map();
  const matches = (sel) => {
    if (!hasClass(sel)) return true; // base rules: kept as in the site-wide critical CSS
    let s = sel.replace(PSEUDO, '').replace(/\s+/g, ' ').trim();
    s = s.replace(/^\.dark\b.*/, '__never__'); // dark-mode variants never apply on first paint
    if (!s || /^[>+~]|[>+~]$/.test(s)) return true;
    if (cache.has(s)) return cache.get(s);
    let hit;
    try { hit = $(s).length > 0; } catch { hit = true; } // a selector cheerio cannot parse is kept
    cache.set(s, hit);
    return hit;
  };
  const keyframesUsed = new Set();
  root.walkRules((rule) => {
    if (rule.parent && rule.parent.type === 'atrule' && /keyframes/.test(rule.parent.name)) return;
    const keep = rule.selectors.filter(matches);
    if (!keep.length) { rule.remove(); return; }
    rule.selectors = keep;
    rule.walkDecls((d) => {
      if (/^animation(-name)?$/.test(d.prop)) for (const w of d.value.split(/[\s,]+/)) keyframesUsed.add(w);
    });
  });
  root.walkAtRules((at) => {
    if (/keyframes$/.test(at.name) && !keyframesUsed.has(at.params.trim())) at.remove();
  });
  for (let i = 0; i < 3; i++) root.walkAtRules((at) => { if (at.nodes && !at.nodes.length) at.remove(); });
  // The veil keeps every #root rule (same as inline-critical-css).
  root.walkRules((rule) => {
    const twins = rule.selectors.filter((s) => /#root\b/.test(s)).map((s) => s.replace(/#root\b/g, '#prerender-veil')).filter((s) => !rule.selectors.includes(s));
    if (twins.length) rule.selectors = [...rule.selectors, ...twins];
  });
  return root.toString().replace(/\s*\n\s*/g, '');
}

function clean($) {
  $('.cursor-dot, .cursor-outline, [data-page-loader], script, noscript, template').remove();
  // The floating enquiry card (GlobalEnquireCTA) appears on its own trigger in the live app;
  // painting it from the first frame and then hiding it at the handover would flicker.
  $('div.fixed').filter((_, e) => $(e).find('[data-cta-variant]').length > 0).remove();
  $('[data-ready]').removeAttr('data-ready');
  // Safety net: an element still mid-fade (inline opacity 0) would be invisible in the
  // static first paint; drop its inline opacity/transform so it shows in its final state.
  $('[style*="opacity: 0"]').each((_, e) => {
    const st = ($(e).attr('style') || '').split(';').map((d) => d.trim()).filter((d) => d && !/^(opacity|transform)\s*:/.test(d)).join('; ');
    if (st) $(e).attr('style', st); else $(e).removeAttr('style');
  });
  // Radix/React ids are regenerated by the live app; ids inside the snapshot are only
  // referenced by aria-* inside the same snapshot, so they stay consistent.
}

// Internal link targets only: external links can legitimately differ (the crawler copy
// links the YouTube watch page where the live page shows a click-to-play player).
function linkTargets($) {
  const s = new Set();
  $('a[href]').each((_, e) => { const h = ($(e).attr('href') || '').replace(/^https:\/\/atlantisndt\.com/, '').replace(/[?#].*$/, '').replace(/\/$/, '') || '/'; if (h.startsWith('/')) s.add(h); });
  return s;
}
const norm = (t) => (t || '').replace(/\s+/g, ' ').trim().toLowerCase();

async function main() {
  const chrome = CHROME_CANDIDATES.find((p) => existsSync(p));
  if (!chrome) { console.warn('react-first-paint: no Chrome found, skipped (pages keep their crawler copy as first paint)'); return; }
  let puppeteer, cheerio;
  try { puppeteer = require('puppeteer-core'); cheerio = require('cheerio'); } catch (e) { console.warn('react-first-paint: puppeteer-core or cheerio missing, skipped'); return; }
  const cssHref = (readFileSync(join(DIST, 'index.html'), 'utf8').match(/href="(\/assets\/index-[\w-]+\.css)"/) || [])[1];
  if (!cssHref) { console.warn('react-first-paint: entry stylesheet not found, skipped'); return; }
  const fullCss = readFileSync(join(DIST, cssHref), 'utf8');

  const server = await serve();
  const port = server.address().port;
  const browser = await puppeteer.launch({ executablePath: chrome, headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars'] });
  let done = 0;
  try {
    for (const path of TARGETS) {
      const file = path === '/' ? join(DIST, 'index.html') : join(DIST, path, 'index.html');
      const html = readFileSync(file, 'utf8');
      if (html.includes('data-react-first-paint')) { console.log(`react-first-paint: ${path} already done`); continue; }
      const span = rootSpan(html);
      if (!span || !html.includes('<style data-critical-css>')) { console.warn(`react-first-paint: ${path} has no #root or critical CSS, skipped`); continue; }

      const page = await browser.newPage();
      await page.setUserAgent(UA);
      await page.setViewport({ width: 1440, height: 900 });
      await page.setRequestInterception(true);
      page.on('request', (r) => (r.url().startsWith(`http://127.0.0.1:${port}/`) ? r.continue() : r.abort()));
      const errors = [];
      page.on('pageerror', (e) => errors.push(e.message));
      await page.goto(`http://127.0.0.1:${port}${path}`, { waitUntil: 'networkidle0', timeout: 60000 });
      await page.waitForFunction(() => !document.getElementById('prerender-veil') && document.getElementById('root')?.querySelector('h1'), { timeout: 30000 });
      // Scroll the whole page once so every scroll-triggered fade-in (framer-motion
      // whileInView) has played; otherwise sections below the fold are captured at opacity 0.
      await page.evaluate(async () => {
        const step = Math.max(400, Math.floor(window.innerHeight * 0.8));
        for (let y = 0; y < document.documentElement.scrollHeight; y += step) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
        window.scrollTo(0, 0);
      });
      await new Promise((r) => setTimeout(r, 1200)); // let the last entrance animations finish
      const snapshot = await page.evaluate(() => document.getElementById('root').innerHTML);
      await page.close();
      if (errors.length) { console.warn(`react-first-paint: ${path} page errors (${errors[0]}), skipped`); continue; }

      const $ = cheerio.load(`<html><head></head><body><div id="root">${snapshot}</div></body></html>`, { decodeEntities: false });
      clean($);
      // Structured data that a writer put inside #root travels with the page.
      const oldRootHtml = html.slice(span.innerStart, span.innerEnd);
      const ld = [...oldRootHtml.matchAll(/<script type="application\/ld\+json"[\s\S]*?<\/script>/g)].map((m) => m[0]).join('');
      const body = $('#root').html() + ld;

      // Parity with the crawler copy: every link target and every H1/H2 must survive.
      const $old = cheerio.load(`<div id="root">${oldRootHtml}</div>`, { decodeEntities: false });
      const newLinks = linkTargets($);
      const missingLinks = [...linkTargets($old)].filter((h) => !newLinks.has(h));
      const newText = norm($('#root').text());
      const missingHeads = $old('h1, h2').toArray().map((e) => norm($old(e).text())).filter((t) => t && !newText.includes(t));
      if ($('h1').length !== 1) { console.warn(`react-first-paint: ${path} snapshot has ${$('h1').length} H1s, skipped`); continue; }
      if (missingLinks.length || missingHeads.length) {
        console.warn(`react-first-paint: ${path} snapshot lacks crawler content, skipped — links: ${missingLinks.slice(0, 8).join(', ')} · headings: ${missingHeads.slice(0, 5).join(' | ')}`);
        continue;
      }

      const css = usedCss(fullCss, $);
      if (css.length > MAX_CSS_BYTES || /<\/style/i.test(css) || !css.includes('#prerender-veil')) { console.warn(`react-first-paint: ${path} used CSS unexpected (${css.length} bytes), skipped`); continue; }

      let out = html.slice(0, span.start) + `<div id="root" data-react-first-paint>${body}</div>` + html.slice(span.end);
      out = out.replace(/<style data-critical-css>[\s\S]*?<\/style>/, () => `<style data-critical-css data-react-first-paint>${css}</style>`);
      writeFileSync(file, out);
      done++;
      console.log(`react-first-paint: ${path} first paint is the rendered page (${Math.round(body.length / 1024)} KB markup, ${Math.round(css.length / 1024)} KB used CSS, ${newLinks.size} links, crawler links/headings all kept)`);
    }
  } finally {
    await browser.close();
    server.close();
  }
  if (!done) console.log('react-first-paint: no page changed');
}

main().catch((e) => { console.warn(`react-first-paint: ${e.message}, skipped`); process.exitCode = 0; });
