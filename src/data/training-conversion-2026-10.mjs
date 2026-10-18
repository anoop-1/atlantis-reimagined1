// 2026-10-18 (owner): training conversion — one model for both layers.
//   * Three-button bar on every training city/regional page: Check your eligibility ·
//     Training FAQs · Register & Buy Now (portal.atlantisndt.com prices by country).
//   * /ndt-training-faq — the questions prospects actually asked, with the answers given.
//   * /snt-tc-1a-eligibility — SNT-TC-1A Level I/II criteria plus a browser checker.
// Content: src/data/training-conversion-2026-10.json. Hours: src/data/snt-tc-1a-hours.json
// (the single source the hours planner and the training matrix already read).
// React: TrainingCtaBar.tsx, pages/NdtTrainingFaq.tsx, pages/SntTc1aEligibility.tsx.
// Crawler: scripts/training-conversion-2026-10.mjs. Functions take the data as arguments
// so the same file runs in Vite and in Node without JSON-import syntax.

export const TRAINING_FAQ_PATH = '/ndt-training-faq';
export const ELIGIBILITY_PATH = '/snt-tc-1a-eligibility';
export const PORTAL = 'https://portal.atlantisndt.com';
const SITE = 'https://atlantisndt.com';

/** Training city, regional, industry and level pages (the owner's "regional city pages"). */
export function showsTrainingCtaBar(path) {
  if (path === TRAINING_FAQ_PATH || path === ELIGIBILITY_PATH) return false;
  return /^\/(?:training|training-[a-z-]+|ndt-training-[a-z-]+|training\/[a-z0-9-]+|[a-z-]+-ndt-training(?:-[a-z-]+)?|(?:ut|rt|mt|pt|vt|et|ndt)-level-[123]-training|asnt-level-iii-training)$/.test(path);
}

// Same class strings in both layers: the crawler copy is visible until React takes over.
export const BAR_CLASS = {
  wrap: 'container mx-auto max-w-5xl px-6 my-6',
  box: 'rounded-xl border border-primary/30 bg-primary/5 p-4 md:p-5',
  lead: 'text-sm md:text-base font-medium mb-3',
  row: 'flex flex-col sm:flex-row flex-wrap gap-3',
  primary: 'inline-flex items-center justify-center rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground hover:bg-primary/90',
  secondary: 'inline-flex items-center justify-center rounded-lg border border-primary px-5 py-3 font-semibold text-primary hover:bg-primary/10',
  note: 'text-xs text-muted-foreground mt-2',
};

export const isExternal = (href) => /^https?:\/\//.test(href);

/** Buttons for this page, without a link to the page itself. The portal button is primary. */
export function ctaBarButtons(data, path) {
  return data.bar.buttons.filter((b) => b.href !== path);
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = esc;

function buttonHtml(b) {
  const ext = isExternal(b.href);
  const cls = ext ? BAR_CLASS.primary : BAR_CLASS.secondary;
  return `<a href="${attr(b.href)}"${ext ? ' target="_blank" rel="noopener"' : ''} data-cta-variant="${attr(b.variant)}" class="${cls}">${esc(b.label)}</a>`;
}

export const CTA_BAR_MARKER = 'data-training-cta-bar';

export function ctaBarHtml(data, path) {
  const btns = ctaBarButtons(data, path);
  return `<div ${CTA_BAR_MARKER}="2026-10" class="${BAR_CLASS.wrap}"><div class="${BAR_CLASS.box}"><p class="${BAR_CLASS.lead}">${esc(data.bar.lead)}</p><div class="${BAR_CLASS.row}">${btns.map(buttonHtml).join('')}</div><p class="${BAR_CLASS.note}">${esc(data.bar.note)}</p></div></div>`;
}

// ── FAQ page ────────────────────────────────────────────────────────────────
export function faqItems(data) {
  return data.faq.sections.flatMap((s) => s.items);
}

export function includesHtml(data) {
  const i = data.includes;
  return `<section id="course-includes" aria-label="${attr(i.h2)}"><h2>${esc(i.h2)}</h2><p>${esc(i.intro)}</p><ul>${i.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></section>`;
}

export function faqPageHtml(data) {
  const f = data.faq;
  const sections = f.sections.map((s) => `<section id="${attr(s.id)}" aria-label="${attr(s.h2)}"><h2>${esc(s.h2)}</h2>${s.items.map(([q, a]) => `<h3>${esc(q)}</h3><p>${esc(a)}</p>`).join('')}</section>`).join('\n');
  return [
    `<h1>${esc(f.h1)}</h1>`,
    `<p data-training-faq="2026-10">${esc(f.answer)}</p>`,
    ctaBarHtml(data, f.path),
    includesHtml(data),
    sections,
    `<p><a href="${attr(f.callHref)}">${esc(f.callLabel)}</a> · <a href="${attr(ELIGIBILITY_PATH)}">Check your SNT-TC-1A eligibility</a> · <a href="/training">All NDT training</a> · <a href="/ndt-practice-tests">Free NDT practice tests</a></p>`,
  ].join('\n');
}

export function faqPageSchema(data) {
  const f = data.faq;
  const url = `${SITE}${f.path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        url,
        name: f.h1,
        mainEntity: faqItems(data).map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Training', item: `${SITE}/training` },
          { '@type': 'ListItem', position: 3, name: 'Training FAQ', item: url },
        ],
      },
    ],
  };
}

// ── Eligibility ─────────────────────────────────────────────────────────────
export const LEVELS = [
  { key: 'I', label: 'Level I' },
  { key: 'II', label: 'Level II (with or without Level I)' },
];

const num = (v) => Number(String(v).replace(/[^\d.]/g, '')) || 0;

/** Per-method minimums from snt-tc-1a-hours.json: Level I, Level II additional, cumulative Level II. */
export const methodCodes = (hours) => Object.keys(hours.classroom);

export function hoursRows(hours) {
  return methodCodes(hours).map((m) => {
    const [t1, t2] = hours.classroom[m].map(num);
    const [e1, e2] = hours.ojt[m].map(num);
    return { method: m, name: (hours.methodNames && hours.methodNames[m]) || m, t1, t2, e1, e2, tTotal: t1 + t2, eTotal: e1 + e2 };
  });
}

/**
 * Screening against the SNT-TC-1A recommended minimums. Level II is checked cumulatively
 * (Level I + Level II), which covers both routes: Level II experience is time at Level I or
 * equivalent, and direct entry needs the sum of both.
 */
export function eligibilityCheck(hours, { method, level, training, experience, vision }) {
  const row = hoursRows(hours).find((r) => r.method === method);
  if (!row) return null;
  const needT = level === 'II' ? row.tTotal : row.t1;
  const needE = level === 'II' ? row.eTotal : row.e1;
  const t = Math.max(0, Number(training) || 0);
  const e = Math.max(0, Number(experience) || 0);
  const missing = [];
  if (t < needT) missing.push(`${needT - t} more classroom training hours in ${method} (${needT} needed)`);
  if (e < needE) missing.push(`${needE - e} more documented experience hours in ${method} (${needE} needed)`);
  if (!vision) missing.push('a current vision examination (near vision every 12 months, plus colour contrast)');
  return { method, level, needT, needE, missing, ready: missing.length === 0 };
}

export function hoursTableHtml(hours) {
  const rows = hoursRows(hours).map((r) => `<tr><th scope="row">${esc(r.name)}</th><td>${r.t1}</td><td>${r.e1}</td><td>${r.t2}</td><td>${r.e2}</td><td>${r.tTotal} / ${r.eTotal}</td></tr>`).join('');
  return `<table><caption>SNT-TC-1A recommended minimum hours (training / experience)</caption><thead><tr><th scope="col">Method</th><th scope="col">Level I training</th><th scope="col">Level I experience</th><th scope="col">Level II training (additional)</th><th scope="col">Level II experience (additional)</th><th scope="col">Direct to Level II (training / experience)</th></tr></thead><tbody>${rows}</tbody></table>`;
}

export function eligibilitySectionsHtml(data) {
  return data.eligibility.sections.map((s) => [
    `<section aria-label="${attr(s.h2)}"><h2>${esc(s.h2)}</h2>`,
    (s.paragraphs || []).map((p) => `<p>${esc(p)}</p>`).join(''),
    s.list ? `<ul>${s.list.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '',
    '</section>',
  ].join('')).join('\n');
}

export function eligibilityPageHtml(data, hours) {
  const g = data.eligibility;
  return [
    `<h1>${esc(g.h1)}</h1>`,
    `<p data-snt-eligibility="2026-10">${esc(g.answer)}</p>`,
    `<section id="checker" aria-label="${attr(g.checker.h2)}"><h2>${esc(g.checker.h2)}</h2><p>${esc(g.checker.intro)}</p><p>${esc(g.checker.crawlerNote)}</p><p>${esc(g.checker.screening)}</p></section>`,
    `<section id="hours" aria-label="${attr(g.hoursH2)}"><h2>${esc(g.hoursH2)}</h2><p>${esc(g.hoursIntro)}</p>${hoursTableHtml(hours)}</section>`,
    eligibilitySectionsHtml(data),
    `<p><a href="${attr(g.asntLevel3Href)}">ASNT NDT Level III eligibility requirements</a> · <a href="/tools/snt-tc-1a-hours-planner">SNT-TC-1A hours planner</a> · <a href="${attr(TRAINING_FAQ_PATH)}">Training FAQs</a> · <a href="${attr(g.contactHref)}">${esc(g.contactLabel)}</a></p>`,
    ctaBarHtml(data, g.path),
  ].join('\n');
}

export function eligibilitySchema(data) {
  const g = data.eligibility;
  const url = `${SITE}${g.path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebApplication',
        '@id': `${url}#checker`,
        name: 'SNT-TC-1A eligibility checker',
        url,
        description: g.description,
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Any (runs in the browser)',
        isAccessibleForFree: true,
        publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE}/` },
          { '@type': 'ListItem', position: 2, name: 'Training', item: `${SITE}/training` },
          { '@type': 'ListItem', position: 3, name: 'SNT-TC-1A eligibility', item: url },
        ],
      },
    ],
  };
}
