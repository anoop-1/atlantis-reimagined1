import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import CustomerLogosBlock from "@/components/CustomerLogosBlock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle, Wrench, BarChart3, Users, Calendar, DollarSign,
    Shield, FileCheck, Award, AlertCircle, ArrowRight, Database, Cog, ClipboardList,
    Package, Building2, Plane, Ship, Factory, HardHat, FlaskConical, Layers, MapPin
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buildTechArticleSchema, ATLANTIS_AUTHOR_ANOOP, ATLANTIS_PUBLISHER } from "@/data/author-schema";

const URL = "https://atlantisndt.com/ndt-erp-solution";

// ─── 8 Core Modules (linked to /erp-modules/*) ────────────────────────────

const modules = [
    {
        title: "Project Management",
        icon: ClipboardList,
        slug: "project-management",
        description:
            "Bid to invoice in one flow: opportunity, quote, purchase order, schedule, field execution, report, AR. Live per-project P&L tracks technician hours, equipment days, travel, consumables, and gross margin against budget. RACI matrix per project, subcontractor portal for client-of-client work, daily and weekly progress dashboards, and milestone-triggered automatic invoicing. Aligned to API Q1 §4.4 and ISO 9001:2015 §8.1."
    },
    {
        title: "Technician Scheduling",
        icon: Calendar,
        slug: "asset-management",
        description:
            "Assign the right inspector to the right job in seconds. Scheduler reads each technician's ASNT/ISO 9712/PCN method matrix, active medicals, BOSIET/HUET, client-site endorsements, and travel-day blocks before allowing assignment. FIFO rotation aware, multi-site rosters, exclusion windows, and visual Gantt for shutdown campaigns. Blocks any work order against an unqualified or out-of-medical inspector before mobilization."
    },
    {
        title: "Certification Tracking",
        icon: Award,
        slug: "certification-tracking",
        description:
            "Centralized ASNT SNT-TC-1A, ASNT CP-189, ISO 9712, PCN, CSWIP, CGSB-48.9712, NAS 410, EN 4179 record-keeping with parallel qualification sets per technician. Vision acuity (Jaeger #2 + Snellen 20/30 + Ishihara color), recurrent OJT logs, employer-of-record letters, and exam-score archive. Automated 90/60/30/7-day expiry alerts to inspector and supervisor, plus audit-ready certification packages on demand."
    },
    {
        title: "Equipment Calibration",
        icon: Wrench,
        slug: "asset-management",
        description:
            "Every UT instrument, transducer, RT crawler, calibration block, MT yoke, and PT consumable tracked with calibration interval (ASTM E797 / ASTM E1316 / ISO 17025 / your written practice — whichever is shortest), NIST-traceable certificate, and assigned-to technician. Out-of-tolerance assets auto-blocked from field deployment. SHA-256 hash on every cert prevents tampering. Auditors retrieve full equipment lifecycle in seconds."
    },
    {
        title: "NDT Report Management",
        icon: FileCheck,
        slug: "certification-tracking",
        description:
            "Pre-loaded inspection report templates for API 510 pressure vessels, API 570 piping, API 653 storage tanks, ASME Section V/VIII, AWS D1.1 structural welds, plus client-specific formats for ADNOC, Aramco, QatarEnergy, KNPC, Shell, BP, TotalEnergies, ExxonMobil, Equinor, ONGC, BPCL, PETRONAS, Woodside, Chevron. Bilingual Arabic/English with RTL layout. eIDAS-grade digital signatures and Level III approver chain."
    },
    {
        title: "Inventory & Consumables",
        icon: Package,
        slug: "asset-management",
        description:
            "Real-time stock of couplant, penetrant kits, magnetic ink, RT film, batteries, PPE, calibration blocks, and replacement transducers across HQ, regional stores, and active worksites. Job-bag picking lists generated automatically from work-order scope. Per-project consumable cost rolls into project COGS. Barcode and QR-code asset tagging with mobile field scan."
    },
    {
        title: "Invoicing & AR",
        icon: DollarSign,
        slug: "asset-management",
        description:
            "Native two-way QuickBooks Online, Xero, Sage Intacct, SAP S/4HANA, Microsoft Dynamics 365 Business Central, NetSuite, Tally Prime, and Zoho Books integrations. Multi-currency, multi-tax-jurisdiction (US sales tax, EU VAT, GCC VAT, India GST). Auto-invoicing by milestone, T&M, or fixed-fee. AR aging dashboards with collections workflow and dunning automation."
    },
    {
        title: "ISO 9001 Document Control",
        icon: Shield,
        slug: "certification-tracking",
        description:
            "Version-controlled written practice, NDT procedures, technical justifications, internal-audit records, management-review minutes, customer-complaint logs. Effective and expiry dates on every document, with restricted-distribution to qualified personnel only. Produces ISO 9001:2015, ISO 17020, ISO 17025 and API Q1 evidence packs on demand. Hash-chain integrity makes record tampering impossible."
    }
];

// ─── Industries (link to /erp-industries/*) ───────────────────────────────

const industries = [
    {
        name: "Oil & Gas",
        icon: Factory,
        slug: "oil-gas",
        description:
            "Refinery turnarounds, midstream pipelines, upstream platforms, LNG trains. Atlantis NDT ERP ships pre-loaded with API 510/570/653, ASME B31.3, NACE MR0175, PHMSA 49 CFR 192/195, OSHA PSM, and operator-specific written practices for the world's 30+ largest oil and gas operators — from Aramco SAEP-1112 through ADNOC AIM through Shell GS to Equinor STID."
    },
    {
        name: "Aerospace",
        icon: Plane,
        slug: "aerospace",
        description:
            "NAS 410 Revision 5 and EN 4179 personnel tracking with Specific Procedure qualification, Method certification, annual acuity, and 5-year recertification. Process spec linkage to Boeing GP-150, Airbus AIPS-01, Lockheed STP, GE / Rolls-Royce / Pratt & Whitney house specs. NADCAP audit packages auto-generate."
    },
    {
        name: "Marine",
        icon: Ship,
        slug: "marine",
        description:
            "Class society alignment with Lloyd's Register, DNV, ABS, BV and ClassNK survey scopes. Hull thickness gauging, structural weld inspection, ballast tank inspection, propeller shaft NDT, riser and umbilical fatigue inspection. STCW endorsements and offshore medical currency tracked per inspector."
    },
    {
        name: "Manufacturing",
        icon: Cog,
        slug: "manufacturing",
        description:
            "Heavy-engineering pressure parts (BHEL, L&T, Doosan), pipe mills, structural fabrication shops, wind tower fabrication, defense-grade weldments. AWS D1.1 / D1.5 / D1.6 weld inspection, ISO 17635 procedure compliance, and customer-spec routings (Caterpillar, John Deere, ABB) maintained in-platform."
    },
    {
        name: "Construction",
        icon: HardHat,
        slug: "construction",
        description:
            "Structural weld inspection for high-rises, bridges, stadiums and infrastructure projects. AWS D1.1/D1.5 with project-specific Q-Plans, third-party inspection records for state DOT and FHWA submissions, and ITP (inspection and test plan) tracking with hold points / witness points / monitor points."
    },
    {
        name: "Calibration Labs",
        icon: FlaskConical,
        slug: "calibration-labs",
        description:
            "ISO/IEC 17025-accredited calibration laboratories — NIST traceability, measurement uncertainty budgets, customer asset registers, due-date reminders, calibration certificate templates, and audit-ready evidence packs for ANAB / UKAS / EIAC / NABL surveillance audits."
    }
];

// ─── Competitor comparison data (links to /compare/vs-*) ──────────────────

const competitorLinks = [
    { slug: "sap-pm",         vendor: "SAP PM",                native: "No",          certTracking: "Add-on (SuccessFactors)", deploy: "12-24 months", cost: "Enterprise-license SAP", hosted: "Hosted / On-prem" },
    { slug: "maximo",         vendor: "IBM Maximo",            native: "No",          certTracking: "Talent Mgmt add-on",      deploy: "9-18 months",  cost: "Enterprise tier", hosted: "Hosted / OpenShift" },
    { slug: "meridium",       vendor: "GE Meridium APM",       native: "Partial",     certTracking: "Limited",                 deploy: "9-15 months",  cost: "Enterprise-tier APM",     hosted: "Hosted" },
    { slug: "ge-vernova-apm", vendor: "GE Vernova APM",        native: "Partial",     certTracking: "Limited",                 deploy: "9-15 months",  cost: "Enterprise-tier APM",     hosted: "Hosted" },
    { slug: "aspentech-mtell",vendor: "AspenTech Mtell",       native: "No (RBI/AI)", certTracking: "None",                    deploy: "6-12 months",  cost: "Enterprise tier",     hosted: "Hosted" },
    { slug: "bentley-assetwise", vendor: "Bentley AssetWise",  native: "No",          certTracking: "None",                    deploy: "6-12 months",  cost: "Enterprise-tier AssetWise",     hosted: "Hosted" },
    { slug: "etq-reliance",   vendor: "ETQ Reliance",          native: "No (QMS)",    certTracking: "Generic competency",      deploy: "4-9 months",   cost: "Enterprise-tier QMS",     hosted: "Hosted" },
    { slug: "netsuite",       vendor: "NetSuite",              native: "No",          certTracking: "Third-party SuiteApp",    deploy: "6-12 months",  cost: "Mid-to-enterprise tier", hosted: "Hosted" },
    { slug: "procore",        vendor: "Procore",               native: "No (constr.)",certTracking: "None",                    deploy: "1-3 months",   cost: "Mid-tier construction ERP", hosted: "Hosted" },
    { slug: "quickbooks",     vendor: "QuickBooks + Excel",    native: "No",          certTracking: "Manual spreadsheet",      deploy: "Day 1 (limited)", cost: "Small-business tier",     hosted: "Hosted" }
];

// ─── 15+ NDT-specific Atlantis add-on modules ─────────────────────────────

const atlantisAddons = [
    "ASNT SNT-TC-1A written practice authoring",
    "ISO 9712 method matrix configurator",
    "NAS 410 / EN 4179 aerospace track",
    "API 510/570/653 inspection workflows",
    "ASME BPVC Section V procedure library",
    "NACE MR0175 sour-service damage models",
    "Risk-Based Inspection (API 581) hand-off",
    "Corrosion rate trending and remaining life",
    "RT radiographer dose ledger (AERB/NRC)",
    "ADNOC / Aramco / QatarEnergy report packs",
    "Bilingual Arabic/English with RTL layout",
    "Offline field-app for offshore / remote",
    "eIDAS-grade digital signatures",
    "Level III approver chain enforcement",
    "Client portal with SAML 2.0 / OIDC SSO",
    "NCDMB / Saudi Aramco IKTVA local-content reporting"
];

// ─── Top 20 ERP city pages for city coverage grid ─────────────────────────

const topCities = [
    { slug: "houston",      label: "Houston" },
    { slug: "dubai",        label: "Dubai" },
    { slug: "abu-dhabi",    label: "Abu Dhabi" },
    { slug: "saudi-arabia", label: "Saudi Arabia" },
    { slug: "calgary",      label: "Calgary" },
    { slug: "singapore",    label: "Singapore" },
    { slug: "mumbai",       label: "Mumbai" },
    { slug: "london",       label: "London" },
    { slug: "perth",        label: "Perth" },
    { slug: "doha",         label: "Doha" },
    { slug: "kuwait",       label: "Kuwait City" },
    { slug: "muscat",       label: "Muscat" },
    { slug: "hyderabad",    label: "Hyderabad" },
    { slug: "chennai",      label: "Chennai" },
    { slug: "kuala-lumpur", label: "Kuala Lumpur" },
    { slug: "lagos",        label: "Lagos" },
    { slug: "aberdeen",     label: "Aberdeen" },
    { slug: "oslo",         label: "Oslo" },
    { slug: "new-orleans",  label: "New Orleans" },
    { slug: "denver",       label: "Denver" }
];

// ─── 12 FAQs ───────────────────────────────────────────────────────────────

const faqs = [
    {
        q: "Who is Atlantis NDT ERP for?",
        a: "Atlantis NDT ERP is built for NDT inspection service companies between 10 and 150 technicians — Level III-led firms running mixed campaigns across refineries, offshore platforms, pipelines, aerospace shops, fabrication yards, and calibration labs. It also fits owner-operator integrity teams managing in-house inspection programs at refineries, fertilizer complexes, and power plants. Below 5 inspectors, QuickBooks plus a spreadsheet still works; above 150 you may need an enterprise-tier deployment which we configure individually."
    },
    {
        q: "Is the platform cloud-hosted or on-premise?",
        a: "Cloud-hosted by default on hardened, encrypted infrastructure with regional data residency in the United States, European Union, United Arab Emirates, Saudi Arabia, India, Singapore, and Australia. On-premise Docker deployments are available for clients with air-gap requirements such as nuclear supply-chain, defense, or operator cybersecurity mandates (Aramco SACS-002, ADNOC ITPS). On-premise instances still receive signed monthly update bundles and retain full offline field-app sync."
    },
    {
        q: "How is this different from a free Odoo Community installation?",
        a: "Atlantis NDT ERP is built on Odoo 18 Enterprise as its open-source backbone, but ships pre-configured with 15+ NDT-specific add-on modules that a generic Odoo installation lacks: ASNT SNT-TC-1A written practice, ISO 9712 method matrix, NAS 410 aerospace track, ASTM E797 calibration intervals, API 510/570/653 report templates, NACE MR0175 damage-mechanism models, RT radiographer dose ledger, ADNOC/Aramco/QatarEnergy pre-mob evidence packs, and the bilingual Arabic/English reporting engine. Free Odoo gives you the chassis; we ship the inspection-industry body."
    },
    {
        q: "Can we add custom fields and workflows specific to our company?",
        a: "Yes. Atlantis NDT ERP is fully extensible via the Odoo Studio low-code builder for routine custom fields and views, and via Python module development for deeper customization. Our implementation team scopes and delivers reasonable customizations as part of the standard implementation package — typical examples include client-specific report header layouts, additional asset-criticality fields, and integration with bespoke client portals."
    },
    {
        q: "Does it integrate with our existing accounting software?",
        a: "Yes. Native two-way connectors ship for QuickBooks Online, Xero, Sage Intacct, SAP S/4HANA, Microsoft Dynamics 365 Business Central, NetSuite, Tally Prime, and Zoho Books. Invoices, bills, customers, vendors, and payments sync in real time. For systems without a native connector we provide REST-API and Zapier paths. We never recommend manual CSV import for production accounting flows."
    },
    {
        q: "Does it support single sign-on and our corporate identity provider?",
        a: "Yes. SAML 2.0 and OIDC SSO are supported out of the box for both internal users and the client portal. Tested integrations with Microsoft Entra ID (Azure AD), Okta, Google Workspace, OneLogin, JumpCloud, and customer-hosted Active Directory Federation Services. MFA is enforced platform-wide and can be set per role."
    },
    {
        q: "Can we export our data if we ever leave?",
        a: "Yes. The platform is built on Odoo 18, an open-source ERP with 12+ million users globally. Your complete dataset — assets, inspections, technicians, certifications, financial records, attachments — can be exported in standard formats (CSV, JSON, Odoo XML, PDF) at any time, and is portable to any Odoo partner worldwide. Data export is contractually guaranteed in every customer agreement, with no vendor lock-in."
    },
    {
        q: "Is it GDPR / DPDP / PDPL compliant?",
        a: "Yes. Atlantis NDT ERP is compliant with EU GDPR, UK GDPR, India DPDP Act 2023, Saudi PDPL, UAE Federal Decree-Law 45/2021, Singapore PDPA, Australia Privacy Act, and NDPR (Nigeria). Data Processing Addenda are signed by default. Regional hosting (EU, UAE, KSA, India, Singapore, Australia) means personal data never leaves the chosen jurisdiction unless explicitly replicated for disaster recovery."
    },
    {
        q: "What support is included?",
        a: "Standard support includes email and SMS-based triage with same-business-day acknowledgement, scheduled monthly product training webinars, a dedicated customer-success contact, and unlimited access to the knowledge-base and admin guides. Enterprise tiers add 24/7 phone support, dedicated technical account management, and quarterly on-site reviews. All clients receive quarterly product upgrades and a security patch cadence aligned with Odoo upstream."
    },
    {
        q: "How long is training and onboarding?",
        a: "A typical 25-50 technician NDT firm moves from kickoff to go-live in 4 weeks: week 1 discovery and data mapping, week 2 data migration and configuration, week 3 administrator and supervisor training, week 4 inspector training and parallel run. Most clients are fully productive in week 5. We provide role-based training tracks: administrators (2 days), supervisors (1 day), inspectors (half-day in person or self-paced video)."
    },
    {
        q: "How does it scale as we grow?",
        a: "Atlantis NDT ERP scales horizontally — adding inspectors, sites, clients, or business units does not require re-architecture. Existing customers have grown from 12 to 180 inspectors on the same platform without re-implementation. Multi-entity / multi-country group structures are supported natively, with consolidated reporting and per-entity localization. The standard tier covers up to 25 named users; additional users scale predictably. Pricing varies by region and team size — request a tailored quote."
    },
    {
        q: "Can it replace IBM Maximo or SAP Plant Maintenance?",
        a: "For NDT inspection contractors and inspection-led integrity teams, yes — Atlantis NDT ERP replaces Maximo and SAP PM completely at roughly 5-10% of the cost. For asset-owner operators where Maximo or SAP PM is also the corporate EAM/CMMS spanning rotating equipment, instrumentation, electrical, and facilities, Atlantis NDT ERP runs alongside as the inspection layer and pushes inspection closeout, corrosion readings, and remaining-life data into the corporate EAM via native connectors. We support both architectures."
    }
];

// ─── Pillar component ─────────────────────────────────────────────────────

export default function NDTERPSolution() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            buildTechArticleSchema({
                url: URL,
                headline: "NDT Technician Certification Tracking & Calibration Management Software",
                description:
                    "Atlantis NDT ERP — the 2026 buyer's guide. NDT-purpose modules covering project management, inspection company scheduling and crew dispatch, technician certification tracking that flags expired certifications automatically, equipment calibration management, reporting, inventory, invoicing and project profitability, and ISO 9001 document control, with a vendor comparison vs SAP PM, Maximo, Meridium, GE Vernova APM, NetSuite, Procore, QuickBooks. Affordable, fully customizable.",
                datePublished: "2026-04-22",
                dateModified: "2026-05-16",
                section: "NDT ERP — Buyer's Guide",
                keywords:
                    "NDT ERP software, NDT ERP solution, inspection company ERP, ASNT certification tracking software, ISO 9712 software, calibration tracking, API 510 ERP, NDT scheduling software, Odoo NDT, SAP NDT alternative, Maximo NDT alternative",
                dependencies:
                    "ASNT SNT-TC-1A, ASNT CP-189, ISO 9712, EN 4179, NAS 410, ISO 9001:2015, ISO 17020, ISO 17025, ASTM E797, API Q1, API 510, API 570, API 653"
            }),
            { "@type": "Organization", "@id": "https://atlantisndt.com/#organization", ...ATLANTIS_PUBLISHER },
            { "@type": "Person", "@id": "https://atlantisndt.com/#anoop-rayavarapu", ...ATLANTIS_AUTHOR_ANOOP },
            {
                "@type": "SoftwareApplication",
                "@id": `${URL}#software`,
                "name": "Atlantis NDT ERP",
                "applicationCategory": "BusinessApplication",
                "applicationSubCategory": "Inspection Management Software",
                "operatingSystem": "Cloud / Web (browser); iOS; Android; on-premise Docker",
                "softwareVersion": "2026.5",
                "description":
                    "ERP software pre-configured for NDT inspection service companies. Manages personnel certifications (ASNT SNT-TC-1A, ISO 9712, NAS 410), equipment calibration (ASTM E797), procedures (ISO 17020), projects, financials, and client portal in one integrated platform.",
                "url": URL,
                "publisher": { "@id": "https://atlantisndt.com/#organization" },
                "author": { "@id": "https://atlantisndt.com/#anoop-rayavarapu" },
                "offers": {
                    "@type": "Offer",
                    "url": URL,
                                        "availability": "https://schema.org/InStock",
                    "category": "subscription",
                    "eligibleRegion": [
                        { "@type": "Country", "name": "United States" },
                        { "@type": "Country", "name": "United Arab Emirates" },
                        { "@type": "Country", "name": "Saudi Arabia" },
                        { "@type": "Country", "name": "India" },
                        { "@type": "Country", "name": "United Kingdom" },
                        { "@type": "Country", "name": "Singapore" },
                        { "@type": "Country", "name": "Canada" },
                        { "@type": "Country", "name": "Australia" }
                    ]
                },
                "featureList": modules.map(m => m.title).join(" • "),
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "47",
                    "bestRating": "5",
                    "worstRating": "1"
                }
            },
            {
                "@type": "Product",
                "@id": `${URL}#product`,
                "name": "Atlantis NDT ERP",
                "brand": { "@type": "Brand", "name": "Atlantis NDT" },
                "category": "Enterprise Resource Planning Software for NDT Inspection Companies",
                "description": "Annual subscription to Atlantis NDT ERP — cloud-hosted Odoo 18-based ERP with 15+ NDT-specific add-on modules, up to 25 named users, all NDT modules included, quarterly upgrades and email/SMS support.",
                "offers": {
                    "@type": "Offer",
                    "url": URL,
                                        "availability": "https://schema.org/InStock"
                }
            },
            {
                "@type": "FAQPage",
                "@id": `${URL}#faq`,
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a }
                }))
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${URL}#breadcrumb`,
                "itemListElement": [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://atlantisndt.com/" },
                    { "@type": "ListItem", position: 2, name: "NDT ERP Software", item: URL }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Technician Certification Tracking & Calibration Management Software | Atlantis"
                description="Software built for testing and inspection companies — NDT technician certification tracking that flags expiring credentials automatically, equipment calibration management, and document control under ISO quality standards, alongside quoting, projects, job costing and accounts. Affordable, accessible, fully customizable. Free consultation."
                keywords="ndt technician certification tracking software, calibration management software for ndt, inspection company scheduling and crew dispatch software, iso 9001 document control software for ndt companies, ndt quality management system software, software that flags expired ndt certifications automatically, inspection company invoicing and project profitability software, NDT ERP software, NDT ERP solution, inspection company ERP, Odoo NDT ERP, SAP PM NDT alternative, Maximo NDT alternative, NetSuite NDT"
                canonical={URL}
                ogImage="/atlantis.jpg"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* ── 1. Hero ─────────────────────────────────────────────────── */}
            <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-5xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-orange-100 mb-4">
                            <Award className="w-5 h-5" />
                            <span className="text-sm">Buyer's Guide — Updated May 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            NDT Technician Certification Tracking &amp; Calibration Management Software
                        </h1>
                        <p className="text-xl text-orange-50 mb-4 leading-relaxed">
                            Atlantis NDT ERP runs your inspection business end-to-end — NDT technician
                            certification tracking that flags expiring credentials automatically (ASNT,
                            ISO 9712, PCN, NAS 410), equipment calibration management, inspection company
                            scheduling and crew dispatch, invoicing, and ISO 9001 document control — on
                            an Odoo 18 backbone.
                        </p>
                        <p className="text-xl text-orange-50 mb-6 leading-relaxed">
                            One platform replaces disconnected spreadsheets and standalone tools.
                            Affordable. Accessible. Fully Customizable. Authored by an ASNT Level III who
                            runs an inspection company on the same software.
                        </p>
                        <div className="flex flex-wrap gap-3 mt-6">
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
                                Request technical demo <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a href="tel:+12818408969" className="inline-flex items-center gap-2 bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-800 transition">
                                Call +1 (281) 840-8969
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <article className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-5xl px-6">

                    {/* ── 2. What an NDT ERP Solves ───────────────────────── */}
                    <section className="mb-16 prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold mb-6">What an NDT ERP Solves</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Walk into a typical NDT contractor and you'll find the same stack: QuickBooks
                            for accounting, four to six Excel spreadsheets for certification matrices and
                            calibration logs, a SharePoint or Dropbox folder of procedures, an Outlook
                            calendar for scheduling, a paper signed-off binder for client reports, and a
                            WhatsApp group for everything that doesn't fit anywhere else. It runs — until
                            it doesn't. The Level II MT inspector who mobilized to the Aramco shutdown
                            had a vision-acuity test that expired three weeks ago. The UT thickness gauge
                            used on a critical pressure-vessel inspection was 47 days out of calibration.
                            The procedure cited on report MT-007-Rev3 was superseded by Rev 4 the previous
                            quarter. The Q/A manager spends a whole week assembling the audit evidence pack
                            for the ANAB ISO 17020 surveillance visit. The invoice from the offshore campaign
                            in Karratha sits in a file on someone's laptop until the bookkeeper finds it.
                        </p>
                        <p className="text-slate-700 leading-relaxed mt-4">
                            An NDT ERP fixes those failure modes at their source. Certification matrices
                            live in a database that fires 90/60/30/7-day expiry alerts to the inspector
                            and the supervisor; the scheduler refuses to mobilize an out-of-currency
                            technician onto a method they are not certified for. Equipment calibration
                            is enforced before deployment — an out-of-tolerance instrument cannot leave
                            the calibration store on a work order. Procedures are version-controlled with
                            effective and expiry dates and tied to qualified personnel only; a work order
                            cannot cite a superseded revision. Inspection reports generate from field-data
                            entries in five minutes instead of three hours, in pre-loaded API 510, API 570,
                            API 653 and client-specific formats. Audit evidence packs export in one click.
                            Invoices auto-create on milestone completion and reconcile back into the
                            accounting system. The seven separate tools collapse into one — and the work
                            that used to consume an FTE of administrative overhead disappears into the
                            background of a system designed around the regulatory reality of inspection
                            work.
                        </p>
                    </section>

                    {/* ── 3. Core Modules ──────────────────────────────────── */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Eight Core Modules</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            Each of the eight modules below is configured for the NDT inspection
                            industry from day one. Click any tile to see the deep-dive page covering
                            implementation detail, configuration options, and code/standard alignment.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {modules.map((m) => (
                                <Link key={m.title} to={`/erp-modules/${m.slug}`} className="block">
                                    <Card className="border-slate-200 hover:shadow-md hover:border-orange-400 transition h-full">
                                        <CardHeader className="pb-2">
                                            <m.icon className="w-8 h-8 text-orange-600 mb-2" />
                                            <CardTitle className="text-lg">{m.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-slate-700 text-sm">{m.description}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── 4. Industries ────────────────────────────────────── */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Industries We Cover</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            Atlantis NDT ERP ships with code libraries, written practices and report
                            templates pre-loaded for the six industries below. Click through for an
                            industry-specific deep dive on workflows, regulatory frameworks and
                            client-specific report formats.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {industries.map((ind) => (
                                <Link key={ind.name} to={`/erp-industries/${ind.slug}`} className="block">
                                    <Card className="border-slate-200 hover:shadow-md hover:border-orange-400 transition h-full">
                                        <CardHeader className="pb-2">
                                            <ind.icon className="w-7 h-7 text-orange-600 mb-2" />
                                            <CardTitle className="text-lg">{ind.name}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-slate-700 text-sm leading-relaxed">{ind.description}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link to="/erp-industries" className="text-orange-600 font-semibold hover:underline inline-flex items-center gap-1">
                                View all ERP industry pages <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </section>

                    {/* ── 5. Why Odoo, Why Atlantis ───────────────────────── */}
                    <section className="mb-16 bg-white rounded-2xl p-10 border border-slate-200 shadow-sm">
                        <h2 className="text-3xl font-bold mb-6">Why Odoo, Why Atlantis</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Atlantis NDT ERP is built on Odoo 18 Enterprise as its open-source chassis.
                            Odoo is a $7B-revenue ERP platform with 12 million users across 120 countries
                            and a 2,000-developer contributor community — it is, by user count, the most
                            widely adopted business-suite ERP in the world. The financial, inventory,
                            project, HR and CRM cores are battle-tested across every industry from
                            manufacturing to retail to professional services. What Odoo does not ship is
                            the NDT inspection industry's regulatory body of knowledge: ASNT SNT-TC-1A
                            written practice templates, ISO 9712 method matrices, ASTM E797 calibration
                            intervals, API 510/570/653 report layouts, NAS 410 vision acuity tests,
                            NACE MR0175 sour-service damage models, AERB and NRC radiographer dose
                            ledgers. On a vanilla Odoo (or any generic ERP) those concepts have to be
                            custom-built — typically a 6-18 month enterprise-tier consulting engagement.
                            That is what Atlantis adds.
                        </p>
                        <p className="text-slate-700 leading-relaxed mt-4">
                            Atlantis ships 15+ NDT-specific add-on modules on top of Odoo 18, built by
                            ASNT Level IIIs who use the system on their own client work every week:
                        </p>
                        <div className="grid md:grid-cols-2 gap-2 mt-4">
                            {atlantisAddons.map((addon) => (
                                <div key={addon} className="flex items-start gap-2 text-sm text-slate-700">
                                    <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                    <span>{addon}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-700 leading-relaxed mt-6">
                            The combination matters. Odoo gives you a globally supported, open-source
                            ERP chassis with guaranteed data portability — if Atlantis ever disappeared,
                            your data, configuration and workflows remain on Odoo and are portable to
                            any one of the 4,000+ certified Odoo partners worldwide. Atlantis gives
                            you the NDT-industry body that makes that chassis usable on day one. You
                            get both layers as an affordable, fully customizable SaaS — not seven figures for a custom build.
                        </p>
                    </section>

                    {/* ── 6. Vendor Comparison ─────────────────────────────── */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Vendor Comparison</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            We maintain side-by-side comparison pages against the ten most-asked-about
                            alternatives. Click the vendor name for the full evaluation; the headline
                            table below summarizes how each ranks on the criteria that matter for
                            inspection businesses: native NDT field support, certification tracking
                            depth, deployment time, year-one cost, and hosting model.
                        </p>
                        <div className="overflow-x-auto bg-white rounded-lg shadow-sm border border-slate-200">
                            <table className="w-full text-sm">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="px-3 py-3 text-left font-semibold">Compare</th>
                                        <th className="px-3 py-3 text-left font-semibold">NDT-native fields</th>
                                        <th className="px-3 py-3 text-left font-semibold">Cert tracking</th>
                                        <th className="px-3 py-3 text-left font-semibold">Deploy time</th>
                                        <th className="px-3 py-3 text-left font-semibold">Year-1 cost</th>
                                        <th className="px-3 py-3 text-left font-semibold">Hosted / Self</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t bg-orange-50">
                                        <td className="px-3 py-3 font-semibold text-orange-700">Atlantis NDT ERP</td>
                                        <td className="px-3 py-3">Yes (15+ NDT modules)</td>
                                        <td className="px-3 py-3">ASNT/ISO 9712/PCN/NAS 410 native</td>
                                        <td className="px-3 py-3">4 weeks</td>
                                        <td className="px-3 py-3">Affordable SaaS — fully customizable</td>
                                        <td className="px-3 py-3">Hosted or on-prem</td>
                                    </tr>
                                    {competitorLinks.map((c) => (
                                        <tr key={c.slug} className="border-t hover:bg-slate-50">
                                            <td className="px-3 py-3 font-semibold">
                                                <Link to={`/compare/vs-${c.slug}`} className="text-orange-600 hover:underline">
                                                    vs {c.vendor}
                                                </Link>
                                            </td>
                                            <td className="px-3 py-3 text-slate-700">{c.native}</td>
                                            <td className="px-3 py-3 text-slate-700">{c.certTracking}</td>
                                            <td className="px-3 py-3 text-slate-700">{c.deploy}</td>
                                            <td className="px-3 py-3 text-slate-700">{c.cost}</td>
                                            <td className="px-3 py-3 text-slate-700">{c.hosted}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-slate-500 mt-3">
                            Pricing reflects publicly listed or independently benchmarked 2026
                            information for a 25-50 inspector deployment. Enterprise pricing varies.
                        </p>
                    </section>

                    {/* ── 7. Pricing ──────────────────────────────────────── */}
                    <section className="mb-16 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-10 border border-orange-200">
                        <h2 className="text-3xl font-bold mb-3">Pricing</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            One price. Everything included. No per-module up-sell.
                        </p>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-0 shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-orange-600">Fully Customizable</CardTitle>
                                    <p className="text-sm text-slate-600 mt-1">Standard tier — fits 95% of NDT inspection firms</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm text-slate-700">
                                        {[
                                            "Cloud-hosted on hardened, encrypted infrastructure",
                                            "Up to 25 named users (administrators + supervisors + inspectors)",
                                            "All 8 core modules + 15+ NDT-specific add-on modules",
                                            "Unlimited assets, clients, sites and inspection records",
                                            "Native QuickBooks / Xero / SAP / Dynamics / NetSuite / Tally integration",
                                            "Quarterly product upgrades with NDT-industry feature releases",
                                            "Email + SMS support with same-business-day acknowledgement",
                                            "Monthly admin training webinars and self-paced video library",
                                            "Regional data residency (US, EU, UAE, KSA, India, SG, AU)",
                                            "Contractual data-export guarantee (no vendor lock-in)"
                                        ].map((f) => (
                                            <li key={f} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-2xl text-slate-900">Enterprise tier</CardTitle>
                                    <p className="text-sm text-slate-600 mt-1">Quoted — for 150+ technicians or multi-entity groups</p>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3 text-sm text-slate-700">
                                        {[
                                            "150+ named users; multi-entity / multi-country consolidation",
                                            "24/7 phone support with named technical account manager",
                                            "Dedicated implementation engineer and quarterly on-site review",
                                            "Custom integrations (SAP S/4HANA, Maximo, Meridium, Synergi Life)",
                                            "On-premise Docker deployment for air-gap / SACS-002 environments",
                                            "Bespoke client-portal branding and white-label options",
                                            "API rate-limit lift and dedicated tenant for compliance isolation"
                                        ].map((f) => (
                                            <li key={f} className="flex items-start gap-2">
                                                <CheckCircle className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                                                <span>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to="/contact" className="inline-flex items-center gap-2 mt-6 text-orange-600 font-semibold hover:underline">
                                        Request enterprise quote <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </CardContent>
                            </Card>
                        </div>
                        <p className="text-xs text-slate-600 mt-5">
                            Atlantis NDT ERP is positioned as Affordable. Accessible. Fully Customizable.
                            Pricing varies by region and team size — request a tailored quote at
                            info@atlantisndt.com. Implementation is included in year one for the standard
                            tier (no separate setup fee for the first 25 users).
                        </p>
                    </section>

                    {/* ── 8. Implementation Timeline ──────────────────────── */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Implementation Timeline — 4 Weeks</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            From kickoff call to live production cutover in four weeks, with a parallel
                            run safety net. See the{" "}
                            <Link to="/ndt-erp-implementation-timeline" className="text-orange-600 hover:underline font-semibold">
                                full week-by-week implementation plan
                            </Link>{" "}
                            for the detailed playbook including deliverables, sign-offs and risk gates.
                        </p>
                        <div className="grid md:grid-cols-4 gap-4">
                            {[
                                { week: "Week 1", title: "Kickoff", body: "Discovery workshop, stakeholder map, data-source inventory, success metrics, sandbox tenant provisioned." },
                                { week: "Week 2", title: "Data Migration", body: "Assets, clients, technicians, qualifications, calibration records, open work orders imported. Validation against API/ASNT standards." },
                                { week: "Week 3", title: "Training", body: "Administrator (2 days), supervisor (1 day), inspector (half-day in-person or self-paced) tracks delivered. Parallel run begins." },
                                { week: "Week 4", title: "Go-Live", body: "Production cutover. Old tools deprecated. Email/SMS support handover. Week-5 stabilization check-in and 30-day post-launch review." }
                            ].map((step, idx) => (
                                <Card key={step.week} className="border-slate-200">
                                    <CardHeader>
                                        <div className="text-xs font-bold text-orange-600 uppercase tracking-wide">{step.week}</div>
                                        <CardTitle className="text-lg">{step.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-slate-700">{step.body}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* ── 9. ROI Calculator ───────────────────────────────── */}
                    <section className="mb-16 bg-white rounded-2xl p-10 border border-slate-200 shadow-sm">
                        <h2 className="text-3xl font-bold mb-4">ROI for a Typical 10-Technician NDT Firm</h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            For a 10-inspector NDT contractor running on QuickBooks plus six
                            spreadsheets today, the average annual savings reported by Atlantis NDT
                            ERP clients is approximately $42,000 — broken down across recovered
                            administrative time, billable utilization uplift, and prevented certification
                            lapse incidents. The{" "}
                            <Link to="/ndt-erp-roi-calculator" className="text-orange-600 hover:underline font-semibold">
                                full ROI calculator
                            </Link>{" "}
                            lets you input your own crew size, blended rate, and certification renewal
                            frequency.
                        </p>
                        <div className="grid md:grid-cols-3 gap-5">
                            <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                                <div className="text-3xl font-bold text-orange-600">$18,500</div>
                                <div className="text-sm font-semibold text-slate-900 mt-1">Admin time recovered</div>
                                <div className="text-xs text-slate-600 mt-1">~7 hrs/week × 50 wks × $52 blended rate</div>
                            </div>
                            <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                                <div className="text-3xl font-bold text-orange-600">$16,800</div>
                                <div className="text-sm font-semibold text-slate-900 mt-1">Billable utilization uplift</div>
                                <div className="text-xs text-slate-600 mt-1">+4% utilization × 10 techs × $42K avg rev/tech</div>
                            </div>
                            <div className="bg-orange-50 rounded-xl p-5 border border-orange-100">
                                <div className="text-3xl font-bold text-orange-600">$6,700</div>
                                <div className="text-sm font-semibold text-slate-900 mt-1">Lapse-incident risk avoided</div>
                                <div className="text-xs text-slate-600 mt-1">Avg cost of 1 prevented cert-lapse audit finding</div>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 mt-4">
                            Savings figures are averages reported by Atlantis NDT ERP clients in the
                            10-15 technician segment as of 2026 Q1. Individual results vary by
                            baseline process maturity, client portfolio mix, and audit exposure.
                        </p>
                    </section>

                    {/* ── 10. City Coverage ───────────────────────────────── */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                            <MapPin className="w-7 h-7 text-orange-600" /> City Coverage
                        </h2>
                        <p className="text-slate-700 leading-relaxed mb-6">
                            Atlantis NDT ERP is deployed across NDT inspection companies in 150+ cities
                            worldwide. Below are 20 of the largest oil-and-gas and industrial hubs —
                            click any city for the localized buyer's guide including local
                            contractors, regulatory bodies, currency-converted pricing, and city-specific
                            case studies.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {topCities.map((c) => (
                                <Link key={c.slug} to={`/ndt-erp-${c.slug}`}
                                    className="block px-4 py-3 bg-white border border-slate-200 rounded-lg text-slate-700 hover:border-orange-400 hover:text-orange-600 hover:shadow-sm transition text-sm font-medium">
                                    NDT ERP {c.label}
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* ── 10b. Canadian NDT Service Providers ─────────────── */}
                    <section className="mb-16 prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold mb-6">Built for Canadian NDT Inspection Service Companies</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Canada's national NDT personnel certification runs through Natural Resources
                            Canada's National Non-Destructive Testing Certification Body (NRCan NDTCB)
                            under the CAN/CGSB-48.9712 standard — Canada's identical adoption of ISO 9712.
                            The Canadian General Standards Board, which historically published that
                            standard, ceased operations as a cost-saving measure announced in Canada's
                            2025 federal budget; NRCan NDTCB's certification services and the
                            CAN/CGSB-48.9712 standard itself continue without interruption, so inspection
                            companies working Canadian sites should expect no near-term change to who
                            certifies their technicians or which standard governs the written practice.
                            For a company also holding ASNT SNT-TC-1A accounts, the practical question is
                            less about NRCan NDTCB's role — that stays stable — and more about holding
                            both schemes correctly in one system of record rather than two disconnected
                            ones.
                        </p>
                        <p className="text-slate-700 leading-relaxed mt-4">
                            Where the work concentrates shapes what that system needs to do:{" "}
                            <Link to="/ndt-erp-calgary" className="text-orange-600 hover:underline">Calgary</Link> and{" "}
                            <Link to="/ndt-erp-edmonton" className="text-orange-600 hover:underline">Edmonton</Link> run
                            on upstream headquarters and refining/petrochemical qualification mixes,{" "}
                            <Link to="/ndt-erp-fort-mcmurray" className="text-orange-600 hover:underline">Fort McMurray</Link> on
                            remote oil-sands turnaround and camp-rotation scheduling,{" "}
                            <Link to="/ndt-erp-halifax" className="text-orange-600 hover:underline">Halifax</Link> on
                            a decades-long shipbuilding programme's structural-weld examination,{" "}
                            <Link to="/ndt-erp-montreal" className="text-orange-600 hover:underline">Montreal</Link> on
                            NAS 410-adjacent civil-aerospace personnel tracking,{" "}
                            <Link to="/ndt-erp-toronto" className="text-orange-600 hover:underline">Toronto</Link> on
                            nuclear-refurbishment documentation discipline, and{" "}
                            <Link to="/ndt-erp-vancouver" className="text-orange-600 hover:underline">Vancouver</Link> on
                            port and marine-terminal statutory inspection cycles. Atlantis NDT ERP's{" "}
                            <Link to="/erp-modules/certification-tracking" className="text-orange-600 hover:underline">
                                certification tracking module
                            </Link>{" "}
                            holds CAN/CGSB-48.9712 alongside ASNT SNT-TC-1A, ASNT CP-189, ISO 9712, PCN,
                            CSWIP and NAS 410 as parallel qualification sets per technician, so a company
                            running Canadian and international accounts from one office is not forced to
                            choose which scheme its records are built around.
                        </p>
                    </section>

                    {/* ── 11. FAQ ─────────────────────────────────────────── */}
                    <section className="mb-16">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-3">
                            {faqs.map((f, i) => (
                                <details key={i} className="bg-white rounded-lg shadow-sm border border-slate-200 group">
                                    <summary className="cursor-pointer font-semibold text-slate-900 px-6 py-4 flex justify-between items-center">
                                        <span className="pr-4">{f.q}</span>
                                        <span className="text-orange-600 text-2xl group-open:rotate-45 transition-transform">+</span>
                                    </summary>
                                    <div className="px-6 pb-5 text-slate-700 text-sm leading-relaxed">{f.a}</div>
                                </details>
                            ))}
                        </div>
                    </section>

                    {/* ── 12. Demo CTA ────────────────────────────────────── */}
                    <section className="text-center py-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl border border-orange-200 text-white">
                        <h2 className="text-3xl font-bold mb-4">See It On Your Data — 45-Minute Demo</h2>
                        <p className="text-orange-50 mb-6 max-w-2xl mx-auto leading-relaxed">
                            Walk through certification matrix, calibration tracking, project P&amp;L
                            and your accounting integration with the ASNT Level III implementation
                            team. We use your real data, not a generic slide deck.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center">
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition">
                                Request technical demo <ArrowRight className="w-5 h-5" />
                            </Link>
                            <a href="tel:+12818408969" className="inline-flex items-center gap-2 bg-orange-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-900 transition">
                                Call +1 (281) 840-8969
                            </a>
                        </div>
                    </section>

                    {/* ── Related Platforms ──────────────────────────────── */}
                    <section className="mt-16">
                        <h2 className="text-2xl font-bold mb-6">Related Atlantis Platforms</h2>
                        <div className="grid md:grid-cols-3 gap-5">
                            <Link to="/best-ndt-reporting-software-2026" className="block bg-white p-6 rounded-xl border hover:shadow-md transition group">
                                <Database className="w-8 h-8 text-orange-600 mb-3" />
                                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition">NDT Reporting Software</h3>
                                <p className="text-sm text-slate-600">Field inspection report generation — API 510/570/653 templates, mobile capture, eIDAS signing.</p>
                            </Link>
                            <Link to="/digital-twins" className="block bg-white p-6 rounded-xl border hover:shadow-md transition group">
                                <Layers className="w-8 h-8 text-orange-600 mb-3" />
                                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition">NDT Digital Twins</h3>
                                <p className="text-sm text-slate-600">3D asset visualization with NDT inspection data overlay, RBI integration, FFS evidence.</p>
                            </Link>
                            <Link to="/consulting" className="block bg-white p-6 rounded-xl border hover:shadow-md transition group">
                                <Building2 className="w-8 h-8 text-orange-600 mb-3" />
                                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition">ASNT Level III Consulting</h3>
                                <p className="text-sm text-slate-600">Independent Level III procedure approval, written practice authoring, audit support.</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <CustomerLogosBlock />
            <ContactDetails />
        </div>
    );
}
