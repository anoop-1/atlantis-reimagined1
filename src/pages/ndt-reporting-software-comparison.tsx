import { motion } from 'framer-motion';
import { FileText, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function NDTReportingSoftwareComparison() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NDT Reporting Software Comparison",
    "description": "Compare NDT reporting software solutions. Automated reports, templates, compliance, data visualization.",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" }
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT Reporting Software Comparison | Best Report Generation Tools | Atlantis NDT"
        description="Compare NDT reporting software. Automated report generation, templates, compliance documentation, data visualization. Expert recommendations."
        keywords="NDT reporting software, inspection report software, automated NDT reports, reporting tools NDT"
        canonical="https://atlantisndt.com/ndt-reporting-software-comparison"
        structuredData={{ "@context": "https://schema.org", "@graph": [softwareSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT Reporting Software <span className="gradient-text">Comparison</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Compare automated reporting solutions for NDT inspections. Templates, compliance, data visualization, and professional documentation tools.
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
            <div><div className="text-4xl font-bold text-primary mb-2">50%</div><div className="text-muted-foreground">Time Saved on Reports</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">100%</div><div className="text-muted-foreground">Compliance Compliant</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">Custom</div><div className="text-muted-foreground">Templates Available</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">Cloud</div><div className="text-muted-foreground">Or On-Premise</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Features of Modern Reporting Software</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Automated Report Generation", desc: "Templates and workflows generate professional reports in minutes" },
              { title: "Compliance & Standards", desc: "Built-in compliance with API, ASME, and ISO standards" },
              { title: "Data Visualization", desc: "Charts, graphs, and visual analysis of inspection data" },
              { title: "Digital Signatures", desc: "Secure electronic signing and audit trails" },
              { title: "Multi-Format Export", desc: "PDF, Word, Excel, and custom formats" },
              { title: "Mobile Capture", desc: "Data entry and photo capture from field devices" }
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
          <h2 className="text-3xl font-bold mb-4">Streamline Your NDT Reporting</h2>
          <p className="text-muted-foreground mb-8">Automated reporting saves time, reduces errors, and ensures compliance.</p>
          <Button asChild size="lg">
            <Link to="/contact">Get Expert Recommendations</Link>
          </Button>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
