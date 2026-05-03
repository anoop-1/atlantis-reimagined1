import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';
import ClusterNav from '@/components/ClusterNav';

const breadcrumbSchema570Training = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://atlantisndt.com/" },
    { "@type": "ListItem", "position": 2, "name": "Certification Guides", "item": "https://atlantisndt.com/asnt-certification" },
    { "@type": "ListItem", "position": 3, "name": "API 570 Certification", "item": "https://atlantisndt.com/api-570-certification" },
    { "@type": "ListItem", "position": 4, "name": "API 570 Training", "item": "https://atlantisndt.com/api-570-training" }
  ]
};

export default function API570Training() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "API 570 Piping Inspector Training & Certification",
    "description": "Professional API 570 Piping Inspector training. ASME B31 code compliance. In-service inspection. Risk-based inspection. Hands-on labs.",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "courseMode": "onsite",
    "occupationalCategory": "Piping Inspector",
    "educationalCredentialAwarded": "API 570 Certification"
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="API 570 Piping Inspector Training & Certification | Atlantis NDT"
        description="Professional API 570 Piping Inspector training. ASME B31 code compliance. In-service inspection. Risk-based inspection (RBI). Hands-on labs. Enroll today!"
        keywords="API 570 training, API 570 certification, piping inspector training, ASME B31 certification, API 570 course"
        canonical="https://atlantisndt.com/api-570-training"
        structuredData={{ "@context": "https://schema.org", "@graph": [courseSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              API 570 <span className="gradient-text">Piping Inspector</span> Training
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive training for ASME B31 piping code compliance. In-service inspection and integrity assessment. Risk-based inspection (RBI) methodology. Essential certification for refineries, petrochemical plants, and oil & gas operations.
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
            <div><div className="text-4xl font-bold text-primary mb-2">ASME B31</div><div className="text-muted-foreground">Code Compliant</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">600+</div><div className="text-muted-foreground">Certified Inspectors</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">$85K-$130K</div><div className="text-muted-foreground">Average Salary</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why API 570 Training?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Industry-Required Credential</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">API 570 is mandatory for piping inspectors in refineries, petrochemical plants, and oil & gas companies worldwide.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Career Advancement</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">API 570 certified inspectors earn $85,000-$130,000+ annually. Senior and consulting roles exceed $150,000/year.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Hands-On Training</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Practice with real piping systems, fittings, and inspection equipment used in industry.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Expert Instruction</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Learn from instructors with 20+ years of piping inspection and API 570 expertise.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Course Topics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-base">Piping Systems & Standards</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>ASME B31.3 Process Piping</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>ASME B31.1 Power Piping</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Piping materials and design</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Thickness measurement methods</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-base">Inspection & Assessment</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>In-service inspection techniques</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Corrosion and erosion assessment</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Risk-based inspection (RBI)</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>NDT method application</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Advance Your Piping Inspection Career</h2>
          <p className="text-muted-foreground mb-8">API 570 certification is your gateway to high-demand roles in refineries, petrochemical plants, and oil & gas companies.</p>
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

      <ClusterNav cluster="api-570" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema570Training) }}
      />

      <ContactDetails />
    </div>
  );
}
