// ERP problem → solution pages, /erp/solutions/{slug} — 2026-11-06 (owner: "find a problem,
// show this product as solution to move forward").
//
// Why this shape (CLAUDE.md §21.3, §31.1, traffic review 2026-11-06): ERP buyer queries sit at
// an average position of 25 and the category head terms are out of reach from this link
// profile. What inspection-company owners DO search is the problem — an expired cert found in
// an audit, an instrument sent to site past calibration, work done and never invoiced. Each
// page answers one problem, shows the workflow that removes it, and hands the software term
// to the feature page that already owns it (no cannibalisation).
//
// One source for both layers: content in src/data/erp-solutions-2026-11.json; the React page
// (src/pages/ErpSolutionPage.tsx) and the crawler (scripts/erp-solutions-pages.mjs) both render
// with the functions below. The hero's dashboard is the interactive widget in React and
// dashboardStaticHtml() from the same sample data in the crawler.
//
// Rules enforced by assertSolutionsClean(): no digits outside standards designations (ERP copy
// rule §20.10), no prices (§18), no NAS 410, titles/descriptions sized, modules exist in the
// app catalog, related links point at real ERP owner pages.

export const SOLUTIONS_BASE = '/erp/solutions';
const SITE = 'https://atlantisndt.com';

export const SOL_CLASS = {
  crumbs: 'mb-5 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground',
  crumbLink: 'hover:text-primary underline-offset-2 hover:underline',
  eyebrow: 'mb-3 text-sm font-semibold text-primary',
  h1: 'text-3xl md:text-[2.75rem] md:leading-[1.1] font-bold tracking-tight text-foreground',
  answer: 'mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground',
  ctaRow: 'mt-7 flex flex-wrap gap-3',
  ctaPrimary: 'inline-flex items-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  ctaSecondary: 'inline-flex items-center rounded-lg border border-border bg-white px-5 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
  heroSection: 'border-b border-border bg-[hsl(215_45%_97%)]',
  heroGrid: 'container mx-auto max-w-7xl px-4 sm:px-6 py-10 md:py-14 grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center',
  body: 'container mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-16',
  section: 'mb-14 scroll-mt-24',
  h2: 'text-2xl md:text-3xl font-bold tracking-tight text-foreground mb-4',
  p: 'max-w-3xl text-base leading-relaxed text-muted-foreground mb-4',
  symptomGrid: 'mt-6 grid gap-3 md:grid-cols-2',
  symptom: 'rounded-lg border border-border border-l-4 border-l-amber-400 bg-white p-4',
  itemT: 'font-semibold text-foreground',
  itemD: 'mt-1 text-sm leading-relaxed text-muted-foreground',
  costList: 'mt-6 grid gap-x-8 gap-y-5 md:grid-cols-2',
  costItem: 'relative pl-5 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-red-500',
  steps: 'relative mt-8 ml-2 space-y-7 border-l-2 border-primary/25 pl-7',
  step: 'relative',
  stepDot: 'absolute -left-[37px] top-1 h-4 w-4 rounded-full border-2 border-primary bg-white',
  tableWrap: 'mt-6 overflow-hidden rounded-xl border border-border',
  table: 'block md:table w-full text-left text-sm',
  thead: 'hidden md:table-header-group bg-secondary/60',
  th: 'px-4 py-3 font-semibold text-foreground',
  tbody: 'block md:table-row-group',
  tr: 'block md:table-row border-t border-border first:border-t-0 md:first:border-t',
  td: 'block md:table-cell px-4 py-2 first:pt-4 last:pb-4 md:py-3 md:first:pt-3 md:last:pb-3 align-top text-muted-foreground before:content-[attr(data-label)] before:block before:text-xs before:font-semibold before:text-foreground md:before:content-none',
  tdAfter: 'md:bg-emerald-50/50',
  modList: 'mt-6 divide-y divide-border rounded-xl border border-border bg-white',
  modItem: 'flex flex-col gap-1 p-4 sm:flex-row sm:items-baseline sm:gap-6',
  modName: 'shrink-0 font-semibold text-primary underline-offset-2 hover:underline sm:w-48',
  faqQ: 'text-lg font-semibold text-foreground mt-6 mb-2',
  related: 'mt-4 grid gap-2 sm:grid-cols-2',
  relatedLink: 'block rounded-lg border border-border bg-white px-4 py-3 text-sm font-medium text-foreground hover:border-primary hover:text-primary',
  band: 'bg-[hsl(215_100%_18%)] text-white',
  bandInner: 'container mx-auto max-w-5xl px-4 sm:px-6 py-12 md:py-14 flex flex-col gap-6 md:flex-row md:items-center md:justify-between',
  bandH2: 'text-2xl md:text-3xl font-bold tracking-tight',
  bandP: 'mt-2 max-w-xl text-white/80',
  bandPrimary: 'inline-flex items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-[hsl(215_100%_22%)] hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(215_100%_18%)]',
  bandSecondary: 'inline-flex items-center rounded-lg border border-white/50 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10',
  hubList: 'mt-8 grid gap-4 md:grid-cols-2',
  hubItem: 'group flex flex-col rounded-xl border border-border border-l-4 border-l-primary bg-white p-5 hover:border-primary',
  hubEyebrow: 'text-xs font-semibold text-primary',
  hubTitle: 'mt-1 text-lg font-bold text-foreground group-hover:text-primary',
  hubText: 'mt-2 text-sm leading-relaxed text-muted-foreground',
  linkBlock: 'container mx-auto max-w-4xl px-6 py-6',
  linkBlockInner: 'rounded-xl border border-border bg-secondary/40 p-6',
  linkBlockH2: 'text-xl font-bold mb-2',
  linkBlockP: 'text-muted-foreground mb-3',
  linkBlockList: 'grid gap-2 sm:grid-cols-2',
  linkBlockA: 'text-primary underline underline-offset-2 hover:no-underline',
};

const esc = (s) => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const C = SOL_CLASS;

export const solutionPath = (slug) => `${SOLUTIONS_BASE}/${slug}`;
export const demoHref = (r) => `/contact?service=erp&subject=${encodeURIComponent(`ERP demo: ${r.eyebrow}`)}`;

/** Left column of the hero (the dashboard sits beside it). */
export function solutionHeroHtml(r) {
  return `<nav aria-label="Breadcrumb" class="${C.crumbs}"><a href="/erp" class="${C.crumbLink}">ERP</a><span aria-hidden="true">/</span><a href="${SOLUTIONS_BASE}" class="${C.crumbLink}">Problems we solve</a></nav>
<p class="${C.eyebrow}">${esc(r.eyebrow)}</p>
<h1 class="${C.h1}">${esc(r.h1)}</h1>
<p class="${C.answer}">${esc(r.answer)}</p>
<div class="${C.ctaRow}"><a href="${esc(demoHref(r))}" class="${C.ctaPrimary}" data-cta-variant="erp-solution-demo">Book a demo</a><a href="#how-it-works" class="${C.ctaSecondary}">See how it works</a></div>`;
}

const items = (list, cls) => list.map((x) => `<li class="${cls}"><p class="${C.itemT}">${esc(x.t)}</p><p class="${C.itemD}">${esc(x.d)}</p></li>`).join('');

/** Everything below the hero. `apps` maps catalog slug → display name. */
export function solutionBodyHtml(r, apps, titleFor = () => null) {
  const ba = r.beforeAfter.map((x) => `<tr class="${C.tr}"><td data-label="Without a system" class="${C.td}">${esc(x.before)}</td><td data-label="With Atlantis NDT" class="${C.td} ${C.tdAfter}">${esc(x.after)}</td></tr>`).join('');
  const mods = r.modules.map((m) => `<li class="${C.modItem}"><a href="/erp/apps/${esc(m.app)}" class="${C.modName}">${esc(apps[m.app] || m.app)}</a><p class="text-sm leading-relaxed text-muted-foreground">${esc(m.why)}</p></li>`).join('');
  const faq = r.faq.map((f) => `<h3 class="${C.faqQ}">${esc(f.q)}</h3><p class="${C.p}">${esc(f.a)}</p>`).join('');
  const rel = r.related.map((h) => `<li><a href="${esc(h)}" class="${C.relatedLink}">${esc(titleFor(h) || h)}</a></li>`).join('');
  return `<div class="${C.body}">
<section id="symptoms" class="${C.section}"><h2 class="${C.h2}">${esc(r.problem.headline)}</h2>${r.problem.paragraphs.map((p) => `<p class="${C.p}">${esc(p)}</p>`).join('')}<ul class="${C.symptomGrid}">${items(r.problem.symptoms, C.symptom)}</ul></section>
<section id="what-it-costs" class="${C.section}"><h2 class="${C.h2}">${esc(r.cost.headline)}</h2><ul class="${C.costList}">${items(r.cost.items, C.costItem)}</ul></section>
<section id="how-it-works" class="${C.section}"><h2 class="${C.h2}">${esc(r.solution.headline)}</h2>${r.solution.paragraphs.map((p) => `<p class="${C.p}">${esc(p)}</p>`).join('')}<ol class="${C.steps}">${r.solution.steps.map((s) => `<li class="${C.step}"><span class="${C.stepDot}" aria-hidden="true"></span><p class="${C.itemT}">${esc(s.t)}</p><p class="${C.itemD}">${esc(s.d)}</p></li>`).join('')}</ol></section>
<section id="before-and-after" class="${C.section}"><h2 class="${C.h2}">Before and after</h2><div class="${C.tableWrap}"><table class="${C.table}"><thead class="${C.thead}"><tr><th scope="col" class="${C.th}">Without a system</th><th scope="col" class="${C.th}">With Atlantis NDT</th></tr></thead><tbody class="${C.tbody}">${ba}</tbody></table></div></section>
<section id="modules" class="${C.section}"><h2 class="${C.h2}">The modules doing the work</h2><p class="${C.p}">Each module is part of the same platform, so a certification, an instrument, a job and a report are linked records rather than files in different places.</p><ul class="${C.modList}">${mods}</ul></section>
<section id="faq" class="${C.section}"><h2 class="${C.h2}">Questions owners ask</h2>${faq}</section>
<section id="related" class="${C.section}"><h2 class="${C.h2}">Keep reading</h2><ul class="${C.related}">${rel}<li><a href="${SOLUTIONS_BASE}" class="${C.relatedLink}">All problems Atlantis NDT solves</a></li></ul></section>
</div>
<section class="${C.band}" aria-label="Book a demo"><div class="${C.bandInner}"><div><h2 class="${C.bandH2}">See it on your own records</h2><p class="${C.bandP}">Bring a sample of your certifications, equipment list or reports and we will show the workflow configured to how your company runs. Demo on request.</p></div><div class="flex flex-wrap gap-3"><a href="${esc(demoHref(r))}" class="${C.bandPrimary}" data-cta-variant="erp-solution-band">Book a demo</a><a href="/erp" class="${C.bandSecondary}">Explore the platform</a></div></div></section>`;
}

export function solutionsHubHeroHtml(hub) {
  return `<nav aria-label="Breadcrumb" class="${C.crumbs}"><a href="/erp" class="${C.crumbLink}">ERP</a><span aria-hidden="true">/</span><span>Problems we solve</span></nav>
<h1 class="${C.h1}">${esc(hub.h1)}</h1>
<p class="${C.answer}">${esc(hub.answer)}</p>
<div class="${C.ctaRow}"><a href="/contact?service=erp&amp;subject=ERP%20demo" class="${C.ctaPrimary}" data-cta-variant="erp-solutions-hub-demo">Book a demo</a><a href="#problems" class="${C.ctaSecondary}">Find your problem</a></div>`;
}

export function solutionsHubBodyHtml(hub, list) {
  const cards = list.map((r) => `<li><a href="${esc(solutionPath(r.slug))}" class="${C.hubItem}"><span class="${C.hubEyebrow}">${esc(r.eyebrow)}</span><span class="${C.hubTitle}">${esc(r.h1)}</span><span class="${C.hubText}">${esc(r.answer)}</span></a></li>`).join('');
  return `<div class="${C.body}">
<section id="problems" class="${C.section}"><h2 class="${C.h2}">${esc(hub.listHeading)}</h2>${hub.paragraphs.map((p) => `<p class="${C.p}">${esc(p)}</p>`).join('')}<ul class="${C.hubList}">${cards}</ul></section>
</div>
<section class="${C.band}" aria-label="Book a demo"><div class="${C.bandInner}"><div><h2 class="${C.bandH2}">Recognise more than one?</h2><p class="${C.bandP}">Most inspection companies do. They share a cause: the records live in different places. One platform fixes them together. Demo on request.</p></div><div class="flex flex-wrap gap-3"><a href="/contact?service=erp&amp;subject=ERP%20demo" class="${C.bandPrimary}" data-cta-variant="erp-solutions-hub-band">Book a demo</a><a href="/erp" class="${C.bandSecondary}">Explore the platform</a></div></div></section>`;
}

/** "Problems this solves" block for module pages and owner pages (both layers). */
export function solutionLinksHtml(list, heading = 'Problems this solves') {
  if (!list.length) return '';
  return `<section class="${C.linkBlock}" data-erp-solution-links="2026-11"><div class="${C.linkBlockInner}"><h2 class="${C.linkBlockH2}">${esc(heading)}</h2><p class="${C.linkBlockP}">Problem-by-problem guides showing how inspection companies remove them with Atlantis NDT.</p><ul class="${C.linkBlockList}">${list.map((r) => `<li><a href="${esc(solutionPath(r.slug))}" class="${C.linkBlockA}" data-route-link="erp-solution">${esc(r.h1)}</a></li>`).join('')}<li><a href="${SOLUTIONS_BASE}" class="${C.linkBlockA}" data-route-link="erp-solution">All problems we solve</a></li></ul></div></section>`;
}

/** Solutions whose module list contains `app`, or which list `path` as related. */
export const solutionsForApp = (list, app) => list.filter((r) => r.modules.some((m) => m.app === app));
export const solutionsRelatedTo = (list, path) => list.filter((r) => r.related.includes(path));

/** Which solution links a page carries, or null. Same answer in the browser and the build. */
const CITY_PICKS = ['expired-technician-certifications', 'equipment-past-calibration', 'late-inspection-reports', 'work-done-not-invoiced'];
export function solutionLinksFor(rawPath, list) {
  const p = (rawPath || '').replace(/\/+$/, '') || '/';
  if (p === SOLUTIONS_BASE || p.startsWith(`${SOLUTIONS_BASE}/`)) return null;
  if (p === '/erp') return { heading: 'Problems Atlantis NDT solves', list };
  const app = /^\/erp\/apps\/([a-z-]+)$/.exec(p)?.[1];
  if (app) { const l = solutionsForApp(list, app); return l.length ? { heading: 'Problems this module solves', list: l } : null; }
  const rel = solutionsRelatedTo(list, p);
  if (rel.length) return { heading: 'Problem guides', list: rel };
  if (/^\/ndt-erp-[a-z-]+$/.test(p)) {
    const l = CITY_PICKS.map((s) => list.find((r) => r.slug === s)).filter(Boolean);
    return l.length ? { heading: 'Problems inspection companies bring to us', list: l } : null;
  }
  return null;
}

export function solutionSchema(r) {
  const url = `${SITE}${solutionPath(r.slug)}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebPage', '@id': `${url}#webpage`, url, name: r.title, description: r.description, inLanguage: 'en', isPartOf: { '@type': 'WebSite', name: 'Atlantis NDT', url: SITE }, about: r.primaryQuery },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ERP', item: `${SITE}/erp` },
        { '@type': 'ListItem', position: 2, name: 'Problems we solve', item: `${SITE}${SOLUTIONS_BASE}` },
        { '@type': 'ListItem', position: 3, name: r.h1, item: url },
      ] },
    ],
  };
}

export function solutionsHubSchema(hub, list) {
  const url = `${SITE}${SOLUTIONS_BASE}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', '@id': `${url}#webpage`, url, name: hub.title, description: hub.description, inLanguage: 'en' },
      { '@type': 'ItemList', itemListElement: list.map((r, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE}${solutionPath(r.slug)}`, name: r.h1 })) },
    ],
  };
}

const ALLOWED = /SNT-TC-1A|CP-189|ASME Section (V|VIII)|AWS D1\.1|API (510|570|653|1104|580|579)|ISO 9001|ISO 14001/g;
export function assertSolutionsClean(data, catalogSlugs, knownPaths) {
  const problems = [];
  const all = [data.hub, ...data.pages];
  for (const r of all) {
    const id = r.slug || 'hub';
    const vals = []; const walk = (v) => { if (typeof v === 'string') vals.push(v); else if (v && typeof v === 'object') Object.entries(v).forEach(([k, x]) => k !== 'related' && k !== 'app' && walk(x)); }; walk(r);
    const text = vals.join(' \u2016 ').replace(ALLOWED, '');
    const d = text.match(/.{0,30}\d.{0,30}/g);
    if (d?.length) problems.push(`${id}: digit in copy: ${d.slice(0, 3).join(' | ')}`);
    if (/nas[ -]?410|nadcap|en ?4179/i.test(text)) problems.push(`${id}: NAS 410 / Nadcap`);
    if (/[$£€₹]|\bprice[sd]?\b|\bper (month|year|user)\b|\bdiscount/i.test(text)) problems.push(`${id}: price wording`);
    if (/iso ?170(20|25)|iso ?17024|soc ?2|iso ?27001|uptime/i.test(text)) problems.push(`${id}: unevidenced claim`);
    if (r.title.length > 62) problems.push(`${id}: title ${r.title.length} chars`);
    if (r.description.length < 110 || r.description.length > 160) problems.push(`${id}: description ${r.description.length} chars`);
  }
  for (const r of data.pages) {
    for (const m of r.modules) if (!catalogSlugs.has(m.app)) problems.push(`${r.slug}: unknown app ${m.app}`);
    if (knownPaths) for (const h of r.related) if (!knownPaths.has(h)) problems.push(`${r.slug}: related ${h} not built`);
  }
  if (new Set(data.pages.map((r) => r.slug)).size !== data.pages.length) problems.push('duplicate slug');
  if (problems.length) throw new Error(`erp-solutions: ${problems.length} problem(s):\n  ${problems.join('\n  ')}`);
}
