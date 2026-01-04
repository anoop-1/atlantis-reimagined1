import ContactDetails from "@/components/ContactDetails";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { CheckCircle, Zap, Shield, Clock, Target, Gauge } from "lucide-react";

export default function EddyCurrentTesting() {
   // Article + FAQPage schema for better Google rich results
   const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
         {
            "@type": "Article",
            "@id": "https://atlantisndt.com/blog/eddy-current-testing",
            "headline": "Complete Guide to Eddy Current Testing (ECT) | How It Works, Applications & Benefits",
            "description": "Learn how Eddy Current Testing detects surface and near-surface defects in conductive materials. Comprehensive guide covering aerospace, heat exchanger, and tubing inspection.",
            "datePublished": "2025-10-10",
            "dateModified": "2026-01-04",
            "author": {
               "@type": "Organization",
               "name": "Atlantis NDT",
               "url": "https://atlantisndt.com"
            },
            "publisher": {
               "@type": "Organization",
               "name": "Atlantis NDT",
               "logo": {
                  "@type": "ImageObject",
                  "url": "https://atlantisndt.com/favicon-96x96.jpg"
               }
            },
            "mainEntityOfPage": {
               "@type": "WebPage",
               "@id": "https://atlantisndt.com/blog/eddy-current-testing"
            },
            "keywords": "eddy current testing, ECT, NDT inspection, heat exchanger inspection, aerospace NDT, tube inspection"
         },
         {
            "@type": "FAQPage",
            "mainEntity": [
               {
                  "@type": "Question",
                  "name": "What is Eddy Current Testing?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "Eddy Current Testing (ECT) is a non-destructive testing method that uses electromagnetic induction to detect surface and near-surface defects in conductive materials like aluminum, copper, and steel."
                  }
               },
               {
                  "@type": "Question",
                  "name": "What are the main applications of Eddy Current Testing?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "ECT is commonly used for heat exchanger tube inspection, aerospace component testing, detecting cracks in turbine blades, railway wheel inspection, and quality control in manufacturing."
                  }
               },
               {
                  "@type": "Question",
                  "name": "What types of defects can Eddy Current Testing detect?",
                  "acceptedAnswer": {
                     "@type": "Answer",
                     "text": "ECT can detect surface cracks, corrosion, pitting, wall thinning, and conductivity variations. It is particularly effective for finding small surface-breaking defects."
                  }
               }
            ]
         }
      ]
   };

   const advantages = [
      {
         icon: Zap,
         title: "Rapid Detection",
         description: "Fast and precise defect identification",
      },
      {
         icon: Target,
         title: "Non-Contact Method",
         description: "No direct probe contact required",
      },
      {
         icon: Gauge,
         title: "High Sensitivity",
         description: "Detects very small flaws",
      },
      {
         icon: Shield,
         title: "Versatile Application",
         description: "Works with complex shapes and tubing",
      },
      {
         icon: Clock,
         title: "Minimal Downtime",
         description: "Fast inspections reduce operational interruptions",
      },
   ];

   const applications = [
      {
         title: "Heat Exchanger Inspection",
         description: "Detects corrosion and cracks in piping systems",
      },
      {
         title: "Aerospace",
         description: "Evaluates turbine blades, fuselage, and landing gear",
      },
      {
         title: "Railways",
         description: "Inspects wheels and axles for surface cracks",
      },
      {
         title: "Manufacturing",
         description: "Ensures quality in conductive materials",
      },
      {
         title: "Nuclear Industry",
         description: "Checks critical components without halting operations",
      },
   ];

   const bestPractices = [
      "Ensure the surface is clean and free of debris",
      "Calibrate equipment regularly to maintain accuracy",
      "Use probes suitable for the material type and geometry",
      "Combine with other NDT methods for comprehensive inspection",
   ];

   return (
      <div className="min-h-screen bg-slate-50">
         <Navigation />

         <SEOHead
            title="Eddy Current Testing (ECT) Guide | How It Works, Applications & Benefits"
            description="Complete guide to Eddy Current Testing. Learn how ECT detects surface defects in heat exchangers, aerospace components, and tubing. Fast, accurate, non-destructive inspection method."
            keywords="eddy current testing, ECT inspection, heat exchanger testing, aerospace NDT, tube inspection, surface crack detection, non-destructive testing, eddy current probe, ECT equipment"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/blog/eddy-current-testing"
         />

         {/* Hero Section */}
         <section className="relative bg-white shadow-md">
            <div className="container mx-auto max-w-6xl px-6 py-16 text-center">
               <h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "#004aad" }}
               >
                  Eddy Current Testing Explained
               </h1>
               <p className="text-slate-600 mb-4">October 10, 2025</p>
               <p className="text-lg md:text-xl text-slate-700">
                  A fast and precise Non-Destructive Testing method for
                  detecting surface and near-surface defects in conductive
                  materials.
               </p>
            </div>
         </section>

         {/* Main Content + Sidebar */}
         <section className="container mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-12">
            {/* Blog Content */}
            <article className="md:col-span-2 space-y-12">
               {/* Introduction */}
               <div className="bg-white rounded-2xl p-8 shadow border border-slate-100">
                  <p className="text-lg text-slate-700 leading-relaxed">
                     Eddy Current Testing (ECT) is a{" "}
                     <span
                        className="font-semibold"
                        style={{ color: "#004aad" }}
                     >
                        Non-Destructive Testing (NDT)
                     </span>{" "}
                     technique that uses electromagnetic induction to identify
                     surface and near-surface defects in conductive materials.
                     It is widely used in{" "}
                     <span className="font-semibold">
                        aerospace, marine, nuclear, and oil & gas
                     </span>
                     , especially for inspecting heat exchangers, tubing, and
                     critical components.
                  </p>
               </div>

               {/* How It Works */}
               <div className="bg-slate-100 rounded-2xl p-8 shadow border border-slate-200">
                  <h2
                     className="text-2xl md:text-3xl font-bold mb-4"
                     style={{ color: "#004aad" }}
                  >
                     How Eddy Current Testing Works
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                     ECT operates by inducing an{" "}
                     <span
                        className="font-semibold"
                        style={{ color: "#004aad" }}
                     >
                        alternating current
                     </span>{" "}
                     in a coil inside a probe. When brought near a conductive
                     material,{" "}
                     <span
                        className="font-semibold"
                        style={{ color: "#004aad" }}
                     >
                        eddy currents
                     </span>{" "}
                     are generated. Irregularities like cracks or corrosion
                     alter these currents, allowing precise detection{" "}
                     <span className="font-semibold">
                        without damaging the part
                     </span>
                     .
                  </p>
               </div>

               {/* Advantages */}
               <div>
                  <h2
                     className="text-2xl md:text-3xl font-bold mb-6"
                     style={{ color: "#004aad" }}
                  >
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
                              <div className="w-12 h-12 bg-[#004aad] rounded-lg flex items-center justify-center mb-3">
                                 <Icon className="w-6 h-6 text-white" />
                              </div>
                              <h3
                                 className="text-lg font-semibold mb-2"
                                 style={{ color: "#004aad" }}
                              >
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
               <div>
                  <h2
                     className="text-2xl md:text-3xl font-bold mb-4"
                     style={{ color: "#004aad" }}
                  >
                     Applications
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                     {applications.map((app, idx) => (
                        <div
                           key={idx}
                           className="bg-white rounded-xl p-6 shadow border border-slate-100 hover:border-[#004aad] transition"
                        >
                           <h3
                              className="text-xl font-semibold mb-2"
                              style={{ color: "#004aad" }}
                           >
                              {app.title}
                           </h3>
                           <p className="text-slate-600">{app.description}</p>
                        </div>
                     ))}
                  </div>
               </div>

               {/* Best Practices */}
               <div className="bg-white rounded-2xl p-8 shadow border border-slate-100">
                  <h2
                     className="text-2xl md:text-3xl font-bold mb-4"
                     style={{ color: "#004aad" }}
                  >
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

               {/* Why Atlantis NDT */}
               <div className="bg-[#004aad] rounded-2xl p-8 shadow text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                     Why Choose Atlantis NDT
                  </h2>
                  <p className="text-lg leading-relaxed mb-3">
                     At <span className="font-semibold">Atlantis NDT</span>, our
                     certified professionals deliver reliable inspections,
                     ensuring integrity and longevity of your assets. With over
                     50 NDT specialists, we provide tailored solutions for oil &
                     gas, aerospace, marine, and nuclear.
                  </p>
                  <p className="text-lg leading-relaxed">
                     Using state-of-the-art equipment and international
                     standards, we help you{" "}
                     <span className="font-semibold">
                        prevent failures, minimize downtime, and maintain
                        compliance
                     </span>
                     .
                  </p>
               </div>
            </article>

            {/* Sidebar */}
            <aside className="hidden md:block md:col-span-1 space-y-6">
               <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
                  <h3
                     className="text-xl font-semibold mb-4"
                     style={{ color: "#004aad" }}
                  >
                     Quick Links
                  </h3>
                  <ul className="space-y-3 text-slate-700">
                     <li>
                        <a
                           href="#how-it-works"
                           className="hover:text-[#004aad] transition"
                        >
                           How It Works
                        </a>
                     </li>
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
                     <li>
                        <a
                           href="#why-atlantis"
                           className="hover:text-[#004aad] transition"
                        >
                           Why Atlantis NDT
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
                  <h3
                     className="text-xl font-semibold mb-4"
                     style={{ color: "#004aad" }}
                  >
                     Need Consultation?
                  </h3>
                  <p className="text-slate-700 mb-4">
                     Contact our NDT experts for a free consultation and
                     inspection quote.
                  </p>
                  <a
                     href="/contact"
                     className="inline-block bg-[#004aad] hover:bg-[#003580] text-white px-4 py-2 rounded transition"
                  >
                     Contact Us
                  </a>
               </div>
            </aside>
         </section>

         <ContactDetails />
      </div>
   );
}
