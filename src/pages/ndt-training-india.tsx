import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { GraduationCap, MapPin, Award, TrendingUp, Building2, DollarSign, Users, Briefcase, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const courses = [
    {
        method: "Ultrasonic Testing (UT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Basic physics & math",
        standard: "ASNT SNT-TC-1A / ISNT / ISO 9712"
    },
    {
        method: "Radiographic Testing (RT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Radiation safety awareness",
        standard: "ASNT SNT-TC-1A / ISNT / ISO 9712"
    },
    {
        method: "Magnetic Particle Testing (MT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "40 hrs",
        levelIII: "Advanced",
        prerequisites: "None",
        standard: "ASNT SNT-TC-1A / ISNT / ISO 9712"
    },
    {
        method: "Liquid Penetrant Testing (PT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "40 hrs",
        levelIII: "Advanced",
        prerequisites: "None",
        standard: "ASNT SNT-TC-1A / ISNT / ISO 9712"
    },
    {
        method: "Eddy Current Testing (ET)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Basic electricity knowledge",
        standard: "ASNT SNT-TC-1A / ISO 9712"
    },
    {
        method: "Visual Testing (VT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "24 hrs",
        levelIII: "Advanced",
        prerequisites: "Vision acuity check",
        standard: "ASNT SNT-TC-1A / ISNT"
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
    { name: "Hyderabad (Main Center)", link: "/training-india" },
    { name: "Mumbai", link: "/training-india" },
    { name: "Chennai", link: "/training-india" },
    { name: "Delhi NCR", link: "/training-india" },
    { name: "Bangalore", link: "/training-india" },
    { name: "Online/Virtual", link: "/ndt-training-online" }
];

const certifications = ["ASNT SNT-TC-1A", "ISO 9712", "ISNT Level I/II/III", "BARC Approved (nuclear sector)", "Employer-based programs"];

const whyIndia = [
    {
        icon: TrendingUp,
        title: "Refinery Expansion & Make in India",
        description: "India's refining capacity is expanding rapidly — HPCL, BPCL, and IOCL are all executing multi-billion dollar greenfield projects. The Make in India manufacturing push is creating parallel demand in power generation, defence, and automotive sectors."
    },
    {
        icon: Award,
        title: "Dual Certification: ASNT & ISNT",
        description: "Atlantis NDT India offers both ASNT SNT-TC-1A and ISNT (Indian Society for Non-Destructive Testing) certification, giving technicians access to both private sector international employers and Indian PSU (Public Sector Undertaking) positions."
    },
    {
        icon: DollarSign,
        title: "Strong Salary Growth",
        description: "NDT Level II technicians in India earn ₹35,000–70,000 per month. Senior Level III professionals in ONGC, BPCL, or HAL earn ₹90,000–1,50,000/month. Export-oriented oil & gas and aerospace positions command the highest salaries."
    },
    {
        icon: Building2,
        title: "Atlantis India Training Centers",
        description: "Our Hyderabad center is our primary India hub with full NDT lab, reference specimens, and ASNT-standard written practice library. We also facilitate training in Mumbai, Chennai, Delhi, and Bangalore on a scheduled basis."
    }
];

const industries = [
    {
        title: "Oil & Gas (ONGC, BPCL, IOCL, HPCL)",
        description: "India's national oil companies employ large NDT departments for refinery inspection, pipeline integrity, and upstream well inspection. ONGC alone maintains thousands of certified NDT technicians across its offshore and onshore operations.",
        demand: "Very High"
    },
    {
        title: "Power Generation (NTPC, BHEL, Nuclear)",
        description: "India's power sector — thermal, hydro, and nuclear — requires continuous NDT inspection of boilers, turbines, and pressure parts. BARC (nuclear) has its own certification requirements layered on top of ASNT standards.",
        demand: "High"
    },
    {
        title: "Aerospace & Defence (HAL, ISRO, DRDO)",
        description: "HAL (Hindustan Aeronautics Limited), ISRO, and DRDO employ NDT technicians for aircraft structural inspection, rocket component testing, and defence equipment quality control. NAS-410 and NADCAP compliance awareness is valued.",
        demand: "High"
    },
    {
        title: "Manufacturing & Heavy Industry",
        description: "Automobile manufacturers, steel plants, shipyards (at Vizag and Mumbai), and heavy engineering companies routinely employ NDT technicians for weld inspection, incoming material inspection, and in-process quality control.",
        demand: "Moderate"
    }
];

const certificationPath = [
    { step: 1, title: "Apply & Enrol", description: "Submit application with educational qualifications and experience record. Training coordinator confirms eligibility per ASNT or ISNT requirements and schedules your course start." },
    { step: 2, title: "Attend Training Course", description: "Complete classroom theory sessions and supervised practical sessions at Atlantis NDT's Hyderabad or partner city facility. ASNT SNT-TC-1A minimum training hours are strictly observed." },
    { step: 3, title: "Written Examination", description: "Sit the ASNT-format written examination covering NDT theory, equipment operation, and codes & standards. Minimum 70% pass mark is required to proceed." },
    { step: 4, title: "Practical Examination", description: "Demonstrate hands-on detection and characterisation of flaws in reference specimens. Results must meet the pass threshold defined in the written practice." },
    { step: 5, title: "Eye Examination", description: "Jaeger J-2 near vision acuity test required per ASNT SNT-TC-1A Section 8. ISNT likewise requires vision certification before certification is issued." },
    { step: 6, title: "Employer Certification", description: "Your employer or Atlantis NDT (as third-party certifier) issues the formal Level I or Level II certification letter aligned to ASNT SNT-TC-1A or ISNT Level I/II." },
    { step: 7, title: "Renewal", description: "ASNT SNT-TC-1A certification renews every 3 years for Level I/II and every 5 years for Level III. ISNT renewal requires evidence of continuing employment and professional development." }
];

const faqs = [
    {
        question: "Is ASNT certification valid in India?",
        answer: "Yes, ASNT certification is widely recognised in India across oil & gas, power generation, and manufacturing industries. International companies and export-oriented Indian companies generally prefer ASNT. We also offer ISNT and ISO 9712 certifications."
    },
    {
        question: "Which cities have training centers?",
        answer: "Our primary training facility is in Hyderabad, which serves as the main India hub with full lab equipment. We run scheduled batches in Mumbai, Chennai, Delhi NCR, and Bangalore. Online training is also available nationwide."
    },
    {
        question: "Do you offer EMI payment options?",
        answer: "Yes, we offer flexible payment options including EMI for individual students. Corporate invoicing with NET 30/60 terms is available for companies sending multiple trainees. Contact our India office for current fee structures."
    },
    {
        question: "ISNT vs ASNT — which certification is better for PSU jobs in India?",
        answer: "For Indian PSU (Public Sector Undertaking) jobs at ONGC, BPCL, IOCL, BHEL, and similar organisations, ISNT certification is typically specified in job postings and tender documents. For private sector, international contractors, and export-oriented roles, ASNT SNT-TC-1A is preferred. Atlantis NDT recommends obtaining both where budget allows. We offer combined ASNT + ISNT packages."
    },
    {
        question: "Is BARC certification needed for nuclear sector NDT work in India?",
        answer: "BARC (Bhabha Atomic Research Centre) certification is mandatory for NDT work within nuclear power plants and NPCIL facilities. It is a separate qualification that builds on ASNT or ISNT Level II certification. Atlantis NDT can advise on the BARC qualification pathway after completing our standard certification courses."
    },
    {
        question: "Where is the Hyderabad training center located?",
        answer: "Our Hyderabad NDT training center is located in the Uppal/Nacharam industrial area, with good access from both the old city and Cyberabad. The full address and directions are provided upon enrolment confirmation. We are near major bus routes and can assist with accommodation referrals."
    },
    {
        question: "What industries in India hire the most NDT technicians?",
        answer: "Oil & gas (ONGC, BPCL, IOCL, HPCL and contractors) is the largest employer segment. Power generation (NTPC, thermal plants, nuclear) is the second-largest. Aerospace and defence (HAL, ISRO, DRDO) is growing rapidly. Manufacturing and heavy engineering (steel, shipbuilding, automotive) provide steady demand, particularly in Maharashtra, Tamil Nadu, and Gujarat."
    },
    {
        question: "Can I take NDT training online from India?",
        answer: "Yes, Atlantis NDT offers online theory training accessible from anywhere in India. The theoretical component can be completed online, however the practical examination must be completed at an approved centre. Our Hyderabad centre handles practical assessments for online theory students. Contact us to plan your blended learning pathway."
    }
];

export default function NDTTrainingIndia() {
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
                "name": "NDT Training India",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "sameAs": "https://atlantisndt.com" },
                "description": "ASNT SNT-TC-1A and ISNT NDT certification training in India. Level I, II, III for UT, MT, PT, RT, ET, VT. Hyderabad, Mumbai, Chennai, Delhi, Bangalore.",
                "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": "onsite",
                    "inLanguage": "en",
                    "location": { "@type": "Place", "name": "Hyderabad, India" }
                },
                "educationalCredentialAwarded": "ASNT SNT-TC-1A Certification / ISNT Certification"
            },
            faqSchema
        ]
    };

    return (
        <div className="min-h-screen pt-20">
            <Navigation />
            <SEOHead
                title="NDT Training India | ASNT & ISNT Certification Hyderabad | Atlantis NDT"
                description="NDT training in India: ASNT SNT-TC-1A and ISNT Level I, II, III courses in Hyderabad, Mumbai, Chennai, Delhi. UT, MT, PT, RT, ET, VT. 95% pass rate. Enrol today."
                keywords="NDT training India, NDT certification Mumbai, ASNT training Chennai, NDT courses Delhi, NDT training Bangalore, ISNT certification, NDT training Hyderabad, NDT courses India, oil gas NDT training India, ONGC NDT certification, NDT BARC nuclear India"
                canonical="https://atlantisndt.com/ndt-training-india"
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
                            NDT Training in <span className="gradient-text">India</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            ASNT SNT-TC-1A, ISO 9712, and ISNT certification training across India. Hyderabad, Mumbai, Chennai, Delhi NCR, and Bangalore. Level I, II, and III for all major NDT methods.
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
                        <div><div className="text-4xl font-bold text-primary mb-2">6</div><div className="text-muted-foreground">India Locations</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">ASNT/ISNT</div><div className="text-muted-foreground">Certified</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">10K+</div><div className="text-muted-foreground">Trained</div></div>
                    </div>
                </div>
            </section>

            {/* Courses Table */}
            <section className="py-20">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">NDT Courses Available in India</h2>
                        <p className="text-muted-foreground">All courses aligned to ASNT SNT-TC-1A and ISNT minimum training hours. Contact us for current pricing and corporate rates.</p>
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
                    <p className="text-xs text-muted-foreground mt-4">Level III training is advanced and requires prior Level II certification. Duration varies by method. Ask us about combined ASNT + ISNT packages.</p>
                </div>
            </section>

            {/* Why Train in India */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Why Train in India?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">India's NDT market is one of Asia's fastest growing, driven by petrochemical expansion and the government's manufacturing push.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {whyIndia.map((item, index) => (
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
                        <h2 className="text-3xl font-bold mb-4">Industry Applications in India</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">NDT technicians trained in India find employment across these major sectors.</p>
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

            {/* Certification Path */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Your Certification Path</h2>
                        <p className="text-muted-foreground">From application to certified NDT technician — the complete ASNT SNT-TC-1A or ISNT process in India.</p>
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
                        <h2 className="text-3xl font-bold mb-4">Salary & Career Outlook — India NDT</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">NDT is a well-compensated technical career in India with strong PSU and private sector opportunities across the country.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level I</CardTitle>
                                    <div className="text-3xl font-bold text-primary">₹20,000–35,000</div>
                                    <p className="text-muted-foreground text-sm">per month</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Entry-level role assisting Level II inspectors. Common entry point at inspection agencies and PSU contractor companies. Higher in oil & gas sector.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level II</CardTitle>
                                    <div className="text-3xl font-bold text-primary">₹35,000–70,000</div>
                                    <p className="text-muted-foreground text-sm">per month</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Independent inspector, most common NDT role in India. ONGC and BPCL positions top this range. International contractor roles (Gulf-based) significantly higher.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level III</CardTitle>
                                    <div className="text-3xl font-bold text-primary">₹90,000–1,50,000</div>
                                    <p className="text-muted-foreground text-sm">per month</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Senior technical authority — writes procedures, qualifies methods, leads NDT programs. High demand at BHEL, L&T, HAL, and major inspection companies.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-6">
                        <h3 className="font-bold mb-3">Career Demand Outlook</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            India's NDT job market is growing at approximately 12% per year driven by refinery expansions, the nuclear power program (10 new reactors planned), defence manufacturing under Aatmanirbhar Bharat, and the infrastructure push (railways, metro systems, bridges). Hyderabad, Mumbai, Chennai, and Vizag are the largest NDT employment hubs. Gulf-based NDT opportunities for Indian technicians remain a strong career pathway, with UAE and Saudi Arabia the most common destinations.
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
                        <Link to="/consulting/ndt-consulting-mumbai" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Consulting Mumbai</div>
                            <div className="text-xs text-muted-foreground mt-1">Level III consulting services</div>
                        </Link>
                        <Link to="/consulting/ndt-consulting-bangalore" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Consulting Bangalore</div>
                            <div className="text-xs text-muted-foreground mt-1">Aerospace & manufacturing focus</div>
                        </Link>
                        <Link to="/training-india" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">India Training Hub</div>
                            <div className="text-xs text-muted-foreground mt-1">Full India program overview</div>
                        </Link>
                        <Link to="/ndt-training-online" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Online NDT Training</div>
                            <div className="text-xs text-muted-foreground mt-1">Train from anywhere in India</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Start Your NDT Training in India</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Enrol today or contact us for corporate training quotes. Flexible payment options available.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg">Enrol Now</Button>
                        </Link>
                        <Link to="/training-india">
                            <Button variant="outline" size="lg">View India Programs</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
