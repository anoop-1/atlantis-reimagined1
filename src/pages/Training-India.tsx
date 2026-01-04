import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, BookOpen, Users, TrendingUp, Factory, GraduationCap } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import ContactDetails from '@/components/ContactDetails';
import { Navigation } from '@/components/Navigation';

export default function TrainingIndia() {
    const certificationLevels = [
        {
            level: 'Level I - Foundation',
            duration: '1-2 weeks',
            description: 'ASNT SNT-TC-1A compliant Level I training and certification for entry-level NDT personnel. Manufacturing applications focus.',
            highlight: 'Quick certification for immediate deployment'
        },
        {
            level: 'Level II - Intermediate',
            duration: '2-3 weeks',
            description: 'Advanced Level II training and certification per ASNT SNT-TC-1A standards. Procedure interpretation and defect evaluation for manufacturing.',
            highlight: 'Industry-ready certification'
        },
        {
            level: 'Level III - Expert',
            duration: '3-4 weeks',
            description: 'Comprehensive Level III training for supervisory roles. ASNT SNT-TC-1A based program. Training only - no certification provided.',
            highlight: 'Career advancement to Level III expert'
        }
    ];

    const ndtMethods = [
        'Ultrasonic Testing (UT)',
        'Radiographic Testing (RT)',
        'Magnetic Particle Testing (MT)',
        'Liquid Penetrant Testing (PT)',
        'Visual Testing (VT)',
        'Eddy Current Testing (ET)'
    ];

    // Course schema for structured data (helps with Google rich results)
    const courseSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "EducationalOrganization",
                "name": "Atlantis NDT Training Center - India",
                "description": "Professional ASNT NDT training and certification in India",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                }
            },
            ...certificationLevels.map((cert, idx) => ({
                "@type": "Course",
                "name": `ASNT ${cert.level} NDT Training India`,
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
                title="NDT Training India | Best NDT Institute Mumbai Chennai Bangalore"
                description="Professional ASNT SNT-TC-1A NDT training in India. Level I & II training with certification, Level III training only. Ultrasonic, radiographic, magnetic particle testing courses. Fast-track certification Mumbai, Chennai, Bangalore, Delhi."
                keywords="NDT training India, best NDT institute India, NDT courses Mumbai, NDT training Chennai, NDT certification Bangalore, ultrasonic testing training India, ASNT Level II India, radiographic testing course India, NDT technician training, welding inspector certification India, NDT Level III India"
                canonical="https://atlantisndt.com/training-india"
                structuredData={courseSchema}
            />

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
                            NDT Training & Certification<br />
                            <span className="text-blue-600">ASNT SNT-TC-1A Based in India</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            Professional ASNT SNT-TC-1A NDT training across India. Level I & II: Training + Certification. Level III: Training Only.
                            Fast-track programs for manufacturing and industrial sectors.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button size="lg" className="btn-primary">
                                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                                    Enroll in Level III Program
                                </a>
                            </Button>
                            <Button size="lg" variant="outline">
                                <Link to="/consulting-india">View Consulting Services</Link>
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
                    <h2 className="text-3xl font-bold text-center mb-12">Level III Training in All NDT Methods</h2>
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
                                    <span>ASNT SNT-TC-1A Level I & II: Training + Certification</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Level III: Training Only (No Certification Provided)</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Manufacturing sector focused curriculum</span>
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Factory className="w-8 h-8 text-blue-600 mb-2" />
                                <CardTitle>Industry-Focused Training</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Practical Level III training with real manufacturing components</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Expert Level III instructors with 10+ years experience</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>92% job placement rate for Level III certified professionals</span>
                                </p>
                            </CardContent>
                        </Card>
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
                            Common questions about NDT training in Mumbai, Chennai, Bangalore, and across India
                        </p>
                    </motion.div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">What is the best NDT institute in India?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Atlantis NDT offers world-class ASNT SNT-TC-1A compliant training with experienced
                                    Level III instructors. Our training programs are recognized by major manufacturing,
                                    oil & gas, and power sector companies across India and internationally.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">What is the NDT certification cost in India?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    NDT certification costs vary by level and method. Contact us for current pricing in INR.
                                    Our fees include classroom training, hands-on practical sessions with real components,
                                    study materials, and certification examination for Level I and II.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Where can I get NDT training in India?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    We offer NDT training programs in major industrial hubs including Mumbai, Chennai,
                                    Bangalore, Hyderabad, Pune, and Delhi NCR. We also provide on-site training at your
                                    facility for corporate groups and manufacturing units.
                                </p>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Is ASNT certification valid in India?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">
                                    Yes, ASNT SNT-TC-1A certification is widely recognized in India by major companies
                                    including ONGC, IOCL, BHEL, L&T, Reliance, and Tata. It's also recognized internationally,
                                    opening doors to opportunities in the Middle East, USA, and Europe.
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
                            Advance Your Career to Level III
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            Earn ASNT SNT-TC-1A training and become an NDT expert in India's growing manufacturing sector.
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
