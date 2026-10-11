import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import { ServiceContextBlock } from "@/components/InspectionL3Content";
import OwnerGuideArticle, { ownerGuide, ownerGuideFaqs } from "@/components/OwnerGuideArticle";
import { ownerMetaFor } from "@/components/OwnerLinkParagraph";

// 2026-10-12 owner-links release: this guide owns "ndt inspection cost". It stays on the §18
// quote model: billing units and cost drivers by method, no Atlantis prices and no market
// figures. Body copy comes from src/data/owner-guides-2026-10.json (same file the crawler
// HTML is built from); title and H1 from src/data/owner-links-2026-10.mjs.
const PATH = "/blog/ndt-inspection-cost-2026-by-method-pricing-matrix";
const OM = ownerMetaFor(PATH);
const GUIDE = ownerGuide(PATH);
const TITLE = OM?.title ?? "NDT Inspection Cost by Method: What Drives the Quote";
const H1 = OM?.h1 ?? TITLE;
const DESCRIPTION = "What actually drives inspection cost by method: mobilisation, access, coverage rate, technician level and reporting, and how to compare scopes fairly.";

export default function NDTInspectionCost2026() {
    const faqs = ownerGuideFaqs(PATH);
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": H1,
                "description": DESCRIPTION,
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-05-17",
                "dateModified": GUIDE?.updated ?? "2026-10-12"
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
                title={TITLE}
                description={DESCRIPTION}
                keywords="ndt inspection cost, ndt testing cost, ndt cost by method, ultrasonic testing cost, radiographic testing cost, PAUT cost, NDT day rate, NDT RFP"
                canonical="https://atlantisndt.com/blog/ndt-inspection-cost-2026-by-method-pricing-matrix"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-slate-800 to-blue-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-blue-200 mb-4">Cost Guide • Updated October 2026</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{H1}</h1>
                        <p className="text-xl text-blue-100 mb-8">{GUIDE?.lede}</p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto max-w-4xl px-6">
                <QuickAnswerBox question="How much does NDT inspection cost?" answer="NDT inspection cost depends on method (day-rate, per-joint, or per-metre billing), region, crew composition, and site access — not a single number. UT, MT, and PT typically price lower than PAUT, RT, or automated crawler work; offshore and turnaround premiums add further. Request a scoped quote against your asset list and code requirements." />
            </div>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title={H1} description="What each NDT method is billed by, what moves the rate, and how to compare quotes on equal terms." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <OwnerGuideArticle path={PATH} />

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-blue-700 to-slate-800 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Need a quote you can compare?</h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">Send your equipment list, methods, governing code, volume estimate and schedule, and Atlantis will quote on that scope for your region.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact?service=inspection&subject=NDT%20inspection%20quote" className="inline-block px-8 py-3 bg-white text-blue-700 font-semibold rounded-lg hover:bg-gray-100 transition">Request a quote</Link>
                            <Link to="/inspection-services" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">Inspection services</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/blog/mfl-pipeline-inspection-cost-vendors-when-to-use-vs-ut" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">MFL Pipeline Inspection</h3>
                                <p className="text-slate-600 text-sm mt-2">Cost drivers, vendors and when to use MFL vs UT</p>
                            </Link>
                            <Link to="/blog/rt-vs-ut-complete-comparison" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">RT vs UT comparison</h3>
                                <p className="text-slate-600 text-sm mt-2">Radiographic vs ultrasonic testing, method by method</p>
                            </Link>
                            <Link to="/blog/phased-array-ultrasonic-testing-paut-guide" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-blue-600 transition">PAUT Complete Guide</h3>
                                <p className="text-slate-600 text-sm mt-2">Phased Array UT — equipment, procedure, applications</p>
                            </Link>
                        </div>
                    </section>
                </div>
                    <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>

            {/* 2026-10-09 sprint (Day 6): next step for this page's US query (same block in the crawler HTML). */}

            <div className="container mx-auto px-6 max-w-4xl"><ServiceContextBlock path="/blog/ndt-inspection-cost-2026-by-method-pricing-matrix" /></div>

            <ContactDetails />
        </div>
    );
}
