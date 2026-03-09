import { motion } from 'framer-motion';
import { GraduationCap, Award, CheckCircle, TrendingUp, Users, Briefcase, Clock, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function API510Training() {
  const courseOutline = [
    {
      section: "Pressure Vessel Fundamentals",
      topics: [
        "ASME Boiler & Pressure Vessel Code (Section VIII, Division 1)",
        "Vessel design, fabrication, and materials",
        "Stress analysis and failure modes",
        "Design codes and compliance requirements"
      ]
    },
    {
      section: "Inspection Procedures",
      topics: [
        "In-service inspection techniques",
        "Thickness measurement and corrosion assessment",
        "Nondestructive testing methods and applications",
        "Defect evaluation and acceptance criteria"
      ]
    },
    {
      section: "Risk & Compliance",
      topics: [
        "Risk-based inspection (RBI) methodology",
        "API 510 compliance and certification pathways",
        "Documentation and record-keeping requirements",
        "Regulatory requirements and industry standards"
      ]
    },
    {
      section: "Practical Applications",
      topics: [
        "Field inspection scenarios",
        "Real-world case studies",
        "Practical examination and reporting",
        "Professional certification pathways"
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: "Industry-Required Credential",
      description: "API 510 certification is mandatory for pressure vessel inspectors in oil & gas, petrochemical, and refineries."
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description: "Certified API 510 inspectors command premium salaries: $75,000-$120,000+ annually depending on experience and location."
    },
    {
      icon: Briefcase,
      title: "Wide Employment",
      description: "Work for major oil companies, petrochemical plants, inspection contractors, and consulting firms across the USA."
    },
    {
      icon: Users,
      title: "Expert-Led Training",
      description: "Learn from instructors with 20+ years of pressure vessel inspection and API 510 certification experience."
    }
  ];

  const prerequisites = [
    "Active API 570 (Piping Inspector) or API 653 (Tank Inspector) certification, OR",
    "Minimum 5 years of pressure vessel inspection experience, OR",
    "ASNT Level III certification in any NDT method with 3 years of vessel inspection experience"
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is API 510 certification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "API 510 is the American Petroleum Institute standard for Pressure Vessel Inspection Code. It certifies professionals to perform in-service inspections of pressure vessels in compliance with ASME standards."
        }
      },
      {
        "@type": "Question",
        "name": "How long is API 510 training?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "API 510 training typically takes 40-80 hours of classroom and practical instruction. The certification exam can be taken upon completion of training and prerequisite experience requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What jobs require API 510 certification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pressure vessel inspectors, mechanical inspectors in refineries, plant maintenance supervisors, and inspection contractors in oil & gas and petrochemical industries require API 510 certification."
        }
      },
      {
        "@type": "Question",
        "name": "How much do API 510 certified inspectors earn?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "API 510 certified inspectors typically earn $75,000-$120,000+ annually, with senior inspectors and consulting roles commanding higher compensation."
        }
      }
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "API 510 Pressure Vessel Inspector Training & Certification",
    "description": "Comprehensive API 510 Pressure Vessel Inspector training. Covers ASME Boiler & Pressure Vessel Code, inspection techniques, risk-based inspection (RBI), and compliance. Hands-on labs with real equipment.",
    "provider": {
      "@type": "Organization",
      "name": "Atlantis NDT",
      "url": "https://atlantisndt.com"
    },
    "courseMode": "onsite",
    "occupationalCategory": "Pressure Vessel Inspector",
    "educationalCredentialAwarded": "API 510 Certification"
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [courseSchema, faqSchema]
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="API 510 Pressure Vessel Inspector Training & Certification | Atlantis NDT"
        description="Professional API 510 Pressure Vessel Inspector training. ASME Code compliance. Risk-based inspection (RBI). Hands-on labs. Certification pathways. Enroll today!"
        keywords="API 510 training, API 510 certification, pressure vessel inspector training, ASME pressure vessel inspection, RBI training, API 510 course, vessel inspection certification"
        canonical="https://atlantisndt.com/api-510-training"
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
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">API Certification</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              API 510 <span className="gradient-text">Pressure Vessel Inspector</span> Training
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive training for ASME Boiler & Pressure Vessel Code compliance. Risk-based inspection (RBI) methodology. Hands-on labs with real equipment. Industry-required credential for refineries, petrochemical plants, and oil & gas operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                  Enroll Now
                </a>
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
            <div>
              <div className="text-4xl font-bold text-primary mb-2">40-80</div>
              <div className="text-muted-foreground">Training Hours</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">ASME</div>
              <div className="text-muted-foreground">Code Compliant</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Certified Inspectors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$100K+</div>
              <div className="text-muted-foreground">Average Salary</div>
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
            <h2 className="text-3xl font-bold mb-4">Why Choose API 510?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              API 510 certification is essential for career advancement in oil & gas, petrochemical, and refining industries.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <benefit.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-4">Course Outline</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive coverage of pressure vessel inspection, ASME code, and practical assessment techniques.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {courseOutline.map((section, index) => (
              <motion.div
                key={section.section}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-base">{section.section}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {section.topics.map((topic, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Prerequisites</h2>
            <p className="text-muted-foreground">One of the following is required for API 510 certification:</p>
          </motion.div>
          <Card className="border-0 shadow-sm">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {prerequisites.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
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
            <h2 className="text-3xl font-bold mb-4">Certification Pathway</h2>
          </motion.div>
          <div className="space-y-4">
            {[
              { step: 1, title: "Prerequisite Review", desc: "Verify you meet API 510 prerequisite experience requirements" },
              { step: 2, title: "Complete Training", desc: "40-80 hours of classroom and practical instruction" },
              { step: 3, title: "Written Exam", desc: "API-format examination on code, inspection, and procedures" },
              { step: 4, title: "Practical Assessment", desc: "Hands-on inspection scenarios and defect evaluation" },
              { step: 5, title: "Certification", desc: "Receive your API 510 Pressure Vessel Inspector certificate" },
              { step: 6, title: "Renewal", desc: "API 510 certification requires renewal every 5 years" }
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

      <section className="py-20">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Industries & Opportunities</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Oil & Gas Upstream</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Pressure vessel inspectors for production platforms, gathering systems, and compression facilities.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Refineries</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">In-service inspection of process vessels, reactors, and distillation columns. Essential role during turnarounds.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Petrochemical Plants</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Continuous inspection of chemical processing vessels and compliance with API 510 standards.</p></CardContent>
            </Card>
            <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
              <CardHeader><CardTitle>Inspection Contractors</CardTitle></CardHeader>
              <CardContent><p className="text-muted-foreground text-sm">Work for specialized inspection companies serving multiple refinery and petrochemical clients.</p></CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Advance Your Inspection Career</h2>
          <p className="text-muted-foreground mb-8">API 510 certification opens doors in refineries, petrochemical plants, and major oil & gas companies worldwide.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                Enroll Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Request More Information</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
