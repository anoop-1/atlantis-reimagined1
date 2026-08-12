/**
 * Geo interlinking + ERP US visibility — 2026-08-12.
 * ─────────────────────────────────────────────────────────────────────────────
 * MEASURED PROBLEM (GSC 28d to 2026-08-11)
 *
 * 1. City pages are link-islands. A training city page emits 32 unique internal
 *    links but only FOUR to sibling city pages and ONE to the /training hub.
 *    PageRank cannot circulate through the geo tree, so ~400 city pages each
 *    sit on their own with nothing flowing between them.
 *
 * 2. ERP is invisible in the US: 176 impressions, ZERO clicks, 26 queries in 28
 *    days — the single largest being `site:atlantisndt.com` (us auditing us).
 *    Worse, the queries that DO fire land on deep /erp-modules/* leaf pages
 *    rather than the money pages, so nothing accumulates authority.
 *
 * 3. US Training near-me cluster: 484 impressions across five "near me" queries
 *    at positions 42–87, ALL landing on /ndt-training-atlanta — one arbitrary
 *    city page answering a national proximity query. /ndt-training-near-me
 *    exists but is not the page Google chose, because nothing links to it with
 *    that intent.
 *
 * WHAT THIS DOES — three link structures, all additive:
 *   A. Regional sibling clusters. Every training / ERP / consulting city page
 *      gets a "nearby markets" block linking to its true geographic neighbours
 *      (same US region), plus its segment hub and its cross-segment twin. Real
 *      geographic adjacency, not a random link dump.
 *   B. An ERP routing block on every ERP city/module page pointing UP to the
 *      three money pages the head terms should own.
 *   C. A near-me intent block on US training city pages linking to the near-me
 *      hub with proximity-intent anchor text, so Google has an obvious national
 *      answer instead of guessing Atlanta.
 *
 * Rules kept: no pricing (§18); no numerals in ERP copy outside standards
 * (§20.10) — asserted; no fabricated local presence (§24.2).
 */

/* Lead endpoint — every training/ERP journey ends at the Microsoft Form
   (owner directive 2026-08-12; there is no checkout anywhere on the site).
   Mirrors src/lib/enquiry-endpoint.ts so the STATIC prerendered HTML carries
   the CTA too — the React copy only exists in a JS chunk after hydration. */
const MS_FORM = 'https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u';
const formCta = (label) =>
  `<p><a href="${MS_FORM}" rel="noopener noreferrer" target="_blank"><strong>${label}</strong></a> — tell us methods, levels, headcount and timing, and a consultant calls you back prepared.</p>`;

const esc = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── US regional grouping — real adjacency, used for sibling links ────────── */
export const US_REGIONS = {
  'gulf-coast': {
    label: 'the Gulf Coast',
    note: 'refining, petrochemical and LNG work concentrated along the coast, where crews routinely cross state lines for turnarounds',
    cities: ['houston', 'beaumont', 'corpus-christi', 'baton-rouge', 'lake-charles', 'new-orleans', 'mobile', 'texas-city', 'deer-park', 'freeport', 'pasadena-texas', 'pasadena'],
  },
  'permian-midcontinent': {
    label: 'the Permian and mid-continent',
    note: 'basin field work, gas processing and the pipeline systems moving product east and north',
    cities: ['midland', 'odessa', 'tulsa', 'oklahoma-city', 'wichita', 'amarillo', 'lubbock', 'san-antonio', 'dallas', 'fort-worth'],
  },
  'rockies-northern-plains': {
    label: 'the Rockies and northern plains',
    note: 'basin infrastructure, refining and long-distance pipeline corridors across wide service territories',
    cities: ['denver', 'salt-lake-city', 'anchorage', 'casper', 'billings', 'williston', 'bismarck', 'cheyenne', 'boise', 'albuquerque'],
  },
  'great-lakes-midwest': {
    label: 'the Great Lakes and Midwest',
    note: 'integrated steel, automotive manufacturing, refining and heavy fabrication across the industrial belt',
    cities: ['chicago', 'gary', 'detroit', 'cleveland', 'toledo-ohio', 'pittsburgh', 'milwaukee', 'minneapolis', 'st-louis', 'kansas-city', 'indianapolis', 'columbus', 'cincinnati'],
  },
  'southeast': {
    label: 'the Southeast',
    note: 'power generation, aerospace manufacturing, ports and a construction economy growing faster than its inspection workforce',
    cities: ['atlanta', 'charlotte', 'birmingham', 'nashville', 'memphis', 'jacksonville', 'tampa', 'savannah', 'orlando', 'greenville', 'knoxville'],
  },
  'northeast-midatlantic': {
    label: 'the Northeast and mid-Atlantic',
    note: 'refining and terminals on the Delaware, dense port and transit infrastructure, and shipyard work along the coast',
    cities: ['philadelphia', 'newark', 'norfolk', 'baltimore', 'boston', 'buffalo', 'pittsburgh', 'richmond', 'new-york'],
  },
  'west-coast': {
    label: 'the West Coast',
    note: 'West Coast refining under the tightest regulatory scrutiny in the country, port complexes, aerospace and shipyards',
    cities: ['los-angeles', 'long-beach', 'bakersfield', 'martinez', 'seattle', 'portland', 'san-francisco', 'san-diego', 'sacramento', 'anchorage'],
  },
  'southwest': {
    label: 'the Southwest',
    note: 'semiconductor and data-centre construction, power generation and an aerospace supplier base',
    cities: ['phoenix', 'tucson', 'albuquerque', 'las-vegas', 'el-paso'],
  },
};

const CANADA = {
  label: 'Canada',
  note: 'oil sands, refining and pipeline infrastructure under provincial pressure-equipment regimes (ABSA, TSSA and their provincial equivalents)',
  cities: ['calgary', 'edmonton', 'fort-mcmurray', 'sarnia', 'saint-john', 'toronto', 'montreal', 'vancouver', 'winnipeg', 'regina', 'saskatoon', 'hamilton'],
};

const pretty = (slug) => slug.split('-').map((w) => (w === 'st' ? 'St.' : w[0].toUpperCase() + w.slice(1))).join(' ')
  .replace('Toledo Ohio', 'Toledo').replace('Fort Mcmurray', 'Fort McMurray');

/* slug -> region key */
const REGION_OF = new Map();
for (const [k, r] of Object.entries(US_REGIONS)) for (const c of r.cities) if (!REGION_OF.has(c)) REGION_OF.set(c, k);
for (const c of CANADA.cities) if (!REGION_OF.has(c)) REGION_OF.set(c, 'canada');
const REGION_DATA = { ...US_REGIONS, canada: CANADA };

/* ── A. sibling / hub block per segment ──────────────────────────────────── */
const SEGMENTS = {
  training: {
    prefix: '/ndt-training-',
    hub: { href: '/training', label: 'all NDT training and certification programmes' },
    twin: (slug) => ({ href: `/ndt-erp-${slug}`, label: 'inspection management software for companies in' }),
    intro: (city, region) =>
      `Atlantis trains crews across ${esc(region.label)} — ${esc(region.note)}. Programmes are delivered on-site at your facility, so a team in ${esc(city)} is served the same way as one in the neighbouring markets below.`,
    siblingLead: 'NDT training in nearby markets',
  },
  erp: {
    prefix: '/ndt-erp-',
    hub: { href: '/ndt-erp-solution', label: 'the ERP built for NDT inspection companies' },
    twin: (slug) => ({ href: `/ndt-training-${slug}`, label: 'NDT training and certification in' }),
    intro: (city, region) =>
      `Inspection companies across ${esc(region.label)} run on the same operational spine — ${esc(region.note)}. What differs between ${esc(city)} and the markets below is the client mix, not the system.`,
    siblingLead: 'Inspection company software in nearby markets',
  },
  consulting: {
    prefix: '/consulting/ndt-consulting-',
    hub: { href: '/consulting', label: 'the full NDT consulting practice' },
    twin: (slug) => ({ href: `/ndt-training-${slug}`, label: 'NDT training and certification in' }),
    intro: (city, region) =>
      `Consulting engagements across ${esc(region.label)} share a pattern — ${esc(region.note)}. Documentation work runs remotely; site presence is mobilised where it genuinely matters.`,
    siblingLead: 'NDT consulting in nearby markets',
  },
};

function siblingBlock(segKey, slug, existingPaths) {
  const seg = SEGMENTS[segKey];
  const regionKey = REGION_OF.get(slug);
  if (!regionKey) return null;
  const region = REGION_DATA[regionKey];
  const city = pretty(slug);

  const siblings = region.cities
    .filter((c) => c !== slug)
    .map((c) => ({ slug: c, path: `${seg.prefix}${c}` }))
    .filter((c) => existingPaths.has(c.path))
    .slice(0, 8);
  if (siblings.length < 2) return null;

  const twin = seg.twin(slug);
  const twinLink = existingPaths.has(twin.href)
    ? ` <a href="${twin.href}">${twin.label} ${esc(city)}</a>.`
    : '';

  return `
    <nav aria-label="${esc(seg.siblingLead)} near ${esc(city)}">
      <h2>${esc(seg.siblingLead)}</h2>
      <p>${seg.intro(city, region)}</p>
      <p>${siblings.map((s) => `<a href="${s.path}">${esc(pretty(s.slug))}</a>`).join(' · ')}</p>
      <p>Also for ${esc(city)}: <a href="${seg.hub.href}">${esc(seg.hub.label)}</a>.${twinLink}</p>
    </nav>`;
}

/* ── B. ERP routing block — push authority UP to the money pages ─────────── */
const ERP_ROUTING = `
    <nav aria-label="Where to go next for inspection company software">
      <h2>Compare the platform before you shortlist</h2>
      <p>Most companies arrive at a city page and actually want one of three things. If you are evaluating systems, start with <a href="/ndt-inspection-software">NDT inspection software — what inspection companies actually need</a>. If report turnaround is the pain, go to <a href="/best-ndt-reporting-software-2026">NDT reporting software compared</a>. If the question is whether a generic system could work, read <a href="/ndt-erp-vs-generic-erp">why generic ERP breaks on inspection work</a> and the <a href="/erp/odoo-vs-netsuite-ndt-companies">NetSuite comparison</a>.</p>
      ${formCta('Request a demo or a tailored quote')}
      <p>Also useful: <a href="/inspection-management-software">inspection management software</a> for companies inspecting other people's assets, <a href="/erp">the full business management platform</a>, and <a href="/resources/business-software-evaluation-checklist">the evaluation checklist</a> to run vendors against before you demo anything.</p>
    </nav>`;

/* ── C. near-me intent block on US training city pages ───────────────────── */
function nearMeBlock(city) {
  return `
    <section aria-label="Finding NDT training near you">
      <h2>Looking for NDT training near you?</h2>
      <p>Searches like "NDT training near me" and "NDT certification near me" usually mean one of two things: a company that needs a crew qualified without losing them to travel, or an individual looking for the closest route to a certificate. Both are answerable from ${esc(city)}.</p>
      <p>For companies, proximity is solved by delivery rather than address — programmes run <strong>on-site at your facility</strong>, so the training comes to the crew and the practical work uses specimens matching what your people actually examine. For individuals, scheduled cohorts and blended delivery (online theory with supervised practical) remove the need for a local classroom entirely.</p>
      <p><a href="/ndt-training-near-me">See how NDT training near you actually works</a> · <a href="/training">all training programmes and levels</a>.</p>
      ${formCta('Request a quote or enrol for ' + esc(city))}
    </section>`;
}

/* ── application ─────────────────────────────────────────────────────────── */
export function applyGeoInterlink(routes, append) {
  const paths = new Set(routes.map((r) => r.path));
  const byPath = new Map(routes.map((r) => [r.path, r]));
  const out = { training: 0, erp: 0, consulting: 0, erpRouting: 0, nearMe: 0 };

  for (const [segKey, seg] of Object.entries(SEGMENTS)) {
    for (const r of routes) {
      if (!r.path.startsWith(seg.prefix)) continue;
      const slug = r.path.slice(seg.prefix.length);
      if (!slug || slug.includes('/')) continue;
      const block = siblingBlock(segKey, slug, paths);
      if (!block) continue;
      append(r, block);
      out[segKey]++;
      // near-me only on US training cities (Canada has its own proximity norms)
      if (segKey === 'training' && REGION_OF.get(slug) !== 'canada') {
        append(r, nearMeBlock(pretty(slug)));
        out.nearMe++;
      }
    }
  }

  // ERP routing on every ERP family page that is not itself a money page
  const MONEY = new Set(['/ndt-inspection-software', '/best-ndt-reporting-software-2026',
    '/inspection-management-software', '/ndt-erp-vs-generic-erp', '/erp', '/ndt-erp-solution',
    '/erp/odoo-vs-netsuite-ndt-companies']);
  for (const r of routes) {
    if (!/^\/(erp|ndt-erp)/.test(r.path)) continue;
    if (MONEY.has(r.path)) continue;
    append(r, ERP_ROUTING);
    out.erpRouting++;
  }
  return out;
}

/** §18 no pricing · §20.10 no numerals in ERP copy outside standards. */
export function assertGeoInterlinkClean() {
  const erpCopy = ERP_ROUTING.replace(/<[^>]+>/g, ' ');
  const digits = erpCopy.match(/\d+/g);
  if (digits) throw new Error(`ERP routing copy contains numerals: ${digits.join(', ')}`);
  const all = JSON.stringify(US_REGIONS) + JSON.stringify(CANADA) + ERP_ROUTING;
  if (/[$£€₹]\s?\d|per day|per hour/i.test(all)) throw new Error('geo-interlink contains pricing');
}
