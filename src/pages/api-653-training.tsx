import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';
import ClusterNav from '@/components/ClusterNav';

import RelatedGuidesBlock from "@/components/RelatedGuidesBlock";
const breadcrumbSchema653Training = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://atlantisndt.com/" },
    { "@type": "ListItem", "position": 2, "name": "Certification Guides", "item": "https://atlantisndt.com/asnt-certification" },
    { "@type": "ListItem", "position": 3, "name": "API 653 Certification", "item": "https://atlantisndt.com/api-653-certification" },
    { "@type": "ListItem", "position": 4, "name": "API 653 Training", "item": "https://atlantisndt.com/api-653-training" }
  ]
};

export default function API653Training() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Does Atlantis NDT deliver API 653 inspector certification training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Atlantis does not sell API 653 inspector certification training. API 653 is administered by the American Petroleum Institute through its Individual Certification Programs; candidates prepare through API-authorised training providers. What Atlantis provides is NDT method training to ASNT SNT-TC-1A and ISO 9712, ASNT Level III consulting, and independent inspection data review on API 653-governed storage tanks."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="API 653 Tank Inspector — Exam Guide"
        description="What API 653 covers, the exam structure, and where Atlantis NDT fits: NDT method training and inspection support, not the API 653 credential itself."
        keywords="API 653 certification, tank inspector, aboveground storage tank inspection, API 650, API 651, API 653 exam"
        canonical="https://atlantisndt.com/api-653-training"
        structuredData={{ "@context": "https://schema.org", "@graph": [faqSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              API 653 <span className="gradient-text">Tank Inspector</span> Certification
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              What the API 653 credential covers, who it's for, and how the exam is structured — plus where Atlantis NDT's own NDT training, ASNT Level III consulting and inspection data review fit alongside it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/training">Explore Atlantis NDT Training</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/consulting">ASNT Level III Consulting</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-10">
        <div className="container mx-auto max-w-4xl px-6">
          <Card className="border-0 shadow-sm bg-secondary/20">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Atlantis does not sell API 653 inspector certification training.</strong> API 653 is administered by the American Petroleum Institute through its Individual Certification Programs, and candidates prepare through API-authorised training providers. Atlantis provides NDT method training to ASNT SNT-TC-1A and ISO 9712, outsourced ASNT Level III consulting, and independent inspection data review on API 653-governed storage tanks — see <Link to="/training" className="text-primary hover:underline">NDT training</Link> and <Link to="/consulting" className="text-primary hover:underline">consulting</Link>.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why API 653 Training?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Industry-Required Credential</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">API 653 certification is required for tank inspectors in refineries, storage terminals, and petrochemical facilities.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Recognised Career Step</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">The credential is a common progression point for inspectors and NDT technicians moving into tank evaluation and disposition.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Comprehensive Scope</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Tank design, materials, inspection techniques, and maintenance assessment covered thoroughly.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Complements NDT Certification</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Many inspectors hold both an ASNT/ISO 9712 method certification and an API credential — Atlantis trains the former.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">NDT Training and Consulting From Atlantis</h2>
          <p className="text-muted-foreground mb-8">Atlantis trains NDT methods to ASNT SNT-TC-1A and ISO 9712, and provides outsourced ASNT Level III consulting and inspection data review on API-governed assets — not the API 653 credential itself.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/training">View NDT Training</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <h3 className="text-xl font-semibold mb-4">Related Reading</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/ndt-training-houston" className="text-primary hover:underline">NDT Training — Houston, TX →</Link>
            <Link to="/ndt-training-dubai" className="text-primary hover:underline">NDT Training — Dubai / Abu Dhabi →</Link>
            <Link to="/ndt-training-saudi-arabia" className="text-primary hover:underline">NDT Training — Saudi Arabia →</Link>
            <Link to="/ndt-training-singapore" className="text-primary hover:underline">NDT Training — Singapore →</Link>
            <Link to="/ndt-training-india" className="text-primary hover:underline">NDT Training — India →</Link>
            <Link to="/ndt-training-online" className="text-primary hover:underline">NDT Training — Online →</Link>
            <Link to="/api-653-certification" className="text-primary hover:underline">Full API 653 Certification Guide →</Link>
            <Link to="/blog/api-653-tank-inspection-guide" className="text-primary hover:underline">API 653 Tank Inspection Guide →</Link>
            <Link to="/api-510-training" className="text-primary hover:underline">API 510 Pressure Vessel Inspector — Exam Guide →</Link>
          </div>
        </div>
      </section>
      <ClusterNav cluster="api-653" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema653Training) }}
      />
        <RelatedGuidesBlock links={[
              {
                    "title": "API 653 Certification Prep 2026",
                    "href": "/api-653-certification",
                    "description": "Tank inspector exam prep",
                    "icon": "cert"
              },
              {
                    "title": "API 510 Pressure Vessel Inspector — Exam Guide",
                    "href": "/api-510-training",
                    "description": "Pressure vessel inspector exam guide",
                    "icon": "training"
              },
              {
                    "title": "API 570 Piping Inspector — Exam Guide",
                    "href": "/api-570-training",
                    "description": "Process piping inspector exam guide",
                    "icon": "training"
              },
              {
                    "title": "API 653 Tank Inspector Services",
                    "href": "/consulting/api-653-tank-inspector-services",
                    "description": "Bottom-plate RBI + settlement FFS",
                    "icon": "consulting"
              },
              {
                    "title": "Asset Management for Tank Farms",
                    "href": "/erp/cmms-for-inspection-companies",
                    "description": "Tank interval tracking + RBI integration",
                    "icon": "erp"
              },
              {
                    "title": "Digital Twin for Storage Tanks",
                    "href": "/digital-twins/storage-tank",
                    "description": "Bottom-plate corrosion overlay",
                    "icon": "dt"
              }
        ]} />

        <ContactDetails />
    </div>
  );
}
