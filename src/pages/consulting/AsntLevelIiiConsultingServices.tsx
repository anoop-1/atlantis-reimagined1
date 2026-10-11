import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import DeepContent from "@/components/DeepContent";
import {
    Shield,
    CheckCircle,
    Award,
    Briefcase,
    AlertTriangle,
    BookOpen,
    Layers,
    Phone,
    ArrowRight,
    FileText,
    Users,
} from "lucide-react";

export default function AsntLevelIiiConsultingServices() {
    const deliverables = [
        { title: "SNT-TC-1A Written Practice Authoring", description: "A documented Written Practice tailored to your scope of work — methods (UT, RT, MT, PT, VT, ET, TOFD, PAUT, Phased Array), industry sector, examination types and qualification levels. Built against the current ASNT SNT-TC-1A 2024 edition and harmonised with ISO 9712 / ANSI CP-189 / NAS-410 where the customer base requires it." },
        { title: "Outsourced ASNT Level III of Record", description: "A named ASNT NDT Level III signs as your responsible Level III for procedure approval, technique validation, certification examinations and audit defence, in the methods the Level III holds: UT, RT, MT, PT and VT. Replaces the cost of a full-time Level III hire." },
        { title: "Procedure Development &amp; Code Mapping", description: "NDT procedures authored to ASME V Article 1-23, AWS D1.1/D1.5, API 5L/650/620/1104, NORSOK M-101, EN ISO 17640 / 17636-1 / 23279 — with traceable code citation, technique sheets, calibration blocks and acceptance criteria mapped to your customer specs." },
        { title: "Expert Witness &amp; Independent Technical Opinion", description: "Written, signed Level III opinions for rejected inspections, weld disputes, dropped-object failures, fatigue cracking, defect-acceptance disputes and insurer/regulator escalations. Court-ready report formats; deposition support available." },
        { title: "Internal &amp; External NDT Audit Support", description: "Pre-audit gap closure, on-site audit attendance and CAR (Corrective Action Request) close-out for ISO 9001, ISO 17025, ISO 17020, Nadcap NDT (AC7114), API Q1, AS9100 and customer-specific approvals. We sit on your side of the table as your Level III authority of record." },
        { title: "General &amp; Specific Examination Banks", description: "Question banks for Level I, II and III general / specific / practical examinations, mapped to your Written Practice, your procedures and the current SNT-TC-1A topical outlines. Includes the practical specimens and grading rubrics." },
        { title: "Personnel Qualification &amp; Recertification Program", description: "End-to-end pipeline — initial training-hour tracking, vision-test cadence, examination scheduling, certification records, recertification triggers and a digital register that survives the next audit." },
    ];

    const methodology = [
        { step: "1", title: "Scope &amp; Method Mapping", text: "Two-hour intake call. We capture your inspection scope (industries, methods, codes), customer-base requirements (Aramco SAES-W-012, ADNOC AGES-SP-09-001, Shell DEP, BP GIS, Chevron SU, EDF, Saudi PMI) and the gaps in your current Written Practice / Level III cover." },
        { step: "2", title: "Written Practice Authoring", text: "We draft (or rewrite) your Written Practice against SNT-TC-1A 2024 — minimum training hours, experience hours, examination structure, vision requirements, qualification &amp; certification flow. Reviewed with you in a working session." },
        { step: "3", title: "Procedure &amp; Technique Sheet Build-out", text: "Code-mapped NDT procedures + technique sheets per method &amp; per industry/code combo. Each procedure carries the code citation, calibration block reference, scanning pattern, acceptance criteria and reporting format." },
        { step: "4", title: "Personnel Qualification &amp; Examinations", text: "We design or run general/specific/practical examinations for each Level I and Level II in scope. Practical specimens, grading rubrics, examination control documents — all signed by the responsible Level III." },
        { step: "5", title: "Audit Defence &amp; Customer Approvals", text: "Pre-audit walk-through against the actual audit checklist (Saudi Aramco contractor approval, ADNOC HSE-GA-SP-09, Nadcap AC7114, ISO 17025 7.8). We attend audit days as your Level III authority and respond to NCRs." },
        { step: "6", title: "Ongoing Level III of Record", text: "Monthly retainer covers procedure revisions, personnel onboarding, method extensions, audit response, expert opinions and emergency technical authority calls. Continuous documentary trail for the auditor." },
    ];

    // 2026-10-11 (owner): the earlier sample-outcome cards were not evidenced and were
    // removed. These describe the situations the service is for, not past results. The two
    // completed engagements Atlantis can evidence are written up on /case-studies.
    const typicalEngagements = [
        {
            title: "Your full-time Level III has left",
            text: "We review your Written Practice, open procedures and personnel records, agree the methods in scope, and sign as your Level III of record once the engagement letter is in place. Procedures and the Written Practice are revised where the current editions of SNT-TC-1A, ASME V or AWS D1.1 require it.",
        },
        {
            title: "Adding methods to a customer approval scope",
            text: "For a scope extension under a customer approval such as a Saudi Aramco contractor approval, we author the SNT-TC-1A Written Practice and the method procedures against the customer specification, prepare technique sheets and personnel qualification records, and support you through the approval audit.",
        },
        {
            title: "Aerospace programmes under Nadcap NDT (AC7114)",
            text: "Nadcap NDT audits expect a Responsible Level 3 qualified to NAS 410. Atlantis delivers NAS 410 Level 3 services through an associate who holds NAS 410 Level 3: gap review against AC7114, written practice and procedure revisions, and audit preparation.",
        },
        {
            title: "A disputed inspection result",
            text: "An independent Level III review of the radiographs or UT data, technique sheets and calibration records against the governing code and the client specification, issued as a signed opinion under a separate scope of work.",
        },
    ];

    const industries = [
        "Refineries &amp; petrochemical complexes (ASME V, API 510/570/653, customer SAES/AGES specs)",
        "Pipeline fabrication, installation &amp; integrity (API 1104, ASME B31.4/B31.8, ISO 13847)",
        "Pressure vessel &amp; boiler shops (ASME VIII Div 1/2, ASME I, API 510)",
        "Aerospace MRO &amp; primes (Nadcap NDT AC7114, NAS-410, customer specs — Boeing, Airbus, Rolls-Royce)",
        "Power generation (steam, gas, nuclear) — ASME III/V/XI, EPRI guidelines, EN ISO 17636",
        "Offshore &amp; subsea (DNV-OS-F101, NORSOK M-101, Shell DEP, BP GIS)",
        "Fabrication, structural &amp; welding shops (AWS D1.1/D1.5, EN ISO 17640, EN 1090)",
        "NDT service providers (small to mid-size) — outsourced Level III of record",
    ];

    const faqs = [
        { q: "What is the difference between an in-house Level III and an outsourced ASNT Level III consultant?", a: "An in-house Level III is a full-time employee — typically $180-260K loaded cost in the US, $120-180K in the GCC, and frequently impossible to recruit at all in some markets. An outsourced ASNT Level III consultant (Atlantis NDT model) signs as your responsible Level III for SNT-TC-1A purposes, approves your procedures, signs personnel qualifications, attends audits and answers technical authority calls — without the headcount cost. SNT-TC-1A 2024 explicitly recognises external Level III arrangements provided the responsibility, authority and documentation are clear." },
        { q: "Which methods does Atlantis NDT cover at Level III?", a: "Atlantis NDT's Level III work is led by founder Anoop Rayavarapu, who holds ASNT NDT Level III certification in five methods: UT, RT, MT, PT and VT. Procedures, examinations and personnel records are signed in those methods. If your scope includes other methods or specialist techniques (eddy current, AUT girth weld, IRIS, NFA, ACFM), raise them at scoping: the proposal states which methods Atlantis signs for and which need a Level III certified in that method." },
        { q: "Can an outsourced Level III defend a Saudi Aramco, ADNOC or Nadcap audit?", a: "Yes, provided the engagement letter, Written Practice and procedure approvals are all in order. The Written Practice names the Level III by certification number, the procedures carry that Level III&apos;s signature, and audit-day responsibility is agreed in writing before the audit. For Nadcap NDT (AC7114) the Responsible Level 3 must be qualified to NAS 410; Atlantis provides that through an associate who holds NAS 410 Level 3." },
        { q: "How fast can Atlantis NDT stand up an ASNT Level III of record engagement?", a: "The timeline is set in the proposal and depends mostly on how quickly you can share your existing procedures, personnel records and customer specifications. If an audit date is already fixed, say so when you get in touch so the work is planned around it." },
        { q: "Do you also provide expert witness and independent technical opinions?", a: "Yes. Independent Level III opinions are issued under a separate scope-of-work — typically used for rejected inspection campaigns, weld disputes, defect-acceptance disputes, insurer / regulator escalations, or court cases. Reports follow the format expected for litigation use and the signing Level III is available for deposition. We do not provide expert witness services to a customer where we also act as Level III of record (to avoid the obvious conflict)." },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "name": "ASNT Level III Consulting Services",
                "description": "Atlantis NDT — affordable, accessible, fully customizable ASNT Level III consulting. SNT-TC-1A 2024 Written Practice authoring, outsourced Level III of record, procedure development, expert witness opinions, internal/external NDT audit support.",
                "provider": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "url": "https://atlantisndt.com",
                },
                "serviceType": "ASNT Level III NDT Consulting",
                "areaServed": ["US", "AE", "SA", "IN", "GB", "SG", "CA", "AU", "MY", "ID", "KW", "OM", "QA", "BH", "NO", "NL"],
                "hasCredential": [
                    { "@type": "EducationalOccupationalCredential", "credentialCategory": "ASNT NDT Level III (UT, RT, MT, PT, VT)" },
                ],
                "offers": { "@type": "Offer", "url": "https://atlantisndt.com/consulting/asnt-level-iii-consulting-services" },
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
            <PillarHubNav active="consulting" />
            <SEOHead
                title="ASNT Level III Consulting Services 2026 | Atlantis NDT"
                description="Atlantis NDT — affordable, accessible ASNT Level III consulting. SNT-TC-1A written practice, procedure development, expert witness, audit support. Demo: info@atlantisndt.com"
                keywords="ASNT Level III consulting services, ASNT Level III consultant, NDT Level III consulting, NDT Level 3 consultant, non destructive testing level 3 consulting services, outsourced ASNT Level III, SNT-TC-1A written practice, NDT procedure development, Level III expert witness, Nadcap NDT consulting, AC7114 Level III"
                canonical="https://atlantisndt.com/consulting/asnt-level-iii-consulting-services"
                structuredData={structuredData}
            />
                  <TableOfContents items={[{ id: "overview", label: "ASNT Level III Service Overview" }, { id: "deliverables", label: "What We Deliver" }, { id: "methodology", label: "Methodology" }, { id: "case-studies", label: "Typical engagements" }, { id: "faq", label: "FAQ" }]} />
      <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-800 to-slate-950 text-white pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-200 text-sm font-medium">
                            SNT-TC-1A 2024 — ASNT Level III of Record
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">ASNT Level III Consulting Services</h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                            An ASNT NDT Level III signing as your outsourced Level III of record in UT, RT, MT, PT and VT. SNT-TC-1A 2024 Written Practice, code-mapped procedures, audit defence and expert witness opinions. Affordable, accessible, fully customizable engagements.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact">
                                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                                    <Phone className="mr-2 h-5 w-5" /> Request a Demo
                                </Button>
                            </Link>
                            <Link to="/consulting">
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                                    Back to Consulting Hub
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">When you need a Level III but cannot (or should not) hire one</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        ASNT Level III is the most expensive and most scarce certification in non-destructive testing. A full-time Level III in the US loads at $180-260K once benefits, vehicle, training and certification renewal fees are included; in the GCC the figure is closer to $120-180K plus mobilisation costs; and across large stretches of Southeast Asia, West Africa and Latin America the role is simply unfillable at any price. Yet without a named Level III you cannot approve procedures under <strong>ASNT SNT-TC-1A 2024</strong>, you cannot sign personnel qualification records, you cannot defend a customer audit, and you cannot bid the work that requires Saudi Aramco, ADNOC, Nadcap NDT AC7114 or ISO 17025 7.8 cover.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Atlantis NDT solves that gap with an outsourced ASNT Level III consulting model. A named Level III consultant — certified by certification number — signs as your responsible Level III for the methods in scope. They author or rewrite your Written Practice against SNT-TC-1A 2024, build or approve your NDT procedures against the customer code stack (ASME V, AWS D1.1/D1.5, API 1104, NORSOK M-101, EN ISO 17640), run the Level I/II examinations, attend the audit days and answer technical authority calls when something fails. SNT-TC-1A allows an outside Level III; whether a customer approval scheme (Saudi Aramco, ADNOC, Nadcap NDT AC7114, ISO 17025 / 17020) accepts the arrangement is decided by that scheme, so the engagement letter, Written Practice and procedure approvals are prepared for its audit.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        The service is built for NDT service providers, fabricators, EPC subcontractors, refineries, aerospace MROs, shipyards, pipeline contractors and inspection startups. Work is delivered remotely, online, or on-site at your facility. Engagements are <strong>affordable, accessible and fully customizable</strong> — scoped to the actual methods, codes and customer base in play, not a one-size-fits-all retainer.
                    </p>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">What you get</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {deliverables.map((d) => (
                            <Card key={d.title} className="border-l-4 border-l-amber-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-lg">
                                        <CheckCircle className="text-amber-600 mr-3 h-5 w-5 flex-shrink-0" />
                                        <span dangerouslySetInnerHTML={{ __html: d.title }} />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700" dangerouslySetInnerHTML={{ __html: d.description }} />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Methodology — how an outsourced Level III engagement runs</h2>
                    <div className="space-y-6">
                        {methodology.map((m) => (
                            <div key={m.step} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">{m.step}</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2" dangerouslySetInnerHTML={{ __html: m.title }} />
                                    <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: m.text }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credentials */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Credentials backing every signed deliverable</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        <Card>
                            <CardHeader>
                                <Award className="text-amber-600 h-8 w-8 mb-2" />
                                <CardTitle>ASNT Level III</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700">Founder Anoop Rayavarapu holds ASNT NDT Level III in five methods (UT, RT, MT, PT, VT) and has 11+ years of international NDT field experience.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Shield className="text-amber-600 h-8 w-8 mb-2" />
                                <CardTitle>NAS 410 Level 3 (aerospace)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700">NAS 410 Level 3 services for aerospace programmes are delivered through an associate who holds NAS 410 Level 3.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <BookOpen className="text-amber-600 h-8 w-8 mb-2" />
                                <CardTitle>SNT-TC-1A 2024 / ISO 9712 / NAS-410</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700">Written Practice and personnel qualification systems built against the certification scheme actually in use at your customer base.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Industries served</h2>
                    <ul className="grid md:grid-cols-2 gap-4">
                        {industries.map((i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Layers className="text-amber-600 h-5 w-5 flex-shrink-0 mt-1" />
                                <span className="text-slate-700" dangerouslySetInnerHTML={{ __html: i }} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Case studies */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900 text-center">Typical engagements</h2>
                    <p className="text-center text-slate-600 mb-10">The situations this service is set up for. Completed engagements are written up on the <Link to="/case-studies" className="text-amber-700 underline">case studies</Link> page.</p>
                    <div className="space-y-6">
                        {typicalEngagements.map((c) => (
                            <Card key={c.title}>
                                <CardHeader>
                                    <CardTitle className="flex items-start gap-3 text-lg">
                                        <Briefcase className="text-amber-600 h-5 w-5 flex-shrink-0 mt-1" />
                                        <span dangerouslySetInnerHTML={{ __html: c.title }} />
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: c.text }} />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Engagement model — no pricing */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Engagement model</h2>
                    <Card className="border-2 border-amber-500">
                        <CardContent className="pt-6">
                            <p className="text-slate-700 mb-4"><strong>Affordable. Accessible. Fully Customizable.</strong> Engagement scope is tailored to the methods, codes, customer base and audit calendar in play. Pricing varies by region and scope — quote on request.</p>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><Users className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Outsourced Level III of Record (monthly retainer):</strong> named Level III signs procedures, examinations and audit-day responsibility. Quote on request.</span></li>
                                <li className="flex items-start gap-3"><FileText className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>One-off Written Practice + procedure pack:</strong> SNT-TC-1A 2024 Written Practice + method-specific procedures + technique sheets, signed and delivered. Quote on request.</span></li>
                                <li className="flex items-start gap-3"><Shield className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Audit defence (project-based):</strong> pre-audit gap closure, audit-day attendance, NCR close-out for Saudi Aramco, ADNOC, Nadcap, ISO 17025/17020, API Q1. Quote on request.</span></li>
                                <li className="flex items-start gap-3"><AlertTriangle className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Expert witness / independent technical opinion:</strong> signed Level III report for rejected inspections, weld disputes, defect-acceptance disputes. Demo on request.</span></li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Frequently asked questions</h2>
                    <div className="space-y-4">
                        {faqs.map((f) => (
                            <Card key={f.q}>
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-start gap-3">
                                        <AlertTriangle className="text-amber-600 h-5 w-5 flex-shrink-0 mt-1" />
                                        {f.q}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: f.a }} />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal links */}
            <section className="py-12 bg-white border-t">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Related consulting service lines</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link to="/consulting/api-510-pressure-vessel-inspector-services" className="block bg-slate-50 p-5 rounded-lg hover:bg-slate-100 transition">
                            <div className="font-semibold text-slate-900">API 510 Pressure Vessel Inspector Services</div>
                            <div className="text-sm text-slate-600 mt-1">In-service inspection programs, thickness surveys, repair and rerating inspection.</div>
                        </Link>
                        <Link to="/consulting/api-570-piping-inspector-services" className="block bg-slate-50 p-5 rounded-lg hover:bg-slate-100 transition">
                            <div className="font-semibold text-slate-900">API 570 Piping Inspector Services</div>
                            <div className="text-sm text-slate-600 mt-1">Process piping audits, CUI surveys, CML thickness programmes.</div>
                        </Link>
                        <Link to="/consulting/api-653-tank-inspector-services" className="block bg-slate-50 p-5 rounded-lg hover:bg-slate-100 transition">
                            <div className="font-semibold text-slate-900">API 653 Tank Inspector Services</div>
                            <div className="text-sm text-slate-600 mt-1">External/internal inspection, MFL/UT, settlement, repair scope.</div>
                        </Link>
                        <Link to="/consulting/ndt-technical-procedure-development" className="block bg-slate-50 p-5 rounded-lg hover:bg-slate-100 transition">
                            <div className="font-semibold text-slate-900">NDT Technical Procedure Development</div>
                            <div className="text-sm text-slate-600 mt-1">Level III-authored NDT procedures and technique sheets.</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-950 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Need an outsourced ASNT Level III on signed authority?</h2>
                    <p className="text-lg text-slate-200 mb-8">
                        Start with a 30-minute scoping call — free, NDA available. We will tell you the methods in scope, the customer-specs that drive the Written Practice, and the timeline to a signed Level III of record. Affordable, accessible, fully customizable engagements — quote on request.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                            Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        <RelatedGuidesBlock links={[
              {
                    "title": "API 510 Pressure Vessel Inspector Services",
                    "href": "/consulting/api-510-pressure-vessel-inspector-services",
                    "description": "In-service vessel inspection programs",
                    "icon": "consulting"
              },
              {
                    "title": "API 570 Piping Inspector Services",
                    "href": "/consulting/api-570-piping-inspector-services",
                    "description": "CUI + CML programme support",
                    "icon": "consulting"
              },
              {
                    "title": "API 653 Tank Inspector Services",
                    "href": "/consulting/api-653-tank-inspector-services",
                    "description": "Bottom-plate MFL/UT + repair scope",
                    "icon": "consulting"
              },
              {
                    "title": "ASNT Certification Path",
                    "href": "/asnt-certification",
                    "description": "Level I/II/III prep",
                    "icon": "cert"
              },
              {
                    "title": "Inspection Procedures Management",
                    "href": "/erp/inspection-procedures-management-software",
                    "description": "Procedure version-control + approval",
                    "icon": "erp"
              }
        ]} />

        <DeepContent path="/consulting/asnt-level-iii-consulting-services" />
        <ContactDetails />
        </div>
    );
}
