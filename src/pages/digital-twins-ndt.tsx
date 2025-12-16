import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";

export default function DigitalTwinsNDT() {
   return (
      <div className="min-h-screen bg-slate-50 pt-20">
         <Navigation />

         <SEOHead
            title="Digital Twins in NDT: Transforming Asset Management"
            description="Explore how digital twins and VR/AR technology improve NDT processes and training."
            canonical="https://atlantisndt.com/digital-twins-ndt"
         />

         {/* Hero Section */}
         <section className="relative bg-white shadow-md">
            <div className="container mx-auto max-w-6xl px-6 py-16 text-center">
               <h1
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{ color: "#004aad" }}
               >
                  Digital Twins in NDT: Transforming Asset Management
               </h1>
               <p className="text-slate-600 mb-4">October 15, 2025</p>
               <p className="text-lg md:text-xl text-slate-700">
                  Explore how digital twins and VR/AR technology improve NDT
                  processes, asset management, and training.
               </p>
            </div>
         </section>

         {/* Main Content + Sidebar */}
         <section className="container mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-12">
            {/* Blog Content */}
            <article className="md:col-span-2 space-y-12">
               {/* Introduction */}
               <div className="bg-white rounded-2xl p-8 shadow border border-slate-100">
                  <h2
                     className="text-2xl md:text-3xl font-bold mb-4"
                     style={{ color: "#004aad" }}
                  >
                     What Are Digital Twins?
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed">
                     Digital twins combine real-time sensor data, digital
                     models, and advanced visualization to create a live,
                     virtual representation of physical assets. They allow
                     engineers to monitor, analyze, and predict asset
                     performance, helping reduce maintenance costs and prevent
                     failures.
                  </p>
               </div>

               {/* Applications in NDT */}
               <div className="bg-slate-100 rounded-2xl p-8 shadow border border-slate-200">
                  <h2
                     className="text-2xl md:text-3xl font-bold mb-4"
                     style={{ color: "#004aad" }}
                  >
                     Applications in NDT
                  </h2>
                  <ul className="list-disc list-inside text-lg text-slate-700 space-y-2">
                     <li>Simulate inspections for training and planning.</li>
                     <li>
                        Predict asset degradation and detect potential defects.
                     </li>
                     <li>
                        Integrate with VR/AR for immersive inspection guidance.
                     </li>
                     <li>
                        Enhance remote monitoring of critical infrastructure.
                     </li>
                  </ul>
               </div>

               {/* Benefits */}
               <div className="bg-white rounded-2xl p-8 shadow border border-slate-100">
                  <h2
                     className="text-2xl md:text-3xl font-bold mb-4"
                     style={{ color: "#004aad" }}
                  >
                     Benefits of Digital Twins in NDT
                  </h2>
                  <ul className="list-disc list-inside text-lg text-slate-700 space-y-2">
                     <li>
                        Improved inspection accuracy and asset reliability.
                     </li>
                     <li>Reduced downtime through predictive maintenance.</li>
                     <li>Enhanced training and workforce development.</li>
                     <li>
                        Better integration with smart asset management systems.
                     </li>
                  </ul>
               </div>

               {/* Why Atlantis NDT */}
               <div className="bg-[#004aad] rounded-2xl p-8 shadow text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                     Why Choose Atlantis NDT
                  </h2>
                  <p className="text-lg leading-relaxed mb-3">
                     At <span className="font-semibold">Atlantis NDT</span>, our
                     certified professionals leverage digital twins and VR/AR
                     technologies to enhance inspections, reduce operational
                     risks, and improve asset management.
                  </p>
                  <p className="text-lg leading-relaxed">
                     We help clients in aerospace, oil & gas, nuclear, and
                     marine industries implement innovative NDT solutions for
                     predictive maintenance and workforce training.
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
                           href="#what-are-digital-twins"
                           className="hover:text-[#004aad] transition"
                        >
                           What Are Digital Twins?
                        </a>
                     </li>
                     <li>
                        <a
                           href="#applications-in-ndt"
                           className="hover:text-[#004aad] transition"
                        >
                           Applications in NDT
                        </a>
                     </li>
                     <li>
                        <a
                           href="#benefits"
                           className="hover:text-[#004aad] transition"
                        >
                           Benefits
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
