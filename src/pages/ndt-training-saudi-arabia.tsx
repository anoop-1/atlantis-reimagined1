import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { GraduationCap, MapPin, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
    { method: "Ultrasonic Testing (UT)", levels: ["Level I", "Level II", "Level III"] },
    { method: "Phased Array UT (PAUT)", levels: ["Level I", "Level II"] },
    { method: "Radiographic Testing (RT)", levels: ["Level I", "Level II", "Level III"] },
    { method: "Magnetic Particle Testing (MT)", levels: ["Level I", "Level II"] },
    { method: "Liquid Penetrant Testing (PT)", levels: ["Level I", "Level II"] },
    { method: "Eddy Current Testing (ET)", levels: ["Level I", "Level II"] }
];

const locations = [
    { name: "Dammam (Eastern Province)", link: "/ndt-services-saudi-arabia" },
    { name: "Riyadh", link: "/ndt-services-saudi-arabia" },
    { name: "Jubail", link: "/ndt-services-saudi-arabia" },
    { name: "On-site at Client Facilities", link: "/contact" }
];

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
        <div className="min-h-screen pt-20">
            <Navigation />
            <SEOHead
                title="NDT Training Saudi Arabia | ASNT Certification Dammam Riyadh | Atlantis"
                description="NDT certification training in Saudi Arabia. ASNT, ISO 9712 courses. Dammam, Riyadh, Jubail. Saudi Aramco recognized. Enroll now!"
                keywords="NDT training Saudi Arabia, NDT certification KSA, ASNT training Dammam, NDT courses Riyadh, Saudi Aramco NDT training, NDT Jubail"
                canonical="https://atlantisndt.com/ndt-training-saudi-arabia"
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
                            <GraduationCap className="w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-wide">Training & Certification</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            NDT Training in <span className="gradient-text">Saudi Arabia</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            ASNT and ISO 9712 certification training recognized by Saudi Aramco and major KSA operators. Dammam, Riyadh, Jubail locations.
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
                        <div><div className="text-4xl font-bold text-primary mb-2">4</div><div className="text-muted-foreground">KSA Locations</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">Aramco</div><div className="text-muted-foreground">Recognized</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">15+</div><div className="text-muted-foreground">Years Experience</div></div>
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
                        <p className="text-muted-foreground">Contact us for current pricing and corporate rates</p>
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
                                    <CardHeader className="pb-2"><CardTitle className="text-base">{course.method}</CardTitle></CardHeader>
                                    <CardContent>
                                        <div className="text-sm">
                                            <span className="text-muted-foreground">Levels: </span>
                                            <span>{course.levels.join(", ")}</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications & Locations */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Certifications Offered</h2>
                            <ul className="space-y-3">
                                {certifications.map((cert) => (
                                    <li key={cert} className="flex items-center gap-3">
                                        <Award className="w-5 h-5 text-primary" />
                                        <span>{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Training Locations</h2>
                            <ul className="space-y-3">
                                {locations.map((loc) => (
                                    <li key={loc.name}>
                                        <Link to={loc.link} className="flex items-center gap-3 hover:text-primary transition">
                                            <MapPin className="w-5 h-5 text-primary" />
                                            <span>{loc.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
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
                    <h2 className="text-3xl font-bold mb-4">Start Your NDT Training in Saudi Arabia</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Enroll today or contact us for corporate training quotes.</p>
                    <Link to="/contact">
                        <Button size="lg">Contact Us</Button>
                    </Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
