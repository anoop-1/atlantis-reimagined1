import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, MapPin, Award, Shield, Clock, Droplets } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = ["Ultrasonic Testing (UT, PAUT, TOFD)", "Radiographic Testing (RT, DR)", "Magnetic Particle Testing (MT)", "Liquid Penetrant Testing (PT)", "Eddy Current Testing (ET)", "Visual Testing (VT, RVI)"];
const industries = ["Oil & Gas Exploration", "Pipeline Integrity", "Refineries & Processing", "Mining & Minerals", "Power Generation", "Renewable Energy"];

export default function NDTServicesDenver() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Atlantis NDT - Denver",
        "description": "ASNT Level III NDT consulting and inspection services in Denver, Colorado for oil & gas and pipeline industries.",
        "address": { "@type": "PostalAddress", "addressLocality": "Denver", "addressRegion": "CO", "addressCountry": "US" },
        "areaServed": ["Denver", "Colorado Springs", "Boulder", "Colorado", "Rocky Mountain Region"],
        "telephone": "+1-832-868-6670"
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Services Denver CO | Oil & Gas Pipeline Inspection | ASNT Level III | Atlantis"
                description="Expert NDT services in Denver & Colorado. Oil & gas pipeline inspection, ASNT Level III consulting. UT, RT, MT, PT services. Rocky Mountain region coverage. Free quote!"
                keywords="NDT services Denver, NDT Denver Colorado, pipeline inspection Denver, oil gas NDT Colorado, ASNT Level III Denver, ultrasonic testing Colorado"
                canonical="https://atlantisndt.com/ndt-services-denver"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-2 text-emerald-200 mb-4"><MapPin className="w-5 h-5" /><span>Denver, Colorado • Rocky Mountain Region</span></div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Services in Denver, Colorado</h1>
                        <p className="text-xl text-emerald-100 max-w-3xl mb-8">ASNT Level III certified NDT consulting for oil & gas, pipeline, and energy industries across the Rocky Mountain region.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition text-center">Get Free Quote</Link>
                            <Link to="/consulting-usa" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View Consulting Services</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-emerald-700 mb-2">50+</div><div className="text-slate-600">Level III Experts</div></div>
                        <div><div className="text-4xl font-bold text-emerald-700 mb-2">500+</div><div className="text-slate-600">Pipeline Miles Inspected</div></div>
                        <div><div className="text-4xl font-bold text-emerald-700 mb-2">API</div><div className="text-slate-600">Certified Services</div></div>
                        <div><div className="text-4xl font-bold text-emerald-700 mb-2">24/7</div><div className="text-slate-600">Emergency Response</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Services We Offer in Denver</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div><h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Award className="w-6 h-6 text-emerald-700" />NDT Methods</h3><ul className="space-y-3">{services.map((s) => (<li key={s} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>{s}</span></li>))}</ul></div>
                        <div><h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Droplets className="w-6 h-6 text-emerald-700" />Industries Served</h3><ul className="space-y-3">{industries.map((i) => (<li key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" /><span>{i}</span></li>))}</ul></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Choose Atlantis NDT in Denver?</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center"><CardHeader><Clock className="w-8 h-8 text-emerald-700 mx-auto mb-2" /><CardTitle>Fast Mobilization</CardTitle></CardHeader><CardContent><p className="text-slate-600">24-48 hour response across Colorado</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><Droplets className="w-8 h-8 text-emerald-700 mx-auto mb-2" /><CardTitle>Pipeline Experts</CardTitle></CardHeader><CardContent><p className="text-slate-600">Specialized in transmission & gathering</p></CardContent></Card>
                        <Card className="text-center"><CardHeader><Shield className="w-8 h-8 text-emerald-700 mx-auto mb-2" /><CardTitle>API Compliant</CardTitle></CardHeader><CardContent><p className="text-slate-600">API 1104, API 570, API 653 certified</p></CardContent></Card>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-emerald-700 to-teal-700 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Need NDT Services in Denver?</h2>
                    <p className="text-emerald-100 mb-8 text-lg">Contact our Colorado team for pipeline and energy sector inspections.</p>
                    <Link to="/contact" className="inline-block bg-white text-emerald-700 px-8 py-3 rounded-lg font-semibold hover:bg-slate-100 transition">Request Free Quote</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
