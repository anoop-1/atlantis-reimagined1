// CTR_OVERRIDES suggestion (for prerender.mjs):
//   "/api-570-india": {
//     title: "API 570 India 2026 — Exam Centres, ₹60K Fee, ₹15L–₹32L Piping Inspector Salary",
//     description: "API 570 piping inspector in India: Mumbai/Hyderabad/Delhi/Chennai exam centres, 2026 INR pricing ₹60K–₹85K, ₹15L–₹32L salary at IOCL/BPCL/Reliance."
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
    { city: "Mumbai", venue: "Prometric centres (multiple)", note: "Best slot availability; preferred for Reliance / RIL / Tata Projects candidates" },
    { city: "Hyderabad", venue: "Prometric centres (Madhapur / Begumpet)", note: "Atlantis NDT operates a training centre here — full prep + exam logistics support" },
    { city: "Delhi NCR", venue: "Prometric centres (CP / Gurgaon)", note: "IOCL HQ, GAIL, NTPC, Engineers India Ltd candidates" },
    { city: "Chennai", venue: "Prometric centres (Anna Nagar)", note: "Serves CPCL, IOCL Chennai, MRPL, southern EPC candidates" },
    { city: "Bangalore", venue: "Prometric centres (Whitefield)", note: "Growing aerospace and EPC piping demand" },
    { city: "Pune", venue: "Prometric centres", note: "Manufacturing and process-piping candidates from western India" },
    { city: "Kolkata", venue: "Prometric centres", note: "Eastern region IOCL Haldia, IBP, HPCL candidates" },
    { city: "Ahmedabad", venue: "Prometric centres", note: "GSPC, Reliance Jamnagar, ONGC piping candidates" },
];

const costBreakdown = [
    { item: "API 570 exam fee (member)", inr: "₹60,000 – ₹65,000", usd: "~$730", note: "Paid in USD; same fee structure as API 510 / 653" },
    { item: "API 570 exam fee (non-member)", inr: "₹78,000 – ₹85,000", usd: "~$930", note: "API membership ~$185/yr — worth it for 2+ certs" },
    { item: "5-day classroom prep (India)", inr: "Quote on request", usd: "Quote on request", note: "Atlantis NDT, ARC, IIW, Quality Austria" },
    { item: "Online self-paced prep", inr: "₹15,000 – ₹35,000", usd: "$180 – $420", note: "Recorded video + B31.3 walkthrough + mock exams" },
    { item: "Code books (incl. ASME B31.3)", inr: "₹45,000 – ₹1,00,000", usd: "$540 – $1,200", note: "B31.3 is the heavyweight; B16.5 flange tables included" },
    { item: "Re-take exam fee", inr: "₹42,000 – ₹50,000", usd: "$510 – $605", note: "Discounted within 6 months of failed attempt" },
    { item: "Total first-attempt budget", inr: "₹1.5L – ₹2.9L", usd: "$1,810 – $3,500", note: "Excluding code books if employer-supplied" },
];

const salaryBands = [
    { role: "Junior API 570 Inspector (1–3 yrs post-cert)", privatePsu: "₹8L – ₹14L per annum", contract: "₹40K – ₹65K per month", note: "Often via TPI — Bureau Veritas, TÜV India, DNV, SGS" },
    { role: "Mid-level API 570 Inspector (3–7 yrs)", privatePsu: "₹14L – ₹22L per annum", contract: "₹65K – ₹1.3L per month", note: "Refinery / petrochemical site inspection lead roles" },
    { role: "Senior Piping Inspector (7–12 yrs)", privatePsu: "₹22L – ₹35L per annum", contract: "₹1.3L – ₹2.2L per month", note: "Often paired with API 510 / 653; small-bore piping IM specialist" },
    { role: "Lead / Principal Piping Inspector (12+ yrs)", privatePsu: "₹35L – ₹55L per annum", contract: "₹2.2L – ₹3.5L+ per month", note: "Typically also ASNT Level III; consultant or operator-side" },
    { role: "Middle East rotation (Indian passport)", privatePsu: "USD $80K – $135K + benefits", contract: "$430 – $720/day", note: "Tax-free; ARAMCO, ADNOC, QP, Petrofac active recruiters" },
];

const employers = [
    "Reliance Industries (Jamnagar, Dahej)", "Indian Oil (IOCL)", "Bharat Petroleum (BPCL)",
    "Hindustan Petroleum (HPCL)", "ONGC", "GAIL India", "Petronet LNG", "CPCL Chennai",
    "MRPL Mangalore", "Adani Group", "Bureau Veritas India", "TÜV India", "TÜV Rheinland",
    "DNV India", "Lloyd&rsquo;s Register", "SGS India", "Apave India", "Velosi (Applus)",
    "Larsen &amp; Toubro Hydrocarbon", "Tata Projects", "Engineers India Ltd (EIL)", "Petrofac India",
    "Wood Group India", "Worley India",
];

const faqs = [
    { question: "Where can I take the API 570 exam in India?", answer: "API 570 exams are administered through Prometric test centres across India — primary centres in Mumbai, Hyderabad, Delhi NCR, Chennai, Bangalore, Pune, Kolkata, and Ahmedabad. Register at api.org 8–12 weeks ahead of your preferred window. Slot availability is best in Mumbai and Hyderabad. Prometric handles ID verification, scratch-pad provision, and printed-code-book inspection per API policy on exam day." },
    { question: "What salary can I earn as an API 570 piping inspector in India?", answer: "Junior (1–3 years post-cert): ₹8L–₹14L per annum permanent or ₹40K–₹65K/month on contract. Mid-level (3–7 years): ₹14L–₹22L per annum at refinery / petrochemical operator and TPI tier. Senior (7–12 years, often with API 510 stacked): ₹22L–₹35L per annum. Lead / Principal (12+ years, often ASNT Level III): ₹35L–₹55L+ per annum. Indian passport-holders rotating to Middle East (ARAMCO, ADNOC, QatarEnergy) typically earn $80K–$135K USD tax-free plus housing — meaningful uplift over India-domestic rates." },
    { question: "API 510 or API 570 — which should an Indian inspector get first?", answer: "Most Indian candidates start with whichever matches their day-job — API 570 if you&rsquo;re a piping inspector at an EPC, refinery turnaround team, or fabrication shop; API 510 if you&rsquo;re a vessel-side inspector at a refinery or petrochemical complex. The exam structure is identical (171 questions, 7.5 hours, open + closed book, $730 fee), so the prep skills transfer almost entirely. Holding both adds ₹3L–₹6L to your annual package and dramatically widens your job pool. Senior fixed-equipment professionals typically stack API 510 + 570 + 653 (the &lsquo;triple cert&rsquo;)." },
    { question: "Which Indian employers value API 570 piping inspectors most?", answer: "Operator-side: Reliance Industries (Jamnagar — world&rsquo;s largest refining complex, massive piping inspection program), IOCL refineries, BPCL Kochi, HPCL Visakh, ONGC, GAIL pipelines. Third-party inspection (TPI): Bureau Veritas India, TÜV India, TÜV Rheinland, DNV, Lloyd&rsquo;s Register, SGS, Apave, Velosi. EPC and contractor: L&amp;T Hydrocarbon (massive piping fab capacity), Tata Projects, Engineers India Ltd, Petrofac India, Wood Group, Worley. Pipeline operators (GAIL, IndianOil pipelines, Petronet LNG) value API 570 alongside pipeline-specific certifications." },
];

export default function Api570India() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://atlantisndt.com/api-570-india#service",
                "name": "API 570 Piping Inspector Training & Exam Prep — India",
                "serviceType": "Professional Certification Training",
                "description": "API 570 piping inspector exam preparation for Indian candidates. Classroom in Hyderabad, online self-paced, employer corporate batches. Mumbai / Delhi / Chennai exam centre logistics, INR pricing, ₹15L–₹35L salary guidance.",
                "provider": { "@id": "https://atlantisndt.com/#organization" },
                "areaServed": { "@type": "Country", "name": "India" },
                "audience": { "@type": "BusinessAudience", "audienceType": "Piping inspectors, refinery / petrochemical / EPC candidates" },
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
                title="API 570 India 2026 — Exam Centres, ₹60K Fee, ₹14L–₹35L Piping Inspector Salary"
                description="API 570 in India: Mumbai/Hyderabad/Delhi/Chennai exam centres, 2026 INR pricing ₹60K–₹85K exam, ₹35K–₹85K prep, ₹14L–₹35L salary at IOCL/BPCL/Reliance."
                keywords="API 570 India, API 570 exam India, API 570 Mumbai, API 570 Hyderabad, API 570 cost India, API 570 salary India, piping inspector India"
                canonical="https://atlantisndt.com/api-570-india"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-red-600 to-orange-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-red-200 mb-4"><MapPin className="w-5 h-5" /><span>India — Regional Certification Guide</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 570 in India — 2026 Complete Guide</h1>
                        <p className="text-xl text-red-100 max-w-3xl mb-8">Process piping inspector certification for Indian candidates: Mumbai, Hyderabad, Delhi, Chennai exam centres, local INR pricing (₹60K–₹85K exam, ₹35K–₹85K prep), and 2026 salary bands at Reliance, IOCL, BPCL, L&amp;T, and TPI firms.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll in Hyderabad Class</Link>
                            <Link to="/api-570-certification" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Global API 570 Detail</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-red-600 mb-2">8</div><div className="text-slate-600">Indian Exam Cities</div></div>
                        <div><div className="text-4xl font-bold text-red-600 mb-2">₹60K+</div><div className="text-slate-600">Exam Fee (USD $730)</div></div>
                        <div><div className="text-4xl font-bold text-red-600 mb-2">₹14L–₹35L</div><div className="text-slate-600">Mid-Level Salary</div></div>
                        <div><div className="text-4xl font-bold text-red-600 mb-2">3 Yrs</div><div className="text-slate-600">Cert Validity</div></div>
                    </div>
                </div>
            </section>

            {/* Why API 570 in India */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why API 570 Matters for Indian Piping Inspectors</h2>
                            <p className="text-lg text-slate-600 mb-4">India runs over 20 operating refineries, dozens of petrochemical complexes, and a fast-expanding gas pipeline grid. Process piping per ASME B31.3 carries the entire production chain — and the operator&rsquo;s API 570-certified inspector is the named individual who signs off remaining-life calculations, repair authorisations, and turnaround scope.</p>
                            <p className="text-slate-600 mb-4">For Indian candidates, API 570 is also a ticket to lucrative Middle East rotations. ARAMCO&rsquo;s mega-refining and gas-processing programs (Jafurah, Aramco-Rabigh II), ADNOC&rsquo;s downstream expansion, and QatarEnergy LNG trains all actively recruit API 570 Indian inspectors at $80K–$135K USD tax-free packages.</p>
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                                <p className="text-red-900 text-sm"><strong>Atlantis NDT in India:</strong> Hyderabad training centre running quarterly API 570 classroom batches with mock-exam-day rehearsal. Online self-paced enrollments year-round; corporate batches at refinery sites for groups of 8+.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Building2 className="w-5 h-5 text-red-600" />Top Indian Employers Hiring API 570</h3>
                            <div className="bg-white rounded-xl shadow-sm p-5">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700">
                                    {employers.map(e => (
                                        <div key={e} className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                            <span dangerouslySetInnerHTML={{ __html: e }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Operator-side roles typically permanent; TPI &amp; EPC roles often contract with project-extension renewals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exam centres */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">API 570 Exam Centres in India</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">All API exams in India are administered through Prometric. Register on api.org 8–12 weeks ahead of your preferred exam window for best slot availability.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {examCenters.map((c) => (
                            <Card key={c.city} className="border-l-4 border-l-red-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin className="w-4 h-4 text-red-600" />
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
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Realistic line-item budget. Exam fee paid in USD directly to API; everything else can be paid in INR.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-red-700 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Item</th>
                                    <th className="px-4 py-3 text-left">INR</th>
                                    <th className="px-4 py-3 text-left">USD equiv.</th>
                                    <th className="px-4 py-3 text-left">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costBreakdown.map((c, i) => (
                                    <tr key={c.item} className={i % 2 === 0 ? "bg-white" : "bg-red-50"}>
                                        <td className="px-4 py-3 font-medium text-sm">{c.item}</td>
                                        <td className="px-4 py-3 text-red-700 font-semibold text-sm">{c.inr}</td>
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
                    <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2"><IndianRupee className="w-7 h-7 text-red-600" />API 570 Salary Bands in India (2026)</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Ranges reflect 2026 Indian market data across operator (Reliance, IOCL, BPCL, HPCL), TPI (BV, TÜV, DNV, SGS), and EPC (L&amp;T Hydrocarbon, Tata Projects, EIL) employers.</p>
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
                                        <td className="px-4 py-3 text-red-700 font-semibold text-sm">{s.privatePsu}</td>
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
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>API 570 India — Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <details key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                                    {faq.question}
                                    <span className="text-red-700 text-xl ml-4 flex-shrink-0">+</span>
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
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-red-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-red-700">API 510 India</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Pressure vessel inspector certification — Indian exam centres, INR pricing, salary.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-653-india" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-red-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-red-700">API 653 India</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Storage tank inspector certification — Indian exam logistics and salary bands.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/hyderabad-training" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-red-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-red-700">Hyderabad Training Centre</h3>
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
                                        <h3 className="font-bold text-slate-800 group-hover:text-red-700">India NDT Training</h3>
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
                                        <h3 className="font-bold text-slate-800 group-hover:text-red-700">India Consulting</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Pan-India ASNT Level III consulting and TPI services for refineries and EPCs.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-570-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-orange-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-red-700">Global API 570 Guide</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Full API 570 certification detail — exam structure, codes, recert, USA salary.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-red-600 to-orange-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <Award className="w-12 h-12 mx-auto mb-4 text-red-200" />
                    <h2 className="text-3xl font-bold mb-4">Ready to Sit API 570 in India?</h2>
                    <p className="text-red-100 mb-8 text-lg">Hyderabad classroom batches every quarter; online self-paced year-round; corporate batches at your refinery site for groups of 8+.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Enroll Now</Link>
                        <Link to="/api-510-india" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 510 India</Link>
                        <Link to="/api-653-india" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 653 India</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
