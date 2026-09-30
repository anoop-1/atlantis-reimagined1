/**
 * SOFTWARE-COMPETITIVE prerender layer — 2026-09-29.
 * ─────────────────────────────────────────────────────────────────────────────
 * Reads the JSON written by scripts/build-software-competitive.mjs (the same
 * JSON the React layer renders) and:
 *   1. SOFTWARE_COMPETITIVE_ROUTES — the new alternatives / comparison pages.
 *   2. applySoftwareCompetitive(route) — called in the render loop just before
 *      writeRoute, so it is the last body writer for the paths it owns:
 *        - /best-ndt-reporting-software-2026: H1 aligned with the title (which
 *          CTR wave 6 sets), the unranked 9-platform comparison inserted after
 *          the intro, SoftwareApplication + ItemList + merged FAQ schema, and
 *          three fabricated / out-of-scope claims neutralised (hard rules 3, 5).
 *        - /ndt-inspection-software, /ndt-erp-solution: SoftwareApplication
 *          (no offers, no price, no rating).
 *        - 60 North American /ndt-erp-{city} hubs and /erp/apps pages: a
 *          "Compare NDT software" link block.
 *        - other NDT-software pages: one exact-anchor link to the owner page
 *          for "NDT inspection software" (/ndt-inspection-software).
 * The React equivalent is src/components/SoftwareCompetitive.tsx.
 */
import { readFileSync, readdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { atlantisSoftwareNode, faqNode } from './software-competitive/common.mjs';
import { bestSchema } from './software-competitive/best-software.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA = join(ROOT, 'src/data/software-competitive');
const SITE = 'https://atlantisndt.com';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const readJson = (f) => JSON.parse(readFileSync(f, 'utf8'));
const LINKS = readJson(join(DATA, 'compare-links.json'));
const BEST = readJson(join(DATA, 'blocks', 'best-ndt-reporting-software-2026.json'));

// ── 1. New pages ─────────────────────────────────────────────────────────────
const NAV = '  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/erp">NDT ERP</a><a href="/best-ndt-reporting-software-2026">NDT Software Compared</a><a href="/ndt-inspection-software">NDT Inspection Software</a><a href="/contact">Contact</a></nav></header>';

export const SOFTWARE_COMPETITIVE_ROUTES = readdirSync(join(DATA, 'pages'))
  .filter((f) => f.endsWith('.json'))
  .map((f) => readJson(join(DATA, 'pages', f)))
  .map((p) => {
    const url = SITE + p.slug;
    return {
      path: p.slug,
      title: p.title,
      description: p.description,
      canonical: url,
      publishedAt: p.publishedAt,
      bodyContent: `${NAV}\n  <main>\n    <h1>${esc(p.h1)}</h1>\n    <div data-citation-block="byline">Reviewed by <a href="/authors/anoop-rayavarapu">Anoop Rayavarapu</a>, ASNT NDT Level III. Vendor facts checked September 2026.</div>\n${p.bodyHtml}\n  </main>`,
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Article',
            headline: p.h1,
            description: p.description,
            datePublished: p.publishedAt,
            dateModified: p.publishedAt,
            author: { '@type': 'Person', '@id': SITE + '/#anoop-rayavarapu', name: 'Anoop Rayavarapu' },
            publisher: { '@type': 'Organization', '@id': SITE + '/#organization', name: 'Atlantis NDT' },
            mainEntityOfPage: url,
          },
          atlantisSoftwareNode(url),
          faqNode(p.faq, url),
        ],
      },
    };
  });

// ── 2. Owned-page transforms ─────────────────────────────────────────────────
// The 60 North American ERP city hubs are the ones that carry deep content.
const CITY_HUBS = new Set(
  readdirSync(join(ROOT, 'src/data/deep-content'))
    .filter((f) => /^ndt-erp-.+\.json$/.test(f) && f !== 'ndt-erp-solution.json' && !/^ndt-erp-vs-/.test(f))
    .map((f) => '/' + f.replace(/\.json$/, '')),
);
export const SOFTWARE_CITY_HUBS = CITY_HUBS;

// Pages that compete with /ndt-inspection-software for "ndt inspection software"
// (GSC, 90d to 2026-09-27). Each gets one exact-anchor link to the owner.
export const OWNER_LINK_PAGES = new Set(LINKS.ownerLinkPages || []);

const typesIn = (sd) => {
  if (!sd) return [];
  const nodes = Array.isArray(sd) ? sd : sd['@graph'] ? sd['@graph'] : [sd];
  return nodes.map((n) => n && n['@type']);
};
function addNodes(route, nodes) {
  let sd = route.structuredData;
  if (!sd) sd = { '@context': 'https://schema.org', '@graph': [] };
  else if (!Array.isArray(sd['@graph'])) {
    const { '@context': _c, ...rest } = sd;
    sd = { '@context': 'https://schema.org', '@graph': [rest] };
  } else sd = { ...sd, '@graph': [...sd['@graph']] };
  sd['@graph'].push(...nodes);
  return { ...route, structuredData: sd };
}
function insertBeforeMainClose(body, html) {
  const i = body.lastIndexOf('</main>');
  return i >= 0 ? body.slice(0, i) + html + '\n' + body.slice(i) : body + html;
}
const cityName = (path) =>
  path.replace(/^\/ndt-erp-/, '').split('-').map((w) => (w === 'nj' ? 'NJ' : w.charAt(0).toUpperCase() + w.slice(1))).join(' ');

// Claims on the best-software page that break hard rules 3 and 5 (RBI/FFS not
// offered; no invented customer outcomes). Neutralised in place, not deleted.
const BEST_FIXES = [
  [' ADNOC Ruwais + QatarEnergy NFE + Petronas RAPID + Reliance Jamnagar turnarounds report dramatic data-quality improvement vs paper-then-key-in workflow.', ' Offline capture removes the paper-then-key-in step that causes most transcription errors during turnarounds.'],
  ['Aramco turnaround on Ras Tanura crude train running 14-day intensive scope with 200+ inspectors', 'A large refinery turnaround with an intensive two-week scope and hundreds of inspectors'],
  ['and the Aramco Turnaround Reality', 'and the Turnaround Reality'],
  ['Critical for Aramco / ADNOC turnaround windows where connectivity is intermittent.', 'Critical in turnaround windows where connectivity is intermittent.'],
  ['into the asset-integrity work-order + RBI + FFS engine without manual re-keying', 'into the client’s asset-integrity and work-order systems without manual re-keying'],
  ['FFS-ready handoff per API 579-1; 24×7 support from Houston + Hyderabad + GCC.', 'structured inspection data your client’s engineers can use; support from Houston and Hyderabad.'],
];

let stats = { best: 0, software: 0, compare: 0, owner: 0, fixes: 0 };

export function applySoftwareCompetitive(route) {
  if (!route || !route.path || typeof route.bodyContent !== 'string') return route;
  const p = route.path;
  let r = route;

  if (p === BEST.path) {
    let body = r.bodyContent;
    for (const [a, b] of BEST_FIXES) if (body.includes(a)) { body = body.split(a).join(b); stats.fixes++; }
    body = body.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/, (_m, attrs) => `<h1${attrs}>${esc(BEST.h1)}</h1>`);
    // After the H1's following paragraph (the page intro), or after the H1.
    const h1End = body.indexOf('</h1>') + 5;
    const pEnd = body.indexOf('</p>', h1End);
    const nextH2 = body.indexOf('<h2', h1End);
    const at = pEnd > 0 && (nextH2 < 0 || pEnd < nextH2) ? pEnd + 4 : h1End;
    body = body.slice(0, at) + '\n' + BEST.html + '\n' + body.slice(at);
    r = { ...r, bodyContent: body };
    // Schema: merge our FAQs into the existing FAQPage (one FAQPage per page).
    const url = SITE + p;
    const graph = r.structuredData && r.structuredData['@graph'];
    const existingFaq = (graph || (r.structuredData ? [r.structuredData] : [])).find((n) => n && n['@type'] === 'FAQPage');
    const extra = [atlantisSoftwareNode(url, 'Atlantis NDT ERP and NDT Reports'), ...bestSchema()];
    if (existingFaq) {
      const have = new Set((existingFaq.mainEntity || []).map((q) => q.name));
      existingFaq.mainEntity = [...(existingFaq.mainEntity || []), ...faqNode(BEST.faq, url).mainEntity.filter((q) => !have.has(q.name))];
    } else extra.push(faqNode(BEST.faq, url));
    if (!typesIn(r.structuredData).includes('SoftwareApplication')) r = addNodes(r, extra);
    else r = addNodes(r, extra.filter((n) => n['@type'] !== 'SoftwareApplication'));
    stats.best++;
  }

  if ((p === '/ndt-inspection-software' || p === '/ndt-erp-solution') && !typesIn(r.structuredData).includes('SoftwareApplication')) {
    r = addNodes(r, [atlantisSoftwareNode(SITE + p)]);
    stats.software++;
  }

  if (CITY_HUBS.has(p)) {
    r = { ...r, bodyContent: insertBeforeMainClose(r.bodyContent, LINKS.html.replace('{{lead}}', esc(`${cityName(p)} inspection companies comparing NDT software:`))) };
    stats.compare++;
  } else if (p === '/erp/apps' || p.startsWith('/erp/apps/')) {
    r = { ...r, bodyContent: insertBeforeMainClose(r.bodyContent, LINKS.html.replace('{{lead}}', 'Comparing NDT software?')) };
    stats.compare++;
  } else if (OWNER_LINK_PAGES.has(p)) {
    r = { ...r, bodyContent: insertBeforeMainClose(r.bodyContent, LINKS.ownerHtml) };
    stats.owner++;
  }
  return r;
}

export function softwareCompetitiveStats() {
  return `Software-competitive: best page ${stats.best}, claim fixes ${stats.fixes}, SoftwareApplication added ${stats.software}, compare blocks ${stats.compare}, owner links ${stats.owner}`;
}
