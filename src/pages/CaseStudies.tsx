import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Factory, Droplets, Plane, Ship, Gauge, TrendingUp, Award } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ContactDetails from '@/components/ContactDetails';
import { Navigation } from '@/components/Navigation';

export default function CaseStudies() {
    const caseStudies = [
        {
            id: 1,
            title: "Offshore Platform Integrity Assessment - UAE",
            client: "Major Middle East Oil & Gas Operator",
            industry: "Oil & Gas",
            location: "Abu Dhabi, UAE",
            year: "2025",
            icon: Droplets,
            challenge: "Aging offshore platform with 25+ years of service required comprehensive structural integrity assessment before license renewal. Client needed to identify corrosion hotspots and remaining life estimates for critical pressure vessels.",
            solution: "Deployed advanced PAUT and TOFD inspection teams for full coverage of platform structural members. Implemented Digital Twin technology for real-time defect mapping and trending analysis across 150+ inspection points.",
            results: [
                "Identified 23 critical corrosion zones requiring immediate repair",
                "Extended platform operational license by 10 years",
                "Reduced inspection time by 40% using Digital Twin integration",
                "Saved client $2.5M in potential unplanned shutdown costs"
            ],
            methods: ["PAUT", "TOFD", "UT Thickness", "Digital Twin"],
            testimonial: {
                quote: "Atlantis NDT's Digital Twin approach transformed how we visualize and manage our asset integrity data. The 3D corrosion mapping was invaluable for our turnaround planning.",
                author: "Senior Integrity Engineer",
                company: "Major Middle East Operator"
            }
        },
        {
            id: 2,
            title: "Refinery Turnaround Support - Houston",
            client: "Fortune 500 Petrochemical Company",
            industry: "Petrochemical",
            location: "Houston, Texas",
            year: "2025",
            icon: Factory,
            challenge: "Tight 21-day turnaround window for inspecting 400+ welds across multiple process units. Previous contractor had fallen behind schedule, putting the restart date at risk.",
            solution: "Mobilized 15 ASNT Level II/III certified technicians within 48 hours. Implemented parallel inspection streams using RT, PAUT, and MT methods. Provided real-time reporting via cloud-based dashboard.",
            results: [
                "Completed 100% of scope 3 days ahead of schedule",
                "Zero safety incidents across 2,100 man-hours",
                "Detected 12 critical weld defects requiring repair",
                "Enabled on-time refinery restart worth $8M/day"
            ],
            methods: ["RT", "PAUT", "MT", "VT"],
            testimonial: {
                quote: "When our original contractor couldn't deliver, Atlantis stepped up and exceeded expectations. Their Level III oversight and rapid mobilization saved our turnaround.",
                author: "Turnaround Manager",
                company: "Fortune 500 Petrochemical"
            }
        },
        {
            id: 3,
            title: "Aerospace Manufacturing QA Program - India",
            client: "Tier 1 Aerospace Supplier",
            industry: "Aerospace",
            location: "Bangalore, India",
            year: "2024",
            icon: Plane,
            challenge: "New manufacturing facility needed Level II/III certified NDT staff and compliant procedures to meet NAS410 requirements for Boeing and Airbus supply contracts.",
            solution: "Designed and implemented complete NDT program including written practices, procedures, and training curriculum. Trained and certified 45 technicians across UT, PT, MT, and RT methods.",
            results: [
                "Achieved NAS410 compliance within 6 months",
                "Certified 45 technicians to Level II",
                "Developed 12 method-specific procedures",
                "Enabled $50M annual aerospace contract revenue"
            ],
            methods: ["UT", "PT", "MT", "RT", "Training"],
            testimonial: {
                quote: "Atlantis NDT built our entire inspection capability from ground up. Their Level III consultants' expertise in aerospace requirements was exceptional.",
                author: "Quality Director",
                company: "Aerospace Manufacturing Company"
            }
        },
        {
            id: 4,
            title: "Pipeline Corrosion Mapping - Saudi Arabia",
            client: "National Oil Company",
            industry: "Oil & Gas",
            location: "Eastern Province, Saudi Arabia",
            year: "2025",
            icon: Gauge,
            challenge: "150km of aging crude oil pipeline required comprehensive corrosion assessment. Traditional inspection methods were too slow and disruptive to operations.",
            solution: "Deployed guided wave testing (GWT) for rapid screening combined with detailed PAUT mapping at identified anomaly locations. Integrated all data into Digital Twin platform for lifecycle management.",
            results: [
                "Screened 150km pipeline in 45 days",
                "Identified 67 areas requiring detailed inspection",
                "Prioritized 8 critical repair locations",
                "Established baseline for 5-year integrity plan"
            ],
            methods: ["GWT", "PAUT", "UT", "Digital Twin"],
            testimonial: {
                quote: "The combination of guided wave screening and detailed PAUT follow-up gave us unprecedented visibility into our pipeline condition without operational disruption.",
                author: "Pipeline Integrity Manager",
                company: "National Oil Company"
            }
        },
        {
            id: 5,
            title: "FPSO Hull Inspection - Singapore",
            client: "Offshore FPSO Operator",
            industry: "Marine/Offshore",
            location: "Singapore Shipyard",
            year: "2024",
            icon: Ship,
            challenge: "Class renewal survey for 15-year-old FPSO required comprehensive hull thickness measurement and structural assessment within limited dry dock window.",
            solution: "Coordinated 20-person inspection team across multiple hull zones. Utilized advanced UT mapping with automated reporting and real-time data transfer to client's integrity management system.",
            results: [
                "Completed 5,000+ thickness readings in 14 days",
                "Achieved Class Society approval on first submission",
                "Identified coating breakdown areas for repair planning",
                "Extended FPSO operational life by 8 years"
            ],
            methods: ["UT Thickness", "VT", "MPI", "Coating Assessment"],
            testimonial: {
                quote: "Atlantis NDT's maritime expertise and ability to interface with classification societies made our class renewal survey seamless.",
                author: "Marine Superintendent",
                company: "FPSO Operator"
            }
        }
    ];

    // Structured data for case studies
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "name": "NDT Case Studies & Success Stories",
                "description": "Real-world NDT inspection success stories from oil & gas, aerospace, marine, and manufacturing industries.",
                "url": "https://atlantisndt.com/case-studies",
                "mainEntity": {
                    "@type": "ItemList",
                    "itemListElement": caseStudies.map((cs, idx) => ({
                        "@type": "ListItem",
                        "position": idx + 1,
                        "item": {
                            "@type": "Article",
                            "headline": cs.title,
                            "description": cs.challenge,
                            "author": { "@type": "Organization", "name": "Atlantis NDT" }
                        }
                    }))
                }
            },
            {
                "@type": "Organization",
                "@id": "https://atlantisndt.com/#organization",
                "name": "Atlantis NDT",
                "url": "https://atlantisndt.com"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/5 pt-20">
            <Navigation />
            <SEOHead
                title="NDT Case Studies | Oil Gas Aerospace Success Stories"
                description="Real NDT inspection success stories from oil & gas, aerospace, and marine industries. See how Atlantis NDT solved complex inspection challenges worldwide."
                keywords="NDT case studies, inspection success stories, oil gas NDT projects, aerospace NDT examples, pipeline inspection case study, PAUT inspection results, Digital Twin NDT"
                canonical="https://atlantisndt.com/case-studies"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            NDT <span className="gradient-text">Case Studies</span>
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Real-world success stories demonstrating how Atlantis NDT delivers exceptional
                            inspection results across oil & gas, aerospace, marine, and manufacturing industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 bg-primary/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "500+", label: "Projects Completed" },
                            { value: "50+", label: "Certified Experts" },
                            { value: "15+", label: "Countries Served" },
                            { value: "99.8%", label: "Client Satisfaction" }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-muted-foreground">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Studies Grid */}
            <section className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="space-y-16">
                        {caseStudies.map((cs, idx) => (
                            <motion.div
                                key={cs.id}
                                initial={{ y: 30, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                            >
                                <Card className="overflow-hidden border-0 shadow-xl">
                                    <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5 pb-6">
                                        <div className="flex items-start justify-between flex-wrap gap-4">
                                            <div className="flex items-center gap-4">
                                                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                                                    <cs.icon className="w-7 h-7 text-primary" />
                                                </div>
                                                <div>
                                                    <CardTitle className="text-xl md:text-2xl mb-1">{cs.title}</CardTitle>
                                                    <p className="text-muted-foreground">{cs.location} • {cs.year}</p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {cs.methods.map((method) => (
                                                    <span key={method} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full font-medium">
                                                        {method}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6 md:p-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                                                    Challenge
                                                </h3>
                                                <p className="text-muted-foreground mb-6">{cs.challenge}</p>

                                                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                                    Solution
                                                </h3>
                                                <p className="text-muted-foreground">{cs.solution}</p>
                                            </div>

                                            <div>
                                                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                                                    <TrendingUp className="w-5 h-5 text-green-500" />
                                                    Results
                                                </h3>
                                                <ul className="space-y-3 mb-6">
                                                    {cs.results.map((result, ridx) => (
                                                        <li key={ridx} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                            <span className="text-muted-foreground">{result}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Testimonial */}
                                                <div className="bg-primary/5 rounded-xl p-5 border-l-4 border-primary">
                                                    <p className="text-muted-foreground italic mb-3">"{cs.testimonial.quote}"</p>
                                                    <p className="font-medium text-sm">
                                                        — {cs.testimonial.author}, {cs.testimonial.company}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <Award className="w-16 h-16 mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Be Our Next Success Story?
                        </h2>
                        <p className="text-xl mb-8 opacity-90">
                            Contact our team to discuss how we can solve your NDT inspection challenges.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                                <Link to="/contact">Request Consultation</Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                                <Link to="/consulting">View Our Services</Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
