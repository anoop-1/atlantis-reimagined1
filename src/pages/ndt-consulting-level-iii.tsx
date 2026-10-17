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
import { LevelIiiEngagements } from "@/components/InspectionL3Content";
import MP from "@/data/money-pages-2026-10.json";
import MONEY_META from "@/data/money-page-meta.json"; // one source with scripts/ctr-wave13-overrides.mjs
import { SITE, ORG_ID, FOUNDER_ID, founderPageNodes } from "@/lib/founder-person";
import { inlineLinks, level3ProfessionalServiceNode } from "@/data/rank-wave14-2026-10.mjs"; // 2026-10-17 §58: same copy + node as the crawler HTML

// 2026-10-12 (SEO audit action 9): "outsourced" and "outside agency Level III" in the
// title, H1 and copy, a query-verbatim "What is an outsourced NDT Level III?" answer,
// the founder Person entity, and claims the business cannot evidence removed (a team
// of Level IIIs, 15+ years, ET and six methods, OEM experience, a 48-hour proposal).
// Copy shared with the crawler HTML: src/data/money-pages-2026-10.json (level3).
const L3 = MP.level3;
const L3_META = MONEY_META["/consulting/ndt-consulting-level-iii"];

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
            "Technique sheets and scan plans for PAUT, TOFD, and encoded UT",
            "Procedure qualification and demonstration testing per ASME V Article 14",
        ],
    },
    {
        title: "Program Audits",
        icon: Shield,
        summary: "Third-party audits of NDE programs for compliance, accreditation, and continuous improvement.",
        details: [
            "NAS 410 / EN 4179 aerospace certification program compliance audits, through our NAS 410 Level 3 associate",
            "ASNT CP-189 gap analysis and remediation roadmap",
            "Employer-based written practice review per SNT-TC-1A (2024 edition)",
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
        title: "Independent Technical Review",
        icon: Scale,
        summary: "Independent review of NDT procedures, inspection records and the technical basis of reported findings.",
        details: [
            "Review of the applicable NDT procedure and revision",
            "Examination of calibration, equipment and personnel records",
            "Assessment of method coverage and documented limitations",
            "Comparison of reported findings with the specified acceptance criteria",
            "Written technical observations and recommended follow-up inspection",
        ],
    },
    {
        title: "Regulatory & Code Compliance",
        icon: ClipboardCheck,
        summary: "Navigating complex code requirements across API, ASME, AWS, and international standards.",
        details: [
            "API 510 pressure vessel inspection NDE requirements",
            "API 570 piping inspection program NDE integration",
            "API 653 aboveground storage tank NDE and settlement evaluation",
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
        inHouse: "Full-time salary + benefits, training budget, office overhead — significant fixed annual cost",
        outsourced: "Affordable, accessible, fully customizable — daily-rate or project-based engagement; pay only when needed. Contact us for a tailored quote.",
    },
    {
        dimension: "Flexibility",
        inHouse: "Fixed resource — available full-time but may be underutilized during low-activity periods",
        outsourced: "Scale up or down by project — engage only for procedure writes, audits, or peak turnarounds",
    },
    {
        dimension: "Multi-Method Coverage",
        inHouse: "Typically 2–3 methods — difficult to find one person certified in all 6 methods",
        outsourced: "Level III cover in the methods the engagement names: founder-led in UT, RT, MT, PT and VT, with NAS 410 Level 3 work through an associate",
    },
    {
        dimension: "Compliance Risk",
        inHouse: "Single point of failure — if the Level III leaves, the entire program is at risk",
        outsourced: "The arrangement is written into your written practice, so Level III cover does not leave with one employee",
    },
    {
        dimension: "Overhead & Admin",
        inHouse: "Employer manages training, recertification, ASNT 9712 renewal, continuing education credits",
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
            "We review your existing NDE program documentation, written practice, applicable codes and standards, and specific project requirements. This includes identifying the NDT methods involved, the number of personnel to be qualified, and the regulatory framework (ASME, API, NAS 410). You then receive a written scope of work and a fixed-scope or time-and-materials proposal.",
    },
    {
        step: 2,
        title: "Level III Assignment",
        icon: Users,
        description:
            "Work in UT, RT, MT, PT and VT is led by the founder, an ASNT NDT Level III in those methods. A Level III signs only within the methods held, so where a scope needs a method or scheme outside them, such as NAS 410 Level 3, the proposal names the associate who holds it before work starts.",
    },
    {
        step: 3,
        title: "Execution & Documentation",
        icon: FileText,
        description:
            "The Level III executes the agreed scope — whether it is writing procedures, conducting audits, developing techniques, or qualifying personnel. All deliverables are documented per your quality management system requirements and applicable code editions. We provide draft deliverables for your review, incorporate feedback, and issue final documents with full revision control and traceability.",
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
            "Level III consulting for upstream, midstream, and downstream facilities. Procedure development per API 510, 570, 653, and ASME Section V. In-service inspection program development and technique sheets for API 510/570/653 equipment. Turnaround NDE planning and Level III coverage for refinery shutdowns.",
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
            "NAS 410 / EN 4179 certification program development and compliance auditing through our NAS 410 Level 3 associate. NADCAP accreditation support for NDE processes. Technique development for composite structure and critical fastener hole inspection using UT.",
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
        question: "Do you provide on-site consulting?",
        answer:
            "Yes. Document work is delivered remotely, and onsite visits are scheduled to your project after a scoping call. For turnaround and shutdown support, onsite timing is agreed on the scoping call. We also offer remote consulting services for tasks that do not require physical presence, such as procedure review, written practice development, exam development, and technical advisory services via video conference. Many clients use a hybrid model: remote procedure development followed by a brief on-site visit for technique demonstration and personnel qualification exams.",
    },
    {
        question: "Can you help with certification program development?",
        answer:
            "Absolutely. Developing an employer-based certification program is one of our core consulting services. We help companies build programs compliant with ASNT SNT-TC-1A (2024 edition), ANSI/ASNT CP-189 or customer-specific requirements, and NAS 410 / EN 4179 programs through our NAS 410 Level 3 associate. The deliverables include a complete written practice (or written scheme) document, training syllabi for each method and level, written examination question banks with answer keys, practical examination procedures with acceptance criteria and grading rubrics, OJT tracking forms and experience documentation templates, visual acuity test procedures, and certification record templates. We also support the implementation phase — training your designated examiners, conducting initial qualification exams, and auditing the program after the first certification cycle.",
    },
    {
        question: "What qualifications does your Level III hold?",
        answer:
            "Atlantis NDT's Level III work is led by founder Anoop Rayavarapu, who holds ASNT NDT Level III certification in five methods (UT, RT, MT, PT, VT) and has 11+ years of international NDT field experience. A Level III may only approve procedures and qualify personnel in the methods they hold, so every engagement names the methods it covers. For aerospace clients, NAS 410 Level 3 work is carried out through an associate who holds NAS 410 Level 3.",
    },
    {
        question: "What's the difference between a Level III consultant and a Level III technician?",
        answer:
            "The distinction is primarily one of role and focus. A Level III technician (or in-house Level III) is typically a full-time employee who holds Level III certification and performs a mix of hands-on testing, procedure writing, and personnel management within a single organization. Their work is ongoing and operational. A Level III consultant, by contrast, is an external specialist engaged for specific high-value tasks: developing or overhauling a written practice, auditing an existing NDE program against code requirements, developing techniques for unusual or challenging inspections, qualifying personnel across multiple methods, or providing expert testimony. Consultants bring breadth of experience across multiple industries, clients, and regulatory frameworks. They offer independent third-party perspective — their findings are not influenced by internal production pressures. Many organizations use both: an in-house Level III for day-to-day operations and an external Level III consultant for periodic audits, complex technique development, and program benchmarking.",
    },
    {
        question: "Can you provide multi-method Level III support?",
        answer:
            "Yes, within the methods the Level III holds. Founder-led Level III work covers Ultrasonic Testing (UT), Radiographic Testing (RT), Magnetic Particle Testing (MT), Liquid Penetrant Testing (PT) and Visual Testing (VT). A Level III approves procedures and qualifies personnel only in the methods held, so every proposal names the methods and techniques it covers, and who covers anything outside them, such as NAS 410 Level 3 work through our associate. Multi-method programmes are run as one written practice, so a turnaround, new-build project or program audit is handled under one quality framework.",
    },
    {
        question: "Do you support NAS 410 aerospace certification programs?",
        answer:
            "Yes. NAS 410 Level 3 services are delivered through an associate of Atlantis who holds NAS 410 Level 3, with Atlantis managing the engagement. That covers the employer-specific written practice to NAS 410 / EN 4179 (which is more prescriptive than SNT-TC-1A), training and examination requirements for each method and level, the Responsible Level 3 designation where your written practice allows an outside agency to hold it, and Nadcap audit preparation and response.",
    },
    {
        question: "Is an \"NDT Level 3 consultant\" the same as an NDT Level III consultant?",
        answer:
            "Yes — \"NDT Level 3\" and \"NDT Level III\" are the same ASNT/ISO 9712 certification tier, written interchangeably as the numeral or the Roman numeral. Whether your team searches for an \"NDT Level 3 consultant\" or \"NDT Level III consultant,\" the qualification, scope of work, and every service described on this page are identical.",
    },
];

/* ─── Related Pages ─── */
const relatedPages = [
    { title: "All Consulting Locations", href: "/consulting", description: "NDT consulting services in 100+ cities worldwide" },
    { title: "ASNT Certification Guide", href: "/asnt-certification", description: "Complete guide to SNT-TC-1A & ASNT 9712 certification" },
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
                "@id": `${SITE}${L3.path}#service`,
                "name": "Outsourced ASNT Level III consulting",
                "provider": { "@id": ORG_ID },
                "description":
                    "ASNT Level III NDT consulting services including procedure development, program audits, technique development, personnel qualification, independent technical review, and regulatory compliance.",
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
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Independent Technical Review" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Regulatory & Code Compliance" } },
                    ],
                },
            },
            level3ProfessionalServiceNode(L3, { site: SITE, orgId: ORG_ID, authorId: FOUNDER_ID }),
            ...founderPageNodes(L3.path, L3_META.title, `${SITE}${L3.path}#service`),
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
                title={L3_META.title}
                description={L3_META.description}
                keywords="outsourced NDT Level III, outside agency Level III, NDT Level III consulting, NDT procedure development, NDT program audit, ASNT Level III, NDT independent technical review, NDT technical consulting, Level III consultant, ASNT CP-189, SNT-TC-1A, NDE program audit, NDT technique development, PAUT procedure, NAS 410 consulting"
                canonical="https://atlantisndt.com/consulting/ndt-consulting-level-iii"
                structuredData={structuredData}
                faq={faqs}
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
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{L3.h1}</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mb-8">{L3.intro}</p>
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

            {/* ─── What is an outsourced NDT Level III? (query-verbatim H2 + direct answer, §25.4) ─── */}
            <section id={L3.qa.id} className="py-14 bg-white scroll-mt-24">
                <div className="container mx-auto max-w-4xl px-6 space-y-4 text-slate-700">
                    <h2 className="text-3xl font-bold text-slate-900">{L3.qa.h2}</h2>
                    <p className="text-lg">{L3.qa.answer}</p>
                    {L3.qa.more.map((p) => <p key={p}>{p}</p>)}
                    <p>
                        {L3.qa.founder}{" "}
                        <Link to="/authors/anoop-rayavarapu" className="text-[#004aad] underline">About the founder</Link>.
                    </p>
                </div>
            </section>
            <section id="level-iii-scope" className="py-10 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6 text-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{L3.covers.h2}</h2>
                    <p className="mb-3">{L3.covers.p}</p>
                    <p className="text-sm">
                        See also:{" "}
                        {L3.covers.links.map((l, i) => (
                            <span key={l.href}>
                                {i > 0 && ", "}
                                <Link to={l.href} className="text-[#004aad] hover:underline">{l.label}</Link>
                            </span>
                        ))}
                        .
                    </p>
                </div>
            </section>

            {/* ─── 2026-10-17 §58: named Level III, deliverables, process, choosing (money-pages-2026-10.json level3.*) ─── */}
            <section id={L3.expert.id} className="py-12 bg-white scroll-mt-24">
                <div className="container mx-auto max-w-4xl px-6 space-y-3 text-slate-700 [&_a]:text-[#004aad] [&_a]:underline">
                    <h2 className="text-2xl font-bold text-slate-900">{L3.expert.h2}</h2>
                    <p>{L3.expert.p}</p>
                    <p dangerouslySetInnerHTML={{ __html: inlineLinks(L3.expert.verify) }} />
                </div>
            </section>
            <section id={L3.deliverables.id} className="py-12 bg-slate-50 scroll-mt-24">
                <div className="container mx-auto max-w-4xl px-6 text-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{L3.deliverables.h2}</h2>
                    <ul className="list-disc pl-6 space-y-2">
                        {L3.deliverables.items.map((d) => (
                            <li key={d.name}><strong>{d.name}:</strong> {d.text}</li>
                        ))}
                    </ul>
                </div>
            </section>
            <section id={L3.process.id} className="py-12 bg-white scroll-mt-24">
                <div className="container mx-auto max-w-4xl px-6 text-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">{L3.process.h2}</h2>
                    <ol className="list-decimal pl-6 space-y-2">
                        {L3.process.steps.map((st) => (
                            <li key={st.h}><strong>{st.h}.</strong> {st.p}</li>
                        ))}
                    </ol>
                    <p className="mt-4">{L3.process.note}</p>
                </div>
            </section>
            <section id={L3.choose.id} className="py-12 bg-slate-50 scroll-mt-24">
                <div className="container mx-auto max-w-4xl px-6 text-slate-700">
                    <h2 className="text-2xl font-bold text-slate-900 mb-3">{L3.choose.h2}</h2>
                    <p className="mb-3">{L3.choose.intro}</p>
                    <ul className="list-disc pl-6 space-y-2">
                        {L3.choose.items.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                </div>
            </section>

            {/* ─── Stats Bar ─── */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-2xl font-bold text-slate-700 mb-2">ASNT NDT Level III</div>
                            <div className="text-slate-600">Founder-led</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-700 mb-2">11+ years</div>
                            <div className="text-slate-600">Founder&apos;s field experience</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-700 mb-2">UT · RT · MT · PT · VT</div>
                            <div className="text-slate-600">Founder&apos;s Level III methods</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-slate-700 mb-2">Remote or on site</div>
                            <div className="text-slate-600">Worldwide delivery</div>
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
                                At Atlantis NDT, Level III work is led by founder Anoop Rayavarapu, ASNT NDT Level III in five methods (UT, RT, MT, PT, VT), with 11+ years of international NDT field experience. Engagements are delivered remotely or on site, for clients in the Americas, the Middle East, India, Southeast Asia and Europe.
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
                        NDT Level III consulting within the methods each engagement names: founder-led in UT, RT, MT, PT and VT, with NAS 410 Level 3 work through an associate.
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
                        Level III consulting requirements vary by industry, so every scope is written against the codes and customer specifications your sector applies.
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
                                title: "Founder-Led ASNT NDT Level III",
                                desc: "Work is led by an ASNT NDT Level III in UT, RT, MT, PT and VT, and every proposal names the methods it covers and who signs.",
                            },
                            {
                                title: "11+ Years in the Field",
                                desc: "The founder brings 11+ years of international NDT field experience, so procedures and examinations are written for how inspections are actually done.",
                            },
                            {
                                title: "Global Coverage, Remote and Onsite",
                                desc: "Document work is delivered remotely worldwide, and onsite visits are scheduled to your project after a scoping call.",
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
                        Whether you need a complete written practice, a program audit, technique development for a complex inspection, or ongoing Level III support — an ASNT NDT Level III is ready to help. Request a quote and receive a scope of work.
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

            <LevelIiiEngagements />
            <ContactDetails />
        </div>
    );
}
