import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ErpDtCrossPromoBlock } from "@/components/ErpDtCrossPromoBlock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Clock, DollarSign, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import { buildTechArticleSchema } from "@/data/author-schema";

const levels = [
    { level: "Level I", duration: "40 hours min", description: "Perform NDT tests under Level II/III supervision. Follow written instructions, record data.", prerequisites: "Vision acuity test, employer training", salary: "$45,000 - $60,000", experience: "Varies by method (210–1,200 hrs per SNT-TC-1A)" },
    { level: "Level II", duration: "40+ additional hrs", description: "Set up, calibrate, interpret results, evaluate acceptance criteria, and supervise Level I technicians.", prerequisites: "Level I certification + documented experience", salary: "$60,000 - $85,000", experience: "Varies by method (630–3,600 hrs per SNT-TC-1A)" },
    { level: "Level III", duration: "Professional exam", description: "Develop procedures, interpret codes and standards, train and certify Level I/II personnel, manage NDT programs.", prerequisites: "Level II in one method + 4 years experience (or degree + 1 year)", salary: "$85,000 - $150,000+", experience: "4,200 hrs minimum (with degree) or 12,600 hrs (HS diploma)" }
];

const methods = [
    { name: "Ultrasonic Testing (UT)", slug: "ultrasonic-testing", trainHrs: "40/40", expHrs: "210/630" },
    { name: "Radiographic Testing (RT)", slug: "radiographic-testing", trainHrs: "40/40", expHrs: "210/630" },
    { name: "Magnetic Particle Testing (MT)", slug: "magnetic-particle-testing", trainHrs: "12/24", expHrs: "130/390" },
    { name: "Liquid Penetrant Testing (PT)", slug: "penetrant-testing", trainHrs: "8/16", expHrs: "130/390" },
    { name: "Eddy Current Testing (ET)", slug: "eddy-current-testing", trainHrs: "40/40", expHrs: "210/630" },
    { name: "Visual Testing (VT)", slug: "visual-testing", trainHrs: "8/16", expHrs: "130/390" },
];

const accpCosts = [
    { level: "ACCP Level II", examFee: "$420", renewal: "$140/5yr", scope: "Single method" },
    { level: "ACCP Level II (each add'l method)", examFee: "$280", renewal: "Included", scope: "Additional method" },
    { level: "ASNT NDT Level III (Basic)", examFee: "$540", renewal: "$200/5yr", scope: "General + 1 method" },
    { level: "ASNT NDT Level III (each add'l method)", examFee: "$310", renewal: "Included", scope: "Additional method" },
];

const sntVsAccp = [
    { feature: "Certification Body", snt: "Employer (company)", accp: "ASNT (third-party)" },
    { feature: "Portability", snt: "Not portable — re-certify at new employer", accp: "Fully portable between employers" },
    { feature: "Written Practice Needed", snt: "Yes — employer must maintain one", accp: "No — ASNT manages the program" },
    { feature: "Exam Development", snt: "Employer creates/selects exams", accp: "ASNT standardized exams" },
    { feature: "Typical Use", snt: "Oil & gas, petrochemical, power gen", accp: "Aerospace, government, multi-site" },
    { feature: "Industry Preference", snt: "Most common in Americas & Middle East", accp: "Growing globally, preferred for independence" },
    { feature: "Levels Available", snt: "Level I, II, III", accp: "Level II and III only" },
];

const faqs = [
    { question: "What is ASNT certification?", answer: "ASNT (American Society for Nondestructive Testing) provides certification programs including SNT-TC-1A (employer-based), ACCP (ASNT Central Certification Program — third-party portable), and ASNT NDT Level III professional certification. It is the most widely recognized NDT certification standard in the Americas, Middle East, and parts of Asia." },
    { question: "What's the difference between SNT-TC-1A and ACCP?", answer: "SNT-TC-1A is employer-based — your company certifies you based on their Written Practice, and the certification stays with that employer. ACCP is third-party certification administered directly by ASNT — it's portable between employers and does not require an employer Written Practice. ACCP is available for Level II and III only." },
    { question: "How much does ASNT certification cost?", answer: "ACCP Level II exam: $420 per method. ASNT NDT Level III exam: $540 (Basic) + $310 per additional method. Renewal: $140–$200 every 5 years. Training costs range from $800–$3,000 per course depending on method and location." },
    { question: "How long does ASNT certification take?", answer: "Level I: 8–40 hours training (varies by method) + 130–210 hours on-the-job experience. Level II: Additional 16–40 hours training + 390–630 hours experience. Level III: Professional exam requiring 4+ years of experience." },
    { question: "Is ASNT certification recognized internationally?", answer: "Yes. ASNT certification (both SNT-TC-1A and ACCP) is recognized in 100+ countries. It is the dominant standard in the USA, Canada, Middle East, India, Southeast Asia, and Latin America. In Europe, ISO 9712 and PCN are more common." },
    { question: "What is ACCP NDT certification?", answer: "ACCP (ASNT Central Certification Program) is ASNT's third-party, portable certification. Unlike SNT-TC-1A where your employer certifies you, ACCP certification is issued by ASNT and follows you between jobs. Available for Level II (all methods) and Level III. Increasingly preferred by multinational companies." },
    { question: "Can I get ASNT certified online?", answer: "ASNT offers some online training courses, but the certification exams (both SNT-TC-1A practical and ACCP) require in-person proctored testing. Many training providers, including Atlantis NDT, offer online theory courses followed by in-person practical exams in Dubai, Houston, India, and other locations." },
    { question: "What is the ASNT Level III exam format?", answer: "The ASNT NDT Level III exam consists of: (1) Basic exam — 135 questions on materials science, NDT processes, and quality management; (2) Method exam — 66 questions on a specific NDT method; (3) Specific exam (optional, employer-based) — questions on codes, standards, and specifications relevant to your industry." },
    { question: 'What does SNT-TC-1A require in 2024?', answer: 'SNT-TC-1A is a recommended practice that each employer implements through its own Written Practice. Every edition, including the current 2024-era revision, sets minimum training hours, on-the-job experience, near-vision and colour-perception checks, and Level III oversight for each method and level. Because it is employer-based, the exact requirements follow your company Written Practice rather than a single fixed standard.' }, /*kw-embed*/
    { question: 'Is SNT-TC-1A the same as a certification?', answer: 'No. SNT-TC-1A is the guideline. Your employer Written Practice, together with your documented training, experience, and exam results, is what makes you certified. ACCP and ISO 9712 differ because a third party issues the certificate directly.' }, /*kw-embed*/
];

export default function ASNTCertification() {
    const faqSchemaData = [
        {
            "@type": "Question",
            "name": "How long does ASNT certification take?",
            "acceptedAnswer": { "@type": "Answer", "text": "ASNT Level I typically takes 2-4 weeks of training plus supervised OJT hours. Level II requires additional experience. Level III requires years of experience plus passing Basic and Method exams." },
        },
        {
            "@type": "Question",
            "name": "What is the cost of ASNT certification?",
            "acceptedAnswer": { "@type": "Answer", "text": "ASNT certification costs vary: Level I/II training is $1,000-$3,000 per method. Level III exam fees are $200-$750. Total investment including materials and OJT is typically $3,000-$10,000." },
        },
        {
            "@type": "Question",
            "name": "Is ASNT certification recognized internationally?",
            "acceptedAnswer": { "@type": "Answer", "text": "ASNT SNT-TC-1A is the most widely recognized NDT certification scheme globally, accepted in over 100 countries. However, some regions also require ISO 9712 or PCN certification." },
        },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            buildTechArticleSchema({
                url: "https://atlantisndt.com/asnt-certification",
                headline: "ASNT NDT Certification 2026: Complete Level I/II/III Guide (Requirements, Cost, Exam, Salary)",
                description: "ASNT NDT certification deep-dive: SNT-TC-1A vs ACCP, Level I/II/III training hours per method (UT 40h, RT 40h, MT 16h, PT 16h, ET 40h, VT 8h), exam structure (general+specific+practical), 2026 fees ($280-$540), expected salaries ($45K-$150K+). Written by ASNT Level III Anoop Rayavarapu.",
                datePublished: "2025-09-01",
                dateModified: "2026-04-18",
                section: "NDT Certifications",
                keywords: "ASNT certification, ASNT Level III, SNT-TC-1A, ACCP, ASNT exam, NDT certification cost",
                dependencies: "ANSI/ASNT CP-189, ASNT SNT-TC-1A, ASNT ACCP, ISO 9712",
            }),
            { "@type": "Course", "name": "ASNT NDT Certification Training", "description": "Training for ASNT NDT Level I, II, III certification across 6 methods (UT, RT, MT, PT, ET, VT).", "provider": { "@id": "https://atlantisndt.com/#organization" }, "courseMode": ["online", "onsite", "blended"], "educationalLevel": "Professional" },
            { "@type": "FAQPage", "mainEntity": [
                ...faqSchemaData,
                ...faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
            ] },
            {
                "@type": "EducationalOccupationalCredential",
                "name": "ASNT NDT Certification (Level I/II/III)",
                "credentialCategory": "Professional Certification",
                "educationalLevel": "Professional",
                "recognizedBy": { "@type": "Organization", "name": "American Society for Nondestructive Testing", "url": "https://www.asnt.org" },
                "competencyRequired": "Training hours and experience per SNT-TC-1A or ACCP requirements"
            },
            {
                "@type": "HowTo",
                "name": "How to Get ASNT NDT Certification",
                "description": "Step-by-step guide to earning ASNT NDT certification at Level I, II, or III.",
                "step": [
                    { "@type": "HowToStep", "name": "Choose Certification Path", "text": "Decide between SNT-TC-1A (employer-based) or ACCP (third-party portable) certification." },
                    { "@type": "HowToStep", "name": "Complete Training Hours", "text": "Complete required classroom training hours for your method and level (8–40 hours depending on method)." },
                    { "@type": "HowToStep", "name": "Accumulate Experience", "text": "Log supervised on-the-job experience hours (130–12,600 hours depending on method and level)." },
                    { "@type": "HowToStep", "name": "Pass Examinations", "text": "Pass general, specific, and practical exams. Level III requires Basic + Method exams from ASNT." },
                    { "@type": "HowToStep", "name": "Maintain Certification", "text": "Renew per employer written practice (SNT-TC-1A) or ASNT renewal schedule (ACCP, every 5 years)." }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="ASNT Certification 2026 — Level I/II/III Path, Exam, Pass Rate"
                description="Complete ASNT certification guide 2026. SNT-TC-1A requirements, exam pass rates, Level III career path. ASNT Level III-led training. Enroll free trial today."
                keywords="ASNT certification, ACCP, ACCP Level II, ACCP NDT, ACCP NDT certification, ASNT Level III, ASNT NDT certification, SNT-TC-1A, SNT-TC-1A 2024, CP-189, ASNT Level II, ASNT training, NDT Level III certification, ASNT exam prep, ASNT UT RT MT PT ET, NDT Level I II III"
                canonical="https://atlantisndt.com/asnt-certification"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4"><Award className="w-5 h-5" /><span>Professional Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">ASNT NDT Certification & ACCP Guide 2026</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">Complete guide to ASNT certification: SNT-TC-1A employer-based vs ACCP portable certification. Level I, II, and III programs for all 6 NDT methods. Exam costs, experience requirements, and training locations.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll Now</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">95%</div><div className="text-slate-600">First-Attempt Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">6</div><div className="text-slate-600">NDT Methods</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">3</div><div className="text-slate-600">Certification Levels</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">100+</div><div className="text-slate-600">Countries Recognized</div></div>
                    </div>
                </div>
            </section>

            {/* SNT-TC-1A vs ACCP Comparison */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">SNT-TC-1A vs ACCP: Which Certification Path?</h2>
                    <p className="text-slate-600 text-center max-w-3xl mx-auto mb-10">ASNT offers two main certification pathways. Understanding the difference is critical for choosing the right path for your career and employer requirements.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                            <thead>
                                <tr className="bg-[#004aad] text-white">
                                    <th className="px-4 py-3 text-left font-semibold">Feature</th>
                                    <th className="px-4 py-3 text-left font-semibold">SNT-TC-1A (Employer-Based)</th>
                                    <th className="px-4 py-3 text-left font-semibold">ACCP (ASNT Central Certification)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sntVsAccp.map((row, i) => (
                                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-4 py-3 font-medium text-slate-900">{row.feature}</td>
                                        <td className="px-4 py-3 text-slate-700">{row.snt}</td>
                                        <td className="px-4 py-3 text-slate-700">{row.accp}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Certification Levels */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">ASNT Certification Levels</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {levels.map((level) => (
                            <Card key={level.level} className="relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#004aad]"></div>
                                <CardHeader><CardTitle className="text-xl">{level.level}</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 mb-4">{level.description}</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span className="text-slate-500">Training:</span><span className="font-medium">{level.duration}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Experience:</span><span className="font-medium">{level.experience}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Prerequisites:</span><span className="font-medium">{level.prerequisites}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Salary Range:</span><span className="font-medium text-green-600">{level.salary}</span></div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* ACCP Exam Costs */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">ACCP & ASNT Level III Exam Costs (2026)</h2>
                    <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">Current ASNT exam fees. Training course costs ($800–$3,000) are additional and vary by provider and location.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                            <thead>
                                <tr className="bg-[#004aad] text-white">
                                    <th className="px-4 py-3 text-left font-semibold">Certification</th>
                                    <th className="px-4 py-3 text-left font-semibold">Exam Fee</th>
                                    <th className="px-4 py-3 text-left font-semibold">Renewal</th>
                                    <th className="px-4 py-3 text-left font-semibold">Scope</th>
                                </tr>
                            </thead>
                            <tbody>
                                {accpCosts.map((row, i) => (
                                    <tr key={row.level} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-4 py-3 font-medium text-slate-900">{row.level}</td>
                                        <td className="px-4 py-3 text-slate-700 font-semibold">{row.examFee}</td>
                                        <td className="px-4 py-3 text-slate-700">{row.renewal}</td>
                                        <td className="px-4 py-3 text-slate-700">{row.scope}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Training Hours by Method */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Training Hours & Experience by NDT Method</h2>
                    <p className="text-slate-600 text-center max-w-2xl mx-auto mb-10">Minimum training and on-the-job experience hours per SNT-TC-1A Recommended Practice. Format: Level I / Level II.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                            <thead>
                                <tr className="bg-[#004aad] text-white">
                                    <th className="px-4 py-3 text-left font-semibold">NDT Method</th>
                                    <th className="px-4 py-3 text-center font-semibold">Training Hours (L1/L2)</th>
                                    <th className="px-4 py-3 text-center font-semibold">Experience Hours (L1/L2)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {methods.map((m, i) => (
                                    <tr key={m.slug} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-4 py-3"><Link to={`/${m.slug}`} className="font-medium text-[#004aad] hover:underline">{m.name}</Link></td>
                                        <td className="px-4 py-3 text-center text-slate-700">{m.trainHrs}</td>
                                        <td className="px-4 py-3 text-center text-slate-700">{m.expHrs}</td>
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
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (<div key={index} className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-bold text-lg mb-2">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Related Certification & Training Pages</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { name: "API 510 Certification", path: "/api-510-certification" },
                            { name: "API 570 Certification", path: "/api-570-certification" },
                            { name: "API 653 Certification", path: "/api-653-certification" },
                            { name: "NDT Certification Guide", path: "/ndt-certification-guide" },
                            { name: "NDT Career Guide", path: "/ndt-career-guide" },
                            { name: "NDT Salary Guide", path: "/ndt-technician-salary" },
                            { name: "NDT Training USA", path: "/ndt-training-usa" },
                            { name: "NDT Training Dubai", path: "/ndt-training-dubai" },
                        ].map(link => (
                            <Link key={link.path} to={link.path} className="block p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#004aad] hover:shadow-md transition-all group">
                                <span className="font-semibold text-slate-900 group-hover:text-[#004aad] transition-colors text-sm">{link.name}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-[#004aad] to-blue-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get ASNT Certified?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Join our SNT-TC-1A and ACCP training programs. 95% first-attempt pass rate. Available in Dubai, Houston, India, and online.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Enroll Now</Link>
                        <Link to="/consulting/ndt-consulting-level-iii" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Level III Consulting</Link>
                    </div>
                </div>
            </section>

            {/* 2026-05-17 additive: Related ASNT guides — links into new GSC-driven posts */}
            <section className="bg-slate-50 py-12">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">More ASNT & NDT Certification Guides (2026)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link to="/blog/asnt-level-3-fees-2026-complete-pricing-table" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">ASNT Level 3 Fees 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">Complete pricing table — exam, renewal, by method (member vs non-member)</p>
                        </Link>
                        <Link to="/blog/iso-9712-vs-asnt-decision-flowchart-which-cert-by-country" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">ISO 9712 vs ASNT Decision Flowchart</h3>
                            <p className="text-slate-600 text-sm mt-2">Pick the right NDT cert by country and employer in 2 minutes</p>
                        </Link>
                        <Link to="/blog/api-icp-pass-rates-510-vs-570-vs-653-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">API ICP Pass Rates 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">510 vs 570 vs 653 pass rates, retake stats, study-hour benchmarks</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2026-05-23: ERP/DT cross-promo block — SEO link-equity distribution */}
            <section className="bg-white py-4">
                <div className="container mx-auto max-w-6xl px-6">
                    <ErpDtCrossPromoBlock
                        relevantApp="CMMS"
                        relevantAppHref="/erp/cmms-for-inspection-companies"
                    />
                </div>
            </section>
        <RelatedGuidesBlock links={[
              {
                    "title": "API 510 Pressure Vessel Inspector",
                    "href": "/api-510-certification",
                    "description": "In-service pressure vessel inspection cert prep",
                    "icon": "cert"
              },
              {
                    "title": "API 570 Piping Inspector",
                    "href": "/api-570-certification",
                    "description": "Process piping inspection cert prep",
                    "icon": "cert"
              },
              {
                    "title": "API 653 Tank Inspector",
                    "href": "/api-653-certification",
                    "description": "Aboveground storage tank inspection prep",
                    "icon": "cert"
              },
              {
                    "title": "ASNT Level III Consulting Services",
                    "href": "/consulting/asnt-level-iii-consulting-services",
                    "description": "Outsourced Level III of record",
                    "icon": "consulting"
              },
              {
                    "title": "SNT-TC-1A Requirements Guide",
                    "href": "/blog/asnt-snt-tc-1a-certification-requirements",
                    "description": "2024 employer-based cert deep dive",
                    "icon": "blog"
              },
              {
                    "title": "CMMS for Inspection Companies",
                    "href": "/erp/cmms-for-inspection-companies",
                    "description": "Affordable certification + asset tracking",
                    "icon": "erp"
              }
        ]} />

        <ContactDetails />
        </div>
    );
}
