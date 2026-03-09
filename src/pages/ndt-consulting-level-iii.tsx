import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle,
    Users,
    FileText,
    Shield,
    Award,
    Target,
    ArrowRight,
    Briefcase,
    ClipboardCheck,
    Scale,
    Wrench,
    Factory,
    Plane,
    Zap,
    Building,
    Ship,
    Atom,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/* ─── Expanded Services Data ─── */
const consultingServices = [
    {
        title: "Procedure Development",
        icon: FileText,
        summary: "Written practices and examination procedures per all major codes and standards.",
        details: [
            "Written practice development per ASNT SNT-TC-1A and CP-189",
            "Examination procedure writing per ASME Section V, Article 1–30",
            "Client-specific WPS/PQR review and NDE acceptance criteria alignment",
            "ISO 9712 written scheme of work development for international programs",
            "Technique sheets and scan plans for PAUT, TOFD, and encoded UT",
            "Procedure qualification and demonstration testing per ASME V Article 14",
        ],
    },
    {
        title: "Program Audits",
        icon: Shield,
        summary: "Third-party audits of NDE programs for compliance, accreditation, and continuous improvement.",
        details: [
            "NAS 410 / EN 4179 aerospace certification program compliance audits",
            "ASNT CP-189 gap analysis and remediation roadmap",
            "Employer-based written practice review per SNT-TC-1A (2020 edition)",
            "OJT documentation and experience hour verification",
            "Quality management system NDE procedure integration review",
            "Pre-accreditation readiness assessments for A2LA, NADCAP, PRI",
        ],
    },
    {
        title: "Technique Development",
        icon: Target,
        summary: "Custom techniques for advanced inspections, complex geometries, and emerging technologies.",
        details: [
            "Phased Array UT (PAUT) scan plan design and simulation (CIVA, ESBeamTool)",
            "Time-of-Flight Diffraction (TOFD) technique development per BS EN ISO 10863",
            "Encoded scanning and automated UT for corrosion mapping and weld inspection",
            "Guided Wave Testing (GWT) technique development for long-range pipeline screening",
            "Eddy current technique sheets for heat exchanger tube inspection",
            "Digital Radiography (DR/CR) technique optimization and image quality assessment",
        ],
    },
    {
        title: "Personnel Qualification",
        icon: Award,
        summary: "Complete personnel certification program management from eye exams to OJT tracking.",
        details: [
            "Visual acuity and colour perception exam compliance (Jaeger J2 / Ishihara)",
            "OJT (on-the-job training) hour tracking systems and documentation templates",
            "Limited certification vs general certification scope definition",
            "Written, practical, and specific exam development and administration",
            "Certification renewal and recertification program management",
            "Multi-site employer-based program harmonization",
        ],
    },
    {
        title: "Expert Witness & Failure Analysis",
        icon: Scale,
        summary: "Technical expert services for litigation, insurance claims, and root cause investigation.",
        details: [
            "Failure analysis reports with metallurgical and NDE data correlation",
            "Deposition and courtroom testimony support",
            "Root cause analysis (RCA) using ASME, API, and NACE methodologies",
            "Insurance claim technical review and damage assessment",
            "Third-party technical opinion for inspection disputes",
            "Construction defect and weld rejection technical arbitration",
        ],
    },
    {
        title: "Regulatory & Code Compliance",
        icon: ClipboardCheck,
        summary: "Navigating complex code requirements across API, ASME, AWS, and international standards.",
        details: [
            "API 510 pressure vessel inspection NDE requirements",
            "API 570 piping inspection program NDE integration",
            "API 653 aboveground storage tank NDE and fitness-for-service evaluation",
            "ASME PCC-2 repair and alteration NDE requirements",
            "AWS D1.1 structural welding NDE acceptance criteria and technique qualification",
            "NBIC (National Board Inspection Code) repair and alteration NDE compliance",
        ],
    },
];

/* ─── In-House vs Outsourced Comparison ─── */
const comparisonData = [
    {
        dimension: "Cost Model",
        inHouse: "Full-time salary ($120K–$180K) + benefits, training budget, office overhead",
        outsourced: "Daily rate ($1,200–$2,500/day) or project-based fee — pay only when needed",
    },
    {
        dimension: "Flexibility",
        inHouse: "Fixed resource — available full-time but may be underutilized during low-activity periods",
        outsourced: "Scale up or down by project — engage only for procedure writes, audits, or peak turnarounds",
    },
    {
        dimension: "Multi-Method Coverage",
        inHouse: "Typically 2–3 methods — difficult to find one person certified in all 6 methods",
        outsourced: "Access to team of Level III consultants covering UT, RT, MT, PT, ET, VT, and advanced methods",
    },
    {
        dimension: "Compliance Risk",
        inHouse: "Single point of failure — if the Level III leaves, the entire program is at risk",
        outsourced: "Consulting firm maintains depth of bench — continuity guaranteed regardless of personnel changes",
    },
    {
        dimension: "Overhead & Admin",
        inHouse: "Employer manages training, recertification, ACCP renewal, continuing education credits",
        outsourced: "Consulting firm maintains all certifications, insurance, and professional development",
    },
    {
        dimension: "Best For",
        inHouse: "Companies with 50+ NDT technicians, continuous high-volume inspection programs",
        outsourced: "Companies needing periodic Level III support, turnaround projects, or multi-method expertise",
    },
    {
        dimension: "Independence",
        inHouse: "Internal bias risk — Level III reports to same management as production",
        outsourced: "Third-party independence — objective audit findings and unbiased procedure review",
    },
];

/* ─── Engagement Process ─── */
const engagementSteps = [
    {
        step: 1,
        title: "Scope Assessment",
        icon: ClipboardCheck,
        description:
            "We review your existing NDE program documentation, written practice, applicable codes and standards, and specific project requirements. This includes identifying the NDT methods involved, the number of personnel to be qualified, and the regulatory framework (ASME, API, NAS 410, ISO 9712). We provide a detailed scope of work and fixed-price or time-and-materials proposal within 48 hours.",
    },
    {
        step: 2,
        title: "Expert Assignment",
        icon: Users,
        description:
            "Based on the scope, we assign one or more Level III consultants with the exact method certifications and industry experience your project requires. All assigned consultants hold current ASNT ACCP or SNT-TC-1A Level III certification, carry professional liability insurance, and have a minimum of 15 years field experience. For multi-method projects, we assemble a team covering all required disciplines.",
    },
    {
        step: 3,
        title: "Execution & Documentation",
        icon: FileText,
        description:
            "Our Level III consultants execute the agreed scope — whether it is writing procedures, conducting audits, developing techniques, or qualifying personnel. All deliverables are documented per your quality management system requirements and applicable code editions. We provide draft deliverables for your review, incorporate feedback, and issue final documents with full revision control and traceability.",
    },
    {
        step: 4,
        title: "Ongoing Support",
        icon: Shield,
        description:
            "After the initial engagement, we remain available for ongoing technical support including procedure revisions when codes update, annual program audit services, new personnel qualification as your team grows, and on-call technical guidance for field interpretation questions. Many clients retain us on annual support agreements for continuous program maintenance.",
    },
];

/* ─── Industries Data (Expanded) ─── */
const industries = [
    {
        name: "Oil & Gas",
        icon: Factory,
        context:
            "Level III consulting for upstream, midstream, and downstream facilities. Procedure development per API 510, 570, 653, and ASME Section V. Fitness-for-service assessments (API 579-1) and in-service inspection program development. Turnaround NDE planning and Level III coverage for refinery shutdowns.",
    },
    {
        name: "Petrochemical",
        icon: Wrench,
        context:
            "NDE program development for process piping, pressure vessels, heat exchangers, and storage tanks. CUI (corrosion under insulation) technique development. HTHA (high-temperature hydrogen attack) inspection procedure qualification per API RP 941.",
    },
    {
        name: "Power Generation",
        icon: Zap,
        context:
            "Boiler and pressure vessel inspection procedures per ASME Section I and Section VIII. Turbine component NDE technique development. HRSG (heat recovery steam generator) inspection program management. Nuclear-grade NDE procedures per ASME Section III and Section XI.",
    },
    {
        name: "Aerospace",
        icon: Plane,
        context:
            "NAS 410 / EN 4179 certification program development and compliance auditing. NADCAP accreditation support for NDE processes. Technique development for composite structure inspection, turbine blade inspection, and critical fastener hole inspection using ET and UT.",
    },
    {
        name: "Infrastructure & Construction",
        icon: Building,
        context:
            "Structural steel weld inspection procedures per AWS D1.1 and D1.5. Bridge inspection NDE technique qualification. Pipeline construction NDE per API 1104 and CSA Z662. Post-tension tendon and cable inspection technique development.",
    },
    {
        name: "Marine & Offshore",
        icon: Ship,
        context:
            "Offshore platform structural inspection NDE procedures. Subsea pipeline inspection technique development. Classification society (ABS, DNV, Lloyd's, BV) NDE compliance. Hull and ballast tank inspection program management.",
    },
    {
        name: "Nuclear",
        icon: Atom,
        context:
            "ASME Section III and Section XI NDE procedure qualification. ISI (in-service inspection) program development. Personnel qualification per ANSI/ASNT CP-189 with nuclear-specific supplemental requirements. 10 CFR 50 Appendix B quality assurance compliance.",
    },
    {
        name: "Manufacturing",
        icon: Briefcase,
        context:
            "Production NDE procedure development for castings, forgings, and weldments. Acceptance criteria alignment with customer specifications. First-article inspection NDE technique qualification. Automated inspection system validation and procedure writing.",
    },
];

/* ─── Expanded FAQs ─── */
const faqs = [
    {
        question: "What does an NDT Level III consultant do?",
        answer:
            "An NDT Level III consultant provides senior technical leadership for your entire NDE program. Responsibilities include developing and approving written practices and examination procedures per SNT-TC-1A, CP-189, or ISO 9712; qualifying and certifying Level I and Level II personnel through written, practical, and specific examinations; interpreting codes and standards (ASME Section V, API, AWS) to determine applicable NDE requirements; developing custom techniques for complex geometries and advanced methods (PAUT, TOFD, guided wave); conducting third-party audits of existing NDE programs; and providing expert technical guidance on inspection results interpretation and acceptance criteria application. Unlike a Level III technician who performs hands-on testing, a Level III consultant focuses on program-level oversight, technical authority, and quality assurance.",
    },
    {
        question: "How much does NDT Level III consulting cost?",
        answer:
            "NDT Level III consulting rates vary by method complexity, geographic location, and engagement type. Typical daily rates range from $1,200 to $2,500 per day. Single-method conventional consulting (UT, RT, MT, PT, VT) typically ranges from $1,200 to $1,800 per day. Multi-method or advanced method consulting (PAUT, TOFD, guided wave) ranges from $1,800 to $2,500 per day. Project-based pricing is also available: a complete written practice development typically costs $5,000 to $15,000 depending on scope; a full program audit with remediation report costs $8,000 to $20,000; personnel qualification exam development and administration is typically $800 to $1,500 per candidate per method. International engagements may include travel and per diem costs. For ongoing support, annual retainer agreements typically range from $24,000 to $60,000 per year depending on the level of support required.",
    },
    {
        question: "Do you provide on-site consulting?",
        answer:
            "Yes, our Level III consultants are available for on-site engagements worldwide. We have consultants based in Houston, Dubai, Abu Dhabi, Mumbai, Singapore, Calgary, London, and other major industrial centres, which minimizes mobilization costs for regional projects. For turnaround and shutdown support, we can mobilize Level III consultants within 48–72 hours to most global locations. We also offer remote consulting services for tasks that do not require physical presence, such as procedure review, written practice development, exam development, and technical advisory services via video conference. Many clients use a hybrid model: remote procedure development followed by a brief on-site visit for technique demonstration and personnel qualification exams.",
    },
    {
        question: "Can you help with certification program development?",
        answer:
            "Absolutely. Developing an employer-based certification program is one of our core consulting services. We help companies build programs compliant with ASNT SNT-TC-1A (2020 edition), ASNT CP-189, ISO 9712, NAS 410 / EN 4179, or customer-specific requirements. The deliverables include a complete written practice (or written scheme) document, training syllabi for each method and level, written examination question banks with answer keys, practical examination procedures with acceptance criteria and grading rubrics, OJT tracking forms and experience documentation templates, visual acuity test procedures, and certification record templates. We also support the implementation phase — training your designated examiners, conducting initial qualification exams, and auditing the program after the first certification cycle.",
    },
    {
        question: "What qualifications do your Level III consultants have?",
        answer:
            "All Atlantis NDT Level III consultants hold current ASNT certification — either ACCP (Central Certification Program) Level III or employer-based SNT-TC-1A Level III with documented third-party verification. Our consultants average 15+ years of hands-on NDE field experience before transitioning to consulting roles. Many hold additional certifications including API 510 (Pressure Vessel Inspector), API 570 (Piping Inspector), API 653 (Aboveground Storage Tank Inspector), AWS CWI (Certified Welding Inspector), and ASNT NDT Level III in multiple methods (UT, RT, MT, PT, ET, VT). For aerospace engagements, our consultants hold NAS 410 qualifications and NADCAP audit experience. All consultants carry professional liability insurance and maintain current certifications through continuing education and periodic re-examination.",
    },
    {
        question: "What's the difference between a Level III consultant and a Level III technician?",
        answer:
            "The distinction is primarily one of role and focus. A Level III technician (or in-house Level III) is typically a full-time employee who holds Level III certification and performs a mix of hands-on testing, procedure writing, and personnel management within a single organization. Their work is ongoing and operational. A Level III consultant, by contrast, is an external specialist engaged for specific high-value tasks: developing or overhauling a written practice, auditing an existing NDE program against code requirements, developing techniques for unusual or challenging inspections, qualifying personnel across multiple methods, or providing expert testimony. Consultants bring breadth of experience across multiple industries, clients, and regulatory frameworks. They offer independent third-party perspective — their findings are not influenced by internal production pressures. Many organizations use both: an in-house Level III for day-to-day operations and an external Level III consultant for periodic audits, complex technique development, and program benchmarking.",
    },
    {
        question: "Can you provide multi-method Level III support?",
        answer:
            "Yes. Atlantis NDT provides Level III consulting across all six primary NDT methods — Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Testing (MT), Liquid Penetrant Testing (PT), Eddy Current Testing (ET), and Visual Testing (VT) — as well as advanced methods including Phased Array UT (PAUT), Time-of-Flight Diffraction (TOFD), Guided Wave Testing (GWT), Acoustic Emission Testing (AE), and Magnetic Flux Leakage (MFL). For projects requiring multi-method coverage, we assign a lead Level III consultant who coordinates the overall program, supported by method specialists as needed. This is particularly valuable during refinery turnarounds, new construction projects, and comprehensive program audits where all methods must be addressed simultaneously under a unified quality framework.",
    },
    {
        question: "Do you support NAS 410 aerospace certification programs?",
        answer:
            "Yes. We provide full NAS 410 / EN 4179 aerospace NDE certification program development and compliance consulting. This includes developing the employer-specific written practice that meets NAS 410 mandatory requirements (which are more prescriptive than SNT-TC-1A), creating training curricula aligned with NAS 410 minimum hour requirements for each method and level, developing qualification examination banks (written general, written specific, and practical), establishing the required Responsible Level III authority structure, and supporting NADCAP (National Aerospace and Defense Contractors Accreditation Program) audit preparation and response. Our aerospace Level III consultants have direct experience with major aerospace OEMs and MRO facilities, and understand the specific requirements of Pratt & Whitney, GE Aviation, Rolls-Royce, Boeing, and Airbus supplier quality specifications.",
    },
];

/* ─── Related Pages ─── */
const relatedPages = [
    { title: "All Consulting Locations", href: "/consulting", description: "NDT consulting services in 100+ cities worldwide" },
    { title: "ASNT Certification Guide", href: "/asnt-certification", description: "Complete guide to SNT-TC-1A & ACCP certification" },
    { title: "NDT Certification Guide", href: "/ndt-certification-guide", description: "Certification pathways for Level I, II, and III" },
    { title: "Certification Cost Calculator", href: "/tools/ndt-certification-cost-calculator", description: "Estimate your NDT certification investment" },
    { title: "API 510 Certification", href: "/api-510-certification", description: "Pressure vessel inspector certification guide" },
    { title: "API 570 Certification", href: "/api-570-certification", description: "Piping inspector certification guide" },
    { title: "API 653 Certification", href: "/api-653-certification", description: "Tank inspector certification guide" },
];

export default function NDTConsultingLevelIII() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "NDT Level III Consulting Services",
                "provider": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "url": "https://atlantisndt.com",
                },
                "description":
                    "ASNT Level III NDT consulting services including procedure development, program audits, technique development, personnel qualification, expert witness, and regulatory compliance.",
                "serviceType": "NDT Level III Consulting",
                "areaServed": {
                    "@type": "Place",
                    "name": "Worldwide",
                },
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "Level III Consulting Services",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NDT Procedure Development" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "NDE Program Audits" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Advanced Technique Development" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Personnel Qualification & Certification" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Expert Witness & Failure Analysis" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Regulatory & Code Compliance" } },
                    ],
                },
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer,
                    },
                })),
            },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Level III Consulting | ASNT Procedures & Program Audits | Atlantis NDT"
                description="ASNT Level III NDT consulting services. Procedure development, program audits, technique development, expert witness. Global availability. Request quote!"
                keywords="NDT Level III consulting, NDT procedure development, NDT program audit, ASNT Level III, NDT expert witness, NDT technical consulting, Level III consultant, ASNT CP-189, SNT-TC-1A, NDE program audit, NDT technique development, PAUT procedure, NAS 410 consulting"
                canonical="https://atlantisndt.com/consulting/ndt-consulting-level-iii"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* ─── Hero ─── */}
            <section className="bg-gradient-to-br from-slate-700 to-gray-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-slate-300 mb-4">
                            <Users className="w-5 h-5" />
                            <span>Consulting Services</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Level III Consulting</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mb-8">
                            Expert ASNT Level III consulting for procedure development, program audits, technique development, personnel qualification, and expert witness services. 50+ certified experts available worldwide with an average of 15+ years field experience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center"
                            >
                                Request Quote
                            </Link>
                            <Link
                                to="/consulting"
                                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center"
                            >
                                All Consulting Locations
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Stats Bar ─── */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-slate-700 mb-2">50+</div>
                            <div className="text-slate-600">Level III Experts</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-700 mb-2">15+</div>
                            <div className="text-slate-600">Avg. Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-700 mb-2">6+</div>
                            <div className="text-slate-600">NDT Methods Covered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-slate-700 mb-2">Global</div>
                            <div className="text-slate-600">Availability</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── What Is Level III Consulting (Intro Copy) ─── */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <h2 className="text-3xl font-bold mb-6">What Is NDT Level III Consulting?</h2>
                        <div className="prose prose-slate max-w-none text-slate-700 space-y-4">
                            <p>
                                NDT Level III consulting provides organizations with access to senior-level NDE (Non-Destructive Examination) technical expertise without the cost and complexity of maintaining a full-time Level III on staff. Under ASNT SNT-TC-1A and CP-189, the Level III individual is the highest authority in an NDE program — responsible for establishing techniques, interpreting codes, developing procedures, qualifying personnel, and ensuring overall program compliance with applicable standards.
                            </p>
                            <p>
                                Many companies — particularly small and mid-size inspection firms, fabrication shops, and owner-operators — do not have enough continuous Level III work to justify a full-time hire across all required methods. An NDT Level III consultant fills this gap by providing expert-level services on demand: developing your written practice, auditing your existing program, qualifying your technicians, writing procedures for challenging inspections, or serving as your designated Level III of record for specific methods.
                            </p>
                            <p>
                                At Atlantis NDT, our Level III consultants are ASNT ACCP certified, hold certifications in multiple methods (UT, RT, MT, PT, ET, VT), and bring 15+ years of hands-on field experience across oil and gas, petrochemical, power generation, aerospace, and infrastructure industries. We support both domestic and international engagements with consultants based across the Americas, Middle East, India, Southeast Asia, and Europe.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── Consulting Services (Expanded) ─── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Level III Consulting Services</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
                        Comprehensive NDT Level III consulting across all six primary methods and advanced techniques. Each service is delivered by ASNT-certified professionals with deep code knowledge.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {consultingServices.map((service) => (
                            <Card key={service.title} className="hover:shadow-lg transition group">
                                <CardHeader className="pb-3">
                                    <div className="flex items-start gap-3">
                                        <service.icon className="w-8 h-8 text-slate-600 mt-1 group-hover:text-[#004aad] transition shrink-0" />
                                        <div>
                                            <CardTitle className="text-xl mb-1">{service.title}</CardTitle>
                                            <p className="text-slate-600 text-sm">{service.summary}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {service.details.map((detail, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                                                <span>{detail}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── In-House vs Outsourced Comparison ─── */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">In-House Level III vs. Outsourced Consulting</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
                        Should you hire a full-time Level III or engage an external consultant? The right answer depends on your inspection volume, method coverage needs, and program maturity.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
                            <thead>
                                <tr className="bg-slate-700 text-white">
                                    <th className="px-6 py-4 text-left font-semibold text-sm">Dimension</th>
                                    <th className="px-6 py-4 text-left font-semibold text-sm">In-House Level III</th>
                                    <th className="px-6 py-4 text-left font-semibold text-sm">Outsourced Consulting</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparisonData.map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-6 py-4 font-semibold text-slate-800 text-sm align-top whitespace-nowrap">{row.dimension}</td>
                                        <td className="px-6 py-4 text-slate-600 text-sm align-top">{row.inHouse}</td>
                                        <td className="px-6 py-4 text-slate-600 text-sm align-top">{row.outsourced}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-500 mt-4 text-center">
                        Many organizations use a hybrid approach: an in-house Level III for daily operations supplemented by external consultants for audits, multi-method coverage, and peak workload periods.
                    </p>
                </div>
            </section>

            {/* ─── Engagement Process ─── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">How We Work: Engagement Process</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
                        From initial scope assessment to ongoing program support, our structured engagement process ensures clear deliverables, predictable timelines, and measurable outcomes.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        {engagementSteps.map((item) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: item.step * 0.1 }}
                                className="relative"
                            >
                                <Card className="h-full hover:shadow-lg transition">
                                    <CardHeader className="pb-3">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-slate-700 text-white rounded-full flex items-center justify-center font-bold text-lg shrink-0">
                                                {item.step}
                                            </div>
                                            <div>
                                                <CardTitle className="text-xl">{item.title}</CardTitle>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Industries (Expanded Cards) ─── */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Industries We Serve</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-12">
                        Level III consulting requirements vary dramatically by industry. Our consultants bring sector-specific code knowledge and direct experience in each of these fields.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {industries.map((ind) => (
                            <Card key={ind.name} className="hover:shadow-lg transition group h-full">
                                <CardHeader className="pb-2">
                                    <ind.icon className="w-8 h-8 text-slate-600 mb-2 group-hover:text-[#004aad] transition" />
                                    <CardTitle className="text-lg">{ind.name}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-sm leading-relaxed">{ind.context}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Why Choose Atlantis NDT ─── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Atlantis NDT for Level III Consulting</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "ACCP & Multi-Method Certified",
                                desc: "All consultants hold current ASNT ACCP Level III certification and are qualified in multiple NDT methods. No subcontracting to unverified individuals.",
                            },
                            {
                                title: "15+ Years Average Experience",
                                desc: "Our Level III consultants have spent 15+ years in the field before transitioning to consulting. They understand real-world inspection challenges, not just textbook theory.",
                            },
                            {
                                title: "Global Coverage, Local Presence",
                                desc: "Consultants based in Houston, Dubai, Mumbai, Singapore, Calgary, London, and other industrial hubs. Rapid mobilization and reduced travel costs for regional projects.",
                            },
                            {
                                title: "Code-Current Knowledge",
                                desc: "We maintain current editions of all major codes and standards (ASME V, API 510/570/653, AWS D1.1, NAS 410, ISO 9712) and update client procedures when new editions release.",
                            },
                            {
                                title: "Independent Third-Party Perspective",
                                desc: "As external consultants, our audit findings and procedure reviews are independent of your internal production pressures — critical for regulatory credibility and client confidence.",
                            },
                            {
                                title: "Fixed-Price & Time-and-Materials Options",
                                desc: "Choose the pricing model that fits your project: fixed-price for defined deliverables like procedure writes and audits, or T&M for ongoing support and complex engagements.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="flex items-start gap-3">
                                <CheckCircle className="w-6 h-6 text-green-600 mt-1 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
                                    <p className="text-slate-600 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── FAQs ─── */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
                    <p className="text-slate-600 text-center mb-12">
                        Common questions about NDT Level III consulting services, pricing, qualifications, and engagement models.
                    </p>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── Related Pages ─── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Related Resources</h2>
                    <p className="text-slate-600 text-center mb-12">
                        Explore our certification guides, consulting locations, and free tools to support your NDT program.
                    </p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedPages.map((page) => (
                            <Link key={page.href} to={page.href} className="group">
                                <Card className="h-full hover:shadow-lg transition group-hover:border-[#004aad]/30">
                                    <CardContent className="pt-6">
                                        <h3 className="font-bold text-slate-800 mb-1 group-hover:text-[#004aad] transition flex items-center gap-2">
                                            {page.title}
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                                        </h3>
                                        <p className="text-slate-600 text-sm">{page.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-16 bg-gradient-to-r from-slate-700 to-gray-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Need Expert NDT Level III Consulting?</h2>
                    <p className="text-slate-300 mb-8 text-lg">
                        Whether you need a complete written practice, a program audit, technique development for a complex inspection, or ongoing Level III support — our ACCP-certified experts are ready to help. Request a quote and receive a detailed scope of work within 48 hours.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-slate-800 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
                        >
                            Request Quote
                        </Link>
                        <Link
                            to="/consulting"
                            className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center"
                        >
                            View All Consulting Locations
                        </Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
