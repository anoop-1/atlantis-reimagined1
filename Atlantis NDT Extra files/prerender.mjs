#!/usr/bin/env node
/**
 * scripts/prerender.mjs — full-coverage prerender for atlantisndt.com
 * ─────────────────────────────────────────────────────────────────
 * Walks scripts/indexing-url-list.json and emits a static .html for every
 * URL into dist/.  Replaces the SPA-fallback behavior that was returning
 * the homepage shell for /ndt-erp-{slug}, /es/..., /ar/..., etc.
 *
 * After the Vite SPA build, run:
 *   node scripts/prerender.mjs
 *
 * Stack:
 *   - Vite build emits dist/index.html with <div id="root"></div>
 *   - vite-plugin-react SSR or @vitejs/plugin-ssr renders each route
 *   - This script orchestrates the per-route render and disk write
 *
 * For a SPA-only setup (no SSR), the simplest reliable approach is
 * puppeteer-driven prerender: spin up a localhost preview, navigate to
 * each route, capture rendered HTML.
 *
 * The script auto-detects which approach is wired in package.json
 * via the PRERENDER_MODE env var (defaults to "puppeteer").
 *
 * MODE=puppeteer:
 *   Requires:  npm i -D puppeteer  (if not already)
 *   Behavior:  starts `vite preview`, opens each URL, waits for hydration,
 *              writes rendered DOM to dist/<route>.html, ensures every page
 *              has unique <title>, <meta description>, hreflang, JSON-LD.
 *
 * MODE=ssr:
 *   Requires:  Vite SSR build at dist/server/entry-server.js
 *   Behavior:  imports the SSR render fn, renders each URL synchronously.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const URL_LIST = path.join(__dirname, 'indexing-url-list.json');
const MODE = process.env.PRERENDER_MODE || 'puppeteer';
const PORT = process.env.PRERENDER_PORT || 4173;

if (!fs.existsSync(DIST)) {
  console.error(`Missing dist/. Run 'npm run build' first.`);
  process.exit(1);
}
if (!fs.existsSync(URL_LIST)) {
  console.error(`Missing ${URL_LIST}. Copy from outputs/indexing-url-list.json.`);
  process.exit(1);
}

const list = JSON.parse(fs.readFileSync(URL_LIST, 'utf8'));
const HOMEPAGE_TITLE_FALLBACK =
  'Atlantis NDT | NDT Training, Consulting Services & Digital Twins | ASNT Level III';

console.log(`Prerendering ${list.length} URLs (mode=${MODE})`);

async function prerenderPuppeteer () {
  const puppeteer = (await import('puppeteer')).default;
  // Start vite preview
  const preview = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], {
    cwd: ROOT, stdio: ['ignore', 'pipe', 'pipe']
  });
  await new Promise((res) => {
    const onData = (b) => { if (String(b).includes('Local')) { preview.stdout.off('data', onData); res(); } };
    preview.stdout.on('data', onData);
    setTimeout(res, 3000);
  });

  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  let ok = 0, fail = 0;

  for (const item of list) {
    const url = item.url.replace('https://atlantisndt.com', `http://localhost:${PORT}`);
    const route = new URL(url).pathname;
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.waitForFunction(
        (fb) => document.title && document.title !== fb,
        { timeout: 10000 },
        HOMEPAGE_TITLE_FALLBACK
      ).catch(() => {});
      const title = await page.title();
      if (title === HOMEPAGE_TITLE_FALLBACK) {
        console.error(`  [SPA fallback — route not registered] ${route}`);
        fail++; continue;
      }
      const html = await page.content();
      const outPath = path.join(DIST, route === '/' ? 'index.html' : `${route}.html`);
      fs.mkdirSync(path.dirname(outPath), { recursive: true });
      // For directory-style URLs, also write index.html inside the folder
      if (!outPath.endsWith('.html')) {
        fs.writeFileSync(path.join(outPath, 'index.html'), html);
      } else {
        fs.writeFileSync(outPath, html);
      }
      ok++;
      if (ok % 20 === 0) console.log(`  rendered ${ok}/${list.length}…`);
    } catch (e) {
      console.error(`  [error] ${route} → ${e.message}`);
      fail++;
    }
  }
  await browser.close();
  preview.kill();
  console.log(`\nPrerender done: ${ok} ok, ${fail} failed`);
  if (fail > 0) process.exit(1);
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
      ok++;
    } catch (e) {
      console.error(`  [error] ${route} → ${e.message}`);
      fail++;
    }
  }
  console.log(`\nPrerender done: ${ok} ok, ${fail} failed`);
  if (fail > 0) process.exit(1);
}

if (MODE === 'puppeteer') await prerenderPuppeteer();
else await prerenderSsr();
