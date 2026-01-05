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
    {
        icon: Scan,
        name: "Ultrasonic Testing (UT)",
        description: "High-frequency sound wave inspection for welds, thickness, and flaw detection.",
        link: "/blog/ultrasonic-testing"
    },
    {
        icon: Radio,
        name: "Radiographic Testing (RT)",
        description: "X-ray and gamma ray inspection for internal defects in critical components.",
        link: "/blog/radiographic-testing"
    },
    {
        icon: Magnet,
        name: "Magnetic Particle Testing (MT)",
        description: "Surface and near-surface defect detection in ferromagnetic materials.",
        link: "/blog/magnetic-particle-testing"
    },
    {
        icon: Droplet,
        name: "Penetrant Testing (PT)",
        description: "Liquid dye inspection for surface-breaking defects on non-porous materials.",
        link: "/blog/penetrant-testing"
    },
    {
        icon: Zap,
        name: "Eddy Current Testing (ET)",
        description: "Electromagnetic inspection for tubing, heat exchangers, and conductivity testing.",
        link: "/blog/eddy-current-testing"
    },
    {
        icon: Eye,
        name: "Visual Testing (VT)",
        description: "Direct visual and remote inspection with borescopes and drones.",
        link: "/blog/visual-testing"
    }
];

const industries = [
    "Oil & Gas Pipelines",
    "Petrochemical Refineries",
    "Power Generation Plants",
    "Aerospace Components",
    "Offshore Platforms",
    "Storage Tanks",
    "Pressure Vessels",
    "Structural Steel"
];

export default function HoustonServices() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Non-Destructive Testing Inspection Services",
        "provider": {
            "@type": "LocalBusiness",
            "name": "Atlantis NDT - Houston",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Houston",
                "addressRegion": "TX",
                "addressCountry": "US"
            },
            "telephone": "+1-832-868-6670"
        },
        "areaServed": {
            "@type": "City",
            "name": "Houston",
            "containedInPlace": {
                "@type": "State",
                "name": "Texas"
            }
        },
        "description": "Professional NDT inspection services in Houston, Texas. ASNT Level III certified technicians for oil & gas, petrochemical, and industrial applications."
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />

            <SEOHead
                title="NDT Inspection Services Houston Texas | ASNT Level III Certified"
                description="Expert NDT inspection services in Houston, TX. ASNT Level III certified technicians for oil & gas, petrochemical, aerospace. UT, RT, MT, PT, ET, VT testing. Get a free quote today."
                keywords="NDT services Houston, NDT inspection Houston TX, ultrasonic testing Houston, radiographic testing Texas, oil gas NDT Houston, ASNT Level III Houston, pipeline inspection Houston"
                canonical="https://atlantisndt.com/ndt-services-houston"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24">
                <div className="container mx-auto max-w-6xl px-6 py-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-blue-200 mb-4">
                            <MapPin className="w-5 h-5" />
                            <span>Houston, Texas • Serving the Gulf Coast Region</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            NDT Inspection Services in Houston, Texas
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">
                            ASNT Level III certified NDT professionals serving Houston's oil & gas,
                            petrochemical, and industrial sectors. 24/7 emergency inspection available.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                to="/contact"
                                className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center"
                            >
                                Get Free Quote
                            </Link>
                            <a
                                href="tel:+18328686670"
                                className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center"
                            >
                                <Phone className="w-5 h-5" />
                                +1-832-868-6670
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Houston Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <Building2 className="w-6 h-6 text-[#004aad]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Houston Office</h3>
                                <p className="text-slate-600">Local presence serving the energy capital of the world</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <Clock className="w-6 h-6 text-[#004aad]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">24/7 Emergency</h3>
                                <p className="text-slate-600">Round-the-clock availability for urgent inspections</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-[#004aad]" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg mb-2">ASNT Level III</h3>
                                <p className="text-slate-600">Certified technicians across all NDT methods</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">NDT Methods Available in Houston</h2>
                    <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                        Complete range of non-destructive testing services for your inspection needs
                    </p>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition group">
                                    <CardHeader>
                                        <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                                            <service.icon className="w-6 h-6 text-[#004aad]" />
                                        </div>
                                        <CardTitle className="text-lg">{service.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                                        <Link
                                            to={service.link}
                                            className="inline-flex items-center gap-1 text-[#004aad] font-medium text-sm hover:underline"
                                        >
                                            Learn More <ArrowRight className="w-4 h-4" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Section */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-4">Industries We Serve in Houston</h2>
                    <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
                        Specialized NDT expertise for Houston's key industrial sectors
                    </p>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-slate-800 p-4 rounded-lg text-center"
                            >
                                <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-2" />
                                <span className="text-sm">{industry}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-[#004aad] to-blue-600">
                <div className="container mx-auto max-w-4xl px-6 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Contact our Houston team for a free consultation and quote
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/contact"
                            className="inline-block bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition"
                        >
                            Request Quote
                        </Link>
                        <Link
                            to="/consulting-usa"
                            className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
                        >
                            View Consulting Services
                        </Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
