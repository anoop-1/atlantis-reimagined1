import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, BookOpen, Clock, DollarSign, GraduationCap, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const examTopics = [
    "Tank design and construction (API 650)",
    "Tank inspection requirements and intervals",
    "Corrosion assessment and remaining life",
    "Floor, shell, and roof inspection",
    "Settlement and foundation evaluation",
    "Repair and reconstruction procedures",
    "Welding and NDE requirements"
];

const faqs = [
    { question: "What is API 653 Certification?", answer: "API 653 is a certification for Tank Inspectors. It qualifies individuals to inspect, repair, alter, and reconstruct above-ground storage tanks built to API 650 or API 12C." },
    { question: "How often is tank inspection required?", answer: "Inspection frequency depends on corrosion rate and risk. Typically external inspections every 5 years, internal inspections every 10 years, but RBI can adjust intervals." },
    { question: "What is the API 653 exam format?", answer: "The exam is open-book with 170 questions over 7.5 hours. Passing requires 70% minimum score." },
    { question: "What codes should I study?", answer: "Key codes include API 653, API 650, API 651, API 652, ASME Section V, and ASME Section IX." }
];

export default function API653Certification() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Course", "name": "API 653 Certification Training", "description": "Training for API 653 Tank Inspector certification exam.", "provider": { "@type": "Organization", "name": "Atlantis NDT" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="API 653 Certification Training | Tank Inspector Exam Prep | Atlantis NDT"
                description="API 653 Tank Inspector certification training. Exam prep, study materials, practice tests. 95% pass rate. Online & classroom courses. Enroll now!"
                keywords="API 653 certification, API 653 training, tank inspector, API 653 exam, storage tank inspection, API 650, tank inspector certification"
                canonical="https://atlantisndt.com/api-653-certification"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-amber-600 to-orange-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-amber-200 mb-4"><Award className="w-5 h-5" /><span>Professional Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 653 Certification Training</h1>
                        <p className="text-xl text-amber-100 max-w-3xl mb-8">Become a certified API 653 Tank Inspector. Comprehensive exam prep with 95% pass rate.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll Now</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">95%</div><div className="text-slate-600">Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">5 Days</div><div className="text-slate-600">Course Duration</div></div>
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">$2,500</div><div className="text-slate-600">Course Fee</div></div>
                        <div><div className="text-4xl font-bold text-amber-600 mb-2">3 Yrs</div><div className="text-slate-600">Validity</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold mb-6">What is API 653 Certification?</h2>
                    <p className="text-lg text-slate-600 mb-6">API 653 is a globally recognized certification for Tank Inspectors. Certified inspectors are qualified to inspect, repair, alter, and reconstruct above-ground storage tanks per API 653 and API 650 standards.</p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                        <p className="text-amber-800"><strong>Career Impact:</strong> API 653 certified inspectors are essential for tank farms, refineries, and storage terminals worldwide.</p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Exam Topics Covered</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {examTopics.map((topic) => (<div key={topic} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" /><span>{topic}</span></div>))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (<div key={index} className="bg-white p-6 rounded-lg shadow-sm"><h3 className="font-bold text-lg mb-2">{faq.question}</h3><p className="text-slate-600">{faq.answer}</p></div>))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get API 653 Certified?</h2>
                    <p className="text-amber-100 mb-8 text-lg">Join our next training class and advance your inspection career.</p>
                    <Link to="/contact" className="inline-block bg-white text-amber-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Enroll Now</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
