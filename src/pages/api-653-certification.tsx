import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, BookOpen, Clock, FileText, Users, AlertCircle, DollarSign, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const examTopics = [
    "Tank design and construction (API 650, API 12C)",
    "Inspection methods and intervals",
    "Corrosion assessment and remaining life calculations",
    "Floor, shell, and roof inspection techniques",
    "Settlement, foundation, and appurtenance evaluation",
    "Repair and reconstruction procedures",
    "Welding and NDE requirements (ASME Section IX, V)",
    "Risk-Based Inspection (RBI) per API 580/581",
    "Cathodic protection and coating assessment",
    "Documentation and record keeping"
];

const openBookCodes = [
    { code: "API 653", title: "Aboveground Storage Tank Inspection, Repair, Alteration, and Reconstruction" },
    { code: "API 650", title: "Welded Tanks for Oil Storage" },
    { code: "API 620", title: "Design and Construction of Large, Welded, Low-Pressure Storage Tanks" },
    { code: "API 651", title: "Cathodic Protection of Aboveground Petroleum Storage Tanks" },
    { code: "API 652", title: "Lining of Aboveground Petroleum Storage Tank Bottoms" },
    { code: "API 571", title: "Damage Mechanisms Affecting Fixed Equipment in the Refining Industry" },
    { code: "API 579-1/ASME FFS-1", title: "Fitness-For-Service" },
    { code: "ASME Section V", title: "Nondestructive Examination" },
    { code: "ASME Section IX", title: "Welding, Brazing, and Fusing Qualifications" },
    { code: "ASME Section VIII Div. 1", title: "Rules for Construction of Pressure Vessels" },
];

const eligibilityRequirements = [
    { type: "Engineering Degree", education: "Bachelor's in engineering or related", experience: "1 year in tank inspection" },
    { type: "Engineering Technology", education: "Associate degree / tech diploma", experience: "2 years in tank inspection" },
    { type: "High School / GED", education: "High school diploma or equivalent", experience: "3 years in tank inspection" },
];

const inspectionIntervals = [
    { inspection: "External Inspection", standard: "API 653 §6.4", interval: "Maximum 5 years (risk-adjusted via RBI)" },
    { inspection: "Internal Inspection", standard: "API 653 §6.4", interval: "Maximum 10 years (20 years with RBI and liner)" },
    { inspection: "In-Service Inspection (UT thickness)", standard: "API 653 §6.5", interval: "Based on corrosion rate" },
    { inspection: "Foundation and Settlement", standard: "API 653 §6.7", interval: "During each external inspection" },
    { inspection: "Floor Integrity (MFL/UT)", standard: "API 653 §6.4.2", interval: "At each internal inspection" },
];

const trainingFormats = [
    { icon: Users, title: "Classroom (Dubai / Houston / India)", desc: "5-day intensive with mock exams. Includes code navigation drills and open-book timed practice. Next class: contact us for schedule." },
    { icon: BookOpen, title: "Online Self-Paced", desc: "Video lectures, PDF study notes, chapter quizzes and full mock exams. Learn at your own pace. Access for 12 months." },
    { icon: Clock, title: "Blended / Instructor-Led Online", desc: "Live virtual sessions over 5 days with ASNT Level III instructor. Includes Q&A, group exercises, and mock exam." },
];

const faqs = [
    { question: "What is API 653 Certification?", answer: "API 653 is an American Petroleum Institute certification for Aboveground Storage Tank (AST) Inspectors. It qualifies inspectors to inspect, repair, alter, and reconstruct tanks built to API 650 or API 12C. The exam is administered by API and is open-book with 170 questions over 7.5 hours." },
    { question: "What are the eligibility requirements for the API 653 exam?", answer: "Candidates need a combination of education and tank inspection experience: 1 year with an engineering degree, 2 years with an associate/tech degree, or 3 years with a high school diploma. All experience must be in aboveground storage tank inspection activities." },
    { question: "What is the API 653 exam format?", answer: "The exam is open-book with 170 multiple-choice questions over 7.5 hours. A passing score of 70% is required. You may bring printed/physical copies of the approved reference codes. You cannot use electronic devices or online resources during the exam." },
    { question: "What codes are allowed in the API 653 exam?", answer: "The API 653 exam allows: API 653, API 650, API 620, API 651, API 652, API 571, API 579-1/ASME FFS-1, ASME Section V, ASME Section VIII Div. 1, and ASME Section IX. All codes must be printed — no electronic versions." },
    { question: "How often should aboveground storage tanks be inspected?", answer: "Per API 653: External inspections every 5 years maximum; Internal inspections every 10 years maximum (extendable to 20 years if a liner is installed and RBI assessment supports it). In-service UT thickness surveys are based on measured corrosion rate. RBI per API 580/581 can optimise all intervals." },
    { question: "How long is the API 653 certification valid?", answer: "The API 653 certification is valid for 3 years. Recertification requires either re-examination or demonstrating continued tank inspection experience (180 inspection days over the 3-year period) plus 80 hours of relevant training." },
    { question: "What NDT methods are used in API 653 tank inspection?", answer: "Key NDT methods for API 653 tank inspection: Ultrasonic Testing (UT) for shell and floor thickness measurement; Magnetic Flux Leakage (MFL) for floor scanning; Radiographic Testing (RT) for weld inspection; Vacuum Box Testing for floor weld leak detection; Visual Testing (VT) for general inspection; ACFM/MT for surface cracks on welds." },
    { question: "What is the difference between API 653 and API 650?", answer: "API 650 covers the design and construction of new aboveground storage tanks. API 653 covers the inspection, repair, alteration, and reconstruction of tanks already in service — whether built to API 650, API 12C, or equivalent standards. Both codes are used together in API 653 inspection work." },
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
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Course",
                "name": "API 653 Aboveground Storage Tank Inspector Certification Training",
                "description": "Comprehensive API 653 certification exam preparation. Open-book format training covering API 653, API 650, API 651, ASME codes, RBI, and NDE requirements for tank inspectors.",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
                "courseMode": ["online", "onsite", "blended"],
                "educationalLevel": "Professional",
                "teaches": "API 653 Tank Inspector Certification"
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
                title="API 653 Certification Training | Tank Inspector Exam Prep 2026 | Atlantis NDT"
                description="API 653 Tank Inspector certification training: open-book exam prep, all 10 reference codes, inspection intervals, RBI. Dubai, Houston, India & online. 95% pass rate."
                keywords="API 653 certification, API 653 training, API 653 tank inspector, API 653 exam prep, aboveground storage tank inspection, API 653 study guide, API 650, tank inspector certification, API 653 recertification, storage tank NDT"
                canonical="https://atlantisndt.com/api-653-certification"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-amber-200 mb-4"><Award className="w-5 h-5" /><span>Professional Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 653 Certification Training</h1>
                        <p className="text-xl text-amber-100 max-w-3xl mb-8">Become a certified API 653 Aboveground Storage Tank Inspector. Comprehensive open-book exam preparation with 95% first-time pass rate.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll in Next Class</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">95%</div><div className="text-slate-600">Pass Rate</div></div>
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
                                <p className="text-amber-800 text-sm"><strong>Career Impact:</strong> API 653 certified inspectors command 20–40% salary premiums and are consistently in demand across oil & gas storage, pipeline, and refining sectors. Many ASNT Level III professionals add API 653 to qualify for inspection lead roles.</p>
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
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">Budget for the full cost of certification — exam fees, training, and code books. Plan ahead for recertification every 3 years.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="border-t-4 border-t-amber-500">
                            <CardHeader className="pb-2">
                                <DollarSign className="w-8 h-8 text-amber-600 mb-2" />
                                <CardTitle className="text-xl">Exam & Training Costs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                                        <div>
                                            <div className="font-medium text-slate-800">API 653 Exam Fee</div>
                                            <div className="text-xs text-slate-500">Paid directly to API</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-amber-700">~$525 <span className="font-normal text-slate-500">/ ~$700</span></div>
                                            <div className="text-xs text-slate-500">API member / non-member</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start border-b border-slate-100 pb-3">
                                        <div>
                                            <div className="font-medium text-slate-800">Training Course</div>
                                            <div className="text-xs text-slate-500">Classroom, online, or blended</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-amber-700">$1,500 – $3,500</div>
                                            <div className="text-xs text-slate-500">Varies by format & provider</div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="font-medium text-slate-800">Code Books (10 codes)</div>
                                            <div className="text-xs text-slate-500">Must be printed copies for exam</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-amber-700">$500 – $1,500</div>
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
                                <p className="text-slate-600 text-sm mb-4">API 653 certification is valid for 3 years. To recertify, you must meet <strong>one</strong> of the following paths:</p>
                                <div className="space-y-3">
                                    <div className="bg-amber-50 p-4 rounded-lg">
                                        <div className="font-semibold text-amber-800 mb-1">Option A — Re-Examination</div>
                                        <p className="text-sm text-slate-600">Retake the API 653 exam before your certification expires. Same format: 170 questions, 7.5 hours, open-book.</p>
                                    </div>
                                    <div className="bg-amber-50 p-4 rounded-lg">
                                        <div className="font-semibold text-amber-800 mb-1">Option B — Experience + Training</div>
                                        <p className="text-sm text-slate-600">Demonstrate <strong>180 inspection days</strong> of tank inspection work <strong>plus 80 hours</strong> of relevant professional development/training within the 3-year certification period.</p>
                                    </div>
                                </div>
                                <div className="mt-4 bg-slate-50 border border-slate-200 rounded-lg p-3">
                                    <p className="text-xs text-slate-500"><strong>Tip:</strong> Start tracking your inspection days and training hours from day one. API requires documentation for the experience-based recertification path.</p>
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
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">The exam is open-book. You may bring printed copies of all 10 approved codes. Our training covers code navigation strategies so you can find answers quickly within the 7.5-hour time limit.</p>
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
                    <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">A critical exam topic — and real-world requirement. Know these intervals and the conditions under which RBI can extend them.</p>
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
                    <h2 className="text-3xl font-bold text-center mb-4">Training Formats</h2>
                    <p className="text-center text-slate-600 mb-12">Choose the format that fits your schedule and learning style.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {trainingFormats.map((fmt) => (
                            <Card key={fmt.title} className="hover:shadow-lg transition border-t-4 border-t-amber-500">
                                <CardHeader className="pb-2">
                                    <fmt.icon className="w-8 h-8 text-amber-600 mb-2" />
                                    <CardTitle className="text-lg">{fmt.title}</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">{fmt.desc}</p></CardContent>
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
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700 transition">API 510 Certification</h3>
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
                                        <h3 className="font-bold text-slate-800 group-hover:text-amber-700 transition">API 570 Certification</h3>
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
                                    <p className="text-sm text-slate-600">Estimate the total investment for API 653 and other certifications. Includes exam fees, training, and code books.</p>
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
                    <h2 className="text-3xl font-bold mb-4">Ready to Get API 653 Certified?</h2>
                    <p className="text-amber-100 mb-8 text-lg">Join our next training class. Dubai, Houston, India, and online options available.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Enroll Now</Link>
                        <Link to="/api-510-certification" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 510 Certification</Link>
                        <Link to="/api-570-certification" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">API 570 Certification</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
