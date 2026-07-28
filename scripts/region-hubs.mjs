/**
 * Region hubs — Phase 3 of the 2026-07-27 ERP/DT SEO programme.
 * ─────────────────────────────────────────────────────────────────────────────
 * THE PROBLEM
 * The site publishes ~1,426 ERP/DT URLs built on a (product × city) permutation.
 * 90-day GSC: 366 of them had ZERO impressions, 751 had 1–9, and 133 ranked
 * top-15 while earning zero clicks — the signature of a keyword with no
 * searchers rather than a ranking problem. "ndt erp jubail" is not a search
 * anybody makes; "erp for oil and gas Saudi Arabia" is.
 *
 * THE FIX — AND WHAT IT DELIBERATELY DOES NOT DO
 * No page is removed (additive-only rule, CLAUDE.md §2). Instead the existing
 * country/region-level URLs — which already hold whatever equity the cluster has
 * — are promoted into genuine regional hubs: named operators, the regulators and
 * codes that actually govern inspection in that jurisdiction, and links down to
 * every member city page. City pages keep their URLs and link up to their hub,
 * so the cluster gains an internal-link spine instead of 300 orphans.
 *
 * Using EXISTING country URLs rather than minting `/erp-{region}` avoids
 * cannibalising the pages already ranking, and adds zero new thin URLs to a site
 * that CLAUDE.md explicitly warns is already large.
 *
 * Regional regulatory context below is hand-written per region (accuracy matters
 * more than volume); the asset/operator detail is aggregated from the same
 * src/data/dt-city-data.mjs research the city pages render.
 */

import { readFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const HERE = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(HERE, '../src');
const SITE = 'https://atlantisndt.com';

const esc = (s) =>
  String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/**
 * @typedef {object} Region
 * @property {string} slug        country/region slug that already has ERP + DT pages
 * @property {string} name        display name
 * @property {string} erpKeyword  the head phrase real buyers type for the ERP page
 * @property {string} dtKeyword   the head phrase real buyers type for the DT page
 * @property {string} operators   named operators and asset owners in the region
 * @property {string} regulatory  regulators, codes and audit regimes that govern inspection
 * @property {string} marketNote  what is commercially distinctive about the region
 * @property {string[]} cities    member city slugs that have ERP and/or DT pages
 */

/** @type {Region[]} */
export const REGIONS = [
  {
    slug: 'saudi-arabia',
    name: 'Saudi Arabia',
    erpKeyword: 'ERP software for inspection and oil & gas companies in Saudi Arabia',
    dtKeyword: 'asset integrity digital twin in Saudi Arabia',
    operators:
      'Saudi Aramco across Abqaiq, Ras Tanura, Shaybah, Khurais, Jazan and Yanbu; SABIC and its Jubail affiliates; Petro Rabigh; Ma\'aden minerals and aluminium; SATORP and YASREF joint-venture refineries; and the contractor base serving them out of Dammam and Al Khobar.',
    regulatory:
      'Inspection work is shaped less by a single national code than by Aramco\'s own engineering standards — SAES engineering standards, SAEP procedures, SAIC inspection checklists and the Aramco approved-vendor regime — layered on top of ASME Section V, VIII and IX, API 510, API 570, API 653 and API 580/581. Personnel are certified to ASNT SNT-TC-1A or ISO 9712, with Aramco-specific approvals and CBT screening often required before mobilisation. The Saudi Standards, Metrology and Quality Organization (SASO) and High Commission for Industrial Security requirements apply alongside.',
    marketNote:
      'The binding constraint for contractors here is not winning work, it is holding vendor approval. A single expired certification or an out-of-calibration instrument found at a pre-mobilisation check costs the mobilisation and damages the approval record. That is an operational systems problem before it is a technical one.',
    cities: ['saudi-arabia', 'jubail', 'yanbu', 'dammam', 'khobar', 'ras-tanura', 'abqaiq', 'shaybah', 'khurais', 'jazan', 'rabigh', 'riyadh'],
  },
  {
    slug: 'uae',
    name: 'the United Arab Emirates',
    erpKeyword: 'inspection and NDT ERP software in the UAE',
    dtKeyword: 'asset integrity digital twin in the UAE',
    operators:
      'ADNOC Onshore, Offshore, Refining, Gas Processing and Sour Gas; Borouge at Ruwais; ENOC and Emirates Global Aluminium in Dubai and Jebel Ali; Fujairah storage and bunkering terminals; and the fabrication and inspection contractor cluster in Mussafah, Jebel Ali and Sharjah.',
    regulatory:
      'ADNOC AGES specifications and its contractor HSE and competency regime dominate upstream and downstream work, with FANR governing anything involving ionising radiation and OSHAD-SF setting occupational safety requirements in Abu Dhabi. Codes in daily use are ASME Section V, VIII and IX, API 510/570/653, API 580/581 for RBI and API 579 for fitness-for-service, with ISO 17020 and ISO 17025 accreditation increasingly expected of third-party inspection bodies.',
    marketNote:
      'UAE work concentrates in a small number of very large operator relationships, so pre-mobilisation compliance checks are frequent and documentary. Contractors that can produce a technician\'s full qualification history and an instrument\'s calibration traceability in minutes are structurally advantaged over those who cannot.',
    cities: ['abu-dhabi', 'dubai', 'sharjah', 'ras-al-khaimah', 'fujairah', 'jebel-ali', 'mussafah', 'ruwais'],
  },
  {
    slug: 'qatar',
    name: 'Qatar',
    erpKeyword: 'inspection and NDT ERP software in Qatar',
    dtKeyword: 'asset integrity digital twin in Qatar',
    operators:
      'QatarEnergy and QatarEnergy LNG across the Ras Laffan complex, Mesaieed Industrial City petrochemicals, Qatar Steel and Qatar Aluminium, plus the EPC and inspection contractor base in Doha supporting the North Field expansion.',
    regulatory:
      'QatarEnergy contractor and vendor approval requirements govern access to most major work, applied over ASME Section V, VIII and IX, API 510/570/653, API 580/581 and API 579. The Ministry of Public Health regulates radiation sources used for industrial radiography, and ISO 17020/17025 accreditation is commonly specified for third-party inspection.',
    marketNote:
      'North Field expansion work has concentrated a large volume of new-build fabrication inspection alongside an ageing in-service inspection load. Contractors running both simultaneously need welder qualification and NDT records on the new-build side and CML thickness trending on the in-service side, which are different data models in the same business.',
    cities: ['doha', 'ras-laffan', 'mesaieed'],
  },
  {
    slug: 'kuwait',
    name: 'Kuwait',
    erpKeyword: 'inspection and NDT ERP software in Kuwait',
    dtKeyword: 'asset integrity digital twin in Kuwait',
    operators:
      'Kuwait Oil Company (KOC) across the northern and southern gathering centres, Kuwait National Petroleum Company (KNPC) at Mina Al-Ahmadi, Mina Abdullah and the Al-Zour refinery, PIC petrochemicals, and the contractor base in Ahmadi and Kuwait City.',
    regulatory:
      'KOC and KNPC contractor approval and their internal inspection standards drive requirements, applied over ASME Section V, VIII and IX and the API 510/570/653 inspection codes. Kuwait\'s radiation protection authority governs industrial radiography sources, and API 580/581 RBI programmes are well established at the major operators.',
    marketNote:
      'Kuwait has an unusually high proportion of mature assets in sour service, which puts damage-mechanism assignment per API RP 571 — wet H2S cracking, HIC, SOHIC, sulfidation — at the centre of the inspection plan rather than at its edges.',
    cities: ['kuwait', 'al-zour'],
  },
  {
    slug: 'oman',
    name: 'Oman',
    erpKeyword: 'inspection and NDT ERP software in Oman',
    dtKeyword: 'asset integrity digital twin in Oman',
    operators:
      'Petroleum Development Oman across the interior fields, OQ refineries and petrochemicals at Sohar and Duqm, Vale and Jindal industrial facilities at Sohar port, and the Duqm refinery and drydock complex.',
    regulatory:
      'PDO and OQ contractor approval regimes set the practical bar, applied over ASME and API inspection codes. Oman\'s Ministry of Labour occupational safety requirements and radiation-source licensing apply, and in-country value (ICV) requirements affect how contractors staff and structure local operations.',
    marketNote:
      'Work is geographically dispersed between the interior fields, Sohar and Duqm, so crew mobilisation cost and scheduling across long distances materially affects contract margin — which makes work-order-level job costing more than an accounting nicety.',
    cities: ['muscat', 'sohar', 'duqm', 'salalah'],
  },
  {
    slug: 'malaysia',
    name: 'Malaysia',
    erpKeyword: 'ERP software for oil and gas companies in Malaysia',
    dtKeyword: 'asset integrity digital twin in Malaysia',
    operators:
      'PETRONAS and PETRONAS Carigali upstream, PETRONAS Chemicals and the Pengerang integrated complex downstream, Shell Malaysia and Sarawak Shell, Murphy Oil and Hess offshore, and the fabrication yards and inspection contractors around Kuala Lumpur, Kerteh, Miri, Bintulu and Labuan.',
    regulatory:
      'PETRONAS licensing and vendor registration governs access to most upstream and downstream work and requires continuous documentary evidence rather than a one-off submission. DOSH requirements under the Occupational Safety and Health Act and the Factories and Machinery Act shape pressure-equipment and lifting inspection, applied alongside ASME Section V, VIII and IX and API 510/570/653.',
    marketNote:
      'Malaysian contractors typically work across Peninsular Malaysia, Sarawak and Sabah with shared crews, and bill in a mix of MYR, USD and SGD. Multi-site dispatch with competency matching, and multi-currency job costing that still reconciles to one margin view, are the two capabilities that decide whether the business is actually profitable per contract.',
    cities: ['kuala-lumpur', 'bintulu', 'miri', 'kemaman', 'kerteh', 'pengerang', 'mailiao'],
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    erpKeyword: 'construction and inspection ERP software in Singapore',
    dtKeyword: 'asset integrity digital twin in Singapore',
    operators:
      'The Jurong Island process cluster — ExxonMobil, Shell, Chevron Oronite, Lanxess, Evonik and the Singapore Refining Company — plus Sembcorp and Keppel marine and offshore yards, Tuas port and industrial development, and the third-party inspection and calibration laboratory cluster serving them.',
    regulatory:
      'Workplace Safety and Health Act obligations and BCA requirements shape construction and industrial work, with ASME Section V, VIII and IX, ASME B31.1 and B31.3, AWS D1.1, API 510/570/653 and API 1104 governing the technical inspection. ISO 17020 and ISO 17025 accreditation via SAC is effectively table stakes for third-party inspection bodies.',
    marketNote:
      'Singapore is documentation-heavy: the quality record — welder qualifications, NDT results per joint, material traceability by heat number and ITP hold-point evidence — is what actually gets audited by consultants and clients. Structured quality data beats attached PDFs decisively here.',
    cities: ['singapore', 'jurong-island'],
  },
  {
    slug: 'india',
    name: 'India',
    erpKeyword: 'inspection and NDT ERP software in India',
    dtKeyword: 'asset integrity digital twin in India',
    operators:
      'Reliance Jamnagar, IOCL, BPCL, HPCL and ONGC refining and upstream assets, GAIL pipelines, Nayara Energy at Vadinar, Tata and JSW steel, L&T and other EPC fabricators, plus the large NDT contractor base across Gujarat, Maharashtra, Tamil Nadu, Andhra Pradesh and Telangana.',
    regulatory:
      'OISD standards govern oil and gas installation safety and inspection, PESO regulates pressure vessels and gas handling, the Indian Boiler Regulations (IBR) apply to boilers and their piping, and AERB licenses industrial radiography sources and radiographers. ASME Section V, VIII and IX, API 510/570/653 and ISO 9712 or ASNT personnel certification apply on top.',
    marketNote:
      'India combines a very large certified-technician workforce with high client-audit intensity from the PSU operators. Certification currency across hundreds of technicians and multiple methods is the operational problem that scales worst on spreadsheets.',
    cities: ['mumbai', 'chennai', 'hyderabad', 'gujarat', 'maharashtra', 'tamil-nadu', 'andhra-pradesh', 'visakhapatnam', 'vadodara', 'surat', 'pune', 'mangalore', 'paradip', 'panipat', 'dahej', 'kochi'],
  },
  {
    slug: 'nigeria',
    name: 'Nigeria',
    erpKeyword: 'inspection and NDT ERP software in Nigeria',
    dtKeyword: 'asset integrity digital twin in Nigeria',
    operators:
      'The Dangote refinery and petrochemical complex, NNPC and its joint ventures, Shell, TotalEnergies, Chevron and ExxonMobil offshore assets, Port Harcourt and Warri refining, and the FPSO fleet operating in the Gulf of Guinea.',
    regulatory:
      'NUPRC and NMDPRA regulate upstream and midstream/downstream operations respectively, with NCDMB local-content requirements shaping how contractors staff and register. Inspection follows ASME Section V, VIII and IX, API 510/570/653 and API 580/581, with ISO 9712 or ASNT personnel certification and, offshore, class-society requirements.',
    marketNote:
      'Offshore and FPSO work here carries very high mobilisation cost and constrained inspection access, so inspection planning quality has an outsized effect on total cost — and evidence provenance matters because operator audits are frequent and documentary.',
    cities: ['lagos', 'port-harcourt'],
  },
  {
    slug: 'uk',
    name: 'the United Kingdom and North Sea',
    erpKeyword: 'inspection and NDT ERP software in the UK',
    dtKeyword: 'asset integrity digital twin in the UK and North Sea',
    operators:
      'North Sea operators working out of Aberdeen, the Grangemouth, Stanlow, Fawley and Immingham refining and petrochemical complexes, Teesside industrial and hydrogen/CCS development, the Devonport and Plymouth naval refit base, and the Tyne and Newcastle offshore wind fabrication cluster.',
    regulatory:
      'HSE regulates under the Pressure Systems Safety Regulations, the Offshore Installations (Safety Case) Regulations and the Ionising Radiations Regulations, with the North Sea Transition Authority governing licensing. Technical inspection follows PD 5500, EN 13445 and EN 13480 alongside ASME and API codes, with personnel certified to PCN/BINDT or ASNT and inspection bodies accredited to ISO 17020 by UKAS.',
    marketNote:
      'North Sea life-extension work makes fitness-for-service and remaining-life defensibility central rather than optional: assets are routinely operated beyond original design life on the strength of documented assessment, so the quality of the inspection evidence chain directly determines what the operator is allowed to do.',
    cities: ['aberdeen', 'london', 'glasgow', 'newcastle', 'plymouth', 'teesside', 'grangemouth', 'stanlow', 'fawley', 'immingham'],
  },
  {
    slug: 'alberta',
    name: 'Alberta and Western Canada',
    erpKeyword: 'inspection and NDT ERP software in Alberta',
    dtKeyword: 'asset integrity digital twin in Alberta',
    operators:
      'Oil sands operators around Fort McMurray, the Edmonton refinery row and Fort Saskatchewan petrochemical corridor, Calgary-headquartered midstream and pipeline operators, the Lloydminster heavy oil upgrader, and Sarnia\'s chemical valley to the east.',
    regulatory:
      'The Alberta Energy Regulator governs upstream operations, ABSA administers pressure-equipment safety under the Alberta Safety Codes Act with CSA B51 as the governing construction code, and CSA Z662 covers oil and gas pipeline systems. API 510/570/653 practice is widely used alongside, with personnel certified through NRCan/CGSB or ASNT.',
    marketNote:
      'ABSA\'s pressure-equipment regime makes the inspection record a regulatory artefact, not just a commercial one — quality-management-system audits test whether the inspector was qualified and the instrument calibrated at the time of the inspection, which is precisely the evidence chain most spreadsheet-based operations cannot produce quickly.',
    cities: ['calgary', 'edmonton', 'fort-mcmurray', 'fort-saskatchewan', 'lloydminster', 'sarnia', 'regina', 'saskatoon', 'alberta'],
  },
  {
    slug: 'texas',
    name: 'Texas and the US Gulf Coast',
    erpKeyword: 'inspection and NDT ERP software on the US Gulf Coast',
    dtKeyword: 'asset integrity digital twin on the US Gulf Coast',
    operators:
      'The Houston Ship Channel refining and petrochemical corridor — Baytown, Deer Park, Pasadena, Texas City, La Porte and Channelview — plus Beaumont, Port Arthur, Freeport and Corpus Christi, the Permian midstream base out of Midland and Odessa, and the Gulf of Mexico offshore fleet.',
    regulatory:
      'OSHA Process Safety Management (29 CFR 1910.119) makes mechanical integrity a legal obligation with documented inspection and testing, the National Board Inspection Code governs in-service pressure equipment repair and alteration, and API 510, API 570, API 653, API 580/581 and API 579 are the working codes. State environmental agencies such as TCEQ add reporting obligations, and BSEE governs offshore.',
    marketNote:
      'The US Gulf Coast is the densest turnaround market in the world, which makes crew scheduling, certification currency across hundreds of technicians and rapid audit-evidence assembly the operational differentiators. It is also the single largest untapped CTR opportunity in the site\'s own GSC data.',
    cities: ['houston', 'baytown', 'deer-park', 'pasadena-texas', 'texas-city', 'la-porte', 'channelview', 'beaumont', 'port-arthur-texas', 'freeport-texas', 'corpus-christi', 'midland', 'odessa', 'galveston', 'new-orleans', 'baton-rouge', 'lake-charles-louisiana', 'texas'],
  },
  {
    slug: 'perth',
    name: 'Western Australia',
    erpKeyword: 'inspection and NDT ERP software in Western Australia',
    dtKeyword: 'asset integrity digital twin in Western Australia',
    operators:
      'North West Shelf and Pluto LNG, Wheatstone and Gorgon, the Karratha and Port Hedland resource export infrastructure, Kwinana industrial area, and the Perth-based inspection and integrity contractor base servicing offshore and Pilbara assets.',
    regulatory:
      'NOPSEMA regulates offshore petroleum safety and integrity, WorkSafe WA covers onshore, and AS/NZS 3788 governs pressure-equipment in-service inspection alongside AS 4037 and the ASME and API codes used on internationally engineered assets. Personnel are certified under AINDT to ISO 9712 or to ASNT.',
    marketNote:
      'Remote Pilbara and offshore work makes mobilisation expensive and inspection windows short, so planning accuracy and offline field capture that never loses a record are worth more here than almost anywhere else.',
    cities: ['perth', 'karratha', 'port-hedland', 'kwinana', 'darwin', 'gladstone', 'adelaide', 'melbourne', 'sydney'],
  },
  {
    slug: 'rotterdam',
    name: 'the Netherlands and Belgium',
    erpKeyword: 'inspection and NDT ERP software in the Netherlands',
    dtKeyword: 'asset integrity digital twin in the Netherlands',
    operators:
      'The Rotterdam and Antwerp refining, chemical and tank-storage cluster, Shell Pernis and Moerdijk, BASF Antwerp, Zeeland Refinery, and the North Sea Port industrial corridor, plus the very large independent tank-storage sector.',
    regulatory:
      'The Dutch Warenwetbesluit drukapparatuur implements the Pressure Equipment Directive, with notified and accredited inspection bodies operating under ISO 17020 and Seveso III obligations applying to major-hazard sites. EN 13445, EN 13480, EN ISO 17635, 17636 and 17640 are the working standards, alongside API practice on internationally engineered plant.',
    marketNote:
      'The tank-storage and chemical cluster runs on third-party inspection bodies whose commercial position depends entirely on accreditation. For them the inspection evidence chain — qualified inspector, calibrated instrument, approved procedure revision — is the product, not the paperwork around it.',
    cities: ['rotterdam', 'antwerp', 'wilhelmshaven', 'ludwigshafen', 'leuna'],
  },
];

/** Build a lookup from city slug -> region, so city pages can link up to their hub. */
export function buildCityToRegion() {
  const map = new Map();
  for (const r of REGIONS) for (const c of r.cities) if (!map.has(c)) map.set(c, r);
  return map;
}

async function loadCityData() {
  return import(pathToFileURL(resolve(SRC, 'data/dt-city-data.mjs')).href);
}

const label = (slug) =>
  slug
    .split('-')
    .map((w) => (w.length <= 2 ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(' ');

/**
 * Aggregate the genuinely-unique per-city research already held in
 * dt-city-data.mjs into a regional picture. This is real aggregation of real
 * content — not a template with the region name swapped in.
 */
function regionalAssetParagraphs(region, ctx) {
  const withCtx = region.cities.filter((c) => ctx[c]);
  if (!withCtx.length) return '';
  return withCtx
    .slice(0, 8)
    .map((c) => `      <li><strong><a href="/digital-twin-${c}">${esc(label(c))}</a></strong> — ${esc(ctx[c].split('. ').slice(0, 2).join('. '))}.</li>`)
    .join('\n');
}

function cityLinkList(region, kind) {
  const prefix = kind === 'erp' ? '/ndt-erp-' : '/digital-twin-';
  return region.cities
    .map((c) => `<a href="${prefix}${c}">${esc(label(c))}</a>`)
    .join(' · ');
}

const nav = (kind) =>
  kind === 'erp'
    ? `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/erp">ERP</a><a href="/ndt-inspection-software">Inspection Software</a><a href="/inspection-management-software">Inspection Management</a><a href="/contact">Free Demo</a></nav></header>`
    : `  <header><nav aria-label="Main Navigation"><a href="/">Home</a><a href="/digital-twins">Digital Twins</a><a href="/asset-integrity-management-software">Asset Integrity Software</a><a href="/erp">ERP</a><a href="/contact">Free Demo</a></nav></header>`;

function erpHub(region, ctx) {
  const faqs = [
    {
      q: `Which ERP suits an inspection or NDT company in ${region.name}?`,
      a: `The deciding capabilities in ${region.name} are certification currency with hard lockout on lapse, instrument and reference-block calibration traceability, condition-driven inspection scheduling under API 510/570/653, offline field capture, and job costing at work-order level. Generic ERP and generic CMMS both model the money and the maintenance well and the personnel-qualification and calibration evidence badly, which is exactly the evidence a client audit tests. ${region.marketNote}`,
    },
    {
      q: `Which regulations and client audit regimes does it need to support in ${region.name}?`,
      a: `${region.regulatory} The platform holds the underlying evidence in structured, exportable form — qualification currency, calibration certificates and traceability, procedure revisions under document control, and inspection results with the provenance applicable at the time of test — so producing an audit pack is an export rather than a document hunt.`,
    },
    {
      q: `How long does implementation take?`,
      a: `Six to ten weeks for a typical 20–60 technician business: one to two weeks of discovery and migration mapping, three weeks configuring certification, calibration and work-order modules against your written practice, two weeks piloting on one client contract, then rollout. Historical certification records and calibration certificates are migrated as part of that, which is why the timeline is measured in weeks rather than days.`,
    },
    {
      q: `Can it run alongside the operator's own SAP or Maximo?`,
      a: `Yes, and that is the normal arrangement. The operator's system stays authoritative for their work management and cost; Atlantis runs your side of the relationship — crews, certifications, calibration, scheduling, reporting and job costing — and pushes findings across by REST API or supported connector so results land where the client expects them.`,
    },
  ];

  const body = `${nav('erp')}
  <main>
    <h1>${esc(region.erpKeyword.charAt(0).toUpperCase() + region.erpKeyword.slice(1))}</h1>
    <p><strong>Atlantis NDT ERP</strong> is inspection-management software for NDT service providers, inspection contractors, fabricators and QA departments operating in ${esc(region.name)}. It replaces the spreadsheet stack most inspection businesses run on — technician certification currency, equipment calibration control, inspection scheduling, multi-crew work orders, client asset registers, job costing and audit-ready document retention — on one Odoo-based platform.</p>

    <h2>Who operates in ${esc(region.name)}</h2>
    <p>${esc(region.operators)}</p>

    <h2>What governs inspection work here</h2>
    <p>${esc(region.regulatory)}</p>

    <h2>What actually decides the purchase in ${esc(region.name)}</h2>
    <p>${esc(region.marketNote)}</p>
    <ul>
      <li>Certification currency per method — SNT-TC-1A, ISO 9712, NAS 410 and client-specific approvals — with dispatch lockout the moment anything lapses.</li>
      <li>Calibration control with ISO 17025 traceability across flaw detectors, thickness gauges, probes, wedges, reference blocks and step wedges.</li>
      <li>Condition-driven inspection scheduling: next-inspection dates computed from measured corrosion rate under API 510/570/653 rather than a fixed calendar.</li>
      <li>Offline mobile field capture for confined spaces, vessels, offshore platforms and remote sites with no connectivity.</li>
      <li>Client-specific report templates rendered from one dataset, so the same survey issues three ways without re-keying.</li>
      <li>Work-order-level job costing including mobilisation, standby and travel, so per-contract margin is visible while the contract is running.</li>
      <li>Document control on procedures, written practices and technique sheets, with the revision in force on any historical inspection date recoverable.</li>
    </ul>

    <h2>Regional asset base in detail</h2>
    <ul>
${regionalAssetParagraphs(region, ctx)}
    </ul>

    <h2>ERP coverage across ${esc(region.name)}</h2>
    <p>${cityLinkList(region, 'erp')}</p>

    <h2>Frequently asked questions</h2>
    ${faqs.map((f) => `<div><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('\n    ')}

    <h2>See it on your own workflow</h2>
    <p>Free 30-minute walkthrough using your actual job types, certification matrix and client reporting formats, co-presented by an ASNT NDT Level III. Affordable, accessible, fully customizable — <a href="/contact">request a demo and a tailored quote</a>.</p>
    <p>Related: <a href="/ndt-inspection-software">NDT inspection software buyer's guide</a> · <a href="/inspection-management-software">inspection management software</a> · <a href="/erp">Atlantis NDT ERP</a> · <a href="/best-ndt-reporting-software-2026">NDT reporting software</a> · <a href="/digital-twin-${region.slug}">digital twin for asset integrity in ${esc(region.name)}</a>.</p>
  </main>`;

  return {
    path: `/ndt-erp-${region.slug}`,
    title: `Inspection and NDT ERP Software in ${regionTitle(region)} 2026 — Certification, Calibration, Scheduling`,
    description: `Inspection management ERP for NDT contractors and QA teams in ${regionTitle(region)}: certification currency with dispatch lockout, ISO 17025 calibration control, API 510/570/653 scheduling, multi-crew work orders and job costing. Free 30-minute demo.`,
    canonical: `${SITE}/ndt-erp-${region.slug}`,
    bodyContent: body,
    structuredData: faqSchemaFrom(faqs),
  };
}

function dtHub(region, ctx) {
  const faqs = [
    {
      q: `What does an asset integrity digital twin change for operators in ${region.name}?`,
      a: `It moves the integrity case from a spreadsheet snapshot to a live model. Every UT, PAUT, TOFD, RT, MT, PT and ET reading binds to a corrosion monitoring location with a persistent identity, so corrosion rates come from a real time series rather than an assumed default. RBI under API 580/581 then ranks on measured condition, and API 579 fitness-for-service runs against the stored thickness grid. ${region.marketNote}`,
    },
    {
      q: `Which codes and regulators does it have to satisfy in ${region.name}?`,
      a: `${region.regulatory} Every record carries provenance — which procedure revision was in force, which inspector performed the work and what their certification state was at that moment, and whether the instrument was in calibration — which is the bundle a regulator, insurer or client audit actually asks for.`,
    },
    {
      q: `Do we need to laser-scan the plant first?`,
      a: `No. Geometry can come from LiDAR or photogrammetry capture, drone survey, or from existing BIM, CAD, isometrics and P&IDs. Many first deployments start from isometrics and add scan-derived geometry later, because reconciling the CML register — not capturing geometry — is the task that actually gates the timeline.`,
    },
    {
      q: `How long until the first unit is live?`,
      a: `Ten to fourteen weeks is typical: two to three weeks of geometry capture or import, three to four weeks reconciling the CML register and importing historical thickness data, two to three weeks assigning damage mechanisms per API RP 571, then RBI and FFS configuration and integrity-team training. Subsequent units are considerably faster once the data model and conventions are set.`,
    },
  ];

  const body = `${nav('dt')}
  <main>
    <h1>Asset Integrity Digital Twin for ${regionTitle(region)}</h1>
    <p><strong>Atlantis Digital Twin</strong> puts measured inspection data, API 581 risk-based inspection scoring and API 579-1/ASME FFS-1 fitness-for-service on a single live 3D model of the asset, for operators and integrity contractors working in ${esc(region.name)}.</p>

    <h2>The asset base this is built for</h2>
    <p>${esc(region.operators)}</p>

    <h2>The regulatory and code environment</h2>
    <p>${esc(region.regulatory)}</p>

    <h2>Why it matters here specifically</h2>
    <p>${esc(region.marketNote)}</p>

    <h2>What the twin does</h2>
    <ul>
      <li>Binds every thickness reading and indication to a CML or TML with persistent identity, so a reading taken years apart is genuinely comparable.</li>
      <li>Assigns damage mechanisms per API RP 571 against actual process service — sulfidation, naphthenic acid corrosion, HTHA per API 941, wet H2S cracking, chloride SCC, CUI, MIC, erosion-corrosion — so inspection targets the mechanism that is credible for that circuit.</li>
      <li>Computes RBI under API 580/581 from measured corrosion rates rather than defaults, which changes which equipment is genuinely flagged.</li>
      <li>Runs API 579 Level 1 and Level 2 assessments — Part 4 general metal loss, Part 5 local metal loss, Part 9 crack-like flaws — against the stored thickness grid, rendering pass/fail zones spatially.</li>
      <li>Retains full provenance on every record: procedure revision, inspector certification state and instrument calibration state at the time of test.</li>
      <li>Integrates with SAP PM, Oracle eAM, IBM Maximo, ServiceNow, AVEVA PI and OSIsoft historians, with documented REST API and full bulk export.</li>
    </ul>

    <h2>Regional asset detail</h2>
    <ul>
${regionalAssetParagraphs(region, ctx)}
    </ul>

    <h2>Digital twin coverage across ${esc(region.name)}</h2>
    <p>${cityLinkList(region, 'dt')}</p>

    <h2>Frequently asked questions</h2>
    ${faqs.map((f) => `<div><h3>${esc(f.q)}</h3><p>${esc(f.a)}</p></div>`).join('\n    ')}

    <h2>Book a technical demo</h2>
    <p>Thirty minutes walked through your asset classes, your damage mechanisms and your integration stack, co-presented by an ASNT NDT Level III. Affordable, accessible, fully customizable — <a href="/contact">request a demo and a tailored quote</a>.</p>
    <p>Related: <a href="/asset-integrity-management-software">asset integrity management software</a> · <a href="/digital-twins">Atlantis Digital Twin platform</a> · <a href="/digital-twin-vendor-comparison">vendor comparison</a> · <a href="/digital-twin-roi-calculator">ROI calculator</a> · <a href="/ndt-erp-${region.slug}">inspection management ERP in ${esc(region.name)}</a>.</p>
  </main>`;

  return {
    path: `/digital-twin-${region.slug}`,
    title: `Asset Integrity Digital Twin in ${regionTitle(region)} 2026 — RBI, FFS and NDT Data on One Model`,
    description: `Digital twin for asset integrity in ${regionTitle(region)}: UT/PAUT readings bound to CMLs, API 581 RBI on measured corrosion rates, API 579 fitness-for-service on the stored thickness grid. First unit live in 10–14 weeks. Free technical demo.`,
    canonical: `${SITE}/digital-twin-${region.slug}`,
    bodyContent: body,
    structuredData: faqSchemaFrom(faqs),
  };
}

function regionTitle(region) {
  return region.name.replace(/^the /, '');
}

function faqSchemaFrom(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

/**
 * Build every region-hub route. These are applied as OVERRIDES over the existing
 * country/region URLs, so no new URL is created and existing equity is retained.
 */
export async function buildRegionHubRoutes() {
  const { digitalTwinLocationContext: ctx } = await loadCityData();
  const out = [];
  for (const r of REGIONS) {
    out.push(erpHub(r, ctx));
    out.push(dtHub(r, ctx));
  }
  return out;
}
