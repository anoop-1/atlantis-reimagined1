import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function NDTTrainingPhiladelphia() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "NDT Training & Certification in Philadelphia, PA",
    "description": "Professional ASNT SNT-TC-1A Level I, II, III NDT training in Philadelphia. Manufacturing and refining focus. All methods: UT, RT, MT, PT, ET, VT, PAUT, TOFD.",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "areaServed": { "@type": "City", "name": "Philadelphia, PA" },
    "courseMode": "onsite"
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT Training in Philadelphia, PA | ASNT Level I-III Certification | Atlantis NDT"
        description="Professional NDT training, consulting, and certification in Philadelphia. ASNT SNT-TC-1A Level I, II, III. Manufacturing and refining focus. Enroll today!"
        keywords="NDT training philadelphia, ASNT certification philadelphia, NDT courses philadelphia, NDT consulting philadelphia"
        canonical="https://atlantisndt.com/ndt-training-philadelphia"
        structuredData={{ "@context": "https://schema.org", "@graph": [courseSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT Training in <span className="gradient-text">Philadelphia, PA</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Professional ASNT SNT-TC-1A Level I, II, and III NDT training in Philadelphia. Manufacturing and refining focus. All NDT methods. Hands-on labs. 95% pass rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">Enroll Now</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/training-usa">View All USA Programs</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-primary mb-2">95%</div><div className="text-muted-foreground">Pass Rate</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">8</div><div className="text-muted-foreground">NDT Methods</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">400+</div><div className="text-muted-foreground">Trained Technicians</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">15+</div><div className="text-muted-foreground">Years Experience</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Manufacturing and refining focus NDT Training in Philadelphia</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Expert Instruction</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">ASNT Level III certified instructors with 15+ years of industry experience.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>All NDT Methods</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">UT, RT, MT, PT, ET, VT, PAUT, TOFD—comprehensive NDT curriculum.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Hands-On Labs</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Practice with industry-standard equipment and real-world test specimens.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>ASNT Compliant</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">All training meets ASNT SNT-TC-1A standards and requirements.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Complete NDT Solutions */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8">Complete NDT Solutions in Philadelphia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/ndt-consulting-philadelphia" className="bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">NDT Consulting</h3>
              <p className="text-muted-foreground text-sm">Expert ASNT Level III consulting, procedure development, quality assurance, and on-site technical support for Philadelphia industries.</p>
            </Link>
            <Link to="/digital-twins" className="bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">Digital Twin Technology</h3>
              <p className="text-muted-foreground text-sm">Real-time asset monitoring, predictive maintenance, and 3D visualization for industrial inspection management.</p>
            </Link>
            <Link to="/intelligent-reporting-software" className="bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">NDT Reporting Software</h3>
              <p className="text-muted-foreground text-sm">Automated inspection reporting, data management, and compliance tracking for NDT service providers.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your NDT Training in Philadelphia</h2>
          <p className="text-muted-foreground mb-8">Enroll today and advance your NDT career.</p>
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

      <ContactDetails />
    </div>
  );
}
