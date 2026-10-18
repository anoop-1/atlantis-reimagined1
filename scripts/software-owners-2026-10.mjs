/**
 * Software owners — crawler-HTML layer, 2026-10-18 (software workstream, CLAUDE.md §59).
 * ─────────────────────────────────────────────────────────────────────────────
 * /ndt-inspection-software becomes a product page. ONE source for both layers:
 * src/data/software-owners-2026-10.json (React: src/pages/ndt-inspection-software.tsx).
 *
 * Hook (prerender.mjs render loop, right after applyMoneyPagesRoute):
 *   route = applySoftwareOwnersRoute(route);
 * It is the LAST body writer for the path: it rebuilds <main> from the JSON, so the
 * stacked legacy layers (route-reconcile money page, phase-e "Where this fits", the
 * page-upgrades scope section, deep-content Stage 1–6 + second FAQ, the coverage block
 * with the "stops … being assigned" claim, orphan-rescue city links) cannot survive under
 * it. The screenshot gallery and the trailer are placed by their own modules (blockFor),
 * so their later passes see the markers and skip. Global blocks that still run after it
 * (keyword links: none, the page is an owner; next steps: none, entry removed) append
 * before </main> exactly as React's slots do.
 *
 * assertSoftwareOwnersClean(knownPaths) fails the build on a numeral outside a standards
 * designation, a price figure, a time promise, a forbidden capability claim, a link to a
 * page that is not built, and on drift between ctr-wave16/software.json and the React
 * copies of those titles (depth-pages.json, erp-apps JSON, blogs.json) or a path left in
 * ctr-wave15-software-meta.json after it moved to wave 16.
 */
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { applyScreenshotsRoute, screenshotStats } from './product-screenshots.mjs';
import { applyVideoRoute, videoStats } from './product-videos.mjs';
import { FOUNDER_PERSON, AUTHOR_ID } from './author-entity.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const load = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf-8'));
const DATA = load('src/data/software-owners-2026-10.json');
const WAVE16 = load('src/data/ctr-wave16/software.json');
const SITE = 'https://atlantisndt.com';
const ORG_ID = `${SITE}/#organization`;

export const SOFTWARE_OWNER_MARKER = 'data-software-owner="2026-10"';
export const softwareOwnerStats = { pages: 0 };

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const a = (href, label) => `<a href="${esc(href)}">${esc(label)}</a>`;
const inner = (bodyWithMain) => bodyWithMain.replace(/^[\s\S]*?<main[^>]*>/i, '').replace(/<\/main>[\s\S]*$/i, '');
const blockFor = (path, apply) => inner(apply({ path, bodyContent: '<main></main>' }).bodyContent);

/** Escaped text with each [phrase, href] linked at its first occurrence (React <Inline> does the same). */
export function linked(text, links) {
  let html = esc(text);
  for (const [phrase, href] of links || []) {
    const e = esc(phrase);
    if (!html.includes(e)) throw new Error(`software-owners: link phrase "${phrase}" not found in "${String(text).slice(0, 60)}…"`);
    html = html.replace(e, a(href, phrase));
  }
  return html;
}

function table(t) {
  return `<table><caption>${esc(t.caption)}</caption><thead><tr>${t.headers.map((h) => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${t.rows
    .map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${esc(c)}</th>` : `<td>${esc(c)}</td>`)).join('')}</tr>`).join('')}</tbody></table>`;
}

/** <main> inner HTML for the product page, in the React page's order. */
export function productMainHtml(path) {
  const P = DATA[path];
  const M = `${SOFTWARE_OWNER_MARKER}`;
  return `
    <h1>${esc(P.h1)}</h1>
    <p>${esc(P.lead)}</p>
    <p ${M}>${P.ctas.map((c) => a(c.href, c.label)).join(' · ')}</p>
    <p data-last-reviewed="${esc(P.reviewed.date)}">${esc(P.reviewed.text)}</p>
${blockFor(path, applyScreenshotsRoute)}${blockFor(path, applyVideoRoute)}
    <section data-citation-block="answer" aria-label="Direct answer">
      <h2>${esc(P.answer.h2)}</h2>
      <p>${esc(P.answer.text)}</p>
    </section>
    <section id="at-a-glance" ${M}>
      <h2>${esc(P.facts.h2)}</h2>
      <p>${esc(P.facts.intro)}</p>
      <table><caption>${esc(P.facts.h2)}</caption><thead><tr><th scope="col">Question</th><th scope="col">Answer</th></tr></thead><tbody>${P.facts.rows
        .map(([q, ans, href]) => `<tr><th scope="row">${a(href, q)}</th><td>${esc(ans)}</td></tr>`).join('')}</tbody></table>
    </section>
    <section id="what-it-does" ${M}>
      <h2>${esc(P.does.h2)}</h2>
      <p>${esc(P.does.intro)}</p>
      ${P.does.items.map((it) => `<h3>${esc(it.h3)}</h3>
      <p>${esc(it.p)}</p>
      <p>${a(it.link.href, it.link.label)}</p>`).join('\n      ')}
    </section>
    <section id="industries" ${M}>
      <h2>${esc(P.industries.h2)}</h2>
      <p>${esc(P.industries.intro)}</p>
      ${P.industries.items.map((it) => `<h3>${a(it.href, it.label)}</h3>
      <p>${esc(it.p)}</p>`).join('\n      ')}
    </section>
    <section id="${esc(P.scope.id)}" ${M}>
      <h2>${esc(P.scope.h2)}</h2>
      ${P.scope.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('\n      ')}
    </section>
    ${P.tables.map((t) => `<section ${M}>
      <h2>${esc(t.h2)}</h2>
      <p>${esc(t.intro)}</p>
      ${table(t)}
    </section>`).join('\n    ')}
    <section ${M}>
      <h2>${esc(P.evaluation.h2)}</h2>
      <ul>${P.evaluation.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
    </section>
    <section id="faq" ${M}>
      <h2>Frequently asked questions</h2>
      ${P.faq.map((f) => `<h3>${esc(f.q)}</h3>
      <p>${linked(f.a, f.links)}</p>`).join('\n      ')}
    </section>
    <nav aria-label="${esc(P.related.h2)}" ${M}>
      <h2>${esc(P.related.h2)}</h2>
      <ul>${P.related.links.map((r) => `<li>${a(r.href, r.label)}</li>`).join('')}</ul>
    </nav>
    <section id="erp-enquiry" ${M}>
      <h2>${esc(P.enquiry.h2)}</h2>
      <p>${linked(P.enquiry.p, P.enquiry.links)}</p>
      <p>${a('/contact?service=erp&subject=Guided%20ERP%20walkthrough', 'Request a walkthrough')} · ${a('/free-trial', 'Start the free trial')}</p>
    </section>
`;
}

/** JSON-LD for the product page (React builds the same nodes in ndt-inspection-software.tsx). */
export function productStructuredData(path, keep = []) {
  const P = DATA[path];
  const meta = WAVE16[path];
  const url = `${SITE}${path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${url}#software`,
        name: 'Atlantis NDT ERP',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web browser; installable offline field app',
        url,
        description: meta.description,
        publisher: { '@id': ORG_ID },
        creator: { '@id': AUTHOR_ID },
      },
      FOUNDER_PERSON,
      { '@type': 'Organization', '@id': ORG_ID, founder: { '@id': AUTHOR_ID } },
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: meta.title, about: { '@id': `${url}#software` }, reviewedBy: { '@id': AUTHOR_ID }, publisher: { '@id': ORG_ID }, dateModified: P.reviewed.date },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: P.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) },
      ...keep,
    ],
  };
}

function existingHeader(body) {
  const m = String(body || '').match(/^\s*<header[\s\S]*?<\/header>/i);
  return m ? m[0].replace(/^\s*/, '  ') : '  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/erp">ERP</a><a href="/ndt-inspection-software">Inspection Software</a><a href="/contact">Contact</a></nav></header>';
}

/** FAQPage from a visible <section data-software-faq="2026-10"> (h3 question + p answer), for owner
 *  pages whose body lives elsewhere (the construction QA blog: blogs.json content, read by both layers). */
export const SOFTWARE_FAQ_MARKER = 'data-software-faq="2026-10"';
const strip = (h) => String(h).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
export function visibleSectionFaq(body) {
  const i = String(body || '').indexOf(SOFTWARE_FAQ_MARKER);
  if (i < 0) return [];
  const sec = body.slice(i, body.indexOf('</section>', i));
  return [...sec.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => ({ q: strip(m[1]), a: strip(m[2]) }));
}
function withSectionFaq(route) {
  const faq = visibleSectionFaq(route.bodyContent);
  if (faq.length < 2) return route;
  const sd = route.structuredData;
  const graph = !sd ? [] : Array.isArray(sd['@graph']) ? sd['@graph'] : [sd];
  if (graph.some((n) => n && n['@type'] === 'FAQPage')) return route;
  const url = `${SITE}${route.path}`;
  const node = { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) };
  softwareOwnerStats.sectionFaq = (softwareOwnerStats.sectionFaq || 0) + 1;
  return { ...route, structuredData: { '@context': 'https://schema.org', '@graph': [...graph.map(({ '@context': _c, ...n }) => n), node] } };
}

/** Last body writer for the software owner product pages. Idempotent (marker check). */
export function applySoftwareOwnersRoute(route) {
  if (!route || !route.path || typeof route.bodyContent !== 'string') return route;
  if (route.bodyContent.includes(SOFTWARE_FAQ_MARKER)) return withSectionFaq(route);
  const P = DATA[route.path];
  if (!P || route.bodyContent.includes(SOFTWARE_OWNER_MARKER)) return route;
  const nodes = (sd) => (!sd ? [] : Array.isArray(sd) ? sd : Array.isArray(sd['@graph']) ? sd['@graph'] : [sd]);
  const keep = nodes(route.structuredData).filter((n) => n && n['@type'] === 'BreadcrumbList');
  const meta = WAVE16[route.path];
  softwareOwnerStats.pages++;
  return {
    ...route,
    title: meta.title,
    ogTitle: meta.title,
    description: meta.description,
    ogDesc: meta.description,
    h1: P.h1,
    bodyContent: `${existingHeader(route.bodyContent)}\n  <main>${productMainHtml(route.path)}  </main>`,
    structuredData: productStructuredData(route.path, keep),
  };
}

/* ── guard ──────────────────────────────────────────────────────────────── */
const STANDARDS = /\b(?:API(?:\s+RP)?\s?\d{3,4}(?:-\d)?|ISO(?:\/IEC)?\s?\d{4,5}|NAS\s?410|SNT-TC-1A|CP-189|ASME\s+Section\s+[IVX]+|IBC\s+Chapter\s+\d+|AWS\s+D1\.\d|PHMSA|ASNT)\b/g;
export const softwareNumerals = (t) => (String(t || '').replace(STANDARDS, '').match(/\d/g) || []);
const copyOf = (v, k = '') => (typeof v === 'string' ? (['href', 'path', 'id', 'date'].includes(k) || /^\/|^https?:/.test(v) ? [] : [v])
  : Array.isArray(v) ? v.flatMap((x) => copyOf(x)) : v && typeof v === 'object' ? Object.entries(v).flatMap(([kk, x]) => (kk === '_note' ? [] : copyOf(x, kk))) : []);

export function assertSoftwareOwnersClean(knownPaths) {
  const errs = [];
  const before = [screenshotStats.pages, videoStats.pages]; // productMainHtml() counts; this render is a check, not a page
  for (const [path, P] of Object.entries(DATA)) {
    if (!path.startsWith('/')) continue;
    if (!WAVE16[path]) errs.push(`${path}: no title/description in ctr-wave16/software.json`);
    for (const t of copyOf(P)) {
      const t2 = t.replace(/^Product facts reviewed on .*? by /, 'reviewed by '); // the dated review line is a date, not ERP copy
      if (softwareNumerals(t2).length) errs.push(`${path}: numeral in software copy: "${t.slice(0, 70)}"`);
      if (/[$£€₹]\s?\d|\b(?:USD|CAD|INR|AED|SAR)\s?\d|\bper (?:user|seat|month|year)\b/i.test(t)) errs.push(`${path}: price pattern: "${t.slice(0, 70)}"`);
      if (/within \w+ (?:hours?|days?|weeks?)|\b24[- ]hour|same[- ]day|a few weeks|rollout takes/i.test(t)) errs.push(`${path}: time promise: "${t.slice(0, 70)}"`);
      if (/\bstops? (?:that|the|a) technician|enforced at sig[n]ature|iOS and Android|API 579[^.]{0,40}(?:bundle|feeds|input)|\bAI-powered\b|headquartered/i.test(t)) errs.push(`${path}: contradicted capability claim: "${t.slice(0, 70)}"`);
      if (/\b(?:our|existing) (?:customers|clients) (?:in|across|use)|contractors running multiple crews|has switched systems/i.test(t)) errs.push(`${path}: implied customers: "${t.slice(0, 70)}"`);
    }
    if (P.faq.some((f) => f.q.length < 8 || !f.a)) errs.push(`${path}: empty FAQ entry`);
    if (knownPaths) {
      const html = productMainHtml(path);
      for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
        const t = m[1].replace(/\/$/, '') || '/';
        if (/\.[a-z0-9]{2,5}$/i.test(t)) { if (!existsSync(join(ROOT, 'public', t))) errs.push(`${path}: file not found: ${t}`); continue; }
        if (!knownPaths.has(t)) errs.push(`${path}: link target not built: ${t}`);
      }
    }
  }
  [screenshotStats.pages, videoStats.pages] = before;

  // Wave 16 software titles: one source, React copies equal, no path left behind in wave 15.
  const wave15 = load('src/data/ctr-wave15-software-meta.json');
  const depth = new Map(load('src/data/depth-pages.json').map((d) => [d.slug, d]));
  const blogs = new Map(load('src/data/blogs.json').map((b) => [`/blog/${b.slug}`, b]));
  for (const [p, o] of Object.entries(WAVE16)) {
    if (!p.startsWith('/')) continue;
    if (wave15[p]) errs.push(`${p}: also in ctr-wave15-software-meta.json (one source: remove it there)`);
    if (softwareNumerals(`${o.title} ${o.description}`).length) errs.push(`${p}: numeral in wave 16 software title/description`);
    const d = depth.get(p);
    if (d && (d.title !== o.title || d.description !== o.description)) errs.push(`${p}: depth-pages.json title/description differ from wave 16`);
    const b = blogs.get(p);
    if (b && (b.title !== o.title || b.metaDescription !== o.description)) errs.push(`${p}: blogs.json title/metaDescription differ from wave 16`);
    const app = p.match(/^\/erp\/apps\/([a-z0-9-]+)$/);
    if (app) {
      const f = join(ROOT, 'src', 'data', 'erp-apps', `${app[1]}.json`);
      if (existsSync(f)) {
        const j = JSON.parse(readFileSync(f, 'utf-8'));
        if (j.title !== o.title || j.metaDescription !== o.description) errs.push(`${p}: erp-apps JSON title/metaDescription differ from wave 16`);
      }
    }
    if (knownPaths && !knownPaths.has(p)) errs.push(`${p}: not a built page`);
  }
  if (errs.length) throw new Error(`software-owners-2026-10:\n  ${[...new Set(errs)].join('\n  ')}`);
  return true;
}
