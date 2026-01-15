import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
    { method: "Ultrasonic Testing (UT)", levels: ["Level I", "Level II", "Level III"] },
    { method: "Phased Array UT (PAUT)", levels: ["Level I", "Level II"] },
    { method: "Radiographic Testing (RT)", levels: ["Level I", "Level II", "Level III"] },
    { method: "Magnetic Particle Testing (MT)", levels: ["Level I", "Level II"] },
    { method: "Liquid Penetrant Testing (PT)", levels: ["Level I", "Level II"] },
    { method: "Eddy Current Testing (ET)", levels: ["Level I", "Level II"] }
];

const locations = ["Dammam (Eastern Province)", "Riyadh", "Jubail", "On-site at Client Facilities"];

const certifications = ["ASNT SNT-TC-1A", "ISO 9712", "Saudi Aramco Approved", "SABIC Recognized"];

const faqs = [
    { question: "Is training recognized by Saudi Aramco?", answer: "Yes, our training programs meet Saudi Aramco requirements. We provide training that aligns with their qualification standards for NDT personnel." },
    { question: "Do you offer training for SABIC projects?", answer: "Absolutely. Our courses are recognized by major Saudi petrochemical companies including SABIC affiliates." },
    { question: "Where is the main training center?", answer: "Our primary facility is in Dammam (Eastern Province), with training also available in Riyadh, Jubail, and on-site at client locations." }
];

export default function NDTTrainingSaudiArabia() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Course", "name": "NDT Training Saudi Arabia", "provider": { "@type": "Organization", "name": "Atlantis NDT" }, "description": "ASNT and ISO 9712 NDT certification training in Saudi Arabia." },
            { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Training Saudi Arabia | ASNT Certification Dammam Riyadh | Atlantis"
                description="NDT certification training in Saudi Arabia. ASNT, ISO 9712 courses. Dammam, Riyadh, Jubail. Saudi Aramco recognized. Enroll now!"
                keywords="NDT training Saudi Arabia, NDT certification KSA, ASNT training Dammam, NDT courses Riyadh, Saudi Aramco NDT training, NDT Jubail"
                canonical="https://atlantisndt.com/ndt-training-saudi-arabia"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4"><GraduationCap className="w-5 h-5" /><span>Training & Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Training in Saudi Arabia</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">ASNT and ISO 9712 certification training recognized by Saudi Aramco and major KSA operators. Dammam, Riyadh, Jubail locations.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll Now</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Courses</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">95%</div><div className="text-slate-600">Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">4</div><div className="text-slate-600">KSA Locations</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">Aramco</div><div className="text-slate-600">Recognized</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">15+</div><div className="text-slate-600">Years Experience</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Available Courses</h2>
                    <p className="text-slate-600 text-center mb-8">Contact us for current pricing and corporate rates</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courses.map((course) => (
                            <Card key={course.method} className="hover:shadow-lg transition">
                                <CardHeader className="pb-2"><CardTitle className="text-lg">{course.method}</CardTitle></CardHeader>
                                <CardContent>
                                    <div className="text-sm">
                                        <span className="text-slate-500">Levels: </span>
                                        <span>{course.levels.join(", ")}</span>
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
                                {certifications.map((cert) => (<li key={cert} className="flex items-center gap-2"><Award className="w-4 h-4 text-[#004aad]" /><span>{cert}</span></li>))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Training Locations</h2>
                            <ul className="space-y-2">
                                {locations.map((loc) => (<li key={loc} className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#004aad]" /><span>{loc}</span></li>))}
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

            <section className="py-16 bg-gradient-to-r from-[#004aad] to-blue-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Start Your NDT Training in Saudi Arabia</h2>
                    <p className="text-blue-100 mb-8 text-lg">Enroll today or contact us for corporate training quotes.</p>
                    <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Contact Us</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
