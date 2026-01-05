import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, Anchor, Users, TrendingUp, Droplets, GraduationCap } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ContactDetails from '@/components/ContactDetails';
import { Navigation } from '@/components/Navigation';

export default function TrainingMiddleEast() {
    const certificationLevels = [
        {
            level: 'Level I - Foundation',
            duration: '1-2 weeks',
            description: 'ASNT SNT-TC-1A compliant Level I training and certification for offshore NDT. ARAMCO-aligned with focus on oil & gas applications.',
            highlight: 'Entry to offshore NDT career'
        },
        {
            level: 'Level II - Intermediate',
            duration: '2-3 weeks',
            description: 'Advanced Level II training and certification per ASNT SNT-TC-1A and ARAMCO standards. Offshore platform inspection and defect evaluation expertise.',
            highlight: 'Offshore-ready certification'
        },
        {
            level: 'Level III - Expert',
            duration: '3-4 weeks',
            description: 'Comprehensive Level III training for offshore supervisory roles. ASNT SNT-TC-1A based with ARAMCO procedure development and RBI methodology. Training only - no certification provided.',
            highlight: 'Career advancement to offshore Level III expert'
        }
    ];

    const ndtMethods = [
        'Ultrasonic Testing (UT)',
        'Time of Flight Diffraction (TOFD)',
        'Phased Array Ultrasonic (PAUT)',
        'Radiographic Testing (RT)',
        'Magnetic Particle Testing (MT)',
        'Liquid Penetrant Testing (PT)'
    ];

    // Course schema for structured data (helps with Google rich results)
    const courseSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "EducationalOrganization",
                "name": "Atlantis NDT Training Center - Middle East",
                "description": "Professional ARAMCO-compliant ASNT NDT training in Middle East",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "AE",
                    "addressRegion": "Middle East"
                }
            },
            ...certificationLevels.map((cert, idx) => ({
                "@type": "Course",
                "name": `ARAMCO ${cert.level} NDT Training`,
                "description": cert.description,
                "provider": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "sameAs": "https://atlantisndt.com"
                },
                "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "onsite",
                    "duration": cert.duration,
                    "inLanguage": "en"
                },
                "occupationalCategory": "Non-Destructive Testing Technician",
                "educationalCredentialAwarded": idx < 2 ? "ASNT SNT-TC-1A Certification" : "Training Certificate"
            }))
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-blue-950/5 pt-20">
            <Navigation />
            <SEOHead
                title="NDT Training Dubai UAE | ARAMCO Level I, II, III Certification Saudi Arabia"
                description="Professional ARAMCO-compliant ASNT SNT-TC-1A NDT training in Middle East. Level I & II training with certification, Level III training only. Offshore NDT courses Dubai, UAE, Saudi Arabia. RBI methodology for oil & gas professionals."
                keywords="NDT training Dubai, NDT training UAE, NDT courses Saudi Arabia, ARAMCO NDT certification, offshore NDT training Middle East, ASNT Level III UAE, oil gas NDT training, CSWIP training Dubai, NDT certification Saudi Arabia, ultrasonic testing training UAE, RBI training Middle East"
                canonical="https://atlantisndt.com/training-me"
                structuredData={courseSchema}
                hreflangLinks={[
                    { hreflang: 'en-US', href: '/training-usa' },
                    { hreflang: 'en-AE', href: '/training-me' },
                    { hreflang: 'en-IN', href: '/training-india' },
                    { hreflang: 'x-default', href: '/training' }
                ]}
            />
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            ASNT Level III NDT Training<br />
                            <span className="text-blue-600">For Middle East Offshore Professionals</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Professional ASNT SNT-TC-1A NDT training across GCC. ARAMCO-compliant procedures. Level I & II: Training + Certification. Level III: Training Only.
                            Specialized offshore training with RBI methodology for oil & gas sector.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button size="lg" className="btn-primary bg-blue-600 hover:bg-blue-700">
                                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                                    Enroll in ASNT Level III Program
                                </a>
                            </Button>
                            <Button size="lg" variant="outline">
                                <Link to="/consulting-me">View Consulting Services</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Certification Levels */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-950/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">ASNT SNT-TC-1A Training Levels</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {certificationLevels.map((cert, idx) => (
                            <Card key={idx} className="border-l-4 border-l-blue-600">
                                <CardHeader>
                                    <Award className="w-8 h-8 text-blue-600 mb-2" />
                                    <CardTitle>{cert.level}</CardTitle>
                                    <p className="text-sm font-semibold text-blue-600">{cert.duration}</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm mb-3">{cert.description}</p>
                                    <div className="bg-blue-50 p-2 rounded">
                                        <p className="text-xs font-semibold text-blue-900">{cert.highlight}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* NDT Methods */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Level III Training in Advanced Methods</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {ndtMethods.map((method, idx) => (
                            <div key={idx} className="flex items-center gap-2 bg-card p-4 rounded-lg border border-blue-500/20">
                                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                <span>{method}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-950/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Level III Training</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <GraduationCap className="w-8 h-8 text-blue-600 mb-2" />
                                <CardTitle>ASNT SNT-TC-1A Compliant</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Level I & II: Training + Certification (ASNT SNT-TC-1A)</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Level III: Training Only (No Certification Provided)</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Risk-Based Inspection (RBI) methodology specialization</span>
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Droplets className="w-8 h-8 text-blue-600 mb-2" />
                                <CardTitle>Offshore-Focused Training</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Practical Level III training on real offshore components</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Expert Level III instructors with offshore experience</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>94% job placement rate in GCC oil & gas sector</span>
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            What Our Middle East Clients Say
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Hear from NDT professionals across the GCC who advanced their careers with Atlantis
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <Card className="h-full">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground mb-4 italic">
                                        "The ARAMCO-aligned training at Atlantis was exactly what I needed. Within three months of completing my Level II certification, I secured a position with a major oil company in Abu Dhabi."
                                    </p>
                                    <div className="font-semibold">Ahmed S.</div>
                                    <div className="text-sm text-muted-foreground">NDT Inspector, Dubai, UAE</div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <Card className="h-full">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground mb-4 italic">
                                        "Atlantis provided excellent PAUT training with real offshore components. The instructors understand the GCC oil & gas requirements perfectly. Highly recommended for anyone in Saudi Arabia."
                                    </p>
                                    <div className="font-semibold">Mohammed A.</div>
                                    <div className="text-sm text-muted-foreground">Senior QC Engineer, Dammam, Saudi Arabia</div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        <motion.div
                            initial={{ y: 30, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Card className="h-full">
                                <CardContent className="pt-6">
                                    <div className="flex items-center gap-1 mb-4">
                                        {[1, 2, 3, 4, 5].map(i => (
                                            <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                                                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground mb-4 italic">
                                        "After my Level III training with Atlantis, I was promoted to lead inspector at our Qatar LNG facility. Their training is world-class and recognized throughout the Middle East."
                                    </p>
                                    <div className="font-semibold">Khalid M.</div>
                                    <div className="text-sm text-muted-foreground">Lead NDT Inspector, Doha, Qatar</div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Common questions about NDT training in Dubai, UAE, and Saudi Arabia
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Is NDT certification from Atlantis recognized in UAE and Saudi Arabia?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Yes, our ASNT SNT-TC-1A compliant training is recognized across the GCC region including
                                    UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman. Our training aligns with ARAMCO and
                                    ADNOC inspection requirements.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">What NDT methods are most in demand in the Middle East oil & gas sector?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Phased Array Ultrasonic Testing (PAUT), TOFD, and conventional UT are highly sought after
                                    for pipeline and pressure vessel inspections. Magnetic Particle Testing (MT) and Radiographic
                                    Testing (RT) are also essential for offshore platform inspections.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Do you offer NDT training in Dubai?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Yes, we provide NDT training programs in Dubai, UAE with flexible scheduling to accommodate
                                    working professionals. Training can be conducted at our facility or on-site at your location
                                    across the Middle East region.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">What career opportunities are available after NDT certification in the GCC?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Level II and III certified NDT technicians are in high demand across offshore platforms,
                                    refineries, petrochemical plants, and construction projects throughout the GCC. Our training
                                    programs have a 94% job placement rate in the regional oil & gas sector.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Advance Your Offshore Career to ASNT Level III
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            Earn ASNT SNT-TC-1A training recognized across Middle East and become an offshore NDT expert.
                        </p>
                        <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                                Enroll Now
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
