import { motion } from 'framer-motion';
import { Plane, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function aerospace-ndt-services() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Aerospace NDT Services NDT Services",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "serviceType": "Non-Destructive Testing",
    "description": "Professional Aerospace NDT Services NDT inspection and testing services. Certified inspectors, advanced equipment, industry compliance."
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Aerospace NDT Services NDT Services | Inspection & Testing | Atlantis NDT"
        description="Professional Aerospace NDT Services NDT inspection services. Certified inspectors. Advanced equipment. Industry-compliant testing. Aircraft and engine inspection"
        keywords="Aerospace NDT Services NDT services, Aerospace NDT Services inspection, NDT testing Aerospace NDT Services"
        canonical="https://atlantisndt.com/aerospace-ndt-services"
        structuredData={{ "@context": "https://schema.org", "@graph": [serviceSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Aerospace NDT Services <span className="gradient-text">NDT Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Aircraft and engine inspection Professional inspection services. Certified inspectors. Advanced NDT equipment. Industry-compliant testing and reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Request Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/training">View Training</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-primary mb-2">500+</div><div className="text-muted-foreground">Projects</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">ASNT/API</div><div className="text-muted-foreground">Certified</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">15+</div><div className="text-muted-foreground">Years Experience</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">All Methods</div><div className="text-muted-foreground">Available</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Aerospace NDT Services Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[{title: 'Aircraft Inspection', description: 'Fastener holes, composite inspection, structural assessment'}, {title: 'Engine Components', description: 'Turbine blade inspection, bearing surfaces, critical parts'}, {title: 'Landing Gear', description: 'Magnetic particle testing, crack detection, structural integrity'}].map((sector) => (
              <Card key={sector} className="h-full hover:shadow-lg transition border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">{sector.title}</h3>
                      <p className="text-sm text-muted-foreground">{sector.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Professional Aerospace NDT Services NDT Services</h2>
          <p className="text-muted-foreground mb-8">Contact Atlantis NDT for comprehensive inspection and testing solutions.</p>
          <Button asChild size="lg">
            <Link to="/contact">Request Services</Link>
          </Button>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
