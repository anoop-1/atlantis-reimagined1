/**
 * Method × Industry routes — 78 pages from banked research — 2026-08-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * /{method}-testing-{industry} — e.g. /ultrasonic-testing-refining
 *
 * Each page composes:
 *   - the §26.1 METHOD_IN_INDUSTRY cell (verified sector research, the part
 *     that makes the page worth existing) — imported from method-city-depth.mjs
 *     so there is ONE copy, not a fork (§27.3: extend the map, never fork it);
 *   - the method's physics, honest limits and governing codes;
 *   - the industry's assets, damage mechanisms and acceptance regime;
 *   - routing to the method service page, the industry consulting/training
 *     nationals, and sibling cells.
 *
 * Slug shape deliberately mirrors the earning method×city family
 * (/{method}-testing-{city}, 21.8 impr/indexed page) rather than inventing a
 * new prefix. ⚠️ The zero-impression prune's method-city matcher must not
 * treat these as city permutations — its exclusion list is updated in the same
 * commit (it already cost the six method-training pages once).
 *
 * §18 no pricing · §24.2 delivery note on every page · §34.5 inbound in-commit.
 */
import { METHOD_IN_INDUSTRY } from './method-city-depth.mjs';
import { METHODS, INDUSTRIES, INDUSTRY_ORDER, DELIVERY_NOTE } from '../src/data/method-industry-matrix.mjs';

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (href, text) => `<a href="${href}">${esc(text)}</a>`;

/** Industry → the sector nationals shipped this cycle, where one applies. */
const INDUSTRY_LINKS = {
  refining: { consulting: '/consulting/oil-gas-ndt-consulting', training: '/oil-gas-ndt-training' },
  petrochemical: { consulting: '/consulting/oil-gas-ndt-consulting', training: '/oil-gas-ndt-training' },
  lng: { consulting: '/consulting/oil-gas-ndt-consulting', training: '/oil-gas-ndt-training' },
  offshore: { consulting: '/consulting/oil-gas-ndt-consulting', training: '/oil-gas-ndt-training' },
  pipeline: { consulting: '/consulting/oil-gas-ndt-consulting', training: '/pipeline-ndt-training' },
  marine: { consulting: '/consulting/maritime-ndt-consulting', training: '/maritime-ndt-training' },
  aviation: { consulting: '/consulting/aerospace-ndt-consulting', training: '/aviation-ndt-training' },
  power: { consulting: '/consulting/nuclear-ndt-consulting', training: '/power-generation-ndt-training' },
  mining: { consulting: null, training: '/manufacturing-ndt-training' },
  fabrication: { consulting: null, training: '/manufacturing-ndt-training' },
  automotive: { consulting: null, training: '/manufacturing-ndt-training' },
  steel: { consulting: null, training: '/manufacturing-ndt-training' },
  rail: { consulting: null, training: '/manufacturing-ndt-training' },
};

function body(methodKey, industryKey) {
  const m = METHODS[methodKey];
  const ind = INDUSTRIES[industryKey];
  const cell = METHOD_IN_INDUSTRY[industryKey][methodKey];
  const links = INDUSTRY_LINKS[industryKey] || {};
  const siblings = INDUSTRY_ORDER.filter((i) => i !== industryKey).slice(0, 6)
    .map((i) => L(`/${methodKey}-${i}`, INDUSTRIES[i].name)).join(' · ');
  const otherMethods = Object.keys(METHODS).filter((k) => k !== methodKey)
    .map((k) => L(`/${k}-${industryKey}`, METHODS[k].short)).join(' · ');

  return `
  <article>
    <h1>${esc(m.name)} in ${esc(ind.name)}: What It Finds, What It Misses, and What Governs It</h1>

    <h2>What ${esc(m.short)} is actually used for in ${esc(ind.name.toLowerCase())}</h2>
    <p>${esc(cell)}</p>

    <h2>How ${esc(m.short)} works</h2>
    <p>${esc(m.physics)}</p>

    <h2>What ${esc(m.short)} will not do</h2>
    <p>${esc(m.limits)}</p>

    <h2>The ${esc(ind.name.toLowerCase())} assets this applies to</h2>
    <p>${esc(ind.assets)}</p>

    <h2>The damage mechanisms driving the examination</h2>
    <p>${esc(ind.mechanisms)}</p>

    <h2>What governs acceptance</h2>
    <p>${esc(ind.regime)} On the method side: ${esc(m.codes)} An examination that is
    technically sound but performed outside the governing regime is not an examination anyone will
    accept, which is why the code family matters as much as the technique.</p>

    <h2>How Atlantis delivers ${esc(m.short)} in this sector</h2>
    <p>${esc(DELIVERY_NOTE)}</p>
    <p>${L(`/${methodKey}`, `${m.name} services`)} ·
    ${L(`/${methodKey}-training`, `${m.short} training and certification`)}${
      links.consulting ? ` · ${L(links.consulting, `${ind.name} programme consulting`)}` : ''
    }${links.training ? ` · ${L(links.training, `${ind.name} NDT training`)}` : ''} ·
    ${L('/contact?service=inspection', `scope a ${m.short} examination`)}.</p>

    <h2>${esc(m.short)} in other sectors</h2>
    <p>${siblings}.</p>

    <h2>Other methods in ${esc(ind.name.toLowerCase())}</h2>
    <p>${otherMethods}.</p>
  </article>`;
}

export function methodIndustryRoutes() {
  const routes = [];
  for (const methodKey of Object.keys(METHODS)) {
    for (const industryKey of INDUSTRY_ORDER) {
      if (!METHOD_IN_INDUSTRY[industryKey] || !METHOD_IN_INDUSTRY[industryKey][methodKey]) continue;
      const m = METHODS[methodKey];
      const ind = INDUSTRIES[industryKey];
      routes.push({
        path: `/${methodKey}-${industryKey}`,
        title: `${m.name} in ${ind.name} — Applications, Limits & Codes | Atlantis NDT`,
        description: `How ${m.short} is used in ${ind.name.toLowerCase()}: the assets examined, the damage mechanisms driving it, what the method will not find, and the codes that govern acceptance.`,
        canonical: `https://atlantisndt.com/${methodKey}-${industryKey}`,
        bodyContent: body(methodKey, industryKey),
      });
    }
  }
  return routes;
}

/** Inbound links, same commit (§34.5): method service pages + sector nationals. */
export function applyMethodIndustryInbound(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { applied: 0, missing: [] };
  const put = (path, heading, html) => {
    const r = byPath.get(path);
    if (!r) { out.missing.push(path); return; }
    append(r, `
    <section aria-label="${esc(heading)}">
      <h2>${esc(heading)}</h2>
      <p>${html}</p>
    </section>`);
    out.applied++;
  };

  // Each method service page → its sector pages
  for (const [methodKey, m] of Object.entries(METHODS)) {
    const list = INDUSTRY_ORDER.map((i) => L(`/${methodKey}-${i}`, INDUSTRIES[i].name)).join(' · ');
    put(`/${methodKey}`, `${m.short} by sector`,
      `What ${esc(m.short)} is used for differs sharply by industry — the assets, the damage mechanisms and the acceptance regime all change. Sector detail: ${list}.`);
  }
  // Each sector national → the six methods in that sector
  const NAT = {
    '/oil-gas-ndt-training': 'refining',
    '/pipeline-ndt-training': 'pipeline',
    '/maritime-ndt-training': 'marine',
    '/aviation-ndt-training': 'aviation',
    '/power-generation-ndt-training': 'power',
    '/manufacturing-ndt-training': 'fabrication',
  };
  for (const [path, industryKey] of Object.entries(NAT)) {
    const list = Object.keys(METHODS).map((k) => L(`/${k}-${industryKey}`, METHODS[k].short)).join(' · ');
    put(path, `What each method does in this sector`,
      `Method-by-method detail for ${esc(INDUSTRIES[industryKey].name.toLowerCase())} — what each finds, what it misses, and the governing codes: ${list}.`);
  }
  return out;
}

/* ── Guards ────────────────────────────────────────────────────────────────── */

export function assertNoPricesInMethodIndustry() {
  const blob = JSON.stringify(METHODS) + JSON.stringify(INDUSTRIES) + DELIVERY_NOTE;
  const hits = blob.match(/[$£€₹]\s?\d|per (day|hour|weld|metre|foot)\b|\/yr\b/gi);
  if (hits) throw new Error(`method-industry copy contains pricing: ${[...new Set(hits)].join(', ')}`);
}

export function assertMethodIndustryTargets(routes) {
  const paths = new Set(routes.map((r) => r.path));
  for (const r of methodIndustryRoutes()) paths.add(r.path);
  const need = new Set();
  for (const r of methodIndustryRoutes())
    for (const mm of String(r.bodyContent).matchAll(/href="(\/[^"#?]*)"/g)) need.add(mm[1]);
  const missing = [...need].filter((p) => !paths.has(p));
  if (missing.length) throw new Error(`method-industry targets missing: ${missing.join(', ')}`);
}
