#!/usr/bin/env node
/**
 * scripts/prerender-v2.mjs — drop-in replacement for prerender.mjs
 * ─────────────────────────────────────────────────────────────────
 * Walks indexing-url-list-v2.json (374 URLs: existing ERP + /digital-twins tree)
 * and emits a static HTML file for every route.
 *
 * Improvements over prerender.mjs:
 *   1. Uses indexing-url-list-v2.json
 *   2. Fails the build if ANY /digital-twins/* route renders the legacy title
 *      "Excellence in NDT Consulting & Training" — regression guard after
 *      the H1 rewrite. The homepage is still checked with its own title.
 *   3. Writes a per-route prerender log to dist/.prerender-log.jsonl so
 *      failures can be diagnosed after the fact.
 *
 * Run after `npm run build`:
 *   node scripts/prerender-v2.mjs
 *
 * Env:
 *   PRERENDER_MODE   'puppeteer' (default) or 'ssr'
 *   PRERENDER_PORT   preview port (default 4173)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const URL_LIST = path.join(__dirname, 'indexing-url-list-v2.json');
const LOG_PATH = path.join(DIST, '.prerender-log.jsonl');
const MODE = process.env.PRERENDER_MODE || 'puppeteer';
const PORT = process.env.PRERENDER_PORT || 4173;

// Homepage fallback title. If this text appears as the <title> for ANY
// non-homepage route, it means the SPA fallback served the index shell
// instead of the real route — the build must fail.
const HOMEPAGE_TITLE_FALLBACK =
  'Atlantis NDT | NDT Training, Consulting Services & Digital Twins | ASNT Level III';

// Legacy H1/title that used to leak into /digital-twins. If it still appears
// after the pivot, the rewrite never took effect — fail the build.
const LEGACY_DT_TITLE_FRAGMENT = 'Excellence in NDT Consulting & Training';

if (!fs.existsSync(DIST)) {
  console.error(`Missing dist/. Run 'npm run build' first.`);
  process.exit(1);
}
if (!fs.existsSync(URL_LIST)) {
  console.error(`Missing ${URL_LIST}. Copy from outputs/indexing-url-list-v2.json.`);
  process.exit(1);
}

const list = JSON.parse(fs.readFileSync(URL_LIST, 'utf8'));

// Reset log
fs.writeFileSync(LOG_PATH, '');

function logRoute (entry) {
  fs.appendFileSync(LOG_PATH, JSON.stringify(entry) + '\n');
}

console.log(`Prerendering ${list.length} URLs (mode=${MODE})`);

async function prerenderPuppeteer () {
  const puppeteer = (await import('puppeteer')).default;
  const preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe'],
  });
  await new Promise((res) => {
    const onData = (b) => { if (String(b).includes('Local')) { preview.stdout.off('data', onData); res(); } };
    preview.stdout.on('data', onData);
    setTimeout(res, 3000);
  });

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  let ok = 0, fail = 0;
  const failures = [];

  for (const item of list) {
    const url = item.url.replace('https://atlantisndt.com', `http://localhost:${PORT}`);
    const route = new URL(url).pathname;
    const start = Date.now();
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.waitForFunction(
        (fb) => document.title && document.title !== fb,
        { timeout: 10000 },
        HOMEPAGE_TITLE_FALLBACK,
      ).catch(() => {});

      const title = await page.title();
      const html = await page.content();
      const duration = Date.now() - start;

      // Guard 1: homepage SPA fallback on a non-home route
      if (route !== '/' && title === HOMEPAGE_TITLE_FALLBACK) {
        const reason = 'SPA fallback — route not registered';
        console.error(`  [${reason}] ${route}`);
        logRoute({ route, ok: false, reason, title, tier: item.tier, duration });
        failures.push({ route, reason });
        fail++;
        continue;
      }

      // Guard 2: legacy DT title leaking onto digital-twins tree
      if (route.startsWith('/digital-twins') || /\/digital-twin-/.test(route)) {
        if (title.includes(LEGACY_DT_TITLE_FRAGMENT)) {
          const reason = 'Legacy NDT Consulting title on /digital-twins route (H1 rewrite regression)';
          console.error(`  [${reason}] ${route}`);
          logRoute({ route, ok: false, reason, title, tier: item.tier, duration });
          failures.push({ route, reason });
          fail++;
          continue;
        }
      }

      const outPath = path.join(DIST, route === '/' ? 'index.html' : `${route}.html`);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      if (!outPath.endsWith('.html')) {
        fs.writeFileSync(path.join(outPath, 'index.html'), html);
      } else {
        fs.writeFileSync(outPath, html);
      }
      ok++;
      logRoute({ route, ok: true, title, tier: item.tier, duration });
      if (ok % 25 === 0) console.log(`  rendered ${ok}/${list.length}…`);
    } catch (e) {
      console.error(`  [error] ${route} → ${e.message}`);
      logRoute({ route, ok: false, reason: `exception: ${e.message}`, tier: item.tier });
      failures.push({ route, reason: e.message });
      fail++;
    }
  }

  await browser.close();
  preview.kill();
  console.log(`\nPrerender done: ${ok} ok, ${fail} failed`);
  console.log(`Per-route log: ${LOG_PATH}`);
  if (failures.length) {
    console.error('\nFailure summary:');
    for (const f of failures.slice(0, 20)) {
      console.error(`  ${f.route}: ${f.reason}`);
    }
    process.exit(1);
  }
}

async function prerenderSsr () {
  const entry = path.join(DIST, 'server', 'entry-server.js');
  if (!fs.existsSync(entry)) {
    console.error('SSR entry not found. Either build with SSR or set PRERENDER_MODE=puppeteer');
    process.exit(1);
  }
  const { render } = await import(entry);
  const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
  let ok = 0, fail = 0;
  for (const item of list) {
    const route = new URL(item.url).pathname;
    try {
      const { html, head } = await render(route);
      const out = template
        .replace('<!--app-html-->', html)
        .replace('<!--app-head-->', head);
      const outPath = path.join(DIST, route === '/' ? 'index.html' : `${route}/index.html`);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      fs.writeFileSync(outPath, out);
      logRoute({ route, ok: true, tier: item.tier });
      ok++;
    } catch (e) {
      console.error(`  [error] ${route} → ${e.message}`);
      logRoute({ route, ok: false, reason: e.message, tier: item.tier });
      fail++;
    }
  }
  console.log(`\nPrerender done: ${ok} ok, ${fail} failed`);
  console.log(`Per-route log: ${LOG_PATH}`);
  if (fail > 0) process.exit(1);
}

if (MODE === 'puppeteer') await prerenderPuppeteer();
else await prerenderSsr();
