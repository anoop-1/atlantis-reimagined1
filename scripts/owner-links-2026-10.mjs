/**
 * Owner links — crawler-HTML side (2026-10-12 owner-links release).
 * Data, copy and insertion rules: src/data/owner-links-2026-10.mjs (also read by React:
 * BlogDetail, DepthPage, DigitalTwinLocationPage, OwnerLinkParagraph).
 *
 * applyOwnerLinksRoute runs last, just before writeRoute, so it:
 *   - re-asserts the softened title/H1 over older CTR-wave titles,
 *   - inserts the owner paragraph after the intro (blog: first body paragraph inside
 *     .blog-content; depth page: after the answer block; otherwise the first paragraph
 *     after the H1),
 *   - on blogs.json posts re-points links to the duplicate Level III page at the owner,
 *   - applies the one Digital Twin city template (title, H1, paragraph) to every page
 *     built from src/components/DigitalTwinLocationPage.tsx.
 */
import { readFileSync, readdirSync } from 'fs';
import {
  OWNERS, OWNER_PAGES, REPOINT, OWNER_LINK_MARKER, dtCityMeta, ownerParagraphHtml,
  insertAfterFirstParagraph, repointOwnerLinks, ownerLinksIn,
} from '../src/data/owner-links-2026-10.mjs';

const ROOT = new URL('../', import.meta.url);
const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const decode = (s) => String(s ?? '').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&mdash;/g, '—').replace(/&ndash;/g, '–').replace(/\s+/g, ' ').trim();

/** Every page rendered by DigitalTwinLocationPage, keyed by path, with its React props. */
export const DT_TEMPLATE_PAGES = (() => {
  const out = new Map();
  const dir = new URL('src/pages/', ROOT);
  for (const f of readdirSync(dir)) {
    if (!/^digital-twin-.+\.tsx$/.test(f)) continue;
    const src = readFileSync(new URL(f, dir), 'utf-8');
    const m = src.match(/<DigitalTwinLocationPage\s+city=\{?"([^"]+)"\}?\s+country=\{?"([^"]*)"\}?\s+slug=\{?"([^"]+)"\}?/);
    if (m) out.set(`/${m[3]}`, { city: m[1], country: m[2] });
  }
  return out;
})();

export const ownerLinkStats = { pages: 0, paragraphs: 0, retitled: 0, h1: 0, dtPages: 0, repointedLinks: 0, repointedPages: 0, byTarget: {} };

function entryFor(path) {
  const e = OWNER_PAGES[path];
  if (e) return e;
  const dt = DT_TEMPLATE_PAGES.get(path);
  if (dt) return { source: 'dt', ...dtCityMeta(dt.city) };
  return null;
}

function insertParagraph(body, block) {
  let out = null;
  const bc = body.indexOf('class="blog-content"');
  if (bc >= 0) out = insertAfterFirstParagraph(body, block, bc);
  if (out == null) {
    const a = body.indexOf('data-citation-block="answer"');
    if (a >= 0) {
      const close = body.indexOf('</section>', a);
      if (close >= 0) out = body.slice(0, close + 10) + '\n    ' + block + body.slice(close + 10);
    }
  }
  if (out == null) {
    const h = body.indexOf('</h1>');
    if (h >= 0) out = insertAfterFirstParagraph(body, block, h);
  }
  if (out == null) {
    const m = body.lastIndexOf('</main>');
    out = m >= 0 ? body.slice(0, m) + block + body.slice(m) : body + block;
  }
  return out;
}

/** Replace a string value under `headline`/`name` that equals one of `olds` (schema follows the new H1). */
function retitleSchema(node, olds, next) {
  if (!node || typeof node !== 'object') return;
  if (Array.isArray(node)) { node.forEach((n) => retitleSchema(n, olds, next)); return; }
  for (const k of Object.keys(node)) {
    const v = node[k];
    if ((k === 'headline' || k === 'name') && typeof v === 'string' && olds.has(decode(v))) node[k] = next;
    else if (v && typeof v === 'object') retitleSchema(v, olds, next);
  }
}

export function applyOwnerLinksRoute(route) {
  const p = route?.path;
  if (!p || typeof route.bodyContent !== 'string') return route;
  let body = route.bodyContent;
  let touched = false;

  // blogs.json posts only (same scope as React's BlogDetail, which re-points the post body).
  if (p.startsWith('/blog/') && body.includes('class="blog-content"')) {
    const before = body;
    body = repointOwnerLinks(body);
    if (body !== before) {
      let n = 0;
      for (const from of Object.keys(REPOINT)) n += before.split(`href="${from}"`).length - 1;
      ownerLinkStats.repointedLinks += n;
      ownerLinkStats.repointedPages++;
      touched = true;
    }
  }

  const e = entryFor(p);
  if (!e) return touched ? { ...route, bodyContent: body } : route;

  if (e.p && !body.includes(OWNER_LINK_MARKER)) {
    body = insertParagraph(body, ownerParagraphHtml(e.p));
    ownerLinkStats.paragraphs++;
    for (const [href] of ownerLinksIn(e.p)) ownerLinkStats.byTarget[href] = (ownerLinkStats.byTarget[href] || 0) + 1;
  }

  const next = { ...route };
  const h1 = e.h1 || (e.source === 'blog' ? e.title : null);
  const oldH1Match = body.match(/<h1([^>]*)>([\s\S]*?)<\/h1>/);
  const olds = new Set([decode(route.title || ''), decode(route.title || '').replace(/\s*\|\s*Atlantis NDT\s*$/, '')]);
  if (oldH1Match) olds.add(decode(oldH1Match[2]));
  if (h1 && oldH1Match && decode(oldH1Match[2]) !== h1) {
    body = body.replace(oldH1Match[0], `<h1${oldH1Match[1]}>${esc(h1)}</h1>`);
    ownerLinkStats.h1++;
  }
  if (e.title) {
    next.title = e.title;
    next.ogTitle = e.title;
    ownerLinkStats.retitled++;
  }
  if (e.description) {
    next.description = e.description;
    next.ogDesc = e.description;
  }
  if (h1 && next.structuredData) {
    olds.delete('');
    retitleSchema(next.structuredData, olds, h1);
  }
  next.bodyContent = body;
  ownerLinkStats.pages++;
  if (e.source === 'dt') ownerLinkStats.dtPages++;
  return next;
}

/**
 * Guards: every owner is a built page; every paragraph links only to owners, never to
 * itself, with one or two links; no prices, claim words or stray numerals; a retitled
 * blogs.json post carries the same title in blogs.json (React reads that file).
 */
export function assertOwnerLinksClean(knownPaths) {
  const owners = new Set(Object.values(OWNERS));
  for (const [k, href] of Object.entries(OWNERS)) {
    if (knownPaths && !knownPaths.has(href)) throw new Error(`owner-links: owner ${k} ${href} is not a built page`);
  }
  for (const [from, to] of Object.entries(REPOINT)) {
    if (!owners.has(to)) throw new Error(`owner-links: re-point target ${to} for ${from} is not an owner`);
  }
  const price = /[$£€₹]\s?\d|\bper (day|hour)\b|\bday[- ]rate\b|\bpric(e|ing)\b|\bfee\b/i;
  const claims = /\b(?:certified|accredited|guaranteed|#1|best|leading|top-rated|world-class|revolutionary)\b/i;
  const numerals = (t) => /\d/.test(String(t)
    .replace(/\b(?:API|ISO|NAS|ASME|SNT-TC|CP|IACS|UR|EN)[- ]?\d+[A-Za-z0-9.-]*/g, '')
    .replace(/\bD\d+(?:\.\d+)?\b/g, '')
    .replace(/\b3D\b|\bLevel [123]\b/g, ''));
  const check = (path, e) => {
    const links = ownerLinksIn(e.p);
    if (links.length < 1 || links.length > 2) throw new Error(`owner-links: ${path} must carry one or two links (has ${links.length})`);
    for (const [href] of links) {
      if (!owners.has(href)) throw new Error(`owner-links: ${path} links to ${href}, which is not an owner`);
      if (href === path) throw new Error(`owner-links: ${path} links to itself`);
    }
    // Check the visible text only: link targets (e.g. /best-ndt-reporting-software-2026) are owner URLs.
    for (const t of [e.p, e.title, e.h1, e.description].filter(Boolean).map((x) => x.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '$1'))) {
      if (price.test(t)) throw new Error(`owner-links: pricing pattern on ${path}: "${t}"`);
      if (claims.test(t)) throw new Error(`owner-links: claim word on ${path}: "${t}"`);
      if (numerals(t)) throw new Error(`owner-links: numeral on ${path}: "${t}"`);
    }
  };
  const missing = [];
  for (const [path, e] of Object.entries(OWNER_PAGES)) {
    check(path, e);
    if (knownPaths && !knownPaths.has(path)) missing.push(path);
  }
  check('/digital-twin-sample', dtCityMeta('Sample City'));
  if (missing.length) console.warn(`⚠️  owner-links: ${missing.length} listed page(s) not built (skipped): ${missing.join(', ')}`);

  const blogs = JSON.parse(readFileSync(new URL('src/data/blogs.json', ROOT), 'utf-8'));
  const bySlug = new Map(blogs.map((b) => [`/blog/${b.slug}`, b]));
  for (const [path, e] of Object.entries(OWNER_PAGES)) {
    if (e.source !== 'blog') continue;
    const b = bySlug.get(path);
    if (!b) throw new Error(`owner-links: ${path} is marked source 'blog' but is not in blogs.json`);
    if (e.title && b.title !== e.title) throw new Error(`owner-links: blogs.json title for ${path} ("${b.title}") differs from owner-links ("${e.title}")`);
    if (e.description && b.metaDescription !== e.description) throw new Error(`owner-links: blogs.json metaDescription for ${path} differs from owner-links`);
  }
  return true;
}
