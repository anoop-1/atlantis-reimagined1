import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, Plane, Users, TrendingUp, Rocket, GraduationCap } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ContactDetails from '@/components/ContactDetails';
import { Navigation } from '@/components/Navigation';

export default function TrainingUSA() {
  const certificationLevels = [
    {
      level: 'Level I - Foundation',
      duration: '1-2 weeks',
      description: 'ASNT SNT-TC-1A compliant Level I training and certification. Entry-level program with focus on aerospace and industrial applications.',
      highlight: 'Quick start NDT career path'
    },
    {
      level: 'Level II - Intermediate',
      duration: '2-3 weeks',
      description: 'Advanced Level II training and certification per ASNT SNT-TC-1A standards. Hands-on practice with real aerospace and industrial components.',
      highlight: 'Industry-ready certification'
    },
    {
      level: 'Level III - Expert',
      duration: '3-4 weeks',
      description: 'Comprehensive ASNT Level III training for supervisory and management roles. Includes procedure development and program administration. Training only - no certification provided.',
      highlight: 'Career advancement to ASNT Level III expert'
    }
  ];

  const ndtMethods = [
    'Phased Array Ultrasonic (PAUT)',
    'Time of Flight Diffraction (TOFD)',
    'Ultrasonic Testing (UT)',
    'Radiographic Testing (RT)',
    'Magnetic Particle Testing (MT)',
    'Liquid Penetrant Testing (PT)'
  ];

  // Course schema for structured data (helps with Google rich results)
  const courseSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "EducationalOrganization",
        "name": "Atlantis NDT Training Center",
        "description": "Professional ASNT NDT training and certification in USA",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "US"
        }
      },
      ...certificationLevels.map((cert, idx) => ({
        "@type": "Course",
        "name": `ASNT ${cert.level} NDT Training`,
        "description": cert.description,
        "provider": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "sameAs": "https://atlantisndt.com"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "onsite",
          "duration": cert.duration,
          "inLanguage": "en"
        },
        "occupationalCategory": "Non-Destructive Testing Technician",
        "educationalCredentialAwarded": idx < 2 ? "ASNT SNT-TC-1A Certification" : "Training Certificate"
      }))
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-blue-950/5 pt-20">
      <Navigation />
      <SEOHead
        title="NDT Training USA | ASNT Level I, II, III Certification Courses"
        description="Professional ASNT SNT-TC-1A NDT training in USA. Level I & II training with certification, Level III training only. Phased array (PAUT), TOFD, ultrasonic, radiographic testing courses. NAS410 compliant programs nationwide."
        keywords="NDT training USA, ASNT certification, NDT certification courses USA, ultrasonic testing training, phased array training USA, TOFD training, NDT Level III USA, aerospace NDT training, NAS410 certification, ASNT Level III, radiographic testing training, magnetic particle testing course, NDT technician certification"
        canonical="https://atlantisndt.com/training-usa"
        structuredData={courseSchema}
        hreflangLinks={[
          { hreflang: 'en-US', href: '/training-usa' },
          { hreflang: 'en-AE', href: '/training-me' },
          { hreflang: 'en-IN', href: '/training-india' },
          { hreflang: 'x-default', href: '/training' }
        ]}
      />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ASNT NDT Training & Certification<br />
              <span className="text-blue-600">For Aerospace & Advanced Applications</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Professional ASNT SNT-TC-1A training across USA. Level I & II: Training + Certification. Level III: Training Only.
              Advanced programs in Phased Array, TOFD, and digital radiography for aerospace and industrial sectors.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="btn-primary bg-blue-600 hover:bg-blue-700">
                <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                  Enroll in ASNT Level III Program
                </a>
              </Button>
              <Button size="lg" variant="outline">
                <Link to="/consulting-usa">View Consulting Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certification Levels */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-950/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">ASNT SNT-TC-1A Training Levels</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certificationLevels.map((cert, idx) => (
              <Card key={idx} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <Award className="w-8 h-8 text-blue-600 mb-2" />
                  <CardTitle>{cert.level}</CardTitle>
                  <p className="text-sm font-semibold text-blue-600">{cert.duration}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-3">{cert.description}</p>
                  <div className="bg-blue-50 p-2 rounded">
                    <p className="text-xs font-semibold text-blue-900">{cert.highlight}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NDT Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Level III NDT Methods</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {ndtMethods.map((method, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-card p-4 rounded-lg border border-blue-500/20">
                <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>{method}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-950/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our ASNT Level III Training</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <GraduationCap className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>ASNT SNT-TC-1A Compliant</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>ASNT SNT-TC-1A Level I & II: Training + Certification</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Level III: Training Only (No Certification Provided)</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>CP-189 DoD qualification pathways available</span>
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Rocket className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Aerospace-Focused Training</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Practical Level III training with aerospace components</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>Expert ASNT Level III instructors with 15+ years experience</span>
                </p>
                <p className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>96% certification pass rate for Level III programs</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our USA Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from NDT professionals who advanced their careers with Atlantis training
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "The PAUT and TOFD training at Atlantis was exceptional. The hands-on practice with real aerospace components prepared me perfectly for my Level III certification exam."
                  </p>
                  <div className="font-semibold">Michael R.</div>
                  <div className="text-sm text-muted-foreground">NDT Level III, Houston, Texas</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "After completing my UT Level II certification through Atlantis, I received multiple job offers within two weeks. Their ASNT-aligned curriculum is industry-leading."
                  </p>
                  <div className="font-semibold">Sarah K.</div>
                  <div className="text-sm text-muted-foreground">QC Inspector, Los Angeles, California</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(i => (
                      <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "The instructors at Atlantis have real-world NAS410 and aerospace experience. Their Level III training program gave me the confidence to pass my ASNT exam on the first attempt."
                  </p>
                  <div className="font-semibold">James T.</div>
                  <div className="text-sm text-muted-foreground">Senior NDT Technician, Seattle, Washington</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Common questions about our ASNT NDT training programs in the USA
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What ASNT certification levels do you offer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer ASNT SNT-TC-1A compliant training for Level I and Level II with certification included.
                  For Level III, we provide comprehensive training only - candidates must sit for the ASNT Level III
                  certification exam separately through ASNT.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How long does it take to complete NDT training?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Training duration varies by level: Level I typically takes 1-2 weeks, Level II takes 2-3 weeks,
                  and Level III training requires 3-4 weeks. All programs include both classroom theory and
                  hands-on practical training with real industrial components.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is NDT certification required to work in the USA?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yes, most employers in aerospace, oil & gas, and manufacturing require ASNT SNT-TC-1A or
                  NAS410 certification for NDT technicians. Our training programs are designed to meet these
                  industry standards and prepare you for a career in non-destructive testing.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What NDT methods can I learn?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We offer training in all major NDT methods including Phased Array Ultrasonic Testing (PAUT),
                  Time of Flight Diffraction (TOFD), conventional Ultrasonic Testing (UT), Radiographic Testing (RT),
                  Magnetic Particle Testing (MT), and Liquid Penetrant Testing (PT).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advance to ASNT Level III Certification
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Earn ASNT SNT-TC-1A training and advance your NDT career in aerospace and advanced manufacturing.
            </p>
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=ufHGAhf8REe02YKd5W-vdchw0gpIkUdMqiTcsnOro6ZUQUJURlY2M09ERUYzOFAzTERBN0NFVVc3MS4u" target="_blank">
                Enroll Now
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
