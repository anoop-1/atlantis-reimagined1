#!/bin/bash

create_industry_page() {
  local slug=$1
  local title=$2
  local icon=$3
  local description=$4
  local sectors=$5

cat > "/sessions/admiring-relaxed-turing/mnt/atlantis-reimagined1/src/pages/${slug}.tsx" << EOF
import { motion } from 'framer-motion';
import { $icon, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function ${slug}() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "$title NDT Services",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "serviceType": "Non-Destructive Testing",
    "description": "Professional $title NDT inspection and testing services. Certified inspectors, advanced equipment, industry compliance."
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="$title NDT Services | Inspection & Testing | Atlantis NDT"
        description="Professional $title NDT inspection services. Certified inspectors. Advanced equipment. Industry-compliant testing. $description"
        keywords="$title NDT services, $title inspection, NDT testing $title"
        canonical="https://atlantisndt.com/${slug}"
        structuredData={{ "@context": "https://schema.org", "@graph": [serviceSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              $title <span className="gradient-text">NDT Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              $description Professional inspection services. Certified inspectors. Advanced NDT equipment. Industry-compliant testing and reporting.
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
          <h2 className="text-3xl font-bold mb-12 text-center">$title Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {$sectors.map((sector) => (
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
          <h2 className="text-3xl font-bold mb-4">Get Professional $title NDT Services</h2>
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
EOF

  echo "Created ${slug}.tsx"
}

# Create all industry pages
create_industry_page "aerospace-ndt-services" "Aerospace NDT Services" "Plane" "Aircraft and engine inspection" "[{title: 'Aircraft Inspection', description: 'Fastener holes, composite inspection, structural assessment'}, {title: 'Engine Components', description: 'Turbine blade inspection, bearing surfaces, critical parts'}, {title: 'Landing Gear', description: 'Magnetic particle testing, crack detection, structural integrity'}]"

create_industry_page "power-generation-ndt-services" "Power Generation NDT Services" "Zap" "Turbine, boiler, and power plant inspection" "[{title: 'Turbine Inspection', description: 'Blade inspection, rotor assessment, structural monitoring'}, {title: 'Boiler Inspection', description: 'Tube inspection, weld assessment, corrosion monitoring'}, {title: 'Generator Components', description: 'Rotor inspection, bearing assessment, critical equipment'}]"

create_industry_page "petrochemical-ndt-services" "Petrochemical NDT Services" "Droplet" "Refinery and plant inspection services" "[{title: 'Process Equipment', description: 'Reactor vessels, heat exchangers, critical equipment'}, {title: 'Piping Systems', description: 'API 570 inspection, corrosion assessment, integrity verification'}, {title: 'Structural Assessment', description: 'Weld inspection, equipment mounting, safety systems'}]"

create_industry_page "pipeline-inspection-services" "Pipeline Inspection Services" "Zap" "In-line and external pipeline testing" "[{title: 'In-Line Inspection', description: 'ILI support, defect detection, data analysis'}, {title: 'External Inspection', description: 'UT thickness measurement, corrosion mapping, assessment'}, {title: 'Weld Inspection', description: 'Fabrication and in-service weld testing, defect evaluation'}]"

create_industry_page "marine-offshore-ndt-services" "Marine & Offshore NDT Services" "Droplet" "Hull and subsea component inspection" "[{title: 'Hull Inspection', description: 'Ultrasonic thickness measurement, corrosion assessment'}, {title: 'Subsea Equipment', description: 'Manifold inspection, pipeline assessment, structural integrity'}, {title: 'Structural Welds', description: 'Weld quality assurance, fatigue crack detection'}]"

create_industry_page "nuclear-ndt-services" "Nuclear NDT Services" "Zap" "Reactor and safety component inspection" "[{title: 'Reactor Components', description: 'Pressure vessel inspection, weld assessment, critical systems'}, {title: 'Safety Systems', description: 'Backup equipment inspection, system integrity verification'}, {title: 'Regulatory Compliance', description: 'NRC and industry standard compliance, documentation'}]"

create_industry_page "construction-ndt-services" "Construction NDT Services" "AlertCircle" "Structural and weld inspection services" "[{title: 'Structural Welds', description: 'Bridge, building, and infrastructure weld inspection'}, {title: 'Foundation Assessment', description: 'Concrete inspection, structural integrity evaluation'}, {title: 'Quality Assurance', description: 'Fabrication testing, installation verification, compliance'}]"

echo "All industry vertical pages created successfully!"
