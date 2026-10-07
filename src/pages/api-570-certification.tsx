// /* INLINE_ANCHORS_INJECTED_v1 */
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ErpDtCrossPromoBlock } from "@/components/ErpDtCrossPromoBlock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, BookOpen, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { buildTechArticleSchema } from "@/data/author-schema";
import ClusterNav from "@/components/ClusterNav";

import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
const breadcrumbSchema570Cert = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://atlantisndt.com/" },
        { "@type": "ListItem", "position": 2, "name": "Certification Guides", "item": "https://atlantisndt.com/asnt-certification" },
        { "@type": "ListItem", "position": 3, "name": "API 570 Certification", "item": "https://atlantisndt.com/api-570-certification" }
    ]
};

const examTopics = [
    "Piping design and testing (ASME B31.3) and flange ratings (ASME B16.5)",
    "Material specifications, properties, and MAWP calculations",
    "Welding and NDE requirements (ASME Section IX, V)",
    "Corrosion mechanisms and damage assessment (API 571)",
    "Inspection intervals and thickness calculations",
    "Pressure-relieving devices (API RP 576, listed sections)",
    "Repair, alteration, and re-rating procedures",
    "Inspection planning, CMLs, and documentation",
    "Material verification / PMI (API RP 578) and repair methods (ASME PCC-2)",
    "Flange, valve, and support inspection"
];

const openBookCodes = [
    { code: "API 570", title: "Piping Inspection Code: In-service Inspection, Rating, Repair, and Alteration" },
    { code: "API 571", title: "Damage Mechanisms Affecting Fixed Equipment in the Refining Industry" },
    { code: "API 574", title: "Inspection Practices for Piping System Components" },
    { code: "API 577", title: "Welding Inspection and Metallurgy" },
    { code: "API 578", title: "Material Verification Program for New and Existing Alloy Piping Systems" },
    { code: "API 576", title: "Inspection of Pressure-relieving Devices (Sections 5, 6.1-6.5 and 7)" },
    { code: "ASME B31.3", title: "Process Piping (2024 edition)" },
    { code: "ASME B16.5", title: "Pipe Flanges and Flanged Fittings" },
    { code: "ASME PCC-2", title: "Repair of Pressure Equipment and Piping (listed articles)" },
    { code: "ASME Section V", title: "Nondestructive Examination" },
    { code: "ASME Section IX", title: "Welding, Brazing, and Fusing Qualifications" },
];

const eligibilityRequirements = [
    { type: "Engineering Degree", education: "Bachelor's or higher in engineering or technology", experience: "1 year in supervision or performance of piping inspection" },
    { type: "Engineering Technology", education: "2-year degree or certificate", experience: "2 years piping-related (incl. 1 year in inspection)" },
    { type: "High School / GED", education: "High school diploma or equivalent", experience: "3 years piping-related (incl. 1 year in inspection)" },
    { type: "No Formal Education", education: "None", experience: "5+ years piping-related (incl. 1 year in inspection)" },
];

const inspectionIntervals = [
    { class: "Class 1 (highest risk)", thickness: "Half the remaining life or 5 yrs max", external: "5 years max" },
    { class: "Class 2 (moderate risk)", thickness: "Half the remaining life or 10 yrs max", external: "5 years max" },
    { class: "Class 3 (lower risk)", thickness: "Half the remaining life or 10 yrs max", external: "10 years max" },
];

// 2026-09-27 — Atlantis NDT does not offer API 570 training or exam prep.
// This block lists what Atlantis actually provides to piping integrity teams.
const trainingFormats = [
    { icon: Users, title: "API 570 Piping Inspection Services", to: "/inspection-services", desc: "In-service process piping inspection, CML thickness surveys and inspection planning delivered by qualified inspectors for refineries and petrochemical plants." },
    { icon: BookOpen, title: "ASNT SNT-TC-1A NDT Training", to: "/training", desc: "Level I and II NDT method training (UT, RT, MT, PT, VT, PAUT) built on ASNT SNT-TC-1A — the NDT skills piping inspectors rely on. Atlantis NDT does not run API exam preparation." },
    { icon: Clock, title: "NDT Level III Consulting", to: "/consulting", desc: "Written practices, procedure review and NDT program audits by an ASNT Level III for the employers who hire API 570 inspectors." },
];

const faqs = [
    { question: "What is API 570 Certification?", answer: "API 570 is an American Petroleum Institute certification for Piping Inspectors. It qualifies holders to inspect, repair, alter, and rerate in-service metallic piping systems per the API 570 code and ASME B31 piping codes. The exam has 170 questions over about 7.5 hours at Prometric test centers (110 closed-book, 60 open-book), with scaled scoring." },
    { question: "What are the eligibility requirements for API 570?", answer: "Candidates need a combination of education and piping-related experience within the last 10 years: 1 year with an engineering/technology degree, 2 years with a 2-year degree, 3 years with a high school diploma, or 5+ years with no formal education, each including at least 1 year in supervision or performance of inspection. No NDT certification is required." },
    { question: "How does API 570 differ from API 510?", answer: "API 510 covers pressure vessel inspection (drums, towers, heat exchangers), while API 570 covers in-service piping systems. Many inspectors hold both certifications for broader career opportunities — particularly in oil & gas refining and petrochemical facilities where both vessels and piping require certified inspection." },
    { question: "What codes are allowed in the API 570 exam?", answer: "The 2026 effectivity sheet lists API 570 (5th ed.), API RP 571 (selected mechanisms), RP 574, RP 576 (listed sections), RP 577, RP 578, ASME Section V and IX (listed parts), ASME B16.5, ASME B31.3 (2024) and ASME PCC-2 (listed articles). In the open-book part the references are provided electronically on screen; you cannot bring books. API 579-1 and API RP 580/581 are not on the list." },
    { question: "What are the API 570 inspection intervals?", answer: "API 570 categorises piping circuits into Classes 1, 2, and 3 based on risk. Class 1 (highest risk): thickness inspection half the remaining life or 5 years max. Class 2: half remaining life or 10 years max. Class 3: half remaining life or 10 years max. External inspections: 5 years (Class 1&2) or 10 years (Class 3). An RBI assessment per API RP 580 may be used to set intervals instead." },
    { question: "How long is the API 570 certification valid?", answer: "The API 570 certification is valid for 3 years. Recertification requires at least 20% of working time on inspection activities and 24 continuing professional development (CPD) hours per cycle, plus an online web quiz every 6 years. Check api.org for the current rules." },
    { question: "What NDT methods are covered in API 570?", answer: "API 570 inspectors must understand: Ultrasonic Testing (UT) for pipe wall thickness measurement and remaining life calculations; Radiographic Testing (RT) for weld quality; Magnetic Particle Testing (MT) and Liquid Penetrant Testing (PT) for surface cracks; Visual Testing (VT) for general condition. Phased Array UT (PAUT) and TOFD are increasingly used for piping inspection under API 570." },
    { question: "What is Corrosion Monitoring Location (CML) in API 570?", answer: "A CML (Corrosion Monitoring Location) is a designated point on a piping system where periodic thickness measurements are taken to track corrosion rate and estimate remaining life. API 570 requires inspectors to establish, track, and document CMLs based on service conditions, corrosion history, and risk. CML data feeds directly into inspection interval calculations." },
    { question: 'How much does API 570 certification cost?', answer: 'API 570 exam and recertification fees are set by API Individual Certification Programs and vary by membership status and region. They are set by API — check api.org for current fees. Atlantis NDT does not offer API 570 training or exam preparation.' }, /*kw-embed*/
    { question: 'What is the API 570 exam pass rate?', answer: 'API publishes per-window statistics: its April 2025 ICP status update showed API 570 pass rates of roughly 45-70% per window between 2020 and early 2025. Thorough coverage of the Body of Knowledge, including API 570, API 574, API 577, and the relevant ASME B31.3 content, is the strongest predictor of passing.' }, /*kw-embed*/
    { question: 'What does the API 570 Body of Knowledge cover for 2026?', answer: 'The 2026 API 570 Body of Knowledge references API 570 (5th ed.), RP 571, 574, 576, 577, 578, ASME B31.3 (2024), B16.5, Section V, Section IX and PCC-2. API revises the effectivity sheet periodically, so verify the documents and editions in force for your 2026 exam date on the API ICP site.' }, /*kw-embed*/
];

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <details className="border border-slate-200 rounded-xl overflow-hidden group" open={open} onClick={(e) => { e.preventDefault(); setOpen(!open); }}>
            <summary className="p-5 font-semibold text-slate-800 cursor-pointer hover:bg-slate-50 list-none flex items-center justify-between">
                {q}
                <span className="text-[#004aad] text-xl ml-4 flex-shrink-0">{open ? "−" : "+"}</span>
            </summary>
            <div className="px-5 pb-5 text-slate-600 leading-relaxed border-t border-slate-100">{a}</div>
        </details>
    );
}

export default function API570Certification() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            buildTechArticleSchema({
                url: "https://atlantisndt.com/api-570-certification",
                headline: "API 570 Certification 2026: Piping Inspector Exam, 11 Codes, Cost & Salary",
                description: "API 570 piping inspector deep-dive: 170-question exam (110 closed-book + 60 open-book, about 7.5 hrs, Prometric), 11 referenced publications (API 570, RP 571/574/576/577/578, ASME B31.3/B16.5/V/IX, PCC-2), inspection intervals, exam fees set by API (see api.org). By ASNT Level III Anoop Rayavarapu.",
                datePublished: "2025-08-15",
                dateModified: "2026-04-18",
                section: "Piping Inspection",
                keywords: "API 570, piping inspector, ASME B31.3, API 574, API 571 damage mechanisms",
                dependencies: "API 570, API RP 571, RP 574, RP 576, RP 577, RP 578, ASME B31.3, ASME B16.5, ASME Section V, Section IX, ASME PCC-2",
            }),
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
            },
            {
                "@type": "EducationalOccupationalCredential",
                "name": "API 570 Piping Inspector Certification",
                "credentialCategory": "Professional Certification",
                "educationalLevel": "Professional",
                "recognizedBy": { "@type": "Organization", "name": "American Petroleum Institute", "url": "https://www.api.org" },
                "validFor": "P3Y",
                "competencyRequired": "Piping inspection experience (1-3 years depending on education level)"
            },
            {
                "@type": "HowTo",
                "name": "How to Get API 570 Piping Inspector Certification",
                "description": "Step-by-step guide to earning API 570 certification for piping inspectors.",
                "totalTime": "PT720H",
                "step": [
                    { "@type": "HowToStep", "name": "Meet Eligibility", "text": "Accumulate 1-5 years of piping-related experience depending on education level (degree, 2-year degree, high school, or none)." },
                    { "@type": "HowToStep", "name": "Study Reference Codes", "text": "Study the referenced publications on the current effectivity sheet, including API 570, RP 571, RP 574 and ASME B31.3." },
                    { "@type": "HowToStep", "name": "Self-Study the Body of Knowledge", "text": "Study the API 570 Body of Knowledge and Effectivity Sheet published by API." },
                    { "@type": "HowToStep", "name": "Pass the Exam", "text": "Pass the 170-question exam (110 closed-book + 60 open-book, about 7.5 hours) at a Prometric test center." },
                    { "@type": "HowToStep", "name": "Maintain Certification", "text": "Renew every 3 years: 20% inspection work time and 24 CPD hours per cycle, plus a web quiz every 6 years." }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="API 570 Certification Guide 2026: Eligibility, Exam & Codes"
                description="API 570 piping inspector certification guide 2026 — eligibility, exam format, referenced codes, inspection intervals and recertification. Written by an ASNT Level III."
                keywords="API 570 certification, piping inspector certification, API 570 exam, API 570 eligibility, piping inspection, ASME B31.3, API 570 recertification, piping inspector exam, CML inspection, API 570 inspection services"
                canonical="https://atlantisndt.com/api-570-certification"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />
        <QuickAnswerBox question="What is API 570 piping inspector certification?" answer="API 570 is the Authorized Piping Inspector certification covering in-service inspection of process piping under the API 570 Piping Inspection Code. The exam (170 questions, about 7.5 hours, Prometric) runs in three windows a year (February, June and October) and covers API 570, RP 571/574/576/577/578, ASME B31.3, B16.5, V, IX and PCC-2." bullets={["Body of knowledge: API 570, ASME B31.3, RP 571, RP 574 and others on the effectivity sheet","Eligibility: degree + 1 yr, 2-yr degree + 2 yrs, HS + 3 yrs, or 5+ yrs piping experience","Recertification: every 3 years (20% inspection work + 24 CPD hours; web quiz every 6 years)"]} />
        <QuickAnswerBox question="How much does API 570 certification cost?" answer="API 570 exam and recertification fees are set by API Individual Certification Programs (API ICP) and vary by membership status and region — they are set by API, so check api.org for current fees. Atlantis NDT does not sell API exam preparation; we provide API 570 inspection services, ASNT SNT-TC-1A NDT training and Level III consulting (quote on request)." />


            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4"><Award className="w-5 h-5" /><span>Professional Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 570 Certification Guide 2026: Eligibility, Exam &amp; Codes</h1>
        {/* 2026-08-07 — Atlantis does not offer an API 570 exam-prep course;
            this box previously claimed a scheduled USA cohort. Reframed to
            what Atlantis actually does: ASNT Level III consulting for the
            employers who hire API 570 inspectors, not a class we run. */}
        <p className="my-4 rounded-md border-l-4 border-emerald-600 bg-emerald-50 p-3 text-sm">
          <strong>Based in the USA (Houston, Beaumont, Tulsa, Pasadena, Mobile)?</strong> Atlantis NDT Level III consultants work with refining-sector employers (ExxonMobil, Marathon, Phillips 66, Shell) on inspection programs and written-practice support — not an API 570 exam-prep class.
          {' '}<a href="/contact" className="text-primary underline underline-offset-2 hover:opacity-80">Talk to a consultant →</a>
        </p>

        <p className="my-4 rounded-md border-l-4 border-primary/60 bg-primary/5 p-3 text-sm">
          <strong>Written by an ASNT Level III:</strong> this guide is authored and maintained by Atlantis NDT founder Anoop Rayavarapu, ASNT NDT Level III multi-method.
          {' '}<a href="/consulting" className="text-primary underline underline-offset-2 hover:opacity-80">Talk to a Level III consultant →</a>
        </p>

                        <p className="text-xl text-blue-100 max-w-3xl mb-8">Everything you need to become a certified API 570 Piping Inspector — eligibility, ASME B31.3, API 571, remaining-life calculations and the NDT methods behind the job.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/inspection-services" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">API 570 Inspection Services</Link>
                            <Link to="/consulting" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">Atlantis NDT Consulting</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">11</div><div className="text-slate-600">Referenced Publications</div></div>
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">170</div><div className="text-slate-600">Exam Questions</div></div>
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">7.5 hrs</div><div className="text-slate-600">Exam Duration</div></div>
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">3 Yrs</div><div className="text-slate-600">Certificate Validity</div></div>
                    </div>
                </div>
            </section>

            {/* What is API 570 */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What is API 570 Certification?</h2>
                            <p className="text-lg text-slate-600 mb-4">API 570 is a globally recognised certification for Piping Inspectors, administered by the American Petroleum Institute. Certified inspectors are qualified to inspect, repair, alter, and rerate in-service metallic piping systems per API 570 and ASME B31 codes.</p>
                            <p className="text-slate-600 mb-4">The certification is required or strongly preferred in refineries, petrochemical plants, chemical facilities, and natural gas processing plants. Certified piping inspectors can independently authorise repairs and alterations under API 570 — a role requiring formal certification.</p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                                <p className="text-blue-800 text-sm"><strong>Career Impact:</strong> API 570 holders are in consistent demand in refineries and petrochemical facilities. Many inspectors combine API 570 with <a href="/api-510-certification" className="text-primary underline underline-offset-2 hover:opacity-80">API 510</a> (pressure vessels) and/or API 653 (storage tanks) for broader inspection authority and higher earning potential.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800">Eligibility Requirements</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                    <thead className="bg-blue-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold text-blue-800">Education</th>
                                            <th className="px-4 py-3 text-left font-semibold text-blue-800">Min. Experience</th>
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
                            <p className="text-xs text-slate-500 mt-2">Experience must be in piping inspection, evaluation, or engineering. Full requirements on API website.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Reference Codes */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">API 570 Open-Book Reference Codes</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">The exam has a 110-question closed-book part and a 60-question open-book part; in the open-book part these publications are provided electronically on screen. Fast navigation is critical.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm border border-slate-100">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-5 py-3 text-left font-semibold w-40">Code</th>
                                    <th className="px-5 py-3 text-left font-semibold">Title / Scope</th>
                                </tr>
                            </thead>
                            <tbody>
                                {openBookCodes.map((item, i) => (
                                    <tr key={item.code} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-5 py-3 font-bold text-blue-700 text-sm">{item.code}</td>
                                        <td className="px-5 py-3 text-slate-700 text-sm">{item.title}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Inspection Intervals */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">API 570 Piping Inspection Intervals</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">API 570 classifies piping circuits into 3 risk classes. Inspection intervals are based on class, corrosion rate, and remaining life calculations — a key exam calculation area.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-blue-700 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Piping Class</th>
                                    <th className="px-4 py-3 text-left">Thickness Inspection Max</th>
                                    <th className="px-4 py-3 text-left">External Inspection Max</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inspectionIntervals.map((row, i) => (
                                    <tr key={row.class} className={i % 2 === 0 ? "bg-white" : "bg-blue-50"}>
                                        <td className="px-4 py-3 font-medium text-sm">{row.class}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm">{row.thickness}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm">{row.external}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-sm text-slate-500 mt-3 text-center">An RBI assessment per API RP 580 may be used to set intervals instead of the table maximums.</p>
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
                    <h2 className="text-3xl font-bold text-center mb-4">How Atlantis NDT Supports Piping Integrity Teams</h2>
                    <p className="text-center text-slate-600 mb-12">Atlantis NDT does not offer API 570 training or exam preparation. Here is what we do provide.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {trainingFormats.map((fmt) => (
                            <Card key={fmt.title} className="hover:shadow-lg transition border-t-4 border-t-blue-600">
                                <CardHeader className="pb-2">
                                    <fmt.icon className="w-8 h-8 text-blue-600 mb-2" />
                                    <CardTitle className="text-lg">{fmt.title}</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">{fmt.desc}</p><Link to={fmt.to} className="text-sm font-semibold text-blue-700 hover:underline mt-3 inline-block">Learn more →</Link></CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link to="/consulting" className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">Atlantis NDT Consulting &amp; Inspection Support →</Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>API 570 Certification — Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} q={faq.question} a={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Working on API 570 Piping Systems?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Need piping inspected, NDT technicians trained to ASNT SNT-TC-1A, or a Level III review of your NDT program? Talk to Atlantis NDT.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/inspection-services" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request API 570 Inspection Quote</Link>
                        <Link to="/consulting" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">Atlantis NDT Consulting</Link>
                        <Link to="/api-510-certification" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 510 Certification</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <h3 className="text-xl font-semibold mb-4">ASNT SNT-TC-1A NDT Training by Location</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                        <Link to="/ndt-training-houston" className="text-blue-600 hover:underline">NDT Training Houston, TX →</Link>
                        <Link to="/ndt-training-dubai" className="text-blue-600 hover:underline">NDT Training Dubai, UAE →</Link>
                        <Link to="/ndt-training-saudi-arabia" className="text-blue-600 hover:underline">NDT Training Saudi Arabia →</Link>
                        <Link to="/ndt-training-singapore" className="text-blue-600 hover:underline">NDT Training Singapore →</Link>
                        <Link to="/ndt-training-india" className="text-blue-600 hover:underline">NDT Training India (Hyderabad / Mumbai) →</Link>
                        <Link to="/ndt-training-online" className="text-blue-600 hover:underline">NDT Training Online / Virtual →</Link>
                        <Link to="/api-510-certification" className="text-blue-600 hover:underline">Compare: API 510 Pressure Vessel Inspector →</Link>
                        <Link to="/api-653-certification" className="text-blue-600 hover:underline">Compare: API 653 Tank Inspector →</Link>
                        <Link to="/asnt-certification" className="text-blue-600 hover:underline">ASNT Certification (SNT-TC-1A vs ASNT 9712 (formerly ACCP)) →</Link>
                    </div>
                </div>
            </section>
            <ClusterNav cluster="api-570" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema570Cert) }}
            />

            {/* 2026-05-17 additive: Related API 570 guides */}
            <section className="bg-slate-50 py-12">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">More API 570 Resources (2026)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link to="/blog/api-icp-pass-rates-510-vs-570-vs-653-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">API 570 Pass Rate 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">510 vs 570 vs 653 pass rates compared with retake stats</p>
                        </Link>
                        <Link to="/blog/api-510-570-653-exam-schedule-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">API 570 Exam Schedule 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">Application deadlines, exam windows, result dates</p>
                        </Link>
                        <Link to="/blog/api-570-inspector-salary-2026-by-region-experience" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">API 570 Inspector Salary 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">USA, Gulf, India salary by experience + Triple Crown premium</p>
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
                    "title": "API 570 Piping Inspector Services",
                    "href": "/consulting/api-570-piping-inspector-services",
                    "description": "Outsourced API 570 piping inspection + CUI NDT",
                    "icon": "consulting"
              },
              {
                    "title": "API 510 Certification",
                    "href": "/api-510-certification",
                    "description": "Pressure vessel inspector certification guide",
                    "icon": "cert"
              },
              {
                    "title": "API 653 Certification",
                    "href": "/api-653-certification",
                    "description": "Tank inspector certification guide",
                    "icon": "cert"
              },
              {
                    "title": "ASNT Certification Path",
                    "href": "/asnt-certification",
                    "description": "Level I/II/III breakdown",
                    "icon": "cert"
              },
              {
                    "title": "Quality Management for NDT",
                    "href": "/erp/quality-management-for-ndt-companies",
                    "description": "ISO 9001 / 17025 / 17020 ready",
                    "icon": "erp"
              },
              {
                    "title": "Digital Twin Platform",
                    "href": "/digital-twins",
                    "description": "Inspection-data-native asset integrity",
                    "icon": "dt"
              }
        ]} />

        <ContactDetails />
        </div>
    );
}
