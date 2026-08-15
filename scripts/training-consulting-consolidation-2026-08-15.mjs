/**
 * Training + Level III consulting consolidation — 2026-08-15.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHY US TRAINING TRAFFIC IS NOT ARRIVING. Measured USA-only, 28d to 08-14:
 * 653 distinct queries, 3,724 impressions, **20 clicks**. Not a CTR problem —
 * almost nothing ranks on page one. The cause is visible page by page:
 *
 *   "asnt level iii consulting"      244i  0c  across **18 PAGES**
 *        34i p13  /blog/ndt-consulting-questions-answered-by-level-iii-expert
 *        31i p44  /consulting/ndt-consulting-level-iii     <- the real owner
 *        28i p42  /consulting/ndt-consulting-seattle
 *        26i p46  /blog/ndt-level-iii-certification-requirements-guide
 *        24i p75  /consulting/ndt-consulting-houston
 *        23i p88  /consulting/asnt-level-iii-consulting-services
 *
 *   "ndt level 3 consultant"         128i  0c  across 8 pages  (p18–92)
 *   "ndt level 3 consulting services" 116i 0c  across 11 pages (p25–97)
 *
 * The purpose-built page sits at p44 while five weaker pages split the term
 * around it. No URL accumulates enough authority to reach page one, so the
 * whole cluster earns nothing despite ~490 impressions a month of exactly the
 * B2B intent that produces enquiries.
 *
 * THE SAME SHAPE PROVES THE DIAGNOSIS IN THE TRAINING CLUSTER — and shows the
 * upside. "ndt certification near me" is split across 8 pages:
 *        57i p69  /ndt-training-atlanta      <- absorbs the impressions
 *        44i p51  /ndt-training-denver
 *         3i p 3  /ndt-training-dallas       <- ranks THIRD, gets 3 impressions
 *         3i p 3  /ndt-training-st-louis     <- ranks THIRD, gets 3 impressions
 * Pages that CAN rank top-3 exist. Google is mostly serving the wrong one.
 *
 * ⚠️ The near-me cluster itself stays unwinnable (§34.1 — no Google Business
 * Profile is possible for a remote-office company, and those queries resolve
 * through the local pack). This module therefore does NOT chase near-me. It
 * consolidates the cluster that IS winnable and IS the enquiry-generating
 * audience: employers buying Level III support and crew certification.
 *
 * MECHANISM — exact-anchor routing plus explicit scope statements, the pattern
 * §25.2 proved on san-diego/corpus-christi. Nothing is deleted or redirected
 * (additive-only): each page keeps its own job and stops competing for a term
 * it was never meant to own.
 *
 * NO PRICING (§18). NO fabricated local presence (§24.2).
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (href, text) => `<a href="${href}">${esc(text)}</a>`;

const OWNER = '/consulting/ndt-consulting-level-iii';
const OWNER_ANCHORS = [
  'ASNT Level III consulting',
  'NDT Level 3 consulting services',
  'outsourced ASNT Level III support',
  'NDT Level 3 consultant support',
];

/* ── City consulting pages ranking for the NATIONAL term ──────────────────
 * Each gets an explicit scope statement naming its own market and handing the
 * national term upward. Real local content per city so the block is not a
 * name-swap (§26.1: researched city pages earn ~22x name-swaps).            */
const CITY_SCOPE = {
  seattle: {
    name: 'Seattle', state: 'Washington',
    local: 'aerospace manufacturing and its supply chain, the Puget Sound shipyards and naval facilities, and the refining and marine terminals north of the city',
    regime: 'NAS 410 or EN 4179 on the aerospace side, naval technical requirements at the yards, and ASME with Washington jurisdictional oversight on pressure equipment',
  },
  houston: {
    name: 'Houston', state: 'Texas',
    local: 'the ship channel refineries and chemical complexes, the upstream and midstream head offices that buy inspection nationally, and a fabrication belt building pressure vessels and offshore modules',
    regime: 'API 510, 570 and 653 for in-service inspection, with ASME Section V supplying the methods and operator contractor-approval gating site access',
  },
  'corpus-christi': {
    name: 'Corpus Christi', state: 'Texas',
    local: 'the refining cluster, the export terminals that grew with crude and LNG shipments, and the wind and marine work along the coastal bend',
    regime: 'API in-service codes across the refining and terminal estate, with marine scopes answering to classification societies',
  },
  denver: {
    name: 'Denver', state: 'Colorado',
    local: 'the Rockies upstream and midstream operators headquartered downtown, gas processing across the DJ Basin, and a manufacturing and aerospace base along the Front Range',
    regime: 'API and ASME on the energy estate, with Colorado jurisdictional inspection on pressure equipment and NAS 410 in the aerospace supply chain',
  },
};

function cityScopeBlock(slug, c) {
  return `
    <section aria-label="What this page covers">
      <h2>This page covers ${esc(c.name)} — not the national service</h2>
      <p>Atlantis supports inspection programmes in ${esc(c.name)}, ${esc(c.state)} across ${esc(c.local)}.
      Work here answers to ${esc(c.regime)}. Teams mobilise to your site under Atlantis procedures —
      we do not claim an office or laboratory in ${esc(c.name)}, and say so plainly.</p>
      <p>If you are looking for ${L(OWNER, OWNER_ANCHORS[0])} as a national engagement rather than
      support in this specific market — a named Level III of record, procedure approval and written
      practice ownership, technique qualification and audit defence, delivered wherever your sites
      are — that is the page to read. This one stays scoped to ${esc(c.name)}.</p>
    </section>`;
}

/* ── Non-city pages that split the term, each routed with a distinct anchor ── */
const ROUTERS = [
  {
    path: '/consulting',
    heading: 'Where Level III consulting sits in this list',
    body: `The consulting practice spans RBI programme design, fitness-for-service assessment under API 579, code consulting and procedure development. The single most requested engagement is different from all of them: acting as the named ASNT Level III for a company that does not employ one. That has its own page — {LINK} — because the commitment, the deliverables and the audit exposure are unlike a project-scoped consulting job.`,
    anchor: 1,
  },
  {
    path: '/consulting/asnt-level-iii-consulting-services',
    heading: 'The engagement page for this service',
    body: `This page describes the service in outline. The full engagement — what the Level III of record signs, how procedure approval and technique qualification are handled, what happens during a client audit, and how the relationship is structured for a company without an in-house Level III — is set out on {LINK}. Start there if you are scoping an actual engagement rather than researching the category.`,
    anchor: 2,
  },
  {
    path: '/blog/ndt-consulting-questions-answered-by-level-iii-expert',
    heading: 'Moving from questions to an engagement',
    body: `The answers above are the questions asked most often before a company commits to outside Level III support. If they have resolved the question for you and what you need next is the service itself, {LINK} sets out how the engagement actually works — the named Level III of record, written practice ownership, procedure and technique approval, and audit defence.`,
    anchor: 3,
  },
  {
    path: '/blog/ndt-level-iii-certification-requirements-guide',
    heading: 'Certifying versus contracting a Level III',
    body: `This guide covers becoming a Level III — the eligibility, examination and experience route an individual takes. The other side of the same problem is the employer who needs Level III authority now and has nobody to certify. For that, {LINK} covers contracting the function rather than building it, which is the faster path when a contract or audit deadline is already fixed.`,
    anchor: 0,
  },
  {
    path: '/asnt-level-iii-training',
    heading: 'If you need the authority sooner than the training',
    body: `Training and examination take time, and an employer facing a client audit or a contract prerequisite frequently cannot wait for a candidate to qualify. Where that is the case, {LINK} covers contracting the Level III function directly — a named Level III of record who can approve procedures and own the written practice from the start, while your own candidate works through certification in parallel.`,
    anchor: 3,
  },
];

function routerBlock(r) {
  return `
    <section aria-label="${esc(r.heading)}">
      <h2>${esc(r.heading)}</h2>
      <p>${r.body.replace('{LINK}', L(OWNER, OWNER_ANCHORS[r.anchor]))}</p>
    </section>`;
}

/* ── The owner page states its own scope, so the term has one clear home ──── */
function ownerBlock() {
  return `
    <section aria-label="Who this page is for">
      <h2>Who contracts an outsourced ASNT Level III</h2>
      <p>Three situations account for most engagements. A company wins work that requires a Level III
      of record and does not employ one. A company employs one who is retiring, leaving, or already
      oversubscribed across too many methods. Or a client audit has found the written practice,
      procedures or technique qualifications inadequate and there is a deadline to fix it.</p>
      <p>In each case the need is authority that can be exercised now — someone who can own the
      written practice, approve procedures and technique qualifications, and stand behind them in
      front of your client's auditor. That is a different purchase from
      ${L('/asnt-level-iii-training', 'Level III training for one of your own people')}, which is the
      right answer when the timeline allows it, and from
      ${L('/consulting', 'project-scoped NDT consulting')}, which solves a defined problem and ends.</p>
      <p>Scope an engagement: ${L('/contact?service=consulting', 'tell us which methods and which codes')}.</p>
    </section>`;
}

export function applyLevelIiiConsolidation(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { owner: 0, routers: 0, cities: 0, missing: [] };

  const o = byPath.get(OWNER);
  if (o) { append(o, ownerBlock()); out.owner++; } else out.missing.push(OWNER);

  for (const r of ROUTERS) {
    const t = byPath.get(r.path);
    if (!t) { out.missing.push(r.path); continue; }
    append(t, routerBlock(r));
    out.routers++;
  }

  for (const [slug, c] of Object.entries(CITY_SCOPE)) {
    const t = byPath.get(`/consulting/ndt-consulting-${slug}`);
    if (!t) { out.missing.push(`/consulting/ndt-consulting-${slug}`); continue; }
    append(t, cityScopeBlock(slug, c));
    out.cities++;
  }
  return out;
}

/* ── Guards ─────────────────────────────────────────────────────────────── */

export function assertNoPricesInConsolidation2() {
  const blob = JSON.stringify(CITY_SCOPE) + JSON.stringify(ROUTERS) + ownerBlock();
  const hits = blob.match(/[$£€₹]\s?\d|per day|per hour|\/yr\b/gi);
  if (hits) throw new Error(`level-iii consolidation copy contains pricing: ${[...new Set(hits)].join(', ')}`);
}

/** Every routed target must exist, or thousands of pages ship a 404 (§34.4). */
export function assertConsolidationTargets(routes) {
  const paths = new Set(routes.map((r) => r.path));
  const need = [OWNER, '/asnt-level-iii-training', '/consulting', ...ROUTERS.map((r) => r.path)];
  const missing = need.filter((p) => !paths.has(p));
  if (missing.length) throw new Error(`level-iii consolidation targets missing: ${missing.join(', ')}`);
}
