// CTR_OVERRIDES suggestion (for prerender.mjs):
//   "/compare/api-510-vs-api-570": {
//     title: "API 510 vs API 570 — Which Inspector Cert in 2026? Salary, Scope, Exam",
//     description: "API 510 (pressure vessel) vs API 570 (piping) inspector — exam scope, $730 fee, $85K–$140K salary, who needs which, can you hold both. 2026 guide."
//   }

import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, ArrowRight, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const compareRows = [
    { factor: "Full title", a510: "API 510 Pressure Vessel Inspector", a570: "API 570 Piping Inspector" },
    { factor: "Governing code", a510: "API 510 (in-service inspection of pressure vessels) + ASME Section VIII", a570: "API 570 (in-service inspection of process piping) + ASME B31.3" },
    { factor: "Asset scope", a510: "Pressure vessels, columns, drums, reactors, heat exchanger shells", a570: "Process piping, transfer lines, manifolds, on-plot piping (typically up to ANSI 600#)" },
    { factor: "Exam questions", a510: "171 multiple-choice (110 closed-book + 61 open-book)", a570: "171 multiple-choice (110 closed-book + 61 open-book)" },
    { factor: "Exam duration", a510: "7.5 hours", a570: "7.5 hours" },
    { factor: "Open-book references", a510: "API 510, 572, 576, 577, 571, 579-1, ASME Sec. V, VIII Div. 1, IX", a570: "API 570, 574, 577, 571, 579-1, 578, ASME Sec. V, IX, B16.5, B31.3" },
    { factor: "Pass mark", a510: "70% (cumulative across closed + open book)", a570: "70% (cumulative across closed + open book)" },
    { factor: "Exam fee (2026)", a510: "$730 member / $930 non-member (re-test $510 / $710)", a570: "$730 member / $930 non-member (re-test $510 / $710)" },
    { factor: "Min experience", a510: "Bachelor + 1 yr / Associate + 2 yr / High school + 3 yr in pressure vessel inspection", a570: "Bachelor + 1 yr / Associate + 2 yr / High school + 3 yr in piping inspection" },
    { factor: "Cert validity", a510: "3 years (then re-exam or experience-based recert)", a570: "3 years (then re-exam or experience-based recert)" },
    { factor: "Recertification path", a510: "180 inspection days + 80 hrs continuing ed in 3-year cycle", a570: "180 inspection days + 80 hrs continuing ed in 3-year cycle" },
    { factor: "Typical employer", a510: "Refineries, petrochem plants, fertiliser, LNG (vessel-heavy)", a570: "Refineries, midstream, gas plants, offshore (piping-heavy)" },
    { factor: "Pass rate (industry avg)", a510: "~50–60% first attempt; ~85% with structured prep", a570: "~50–60% first attempt; ~85% with structured prep" },
    { factor: "US salary range (2026)", a510: "$85,000 – $140,000 base; $110K avg", a570: "$85,000 – $135,000 base; $108K avg" },
    { factor: "Middle East tax-free range", a510: "$95,000 – $160,000 + housing & per diem", a570: "$95,000 – $155,000 + housing & per diem" },
    { factor: "India INR range", a510: "₹15L – ₹35L per annum", a570: "₹15L – ₹32L per annum" },
];

const faqs = [
    { question: "What&rsquo;s the difference between API 510 and API 570?", answer: "API 510 certifies you to inspect pressure vessels — the static, ASME Section VIII equipment like reactors, separators, columns, drums, and heat-exchanger shells. API 570 certifies you to inspect process piping — the in-service piping systems built to ASME B31.3 that connect those vessels (transfer lines, manifolds, headers, on-plot piping). Same inspection-code DNA, different asset class. Most large refineries and petrochemical complexes have both vessels and piping, which is why senior inspectors often hold both certifications." },
    { question: "Which one should I get first?", answer: "Most candidates start with API 510 because pressure vessel codes are more conceptually contained — fewer reference codes, slightly more straightforward thickness/MAWP calculations. Some recommend API 570 first if your background is heavily piping-oriented (you&rsquo;ll already know B31.3). Either way, the prep skills (open-book navigation, code cross-references, calculation practice) transfer almost entirely. If you can pass one, you can pass the other in the next exam window with focused study on the new code references." },
    { question: "Can I hold both API 510 and API 570?", answer: "Yes — and most senior fixed-equipment inspectors do. There&rsquo;s no conflict. You take separate exams, pay separate fees, and recertify each independently every 3 years. Holding both is the standard for inspection supervisors, RBI engineers, and Level III consultants working across refining and petrochemical assets. Adding API 653 (storage tanks) on top is the typical &lsquo;triple cert&rsquo; held by senior fixed-equipment professionals." },
    { question: "Is API 510 or API 570 harder?", answer: "Equivalent difficulty in practice. Same exam structure (171 questions, 7.5 hours, closed + open book), same pass mark (70%), and similar industry pass rates (~50–60% first attempt, ~85% with structured prep). The reference-code stack differs slightly — API 570 includes B31.3 piping calculations and B16.5 flange ratings which some candidates find heavier; API 510 includes more vessel-specific calculations (MAWP, MDMT) and ASME Section VIII Div. 1 navigation. Whichever code stack matches your day-to-day work feels easier." },
    { question: "What does an API 510 or API 570 inspector earn in 2026?", answer: "USA: API 510 inspectors earn $85,000–$140,000 base ($110K average) plus overtime and call-out premiums. API 570 inspectors are nearly identical at $85,000–$135,000 base ($108K average). Middle East tax-free: $95,000–$160,000 plus housing, transport, and per diem (often pushing total package to $180K+). India: ₹15L–₹35L per annum depending on operator (Reliance, IOCL, BPCL, ONGC), city, and whether the role is contract or permanent. Holding both certs typically adds $10K–$20K to US base salary." },
];

export default function Api510VsApi570() {
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
                "headline": "API 510 vs API 570 — Pressure Vessel vs Piping Inspector Comparison 2026",
                "datePublished": "2026-05-03",
                "dateModified": "2026-05-03",
                "author": { "@type": "Person", "name": "Anoop Rayavarapu", "jobTitle": "ASNT Level III, API 510/570/653" },
                "publisher": { "@id": "https://atlantisndt.com/#organization" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/api-510-vs-api-570" }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="API 510 vs API 570 — Pressure Vessel vs Piping Inspector (2026 Salary & Scope)"
                description="API 510 (vessel) vs API 570 (piping) inspector — same exam structure, different scope. $730 fee, 7.5 hr exam, $85K–$140K salary. Choose the right cert for 2026."
                keywords="API 510 vs API 570, API inspector comparison, pressure vessel inspector, piping inspector, API 510 vs 570 salary, which API cert is better, API 510 570 exam"
                canonical="https://atlantisndt.com/compare/api-510-vs-api-570"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-600 to-red-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-amber-200 mb-4"><Award className="w-5 h-5" /><span>Inspector Certification Comparison</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 510 vs API 570 — Which Inspector Cert in 2026?</h1>
                        <p className="text-xl text-amber-100 max-w-3xl mb-8">Same API exam playbook — different asset class. Pressure vessels (API 510) versus process piping (API 570). Scope, exam, $85K–$140K salary, and which one to take first.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Talk to a Trainer</Link>
                            <Link to="/api-510-certification" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">API 510 Detail</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* TL;DR card */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-t-4 border-t-amber-600">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-3"><Award className="w-6 h-6 text-amber-600" /><h3 className="text-xl font-bold">API 510 — Take This If&hellip;</h3></div>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Your day job is reactors, columns, drums, heat exchangers</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Your plant is vessel-heavy (refining hydroprocessing, FCC, LNG)</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You&rsquo;re already comfortable with ASME Section VIII Div. 1</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You want a lighter open-book reference stack</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-red-600">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-3"><Award className="w-6 h-6 text-red-600" /><h3 className="text-xl font-bold">API 570 — Take This If&hellip;</h3></div>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Your day job is process piping, transfer lines, manifolds</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Your asset base is piping-heavy (gas plants, midstream, offshore)</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You already know ASME B31.3 calculations</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You handle small-bore piping integrity programs</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Comparison table */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Side-by-Side Comparison</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Same exam playbook, different asset class. Below is every factor that varies between the two.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Factor</th>
                                    <th className="px-4 py-3 text-left text-amber-200">API 510 — Vessel</th>
                                    <th className="px-4 py-3 text-left text-red-200">API 570 — Piping</th>
                                </tr>
                            </thead>
                            <tbody>
                                {compareRows.map((row, i) => (
                                    <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-4 py-3 font-medium text-sm align-top">{row.factor}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm align-top">{row.a510}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm align-top">{row.a570}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Salary callout */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-5xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Salary &amp; Career Trajectory (2026)</h2>
                    <p className="text-center text-slate-600 mb-10">Both certifications pay similarly — but holding both unlocks the senior fixed-equipment inspector tier.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-t-4 border-t-amber-600">
                            <CardContent className="p-6 text-center">
                                <DollarSign className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 mb-1">USA Base</div>
                                <div className="text-2xl font-bold text-slate-800">$85K – $140K</div>
                                <div className="text-xs text-slate-500 mt-2">$110K average — single cert (510 or 570)</div>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-amber-600">
                            <CardContent className="p-6 text-center">
                                <DollarSign className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 mb-1">USA — Both Certs</div>
                                <div className="text-2xl font-bold text-slate-800">$120K – $165K</div>
                                <div className="text-xs text-slate-500 mt-2">+ API 653 stacks another $10K–$20K</div>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-amber-600">
                            <CardContent className="p-6 text-center">
                                <DollarSign className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                                <div className="text-sm text-slate-500 mb-1">Middle East Tax-Free</div>
                                <div className="text-2xl font-bold text-slate-800">$130K – $185K</div>
                                <div className="text-xs text-slate-500 mt-2">+ housing, transport, per diem</div>
                            </CardContent>
                        </Card>
                    </div>
                    <p className="text-center text-xs text-slate-500 mt-6">Ranges reflect 2026 market data across major contractors. Local benefits, overtime, and turnaround call-out premiums vary substantially.</p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>API 510 vs 570 — Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <details key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                                    {faq.question}
                                    <span className="text-amber-700 text-xl ml-4 flex-shrink-0">+</span>
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4" dangerouslySetInnerHTML={{ __html: faq.answer }} />
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">Related Certification Pages</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/api-510-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-amber-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700">API 510 Certification</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Full pressure-vessel inspector pathway — eligibility, exam, prep, $730 fee, recert.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-570-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-red-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-red-700">API 570 Certification</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Full piping inspector pathway — B31.3 references, exam structure, prep schedule.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-653-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-amber-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700">API 653 Certification</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Storage tank inspector — the third cert in the &ldquo;triple stack&rdquo; for senior fixed-equipment inspectors.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-510-training" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-amber-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700">API 510 Training</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">5-day classroom or self-paced online API 510 exam prep with mock exams.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-570-training" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-amber-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700">API 570 Training</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">5-day intensive piping inspector exam prep — Houston, Dubai, Hyderabad, online.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/ndt-certification-guide" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-amber-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700">All Certifications</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Compare every NDT and API inspection certification side by side.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-600 to-red-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Pick Your Next Cert?</h2>
                    <p className="text-amber-100 mb-8 text-lg">Talk to an Atlantis NDT Level III about which API cert fits your role, your asset base, and your salary target.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Talk to Atlantis</Link>
                        <Link to="/training" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">View All Training</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
