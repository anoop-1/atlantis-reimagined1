/**
 * Phase D — Digital Twins: predix-alternatives owner + ROI leverage — 2026-08-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * Grounded in scripts/phase-harvest-dt-2026-08-16.json (USA 90d): 50 queries ·
 * 370i · 0 clicks. The vendor bucket is the entire earning class (197i wtd
 * p22) and it is ONE coherent cluster around GE Predix:
 *
 *   predix digital twin      102i p22.3 → vs-page
 *   predix alternatives       19i p24.3 → vs-page
 *   ge predix apm             15i p17.1 → vs-page
 *   ge predix alternatives    13i p37.2 → vs-page
 *
 * All four resolve to /compare/atlantis-dt-vs-ge-predix — a head-to-head page.
 * A person searching "predix alternatives" wants a FIELD, not one challenger;
 * the vs-page is the wrong shape for the query, which is why it sits p24–37.
 * One new owning page: /compare/ge-predix-alternatives — honest multi-vendor
 * treatment (§23.3: credit rivals first; a page that only flatters its owner
 * is seen through by the buyer it targets).
 *
 * Also measured: "asset integrity digital twin" 26i at p68 landing on
 * /digital-twins with no answering section (§23.2 saw it at p63 — two cycles
 * unaddressed); and the ROI calculator earning question-shaped queries at
 * p8.8–11.5 with no methodology block.
 *
 * DECIDED BY THE DATA: no other new comparison pages ("thingworx vs predix"
 * 5i, "mindsphere alternative" 7i — the existing vs-pages cover these).
 * No pricing (§18) — vendor pricing described qualitatively only (§25.5).
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const L = (href, text) => `<a href="${href}">${esc(text)}</a>`;

/* ── The alternatives page ─────────────────────────────────────────────────── */

const T = 'GE Predix Alternatives — Who Actually Replaces It, and For Which Job';
const D = 'A working map of the GE Predix (now GE Vernova) alternatives field: Cognite, AVEVA, Bentley iTwin, Siemens, PTC, Azure Digital Twins and NDT-data-native platforms — matched to the job you are actually hiring a platform for.';

function altBody() {
  return `
  <article>
    <h1>GE Predix Alternatives: Who Actually Replaces It, and For Which Job</h1>

    <section aria-label="Direct answer">
      <h2>What are the real alternatives to GE Predix?</h2>
      <p>It depends on which of Predix's jobs you are hiring for. For fleet APM and predictive analytics
      the credible successors are Cognite Data Fusion and AVEVA's PI-based stack; for engineering-grade
      digital twins, Bentley iTwin and Siemens; for IoT platform work, PTC ThingWorx and Azure Digital
      Twins; and for asset-integrity twins built on inspection evidence rather than sensor feeds,
      NDT-data-native platforms — the class Atlantis DT belongs to.</p>
    </section>

    <section aria-label="Context">
      <h2>Why people search for a Predix alternative at all</h2>
      <p>Predix was launched as an industrial-internet platform of enormous ambition, and GE has since
      refocused it inside GE Vernova around APM for the installed GE fleet. It remains strong exactly
      there — power-generation fleets with deep GE equipment coverage. The searches happen because teams
      outside that centre of gravity — refining, midstream, chemicals, discrete plant — find themselves
      evaluating a platform whose roadmap is now anchored to someone else's equipment.</p>
    </section>

    <section aria-label="The field">
      <h2>The alternatives, matched to the job</h2>
      <p><strong>Cognite Data Fusion</strong> — the strongest pure data-platform alternative:
      contextualises OT/IT/engineering data at scale, with a genuine developer ecosystem. It is
      infrastructure, though — you build or buy the applications on top.
      ${L('/compare/atlantis-dt-vs-cognite-data-fusion', 'Cognite compared in detail')}.</p>
      <p><strong>AVEVA (PI System + Predictive Analytics)</strong> — if your plant already runs PI
      historians, this is the lowest-friction road: the data is already there. Strongest on time-series;
      the twin itself is assembled from several AVEVA products.
      ${L('/compare/atlantis-dt-vs-aveva-pi-system', 'AVEVA compared')}.</p>
      <p><strong>Bentley iTwin</strong> — the engineering-model twin: geometry, reality capture and
      infrastructure-grade change tracking. Outstanding where the asset IS the structure; lighter on
      process-plant condition analytics. ${L('/compare/atlantis-dt-vs-bentley-itwin', 'Bentley compared')}.</p>
      <p><strong>Siemens (MindSphere/Insights Hub)</strong> — deepest where Siemens automation already
      runs the plant. ${L('/compare/atlantis-dt-vs-siemens-mindsphere', 'Siemens compared')}.</p>
      <p><strong>PTC ThingWorx</strong> — rapid IoT application building with strong AR; a platform for
      makers of connected products more than for owner-operators.
      ${L('/compare/atlantis-dt-vs-ptc-thingworx', 'ThingWorx compared')}.</p>
      <p><strong>Azure Digital Twins</strong> — a developer service, not a product: you get DTDL
      modelling primitives and build everything else.
      ${L('/compare/atlantis-dt-vs-microsoft-azure-digital-twins', 'Azure DT compared')}.</p>
      <p><strong>NDT-data-native platforms (Atlantis DT)</strong> — a different premise from all of the
      above: the twin is built on inspection evidence — wall thickness, corrosion mapping, weld records,
      fitness-for-service state — rather than sensor telemetry. For fixed-equipment integrity, that is
      the data that actually predicts failure; sensors on a vessel shell tell you far less than its
      thickness-survey history. ${L('/digital-twins', 'How the Atlantis platform approaches it')} and
      ${L('/digital-twin-roi-calculator', 'the ROI calculator')} — both open about what the approach
      does not try to do (rotating-fleet vibration analytics is APM territory; Cognite and AVEVA are
      better there).</p>
    </section>

    <section aria-label="How to choose">
      <h2>Choosing without regretting it</h2>
      <p>Write the failure you are trying to prevent, then work backwards to the data that predicts it.
      If it is rotating-equipment degradation, the sensor-analytics platforms above are the field. If it
      is fixed-equipment integrity — vessels, piping, tanks, exchangers — the predictive data is
      inspection history, and the honest comparison is between the engineering-model twins and the
      NDT-data-native class. Costing the decision is the second step:
      ${L('/digital-twin-roi-calculator', 'estimate the ROI')} with your own asset counts before any
      vendor conversation, and read ${L('/blog/ai-in-digital-twins-for-asset-integrity', 'what AI in a twin can and cannot predict')}
      before believing anyone's autonomy claims.</p>
    </section>
  </article>`;
}

export function predixAlternativesRoute() {
  return {
    path: '/compare/ge-predix-alternatives',
    title: `${T} | Atlantis NDT`,
    description: D,
    canonical: 'https://atlantisndt.com/compare/ge-predix-alternatives',
    bodyContent: altBody(),
  };
}

/* ── Append blocks ─────────────────────────────────────────────────────────── */

const BLOCKS = [
  {
    // The vs-page currently absorbing "alternatives" intent hands it over.
    path: '/compare/atlantis-dt-vs-ge-predix',
    heading: 'Looking for the whole alternatives field, not one comparison?',
    body: `This page weighs one alternative in depth. If your search was "Predix alternatives" — the full field, matched to the job each platform is actually good at — that is ${L('/compare/ge-predix-alternatives', 'GE Predix alternatives compared')}, which covers Cognite, AVEVA, Bentley, Siemens, PTC, Azure DT and the NDT-data-native class side by side.`,
  },
  {
    // "asset integrity digital twin" 26i p68 on /digital-twins, unanswered.
    path: '/digital-twins',
    heading: 'What is an asset integrity digital twin?',
    body: `An asset integrity digital twin is a living model of fixed equipment — vessels, piping, tanks, exchangers — whose state is fed by inspection evidence: thickness surveys, corrosion mapping, weld and repair records, fitness-for-service assessments. It differs from a sensor-fed APM twin in what it predicts: sensor telemetry tracks how equipment is running, while inspection history tracks how it is degrading — and for fixed equipment, degradation is what ends life. That evidence chain is exactly what Atlantis DT is built on; ${L('/digital-twin-roi-calculator', 'the ROI calculator')} turns it into a business case, and ${L('/compare/ge-predix-alternatives', 'the platform-alternatives map')} shows where this class sits against the APM vendors.`,
  },
  {
    // ROI calculator earns question-shaped queries at p8.8–11.5; no methodology.
    path: '/digital-twin-roi-calculator',
    heading: 'How the estimate is built — assumptions stated',
    body: `The calculator estimates value from three effects, and states its assumptions so the output is an estimate you can defend rather than a number you must trust. First, inspection-planning efficiency: a twin that holds current condition state reduces re-collection and re-verification work at every campaign. Second, deferral quality: decisions made on complete evidence extend runs that conservative assumptions would have cut short. Third, audit and turnaround preparation time, because the evidence pack already exists. What it deliberately does NOT model: production-uplift claims and failure-avoidance windfalls — both real but too asset-specific to estimate honestly from generic inputs. Treat the output as the conservative floor for ${L('/blog/ai-in-digital-twins-for-asset-integrity', 'a business case grounded in what twins actually predict')}, not a vendor promise.`,
  },
];

export function applyDtPhase(routes, append) {
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

/* ── Guards ────────────────────────────────────────────────────────────────── */

export function assertNoPricesInDtPhase() {
  const blob = altBody() + JSON.stringify(BLOCKS);
  const hits = blob.match(/[$£€₹]\s?\d|per (asset|site|month|year|user)\b.{0,12}\d|\/yr\b/gi);
  if (hits) throw new Error(`dt phase copy contains pricing: ${[...new Set(hits)].join(', ')}`);
}

export function assertDtPhaseTargets(routes) {
  const paths = new Set(routes.map((r) => r.path));
  const need = new Set();
  for (const m of altBody().matchAll(/href="(\/[^"#?]*)"/g)) need.add(m[1]);
  for (const b of BLOCKS) {
    need.add(b.path);
    for (const m of b.body.matchAll(/href="(\/[^"#?]*)"/g)) need.add(m[1]);
  }
  const missing = [...need].filter((p) => !paths.has(p));
  if (missing.length) throw new Error(`dt phase targets missing: ${missing.join(', ')}`);
}
