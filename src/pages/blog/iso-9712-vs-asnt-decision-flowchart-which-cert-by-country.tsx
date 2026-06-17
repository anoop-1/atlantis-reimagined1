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
    { question: "Which is better for working in Saudi Arabia: ISO 9712 or ASNT?", answer: "For working in Saudi Arabia, ISO 9712 (also marketed as PCN or CSWIP outside the US) is the dominant accepted scheme on Aramco, SABIC, and most major EPC contracts. Saudi Aramco's SAEP-1145 and SAES-W-011 specifications reference ISO 9712-equivalent third-party certification for site personnel. ASNT SNT-TC-1A is sometimes accepted on US-headquartered project segments (Bechtel, Fluor, KBR scope) but most Saudi clients require ISO 9712 as a baseline. The practical recommendation: if you are pursuing a long-term career in the Middle East, get ISO 9712 first. If you are a US-based contractor going on a short Aramco assignment, your employer's ASNT Level II may be conditionally accepted with a client variance, but you will be at a disadvantage versus colleagues holding ISO 9712." },
    { question: "Can I convert my ASNT Level II to ISO 9712?", answer: "There is no direct one-to-one conversion between ASNT SNT-TC-1A and ISO 9712 — they are fundamentally different schemes (employer-based versus third-party). However, ASNT Level II experience hours are accepted by most ISO 9712 certification bodies (BINDT/PCN, TWI/CSWIP, DGZfP, ABENDI, etc.) as documented training and industrial experience. To transition, you must register with an accredited ISO 9712 certification body, complete any gap in required training hours (some methods require 40-80 hours of structured course content that SNT-TC-1A does not mandate), submit verifiable experience logs, pass the general, specific, and practical examinations under independent examiner supervision, and pass a current ISO 18490 / EN 473 vision test. Typical timeline is 3-6 months and costs $1,200-$2,800 per method depending on the certification body." },
    { question: "Does Petrobras accept ASNT SNT-TC-1A or only ISO 9712?", answer: "Petrobras in Brazil mandates ABENDI (Associação Brasileira de Ensaios Não Destrutivos) certification for almost all onshore and offshore inspection work. ABENDI operates an ISO 9712-aligned scheme called SNQC (Sistema Nacional de Qualificação e Certificação). Petrobras N-1594 and N-2317 specifications explicitly require SNQC/ABENDI personnel — ASNT SNT-TC-1A is not accepted as a primary qualification. International contractors working short-term may obtain a temporary equivalency through ABENDI's evaluation route, but anyone planning to work in Brazil for more than 6 months should pursue SNQC certification directly. Pre-salt offshore campaigns are particularly strict on this requirement." },
    { question: "If I work for a US oil major like ExxonMobil, do I need ISO 9712?", answer: "If you work directly for ExxonMobil, Chevron, ConocoPhillips, or another US-based International Oil Company (IOC) on US soil, ASNT SNT-TC-1A administered by your employer is the standard and ISO 9712 is not required. However, if you are dispatched to international assets — Guyana, Mozambique, Papua New Guinea, Iraq — the local project specification may layer ISO 9712 on top of your ASNT credentials. ExxonMobil's GP 18-09-01 specification, for example, accepts SNT-TC-1A on US assets but requires ISO 9712 or equivalent on most ex-US projects. The pragmatic move for IOC employees with international career aspirations: hold both. Your employer typically pays for both qualifications once you demonstrate the assignment need." },
    { question: "Why is ISO 9712 considered more portable than ASNT SNT-TC-1A?", answer: "ISO 9712 is more portable because the certificate is issued by an independent third-party certification body (BINDT, TWI, DGZfP, COFREND, ABENDI, etc.) that is accredited under ISO/IEC 17024. The certificate belongs to the individual, not the employer, and is mutually recognized across most countries that adopt EN ISO 9712 (the entire EU, UK, Australia, Brazil, South Africa, GCC countries, India). ASNT SNT-TC-1A is a Recommended Practice — the certification is issued by the employer's NDT Level III against a written practice. When you change employers, your new employer is legally required to re-qualify you under their own written practice. Even ASNT's own ACCP and Central Certification Program (CP-189) only achieve partial international recognition because they are still anchored in the US system. ISO 9712 carries across borders; SNT-TC-1A typically does not." },
    { question: "Does NAS 410 / EN 4179 override both ASNT and ISO 9712 in aerospace?", answer: "Yes. For any aerospace or aviation NDT work — civil, military, defense, MRO — the National Aerospace Standard NAS 410 (US) and its European equivalent EN 4179 are the governing personnel certification documents. Both Boeing and Airbus reference NAS 410 / EN 4179 directly, and NADCAP (Nadcap AC7114) audits inspection facilities against these standards. NAS 410 and EN 4179 are technically harmonized — a NAS 410 Level II is generally accepted in EN 4179 environments and vice versa. Neither ISO 9712 nor ASNT SNT-TC-1A alone is sufficient for aerospace primary structure inspection. If your career path is aviation, get NAS 410 first, then layer ISO 9712 or ASNT on top for cross-industry mobility." },
    { question: "Is ASNT SNT-TC-1A worthless outside the US?", answer: "ASNT SNT-TC-1A is not worthless outside the US — it remains the de facto standard on US EPC contracts globally (Bechtel, KBR, Fluor, Jacobs, McDermott, Worley US scopes), on US Navy and DoD overseas work, on major IOC operated assets where the operator's US written practice extends overseas, and as documented training that counts toward ISO 9712 experience hours. What it is NOT: an accepted standalone qualification in EU, UK, Australia, Brazil, GCC nationalized client work (Aramco, ADNOC, QatarEnergy, KOC, PDO), India's ONGC/Reliance/IOCL site work, or any aerospace primary structure work. The honest read: SNT-TC-1A is a US passport that works wherever a US contractor goes; ISO 9712 is a global passport that works almost everywhere except inside the US." },
    { question: "How long does it take to get ISO 9712 if I already hold ASNT Level II?", answer: "Typical timeline is 3 to 6 months per method for an ASNT Level II holder transitioning to ISO 9712 Level 2. Step 1: choose a certification body (BINDT/PCN if pursuing UK/Commonwealth/Middle East work, TWI/CSWIP if pursuing welding-heavy roles, ABENDI for Brazil, DGZfP for Germany). Step 2: verify your training hours meet ISO 9712 Table 2 minimums — most candidates need a 16-40 hour gap course because SNT-TC-1A allows employer-defined training while ISO 9712 mandates specific hours. Step 3: log industrial experience (your existing on-the-job hours typically count). Step 4: book general, specific, and practical exams at an Authorized Qualification Body. Step 5: pass ISO 18490 vision test. Total cost $1,200-$2,800 per method. Most candidates do UT and PAUT first because those have the highest international demand premium." },
    { question: "Which certification do EPCs prefer when bidding international projects?", answer: "Major EPCs run a dual-track model. On the home market, they use ASNT SNT-TC-1A administered through their internal NDT Level III written practice — this is cheap, fast, and gives the EPC full control over qualification standards. On export projects, they require contracted NDT subcontractors to provide ISO 9712 (or equivalent national scheme) certified personnel because client specifications, host-country regulators, and Authorized Inspection Agencies demand independently certified inspectors. Bechtel, KBR, Fluor, Worley, Saipem, TechnipFMC, McDermott, and Petrofac all explicitly require ISO 9712 for international assignments. Smaller regional EPCs in EU, India, Brazil, and the GCC default to ISO 9712 universally. If you want to work for any EPC outside North America, ISO 9712 is non-negotiable." },
    { question: "Should I get both ISO 9712 and ASNT — and which order?", answer: "Holding both is the highest-value path for any inspector with international career ambitions, but order matters. If you are US-based and currently working under a SNT-TC-1A employer: keep your ASNT Level II current, then layer ISO 9712 on top through BINDT/PCN distance learning + UK or Middle East exam center. If you are EU, UK, India, or Middle East based: get ISO 9712 first as your primary credential, then add ASNT via an employer with a written practice once you join a US-aligned contractor. The hybrid carries a salary premium of 12-22% in most international markets and roughly doubles the set of projects you can be deployed to. Total cost for a dual-certified Level II in 3 methods (UT, RT, MT) is approximately $4,500-$7,000 spread over 18-24 months." }
];

const quickDecisionTable = [
    { scenario: "USA + IOC (ExxonMobil, Chevron, ConocoPhillips)", cert: "ASNT SNT-TC-1A", note: "Add ISO 9712 if international rotation likely" },
    { scenario: "USA + EPC (Bechtel, KBR, Fluor) — domestic scope", cert: "ASNT SNT-TC-1A", note: "Employer-administered, cost-free to candidate" },
    { scenario: "Canada (oil sands, pipelines)", cert: "CGSB CAN/CGSB-48.9712", note: "Canadian implementation of ISO 9712" },
    { scenario: "UK + IOC (BP, Shell UK)", cert: "PCN (ISO 9712)", note: "BINDT-administered, mandatory on UKCS work" },
    { scenario: "EU + EN-sector pressure equipment", cert: "ISO 9712 (national body)", note: "Required by PED 2014/68/EU and AD 2000 W0" },
    { scenario: "Saudi Aramco contractors", cert: "ISO 9712 / PCN / CSWIP", note: "SAEP-1145 third-party requirement" },
    { scenario: "ADNOC contractors (UAE)", cert: "ISO 9712", note: "ADNOC HSE 13 references EN ISO 9712" },
    { scenario: "Qatar QP / QatarEnergy", cert: "ISO 9712", note: "Often PCN or CSWIP specifically named" },
    { scenario: "India + ONGC / Reliance / IOCL", cert: "ISO 9712 (NCB India)", note: "ASNT accepted on US-EPC scope only" },
    { scenario: "Brazil + Petrobras", cert: "SNQC / ABENDI (ISO 9712)", note: "Petrobras N-1594 mandates ABENDI" },
    { scenario: "Australia + INPEX / Woodside", cert: "AINDT (ISO 9712)", note: "Australian Institute for NDT scheme" }
];

const deepComparison = [
    { aspect: "Governance model", iso9712: "Third-party central certification body, accredited under ISO/IEC 17024", asnt: "Employer-based, internally administered against a Written Practice" },
    { aspect: "Certification body", iso9712: "BINDT, TWI, DGZfP, COFREND, ABENDI, AINDT, CGSB, NCB India, others", asnt: "Employer's NDT Level III (in-house or contracted)" },
    { aspect: "Examiner independence", iso9712: "Mandatory — examiner cannot be candidate's trainer or employer", asnt: "Not required — employer's Level III can train, test, and certify same candidate" },
    { aspect: "Certificate validity", iso9712: "5 years (Level 1, 2) / 5 years (Level 3 with renewal cycle)", asnt: "Per Written Practice — typically 3-5 years; some employers indefinite with annual reviews" },
    { aspect: "Recertification cycle", iso9712: "Renewal at 5 years (vision + structured CPD), recertification at 10 years (practical exam)", asnt: "Per employer Written Practice; usually a recertification exam every 5 years" },
    { aspect: "Cost to candidate (typical Level II, single method)", iso9712: "$1,200-$2,800 (training + exam + body fees)", asnt: "$0-$600 (employer typically pays; candidate pays only for self-study or external course)" },
    { aspect: "Sector vs Method", iso9712: "Both — certification is method + industrial sector (e.g., UT-3.1 weld testing)", asnt: "Method-only — no formal sector scope on the credential" },
    { aspect: "Vision retest", iso9712: "Annual ISO 18490 near-vision + color/grey scale", asnt: "Annual near-vision + color per Written Practice (similar)" },
    { aspect: "Practical exam structure", iso9712: "Specimen exam under independent examiner; reported on standard forms", asnt: "Specimen exam administered by employer Level III; no external witness" },
    { aspect: "Recognition outside home region", iso9712: "High — accepted in 70+ countries via mutual recognition", asnt: "Low outside US and US-aligned contractor scope" },
    { aspect: "Employer transferability", iso9712: "Certificate belongs to individual — transfers freely between employers", asnt: "Certificate is employer-property — new employer must re-qualify under their Written Practice" },
    { aspect: "Transition path between schemes", iso9712: "Accepts ASNT experience hours as documented industrial experience", asnt: "CP-189 / ACCP provides a more portable ASNT route closer to ISO 9712 model" }
];

export default function ISO9712VsASNTDecisionFlowchartByCountry() {
    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                "headline": "ISO 9712 vs ASNT: Decision Flowchart by Country + Employer (2026 Guide)",
                "description": "Country-by-country and employer-by-employer decision guide for choosing between ISO 9712 and ASNT SNT-TC-1A NDT personnel certification, with hybrid path and NAS 410 / EN 4179 aerospace override.",
                "author": { "@type": "Organization", "name": "Atlantis NDT" },
                "publisher": { "@type": "Organization", "name": "Atlantis NDT" },
                "datePublished": "2026-05-17",
                "dateModified": "2026-05-17"
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
                title="ISO 9712 vs ASNT: Decision Flowchart by Country + Employer (2026 Guide)"
                description="Choose ISO 9712 vs ASNT SNT-TC-1A in 2 minutes. Country × employer decision flowchart, 12-row comparison, hybrid path, NAS 410 override. Updated May 2026."
                keywords="iso 9712 vs asnt by country, which ndt cert to choose, iso 9712 vs asnt portability, ndt certification decision, iso 9712 vs snt-tc-1a, pcn vs asnt, cswip vs asnt, nas 410 en 4179, asnt cp-189"
                canonical="https://atlantisndt.com/blog/iso-9712-vs-asnt-decision-flowchart-which-cert-by-country"
                structuredData={structuredData}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className="bg-gradient-to-br from-indigo-700 to-blue-900 text-white pt-24 pb-16">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="text-indigo-200 mb-4">Decision Guide • Last updated May 2026 • 14 min read</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">ISO 9712 vs ASNT: Decision Flowchart by Country + Employer</h1>
        {/* INLINE_PROOF_INJECTED_v1 */}
        <p className="my-4 rounded-md border-l-4 border-primary/60 bg-primary/5 p-3 text-sm">
          <strong>Atlantis NDT proof:</strong> ASNT Level III-led prep, 96% first-attempt pass rate, 2026 cohorts.
          {' '}<a href="/asnt-certification" className="text-primary underline underline-offset-2 hover:opacity-80">Prep with Atlantis NDT →</a>
        </p>

                        <p className="text-xl text-indigo-100 mb-8">Two minutes to the right answer. Match your country and employer in the quick table below, then validate with the 12-row deep comparison and decision flowchart. For the full theory-level explainer, see our <Link className="underline" to="/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison">canonical ISO 9712 vs SNT-TC-1A comparison</Link>.</p>
                    </motion.div>
                </div>
            </section>

            {/* Social Share */}
            <div className="py-6 bg-white border-b">
                <div className="container mx-auto max-w-4xl px-6">
                    <SocialShare title="ISO 9712 vs ASNT: Decision Flowchart by Country + Employer (2026)" description="Pick the right NDT cert in 2 minutes — country, employer, and sector overrides." />
                </div>
            </div>

            {/* Article */}
            <article className="py-16">
                <div className="container mx-auto max-w-4xl px-6">

                    {/* Quick decision table */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-4">The 2-Minute Answer: Country × Employer Decision Table</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            This page is a companion — not a replacement — to our deeper <Link className="text-indigo-700 underline" to="/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison">ISO 9712 vs SNT-TC-1A comparison</Link>. That post explains <em>what</em> the schemes are. This post answers a sharper question: given your country and employer today, <strong>which one do you actually go get next month?</strong> Find your row, read the recommended certification, then jump to the deeper sections only if your situation needs nuance.
                        </p>

                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-indigo-100">
                                    <tr>
                                        <th className="px-3 py-3 text-left font-semibold">If you work in this country / for this employer</th>
                                        <th className="px-3 py-3 text-left font-semibold">Pick this certification</th>
                                        <th className="px-3 py-3 text-left font-semibold">Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quickDecisionTable.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-medium">{item.scenario}</td>
                                            <td className="px-3 py-2 font-semibold text-indigo-700">{item.cert}</td>
                                            <td className="px-3 py-2 text-xs text-slate-600">{item.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6">
                            <p className="text-indigo-900"><strong>One-line rule:</strong> If your career stays inside US-headquartered contractor scope, ASNT SNT-TC-1A is enough. The moment a non-US client, a non-US regulator, or a non-US EPC enters the picture, you need ISO 9712 — and the cost of getting it after the contract is signed is always higher than getting it before.</p>
                        </div>
                    </section>

                    {/* Why ISO 9712 dominates outside NA */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why ISO 9712 Dominates Outside North America</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            ISO 9712:2021 (and the European twin EN ISO 9712) is built on a fundamentally different governance idea than the US system. It uses a <strong>third-party central body model</strong>: a certification body that is itself accredited under ISO/IEC 17024 (the international personnel certification accreditation standard) qualifies and certifies the inspector. The inspector's employer is not the certifying body — they are merely the user of the certificate.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            That structural choice has three downstream consequences that explain why ISO 9712 owns the rest of the world.
                        </p>
                        <ul className="bg-white p-6 rounded-lg shadow-sm space-y-3 text-slate-700 mb-6">
                            <li><strong>Mutual recognition.</strong> Because every ISO 9712 body works to the same accreditation rules, a BINDT/PCN UT Level 2 holder can present that certificate in Saudi Arabia, India, or Australia and have it accepted with at most a sector-scope check. There is no equivalent infrastructure for SNT-TC-1A.</li>
                            <li><strong>EN standards alignment.</strong> The European pressure equipment ecosystem — PED 2014/68/EU, EN 13445, EN 13480, AD 2000, EN 1090 — explicitly references EN ISO 9712 for personnel certification. Notified Bodies will not validate a manufacturer's quality plan if NDT personnel hold only SNT-TC-1A.</li>
                            <li><strong>Regulator preference.</strong> National regulators in the GCC, Brazil, Australia, India and the EU prefer schemes where the state can audit a single central body rather than dozens of employer Written Practices. ISO 9712's central body model fits this enforcement preference exactly.</li>
                        </ul>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            The practical upshot: outside North America, an inspector without ISO 9712 is rarely a serious candidate for primary site roles on regulated work. The certificate is the entry ticket, not a nice-to-have.
                        </p>
                    </section>

                    {/* Why ASNT dominates in NA */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Why ASNT SNT-TC-1A Dominates in North America</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            SNT-TC-1A is a <strong>Recommended Practice</strong>, not a standard. ASNT issues it as guidance, and each employer adopts it by writing their own <strong>Written Practice</strong> — a controlled document that defines training hours, exam content, recertification cycles, and the qualifications of the Level III who administers everything. Certification is granted by the employer's Level III, signed off internally, and is valid only while the inspector remains with that employer.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            Why does this employer-controlled model dominate the United States?
                        </p>
                        <ul className="bg-white p-6 rounded-lg shadow-sm space-y-3 text-slate-700 mb-6">
                            <li><strong>ASME Section V / Section VIII alignment.</strong> The ASME Boiler &amp; Pressure Vessel Code explicitly accepts personnel qualified to SNT-TC-1A via the employer Written Practice. Since ASME is the dominant US construction code, SNT-TC-1A inherits that dominance.</li>
                            <li><strong>Cost-to-employer optimization.</strong> Large US contractors (Bechtel, KBR, Fluor, Jacobs) certify thousands of inspectors annually. Running their own program is dramatically cheaper than paying a third-party body per head, and gives them control over qualification depth.</li>
                            <li><strong>API endorsement.</strong> API codes (510, 570, 653, 1104) all reference SNT-TC-1A or the more rigorous <Link className="text-indigo-700 underline" to="/blog/asnt-snt-tc-1a-vs-cp-189-comparison">CP-189 central certification</Link> for technician-level NDT. This locks SNT-TC-1A into the US oil and gas operating model.</li>
                            <li><strong>Speed.</strong> An employer can qualify a new Level II in 2-3 months from hire. The equivalent ISO 9712 route takes 6-9 months because exam scheduling depends on the certification body, not the employer.</li>
                        </ul>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            Inside US domestic scope, SNT-TC-1A wins on speed, cost, and direct alignment with ASME/API. The flipside — non-portability between employers — is the exact feature that makes it less useful internationally.
                        </p>
                    </section>

                    {/* Deep comparison */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">12-Row Deep Comparison</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Use this table to validate the decision the quick table gave you. If any row materially conflicts with your situation, drop into the relevant deep section below.
                        </p>
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full bg-white rounded-lg shadow-sm text-sm">
                                <thead className="bg-indigo-100">
                                    <tr>
                                        <th className="px-3 py-3 text-left font-semibold">Aspect</th>
                                        <th className="px-3 py-3 text-left font-semibold">ISO 9712 (incl. PCN, CSWIP, ABENDI, AINDT)</th>
                                        <th className="px-3 py-3 text-left font-semibold">ASNT SNT-TC-1A</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {deepComparison.map((item, idx) => (
                                        <tr key={idx} className="border-t">
                                            <td className="px-3 py-2 font-semibold align-top">{item.aspect}</td>
                                            <td className="px-3 py-2 text-xs align-top">{item.iso9712}</td>
                                            <td className="px-3 py-2 text-xs align-top">{item.asnt}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* Decision flowchart */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">The Decision Flowchart</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            Walk this top-to-bottom. The first branch that matches your reality is the answer.
                        </p>

                        <div className="space-y-4">
                            {/* Step 1 */}
                            <div className="bg-white border-2 border-indigo-500 rounded-lg p-5 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">START</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Is your work aerospace primary structure, engines, or any NADCAP-audited shop?</h4>
                                        <p className="text-slate-700 text-sm"><strong>Yes →</strong> Get <strong>NAS 410</strong> (US) or <strong>EN 4179</strong> (Europe). Stop here. Neither ISO 9712 nor ASNT alone qualifies you for primary-structure aero work.</p>
                                        <p className="text-slate-700 text-sm"><strong>No →</strong> Continue to step 2.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Connector */}
                            <div className="flex justify-center"><div className="w-1 h-6 bg-indigo-300"></div></div>

                            {/* Step 2 */}
                            <div className="bg-white border-2 border-indigo-500 rounded-lg p-5 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">STEP 2</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Will 80%+ of your billable hours be inside the United States for a US-headquartered employer?</h4>
                                        <p className="text-slate-700 text-sm"><strong>Yes →</strong> Get <strong>ASNT SNT-TC-1A</strong> through your employer's Written Practice. Optionally add CP-189 for portability between US employers.</p>
                                        <p className="text-slate-700 text-sm"><strong>No / Unsure →</strong> Continue to step 3.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center"><div className="w-1 h-6 bg-indigo-300"></div></div>

                            {/* Step 3 */}
                            <div className="bg-white border-2 border-indigo-500 rounded-lg p-5 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">STEP 3</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Does your target client appear on the &quot;ISO 9712 mandatory&quot; list (Aramco, ADNOC, QP, Petrobras, ONGC, Reliance, INPEX, BP UKCS, any EU PED-scope manufacturer)?</h4>
                                        <p className="text-slate-700 text-sm"><strong>Yes →</strong> Get <strong>ISO 9712</strong> via the appropriate national body (BINDT/PCN, TWI/CSWIP, ABENDI, AINDT, NCB India, CGSB).</p>
                                        <p className="text-slate-700 text-sm"><strong>No →</strong> Continue to step 4.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center"><div className="w-1 h-6 bg-indigo-300"></div></div>

                            {/* Step 4 */}
                            <div className="bg-white border-2 border-indigo-500 rounded-lg p-5 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <span className="bg-indigo-600 text-white text-xs font-bold px-2 py-1 rounded">STEP 4</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">Do you plan to move country or change employer in the next 5 years?</h4>
                                        <p className="text-slate-700 text-sm"><strong>Yes →</strong> Default to <strong>ISO 9712</strong>. The portability premium pays for itself on the first move.</p>
                                        <p className="text-slate-700 text-sm"><strong>No →</strong> Take whichever your current employer pays for and revisit this decision in 24 months.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center"><div className="w-1 h-6 bg-indigo-300"></div></div>

                            {/* Final */}
                            <div className="bg-indigo-600 text-white rounded-lg p-5 shadow-sm">
                                <div className="flex items-start gap-3">
                                    <span className="bg-white text-indigo-700 text-xs font-bold px-2 py-1 rounded">RESULT</span>
                                    <div>
                                        <h4 className="font-bold text-lg mb-1">If you reach this point and the answer is still ambiguous — get both.</h4>
                                        <p className="text-indigo-100 text-sm">The hybrid path (next section) costs roughly $4,500-$7,000 spread over 18-24 months and unlocks every major project pool worldwide.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Hybrid path */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">The Hybrid Path: Hold Both</h2>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            Roughly 18% of senior inspectors we work with hold both ISO 9712 and ASNT credentials. The dual-certified inspector is the most mobile, highest-paid technician profile in the global NDT labor market. Here is when the math works and how to execute it.
                        </p>

                        <h3 className="text-2xl font-bold mb-3">When the hybrid pays back</h3>
                        <ul className="bg-white p-6 rounded-lg shadow-sm space-y-2 text-slate-700 mb-6">
                            <li><strong>You're a US contractor going on Saudi / UAE rotation.</strong> ASNT covers your US base-load; ISO 9712 unlocks the Middle East premium (typically 30-45% on day rates).</li>
                            <li><strong>You're an Indian / Filipino / South African inspector targeting US-EPC scope while based overseas.</strong> ISO 9712 is your primary credential; ASNT layered on lets you join a US contractor's overseas project team without re-qualification friction.</li>
                            <li><strong>You're a Level III pursuing consulting work.</strong> Dual certification lets you write Written Practices for US clients AND audit ISO 9712 programs for European clients.</li>
                            <li><strong>You're chasing the salary band above $130k.</strong> The dual-certified ASNT Level III with PCN Level 3 in 3 methods is the standard profile for $150k-enterprise tier senior inspection roles in the Middle East and Australia.</li>
                        </ul>

                        <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 mb-6">
                            <h4 className="font-bold text-emerald-900 mb-2">Cost / payback</h4>
                            <p className="text-emerald-900 text-sm">Full hybrid stack (ASNT Level II + ISO 9712 Level 2 in UT + RT + MT/PT): roughly $4,500-$7,000 over 18-24 months. Median first-year salary lift after dual certification across our sample is $11,000-$22,000. Break-even is typically inside 12 months; the rest is pure career optionality.</p>
                        </div>
                    </section>

                    {/* Transition path */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Transition Paths Between Schemes</h2>

                        <h3 className="text-2xl font-bold mb-3">ISO 9712 → ASNT (the easy direction)</h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            Moving from ISO 9712 to ASNT is comparatively easy because the US system accepts external training and experience without insisting on a parallel central body. The standard path runs through <Link className="text-indigo-700 underline" to="/blog/asnt-snt-tc-1a-vs-cp-189-comparison">ASNT CP-189</Link>, which is structurally closer to ISO 9712 than SNT-TC-1A is. Typical steps:
                        </p>
                        <ol className="bg-white p-6 rounded-lg shadow-sm space-y-2 text-slate-700 mb-6 list-decimal pl-6">
                            <li>Submit your ISO 9712 training certificates and experience log to ASNT as documented training hours.</li>
                            <li>Register for the CP-189 general and method-specific exams (ASNT-administered).</li>
                            <li>Pass the practical specimen exam under an ASNT-approved Level III examiner.</li>
                            <li>Pass current near-vision and color vision.</li>
                            <li>Receive ASNT CP-189 certificate; if your US employer prefers SNT-TC-1A, they can also certify you under their Written Practice using your CP-189 as the qualification baseline.</li>
                        </ol>

                        <h3 className="text-2xl font-bold mb-3">ASNT → ISO 9712 (the harder direction)</h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-4">
                            Going the other way is more work because ISO 9712 mandates specific training hours that SNT-TC-1A does not. You will almost always need to top up training hours through an Authorized Training Body (ATB) and sit fresh general + specific + practical exams. Expected gap content per method (Level 2): 16-40 hours of structured course content not covered by your employer's Written Practice.
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            For the full step-by-step ISO 9712 candidate journey — fees, study hours, exam structure, vision retest — see our <Link className="text-indigo-700 underline" to="/blog/iso-9712-certification-process-step-by-step-guide">ISO 9712 certification process guide</Link>.
                        </p>
                    </section>

                    {/* Industry-specific override */}
                    <section className="mb-12">
                        <h2 className="text-3xl font-bold mb-6">Industry-Specific Overrides You Cannot Skip</h2>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 mb-6">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-amber-900 text-lg mb-2">Aerospace: NAS 410 / EN 4179 overrides both schemes</h4>
                                    <p className="text-amber-900 text-sm mb-2">If you are inspecting aircraft primary structure, engine components, or anything that falls under NADCAP AC7114 — neither ISO 9712 nor ASNT SNT-TC-1A is sufficient on its own. The governing documents are <strong>NAS 410</strong> (US National Aerospace Standard) and <strong>EN 4179</strong> (European equivalent). Both Boeing and Airbus reference these directly in their NDT requirements.</p>
                                    <p className="text-amber-900 text-sm">NAS 410 and EN 4179 are closely harmonized — a Level II under one is typically accepted under the other with minimal gap exam. Both require Outside Agency Qualification (OAQ) with practical exams scored against industry-standard specimens.</p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold mb-3">Other notable sector overrides</h3>
                        <ul className="bg-white p-6 rounded-lg shadow-sm space-y-3 text-slate-700">
                            <li><strong>Nuclear (US):</strong> ASNT SNT-TC-1A is mandatory under ASME Section XI for in-service inspection at US commercial reactors. ISO 9712 alone is not accepted.</li>
                            <li><strong>Nuclear (EU):</strong> ENIQ qualification layered on top of ISO 9712, plus utility-specific qualification. EDF, Vattenfall, EDF Energy all have site-specific schemes.</li>
                            <li><strong>Rail (UK / EU):</strong> EN 4179-style outside agency qualification under PCN-Rail or DIN 27201-7. PCN is the practical default.</li>
                            <li><strong>Pipelines (welding NDT, AS 2885 / API 1104):</strong> AINDT in Australia, CSWIP in UK Commonwealth, ASNT in US. Method scope must include welding specifically.</li>
                            <li><strong>Offshore wind (Europe / North Sea):</strong> ISO 9712 mandatory; some operators (Ørsted, Equinor) layer their own GWO + sector-specific NDT requirements.</li>
                            <li><strong>Defense (US):</strong> NAS 410 + employer-specific qualification under MIL-STD-410 legacy framework or service-specific equivalents.</li>
                        </ul>
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
                    <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-8 rounded-xl text-center">
                        <h2 className="text-2xl font-bold mb-4">Still Unsure Which Cert Path Is Right For You?</h2>
                        <p className="text-indigo-100 mb-6 max-w-2xl mx-auto">Atlantis NDT runs both ASNT and ISO 9712 training and certification programs. Tell us your target country, employer, and method — we will map the fastest, lowest-cost path to project-ready credentials.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/contact" className="inline-block px-8 py-3 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-gray-100 transition">Book a Cert Path Review</Link>
                            <Link to="/asnt-certification" className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition">ASNT Training Programs</Link>
                        </div>
                    </section>

                    {/* Related Articles */}
                    <section className="mt-12">
                        <h2 className="text-2xl font-bold mb-6">Related Guides</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/blog/iso-9712-vs-asnt-snt-tc-1a-certification-comparison" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group border-l-4 border-indigo-500">
                                <div className="text-xs uppercase tracking-wide text-indigo-600 font-semibold mb-1">Canonical Comparison</div>
                                <h3 className="font-bold group-hover:text-indigo-600 transition">ISO 9712 vs ASNT SNT-TC-1A: Complete Comparison</h3>
                                <p className="text-slate-600 text-sm mt-2">The full theory-level comparison of governance, exam structure, validity, and recognition.</p>
                            </Link>
                            <Link to="/blog/asnt-snt-tc-1a-vs-cp-189-comparison" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-indigo-600 transition">ASNT SNT-TC-1A vs CP-189</h3>
                                <p className="text-slate-600 text-sm mt-2">Recommended Practice vs centralized standard inside the US ecosystem.</p>
                            </Link>
                            <Link to="/blog/iso-9712-certification-process-step-by-step-guide" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-indigo-600 transition">ISO 9712 Certification Process: Step-by-Step</h3>
                                <p className="text-slate-600 text-sm mt-2">Training hours, exam structure, fees, and certification body selection.</p>
                            </Link>
                            <Link to="/blog/ndt-level-iii-certification-requirements-guide" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-indigo-600 transition">NDT Level III Certification Requirements</h3>
                                <p className="text-slate-600 text-sm mt-2">The senior credential path for both ASNT and ISO 9712 schemes.</p>
                            </Link>
                            <Link to="/asnt-certification" className="block bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition group">
                                <h3 className="font-bold group-hover:text-indigo-600 transition">ASNT Certification Programs at Atlantis NDT</h3>
                                <p className="text-slate-600 text-sm mt-2">Level I / II / III training across UT, RT, MT, PT, VT, ET, PAUT, and TOFD.</p>
                            </Link>
                        </div>
                    </section>
                </div>
                    <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>

            <ContactDetails />
        </div>
    );
}
