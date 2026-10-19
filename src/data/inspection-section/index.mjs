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

// ---------------------------------------------------------------- shared look (2026-10-19)
// Owner: "maintain UI UX consistency as rest of the website". The classes below are the ones the
// rest of the site uses (InspectionServices.tsx, TrainingByCountry.tsx, shadcn Card): gradient hero,
// primary + dark buttons, Card grids with an icon tile, alternating bg-muted/30 sections, the blue
// gradient call-to-action band. React (src/pages/InspectionSection.tsx) and the crawler HTML below
// both read UI, so the prerendered copy on screen before hydration looks like the React page.
// tailwind.config.ts scans this folder, so classes used only here are still generated.
export const UI = {
  hero: 'py-16 md:py-20 bg-gradient-to-r from-primary/10 to-accent/10',
  container: 'container mx-auto px-6',
  narrow: 'container mx-auto px-6 max-w-4xl',
  wide: 'container mx-auto px-6 max-w-6xl',
  crumbs: 'max-w-4xl mx-auto mb-6 flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm text-muted-foreground',
  crumbLink: 'hover:text-primary hover:underline underline-offset-2',
  heroInner: 'max-w-4xl mx-auto text-center',
  eyebrow: 'mb-4 text-sm font-semibold uppercase tracking-wide text-primary',
  h1: 'text-4xl md:text-5xl font-bold leading-tight mb-6',
  lede: 'text-xl text-muted-foreground leading-relaxed mb-8',
  ctaRow: 'flex flex-col sm:flex-row justify-center gap-3',
  btnPrimary: 'inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:opacity-90 transition',
  btnDark: 'inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-lg shadow-lg hover:opacity-90 transition',
  section: 'py-16',
  sectionAlt: 'py-16 bg-muted/30',
  h2: 'text-3xl font-bold mb-6',
  h2Center: 'text-3xl font-bold mb-4 text-center',
  sub: 'text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-10',
  p: 'text-lg text-muted-foreground leading-relaxed mb-4',
  list: 'space-y-3',
  li: 'flex items-start gap-3 text-muted-foreground leading-relaxed',
  check: 'w-5 h-5 text-primary shrink-0 mt-1',
  card: 'rounded-lg border bg-card text-card-foreground shadow-sm p-6',
  iconTile: 'w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4',
  icon: 'w-6 h-6 text-primary',
  grid3: 'grid gap-6 md:grid-cols-3',
  cardGrid: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3',
  linkCard: 'group flex h-full flex-col rounded-lg border bg-card text-card-foreground shadow-sm p-6 transition hover:border-primary/50 hover:shadow-md',
  linkCardTitle: 'text-lg font-semibold mb-2 group-hover:text-primary',
  linkCardText: 'text-sm text-muted-foreground leading-relaxed flex-1',
  linkCardMore: 'mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary',
  tableWrap: 'overflow-x-auto rounded-lg border bg-card shadow-sm',
  table: 'w-full text-sm',
  thead: 'bg-muted/50',
  th: 'text-left p-3 font-semibold text-foreground',
  tr: 'border-t align-top',
  td: 'p-3 text-muted-foreground',
  tdFirst: 'p-3 font-medium text-foreground',
  tdLink: 'text-primary hover:underline underline-offset-2',
  listCardTitle: 'text-lg font-semibold mb-4',
  listCardItem: 'flex items-start gap-2 text-sm text-muted-foreground leading-relaxed',
  checkSm: 'w-4 h-4 text-primary shrink-0 mt-0.5',
  faqList: 'divide-y border-y',
  faqItem: 'py-4',
  faqQ: 'font-medium text-foreground',
  faqA: 'mt-2 text-muted-foreground leading-relaxed',
  pillGrid: 'grid gap-4 sm:grid-cols-2 lg:grid-cols-3',
  pill: 'group flex items-center justify-between gap-3 rounded-lg border bg-card p-4 shadow-sm transition hover:border-primary/50 hover:shadow-md',
  pillText: 'font-medium text-foreground group-hover:text-primary',
  pillIcon: 'w-4 h-4 text-primary shrink-0',
  regionCard: 'rounded-xl border bg-card p-5',
  regionTitle: 'flex items-center gap-2 font-semibold text-primary mb-3',
  regionList: 'flex flex-wrap gap-x-4 gap-y-1.5 text-sm',
  regionLink: 'underline underline-offset-2 hover:text-primary',
  regionFoot: 'mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm',
  band: 'max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary to-accent p-8 md:p-10 text-center text-white shadow-xl',
  bandH2: 'text-2xl md:text-3xl font-bold mb-3',
  bandP: 'text-base md:text-lg opacity-90 mb-6 max-w-2xl mx-auto',
  btnWhite: 'inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow hover:bg-white/90 transition',
  rfqWrap: 'container mx-auto px-6 max-w-3xl',
  regional: 'container mx-auto max-w-4xl px-6 py-6',
  regionalIntro: 'text-sm font-semibold text-foreground mb-2',
  regionalList: 'flex flex-wrap gap-x-6 gap-y-2 text-sm',
  regionalLink: 'text-primary underline-offset-4 hover:underline',
};

/** lucide-react icon names (React maps them to components; the crawler renders the same SVG). */
export const ICON_FOR = {
  [NDT]: 'ScanSearch',
  [`${NDT}/advanced-ndt`]: 'Radar',
  [`${NDT}/conventional-ndt`]: 'Eye',
  '/inspection/asset-integrity-services': 'ShieldCheck',
  '/inspection/risk-based-inspection': 'Gauge',
  '/inspection/technical-staffing-services': 'Users',
  '/inspection/commissioning': 'ClipboardCheck',
  '/inspection/turnarounds-shutdowns': 'Wrench',
};
export const HIGHLIGHT_ICONS = ['Award', 'FileCheck', 'Layers'];
export const QUOTE_ANCHOR = '#rfq';
export const TALK = ENQUIRY;
export { INSPECTION_REGIONS, inspectionRegionalLinksFor, INSPECTION_REGIONAL_MARKER } from './regions.mjs';
import { INSPECTION_REGIONS as REGIONS } from './regions.mjs';

const GRID_COLS = { 1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3' };
export { GRID_COLS };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const a = (href, label, cls = '') => `<a href="${esc(href)}"${cls ? ` class="${cls}"` : ''}>${label}</a>`;

/** Page parts in display order, shared by both layers so they render the same sequence. */
export function childPages(page) {
  const list = listFor(page);
  if (page.kind === 'landing') return [];
  return INSPECTION_PAGES.filter((p) => p.parent === page.path && !(list || []).some((m) => m.href === p.path));
}

/**
 * Crawler HTML. `icon(name, className)` returns an SVG string (the crawler passes lucide icons
 * rendered on the server); without it the icon tiles are left out, which changes nothing for
 * crawlers and only the look of the brief pre-hydration paint.
 */
export function inspectionHtml(page, { icon = () => '', rfqHtml = '' } = {}) {
  const I = (name, cls) => icon(name, cls) || '';
  const crumbs = inspectionBreadcrumbs(page);
  const list = listFor(page);
  const kids = childPages(page);
  const out = [];
  let alt = false;
  const sec = (inner, id, extra = '') => { const cls = alt ? UI.sectionAlt : UI.section; alt = !alt; return `<section${id ? ` id="${esc(id)}"` : ''} class="${cls}${extra}">${inner}</section>`; };
  const checks = (items, small) => `<ul class="${small ? 'space-y-2' : UI.list}">${items.map((x) => `<li class="${small ? UI.listCardItem : UI.li}">${I('CheckCircle2', small ? UI.checkSm : UI.check)}<span>${esc(x)}</span></li>`).join('')}</ul>`;

  // Hero
  out.push(`<section class="${UI.hero}"><div class="${UI.container}">`
    + `<nav aria-label="Breadcrumb"><ol class="${UI.crumbs}">${crumbs.map((c, i) => `<li class="flex items-center gap-2">${i ? '<span aria-hidden="true">/</span>' : ''}${i === crumbs.length - 1 ? `<span class="text-foreground">${esc(c.label)}</span>` : a(c.path, esc(c.label), UI.crumbLink)}</li>`).join('')}</ol></nav>`
    + `<div class="${UI.heroInner}"><p class="${UI.eyebrow}">${esc(page.eyebrow || 'Inspection')}</p><h1 class="${UI.h1}">${esc(page.h1)}</h1><p class="${UI.lede}">${esc(page.intro)}</p>`
    + `<div class="${UI.ctaRow}">${a(QUOTE_ANCHOR, `Request a Quote ${I('ArrowRight', 'w-4 h-4')}`, UI.btnPrimary)}${a(TALK, 'Talk to an Inspector', UI.btnDark)}</div></div></div></section>`);

  // Highlights (landing)
  if (page.highlights) out.push(sec(`<div class="${UI.wide}"><div class="${UI.grid3}">${page.highlights.map((x, i) => `<div class="${UI.card}"><div class="${UI.iconTile}">${I(HIGHLIGHT_ICONS[i % HIGHLIGHT_ICONS.length], UI.icon)}</div><h2 class="text-lg font-semibold mb-2">${esc(x.h)}</h2><p class="text-sm text-muted-foreground leading-relaxed">${esc(x.p)}</p></div>`).join('')}</div></div>`, 'highlights'));

  // Service cards
  if (page.cards) out.push(sec(`<div class="${UI.wide}"><h2 class="${UI.h2Center}">${page.kind === 'landing' ? 'Inspection services' : 'Choose a service line'}</h2><p class="${UI.sub}">${page.kind === 'landing' ? 'Start with the service line, then go down to the method or scope you need.' : 'Each service line lists its methods, with a page for each one.'}</p><div class="${UI.cardGrid}">${page.cards.map((c) => `<a href="${esc(c.href)}" class="${UI.linkCard}">${ICON_FOR[c.href] ? `<div class="${UI.iconTile}">${I(ICON_FOR[c.href], UI.icon)}</div>` : ''}<h3 class="${UI.linkCardTitle}">${esc(c.label)}</h3><p class="${UI.linkCardText}">${esc(c.text)}</p><span class="${UI.linkCardMore}">Explore ${I('ArrowRight', 'w-4 h-4')}</span></a>`).join('')}</div></div>`, 'services'));

  // Method table (advanced / conventional)
  if (list) out.push(sec(`<div class="${UI.wide}"><h2 class="${UI.h2}">${page.group === 'advanced' ? 'Advanced NDT methods' : 'Conventional NDT methods'}</h2><div class="${UI.tableWrap}"><table class="${UI.table}"><thead class="${UI.thead}"><tr><th class="${UI.th}">Method</th><th class="${UI.th}">What it is used for</th><th class="${UI.th}">Key codes</th></tr></thead><tbody>${list.map((m) => `<tr class="${UI.tr}"><td class="${UI.tdFirst}">${a(m.href, esc(m.label), UI.tdLink)}</td><td class="${UI.td}">${esc(m.text)}</td><td class="${UI.td}">${esc(m.codes)}</td></tr>`).join('')}</tbody></table></div></div>`, 'methods'));

  // Content sections
  for (const s of page.sections || []) {
    const paras = Array.isArray(s.p) ? s.p : s.p ? [s.p] : [];
    let inner = `<div class="${s.table ? UI.wide : UI.narrow}"><h2 class="${UI.h2}">${esc(s.h)}</h2>${paras.map((t) => `<p class="${UI.p}">${esc(t)}</p>`).join('')}`;
    if (s.list) inner += checks(s.list);
    if (s.table) inner += `<div class="${UI.tableWrap}"><table class="${UI.table}"><thead class="${UI.thead}"><tr>${s.table.head.map((c) => `<th class="${UI.th}">${esc(c)}</th>`).join('')}</tr></thead><tbody>${s.table.rows.map((r) => `<tr class="${UI.tr}">${r.map((c, i) => `<td class="${i ? UI.td : UI.tdFirst}">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
    out.push(sec(inner + '</div>', s.id));
  }

  // Codes / deliverables / industries as three cards
  const triple = [['codes', 'Governing codes and standards', page.codes], ['deliverables', 'What you receive', page.deliverables], ['industries', 'Industries served', page.industries]].filter(([, , v]) => v?.length);
  if (triple.length) out.push(sec(`<div class="${UI.wide}"><div class="grid gap-6 ${GRID_COLS[triple.length]}">${triple.map(([id, h, items]) => `<div id="${id}" class="${UI.card}"><h2 class="${UI.listCardTitle}">${esc(h)}</h2>${checks(items, true)}</div>`).join('')}</div></div>`, 'scope'));

  // Regions (landing)
  if (page.kind === 'landing') out.push(sec(`<div class="${UI.wide}"><h2 class="${UI.h2Center}">${esc(REGIONS.h2)}</h2><p class="${UI.sub}">${esc(REGIONS.intro)}</p><div class="${UI.cardGrid}">${REGIONS.groups.map((g) => `<div class="${UI.regionCard}"><h3 class="${UI.regionTitle}">${I('MapPin', 'w-4 h-4')}${esc(g.name)}</h3><ul class="${UI.regionList}">${g.links.map(([href, label]) => `<li>${a(href, esc(label), UI.regionLink)}</li>`).join('')}</ul></div>`).join('')}</div><p class="${UI.regionFoot}">${REGIONS.footnote.map(([href, label]) => a(href, `${esc(label)} ${I('ArrowRight', 'w-4 h-4 inline')}`, 'inline-flex items-center gap-1 font-medium text-primary hover:underline')).join('')}</p></div>`, 'regions'));

  // FAQ
  if (page.faqs?.length) out.push(sec(`<div class="${UI.narrow}"><h2 class="${UI.h2}">Frequently asked questions</h2><div class="${UI.faqList}">${page.faqs.map((f) => `<div class="${UI.faqItem}"><h3 class="${UI.faqQ}">${esc(f.q)}</h3><p class="${UI.faqA}">${esc(f.a)}</p></div>`).join('')}</div></div>`, 'faq'));

  // Sub-pages and related pages
  const pills = (items) => `<div class="${UI.pillGrid}">${items.map(([href, label]) => `<a href="${esc(href)}" class="${UI.pill}"><span class="${UI.pillText}">${esc(label)}</span>${I('ArrowRight', UI.pillIcon)}</a>`).join('')}</div>`;
  if (kids.length) out.push(sec(`<div class="${UI.wide}"><h2 class="${UI.h2}">In this section</h2>${pills(kids.map((c) => [c.path, c.navLabel]))}</div>`, 'subpages'));
  if (page.related?.length) out.push(sec(`<div class="${UI.wide}"><h2 class="${UI.h2}">Related</h2>${pills(page.related)}</div>`, 'related'));

  // Call-to-action band + quote form
  out.push(`<section class="py-14"><div class="${UI.container}"><div class="${UI.band}"><h2 class="${UI.bandH2}">Talk to an inspection engineer</h2><p class="${UI.bandP}">Send the equipment list or drawings, the inspection you need and your timing. Quotes are prepared for each scope and region.</p>${a(QUOTE_ANCHOR, `Request a Quote ${I('ArrowRight', 'w-4 h-4')}`, UI.btnWhite)}</div></div></section>`);
  if (rfqHtml) out.push(`<section id="enquire" class="${UI.sectionAlt}"><div class="${UI.rfqWrap}"><div id="rfq" class="scroll-mt-28">${rfqHtml}</div></div></section>`);
  return out.join('\n');
}

/** Crawler copy of the regional up-link block (React: src/components/InspectionRegionalLinks.tsx). */
export function inspectionRegionalHtml(b) {
  if (!b) return '';
  return `<nav class="${UI.regional}" data-inspection-regional="2026-10" aria-label="Inspection services"><p class="${UI.regionalIntro}">${esc(b.intro)}</p><ul class="${UI.regionalList}">${b.links.map(([href, label]) => `<li>${a(href, esc(label), UI.regionalLink)}</li>`).join('')}</ul></nav>`;
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
