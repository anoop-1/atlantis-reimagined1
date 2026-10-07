import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';
import { InspectionServiceModule } from "@/components/InspectionL3Content";

export default function PipelineInspectionServices() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Pipeline Inspection Services NDT Services",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "serviceType": "Non-Destructive Testing",
    "description": "Professional Pipeline Inspection Services NDT inspection and testing services. Certified inspectors, advanced equipment, industry compliance."
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Pipeline Inspection Services NDT Services | Inspection & Testing | Atlantis NDT"
        description="Pipeline and piping NDT: guided wave screening, UT thickness and corrosion mapping, CUI detection and weld inspection by ASNT-qualified technicians. Atlantis NDT does not run in-line inspection (smart pigging)."
        keywords="Pipeline Inspection Services NDT services, Pipeline Inspection Services inspection, NDT testing Pipeline Inspection Services"
        canonical="https://atlantisndt.com/pipeline-inspection-services"
        structuredData={{ "@context": "https://schema.org", "@graph": [serviceSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Pipeline Inspection Services <span className="gradient-text">NDT Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              External pipeline and piping NDT: guided wave screening, UT thickness and corrosion mapping, CUI detection and weld inspection, with ASNT Level III-led procedures. Atlantis NDT does not run in-line inspection (smart pigging); that is performed by specialist ILI vendors.
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
            <div><div className="text-4xl font-bold text-primary mb-2">Level III</div><div className="text-muted-foreground">Led Procedures</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">ASNT</div><div className="text-muted-foreground">SNT-TC-1A Qualified</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">GWT + UT</div><div className="text-muted-foreground">Screening &amp; Follow-up</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">All Methods</div><div className="text-muted-foreground">Available</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Pipeline Inspection Services Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[{title: 'Guided Wave Screening', description: 'Long-range screening of piping runs (ASTM E2775/E2929) with UT follow-up of indications'}, {title: 'External Inspection', description: 'UT thickness measurement, corrosion mapping, assessment'}, {title: 'Weld Inspection', description: 'Fabrication and in-service weld testing, defect evaluation'}].map((sector) => (
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
          <h2 className="text-3xl font-bold mb-4">Get Professional Pipeline Inspection Services NDT Services</h2>
          <p className="text-muted-foreground mb-8">Contact Atlantis NDT for comprehensive inspection and testing solutions.</p>
          <Button asChild size="lg">
            <Link to="/contact">Request Services</Link>
          </Button>
        </div>
      </section>

      <InspectionServiceModule path="/pipeline-inspection-services" />
      <ContactDetails />
    </div>
  );
}
