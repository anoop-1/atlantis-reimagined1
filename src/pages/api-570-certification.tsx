import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, BookOpen, Clock, DollarSign, GraduationCap, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const examTopics = [
    "Piping system design (ASME B31.3, B31.1)",
    "Material specifications and properties",
    "Welding and NDE requirements",
    "Corrosion mechanisms and damage",
    "Fitness-for-service evaluation (API 579)",
    "Repair and alteration procedures",
    "Inspection planning and documentation"
];

const faqs = [
    { question: "What is API 570 Certification?", answer: "API 570 is a certification for Piping Inspectors. It qualifies individuals to inspect, repair, alter, and rerate in-service metallic piping systems per API 570 and ASME B31 codes." },
    { question: "How does API 570 differ from API 510?", answer: "API 510 covers pressure vessels while API 570 covers piping systems. Many inspectors hold both certifications for broader career opportunities." },
    { question: "What is the API 570 exam format?", answer: "The exam is open-book with 170 questions over 7.5 hours. Passing requires 70% minimum score." },
    { question: "What codes should I study?", answer: "Key codes include API 570, ASME B31.3, ASME B31.1, ASME Section IX, API 574, and API 577." }
];

export default function API570Certification() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Course", "name": "API 570 Certification Training", "description": "Training for API 570 Piping Inspector certification exam.", "provider": { "@type": "Organization", "name": "Atlantis NDT" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="API 570 Certification Training | Piping Inspector Exam Prep | Atlantis NDT"
                description="API 570 Piping Inspector certification training. Exam prep, study materials, practice tests. 95% pass rate. Online & classroom courses. Enroll now!"
                keywords="API 570 certification, API 570 training, piping inspector, API 570 exam, API 570 study guide, piping inspection, ASME B31.3"
                canonical="https://atlantisndt.com/api-570-certification"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-blue-700 to-indigo-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4"><Award className="w-5 h-5" /><span>Professional Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 570 Certification Training</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">Become a certified API 570 Piping Inspector. Comprehensive exam prep with 95% pass rate.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll Now</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">95%</div><div className="text-slate-600">Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">5 Days</div><div className="text-slate-600">Course Duration</div></div>
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">3 Yrs</div><div className="text-slate-600">Validity</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold mb-6">What is API 570 Certification?</h2>
                    <p className="text-lg text-slate-600 mb-6">API 570 is a globally recognized certification for Piping Inspectors. Certified inspectors are qualified to inspect, repair, alter, and rerate in-service metallic piping systems per API 570 and ASME B31 codes.</p>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                        <p className="text-blue-800"><strong>Career Impact:</strong> API 570 certified inspectors are in high demand in refineries, petrochemical plants, and power generation facilities worldwide.</p>
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

            <section className="py-16 bg-gradient-to-r from-blue-700 to-indigo-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get API 570 Certified?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Join our next training class and advance your inspection career.</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Enroll Now</Link>
                        <Link to="/api-570-training" className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">View Full Training Details</Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
