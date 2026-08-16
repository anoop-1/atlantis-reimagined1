/**
 * Consulting × Industry nationals + region upgrades — 2026-08-16 (Phase C).
 * ─────────────────────────────────────────────────────────────────────────────
 * Five nationals at /consulting/{industry}-ndt-consulting from
 * src/data/consulting-industry-matrix.mjs (shared with the React component —
 * no two-layer drift). Harvest evidence: industry-shaped consulting queries
 * land on CITY permutations at p35–60 ("maritime ndt services" →
 * /industry/marine-ndt-new-orleans). Plus:
 *   - upgrades on the earning-nothing region pages (/consulting-usa, -me,
 *     -india, /training-usa) — §20.3 pattern: existing URLs promoted;
 *   - FFS handoff: "api 579"-family queries (52i) land on the blog while the
 *     service-line page exists;
 *   - nuclear scope statement vs /nuclear-ndt-services (services = delivery,
 *     consulting = programme) — or they cannibalise.
 * §18 no pricing · §24.2 mobilised model · §34.5 inbound same commit.
 */
import { CONSULTING_INDUSTRIES, CONSULTING_MODEL_NOTE } from '../src/data/consulting-industry-matrix.mjs';

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (href, text) => `<a href="${href}">${esc(text)}</a>`;

function nationalBody(slug, c) {
  const markets = c.markets.map(([href, label]) => `<li>${L(href, label)}</li>`).join('\n        ');
  const related = c.related.map(([href, label]) => L(href, label)).join(' · ');
  return `
  <article>
    <h1>${esc(c.h1)}</h1>
    <h2>The problem this engagement exists for</h2>
    <p>${esc(c.problem)}</p>
    <h2>What a ${esc(c.name.toLowerCase())} engagement delivers</h2>
    <p>${c.delivers}</p>
    <h2>The damage mechanisms the programme is built around</h2>
    <p>${esc(c.mechanisms)}</p>
    <h2>The governing regime</h2>
    <p>${esc(c.regime)}</p>
    <h2>How the engagement works</h2>
    <p>${esc(CONSULTING_MODEL_NOTE)} The general engagement structure — Level III of record, written
    practice ownership, audit defence — is set out on ${L('/consulting/ndt-consulting-level-iii', 'ASNT Level III consulting')};
    this page covers how it lands in ${esc(c.name.toLowerCase())} work specifically.</p>
    <h2>Markets where the sector's examination base is documented</h2>
    <ul>
        ${markets}
    </ul>
    <h2>Related</h2>
    <p>${related} · ${L('/consulting', 'the consulting practice')} ·
    ${L('/contact?service=consulting', 'scope an engagement')}.</p>
  </article>`;
}

export function consultingIndustryRoutes() {
  return Object.entries(CONSULTING_INDUSTRIES).map(([slug, c]) => ({
    path: `/consulting/${slug}-ndt-consulting`,
    title: `${c.title} | Atlantis NDT`,
    description: c.desc,
    canonical: `https://atlantisndt.com/consulting/${slug}-ndt-consulting`,
    bodyContent: nationalBody(slug, c),
  }));
}

/* ── Append blocks: region upgrades + handoffs ─────────────────────────────── */

const INDUSTRY_LINKS = Object.keys(CONSULTING_INDUSTRIES)
  .map((s) => `<a href="/consulting/${s}-ndt-consulting">${esc(CONSULTING_INDUSTRIES[s].name)}</a>`)
  .join(' · ');

const BLOCKS = [
  {
    path: '/consulting-usa',
    heading: 'US consulting by industry',
    body: `US engagements concentrate where the regimes are heaviest, and each sector's programme problems are its own — which is why the practice is organised by industry: ${INDUSTRY_LINKS}. Jurisdictional overlays (state pressure-vessel programmes, NBIC) apply above the codes in much of the country, and the written practice has to acknowledge them.`,
  },
  {
    path: '/consulting-me',
    heading: 'Sector framing travels; the operator regime does not',
    body: `The industry-specific engagement structure — ${L('/consulting/oil-gas-ndt-consulting', 'oil & gas programme authority')}, ${L('/consulting/maritime-ndt-consulting', 'maritime programme work')} — carries into Middle East engagements intact, but the governing layer changes: operator standards (Aramco SAES, ADNOC AGES, QatarEnergy QCS) sit where US jurisdictions would, and contractor approval gates everything. Programmes are written to the operator's book first.`,
  },
  {
    path: '/consulting-india',
    heading: 'The engagement model in India',
    body: `Indian engagements run the same industry-first structure — the regime layer being IBR and PESO jurisdiction plus ISNT NCB certification context. The sector pages (${L('/consulting/oil-gas-ndt-consulting', 'oil & gas')}, ${L('/consulting/nuclear-ndt-consulting', 'nuclear')}, ${L('/consulting/aerospace-ndt-consulting', 'aerospace')}) describe what each engagement delivers; delivery is mobilised into the client's programme wherever the site is.`,
  },
  {
    path: '/training-usa',
    heading: 'Training organised by industry and region',
    body: `US training demand is sector-shaped, and the programme is now organised that way: by industry — ${L('/maritime-ndt-training', 'maritime')}, ${L('/nuclear-ndt-training', 'nuclear')}, ${L('/oil-gas-ndt-training', 'oil & gas')}, ${L('/aviation-ndt-training', 'aviation MRO')}, ${L('/manufacturing-ndt-training', 'manufacturing')}, ${L('/pipeline-ndt-training', 'pipeline')}, ${L('/power-generation-ndt-training', 'power generation')}, ${L('/aerospace-ndt-training', 'aerospace')} — and by region, from ${L('/ndt-training-gulf-coast', 'the Gulf Coast')} to ${L('/ndt-training-canada', 'Canada')}. Every page states the delivery model plainly: on-site at the employer's facility under ASNT Level III oversight.`,
  },
  {
    path: '/blog/api-579-fitness-for-service-assessment-procedures',
    heading: 'From understanding FFS to commissioning one',
    body: `This guide explains the assessment. When the need is the assessment itself — a flaw to disposition, a run-repair-replace decision with a deadline — the engagement is ${L('/consulting/fitness-for-service-api-579', 'fitness-for-service under API 579')}, and the examination data behind it is where most assessments succeed or fail: ${L('/consulting/oil-gas-ndt-consulting', 'the oil & gas programme page')} covers that evidence chain.`,
  },
  {
    path: '/nuclear-ndt-services',
    heading: 'Inspection delivery versus programme authority',
    body: `This page covers examination delivery — mobilised inspection on nuclear scope. The adjacent need is programme authority: written practices, procedure qualification, Section XI programme alignment and audit defence. That is ${L('/consulting/nuclear-ndt-consulting', 'nuclear NDT consulting')}, and the two are deliberately separate pages because buying examination and buying authority are different decisions.`,
  },
];

export function applyConsultingIndustryBlocks(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { applied: 0, missing: [] };
  for (const b of BLOCKS) {
    const r = byPath.get(b.path);
    if (!r) { out.missing.push(b.path); continue; }
    append(r, `
    <section aria-label="${esc(b.heading)}">
      <h2>${esc(b.heading)}</h2>
      <p>${b.body}</p>
    </section>`);
    out.applied++;
  }
  return out;
}

/** Inbound links — same commit (§34.5). */
export function applyConsultingIndustryInbound(routes, append) {
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
  put('/consulting', 'Consulting by industry',
    `Programme problems are sector-shaped — the regime, the damage mechanisms, the auditor. The practice by industry: ${INDUSTRY_LINKS}.`);
  put('/consulting/ndt-consulting-level-iii', 'The engagement, sector by sector',
    `How Level III authority lands differs by regime — ${INDUSTRY_LINKS} each cover the sector-specific shape of the engagement.`);
  // Industry training nationals -> matching consulting national (buyer side)
  const pairs = [
    ['/maritime-ndt-training', 'maritime'],
    ['/nuclear-ndt-training', 'nuclear'],
    ['/oil-gas-ndt-training', 'oil-gas'],
    ['/aviation-ndt-training', 'aviation'],
    ['/aerospace-ndt-training', 'aerospace'],
  ];
  for (const [from, ind] of pairs) {
    const c = CONSULTING_INDUSTRIES[ind];
    put(from, 'Programme authority for this sector',
      `Training builds the technicians; the programme still needs Level III authority over it — ${L(`/consulting/${ind}-ndt-consulting`, `${c.name} NDT consulting`)} covers written practices, procedure approval and audit defence in this regime.`);
  }
  return out;
}

/* ── Guards ────────────────────────────────────────────────────────────────── */

export function assertNoPricesInConsultingIndustry() {
  const blob = JSON.stringify(CONSULTING_INDUSTRIES) + CONSULTING_MODEL_NOTE + JSON.stringify(BLOCKS);
  const hits = blob.match(/[$£€₹]\s?\d|per (day|hour|engagement)\b|day.?rate|\/yr\b/gi);
  if (hits) throw new Error(`consulting-industry copy contains pricing: ${[...new Set(hits)].join(', ')}`);
}

export function assertConsultingIndustryTargets(routes) {
  const paths = new Set(routes.map((r) => r.path));
  for (const r of consultingIndustryRoutes()) paths.add(r.path);
  const need = new Set();
  for (const r of consultingIndustryRoutes())
    for (const m of String(r.bodyContent).matchAll(/href="(\/[^"#?]*)"/g)) need.add(m[1]);
  for (const b of BLOCKS) {
    need.add(b.path);
    for (const m of b.body.matchAll(/href="(\/[^"#?]*)"/g)) need.add(m[1]);
  }
  const missing = [...need].filter((p) => !paths.has(p));
  if (missing.length) throw new Error(`consulting-industry targets missing: ${missing.join(', ')}`);
}
