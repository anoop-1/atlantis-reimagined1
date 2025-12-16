import ContactDetails from "@/components/ContactDetails";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import {
   Shield,
   Camera,
   AlertTriangle,
   CheckCircle,
   Zap,
   Lock,
   Target,
   Clock,
} from "lucide-react";

export default function RadiographicTesting() {
   const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Radiographic Testing in Industrial Applications",
      description:
         "Explore Radiographic Testing (RT) using X-rays and gamma rays for detecting internal defects and ensuring weld quality in industrial applications.",
      author: { "@type": "Organization", name: "Atlantis NDT" },
      datePublished: "2025-10-07",
      mainEntityOfPage: {
         "@type": "WebPage",
         "@id": "https://atlantisndt.com/blog/radiographic-testing",
      },
   };

   const advantages = [
      {
         icon: Camera,
         title: "Internal Visualization",
         description:
            "Provides a detailed view of internal defects and material density variations.",
      },
      {
         icon: Target,
         title: "High Accuracy",
         description:
            "Detects cracks, porosity, and inclusions with precise imaging results.",
      },
      {
         icon: Shield,
         title: "Non-Destructive",
         description:
            "Preserves the integrity of components while identifying internal flaws.",
      },
      {
         icon: Clock,
         title: "Permanent Records",
         description:
            "Creates film or digital images for future reference and documentation.",
      },
      {
         icon: Zap,
         title: "Versatile",
         description:
            "Applicable to metals, composites, and welds in various industries.",
      },
   ];

   const applications = [
      {
         title: "Weld Inspection",
         description:
            "Ensures weld integrity in pipelines, vessels, and structural joints.",
      },
      {
         title: "Casting and Forging Evaluation",
         description:
            "Detects internal shrinkage, voids, and inclusions in metal castings.",
      },
      {
         title: "Aerospace and Defense",
         description:
            "Examines critical components to ensure structural reliability.",
      },
      {
         title: "Petrochemical Industry",
         description:
            "Used in refinery and offshore installations for pipeline testing.",
      },
      {
         title: "Manufacturing Quality Control",
         description:
            "Assures product reliability and compliance with safety standards.",
      },
   ];

   const safetyGuidelines = [
      "Only certified personnel should operate radiographic testing equipment.",
      "Use proper shielding, barriers, and warning signage during operations.",
      "Always maintain safe distances and monitor radiation exposure levels.",
      "Follow ASME, ASTM, and ISO radiation safety protocols.",
      "Perform regular equipment calibration and safety audits.",
   ];

   return (
      <div className="min-h-screen bg-slate-50">
         <Navigation />

         <SEOHead
            title="Radiographic Testing in Industrial Applications | Atlantis NDT"
            description="Explore Radiographic Testing (RT) using X-rays and gamma rays for detecting internal defects, ensuring weld quality, and maintaining industrial safety standards."
            keywords="Radiographic Testing, X-ray testing, gamma ray testing, NDT services, weld inspection, internal defect detection, industrial radiography, non-destructive testing, quality assurance, Atlantis NDT"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/blog/radiographic-testing"
         />

         {/* Header Section */}
         <section className="relative bg-white shadow-md">
            <div className="container mx-auto max-w-6xl px-6 py-16 text-center">
               <h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "#004aad" }}
               >
                  Radiographic Testing in Industrial Applications
               </h1>
               <p className="text-slate-600 mb-4">October 7, 2025</p>
               <p className="text-lg md:text-xl text-slate-700">
                  Radiographic Testing (RT) uses X-rays or gamma rays to inspect
                  the internal structure of materials, ensuring safety, quality,
                  and compliance across industries.
               </p>
            </div>
         </section>

         {/* Main Section */}
         <main className="container mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-12">
            {/* Blog Content */}
            <article className="md:col-span-2 space-y-12">
               {/* Introduction */}
               <div className="bg-white rounded-2xl p-8 shadow border border-slate-100">
                  <p className="text-lg text-slate-700 leading-relaxed">
                     <strong>Radiographic Testing (RT)</strong> is one of the
                     most effective{" "}
                     <span className="text-blue-600 font-semibold">
                        Non-Destructive Testing (NDT)
                     </span>{" "}
                     techniques for identifying hidden internal flaws such as
                     cracks, porosity, and inclusions in welds or solid
                     materials. By using controlled radiation exposure, RT
                     provides precise visual evidence of internal conditions
                     without damaging the tested object.
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

               {/* Safety Guidelines */}
               <div
                  id="safety"
                  className="bg-white rounded-2xl p-8 shadow border border-slate-100"
               >
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-slate-900">
                     Safety Guidelines
                  </h2>
                  <ul className="space-y-3">
                     {safetyGuidelines.map((sg, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                           <AlertTriangle className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                           <span className="text-slate-700 text-lg">{sg}</span>
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
                           href="#safety"
                           className="hover:text-[#004aad] transition"
                        >
                           Safety Guidelines
                        </a>
                     </li>
                  </ul>
               </div>
               <div className="bg-white p-6 rounded-xl shadow border border-slate-100">
                  <h3 className="text-xl font-semibold mb-4 text-slate-900">
                     Need Consultation?
                  </h3>
                  <p className="text-slate-700 mb-4">
                     Connect with our certified NDT experts to discuss your
                     inspection requirements and ensure compliance with industry
                     standards.
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
