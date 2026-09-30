// Prerender routes for the SOFTWARE-ASSETS stream (2026-09-29):
//   /ndt-report-templates (+ 8 method templates), /integrations (+ 5 guides,
//   two of which replace the old /integrations/sap-pm and /ibm-maximo bodies),
//   and the rebuilt /ndt-erp-roi-calculator.
// Built from the same JSON the React pages render (src/data/software-assets/),
// so crawler HTML and hydrated HTML agree, including the H1.
// applySoftwareAssetsBlocks() runs after deep-content injection and adds the
// /digital-twin-reporting deep section plus single hub-link paragraphs.
import { readFileSync } from 'fs';

const load = (f) => JSON.parse(readFileSync(new URL(`../src/data/software-assets/${f}`, import.meta.url), 'utf-8'));
const T = load('report-templates.json');
const I = load('integrations.json');
const X = load('extras.json');

const SITE = 'https://atlantisndt.com';
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
const ORG = { '@type': 'Organization', name: 'Atlantis NDT', url: SITE };
const NAV = '<header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/erp">ERP</a><a href="/digital-twin-reporting">Digital Twin Reporting</a><a href="/ndt-report-templates">NDT Report Templates</a><a href="/integrations">Integrations</a><a href="/contact">Contact</a></nav></header>';

const faqPage = (faqs) => ({
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});
const crumbs = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: `${SITE}${path}` })),
});
const page = (h1, lead, extra, bodyHtml) =>
  [NAV, '<main>', `<h1>${esc(h1)}</h1>`, `<p>${esc(lead)}</p>`, extra || '', bodyHtml, '</main>'].filter(Boolean).join('\n');

// ─── report templates ──────────────────────────────────────────────────────
const hubRoute = {
  path: T.hub.path,
  publishedAt: T.hub.publishedAt,
  title: T.hub.title,
  description: T.hub.description,
  canonical: `${SITE}${T.hub.path}`,
  bodyContent: page(T.hub.h1, T.hub.lead, '', T.hub.bodyHtml),
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage', name: T.hub.h1, description: T.hub.description, url: `${SITE}${T.hub.path}`,
        datePublished: T.hub.publishedAt, publisher: ORG,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: T.methods.map((m, i) => ({ '@type': 'ListItem', position: i + 1, name: m.h1, url: `${SITE}${m.path}` })),
        },
      },
      faqPage(T.hub.faqs),
      crumbs([['Home', '/'], ['NDT Report Templates', T.hub.path]]),
    ],
  },
};

const methodRoutes = T.methods.map((m) => ({
  path: m.path,
  publishedAt: m.publishedAt,
  title: m.title,
  description: m.description,
  canonical: `${SITE}${m.path}`,
  bodyContent: page(
    m.h1,
    m.lead,
    `<p><a href="${m.printUrl}">Printable template (save as PDF)</a> · <a href="${m.csvUrl}" download>Download CSV</a> · <a href="/contact?service=reporting&amp;subject=${encodeURIComponent(m.subject)}">Request the editable Word/Excel version</a></p>`,
    m.bodyHtml,
  ),
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CreativeWork',
        name: m.h1,
        headline: m.title,
        description: m.description,
        url: `${SITE}${m.path}`,
        inLanguage: 'en',
        isAccessibleForFree: true,
        learningResourceType: 'Template',
        genre: 'NDT report template',
        about: { '@type': 'Thing', name: `${m.short} nondestructive examination report` },
        datePublished: m.publishedAt,
        author: ORG,
        publisher: ORG,
        isPartOf: { '@type': 'CollectionPage', name: 'NDT Report Templates', url: `${SITE}${T.hub.path}` },
        associatedMedia: [
          { '@type': 'MediaObject', name: `${m.h1} (print view)`, contentUrl: `${SITE}${m.printUrl}`, encodingFormat: 'text/html' },
          { '@type': 'MediaObject', name: `${m.h1} (CSV)`, contentUrl: `${SITE}${m.csvUrl}`, encodingFormat: 'text/csv' },
        ],
      },
      faqPage(m.faqs),
      crumbs([['Home', '/'], ['NDT Report Templates', T.hub.path], [m.h1.replace(/ Template$/, ''), m.path]]),
    ],
  },
}));

// ─── integrations ──────────────────────────────────────────────────────────
const integrationHubRoute = {
  path: I.hub.path,
  publishedAt: I.hub.publishedAt,
  title: I.hub.title,
  description: I.hub.description,
  canonical: `${SITE}${I.hub.path}`,
  bodyContent: page(I.hub.h1, I.hub.lead, '', I.hub.bodyHtml),
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage', name: I.hub.h1, description: I.hub.description, url: `${SITE}${I.hub.path}`, publisher: ORG,
        mainEntity: { '@type': 'ItemList', itemListElement: I.pages.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.h1, url: `${SITE}${x.path}` })) },
      },
      faqPage(I.hub.faqs),
      crumbs([['Home', '/'], ['Integrations', I.hub.path]]),
    ],
  },
};
const integrationRoutes = I.pages.map((x) => ({
  path: x.path,
  // The two pre-existing guides keep their original family age; new ones are dated.
  ...(x.existing ? {} : { publishedAt: x.publishedAt }),
  title: x.title,
  description: x.description,
  canonical: `${SITE}${x.path}`,
  bodyContent: page(x.h1, x.lead, '', x.bodyHtml),
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'TechArticle', headline: x.h1, description: x.description, url: `${SITE}${x.path}`, dateModified: x.publishedAt, author: ORG, publisher: ORG, about: [{ '@type': 'Thing', name: x.name }, { '@type': 'Thing', name: 'Atlantis ERP REST API' }] },
      faqPage(x.faqs),
      crumbs([['Home', '/'], ['Integrations', I.hub.path], [x.name, x.path]]),
    ],
  },
}));

// ─── ROI / time-savings calculator ─────────────────────────────────────────
const R = X.roi;
const roiRoute = {
  path: R.path,
  title: R.title,
  description: R.description,
  canonical: `${SITE}${R.path}`,
  bodyContent: page(
    R.h1,
    R.lead,
    '<p>The interactive calculator runs in your browser: enter technicians, reports per month, minutes per report and the admin hours in each area, and the hours recovered appear straight away. The method and a worked example follow.</p>',
    R.staticHtml,
  ),
  structuredData: {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication', name: R.h1, description: R.description, url: `${SITE}${R.path}`,
        applicationCategory: 'BusinessApplication', operatingSystem: 'Web browser', isAccessibleForFree: true, publisher: ORG,
      },
      faqPage(R.faqs),
      crumbs([['Home', '/'], ['ERP', '/erp'], [R.h1, R.path]]),
    ],
  },
};

export const SOFTWARE_ASSETS_ROUTES = [hubRoute, ...methodRoutes, integrationHubRoute, ...integrationRoutes, roiRoute];

/** Title/description the render-time CTR layers must not overwrite. */
export const SOFTWARE_ASSETS_META = Object.fromEntries(
  SOFTWARE_ASSETS_ROUTES.map((r) => [r.path, { title: r.title, description: r.description }]),
);

// ─── blocks on existing pages ──────────────────────────────────────────────
const LINKS = {
  '/digital-twin-reporting': null, // gets the full deep section below
  '/erp': '<p>Free <a href="/ndt-report-templates">NDT report templates</a> (UT, PT, MT, RT, VT, PAUT, TOFD), the <a href="/ndt-erp-roi-calculator">NDT software time-savings calculator</a>, and <a href="/integrations">integrations with SAP, Maximo, NetSuite, QuickBooks and Dynamics 365</a> through the open REST API.</p>',
  '/best-ndt-reporting-software-2026': '<p>Before you shortlist software, compare your current reports against the free <a href="/ndt-report-templates">NDT report templates</a> for UT, UT thickness, PT, MT, RT, VT, PAUT and TOFD.</p>',
  '/resources': '<p>New: free <a href="/ndt-report-templates">NDT report templates</a> for UT, UT thickness, PT, MT, RT, VT, PAUT and TOFD, each with a print view and CSV.</p>',
  '/ndt-erp-integration-matrix': '<p>Integration guides: <a href="/integrations/sap-pm">SAP PM</a>, <a href="/integrations/ibm-maximo">IBM Maximo</a>, <a href="/integrations/netsuite">NetSuite</a>, <a href="/integrations/quickbooks">QuickBooks</a> and <a href="/integrations/microsoft-dynamics-365">Microsoft Dynamics 365</a>, or start at the <a href="/integrations">integrations overview</a>.</p>',
  '/erp/apps/ndt-reports': '<p>Starting from paper? Use the free <a href="/ndt-report-templates">NDT report templates</a> as the specification for your report types.</p>',
};

function insertBeforeMain(r, html) {
  const i = r.bodyContent.lastIndexOf('</main>');
  r.bodyContent = i >= 0 ? r.bodyContent.slice(0, i) + html + '\n' + r.bodyContent.slice(i) : r.bodyContent + html;
}

export function applySoftwareAssetsBlocks(routes) {
  let n = 0;
  for (const r of routes) {
    if (!r || typeof r.bodyContent !== 'string') continue;
    if (r.path === X.dt.path && !r.bodyContent.includes('data-sa="dt-reporting"')) {
      insertBeforeMain(r, `<section class="software-assets" data-sa="dt-reporting">\n${X.dt.bodyHtml}\n</section>`);
      n++;
      continue;
    }
    const link = LINKS[r.path];
    if (link && !r.bodyContent.includes('data-sa="hub-link"')) {
      insertBeforeMain(r, `<aside data-sa="hub-link">${link}</aside>`);
      n++;
    }
  }
  return n;
}
