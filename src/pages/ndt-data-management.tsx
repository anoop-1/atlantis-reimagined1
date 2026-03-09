import { motion } from 'framer-motion';
import { Database, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function NDTDataManagement() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NDT Data Management Solutions",
    "description": "Centralized NDT data management platforms. Inspection record storage, retrieval, analysis, and reporting solutions.",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" }
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT Data Management Solutions | Centralized Inspection Records | Atlantis NDT"
        description="Centralized NDT data management system. Store, retrieve, and analyze inspection records. Secure cloud or on-premise solutions. Enterprise-grade data management."
        keywords="NDT data management, inspection data management, NDT records management, inspection data storage, NDT database"
        canonical="https://atlantisndt.com/ndt-data-management"
        structuredData={{ "@context": "https://schema.org", "@graph": [softwareSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT Data Management <span className="gradient-text">Solutions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Centralized platform for storing, managing, and analyzing inspection records. Secure cloud and on-premise options. Enterprise-grade data management for inspection programs.
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
            <div><div className="text-4xl font-bold text-primary mb-2">10M+</div><div className="text-muted-foreground">Records Managed</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">99.99%</div><div className="text-muted-foreground">Availability</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">Secure</div><div className="text-muted-foreground">Encrypted Data</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">24/7</div><div className="text-muted-foreground">Access & Support</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Data Management Functions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Centralized Storage", desc: "Single source of truth for all inspection records and historical data" },
              { title: "Secure Access", desc: "Role-based permissions, encryption, and audit trails" },
              { title: "Advanced Search", desc: "Find records by asset, date, method, technician, or defect type" },
              { title: "Version Control", desc: "Track changes and maintain complete audit history" },
              { title: "Data Analytics", desc: "Analyze trends, asset condition, and predictive maintenance" },
              { title: "Reporting", desc: "Generate custom reports and compliance documentation" },
              { title: "Integration", desc: "Connect with ERP, CMMS, and other business systems" },
              { title: "Backup & Recovery", desc: "Automatic backups and disaster recovery" }
            ].map((feature) => (
              <Card key={feature.title} className="border-0 shadow-sm hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Master Your Inspection Data</h2>
          <p className="text-muted-foreground mb-8">Centralized, secure, and searchable inspection records for complete asset visibility.</p>
          <Button asChild size="lg">
            <Link to="/contact">Start Free Trial</Link>
          </Button>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
