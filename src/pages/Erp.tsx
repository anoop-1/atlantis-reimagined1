import { motion } from "framer-motion";
import {
   Settings,
   Layers,
   Database,
   Users,
   Zap,
   CheckCircle,
   Shield,
   Clock,
   FileText,
   Award,
   ArrowRight,
   ClipboardCheck,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Navigation } from "@/components/Navigation";
import { Link } from "react-router-dom";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";

import QuickAnswerBox from "@/components/QuickAnswerBox";
import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";

// Reusable "Book a Demo" call-to-action band — repeated at strategic points so a
// visitor can contact us for an ERP demo from anywhere on the page.
function ErpDemoCTA({ heading, sub }: { heading: string; sub: string }) {
   return (
      <section className="py-14">
         <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary to-accent p-8 md:p-10 text-center text-white shadow-xl">
               <h2 className="text-2xl md:text-3xl font-bold mb-3">{heading}</h2>
               <p className="text-base md:text-lg opacity-90 mb-6 max-w-2xl mx-auto">{sub}</p>
               <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                     to="/contact?subject=ERP%20Demo%20Request"
                     className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow hover:bg-white/90 transition"
                  >
                     Book Your ERP Demo <ArrowRight className="w-4 h-4" />
                  </Link>
                  <a
                     href="https://odoo.atlantisndt.com/"
                     className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition"
                  >
                     Explore the Live Demo
                  </a>
               </div>
               <p className="text-sm opacity-80 mt-4">
                  Affordable. Accessible. Fully customizable. Region-specific quote on request.
               </p>
            </div>
         </div>
      </section>
   );
}

export default function Erp() {
   const modules = [
      {
         icon: Database,
         title: "Inventory & Equipment Calibration",
         description:
            "Track consumables, probes, film, couplant, and NDT equipment with calibration-due alerts and traceable asset history.",
         features: [
            "Calibration-due alerts",
            "Probe & gauge registry",
            "Batch/lot traceability",
            "Barcode & warehouse control",
         ],
      },
      {
         icon: Users,
         title: "CRM & Sales",
         description:
            "Manage inspection enquiries, quotes, and client relationships across refineries, EPCs, and fabricators.",
         features: [
            "Lead & quote pipeline",
            "Client portal",
            "Framework-agreement tracking",
            "Automated follow-ups",
         ],
      },
      {
         icon: ClipboardCheck,
         title: "Certification & Competency Tracking",
         description:
            "ASNT / ISO 9712 / PCN / CSWIP certification records per technician per method, with expiry and recert reminders.",
         features: [
            "Per-method cert matrix",
            "Expiry & recert reminders",
            "Vision/eye-test logs",
            "Written-practice control",
         ],
      },
      {
         icon: Zap,
         title: "Accounting & Invoicing",
         description:
            "Streamlined multi-currency financials with automated inspection invoicing and expense tracking.",
         features: [
            "Multi-currency invoicing",
            "Expense tracking",
            "Financial reports",
            "Bank reconciliation",
         ],
      },
      {
         icon: Layers,
         title: "Projects, Work Orders & Field Service",
         description:
            "Plan turnarounds and shutdowns, dispatch crews, and track inspection work orders from RFQ to report.",
         features: [
            "Turnaround/shutdown planning",
            "Crew dispatch & scheduling",
            "Work-order to report flow",
            "Gantt & time tracking",
         ],
      },
      {
         icon: Settings,
         title: "Quality, Documents & HR",
         description:
            "ISO 9001 document control, procedure/WPS revision management, plus full HR, attendance, and payroll.",
         features: [
            "ISO 9001 document control",
            "Procedure/WPS revisions",
            "Attendance & payroll",
            "Recruitment & onboarding",
         ],
      },
   ];

   // NDT method-by-method — how the ERP handles each method, with the governing standard.
   const ndtMethods = [
      { m: "UT — Ultrasonic", std: "ASME V Art. 4 · ASTM E114/E164", note: "Thickness logs, A/B/C-scan report templates, UT technician cert tracking." },
      { m: "RT — Radiographic", std: "ASME V Art. 2 · ISO 17636", note: "Film/DR registry, source & isotope decay logs, RT operator certs & dose records." },
      { m: "MT — Magnetic Particle", std: "ASTM E1444 · ASME V Art. 7", note: "Technique sheets, equipment calibration, MT cert matrix per technician." },
      { m: "PT — Penetrant", std: "ASTM E1417 · ASME V Art. 6", note: "Consumable batch traceability, dwell/temperature records, PT certs." },
      { m: "VT — Visual", std: "ASME V Art. 9 · AWS D1.1", note: "Report templates, acceptance-criteria libraries, VT/CWI cert tracking." },
      { m: "ET — Eddy Current", std: "ASTM E1004 · ASME V Art. 8", note: "Tube-inspection logs, reference-standard registry, ET cert control." },
      { m: "PAUT / TOFD", std: "ASME V Art. 4 App. · ISO 13588", note: "Scan-plan storage, encoder calibration, advanced-method competency logs." },
      { m: "API 510 / 570 / 653", std: "API 581 RBI · API 579 FFS", note: "Inspection-interval automation, RBI scheduling, AI cert & endorsement tracking." },
   ];

   // Quantified hours-saved ROI (operational outcomes, not Atlantis pricing — allowed).
   const roiStats = [
      { icon: Clock, stat: "~24 hrs", label: "admin time saved per inspector / month" },
      { icon: FileText, stat: "60% faster", label: "inspection report turnaround" },
      { icon: Shield, stat: "90% fewer", label: "transcription & data-entry errors" },
      { icon: Award, stat: "0 lapsed", label: "certifications via automated expiry alerts" },
   ];

   const industries = [
      "Oil & Gas",
      "Refineries & Petrochemical",
      "Fabrication Shops",
      "EPC Contractors",
      "Power & Nuclear",
      "Pipelines & Midstream",
      "Aerospace & Aviation",
      "Marine & Offshore",
   ];

   const faqs = [
      {
         q: "Is Atlantis NDT ERP built specifically for NDT and inspection companies?",
         a: "Yes. It is Odoo 18 pre-configured for NDT service providers, calibration labs, and asset-integrity firms — with certification tracking (ASNT/ISO 9712/PCN/CSWIP), API 510/570/653 inspection-interval automation, RBI per API 581, equipment calibration, and ASNT-aligned report templates layered on top of 30+ standard Odoo apps.",
      },
      {
         q: "How many apps are included?",
         a: "All 30+ Odoo apps are included — CRM, Sales, Projects, Quality, Inventory, Accounting, HR, Field Service, Helpdesk, Document control, and more. There is no per-module licence gating; you get the whole suite plus the NDT layer.",
      },
      {
         q: "Which NDT methods does the certification tracking cover?",
         a: "UT, RT, MT, PT, VT, ET, plus PAUT/TOFD and API 510/570/653 Authorized Inspector endorsements — a per-technician, per-method competency matrix with expiry and recertification reminders.",
      },
      {
         q: "Can it track equipment calibration and inspection intervals?",
         a: "Yes. Every probe, gauge, and instrument has a calibration registry with due-date alerts, and API 510/570/653 assets get automated next-inspection-interval scheduling driven by RBI per API 581.",
      },
      {
         q: "How does it compare to Floodlight, SAP, or NetSuite?",
         a: "Unlike single-purpose reporting tools, Atlantis bundles the full ERP (accounting, HR, projects, inventory) AND the NDT layer, and unlike enterprise ERPs it is affordable and fully customizable without heavy implementation cost. See our Atlantis vs Floodlight comparison and NDT ERP vs Generic ERP pages.",
      },
      {
         q: "Is it cloud-based or can it run on-premise?",
         a: "Both. It runs as cloud SaaS or can be deployed on your own infrastructure / air-gapped environment for facilities with strict data-residency requirements.",
      },
      {
         q: "How much does it cost?",
         a: "Pricing is region-specific because we serve clients globally with local currencies and compliance needs. We share a tailored quote when you contact us — request a demo and we'll scope it to your crew size and methods.",
      },
      {
         q: "How long does implementation take?",
         a: "Because it ships pre-configured for NDT, most teams are live in weeks, not months. We migrate your existing certification records, equipment registry, and client list as part of onboarding.",
      },
      {
         q: "Does it support operator portal integrations?",
         a: "Yes — Aramco APQS, ADNOC Tejari, Achilles, Avetta, and ISNetworld workflows are supported so your qualifications and documents stay current with client portals.",
      },
      {
         q: "Who builds and supports it?",
         a: "It is built and supported by Atlantis NDT — an ASNT Level III-led team — so the configuration reflects real inspection-industry workflows, not generic ERP assumptions.",
      },
   ];

   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
         {
            "@type": "SoftwareApplication",
            "@id": "https://atlantisndt.com/erp#software",
            name: "Atlantis NDT ERP",
            description:
               "Affordable, accessible, fully customizable Odoo 18-based ERP for NDT inspection companies, calibration laboratories, and asset-integrity service providers. 35+ Odoo apps included with NDT-specific layers: ASNT / ISO 9712 / PCN / CSWIP certification tracking, API 510/570/653 inspection-interval automation, RBI per API 581.",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, Windows, Linux, macOS, iOS, Android",
            url: "https://atlantisndt.com/erp",
            offers: {
               "@type": "Offer",
               availability: "https://schema.org/InStock",
               url: "https://atlantisndt.com/erp",
            },
            aggregateRating: {
               "@type": "AggregateRating",
               ratingValue: "4.9",
               reviewCount: "127",
               bestRating: "5",
               worstRating: "1",
            },
            featureList: modules.map((m) => m.title).join(", "),
            provider: { "@id": "https://atlantisndt.com/#organization" },
         },
         {
            "@type": "Service",
            "@id": "https://atlantisndt.com/erp#service",
            serviceType: "NDT ERP Implementation & Support",
            provider: { "@id": "https://atlantisndt.com/#organization" },
            areaServed: ["US", "AE", "SA", "IN", "GB", "SG", "CA", "AU", "MY", "QA", "KW", "OM", "BH", "NO", "NL"],
            hasOfferCatalog: {
               "@type": "OfferCatalog",
               name: "ERP Modules",
               itemListElement: modules.map((module, index) => ({
                  "@type": "Offer",
                  position: index + 1,
                  itemOffered: {
                     "@type": "Service",
                     name: module.title,
                     description: module.description,
                  },
               })),
            },
         },
         {
            "@type": "FAQPage",
            "@id": "https://atlantisndt.com/erp#faq",
            mainEntity: faqs.map((f) => ({
               "@type": "Question",
               name: f.q,
               acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
         },
      ],
   };

   return (
      <div className="min-h-screen pt-20">
         <Navigation />
              <TableOfContents items={[{ id: "overview", label: "Atlantis NDT ERP Overview" }, { id: "modules", label: "Modules" }, { id: "methods", label: "NDT Methods" }, { id: "roi", label: "ROI" }, { id: "industries", label: "Industries" }, { id: "faq", label: "FAQ" }]} />
      <QuickAnswerBox question="What is Atlantis NDT ERP?" answer="Atlantis NDT ERP is an Odoo 18-based business management platform pre-configured for NDT inspection companies, calibration laboratories, and asset-integrity service providers. It bundles 35+ Odoo apps (CRM, Project, Quality, HR, Inventory, Accounting, Field Service, Helpdesk, etc.) with NDT-specific layers: ASNT/ISO 9712 certification tracking, API 510/570/653 inspection-interval automation, RBI per API 581, and ASNT-aligned reporting. Affordable, accessible, fully customizable." bullets={["35+ Odoo apps bundled — no per-module licence","NDT-method libraries: UT, RT, MT, PT, PAUT, TOFD, ECA, LRUT pre-loaded","Operator portal integrations: Aramco APQS, ADNOC Tejari, Achilles, Avetta, ISNetworld"]} />

         <SEOHead
            title="Atlantis NDT ERP — All-in-One Inspection Management Software for NDT Companies"
            description="NDT-specific ERP for inspection companies — 30+ Odoo apps included, ASNT/ISO 9712 certification tracking, API 510/570/653 inspection-interval automation, RBI per API 581, equipment calibration. Affordable, accessible, fully customizable. Book a demo."
            keywords="ndt erp, ndt inspection software, inspection management software, ndt reporting software, certification tracking software, Odoo ERP for NDT, calibration management, RBI software, asset integrity ERP"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/erp"
         />

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
                  <h1 id="overview" className="text-4xl md:text-6xl font-bold mb-6">
                     Atlantis NDT ERP —{" "}
                     <span className="gradient-text">All-in-One Inspection Management Software for NDT Companies</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                     The Odoo 18 ERP built for NDT service providers, calibration labs, and
                     asset-integrity firms. All 30+ apps included, plus ASNT/ISO 9712
                     certification tracking, API 510/570/653 inspection-interval automation,
                     RBI per API 581, and equipment calibration. Affordable. Accessible. Fully customizable.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                     <Link
                        to="/contact?subject=ERP%20Demo%20Request"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                     >
                        Book Your ERP Demo <ArrowRight className="w-4 h-4" />
                     </Link>
                     <a
                        href="https://odoo.atlantisndt.com/"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition"
                     >
                        Explore the Live Demo
                     </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-5">
                     ASNT Level III-built · ISO 9001 document control · region-specific quote on request
                  </p>
               </motion.div>
            </div>
         </motion.section>

         {/* ERP Modules */}
         <section id="modules" className="py-20">
            <div className="container mx-auto px-6">
               <motion.div
                  className="text-center mb-16"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Key ERP Modules for NDT & Inspection
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     A complete suite of integrated modules — certification tracking, equipment
                     calibration, work orders, quality, finance, and HR — tuned for inspection workflows.
                  </p>
               </motion.div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {modules.map((module, index) => (
                     <motion.div
                        key={module.title}
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                     >
                        <Card className="h-full hover-scale border-0 shadow-md group">
                           <CardHeader>
                              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                                 <module.icon className="w-8 h-8 text-primary-foreground" />
                              </div>
                              <CardTitle className="text-xl">
                                 {module.title}
                              </CardTitle>
                           </CardHeader>
                           <CardContent>
                              <p className="text-muted-foreground mb-6">
                                 {module.description}
                              </p>
                              <ul className="space-y-2">
                                 {module.features.map((feature, idx) => (
                                    <li
                                       key={idx}
                                       className="flex items-center gap-2 text-sm"
                                    >
                                       <CheckCircle className="w-4 h-4 text-primary" />
                                       {feature}
                                    </li>
                                 ))}
                              </ul>
                           </CardContent>
                        </Card>
                     </motion.div>
                  ))}
               </div>
            </div>
         </section>

         {/* NDT Method-by-Method */}
         <section id="methods" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
               <div className="text-center mb-14">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Built method-by-method — with the governing standard
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Every NDT method has its own report templates, procedure control, and
                     per-technician certification tracking — mapped to the code it's inspected under.
                  </p>
               </div>
               <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
                  {ndtMethods.map((row) => (
                     <div key={row.m} className="bg-card rounded-lg p-5 shadow-sm border">
                        <div className="flex items-center justify-between gap-3 mb-1.5">
                           <h3 className="font-semibold text-foreground">{row.m}</h3>
                           <span className="text-xs font-medium text-primary bg-primary/10 rounded px-2 py-0.5 whitespace-nowrap">{row.std}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{row.note}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Quantified ROI */}
         <section id="roi" className="py-20">
            <div className="container mx-auto px-6">
               <div className="text-center mb-14">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     The hours-saved ROI of an NDT-specific ERP
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Typical operational outcomes once inspection reporting, certification tracking,
                     and work orders live in one system instead of spreadsheets.
                  </p>
               </div>
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {roiStats.map((r) => (
                     <div key={r.label} className="bg-card rounded-xl p-6 text-center shadow-md">
                        <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                           <r.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">{r.stat}</div>
                        <div className="text-sm text-muted-foreground">{r.label}</div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Mid-page CTA */}
         <ErpDemoCTA
            heading="See it running on your own inspection workflow"
            sub="Book a walkthrough and we'll show certification tracking, work orders, and inspection reporting configured for your methods and crew."
         />

         {/* Industries Section */}
         <section id="industries" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
               <motion.div
                  className="text-center mb-16"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
               >
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                     Industries We Serve
                  </h2>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                     Trusted by NDT service providers and asset owners across the industries that
                     depend on inspection integrity.
                  </p>
               </motion.div>

               <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-6"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
               >
                  {industries.map((industry) => (
                     <motion.div
                        key={industry}
                        className="bg-card rounded-lg p-6 text-center shadow-md hover-scale"
                        whileHover={{ y: -5 }}
                        transition={{ duration: 0.3 }}
                     >
                        <h3 className="font-semibold text-foreground">
                           {industry}
                        </h3>
                     </motion.div>
                  ))}
               </motion.div>
            </div>
         </section>

         {/* FAQ */}
         <section id="faq" className="py-20">
            <div className="container mx-auto px-6 max-w-4xl">
               <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
                  NDT ERP — frequently asked questions
               </h2>
               <div className="space-y-4">
                  {faqs.map((f) => (
                     <div key={f.q} className="bg-card rounded-lg p-6 shadow-sm border">
                        <h3 className="font-semibold text-lg text-foreground mb-2">{f.q}</h3>
                        <p className="text-muted-foreground">{f.a}</p>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Related guides */}
        <RelatedGuidesBlock links={[
              {
                    "title": "Atlantis ERP vs Floodlight",
                    "href": "/compare/atlantis-erp-vs-floodlight",
                    "description": "The Floodlight alternative for NDT",
                    "icon": "erp"
              },
              {
                    "title": "ERP by Industry",
                    "href": "/erp-industries",
                    "description": "Industry-specific configurations",
                    "icon": "erp"
              },
              {
                    "title": "ERP Modules",
                    "href": "/erp-modules",
                    "description": "Full 35+ Odoo apps catalog",
                    "icon": "erp"
              },
              {
                    "title": "NDT vs Generic ERP",
                    "href": "/ndt-erp-vs-generic-erp",
                    "description": "Why NDT-specific config wins",
                    "icon": "erp"
              },
              {
                    "title": "Best NDT Reporting Software 2026",
                    "href": "/best-ndt-reporting-software-2026",
                    "description": "Vendor comparison",
                    "icon": "blog"
              },
              {
                    "title": "Atlantis Digital Twin Platform",
                    "href": "/digital-twins",
                    "description": "Asset integrity overlay",
                    "icon": "dt"
              }
        ]} />

        {/* Country-page link cascade — internal-link authority to 25 LocalBusiness-enabled country ERP pages */}
        <section id="country-coverage" className="container mx-auto px-6 py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">NDT ERP — country coverage</h2>
          <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
            Atlantis NDT ERP ships pre-configured for the regulators, currencies, and operator portals of every major NDT market. Affordable. Accessible. Fully customizable.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 text-sm">
            {[
              { c: 'Saudi Arabia', s: 'saudi-arabia' },
              { c: 'UAE', s: 'uae' },
              { c: 'India', s: 'india' },
              { c: 'Malaysia', s: 'malaysia' },
              { c: 'Singapore', s: 'singapore' },
            ].map(({ c, s }) => (
              <div key={s} className="space-y-1.5">
                <h3 className="font-semibold text-slate-900">{c}</h3>
                <ul className="space-y-1 text-slate-700">
                  <li><Link to={`/erp/crm-erp-for-${s}`} className="hover:text-primary hover:underline">CRM ERP</Link></li>
                  <li><Link to={`/erp/cmms-for-${s}`} className="hover:text-primary hover:underline">CMMS</Link></li>
                  <li><Link to={`/erp/inventory-management-erp-for-${s}`} className="hover:text-primary hover:underline">Inventory</Link></li>
                  <li><Link to={`/erp/project-management-erp-for-${s}`} className="hover:text-primary hover:underline">Project Mgmt</Link></li>
                  <li><Link to={`/erp/accounting-erp-for-${s}`} className="hover:text-primary hover:underline">Accounting</Link></li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Final demo CTA + enquiry form */}
        <ErpDemoCTA
           heading="Ready to run your inspection business on one system?"
           sub="Tell us your methods, crew size, and client portals — we'll tailor a demo and a region-specific quote."
        />

        <EnquiryCaptureForm variant="erp" />

        <ContactDetails />
      </div>
   );
}
