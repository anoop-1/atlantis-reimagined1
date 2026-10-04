/**
 * cwi-certification-routes — crawler layer for /training/cwi-training-{city}.
 *
 * 2026-10-04: these 20 pages used to present Atlantis NDT as delivering "CWI
 * Certification Training" (Course schema, "our curriculum", cohorts, enrol).
 * Owner rule: Atlantis trains to ASNT SNT-TC-1A only — never CWI, API, ISO 9712,
 * PCN or CSWIP. Owner rule too: never remove pages, and /training/cwi-training-tampa
 * ranks for "certified welding inspector tampa". So the URLs stay and the pages
 * are reframed as honest information pages about the AWS CWI credential, with
 * Atlantis's real offer (ASNT NDT training + Level III services) as the CTA.
 *
 * Content lives in src/data/cwi-certification-info.json, which the React page
 * (src/components/CwiCertificationInfoPage.tsx) renders too, so title, H1 and
 * body are identical in both layers. Schema: WebPage + FAQPage + BreadcrumbList
 * only — no Course, no Offer.
 */
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
export const CWI_INFO = JSON.parse(readFileSync(join(__dirname, '..', 'src', 'data', 'cwi-certification-info.json'), 'utf8'));

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function cwiFill(text, city) {
  return String(text)
    .replace(/\{city\}/g, city.name)
    .replace(/\{state\}/g, city.state)
    .replace(/\{context\}/g, city.context);
}

/** Title must stay <= 60 chars; drop "in" for long city names. */
export function cwiTitle(city) {
  const long = cwiFill(CWI_INFO.titleLong, city);
  return long.length <= 60 ? long : cwiFill(CWI_INFO.titleShort, city);
}

export function buildCwiCertificationRoute(citySlug, SITE_URL) {
  const city = CWI_INFO.cities.find((c) => c.slug === citySlug);
  if (!city) return null;
  const path = `/training/cwi-training-${city.slug}`;
  const url = `${SITE_URL}${path}`;
  const f = (t) => cwiFill(t, city);
  const title = cwiTitle(city);
  const h1 = f(CWI_INFO.h1);
  const description = f(CWI_INFO.description);
  const faq = CWI_INFO.faq.map((x) => ({ q: f(x.q), a: f(x.a) }));

  const sections = CWI_INFO.sections.map((s) => {
    const paras = s.paragraphs.map((p) => `<p>${esc(f(p))}</p>`).join('\n    ');
    const inds = s.showIndustries ? `\n    <p>Main industries in the ${esc(city.name)} area: ${esc(city.industries.join(', '))}.</p>` : '';
    const bullets = s.bullets ? `\n    <ul>${s.bullets.map((b) => `<li>${esc(f(b))}</li>`).join('')}</ul>` : '';
    return `<h2>${esc(f(s.heading))}</h2>\n    ${paras}${inds}${bullets}`;
  }).join('\n    ');

  const others = CWI_INFO.cities.filter((c) => c.slug !== city.slug)
    .map((c) => `<a href="/training/cwi-training-${c.slug}">${esc(c.name)}</a>`).join(' · ');
  const related = CWI_INFO.related.map((r) => `<a href="${r.href}">${esc(r.label)}</a>`).join(' · ');

  const bodyContent = `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/training">Training</a><a href="/asnt-certification">ASNT</a><a href="/consulting">Consulting</a><a href="/contact?service=training">Free Consultation</a></nav></header>
  <main>
    <h1>${esc(h1)}</h1>
    <p>${esc(f(CWI_INFO.intro))}</p>
    ${sections}
    <h2>Frequently asked questions</h2>
    ${faq.map((x) => `<h3>${esc(x.q)}</h3>\n    <p>${esc(x.a)}</p>`).join('\n    ')}
    <h2>${esc(f(CWI_INFO.cta.heading))}</h2>
    <p>${esc(f(CWI_INFO.cta.text))} <a href="${CWI_INFO.cta.href}"><strong>${esc(CWI_INFO.cta.label)}</strong></a>.</p>
    <p>Related: ${related}.</p>
    <p>CWI certification information for other cities: ${others}.</p>
  </main>`;

  return {
    path,
    title,
    description,
    canonical: url,
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: title, description, inLanguage: 'en-US', isPartOf: { '@id': `${SITE_URL}/#website` }, publisher: { '@id': `${SITE_URL}/#organization` }, about: { '@type': 'Thing', name: 'AWS Certified Welding Inspector (CWI) certification' } },
        { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: faq.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Training', item: `${SITE_URL}/training` },
          { '@type': 'ListItem', position: 3, name: `CWI Certification in ${city.name}`, item: url },
        ] },
      ],
    },
    bodyContent,
  };
}
