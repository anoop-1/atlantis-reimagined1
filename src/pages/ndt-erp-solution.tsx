import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import CustomerLogosBlock from "@/components/CustomerLogosBlock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle, Wrench, BarChart3, Users, Calendar, DollarSign, TrendingUp,
    Shield, FileCheck, Award, AlertCircle, ArrowRight, Database, Cog, ClipboardList
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buildTechArticleSchema, ATLANTIS_AUTHOR_ANOOP, ATLANTIS_PUBLISHER } from "@/data/author-schema";

const URL = "https://atlantisndt.com/ndt-erp-solution";

const modules = [
    {
        title: "Technician & Personnel Management",
        icon: Users,
        description: "Track every certification — ASNT SNT-TC-1A, ISO 9712, PCN, CGSB, NAS 410 — with method matrix, vision acuity records (Jaeger #2 / Snellen 20/30), annual retest dates, employer-of-record letters. Auto-alerts 90/60/30 days before expiry. No more lost OJT logs at audit.",
        codes: "ASNT SNT-TC-1A, ASNT CP-189, ISO 9712, EN 4179, NAS 410, CGSB-48.9712, AINDT BINDT PCN"
    },
    {
        title: "Equipment Calibration Tracking",
        icon: Wrench,
        description: "Calibration intervals per ASTM E797, ASTM E1316, ISO 17025. NIST traceability records. Block, transducer, and instrument lifecycle. Out-of-tolerance alerts auto-pause field deployment. Calibration certificates archived with SHA-256 hash for audit.",
        codes: "ASTM E317, ASTM E797, ISO 17025, NIST traceability"
    },
    {
        title: "Project & Work Order Management",
        icon: ClipboardList,
        description: "Bid → quote → PO → schedule → field execution → report → invoice. Per-project P&L, per-technician utilization, per-equipment availability. RACI matrix per project. Subcontractor portal for client-of-client work.",
        codes: "Aligned to API Q1, ISO 9001:2015 §8.1, ISO 17020"
    },
    {
        title: "Procedure & Document Control",
        icon: FileCheck,
        description: "Written practice (WP), procedures (per ASME V Article 1, ISO 17635), instructions, technical justifications. Version-controlled with effective date, expiry date, approver Level III signature. Auto-distribution to authorized personnel only — ISO 9001:2015 §7.5 compliant.",
        codes: "ISO 9001:2015, ISO 17020, ASME BPVC Section V"
    },
    {
        title: "Financial Management & Invoicing",
        icon: DollarSign,
        description: "Multi-currency, multi-tax-jurisdiction. Native QuickBooks Online, Xero, SAP S/4HANA, Microsoft Dynamics 365, Tally Prime, Zoho Books integrations. Per-project COGS, gross margin, billable utilization. Auto-invoicing by milestone, T&M, or fixed-fee.",
        codes: "GAAP, IFRS, GST, VAT-compliant"
    },
    {
        title: "Client & Subcontractor Portal",
        icon: BarChart3,
        description: "Clients see their reports, schedules, and invoices. Subcontractors see their assignments, technicians, and payments. SSO via SAML / OIDC. Audit-grade activity log. SLA-tied response time. Mobile-responsive across all carrier networks tested in offshore + remote sites.",
        codes: "SOC 2 Type II target, GDPR, SAML 2.0 / OIDC SSO"
    },
];

const competitors = [
    {
        rank: 1,
        name: "Atlantis NDT ERP (Odoo 18 base)",
        bestFor: "NDT inspection service providers (5-500 technicians)",
        strengths: [
            "Pre-configured for NDT day one — ASNT SNT-TC-1A written practice, ISO 9712 method matrix, NAS 410 + EN 4179 aerospace tracks",
            "Calibration tracking aligned to ASTM E797 + ISO 17025",
            "Procedure control hooks into Atlantis Reporting Software",
            "Mobile-responsive offline-capable field app",
            "ASNT Level III authored — built by inspectors, not generalists",
            "Affordable for SME inspection contractors",
        ],
        weaknesses: [
            "Newer in this niche (2024 launch) vs incumbents",
            "Best-fit is dedicated NDT shops; less ideal if NDT is <10% of business mix",
        ],
        pricing: "$18,000/yr for full ERP suite + unlimited users (SMEs); enterprise tiers available",
        verdict: "Best overall for NDT-first organizations. Replaces 5-7 disconnected tools (spreadsheets, QB, scheduling app, certification tracker, calibration log)."
    },
    {
        rank: 2,
        name: "SAP S/4HANA + Plant Maintenance + custom NDT extensions",
        bestFor: "Tier-1 EPCs and operators with SAP corporate-wide",
        strengths: ["Deep ERP integration", "Large SI ecosystem", "Multi-entity consolidation"],
        weaknesses: [
            "Not designed for NDT — every ASNT/ISO concept must be custom-built",
            "Implementation 12-24 months, $500K-$5M typical",
            "Inspector mobile UX poor — Work Manager / Asset Manager rated 2.x stars by field users",
            "Certification tracking requires SuccessFactors add-on at extra cost",
        ],
        pricing: "$1M+ year one; $200K+/yr ongoing licence; per-user named licences",
        verdict: "Painful fit for inspection. Choose only if SAP is mandated corporate-wide AND you have $1M+ to spend on NDT customization."
    },
    {
        rank: 3,
        name: "IBM Maximo Application Suite",
        bestFor: "Operators with Maximo as core EAM",
        strengths: ["Mature EAM", "Work order + asset workflows integrated", "MAS on OpenShift scalable"],
        weaknesses: [
            "Generic EAM — no API 510/570/653 inspection workflows out-of-box",
            "Certification tracking via SuccessFactors / Talent Mgmt — separate licence",
            "Mobile UX adequate but not inspector-optimized",
            "AI requires Watson integration — separate cost",
        ],
        pricing: "$250K-$1M+/yr enterprise (per-user + per-asset)",
        verdict: "Viable backbone if Maximo already in place. Budget 6-12 months customization for inspection-grade ERP coverage."
    },
    {
        rank: 4,
        name: "Microsoft Dynamics 365 (F&O + Field Service + Project Operations)",
        bestFor: "Mid-market operators on Microsoft stack (Office 365, Azure)",
        strengths: ["Native Office 365 integration", "Power Platform extensibility", "Field Service mobile is strong"],
        weaknesses: [
            "No NDT-specific configuration — Power Platform build required",
            "Inspector certification tracking custom build (Power Apps + Dataverse)",
            "Calibration tracking custom build",
            "Integration partner ecosystem strong but adds cost",
        ],
        pricing: "$95-$210/user/month + Power Platform consumption + implementation",
        verdict: "Good base for those committed to Microsoft ecosystem. NDT specialization remains a custom build effort."
    },
    {
        rank: 5,
        name: "NetSuite (Oracle)",
        bestFor: "Multi-entity inspection groups with mixed services revenue",
        strengths: ["Strong financial consolidation", "Multi-currency multi-subsidiary native", "OpenAir for project services"],
        weaknesses: [
            "No NDT/inspection vertical — generic professional services template",
            "Certification & calibration tracking via SuiteApps marketplace — third-party",
            "Mobile field UX limited",
        ],
        pricing: "$999/mo base + per-user; implementation $50K-$250K",
        verdict: "Solid choice for multi-entity firms where financial consolidation is primary driver. NDT-specific gaps remain."
    },
    {
        rank: 6,
        name: "Salesforce Field Service + Service Cloud",
        bestFor: "Inspection groups already on Salesforce Sales Cloud",
        strengths: ["Strong scheduling engine", "Mobile field service app robust", "AppExchange ecosystem"],
        weaknesses: [
            "Not financial-system-of-record — needs separate ERP",
            "Inspection certification + calibration via Salesforce platform custom build",
            "Cost stacks fast — Field Service licence + platform + storage + integrations",
        ],
        pricing: "$150-$220/user/month Field Service edition + Sales/Service licences",
        verdict: "Excellent CRM + dispatch layer. Pair with a true ERP (NetSuite / Atlantis / Dynamics) for financials."
    },
    {
        rank: 7,
        name: "Zoho One (Books + Projects + People + CRM)",
        bestFor: "Very price-sensitive SME contractors",
        strengths: ["Cheapest of the named platforms", "Reasonable mobile apps", "Quick deployment"],
        weaknesses: [
            "Generic — every NDT concept is custom build",
            "Limited audit-trail strength vs SAP/Oracle/Atlantis",
            "Reporting depth modest",
        ],
        pricing: "$45/user/month Zoho One bundle",
        verdict: "Fits a 5-15 inspector startup. Plan migration as you scale beyond 25-30 technicians."
    },
    {
        rank: 8,
        name: "QuickBooks + Excel + manual scheduling (status quo)",
        bestFor: "1-5 inspector micro-shops with low audit risk",
        strengths: ["Lowest cost", "Universally understood"],
        weaknesses: [
            "No certification expiry alerts — failed audits common",
            "No calibration interval tracking — out-of-tolerance equipment in field is real risk",
            "No project P&L — gross margin invisible",
            "Not auditable to ISO 17020, API Q1, or oil major prequalification",
        ],
        pricing: "$80-$200/mo QuickBooks + Office 365",
        verdict: "Acceptable below 5 technicians + low-stakes work. Becomes a liability fast as volume grows or audits arrive."
    },
];

const faqs = [
    {
        q: "What is NDT ERP software?",
        a: "NDT ERP (Enterprise Resource Planning) software is a unified business management platform built specifically for non-destructive testing inspection companies. Unlike generic ERP, an NDT ERP comes pre-configured with ASNT SNT-TC-1A written practice templates, ISO 9712 certification matrices, ASTM E797 calibration intervals, API 510/570/653 procedure libraries, and aerospace NAS 410 / EN 4179 personnel tracking. It replaces 5-7 disconnected tools — accounting software, scheduling spreadsheets, certification trackers, calibration logs, project management apps, and client portals — with one integrated system."
    },
    {
        q: "How much does NDT ERP cost?",
        a: "Atlantis NDT ERP is $18,000/year for the full suite with unlimited users, suitable for inspection companies with 5-150 technicians. Enterprise tiers for 150+ technicians are quoted separately. Comparable platforms range widely — Zoho One bundles run ~$45/user/month, NetSuite implementations start $50,000 plus subscription, while SAP S/4HANA NDT customizations frequently exceed $1 million in year-one cost. The right tier depends on your inspection volume, regulatory exposure, and existing IT stack."
    },
    {
        q: "Does NDT ERP integrate with my existing accounting software?",
        a: "Yes. Atlantis NDT ERP includes native two-way integrations for QuickBooks Online, Xero, Sage Intacct, SAP S/4HANA, Microsoft Dynamics 365 Business Central, Tally Prime, and Zoho Books. Invoices and bills sync in real time. For systems without a native connector we provide REST-API and Zapier paths. We never recommend manual CSV import for production accounting flows."
    },
    {
        q: "Will NDT ERP track ASNT and ISO 9712 certifications automatically?",
        a: "Yes. The Personnel module stores each technician's ASNT, ISO 9712, PCN, CGSB, and NAS 410 / EN 4179 certification records with method matrix, level (I, II, III), recognized-by employer, vision acuity test (Jaeger #2 + Snellen 20/30 + color), specific procedures qualified for, OJT logs, and exam scores. The system fires automated alerts at 90 / 60 / 30 / 7 days before any record expires, prevents un-qualified technicians from being scheduled on a method they're not certified for, and produces audit-ready certification packages for ADNOC, Aramco, QatarEnergy, Boeing GP-150, and Airbus AIPS prequalifications."
    },
    {
        q: "How does NDT ERP handle equipment calibration tracking?",
        a: "Each instrument, transducer, calibration block, and accessory is logged with its calibration interval (per ASTM E797, ASTM E1316, manufacturer spec, or your written practice — whichever is shortest), NIST-traceable certificate, due date, and assigned-to technician. When an instrument approaches calibration due, the system blocks new field deployment until re-calibration is recorded and the certificate is uploaded. SHA-256 hash of every certificate prevents tampering. Auditors can pull the full lifecycle of any equipment in seconds."
    },
    {
        q: "Is NDT ERP cloud-hosted or on-premise?",
        a: "Atlantis NDT ERP is cloud-hosted by default on hardened SOC 2 Type II infrastructure with regional data residency in USA, EU, UAE, and India to comply with GDPR, NDMP (UAE), Saudi PDPL, and DPDP (India) data sovereignty rules. On-premise deployment is available for clients with air-gap requirements (defense / nuclear) — typically Docker-based, deployed in your own infrastructure, with quarterly security patch cadence."
    },
    {
        q: "Can I migrate from QuickBooks + Excel without losing history?",
        a: "Yes. We run a structured migration playbook — discovery, data mapping, parallel run, cutover. Your existing QuickBooks chart of accounts, customer list, vendor list, open invoices, and inventory transfer in. Excel certification trackers and calibration logs migrate via templated import. Typical migration is 4-6 weeks for a 25-50 technician shop. We do not lose history; we preserve audit trail back to your first transaction."
    },
    {
        q: "Does NDT ERP work for aerospace / NAS 410 environments?",
        a: "Yes. The Aerospace track tracks NAS 410 (US) and EN 4179 (Europe) personnel certifications including Specific Procedure qualification, Method certification, Annual Acuity Test, and 5-year recertification cycle. Process specifications (Boeing GP-150, Airbus AIPS-01, Lockheed STP, GE / RR / P&W house specs) link to qualified personnel automatically. NADCAP audit packages auto-generate."
    },
    {
        q: "How does NDT ERP help with ISO 9001 / ISO 17020 audits?",
        a: "ISO 9001:2015 and ISO 17020 require documented control of records (clause 7.5), competence (7.2), monitoring/measurement equipment (7.1.5), and product/service requirements (8.2). NDT ERP captures all four with timestamped, immutable, version-controlled records. The audit module produces — on demand — the exact evidence packs ANAB / UKAS / EIAC / DAC ask for: certification matrix as of audit date, calibration log with NIST traceability, procedure register with effective dates, internal audit history, management review minutes, customer complaints log."
    },
    {
        q: "What's the difference between NDT ERP and a generic ERP like SAP or NetSuite?",
        a: "Generic ERPs were built for manufacturing, retail, and professional services. NDT ERP encodes the regulatory reality of inspection work — ASNT SNT-TC-1A written practice, ISO 9712 method matrix, ASTM E797 calibration intervals, API 510/570/653 procedure templates, NAS 410 vision acuity tests, NIST traceability for blocks. On a generic ERP these features must be custom-built (typical 6-18 months at $200K-$2M). On Atlantis NDT ERP they are pre-configured, day-one-ready, and maintained by an ASNT Level III team that uses the system on their own client work."
    },
    {
        q: "Can clients see their inspection reports and invoices through NDT ERP?",
        a: "Yes. The Client Portal gives each customer SSO access (SAML 2.0 or OIDC) to their reports, certification packages, schedules, invoices, and KPI dashboards. Permissions are role-based — a refinery's procurement person sees billing, the integrity engineer sees reports, the Q/A manager sees procedures and calibration records. All access is logged for SOC 2 audit."
    },
    {
        q: "How do I know NDT ERP won't be deprecated like other niche tools?",
        a: "Atlantis NDT ERP is built on Odoo 18 — an open-source ERP with 12+ million users globally and a 2,000+ contributor community. Even in the unlikely event Atlantis discontinued operations, your data, configuration, and workflows remain on Odoo and are portable to any Odoo partner worldwide. We provide a documented data export path in customer contracts. No vendor lock-in."
    },
];

const benefits = [
    { stat: "20%", label: "Higher billable utilization", detail: "Tighter scheduling + visibility into bench time" },
    { stat: "40%", label: "Less administrative overhead", detail: "One system replaces 5-7 disconnected tools" },
    { stat: "90%", label: "Audit-ready certification matrix", detail: "Auto-alerts prevent expired-cert deployments" },
    { stat: "30 d", label: "From kick-off to live", detail: "vs 6-18 months for generic ERP customisation" },
];

export default function NDTERPSolution() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            buildTechArticleSchema({
                url: URL,
                headline: "NDT ERP Software 2026 — Atlantis vs SAP, Maximo, Dynamics 365, NetSuite",
                description:
                    "Compare NDT ERP solutions: Atlantis NDT ERP, SAP S/4HANA + PM, IBM Maximo, Microsoft Dynamics 365, NetSuite, Salesforce Field Service, Zoho One. Pre-configured ASNT SNT-TC-1A, ISO 9712, ASTM E797 calibration tracking. Pricing, modules, FAQs.",
                datePublished: "2026-04-22",
                dateModified: "2026-05-07",
                section: "NDT ERP — Buyer's Guide",
                keywords:
                    "NDT ERP software, NDT business management software, inspection company ERP, ASNT certification tracking software, ISO 9712 software, calibration tracking, API 510 ERP, NDT scheduling software, Odoo NDT, SAP NDT alternative, Maximo NDT alternative",
                dependencies:
                    "ASNT SNT-TC-1A, ASNT CP-189, ISO 9712, EN 4179, NAS 410, ISO 9001:2015, ISO 17020, ISO 17025, ASTM E797, API Q1, API 510, API 570, API 653",
            }),
            { "@type": "Organization", "@id": "https://atlantisndt.com/#organization", ...ATLANTIS_PUBLISHER },
            { "@type": "Person", "@id": "https://atlantisndt.com/#anoop-rayavarapu", ...ATLANTIS_AUTHOR_ANOOP },
            {
                "@type": "SoftwareApplication",
                "@id": `${URL}#software`,
                "name": "Atlantis NDT ERP",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Cloud / Web (browser); iOS; Android; on-premise Docker",
                "softwareVersion": "2026.5",
                "description":
                    "Enterprise resource planning software pre-configured for NDT inspection service companies. Manages personnel certifications (ASNT SNT-TC-1A, ISO 9712, NAS 410), equipment calibration (ASTM E797), procedures (ISO 17020), projects, financials, and client portal in one integrated platform.",
                "url": URL,
                "publisher": { "@id": "https://atlantisndt.com/#organization" },
                "author": { "@id": "https://atlantisndt.com/#anoop-rayavarapu" },
                "offers": {
                    "@type": "Offer",
                    "url": URL,
                    "price": "18000",
                    "priceCurrency": "USD",
                    "priceValidUntil": "2027-12-31",
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
                        { "@type": "Country", "name": "Australia" },
                    ],
                },
                "featureList": modules.map(m => m.title).join(" • "),
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.8",
                    "ratingCount": "47",
                    "bestRating": "5",
                    "worstRating": "1",
                },
            },
            {
                "@type": "FAQPage",
                "@id": `${URL}#faq`,
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
            },
            {
                "@type": "ItemList",
                "name": "NDT ERP Software 2026 — Compared",
                "itemListOrder": "https://schema.org/ItemListOrderDescending",
                "numberOfItems": competitors.length,
                "itemListElement": competitors.map(c => ({
                    "@type": "ListItem",
                    "position": c.rank,
                    "name": c.name,
                    "description": c.verdict,
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT ERP Software 2026 — Atlantis vs SAP, Maximo, Dynamics, NetSuite | Atlantis NDT"
                description="Compare top NDT ERP platforms 2026 — Atlantis (Odoo-based), SAP S/4HANA, Maximo, Dynamics 365, NetSuite, Zoho One. Pre-configured ASNT SNT-TC-1A, ISO 9712, ASTM E797 calibration. $18,000/yr full suite. ASNT Level III authored."
                keywords="NDT ERP software, NDT ERP solution, inspection company ERP, ASNT certification tracking, ISO 9712 software, calibration tracking software, NDT scheduling, NDT business software, Odoo NDT, SAP NDT alternative"
                canonical={URL}
                ogImage="/atlantis.jpg"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-red-600 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-5xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-orange-100 mb-4">
                            <Award className="w-5 h-5" />
                            <span className="text-sm">Buyer's Guide — Updated May 2026</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            NDT ERP Software 2026 — Compared, Costed, Audited
                        </h1>
                        <p className="text-xl text-orange-50 mb-6 leading-relaxed">
                            Independent, ASNT Level III-authored comparison of NDT ERP solutions across
                            personnel certification tracking (ASNT SNT-TC-1A, ISO 9712, NAS 410),
                            equipment calibration (ASTM E797 + ISO 17025), project + financial control,
                            and audit readiness for ISO 9001 / 17020 / API Q1.
                        </p>
                        <p className="text-sm text-orange-100">
                            Author: <strong>Anoop Rayavarapu</strong> — ASNT NDT Level III (multi-method),
                            API 653 Authorized Inspector, ISO 9001:2015 Lead Auditor. Founder &amp; CEO,
                            Atlantis NDT.
                            <em> Disclosure: Atlantis NDT ERP ranks #1 in this comparison — reasoning is
                            documented section by section. Evaluate independently against your stack.</em>
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white border-b">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        {benefits.map(b => (
                            <div key={b.label}>
                                <div className="text-4xl font-bold text-orange-600 mb-2">{b.stat}</div>
                                <div className="font-semibold text-slate-900">{b.label}</div>
                                <div className="text-sm text-slate-600 mt-1">{b.detail}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <article className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-5xl px-6">

                    <section className="mb-12 prose prose-lg max-w-none">
                        <h2 className="text-3xl font-bold mb-4">What an NDT ERP must actually do</h2>
                        <p className="text-slate-700 leading-relaxed">
                            Most "NDT companies" we audit are running a generic ERP plus 4-6 spreadsheets
                            plus QuickBooks plus Outlook calendar plus a paper certification binder.
                            That stack passes a quiet day. It fails the day Aramco asks for the
                            certification matrix as it stood on the 14th of last month, or when the
                            QC Director discovers a UT instrument was 47 days out of calibration during
                            a critical pressure-vessel inspection, or when the auditor wants to see the
                            specific written practice version under which a Level II MT technician was
                            certified on procedure MT-007-Rev3 last March.
                        </p>
                        <p className="text-slate-700 leading-relaxed mt-4">
                            An NDT-purpose ERP encodes the regulatory reality of the inspection trade:
                            ASNT SNT-TC-1A (or CP-189) written practice, ISO 9712 method matrix
                            including all twelve qualified procedures and acuity tests, NAS 410 / EN 4179
                            for aerospace, ASTM E797 + ISO 17025 calibration intervals with NIST
                            traceability, ASME BPVC Section V procedures with effective and expiry dates,
                            API 510/570/653 inspection workflows with API 581 RBI hand-off. None of
                            this is configurable in a week on a generic ERP — it has to be the spine.
                        </p>
                        <p className="text-slate-700 leading-relaxed mt-4">
                            This page walks through the eight evaluation criteria that matter, ranks
                            the eight serious NDT ERP options on the market in 2026, and answers the
                            twelve questions buyers ask us most. We then tell you which platform fits
                            which size of organization, with honest commentary on where Atlantis NDT
                            ERP wins and where it does not.
                        </p>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Eight evaluation criteria</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { t: "Personnel certification depth", d: "ASNT SNT-TC-1A written practice, ISO 9712 12-method matrix, NAS 410 / EN 4179 aerospace, vision acuity (Jaeger #2 + Snellen 20/30 + Ishihara color), OJT logs, Level III approver chain — pre-configured, not custom-built." },
                                { t: "Equipment calibration tracking", d: "Per-instrument calibration intervals to ASTM E797 / ISO 17025 / written-practice; NIST-traceable certificates with hash-chain integrity; auto-block of out-of-tolerance equipment from field deployment." },
                                { t: "Procedure and document control", d: "Versioned procedures aligned to ASME V Article 1 / ISO 17635; effective-date and expiry-date fields; restricted-distribution to qualified personnel only; ISO 9001:2015 §7.5 evidence pack." },
                                { t: "Project P&L visibility", d: "Per-project revenue, COGS (technician hours + equipment + travel + consumables), gross margin, on-time delivery KPI; per-technician utilization vs target; per-equipment availability." },
                                { t: "Audit readiness for prequalifications", d: "ADNOC PQQ, Aramco SAEP, QatarEnergy QPP, ONGC HVT, NADCAP MAUP — produces evidence pack on demand; ISO 9001:2015 / ISO 17020 / API Q1 internal audit support." },
                                { t: "Mobile field capture (offline)", d: "Inspectors at offshore platforms, refinery shutdowns, tank interiors — tablet/phone offline data capture, sync without loss, hash-stamped records." },
                                { t: "Native accounting integration", d: "Two-way QuickBooks Online / Xero / SAP / Dynamics 365 / NetSuite / Tally / Zoho Books — not flat file exports, not weekly batch jobs." },
                                { t: "Total cost of ownership (5-year view)", d: "Licence + implementation + customization + annual maintenance + integration + upgrade — full picture, not licence headline." },
                            ].map((x) => (
                                <Card key={x.t} className="border-slate-200">
                                    <CardContent className="pt-5">
                                        <div className="font-semibold text-slate-900 mb-1">{x.t}</div>
                                        <div className="text-sm text-slate-600">{x.d}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Atlantis NDT ERP — six core modules</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {modules.map((m) => (
                                <Card key={m.title} className="border-slate-200 hover:shadow-md transition">
                                    <CardHeader className="pb-2">
                                        <m.icon className="w-8 h-8 text-orange-600 mb-2" />
                                        <CardTitle className="text-lg">{m.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-700 text-sm mb-3">{m.description}</p>
                                        <p className="text-xs text-slate-500"><strong>Aligned to:</strong> {m.codes}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">At-a-glance comparison — 8 platforms</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="px-3 py-3 text-left font-semibold">#</th>
                                        <th className="px-3 py-3 text-left font-semibold">Platform</th>
                                        <th className="px-3 py-3 text-left font-semibold">Best for</th>
                                        <th className="px-3 py-3 text-left font-semibold">Pricing (year 1)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {competitors.map((c) => (
                                        <tr key={c.rank} className={`border-t ${c.rank === 1 ? "bg-orange-50" : ""}`}>
                                            <td className="px-3 py-3 font-bold text-orange-600">{c.rank}</td>
                                            <td className="px-3 py-3 font-semibold text-slate-900">{c.name}</td>
                                            <td className="px-3 py-3 text-slate-700 text-xs">{c.bestFor}</td>
                                            <td className="px-3 py-3 text-slate-700 text-xs">{c.pricing}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {competitors.map((c) => (
                        <section key={c.rank} className="mb-10 bg-white rounded-xl border border-slate-200 p-8 shadow-sm">
                            <div className="flex items-start gap-4 mb-5">
                                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-xl">
                                    {c.rank}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-1">{c.name}</h3>
                                    <p className="text-slate-600 italic">{c.bestFor}</p>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6 mb-5">
                                <div>
                                    <h4 className="font-semibold text-emerald-700 mb-2 flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4" /> Strengths
                                    </h4>
                                    <ul className="space-y-1.5 text-sm text-slate-700">
                                        {c.strengths.map((s) => (
                                            <li key={s} className="flex items-start gap-2">
                                                <span className="text-emerald-600 mt-0.5">+</span>
                                                <span>{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-rose-700 mb-2 flex items-center gap-2">
                                        <AlertCircle className="w-4 h-4" /> Weaknesses
                                    </h4>
                                    <ul className="space-y-1.5 text-sm text-slate-700">
                                        {c.weaknesses.map((s) => (
                                            <li key={s} className="flex items-start gap-2">
                                                <span className="text-rose-600 mt-0.5">−</span>
                                                <span>{s}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="bg-slate-50 border-l-4 border-orange-600 p-4 rounded">
                                <div className="text-sm font-semibold text-slate-900 mb-1">Verdict</div>
                                <div className="text-slate-700 text-sm">{c.verdict}</div>
                            </div>
                            <div className="mt-3 text-sm text-slate-600">
                                <strong>Pricing:</strong> {c.pricing}
                            </div>
                        </section>
                    ))}

                    <section className="mb-12 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-10 border border-orange-200">
                        <h2 className="text-3xl font-bold mb-6 text-center">How to choose</h2>
                        <div className="grid md:grid-cols-3 gap-5">
                            <Card className="border-0 shadow-sm">
                                <CardContent className="pt-5">
                                    <div className="font-semibold text-slate-900 mb-2">5-50 inspectors, NDT-first</div>
                                    <div className="text-sm text-slate-600">
                                        Atlantis NDT ERP. Day-one ready. $18K/yr. Replaces 5-7 tools.
                                        ROI typically 4-6 months on billable utilization recovery.
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-sm">
                                <CardContent className="pt-5">
                                    <div className="font-semibold text-slate-900 mb-2">50-500 inspectors, mixed services</div>
                                    <div className="text-sm text-slate-600">
                                        Atlantis NDT ERP enterprise tier OR Microsoft Dynamics 365
                                        + Power Platform NDT extensions. Choose based on your
                                        existing IT skill set and Microsoft commitment.
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="border-0 shadow-sm">
                                <CardContent className="pt-5">
                                    <div className="font-semibold text-slate-900 mb-2">500+ technicians, multinational</div>
                                    <div className="text-sm text-slate-600">
                                        SAP S/4HANA + Plant Maintenance + bespoke NDT layer, OR
                                        Maximo + custom NDT extensions, paired with Atlantis Reporting
                                        as the inspector-facing layer.
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    <section className="mb-12">
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

                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Related Atlantis platforms</h2>
                        <div className="grid md:grid-cols-3 gap-5">
                            <Link to="/best-ndt-reporting-software-2026" className="block bg-white p-6 rounded-xl border hover:shadow-md transition group">
                                <Database className="w-8 h-8 text-orange-600 mb-3" />
                                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition">NDT Reporting Software</h3>
                                <p className="text-sm text-slate-600">Code-aligned inspection report generation — API 510/570/653 templates, mobile capture, eIDAS signing.</p>
                            </Link>
                            <Link to="/digital-twins" className="block bg-white p-6 rounded-xl border hover:shadow-md transition group">
                                <Cog className="w-8 h-8 text-orange-600 mb-3" />
                                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition">NDT Digital Twins</h3>
                                <p className="text-sm text-slate-600">3D asset visualization with NDT inspection data overlay. RBI integration, predictive maintenance.</p>
                            </Link>
                            <Link to="/consulting" className="block bg-white p-6 rounded-xl border hover:shadow-md transition group">
                                <Shield className="w-8 h-8 text-orange-600 mb-3" />
                                <h3 className="font-bold text-lg mb-2 group-hover:text-orange-600 transition">ASNT Level III Consulting</h3>
                                <p className="text-sm text-slate-600">Independent Level III procedure approval, written practice authoring, audit support.</p>
                            </Link>
                        </div>
                    </section>

                    <section className="text-center py-10 bg-white rounded-2xl border border-slate-200">
                        <h2 className="text-3xl font-bold mb-4">Evaluating Atlantis NDT ERP?</h2>
                        <p className="text-slate-700 mb-6 max-w-2xl mx-auto">
                            Request a 45-minute technical demo with the ASNT Level III implementation
                            team. Walks through certification matrix, calibration tracking, project
                            P&amp;L, and your accounting integration — using your real data, not a
                            generic deck.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
                        >
                            Request technical demo <ArrowRight className="w-5 h-5" />
                        </Link>
                    </section>
                </div>
            </article>

            <CustomerLogosBlock />

            <ContactDetails />
        </div>
    );
}
