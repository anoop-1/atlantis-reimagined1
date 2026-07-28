/**
 * SEO post-pass — round 2 OFIs found in the 2026-07-28 post-deploy re-audit.
 * ─────────────────────────────────────────────────────────────────────────────
 * Runs over the assembled route list AFTER every generator and override, so it
 * sees exactly what will ship. Four defects, all measured against the committed
 * GSC snapshot (scripts/seo-demand-90d.json):
 *
 *  1. FAQ SCHEMA GAP — 296 pages with >=50 impressions/90d render visible Q&A in
 *     their body but emit no FAQPage schema, so they forfeit FAQ rich results.
 *     Worst case: /blog/ndt-salary-guide-2026-global at 41,293 impressions.
 *     Schema is derived FROM the visible Q&A, never invented, so the structured
 *     data and the rendered page always agree (a Google requirement).
 *
 *  2. ORPHANS — 3,760 sitemap URLs have no inbound internal link in any
 *     prerendered body, 1,972 of them already earning impressions. PageRank
 *     cannot reach them and Google recrawls them rarely. Fixed by giving every
 *     page a "related pages" block that deliberately points at siblings which
 *     currently have no inbound links, prioritising the ones with demand.
 *
 *  3. DUPLICATE META — 20 URLs share 5 titles and 101 share 12 descriptions,
 *     almost all on ERP app/module/industry permutations. Disambiguated with the
 *     page's own scope so each SERP entry is distinct.
 *
 *  4. THIN PAGES — 244 pages under 300 words, concentrated in method x city
 *     permutations. Handled by giving each a substantive method-specific body.
 *
 * Nothing here removes content; every change is additive.
 */

import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE = 'https://atlantisndt.com';

let DEMAND = {};
try {
  DEMAND = JSON.parse(readFileSync(join(__dirname, 'seo-demand-90d.json'), 'utf-8')).pages || {};
} catch { /* optional */ }

const esc = (s) =>
  String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const textOf = (html) => String(html || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

/* ── 1. FAQ schema derived from visible Q&A ──────────────────────────────── */

/**
 * Pull question/answer pairs out of a rendered body. Only accepts an <h3>/<h4>
 * that reads as a question followed by prose, so we never emit schema for a
 * heading that is not actually a Q&A.
 */
function extractVisibleFaqs(bodyContent) {
  if (!bodyContent) return [];
  const faqs = [];
  const re = /<(h3|h4)[^>]*>([\s\S]*?)<\/\1>\s*((?:<p[^>]*>[\s\S]*?<\/p>\s*){1,3})/g;
  for (const m of bodyContent.matchAll(re)) {
    const q = textOf(m[2]);
    const a = textOf(m[3]);
    if (!q || !a) continue;
    if (!/\?$/.test(q) && !/^(what|how|why|when|which|who|where|can|do|does|is|are|should|will)\b/i.test(q)) continue;
    if (a.length < 60 || a.length > 1800) continue;
    faqs.push({ q, a });
    if (faqs.length >= 10) break;
  }
  return faqs;
}

/**
 * Many high-traffic pages DO carry FAQs — in a React accordion the prerendered
 * body never received, so Google saw neither the visible Q&A nor any schema.
 * Lift those Q&A pairs out of the page component and render them into the
 * static body, then the schema pass picks them up. The content is what the live
 * page already shows, so static HTML, hydrated DOM and schema all agree.
 */
export function syncComponentFaqs(routes, { extractFromTsx, propsFromPageFile, fileByPath, minImpressions = 30 } = {}) {
  if (!extractFromTsx || !propsFromPageFile || !fileByPath) return 0;
  let synced = 0;
  for (const r of routes) {
    if (r.path.includes(':') || r.noindex || !r.bodyContent) continue;
    if ((DEMAND[r.path]?.i || 0) < minImpressions) continue;
    if (/Frequently [Aa]sked/.test(r.bodyContent)) continue;
    const file = fileByPath.get(r.path);
    if (!file) continue;
    const props = propsFromPageFile(file);
    if (!props?.src) continue;
    const extracted = extractFromTsx(props.src);
    const faqs = (extracted?.faqs || []).filter((f) => f.question && f.answer && f.answer.length > 60);
    if (faqs.length < 2) continue;
    const block = `
    <section aria-label="Frequently asked questions">
      <h2>Frequently Asked Questions</h2>
      ${faqs.slice(0, 10).map((f) => `<div><h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p></div>`).join('\n      ')}
    </section>`;
    r.bodyContent = /<\/main>\s*$/.test(r.bodyContent)
      ? r.bodyContent.replace(/<\/main>\s*$/, `${block}\n  </main>`)
      : r.bodyContent + block;
    synced++;
  }
  return synced;
}

export function addMissingFaqSchema(routes, { minImpressions = 30 } = {}) {
  let added = 0;
  for (const r of routes) {
    if (r.path.includes(':') || r.noindex) continue;
    if (r.structuredData && JSON.stringify(r.structuredData).includes('FAQPage')) continue;
    const imp = DEMAND[r.path]?.i || 0;
    if (imp < minImpressions) continue;
    const faqs = extractVisibleFaqs(r.bodyContent);
    if (faqs.length < 2) continue;
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    };
    // Preserve any existing schema by emitting a graph rather than overwriting.
    r.structuredData = r.structuredData
      ? { '@context': 'https://schema.org', '@graph': [r.structuredData, faqSchema] }
      : faqSchema;
    added++;
  }
  return added;
}

/* ── 2. Orphan rescue via a demand-aware related-pages block ─────────────── */

function categoryOf(path) {
  if (/^\/blog\//.test(path)) return 'blog';
  if (/^\/glossary\//.test(path)) return 'glossary';
  if (/^\/standards\//.test(path)) return 'standards';
  if (/^\/compare\//.test(path)) return 'compare';
  if (/^\/erp-modules\//.test(path)) return 'erp-modules';
  if (/^\/erp-industries\//.test(path)) return 'erp-industries';
  if (/^\/erp\//.test(path)) return 'erp-apps';
  if (/^\/ndt-erp-/.test(path)) return 'erp-city';
  if (/^\/digital-twins\//.test(path)) return 'dt-usecase';
  if (/^\/digital-twin-/.test(path)) return 'dt-city';
  if (/^\/3d-scanning-/.test(path)) return 'scanning';
  if (/^\/ndt-training-/.test(path) || /training/.test(path)) return 'training';
  if (/consulting/.test(path)) return 'consulting';
  if (/^\/case-studies\//.test(path)) return 'case-studies';
  if (/^\/resources\//.test(path)) return 'resources';
  if (/^\/tools\//.test(path)) return 'tools';
  return 'other';
}

const labelFor = (route) =>
  (route.title || route.path)
    .replace(/\s*[|—-]\s*Atlantis NDT.*$/i, '')
    .replace(/\s*\|\s*Free (Demo|Consultation|Quote).*$/i, '')
    .trim()
    .slice(0, 80);

export function rescueOrphans(routes, { linksPerPage = 6 } = {}) {
  const indexable = routes.filter((r) => !r.path.includes(':') && !r.path.includes('*') && !r.noindex && r.bodyContent);
  const byPath = new Map(indexable.map((r) => [r.path, r]));

  // Count inbound links from prerendered bodies only — that is what Google's
  // first pass over the static HTML actually sees.
  const inbound = new Map();
  for (const r of indexable) {
    for (const m of String(r.bodyContent).matchAll(/href="(\/[^"#?]*)"/g)) {
      const t = m[1].replace(/\/$/, '');
      if (byPath.has(t)) inbound.set(t, (inbound.get(t) || 0) + 1);
    }
  }

  // Orphans first, and among orphans the ones already earning impressions —
  // those are pages Google has found but is not being told matter.
  const needsLinks = indexable
    .filter((r) => (inbound.get(r.path) || 0) === 0)
    .sort((a, b) => (DEMAND[b.path]?.i || 0) - (DEMAND[a.path]?.i || 0));

  const byCat = new Map();
  for (const r of needsLinks) {
    const c = categoryOf(r.path);
    if (!byCat.has(c)) byCat.set(c, []);
    byCat.get(c).push(r);
  }

  // Round-robin assignment: each donor page links to orphans in its own category
  // first (topical relevance), then falls back to the global orphan queue so no
  // orphan is left unlinked just because its category has few donors.
  const cursors = new Map();
  let globalCursor = 0;
  let injected = 0;
  const linkedTo = new Set();

  for (const donor of indexable) {
    const cat = categoryOf(donor.path);
    const pool = byCat.get(cat) || [];
    const picks = [];

    let c = cursors.get(cat) || 0;
    let guard = 0;
    while (picks.length < Math.min(4, pool.length) && guard++ < pool.length * 2) {
      const cand = pool[c % pool.length];
      c++;
      if (!cand || cand.path === donor.path) continue;
      if (picks.some((p) => p.path === cand.path)) continue;
      picks.push(cand);
    }
    cursors.set(cat, c);

    while (picks.length < linksPerPage && needsLinks.length) {
      const cand = needsLinks[globalCursor % needsLinks.length];
      globalCursor++;
      if (!cand || cand.path === donor.path) continue;
      if (picks.some((p) => p.path === cand.path)) continue;
      picks.push(cand);
      if (globalCursor > needsLinks.length * 3) break;
    }

    if (!picks.length) continue;
    picks.forEach((p) => linkedTo.add(p.path));

    const block = `
    <nav class="related-pages" aria-label="Related Atlantis NDT pages">
      <h2>Related reading</h2>
      <ul>${picks.map((p) => `<li><a href="${p.path}">${esc(labelFor(p))}</a></li>`).join('')}</ul>
    </nav>`;

    donor.bodyContent = /<\/main>\s*$/.test(donor.bodyContent)
      ? donor.bodyContent.replace(/<\/main>\s*$/, `${block}\n  </main>`)
      : donor.bodyContent + block;
    injected++;
  }

  return { donors: injected, orphansBefore: needsLinks.length, orphansLinked: linkedTo.size };
}

/* ── 3. Duplicate title / description disambiguation ─────────────────────── */

/** Turn the distinguishing part of a path into a human scope label. */
function scopeLabel(path) {
  const seg = path.split('/').filter(Boolean);
  const last = seg[seg.length - 1] || '';
  return last
    .split('-')
    .map((w) => (w.length <= 3 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');
}

export function disambiguateMeta(routes) {
  const byTitle = new Map();
  const byDesc = new Map();
  for (const r of routes) {
    if (r.path.includes(':') || r.noindex) continue;
    if (r.title) (byTitle.get(r.title) || byTitle.set(r.title, []).get(r.title)).push(r);
    if (r.description) (byDesc.get(r.description) || byDesc.set(r.description, []).get(r.description)).push(r);
  }

  let fixedTitles = 0;
  for (const [, group] of byTitle) {
    if (group.length < 2) continue;
    for (const r of group) {
      const scope = scopeLabel(r.path);
      if (r.title.includes(scope)) continue;
      r.title = `${r.title.replace(/\s*\|\s*Atlantis NDT.*$/i, '')} — ${scope} | Atlantis NDT`.slice(0, 140);
      r.ogTitle = r.title;
      fixedTitles++;
    }
  }

  let fixedDescs = 0;
  for (const [, group] of byDesc) {
    if (group.length < 2) continue;
    for (const r of group) {
      const scope = scopeLabel(r.path);
      if (r.description.includes(scope)) continue;
      r.description = `${scope}: ${r.description}`.slice(0, 320);
      r.ogDesc = r.description;
      fixedDescs++;
    }
  }
  return { fixedTitles, fixedDescs };
}

/* ── 4. Thin method x city page enrichment ───────────────────────────────── */

const METHOD_DETAIL = {
  'ultrasonic-testing': {
    name: 'Ultrasonic Testing (UT)',
    what: 'Ultrasonic testing uses high-frequency sound introduced into the component to detect internal discontinuities and measure remaining wall thickness. Pulse-echo with straight and angle beam probes covers most weld and corrosion work; phased array and TOFD extend coverage and sizing accuracy on thick sections and complex geometry.',
    finds: ['Lack of fusion and incomplete penetration in welds', 'Planar cracks, including service-induced cracking', 'Laminations and inclusions in plate and forgings', 'General and localised wall loss from corrosion or erosion', 'Hydrogen-induced cracking and blistering in sour service'],
    codes: 'ASME Section V Article 4, ASME Section VIII Division 1, AWS D1.1 Section 6, API 1104, ISO 17640 and ISO 16810.',
  },
  'radiographic-testing': {
    name: 'Radiographic Testing (RT)',
    what: 'Radiography passes X-ray or gamma radiation through the component onto film or a digital detector, producing a permanent volumetric record. It remains the reference method where a reviewable image of the through-wall condition is required.',
    finds: ['Porosity, slag inclusions and volumetric weld defects', 'Incomplete penetration and lack of fusion', 'Cracks favourably oriented to the beam', 'Wall loss and internal deposits under insulation via profile radiography', 'Corrosion in small-bore piping without insulation removal'],
    codes: 'ASME Section V Article 2, ASME Section VIII Division 1 UW-51/UW-52, AWS D1.1 Section 6, API 1104 and ISO 17636.',
  },
  'magnetic-particle': {
    name: 'Magnetic Particle Testing (MT)',
    what: 'Magnetic particle testing magnetises a ferromagnetic component and applies fine particles that gather at flux leakage from surface and near-surface discontinuities. Yoke, prod, coil and central-conductor techniques are selected by geometry and access.',
    finds: ['Surface-breaking cracks in welds and base material', 'Near-surface lack of fusion and laps', 'Service-induced fatigue cracking at stress concentrations', 'Grinding and arc-strike damage', 'Toe cracks on structural and pressure welds'],
    codes: 'ASTM E709, ASME Section V Article 7, ASME Section VIII Division 1 Appendix 6, AWS D1.1 and ISO 9934.',
  },
  'penetrant-testing': {
    name: 'Liquid Penetrant Testing (PT)',
    what: 'Penetrant testing draws a low-viscosity dye into surface-breaking discontinuities by capillary action, then reveals it with a developer. It works on non-ferrous and non-magnetic materials where magnetic particle testing cannot be used.',
    finds: ['Surface-breaking cracks in stainless steel, aluminium and titanium', 'Porosity open to the surface', 'Laps, seams and cold shuts in castings and forgings', 'Fatigue cracking in aerospace components', 'Leak paths in thin-wall welded joints'],
    codes: 'ASME Section V Article 6, ASME Section VIII Division 1 Appendix 8, ASTM E1417, AWS D1.1 and ISO 3452.',
  },
  'eddy-current': {
    name: 'Eddy Current Testing (ET)',
    what: 'Eddy current testing induces circulating currents in a conductive component and detects the impedance change caused by discontinuities. It is fast, requires no couplant, and works through thin coatings, which makes it the method of choice for tubing and surface crack detection on conductive materials.',
    finds: ['Surface and near-surface cracking on conductive materials', 'Heat exchanger and condenser tube wall loss, pitting and cracking', 'Corrosion under thin coatings without removal', 'Conductivity and heat-treat verification on aluminium alloys', 'Weld toe cracking on painted structures'],
    codes: 'ASME Section V Article 8, ASTM E243, ASTM E571, ISO 15548 and EN 1711.',
  },
  'visual-testing': {
    name: 'Visual Testing (VT)',
    what: 'Visual testing is the first and most frequently applied NDT method, performed directly or with remote aids such as borescopes, cameras and drones. Done properly against a written procedure, it detects a substantial share of the conditions that matter before any other method is deployed.',
    finds: ['Weld profile, undercut, overlap and reinforcement outside limits', 'Surface cracking, arc strikes and mechanical damage', 'External corrosion, coating breakdown and insulation damage', 'Distortion, misalignment and support condition', 'Leakage, staining and evidence of past releases'],
    codes: 'ASME Section V Article 9, AWS D1.1 Section 6, API 510, API 570, API 653 and ISO 17637.',
  },
};

export function enrichMethodCityPages(routes, { minWordsChars = 1600 } = {}) {
  let enriched = 0;
  for (const r of routes) {
    if (r.path.includes(':') || r.noindex) continue;
    const m = r.path.match(/^\/(ultrasonic-testing|radiographic-testing|magnetic-particle|penetrant-testing|eddy-current|visual-testing)(?:-testing)?-([a-z0-9-]+)$/);
    if (!m) continue;
    const method = METHOD_DETAIL[m[1]];
    if (!method) continue;
    if ((r.bodyContent || '').length >= minWordsChars) continue;
    const city = scopeLabel(r.path.replace(`/${m[1]}-`, '/'));

    const extra = `
    <section aria-label="${esc(method.name)} detail">
      <h2>What ${esc(method.name)} actually detects</h2>
      <p>${esc(method.what)}</p>
      <ul>${method.finds.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
      <h2>Codes and acceptance criteria applied</h2>
      <p>Examinations are performed to written procedures qualified against ${esc(method.codes)} Acceptance criteria are taken from the construction or in-service code governing the item — ASME Section VIII for pressure vessels, ASME B31.3 for process piping, API 510, API 570 and API 653 for in-service equipment, and AWS D1.1 for structural steel.</p>
      <h2>How the examination is controlled in ${esc(city)}</h2>
      <p>Every examination carries its own evidence chain: the technician's certification for the method and level under ASNT SNT-TC-1A or ISO 9712, current on the day of the inspection; the calibration status of the instrument, probes and reference blocks used, traceable under ISO 17025; and the revision of the procedure and technique sheet in force at the time. That bundle is what a client audit examines, and it is recorded automatically rather than assembled afterwards.</p>
      <h2>Reporting and follow-up</h2>
      <p>Results are issued in the client's required format with indications located against the component and, where relevant, against a corrosion monitoring location so thickness trends stay continuous between campaigns. Findings can be delivered into the client's own maintenance system, or onto a <a href="/digital-twins">3D asset model</a> where remaining life and risk-based inspection ranking update as new data arrives.</p>
      <p>Related: <a href="/${m[1]}${m[1].endsWith('-testing') ? '' : '-testing'}">${esc(method.name)} overview</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/consulting">ASNT Level III consulting</a> · <a href="/training">NDT training and certification</a> · <a href="/contact">request a quote for ${esc(city)}</a>.</p>
    </section>`;

    r.bodyContent = /<\/main>\s*$/.test(r.bodyContent || '')
      ? r.bodyContent.replace(/<\/main>\s*$/, `${extra}\n  </main>`)
      : (r.bodyContent || '') + extra;
    enriched++;
  }
  return enriched;
}
