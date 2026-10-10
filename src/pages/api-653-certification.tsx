// /* INLINE_ANCHORS_INJECTED_v1 */
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ErpDtCrossPromoBlock } from "@/components/ErpDtCrossPromoBlock";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, BookOpen, Clock, FileText, Users, AlertCircle, DollarSign, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { buildTechArticleSchema } from "@/data/author-schema";
import ClusterNav from "@/components/ClusterNav";

import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import MONEY_META from "@/data/money-page-meta.json"; // one source with scripts/ctr-wave13-overrides.mjs
const breadcrumbSchema653Cert = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://atlantisndt.com/" },
        { "@type": "ListItem", "position": 2, "name": "Certification Guides", "item": "https://atlantisndt.com/asnt-certification" },
        { "@type": "ListItem", "position": 3, "name": "API 653 Certification", "item": "https://atlantisndt.com/api-653-certification" }
    ]
};

const examTopics = [
    "Tank design and construction (API 650, API 12C)",
    "Inspection methods and intervals",
    "Corrosion assessment and remaining life calculations",
    "Floor, shell, and roof inspection techniques",
    "Settlement, foundation, and appurtenance evaluation",
    "Repair and reconstruction procedures",
    "Welding and NDE requirements (ASME Section IX, V)",
    "Pressure-relieving devices on tanks (API RP 576, listed sections)",
    "Cathodic protection and coating assessment",
    "Documentation and record keeping"
];

const openBookCodes = [
    { code: "API 653", title: "Aboveground Storage Tank Inspection, Repair, Alteration, and Reconstruction" },
    { code: "API 650", title: "Welded Tanks for Oil Storage" },
    { code: "API RP 575", title: "Inspection Practices for Atmospheric and Low-Pressure Storage Tanks" },
    { code: "API 651", title: "Cathodic Protection of Aboveground Petroleum Storage Tanks" },
    { code: "API 652", title: "Lining of Aboveground Petroleum Storage Tank Bottoms" },
    { code: "API 571", title: "Damage Mechanisms Affecting Fixed Equipment in the Refining Industry" },
    { code: "API RP 577", title: "Welding Processes, Inspection, and Metallurgy" },
    { code: "ASME Section V", title: "Nondestructive Examination" },
    { code: "ASME Section IX", title: "Welding, Brazing, and Fusing Qualifications" },
    { code: "API RP 576", title: "Inspection of Pressure-relieving Devices (Sections 4.3.2 and 6.7 only)" },
];

const eligibilityRequirements = [
    { type: "Engineering Degree", education: "Bachelor's or higher in engineering or technology", experience: "1 year in supervision or performance of tank inspection" },
    { type: "Engineering Technology", education: "2-year degree or certificate", experience: "2 years tank-related (incl. 1 year in inspection)" },
    { type: "High School / GED", education: "High school diploma or equivalent", experience: "3 years tank-related (incl. 1 year in inspection)" },
    { type: "No Formal Education", education: "None", experience: "5+ years tank-related (incl. 1 year in inspection)" },
];

const inspectionIntervals = [
    { inspection: "Routine in-service inspection", standard: "API 653 §6.3.1", interval: "Owner personnel, intervals not exceeding one month" },
    { inspection: "External Inspection", standard: "API 653 §6.3.2", interval: "Lesser of 5 years or RCA/4N years (authorized inspector)" },
    { inspection: "Internal Inspection", standard: "API 653 §6.4", interval: "First internal within 10 years unless Table 6.1 credits apply (cap 20 years without an RPB, 30 with one); later intervals from bottom corrosion rates (20-year cap) or RBI" },
    { inspection: "Shell UT thickness", standard: "API 653 §6.3.3", interval: "5 years if corrosion rate unknown; else lesser of RCA/2N or 15 years" },
    { inspection: "Foundation and Settlement", standard: "API 653 Annex B", interval: "Evaluated during inspections when settlement is suspected or measured" },
    { inspection: "Floor Integrity (MFL/UT)", standard: "API 653 §6.4.2", interval: "At each internal inspection" },
];

// 2026-09-27 — Atlantis NDT does not offer API 653 training or exam prep.
// This block lists what Atlantis actually provides to tank owners.
const trainingFormats = [
    { icon: Users, title: "API 653 Tank Inspection Services", to: "/inspection-services", desc: "Aboveground storage tank inspection — shell and floor thickness surveys, MFL floor scanning and inspection planning delivered by qualified inspectors." },
    { icon: BookOpen, title: "ASNT SNT-TC-1A NDT Training", to: "/training", desc: "Level I and II NDT method training (UT, MT, PT, VT, MFL awareness) built on ASNT SNT-TC-1A — the NDT skills tank inspectors rely on. Atlantis NDT does not run API exam preparation." },
    { icon: Clock, title: "NDT Level III Consulting", to: "/consulting", desc: "Written practices, procedure review and NDT program audits by an ASNT Level III for the terminals and refineries that hire API 653 inspectors." },
];

const faqs = [
    { question: "What is API 653 Certification?", answer: "API 653 is an American Petroleum Institute certification for Aboveground Storage Tank (AST) Inspectors. It qualifies inspectors to inspect, repair, alter, and reconstruct tanks built to API 650 or API 12C. The exam is administered by API at Prometric test centers: 170 questions over about 7.5 hours (110 closed-book, 60 open-book)." },
    { question: "What are the eligibility requirements for the API 653 exam?", answer: "Candidates need education plus tank-related experience within the last 10 years: 1 year with an engineering/technology degree, 2 years with a 2-year degree, 3 years with a high school diploma, or 5+ years with no formal education, each including at least 1 year in supervision or performance of inspection. No NDT certification is required." },
    { question: "What is the API 653 exam format?", answer: "The exam has 170 multiple-choice questions (140 scored) over about 7.5 hours at Prometric test centers: 110 closed-book questions, then 60 open-book questions with the references provided electronically on screen. You cannot bring books. API reports a scaled score rather than a fixed percentage pass mark; remote proctoring is not available." },
    { question: "What codes are allowed in the API 653 exam?", answer: "For the 2026 windows the effectivity sheet lists API 653 (5th ed. through Addendum 3, Errata 2), API 650 (13th ed.), API RP 571 (selected mechanisms), RP 575, RP 576 (4.3.2 and 6.7 only), RP 577, RP 651, RP 652, and ASME Section V and IX (listed parts). API 579-1, API 620 and ASME VIII are not on the list." },
    { question: "How often should aboveground storage tanks be inspected?", answer: "Per API 653: owner routine checks at intervals not exceeding one month; external inspection by an authorized inspector at the lesser of 5 years or RCA/4N; shell UT at 5 years if the corrosion rate is unknown, otherwise the lesser of RCA/2N or 15 years; first internal inspection within 10 years unless Table 6.1 safeguards add credit (capped at 20 years without a release prevention barrier, 30 with one), then intervals from bottom corrosion rates or an RBI assessment." },
    { question: "How long is the API 653 certification valid?", answer: "The API 653 certification is valid for 3 years. Recertification requires at least 20% of working time on inspection activities and 24 CPD hours per cycle, plus an online web quiz every 6 years. Check api.org for the current rules." },
    { question: "What NDT methods are used in API 653 tank inspection?", answer: "Key NDT methods for API 653 tank inspection: Ultrasonic Testing (UT) for shell and floor thickness measurement; Magnetic Flux Leakage (MFL) for floor scanning; Radiographic Testing (RT) for weld inspection; Vacuum Box Testing for floor weld leak detection; Visual Testing (VT) for general inspection; ACFM/MT for surface cracks on welds." },
    { question: "What is the difference between API 653 and API 650?", answer: "API 650 covers the design and construction of new aboveground storage tanks. API 653 covers the inspection, repair, alteration, and reconstruction of tanks already in service — whether built to API 650, API 12C, or equivalent standards. Both codes are used together in API 653 inspection work." },
    { question: 'What does an API 653 tank inspection cover?', answer: 'An API 653 inspection assesses the integrity of aboveground storage tanks, covering the tank floor, shell, roof, nozzles, and foundation. Inspectors apply ultrasonic thickness measurement, magnetic flux leakage floor scanning, settlement surveys, and visual examination to determine corrosion rates, remaining life, and the next inspection interval under API 653.' }, /*kw-embed*/
    { question: 'What is the API 653 exam pass rate?', answer: 'API publishes per-window statistics: its April 2025 ICP status update showed API 653 pass rates of roughly 62-76% per window between 2020 and early 2025. Candidates who know the Body of Knowledge well, especially API 653, API 650, and API 575, tend to do best. Confirm the latest exam statistics and outline on the API ICP website.' }, /*kw-embed*/
    { question: 'What is in the API 653 Body of Knowledge for 2026?', answer: 'The API 653 Body of Knowledge for the 2026 windows references API 653 (through Addendum 3), API 650 (13th ed.), RP 571, 575, 576, 577, 651, 652 and ASME Section V and IX. API updates the effectivity sheet periodically, so check the published BoK and effectivity dates for your 2026 exam window before you begin studying.' }, /*kw-embed*/
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

export default function API653Certification() {
    const faqSchemaData = [
        {
            "@type": "Question",
            "name": "How hard is the API 653 exam?",
            "acceptedAnswer": { "@type": "Answer", "text": "API 653 has 170 questions over about 7.5 hours (110 closed-book, 60 open-book). It requires knowledge of ten referenced publications. API reported per-window pass rates of roughly 62-76% between 2020 and early 2025; candidates who know the Body of Knowledge and can navigate the codes quickly tend to do best. Atlantis NDT does not run API exam preparation." },
        },
        {
            "@type": "Question",
            "name": "What codes are referenced in API 653?",
            "acceptedAnswer": { "@type": "Answer", "text": "The 2026 API 653 exam references API 653, API 650, API RP 571, 575, 576 (listed sections), 577, 651, 652, and ASME Section V and IX." },
        },
        {
            "@type": "Question",
            "name": "What salary can an API 653 certified inspector expect?",
            "acceptedAnswer": { "@type": "Answer", "text": "Pay varies by region, employer and rotation; use attributed sources such as the US Bureau of Labor Statistics or the ASNT salary survey for current figures." },
        },
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            buildTechArticleSchema({
                url: "https://atlantisndt.com/api-653-certification",
                headline: "API 653 Certification 2026: Tank Inspector Exam, 10 Codes, Cost, Salary Guide",
                description: "API 653 aboveground storage tank inspector deep-dive: 170-question exam (110 closed-book + 60 open-book, about 7.5 hrs, Prometric), 10 referenced publications (API 650/653, RP 571/575/576/577/651/652, ASME V/IX), internal/external/UT inspection intervals, exam fees set by API (see api.org). By ASNT Level III Anoop Rayavarapu.",
                datePublished: "2025-08-15",
                dateModified: "2026-04-18",
                section: "Storage Tank Inspection",
                keywords: "API 653, API 650, tank inspector, aboveground storage tank, AST inspection",
                dependencies: "API 653, API 650, API RP 571, RP 575, RP 576, RP 577, RP 651, RP 652, ASME Section V, Section IX",
            }),
            {
                "@type": "FAQPage",
                "mainEntity": [
                    ...faqSchemaData,
                    ...faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                    }))
                ]
            },
            {
                "@type": "EducationalOccupationalCredential",
                "name": "API 653 Aboveground Storage Tank Inspector Certification",
                "credentialCategory": "Professional Certification",
                "educationalLevel": "Professional",
                "recognizedBy": { "@type": "Organization", "name": "American Petroleum Institute", "url": "https://www.api.org" },
                "validFor": "P3Y",
                "competencyRequired": "Tank-related experience (1-5 years depending on education level)"
            },
            {
                "@type": "HowTo",
                "name": "How to Get API 653 Tank Inspector Certification",
                "description": "Step-by-step guide to earning API 653 certification for storage tank inspectors.",
                "totalTime": "PT720H",
                "step": [
                    { "@type": "HowToStep", "name": "Meet Eligibility", "text": "Accumulate 1-5 years of tank-related experience depending on education level (degree, 2-year degree, high school, or none)." },
                    { "@type": "HowToStep", "name": "Study Reference Codes", "text": "Study the referenced publications on the current effectivity sheet, including API 653, API 650, RP 575, RP 651, RP 652 and ASME Section V/IX." },
                    { "@type": "HowToStep", "name": "Self-Study the Body of Knowledge", "text": "Study the API 653 Body of Knowledge and Effectivity Sheet published by API." },
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
                title={MONEY_META["/api-653-certification"].title}
                description={MONEY_META["/api-653-certification"].description}
                keywords="API 653 certification, API 653 tank inspector, API 653 exam, API 653 eligibility, aboveground storage tank inspection, API 650, tank inspector certification, API 653 recertification, storage tank NDT, API 653 inspection services"
                canonical="https://atlantisndt.com/api-653-certification"
                structuredData={structuredData}
                faq={faqs}
            />
            <Breadcrumbs />
        <QuickAnswerBox question="What is API 653 tank inspector certification?" answer="API 653 is the Authorized Aboveground Storage Tank Inspector certification covering in-service inspection, repair, alteration, and reconstruction of welded storage tanks per the API 653 code. The exam (170 questions, about 7.5 hours, Prometric; windows in March, July and November) covers API 653, API 650, RP 571/575/576/577/651/652 and ASME V and IX. Used for owner-operator tank inspections at terminals, refineries, and bulk distribution facilities." bullets={["Body of knowledge: API 653, 650, RP 571/575/576/577/651/652, ASME V and IX","Eligibility: degree + 1 yr, 2-yr degree + 2 yrs, HS + 3 yrs, or 5+ yrs tank experience","Recertification: every 3 years (20% inspection work + 24 CPD hours; web quiz every 6 years)"]} />
        <QuickAnswerBox question="How much does API 653 certification cost?" answer="API 653 exam and recertification fees are set by API Individual Certification Programs (API ICP) and vary by membership status and region — they are set by API, so check api.org for current fees. Atlantis NDT does not sell API exam preparation; we provide API 653 tank inspection services, ASNT SNT-TC-1A NDT training and Level III consulting (quote on request)." />


            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-amber-200 mb-4"><Award className="w-5 h-5" /><span>Professional Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 653 Certification Guide 2026: Eligibility, Exam &amp; Codes</h1>
        {/* 2026-08-07 — Atlantis does not offer an API 653 exam-prep course;
            this box previously claimed a scheduled USA cohort. Reframed to
            what Atlantis actually does: ASNT Level III consulting for the
            employers who hire API 653 inspectors, not a class we run. */}
        <p className="my-4 rounded-md border-l-4 border-emerald-600 bg-emerald-50 p-3 text-sm">
          <strong>Based in the USA (Houston, Beaumont, Tulsa, Pasadena, Mobile)?</strong> Atlantis NDT Level III consultants work with refining-sector employers (ExxonMobil, Marathon, Phillips 66, Shell) on inspection programs and written-practice support — not an API 653 exam-prep class.
          {' '}<a href="/contact" className="text-primary underline underline-offset-2 hover:opacity-80">Talk to a consultant →</a>
        </p>

        <p className="my-4 rounded-md border-l-4 border-primary/60 bg-primary/5 p-3 text-sm">
          <strong>Written by an ASNT Level III:</strong> this guide is authored and maintained by Atlantis NDT founder Anoop Rayavarapu, ASNT NDT Level III multi-method.
          {' '}<a href="/consulting" className="text-primary underline underline-offset-2 hover:opacity-80">Talk to a Level III consultant →</a>
        </p>

                        <p className="text-xl text-amber-100 max-w-3xl mb-8">Everything you need to become a certified API 653 Aboveground Storage Tank Inspector — eligibility, exam structure, reference codes, recertification and the NDT methods behind the job.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/inspection-services" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">API 653 Tank Inspection Services</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">ASNT NDT Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">10</div><div className="text-slate-600">Reference Codes</div></div>
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">170</div><div className="text-slate-600">Exam Questions</div></div>
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">7.5 hrs</div><div className="text-slate-600">Exam Duration</div></div>
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">3 Yrs</div><div className="text-slate-600">Certificate Validity</div></div>
                    </div>
                </div>
            </section>

            {/* What is API 653 */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">What is API 653 Certification?</h2>
                            <p className="text-lg text-slate-600 mb-4">API 653 is a globally recognised certification for Aboveground Storage Tank (AST) Inspectors, administered by the American Petroleum Institute. Certified inspectors are qualified to inspect, repair, alter, and reconstruct tanks in service per API 653 and API 650 standards.</p>
                            <p className="text-slate-600 mb-4">The certification is required or strongly preferred at refineries, petrochemical plants, tank terminals, pipeline storage facilities, and chemical plants worldwide. Holders are authorised to sign off on API 653 inspection reports — a role that cannot be performed by non-certified personnel.</p>
                            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                                <p className="text-amber-800 text-sm"><strong>Career Impact:</strong> API 653 certified inspectors are consistently in demand across oil & gas storage, pipeline, and refining sectors. Many ASNT Level III professionals add API 653 to qualify for inspection lead roles.</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 text-slate-800">Eligibility Requirements</h3>
                            <div className="overflow-x-auto">
                                <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                    <thead className="bg-amber-50">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold text-amber-800">Education</th>
                                            <th className="px-4 py-3 text-left font-semibold text-amber-800">Min. Experience</th>
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
                            <p className="text-xs text-slate-500 mt-2">Experience must be in AST inspection, repair, construction, or engineering. Full requirements: API website.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Exam Cost & Recertification */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">API 653 Exam Cost & Recertification</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Budget for the exam fee and code books, and plan ahead for recertification every 3 years.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="border-t-4 border-t-amber-500">
                            <CardHeader className="pb-2">
                                <DollarSign className="w-8 h-8 text-amber-600 mb-2" />
                                <CardTitle className="text-xl">Exam &amp; Code Book Costs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                                        <div>
                                            <div className="font-medium text-slate-800">API 653 Exam Fee</div>
                                            <div className="text-xs text-slate-500">Paid directly to API</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-amber-700">Set by API</div>
                                            <div className="text-xs text-slate-500">Check api.org for current fees</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-medium text-slate-800">Code Books (10 codes)</div>
                                            <div className="text-xs text-slate-500">Study copies (references are provided on screen at the exam)</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-amber-700">Set by API / ASME</div>
                                            <div className="text-xs text-slate-500">Can be shared / reused</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 text-center">
                                    <Link to="/tools/ndt-certification-cost-calculator" className="text-sm text-amber-700 font-semibold hover:underline">Estimate your total cost with our calculator →</Link>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="border-t-4 border-t-amber-500">
                            <CardHeader className="pb-2">
                                <Clock className="w-8 h-8 text-amber-600 mb-2" />
                                <CardTitle className="text-xl">Recertification (Every 3 Years)</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-600 text-sm mb-4">API 653 certification is valid for 3 years. Recertification (per api.org) requires all of the following:</p>
                                <div className="space-y-3">
                                    <div className="bg-amber-50 p-4 rounded-lg">
                                        <div className="font-semibold text-amber-800 mb-1">Inspection work</div>
                                        <p className="text-sm text-slate-600">At least <strong>20% of working time</strong> on inspection activities during the 3-year cycle.</p>
                                    </div>
                                    <div className="bg-amber-50 p-4 rounded-lg">
                                        <div className="font-semibold text-amber-800 mb-1">Continuing professional development</div>
                                        <p className="text-sm text-slate-600"><strong>24 CPD hours</strong> per cycle, plus an online <strong>web quiz every 6 years</strong>.</p>
                                    </div>
                                </div>
                                <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-3">
                                    <p className="text-xs text-slate-500"><strong>Tip:</strong> Keep records of inspection work and CPD activities from day one; recertification applications open 90 days before expiry. Check api.org for the current rules.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Open Reference Codes */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">API 653 Open-Book Reference Codes</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">The exam has a 110-question closed-book part and a 60-question open-book part; in the open-book part these publications are provided electronically on screen. Knowing how to navigate them quickly is what gets candidates through the time limit.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm border border-slate-100">
                            <thead className="bg-slate-800 text-white">
                                <tr>
                                    <th className="px-5 py-3 text-left font-semibold w-32">Code</th>
                                    <th className="px-5 py-3 text-left font-semibold">Title / Scope</th>
                                </tr>
                            </thead>
                            <tbody>
                                {openBookCodes.map((item, i) => (
                                    <tr key={item.code} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                                        <td className="px-5 py-3 font-bold text-amber-700 text-sm">{item.code}</td>
                                        <td className="px-5 py-3 text-slate-700 text-sm">{item.title}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Inspection Intervals */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">API 653 Tank Inspection Intervals</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">A critical exam topic — and real-world requirement. Know these intervals and the conditions under which Table 6.1 credits or an RBI assessment change them.</p>
                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-xl shadow-sm">
                            <thead className="bg-amber-600 text-white">
                                <tr>
                                    <th className="px-4 py-3 text-left">Inspection Type</th>
                                    <th className="px-4 py-3 text-left">Code Section</th>
                                    <th className="px-4 py-3 text-left">Standard Interval</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inspectionIntervals.map((row, i) => (
                                    <tr key={row.inspection} className={i % 2 === 0 ? "bg-white" : "bg-amber-50"}>
                                        <td className="px-4 py-3 font-medium text-sm">{row.inspection}</td>
                                        <td className="px-4 py-3 text-slate-500 text-sm font-mono">{row.standard}</td>
                                        <td className="px-4 py-3 text-slate-700 text-sm">{row.interval}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Exam Topics */}
            <section className="py-16 bg-slate-50">
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
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">How Atlantis NDT Supports Tank Owners</h2>
                    <p className="text-center text-slate-600 mb-12">Atlantis NDT does not offer API 653 training or exam preparation. Here is what we do provide.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {trainingFormats.map((fmt) => (
                            <Card key={fmt.title} className="hover:shadow-lg transition border-t-4 border-t-amber-500">
                                <CardHeader className="pb-2">
                                    <fmt.icon className="w-8 h-8 text-amber-600 mb-2" />
                                    <CardTitle className="text-lg">{fmt.title}</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">{fmt.desc}</p><Link to={fmt.to} className="text-sm font-semibold text-amber-700 hover:underline mt-3 inline-block">Learn more →</Link></CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* NDT Methods */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">NDT Methods in API 653 Tank Inspection</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">API 653 inspectors must understand when and how to apply each NDT method for tank components.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { method: "Ultrasonic Testing (UT)", use: "Shell and floor thickness measurement, corrosion rate calculation" },
                            { method: "Magnetic Flux Leakage (MFL)", use: "Floor plate scanning for pitting and corrosion — fast, covers 100% of floor" },
                            { method: "Radiographic Testing (RT)", use: "Weld quality inspection during repair/reconstruction" },
                            { method: "Vacuum Box Testing", use: "Floor weld leak testing — critical for storage tank floor integrity" },
                            { method: "Magnetic Particle Testing (MT)", use: "Surface and near-surface crack detection in welds and shell" },
                            { method: "Visual Testing (VT)", use: "General condition assessment, coating inspection, settlement survey" },
                        ].map((item) => (
                            <div key={item.method} className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                                <h3 className="font-semibold text-amber-700 mb-1">{item.method}</h3>
                                <p className="text-sm text-slate-600">{item.use}</p>
                            </div>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <Link to="/blog/api-653-tank-inspection-guide" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">Read API 653 Tank Inspection Guide →</Link>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: "#004aad" }}>API 653 Certification — Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <FAQItem key={i} q={faq.question} a={faq.answer} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Certifications */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Related Certifications & Resources</h2>
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Expand your qualifications with complementary API and ASNT certifications, or explore our free tools and guides.</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Link to="/api-510-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-amber-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700 transition"><a href="/api-510-certification" className="text-primary underline underline-offset-2 hover:opacity-80">API 510</a> Certification</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition" />
                                    </div>
                                    <p className="text-sm text-slate-600">Pressure Vessel Inspector certification. Covers ASME Section VIII, in-service inspection, and repair of pressure vessels.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/api-570-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-amber-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700 transition"><a href="/api-570-certification" className="text-primary underline underline-offset-2 hover:opacity-80">API 570</a> Certification</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition" />
                                    </div>
                                    <p className="text-sm text-slate-600">Piping Inspector certification. Covers in-service inspection, repair, and alteration of piping systems per ASME B31.3.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/asnt-certification" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-amber-500">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700 transition">ASNT NDT Certification</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition" />
                                    </div>
                                    <p className="text-sm text-slate-600">Level I, II, and III NDT certifications for UT, RT, MT, PT, VT, and ET methods per SNT-TC-1A and ASNT CP-189.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/ndt-certification-guide" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-orange-400">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700 transition">Complete Certification Guide</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition" />
                                    </div>
                                    <p className="text-sm text-slate-600">Compare all NDT and API certifications side by side. Requirements, costs, career paths, and study tips.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/tools/ndt-certification-cost-calculator" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-orange-400">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700 transition">Certification Cost Calculator</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition" />
                                    </div>
                                    <p className="text-sm text-slate-600">Estimate the total investment for API 653 and other certifications. Covers exam and code-book budgeting.</p>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link to="/blog/api-653-tank-inspection-guide" className="group">
                            <Card className="h-full hover:shadow-lg transition border-l-4 border-l-orange-400">
                                <CardContent className="p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700 transition">API 653 Tank Inspection Guide</h3>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-600 transition" />
                                    </div>
                                    <p className="text-sm text-slate-600">In-depth blog guide covering API 653 inspection procedures, corrosion assessment, and remaining life calculations.</p>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Managing API 653 Storage Tanks?</h2>
                    <p className="text-amber-100 mb-8 text-lg">Need tanks inspected, NDT technicians trained to ASNT SNT-TC-1A, or a Level III review of your NDT program? Talk to Atlantis NDT.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/inspection-services" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request API 653 Inspection Quote</Link>
                        <Link to="/api-510-certification" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 510 Certification</Link>
                        <Link to="/api-570-certification" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 570 Certification</Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <h3 className="text-xl font-semibold mb-4">ASNT SNT-TC-1A NDT Training by Location</h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                        <Link to="/ndt-training-houston" className="text-blue-600 hover:underline">NDT Training Houston, TX →</Link>
                        <Link to="/ndt-training-dubai" className="text-blue-600 hover:underline">NDT Training Dubai, UAE →</Link>
                        <Link to="/ndt-training-saudi-arabia" className="text-blue-600 hover:underline">NDT Training Saudi Arabia (Jubail / Yanbu) →</Link>
                        <Link to="/ndt-training-singapore" className="text-blue-600 hover:underline">NDT Training Singapore →</Link>
                        <Link to="/ndt-training-india" className="text-blue-600 hover:underline">NDT Training India (Hyderabad / Mumbai) →</Link>
                        <Link to="/ndt-training-online" className="text-blue-600 hover:underline">NDT Training Online / Virtual →</Link>
                        <Link to="/api-510-certification" className="text-blue-600 hover:underline">Compare: API 510 Pressure Vessel Inspector →</Link>
                        <Link to="/api-570-certification" className="text-blue-600 hover:underline">Compare: API 570 Piping Inspector →</Link>
                        <Link to="/blog/api-653-tank-inspection-guide" className="text-blue-600 hover:underline">Read: API 653 Tank Inspection Guide →</Link>
                    </div>
                </div>
            </section>
            <ClusterNav cluster="api-653" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema653Cert) }}
            />

            {/* 2026-05-17 additive: Related API 653 guides */}
            <section className="bg-slate-50 py-12">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">More API 653 Resources (2026)</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link to="/blog/api-icp-pass-rates-510-vs-570-vs-653-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">API 653 Pass Rate 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">510 vs 570 vs 653 pass rates with study-hour benchmarks</p>
                        </Link>
                        <Link to="/blog/api-653-current-edition-2026-vs-bok-window-explained" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">API 653 Current Edition 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">5th Edition + addenda timeline, BoK window mapping</p>
                        </Link>
                        <Link to="/blog/api-510-570-653-exam-schedule-2026" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                            <h3 className="font-bold group-hover:text-blue-600 transition">API 653 Exam Schedule 2026</h3>
                            <p className="text-slate-600 text-sm mt-2">Application deadlines + exam windows for tank inspectors</p>
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
                    "title": "API 653 Tank Inspector Services",
                    "href": "/consulting/api-653-tank-inspector-services",
                    "description": "Outsourced API 653 tank inspection + floor scanning",
                    "icon": "consulting"
              },
              {
                    "title": "API 510 Certification",
                    "href": "/api-510-certification",
                    "description": "Pressure vessel inspector certification guide",
                    "icon": "cert"
              },
              {
                    "title": "API 570 Certification",
                    "href": "/api-570-certification",
                    "description": "Piping inspector certification guide",
                    "icon": "cert"
              },
              {
                    "title": "API 653 Tank Inspection Guide",
                    "href": "/blog/api-653-tank-inspection-guide",
                    "description": "Complete checklist + intervals",
                    "icon": "blog"
              },
              {
                    "title": "CMMS for Inspection Companies",
                    "href": "/erp/cmms-for-inspection-companies",
                    "description": "Affordable, accessible asset & cert tracking",
                    "icon": "erp"
              },
              {
                    "title": "Digital Twin for Tanks",
                    "href": "/digital-twins/storage-tank",
                    "description": "API 653-aligned tank digital twin",
                    "icon": "dt"
              }
        ]} />

        <ContactDetails />
        </div>
    );
}
