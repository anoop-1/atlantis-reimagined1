import { motion } from 'framer-motion';
import { Droplet, Zap, CheckCircle, TrendingUp, Users, Award, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function OilGasNDTServices() {
  const services = [
    {
      title: "Pipeline Inspection",
      methods: ["UT", "PAUT", "TOFD", "RT"],
      description: "Comprehensive pipeline integrity assessment including thickness measurement, defect detection, and corrosion mapping. In-line and external inspection services."
    },
    {
      title: "Pressure Vessel Inspection",
      methods: ["UT", "RT", "MT", "PT"],
      description: "API 510 compliant inspections of separators, reactors, and storage vessels. Risk-based inspection (RBI) and remaining life assessment."
    },
    {
      title: "Weld Inspection",
      methods: ["UT", "PAUT", "RT", "MT"],
      description: "Complete weld qualification and defect evaluation. ASME and API standard compliance. Fabrication and in-service weld inspection."
    },
    {
      title: "Offshore Platform Inspection",
      methods: ["UT", "PAUT", "MT", "PT"],
      description: "Subsea and topside inspection including structural assessment, tubular inspection, and cathodic protection monitoring."
    },
    {
      title: "Refinery Equipment Inspection",
      methods: ["All Methods"],
      description: "Comprehensive turnaround and ongoing maintenance inspections. Heat exchanger, furnace, and equipment assessment."
    },
    {
      title: "Corrosion & Erosion Assessment",
      methods: ["UT", "TOFD"],
      description: "Non-invasive thickness measurement and corrosion rate monitoring. Remaining life prediction and inspection planning."
    }
  ];

  const standards = [
    "API 510 Pressure Vessel Code",
    "API 570 Piping Inspection Code",
    "API 653 Tank Inspection Code",
    "ASME Boiler & Pressure Vessel Code",
    "ISO 13849 Piping Integrity",
    "ASTM E494 Eddy Current Thickness"
  ];

  const benefits = [
    {
      icon: Award,
      title: "Certified & Experienced",
      description: "ASNT Level III certified inspectors with 15+ years oil & gas experience. Deep expertise in upstream and downstream operations."
    },
    {
      icon: TrendingUp,
      title: "Risk-Based Inspection",
      description: "RBI methodology optimizes inspection resources. Reduce downtime and extend asset life with data-driven decisions."
    },
    {
      icon: Zap,
      title: "Advanced Technology",
      description: "Latest NDT equipment including phased array, TOFD, and digital thickness measurement. Real-time data reporting and analysis."
    },
    {
      icon: Users,
      title: "On-Time Delivery",
      description: "Meet your turnaround schedules. Fast-mobilize teams, efficient inspection execution, immediate reporting."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What NDT methods are used for pipeline inspection?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pipeline inspection uses ultrasonic testing (UT), phased array ultrasonic testing (PAUT), time of flight diffraction (TOFD), and radiographic testing (RT) depending on wall thickness, material, and defect types being assessed."
        }
      },
      {
        "@type": "Question",
        "name": "Is API 510 inspection required for oil & gas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, API 510 Pressure Vessel Inspection Code is required by law for in-service pressure vessel inspections in oil & gas operations. Atlantis NDT provides API 510 compliant inspections and certification."
        }
      },
      {
        "@type": "Question",
        "name": "What is risk-based inspection (RBI)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "RBI is a systematic approach that prioritizes inspection based on probability of failure and consequence of failure. It optimizes inspection resources, reduces costs, and improves asset reliability."
        }
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Oil & Gas NDT Services",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "serviceType": "Non-Destructive Testing",
    "areaServed": ["US", "Gulf of Mexico", "International"],
    "description": "Professional NDT services for oil & gas industry. Pipeline, pressure vessel, weld, and offshore inspection. API 510/570/653 compliant."
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [serviceSchema, faqSchema]
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Oil & Gas NDT Services | Pipeline & Offshore Inspection | Atlantis NDT"
        description="Professional NDT services for oil & gas industry. Pipeline, pressure vessel, weld, and offshore inspection. API 510/570/653 compliant. Certified inspectors. Risk-based inspection."
        keywords="oil and gas NDT services, pipeline inspection NDT, offshore NDT inspection, pressure vessel inspection oil gas, API 510 inspection, API 570 piping inspection, weld inspection oil gas"
        canonical="https://atlantisndt.com/oil-gas-ndt-services"
        structuredData={structuredData}
      />

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
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Droplet className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Industry Vertical</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Oil & Gas <span className="gradient-text">NDT Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive NDT inspection services for oil & gas operations. Pipeline integrity, pressure vessel inspection, weld quality, and offshore platform assessment. API compliant. Risk-based inspection methodology. Certified Level III inspectors.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Request Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/training">View Training Programs</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">ASNT/API</div>
              <div className="text-muted-foreground">Certified</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Emergency Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Oil & Gas NDT Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive inspection solutions for every phase of oil & gas operations.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {service.methods.map((method) => (
                        <Badge key={method} variant="outline">{method}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Choose Atlantis NDT?</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <benefit.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Standards & Compliance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All services comply with industry standards and regulatory requirements.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {standards.map((standard) => (
              <motion.div
                key={standard}
                className="flex items-center gap-3 bg-card p-4 rounded-lg border border-border hover:shadow-md transition"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{standard}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Industry Applications</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-base">Upstream Operations</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Platform inspection, wellhead assessment, subsea pipeline integrity.</p></CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-base">Downstream & Refining</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Turnaround inspections, equipment integrity, process vessel assessment.</p></CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-base">Midstream</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Pipeline ILI support, external inspection, integrity verification.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Professional NDT Services</h2>
          <p className="text-muted-foreground mb-8">Contact Atlantis NDT for comprehensive inspection solutions tailored to your oil & gas operations.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Request Services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/api-510-training">View Training</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
