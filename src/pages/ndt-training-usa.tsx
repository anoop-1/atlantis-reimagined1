import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CheckCircle, Award, Clock, GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Realistic US NDT training prices based on industry standards
const courses = [
    { method: "Ultrasonic Testing (UT)", levels: ["Level I", "Level II", "Level III"], duration: "40-80 hrs", price: "$1,695-$2,695" },
    { method: "Phased Array UT (PAUT)", levels: ["Level I", "Level II"], duration: "40-80 hrs", price: "$2,495-$3,495" },
    { method: "TOFD", levels: ["Level I", "Level II"], duration: "40 hrs", price: "$2,495" },
    { method: "Radiographic Testing (RT)", levels: ["Level I", "Level II", "Level III"], duration: "40-80 hrs", price: "$1,695-$2,695" },
    { method: "Magnetic Particle Testing (MT)", levels: ["Level I", "Level II"], duration: "24-40 hrs", price: "$1,195-$1,595" },
    { method: "Liquid Penetrant Testing (PT)", levels: ["Level I", "Level II"], duration: "16-24 hrs", price: "$895-$1,295" },
    { method: "Eddy Current Testing (ET)", levels: ["Level I", "Level II"], duration: "40-80 hrs", price: "$1,695-$2,695" },
    { method: "Visual Testing (VT)", levels: ["Level I", "Level II"], duration: "16-24 hrs", price: "$795-$1,195" }
];

const locations = [
    { name: "Houston, TX", link: "/training-usa" },
    { name: "Los Angeles, CA", link: "/training-usa" },
    { name: "New Orleans, LA", link: "/training-usa" },
    { name: "Online/Virtual", link: "/ndt-training-online" }
];

const faqs = [
    { question: "What certifications does Atlantis offer?", answer: "We offer ASNT SNT-TC-1A, ASNT CP-189, and employer-based certifications for all major NDT methods at Levels I, II, and III." },
    { question: "Is online training available?", answer: "Yes! We offer live virtual training with the same curriculum as our in-person courses. Practical exams may require in-person attendance." },
    { question: "What's included in the training?", answer: "Course materials, practice specimens, examination preparation, practical training, and certification upon successful completion." },
    { question: "Do you offer corporate training?", answer: "Absolutely! We provide customized on-site training for companies. Contact us for group rates and custom scheduling." }
];

export default function NDTTrainingUSA() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            { "@type": "Course", "name": "NDT Training Courses USA", "provider": { "@type": "Organization", "name": "Atlantis NDT" }, "description": "ASNT NDT certification training in USA. UT, RT, MT, PT, ET, VT courses." },
            { "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) }
        ]
    };

    return (
        <div className="min-h-screen pt-20">
            <Navigation />
            <SEOHead
                title="NDT Training Courses USA | ASNT Certification Training | Houston, LA, Online | Atlantis"
                description="ASNT NDT certification training in USA. UT, RT, MT, PT, ET, VT Level I II III courses. Houston, Los Angeles, Online. 95% pass rate. Enroll now!"
                keywords="NDT training USA, ASNT certification, NDT courses USA, ultrasonic testing training, NDT certification Houston, NDT training online"
                canonical="https://atlantisndt.com/ndt-training-usa"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero Section - Matching main Training page style */}
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
                            <GraduationCap className="w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-wide">Training & Certification</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            NDT Training Courses in <span className="gradient-text">USA</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            ASNT certification training for all major NDT methods. Classroom and online courses with 95% pass rate.
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
                        <div><div className="text-4xl font-bold text-primary mb-2">95%</div><div className="text-muted-foreground">Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">8+</div><div className="text-muted-foreground">NDT Methods</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">4</div><div className="text-muted-foreground">US Locations</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">50+</div><div className="text-muted-foreground">Expert Instructors</div></div>
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
                        <h2 className="text-3xl font-bold mb-4">Available Courses</h2>
                        <p className="text-muted-foreground">All courses include materials, practical training, and examination</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {courses.map((course, index) => (
                            <motion.div
                                key={course.method}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                                    <CardHeader className="pb-2"><CardTitle className="text-base">{course.method}</CardTitle></CardHeader>
                                    <CardContent>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between"><span className="text-muted-foreground">Levels:</span><span>{course.levels.join(", ")}</span></div>
                                            <div className="flex justify-between"><span className="text-muted-foreground">Duration:</span><span>{course.duration}</span></div>
                                            <div className="flex justify-between"><span className="text-muted-foreground">Price:</span><span className="text-primary font-medium">{course.price}</span></div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Training Locations</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {locations.map((loc) => (
                            <Link
                                key={loc.name}
                                to={loc.link}
                                className="flex items-center gap-2 bg-background px-6 py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition cursor-pointer"
                            >
                                <MapPin className="w-4 h-4 text-primary" /><span className="font-medium">{loc.name}</span>
                            </Link>
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
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your NDT Training?</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Enroll in our next class or request a custom corporate training quote.</p>
                    <Link to="/contact">
                        <Button size="lg">Contact Us</Button>
                    </Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
