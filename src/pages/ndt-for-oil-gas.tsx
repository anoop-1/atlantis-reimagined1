import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle, Droplets, Shield, Award, GraduationCap, Cpu,
    Globe, Wrench, Factory, ArrowRight, ChevronDown, ChevronUp,
    AlertTriangle, BarChart3, FileText, Search, Layers, Thermometer
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const stats = [
    { value: "500+", label: "NDT Procedures Written" },
    { value: "API 510/570/653", label: "Certified Expertise" },
    { value: "30+", label: "Years O&G Experience" },
    { value: "All Methods", label: "UT · RT · MT · PT · ET · GWT" },
];

const assetTypes = [
    {
        icon: Factory,
        title: "Pressure Vessels",
        code: "API 510 / ASME VIII",
        ndtMethods: [
            "UT Thickness Gauging — corrosion mapping of shell, heads, nozzles",
            "Phased Array UT (PAUT) — weld inspection without radiography",
            "TOFD — time-of-flight diffraction for weld sizing",
            "RT / Digital Radiography — nozzle welds, repaired areas",
            "MT / PT — surface crack detection on welds and flanges",
        ],
        link: "/ultrasonic-testing",
    },
    {
        icon: Layers,
        title: "Piping Systems",
        code: "API 570 / ASME B31.3",
        ndtMethods: [
            "UT Thickness Measurement — point and grid corrosion mapping",
            "Guided Wave UT (GWT) — long-range screening of buried / insulated pipe",
            "Phased Array UT — weld seam and branch connection inspection",
            "Pulsed Eddy Current (PEC) — CUI screening without insulation removal",
            "RT / DR — piping welds, small-bore fittings",
        ],
        link: "/ultrasonic-testing",
    },
    {
        icon: Droplets,
        title: "Aboveground Storage Tanks",
        code: "API 653 / API 650",
        ndtMethods: [
            "MFL Floor Scanning — magnetic flux leakage for annular and floor plates",
            "UT Shell Course Mapping — wall loss quantification per API 653",
            "PAUT / RT — nozzle weld and shell seam inspection",
            "AUT (Automated UT) — large-area corrosion mapping",
            "MT / PT — weld seam surface defect detection",
        ],
        link: "/eddy-current-tube-inspection",
    },
    {
        icon: Globe,
        title: "Pipelines",
        code: "API 1104 / ASME B31.4/B31.8",
        ndtMethods: [
            "Guided Wave UT — long-range screening from a single test point",
            "AUT (Automated UT) — girth weld and corrosion inspection",
            "In-Line Inspection (ILI) — intelligent pigging, MFL and UT tools",
            "Corrosion Mapping — zone-by-zone wall thickness trending",
            "DCVG / CIPS — coating and cathodic protection assessment",
        ],
        link: "/ultrasonic-testing",
    },
    {
        icon: Shield,
        title: "Offshore Structures",
        code: "API RP 2A / ISO 19902",
        ndtMethods: [
            "UT Thickness — splash zone and submerged member inspection",
            "ACFM (Alternating Current Field Measurement) — weld crack detection",
            "MPI (Magnetic Particle Inspection) — surface cracks on tubular welds",
            "RT — node weld and repair inspection",
            "Rope Access NDT — access to jacket, risers, and topside structures",
        ],
        link: "/consulting",
    },
    {
        icon: Thermometer,
        title: "Heat Exchangers",
        code: "API 510 / TEMA",
        ndtMethods: [
            "ECT (Eddy Current Tube Testing) — non-ferrous tube inspection",
            "RFEC (Remote Field ECT) — carbon steel tube inspection",
            "IRIS (Internal Rotary Inspection System) — high-resolution tube wall",
            "NFET / LFET — fin-fan and air-cooled heat exchanger tubes",
            "UT — shell, channel, floating head, and nozzle inspection",
        ],
        link: "/eddy-current-tube-inspection",
    },
];

const apiStandards = [
    {
        code: "API 510",
        title: "Pressure Vessel Inspection Code",
        description:
            "Governs the inspection, repair, alteration, and re-rating of in-service pressure vessels. Defines inspection intervals (internal and external), minimum thickness calculations, fitness for service evaluation, and authorized inspector requirements. Atlantis provides procedure development, API 510 inspector certification training, and third-party audits.",
        link: "/api-510-certification",
    },
    {
        code: "API 570",
        title: "Piping Inspection Code",
        description:
            "Covers inspection, repair, alteration, and re-rating of in-service piping systems. Includes CMLs (corrosion monitoring locations), inspection class (1–3) and interval determination, remaining life and retirement thickness calculations, and risk-based inspection (RBI) integration per API 580/581.",
        link: "/api-570-certification",
    },
    {
        code: "API 653",
        title: "Aboveground Storage Tank Inspection",
        description:
            "Applies to in-service aboveground storage tanks. Specifies external inspection intervals (every 5 years), internal inspection intervals (typically 10 years, RBI-adjustable), floor plate minimum thickness requirements, corrosion allowance and remaining life calculations, and criteria for repair, reconstruction, or decommissioning.",
        link: "/api-653-certification",
    },
    {
        code: "API 580 / 581",
        title: "Risk-Based Inspection (RBI)",
        description:
            "API 580 provides RBI principles and process; API 581 delivers quantitative risk calculations for fixed equipment. RBI analysis combines probability of failure (PoF) and consequence of failure (CoF) to prioritise inspection resources, optimise intervals, and document inspection planning for regulatory review.",
        link: "/consulting",
    },
    {
        code: "ASME Section V",
        title: "NDT Methods & Techniques",
        description:
            "The ASME Boiler and Pressure Vessel Code, Section V sets requirements for NDT methods including RT, UT, MT, PT, ET, VT, and advanced techniques. All NDT procedures for ASME-coded vessels and piping must comply with Section V, referencing the applicable construction code (Section I, VIII, etc.) for acceptance criteria.",
        link: "/ndt-methods",
    },
    {
        code: "ASME Section VIII",
        title: "Pressure Vessel Construction",
        description:
            "Division 1 and Division 2 set the design, fabrication, and inspection requirements for pressure vessels. New construction NDT (weld examination, impact testing, pressure testing) is specified here. In-service inspection reverts to API 510. Atlantis supports owner-operators bridging construction-to-in-service inspection programs.",
        link: "/consulting",
    },
];

const atlantisServices = [
    {
        icon: FileText,
        title: "NDT Procedure Development",
        description:
            "ASNT Level III engineers author compliant written NDT procedures for all O&G asset types — UT, PAUT, TOFD, RT, MT, PT, GWT, ECT — referencing API, ASME, and company-specific codes. Procedures are validated against technique qualification requirements before issue.",
        link: "/consulting",
    },
    {
        icon: Award,
        title: "Written Practice Development (SNT-TC-1A)",
        description:
            "We develop or update employer Written Practices for personnel qualification and certification per ASNT SNT-TC-1A. Covers training outlines, experience requirements, examination procedures, and certification records — bringing O&G operators into full compliance with their NDT program documentation.",
        link: "/consulting",
    },
    {
        icon: Search,
        title: "Third-Party Program Audits",
        description:
            "Independent NDT program audits assess procedure adequacy, personnel certification status, equipment calibration records, and data management against API 510/570/653 and ASME requirements. Atlantis delivers findings reports with corrective action recommendations.",
        link: "/consulting",
    },
    {
        icon: Shield,
        title: "API 510 / 570 / 653 Compliance Consulting",
        description:
            "Our Level III consultants work alongside plant inspection teams to implement or improve inspection programs aligned to API 510, API 570, and API 653. Services include corrosion monitoring location (CML) setup, thickness data trending, remaining life calculations, and MAWP re-rating.",
        link: "/api-510-certification",
    },
    {
        icon: BarChart3,
        title: "Corrosion Management Programs",
        description:
            "We design and implement structured corrosion management programs integrating NDT data, process chemistry inputs, and RBI risk scoring. Services span baseline survey, CML rationalisation, inspection scheduling, and trending — reducing inspection costs while improving asset reliability.",
        link: "/consulting",
    },
    {
        icon: Wrench,
        title: "Fitness for Service (FFS) Consulting",
        description:
            "When inspection reveals damage — corrosion, cracks, dents, or weld anomalies — Atlantis applies API 579-1/ASME FFS-1 to determine whether the equipment can continue in service. FFS Level 1, 2, and 3 assessments are performed by experienced pressure equipment engineers.",
        link: "/consulting",
    },
];

const industryChallenges = [
    {
        icon: Thermometer,
        title: "Corrosion Under Insulation (CUI)",
        detail:
            "CUI is one of the costliest and most difficult inspection challenges in the oil & gas industry. External corrosion beneath insulation on carbon steel piping and vessels can progress undetected for years. Pulsed Eddy Current (PEC) allows wall thickness measurement through insulation without removal, identifying high-risk zones for targeted strip inspection. Atlantis designs CUI screening programs integrating PEC and GWT survey, prioritised by RBI risk ranking.",
    },
    {
        icon: Factory,
        title: "Aging Infrastructure and Life Extension",
        detail:
            "Much of the world's refinery, petrochemical, and pipeline infrastructure is 30–50+ years old. Life extension decisions require detailed fitness for service assessment (API 579), thorough corrosion history review, and updated inspection programs. Atlantis helps operators assess whether aging equipment can be safely extended, upgraded, or must be replaced.",
    },
    {
        icon: Globe,
        title: "Remote and Offshore Inspection Logistics",
        detail:
            "Offshore platforms, remote pipelines, and subsea assets present significant access and logistics challenges. Rope access NDT, ROV-deployed inspection tools, and satellite data transfer from remote inspection units are all part of modern O&G inspection. Atlantis consulting expertise spans procedure development for these specialist applications and workforce qualification requirements.",
    },
    {
        icon: FileText,
        title: "Regulatory Compliance and Documentation",
        detail:
            "OSHA Process Safety Management (PSM) regulations (29 CFR 1910.119) require written mechanical integrity programs covering inspection procedures, frequency, personnel qualifications, and corrective action documentation. EPA Risk Management Plans (RMP) add further pressure. API 510, 570, and 653 inspection records must be audit-ready at all times.",
    },
    {
        icon: BarChart3,
        title: "Turnaround Inspection Optimisation",
        detail:
            "Refinery and plant turnarounds represent the primary window for in-service pressure vessel and heat exchanger inspection. Minimising turnaround duration while maximising inspection completeness requires pre-planning, staffing coordination, procedure approval, and real-time data capture. Atlantis provides Level III oversight and turnaround inspection management consulting to reduce downtime and inspection backlog.",
    },
];

const faqs = [
    {
        q: "What NDT methods are used in oil and gas?",
        a: "The oil & gas industry uses all major NDT methods. Ultrasonic Testing (UT) — including phased array (PAUT), TOFD, and guided wave (GWT) — is the most widely applied for corrosion mapping, weld inspection, and pipe screening. Radiographic Testing (RT and digital radiography) is used for weld quality assessment. Magnetic Particle Testing (MT) and Liquid Penetrant Testing (PT) detect surface cracks. Eddy Current Testing (ECT, RFEC, and Pulsed ECT) inspects heat exchanger tubes and screens for corrosion under insulation. Visual Testing (VT) and remote visual inspection (RVI) cover internal and external component assessment. Advanced methods such as Alternating Current Field Measurement (ACFM) and Magnetic Flux Leakage (MFL) are used for offshore structures and storage tank floors respectively.",
    },
    {
        q: "What is API 510 and who needs it?",
        a: "API 510, the Pressure Vessel Inspection Code, is published by the American Petroleum Institute and governs the in-service inspection, repair, alteration, and re-rating of pressure vessels. It applies to pressure vessels in refinery, petrochemical, and related petroleum industry service. Owner-operators must have an authorised inspection agency (AIA) and authorised inspectors (AI) to conduct inspection per API 510. The code specifies inspection intervals, minimum thickness acceptance criteria, fitness for service evaluation, and documentation requirements. Any facility subject to OSHA PSM or EPA RMP regulations is effectively required to comply with API 510 for pressure vessel mechanical integrity.",
    },
    {
        q: "How is NDT used for pipeline inspection?",
        a: "Pipeline NDT encompasses multiple techniques depending on accessibility, pipeline type, and risk profile. In-Line Inspection (ILI) — using 'smart pigs' deploying MFL or ultrasonic sensors — is the most comprehensive method for transmission pipelines, detecting metal loss, weld anomalies, dents, and cracking. Guided Wave UT is used for above-ground and buried pipeline screening from single access points, covering 100+ metres per test location. Automated UT (AUT) is the standard for girth weld inspection during construction and repair. Corrosion mapping (UT grid scanning or laser profilometry) quantifies metal loss at exposed sections. Hydrostatic pressure testing (not strictly NDT but complementary) validates structural integrity.",
    },
    {
        q: "What is corrosion under insulation (CUI) and how is it detected?",
        a: "Corrosion Under Insulation (CUI) is external corrosion that develops on the metal surface beneath thermal insulation on pipes and vessels. It is driven by water ingress through damaged or deteriorating insulation jacketing, combined with oxygen, chlorides, or process conditions that create a corrosive environment. CUI is notoriously difficult to detect without removing insulation — which is costly and time-consuming. The primary NDT tool for CUI screening is Pulsed Eddy Current (PEC), which can measure pipe wall thickness through 150–200mm of insulation without stripping. Guided Wave UT (GWT) can also screen insulated pipework. A risk-based CUI inspection program — identifying high-risk locations based on temperature, insulation condition, and historical data — focuses inspection resources efficiently.",
    },
    {
        q: "What is risk-based inspection (RBI)?",
        a: "Risk-Based Inspection (RBI) is a systematic methodology, codified in API 580 (principles) and API 581 (quantitative methodology), for prioritising inspection of pressure vessels, piping, and storage tanks based on the combined risk of failure — the product of probability of failure (PoF) and consequence of failure (CoF). High-risk equipment (high likelihood of damage AND high consequence of failure) receives more frequent, targeted inspection. Low-risk equipment may have extended inspection intervals, reducing unnecessary inspection cost. RBI is integrated with API 510, 570, and 653 to justify adjusted inspection intervals. An RBI program requires a qualified multidisciplinary team, thorough process and materials data, and ongoing review as operating conditions change.",
    },
    {
        q: "How do you inspect offshore structures with NDT?",
        a: "Offshore structural inspection combines above-water and sub-water methods. Above water, rope access NDT technicians use UT thickness gauging, magnetic particle inspection (MPI/wet fluorescent MT), and ACFM (Alternating Current Field Measurement) to inspect welds, splash zone members, and risers. Below water, saturation divers or ROVs (Remotely Operated Vehicles) carry out MPI, UT, and general visual inspection on tubular welds and nodes. ACFM probes are particularly suited to offshore use as they do not require surface cleaning or couplant. Inspection programs follow API RP 2A (fixed platforms) or ISO 19902 requirements. Risk ranking based on structural criticality determines inspection frequency and method.",
    },
    {
        q: "What qualifications do NDT inspectors need for oil and gas?",
        a: "Oil & gas NDT inspectors typically require ASNT SNT-TC-1A or ASNT CP-189 certification at Level II (field inspection) or Level III (program management, procedure approval) in their applicable NDT methods. For pressure vessel and piping inspection, API 510 Inspector certification (pressure vessels) and API 570 Inspector certification (piping) are required for authorised inspection roles. API 653 certification is required for aboveground storage tank inspection. Some operators and jurisdictions also require ISO 9712 certification. In addition, inspectors must be qualified to the employer's Written Practice, which specifies training hours, OJT experience, and examination requirements per SNT-TC-1A for each method and level.",
    },
    {
        q: "How often should pressure vessels be inspected per API 510?",
        a: "API 510 specifies maximum inspection intervals based on inspection type and risk classification. External inspections are required at intervals not exceeding 5 years (or the remaining life divided by 2 — whichever is less). Internal or on-stream inspections have a maximum interval of 10 years, or half the remaining corrosion life, whichever is shorter. These intervals can be adjusted through a formal Risk-Based Inspection (RBI) analysis per API 580/581 — potentially extending intervals for low-risk equipment or shortening them for high-risk vessels. All interval determinations, thickness data, and remaining life calculations must be documented by an authorised inspector and retained in the vessel inspection records.",
    },
];

// ─── Components ────────────────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden">
            <button
                className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 bg-white hover:bg-slate-50 transition"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
            >
                <span>{q}</span>
                {open
                    ? <ChevronUp className="w-5 h-5 text-amber-700 flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-amber-700 flex-shrink-0" />
                }
            </button>
            {open && (
                <div className="px-5 pb-5 text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    {a}
                </div>
            )}
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function NDTForOilGas() {

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "@id": "https://atlantisndt.com/ndt-for-oil-gas",
                "name": "NDT Consulting for Oil & Gas — Atlantis NDT",
                "url": "https://atlantisndt.com/ndt-for-oil-gas",
                "description": "Expert NDT consulting for the oil & gas industry: API 510 pressure vessel, API 570 piping, API 653 storage tank, pipeline NDT, offshore inspection, CUI detection, and fitness for service assessment. ASNT Level III consultants.",
                "provider": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "url": "https://atlantisndt.com",
                },
                "areaServed": [
                    "United States", "United Arab Emirates", "Saudi Arabia", "India",
                    "United Kingdom", "Norway", "Singapore", "Qatar", "Kuwait"
                ],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Oil & Gas NDT Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API 510 Pressure Vessel Inspection Consulting" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API 570 Piping Inspection Program Development" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "API 653 Storage Tank Inspection Consulting" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Pipeline NDT Procedure Development" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corrosion Under Insulation (CUI) Inspection Programs" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fitness for Service Assessment (API 579)" } },
                    ],
                },
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map((f) => ({
                    "@type": "Question",
                    "name": f.q,
                    "acceptedAnswer": { "@type": "Answer", "text": f.a },
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT for Oil & Gas | Pipeline, Refinery & Offshore Inspection | API 510/570/653 | Atlantis NDT"
                description="Expert NDT consulting for oil & gas: pressure vessel API 510, piping API 570, storage tank API 653, pipeline inspection, offshore NDT, CUI. Free consultation."
                keywords="NDT oil gas, pipeline inspection NDT, refinery NDT consulting, API 510 pressure vessel inspection, API 570 piping inspection, API 653 storage tank inspection, offshore NDT inspection, corrosion under insulation CUI, fitness for service assessment, risk-based inspection RBI, ASME Section VIII inspection, petrochemical plant NDT"
                canonical="https://atlantisndt.com/ndt-for-oil-gas"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <section className="bg-gradient-to-br from-amber-700 to-orange-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-amber-200 mb-4">
                            <Droplets className="w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-wider">Industry Solutions · Oil &amp; Gas</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight max-w-4xl">
                            NDT for Oil &amp; Gas | Pipeline, Refinery &amp; Offshore Inspection Consulting
                        </h1>
                        <p className="text-xl text-amber-100 max-w-3xl mb-8 leading-relaxed">
                            Atlantis NDT delivers ASNT Level III expertise across the full oil &amp; gas asset lifecycle — from upstream drilling infrastructure to midstream pipelines and downstream refinery pressure vessels. API 510, 570, and 653 compliance. CUI programs. Fitness for service. Free initial consultation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center"
                            >
                                Request Free Consultation
                            </Link>
                            <Link
                                to="/consulting"
                                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center"
                            >
                                View Consulting Services <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Stats Bar ────────────────────────────────────────────────────── */}
            <section className="py-12 bg-white border-b border-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {stats.map((stat) => (
                            <div key={stat.label}>
                                <div className="text-3xl md:text-4xl font-bold text-amber-700 mb-2">{stat.value}</div>
                                <div className="text-slate-600 text-sm md:text-base">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Introduction ─────────────────────────────────────────────────── */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-6" style={{ color: "#004aad" }}>
                            Why NDT is Critical in the Oil &amp; Gas Industry
                        </h2>
                        <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
                            <p>
                                The oil and gas industry operates under some of the most demanding conditions any engineering asset can face: extreme pressures, elevated temperatures, corrosive process fluids, hydrogen embrittlement, and aggressive environments spanning tropical to arctic. A single undetected defect — a wall-thinned pressure vessel, a cracked pipeline weld, a corroded storage tank floor — can cascade into a catastrophic failure: loss of containment, fire, explosion, environmental disaster, and loss of life. Non-destructive testing and inspection (NDT/NDI) is the primary technical means by which the oil and gas industry identifies degradation before it reaches critical levels.
                            </p>
                            <p>
                                The asset portfolio in oil and gas is enormous in both scale and variety. Upstream operations span drilling risers, wellheads, BOP equipment, offshore platform jackets, and subsea flowlines. Midstream facilities include cross-country transmission pipelines, compressor stations, meter stations, and product storage terminals. Downstream operations centre on refineries and petrochemical plants — vast networks of pressure vessels (distillation towers, reactors, drums, separators), process piping operating across every pressure and temperature range, fired heaters, heat exchanger bundles, and above-ground storage tank farms. Each asset class presents distinct damage mechanisms, distinct NDT method requirements, and distinct regulatory obligations.
                            </p>
                            <p>
                                The regulatory landscape for O&amp;G NDT is anchored by the American Petroleum Institute's inspection codes. <strong>API 510</strong> (Pressure Vessel Inspection Code), <strong>API 570</strong> (Piping Inspection Code), and <strong>API 653</strong> (Aboveground Storage Tank Inspection) form the trio of core in-service inspection standards. ASME codes — <strong>Section V</strong> (NDT methods and techniques), <strong>Section VIII</strong> (pressure vessel construction), and <strong>B31.3</strong> (process piping) — govern the NDT requirements for new construction and repair. OSHA's Process Safety Management standard (29 CFR 1910.119) mandates a written mechanical integrity program for all processes handling highly hazardous chemicals above threshold quantities, effectively making API 510/570/653 compliance an OSHA obligation for most refineries and chemical plants.
                            </p>
                            <p>
                                Atlantis NDT has served the oil and gas industry for over three decades, building deep expertise across all sectors and all NDT methods. Our ASNT Level III consultants have authored hundreds of NDT procedures for the full range of O&amp;G assets — from corrosion mapping procedures for crude distillation units to guided wave screening programs for buried pipeline networks. We work with operators, engineering contractors, and inspection service companies across the USA (Houston), Middle East (Dubai, Saudi Arabia, Qatar), India (Mumbai, Gujarat, Chennai), North Sea (Aberdeen, Norway), and Southeast Asia (Singapore, Malaysia) to build inspection programs that are both technically robust and cost-effective.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Asset Types & NDT Methods Grid ───────────────────────────────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#004aad" }}>
                            Oil &amp; Gas Asset Types &amp; NDT Methods
                        </h2>
                        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                            Each asset class in oil &amp; gas has specific damage mechanisms and corresponding NDT methods. Selecting the right technique for the right asset — and documenting it correctly — is the foundation of a compliant inspection program.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {assetTypes.map((asset) => (
                                <Card key={asset.title} className="h-full hover:shadow-lg transition hover:border-amber-500 group">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                                                <asset.icon className="w-5 h-5 text-amber-700" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg group-hover:text-amber-700 transition">{asset.title}</CardTitle>
                                                <span className="text-xs text-amber-700 font-semibold bg-amber-50 px-2 py-0.5 rounded">{asset.code}</span>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {asset.ndtMethods.map((method) => (
                                                <li key={method} className="flex items-start gap-2 text-sm text-slate-600">
                                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span>{method}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to={asset.link}
                                            className="inline-flex items-center gap-1 mt-4 text-amber-700 text-sm font-medium hover:underline"
                                        >
                                            Learn more <ArrowRight className="w-3 h-3" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── API Standards Section ─────────────────────────────────────────── */}
            <section className="py-16 bg-amber-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#004aad" }}>
                            API &amp; ASME Inspection Standards
                        </h2>
                        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                            Atlantis NDT consultants are expert in the full set of API and ASME standards governing oil &amp; gas inspection. We translate code requirements into practical inspection programs and written procedures.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {apiStandards.map((std) => (
                                <div key={std.code} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100 hover:border-amber-400 transition">
                                    <div className="text-2xl font-bold text-amber-700 mb-1">{std.code}</div>
                                    <h3 className="font-semibold text-slate-800 mb-3 text-sm">{std.title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{std.description}</p>
                                    <Link
                                        to={std.link}
                                        className="inline-flex items-center gap-1 text-amber-700 text-sm font-medium hover:underline"
                                    >
                                        Learn more <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Services Atlantis Provides ────────────────────────────────────── */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-4">
                            What Atlantis NDT Provides for Oil &amp; Gas
                        </h2>
                        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
                            Consulting services that go beyond inspection — building the programs, procedures, and systems that underpin long-term asset integrity.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {atlantisServices.map((service) => (
                                <Link key={service.title} to={service.link}>
                                    <Card className="h-full bg-slate-800 border-slate-700 hover:border-amber-500 transition group">
                                        <CardHeader className="pb-3">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-amber-900/40 flex items-center justify-center flex-shrink-0">
                                                    <service.icon className="w-5 h-5 text-amber-400 group-hover:scale-110 transition" />
                                                </div>
                                                <CardTitle className="text-base text-white group-hover:text-amber-400 transition leading-snug">
                                                    {service.title}
                                                </CardTitle>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                                        </CardContent>
                                    </Card>
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Industry Challenges ───────────────────────────────────────────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#004aad" }}>
                            Key O&amp;G Inspection Challenges We Solve
                        </h2>
                        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                            The oil and gas industry faces inspection challenges that go far beyond simply choosing an NDT method. Atlantis NDT consultants bring practical field experience to each of these complex problems.
                        </p>
                        <div className="space-y-6">
                            {industryChallenges.map((challenge, i) => (
                                <div
                                    key={challenge.title}
                                    className="flex gap-5 bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-amber-300 transition"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                                        <challenge.icon className="w-6 h-6 text-amber-700" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-800 text-lg mb-2">{challenge.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{challenge.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Internal Links / Related Pages ───────────────────────────────── */}
            <section className="py-14 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>
                        Related NDT Services &amp; Resources
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { label: "NDT Consulting — Houston", href: "/consulting/ndt-consulting-houston" },
                            { label: "NDT Consulting — Dubai", href: "/consulting/ndt-consulting-dubai" },
                            { label: "API 510 Certification Training", href: "/api-510-certification" },
                            { label: "API 570 Certification Training", href: "/api-570-certification" },
                            { label: "API 653 Tank Inspection Guide", href: "/blog/api-653-tank-inspection-guide" },
                            { label: "Ultrasonic Testing (UT)", href: "/ultrasonic-testing" },
                            { label: "Eddy Current Tube Inspection", href: "/eddy-current-tube-inspection" },
                            { label: "NDT for Power Generation", href: "/ndt-for-power-generation" },
                        ].map((item) => (
                            <Link
                                key={item.href}
                                to={item.href}
                                className="flex items-center gap-2 bg-white rounded-lg p-4 border border-slate-200 hover:border-amber-500 hover:shadow-sm transition text-sm font-medium text-slate-700 hover:text-amber-700 group"
                            >
                                <ArrowRight className="w-4 h-4 text-amber-700 flex-shrink-0 group-hover:translate-x-0.5 transition" />
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Geographic Coverage ───────────────────────────────────────────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold text-center mb-4" style={{ color: "#004aad" }}>
                            Global Oil &amp; Gas NDT Coverage
                        </h2>
                        <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
                            Atlantis NDT serves oil and gas operators, EPC contractors, and inspection companies across every major hydrocarbon-producing region.
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
                            {[
                                {
                                    region: "USA — Gulf Coast",
                                    detail: "Houston, TX is our North American hub. We serve refineries and petrochemical plants across Texas, Louisiana (Baton Rouge, Lake Charles), and the wider Gulf Coast.",
                                    link: "/consulting/ndt-consulting-houston",
                                },
                                {
                                    region: "Middle East",
                                    detail: "Dubai, Abu Dhabi, Saudi Arabia (Jubail, Yanbu, Ras Tanura), Qatar (Ras Laffan), and Kuwait — serving national oil companies, EPC firms, and international operators.",
                                    link: "/consulting/ndt-consulting-dubai",
                                },
                                {
                                    region: "India",
                                    detail: "Mumbai, Gujarat (Jamnagar, Vadodara), Chennai, Vizag — serving ONGC, Reliance, Indian Oil, BPCL, and midsize refinery and petrochemical operators.",
                                    link: "/consulting/ndt-consulting-mumbai",
                                },
                                {
                                    region: "North Sea",
                                    detail: "Aberdeen (Scotland), Stavanger and Oslo (Norway) — offshore platform inspection consulting, rope access NDT program development, ACFM and UWILD procedure development.",
                                    link: "/consulting/ndt-consulting-aberdeen",
                                },
                                {
                                    region: "Southeast Asia",
                                    detail: "Singapore, Malaysia (Kertih, Bintulu), Indonesia, Thailand — LNG plants, offshore platforms, and refinery inspection program support for regional operators.",
                                    link: "/consulting/ndt-consulting-singapore",
                                },
                            ].map((geo) => (
                                <div key={geo.region} className="bg-amber-50 rounded-xl p-5 border border-amber-100 hover:border-amber-400 transition">
                                    <h3 className="font-bold text-amber-800 mb-2 text-sm">{geo.region}</h3>
                                    <p className="text-slate-600 text-xs leading-relaxed mb-3">{geo.detail}</p>
                                    <Link
                                        to={geo.link}
                                        className="text-amber-700 text-xs font-semibold hover:underline inline-flex items-center gap-1"
                                    >
                                        Learn more <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Codes & Standards Bar ─────────────────────────────────────────── */}
            <section className="py-12 bg-amber-50 border-y border-amber-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <p className="text-center text-xs text-amber-800 font-semibold uppercase tracking-widest mb-6">
                        Codes &amp; Standards We Work With
                    </p>
                    <div className="flex flex-wrap justify-center gap-3">
                        {[
                            "API 510", "API 570", "API 653", "API 580", "API 581", "API 579 (FFS)",
                            "API 1104", "ASME Section V", "ASME Section VIII", "ASME B31.3",
                            "ASME B31.4", "ASME B31.8", "ASNT SNT-TC-1A", "ISO 9712",
                            "API RP 2A", "OSHA PSM 1910.119",
                        ].map((code) => (
                            <span
                                key={code}
                                className="bg-white text-amber-800 border border-amber-200 px-4 py-2 rounded-lg text-sm font-semibold shadow-sm"
                            >
                                {code}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ ───────────────────────────────────────────────────────────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl font-bold mb-4 text-center" style={{ color: "#004aad" }}>
                            Oil &amp; Gas NDT — Frequently Asked Questions
                        </h2>
                        <p className="text-center text-slate-600 mb-10 max-w-xl mx-auto">
                            Answers from Atlantis NDT's ASNT Level III consultants on the most common oil &amp; gas inspection questions.
                        </p>
                        <div className="space-y-3">
                            {faqs.map((f, i) => (
                                <FAQItem key={i} q={f.q} a={f.a} />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ───────────────────────────────────────────────────────────── */}
            <section className="py-16 bg-gradient-to-r from-amber-700 to-orange-700 text-white">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Ready to Strengthen Your O&amp;G Inspection Program?
                        </h2>
                        <p className="text-amber-100 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
                            Contact Atlantis NDT's Level III consultants for API 510/570/653 compliance consulting, NDT procedure development, CUI program design, or fitness for service assessment. First consultation is free.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
                            >
                                Request Free Consultation
                            </Link>
                            <Link
                                to="/api-510-certification"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                            >
                                API 510 Training
                            </Link>
                            <Link
                                to="/api-570-certification"
                                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                            >
                                API 570 Training
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
