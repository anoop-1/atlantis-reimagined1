// CTR_OVERRIDES suggestion (for prerender.mjs):
//   "/compare/ndt-consulting-vs-in-house": {
//     title: "NDT Consulting vs In-House Team — 2026 Cost Breakdown & When to Hire",
//     description: "NDT consulting vs in-house Level III team — fully-loaded cost analysis ($180K–$320K/yr in-house vs $1.5K–$3.5K/day consulting). Hybrid model that wins."
//   }

import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Users, Briefcase, ArrowRight, DollarSign, Calculator } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const compareRows = [
    { factor: "Headcount cost (USA, Level III)", consulting: "Day-rate $1,500–$3,500 (no benefits load)", inHouse: "Base salary $130K–$200K + ~30–40% benefits load = $170K–$280K fully loaded" },
    { factor: "Onboarding lead-time", consulting: "1–3 weeks (NDA, vendor onboarding, badge-up)", inHouse: "3–6 months (recruit, hire, security clearance, training)" },
    { factor: "Coverage continuity", consulting: "Backed by a bench — illness/leave covered", inHouse: "Single point of failure unless you hire 2+" },
    { factor: "Method breadth", consulting: "Multi-method Level III on demand (UT, RT, MT, PT, ECT, AUT, TOFD, PA-UT)", inHouse: "Typically 1–2 methods per Level III; multi-cert hires are scarce and expensive" },
    { factor: "Audit / surveillance support", consulting: "Independent voice — credible to client/regulator", inHouse: "Internal voice — less credible during third-party audit" },
    { factor: "Procedure / written-practice authoring", consulting: "Specialised — done dozens of times", inHouse: "Often first-time effort; 2–4× longer to author" },
    { factor: "Equipment access", consulting: "Brings calibrated kit, current cal certs", inHouse: "Capex for equipment + annual cal contracts" },
    { factor: "Travel / remote site", consulting: "Built into rate; mobilises globally", inHouse: "Per-diem and travel cost on top of salary" },
    { factor: "Knowledge retention", consulting: "Risk: knowledge leaves with the consultant", inHouse: "Stays in the org (with proper documentation)" },
    { factor: "Liability & insurance", consulting: "Consultant carries E&O, professional indemnity", inHouse: "Employer carries all liability" },
    { factor: "Best fit", consulting: "Project-based, audit prep, turnaround surge, RBI build, procedure development", inHouse: "Day-to-day inspection, recurring routine, large captive asset base" },
];

const costScenarios = [
    {
        scenario: "Single-site refinery, ~80 inspections/yr",
        inHouse: "1 Level III + 2 Level II = $480K–$680K/yr loaded",
        consulting: "Quarterly site visits + on-call = $180K–$280K/yr",
        winner: "Consulting",
        why: "Inspection volume doesn&rsquo;t justify a full-time Level III. Day-rate scales to actual work."
    },
    {
        scenario: "Multi-site EPC, 5+ active projects",
        inHouse: "2 Level III + 4 Level II + cal lab = $1.2M–$1.6M/yr",
        consulting: "Distributed consultants per project = $900K–$1.4M/yr",
        winner: "Consulting (slight)",
        why: "Project-rotational nature means in-house bench sits idle between projects."
    },
    {
        scenario: "Captive operator, large asset base, daily inspection load",
        inHouse: "5+ in-house inspectors + 1 Level III oversight = $900K–$1.4M/yr",
        consulting: "Day-rate equivalent ~$1.6M–$2.4M/yr",
        winner: "In-house",
        why: "Recurring daily volume amortises fixed salary cost; consultant day-rates don&rsquo;t."
    },
    {
        scenario: "Greenfield project — startup quality program",
        inHouse: "Hire team after FID = 6–9 month lead-time risks schedule",
        consulting: "Mobilise within 4 weeks; build SNT-TC-1A & RBI program",
        winner: "Consulting (then transition)",
        why: "Use consultants to set up the program, then transition to in-house ops team."
    },
    {
        scenario: "Third-party audit / regulatory surveillance prep",
        inHouse: "Internal team self-audits — often misses issues",
        consulting: "Independent expert eyes; credible to auditor",
        winner: "Consulting",
        why: "Independence is the deliverable. In-house can&rsquo;t replicate that."
    },
];

const faqs = [
    { question: "When should I hire an NDT consultant vs build an in-house team?", answer: "Use a consultant when (a) inspection volume is project-based or seasonal, not daily; (b) you need specialist methods (TOFD, PA-UT, AUT, NAS 410 for aerospace) you can&rsquo;t justify hiring full-time; (c) you&rsquo;re preparing for a third-party audit and need independent credibility; (d) you&rsquo;re standing up a new program and need procedures/written practice authored fast; (e) you have a turnaround surge and need bodies for 6–10 weeks. Build in-house when (a) inspection volume is daily and recurring across a captive asset base; (b) you have multiple sites needing ongoing oversight; (c) regulatory or insurer commitments require designated full-time inspectors; (d) institutional knowledge retention is a strategic priority." },
    { question: "How much does an in-house NDT team really cost?", answer: "A US Level III NDT inspector base salary in 2026 is $130K–$200K. Add ~30–40% for fully-loaded benefits, training, professional development, certification renewals, and equipment depreciation: that&rsquo;s $170K–$280K per Level III, fully loaded. Level II inspectors run $80K–$130K base, fully loaded $105K–$180K. A minimum credible in-house team (1 Level III + 2 Level II + part-time admin) runs $400K–$680K per year before equipment capex ($150K–$400K initial) and annual calibration contracts ($25K–$60K). Multi-site programs scale linearly." },
    { question: "What are typical NDT consulting day rates in 2026?", answer: "USA: ASNT Level III consultants run $1,500–$3,500/day depending on method specialisation, certifications stacked (API 510/570/653 add premium), and travel scope. Field inspectors (Level II) run $850–$1,400/day. Middle East and Asia regional consultants are 30–50% lower in local-currency terms but factor in mobilisation costs from US/EU bases. Specialist roles (PA-UT analyst, AUT data analyst, RBI lead) typically command the upper end. Expect minimum-day or weekly billing structures rather than hourly, and standby/standdown clauses in the contract." },
    { question: "What&rsquo;s the &lsquo;hybrid model&rsquo; — and why does it usually win?", answer: "The hybrid model: keep a small permanent core (typically 1 Level III + 2–3 Level II per major site) for day-to-day inspection, recurring tasks, and institutional continuity. Layer specialist consultants on top for (a) audit prep and surveillance, (b) procedure / written-practice authoring, (c) advanced-method projects (TOFD, PA-UT, AUT, MFL ILI campaigns), (d) turnaround surge support, and (e) RBI program build/refresh. This gives you the cost efficiency of in-house for routine work plus the specialist depth and independent credibility of consulting where it counts. Most mature operators converge on this model after 5–7 years of trial and error." },
    { question: "How do I evaluate an NDT consulting firm?", answer: "Five practical filters: (1) ASNT Level III certification by name (ask for current certification cards and method coverage); (2) API certifications relevant to your asset base (510/570/653 for downstream; 1163/653 for storage; B31.3 expertise for piping); (3) verifiable project references in your industry vertical — request reference calls, not just logos; (4) procedure-development portfolio (ask to see redacted SNT-TC-1A written practices they&rsquo;ve authored); (5) technology stack — modern consulting firms operate digital reporting platforms, not paper-and-Excel workflows. The cheapest day-rate is rarely the right answer; the firm that prevents one major recordable finding pays for itself many times over." },
];

export default function ConsultingVsInHouse() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            },
            {
                "@type": "Article",
                "headline": "NDT Consulting vs In-House Team — Cost & Decision Framework 2026",
                "datePublished": "2026-05-03",
                "dateModified": "2026-05-03",
                "author": { "@type": "Person", "name": "Anoop Rayavarapu", "jobTitle": "ASNT Level III, CEO Atlantis NDT" },
                "publisher": { "@id": "https://atlantisndt.com/#organization" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/ndt-consulting-vs-in-house" }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Consulting vs In-House Team — 2026 Cost Breakdown & Decision Framework"
                description="Detailed cost comparison: in-house Level III team ($170K–$280K loaded) vs consulting day rates ($1.5K–$3.5K). Hybrid model, when each wins, scoring framework."
                keywords="NDT consulting vs in-house, NDT consultant cost, in-house NDT team cost, NDT outsourcing, ASNT Level III consulting rate, NDT staffing decision"
                canonical="https://atlantisndt.com/compare/ndt-consulting-vs-in-house"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-emerald-700 to-teal-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-emerald-200 mb-4"><Briefcase className="w-5 h-5" /><span>NDT Operations Decision</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Consulting vs In-House Team — 2026 Cost &amp; Decision Framework</h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mb-8">Real numbers, not generalities. In-house Level III runs $170K–$280K fully loaded; consulting day rates run $1,500–$3,500. Here&rsquo;s when each wins and when the hybrid model dominates both.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get a Cost Estimate</Link>
                            <Link to="/consulting" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View Consulting</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Decision card */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-t-4 border-t-emerald-600">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-3"><Briefcase className="w-6 h-6 text-emerald-600" /><h3 className="text-xl font-bold">Consulting Wins When&hellip;</h3></div>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Project-based or seasonal work</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Specialist methods (TOFD, PA-UT, AUT)</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Audit prep / regulatory surveillance</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Standing up a new program (procedures, RBI)</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Turnaround / shutdown surge (6–10 weeks)</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-teal-600">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-3"><Users className="w-6 h-6 text-teal-600" /><h3 className="text-xl font-bold">In-House Wins When&hellip;</h3></div>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Daily, recurring inspection load</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Captive asset base across multiple sites</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Regulatory commitments require named inspectors</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Knowledge retention is strategic</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Inspection volume justifies amortisation</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-cyan-600">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-3"><Calculator className="w-6 h-6 text-cyan-600" /><h3 className="text-xl font-bold">Hybrid Wins When&hellip;</h3></div>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You have steady core + episodic surge</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You need both routine + specialist methods</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Level III bench depth is too thin in-house</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You want independent audit voice on demand</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Most mature operators end up here</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Comparison table */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Side-by-Side Cost &amp; Capability Comparison</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Every factor that drives the consulting-vs-in-house decision in 2026.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Factor</th>
                                    <th className="px-4 py-3 text-left text-emerald-200">Consulting</th>
                                    <th className="px-4 py-3 text-left text-teal-200">In-House Team</th>
                                </tr>
                            </thead>
                            <tbody>
                                {compareRows.map((row, i) => (
                                    <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-4 py-3 font-medium text-sm align-top">{row.factor}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm align-top">{row.consulting}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm align-top">{row.inHouse}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Cost scenarios */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">5 Real-World Cost Scenarios</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Numbers reflect 2026 US market rates. Adjust ±20% for high-cost-of-living regions or remote-site mobilisation.</p>
                    <div className="space-y-4">
                        {costScenarios.map((s, i) => (
                            <Card key={i} className="border-l-4 border-l-emerald-600">
                                <CardContent className="p-6">
                                    <div className="flex items-start justify-between gap-4 mb-3">
                                        <h3 className="font-bold text-lg text-slate-800">{s.scenario}</h3>
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-700 text-xs font-semibold rounded-full whitespace-nowrap">Winner: {s.winner}</span>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm mb-3">
                                        <div className="bg-teal-50 p-3 rounded-lg">
                                            <div className="font-semibold text-teal-700 mb-1">In-House</div>
                                            <div className="text-slate-700">{s.inHouse}</div>
                                        </div>
                                        <div className="bg-emerald-50 p-3 rounded-lg">
                                            <div className="font-semibold text-emerald-700 mb-1">Consulting</div>
                                            <div className="text-slate-700">{s.consulting}</div>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 italic" dangerouslySetInnerHTML={{ __html: `Why: ${s.why}` }} />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Hybrid model */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">The Hybrid Model — Why Most Mature Operators End Up Here</h2>
                    <p className="text-center text-slate-600 mb-10">After 5–7 years of trial and error, most operators converge on this structure.</p>
                    <div className="bg-white rounded-2xl shadow-md p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-teal-600" />In-House Core (per major site)</h3>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />1 ASNT Level III (multi-method coverage)</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />2–3 Level II inspectors (UT, MT, PT primary)</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />1 NDT coordinator (scheduling, records, QA)</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Owned UT, MT, PT equipment + cal contracts</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Annual loaded cost: $400K–$680K per site</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-lg text-slate-800 mb-4 flex items-center gap-2"><Briefcase className="w-5 h-5 text-emerald-600" />Consulting Layer (on demand)</h3>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Specialist methods: TOFD, PA-UT, AUT, ECT-array</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Procedure / written-practice authoring &amp; refresh</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Audit prep, regulatory surveillance, third-party Level III</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Turnaround surge (6–10 weeks, 5–15 contractors)</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Annual variable cost: $80K–$400K per site</li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-6 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                            <p className="text-sm text-emerald-900"><strong>Why it works:</strong> Fixed cost amortised across daily volume; specialist depth and independent credibility purchased only when needed; no idle Level III bench between projects; audit-day surprises eliminated.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>Consulting vs In-House — Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <details key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                                <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-white list-none flex items-center justify-between">
                                    {faq.question}
                                    <span className="text-emerald-700 text-xl ml-4 flex-shrink-0">+</span>
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">Related Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/consulting" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-emerald-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-emerald-700">NDT Consulting Services</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Multi-method ASNT Level III consulting — procedures, audits, RBI, advanced methods.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/consulting-usa" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-emerald-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-emerald-700">USA Consulting</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Houston-based ASNT Level III bench serving Gulf Coast refining and petrochem.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/training" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-emerald-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-emerald-700">NDT Training</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Build your in-house team faster with structured method-specific training.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/asnt-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-teal-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-emerald-700">ASNT Certification</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Cert pathway for the inspectors you&rsquo;ll hire (or qualify your existing team).</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/ndt-technician-salary" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-teal-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-emerald-700">2026 NDT Salary Data</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Benchmark in-house compensation across regions, methods, and certifications.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/tools/ndt-roi-calculator" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-teal-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-emerald-700">NDT ROI Calculator</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Model your in-house vs consulting cost trade-off interactively.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <DollarSign className="w-12 h-12 mx-auto mb-4 text-emerald-200" />
                    <h2 className="text-3xl font-bold mb-4">Get a Custom Cost Comparison for Your Site</h2>
                    <p className="text-emerald-100 mb-8 text-lg">Share your asset base, current inspection load, and we&rsquo;ll model the consulting / in-house / hybrid costs against your 2026 budget.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request a Cost Model</Link>
                        <Link to="/consulting" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">View Consulting</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
