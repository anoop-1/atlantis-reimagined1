import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Settings, BarChart3, Users, Lightbulb, Target, Briefcase, HelpCircle, Zap, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { keyLocations } from "@/data/programmatic-seo";
import { expandedLocations } from "@/data/expanded-cities";
import { softwareCategories, ERPPageType } from "@/data/erp-software-seo";
import { isCuratedCity } from '@/data/curated-cities';

interface ERPSoftwareCityPageProps {
  pageType: ERPPageType;
  citySlug: string;
}

// Helper to find city from both location sources
const findCity = (slug: string) => {
  const keyCity = keyLocations.find(c => c.slug === slug);
  if (keyCity) return keyCity;

  return expandedLocations.find(c => c.slug.includes(slug) || c.slug === slug);
};

// Get software category icon
const getSoftwareIcon = (pageType: ERPPageType) => {
  const iconMap: Record<ERPPageType, any> = {
    'erp': Settings,
    'crm': Users,
    'sales': TrendingUp,
    'marketing': Zap,
    'quotation': BarChart3,
    'inventory': Shield,
    'reporting': Briefcase,
    'certification-tracking': CheckCircle,
    'equipment-management': Settings,
    'calibration-tracking': Target
  };
  return iconMap[pageType] || Settings;
};

// Generate features based on software type
const generateFeatures = (pageType: ERPPageType, industries: string[]): string[] => {
  const baseFeatures: Record<ERPPageType, string[]> = {
    'erp': [
      "Integrated project management with timeline tracking",
      "Resource planning and technician scheduling",
      "Equipment and asset lifecycle management",
      "Financial reporting and project profitability analysis",
      "Compliance and certification documentation"
    ],
    'crm': [
      "Customer account management with inspection history",
      "Contract and service agreement tracking",
      "Inspection requirement documentation",
      "Compliance certification requirements by customer",
      "Service history and recurring inspection scheduling"
    ],
    'sales': [
      "Opportunity pipeline management and forecasting",
      "Proposal generation and version control",
      "Win-loss analysis and sales metrics",
      "Quote approval workflow and pricing control",
      "Sales territory and quota management"
    ],
    'marketing': [
      "Email campaign management and automation",
      "Lead scoring and nurturing workflows",
      "Industry content management and distribution",
      "Campaign performance tracking and ROI",
      "Integration with sales pipeline"
    ],
    'quotation': [
      "Automated estimate calculation based on inspection type",
      "Technician hour and travel cost estimation",
      "Equipment and consumable cost inclusion",
      "Certification requirement pricing adjustments",
      "Multi-site and volume discount logic"
    ],
    'inventory': [
      "Consumable tracking with expiration date management",
      "Equipment maintenance history logging",
      "Automated reorder point alerts",
      "Supplier integration and purchase order generation",
      "Usage tracking and cost allocation to projects"
    ],
    'reporting': [
      "Digital inspection report templates by method",
      "Photo and image integration with measurements",
      "Finding categorization and severity classification",
      "PDF generation with company branding",
      "Report archival and retrieval with search"
    ],
    'certification-tracking': [
      "Personnel ASNT SNT-TC-1A and ISO 9712 certification tracking",
      "Expiration date alerts and renewal reminders",
      "Training and exam requirement management",
      "Customer-specific qualification requirements",
      "Compliance reporting and audit trails"
    ],
    'equipment-management': [
      "Equipment asset registry with serial numbers and location",
      "Calibration schedule and interval management",
      "Maintenance history and repair tracking",
      "Equipment downtime and replacement planning",
      "Performance metrics and efficiency monitoring"
    ],
    'calibration-tracking': [
      "Calibration certificate generation with standards traceability",
      "Calibration interval management and scheduling",
      "Out-of-spec detection and alert generation",
      "Calibration data trending and analysis",
      "Third-party calibration integration"
    ]
  };

  return baseFeatures[pageType] || [];
};

// Generate benefits
const generateBenefits = (pageType: ERPPageType, cityName: string, industries: string[]): string[] => {
  return [
    `Streamline NDT ${pageType === 'certification-tracking' ? 'personnel' : 'operations'} management across ${cityName}`,
    `Improve compliance with local regulations and industry standards in ${industries[0]}`,
    `Increase efficiency and reduce operational costs for your ${industries[0]?.toLowerCase() || 'industrial'} operations`
  ];
};

export const ERPSoftwareCityPage: React.FC<ERPSoftwareCityPageProps> = ({ pageType, citySlug }) => {
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

  const softwareInfo = softwareCategories[pageType];
  const features = generateFeatures(pageType, location.industries);
  const benefits = generateBenefits(pageType, location.name, location.industries);
  const SoftwareIcon = getSoftwareIcon(pageType);

  const industryContext = `In ${location.name}'s ${location.industries.slice(0, 2).join(" and ")} sectors, ${softwareInfo.name} delivers specialized capabilities for managing complex inspection operations, ensuring compliance with industry-specific standards, and maximizing operational efficiency. This purpose-built NDT solution integrates seamlessly with your existing workflows while providing the advanced functionality that modern NDT operations demand.`;

  const pageTitle = `${softwareInfo.name} for ${location.name} | NDT Software Solution`;
  const pageDesc = `${softwareInfo.name} for ${location.name}. Purpose-built software for ${pageType.replace(/-/g, ' ')} management in ${location.industries.slice(0, 2).join(" and ")} industries.`;
  const keywords = [
    `${pageType.replace(/-/g, ' ')} software ${location.name.toLowerCase()}`,
    `NDT ${softwareInfo.name.toLowerCase()} ${location.name.toLowerCase()}`,
    `inspection ${pageType.replace(/-/g, ' ')} management ${location.region?.toLowerCase()}`,
    `${pageType.replace(/-/g, ' ')} solution ${location.industries[0]?.toLowerCase()}`,
    `NDT software automation`
  ].join(", ");

  const canonical = `https://atlantisndt.com/${pageType}-${citySlug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${softwareInfo.name} - ${location.name}`,
    description: softwareInfo.fullDescription,
    applicationCategory: "BusinessApplication",
    provider: {
      "@type": "Organization",
      name: "Atlantis NDT",
      url: "https://atlantisndt.com"
    },
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: "Contact for pricing",
      url: canonical
    }
  };

  const faqData = [
    {
      question: `What makes ${softwareInfo.name} different from generic software?`,
      answer: `${softwareInfo.name} is purpose-built for NDT operations, not adapted from generic enterprise software. It understands inspection workflows, compliance requirements, and the specific needs of ${location.industries.slice(0, 2).join(" and ")} operations in ${location.name}.`
    },
    {
      question: "How quickly can we get the system up and running?",
      answer: `Implementation typically takes 4-8 weeks depending on your current systems and data complexity. We provide dedicated onboarding support for ${location.name} organizations to ensure smooth transition and rapid adoption.`
    },
    {
      question: "Does the software integrate with our existing NDT equipment?",
      answer: `Yes. ${softwareInfo.name} integrates with standard NDT instruments, SCADA systems, and common enterprise software. We can also build custom integrations with your specific equipment and workflows.`
    },
    {
      question: "What training and support do you provide?",
      answer: `We include comprehensive training for all users, ongoing technical support, and regular software updates. Our support team understands NDT operations and industry-specific compliance requirements in ${location.name}.`
    },
    {
      question: "How does the software help with regulatory compliance?",
      answer: `${softwareInfo.name} maintains audit trails, automates compliance reporting, tracks certifications and standards adherence, and generates documentation required by API, ASME, SNT-TC-1A, and other relevant standards for your industry.`
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <PillarHubNav active="ndt-erp" />
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
              <SoftwareIcon className="w-5 h-5" />
              <span>NDT Software Solution</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {softwareInfo.name} for {location.name}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mb-4">
              {softwareInfo.fullDescription}
            </p>
            <p className="text-lg text-white/70 max-w-3xl mb-8">
              Purpose-built for {location.industries.slice(0, 2).join(" and ")} operations in {location.name}, streamline your inspection management and maximize operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition text-center">
                Request Demo
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                Explore Features
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {features.slice(0, 5).map((feature, idx) => (
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
                        <p className="text-slate-700">{feature}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Business Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardContent className="pt-8">
                      <BarChart3 className="w-10 h-10 text-primary mx-auto mb-4" />
                      <p className="text-slate-700 text-center font-semibold">{benefit}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Context */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Purpose-Built for {location.name}</h2>
              <p className="text-lg text-slate-700 leading-relaxed">
                {industryContext}
              </p>
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
                    <Zap className="w-5 h-5 text-blue-600" />
                    Why Choose Our Software?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-700">Built for NDT, not adapted</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-700">Industry standard compliance</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-700">Dedicated NDT support</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-700">Seamless integrations</span>
                    </li>
                    <li className="flex gap-2 items-start">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                      <span className="text-sm text-slate-700">Scalable for growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Screenshot Placeholder Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">System Overview</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-slate-100 to-slate-200 h-96 flex items-center justify-center">
              <CardContent className="text-center">
                <Settings className="w-16 h-16 text-slate-400 mx-auto mb-4" />
                <p className="text-slate-600">Interactive demo and screenshots available upon request</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Flexible Pricing & Deployment Options</h2>
            <p className="text-lg text-slate-700 mb-8 max-w-2xl mx-auto">
              Cloud-based or on-premise deployment. Flexible licensing for organizations of all sizes. Custom configurations for your unique workflow requirements.
            </p>
            <a href="#contact" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
              Get Pricing Information
            </a>
          </motion.div>
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

      {/* Related Software Types */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Related Software Solutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { type: 'certification-tracking', label: 'Certification Tracking' },
              { type: 'equipment-management', label: 'Equipment Management' },
              { type: 'reporting', label: 'Digital Reporting' }
            ].filter((item) => item.type !== pageType).map((software) => (
              <Card key={software.type} className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle>{software.label}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 mb-4">
                    {softwareCategories[software.type as ERPPageType].shortDescription}
                  </p>
                  <Link to={`/${software.type}-${citySlug}`} className="text-primary font-semibold hover:underline">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            ))}
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
              Schedule a personalized demo of {softwareInfo.name} for your {location.name} organization. See how our purpose-built software can streamline your NDT operations.
            </p>
            <ContactDetails />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ERPSoftwareCityPage;
