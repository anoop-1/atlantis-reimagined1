import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import DeepContent from "@/components/DeepContent";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { CheckCircle, MapPin, Award, GraduationCap, Users, BookOpen, Briefcase, TrendingUp, Clock, FileText, DollarSign, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { keyLocations } from "@/data/programmatic-seo";
import { useMemo, useEffect } from "react";
import { isCuratedCity } from '@/data/curated-cities';
import TrainingEnquiryCTA from "@/components/TrainingEnquiryCTA";
import CityJumpLinks from "@/components/CityJumpLinks";
import NotFound from "@/pages/NotFound";
import CwiCertificationInfoPage, { findCwiCity } from "@/components/CwiCertificationInfoPage";

// Color map for certification types
const colorMap: Record<string, { bg: string; text: string; light: string; badge: string }> = {
    api510: { bg: "from-amber-800 to-amber-900", text: "text-amber-600", light: "bg-amber-50", badge: "bg-amber-100 text-amber-800" },
    api570: { bg: "from-blue-800 to-blue-900", text: "text-blue-600", light: "bg-blue-50", badge: "bg-blue-100 text-blue-800" },
    api653: { bg: "from-emerald-800 to-emerald-900", text: "text-emerald-600", light: "bg-emerald-50", badge: "bg-emerald-100 text-emerald-800" },
    asnt: { bg: "from-purple-800 to-purple-900", text: "text-purple-600", light: "bg-purple-50", badge: "bg-purple-100 text-purple-800" },
    cwi: { bg: "from-rose-800 to-rose-900", text: "text-rose-600", light: "bg-rose-50", badge: "bg-rose-100 text-rose-800" },
};

interface CertificationData {
    name: string;
    slug: string;
    shortName: string;
    color: keyof typeof colorMap;
    prerequisites: string;
    examFormat: string;
    examLength: string;
    renewalPeriod: string;
    codes: string[];
    keyTopics: string[];
    careerImpact: {
        salary: string;
        jobDemand: string;
        opportunities: string[];
    };
    overview: string;
}

const certificationDatabase: Record<string, CertificationData> = {
    // API 510/570/653 TRAINING entries removed 2026-09-08 (owner directive:
    // Atlantis does not sell API inspector certification training — city
    // permutation pages for it, informational or not, should not exist).
    "asnt-level-iii-training": {
        name: "ASNT Level III (Level 3) NDT Professional Certification",
        slug: "asnt-level-iii-training",
        shortName: "ASNT Level III",
        color: "asnt",
        prerequisites: "ASNT's published routes (asnt.org): 12, 24 or 48 months of documented NDT experience, depending on education",
        examFormat: "Basic examination once, plus one Method examination per method; multiple-choice and computer-based. ASNT publishes the current exam format, question counts and testing-centre arrangements; check asnt.org.",
        examLength: "2 or 4 hours per Method exam (per ASNT)",
        renewalPeriod: "Every 5 years",
        codes: ["ASNT SNT-TC-1A", "ANSI/ASNT CP-189", "ASME BPVC Section V"],
        keyTopics: [
            "Advanced ultrasonic testing theory and applications",
            "Radiographic and digital radiography methods",
            "Magnetic particle testing advanced techniques",
            "Liquid penetrant testing procedures and interpretation",
            "Eddy current testing and electromagnetic methods",
            "Visual and optical inspection techniques",
            "Procedure development and writing",
            "Training and qualification oversight",
            "Program management and documentation",
            "Standards interpretation and code requirements"
        ],
        careerImpact: {
            salary: "Average salary increase of $16,000-$28,000 annually",
            jobDemand: "Highest demand for qualified Level III professionals",
            opportunities: ["NDT program manager", "Technical authority", "Training instructor", "Quality engineering manager"]
        },
        overview: "ASNT Level III (also written as \"ASNT Level 3\" or \"NDT Level 3\" — the numeral and Roman-numeral forms refer to the same certification tier) NDT Professional certification represents the highest level of competency in non-destructive testing. Level III professionals are responsible for developing, implementing, and overseeing NDT programs and procedures. This certification requires mastery of multiple NDT methods, understanding of relevant standards and codes, and the ability to train and qualify other NDT personnel. Certified Level III professionals serve as technical authorities within their organizations, responsible for setting standards, solving complex inspection problems, and ensuring compliance with regulatory requirements. The certification encompasses both specific NDT methods (ultrasonic, radiographic, magnetic particle, penetrant, eddy current, and visual) and broader competencies in procedure development, program management, and personnel qualification. Organizations value Level III professionals for their ability to optimize inspection strategies, improve asset management programs, and mentor junior technicians."
    }
    // CWI entry removed 2026-10-04: it rendered "AWS CWI ... Professional
    // Certification Training", Course schema and "Enroll Now" — an Atlantis CWI
    // offer. Atlantis trains to ASNT SNT-TC-1A only. /training/cwi-training-{city}
    // is now the AWS CWI information page in CwiCertificationInfoPage.tsx.
};

interface CertLocationPageProps {
    city?: string;
    certSlug?: string;
}

export const CertTrainingLocationPage: React.FC<CertLocationPageProps> = ({ city, certSlug }) => {
    const { slug } = useParams<{ slug: string }>();
    const fullSlug = slug || certSlug || "";

    // Parse slug format: "api-510-training-houston" or "cwi-training-dubai"
    const parsedData = useMemo(() => {
        const parts = fullSlug.split("-");
        let certKey = "";
        let citySlug = "";

        // Try to match certification slugs
        const certSlugs = Object.keys(certificationDatabase);
        for (const cert of certSlugs) {
            if (fullSlug.startsWith(cert)) {
                certKey = cert;
                citySlug = fullSlug.substring(cert.length + 1); // +1 for the dash
                break;
            }
        }

        const cert = certificationDatabase[certKey];
        const location = keyLocations.find(
            (loc) => loc.slug === citySlug
        );

        return {
            certification: cert,
            location: location,
            certKey,
            isValid: !!cert && !!location,
            citySlug
        };
    }, [fullSlug]);

    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 2026-10-04: CWI slugs render the AWS CWI information page, not a course.
    if (fullSlug.startsWith("cwi-training-") && findCwiCity(fullSlug.slice("cwi-training-".length))) {
        return <CwiCertificationInfoPage citySlug={fullSlug.slice("cwi-training-".length)} />;
    }

    // 2026-09-30 soft-404 fix: slugs this template has no data for (e.g. the
    // /training/<vertical>-ndt-training-<city> pages) are real prerendered pages.
    // NotFound shows that published page, and only a true 404 gets the 404 screen.
    if (!parsedData.isValid || !parsedData.certification || !parsedData.location) {
        return <NotFound />;
    }

    const { certification, location, certKey } = parsedData;
    const colors = colorMap[certification.color];

    // SEO optimization
    const pageTitle = `${certification.name} in ${location.name}`;
    const pageDescription = `${certification.shortName} exam preparation and SNT-TC-1A Level III services for ${location.name}, ${location.region} employers and candidates, delivered live online or onsite at your facility.`;
    const keywords = `${certification.shortName} training ${location.name}, ${certification.name}, ${location.slug} inspection, NDT certification, ASNT NDT`;

    // Find other cities offering same cert
    const otherCities = keyLocations
        .filter(loc => loc.slug !== location.slug)
        .slice(0, 5);

    // Related certifications
    const relatedCerts = Object.entries(certificationDatabase)
        .filter(([key]) => key !== certKey)
        .slice(0, 4);

    const breadcrumbItems = [
        { label: "Home", path: "/" },
        { label: "Training", path: "/training" },
        { label: location.name, path: `/training/${location.slug}` },
        { label: certification.shortName, path: `#` }
    ];

    // JSON-LD Schema
    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": pageTitle,
        "description": certification.overview,
        "provider": {
            "@type": "Organization",
            "name": "Atlantis NDT",
            "sameAs": "https://atlantisndt.com"
        },
        "areaServed": {
            "@type": "City",
            "name": location.name,
            "addressRegion": location.region,
            "addressCountry": location.country
        },
        "educationalLevel": "Professional Certification",
        "duration": "Variable",
        "offers": {
            "@type": "Offer",
            "category": "Professional Training",
            "availability": "https://schema.org/InStock"
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": item.path === "#" ? undefined : `https://atlantisndt.com${item.path}`
        }))
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <SEOHead
                title={pageTitle}
                description={pageDescription}
                noindex={!isCuratedCity(parsedData.citySlug)}
                keywords={keywords}
                structuredData={[courseSchema, breadcrumbSchema]}
            />
            <Navigation />
      <PillarHubNav active="training" />

            {/* Breadcrumbs */}
            <Breadcrumbs items={breadcrumbItems} />

            {/* Hero Section */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`bg-gradient-to-r ${colors.bg} text-white py-16`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-start gap-6 mb-6">
                        <div className={`${colors.badge} px-4 py-2 rounded-lg font-bold text-lg`}>
                            {certification.shortName}
                        </div>
                        <div className="flex items-center gap-2 text-white/90">
                            <MapPin className="w-5 h-5" />
                            <span className="text-lg">{location.name}, {location.region}</span>
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{certification.name}</h1>
                    <h2 className="text-xl text-white/90 mb-8">Professional Certification Training in {location.name}</h2>
                    <CityJumpLinks path={`/training/${fullSlug}`} className="city-jump-links text-white/90 -mt-4 mb-8" />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                            <Clock className="w-6 h-6 mb-2" />
                            <div className="text-sm text-white/80">Exam Duration</div>
                            <div className="font-bold">{certification.examLength}</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                            <RefreshCw className="w-6 h-6 mb-2" />
                            <div className="text-sm text-white/80">Renewal</div>
                            <div className="font-bold">{certification.renewalPeriod}</div>
                        </div>
                        <div className="bg-white/10 backdrop-blur p-4 rounded-lg">
                            <DollarSign className="w-6 h-6 mb-2" />
                            <div className="text-sm text-white/80">Salary Impact</div>
                            <div className="font-bold text-sm">+$15-$30K/yr</div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-16">
                {/* Overview Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Program Overview</h2>
                    <Card className="border-none shadow-lg">
                        <CardContent className="pt-6">
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                {certification.overview}
                            </p>
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100">
                                <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                    <Zap className="w-5 h-5 text-blue-600" />
                                    Key Industry Focus
                                </h3>
                                <p className="text-slate-700">
                                    Training is tailored for professionals in {location.name}'s primary industries: {location.industries.join(", ")}.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>

                {/* Prerequisites */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Prerequisites & Eligibility</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <GraduationCap className={`w-6 h-6 ${colors.text}`} />
                                    Experience Requirements
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700 font-medium mb-4">
                                    {certification.prerequisites}
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                        <span className="text-slate-700">Documented work experience in field</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                        <span className="text-slate-700">Experience under qualified supervision in the method</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                        <span className="text-slate-700">Education route per ASNT's published eligibility</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <FileText className={`w-6 h-6 ${colors.text}`} />
                                    Application Process
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">1</div>
                                        <div>
                                            <div className="font-medium text-slate-900">Submit Application</div>
                                            <div className="text-sm text-slate-600">Provide work history and credentials</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">2</div>
                                        <div>
                                            <div className="font-medium text-slate-900">Verification</div>
                                            <div className="text-sm text-slate-600">Employer or a Level III signs the experience record</div>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center text-white text-sm font-bold">3</div>
                                        <div>
                                            <div className="font-medium text-slate-900">Examination</div>
                                            <div className="text-sm text-slate-600">Sit for certification exam</div>
                                        </div>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </motion.section>

                {/* Curriculum & Topics */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Curriculum & Topics Covered</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {certification.keyTopics.map((topic, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className={`${colors.light} p-4 rounded-lg border-l-4 ${colors.text.replace("text-", "border-")}`}
                            >
                                <div className="flex items-start gap-3">
                                    <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                                    <span className="text-slate-800 font-medium">{topic}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {/* Exam Preparation */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Exam Preparation Details</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-lg">Exam Format</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-700 leading-relaxed">
                                    {certification.examFormat}
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-lg">Study Resources</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        Official code manuals
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        Practice exam questions
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        Training webinars
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-lg">Success Tips</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm text-slate-700">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        10+ weeks study time
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        Join study group
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        Code familiarization
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </motion.section>

                {/* Standards & Codes */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Standards & Codes Covered</h2>
                    <Card className="border-none shadow-lg">
                        <CardContent className="pt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {certification.codes.map((code, idx) => (
                                    <div
                                        key={idx}
                                        className={`${colors.light} p-4 rounded-lg border-l-4 ${colors.text.replace("text-", "border-")} font-mono font-bold text-slate-900`}
                                    >
                                        {code}
                                    </div>
                                ))}
                            </div>
                            <p className="text-slate-600 mt-6 text-sm">
                                Codes are covered as context for procedure writing. NAS 410 / EN 4179 aerospace personnel are certified by their employer under its written practice with a Responsible Level 3; Atlantis's offer is ASNT Level III exam preparation and SNT-TC-1A Level III services.
                            </p>
                        </CardContent>
                    </Card>
                </motion.section>

                {/* Career Outcomes */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Career Outcomes & Opportunities</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <DollarSign className={`w-6 h-6 ${colors.text}`} />
                                    Salary Impact
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold text-slate-900 mb-2">
                                    {certification.careerImpact.salary}
                                </p>
                                <p className="text-sm text-slate-600">
                                    Certified professionals command premium compensation packages
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <TrendingUp className={`w-6 h-6 ${colors.text}`} />
                                    Market Demand
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-bold text-slate-900 mb-2">
                                    {certification.careerImpact.jobDemand}
                                </p>
                                <p className="text-sm text-slate-600">
                                    Certified professionals are actively recruited by major employers
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Briefcase className={`w-6 h-6 ${colors.text}`} />
                                    Career Paths
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {certification.careerImpact.opportunities.map((opp, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-slate-700">
                                            <Award className="w-4 h-4 text-green-600" />
                                            {opp}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </motion.section>

                {/* Standards Codes */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Why {location.name}?</h2>
                    <Card className="border-none shadow-lg">
                        <CardContent className="pt-6">
                            <p className="text-slate-700 mb-6 leading-relaxed">
                                {location.name} is a major industrial hub with significant presence in {location.industries.join(", ")}.
                                The region hosts leading manufacturers and service providers including {location.companies.slice(0, 2).join(" and ")},
                                creating abundant opportunities for certified inspection professionals. Training in {location.name} connects you with local industry networks and employment opportunities.
                                {" "}See the full <Link to="/training" className="text-primary underline">NDT training and certification</Link> catalogue for every method and level Atlantis offers beyond this course.
                            </p>
                            <div className="bg-slate-50 p-4 rounded-lg">
                                <h3 className="font-bold text-slate-900 mb-3">Local Industry Leaders:</h3>
                                <div className="flex flex-wrap gap-2">
                                    {location.companies.map((company, idx) => (
                                        <span
                                            key={idx}
                                            className={`${colors.light} px-3 py-1 rounded-full text-sm font-medium ${colors.text}`}
                                        >
                                            {company}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.section>

                {/* Related Certifications */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Advance Your Career</h2>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Related Certifications in {location.name}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {relatedCerts.map(([key, cert]) => (
                            <motion.div
                                key={key}
                                whileHover={{ y: -5 }}
                                className="group"
                            >
                                <Link
                                    to={`/training/${key}-${location.slug}`}
                                    className="block h-full"
                                >
                                    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-3">
                                                <div className={`${colorMap[cert.color as keyof typeof colorMap].light} p-2 rounded-lg`}>
                                                    <Award className={`w-5 h-5 ${colorMap[cert.color as keyof typeof colorMap].text}`} />
                                                </div>
                                                <span>{cert.shortName}</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-slate-700 text-sm mb-4">
                                                {cert.name}
                                            </p>
                                            <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                                                <span className="text-sm font-medium">Learn More</span>
                                                <span className="text-lg">→</span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                    {findCwiCity(location.slug) && (
                        <p className="text-slate-700 mt-6">
                            Welding inspectors often pair NDT certification with the AWS credential:{" "}
                            <Link to={`/training/cwi-training-${location.slug}`} className="text-primary underline">
                                CWI certification in {location.name}: requirements and how ASNT NDT training complements it
                            </Link>.
                        </p>
                    )}
                </motion.section>

                {/* Same Cert Other Cities */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{certification.shortName} Training Worldwide</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {otherCities.map((city) => (
                            <Link
                                key={city.slug}
                                to={`/training/${certKey}-${city.slug}`}
                                className="group"
                            >
                                <Card className="border-none shadow-md hover:shadow-lg transition-shadow h-full">
                                    <CardContent className="pt-6">
                                        <div className="flex items-center gap-3 mb-2">
                                            <MapPin className="w-5 h-5 text-blue-600" />
                                            <h3 className="font-bold text-slate-900">{city.name}</h3>
                                        </div>
                                        <p className="text-sm text-slate-600 mb-3">{city.region}, {city.country}</p>
                                        <div className="text-blue-600 group-hover:text-blue-700 font-medium text-sm flex items-center gap-1">
                                            View Details <span className="group-hover:translate-x-1 transition-transform">→</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </motion.section>

                {/* CTA Section */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div className={`bg-gradient-to-r ${colors.bg} text-white rounded-lg p-12 text-center`}>
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Get Certified?
                        </h2>
                        <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                            Begin your journey to becoming a certified {certification.shortName} professional. Advance your career in {location.name}'s booming industrial sector.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-3 rounded-lg font-bold transition-colors">
                                Enroll Now
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition-colors">
                                Request Information
                            </button>
                        </div>
                    </div>
                </motion.section>

                <DeepContent path={`/training/${fullSlug}`} />

                {/* Contact */}
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                    <TrainingEnquiryCTA />
      <ContactDetails />
                </motion.section>
            </div>
        </div>
    );
};

// Helper icon component not imported
const RefreshCw = ({ className }: { className: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
);

export default CertTrainingLocationPage;
