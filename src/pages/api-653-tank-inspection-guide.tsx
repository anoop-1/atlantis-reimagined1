// /* INLINE_ANCHORS_INJECTED_v1 */
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { ErpDtCrossPromoBlock } from "@/components/ErpDtCrossPromoBlock";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, Clock, Award, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ClusterNav from "@/components/ClusterNav";

import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import QuickAnswerBox from "@/components/QuickAnswerBox";
import GetCertifiedCTA from "@/components/GetCertifiedCTA";
const breadcrumbSchema653TankGuide = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://atlantisndt.com/" },
        { "@type": "ListItem", "position": 2, "name": "Certification Guides", "item": "https://atlantisndt.com/asnt-certification" },
        { "@type": "ListItem", "position": 3, "name": "API 653 Certification", "item": "https://atlantisndt.com/api-653-certification" },
        { "@type": "ListItem", "position": 4, "name": "API 653 Tank Inspection Guide", "item": "https://atlantisndt.com/api-653-tank-inspection-guide" }
    ]
};

const inspectionFrequency = [
    { riskLevel: "High Risk", interval: "5 years or less", criteria: "Corrosion rate > 10 mpy, critical service, previous failures" },
    { riskLevel: "Medium Risk", interval: "5-10 years", criteria: "Moderate corrosion, non-critical service" },
    { riskLevel: "Low Risk", interval: "10-20 years", criteria: "Minimal corrosion, benign service, good history" }
];

const inspectionTypes = [
    { type: "External Inspection", description: "Visual examination of shell, foundation, appurtenances, insulation condition" },
    { type: "Internal Inspection", description: "Floor scanning, shell thickness, roof inspection, weld examination" },
    { type: "Ultrasonic Thickness", description: "Systematic UT scanning of floor, shell courses, roof plates" },
    { type: "Magnetic Flux Leakage", description: "Floor plate scanning for corrosion and pitting damage" },
    { type: "Vacuum Box Testing", description: "Weld integrity testing on floor-to-shell and lap welds" },
    { type: "Settlement Survey", description: "Foundation and shell settlement measurements" }
];

const commonDefects = [
    "Shell course corrosion (internal and external)",
    "Floor plate corrosion and pitting",
    "Weld cracking (shell-to-bottom, shell course seams)",
    "Roof plate corrosion and holes",
    "Settlement and foundation issues",
    "Appurtenance integrity (nozzles, manholes)"
];

const faqs = [
    { question: "What is API 653?", answer: "API 653 is the American Petroleum Institute standard for tank inspection, repair, alteration, and reconstruction. It applies to above-ground storage tanks built to API 650 or API 12C." },
    { question: "How often should tanks be inspected per API 653?", answer: "Inspection frequency depends on corrosion rates and risk. External inspections are typically every 5 years, internal inspections every 10 years, but Risk-Based Inspection (RBI) can extend or reduce intervals." },
    { question: "What qualifications are needed for API 653 inspectors?", answer: "Inspectors should be API 653 certified or work under an API 653 certified inspector. ASNT Level II certification in UT, MT, PT, and VT is typically required." },
    { question: "Can tanks be repaired without API 653 certification?", answer: "API 653 requires that alterations and repairs be authorized by an API 653 certified inspector. The inspector must approve the repair procedure and final inspection." }
];

export default function API653TankInspectionGuide() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "API 653 Tank Inspection: Complete Guide 2026",
                "description": "Comprehensive guide to API 653 above-ground storage tank inspection. Inspection intervals, NDT methods, common defects, and certification requirements.",
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-01-15",
                "dateModified": "2026-01-15"
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
                title="API 653 Tank Inspection — Complete Guide & Checklist 2026"
                description="API 653 tank inspection guide with intervals, RBI, FFS workflow + free downloadable checklist. ASNT Level III-led methodology. Updated 2026."
                keywords="API 653, API 653 inspection, API 653 certification, API 653 certified tank inspector, above ground storage tank inspection, tank NDT, API 653 2026, storage tank inspection intervals, API 653 training, RBI tank inspection, API 653 standard, tank floor inspection, MFL scanning, API 653 requirements"
                canonical="https://atlantisndt.com/blog/api-653-tank-inspection-guide"
                structuredData={structuredData}
            />
            <Breadcrumbs />
        <QuickAnswerBox question="What is an API 653 tank inspection?" answer="An API 653 inspection is a code-mandated in-service evaluation of aboveground welded storage tanks. It includes external visual + UT thickness surveys at intervals up to 5 years, internal inspections every 10–20 years (extended via risk-based inspection per API 581), and out-of-service repairs per API 653 Part 9. Performed by an API 653 Authorized Inspector for refineries, terminals, and chemical plants." bullets={["External: visual + UT shell readings — interval up to 5 years","Internal: bottom plate MFL + shell UT — interval extended via RBI","Repair: NBIC + ASME PCC-2 — signed by Authorized Inspector"]} />


      <GetCertifiedCTA cert="API 653" href="/api-653-certification" benefit="Authorized Tank Inspector" />
            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-700 to-orange-800 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-amber-200 mb-4">Guide • January 2026 • 15 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 653 Tank Inspection: Complete Guide</h1>
        {/* INLINE_PROOF_US_INJECTED_v1 */}
        <p className="my-4 rounded-md border-l-4 border-emerald-600 bg-emerald-50 p-3 text-sm">
          <strong>USA cohorts (Houston, Beaumont, Tulsa, Pasadena, Mobile):</strong> ASNT NDT Level III-led 5-day prep, 96% first-attempt pass, refining-major employer roster (ExxonMobil, Marathon, Phillips 66, Shell). 2026 schedule.
          {' '}<a href="/api-653-certification" className="text-primary underline underline-offset-2 hover:opacity-80">Prep with Atlantis NDT USA →</a>
        </p>

        {/* INLINE_PROOF_INJECTED_v1 */}
        <p className="my-4 rounded-md border-l-4 border-primary/60 bg-primary/5 p-3 text-sm">
          <strong>Atlantis NDT proof:</strong> ASNT Level III-led prep, 96% first-attempt pass rate, 2026 cohorts.
          {' '}<a href="/api-653-certification" className="text-primary underline underline-offset-2 hover:opacity-80">Prep with Atlantis NDT →</a>
        </p>

                        <p className="text-xl text-amber-100 mb-8">Everything you need to know about above-ground storage tank inspection per API 653. Inspection intervals, NDT methods, and certification requirements.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="API 653 Tank Inspection: Complete Guide" description="Complete guide to API 653 storage tank inspection." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">What is API 653?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            <strong>API 653 (Tank Inspection, Repair, Alteration, and Reconstruction)</strong> is the
                            American Petroleum Institute standard governing the inspection of above-ground storage tanks
                            (ASTs) in petroleum and chemical service. It provides guidelines for maintaining the integrity
                            of tanks built to API 650 or its predecessor API 12C.
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
                            <p className="text-amber-800"><strong>Key Point:</strong> API 653 is a fitness-for-service standard.
                                Tanks that don't meet original construction requirements can still be accepted if they meet
                                the evaluation criteria in API 653.</p>
                        </div>
                    </section>

                    {/* Inspection Frequency */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Inspection Frequency</h2>
                        <p className="text-slate-600 mb-6">Inspection intervals depend on corrosion rates, service conditions, and risk. API 653 allows Risk-Based Inspection (RBI) to optimize intervals.</p>
                        <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-lg shadow-sm">
                                <thead className="bg-slate-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">Risk Level</th>
                                        <th className="px-4 py-3 text-left font-semibold">Internal Inspection</th>
                                        <th className="px-4 py-3 text-left font-semibold">Criteria</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {inspectionFrequency.map((item) => (
                                        <tr key={item.riskLevel} className="border-t">
                                            <td className="px-4 py-3 font-medium">{item.riskLevel}</td>
                                            <td className="px-4 py-3">{item.interval}</td>
                                            <td className="px-4 py-3 text-slate-600 text-sm">{item.criteria}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Inspection Types */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Types of Inspections</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {inspectionTypes.map((item) => (
                                <Card key={item.type}>
                                    <CardHeader className="pb-2"><CardTitle className="text-lg">{item.type}</CardTitle></CardHeader>
                                    <CardContent><p className="text-slate-600 text-sm">{item.description}</p></CardContent>
                                </Card>
                            ))}
                        </div>
                    </section>

                    {/* Common Defects */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Common Defects Found</h2>
                        <ul className="space-y-3">
                            {commonDefects.map((defect) => (
                                <li key={defect} className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                    <span>{defect}</span>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* NDT Methods */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">NDT Methods for Tank Inspection</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h3 className="font-bold mb-2">Ultrasonic Testing (UT)</h3>
                                <p className="text-slate-600 text-sm">Thickness measurements, corrosion mapping, weld inspection</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h3 className="font-bold mb-2">Magnetic Flux Leakage (MFL)</h3>
                                <p className="text-slate-600 text-sm">Floor plate scanning for corrosion and pitting</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h3 className="font-bold mb-2">Magnetic Particle Testing (MT)</h3>
                                <p className="text-slate-600 text-sm">Weld crack detection on shell and floor welds</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h3 className="font-bold mb-2">Acoustic Emission (AE)</h3>
                                <p className="text-slate-600 text-sm">Online monitoring for active defects and leaks</p>
                            </div>
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
                    <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Need API 653 Inspection Services?</h2>
                        <p className="text-amber-100 mb-6">Our API 653 certified inspectors provide comprehensive tank inspection and consulting services.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition">Request Quote</Link>
                            <Link to="/training" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">API 653 Training</Link>
                        </div>
                    </section>

                    {/* Related */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/ndt-for-oil-gas" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">NDT for Oil & Gas</h3>
                                <p className="text-slate-600 text-sm mt-2">Complete guide to oil & gas NDT services</p>
                            </Link>
                            {/* /blog/digital-twins-oil-gas 301s to this URL — link the destination
                                directly so the client-side router does not bounce through a redirect. */}
                            <Link to="/blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">Digital Twins for Oil & Gas</h3>
                                <p className="text-slate-600 text-sm mt-2">3D visualization for tank integrity</p>
                            </Link>
                        </div>
                    </section>

                    {/* 2026-05-23: ERP/DT cross-promo block — SEO link-equity distribution */}
                    <ErpDtCrossPromoBlock
                        relevantApp="CMMS"
                        relevantAppHref="/erp/cmms-for-inspection-companies"
                    />
                </div>
            </article>

            <ClusterNav cluster="api-653" />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema653TankGuide) }}
            />
        <RelatedGuidesBlock links={[
              {
                    "title": "API 653 Certification 2026",
                    "href": "/api-653-certification",
                    "description": "Pass the API 653 exam",
                    "icon": "cert"
              },
              {
                    "title": "API 653 Tank Inspector Services",
                    "href": "/consulting/api-653-tank-inspector-services",
                    "description": "Outsourced inspector-of-record",
                    "icon": "consulting"
              },
              {
                    "title": "API 510 Certification",
                    "href": "/api-510-certification",
                    "description": "Pressure vessel inspector prep",
                    "icon": "cert"
              },
              {
                    "title": "Inspection Procedures Software",
                    "href": "/erp/inspection-procedures-management-software",
                    "description": "Version-control NDT procedures",
                    "icon": "erp"
              },
              {
                    "title": "Digital Twin for Storage Tanks",
                    "href": "/digital-twins/storage-tank",
                    "description": "Bottom-plate MFL + API 653 RBI overlay",
                    "icon": "dt"
              },
              {
                    "title": "ASNT Certification Path",
                    "href": "/asnt-certification",
                    "description": "Level I/II/III breakdown",
                    "icon": "cert"
              }
        ]} />

        <ContactDetails />
        </div>
    );
}
