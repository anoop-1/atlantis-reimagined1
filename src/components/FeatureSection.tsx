import React from "react";
import { motion } from "framer-motion";
import { SearchCheck, ScanLine, Factory, BookOpenCheck } from "lucide-react";

const features = [
   {
      icon: <SearchCheck size={48} className="text-blue-500" />,
      title: "NDT Consulting",
      desc: "Expert Level III consulting for procedure development, compliance, and technical oversight.",
   },
   {
      icon: <ScanLine size={48} className="text-green-500" />,
      title: "NDT Auditing",
      desc: "Comprehensive audit services ensuring compliance with ASNT, ISO, API, and industry standards.",
   },
   {
      icon: <Factory size={48} className="text-indigo-500" />,
      title: "Industrial Applications",
      desc: "Serving oil & gas, aerospace, construction, and manufacturing industries.",
   },
   {
      icon: <BookOpenCheck size={48} className="text-orange-500" />,
      title: "Certified Training",
      desc: "Level I, II, and III training programs with international certification support.",
   },
];

// Parent container animation
const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
   },
};

// Card animation
const cardVariants = {
   hidden: { opacity: 0, y: 50, scale: 0.9 },
   visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 },
   },
   hover: {
      scale: 1.08,
      rotate: 1,
      boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
   },
   tap: { scale: 0.96 },
};

// Icon floating animation
const floatIcon = {
   initial: { y: 0 },
   animate: {
      y: [0, -6, 0],
      transition: {
         duration: 2,
         repeat: Infinity,
         ease: "easeInOut",
      },
   },
};

const FeatureSection = () => {
   return (
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
         <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Features
         </h1>

         <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
         >
            {features.map((feature, idx) => (
               <motion.div
                  key={idx}
                  className="group relative flex flex-col items-center text-center rounded-3xl 
              p-10 h-[350px] shadow-md cursor-pointer 
              bg-white text-gray-800 overflow-hidden transition-colors duration-300"
                  variants={cardVariants}
                  whileHover="hover"
                  whileTap="tap"
               >
                  {/* Animated glow background */}
                  <div
                     className="absolute inset-0 opacity-0 group-hover:opacity-20 
              bg-gradient-to-r from-blue-500 to-purple-600 transition-opacity duration-500 rounded-3xl"
                  />

                  {/* Floating Icon */}
                  <motion.div
                     variants={floatIcon}
                     initial="initial"
                     animate="animate"
                     className="mb-6 z-10"
                  >
                     {feature.icon}
                  </motion.div>

                  <h3 className="font-semibold text-lg mb-3 z-10 group-hover:text-blue-600 transition-colors">
                     {feature.title}
                  </h3>
                  <p className="text-sm z-10 text-gray-600 group-hover:text-gray-900 transition-colors">
                     {feature.desc}
                  </p>
               </motion.div>
            ))}
         </motion.div>
      </section>
   );
};

export default FeatureSection;
