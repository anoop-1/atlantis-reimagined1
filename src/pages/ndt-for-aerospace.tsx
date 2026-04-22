import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle, Plane, Shield, Award, GraduationCap, Cpu, Globe, Wrench,
    ArrowRight, ChevronDown, ChevronUp, AlertTriangle, Layers, Settings, FileText
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

// ─── Data ─────────────────────────────────────────────────────────────────────

const componentNDTMatrix = [
    {
        component: "Aircraft Structures (Airframe)",
        description: "Fuselage skin, wing spars, ribs, empennage, and structural frames — both metallic and composite layups",
        methods: ["Eddy Current Array (ECA)", "UT Shear Wave", "Phased Array UT (PAUT)", "Radiographic Testing"],
        standards: "FAA AC 43.13-1B, AMS 2647",
        challenge: "Multi-layer lap joints, hidden corrosion, fatigue cracks at fastener holes",
    },
    {
        component: "Engine Components",
        description: "Turbine blades, compressor discs, shafts, casings, combustion chambers, and fan blades",
        methods: ["Fluorescent Penetrant Inspection (FPI)", "Magnetic Particle Inspection (MPI)", "Eddy Current Testing", "UT Immersion"],
        standards: "AMS 2640 (MT), AMS 2644 (PT), ASTM E1417",
        challenge: "Complex geometries, superalloy materials, tight tolerances, thermal fatigue cracking",
    },
    {
        component: "Composite Materials",
        description: "CFRP panels, sandwich honeycomb structures, bonded assemblies, radomes, and fairings",
        methods: ["Pulse Echo UT", "Through-Transmission UT", "Thermography (IRT)", "Shearography"],
        standards: "ASTM E2862 (PT composites), AMS specifications",
        challenge: "Delamination, disbonding, impact damage, water ingress detection without damage to fibres",
    },
    {
        component: "Landing Gear",
        description: "High-strength steel cylinders, torque links, axles, brake assemblies, and chrome-plated components",
        methods: ["Magnetic Particle Inspection", "Fluorescent Penetrant", "Eddy Current", "UT Shear Wave"],
        standards: "AMS 2640 (MT), AMS 2644 (PT), MIL-HDBK-6870",
        challenge: "Complex geometry, high-strength steel susceptibility to hydrogen embrittlement cracking",
    },
    {
        component: "Fastener Holes",
        description: "Bolt holes, rivet holes, and fastener bores in wing and fuselage structure",
        methods: ["Rotating Bobbin Probe ECT", "Eddy Current Array", "UT Bolt Hole Scan"],
        standards: "AMS 2647, FAA NDT procedures",
        challenge: "Second-layer cracks, tight access, detection at multiple depths through structure",
    },
    {
        component: "Forgings & Castings",
        description: "Structural forgings, gearbox castings, actuator bodies, and precision-cast turbine components",
        methods: ["Radiographic Testing (RT)", "UT Immersion", "Fluorescent Penetrant Inspection"],
        standards: "ASTM E1444 (MT), AMS 2630 (RT), AMS 2644 (PT)",
        challenge: "Volumetric porosity, shrinkage, laps, seams, and subtle material discontinuities",
    },
];

const standardsData = [
    {
        standard: "NAS-410",
        fullName: "NAS 410 — Certification & Qualification of NDT Personnel",
        description: "The primary aerospace NDT personnel certification standard in North America, superseding MIL-STD-1949. Defines training, experience, and examination requirements for Levels I, II, and III. Mandatory for most US aerospace primes and Tier 1 suppliers.",
        scope: "Personnel certification",
    },
    {
        standard: "EN 4179",
        fullName: "EN 4179 — Qualification and Approval of NDT Personnel in Aerospace",
        description: "The European equivalent of NAS-410, mandated by EASA Part-145 maintenance organisations and Airbus, Rolls-Royce, and European OEMs. Requires employer-based qualification and independent Level 3 oversight.",
        scope: "Personnel certification (Europe)",
    },
    {
        standard: "NADCAP",
        fullName: "NADCAP — National Aerospace and Defense Contractors Accreditation Program",
        description: "Industry-managed accreditation program for special processes in aerospace. NADCAP NDT accreditation is required by Boeing, Airbus, Lockheed Martin, and most major primes as a supply chain requirement. Audits assess written practices, procedures, equipment, and personnel qualifications.",
        scope: "Process accreditation",
    },
    {
        standard: "AMS 2644",
        fullName: "AMS 2644 — Inspection Material, Penetrant",
        description: "SAE Aerospace Material Specification defining requirements for penetrant inspection materials used in aerospace. Governs penetrant types, sensitivities, and qualification testing for fluorescent penetrant inspection.",
        scope: "FPI materials & process",
    },
    {
        standard: "AMS 2640",
        fullName: "AMS 2640 — Inspection, Magnetic Particle",
        description: "SAE AMS specification for magnetic particle inspection in aerospace. Specifies magnetic field strengths, particle media, and technique requirements for MPI of aerospace components.",
        scope: "Magnetic particle inspection",
    },
    {
        standard: "AMS 2630",
        fullName: "AMS 2630 — Inspection, Radiographic",
        description: "Defines radiographic inspection requirements for aerospace castings, welds, and assemblies. Specifies film sensitivity, image quality indicators, and acceptance criteria for aerospace RT.",
        scope: "Radiographic inspection",
    },
    {
        standard: "AMS 2647",
        fullName: "AMS 2647 — Inspection, Electromagnetic (Eddy Current)",
        description: "Aerospace specification for eddy current inspection of metallic aerospace components. Covers probe calibration, reference standard requirements, and technique qualifications for aircraft structure inspection.",
        scope: "Eddy current inspection",
    },
    {
        standard: "ASTM E1417",
        fullName: "ASTM E1417 — Standard Practice for Liquid Penetrant Testing",
        description: "ASTM standard practice widely referenced in aerospace for FPI of metallic and composite components. Defines method types, penetrant families, and process control requirements.",
        scope: "Liquid penetrant testing",
    },
    {
        standard: "FAA AC 43.13-1B",
        fullName: "FAA Advisory Circular 43.13-1B — Acceptable Methods, Techniques, and Practices",
        description: "FAA guidance for aircraft inspection and repair methods. Widely used in MRO environments as the acceptable practices reference for aircraft structural NDT and maintenance inspection.",
        scope: "Aircraft inspection & repair",
    },
    {
        standard: "EASA Part-145",
        fullName: "EASA Part-145 — Maintenance Organisation Approvals",
        description: "European regulatory framework for aircraft maintenance organisations. Requires approved NDT procedures, qualified personnel (per EN 4179), and management of the NDT Quality System.",
        scope: "MRO regulatory compliance",
    },
    {
        standard: "MIL-HDBK-6870",
        fullName: "MIL-HDBK-6870 — Inspection Program Requirements, Nondestructive for Aircraft",
        description: "US military handbook defining inspection program requirements for NDT of military aircraft and components. Covers inspection intervals, NDT method selection, and documentation requirements for defence programs.",
        scope: "Military aircraft NDT programs",
    },
];

const atlantisServices = [
    {
        icon: FileText,
        title: "NAS-410 Compliant Written Practices",
        description: "Development and review of employer written practices compliant with NAS-410 and EN 4179. Covers all NDT methods, personnel qualification records, and audit-ready documentation.",
        link: "/consulting",
    },
    {
        icon: Settings,
        title: "Aerospace NDT Procedure Development",
        description: "Method-specific written procedures for aircraft structural inspection, engine component NDT, and composite testing. Reviewed and approved by ASNT Level III professionals with aerospace background.",
        link: "/consulting",
    },
    {
        icon: Shield,
        title: "NADCAP Audit Preparation & Support",
        description: "Pre-audit gap analysis, corrective action support, and on-site assistance for NADCAP NDT accreditation. We have supported aerospace suppliers through successful first-time NADCAP audits.",
        link: "/consulting",
    },
    {
        icon: Award,
        title: "Personnel Qualification Program Management",
        description: "Design and administration of NAS-410/EN 4179 qualification programs, including training hour tracking, practical examination, and Level III certification of site personnel.",
        link: "/asnt-certification",
    },
    {
        icon: Layers,
        title: "Composite Material Inspection Consulting",
        description: "Specialist consulting for CFRP and honeycomb composite NDT. Method selection, procedure development, and technician qualification for pulse echo UT, thermography, and shearography.",
        link: "/consulting",
    },
    {
        icon: GraduationCap,
        title: "Aerospace NDT Training (NAS-410)",
        description: "Structured NDT training programmes aligned with NAS-410 requirements. Classroom theory, hands-on practical, and written examination preparation for Level I and Level II qualification.",
        link: "/training",
    },
];

const challenges = [
    {
        title: "Composite Material Inspection Complexity",
        detail: "Carbon fibre reinforced polymer (CFRP) and sandwich honeycomb structures present unique challenges: conventional NDT methods effective on metals often miss delaminations, disbonds, or impact damage in composites. Through-transmission UT and single-sided pulse echo UT are the primary methods, but require highly controlled scanning setups, appropriate calibration standards, and interpreters trained specifically on composite NDT signatures. Thermography offers rapid screening but requires specialist image analysis. Atlantis NDT provides composite-specific procedure development and technician qualification.",
    },
    {
        title: "Fatigue Crack Detection in Complex Geometries",
        detail: "Aircraft structures contain many geometrically complex areas — wing root fittings, frame cutouts, fastener hole arrays, and bonded stiffener joints — where fatigue cracks initiate under cyclic loading. Accessing these areas with conventional probes is often impossible. Eddy current array (ECA) probes conformable to complex surfaces, along with rotating probe eddy current for bolt hole inspection, are the primary tools. Procedure development must address probe lift-off, geometry masking, and detection of second-layer cracks beneath fastener heads.",
    },
    {
        title: "NADCAP Compliance and Audit Preparation",
        detail: "NADCAP NDT accreditation requires a comprehensive Quality Management System for special processes. Auditors examine written practices, procedure approval records, calibration records, personnel qualification files, equipment maintenance logs, and nonconformance records. Many aerospace suppliers struggle with their first NADCAP audit due to gaps in documentation control. Atlantis NDT provides structured pre-audit assessments and corrective action support to ensure compliance before the formal audit.",
    },
    {
        title: "Multi-Layer Structure Inspection",
        detail: "Commercial aircraft lap joints and fuselage panels are multi-layer constructions — second and third-layer cracks beneath fastener heads are among the most safety-critical defect types to detect. Low-frequency eddy current with rotating probes, or split-beam PAUT techniques, are used to detect hidden layer cracking. Procedure qualification requires demonstration of detection capability on representative multi-layer reference standards that simulate the actual production structure.",
    },
    {
        title: "Access Constraints on Assembled Aircraft",
        detail: "Many critical inspection areas on assembled aircraft — wing lower skins, fuselage frame feet, pressure bulkhead attachments — have severely limited access. NDT procedures must be developed with specific access constraints in mind, selecting probe types and scanning tools that can reach the inspection zone while maintaining calibration and coverage. Remote visual inspection (RVI) using borescopes is often complementary. Procedure qualification must include access and coverage demonstrations.",
    },
];

const aerofaqs = [
    {
        q: "What NDT methods are used in aerospace?",
        a: "Aerospace NDT relies on six primary methods. Eddy Current Testing (ECT) — particularly rotating probe and eddy current array variants — is the dominant method for aircraft structural inspection, bolt hole inspection, and surface crack detection in metallic structures. Fluorescent Penetrant Inspection (FPI/PT) is used extensively for engine components and precision machined parts. Magnetic Particle Inspection (MPI/MT) is used for ferromagnetic engine and landing gear components. Ultrasonic Testing (UT and PAUT) is the primary technique for composite material inspection, bond line assessment, and forgings. Radiographic Testing (RT and digital RT) is used for castings, welds, and composite analysis. Visual Testing (VT), including borescope inspection, supports engine internal inspection and structural assessment.",
    },
    {
        q: "What is NAS-410 and how does it differ from ASNT SNT-TC-1A?",
        a: "NAS-410 (originally Aerospace Industries Association standard) is the dominant NDT personnel certification standard for North American aerospace. It replaced MIL-STD-1949 as the military and aerospace community standard and is more prescriptive than ASNT SNT-TC-1A in areas of training hours, experience requirements, and examination content. The key difference: NAS-410 mandates specific minimum training hours per method per level (e.g., 80 hours for Level II ET), requires a method-specific written examination, and places greater emphasis on employer-managed Level III oversight. ASNT SNT-TC-1A gives employers more flexibility in setting requirements and is more common in the petrochemical and power industries. For NADCAP-accredited aerospace suppliers, NAS-410 or EN 4179 is essentially mandatory.",
    },
    {
        q: "How is composite material inspected using NDT?",
        a: "Composite material NDT — primarily for carbon fibre reinforced polymer (CFRP) and fiberglass/honeycomb sandwich structures — relies on methods sensitive to internal delaminations, disbonds, and impact damage without the use of ionising radiation for thin sections. Pulse echo ultrasonic testing (single-sided, no couplant contact probe or water jet squirter) is the primary production inspection method. Through-transmission UT using two transducers either side of the panel gives excellent sensitivity to voids and delaminations. Infrared thermography (flash thermography) provides rapid large-area screening and is increasingly used in MRO. Shearography (interferometry) detects subsurface disbonds by measuring surface strain under vacuum or thermal excitation. The choice of method depends on component geometry, access, production rate, and defect type.",
    },
    {
        q: "What is NADCAP and why is NDT accreditation required?",
        a: "NADCAP (National Aerospace and Defense Contractors Accreditation Program) is a cooperative accreditation program managed by the Performance Review Institute (PRI) on behalf of the aerospace industry's major primes — including Boeing, Airbus, Lockheed Martin, Raytheon, and General Electric Aviation. NADCAP accreditation is required for suppliers performing 'special processes' including NDT on aerospace hardware. The purpose is to audit supplier capabilities directly rather than relying solely on each prime's own supplier qualification visits — reducing audit burden across the supply chain while maintaining consistent standards. A NADCAP NDT audit evaluates your written practices, written procedures, personnel qualification records, calibration certificates, equipment maintenance records, and the physical NDT laboratory and equipment. Loss of NADCAP accreditation typically means loss of all prime contracts that require it.",
    },
    {
        q: "Which NDT method is best for finding fatigue cracks in aircraft?",
        a: "Eddy current testing (ECT) is the most effective and widely used method for fatigue crack detection in metallic aircraft structures. Its advantages include no couplant or surface preparation requirements, excellent sensitivity to tight surface-breaking and near-surface cracks, ability to inspect through paint and coatings, and adaptability to complex geometries using conformable ECA probes or rotating bolt-hole probes. For structural inspection in MRO, the dominant technique is rotating probe eddy current for fastener hole inspection (detecting second-layer cracks) and eddy current array (ECA) for lap joint and skin panel inspection. For sub-surface cracking in thick sections or in composites, Phased Array Ultrasonic Testing (PAUT) or pulse echo UT is preferred.",
    },
    {
        q: "What NDT is used for engine component inspection?",
        a: "Aero engine component inspection uses a combination of methods matched to the material and failure mode. Fluorescent Penetrant Inspection (FPI) using Type I fluorescent penetrant at sensitivity Level 3 or 4 is the primary surface crack detection method for nickel superalloy turbine blades, vanes, discs, and compressor components. Magnetic Particle Inspection (MPI) using fluorescent wet method is used for ferromagnetic steel engine shafts, engine mounts, and structural fittings. Eddy Current Testing detects surface cracks and heat treatment anomalies on conductive engine components. Ultrasonic immersion testing is used for forgings — turbine discs, shafts, and compressor blade forgings — to detect subsurface inclusions. Computed tomography (CT scanning) is increasingly used for complex turbine castings where conventional RT cannot fully characterise internal geometry.",
    },
    {
        q: "How do you inspect fastener holes in aircraft structures?",
        a: "Fastener hole inspection uses rotating probe eddy current — a specialised ECT probe that spins inside the hole at controlled speed and feed rate, scanning the full bore and detecting cracks initiating from the hole edge or extending into the surrounding structure. Second-layer cracks, where the crack exists in the layer beneath the fastener head (invisible from the surface), require low-frequency eddy current settings or PAUT techniques. The procedure requires calibration on reference standards with EDM notches of defined depth at the hole edge. In MRO inspection of aging aircraft, bolt hole eddy current is a core task during heavy maintenance visits (C-check and D-check level work).",
    },
    {
        q: "What qualifications do aerospace NDT inspectors need?",
        a: "Aerospace NDT inspectors are typically qualified to NAS-410 (North America and most global aerospace programs) or EN 4179 (Europe and EASA-regulated MROs). Both standards require: documented training hours per method and level (e.g., 80 classroom hours for ET Level II under NAS-410), verified practical experience on aerospace hardware, written examinations covering both general NDT principles and method-specific knowledge, practical examination demonstrating ability to detect reference defects, and Level III review and certification sign-off. Unlike ASNT SNT-TC-1A, NAS-410 does not accept uncertified personnel performing code work under supervision without documented qualification in progress. ASNT Level III consultants from Atlantis NDT can serve as the employer's Level III authority for NAS-410 programs.",
    },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

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
                    ? <ChevronUp className="w-5 h-5 text-blue-700 flex-shrink-0" />
                    : <ChevronDown className="w-5 h-5 text-blue-700 flex-shrink-0" />
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

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function NDTForAerospace() {

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "name": "Atlantis NDT — Aerospace NDT Consulting",
                "url": "https://atlantisndt.com/ndt-for-aerospace",
                "description": "Expert NDT consulting for aerospace: aircraft structural inspection, composite NDT, engine component testing, NAS-410 compliant procedures, NADCAP audit preparation. ASNT Level III consultants.",
                "provider": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "url": "https://atlantisndt.com",
                },
                "serviceType": "Non-Destructive Testing Consulting for Aerospace",
                "areaServed": ["United States", "United Kingdom", "Germany", "France", "India", "Singapore"],
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Aerospace NDT Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NAS-410 Written Practice Development" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NADCAP Audit Preparation" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Composite Material NDT Consulting" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aerospace NDT Procedure Development" } },
                    ],
                },
            },
            {
                "@type": "FAQPage",
                "mainEntity": aerofaqs.map(f => ({
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
                title="NDT for Aerospace | Aircraft, Composite & Engine Component Inspection | NAS-410 | Atlantis NDT"
                description="Expert NDT consulting for aerospace: aircraft structural inspection, composite NDT, engine component testing, NAS-410 compliant procedures, NADCAP audit prep."
                keywords="NDT for aerospace industry, aircraft NDT inspection, aerospace non-destructive testing, composite material NDT, NAS-410 certification, NADCAP NDT qualification, aircraft structural inspection, engine component NDT, MIL-STD-1949 NDT, aerospace eddy current testing, aircraft ultrasonic inspection, fluorescent penetrant inspection aerospace, EN 4179 aerospace NDT, NADCAP audit preparation, AMS 2644 penetrant"
                canonical="https://atlantisndt.com/ndt-for-aerospace"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* ── Hero ───────────────────────────────────────────────────────── */}
            <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-blue-200 mb-4 text-sm font-medium uppercase tracking-wider">
                            <Plane className="w-4 h-4" />
                            <span>Industry Solutions · Aerospace</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            NDT for Aerospace | Aircraft, Composite &amp; Engine Component Inspection
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-4 leading-relaxed">
                            Safety-critical aerospace structures demand the highest standard of non-destructive testing. Atlantis NDT provides ASNT Level III consultants with deep aerospace expertise — delivering NAS-410 compliant written practices, NADCAP audit preparation, and specialist procedures for aircraft structures, engine components, and composite materials.
                        </p>
                        <p className="text-blue-200 max-w-2xl mb-8">
                            Serving aircraft OEMs, MRO organisations, defence programs, and Tier 1 suppliers across the USA, Europe, and Asia-Pacific.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center"
                            >
                                Request Aerospace NDT Consultation <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link
                                to="/training"
                                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center"
                            >
                                NAS-410 Training Programs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Stats Bar ──────────────────────────────────────────────────── */}
            <section className="py-10 bg-white border-b border-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { stat: "NAS-410", label: "Compliant Written Practices" },
                            { stat: "All AMS", label: "NDT Method Specifications" },
                            { stat: "50+", label: "Level III Experts" },
                            { stat: "Composite & Metallic", label: "Structure Expertise" },
                        ].map(({ stat, label }) => (
                            <div key={stat}>
                                <div className="text-3xl md:text-4xl font-bold text-blue-800 mb-1">{stat}</div>
                                <div className="text-slate-600 text-sm">{label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Introduction ───────────────────────────────────────────────── */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-slate-900">
                            Why Aerospace NDT Demands More Than Standard Industrial Inspection
                        </h2>
                        <div className="space-y-5 text-slate-700 leading-relaxed text-lg">
                            <p>
                                Aerospace is the most demanding application domain in non-destructive testing. The consequences of missed defects are catastrophic and irreversible — which is why aerospace NDT is governed by some of the most stringent qualification standards, documentation requirements, and process controls anywhere in industry. An aerospace NDT programme is not simply a collection of inspection methods: it is a tightly managed system of written practices, qualified personnel, approved procedures, calibrated equipment, and traceable documentation that must survive third-party audit scrutiny under NADCAP and regulatory review by the FAA, EASA, or national airworthiness authorities.
                            </p>
                            <p>
                                Aerospace structures span an enormous range of materials and forms. Modern commercial aircraft combine aluminium alloy airframes, titanium fasteners, high-temperature nickel superalloy engine components, high-strength steel landing gear, and increasingly large proportions of carbon fibre reinforced polymer (CFRP) composite primary structure. The Boeing 787 Dreamliner and Airbus A350 are both more than 50% composite by weight. Each material class demands a different NDT approach: eddy current for metallic structure, ultrasonic testing and thermography for composites, fluorescent penetrant inspection for engine superalloys, and magnetic particle inspection for ferromagnetic steel components.
                            </p>
                            <p>
                                The regulatory framework for aerospace NDT is defined at multiple levels. At the personnel level, NAS-410 (North America) and EN 4179 (Europe) govern inspector training, experience, examination, and certification — both more prescriptive than the general industry standard ASNT SNT-TC-1A. At the process level, NADCAP accreditation is required by most commercial aircraft prime contractors as a supply chain prerequisite. NDT procedures must reference applicable AMS (Aerospace Material Specifications) including AMS 2640 for magnetic particle, AMS 2644 for liquid penetrant, AMS 2630 for radiographic testing, and AMS 2647 for eddy current. Military programs additionally reference MIL-HDBK-6870 and specific contract requirements. At the regulatory level, FAA Advisory Circular AC 43.13-1B governs acceptable aircraft inspection and repair methods for civil MRO, while EASA Part-145 defines the quality system requirements for approved maintenance organisations.
                            </p>
                            <p>
                                Atlantis NDT's aerospace NDT consultants have served as Level III authority for aircraft OEMs, engine overhaul shops, MRO facilities, and Tier 1 composite manufacturers. Our team has developed NAS-410 written practices from scratch, guided aerospace suppliers through first-time NADCAP audits, written and qualified procedures for composite structure inspection programmes, and provided independent Level III services for organisations that lack internal Level III capability. We bring both the technical depth and the regulatory familiarity needed to navigate aerospace NDT compliance effectively.
                            </p>
                        </div>

                        <div className="mt-10 grid md:grid-cols-3 gap-4">
                            {[
                                { icon: Shield, title: "Fail-Safe Inspection Philosophy", desc: "Aerospace NDT is designed to the fail-safe principle — every critical inspection must be demonstrated to detect the target flaw size reliably, not merely detect something. Probability of Detection (POD) studies underpin inspection qualification." },
                                { icon: Award, title: "Third-Party Audit Ready", desc: "NADCAP, customer audits, and regulatory surveillance all require comprehensive documentation. Atlantis NDT designs your NDT programme with audit readiness built in, not bolted on." },
                                { icon: Globe, title: "Multi-Standard Expertise", desc: "Our consultants are fluent in NAS-410, EN 4179, NADCAP, AMS specifications, FAA, EASA, and MIL-HDBK-6870 — allowing seamless support across global aerospace supply chains." },
                            ].map(({ icon: Icon, title, desc }) => (
                                <div key={title} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                                    <Icon className="w-7 h-7 text-blue-700 mb-3" />
                                    <h3 className="font-bold text-slate-800 mb-2">{title}</h3>
                                    <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Component Types & NDT Methods ──────────────────────────────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">
                            Aerospace Component Types &amp; NDT Methods
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Each aerospace component family demands specific NDT techniques matched to its material, geometry, failure mode, and applicable specification. Our consultants select and qualify the appropriate method combination for each application.
                        </p>
                    </div>
                    <div className="space-y-6">
                        {componentNDTMatrix.map((item, i) => (
                            <motion.div
                                key={item.component}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05, duration: 0.5 }}
                                className="bg-slate-50 rounded-2xl border border-slate-200 p-6 hover:border-blue-400 hover:shadow-md transition"
                            >
                                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                                    <div className="lg:w-1/3">
                                        <h3 className="text-xl font-bold text-blue-800 mb-2">{item.component}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                                    </div>
                                    <div className="lg:w-1/3">
                                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">NDT Methods</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.methods.map(m => (
                                                <span key={m} className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">{m}</span>
                                            ))}
                                        </div>
                                        <p className="text-xs text-slate-500 mt-3">
                                            <span className="font-semibold">Standards:</span> {item.standards}
                                        </p>
                                    </div>
                                    <div className="lg:w-1/3">
                                        <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Key Challenge</p>
                                        <div className="flex gap-2">
                                            <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <p className="text-slate-600 text-sm">{item.challenge}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Internal method links */}
                    <div className="mt-10 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                        <p className="font-semibold text-blue-900 mb-4">Explore NDT Method Technical Guides:</p>
                        <div className="flex flex-wrap gap-3">
                            {[
                                { label: "Eddy Current Testing", link: "/eddy-current-testing" },
                                { label: "Ultrasonic Testing (UT/PAUT)", link: "/ultrasonic-testing" },
                                { label: "Penetrant Testing (FPI)", link: "/penetrant-testing" },
                                { label: "Magnetic Particle Testing", link: "/magnetic-particle-testing" },
                                { label: "Radiographic Testing", link: "/radiographic-testing" },
                            ].map(({ label, link }) => (
                                <Link
                                    key={link}
                                    to={link}
                                    className="inline-flex items-center gap-1 bg-white border border-blue-200 text-blue-800 text-sm font-medium px-4 py-2 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition"
                                >
                                    {label} <ArrowRight className="w-3 h-3" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Deep Dive: Composite NDT ───────────────────────────────────── */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-blue-300 text-sm font-medium uppercase tracking-wider mb-3">Technical Focus</p>
                            <h2 className="text-3xl font-bold mb-5">
                                Composite Material NDT: The Fastest-Growing Aerospace Inspection Challenge
                            </h2>
                            <p className="text-slate-300 leading-relaxed mb-5">
                                Modern commercial aircraft now incorporate more than 50% composite structure by weight. The Boeing 787, Airbus A350, and military platforms like the F-35 rely on carbon fibre reinforced polymer (CFRP) for primary wing, fuselage, and empennage structure. This shift has fundamentally changed the NDT landscape — the methods that work for aluminium and steel are largely unsuitable for composites.
                            </p>
                            <p className="text-slate-300 leading-relaxed mb-5">
                                The critical defect types in composites are delaminations (separation between plies), disbonds (loss of adhesion in bonded joints or sandwich cores), porosity (void content from processing), and impact damage — including barely visible impact damage (BVID) that leaves no surface mark but significantly degrades structural strength. Detecting BVID is one of the most demanding composite NDT challenges because the damage zone can be 25mm or more in diameter with no visible indication.
                            </p>
                            <p className="text-slate-300 leading-relaxed">
                                Atlantis NDT's composite NDT consultants develop and qualify inspection procedures for all composite structure types — from thin laminate skins to thick wingspar sections and complex-contour radomes.
                            </p>
                        </div>
                        <div className="space-y-4">
                            {[
                                {
                                    method: "Pulse Echo Ultrasonic Testing",
                                    use: "Single-sided access. Primary production and MRO method. Detects delaminations, voids, and disbonds. Water-coupled or dry-coupled immersion scanning.",
                                    suitable: "Laminates, thick sections",
                                },
                                {
                                    method: "Through-Transmission UT (TTU)",
                                    use: "Dual transducer — one each side. Excellent sensitivity to porosity and internal voids. Used in production for panels and spar sections. Requires two-sided access.",
                                    suitable: "Flat and simple-contour panels",
                                },
                                {
                                    method: "Flash Thermography",
                                    use: "High-energy flash excites thermal gradient. Camera images subsurface defects as cold spots. Rapid large-area screening. No couplant. Used in MRO.",
                                    suitable: "Large skin panels, spot inspections",
                                },
                                {
                                    method: "Shearography",
                                    use: "Laser interferometry detects surface strain from subsurface disbonds under vacuum or thermal excitation. No contact. Excellent for honeycomb core disbond.",
                                    suitable: "Bonded assemblies, honeycomb",
                                },
                            ].map(({ method, use, suitable }) => (
                                <div key={method} className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                                    <h3 className="font-bold text-white mb-1">{method}</h3>
                                    <p className="text-slate-400 text-sm mb-2">{use}</p>
                                    <span className="text-xs bg-blue-900 text-blue-200 px-2 py-1 rounded-full">Best for: {suitable}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Standards & Specifications ─────────────────────────────────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">
                            Aerospace NDT Standards &amp; Specifications
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Aerospace NDT operates within a layered framework of personnel standards, process specifications, and regulatory requirements. Understanding which standards apply — and how they interact — is essential to building a compliant NDT programme.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        {standardsData.map((s) => (
                            <div key={s.standard} className="bg-slate-50 rounded-xl p-5 border border-slate-200 hover:border-blue-400 hover:shadow-sm transition">
                                <div className="flex items-start gap-3">
                                    <div className="bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg flex-shrink-0 mt-0.5">{s.standard}</div>
                                    <div>
                                        <p className="font-semibold text-slate-800 text-sm mb-1">{s.fullName}</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">{s.description}</p>
                                        <span className="inline-block mt-2 text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">{s.scope}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Services Atlantis Provides ─────────────────────────────────── */}
            <section className="py-16 bg-blue-800 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Aerospace NDT Services from Atlantis NDT</h2>
                        <p className="text-blue-200 max-w-2xl mx-auto">
                            From building your NAS-410 written practice from scratch to guiding your team through a NADCAP audit, our Level III consultants provide end-to-end aerospace NDT programme support.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {atlantisServices.map((service) => (
                            <Link key={service.title} to={service.link}>
                                <Card className="h-full bg-blue-900 border-blue-700 hover:border-white transition group">
                                    <CardHeader className="pb-3">
                                        <service.icon className="w-8 h-8 text-blue-300 mb-2 group-hover:scale-110 transition" />
                                        <CardTitle className="text-base text-white leading-snug">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-blue-200 text-sm leading-relaxed">{service.description}</p>
                                        <p className="text-blue-300 text-sm mt-3 font-medium group-hover:text-white transition">Learn more →</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Challenges Section ────────────────────────────────────────── */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4 text-slate-900">
                            Aerospace NDT Challenges We Solve
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            The most complex aerospace NDT problems require more than equipment — they require deep process knowledge, regulatory expertise, and experience developing defensible solutions that satisfy both engineering and compliance requirements.
                        </p>
                    </div>
                    <div className="space-y-5">
                        {challenges.map((c, i) => (
                            <motion.div
                                key={c.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.07, duration: 0.5 }}
                                className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition"
                            >
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-blue-700 text-white rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-slate-800 mb-2">{c.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{c.detail}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── NAS-410 vs SNT-TC-1A Comparison ──────────────────────────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-10 text-slate-900">
                        NAS-410 vs. ASNT SNT-TC-1A: Key Differences
                    </h2>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow">
                        <table className="w-full text-sm">
                            <thead className="bg-blue-800 text-white">
                                <tr>
                                    <th className="text-left p-4 font-semibold">Requirement</th>
                                    <th className="text-left p-4 font-semibold">NAS-410 (Aerospace)</th>
                                    <th className="text-left p-4 font-semibold">ASNT SNT-TC-1A (General Industry)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    ["Primary industry", "Aerospace & defence", "Oil & gas, petrochemical, general industry"],
                                    ["Training hours (Level II ET)", "80 hours minimum", "Employer-defined (typically 40–80 hours)"],
                                    ["Experience hours (Level II ET)", "1,600 hours minimum", "Employer-defined"],
                                    ["Written examination", "Mandatory — general + specific + practical", "Mandatory — employer-administered or ASNT"],
                                    ["Level III oversight", "Employer Level III required", "Employer Level III (or external) acceptable"],
                                    ["Written practice", "Mandatory, specific format", "Mandatory, employer-defined format"],
                                    ["European equivalent", "EN 4179", "ISO 9712 (partially equivalent)"],
                                    ["NADCAP requirement", "NAS-410 or EN 4179 required", "Not accepted for NADCAP aerospace"],
                                ].map(([req, nas, asnt], i) => (
                                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="p-4 font-semibold text-slate-800">{req}</td>
                                        <td className="p-4 text-slate-700">{nas}</td>
                                        <td className="p-4 text-slate-600">{asnt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-slate-500 text-sm mt-4 text-center">
                        Need help setting up a NAS-410 programme? <Link to="/asnt-certification" className="text-blue-700 hover:underline font-medium">See our ASNT &amp; NAS-410 certification services →</Link>
                    </p>
                </div>
            </section>

            {/* ── Locations Served ──────────────────────────────────────────── */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">
                        Aerospace NDT Consulting Locations
                    </h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
                        Our aerospace NDT consultants work on-site and remotely with aircraft manufacturers, MRO facilities, and defence suppliers worldwide.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {[
                            { city: "Seattle, WA", detail: "Boeing Commercial Airplanes ecosystem, composite supply chain", link: "/consulting/ndt-consulting-seattle" },
                            { city: "Los Angeles, CA", detail: "Northrop Grumman, SpaceX, defence aerospace programs", link: "/consulting/ndt-consulting-los-angeles" },
                            { city: "Dallas / Fort Worth", detail: "Lockheed Martin, Bell, Textron Aviation", link: "/consulting/ndt-consulting-dallas" },
                            { city: "Bangalore, India", detail: "HAL, Airbus India Engineering, ISRO, DRDO", link: "/consulting/ndt-consulting-bangalore" },
                            { city: "United Kingdom", detail: "Rolls-Royce, BAE Systems, GKN Aerospace, EASA MROs", link: "/consulting/ndt-consulting-uk" },
                            { city: "Germany", detail: "Airbus Hamburg/Bremen, MTU Aero Engines, Lufthansa Technik", link: "/consulting/ndt-consulting-germany" },
                            { city: "France", detail: "Airbus Toulouse, Safran, Dassault Aviation", link: "/consulting/ndt-consulting-france" },
                            { city: "Online / Remote", detail: "Procedure review, written practice development, audit support", link: "/consulting" },
                        ].map(({ city, detail, link }) => (
                            <Link key={city} to={link}>
                                <div className="bg-white rounded-xl p-5 border border-slate-200 hover:border-blue-500 hover:shadow-md transition group h-full">
                                    <h3 className="font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition">{city}</h3>
                                    <p className="text-slate-600 text-sm">{detail}</p>
                                    <p className="text-blue-700 text-sm mt-3 font-medium">Learn more →</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Internal Links Panel ──────────────────────────────────────── */}
            <section className="py-12 bg-blue-50 border-y border-blue-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-xl font-bold text-blue-900 mb-6">Related Atlantis NDT Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { label: "ASNT Certification Guide", link: "/asnt-certification" },
                            { label: "NDT Training USA (NAS-410)", link: "/ndt-training-usa" },
                            { label: "Eddy Current Testing (ECT) Guide", link: "/eddy-current-testing" },
                            { label: "Ultrasonic Testing (UT/PAUT)", link: "/ultrasonic-testing" },
                            { label: "Penetrant Testing (PT/FPI)", link: "/penetrant-testing" },
                            { label: "Magnetic Particle Testing (MT)", link: "/magnetic-particle-testing" },
                            { label: "NDT Consulting — Los Angeles", link: "/consulting/ndt-consulting-los-angeles" },
                            { label: "NDT Consulting — Seattle", link: "/consulting/ndt-consulting-seattle" },
                        ].map(({ label, link }) => (
                            <Link
                                key={link}
                                to={link}
                                className="flex items-center gap-2 text-blue-800 text-sm font-medium hover:text-blue-900 hover:underline"
                            >
                                <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FAQ Section ───────────────────────────────────────────────── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">
                        Aerospace NDT — Frequently Asked Questions
                    </h2>
                    <p className="text-center text-slate-600 mb-10">
                        Common questions from aircraft OEMs, MRO facilities, and aerospace supply chain companies about aerospace NDT methods, standards, and compliance.
                    </p>
                    <div className="space-y-3">
                        {aerofaqs.map((f, i) => (
                            <FAQItem key={i} q={f.q} a={f.a} />
                        ))}
                    </div>
                </div>
            </section>

            {/* ── CTA Section ───────────────────────────────────────────────── */}
            <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-800 text-white">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <Plane className="w-10 h-10 text-blue-300 mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">
                        Ready to Strengthen Your Aerospace NDT Programme?
                    </h2>
                    <p className="text-blue-100 mb-8 text-lg max-w-2xl mx-auto">
                        Whether you need a NAS-410 written practice built from scratch, NADCAP audit preparation, composite NDT procedures, or an independent Level III consultant — Atlantis NDT's aerospace experts are ready to help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-white text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-slate-100 transition"
                        >
                            Request Aerospace NDT Consultation <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to="/asnt-certification"
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                        >
                            NAS-410 Certification Services
                        </Link>
                        <Link
                            to="/ndt-for-power-generation"
                            className="inline-block border-2 border-white/60 text-white/90 px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition text-sm"
                        >
                            NDT for Power Generation
                        </Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
