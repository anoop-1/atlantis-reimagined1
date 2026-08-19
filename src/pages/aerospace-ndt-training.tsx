import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, GraduationCap, Plane, Factory, Gauge, Clock, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";
const courses = [
    { name: "Ultrasonic Testing (UT)", levels: "Level I, II, III", duration: "40-80 hours", focus: "Composite inspection, bonding" },
    { name: "Radiographic Testing (RT)", levels: "Level I, II, III", duration: "40-80 hours", focus: "Weld and casting inspection" },
    { name: "Eddy Current Testing (ET)", levels: "Level I, II, III", duration: "40-80 hours", focus: "Crack detection, conductivity" },
    { name: "Liquid Penetrant Testing (PT)", levels: "Level I, II, III", duration: "16-24 hours", focus: "Surface crack detection" },
    { name: "Visual Testing (VT)", levels: "Level I, II, III", duration: "24-40 hours", focus: "Surface condition assessment" }
];

const benefits = [
    "NAS 410 / EN 4179 aerospace-specific curriculum",
    "Hands-on training with actual aircraft specimens",
    "Certification recognized by Boeing, Airbus, major MROs",
    "Expert instructors with 20+ years aerospace experience",
    "Composite inspection techniques for modern aircraft",
    "Career placement assistance in aerospace sector"
];

export default function AerospaceNDTTraining() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Aerospace NDT Training",
        "description": "Specialized NDT training for aerospace industry. NAS 410 / EN 4179 certification for UT, ET, PT methods.",
        "provider": { "@type": "Organization", "name": "Atlantis NDT" }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Aerospace NDT Training | NAS 410 Certification | Aircraft Inspection | Atlantis NDT"
                description="Specialized NDT training for aerospace professionals. NAS 410 / EN 4179 certification. UT, ET, PT courses for aircraft, engine, and composite. Enroll now!"
                keywords="aerospace NDT training, NAS 410 certification, aircraft NDT, composite inspection training, aerospace UT training, aviation NDT courses"
                canonical="https://atlantisndt.com/aerospace-ndt-training"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white pt-28 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-blue-400 mb-4">
                            <Plane className="w-5 h-5" />
                            <span>Industry-Specific Training</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Aerospace NDT Training</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mb-8">
                            Specialized NDT certification training designed for aerospace industry professionals.
                            Master inspection techniques for aircraft structures, engine components, and composite materials.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition text-center">Enroll Now</Link>
                            <Link to="/training" className="inline-flex items-center gap-2 border-2 border-slate-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition justify-center">View All Training</Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><Plane className="w-10 h-10 text-blue-600 mx-auto mb-2" /><div className="text-3xl font-bold text-blue-600 mb-2">NAS 410</div><div className="text-slate-600">Compliant Program</div></div>
                        <div><Users className="w-10 h-10 text-blue-600 mx-auto mb-2" /><div className="text-3xl font-bold text-blue-600 mb-2">3,000+</div><div className="text-slate-600">Aerospace Pros Trained</div></div>
                        <div><Gauge className="w-10 h-10 text-blue-600 mx-auto mb-2" /><div className="text-3xl font-bold text-blue-600 mb-2">95%</div><div className="text-slate-600">Pass Rate</div></div>
                        <div><Award className="w-10 h-10 text-blue-600 mx-auto mb-2" /><div className="text-3xl font-bold text-blue-600 mb-2">Nadcap</div><div className="text-slate-600">Recognized</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Courses for Aerospace</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <Card key={course.name} className="hover:shadow-lg transition border-l-4 border-l-blue-500">
                                <CardHeader><CardTitle className="text-lg">{course.name}</CardTitle></CardHeader>
                                <CardContent>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between"><span className="text-slate-500">Levels:</span><span className="font-medium">{course.levels}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Duration:</span><span className="font-medium">{course.duration}</span></div>
                                        <div className="flex justify-between"><span className="text-slate-500">Focus:</span><span className="font-medium">{course.focus}</span></div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Why Choose Aerospace Specialized Training?</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-800 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Aerospace NDT Career?</h2>
                    <p className="text-slate-300 mb-8 text-lg">Join our specialized training program and become certified for aerospace industry inspections.</p>
                    <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">Enroll Now</Link>
                </div>
            </section>
        <RelatedGuidesBlock links={[
              {
                    "title": "ASNT Certification Path",
                    "href": "/asnt-certification",
                    "description": "NAS 410 + SNT-TC-1A alignment",
                    "icon": "cert"
              },
              {
                    "title": "Aerospace Corporate Training",
                    "href": "/corporate-training/aerospace",
                    "description": "NADCAP AC7114-aligned programs",
                    "icon": "training"
              },
              {
                    "title": "Aerospace Quality Control ERP",
                    "href": "/erp/quality-management-for-ndt-companies",
                    "description": "Nadcap-ready QMS",
                    "icon": "erp"
              },
              {
                    "title": "ASNT Level III Consulting",
                    "href": "/consulting/asnt-level-iii-consulting-services",
                    "description": "Aerospace MRO audit-defence",
                    "icon": "consulting"
              },
              {
                    "title": "Digital Twin for Aerospace",
                    "href": "/digital-twins",
                    "description": "UT/PAUT 3D + NAS 410 traceability",
                    "icon": "dt"
              },
              {
                    "title": "Eddy Current Testing Guide",
                    "href": "/blog/eddy-current-testing-complete-guide",
                    "description": "ET method deep-dive",
                    "icon": "blog"
              }
        ]} />

        <TrainingEnquiryCTA />
      <ContactDetails />
        </div>
    );
}
