import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, GraduationCap, MapPin, Award, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
    { method: "Ultrasonic Testing (UT)", levels: ["Level I", "Level II", "Level III"], price: "₹45,000-85,000" },
    { method: "Phased Array UT (PAUT)", levels: ["Level I", "Level II"], price: "₹65,000-1,10,000" },
    { method: "Radiographic Testing (RT)", levels: ["Level I", "Level II", "Level III"], price: "₹45,000-85,000" },
    { method: "Magnetic Particle Testing (MT)", levels: ["Level I", "Level II"], price: "₹35,000-55,000" },
    { method: "Liquid Penetrant Testing (PT)", levels: ["Level I", "Level II"], price: "₹25,000-45,000" },
    { method: "Eddy Current Testing (ET)", levels: ["Level I", "Level II"], price: "₹45,000-85,000" }
];

const locations = ["Mumbai", "Chennai", "Delhi NCR", "Bangalore", "Hyderabad", "Online/Virtual"];

const certifications = ["ASNT SNT-TC-1A", "ISO 9712", "ISNT Certification", "BARC Approved"];

const faqs = [
    { question: "Is ASNT certification valid in India?", answer: "Yes, ASNT certification is widely recognized in India across oil & gas, power, and manufacturing industries. We also offer ISNT and ISO 9712 certifications." },
    { question: "Which cities have training centers?", answer: "We have training facilities in Mumbai, Chennai, Delhi NCR, Bangalore, and Hyderabad. Online training is also available." },
    { question: "Do you offer EMI payment options?", answer: "Yes, we offer flexible payment options including EMI for individual students. Corporate invoicing available for companies." }
];

export default function NDTTrainingIndia() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Course", "name": "NDT Training India", "provider": { "@type": "Organization", "name": "Atlantis NDT" }, "description": "ASNT and ISO 9712 NDT certification training in India." },
            { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Training India | ASNT Certification Mumbai Chennai Delhi | Atlantis"
                description="NDT certification training in India. ASNT, ISO 9712, ISNT courses. Mumbai, Chennai, Delhi, Bangalore. Affordable prices. Enroll now!"
                keywords="NDT training India, NDT certification Mumbai, ASNT training Chennai, NDT courses Delhi, NDT training Bangalore, ISNT certification"
                canonical="https://atlantisndt.com/ndt-training-india"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-orange-500 to-amber-600 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-orange-200 mb-4"><GraduationCap className="w-5 h-5" /><span>Training & Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Training in India</h1>
                        <p className="text-xl text-orange-100 max-w-3xl mb-8">ASNT, ISO 9712, and ISNT certification training across India. Mumbai, Chennai, Delhi, Bangalore, Hyderabad locations.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll Now</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Courses</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-orange-500 mb-2">95%</div><div className="text-slate-600">Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-orange-500 mb-2">6</div><div className="text-slate-600">India Locations</div></div>
                        <div><div className="text-4xl font-bold text-orange-500 mb-2">ASNT/ISNT</div><div className="text-slate-600">Certified</div></div>
                        <div><div className="text-4xl font-bold text-orange-500 mb-2">10K+</div><div className="text-slate-600">Trained</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Available Courses</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courses.map((course) => (
                            <Card key={course.method} className="hover:shadow-lg transition">
                                <CardHeader className="pb-2"><CardTitle className="text-lg">{course.method}</CardTitle></CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span className="text-slate-500">Levels:</span><span>{course.levels.join(", ")}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Price:</span><span className="text-green-600 font-medium">{course.price}</span></div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Certifications Offered</h2>
                            <ul className="space-y-2">
                                {certifications.map((cert) => (<li key={cert} className="flex items-center gap-2"><Award className="w-4 h-4 text-orange-500" /><span>{cert}</span></li>))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Training Locations</h2>
                            <ul className="space-y-2">
                                {locations.map((loc) => (<li key={loc} className="flex items-center gap-2"><MapPin className="w-4 h-4 text-orange-500" /><span>{loc}</span></li>))}
                            </ul>
                        </div>
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

            <section className="py-16 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Start Your NDT Training in India</h2>
                    <p className="text-orange-100 mb-8 text-lg">Enroll today or contact us for corporate training quotes.</p>
                    <Link to="/contact" className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Contact Us</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
