import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Briefcase, Award, Users, Zap, Globe, TrendingUp, Factory, Shield, FileCheck } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import ContactDetails from '@/components/ContactDetails';
import { Navigation } from '@/components/Navigation';

export default function ConsultingServicesIndia() {
    const expertise = [
        {
            icon: Briefcase,
            title: 'Risk-Based Inspection (RBI) Planning',
            description: 'ISO 9712 compliant RBI planning for pressure vessels, boilers, and critical manufacturing assets'
        },
        {
            icon: Award,
            title: 'Procedure Development & Validation',
            description: 'NDT procedures aligned with Indian Standards (IS 1200, IS 5778), API, ASME, and BIS regulations'
        },
        {
            icon: Factory,
            title: 'Boiler Regulations 2020 Compliance',
            description: 'Expert consulting for mandatory boiler and pressure vessel inspection per Indian regulations'
        },
        {
            icon: Users,
            title: 'Level III Certification Support',
            description: 'ISO 9712 and SNT-TC-1A Level III certification guidance and examination preparation'
        },
        {
            icon: FileCheck,
            title: 'Quality Control & Process Audits',
            description: 'NDT program audits, BIS compliance verification, and continuous improvement consulting'
        },
        {
            icon: Shield,
            title: 'Welding Inspection Services',
            description: 'Advanced UT, RT, and MT inspection for critical weld structures per AWS/ASME/IS standards'
        }
    ];

    const ndtMethods = [
        'Ultrasonic Testing (UT)',
        'Radiographic Testing (RT)',
        'Magnetic Particle Testing (MT)',
        'Liquid Penetrant Testing (PT)',
        'Eddy Current Testing (ET)',
        'Visual Testing (VT)',
        'Phased Array Ultrasonic (PAUT)',
        'Time of Flight Diffraction (TOFD)'
    ];

    const industries = [
        { name: 'Pressure Vessels', icon: '⚙️' },
        { name: 'Boiler Manufacturing', icon: '🔥' },
        { name: 'Petrochemical Plants', icon: '🏭' },
        { name: 'Power Generation', icon: '⚡' },
        { name: 'Aerospace Components', icon: '✈️' },
        { name: 'Pharmaceutical Equipment', icon: '💊' },
        { name: 'Heavy Manufacturing', icon: '🏗️' },
        { name: 'Automotive Components', icon: '🚗' }
    ];

    const regionalCoverage = [
        { state: 'Gujarat', cities: 'Ahmedabad, Vadodara, Surat' },
        { state: 'Maharashtra', cities: 'Mumbai, Pune, Nagpur' },
        { state: 'Tamil Nadu', cities: 'Chennai, Coimbatore, Madurai' },
        { state: 'Telangana', cities: 'Hyderabad, Warangal' },
        { state: 'Karnataka', cities: 'Bangalore, Mysore' },
        { state: 'West Bengal', cities: 'Kolkata, Durgapur' }
    ];

    // Service schema for structured data
    const serviceSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "name": "Atlantis NDT - India",
                "description": "ISO 9712 certified NDT Level III consulting services in India",
                "url": "https://atlantisndt.com/consulting-india",
                "email": "info@atlantisndt.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "IN"
                },
                "areaServed": "India",
                "priceRange": "$$$"
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
                    "name": "India"
                },
                "serviceType": "NDT Consulting"
            }))
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-blue-950/5 pt-20">
            <Navigation />
            <SEOHead
                title="NDT Consulting India | Level III Services Mumbai Chennai Bangalore"
                description="Professional NDT Level III consulting in India. ISO 9712 & BIS certified. Welding inspection, pressure vessel testing, boiler regulations 2020 compliance. Manufacturing sector NDT services Mumbai, Chennai, Bangalore."
                keywords="NDT consulting India, NDT consulting Mumbai, NDT services Chennai, NDT inspection Bangalore, ISO 9712 India, welding inspection India, pressure vessel testing, boiler inspection India, manufacturing NDT, BIS certified NDT, quality control India"
                canonical="https://atlantisndt.com/consulting-india"
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
                            NDT Level III Consulting<br />
                            <span className="text-blue-600">For Indian Manufacturing</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            ISO 9712 certified Level III NDT consulting for manufacturing, pressure vessels, and welding inspection across India.
                            BIS compliant with expertise in Boiler Regulations 2020 and Indian Standards.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button size="lg" className="btn-primary">
                                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                                    Request Consultation
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
                        Specialized India Consulting Services
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
                            <h3 className="text-2xl font-bold mb-6">NDT Methods</h3>
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

            {/* Indian Standards Compliance */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-950/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Indian Standards & BIS Compliance</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-l-4 border-l-blue-600">
                            <CardHeader>
                                <CardTitle className="text-blue-700">Indian Standards (IS)</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <p>✓ IS 1200 - Radiographic Inspection</p>
                                <p>✓ IS 5778 - Ultrasonic Testing</p>
                                <p>✓ IS 5768 - Magnetic Particle Testing</p>
                                <p>✓ IS 4394 - Liquid Penetrant Inspection</p>
                                <p>✓ IS 3624 - Welding Inspection</p>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-blue-600">
                            <CardHeader>
                                <CardTitle className="text-blue-700">BIS Compliance</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <p>✓ Bureau of Indian Standards Certified</p>
                                <p>✓ Boiler Regulations 2020</p>
                                <p>✓ Pressure Vessel Regulations</p>
                                <p>✓ Manufacturing Sector Focus</p>
                                <p>✓ Quality Management Systems</p>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-blue-600">
                            <CardHeader>
                                <CardTitle className="text-blue-700">International Standards</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <p>✓ ISO 9712 Level III Certification</p>
                                <p>✓ ASME Section V & VIII</p>
                                <p>✓ API 510, 570, 653</p>
                                <p>✓ AWS D1.1 Welding Codes</p>
                                <p>✓ SNT-TC-1A Guidelines</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Regional Coverage */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Multi-State Coverage Across India</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {regionalCoverage.map((region, idx) => (
                            <Card key={idx} className="hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-lg mb-2 text-blue-700">{region.state}</h3>
                                    <p className="text-sm text-muted-foreground">{region.cities}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <p className="text-center mt-8 text-muted-foreground">
                        Serving major industrial hubs across India with on-site consulting and facility-based services
                    </p>
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
                            Ready to Ensure Quality & Safety?
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            Partner with India's leading NDT Level III consultants for comprehensive inspection solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                                    Contact Us Today
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
