/**
 * Money pages — 2026-10-12 release (SEO audit actions 3 and 9). Crawler-HTML layer.
 * ─────────────────────────────────────────────────────────────────────────────
 * The audit found /erp at ~7,000 words in 45 sections and /consulting at ~4,650
 * words with no images, video or worked example, while the pages that outrank them
 * run 500–2,500 words. What was missing was focus and proof, not length.
 *
 * One source for both layers: src/data/money-pages-2026-10.json (copy), the founder
 * Person node in src/data/author-anoop-profile.json, case-stories-2026-10.json,
 * product-screenshots.json, product-videos.json and erp-decision.json. The React
 * pages (Erp.tsx, ConsultingServices.tsx, ndt-consulting-level-iii.tsx and the two
 * written-practice pages) render the same data in the same order.
 *
 * Hook (prerender.mjs render loop, after applySprintRoute, before applyVideoRoute):
 *   route = applyMoneyPagesRoute(route);
 * It is the LAST body writer for /erp and /consulting: it rebuilds <main> in buyer
 * order and replaces their structured data. The global blocks that run after it
 * (coverage, keyword links, next steps) still append before </main>; the video and
 * screenshot blocks are placed here, so their own passes see the marker and skip.
 * The ERP plans section is reserved with ERP_PLANS_SLOT and filled from
 * approved-erp-pricing.json by injectApprovedPricing() in writeRoute — this module
 * never touches pricing data (pricing gate PLACEMENT rule).
 *
 * /erp           what you get → job flow → real screens → trailer → case story →
 *                USA/Canada plans → demo/quote CTA → enquiry form → configurator → FAQ
 * /consulting    what every engagement delivers → four paths → sectors served (no client names) →
 *                worked SNT-TC-1A written-practice engagement → trailer → completed
 *                engagements → fit → CTA → FAQ → regions + state directory
 * Level III page outsourced / outside agency Level III H1 + intro, a query-verbatim
 *                "What is an outsourced NDT Level III?" answer, the unevidenced SLA
 *                paragraph replaced; NAS 410 associate wording already lives in its
 *                §49 coverage block and is not duplicated.
 * Written-practice pages: one contextual "outsourced Level III" link.
 * Founder Person (one @id) on all three money pages and the author page.
 */
import { readFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { renderErpWorkflowHtml, renderErpConfiguratorHtml, renderErpEnquiryHtml } from './erp-rebuild-route.mjs';
import { applyScreenshotsRoute, screenshotStats } from './product-screenshots.mjs';
import { applyVideoRoute, videoStats } from './product-videos.mjs';
import { level3PathsHtml, SPRINT_H1 } from './sprint-2026-10.mjs';
import { FOUNDER_PERSON, AUTHOR_ID } from './author-entity.mjs';
import { level3SectionsHtml, level3ProfessionalServiceNode } from '../src/data/rank-wave14-2026-10.mjs'; // 2026-10-17 §58: named Level III, deliverables, process, choosing

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const load = (p) => JSON.parse(readFileSync(join(ROOT, p), 'utf-8'));
const MP = load('src/data/money-pages-2026-10.json');
const SECTORS = load('src/data/client-sectors-2026-10.json'); // 2026-10-12 (owner): no client names or logos
const META = load('src/data/money-page-meta.json');
const STORIES = load('src/data/case-stories-2026-10.json').stories;
const SITE = 'https://atlantisndt.com';
const ORG_ID = `${SITE}/#organization`;

export const MONEY_MARKER = 'data-money-page="2026-10"';
export const ERP_PLANS_SLOT = '<!--erp-plans-slot-->'; // same string as approved-pricing.mjs
export const moneyPagesStats = { erp: 0, consulting: 0, level3: 0, writtenPractice: 0, author: 0 };

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const href = (h) => esc(h);
const a = (l) => `<a href="${href(l.href)}">${esc(l.label)}</a>`;
const ul = (items) => `<ul>${items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`;
const storyBy = (slug) => STORIES.find((s) => s.slug === slug);
const storyTitle = (s) => s.h1.replace(/^Case study:\s*/i, '').replace(/^./, (c) => c.toUpperCase());
const inner = (bodyWithMain) => bodyWithMain.replace(/^[\s\S]*?<main[^>]*>/i, '').replace(/<\/main>[\s\S]*$/i, '');

/** The screenshot gallery / video facade for a path, rendered by their own modules. */
function blockFor(path, apply) {
  return inner(apply({ path, bodyContent: '<main></main>' }).bodyContent);
}

/** Intrinsic size of a PNG in public/ (logos), so the crawler <img> reserves space. */
function pngSize(publicPath) {
  try {
    const f = join(ROOT, 'public', publicPath);
    if (!existsSync(f)) return null;
    const b = readFileSync(f);
    if (b.readUInt32BE(12) !== 0x49484452) return null; // IHDR
    return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  } catch { return null; }
}

function faqHtml(faq) {
  return `
    <section id="faq" ${MONEY_MARKER}>
      <h2>Frequently asked questions</h2>
      ${faq.map((f) => `<h3>${esc(f.q)}</h3>\n      <p>${esc(f.a)}</p>`).join('\n      ')}
    </section>`;
}

/* ── structured data (kept identical to src/lib/founder-person.ts) ───────────── */
function pageNodes(path, name, aboutId) {
  const url = `${SITE}${path}`;
  return [
    FOUNDER_PERSON,
    { '@type': 'Organization', '@id': ORG_ID, founder: { '@id': AUTHOR_ID } },
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name, about: { '@id': aboutId }, reviewedBy: { '@id': AUTHOR_ID }, publisher: { '@id': ORG_ID } },
  ];
}
const faqNode = (path, faq) => ({
  '@type': 'FAQPage',
  '@id': `${SITE}${path}#faq`,
  mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
});

/* ── /erp ─────────────────────────────────────────────────────────────────── */
const ERP_NAV = '  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/erp">ERP</a><a href="/erp/apps">ERP Apps</a><a href="/erp/pricing">Pricing</a><a href="/contact?service=erp">Contact</a></nav></header>';

export function erpMainHtml() {
  const e = MP.erp;
  const d = e.deliver;
  const items = d.items.map((it) => `
      <h3>${esc(it.h)}</h3>
      <p>${esc(it.p)}</p>
      <p>${it.links.map(a).join(' · ')}</p>`).join('');
  const st = storyBy(e.caseStory.slug);
  const c = e.cta;
  return `
    <h1>${esc(e.h1)}</h1>
    <p>${esc(e.intro)}</p>
    <p>${a(e.ctaPrimary)} · ${a(e.ctaSecondary)}. ${esc(e.ctaNote)} ${a(e.ctaTrial)}</p>
    <section id="${d.id}" ${MONEY_MARKER}>
      <h2>${esc(d.heading)}</h2>
      <p>${esc(d.intro)}</p>${items}
    </section>${renderErpWorkflowHtml()}
${blockFor(e.path, applyScreenshotsRoute)}${blockFor(e.path, applyVideoRoute)}
    <section id="${e.caseStory.id}" ${MONEY_MARKER}>
      <h2>${esc(e.caseStory.heading)}</h2>
      <p><strong>${esc(st.sector)}:</strong> ${esc(st.card)}</p>
      <p>${esc(e.caseStory.why)}</p>
      <p><a href="/case-studies/${st.slug}">${esc(e.caseStory.linkLabel)}: ${esc(storyTitle(st))}</a></p>
    </section>
    ${ERP_PLANS_SLOT}
    <section id="${c.id}" ${MONEY_MARKER}>
      <h2>${esc(c.heading)}</h2>
      <p>${esc(c.p)}</p>
      <p>${a(c.primary)} · ${a(c.secondary)}. ${esc(c.note)}</p>
    </section>${renderErpEnquiryHtml()}${renderErpConfiguratorHtml()}${faqHtml(e.faq)}
    <section id="erp-go-deeper" ${MONEY_MARKER}>
      <h2>${esc(e.goDeeper.heading)}</h2>
      <ul>${e.goDeeper.links.map((l) => `<li>${a(l)}</li>`).join('')}</ul>
    </section>
`;
}

function erpStructuredData() {
  const e = MP.erp;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': `${SITE}/erp#software`,
        name: 'Atlantis NDT ERP',
        description: e.intro,
        applicationCategory: 'BusinessApplication',
        applicationSubCategory: 'Enterprise Resource Planning',
        operatingSystem: 'Web',
        url: `${SITE}/erp`,
        featureList: e.deliver.items.map((i) => i.h),
        provider: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
      },
      faqNode('/erp', e.faq),
      ...pageNodes('/erp', META['/erp'].title, `${SITE}/erp#software`),
    ],
  };
}

/* ── /consulting ──────────────────────────────────────────────────────────── */
function existingHeader(body) {
  const m = String(body || '').match(/^\s*<header[\s\S]*?<\/header>/i);
  return m ? m[0].replace(/^\s*/, '  ') : '  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/consulting">NDT Consulting</a><a href="/training">Training</a><a href="/contact">Contact</a></nav></header>';
}
function geoDirectory(body, family) {
  const re = new RegExp(`<section class="geo-hub-directory" data-geo-family="${family}">[\\s\\S]*?<\\/section>`, 'i');
  const m = String(body || '').match(re);
  return m ? `\n    ${m[0]}` : '';
}

export function consultingMainHtml(geoHtml = '') {
  const c = MP.consulting;
  const g = c.engagement;
  const sectors = SECTORS.items.map((x) => `<li>${esc(x)}</li>`).join('');
  const stories = c.stories.slugs.map(storyBy).filter(Boolean)
    .map((s) => `<li><a href="/case-studies/${s.slug}">${esc(storyTitle(s))}</a>. <strong>${esc(s.sector)}:</strong> ${esc(s.card)}</li>`).join('');
  const steps = g.timeline.steps.map((s, i) => `<tr><td>${i + 1}</td><td>${esc(s.h)}</td><td>${esc(s.p)}</td></tr>`).join('');
  return `
    <h1>${esc(c.h1)}</h1>
    <section data-citation-block="answer" aria-label="Direct answer"><p>${esc(c.answer)}</p><p><strong>Source:</strong> ${esc(c.answerSource)}</p></section>
    <p><strong>${esc(c.kicker)}.</strong> ${esc(c.intro)}</p>
    <p>${esc(c.ledBy.text)} <a href="${href(c.ledBy.href)}">${esc(c.ledBy.label)}</a>.</p>
    <p>${a(c.ctaPrimary)} · ${a(c.ctaSecondary)} · ${a(c.ctaTertiary)}</p>
    <section id="${c.delivers.id}" ${MONEY_MARKER}>
      <h2>${esc(c.delivers.heading)}</h2>
      ${ul(c.delivers.items)}
    </section>${level3PathsHtml()}${consultingByCodeHtml()}
    <section id="client-logos" ${MONEY_MARKER}>
      <h2>${esc(SECTORS.heading)}</h2>
      <p>${esc(SECTORS.sub)}</p>
      <ul>${sectors}</ul>
    </section>
    <section id="${g.id}" ${MONEY_MARKER}>
      <h2>${esc(g.heading)}</h2>
      <p>${esc(g.intro)}</p>
      <h3>${esc(g.scope.h)}</h3>
      <p>${esc(g.scope.p)}</p>
      <h3>${esc(g.provides.h)}</h3>
      ${ul(g.provides.items)}
      <h3>${esc(g.deliverables.h)}</h3>
      ${ul(g.deliverables.items)}
      <h3>${esc(g.timeline.h)}</h3>
      <table><caption>${esc(g.timeline.caption)}</caption><thead><tr><th>Step</th><th>Stage</th><th>What happens</th></tr></thead><tbody>${steps}</tbody></table>
      <p>${esc(g.timeline.note)}</p>
      <h3>${esc(g.stays.h)}</h3>
      <p>${esc(g.stays.p)}</p>
      <p>${a(g.cta)}</p>
    </section>
${blockFor(c.path, applyVideoRoute)}
    <section id="${c.stories.id}" ${MONEY_MARKER}>
      <h2>${esc(c.stories.heading)}</h2>
      <p>${esc(c.stories.intro)}</p>
      <ul>${stories}</ul>
    </section>
    <section id="${c.fit.id}" ${MONEY_MARKER}>
      <h2>${esc(c.fit.heading)}</h2>
      <p>${esc(c.fit.intro)}</p>
      ${ul(c.fit.items)}
      <h3>${esc(c.fit.clientsHeading)}</h3>
      ${ul(c.fit.clients)}
      <h3>${esc(c.fit.deliveryHeading)}</h3>
      ${ul(c.fit.delivery)}
    </section>
    <section id="${c.cta.id}" ${MONEY_MARKER}>
      <h2>${esc(c.cta.heading)}</h2>
      <p>${esc(c.cta.p)}</p>
      <p>${a(c.cta.primary)}</p>
    </section>${faqHtml(c.faq)}
    <section id="${c.regions.id}" ${MONEY_MARKER}>
      <h2>${esc(c.regions.heading)}</h2>
      <p>${esc(c.regions.p)}</p>
      <ul>${c.regions.links.map((l) => `<li>${a(l)}</li>`).join('')}</ul>
    </section>${geoHtml}
`;
}

/* 2026-10-18 consulting teardown: "Consulting by programme and code" (both layers read MP.consultingByCode). */
export function consultingByCodeHtml() {
  const b = MP.consultingByCode;
  if (!b) return '';
  return `
    <section id="${b.id}" ${MONEY_MARKER}>
      <h2>${esc(b.heading)}</h2>
      ${b.paragraphs.map((p) => `<p>${mdInline(p)}</p>`).join('\n      ')}
      <p><strong>Sources:</strong> ${esc(b.source)}</p>
    </section>`;
}
const mdInline = (s) => esc(s).replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, (_m, t, h) => `<a href="${h}">${t}</a>`);

function consultingStructuredData() {
  const c = MP.consulting;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ProfessionalService',
        '@id': `${SITE}/consulting#service`,
        name: 'Atlantis NDT — ASNT Level III consulting',
        description: c.intro,
        url: `${SITE}/consulting`,
        provider: { '@id': ORG_ID },
        serviceType: ['ASNT Level III NDT consulting', 'NDT written practice development', 'NDT procedure development and approval', 'NDT audit readiness'],
        areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'Canada' }, { '@type': 'Place', name: 'Worldwide' }],
      },
      faqNode('/consulting', c.faq),
      ...pageNodes('/consulting', META['/consulting'].title, `${SITE}/consulting#service`),
    ],
  };
}

/* ── Level III page (targeted edits; the rest of the page is untouched) ─────── */
export function level3BlockHtml() {
  const l = MP.level3;
  return `
    <section id="${l.qa.id}" data-citation-block="answer" ${MONEY_MARKER}>
      <h2>${esc(l.qa.h2)}</h2>
      <p>${esc(l.qa.answer)}</p>
      ${l.qa.more.map((p) => `<p>${esc(p)}</p>`).join('\n      ')}
      <p>${esc(l.qa.founder)} <a href="/authors/anoop-rayavarapu">About the founder</a>.</p>
    </section>
    <section id="level-iii-scope" ${MONEY_MARKER}>
      <h2>${esc(l.covers.h2)}</h2>
      <p>${esc(l.covers.p)}</p>
      <p>See also: ${l.covers.links.map(a).join(', ')}.</p>
    </section>
    ${level3SectionsHtml(l, MONEY_MARKER)}`;
}

function patchLevel3(route) {
  const l = MP.level3;
  let b = route.bodyContent;
  b = b.replace(/<h1([^>]*)>[\s\S]*?<\/h1>/i, (_m, attrs) => `<h1${attrs}>${esc(l.h1)}</h1>`);
  // Intro: the paragraph straight after the H1 (said "Our ASNT Level III professionals").
  b = b.replace(/(<\/h1>\s*)<p>[\s\S]*?<\/p>/i, (_m, pre) => `${pre}<p>${esc(l.intro)}</p>${level3BlockHtml()}`);
  // Superseded by the scope section above: NAS 410 written practices were listed as
  // if Atlantis held NAS 410 Level 3 itself, and a "2 to 5 business days" SLA had no evidence.
  b = b.replace(/\s*<h2>What our NDT Level III consulting services cover<\/h2>\s*<p>[\s\S]*?<\/p>/i, '');
  b = b.replace(/\s*<h2>Outsourced Level III with a clear SLA<\/h2>\s*<p>[\s\S]*?<\/p>/i, '');
  const sd = route.structuredData ? JSON.parse(JSON.stringify(route.structuredData)) : null;
  const nodes = [
    {
      '@type': 'Service',
      '@id': `${SITE}${l.path}#service`,
      name: 'Outsourced ASNT Level III consulting',
      serviceType: 'ASNT Level III consulting (outside agency Level III)',
      description: l.qa.answer,
      url: `${SITE}${l.path}`,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Place', name: 'Worldwide' },
    },
    level3ProfessionalServiceNode(l, { site: SITE, orgId: ORG_ID, authorId: AUTHOR_ID }),
    ...pageNodes(l.path, META[l.path].title, `${SITE}${l.path}#service`),
  ];
  let structuredData;
  if (!sd) structuredData = { '@context': 'https://schema.org', '@graph': nodes };
  else if (Array.isArray(sd['@graph'])) structuredData = { ...sd, '@graph': [...sd['@graph'].filter((n) => !(n && n['@id'] === AUTHOR_ID)), ...nodes] };
  else structuredData = { '@context': 'https://schema.org', '@graph': [sd, ...nodes] };
  return { ...route, bodyContent: b, structuredData };
}

/* ── written-practice pages: one contextual "outsourced Level III" link ─────── */
export function writtenPracticeLinkHtml() {
  const w = MP.writtenPracticeLink;
  return `<p ${MONEY_MARKER}>${esc(w.before)}<a href="${href(w.href)}">${esc(w.anchor)}</a>${esc(w.after)}</p>`;
}
const WP_AFTER = {
  '/resources/ndt-written-practice-template': /<p>Atlantis NDT can develop a fully customized Written Practice[\s\S]*?<\/p>/,
};
function patchWrittenPractice(route) {
  const re = WP_AFTER[route.path];
  let b = route.bodyContent;
  const html = writtenPracticeLinkHtml();
  if (re && re.test(b)) b = b.replace(re, (m) => `${m}\n    ${html}`);
  else b = b.replace(/(<h1[^>]*>[\s\S]*?<\/h1>\s*<p>[\s\S]*?<\/p>)/i, (m) => `${m}\n    ${html}`);
  return { ...route, bodyContent: b };
}

/* ── author page: the same Person node as the money pages ─────────────────── */
function patchAuthor(route) {
  const sd = route.structuredData;
  if (!sd || !Array.isArray(sd['@graph'])) return route;
  const graph = sd['@graph'].map((n) => (n && n['@type'] === 'Person' && n['@id'] === AUTHOR_ID ? FOUNDER_PERSON : n));
  return { ...route, structuredData: { ...sd, '@graph': graph } };
}

/** Last body writer for the money pages. Idempotent (marker check). */
export function applyMoneyPagesRoute(route) {
  if (!route || !route.path || typeof route.bodyContent !== 'string') return route;
  const p = route.path;
  if (p === '/authors/anoop-rayavarapu') { moneyPagesStats.author++; return patchAuthor(route); }
  if (route.bodyContent.includes(MONEY_MARKER)) return route;
  if (p === MP.erp.path) {
    moneyPagesStats.erp++;
    return { ...route, bodyContent: `${ERP_NAV}\n  <main>${erpMainHtml()}  </main>`, structuredData: erpStructuredData() };
  }
  if (p === MP.consulting.path) {
    moneyPagesStats.consulting++;
    const body = `${existingHeader(route.bodyContent)}\n  <main>${consultingMainHtml(geoDirectory(route.bodyContent, 'consulting'))}  </main>`;
    return { ...route, bodyContent: body, structuredData: consultingStructuredData() };
  }
  if (p === MP.level3.path) { moneyPagesStats.level3++; return patchLevel3(route); }
  if (MP.writtenPracticeLink.pages.includes(p)) { moneyPagesStats.writtenPractice++; return patchWrittenPractice(route); }
  return route;
}

/* ── copy guard ───────────────────────────────────────────────────────────── */
const STANDARDS = /\b(?:ANSI\/ASNT\s+)?(?:SNT-TC-1A|CP-189|ISO(?:\/IEC)?\s?\d{4,5}(?::\d{4})?|API\s?\d{3}|AWS D1\.\d|NAS\s?410|EN\s?4179)\b|\b3D\b/g;
export function assertMoneyPagesClean(knownPaths) {
  const errs = [];
  const all = JSON.stringify(MP);
  if (/[$£€₹]\s?\d|\b(?:USD|INR|AED|SAR|CAD)\s?\d|\bper (?:day|hour)\b|\bday[- ]rate\b/i.test(all)) errs.push('price pattern in money-pages copy');
  if (/revolutionary|world-class|first-ever|industry-leading|\bleading provider/i.test(all.replace(/"logos":\{[\s\S]*?\]\}/, ''))) errs.push('hype word in money-pages copy');
  const copyOf = (v, k = '') => (typeof v === 'string' ? (k === 'href' || k === 'path' || k === 'slug' || k === 'id' ? [] : [v])
    : Array.isArray(v) ? v.flatMap((x) => copyOf(x)) : v && typeof v === 'object' ? Object.entries(v).flatMap(([kk, x]) => copyOf(x, kk)) : []);
  for (const t of copyOf(MP.erp)) if (/\d/.test(t.replace(STANDARDS, '').replace(/\b14-day\b/g, ''))) errs.push(`numeral in ERP copy: ${t.slice(0, 80)}`);
  for (const k of ['erp', 'consulting']) if (MP[k].h1 !== SPRINT_H1[MP[k].path]) errs.push(`${k} H1 differs from SPRINT_H1`);
  if (/\bET\b/.test(MP.level3.qa.founder) || /\bNAS\s?410\b/.test(MP.level3.qa.founder)) errs.push('founder line names ET or NAS 410');
  if (MP.level3.expert && (/\bET\b|eddy|six methods|1[2-9]\+ years/i.test(MP.level3.expert.p) || !/UT, RT, MT, PT and VT/.test(MP.level3.expert.p) || /NAS\s?410/.test(MP.level3.expert.p))) errs.push('Level III expert block: founder credential wording');
  if (MP.level3.process && /within \d|\bdays?\b|\bweeks?\b|\b24\s*h/i.test(JSON.stringify(MP.level3.process))) errs.push('Level III process: no turnaround promises');
  const p = FOUNDER_PERSON;
  if (/NAS\s?410|\bET\b|Eddy|\d{2,}\s?(?:years|yrs)/i.test(JSON.stringify(p).replace(/11\+ years/, ''))) errs.push('founder Person carries a non-approved fact');
  for (const k of ['/erp', '/consulting', MP.level3.path]) {
    const m = META[k];
    if (!m || m.title.length > 60 || m.description.length < 140 || m.description.length > 155) errs.push(`meta geometry ${k}`);
  }
  // 2026-10-18 consulting teardown: the title leads with the head term and the 'outside NDT Level 3 consultant' phrasing.
  if (!/^ASNT Level III Consulting\b/.test(META[MP.level3.path].title) || !/outside NDT Level 3 consultant/i.test(META[MP.level3.path].title)) errs.push('Level III title lost ASNT Level III Consulting / outside NDT Level 3 consultant');
  if (/\bLevel III Consulting\b/.test(MP.consulting.h1)) errs.push('/consulting H1 competes with the Level III owner head term');
  for (const slug of [MP.erp.caseStory.slug, ...MP.consulting.stories.slugs]) if (!storyBy(slug)) errs.push(`unknown case story ${slug}`);
  if (knownPaths) {
    const before = [screenshotStats.pages, videoStats.pages]; // blockFor() counts; this render is a check, not a page
    const html = erpMainHtml() + consultingMainHtml() + level3BlockHtml() + writtenPracticeLinkHtml() + consultingByCodeHtml();
    [screenshotStats.pages, videoStats.pages] = before;
    for (const m of html.matchAll(/href="(\/[^"#?]*)/g)) {
      const t = m[1].replace(/\/$/, '') || '/';
      if (/\.[a-z0-9]{2,5}$/i.test(t)) { if (!existsSync(join(ROOT, 'public', t))) errs.push(`file not found: ${t}`); continue; }
      if (!knownPaths.has(t)) errs.push(`link target not built: ${t}`);
    }
  }
  if (errs.length) throw new Error(`money-pages-2026-10:\n  ${[...new Set(errs)].join('\n  ')}`);
  return true;
}
