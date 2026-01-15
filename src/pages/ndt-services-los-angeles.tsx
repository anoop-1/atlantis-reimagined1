import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Phone, Award, Shield, Clock, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
    "Ultrasonic Testing (UT, PAUT, TOFD)",
    "Radiographic Testing (RT, DR, CR)",
    "Magnetic Particle Testing (MT)",
    "Liquid Penetrant Testing (PT)",
    "Eddy Current Testing (ET)",
    "Visual Testing (VT, RVI)"
];

const industries = [
    "Aerospace & Aviation (FAA, NAS410)",
    "Oil & Gas Refineries",
    "Petrochemical Plants",
    "Power Generation",
    "Manufacturing & Fabrication",
    "Pipeline & Transmission"
];

export default function NDTServicesLosAngeles() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Atlantis NDT - Los Angeles",
        "description": "ASNT Level III NDT consulting, inspection, and training services in Los Angeles and Southern California.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Los Angeles",
            "addressRegion": "CA",
            "addressCountry": "US"
        },
        "areaServed": ["Los Angeles", "Orange County", "San Diego", "Southern California"],
        "telephone": "+1-832-868-6670",
        "url": "https://atlantisndt.com/ndt-services-los-angeles"
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Services Los Angeles CA | ASNT Level III Consulting | Aerospace NDT | Atlantis"
                description="Expert NDT services in Los Angeles & SoCal. Aerospace NDT, ASNT Level III consulting, UT, RT, MT, PT inspection. FAA & NAS410 compliant. Get free quote today!"
                keywords="NDT services Los Angeles, NDT Los Angeles CA, aerospace NDT California, ASNT Level III Los Angeles, ultrasonic testing LA, radiographic testing California"
                canonical="https://atlantisndt.com/ndt-services-los-angeles"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-blue-700 to-blue-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-blue-200 mb-4">
                            <MapPin className="w-5 h-5" />
                            <span>Los Angeles, California • Serving Southern California</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            NDT Services in Los Angeles
                        </h1>
                        <p className="text-xl text-blue-100 max-w-3xl mb-8">
                            ASNT Level III certified NDT consulting and inspection services for aerospace,
                            oil & gas, and manufacturing industries throughout Southern California.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">
                                Get Free Quote
                            </Link>
                            <Link to="/training-usa" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">
                                View Training Programs
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">50+</div><div className="text-slate-600">Level III Experts</div></div>
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">1000+</div><div className="text-slate-600">Projects Completed</div></div>
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">100%</div><div className="text-slate-600">FAA Compliant</div></div>
                        <div><div className="text-4xl font-bold text-blue-700 mb-2">24/7</div><div className="text-slate-600">Emergency Response</div></div>
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Services We Offer in Los Angeles</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="w-6 h-6 text-blue-700" />NDT Methods</h3>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Shield className="w-6 h-6 text-blue-700" />Industries Served</h3>
                            <ul className="space-y-3">
                                {industries.map((industry) => (
                                    <li key={industry} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        <span>{industry}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Atlantis NDT in Los Angeles?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center"><CardHeader><Clock className="w-8 h-8 text-blue-700 mx-auto mb-2" /><CardTitle>Fast Response</CardTitle></CardHeader><CardContent><p className="text-slate-600">24-48 hour mobilization for urgent inspections</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><Award className="w-8 h-8 text-blue-700 mx-auto mb-2" /><CardTitle>Aerospace Expertise</CardTitle></CardHeader><CardContent><p className="text-slate-600">NAS410, FAA, and Nadcap compliant services</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><Shield className="w-8 h-8 text-blue-700 mx-auto mb-2" /><CardTitle>ASNT Level III</CardTitle></CardHeader><CardContent><p className="text-slate-600">Certified experts for all NDT methods</p></CardContent></Card>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Need NDT Services in Los Angeles?</h2>
                    <p className="text-blue-100 mb-8 text-lg">Contact our California team for a free consultation and quote.</p>
                    <Link to="/contact" className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">
                        Request Free Quote
                    </Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
