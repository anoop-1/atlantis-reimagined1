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

// ── 0b. No page canonicalises to the homepage ────────────────────────────────
// This bug has now happened twice from different generators. A route pushed
// without a canonical inherits the template default, which points at the
// homepage, and Google reads that as "duplicate of the homepage" and drops the
// page. The first occurrence deindexed /3d-scanning-singapore while it earned
// 701 impressions/90d; the second hit 861 pages — every compliance, consulting,
// training and report-validation page a generator had added.
//
// The prerender safety nets fix it. This check makes sure it stays fixed,
// because the failure is completely silent: the pages build, they look correct,
// and they simply never rank.
{
  const bad = [];
  for (const f of files) {
    const html = readFileSync(f, 'utf-8');
    const c = (html.match(/rel=["']canonical["'] href=["']([^"']+)["']/) || [])[1];
    const route = routeOf(f);
    if (route === '/') continue;
    if (c === 'https://atlantisndt.com/' || c === 'https://atlantisndt.com') bad.push(route);
  }
  add('No page canonicalises to the homepage', bad.length === 0,
    bad.length ? `${bad.length} pages point their canonical at the homepage and will be dropped: ${bad.slice(0, 3).join(', ')}` : `all ${files.length} pages self-canonical or deliberately consolidated`);
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

// ── 4b. NAS 410 (owner, 2026-10-28, CLAUDE.md §65) ───────────────────────────
// The site names no NAS 410 and offers no NAS 410-based training or consulting;
// ASNT Level III consulting and ASNT SNT-TC-1A-based training replace it. The
// retired NAS 410 URLs 301 (vercel.json), so nothing may link to them either.
// Case-sensitive on purpose: lower-case "nas-410" slugs survive only inside
// redirect and route-matching code, never as reader-visible text.
// 2026-11-17 (owner, CLAUDE.md §79): NAS 410 *clarification* is back on two explainer pages
// (src/data/nas-410-clarification-2026-11.mjs). NAS 410 may appear on those pages, in the link block
// on the aerospace pages that point to them, and anywhere as the text of a link to them. No other
// page names it, and the claims gate still fails on any NAS 410 offer.
{
  const { NAS410_PAGES, NAS410_LINK_PAGES, NAS410_DOC_PAGES, isNas410Allowed, stripNas410Links } = await import('../src/data/nas-410-clarification-2026-11.mjs');
  const NAS = /\bNAS[ -]?410\b|\bNas ?410\b/;
  const slugAlt = NAS410_PAGES.map((p) => p.replace('/blog/', '')).join('|');
  // Links to the clarification pages, their content JSON and preload hints are not "retired" links.
  const RESTORED = new RegExp(`href="(?:https://atlantisndt\\.com)?/(?:blog|data/blogs)/(?:${slugAlt})(?:\\.json)?/?"`
    // 2026-11-18 (§80): the NAS 410 audit documentation consulting pages are live URLs, not retired ones.
    + `|href="(?:https://atlantisndt\\.com)?/consulting/nas-410-audit-(?:compliance-documentation|documentation-[a-z-]+)/?"`, 'gi');
  const LINK = /href="(?:https:\/\/atlantisndt\.com)?\/[^"]*nas-410[^"]*"/i;
  const named = [], linked = [], restoredBuilt = NAS410_PAGES.filter((p) => existsSync(join(DIST, p, 'index.html')));
  // Strings allowed to carry "NAS 410" outside the two pages, wherever they are bundled or quoted:
  // the clarification posts' own title/meta/snippet (blog index, related-reading lists, JSON-LD) and
  // the aerospace link block (src/data/next-steps-2026-10.json, NAS410_LINK_PAGES).
  const allowedStrings = (() => {
    const out = new Set();
    const blogs = JSON.parse(readFileSync(join(ROOT, 'src/data/blogs.json'), 'utf-8'));
    for (const b of blogs) if (NAS410_PAGES.includes('/blog/' + b.slug)) for (const k of ['title', 'metaDescription', 'snippet']) if (b[k]) out.add(b[k]);
    const ns = JSON.parse(readFileSync(join(ROOT, 'src/data/next-steps-2026-10.json'), 'utf-8')).blocks || {};
    for (const p of NAS410_LINK_PAGES) { const blk = ns[p]; if (!blk) continue; out.add(blk.h); out.add(blk.p); for (const l of blk.links || []) out.add(l[1]); }
    return [...out].filter((x) => x && NAS.test(x)).sort((x, y) => y.length - x.length);
  })();
  const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  const stripAllowed = (txt) => allowedStrings.reduce((acc, t) => [t, JSON.stringify(t).slice(1, -1), esc(t), esc(t).replace(/&#39;/g, '&#x27;'), t.replace(/'/g, '&#x27;')]
    .reduce((a2, v) => a2.split(v).join(''), acc), txt);
  // The blog index truncates descriptions; a quoted prefix of an allowed string is allowed too.
  const reEsc = (t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const stripPrefixes = (txt) => allowedStrings.reduce((acc, t) => (t.length < 60 ? acc
    : acc.replace(new RegExp(reEsc(t.slice(0, 60)) + '[^"]*', 'g'), (m) => (t.startsWith(m) ? '' : m))), txt);
  for (const f of files) {
    const raw = readFileSync(f, 'utf-8');
    const route = routeOf(f);
    if (!isNas410Allowed(route) && NAS.test(stripAllowed(stripNas410Links(raw)))) named.push(route);
    if (LINK.test(raw.replace(RESTORED, ''))) linked.push(route);
  }
  const assetDir = join(DIST, 'assets');
  const keyOf = (p) => p.replace(/^\//, '').replace(/\//g, '__');
  const chunks = existsSync(assetDir)
    ? readdirSync(assetDir).filter((n) => n.endsWith('.js') && ![...NAS410_PAGES, ...NAS410_DOC_PAGES].some((p) => n.startsWith(keyOf(p) + '-'))
      && NAS.test(stripPrefixes(stripAllowed(readFileSync(join(assetDir, n), 'utf-8')))))
    : [];
  add('No NAS 410 named outside the clarification pages', named.length === 0 && chunks.length === 0,
    named.length || chunks.length ? `${named.length} pages, ${chunks.length} JS chunks: ${[...named, ...chunks].slice(0, 4).join(', ')}` : `clean (${restoredBuilt.length} clarification pages built)`);
  add('No links to retired NAS 410 URLs', linked.length === 0, linked.length ? `${linked.length} pages: ${linked.slice(0, 4).join(', ')}` : 'clean');
  // 2026-10-29 (owner): aerospace and aviation get the same ASNT Level III consulting,
  // SNT-TC-1A-based training and inspection as every other sector. The first NAS 410
  // pass swapped the standard for filler ("the customer-specified aerospace standard")
  // that read as if SNT-TC-1A did not apply to aerospace; NANDTB only exists in the
  // NAS 410 / EN 4179 scheme. Neither may return.
  // 2026-11-17: NANDTBs are part of how NAS 410 works, so the clarification pages may name them.
  const HEDGE = /customer-specified aerospace standard|\bNANDTBs?\b/i;
  const hedged = files.filter((f) => {
    const raw = readFileSync(f, 'utf-8');
    return /customer-specified aerospace standard/i.test(raw) || (!NAS410_PAGES.includes(routeOf(f)) && HEDGE.test(raw));
  }).map(routeOf);
  add('Aerospace offer not hedged', hedged.length === 0, hedged.length ? `${hedged.length} pages: ${hedged.slice(0, 4).join(', ')}` : 'clean');
  // 2026-10-31 (owner): /privacy-policy exists by URL only. No other page links to it
  // (navigation, footer or any body block), and it carries no related-reading block.
  const PP_FILE = join(DIST, 'privacy-policy', 'index.html');
  const PP_LINK = /href="(?:https:\/\/atlantisndt\.com)?\/privacy-policy\/?["#?]/;
  const ppLinkers = files.filter((f) => f !== PP_FILE && PP_LINK.test(readFileSync(f, 'utf-8'))).map(routeOf);
  const ppExtras = existsSync(PP_FILE) && /class="related-pages"/.test(readFileSync(PP_FILE, 'utf-8'));
  add('Privacy policy is URL-only', existsSync(PP_FILE) && ppLinkers.length === 0 && !ppExtras,
    !existsSync(PP_FILE) ? 'not built' : ppLinkers.length ? `${ppLinkers.length} pages link to it: ${ppLinkers.slice(0, 4).join(', ')}` : ppExtras ? 'related-reading block on the page' : 'clean');
  // 2026-11-18 (owner): info@atlantisndt.com is the only valid Atlantis address. No page or JS chunk may show
  // an atlantisinspection.com address, or any other atlantisndt.com mailbox (sales@, enroll@, a personal one).
  const BAD_EMAIL = /[a-z0-9._%+-]+@(?:[a-z0-9-]+\.)*atlantisinspection\.com|\b(?!info@)[a-z0-9._%+-]+@atlantisndt\.com/gi;
  const emailAssets = join(DIST, 'assets');
  const emailFiles = [...files, ...(existsSync(emailAssets) ? readdirSync(emailAssets).filter((n) => n.endsWith('.js')).map((n) => join(emailAssets, n)) : []),
    ...['llms.txt', 'llms-full.txt'].map((n) => join(DIST, n)).filter((p) => existsSync(p))];
  const badEmails = new Map();
  for (const f of emailFiles) for (const m of readFileSync(f, 'utf-8').matchAll(BAD_EMAIL)) badEmails.set(m[0].toLowerCase(), f.replace(DIST, ''));
  add('Only info@atlantisndt.com as Atlantis email', badEmails.size === 0,
    badEmails.size ? [...badEmails].slice(0, 4).map(([e, f]) => `${e} (${f})`).join(', ') : 'clean');
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
  let redirected = new Set();
  try {
    const vj = JSON.parse(readFileSync(join(ROOT, 'vercel.json'), 'utf-8'));
    redirected = new Set((vj.redirects || []).map((r) => r.source).filter((x) => typeof x === 'string' && !/[:*(]/.test(x)).map((x) => x.replace(/\/$/, '') || '/'));
  } catch {}
  const orphans = layered.filter((r) => !inbound.has(r) && !redirected.has(r));
  add('No orphaned citation pages', orphans.length === 0,
    orphans.length ? `${orphans.length} with no inbound link: ${orphans.slice(0, 4).join(', ')}` : `all ${layered.length} linked`);
}

// ── 13. Depth routes present in BOTH render layers ──────────────────────────
// prerender writes static HTML for every DEPTH_PAGE_ROUTES entry, so a crawler
// always sees the page. The React app only serves it if RouteTable.tsx carries a
// matching <Route>, and that list was kept in step by hand. When it drifts, a
// crawler gets a real page and a human clicking through gets a 404 — a failure
// only a human would ever notice. scripts/sync-depth-routes.mjs fixes it.
{
  const txt = join(ROOT, 'scripts', 'depth-pages-routes.txt');
  const appPath = join(ROOT, 'src', 'RouteTable.tsx');
  if (existsSync(txt) && existsSync(appPath)) {
    const wanted = readFileSync(txt, 'utf-8').split(/\r?\n/)
      .map((l) => (l.match(/path="([^"]+)"/) || [])[1]).filter(Boolean);
    const appSrc = readFileSync(appPath, 'utf-8');
    const present = new Set([...appSrc.matchAll(/<Route\s+path="([^"]+)"[^>]*DepthPage[^>]*\/>/g)].map((m) => m[1]));
    const missing = wanted.filter((p) => !present.has(p));
    add('Depth routes in RouteTable.tsx match prerender', missing.length === 0,
      missing.length
        ? `${missing.length} page(s) render as HTML but 404 in the app: ${missing.slice(0, 3).join(', ')} — run scripts/sync-depth-routes.mjs`
        : `all ${wanted.length} depth routes present in both layers`);
  }
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
