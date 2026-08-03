/**
 * NDT training city depth — US focus cities, 2026-08-04.
 * ─────────────────────────────────────────────────────────────────────────────
 * WHAT THE DATA SHOWS (90d to 2026-08-03)
 * 140 /ndt-training-{city} pages · 5,495 impressions · 220 clicks. Of the 47 US
 * city pages, **29 earn zero impressions** and the whole US set averages 575
 * words.
 *
 * The decisive finding is in the queries actually reaching these pages:
 *
 *   ndt training near me                      156i  p49.8
 *   ndt certification near me                 123i  p57.6
 *   asnt training near me                     104i  p37.5
 *   ndt courses near me                        80i  p56.4
 *   non destructive testing training near me   42i  p91.3
 *   ndt training houston                       18i  p41.8
 *
 * The demand is **proximity intent, not city-name intent** — and we rank
 * between position 37 and 91 for it. That is not a word-count problem. Google
 * resolves "near me" with local entity signals, and a page that says nothing
 * verifiable about a place cannot earn them.
 *
 * WHAT THIS MODULE DOES — AND DELIBERATELY DOES NOT DO
 * It gives each focus city real, checkable substance: the industrial base that
 * creates NDT demand there, the asset types inspectors will actually work on,
 * and the certification route that fits that work.
 *
 * It does NOT claim a local office, a local classroom or a local address
 * anywhere Atlantis does not have one, and it emits no LocalBusiness schema for
 * those cities. Inventing a local presence would be the fastest way to win the
 * query and the fastest way to lose the client on the first phone call, and
 * fabricated location data is exactly what Google's spam policies target.
 * Instead the pages are honest about how training is actually delivered —
 * on-site at the customer's facility, or as a scheduled cohort — which is both
 * true and, for a corporate training buyer, the more useful answer.
 *
 * No prices anywhere (CLAUDE.md 18).
 */

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/* ── Where Atlantis genuinely has people ──────────────────────────────────── */
const HOME_BASES = new Set(['houston']);

/* ── Per-city industrial reality ───────────────────────────────────────────
 * name      — display name
 * state     — for regional framing
 * base      — what actually drives NDT demand there
 * assets    — what an inspector in that market works on
 * methods   — the methods that market pulls hardest on
 */
const CITIES = {
  houston: {
    name: 'Houston', state: 'Texas',
    base: 'the largest concentration of refining, petrochemical and upstream engineering in the United States, with the Houston Ship Channel corridor running from Pasadena and Deer Park through Baytown and La Porte',
    assets: 'refinery process units, storage tank farms, pressure vessels, high-pressure piping circuits, subsea and drilling equipment, and fabrication shops feeding all of them',
    methods: 'ultrasonic thickness and shear wave, phased array on thick-section welds, radiography, and API 510/570/653 inspector work',
  },
  denver: {
    name: 'Denver', state: 'Colorado',
    base: 'Rocky Mountain oil and gas operations, midstream gathering and processing across the DJ Basin, and a substantial aerospace and defence manufacturing cluster along the Front Range',
    assets: 'gathering lines and compressor stations, gas processing plants, pressure vessels, aerospace components and composite structures',
    methods: 'ultrasonic and radiographic weld examination, magnetic particle and penetrant on machined and welded components, and eddy current in aerospace work',
  },
  atlanta: {
    name: 'Atlanta', state: 'Georgia',
    base: 'power generation across the Southeast, heavy manufacturing, aerospace maintenance and repair, and a dense logistics and distribution infrastructure',
    assets: 'boilers and steam piping, turbine components, structural steel, pressure equipment and aircraft components',
    methods: 'ultrasonic testing, radiography, magnetic particle and penetrant, with eddy current in aerospace MRO',
  },
  dallas: {
    name: 'Dallas–Fort Worth', state: 'Texas',
    base: 'aerospace and defence manufacturing, structural fabrication, and the pipeline and midstream infrastructure crossing North Texas',
    assets: 'aircraft structures and engine components, structural welds, pipelines, pressure vessels and fabricated assemblies',
    methods: 'penetrant and magnetic particle on machined parts, ultrasonic and phased array on welds, radiography, and eddy current in aerospace',
  },
  'new-orleans': {
    name: 'New Orleans', state: 'Louisiana',
    base: 'Gulf Coast refining, offshore support and fabrication along the Mississippi corridor, shipbuilding and marine repair',
    assets: 'refinery units, offshore structures and modules under fabrication, hulls and marine structures, storage tanks and process piping',
    methods: 'ultrasonic and radiographic weld examination, magnetic particle on structural and marine welds, and tank inspection under API 653',
  },
  'los-angeles': {
    name: 'Los Angeles', state: 'California',
    base: 'refining around the South Bay and Wilmington, port and marine infrastructure, and aerospace manufacturing across the region',
    assets: 'refinery process equipment, storage tanks, port structures, aerospace components and composite assemblies',
    methods: 'ultrasonic thickness and weld examination, radiography, penetrant on aerospace parts, and composite inspection techniques',
  },
  chicago: {
    name: 'Chicago', state: 'Illinois',
    base: 'refining in the Calumet and Whiting corridor, steel production, heavy manufacturing and a dense rail network',
    assets: 'refinery units and tank farms, steel mill equipment, pressure vessels, rail infrastructure and structural steel',
    methods: 'ultrasonic testing, radiography, magnetic particle on heavy welds, and rail-specific ultrasonic inspection',
  },
  philadelphia: {
    name: 'Philadelphia', state: 'Pennsylvania',
    base: 'refining and chemical processing along the Delaware River, pharmaceutical manufacturing, and shipyard and marine work',
    assets: 'process units and piping, pressure vessels, sanitary process equipment, marine structures',
    methods: 'ultrasonic and radiographic examination, penetrant on stainless and sanitary welds, and API inspector work',
  },
  pittsburgh: {
    name: 'Pittsburgh', state: 'Pennsylvania',
    base: 'steel production and specialty metals, Marcellus and Utica shale gas processing, and heavy industrial manufacturing',
    assets: 'mill equipment and rolls, gas gathering and processing plant, pressure vessels, structural steel and heavy fabrication',
    methods: 'ultrasonic testing including thick-section and phased array, magnetic particle, radiography and hardness verification',
  },
  detroit: {
    name: 'Detroit', state: 'Michigan',
    base: 'automotive manufacturing and its supply chain, tooling and die work, plus regional refining and chemical processing',
    assets: 'production tooling, welded assemblies, castings, pressure equipment and process piping',
    methods: 'penetrant and magnetic particle on production parts, ultrasonic on welds and castings, and radiography on critical assemblies',
  },
  'baton-rouge': {
    name: 'Baton Rouge', state: 'Louisiana',
    base: 'one of the densest refining and petrochemical corridors in the country, running along the Mississippi between Baton Rouge and New Orleans',
    assets: 'refinery and chemical process units, pressure vessels, storage tanks, high-temperature piping circuits',
    methods: 'ultrasonic thickness and corrosion mapping, phased array, radiography, and API 510/570/653 work',
  },
  'corpus-christi': {
    name: 'Corpus Christi', state: 'Texas',
    base: 'refining, LNG export terminals, Eagle Ford midstream infrastructure and port operations',
    assets: 'refinery units, cryogenic LNG equipment, export terminal piping, storage tanks and loading facilities',
    methods: 'ultrasonic and radiographic weld examination, cryogenic service inspection, penetrant on stainless and nickel alloy welds',
  },
  beaumont: {
    name: 'Beaumont', state: 'Texas',
    base: 'the Golden Triangle refining and petrochemical complex, among the highest concentrations of refining capacity in North America',
    assets: 'refinery process units, crackers and reformers, tank farms, pressure vessels and extensive piping circuits',
    methods: 'ultrasonic thickness and shear wave, phased array, radiography, positive material identification and API inspector work',
  },
  'port-arthur': {
    name: 'Port Arthur', state: 'Texas',
    base: 'large-scale refining and petrochemical production in the Golden Triangle, with associated marine terminals',
    assets: 'refinery units, coker and crude furnaces, storage tanks, marine loading equipment and process piping',
    methods: 'ultrasonic and radiographic examination, high-temperature inspection techniques, tank inspection under API 653',
  },
  'lake-charles': {
    name: 'Lake Charles', state: 'Louisiana',
    base: 'LNG export facilities, refining and a substantial petrochemical build-out along the Calcasieu corridor',
    assets: 'cryogenic LNG trains and storage, refinery units, chemical plant equipment and new-construction fabrication',
    methods: 'radiography and ultrasonic weld examination on new construction, cryogenic and stainless techniques, penetrant',
  },
  midland: {
    name: 'Midland', state: 'Texas',
    base: 'the Permian Basin — the most active upstream oil and gas region in the United States, with gathering, processing and takeaway infrastructure to match',
    assets: 'wellheads and pressure control equipment, gathering lines, compressor and processing stations, tank batteries',
    methods: 'radiography and ultrasonic on pipeline girth welds, magnetic particle on pressure control equipment, and API 1104 acceptance work',
  },
  odessa: {
    name: 'Odessa', state: 'Texas',
    base: 'Permian Basin field operations, oilfield equipment manufacture and repair, and regional processing infrastructure',
    assets: 'drilling and pressure control equipment, gathering systems, processing plant, tanks and vessels',
    methods: 'magnetic particle and penetrant on oilfield equipment, ultrasonic and radiography on welds and piping',
  },
  tulsa: {
    name: 'Tulsa', state: 'Oklahoma',
    base: 'pipeline engineering and operations, refining, and a long-established oilfield equipment manufacturing base',
    assets: 'pipelines and pump stations, refinery equipment, pressure vessels and manufactured oilfield components',
    methods: 'radiographic and ultrasonic weld examination, magnetic particle, and pipeline-specific inspection under API 1104',
  },
  mobile: {
    name: 'Mobile', state: 'Alabama',
    base: 'shipbuilding and marine repair, aerospace final assembly, chemical production and port operations',
    assets: 'hulls and marine structures, aircraft assemblies, chemical process equipment and port infrastructure',
    methods: 'ultrasonic and radiographic examination, magnetic particle on structural and marine welds, penetrant on aerospace parts',
  },
  cleveland: {
    name: 'Cleveland', state: 'Ohio',
    base: 'steel production, heavy manufacturing, chemical processing and aerospace component work across northern Ohio',
    assets: 'mill equipment, pressure vessels, structural and fabricated steel, machined and cast components',
    methods: 'ultrasonic testing, magnetic particle, radiography and penetrant on machined parts',
  },
  'kansas-city': {
    name: 'Kansas City', state: 'Missouri',
    base: 'refining, food and agricultural processing at scale, rail infrastructure and general manufacturing',
    assets: 'refinery units, process and sanitary equipment, rail assets, pressure vessels and structural steel',
    methods: 'ultrasonic and radiographic examination, penetrant on sanitary stainless welds, magnetic particle',
  },
  'st-louis': {
    name: 'St. Louis', state: 'Missouri',
    base: 'aerospace and defence manufacturing, chemical processing, refining and river-borne freight infrastructure',
    assets: 'aircraft and defence components, chemical process equipment, pressure vessels and barge and terminal assets',
    methods: 'penetrant and magnetic particle on aerospace components, ultrasonic and radiographic weld examination',
  },
  seattle: {
    name: 'Seattle', state: 'Washington',
    base: 'aerospace manufacturing and its supply chain, shipbuilding and marine repair, and refining north of the metro area',
    assets: 'aircraft structures and composite assemblies, marine structures, refinery equipment and pressure vessels',
    methods: 'penetrant and eddy current on aerospace parts, ultrasonic including composite techniques, radiography',
  },
  minneapolis: {
    name: 'Minneapolis', state: 'Minnesota',
    base: 'refining, medical device and precision manufacturing, food processing and regional pipeline infrastructure',
    assets: 'refinery units, precision machined and welded components, sanitary process equipment, pipelines',
    methods: 'penetrant on precision and medical components, ultrasonic and radiographic weld examination',
  },
  milwaukee: {
    name: 'Milwaukee', state: 'Wisconsin',
    base: 'heavy equipment and industrial machinery manufacturing, power generation and food processing',
    assets: 'castings and weldments, machinery components, boilers and steam plant, sanitary process equipment',
    methods: 'ultrasonic on castings and welds, magnetic particle, radiography and penetrant',
  },
  charlotte: {
    name: 'Charlotte', state: 'North Carolina',
    base: 'power generation engineering including nuclear, energy equipment manufacturing and general heavy industry',
    assets: 'turbine and generator components, nuclear plant equipment, pressure vessels and heavy weldments',
    methods: 'ultrasonic and phased array, radiography, magnetic particle and penetrant, with nuclear-specific qualification',
  },
  nashville: {
    name: 'Nashville', state: 'Tennessee',
    base: 'automotive and heavy equipment manufacturing, power generation and regional chemical processing',
    assets: 'production weldments and castings, boilers and steam piping, pressure equipment',
    methods: 'ultrasonic, magnetic particle and penetrant on production parts, radiography on critical welds',
  },
  'oklahoma-city': {
    name: 'Oklahoma City', state: 'Oklahoma',
    base: 'upstream oil and gas operations, aerospace maintenance and repair, and oilfield equipment manufacture',
    assets: 'drilling and pressure control equipment, gathering infrastructure, aircraft components and structures',
    methods: 'magnetic particle and penetrant, ultrasonic and radiographic weld examination, eddy current in aerospace MRO',
  },
  cincinnati: {
    name: 'Cincinnati', state: 'Ohio',
    base: 'aerospace engine manufacturing, chemical processing and heavy machinery production',
    assets: 'turbine and engine components, chemical process equipment, machined parts and weldments',
    methods: 'penetrant and eddy current on engine components, ultrasonic on forgings and welds, radiography',
  },
  birmingham: {
    name: 'Birmingham', state: 'Alabama',
    base: 'steel and pipe production, heavy manufacturing and regional power generation',
    assets: 'pipe and tube, structural steel, mill equipment, boilers and pressure parts',
    methods: 'ultrasonic and electromagnetic tube inspection, magnetic particle, radiography',
  },
  'texas-city': {
    name: 'Texas City', state: 'Texas',
    base: 'a concentrated refining and petrochemical cluster on Galveston Bay, adjacent to the wider Houston Ship Channel corridor',
    assets: 'refinery process units, chemical plant equipment, storage tanks and marine terminal infrastructure',
    methods: 'ultrasonic thickness and corrosion mapping, phased array, radiography and API inspector work',
  },
  anchorage: {
    name: 'Anchorage', state: 'Alaska',
    base: 'North Slope oil and gas production, the trans-Alaska pipeline system, and marine and aviation logistics serving remote operations',
    assets: 'pipelines and pump stations, production facilities in Arctic service, storage tanks, marine and aviation assets',
    methods: 'radiographic and ultrasonic weld examination, low-temperature service inspection, tank and pipeline integrity work',
  },
};

/* ── Level pathway, shared but framed against the local asset base ────────── */

function levelSection(c) {
  return `      <h2>Which level you need for ${esc(c.name)} work</h2>
      <p><strong>Level I</strong> performs specific calibrations and examinations and records results under direction. It is where most people entering ${esc(c.name)} inspection work start, and for ${esc(c.assets.split(',')[0].trim())} it is usually reached in a single method first rather than several at once.</p>
      <p><strong>Level II</strong> sets up and calibrates equipment, interprets and evaluates results against the applicable code, and writes the report. This is the level most contracts in ${esc(c.state)} actually specify, because it is the level that can make an accept-or-reject call without supervision.</p>
      <p><strong>Level III</strong> establishes techniques and procedures, approves them, interprets codes and specifications, and takes responsibility for the qualification and examination of Level I and II personnel. It is also the level that signs the Written Practice an auditor will ask for. For operators running ${esc(c.methods.split(',')[0].trim())} across multiple sites, Level III capability is the difference between owning your inspection programme and renting it.</p>`;
}

function deliverySection(c, slug) {
  if (HOME_BASES.has(slug)) {
    return `      <h2>How training runs in ${esc(c.name)}</h2>
      <p>Atlantis is based in ${esc(c.name)}, so training here runs either at your facility or as a scheduled cohort, and practical work can be arranged around shift patterns and turnaround windows rather than against them. On-site delivery is usually the better option once you have more than a couple of people to qualify, because the specimens can be representative of the equipment your team actually inspects.</p>`;
  }
  return `      <h2>How training reaches ${esc(c.name)}</h2>
      <p>Atlantis does not operate a classroom in ${esc(c.name)}, and it is worth being straightforward about that rather than implying otherwise. Training is delivered <strong>on-site at your own facility</strong> anywhere in ${esc(c.state)} and the surrounding region — which for a corporate buyer is usually the better arrangement anyway, since the practical specimens can reflect the ${esc(c.assets.split(',')[0].trim())} your people will actually be examining, and nobody loses days to travel.</p>
      <p>Where you have only one or two candidates, the practical alternatives are a scheduled cohort at one of our locations, or blended delivery with theory completed online and supervised practical arranged locally. Which of the three is right depends on headcount and on how quickly you need people qualified; tell us both and we will say plainly which we would recommend.</p>`;
}

function buildCityDepth(slug, c) {
  return `
    <section aria-label="NDT training in ${esc(c.name)} in detail">
      <h2>Why ${esc(c.name)} needs certified NDT personnel</h2>
      <p>${esc(c.name)} sits on ${c.base}. That industrial base is what creates sustained demand for qualified inspection personnel here: the assets in question — ${c.assets} — are examined on intervals set by code rather than by preference, and the examinations have to be performed and interpreted by people whose qualification can be evidenced.</p>
      <p>In practice that means the methods pulled hardest in this market are ${c.methods}. A qualification programme built for ${esc(c.name)} should follow that demand rather than cover every method thinly.</p>

${levelSection(c)}

${deliverySection(c, slug)}

      <h2>Certification route: ASNT, ISO 9712, and which your employer needs</h2>
      <p>Two models operate in the United States and they are not interchangeable. Under <a href="/blog/asnt-snt-tc-1a-certification-requirements">SNT-TC-1A</a>, certification is granted by the <em>employer</em> against the employer's own Written Practice — flexible, and the reason auditors ask to see that document rather than a certificate. <a href="/glossary/iso-9712">ISO 9712</a> and schemes such as PCN and CSWIP certify through an independent body, so the certificate is portable between employers. ANSI/ASNT CP-189 sits between them as a standard rather than a recommended practice.</p>
      <p>Which you need is a contractual question, not a technical one. Plenty of ${esc(c.state)} contracts name one specifically, and candidates who choose the wrong route lose months. If you are unsure which your client base expects, that is worth a five-minute conversation before you enrol anyone.</p>

      <h2>Frequently asked questions</h2>
      <h3>Is there NDT training near me in ${esc(c.name)}?</h3>
      <p>${HOME_BASES.has(slug)
        ? `Yes — Atlantis is based in ${esc(c.name)} and runs both on-site and scheduled training here.`
        : `Atlantis delivers training on-site at facilities across ${esc(c.state)} rather than from a fixed classroom in ${esc(c.name)}. For a team, that is normally faster and cheaper than sending people away; for an individual, a scheduled cohort or blended delivery is usually the better route. Tell us which you are and we will point you at the honest option, including if that is someone else.`}</p>
      <h3>How long does it take to qualify at Level II?</h3>
      <p>It depends on the method and on how much documented experience you already hold, because the requirement is training hours <em>and</em> experience hours, not training alone. Someone already working under supervision in the method progresses considerably faster than someone starting cold. We will map your existing hours against the requirement before you commit to anything.</p>
      <h3>Can our own staff be certified without an outside body?</h3>
      <p>Under SNT-TC-1A, yes — that is precisely the model, and it requires a compliant Written Practice and a qualified Level III to administer it. Many operators use an outsourced Level III for exactly this. If you do not currently have one, that is the gap to close first, because without it the certifications you issue will not survive an audit.</p>
      <h3>Do you train all methods?</h3>
      <p>UT, RT, MT, PT, VT and ET, plus advanced techniques including phased array and TOFD, and preparation for API 510, 570 and 653 inspector certification. For a ${esc(c.name)} programme we would normally suggest starting with ${esc(c.methods.split(',')[0].trim())} and adding from there as the work demands.</p>

      <p>Next: <a href="/training">see all NDT training and certification</a> · <a href="/asnt-certification">how ASNT certification works</a> · <a href="/consulting/ndt-consulting-level-iii">outsourced ASNT Level III</a> · <a href="/contact?service=training">ask about a programme in ${esc(c.name)}</a>.</p>
    </section>`;
}

/**
 * Course schema is legitimate — these courses genuinely exist and are offered.
 * No LocalBusiness schema is emitted for cities without a real Atlantis
 * presence: fabricated location data is precisely what Google's spam policies
 * target, and it would not survive a phone call either.
 */
function courseSchema(c) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: `NDT Training and Certification — ${c.name}, ${c.state}`,
    description: `ASNT SNT-TC-1A and ISO 9712 aligned NDT training for ${c.name}: Level I, II and III in UT, RT, MT, PT, VT and ET, delivered on-site or as a scheduled cohort.`,
    provider: { '@type': 'Organization', name: 'Atlantis NDT', url: 'https://atlantisndt.com' },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: ['onsite', 'blended'],
      // No price node anywhere — CLAUDE.md 18.
      location: { '@type': 'Place', name: `${c.name}, ${c.state}`, address: { '@type': 'PostalAddress', addressLocality: c.name, addressRegion: c.state, addressCountry: 'US' } },
    },
  };
}

/**
 * @param routes  prerender route list
 * @param append  (route, html) => void
 * @returns { deepened, schema }
 */
export function applyTrainingCityDepth(routes, append) {
  const byPath = new Map(routes.map((r) => [r.path, r]));
  let deepened = 0, schema = 0;

  for (const [slug, c] of Object.entries(CITIES)) {
    const r = byPath.get(`/ndt-training-${slug}`);
    if (!r) continue;
    append(r, buildCityDepth(slug, c));
    deepened++;
    if (!r.structuredData) { r.structuredData = courseSchema(c); schema++; }
  }
  return { deepened, schema };
}

export const TRAINING_CITY_SLUGS = Object.keys(CITIES);
