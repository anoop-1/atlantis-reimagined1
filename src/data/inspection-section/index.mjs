// Inspection section (2026-10-18) — one source for React (src/pages/InspectionSection.tsx),
// the crawler HTML (scripts/inspection-section-2026-10.mjs) and the header navigation.
import { SECTION_PAGES, ADVANCED_LIST, CONVENTIONAL_LIST } from './sections.mjs';
import { METHOD_PAGES } from './methods.mjs';

export const SITE = 'https://atlantisndt.com';
export const ENQUIRY = '/contact?service=inspection&subject=Inspection%20enquiry';
export { ADVANCED_LIST, CONVENTIONAL_LIST };

const NDT = '/inspection/ndt-inspection-services';
const PARENT = {
  [NDT]: '/inspection',
  [`${NDT}/advanced-ndt`]: NDT,
  [`${NDT}/conventional-ndt`]: NDT,
};

function deliverySection(p) {
  return { id: 'delivery', h: 'How we deliver it', p: [
    `${p.navLabel} is carried out to a written procedure approved for the scope, naming the code and edition, the equipment and calibration, the coverage and the acceptance criteria. The procedure and each technician\u2019s certification are submitted for the client\u2019s review before mobilisation.`,
    'Work is planned and supervised by ASNT Level III personnel; our founder holds ASNT NDT Level III in UT, RT, MT, PT and VT. Reports state the coverage achieved and any limitations, so the engineer reading them knows what was examined and what was not, and any reportable finding is raised the same day.',
  ] };
}

export const INSPECTION_PAGES = [
  ...SECTION_PAGES,
  ...METHOD_PAGES.map((p) => ({ ...p, kind: 'method' })),
].map((p) => (p.kind === 'method' ? { ...p, sections: [...(p.sections || []), deliverySection(p)] } : p)).map((p) => {
  let parent = PARENT[p.path];
  if (!parent && p.kind === 'method') parent = p.group === 'advanced' ? `${NDT}/advanced-ndt` : `${NDT}/conventional-ndt`;
  if (!parent && p.path !== '/inspection') parent = '/inspection';
  return { ...p, parent: parent || null };
});

const BY_PATH = new Map(INSPECTION_PAGES.map((p) => [p.path, p]));
export const INSPECTION_PATHS = INSPECTION_PAGES.map((p) => p.path);
export function inspectionPage(path) {
  const clean = (path || '').replace(/\/+$/, '') || '/';
  return BY_PATH.get(clean) || null;
}

export function inspectionBreadcrumbs(page) {
  const trail = [];
  let cur = page;
  while (cur) { trail.unshift({ path: cur.path, label: cur.navLabel }); cur = cur.parent ? BY_PATH.get(cur.parent) : null; }
  return [{ path: '/', label: 'Home' }, ...trail];
}

/** List items for advanced/conventional list pages and the hub. */
export function listFor(page) {
  if (page.group === 'advanced' && page.kind === 'list') return ADVANCED_LIST;
  if (page.group === 'conventional' && page.kind === 'list') return CONVENTIONAL_LIST;
  return null;
}

/** Header navigation tree: Services → Inspection → children (→ grandchildren). */
export const INSPECTION_NAV = {
  name: 'Inspection',
  path: '/inspection',
  blurb: 'NDT, asset integrity, RBI, staffing, commissioning, turnarounds',
  children: [
    { name: 'NDT Inspection Services', path: NDT, children: [
      { name: 'Advanced NDT', path: `${NDT}/advanced-ndt` },
      { name: 'Conventional NDT', path: `${NDT}/conventional-ndt` },
    ] },
    { name: 'Asset Integrity Services', path: '/inspection/asset-integrity-services' },
    { name: 'Risk-Based Inspection (RBI)', path: '/inspection/risk-based-inspection' },
    { name: 'Technical Staffing Services (TSS)', path: '/inspection/technical-staffing-services' },
    { name: 'Commissioning', path: '/inspection/commissioning' },
    { name: 'Turnarounds & Shutdowns', path: '/inspection/turnarounds-shutdowns' },
    { name: 'API 510 / 570 / 653 Inspection', path: '/inspection-services' },
  ],
};

// ---------------------------------------------------------------- crawler HTML
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const link = (href, label) => `<a href="${esc(href)}">${esc(label)}</a>`;
const paras = (p) => (Array.isArray(p) ? p : p ? [p] : []).map((t) => `<p>${esc(t)}</p>`).join('\n');

function sectionHtml(s) {
  let h = `<section id="${esc(s.id)}"><h2>${esc(s.h)}</h2>\n${paras(s.p)}`;
  if (s.list) h += `\n<ul>${s.list.map((li) => `<li>${esc(li)}</li>`).join('')}</ul>`;
  if (s.table) h += `\n<table><thead><tr>${s.table.head.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead><tbody>${s.table.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
  return h + '</section>';
}

function childPages(page) {
  return INSPECTION_PAGES.filter((p) => p.parent === page.path);
}

export function inspectionHtml(page) {
  const crumbs = inspectionBreadcrumbs(page);
  const parts = [];
  parts.push(`<nav aria-label="Breadcrumb" class="insp-crumbs"><ol>${crumbs.map((c, i) => `<li>${i === crumbs.length - 1 ? esc(c.label) : link(c.path, c.label)}</li>`).join('')}</ol></nav>`);
  parts.push(`<p class="insp-eyebrow">${esc(page.eyebrow || 'Inspection')}</p>\n<h1>${esc(page.h1)}</h1>\n<p class="insp-lede">${esc(page.intro)}</p>`);
  parts.push(`<p><a class="insp-cta" href="${esc(ENQUIRY)}">Request an inspection quote</a></p>`);
  if (page.highlights) parts.push(`<section id="highlights" class="insp-highlights">${page.highlights.map((x) => `<div><h2>${esc(x.h)}</h2><p>${esc(x.p)}</p></div>`).join('')}</section>`);
  if (page.cards) parts.push(`<section id="services"><h2>${page.kind === 'landing' ? 'Inspection services' : 'Choose a service line'}</h2><div class="insp-cards">${page.cards.map((c) => `<a href="${esc(c.href)}"><strong>${esc(c.label)} →</strong><span>${esc(c.text)}</span></a>`).join('')}</div></section>`);
  const list = listFor(page);
  if (list) parts.push(`<section id="methods"><h2>${page.group === 'advanced' ? 'Advanced NDT methods' : 'Conventional NDT methods'}</h2><table><thead><tr><th>Method</th><th>What it is used for</th><th>Key codes</th></tr></thead><tbody>${list.map((m) => `<tr><td>${link(m.href, m.label)}</td><td>${esc(m.text)}</td><td>${esc(m.codes)}</td></tr>`).join('')}</tbody></table></section>`);
  for (const s of page.sections || []) parts.push(sectionHtml(s));
  if (page.codes) parts.push(`<section id="codes"><h2>Governing codes and standards</h2><ul>${page.codes.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></section>`);
  if (page.deliverables) parts.push(`<section id="deliverables"><h2>What you receive</h2><ul>${page.deliverables.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></section>`);
  if (page.industries) parts.push(`<section id="industries"><h2>Industries served</h2><ul>${page.industries.map((c) => `<li>${esc(c)}</li>`).join('')}</ul></section>`);
  if (page.faqs?.length) parts.push(`<section id="faq"><h2>Frequently asked questions</h2>${page.faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join('')}</section>`);
  const kids = page.kind === 'landing' ? [] : childPages(page).filter((c) => !list || !list.some((m) => m.href === c.path));
  if (kids.length) parts.push(`<section id="subpages"><h2>In this section</h2><ul>${kids.map((c) => `<li>${link(c.path, c.navLabel)}</li>`).join('')}</ul></section>`);
  if (page.related?.length) parts.push(`<section id="related"><h2>Related</h2><ul>${page.related.map(([h, l]) => `<li>${link(h, l)}</li>`).join('')}</ul></section>`);
  parts.push(`<section id="enquire" class="insp-enquire"><h2>Talk to an inspection engineer</h2><p>Send the equipment list or drawings, the inspection you need and your timing. Quotes are prepared for each scope and region.</p><p><a class="insp-cta" href="${esc(ENQUIRY)}">Request an inspection quote</a></p></section>`);
  return parts.join('\n');
}

export function inspectionSchema(page) {
  const url = SITE + page.path;
  const crumbs = inspectionBreadcrumbs(page);
  const graph = [
    { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: page.title, description: page.description, isPartOf: { '@id': `${SITE}/#website` } },
    { '@type': 'Service', '@id': `${url}#service`, name: page.h1, serviceType: page.navLabel, description: page.description, url,
      provider: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE }, areaServed: ['United States', 'Canada', 'Middle East', 'India'] },
    { '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: SITE + c.path })) },
  ];
  if (page.faqs?.length) graph.push({ '@type': 'FAQPage', mainEntity: page.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
  return { '@context': 'https://schema.org', '@graph': graph };
}

/** Word count of the rendered body (used by the build assert). */
export function inspectionWords(page) {
  return inspectionHtml(page).replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
}
