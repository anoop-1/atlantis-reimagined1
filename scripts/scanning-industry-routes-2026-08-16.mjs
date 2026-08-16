/**
 * 3D Scanning × Industry + Consulting × Region — 2026-08-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * TWO GAPS THE COVERAGE AUDIT EXPOSED.
 *
 * ── A. 3D SCANNING HAS NO INDUSTRY AXIS, AND ITS TRAFFIC IS THE WRONG AUDIENCE
 * The family measures **51.8 impressions per indexed page across 190 pages
 * (159 earning)** — second only to blog, and far above every other city
 * family. But §20.6 recorded the catch: 4,667 impressions at 0.04% CTR on
 * generic US-metro scanning queries, because those searchers are AEC and
 * surveying buyers, not industrial ones. The recorded instruction was "keep
 * industrial/energy-hub scanning pages, stop investing in generic US-metro
 * terms."
 *
 * An INDUSTRY axis is exactly that correction: it targets the buyer who wants
 * a refinery as-built or a shipyard dimensional survey, not "3d scanning near
 * me". Seven nationals, each written around what reality capture is actually
 * for in that sector — and, per the §37.2 honesty rule, what a scan does NOT
 * give you (surfaces, not wall thickness; geometry, not condition).
 *
 * ── B. CONSULTING HAS 3 REGION PAGES; TRAINING HAS 8 ────────────────────────
 * /consulting-usa, -india, -me exist and measure 26.0 impressions per page —
 * the highest per-page figure of any consulting family. Training gained 8 US
 * regions on 2026-08-16. Consulting gets the same spine: region hubs that
 * route to the sector nationals and the earning city pages.
 *
 * §18 no pricing · §24.2 mobilised delivery, no fabricated presence.
 */
import { TRAINING_REGIONS } from '../src/data/industry-training-matrix.mjs';

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (href, text) => `<a href="${href}">${esc(text)}</a>`;

/* ═══ A. 3D scanning × industry ═══ */

const SCAN_NOTE = `Atlantis mobilises scanning crews to your site — terrestrial laser scanning, photogrammetry and drone capture as the asset demands — and delivers registered point clouds, meshes and the deliverable your engineering team actually consumes. We do not claim a survey office in every market, and say so plainly.`;

const SCAN_LIMIT = `What a scan does not give you: reality capture records SURFACES. It measures geometry to millimetres and it will not tell you remaining wall thickness, whether a weld contains lack of fusion, or how much life an asset has left. Those are examination questions, answered by ultrasonics, radiography and the rest of the NDT method set — which is why scanning and inspection belong in the same programme rather than substituting for one another.`;

export const SCAN_INDUSTRIES = {
  refinery: {
    name: 'Refinery & Petrochemical',
    title: '3D Scanning for Refineries & Petrochemical Plants — As-Builts, Clash Detection & Turnaround Planning',
    desc: 'Laser scanning for refining and petrochemical sites: as-built capture of congested process units, tie-in and clash detection before a turnaround, and dimensional control on fabricated modules.',
    why: `Process units are the hardest environments to document and the most expensive to get wrong. Decades of modifications mean drawings rarely match steel, and a tie-in designed against a stale isometric becomes a discovered clash during the shutdown — when a day of rework costs more than the entire survey. Scanning the unit before the design freeze converts that risk into a known quantity.`,
    uses: `As-built capture of piperack and unit congestion for revamp design; tie-in verification so new spools fit first time; clash detection between new equipment and existing steel, cable tray and access; pre-fabrication dimensional control on skids and modules built off site; and post-incident or post-settlement geometry capture where something has moved and nobody can prove by how much.`,
    pairing: `The scan defines geometry; the inspection programme defines condition. Refinery scopes almost always run both — thickness and weld examination under the API in-service codes alongside dimensional capture.`,
    links: [['/ultrasonic-testing-refining', 'UT in refining'], ['/consulting/oil-gas-ndt-consulting', 'refining programme consulting'], ['/ndt-for-oil-gas', 'oil & gas inspection services']],
  },
  shipyard: {
    name: 'Shipyard & Marine',
    title: '3D Scanning for Shipyards & Marine Assets — Hull Survey, Retrofit and Dry-Dock Capture',
    desc: 'Laser scanning for shipyards and vessel operators: hull form and deformation capture, retrofit and conversion design, compartment as-builts and dry-dock dimensional control.',
    why: `A vessel is a large, curved, constantly modified structure that nobody has accurate drawings for after its first refit. Retrofits — scrubbers, ballast treatment, propulsion conversion — are designed into spaces whose real geometry differs from the general arrangement, and the discovery happens in dry dock where every day is metered.`,
    uses: `Compartment and machinery-space as-builts for conversion design; hull form capture and deformation comparison against baseline; propeller and rudder geometry; block and section dimensional control during new construction; and damage capture after grounding or collision where the repair scope must be argued to a class surveyor.`,
    pairing: `Geometry answers "will it fit"; examination answers "is it sound". Yard programmes run structural UT and MT alongside dimensional capture, under class or NAVSEA acceptance.`,
    links: [['/ultrasonic-testing-marine', 'UT in marine work'], ['/consulting/maritime-ndt-consulting', 'maritime programme consulting'], ['/maritime-ndt-training', 'maritime NDT training']],
  },
  power: {
    name: 'Power Generation',
    title: '3D Scanning for Power Plants — Outage Planning, Turbine Halls and Retrofit Design',
    desc: 'Laser scanning for generating plant: turbine hall and boiler house as-builts, outage staging and rigging studies, retrofit and emissions-equipment design, and component geometry capture.',
    why: `Outage windows are fixed and expensive, and the work inside them is choreographed against drawings that predate several rounds of modification. Scanning the plant before the outage lets rigging paths, laydown areas and equipment removal routes be planned against reality rather than optimism.`,
    uses: `Turbine hall and boiler house as-builts for retrofit and emissions equipment; rigging, laydown and access studies before an outage; component geometry capture for reverse engineering of obsolete parts; stack and structure verticality; and condenser and exchanger layout capture for retube planning.`,
    pairing: `Scanning stages the outage; examination fills it — boiler tube and header UT, exchanger tube ET, structural MT — under ASME and fleet programme requirements.`,
    links: [['/eddy-current-testing-power', 'ET in power generation'], ['/power-generation-ndt-training', 'power generation NDT training'], ['/consulting/nuclear-ndt-consulting', 'nuclear programme consulting']],
  },
  aerospace: {
    name: 'Aerospace & Defence',
    title: '3D Scanning for Aerospace & Defence — Tooling Verification, Reverse Engineering and Assembly Fit',
    desc: 'Metrology-grade scanning for aerospace manufacture and MRO: tooling and jig verification, reverse engineering of legacy parts, assembly fit-up and as-maintained capture.',
    why: `Aerospace tolerances make geometry a quality characteristic rather than a convenience. Tooling drifts, legacy parts have no model, and assembly interfaces must be proven before build rather than discovered during it — all questions metrology-grade capture answers directly.`,
    uses: `Jig and tooling verification against nominal; reverse engineering of out-of-production components; assembly fit-up and gap/flush analysis; composite part conformance to CAD; and as-maintained capture on airframes during heavy check.`,
    pairing: `Dimensional conformance is one half of aerospace quality; the other is subsurface integrity — fluorescent PT, ET and composite UT under NAS 410 process control.`,
    links: [['/eddy-current-testing-aviation', 'ET in aerospace'], ['/consulting/aerospace-ndt-consulting', 'aerospace programme consulting'], ['/aerospace-ndt-training', 'aerospace NDT training']],
  },
  fabrication: {
    name: 'Fabrication & Modular Construction',
    title: '3D Scanning for Fabrication Shops & Modular Construction — Dimensional Control Before It Ships',
    desc: 'Scanning for fabricators and module yards: dimensional control on spools, skids and modules, interface verification between packages, and as-shipped records that settle disputes.',
    why: `A module that does not fit at site is the most expensive defect in construction, and it is discovered thousands of miles from the shop that made it. Scanning before load-out turns interface conformance from a hope into a record.`,
    uses: `Spool and skid dimensional control against model; module interface verification between packages and vendors; as-shipped geometric records for handover; weld distortion and flatness assessment on large weldments; and first-article verification on repeat fabrication.`,
    pairing: `Fabrication runs construction-code examination — RT or UT for volumetric acceptance, MT and VT for surface and profile — under AWS D1.1 or ASME depending on the product.`,
    links: [['/radiographic-testing-fabrication', 'RT in fabrication'], ['/manufacturing-ndt-training', 'manufacturing NDT training'], ['/visual-testing-fabrication', 'VT in fabrication']],
  },
  mining: {
    name: 'Mining & Bulk Handling',
    title: '3D Scanning for Mining & Bulk Handling — Wear Monitoring, Structures and Stockpiles',
    desc: 'Scanning for mining and bulk materials operations: liner and wear monitoring, structural deformation tracking, conveyor and chute geometry, and stockpile volumetrics.',
    why: `Mining assets wear measurably and continuously, and the operational questions are quantitative: how much liner is left, has that structure moved, how much material is actually in the stockpile. Repeat scanning turns each into a trend rather than an opinion.`,
    uses: `Mill and crusher liner wear measurement between relines; structural deformation tracking on shovels, draglines and headframes; conveyor and transfer chute geometry for flow redesign; stockpile and pit volumetrics; and reverse engineering of worn or obsolete components.`,
    pairing: `Wear is geometry; cracking is not. Mining programmes pair scanning with MT and UT on fatigue-critical welds and structures.`,
    links: [['/magnetic-particle-testing-mining', 'MT in mining'], ['/manufacturing-ndt-training', 'industrial NDT training']],
  },
  tank: {
    name: 'Tank Farms & Terminals',
    title: '3D Scanning for Tank Farms & Terminals — Settlement, Shell Geometry and Capacity',
    desc: 'Scanning for storage tanks and terminals: shell verticality and out-of-roundness, settlement surveys, floating roof geometry, and calibration-grade capacity capture.',
    why: `Tanks change shape. Settlement tilts them, shells go out of round, and floating roofs bind — and every one of those is a geometric measurement that API 653 evaluation depends on. Scanning captures the whole shell in a fraction of the time a manual survey takes, with far more points to evaluate against the annex criteria.`,
    uses: `Settlement surveys evaluated against API 653 Annex B criteria; shell verticality and out-of-roundness; floating roof and seal geometry; nozzle and appurtenance position capture for repair design; and capacity/strapping capture where calibration matters commercially.`,
    pairing: `Geometry is only part of a tank programme. Floor scanning by MFL, shell UT thickness and weld examination supply the condition half — see ${'what an API 653 inspection actually involves'}.`,
    links: [['/blog/api-653-tank-inspection-guide', 'API 653 tank inspection'], ['/ultrasonic-testing-refining', 'UT thickness work'], ['/consulting/oil-gas-ndt-consulting', 'tank programme consulting']],
  },
};

function scanBody(slug, s) {
  const links = s.links.map(([h, t]) => L(h, t)).join(' · ');
  const siblings = Object.entries(SCAN_INDUSTRIES).filter(([k]) => k !== slug)
    .map(([k, v]) => L(`/3d-scanning-${k}`, v.name)).join(' · ');
  return `
  <article>
    <h1>${esc(s.title.split('—')[0].trim())}</h1>
    <h2>Why ${esc(s.name.toLowerCase())} sites scan</h2>
    <p>${esc(s.why)}</p>
    <h2>What it is actually used for</h2>
    <p>${esc(s.uses)}</p>
    <h2>What a scan will not tell you</h2>
    <p>${esc(SCAN_LIMIT)}</p>
    <h2>How scanning and inspection work together here</h2>
    <p>${esc(s.pairing)} ${links}.</p>
    <h2>How Atlantis delivers</h2>
    <p>${esc(SCAN_NOTE)}</p>
    <p>${L('/3d-scanning-services', '3D scanning services')} ·
    ${L('/digital-twins', 'turning captured geometry into a digital twin')} ·
    ${L('/contact?service=3d-scanning', 'scope a scan')}.</p>
    <h2>Scanning in other sectors</h2>
    <p>${siblings}.</p>
  </article>`;
}

export function scanningIndustryRoutes() {
  return Object.entries(SCAN_INDUSTRIES).map(([slug, s]) => ({
    path: `/3d-scanning-${slug}`,
    title: `${s.title} | Atlantis NDT`,
    description: s.desc,
    canonical: `https://atlantisndt.com/3d-scanning-${slug}`,
    bodyContent: scanBody(slug, s),
  }));
}

/* ═══ B. Consulting × region ═══ */

const CONSULTING_SECTORS = ['maritime', 'aerospace', 'aviation', 'nuclear', 'oil-gas'];

function consultingRegionBody(slug, r) {
  const cities = r.cities
    .map((c) => L(`/consulting/ndt-consulting-${c}`, c.split('-').map((w) => w[0].toUpperCase() + w.slice(1)).join(' ')))
    .join(' · ');
  const sectors = CONSULTING_SECTORS.map((s) => L(`/consulting/${s}-ndt-consulting`, s === 'oil-gas' ? 'Oil & Gas' : s[0].toUpperCase() + s.slice(1))).join(' · ');
  return `
  <article>
    <h1>NDT Consulting in the ${esc(r.name)}: Programmes, Sectors and Level III Authority</h1>
    <p>${esc(r.character)}</p>
    <h2>How certification and programmes work here</h2>
    <p>${esc(r.certification)}</p>
    <h2>The engagements this region actually buys</h2>
    <p>Programme problems are sector-shaped — the regime, the damage mechanisms and the auditor all
    change — which is why the practice is organised by industry rather than by method: ${sectors}.
    The most requested engagement across all of them is the same: acting as the named
    ${L('/consulting/ndt-consulting-level-iii', 'ASNT Level III of record')} for a company that does
    not employ one.</p>
    <h2>Markets in the ${esc(r.name)}</h2>
    <p>${cities}.</p>
    <h2>How engagements are delivered</h2>
    <p>Engagements are delivered by mobilised ASNT Level III consultants working inside your
    programme — we do not claim local offices in these markets, and say so plainly. What you receive
    is authority that can be exercised now: procedure and technique approval, written practice
    ownership, qualification sign-off, and a consultant on your side of the table when the auditor
    arrives. ${L('/consulting', 'The consulting practice')} ·
    ${L('/contact?service=consulting', 'scope an engagement')}.</p>
  </article>`;
}

export function consultingRegionRoutes(existingPaths) {
  const out = [];
  for (const [slug, r] of Object.entries(TRAINING_REGIONS)) {
    // Only regions whose member cities have consulting pages worth linking.
    const cities = r.cities.filter((c) => existingPaths.has(`/consulting/ndt-consulting-${c}`));
    if (cities.length < 3) continue;
    const region = { ...r, cities };
    out.push({
      path: `/consulting-${slug}`,
      title: `NDT Consulting ${r.name} — ASNT Level III, Programme & Audit Support | Atlantis NDT`,
      description: `NDT consulting across the ${r.name}: sector programme authority, written practices, procedure approval and audit defence — delivered by mobilised ASNT Level III consultants.`,
      canonical: `https://atlantisndt.com/consulting-${slug}`,
      bodyContent: consultingRegionBody(slug, region),
    });
  }
  return out;
}

/* ═══ Inbound (§34.5) ═══ */

export function applyScanConsultingInbound(routes, append, regionSlugs) {
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
  const scanList = Object.entries(SCAN_INDUSTRIES)
    .map(([k, v]) => L(`/3d-scanning-${k}`, v.name)).join(' · ');
  put('/3d-scanning-services', 'Scanning by sector',
    `What reality capture is used for differs sharply by industry — and so does what it cannot answer. Sector detail: ${scanList}.`);
  put('/digital-twins', 'Where the geometry comes from',
    `A digital twin needs an accurate model of the asset before it can carry condition data. Scanning supplies it: ${scanList}.`);
  if (regionSlugs && regionSlugs.length) {
    const regionList = regionSlugs.map((s) => L(`/consulting-${s}`, TRAINING_REGIONS[s].name)).join(' · ');
    put('/consulting', 'Consulting by region',
      `Regional pages group the markets and set out how certification and programme requirements differ across them: ${regionList}.`);
    put('/consulting-usa', 'US consulting by region',
      `Within the US the regimes and industrial base shift considerably by region: ${regionList}.`);
  }
  return out;
}

/* ═══ Guards ═══ */

export function assertNoPricesInScanConsulting() {
  const blob = JSON.stringify(SCAN_INDUSTRIES) + SCAN_NOTE + SCAN_LIMIT;
  const hits = blob.match(/[$£€₹]\s?\d|per (day|hour|scan|square|point)\b|\/yr\b/gi);
  if (hits) throw new Error(`scan/consulting copy contains pricing: ${[...new Set(hits)].join(', ')}`);
}

export function assertScanConsultingTargets(routes) {
  const paths = new Set(routes.map((r) => r.path));
  for (const r of scanningIndustryRoutes()) paths.add(r.path);
  const need = new Set();
  for (const r of scanningIndustryRoutes())
    for (const m of String(r.bodyContent).matchAll(/href="(\/[^"#?]*)"/g)) need.add(m[1]);
  const missing = [...need].filter((p) => !paths.has(p));
  if (missing.length) throw new Error(`scan-industry targets missing: ${missing.join(', ')}`);
}
