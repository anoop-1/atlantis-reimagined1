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

export default function NDTTrainingHouston() {
  const courses = [
    {
      method: "Ultrasonic Testing (UT)",
      levels: ["Level I", "Level II", "Level III"],
      duration: "40-120 hrs",
      description: "Industry standard for pipeline and pressure vessel inspection",
      applications: "Pipeline integrity, weld inspection, thickness measurement"
    },
    {
      method: "Radiographic Testing (RT)",
      levels: ["Level I", "Level II", "Level III"],
      duration: "40-120 hrs",
      description: "Essential for subsurface defect detection in oil & gas",
      applications: "Weld qualification, component inspection, safety assurance"
    },
    {
      method: "Magnetic Particle Testing (MT)",
      levels: ["Level I", "Level II", "Level III"],
      duration: "16-80 hrs",
      description: "Fast, cost-effective surface and near-surface inspection",
      applications: "Valve inspection, equipment maintenance, quality control"
    },
    {
      method: "Liquid Penetrant Testing (PT)",
      levels: ["Level I", "Level II", "Level III"],
      duration: "16-80 hrs",
      description: "Highly sensitive to surface-breaking defects",
      applications: "Aerospace components, castings, forgings, equipment inspection"
    },
    {
      method: "Eddy Current Testing (ET)",
      levels: ["Level I", "Level II", "Level III"],
      duration: "40-120 hrs",
      description: "Advanced testing for conductive materials",
      applications: "Tubing inspection, fatigue crack detection, corrosion monitoring"
    },
    {
      method: "Visual Testing (VT)",
      levels: ["Level I", "Level II", "Level III"],
      duration: "16-80 hrs",
      description: "Foundation for all NDT methods",
      applications: "Initial inspection, surface assessment, process verification"
    },
    {
      method: "Phased Array UT (PAUT)",
      levels: ["Level I", "Level II"],
      duration: "40-80 hrs",
      description: "Advanced ultrasonic for complex geometries",
      applications: "Weld inspection, pipeline scanning, advanced defect detection"
    },
    {
      method: "Time of Flight Diffraction (TOFD)",
      levels: ["Level I", "Level II"],
      duration: "40 hrs",
      description: "Precise sizing for critical infrastructure",
      applications: "Pipeline welds, pressure vessels, regulatory compliance"
    }
  ];

  const industries = [
    {
      icon: TrendingUp,
      title: "Oil & Gas",
      description: "Houston's energy corridor demands certified NDT technicians for pipeline integrity, refinery operations, and offshore platform maintenance. Average salary: $65,000-$85,000/year."
    },
    {
      icon: Award,
      title: "Petrochemical Manufacturing",
      description: "Major petrochemical plants in Greater Houston require continuous NDT support for equipment inspection, preventive maintenance, and regulatory compliance."
    },
    {
      icon: Briefcase,
      title: "Aerospace & Aviation",
      description: "Houston aerospace contractors need Level II/III certified technicians for aircraft component testing and maintenance."
    },
    {
      icon: Users,
      title: "Fabrication & Construction",
      description: "Structural steel and vessel fabrication plants throughout Houston require certified NDT personnel for quality assurance and weld inspection."
    }
  ];

  const whyHouston = [
    {
      title: "Energy Hub Job Market",
      description: "Houston's oil & gas sector creates consistent demand for certified NDT technicians. 500+ companies in the region hire NDT professionals annually."
    },
    {
      title: "Atlantis NDT Houston Center",
      description: "Our dedicated Houston training facility offers flexible scheduling, hands-on labs with industry equipment, and direct placement assistance."
    },
    {
      title: "ASNT & API Compliance",
      description: "All training meets ASNT SNT-TC-1A and API standards. Many courses include specialized API 570/653 modules relevant to Houston's refinery sector."
    },
    {
      title: "Hands-On Practical Training",
      description: "Practice on actual oil & gas equipment, pressure vessels, and pipeline sections used in real-world inspections."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What NDT training is available in Houston, TX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Atlantis NDT offers comprehensive ASNT Level I, II, and III training in all NDT methods including UT, RT, MT, PT, ET, VT, PAUT, and TOFD in Houston."
        }
      },
      {
        "@type": "Question",
        "name": "Is ASNT certification recognized in Houston?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, ASNT SNT-TC-1A certification is required by virtually all major employers in Houston's oil & gas, petrochemical, and aerospace sectors."
        }
      },
      {
        "@type": "Question",
        "name": "What jobs are available after NDT training in Houston?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Certified NDT technicians in Houston work in oil & gas operations, refineries, petrochemical plants, aerospace maintenance, and fabrication shops. Average starting salary is $55,000-$65,000 annually."
        }
      }
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "NDT Training & Certification in Houston, TX",
    "description": "Professional ASNT SNT-TC-1A Level I, II, and III NDT training in Houston. All methods: UT, RT, MT, PT, ET, VT, PAUT, TOFD. Hands-on labs with industry equipment. API 570/653 modules available.",
    "provider": {
      "@type": "Organization",
      "name": "Atlantis NDT",
      "url": "https://atlantisndt.com"
    },
    "areaServed": {
      "@type": "City",
      "name": "Houston, Texas"
    },
    "courseMode": "onsite",
    "occupationalCategory": "Non-Destructive Testing Inspector"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [courseSchema, faqSchema]
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT Training Houston 2026 — 95% Pass Rate, ASNT/API Approved, 5 Day Course | Atlantis NDT"
        description="ASNT Level III-led NDT training in Houston. UT/RT/MT/PT/VT/ET + PAUT/TOFD methods. 95% pass rate. 500+ Gulf Coast technicians trained. Enroll: enroll@atlantisndt.com"
        keywords="NDT training Houston, ASNT certification Houston, NDT courses Houston TX, ultrasonic testing training Houston, radiographic testing Houston, pipeline inspection training, oil gas NDT Houston, Level II certification Houston, Level III NDT Houston, ndt technician training Houston"
        canonical="https://atlantisndt.com/ndt-training-houston"
        structuredData={structuredData}
      />

      {/* Hero Section */}
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
              <span className="text-sm font-medium uppercase tracking-wide">Houston, Texas</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT Training & Certification in <span className="gradient-text">Houston</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Professional ASNT SNT-TC-1A Level I, II, and III NDT training in Houston. All six methods plus advanced PAUT and TOFD. Hands-on labs with real oil & gas equipment. 95% pass rate.
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

      {/* Stats Section */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-muted-foreground">Pass Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">8</div>
              <div className="text-muted-foreground">NDT Methods</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Trained Technicians</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Train in Houston */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Why Train in Houston?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Houston is the NDT training and employment hub for North America's energy sector.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {whyHouston.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">NDT Courses in Houston</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All courses comply with ASNT SNT-TC-1A standards. Flexible scheduling. Hands-on labs with industry equipment.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.method}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
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
                    <div className="mb-4">
                      <div className="text-xs font-semibold mb-2">Duration:</div>
                      <p className="text-sm text-muted-foreground">{course.duration}</p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold mb-2">Applications:</div>
                      <p className="text-sm text-muted-foreground">{course.applications}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Industries Hiring NDT Technicians in Houston</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Houston's diverse industrial sector creates consistent high-demand for certified NDT professionals.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <industry.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{industry.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{industry.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Path */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Your Certification Path</h2>
            <p className="text-muted-foreground">Complete the steps below to earn your ASNT SNT-TC-1A certification.</p>
          </motion.div>
          <div className="space-y-4">
            {[
              { step: 1, title: "Enroll", desc: "Apply and schedule your training course" },
              { step: 2, title: "Theory Course", desc: "40-120 hours of classroom instruction per ASNT standards" },
              { step: 3, title: "Hands-On Labs", desc: "Practical training with industry equipment" },
              { step: 4, title: "Written Exam", desc: "ASNT-format examination (70% minimum pass)" },
              { step: 5, title: "Practical Exam", desc: "Demonstrate hands-on proficiency" },
              { step: 6, title: "Vision Test", desc: "Eye exam per ASNT SNT-TC-1A requirements" },
              { step: 7, title: "Certification", desc: "Receive your ASNT SNT-TC-1A certificate" }
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

      {/* Salary & Career */}
      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Salary & Career Outlook in Houston</h2>
            <p className="text-muted-foreground">Houston offers competitive compensation for certified NDT professionals.</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-lg">NDT Level I</CardTitle>
                <div className="text-3xl font-bold text-primary">$45K-$55K</div>
                <p className="text-muted-foreground text-sm">per year</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Entry-level technician assisting with inspections under Level II supervision.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition border-primary/20">
              <CardHeader>
                <CardTitle className="text-lg">NDT Level II</CardTitle>
                <div className="text-3xl font-bold text-primary">$60K-$80K</div>
                <p className="text-muted-foreground text-sm">per year</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Independent inspection technician. Most common position in Houston's energy sector.</p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-sm hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="text-lg">NDT Level III</CardTitle>
                <div className="text-3xl font-bold text-primary">$85K-$120K</div>
                <p className="text-muted-foreground text-sm">per year</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Senior technical authority. High demand in Houston consulting and major oil companies.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Related Services in Houston</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link to="/ndt-consulting-houston" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
              <Briefcase className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-medium text-sm">NDT Consulting</div>
              <div className="text-xs text-muted-foreground mt-1">Expert consulting services</div>
            </Link>
            <Link to="/training-usa" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
              <GraduationCap className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-medium text-sm">All USA Training</div>
              <div className="text-xs text-muted-foreground mt-1">10 city locations</div>
            </Link>
            <Link to="/api-510-training" className="bg-background p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-primary/5 transition text-center">
              <Award className="w-6 h-6 text-primary mx-auto mb-2" />
              <div className="font-medium text-sm">API 510/570 Training</div>
              <div className="text-xs text-muted-foreground mt-1">Specialized certifications</div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your NDT Training in Houston</h2>
          <p className="text-muted-foreground mb-8 text-lg">Enroll today and begin your path to NDT certification. Classes available monthly.</p>
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
          <RelatedCityProducts currentProduct="training" citySlug="houston" city="Houston" />
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
