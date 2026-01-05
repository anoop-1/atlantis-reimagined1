import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Briefcase, Award, Users, Zap, Plane, Rocket, Shield, FileCheck } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import ContactDetails from '@/components/ContactDetails';
import { Navigation } from '@/components/Navigation';

export default function ConsultingServicesUSA() {
    const expertise = [
        {
            icon: Rocket,
            title: 'ASNT Level III Certification Support',
            description: 'Expert guidance for ASNT Level III examination preparation, qualification, and ongoing certification maintenance'
        },
        {
            icon: Award,
            title: 'Aerospace NDT Level III Services',
            description: 'NAS410, Nadcap AC7114, and FAA-compliant Level III consulting for aerospace and defense sectors'
        },
        {
            icon: Plane,
            title: 'Advanced Method Consulting',
            description: 'Level III expertise in Phased Array (PAUT), TOFD, Digital Radiography, and emerging NDT technologies'
        },
        {
            icon: Briefcase,
            title: 'ASME & API Code Compliance',
            description: 'Level III procedure development and review for ASME Section V, API 510, 570, 653, and AWS standards'
        },
        {
            icon: FileCheck,
            title: 'Level III Program Management',
            description: 'Complete NDT program administration, written practice development per SNT-TC-1A and CP-189'
        },
        {
            icon: Shield,
            title: 'Third-Party Level III Services',
            description: 'Act as your responsible Level III of record for regulatory compliance and quality assurance'
        }
    ];

    const ndtMethods = [
        'Phased Array Ultrasonic (PAUT)',
        'Time of Flight Diffraction (TOFD)',
        'Digital Radiography (DR/CR)',
        'Ultrasonic Testing (UT)',
        'Radiographic Testing (RT)',
        'Magnetic Particle Testing (MT)',
        'Liquid Penetrant Testing (PT)',
        'Eddy Current Testing (ET)'
    ];

    const industries = [
        { name: 'Aerospace & Defense', icon: '✈️' },
        { name: 'Oil & Gas', icon: '🛢️' },
        { name: 'Power Generation', icon: '⚡' },
        { name: 'Automotive', icon: '🚗' },
        { name: 'Nuclear Energy', icon: '☢️' },
        { name: 'Manufacturing', icon: '🏭' },
        { name: 'Chemical Processing', icon: '⚗️' },
        { name: 'Infrastructure', icon: '🏗️' }
    ];

    const certifications = [
        { standard: 'ASNT SNT-TC-1A', description: 'Primary guideline for NDT personnel qualification' },
        { standard: 'ASME Section V', description: 'Nondestructive examination standards' },
        { standard: 'API 510/570/653', description: 'Pressure vessel and piping inspection' },
        { standard: 'NAS410', description: 'Aerospace NDT personnel certification' },
        { standard: 'CP-189', description: 'DoD personnel qualification standard' },
        { standard: 'AWS D1.1', description: 'Structural welding code' }
    ];

    // Service schema for structured data
    const serviceSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "name": "Atlantis NDT - USA",
                "description": "ASNT-certified NDT Level III consulting services in USA",
                "url": "https://atlantisndt.com/consulting-usa",
                "telephone": "+1 (281) 840-8969",
                "email": "info@atlantisndt.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "US",
                    "addressRegion": "TX",
                    "addressLocality": "Houston"
                },
                "areaServed": "United States",
                "priceRange": "$$$$"
            },
            ...expertise.map(item => ({
                "@type": "Service",
                "name": item.title,
                "description": item.description,
                "provider": {
                    "@type": "Organization",
                    "name": "Atlantis NDT"
                },
                "areaServed": {
                    "@type": "Country",
                    "name": "United States"
                },
                "serviceType": "NDT Consulting"
            }))
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-blue-950/5 pt-20">
            <Navigation />
            <SEOHead
                title="NDT Consulting USA | ASNT Level III Aerospace & ASME Expert Services"
                description="ASNT-certified NDT Level III consulting USA. Aerospace NDT, ASME/API compliance, phased array expertise. NAS410, Nadcap, FAA certified. Nationwide Level III services for oil gas, manufacturing, nuclear."
                keywords="NDT consulting USA, ASNT Level III consulting, aerospace NDT services, ASME consulting, API inspection services, Nadcap consulting, NAS410 certification, phased array consulting, ultrasonic testing consulting, NDT Level III services USA"
                canonical="https://atlantisndt.com/consulting-usa"
                structuredData={serviceSchema}
                hreflangLinks={[
                    { hreflang: 'en-US', href: '/consulting-usa' },
                    { hreflang: 'en-AE', href: '/consulting-me' },
                    { hreflang: 'en-IN', href: '/consulting-india' },
                    { hreflang: 'x-default', href: '/consulting' }
                ]}
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
                            ASNT NDT Level III Consulting<br />
                            <span className="text-blue-600">For Aerospace & Industrial Excellence</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            ASNT-certified Level III NDT consulting for aerospace, oil & gas, and manufacturing. Expert ASME, API, and NAS410 compliance.
                            Advanced Level III services in Phased Array, TOFD, and digital radiography nationwide.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button size="lg" className="btn-primary bg-blue-600 hover:bg-blue-700">
                                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                                    Request Level III Consultation
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Expertise Services */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-950/5">
                <div className="max-w-6xl mx-auto">
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        ASNT Level III Consulting Services
                    </motion.h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {expertise.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Card className="h-full border-blue-500/20 hover:border-blue-500/50 hover:shadow-lg transition-all">
                                        <CardHeader>
                                            <IconComponent className="w-8 h-8 text-blue-600 mb-2" />
                                            <CardTitle className="text-lg">{item.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">{item.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* NDT Methods & Industries */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Level III NDT Methods</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {ndtMethods.map((method, idx) => (
                                    <div key={idx} className="flex items-center gap-2 bg-card p-3 rounded-lg border border-primary/10">
                                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                        <span className="text-sm">{method}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Industries Served</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {industries.map((industry, idx) => (
                                    <div key={idx} className="flex items-center gap-2 bg-card p-3 rounded-lg border border-primary/10">
                                        <span className="text-xl">{industry.icon}</span>
                                        <span className="text-sm">{industry.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Standards Compliance */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-950/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Level III Standards & Certifications</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {certifications.map((cert, idx) => (
                            <Card key={idx} className="border-l-4 border-l-blue-600">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-lg mb-2 text-blue-700">{cert.standard}</h3>
                                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Level III Services</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card>
                            <CardHeader>
                                <CardTitle>ASNT Level III Certified Experts</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Multiple Level III certifications across all major NDT methods</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>10+ years of Level III experience in aerospace and industrial sectors</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Recognized by major aerospace OEMs and Nadcap auditors</span>
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Comprehensive Level III Support</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Written practice development per SNT-TC-1A and CP-189</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Level III examination preparation and mentoring</span>
                                </p>
                                <p className="flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                    <span>Nationwide service with rapid response times</span>
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Partner with Level III NDT Experts
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            Elevate your NDT program with ASNT-certified Level III consulting services.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                                    Contact Level III Consultant
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-blue-700">
                                <Link to="/consulting">View All Services</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
