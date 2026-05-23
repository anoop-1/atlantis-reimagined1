import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, CheckCircle, TrendingUp, Users, Briefcase, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { RelatedCityProducts } from '@/components/RelatedProducts';
import { Link } from 'react-router-dom';

export default function NDTTrainingLosAngeles() {
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "NDT Training & Certification in Los Angeles, CA",
    "description": "Professional ASNT SNT-TC-1A Level I, II, and III NDT training in Los Angeles. Aerospace focus. All methods: UT, RT, MT, PT, ET, VT, PAUT, TOFD.",
    "provider": {
      "@type": "Organization",
      "name": "Atlantis NDT",
      "url": "https://atlantisndt.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Los Angeles, California"
    },
    "courseMode": "onsite"
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT Training in Los Angeles, CA | ASNT Level I-III Certification | Aerospace Focus | Atlantis NDT"
        description="Professional NDT training, consulting, and certification in Los Angeles. ASNT SNT-TC-1A Level I, II, III. Aerospace focus. Expert consulting. Enroll today!"
        keywords="NDT training Los Angeles, ASNT certification Los Angeles, NDT courses Los Angeles CA, aerospace NDT training, NAS410 certification, ultrasonic testing Los Angeles, radiographic testing Los Angeles, NDT consulting Los Angeles"
        canonical="https://atlantisndt.com/ndt-training-los-angeles"
        structuredData={{ "@context": "https://schema.org", "@graph": [courseSchema] }}
      />

      <motion.section
        className="py-20 bg-gradient-to-r from-primary/10 to-accent/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <MapPin className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Los Angeles, California</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT Training & Certification in <span className="gradient-text">Los Angeles</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Professional ASNT SNT-TC-1A and NAS410 Level I, II, and III NDT training in Los Angeles. Aerospace and defense focus. All methods including PAUT and TOFD. 95% pass rate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                  Enroll Now
                </a>
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
            <div><div className="text-4xl font-bold text-primary mb-2">450+</div><div className="text-muted-foreground">Trained Technicians</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">15+</div><div className="text-muted-foreground">Years Experience</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Aerospace NDT Training in Los Angeles</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Los Angeles aerospace cluster includes major defense contractors, aircraft manufacturers, and component suppliers.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">Aerospace-Focused Curriculum</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Training aligned with NAS410 aerospace standards and OEM requirements.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">Advanced Methods</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">PAUT and TOFD training for critical aerospace component inspection.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">Expert Instructors</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Level III certified instructors with aerospace manufacturing experience.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle className="text-lg">Strong Job Market</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Los Angeles aerospace jobs average $70,000-$95,000 annually for Level II technicians.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">NDT Methods & Courses</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { method: "Ultrasonic Testing (UT)", desc: "Fundamental aerospace NDT method", apps: "Fastener holes, laminate detection, thickness" },
              { method: "Radiographic Testing (RT)", desc: "Critical for weld qualification", apps: "Weld inspection, structural assessment" },
              { method: "Magnetic Particle (MT)", desc: "Fast surface and subsurface inspection", apps: "Fasteners, landing gear, structural parts" },
              { method: "Liquid Penetrant (PT)", desc: "Highly sensitive to surface defects", apps: "Castings, forgings, critical components" },
              { method: "Phased Array UT (PAUT)", desc: "Advanced ultrasonic method", apps: "Complex weld inspection, structural scanning" },
              { method: "TOFD", desc: "Precise sizing capability", apps: "Critical infrastructure, weld qualification" }
            ].map((course, idx) => (
              <Card key={idx} className="h-full hover:shadow-lg transition border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{course.method}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{course.desc}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground"><strong>Applications:</strong> {course.apps}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Complete NDT Solutions */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8">Complete NDT Solutions in Los Angeles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/ndt-consulting-los-angeles" className="bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">NDT Consulting</h3>
              <p className="text-muted-foreground text-sm">Expert ASNT Level III consulting, procedure development, quality assurance, and on-site technical support for Los Angeles industries.</p>
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
          <h2 className="text-3xl font-bold mb-4">Start Your Aerospace NDT Career in Los Angeles</h2>
          <p className="text-muted-foreground mb-8">Enroll today and advance your career in aerospace NDT.</p>
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

      <section className="py-8 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-6xl px-6">
          <RelatedCityProducts currentProduct="training" citySlug="los-angeles" city="Los Angeles" />
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
