import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    CheckCircle,
    FileText,
    Award,
    AlertTriangle,
    BookOpen,
    Layers,
    Phone,
    ArrowRight,
    BarChart3,
    Briefcase,
    Settings,
    Target,
    Zap,
} from "lucide-react";

export default function NdtTechnicalProcedureDevelopment() {
    const methods = [
        { name: "Ultrasonic Testing (UT)", codes: "ASME V Article 4/5, EN ISO 17640, AWS D1.1", focus: "Pulse-echo thickness, shear-wave weld inspection, corrosion mapping" },
        { name: "Phased Array UT (PAUT)", codes: "ASME V Article 4 Mandatory Appendix III, ISO 13588, API 577", focus: "Sectorial + linear scanning, weld inspection, encoded corrosion mapping" },
        { name: "Time-of-Flight Diffraction (TOFD)", codes: "ASME V Article 4 Mandatory Appendix V, ISO 10863, API 577", focus: "Crack sizing, in-service monitoring, pre-service weld baseline" },
        { name: "Radiographic Testing (RT) — film + digital", codes: "ASME V Article 2, EN ISO 17636, API 1104, AWS D1.1", focus: "Conventional gamma + X-ray, computed RT (CR), digital DR" },
        { name: "Magnetic Particle Testing (MT)", codes: "ASME V Article 7, EN ISO 17638, ASTM E1444", focus: "Surface + near-surface flaw detection in ferromagnetic materials" },
        { name: "Penetrant Testing (PT)", codes: "ASME V Article 6, EN ISO 3452, ASTM E1417", focus: "Visible + fluorescent penetrant, solvent + water-washable" },
        { name: "Eddy Current Testing (ET)", codes: "ASME V Article 8, EN ISO 15549, ASNT RP-ET-1", focus: "Tube inspection, surface flaw detection, coating thickness" },
        { name: "Visual Testing (VT)", codes: "ASME V Article 9, EN ISO 17637, AWS D1.1", focus: "Direct + remote visual, borescope inspection" },
        { name: "Leak Testing (LT)", codes: "ASME V Article 10, EN 1779, ASNT RP-LT-1", focus: "Bubble, pressure decay, helium mass spec" },
        { name: "Acoustic Emission (AET)", codes: "ASME V Article 11/12/13, EN 13554, ASTM E1316", focus: "Pressure vessel monitoring, tank-floor leak detection" },
    ];

    const deliverables = [
        { title: "Method-Specific Procedure Document", description: "Audit-ready procedure document with scope, applicable codes, personnel, equipment, calibration, technique, acceptance criteria, reporting and records — structured to match ASME Section V Article 1 + the method-specific Article requirements." },
        { title: "Technique Sheets", description: "Detailed technique sheets for each weld configuration, geometry or component type — wedge selection, frequency, beam angle, gain settings, scan pattern, calibration block, sensitivity reference, indication evaluation." },
        { title: "Calibration Block / Reference Standard Specification", description: "Specification + drawings for calibration blocks per the relevant code (ASME V Mandatory Appendix, IIW, ISO, ASTM, NAVSHIPS, etc.) — sourced from approved suppliers or fabricated to spec." },
        { title: "Procedure Qualification Record (PQR) Package", description: "Procedure qualification record demonstrating that the procedure produces consistent, reproducible results on representative geometry — required for ASME V Article 4 Mandatory Appendix III PAUT and many TOFD/PAUT applications." },
        { title: "Personnel Qualification Records", description: "Examiner qualifications mapped to the procedure — visual acuity, method-specific training hours, examination scores, practical demonstrations on representative geometry." },
        { title: "Client Approval Pack", description: "Procedure submitted in the format the client expects — Aramco SAEP-1135 review pack, ADNOC AGES-SP-09-007 conformance matrix, ASME Section V cross-reference, EN compliance statement." },
        { title: "Field-Trial Validation", description: "Where required, witnessed field-trial demonstration on representative weld coupons before procedure is released to production." },
    ];

    const methodology = [
        { step: "1", title: "Scope + Code Definition", text: "Component type, material, geometry, accessibility, applicable construction code (ASME B31.3, B31.4, B31.8, Section VIII, AWS D1.1, API 1104, etc.) and the client / regulator specification overlay are confirmed at kick-off." },
        { step: "2", title: "Code Cross-Reference", text: "Every ASME Section V clause invoked by the construction code is identified. Where the client requires a more rigorous reference (EN, ISO, API), the additional requirements are mapped." },
        { step: "3", title: "Technique Selection", text: "For UT/PAUT/TOFD: wedge, frequency, element count, beam angle, scan pattern selected against representative geometry. For RT: source / kV, IQI sensitivity, film density or digital DDA selected. For MT/PT/ET/VT: equivalent technique decisions documented." },
        { step: "4", title: "Calibration Standard Specification", text: "Reference blocks (IIW V1/V2, NAVSHIPS, custom side-drilled-hole blocks, etc.) specified or fabricated. Calibration procedure documented step-by-step." },
        { step: "5", title: "Procedure Drafting", text: "Procedure document drafted to match ASME Section V Article 1 structure + method-specific Article requirements + client specification overlays. Reviewed by ASNT Level III." },
        { step: "6", title: "Procedure Qualification", text: "Where required (PAUT, TOFD, advanced UT, in-service NDE), procedure qualified on representative weld coupons or production samples. PQR documented." },
        { step: "7", title: "Client Submission + Acceptance", text: "Procedure submitted to client / Authorized Inspector / Notified Body. We support review-comment resolution until acceptance." },
    ];

    const credentials = [
        "ASNT Level III in UT, RT, MT, PT, VT, ET, LT, AET — every method we write procedures for",
        "API 510 / 570 / 653 Authorized Inspector credentials — to sign in-service inspection procedures",
        "AWS CWI (Certified Welding Inspector) for weld-specific procedures invoking AWS D1.1 / D1.5",
        "CSWIP 3.1 / 3.2 / PCN / ISO 9712 third-party Level III for clients requiring international certification",
        "100+ procedures written and accepted by Aramco, ADNOC, KOC, KIPIC, Petronas, Pertamina, PEMEX, ONGC, Boeing supplier qualifications",
    ];

    const outcomes = [
        { metric: "100%", label: "First-time acceptance rate by Aramco Inspection Department on PAUT procedures (last 24 months)" },
        { metric: "3 weeks", label: "Typical delivery for a single method, single component type (UT or PT for piping)" },
        { metric: "ZERO", label: "Procedure-driven Non-Conformance Reports (NCRs) on accepted procedures over the last 36 months" },
        { metric: "$0", label: "Lost-bid cost from procedure deficiencies at major contractor pre-qualifications" },
    ];

    const faqs = [
        { q: "When is a written procedure required vs. a technique sheet?", a: "A written procedure is required any time the applicable code mandates it — ASME Section V Article 1 T-150 requires written procedures for every method covered. Technique sheets are a subordinate document that capture the specific settings for a particular geometry / component / weld configuration. A single procedure typically has multiple technique sheets — one per weld type or geometry — referenced by procedure number." },
        { q: "Does ASME require procedure qualification?", a: "For most basic methods (UT pulse-echo, RT, MT, PT, VT) ASME Section V does not require formal procedure qualification — the procedure is demonstrated and accepted by the AI. For PAUT under ASME V Article 4 Mandatory Appendix III, full procedure qualification on representative samples IS required. TOFD under Mandatory Appendix V similarly requires demonstration. Many client specifications (Aramco SAEP-1135, ADNOC AGES) tighten these requirements further." },
        { q: "Can we use a previously-qualified procedure on a different geometry?", a: "Sometimes — depends on the essential variables defined by the code and the client spec. For PAUT, changes in thickness, material, weld geometry or scan plan typically require re-qualification. For basic UT and RT, minor geometry changes can usually be accommodated by an addendum or supplementary technique sheet. We assess this case-by-case and document the rationale." },
        { q: "Who signs the procedure?", a: "Standard practice: the procedure is written by an ASNT Level II or Level III qualified examiner, technically reviewed and signed by the responsible ASNT Level III, and (for in-service work) co-signed by an API Authorized Inspector. Some client specifications (e.g., Boeing aerospace) require additional approval signatures from a NAS 410 Level III. The procedure pack includes the Level III / AI credentials and signature page." },
        { q: "Do you write procedures for ASME B31.3 piping fabrication?", a: "Yes — extensively. ASME B31.3 invokes ASME Section V via paragraph 341.3.1, with method-specific acceptance criteria in Table 341.3.2. We routinely write UT, RT, MT and PT procedures for B31.3 process piping fabrication and field installation, with the client / Authorized Inspector approval cycle managed end-to-end." },
        { q: "What about RT procedures — film vs. digital?", a: "Both. Conventional film RT remains the default for many code applications and is governed by ASME V Article 2 + relevant material/joint specifications. Computed RT (CR) and digital RT (DR) using DDAs are increasingly accepted, with ASME V Article 2 Mandatory Appendices IV (CR) and V (DR) defining the qualification requirements. We write procedures for all three modes — film, CR and DR — including the qualification packages." },
        { q: "How do we handle multiple client codes on one project?", a: "EPCs often manage projects where the construction code is ASME B31.3 but the client specification invokes additional EN / ISO / DNV / NORSOK requirements. We build procedures to the most stringent applicable requirement set, with a cross-reference matrix showing how each clause of each cited specification is addressed. This avoids the common audit finding of 'procedure addresses ASME but not the client specification.'" },
        { q: "Do you handle in-service procedure development too?", a: "Yes. In-service NDT under API 510, 570 and 653 has different procedure requirements than new-construction NDT — the inspector is typically the API AI, the methods are constrained to what is practical on in-service equipment, and the acceptance criteria are governed by API 579-1 fitness-for-service rather than construction-code acceptance. We write both new-construction and in-service procedures, and most operators need both." },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "NDT Technical Procedure Development — UT, PAUT, TOFD, RT, MT, PT, ET, VT",
                "description": "ASNT Level III consulting for method-specific NDT procedure development per ASME Section V, EN ISO, AWS, API and client specifications. Audit-ready procedures, PQRs and personnel qualifications accepted by major operators worldwide.",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "serviceType": "NDT Technical Procedure Development",
                "areaServed": ["US", "AE", "SA", "IN", "GB", "SG", "CA", "AU", "MY", "ID", "KW", "OM", "QA", "BH"],
                "offers": { "@type": "Offer", "url": "https://atlantisndt.com/consulting/ndt-technical-procedure-development" },
            },
            { "@type": "FAQPage", "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <PillarHubNav active="consulting" />
            <SEOHead
                title="NDT Procedure Development — UT, PAUT, TOFD, RT, MT, PT, ET | ASME V"
                description="Method-specific NDT procedure writing per ASME Section V, EN ISO, AWS, API. UT, PAUT, TOFD, RT, MT, PT, ET, VT, LT, AET. ASNT Level III + API AI signed. Accepted by Aramco, ADNOC, Petronas, ONGC."
                keywords="NDT procedure development, ASME Section V, PAUT procedure, TOFD procedure, UT procedure, RT procedure, ASNT Level III, API 577, EN ISO 17640, AWS D1.1, Aramco SAEP-1135, ADNOC AGES, procedure qualification, PQR"
                canonical="https://atlantisndt.com/consulting/ndt-technical-procedure-development"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-rose-800 to-rose-950 text-white pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-200 text-sm font-medium">
                            ASME Section V + EN ISO + AWS + API
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">NDT Technical Procedure Development</h1>
                        <p className="text-xl md:text-2xl text-rose-100 mb-8 leading-relaxed">
                            Method-specific NDT procedure writing for UT, PAUT, TOFD, RT, MT, PT, ET, VT, LT and AET — per ASME Section V, EN ISO, AWS, API and major client specifications. ASNT Level III + API AI signed. Accepted first-time at Aramco, ADNOC, Petronas, ONGC, KOC and KIPIC pre-qualifications.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"><Phone className="mr-2 h-5 w-5" /> Book a Consulting Call</Button></Link>
                            <Link to="/consulting"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-rose-900">Back to Consulting Hub</Button></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Code-conformant procedures, audit-defensible the first time</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Every NDT examination — new construction, in-service inspection, fitness-for-service support, repair verification — is governed by a written technical procedure. The procedure tells the examiner exactly how to perform the examination, what to use, how to calibrate, what acceptance criteria apply, and how to report. The applicable code (<strong>ASME Section V</strong> in the US construction world, <strong>EN ISO 17640 / 17636 / 17638 / 3452</strong> in the European world, <strong>AWS D1.1 / D1.5</strong> for structural welding, <strong>API 1104</strong> for pipeline welds) defines the minimum content. The client specification (<strong>Aramco SAEP-1135</strong>, <strong>ADNOC AGES-SP-09-007</strong>, <strong>Petronas PTS</strong>, <strong>ONGC NDT-SOPs</strong>, <strong>Boeing BAC 5980 / D1-4426</strong>) typically tightens the requirement further.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        A defective procedure means rework, rejected inspections, lost bids and — when the procedure is invoked on safety-critical equipment — real safety consequences. The most common audit findings on NDT procedures are: missing technique sheets, calibration that does not match the relevant ASME V Mandatory Appendix, acceptance criteria that conflict between code and client spec, personnel qualification gaps, and absence of procedure qualification where the code or client requires it.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Atlantis NDT writes procedures for every common NDT method — UT, PAUT, TOFD, RT (film, CR, DR), MT, PT, ET, VT, LT, AET — under every relevant code body. Each procedure is signed by an active ASNT Level III with the relevant method-specific certification, supported by technique sheets, calibration block specifications, PQRs where required, and a client-specific submission pack designed to clear review first-time.
                    </p>
                </div>
            </section>

            {/* Methods covered */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Methods + codes covered</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {methods.map((m) => (
                            <Card key={m.name} className="border-l-4 border-l-rose-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-lg">
                                        <Zap className="text-rose-600 mr-3 h-5 w-5 flex-shrink-0" />
                                        {m.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-slate-500 mb-2"><strong>Codes:</strong> {m.codes}</p>
                                    <p className="text-slate-700 text-sm">{m.focus}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">What you get</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {deliverables.map((d) => (
                            <Card key={d.title}>
                                <CardHeader>
                                    <CardTitle className="flex items-center text-lg">
                                        <FileText className="text-rose-600 mr-3 h-5 w-5 flex-shrink-0" />
                                        {d.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-700">{d.description}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Methodology</h2>
                    <div className="space-y-6">
                        {methodology.map((m) => (
                            <div key={m.step} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-rose-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">{m.step}</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
                                    <p className="text-slate-700 leading-relaxed">{m.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">ASNT Level III + API AI credentials</h2>
                    <ul className="space-y-3 mt-8">
                        {credentials.map((c) => (
                            <li key={c} className="flex items-start gap-3"><Award className="text-rose-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">{c}</span></li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Industries served</h2>
                    <ul className="grid md:grid-cols-2 gap-4">
                        <li className="flex items-start gap-3"><Layers className="text-rose-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Oil + gas fabrication (pipe + pressure vessel + structural)</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-rose-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Refining + petrochemicals — new-build + turnaround NDT</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-rose-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Pipelines — onshore + offshore + subsea (API 1104, DNV-ST-F101)</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-rose-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Power generation — boiler tube + main steam piping NDT</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-rose-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Aerospace — NAS 410 + Boeing BAC + Airbus / Lockheed procedures</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-rose-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Marine + offshore — DNV + ABS + LR classification society procedures</span></li>
                    </ul>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Sample client outcomes</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {outcomes.map((o) => (
                            <Card key={o.label}>
                                <CardContent className="pt-6">
                                    <div className="text-3xl font-bold text-rose-600 mb-2">{o.metric}</div>
                                    <p className="text-sm text-slate-700">{o.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Engagement model</h2>
                    <Card className="border-2 border-rose-500">
                        <CardContent className="pt-6">
                            <p className="text-slate-700 mb-4"><strong>Affordable. Accessible. Fully Customizable.</strong> Engagement scope is tailored to your method mix, code body, client specification and delivery timeline.</p>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><BarChart3 className="text-rose-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Single-method procedure (UT / RT / MT / PT / VT):</strong> 2-3 week delivery. Contact us for a tailored quote.</span></li>
                                <li className="flex items-start gap-3"><Briefcase className="text-rose-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>PAUT or TOFD procedure with PQR:</strong> 5-8 week delivery, includes qualification and documentation. Contact us for a tailored quote.</span></li>
                                <li className="flex items-start gap-3"><Settings className="text-rose-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Multi-method procedure suite (4-6 methods):</strong> 6-10 week delivery. Fixed-fee engagements available — contact us for a tailored quote.</span></li>
                                <li className="flex items-start gap-3"><Target className="text-rose-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Aramco / ADNOC client-specific submission pack:</strong> additional review-and-resolution support per procedure. Pricing varies by region and scope — contact us for a tailored quote.</span></li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Frequently asked questions</h2>
                    <div className="space-y-4">
                        {faqs.map((f) => (
                            <Card key={f.q}>
                                <CardHeader><CardTitle className="text-lg flex items-start gap-3"><AlertTriangle className="text-rose-600 h-5 w-5 flex-shrink-0 mt-1" />{f.q}</CardTitle></CardHeader>
                                <CardContent><p className="text-slate-700 leading-relaxed">{f.a}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-rose-800 to-rose-950 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Procedure due for a major bid?</h2>
                    <p className="text-lg text-rose-100 mb-8">60-minute scoping call — free, no obligation, NDA available. Bring your construction code, client spec and weld matrix — we will scope a procedure pack that clears review the first time.</p>
                    <Link to="/contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">Book a Consulting Call <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
