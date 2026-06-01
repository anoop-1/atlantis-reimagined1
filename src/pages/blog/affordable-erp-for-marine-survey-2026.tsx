import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { SocialShare } from "@/components/SocialShare";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  { question: "What is the most affordable ERP for marine-survey companies in 2026?", answer: "For marine-survey firms (IACS classification-society work, P&I damage surveys, condition surveys, hull-and-machinery surveys, cargo surveys, draught surveys, bunker surveys, ship-recycling surveys), the realistic 2026 affordable-ERP shortlist is: (1) Atlantis NDT ERP — regionally priced, all-in with IACS / IMO / Flag State / Port State Control native workflow; (2) Lloyd's Register OneOcean platform (subscription) — typically $30-80K/year; (3) DNV Veracity — $25-60K/year; (4) ABS Eagle / Eagle.Engineering — $20-55K/year; (5) Marine Software MSL — $15-45K/year; (6) Stream BV NaviSafe — $20-50K/year. The Atlantis NDT differentiator: parallel IACS pipeline tracking across all 12 IACS member societies (LR / DNV / ABS / BV / ClassNK / RINA / KR / CCS / IRClass / PRS / CRS / RS), plus second-tier (PRS Polish Register, IRClass Indian Register, CRS Croatian Register, TL Turkish Lloyd), IMO MARPOL / SOLAS / Load Line / Tonnage / COLREG / STCW / MLC convention scope, Paris MoU / Tokyo MoU / USCG / AMSA port-state-control regime tagging." },
  { question: "Does the ERP support IACS classification-society survey workflows?", answer: "Yes. IACS Common Structural Rules (CSR-BC bulk carriers, CSR-OT oil tankers), Common Hull Damage Notations (UR S31), Enhanced Survey Programme (ESP) for bulk carriers and oil tankers (UR Z10), close-up survey requirements per UR Z10, Annual / Intermediate / Special class-survey scope, continuous-class-survey (CMS) programs, MODU code surveys for offshore drilling units, FPSO / FSO class plus flag surveys, Condition Assessment Programme (CAP) — including CAP Hull, CAP Machinery, CAP Cargo with the 1-2-3-4 rating scale — are all pre-loaded as structured survey scope per vessel age and tonnage." },
  { question: "Can the ERP route P&I damage-survey instructions from IG P&I Clubs?", answer: "Yes. P&I Club damage-survey instructions arrive via email, P&I Club correspondent portals (UK P&I Club, North of England, Britannia, Steamship Mutual, Gard, Skuld, West of England, Standard P&I, American P&I, London P&I) or insurance brokers (Marsh, Willis Towers Watson, Aon, Lockton, Gallagher). The CRM parses incoming instructions, extracts vessel-name / IMO / port / damage-type, matches to the nearest qualified surveyor (proximity + qualification + workload) and sends a mobilization brief in under 5 minutes vs the 4-12 hour manual triage typical in the industry." },
  { question: "Does the ERP track MARPOL Annex VI sulphur-cap, EEXI and CII?", answer: "Yes. IMO MARPOL Annex VI (sulphur 0.5% cap since 2020, EEXI / CII regulatory survey since 2023), Annex I (oil pollution), Annex II (chemicals), Annex IV (sewage), Annex V (garbage) are tracked per vessel. CII rating (A-B-C-D-E) is loaded annually so business-development teams can target D/E-rated vessels for EEXI compliance survey work." },
  { question: "How does the ERP handle newbuild survey opportunities?", answer: "Newbuild survey opportunities are tracked from yard order through delivery — yard-pre-construction (drawing approval), keel laying, block assembly, hull pre-erection, hydro testing, sea trials, final delivery — each stage with a surveyor-day budget. The CRM forecasts surveyor demand 18-36 months out for major newbuild programs at Hyundai Heavy Industries, Samsung Heavy Industries, Daewoo Shipbuilding (HHI / SHI / DSME), Imabari Shipbuilding, Mitsubishi Shipbuilding, Yangzijiang, CSSC, Hyundai Mipo, and Hudong-Zhonghua." },
  { question: "Does the ERP support port-state-control (Paris MoU, Tokyo MoU, USCG, AMSA) inspection records?", answer: "Yes. Port-state-control inspection records under Paris MoU (27 European maritime authorities), Tokyo MoU (Asia-Pacific), USCG (United States Coast Guard), AMSA (Australian Maritime Safety Authority), Riyadh MoU (Indian Ocean Memorandum of Understanding on Port State Control), Caribbean MoU, Black Sea MoU, Viña del Mar Agreement (Latin America), Mediterranean MoU, and Abuja MoU (West and Central Africa) are tracked per vessel with auto-flagging of vessels approaching PSC priority-inspection bands." },
  { question: "Can the ERP handle ship-recycling work per the Hong Kong Convention and EU SRR?", answer: "Yes. Ship-recycling-survey scope per the Hong Kong Convention (HKC, entering force 26 June 2025) and the EU Ship Recycling Regulation (EU SRR — Regulation 1257/2013) is fully tracked, including Inventory of Hazardous Materials (IHM) Part I / II / III preparation and verification, Statement of Compliance (SoC) issuance, Ready-for-Recycling Certificate (RRC), and recycling-facility-plan-aligned final survey at the recycling yard." }
];

export default function AffordableERPForMarineSurvey2026() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="Affordable ERP for Marine Survey Companies 2026"
        description="Affordable ERP for marine survey companies 2026. Atlantis NDT ERP regional pricing vs Lloyd's Register / DNV Veracity / ABS Eagle / Marine Software MSL. IACS class survey, IMO MARPOL/EEXI/CII, P&I damage, port-state-control."
        keywords="affordable erp marine survey, marine survey software 2026, iacs class survey software, p and i damage survey software, eexi cii marine ndt erp, lloyds register alternative"
        canonical="https://atlantisndt.com/blog/affordable-erp-for-marine-survey-2026"
        article={{ headline: "Affordable ERP for Marine Survey Companies 2026", datePublished: "2026-05-24", author: "Atlantis NDT Editorial Team", section: "ERP Buyer Guides" }}
        faq={faqs}
      />
      <Breadcrumbs />

      <section className="bg-gradient-to-br from-sky-700 to-blue-900 text-white pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="text-sky-200 mb-4">Marine-Survey ERP Buyer Guide • May 2026 • 12 min read</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Affordable ERP for Marine Survey Companies 2026</h1>
            <p className="text-xl text-sky-100 mb-8">An honest 2026 ERP comparison for marine-survey firms — IACS classification-society work, P&amp;I damage surveys, condition surveys, H&amp;M surveys, cargo surveys, draught and bunker surveys, newbuild surveys, and ship-recycling surveys under the Hong Kong Convention and EU SRR.</p>
          </motion.div>
        </div>
      </section>

      <div className="py-6 bg-white border-b"><div className="container mx-auto max-w-4xl px-6"><SocialShare title="Affordable ERP for Marine Survey 2026" description="regional pricing marine survey ERP." /></div></div>

      <article className="py-16">
        <div className="container mx-auto max-w-4xl px-6">
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Why Marine Survey Firms Need a Cross-Class-Society ERP</h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Marine surveying operates across 12 IACS classification societies plus second-tier societies, 20+ flag-state administrations, 10+ port-state-control regimes, 13 IG P&amp;I Clubs, and an IMO convention framework that evolves continuously. Generic marine software packages (LR OneOcean, DNV Veracity, ABS Eagle) are deeply integrated with their respective class societies — which is excellent if you're a single-class-society shop, but limiting for any marine-survey firm operating dual or triple class portfolios across LR + DNV + ABS or LR + ClassNK + IRClass. Atlantis NDT ERP provides society-neutral pipeline visibility across all 12 IACS members.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
            <ul className="text-slate-700 space-y-2 list-disc list-inside">
              <li><Link className="text-sky-700 hover:underline" to="/erp/crm-for-marine-survey-companies">CRM for Marine Survey Companies</Link></li>
              <li><Link className="text-sky-700 hover:underline" to="/erp/project-management-for-marine-survey-companies">Project Management for Marine Survey</Link></li>
            </ul>
          </section>

          <section className="mb-12">
            <div className="bg-gradient-to-br from-sky-600 to-blue-700 text-white rounded-2xl p-8 text-center">
              <h2 className="text-3xl font-bold mb-3">See the marine-survey ERP in action</h2>
              <p className="text-sky-100 mb-6 max-w-2xl mx-auto">Book a 30-minute walkthrough of Atlantis NDT ERP configured for IACS class-society parallel pipelines, IMO convention scope, and P&amp;I damage-survey routing.</p>
              <a href="mailto:info@atlantisndt.com?subject=Demo%3A%20Marine%20Survey%20ERP" className="inline-flex items-center gap-2 bg-white text-sky-700 hover:bg-sky-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">info@atlantisndt.com <ArrowRight className="w-5 h-5" /></a>
            </div>
          </section>

          <ContactDetails />
        </div>
              <p className="mt-8 pt-4 border-t border-slate-200 text-sm italic text-slate-500" data-atlantis-pricing-disclaimer="1">Disclaimer: Any salary, cost, or pricing figures in this article are general industry estimates for informational purposes only and do not represent Atlantis NDT pricing.</p>
      </article>
    </div>
  );
}
