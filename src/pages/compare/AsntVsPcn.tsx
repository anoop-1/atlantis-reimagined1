// CTR_OVERRIDES suggestion (for prerender.mjs):
//   "/compare/asnt-vs-pcn": {
//     title: "ASNT vs PCN / ISO 9712 — Which NDT Cert Wins in 2026?",
//     description: "ASNT (SNT-TC-1A) vs PCN / ISO 9712 side-by-side: geography, exam structure, recert, $200–$750 cost, employer recognition. Pick the right cert for your market."
//   }

import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Globe, Award, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
const compareRows = [
    { factor: "Governing standard", asnt: "SNT-TC-1A (recommended practice) or CP-189 (mandatory standard) or ANSI/ASNT CP-105", pcn: "ISO 9712:2021 (international) — PCN is the UK certification scheme operated by BINDT" },
    { factor: "Certification model", asnt: "Employer-based — your employer&apos;s written practice + their Level III certify you", pcn: "Central / third-party — independent body (BINDT) certifies you, portable between employers" },
    { factor: "Geography accepted", asnt: "USA, Mexico, Canada (often), South America, Middle East (mixed), aerospace globally via NAS 410", pcn: "UK, EU, Middle East (heavy), Asia, Africa, anywhere ISO 9712 is referenced — most ISO 17025 lab work" },
    { factor: "Exam structure", asnt: "General + Specific (employer-written) + Practical, plus Level III basic & method exams", pcn: "Standardised general + specific + practical exams set by BINDT, identical for every candidate worldwide" },
    { factor: "Pre-exam training hours", asnt: "Per SNT-TC-1A recommendations: UT-II 80 hrs, RT-II 80 hrs, MT-II 24 hrs, PT-II 24 hrs (employer can deviate)", pcn: "ISO 9712 mandatory minimums: UT-II 80 hrs, RT-II 80 hrs, MT-II 24 hrs, PT-II 24 hrs (no deviation)" },
    { factor: "Experience required (Level II)", asnt: "Per employer&apos;s written practice (often mirrors SNT-TC-1A: UT 9 mo, RT 9 mo, MT 4 mo, PT 4 mo)", pcn: "Mandatory ISO 9712 minimums — UT 9 months, RT 9 months, MT 3 months, PT 3 months (independently verified)" },
    { factor: "Typical 2026 exam cost", asnt: "$200 – $400 per method (Level II); $400–$750 for Level III", pcn: "£250 – £450 per method (~$320–$575) Level II; £600+ for Level III approval" },
    { factor: "Total cert cost (training + exam)", asnt: "$1,500 – $4,000 per method (Level II) including training", pcn: "£1,800 – £4,500 per method (~$2,300–$5,750) including approved training" },
    { factor: "Recertification interval", asnt: "5 years (Level I, II); Level III 5 years via ACCP/ASNT", pcn: "5 years (renewal with vision + employer letter); 10-year full re-examination" },
    { factor: "Portability between employers", asnt: "Limited — new employer must re-certify under their written practice (often via grandfathering exam)", pcn: "Fully portable — certificate is yours, valid at any employer worldwide" },
    { factor: "Aerospace acceptance", asnt: "Dominant in US aerospace via NAS 410 (which references SNT-TC-1A)", pcn: "Dominant in EU aerospace via EN 4179 (which references ISO 9712 / PCN)" },
    { factor: "Oil & gas employer preference", asnt: "US Gulf Coast, North America, parts of Saudi Aramco, ADNOC contractors", pcn: "UKCS / North Sea, Saudi Aramco preferred for many roles, ADNOC, Qatar Energy, Shell global, BP global" },
    { factor: "Best for…", asnt: "Inspectors based in or working primarily for US-headquartered operators / EPCs", pcn: "Inspectors targeting international rotation, EU/UK work, ISO-driven supply chains" },
];

const faqs = [
    { question: "Is ASNT or PCN better in 2026?", answer: "Neither is universally better — it depends entirely on where you work. ASNT (SNT-TC-1A) dominates US oil & gas, US aerospace (via NAS 410), and the broader Americas. PCN (the UK scheme operating under ISO 9712) dominates UK / North Sea, EU industrial work, EU aerospace (via EN 4179), and most ISO 17025 lab environments. For Middle East, both are widely accepted but specific operators have preferences — Saudi Aramco and many EU-spec contractors prefer PCN; US-affiliated contractors lean ASNT. If you plan to rotate internationally or work for ISO-driven employers, PCN is more portable. If you&rsquo;re career-anchored in the US Gulf Coast or North American aerospace, ASNT is the practical default." },
    { question: "Can I hold both ASNT and PCN certifications?", answer: "Yes — and many senior inspectors do. There&rsquo;s no conflict. Holding both maximises employability across regions and removes the &lsquo;recertification gap&rsquo; problem when changing employers across the ASNT/ISO divide. The cost of dual certification is roughly 1.8x single certification (training overlaps significantly; exam fees are independent). Most Level III professionals on global oil & gas rotations carry ASNT Level III + PCN Level III in their primary methods (UT, RT, often MT/PT)." },
    { question: "Does my ASNT cert work in the UK or EU?", answer: "Generally no — at least not directly. UK/EU employers and ISO 17025 labs require ISO 9712 certification (PCN, CSWIP, or equivalent national scheme). Some EU operators accept ASNT under bilateral employer-by-employer agreements, but it&rsquo;s discretionary. For aerospace specifically: NAS 410 (US) and EN 4179 (EU) recognise each other under controlled conditions but it&rsquo;s a mutual-recognition framework, not automatic conversion. Plan for re-examination under PCN if you&rsquo;re relocating to the UK or EU long-term." },
    { question: "What&rsquo;s the difference between SNT-TC-1A and ISO 9712?", answer: "SNT-TC-1A is a recommended practice — it gives the employer flexibility to write their own qualification scheme as long as minimums are met. The employer&rsquo;s Level III is the certifying authority. ISO 9712 is a mandatory standard — it specifies fixed training hours, fixed experience minimums, and central third-party certification through an accredited body (PCN, CSWIP, ACCP-CGSB, etc.). The practical effect: ASNT certs are tied to your employer; ISO 9712 certs are tied to you personally and travel with you." },
];

export default function AsntVsPcn() {
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
                "headline": "ASNT vs PCN / ISO 9712 — NDT Certification Comparison 2026",
                "datePublished": "2026-05-03",
                "dateModified": "2026-05-03",
                "author": { "@type": "Person", "name": "Anoop Rayavarapu", "jobTitle": "ASNT Level III" },
                "publisher": { "@id": "https://atlantisndt.com/#organization" },
                "mainEntityOfPage": { "@type": "WebPage", "@id": "https://atlantisndt.com/compare/asnt-vs-pcn" }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="ASNT vs PCN / ISO 9712 — NDT Certification Comparison (2026 Cost & Recognition)"
                description="ASNT vs PCN side-by-side for 2026: SNT-TC-1A vs ISO 9712, US vs international acceptance, exam structure, $200–$575 fees, recert cycle. Choose the right NDT cert."
                keywords="ASNT vs PCN, SNT-TC-1A vs ISO 9712, NDT certification comparison, PCN certification, ASNT certification, NDT cert cost, ISO 9712 vs ASNT"
                canonical="https://atlantisndt.com/compare/asnt-vs-pcn"
                structuredData={structuredData}
                faq={faqs}
            />
                    <TableOfContents items={[{ id: "overview", label: "Comparison Overview" }, { id: "matrix", label: "Feature Matrix" }, { id: "verdict", label: "When Each Wins" }, { id: "faq", label: "FAQ" }]} />
        <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-indigo-700 to-purple-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-purple-200 mb-4"><Globe className="w-5 h-5" /><span>Certification Comparison</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">ASNT vs PCN / ISO 9712 — Which NDT Cert Wins in 2026?</h1>
                        <p className="text-xl text-purple-100 max-w-3xl mb-8">Side-by-side breakdown of the two dominant NDT personnel-certification schemes — SNT-TC-1A (US, employer-based) versus PCN/ISO 9712 (international, third-party). Geography, cost, portability, and employer recognition.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Talk to a Level III</Link>
                            <Link to="/asnt-certification" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">ASNT Certification Detail</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Quick verdict */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-5xl px-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="border-t-4 border-t-blue-600">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-3"><Award className="w-6 h-6 text-blue-600" /><h3 className="text-xl font-bold">Pick ASNT if&hellip;</h3></div>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You work for or target US-headquartered operators / EPCs</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Your career is anchored in US Gulf Coast / North America</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You&rsquo;re in US aerospace (NAS 410 references SNT-TC-1A)</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />Your employer has a strong written practice and Level III</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You want lower exam cost ($200–$400 per method)</li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-purple-600">
                            <CardContent className="p-6">
                                <div className="flex items-center gap-2 mb-3"><Globe className="w-6 h-6 text-purple-600" /><h3 className="text-xl font-bold">Pick PCN / ISO 9712 if&hellip;</h3></div>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You want a portable cert that travels between employers</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You&rsquo;re targeting UK / North Sea / EU work</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You work in an ISO 17025-accredited lab</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You plan international rotations (Middle East, Asia, Africa)</li>
                                    <li className="flex gap-2"><CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />You&rsquo;re in EU aerospace (EN 4179 references ISO 9712)</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Detailed comparison */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Side-by-Side Comparison</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Every factor that matters when an inspector chooses a personnel-certification scheme.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Factor</th>
                                    <th className="px-4 py-3 text-left text-blue-200">ASNT (SNT-TC-1A)</th>
                                    <th className="px-4 py-3 text-left text-purple-200">PCN / ISO 9712</th>
                                </tr>
                            </thead>
                            <tbody>
                                {compareRows.map((row, i) => (
                                    <tr key={row.factor} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-4 py-3 font-medium text-sm align-top">{row.factor}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm align-top">{row.asnt}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm align-top">{row.pcn}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Geography breakdown */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Geography &amp; Employer Acceptance Map</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">A concrete breakdown by region — what dominant contractors actually accept on-site in 2026.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { region: "USA (Gulf Coast, refining)", winner: "ASNT", note: "Default for ExxonMobil, Chevron, Phillips 66, Marathon contractor pool. PCN tolerated for international hires." },
                            { region: "Canada", winner: "ASNT + CGSB", note: "CGSB (federal) often required alongside ASNT; PCN accepted for offshore Newfoundland." },
                            { region: "UK / North Sea", winner: "PCN", note: "Operator-mandated for Equinor, Shell UKCS, Harbour Energy. ASNT rarely accepted standalone." },
                            { region: "EU industrial / process", winner: "PCN / ISO 9712", note: "ISO 9712 reference is hard requirement in most EN 1090 fab shops and ISO 17025 labs." },
                            { region: "Saudi Arabia (Aramco)", winner: "Both — Aramco-specific cert", note: "SAEP & Aramco written practice required on top of ASNT or PCN. Many roles prefer PCN." },
                            { region: "UAE (ADNOC)", winner: "Both accepted", note: "ADNOC contractor pool mixed; PCN slight edge for EU/UK contractor mobilisations." },
                            { region: "Qatar (QatarEnergy)", winner: "PCN slight edge", note: "EN-spec construction; PCN preferred. ASNT accepted with bridging." },
                            { region: "India", winner: "ASNT (with NCB schemes growing)", note: "Most O&G inspectors hold ASNT; ISNT/NCB-IBR also accepted. PCN rare." },
                            { region: "Australia", winner: "ISO 9712 (AINDT)", note: "Australian Institute for NDT operates ISO 9712 scheme; ASNT accepted but secondary." },
                            { region: "US aerospace", winner: "ASNT via NAS 410", note: "Boeing, Lockheed, Spirit primes mandate NAS 410 / SNT-TC-1A." },
                            { region: "EU aerospace", winner: "PCN via EN 4179", note: "Airbus, Safran, Rolls-Royce primes mandate EN 4179 / ISO 9712." },
                            { region: "Nuclear", winner: "Region-dependent", note: "US nuclear: ASNT CP-189. UK/EU nuclear: PCN. Both reference ISO 9712 in newer plants." },
                        ].map((r) => (
                            <Card key={r.region} className="border-l-4 border-l-indigo-500">
                                <CardContent className="p-5">
                                    <div className="font-semibold text-indigo-700 mb-1">{r.region}</div>
                                    <div className="text-xs text-slate-500 mb-2">Winner: <span className="font-semibold text-slate-700">{r.winner}</span></div>
                                    <p className="text-sm text-slate-600">{r.note}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>ASNT vs PCN — Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <details key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                                    {faq.question}
                                    <span className="text-indigo-700 text-xl ml-4 flex-shrink-0">+</span>
                                </summary>
                                <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.answer}</div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-10">Related Certification Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/asnt-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-indigo-700">ASNT Certification Guide</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Full ASNT Level I, II, III pathway — SNT-TC-1A, CP-189, ACCP, exam costs and recert cycle.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/asnt-level-iii-training" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-indigo-700">ASNT Level III Training</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Basic exam + method exam prep, code references, and exam-day strategy.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/ndt-certification-guide" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-blue-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-indigo-700">All NDT Certifications</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Compare ASNT, PCN, CSWIP, API, AWS — every recognised scheme in one table.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/training" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-purple-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-indigo-700">NDT Training Courses</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Method-specific Level I/II/III training in Houston, Dubai, Hyderabad and online.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/consulting" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-purple-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-indigo-700">Cert Program Consulting</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Build your employer&rsquo;s SNT-TC-1A written practice, audit prep, Level III oversight.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/ndt-technician-salary" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-purple-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-indigo-700">NDT Technician Salary</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">2026 salary ranges by region, certification, and method.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-indigo-700 to-purple-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Still Not Sure Which Scheme to Pursue?</h2>
                    <p className="text-purple-100 mb-8 text-lg">Talk to a multi-certified ASNT Level III who&rsquo;s walked both paths. We&rsquo;ll map your career goals to the right certification stack.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Free 30-Min Career Call</Link>
                        <Link to="/training" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">View Training</Link>
                    </div>
                </div>
            </section>
        <RelatedGuidesBlock links={[
  {
    "title": "Atlantis Digital Twin Platform",
    "href": "/digital-twins",
    "description": "Atlantis DT platform hub",
    "icon": "dt"
  },
  {
    "title": "Digital Twin ROI Calculator",
    "href": "/digital-twin-roi-calculator",
    "description": "Worked examples",
    "icon": "dt"
  },
  {
    "title": "Digital Twin Readiness Quiz",
    "href": "/digital-twin-readiness-quiz",
    "description": "Maturity assessment",
    "icon": "dt"
  },
  {
    "title": "ASNT Level III Consulting",
    "href": "/consulting/asnt-level-iii-consulting-services",
    "description": "Outsourced Level III of record",
    "icon": "consulting"
  },
  {
    "title": "Atlantis NDT ERP Hub",
    "href": "/erp",
    "description": "Affordable Odoo-based ERP",
    "icon": "erp"
  },
  {
    "title": "ASNT Certification Path",
    "href": "/asnt-certification",
    "description": "Level I/II/III prep",
    "icon": "cert"
  }
]} />

        <ContactDetails />
        </div>
    );
}
