/**
 * Method-city gap fix — 2026-08-13.
 * ─────────────────────────────────────────────────────────────────────────────
 * AUDIT FINDING
 * 246 of 264 mapped method-city pages carry their market block. **18 do not —
 * exactly three cities × six methods: charlotte, boston, new-york.** All three
 * ARE in the CITIES map with valid industry keys, and all their routes are
 * declared in App.tsx, so `applyMethodCityDepth` should reach them. It does not.
 * This is almost certainly the §19.1 class — a later prerender entry carrying
 * its own bodyContent overwriting the appended block.
 *
 * Rather than chase the overwrite through the pipeline, this module appends
 * again from a different place and the result is VERIFIED IN dist. If the block
 * lands, the fix is real; if it does not, the overwrite theory is confirmed and
 * the next step is finding the later entry.
 *
 * ALSO: **houston is absent from the CITIES map entirely** — the largest NDT
 * market in North America was never a mapped method-city market. Added here.
 *
 * Demand: charlotte 134i · boston 120i · new-york 59i · houston 33i = 346i
 * across 24 pages.
 *
 * Per-market, per-method content — no generic method prose (§26.1: researched
 * city pages earn ~22x name-swaps). No pricing (§18).
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const METHOD_NAME = {
  'ultrasonic-testing': ['Ultrasonic testing', 'UT'],
  'radiographic-testing': ['Radiographic testing', 'RT'],
  'magnetic-particle-testing': ['Magnetic particle testing', 'MT'],
  'penetrant-testing': ['Penetrant testing', 'PT'],
  'visual-testing': ['Visual testing', 'VT'],
  'eddy-current-testing': ['Eddy current testing', 'ET'],
};

/* Per-city market research + what each method is actually used for there. */
export const GAP_CITIES = {
  charlotte: {
    name: 'Charlotte', state: 'North Carolina',
    base: 'Charlotte is a power-industry city. A major utility is headquartered downtown, the nuclear and combined-cycle fleet across the Carolinas is run from here, and an energy-manufacturing supply chain — turbine components, nuclear-grade fabrication — grew up around it. Motorsport engineering and a substantial fabrication base fill out the industrial picture.',
    regime: 'Nuclear work runs under ASME Section XI in-service inspection with site-specific personnel qualification layered over SNT-TC-1A; the conventional generating fleet and the manufacturing supply chain run ASME and AWS acceptance.',
    methods: {
      'ultrasonic-testing': 'UT carries the outage load across the Carolinas fleet — boiler tubing and header examination, rotor and turbine component inspection, and thickness monitoring on feedwater and steam systems. Nuclear scopes add procedure-qualified techniques and, in some cases, performance demonstration before a technician may perform the examination.',
      'radiographic-testing': 'RT appears on new construction and on repair welds in the energy supply chain — turbine casings, nuclear-grade fabrication and pressure-part manufacture — where a permanent image is required before a component ships or a system returns to service.',
      'magnetic-particle-testing': 'MT is the surface method of choice on the ferromagnetic scope: casing welds, structural steel, lifting equipment on outage sites, and fatigue-critical details on rotating equipment during overhaul.',
      'penetrant-testing': 'PT handles what MT cannot — stainless and nickel-alloy systems throughout the generating fleet, turbine blading, and the machined components the manufacturing base produces.',
      'visual-testing': 'VT is the first examination on every outage scope and the discipline that decides where the volumetric work goes: refractory and casing condition, weld profile acceptance to AWS, and internal inspection during entry.',
      'eddy-current-testing': 'ET owns condenser and heat-exchanger tubing across the fleet — bobbin screening across thousands of tubes inside a fixed outage window, with array or rotating probes prosecuting the indications that matter.',
    },
  },
  boston: {
    name: 'Boston', state: 'Massachusetts',
    base: 'Greater Boston pairs an old industrial and maritime base with a modern one: shipyards and port infrastructure on the harbour, power generation around the region, a dense biotech and pharmaceutical process-plant cluster, and aerospace and defence manufacturing along the 128 corridor.',
    regime: 'Marine work answers to classification societies and, at the naval facilities, to military technical requirements; process plant runs ASME with state jurisdictional oversight; aerospace suppliers run NAS 410 or EN 4179 with OEM approval per method.',
    methods: {
      'ultrasonic-testing': 'UT spans three quite different populations here — hull and structural thickness on the marine side, pressure-equipment thickness and weld examination in the process plants, and composite and forging inspection for the aerospace suppliers, each with its own procedure family.',
      'radiographic-testing': 'RT concentrates in fabrication and pharmaceutical process-plant construction, where closure welds on stainless systems must be examined before insulation and validation close the work out.',
      'magnetic-particle-testing': 'MT works the ferromagnetic structural scope: shipyard steel, crane and lifting equipment under statutory examination, and power-plant casing and support welds during outages.',
      'penetrant-testing': 'PT is unusually prominent for a northern industrial market because so much of the local scope is non-ferromagnetic — the stainless of biotech process systems, aluminium in marine superstructure, and aerospace components under fluorescent examination.',
      'visual-testing': 'VT governs survey work on the marine side and construction acceptance in the process plants, where weld profile and surface condition decide whether the volumetric examination is even worth performing.',
      'eddy-current-testing': 'ET serves the aerospace suppliers first — surface crack detection on engine and airframe components — with condenser and exchanger tube inspection across the regional generating and process plant.',
    },
  },
  'new-york': {
    name: 'New York', state: 'New York',
    base: 'New York\'s inspection demand is infrastructure before industry: the bridges, tunnels and transit system of the densest urban region in the country, the port and its terminals, building services and steam distribution beneath the streets, and the power generation feeding all of it.',
    regime: 'Transit and bridge work runs under agency and DOT requirements with AWS acceptance on structural welds; pressure equipment answers to city and state jurisdictional inspection alongside ASME; port equipment carries statutory examination cycles.',
    methods: {
      'ultrasonic-testing': 'UT on structural connections, bridge members and the steam distribution system — thickness on pressurised mains and weld examination where fatigue and age are the governing concerns rather than corrosion alone.',
      'radiographic-testing': 'RT is comparatively constrained in an urban environment: radiation safety in occupied areas restricts when and where it can be performed, so it concentrates on fabrication shops and on scheduled shutdowns rather than routine field work.',
      'magnetic-particle-testing': 'MT dominates the structural scope — bridge and transit steel where fatigue cracking at connections and welds is the failure mode the entire inspection programme exists to catch.',
      'penetrant-testing': 'PT covers the non-magnetic scope: stainless systems in building services and food and pharmaceutical facilities, and aluminium components across the transit fleet.',
      'visual-testing': 'VT carries more weight here than in most markets — bridge and transit inspection is substantially a visual discipline under formal acceptance criteria, with volumetric methods deployed against what the visual examination finds.',
      'eddy-current-testing': 'ET examines condenser tubing in the generating fleet and building chiller plant, and increasingly appears on transit rolling stock for rolling-contact fatigue and axle examination during overhaul.',
    },
  },
  houston: {
    name: 'Houston', state: 'Texas',
    base: 'Houston is the densest NDT services market in North America — the ship channel refineries and chemical complexes from Pasadena to Baytown, the upstream and midstream head offices that buy inspection nationally, and a fabrication belt building pressure vessels and offshore modules.',
    regime: 'API 510, 570 and 653 govern in-service inspection of vessels, piping and tanks; ASME Section V supplies the methods and Section VIII and B31.3 the acceptance; operator contractor-approval gates site access on top of SNT-TC-1A certification.',
    methods: {
      'ultrasonic-testing': 'UT is the backbone of every Houston corrosion programme — thickness at condition monitoring locations across crude, vacuum and coker circuits, phased array on weld examination, corrosion mapping on the areas that matter, and high-temperature techniques where insulation cannot come off.',
      'radiographic-testing': 'RT clears turnaround weld acceptance on piping tie-ins and vessel repairs across the channel, where a permanent image is required before insulation and fireproofing close the work out for another run.',
      'magnetic-particle-testing': 'MT finds surface cracking on refinery and chemical equipment — nozzle welds, skirt attachments and internal surfaces during vessel entry — and matters most in wet H2S service where surface-breaking cracking is a credible mechanism rather than a theoretical one.',
      'penetrant-testing': 'PT carries the non-magnetic work the channel generates in volume: austenitic overlay and cladding checks, stainless and alloy piping welds, and machined components, with high-sensitivity systems on hydrogen-service equipment.',
      'visual-testing': 'VT starts every Houston inspection — external CUI evidence, support and foundation condition, and the internal entry examination that decides what the rest of the turnaround scope becomes.',
      'eddy-current-testing': 'ET runs the exchanger bundles at every major turnaround, screening thousands of non-ferrous tubes inside the shutdown window and prosecuting the indications that decide whether a bundle is retubed or returned to service.',
    },
  },
};

function block(methodKey, slug, c) {
  const [name, short] = METHOD_NAME[methodKey];
  const body = c.methods[methodKey];
  return `
    <section aria-label="${esc(name)} in ${esc(c.name)} — market detail">
      <h2>${esc(name)} in ${esc(c.name)}: what the work actually is</h2>
      <p>${esc(c.base)}</p>
      <p>${esc(body)}</p>

      <h2>What governs acceptance here</h2>
      <p>${esc(c.regime)} An examination that is technically sound but performed outside the governing regime is not an examination anyone will accept — which is why the code family matters as much as the technique in ${esc(c.name)}.</p>

      <h2>How Atlantis delivers ${esc(short)} in ${esc(c.name)}</h2>
      <p>Teams are mobilised to your site under Atlantis procedures with ASNT Level III oversight — we do not claim a depot or laboratory in ${esc(c.name)}, and say so plainly. What you receive is the examination performed to a qualified procedure, findings evaluated against the acceptance criteria your contract names, and records structured to survive a client audit years later. <a href="/contact?service=inspection">Scope a ${esc(short)} examination</a> · <a href="/${methodKey}">${esc(name)} services</a> · <a href="/${methodKey}-training">${esc(short)} training and certification</a>.</p>
    </section>`;
}

export function applyMethodCityGap(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let applied = 0; const missing = [];
  for (const [slug, c] of Object.entries(GAP_CITIES)) {
    for (const methodKey of Object.keys(METHOD_NAME)) {
      const path = `/${methodKey}-${slug}`;
      const r = byPath.get(path);
      if (!r) { missing.push(path); continue; }
      append(r, block(methodKey, slug, c));
      applied++;
    }
  }
  return { applied, missing: missing.length, missingPaths: missing.slice(0, 8) };
}

export function assertNoPricesInMethodCityGap() {
  const blob = JSON.stringify(GAP_CITIES);
  const m = blob.match(/[$£€₹]\s?\d|per day|per hour|\/yr\b/gi);
  if (m) throw new Error(`method-city gap copy contains pricing: ${[...new Set(m)].join(', ')}`);
}
