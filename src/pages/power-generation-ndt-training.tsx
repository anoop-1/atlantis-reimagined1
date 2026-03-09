import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, Zap, Factory, Gauge, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const courses = [
    { name: "Ultrasonic Testing (UT)", levels: "Level I, II, III", duration: "40-80 hours", focus: "Turbine blade, boiler tube inspection" },
    { name: "Radiographic Testing (RT)", levels: "Level I, II, III", duration: "40-80 hours", focus: "Weld inspection, casting" },
    { name: "Magnetic Particle Testing (MT)", levels: "Level I, II, III", duration: "24-40 hours", focus: "Crack detection in steel components" },
    { name: "Eddy Current Testing (ET)", levels: "Level I, II, III", duration: "40-80 hours", focus: "Heat exchanger tube inspection" },
    { name: "Visual Testing (VT)", levels: "Level I, II, III", duration: "24-40 hours", focus: "Boiler and pressure vessel inspection" }
];

const benefits = [
    "Power plant specific case studies (nuclear, thermal, hydro)",
    "Hands-on training with turbine and boiler specimens",
    "Certification recognized by major power utilities",
    "Expert instructors with power generation experience",
    "API and ASME code training included",
    "Career placement assistance in power sector"
];

export default function PowerGenerationNDTTraining() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": "Power Generation NDT Training",
        "description": "Specialized NDT training for power generation professionals. ASNT certification for UT, RT, MT, ET methods.",
        "provider": { "@type": "Organization", "name": "Atlantis NDT" }
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="Power Generation NDT Training | ASNT Certification for Power Plants | Atlantis NDT"
                description="Specialized NDT training for power generation professionals. ASNT certification. UT, RT, MT, ET courses for turbines, boilers, heat exchangers. Enroll now!"
                keywords="power generation NDT training, power plant NDT, turbine inspection training, boiler NDT certification, heat exchanger inspection course"
                canonical="https://atlantisndt.com/power-generation-ndt-training"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white pt-28 pb-16">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-emerald-400 mb-4">
                            <Zap className="w-5 h-5" />
                            <span>Industry-Specific Training</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">Power Generation NDT Training</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mb-8">
                            Specialized NDT certification training for power generation professionals.
                            Master inspection techniques for turbines, boilers, heat exchangers, and pressure vessels.
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
                        <div><Zap className="w-10 h-10 text-emerald-600 mx-auto mb-2" /><div className="text-3xl font-bold text-emerald-600 mb-2">15+</div><div className="text-slate-600">Years Power Experience</div></div>
                        <div><Users className="w-10 h-10 text-emerald-600 mx-auto mb-2" /><div className="text-3xl font-bold text-emerald-600 mb-2">2,000+</div><div className="text-slate-600">Power Pros Trained</div></div>
                        <div><Gauge className="w-10 h-10 text-emerald-600 mx-auto mb-2" /><div className="text-3xl font-bold text-emerald-600 mb-2">95%</div><div className="text-slate-600">Pass Rate</div></div>
                        <div><Award className="w-10 h-10 text-emerald-600 mx-auto mb-2" /><div className="text-3xl font-bold text-emerald-600 mb-2">SNT-TC-1A</div><div className="text-slate-600">Compliant Training</div></div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">NDT Courses for Power Generation</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <Card key={course.name} className="hover:shadow-lg transition border-l-4 border-l-emerald-500">
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
                    <h2 className="text-3xl font-bold text-center mb-8">Why Choose Power Generation Training?</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {benefits.map((benefit) => (
                            <div key={benefit} className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gradient-to-r from-slate-700 to-slate-800 text-white text-center">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold mb-4">Ready to Advance Your Power Generation NDT Career?</h2>
                    <p className="text-slate-300 mb-8 text-lg">Join our specialized training program and become certified for power industry inspections.</p>
                    <Link to="/contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">Enroll Now</Link>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
