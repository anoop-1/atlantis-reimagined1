// /careers and /careers/{job} — owner, 2026-11-20: "add a careers section to the website and post the below
// position in Hyderabad ... and write another JD for pro rata UT technician on freelance basis in houston Texas
// or anywhere else in the USA."
//
// One renderer for both layers: the React pages (src/pages/Careers.tsx, src/pages/CareerJob.tsx) and the crawler
// (scripts/careers-page.mjs) call these functions on src/data/careers-2026-11.json, with the service-section UI
// classes, so visitors and Google read the same HTML in the site's design.
//
// Rules (assertCareersClean): no pay figures or currency amounts until the owner confirms them, no placeholder
// text, info@atlantisndt.com is the only email, and a job is listed (and carries JobPosting markup for Google's
// job results) only while its status is "open" and its validThrough date has not passed. An expired job keeps its
// page, marked closed, with no JobPosting markup, so a build never fails just because a date went by.
import { UI } from './service-section/core.mjs';

export const SITE = 'https://atlantisndt.com';
export const CAREERS_PATH = '/careers';
const EMAIL = 'info@atlantisndt.com';
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const ymd = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d).slice(0, 10));
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const longDate = (iso) => { const [y, m, d] = String(iso).split('-').map(Number); return `${d} ${MONTHS[m - 1]} ${y}`; };

export const CR = {
  snapshotWrap: 'max-w-4xl mx-auto overflow-x-auto rounded-lg border bg-card shadow-sm',
  ul: 'list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed',
  ol: 'list-decimal pl-6 space-y-2 text-muted-foreground leading-relaxed mt-4',
  meta: 'mt-2 text-sm text-muted-foreground',
  badge: 'inline-block rounded-full bg-primary/10 text-primary text-xs font-semibold px-3 py-1 mr-2 mb-2',
  applyCard: 'max-w-4xl mx-auto rounded-xl border-2 border-primary/30 bg-card p-6 md:p-8 shadow-sm',
  note: 'max-w-4xl mx-auto mt-6 text-sm text-muted-foreground leading-relaxed',
  closed: 'max-w-4xl mx-auto mb-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-amber-900',
};

export function isOpen(job, today = new Date()) {
  return job.status === 'open' && ymd(job.validThrough) >= ymd(today);
}
export function openJobs(data, today = new Date()) {
  return data.jobs.filter((j) => isOpen(j, today));
}
export function jobFor(data, pathname) {
  const p = String(pathname || '').replace(/\/+$/, '');
  return data.jobs.find((j) => j.path === p) || null;
}
const mailto = (subject) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
const crumbs = (items) => `<nav aria-label="Breadcrumb" class="${UI.crumbs}">${items.map(([href, label], i) => (i < items.length - 1 ? `<a href="${href}" class="${UI.crumbLink}">${esc(label)}</a><span aria-hidden="true">/</span>` : `<span aria-current="page">${esc(label)}</span>`)).join('')}</nav>`;

function jobCard(job) {
  return `
          <a href="${job.path}" class="${UI.linkCard}" data-career="${esc(job.slug)}">
            <p class="${UI.linkCardTitle}">${esc(job.h1)}</p>
            <p><span class="${CR.badge}">${esc(job.card.type)}</span><span class="${CR.badge}">${esc(job.card.location)}</span></p>
            <p class="${UI.linkCardText}">${esc(job.card.text)}</p>
            <span class="${UI.linkCardMore}">Read the job description <span aria-hidden="true">&rarr;</span></span>
          </a>`;
}

export function careersHubHtml(data, today = new Date()) {
  const h = data.hub;
  const jobs = openJobs(data, today);
  const why = h.why.map((w) => `
          <div class="${UI.card}">
            <h3 class="${UI.listCardTitle}">${esc(w.h)}</h3>
            <p class="text-muted-foreground leading-relaxed">${esc(w.p)}</p>
          </div>`).join('');
  return `
    <section class="${UI.hero}">
      <div class="${UI.container}">
        ${crumbs([['/', 'Home'], [CAREERS_PATH, 'Careers']])}
        <div class="${UI.heroInner}">
          <p class="${UI.eyebrow}">${esc(h.eyebrow)}</p>
          <h1 class="${UI.h1}">${esc(h.h1)}</h1>
          <p class="${UI.lede}">${esc(h.intro)}</p>
          <div class="${UI.ctaRow}"><a href="#open-positions" class="${UI.btnPrimary}">See open positions</a><a href="${mailto('General application')}" class="${UI.btnDark}" data-career-apply="general">Send your CV</a></div>
        </div>
      </div>
    </section>
    <section class="${UI.section}" id="open-positions">
      <div class="${UI.wide}">
        <h2 class="${UI.h2Center}">${esc(h.positionsHeading)}</h2>
        <p class="${UI.sub}">${jobs.length ? esc(h.positionsSub) : 'There are no open positions right now. You can still send your CV with the subject line "General application".'}</p>
        <div class="grid gap-6 md:grid-cols-2">${jobs.map(jobCard).join('')}
        </div>
      </div>
    </section>
    <section class="${UI.sectionAlt}">
      <div class="${UI.wide}">
        <h2 class="${UI.h2Center}">${esc(h.whyHeading)}</h2>
        <div class="${UI.grid3}">${why}
        </div>
      </div>
    </section>
    <section class="${UI.section}">
      <div class="${UI.narrow}">
        <h2 class="${UI.h2}">${esc(h.whereHeading)}</h2>
        <p class="${UI.p}">${esc(h.where)}</p>
        <h2 class="${UI.h2} mt-10">${esc(h.applyHeading)}</h2>
        <ul class="${CR.ul}">${h.apply.map((a) => `<li>${esc(a)}</li>`).join('')}</ul>
        <p class="${UI.p} mt-6"><strong class="text-foreground">No fees, ever.</strong> ${esc(h.noFee)}</p>
        <p class="${UI.p}">${esc(h.equal)}</p>
        <p class="${UI.p}">Questions about working with us? <a href="/contact" class="${UI.tdLink}">Contact Atlantis NDT</a> or read <a href="/about" class="${UI.tdLink}">about the company</a>.</p>
      </div>
    </section>`;
}

function section(s) {
  const p = (s.p || []).map((x) => `<p class="${UI.p}">${esc(x)}</p>`).join('');
  const items = s.items ? `<ul class="${CR.ul}">${s.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
  const steps = s.steps ? `<ol class="${CR.ol}">${s.steps.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>` : '';
  return `
        <h2 class="${UI.h2} mt-10">${esc(s.h)}</h2>
        ${p}${items}${steps}`;
}

export function careerJobHtml(data, job, today = new Date()) {
  const open = isOpen(job, today);
  const a = job.apply;
  const snapshot = job.snapshot.map(([k, v]) => `<tr class="${UI.tr}"><th scope="row" class="${UI.tdFirst}">${esc(k)}</th><td class="${UI.td}">${esc(v)}</td></tr>`).join('');
  const applyBtn = `<a href="${mailto(a.subject)}" class="${UI.btnPrimary}" data-career-apply="${esc(job.slug)}">Apply by email</a>`;
  const others = data.jobs.filter((j) => j !== job && isOpen(j, today));
  return `
    <section class="${UI.hero}">
      <div class="${UI.container}">
        ${crumbs([['/', 'Home'], [CAREERS_PATH, 'Careers'], [job.path, job.jobTitle]])}
        <div class="${UI.heroInner}">
          <p class="${UI.eyebrow}">Careers · ${esc(job.card.location)}</p>
          <h1 class="${UI.h1}">${esc(job.h1)}</h1>
          <p class="${UI.lede}">${esc(job.summary)}</p>
          <div class="${UI.ctaRow}">${open ? applyBtn : ''}<a href="${CAREERS_PATH}" class="${UI.btnDark}">All open positions</a></div>
          <p class="${CR.meta}">Posted ${esc(longDate(job.datePosted))} · ${esc(job.card.type)}</p>
        </div>
      </div>
    </section>
    <section class="${UI.section}">
      <div class="${UI.wide}">
        ${open ? '' : `<p class="${CR.closed}">This position is closed. See <a href="${CAREERS_PATH}" class="${UI.tdLink}">current openings</a>.</p>`}
        <h2 class="${UI.h2Center}">Role snapshot</h2>
        <div class="${CR.snapshotWrap}"><table class="${UI.table}"><tbody>${snapshot}</tbody></table></div>
      </div>
    </section>
    <section class="${UI.sectionAlt}">
      <div class="${UI.narrow}">${job.sections.map(section).join('')}
      </div>
    </section>
    <section class="${UI.section}" id="apply">
      <div class="${CR.applyCard}">
        <h2 class="${UI.h2}">How to apply</h2>
        <p class="${UI.p}">${esc(a.text)}</p>
        <p class="${UI.p}">${esc(a.next)}</p>
        ${a.phone ? `<p class="${UI.p}">${esc(a.phoneText)} <a href="tel:${esc(a.phone.replace(/[^+\d]/g, ''))}" class="${UI.tdLink}">${esc(a.phone)}</a>.</p>` : ''}
        ${open ? `<div class="flex flex-col sm:flex-row gap-3 mt-2">${applyBtn}</div>` : ''}
      </div>
      <p class="${CR.note}"><strong class="text-foreground">No fees, ever.</strong> ${esc(data.hub.noFee)}</p>
      <p class="${CR.note}">${esc(data.hub.equal)} Questions? <a href="/contact" class="${UI.tdLink}">Contact Atlantis NDT</a>.</p>
      ${others.length ? `<p class="${CR.note}">Other open positions: ${others.map((j) => `<a href="${j.path}" class="${UI.tdLink}">${esc(j.h1)}</a>`).join(' · ')}.</p>` : ''}
    </section>`;
}

const breadcrumbSchema = (items) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([href, name], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE + href })),
});

export function careersHubSchema(data, today = new Date()) {
  const h = data.hub;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'CollectionPage', name: h.title, description: h.description, url: SITE + h.path, publisher: { '@type': 'Organization', name: 'Atlantis NDT', url: SITE } },
      breadcrumbSchema([['/', 'Home'], [h.path, 'Careers']]),
      { '@type': 'ItemList', itemListElement: openJobs(data, today).map((j, i) => ({ '@type': 'ListItem', position: i + 1, url: SITE + j.path, name: j.jobTitle })) },
    ],
  };
}

/** Plain HTML job description for JobPosting.description (Google asks for the full description, HTML allowed). */
function descriptionHtml(job) {
  const parts = [`<p>${esc(job.summary)}</p>`];
  for (const s of job.sections) {
    parts.push(`<p><strong>${esc(s.h)}</strong></p>`);
    for (const p of s.p || []) parts.push(`<p>${esc(p)}</p>`);
    if (s.items) parts.push(`<ul>${s.items.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>`);
    if (s.steps) parts.push(`<ol>${s.steps.map((x) => `<li>${esc(x)}</li>`).join('')}</ol>`);
  }
  parts.push(`<p><strong>How to apply</strong></p><p>${esc(job.apply.text)}</p>`);
  return parts.join('');
}

export function jobPostingSchema(data, job, today = new Date()) {
  const s = job.schema;
  const graph = [breadcrumbSchema([['/', 'Home'], [CAREERS_PATH, 'Careers'], [job.path, job.jobTitle]])];
  if (isOpen(job, today)) {
    const posting = {
      '@type': 'JobPosting',
      title: job.jobTitle,
      description: descriptionHtml(job),
      datePosted: job.datePosted,
      validThrough: `${job.validThrough}T23:59:59`,
      employmentType: s.employmentType,
      hiringOrganization: { '@type': 'Organization', name: s.hiringOrganization, sameAs: SITE, logo: `${SITE}/atlantis.png` },
      jobLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: s.addressLocality, addressRegion: s.addressRegion, postalCode: s.postalCode, addressCountry: s.addressCountry } },
      identifier: { '@type': 'PropertyValue', name: 'Atlantis NDT', value: s.identifier },
      directApply: false,
      industry: s.industry,
      occupationalCategory: s.occupationalCategory,
      skills: s.skills,
      educationRequirements: { '@type': 'EducationalOccupationalCredential', credentialCategory: s.education },
      url: SITE + job.path,
    };
    if (typeof s.experienceMonths === 'number') posting.experienceRequirements = { '@type': 'OccupationalExperienceRequirements', monthsOfExperience: s.experienceMonths };
    graph.unshift(posting);
  }
  return { '@context': 'https://schema.org', '@graph': graph };
}

const PLACEHOLDER = /\[[^\]]*\]|\bto be confirmed\b|\bTBD\b|\bTBC\b|lorem|xxx/i;
const MONEY = /[$₹£€]\s?\d|\b(?:inr|usd|rs\.?)\s?\d|\d\s?(?:lakh|lpa|k\/yr|per annum)\b|\bctc\b/i;
const EMAILS = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/gi;

/** Build guard. builtPaths (optional): Set of built paths, to check internal links. */
export function assertCareersClean(data, builtPaths) {
  const problems = [];
  const pages = [data.hub, ...data.jobs];
  for (const pg of pages) {
    if (!pg.title || pg.title.length > 60) problems.push(`${pg.path}: title length ${pg.title?.length} (max 60)`);
    if (!pg.description || pg.description.length < 120 || pg.description.length > 160) problems.push(`${pg.path}: description length ${pg.description?.length} (120-160)`);
  }
  for (const j of data.jobs) {
    for (const f of ['slug', 'path', 'status', 'datePosted', 'validThrough', 'h1', 'jobTitle', 'summary', 'snapshot', 'sections', 'apply', 'schema', 'card']) if (!j[f]) problems.push(`${j.path || '?'}: missing ${f}`);
    if (j.path !== `${CAREERS_PATH}/${j.slug}`) problems.push(`${j.path}: path must be ${CAREERS_PATH}/${j.slug}`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(j.datePosted || '') || !/^\d{4}-\d{2}-\d{2}$/.test(j.validThrough || '')) problems.push(`${j.path}: dates must be YYYY-MM-DD`);
    for (const f of ['employmentType', 'hiringOrganization', 'addressLocality', 'addressRegion', 'addressCountry', 'identifier']) if (!j.schema?.[f]) problems.push(`${j.path}: schema.${f} missing`);
    if (!j.apply?.subject) problems.push(`${j.path}: apply.subject missing`);
  }
  const strings = [];
  const walk = (v, key) => { if (key === '_note') return; if (typeof v === 'string') strings.push(v); else if (Array.isArray(v)) v.forEach((x) => walk(x)); else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, k); };
  walk(data);
  for (const t of strings) {
    const m1 = t.match(PLACEHOLDER); if (m1) problems.push(`placeholder text: "${m1[0]}" in "${t.slice(0, 60)}"`);
    const m2 = t.match(MONEY); if (m2) problems.push(`pay or currency figure: "${m2[0]}" (no pay figures until the owner confirms them)`);
    for (const e of t.match(EMAILS) || []) if (e.toLowerCase() !== EMAIL) problems.push(`email other than ${EMAIL}: ${e}`);
  }
  if (builtPaths) {
    const html = careersHubHtml(data) + data.jobs.map((j) => careerJobHtml(data, j)).join('');
    for (const [, h] of html.matchAll(/href="(\/[^"#?]*)/g)) if (h !== '/' && !builtPaths.has(h.replace(/\/+$/, ''))) problems.push(`link to unbuilt ${h}`);
  }
  if (problems.length) throw new Error(`\n❌ Careers guard (${problems.length}):\n  ${problems.join('\n  ')}`);
}
