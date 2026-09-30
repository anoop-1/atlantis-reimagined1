/**
 * NDT software vendor facts — SOFTWARE-COMPETITIVE stream, 2026-09-29.
 * ─────────────────────────────────────────────────────────────────────────────
 * ONE source for every competitor statement on the comparison and alternatives
 * pages, so the same vendor is never described two ways on two pages.
 *
 * Every competitor cell below was read from the vendor's own public page (the
 * `src` URL) on 2026-09-29, or is phrased as "not stated — confirm in a demo"
 * where the vendor's page does not say. No competitor price is quoted anywhere:
 * where a vendor publishes pricing we say so and link it, nothing more.
 *
 * Atlantis cells come only from scripts/erp-apps-content-brief.md FEATURE FACTS.
 * Never add RBI/FFS, inspection-interval calculation, Gantt or barcode claims,
 * and never an Atlantis price.
 */

export const CHECKED = 'September 2026';

export const VENDORS = [
  {
    key: 'atlantis',
    name: 'Atlantis NDT ERP + NDT Reports',
    short: 'Atlantis',
    src: 'https://atlantisndt.com/erp',
    origin: 'Atlantis NDT, Houston and Hyderabad; ASNT NDT Level III led',
    deployment: 'Web-based ERP configured for each company, plus an installable offline field app',
    methods: '17 report types incl. UT, PAUT, TOFD, RT, CR, MT, PT, VT, ECT, IRIS, MFL, UTT, PMI, hardness',
    reporting: 'Draft, review, approve and send workflow with signatures; your own Word, Excel or PDF templates',
    certs: 'SNT-TC-1A, CP-189, ISO 9712, PCN and CSWIP records, vision tests, alerts 90 days before expiry',
    calibration: 'Instrument register by serial number, calibration certificates, due-date alerts',
    dispatch: 'Team assignments; blocks double-booking, warns on out-of-calibration equipment',
    erp: 'Full ERP: quotations, projects, timesheets, invoicing, purchasing, inventory, CRM',
    offline: 'Yes: drafts and photos stored on the device, synced later',
    pricing: 'Quote on request',
    bestFor: 'Companies that want reporting, certifications, calibration, dispatch and invoicing in one configured system',
  },
  {
    key: 'floodlight',
    name: 'Floodlight Software',
    short: 'Floodlight',
    src: 'https://floodlightsoft.com/ndt-reporting-software/',
    origin: 'Cary, North Carolina',
    deployment: 'Cloud platform with iOS and Android apps',
    methods: 'UT, RT, MT, PT, VT and ET report types',
    reporting: 'Custom form builder; reports referencing API 510/570/653, ASME V, B31.3, AWS D1.1',
    certs: 'Yes: technician certification tracking (SNT-TC-1A, ISO 9712 records)',
    calibration: 'Yes: equipment management and calibration records',
    dispatch: 'Yes: dispatch and scheduling',
    erp: 'Job quoting, invoicing and customer portal; REST API and accounting integration',
    offline: 'Yes: stores data locally and syncs on reconnect',
    pricing: 'Public pricing page; 14-day free trial',
    bestFor: 'North American service companies wanting a ready-made NDT operations platform quickly',
  },
  {
    key: 'agilendt',
    name: 'AgileNDT',
    short: 'AgileNDT',
    src: 'https://agilendt.com/',
    origin: 'Tain, Scotland; operating since 2011',
    deployment: 'Cloud-hosted, single-tenant; on-premise option offered',
    methods: 'MT, PT, UT, visual and rope-access inspection named on its site',
    reporting: 'Reporting module, technique sheets, AI report review',
    certs: 'Yes: Certifications module',
    calibration: 'Inventory and lifting-equipment modules; confirm calibration-expiry handling in a demo',
    dispatch: 'Work requests; confirm crew-scheduling depth in a demo',
    erp: 'Quotes, billing, inventory, customer portal; ERP and accounting integrations, SSO',
    offline: 'Describes offline-ready workflows',
    pricing: 'Public pricing, based on sites and report types',
    bestFor: 'Teams whose priority is controlled report review and release with an auditable trail',
  },
  {
    key: 'drive',
    name: 'DRIVE NDT',
    short: 'DRIVE NDT',
    src: 'https://www.drive-ndt.com/en/',
    origin: 'European vendor; references on its site include Applus+ and DEKRA',
    deployment: 'Cloud',
    methods: '11+ methods incl. RT, UT, VT, MT, PT, ET, AT',
    reporting: 'Automatic report creation with measured values imported directly',
    certs: 'Personnel management; confirm qualification-expiry logic in a demo',
    calibration: 'Equipment management; confirm calibration alerts in a demo',
    dispatch: 'Order management: record, assign and track inspection orders',
    erp: 'Cost calculation and billing; customer management',
    offline: 'Not stated on its site; confirm',
    pricing: 'Not published; demo on request',
    bestFor: 'European inspection bodies centred on order management and billing',
  },
  {
    key: 'zertify',
    name: 'Zertify (Spinnsol)',
    short: 'Zertify',
    src: 'https://spinnsol.com/products/non-destructive-testing-software/',
    origin: 'Spinnsol; offices in the USA, Australia, France, Qatar and India',
    deployment: 'Cloud SaaS; data entry on tablet or smartphone',
    methods: 'MT, PT, RT, ET, UT, VT',
    reporting: 'Report preparation with approval signatures; documentation referenced to codes',
    certs: 'Staff management; confirm certification-expiry tracking in a demo',
    calibration: 'Equipment management; confirm calibration tracking in a demo',
    dispatch: 'Inspection planning and job scheduling',
    erp: 'Project and customer management; invoicing not stated on the NDT page',
    offline: 'Vendor describes online and offline use',
    pricing: 'Not published; demo on request',
    bestFor: 'Companies that also certify lifting equipment and want one TIC platform',
  },
  {
    key: 'oms',
    name: 'OMS Software',
    short: 'OMS',
    src: 'https://omssoftware.com.au/ndt-software/',
    origin: 'Australia',
    deployment: 'Cloud LIMS, ERP and QMS in one platform',
    methods: 'UT, RT, MT, PT, VT, ET',
    reporting: 'Test reporting with QR-verified reports; built around ISO/IEC 17020 and 17025',
    certs: 'Personnel certifications',
    calibration: 'Calibration module',
    dispatch: 'Job management',
    erp: 'ERP and QMS modules, including CAPA and a WPS registry',
    offline: 'Not stated on its site; confirm',
    pricing: 'Not published on the pages reviewed; check with vendor',
    bestFor: 'Accredited labs and inspection bodies that need LIMS-style controls',
  },
  {
    key: 'inspectionbank',
    name: 'InspectionBank (Eclipse Scientific)',
    short: 'InspectionBank',
    src: 'https://www.eclipsescientific.com/InspectionBank/',
    origin: 'Eclipse Scientific, Canada; ultrasonic-focused toolmaker',
    deployment: 'Online server with a disconnected mobile client',
    methods: 'Inspection records by method; strongest around UT scan data',
    reporting: 'Visual reporting, indication recording, component visualisation, client web portal',
    certs: 'Employee training, certification and experience records',
    calibration: 'Not stated on its page; confirm',
    dispatch: 'Personnel scheduling',
    erp: 'Quoting and invoicing not described',
    offline: 'Yes: disconnected client syncs when reconnected',
    pricing: 'Not published',
    bestFor: 'Advanced UT teams that need scan data, procedures and techniques controlled together',
  },
  {
    key: 'waygate',
    name: 'Waygate InspectionWorks',
    short: 'InspectionWorks',
    src: 'https://www.bakerhughes.com/waygate-technologies/ndt-software',
    origin: 'Waygate Technologies, a Baker Hughes business',
    deployment: 'Cloud data platform linked to InspectionWorks-enabled devices',
    methods: 'Device-centred: remote visual, radiography, CT and other Waygate families',
    reporting: 'Inspection data storage, analysis and sharing; AI-assisted defect recognition',
    certs: 'Not the platform focus',
    calibration: 'Not the platform focus',
    dispatch: 'Not the platform focus',
    erp: 'No: an inspection-data platform, not business operations',
    offline: 'Depends on the device and application',
    pricing: 'Contact sales',
    bestFor: 'Operators and OEMs standardised on Waygate instruments',
  },
  {
    key: 'therightsw',
    name: 'NDT Reporting Software (The Right Software)',
    short: 'NDT Reporting Software',
    src: 'https://therightsw.com/ndt-software/',
    origin: 'The Right Software, a software development firm',
    deployment: 'Cloud',
    methods: 'Seven NDT report types',
    reporting: 'Dropdown-driven report forms, PDF export, built-in email to clients',
    certs: 'Not stated',
    calibration: 'Not stated',
    dispatch: 'Jobs and job requests; admin, manager, inspector and client roles',
    erp: 'Not stated',
    offline: 'Not stated',
    pricing: 'Check with vendor',
    bestFor: 'Small teams that only need standard report forms online',
  },
];

export const byKey = Object.fromEntries(VENDORS.map((v) => [v.key, v]));

export const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Standard comparison table. cols = array of [header, field]. */
export function vendorTable(keys, cols, caption) {
  const head = cols.map(([h]) => `<th scope="col">${esc(h)}</th>`).join('');
  const rows = keys.map((k) => {
    const v = byKey[k];
    if (!v) throw new Error('unknown vendor ' + k);
    const cells = cols.map(([, f], i) => {
      const val = f === 'name' ? v.name : v[f];
      if (val == null) throw new Error(`vendor ${k} missing ${f}`);
      return i === 0 ? `<th scope="row">${esc(val)}</th>` : `<td>${esc(val)}</td>`;
    }).join('');
    return `<tr>${cells}</tr>`;
  }).join('');
  return `<div class="table-scroll"><table><caption>${esc(caption)}</caption><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

export function sourcesList(keys) {
  return '<ul>' + keys.filter((k) => k !== 'atlantis').map((k) => {
    const v = byKey[k];
    return `<li>${esc(v.name)}: <a href="${v.src}" rel="nofollow noopener">${esc(v.src.replace(/^https:\/\//, ''))}</a></li>`;
  }).join('') + '</ul>';
}

export const FULL_COLS = [
  ['Platform', 'name'],
  ['Deployment', 'deployment'],
  ['NDT methods', 'methods'],
  ['Reporting', 'reporting'],
  ['Cert tracking', 'certs'],
  ['Calibration', 'calibration'],
  ['Dispatch', 'dispatch'],
  ['ERP / invoicing', 'erp'],
  ['Offline mobile', 'offline'],
  ['Pricing model', 'pricing'],
];

export const cta = (subject, text) =>
  `<a href="/contact?service=erp&amp;subject=${encodeURIComponent(subject)}">${esc(text)}</a>`;
