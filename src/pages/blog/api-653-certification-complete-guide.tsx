import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqs = [
    { question: "What is API 653 certification?", answer: "API 653 (Tank Inspection, Repair, Alteration, and Reconstruction) is a certification by the American Petroleum Institute designating professionals as authorized inspectors for above-ground storage tanks (ASTs). API 653 certified inspectors are legally authorized to approve tank repairs, alterations, and reconstructions. The certification requires passing a rigorous examination covering tank inspection procedures, fitness-for-service assessment, repair authorization, and compliance with API standards. API 653 certification is NOT a technician-level qualification - it's a professional certification requiring significant experience, typically held by engineers with 10+ years industry experience." },
    { question: "How difficult is the API 653 exam?", answer: "The API 653 exam is notoriously difficult with reported pass rates of only 35-45% on first attempt. The exam consists of 80 multiple-choice questions (4 hours) covering: tank construction standards, inspection procedures, defect evaluation and acceptance, fitness-for-service, repair/alteration approval, tank histories, and regulatory requirements. The exam is closed-book but candidates can bring API 650, API 653, and ASME standards as reference materials. Success requires not just memorizing standards but understanding their application to real-world tank scenarios. Most passing candidates invest 200-400 hours of study over 3-6 months. A score of 70% or higher is required to pass; the exam is designed to test competency, not memorization." },
    { question: "What are the prerequisites for API 653 certification?", answer: "API 653 candidates must meet ALL of these prerequisites: (1) Minimum 10 years professional engineering or inspection experience in the oil/gas/chemical industry, (2) Minimum 5 years specific experience with above-ground storage tanks (AST design, construction, inspection, repair), (3) High school diploma or equivalent (most candidates have engineering degrees), (4) No employer restrictions (some employers require internal approval before certification), (5) Pay exam fees ($400-$600). Unlike ASNT Level II/III which technicians obtain through on-the-job training, API 653 requires extensive documented experience verified through signed affidavits and employer verification. API does NOT accept resumes or general NDT experience - tank-specific experience is mandatory." },
    { question: "How much does API 653 certification cost?", answer: "Total cost including exam, study materials, and opportunity costs typically ranges from $1,500-$5,000: Exam fee ($400-$600), Study courses ($500-$2,000 if formal training taken, otherwise self-study), Books/standards ($200-$500), Review courses ($0-$1,000 optional), Retest fee if failed ($400-$600). Beyond direct costs, candidates typically invest 200-400 hours of personal study time. For professionals earning $80,000-$120,000+ annually, the opportunity cost of study time is significant. However, API 653 certification typically increases salary by $15,000-$30,000 annually, making the ROI positive within 1-2 years. The certification also makes professionals eligible for higher-paid consultant and expert witness roles." },
    { question: "What is the API 653 exam pass rate?", answer: "Official API 653 exam pass rates are 35-50% depending on the year and exam session. Industry sources estimate approximately 40% of first-time candidates pass. This low pass rate reflects the exam's rigorous design - it tests competency to authorize major tank repairs, not just technical knowledge. Candidates who fail are permitted to retake the exam after 30 days; retake pass rates are slightly higher (50-60%) as candidates have already studied and identify weak areas. Statistical analysis shows candidates investing 300+ hours of study achieve 75-80% pass rates, while those with 100-150 hours study achieve only 20-40% pass rates. Success strongly correlates with study time investment and practical tank inspection experience." },
    { question: "What salary increase comes with API 653 certification?", answer: "API 653 certification typically increases salary by 20-35% compared to non-certified engineers: An experienced engineer (10+ years) without API 653 might earn $90,000-$110,000 annually. Post-API 653 certification, the same professional can command $110,000-$145,000+. Consulting rates for API 653 inspectors are typically $150-$300/hour ($300,000-$600,000 annualized at full utilization). The salary increase reflects market demand - API 653 certified inspectors are scarce relative to need. Oil & gas refinery operations require API 653 certified inspectors; the inspector pool has experienced retirements without enough new certifications, creating a talent shortage that drives premiums. Professionals holding API 653 + API 510 + API 570 (the \"triple crown\" of API certifications) can command top salaries in consulting ($120,000-$180,000+ fixed salary + significant annual bonuses)." },
    { question: "How long does it take to prepare for API 653?", answer: "Typical preparation timeline is 3-6 months of intensive study: Month 1-2: Review API 653, API 650, ASME standards; take practice exams; identify weak areas. Month 3-4: Deep dive on weak topics; work through case studies; simulate exam conditions. Month 5-6: Final review; take full-length practice exams; memorize key tables and figures. Most successful candidates invest 300-400 hours total study time (equivalent to 10-15 hours/week over 6 months). Candidates with strong API 650 (tank design) and API 579 (fitness-for-service) background may require only 200-250 study hours. Some exceptionally experienced tank inspectors with 20+ years in the field have passed with 150-200 hours study. First-time candidates lacking tank design background typically need 400+ hours. Total timeline: 3-6 months; candidates balancing full-time work generally stretch to 6-9 months." },
    { question: "What materials should I use to study for API 653?", answer: "Recommended study materials: (1) API 653 (Tank Inspection, Repair, Alteration, and Reconstruction) - mandatory reference, (2) API 650 (Welded Tanks for Oil Storage) - tank design fundamentals, (3) API 579 (Fitness-for-Service) - defect evaluation methodology, (4) ASME Section V (Non-Destructive Examination) - NDT code requirements, (5) ASME Section VIII Division 1 (Pressure Vessels) - pressure vessel design basics, (6) API RP 579 (Recommended Practice for Fitness-for-Service Evaluation) - detailed guidance, (7) Practice exams and case studies - essential for exam familiarity. Major exam prep companies (TPC Training, IPC Academy, others) offer API 653 review courses ($500-$2,000) covering exam strategy, high-yield topics, and practice problems. Formal review courses increase pass rates from 35-45% to 55-70%, making them valuable investment for most candidates." },
    { question: "Is API 653 certification required for tank inspection?", answer: "API 653 certification is NOT required to perform tank inspections - ASNT Level II (UT, MT, PT, VT) technicians can conduct inspections. However, API 653 certification IS required to AUTHORIZE repairs, alterations, and reconstructions of tanks per API 653 Section 4. In practice: ASNT Level II technicians perform physical inspections (measure thickness, detect defects). API 653 certified engineers evaluate findings, determine fitness-for-service, and authorize repairs. At smaller companies, one person may hold both ASNT Level III + API 653 combined. For career advancement in tank inspection, pursuing API 653 is essential - it elevates professionals from technician roles (~$70,000 annually) to engineer/inspector roles ($110,000-$150,000+ annually) with authority to make business-critical decisions about tank operations." },
    { question: "How does API 653 compare to API 510 and API 570?", answer: "All three are American Petroleum Institute inspector certifications targeting different equipment: API 653 (Tank Inspection) - above-ground storage tanks per API 650/651. API 510 (Pressure Vessel Inspection) - pressure vessels, boilers per ASME Section VIII. API 570 (Piping Inspection) - pipelines and piping systems. Each certification is independent and exam difficulty is comparable (35-50% pass rates). Professionals working across multiple equipment types often pursue multiple certifications - the \"triple crown\" API 510+570+653 demonstrates broad expertise commanding premium consulting rates. Prerequisites are similar: 10 years industry experience + equipment-specific background. Study overlap exists (all require ASME Section V + Section VIII knowledge). Some organizations require candidates hold API 510 before attempting API 653; others have no prerequisites. For tank specialists, API 653 is the primary certification; for oil & gas professionals wanting broad expertise, pursuing 510+570+653 creates significant career advantage and earning potential." }
];

const examStructure = [
    { section: "Tank Design & Construction", percentage: "20-25%", topics: "API 650 design standards, tank types (fixed roof, floating roof), welded construction, plate thickness requirements, foundation design" },
    { section: "Inspection Procedures", percentage: "25-30%", topics: "External/internal inspections, NDT methods (UT, MT, MFL), inspection intervals per RBI, thickness measurement, corrosion assessment" },
    { section: "Defect Evaluation & Acceptance", percentage: "20-25%", topics: "Fitness-for-service assessment per API 579, remaining life calculation, acceptance criteria, defect categories (corrosion, cracking, settlement)" },
    { section: "Repair & Alteration", percentage: "15-20%", topics: "Repair procedures, welding requirements, hot-tapping for repairs, tank modifications, alteration documentation and approval" },
    { section: "Standards & Regulations", percentage: "10-15%", topics: "API 653/650 standards, ASME Section V/VIII, environmental regulations, tank integrity requirements, change management" }
];

const studyTimeline = [
    { month: "Month 1", focus: "Foundation Building", activities: "Review API 650 (tank design), API 653 overview, understand tank anatomy, learn major standards" },
    { month: "Month 2", focus: "Inspection & Defect Evaluation", activities: "Study inspection procedures, defect types, API 579 fitness-for-service, practice defect scenarios" },
    { month: "Month 3", focus: "Repair Authorization & Advanced Topics", activities: "Tank alteration procedures, complex repair scenarios, case studies, regulatory compliance" },
    { month: "Month 4", focus: "Practice Exams & Weak Areas", activities: "Full-length practice exams, identify knowledge gaps, intensive study of weak topics" },
    { month: "Month 5", focus: "Final Preparation & Simulation", activities: "Practice exams under exam conditions (4 hours, 80 questions), memorize key tables and figures" },
    { month: "Month 6", focus: "Exam Day Preparation", activities: "Review exam logistics, ensure all materials ready, light review, minimize study anxiety" }
];

const careerProgression = [
    { title: "Entry-Level Inspector (without API 653)", years: "0-5 years", salary: "$60,000-$80,000", responsibilities: "Assist with tank inspections, learn inspection procedures, NDT technician work" },
    { title: "Senior Inspector (without API 653)", years: "5-10 years", salary: "$80,000-$105,000", responsibilities: "Lead inspections, write reports, limited repair authorization (with engineer approval)" },
    { title: "API 653 Certified Inspector", years: "10+", salary: "$110,000-$145,000", responsibilities: "Authorize repairs, evaluate fitness-for-service, provide expert consulting" },
    { title: "API 653 + API 510 + API 570 (Triple Crown)", years: "12+", salary: "$130,000-$180,000+", responsibilities: "Multi-equipment expertise, high-level consulting, expert witness testimony" },
    { title: "Independent Consultant (API 653)", years: "15+", salary: "$150-$300/hour consulting", responsibilities: "Contract inspection work, turnaround management, RBI planning" }
];

const tipsForSuccess = [
    { tip: "Deep dive on API 579 methodology", description: "API 653 exam heavily tests fitness-for-service evaluation per API 579. Understand defect categorization, remaining strength calculation, and how to apply thickness measurements to decision-making. This is the highest-yield study area." },
    { tip: "Know API 650 Section 5.3 (Inspection) cold", description: "API 650 Section 5.3 covers inspection procedures directly tested on API 653. Memorize inspection intervals, frequency factors, thickness measurement requirements, and RBI concepts from this section." },
    { tip: "Study real case studies", description: "Work through actual tank failure cases (available in API guidelines and industry publications). Understanding how real-world defects led to decisions about repair vs replacement cements knowledge better than memorizing standards alone." },
    { tip: "Master the tank inspection matrix", description: "Create a matrix showing which NDT methods (UT, MT, MFL, acoustic emission) are required for different tank components (shell, floor, roof, welds). Exam questions frequently test this knowledge." },
    { tip: "Understand corrosion rate calculations", description: "API 653 emphasizes Risk-Based Inspection (RBI). Practice calculating corrosion rates from historical thickness data and predicting remaining safe life. Exam includes 4-5 questions requiring RBI calculations." },
    { tip: "Know the difference between IN-SERVICE and OUT-OF-SERVICE repairs", description: "API 653 differentiates repair procedures based on whether tank remains in service. Exam tests understanding of hot-tapping procedures, pressure venting, and specialized repair techniques." },
    { tip: "Practice under exam conditions", description: "Take full-length practice exams in exactly 4 hours with limited resources (only standards allowed). Exam simulation builds stamina and reveals time management issues." },
    { tip: "Join study groups or take review courses", description: "Candidates using formal review courses or study groups have significantly higher pass rates (55-70%) than solo self-study (35-45%). The peer learning and instructor guidance pays off." }
];

const comparisonAPICerts = [
    { aspect: "Equipment Scope", api653: "Above-ground storage tanks", api510: "Pressure vessels, boilers", api570: "Pipelines, piping systems" },
    { aspect: "Primary Standard", api653: "API 650/653, ASME Section VIII", api510: "ASME Section VIII Division 1", api570: "ASME B31.3, API 1104/1110" },
    { aspect: "Exam Difficulty", api653: "40% pass rate (difficult)", api510: "45% pass rate", api570: "50% pass rate" },
    { aspect: "Study Hours Required", api653: "300-400 hours", api510: "250-350 hours", api570: "200-300 hours" },
    { aspect: "Experience Prerequisite", api653: "10 yrs + 5 yrs tank-specific", api510: "10 yrs + 5 yrs vessel experience", api570: "10 yrs + 5 yrs pipeline experience" },
    { aspect: "Typical Salary (USA)", api653: "$110-145K", api510: "$105-140K", api570: "$100-135K" },
    { aspect: "Career Versatility", api653: "Tank specialist, narrower", api510: "Broad pressure equipment", api570: "Broad pipeline/piping" },
    { aspect: "Consulting Rates", api653: "$150-300/hour", api510: "$150-300/hour", api570: "$125-250/hour" }
];

export default function API653CertificationCompleteGuide() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "API 653 Certification: Complete Tank Inspector Guide 2026",
                "description": "Complete guide to API 653 certification for tank inspectors. Exam structure, study materials, prerequisites, pass rates, salary expectations, renewal process, comparison with API 510/570, real exam tips, and study timeline.",
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-03-09",
                "dateModified": "2026-03-09"
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
            <SEOHead
                title="API 653 Certification: Complete Guide [Exam, Study, Prerequisites, Salary 2026]"
                description="Master API 653 certification for tank inspectors. Learn exam structure, prerequisites, study materials, pass rates (40%), salary increase, renewal requirements, API 510/570 comparison, expert exam tips, and 6-month study timeline."
                keywords="API 653, API 653 certification, API 653 exam, tank inspector, tank inspection, API 650, API 579 fitness-for-service, above-ground storage tank, AST inspector, API 653 study guide, API 653 salary"
                canonical="https://atlantisndt.com/blog/api-653-certification-complete-guide"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-amber-700 to-orange-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-amber-200 mb-4">Certification Guide • March 2026 • 18 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">API 653 Certification: Complete Tank Inspector Guide</h1>
                        <p className="text-xl text-amber-100 mb-8">Master API 653 certification. Learn exam structure, prerequisites, study timeline, exam tips, pass rates, salary expectations, and how API 653 compares to API 510/570 certifications.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="API 653 Certification: Complete Tank Inspector Guide" description="Master API 653 exam, study materials, prerequisites, and career path." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">
                    {/* What is API 653 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">What is API 653 Certification?</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            API 653 (Tank Inspection, Repair, Alteration, and Reconstruction) is a professional certification issued by the American Petroleum Institute designating engineers and inspectors as authorized to manage above-ground storage tank (AST) inspections, evaluate fitness-for-service, and authorize tank repairs and alterations.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Unlike ASNT Level I/II/III certifications which are technician-level NDT qualifications, API 653 is a professional engineering certificate requiring 10+ years of industry experience and demonstrating expert competency in tank standards, fitness-for-service assessment, and repair authorization. An API 653 certified inspector has legal authority under API 653 Section 4 to approve major tank alterations and repairs.
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                            <h3 className="font-semibold text-amber-900 mb-3">API 653 Professional Authority:</h3>
                            <ul className="text-amber-800 space-y-2">
                                <li>Authorize tank repairs, alterations, and reconstructions</li>
                                <li>Evaluate fitness-for-service and remaining safe operating life</li>
                                <li>Establish inspection intervals using Risk-Based Inspection (RBI)</li>
                                <li>Sign off on NDT inspection reports and repair documentation</li>
                                <li>Make business-critical decisions about tank continued operation</li>
                                <li>Serve as expert witness in litigation involving tank integrity</li>
                            </ul>
                        </div>
                    </section>

                    {/* Exam Structure */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">API 653 Exam Structure</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The API 653 exam is a comprehensive, closed-book (but open-standard) examination testing competency across all aspects of above-ground storage tank inspection, repair, and fitness-for-service assessment.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Exam Format</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex gap-3">
                                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Duration:</strong> 4 hours (240 minutes)</span>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Format:</strong> 80 multiple-choice questions</span>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Passing Score:</strong> 70% (56 out of 80 questions correct)</span>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Allowed References:</strong> API 650, API 653, ASME standards (no other materials)</span>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Retakes:</strong> Permitted after 30-day waiting period if initial attempt fails</span>
                                </li>
                            </ul>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Exam Content Distribution</h3>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-semibold">Content Area</th>
                                        <th className="px-4 py-3 text-left font-semibold">Exam Percentage</th>
                                        <th className="px-4 py-3 text-left font-semibold">Key Topics</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {examStructure.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-4 py-3 font-medium">{item.section}</td>
                                            <td className="px-4 py-3 text-amber-700 font-semibold">{item.percentage}</td>
                                            <td className="px-4 py-3 text-sm text-slate-600">{item.topics}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Exam Difficulty Note:</strong> The API 653 exam has a 40% pass rate on first attempt, making it one of the most difficult professional certifications. Questions test not just knowledge of standards but application of that knowledge to real-world tank scenarios. A candidate memorizing standards will likely fail; success requires understanding when and how to apply standards to complex inspection scenarios.
                            </p>
                        </div>
                    </section>

                    {/* Prerequisites */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">API 653 Prerequisites and Eligibility</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            API 653 has strict prerequisites ensuring candidates have substantial professional experience before attempting certification. API does NOT accept resumes or general industry experience - tank-specific experience is mandatory.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Mandatory Requirements</h3>
                        <div className="grid gap-4 mb-8">
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2">Minimum Total Experience</h4>
                                <p className="text-slate-700 mb-3">10 years total professional engineering or inspection experience in oil, gas, petrochemical, or refining industries. Experience must be in equipment design, construction, operation, inspection, or maintenance.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2">Tank-Specific Experience</h4>
                                <p className="text-slate-700 mb-3">Minimum 5 years specific experience with above-ground storage tanks (API 650/651 construction, inspection, repair, operation, or maintenance). Experience must be documented and verified by employer letter.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2">Educational Background</h4>
                                <p className="text-slate-700 mb-3">High school diploma or equivalent minimum. Most candidates have engineering degrees. Strong understanding of API 650 tank design standards is expected.</p>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                <h4 className="font-bold text-lg mb-2">Employer Authorization</h4>
                                <p className="text-slate-700 mb-3">Some employers require internal approval before employee attempts certification. Verify with your employer before registering for exam.</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Experience Documentation</h3>
                        <p className="text-slate-600 mb-4">
                            API requires detailed documentation of experience through signed affidavits and employer verification letters. Self-attested experience without employer verification is not accepted. Typical documentation includes:
                        </p>
                        <ul className="bg-white p-6 rounded-lg shadow-sm space-y-2 text-slate-700">
                            <li>• Employer letter confirming tank-specific experience and responsibilities</li>
                            <li>• Job descriptions showing tank inspection, design, or maintenance work</li>
                            <li>• List of specific projects/tanks inspected or worked on</li>
                            <li>• Reference letters from professional colleagues confirming experience level</li>
                            <li>• Evidence of API 650/653 study and professional development</li>
                        </ul>
                    </section>

                    {/* Study Timeline */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">6-Month API 653 Study Timeline</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Successful API 653 candidates invest 300-400 hours of study over 3-6 months. This timeline assumes full-time employment with study during evenings/weekends. Adjust pacing based on your baseline knowledge.
                        </p>

                        <div className="space-y-4 mb-8">
                            {studyTimeline.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <div className="flex items-start justify-between mb-3">
                                        <h4 className="font-bold text-lg text-amber-900">{item.month}</h4>
                                        <span className="text-sm px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-semibold">{item.focus}</span>
                                    </div>
                                    <p className="text-slate-600"><strong>Activities:</strong> {item.activities}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Study Hour Benchmarks:</strong> 100-150 hours study = 25-35% pass rate. 200-250 hours = 40-50% pass rate. 300-350 hours = 65-75% pass rate. 400+ hours = 80%+ pass rate. The wide range reflects individual learning styles and baseline experience - candidates with 10-year background in tank inspection need fewer study hours than those recently transitioning into tank inspection roles.
                            </p>
                        </div>
                    </section>

                    {/* Study Materials */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Essential Study Materials</h2>
                        <div className="grid gap-4 mb-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Required Standards</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-slate-700">
                                        <li><strong>API 653 (Tank Inspection, Repair, Alteration, and Reconstruction)</strong> - The primary standard</li>
                                        <li><strong>API 650 (Welded Tanks for Oil Storage)</strong> - Tank design and construction fundamentals</li>
                                        <li><strong>API 579 (Fitness-for-Service)</strong> - Defect evaluation methodology (critical for exam)</li>
                                        <li><strong>ASME Section VIII Division 1</strong> - Pressure vessel design principles applicable to tanks</li>
                                        <li><strong>ASME Section V</strong> - NDT code requirements (inspection methods)</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Study Courses (Recommended)</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-slate-700">
                                        <li><strong>TPC Training API 653 Review Course</strong> - Comprehensive 40-hour course, $1,200-1,500</li>
                                        <li><strong>IPC Academy API 653 Workshop</strong> - Intensive 5-day program, $2,000</li>
                                        <li><strong>Local ASME/API Chapter Review Sessions</strong> - Often free or low-cost for members</li>
                                        <li><strong>University Extension Programs</strong> - Some universities offer API 653 preparation (cost varies)</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Practice Materials</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-slate-700">
                                        <li><strong>API Practice Exams</strong> - Full 80-question exams simulating actual exam conditions</li>
                                        <li><strong>Case Study Collections</strong> - Real-world tank failure and repair scenarios</li>
                                        <li><strong>Flash Cards</strong> - Key tables, formulas, inspection intervals (available in print and digital)</li>
                                        <li><strong>Study Group Materials</strong> - Peer-developed study guides and question sets</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Tips for Success */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">8 Expert Tips for API 653 Exam Success</h2>
                        <div className="space-y-4">
                            {tipsForSuccess.map((item, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                                    <h4 className="font-bold text-lg mb-2 text-amber-900">{idx + 1}. {item.tip}</h4>
                                    <p className="text-slate-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Salary & Career */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">API 653 Career Progression and Salary</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            API 653 certification dramatically improves career trajectory and earning potential. The certification transforms professionals from technician roles (supervising others but without authorization to approve repairs) to professional engineer roles with business-critical authority.
                        </p>

                        <h3 className="text-2xl font-bold mb-4">Career Path and Salary Growth</h3>
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Career Stage</th>
                                        <th className="px-3 py-2 text-left font-semibold">Years</th>
                                        <th className="px-3 py-2 text-left font-semibold">Salary (USA)</th>
                                        <th className="px-3 py-2 text-left font-semibold">Role Focus</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {careerProgression.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.title}</td>
                                            <td className="px-3 py-2">{item.years}</td>
                                            <td className="px-3 py-2 font-semibold text-amber-700">{item.salary}</td>
                                            <td className="px-3 py-2 text-xs">{item.responsibilities}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Geographic Salary Variations</h3>
                        <div className="grid md:grid-cols-2 gap-4 mb-8">
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">High-Salary Regions</h4>
                                <ul className="text-slate-600 text-sm space-y-1">
                                    <li>Houston, TX: $130,000-$160,000 (oil & gas hub)</li>
                                    <li>New Orleans, LA: $120,000-$150,000 (refinery concentration)</li>
                                    <li>Dubai/UAE: $100,000-$140,000 USD equiv. (tax-free, expat premium)</li>
                                    <li>Singapore: SGD 150,000-190,000 (petrochemical hub)</li>
                                </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-sm">
                                <h4 className="font-bold mb-2">Independent Consulting</h4>
                                <ul className="text-slate-600 text-sm space-y-1">
                                    <li>Hourly rate: $150-$300/hour</li>
                                    <li>Annualized (full utilization): $300,000-$600,000</li>
                                    <li>Typical utilization: 60-70% = $180,000-$300,000 annualized</li>
                                    <li>Refinery turnaround work commands premium rates</li>
                                </ul>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Return on Investment for API 653</h3>
                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900 mb-3">
                                <strong>Salary increase from API 653:</strong> Typically 20-35% above baseline non-certified salary. A professional earning $90,000 pre-certification can expect $110,000-$120,000 post-certification (conservative estimate). Annual salary increase of $20,000-$30,000.
                            </p>
                            <p className="text-amber-900">
                                <strong>ROI Timeline:</strong> Total certification cost (exam + study time opportunity cost) typically recovers in 1 year of salary increase. After that, API 653 provides 20-30 year career earning advantage. A professional certified at age 40 could accumulate $600,000-$900,000 additional earnings by age 65 from the certification premium.
                            </p>
                        </div>
                    </section>

                    {/* Renewal & Maintenance */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">API 653 Renewal and Maintenance</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            API 653 certification is valid indefinitely - there is NO expiration date or mandatory renewal. However, professionals must maintain currency through documented professional development.
                        </p>

                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500 mb-6">
                            <h4 className="font-bold text-lg mb-3">No Mandatory Renewal But Professional Development Expected</h4>
                            <p className="text-slate-700 mb-3">
                                Unlike ASNT certifications (3-5 year renewal cycles), API 653 has no formal renewal requirement. However, API expects certified individuals to maintain competency through:
                            </p>
                            <ul className="text-slate-600 space-y-2">
                                <li>• Regular tank inspection work (hands-on experience)</li>
                                <li>• Attendance at industry conferences and seminars</li>
                                <li>• Review of new or updated API standards</li>
                                <li>• Participation in professional organizations (ASME, local API chapters)</li>
                                <li>• Mentoring junior inspectors</li>
                            </ul>
                        </div>

                        <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500">
                            <p className="text-amber-900">
                                <strong>Practical Reality:</strong> Professionals who stop performing tank inspections or fall out-of-date with current API standards may have their API 653 status questioned by employers or in litigation. Best practice is to take annual refresher courses, attend API workshops, and maintain active involvement in tank inspection work to defend the certification's validity.
                            </p>
                        </div>
                    </section>

                    {/* Comparison with API 510/570 */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">API 653 vs API 510 vs API 570 Comparison</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            The three major API inspector certifications serve different equipment types. Understanding the differences helps professionals choose certification paths aligned with career goals.
                        </p>

                        <div className="overflow-x-auto mb-8">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-amber-100">
                                    <tr>
                                        <th className="px-3 py-2 text-left font-semibold">Aspect</th>
                                        <th className="px-3 py-2 text-left font-semibold">API 653 (Tanks)</th>
                                        <th className="px-3 py-2 text-left font-semibold">API 510 (Vessels)</th>
                                        <th className="px-3 py-2 text-left font-semibold">API 570 (Piping)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonAPICerts.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold text-sm">{item.aspect}</td>
                                            <td className="px-3 py-2 text-xs">{item.api653}</td>
                                            <td className="px-3 py-2 text-xs">{item.api510}</td>
                                            <td className="px-3 py-2 text-xs">{item.api570}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold mb-4">Triple Crown: API 510 + 570 + 653</h3>
                        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-amber-500">
                            <p className="text-slate-700 mb-4">
                                Professionals holding all three API certifications (called the "Triple Crown") command significant premiums in consulting and senior roles. The combination demonstrates broad expertise across all major equipment types in oil & gas operations.
                            </p>
                            <ul className="text-slate-700 space-y-2">
                                <li><strong>Career Advantage:</strong> Consultants with triple crown are in high demand for refinery turnarounds, facility integrity assessments, and expert witness roles</li>
                                <li><strong>Salary Premium:</strong> Triple crown holders typically earn $130,000-$180,000+ fixed salary + significant annual bonuses, or $150-$300/hour in consulting</li>
                                <li><strong>Study Investment:</strong> Total 900-1,100 hours study across all three (~2-3 years of focused effort)</li>
                                <li><strong>Time Strategy:</strong> Many professionals obtain one certification (API 510 or 653) first, then add remaining certifications over 3-5 years</li>
                            </ul>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg mb-3 text-slate-800">{faq.question}</h3>
                                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-gradient-to-r from-amber-600 to-orange-600 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Ready to Pursue API 653 Certification?</h2>
                        <p className="text-amber-100 mb-6 max-w-2xl mx-auto">We provide comprehensive API 653 study support, practice exams, and coaching to help you pass on first attempt. Our candidates achieve 65-75% pass rates - well above industry average.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-amber-600 font-semibold rounded-lg hover:bg-gray-100 transition">API 653 Study Program</Link>
                            <Link to="/training" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">Review Course</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Certification Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link to="/api-510-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 510 Certification</h3>
                                <p className="text-slate-600 text-sm mt-2">Pressure vessel inspection and certification guide</p>
                            </Link>
                            <Link to="/api-570-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">API 570 Certification</h3>
                                <p className="text-slate-600 text-sm mt-2">Pipeline inspection and certification guide</p>
                            </Link>
                            <Link to="/asnt-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-amber-600 transition">ASNT Certification</h3>
                                <p className="text-slate-600 text-sm mt-2">NDT technician level I/II/III training</p>
                            </Link>
                        </div>
                    </section>
                </div>
            </article>

            <ContactDetails />
        </div>
    );
}
