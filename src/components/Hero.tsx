import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import HomeEnquiryForm from '@/components/HomeEnquiryForm';
import home from '@/data/home-first-screen.json';
import { Link } from 'react-router-dom';

export const Hero = () => {
   const heroRef = useRef<HTMLDivElement>(null);
   const particlesRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (particlesRef.current) {
         const particles = particlesRef.current;

         // Create floating particles
         for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-1 h-1 bg-primary rounded-full opacity-30';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            particles.appendChild(particle);

            gsap.to(particle, {
               y: '-=100',
               x: '+=50',
               duration: gsap.utils.random(10, 20),
               repeat: -1,
               yoyo: true,
               ease: 'power1.inOut',
               delay: gsap.utils.random(0, 5),
            });
         }
      }
   }, []);

   const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
         opacity: 1,
         transition: {
            duration: 0.8,
            staggerChildren: 0.2,
         },
      },
   };

   const itemVariants = {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 },
   };

   return (
      <section
         ref={heroRef}
         className="relative flex items-center overflow-hidden pt-28 pb-16 bg-gradient-to-br from-background via-secondary/20 to-accent/10"
      >
         {/* Animated Background */}
         <div
            ref={particlesRef}
            className="absolute inset-0 pointer-events-none"
         />

         {/* Background Grid */}
         <div
            className="absolute inset-0 bg-grid-pattern opacity-5"
            style={{
               backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
               backgroundSize: "50px 50px",
            }}
         />

         <div className="container mx-auto px-6 relative z-10">
            <motion.div
               className="max-w-6xl mx-auto text-center"
               variants={containerVariants}
               // 2026-09-29 (CWV): render the hero text in its final state on
               // mount. The fade/slide-in started the headline and subtitle (the
               // mobile LCP element) at opacity 0, adding the stagger + duration
               // to LCP. Everything else on the page still animates.
               initial={false}
               animate="visible"
            >
               {/* Main Headline — 2026-09-30: exact text from src/data/home-first-screen.json,
                   one text node so no "NDTConsulting" run-together; prerender emits the same H1. */}
               <motion.h1
                  id="home-h1"
                  variants={itemVariants}
                  className="text-3xl md:text-5xl font-bold leading-tight mb-4"
               >
                  {home.h1}
               </motion.h1>

               <motion.p
                  variants={itemVariants}
                  className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
               >
                  {home.intro}
               </motion.p>

               {/* Six commercial hubs as the first-screen choices, plus the inline enquiry form */}
               <motion.div variants={itemVariants} className="grid lg:grid-cols-3 gap-6 text-left mb-10">
                  <nav aria-label="Choose a service" className="lg:col-span-2">
                     <ul className="grid sm:grid-cols-2 gap-4">
                        {home.choices.map((c) => (
                           <li key={c.href}>
                              <Link
                                 to={c.href}
                                 data-business-line={c.businessLine}
                                 className="group flex h-full flex-col rounded-xl border bg-white/90 p-4 shadow-sm transition hover:border-primary hover:shadow-md"
                              >
                                 <span className="flex items-center justify-between font-semibold text-lg">
                                    {c.label}
                                    <ArrowRight className="w-4 h-4 text-primary transition-transform group-hover:translate-x-1" />
                                 </span>
                                 <span className="mt-1 text-sm text-muted-foreground">{c.blurb}</span>
                              </Link>
                           </li>
                        ))}
                     </ul>
                     <p className="mt-4 text-sm text-muted-foreground">
                        {home.secondary.prefix}{" "}
                        <Link to={home.secondary.href} className="font-medium text-primary underline-offset-4 hover:underline">
                           {home.secondary.label}
                        </Link>
                     </p>
                  </nav>
                  <HomeEnquiryForm />
               </motion.div>

               {/* Trust Indicators */}
               <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
               >
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                     Oil & Gas Certified
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                     Marine Industry Expert
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                     Aerospace Qualified
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                     Nuclear Standards
                  </div>
               </motion.div>
            </motion.div>
         </div>

         {/* Scroll Indicator */}
         <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
         >
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
               <motion.div
                  className="w-1 h-3 bg-primary rounded-full mt-2"
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
               />
            </div>
         </motion.div>
      </section>
   );
};