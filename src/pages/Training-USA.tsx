import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, Plane, Users, TrendingUp, Rocket, GraduationCap } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-blue-950/5 pt-20">
      <Navigation />
      <SEOHead
        title="ASNT NDT Level III Training USA | Phased Array & Aerospace Certification"
        description="Professional ASNT SNT-TC-1A NDT training in USA. Level I & II training with certification, Level III training only. Phased array (PAUT), TOFD, aerospace focus. NAS410 compliant programs nationwide."
        keywords="ASNT training, NDT training USA, phased array training, TOFD training USA, NDT Level III USA, aerospace NDT training, NAS410 certification, ASNT Level III, ASME Section V training, phased array certification courses, SNT-TC-1A training"
        canonical="https://atlantisinspection.com/training-usa"
      />

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
