#!/bin/bash

# NDT Reporting Software Comparison
cat > /sessions/admiring-relaxed-turing/mnt/atlantis-reimagined1/src/pages/ndt-reporting-software-comparison.tsx << 'EOF'
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
EOF

# Digital Twin NDT Software
cat > /sessions/admiring-relaxed-turing/mnt/atlantis-reimagined1/src/pages/digital-twin-ndt-software.tsx << 'EOF'
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
EOF

# NDT Software Features Guide
cat > /sessions/admiring-relaxed-turing/mnt/atlantis-reimagined1/src/pages/ndt-software-features.tsx << 'EOF'
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
EOF

# NDT Data Management
cat > /sessions/admiring-relaxed-turing/mnt/atlantis-reimagined1/src/pages/ndt-data-management.tsx << 'EOF'
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
EOF

echo "All software and data management pages created successfully!"
