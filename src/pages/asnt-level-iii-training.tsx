import { motion } from 'framer-motion';
import { Award, Trophy, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function ASNTLevelIIITraining() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "ASNT Level III Certification Training",
    "description": "Comprehensive ASNT Level III training for technical authority and program leadership. Procedure development, inspection planning, and defect evaluation.",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "courseMode": "onsite",
    "occupationalCategory": "NDT Supervisor/Manager",
    "educationalCredentialAwarded": "ASNT Level III Training Certificate"
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="ASNT Level III Certification Training | Senior NDT Inspector Program | Atlantis NDT"
        description="Professional ASNT Level III training for NDT supervisors and managers. Procedure development, program management, defect evaluation. 95% pass rate. Expert."
        keywords="ASNT Level III training, Level III NDT certification, NDT supervisor training, ASNT Level III exam preparation, NDT management training"
        canonical="https://atlantisndt.com/asnt-level-iii-training"
        structuredData={{ "@context": "https://schema.org", "@graph": [courseSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ASNT <span className="gradient-text">Level III</span> Certification Training
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive training for senior NDT professionals and technical authorities. Procedure development, inspection planning, program management, and defect evaluation. 95% pass rate with expert instructors.
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
            <div><div className="text-4xl font-bold text-primary mb-2">120+</div><div className="text-muted-foreground">Training Hours</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">8</div><div className="text-muted-foreground">NDT Methods</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">300+</div><div className="text-muted-foreground">Level III Trained</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">$100K+</div><div className="text-muted-foreground">Average Salary</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why ASNT Level III?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader className="pb-2"><Trophy className="w-8 h-8 text-primary mb-2" /><CardTitle>Career Peak</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Become a technical authority and senior supervisor. Level III opens doors to management and consulting roles.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader className="pb-2"><Award className="w-8 h-8 text-primary mb-2" /><CardTitle>Leadership Role</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Develop procedures, mentor Level I & II personnel, and lead NDT programs across organizations.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader className="pb-2"><Users className="w-8 h-8 text-primary mb-2" /><CardTitle>Premium Compensation</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Level III inspectors earn $100,000-$180,000+. Consulting roles and senior positions exceed $200,000/year.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">ASNT Level III Curriculum</h2>
          <div className="space-y-4">
            {[
              { method: "Ultrasonic Testing (UT)", desc: "Advanced UT theory, procedure development, and defect evaluation" },
              { method: "Radiographic Testing (RT)", desc: "Advanced RT principles and film interpretation" },
              { method: "Magnetic Particle (MT)", desc: "Advanced MT equipment and technique development" },
              { method: "Liquid Penetrant (PT)", desc: "Advanced PT procedures and sensitivity optimization" },
              { method: "Eddy Current (ET)", desc: "Advanced ET applications and data interpretation" },
              { method: "Visual Testing (VT)", desc: "Advanced visual inspection techniques" },
              { method: "Phased Array UT (PAUT)", desc: "Advanced PAUT inspection planning" },
              { method: "TOFD", desc: "Advanced TOFD applications and sizing" }
            ].map((method, idx) => (
              <Card key={idx} className="border-0 shadow-sm">
                <CardHeader><CardTitle className="text-base">{method.method}</CardTitle></CardHeader>
                <CardContent><p className="text-muted-foreground text-sm">{method.desc}</p></CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Become an NDT Technical Authority</h2>
          <p className="text-muted-foreground mb-8">ASNT Level III certification positions you as a senior technical expert and leader in the NDT field.</p>
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
