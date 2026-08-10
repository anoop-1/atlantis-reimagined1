// CTR_OVERRIDES suggestion (for prerender.mjs):
//   "/api-653-india": {
//     title: "API 653 India 2026 — Tank Inspector Exam Centres, ₹60K Fee, ₹14L–₹32L Salary",
//     description: "API 653 storage tank inspector in India: Mumbai/Hyderabad/Delhi/Chennai exam centres, 2026 INR pricing ₹60K–₹85K, ₹14L–₹32L salary at IOCL/BPCL/Reliance terminals."
//   }

import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, ArrowRight, IndianRupee, Building2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const examCenters = [
    { city: "Mumbai", venue: "Prometric centres (multiple)", note: "Best slot availability; convenient for Reliance, BPCL Mahul, HPCL Mumbai candidates" },
    { city: "Hyderabad", venue: "Prometric centres (Madhapur / Begumpet)", note: "Atlantis NDT operates a training centre here — full prep + exam logistics" },
    { city: "Delhi NCR", venue: "Prometric centres (CP / Gurgaon)", note: "IOCL HQ, GAIL, BPCL, NTPC, EIL candidates" },
    { city: "Chennai", venue: "Prometric centres (Anna Nagar)", note: "Serves CPCL, IOCL Chennai, MRPL, southern terminal candidates" },
    { city: "Bangalore", venue: "Prometric centres (Whitefield)", note: "Aviation jet-fuel terminal and EPC candidates" },
    { city: "Pune", venue: "Prometric centres", note: "Serves western India fab shops and storage operators" },
    { city: "Kolkata", venue: "Prometric centres", note: "IOCL Haldia, Paradip terminal, eastern oil-marketing candidates" },
    { city: "Ahmedabad", venue: "Prometric centres", note: "GSPC, Reliance Jamnagar, Adani Hazira terminal candidates" },
];

const costBreakdown = [
    { item: "API 653 exam fee (member)", inr: "₹60,000 – ₹65,000", usd: "~$730", note: "Paid in USD; same fee schedule as API 510 / 570" },
    { item: "API 653 exam fee (non-member)", inr: "₹78,000 – ₹85,000", usd: "~$930", note: "API membership ~$185/yr useful for multi-cert candidates" },
    { item: "5-day classroom prep (India)", inr: "Quote on request", usd: "Quote on request", note: "Atlantis NDT, ARC, IIW, Quality Austria, regional providers" },
    { item: "Online self-paced prep", inr: "₹15,000 – ₹35,000", usd: "$180 – $420", note: "Recorded video + Appendix C walkthrough + mock exams" },
    { item: "Code books (10 codes incl. API 650)", inr: "₹50,000 – ₹1,10,000", usd: "$600 – $1,325", note: "API 650/651/652/653/571/579 + ASME V/VIII/IX — heaviest stack" },
    { item: "Re-take exam fee", inr: "₹42,000 – ₹50,000", usd: "$510 – $605", note: "Discounted within 6 months of failed attempt" },
    { item: "Total first-attempt budget", inr: "₹1.6L – ₹3.0L", usd: "$1,930 – $3,625", note: "Tank inspector cert has the heaviest code book set" },
];

const salaryBands = [
    { role: "Junior API 653 Inspector (1–3 yrs post-cert)", privatePsu: "₹8L – ₹14L per annum", contract: "₹40K – ₹65K per month", note: "Often via TPI — Bureau Veritas, TÜV India, DNV, SGS" },
    { role: "Mid-level API 653 Inspector (3–7 yrs)", privatePsu: "₹14L – ₹22L per annum", contract: "₹65K – ₹1.3L per month", note: "Terminal / refinery tank inspection lead roles" },
    { role: "Senior Tank Inspector (7–12 yrs)", privatePsu: "₹22L – ₹32L per annum", contract: "₹1.3L – ₹2.0L per month", note: "Often paired with API 510 / 570; MFL floor-scan specialist" },
    { role: "Lead / Principal Tank Inspector (12+ yrs)", privatePsu: "₹32L – ₹50L per annum", contract: "₹2.0L – ₹3.2L+ per month", note: "Typically also ASNT Level III; consultant or operator-side" },
    { role: "Middle East rotation (Indian passport)", privatePsu: "USD $80K – $135K + benefits", contract: "$430 – $720/day", note: "Tax-free; ARAMCO, ADNOC tank-farm programs active recruiters" },
];

const employers = [
    "Indian Oil (IOCL terminals nationwide)", "Bharat Petroleum (BPCL marketing terminals)",
    "Hindustan Petroleum (HPCL terminals)", "Reliance Industries (Jamnagar tank farms)",
    "ONGC (crude storage)", "GAIL India (LPG bullets)", "Petronet LNG (cryogenic)",
    "Adani Group (port terminals)", "Vopak India (third-party storage)",
    "IMC (Inland container terminals)", "Bureau Veritas India", "TÜV India",
    "TÜV Rheinland", "DNV India", "Lloyd&rsquo;s Register", "SGS India",
    "Apave India", "Velosi (Applus)", "L&amp;T Hydrocarbon", "Tata Projects",
    "Engineers India Ltd (EIL)", "Petrofac India",
];

const faqs = [
    { question: "Where can I take the API 653 exam in India?", answer: "API 653 exams are administered through Prometric test centres across India — primary centres in Mumbai, Hyderabad, Delhi NCR, Chennai, Bangalore, Pune, Kolkata, and Ahmedabad. Register on api.org 8–12 weeks ahead of your preferred exam window. Mumbai and Hyderabad have the best slot availability. Prometric handles ID verification, scratch-pad provision, and printed-code-book inspection on exam day per API policy." },
    { question: "What salary can I earn as an API 653 tank inspector in India?", answer: "Junior (1–3 years post-cert): ₹8L–₹14L per annum permanent or ₹40K–₹65K/month contract. Mid-level (3–7 years): ₹14L–₹22L per annum at terminal / refinery operator and TPI tier. Senior (7–12 years, often with API 510/570 stacked): ₹22L–₹32L per annum. Lead / Principal (12+ years, often ASNT Level III too): ₹32L–₹50L+ per annum. Indian passport-holders rotating to Middle East (ARAMCO terminal programs, ADNOC export terminals) typically earn $80K–$135K USD tax-free plus housing — significant uplift over India-domestic rates." },
    { question: "How is tank inspection different from vessel/piping inspection in India?", answer: "API 653 covers aboveground storage tanks (AST) per API 650 — largely floor-and-shell inspection of low-pressure storage assets. Day-to-day work is dominated by floor MFL scans, shell-course UT thickness, settlement surveys, vacuum-box testing of floor welds, cathodic-protection assessment, and remaining-life calculations against API 653 retirement criteria. India&rsquo;s 200+ MMTPA refining capacity means thousands of operating storage tanks across IOCL/BPCL/HPCL marketing terminals, refinery crude/product storage, and third-party tank farms — all needing API 653 inspection on 5-year (external) and 10-year (internal) cycles. Compared to API 510 vessels (process units) and API 570 piping (transfer lines), API 653 is more time-bounded (10-year internal cycle drives a clear inspection calendar) and less continuous." },
    { question: "Which Indian employers value API 653 tank inspectors most?", answer: "Operator-side: Indian Oil (largest tank-farm operator with 20+ marketing terminals nationwide), BPCL, HPCL marketing terminals, Reliance Jamnagar tank farms, Adani port terminals, Vopak third-party storage. Pipeline operators with intermediate-storage requirements (GAIL LPG bullets, Petronet LNG cryogenic tanks). Third-party inspection: Bureau Veritas, TÜV India, TÜV Rheinland, DNV, Lloyd&rsquo;s Register, SGS, Apave, Velosi. EPC: L&amp;T Hydrocarbon, Tata Projects, Engineers India Ltd, Petrofac India. The API 653 cert often gets stacked with API 510 / 570 for senior fixed-equipment roles at refineries with all three asset classes." },
];

export default function Api653India() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://atlantisndt.com/api-653-india#service",
                "name": "API 653 Aboveground Storage Tank Inspector Training & Exam Prep — India",
                "serviceType": "Professional Certification Training",
                "description": "API 653 storage tank inspector exam preparation for Indian candidates. Classroom in Hyderabad, online self-paced, employer corporate batches. Mumbai / Delhi / Chennai exam centre logistics, INR pricing, ₹14L–₹32L salary guidance.",
                "provider": { "@id": "https://atlantisndt.com/#organization" },
                "areaServed": { "@type": "Country", "name": "India" },
                "audience": { "@type": "BusinessAudience", "audienceType": "Storage tank inspectors, terminal / refinery / LNG candidates" },
                "offers": {
                    "@type": "Offer",
                    "availability": "https://schema.org/InStock"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(f => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": { "@type": "Answer", "text": f.answer }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="API 653 India 2026 — Tank Inspector Exam Centres, ₹60K Fee, ₹14L–₹32L Salary"
                description="API 653 in India: Mumbai/Hyderabad/Delhi/Chennai exam centres, 2026 INR pricing ₹60K–₹85K exam, ₹35K–₹85K prep, ₹14L–₹32L salary at IOCL/BPCL/Reliance terminals."
                keywords="API 653 India, API 653 exam India, API 653 Mumbai, API 653 Hyderabad, API 653 cost India, API 653 salary India, tank inspector India"
                canonical="https://atlantisndt.com/api-653-india"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-amber-200 mb-4"><MapPin className="w-5 h-5" /><span>India — Regional Certification Guide</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 653 in India — 2026 Complete Guide</h1>
                        <p className="text-xl text-amber-100 max-w-3xl mb-8">Aboveground storage tank inspector certification for Indian candidates: Mumbai, Hyderabad, Delhi, Chennai exam centres, local INR pricing (₹60K–₹85K exam, ₹35K–₹85K prep), and 2026 salary bands at IOCL marketing terminals, Reliance Jamnagar, and TPI firms.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll in Hyderabad Class</Link>
                            <Link to="/api-653-certification" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Global API 653 Detail</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">8</div><div className="text-slate-600">Indian Exam Cities</div></div>
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">₹60K+</div><div className="text-slate-600">Exam Fee (USD $730)</div></div>
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">₹14L–₹32L</div><div className="text-slate-600">Mid-Level Salary</div></div>
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">3 Yrs</div><div className="text-slate-600">Cert Validity</div></div>
                    </div>
                </div>
            </section>

            {/* Why API 653 in India */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why API 653 Matters for Indian Tank Inspectors</h2>
                            <p className="text-lg text-slate-600 mb-4">India operates thousands of aboveground storage tanks across IOCL marketing terminals (20+ nationwide), BPCL and HPCL distribution networks, refinery crude/product storage at Reliance Jamnagar, IOCL Paradip, BPCL Kochi, HPCL Visakh, and growing third-party tank farms (Adani port terminals, Vopak India, IMC).</p>
                            <p className="text-slate-600 mb-4">Every operating tank above the API 650 threshold needs an API 653-certified inspector to sign off external (5-year) and internal (10-year) inspections, MFL floor scan reports, and remaining-life calculations. With OISD (Oil Industry Safety Directorate) increasingly aligning with API standards in India, certified tank inspectors are in steady demand across operator and TPI markets.</p>
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                                <p className="text-amber-900 text-sm"><strong>Atlantis NDT in India:</strong> Hyderabad training centre running quarterly API 653 classroom batches with mock-exam-day rehearsal and code-navigation drills (10 reference codes is the heaviest stack in the API inspection family). Online self-paced enrollments year-round; corporate batches at terminal sites for groups of 8+.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Building2 className="w-5 h-5 text-amber-600" />Top Indian Employers Hiring API 653</h3>
                            <div className="bg-white rounded-xl shadow-sm p-5">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700">
                                    {employers.map(e => (
                                        <div key={e} className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <span dangerouslySetInnerHTML={{ __html: e }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Marketing-terminal operator roles typically permanent; TPI &amp; EPC roles often contract with project-extension renewals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exam centres */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">API 653 Exam Centres in India</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">All API exams in India are delivered via Prometric. Register at api.org 8–12 weeks ahead of your preferred exam window for slot availability.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {examCenters.map((c) => (
                            <Card key={c.city} className="border-l-4 border-l-amber-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin className="w-4 h-4 text-amber-600" />
                                        <div className="font-bold text-slate-800">{c.city}</div>
                                    </div>
                                    <div className="text-xs text-slate-500 mb-2">{c.venue}</div>
                                    <p className="text-sm text-slate-600">{c.note}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cost breakdown */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">2026 Cost Breakdown (INR &amp; USD)</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Realistic line-item budget. Exam fee paid in USD directly to API; everything else in INR. API 653 has the heaviest code-book stack in the API inspection family.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-amber-700 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Item</th>
                                    <th className="px-4 py-3 text-left">INR</th>
                                    <th className="px-4 py-3 text-left">USD equiv.</th>
                                    <th className="px-4 py-3 text-left">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costBreakdown.map((c, i) => (
                                    <tr key={c.item} className={i % 2 === 0 ? "bg-white" : "bg-amber-50"}>
                                        <td className="px-4 py-3 font-medium text-sm">{c.item}</td>
                                        <td className="px-4 py-3 text-amber-700 font-semibold text-sm">{c.inr}</td>
                                        <td className="px-4 py-3 text-slate-600 text-sm">{c.usd}</td>
                                        <td className="px-4 py-3 text-slate-600 text-xs">{c.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Salary */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2"><IndianRupee className="w-7 h-7 text-amber-600" />API 653 Salary Bands in India (2026)</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Ranges reflect 2026 Indian market data across operator (IOCL, BPCL, HPCL, Reliance, Adani), TPI (BV, TÜV, DNV, SGS), and EPC (L&amp;T Hydrocarbon, Tata Projects, EIL) employers.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Role / Experience</th>
                                    <th className="px-4 py-3 text-left">Operator / TPI Salary</th>
                                    <th className="px-4 py-3 text-left">Contract Day-Rate</th>
                                    <th className="px-4 py-3 text-left">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {salaryBands.map((s, i) => (
                                    <tr key={s.role} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-4 py-3 font-medium text-sm">{s.role}</td>
                                        <td className="px-4 py-3 text-amber-700 font-semibold text-sm">{s.privatePsu}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm">{s.contract}</td>
                                        <td className="px-4 py-3 text-slate-600 text-xs">{s.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>API 653 India — Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <details key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                                    {faq.question}
                                    <span className="text-amber-700 text-xl ml-4 flex-shrink-0">+</span>
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
                    <h2 className="text-3xl font-bold text-center mb-10">Related India Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/api-510-india" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-amber-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700">API 510 India</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Pressure vessel inspector certification — Indian exam centres, INR pricing, salary.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-570-india" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-amber-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700">API 570 India</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Piping inspector certification — Indian exam logistics, INR pricing, salary bands.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/hyderabad-training" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-amber-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700">Hyderabad Training Centre</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Atlantis NDT&rsquo;s India training hub — classroom, online, corporate batches.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/training-india" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-orange-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700">India NDT Training</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">All NDT method-specific training (UT, RT, MT, PT, ECT) for Indian candidates.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/consulting-india" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-orange-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700">India Consulting</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Pan-India ASNT Level III consulting and TPI services for refineries and EPCs.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-653-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-orange-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700">Global API 653 Guide</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Full API 653 certification detail — exam structure, codes, recert, USA salary.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <Award className="w-12 h-12 mx-auto mb-4 text-amber-200" />
                    <h2 className="text-3xl font-bold mb-4">Ready to Sit API 653 in India?</h2>
                    <p className="text-amber-100 mb-8 text-lg">Hyderabad classroom batches every quarter; online self-paced year-round; corporate batches at your terminal site for groups of 8+.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Enroll Now</Link>
                        <Link to="/api-510-india" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 510 India</Link>
                        <Link to="/api-570-india" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 570 India</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
