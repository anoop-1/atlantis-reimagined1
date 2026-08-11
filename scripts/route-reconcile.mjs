/**
 * Route Reconciliation — Phase 0 of the 2026-07-27 ERP/DT SEO programme.
 * ─────────────────────────────────────────────────────────────────────────────
 * PROBLEM THIS SOLVES
 * -------------------
 * `src/App.tsx` declares ~2,600 routes. `scripts/prerender.mjs` historically
 * kept its own hand-maintained city arrays. Every sprint that added page files
 * + App.tsx routes without also editing those arrays produced URLs that:
 *   - are NOT prerendered  -> Vercel serves the SPA shell (`dist/index.html`)
 *   - are NOT in a sitemap -> prerender generates sitemaps from its route array
 * The SPA shell carries the HOMEPAGE `<title>`, `<h1>` and, fatally,
 * `<link rel="canonical" href="https://atlantisndt.com/">`.
 *
 * Google therefore treated 656 real pages as duplicates of the homepage and
 * dropped them — including 291 of 381 Digital Twin routes (76%) and every DT
 * city page built in the 2026-07-24 sprint.
 *
 * WHAT THIS MODULE DOES
 * ---------------------
 * 1. Parses `src/App.tsx` for every static route path and the page file behind it.
 * 2. Diffs that against the route paths prerender already knows about.
 * 3. For each missing path, builds a full prerender route object
 *    (title / description / canonical / bodyContent / structuredData) sourced
 *    from the SAME data the React component renders — so the static HTML and
 *    the hydrated view agree (no cloaking, no thin doorway pages).
 * 4. Applies the site's existing anti-doorway policy: a city-templated page is
 *    `index,follow` only when it has genuinely unique local research behind it
 *    AND its slug is in the curated set. Everything else is prerendered with a
 *    correct self-canonical but `noindex,follow` — it stops being a homepage
 *    duplicate without adding thin pages to the index.
 * 5. Exposes `assertNoDrift()` so the build FAILS if a route is ever added to
 *    App.tsx without a prerender counterpart. This bug cannot silently recur.
 */

import esbuild from 'esbuild';
import { readFileSync, existsSync, mkdirSync, rmSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const SRC = resolve(ROOT, 'src');
const TSCACHE = resolve(ROOT, '.tsdata');

/* ────────────────────────────────────────────────────────────────────────────
 * 1. Load the TypeScript knowledge modules from plain Node
 * ────────────────────────────────────────────────────────────────────────── */

const aliasPlugin = {
  name: 'atlantis-alias',
  setup(build) {
    build.onResolve({ filter: /^@\// }, (args) => ({
      path: resolve(SRC, args.path.slice(2)) + (/\.(ts|tsx|json|mjs|js)$/.test(args.path) ? '' : '.ts'),
    }));
  },
};

async function loadTs(relPath) {
  mkdirSync(TSCACHE, { recursive: true });
  const outfile = `${TSCACHE}/${relPath.replace(/[\\/]/g, '_').replace(/\.tsx?$/, '')}.mjs`;
  await esbuild.build({
    entryPoints: [resolve(SRC, relPath)],
    outfile,
    format: 'esm',
    bundle: true,
    platform: 'node',
    plugins: [aliasPlugin],
    logLevel: 'silent',
  });
  return import(pathToFileURL(outfile).href);
}

export async function loadKnowledge() {
  const [apps, industries, modules, competitors, usecases, cityProfiles, trainingCities, curated, money, bofu, bizRes, dtCity] =
    await Promise.all([
      loadTs('data/erp-app-knowledge.ts'),
      loadTs('data/erp-industry-knowledge.ts'),
      loadTs('data/erp-module-knowledge.ts'),
      loadTs('data/dt-competitor-knowledge.ts'),
      loadTs('data/dt-usecase-knowledge.ts'),
      loadTs('data/city-profiles.ts'),
      loadTs('data/training-cities.ts'),
      loadTs('data/curated-cities.ts'),
      loadTs('data/money-pages.ts'),
      loadTs('data/bofu-posts.ts'),
      loadTs('data/business-resources.ts'),
      import(pathToFileURL(resolve(SRC, 'data/dt-city-data.mjs')).href),
    ]);

  const trainingBySlug = {};
  for (const p of Object.values(trainingCities.TRAINING_CITY_PROFILES)) {
    if (p && p.slug) trainingBySlug[p.slug] = p;
  }

  return {
    appKnowledge: apps.appKnowledge,
    industryKnowledge: industries.industryKnowledge,
    moduleKnowledge: modules.moduleKnowledge,
    dtCompetitorKnowledge: competitors.dtCompetitorKnowledge,
    dtUsecaseKnowledge: usecases.dtUsecaseKnowledge,
    ERP_CITY_PROFILES: cityProfiles.ERP_CITY_PROFILES,
    DT_CITY_PROFILES: cityProfiles.DT_CITY_PROFILES,
    CITY_GEO: cityProfiles.CITY_GEO,
    trainingBySlug,
    CURATED_CITY_SLUGS: curated.CURATED_CITY_SLUGS,
    DT_CITY_PAGE_SLUGS: curated.DT_CITY_PAGE_SLUGS,
    ERP_CITY_PAGE_SLUGS: curated.ERP_CITY_PAGE_SLUGS,
    TRAINING_CITY_PAGE_SLUGS: curated.TRAINING_CITY_PAGE_SLUGS,
    CONSULTING_CITY_PAGE_SLUGS: curated.CONSULTING_CITY_PAGE_SLUGS,
    MONEY_PAGES_BY_SLUG: { ...money.MONEY_PAGES_BY_SLUG, ...bofu.BOFU_POSTS_BY_SLUG },
    // ERP Track A resources, reshaped into the money-page contract so the
    // existing generator renders their full content into the static HTML.
    BUSINESS_RESOURCES: Object.fromEntries(
      (bizRes.BUSINESS_RESOURCES || []).map((r) => [
        `resources/${r.slug}`,
        {
          slug: `resources/${r.slug}`,
          title: r.title,
          description: r.description,
          keywords: r.keywords,
          h1: r.h1,
          eyebrow: r.badge,
          subhead: r.lede,
          intro: r.overview.join(' '),
          enquiryVariant: 'erp',
          sections: [
            { h2: 'What it covers', bullets: r.sections },
            { h2: 'How to use it', paragraphs: r.howToUse.map((h) => `${h.h}: ${h.p}`) },
          ],
          faqs: r.faqs,
          related: r.related,
        },
      ]),
    ),
    dtContext: dtCity.digitalTwinLocationContext,
    dtAssets: dtCity.digitalTwinAssets,
    dtIndustries: dtCity.digitalTwinIndustries,
    getFaqsForCity: dtCity.getFaqsForCity,
  };
}

export function cleanupTsCache() {
  try { rmSync(TSCACHE, { recursive: true, force: true }); } catch { /* best effort */ }
}

/* ────────────────────────────────────────────────────────────────────────────
 * 2. Parse App.tsx — route path -> page source file
 * ────────────────────────────────────────────────────────────────────────── */

export function extractAppRoutes() {
  const app = readFileSync(resolve(SRC, 'App.tsx'), 'utf8');

  // const Foo = lazy(() => import("./pages/xyz"));   |   import Foo from "./pages/xyz";
  const componentToFile = new Map();
  for (const m of app.matchAll(/const\s+(\w+)\s*=\s*lazy\(\s*\(\)\s*=>\s*import\(\s*["']\.\/(.+?)["']\s*\)\s*\)/g)) {
    componentToFile.set(m[1], m[2]);
  }
  for (const m of app.matchAll(/^import\s+(\w+)\s+from\s+["']\.\/(pages\/.+?)["']/gm)) {
    componentToFile.set(m[1], m[2]);
  }

  // NB: the element expression contains nested `{}` (`element={<LazyRoute
  // Component={Foo} />}`), so a lazy `...}` match truncates before the closing
  // brace and loses the component name. Bound on the inner `/>` instead.
  const routes = [];
  const routeRe = /<Route\s+path=\{?["']([^"']+)["']\}?([\s\S]{0,500}?)\/>/g;
  for (const m of app.matchAll(routeRe)) {
    const path = m[1];
    const element = m[2];
    const comp =
      element.match(/Component=\{(\w+)\}/)?.[1] ||
      element.match(/element=\{\s*<(\w+)/)?.[1] ||
      null;
    routes.push({ path, component: comp, file: comp ? componentToFile.get(comp) || null : null });
  }
  return routes;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 3. Helpers
 * ────────────────────────────────────────────────────────────────────────── */

const SITE = 'https://atlantisndt.com';

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * HARD POLICY (CLAUDE.md): never publish a price for any Atlantis product or
 * service. Third-party/industry cost context is allowed; anything that reads as
 * an Atlantis price is rewritten to the approved positioning line.
 */
export function sanitizePricing(text) {
  if (!text) return text;
  let out = String(text);
  out = out.replace(
    /(Atlantis[^.$]{0,80}?)\$[\d,.]+\s*(?:k|K|M|million)?\s*(?:\/\s*(?:yr|year|month|mo|user)|per\s+(?:year|month|user|seat))?/g,
    '$1affordable, accessible, fully customizable licensing',
  );
  out = out.replace(
    /\$[\d,.]+\s*(?:k|K|M)?\s*(?:\/\s*(?:yr|year))?\s+(Atlantis[^.]{0,60}?(?:licen[cs]e|platform|subscription|fee))/gi,
    'Affordable, accessible, fully customizable $1',
  );
  return out;
}

/**
 * FAQ shapes differ across the data modules — {question,answer}, {q,a}, and
 * `[question, answer]` tuples in dt-competitor-knowledge. Normalise once so
 * both the rendered HTML and the FAQPage schema stay correct for all of them.
 */
function normaliseFaqs(faqs) {
  if (!faqs || !faqs.length) return [];
  return faqs
    .map((f) => (Array.isArray(f) ? { question: f[0], answer: f[1] } : { question: f.question || f.q, answer: f.answer || f.a }))
    .filter((f) => f.question && f.answer);
}

const H = {
  nav: (links) =>
    `  <header><nav aria-label="Main Navigation">${links
      .map(([href, label]) => `<a href="${href}">${esc(label)}</a>`)
      .join('')}</nav></header>`,
  ul: (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`,
  faq: (faqs) => {
    const list = normaliseFaqs(faqs);
    if (!list.length) return '';
    return `    <section aria-label="Frequently asked questions">
      <h2>Frequently Asked Questions</h2>
      ${list
        .map((f) => `<div><h3>${esc(f.question)}</h3><p>${esc(sanitizePricing(f.answer))}</p></div>`)
        .join('\n      ')}
    </section>`;
  },
};

const faqSchema = (faqs) => {
  const list = normaliseFaqs(faqs);
  if (!list.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: list.slice(0, 10).map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: sanitizePricing(f.answer) },
    })),
  };
};

const SLUG_LABEL_OVERRIDES = {
  uae: 'UAE', usa: 'USA', uk: 'UK', 'saudi-arabia': 'Saudi Arabia', 'st-louis': 'St. Louis',
  'ho-chi-minh': 'Ho Chi Minh City', 'ras-al-khaimah': 'Ras Al Khaimah', 'jebel-ali': 'Jebel Ali',
  'map-ta-phut': 'Map Ta Phut', 'ras-laffan': 'Ras Laffan', 'ras-tanura': 'Ras Tanura',
  'al-zour': 'Al Zour', 'new-york-state': 'New York State', 'pasadena-texas': 'Pasadena, Texas',
  'orange-texas': 'Orange, Texas', 'texas-city': 'Texas City', 'freeport-texas': 'Freeport, Texas',
  'wilmington-california': 'Wilmington, California', 'richmond-california': 'Richmond, California',
  'toledo-ohio': 'Toledo, Ohio', 'hamilton-ontario': 'Hamilton, Ontario', 'linden-nj': 'Linden, NJ',
  'kansas-city': 'Kansas City', 'port-hedland': 'Port Hedland', 'new-plymouth': 'New Plymouth',
  'fort-mcmurray': 'Fort McMurray', 'fort-saskatchewan': 'Fort Saskatchewan', 'saint-john': 'Saint John',
  'port-harcourt': 'Port Harcourt', 'pointe-noire': 'Pointe-Noire', 'la-porte': 'La Porte',
  'east-chicago': 'East Chicago', 'colorado-springs': 'Colorado Springs', 'salina-cruz': 'Salina Cruz',
  'el-segundo': 'El Segundo', 'long-beach': 'Long Beach', 'san-francisco': 'San Francisco',
  'los-angeles': 'Los Angeles', 'new-orleans': 'New Orleans', 'baton-rouge': 'Baton Rouge',
  'corpus-christi': 'Corpus Christi', 'marcus-hook': 'Marcus Hook', 'deer-park': 'Deer Park',
  'sugar-land': 'Sugar Land', 'lake-charles-louisiana': 'Lake Charles, Louisiana',
  'port-arthur-texas': 'Port Arthur, Texas', 'kuala-lumpur': 'Kuala Lumpur',
  'jurong-island': 'Jurong Island', 'abu-dhabi': 'Abu Dhabi', 'andhra-pradesh': 'Andhra Pradesh',
  'tamil-nadu': 'Tamil Nadu', 'west-bengal': 'West Bengal', 'north-dakota': 'North Dakota',
  'north-carolina': 'North Carolina', 'ivory-coast': 'Ivory Coast', 'sri-lanka': 'Sri Lanka',
  'cape-town': 'Cape Town', 'sao-paulo': 'São Paulo', 'rio-de-janeiro': 'Rio de Janeiro',
};

/** Industry acronyms that must never be title-cased into nonsense ("Lng Terminal"). */
const ACRONYMS = new Set([
  'lng', 'lpg', 'ndt', 'nde', 'erp', 'crm', 'cmms', 'eam', 'apm', 'hr', 'ut', 'rt', 'mt', 'pt',
  'vt', 'et', 'paut', 'tofd', 'ffs', 'rbi', 'iot', 'ai', 'bim', 'cad', 'api', 'asme', 'aws',
  'iso', 'sap', 'hse', 'qa', 'qc', 'uae', 'usa', 'uk', 'nz', 'ksa', 'fpso', 'rov', 'roi', 'cui',
  'mfl', 'ili', 'ccs', 'hrsg', 'octg', 'ndts', 'saep', 'nbic', 'psm', 'nadcap', 'cwi',
]);

export function labelFromSlug(slug, geo) {
  if (SLUG_LABEL_OVERRIDES[slug]) return SLUG_LABEL_OVERRIDES[slug];
  if (geo && geo[slug] && geo[slug].city) return geo[slug].city;
  return slug
    .split('-')
    .map((w) =>
      ACRONYMS.has(w.toLowerCase())
        ? w.toUpperCase()
        : w.length <= 2
          ? w.toUpperCase()
          : w.charAt(0).toUpperCase() + w.slice(1),
    )
    .join(' ');
}

/** City + country as the React page file itself declares them (single source of truth). */
export function propsFromPageFile(file) {
  const abs = resolve(SRC, file.endsWith('.tsx') || file.endsWith('.ts') ? file : `${file}.tsx`);
  if (!existsSync(abs)) return null;
  const src = readFileSync(abs, 'utf8');
  const grab = (name) => src.match(new RegExp(`${name}=["']([^"']+)["']`))?.[1] || null;
  return {
    src,
    city: grab('city'),
    country: grab('country'),
    slug: grab('slug'),
    pageTitle: grab('pageTitle'),
    appName: grab('appName'),
    industry: grab('industry'),
    countrySlug: grab('countrySlug'),
  };
}

/** Pull real, rendered content out of a self-contained page component. */
export function extractFromTsx(src) {
  if (!src) return null;
  const seoBlock = src.match(/<SEOHead[\s\S]{0,4000}?\/>/)?.[0] || '';
  const attr = (n) => {
    const m =
      seoBlock.match(new RegExp(`${n}=\\{?["'\`]([\\s\\S]*?)["'\`]\\}?\\s*\\n`)) ||
      seoBlock.match(new RegExp(`${n}=["']([^"']+)["']`));
    return m ? m[1].replace(/\s+/g, ' ').trim() : null;
  };
  const h1 =
    src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1]?.replace(/\{[^}]*\}/g, '').replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim() ||
    null;

  const faqs = [];
  for (const m of src.matchAll(/\{\s*question:\s*"((?:[^"\\]|\\.)*)"\s*,\s*answer:\s*"((?:[^"\\]|\\.)*)"\s*\}/g)) {
    faqs.push({ question: m[1].replace(/\\"/g, '"'), answer: m[2].replace(/\\"/g, '"') });
  }

  // Text actually rendered in the page (not props, not classNames).
  // NB 2026-07-28: the original 80-char paragraph floor left real pages badly
  // under-extracted — /blog/api-510-body-of-knowledge-2026-changes-explained
  // shipped 109 words of prerendered body against 2,110 impressions/90d. These
  // pages carry most of their substance in data arrays and list items, so pull
  // those too and lower the paragraph floor.
  const paras = [];
  for (const m of src.matchAll(/<p[^>]*>([^<{}]{45,})<\/p>/g)) paras.push(m[1].replace(/\s+/g, ' ').trim());
  for (const m of src.matchAll(/<li[^>]*>([^<{}]{45,})<\/li>/g)) paras.push(m[1].replace(/\s+/g, ' ').trim());

  // Long string literals inside top-level data arrays/objects (the tables,
  // checklists and change-lists these pages actually render).
  const dataStrings = [];
  for (const m of src.matchAll(/(?:^|[,{[]\s*)(?:\w+:\s*)?"((?:[^"\\]|\\.){70,600})"/gm)) {
    const v = m[1].replace(/\\"/g, '"').replace(/\s+/g, ' ').trim();
    if (/[a-z]{3}/i.test(v) && !/^https?:/.test(v) && !v.includes('className')) dataStrings.push(v);
  }

  const heads = [];
  for (const m of src.matchAll(/<h2[^>]*>([^<{}]{6,120})<\/h2>/g)) heads.push(m[1].trim());
  for (const m of src.matchAll(/<h3[^>]*>([^<{}]{6,120})<\/h3>/g)) heads.push(m[1].trim());

  return {
    title: attr('title'),
    description: attr('description'),
    canonical: attr('canonical'),
    h1,
    faqs,
    paras: [...new Set(paras)],
    dataStrings: [...new Set(dataStrings)].slice(0, 30),
    heads: [...new Set(heads)],
  };
}

/* ────────────────────────────────────────────────────────────────────────────
 * 4. Body generators — one per page family
 * ────────────────────────────────────────────────────────────────────────── */

const NAV_DT = [['/', 'Home'], ['/digital-twins', 'Digital Twins'], ['/asset-integrity-management-software', 'Asset Integrity Software'], ['/erp', 'ERP'], ['/contact', 'Free Demo']];
const NAV_ERP = [['/', 'Home'], ['/erp', 'ERP'], ['/ndt-inspection-software', 'Inspection Software'], ['/digital-twins', 'Digital Twins'], ['/contact', 'Free Demo']];
const NAV_TRAIN = [['/', 'Home'], ['/training', 'Training'], ['/asnt-certification', 'ASNT'], ['/consulting', 'Consulting'], ['/contact', 'Enquire']];
const NAV_CONSULT = [['/', 'Home'], ['/consulting', 'Consulting'], ['/training', 'Training'], ['/erp', 'ERP'], ['/contact', 'Free Consultation']];

function dtCityBody(k, slug, city, country) {
  const ctx = k.dtContext[slug];
  const assets = k.dtAssets[slug] || [];
  const industries = k.dtIndustries[slug] || [];
  const profile = k.DT_CITY_PROFILES[slug];
  const faqs = k.getFaqsForCity ? k.getFaqsForCity(slug, city) : [];

  const body = `${H.nav(NAV_DT)}
  <main>
    <h1>Digital Twin for Asset Integrity in ${esc(city)} — NDT Data on a Live 3D Model</h1>
    <p><strong>Atlantis NDT Digital Twin</strong> gives integrity teams in ${esc(city)}${country ? `, ${esc(country)}` : ''} one 3D model of the asset with every UT, PAUT, TOFD, RT, MT, PT and ET reading mapped to the exact location it was taken. Corrosion rates trend automatically, API 581 RBI scores update as data lands, and API 579-1/ASME FFS-1 Level 1 and Level 2 assessments run against measured thickness instead of a spreadsheet snapshot.</p>
${ctx ? `    <h2>The ${esc(city)} asset base this is built for</h2>\n    <p>${esc(ctx)}</p>` : ''}
${assets.length ? `    <h2>Asset classes covered in ${esc(city)}</h2>\n    ${H.ul(assets)}` : ''}
${industries.length ? `    <h2>Industries served from ${esc(city)}</h2>\n    ${H.ul(industries)}` : ''}
${profile ? `    <h2>What operators in ${esc(city)} actually get out of it</h2>
    <p>${esc(sanitizePricing(profile.uniqueLocalROI))}</p>
    <h3>Local use cases</h3>
    ${H.ul(profile.localIndustryUseCases || [])}
    <h3>Compliance frameworks this maps to</h3>
    ${H.ul(profile.localCompliance || [])}
    ${profile.localCaseStudy ? `<h3>Case study</h3><p>${esc(sanitizePricing(profile.localCaseStudy))}</p>` : ''}` : ''}
    <h2>How the twin is built</h2>
    <p>Capture the geometry (LiDAR, photogrammetry, drone survey, or import your existing BIM/CAD and isometrics), ingest inspection data over REST API or file drop from any instrument, overlay the governing damage mechanisms per API RP 571, then publish colour-coded remaining-life and RBI views to integrity, maintenance and planning. Records are retained audit-ready under ISO 9001, ISO 17020 and ISO 17025.</p>
    <h2>Integrations</h2>
    <p>SAP PM, Oracle eAM, IBM Maximo, ServiceNow, AVEVA PI, OSIsoft historians, Bentley iTwin, Cognite and Atlantis NDT ERP. Full REST API and bulk data export — you keep your data in a format you can leave with.</p>
${H.faq(faqs)}
    <h2>Book a demo</h2>
    <p>Thirty minutes, walked through your asset class and your integration stack, co-presented by an ASNT NDT Level III. Affordable, accessible, fully customizable — <a href="/contact">request a demo and tailored quote</a>.</p>
    <p>Related: <a href="/digital-twins">Digital Twin platform</a> · <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/digital-twin-roi-calculator">ROI calculator</a> · <a href="/ndt-erp-${slug}">NDT ERP in ${esc(city)}</a> · <a href="/3d-scanning-services">3D scanning &amp; reality capture</a>.</p>
  </main>`;
  return { body, faqs, hasUnique: Boolean(ctx || profile) };
}

function erpCityBody(k, slug, city, country) {
  const profile = k.ERP_CITY_PROFILES[slug];
  const ctx = k.dtContext[slug];
  const industries = k.dtIndustries[slug] || [];
  const faqs = profile?.faqs?.length
    ? profile.faqs
    : [
        {
          question: `Does Atlantis NDT ERP suit an inspection company based in ${city}?`,
          answer: `Yes. The platform ships pre-configured for inspection and testing businesses — ASNT SNT-TC-1A and ISO 9712 certification tracking with automatic lapse lockout, equipment calibration due-date control, API 510/570/653 inspection scheduling, work-order routing across multiple crews and sites, and client-ready reporting. Regional settings, currencies, tax treatment and language for ${country || city} are configured during onboarding rather than sold as an add-on module.`,
        },
        {
          question: `How long does implementation take for a mid-size ${city} inspection contractor?`,
          answer: `A typical 20–60 technician inspection business goes live in 6–10 weeks: week 1–2 discovery and data migration mapping, week 3–5 configuration of certification, calibration and work-order modules, week 6–7 pilot with one crew and one client contract, week 8–10 rollout and training. Historic certification records, calibration certificates and client/asset registers are migrated from spreadsheets or the incumbent system as part of the implementation.`,
        },
        {
          question: `Can it replace the spreadsheets we use for technician certification and equipment calibration?`,
          answer: `That is the most common reason inspection companies adopt it. Every technician's method-level qualification, vision-exam date, practical and general exam records and on-the-job hours sit against a written practice, and any expiry blocks assignment to a job automatically. Equipment calibration works the same way — an out-of-calibration flaw detector, thickness gauge or reference block cannot be dispatched. That removes the two failure modes that most often cost inspection firms a client audit.`,
        },
      ];

  const body = `${H.nav(NAV_ERP)}
  <main>
    <h1>NDT Inspection Management ERP in ${esc(city)} — Certification, Calibration and Work Orders in One System</h1>
    <p><strong>Atlantis NDT ERP</strong> is inspection-management software for NDT service companies, inspection contractors and QA departments operating in ${esc(city)}${country ? `, ${esc(country)}` : ''}. It replaces the spreadsheet stack most inspection businesses run on: technician certification currency, equipment calibration control, inspection scheduling, multi-crew work orders, client asset registers, job costing and audit-ready document retention — on one Odoo-based platform with 30+ business apps behind it.</p>
${ctx ? `    <h2>The ${esc(city)} market this is configured for</h2>\n    <p>${esc(ctx)}</p>` : ''}
${industries.length ? `    <h2>Industries served from ${esc(city)}</h2>\n    ${H.ul(industries)}` : ''}
${profile ? `    <h2>What ${esc(city)} inspection companies get out of it</h2>
    <p>${esc(sanitizePricing(profile.uniqueLocalROI))}</p>
    <h3>Local use cases</h3>
    ${H.ul(profile.localIndustryUseCases || [])}
    <h3>Compliance and client-audit frameworks</h3>
    ${H.ul(profile.localCompliance || [])}
    ${profile.localCaseStudy ? `<h3>Case study</h3><p>${esc(sanitizePricing(profile.localCaseStudy))}</p>` : ''}` : ''}
    <h2>Modules inspection companies actually switch for</h2>
    <ul>
      <li><a href="/erp-modules/certification-tracking">Certification tracking</a> — SNT-TC-1A / ISO 9712 / NAS 410 currency with automatic dispatch lockout on lapse.</li>
      <li><a href="/erp-modules/calibration-management">Calibration management</a> — instrument, block and probe calibration intervals with ISO 17025 traceability chains.</li>
      <li><a href="/erp-modules/inspection-scheduling">Inspection scheduling</a> — API 510/570/653 due dates driven by measured corrosion rate, not a fixed calendar.</li>
      <li><a href="/erp-modules/work-order-management">Work order management</a> — multi-crew, multi-site dispatch with mobile offline field capture.</li>
      <li><a href="/erp-modules/document-control">Document control</a> — procedures, written practices and technique sheets under ISO 9001 revision control.</li>
      <li><a href="/erp-modules/asset-management">Asset management</a> — client asset registers with full inspection history per CML.</li>
    </ul>
    <h2>Integrations</h2>
    <p>Runs alongside SAP, Oracle, Maximo, NetSuite, Dynamics 365, QuickBooks and Xero, and connects to the <a href="/digital-twins">Atlantis Digital Twin platform</a> so inspection results feed the 3D asset model without re-keying.</p>
${H.faq(faqs)}
    <h2>See it on your own workflow</h2>
    <p>Free 30-minute walkthrough using your actual job types, certification matrix and client reporting formats. Affordable, accessible, fully customizable — <a href="/contact">request a demo and tailored quote</a>.</p>
    <p>Related: <a href="/erp">Atlantis NDT ERP</a> · <a href="/ndt-inspection-software">NDT inspection software</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/digital-twin-${slug}">Digital Twin in ${esc(city)}</a> · <a href="/best-ndt-reporting-software-2026">NDT reporting software</a>.</p>
  </main>`;
  return { body, faqs, hasUnique: Boolean(ctx || profile) };
}

function trainingCityBody(k, slug) {
  const p = k.trainingBySlug[slug];
  const city = p?.city || labelFromSlug(slug, k.CITY_GEO);
  const country = p?.country || '';
  const faqs = [
    {
      question: `Where can I take ${p?.primaryCert || 'ASNT NDT'} training in ${city}?`,
      answer: `Atlantis NDT runs ${p?.primaryCert || 'ASNT Level I/II/III'} and ${p?.secondaryCert || 'API certification'} programmes for candidates in ${city}${country ? `, ${country}` : ''}, delivered as in-person classroom, on-site corporate cohorts at your facility, and blended online theory with supervised practical. ${p?.certPathwayNote || 'Courses follow ASNT SNT-TC-1A and ISO 9712 syllabi with practical hours logged against a written practice.'}`,
    },
    {
      question: `Which certification should an inspector in ${city} take first?`,
      answer: `${p?.certPathwayNote || `Most candidates start with a method-level Level II in UT, RT, MT or PT, then add API 510, API 570 or API 653 once they have documented inspection experience. ${city} employers most commonly ask for ${p?.primaryCert || 'ASNT Level II'} on the job spec.`}`,
    },
    {
      question: `Does Atlantis run corporate on-site NDT training in ${city}?`,
      answer: `Yes — on-site cohorts are run at client facilities in and around ${city} for groups, including method-specific practical sessions using your own equipment and specimens so the training maps to the work your crews actually do. Written practice review and Level III oversight can be bundled with the programme.`,
    },
  ];
  const body = `${H.nav(NAV_TRAIN)}
  <main>
    <h1>NDT Training and Certification in ${esc(city)}${country ? ` — ${esc(country)}` : ''}</h1>
    <p>Atlantis NDT delivers ASNT and ISO 9712 aligned NDT training in ${esc(city)}: <a href="/ndt-level-1-training">Level I</a>, <a href="/ndt-level-2-training">Level II</a> and <a href="/asnt-level-iii-training">Level III</a> programmes across ultrasonic, radiographic, magnetic particle, penetrant, eddy current and visual testing, plus API 510, API 570 and API 653 inspector preparation. Courses are authored and supervised by ASNT NDT Level III professionals.</p>
${p?.localContext ? `    <h2>The ${esc(city)} inspection market</h2>\n    <p>${esc(p.localContext)}</p>` : ''}
${p?.primaryCert ? `    <h2>Certifications most in demand in ${esc(city)}</h2>\n    <p>Primary: <strong>${esc(p.primaryCert)}</strong>. Secondary: ${esc(p.secondaryCert || 'API inspector certifications')}. ${p.otherCerts?.length ? `Also frequently requested: ${esc(p.otherCerts.join(', '))}.` : ''}</p>` : ''}
${p?.examCenters?.length ? `    <h2>Exam centres and practical facilities</h2>\n    ${H.ul(p.examCenters.map((c) => (typeof c === 'string' ? c : `${c.name}${c.bodies?.length ? ` (${c.bodies.join(', ')})` : ''}`)))}` : ''}
${p?.certPathwayNote ? `    <h2>Recommended certification pathway</h2>\n    <p>${esc(p.certPathwayNote)}</p>` : ''}
    <h2>Delivery formats</h2>
    <ul>
      <li>Classroom cohorts with supervised practical hours logged to SNT-TC-1A requirements.</li>
      <li>On-site corporate training at your facility using your equipment and specimens.</li>
      <li>Blended online theory through <a href="/lms">Atlantis LMS</a> with in-person practical assessment.</li>
    </ul>
${p?.siblings?.length ? `    <h2>NDT training across ${esc(country || 'the region')}</h2>\n    <p>Atlantis NDT also runs training programmes in these nearby markets:</p>\n    <ul>${p.siblings.map((s) => `<li><a href="/ndt-training-${esc(s.slug)}">${esc(s.label)}</a></li>`).join('')}</ul>` : ''}
${H.faq(faqs)}
    <p>Related: <a href="/training">NDT training programmes</a> · <a href="/asnt-certification">ASNT certification guide</a> · <a href="/api-510-certification">API 510</a> · <a href="/api-570-certification">API 570</a> · <a href="/api-653-certification">API 653</a> · <a href="/consulting">ASNT Level III consulting</a>. <a href="/contact">Ask about the next cohort in ${esc(city)}</a>.</p>
  </main>`;
  return { body, faqs, hasUnique: Boolean(p?.localContext) };
}

function consultingCityBody(k, slug, cityLabel) {
  const city = cityLabel || labelFromSlug(slug, k.CITY_GEO);
  const ctx = k.dtContext[slug];
  const faqs = [
    {
      question: `What does an outsourced ASNT Level III do for an inspection company in ${city}?`,
      answer: `An outsourced Level III authors and approves your written practice, writes and qualifies NDT procedures for each method you offer, examines and certifies your Level I and Level II personnel, validates equipment and techniques, and signs off the technical elements a client audit will test. For inspection contractors in ${city} it means you can bid and execute multi-method scopes without carrying a full-time Level III on payroll.`,
    },
    {
      question: `Which codes and client audit regimes does the consulting cover in ${city}?`,
      answer: `ASNT SNT-TC-1A, ANSI/ASNT CP-189, NAS 410 and ISO 9712 for personnel; ASME Section V, Section VIII and Section IX, AWS D1.1, API 510/570/653/1104 and ISO 17635/17636/17640 for procedures; ISO 9001, ISO 17020 and ISO 17025 for the quality system. Operator-specific approvals — Aramco, ADNOC, QatarEnergy, KOC, Petronas, Shell and similar — are prepared against the client's own vendor-qualification checklist.`,
    },
    {
      question: `How fast can procedures and written practices be turned around?`,
      answer: `Most procedure reviews and written-practice updates are returned signed and stamped within 2 to 5 business days. Larger engagements — a full multi-method programme build, an ISO 17020 accreditation package, or expert-witness support on a failure investigation — are scoped individually. Engagements run per-project or on retainer.`,
    },
    {
      question: `Is an "NDT Level 3 consultant" in ${city} the same as an NDT Level III consultant?`,
      answer: `Yes — "Level 3" and "Level III" describe the identical ASNT/ISO 9712 certification tier, used interchangeably across the industry. An NDT Level 3 consultant and an NDT Level III consultant in ${city} hold the same qualification and provide the same scope of consulting services described above.`,
    },
  ];
  const body = `${H.nav(NAV_CONSULT)}
  <main>
    <h1>NDT Consulting and ASNT Level III Services in ${esc(city)}</h1>
    <p>Atlantis NDT provides independent <strong>ASNT Level III consulting</strong> to inspection contractors, owner-operators and EPCs in ${esc(city)}: written-practice authoring, procedure development and approval across UT, PAUT, TOFD, RT, MT, PT, ET and VT, personnel qualification and certification, technique validation, risk-based inspection programme design per API 580/581, and fitness-for-service assessment per API 579-1/ASME FFS-1.</p>
${ctx ? `    <h2>The ${esc(city)} asset base and what it demands</h2>\n    <p>${esc(ctx)}</p>` : ''}
    <h2>Engagement types</h2>
    <ul>
      <li>Outsourced Level III of record — named on your written practice, available for audits.</li>
      <li>Procedure and written-practice authoring to SNT-TC-1A, CP-189, NAS 410 and ISO 9712.</li>
      <li>Personnel examination and certification, including practical and specific exams.</li>
      <li>RBI programme design (API 580/581) and FFS assessment (API 579-1/ASME FFS-1).</li>
      <li>ISO 17020 / ISO 17025 accreditation support and internal audit.</li>
      <li>Failure investigation, root-cause analysis and expert-witness support.</li>
    </ul>
${H.faq(faqs)}
    <p>Related: <a href="/consulting">NDT consulting services</a> · <a href="/consulting/asnt-level-iii-consulting-services">ASNT Level III consulting</a> · <a href="/training">NDT training</a> · <a href="/erp">inspection management ERP</a> · <a href="/digital-twins">digital twin for asset integrity</a>. <a href="/contact">Request a consultation</a>.</p>
  </main>`;
  return { body, faqs, hasUnique: Boolean(ctx) };
}

function knowledgeBody(entry, { h1, intro, nav, related }) {
  const faqs = entry.faqs || [];
  return {
    body: `${H.nav(nav)}
  <main>
    <h1>${esc(h1)}</h1>
    <p>${esc(sanitizePricing(intro))}</p>
    ${entry.overview ? `<h2>Overview</h2><p>${esc(sanitizePricing(entry.overview))}</p>` : ''}
    ${entry.ndtAngle ? `<h2>Why inspection and testing businesses run it differently</h2><p>${esc(sanitizePricing(entry.ndtAngle))}</p>` : ''}
    ${entry.capabilities?.length ? `<h2>Capabilities</h2>${H.ul(entry.capabilities)}` : ''}
    ${entry.workflow ? `<h2>How the workflow runs</h2><p>${esc(sanitizePricing(entry.workflow))}</p>` : ''}
    ${entry.compliance?.length ? `<h2>Standards and compliance covered</h2>${H.ul(entry.compliance)}` : ''}
    ${entry.integrations?.length ? `<h2>Integrations</h2>${H.ul(entry.integrations)}` : ''}
    ${entry.roi ? `<h2>Measured impact</h2><p>${esc(sanitizePricing(entry.roi))}</p>` : ''}
${H.faq(faqs)}
    <p>${related}</p>
  </main>`,
    faqs,
    hasUnique: true,
  };
}

/**
 * Buyer-intent money pages (Phase 1). Rendered from the identical object the
 * React MoneyPageTemplate consumes, so prerendered HTML and hydrated DOM carry
 * the same headings, prose, tables and FAQ — no cloaking risk, no drift.
 */
function moneyPageBody(page) {
  const sections = page.sections
    .map((s) => {
      const paras = (s.paragraphs || []).map((p) => `<p>${esc(sanitizePricing(p))}</p>`).join('\n      ');
      const bullets = s.bullets?.length ? H.ul(s.bullets.map(sanitizePricing)) : '';
      const table = s.table
        ? `<table><caption>${esc(s.table.caption || s.h2)}</caption><thead><tr>${s.table.headers
            .map((h) => `<th>${esc(h)}</th>`)
            .join('')}</tr></thead><tbody>${s.table.rows
            .map((r) => `<tr>${r.map((c) => `<td>${esc(sanitizePricing(c))}</td>`).join('')}</tr>`)
            .join('')}</tbody></table>`
        : '';
      return `    <section>
      <h2>${esc(s.h2)}</h2>
      ${paras}
      ${bullets}
      ${table}
    </section>`;
    })
    .join('\n');

  const related = page.related.map((r) => `<a href="${r.href}">${esc(r.label)}</a>`).join(' · ');
  const nav = page.slug.includes('digital') || page.slug.includes('asset-integrity') ? NAV_DT : NAV_ERP;

  return {
    body: `${H.nav(nav)}
  <main>
    <h1>${esc(page.h1)}</h1>
    <p><strong>${esc(sanitizePricing(page.subhead))}</strong></p>
    <p>${esc(sanitizePricing(page.intro))}</p>
${sections}
${H.faq(page.faqs)}
    <section>
      <h2>See it running on your own workflow</h2>
      <p>Thirty minutes, your job types and your reporting formats, co-presented by an ASNT NDT Level III. Affordable, accessible, fully customizable — <a href="/contact">request a demo and a tailored quote</a>.</p>
      <p>Related: ${related}</p>
    </section>
  </main>`,
    faqs: page.faqs,
    hasUnique: true,
  };
}

function usecaseBody(k, slug) {
  const u = k.dtUsecaseKnowledge[slug];
  if (!u) return null;
  const label = labelFromSlug(slug);
  const faqs = u.faqs || [];
  return {
    body: `${H.nav(NAV_DT)}
  <main>
    <h1>${esc(label)} Digital Twin — Damage Mechanisms, Inspection Data and Remaining Life in One Model</h1>
    <p>How the Atlantis NDT digital twin is configured for ${esc(label.toLowerCase())} assets: which damage mechanisms drive the inspection plan, how NDT data lands on the model, which codes govern the assessment, and what changes for the integrity team once the twin is live.</p>
    <h2>Damage mechanisms that govern the inspection plan</h2>
    <p>${esc(sanitizePricing(u.damageMechanisms))}</p>
    <h2>How the twin is built and kept current</h2>
    <p>${esc(sanitizePricing(u.workflow))}</p>
    ${u.keyAssets?.length ? `<h2>Key assets modelled</h2>${H.ul(u.keyAssets)}` : ''}
    ${u.codes?.length ? `<h2>Governing codes and standards</h2>${H.ul(u.codes)}` : ''}
    ${u.roi ? `<h2>What it changes operationally</h2><p>${esc(sanitizePricing(u.roi))}</p>` : ''}
${H.faq(faqs)}
    <p>Related: <a href="/digital-twins">Digital Twin platform</a> · <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/digital-twin-roi-calculator">ROI calculator</a> · <a href="/digital-twin-vendor-comparison">vendor comparison</a>. <a href="/contact">Book a demo</a>.</p>
  </main>`,
    faqs,
    hasUnique: true,
  };
}

function competitorBody(k, key) {
  const c = k.dtCompetitorKnowledge[key];
  if (!c) return null;
  const faqs = c.faqs || [];
  const rows = (c.comparisonRows || [])
    .map((r) => `<tr><td>${esc(r.factor || r.dimension || r.criterion || r.label || '')}</td><td>${esc(sanitizePricing(r.atlantis || ''))}</td><td>${esc(sanitizePricing(r.competitor || ''))}</td></tr>`)
    .join('');
  return {
    body: `${H.nav(NAV_DT)}
  <main>
    <h1>Atlantis Digital Twin vs ${esc(c.competitorName)} — Honest Comparison for NDT and Asset Integrity Teams</h1>
    <p>A side-by-side comparison for integrity and inspection teams evaluating ${esc(c.competitorName)} against the Atlantis NDT digital twin — including where ${esc(c.competitorName)} is the better choice.</p>
    <h2>Where ${esc(c.competitorName)} sits in the market</h2>
    <p>${esc(sanitizePricing(c.positioning))}</p>
    ${c.whereCompetitorWins?.length ? `<h2>Where ${esc(c.competitorName)} wins</h2>${H.ul(c.whereCompetitorWins)}` : ''}
    ${c.whereAtlantisWins ? `<h2>Where Atlantis wins</h2><p>${esc(sanitizePricing(c.whereAtlantisWins))}</p>` : ''}
    ${c.ndtGaps?.length ? `<h2>Gaps NDT teams hit with ${esc(c.competitorName)}</h2>${H.ul(c.ndtGaps)}` : ''}
    ${rows ? `<h2>Feature comparison</h2><table><thead><tr><th>Dimension</th><th>Atlantis Digital Twin</th><th>${esc(c.competitorName)}</th></tr></thead><tbody>${rows}</tbody></table>` : ''}
    ${c.migrationPath ? `<h2>Migration path</h2><p>${esc(sanitizePricing(c.migrationPath))}</p>` : ''}
${H.faq(faqs)}
    <p>Related: <a href="/digital-twin-vendor-comparison">full vendor comparison</a> · <a href="/digital-twins">Atlantis Digital Twin</a> · <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/digital-twin-roi-calculator">ROI calculator</a>. <a href="/contact">Book a technical demo</a>.</p>
  </main>`,
    faqs,
    hasUnique: true,
  };
}

/** Generic fallback: rebuild the page body from what the component itself renders. */
function tsxBody(extracted, path, nav) {
  if (!extracted) return null;
  const { h1, faqs, paras, heads, title, dataStrings = [] } = extracted;
  const headline = h1 || title || labelFromSlug(path.split('/').pop());
  const paraHtml = paras.slice(0, 20).map((p) => `<p>${esc(sanitizePricing(p))}</p>`).join('\n    ');
  const headHtml = heads.slice(0, 14).map((hh) => `<li>${esc(hh)}</li>`).join('');
  const dataHtml = dataStrings.length
    ? `<h2>Key points covered</h2><ul>${dataStrings.map((d) => `<li>${esc(sanitizePricing(d))}</li>`).join('')}</ul>`
    : '';
  const enough = paras.join(' ').length + dataStrings.join(' ').length > 400 || faqs.length >= 3;
  // Phase 4 cluster-linking (2026-08-11): this generic fallback rebuilds body
  // text straight from <p>/<li> extraction, which drops JSX <Link> elements
  // (e.g. the RelatedGuidesBlock cards on /asnt-level-iii-training) — add the
  // same cross-links here for the one path this pass is known to win on, so
  // the crawler-facing HTML still matches what the live page links to.
  const extraRelated = path === '/asnt-level-iii-training'
    ? '<p>See also: <a href="/ndt-level-1-training">NDT Level 1 Training</a> · <a href="/ndt-level-2-training">NDT Level 2 Training</a> · <a href="/asnt-certification">ASNT certification guide</a> · <a href="/ndt-training-online">Online NDT Training</a> · <a href="/ndt-training-near-me">NDT Training Near Me</a>.</p>'
    : path === '/blog/ndt-salary-guide-2026-global'
    ? '<p>See also: <a href="/blog/ndt-training-no-experience-what-you-need">NDT training with no experience</a> · <a href="/blog/ndt-apprenticeship-on-the-job-training-paths-us">NDT apprenticeship / on-the-job training paths</a> · <a href="/blog/which-ndt-method-should-you-learn-first">which NDT method to learn first</a>.</p>'
    : '';
  return {
    body: `${H.nav(nav)}
  <main>
    <article>
      <h1>${esc(headline)}</h1>
      ${paraHtml}
      ${headHtml ? `<h2>What this page covers</h2><ul>${headHtml}</ul>` : ''}
      ${dataHtml}
${H.faq(faqs)}
      ${extraRelated}
      <p>Related: <a href="/erp">Atlantis NDT ERP</a> · <a href="/digital-twins">Digital Twin platform</a> · <a href="/ndt-inspection-software">NDT inspection software</a> · <a href="/best-ndt-reporting-software-2026">NDT reporting software</a> · <a href="/consulting">ASNT Level III consulting</a> · <a href="/training">NDT training</a>. <a href="/contact">Book a free consultation</a>.</p>
    </article>
  </main>`,
    faqs,
    hasUnique: enough,
  };
}

/* ────────────────────────────────────────────────────────────────────────────
 * 5. Route builder
 * ────────────────────────────────────────────────────────────────────────── */

const SKIP_PATHS = new Set(['/404', '*', '/admin/login', '/admin/dashboard']);
const SKIP_PREFIX = ['/admin', '/embed'];

/**
 * @param {Set<string>} existingPaths paths prerender already emits
 * @returns {{routes: Array, report: object}}
 */
export async function buildReconciledRoutes(existingPaths, opts = {}) {
  const k = opts.knowledge || (await loadKnowledge());
  const appRoutes = extractAppRoutes();
  const report = { total: appRoutes.length, generated: 0, indexed: 0, noindexed: 0, skipped: 0, unresolved: [] };
  const out = [];

  for (const r of appRoutes) {
    const path = r.path.replace(/\/$/, '') || '/';
    if (path.includes(':') || path.includes('*')) { report.skipped++; continue; }
    if (SKIP_PATHS.has(path) || SKIP_PREFIX.some((p) => path.startsWith(p))) { report.skipped++; continue; }
    if (existingPaths.has(path)) continue;

    const built = buildOne(k, path, r);
    if (!built) { report.unresolved.push(path); continue; }
    out.push(built);
    report.generated++;
    if (built.noindexFollow) report.noindexed++; else report.indexed++;
  }
  return { routes: out, report, knowledge: k };
}

function buildOne(k, path, appRoute) {
  const fileProps = appRoute.file ? propsFromPageFile(appRoute.file) : null;
  const seg = path.split('/').filter(Boolean);
  let gen = null;
  let title = null;
  let description = null;
  let curatedSlug = null;
  let curatedSet = null;

  // ── Phase 1 buyer-intent money pages ─────────────────────────────────
  const money = k.MONEY_PAGES_BY_SLUG?.[path.slice(1)] || k.BUSINESS_RESOURCES?.[path.slice(1)];
  if (money) {
    gen = moneyPageBody(money);
    title = money.title;
    description = money.description;
  }

  // ── Digital Twin city ────────────────────────────────────────────────
  let m = gen ? null : path.match(/^\/digital-twin-([a-z0-9-]+)$/);
  if (m && !k.dtUsecaseKnowledge[m[1]]) {
    const slug = m[1];
    const city = fileProps?.city || labelFromSlug(slug, k.CITY_GEO);
    const country = fileProps?.country || '';
    gen = dtCityBody(k, slug, city, country);
    title = `Digital Twin for Asset Integrity in ${city} 2026 — NDT Data on a Live 3D Model`;
    description = `Atlantis NDT digital twin for ${city}${country ? `, ${country}` : ''}: UT/PAUT/RT readings mapped to a 3D asset model, API 581 RBI scoring and API 579 fitness-for-service on measured thickness. Book a 30-minute demo.`;
    curatedSlug = slug; curatedSet = k.DT_CITY_PAGE_SLUGS;
  }

  // ── Digital Twin use case / asset class ──────────────────────────────
  if (!gen && (m = path.match(/^\/digital-twins\/([a-z0-9-]+)$/))) {
    gen = usecaseBody(k, m[1]);
    if (gen) {
      const label = labelFromSlug(m[1]);
      title = `${label} Digital Twin 2026 — Damage Mechanisms, NDT Data and Remaining Life`;
      description = `How a digital twin is configured for ${label.toLowerCase()} assets: governing damage mechanisms per API RP 571, inspection-data ingestion, code coverage and remaining-life output. Free technical demo.`;
    }
  }

  // ── DT competitor comparison ─────────────────────────────────────────
  if (!gen && (m = path.match(/^\/compare\/atlantis-dt-vs-([a-z0-9-]+)$/))) {
    gen = competitorBody(k, m[1]);
    if (gen) {
      const c = k.dtCompetitorKnowledge[m[1]];
      title = `Atlantis Digital Twin vs ${c.competitorName} 2026 — Honest Feature Comparison`;
      description = `${c.competitorName} compared with the Atlantis NDT digital twin for asset integrity teams: feature matrix, NDT data gaps, migration path and where ${c.competitorName} is the better choice.`;
    }
  }

  // ── ERP city ─────────────────────────────────────────────────────────
  if (!gen && (m = path.match(/^\/ndt-erp-([a-z0-9-]+)$/))) {
    const slug = m[1];
    const city = fileProps?.city || labelFromSlug(slug, k.CITY_GEO);
    const country = fileProps?.country || '';
    gen = erpCityBody(k, slug, city, country);
    title = `NDT Inspection Management ERP in ${city} 2026 — Certification, Calibration, Work Orders`;
    description = `Inspection management software for NDT companies in ${city}${country ? `, ${country}` : ''}: SNT-TC-1A certification currency, ISO 17025 calibration control, API 510/570/653 scheduling and multi-crew work orders. Free demo.`;
    curatedSlug = slug; curatedSet = k.ERP_CITY_PAGE_SLUGS;
  }

  // ── Training city ────────────────────────────────────────────────────
  if (!gen && (m = path.match(/^\/ndt-training-([a-z0-9-]+)$/))) {
    const slug = m[1];
    gen = trainingCityBody(k, slug);
    const city = k.trainingBySlug[slug]?.city || labelFromSlug(slug, k.CITY_GEO);
    title = `NDT Training and Certification in ${city} 2026 — ASNT, ISO 9712, API 510/570/653`;
    description = `ASNT and ISO 9712 aligned NDT training in ${city}: Level I/II/III across UT, RT, MT, PT, ET and VT plus API inspector preparation. Classroom, on-site corporate and blended delivery.`;
    curatedSlug = slug; curatedSet = k.TRAINING_CITY_PAGE_SLUGS;
  }

  // ── Consulting city ──────────────────────────────────────────────────
  if (!gen && (m = path.match(/^\/consulting\/ndt-consulting-([a-z0-9-]+)$/)) ) {
    const slug = m[1];
    gen = consultingCityBody(k, slug, fileProps?.city);
    const city = fileProps?.city || labelFromSlug(slug, k.CITY_GEO);
    title = `NDT Consulting and ASNT Level III Services in ${city} 2026`;
    description = `Independent ASNT Level III consulting in ${city}: written practices, procedure approval, personnel certification, RBI per API 580/581 and FFS per API 579. Request a consultation.`;
    curatedSlug = slug; curatedSet = k.CONSULTING_CITY_PAGE_SLUGS;
  }

  // ── ERP app / module / industry knowledge pages ──────────────────────
  if (!gen && seg[0] === 'erp' && seg.length === 2) {
    const rest = seg[1];
    const appKey = Object.keys(k.appKnowledge).find((a) => rest.startsWith(`${a}-`) || rest === a);
    const indKey = Object.keys(k.industryKnowledge).find((i) => rest.includes(i));
    const entry = (appKey && k.appKnowledge[appKey]) || (indKey && k.industryKnowledge[indKey]) || null;
    if (entry) {
      const appLabel = appKey ? labelFromSlug(appKey) : 'Inspection management';
      const indLabel = indKey ? labelFromSlug(indKey) : null;
      const tail = rest.replace(new RegExp(`^${appKey || ''}-?`), '').replace(/^for-/, '');
      const scope = indLabel || (tail ? labelFromSlug(tail) : 'NDT inspection companies');
      gen = knowledgeBody(entry, {
        h1: `${appLabel} for ${scope} — Atlantis NDT ERP`,
        intro: entry.headline,
        nav: NAV_ERP,
        related: `Related: <a href="/erp">Atlantis NDT ERP</a> · <a href="/ndt-inspection-software">NDT inspection software</a> · <a href="/erp-modules">ERP modules</a> · <a href="/erp-industries">ERP by industry</a> · <a href="/digital-twins">Digital Twin platform</a>. <a href="/contact">Request a demo and tailored quote</a>.`,
      });
      title = `${appLabel} for ${scope} 2026 — Atlantis NDT ERP | Free Demo`;
      description = `${entry.headline}`.slice(0, 300);
    }
  }
  if (!gen && seg[0] === 'erp-modules' && seg.length === 2) {
    const modKey = Object.keys(k.moduleKnowledge).find((x) => seg[1].startsWith(x));
    if (modKey) {
      const entry = k.moduleKnowledge[modKey];
      const tail = seg[1].slice(modKey.length).replace(/^-(for-)?/, '');
      const scope = tail ? labelFromSlug(tail) : 'NDT inspection companies';
      gen = knowledgeBody(entry, {
        h1: `${labelFromSlug(modKey)} for ${scope} — Atlantis NDT ERP`,
        intro: entry.headline,
        nav: NAV_ERP,
        related: `Related: <a href="/erp-modules">all ERP modules</a> · <a href="/erp">Atlantis NDT ERP</a> · <a href="/inspection-management-software">inspection management software</a>. <a href="/contact">Book a demo</a>.`,
      });
      title = `${labelFromSlug(modKey)} for ${scope} 2026 — Atlantis NDT ERP`;
      description = `${entry.headline}`.slice(0, 300);
    }
  }
  if (!gen && seg[0] === 'erp-industries' && seg.length === 2) {
    const indKey = Object.keys(k.industryKnowledge).find((x) => seg[1].startsWith(x));
    if (indKey) {
      const entry = k.industryKnowledge[indKey];
      const tail = seg[1].slice(indKey.length).replace(/^-/, '');
      const scope = tail ? labelFromSlug(tail, k.CITY_GEO) : 'global operations';
      gen = knowledgeBody(entry, {
        h1: `ERP for ${labelFromSlug(indKey)} — ${scope}`,
        intro: entry.headline,
        nav: NAV_ERP,
        related: `Related: <a href="/erp-industries">ERP by industry</a> · <a href="/erp">Atlantis NDT ERP</a> · <a href="/ndt-inspection-software">NDT inspection software</a>. <a href="/contact">Book a demo</a>.`,
      });
      title = `ERP for ${labelFromSlug(indKey)} in ${scope} 2026 | Atlantis NDT`;
      description = `${entry.headline}`.slice(0, 300);
    }
  }

  // ── Generic: rebuild from the component's own rendered content ────────
  if (!gen && fileProps?.src) {
    const extracted = extractFromTsx(fileProps.src);
    const nav = path.startsWith('/blog') ? [['/', 'Home'], ['/blog', 'Blog'], ['/erp', 'ERP'], ['/digital-twins', 'Digital Twins'], ['/contact', 'Free Consultation']]
      : path.includes('erp') ? NAV_ERP
      : path.includes('digital-twin') || path.includes('compare') ? NAV_DT
      : path.includes('training') ? NAV_TRAIN
      : NAV_CONSULT;
    gen = tsxBody(extracted, path, nav);
    if (gen) {
      title = extracted.title || `${gen ? labelFromSlug(seg[seg.length - 1]) : ''} | Atlantis NDT`;
      description = extracted.description || null;
    }
  }

  if (!gen) return null;

  // ── Index policy: unique research + curated slug, else noindex,follow ─
  const curatedOk = curatedSet ? curatedSet.has(curatedSlug) : true;
  const shouldIndex = gen.hasUnique && curatedOk;

  const route = {
    path,
    title: sanitizePricing(title || `Atlantis NDT`),
    description: sanitizePricing(description || 'Atlantis NDT — inspection management software, digital twins for asset integrity, NDT training and ASNT Level III consulting.'),
    canonical: `${SITE}${path}`,
    bodyContent: gen.body,
  };
  if (!shouldIndex) { route.noindex = true; route.noindexFollow = true; }
  const sd = faqSchema(gen.faqs);
  if (sd) route.structuredData = sd;
  return route;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 6. Data-driven dynamic routes (glossary, standards)
 * ────────────────────────────────────────────────────────────────────────────
 * SECOND INSTANCE OF THE SAME BUG, found 2026-07-28.
 * `/glossary/:slug` and `/standards/:slug` are DYNAMIC route patterns, so the
 * drift guard skips them — but the concrete URLs behind them are real, are in
 * sitemap-glossary.xml (219 URLs), and were serving the SPA shell with
 * canonical="https://atlantisndt.com/". Live-verified:
 *   /glossary/cswip                       -> canonical = homepage (211 impr/90d, pos 8.3)
 *   /glossary/phased-array-ultrasonic-testing-paut -> homepage (223 impr/90d, pos 20)
 *   /standards/asme-b31-3                 -> homepage (not in any sitemap either)
 * Glossary entries carry real definitions and standards entries carry scope,
 * requirements and revision history, so both prerender into substantive pages.
 */

const GLOSSARY_NAV = [['/', 'Home'], ['/glossary', 'NDT Glossary'], ['/standards', 'Standards'], ['/training', 'Training'], ['/contact', 'Contact']];
const STANDARDS_NAV = [['/', 'Home'], ['/standards', 'Standards'], ['/glossary', 'Glossary'], ['/consulting', 'Consulting'], ['/contact', 'Contact']];

function loadJson(rel) {
  try {
    return JSON.parse(readFileSync(resolve(SRC, rel), 'utf8'));
  } catch {
    return null;
  }
}

import { buildGlossaryDepth, glossaryFaqs, glossaryDepthCoverage } from './glossary-depth.mjs';

const asArray = (data) => (Array.isArray(data) ? data : data && typeof data === 'object' ? Object.values(data)[0] : []);

/** Strip HTML that lives inside the JSON definition fields, keeping the text. */
const stripTags = (html) => String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

export function buildGlossaryRoutes() {
  const entries = asArray(loadJson('data/glossary.json')) || [];
  const bySlug = new Map(entries.map((e) => [e.slug, e]));
  return entries
    .filter((e) => e && e.slug && e.term)
    .map((e) => {
      // Related terms rendered WITH their own short definitions rather than as a
      // bare link list. Verification showed the link-only version left 168
      // glossary pages under 250 words; inlining the definitions makes the page
      // genuinely more useful to a reader looking up an unfamiliar term, using
      // content that already exists rather than padding.
      const relatedEntries = (e.relatedTerms || []).map((s) => bySlug.get(s)).filter(Boolean);
      const related = relatedEntries
        .map(
          (r) =>
            `<li><a href="/glossary/${r.slug}"><strong>${esc(r.term)}</strong></a> — ${esc(stripTags(r.shortDefinition).slice(0, 260))}</li>`,
        )
        .join('');
      // Sibling terms in the same category give the page a real internal-link
      // spine; glossary entries were otherwise near-orphans.
      const siblings = entries
        .filter((x) => x.category === e.category && x.slug !== e.slug && !(e.relatedTerms || []).includes(x.slug))
        .slice(0, 10)
        .map((x) => `<a href="/glossary/${x.slug}">${esc(x.term.split('(')[0].trim())}</a>`)
        .join(' · ');
      const blogs = (e.relatedBlogs || [])
        .map((s) => `<a href="/blog/${s}">${esc(s.replace(/-/g, ' '))}</a>`)
        .join(' · ');
      const definition = e.definition || '';
      // Authored, term-specific depth. Empty for terms with no researched facts —
      // padding is what put these pages at position 60 in the first place.
      const depth = buildGlossaryDepth(e);
      const faqs = [
        { question: `What does ${e.term.split('(')[0].trim()} mean in NDT?`, answer: stripTags(e.shortDefinition || definition).slice(0, 900) },
        // Only Q&A that the page actually renders (CLAUDE.md 20.8).
        ...glossaryFaqs(e),
      ];
      const body = `${H.nav(GLOSSARY_NAV)}
  <main>
    <article>
      <h1>${esc(e.term)}</h1>
      <p><strong>${esc(e.shortDefinition || '')}</strong></p>
      ${definition}
      ${depth}
      ${related ? `<h2>Related terms</h2><ul>${related}</ul>` : ''}
      ${blogs ? `<h2>Further reading</h2><p>${blogs}</p>` : ''}
      ${siblings ? `<h2>More ${esc(e.category || 'NDT')} terms</h2><p>${siblings}</p>` : ''}
      <h2>Where this comes up in practice</h2>
      <p>Terms like this one appear in three places that matter commercially: the written practice that governs how your personnel are qualified, the procedures and technique sheets that define how an examination is actually performed, and the evidence an auditor or client asks for when they want to know why an inspection was accepted. Getting the terminology right is the easy part; being able to produce the qualification record, the calibration traceability and the procedure revision that applied on the day of the inspection is the part that decides audits.</p>
      <p>Atlantis NDT provides <a href="/training">NDT training and certification</a> against ASNT SNT-TC-1A and ISO 9712, <a href="/consulting">ASNT Level III consulting</a> for written practices and procedure approval, <a href="/inspection-management-software">inspection management software</a> that holds qualification, calibration and procedure-revision evidence in recoverable form, and an <a href="/asset-integrity-management-software">asset integrity platform</a> that binds inspection results to the asset they describe. Browse the full <a href="/glossary">NDT glossary</a> or <a href="/contact">ask a Level III directly</a>.</p>
    </article>
  </main>`;
      return {
        path: `/glossary/${e.slug}`,
        title: `${e.term.split('(')[0].trim()} — NDT Glossary Definition | Atlantis NDT`,
        description: (stripTags(e.shortDefinition) || `${e.term} explained for NDT inspectors and engineers.`).slice(0, 300),
        canonical: `${SITE}/glossary/${e.slug}`,
        bodyContent: body,
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          name: e.term,
          description: stripTags(e.shortDefinition).slice(0, 500),
          inDefinedTermSet: { '@type': 'DefinedTermSet', name: 'Atlantis NDT Glossary', url: `${SITE}/glossary` },
          url: `${SITE}/glossary/${e.slug}`,
        },
        _faqs: faqs,
      };
    });
}

export function buildStandardsRoutes() {
  const entries = asArray(loadJson('data/standards.json')) || [];
  return entries
    .filter((e) => e && e.slug && (e.code || e.displayTitle))
    .map((e) => {
      const list = (arr, heading) =>
        Array.isArray(arr) && arr.length
          ? `<h2>${heading}</h2>${H.ul(arr.map((x) => (typeof x === 'string' ? x : x.title || x.name || JSON.stringify(x))))}`
          : '';
      const body = `${H.nav(STANDARDS_NAV)}
  <main>
    <article>
      <h1>${esc(e.displayTitle || e.code)}</h1>
      <p><strong>${esc(e.shortDescription || '')}</strong></p>
      ${e.scope ? `<h2>Scope</h2><p>${esc(stripTags(e.scope))}</p>` : ''}
      ${list(e.keyRequirements, 'Key requirements')}
      ${list(e.bestPractices, 'Practical application')}
      ${list(e.applicableMethods, 'NDT methods it governs')}
      ${list(e.applicableCertifications, 'Certifications that reference it')}
      ${e.issuingBody ? `<h2>Issuing body</h2><p>${esc(e.issuingBody)}</p>` : ''}
      ${Array.isArray(e.revisionsHistory) && e.revisionsHistory.length ? `<h2>Revision history</h2>${H.ul(e.revisionsHistory.map((r) => (typeof r === 'string' ? r : `${r.year || r.edition || ''} — ${r.summary || r.change || ''}`)))}` : ''}
      ${Array.isArray(e.relatedStandards) && e.relatedStandards.length ? `<h2>Related standards</h2><p>${e.relatedStandards.map((s) => `<a href="/standards/${typeof s === 'string' ? s : s.slug}">${esc(typeof s === 'string' ? s : s.code || s.slug)}</a>`).join(' · ')}</p>` : ''}
      <h2>Applying this in an inspection programme</h2>
      <p>Code compliance is only demonstrable if the evidence behind it is: the procedure revision in force, the inspector's certification state and the instrument's calibration status at the time of test. Atlantis NDT provides <a href="/consulting">ASNT Level III consulting</a> for procedure and written-practice work against this code, <a href="/training">training</a> toward the certifications that reference it, and <a href="/inspection-management-software">inspection management software</a> that keeps that evidence recoverable years later. <a href="/contact">Request a consultation</a>.</p>
    </article>
  </main>`;
      return {
        path: `/standards/${e.slug}`,
        title: `${e.code || e.displayTitle} 2026 — Scope, Key Requirements and Practical Application | Atlantis NDT`,
        description: (stripTags(e.shortDescription) || `${e.code} explained: scope, key requirements and how it is applied in inspection practice.`).slice(0, 300),
        canonical: `${SITE}/standards/${e.slug}`,
        bodyContent: body,
      };
    });
}

/* ────────────────────────────────────────────────────────────────────────────
 * 7. Thin-body enrichment
 * ────────────────────────────────────────────────────────────────────────────
 * Some generators push routes with a title, description and h1 but a near-empty
 * bodyContent. Those pages prerender as ~100-word shells even though the React
 * component behind them renders a full article — the same class of defect the
 * Round-7 audit found on top-traffic pages. Worst live example found 2026-07-28:
 * /blog/api-510-body-of-knowledge-2026-changes-explained, 2,110 impressions/90d
 * against 109 prerendered words.
 *
 * This pass leaves rich bodies alone and only rebuilds bodies below the
 * threshold, sourcing text from the page component itself so static HTML and
 * hydrated DOM still agree.
 */
export function enrichThinRoutes(routes, { minChars = 1400 } = {}) {
  const appRoutes = extractAppRoutes();
  const fileByPath = new Map();
  for (const r of appRoutes) {
    const p = r.path.replace(/\/$/, '') || '/';
    if (r.file) fileByPath.set(p, r.file);
  }

  let enriched = 0;
  for (const route of routes) {
    if (route.path.includes(':') || route.path.includes('*')) continue;
    const bodyLen = (route.bodyContent || '').length;
    if (bodyLen >= minChars) continue;
    const file = fileByPath.get(route.path);
    if (!file) continue;
    const props = propsFromPageFile(file);
    if (!props?.src) continue;
    const extracted = extractFromTsx(props.src);
    if (!extracted) continue;

    const nav = route.path.startsWith('/blog')
      ? [['/', 'Home'], ['/blog', 'Blog'], ['/training', 'Training'], ['/erp', 'ERP'], ['/contact', 'Free Consultation']]
      : route.path.includes('erp')
        ? NAV_ERP
        : route.path.includes('digital-twin') || route.path.includes('compare')
          ? NAV_DT
          : route.path.includes('training') || route.path.includes('certification')
            ? NAV_TRAIN
            : NAV_CONSULT;

    const built = tsxBody(extracted, route.path, nav);
    if (!built) continue;
    // Only replace when the rebuilt body is materially richer than what shipped.
    if (built.body.length <= bodyLen * 1.3) continue;
    route.bodyContent = built.body;
    if (!route.structuredData) {
      const sd = faqSchema(built.faqs);
      if (sd) route.structuredData = sd;
    }
    enriched++;
  }
  return enriched;
}

/* ────────────────────────────────────────────────────────────────────────────
 * 8. Build guard — never let App.tsx and prerender drift apart again
 * ────────────────────────────────────────────────────────────────────────── */

export function assertNoDrift(finalPaths, { allow = [] } = {}) {
  const appRoutes = extractAppRoutes();
  const missing = [];
  for (const r of appRoutes) {
    const p = r.path.replace(/\/$/, '') || '/';
    if (p.includes(':') || p.includes('*')) continue;
    if (SKIP_PATHS.has(p) || SKIP_PREFIX.some((x) => p.startsWith(x))) continue;
    if (allow.includes(p)) continue;
    if (!finalPaths.has(p)) missing.push(p);
  }
  if (missing.length) {
    const sample = missing.slice(0, 25).join('\n  ');
    throw new Error(
      `\n❌ ROUTE DRIFT: ${missing.length} route(s) declared in src/App.tsx have no prerendered HTML.\n` +
        `   Those URLs would serve the SPA shell with canonical="${SITE}/" and be dropped by Google as\n` +
        `   homepage duplicates. Add a generator in scripts/route-reconcile.mjs for:\n  ${sample}\n`,
    );
  }
  return true;
}
