import { motion } from 'framer-motion';
import { Droplet, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import MarineReportFormatBlock from '@/components/MarineReportFormatBlock';
import { Link } from 'react-router-dom';

export default function MarineOffshoreNdtServices() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Marine & Offshore NDT Services NDT Services",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" },
    "serviceType": "Non-Destructive Testing",
    "description": "Professional Marine & Offshore NDT Services NDT inspection and testing services. Certified inspectors, advanced equipment, industry compliance."
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Marine & Offshore NDT Services NDT Services | Inspection & Testing | Atlantis NDT"
        description="Professional Marine & Offshore NDT Services NDT inspection services. Certified inspectors. Advanced equipment. Industry-compliant testing. Hull and subsea."
        keywords="Marine & Offshore NDT Services NDT services, Marine & Offshore NDT Services inspection, NDT testing Marine & Offshore NDT Services"
        canonical="https://atlantisndt.com/marine-offshore-ndt-services"
        structuredData={{ "@context": "https://schema.org", "@graph": [serviceSchema] }}
      />

      <motion.section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-4xl mx-auto text-center" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Marine & Offshore NDT Services <span className="gradient-text">NDT Services</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Hull and subsea component inspection Professional inspection services. Certified inspectors. Advanced NDT equipment. Industry-compliant testing and reporting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Request Services</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/training">View Training</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div><div className="text-4xl font-bold text-primary mb-2">500+</div><div className="text-muted-foreground">Projects</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">ASNT/API</div><div className="text-muted-foreground">Certified</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">15+</div><div className="text-muted-foreground">Years Experience</div></div>
            <div><div className="text-4xl font-bold text-primary mb-2">All Methods</div><div className="text-muted-foreground">Available</div></div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Marine & Offshore NDT Services Industry Applications</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[{title: 'Hull Inspection', description: 'Ultrasonic thickness measurement, corrosion assessment'}, {title: 'Subsea Equipment', description: 'Manifold inspection, pipeline assessment, structural integrity'}, {title: 'Structural Welds', description: 'Weld quality assurance, fatigue crack detection'}].map((sector) => (
              <Card key={sector} className="h-full hover:shadow-lg transition border-0 shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-2">{sector.title}</h3>
                      <p className="text-sm text-muted-foreground">{sector.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Professional Marine & Offshore NDT Services NDT Services</h2>
          <p className="text-muted-foreground mb-8">Contact Atlantis NDT for comprehensive inspection and testing solutions.</p>
          <Button asChild size="lg">
            <Link to="/contact">Request Services</Link>
          </Button>
        </div>
      </section>

      <MarineReportFormatBlock />

      {/* Day-9: Marine buyer-intent FAQ — captures "best marine NDT software / class society / IACS / cost" intent */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-900 text-sm font-semibold mb-4">
              Marine &amp; Offshore — Buyer Questions Answered
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Marine NDT Inspection &amp; Software — FAQ
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The questions shipyards, FPSO operators, jack-up rigs, and offshore wind
              integrators ask before choosing a marine NDT services and software partner.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { q: 'What is the globally accepted marine NDT report format for class submissions?', a: "All IACS members (ABS, DNV, Lloyd's Register, Bureau Veritas, RINA, ClassNK, KR, CCS, IRS, PRS, RS) require the same 4-document sequence: cover page → calibration record → NDT Level II certificate → NDT report. Set out in IACS Recommendation No. 20 + UR W11 + UR Z23 + IMO MSC.1/Circ.1409. Atlantis NDT Reporting Software ships this bundle out of the box." },
              { q: 'How much does marine NDT inspection software cost?', a: 'Pricing varies by region and scope. Atlantis NDT Reporting Software is affordable, accessible, and fully customizable — sized for single-vessel surveyors up to multi-yard EPC contractors. Free consultation + free quote on request: info@atlantisndt.com.' },
              { q: 'Can I get a free consultation for marine NDT services or software?', a: 'Yes. Atlantis NDT offers a free consultation for shipyards, FPSO operators, drydocks, offshore wind integrators, and marine EPC contractors globally. ASNT NDT Level III + API 653 led discovery + scope sizing + tailored demo. Schedule on request.' },
              { q: 'Which class societies accept Atlantis NDT reports?', a: "All IACS members — ABS, DNV, Lloyd's Register, Bureau Veritas, RINA, ClassNK, KR, CCS, IRS, PRS, RS. Reports follow IACS Recommendation No. 20 + UR W11 + UR Z23 sequence. Also accepted by flag-state authorities and offshore-platform operators on the NORSOK / API RP 2A standards path." },
              { q: 'Do you cover offshore wind monopile + jacket inspection?', a: 'Yes. Atlantis NDT runs UT thickness + PAUT + TOFD + MFL inspection on offshore wind monopiles, transition pieces, jacket sub-structures, and floating-foundation tendons. DNV-SE-0190 + DNVGL-ST-0126 + IECRE OD-501 compliance.' },
              { q: 'How does Atlantis NDT support API 653 + IACS combined inspection on FPSO storage tanks?', a: 'FPSO cargo + slop tanks fall under both API 653 (storage tank inspection) and the FPSO class society. We run combined API 653 internal inspection + IACS-aligned reporting in a single workflow. Output: a single audit-ready report bundle accepted by both regulators.' },
              { q: 'Can the marine NDT software work offline at sea or on drydock?', a: 'Yes. The Atlantis NDT mobile field app captures inspection data offline (UT-T, PAUT scans, MT/PT visuals, photographs) and syncs at next connectivity. Built for FPSO topsides, drydock cradles, jack-up legs, and any remote marine inspection setting.' },
              { q: 'What does Atlantis NDT marine inspection cost vs DNV or Lloyd\'s in-house?', a: 'Pricing varies by scope, vessel size, and survey type. Atlantis NDT is affordable and accessible compared to class-society in-house surveyors for routine UT shell + structural inspection; the class society retains the surveyor role for the actual class submission. Free consultation + quote on request.' },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border-2 border-blue-100 hover:border-blue-300 transition-colors p-5">
                <summary className="font-semibold text-lg cursor-pointer text-foreground flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">{idx + 1}</span>
                  <span className="flex-1">{faq.q}</span>
                </summary>
                <p className="mt-3 ml-11 text-muted-foreground leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-500 transition">
              Get a Free Marine NDT Consultation
            </Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
