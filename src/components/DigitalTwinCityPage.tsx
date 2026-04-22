import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Zap, TrendingUp, Building2, AlertTriangle, Settings, BarChart3, Users, Lightbulb, Target, Briefcase, HelpCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { keyLocations, ndtMethods } from "@/data/programmatic-seo";
import { expandedLocations } from "@/data/expanded-cities";
import { digitalTwinCityProfiles } from "@/data/digital-twin-seo";
import { isCuratedCity } from '@/data/curated-cities';

interface DigitalTwinCityPageProps {
  citySlug: string;
}

// Helper to find city from both location sources
const findCity = (slug: string) => {
  const keyCity = keyLocations.find(c => c.slug === slug);
  if (keyCity) return keyCity;

  return expandedLocations.find(c => c.slug.includes(slug) || c.slug === slug);
};

// Helper to get DT profile or generate default
const getDigitalTwinProfile = (cityName: string, location: any) => {
  const lowerName = cityName.toLowerCase();
  const profile = digitalTwinCityProfiles[lowerName];

  if (profile) {
    return {
      useCases: profile.useCases || [],
      industryContext: profile.industryContext || '',
      roiData: profile.roiData || []
    };
  }

  // Generate default profile for cities not in hardcoded list
  return {
    useCases: [
      `Real-time asset visualization for ${location.industries[0] || 'industrial'} operations`,
      `Predictive maintenance scheduling integrated with current workflows`,
      `3D facility mapping with operational data integration`,
      `Energy consumption optimization through digital modeling`,
      `Equipment lifecycle tracking and performance analytics`
    ],
    industryContext: `${cityName}'s ${location.industries.slice(0, 2).join(' and ')} sectors benefit from digital twin technology to optimize asset management, reduce unplanned downtime, and improve operational efficiency. Real-time visibility into complex operations enables data-driven decision-making and predictive maintenance strategies.`,
    roiData: [
      { metric: "Downtime Reduction", value: "15-25% through predictive maintenance" },
      { metric: "Energy Efficiency", value: "10-20% improvement via optimization" },
      { metric: "Asset Lifecycle Extension", value: "20-30% longer equipment lifespan" }
    ]
  };
};

export const DigitalTwinCityPage: React.FC<DigitalTwinCityPageProps> = ({ citySlug }) => {
  const location = findCity(citySlug);

  if (!location) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">City Not Found</h1>
          <p className="text-slate-600 mb-6">The requested city could not be found.</p>
          <Link to="/" className="text-primary hover:underline">Return to home</Link>
        </div>
      </div>
    );
  }

  const dtProfile = getDigitalTwinProfile(location.name, location);

  const pageTitle = `Digital Twin Solutions for ${location.name} | Asset Optimization`;
  const pageDesc = `Digital twin services for ${location.name}'s ${location.industries.slice(0, 2).join(" and ")} industries. Reduce downtime, optimize operations, and extend equipment lifecycle with real-time digital models.`;
  const keywords = [
    `digital twin ${location.name.toLowerCase()}`,
    `digital twin services ${location.industries[0]?.toLowerCase()}`,
    `asset optimization ${location.name.toLowerCase()}`,
    `predictive maintenance ${location.region?.toLowerCase()}`,
    `operational efficiency digital technology`
  ].join(", ");

  const canonical = `https://atlantisndt.com/digital-twin-${citySlug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Digital Twin Services - ${location.name}`,
    description: dtProfile.industryContext,
    provider: {
      "@type": "Organization",
      name: "Atlantis NDT",
      url: "https://atlantisndt.com"
    },
    areaServed: {
      "@type": "Place",
      name: location.name,
      address: {
        "@type": "PostalAddress",
        addressRegion: location.region,
        addressCountry: location.country
      }
    },
    serviceType: "Digital Twin Technology",
    availableLanguage: "en"
  };

  const faqData = [
    {
      question: "What is a digital twin and how does it help our operations?",
      answer: "A digital twin is a virtual replica of your physical assets and operations. It enables real-time monitoring, predictive analytics, and scenario planning without disrupting your actual equipment. This leads to optimized maintenance schedules, reduced downtime, and better decision-making based on data."
    },
    {
      question: "How long does it take to implement a digital twin solution?",
      answer: `Implementation timelines for ${location.name} facilities typically range from 2-6 months depending on complexity and existing data infrastructure. We start with critical assets and gradually expand to encompass your entire facility, minimizing disruption to operations.`
    },
    {
      question: "What industries benefit most from digital twins?",
      answer: `${location.industries.slice(0, 3).join(", ")} operations particularly benefit from digital twin technology. These sectors have complex asset interdependencies, high consequences of failure, and significant optimization opportunities that digital twins can address.`
    },
    {
      question: "How does a digital twin integrate with our existing NDT programs?",
      answer: "Digital twins complement traditional NDT inspections by predicting when and where problems are likely to occur. Rather than replacing NDT, digital twins enhance your inspection strategies by directing resources to highest-risk areas, improving efficiency and effectiveness of your verification programs."
    },
    {
      question: "What ROI can we expect from digital twin implementation?",
      answer: `Organizations implementing digital twins typically see 15-25% reductions in unplanned downtime, 10-20% energy savings, and 20-30% extensions in equipment lifespan. These improvements translate directly to reduced operating costs and improved asset value in ${location.name}.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <PillarHubNav active="digital-twins" />
      <SEOHead
        title={pageTitle}
        description={pageDesc}
        keywords={keywords}
        canonical={canonical}
        structuredData={structuredData}
        noindex={!isCuratedCity(citySlug)}
      />
      <Breadcrumbs />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-800 to-slate-900 text-white pt-28 pb-16">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <Zap className="w-5 h-5" />
              <span>Digital Twin Solutions</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Digital Twin Solutions for {location.name}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mb-4">
              Transform your {location.industries.slice(0, 2).join(" and ")} operations with real-time digital asset models that predict problems before they occur.
            </p>
            <p className="text-lg text-white/70 max-w-3xl mb-8">
              Reduce unplanned downtime, optimize equipment performance, and extend asset lifespan through data-driven insights and predictive maintenance strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition text-center">
                Request Consultation
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Learn How It Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Digital Twin Applications in {location.name}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {dtProfile.useCases.map((useCase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition">
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <p className="text-slate-700">{useCase}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Context */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Why Digital Twins Matter for {location.name}</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              {dtProfile.industryContext}
            </p>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Measurable Returns on Investment</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {dtProfile.roiData.map((roi, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center">
                    <CardContent className="pt-8">
                      <BarChart3 className="w-10 h-10 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold text-slate-900 mb-2">{roi.metric}</h3>
                      <p className="text-2xl font-bold text-primary">{roi.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Digital Twin Implementation Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Data Collection", icon: Briefcase, desc: "Gather operational and sensor data" },
              { title: "Model Development", icon: Settings, desc: "Build precise digital replica" },
              { title: "Integration", icon: Zap, desc: "Connect to existing systems" },
              { title: "Optimization", icon: TrendingUp, desc: "Enable predictive analytics" }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent className="pt-6 text-center">
                    <step.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-slate-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-600">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration with NDT Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Digital Twins + NDT Integration</h2>
              <p className="text-lg text-slate-700 mb-4">
                Digital twins work synergistically with your Non-Destructive Testing programs. While NDT provides verified inspection data, digital twins use that data to predict future conditions and optimize inspection scheduling.
              </p>
              <ul className="space-y-3">
                {[
                  "Direct integration with NDT findings",
                  "Predictive guidance for inspection planning",
                  "Real-time risk assessment updates",
                  "Lifecycle management optimization",
                  "Compliance documentation automation"
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-blue-600" />
                    Risk-Based Inspection Planning
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    Digital twins continuously analyze equipment stress, degradation patterns, and failure probability. This intelligence guides your NDT teams to focus resources on highest-risk components, increasing inspection effectiveness while reducing costs.
                  </p>
                  <p className="text-sm text-slate-600">
                    Result: Better outcomes from every inspection dollar spent.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqData.map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <HelpCircle className="w-5 h-5 text-primary" />
                      {faq.question}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Consulting Services
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  Expert consulting for asset integrity and inspection strategy optimization in {location.name}.
                </p>
                <Link to={`/consulting-${location.slug}`} className="text-primary font-semibold hover:underline">
                  View Consulting →
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-primary" />
                  Training Programs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  NDT training and certification programs for {location.name} professionals.
                </p>
                <Link to={`/training-${location.slug}`} className="text-primary font-semibold hover:underline">
                  View Training →
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Other DT Cities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  Explore digital twin solutions for other major industrial cities.
                </p>
                <Link to="/digital-twin-services" className="text-primary font-semibold hover:underline">
                  View All Cities →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Operations?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our digital twin specialists to discuss how real-time asset models can optimize your {location.name} operations.
            </p>
            <ContactDetails />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTwinCityPage;
