import { motion } from 'framer-motion';
import { Link2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { SEOHead } from '@/components/SEOHead';
import { Navigation } from '@/components/Navigation';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import ContactDetails from '@/components/ContactDetails';
import { Link } from 'react-router-dom';

export default function NdtErpIntegrationMatrix() {
  const faq = [
    {
      question: 'How does NDT software integrate with SAP?',
      answer: 'Atlantis NDT Suite integrates with SAP S/4HANA and SAP ECC via the SAP BAPI/IDoc layer and REST endpoints exposed through SAP Gateway or SAP PI/PO. Typical flows are: (1) Work Order from SAP PM pushes into Atlantis as a Job, with equipment ID, plant location, and cost center synced; (2) Atlantis posts back inspection completion, defect findings, and recommended follow-ups to the SAP Notification object; (3) Atlantis invoices post into SAP FI-AR via IDoc. Setup takes 4-6 weeks including sandbox testing. Two-way sync for equipment master and personnel master is standard; financial posting is typically one-way (Atlantis to SAP).'
    },
    {
      question: 'Can I integrate an NDT ERP with QuickBooks?',
      answer: 'Yes. Atlantis NDT Suite ships with a native QuickBooks Online connector that syncs customers, items, invoices, and payments bi-directionally. Setup is self-serve through OAuth and takes about 30 minutes. For QuickBooks Desktop, we use the Intuit Web Connector via QBXML; this requires a one-time on-premise install (30-60 minutes) and then runs as a scheduled sync every 15 minutes. Either path supports bank-fed payment reconciliation.'
    },
    {
      question: 'What if my system is not on the integration matrix?',
      answer: 'Any system with a documented REST, SOAP, or GraphQL API can integrate via the Atlantis NDT Suite generic connector. We publish OpenAPI specs for all Atlantis endpoints, so your team or ours can build a custom integration in 2-6 weeks depending on scope. For legacy systems without APIs, file-based integration (SFTP drop of CSV / XML on a schedule) is supported out of the box. Zapier and Make.com connectors are available for lightweight no-code flows (for example, Slack alerts on inspection failures).'
    },
    {
      question: 'Are integrations one-way or two-way?',
      answer: 'Most integrations are configurable per object. Customer master, equipment master, and personnel master are typically two-way with one system designated as the master of record (usually SAP, Oracle, or Dynamics). Inspection reports, job status, and defect findings are typically one-way from NDT ERP outbound to the ERP/EAM. Invoices are one-way from NDT ERP to the financial ERP. Payment receipts flow back two-way so that A/R aging stays consistent in both systems.'
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: 'Atlantis NDT ERP Integration Platform',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'NDT ERP with 10+ native integrations to SAP S/4HANA, Oracle Fusion, IBM Maximo, Microsoft Dynamics 365, QuickBooks, Xero, HubSpot, Salesforce, Zapier, and custom REST/GraphQL.',
        offers: { '@type': 'Offer', price: '15000', priceCurrency: 'USD' },
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

  const matrix = [
    {
      system: 'SAP S/4HANA',
      method: 'Native (BAPI/IDoc + REST via SAP Gateway)',
      setup: '4-6 weeks',
      direction: 'Two-way (master data), one-way (financial posting)',
      fields: 'Equipment master, Functional Location, Work Order, Notification, Cost Center, Customer, Material, Invoice (AR), Payment',
      constraints: 'Requires SAP Gateway or PI/PO. Typically needs a 1-2 day workshop with your SAP Basis team.'
    },
    {
      system: 'Oracle Fusion Cloud ERP',
      method: 'Native (REST via Oracle Integration Cloud)',
      setup: '3-5 weeks',
      direction: 'Two-way (master data), one-way (financials)',
      fields: 'Asset, Work Order, Supplier, Customer, AR Invoice, GL Journal, Project, Task',
      constraints: 'Requires an OIC subscription on the Oracle side. Rate limits apply on free-tier OIC.'
    },
    {
      system: 'IBM Maximo (EAM)',
      method: 'Native (Maximo MIF + REST API)',
      setup: '3-4 weeks',
      direction: 'Two-way (asset + work order), one-way (inspection findings)',
      fields: 'Asset, Location, Work Order, Job Plan, PM record, Service Request, Inspection Result',
      constraints: 'Maximo 7.6+ recommended. Custom object mapping needed for non-standard asset hierarchies.'
    },
    {
      system: 'Microsoft Dynamics 365 F&O',
      method: 'Native (Dataverse + Dual-write)',
      setup: '2-4 weeks',
      direction: 'Two-way (all core entities)',
      fields: 'Account, Contact, Product, Sales Order, Invoice, Work Order (F&SM), Asset, Resource',
      constraints: 'Requires Dataverse connection. Throughput capped at 100 ops/sec on standard tier.'
    },
    {
      system: 'QuickBooks Online',
      method: 'Native (OAuth + Intuit REST API)',
      setup: '30 minutes (self-serve)',
      direction: 'Two-way (customers, invoices, payments)',
      fields: 'Customer, Item, Invoice, Payment, Bill, Credit Memo, Tax Rate, Class',
      constraints: 'Intuit rate limit: 500 req/min per realm. Bundled items need a one-time mapping.'
    },
    {
      system: 'Xero',
      method: 'Native (OAuth 2.0 + Xero REST API)',
      setup: '30 minutes (self-serve)',
      direction: 'Two-way (contacts, invoices, payments)',
      fields: 'Contact, Item, Invoice, Payment, CreditNote, TrackingCategory, Account',
      constraints: 'Daily limit: 5,000 API calls. Multi-currency requires Xero Premium plan.'
    },
    {
      system: 'HubSpot CRM',
      method: 'Native (HubSpot REST API + Webhooks)',
      setup: '1-2 days',
      direction: 'Two-way (contacts, companies, deals)',
      fields: 'Contact, Company, Deal, Quote, Ticket, Custom Property',
      constraints: 'Free tier: 100k calls/day. Custom properties must be pre-created in HubSpot.'
    },
    {
      system: 'Salesforce Sales/Service Cloud',
      method: 'Native (Salesforce REST + Streaming API + Platform Events)',
      setup: '1-3 weeks',
      direction: 'Two-way (all standard objects, custom object opt-in)',
      fields: 'Account, Contact, Opportunity, Case, Work Order (FSL), Asset, Custom Objects',
      constraints: 'API call allowance varies by edition. FSL integration needs Field Service Lightning license.'
    },
    {
      system: 'Zapier',
      method: 'Zapier app (30+ triggers & actions)',
      setup: '15 minutes (no-code)',
      direction: 'Typically one-way event-driven',
      fields: 'Any: job created, report signed, defect flagged, certification expiring, invoice paid, etc.',
      constraints: 'Zapier task quotas. Not recommended as the primary integration for high-volume objects.'
    },
    {
      system: 'Custom REST / GraphQL',
      method: 'OpenAPI spec + webhook subscriptions',
      setup: '2-6 weeks',
      direction: 'Two-way (fully configurable)',
      fields: 'All Atlantis objects: Job, Report, Technician, Certification, Equipment, Calibration, Invoice, Customer',
      constraints: 'Requires API-capable endpoint on your side. OAuth 2.0 or API key auth supported.'
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT ERP Integrations 2026 — 10 Systems Mapped, $18K/yr"
        description="Atlantis NDT ERP integrates 10 systems: SAP, Oracle, Maximo, Dynamics 365, QuickBooks, Xero, HubSpot, Salesforce, Zapier, REST. Setup time & field mapping. See pricing."
        keywords="NDT ERP integration, NDT software SAP integration, NDT Maximo integration, inspection software API, NDT ERP Oracle, NDT QuickBooks integration"
        canonical="https://atlantisndt.com/ndt-erp-integration-matrix"
        structuredData={structuredData}
        faq={faq}
      />
      <div className="container mx-auto px-6 pt-4">
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'NDT ERP', href: '/ndt-erp-solution' }, { label: 'Integration Matrix' }]} />
      </div>

      <motion.section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex items-center gap-2 text-primary mb-4">
            <Link2 className="w-5 h-5" />
            <span className="text-sm font-medium uppercase tracking-wide">Integrations</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT ERP Integration Matrix: 10 Systems, Fields, and Setup Time</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A transparent row-by-row reference for every integration Atlantis NDT Suite supports out of the box, plus the custom API path
            for everything else. Use this page to scope your integration project before you sign a contract with any NDT ERP vendor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild size="lg" className="btn-primary"><Link to="/contact">Scope My Integration</Link></Button>
            <Button asChild size="lg" variant="outline"><Link to="/ndt-erp-implementation-timeline">See 30/60/90 Plan</Link></Button>
          </div>
        </div>
      </motion.section>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 mb-10">
            <h2 className="text-3xl font-bold text-foreground">How to read this matrix</h2>
            <p>
              The matrix below covers 10 integration targets across financial ERP, EAM (enterprise asset management), CRM, and no-code
              middleware. For each system we publish the integration method (native connector, REST API, Zapier, or file-based), typical
              setup time, data sync direction (one-way or two-way), the specific fields that flow, and known constraints. This is the
              same scoping document we send to prospective customers during pre-sales, so there is no fluff.
            </p>
            <p>
              Three rules we have learned after 100+ integration projects: (1) always designate one system as the master of record for
              each master-data object before you start, (2) financial posting should be one-way out of the NDT ERP into the financial
              ERP to avoid two reconciliation sources of truth, and (3) start with a 2-week proof-of-concept on a sandbox before
              committing to a full production rollout.
            </p>
          </div>

          <Card className="border-0 shadow-lg">
            <CardContent className="p-0 overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>System</TableHead>
                    <TableHead>Integration Method</TableHead>
                    <TableHead>Setup Time</TableHead>
                    <TableHead>Sync Direction</TableHead>
                    <TableHead>Fields Synced</TableHead>
                    <TableHead>Constraints</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {matrix.map((row) => (
                    <TableRow key={row.system}>
                      <TableCell className="font-semibold whitespace-nowrap">{row.system}</TableCell>
                      <TableCell className="text-sm">{row.method}</TableCell>
                      <TableCell className="text-sm"><Badge variant="outline">{row.setup}</Badge></TableCell>
                      <TableCell className="text-sm">{row.direction}</TableCell>
                      <TableCell className="text-sm">{row.fields}</TableCell>
                      <TableCell className="text-sm text-muted-foreground">{row.constraints}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Financial ERP tier: SAP, Oracle, Dynamics</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              SAP S/4HANA is the most common financial backbone in global super-majors (ExxonMobil, Shell, Chevron, Aramco, ADNOC).
              The integration pattern is predictable: Atlantis NDT Suite owns the inspection workflow and the technician-facing UX,
              SAP owns financial consolidation and global master data. Master data syncs two-way, financial documents post one-way
              from Atlantis into SAP FI-AR. Oracle Fusion follows the same pattern via Oracle Integration Cloud. Dynamics 365 F&O
              is simplest of the three because Dataverse + Dual-write handles the plumbing.
            </p>
            <p>
              Plan 4-6 weeks for SAP, 3-5 weeks for Oracle, 2-4 weeks for Dynamics. Budget $15K-$60K for the integration project
              itself, separate from the NDT ERP license. Always run a 2-week UAT with a subset of real inspection jobs before cutover.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">EAM tier: IBM Maximo</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              In asset-intensive industries (pipelines, refineries, power gen, petrochem) the EAM — most commonly IBM Maximo — is the
              system of record for equipment and work orders. The Atlantis-Maximo integration pushes Work Orders from Maximo into
              Atlantis as inspection Jobs, captures findings in the field, and writes back to the Maximo Service Request and
              Inspection Result objects. Equipment master syncs two-way with Maximo as the master of record.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">SMB accounting tier: QuickBooks, Xero</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              For inspection companies under $25M revenue, QuickBooks Online or Xero is typically the financial system. Both integrations
              are self-serve through OAuth and take about 30 minutes to wire up. Customers, items, invoices, and payments sync
              bi-directionally on a 15-minute schedule (or real-time via webhook).
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">CRM and middleware tier: Salesforce, HubSpot, Zapier, custom API</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Salesforce integration is most common for enterprise inspection companies running Field Service Lightning. HubSpot is
              typical for growth-stage inspection businesses managing inbound leads. Zapier covers the long tail of no-code automations:
              Slack alerts, email digests, spreadsheet sync. Any system we do not support natively can be wired via our OpenAPI spec
              in 2-6 weeks.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Integration anti-patterns to avoid</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Three anti-patterns account for roughly 70% of integration failures we see in NDT ERP deployments. The first is
              dual-write without a clear master of record. If both SAP and the NDT ERP can edit the equipment master, you will
              eventually get conflicting edits, race conditions, and a painful reconciliation process. Fix: designate one
              system as authoritative for each object before the first line of integration code is written, and document it
              in the integration design.
            </p>
            <p>
              The second anti-pattern is batching all integrations into a single big-bang go-live. Integration projects are
              easier to deliver and easier to debug when they are sequenced: financial integration in Phase 1, EAM integration
              in Phase 2, CRM in Phase 3, and no-code workflows in Phase 4. Big-bang means if one integration is late, the
              whole cutover slips. Phased means you start delivering business value in Week 6, not Week 20.
            </p>
            <p>
              The third anti-pattern is over-engineering real-time sync where scheduled sync would work fine. Most master
              data changes infrequently enough that a 15-minute or hourly sync is completely adequate and dramatically
              simpler to build, test, and operate. Reserve real-time for the handful of objects where latency truly
              matters: job status updates for on-site supervisors, defect escalation alerts, and financial posting to
              the GL at invoice signing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Authentication, security, and audit</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Every Atlantis integration supports OAuth 2.0 or API key authentication over TLS 1.3. For enterprise
              customers, we also support mutual TLS and IP allowlisting on the integration edge. All API calls are
              logged with full request/response payloads for 90 days by default (extendable to 7 years for SOX or
              API-regulated customers) so you have a complete audit trail. Role-based access control (RBAC) is
              enforced on every endpoint, and integration service accounts are treated as first-class principals
              with their own permission sets.
            </p>
            <p>
              For customers with heightened compliance requirements (aerospace ITAR, nuclear 10 CFR, government
              regulated data), we offer private-cloud and on-premise deployments of the integration layer. The
              integration contracts (APIs, webhooks, file formats) are identical, only the runtime topology changes.
              This matters because it means you can start on the SaaS integration in Phase 1, and migrate to
              private cloud in Year 2 or 3 without rewriting your integration code.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-3xl font-bold mb-6">Pricing: what integrations actually cost</h2>
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
            <p>
              Native connectors (QuickBooks, Xero, HubSpot, Zapier, Dynamics 365 via Dataverse) are included in the
              standard Atlantis NDT Suite license at no extra charge. You configure them yourself through the admin
              console. Enterprise connectors (SAP S/4HANA, Oracle Fusion, IBM Maximo, Salesforce with custom objects,
              custom REST/GraphQL) are scoped as implementation projects and typically run $15K-$60K one-time plus
              a modest ongoing support uplift of $3K-$12K per year per system.
            </p>
            <p>
              File-based integration (SFTP drop of CSV/XML on a schedule, for legacy systems without APIs) is
              supported out of the box and usually configurable in 2-5 days. Webhook subscriptions to your
              external systems are free on all tiers. Dedicated sandbox environments for integration testing
              are included for the duration of an implementation project and available on-demand post go-live
              for regression testing before major release cycles.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Have a system not on this list?</h2>
          <p className="text-muted-foreground mb-6">Send us your current tech stack. We will return a scoped integration plan within 48 hours.</p>
          <Button asChild size="lg"><Link to="/contact">Request Integration Scope</Link></Button>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
