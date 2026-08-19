import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { RelatedCityProducts } from "@/components/RelatedProducts";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { CheckCircle, Award, Clock, GraduationCap, MapPin, TrendingUp, Building2, DollarSign, Users, Briefcase, Plane } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";

const courses = [
    {
        method: "Ultrasonic Testing (UT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Basic physics & math",
        standard: "ASNT SNT-TC-1A / CP-189",
        price: "Quote on request"
    },
    {
        method: "Radiographic Testing (RT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Radiation safety awareness",
        standard: "ASNT SNT-TC-1A / CP-189",
        price: "Quote on request"
    },
    {
        method: "Magnetic Particle Testing (MT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "40 hrs",
        levelIII: "Advanced",
        prerequisites: "None",
        standard: "ASNT SNT-TC-1A / CP-189",
        price: "Quote on request"
    },
    {
        method: "Liquid Penetrant Testing (PT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "24 hrs",
        levelIII: "Advanced",
        prerequisites: "None",
        standard: "ASNT SNT-TC-1A / CP-189",
        price: "Quote on request"
    },
    {
        method: "Eddy Current Testing (ET)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "Advanced",
        prerequisites: "Basic electricity concepts",
        standard: "ASNT SNT-TC-1A / CP-189",
        price: "Quote on request"
    },
    {
        method: "Visual Testing (VT)",
        levels: ["Level I", "Level II", "Level III"],
        levelI: "16 hrs",
        levelII: "24 hrs",
        levelIII: "Advanced",
        prerequisites: "Vision acuity check",
        standard: "ASNT SNT-TC-1A / CP-189",
        price: "Quote on request"
    },
    {
        method: "Phased Array UT (PAUT)",
        levels: ["Level I", "Level II"],
        levelI: "40 hrs",
        levelII: "80 hrs",
        levelIII: "N/A",
        prerequisites: "UT Level II recommended",
        standard: "ASNT SNT-TC-1A",
        price: "Quote on request"
    },
    {
        method: "Time of Flight Diffraction (TOFD)",
        levels: ["Level I", "Level II"],
        levelI: "40 hrs",
        levelII: "40 hrs",
        levelIII: "N/A",
        prerequisites: "UT Level II recommended",
        standard: "ASNT SNT-TC-1A",
        price: "Quote on request"
    }
];

const locations = [
    { name: "Online/Virtual (Nationwide)", link: "/ndt-training-online" },
    { name: "On-site / In-person (Nationwide)", link: "/ndt-training-near-me" }
];

const certifications = ["ASNT SNT-TC-1A", "ASNT CP-189", "NAS-410 (Aerospace)", "Employer-based programs"];

const whyUSA = [
    {
        icon: DollarSign,
        title: "Highest NDT Salaries Globally",
        description: "The USA offers the highest NDT compensation of any country. Level II technicians earn $30–55/hour. Level III professionals earn $80,000–120,000/year. Gulf Coast oil & gas and aerospace in Seattle and Los Angeles offer the highest rates."
    },
    {
        icon: TrendingUp,
        title: "Infrastructure Bill & Energy Investment",
        description: "The US Infrastructure Investment and Jobs Act allocates over $1.2 trillion across bridges, pipelines, and energy infrastructure — all requiring NDT inspection. Combined with the IRA's energy provisions, demand for NDT technicians is at a decade high."
    },
    {
        icon: Award,
        title: "ASNT — The Gold Standard",
        description: "ASNT (American Society for Nondestructive Testing) is headquartered in Columbus, OH and sets the global standard for NDT certification. ASNT SNT-TC-1A and CP-189 are recognised by every major US operator, contractor, and aerospace manufacturer."
    },
    {
        icon: Building2,
        title: "Online + On-Site Delivery Nationwide",
        description: "Theory and exam preparation delivered online, with hands-on practical training available on-site — either at your facility or a partner facility near you, anywhere in the USA. Flexible monthly scheduling for working professionals."
    }
];

const industries = [
    {
        title: "Oil & Gas — Gulf Coast",
        description: "Texas, Louisiana, and the Gulf of Mexico represent the highest concentration of NDT employment in the USA. Refineries, petrochemical plants, offshore platforms, and pipeline infrastructure all require continuous NDT inspection. Houston is the global centre of this market.",
        demand: "Very High"
    },
    {
        title: "Aerospace — Seattle, LA, Dallas",
        description: "Boeing, Lockheed Martin, Northrop Grumman, Raytheon, and hundreds of tier-1 and tier-2 aerospace suppliers employ NDT technicians under NAS-410 (formerly MIL-HDBK-410). NADCAP-accredited programs require ongoing NDT personnel qualification.",
        demand: "Very High"
    },
    {
        title: "Power Generation",
        description: "Nuclear (NRC-qualified inspectors), gas turbine, coal, and renewable energy facilities employ NDT technicians for outage inspections, turbine blade inspection, boiler tube testing, and heat exchanger ECT. ASME qualified outage NDT is a specialty market.",
        demand: "High"
    },
    {
        title: "Infrastructure & Construction",
        description: "Bridge inspection, building weld inspection, rail inspection (FRA requirements), and pipeline inspection for new construction are growing segments driven by the federal infrastructure bill and domestic manufacturing reshoring initiatives.",
        demand: "High"
    }
];

const certificationPath = [
    { step: 1, title: "Apply & Confirm Eligibility", description: "Submit application with educational background and NDT work experience record. ASNT SNT-TC-1A requires a specific number of hours of NDT work experience before certification can be issued — training hours and work experience are separate requirements." },
    { step: 2, title: "Attend Training Course", description: "Complete classroom theory online, with hands-on practical sessions delivered on-site — at a partner facility near you or your employer's site. ASNT SNT-TC-1A minimum training hours are strictly observed. All course materials, reference specimens, and practice questions are included in your course fee." },
    { step: 3, title: "Written Examination", description: "Sit the ASNT-format written examination covering NDT theory, equipment principles, and applicable codes & standards. Minimum 70% pass mark required. Covers ASME Section V, API codes, and method-specific standards." },
    { step: 4, title: "Practical Examination", description: "Demonstrate hands-on detection and characterisation of flaws in reference test specimens. Must meet written practice acceptance criteria. Conducted on-site at a partner facility or at an approved employer facility." },
    { step: 5, title: "Eye Examination", description: "Jaeger J-2 near vision and Snellen 20/30 distance vision test per ASNT SNT-TC-1A Section 8. Required before any certification is issued. Colour vision tests may be required for some methods. Valid optician or doctor certificate needed." },
    { step: 6, title: "Employer Certification", description: "Your employer issues the formal Level I or Level II certification letter aligned to their written practice per SNT-TC-1A. For CP-189, ASNT directly issues the certification after the candidate passes the ASNT examination. Atlantis NDT can act as third-party certifier." },
    { step: 7, title: "Renewal", description: "ASNT SNT-TC-1A certification renews every 3 years (Level I & II) or 5 years (Level III). CP-189 and ACCP have their own renewal schedules. Continuing education credits and re-examination may be required depending on your employer's written practice." }
];

const faqs = [
    {
        question: "What certifications does Atlantis offer?",
        answer: "We offer ASNT SNT-TC-1A, ASNT CP-189, and employer-based certifications for all major NDT methods at Levels I, II, and III. We also offer NAS-410 aligned training preparation for aerospace applications. Ask us about ASNT Level III consulting for your written practice development."
    },
    {
        question: "Is online training available?",
        answer: "Yes! We offer live virtual training with the same curriculum as our in-person courses. Online training covers the full theory component. Practical examinations require in-person attendance at a partner facility or an approved employer location. Online training works well for candidates who want to pre-study before attending a practical block."
    },
    {
        question: "What's included in the training?",
        answer: "All courses include: course materials and study guides, access to reference specimens during practicals, ASNT-format practice examinations, instructor Q&A sessions, and certification of training completion. Practical examination fees are included. Certification issuance is employer-dependent for SNT-TC-1A courses."
    },
    {
        question: "Do you offer corporate training?",
        answer: "Absolutely. We provide customised on-site training for companies throughout the USA. Corporate training can be delivered at your facility anywhere in the country. Group discounts apply for 5+ candidates. We can also develop written practices for your company's SNT-TC-1A compliance — ask about our complete NDT program development package."
    },
    {
        question: "Is ASNT CP-189 better than SNT-TC-1A?",
        answer: "They serve different purposes. SNT-TC-1A is employer-based: the employer writes the practice and certifies their own technicians. CP-189 is a third-party central certification administered by ASNT directly. CP-189 (and the associated ACCP program) provides portability — your certification follows you between employers. Many US operators accept both. Aerospace may prefer CP-189 or NAS-410. We recommend discussing with your target employer which standard is required."
    },
    {
        question: "What is the NDT Level II written examination like?",
        answer: "The Level II written examination follows ASNT guidelines and typically consists of 40–80 multiple-choice questions covering NDT theory (principles of the method), practical knowledge (equipment setup, calibration, scanning technique), and codes & standards (ASME Section V, API codes, AWS D1.1 for structural, etc.). Minimum pass mark is 70%. Our course includes full-length practice examinations in the same format."
    },
    {
        question: "What is the training schedule?",
        answer: "Cohorts run monthly nationwide for the most popular methods (UT, MT, PT). RT, ET, and PAUT classes run quarterly. The schedule is published on our website and updated monthly. Corporate on-site classes can be scheduled at any time with sufficient notice. Contact us for the next available date for your specific method and level."
    },
    {
        question: "Can I get Level III certification without having Level II?",
        answer: "Per ASNT SNT-TC-1A, Level III candidates must have prior Level II certification plus additional work experience hours in the method. The ASNT CP-189 and ACCP pathways have similar prerequisites — you cannot skip Level II. However, combined Level I/II or accelerated pathways are available for candidates with significant prior NDT experience. Contact us to discuss your background and the fastest legitimate route to Level III."
    }
];

export default function NDTTrainingUSA() {
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
                "name": "NDT Training Courses USA",
                "provider": { "@type": "Organization", "name": "Atlantis NDT", "sameAs": "https://atlantisndt.com" },
                "description": "ASNT SNT-TC-1A and CP-189 NDT certification training delivered online and on-site nationwide across the USA. Level I, II, III for UT, MT, PT, RT, ET, VT. Aerospace NAS-410.",
                "hasCourseInstance": {
                    "@type": "CourseInstance",
                    "courseMode": ["onsite", "online"],
                    "inLanguage": "en"
                },
                "educationalCredentialAwarded": "ASNT SNT-TC-1A Certification / ASNT CP-189 Certification"
            },
            faqSchema
        ]
    };

    return (
        <div className="min-h-screen pt-20">
            <Navigation />
            <SEOHead
                title="NDT Training USA | ASNT Certification | SNT-TC-1A & CP-189 | Atlantis NDT"
                description="NDT training in the USA: ASNT SNT-TC-1A and CP-189 Level I, II, III certification. Online + on-site delivery nationwide. UT, MT, PT, RT, ET, VT. Aerospace NAS-410. 95%."
                keywords="NDT training USA, ASNT certification, NDT courses USA, ultrasonic testing training, NDT certification Houston, NDT training online, ASNT CP-189, NDT training Texas, NAS-410 training, aerospace NDT training USA, NDT Level II Houston, NDT Level III USA"
                canonical="https://atlantisndt.com/training-usa"
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
                            NDT Training Courses in <span className="gradient-text">USA</span>
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                            ASNT SNT-TC-1A and CP-189 certification training, delivered online and on-site nationwide. Level I, II, and III for all major NDT methods. Aerospace NAS-410 preparation available. 95% pass rate.
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
                        <div><div className="text-4xl font-bold text-primary mb-2">8+</div><div className="text-muted-foreground">NDT Methods</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">50</div><div className="text-muted-foreground">States Served</div></div>
                        <div><div className="text-4xl font-bold text-primary mb-2">50+</div><div className="text-muted-foreground">Expert Instructors</div></div>
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
                        <h2 className="text-3xl font-bold mb-4">NDT Courses Available in the USA</h2>
                        <p className="text-muted-foreground"><strong>Affordable. Accessible. Fully Customizable.</strong> All courses include materials, practical training, and examination. Pricing varies by region and scope — contact us for a tailored quote.</p>
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
                                    <th className="text-left p-3 font-semibold border border-border">Pricing</th>
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
                                        <td className="p-3 border border-border text-primary font-medium">{course.price}</td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-xs text-muted-foreground mt-4">Pricing varies by region, course scope and group size. Corporate, online and Level III engagements — contact us for a tailored quote.</p>
                </div>
            </section>

            {/* Why Train in USA */}
            <section className="py-20 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Why Train in the USA?</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">The USA is the birthplace of ASNT and offers the highest NDT salaries and most diverse career opportunities of any country.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {whyUSA.map((item, index) => (
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
                        <h2 className="text-3xl font-bold mb-4">Industry Applications in the USA</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">NDT technicians trained in the USA find high-paying employment across these major industries — all experiencing strong demand growth.</p>
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
                        <p className="text-muted-foreground">From application to ASNT certified NDT technician — the complete SNT-TC-1A process in the USA.</p>
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
                        <h2 className="text-3xl font-bold mb-4">Salary & Career Outlook — USA NDT</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">The USA offers the highest NDT salaries globally. Infrastructure investment and energy sector demand are driving a shortage of qualified technicians.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6 mb-10">
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level I</CardTitle>
                                    <div className="text-3xl font-bold text-primary">$20–30/hr</div>
                                    <p className="text-muted-foreground text-sm">$41,600–$62,400/year</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Entry-level technician working under Level II supervision. Oil & gas rates typically higher than manufacturing or construction. Per diem travel compensation common for field roles.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level II</CardTitle>
                                    <div className="text-3xl font-bold text-primary">$30–55/hr</div>
                                    <p className="text-muted-foreground text-sm">$62,400–$114,400/year</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Independent inspector — most in-demand US NDT role. Houston oil & gas tops the range. PAUT and TOFD specialists command premium rates. Overtime common during turnarounds.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                        <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
                                <CardHeader>
                                    <CardTitle className="text-lg">NDT Level III</CardTitle>
                                    <div className="text-3xl font-bold text-primary">$80,000–$120,000</div>
                                    <p className="text-muted-foreground text-sm">per year + benefits</p>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-muted-foreground">Senior technical authority. Writes written practices, qualifies procedures, oversees programs. Consulting Level III roles can reach $150,000+/year. Very high demand at inspection companies.</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                    <div className="bg-secondary/30 rounded-lg p-6">
                        <h3 className="font-bold mb-3">Career Demand Outlook</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            The US Bureau of Labor Statistics projects steady growth for NDT technicians through 2030. The sector faces a skills shortage as experienced technicians retire and infrastructure investment increases demand. Gulf Coast refinery maintenance, aerospace manufacturing recovery post-COVID, and the LNG export terminal buildout (Freeport, Sabine Pass, Corpus Christi) are the strongest near-term demand drivers. The Inflation Reduction Act's energy provisions are also creating new demand for pipeline and wind/solar structure inspection. Houston remains the single best US city for NDT employment density and compensation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Locations Section */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Training Locations</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {locations.map((loc) => (
                            <Link
                                key={loc.name}
                                to={loc.link}
                                className="flex items-center gap-2 bg-background px-6 py-3 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition cursor-pointer"
                            >
                                <MapPin className="w-4 h-4 text-primary" /><span className="font-medium">{loc.name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8 text-center">
                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            <div>
                                <h3 className="font-bold mb-2">Certifications Offered</h3>
                                <ul className="space-y-2">
                                    {certifications.map((cert) => (
                                        <li key={cert} className="flex items-center gap-3">
                                            <Award className="w-4 h-4 text-primary" />
                                            <span className="text-sm">{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-2">Corporate Training</h3>
                                <p className="text-sm text-muted-foreground">On-site corporate training available anywhere in the continental USA. Bring our instructors to your facility. Group rates for 5+ candidates. Full written practice development available as add-on service.</p>
                                <Link to="/contact" className="inline-block mt-3">
                                    <Button variant="outline" size="sm">Request Corporate Quote</Button>
                                </Link>
                            </div>
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
                        <Link to="/consulting/ndt-consulting-houston" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">NDT Consulting Houston</div>
                            <div className="text-xs text-muted-foreground mt-1">Level III procedure development</div>
                        </Link>
                        <Link to="/training-usa" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">USA Training Hub</div>
                            <div className="text-xs text-muted-foreground mt-1">Full USA program overview</div>
                        </Link>
                        <Link to="/asnt-certification" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Award className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">ASNT Certification Guide</div>
                            <div className="text-xs text-muted-foreground mt-1">SNT-TC-1A vs CP-189 explained</div>
                        </Link>
                        <Link to="/ndt-training-online" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
                            <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                            <div className="font-medium text-sm">Online NDT Training</div>
                            <div className="text-xs text-muted-foreground mt-1">Train from anywhere in the USA</div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="container mx-auto max-w-4xl px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Start Your NDT Training?</h2>
                    <p className="text-muted-foreground mb-8 text-lg">Enrol in our next available cohort or request a custom corporate training quote. Classes run monthly.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <Button size="lg">Enrol Now</Button>
                        </Link>
                        <Link to="/training-usa">
                            <Button variant="outline" size="lg">View USA Programs</Button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-8 bg-white border-t border-slate-200">
                <div className="container mx-auto max-w-6xl px-6">
                    <RelatedCityProducts currentProduct="training" citySlug="usa" city="USA" />
                </div>
            </section>

            <TrainingEnquiryCTA />
      <ContactDetails />
        </div>
    );
}
