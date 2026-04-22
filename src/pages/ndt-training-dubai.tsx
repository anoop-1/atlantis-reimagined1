import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { GraduationCap, MapPin, Award, CheckCircle, TrendingUp, Briefcase, Users, Building2, DollarSign, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
    {
        method: "Ultrasonic Testing (UT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Basic math & physics",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Radiographic Testing (RT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Radiation safety awareness",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Magnetic Particle Testing (MT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "40 hrs",
        levelIII: "Advanced",
        prerequisites: "None",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Liquid Penetrant Testing (PT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "40 hrs",
        levelIII: "Advanced",
        prerequisites: "None",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Eddy Current Testing (ET)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Basic electricity concepts",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Visual Testing (VT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "24 hrs",
        levelIII: "Advanced",
        prerequisites: "Vision acuity check",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Phased Array UT (PAUT)",
        levels: ["Level I", "Level II"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "N/A",
        prerequisites: "UT Level II recommended",
        standard: "ASNT SNT-TC-1A"
    },
    {
        method: "Time of Flight Diffraction (TOFD)",
        levels: ["Level I", "Level II"],
        levelI: "40 hrs",
        levelII: "40 hrs",
        levelIII: "N/A",
        prerequisites: "UT Level II recommended",
        standard: "ASNT SNT-TC-1A"
    }
];

const locations = [
    { name: "Dubai (Main Center)", link: "/training-me" },
    { name: "Abu Dhabi", link: "/training-me" },
    { name: "Sharjah", link: "/training-me" },
    { name: "Online/Virtual", link: "/ndt-training-online" }
];

const certifications = ["ASNT SNT-TC-1A", "ISO 9712", "PCN (for UK/EU recognition)", "CSWIP Preparation", "Employer-based programs"];

const whyDubai = [
    {
        icon: TrendingUp,
        title: "Booming Oil & Gas Market",
        description: "ADNOC's downstream expansion and ongoing GCC mega-projects create continuous demand for qualified NDT technicians. Abu Dhabi alone is investing over $150 billion in energy infrastructure through 2030."
    },
    {
        icon: Award,
        title: "Globally Recognised Certifications",
        description: "ASNT SNT-TC-1A, ISO 9712, and PCN certifications earned in UAE are recognised by ADNOC, ARAMCO contractors, and major international inspection companies operating across the Gulf."
    },
    {
        icon: DollarSign,
        title: "Tax-Free Salaries",
        description: "NDT Level II technicians in UAE earn AED 8,000–15,000 per month tax-free. Level III professionals command AED 18,000–30,000/month. No income tax means your take-home pay is your gross pay."
    },
    {
        icon: Building2,
        title: "Atlantis Local Presence",
        description: "Atlantis NDT has operated in the UAE since 2009. Our Dubai training center is fully equipped with reference specimens, portable UT/MT/PT equipment, and ASNT-compliant written practice templates."
    }
];

const industries = [
    {
        title: "Oil & Gas (Offshore & Onshore)",
        description: "ADNOC, ARAMCO contractors, and international oil companies operating in UAE and GCC require ASNT and ISO 9712 certified NDT technicians for pipeline, vessel, and platform inspection.",
        demand: "Very High"
    },
    {
        title: "Petrochemical & Refining",
        description: "Ruwais refinery complex, ADNOC Refining, and BOROUGE plants employ hundreds of NDT personnel for turnaround maintenance, weld inspection, and corrosion monitoring.",
        demand: "High"
    },
    {
        title: "Construction & Infrastructure",
        description: "Dubai's continuous construction boom — Expo 2020 legacy projects, urban rail, and skyscraper construction — demands weld inspection and structural NDT services.",
        demand: "High"
    },
    {
        title: "Shipbuilding & Marine",
        description: "Dubai Maritime City and Drydocks World require NDT technicians for hull inspection, weld testing, and ultrasonic thickness measurement on commercial and military vessels.",
        demand: "Moderate"
    }
];

const certificationPath = [
    { step: 1, title: "Apply & Enrol", description: "Submit application with ID and experience documentation. Training coordinator confirms eligibility and schedules your class start date." },
    { step: 2, title: "Attend Training Course", description: "Complete classroom theory (per ASNT SNT-TC-1A minimum hours) and supervised practical sessions with Atlantis NDT instructors." },
    { step: 3, title: "Written Examination", description: "Sit the ASNT-format written exam covering NDT theory, equipment principles, codes and standards. Minimum 70% pass mark required." },
    { step: 4, title: "Practical Examination", description: "Demonstrate hands-on proficiency on reference test specimens. Flaws must be correctly detected and reported per the relevant standard." },
    { step: 5, title: "Eye Examination", description: "Jaeger J-2 near vision and Snellen 20/30 distance vision test required per ASNT SNT-TC-1A Section 8 before certification is issued." },
    { step: 6, title: "Employer Certification", description: "Your employer (or Atlantis NDT as third-party certifier) issues the formal certification letter aligned to SNT-TC-1A or ISO 9712." },
    { step: 7, title: "Renewal", description: "ASNT SNT-TC-1A certifications require renewal every 3 years (Level I & II) or 5 years (Level III). Continuing education and re-examination may apply." }
];

const faqs = [
    {
        question: "Is ASNT certification recognised in UAE?",
        answer: "Yes, ASNT SNT-TC-1A is widely recognised across the UAE oil & gas industry by ADNOC, its subsidiaries, and the entire network of international contractors operating in the region. We also offer ISO 9712 and PCN certifications for broader international recognition."
    },
    {
        question: "Where are training centers located?",
        answer: "Our primary training center is in Dubai, with additional facilities in Abu Dhabi. We also offer on-site corporate training anywhere in the UAE and GCC region. Contact us for details on current class schedules."
    },
    {
        question: "What language is training conducted in?",
        answer: "Training is primarily conducted in English, which is the standard working language for NDT in the GCC oil & gas sector. We offer Arabic language support for theoretical content and can provide Arabic documentation where required."
    },
    {
        question: "CSWIP vs ASNT — which is better for UAE?",
        answer: "Both are widely accepted in UAE. ASNT SNT-TC-1A is the most common standard used by US-affiliated contractors and ADNOC downstream. CSWIP (PCN) is preferred by UK/European contractors and some offshore inspection companies. We recommend checking with your target employer. Atlantis NDT offers preparation for both."
    },
    {
        question: "Does Atlantis training meet Saudi Aramco SAEP-1112 requirements?",
        answer: "Our training content aligns with SNT-TC-1A requirements referenced by SAEP-1112. For direct Aramco contractor work in KSA, we recommend our dedicated Saudi Arabia training program which specifically addresses SAEP-1112 compliance documentation."
    },
    {
        question: "Do I need a UAE visa to attend training in Dubai?",
        answer: "International candidates must have a valid UAE visit visa or work visa to attend in-person training in Dubai. We can provide a training enrolment letter to support your visa application if needed. Alternatively, online training is available for overseas candidates."
    },
    {
        question: "What NDT jobs are available in UAE after certification?",
        answer: "Certified NDT technicians in UAE work in oil & gas (upstream and downstream), construction, shipbuilding, and aerospace maintenance. Common employers include ADNOC subsidiaries, Bureau Veritas, TUV Rheinland, Intertek, MISTRAS Group, and hundreds of smaller inspection companies throughout the GCC."
    },
    {
        question: "How long does NDT Level II certification take in Dubai?",
        answer: "From enrolment to certification, Level II typically takes 2–4 weeks depending on the method. UT Level II requires a minimum of 80 classroom and practical hours per SNT-TC-1A. MT and PT Level II can be completed in 1–2 weeks. Scheduling depends on class availability — contact us for the next available start date."
    }
];

export default function NDTTrainingDubai() {
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    };

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Course",
                "name": "NDT Training Dubai UAE",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "sameAs": "https://atlantisndt.com" },
                "description": "ASNT SNT-TC-1A and ISO 9712 NDT certification training in Dubai UAE. Level I, II, III for UT, MT, PT, RT, ET, VT. CSWIP preparation.",
                "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "onsite",
                    "inLanguage": "en",
                    "location": { "@type": "Place", "name": "Dubai, UAE" }
                },
                "educationalCredentialAwarded": "ASNT SNT-TC-1A Certification / ISO 9712 Certification"
            },
            faqSchema
        ]
    };

    return (
        <div className="min-h-screen pt-20">
            <Navigation />
            <SEOHead
                title="NDT Training Dubai UAE | ASNT & ISO 9712 Certification Courses | Atlantis NDT"
                description="ASNT SNT-TC-1A and ISO 9712 NDT training in Dubai UAE. Level I, II, III for UT, MT, PT, RT, ET, VT. CSWIP preparation. Tax-free career in UAE oil & gas."
                keywords="NDT training Dubai, NDT training UAE, NDT courses Dubai, ASNT training Dubai, ISO 9712 UAE, NDT certification Dubai, ndt training in uae, NDT Level II Dubai, NDT Level III UAE, ultrasonic testing training Dubai, eddy current training Dubai, NDT courses Abu Dhabi, NDT certification UAE, NDT training Sharjah, oil gas NDT training UAE, CSWIP training Dubai, ADNOC NDT training"
                canonical="https://atlantisndt.com/ndt-training-dubai"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero Section */}
            <motion.section
                className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-6">
                    <motion.div
                        className="max-w-4xl mx-auto text-center"
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <div className="flex items-center justify-center gap-2 text-primary mb-4">
                            <GraduationCap className="w-5 h-5" />
                            <span className="text-sm font-medium uppercase tracking-wide">Training & Certification</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            NDT Training in <span className="gradient-text">Dubai & UAE</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            ASNT SNT-TC-1A and ISO 9712 certification training in Dubai, Abu Dhabi, and throughout UAE. Level I, II, and III for all six NDT methods. ADNOC and Aramco contractor recognised.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact">
                                <Button size="lg" className="w-full sm:w-auto">Enrol Now</Button>
                            </Link>
                            <Link to="/training">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto">View All Courses</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Stats Section */}
            <section className="py-12 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-primary mb-2">95%</div><div className="text-muted-foreground">Pass Rate</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">3</div><div className="text-muted-foreground">UAE Locations</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">ASNT/ISO</div><div className="text-muted-foreground">Certified</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">15+</div><div className="text-muted-foreground">Years Experience</div></div>
                    </div>
                </div>
            </section>

            {/* Courses Section */}
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">NDT Courses Available in Dubai</h2>
                        <p className="text-muted-foreground">All courses aligned to ASNT SNT-TC-1A minimum training hours. Contact us for current scheduling and corporate rates.</p>
                    </motion.div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-primary/10">
                                    <th className="text-left p-3 font-semibold border border-border">NDT Method</th>
                                    <th className="text-left p-3 font-semibold border border-border">Levels</th>
                                    <th className="text-left p-3 font-semibold border border-border">Level I Hours</th>
                                    <th className="text-left p-3 font-semibold border border-border">Level II Hours</th>
                                    <th className="text-left p-3 font-semibold border border-border">Standard</th>
                                    <th className="text-left p-3 font-semibold border border-border">Prerequisites</th>
                                </tr>
                            </thead>
                            <tbody>
                                {courses.map((course, index) => (
                                    <motion.tr
                                        key={course.method}
                                        className={index % 2 === 0 ? "bg-background" : "bg-secondary/20"}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.04 }}
                                    >
                                        <td className="p-3 border border-border font-medium">{course.method}</td>
                                        <td className="p-3 border border-border">{course.levels.join(", ")}</td>
                                        <td className="p-3 border border-border">{course.levelI}</td>
                                        <td className="p-3 border border-border">{course.levelII}</td>
                                        <td className="p-3 border border-border text-xs">{course.standard}</td>
                                        <td className="p-3 border border-border text-muted-foreground text-xs">{course.prerequisites}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">Level III training is advanced and requires prior Level II certification. Duration varies by method. Contact us for full details.</p>
                </div>
            </section>

            {/* Why Train in Dubai */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Why Train in Dubai?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Dubai is the NDT training hub of the Gulf region — and for good reason.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {whyDubai.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                                    <CardHeader className="pb-2">
                                        <item.icon className="w-8 h-8 text-primary mb-2" />
                                        <CardTitle className="text-lg">{item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Applications */}
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Industry Applications in UAE</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">NDT technicians trained in Dubai find employment across these major UAE and GCC industries.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.title}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="text-base">{industry.title}</CardTitle>
                                            <span className={`text-xs px-2 py-1 rounded-full font-medium ${industry.demand === "Very High" ? "bg-green-100 text-green-800" : industry.demand === "High" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`}>
                                                {industry.demand} Demand
                                            </span>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certification Path Timeline */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Your Certification Path</h2>
                        <p className="text-muted-foreground">From application to certified NDT technician — here is the complete ASNT SNT-TC-1A process.</p>
                    </motion.div>
                    <div className="space-y-4">
                        {certificationPath.map((step, index) => (
                            <motion.div
                                key={step.step}
                                className="flex gap-4 items-start"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08 }}
                            >
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                                    {step.step}
                                </div>
                                <div className="bg-background p-4 rounded-lg shadow-sm flex-1">
                                    <h3 className="font-semibold mb-1">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Salary & Career Outlook */}
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Salary & Career Outlook — UAE NDT</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">NDT professionals in the UAE enjoy competitive tax-free compensation. Here are typical market rates for certified technicians in the Gulf.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level I</CardTitle>
                                    <div className="text-3xl font-bold text-primary">AED 5,000–8,000</div>
                                    <p className="text-muted-foreground text-sm">per month (tax-free)</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Entry-level technician assisting with inspections under Level II supervision. Includes accommodation allowance in most packages.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition border-primary/20">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level II</CardTitle>
                                    <div className="text-3xl font-bold text-primary">AED 8,000–15,000</div>
                                    <p className="text-muted-foreground text-sm">per month (tax-free)</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Independent inspection technician. Most common role in UAE oil & gas. Can supervise Level I personnel and write inspection reports.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level III</CardTitle>
                                    <div className="text-3xl font-bold text-primary">AED 18,000–30,000</div>
                                    <p className="text-muted-foreground text-sm">per month (tax-free)</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Senior technical authority. Writes written practices, qualifies procedures, oversees programs. High demand at ADNOC and major inspection companies.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-6">
                        <h3 className="font-bold mb-3">Career Demand Outlook</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            The UAE NDT job market remains strong driven by ADNOC's US$150 billion capital investment plan, ongoing NEOM supplier projects from Saudi Arabia spilling into UAE logistics, and the Dubai Industrial City expansion. Demand for PAUT and TOFD specialists is particularly high as operators transition from radiography to advanced ultrasonic methods. Atlantis NDT graduates have a 94% placement rate in GCC oil & gas within 6 months of certification.
                        </p>
                    </div>
                </div>
            </section>

            {/* Certifications & Locations */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Certifications Offered</h2>
                            <ul className="space-y-3">
                                {certifications.map((cert) => (
                                    <li key={cert} className="flex items-center gap-3">
                                        <Award className="w-5 h-5 text-primary" />
                                        <span>{cert}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Training Locations</h2>
                            <ul className="space-y-3">
                                {locations.map((loc) => (
                                    <li key={loc.name}>
                                        <Link to={loc.link} className="flex items-center gap-3 hover:text-primary transition">
                                            <MapPin className="w-5 h-5 text-primary" />
                                            <span>{loc.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20">
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.07 }}
                                className="bg-secondary/30 p-6 rounded-lg"
                            >
                                <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                <p className="text-muted-foreground">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Links */}
            <section className="py-12 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold text-center mb-8">Related Services & Resources</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Link to="/consulting/ndt-consulting-dubai" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Consulting Dubai</div>
                            <div className="text-xs text-muted-foreground mt-1">Level III consulting services</div>
                        </Link>
                        <Link to="/training-me" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Middle East Training</div>
                            <div className="text-xs text-muted-foreground mt-1">GCC-wide training programs</div>
                        </Link>
                        <Link to="/asnt-certification" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">ASNT Certification Guide</div>
                            <div className="text-xs text-muted-foreground mt-1">SNT-TC-1A explained</div>
                        </Link>
                        <Link to="/ndt-training-online" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Online NDT Training</div>
                            <div className="text-xs text-muted-foreground mt-1">Train from anywhere</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Start Your NDT Training in UAE</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Enrol today or contact us for corporate training quotes. Classes start monthly in Dubai.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg">Enrol Now</Button>
                        </Link>
                        <Link to="/training-me">
                            <Button variant="outline" size="lg">View Middle East Programs</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
