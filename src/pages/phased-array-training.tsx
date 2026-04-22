import { motion } from 'framer-motion';
import { Zap, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function PhasedArrayTraining() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Phased Array Ultrasonic Testing (PAUT) Training",
    "description": "Advanced phased array ultrasonic testing (PAUT) training. Electronic beam steering, defect detection and sizing. High-demand specialty certification.",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "courseMode": "onsite",
    "occupationalCategory": "Advanced NDT Technician"
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Phased Array Ultrasonic Testing (PAUT) Training | Advanced NDT Certification | Atlantis NDT"
        description="Professional PAUT training for advanced ultrasonic inspection. Electronic beam steering, complex weld inspection, defect detection and sizing. Enroll today!"
        keywords="PAUT training, phased array ultrasonic training, PAUT certification, advanced UT training, phased array testing"
        canonical="https://atlantisndt.com/phased-array-training"
        structuredData={{ "@context": "https://schema.org", "@graph": [courseSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Phased Array <span className="gradient-text">Ultrasonic Testing (PAUT)</span> Training
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Advanced phased array ultrasonic testing training for complex weld inspection, defect detection, and sizing. High-demand specialty with premium compensation. Electronic beam steering and advanced data interpretation.
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
            <div><div className="text-4xl font-bold text-primary mb-2">Advanced</div><div className="text-muted-foreground">Specialty</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">250+</div><div className="text-muted-foreground">Trained Specialists</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">$90K-$140K</div><div className="text-muted-foreground">Average Salary</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why PAUT Training?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader className="pb-2"><Zap className="w-8 h-8 text-primary mb-2" /><CardTitle>High-Demand Specialty</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">PAUT technicians are in critical shortage. Aerospace, energy, and manufacturing sectors actively recruit PAUT specialists.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Premium Compensation</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">PAUT specialists earn $90,000-$140,000+ with significant overtime and travel allowances common.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Advanced Capabilities</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Electronic beam steering enables complex weld inspection, sizing, and data interpretation impossible with conventional UT.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Hands-On Equipment</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Train on actual PAUT instruments and software used by aerospace and energy companies worldwide.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">PAUT Training Topics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-base">PAUT Theory & Principles</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Phased array probe design</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Electronic beam steering</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Focal laws and parametric imaging</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Weld scanning techniques</span></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-sm">
              <CardHeader><CardTitle className="text-base">Practical Applications</CardTitle></CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Complex weld inspection</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Defect detection & sizing</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Data analysis & interpretation</span></li>
                  <li className="flex items-start gap-2 text-sm"><CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /><span>Hands-on instrument operation</span></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a PAUT Specialist</h2>
          <p className="text-muted-foreground mb-8">High-demand specialty with excellent career prospects in aerospace, energy, and manufacturing sectors.</p>
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
