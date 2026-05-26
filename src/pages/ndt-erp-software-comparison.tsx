import { motion } from 'framer-motion';
import { Monitor, CheckCircle, TrendingUp, Users, Database, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function NDTERPSoftwareComparison() {
  const solutions = [
    {
      name: "Enterprise ERP Systems",
      providers: ["SAP", "Oracle", "Microsoft Dynamics"],
      pros: [
        "Comprehensive business integration",
        "Multi-module functionality",
        "Scalable to enterprise size",
        "Strong vendor support"
      ],
      cons: [
        "High implementation cost ($500K-$5M+)",
        "Long deployment timeline (6-24 months)",
        "Steep learning curve",
        "Limited NDT-specific features"
      ],
      bestFor: "Large enterprises with complex operations needing full business integration"
    },
    {
      name: "Specialized NDT Software",
      providers: ["Atlantis NDT Suite", "MircoTech", "Hexagon NDT"],
      pros: [
        "Built for NDT workflows",
        "Fast deployment (weeks to months)",
        "Intuitive for inspectors",
        "Cost-effective ($50K-$200K)"
      ],
      cons: [
        "Limited business system integration",
        "May need complementary tools",
        "Smaller vendor ecosystems"
      ],
      bestFor: "Mid-size inspection companies and dedicated NDT departments"
    },
    {
      name: "Cloud-Based SaaS",
      providers: ["Atlantis Cloud", "Inspectionoft", "iAsset"],
      pros: [
        "No infrastructure investment",
        "Automatic updates",
        "Mobile access",
        "Lower upfront cost ($100-$500/month/user)"
      ],
      cons: [
        "Ongoing subscription costs",
        "Internet dependency",
        "Data security considerations",
        "Limited customization"
      ],
      bestFor: "Smaller teams, mobile inspectors, companies wanting minimal IT overhead"
    }
  ];

  const features = [
    {
      category: "Core NDT Functions",
      items: ["Inspection data capture", "Report generation", "Defect tracking", "Asset management"]
    },
    {
      category: "Integration",
      items: ["ERP connectivity", "API access", "Third-party tools", "Legacy system bridges"]
    },
    {
      category: "Analytics & Reporting",
      items: ["Custom reports", "Trend analysis", "KPI dashboards", "Risk assessment"]
    },
    {
      category: "Compliance & Quality",
      items: ["Audit trails", "Certification tracking", "Standard compliance", "Document control"]
    }
  ];

  const comparisonPoints = [
    {
      icon: Database,
      title: "Data Management",
      description: "Centralize inspection records, historical data, and asset information in one platform"
    },
    {
      icon: TrendingUp,
      title: "Analytics & Insights",
      description: "Gain actionable insights from inspection data to optimize maintenance and extend asset life"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Enable seamless communication between inspectors, engineers, and management"
    },
    {
      icon: Award,
      title: "Compliance & Certification",
      description: "Maintain audit trails, certification records, and regulatory documentation automatically"
    }
  ];

  const implementationPath = [
    {
      step: 1,
      title: "Assessment",
      description: "Evaluate current workflows, data volumes, integration needs, and team size"
    },
    {
      step: 2,
      title: "Solution Selection",
      description: "Choose platform that aligns with your budget, timeline, and operational requirements"
    },
    {
      step: 3,
      title: "Implementation",
      description: "Deploy system with minimal disruption. Atlantis provides full implementation support"
    },
    {
      step: 4,
      title: "Training & Adoption",
      description: "Ensure your team is proficient. Ongoing support and training included"
    },
    {
      step: 5,
      title: "Optimization",
      description: "Continuously improve processes based on data insights and team feedback"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the cost of NDT ERP software?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Costs vary widely: Enterprise ERP ($500K-$5M+), Specialized NDT ($50K-$200K), Cloud SaaS ($100-$500/user/month). ROI typically achieved within 12-24 months through improved efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "How long does implementation take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Enterprise ERP: 6-24 months. Specialized NDT: 4-12 weeks. Cloud SaaS: 2-4 weeks. Atlantis provides rapid deployment with minimal disruption."
        }
      },
      {
        "@type": "Question",
        "name": "Can NDT software integrate with existing ERP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, modern NDT software offers APIs and integration modules for most major ERP systems. Atlantis provides seamless integration with SAP, Oracle, and others."
        }
      }
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "NDT ERP Software Comparison Guide",
    "description": "Comprehensive comparison of NDT software solutions: enterprise ERP, specialized NDT platforms, and cloud SaaS. Features, costs, and implementation timelines.",
    "provider": { "@type": "Organization", "name": "Atlantis NDT", "url": "https://atlantisndt.com" }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [softwareSchema, faqSchema]
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="Best NDT ERP Software 2026 — 8 Vendors Compared, $18K vs $2M+"
        description="2026 NDT ERP comparison: 8 vendors rated on cost, deploy time, ASNT tracking, API reporting. Atlantis regional pricing vs enterprise $250K-$2M+. Free pricing matrix — see it free."
        keywords="NDT ERP software, NDT software comparison, inspection management software, NDT data management, NDT reporting software, asset integrity software"
        canonical="https://atlantisndt.com/ndt-erp-software-comparison"
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
              <Monitor className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-wide">Software Comparison</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              NDT ERP Software <span className="gradient-text">Comparison 2026</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Comprehensive guide comparing NDT software solutions: enterprise ERP systems, specialized NDT platforms, and cloud SaaS. Features, costs, implementation timelines, and ROI analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/contact">Request Demo</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/ndt-software-features">View Features Guide</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Solution Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Three main categories of NDT software, each with distinct advantages and use cases.
            </p>
          </motion.div>
          <div className="space-y-6">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.name}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-lg transition">
                  <CardHeader>
                    <CardTitle className="text-2xl">{solution.name}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {solution.providers.map((provider) => (
                        <Badge key={provider} variant="outline">{provider}</Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" /> Advantages
                        </h3>
                        <ul className="space-y-2">
                          {solution.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5" /> Limitations
                        </h3>
                        <ul className="space-y-2">
                          {solution.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <p className="text-sm"><strong>Best For:</strong> {solution.bestFor}</p>
                    </div>
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
            <h2 className="text-3xl font-bold mb-4">Key Features to Evaluate</h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg">{feature.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span>{item}</span>
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
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Software Matters</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {comparisonPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition border-0 shadow-sm">
                  <CardHeader className="pb-2">
                    <point.icon className="w-8 h-8 text-primary mb-2" />
                    <CardTitle className="text-lg">{point.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{point.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Implementation Roadmap</h2>
          <div className="space-y-4">
            {implementationPath.map((item) => (
              <motion.div
                key={item.step}
                className="flex gap-4 items-start"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div className="bg-background p-4 rounded-lg shadow-sm flex-1">
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Find Your Perfect NDT Software Solution</h2>
          <p className="text-muted-foreground mb-8">Atlantis NDT can help you evaluate, select, and implement the right solution for your organization.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/contact">Request Consultation</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/ndt-data-management">Learn About Data Management</Link>
            </Button>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
