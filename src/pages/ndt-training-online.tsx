import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Video, Monitor, Clock, Users, GraduationCap, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
    { method: "Ultrasonic Testing (UT)", levels: ["Level I", "Level II"], duration: "40-80 hrs", format: "Live Virtual" },
    { method: "Radiographic Safety (RSO)", levels: ["Safety Officer"], duration: "40 hrs", format: "Live Virtual" },
    { method: "Magnetic Particle Testing (MT)", levels: ["Level I", "Level II"], duration: "24-40 hrs", format: "Live Virtual" },
    { method: "Liquid Penetrant Testing (PT)", levels: ["Level I", "Level II"], duration: "16-24 hrs", format: "Live Virtual" },
    { method: "Visual Testing (VT)", levels: ["Level I", "Level II"], duration: "16-24 hrs", format: "Live Virtual" },
    { method: "NDT Theory (All Methods)", levels: ["Refresher"], duration: "8-16 hrs", format: "Self-Paced" }
];

const benefits = [
    "Learn from anywhere in the world",
    "Same curriculum as classroom courses",
    "Live interaction with instructors",
    "Flexible scheduling options",
    "Recorded sessions for review",
    "Digital certificates upon completion"
];

const faqs = [
    { question: "Is online NDT training effective?", answer: "Yes! Our online training uses live virtual classrooms with real-time interaction. Theoretical content is equivalent to classroom training. Practical exams may require in-person attendance." },
    { question: "What equipment do I need?", answer: "A computer with webcam, reliable internet connection, and a quiet learning environment. We provide all digital course materials." },
    { question: "Are online certificates recognized?", answer: "Yes, certificates from our online courses carry the same recognition as classroom training. ASNT certification exams may require proctored testing." }
];

export default function NDTTrainingOnline() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Course", "name": "Online NDT Training", "provider": { "@type": "Organization", "name": "Atlantis NDT" }, "description": "Online NDT certification training. Live virtual courses for all major methods." },
            { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Online NDT Training | Virtual ASNT Certification Courses | Atlantis NDT"
                description="Online NDT training courses. Live virtual ASNT certification for UT, MT, PT, VT. Learn from anywhere. Flexible scheduling. Enroll now!"
                keywords="online NDT training, virtual NDT courses, NDT training online, ASNT online certification, NDT e-learning, remote NDT training"
                canonical="https://atlantisndt.com/ndt-training-online"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-violet-600 to-purple-700 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-violet-200 mb-4"><Monitor className="w-5 h-5" /><span>Online Training</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Online NDT Training</h1>
                        <p className="text-xl text-violet-100 max-w-3xl mb-8">Live virtual NDT training from anywhere in the world. Same quality curriculum, flexible scheduling, expert instructors.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-violet-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Enroll Now</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Courses</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-violet-600 mb-2">100%</div><div className="text-slate-600">Online</div></div>
                        <div><div className="text-4xl font-bold text-violet-600 mb-2">Live</div><div className="text-slate-600">Instructors</div></div>
                        <div><div className="text-4xl font-bold text-violet-600 mb-2">Global</div><div className="text-slate-600">Access</div></div>
                        <div><div className="text-4xl font-bold text-violet-600 mb-2">Flexible</div><div className="text-slate-600">Scheduling</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Online Courses Available</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courses.map((course) => (
                            <Card key={course.method} className="hover:shadow-lg transition">
                                <CardHeader className="pb-2">
                                    <Video className="w-5 h-5 text-violet-500 mb-2" />
                                    <CardTitle className="text-lg">{course.method}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span className="text-slate-500">Levels:</span><span>{course.levels.join(", ")}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Duration:</span><span>{course.duration}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Format:</span><span className="text-violet-600 font-medium">{course.format}</span></div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Benefits of Online Training</h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start gap-3 p-4 bg-violet-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
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

            <section className="py-16 bg-gradient-to-r from-violet-600 to-purple-600 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Start Learning from Anywhere</h2>
                    <p className="text-violet-100 mb-8 text-lg">Enroll in our online NDT training today.</p>
                    <Link to="/contact" className="inline-block bg-white text-violet-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Contact Us</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
