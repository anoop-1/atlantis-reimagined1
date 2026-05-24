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
    Target,
    CheckCircle,
    FileText,
    Award,
    AlertTriangle,
    BookOpen,
    Layers,
    ClipboardCheck,
    Phone,
    ArrowRight,
    BarChart3,
    Briefcase,
    Settings,
} from "lucide-react";

export default function Api510ProgramAudit() {
    const deliverables = [
        { title: "API 510 Compliance Gap Analysis", description: "Element-by-element review of your in-service inspection program against API 510 requirements — owner-user inspection organisation, AI qualification, inspection intervals, NDE methods, repair / alteration / re-rating procedures." },
        { title: "Personnel Qualification Audit", description: "Review of Authorized Inspector certifications, examiner ASNT/ISO 9712 credentials, ongoing CEU/CPD compliance, and the documented authority delegation chain from owner-user to AI to examiner." },
        { title: "Procedure Document Review", description: "Inspection procedures (UT, RT, MT, PT, VT, ET, AET), repair procedures, alteration procedures, and re-rating calculations checked against API 510 + ASME Section VIII + relevant jurisdictional requirements." },
        { title: "Records Audit", description: "Equipment files, inspection history, MoC records, repair packs, and condition-monitoring location (CML) data audited against API 510 §7 record-keeping requirements." },
        { title: "RBI Compliance Check", description: "If your program uses RBI-based intervals, the API 580 / 581 conformance evidence is audited — corrosion-loop documentation, LoF/CoF calculations, inspection-effectiveness justification, re-assessment triggers." },
        { title: "Audit-Ready Evidence Pack", description: "A defence binder organised against API 510 Annex A audit checklist — every clause cross-referenced to a documented evidence artefact. Drops into your next regulator or AI body audit." },
        { title: "Remediation Roadmap", description: "Prioritised gap-closure plan with effort estimates, regulatory risk weighting, and owner-assigned action items. Most plants leave with a 60/90/180 day plan." },
    ];

    const methodology = [
        { step: "1", title: "Scope + Kick-off", text: "Equipment population, regulatory jurisdiction, recent audit findings (if any) and target completion date agreed. We confirm whether the audit drives toward a third-party certification (e.g., API recognised AI body audit) or an internal compliance review." },
        { step: "2", title: "Document Pull", text: "Inspection program manual, equipment register, recent inspection reports, AI / examiner certifications, MoC log, repair packs, RBI deliverables — collected via a secure document portal." },
        { step: "3", title: "Element-by-Element Review", text: "Every API 510 clause is checked against documented evidence. Findings categorised as conformance, observation, minor non-conformance, or major non-conformance." },
        { step: "4", title: "On-Site Verification (Optional)", text: "Walk-down of CMLs, AI office observation, examiner interview. Confirms that documented procedures match actual field practice — the most common source of audit failures." },
        { step: "5", title: "Draft Report + Working Session", text: "Draft findings reviewed with your inspection team. Genuine non-conformances are confirmed; edge-case interpretations are debated and resolved with documented rationale." },
        { step: "6", title: "Final Report + Roadmap", text: "Final API 510 audit report issued. Evidence pack assembled. Remediation roadmap delivered with owners assigned." },
        { step: "7", title: "Closure + Re-audit", text: "Optional re-audit after remediation — typically 60-90 days later — to confirm corrective actions are effective and documented." },
    ];

    const findingsTypes = [
        "Inspection intervals exceeded without documented MoC or extension justification",
        "AI certifications lapsed or examiner certifications expired without renewal",
        "Repair / alteration packs missing R-stamp documentation or pressure-test records",
        "Re-rating calculations performed without API 510 §8 + ASME Section VIII conformance",
        "RBI inspection plans claimed but corrosion-loop documentation incomplete or out of date",
        "CML thinning trends not analysed; corrosion rate not updated; tmin not recalculated",
        "External inspection neglected — coating, insulation, supports, anchor bolts, foundations",
        "On-stream NDT performed but examiner qualification not documented per ASNT SNT-TC-1A / CP-189",
        "FFS performed informally without conforming to API 579 documentation requirements",
    ];

    const outcomes = [
        { metric: "PASS", label: "First-time audit pass at three recent client sites (refinery, petrochemical, upstream)" },
        { metric: "60 days", label: "Typical engagement: scope to final report (single-plant audit)" },
        { metric: "ZERO", label: "Material findings on follow-on regulator audits after gap-closure roadmap implemented" },
        { metric: "$0", label: "No regulator-driven shut-down on any audited plant in the last 3 years" },
    ];

    const faqs = [
        { q: "When do I need an API 510 program audit?", a: "Three common drivers: (1) preparing for a regulator or AI body certification audit (ABSA, TSSA, Texas BPV authority, etc.); (2) corporate process-safety committee requirement for periodic compliance verification; (3) recent incident, near-miss or regulator finding that triggered a remediation requirement. We also see plants commission audits proactively before a planned RBI rollout, MoC overhaul, or owner-user re-certification." },
        { q: "Who can perform an API 510 program audit?", a: "API 510 itself does not specify auditor qualifications, but the recognised practice is an experienced API 510 Authorized Inspector with ASNT Level III credentials, multi-site refinery + petrochemical experience, and demonstrable familiarity with the relevant jurisdictional regulations. Our auditors meet all three criteria and have completed 40+ program audits across the Gulf Coast, GCC, India, Canada and Asia-Pacific." },
        { q: "How is this different from a regulator audit?", a: "A regulator audit is binding — non-conformances may trigger shutdown orders, fines or jurisdictional sanctions. Our audit is independent and confidential — non-conformances are findings only, with no regulatory consequence. The point is to find and fix gaps before the regulator does. The audit format closely mirrors what jurisdictional inspectors actually do, so you get a realistic preview." },
        { q: "What about API 570 + API 653 — do you audit those too?", a: "Yes. API 570 (piping) and API 653 (storage tanks) follow the same in-service inspection program structure as API 510 and use the same Owner-User / AI / Examiner framework. We routinely audit all three programs in a single engagement. The 5-7 day on-site time scales roughly linearly with the number of programs audited." },
        { q: "Will the auditor sign findings as an API AI?", a: "Yes. Findings reports are signed by an active API 510 Authorized Inspector (and API 570/653 where in scope), with the AI number, expiry date and signature page included in the audit report. This is the level of formality regulators and AI bodies expect to see when they review evidence packs." },
        { q: "How long does the audit take?", a: "A single-program (API 510 only) audit at a single refinery unit: 4-6 weeks scope-to-final-report. A full multi-program audit (API 510 + 570 + 653) at a full refinery: 8-12 weeks. The pacing constraints are document availability and on-site walk-down scheduling, not analysis." },
        { q: "What is the typical outcome?", a: "On average we find 8-15 minor non-conformances and 1-3 major non-conformances per plant audited. Almost all are remediable within 90-180 days. The most common patterns are CML data not analysed, examiner certifications lapsed, MoC records incomplete, and RBI documentation behind the actual practice." },
        { q: "Do you offer ongoing API 510 program support after the audit?", a: "Yes. Many clients retain us on a quarterly retainer for ongoing AI support, examiner-qualification review, MoC compliance, RBI re-assessment triggers and pre-turnaround inspection planning. Retainers typically run $4,500-$12,000 / month depending on plant complexity." },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "API 510 In-Service Inspection Program Audit",
                "description": "ASNT Level III + API 510 Authorized Inspector audit of in-service inspection programs. Procedure review, gap analysis, audit-ready evidence pack and remediation roadmap.",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "serviceType": "API 510 Program Audit",
                "areaServed": ["US", "AE", "SA", "IN", "GB", "SG", "CA", "AU", "MY", "ID", "KW", "OM", "QA", "BH"],
                "offers": { "@type": "Offer", "url": "https://atlantisndt.com/consulting/api-510-program-audit" },
            },
            { "@type": "FAQPage", "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })) },
        ],
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <PillarHubNav active="consulting" />
            <SEOHead
                title="API 510 Program Audit — In-Service Inspection Compliance | Atlantis NDT"
                description="Third-party API 510 in-service inspection program audit. Procedure review, gap analysis, audit-ready evidence pack, remediation roadmap. Signed by ASNT Level III + API 510 AI."
                keywords="API 510 audit, in-service inspection audit, API 510 program review, owner user inspection, API 510 compliance, third party audit, ASNT Level III, API authorized inspector, ABSA audit, TSSA audit, jurisdictional inspector"
                canonical="https://atlantisndt.com/consulting/api-510-program-audit"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-blue-800 to-blue-950 text-white pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-200 text-sm font-medium">
                            API 510 — Third-Party Compliance Audit
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">API 510 In-Service Inspection Program Audit</h1>
                        <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                            Find the gaps before the regulator does. Independent third-party audit of your API 510 in-service inspection program, signed by an active ASNT Level III + API 510 Authorized Inspector.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold"><Phone className="mr-2 h-5 w-5" /> Book a Consulting Call</Button></Link>
                            <Link to="/consulting"><Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">Back to Consulting Hub</Button></Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Why pre-audit your API 510 program</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>API 510 — Pressure Vessel Inspection Code: In-Service Inspection, Rating, Repair, and Alteration</strong> is the foundational code for managing pressure-vessel integrity throughout the operating life of a process plant. It defines the responsibilities of the Owner-User, the Authorized Inspector, the Examiner. It specifies inspection intervals, NDE methods, repair and alteration controls, re-rating calculations, and the documentation that proves it all happened. Compliance is not optional — jurisdictional pressure-vessel authorities across the US (Texas, Louisiana, California, Alaska), Canada (ABSA, TSSA, ACI, BCSA), the GCC (Aramco Inspection, ADNOC Inspection), Europe (PED + national bodies) and Asia (PESO India, JKKP Malaysia, Migas Indonesia) all rely on API 510 (or local equivalents) as the operating standard.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        The trouble is that API 510 compliance is a moving target — equipment populations grow, inspectors retire, AI certifications lapse, RBI claims drift from reality, repair packs go missing, and an inspection program that passed the regulator five years ago can quietly accumulate dozens of minor non-conformances that, in aggregate, produce a major finding the next time the auditor calls. A regulator-driven finding can shut down a unit, trigger fines, or cost the plant its owner-user authorisation.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        A proactive third-party audit, performed by an independent API 510 AI with no skin in the inspection-execution game, finds those gaps before the regulator does. Our audits mirror the format jurisdictional inspectors use, so you get a realistic preview — and a prioritised remediation roadmap to close the gaps on your own schedule.
                    </p>
                </div>
            </section>

            {/* Deliverables */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">What you get</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {deliverables.map((d) => (
                            <Card key={d.title} className="border-l-4 border-l-blue-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-lg">
                                        <ClipboardCheck className="text-blue-600 mr-3 h-5 w-5 flex-shrink-0" />
                                        {d.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-700">{d.description}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Audit methodology</h2>
                    <div className="space-y-6">
                        {methodology.map((m) => (
                            <div key={m.step} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-blue-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">{m.step}</div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{m.title}</h3>
                                    <p className="text-slate-700 leading-relaxed">{m.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Common findings */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Common findings we surface</h2>
                    <p className="text-center text-slate-600 mb-10">Patterns from 40+ recent API 510 audits across refining, petrochemical and upstream sites.</p>
                    <ul className="space-y-3">
                        {findingsTypes.map((f) => (
                            <li key={f} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                <AlertTriangle className="text-blue-600 h-5 w-5 flex-shrink-0 mt-1" />
                                <span className="text-slate-700">{f}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">ASNT Level III + API 510 AI credentials</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        <Card>
                            <CardHeader><Award className="text-blue-600 h-8 w-8 mb-2" /><CardTitle>API 510 Authorized Inspector</CardTitle></CardHeader>
                            <CardContent><p className="text-slate-700">Active API 510 AI credentials with documented continuing education. Findings reports signed by active AI with number + expiry recorded.</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><Shield className="text-blue-600 h-8 w-8 mb-2" /><CardTitle>ASNT Level III</CardTitle></CardHeader>
                            <CardContent><p className="text-slate-700">UT, RT, MT, PT, VT, ET — full method coverage for NDE procedure review and examiner qualification audit.</p></CardContent>
                        </Card>
                        <Card>
                            <CardHeader><BookOpen className="text-blue-600 h-8 w-8 mb-2" /><CardTitle>Cross-Jurisdictional Experience</CardTitle></CardHeader>
                            <CardContent><p className="text-slate-700">ABSA, TSSA, Texas BPV, OSHA PSM, Aramco, ADNOC, PESO, OISD, JKKP, Migas — audits aligned to the specific regulatory body that matters to you.</p></CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Industries served</h2>
                    <ul className="grid md:grid-cols-2 gap-4">
                        <li className="flex items-start gap-3"><Layers className="text-blue-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Refineries — every unit type, every code era</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-blue-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Petrochemicals — crackers, polyolefins, MEG, aromatics, ammonia</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-blue-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Upstream — GOSPs, separators, gas processing, EOR injection</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-blue-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">LNG + Gas processing — cryogenic and high-pressure inventory</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-blue-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Power generation — HRSG, boilers, deaerators (paired with NBIC + ASME I)</span></li>
                        <li className="flex items-start gap-3"><Layers className="text-blue-600 h-5 w-5 flex-shrink-0 mt-1" /><span className="text-slate-700">Pulp & paper, mining, fertilizer, food + beverage process plants</span></li>
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
                                    <div className="text-3xl font-bold text-blue-600 mb-2">{o.metric}</div>
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
                    <Card className="border-2 border-blue-500">
                        <CardContent className="pt-6">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><BarChart3 className="text-blue-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Single-unit API 510 audit:</strong> $28,000-$55,000 fixed-fee, 4-6 week delivery.</span></li>
                                <li className="flex items-start gap-3"><Briefcase className="text-blue-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Full-refinery API 510 + 570 + 653 audit:</strong> $95,000-$220,000 fixed-fee, 8-12 week delivery.</span></li>
                                <li className="flex items-start gap-3"><Settings className="text-blue-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Audit + remediation support:</strong> $145,000-$320,000 fixed-fee, includes 90-day post-audit remediation oversight.</span></li>
                                <li className="flex items-start gap-3"><Target className="text-blue-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Ongoing AI / examiner retainer:</strong> $4,500-$12,000 per month for active API 510 AI support.</span></li>
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
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-start gap-3"><AlertTriangle className="text-blue-600 h-5 w-5 flex-shrink-0 mt-1" />{f.q}</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-700 leading-relaxed">{f.a}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-br from-blue-800 to-blue-950 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Audit due? Get a defensible pre-check</h2>
                    <p className="text-lg text-blue-100 mb-8">60-minute scoping call — free, no obligation, NDA available. We will tell you how big the gap is likely to be, what the audit will cost, and how long the remediation will take.</p>
                    <Link to="/contact"><Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">Book a Consulting Call <ArrowRight className="ml-2 h-5 w-5" /></Button></Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
