import { motion } from 'framer-motion';
import { Settings, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function NDTSoftwareFeatures() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NDT Software Features Guide",
    "description": "Essential features to look for in NDT software. Inspection management, reporting, compliance, integration, analytics.",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" }
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT Software Features Guide | What to Look For in 2026 | Atlantis NDT"
        description="Complete guide to essential NDT software features. Inspection management, automated reporting, compliance tools, data analytics, integration capabilities."
        keywords="NDT software features, inspection management software, NDT data management, NDT compliance software"
        canonical="https://atlantisndt.com/ndt-software-features"
        structuredData={{ "@context": "https://schema.org", "@graph": [softwareSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT Software Features <span className="gradient-text">Guide 2026</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Complete guide to essential NDT software features. What to look for when selecting an inspection management platform for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Download Guide</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Essential NDT Software Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Inspection Module", features: ["Data capture", "Real-time entry", "Photo/video", "Defect tracking"] },
              { title: "Reporting Tools", features: ["Auto-generation", "Custom templates", "Compliance docs", "Multi-format export"] },
              { title: "Data Management", features: ["Centralized database", "Version control", "Archive system", "Search/retrieval"] },
              { title: "Analytics", features: ["Trend analysis", "KPI dashboards", "Risk assessment", "Reporting"] },
              { title: "Compliance", features: ["Audit trails", "Certification mgmt", "Standards mapping", "Documentation"] },
              { title: "Integration", features: ["ERP connectivity", "API access", "IoT support", "Legacy bridges"] }
            ].map((category) => (
              <Card key={category.title} className="border-0 shadow-sm hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="text-base">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Make the Right Software Choice</h2>
          <p className="text-muted-foreground mb-8">Atlantis can help evaluate and implement the right NDT software for your needs.</p>
          <Button asChild size="lg">
            <Link to="/contact">Get Expert Guidance</Link>
          </Button>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
