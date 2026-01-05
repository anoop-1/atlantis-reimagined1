import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Briefcase, Award, Users, Zap, Anchor, Droplets, Shield, FileSearch } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import ContactDetails from '@/components/ContactDetails';
import { Navigation } from '@/components/Navigation';

export default function ConsultingServicesMiddleEast() {
    const expertise = [
        {
            icon: Anchor,
            title: 'Offshore Platform Inspection',
            description: 'ARAMCO-compliant NDT for offshore platforms, FPSOs, MODUs, and subsea structures across GCC region'
        },
        {
            icon: Droplets,
            title: 'Pipeline & Refinery Services',
            description: 'Expert inspection for oil & gas pipelines, storage tanks, and refinery equipment per ARAMCO standards'
        },
        {
            icon: Award,
            title: 'ARAMCO Procedure Development',
            description: 'NDT procedures aligned with ARAMCO SAMSS, ISO 9712, and international offshore standards'
        },
        {
            icon: Users,
            title: 'Risk-Based Inspection (RBI)',
            description: 'Advanced RBI methodology for asset integrity management in petrochemical and offshore facilities'
        },
        {
            icon: FileSearch,
            title: 'Compliance & Auditing',
            description: 'ARAMCO, ADNOC, and QatarEnergy compliance verification and third-party quality assurance'
        },
        {
            icon: Shield,
            title: 'Corrosion Management',
            description: 'Comprehensive corrosion monitoring and integrity assessment for harsh offshore environments'
        }
    ];

    const ndtMethods = [
        'Ultrasonic Testing (UT)',
        'Time of Flight Diffraction (TOFD)',
        'Phased Array Ultrasonic (PAUT)',
        'Radiographic Testing (RT)',
        'Magnetic Particle Testing (MT)',
        'Liquid Penetrant Testing (PT)',
        'Eddy Current Testing (ET)',
        'Magnetic Flux Leakage Testing (MFL)',
        'Visual Testing (VT)'
    ];

    const sectors = [
        { name: 'Offshore Platforms', icon: '🛢️' },
        { name: 'Subsea Pipelines', icon: '🌊' },
        { name: 'Refineries', icon: '🏭' },
        { name: 'Petrochemical Plants', icon: '⚗️' },
        { name: 'LNG Facilities', icon: '💨' },
        { name: 'Export Terminals', icon: '🚢' },
        { name: 'Pressure Vessels', icon: '⚙️' },
        { name: 'Storage Tanks', icon: '🛢️' }
    ];

    const gccCoverage = [
        { country: 'Saudi Arabia', cities: 'Riyadh, Dammam, Khobar, Jeddah' },
        { country: 'UAE', cities: 'Abu Dhabi, Dubai, Sharjah' },
        { country: 'Qatar', cities: 'Doha, Ras Laffan' },
        { country: 'Kuwait', cities: 'Kuwait City, Ahmadi' },
        { country: 'Bahrain', cities: 'Manama, Sitra' },
        { country: 'Oman', cities: 'Muscat, Sohar' }
    ];

    // Service schema for structured data
    const serviceSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "name": "Atlantis NDT - Middle East",
                "description": "ARAMCO-compliant NDT Level III consulting services in Middle East",
                "url": "https://atlantisndt.com/consulting-me",
                "email": "info@atlantisndt.com",
                "address": {
                    "@type": "PostalAddress",
                    "addressCountry": "AE",
                    "addressRegion": "Middle East"
                },
                "areaServed": ["Saudi Arabia", "UAE", "Qatar", "Kuwait", "Bahrain", "Oman"],
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
                    "@type": "GeoCircle",
                    "geoMidpoint": {
                        "@type": "GeoCoordinates",
                        "latitude": 24.4539,
                        "longitude": 54.3773
                    },
                    "geoRadius": "1500 km"
                },
                "serviceType": "NDT Consulting"
            }))
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-blue-950/5 pt-20">
            <Navigation />
            <SEOHead
                title="NDT Consulting Dubai UAE | ARAMCO Offshore Inspection Saudi Arabia"
                description="ARAMCO-compliant NDT Level III consulting in Middle East. Offshore platform inspection, RBI methodology, oil gas NDT services. Saudi Arabia, UAE, Qatar, Kuwait expert services."
                keywords="NDT consulting Dubai, NDT consulting UAE, ARAMCO NDT services, offshore inspection Saudi Arabia, oil gas NDT Middle East, RBI consulting UAE, pipeline inspection Saudi, ADNOC NDT consulting, QatarEnergy inspection, subsea NDT services"
                canonical="https://atlantisndt.com/consulting-me"
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
                            ARAMCO-Compliant NDT Consulting<br />
                            <span className="text-blue-600">For Middle East Oil & Gas</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                            ASNT(SNT-TC-1A)ISO 9712 and ARAMCO-compliant Level III NDT consulting for offshore platforms, refineries, and petrochemical facilities across GCC nations.
                            Expert RBI methodology and subsea inspection services.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <Button size="lg" className="btn-primary bg-blue-600 hover:bg-blue-700">
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
                        Specialized Middle East Consulting Services
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

            {/* NDT Methods & Sectors */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Advanced NDT Methods</h3>
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
                            <h3 className="text-2xl font-bold mb-6">Sectors Served</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {sectors.map((sector, idx) => (
                                    <div key={idx} className="flex items-center gap-2 bg-card p-3 rounded-lg border border-primary/10">
                                        <span className="text-xl">{sector.icon}</span>
                                        <span className="text-sm">{sector.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ARAMCO Compliance */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-950/5">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">ARAMCO & Regional Standards Compliance</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="border-l-4 border-l-blue-600">
                            <CardHeader>
                                <CardTitle className="text-blue-700">ARAMCO Standards</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <p>✓ ARAMCO SAMSS Technical Standards</p>
                                <p>✓ Offshore Inspector Certification</p>
                                <p>✓ Pressure Vessel Regulations</p>
                                <p>✓ Welding Inspection Standards</p>
                                <p>✓ Hydrogen Service Equipment</p>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-blue-600">
                            <CardHeader>
                                <CardTitle className="text-blue-700">International Standards</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <p>✓ ISO 9712 Level III Personnel</p>
                                <p>✓ API 1104 Pipeline Welding</p>
                                <p>✓ ASME Section V Inspection</p>
                                <p>✓ SNT-TC-1A Guidelines</p>
                                <p>✓ ISO 17645 RBI Standards</p>
                            </CardContent>
                        </Card>
                        <Card className="border-l-4 border-l-blue-600">
                            <CardHeader>
                                <CardTitle className="text-blue-700">Regional Expertise</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-2 text-sm">
                                <p>✓ ADNOC Compliance (UAE)</p>
                                <p>✓ QatarEnergy Standards</p>
                                <p>✓ KOC Requirements (Kuwait)</p>
                                <p>✓ Bapco Standards (Bahrain)</p>
                                <p>✓ PDO Specifications (Oman)</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* GCC Coverage */}
            <section className="py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">GCC Regional Coverage</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        {gccCoverage.map((region, idx) => (
                            <Card key={idx} className="hover:shadow-lg transition-shadow">
                                <CardContent className="pt-6">
                                    <h3 className="font-bold text-lg mb-2 text-blue-700">{region.country}</h3>
                                    <p className="text-sm text-muted-foreground">{region.cities}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <p className="text-center mt-8 text-muted-foreground">
                        Comprehensive offshore and onshore NDT consulting across all GCC nations
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
                            Ensure Asset Integrity & Compliance
                        </h2>
                        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            Partner with ARAMCO-compliant Level III consultants for offshore and refinery NDT services.
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
