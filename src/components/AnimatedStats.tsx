import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';

interface StatProps {
  value: string;
  label: string;
  description: string;
}

const StatCard = ({ value, label, description }: StatProps) => {
  const numberRef = useRef<HTMLSpanElement>(null);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView && numberRef.current) {
      const element = numberRef.current;
      const endValue = parseInt(value.replace('+', ''));
      
      gsap.fromTo(element, 
        { innerText: 0 },
        {
          innerText: endValue,
          duration: 2,
          ease: "power2.out",
          snap: { innerText: 1 },
          onUpdate: function() {
            element.innerText = Math.ceil(this.targets()[0].innerText) + '+';
          }
        }
      );
    }
  }, [inView, value]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        <span 
          ref={numberRef}
          className="text-4xl md:text-6xl font-bold gradient-text block"
        >
          0+
        </span>
        <motion.div
          className="absolute -inset-2 bg-gradient-primary rounded-full opacity-20 blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      <h3 className="text-lg md:text-xl font-semibold text-foreground mt-2">
        {label}
      </h3>
      <p className="text-muted-foreground text-sm md:text-base">
        {description}
      </p>
    </motion.div>
  );
};

export const AnimatedStats = () => {
  const stats = [
    { value: "50", label: "Experts", description: "Certified professionals" },
    { value: "1000", label: "Inspections", description: "Completed projects" },
    { value: "10", label: "Level III Consultants", description: "Senior expertise" },
    { value: "7", label: "Years Running", description: "Industry experience" },
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              value={stat.value}
              label={stat.label}
              description={stat.description}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};