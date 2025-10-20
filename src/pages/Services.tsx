import { motion } from 'framer-motion';
import { Search, Zap, Eye, Waves, Settings, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { ScrollReveal } from '@/components/ScrollReveal';
import { Navigation } from '@/components/Navigation';
import { Link } from 'react-router-dom';
import ContactDetails from '@/components/ContactDetails';

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "Ultrasonic Testing (UT)",
      description: "High-frequency sound waves to detect internal flaws and measure thickness.",
      features: ["Thickness measurement", "Flaw detection", "Weld inspection", "Corrosion mapping"]
    },
    {
      icon: Waves,
      title: "Magnetic Particle Testing (MT)",
      description: "Detects surface and near-surface discontinuities in ferromagnetic materials.",
      features: ["Surface crack detection", "Weld inspection", "Component testing", "Quality assurance"]
    },
    {
      icon: Eye,
      title: "Visual Testing (VT)",
      description: "Direct visual examination and remote visual inspection techniques.",
      features: ["Direct examination", "Remote inspection", "Borescope inspection", "Documentation"]
    },
    {
      icon: Zap,
      title: "Radiographic Testing (RT)",
      description: "X-ray and gamma ray inspection for internal structure analysis.",
      features: ["Internal flaw detection", "Weld quality assessment", "Structural integrity", "Digital radiography"]
    },
    {
      icon: Settings,
      title: "Eddy Current Testing (ET)",
      description: "Electromagnetic induction for detecting surface and subsurface flaws.",
      features: ["Conductivity measurement", "Coating thickness", "Crack detection", "Tube inspection"]
    },
    {
      icon: CheckCircle,
      title: "Penetrant Testing (PT)",
      description: "Liquid penetrant method for detecting surface-breaking defects.",
      features: ["Surface crack detection", "Porosity detection", "Non-porous materials", "Color contrast"]
    }
  ];

  const industries = [
    "Oil & Gas",
    "Marine",
    "Aerospace",
    "Nuclear",
    "Energy",
    "Manufacturing",
    "Construction",
    "Transportation"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Non-Destructive Testing",
    "provider": {
      "@type": "Organization",
      "name": "Atlantis NDT"
    },
    "areaServed": "North America",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "NDT Testing Methods",
      "itemListElement": services.map((service, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        }
      }))
    }
  };

  return (
     <div className="min-h-screen pt-20">
        <Navigation />
        <SEOHead
           title="NDT Services"
           description="Comprehensive Non-Destructive Testing services including ultrasonic, radiographic, magnetic particle, penetrant, eddy current, and visual testing. State-of-the-art equipment and certified methodologies."
           keywords="NDT services, ultrasonic testing, radiographic testing, magnetic particle testing, penetrant testing, eddy current testing, visual testing, non-destructive testing methods"
           structuredData={structuredData}
           canonical="https://www.atlantisndt.com/services"
        />
        {/* Hero Section */}
        <motion.section
           className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8 }}
        >
           <div className="container mx-auto px-6">
              <motion.div
                 className="max-w-4xl mx-auto text-center"
                 initial={{ y: 30, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2, duration: 0.8 }}
              >
                 <h1 className="text-4xl md:text-6xl font-bold mb-6">
                    NDT <span className="gradient-text">Services</span>
                 </h1>
                 <p className="text-xl text-muted-foreground leading-relaxed">
                    Comprehensive Non-Destructive Testing services with
                    state-of-the-art equipment and certified methodologies for
                    critical asset inspection.
                 </p>
              </motion.div>
           </div>
        </motion.section>

        {/* Services Grid */}
        <section className="py-20">
           <div className="container mx-auto px-6">
              <motion.div
                 className="text-center mb-16"
                 initial={{ y: 30, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
              >
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Our Testing Methods
                 </h2>
                 <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Advanced NDT techniques performed by certified Level III
                    professionals using industry-leading equipment.
                 </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                 {services.map((service, index) => (
                    <motion.div
                       key={service.title}
                       initial={{ y: 30, opacity: 0 }}
                       whileInView={{ y: 0, opacity: 1 }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                       <Card className="h-full hover-scale border-0 shadow-md group">
                          <CardHeader>
                             <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:shadow-glow transition-all duration-300">
                                <service.icon className="w-8 h-8 text-primary-foreground" />
                             </div>
                             <CardTitle className="text-xl">
                                {service.title}
                             </CardTitle>
                          </CardHeader>
                          <CardContent>
                             <p className="text-muted-foreground mb-6">
                                {service.description}
                             </p>
                             <ul className="space-y-2">
                                {service.features.map((feature, idx) => (
                                   <li
                                      key={idx}
                                      className="flex items-center gap-2 text-sm"
                                   >
                                      <CheckCircle className="w-4 h-4 text-primary" />
                                      {feature}
                                   </li>
                                ))}
                             </ul>
                          </CardContent>
                       </Card>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Industries Section */}
        <section className="py-20 bg-secondary/30">
           <div className="container mx-auto px-6">
              <motion.div
                 className="text-center mb-16"
                 initial={{ y: 30, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
              >
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Industries We Serve
                 </h2>
                 <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                    Trusted by leading companies across multiple industries for
                    critical asset inspection and integrity management.
                 </p>
              </motion.div>

              <motion.div
                 className="grid grid-cols-2 md:grid-cols-4 gap-6"
                 initial={{ y: 30, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
              >
                 {industries.map((industry, index) => (
                    <motion.div
                       key={industry}
                       className="bg-card rounded-lg p-6 text-center shadow-md hover-scale"
                       whileHover={{ y: -5 }}
                       transition={{ duration: 0.3 }}
                    >
                       <h3 className="font-semibold text-foreground">
                          {industry}
                       </h3>
                    </motion.div>
                 ))}
              </motion.div>
           </div>
        </section>

        {/* Digital Twins Section */}
        <section className="py-20">
           <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                 <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                 >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                       <span className="gradient-text">Digital Twins</span>{" "}
                       Technology
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                       Stay up to date with Atlantis's technological
                       advancements. We offer VR/AR or web-based Digital Twins
                       used for asset integrity and enhanced learning programs
                       in NDT.
                    </p>
                    <ul className="space-y-3 mb-8">
                       <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Virtual Reality Training</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Augmented Reality Inspection</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Web-based Asset Management</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary" />
                          <span>Enhanced Learning Programs</span>
                       </li>
                    </ul>
                    <Button className="btn-primary">
                       <Link to={"/digital-twins"}>Learn More</Link>
                    </Button>
                 </motion.div>
                 <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                 >
                    <Card className="p-8 bg-gradient-card border-0 shadow-lg">
                       <CardContent className="p-0 text-center">
                          <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                             <Settings className="w-10 h-10 text-primary-foreground" />
                          </div>
                          <h3 className="text-2xl font-bold mb-4">
                             Advanced Technology
                          </h3>
                          <p className="text-muted-foreground">
                             Leveraging cutting-edge VR/AR technology to provide
                             immersive training experiences and comprehensive
                             asset integrity solutions.
                          </p>
                       </CardContent>
                    </Card>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-100 text-black">
           <div className="container mx-auto px-6 text-center">
              <motion.div
                 initial={{ y: 30, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8 }}
              >
                 <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Get Started?
                 </h2>
                 <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                    Contact us today for a customized NDT solution tailored to
                    your specific requirements.
                 </p>
                 <Button size="lg" variant="outline" className="btn-primary">
                    <Link to={"/contact"}>Get a Quote</Link>
                 </Button>
              </motion.div>
           </div>
        </section>
        <ContactDetails />
     </div>
  );
}