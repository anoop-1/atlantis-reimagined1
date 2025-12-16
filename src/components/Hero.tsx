import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
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
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10"
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
              className="max-w-4xl mx-auto text-center"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
           >
              {/* Main Headline */}
              <motion.h1
                 variants={itemVariants}
                 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
              >
                 <span className="gradient-text">Excellence</span> in NDT
                 <br />
                 <motion.span
                    className="text-foreground"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1, duration: 0.8 }}
                 >
                    Consulting & Training
                 </motion.span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                 variants={itemVariants}
                 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
              >
                 Your trusted partner in Non-Destructive Testing with{" "}
                 <span className="text-primary font-semibold">50+ experts</span>
                 ,{" "}
                 <span className="text-primary font-semibold">
                    1000+ projects
                 </span>
                 , and{" "}
                 <span className="text-primary font-semibold">
                    Level III consultants
                 </span>
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                 variants={itemVariants}
                 className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
              >
                 <Link to="/contact">
                    <Button
                       size="lg"
                       className="btn-primary group px-8 py-4 text-lg"
                    >
                       Get Started
                       <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                 </Link>
                 <Button
                    size="lg"
                    variant="outline"
                    className="px-8 py-4 text-lg group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                 >
                    <Play className="mr-2 w-5 h-5" />
                    <a href="https://youtu.be/WJwZEp4KQxw" target="_blank">
                       Watch Demo
                    </a>
                 </Button>
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