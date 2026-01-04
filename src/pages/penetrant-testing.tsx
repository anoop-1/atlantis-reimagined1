import ContactDetails from "@/components/ContactDetails";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { CheckCircle, Zap, Shield, Clock, Target, Gauge } from "lucide-react";

export default function PenetrantTesting() {
   // BlogPosting + FAQPage schema for rich snippets
   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
         {
            "@type": "BlogPosting",
            "headline": "Complete Guide to Liquid Penetrant Testing (PT) | Surface Defect Detection",
            "description": "Learn how Liquid Penetrant Testing detects surface-breaking defects in metals, plastics, and ceramics using dye penetrants.",
            "author": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
            "publisher": {
               "@type": "Organization",
               "name": "Atlantis NDT",
               "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/favicon-96x96.jpg" }
            },
            "datePublished": "2025-10-12",
            "dateModified": "2026-01-04",
            "mainEntityOfPage": {
               "@type": "WebPage",
               "@id": "https://atlantisndt.com/blog/penetrant-testing",
            },
            "keywords": "penetrant testing, liquid penetrant testing, PT, dye penetrant testing, surface defects"
         },
         {
            "@type": "FAQPage",
            "mainEntity": [
               {
                  "@type": "Question",
                  "name": "What is Liquid Penetrant Testing?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Liquid Penetrant Testing (PT or LPT) is a non-destructive testing method that uses a colored or fluorescent dye to detect surface-breaking defects like cracks, porosity, and laps in non-porous materials."
                  }
               },
               {
                  "@type": "Question",
                  "name": "What materials can be tested with Penetrant Testing?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "PT can be used on any non-porous material including metals (ferrous and non-ferrous), ceramics, plastics, and glass. It works on aluminum, stainless steel, titanium, and other non-magnetic materials where magnetic particle testing cannot be used."
                  }
               },
               {
                  "@type": "Question",
                  "name": "What is the difference between visible and fluorescent penetrant?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Visible (red) penetrants are viewed under white light and are suitable for field inspections. Fluorescent penetrants glow under UV/black light and offer higher sensitivity for detecting smaller defects, commonly used in aerospace applications."
                  }
               }
            ]
         }
      ]
   };

   const advantages = [
      {
         icon: Zap,
         title: "Fast Detection",
         description: "Quickly identifies surface defects.",
      },
      {
         icon: Target,
         title: "High Accuracy",
         description: "Reveals cracks, porosity, and seams clearly.",
      },
      {
         icon: Gauge,
         title: "Cost-Effective",
         description: "Simple method requiring minimal equipment.",
      },
      {
         icon: Shield,
         title: "Versatile",
         description: "Suitable for metals, ceramics, and plastics.",
      },
      {
         icon: Clock,
         title: "Minimal Downtime",
         description: "Rapid inspections reduce operational delays.",
      },
   ];

   const applications = [
      {
         title: "Weld Inspection",
         description: "Detects cracks and discontinuities in welds.",
      },
      {
         title: "Casting and Forging",
         description: "Reveals surface defects in manufactured components.",
      },
      {
         title: "Aerospace Components",
         description: "Ensures safety and reliability of critical parts.",
      },
      {
         title: "Automotive Industry",
         description: "Checks engine parts and critical structures.",
      },
      {
         title: "Pipeline & Pressure Vessels",
         description: "Maintains integrity of pressure-containing components.",
      },
   ];

   const bestPractices = [
      "Clean surface thoroughly before testing",
      "Apply the correct type of penetrant for the material",
      "Use proper dwell time for accurate defect revelation",
      "Remove excess penetrant carefully to avoid false indications",
      "Use appropriate developer and inspection lighting",
   ];

   return (
      <div className="min-h-screen bg-slate-50">
         <Navigation />

         <SEOHead
            title="Liquid Penetrant Testing (PT) Guide | Dye Penetrant Inspection Method"
            description="Complete guide to Liquid Penetrant Testing. Learn how PT/LPT detects surface cracks and defects in welds, castings, and aerospace components. Best practices included."
            keywords="penetrant testing, liquid penetrant testing, PT inspection, dye penetrant testing, LPT, fluorescent penetrant, surface crack detection, NDT methods, non-destructive testing"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/blog/penetrant-testing"
         />


         <section className="relative bg-white shadow-md">
            <div className="container mx-auto max-w-6xl px-6 py-16 text-center">
               <h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "#004aad" }}
               >
                  Penetrant Testing: Detecting Surface Defects
               </h1>
               <p className="text-slate-600 mb-4">October 10, 2025</p>
               <p className="text-lg md:text-xl text-slate-700">
                  Liquid Penetrant Testing (PT) is a reliable NDT method for
                  identifying surface-breaking defects by applying a visible or
                  fluorescent dye.
               </p>
            </div>
         </section>

         <main className="container mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-12">
            {/* Blog Content */}
            <article className="md:col-span-2 space-y-12">
               {/* Introduction */}
               <div className="bg-white rounded-2xl p-8 shadow border border-slate-100">
                  <p className="text-lg text-slate-700 leading-relaxed">
                     Penetrant Testing (PT) is a widely used{" "}
                     <span className="font-semibold text-blue-600">
                        Non-Destructive Testing (NDT)
                     </span>{" "}
                     technique to detect surface-breaking defects in ferrous and
                     non-ferrous materials. It works by applying a liquid
                     penetrant, allowing it to seep into cracks or pores, then
                     removing excess liquid and applying a developer to reveal
                     indications.
                  </p>
               </div>

               {/* Advantages */}
               <div id="advantages">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-slate-900">
                     Key Advantages
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                     {advantages.map((adv, idx) => {
                        const Icon = adv.icon;
                        return (
                           <div
                              key={idx}
                              className="bg-white rounded-xl p-6 shadow border border-slate-100 hover:shadow-lg transition"
                           >
                              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-[#004aad] rounded-lg flex items-center justify-center mb-3">
                                 <Icon className="w-6 h-6 text-white" />
                              </div>
                              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                                 {adv.title}
                              </h3>
                              <p className="text-slate-600">
                                 {adv.description}
                              </p>
                           </div>
                        );
                     })}
                  </div>
               </div>

               {/* Applications */}
               <div id="applications">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                     Applications
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                     {applications.map((app, idx) => (
                        <div
                           key={idx}
                           className="bg-white rounded-xl p-6 shadow border border-slate-100 hover:border-blue-300 transition"
                        >
                           <h3 className="text-xl font-semibold mb-2 text-blue-600">
                              {app.title}
                           </h3>
                           <p className="text-slate-600">{app.description}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Best Practices */}
               <div
                  id="best-practices"
                  className="bg-white rounded-2xl p-8 shadow border border-slate-100"
               >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                     Best Practices
                  </h2>
                  <ul className="space-y-3">
                     {bestPractices.map((bp, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                           <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                           <span className="text-slate-700 text-lg">{bp}</span>
                        </li>
                     ))}
                  </ul>
               </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden md:block md:col-span-1 space-y-6">
               <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">
                     Quick Links
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                     <li>
                        <a
                           href="#advantages"
                           className="hover:text-[#004aad] transition"
                        >
                           Advantages
                        </a>
                     </li>
                     <li>
                        <a
                           href="#applications"
                           className="hover:text-[#004aad] transition"
                        >
                           Applications
                        </a>
                     </li>
                     <li>
                        <a
                           href="#best-practices"
                           className="hover:text-[#004aad] transition"
                        >
                           Best Practices
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">
                     Need Consultation?
                  </h3>
                  <p className="text-slate-700 mb-4">
                     Contact our NDT experts for a free consultation and
                     inspection quote.
                  </p>
                  <a
                     href="/contact"
                     className="inline-block bg-[#004aad] hover:bg-blue-700 text-white px-4 py-2 rounded transition"
                  >
                     Contact Us
                  </a>
               </div>
            </aside>
         </main>
         <ContactDetails />
      </div>
   );
}
