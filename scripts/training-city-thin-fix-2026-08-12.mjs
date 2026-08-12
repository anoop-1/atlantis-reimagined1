/**
 * Thin US training-city upgrade + near-me hub fix — 2026-08-12.
 * ─────────────────────────────────────────────────────────────────────────────
 * AUDIT FINDING (dist + GSC 90d)
 * 51 US /ndt-training-{city} pages. 39 earn ZERO impressions. **19 sit under
 * 900 words and every one of those earns nothing** — they are the 2026-08-11
 * additions plus older stubs that never received per-city research.
 *
 * §26.1 is the governing evidence: city pages with real research earn ~22x what
 * name-swapped templates earn. So these get genuine market facts — the actual
 * employers, the actual codes that govern work there, and what a technician in
 * that market is examining — not more generic training prose.
 *
 * ALSO FIXED: `/ndt-training-near-me` was **535 words** while being the intended
 * answer for a 484-impression proximity cluster sitting at positions 42–87. The
 * cluster is unwinnable in the local pack (§34.1 — no GBP possible), but the
 * organic result below the pack is winnable and a 535-word page will not win it.
 *
 * Honesty rule (§24.2): no claimed classroom, address or local presence
 * anywhere. Delivery is on-site at the customer facility, stated plainly.
 * No pricing (§18).
 */

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Per-market research. Each entry: what the market runs on, who employs
   inspection there, and which methods/codes the work actually demands. */
export const THIN_CITIES = {
  aiken: {
    name: 'Aiken', state: 'South Carolina',
    base: 'Aiken exists in inspection terms because of the Savannah River Site next door — a Department of Energy complex employing thousands, where nuclear materials processing, waste vitrification and decommissioning all generate examination work under a regime stricter than anything in commercial industry.',
    work: 'Site work runs to nuclear quality-assurance requirements: procedures qualified and controlled, personnel qualified to the site programme as well as to SNT-TC-1A, and documentation standards where an unsigned line is a reportable event. Contractors supporting the complex need technicians who can work inside that discipline.',
    methods: 'UT on process piping and vessels, PT on stainless and alloy systems throughout, MT where ferromagnetic structures allow it, and RT under tightly controlled conditions.',
  },
  baltimore: {
    name: 'Baltimore', state: 'Maryland',
    base: 'Baltimore is a working port and industrial city: one of the East Coast\'s major container and roll-on terminals, ship repair on the harbour, steel processing at Sparrows Point\'s successor operations, and the bridge and tunnel infrastructure of a dense Mid-Atlantic corridor.',
    work: 'Port equipment carries statutory examination cycles — container cranes, cargo gear, lifting equipment — while ship repair brings class-society survey work, and the region\'s infrastructure adds structural inspection with fatigue as the dominant concern.',
    methods: 'UT thickness on hulls and structures, MT on crane and lifting components, VT to structural acceptance, with PT on the non-magnetic scope.',
  },
  'bath-maine': {
    name: 'Bath', state: 'Maine',
    base: 'Bath is a shipbuilding town in the literal sense: Bath Iron Works builds destroyers for the US Navy on the Kennebec, and the yard is the region\'s industrial economy.',
    work: 'Naval shipbuilding runs under NAVSEA technical requirements — a regime with its own procedure qualification, personnel approval and documentation expectations layered over commercial NDT practice. Weld examination volume is high and acceptance criteria are unforgiving.',
    methods: 'UT and RT on hull and structural welds, MT on fatigue-critical details, PT on the non-magnetic and machined scope, VT throughout as the first examination.',
  },
  'deer-park': {
    name: 'Deer Park', state: 'Texas',
    base: 'Deer Park sits inside the Houston Ship Channel\'s chemical crescent — refinery and chemical operations shoulder to shoulder, with inspection contractors effectively embedded in the plants they serve.',
    work: 'The rhythm is resident contracts punctuated by turnarounds: exchanger and tube campaigns, small-bore piping programmes, and the constant corrosion-under-insulation work that channel-side plants generate in a humid coastal climate.',
    methods: 'UT thickness and corrosion mapping as the backbone, eddy current on exchanger bundles, PT on the alloy and stainless circuits, MT on ferromagnetic weldments, RT on repair welds.',
  },
  'east-hartford': {
    name: 'East Hartford', state: 'Connecticut',
    base: 'East Hartford is aero-engine country: Pratt & Whitney is headquartered here, with Sikorsky and Collins Aerospace across the region, forming one of the densest aerospace manufacturing clusters in the United States.',
    work: 'Aerospace NDT runs under NAS 410 or EN 4179 personnel requirements with Nadcap special-process audits — a fundamentally different regime from industrial work, where the training records are audited as hard as the technique and the employer holds approval through a Responsible Level III.',
    methods: 'Fluorescent penetrant inspection above all, eddy current on engine components, UT for composites and forgings, with RT on castings.',
  },
  'fort-worth': {
    name: 'Fort Worth', state: 'Texas',
    base: 'Fort Worth builds fighters and moves freight: the defence aviation plant on the west side anchors an aerospace supplier web, a major rail hub runs through the city, and Barnett Shale midstream infrastructure remains across the region.',
    work: 'Defence-aerospace examination is the anchor — NAS 410 personnel requirements, OEM approvals per method, and audit-grade records — with rail, fabrication and gas-infrastructure work providing a second, quite different stream under SNT-TC-1A.',
    methods: 'Penetrant and eddy current on aerospace components, UT on structures and rail, MT at overhaul, RT where castings and welds demand it.',
  },
  groton: {
    name: 'Groton', state: 'Connecticut',
    base: 'Groton builds submarines. Electric Boat\'s yard on the Thames is the region\'s industrial centre, and the naval submarine base sits across the river.',
    work: 'Submarine construction carries the most demanding weld-examination regime in shipbuilding — pressure-hull work under naval technical requirements, with procedure qualification, personnel approval and record-keeping standards well beyond commercial practice.',
    methods: 'UT and RT on hull and pressure-boundary welds, MT and PT on the surface scope, with VT discipline throughout.',
  },
  indianapolis: {
    name: 'Indianapolis', state: 'Indiana',
    base: 'Indianapolis carries a diversified industrial base: aerospace engine manufacture and MRO, pharmaceutical process plant, automotive and heavy-vehicle suppliers, and the logistics infrastructure of a national distribution hub.',
    work: 'Aerospace work runs the NAS 410 regime; process and manufacturing work runs SNT-TC-1A under ASME and AWS codes. Technicians who can move between the two are unusually employable here.',
    methods: 'Penetrant and eddy current on aerospace components, UT and RT on pressure equipment and fabrication, MT on structures and lifting gear.',
  },
  jacksonville: {
    name: 'Jacksonville', state: 'Florida',
    base: 'Jacksonville combines three shipyards, a major naval station at Mayport, port terminals on the St. Johns, and a rail hub — a marine-industrial market with steady military and commercial repair demand.',
    work: 'Ship repair spans naval and commercial regimes with different qualification requirements; port equipment carries statutory examination cycles; and the logistics base adds structural and rail scopes.',
    methods: 'UT thickness gauging at survey scale, MT on fatigue details and lifting gear, PT on aluminium and stainless systems, VT as the survey backbone.',
  },
  norfolk: {
    name: 'Norfolk', state: 'Virginia',
    base: 'Hampton Roads is the largest naval complex in the world alongside one of the East Coast\'s deepest commercial ports — shipbuilding, ship repair, coal export and container terminals sharing one harbour.',
    work: 'Naval and commercial ship repair run under NAVSEA and classification-society regimes respectively, each with its own personnel and procedure requirements. Port equipment surveys and the shipyard fabrication supporting both fill the rest of the calendar.',
    methods: 'UT on hull structure and thickness, MT on fatigue-critical welds and cargo gear, PT on non-magnetic systems, RT in the yards.',
  },
  'north-charleston': {
    name: 'North Charleston', state: 'South Carolina',
    base: 'North Charleston builds 787s. Boeing\'s South Carolina final assembly and fuselage operations anchor an aerospace cluster, with the port and a growing manufacturing base alongside.',
    work: 'Composite structure dominates the aerospace inspection scope here — a different problem from metallic airframes, requiring ultrasonic techniques tuned to bond lines and delamination rather than crack detection, under NAS 410 personnel rules and Nadcap audit.',
    methods: 'UT for composite bond and delamination inspection above all, thermography as a complementary technique, penetrant and eddy current on metallic components.',
  },
  orlando: {
    name: 'Orlando', state: 'Florida',
    base: 'Orlando\'s industrial base is less visible than its tourism economy but real: gas turbine manufacture and service, simulation and defence electronics, power generation across central Florida, and a construction market running continuously.',
    work: 'Turbine component manufacture and overhaul generate demanding examination work — blades, discs and casings where a missed indication has consequences — alongside power-plant outage support and construction QA.',
    methods: 'Penetrant and eddy current on turbine components, UT on rotors and castings, MT at overhaul, VT and UT on construction structural steel.',
  },
  'pasadena-texas': {
    name: 'Pasadena', state: 'Texas',
    base: 'Pasadena sits at the heart of the Houston Ship Channel industrial corridor — refining, chemical manufacture and terminal operations packed along the waterway, with inspection demand as dense as anywhere in North America.',
    work: 'Continuous plant contracts punctuated by turnaround surges, with API-driven vessel, piping and tank programmes as the backbone and advanced techniques as the differentiator between contractors.',
    methods: 'UT thickness and corrosion mapping, PAUT on welds, eddy current on exchanger tubing, PT on alloy circuits, MT on ferromagnetic weldments.',
  },
  pascagoula: {
    name: 'Pascagoula', state: 'Mississippi',
    base: 'Pascagoula is a shipbuilding and refining town: Ingalls Shipbuilding is the largest employer in Mississippi, and a major refinery and LNG facility sit alongside on the Gulf.',
    work: 'Naval shipbuilding runs its own technical regime with high weld-examination volume, while the refinery and gas facilities run API-driven programmes on turnaround cycles — two quite different disciplines in one small market.',
    methods: 'UT and RT on hull and pressure-boundary welds, MT on structural and fatigue details, PT on stainless and aluminium, UT thickness on refinery circuits.',
  },
  portland: {
    name: 'Portland', state: 'Oregon',
    base: 'Portland works steel and ships: a steel mill in the north of the city, ship repair on Swan Island, heavy fabricators across the industrial districts, and the Columbia River\'s dams, ports and rail infrastructure within service range.',
    work: 'Shipyard examination, mill and fabricator shop work to AWS and ASME, hydro and dam examination on the river system, and terminal work along both rivers — a market that rewards multi-code versatility over specialisation.',
    methods: 'UT on structures and plate, MT on weldments and lifting equipment, RT in the fabrication shops, VT to structural acceptance, PT on the non-magnetic scope.',
  },
  'salt-lake-city': {
    name: 'Salt Lake City', state: 'Utah',
    base: 'Salt Lake City has a compact refining row along the interstate north of downtown, the copper operations west of the valley, aerospace composites manufacture, and a distribution-hub industrial base.',
    work: 'Refinery API programmes anchor the market; mining plant maintenance, composite-structure examination for the aerospace suppliers, and general industrial work diversify it across quite different code families.',
    methods: 'UT thickness and weld examination on refinery circuits, MT on mining and lifting equipment, UT for composites, PT on alloy systems.',
  },
  'san-diego': {
    name: 'San Diego', state: 'California',
    base: 'San Diego is naval and aerospace before anything else: shipbuilding and repair yards on the bay working under NAVSEA requirements, and aerospace and defence manufacturers across the county running NAS 410 programmes.',
    work: 'The market rewards a technician who can move between military-adjacent documentation discipline and commercial code work — the yards and the aerospace shops have different regimes, and the region\'s biotech process equipment and utility fleet add a third.',
    methods: 'UT and MT on ship structure and repair welds, penetrant and eddy current on aerospace components, RT in the yards, VT throughout.',
  },
  savannah: {
    name: 'Savannah', state: 'Georgia',
    base: 'Savannah\'s container port has grown into one of the busiest in the country, alongside Gulfstream\'s aircraft manufacture, paper mills, and construction-equipment plants across the coastal plain.',
    work: 'Port crane and equipment examination runs on statutory cycles; business-jet manufacture brings aerospace personnel requirements; and the manufacturing base adds plant and shop examination under industrial codes.',
    methods: 'MT and VT on cranes and lifting equipment, penetrant and eddy current on aerospace components, UT on structures and pressure equipment.',
  },
  tampa: {
    name: 'Tampa', state: 'Florida',
    base: 'Tampa Bay is Florida\'s industrial port: phosphate and fertiliser terminals, shipyards, power stations around the bay, and a construction market that never cools.',
    work: 'Terminal and tank examination for the phosphate and fuel trades, ship repair at the yards, power-plant outage support on seasonal cycles, and construction QA across a fast-growing metro.',
    methods: 'UT thickness on tanks and terminal piping, MT on structures and cranes, eddy current on condenser tubing, VT and UT on construction steel.',
  },
};

function cityBlock(slug, c) {
  return `
    <section aria-label="NDT training in ${esc(c.name)} in detail">
      <h2>Why NDT training demand exists in ${esc(c.name)}</h2>
      <p>${esc(c.base)}</p>
      <p>${esc(c.work)}</p>

      <h2>Which methods matter most here</h2>
      <p>${esc(c.methods)} A candidate certifying against what ${esc(c.name)} employers actually examine becomes employable considerably sooner than one spreading thinly across every method.</p>

      <h2>The levels, and what each one means to an employer</h2>
      <p><strong>Level I</strong> performs calibrations and examinations under supervision — the entry point, usually in one method first. <strong>Level II</strong> sets up the technique, interprets against the code and signs the report; this is the level contracts in ${esc(c.name)} actually specify. <strong>Level III</strong> writes and approves procedures and qualifies the Level I and II personnel — the authority a growing inspection function must either employ or engage. Progression requires training hours <em>and</em> documented experience hours, so someone already working under supervision advances faster than a cold start.</p>
      <p>Method-specific routes: <a href="/ultrasonic-testing-training">UT training</a> · <a href="/radiographic-testing-training">RT</a> · <a href="/magnetic-particle-testing-training">MT</a> · <a href="/penetrant-testing-training">PT</a> · <a href="/visual-testing-training">VT</a> · <a href="/eddy-current-testing-training">ET</a>. Level routes: <a href="/ndt-level-1-training">Level I</a> · <a href="/ndt-level-2-training">Level II</a> · <a href="/asnt-level-iii-training">Level III</a>.</p>

      <h2>How Atlantis delivers training for ${esc(c.name)}</h2>
      <p>We are direct about the model: Atlantis does not operate a walk-in training centre in ${esc(c.name)}. Corporate programmes are delivered <strong>on-site at your facility</strong> — usually the better arrangement anyway, because the practical specimens can match the equipment your people actually examine rather than generic training coupons. Individuals are served through scheduled cohorts or blended delivery combining online theory with supervised practical work. Tell us headcount, methods and timing and we will say plainly which route fits, including when a local provider is the honest answer for a single candidate.</p>
    </section>`;
}

/* Near-me hub — 535 words answering a 484-impression cluster. */
const NEAR_ME = `
    <section aria-label="How NDT training near you actually works">
      <h2>What "NDT training near me" really has to solve</h2>
      <p>The search splits into two quite different people. One is a <strong>company</strong> that needs a crew qualified without losing them to a week of travel. The other is an <strong>individual</strong> looking for the shortest route to a certificate they can work with. Most training directories answer neither properly, because both are really asking about logistics, not geography.</p>

      <h2>If you are an employer: proximity is a delivery question</h2>
      <p>The reason travel-based training is expensive is not the travel — it is the productive time lost while several technicians are somewhere else at once. On-site delivery removes that entirely: the programme comes to the facility, runs around your shift pattern, and the practical work uses specimens representative of the equipment your people actually examine. That last point is the one employers underrate. A technician trained on generic coupons and a technician trained on the geometry and material they will meet on Monday arrive at competence at very different speeds.</p>
      <p>The practical consequence: for a crew, "near me" should not narrow your options at all. The right question is whether the provider will deliver at your site and whether their programme satisfies your Written Practice. <a href="/blog/snt-tc-1a-employer-programme-us-guide">What that programme has to contain</a>.</p>

      <h2>If you are an individual: the route matters more than the postcode</h2>
      <p>For a single candidate, geography does matter more — but less than most people assume, because the structure of NDT certification is not classroom-bound. Theory can be delivered online and studied around shift work. What genuinely requires physical presence is the <strong>supervised practical work and the practical examination</strong>, which is a smaller share of the hours than candidates expect.</p>
      <p>The bigger constraint is one nobody advertises: under ASNT SNT-TC-1A, certification is issued by an <em>employer</em>, not by a school. A course alone does not certify you. Training providers supply the training hours and the preparation; the certification comes from an employer's Written Practice, administered under a Level III's authority. Candidates who understand this early choose differently — they look for employment that offers a certification pathway rather than a course that promises a certificate. <a href="/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison">Where ISO 9712 differs</a>, and why that route is more portable.</p>

      <h2>What to ask any training provider, wherever they are</h2>
      <p>Which methods and levels does the programme cover, and who teaches it — a practising Level III or a career instructor? How much of the time is genuine supervised practical, and on what specimens? Does the programme map to my employer's Written Practice hour requirements, and will you put that in writing? What happens if I fail the practical? A provider who answers these clearly is worth travelling to; one who does not is not worth walking to.</p>

      <h2>Where Atlantis actually operates</h2>
      <p>We are straightforward about this because it affects your decision: <strong>Atlantis does not run walk-in training centres</strong>. Corporate programmes are delivered on-site anywhere in the United States and Canada; individuals are served through scheduled cohorts and blended delivery. Where a local provider is genuinely the better answer for one candidate, we will tell you so.</p>
      <p>Start with the method you need — <a href="/ultrasonic-testing-training">UT</a>, <a href="/radiographic-testing-training">RT</a>, <a href="/magnetic-particle-testing-training">MT</a>, <a href="/penetrant-testing-training">PT</a>, <a href="/visual-testing-training">VT</a> or <a href="/eddy-current-testing-training">ET</a> — or the level: <a href="/ndt-level-1-training">Level I</a>, <a href="/ndt-level-2-training">Level II</a>, <a href="/asnt-level-iii-training">Level III</a>. Then <a href="/contact?service=training">tell us your location, headcount and timing</a>.</p>
    </section>`;

export function applyTrainingCityThinFix(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let cities = 0, nearMe = 0;
  for (const [slug, c] of Object.entries(THIN_CITIES)) {
    const r = byPath.get(`/ndt-training-${slug}`);
    if (!r) continue;
    append(r, cityBlock(slug, c));
    cities++;
  }
  const nm = byPath.get('/ndt-training-near-me');
  if (nm) { append(nm, NEAR_ME); nearMe++; }
  return { cities, nearMe };
}

export function assertNoPricesInThinFix() {
  const blob = JSON.stringify(THIN_CITIES) + NEAR_ME;
  const m = blob.match(/[$£€₹]\s?\d|per day|per hour|\/yr\b/gi);
  if (m) throw new Error(`training thin-fix contains pricing: ${[...new Set(m)].join(', ')}`);
}
