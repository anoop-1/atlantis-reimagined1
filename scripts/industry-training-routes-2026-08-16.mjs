/**
 * Industry × City × Region training matrix — prerender routes — 2026-08-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * Generates crawler-facing bodies from src/data/industry-training-matrix.mjs —
 * the SAME data the React component renders, so the two layers cannot drift
 * (§32.4 class). 7 industry nationals + 27 researched city cells + 8 regions
 * = 42 new URLs, every cell carrying verified employer research (§26.1).
 *
 * URL shapes:
 *   /{industry}-ndt-training              (national; aerospace pre-exists)
 *   /{industry}-ndt-training-{city}       (cell)
 *   /ndt-training-{region}                (region)
 *
 * §18 no pricing · §24.2 DELIVERY_NOTE on every page · §34.5 inbound links
 * ship in the same commit via applyIndustryMatrixInbound.
 */
import { INDUSTRY_TRAINING, CITY_CELLS, TRAINING_REGIONS, DELIVERY_NOTE } from '../src/data/industry-training-matrix.mjs';

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const cityName = (slug) => slug.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
const industryHref = (ind) => (ind === 'aerospace' ? '/aerospace-ndt-training' : `/${ind}-ndt-training`);
const industryName = (ind) => INDUSTRY_TRAINING[ind]?.name || 'Aerospace';

function nationalBody(slug, ind) {
  const cityLinks = ind.cities.map((c) =>
    `<li><a href="/${slug}-ndt-training-${c}">${esc(industryName(slug))} NDT training in ${esc(cityName(c))}</a></li>`).join('\n        ');
  return `
  <article>
    <h1>${esc(ind.h1)}</h1>
    <p>${esc(ind.intro)}</p>
    <h2>The methods ${esc(ind.name.toLowerCase())} work actually certifies in</h2>
    <p>${esc(ind.methods)}</p>
    <h2>The governing regime — what acceptance answers to</h2>
    <p>${esc(ind.regime)}</p>
    <h2>Who employs certified technicians</h2>
    <p>${esc(ind.employers)}</p>
    <h2>The career path that works</h2>
    <p>${ind.career}</p>
    <h2>How people actually enter this sector</h2>
    <p>${ind.entry}</p>
    <h2>How training is delivered</h2>
    <p>${esc(DELIVERY_NOTE)}</p>
    ${ind.cities.length ? `<h2>${esc(ind.name)} training by market</h2>
      <ul>
        ${cityLinks}
      </ul>` : ''}
    <h2>Start the path</h2>
    <p>Levels and requirements end to end: <a href="/ndt-level-1-training">Level I</a>,
    <a href="/ndt-level-2-training">Level II</a>, <a href="/asnt-level-iii-training">Level III</a> ·
    every US market: <a href="/ndt-training-near-me">the location index</a> ·
    the programme hub: <a href="/training">NDT training</a>.</p>
  </article>`;
}

/** Cities with a cell but NO base /ndt-training-{city} page — the "full
 *  training page" link would 404 there, so it routes to the location index
 *  instead. Verified against dist 2026-08-16; the build guard enforces it. */
const NO_BASE_TRAINING_PAGE = new Set(['charlotte', 'gary']);

function cellBody(industry, city, cell) {
  const siblings = (INDUSTRY_TRAINING[industry]?.cities || []).filter((c2) => c2 !== city);
  const ind = INDUSTRY_TRAINING[industry] || {};
  const nm = industryName(industry);
  const marketLink = NO_BASE_TRAINING_PAGE.has(city)
    ? `every US training market: <a href="/ndt-training-near-me">the location index</a>`
    : `this market's full training page: <a href="/ndt-training-${city}">NDT training in ${esc(cell.city)}</a>`;
  return `
  <article>
    <h1>${esc(nm)} NDT Training in ${esc(cell.city)}, ${esc(cell.state)}</h1>
    <p>${esc(cell.text)}</p>
    ${ind.intro ? `<h2>${esc(nm)} NDT in brief</h2><p>${esc(ind.intro)}</p>` : ''}
    ${ind.methods ? `<h2>What ${esc(nm.toLowerCase())} training covers</h2><p>${esc(ind.methods)}</p>` : ''}
    ${ind.regime ? `<h2>The governing regime</h2><p>${esc(ind.regime)}</p>` : ''}
    ${ind.employers ? `<h2>Who employs certified technicians</h2><p>${esc(ind.employers)}</p>` : ''}
    ${ind.entry ? `<h2>How people enter this sector</h2><p>${ind.entry}</p>` : ''}
    ${siblings.length ? `<h2>${esc(nm)} training in other markets</h2><p>${siblings.map((c2) => `<a href="/${industry}-ndt-training-${c2}">${esc(cityName(c2))}</a>`).join(' · ')} · <a href="${industryHref(industry)}">the national picture</a>.</p>` : ''}
    <h2>How training is delivered in ${esc(cell.city)}</h2>
    <p>${esc(DELIVERY_NOTE)}</p>
    <h2>Related pages</h2>
    <p>The national picture: <a href="${industryHref(industry)}">${esc(nm)} NDT training</a> ·
    ${marketLink} ·
    the level structure: <a href="/ndt-level-2-training">the Level II path</a>.</p>
  </article>`;
}

function regionBody(slug, r) {
  const indLinks = r.industries.map((i) =>
    `<li><a href="${industryHref(i)}">${esc(industryName(i))} NDT training</a></li>`).join('\n        ');
  const cityLinks = r.cities.map((c) =>
    `<li><a href="/ndt-training-${c}">NDT training in ${esc(cityName(c))}</a></li>`).join('\n        ');
  return `
  <article>
    <h1>NDT Training in the ${esc(r.name)}: Markets, Industries and the Route In</h1>
    <p>${esc(r.character)}</p>
    <h2>The industries that drive certification here</h2>
    <ul>
        ${indLinks}
    </ul>
    <h2>Training markets across the ${esc(r.name)}</h2>
    <ul>
        ${cityLinks}
    </ul>
    <h2>How certification works in the ${esc(r.name)}</h2>
    <p>${esc(r.certification)}</p>
    <h2>How training is delivered</h2>
    <p>${esc(DELIVERY_NOTE)}</p>
    <h2>Not in one of these markets?</h2>
    <p><a href="/ndt-training-near-me">The full US location index</a> resolves the search honestly —
    and on-site delivery means the real answer for employers is "at your facility".
    The programme itself: <a href="/training">NDT training</a>.</p>
  </article>`;
}

export function industryMatrixRoutes() {
  const routes = [];
  for (const [slug, ind] of Object.entries(INDUSTRY_TRAINING)) {
    if (ind.cellOnly) continue; // aerospace: national pre-exists at /aerospace-ndt-training
    routes.push({
      path: `/${slug}-ndt-training`,
      title: `${ind.title} | Atlantis NDT`,
      description: ind.desc,
      canonical: `https://atlantisndt.com/${slug}-ndt-training`,
      bodyContent: nationalBody(slug, ind),
    });
  }
  for (const [key, cell] of Object.entries(CITY_CELLS)) {
    const [industry, city] = key.split('|');
    const nm = industryName(industry);
    routes.push({
      path: `/${industry}-ndt-training-${city}`,
      title: `${nm} NDT Training in ${cell.city}, ${cell.state} | Atlantis NDT`,
      description: `${nm} NDT training for the ${cell.city} market: the employers, the methods they certify in, and the qualification regime — delivered on-site under ASNT Level III oversight.`,
      canonical: `https://atlantisndt.com/${industry}-ndt-training-${city}`,
      bodyContent: cellBody(industry, city, cell),
    });
  }
  for (const [slug, r] of Object.entries(TRAINING_REGIONS)) {
    routes.push({
      path: `/ndt-training-${slug}`,
      title: `${r.title} | Atlantis NDT`,
      description: r.desc,
      canonical: `https://atlantisndt.com/ndt-training-${slug}`,
      bodyContent: regionBody(slug, r),
    });
  }
  return routes;
}

/* ── Inbound links, same commit (§34.5) ────────────────────────────────────
 * Sources: the training hub, the near-me hub, the /industry/{sector} service
 * pages (topically exact), matching city training pages, and the method-
 * training pages. Varied anchors per source. */
export function applyIndustryMatrixInbound(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { applied: 0, links: 0, missing: [] };
  const put = (path, heading, html) => {
    const r = byPath.get(path);
    if (!r) { out.missing.push(path); return; }
    append(r, `
    <section aria-label="${esc(heading)}">
      <h2>${esc(heading)}</h2>
      <p>${html}</p>
    </section>`);
    out.applied++;
    out.links += (html.match(/<a href=/g) || []).length;
  };

  // Hub → industry nationals (one block, all seven + region index)
  put('/training', 'Training by industry',
    `Certification demand looks different in every sector — the methods, the regime, the employers. Sector-specific paths: `
    + Object.keys(INDUSTRY_TRAINING).filter((k) => !INDUSTRY_TRAINING[k].cellOnly).map((s) => `<a href="/${s}-ndt-training">${esc(INDUSTRY_TRAINING[s].name)}</a>`).join(' · ')
    + ` · <a href="/aerospace-ndt-training">Aerospace</a>. By region: `
    + Object.entries(TRAINING_REGIONS).map(([s, r]) => `<a href="/ndt-training-${s}">${esc(r.name)}</a>`).join(' · ') + '.');

  // Near-me hub → regions
  put('/ndt-training-near-me', 'Browse by region instead',
    `If "near me" really means "in my part of the country", the regional pages group the markets: `
    + Object.entries(TRAINING_REGIONS).map(([s, r]) => `<a href="/ndt-training-${s}">${esc(r.name)}</a>`).join(' · ') + '.');

  // Industry service pages → industry training nationals (exact topical match)
  const svcMap = [
    ['/industry/marine-ndt-houston', 'maritime'],
    ['/nuclear-ndt-services', 'nuclear'],
    ['/ndt-for-oil-gas', 'oil-gas'],
    ['/aerospace-ndt-training', null], // gets cell links below instead
  ];
  for (const [svc, ind] of svcMap) {
    if (!ind) continue;
    put(svc, `Training your own ${industryName(ind).toLowerCase()} inspectors`,
      `Companies in this sector increasingly pair contracted inspection with in-house capability — <a href="${industryHref(ind)}">${esc(industryName(ind))} NDT training</a> covers the methods, the regime and the certification path.`);
  }

  // Aerospace national (pre-existing) → its new city cells
  const aeroCells = Object.keys(CITY_CELLS).filter((k) => k.startsWith('aerospace|')).map((k) => k.split('|')[1]);
  if (aeroCells.length) {
    put('/aerospace-ndt-training', 'Aerospace training by market',
      aeroCells.map((c) => `<a href="/aerospace-ndt-training-${c}">${esc(cityName(c))}</a>`).join(' · ') + '.');
  }

  // City training pages → their industry cells ("what {city} certifies FOR")
  for (const [key, cell] of Object.entries(CITY_CELLS)) {
    const [industry, city] = key.split('|');
    put(`/ndt-training-${city}`, `${industryName(industry)} training in ${cell.city}`,
      `${esc(cell.city)}'s ${esc(industryName(industry).toLowerCase())} employers certify against a sector-specific regime — <a href="/${industry}-ndt-training-${city}">${esc(industryName(industry))} NDT training in ${esc(cell.city)}</a> covers it.`);
  }
  return out;
}

/* ── Guards ────────────────────────────────────────────────────────────── */

export function assertNoPricesInIndustryMatrix() {
  const blob = JSON.stringify(INDUSTRY_TRAINING) + JSON.stringify(CITY_CELLS) + JSON.stringify(TRAINING_REGIONS) + DELIVERY_NOTE;
  const hits = blob.match(/[$£€₹]\s?\d|per (day|hour|student|head|course)\b|\btuition\b/gi);
  if (hits) throw new Error(`industry matrix contains pricing: ${[...new Set(hits)].join(', ')}`);
}

/** Every internal target must exist (§34.4) — checked against the route list. */
export function assertIndustryMatrixTargets(routes) {
  const paths = new Set(routes.map((r) => r.path));
  // matrix routes themselves are being added in the same pass — include them
  for (const r of industryMatrixRoutes()) paths.add(r.path);
  const need = new Set();
  for (const r of industryMatrixRoutes()) {
    for (const m of String(r.bodyContent).matchAll(/href="(\/[^"#?]*)"/g)) need.add(m[1]);
  }
  const missing = [...need].filter((p) => !paths.has(p));
  if (missing.length) throw new Error(`industry matrix targets missing: ${missing.join(', ')}`);
}
