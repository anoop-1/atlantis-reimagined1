import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

export default function IndustrialAnimation() {
   const ref = useRef(null);
   const x = useMotionValue(0);
   const y = useMotionValue(0);

   // Rotate based on mouse movement (subtle range for natural feel)
   const rotateX = useTransform(y, [-200, 200], [10, -10]);
   const rotateY = useTransform(x, [-200, 200], [-10, 10]);

   const handleMouseMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left - rect.width / 2;
      const offsetY = e.clientY - rect.top - rect.height / 2;
      x.set(offsetX);
      y.set(offsetY);
   };

   const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
   };

   return (
      <div
         ref={ref}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}
         className="relative w-1/2 h-[600px] overflow-hidden perspective-1000 rounded-2xl shadow-xl bg-black/5 m-10"
      >
         {/* Background Layer */}
         <motion.img
            src="/background.png"
            alt="Industrial Background"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ rotateX, rotateY, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
         />

         {/* Factory Layer */}
         <motion.img
            src="/factory.png"
            alt="Factory"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
               rotateX,
               rotateY,
               translateZ: "50px",
               scale: 1.1,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
         />

         {/* Welder Layer (optional) */}
         <motion.img
            src="/welder.png"
            alt="Welder"
            className="absolute bottom-0 right-0 w-1/3 h-auto object-contain"
            style={{
               rotateX,
               rotateY,
               translateZ: "100px",
               scale: 1.2,
            }}
            transition={{ type: "spring", stiffness: 60, damping: 20 }}
         />

         {/* Overlay Glow */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
      </div>
   );
}
