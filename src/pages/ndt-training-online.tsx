import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CheckCircle, Video, Monitor, GraduationCap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Course", "name": "Online NDT Training", "provider": { "@type": "Organization", "name": "Atlantis NDT" }, "description": "Online NDT certification training. Live virtual courses for all major methods." },
            { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen pt-20">
            <Navigation />
            <SEOHead
                title="Online NDT Training | Virtual ASNT Certification Courses | Atlantis NDT"
                description="Online NDT training courses. Live virtual ASNT certification for UT, MT, PT, VT. Learn from anywhere. Flexible scheduling. Enroll now!"
                keywords="online NDT training, virtual NDT courses, NDT training online, ASNT online certification, NDT e-learning, remote NDT training"
                canonical="https://atlantisndt.com/ndt-training-online"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero Section */}
            <motion.section
                className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-2 text-primary mb-4">
                            <Monitor className="w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-wide">Online Training</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            <span className="gradient-text">Online</span> NDT Training
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            Live virtual NDT training from anywhere in the world. Same quality curriculum, flexible scheduling, expert instructors.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button size="lg" className="w-full sm:w-auto">Enroll Now</Button>
                            </Link>
                            <Link to="/training">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">View All Courses</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-12 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-primary mb-2">100%</div><div className="text-muted-foreground">Online</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">Live</div><div className="text-muted-foreground">Instructors</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">Global</div><div className="text-muted-foreground">Access</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">Flexible</div><div className="text-muted-foreground">Scheduling</div></div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Online Courses Available</h2>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {courses.map((course, index) => (
                            <motion.div
                                key={course.method}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                                    <CardHeader className="pb-2">
                                        <Video className="w-5 h-5 text-primary mb-2" />
                                        <CardTitle className="text-base">{course.method}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between"><span className="text-muted-foreground">Levels:</span><span>{course.levels.join(", ")}</span></div>
                                            <div className="flex justify-between"><span className="text-muted-foreground">Duration:</span><span>{course.duration}</span></div>
                                            <div className="flex justify-between"><span className="text-muted-foreground">Format:</span><span className="text-primary font-medium">{course.format}</span></div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Benefits of Online Training</h2>
                    <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={benefit}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-start gap-3 p-4 bg-background rounded-lg shadow-sm"
                            >
                                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-secondary/30 p-6 rounded-lg"
                            >
                                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                <p className="text-muted-foreground">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Start Learning from Anywhere</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Enroll in our online NDT training today.</p>
                    <Link to="/contact">
                        <Button size="lg">Contact Us</Button>
                    </Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
