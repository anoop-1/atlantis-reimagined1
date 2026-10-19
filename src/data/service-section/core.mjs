// Shared service-section model (2026-10-19). One template for the /inspection section and the
// NDT Level III consulting section, so both look like the rest of the site (owner: "maintain UI
// UX consistency as rest of the website") and like each other.
//   createServiceSection(config) → page lookup, breadcrumbs, child pages, crawler HTML, schema.
// React renders the same pages from the same object (src/components/ServiceSectionPage.tsx).
// tailwind.config.ts scans src/data/service-section and src/data/inspection-section, so classes
// used only in the crawler HTML are still generated.

export const SITE = 'https://atlantisndt.com';

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
  formWrap: 'container mx-auto px-6 max-w-3xl',
  regional: 'container mx-auto max-w-4xl px-6 py-6',
  regionalIntro: 'text-sm font-semibold text-foreground mb-2',
  regionalList: 'flex flex-wrap gap-x-6 gap-y-2 text-sm',
  regionalLink: 'text-primary underline-offset-4 hover:underline',
};
export const GRID_COLS = { 1: 'md:grid-cols-1', 2: 'md:grid-cols-2', 3: 'md:grid-cols-3' };

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const a = (href, label, cls = '') => `<a href="${esc(href)}"${cls ? ` class="${cls}"` : ''}>${label}</a>`;

/**
 * config: {
 *   pages: raw pages (path, kind, navLabel, title, description, h1, eyebrow, intro, highlights,
 *          cards, cardsTitle, cardsSub, sections[{id,h,p,list,table,links}], codes, deliverables,
 *          industries, faqs, related, group, parent),
 *   rootPath, ancestors: [{path,label}] shown between Home and the section's pages,
 *   lists: { [group]: [{label,href,text,codes}] } for kind 'list' pages,
 *   iconFor: { [href]: lucide name }, highlightIcons: [lucide names],
 *   cta: { primaryHref, primaryLabel, secondaryHref, secondaryLabel, bandTitle, bandText, formId },
 *   regions: optional { h2, intro, groups[{name,links}], footnote } shown on the landing page,
 *   areaServed: [..] for the Service node, defaultEyebrow.
 * }
 */
export function createServiceSection(cfg) {
  const PAGES = cfg.pages.map((p) => ({ ...p, parent: p.parent === undefined ? (p.path === cfg.rootPath ? null : cfg.rootPath) : p.parent }));
  const BY_PATH = new Map(PAGES.map((p) => [p.path, p]));
  const PATHS = PAGES.map((p) => p.path);

  const page = (path) => BY_PATH.get((path || '').replace(/\/+$/, '') || '/') || null;
  function breadcrumbs(pg) {
    const trail = [];
    let cur = pg;
    while (cur) { trail.unshift({ path: cur.path, label: cur.navLabel }); cur = cur.parent ? BY_PATH.get(cur.parent) : null; }
    return [{ path: '/', label: 'Home' }, ...(cfg.ancestors || []), ...trail];
  }
  const listFor = (pg) => (pg.kind === 'list' && pg.group && cfg.lists?.[pg.group]) || null;
  function childPages(pg) {
    const list = listFor(pg);
    if (pg.kind === 'landing') return [];
    return PAGES.filter((p) => p.parent === pg.path && !(list || []).some((m) => m.href === p.path));
  }
  const cardsTitle = (pg) => pg.cardsTitle || (pg.kind === 'landing' ? 'Services' : 'Choose a service line');
  const cardsSub = (pg) => pg.cardsSub ?? '';

  /** Crawler HTML; icon(name, className) returns an SVG string, formHtml is the no-JS form. */
  function html(pg, { icon = () => '', formHtml = '' } = {}) {
    const I = (name, cls) => icon(name, cls) || '';
    const crumbs = breadcrumbs(pg);
    const list = listFor(pg);
    const kids = childPages(pg);
    const cta = cfg.cta;
    const out = [];
    let alt = false;
    const sec = (inner, id) => { const cls = alt ? UI.sectionAlt : UI.section; alt = !alt; return `<section${id ? ` id="${esc(id)}"` : ''} class="${cls}">${inner}</section>`; };
    const checks = (items, small) => `<ul class="${small ? 'space-y-2' : UI.list}">${items.map((x) => `<li class="${small ? UI.listCardItem : UI.li}">${I('CheckCircle2', small ? UI.checkSm : UI.check)}<span>${esc(x)}</span></li>`).join('')}</ul>`;
    const pills = (items) => `<div class="${UI.pillGrid}">${items.map(([href, label]) => `<a href="${esc(href)}" class="${UI.pill}"><span class="${UI.pillText}">${esc(label)}</span>${I('ArrowRight', UI.pillIcon)}</a>`).join('')}</div>`;

    out.push(`<section class="${UI.hero}"><div class="${UI.container}">`
      + `<nav aria-label="Breadcrumb"><ol class="${UI.crumbs}">${crumbs.map((c, i) => `<li class="flex items-center gap-2">${i ? '<span aria-hidden="true">/</span>' : ''}${i === crumbs.length - 1 ? `<span class="text-foreground">${esc(c.label)}</span>` : a(c.path, esc(c.label), UI.crumbLink)}</li>`).join('')}</ol></nav>`
      + `<div class="${UI.heroInner}"><p class="${UI.eyebrow}">${esc(pg.eyebrow || cfg.defaultEyebrow || '')}</p><h1 class="${UI.h1}">${esc(pg.h1)}</h1><p class="${UI.lede}">${esc(pg.intro)}</p>`
      + `<div class="${UI.ctaRow}">${a(cta.primaryHref, `${esc(cta.primaryLabel)} ${I('ArrowRight', 'w-4 h-4')}`, UI.btnPrimary)}${a(cta.secondaryHref, esc(cta.secondaryLabel), UI.btnDark)}</div></div></div></section>`);

    if (pg.highlights) out.push(sec(`<div class="${UI.wide}"><div class="${UI.grid3}">${pg.highlights.map((x, i) => `<div class="${UI.card}"><div class="${UI.iconTile}">${I((cfg.highlightIcons || [])[i % (cfg.highlightIcons || ['Award']).length] || 'Award', UI.icon)}</div><h2 class="text-lg font-semibold mb-2">${esc(x.h)}</h2><p class="text-sm text-muted-foreground leading-relaxed">${esc(x.p)}</p></div>`).join('')}</div></div>`, 'highlights'));

    if (pg.cards) out.push(sec(`<div class="${UI.wide}"><h2 class="${UI.h2Center}">${esc(cardsTitle(pg))}</h2>${cardsSub(pg) ? `<p class="${UI.sub}">${esc(cardsSub(pg))}</p>` : '<div class="mb-10"></div>'}<div class="${UI.cardGrid}">${pg.cards.map((c) => `<a href="${esc(c.href)}" class="${UI.linkCard}">${cfg.iconFor?.[c.href] ? `<div class="${UI.iconTile}">${I(cfg.iconFor[c.href], UI.icon)}</div>` : ''}<h3 class="${UI.linkCardTitle}">${esc(c.label)}</h3><p class="${UI.linkCardText}">${esc(c.text)}</p><span class="${UI.linkCardMore}">Explore ${I('ArrowRight', 'w-4 h-4')}</span></a>`).join('')}</div></div>`, 'services'));

    if (list) out.push(sec(`<div class="${UI.wide}"><h2 class="${UI.h2}">${esc(pg.listTitle || 'Methods')}</h2><div class="${UI.tableWrap}"><table class="${UI.table}"><thead class="${UI.thead}"><tr><th class="${UI.th}">Method</th><th class="${UI.th}">What it is used for</th><th class="${UI.th}">Key codes</th></tr></thead><tbody>${list.map((m) => `<tr class="${UI.tr}"><td class="${UI.tdFirst}">${a(m.href, esc(m.label), UI.tdLink)}</td><td class="${UI.td}">${esc(m.text)}</td><td class="${UI.td}">${esc(m.codes)}</td></tr>`).join('')}</tbody></table></div></div>`, 'methods'));

    for (const s of pg.sections || []) {
      const paras = Array.isArray(s.p) ? s.p : s.p ? [s.p] : [];
      let inner = `<div class="${s.table || s.links ? UI.wide : UI.narrow}"><h2 class="${UI.h2}">${esc(s.h)}</h2>${paras.map((t) => `<p class="${UI.p}">${esc(t)}</p>`).join('')}`;
      if (s.list) inner += checks(s.list);
      if (s.links) inner += pills(s.links);
      if (s.table) inner += `<div class="${UI.tableWrap}"><table class="${UI.table}"><thead class="${UI.thead}"><tr>${s.table.head.map((c) => `<th class="${UI.th}">${esc(c)}</th>`).join('')}</tr></thead><tbody>${s.table.rows.map((r) => `<tr class="${UI.tr}">${r.map((c, i) => `<td class="${i ? UI.td : UI.tdFirst}">${esc(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      out.push(sec(inner + '</div>', s.id));
    }

    const triple = [['codes', 'Governing codes and standards', pg.codes], ['deliverables', 'What you receive', pg.deliverables], ['industries', 'Industries served', pg.industries]].filter(([, , v]) => v?.length);
    if (triple.length) out.push(sec(`<div class="${UI.wide}"><div class="grid gap-6 ${GRID_COLS[triple.length]}">${triple.map(([id, h, items]) => `<div id="${id}" class="${UI.card}"><h2 class="${UI.listCardTitle}">${esc(h)}</h2>${checks(items, true)}</div>`).join('')}</div></div>`, 'scope'));

    const R = cfg.regions;
    if (R && pg.kind === 'landing') out.push(sec(`<div class="${UI.wide}"><h2 class="${UI.h2Center}">${esc(R.h2)}</h2><p class="${UI.sub}">${esc(R.intro)}</p><div class="${UI.cardGrid}">${R.groups.map((g) => `<div class="${UI.regionCard}"><h3 class="${UI.regionTitle}">${I('MapPin', 'w-4 h-4')}${esc(g.name)}</h3><ul class="${UI.regionList}">${g.links.map(([href, label]) => `<li>${a(href, esc(label), UI.regionLink)}</li>`).join('')}</ul></div>`).join('')}</div><p class="${UI.regionFoot}">${R.footnote.map(([href, label]) => a(href, `${esc(label)} ${I('ArrowRight', 'w-4 h-4 inline')}`, 'inline-flex items-center gap-1 font-medium text-primary hover:underline')).join('')}</p></div>`, 'regions'));

    if (pg.faqs?.length) out.push(sec(`<div class="${UI.narrow}"><h2 class="${UI.h2}">Frequently asked questions</h2><div class="${UI.faqList}">${pg.faqs.map((f) => `<div class="${UI.faqItem}"><h3 class="${UI.faqQ}">${esc(f.q)}</h3><p class="${UI.faqA}">${esc(f.a)}</p></div>`).join('')}</div></div>`, 'faq'));

    if (kids.length) out.push(sec(`<div class="${UI.wide}"><h2 class="${UI.h2}">In this section</h2>${pills(kids.map((c) => [c.path, c.navLabel]))}</div>`, 'subpages'));
    if (pg.related?.length) out.push(sec(`<div class="${UI.wide}"><h2 class="${UI.h2}">Related</h2>${pills(pg.related)}</div>`, 'related'));

    out.push(`<section class="py-14"><div class="${UI.container}"><div class="${UI.band}"><h2 class="${UI.bandH2}">${esc(cta.bandTitle)}</h2><p class="${UI.bandP}">${esc(cta.bandText)}</p>${a(cta.primaryHref, `${esc(cta.primaryLabel)} ${I('ArrowRight', 'w-4 h-4')}`, UI.btnWhite)}</div></div></section>`);
    if (formHtml) out.push(`<section id="enquire" class="${UI.sectionAlt}"><div class="${UI.formWrap}"><div id="${esc(cta.formId)}" class="scroll-mt-28">${formHtml}</div></div></section>`);
    return out.join('\n');
  }

  function schema(pg) {
    const url = SITE + pg.path;
    const crumbs = breadcrumbs(pg);
    const graph = [
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: pg.title, description: pg.description, isPartOf: { '@id': `${SITE}/#website` } },
      { '@type': 'Service', '@id': `${url}#service`, name: pg.h1, serviceType: pg.navLabel, description: pg.description, url,
        provider: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE }, areaServed: cfg.areaServed || ['United States', 'Canada', 'Middle East', 'India'] },
      { '@type': 'BreadcrumbList', itemListElement: crumbs.map((c, i) => ({ '@type': 'ListItem', position: i + 1, name: c.label, item: SITE + c.path })) },
    ];
    if (pg.faqs?.length) graph.push({ '@type': 'FAQPage', mainEntity: pg.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  const words = (pg) => html(pg).replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;

  return { cfg, PAGES, PATHS, page, breadcrumbs, listFor, childPages, cardsTitle, cardsSub, html, schema, words };
}

/** Crawler copy of a small up-link block (regional inspection pages, consulting sub-pages). */
export function upLinkHtml(b, marker, label) {
  if (!b) return '';
  return `<nav class="${UI.regional}" ${marker}="2026-10" aria-label="${esc(label)}"><p class="${UI.regionalIntro}">${esc(b.intro)}</p><ul class="${UI.regionalList}">${b.links.map(([href, l]) => `<li>${a(href, esc(l), UI.regionalLink)}</li>`).join('')}</ul></nav>`;
}
