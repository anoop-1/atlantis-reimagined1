import { motion } from 'framer-motion';
import { CheckCircle, XCircle, AlertTriangle, Zap, Layers, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function NdtErpVsGenericErp() {
  const faq = [
    {
      question: 'What is NDT ERP?',
      answer: 'NDT ERP (Enterprise Resource Planning for Non-Destructive Testing) is purpose-built business software that unifies inspection job management, personnel certification tracking, equipment calibration, compliance reporting, and invoicing for NDT inspection companies. Unlike generic ERPs such as SAP S/4HANA or Oracle Fusion, an NDT ERP like Atlantis NDT Suite ships with native modules for ASNT SNT-TC-1A Level tracking, API 510/570/653 certificate expiry alerts, probe and gauge calibration logs, and structured inspection report templates aligned to ASME Section V. A well-designed NDT ERP typically deploys in 30-90 days at a total first-year cost of $15K-$120K, versus $500K-$5M+ and 6-24 months for a generic ERP implementation.'
    },
    {
      question: 'What is inspection management software?',
      answer: 'Inspection management software is the subset of NDT ERP that handles the operational core of inspection work: scheduling field technicians, assigning equipment, capturing inspection data (thickness readings, defect indications, photos, videos), generating compliant reports, and tracking the job lifecycle from RFQ to invoice. Top-tier inspection management software supports mobile offline data capture for technicians working in remote refineries or offshore platforms, integrates with digital twin platforms for 3D asset visualization, and auto-generates API 510/570/653 compliant reports. It differs from a CMMS (Computerized Maintenance Management System) in that CMMS focuses on asset maintenance workorders while inspection management software is optimized for the regulated reporting and certification workflows unique to NDT.'
    },
    {
      question: 'Why not just use SAP or Oracle for an NDT inspection business?',
      answer: 'Generic enterprise ERPs like SAP S/4HANA and Oracle Fusion were designed for manufacturing, finance, and supply chain. They lack native understanding of NDT workflows: they cannot track ASNT SNT-TC-1A recertification cycles, they have no concept of probe calibration traceability, they do not auto-populate ASME Section V compliant report templates, and their customization to NDT workflows typically costs $500K-$2M and takes 12-24 months. Generic ERPs also require expensive consulting to build the NDT data model from scratch. Purpose-built NDT ERPs ship with these workflows pre-configured, reducing total cost of ownership by 60-80% over 5 years.'
    },
    {
      question: 'Do I need a standalone NDT ERP if I already have SAP?',
      answer: 'For inspection-heavy operations, yes. The best architecture is a purpose-built NDT ERP (Atlantis, Mistras Group DRIVE, or similar) integrated with your SAP backbone via REST API or middleware for financial posting, PO matching, and master data sync. This pattern gives technicians and Level III consultants the NDT-native UX they need in the field, while Finance and Procurement keep SAP as the system of record. Typical integration projects run 4-8 weeks and cost $15K-$60K.'
    },
    {
      question: 'How is a point NDT reporting tool different from a full NDT ERP?',
      answer: 'Point NDT reporting tools (for example, standalone tablet-based UT reporting apps or paperless thickness survey tools) cover one narrow workflow: capturing field data and producing a report. They do not manage jobs end-to-end, do not track personnel certifications or equipment calibration, do not handle invoicing or A/R, and do not produce business-wide analytics. A full NDT ERP wraps all of those plus the reporting layer, giving you one system of record. Most mid-sized inspection companies outgrow point tools within 2-3 years and consolidate onto an NDT ERP.'
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Atlantis NDT ERP',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web, iOS, Android',
        description: 'Purpose-built NDT ERP for inspection companies. Native modules for job management, personnel certification tracking, equipment calibration, and API-compliant reporting.',
        offers: { '@type': 'Offer', price: '15000', priceCurrency: 'USD' },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '127' },
        provider: { '@type': 'Organization', name: 'Atlantis NDT', url: 'https://atlantisndt.com' }
      },
      {
        '@type': 'FAQPage',
        mainEntity: faq.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer }
        }))
      }
    ]
  };

  const comparisonRows = [
    { dim: 'License / subscription cost (Year 1)', generic: '$250K-$2M+', point: '$5K-$25K', ndt: '$15K-$120K' },
    { dim: 'Implementation time', generic: '9-24 months', point: '2-6 weeks', ndt: '30-90 days' },
    { dim: 'NDT-native job workflow', generic: 'No (custom build)', point: 'Partial (reports only)', ndt: 'Yes, pre-configured' },
    { dim: 'ASNT / API compliance tracking', generic: 'No', point: 'No', ndt: 'Yes, auto-expiry alerts' },
    { dim: 'Personnel certification management', generic: 'HR module only', point: 'No', ndt: 'SNT-TC-1A Level I/II/III native' },
    { dim: 'Equipment calibration traceability', generic: 'No', point: 'No', ndt: 'Probe/gauge logs per job' },
    { dim: 'Inspection report generation', generic: 'Manual / Word templates', point: 'Yes, single method', ndt: 'All methods, ASME V aligned' },
    { dim: 'Financial ERP integrations', generic: 'Native (is the ERP)', point: 'None', ndt: 'SAP, Oracle, QB, Xero via API' },
    { dim: 'Digital twin / 3D asset integration', generic: 'No', point: 'No', ndt: 'Native (thickness-to-3D)' },
    { dim: 'Mobile offline data capture', generic: 'Rare / expensive add-on', point: 'Yes', ndt: 'Yes, industry standard' },
    { dim: 'Total cost of ownership (5 yr)', generic: '$2M-$10M', point: '$50K-$200K', ndt: '$200K-$800K' },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT ERP vs Generic ERP: 2026 Comparison Guide"
        description="Compare NDT ERP vs SAP/Oracle vs point reporting tools across 11 dimensions. Cost, implementation time, NDT-native features, TCO. 2026 decision framework."
        keywords="NDT ERP, inspection management software, NDT ERP vs SAP, purpose-built NDT ERP, NDT software comparison, inspection ERP"
        canonical="https://atlantisndt.com/ndt-erp-vs-generic-erp"
        structuredData={structuredData}
        faq={faq}
      />
      <div className="container mx-auto px-6 pt-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'NDT ERP', href: '/ndt-erp-solution' }, { label: 'NDT ERP vs Generic ERP' }]} />
      </div>

      <motion.section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT ERP vs Generic ERP vs Point Tools: The 2026 Decision Guide</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            If you run a non-destructive testing business, the software you choose will shape your margin for the next 5-10 years.
            This guide compares three distinct categories — generic enterprise ERP (SAP S/4HANA, Oracle Fusion, Microsoft Dynamics),
            point NDT reporting tools, and purpose-built NDT ERP platforms like Atlantis NDT, Mistras Group DRIVE, and Oceaneering NDTMS —
            across 11 decision dimensions so you can pick the right fit for your org size, workflow, and compliance obligations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="btn-primary"><Link to="/contact">Request Atlantis NDT ERP Demo</Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/ndt-erp-roi-calculator">Calculate Your ROI</Link></Button>
          </div>
        </div>
      </motion.section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-4">What is NDT ERP, and why does the category exist?</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              NDT ERP is a class of business software purpose-built for inspection companies. It unifies the six workflows that define
              a healthy NDT business — quoting, job scheduling, field data capture, certification and calibration compliance, report generation,
              and invoicing — into a single database. It exists because generic ERPs were designed for discrete manufacturing or process industries,
              not for the peculiar data model of an NDT inspection job: a job has technicians (each with certifications that expire), equipment
              (each with calibration records that expire), methods (UT, RT, MT, PT, ET, VT — each with their own procedure requirements),
              and deliverables (a report that must be traceable, signed, and archived for 5-40 years depending on the code).
            </p>
            <p>
              The category emerged in the mid-2010s as inspection companies hit the wall with Excel + email + a generic accounting tool,
              then hit a second wall trying to force SAP or NetSuite to model their workflow. Today the category includes Atlantis NDT Suite,
              Mistras Group DRIVE, Oceaneering NDTMS, InspectionXpert, and a handful of regional players. The best tools share five attributes:
              NDT-native data model, mobile offline capture, API-ready integrations, digital twin hooks, and a reporting engine aligned to
              ASME Section V / API 510 / API 570 / API 653 / NAS 410.
            </p>
            <p>
              Inspection management software is often used interchangeably with NDT ERP, but technically inspection management is the
              operational core (jobs, field data, reports), while ERP adds the financial, HR, and analytics layers on top. If you have
              fewer than 10 technicians you may only need inspection management software. Beyond 10 technicians, the ERP capabilities
              (project margin tracking, technician utilization, RBI-driven revenue forecasting) pay for themselves within 12-18 months.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold mb-8 text-center">The 11-dimension comparison table</h2>
          <Card className="border-0 shadow-lg">
            <CardContent className="p-0 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/4">Decision Dimension</TableHead>
                    <TableHead>Generic ERP (SAP / Oracle / Dynamics)</TableHead>
                    <TableHead>Point NDT Tool (Reporting-only)</TableHead>
                    <TableHead>Purpose-Built NDT ERP (Atlantis / Mistras / DRIVE)</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {comparisonRows.map((row) => (
                    <TableRow key={row.dim}>
                      <TableCell className="font-semibold">{row.dim}</TableCell>
                      <TableCell>{row.generic}</TableCell>
                      <TableCell>{row.point}</TableCell>
                      <TableCell className="bg-primary/5 font-medium">{row.ndt}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Generic ERP: the SAP / Oracle / Dynamics path</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Enterprise ERPs are the default for companies with $500M+ revenue or complex multi-entity manufacturing. They excel at
              financial consolidation, global tax handling, procurement, inventory, and supply chain. They do not ship with NDT workflow
              out of the box. To run an inspection business on SAP S/4HANA, you either build a custom Z-module (6-18 months of ABAP
              development at $200K-$800K) or buy a third-party NDT bolt-on and wire it in. Both paths burden the inspection team with
              a UX designed for accountants.
            </p>
            <p>
              <strong>When it works:</strong> you are an inspection business unit inside a $1B+ parent that has already standardized on SAP.
              Fighting the parent org to bring in a separate NDT ERP is not worth the political cost, so you build the NDT workflow on top
              of SAP and live with the trade-offs. <strong>When it fails:</strong> you are a $5M-$150M pure-play NDT company trying to use
              SAP because a consultant recommended it. You will spend 2-3x your project budget, your technicians will revolt, and you will
              eventually bolt on a purpose-built tool anyway.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Point NDT tools: the tactical reporting layer</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Point tools solve one problem well: replace paper reports and Excel with a tablet app that captures field data and
              produces a PDF. InspectionXpert, CorrosionRADAR thickness tools, and half a dozen regional vendors live in this space.
              Prices start at $100-$300 per user per month and implementation takes 2-6 weeks.
            </p>
            <p>
              <strong>When it works:</strong> you have 1-10 technicians, a simple service mix (say UT thickness only, or just weld
              inspection), and your back office runs fine on QuickBooks + Dropbox. <strong>When it fails:</strong> you are growing past
              15 technicians, taking on multi-method scopes, or a client demands integrated cert and cal traceability. At that point
              you need an NDT ERP, not five disconnected point tools.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-8">Purpose-built NDT ERP: Atlantis / Mistras DRIVE / Oceaneering NDTMS</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Purpose-built NDT ERPs ship with the data model pre-wired. On day one the system knows what an ASNT Level II UT technician is,
              what a SNT-TC-1A recertification cycle looks like, what a probe calibration certificate contains, and what an API 510 external
              inspection report must include. Implementation is 30-90 days not because the software is simpler, but because the 80% of an
              NDT ERP project that is normally spent building the data model has already been done for you.
            </p>
            <p>
              The category leaders differentiate on deployment model (SaaS multi-tenant vs private cloud), price ($15K-$120K/year for
              mid-size), digital twin integration depth, and client industry focus (oil & gas vs aerospace vs power gen). Atlantis NDT Suite
              ships with native hooks into the Atlantis digital twin platform, which means thickness readings captured in the field land on
              a 3D corrosion heat-map inside of 60 seconds. Mistras DRIVE is strongest in enterprise asset integrity programs for super-majors.
              Oceaneering NDTMS is the historical incumbent in subsea and offshore.
            </p>
            <p>
              Total cost of ownership over 5 years for a 25-technician inspection company typically lands at $200K-$800K for a purpose-built
              NDT ERP versus $2M-$10M for a generic ERP customized to the same scope. Payback is usually 12-18 months.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Cost of ownership: a 5-year model for a 25-technician company</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              To make the TCO comparison concrete, consider a 25-technician inspection company with $12M in annual revenue, operating
              UT, PAUT, MT, PT, and RT across refinery turnarounds and pipeline integrity programs. The generic ERP path (SAP S/4HANA
              with a custom NDT Z-module) lands at roughly $850K in Year 1 (license + implementation + custom development), then
              $350K/year in license + support for Years 2-5. Five-year TCO: approximately $2.25M. The point-tool path (InspectionXpert
              for UT/PAUT, a separate thickness logger, a separate MT/PT reporting tool) runs $60K-$90K per year in total software
              spend, but costs the business about $200K-$300K per year in workflow friction, duplicate data entry, and lost reporting
              productivity. Five-year TCO: around $1.5M when you include the hidden costs.
            </p>
            <p>
              The purpose-built NDT ERP path (Atlantis NDT Suite mid-tier) runs $60K/year license, $35K one-time implementation, and
              about $12K/year in ongoing support uplift. Five-year TCO: approximately $395K. That is roughly 5.7x cheaper than the
              generic ERP path and 3.8x cheaper than the point-tool path, with materially better operational outcomes. The payback
              on the NDT ERP investment lands inside 11 months for this company profile, driven primarily by a 60% reduction in
              report-production hours and a 50% reduction in admin overhead.
            </p>
            <p>
              The TCO gap widens as you scale. For a 100-tech operation, the generic ERP path can exceed $8M over 5 years, while
              the purpose-built NDT ERP path caps out around $800K-$1.1M. For a 5-tech shop, generic ERP is almost never worth the
              implementation lift, point tools are typically fine, and a low-tier NDT ERP ($15K/year SaaS) is the fastest path to
              scale without re-platforming later.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">What purpose-built NDT ERP buys you that generic ERP cannot</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              There are nine concrete capabilities that a purpose-built NDT ERP delivers out of the box and that a generic ERP
              either cannot replicate or replicates only via expensive custom development. First, native ASNT SNT-TC-1A and
              ISO 9712 certification tracking with automatic expiry alerts 90/60/30 days before a technician's Level I/II/III
              renewal deadline. Second, CP-189 compliant employer qualification records. Third, probe and gauge calibration
              traceability at the individual asset level — if your UT probe with serial number UT-2041 was used on a job, the
              calibration certificate that was current that day is permanently linked to the inspection report.
            </p>
            <p>
              Fourth, method-specific report templates aligned to ASME Section V Articles 1-26 (UT, RT, PT, MT, ET, VT, leak testing,
              acoustic emission). Fifth, API 510 external and internal inspection checklists with code-mandatory fields enforced.
              Sixth, API 570 piping inspection circuits and corrosion monitoring location (CML) tracking with trending. Seventh,
              API 653 tank inspection intervals and settlement surveys. Eighth, RBI (risk-based inspection) calculation engines
              aligned to API 580/581. Ninth, digital twin hooks so that thickness readings map onto a 3D asset model for
              corrosion visualization and remaining life calculation.
            </p>
            <p>
              Generic ERPs can be customized to do any of these, but the customization is rarely cost-effective. In a typical
              SAP S/4HANA NDT customization, each of the nine capabilities costs $50K-$200K in ABAP development plus ongoing
              maintenance. The purpose-built NDT ERP ships with them as configuration, not code. That is why the cost-to-parity
              math never works out for the generic ERP path on pure NDT operations.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Decision framework: which category is right for you?</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Use this three-question framework. <strong>Question 1:</strong> is NDT your primary business line, or is it a
              support function inside a larger manufacturing or asset operator parent? If it is a support function inside a
              super-major that has already standardized on SAP or Oracle, live with the generic ERP and accept the UX tax,
              or run a small NDT ERP satellite integrated to the generic ERP. If NDT is your primary business, read on.
            </p>
            <p>
              <strong>Question 2:</strong> what is your technician count? Under 10 techs with one or two methods, point tools
              can work for 2-3 more years before you outgrow them. Plan the migration now so you do not get stuck. 10-40 techs
              is the sweet spot for purpose-built NDT ERP; this is where the economics and the workflow benefits compound
              fastest. 40-100 techs needs the full NDT ERP plus financial integration to your existing GL. 100+ techs almost
              always adopts purpose-built NDT ERP as the system of record with API integration into an enterprise ERP for
              financial consolidation.
            </p>
            <p>
              <strong>Question 3:</strong> what is your compliance profile? If your scope is dominated by ASME Section V and
              API 510/570/653, every mainstream NDT ERP covers you. If you serve aerospace (NAS 410, Nadcap), verify that
              the vendor has NAS-410 eligibility records, composite inspection templates, and Nadcap audit-ready document
              control. If you serve nuclear, verify ASME Section XI, 10 CFR 50 Appendix B pedigree. If you serve offshore
              (DNV, API 2X), verify that the vendor has referenceable offshore deployments.
            </p>
            <p>
              Most inspection businesses end up with a two-system architecture: a purpose-built NDT ERP as the operational
              system of record (Atlantis, Mistras DRIVE, Oceaneering NDTMS) plus a financial ERP as the accounting and
              reporting backbone (QuickBooks or Xero for under $25M revenue, Dynamics 365 or NetSuite for $25M-$200M,
              SAP or Oracle for $200M+). The two systems talk via API or middleware. That pattern is stable, scalable,
              and has been battle-tested across hundreds of inspection companies globally.
            </p>
            <p>
              The wrong pattern is trying to force one system to do both jobs. Generic ERPs are bad at NDT workflow no matter
              how much money you throw at them. NDT ERPs are fine at SMB accounting but inadequate for global financial
              consolidation. Stop fighting the category boundaries and accept that two systems, cleanly integrated, is the
              right architecture for a growing inspection business.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to stop forcing SAP to understand NDT?</h2>
          <p className="text-muted-foreground mb-6">See a 45-minute demo of Atlantis NDT Suite. We will show you the exact workflow for one of your live jobs.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg"><Link to="/contact">Book Demo</Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/ndt-erp-integration-matrix">See Integration Matrix</Link></Button>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
