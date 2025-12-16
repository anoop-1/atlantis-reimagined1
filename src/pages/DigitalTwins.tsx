import { useState } from "react";
import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";
import InteractiveJet from "@/components/InteractiveJet";
import InteractivePlant from "@/components/InteractivePlant";
import InteractivePipe from "@/components/InteractivePipe";
import { SEOHead } from "@/components/SEOHead";

const models = [
   {
      name: "Jet Engine",
      path: "/jet_engine.glb",
      component: InteractiveJet,
      description:
         "Experience a high-fidelity 3D model of a jet engine. Explore the internal components and understand the working principles of modern aviation engines.",
   },
   {
      name: "Industry",
      path: "/generic_factory_with_smoke_towers.glb",
      component: InteractivePlant,
      description:
         "Dive into a detailed factory model with moving parts. Understand mechanics, performance optimization, and maintenance procedures interactively.",
   },
   {
      name: "Tank",
      path: "/propane_tank.glb",
      component: InteractivePipe,
      description:
         "An industrial tank model designed for training and simulation. Examine structural details and operational dynamics for real-world applications.",
   },
];

export default function DigitalTwins() {
   const [selectedModel, setSelectedModel] = useState(models[0]);

   // Dynamically render the component associated with the selected model
   const SelectedComponent = selectedModel.component;

   return (
      <>
            <SEOHead
               title="Digital Twins"
               description="Explore our advanced Digital Twins technology for industrial applications. Interactive 3D models for training, simulation, and analysis of complex mechanical systems including jet engines, industrial plants, and equipment."
               keywords="digital twins, 3D models, industrial simulation, jet engine simulation, factory simulation, industrial training, mechanical systems, interactive models, virtual training, engineering visualization"
               ogImage="/atlantis.jpg"
               canonical="https://atlantisndt.com/digital-twins"
            />
         <Navigation />

         <div className="w-full min-h-screen flex flex-col bg-gray-100">
            {/* Hero Section */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
               <div className="max-w-4xl mx-auto px-6">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                     Digital <span className="gradient-text">Twins</span>
                  </h1>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                     Explore interactive 3D models of advanced machinery for
                     training, simulation, and analysis. Enhance your
                     understanding of complex mechanical systems with realistic
                     digital twins.
                  </p>
               </div>
            </section>

            {/* Model Selection */}
            <section className="p-6 flex flex-wrap justify-center gap-4 bg-gray-900">
               {models.map((model) => (
                  <motion.button
                     key={model.name}
                     onClick={() => setSelectedModel(model)}
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                        selectedModel.name === model.name
                           ? "bg-primary text-white shadow-lg"
                           : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                     }`}
                  >
                     {model.name}
                  </motion.button>
               ))}
            </section>

            {/* 3D Model Display */}
            <section className="w-full bg-gray-100 max-w-7xl mx-auto flex flex-col items-center gap-8">
               <motion.div
                  className="w-full h-[600px] lg:h-[700px] rounded-xl shadow-xl overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
               >
                  <SelectedComponent modelPath={selectedModel.path} />
               </motion.div>

               {/* Model Description */}
               <motion.div
                  className="bg-white p-8 rounded-xl shadow-xl w-[90%] text-center mb-3 "
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
               >
                  <h2 className="text-3xl font-bold mb-4">
                     {selectedModel.name}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                     {selectedModel.description}
                  </p>
                  <motion.button
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                     className="mt-6 px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary transition-colors"
                     onClick={() => (window.location.href = "/contact")}
                  >
                     Request a Demo
                  </motion.button>
               </motion.div>
            </section>

            {/* Footer CTA */}
            <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10 text-center">
               <div className="max-w-3xl mx-auto px-6">
                  <p className="text-lg md:text-xl mb-4">
                     Interested in integrating Digital Twins for your
                     organization?
                  </p>
                  <a
                     href="/contact"
                     className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary transition-colors"
                  >
                     Get in Touch
                  </a>
               </div>
            </section>

            <ContactDetails />
         </div>
      </>
   );
}
