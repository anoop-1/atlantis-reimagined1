import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Clock, DollarSign, Users, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const levels = [
    { level: "Level I", duration: "40 hours", description: "Perform tests under Level II/III supervision", prerequisites: "None", salary: "$45,000 - $60,000" },
    { level: "Level II", duration: "80 hours", description: "Set up, calibrate, interpret, document, and supervise Level I", prerequisites: "Level I + experience", salary: "$60,000 - $85,000" },
    { level: "Level III", duration: "Professional exam", description: "Develop procedures, train personnel, manage programs", prerequisites: "Multiple Level II + experience", salary: "$85,000 - $150,000+" }
];

const methods = ["Ultrasonic Testing (UT)", "Radiographic Testing (RT)", "Magnetic Particle Testing (MT)", "Liquid Penetrant Testing (PT)", "Eddy Current Testing (ET)", "Visual Testing (VT)"];

const faqs = [
    { question: "What is ASNT certification?", answer: "ASNT (American Society for Nondestructive Testing) provides certification programs including SNT-TC-1A employer-based certification, ASNT NDT Level III professional certification, and ACCP (ASNT Central Certification Program)." },
    { question: "What's the difference between SNT-TC-1A and ACCP?", answer: "SNT-TC-1A is employer-based (company certifies you). ACCP is third-party certification by ASNT that's portable between employers." },
    { question: "How long does ASNT certification take?", answer: "Level I: 40-80 hours training + experience. Level II: Additional 80-160 hours. Level III: Professional exam after years of experience." },
    { question: "Is ASNT certification recognized internationally?", answer: "Yes, ASNT certification is recognized worldwide and is the most common standard in the Americas, Middle East, and Asia." }
];

export default function ASNTCertification() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Course", "name": "ASNT NDT Certification Training", "description": "Training for ASNT NDT Level I, II, III certification.", "provider": { "@type": "Organization", "name": "Atlantis NDT" } },
            { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="ASNT Certification Training | NDT Level I II III | SNT-TC-1A ACCP | Atlantis NDT"
                description="ASNT NDT certification training for Level I, II, III. SNT-TC-1A and ACCP programs. UT, RT, MT, PT, ET, VT methods. 95% pass rate. Enroll now!"
                keywords="ASNT certification, ASNT Level III, ASNT training, SNT-TC-1A, ACCP certification, NDT certification, NDT Level II, NDT Level III"
                canonical="https://atlantisndt.com/asnt-certification"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4"><Award className="w-5 h-5" /><span>Professional Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">ASNT NDT Certification Training</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">Comprehensive training for ASNT NDT certification at all levels. Level I, II, and III programs for all major NDT methods.</p>
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
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">95%</div><div className="text-slate-600">Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">6</div><div className="text-slate-600">NDT Methods</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">3</div><div className="text-slate-600">Certification Levels</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">50+</div><div className="text-slate-600">Instructors</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Certification Levels</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {levels.map((level) => (
                            <Card key={level.level} className="relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-[#004aad]"></div>
                                <CardHeader><CardTitle className="text-xl">{level.level}</CardTitle></CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 mb-4">{level.description}</p>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span className="text-slate-500">Duration:</span><span className="font-medium">{level.duration}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Prerequisites:</span><span className="font-medium">{level.prerequisites}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Salary Range:</span><span className="font-medium text-green-600">{level.salary}</span></div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">NDT Methods Available</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {methods.map((method) => (
                            <Link key={method} to="/training" className="bg-slate-100 px-6 py-3 rounded-lg font-medium hover:bg-[#004aad] hover:text-white transition-all duration-200">
                                {method}
                            </Link>
                        ))}
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

            <section className="py-16 bg-gradient-to-r from-[#004aad] to-blue-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Certified per SNT-TC-1A?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Join our comprehensive training programs and advance your NDT career.</p>
                    <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Enroll Now</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
