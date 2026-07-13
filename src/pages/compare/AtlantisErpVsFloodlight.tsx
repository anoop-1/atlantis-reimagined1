import { motion } from "framer-motion";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import TableOfContents from "@/components/TableOfContents";
import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
import { Link } from "react-router-dom";

export default function AtlantisErpVsFloodlight() {
   const faq = [
      {
         question: "Is Atlantis a good Floodlight Software alternative for NDT companies?",
         answer:
            "Yes. Floodlight is a focused inspection-reporting tool; Atlantis NDT ERP delivers the same method-by-method inspection reporting (UT, RT, MT, PT, VT, ET, PAUT, TOFD) AND the full business system around it — certification tracking, equipment calibration, work orders, RBI per API 581, invoicing, and HR — as one affordable, fully customizable platform built by an ASNT Level III team.",
      },
      {
         question: "What does Atlantis include that a standalone reporting tool does not?",
         answer:
            "All 30+ Odoo apps are bundled: CRM, projects, inventory, accounting, HR, field service, document control, plus the NDT layer — ASNT/ISO 9712/PCN/CSWIP certification tracking per technician per method, API 510/570/653 inspection-interval automation, and equipment calibration registries. You replace 4-8 disjoint tools with one system of record.",
      },
      {
         question: "Which NDT methods and standards does Atlantis cover?",
         answer:
            "Every method has its own report templates and procedure control mapped to the governing code: UT (ASME V Art. 4), RT (ASME V Art. 2 / ISO 17636), MT (ASTM E1444), PT (ASTM E1417), VT (ASME V Art. 9 / AWS D1.1), ET (ASTM E1004), plus PAUT/TOFD and API 510/570/653 endorsements.",
      },
      {
         question: "How much does Atlantis NDT ERP cost versus Floodlight?",
         answer:
            "Pricing is region-specific because Atlantis serves clients globally with local currencies and compliance needs. Request a demo and we scope a tailored quote to your crew size and methods. The differentiator is scope and authority — full ERP + NDT layer, ASNT Level III-built — not a headline price.",
      },
      {
         question: "How long does implementation take?",
         answer:
            "Because Atlantis ships pre-configured for NDT, most teams are live in weeks. We migrate your existing certification records, equipment registry, procedures, and client list as part of onboarding.",
      },
      {
         question: "Can Atlantis run cloud or on-premise?",
         answer:
            "Both — multi-tenant SaaS, single-tenant dedicated, or fully air-gapped on-prem for facilities with strict data-residency requirements.",
      },
   ];

   const rows = [
      { dim: "Method-by-method inspection reporting (UT/RT/MT/PT/VT/ET/PAUT/TOFD)", fl: "yes", at: "yes" },
      { dim: "Certification tracking (ASNT/ISO 9712/PCN/CSWIP) per method", fl: "partial", at: "yes" },
      { dim: "Equipment calibration registry + due alerts", fl: "partial", at: "yes" },
      { dim: "API 510/570/653 inspection-interval automation", fl: "no", at: "yes" },
      { dim: "RBI per API 581 / FFS per API 579 workflow", fl: "no", at: "yes" },
      { dim: "Full ERP (CRM, projects, inventory, accounting, HR)", fl: "no", at: "yes — 30+ apps included" },
      { dim: "Work orders, dispatch & field service", fl: "partial", at: "yes" },
      { dim: "ISO 9001 document & procedure control", fl: "partial", at: "yes" },
      { dim: "Digital twin integration (3D asset overlay)", fl: "no", at: "yes" },
      { dim: "Built / supported by ASNT Level III team", fl: "no", at: "yes" },
      { dim: "Cloud + air-gapped on-prem deployment", fl: "partial", at: "yes" },
      { dim: "Fully customizable to your workflow", fl: "partial", at: "yes" },
   ];

   const cell = (v: string) =>
      v === "yes" ? (
         <span className="inline-flex items-center gap-1 text-green-700"><CheckCircle className="w-4 h-4" /> Yes</span>
      ) : v === "no" ? (
         <span className="inline-flex items-center gap-1 text-slate-400"><XCircle className="w-4 h-4" /> No</span>
      ) : v === "partial" ? (
         <span className="text-amber-600">Partial</span>
      ) : (
         <span className="text-green-700 font-medium">{v}</span>
      );

   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
         {
            "@type": "SoftwareApplication",
            name: "Atlantis NDT ERP",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web, iOS, Android",
            description:
               "Atlantis NDT ERP — the Floodlight alternative for NDT inspection companies. Method-by-method inspection reporting plus full ERP: certification tracking, equipment calibration, RBI, work orders, invoicing. Built by an ASNT Level III team.",
            offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
            aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "127" },
            provider: { "@type": "Organization", name: "Atlantis NDT", url: "https://atlantisndt.com" },
         },
         {
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
               "@type": "Question",
               name: f.question,
               acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
         },
      ],
   };

   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <TableOfContents items={[{ id: "overview", label: "Overview" }, { id: "table", label: "Comparison" }, { id: "faq", label: "FAQ" }]} />
         <SEOHead
            title="Atlantis vs Floodlight 2026 — The NDT Reporting Software Alternative with Full ERP"
            description="Atlantis NDT ERP vs Floodlight Software: same method-by-method inspection reporting, plus certification tracking, equipment calibration, API 510/570/653 automation, RBI, and full ERP — all in one, ASNT Level III-built. Book a demo."
            keywords="Floodlight alternative, Floodlight software alternative, NDT reporting software, inspection reporting software, NDT ERP, Atlantis vs Floodlight"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/compare/atlantis-erp-vs-floodlight"
         />

         <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="container mx-auto px-6 max-w-4xl text-center">
               <Breadcrumbs />
               <motion.h1
                  id="overview"
                  className="text-3xl md:text-5xl font-bold mb-6 mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
               >
                  Atlantis vs Floodlight — the NDT reporting software alternative with a{" "}
                  <span className="gradient-text">full ERP built in</span>
               </motion.h1>
               <p className="text-lg text-muted-foreground mb-8">
                  Floodlight is a solid inspection-reporting tool. Atlantis NDT ERP gives you the same
                  method-by-method reporting plus everything around it — certification tracking, equipment
                  calibration, API 510/570/653 automation, RBI per API 581, work orders, invoicing, and HR —
                  as one affordable, fully customizable platform, built and supported by an ASNT Level III team.
               </p>
               <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link
                     to="/contact?subject=ERP%20Demo%20Request%20(Floodlight%20comparison)"
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
            </div>
         </section>

         <section id="table" className="py-16">
            <div className="container mx-auto px-6 max-w-5xl">
               <h2 className="text-3xl font-bold mb-8 text-center">Atlantis NDT ERP vs Floodlight — capability comparison</h2>
               <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                     <thead>
                        <tr className="bg-slate-100 text-left">
                           <th className="p-3 font-semibold border-b">Capability</th>
                           <th className="p-3 font-semibold border-b">Floodlight</th>
                           <th className="p-3 font-semibold border-b text-primary">Atlantis NDT ERP</th>
                        </tr>
                     </thead>
                     <tbody>
                        {rows.map((r) => (
                           <tr key={r.dim} className="hover:bg-slate-50">
                              <td className="p-3 border-b text-slate-800">{r.dim}</td>
                              <td className="p-3 border-b">{cell(r.fl)}</td>
                              <td className="p-3 border-b">{cell(r.at)}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <p className="text-xs text-muted-foreground mt-4 italic">
                  Comparison for informational buyer-research purposes. Floodlight is a trademark of its respective owner.
                  Capability summary reflects publicly available product information as of 2026.
               </p>
            </div>
         </section>

         <section className="py-14">
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary to-accent p-8 md:p-10 text-center text-white shadow-xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">See the difference on your own inspection workflow</h2>
                  <p className="opacity-90 mb-6 max-w-2xl mx-auto">
                     Book a walkthrough — we'll show reporting, certification tracking, and work orders configured for your methods and crew, and scope a region-specific quote.
                  </p>
                  <Link
                     to="/contact?subject=ERP%20Demo%20Request%20(Floodlight%20comparison)"
                     className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow hover:bg-white/90 transition"
                  >
                     Book Your ERP Demo <ArrowRight className="w-4 h-4" />
                  </Link>
               </div>
            </div>
         </section>

         <section id="faq" className="py-16">
            <div className="container mx-auto px-6 max-w-4xl">
               <h2 className="text-3xl font-bold mb-8 text-center">Floodlight alternative — FAQ</h2>
               <div className="space-y-4">
                  {faq.map((f) => (
                     <Card key={f.question} className="p-6">
                        <h3 className="font-semibold text-lg mb-2">{f.question}</h3>
                        <p className="text-muted-foreground">{f.answer}</p>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         <RelatedGuidesBlock
            links={[
               { title: "Atlantis NDT ERP", href: "/erp", description: "The full NDT ERP platform", icon: "erp" },
               { title: "Best NDT Reporting Software 2026", href: "/best-ndt-reporting-software-2026", description: "Vendor comparison", icon: "blog" },
               { title: "NDT ERP vs Generic ERP", href: "/ndt-erp-vs-generic-erp", description: "Why NDT-specific wins", icon: "erp" },
               { title: "Digital Twin Platform", href: "/digital-twins", description: "Asset integrity overlay", icon: "dt" },
            ]}
         />

         <EnquiryCaptureForm variant="erp" />
         <ContactDetails />
      </div>
   );
}
