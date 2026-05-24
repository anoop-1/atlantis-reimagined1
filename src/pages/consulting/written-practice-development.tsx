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
    Shield,
    CheckCircle,
    FileText,
    Award,
    AlertTriangle,
    BookOpen,
    Layers,
    Users,
    Phone,
    ArrowRight,
    BarChart3,
    Briefcase,
    Settings,
    Target,
} from "lucide-react";

export default function WrittenPracticeDevelopment() {
    const deliverables = [
        { title: "Written Practice Document", description: "Customised written practice document conforming to ASNT SNT-TC-1A (2020) or ANSI/ASNT CP-189 (2024) — owner-controlled, version-managed, with revision history and approval signatures." },
        { title: "Method-Specific Training Outlines", description: "Detailed Level I / II / III training outlines for each NDT method in scope (UT, RT, MT, PT, VT, ET, LT, AET, IRT, NRT) — hours, topics, instructor qualifications and reference texts per ASNT recommended hours." },
        { title: "Examination Question Banks", description: "General + specific + practical examination question banks, balanced to ASNT CP-105 topical outlines and customised to your specific equipment and procedures." },
        { title: "Practical Examination Procedures", description: "Practical exam test specimens, scoring sheets, and proctor instructions designed to demonstrate hands-on competence on your specific products and equipment." },
        { title: "Examiner / Instructor Qualification Records", description: "Qualification documentation for your designated examiners and instructors — credentials, experience, vision tests, ongoing CEU records — built to survive client audit." },
        { title: "Certification Records System", description: "Personnel certification records framework — initial qualification, ongoing experience hours, annual eye exams, biennial reviews, recertification and audit trails." },
        { title: "Audit-Defence Package", description: "Cross-reference matrix that maps every SNT-TC-1A / CP-189 clause to a documented evidence artefact — ready for an external client or ASNT certification body audit." },
    ];

    const methodology = [
        { step: "1", title: "Scope Definition", text: "NDT methods in scope, applicable codes (ASME, API, AWS, NAS, EN), client specifications (Aramco, ADNOC, Petronas, etc.), and any sector-specific overlays (NAS 410 for aerospace) are agreed at kick-off." },
        { step: "2", title: "Gap Analysis", text: "Current practices (if any) reviewed against SNT-TC-1A or CP-189. Differences between SNT-TC-1A (recommended practice) and CP-189 (mandatory standard) clarified for your context." },
        { step: "3", title: "Written Practice Drafting", text: "Customised written practice drafted — organisation responsibilities, training requirements, examination process, certification process, recertification triggers, records management." },
        { step: "4", title: "Training Outlines + Examinations", text: "Method-specific training outlines + general/specific/practical examinations developed. Examination questions balanced to ASNT CP-105 topical outlines for each Level / Method." },
        { step: "5", title: "Examiner Qualification", text: "Designated examiners qualified per the written practice. Records built to demonstrate the chain of qualification authority from owner to examiner to certified personnel." },
        { step: "6", title: "Pilot Implementation", text: "First batch of personnel processed through the new written practice. Bottlenecks and ambiguities surfaced and resolved before full rollout." },
        { step: "7", title: "Audit + Hand-Over", text: "Final written practice issued, certification records system populated, audit-defence pack assembled. Ongoing support available on retainer." },
    ];

    const credentials = [
        "ASNT Level III in UT, RT, MT, PT, VT, ET, LT, AET (the methods most often in scope)",
        "ASNT NDT Level III #189143 (lead consultant) plus team-member ASNT Level III credentials across methods",
        "NAS 410 Level III for aerospace clients — aerospace written practices follow a separate framework",
        "ISO 9712 third-party-certified Level III for clients that require Level III qualification under both ASNT and ISO 9712",
        "40+ written practices delivered for NDT service providers, fabricators, EPCs and asset owners across four continents",
    ];

    const outcomes = [
        { metric: "ZERO", label: "Audit findings on ASNT-aligned written practices we have written, when externally audited by major operators (Aramco, ADNOC, Boeing supplier audits)" },
        { metric: "6 weeks", label: "Typical delivery time for an SNT-TC-1A written practice with 4 methods in scope" },
        { metric: "$0", label: "Failed client pre-qualifications due to written-practice deficiencies on our deliverables" },
        { metric: "100%", label: "Accepted on first client review at major Gulf Coast / GCC contractor pre-qualifications" },
    ];

    const snt_vs_cp = [
        { aspect: "Status", snt: "Recommended Practice (RP)", cp: "Standard — invocable as mandatory" },
        { aspect: "Customisation", snt: "Owner customises to operations", cp: "Owner must follow as written, with minimum requirements" },
        { aspect: "Training Hours", snt: "Recommended hours per Method/Level", cp: "Mandatory minimum hours per Method/Level" },
        { aspect: "Examiner Qualification", snt: "Examiner qualifications defined by owner", cp: "Examiner qualifications mandated by CP-189" },
        { aspect: "Adoption Driver", snt: "Owner choice OR client / code requirement", cp: "Aerospace, nuclear, US DOE / DOT / FAA contracts often require CP-189" },
        { aspect: "Recommended When", snt: "Most commercial NDT, fabrication, industrial", cp: "When a client / regulator requires CP-189 specifically" },
    ];

    const faqs = [
        { q: "What is the difference between SNT-TC-1A and CP-189?", a: "SNT-TC-1A is a Recommended Practice — guidance the Owner-User customises and adopts at their discretion. CP-189 (Standard for Qualification and Certification of NDT Personnel) is a true Standard with mandatory requirements that the Owner-User must follow as written. SNT-TC-1A is more common in commercial industrial NDT (refining, petrochemicals, fabrication). CP-189 is invoked in aerospace, nuclear, US federal contracts, and some high-stakes commercial work. We deliver written practices to either framework." },
        { q: "Who needs a written practice?", a: "Any organisation that performs, supervises or certifies NDT personnel needs a written practice — including NDT service providers, fabricators (ASME, AWS code shops), EPCs, asset owners running in-house inspection, original equipment manufacturers, and aerospace component manufacturers. Without a documented and audited written practice, your personnel certifications are not defensible — and most major clients will not approve you as a supplier." },
        { q: "Can we adopt ASNT's published written practice instead?", a: "ASNT does not publish a model written practice — it publishes the SNT-TC-1A recommended practice document and the CP-189 standard. The Owner-User is required to develop their own written practice that conforms. Adopting another company's written practice is a common audit finding (lack of customisation, mismatched method scope). We deliver a written practice customised to your equipment, processes and code obligations." },
        { q: "How long is a typical written practice document?", a: "A complete written practice with 4-5 methods in scope is typically 60-90 pages, supported by 200-400 pages of training outlines, examinations and certification records. Aerospace NAS 410 written practices add another 30-50 pages of sector-specific content. We deliver documents in MS Word, Adobe PDF and an editable controlled-document format compatible with your QMS." },
        { q: "Do you handle examiner qualifications too?", a: "Yes. The written practice defines examiner qualifications, but those qualifications then have to be demonstrated. We work with your designated Level III(s) to assemble examiner qualification records — credentials, experience, vision exam results, and the documented authority delegation that lets them administer general/specific/practical examinations to your Level I and Level II candidates." },
        { q: "What about NAS 410 (aerospace)?", a: "NAS 410 is the aerospace industry written practice framework — issued by AIA, used by Boeing, Lockheed, Airbus, Northrop, BAE and their supply chains. It is significantly more prescriptive than SNT-TC-1A and CP-189. Our aerospace written practices follow NAS 410 Revision 5 and have been accepted by Boeing supplier audits, NADCAP accreditation audits, and Tier-1 OEM pre-qualifications." },
        { q: "Do we need to recertify personnel when we adopt a new written practice?", a: "Sometimes. If your old written practice had non-conformances that affected certification validity, candidates may need re-examination or re-training. If the old practice was conformant but you are tightening (e.g., moving SNT-TC-1A → CP-189), recertification may be triggered for personnel whose original qualification falls short of the new requirements. We assess this during the gap analysis and tell you up front." },
        { q: "What does ISO 9712 add to this?", a: "ISO 9712 is the international NDT personnel certification scheme, administered by accredited third-party certification bodies (BINDT in the UK, ABENDI in Brazil, etc.). Where SNT-TC-1A / CP-189 are Owner-User-administered, ISO 9712 is third-party-administered. Many GCC, European and Asia-Pacific clients require ISO 9712 in parallel with ASNT credentials. Our written practices can be built to accept ISO 9712-certified personnel as Level III examiners and assessors." },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "NDT Written Practice Development — SNT-TC-1A / CP-189 / NAS 410",
                "description": "ASNT Level III consulting for development of NDT written practice documents, training outlines, examination question banks and personnel certification records — conforming to ASNT SNT-TC-1A, ANSI/ASNT CP-189 or NAS 410.",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "serviceType": "NDT Written Practice Development",
                "areaServed": ["US", "AE", "SA", "IN", "GB", "SG", "CA", "AU", "MY", "ID", "KW", "OM", "QA", "BH"],
                "offers": { "@type": "Offer", "url": "https://atlantisndt.com/consulting/written-practice-development" },
            },
            { "@type": "FAQPage", "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <PillarHubNav active="consulting" />
            <SEOHead
                title="Written Practice Development — SNT-TC-1A / CP-189 | NDT Consulting"
                description="ASNT Level III consulting to develop NDT written practices, training outlines, examination question banks and certification records per SNT-TC-1A, CP-189 and NAS 410. Audit-ready for Aramco, ADNOC, Boeing supplier qualifications."
                keywords="written practice SNT-TC-1A, CP-189 written practice, NDT written practice development, NAS 410 aerospace, ASNT certification, NDT personnel qualification, ISO 9712, Level I II III certification, training outline, examination question bank"
                canonical="https://atlantisndt.com/consulting/written-practice-development"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-purple-800 to-purple-950 text-white pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-200 text-sm font-medium">
                            SNT-TC-1A / CP-189 / NAS 410 — ASNT Level III
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Written Practice Development</h1>
                        <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
                            Audit-ready NDT written practices, training outlines, examination question banks and certification records — conforming to ASNT SNT-TC-1A, ANSI/ASNT CP-189 or NAS 410. Built by ASNT Level III consultants for NDT service providers, fabricators, EPCs and asset owners.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"><Phone className="mr-2 h-5 w-5" /> Book a Consulting Call</Button></Link>
                            <Link to="/consulting"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">Back to Consulting Hub</Button></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">The written practice is the keystone document</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Every defensible NDT personnel certification scheme rests on a single document — the Owner-User's written practice. <strong>ASNT SNT-TC-1A (2020 edition)</strong> calls this the "written practice for the qualification and certification of nondestructive testing personnel," and requires every organisation that certifies NDT personnel to have one, customised, controlled and signed by a responsible Level III. <strong>ANSI/ASNT CP-189 (2024 edition)</strong> tightens those requirements into a true mandatory standard. <strong>NAS 410 (Revision 5)</strong> applies in aerospace, with even more prescriptive training and examination requirements.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        A defective written practice is the single most common audit finding in NDT pre-qualifications. We routinely see practices that copy another company's wording without customisation; that fail to specify examiner qualifications; that omit recertification triggers; that lack the examination question banks the practice references; that reference outdated SNT-TC-1A editions. Each of those is a finding. In aggregate, they invalidate every personnel certification the organisation issues — and disqualify the organisation from supplier approval by Aramco, ADNOC, KOC, KIPIC, Petronas, Pertamina, Boeing, Lockheed and most other major clients.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Atlantis NDT delivers fully customised, audit-ready written practices — controlled documents with revision history, signed by an ASNT Level III, supported by complete training outlines, examination question banks and certification records. Built to pass first-time at the client pre-qualification and ASNT certification body audit.
                    </p>
                </div>
            </section>

            {/* SNT-TC-1A vs CP-189 comparison */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">SNT-TC-1A vs. CP-189 — which framework fits you?</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-sm">
                            <thead className="bg-purple-900 text-white">
                                <tr>
                                    <th className="p-4 text-left">Aspect</th>
                                    <th className="p-4 text-left">SNT-TC-1A</th>
                                    <th className="p-4 text-left">CP-189</th>
                                </tr>
                            </thead>
                            <tbody>
                                {snt_vs_cp.map((row, i) => (
                                    <tr key={row.aspect} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="p-4 font-semibold text-slate-900">{row.aspect}</td>
                                        <td className="p-4 text-slate-700">{row.snt}</td>
                                        <td className="p-4 text-slate-700">{row.cp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">What you get</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {deliverables.map((d) => (
                            <Card key={d.title} className="border-l-4 border-l-purple-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-lg">
                                        <FileText className="text-purple-600 mr-3 h-5 w-5 flex-shrink-0" />
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
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">{m.step}</div>
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
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">ASNT Level III credentials backing every written practice</h2>
                    <ul className="space-y-3 mt-8">
                        {credentials.map((c) => (
                            <li key={c} className="flex items-start gap-3"><Award className="text-purple-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">{c}</span></li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Industries served</h2>
                    <ul className="grid md:grid-cols-2 gap-4">
                        <li className="flex items-start gap-3"><Users className="text-purple-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">NDT service providers — single-method to full-service multi-discipline</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-purple-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Fabricators — ASME code shops, AWS-certified welding fabricators, API pipe / vessel fabricators</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-purple-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">EPCs — major / mid-size oil + gas, petrochemical and power EPC contractors</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-purple-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Asset owners — refineries, plants, pipelines running in-house Level II / III teams</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-purple-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Aerospace — Tier 1, Tier 2 OEM suppliers requiring NAS 410 conformance + NADCAP accreditation</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-purple-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Nuclear — Section XI / Section V invocation, requiring CP-189 baseline</span></li>
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
                                    <div className="text-3xl font-bold text-purple-600 mb-2">{o.metric}</div>
                                    <p className="text-sm text-slate-700">{o.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Engagement & pricing</h2>
                    <Card className="border-2 border-purple-500">
                        <CardContent className="pt-6">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><BarChart3 className="text-purple-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>SNT-TC-1A written practice (4 methods):</strong> $18,000-$32,000 fixed-fee, 5-7 week delivery.</span></li>
                                <li className="flex items-start gap-3"><Briefcase className="text-purple-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>CP-189 written practice (4 methods):</strong> $28,000-$48,000 fixed-fee, 7-10 week delivery.</span></li>
                                <li className="flex items-start gap-3"><Settings className="text-purple-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>NAS 410 aerospace written practice:</strong> $42,000-$78,000 fixed-fee, 8-12 week delivery, includes NADCAP audit-ready support.</span></li>
                                <li className="flex items-start gap-3"><Target className="text-purple-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Annual Level III examiner retainer:</strong> $18,000-$48,000 per year for ongoing examiner support, certification records management and annual practice review.</span></li>
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
                                <CardHeader><CardTitle className="text-lg flex items-start gap-3"><AlertTriangle className="text-purple-600 h-5 w-5 flex-shrink-0 mt-1" />{f.q}</CardTitle></CardHeader>
                                <CardContent><p className="text-slate-700 leading-relaxed">{f.a}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-purple-800 to-purple-950 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Pre-qualifying with a major client? Get the written practice right.</h2>
                    <p className="text-lg text-purple-100 mb-8">60-minute scoping call — free, no obligation, NDA available. We will tell you which framework you need, how long it will take, and what the audit defence pack will look like.</p>
                    <Link to="/contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">Book a Consulting Call <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
