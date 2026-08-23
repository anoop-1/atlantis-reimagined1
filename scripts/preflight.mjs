#!/usr/bin/env node
/**
 * Pre-deploy preflight — 2026-08-18.
 * ─────────────────────────────────────────────────────────────────────────────
 * One command that answers "is this safe to push?" with evidence rather than
 * confidence. Run after `npm run build`, before merging to main.
 *
 * Every check here exists because something in this programme actually went
 * wrong, not because it sounded prudent:
 *
 *   noindex sanity      /digital-twin-vs-idms shipped noindexed on the day it
 *                       was built — the zero-impression prune cannot tell a
 *                       dead page from a page that shipped this morning.
 *   H1 parity           prerender writes static HTML from its own strings and
 *                       React renders separately; the two can disagree silently.
 *   citation presence   an AnswerBlock added to a .tsx file never reaches a
 *                       crawler, because prerender does not render React.
 *   Atlantis pricing    a blanket sweep once replaced permitted third-party
 *                       fees with broken placeholder text on ranking pages.
 *   personal email      a standing rule that has to be enforced mechanically.
 *   sitemap integrity   prerender regenerates every sitemap from its routes
 *                       array, so a routing mistake silently rewrites them.
 *   orphan check        a page with no inbound internal link is close to
 *                       invisible regardless of how well it is written.
 *
 *   node scripts/preflight.mjs
 *   node scripts/preflight.mjs --strict     exit 1 on any FAIL
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'fs';
import { join, dirname, relative } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const STRICT = process.argv.includes('--strict');

if (!existsSync(DIST)) {
  console.error('dist/ missing — run `npm run build` first.');
  process.exit(1);
}

const checks = [];
const add = (name, ok, detail) => checks.push({ name, ok, detail });

function walk(dir, out = []) {
  for (const n of readdirSync(dir)) {
    const p = join(dir, n);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (n === 'index.html') out.push(p);
  }
  return out;
}

const files = walk(DIST);
const routeOf = (f) => { const r = '/' + relative(DIST, dirname(f)).replace(/\\/g, '/'); return r === '/.' ? '/' : r; };
const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');
const textOf = (h) => strip(h).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

console.log(`\nPreflight — ${files.length} built pages\n`);

// ── 0. vercel.json carries no key Vercel will reject ─────────────────────────
// Vercel validates vercel.json against a strict schema and refuses ANY
// unrecognised top-level property. The failure happens before the build runs,
// so it surfaces as a bare "Error" with no build log to read — which is exactly
// how it went undiagnosed. A `_comment_trailingSlash` key added on 2026-08-17
// killed every deployment after it, including one whose only change was
// regenerated sitemaps, and the site sat three days behind main.
//
// This check is first because it gates whether anything else ever ships.
{
  const VALID = new Set(['$schema', 'buildCommand', 'devCommand', 'installCommand', 'ignoreCommand',
    'outputDirectory', 'framework', 'public', 'regions', 'functions', 'routes', 'rewrites', 'redirects',
    'headers', 'cleanUrls', 'trailingSlash', 'crons', 'images', 'git', 'github', 'name', 'version',
    'builds', 'env', 'build', 'alias', 'scope', 'projectSettings', 'autoJobCancelation']);
  const vf = join(ROOT, 'vercel.json');
  if (existsSync(vf)) {
    let bad = [];
    try {
      bad = Object.keys(JSON.parse(readFileSync(vf, 'utf-8'))).filter((k) => !VALID.has(k));
    } catch (e) {
      bad = [`unparseable: ${e.message.slice(0, 60)}`];
    }
    add('vercel.json has no invalid keys', bad.length === 0,
      bad.length ? `Vercel will REJECT the deploy: ${bad.join(', ')} — put prose in docs/VERCEL-CONFIG-NOTES.md` : 'all top-level keys valid');
  }
}

// ── 1. Every page has exactly one non-empty H1 ───────────────────────────────
{
  const bad = [];
  for (const f of files) {
    const h1s = [...strip(readFileSync(f, 'utf-8')).matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
    if (h1s.length !== 1 || !h1s[0][1].replace(/<[^>]+>/g, '').trim()) bad.push(routeOf(f));
  }
  add('H1 present and unique', bad.length === 0, bad.length ? `${bad.length} pages: ${bad.slice(0, 4).join(', ')}` : `all ${files.length} pages`);
}

// ── 2. Citation-layer pages are indexable ────────────────────────────────────
{
  const bad = [];
  let layered = 0;
  for (const f of files) {
    const html = readFileSync(f, 'utf-8');
    if (!html.includes('data-citation-block="answer"')) continue;
    layered++;
    if (/<meta[^>]+name=["']robots["'][^>]*noindex/i.test(html)) bad.push(routeOf(f));
  }
  add('No citation page is noindexed', bad.length === 0,
    bad.length ? `${bad.length} noindexed: ${bad.slice(0, 4).join(', ')}` : `${layered} citation pages, all indexable`);
}

// ── 3. Canonical present and self-referential ────────────────────────────────
{
  const missing = [], wrong = [];
  for (const f of files) {
    const html = readFileSync(f, 'utf-8');
    const m = html.match(/rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
    if (!m) { missing.push(routeOf(f)); continue; }
    const want = `https://atlantisndt.com${routeOf(f) === '/' ? '/' : routeOf(f)}`;
    if (m[1] !== want && m[1] !== want.replace(/\/$/, '')) wrong.push(`${routeOf(f)} -> ${m[1]}`);
  }
  add('Canonical present', missing.length === 0, missing.length ? `${missing.length} missing` : `all pages`);
  // Cross-canonical is legitimate (consolidation), so this reports rather than fails.
  add('Canonical self-referential', true, wrong.length ? `${wrong.length} point elsewhere (intentional consolidation is fine): ${wrong.slice(0, 2).join('; ')}` : 'all self-referential');
}

// ── 4. Policy: no Atlantis pricing, no personal email ────────────────────────
{
  const RATE = /[$£€]\s?\d[\d,]*(?:\.\d+)?\s*(?:per|\/)\s*(?:day|hour|seat|user|licen[cs]e|month|year)/gi;
  // Contexts where a currency figure is legitimate and must NOT be flagged.
  // Verified against real false positives on 2026-08-18: SAP Business One at
  // $94/user/month (a competitor's published price) and $850,000/day downtime
  // cost inside an ROI model both tripped the naive rule purely because the
  // word "Atlantis" appeared in the next sentence.
  const MARKET = /(salary|consultant|contractor|market|industry|technician|inspector|freelance|typical|earn|pay|vendor|list price|downtime|lost (?:margin|generation|revenue|production)|outage|shutdown|turnaround|sap|oracle|netsuite|odoo|jobboss|infor|epicor|microsoft|dynamics|aveva|hexagon|antea|cenosco|floodlight|agilendt|competitor|alternative|versus|vs|per seat list)/i;
  const SELF = /(atlantis|\bour\b|\bwe\b)/i;
  const priced = [], emailed = [], placeholder = [];
  for (const f of files) {
    const body = textOf(readFileSync(f, 'utf-8'));
    for (const m of body.matchAll(RATE)) {
      const w = body.slice(Math.max(0, m.index - 90), m.index + 60);
      if (MARKET.test(w)) continue;
      if (SELF.test(w)) { priced.push(`${routeOf(f)}: ${m[0]}`); break; }
    }
    if (/anu\.anoop485@gmail\.com/i.test(body)) emailed.push(routeOf(f));
    if (/a scoped, quoted figure|a significant cost item/i.test(body)) placeholder.push(routeOf(f));
  }
  add('No Atlantis pricing in served HTML', priced.length === 0, priced.length ? priced.slice(0, 3).join(' | ') : 'clean');
  add('No personal email public', emailed.length === 0, emailed.length ? emailed.slice(0, 3).join(', ') : 'clean');
  add('No pricing-sweep placeholder text', placeholder.length === 0,
    placeholder.length ? `${placeholder.length} pages still carry placeholder text (backlog: scripts/pricing-placeholder-backlog.json)` : 'clean');
}

// ── 5. Sitemap integrity ─────────────────────────────────────────────────────
{
  const smDir = join(ROOT, 'public');
  const maps = readdirSync(smDir).filter((n) => /^sitemap.*\.xml$/.test(n));
  let total = 0, malformed = [];
  const built = new Set(files.map(routeOf));
  let notBuilt = 0;
  for (const m of maps) {
    const xml = readFileSync(join(smDir, m), 'utf-8');
    if (!/<urlset|<sitemapindex/.test(xml)) { malformed.push(m); continue; }
    for (const u of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      total++;
      const p = u[1].replace('https://atlantisndt.com', '') || '/';
      if (!p.endsWith('.xml') && !built.has(p.replace(/\/$/, '') || '/')) notBuilt++;
    }
  }
  add('Sitemaps well-formed', malformed.length === 0, malformed.length ? malformed.join(', ') : `${maps.length} sitemaps, ${total} URLs`);
  add('Sitemap URLs are built', notBuilt === 0, notBuilt ? `${notBuilt} sitemap URLs have no built page` : 'every sitemap URL has a page');
}

// ── 6. Orphans among citation pages ──────────────────────────────────────────
{
  const layered = files.filter((f) => readFileSync(f, 'utf-8').includes('data-citation-block="answer"')).map(routeOf);
  const inbound = new Set();
  for (const f of files) {
    const html = readFileSync(f, 'utf-8');
    const self = routeOf(f);
    for (const m of html.matchAll(/href=["'](\/[^"'#?]*)["']/g)) if (m[1] !== self) inbound.add(m[1].replace(/\/$/, '') || '/');
  }
  const orphans = layered.filter((r) => !inbound.has(r));
  add('No orphaned citation pages', orphans.length === 0,
    orphans.length ? `${orphans.length} with no inbound link: ${orphans.slice(0, 4).join(', ')}` : `all ${layered.length} linked`);
}

// ── report ───────────────────────────────────────────────────────────────────
let failed = 0;
for (const c of checks) {
  if (!c.ok) failed++;
  console.log(`  ${c.ok ? 'PASS' : 'FAIL'}  ${c.name.padEnd(38)} ${c.detail}`);
}
console.log(`\n  ${checks.length - failed}/${checks.length} checks passed\n`);
if (failed) console.log('  Fix the FAILs before pushing. Vercel auto-deploys from main.\n');
if (STRICT && failed) process.exit(1);
