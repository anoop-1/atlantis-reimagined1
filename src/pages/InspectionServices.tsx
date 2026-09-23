import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
   Flame,
   Database,
   Waves,
   ShieldCheck,
   ArrowRight,
   CheckCircle,
   Wrench,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";
import EnquiryCaptureForm from "@/components/EnquiryCaptureForm";
import QuickAnswerBox from "@/components/QuickAnswerBox";

const SERVICES = [
   {
      slug: "pressure-vessel-inspection-services",
      icon: Flame,
      name: "Pressure Vessel Inspection",
      code: "API 510",
      description: "In-service pressure vessel inspection — internal, external and on-stream examination, corrosion-rate calculation, remaining-life assessment.",
   },
   {
      slug: "piping-inspection-services",
      icon: Waves,
      name: "Piping Inspection",
      code: "API 570",
      description: "In-service process piping inspection — CML thickness surveys, injection-point monitoring, CUI screening, piping-class-based inspection intervals.",
   },
   {
      slug: "tank-inspection-services",
      icon: Database,
      name: "Tank Inspection",
      code: "API 653",
      description: "Aboveground storage tank inspection — floor MFL scanning, shell thickness survey, settlement measurement, fitness-for-service.",
   },
   {
      slug: "weld-inspection-services",
      icon: Wrench,
      name: "Weld Inspection",
      code: "AWS D1.1 / ASME IX",
      description: "Weld integrity assessment across butt, fillet, socket and overlay welds — RT, UT, PAUT, TOFD, MT, PT and VT coverage.",
   },
   {
      slug: "pipeline-inspection-services",
      icon: ShieldCheck,
      name: "Pipeline Inspection",
      code: "API 1104 / B31.4 / B31.8",
      description: "Pipeline integrity assessment — ILI validation, direct assessment, girth weld screening, cathodic protection surveys.",
   },
   {
      slug: "corrosion-inspection-services",
      icon: CheckCircle,
      name: "Corrosion Inspection",
      code: "API 571 / 580 / 581",
      description: "Corrosion detection and monitoring — CUI, under-deposit corrosion, MIC assessment, feeding directly into RBI programs.",
   },
];

const FEATURED_CITIES = [
   { name: "Houston", slug: "houston" },
   { name: "Baton Rouge", slug: "baton-rouge" },
   { name: "Dubai", slug: "dubai" },
   { name: "Abu Dhabi", slug: "abu-dhabi" },
   { name: "Dammam", slug: "dammam" },
   { name: "Mumbai", slug: "mumbai" },
   { name: "New York", slug: "new-york" },
   { name: "Chennai", slug: "chennai" },
];

const structuredData = {
   "@context": "https://schema.org",
   "@graph": [
      {
         "@type": "Service",
         "@id": "https://atlantisndt.com/inspection-services#service",
         serviceType: "Third-Party NDT Inspection Services",
         provider: { "@id": "https://atlantisndt.com/#organization" },
         areaServed: ["US", "AE", "SA", "QA", "KW", "BH", "OM", "IN", "CA"],
         hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Inspection Services",
            itemListElement: SERVICES.map((s, i) => ({
               "@type": "Offer",
               position: i + 1,
               itemOffered: { "@type": "Service", name: s.name, description: s.description },
            })),
         },
      },
      {
         "@type": "FAQPage",
         mainEntity: [
            {
               "@type": "Question",
               name: "Does Atlantis NDT perform API 510, 570, and 653 inspections, or just training?",
               acceptedAnswer: {
                  "@type": "Answer",
                  text: "Atlantis NDT performs the NDT method work and inspection data review behind API 510 (pressure vessel), API 570 (piping) and API 653 (tank) programs — UT, PAUT, RT, MT, PT, VT and related methods, delivered and reviewed under ASNT SNT-TC-1A qualified personnel. Atlantis does not sell API inspector certification training or exam prep for these codes.",
               },
            },
            {
               "@type": "Question",
               name: "Which regions does Atlantis NDT cover for inspection services?",
               acceptedAnswer: {
                  "@type": "Answer",
                  text: "Primary coverage is North America and the Middle East (UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman), with growing coverage across India. See individual service pages for city-specific detail.",
               },
            },
         ],
      },
   ],
};

export default function InspectionServices() {
   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <QuickAnswerBox
            question="What inspection services does Atlantis NDT provide?"
            answer="Atlantis NDT delivers third-party NDT inspection services for pressure vessels (API 510), piping (API 570), storage tanks (API 653), welds, pipelines, and corrosion assessment — performed and reviewed by ASNT SNT-TC-1A qualified personnel. This is inspection work, not exam prep or certification training."
            bullets={[
               "API 510 pressure vessel, API 570 piping, and API 653 tank inspection — plus weld, pipeline and corrosion assessment",
               "Primary coverage: North America and the Middle East; growing coverage across India",
               "ASNT SNT-TC-1A qualified personnel; audit-ready, code-compliant reporting",
            ]}
         />

         <SEOHead
            title="Inspection Services — API 510, 570, 653 & More | Atlantis NDT"
            description="Third-party inspection services: pressure vessel (API 510), piping (API 570), tank (API 653), weld, pipeline and corrosion inspection. ASNT SNT-TC-1A qualified. North America, Middle East, India. Free quote."
            keywords="API 510 inspection services, API 570 inspection services, API 653 inspection services, pressure vessel inspection company, piping inspection company, tank inspection company, third party inspection services, in-service inspection"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/inspection-services"
         />

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
                  <h1 className="text-4xl md:text-6xl font-bold mb-6">
                     Inspection Services{" "}
                     <span className="gradient-text">— API 510, 570, 653 and Beyond</span>
                  </h1>
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                     Third-party in-service inspection for pressure vessels, piping, storage tanks, welds,
                     pipelines and corrosion assessment — delivered and reviewed by ASNT SNT-TC-1A qualified
                     personnel, with audit-ready, code-compliant reporting.
                     <strong className="text-foreground"> Affordable. Accessible. Fully customizable.</strong>
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3">
                     <a
                        href="#inspection-enquiry"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                     >
                        Request a Quote <ArrowRight className="w-4 h-4" />
                     </a>
                     <Link
                        to="/contact?service=inspection&subject=Inspection%20Services%20Enquiry"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-semibold rounded-lg shadow-lg hover:opacity-90 transition"
                     >
                        Talk to an Inspector
                     </Link>
                  </div>
               </motion.div>
            </div>
         </motion.section>

         <section className="py-16">
            <div className="container mx-auto px-6 max-w-4xl">
               <h2 className="text-3xl font-bold mb-6 text-center">Inspection, Not Exam Prep</h2>
               <p className="text-muted-foreground text-lg leading-relaxed">
                  If you're studying for the API 510, 570, or 653 individual certification exam, see our{" "}
                  <Link to="/api-510-certification" className="text-primary hover:underline">API 510</Link>,{" "}
                  <Link to="/api-570-certification" className="text-primary hover:underline">API 570</Link>, and{" "}
                  <Link to="/api-653-certification" className="text-primary hover:underline">API 653</Link>{" "}
                  certification guides. This page is for the other side of that equation: facilities and
                  asset owners who need the actual inspection performed — on your pressure vessels, piping,
                  tanks, welds, or pipeline — by qualified NDT personnel, not personnel studying to get
                  qualified themselves.
               </p>
            </div>
         </section>

         <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-6">
               <h2 className="text-3xl font-bold mb-10 text-center">Services</h2>
               <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {SERVICES.map((s) => (
                     <Card key={s.slug} className="h-full">
                        <CardHeader>
                           <s.icon className="w-8 h-8 text-primary mb-2" />
                           <CardTitle className="text-lg">{s.name}</CardTitle>
                           <p className="text-xs text-muted-foreground font-medium">{s.code}</p>
                        </CardHeader>
                        <CardContent>
                           <p className="text-sm text-muted-foreground mb-4">{s.description}</p>
                           <Link
                              to={`/inspection/${s.slug}-houston`}
                              className="text-sm text-primary hover:underline inline-flex items-center gap-1"
                           >
                              See an example page <ArrowRight className="w-3 h-3" />
                           </Link>
                        </CardContent>
                     </Card>
                  ))}
               </div>
            </div>
         </section>

         <section className="py-16">
            <div className="container mx-auto px-6">
               <h2 className="text-3xl font-bold mb-8 text-center">Featured Locations</h2>
               <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
                  Primary coverage: North America and the Middle East, with growing coverage across India.
                  Pick a service above, then a city below, or request a quote regardless of location.
               </p>
               <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 text-sm max-w-4xl mx-auto">
                  {FEATURED_CITIES.map((c) => (
                     <div key={c.slug} className="px-4 py-3 rounded-lg border border-border text-center">
                        <p className="font-semibold mb-1">{c.name}</p>
                        <div className="flex flex-col gap-0.5">
                           <Link to={`/inspection/pressure-vessel-inspection-services-${c.slug}`} className="text-xs text-primary hover:underline">API 510</Link>
                           <Link to={`/inspection/piping-inspection-services-${c.slug}`} className="text-xs text-primary hover:underline">API 570</Link>
                           <Link to={`/inspection/tank-inspection-services-${c.slug}`} className="text-xs text-primary hover:underline">API 653</Link>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section className="py-14">
            <div className="container mx-auto px-6">
               <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary to-accent p-8 md:p-10 text-center text-white shadow-xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-3">Need an inspection scheduled?</h2>
                  <p className="text-base md:text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                     Tell us the asset type, code, and location — we'll scope the inspection and return a
                     tailored quote.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                     <a
                        href="#inspection-enquiry"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-lg shadow hover:bg-white/90 transition"
                     >
                        Request a Quote <ArrowRight className="w-4 h-4" />
                     </a>
                  </div>
               </div>
            </div>
         </section>

         <div id="inspection-enquiry">
            <EnquiryCaptureForm variant="consulting" />
         </div>

         <ContactDetails />
      </div>
   );
}
