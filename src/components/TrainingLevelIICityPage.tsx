import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Award, BookOpen, Clock, Users, TrendingUp, DollarSign, Target, HelpCircle, GraduationCap, AlertCircle, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { keyLocations } from "@/data/programmatic-seo";
import { expandedLocations } from "@/data/expanded-cities";
import { sntTC1ARequirements } from "@/data/training-seo";
import { isCuratedCity } from '@/data/curated-cities';

type TrainingPageType = 'general-level-ii' | 'method-level-ii' | 'method-level-i' | 'level-iii-prep';

interface TrainingLevelIICityPageProps {
  pageType: TrainingPageType;
  methodShort?: string;
  citySlug: string;
}

// Helper to find city from both location sources
const findCity = (slug: string) => {
  const keyCity = keyLocations.find(c => c.slug === slug);
  if (keyCity) return keyCity;

  return expandedLocations.find(c => c.slug.includes(slug) || c.slug === slug);
};

// Map method short names to training requirements
const methodMap: Record<string, keyof typeof sntTC1ARequirements> = {
  'UT': 'ut-level-ii',
  'RT': 'rt-level-ii',
  'MT': 'mt-level-ii',
  'PT': 'pt-level-ii',
  'ET': 'et-level-ii',
  'VT': 'vt-level-ii'
};

// Generate training course details
const generateCourseDetails = (pageType: TrainingPageType, methodShort?: string) => {
  if (pageType === 'general-level-ii') {
    return {
      duration: "120+ hours classroom + OJT (varies by method)",
      prerequisites: "High school diploma or equivalent. Industry experience recommended.",
      certification: "SNT-TC-1A Level II (All methods)",
      examFormat: "Written exam covering all six NDT methods",
      passRate: "95% (with our comprehensive preparation)"
    };
  }

  const method = methodShort && methodMap[methodShort];
  const requirements = method ? sntTC1ARequirements[method] : null;

  if (requirements) {
    return {
      duration: `${requirements.minClassroomHours} hours classroom + ${requirements.minOJTHours}`,
      prerequisites: `High school diploma or equivalent. Prior ${methodShort || 'NDT'} experience recommended.`,
      certification: `SNT-TC-1A Level II - ${methodShort}`,
      examFormat: `Comprehensive exam covering ${methodShort} principles, equipment, techniques, and interpretation`,
      passRate: "95% (with our comprehensive preparation)"
    };
  }

  // Default for method-level-i or level-iii-prep
  return {
    duration: pageType === 'method-level-i' ? "24-40 hours classroom + OJT" : "80-120 hours classroom + advanced OJT",
    prerequisites: `Level I certification${pageType === 'level-iii-prep' ? ' and Level II certification' : ''}. Recommended field experience.`,
    certification: pageType === 'method-level-i' ? "SNT-TC-1A Level I" : "SNT-TC-1A Level III Preparation",
    examFormat: pageType === 'method-level-i' ? "Practical demonstration + written exam" : "Advanced technical exam with case studies",
    passRate: "93% (with our preparation programs)"
  };
};

// Generate salary range for city
const generateCareerOutlook = (cityName: string, region: string, industries: string[]): string => {
  return `NDT ${industries.slice(0, 2).join(" and ")} professionals in ${cityName} earn between $55,000 and $85,000+ annually, depending on certification level and experience. The ${region} region shows strong demand for certified NDT technicians, with 8-12% annual growth in inspection positions. Specializations in advanced methods (phased array, digital radiography) command premium wages, and supervisory/inspector positions offer advancement to six-figure compensation.`;
};

export const TrainingLevelIICityPage: React.FC<TrainingLevelIICityPageProps> = ({ pageType, methodShort, citySlug }) => {
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

  const courseDetails = generateCourseDetails(pageType, methodShort);
  const careerOutlook = generateCareerOutlook(location.name, location.region || '', location.industries);

  // Build page title and description based on training type
  let pageTitle = '';
  let pageH1 = '';
  let pageDesc = '';
  let introText = '';

  if (pageType === 'general-level-ii') {
    pageTitle = `NDT Level II Certification Training in ${location.name} | All Six Methods`;
    pageH1 = `NDT Level II Certification Training in ${location.name}`;
    pageDesc = `SNT-TC-1A Level II certification covering all six NDT methods in ${location.name}. Comprehensive training program with 95% pass rate.`;
    introText = `Prepare for SNT-TC-1A Level II certification covering ultrasonic testing (UT), radiographic testing (RT), magnetic particle testing (MT), liquid penetrant testing (PT), eddy current testing (ET), and visual testing (VT). Our comprehensive program in ${location.name} covers all methods with hands-on labs, industry-specific examples, and exam preparation.`;
  } else if (pageType === 'method-level-ii') {
    pageTitle = `${methodShort} Level II Training in ${location.name} | SNT-TC-1A Certified`;
    pageH1 = `${methodShort} Level II Certification in ${location.name}`;
    pageDesc = `SNT-TC-1A Level II ${methodShort} certification training in ${location.name}. Specialized curriculum with hands-on equipment and real-world inspection scenarios.`;
    introText = `Master advanced ${methodShort} inspection techniques and earn your SNT-TC-1A Level II certification in ${location.name}. Our specialized program provides intensive classroom instruction, hands-on laboratory practice with industry-standard equipment, and on-the-job training guidance. Perfect for technicians advancing their NDT careers in ${location.name}'s ${location.industries.slice(0, 2).join(" and ")} industries.`;
  } else if (pageType === 'method-level-i') {
    pageTitle = `${methodShort} Level I Training in ${location.name} | SNT-TC-1A Foundation`;
    pageH1 = `${methodShort} Level I Certification in ${location.name}`;
    pageDesc = `Foundation-level SNT-TC-1A Level I ${methodShort} training in ${location.name}. Essential certification for NDT technicians starting their careers.`;
    introText = `Begin your NDT career with SNT-TC-1A Level I ${methodShort} certification in ${location.name}. This foundation-level course covers fundamental principles, equipment operation, basic techniques, and essential safety protocols. Perfect for entry-level technicians and those transitioning into NDT inspection.`;
  } else {
    pageTitle = `Level III Preparation & Advanced NDT Training in ${location.name}`;
    pageH1 = `Level III Inspector Preparation in ${location.name}`;
    pageDesc = `SNT-TC-1A Level III preparation and advanced NDT training in ${location.name}. Leadership and advanced technical certification for senior NDT professionals.`;
    introText = `Prepare for SNT-TC-1A Level III inspector certification in ${location.name}. This advanced program is designed for experienced Level II technicians seeking leadership roles in inspection departments. Covers advanced technical knowledge, procedure development, personnel training, and examination technique.`;
  }

  const keywords = [
    `${methodShort ? `${methodShort} level ii` : 'ndt level ii'} training ${location.name.toLowerCase()}`,
    `SNT-TC-1A ${methodShort || 'level ii'} certification ${location.name.toLowerCase()}`,
    `NDT training ${location.industries[0]?.toLowerCase()} ${location.name.toLowerCase()}`,
    `inspection technician certification ${location.region?.toLowerCase()}`,
    `NDT professional development course`
  ].join(", ");

  const canonical = `https://atlantisndt.com/training-${pageType}-${citySlug}`;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: pageH1,
    description: introText,
    provider: {
      "@type": "Organization",
      name: "Atlantis NDT",
      url: "https://atlantisndt.com"
    },
    coursePrerequisites: courseDetails.prerequisites,
    educationLevel: pageType.includes('level-i') ? "BeginnerLevel" : pageType.includes('level-iii') ? "AdvancedLevel" : "IntermediateLevel",
    inLanguage: "en"
  };

  const faqData = [
    {
      question: "What is SNT-TC-1A and why is it important?",
      answer: "SNT-TC-1A (Standard for Qualification and Certification of Nondestructive Testing Personnel) is the industry standard for NDT technician certification in North America. It's recognized across oil & gas, aerospace, manufacturing, and other industries. Most employers require SNT-TC-1A certification for hiring and advancement decisions."
    },
    {
      question: `How does this compare to API or CSWIP certification?`,
      answer: `SNT-TC-1A is the primary U.S./North American certification standard. API Inspector certifications (510, 570, 653) supplement SNT-TC-1A for specific equipment (pressure vessels, piping, tanks). Our focus on SNT-TC-1A provides the broadest career mobility for NDT professionals in ${location.name}.`
    },
    {
      question: "What is the exam like and how should I prepare?",
      answer: "The SNT-TC-1A exam includes written knowledge questions, practical demonstrations with real equipment, and interpretation of actual inspection findings. Our program includes full exam simulation, hands-on practice with exam-equivalent equipment, and personalized review sessions. Our 95% pass rate reflects comprehensive preparation."
    },
    {
      question: `How will this training help my career in ${location.name}?`,
      answer: `SNT-TC-1A Level II certification opens opportunities in ${location.name}'s growing ${location.industries.slice(0, 2).join(" and ")} sectors. Certified technicians earn $55,000-85,000+ annually with advancement to supervisory and inspector roles. Specialization in advanced methods (phased array, digital radiography) significantly increases earning potential.`
    },
    {
      question: "Can I pursue Level III after Level II?",
      answer: "Yes. Level III inspector certification requires 5+ years of Level II experience and advanced technical knowledge. We offer Level III preparation programs for experienced technicians seeking leadership roles in inspection departments and certification body positions."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
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
              <GraduationCap className="w-5 h-5" />
              <span>NDT Certification Training</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {pageH1}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mb-4">
              {introText}
            </p>
            <p className="text-lg text-white/70 max-w-3xl mb-8">
              SNT-TC-1A Compliant • 95% Pass Rate • Industry-Recognized Certification
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#enroll" className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition text-center">
                Enroll Now
              </a>
              <a href="#requirements" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition">
                View Course Details
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Details Cards */}
      <section id="requirements" className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Course Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    Duration & Schedule
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 font-semibold mb-2">{courseDetails.duration}</p>
                  <p className="text-sm text-slate-600">Flexible scheduling with weekend and evening options available in {location.name}</p>
                </CardContent>
              </Card>

              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-primary" />
                    Prerequisites
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 font-semibold mb-2">{courseDetails.prerequisites}</p>
                </CardContent>
              </Card>

              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Certification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 font-semibold mb-2">{courseDetails.certification}</p>
                  <p className="text-sm text-slate-600">Recognized across North American industries</p>
                </CardContent>
              </Card>

              <Card className="md:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Exam Format
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700 font-semibold mb-2">{courseDetails.examFormat}</p>
                  <p className="text-sm text-slate-600">Pass Rate: {courseDetails.passRate}</p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SNT-TC-1A Requirements Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">SNT-TC-1A Requirements</h2>
            <div className="bg-white rounded-lg p-8 shadow-sm border-l-4 border-primary">
              <div className="flex gap-4 mb-6">
                <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Why SNT-TC-1A Matters</h3>
                  <p className="text-slate-700">
                    SNT-TC-1A is the primary North American standard for NDT technician qualification. It specifies minimum training hours, practical experience requirements, and examination standards. Certification demonstrates competency to employers across all major industries operating in {location.name}.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">Classroom Training Hours</h4>
                  <p className="text-slate-700 mb-3">
                    Minimum hours vary by method. Our comprehensive programs meet or exceed all SNT-TC-1A requirements with additional advanced topics covering:
                  </p>
                  <ul className="space-y-2">
                    {["Method fundamentals and physics", "Equipment operation and calibration", "Defect interpretation and sizing", "Standards and compliance", "Advanced techniques"].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-3">On-the-Job Training (OJT)</h4>
                  <p className="text-slate-700 mb-3">
                    Practical field experience is essential for certification. We provide:
                  </p>
                  <ul className="space-y-2">
                    {["OJT coordination and tracking", "Real-world inspection scenarios", "Equipment familiarization", "Safety protocol training", "Professional documentation"].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span className="text-sm text-slate-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Curriculum Outline</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Classroom Training", items: ["Fundamental principles", "Equipment operation", "Calibration procedures", "Interpretation techniques", "Standards and codes"] },
                { title: "Hands-On Laboratory", items: ["Equipment familiarization", "Practice inspections", "Report generation", "Defect recognition", "Practical exams"] },
                { title: "Field Application", items: ["Real-world inspection", "Documentation practices", "Safety procedures", "Industry protocols", "Professional conduct"] },
                { title: "Exam Preparation", items: ["Full practice exams", "Technical review", "Problem-solving", "Q&A sessions", "Personalized coaching"] }
              ].map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>{section.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex gap-2 items-start">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                            <span className="text-sm text-slate-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Career Outlook */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Career Outlook in {location.name}</h2>
            <Card className="bg-white border-l-4 border-primary">
              <CardContent className="pt-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <DollarSign className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-sm text-slate-600 mb-2">Salary Range</p>
                    <p className="text-2xl font-bold text-slate-900">$55K-$85K+</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-sm text-slate-600 mb-2">Job Growth</p>
                    <p className="text-2xl font-bold text-slate-900">8-12%/year</p>
                  </div>
                  <div className="text-center">
                    <Users className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-sm text-slate-600 mb-2">Demand Level</p>
                    <p className="text-2xl font-bold text-slate-900">High</p>
                  </div>
                </div>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {careerOutlook}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Train with Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Train with Atlantis NDT</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ul className="space-y-4">
                {[
                  "SNT-TC-1A compliant curriculum with 95% pass rate",
                  "Industry-experienced instructors with field backgrounds",
                  "Hands-on training with modern NDT equipment",
                  "Small class sizes for personalized instruction",
                  "OJT coordination and mentoring support",
                  "Career advancement guidance and job placement assistance"
                ].map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex gap-3 items-start"
                  >
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-slate-700">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-blue-50 h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-blue-600" />
                    Proven Track Record
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Certification Success</p>
                      <p className="text-2xl font-bold text-slate-900">95% Pass Rate</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Graduates Employed</p>
                      <p className="text-2xl font-bold text-slate-900">98%</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Average Salary Increase</p>
                      <p className="text-2xl font-bold text-slate-900">18-24%</p>
                    </div>
                  </div>
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

      {/* Related Training */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Additional Training Options</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Other Training Levels</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  Explore Level I, Level III, and specialized method training in {location.name}.
                </p>
                <Link to={`/training-${location.slug}`} className="text-primary font-semibold hover:underline">
                  View All Courses →
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Other Cities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  Same training program available in other major industrial cities nationwide.
                </p>
                <Link to="/training" className="text-primary font-semibold hover:underline">
                  Find Training Near You →
                </Link>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition">
              <CardHeader>
                <CardTitle>Consulting Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 mb-4">
                  In-house NDT consulting and inspection services for {location.name} companies.
                </p>
                <Link to={`/consulting-${location.slug}`} className="text-primary font-semibold hover:underline">
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enrollment CTA */}
      <section id="enroll" className="py-16 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your NDT Career?</h2>
            <p className="text-xl text-white/90 mb-8 max-x-2xl mx-auto">
              Enroll in our SNT-TC-1A {pageType === 'general-level-ii' ? 'Level II' : pageType === 'method-level-i' ? 'Level I' : pageType === 'level-iii-prep' ? 'Level III Preparation' : `${methodShort} Level II`} training program in {location.name}. Achieve certification that advances your career in {location.industries.slice(0, 2).join(" and ")} industries.
            </p>
            <ContactDetails />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TrainingLevelIICityPage;
