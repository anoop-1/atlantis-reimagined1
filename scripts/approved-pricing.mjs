// Approved Atlantis pricing — crawler layer + shared allowlist (CLAUDE.md §18, revised 2026-10-07).
//
// The owner relaxed the no-pricing rule for exactly two things:
//   A) training fees printed on the regional flyers (US, Middle East 5-method,
//      Europe, South East Asia) — never India, contact line everywhere else;
//   B) ERP plan pricing for the USA and Canada only (/erp section + /erp/pricing).
//
// Everything is driven by two data files, which the React layer reads too:
//   src/data/approved-training-fees.json
//   src/data/approved-erp-pricing.json
// No amount is ever written as text outside those files: both layers format the
// numbers at render time, so the gate (scripts/assert-no-atlantis-pricing.mjs)
// can treat any literal of an approved amount elsewhere as a violation.
//
// Hook (prerender.mjs, writeRoute, after the static CTA and before breadcrumbs):
//   html = injectApprovedPricing(html, routePath);
// Route (prerender.mjs, with the other module routes):
//   routes.push(ERP_PRICING_ROUTE);
import { readFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const TRAINING_FEES_FILE = 'src/data/approved-training-fees.json';
export const ERP_PRICING_FILE = 'src/data/approved-erp-pricing.json';
export const TRAINING = JSON.parse(readFileSync(join(ROOT, TRAINING_FEES_FILE), 'utf-8'));
export const ERP = JSON.parse(readFileSync(join(ROOT, ERP_PRICING_FILE), 'utf-8'));

export const ALLOWED_TRAINING_REGIONS = ['US', 'ME', 'EU', 'SEA'];
export const ALLOWED_ERP_MARKETS = ['US', 'CA'];
// India is never priced (owner, 2026-10-07) even though an India flyer exists.
export const INDIA_PATH = /india|hyderabad|bangalore|bengaluru|chennai|mumbai|delhi|pune|kolkata|ahmedabad|kochi|cochin|vizag|visakhapatnam|vadodara|jamnagar|surat|noida|gurgaon|gurugram|coimbatore|bhubaneswar|mangalore|nagpur|lucknow|indore|haldia|paradip|\/(hi|in)\//i;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const attr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;');

export const fmtUsd = (n) => '$' + Number(n).toLocaleString('en-US', { maximumFractionDigits: 0 });
export const fmtAed = (n) => 'AED ' + Number(n).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
export const fmtMoney = (m) => (m.aed != null ? `${fmtUsd(m.usd)} (${fmtAed(m.aed)})` : fmtUsd(m.usd));

/** {{plan.field}} → formatted value. Same rules as src/lib/approved-pricing.ts. */
export function erpTokens(text) {
  return String(text).replace(/\{\{(\w+)\.(\w+)\}\}/g, (all, key, field) => {
    const plan = ERP.plans.find((p) => p.key === key);
    if (!plan || plan[field] == null) throw new Error(`approved-pricing: unknown token ${all}`);
    return field === 'users' ? String(plan[field]) : fmtUsd(plan[field]);
  });
}

// ── lookups ────────────────────────────────────────────────────────────────
export function trainingRegionForPath(path) {
  for (const [key, r] of Object.entries(TRAINING.regions)) if (r.pages.includes(path)) return key;
  return null;
}
export function erpModeForPath(path) {
  return ERP.pages[path] || null;
}

/** Every approved amount, as the strings a page could show. Used by the gates. */
export function approvedAmounts() {
  const training = new Map(); // formatted string -> Set(regionKey)
  const addT = (s, region) => { if (!training.has(s)) training.set(s, new Set()); training.get(s).add(region); };
  for (const [key, r] of Object.entries(TRAINING.regions)) {
    for (const t of r.tables) for (const row of t.rows) for (const cell of row) {
      if (cell && typeof cell === 'object') { addT(fmtUsd(cell.usd), key); if (cell.aed != null) addT(fmtAed(cell.aed), key); }
    }
  }
  const erp = new Set();
  for (const p of ERP.plans) { erp.add(fmtUsd(p.annual)); erp.add(fmtUsd(p.setup)); }
  return { training, erp };
}

/** Structural rules on the data files themselves. Returns a list of problems. */
export function validateApprovedPricingData(TRAINING_DATA = TRAINING, ERP_DATA = ERP) {
  const errs = [];
  const TRAINING = TRAINING_DATA, ERP = ERP_DATA; // shadow: lets the gate self-test feed bad fixtures
  const seen = new Map();
  for (const [key, r] of Object.entries(TRAINING.regions)) {
    if (!ALLOWED_TRAINING_REGIONS.includes(key)) errs.push(`training region "${key}" is not an approved region (${ALLOWED_TRAINING_REGIONS.join(', ')})`);
    if (/india/i.test(`${key} ${r.label} ${r.heading} ${r.source}`)) errs.push(`training region "${key}" references India — India is never priced`);
    for (const p of r.pages) {
      if (INDIA_PATH.test(p)) errs.push(`training fees placed on India page ${p}`);
      if (/^\/(erp|digital-twin|consulting|practical-ndt|ndt-reporting|best-ndt-reporting|inspection|ndt-inspection)/.test(p)) errs.push(`training fees placed on non-training page ${p}`);
      if (seen.has(p)) errs.push(`page ${p} is in two training regions (${seen.get(p)}, ${key})`);
      seen.set(p, key);
    }
    for (const t of r.tables) for (const row of t.rows) for (const cell of row) {
      if (cell && typeof cell === 'object' && !(Number.isFinite(cell.usd) && cell.usd > 0)) errs.push(`training region ${key}: non-numeric fee cell in "${t.caption}"`);
      if (typeof cell === 'string' && /[$€£₹]|\b(?:USD|AED|EUR|INR)\s?\d/.test(cell)) errs.push(`training region ${key}: amount written as text ("${cell}") — use a {usd} cell`);
    }
  }
  const mk = ERP.markets || [];
  if (!mk.length || mk.some((m) => !ALLOWED_ERP_MARKETS.includes(m))) errs.push(`ERP markets must be a subset of ${ALLOWED_ERP_MARKETS.join('/')} (got ${mk.join(',')})`);
  for (const p of Object.keys(ERP.pages)) if (!/^\/erp(\/pricing)?$/.test(p)) errs.push(`ERP prices placed on ${p} — only /erp and /erp/pricing are allowed`);
  for (const p of ERP.linkFrom || []) if (INDIA_PATH.test(p) || !/^\/ndt-erp-(usa|texas|houston|ontario|alberta|[a-z-]+)$/.test(p)) errs.push(`ERP pricing link placed on ${p}`);
  const textBlob = JSON.stringify({ s: ERP.section, p: ERP.page });
  if (/[$€£₹]\s?\d|\b(?:USD|AED|CAD)\s?\d/.test(textBlob)) errs.push('ERP copy contains a literal amount — use {{plan.field}} tokens');
  if (/odoo/i.test(JSON.stringify(ERP))) errs.push('ERP data mentions the underlying platform name');
  return errs;
}

// ── training fees: crawler HTML ───────────────────────────────────────────────
export const TRAINING_MARKER = 'data-approved-training-fees';
export const ERP_MARKER = 'data-approved-erp-pricing';

function tableHtml(t) {
  const head = t.columns.map((c) => `<th scope="col">${esc(c)}</th>`).join('');
  const body = t.rows.map((row) => '<tr>' + row.map((cell, i) => {
    const v = cell && typeof cell === 'object' ? fmtMoney(cell) : cell;
    return i === 0 ? `<th scope="row">${esc(v)}</th>` : `<td>${esc(v)}</td>`;
  }).join('') + '</tr>').join('');
  return `<table><caption>${esc(t.caption)}</caption><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
}

export function renderTrainingFeesHtml(regionKey) {
  const r = TRAINING.regions[regionKey];
  if (!r) return '';
  const others = Object.entries(TRAINING.otherRegionLinks)
    .filter(([k]) => k !== regionKey)
    .map(([k, href]) => `<a href="${attr(href)}">${esc(TRAINING.regions[k].label)}</a>`).join(', ');
  return `
    <section id="training-fees" ${TRAINING_MARKER}="${regionKey}" aria-labelledby="training-fees-h">
      <h2 id="training-fees-h">${esc(r.heading)}</h2>
      <p>${esc(r.intro)}</p>
      ${r.tables.map(tableHtml).join('\n      ')}
      <ul>${r.notes.map((n) => `<li>${esc(n)}</li>`).join('')}</ul>
      <p>Published fees for other regions: ${others}. ${esc(TRAINING.contactText)} <a href="${attr(TRAINING.contactHref)}">Contact us for fees in your region</a>.</p>
    </section>
`;
}

// Lines on a priced hub that would now contradict the table.
const NO_PRICING_LINE = /Atlantis NDT publishes no pricing\s*(?:—|-|–)\s*(?:pricing\s+|it\s+)?varies by/g;

// ── ERP: crawler HTML ─────────────────────────────────────────────────────────
function erpPlanCardsHtml() {
  return ERP.plans.map((p) => `
        <article>
          <h3>${esc(p.name)} <small>(${esc(p.tier)})</small></h3>
          <p><strong>${fmtUsd(p.annual)} / year licence</strong> + ${fmtUsd(p.setup)} one-time implementation · up to ${p.users} users</p>
          ${p.inherits ? `<p>${esc(p.inherits)}</p>` : ''}
          <ul>${p.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
        </article>`).join('');
}
function erpComparisonTableHtml() {
  const row = (label, fn) => `<tr><th scope="row">${esc(label)}</th>${ERP.plans.map((p) => `<td>${esc(fn(p))}</td>`).join('')}</tr>`;
  return `<table><caption>Atlantis ERP plans, ${esc(ERP.marketLabel)} (USD)</caption><thead><tr><th scope="col">Plan</th>${ERP.plans.map((p) => `<th scope="col">${esc(p.name)}</th>`).join('')}</tr></thead><tbody>`
    + row('Annual licence', (p) => `${fmtUsd(p.annual)} / year`)
    + row('One-time implementation', (p) => fmtUsd(p.setup))
    + row('Users', (p) => `Up to ${p.users}`)
    + ERP.comparison.map((c) => row(c.label, (p) => c.values[p.key] || '')).join('')
    + '</tbody></table>';
}

export function renderErpSectionHtml() {
  const s = ERP.section;
  return `
    <section id="erp-plans-pricing" ${ERP_MARKER}="section" aria-labelledby="erp-plans-h">
      <h2 id="erp-plans-h">${esc(s.heading)}</h2>
      <p>${esc(s.intro)}</p>
      ${erpComparisonTableHtml()}
      <p>${esc(s.outsideNa)} <a href="${attr(ERP.quoteHref)}">Request a quote for your region</a>. <a href="/erp/pricing">${esc(s.moreLinkText)}</a>.</p>
    </section>
`;
}

function erpPricingBody() {
  const pg = ERP.page;
  const faq = pg.faq.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(erpTokens(f.a))}</p>`).join('\n      ');
  return [
    '<header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/erp">ERP</a><a href="/erp/apps">ERP Apps</a><a href="/erp/pricing">Pricing</a><a href="/contact?service=erp">Contact</a></nav></header>',
    '<main>',
    `<h1>${esc(pg.h1)}</h1>`,
    ...pg.intro.map((p) => `<p>${esc(erpTokens(p))}</p>`),
    `<section ${ERP_MARKER}="full">`,
    `<h2>Plans at a glance — ${esc(ERP.marketLabel)}</h2>`,
    erpComparisonTableHtml(),
    erpPlanCardsHtml(),
    `<p><a href="${attr(ERP.walkthroughHref)}">Book a free walkthrough</a> and see your own workflow running before you choose a plan.</p>`,
    '</section>',
    ...pg.sections.map((s) => `<h2>${esc(s.h2)}</h2>\n${s.paragraphs.map((p) => `<p>${esc(erpTokens(p))}</p>`).join('\n')}`),
    `<p>Outside North America? <a href="${attr(ERP.quoteHref)}">Request a quote for your region</a>. See also <a href="/erp">Atlantis ERP</a> and <a href="/erp/apps">every ERP app</a>.</p>`,
    '<h2>Frequently asked questions</h2>',
    faq,
    '</main>',
  ].join('\n');
}

function erpFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: ERP.page.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: erpTokens(f.a) } })),
  };
}

export const ERP_PRICING_ROUTE = {
  path: ERP.page.path,
  publishedAt: ERP.effective,
  title: ERP.page.title,
  ogTitle: ERP.page.title,
  description: ERP.page.description,
  ogDesc: ERP.page.description,
  bodyContent: erpPricingBody(),
  structuredData: erpFaqSchema(),
};

/**
 * Final-HTML hook. Adds the approved table to allowlisted paths only; never
 * touches any other page, and never an India page even if misconfigured.
 */
export function injectApprovedPricing(html, path) {
  if (INDIA_PATH.test(path)) return html;
  if (!/<\/main>/i.test(html) || /name="robots"[^>]*noindex/i.test(html)) return html;
  let out = html;
  const region = trainingRegionForPath(path);
  if (region && !out.includes(TRAINING_MARKER)) {
    out = out.replace(NO_PRICING_LINE, 'Published fees for this region are in the fee table on this page; group, corporate and custom programmes vary by');
    out = out.replace(/<\/main>(?![\s\S]*<\/main>)/i, renderTrainingFeesHtml(region) + '  </main>');
  }
  const mode = erpModeForPath(path);
  if (mode === 'section' && !out.includes(ERP_MARKER)) {
    out = out.replace(NO_PRICING_LINE, 'In the USA and Canada the plans are published below; elsewhere pricing varies by');
    out = out.replace(/<\/main>(?![\s\S]*<\/main>)/i, renderErpSectionHtml() + '  </main>');
  }
  if ((ERP.linkFrom || []).includes(path) && !out.includes('href="/erp/pricing"')) {
    out = out.replace(/<\/main>(?![\s\S]*<\/main>)/i, `    <p data-erp-pricing-link>Atlantis ERP plans for the USA and Canada are published on the <a href="/erp/pricing">ERP pricing page</a>.</p>\n  </main>`);
  }
  return out;
}
