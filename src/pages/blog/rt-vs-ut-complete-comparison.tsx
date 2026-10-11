import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ErpDtCrossPromoBlock } from "@/components/ErpDtCrossPromoBlock";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import GetCertifiedCTA from "@/components/GetCertifiedCTA";
import OwnerGuideArticle, { ownerGuide, ownerGuideFaqs } from "@/components/OwnerGuideArticle";
import { ownerMetaFor } from "@/components/OwnerLinkParagraph";

// 2026-10-12 owner-links release: this guide owns "rt vs ut". Body copy comes from
// src/data/owner-guides-2026-10.json (same file the crawler HTML is built from); title and
// H1 from src/data/owner-links-2026-10.mjs. The older duplicates (/blog/ut-vs-rt-comparison,
// /ut-vs-rt-comparison, /blog/ut-vs-rt-complete-comparison-guide) 301 here.
const PATH = "/blog/rt-vs-ut-complete-comparison";
const OM = ownerMetaFor(PATH);
const GUIDE = ownerGuide(PATH);
const TITLE = OM?.title ?? "RT vs UT: Radiographic vs Ultrasonic Testing Compared";
const H1 = OM?.h1 ?? TITLE;
const DESCRIPTION = "RT vs UT compared: radiography reads porosity and slag, ultrasonics finds tight planar flaws and gives depth. Choose by wall thickness, flaw type and access.";

export default function RTvsUTCompleteComparison() {
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
                "datePublished": "2026-03-09",
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
                keywords="RT vs UT, radiographic vs ultrasonic testing, radiography vs ultrasonic testing, weld inspection method selection, PAUT in lieu of RT"
                canonical="https://atlantisndt.com/blog/rt-vs-ut-complete-comparison"
                structuredData={structuredData}
            />
            <Breadcrumbs />
            <QuickAnswerBox
                question="What is the difference between RT and UT?"
                answer="Radiography passes radiation through the weld and images what it absorbs, so it reads volume well — porosity, slag, incomplete penetration. Ultrasonics sends sound in and times the echoes, so it finds tight planar flaws radiography misses and reports depth. RT leaves a permanent image; UT gives position without one."
            />

            <GetCertifiedCTA cert="ASNT Level II/III" href="/asnt-certification" benefit="ASNT-certified inspector" />
            {/* Hero */}
            <section className="bg-gradient-to-br from-cyan-700 to-blue-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-cyan-200 mb-4">Technical Comparison • Updated October 2026</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">{H1}</h1>
                        <p className="text-xl text-cyan-100 mb-8">{GUIDE?.lede}</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title={H1} description="Radiography and ultrasonics compared on flaws found, access, safety, records and codes." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <OwnerGuideArticle path={PATH} />

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Need a weld examined or a procedure reviewed?</h2>
                        <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">Tell us the joint, the governing code and the access you have, and we will say which method to specify and quote the examination or the procedure review.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact?service=inspection&subject=RT%20or%20UT%20scope" className="inline-block px-8 py-3 bg-white text-cyan-600 font-semibold rounded-lg hover:bg-gray-100 transition">Request a quote</Link>
                            <Link to="/training" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">NDT Training</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related NDT Methods</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/ultrasonic-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-cyan-600 transition">Ultrasonic Testing Guide</h3>
                                <p className="text-slate-600 text-sm mt-2">Comprehensive UT principles, PAUT, TOFD, and weld inspection</p>
                            </Link>
                            <Link to="/radiographic-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-cyan-600 transition">Radiographic Testing</h3>
                                <p className="text-slate-600 text-sm mt-2">RT methods, film interpretation, and defect acceptance</p>
                            </Link>
                            <Link to="/magnetic-particle-testing" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-cyan-600 transition">Magnetic Particle Testing</h3>
                                <p className="text-slate-600 text-sm mt-2">Surface defect detection on ferromagnetic materials</p>
                            </Link>
                        </div>
                    </section>

                    {/* 2026-05-23: ERP/DT cross-promo block — SEO link-equity distribution */}
                    <ErpDtCrossPromoBlock
                        relevantApp="Quality Management"
                        relevantAppHref="/erp/quality-management-for-ndt-companies"
                    />
                </div>
                    <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>
        <RelatedGuidesBlock links={[
              {
                    "title": "RT or UT on a weld: decide by flaw orientation",
                    "href": "/blog/rt-vs-ut-weld-inspection",
                    "description": "Code clauses and flaw orientation",
                    "icon": "blog"
              },
              {
                    "title": "Visual Testing (VT) Guide",
                    "href": "/blog/visual-testing",
                    "description": "ASNT Level II VT prep + procedures",
                    "icon": "blog"
              },
              {
                    "title": "Digital Twin Platform",
                    "href": "/digital-twins",
                    "description": "3D UT/PAUT overlay on asset model",
                    "icon": "dt"
              },
              {
                    "title": "Quality Management ERP",
                    "href": "/erp/quality-management-for-ndt-companies",
                    "description": "ISO 9001 / 17020 / 17025 ready",
                    "icon": "erp"
              },
              {
                    "title": "ASNT Certification Path",
                    "href": "/asnt-certification",
                    "description": "Level I/II/III breakdown",
                    "icon": "cert"
              },
              {
                    "title": "ASNT Level III Consulting",
                    "href": "/consulting/ndt-consulting-level-iii",
                    "description": "Code interpretation + procedure development",
                    "icon": "consulting"
              }
        ]} />

        <ContactDetails />
        </div>
    );
}
