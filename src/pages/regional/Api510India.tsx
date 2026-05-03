// CTR_OVERRIDES suggestion (for prerender.mjs):
//   "/api-510-india": {
//     title: "API 510 India 2026 — Exam Centres, ₹65K Fee, ₹15L–₹35L Salary Guide",
//     description: "API 510 in India: Mumbai/Hyderabad/Delhi/Chennai exam centres, 2026 cost ₹60K–₹80K, prep classes ₹35K–₹1.2L, ₹15L–₹35L salary at Reliance/IOCL/BPCL."
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
    { city: "Mumbai", venue: "Prometric centres (multiple)", note: "Largest exam-window slot availability; preferred for Reliance / RIL / Tata candidates" },
    { city: "Hyderabad", venue: "Prometric centres (Madhapur / Begumpet)", note: "Atlantis NDT operates a training centre here — full prep + exam logistics support" },
    { city: "Delhi NCR", venue: "Prometric centres (Connaught Place / Gurgaon)", note: "Convenient for IOCL HQ, GAIL, NTPC candidates" },
    { city: "Chennai", venue: "Prometric centres (Anna Nagar)", note: "Serves CPCL, IOCL Chennai, MRPL candidates from south India" },
    { city: "Bangalore", venue: "Prometric centres (Whitefield / Indiranagar)", note: "Growing demand from aerospace and EPC candidates" },
    { city: "Pune", venue: "Prometric centres", note: "Convenient for Tata Motors, Bharat Forge, manufacturing-sector candidates" },
    { city: "Kolkata", venue: "Prometric centres", note: "Eastern region IOCL, HPCL, IBP candidates" },
    { city: "Ahmedabad", venue: "Prometric centres", note: "Convenient for GSPC, Reliance Jamnagar candidates" },
];

const costBreakdown = [
    { item: "API 510 exam fee (member)", inr: "₹60,000 – ₹65,000", usd: "~$730", note: "Paid directly to API in USD; Indian membership ~$185/yr" },
    { item: "API 510 exam fee (non-member)", inr: "₹78,000 – ₹85,000", usd: "~$930", note: "Add API membership separately if planning multiple certs" },
    { item: "5-day classroom prep (India)", inr: "₹35,000 – ₹85,000", usd: "$420 – $1,025", note: "Atlantis NDT, ARC, Indian Institute of Welding, Quality Austria" },
    { item: "Online self-paced prep", inr: "₹15,000 – ₹35,000", usd: "$180 – $420", note: "Recorded video + PDF + mock exams; 12-month access" },
    { item: "Code books (printed set)", inr: "₹40,000 – ₹95,000", usd: "$480 – $1,150", note: "Imported from API USA via local distributors; can be shared" },
    { item: "Re-take exam fee", inr: "₹42,000 – ₹50,000", usd: "$510 – $605", note: "Discounted for failed first attempt within 6 months" },
    { item: "Total first-attempt budget", inr: "₹1.5L – ₹2.8L", usd: "$1,810 – $3,375", note: "Excluding code books if employer-supplied" },
];

const salaryBands = [
    { role: "Junior API 510 Inspector (1–3 yrs post-cert)", privatePsu: "₹8L – ₹15L per annum", contract: "₹40K – ₹70K per month", note: "Contract roles via JLI, Bureau Veritas, TÜV India, Lloyd&rsquo;s Register" },
    { role: "Mid-level API 510 Inspector (3–7 yrs)", privatePsu: "₹15L – ₹25L per annum", contract: "₹70K – ₹1.4L per month", note: "Reliance Jamnagar, IOCL Paradip, BPCL Kochi tier" },
    { role: "Senior API 510 Inspector (7–12 yrs)", privatePsu: "₹25L – ₹40L per annum", contract: "₹1.4L – ₹2.5L per month", note: "Often paired with API 570 / 653; lead inspector roles" },
    { role: "API 510 Lead / Principal Inspector (12+ yrs)", privatePsu: "₹40L – ₹65L per annum", contract: "₹2.5L – ₹4L+ per month", note: "Typically also ASNT Level III; consultant or operator-side" },
    { role: "Middle East rotation (Indian passport)", privatePsu: "USD $80K – $140K + benefits", contract: "$450 – $750/day", note: "Tax-free; many Indian inspectors rotate Saudi/UAE/Qatar" },
];

const employers = [
    "Reliance Industries (Jamnagar, Dahej)", "Indian Oil (IOCL refineries)", "Bharat Petroleum (BPCL)",
    "Hindustan Petroleum (HPCL)", "ONGC", "GAIL India", "Petronet LNG", "CPCL Chennai",
    "MRPL Mangalore", "Adani Group", "Bureau Veritas India", "TÜV India", "TÜV Rheinland",
    "DNV India", "Lloyd&rsquo;s Register", "SGS India", "Apave India", "Velosi (Applus)",
    "Larsen &amp; Toubro Hydrocarbon", "Tata Projects", "Engineers India Ltd (EIL)", "Petrofac",
];

const faqs = [
    { question: "Where can I take the API 510 exam in India?", answer: "API 510 exams are administered by API at Prometric test centres across India. The most reliable centres are in Mumbai, Hyderabad, Delhi NCR, Chennai, Bangalore, Pune, Kolkata, and Ahmedabad. Slot availability varies by exam window — register on api.org well in advance (typically 8–12 weeks ahead of your preferred date). Prometric centres also handle ID verification, scratch-pad provision, and printed-code-book inspection at the door per API policy." },
    { question: "How much does API 510 cost in India in 2026?", answer: "Total realistic budget for first attempt: ₹1.5L–₹2.8L (about $1,810–$3,375). Breakdown: exam fee ₹60K–₹85K (member vs non-member, paid in USD to API); 5-day classroom prep ₹35K–₹85K with reputable Indian providers (Atlantis NDT Hyderabad, ARC, IIW, Quality Austria); online self-paced prep ₹15K–₹35K; printed code book set ₹40K–₹95K (often employer-supplied or shared). Re-take fee is discounted to ₹42K–₹50K within 6 months of a failed attempt." },
    { question: "What salary can I earn as an API 510 inspector in India?", answer: "Junior (1–3 years post-cert): ₹8L–₹15L per annum permanent or ₹40K–₹70K/month contract. Mid-level (3–7 years): ₹15L–₹25L per annum at Reliance Jamnagar / IOCL / BPCL tier. Senior (7–12 years, often paired with API 570/653): ₹25L–₹40L per annum. Lead / Principal (12+ years, often ASNT Level III too): ₹40L–₹65L+ per annum. Indian passport-holders rotating to Middle East assignments typically earn $80K–$140K USD tax-free plus housing and per diem — a substantial uplift over India-domestic rates." },
    { question: "Which Indian employers prefer API 510 inspectors?", answer: "Operator-side: Reliance Industries (Jamnagar, Dahej), Indian Oil Corporation (IOCL refineries), BPCL, HPCL, ONGC, GAIL, Petronet LNG, CPCL, MRPL, Adani Group. Third-party inspection (TPI) firms: Bureau Veritas India, TÜV India, TÜV Rheinland, DNV, Lloyd&rsquo;s Register, SGS, Apave, Velosi (Applus). EPC and contractor-side: L&amp;T Hydrocarbon, Tata Projects, Engineers India Ltd (EIL), Petrofac. The TPI route is the most common starting point for Indian candidates — it builds the inspection-day documentation needed for API recertification." },
    { question: "Do I need ASNT Level II before taking API 510?", answer: "Not strictly required by API — eligibility is based on education and pressure-vessel inspection experience (1 year with engineering degree, 2 years with diploma, 3 years with high school). However, holding ASNT Level II in UT, MT, PT (the methods most relevant to vessel inspection) significantly strengthens your application and is increasingly expected by Indian employers. Most successful candidates pursue ASNT Level II in their primary methods first, then layer API 510 on top after accumulating 1–3 years of inspection experience." },
];

export default function Api510India() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "@id": "https://atlantisndt.com/api-510-india#service",
                "name": "API 510 Pressure Vessel Inspector Training & Exam Prep — India",
                "serviceType": "Professional Certification Training",
                "description": "API 510 exam preparation for Indian candidates. Classroom (Hyderabad), online self-paced, employer corporate batches. Covers Mumbai/Hyderabad/Delhi/Chennai exam centres, INR pricing, salary guidance.",
                "provider": { "@id": "https://atlantisndt.com/#organization" },
                "areaServed": { "@type": "Country", "name": "India" },
                "audience": { "@type": "BusinessAudience", "audienceType": "Pressure vessel inspectors, refinery & petrochemical inspectors" },
                "offers": {
                    "@type": "Offer",
                    "priceSpecification": {
                        "@type": "PriceSpecification",
                        "priceCurrency": "INR",
                        "minPrice": "35000",
                        "maxPrice": "85000",
                        "unitText": "5-day classroom training (per participant)"
                    },
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
                title="API 510 India 2026 — Exam Centres, ₹60K–₹85K Fee, ₹15L–₹35L Salary"
                description="API 510 in India: Mumbai/Hyderabad/Delhi/Chennai/Bangalore exam centres, 2026 INR pricing, prep ₹35K–₹85K, salary ₹8L–₹65L by experience. Full guide."
                keywords="API 510 India, API 510 exam India, API 510 Mumbai, API 510 Hyderabad, API 510 Delhi, API 510 Chennai, API 510 cost India, API 510 salary India"
                canonical="https://atlantisndt.com/api-510-india"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-orange-600 to-rose-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-orange-200 mb-4"><MapPin className="w-5 h-5" /><span>India — Regional Certification Guide</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 510 in India — 2026 Complete Guide</h1>
                        <p className="text-xl text-orange-100 max-w-3xl mb-8">Pressure vessel inspector certification for Indian candidates: Mumbai, Hyderabad, Delhi, Chennai exam centres. Local INR pricing (₹60K–₹85K exam, ₹35K–₹85K prep), and 2026 salary bands at Reliance, IOCL, BPCL, and TPI firms.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll in Hyderabad Class</Link>
                            <Link to="/api-510-certification" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Global API 510 Detail</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-orange-600 mb-2">8</div><div className="text-slate-600">Indian Exam Cities</div></div>
                        <div><div className="text-4xl font-bold text-orange-600 mb-2">₹60K+</div><div className="text-slate-600">Exam Fee (USD $730)</div></div>
                        <div><div className="text-4xl font-bold text-orange-600 mb-2">₹15L–₹35L</div><div className="text-slate-600">Mid-Level Salary</div></div>
                        <div><div className="text-4xl font-bold text-orange-600 mb-2">3 Yrs</div><div className="text-slate-600">Cert Validity</div></div>
                    </div>
                </div>
            </section>

            {/* Why India */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Why API 510 Matters for Indian Inspectors</h2>
                            <p className="text-lg text-slate-600 mb-4">India&rsquo;s downstream sector has grown to over 250 MMTPA refining capacity, with major expansion at Reliance Jamnagar, IOCL Paradip, BPCL Kochi, and HPCL Visakh. Every operating refinery and petrochemical complex needs API-certified pressure vessel inspectors — the role can&rsquo;t be filled by uncertified personnel.</p>
                            <p className="text-slate-600 mb-4">For Indian candidates, API 510 is also the passport to lucrative Middle East rotations. ARAMCO, ADNOC, Qatar Energy, and major EPCs in the Gulf actively recruit API-certified Indian inspectors at $80K–$140K USD tax-free packages — a 3–5x uplift over India-domestic rates.</p>
                            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                                <p className="text-orange-900 text-sm"><strong>Atlantis NDT in India:</strong> We operate a training centre in Hyderabad serving candidates across South India. Classroom batches every quarter, online self-paced enrollments year-round, and corporate batches at refinery sites for groups of 8+.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800 flex items-center gap-2"><Building2 className="w-5 h-5 text-orange-600" />Top Indian Employers Hiring API 510</h3>
                            <div className="bg-white rounded-xl shadow-sm p-5">
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-slate-700">
                                    {employers.map(e => (
                                        <div key={e} className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                                            <span dangerouslySetInnerHTML={{ __html: e }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Operator-side roles typically permanent; TPI roles often contract with project-extension renewals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exam centres */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">API 510 Exam Centres in India</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">All API exams in India are delivered through Prometric test centres. Register at api.org 8–12 weeks before your preferred exam window for slot availability.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {examCenters.map((c) => (
                            <Card key={c.city} className="border-l-4 border-l-orange-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center gap-2 mb-2">
                                        <MapPin className="w-4 h-4 text-orange-600" />
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
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Realistic line-item budget. Exam fee is paid in USD directly to API; everything else can be paid in INR.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-orange-700 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Item</th>
                                    <th className="px-4 py-3 text-left">INR</th>
                                    <th className="px-4 py-3 text-left">USD equiv.</th>
                                    <th className="px-4 py-3 text-left">Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {costBreakdown.map((c, i) => (
                                    <tr key={c.item} className={i % 2 === 0 ? "bg-white" : "bg-orange-50"}>
                                        <td className="px-4 py-3 font-medium text-sm">{c.item}</td>
                                        <td className="px-4 py-3 text-orange-700 font-semibold text-sm">{c.inr}</td>
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
                    <h2 className="text-3xl font-bold text-center mb-4 flex items-center justify-center gap-2"><IndianRupee className="w-7 h-7 text-orange-600" />API 510 Salary Bands in India (2026)</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Ranges reflect 2026 Indian market data across operator (Reliance, IOCL, BPCL, HPCL), TPI (BV, TÜV, DNV, SGS), and EPC (L&amp;T, Tata Projects, EIL) employers.</p>
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
                                        <td className="px-4 py-3 text-orange-700 font-semibold text-sm">{s.privatePsu}</td>
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
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>API 510 India — Frequently Asked Questions</h2>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <details key={i} className="border border-slate-200 rounded-xl overflow-hidden bg-white">
                                <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                                    {faq.question}
                                    <span className="text-orange-700 text-xl ml-4 flex-shrink-0">+</span>
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
                        <Link to="/api-570-india" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-orange-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-orange-700">API 570 India</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Piping inspector certification — Indian exam centres, INR pricing, salary bands.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-653-india" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-orange-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-orange-700">API 653 India</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Storage tank inspector certification — Indian exam logistics and salary.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/hyderabad-training" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-orange-600">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-orange-700">Hyderabad Training Centre</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Atlantis NDT&rsquo;s India training hub — classroom, online, and corporate batches.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/training-india" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-rose-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-orange-700">India NDT Training</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">All NDT method-specific training (UT, RT, MT, PT, ECT) for Indian candidates.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/consulting-india" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-rose-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-orange-700">India Consulting</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Pan-India ASNT Level III consulting and TPI services for refineries and EPCs.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-510-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-rose-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-orange-700">Global API 510 Guide</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400" />
                                    </div>
                                    <p className="text-sm text-slate-600">Full API 510 certification detail — exam structure, codes, recert, USA salary.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-orange-600 to-rose-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <Award className="w-12 h-12 mx-auto mb-4 text-orange-200" />
                    <h2 className="text-3xl font-bold mb-4">Ready to Sit API 510 in India?</h2>
                    <p className="text-orange-100 mb-8 text-lg">Hyderabad classroom batches every quarter; online self-paced year-round; corporate batches at your refinery site for groups of 8+.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-orange-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Enroll Now</Link>
                        <Link to="/api-570-india" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 570 India</Link>
                        <Link to="/api-653-india" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 653 India</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
