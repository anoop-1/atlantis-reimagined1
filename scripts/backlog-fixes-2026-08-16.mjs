/**
 * Backlog: the unresolved items from §39.5 / §32.5 — 2026-08-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * Four items carried across multiple cycles, each measured before building.
 *
 * ── 1. THE API 653 CLUSTER (~4,000 impressions, the biggest money-page gap) ──
 * Measured per query, 90d:
 *
 *   "api 653"                1,789i  guide p10 (1,178i) · cert p43 · RETIRED p17
 *   "api 653 certification"    482i  cert p10 (318i)   · RETIRED p11 (102i)
 *   "api 653 inspection"       545i  guide p16         · cert p59
 *   "api 653 tank inspection"  613i  guide p16         · cert p65
 *   "api 653 requirements"     391i  guide p22         · cert p46 · RETIRED p14
 *   "api 653 course"           187i  cert p41 (184i)   ← TRAINING intent on a
 *                                                        certification page
 *
 * The division is already roughly right — the guide owns the inspection scope,
 * the cert page owns the credential — so this is NOT a merge. Two real defects:
 *   (a) **a RETIRED 301 source is still ranking and splitting both terms**
 *       (/blog/api-653-certification-complete-guide, 333i at p11–17, redirects
 *       to /api-653-certification). Same class as the eddy-current case.
 *       Content cannot fix that — it needs recrawl, submitted separately.
 *   (b) "api 653 course" (187i) lands on the certification page at p41 while
 *       /api-653-training exists. Training intent, wrong page — §40.3 shape.
 * Fix: exact-anchor routing for course intent + scope statements that stop the
 * cert page competing on the guide's inspection terms.
 *
 * ── 2. /ndt-industry-statistics — 1,049i at p54–75, market-research intent ──
 * "non-destructive testing services market" 175i p54 · "ndt inspection service
 * market" 145i p57 · "us ndt services market" 106i p68 · "ndt equipment market"
 * 76i p61. A real US demand shape nothing on the site serves properly (§39.5.3).
 * The page ranks at p54–75 because it has statistics but no market STRUCTURE.
 * ⚠️ No market-size figures are invented here. §18/§25.5 permit third-party
 * market data, but inventing it is worse than omitting it — this block explains
 * the structure (segments, buyers, drivers, why the numbers disagree) which is
 * what the analyst searching actually needs and what no vendor page states.
 *
 * ── 3. /industry/{sector}-ndt-{city} — 320 pages earning 218i total (4i/page) ──
 * DECIDED: do NOT extend this family (the plan's nuclear + aviation sectors
 * would add ~80 pages at 4i/page — §20.2). Instead the family becomes a FUNNEL:
 * every page routes up to the researched industry nationals shipped this cycle.
 * Pruned pages carry `noindex, follow`, so their links still pass equity.
 *
 * ── 4. /consulting/api-579-fitness-for-service-services — BROKEN on 693 pages ──
 * Fixed at source in content-quality-upgrader.mjs (§32.5 recorded 21
 * occurrences; the real count is 693 — the module applies site-wide).
 *
 * §18 no pricing · §24.2 no fabricated presence.
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (href, text) => `<a href="${href}">${esc(text)}</a>`;

/* ═══ 1. API 653 ownership ═══ */

const API653 = [
  {
    path: '/api-653-certification',
    heading: 'Looking for the tank inspection scope, or the course?',
    body: `This page covers the credential — eligibility, the body of knowledge, the examination, and what an API 653 inspector is authorised to do. Two adjacent things live elsewhere on purpose. If you want to understand ${L('/blog/api-653-tank-inspection-guide', 'what an API 653 tank inspection actually involves')} — the survey scope, the floor and shell examination, the settlement and repair decisions — that is the guide, and it goes far deeper than a certification page should. If you are looking for ${L('/api-653-training', 'an API 653 course')} rather than the credential's requirements, the training page covers preparation, delivery and the ${L('/blog/api-510-570-653-exam-schedule-2026', 'exam calendar')} that sets your timeline.`,
  },
  {
    path: '/blog/api-653-tank-inspection-guide',
    heading: 'Getting certified, and getting the work done',
    body: `This guide is the inspection scope. Two different needs follow from it. If you or your people need the credential, ${L('/api-653-certification', 'API 653 certification')} covers eligibility and the examination, and ${L('/api-653-training', 'API 653 training')} covers preparation — an employer certifying a crew should read ${L('/blog/building-us-ndt-crew-certification-sequence', 'the crew certification sequence')} first, because tank work is rarely the place to start. If instead you need the inspection performed, that is a ${L('/consulting/oil-gas-ndt-consulting', 'programme engagement')} — tank programmes are among the most commonly outsourced inspection scopes, and the evidence chain is what an operator audit actually tests.`,
  },
  {
    path: '/api-653-training',
    heading: 'What this course prepares you for',
    body: `API 653 training prepares candidates for the certification examination and for the tank-inspection work behind it. The credential itself — eligibility, body of knowledge, what the certification authorises — is on ${L('/api-653-certification', 'the API 653 certification page')}; the work it qualifies you for is set out in ${L('/blog/api-653-tank-inspection-guide', 'the tank inspection guide')}. Exam windows and delivery arrangements move: check the ${L('/blog/api-510-570-653-exam-schedule-2026', 'current API exam schedule')} before committing to a preparation timeline, and api.org for the rules that apply to your sitting.`,
  },
];

/* ═══ 2. Market structure ═══ */

function marketBlock() {
  return `
    <section aria-label="How the NDT services market is actually structured">
      <h2>How the NDT inspection services market is actually structured</h2>
      <p>Published market figures for non-destructive testing disagree with each other by wide margins,
      and the reason is definitional rather than analytical: some studies count only third-party
      inspection services, others fold in equipment sales, and a few include in-house inspection
      departments as notional spend. Before comparing two market numbers, check which of those three
      things each one measured — most apparent contradictions dissolve at that point.</p>

      <h2>The segments buyers actually purchase in</h2>
      <p><strong>Services</strong> — inspection performed by a contractor, priced per campaign,
      turnaround or contract term. This is the largest genuinely addressable segment and the one that
      tracks industrial capital and maintenance cycles most directly.
      <strong>Equipment</strong> — instruments, probes, consumables and software sold to contractors and
      owner-operators, a cycle driven by technology transitions (film to digital radiography,
      conventional UT to phased array) more than by maintenance volume.
      <strong>Training and certification</strong> — a small segment in revenue terms and a structural
      constraint on the other two, because certified technician supply gates how much service capacity
      exists at all. <strong>Software and data</strong> — the newest segment, growing as owners demand
      inspection evidence in systems rather than PDFs.</p>

      <h2>What drives US demand specifically</h2>
      <p>Four forces, and they do not move together. Asset age: much of the US refining, chemical and
      power fleet is operating well beyond original design life, which raises inspection frequency
      independent of new construction. Regulatory and code cycles: API in-service code revisions,
      state jurisdictional programmes and PHMSA integrity requirements convert directly into examination
      scope. Capital projects: new construction — LNG, data centres, grid and generation build — creates
      fabrication-side examination demand that is lumpy and geographically concentrated. And workforce:
      the certified technician shortage caps how much of the demand can actually be served, which is why
      capacity, not orders, is the binding constraint for most US contractors.</p>

      <h2>Who the buyers are</h2>
      <p>Owner-operators buying inspection programmes (refineries, chemical plants, utilities, pipeline
      operators) · fabricators and OEMs buying construction-code examination · EPCs buying project QA
      scope · and, increasingly, insurers and lenders requiring independent condition evidence on
      assets they carry risk against. Each buys against a different acceptance regime, which is why
      the market fragments by sector rather than by method — the reason our own practice is organised
      that way: ${L('/consulting/oil-gas-ndt-consulting', 'oil & gas')},
      ${L('/consulting/nuclear-ndt-consulting', 'nuclear')},
      ${L('/consulting/maritime-ndt-consulting', 'maritime')},
      ${L('/consulting/aerospace-ndt-consulting', 'aerospace')} and
      ${L('/consulting/aviation-ndt-consulting', 'aviation MRO')}.</p>

      <h2>Where the structure is changing</h2>
      <p>Three shifts are visible in how work is bought rather than in headline totals. Evidence is
      moving from documents to data — owners increasingly require inspection results in a queryable
      system, which is what ${L('/digital-twins', 'asset-integrity digital twins')} and
      ${L('/ndt-inspection-software', 'inspection software')} exist to serve. Screening technologies
      (guided wave, corrosion mapping, array techniques) are displacing spot examination, changing the
      labour-to-equipment ratio of a campaign. And the workforce constraint is pushing owners toward
      longer contractor relationships rather than campaign-by-campaign tendering, because certified
      crews cannot be summoned on demand — ${L('/blog/ndt-technician-workforce-shortage-what-helps', 'the shortage and what actually helps')}
      covers that dynamic, and ${L('/blog/us-ndt-inspection-services-market-structure', 'the US market-structure analysis')}
      goes further into the contractor landscape.</p>
    </section>`;
}

/* ═══ 3. /industry/ funnel ═══ */

/** sector slug (from /industry/{sector}-ndt-{city}) → destinations */
const SECTOR_ROUTES = {
  'oil-gas': { name: 'oil & gas', consulting: '/consulting/oil-gas-ndt-consulting', training: '/oil-gas-ndt-training' },
  petrochemical: { name: 'petrochemical', consulting: '/consulting/oil-gas-ndt-consulting', training: '/oil-gas-ndt-training' },
  pipeline: { name: 'pipeline', consulting: '/consulting/oil-gas-ndt-consulting', training: '/pipeline-ndt-training' },
  aerospace: { name: 'aerospace', consulting: '/consulting/aerospace-ndt-consulting', training: '/aerospace-ndt-training' },
  marine: { name: 'marine and shipbuilding', consulting: '/consulting/maritime-ndt-consulting', training: '/maritime-ndt-training' },
  'power-generation': { name: 'power generation', consulting: null, training: '/power-generation-ndt-training' },
  manufacturing: { name: 'manufacturing', consulting: null, training: '/manufacturing-ndt-training' },
  construction: { name: 'construction', consulting: null, training: '/manufacturing-ndt-training' },
};

function funnelBlock(sector, cityLabel) {
  const s = SECTOR_ROUTES[sector];
  const parts = [];
  if (s.consulting) parts.push(`${L(s.consulting, `${s.name} NDT consulting`)} covers programme authority — written practices, procedure approval, audit defence — in this sector's regime`);
  parts.push(`${L(s.training, `${s.name} NDT training`)} covers the methods this sector certifies in and the career path into it`);
  return `
    <section aria-label="Sector resources">
      <h2>${esc(s.name.charAt(0).toUpperCase() + s.name.slice(1))} NDT beyond ${esc(cityLabel)}</h2>
      <p>This page covers ${esc(s.name)} inspection in ${esc(cityLabel)}. The sector-wide picture sits on
      the national pages: ${parts.join('; and ')}.</p>
    </section>`;
}

export function applyIndustryFunnel(routes, append) {
  const out = { applied: 0, bySector: {} };
  for (const r of routes) {
    const m = /^\/industry\/([a-z-]+?)-ndt-([a-z0-9-]+)$/.exec(r.path || '');
    if (!m) continue;
    const [, sector, city] = m;
    if (!SECTOR_ROUTES[sector]) continue;
    const cityLabel = city.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ');
    append(r, funnelBlock(sector, cityLabel));
    out.applied++;
    out.bySector[sector] = (out.bySector[sector] || 0) + 1;
  }
  return out;
}

/* ═══ apply ═══ */

export function applyBacklogFixes(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { api653: 0, market: 0, missing: [] };
  for (const b of API653) {
    const r = byPath.get(b.path);
    if (!r) { out.missing.push(b.path); continue; }
    append(r, `
    <section aria-label="${esc(b.heading)}">
      <h2>${esc(b.heading)}</h2>
      <p>${b.body}</p>
    </section>`);
    out.api653++;
  }
  const m = byPath.get('/ndt-industry-statistics');
  if (m) { append(m, marketBlock()); out.market++; } else out.missing.push('/ndt-industry-statistics');
  return out;
}

/* ═══ Guards ═══ */

export function assertNoPricesInBacklog() {
  const blob = JSON.stringify(API653) + marketBlock() + JSON.stringify(SECTOR_ROUTES);
  const hits = blob.match(/[$£€₹]\s?\d|per (day|hour|student)\b|\btuition\b|\/yr\b/gi);
  if (hits) throw new Error(`backlog copy contains pricing: ${[...new Set(hits)].join(', ')}`);
}

export function assertBacklogTargets(routes) {
  const paths = new Set(routes.map((r) => r.path));
  const need = new Set();
  for (const b of API653) { need.add(b.path); for (const m of b.body.matchAll(/href="(\/[^"#?]*)"/g)) need.add(m[1]); }
  for (const m of marketBlock().matchAll(/href="(\/[^"#?]*)"/g)) need.add(m[1]);
  for (const s of Object.values(SECTOR_ROUTES)) { if (s.consulting) need.add(s.consulting); need.add(s.training); }
  const missing = [...need].filter((p) => !paths.has(p));
  if (missing.length) throw new Error(`backlog targets missing: ${missing.join(', ')}`);
}
