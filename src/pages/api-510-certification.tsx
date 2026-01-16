import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, BookOpen, Clock, DollarSign, GraduationCap, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const examTopics = [
    "Pressure vessel design and construction (ASME Section VIII)",
    "Material specifications and properties",
    "Welding and NDE requirements",
    "Corrosion mechanisms and damage",
    "Fitness-for-service evaluation",
    "Repair, alteration, and rerating procedures",
    "Inspection planning and techniques"
];

const eligibility = [
    "High school diploma or equivalent",
    "Minimum of 1 year inspection experience OR",
    "Engineering degree with 6 months experience",
    "Complete API authorized training recommended"
];

const faqs = [
    {
        question: "What is API 510 Certification?",
        answer: "API 510 is a certification for Pressure Vessel Inspectors. It demonstrates competency in inspecting, repairing, altering, and rerating pressure vessels per ASME Section VIII and API 510 standards."
    },
    {
        question: "How long is API 510 certification valid?",
        answer: "API 510 certification is valid for 3 years. Recertification requires passing a closed-book exam and meeting continuing education requirements."
    },
    {
        question: "What is the API 510 exam format?",
        answer: "The API 510 exam is open-book, consisting of 170 questions over 7.5 hours. A minimum score of 70% is required to pass."
    },
    {
        question: "What codes should I know for API 510?",
        answer: "Primary codes include API 510, ASME BPVC Section VIII Div. 1, ASME Section IX, ASME Section V, API 572, and API 576."
    }
];

export default function API510Certification() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Course",
                "name": "API 510 Certification Training",
                "description": "Comprehensive training for API 510 Pressure Vessel Inspector certification exam.",
                "provider": { "@type": "Organization", "name": "Atlantis NDT" },
                "educationalCredentialAwarded": "API 510 Pressure Vessel Inspector"
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
                title="API 510 Certification Training | Pressure Vessel Inspector Exam Prep | Atlantis NDT"
                description="API 510 Pressure Vessel Inspector certification training. Exam prep, study materials, practice tests. 95% pass rate. Online & classroom courses. Enroll now!"
                keywords="API 510 certification, API 510 training, pressure vessel inspector, API 510 exam, API 510 study guide, API 510 course, pressure vessel inspection"
                canonical="https://atlantisndt.com/api-510-certification"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-red-700 to-rose-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-red-200 mb-4"><Award className="w-5 h-5" /><span>Professional Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 510 Certification Training</h1>
                        <p className="text-xl text-red-100 max-w-3xl mb-8">Become a certified API 510 Pressure Vessel Inspector. Comprehensive exam prep with 95% pass rate. Training available online and in-person.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll Now</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-red-700 mb-2">95%</div><div className="text-slate-600">Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-red-700 mb-2">5 Days</div><div className="text-slate-600">Course Duration</div></div>
                        <div><div className="text-4xl font-bold text-red-700 mb-2">3 Yrs</div><div className="text-slate-600">Validity</div></div>
                    </div>
                </div>
            </section>

            {/* What is API 510 */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold mb-6">What is API 510 Certification?</h2>
                    <p className="text-lg text-slate-600 mb-6">
                        API 510 is a globally recognized certification for Pressure Vessel Inspectors administered by the American Petroleum Institute.
                        Certified inspectors are qualified to inspect, repair, alter, and rerate pressure vessels in accordance with API 510 and ASME BPVC Section VIII.
                    </p>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4">
                        <p className="text-red-800"><strong>Career Impact:</strong> API 510 certified inspectors earn 20-40% higher salaries and are in high demand across oil & gas, petrochemical, and power industries worldwide.</p>
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

            {/* Eligibility */}
            <section className="py-16 bg-red-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Eligibility Requirements</h2>
                    <div className="max-w-2xl mx-auto">
                        <ul className="space-y-3">
                            {eligibility.map((req) => (
                                <li key={req} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span>{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Course Details */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Training Course Details</h2>
                    <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <Card className="text-center">
                            <CardHeader><Clock className="w-10 h-10 text-red-600 mx-auto" /><CardTitle>Duration</CardTitle></CardHeader>
                            <CardContent><p className="text-2xl font-bold">5 Days</p><p className="text-slate-600">40 hours intensive</p></CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader><FileText className="w-10 h-10 text-red-600 mx-auto" /><CardTitle>Materials</CardTitle></CardHeader>
                            <CardContent><p className="text-2xl font-bold">Complete</p><p className="text-slate-600">Study guides + practice tests</p></CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                <p className="text-slate-600">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-red-700 to-rose-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get API 510 Certified?</h2>
                    <p className="text-red-100 mb-8 text-lg">Join our next training class and advance your inspection career.</p>
                    <Link to="/contact" className="inline-block bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Enroll Now</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
