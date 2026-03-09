import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function DigitalTwinNDTSoftware() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Digital Twin Software for NDT",
    "description": "Digital twin technology for asset integrity and NDT inspection. 3D models, real-time monitoring, predictive maintenance.",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" }
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Digital Twin Software for NDT | Asset Integrity Solutions | Atlantis NDT"
        description="Digital twin technology for NDT and asset integrity. 3D visualization, real-time monitoring, predictive analytics, maintenance optimization. Enterprise solution."
        keywords="digital twin NDT, digital twin inspection, asset digital twin, predictive maintenance software, asset integrity software"
        canonical="https://atlantisndt.com/digital-twin-ndt-software"
        structuredData={{ "@context": "https://schema.org", "@graph": [softwareSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Twin Software for <span className="gradient-text">Asset Integrity</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Advanced digital twin technology for NDT data visualization, real-time monitoring, and predictive maintenance. 3D models with integrated inspection results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Request Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-primary mb-2">30%</div><div className="text-muted-foreground">Cost Reduction</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">40%</div><div className="text-muted-foreground">Maintenance Savings</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">99%</div><div className="text-muted-foreground">Data Accuracy</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">Real-Time</div><div className="text-muted-foreground">Monitoring</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Digital Twin Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "3D Asset Visualization", desc: "Interactive 3D models with inspection data overlay" },
              { title: "Real-Time Monitoring", desc: "Live condition monitoring and anomaly detection" },
              { title: "Predictive Analytics", desc: "AI-driven remaining life prediction" },
              { title: "Historical Comparison", desc: "Track asset degradation over time" },
              { title: "Scenario Planning", desc: "Test maintenance and replacement scenarios" },
              { title: "Integration Ready", desc: "Connects with ERP, CMMS, and IoT systems" }
            ].map((capability) => (
              <Card key={capability.title} className="border-0 shadow-sm hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    {capability.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{capability.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Transform Asset Management with Digital Twins</h2>
          <p className="text-muted-foreground mb-8">Reduce costs, extend asset life, and optimize maintenance with advanced digital twin technology.</p>
          <Button asChild size="lg">
            <Link to="/contact">Schedule Consultation</Link>
          </Button>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
