import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Clock, DollarSign, GraduationCap, MapPin, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
    { method: "Ultrasonic Testing (UT)", levels: ["Level I", "Level II", "Level III"], duration: "40-80 hrs", price: "$1,500-$2,500" },
    { method: "Phased Array UT (PAUT)", levels: ["Level I", "Level II"], duration: "40-80 hrs", price: "$2,000-$3,000" },
    { method: "TOFD", levels: ["Level I", "Level II"], duration: "40 hrs", price: "$1,800-$2,500" },
    { method: "Radiographic Testing (RT)", levels: ["Level I", "Level II", "Level III"], duration: "40-80 hrs", price: "$1,500-$2,500" },
    { method: "Magnetic Particle Testing (MT)", levels: ["Level I", "Level II"], duration: "24-40 hrs", price: "$1,200-$1,800" },
    { method: "Liquid Penetrant Testing (PT)", levels: ["Level I", "Level II"], duration: "16-24 hrs", price: "$1,000-$1,500" },
    { method: "Eddy Current Testing (ET)", levels: ["Level I", "Level II"], duration: "40-80 hrs", price: "$1,500-$2,500" },
    { method: "Visual Testing (VT)", levels: ["Level I", "Level II"], duration: "16-24 hrs", price: "$800-$1,200" }
];

const locations = ["Houston, TX", "Los Angeles, CA", "New Orleans, LA", "Online/Virtual"];

const faqs = [
    { question: "What certifications does Atlantis offer?", answer: "We offer ASNT SNT-TC-1A, ASNT CP-189, and employer-based certifications for all major NDT methods at Levels I, II, and III." },
    { question: "Is online training available?", answer: "Yes! We offer live virtual training with the same curriculum as our in-person courses. Practical exams may require in-person attendance." },
    { question: "What's included in the training?", answer: "Course materials, practice specimens, examination preparation, practical training, and certification upon successful completion." },
    { question: "Do you offer corporate training?", answer: "Absolutely! We provide customized on-site training for companies. Contact us for group rates and custom scheduling." }
];

export default function NDTTrainingUSA() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Course", "name": "NDT Training Courses USA", "provider": { "@type": "Organization", "name": "Atlantis NDT" }, "description": "ASNT NDT certification training in USA. UT, RT, MT, PT, ET, VT courses." },
            { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Training Courses USA | ASNT Certification Training | Houston, LA, Online | Atlantis"
                description="ASNT NDT certification training in USA. UT, RT, MT, PT, ET, VT Level I II III courses. Houston, Los Angeles, Online. 95% pass rate. Enroll now!"
                keywords="NDT training USA, ASNT certification, NDT courses USA, ultrasonic testing training, NDT certification Houston, NDT training online"
                canonical="https://atlantisndt.com/ndt-training-usa"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4"><GraduationCap className="w-5 h-5" /><span>Training & Certification</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Training Courses in USA</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">ASNT certification training for all major NDT methods. Classroom and online courses with 95% pass rate.</p>
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
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">8+</div><div className="text-slate-600">NDT Methods</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">4</div><div className="text-slate-600">US Locations</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">50+</div><div className="text-slate-600">Expert Instructors</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Available Courses</h2>
                    <p className="text-slate-600 text-center mb-12">All courses include materials, practical training, and examination</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {courses.map((course) => (
                            <Card key={course.method} className="hover:shadow-lg transition">
                                <CardHeader className="pb-2"><CardTitle className="text-lg">{course.method}</CardTitle></CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span className="text-slate-500">Levels:</span><span>{course.levels.join(", ")}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Duration:</span><span>{course.duration}</span></div>
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
                    <h2 className="text-3xl font-bold text-center mb-8">Training Locations</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {locations.map((loc) => (
                            <div key={loc} className="flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-lg">
                                <MapPin className="w-4 h-4 text-[#004aad]" /><span className="font-medium">{loc}</span>
                            </div>
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
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your NDT Training?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Enroll in our next class or request a custom corporate training quote.</p>
                    <Link to="/contact" className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Contact Us</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
