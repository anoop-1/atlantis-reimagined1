import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, TrendingUp, DollarSign, GraduationCap, ArrowRight, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const certificationLevels = [
    { level: "Level I", role: "Technician", description: "Performs tests under Level II/III supervision. Follows procedures, records data.", salary: "$45,000 - $60,000" },
    { level: "Level II", role: "Senior Technician", description: "Sets up equipment, interprets results, writes reports. Supervises Level I.", salary: "$60,000 - $85,000" },
    { level: "Level III", role: "Expert/Manager", description: "Develops procedures, trains personnel, manages programs. Highest technical authority.", salary: "$85,000 - $150,000+" }
];

const ndtMethods = [
    { method: "Ultrasonic Testing (UT)", demand: "Very High", description: "Most in-demand method. PAUT/TOFD specialists earn premium." },
    { method: "Radiographic Testing (RT)", demand: "High", description: "Essential for weld inspection. DR/CR experience valued." },
    { method: "Magnetic Particle Testing (MT)", demand: "High", description: "Surface crack detection. Often combined with PT." },
    { method: "Liquid Penetrant Testing (PT)", demand: "Medium-High", description: "Surface defect detection. Good entry point." },
    { method: "Eddy Current Testing (ET)", demand: "High", description: "Aerospace and tube inspection. Growing demand." },
    { method: "Visual Testing (VT)", demand: "Medium", description: "Foundation for all other methods. CWI valued." }
];

const careerPaths = [
    { title: "Field Technician", years: "0-3 years", description: "Hands-on inspection work, travel to job sites" },
    { title: "Senior Technician", years: "3-7 years", description: "Lead inspections, train juniors, report writing" },
    { title: "Level III / Consultant", years: "7-15 years", description: "Procedure development, program management, consulting" },
    { title: "NDT Manager", years: "10+ years", description: "Department leadership, business development, strategic planning" }
];

const industries = [
    { name: "Oil & Gas", growth: "+15%", salary: "Highest paying" },
    { name: "Aerospace", growth: "+12%", salary: "Good benefits" },
    { name: "Power Generation", growth: "+10%", salary: "Stable demand" },
    { name: "Manufacturing", growth: "+8%", salary: "Entry-level friendly" }
];

const faqs = [
    { question: "What education is required for NDT careers?", answer: "A high school diploma is minimum. Some employers prefer associate degrees or technical training. Most learning occurs through on-the-job training and certification courses." },
    { question: "How long does it take to get certified?", answer: "Level I: 40-80 hours training + experience. Level II: Additional 80-160 hours + more experience. Level III: Typically 4+ years total experience plus professional exam." },
    { question: "Is NDT a good career in 2026?", answer: "Yes! The NDT industry is growing due to aging infrastructure, safety regulations, and digital transformation. Skilled technicians are in high demand globally." },
    { question: "What's the job outlook for NDT?", answer: "The Bureau of Labor Statistics projects 7% growth for quality control inspectors. NDT specialists often exceed this due to specialized skills and infrastructure needs." }
];

export default function ASNTCareerGuide() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "NDT Career Guide 2026: ASNT Certification, Salaries & Job Outlook",
                "description": "Complete guide to NDT careers. ASNT certification levels, salary expectations, job outlook, and career paths in non-destructive testing.",
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-01-15"
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="NDT Career Guide 2026 | ASNT Certification | NDT Salaries & Job Outlook | Atlantis"
                description="Complete NDT career guide. ASNT Level I II III certification, salary ranges $45K-$150K+, job outlook, best industries. Start your NDT career today!"
                keywords="NDT career, ASNT certification, NDT salary, NDT jobs, NDT technician career, Level III NDT, non-destructive testing career, NDT training"
                canonical="https://atlantisndt.com/blog/ndt-career-guide"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-[#004aad] to-blue-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-blue-200 mb-4">Career Guide • January 2026 • 12 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Career Guide 2026: Your Path to Success</h1>
                        <p className="text-xl text-blue-100 mb-8">Everything you need to know about building a career in non-destructive testing. Certifications, salaries, job outlook, and how to get started.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="NDT Career Guide 2026: Your Path to Success" description="Complete guide to NDT careers. ASNT certification, salaries, and job outlook." />
                </div>
            </div>

            {/* Quick Stats */}
            <section className="py-12 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">$85K</div><div className="text-slate-600">Avg. Level II Salary</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">7%</div><div className="text-slate-600">Job Growth Rate</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">50K+</div><div className="text-slate-600">Open Positions (US)</div></div>
                        <div><div className="text-4xl font-bold text-[#004aad] mb-2">6</div><div className="text-slate-600">Major NDT Methods</div></div>
                    </div>
                </div>
            </section>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">Why Choose an NDT Career?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Non-Destructive Testing (NDT) is a rewarding career with excellent job security, competitive
                            salaries, and opportunities for global travel. As industries focus on safety, aging infrastructure,
                            and sustainability, demand for skilled NDT professionals continues to grow.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-green-50 p-4 rounded-lg text-center"><TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" /><div className="font-bold">High Demand</div><div className="text-sm text-slate-600">Growing industry</div></div>
                            <div className="bg-blue-50 p-4 rounded-lg text-center"><DollarSign className="w-8 h-8 text-blue-600 mx-auto mb-2" /><div className="font-bold">Good Pay</div><div className="text-sm text-slate-600">$45K - $150K+</div></div>
                            <div className="bg-purple-50 p-4 rounded-lg text-center"><Briefcase className="w-8 h-8 text-purple-600 mx-auto mb-2" /><div className="font-bold">Job Security</div><div className="text-sm text-slate-600">Essential services</div></div>
                        </div>
                    </section>

                    {/* Certification Levels */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">ASNT Certification Levels</h2>
                        <p className="text-slate-600 mb-6">ASNT SNT-TC-1A defines three certification levels. Each level has specific training, experience, and examination requirements.</p>
                        <div className="space-y-4">
                            {certificationLevels.map((level) => (
                                <Card key={level.level} className="border-l-4 border-l-[#004aad]">
                                    <CardHeader className="pb-2">
                                        <div className="flex justify-between items-center">
                                            <CardTitle className="text-xl">{level.level} - {level.role}</CardTitle>
                                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{level.salary}</span>
                                        </div>
                                    </CardHeader>
                                    <CardContent><p className="text-slate-600">{level.description}</p></CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* NDT Methods */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">NDT Methods & Demand</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-lg shadow-sm">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">Method</th>
                                        <th className="px-4 py-3 text-left font-semibold">Demand</th>
                                        <th className="px-4 py-3 text-left font-semibold">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {ndtMethods.map((item) => (
                                        <tr key={item.method} className="border-t">
                                            <td className="px-4 py-3 font-medium">{item.method}</td>
                                            <td className="px-4 py-3"><span className={`px-2 py-1 rounded text-xs font-medium ${item.demand === 'Very High' ? 'bg-red-100 text-red-800' : item.demand === 'High' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>{item.demand}</span></td>
                                            <td className="px-4 py-3 text-slate-600 text-sm">{item.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Career Path */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Typical Career Path</h2>
                        <div className="relative">
                            {careerPaths.map((path, index) => (
                                <div key={path.title} className="flex gap-4 mb-6">
                                    <div className="flex flex-col items-center">
                                        <div className="bg-[#004aad] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">{index + 1}</div>
                                        {index < careerPaths.length - 1 && <div className="w-0.5 h-full bg-slate-200 my-2"></div>}
                                    </div>
                                    <div className="bg-white p-4 rounded-lg shadow-sm flex-1">
                                        <div className="flex justify-between items-start"><h3 className="font-bold text-lg">{path.title}</h3><span className="text-sm text-slate-500">{path.years}</span></div>
                                        <p className="text-slate-600 text-sm mt-1">{path.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Industries */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Best Industries for NDT</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {industries.map((ind) => (
                                <div key={ind.name} className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center">
                                    <div><h3 className="font-bold">{ind.name}</h3><p className="text-sm text-slate-600">{ind.salary}</p></div>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{ind.growth}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                                    <p className="text-slate-600">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-[#004aad] to-blue-700 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Start Your NDT Career Today</h2>
                        <p className="text-blue-100 mb-6">Atlantis NDT offers ASNT certification training for all levels and methods.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/training" className="inline-block px-8 py-3 bg-white text-[#004aad] font-semibold rounded-lg hover:bg-gray-100 transition">View Training Courses</Link>
                            <Link to="/contact" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">Contact Us</Link>
                        </div>
                    </section>
                </div>
            </article>

            <ContactDetails />
        </div>
    );
}
