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
    Briefcase,
    AlertTriangle,
    BookOpen,
    BarChart3,
    Layers,
    Settings,
    Phone,
    ArrowRight,
} from "lucide-react";

export default function RbiProgramDesign() {
    const deliverables = [
        { title: "Damage-Mechanism Library", description: "Plant-wide damage mechanism review per API 571 with screening of all 60+ recognized mechanisms against your equipment, materials of construction, and process conditions." },
        { title: "Corrosion Loop Definition", description: "Process-driven corrosion-loop diagrams that group equipment by shared damage exposure — the foundation for any defensible RBI program." },
        { title: "Likelihood-of-Failure (LoF) Calculations", description: "Quantitative LoF per API 581 Annex 2 — generic failure frequency × damage factor (DF) × management systems factor (FMS), documented for audit defence." },
        { title: "Consequence-of-Failure (CoF) Modelling", description: "Financial + safety + environmental CoF per API 581 Part 3, including release-rate modelling, isolation effectiveness and detection credits." },
        { title: "Risk Matrix & Inspection Plan", description: "5×5 risk matrix output, ranked equipment inventory, and code-defensible inspection plan with NDT method, extent, interval and effectiveness category for every item." },
        { title: "Software Configuration", description: "Configuration of your RBI tool of choice — Meridium APM, PCMS, Inspectioneering / RBI Inspect, Visions or in-house — so the outputs are sustainable, not one-off." },
        { title: "Procedure + Training Package", description: "RBI working procedure, MoC trigger matrix, re-assessment protocol and operator/inspector training package so the program survives staff turnover." },
    ];

    const methodology = [
        { step: "1", title: "Scope Definition", text: "Equipment population, regulatory drivers (API 510/570/653, PESO, OISD, PED, ABSA), and target risk-acceptance criteria are agreed in a kick-off workshop." },
        { step: "2", title: "Data Gathering", text: "P&IDs, equipment registers, inspection history, process variables (T, P, H2S, water content, chloride, velocity, pH) and material-of-construction data are collected and validated." },
        { step: "3", title: "Damage Mechanism Review", text: "API 571 mechanisms are screened against operating envelope. Output: a documented DM matrix per equipment item." },
        { step: "4", title: "Corrosion Loop Construction", text: "Equipment is grouped into corrosion loops based on common DM exposure. P&ID overlays mark loop boundaries." },
        { step: "5", title: "Risk Calculation", text: "Quantitative LoF + CoF per API 581 Parts 2 + 3, with inspection effectiveness credit per API 581 Annex 2.C." },
        { step: "6", title: "Inspection Plan Generation", text: "Code-defensible plans per API 510 / 570 / 653 with method, location, extent, interval and effectiveness category." },
        { step: "7", title: "Implementation & Handover", text: "Software configured, working procedure issued, owner/operator training delivered. Re-assessment trigger schedule agreed." },
    ];

    const industries = [
        "Refineries (atmospheric, vacuum, FCC, hydrocracker, reformer trains)",
        "Petrochemical complexes (cracker, polyolefin, aromatics, oxo, glycol)",
        "Upstream production (GOSPs, gas plants, NGL extraction, well-pads)",
        "LNG liquefaction + import terminals (cryogenic piping, storage)",
        "Fertilizer plants (ammonia, urea, NPK, sour-service equipment)",
        "Power generation (combined-cycle HRSG, fired boilers, steam piping)",
        "Pipelines + terminals (API 1160 integration, MIC, internal corrosion)",
        "Pulp & paper, mining, metals, and other process plants",
    ];

    const outcomes = [
        { metric: "30-50%", label: "Reduction in inspection spend year-over-year (Gulf Coast refinery, ~600 equipment items)" },
        { metric: "ZERO", label: "PHMSA / OSHA / regulator inspection findings during 3-year post-RBI audit window" },
        { metric: "12 weeks", label: "Typical engagement duration for a 1,000-item plant (Eastern Province GCC refinery)" },
        { metric: "$2.4M", label: "Avoided unplanned downtime (Asia-Pacific cracker, after first re-assessment cycle)" },
    ];

    const faqs = [
        { q: "What is the difference between API 580 and API 581?", a: "API 580 is the recommended practice describing what an RBI program must contain — minimum elements, documentation, personnel qualifications, re-assessment triggers. API 581 is the quantitative methodology — the equations, damage factors and consequence models you actually use to compute risk. Most defensible programs cite API 580 for the framework and API 581 for the math." },
        { q: "How long does an RBI program design typically take?", a: "For a single refinery unit (100-200 equipment items) we deliver in 6-8 weeks. A full refinery (1,000+ items) typically runs 12-20 weeks. A multi-unit petrochemical complex can take 24-36 weeks. The pacing constraint is almost always data quality, not analysis time." },
        { q: "Can RBI replace API 510 / 570 / 653 inspection intervals?", a: "Yes — both API 510 (vessels), 570 (piping) and 653 (tanks) explicitly allow RBI-based inspection intervals as an alternative to fixed-interval defaults, provided the program meets API 580 minimums. We design programs that satisfy each code's specific RBI requirements." },
        { q: "Do you bring your own RBI software, or use ours?", a: "Both. We are tool-agnostic and have configured Meridium APM, GE APM, PCMS, Inspectioneering RBI Inspect, Visions RBI, Antea and bespoke Excel/Access programs. If you already have a license, we work in it. If you do not, we recommend an option matched to your equipment count and team capability." },
        { q: "Are you ASNT Level III certified to sign RBI output?", a: "Yes — our consulting team holds ASNT Level III in UT, RT, MT, PT, VT and ET, plus API 510, 570, 653 certifications. RBI outputs are signed by a Level III with relevant API authorized inspector credentials." },
        { q: "What about damage mechanisms we cannot quantify (e.g., HTHA, brittle fracture)?", a: "API 581 handles most mechanisms quantitatively. For HTHA we layer in API RP 941 Nelson Curves. For brittle fracture we use API 579-1 Part 3. For mechanisms outside the quantitative scope (e.g., reformer tube creep, FCC erosion) we use semi-quantitative ranking with documented engineering judgement." },
        { q: "How often must an RBI program be re-assessed?", a: "API 580 requires re-assessment when (a) significant process changes occur, (b) damage mechanisms change, (c) major repairs or replacements occur, or (d) on a scheduled cycle — typically 5 years for high-risk equipment, 10 years for medium-risk. We build the trigger matrix during program design." },
        { q: "Will RBI hold up in court / regulator audit?", a: "Yes, if the program meets API 580 minimums and the inputs and judgements are documented. We deliver full audit-defence packs — DM screening, corrosion-loop diagrams, LoF/CoF worksheets, inspection-effectiveness justification, MoC trigger logs — so every output traces back to a documented source." },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "Risk-Based Inspection (RBI) Program Design per API 580/581",
                "description": "ASNT Level III consulting for plant-wide RBI program design per API 580 framework and API 581 quantitative methodology. Damage mechanism review, corrosion loop definition, LoF/CoF calculation, inspection plan generation, software configuration and audit-defence documentation.",
                "provider": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "url": "https://atlantisndt.com",
                },
                "serviceType": "Risk-Based Inspection Program Design",
                "areaServed": ["US", "AE", "SA", "IN", "GB", "SG", "CA", "AU", "MY", "ID", "KW", "OM", "QA", "BH"],
                "offers": { "@type": "Offer", "url": "https://atlantisndt.com/consulting/rbi-program-design" },
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
                title="RBI Program Design Consulting — API 580/581 | ASNT Level III | Atlantis NDT"
                description="Plant-wide Risk-Based Inspection program design per API 580/581. Damage mechanism review, corrosion loops, LoF/CoF, inspection plans, software configuration. ASNT Level III consultants."
                keywords="RBI program design, API 580 consulting, API 581 RBI, damage mechanism analysis, corrosion loop, risk-based inspection, ASNT Level III RBI, Meridium APM, PCMS, inspection plan, refinery RBI, petrochemical RBI"
                canonical="https://atlantisndt.com/consulting/rbi-program-design"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-800 to-slate-950 text-white pt-24 pb-16">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
                        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-200 text-sm font-medium">
                            API 580 + API 581 — ASNT Level III Consulting
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Risk-Based Inspection (RBI) Program Design</h1>
                        <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
                            Defensible plant-wide RBI programs per API 580 framework + API 581 quantitative methodology — designed by ASNT Level III consultants who have sat in front of API auditors, PHMSA inspectors and corporate AI-Bs across four continents.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/contact">
                                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                                    <Phone className="mr-2 h-5 w-5" /> Book a Consulting Call
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

            {/* Intro / Problem */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">From fixed-interval inspection to defensible risk-ranked plans</h2>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        Most plants still inspect on a calendar. Every five years a pressure vessel gets externally examined, every ten years it gets internally examined — whether or not the damage mechanisms have changed, whether or not the failure consequence has changed, whether or not the inspection adds any actual risk-reduction value. The result is over-inspection of low-risk equipment, under-inspection of high-risk equipment, and inspection budgets that grow faster than the assets they protect.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        A code-defensible Risk-Based Inspection (RBI) program — designed per <strong>API RP 580</strong> framework and <strong>API RP 581</strong> quantitative methodology — replaces calendar-driven inspection with risk-ranked inspection. Each piece of equipment receives an inspection plan calibrated to its actual likelihood of failure (LoF) and consequence of failure (CoF), with documented damage mechanism reasoning (per <strong>API RP 571</strong>) and inspection effectiveness credit (per API 581 Annex 2).
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                        Done correctly, RBI typically cuts inspection spend 30-50% while improving asset reliability and audit defence. Done badly — as a one-off Excel exercise that nobody maintains — it produces compliance risk and disillusioned management. Atlantis NDT delivers the former.
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
                                        {d.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-700">{d.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Methodology — how we build the program</h2>
                    <div className="space-y-6">
                        {methodology.map((m) => (
                            <div key={m.step} className="flex gap-6 items-start">
                                <div className="flex-shrink-0 w-12 h-12 bg-slate-900 text-amber-400 rounded-full flex items-center justify-center font-bold text-lg">{m.step}</div>
                                <div>
                                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{m.title}</h3>
                                    <p className="text-slate-700 leading-relaxed">{m.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Credentials */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">ASNT Level III credentials backing every output</h2>
                    <div className="grid md:grid-cols-3 gap-6 mt-10">
                        <Card>
                            <CardHeader>
                                <Award className="text-amber-600 h-8 w-8 mb-2" />
                                <CardTitle>ASNT Level III</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700">UT, RT, MT, PT, VT, ET — full method coverage for any inspection-effectiveness review API 581 Annex 2 requires.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Shield className="text-amber-600 h-8 w-8 mb-2" />
                                <CardTitle>API Authorized Inspector</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700">API 510, API 570, API 653 — the certifications that let us sign inspection plans the regulator and AI body will recognise.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <BookOpen className="text-amber-600 h-8 w-8 mb-2" />
                                <CardTitle>API 580 / 581 Practitioner</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700">Hands-on experience configuring Meridium APM, PCMS, Inspectioneering RBI Inspect and Visions RBI across 40+ refinery and petrochemical sites.</p>
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
                                <span className="text-slate-700">{i}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            {/* Outcomes */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6 max-w-5xl">
                    <h2 className="text-3xl font-bold mb-10 text-slate-900 text-center">Sample client outcomes</h2>
                    <p className="text-center text-slate-600 mb-10">Anonymised results from recent RBI engagements. Reference letters available on NDA-bound request.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {outcomes.map((o) => (
                            <Card key={o.label}>
                                <CardContent className="pt-6">
                                    <div className="text-3xl font-bold text-amber-600 mb-2">{o.metric}</div>
                                    <p className="text-sm text-slate-700">{o.label}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900 text-center">Engagement & pricing</h2>
                    <Card className="border-2 border-amber-500">
                        <CardContent className="pt-6">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-3"><BarChart3 className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Consulting day rate:</strong> $1,800-$2,400 per ASNT Level III consultant-day, on-site or remote.</span></li>
                                <li className="flex items-start gap-3"><Briefcase className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Single-unit RBI design:</strong> $45,000-$85,000 fixed-fee for 100-200 equipment items, 6-8 week delivery.</span></li>
                                <li className="flex items-start gap-3"><Settings className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>Full-refinery RBI design:</strong> $180,000-$450,000 fixed-fee for 1,000+ equipment items, 12-20 week delivery.</span></li>
                                <li className="flex items-start gap-3"><Target className="text-amber-600 h-5 w-5 mt-1 flex-shrink-0" /><span><strong>RBI sustainment retainer:</strong> $4,500-$12,000 per month for ongoing MoC review, re-assessment triggers and inspection-plan tuning.</span></li>
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
                                    <p className="text-slate-700 leading-relaxed">{f.a}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-slate-800 to-slate-950 text-white">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to build a defensible RBI program?</h2>
                    <p className="text-lg text-slate-200 mb-8">
                        Most engagements start with a 60-minute scoping call — free, no obligation, NDA available on request. We will tell you whether your plant is RBI-ready, what data we need, and what timeline + cost looks like for your equipment population.
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-slate-900 font-semibold">
                            Book a Consulting Call <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
