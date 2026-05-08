import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';
import ClusterNav from '@/components/ClusterNav';

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
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "API 653 Tank Inspector Training & Certification",
    "description": "Professional API 653 Tank Inspector training. ASME tank code compliance. In-service inspection. Hands-on labs. Essential for refinery and storage facility inspectors.",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "courseMode": "onsite",
    "occupationalCategory": "Tank Inspector",
    "educationalCredentialAwarded": "API 653 Certification"
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="API 653 Training 2026 — Houston, Dubai, Saudi (Jubail/Yanbu), Singapore"
        description="API 653 Aboveground Storage Tank Inspector training in Houston, Dubai, Saudi Arabia (Jubail / Yanbu / Ras Tanura), Singapore, Hyderabad, and online. API 650/651/652 + 571/575/577 + ASME V/IX, 5-day prep, 95% first-attempt pass rate. ADNOC / Saudi Aramco / Petronas approved instructors."
        keywords="API 653 training, API 653 training Saudi Arabia, API 653 training Jubail, API 653 training Yanbu, API 653 training Dubai, API 653 training Singapore, API 653 training India, tank inspector training, aboveground storage tank inspection, API 653 course, API 650, API 651, API 653 exam prep"
        canonical="https://atlantisndt.com/api-653-training"
        structuredData={{ "@context": "https://schema.org", "@graph": [courseSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              API 653 <span className="gradient-text">Tank Inspector</span> Training
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive training for tank inspection and maintenance. ASME tank code compliance. In-service inspection and risk assessment. Essential certification for refineries, petrochemical plants, and storage facilities worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">Enroll Now</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/training">View All Training</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-primary mb-2">40-80</div><div className="text-muted-foreground">Training Hours</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">ASME</div><div className="text-muted-foreground">Code Compliant</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">550+</div><div className="text-muted-foreground">Certified Inspectors</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">$80K-$120K</div><div className="text-muted-foreground">Average Salary</div></div>
          </div>
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
              <CardHeader><CardTitle>Strong Career Prospects</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">API 653 inspectors earn $80,000-$120,000+. Senior roles and consulting exceed $140,000/year.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Comprehensive Curriculum</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Tank design, materials, inspection techniques, and maintenance assessment covered thoroughly.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Expert-Led Training</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Learn from instructors with 20+ years of tank inspection and API 653 experience.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Advance Your Tank Inspection Career</h2>
          <p className="text-muted-foreground mb-8">API 653 certification opens doors in refineries, storage facilities, and major petrochemical companies worldwide.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">Enroll Now</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <h3 className="text-xl font-semibold mb-4">API 653 Training by Location</h3>
          <p className="text-sm text-muted-foreground mb-4">Atlantis NDT runs API 653 Tank Inspector exam prep across all major energy hubs. Saudi Aramco's Jubail and Yanbu refining cities, ADNOC Ruwais terminals, Petronas Pengerang, and Reliance Jamnagar tank farm experience.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-sm">
            <Link to="/ndt-training-houston" className="text-primary hover:underline">API 653 Houston, TX (HQ) →</Link>
            <Link to="/ndt-training-dubai" className="text-primary hover:underline">API 653 Dubai / Abu Dhabi (UAE) →</Link>
            <Link to="/ndt-training-saudi-arabia" className="text-primary hover:underline">API 653 Saudi Arabia (Jubail / Yanbu) →</Link>
            <Link to="/ndt-training-singapore" className="text-primary hover:underline">API 653 Singapore (Jurong) →</Link>
            <Link to="/ndt-training-india" className="text-primary hover:underline">API 653 Hyderabad / Mumbai (India) →</Link>
            <Link to="/ndt-training-online" className="text-primary hover:underline">API 653 Online / Virtual →</Link>
            <Link to="/api-653-certification" className="text-primary hover:underline">Full API 653 Certification Guide →</Link>
            <Link to="/blog/api-653-tank-inspection-guide" className="text-primary hover:underline">API 653 Tank Inspection Guide →</Link>
            <Link to="/api-510-training" className="text-primary hover:underline">API 510 Pressure Vessel Training →</Link>
          </div>
        </div>
      </section>
      <ClusterNav cluster="api-653" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema653Training) }}
      />

      <ContactDetails />
    </div>
  );
}
