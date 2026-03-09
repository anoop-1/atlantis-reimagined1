import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, XCircle, ArrowRight, Scale } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const comparisonTable = [
    { feature: "Detection Type", ut: "Volumetric (internal)", rt: "Volumetric (internal)" },
    { feature: "Defect Orientation", ut: "Perpendicular best", rt: "Along beam best" },
    { feature: "Material Access", ut: "One side only", rt: "Both sides needed" },
    { feature: "Thickness Range", ut: "Wide range (0.5mm - meters)", rt: "Limited by source" },
    { feature: "Real-Time Results", ut: "Yes (immediate)", rt: "No (processing needed)" },
    { feature: "Radiation Safety", ut: "None required", rt: "Extensive controls" },
    { feature: "Permanent Record", ut: "Digital available (PAUT)", rt: "Film/digital image" },
    { feature: "Operator Skill", ut: "High interpretation skill", rt: "Moderate" },
    { feature: "Equipment Cost", ut: "Moderate to High", rt: "High (source, safety)" },
    { feature: "Speed", ut: "Fast", rt: "Slow (exposure time)" }
];

const utAdvantages = [
    "No radiation hazards - can work alongside other trades",
    "Immediate results - no film processing delay",
    "Accurate thickness/depth measurements",
    "Portable equipment for field use",
    "Can detect planar defects (lack of fusion)",
    "PAUT provides full volumetric imaging"
];

const utDisadvantages = [
    "Requires couplant between probe and surface",
    "Surface preparation needed",
    "Difficult on rough or curved surfaces",
    "Operator dependent interpretation",
    "Limited on thin materials (<3mm)",
    "Cannot detect surface-breaking defects well"
];

const rtAdvantages = [
    "Permanent film record of inspection",
    "Good for complex geometries",
    "Less operator-dependent than UT",
    "Detects porosity and inclusions well",
    "Wide acceptance in codes/standards",
    "Can inspect multiple areas simultaneously"
];

const rtDisadvantages = [
    "Radiation safety controls required",
    "Area evacuation during exposure",
    "Film processing time delays results",
    "Cannot measure defect depth accurately",
    "Misses planar defects parallel to beam",
    "Environmental/disposal concerns (film)"
];

const whenToUse = [
    { scenario: "Weld inspection (general)", recommendation: "Both - RT for code compliance, UT for sizing" },
    { scenario: "Corrosion monitoring", recommendation: "UT - accurate thickness measurement" },
    { scenario: "Casting inspection", recommendation: "RT - excellent for porosity/shrinkage" },
    { scenario: "In-service pipeline", recommendation: "UT - no radiation, immediate results" },
    { scenario: "Lamination detection", recommendation: "UT - RT cannot detect laminations" },
    { scenario: "Aerospace composites", recommendation: "UT - preferred for bond line inspection" }
];

const faqs = [
    { question: "Which method is more accurate?", answer: "Both are accurate but measure different things. UT provides precise defect sizing and depth. RT provides a 2D image showing defect location but poor depth information." },
    { question: "Which method is safer?", answer: "UT is significantly safer as it uses sound waves. RT uses ionizing radiation requiring licensed operators, controlled areas, and safety equipment." },
    { question: "Which method is faster?", answer: "UT is faster with immediate results. RT requires setup, exposure time, and film processing (or DR/CR scanning)." },
    { question: "Can one method replace the other?", answer: "For most weld inspections, PAUT can replace RT. However, some codes still specifically require RT. The two methods are often complementary." }
];

export default function UTvsRTComparison() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "Ultrasonic Testing vs Radiographic Testing: Complete Comparison",
                "description": "Comprehensive comparison of UT and RT methods. Advantages, disadvantages, when to use each, and which is better for your application.",
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-01-15"
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="UT vs RT: Ultrasonic Testing vs Radiographic Testing Comparison 2026 | Atlantis NDT"
                description="Complete comparison of Ultrasonic Testing (UT) vs Radiographic Testing (RT). Advantages, disadvantages, when to use each method. Expert guide for NDT selection."
                keywords="UT vs RT, ultrasonic vs radiographic, NDT comparison, UT advantages, RT disadvantages, PAUT vs film, weld inspection methods"
                canonical="https://atlantisndt.com/blog/ut-vs-rt-comparison"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-violet-700 to-purple-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-violet-200 mb-4">Comparison Guide • January 2026 • 10 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">UT vs RT: Which NDT Method Should You Use?</h1>
                        <p className="text-xl text-violet-100 mb-8">A comprehensive comparison of Ultrasonic Testing and Radiographic Testing. Understand the advantages, limitations, and best applications for each method.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="UT vs RT: Which NDT Method Should You Use?" description="Complete comparison of Ultrasonic Testing and Radiographic Testing." />
                </div>
            </div>

            {/* Quick Comparison */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="text-center p-6 bg-blue-50 rounded-xl">
                            <h3 className="text-2xl font-bold text-blue-800 mb-2">Ultrasonic Testing (UT)</h3>
                            <p className="text-slate-600">Uses high-frequency sound waves</p>
                            <div className="mt-4 text-4xl">🔊</div>
                        </div>
                        <div className="text-center p-6 bg-amber-50 rounded-xl">
                            <h3 className="text-2xl font-bold text-amber-800 mb-2">Radiographic Testing (RT)</h3>
                            <p className="text-slate-600">Uses X-rays or gamma radiation</p>
                            <div className="mt-4 text-4xl">☢️</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Comparison Table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Side-by-Side Comparison</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-lg shadow-sm">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">Feature</th>
                                        <th className="px-4 py-3 text-left font-semibold text-blue-700">UT</th>
                                        <th className="px-4 py-3 text-left font-semibold text-amber-700">RT</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonTable.map((row) => (
                                        <tr key={row.feature} className="border-t">
                                            <td className="px-4 py-3 font-medium">{row.feature}</td>
                                            <td className="px-4 py-3 text-slate-600">{row.ut}</td>
                                            <td className="px-4 py-3 text-slate-600">{row.rt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* UT Pros/Cons */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Ultrasonic Testing (UT)</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-t-4 border-t-green-500">
                                <CardHeader><CardTitle className="text-green-700">Advantages</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {utAdvantages.map((item) => (
                                            <li key={item} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-t-4 border-t-red-500">
                                <CardHeader><CardTitle className="text-red-700">Disadvantages</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {utDisadvantages.map((item) => (
                                            <li key={item} className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* RT Pros/Cons */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Radiographic Testing (RT)</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="border-t-4 border-t-green-500">
                                <CardHeader><CardTitle className="text-green-700">Advantages</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {rtAdvantages.map((item) => (
                                            <li key={item} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="border-t-4 border-t-red-500">
                                <CardHeader><CardTitle className="text-red-700">Disadvantages</CardTitle></CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {rtDisadvantages.map((item) => (
                                            <li key={item} className="flex items-start gap-2"><XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" /><span className="text-sm">{item}</span></li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* When to Use */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">When to Use Each Method</h2>
                        <div className="space-y-4">
                            {whenToUse.map((item) => (
                                <div key={item.scenario} className="bg-white p-4 rounded-lg shadow-sm flex flex-col md:flex-row md:items-center gap-2">
                                    <Scale className="w-5 h-5 text-violet-600 flex-shrink-0" />
                                    <span className="font-medium flex-1">{item.scenario}</span>
                                    <span className="text-slate-600 text-sm md:text-right">{item.recommendation}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                    <p className="text-slate-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Conclusion */}
                    <section className="mb-12 bg-violet-50 p-6 rounded-xl">
                        <h2 className="text-2xl font-bold mb-4">Conclusion</h2>
                        <p className="text-slate-700 mb-4">
                            There's no universally "better" method - the choice depends on your specific application,
                            code requirements, and practical constraints. Modern PAUT technology has made UT increasingly
                            preferred for many weld inspections, but RT remains essential for certain applications.
                        </p>
                        <p className="text-slate-700">
                            For the best results, consult with an ASNT Level III to select the most appropriate
                            method or combination of methods for your inspection needs.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-violet-700 to-purple-700 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Need Help Choosing the Right NDT Method?</h2>
                        <p className="text-violet-100 mb-6">Our ASNT Level III experts can help you select the best inspection approach.</p>
                        <Link to="/contact" className="inline-block px-8 py-3 bg-white text-violet-700 font-semibold rounded-lg hover:bg-gray-100 transition">Contact Our Experts</Link>
                    </section>

                    {/* Related */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blog/ultrasonic-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-violet-600 transition">Ultrasonic Testing Guide</h3>
                                <p className="text-slate-600 text-sm mt-2">Complete guide to UT methods</p>
                            </Link>
                            <Link to="/blog/radiographic-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-violet-600 transition">Radiographic Testing Guide</h3>
                                <p className="text-slate-600 text-sm mt-2">Complete guide to RT methods</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <ContactDetails />
        </div>
    );
}
