import ContactDetails from "@/components/ContactDetails";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { CheckCircle, Eye, Camera, Shield, Clock, Target } from "lucide-react";

export default function VisualTesting() {
   const structuredData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Visual Testing Techniques for Modern NDT",
      description:
         "Explore Visual Testing (VT), the most fundamental NDT method using direct and remote inspection tools for assessing material integrity.",
      author: { "@type": "Organization", name: "Atlantis NDT" },
      datePublished: "2025-10-05",
      mainEntityOfPage: {
         "@type": "WebPage",
         "@id": "https://atlantisndt.com/blog/visual-testing",
      },
   };

   const advantages = [
      {
         icon: Eye,
         title: "Simple & Effective",
         description: "Provides immediate results with minimal setup.",
      },
      {
         icon: Camera,
         title: "Advanced Imaging",
         description:
            "Modern cameras, drones, and borescopes improve accuracy.",
      },
      {
         icon: Shield,
         title: "Non-Intrusive",
         description: "Completely non-contact and safe for all materials.",
      },
      {
         icon: Target,
         title: "Versatile Applications",
         description:
            "Suitable for almost all industries and inspection types.",
      },
      {
         icon: Clock,
         title: "Time Efficient",
         description: "Fast inspection process with minimal downtime.",
      },
   ];

   const applications = [
      {
         title: "Weld Inspections",
         description:
            "Checks welds for cracks, undercuts, or surface irregularities.",
      },
      {
         title: "Corrosion Monitoring",
         description:
            "Detects early signs of corrosion and material degradation.",
      },
      {
         title: "Aerospace & Aviation",
         description:
            "Visual inspection ensures the structural integrity of aircraft.",
      },
      {
         title: "Plant Maintenance",
         description:
            "Used for regular monitoring of equipment and safety structures.",
      },
      {
         title: "Pipeline Inspections",
         description:
            "Drone and camera-based systems inspect inaccessible pipelines.",
      },
   ];

   const bestPractices = [
      "Ensure adequate lighting for accurate inspection results.",
      "Clean the surface before performing any visual test.",
      "Use magnification tools or cameras when necessary.",
      "Document findings with photographs and detailed notes.",
      "Train inspectors to recognize surface irregularities and patterns.",
   ];

   return (
      <div className="min-h-screen bg-slate-50">
         <Navigation />

         <SEOHead
            title="Visual Testing Techniques for Modern NDT | Atlantis NDT"
            description="Learn about Visual Testing (VT), the foundational NDT method using direct observation, cameras, and drones for industrial inspection."
            keywords="Visual Testing, VT, NDT, Non-Destructive Testing, visual inspection, borescope, videoscope, drone inspection"
            structuredData={structuredData}
            canonical="https://atlantisndt.com/blog/visual-testing"
         />

         {/* Hero Section */}
         <section className="relative bg-white shadow-md">
            <div className="container mx-auto max-w-6xl px-6 py-16 text-center">
               <h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "#004aad" }}
               >
                  Visual Testing Techniques for Modern NDT
               </h1>
               <p className="text-slate-600 mb-4">October 5, 2025</p>
               <p className="text-lg md:text-xl text-slate-700">
                  Visual Testing (VT) is the simplest and most widely used{" "}
                  <span className="font-semibold text-blue-600">
                     Non-Destructive Testing (NDT)
                  </span>{" "}
                  method — from direct human observation to modern drone-based
                  inspections.
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
                     Visual Testing is often the first step in any inspection
                     process. It involves examining the surface of materials or
                     components for visible signs of damage, wear, or defects
                     using the naked eye or enhanced optical devices.
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
                     Need Inspection Support?
                  </h3>
                  <p className="text-slate-700 mb-4">
                     Contact our certified NDT experts for visual inspection
                     services and consultation.
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
