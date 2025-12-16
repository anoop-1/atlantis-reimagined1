import ContactDetails from "@/components/ContactDetails";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { CheckCircle, Waves, Gauge, Shield, Target, Clock } from "lucide-react";

export default function UltrasonicTesting() {
   const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Understanding Ultrasonic Testing in NDT",
      description:
         "Learn about Ultrasonic Testing (UT), an advanced non-destructive testing method for detecting internal flaws and measuring thickness in materials.",
      author: { "@type": "Organization", name: "Atlantis NDT" },
      datePublished: "2025-10-01",
      mainEntityOfPage: {
         "@type": "WebPage",
         "@id": "https://atlantisndt.com/blog/ultrasonic-testing",
      },
   };

   const advantages = [
      {
         icon: Waves,
         title: "High Sensitivity",
         description: "Capable of detecting small internal defects.",
      },
      {
         icon: Gauge,
         title: "Depth Measurement",
         description: "Provides accurate defect location and depth data.",
      },
      {
         icon: Shield,
         title: "Safe and Non-Radioactive",
         description: "No ionizing radiation, ensuring operator safety.",
      },
      {
         icon: Target,
         title: "Precision Analysis",
         description: "Delivers quantitative results with high accuracy.",
      },
      {
         icon: Clock,
         title: "Quick Results",
         description: "Immediate evaluation and defect detection on-site.",
      },
   ];

   const applications = [
      {
         title: "Weld Inspection",
         description:
            "Detects internal cracks, porosity, and lack of fusion in welds.",
      },
      {
         title: "Thickness Measurement",
         description: "Used to measure wall thickness of pipes and vessels.",
      },
      {
         title: "Aerospace Components",
         description: "Ensures the structural integrity of aircraft materials.",
      },
      {
         title: "Power Generation Equipment",
         description:
            "Monitors turbine blades, boilers, and pressure components.",
      },
      {
         title: "Automotive Industry",
         description: "Evaluates the soundness of castings and engine parts.",
      },
   ];

   const bestPractices = [
      "Ensure proper surface preparation and coupling for accurate readings.",
      "Use the correct probe frequency and angle for the material.",
      "Calibrate the equipment before each inspection session.",
      "Record and interpret signals carefully to avoid false readings.",
      "Perform regular equipment maintenance and verification checks.",
   ];

   return (
      <div className="min-h-screen bg-slate-50">
         <Navigation />

         <SEOHead
            title="Understanding Ultrasonic Testing in NDT | Atlantis NDT"
            description="Explore how Ultrasonic Testing (UT) detects internal flaws using high-frequency sound waves. Learn about its advantages, applications, and best practices."
            keywords="Ultrasonic Testing, UT, NDT, Non-Destructive Testing, flaw detection, weld inspection, thickness measurement"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/blog/ultrasonic-testing"
         />

         {/* Hero Section */}
         <section className="relative bg-white shadow-md">
            <div className="container mx-auto max-w-6xl px-6 py-16 text-center">
               <h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "#004aad" }}
               >
                  Understanding Ultrasonic Testing in NDT
               </h1>
               <p className="text-slate-600 mb-4">October 1, 2025</p>
               <p className="text-lg md:text-xl text-slate-700">
                  Ultrasonic Testing (UT) uses high-frequency sound waves to
                  detect internal flaws and measure thickness without damaging
                  the material.
               </p>
            </div>
         </section>

         {/* Main Content */}
         <main className="container mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-12">
            {/* Blog Article */}
            <article className="md:col-span-2 space-y-12">
               {/* Intro */}
               <div className="bg-white rounded-2xl p-8 shadow border border-slate-100">
                  <p className="text-lg text-slate-700 leading-relaxed">
                     Ultrasonic Testing is one of the most effective{" "}
                     <span className="font-semibold text-blue-600">
                        Non-Destructive Testing (NDT)
                     </span>{" "}
                     methods for evaluating internal flaws, measuring thickness,
                     and ensuring material soundness. By analyzing echoes from
                     ultrasonic pulses, inspectors can locate discontinuities
                     deep within a structure.
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
                     Need Assistance?
                  </h3>
                  <p className="text-slate-700 mb-4">
                     Reach out to Atlantis NDT experts for ultrasonic testing
                     consultation or inspection services.
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
