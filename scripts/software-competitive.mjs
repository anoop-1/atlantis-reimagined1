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
import { bestSchema, BEST_H1, BEST_DESC, BEST_TITLE } from './software-competitive/best-software.mjs';
import { FOUNDER_PERSON, AUTHOR_ID } from './author-entity.mjs';

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

// 2026-10-17 (software owners): the legacy Round-7 sections of the best-software page made claims the
// product does not support (native iOS/Android apps, AI defect-detection models, FFS handoff bundles,
// GraphQL/OPC-UA connectors, "tailored quote within 24 hours", a Q1-Q7 FAQ repeating them). React
// never showed them. They are removed by heading; the honest comparison block replaces them, and the
// FAQPage is rebuilt from the block's visible Q&A only (CLAUDE.md §20.8).
const BEST_LEGACY_H2 = [
  'What Actually Defines "Best" NDT Reporting Software — The Six Buyer Criteria',
  'The 2026 Top-10 Field — Capabilities, Strengths, Weaknesses',
  'Method-Coverage Deep Dive — UT, PAUT, TOFD, RT, MT, PT, VT, ET, MFL',
  'AI Defect Detection — Where It Helps and Where It Lies',
  'Integration with your existing systems',
  'Atlantis NDT Reporting — Where We Win',
  'Defect-Mapping, Indication-Tracking, and the FFS Handoff That Saves the Asset',
  'Calibration Ledger, Equipment Traceability, and the ISO 9001 Audit Trail',
  'Mobile Offline Field Capture — iOS + Android, Sync Architecture, and the Turnaround Reality',
  'Frequently Asked Questions',
  'Free Consultation + Tailored Quote within 24 Hours',
  // 2026-10-18: crawler-only duplicate of the block's marine section (unsourced competitor claims, ACCP, "enforces").
  'Marine / Maritime — NDT Report Format Structured to IACS Recommendation No. 20',
];
const decodeH = (s) => String(s).replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/\s+/g, ' ').trim();
export function stripBestLegacy(body) {
  let out = body;
  let removed = 0;
  for (const h of BEST_LEGACY_H2) {
    const re = /<h2[^>]*>([\s\S]*?)<\/h2>/g;
    let m;
    while ((m = re.exec(out))) {
      if (decodeH(m[1]) !== h) continue;
      const rest = out.slice(m.index + m[0].length);
      const stop = rest.search(/<h2[\s>]|<section[\s>]|<\/main>|<aside[\s>]/);
      const end = m.index + m[0].length + (stop < 0 ? rest.length : stop);
      out = out.slice(0, m.index) + out.slice(end);
      removed++;
      break;
    }
  }
  return { body: out, removed };
}

let stats = { best: 0, software: 0, compare: 0, owner: 0, fixes: 0, legacyRemoved: 0 };

export function applySoftwareCompetitive(route) {
  if (!route || !route.path || typeof route.bodyContent !== 'string') return route;
  const p = route.path;
  let r = route;

  if (p === BEST.path) {
    let body = r.bodyContent;
    for (const [a, b] of BEST_FIXES) if (body.includes(a)) { body = body.split(a).join(b); stats.fixes++; }
    { const x = stripBestLegacy(body); body = x.body; stats.legacyRemoved += x.removed; }
    body = body.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/, (_m, attrs) => `<h1${attrs}>${esc(BEST.h1)}</h1>`);
    // 2026-10-17: the intro paragraph is the block's (React renders the same string).
    if (BEST.intro) body = body.replace(/(<\/h1>\s*)<p>[\s\S]*?<\/p>/, (_m, pre) => `${pre}<p>${esc(BEST.intro)}</p>`);
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
    // 2026-10-18: provenance for AI assistants and rich results; React builds the same TechArticle + Person
    // (src/pages/best-ndt-reporting-software-2026.tsx). Reviewer = the founder only; date = the vendor re-check.
    if (!typesIn(r.structuredData).includes('TechArticle')) extra.push(
      { '@type': 'TechArticle', '@id': url + '#article', headline: BEST_H1, description: BEST_DESC, url, author: { '@id': AUTHOR_ID }, publisher: { '@id': SITE + '/#organization' }, datePublished: '2026-04-18', dateModified: '2026-10-18', about: 'NDT reporting software' },
      { '@type': 'WebPage', '@id': url + '#webpage', url, name: BEST_TITLE, reviewedBy: { '@id': AUTHOR_ID }, lastReviewed: '2026-10-18', publisher: { '@id': SITE + '/#organization' } },
      FOUNDER_PERSON,
    );
    // Visible Q&A only: the block's FAQ is on the page; the legacy Q1-Q7 are not any more.
    if (existingFaq) existingFaq.mainEntity = faqNode(BEST.faq, url).mainEntity;
    else extra.push(faqNode(BEST.faq, url));
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
  return `Software-competitive: best page ${stats.best}, claim fixes ${stats.fixes}, legacy sections removed ${stats.legacyRemoved}, SoftwareApplication added ${stats.software}, compare blocks ${stats.compare}, owner links ${stats.owner}`;
}
