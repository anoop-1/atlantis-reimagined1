// /* INLINE_ANCHORS_INJECTED_v1 */
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ErpDtCrossPromoBlock } from "@/components/ErpDtCrossPromoBlock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, BookOpen, Clock, FileText, Users, AlertCircle, Zap, Eye, Radio, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { buildTechArticleSchema } from "@/data/author-schema";
import ClusterNav from "@/components/ClusterNav";

import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
const breadcrumbSchema510Cert = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://atlantisndt.com/" },
        { "@type": "ListItem", "position": 2, "name": "Certification Guides", "item": "https://atlantisndt.com/asnt-certification" },
        { "@type": "ListItem", "position": 3, "name": "API 510 Certification", "item": "https://atlantisndt.com/api-510-certification" }
    ]
};

const examTopics = [
    "Pressure vessel design and construction (ASME Section VIII Div. 1)",
    "Material specifications and properties (ASME Section II Part D)",
    "Welding qualifications and procedures (ASME Section IX)",
    "Nondestructive examination requirements (ASME Section V)",
    "Corrosion mechanisms and damage (API 571)",
    "Fitness-for-service evaluation (API 579-1/ASME FFS-1)",
    "Repair, alteration, and rerating procedures",
    "Inspection planning, intervals, and techniques (API 510 §6)",
    "Pressure-relieving device inspection (API 576)",
    "Inspection practices for pressure vessels (API 572)"
];

const openBookCodes = [
    { code: "API 510", title: "Pressure Vessel Inspection Code — Maintenance, Inspection, Rating, Repair, and Alteration" },
    { code: "ASME BPVC Sec. VIII Div. 1", title: "Rules for Construction of Pressure Vessels (design, fabrication, materials)" },
    { code: "ASME Section V", title: "Nondestructive Examination (UT, RT, MT, PT, VT procedures)" },
    { code: "ASME Section IX", title: "Welding, Brazing, and Fusing Qualifications (WPS, PQR, welder performance)" },
    { code: "ASME Section II Part D", title: "Material Properties — Allowable Stresses, Tensile Strength, Yield Strength" },
    { code: "API 572", title: "Inspection Practices for Pressure Vessels (types, components, inspection methods)" },
    { code: "API 576", title: "Inspection of Pressure-Relieving Devices (PRVs, rupture disks, intervals)" },
    { code: "API 571", title: "Damage Mechanisms Affecting Fixed Equipment in the Refining Industry" },
    { code: "API 579-1/ASME FFS-1", title: "Fitness-For-Service (assessment of flaws, corrosion, creep, dents)" },
];

const eligibilityRequirements = [
    { type: "Engineering Degree", education: "Bachelor's in engineering or related field", experience: "1 year in pressure vessel inspection" },
    { type: "Engineering Technology", education: "Associate degree or technical diploma", experience: "2 years in pressure vessel inspection" },
    { type: "High School / GED", education: "High school diploma or equivalent", experience: "3 years in pressure vessel inspection" },
];

const inspectionPlanning = [
    { topic: "External Inspection", standard: "API 510 §6.4", detail: "Maximum 5 years or one-quarter of remaining life, whichever is less. Covers external surface condition, insulation, supports, and nozzles." },
    { topic: "Internal Inspection", standard: "API 510 §6.4", detail: "Maximum 10 years or one-half of remaining life, whichever is less. Includes wall thickness surveys, weld exams, and internal corrosion assessment." },
    { topic: "On-Stream Inspection", standard: "API 510 §6.5", detail: "Performed while vessel is in service using UT thickness, IR thermography, or AE monitoring. Can substitute for internal inspection when entry is impractical." },
    { topic: "Corrosion Rate Calculation", standard: "API 510 §7", detail: "Short-term and long-term rates calculated from thickness data. Used to determine remaining life: RL = (t_actual − t_min) / corrosion rate." },
    { topic: "Fitness-For-Service", standard: "API 579-1", detail: "When vessel thickness is below minimum, FFS assessment determines if continued operation is safe. Level 1, 2, or 3 assessments per API 579." },
];

const trainingFormats = [
    { icon: Users, title: "Classroom (Dubai / Houston / India)", desc: "5-day intensive with mock exams. Includes code navigation drills, open-book timed practice, and exam strategy sessions. Next class: contact us for schedule." },
    { icon: BookOpen, title: "Online Self-Paced", desc: "Video lectures, PDF study notes, chapter quizzes and 3 full-length mock exams. Learn at your own pace with 12 months access. Includes code cross-reference guide." },
    { icon: Clock, title: "Blended / Instructor-Led Online", desc: "Live virtual sessions over 5 days with ASNT Level III instructor. Real-time Q&A, group exercises, and timed mock exam simulation." },
];

const ndtMethods = [
    { method: "Ultrasonic Testing (UT)", use: "Wall thickness measurement, corrosion mapping — the primary tool for determining remaining life of vessel shells and heads" },
    { method: "Radiographic Testing (RT)", use: "Weld quality inspection during fabrication, repair, and alteration — required per ASME Section V" },
    { method: "Magnetic Particle Testing (MT)", use: "Surface and near-surface crack detection on pressure vessel welds, nozzles, and attachment welds" },
    { method: "Liquid Penetrant Testing (PT)", use: "Surface crack detection on non-ferromagnetic materials (stainless steel, nickel alloys, aluminium vessels)" },
    { method: "Phased Array UT (PAUT)", use: "Advanced thickness and flaw characterization — used for complex geometries, nozzle welds, and CUI assessment" },
    { method: "Acoustic Emission (AE)", use: "On-stream leak and crack monitoring — detects active flaws in vessels without shutdown or entry" },
];

const faqs = [
    {
        question: "What is API 510 Certification?",
        answer: "API 510 is an American Petroleum Institute certification for Pressure Vessel Inspectors. It qualifies inspectors to inspect, repair, alter, and rerate pressure vessels built to ASME BPVC Section VIII. The exam is administered by API and is open-book with 170 questions over 7.5 hours."
    },
    {
        question: "How long is API 510 certification valid?",
        answer: "API 510 certification is valid for 3 years. Recertification requires either passing a closed-book recertification exam or demonstrating continued pressure vessel inspection experience (180 inspection days over the 3-year period) plus 80 hours of relevant training or professional development."
    },
    {
        question: "What is the API 510 exam format?",
        answer: "The API 510 exam is open-book, consisting of 170 multiple-choice questions over 7.5 hours. A minimum score of 70% is required to pass. You may bring printed/physical copies of all 9 approved reference codes. Electronic devices and online resources are not permitted during the exam."
    },
    {
        question: "What codes should I know for the API 510 exam?",
        answer: "The 9 approved open-book codes are: API 510, ASME BPVC Section VIII Div. 1, ASME Section V, ASME Section IX, ASME Section II Part D, API 572, API 576, API 571, and API 579-1/ASME FFS-1. All codes must be printed physical copies — no electronic versions allowed."
    },
    {
        question: "What is the pass rate for the API 510 exam?",
        answer: "The industry-wide average pass rate for the API 510 exam is approximately 50-60% on the first attempt. Candidates who complete structured training programs perform significantly better. Our students achieve a 95% first-time pass rate thanks to comprehensive code navigation drills, timed mock exams, and exam strategy sessions."
    },
    {
        question: "What is the difference between API 510 and API 570?",
        answer: "API 510 covers pressure vessels built to ASME BPVC Section VIII. API 570 covers process piping built to ASME B31.3 (and other B31 codes). Both exams have similar formats (170 questions, 7.5 hours, open-book, 70% pass score) and 3-year validity, but they reference different construction codes and inspection practices. Many inspectors hold both certifications."
    },
    {
        question: "Can I take the API 510 exam without experience?",
        answer: "No. API requires a minimum of 1 to 3 years of pressure vessel inspection experience depending on your education level: 1 year with an engineering degree, 2 years with an associate/technical degree, or 3 years with a high school diploma. All experience must be in pressure vessel inspection, maintenance, or engineering activities. There is no exemption from the experience requirement."
    },
];

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <details className="border border-slate-200 rounded-xl overflow-hidden group" open={open} onClick={(e) => { e.preventDefault(); setOpen(!open); }}>
            <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                {q}
                <span className="text-red-700 text-xl ml-4 flex-shrink-0">{open ? "\u2212" : "+"}</span>
            </summary>
            <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100">{a}</div>
        </details>
    );
}

export default function API510Certification() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            buildTechArticleSchema({
                url: "https://atlantisndt.com/api-510-certification",
                headline: "API 510 Certification 2026: Pressure Vessel Inspector Exam, Codes, Cost & Salary",
                description: "API 510 deep-dive: open-book exam (150 questions, 7.5 hrs), 9 reference codes (API 510/571/572/576/579-1, ASME BPVC VIII/V/IX, ASME II-D), eligibility matrix, 2026 fees ($945 ICP), 95% pass rate training, salary $85-130K. By ASNT Level III Anoop Rayavarapu.",
                datePublished: "2025-08-15",
                dateModified: "2026-04-18",
                section: "Pressure Vessel Inspection",
                keywords: "API 510, pressure vessel inspector, API 510 exam, API 510 codes, ASME BPVC VIII",
                dependencies: "API 510, API 571, API 572, API 576, API 579-1/ASME FFS-1, ASME BPVC Section VIII, Section V, Section IX, ASME II-D",
            }),
            {
                "@type": "Course",
                "name": "API 510 Pressure Vessel Inspector Certification Training",
                "description": "Comprehensive API 510 certification exam preparation. Open-book format training covering API 510, ASME BPVC Section VIII, ASME Section V, IX, II, API 572, API 576, API 571, and API 579-1 for pressure vessel inspectors.",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "courseMode": ["online", "onsite", "blended"],
                "educationalLevel": "Professional",
                "teaches": "API 510 Pressure Vessel Inspector Certification"
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
                title="API 510 Pressure Vessel Inspector — 2026 Cert Prep & Pass Plan"
                description="API 510 certification 2026 — study plan, practice questions, ASNT Level III instructors. Accessible online prep, in-person workshops. Get certified faster."
                keywords="API 510 certification, API 510 training, pressure vessel inspector, API 510 exam, API 510 study guide, API 510 course, pressure vessel inspection, ASME Section VIII, API 510 exam prep, API 510 open book codes"
                canonical="https://atlantisndt.com/api-510-certification"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />
        <QuickAnswerBox question="What is API 510 certification and how do you get it?" answer="API 510 is the Authorized Pressure Vessel Inspector certification from the American Petroleum Institute. It qualifies you to perform in-service inspection of pressure vessels under the API 510 Pressure Vessel Inspection Code. The exam is 8.5 hours, covers ASME Section V/VIII, API 510/571/572/576/577, and is administered four times per year worldwide via the API ICP program." bullets={["Body of knowledge: API 510, API 571, ASME Section V & VIII","Eligibility: HS diploma + 5 yrs (or degree + 2 yrs) inspection experience","Recertification: every 3 years via 25-question online exam"]} />


            {/* Hero */}
            <section className="bg-gradient-to-br from-red-700 to-rose-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-red-200 mb-4"><Award className="w-5 h-5" /><span>Professional Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 510 Certification Training</h1>
        {/* INLINE_PROOF_INJECTED_v1 */}
        <p className="my-4 rounded-md border-l-4 border-primary/60 bg-primary/5 p-3 text-sm">
          <strong>Atlantis NDT proof:</strong> ASNT Level III-led prep, 96% first-attempt pass rate, 2026 cohorts.
          {' '}<a href="/contact" className="text-primary underline underline-offset-2 hover:opacity-80">See the API 510 schedule →</a>
        </p>

                        <p className="text-xl text-red-100 max-w-3xl mb-8">Become a certified API 510 Pressure Vessel Inspector. Comprehensive open-book exam preparation with 95% first-time pass rate. Training available online and in-person.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll in Next Class</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-red-700 mb-2">95%</div><div className="text-slate-600">Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-red-700 mb-2">170</div><div className="text-slate-600">Exam Questions</div></div>
                        <div><div className="text-4xl font-bold text-red-700 mb-2">7.5 hrs</div><div className="text-slate-600">Exam Duration</div></div>
                        <div><div className="text-4xl font-bold text-red-700 mb-2">3 Yrs</div><div className="text-slate-600">Certificate Validity</div></div>
                    </div>
                </div>
            </section>

            {/* What is API 510 + Eligibility Table */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What is API 510 Certification?</h2>
                            <p className="text-lg text-slate-600 mb-4">
                                API 510 is a globally recognised certification for Pressure Vessel Inspectors administered by the American Petroleum Institute.
                                Certified inspectors are qualified to inspect, repair, alter, and rerate pressure vessels in accordance with API 510 and ASME BPVC Section VIII.
                            </p>
                            <p className="text-slate-600 mb-4">
                                The certification is required or strongly preferred at refineries, petrochemical plants, chemical plants, power generation facilities, and offshore platforms worldwide. API 510 holders are authorised to sign off on pressure vessel inspection reports and determine fitness for continued service — a role that cannot be performed by non-certified personnel.
                            </p>
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                                <p className="text-red-800 text-sm"><strong>Career Impact:</strong> API 510 certified inspectors earn 20-40% higher salaries and are consistently in demand across oil & gas, petrochemical, power generation, and chemical processing industries. Many ASNT Level III professionals add API 510 to qualify for senior inspection and engineering roles.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800">Eligibility Requirements</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                    <thead className="bg-red-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold text-red-800">Education</th>
                                            <th className="px-4 py-3 text-left font-semibold text-red-800">Min. Experience</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {eligibilityRequirements.map((req) => (
                                            <tr key={req.type} className="border-t">
                                                <td className="px-4 py-3">
                                                    <div className="font-medium">{req.type}</div>
                                                    <div className="text-slate-500 text-xs">{req.education}</div>
                                                </td>
                                                <td className="px-4 py-3 text-slate-600">{req.experience}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-xs text-slate-500 mt-2">Experience must be in pressure vessel inspection, repair, construction, or engineering. Full requirements: API website.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Reference Codes */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">API 510 Open-Book Reference Codes</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">The API 510 exam is open-book. You may bring printed copies of all 9 approved codes. Our training covers code navigation strategies so you can find answers quickly within the 7.5-hour time limit.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm border border-slate-100">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-5 py-3 text-left font-semibold w-48">Code</th>
                                    <th className="px-5 py-3 text-left font-semibold">Title / Scope</th>
                                </tr>
                            </thead>
                            <tbody>
                                {openBookCodes.map((item, i) => (
                                    <tr key={item.code} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-5 py-3 font-bold text-red-700 text-sm">{item.code}</td>
                                        <td className="px-5 py-3 text-slate-700 text-sm">{item.title}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Inspection Planning */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">API 510 Inspection Planning & Intervals</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">A critical exam topic and real-world requirement. API 510 inspectors must understand these intervals and the calculations behind remaining life assessment.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-red-700 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Topic</th>
                                    <th className="px-4 py-3 text-left">Code Section</th>
                                    <th className="px-4 py-3 text-left">Key Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inspectionPlanning.map((row, i) => (
                                    <tr key={row.topic} className={i % 2 === 0 ? "bg-white" : "bg-red-50"}>
                                        <td className="px-4 py-3 font-medium text-sm">{row.topic}</td>
                                        <td className="px-4 py-3 text-slate-500 text-sm font-mono">{row.standard}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm">{row.detail}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Exam Topics */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Exam Topics Covered</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {examTopics.map((topic) => (
                            <div key={topic} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{topic}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Training Formats */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Training Formats</h2>
                    <p className="text-center text-slate-600 mb-12">Choose the format that fits your schedule and learning style.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {trainingFormats.map((fmt) => (
                            <Card key={fmt.title} className="hover:shadow-lg transition border-t-4 border-t-red-500">
                                <CardHeader className="pb-2">
                                    <fmt.icon className="w-8 h-8 text-red-600 mb-2" />
                                    <CardTitle className="text-lg">{fmt.title}</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">{fmt.desc}</p></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* NDT Methods */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">NDT Methods in API 510 Inspection</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">API 510 inspectors must understand when and how to apply each NDT method for pressure vessel components, welds, and in-service monitoring.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {ndtMethods.map((item) => (
                            <div key={item.method} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <h3 className="font-semibold text-red-700 mb-1">{item.method}</h3>
                                <p className="text-sm text-slate-600">{item.use}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link to="/ndt-methods" className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-800 transition">Explore All NDT Methods</Link>
                    </div>
                </div>
            </section>

            {/* Related Certifications */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Related Certifications & Resources</h2>
                    <p className="text-center text-slate-600 mb-10">Expand your inspection qualifications with complementary certifications.</p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
                        {[
                            { to: "/api-570-certification", label: "API 570 Piping Inspector", desc: "Certification for process piping inspection per ASME B31.3" },
                            { to: "/api-653-certification", label: "API 653 Tank Inspector", desc: "Certification for aboveground storage tank inspection per API 650" },
                            { to: "/asnt-certification", label: "ASNT NDT Certification", desc: "NDT Level I, II, III certification for all inspection methods" },
                            { to: "/ndt-certification-guide", label: "NDT Certification Guide", desc: "Complete guide to NDT certification pathways and requirements" },
                            { to: "/tools/ndt-certification-cost-calculator", label: "Certification Cost Calculator", desc: "Estimate total costs for API and NDT certifications" },
                            { to: "/ndt-career-guide", label: "NDT Career Guide", desc: "Salary data, career paths, and growth opportunities in NDT" },
                        ].map((link) => (
                            <Link key={link.to} to={link.to} className="bg-white p-4 rounded-lg border border-slate-200 hover:border-red-300 hover:shadow-md transition block">
                                <h3 className="font-semibold text-red-700 mb-1">{link.label}</h3>
                                <p className="text-sm text-slate-500">{link.desc}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>API 510 Certification — Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} q={faq.question} a={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-red-700 to-rose-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get API 510 Certified?</h2>
                    <p className="text-red-100 mb-8 text-lg">Join our next training class. Dubai, Houston, India, and online options available.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Enroll Now</Link>
                        <Link to="/api-570-certification" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 570 Certification</Link>
                        <Link to="/api-653-certification" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 653 Certification</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <h3 className="text-xl font-semibold mb-4">API 510 Training by Location</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                        <Link to="/ndt-training-houston" className="text-blue-600 hover:underline">API 510 Houston, TX →</Link>
                        <Link to="/ndt-training-dubai" className="text-blue-600 hover:underline">API 510 Dubai, UAE →</Link>
                        <Link to="/ndt-training-saudi-arabia" className="text-blue-600 hover:underline">API 510 Saudi Arabia →</Link>
                        <Link to="/ndt-training-singapore" className="text-blue-600 hover:underline">API 510 Singapore →</Link>
                        <Link to="/ndt-training-india" className="text-blue-600 hover:underline">API 510 India (Hyderabad / Mumbai) →</Link>
                        <Link to="/ndt-training-online" className="text-blue-600 hover:underline">API 510 Online / Virtual →</Link>
                        <Link to="/api-570-certification" className="text-blue-600 hover:underline">Compare: API 570 Piping Inspector →</Link>
                        <Link to="/api-653-certification" className="text-blue-600 hover:underline">Compare: API 653 Tank Inspector →</Link>
                        <Link to="/asnt-certification" className="text-blue-600 hover:underline">ASNT Certification (SNT-TC-1A vs ACCP) →</Link>
                    </div>
                </div>
            </section>
            <ClusterNav cluster="api-510" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema510Cert) }}
            />

            {/* 2026-05-17 additive: Related API 510 guides */}
            <section className="bg-slate-50 py-12">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">More API 510 Resources (2026)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link to="/blog/api-icp-pass-rates-510-vs-570-vs-653-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">API 510 Pass Rate 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">510 vs 570 vs 653 first-time vs overall pass rates, retake data</p>
                        </Link>
                        <Link to="/blog/api-510-570-653-exam-schedule-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">API 510 Exam Schedule 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">Application deadlines, exam windows, result dates — 2026 timeline</p>
                        </Link>
                        <Link to="/blog/api-510-body-of-knowledge-2026-changes-explained" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">API 510 BoK 2026 Changes</h3>
                            <p className="text-slate-600 text-sm mt-2">Topic weights, what changed in Sept 2025 BoK edition</p>
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
                    "title": "API 510 Inspector Services",
                    "href": "/consulting/api-510-pressure-vessel-inspector-services",
                    "description": "Outsourced inspector-of-record + FFS per API 579",
                    "icon": "consulting"
              },
              {
                    "title": "API 570 Certification",
                    "href": "/api-570-certification",
                    "description": "Piping inspector cert prep",
                    "icon": "cert"
              },
              {
                    "title": "API 653 Certification",
                    "href": "/api-653-certification",
                    "description": "Tank inspector cert prep",
                    "icon": "cert"
              },
              {
                    "title": "ASNT Certification Path",
                    "href": "/asnt-certification",
                    "description": "Level I/II/III breakdown",
                    "icon": "cert"
              },
              {
                    "title": "Inspection Procedures Software",
                    "href": "/erp/inspection-procedures-management-software",
                    "description": "Version-control & approve NDT procedures",
                    "icon": "erp"
              },
              {
                    "title": "Digital Twin for Asset Integrity",
                    "href": "/digital-twins",
                    "description": "UT/PAUT 3D overlay + API 579 FFS",
                    "icon": "dt"
              }
        ]} />

        <ContactDetails />
        </div>
    );
}
