import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, GraduationCap, MapPin, Award, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
    { method: "Ultrasonic Testing (UT)", levels: ["Level I", "Level II", "Level III"], price: "AED 5,500-9,500" },
    { method: "Phased Array UT (PAUT)", levels: ["Level I", "Level II"], price: "AED 7,500-11,000" },
    { method: "Radiographic Testing (RT)", levels: ["Level I", "Level II", "Level III"], price: "AED 5,500-9,500" },
    { method: "Magnetic Particle Testing (MT)", levels: ["Level I", "Level II"], price: "AED 4,500-6,500" },
    { method: "Liquid Penetrant Testing (PT)", levels: ["Level I", "Level II"], price: "AED 3,500-5,500" },
    { method: "Eddy Current Testing (ET)", levels: ["Level I", "Level II"], price: "AED 5,500-9,500" }
];

const locations = ["Dubai", "Abu Dhabi", "Sharjah", "Online/Virtual"];

const certifications = ["ASNT SNT-TC-1A", "ISO 9712", "PCN (for UK/EU recognition)", "Employer-based programs"];

const faqs = [
    { question: "Is ASNT certification recognized in UAE?", answer: "Yes, ASNT certification is widely recognized in the UAE oil & gas industry. We also offer ISO 9712 and PCN certifications for broader international recognition." },
    { question: "Where are training centers located?", answer: "Our primary training center is in Dubai, with additional facilities in Abu Dhabi. We also offer on-site corporate training anywhere in the UAE and GCC." },
    { question: "What language is training conducted in?", answer: "Training is primarily in English, but we offer Arabic support for theoretical content and documentation." }
];

export default function NDTTrainingDubai() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Course", "name": "NDT Training Dubai UAE", "provider": { "@type": "Organization", "name": "Atlantis NDT" }, "description": "ASNT and ISO 9712 NDT certification training in Dubai UAE." },
            { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Training Dubai UAE | ASNT ISO 9712 Certification | Abu Dhabi | Atlantis"
                description="NDT certification training in Dubai UAE. ASNT, ISO 9712, PCN courses. UT, RT, MT, PT, ET. Abu Dhabi, Sharjah, Online. Enroll now!"
                keywords="NDT training Dubai, NDT certification UAE, ASNT training Dubai, ISO 9712 UAE, ultrasonic testing training Dubai, NDT courses Abu Dhabi"
                canonical="https://atlantisndt.com/ndt-training-dubai"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-emerald-200 mb-4"><GraduationCap className="w-5 h-5" /><span>Training & Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Training in Dubai & UAE</h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mb-8">ASNT and ISO 9712 certification training in Dubai, Abu Dhabi, and throughout UAE. World-class facilities and expert instructors.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll Now</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Courses</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-emerald-600 mb-2">95%</div><div className="text-slate-600">Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-emerald-600 mb-2">3</div><div className="text-slate-600">UAE Locations</div></div>
                        <div><div className="text-4xl font-bold text-emerald-600 mb-2">ASNT/ISO</div><div className="text-slate-600">Certified</div></div>
                        <div><div className="text-4xl font-bold text-emerald-600 mb-2">15+</div><div className="text-slate-600">Years Experience</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Available Courses</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
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
                                {certifications.map((cert) => (<li key={cert} className="flex items-center gap-2"><Award className="w-4 h-4 text-emerald-500" /><span>{cert}</span></li>))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Training Locations</h2>
                            <ul className="space-y-2">
                                {locations.map((loc) => (<li key={loc} className="flex items-center gap-2"><MapPin className="w-4 h-4 text-emerald-500" /><span>{loc}</span></li>))}
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

            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Start Your NDT Training in UAE</h2>
                    <p className="text-emerald-100 mb-8 text-lg">Enroll today or contact us for corporate training quotes.</p>
                    <Link to="/contact" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Contact Us</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
