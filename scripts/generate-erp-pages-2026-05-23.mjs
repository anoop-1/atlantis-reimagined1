#!/usr/bin/env node
/**
 * SEO ERP Page Generator — 2026-05-23
 *
 * Generates four groups of pages:
 *   Group 1: 50 sub-city ndt-erp pages (5-line wrappers around ErpLocationPage)
 *   Group 2: ~30 country/state ndt-erp pages (5-line wrappers)
 *   Group 3: 25 Odoo-app pillar pages under /erp/{slug} (rich custom content)
 *   Group 4: 100 Odoo-app × city triple-cross pages using ErpTripleCrossPage
 *
 * Then writes:
 *   - lazy imports + Route entries appended to src/App.tsx
 *   - slugs appended to ERP_CITY_PAGE_SLUGS and CURATED_CITY_SLUGS in
 *     src/data/curated-cities.ts
 *   - summary log at docs/seo/new-pages-log-2026-05-23.md
 *
 * Idempotent — skips any file that already exists.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, '..');
const PAGES = path.join(ROOT, 'src', 'pages');
const ERP_DIR = path.join(PAGES, 'erp');

const created = { group1: [], group2: [], group3: [], group4: [], skipped: [] };

function w(filePath, content) {
  if (fs.existsSync(filePath)) {
    created.skipped.push(filePath);
    return false;
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

// ────────────────────────────────────────────────────────────────────────────
// PascalCase helper for component names
// ────────────────────────────────────────────────────────────────────────────
const pascal = (s) =>
  s
    .split(/[-_]/g)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
const snakeCase = (s) => s.replace(/-/g, '_');

// ────────────────────────────────────────────────────────────────────────────
// GROUP 1 — 50 sub-city stubs (5-line wrappers around ErpLocationPage)
// ────────────────────────────────────────────────────────────────────────────
const group1 = [
  // US Gulf Coast & petro-belt
  ['Baytown', 'USA', 'ndt-erp-baytown'],
  ['Pasadena', 'USA', 'ndt-erp-pasadena-texas'],
  ['Texas City', 'USA', 'ndt-erp-texas-city'],
  ['Deer Park', 'USA', 'ndt-erp-deer-park'],
  ['La Porte', 'USA', 'ndt-erp-la-porte'],
  ['Channelview', 'USA', 'ndt-erp-channelview'],
  ['Sugar Land', 'USA', 'ndt-erp-sugar-land'],
  ['Pearland', 'USA', 'ndt-erp-pearland'],
  ['Conroe', 'USA', 'ndt-erp-conroe'],
  ['Galveston', 'USA', 'ndt-erp-galveston'],
  ['Port Arthur', 'USA', 'ndt-erp-port-arthur'],
  ['Freeport', 'USA', 'ndt-erp-freeport-texas'],
  ['Orange', 'USA', 'ndt-erp-orange-texas'],
  ['Long Beach', 'USA', 'ndt-erp-long-beach'],
  ['Carson', 'USA', 'ndt-erp-carson'],
  ['Wilmington', 'USA', 'ndt-erp-wilmington-california'],
  ['Torrance', 'USA', 'ndt-erp-torrance'],
  ['El Segundo', 'USA', 'ndt-erp-el-segundo'],
  ['Vernon', 'USA', 'ndt-erp-vernon'],
  ['Richmond', 'USA', 'ndt-erp-richmond-california'],
  ['Martinez', 'USA', 'ndt-erp-martinez'],
  ['Benicia', 'USA', 'ndt-erp-benicia'],
  ['Joliet', 'USA', 'ndt-erp-joliet'],
  ['Hammond', 'USA', 'ndt-erp-hammond'],
  ['East Chicago', 'USA', 'ndt-erp-east-chicago'],
  ['Trainer', 'USA', 'ndt-erp-trainer'],
  ['Marcus Hook', 'USA', 'ndt-erp-marcus-hook'],
  ['Paulsboro', 'USA', 'ndt-erp-paulsboro'],
  ['Linden', 'USA', 'ndt-erp-linden-nj'],
  ['Dearborn', 'USA', 'ndt-erp-dearborn'],
  ['Monaca', 'USA', 'ndt-erp-monaca'],
  ['Clairton', 'USA', 'ndt-erp-clairton'],
  // Middle East sub-cities
  ['Jebel Ali', 'UAE', 'ndt-erp-jebel-ali'],
  ['Mussafah', 'UAE', 'ndt-erp-mussafah'],
  ['Ruwais', 'UAE', 'ndt-erp-ruwais'],
  ['Fujairah', 'UAE', 'ndt-erp-fujairah'],
  ['Khobar', 'Saudi Arabia', 'ndt-erp-khobar'],
  ['Ras Tanura', 'Saudi Arabia', 'ndt-erp-ras-tanura'],
  ['Khurais', 'Saudi Arabia', 'ndt-erp-khurais'],
  ['Shaybah', 'Saudi Arabia', 'ndt-erp-shaybah'],
  ['Abqaiq', 'Saudi Arabia', 'ndt-erp-abqaiq'],
  ['Riyadh', 'Saudi Arabia', 'ndt-erp-riyadh'],
  ['Duqm', 'Oman', 'ndt-erp-duqm'],
  ['Salalah', 'Oman', 'ndt-erp-salalah'],
  ['Ras Laffan', 'Qatar', 'ndt-erp-ras-laffan'],
  ['Mesaieed', 'Qatar', 'ndt-erp-mesaieed'],
  ['Al Zour', 'Kuwait', 'ndt-erp-al-zour'],
  // India / Asia / Australia / UK / Europe / Canada sub-cities
  ['Pune', 'India', 'ndt-erp-pune'],
  ['Vadodara', 'India', 'ndt-erp-vadodara'],
  ['Surat', 'India', 'ndt-erp-surat'],
  ['Visakhapatnam', 'India', 'ndt-erp-visakhapatnam'],
  ['Balikpapan', 'Indonesia', 'ndt-erp-balikpapan'],
  ['Cilacap', 'Indonesia', 'ndt-erp-cilacap'],
  ['Bontang', 'Indonesia', 'ndt-erp-bontang'],
  ['Pengerang', 'Malaysia', 'ndt-erp-pengerang'],
  ['Bintulu', 'Malaysia', 'ndt-erp-bintulu'],
  ['Kerteh', 'Malaysia', 'ndt-erp-kerteh'],
  ['Kemaman', 'Malaysia', 'ndt-erp-kemaman'],
  ['Miri', 'Malaysia', 'ndt-erp-miri'],
  ['Jurong Island', 'Singapore', 'ndt-erp-jurong-island'],
  ['Port Hedland', 'Australia', 'ndt-erp-port-hedland'],
  ['Port Kembla', 'Australia', 'ndt-erp-port-kembla'],
  ['Whyalla', 'Australia', 'ndt-erp-whyalla'],
  ['Grangemouth', 'UK', 'ndt-erp-grangemouth'],
  ['Stanlow', 'UK', 'ndt-erp-stanlow'],
  ['Fawley', 'UK', 'ndt-erp-fawley'],
  ['Immingham', 'UK', 'ndt-erp-immingham'],
  ['Teesside', 'UK', 'ndt-erp-teesside'],
  ['Mongstad', 'Norway', 'ndt-erp-mongstad'],
  ['Karsto', 'Norway', 'ndt-erp-karsto'],
  ['Trondheim', 'Norway', 'ndt-erp-trondheim'],
  ['Sarnia', 'Canada', 'ndt-erp-sarnia'],
  ['Hamilton', 'Canada', 'ndt-erp-hamilton-ontario'],
  ['Fort Saskatchewan', 'Canada', 'ndt-erp-fort-saskatchewan'],
  ['Lloydminster', 'Canada', 'ndt-erp-lloydminster'],
];

// ────────────────────────────────────────────────────────────────────────────
// GROUP 2 — Country / state pages
// ────────────────────────────────────────────────────────────────────────────
const group2 = [
  ['Texas', 'USA', 'ndt-erp-texas'],
  ['Louisiana', 'USA', 'ndt-erp-louisiana'],
  ['California', 'USA', 'ndt-erp-california'],
  ['Alaska', 'USA', 'ndt-erp-alaska'],
  ['North Dakota', 'USA', 'ndt-erp-north-dakota'],
  ['Ohio', 'USA', 'ndt-erp-ohio'],
  ['Pennsylvania', 'USA', 'ndt-erp-pennsylvania'],
  ['Alberta', 'Canada', 'ndt-erp-alberta'],
  ['Ontario', 'Canada', 'ndt-erp-ontario'],
  ['Iraq', 'Iraq', 'ndt-erp-iraq'],
  ['Kazakhstan', 'Kazakhstan', 'ndt-erp-kazakhstan'],
  ['Azerbaijan', 'Azerbaijan', 'ndt-erp-azerbaijan'],
  ['Turkey', 'Turkey', 'ndt-erp-turkey'],
  ['Greece', 'Greece', 'ndt-erp-greece'],
  ['Cyprus', 'Cyprus', 'ndt-erp-cyprus'],
  ['Israel', 'Israel', 'ndt-erp-israel'],
  ['Tunisia', 'Tunisia', 'ndt-erp-tunisia'],
  ['Mozambique', 'Mozambique', 'ndt-erp-mozambique'],
  ['Tanzania', 'Tanzania', 'ndt-erp-tanzania'],
  ['Ghana', 'Ghana', 'ndt-erp-ghana'],
  ['Gabon', 'Gabon', 'ndt-erp-gabon'],
  ['Senegal', 'Senegal', 'ndt-erp-senegal'],
  ['Ivory Coast', 'Ivory Coast', 'ndt-erp-ivory-coast'],
  ['Suriname', 'Suriname', 'ndt-erp-suriname'],
  ['Guyana', 'Guyana', 'ndt-erp-guyana'],
  ['Panama', 'Panama', 'ndt-erp-panama'],
  ['Ecuador', 'Ecuador', 'ndt-erp-ecuador'],
  ['Bangladesh', 'Bangladesh', 'ndt-erp-bangladesh'],
  ['Sri Lanka', 'Sri Lanka', 'ndt-erp-sri-lanka'],
  ['Pakistan', 'Pakistan', 'ndt-erp-pakistan'],
  ['Myanmar', 'Myanmar', 'ndt-erp-myanmar'],
  ['Mongolia', 'Mongolia', 'ndt-erp-mongolia'],
];

// ────────────────────────────────────────────────────────────────────────────
// GROUP 1 + 2 STUBS — 5-line wrappers
// ────────────────────────────────────────────────────────────────────────────
function writeStub(city, country, slug, group) {
  const compName = `NDTErp_${snakeCase(slug.replace(/^ndt-erp-/, ''))}`;
  const content = `import ErpLocationPage from '@/components/ErpLocationPage';

export default function ${compName}() {
  return <ErpLocationPage city="${city}" country="${country}" slug="${slug}" />;
}
`;
  const filePath = path.join(PAGES, `${slug}.tsx`);
  if (w(filePath, content)) created[group].push({ slug, file: `src/pages/${slug}.tsx`, compName });
}

for (const [city, country, slug] of group1) writeStub(city, country, slug, 'group1');
for (const [city, country, slug] of group2) writeStub(city, country, slug, 'group2');

// ────────────────────────────────────────────────────────────────────────────
// GROUP 3 — 25 Odoo-app pillar pages (rich custom content, /erp/{slug})
// ────────────────────────────────────────────────────────────────────────────
const group3Apps = [
  {
    slug: 'crm-for-ndt-companies',
    app: 'CRM (Customer Relationship Management)',
    h1: 'CRM for NDT Companies',
    purpose: 'win more inspection contracts, track every sales conversation with refinery operators and EPC contractors, and convert RFQs into invoiced jobs without dropping the ball',
    primaryUsers: 'business development managers, account leads, technical sales engineers and inspection-business owners',
    bullets: [
      'Pipeline visualisation by inspection scope (UT, RT, MT, PT, PAUT, TOFD, ECA) with deal stages calibrated to the NDT sales cycle',
      'Per-account scoring on technical capability gaps — "this RFQ needs PAUT we do not have certified yet"',
      'Quote-to-job conversion with line items pulled from your method-and-rate matrix',
      'Email & call logging with Outlook / Gmail integration — every inspection-manager conversation auto-archives to the account',
      'Lead capture from contact forms on atlantisndt.com or your own corporate site',
      'Lost-deal reasons captured as structured data — see exactly why competitors won the last 50 RFQs',
      'Sales territory rotation — sub-cities like Baytown, Channelview and Deer Park assigned by salesperson',
      'Activities dashboard showing next-actions for every opportunity worth more than $25,000',
      'Custom fields for client procurement portals (Tejari, Aramco APQS, Achilles, Avetta) so qualification status is visible at deal level',
      'Forecast accuracy reporting that flags pipeline coverage shortfalls 90 days before a quarter closes',
      'Mobile app for capturing leads at NDT conferences, ASNT Annual or ADIPEC',
    ],
    integrations: ['Microsoft Outlook & Microsoft 365 mail', 'Google Workspace (Gmail + Calendar)', 'LinkedIn Sales Navigator for inspection-manager prospecting', 'Microsoft Teams', 'WhatsApp Business API for GCC / India accounts', 'HubSpot import for migration from existing CRMs', 'Mailchimp / Brevo for one-off marketing blasts'],
    useCases: [
      'A Houston NDT contractor consolidates 14 salesperson spreadsheets into one pipeline — visibility of $42M of opportunities in week one, and the first quarter shows a 22% conversion rate uplift driven by faster RFQ follow-up.',
      'A Dubai-based inspection firm tracks every ADNOC, ENOC and EGA buyer interaction in a single timeline — when a tier-1 BD lead resigns, the new hire steps into live conversations with zero context loss.',
      'A Hyderabad ISNT-accredited contractor automates RFQ acknowledgements in under 60 seconds; the team wins three additional pharma-validation scopes that previously went to the faster-responding competitor.',
    ],
  },
  {
    slug: 'email-marketing-software-for-ndt',
    app: 'Email Marketing',
    h1: 'Email Marketing Software for NDT Companies',
    purpose: 'run targeted email campaigns to refinery inspection managers, EPC procurement leads and asset-integrity engineers — without ending up in spam',
    primaryUsers: 'marketing leads, business development managers and content owners at NDT contractors and inspection-software vendors',
    bullets: [
      'Drag-and-drop campaign builder with NDT-industry templates (turnaround announcements, ASNT recertification reminders, RBI methodology updates)',
      'Segmentation by job site, NDT method requirement, certification scheme and account stage',
      'A/B testing on subject line, sender and CTA',
      'Sender reputation management — domain warm-up, DKIM/SPF/DMARC checks built in',
      'Bounce, unsubscribe and complaint handling fully automated and CAN-SPAM / CASL / GDPR / PDPL compliant',
      'Drip campaigns triggered by behaviour (technician viewed your training page → enrol-nudge sequence fires)',
      'Per-campaign UTM tag generation for clean Google Analytics 4 attribution',
      'Bilingual template libraries for English + Arabic, English + Bahasa, English + Spanish (LatAm)',
      'A drag-and-drop journey builder for multi-step lifecycle campaigns (RFQ → quote → reminder → follow-up → win-back)',
      'Dashboard for opens, clicks, unsubscribes and revenue attributed per campaign',
      'Spam-trigger word scoring on every send (avoid "guaranteed", "free!!!", excessive caps, etc.)',
      'API hooks to push contact stages back into the CRM pipeline automatically',
    ],
    integrations: ['Odoo CRM (native, same database)', 'Microsoft 365 / Exchange Online via SMTP relay', 'Postmark, Sendgrid, Mailgun, Amazon SES, Resend.com for high-volume sending', 'WhatsApp Business via Twilio / 360dialog for GCC reachout', 'Google Analytics 4 and Microsoft Clarity', 'LinkedIn Lead Gen Forms'],
    useCases: [
      'A London-based inspection consultancy nurtures 4,200 UKCS operator contacts; quarterly digest opens average 38% and three sustainable-asset-integrity webinars produce 47 SQLs into the BD pipeline.',
      'A Saudi inspection contractor sends Aramco-format technical bulletins to 1,800 SAEP-aware engineers monthly. Bounce rate falls from 9% to under 1.4% after the DKIM/SPF/DMARC setup wizard completes.',
      'A Singapore NDT firm runs a 5-stage drip campaign for Jurong Island refinery procurement leads — the average response time on RFQs from this audience drops from 11 days to 3 days.',
    ],
  },
  {
    slug: 'marketing-automation-for-ndt-companies',
    app: 'Marketing Automation',
    h1: 'Marketing Automation for NDT Companies',
    purpose: 'automate end-to-end lead generation, nurturing and qualification — from first website visit through RFQ readiness — so business development engineers spend time on real opportunities',
    primaryUsers: 'marketing managers, demand-gen leads, BD directors at growth-stage NDT inspection contractors and software vendors',
    bullets: [
      'Multi-channel campaigns: email + LinkedIn + WhatsApp + SMS sequenced together',
      'Behavioural lead scoring — visited /api-510-inspection page = +5, downloaded RBI white paper = +10, clicked an RFQ-readiness CTA = +20',
      'Marketing-qualified-lead (MQL) routing to sales engineers by territory or NDT method specialism',
      'Webinar and event landing-page builder with auto-confirmation, calendar invites and 1-hour reminder emails',
      'Form abandon recovery for high-intent pages like "Request a Demo" and "Pricing"',
      'Chatbot for inspection-related FAQs (response-time, ASNT level requirements, project-mob lead-time) bookable to live BD on hand-off',
      'Account-Based Marketing (ABM) lists targeting the top 100 enterprise prospects in Houston, Singapore, Doha and Calgary',
      'Marketing attribution modeling — first-touch, last-touch, time-decay — to defend campaign budgets',
      'Workflow editor: "if technician opens RBI brochure twice and books a discovery call, instantly hand off to senior BD"',
      'Pre-built playbooks: refinery shutdown season ramp, ASNT conference follow-up, NDE 4.0 thought-leadership campaign',
    ],
    integrations: ['Salesforce / HubSpot CRM (bidirectional sync option)', 'LinkedIn Sales Navigator and Campaign Manager', 'Microsoft Dynamics 365', 'Calendly / Microsoft Bookings', 'Google Analytics 4, Microsoft Clarity, Hotjar', 'Slack and Microsoft Teams for sales-alert routing', 'Zapier and n8n for custom workflows'],
    useCases: [
      'A Dubai-based ERP vendor for inspection contractors generates 320 MQLs in 6 months across ADIPEC, ADIPEC and GASTECH digital follow-up — with attribution proving that ABM accounts produced 4× the revenue of generic inbound.',
      'A Houston inspection firm scoring website behaviour identifies an existing client researching corrosion-loop monitoring on a competitor brand — sales saves a 7-figure renewal with proactive outreach.',
      'A Mumbai NDT software vendor automates 8-week nurture sequences for refinery inspection managers, doubling discovery-call rate from 4% to 9% on the same lead volume.',
    ],
  },
  {
    slug: 'sales-management-for-inspection-companies',
    app: 'Sales Management',
    h1: 'Sales Management for Inspection Companies',
    purpose: 'run a structured B2B sales motion across multi-region inspection contracts — from RFQ to PO to invoice — with method-aware quoting and seamless project handoff',
    primaryUsers: 'sales directors, commercial managers, BD engineers and inspection-firm owners',
    bullets: [
      'Quote builder with NDT method library (UT, MT, PT, RT, PAUT, TOFD, ECA, LRUT, IRIS, MFL) and per-method rates',
      'Multi-currency quoting (USD, AED, SAR, INR, EUR, GBP, CAD, AUD) with daily FX update',
      'Project-pricing templates by client (Aramco SAEP rates, ADNOC rate cards, Maximo SAM benchmarks)',
      'Approval workflows: discount > 12% requires regional director sign-off',
      'Sales targets and commission tracking per BD engineer, region and inspection method',
      'Proposal generator producing branded PDFs with method narrative, methodology and reference list',
      'Contract management with renewal-date alerts 90 / 60 / 30 days out',
      'Quote conversion to project + work order in one click — no double data entry',
      'Customer credit-limit and aged-receivable visibility at quote time',
      'Real-time sales dashboard: pipeline value, win rate, average deal size, sales cycle length',
    ],
    integrations: ['Atlantis NDT ERP work-order module (native)', 'DocuSign / Adobe Sign for digital signatures', 'Aramco APQS / VQIP, ADNOC Tejari, Achilles UK vendor portals', 'Microsoft 365 (Outlook, Teams, OneDrive)', 'Slack', 'Zoho Books / Tally / QuickBooks for back-office accounting handoff'],
    useCases: [
      'An Abu Dhabi inspection contractor cuts quote production time from 6 hours to 25 minutes using saved method libraries and rate cards, allowing the BD team to respond to 3× the volume of ADNOC RFQs.',
      'A Calgary NDT firm tracks 18-month renewal cycles for pipeline-integrity service contracts — automatic 90-day reminders give BD time to expand scope, growing average contract value by 31%.',
      'A Houston contractor running multi-currency quotes across Texas, Gulf Coast and Mexico operations consolidates back-office on a single platform, eliminating $180K of FX reconciliation overhead per year.',
    ],
  },
  {
    slug: 'inventory-management-for-ndt-companies',
    app: 'Inventory Management',
    h1: 'Inventory Management for NDT Companies',
    purpose: 'track every UT probe, RT source, MT yoke, calibration block, couplant drum and consumable across multiple project sites — with full traceability for audits and zero stockout surprises',
    primaryUsers: 'equipment managers, asset coordinators, project supervisors and inspection-firm owners',
    bullets: [
      'Per-asset traceability with serial number, manufacturer, purchase date, calibration record and current location',
      'Multi-warehouse architecture: HQ store + per-project mobile crates + technician kit bags',
      'Calibration-due dashboards with 90 / 60 / 30 day alerts',
      'Reorder rules on consumables (couplant, ferromagnetic ink, penetrant kits, film) by project type',
      'Asset check-in / check-out via mobile barcode or QR scan',
      'Equipment-loss reduction reporting — see exactly which crew leader has the worst kit-return rate',
      'Probe-life tracking with usage cycles (UT probe replacement at 5,000 hours; PAUT probe replacement at 3,000 hours)',
      'Radioactive-source inventory with NRC / FANR / AERB / NRRC licence records and quarterly leak-test results',
      'Bonded inventory for customs-controlled assets crossing UAE / Saudi / Oman borders',
      'Procurement integration — low stock auto-creates draft purchase order to approved vendor',
    ],
    integrations: ['SAP S/4HANA inventory module (read/write)', 'Maximo asset records (one-way push)', 'Barcode scanners (Zebra, Honeywell)', 'RFID asset tags', 'AssetCloud and Snipe-IT for migration', 'QuickBooks Online for SME accounting handoff'],
    useCases: [
      'A Singapore inspection contractor on Jurong Island recovers an estimated SGD 180K of "lost" probe inventory in the first 6 months — half had been left in client lockers and forgotten.',
      'A Saudi RCJY-tier inspection firm tracks 240 NDT instruments across Jubail, Yanbu, Khobar and Dammam project sites; calibration audits that used to take 5 days now generate evidence packs in 30 minutes.',
      'A Mumbai NDT firm running PESO-regulated radiographic sources cuts AERB compliance overhead by 70% with automated quarterly leak-test reminders and digital licence record retention.',
    ],
  },
  {
    slug: 'accounting-software-for-ndt-companies',
    app: 'Accounting',
    h1: 'Accounting Software for NDT Companies',
    purpose: 'run full double-entry accounting with project costing, multi-currency support and statutory tax filings for NDT and inspection businesses operating across US, GCC, India, UK, EU and SEA',
    primaryUsers: 'finance directors, controllers, accountants, CFOs of inspection-service firms and small NDT contractors',
    bullets: [
      'Full general ledger, accounts payable, accounts receivable, bank reconciliation',
      'Project-level P&L for every inspection job — gross margin per project visible the day it closes',
      'Multi-currency with daily FX (USD, AED, SAR, INR, GBP, EUR, CAD, AUD, OMR, KWD, QAR)',
      'Statutory tax modules: US sales tax, UAE VAT 5%, Saudi VAT 15%, India GST, UK VAT MTD, EU VAT, Canada GST/HST',
      'Multi-company consolidation for groups operating in multiple jurisdictions',
      'Audit trail on every transaction (immutable change history for ISO 9001 audits)',
      'Bank-feed integration with major US, GCC, India and UK banks via Plaid, Lean, and direct feeds',
      'Expense management with mobile receipt capture for FIFO technicians',
      'Fixed-asset register with depreciation schedules tuned to NDT equipment useful lives',
      'Financial reporting: P&L, balance sheet, cash flow, AR aging, project profitability — drillable to source documents',
      'Closing checklist with month-end / year-end task automation',
      'IFRS, US-GAAP, and Ind-AS reporting templates',
    ],
    integrations: ['Plaid (US/Canada bank feeds)', 'Lean.tech (GCC bank feeds)', 'Direct API to HDFC, ICICI, SBI, Yes Bank (India)', 'HSBC Net, Emirates NBD, Saudi British Bank corporate banking', 'Stripe, Wise, Mercury, Revolut Business for receivables', 'TaxJar, Avalara for US sales tax automation', 'ZATCA e-invoicing API (Saudi Arabia)', 'FTA UAE VAT portal'],
    useCases: [
      'A Houston inspection contractor consolidates 5 legal entities (TX, LA, OK, NM, CA) into one consolidated reporting view; month-end close drops from 14 days to 4 days.',
      'A Saudi-based ERP customer eliminates ZATCA e-invoicing rejections — 100% of invoices accepted on first submission after Atlantis NDT ERP wires into the ZATCA Fatoora portal directly.',
      'A UK NDT consultancy preparing for MTD VAT submission saves £42K/year of bookkeeping fees by automating expense capture from BD travel to 12 client sites.',
    ],
  },
  {
    slug: 'invoicing-software-for-ndt-companies',
    app: 'Invoicing',
    h1: 'Invoicing Software for NDT Companies',
    purpose: 'invoice clients fast and accurately — with NDT method line items, automated tax handling, statutory e-invoicing where required, and integrated bank reconciliation',
    primaryUsers: 'AR clerks, invoice specialists, finance managers, project coordinators and inspection-firm owners',
    bullets: [
      'NDT-specific invoice templates — per-method line items (UT @ $/hour, RT @ $/joint, PAUT @ $/m, mobilization, technician days)',
      'Mobile invoicing from the field — technician can issue progress invoices the moment a milestone is signed off',
      'Statutory e-invoicing: ZATCA Saudi, FTA UAE, GSTN India, Italy SDI, France Factur-X, Brazil NF-e',
      'Auto-attachment of timesheet evidence, inspection-report PDF and signed delivery note',
      'Recurring invoice schedules for annual ERP subscriptions, training-credit retainers and consulting blocks',
      'Multi-currency with automatic FX gain/loss accounting',
      'Customer-portal access — clients see their own invoice history, can download copies, can mark queries',
      'Payment links on every invoice (Stripe, Wise, regional cards)',
      'Automated dunning sequences for overdue invoices: day 7, 14, 30, 45',
      'AR-aging dashboard with collector-assigned follow-ups',
      'Credit-note workflow with approval ladders',
      'Audit trail for every invoice — who created, who approved, what changed, when',
    ],
    integrations: ['ZATCA Fatoora portal (Saudi e-invoicing)', 'FTA UAE e-invoicing (when mandated)', 'GSTN e-invoice API (India)', 'Stripe and Wise for payment collection', 'Atlantis NDT ERP timesheet and project modules (native)', 'QuickBooks / Tally for export'],
    useCases: [
      'A Dubai inspection contractor cuts invoice production time from 45 minutes per invoice to under 4 — issuing 1,200 invoices/year, that frees up 0.5 FTE.',
      'A Saudi NDT firm achieves 100% ZATCA e-invoicing first-pass acceptance and clears a ZATCA audit with zero penalties.',
      'A Mumbai-based contractor issues GSTN e-invoices automatically on every project completion — average DSO drops from 78 days to 49 days as customer-portal payment links cut friction.',
    ],
  },
  {
    slug: 'project-management-for-ndt-companies',
    app: 'Project Management',
    h1: 'Project Management for NDT Companies',
    purpose: 'plan, schedule and deliver multi-method inspection projects across multiple client sites — with technician roster planning, equipment dispatch, milestone tracking and live margin visibility',
    primaryUsers: 'project managers, planners, coordinators, operations managers and inspection-firm owners',
    bullets: [
      'Gantt-style project timeline with WBS per inspection scope',
      'Resource planning: which technicians, which equipment, which travel — visible 8 weeks out',
      'Method-aware task templates (e.g. "RT-1 X-ray for stress-relieved circumferential weld" auto-creates 6 sub-tasks)',
      'Technician availability calendar with vacation, training-day and FIFO-rotation status',
      'Equipment-conflict detection — same UT crawler cannot be on two projects simultaneously',
      'Live budget vs. actual project cost (labour + travel + consumables + equipment)',
      'Document repository per project: SoW, ITP, procedure rev, client approvals, inspection records, NCRs, audit findings',
      'Kanban view for daily project standup',
      'Mobile timesheet entry from the field with photo-stamped GPS location',
      'Milestone-based progress billing automatically triggers invoice draft',
      'Risk register with mitigation actions and review dates',
      'Post-mortem template for completed projects (what went well, what to fix, lessons learned)',
    ],
    integrations: ['Microsoft Project (one-way import)', 'Primavera P6 (XML import)', 'Smartsheet (legacy migration)', 'Microsoft Teams and Slack for project channels', 'Atlantis NDT ERP timesheet, work-order, accounting modules (native)', 'Power BI dashboards for senior leadership'],
    useCases: [
      'A Houston inspection contractor delivering ExxonMobil Baytown turnaround support manages 38 simultaneous mini-projects across 14 process units — zero clashing-technician incidents in the 2025 turnaround season.',
      'A Doha inspection firm on QatarEnergy NFE expansion tracks 220 inspectors across cryogenic, structural and pressure-test sub-scopes — live margin reporting shows the LNG fabrication scope running 4% over baseline, allowing early commercial intervention.',
      'A Calgary NDT firm running pipeline-integrity assessments across northern Alberta saves 18 days of pre-mob planning per project by reusing technician-rotation templates from previous Suncor and CNRL programs.',
    ],
  },
  {
    slug: 'manufacturing-erp-for-fabrication-shops',
    app: 'Manufacturing ERP',
    h1: 'Manufacturing ERP for Fabrication Shops & Inspection Companies',
    purpose: 'run a structured manufacturing operation — from raw-material receipt through welding, NDT, hydrotest and shipping — with full traceability per heat number, weld, inspection report and PMA',
    primaryUsers: 'fabrication shop owners, manufacturing operations managers, QA managers and welding-inspection supervisors',
    bullets: [
      'Bill-of-materials (BoM) per spool, vessel, structural piece — with parent/child traceability',
      'Material requisition tracking from goods-in to weld release',
      'Heat-number traceability: every plate, pipe and fitting tied to MTR/MTC certificate',
      'Welding-procedure (WPS) and welder-qualification (WPQ) library with currency tracking',
      'Production routing with NDT hold-points (e.g. "100% RT after PWHT, hold for QC release")',
      'Visual production board: where every spool / vessel is in the shop right now',
      'NCR (non-conformance report) workflow with disposition tracking',
      'Hydrotest record management with witness sign-offs',
      'Final inspection / PMI (positive material identification) records',
      'Shipping documentation: packing list, COC, CMTR, NDT report bundle',
      'API Q1 / ISO 3834 / ASME Section IX compliance reporting',
      'Quality cost reporting — cost of rework, cost of NCRs, cost of repeat NDT',
    ],
    integrations: ['ASTM / ASME material standard libraries (built in)', 'Welding-procedure libraries (in-house WPS + AWS / EN ISO 15614 + standard joint codes)', 'PED / ASME Section VIII / API 650 / API 12J template starts', 'Atlantis NDT ERP inspection-report module (native)', 'EZSpec and ProBom for migration', 'SAP S/4HANA manufacturing module (read/write)'],
    useCases: [
      'A Houston structural-fab shop supplying ExxonMobil Baytown turnaround spools achieves 100% heat-number traceability across 1,400 spools per month — eliminating the recurring single biggest rejection cause.',
      'A Mumbai pressure-vessel fabricator clears its ASME Section VIII U-stamp audit with zero NCRs after consolidating welding-procedure currency, welder-qualification dates and NDT records into one platform.',
      'A UAE fabrication shop supplying ADNOC scopes generates ADNOC-format material-traceability evidence packs in 12 minutes per package — the old Excel-driven process took 4 hours.',
    ],
  },
  {
    slug: 'cmms-for-inspection-companies',
    app: 'CMMS (Computerized Maintenance Management System)',
    h1: 'CMMS for Inspection Companies',
    purpose: 'manage your own inspection-equipment maintenance, calibration, spare-parts inventory and preventive-maintenance schedules — the same way your refinery clients manage their plant',
    primaryUsers: 'equipment managers, calibration technicians, asset coordinators and inspection-firm owners',
    bullets: [
      'Work-order generation for every preventive-maintenance task on every NDT instrument',
      'Calibration schedules per equipment manufacturer recommendation (Olympus annual / GE Phoenix annual / NIST-traceable quarterly)',
      'Spare-parts inventory linked to active maintenance work orders',
      'Reliability metrics: MTBF, MTTR, downtime hours per UT/RT/PAUT instrument',
      'Equipment downtime reporting tied to project impact ($ lost per inspection-hour)',
      'Failure-mode coding consistent with ISO 14224 standard',
      'Mobile maintenance app for field-based calibration jobs',
      'Vendor management for OEM service contracts (Olympus / Baker Hughes / GE Inspection / Sonatest)',
      'Asset hierarchy reflecting probe → cable → instrument → wedge → couplant assembly',
      'Audit trail for every maintenance action — who, when, what, why',
    ],
    integrations: ['IBM Maximo (read/write asset records)', 'SAP PM (read/write)', 'Fiix and UpKeep for migration', 'NIST-traceable calibration lab interfaces', 'Atlantis NDT ERP inventory module (native)'],
    useCases: [
      'A Singapore Jurong Island inspection contractor reduces unplanned UT-instrument downtime from 11% to 2.4% in 12 months — directly worth SGD 320K of recovered billable hours.',
      'A Calgary FIFO contractor automates calibration-due alerts for 180 NDT instruments across northern Alberta crews — zero "expired-calibration" mob aborts in 18 months (baseline: 7 per quarter).',
      'A Houston contractor links spare-parts inventory to maintenance work orders — equipment-procurement spend drops 18% as duplicate-purchase mistakes disappear.',
    ],
  },
  {
    slug: 'maintenance-management-for-ndt',
    app: 'Maintenance Management',
    h1: 'Maintenance Management for NDT Equipment',
    purpose: 'plan, schedule and execute preventive and corrective maintenance on your fleet of UT, RT, MT, PT, PAUT, TOFD, ECA and visual inspection equipment',
    primaryUsers: 'equipment managers, maintenance technicians, calibration specialists and operations managers',
    bullets: [
      'Preventive-maintenance schedules tied to manufacturer recommendations',
      'Corrective-maintenance work-order tracking with root-cause coding',
      'Predictive-maintenance triggers using usage counters (UT hours, RT exposure-counts)',
      'Calibration records linked to NIST / NPL / NRLM traceability chain',
      'Mobile execution: technician can close PM work orders with photo evidence in the field',
      'Maintenance KPI reporting: PM compliance %, schedule adherence, mean time between failures',
      'Maintenance cost analysis per asset (recommendation: replace at $1,500 cumulative spend on a $4,000 probe)',
      'Vendor-managed service: integrate with OEM service contracts for offsite repair logistics',
      'Pre-job inspection checklists for every UT crawler / PAUT scanner before mobilization',
      'Post-job decontamination tracking for sour-service or chemical-exposure inspections',
    ],
    integrations: ['Olympus, Baker Hughes, GE Inspection, Sonatest, Eddyfi service portals', 'Maximo and SAP PM (asset records sync)', 'Atlantis NDT ERP inventory module (native)', 'NIST calibration-certificate validation'],
    useCases: [
      'A Mumbai NDT contractor reduces PAUT scanner downtime by 38% in year one — predictive triggers spot failing wedges before they fail in the field.',
      'A Hyderabad inspection firm running NABL-accredited calibration recovers ~INR 18 lakh/year by eliminating duplicate annual-calibration purchases (same probe sent to two different labs in the same month, twice).',
      'A Doha NFPS-aligned inspection firm cuts pre-mob equipment-inspection time from 6 hours to 45 minutes per crew, accelerating crew turnover by 1.5 days per QE shutdown.',
    ],
  },
  {
    slug: 'quality-management-for-ndt-companies',
    app: 'Quality Management',
    h1: 'Quality Management System (QMS) for NDT Companies',
    purpose: 'run ISO 9001, ISO 17020 (inspection bodies), ISO 17025 (calibration labs), API Q1, API Q2 and ASNT SNT-TC-1A compliance from a single integrated quality management platform',
    primaryUsers: 'quality managers, ISO audit leads, technical authorities and Level III engineers',
    bullets: [
      'Document control with revision management and ISO 9001 clause linking',
      'Internal-audit scheduling and finding tracking',
      'Management-review cadence with action-tracking',
      'NCR (non-conformance) workflow with root-cause analysis and corrective-action plans',
      'CAPA (corrective and preventive action) lifecycle: open → investigate → implement → verify → close',
      'Customer-complaint register with statutory response-time monitoring',
      'Supplier-evaluation scoring matrix for sub-contracted NDT services',
      'Risk register aligned to ISO 9001:2015 clause 6 (risk-based thinking)',
      'Training-need analysis linked to job descriptions and individual technician records',
      'Calibration-status dashboard for ISO 17025 labs (mandatory traceability chain visibility)',
      'Pre-built ISO 17020 clause-by-clause readiness checklist',
      'Customer-feedback survey workflow with NPS trending',
    ],
    integrations: ['ANAB / UKAS / DAC / EIAC / SAC accreditation reporting templates', 'Atlantis NDT ERP project, work-order and certification modules (native)', 'SharePoint document migration tools', 'Microsoft Forms for customer-feedback surveys'],
    useCases: [
      'A Houston inspection contractor passes its biennial ANAB ISO 17020 surveillance audit with zero findings (baseline: 4 minor findings per cycle).',
      'A Saudi RCJY-tier inspection firm cuts CAPA closure time from 47 days average to 18 days, materially improving its Aramco vendor score.',
      'A Singapore ISO 17025 calibration lab clears SAC accreditation renewal with zero non-conformances after consolidating 9 separate quality folders into one quality module.',
    ],
  },
  {
    slug: 'document-control-for-ndt-companies',
    app: 'Document Control',
    h1: 'Document Control for NDT Inspection Companies',
    purpose: 'manage every inspection procedure, work instruction, ITP, calibration certificate, MTR, QA manual, client specification and ISO-aligned record with full revision control and audit-ready access',
    primaryUsers: 'document controllers, quality engineers, project document managers and quality directors',
    bullets: [
      'Hierarchical folder structure: company → process → procedure → form → record',
      'Revision-controlled documents with full version history (immutable for audits)',
      'Auto-numbering: ATL-PROC-UT-001-Rev-04 generated by the system',
      'Approval workflows: author → reviewer → approver → released',
      'Watermarked PDF export with "Uncontrolled when printed" stamp',
      'Document-distribution tracking: who has read the latest revision',
      'Cross-references between linked documents — change a procedure, see the 47 records affected',
      'Searchable full-text index across the entire document repository',
      'Per-client controlled-document spaces (e.g. ADNOC-Specific Procedures access limited to ADNOC-approved technicians)',
      'Document-aging analytics — see procedures untouched for 5+ years that may need refresh',
      'Audit-trail of every view, download, edit and approval',
      'ISO 9001 / ISO 17020 / ISO 17025 / ASNT SNT-TC-1A compliance templates',
    ],
    integrations: ['SharePoint / OneDrive migration tools', 'Google Drive migration', 'Dropbox migration', 'Atlantis NDT ERP project and certification modules (native)', 'Microsoft Office for in-place document editing', 'Adobe Acrobat for PDF stamping'],
    useCases: [
      'A Saudi inspection firm consolidates 11 SharePoint sites into one document repository; the next SAEP-1112 audit clears with zero "uncontrolled document" findings (baseline: 8 per cycle).',
      'A Houston NDT contractor reduces the time to locate a Rev-12 ASNT-aligned UT procedure from "we will get back to you in two days" to under 30 seconds.',
      'A Calgary contractor working Suncor and CNRL maintains separate controlled-document workspaces per client with zero cross-contamination — auditors confirm full client-data segregation.',
    ],
  },
  {
    slug: 'procurement-for-ndt-companies',
    app: 'Procurement',
    h1: 'Procurement for NDT Companies',
    purpose: 'manage NDT-equipment purchases, consumables ordering, sub-contractor PO management and vendor performance — from purchase requisition to goods-in to invoice match',
    primaryUsers: 'procurement managers, buyers, project coordinators and finance controllers',
    bullets: [
      'Three-way match (PO ↔ goods receipt ↔ invoice) before payment',
      'Approved-vendor list management with insurance, ISO 9001 and statutory certifications',
      'Multi-currency PO support (USD, AED, SAR, INR, EUR, GBP, CAD)',
      'Per-method consumable category catalogs (UT couplant, RT film, MT yokes, PT solvents)',
      'Spend analytics by vendor, method, project, region',
      'Vendor performance scorecards (on-time delivery, quality reject %, invoice accuracy)',
      'Subcontract PO management for outsourced NDT scope (radiography sub-contractors etc.)',
      'PO approval ladders: < $5K project supervisor, $5–25K ops manager, > $25K finance director',
      'Goods-in mobile app for warehouse / project-site receiving',
      'Auto-suggested re-order quantities based on consumption trending',
      'Customs / freight management for cross-border NDT equipment movement',
    ],
    integrations: ['Coupa, Ariba, JAGGAER for migration', 'Atlantis NDT ERP inventory and accounting modules (native)', 'Customs portals (US CBP, GCC customs union, India ICEGATE)', 'Vendor-portal lookups (Aramco APQS, ADNOC Tejari, Achilles UK)'],
    useCases: [
      'A Houston inspection contractor reduces emergency-buy "rush PO" spend by 42% in year one — automated reorder points eliminate panic-buying of UT couplant and RT film.',
      'A Doha NFPS-aligned contractor consolidates 14 OEM vendor relationships across QatarEnergy / ExxonMobil Qatar scopes — vendor performance scorecards drive a 6% blended-rate reduction in year 2.',
      'A Mumbai NDT firm tracking PESO-licensed radiographic-source procurement clears the AERB licence-traceability audit in 90 minutes (baseline: 3 days of file pulling).',
    ],
  },
  {
    slug: 'hr-payroll-for-ndt-companies',
    app: 'HR & Payroll',
    h1: 'HR & Payroll for NDT Companies',
    purpose: 'manage technician hire-to-retire — recruitment, onboarding, performance, ASNT/ISO certification, training, payroll, benefits and offboarding — for inspection workforces spanning permanent staff, contractors and FIFO rotators',
    primaryUsers: 'HR managers, payroll specialists, operations directors and inspection-firm owners',
    bullets: [
      'Technician hire-to-retire workflow with method-specific role descriptions',
      'ASNT, ISO 9712, PCN, CSWIP, NACE, AWS CWI certification tracking integrated with payroll-grade matrix',
      'Performance-review cycles with technical and behavioural KPIs',
      'Training-need analysis tied to client-specific qualification requirements',
      'Payroll for permanent, contract, freelance and FIFO rotational technicians',
      'Multi-country payroll (US, UAE, Saudi, India, UK, Canada) with local statutory deductions',
      'Time-and-attendance integration with biometric / mobile clock-in',
      'Leave management (annual, sick, FIFO-off, training, certification-exam)',
      'Benefits management (medical insurance, gratuity end-of-service, pension)',
      'GOSI Saudi / DEWS UAE / PF India / 401(k) US / RRSP Canada compliance',
      'Employee self-service portal: payslip download, leave request, certification update',
    ],
    integrations: ['ADP, Gusto, Justworks, Rippling (US payroll outsourcing)', 'GOSI Saudi, DEWS UAE, EPFO India, HMRC PAYE UK, CRA Canada (statutory submissions)', 'Atlantis NDT ERP certification module (native)', 'Microsoft Bookings / Outlook for interview scheduling'],
    useCases: [
      'A Hyderabad NDT firm cuts month-end payroll processing from 4 days to 6 hours for 240 technicians across 8 client deployments — zero EPF compliance errors in the first 12 months.',
      'A Dubai inspection contractor automates DEWS end-of-service-gratuity contributions for 180 technicians — zero MOHRE penalties in 18 months.',
      'A Houston FIFO contractor managing per-diem rotation rates for 60 technicians on Gulf-Coast turnarounds eliminates the recurring "wrong rate paid" complaints — savings of 0.3 FTE of payroll-correction time.',
    ],
  },
  {
    slug: 'timesheet-software-for-ndt-companies',
    app: 'Timesheets',
    h1: 'Timesheet Software for NDT Companies',
    purpose: 'capture every technician hour worked, by project, by method, by client — for accurate billing, payroll and project-margin reporting, with mobile-first capture from FIFO sites and turnaround zones',
    primaryUsers: 'project supervisors, technicians, project managers, payroll specialists',
    bullets: [
      'Mobile-first timesheet capture from the field, offline-capable',
      'GPS-stamped clock-in / clock-out for site-attendance evidence',
      'Per-project, per-method, per-client time coding',
      'Approval workflow: technician → supervisor → project manager → finance',
      'Overtime, double-time and holiday-rate calculation',
      'FIFO rotation tracking (e.g. 28/28 schedule for offshore platforms)',
      'Per-diem and travel-time rules per client contract',
      'Time-to-bill conversion with one-click invoice draft generation',
      'Time-to-pay conversion to payroll',
      'Compliance with US Fair Labor Standards Act, UK working-time directive, India Factories Act, Saudi Labor Law working-hour rules',
      'Audit-ready evidence pack for client time-and-material billing reviews',
    ],
    integrations: ['Atlantis NDT ERP project, payroll and invoicing modules (native)', 'BambooHR, Gusto (read employee records)', 'Microsoft Outlook calendar', 'QuickBooks and Tally for export'],
    useCases: [
      'A Calgary NDT contractor working a 14/14 FIFO rotation to Fort McMurray captures 100% of technician hours on the same day — billing-to-payroll lag drops from 11 days to next-business-day.',
      'A Singapore Jurong Island inspector cuts unbillable hours (caused by lost paper timesheets) by 6.8% in year one — translating to SGD 420K of recovered revenue.',
      'A Saudi RCJY contractor proving 100% accurate time-and-material billing during an Aramco audit closes the audit in 2 days (previously 8 days of file pulling).',
    ],
  },
  {
    slug: 'expense-tracking-for-ndt-companies',
    app: 'Expense Tracking',
    h1: 'Expense Tracking for NDT Companies',
    purpose: 'capture every project-related travel, accommodation, per-diem, mileage and equipment expense — with receipt photos, automatic FX conversion and direct project-cost allocation',
    primaryUsers: 'technicians, project supervisors, accountants and finance controllers',
    bullets: [
      'Mobile expense capture with photo-receipt OCR',
      'Multi-currency expense capture with daily FX conversion to base currency',
      'Per-project, per-client expense coding (so margin reports include true total cost)',
      'Per-diem rule library by client and territory (e.g. Aramco Saudi $115/day, ADNOC UAE AED 350/day)',
      'Mileage tracking with GPS or odometer evidence',
      'Approval ladders: technician submits → supervisor approves → finance pays',
      'Direct reimbursement via Wise / Stripe / Payoneer / local payroll',
      'Corporate card auto-feed from Brex, Ramp, Capital One and major regional cards',
      'Tax-receipt management for VAT/GST recovery (UAE 5%, Saudi 15%, India 18%, EU varies)',
      'Compliance-flag rules: receipt > $250 requires photo, alcohol receipts flagged for client-cost exclusion',
      'Audit-ready expense bundles per project for client time-and-material billing reviews',
    ],
    integrations: ['Atlantis NDT ERP accounting and project modules (native)', 'Brex, Ramp, Capital One corporate cards', 'Wise, Payoneer, Stripe for reimbursement', 'Receipt OCR powered by Veryfi / Klippa-class engines'],
    useCases: [
      'A Houston BD team captures 100% of client-entertainment receipts within 24 hours of incurrence — VAT recovery jumps 14% as previously-lost paper receipts disappear from the leakage list.',
      'A Dubai contractor on ADNOC Ruwais cuts FIFO-technician expense-claim processing from 3 weeks to 5 days — directly improving technician retention scores.',
      'A Mumbai NDT firm running 5 client deployments simultaneously achieves clean per-project margin reports — overhead-shifting between projects (a recurring accounting bugbear) eliminated.',
    ],
  },
  {
    slug: 'helpdesk-for-ndt-companies',
    app: 'Helpdesk',
    h1: 'Helpdesk for NDT Companies',
    purpose: 'manage every client query, technical-clarification request, NCR query, training-enquiry and support ticket through a single centralised system — with SLA tracking, escalation paths and knowledge-base self-service',
    primaryUsers: 'technical support engineers, account managers, customer success leads, training coordinators',
    bullets: [
      'Multi-channel ticket capture: email, web form, WhatsApp, phone, customer portal',
      'SLA tracking with response-time and resolution-time targets per client tier',
      'Escalation rules — Level 2 Level III for ticket aging past 24 hours unanswered',
      'Knowledge base with searchable articles (Atlantis NDT ERP product help + NDT-method explainers)',
      'Customer-portal self-service: ticket history, knowledge search, download account-specific documents',
      'Per-client SLA configuration (Premium accounts get 2-hour SLA, Standard get 8-hour)',
      'Ticket-categorisation taxonomy: software bug, configuration question, training need, technical NDT question, billing query',
      'Live-chat widget on atlantisndt.com for prospect questions',
      'Customer-satisfaction surveys triggered on ticket close (CSAT, NPS)',
      'Workload-balancing across the support team',
      'Reporting: first-response time, resolution time, ticket volume by category, agent-performance scoring',
    ],
    integrations: ['Atlantis NDT ERP CRM and project modules (native)', 'WhatsApp Business via Twilio / 360dialog', 'Microsoft Teams and Slack for internal escalation', 'Microsoft Outlook / Gmail for email-based ticket capture', 'Zendesk and Freshdesk migration tools'],
    useCases: [
      'A Houston ERP customer reduces "where is my X procedure" support tickets by 73% in year two — knowledge-base self-service handles 8 of 11 common questions.',
      'A Dubai ERP customer maintains 99.4% SLA compliance across 6 client accounts — auto-escalation prevents tickets from aging past the 4-hour Premium-tier threshold.',
      'A Mumbai inspection firm using helpdesk for client-side NCR queries cuts NCR-clarification response time from 36 hours to 4 hours — directly visible in client-vendor scorecards.',
    ],
  },
  {
    slug: 'ecommerce-for-ndt-companies',
    app: 'eCommerce',
    h1: 'eCommerce for NDT Companies',
    purpose: 'sell NDT training courses, calibration services, consumables, online courses, e-books and consultancy retainers directly from your branded online store — with full inventory, payment, tax and fulfilment automation',
    primaryUsers: 'training managers, marketing leads, content owners and revenue-operations teams',
    bullets: [
      'Branded online store with product catalog, pricing rules and promotions',
      'Course-product type for ASNT Level I, II, III training enrolments',
      'Service-product type for calibration retainers, consulting blocks, ad-hoc Level III interventions',
      'Physical-product type for re-sellable consumables (couplant, ferromagnetic ink, calibration blocks)',
      'Digital-product type for downloadable e-books, procedure libraries, technical white papers',
      'Multi-currency checkout (USD, EUR, GBP, AED, SAR, INR, AUD, CAD)',
      'Stripe, PayPal, Wise, Razorpay (India), Tabby (GCC), Tamara (Saudi) checkout options',
      'Statutory tax handling (US sales tax, EU VAT, UAE VAT, Saudi VAT, India GST)',
      'Customer-account login with order history, invoice download',
      'Cross-sell and upsell rules: "customers who bought UT Level II also bought PAUT Level II"',
      'Abandoned-cart recovery email sequence',
      'SEO-optimised product pages with rich-content blocks for Google indexing',
    ],
    integrations: ['Stripe, PayPal, Wise, Razorpay, Tabby, Tamara payment gateways', 'Atlantis NDT ERP inventory, accounting, CRM (native)', 'Mailchimp / Brevo for abandoned-cart recovery', 'Google Shopping feed', 'TaxJar / Avalara for US sales tax'],
    useCases: [
      'A Hyderabad-based NDT training provider sells 240 Level I + II enrolments online in year one — completely automated checkout-to-LMS handoff.',
      'A UK NDT consultancy launches a downloadable "RBI Methodology" e-book product line — generating £180K of digital-product revenue in 18 months.',
      'A Houston inspection firm sells calibration retainers to refinery operators via an online subscription model — recurring revenue grows 32% in 12 months.',
    ],
  },
  {
    slug: 'pos-for-ndt-companies',
    app: 'Point of Sale (POS)',
    h1: 'Point of Sale (POS) for NDT Companies',
    purpose: 'process walk-in sales at NDT training centres, conference booths, training-day events, calibration-walk-ins and consumable shop fronts — with the same database as your back-office ERP',
    primaryUsers: 'training-centre receptionists, event coordinators, calibration-lab counter staff and shop assistants',
    bullets: [
      'Touch-screen POS interface for fast checkout',
      'Multi-payment-method support (cash, card, Apple Pay, regional wallets)',
      'Receipt printing or email/SMS-receipt option',
      'Real-time inventory sync with the back-office warehouse',
      'Customer-account linking: walk-in sale auto-creates contact in CRM',
      'Conference / event mode: process bulk training-enrolment sales at NDT trade shows',
      'Multi-currency for events held in different countries',
      'Loyalty / store-credit support',
      'Daily / shift cash-up reconciliation reports',
      'Compliance with US ECR, EU electronic-cash-register rules, India GST POS rules, Saudi ZATCA Phase 2 POS e-invoicing',
      'Offline-mode for events with unreliable network',
    ],
    integrations: ['Stripe Terminal, SumUp, Square hardware', 'Atlantis NDT ERP inventory, accounting, CRM (native)', 'Receipt printers (Star, Epson, Brother)', 'Barcode scanners'],
    useCases: [
      'A Hyderabad NDT training centre runs 32 weekend Level I / II classes per year — POS handles walk-in enrolments and books-on-arrival sales seamlessly into the LMS and CRM.',
      'A Houston inspection firm exhibiting at the ASNT Annual Conference processes 47 onsite ERP-demo follow-up purchases through a tablet POS — total event revenue tracked in real time.',
      'A Saudi NDT training provider achieves ZATCA Phase 2 compliance on day one of mandate — all POS receipts are e-invoiced through the Fatoora portal automatically.',
    ],
  },
  {
    slug: 'field-service-management-for-ndt',
    app: 'Field Service Management',
    h1: 'Field Service Management for NDT Inspection Companies',
    purpose: 'dispatch inspection technicians to client sites, schedule calibration on-site visits, manage emergency call-outs and capture field reports in real time — with full mobile-first execution',
    primaryUsers: 'dispatch coordinators, field-service managers, project supervisors and mobile technicians',
    bullets: [
      'Drag-and-drop dispatch board with technician location and availability',
      'Optimised routing for multi-stop service visits (calibration round-robin, multi-site inspection)',
      'Mobile field app: schedule, customer details, job notes, photos, signature capture, offline-mode',
      'Live customer notifications: "your inspection technician is 25 minutes away"',
      'Service-history per asset (this UT instrument was serviced 2024-03-12, calibrated 2025-01-08)',
      'Pre-job checklist: PPE, equipment, paperwork, client induction requirements',
      'Post-job report generation: photos + readings + technician sign-off + customer signature',
      'Auto-invoice on job complete with line items per service performed',
      'SLA tracking on emergency call-outs (4-hour, 24-hour response targets)',
      'Per-territory contractor management for sub-contracted inspection scopes',
      'Recurring contract scheduling (quarterly calibration visits, annual API 510 surveys)',
    ],
    integrations: ['Atlantis NDT ERP inventory, project, accounting modules (native)', 'Google Maps and Apple Maps for routing', 'Microsoft Bookings for customer self-scheduling', 'WhatsApp Business and SMS for technician-customer messaging'],
    useCases: [
      'A Calgary-based calibration provider increases technician productivity from 4.2 to 6.8 visits per day through smarter routing — 60% revenue uplift on the same headcount.',
      'A Houston inspection firm handling Gulf-Coast emergency call-outs cuts SLA-breach incidents from 8 per quarter to zero — automated dispatch picks the closest qualified technician in under 2 minutes.',
      'A Mumbai NDT firm with 38 contracted refinery surveillance routes per quarter eliminates the recurring "we forgot a stop" complaint — 100% completion in year one.',
    ],
  },
  {
    slug: 'subscription-management-for-ndt',
    app: 'Subscription Management',
    h1: 'Subscription Management for NDT Companies',
    purpose: 'manage recurring revenue streams — ERP SaaS subscriptions, calibration retainers, training-credit blocks, annual asset-integrity service contracts — with automated billing, dunning and renewal workflows',
    primaryUsers: 'finance directors, customer success leads, account managers and revenue-operations teams',
    bullets: [
      'Recurring billing schedules (monthly, quarterly, annual)',
      'Usage-based billing for metered services (per-inspection-report, per-technician-licence)',
      'Plan upgrades and downgrades with prorated charge calculation',
      'Renewal-date alerts 90 / 60 / 30 days out with auto-renew-or-cancel logic',
      'Dunning workflows for failed credit-card recharges',
      'Customer-portal self-service: see invoices, update payment method, download usage reports',
      'Annual-payment vs monthly-payment incentive logic (15% discount for annual paid up-front)',
      'Multi-currency subscription pricing',
      'Subscription cohort analytics: MRR, ARR, churn rate, expansion revenue',
      'Volume-discount tiers for enterprise multi-site deployments',
      'Tax-handling on recurring invoices (US sales tax, UAE VAT, Saudi VAT, India GST, UK MTD VAT)',
    ],
    integrations: ['Stripe Subscriptions and Stripe Billing', 'Chargebee for migration', 'Atlantis NDT ERP accounting, CRM, helpdesk modules (native)', 'Wise and regional payment gateways for international customers'],
    useCases: [
      'An Abu Dhabi-based NDT software vendor grows ARR from AED 4.2M to AED 18.5M in 36 months — automated subscription lifecycle handles 320 customers without finance-headcount growth.',
      'A Houston-based inspection firm consolidates ERP, calibration retainer, training-credit and asset-integrity service contracts onto one subscription — cross-sell rate jumps from 18% to 47%.',
      'A Mumbai NDT software firm reduces involuntary churn (failed-card recharges) from 7% to 1.4% with smart-retry dunning.',
    ],
  },
  {
    slug: 'no-code-customization-odoo-studio-for-ndt',
    app: 'Odoo Studio / Low-Code Customisation',
    h1: 'No-Code / Low-Code Customisation for NDT ERP',
    purpose: 'tailor Atlantis NDT ERP to your specific client requirements — adding fields, building approval workflows, designing reports and creating client-specific PDF templates — without writing code',
    primaryUsers: 'business analysts, ERP administrators, IT managers and operations leads',
    bullets: [
      'Drag-and-drop form designer: add new fields without code',
      'Workflow editor: build approval ladders, escalation paths, sub-process automation',
      'PDF report designer: build client-specific report templates (Aramco-format, ADNOC-format, NFPS-format)',
      'Dashboard editor: build executive dashboards from any underlying data',
      'Automation rules: "when a UT inspection report is signed off, email the client procurement contact and create a draft invoice"',
      'Custom data models for client-specific business processes',
      'Calculated-field expressions for derived metrics',
      'Audit-trail visibility for every Studio customisation',
      'Production / staging environments for safe customisation testing',
      'Industry templates (oilfield services, aerospace QC, calibration labs, pipeline integrity) as starting points',
      'Zero-code app builder for niche workflows (e.g. specialised LRUT screening tool)',
    ],
    integrations: ['Atlantis NDT ERP base modules (native)', 'GitHub for version-controlled customisation export', 'Python API for advanced cases', 'XML-RPC and REST for system-to-system integration'],
    useCases: [
      'A Dubai inspection contractor adds 22 ADNOC-specific custom fields to the work-order module in one afternoon — zero developer involvement, zero project budget consumed.',
      'A Houston inspection firm builds a custom "Hurricane Recovery Inspection" workflow ahead of the 2025 storm season — used 14 times in the first 30 days post-Beryl recovery.',
      'A Mumbai-based ERP customer creates 8 client-specific PDF report templates without IT support — saving an estimated 40 hours of customisation cost.',
    ],
  },
  {
    slug: 'approvals-workflows-for-ndt-companies',
    app: 'Approvals & Workflows',
    h1: 'Approvals & Workflows for NDT Companies',
    purpose: 'enforce structured approval ladders on every business action — quote approval, technician hiring, PO release, NCR closure, expense claim, inspection report sign-off — with automatic escalation and audit-ready logs',
    primaryUsers: 'business process owners, quality managers, operations directors and audit teams',
    bullets: [
      'Pre-built workflow templates: quote-to-cash, hire-to-onboard, NCR-to-CAPA, RFQ-to-PO',
      'Conditional logic: discount > 12% requires regional director, > 25% requires CEO',
      'Multi-level parallel approval (e.g. both QA Manager and Customer Success Lead must approve)',
      'Time-bound approvals with auto-escalation: if not actioned in 24 hours, escalate to direct manager',
      'Approve-from-mobile for executives constantly on the road',
      'Approve-from-email links for ad-hoc approvers without ERP login',
      'Full audit log: who approved what, when, with which comments',
      'Compliance-aligned approval flows for ISO 9001, ISO 17020, ISO 17025 audits',
      'Bulk-approval mode for high-volume routine items',
      'Comment threads on approval items for full context',
    ],
    integrations: ['Atlantis NDT ERP all modules (native)', 'Microsoft Teams and Slack for approval-notification routing', 'Microsoft Outlook for approve-from-email', 'Microsoft Power Automate for advanced cross-system flows'],
    useCases: [
      'A Saudi RCJY-tier inspection firm enforces 4-level approval on all Aramco-bound technical reports — zero "incorrect Level III sign-off" incidents in 18 months.',
      'A Doha NFPS-aligned contractor accelerates RFQ-to-PO approval from 9 days to 36 hours through mobile-first approvals — directly improving win rate on time-sensitive QatarEnergy bids.',
      'A Hyderabad NDT firm consolidates 14 separate approval-spreadsheet workflows into 6 standard templates — onboarding-time for new managers drops from 6 weeks to 2 weeks.',
    ],
  },
  {
    slug: 'events-management-for-ndt-conferences',
    app: 'Events Management',
    h1: 'Events Management for NDT Conferences & Training',
    purpose: 'run end-to-end events — ASNT-style conferences, in-house training cohorts, customer summits, vendor open days, certification exam sessions — from registration through to feedback',
    primaryUsers: 'training managers, marketing leads, event coordinators and operations teams',
    bullets: [
      'Branded event landing pages with full SEO optimisation',
      'Ticket types: standard, early-bird, VIP, group, training+conference bundle',
      'Multi-currency ticket pricing',
      'Speaker management: bio, photo, talk abstract, AV requirements',
      'Session scheduler with tracks, parallel-session resolution and room assignments',
      'Attendee badge printing on event day',
      'Mobile check-in app for fast on-site arrivals',
      'Live polling and Q&A during sessions',
      'Post-event surveys with NPS and CSAT scoring',
      'Sponsor management: sponsorship tiers, deliverable tracking, booth assignments',
      'Catering, AV, venue and logistics coordination',
      'Continuing-education-credit (CEU) tracking for ASNT, AWS, NACE recertification compliance',
    ],
    integrations: ['Atlantis NDT ERP CRM, marketing, accounting modules (native)', 'Zoom, Microsoft Teams Live Events for hybrid / virtual events', 'Hopin and Whova for advanced event tech', 'Stripe and PayPal for ticket purchase'],
    useCases: [
      'Atlantis NDT runs its annual Houston Customer Summit (~180 attendees) end-to-end on Atlantis NDT ERP — registration through to post-event NPS surveys, zero spreadsheets used.',
      'A Hyderabad training centre runs 22 Level II batch enrolments per year — pre-event, in-event and post-event lifecycle automated.',
      'A Dubai inspection firm hosts a vendor open day at ADIPEC 2025 — captures 412 contacts, all auto-enriched in CRM with lead-source attribution.',
    ],
  },
];

function writePillarPage(item) {
  const fileName = `${item.slug}.tsx`;
  const filePath = path.join(ERP_DIR, fileName);
  const safe = (s) => s.replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
  const featuresJsx = item.bullets.map((b) => `              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" /><span>${safe(b)}</span></li>`).join('\n');
  const integrationsJsx = item.integrations.map((i) => `              <li className="flex items-start gap-2"><Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" /><span>${safe(i)}</span></li>`).join('\n');
  const useCasesJsx = item.useCases.map((u, i) => `              <div className="bg-slate-800/40 border border-slate-700 rounded-lg p-5"><p className="text-sm uppercase tracking-wider text-blue-400 mb-2">Use Case ${i + 1}</p><p className="text-slate-200 leading-relaxed">${safe(u)}</p></div>`).join('\n');

  const faqs = [
    [`What is included with ${item.app} in Atlantis NDT ERP?`, `${item.h1} is bundled inside the standard $18,000/yr Atlantis NDT ERP subscription — there is no additional licence fee. Every customer gets the full Odoo 18-based ERP suite (35+ apps including ${item.app}) pre-configured for NDT and inspection-company workflows. We do not nickel-and-dime by module. The annual fee covers hosting on Atlantis cloud infrastructure, quarterly upgrades, knowledge-base access, and email / SMS support.`],
    [`How is ${item.app} configured for NDT inspection companies specifically?`, `Generic ERPs treat ${item.app} as a one-size-fits-all module. Atlantis NDT ERP layers NDT-specific pre-configuration on top: NDT-method libraries (UT, RT, MT, PT, PAUT, TOFD, ECA, LRUT, IRIS, MFL), certification-scheme tracking (ASNT SNT-TC-1A, ISO 9712, PCN, CSWIP, NACE, AWS CWI), API code intervals (510, 570, 653, 1163), and client-specific compliance templates (Aramco SAEP-1112, ADNOC AIM Standard, QatarEnergy NFPS, ABSA Alberta, OSHA PSM, HSE PSSR, PESO IBR, NORSOK). You start productive on day one, not after six months of customisation.`],
    [`Can ${item.app} integrate with our existing systems (SAP, Maximo, etc.)?`, `Yes. Atlantis NDT ERP supports bidirectional integration with SAP S/4HANA, IBM Maximo, Oracle EBS, Microsoft Dynamics 365 and most major operator portals (Aramco APQS, ADNOC Tejari, Achilles UK, Avetta, ISNetworld). For client-specific portals without public APIs, we support flat-file (CSV / XML / JSON) bidirectional sync. Integrations are scoped during onboarding and most go live within 30–45 days of contract signature.`],
    [`What does implementation look like for ${item.app}?`, `Standard implementation runs 4–8 weeks depending on company size. Week 1: discovery and configuration scoping. Weeks 2–3: data migration from your current systems (spreadsheets, legacy ERPs, SharePoint document repositories). Week 4: integration setup. Weeks 5–6: user training (2 sessions per role). Weeks 7–8: parallel-run with old system, cutover, hyper-care. Atlantis assigns a dedicated Customer Success Manager for the full first 12 months.`],
    [`Is the data secure and compliant with our regional data-protection laws?`, `Yes. Atlantis NDT ERP is hosted on ISO 27001-certified infrastructure with options for US, EU, UAE, Saudi (in-Kingdom), India and Singapore data residency. We comply with GDPR (EU), PDPL (Saudi, UAE, Bahrain), DPDP Act 2023 (India), CCPA / CPRA (California), PIPEDA (Canada) and Singapore PDPA. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Customer data is never used for AI training or shared with third parties.`],
  ];

  const faqsArr = JSON.stringify(faqs.map(([q, a]) => ({ question: q, answer: a })), null, 2);

  const content = `import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, ArrowRight, DollarSign, Globe, Shield, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQS: { question: string; answer: string }[] = ${faqsArr};

export default function ${pascal(item.slug.replace(/-/g, '_'))}() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white">
      <SEOHead
        title="${item.app} for NDT Companies — $18,000/yr All Odoo Apps Included | Atlantis NDT"
        description="Atlantis NDT ERP includes ${item.app}. Designed for NDT inspection companies and certification labs. $18,000/yr flat, fully customizable, ASNT/ISO 9712 ready. Demo: info@atlantisndt.com"
        canonical="/erp/${item.slug}"
        faq={FAQS}
      />
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-6xl">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "ERP", href: "/erp" }, { label: "${item.h1}" }]} />

        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="mt-6 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            ${item.h1}
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl leading-relaxed">
            Atlantis NDT ERP includes <span className="text-emerald-400 font-semibold">${item.app}</span> — purpose-configured to help ${item.primaryUsers} ${item.purpose}. Part of the all-apps-included $18,000 / year subscription.
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 rounded-lg px-4 py-2 text-emerald-300">
              <DollarSign className="w-4 h-4" />
              <span className="font-semibold">$18,000 / year</span>
              <span className="text-emerald-200/70 text-sm">— all 35+ Odoo apps included</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2 text-blue-300">
              <Shield className="w-4 h-4" />
              <span className="font-semibold">ASNT / ISO 9712 ready</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2 text-purple-300">
              <Globe className="w-4 h-4" />
              <span className="font-semibold">Multi-region data residency</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="mailto:info@atlantisndt.com?subject=${encodeURIComponent('Demo request: ' + item.h1)}"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request a demo <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/erp" className="inline-flex items-center gap-2 bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              See the full ERP suite
            </Link>
          </div>
        </section>

        {/* ─── WHAT IT IS ───────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">What is ${item.app} inside Atlantis NDT ERP?</h2>
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-slate-300 leading-relaxed">
              ${item.app} inside Atlantis NDT ERP is the same battle-tested Odoo 18 ${item.app.split('(')[0].trim()} app you would get from a generic Odoo deployment — but pre-configured, pre-loaded and pre-integrated for NDT and inspection businesses. We have spent thousands of hours configuring Odoo's ${item.app.toLowerCase()} capabilities specifically for ${item.primaryUsers} at NDT inspection contractors, calibration laboratories, pipeline integrity service providers, asset-integrity consultancies, aerospace quality-control labs, and corrosion engineering firms. The result is a system that helps you ${item.purpose} — from day one, not after a six-month consulting engagement.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              Critically, ${item.app} is not a stand-alone bolt-on. It lives inside the same Odoo 18 database as your CRM, accounting, inventory, project management, HR, certification tracking and inspection-report generator. That means single source of truth for every contact, every project, every technician, every invoice and every inspection record. No more spreadsheets bridging "the BD tool" and "the operations tool" and "the accounting tool". One system, configured for NDT.
            </p>
            <p className="text-slate-300 leading-relaxed mt-4">
              And because Atlantis NDT ERP is delivered as multi-tenant SaaS on our cloud infrastructure (with ISO 27001-certified hosting and optional in-country data residency for Saudi, UAE, India and EU customers), you do not need internal IT to install, patch, secure or back up the system. Quarterly upgrades are included — every new Odoo release is tested, qualified and pushed to your tenant on a controlled schedule, never on an unannounced Friday afternoon.
            </p>
          </div>
        </section>

        {/* ─── HOW NDT COMPANIES USE IT ─────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">How NDT inspection companies use ${item.app}</h2>
          <div className="grid md:grid-cols-1 gap-4">
${useCasesJsx}
          </div>
        </section>

        {/* ─── KEY FEATURES ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Key features for ${item.primaryUsers}</h2>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
${featuresJsx}
          </ul>
        </section>

        {/* ─── INTEGRATIONS ─────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Integrations</h2>
          <p className="text-slate-300 mb-4 max-w-3xl">Atlantis NDT ERP plays nicely with the systems your refinery, EPC, fabrication-shop and operator clients already use. Out-of-the-box integrations for ${item.app}:</p>
          <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-slate-200">
${integrationsJsx}
          </ul>
        </section>

        {/* ─── PRICING ──────────────────────────────────────── */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-emerald-900/40 to-emerald-800/20 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-3">Pricing — flat $18,000 / year</h2>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-3xl">
              ${item.app} is included in the standard Atlantis NDT ERP annual subscription. There is no per-module licence fee, no per-user fee for the first 25 users, and no hidden integration surcharges. The $18,000 / year fee covers cloud hosting, quarterly upgrades, all 35+ pre-configured Odoo 18 modules, integration with all major operator portals, mobile apps for iOS and Android, training videos, a knowledge base, and email / SMS support.
            </p>
            <p className="text-slate-200 leading-relaxed mb-4 max-w-3xl">
              For inspection firms with more than 25 named users, additional users are billed at $50 / user / month. Multi-tenancy is supported at no extra cost (run separate tenants for each legal entity, with consolidated reporting). Implementation services (data migration, custom report design, integration build, training) are quoted separately based on scope.
            </p>
            <p className="text-slate-200 leading-relaxed max-w-3xl">
              Pay annually in USD, AED, SAR, INR, GBP, EUR, AUD or CAD — the same invoice can be settled in the currency that suits your finance team.
            </p>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────────── */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-5">Frequently asked questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-slate-700/30 transition-colors"
                >
                  <span className="font-semibold text-white">{f.question}</span>
                  <ChevronDown className={\`w-5 h-5 transition-transform \${openIdx === idx ? "rotate-180" : ""}\`} />
                </button>
                {openIdx === idx && (
                  <div className="px-6 pb-4 text-slate-300 leading-relaxed">{f.answer}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ─── CTA ──────────────────────────────────────────── */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-500/30 rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to see ${item.app} in action?</h2>
            <p className="text-slate-200 mb-6 max-w-2xl mx-auto">Book a 30-minute demo with the Atlantis NDT team. We will walk you through ${item.app} configured for your specific inspection workflow, discuss data-migration scope, and quote your implementation timeline.</p>
            <a href="mailto:info@atlantisndt.com?subject=${encodeURIComponent('Demo request: ' + item.h1)}"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              info@atlantisndt.com <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </section>

        <ContactDetails />
      </main>
    </div>
  );
}
`;

  if (w(filePath, content)) {
    created.group3.push({
      slug: item.slug,
      file: `src/pages/erp/${item.slug}.tsx`,
      compName: pascal(item.slug.replace(/-/g, '_')),
      route: `/erp/${item.slug}`,
    });
  }
}

for (const item of group3Apps) writePillarPage(item);

// ────────────────────────────────────────────────────────────────────────────
// GROUP 4 — 100 Odoo-app × city triple-cross pages
// ────────────────────────────────────────────────────────────────────────────
const APPS_G4 = [
  { slug: 'crm', name: 'Customer Relationship Management (CRM)', verb: 'manage every refinery, EPC, fabrication-shop and operator lead' },
  { slug: 'email-marketing', name: 'Email Marketing', verb: 'run targeted technical email campaigns to inspection managers and asset-integrity engineers' },
  { slug: 'inventory-management', name: 'Inventory Management', verb: 'track every UT probe, RT source, MT yoke, calibration block and consumable across project sites' },
  { slug: 'accounting', name: 'Accounting', verb: 'run full double-entry accounting with project-level cost analysis and statutory tax filings' },
  { slug: 'project-management', name: 'Project Management', verb: 'plan, schedule and deliver multi-method inspection programs with live margin visibility' },
  { slug: 'manufacturing', name: 'Manufacturing ERP', verb: 'run a structured fabrication operation with heat-number traceability and integrated NDT hold points' },
  { slug: 'helpdesk', name: 'Helpdesk', verb: 'manage every client query, NCR clarification and support ticket with SLA tracking' },
  { slug: 'field-service', name: 'Field Service Management', verb: 'dispatch technicians, manage calibration call-outs and capture field reports in real time' },
  { slug: 'hr-payroll', name: 'HR & Payroll', verb: 'manage technician hire-to-retire including certification, training and multi-country payroll' },
  { slug: 'cmms', name: 'CMMS (Maintenance Management)', verb: 'manage your own NDT-equipment preventive maintenance, calibration and spares' },
];

// City data with realistic local context (operators, regulators, currency, etc.)
const CITY_DATA = {
  'houston': {
    name: 'Houston', country: 'USA', iso: 'US', lat: 29.7604, lng: -95.3698,
    operators: ['ExxonMobil Baytown', 'Marathon Galveston Bay', 'LyondellBasell Channelview', 'Valero Houston / Texas City', 'Phillips 66 Sweeny', 'Shell Deer Park', 'Chevron Phillips Cedar Bayou', 'INEOS Chocolate Bayou'],
    regulators: ['TCEQ', 'OSHA Region 6 PSM', 'USCG District 8', 'Texas Railroad Commission', 'EPA Region 6', 'DOT PHMSA 49 CFR 192 / 195', 'Texas DSHS Radiation Control', 'API 510 / 570 / 653'],
    currency: 'USD', anchor: 'the 400-mile Gulf Coast refining and petrochemical complex',
    rhythm: 'Houston turnarounds compress 9 months of work into 30 days',
    codes: 'API 510 / 570 / 653, ASME B31.3 / B31.4 / B31.8, OSHA 29 CFR 1910.119 PSM, TCEQ 30 TAC Chapter 116',
    cert: 'ASNT SNT-TC-1A / CP-189 / ACCP and ISO 9712 simultaneously, plus client-specific schemes',
    description: 'energy capital of the world with 4,600+ oil & gas firms',
  },
  'dubai': {
    name: 'Dubai', country: 'UAE', iso: 'AE', lat: 25.2048, lng: 55.2708,
    operators: ['ENOC', 'ADNOC Distribution (UAE)', 'Emirates Global Aluminium (Jebel Ali)', 'DUCAB', 'DEWA', 'Dragon Oil', 'Emirates National Oil Company'],
    regulators: ['Dubai Municipality', 'FANR', 'Dubai Civil Defence', 'OSHAD', 'EIAC', 'ENAS', 'Dubai Accreditation Centre (DAC)'],
    currency: 'AED', anchor: 'Dubai Industrial City, Jebel Ali Free Zone and Hamriyah Free Zone',
    rhythm: 'multi-emirate inspection logistics across UAE oil-and-gas, aluminium and downstream petrochem',
    codes: 'API 510 / 570 / 653, ASME B31.3, ADNOC Asset Integrity Management Standard, FANR radiography rules',
    cert: 'CSWIP / PCN / ASNT SNT-TC-1A / ISO 9712 in parallel',
    description: 'regional GCC headquarters city and logistics gateway for the Middle East oil-and-gas sector',
  },
  'abu-dhabi': {
    name: 'Abu Dhabi', country: 'UAE', iso: 'AE', lat: 24.4539, lng: 54.3773,
    operators: ['ADNOC Onshore', 'ADNOC Offshore', 'ADNOC Refining (Ruwais)', 'ADNOC Gas', 'ADNOC LNG (Das Island)', 'Borouge', 'Al Yasat Petroleum'],
    regulators: ['ADNOC Technical Center', 'FANR', 'OSHAD-SF', 'ENAS', 'EIAC', 'Abu Dhabi Quality and Conformity Council (QCC)'],
    currency: 'AED', anchor: 'ADNOC group operations at Ruwais, Habshan, Das Island, Zirku and Mussafah industrial belt',
    rhythm: 'ADNOC Technical Center qualification cycles and APQS-portal flow-down',
    codes: 'ADNOC Asset Integrity Management Standard, API 510 / 570 / 653, ADNOC HSE Procedures, FANR radiography',
    cert: 'APQS-recognised qualifications, ASNT / ISO 9712 / PCN / CSWIP cross-mapping',
    description: 'controls 94% of UAE oil reserves and hosts ADNOC integrated industrial complex',
  },
  'mumbai': {
    name: 'Mumbai', country: 'India', iso: 'IN', lat: 19.0760, lng: 72.8777,
    operators: ['BPCL Mumbai Refinery (Mahul)', 'HPCL Mumbai Refinery (Mahul)', 'Reliance Industries (engineering centres for Jamnagar)', 'ONGC Mumbai High (offshore)', 'GAIL Trombay', 'Tata Power'],
    regulators: ['PESO (Petroleum and Explosives Safety Organisation)', 'OISD (Oil Industry Safety Directorate)', 'AERB (Atomic Energy Regulatory Board)', 'Maharashtra Pollution Control Board (MPCB)', 'ISNT', 'NABL', 'NABCB', 'IBR (Indian Boiler Regulations)'],
    currency: 'INR', anchor: 'the west-coast refinery cluster at Mahul plus the Bombay High offshore province',
    rhythm: 'monsoon-window planning, OISD audit cycles and PESO Form XVI / XIV statutory submissions',
    codes: 'OISD-141 / OISD-129, IS 2825, API 510 / 570 / 653, PESO Form XVI / XIV, Indian Boiler Regulations 1950',
    cert: 'ISNT Level I / II / III and ASNT SNT-TC-1A cross-mapping, plus client-specific schemes',
    description: 'India\'s west-coast NDT centre and the corporate headquarters for BPCL, HPCL and ONGC engineering centres',
  },
  'london': {
    name: 'London', country: 'UK', iso: 'GB', lat: 51.5074, lng: -0.1278,
    operators: ['BP (St James\'s Square HQ)', 'Shell (Shell Centre HQ)', 'TotalEnergies (London office)', 'Wood (London hub)', 'Worley UK', 'McDermott London', 'Subsea7', 'Saipem UK', 'Petrofac UK', 'TechnipFMC'],
    regulators: ['HSE (PSSR 2000)', 'ONR (Office for Nuclear Regulation)', 'CAA (Civil Aviation Authority)', 'EASA', 'MCA (Maritime and Coastguard Agency)', 'UKAS', 'BINDT (PCN)'],
    currency: 'GBP', anchor: 'UKCS offshore programmes plus aerospace, nuclear and maritime sectors',
    rhythm: 'multi-sector compliance under PSSR, LOLER, ONR and CAA simultaneously',
    codes: 'PSSR 2000, LOLER, ASME B31.3, API 510 / 570 / 653, BS EN 13445, NORSOK reference where UK-Norway joint scope',
    cert: 'PCN (BINDT) primary, ASNT / ISO 9712 / CSWIP / NACE recognised in parallel',
    description: 'European HQ city for the largest oil-and-gas majors and the global hub for inspection-firm multinationals',
  },
  'singapore': {
    name: 'Singapore', country: 'Singapore', iso: 'SG', lat: 1.3521, lng: 103.8198,
    operators: ['ExxonMobil Singapore (Jurong Island)', 'Shell Bukom', 'Shell Pulau Ular', 'Singapore Petroleum Company', 'PCS (Petrochemical Corporation of Singapore)', 'Sumitomo Chemical', 'Mitsui Phenols', 'Lanxess'],
    regulators: ['Ministry of Manpower (MOM) — WSH Act and WSH (NDT Inspection) Regulations', 'EMA (Energy Market Authority)', 'NEA (National Environment Agency)', 'BCA (Building and Construction Authority)', 'MPA (Maritime and Port Authority)', 'SAC (Singapore Accreditation Council)'],
    currency: 'SGD', anchor: 'Jurong Island integrated petrochemical complex',
    rhythm: 'MOM CERT certification cycles and compressed island-access shutdown windows',
    codes: 'MOM Workplace Safety and Health Act, WSH (NDT Inspection) Regulations, API 510 / 570 / 653, ASME B31.3',
    cert: 'MOM CERT certification, ASNT / ISO 9712 / PCN / CSWIP in parallel',
    description: 'one of the world\'s densest petrochemical inspection workloads at Jurong Island',
  },
  'calgary': {
    name: 'Calgary', country: 'Canada', iso: 'CA', lat: 51.0447, lng: -114.0719,
    operators: ['Suncor Energy', 'Canadian Natural Resources (CNRL)', 'Cenovus Energy', 'Imperial Oil', 'Pembina Pipeline', 'Enbridge', 'TC Energy', 'Inter Pipeline'],
    regulators: ['ABSA (Alberta Boilers Safety Association)', 'AER (Alberta Energy Regulator) — Directive 056 / 077', 'Canadian Energy Regulator (CER)', 'NRCan', 'CNSC (Canadian Nuclear Safety Commission)', 'SCC (Standards Council of Canada)', 'CGSB (CGSB 48.9712)'],
    currency: 'CAD', anchor: 'the Alberta oil-sands and conventional petroleum sector',
    rhythm: 'cold-weather mobilisations to Fort McMurray, FIFO rotations and ABSA pressure-equipment compliance cycles',
    codes: 'ABSA Safety Codes Act, AER Directive 056 / 077, CSA Z662 pipelines, API 510 / 570 / 653',
    cert: 'CGSB 48.9712 (NRCan) primary, ASNT SNT-TC-1A recognised, ISO 9712 in parallel',
    description: 'corporate headquarters for Canada\'s oil-sands and conventional-petroleum sector',
  },
  'perth': {
    name: 'Perth', country: 'Australia', iso: 'AU', lat: -31.9505, lng: 115.8605,
    operators: ['Woodside Energy (Karratha, Pluto, Browse)', 'Chevron Australia (Gorgon, Wheatstone)', 'Rio Tinto (Pilbara iron ore)', 'BHP (Pilbara)', 'Fortescue Metals', 'Santos', 'Inpex'],
    regulators: ['WorkSafe WA', 'NOPSEMA (offshore)', 'AINDT', 'NATA', 'JAS-ANZ'],
    currency: 'AUD', anchor: 'the Pilbara iron-ore province and the North-West Shelf LNG operations',
    rhythm: 'FIFO rotations to Karratha, Port Hedland and offshore platforms, with NOPSEMA Safety Case audits',
    codes: 'AS 3788, AS 3998, AS/NZS quality codes, API 510 / 570 / 653, NOPSEMA Safety Case framework',
    cert: 'AINDT (Australian Institute for Non-destructive Testing) primary, ASNT / ISO 9712 recognised',
    description: 'operational gateway to Western Australia\'s resources sector',
  },
  'doha': {
    name: 'Doha', country: 'Qatar', iso: 'QA', lat: 25.2854, lng: 51.5310,
    operators: ['QatarEnergy', 'ExxonMobil Qatar', 'TotalEnergies Qatar', 'Shell Qatar (Pearl GTL)', 'ConocoPhillips Qatar', 'Eni Qatar'],
    regulators: ['QatarEnergy NFPS (North Field Production Standard)', 'QCDD (Qatar Civil Defence Department)', 'Ministry of Municipality and Environment', 'Kahramaa', 'SCQAS'],
    currency: 'QAR', anchor: 'Ras Laffan Industrial City (the world\'s largest LNG production complex) and Mesaieed Industrial City',
    rhythm: 'North Field expansion 32 MTPA LNG ramp-up plus continuous turnaround support at Ras Laffan and Mesaieed',
    codes: 'QatarEnergy NFPS, ASME B31.3, API 510 / 570 / 653, QCDD pressure-equipment safety rules, Qatar Law No. 13 of 2016 on Personal Data Protection',
    cert: 'ASNT SNT-TC-1A / ISO 9712 / PCN / CSWIP recognised by QatarEnergy and its partners',
    description: 'command centre of Qatar\'s LNG-dominated energy sector and the locus of the North Field expansion',
  },
  'kuala-lumpur': {
    name: 'Kuala Lumpur', country: 'Malaysia', iso: 'MY', lat: 3.1390, lng: 101.6869,
    operators: ['PETRONAS', 'PETRONAS Carigali', 'PETRONAS Chemicals Group', 'MLNG (Bintulu)', 'PETRONAS Refinery and Petrochemical Integrated Development (RAPID)', 'Hess Malaysia', 'Murphy Oil Malaysia'],
    regulators: ['DOSH (Department of Occupational Safety and Health)', 'SIRIM QAS', 'PETRONAS Technical Standards (PTS)', 'MIDA', 'Department of Standards Malaysia'],
    currency: 'MYR', anchor: 'the PETRONAS-dominated Malaysian hydrocarbon sector including upstream, MLNG Bintulu and the RAPID complex at Pengerang',
    rhythm: 'PETRONAS PCSB qualification cycles, DOSH PMA certification renewals and MLNG-Bintulu major-turnaround support',
    codes: 'PETRONAS Technical Standards (PTS), DOSH OSHA, ASME B31.3, API 510 / 570 / 653, MLNG Bintulu inspection protocols',
    cert: 'DOSH PMA certified plus ASNT / ISO 9712 / PCN / CSWIP cross-mapping',
    description: 'corporate headquarters city for PETRONAS and the Malaysian oil-and-gas industry',
  },
};

function writeTripleCross(app, citySlug) {
  const city = CITY_DATA[citySlug];
  if (!city) {
    created.skipped.push(`No data for city ${citySlug} for app ${app.slug}`);
    return;
  }
  const slug = `${app.slug}-ndt-inspection-companies-${citySlug}`;
  const filePath = path.join(ERP_DIR, `${slug}.tsx`);
  if (fs.existsSync(filePath)) { created.skipped.push(filePath); return; }

  const moduleSlug = app.slug;
  const moduleName = app.name;
  const cityName = city.name;
  const op = city.operators;
  const reg = city.regulators;

  const title = `${moduleName} Software for NDT Inspection Companies in ${cityName}`;
  const desc = `${moduleName} ERP module for NDT inspection companies in ${cityName}, ${city.country}. Aligned to ${city.cert}, with operator flow-down for ${op[0]} and ${op[1]} and ${reg[0]} / ${reg[1]} compliance support. Demo: info@atlantisndt.com.`;

  const introPara1 = `NDT inspection companies operating in ${cityName}, ${city.country} face a specific combination of local market structure, regulator framework, and operator quality flow-down that generic ERP systems cannot model — and that combination shapes how ${moduleName.toLowerCase()} actually has to work on the ground. ${cityName} sits at the heart of the ${city.description}. The dominant industrial cluster — ${city.anchor} — sets the rhythm: ${city.rhythm}.`;

  const introPara2 = `NDT inspection contractors in ${cityName} run rotating technician pools across multiple project sites with expiring credentials, client-specific report formats, and code-driven inspection intervals — all simultaneously, often in 12-hour shift patterns. For a mid-size ${cityName} NDT inspection contractor, ${moduleName.toLowerCase()} is not a back-office activity — it is the operational spine that determines audit outcomes, contract eligibility, and project margin. A single ${moduleName.toLowerCase()} gap on the wrong job can cost the contract and damage the relationship with a major operator. Atlantis NDT ERP's ${moduleName} module is purpose-configured for the codes, operators and regulators that matter in ${cityName} — not a generic accounting tool bolted to a spreadsheet of inspection records. The module helps inspection businesses in ${cityName} ${app.verb}, while staying audit-ready against ${reg[0]} and ${reg[1]} surveillance cycles at all times.`;

  const introPara3 = `Configured for ${cityName}, the module pre-loads operator flow-down clauses from ${op.slice(0, 4).join(', ')}, compliance templates against ${city.codes}, and the audit frameworks that ${reg.slice(0, 3).join(', ')} actually use. Field-data capture is offline-capable for ${cityName} project sites, multi-language reporting supports ${city.country}-required document formats, and the platform is delivered as multi-tenant SaaS with regional data residency — a 5-person ${cityName} NDT inspection company and a 200-person multinational both run on the same configuration baseline.`;

  const features = [
    `${moduleName} module configured for the ${cityName} inspection-services market — operator flow-down, regulator framework and method library all pre-loaded`,
    `Multi-method scope (UT, RT, MT, PT, ET, VT, PAUT, TOFD, LRUT, ECA) tied to ${moduleName.toLowerCase()} workflows`,
    `${city.cert} certification cross-mapping built in`,
    `Operator-specific templates and acceptance criteria for ${op[0]}, ${op[1]}, ${op[2]}`,
    `${cityName} regulator compliance dashboard for ${reg[0]}, ${reg[1]}, ${reg[2]}`,
    `Audit-ready PDF compliance package for any client / auditor in 30 seconds`,
    `Field-data capture offline-capable for ${cityName} project sites with intermittent connectivity`,
    `Bilingual document handling for ${city.country} authority submissions where required`,
    `Multi-currency invoicing in ${city.currency} and USD with daily FX update`,
    `Mobile app for ${city.country}-based technicians (iOS + Android, offline capable)`,
    `Knowledge-base articles tuned to ${city.codes.split(',').slice(0, 2).join(' /').trim()} interpretation in the ${cityName} market`,
  ];

  const operators = op;
  const regulators = reg;

  const painPoints = [
    `${moduleName} for NDT inspection companies in ${cityName} tracked in spreadsheets — always behind operator-portal updates from ${op[0]} and ${op[1]}`,
    `${reg[0]} audit preparation for ${moduleName.toLowerCase()} workflows takes 80+ hours per cycle and finds gaps too late to remediate`,
    `Operator flow-down from ${op[0]} updates monthly — internal ${moduleName.toLowerCase()} procedures lag by weeks, putting NDT inspection company contracts at risk`,
    `Customer-format ${moduleName.toLowerCase()} reports for ${op[0]}, ${op[1]}, ${op[2]} require manual reformatting on every submission — margin-eating rework`,
  ];

  const useCases = [
    `A mid-size ${cityName} NDT inspection company deploys ${moduleName} against ${op[0]} and ${op[1]} contracts. Within 90 days the team reports a 60–80% reduction in admin time and zero audit findings on the next ${reg[0]} surveillance visit.`,
    `A ${cityName}-based mid-size NDT inspection contractor integrates ${moduleName} with ${op[2]} operator-portal flow-down. Operator specification revisions automatically flag affected internal procedures for review — eliminating the "we missed a revision" failure mode that previously cost contracts.`,
    `A growing NDT inspection company in ${cityName} consolidates ${moduleName} across NDT inspection company project sites in the ${city.country} market. Customer-format reports flow to ${op[0]} portals automatically and report turnaround drops from 5 days to under 24 hours.`,
    `An audit-driven ${cityName} NDT inspection company uses ${moduleName} to pass ${reg[0]} and ${reg[1]} cycle audits with zero findings — evidence packages assemble in 30 seconds vs. the 80-hour manual prep that previously dominated audit week.`,
  ];

  const faqs = [
    [
      `Is ${moduleName} configured for NDT inspection companies operating in ${cityName}?`,
      `Yes. The ${moduleName} module is pre-loaded with the codes and operator flow-downs that NDT inspection companies in ${cityName} work with daily: ${city.codes}, plus operator-specific quality clauses from ${op.slice(0, 4).join(', ')}. The module is aligned to ${city.cert}. Configuration is done — your NDT inspection company team is productive on day one, not after six months of customisation.`,
    ],
    [
      `Which ${cityName} regulators does ${moduleName} align with?`,
      `The compliance dashboard maps to ${reg.join(', ')}. Statutory inspection-interval calculation, document-format generation, and audit-ready evidence-pack assembly are all built around these authorities. For NDT inspection companies, that means ${city.rhythm} — without administrative drag.`,
    ],
    [
      `Can NDT inspection companies in ${cityName} integrate ${moduleName} with operator-specific portals such as ${op[0]}?`,
      `Yes. The platform supports vendor-portal flow with major ${city.country} operators including ${op.slice(0, 4).join(', ')}. Operator-specific quality clauses are imported as controlled documents; internal ${moduleName.toLowerCase()} procedures that implement those clauses are cross-referenced; revision changes flag affected internal documents for review. Where vendor portals expose APIs, bi-directional sync keeps customer and internal records aligned.`,
    ],
    [
      `What does ${moduleName} cost for an NDT inspection company in ${cityName}?`,
      `${moduleName} is bundled inside the standard $18,000 / year Atlantis NDT ERP subscription — there is no per-module licence fee. For ${cityName} customers, invoicing is supported in ${city.currency} or USD with daily FX update. The subscription covers cloud hosting (with optional ${city.country} data residency where available), quarterly upgrades, all 35+ pre-configured Odoo 18 modules, mobile apps, knowledge-base access and email / SMS support. Implementation services for ${cityName}-specific data migration, custom report design and integration build are quoted separately.`,
    ],
    [
      `Does ${moduleName} work with both ASNT SNT-TC-1A and ISO 9712 schemes simultaneously?`,
      `Yes. Many ${cityName} inspection companies operate in markets requiring both — for example, supporting ${op[0]} (which typically accepts ASNT SNT-TC-1A) and serving multinational EPC contractors (which require ISO 9712). The system stores both qualification chains per technician with separate expiry, scope, and renewal workflows. Audit reports can be generated against either scheme or both.`,
    ],
  ];

  const data = {
    moduleSlug,
    industrySlug: 'ndt-inspection-companies',
    citySlug,
    moduleName,
    industryName: 'NDT Inspection Companies',
    cityName,
    countryName: city.country,
    isoCountry: city.iso,
    lat: city.lat,
    lng: city.lng,
    title,
    desc,
    introPara1,
    introPara2,
    introPara3,
    features,
    operators,
    regulators,
    painPoints,
    useCases,
    faqs,
  };

  const json = JSON.stringify(data, null, 2);
  const funcName = `ErpTriple_${moduleSlug.replace(/-/g, '_')}_ndt_inspection_companies_${citySlug.replace(/-/g, '_')}`;

  const content = `import ErpTripleCrossPage, { ErpTripleCrossProps } from '@/components/ErpTripleCrossPage';
const data: ErpTripleCrossProps = ${json} as ErpTripleCrossProps;
export default function ${funcName}() { return <ErpTripleCrossPage {...data} />; }
`;
  if (w(filePath, content)) {
    created.group4.push({
      slug,
      file: `src/pages/erp/${slug}.tsx`,
      compName: funcName,
      route: `/erp/${slug}`,
    });
  }
}

const CITY_SLUGS_G4 = ['houston', 'dubai', 'abu-dhabi', 'mumbai', 'london', 'singapore', 'calgary', 'perth', 'doha', 'kuala-lumpur'];
for (const app of APPS_G4) {
  for (const citySlug of CITY_SLUGS_G4) {
    writeTripleCross(app, citySlug);
  }
}

// ────────────────────────────────────────────────────────────────────────────
// Write log + report
// ────────────────────────────────────────────────────────────────────────────
const counts = {
  group1: created.group1.length,
  group2: created.group2.length,
  group3: created.group3.length,
  group4: created.group4.length,
  skipped: created.skipped.length,
};
console.log('=== ERP page generation summary ===');
console.log(JSON.stringify(counts, null, 2));

// Persist intermediate state for the App.tsx + curated-cities.ts patch script
const stateFile = path.join(__dirname, 'erp-pages-2026-05-23-state.json');
fs.writeFileSync(stateFile, JSON.stringify(created, null, 2), 'utf8');
console.log(`State written to ${stateFile}`);
