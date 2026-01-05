import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle,
    MapPin,
    Phone,
    GraduationCap,
    Award,
    Users,
    Calendar,
    ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
    {
        level: "Level I",
        duration: "40 hours",
        description: "Entry-level certification for NDT technicians. Learn fundamentals of UT, RT, MT, PT, ET, VT.",
        price: "Contact for pricing"
    },
    {
        level: "Level II",
        duration: "80 hours",
        description: "Advanced certification with equipment setup, interpretation, and reporting skills.",
        price: "Contact for pricing"
    },
    {
        level: "Level III",
        duration: "120+ hours",
        description: "Expert-level certification for procedure development, supervision, and quality management.",
        price: "Contact for pricing"
    }
];

const methods = [
    "Ultrasonic Testing (UT)",
    "Radiographic Testing (RT)",
    "Magnetic Particle Testing (MT)",
    "Liquid Penetrant Testing (PT)",
    "Eddy Current Testing (ET)",
    "Visual Testing (VT)"
];

const benefits = [
    "ASNT SNT-TC-1A compliant training",
    "ISO 9712 certification preparation",
    "Hands-on practical sessions",
    "Experienced Level III instructors",
    "Industry-recognized certificates",
    "Job placement assistance"
];

export default function HyderabadTraining() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Atlantis NDT Training Center - Hyderabad",
        "description": "ASNT and ISO 9712 compliant NDT training programs in Hyderabad, India. Level I, II, III certification courses.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Hyderabad",
            "addressRegion": "Telangana",
            "addressCountry": "IN"
        },
        "telephone": "+91-40-1234-5678",
        "areaServed": ["India", "Hyderabad", "Telangana", "South India"],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "NDT Training Courses",
            "itemListElement": courses.map(course => ({
                "@type": "Course",
                "name": `NDT ${course.level} Certification`,
                "description": course.description,
                "timeRequired": course.duration
            }))
        }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />

            <SEOHead
                title="NDT Training Hyderabad India | ASNT Level I II III Certification"
                description="Professional NDT training in Hyderabad, India. ASNT SNT-TC-1A & ISO 9712 certification courses. Level I, II, III for UT, RT, MT, PT, ET, VT. Enroll now."
                keywords="NDT training Hyderabad, NDT certification India, ASNT training Hyderabad, ultrasonic testing course India, NDT Level 2 training Hyderabad, ISO 9712 certification India"
                canonical="https://atlantisndt.com/ndt-training-hyderabad"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-orange-600 to-amber-700 text-white pt-24">
                <div className="container mx-auto max-w-6xl px-6 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-orange-200 mb-4">
                            <MapPin className="w-5 h-5" />
                            <span>Hyderabad, Telangana • Serving All of India</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            NDT Training & Certification in Hyderabad
                        </h1>
                        <p className="text-xl text-orange-100 max-w-3xl mb-8">
                            ASNT and ISO 9712 compliant training programs delivered by experienced Level III professionals.
                            Start your NDT career with industry-recognized certification.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center"
                            >
                                Enroll Now
                            </Link>
                            <Link
                                to="/training"
                                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center"
                            >
                                View All Courses
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-[#004aad] mb-2">500+</div>
                            <div className="text-slate-600">Students Trained</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#004aad] mb-2">95%</div>
                            <div className="text-slate-600">Pass Rate</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#004aad] mb-2">15+</div>
                            <div className="text-slate-600">Years Experience</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#004aad] mb-2">6</div>
                            <div className="text-slate-600">NDT Methods</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Certification Levels</h2>
                    <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                        Choose the certification level that matches your career goals
                    </p>

                    <div className="grid md:grid-cols-3 gap-6">
                        {courses.map((course, index) => (
                            <motion.div
                                key={course.level}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition border-t-4 border-t-orange-500">
                                    <CardHeader>
                                        <div className="flex items-center gap-3 mb-2">
                                            <GraduationCap className="w-8 h-8 text-orange-600" />
                                            <CardTitle className="text-2xl">{course.level}</CardTitle>
                                        </div>
                                        <div className="flex items-center gap-2 text-slate-500">
                                            <Calendar className="w-4 h-4" />
                                            <span>{course.duration}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 mb-4">{course.description}</p>
                                        <Link
                                            to="/contact"
                                            className="inline-flex items-center gap-1 text-orange-600 font-medium hover:underline"
                                        >
                                            Enquire Now <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methods & Benefits */}
            <section className="py-16 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Award className="w-6 h-6 text-orange-600" />
                                NDT Methods Covered
                            </h3>
                            <ul className="space-y-3">
                                {methods.map((method) => (
                                    <li key={method} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{method}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Users className="w-6 h-6 text-orange-600" />
                                Why Train With Us
                            </h3>
                            <ul className="space-y-3">
                                {benefits.map((benefit) => (
                                    <li key={benefit} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-orange-600 to-amber-600">
                <div className="container mx-auto max-w-4xl px-6 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Start Your NDT Career Today</h2>
                    <p className="text-orange-100 mb-8 text-lg">
                        New batches starting every month. Limited seats available.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
                        >
                            Enroll Now
                        </Link>
                        <Link
                            to="/training-india"
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                        >
                            Download Course Brochure
                        </Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
