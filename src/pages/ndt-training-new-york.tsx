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

export default function NDTTrainingNewYork() {
  const courses = [
    {
      method: "Ultrasonic Testing (UT)",
      levels: ["Level I", "Level II", "Level III"],
      duration: "40-120 hrs",
      description: "Essential for pressure vessel and infrastructure inspection",
      applications: "Weld inspection, thickness measurement, structural assessment"
    },
    {
      method: "Radiographic Testing (RT)",
      levels: ["Level I", "Level II", "Level III"],
      duration: "40-120 hrs",
      description: "Critical for construction and infrastructure projects",
      applications: "Weld qualification, component inspection, safety assurance"
    },
    {
      method: "Magnetic Particle Testing (MT)",
      levels: ["Level I", "Level II", "Level III"],
      duration: "16-80 hrs",
      description: "Essential for ferrous material inspection",
      applications: "Bridge inspection, equipment maintenance, quality control"
    },
    {
      method: "Liquid Penetrant Testing (PT)",
      levels: ["Level I", "Level II", "Level III"],
      duration: "16-80 hrs",
      description: "Critical for surface defect detection",
      applications: "Aerospace components, casting inspection, equipment assessment"
    },
    {
      method: "Eddy Current Testing (ET)",
      levels: ["Level I", "Level II", "Level III"],
      duration: "40-120 hrs",
      description: "Advanced testing for conductive materials",
      applications: "Tubing inspection, fatigue crack detection, corrosion monitoring"
    },
    {
      method: "Phased Array UT (PAUT)",
      levels: ["Level I", "Level II"],
      duration: "40-80 hrs",
      description: "Advanced ultrasonic for complex geometries",
      applications: "Infrastructure welds, structural scanning, advanced defect detection"
    }
  ];

  const industries = [
    {
      icon: TrendingUp,
      title: "Infrastructure & Construction",
      description: "New York's ongoing infrastructure projects, bridge rehabilitation, and building construction require certified NDT technicians for structural assessment and weld inspection."
    },
    {
      icon: Award,
      title: "Manufacturing & Fabrication",
      description: "Major fabrication shops throughout New York Metro require Level II/III certified technicians for quality assurance and production inspection."
    },
    {
      icon: Briefcase,
      title: "Aerospace & Transportation",
      description: "Regional aerospace manufacturers and transportation companies need certified NDT professionals for component testing and maintenance."
    },
    {
      icon: Users,
      title: "Power Generation",
      description: "Utility companies throughout the Northeast employ NDT technicians for turbine inspection, boiler assessment, and equipment reliability."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What NDT training is available in New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atlantis NDT offers comprehensive ASNT Level I, II, and III training in UT, RT, MT, PT, ET, VT, and PAUT in New York City and surrounding areas."
        }
      },
      {
        "@type": "Question",
        "name": "Is ASNT certification required in New York?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ASNT SNT-TC-1A certification is required by nearly all major employers in New York's construction, manufacturing, aerospace, and power generation sectors."
        }
      }
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "NDT Training & Certification in New York",
    "description": "Professional ASNT SNT-TC-1A Level I, II, and III NDT training in New York. All methods: UT, RT, MT, PT, ET, VT, PAUT. Construction and infrastructure focus.",
    "provider": {
      "@type": "Organization",
      "name": "Atlantis NDT",
      "url": "https://atlantisndt.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "New York, New York"
    },
    "courseMode": "onsite"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [courseSchema, faqSchema]
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT Training in New York | ASNT Level I-III Certification | Atlantis NDT"
        description="Professional NDT training, consulting, and certification in New York. ASNT SNT-TC-1A Level I, II, III courses. All methods. Expert consulting. Enroll today!"
        keywords="NDT training New York, ASNT certification New York, NDT courses New York, ultrasonic testing New York, radiographic testing New York, level II certification New York, level III NDT New York, ndt technician training New York, NDT consulting New York"
        canonical="https://atlantisndt.com/ndt-training-new-york"
        structuredData={structuredData}
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
              <span className="text-sm font-medium uppercase tracking-wide">New York</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT Training & Certification in <span className="gradient-text">New York</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Professional ASNT SNT-TC-1A Level I, II, and III NDT training in New York. All methods. Hands-on labs with industry equipment. 95% pass rate.
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
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Pass Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">6</div>
              <div className="text-muted-foreground">NDT Methods</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">400+</div>
              <div className="text-muted-foreground">Trained Technicians</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
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
            <h2 className="text-3xl font-bold mb-4">Why Train in New York?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              New York's diverse industrial and construction sectors create strong demand for certified NDT professionals.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Strong Job Market</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">New York's infrastructure and construction sectors consistently hire certified NDT technicians. Average salary: $55,000-$75,000/year.</p>
              </CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">ASNT & API Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">All training meets ASNT SNT-TC-1A and relevant API standards for New York's industrial sectors.</p>
              </CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Hands-On Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Practice with industry equipment and real-world components used in New York projects.</p>
              </CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Expert Instructors</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">Learn from ASNT Level III certified professionals with 15+ years of field experience.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">NDT Courses in New York</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All courses comply with ASNT SNT-TC-1A standards.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <Card key={course.method} className="h-full hover:shadow-lg transition border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{course.method}</CardTitle>
                  <p className="text-sm text-muted-foreground mt-2">{course.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="text-xs font-semibold mb-2">Levels:</div>
                    <div className="flex gap-2">
                      {course.levels.map((level) => (
                        <Badge key={level} variant="outline">{level}</Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold mb-2">Applications:</div>
                    <p className="text-sm text-muted-foreground">{course.applications}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
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
            <h2 className="text-3xl font-bold mb-4">Industries Hiring in New York</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <Card key={industry.title} className="h-full hover:shadow-lg transition border-0 shadow-sm">
                <CardHeader className="pb-2">
                  <industry.icon className="w-8 h-8 text-primary mb-2" />
                  <CardTitle className="text-lg">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Your Certification Path</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { step: 1, title: "Enroll", desc: "Apply and schedule your training course" },
              { step: 2, title: "Theory Course", desc: "Classroom instruction per ASNT standards" },
              { step: 3, title: "Hands-On Labs", desc: "Practical training with industry equipment" },
              { step: 4, title: "Written Exam", desc: "ASNT-format examination" },
              { step: 5, title: "Practical Exam", desc: "Demonstrate hands-on proficiency" },
              { step: 6, title: "Certification", desc: "Receive your ASNT certificate" }
            ].map((item) => (
              <motion.div
                key={item.step}
                className="flex gap-4 items-start"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {item.step}
                </div>
                <div className="bg-background p-4 rounded-lg shadow-sm flex-1">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete NDT Solutions */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-center mb-8">Complete NDT Solutions in New York</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/ndt-consulting-new-york" className="bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2">NDT Consulting</h3>
              <p className="text-muted-foreground text-sm">Expert ASNT Level III consulting, procedure development, quality assurance, and on-site technical support for New York industries.</p>
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
          <h2 className="text-3xl font-bold mb-4">Start Your NDT Training in New York</h2>
          <p className="text-muted-foreground mb-8 text-lg">Enroll today and begin your path to NDT certification.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                Enroll Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Request Information</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white border-t border-slate-200">
        <div className="container mx-auto max-w-6xl px-6">
          <RelatedCityProducts currentProduct="training" citySlug="new-york" city="New York" />
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
