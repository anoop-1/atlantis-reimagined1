import ContactDetails from "@/components/ContactDetails";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import {
   Magnet,
   Shield,
   CheckCircle,
   Wrench,
   Zap,
   Settings,
   Search,
} from "lucide-react";

export default function MagneticParticleTesting() {
   // BlogPosting + FAQPage schema for rich snippets
   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
         {
            "@type": "BlogPosting",
            "headline": "Complete Guide to Magnetic Particle Testing (MT) | Surface Defect Detection",
            "description": "Learn how Magnetic Particle Testing detects surface and near-surface defects in ferromagnetic materials for welds, castings, and machinery.",
            "author": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
            "publisher": {
               "@type": "Organization",
               "name": "Atlantis NDT",
               "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/favicon-96x96.jpg" }
            },
            "datePublished": "2025-10-03",
            "dateModified": "2026-01-04",
            "mainEntityOfPage": {
               "@type": "WebPage",
               "@id": "https://atlantisndt.com/blog/magnetic-particle-testing",
            },
            "keywords": "magnetic particle testing, MT inspection, MPI, weld inspection, surface defects, ferromagnetic materials"
         },
         {
            "@type": "FAQPage",
            "mainEntity": [
               {
                  "@type": "Question",
                  "name": "What is Magnetic Particle Testing?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Magnetic Particle Testing (MT or MPI) is a non-destructive testing method that uses magnetic fields and iron particles to detect surface and near-surface discontinuities in ferromagnetic materials like iron, nickel, and cobalt alloys."
                  }
               },
               {
                  "@type": "Question",
                  "name": "What materials can be tested with Magnetic Particle Testing?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "MT can only be used on ferromagnetic materials including carbon steel, alloy steel, iron, nickel, and some of their alloys. Non-ferromagnetic materials like aluminum, copper, and stainless steel cannot be tested with this method."
                  }
               },
               {
                  "@type": "Question",
                  "name": "What defects does Magnetic Particle Testing detect?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "MT detects surface-breaking and near-surface defects including cracks, seams, laps, inclusions, and porosity. It is especially effective for weld inspection and quality control in castings and forgings."
                  }
               }
            ]
         }
      ]
   };

   const advantages = [
      {
         icon: Magnet,
         title: "High Sensitivity",
         description:
            "Detects very small surface and near-surface discontinuities.",
      },
      {
         icon: Shield,
         title: "Reliable Detection",
         description: "Provides accurate results for ferromagnetic materials.",
      },
      {
         icon: Zap,
         title: "Quick Results",
         description: "Offers immediate visual indications of defects.",
      },
      {
         icon: Settings,
         title: "Simple Operation",
         description: "Requires minimal setup and straightforward equipment.",
      },
   ];

   const applications = [
      {
         title: "Weld Inspection",
         description:
            "Detects surface cracks, undercuts, and porosity in welds.",
      },
      {
         title: "Castings & Forgings",
         description:
            "Identifies shrinkage, laps, and surface cracks during quality checks.",
      },
      {
         title: "Aerospace Components",
         description:
            "Ensures safety-critical parts are defect-free before deployment.",
      },
      {
         title: "Automotive & Machinery",
         description:
            "Used for shafts, gears, and engine components in quality assurance.",
      },
      {
         title: "Structural Steel Fabrication",
         description:
            "Verifies weld joints and stress points for surface defects.",
      },
   ];

   const bestPractices = [
      "Ensure the test surface is clean and free from oil, grease, or dirt.",
      "Choose the correct magnetization technique (circular or longitudinal).",
      "Apply magnetic particles uniformly for accurate results.",
      "Use appropriate lighting or UV illumination for fluorescent inspections.",
      "Demagnetize components after inspection to avoid magnetic retention.",
   ];

   return (
      <div className="min-h-screen bg-slate-50">
         <Navigation />

         <SEOHead
            title="Magnetic Particle Testing (MT) Guide | Weld & Surface Defect Detection"
            description="Complete guide to Magnetic Particle Testing. Learn how MT/MPI detects surface cracks and defects in welds, castings, and ferromagnetic components. Best practices included."
            keywords="magnetic particle testing, MT inspection, MPI, magnetic particle inspection, weld inspection, surface crack detection, ferromagnetic testing, NDT methods, non-destructive testing"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/blog/magnetic-particle-testing"
         />
         <Breadcrumbs />

         {/* Hero Section */}
         <section className="relative bg-white shadow-md">
            <div className="container mx-auto max-w-6xl px-6 py-16 text-center">
               <h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "#004aad" }}
               >
                  Magnetic Particle Testing: Best Practices
               </h1>
               <p className="text-slate-600 mb-4">October 3, 2025</p>
               <p className="text-lg md:text-xl text-slate-700">
                  Magnetic Particle Testing (MPT) is a{" "}
                  <span className="font-semibold text-blue-600">
                     Non-Destructive Testing (NDT)
                  </span>{" "}
                  method used to locate surface and near-surface discontinuities
                  in ferromagnetic materials quickly and effectively.
               </p>
            </div>
         </section>

         {/* Main Content */}
         <main className="container mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-12">
            {/* Blog Article */}
            <article className="md:col-span-2 space-y-12">
               {/* Introduction */}
               <div className="bg-white rounded-2xl p-8 shadow border border-slate-100">
                  <p className="text-lg text-slate-700 leading-relaxed">
                     Magnetic Particle Testing (MPT) works on the principle that
                     when a ferromagnetic material is magnetized, any surface or
                     near-surface flaw interrupts the magnetic field and causes
                     magnetic flux leakage. Fine magnetic particles applied over
                     the surface gather at these leakage points, making defects
                     visible for inspection.
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
                     Need MPT Assistance?
                  </h3>
                  <p className="text-slate-700 mb-4">
                     Contact our certified NDT professionals for expert Magnetic
                     Particle Testing services and technical consultation.
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
