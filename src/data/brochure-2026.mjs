// /brochure — view and download the Atlantis NDT company brochure 2026 (owner, 2026-11-07).
// One renderer for both layers: the React page (src/pages/Brochure.tsx) and the crawler
// (scripts/brochure-page.mjs) both call brochureHtml(data) on src/data/brochure-2026.json,
// using the service-section UI classes so the page matches the rest of the site.
//
// Viewer: an inline PDF viewer on md+ screens (desktop browsers render PDFs in <object>),
// and page images on phones (mobile browsers do not render inline PDFs reliably).
import { UI } from './service-section/core.mjs';

const SITE = 'https://atlantisndt.com';
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const mb = (bytes) => `${(bytes / 1048576).toFixed(1)} MB`;
const pad = (n) => String(n).padStart(2, '0');

export const BR = {
  viewerWrap: 'hidden md:block rounded-xl border bg-card shadow-sm overflow-hidden',
  viewer: 'block w-full min-h-[640px] h-[85vh] overflow-y-auto',
  viewerNote: 'p-6 text-center text-muted-foreground',
  pagesWrap: 'md:hidden space-y-4',
  fallbackGrid: 'grid grid-cols-2 gap-6 px-6 pb-6',
  moreGrid: 'grid gap-8 md:grid-cols-[minmax(0,280px)_1fr] items-start',
  moreCoverLink: 'block max-w-[280px] mx-auto md:mx-0',
  moreCover: 'w-full h-auto rounded-lg border shadow-md bg-white',
  moreH2: 'text-2xl md:text-3xl font-bold mb-3 text-foreground',
  moreP: 'text-muted-foreground leading-relaxed mb-4',
  moreList: 'list-disc pl-5 space-y-1 text-sm text-muted-foreground mb-6 md:columns-2',
  moreCta: 'flex flex-col sm:flex-row gap-4',
  pageImg: 'w-full h-auto rounded-lg border shadow-sm bg-white',
  pageCap: 'mt-1 text-xs text-muted-foreground text-center',
  meta: 'mt-4 text-sm text-muted-foreground',
  toc: 'grid gap-4 md:grid-cols-2',
  tocItem: 'rounded-lg border bg-card p-5 shadow-sm',
  tocPages: 'text-xs font-semibold uppercase tracking-wide text-primary mb-1',
  tocH: 'text-lg font-semibold mb-1 text-foreground',
  tocP: 'text-sm text-muted-foreground leading-relaxed',
};

export function brochureHtml(d) {
  const size = mb(d.pdfBytes);
  const dl = `<a href="${esc(d.pdf)}" download="${esc(d.pdfName)}" class="${UI.btnPrimary}" data-brochure="download">Download PDF (${size})</a>`;
  const open = `<a href="${esc(d.pdf)}" target="_blank" rel="noopener" class="${UI.btnDark}" data-brochure="open">Open in a new tab</a>`;
  const figure = (n, eager) => `
        <figure>
          <img src="${esc(d.previewDir)}/page-${pad(n)}.webp" alt="Atlantis NDT company brochure 2026, page ${n} of ${d.pages}" width="900" height="1272" loading="${eager ? 'eager' : 'lazy'}" decoding="async" class="${BR.pageImg}">
          <figcaption class="${BR.pageCap}">Page ${n} of ${d.pages}</figcaption>
        </figure>`;
  const nums = Array.from({ length: d.pages }, (_, i) => i + 1);
  const pages = nums.map((n) => figure(n, n <= 2)).join('');
  // Desktop browsers without an inline PDF viewer show the same pages (lazy-loaded, so browsers that
  // render the PDF never fetch them).
  const fallbackPages = nums.map((n) => figure(n, false)).join('');
  const toc = d.contents.map((c) => `
        <div class="${BR.tocItem}">
          <p class="${BR.tocPages}">Page ${esc(c.pages)}</p>
          <h3 class="${BR.tocH}">${esc(c.h)}</h3>
          <p class="${BR.tocP}">${esc(c.p)}</p>
        </div>`).join('');
  const more = (d.more || []).map((m) => {
    const msize = mb(m.pdfBytes);
    return `
    <section class="${UI.sectionAlt}" id="${esc(m.id)}-brochure" aria-label="${esc(m.h)}">
      <div class="${UI.wide}">
        <div class="${BR.moreGrid}">
          <a href="${esc(m.pdf)}" target="_blank" rel="noopener" data-brochure="${esc(m.id)}_cover" class="${BR.moreCoverLink}"><img src="${esc(m.cover)}" alt="${esc(m.h)}, cover page" width="600" height="848" loading="lazy" decoding="async" class="${BR.moreCover}"></a>
          <div>
            <p class="${UI.eyebrow}">${esc(m.eyebrow)}</p>
            <h2 class="${BR.moreH2}">${esc(m.h)}</h2>
            <p class="${BR.moreP}">${esc(m.p)}</p>
            <ul class="${BR.moreList}">${m.contents.map((c) => `<li>${esc(c)}</li>`).join('')}</ul>
            <div class="${BR.moreCta}"><a href="${esc(m.pdf)}" download="${esc(m.pdfName)}" class="${UI.btnPrimary}" data-brochure="${esc(m.id)}_download">Download PDF (${msize})</a><a href="${esc(m.pdf)}" target="_blank" rel="noopener" class="${UI.btnDark}" data-brochure="${esc(m.id)}_open">Open in a new tab</a></div>
            <p class="${BR.meta}">PDF · ${m.pages} pages · A4 · ${msize}</p>
          </div>
        </div>
      </div>
    </section>`;
  }).join('');
  const links = d.links.map(([href, label]) => `<a href="${esc(href)}" class="${UI.pill}"><span class="${UI.pillText}">${esc(label)}</span><span aria-hidden="true">&rarr;</span></a>`).join('');
  return `
    <section class="${UI.hero}">
      <div class="${UI.container}">
        <nav aria-label="Breadcrumb" class="${UI.crumbs}"><a href="/" class="${UI.crumbLink}">Home</a><span aria-hidden="true">/</span><span aria-current="page">Brochure</span></nav>
        <div class="${UI.heroInner}">
          <p class="${UI.eyebrow}">${esc(d.eyebrow)}</p>
          <h1 class="${UI.h1}">${esc(d.h1)}</h1>
          <p class="${UI.lede}">${esc(d.intro)}</p>
          <div class="${UI.ctaRow}">${dl}${open}</div>
          <p class="${BR.meta}">PDF · ${d.pages} pages · A4 · ${size}</p>${(d.more || []).map((m) => `
          <p class="${BR.meta}">Also here: <a href="#${esc(m.id)}-brochure" class="${UI.tdLink}">${esc(m.h)}</a> (${m.pages} pages)</p>`).join('')}
        </div>
      </div>
    </section>
    <section class="${UI.section}" aria-label="Brochure viewer">
      <div class="${UI.wide}">
        <div class="${BR.viewerWrap}">
          <object data="${esc(d.pdf)}#view=FitH" type="application/pdf" class="${BR.viewer}" aria-label="Atlantis NDT company brochure 2026 (PDF)">
            <p class="${BR.viewerNote}">Your browser does not show PDFs inline, so here are the pages. <a href="${esc(d.pdf)}" download="${esc(d.pdfName)}" class="${UI.tdLink}">Download the brochure (${size})</a>.</p>
            <div class="${BR.fallbackGrid}">${fallbackPages}
            </div>
          </object>
        </div>
        <div class="${BR.pagesWrap}">${pages}
        </div>
      </div>
    </section>
${more}
    <section class="${UI.section}">
      <div class="${UI.wide}">
        <h2 class="${UI.h2Center}">What is inside the company brochure</h2>
        <p class="${UI.sub}">Sixteen pages covering who we are, what each practice does and how an engagement runs.</p>
        <div class="${BR.toc}">${toc}
        </div>
      </div>
    </section>
    <section class="${UI.section}">
      <div class="${UI.wide}">
        <h2 class="${UI.h2Center}">Explore the services in the brochure</h2>
        <div class="${UI.pillGrid}">${links}</div>
      </div>
    </section>
    <section class="${UI.section}">
      <div class="${UI.container}">
        <div class="${UI.band}">
          <h2 class="${UI.bandH2}">Book a discovery call or a live demo</h2>
          <p class="${UI.bandP}">Tell us your scope, codes and timeline, and we will recommend the right mix of training, consulting or software.</p>
          <a href="/contact" class="${UI.btnWhite}">Contact Atlantis NDT</a>
        </div>
      </div>
    </section>`;
}

export function brochureSchema(d) {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: d.title,
      description: d.description,
      url: SITE + d.path,
      mainEntity: {
        '@type': 'DigitalDocument',
        name: 'Atlantis NDT Company Brochure 2026',
        encodingFormat: 'application/pdf',
        url: SITE + d.pdf,
        numberOfPages: d.pages,
        publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE + '/' },
        { '@type': 'ListItem', position: 2, name: 'Brochure', item: SITE + d.path },
      ],
    },
  ];
}

/** Build guard: the PDF and every page preview exist; the copy keeps the site's claim rules. */
export function assertBrochureClean(d, exists) {
  const problems = [];
  if (exists && !exists(d.pdf)) problems.push(`missing ${d.pdf}`);
  if (exists) for (let n = 1; n <= d.pages; n++) if (!exists(`${d.previewDir}/page-${pad(n)}.webp`)) problems.push(`missing page preview ${n}`);
  for (const m of d.more || []) {
    if (exists && !exists(m.pdf)) problems.push(`missing ${m.pdf}`);
    if (exists && !exists(m.cover)) problems.push(`missing ${m.cover}`);
  }
  const text = [d.title, d.description, d.intro, ...d.contents.flatMap((c) => [c.h, c.p]), ...(d.more || []).flatMap((m) => [m.h, m.p, ...m.contents])].join(' ');
  if (/nas[ -]?410/i.test(text)) problems.push('NAS 410 in page copy');
  if (/iso[ -]?9712 (training|course|programme)/i.test(text)) problems.push('ISO 9712 training claim');
  if (/[$£€₹]\s?\d|\bprice|\bfees?\b/i.test(text)) problems.push('price wording');
  if (/class[- ](approved|certified)|iacs[- ]approved|approved (service )?supplier/i.test(text)) problems.push('class-approval claim in page copy');
  if (d.title.length > 60 || d.description.length < 120 || d.description.length > 160) problems.push('title/description length');
  if (problems.length) throw new Error(`brochure page: ${problems.join('; ')}`);
}
