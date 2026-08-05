/**
 * International training-city depth — 2026-08-05.
 * ─────────────────────────────────────────────────────────────────────────────
 * training-city-depth.mjs (2026-08-04) localised 29 US cities. The demand data
 * says the biggest training-city pages are NOT American:
 *
 *   /ndt-training-dubai         1,435i  45c   ← largest on the site
 *   /ndt-training-abu-dhabi       171i  20c   ← highest CTR in the family
 *   /ndt-training-saudi-arabia    130i   5c
 *   /ndt-training-south-korea      60i   3c
 *   /ndt-training-kuwait           31i   2c
 *
 * Rather than author a second city map, this REUSES the 40-market industrial
 * knowledge in method-city-depth.mjs (CITIES) and composes TRAINING-specific
 * sections from it: what the local industry examines decides which methods a
 * candidate should train first, and the local certification regime decides
 * which scheme to train toward. That is the information a candidate or training
 * manager in that market actually needs, and none of it is a template swap —
 * the industries, schemes and employers differ per market.
 *
 * HONESTY RULE unchanged: no claimed training centre anywhere Atlantis has
 * none. Delivery is stated as it is — on-site corporate programmes, scheduled
 * cohorts, and blended online theory with supervised practical.
 * No prices anywhere (CLAUDE.md §18).
 */
import { CITIES } from './method-city-depth.mjs';
import { TRAINING_CITY_SLUGS } from './training-city-depth.mjs';

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* Which methods each industry pulls hardest on, for training-priority advice. */
const INDUSTRY_METHODS = {
  refining: 'UT thickness and corrosion monitoring, phased array on welds, and API-track inspection knowledge',
  petrochemical: 'UT, RT for construction and revamp welds, and eddy current for exchanger campaigns',
  lng: 'UT on cryogenic alloys, RT to demanding acceptance criteria, and PT for the stainless and nickel systems',
  offshore: 'UT structural and topside work, MT for fatigue-driven weld examination, and eddy current/ACFM through coatings',
  pipeline: 'RT to API 1104, AUT/PAUT for girth welds, and MT at dig sites',
  marine: 'UT thickness gauging at survey scale, MT on fatigue details, and visual survey discipline',
  aviation: 'eddy current above all, PT on components, and UT for composites — under NAS 410 / EN 4179 rules',
  power: 'UT including phased array on rotors and headers, MT during outages, and eddy current on condenser tubing',
  mining: 'UT on structures and wear components, MT on ground-engaging and lifting equipment',
  fabrication: 'VT to CWI-style acceptance first, then UT and RT for coded work',
  automotive: 'MT and PT at production takt, with eddy current inline',
  steel: 'UT on plate and mill components, MT on rolls and lifting gear, eddy current at line speed',
  rail: 'UT for rail and axle examination, MT at overhaul, eddy current for rolling-contact fatigue',
};

function buildBlock(slug, c) {
  const methodAdvice = c.industries
    .slice(0, 3)
    .map((ind) => INDUSTRY_METHODS[ind])
    .filter(Boolean);

  return `
    <section aria-label="NDT training in ${esc(c.name)} in detail">
      <h2>What drives NDT training demand in ${esc(c.name)}</h2>
      <p>${esc(c.base)} Every one of those assets is examined on intervals set by code, and the examinations must be performed by certified personnel — which is what creates continuous local demand for qualified technicians, and continuous pressure on employers to develop them.</p>

      <h2>Which methods to train first in this market</h2>
      <p>Training investment should follow the local work. In ${esc(c.name)} that means ${methodAdvice[0]}${methodAdvice[1] ? `; in the ${esc(c.industries[1])} sector, ${methodAdvice[1]}` : ''}${methodAdvice[2] ? `; and where ${esc(c.industries[2])} work features, ${methodAdvice[2]}` : ''}. A candidate who certifies against what local employers actually examine is employable months sooner than one who spreads across every method thinly.</p>

      <h2>Which certification scheme employers here expect</h2>
      <p>${esc(c.scheme)}</p>
      <p>For a candidate this decides the route before any course is booked: train toward the scheme your target employers name in their contracts. Where both employer-based (SNT-TC-1A) and central (ISO 9712 / PCN) certification circulate, the central certificate travels with you between employers — worth weighing against the faster employer-based route. <a href="/asnt-certification">How ASNT certification works</a> · <a href="/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison">ISO 9712 vs SNT-TC-1A</a>.</p>

      <h2>Levels, honestly explained</h2>
      <p><strong>Level I</strong> performs calibrations and examinations under supervision — the entry point, usually reached in one method first. <strong>Level II</strong> sets up, interprets against the code and signs the report; it is the level contracts in ${esc(c.name)} actually specify. <strong>Level III</strong> writes and approves procedures and qualifies the Level I/IIs — the level a growing inspection function eventually needs to own or engage. Progression is training hours <em>plus</em> documented experience hours, so anyone already working under supervision moves faster than a cold start.</p>

      <h2>How Atlantis delivers training for ${esc(c.name)}</h2>
      <p>We are straightforward about the model: Atlantis does not run a walk-in training centre in ${esc(c.name)}. Corporate programmes are delivered <strong>on-site at your facility</strong> — usually the better arrangement for a team, since practical specimens can match the ${esc(c.assets.split(',')[0].trim())} your people will actually examine — and individuals are served through scheduled cohorts or blended delivery with online theory and supervised practical. Tell us headcount and timeline and we will say plainly which route fits, including when a local provider is honestly the better answer for a single candidate.</p>

      <h2>Frequently asked questions</h2>
      <h3>Can our company get a whole crew certified in ${esc(c.name)}?</h3>
      <p>Yes — that is the core corporate model: theory and practical delivered at your site around your shift pattern, examinations administered under a compliant Written Practice, and the certification records handed over in a form that survives an audit. Multi-method programmes are sequenced so the crew keeps working while it qualifies.</p>
      <h3>Do you prepare candidates for the schemes named in local contracts?</h3>
      <p>We train toward ASNT SNT-TC-1A and ISO 9712 pathways and prepare candidates for the certification examinations local operators specify. Where a market runs its own approval gates on top — operator qualification registers, national schemes — we tell you exactly which parts we cover and which the certifying body controls.</p>

      <p>Next: <a href="/training">all NDT training and certification</a> · <a href="/consulting/ndt-consulting-level-iii">outsourced ASNT Level III</a> · <a href="/contact?service=training">ask about a ${esc(c.name)} programme</a>.</p>
    </section>`;
}

/**
 * Applies to /ndt-training-{slug} for mapped markets NOT already covered by the
 * US module (training-city-depth.mjs owns those).
 * @returns count localised
 */
export function applyTrainingCityIntl(routes, append) {
  const us = new Set(TRAINING_CITY_SLUGS);
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let n = 0;
  for (const [slug, c] of Object.entries(CITIES)) {
    if (us.has(slug)) continue;
    const r = byPath.get(`/ndt-training-${slug}`);
    if (!r) continue;
    append(r, buildBlock(slug, c));
    n++;
  }
  return n;
}

export function assertNoPricesInTrainingIntl() {
  const blob = JSON.stringify(INDUSTRY_METHODS);
  const m = blob.match(/[$£€₹]\s?\d|per day|\/day|per hour/gi);
  if (m) throw new Error(`training-city-intl contains pricing: ${[...new Set(m)].join(', ')}`);
}
