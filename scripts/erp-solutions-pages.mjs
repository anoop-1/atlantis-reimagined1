// ERP problem → solution pages in the crawler HTML (2026-11-06, owner: "find a problem, show
// this product as solution to move forward"). Same data and renderers as the React pages
// (src/pages/ErpSolutionPage.tsx, ErpSolutionsHub.tsx): src/data/erp-solutions-2026-11.{json,mjs}.
// The hero's interactive dashboard becomes dashboardStaticHtml() from the same sample data.
//
// Also:
//  * applyErpSolutionRoute(): the "Problems this solves" block on /erp, the NDT module pages,
//    the owner pages each guide names as related, and the ERP city pages (React:
//    src/components/ErpSolutionLinksBlock.tsx, same solutionLinksFor() rules).
//    It also puts the described dashboard figure on the NDT module pages
//    (React: ErpAppPage mounts the interactive widget for the same apps, MODULE_DASHBOARD_TAB).
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import {
  SOLUTIONS_BASE, SOL_CLASS, solutionPath, solutionHeroHtml, solutionBodyHtml, solutionsHubHeroHtml,
  solutionsHubBodyHtml, solutionSchema, solutionsHubSchema, solutionLinksFor, solutionLinksHtml, assertSolutionsClean,
} from '../src/data/erp-solutions-2026-11.mjs';
import { dashboardStaticHtml, assertDashboardPreviewClean } from '../src/data/erp-dashboard-preview-2026-11.mjs';
import { MODULE_DASHBOARD_TAB } from '../src/data/erp-module-dashboards-2026-11.mjs';
import { relatedTitle } from '../src/data/erp-solutions-related-titles-2026-11.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
export const SOLUTIONS = JSON.parse(readFileSync(join(HERE, '..', 'src', 'data', 'erp-solutions-2026-11.json'), 'utf8'));
const CATALOG = JSON.parse(readFileSync(join(HERE, '..', 'src', 'data', 'erp-apps-catalog.json'), 'utf8'));
const APPS = Object.fromEntries(CATALOG.apps.map((a) => [a.slug, a.name]));
const PUBLISHED = '2026-11-06';

const HEADER = '  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/about">About</a><a href="/consulting">Consulting</a><a href="/training">Training</a><a href="/erp">ERP</a><a href="/digital-twins">Digital Twins</a><a href="/contact">Free Consultation</a></nav></header>';
const C = SOL_CLASS;
const hero = (left, tab) => `<section class="${C.heroSection}"><div class="${C.heroGrid}"><div>${left}</div>${dashboardStaticHtml(tab)}</div></section>`;

export function erpSolutionRoutes() {
  assertDashboardPreviewClean();
  assertSolutionsClean(SOLUTIONS, new Set(Object.keys(APPS)));
  const out = [{
    path: SOLUTIONS_BASE,
    publishedAt: PUBLISHED,
    title: SOLUTIONS.hub.title,
    description: SOLUTIONS.hub.description,
    canonical: `https://atlantisndt.com${SOLUTIONS_BASE}`,
    structuredData: solutionsHubSchema(SOLUTIONS.hub, SOLUTIONS.pages),
    bodyContent: `${HEADER}\n  <main>\n${hero(solutionsHubHeroHtml(SOLUTIONS.hub), SOLUTIONS.hub.dashboardTab)}\n${solutionsHubBodyHtml(SOLUTIONS.hub, SOLUTIONS.pages)}\n  </main>`,
  }];
  for (const r of SOLUTIONS.pages) {
    out.push({
      path: solutionPath(r.slug),
      publishedAt: PUBLISHED,
      title: r.title,
      description: r.description,
      canonical: `https://atlantisndt.com${solutionPath(r.slug)}`,
      structuredData: solutionSchema(r),
      bodyContent: `${HEADER}\n  <main>\n${hero(solutionHeroHtml(r), r.dashboardTab)}\n${solutionBodyHtml(r, APPS, relatedTitle)}\n  </main>`,
    });
  }
  return out;
}

const LINKS_RE = /<section class="[^"]*" data-erp-solution-links="2026-11">[\s\S]*?<\/section>/g;
const DASH_RE = /<section data-erp-module-dashboard="2026-11"[\s\S]*?<\/section>/g;
const insertBeforeRouteOrMain = (body, html) => {
  const at = body.indexOf('<section data-intent-route="2026-10"');
  if (at >= 0) return body.slice(0, at) + html + body.slice(at);
  const i = body.lastIndexOf('</main>');
  return i >= 0 ? body.slice(0, i) + html + body.slice(i) : body + html;
};

export const erpSolutionStats = { links: 0, dashboards: 0, byKind: {} };

/** Per-route writer (prerender writeRoute loop): module dashboard figure + solution links. Idempotent. */
export function applyErpSolutionRoute(route) {
  if (!route || typeof route.bodyContent !== 'string' || route.noindex) return route;
  let body = route.bodyContent;
  const app = /^\/erp\/apps\/([a-z-]+)$/.exec(route.path || '')?.[1];
  const tab = app && MODULE_DASHBOARD_TAB[app];
  if (tab) {
    const fig = `<section data-erp-module-dashboard="2026-11" class="container mx-auto max-w-4xl px-6 py-6" aria-label="Sample dashboard">${dashboardStaticHtml(tab)}</section>`;
    body = body.replace(DASH_RE, '');
    const h2 = body.indexOf('<h2', Math.max(0, body.indexOf('<main')));
    const i = h2 >= 0 ? body.indexOf('<h2', h2 + 3) : -1;
    body = i >= 0 ? body.slice(0, i) + fig + body.slice(i) : insertBeforeRouteOrMain(body, fig);
    erpSolutionStats.dashboards++;
  }
  const hit = solutionLinksFor(route.path, SOLUTIONS.pages);
  if (hit) {
    body = insertBeforeRouteOrMain(body.replace(LINKS_RE, ''), solutionLinksHtml(hit.list, hit.heading));
    erpSolutionStats.links++;
    erpSolutionStats.byKind[hit.heading] = (erpSolutionStats.byKind[hit.heading] || 0) + 1;
  }
  return body === route.bodyContent ? route : { ...route, bodyContent: body };
}

/** Build guard: related targets are built pages; every guide is linked from somewhere. */
export function assertErpSolutionsBuilt(knownPaths) {
  assertSolutionsClean(SOLUTIONS, new Set(Object.keys(APPS)), knownPaths);
  console.log(`🧩 ERP solutions 2026-11-06: ${SOLUTIONS.pages.length} guides + hub, guard PASS`);
}
