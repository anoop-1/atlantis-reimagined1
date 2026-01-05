import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    CheckCircle,
    MapPin,
    Globe,
    Shield,
    Clock,
    Building2,
    Scan,
    Radio,
    Magnet,
    Droplet,
    Zap,
    Eye,
    ArrowRight
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
    { icon: Scan, name: "Ultrasonic Testing (UT)", description: "Advanced flaw detection for pipelines, vessels, and offshore structures." },
    { icon: Radio, name: "Radiographic Testing (RT)", description: "X-ray and gamma inspection for welds and castings." },
    { icon: Magnet, name: "Magnetic Particle Testing (MT)", description: "Surface crack detection on ferromagnetic components." },
    { icon: Droplet, name: "Penetrant Testing (PT)", description: "Liquid dye inspection for surface defects." },
    { icon: Zap, name: "Eddy Current Testing (ET)", description: "Heat exchanger and tubing inspection." },
    { icon: Eye, name: "Visual Testing (VT)", description: "Remote visual inspection with drones and borescopes." }
];

const countries = [
    "United Arab Emirates (Dubai, Abu Dhabi)",
    "Saudi Arabia (Riyadh, Dammam, Jubail)",
    "Qatar (Doha)",
    "Kuwait",
    "Bahrain",
    "Oman (Muscat, Sohar)"
];

const industries = [
    "Offshore Oil & Gas Platforms",
    "Refineries & Petrochemical Plants",
    "Desalination Plants",
    "Power Generation Facilities",
    "Pipeline Networks",
    "LNG Terminals",
    "Fabrication Yards",
    "Marine & Shipbuilding"
];

export default function MiddleEastServices() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Non-Destructive Testing Services",
        "provider": {
            "@type": "Organization",
            "name": "Atlantis NDT",
            "url": "https://atlantisndt.com"
        },
        "areaServed": [
            { "@type": "Country", "name": "United Arab Emirates" },
            { "@type": "Country", "name": "Saudi Arabia" },
            { "@type": "Country", "name": "Qatar" },
            { "@type": "Country", "name": "Kuwait" },
            { "@type": "Country", "name": "Bahrain" },
            { "@type": "Country", "name": "Oman" }
        ],
        "description": "Professional NDT inspection and consulting services across the Middle East. ASNT Level III certified technicians for oil & gas, petrochemical, and offshore industries."
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />

            <SEOHead
                title="NDT Services Middle East | UAE, Saudi Arabia, Qatar | ASNT Certified"
                description="Expert NDT inspection services across the Middle East - UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman. ASNT Level III certified for oil & gas, petrochemical, offshore. Get quote."
                keywords="NDT services Middle East, NDT inspection UAE, NDT Saudi Arabia, NDT Dubai, oil gas inspection GCC, ASNT Level III Middle East, pipeline inspection UAE, offshore NDT Qatar"
                canonical="https://atlantisndt.com/ndt-services-middle-east"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-emerald-700 to-teal-800 text-white pt-24">
                <div className="container mx-auto max-w-6xl px-6 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-emerald-200 mb-4">
                            <Globe className="w-5 h-5" />
                            <span>Serving UAE, Saudi Arabia, Qatar & GCC Countries</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            NDT Services Across the Middle East
                        </h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mb-8">
                            ASNT Level III certified inspection services for the oil & gas,
                            petrochemical, and offshore industries throughout the GCC region.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center"
                            >
                                Request Quote
                            </Link>
                            <Link
                                to="/consulting-me"
                                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center"
                            >
                                View Consulting Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Features */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-100 p-3 rounded-lg">
                                <Globe className="w-6 h-6 text-emerald-700" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Regional Coverage</h3>
                                <p className="text-slate-600 text-sm">All GCC countries</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-100 p-3 rounded-lg">
                                <Shield className="w-6 h-6 text-emerald-700" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">ASNT Certified</h3>
                                <p className="text-slate-600 text-sm">Level III technicians</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-100 p-3 rounded-lg">
                                <Clock className="w-6 h-6 text-emerald-700" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Quick Mobilization</h3>
                                <p className="text-slate-600 text-sm">48-hour response</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-emerald-100 p-3 rounded-lg">
                                <Building2 className="w-6 h-6 text-emerald-700" />
                            </div>
                            <div>
                                <h3 className="font-semibold mb-1">Major Clients</h3>
                                <p className="text-slate-600 text-sm">NOCs & IOCs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Methods Available</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-3">
                                            <service.icon className="w-6 h-6 text-emerald-600" />
                                            <CardTitle className="text-lg">{service.name}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 text-sm">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Countries & Industries */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <MapPin className="w-6 h-6 text-emerald-400" />
                                Countries We Serve
                            </h3>
                            <ul className="space-y-3">
                                {countries.map((country) => (
                                    <li key={country} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                        <span>{country}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                <Building2 className="w-6 h-6 text-emerald-400" />
                                Industries Served
                            </h3>
                            <ul className="space-y-3">
                                {industries.map((industry) => (
                                    <li key={industry} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                        <span>{industry}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600">
                <div className="container mx-auto max-w-4xl px-6 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
                    <p className="text-emerald-100 mb-8 text-lg">
                        Contact our Middle East team for project inquiries and quotations
                    </p>
                    <Link
                        to="/contact"
                        className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
                    >
                        Get in Touch
                    </Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
