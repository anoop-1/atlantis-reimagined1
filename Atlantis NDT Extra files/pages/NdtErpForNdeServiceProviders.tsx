import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PillarHubNav from "@/components/PillarHubNav";
import SEOHead from "@/components/SEOHead";

export default function NdtErpForNdeServiceProviders() {
  const faq = [
    {
      q: "Does Atlantis track SNT-TC-1A and CP-189 certifications per technician across multiple employers?",
      a: "Yes. Each technician record carries both employer-written-practice certifications under ASNT SNT-TC-1A and the central ASNT Central Certification Program (ACCP) / ANSI/ASNT CP-189 certifications where the technician holds them. Method, level, issue date, expiry date, employer written practice revision, general/specific/practical exam evidence, near-vision and color-vision exam dates, and annual audit logs all track per-certification. For service providers whose technicians rotate across client sites, the cert record is the technician's, not the client's, and it follows the tech from job to job so dispatch never has to rebuild it."
    },
    {
      q: "Is the platform multi-client, and can I give a client a view of their data without exposing everything?",
      a: "Yes. Multi-client tenancy is the core design assumption — every record carries a client attribute and every user's access is scoped to their role plus the clients they are authorized to see. A client portal module gives each of your clients a read-only view of their own inspection history, their open findings, and their upcoming recommended inspections, branded in their colors if you want. Level III reviewers see all clients; a client's own maintenance manager sees only their records; technicians see only the jobs assigned to them. The partition survives exports — no accidental cross-client data bleed in a PDF."
    },
    {
      q: "Can I white-label the client portal with my own branding?",
      a: "Yes. The portal runs under your subdomain (portal.yourndtcompany.com) with your logo, your colors, your report letterhead, and your contact information. Your clients never see the Atlantis brand in the day-to-day workflow. The underlying platform is still Atlantis, but for the client it is your NDE service provider's platform. This is the PRIMARY customer pattern — the reason Atlantis was built — and it is why we lead with multi-client tenancy rather than adding it as an enterprise tier. Service providers are the ERP's own ERP, and the rest of the verticals are clients."
    },
    {
      q: "How does Nadcap AC7114 audit prep work when I have multiple client approvals?",
      a: "Each Nadcap-accredited service provider runs under its own AC7114 approval, not the client's. The audit-prep module runs off your written practice and your procedures, and the client-by-client sample draw pulls the evidence packet the PRI auditor asks for during AC7114/1 (PT), /2 (MT), /3 (UT), /4 (RT), or /5 (ET) audit. Calibration traceability to NIST, reference-standard verification, technician training records, and the sampled work-order packages bundle in the checklist order PRI walks. Customers using Atlantis for Nadcap audit prep typically cut their prep time from 3-4 weeks down to under one week."
    },
    {
      q: "Does it handle invoicing and invoice-linked report delivery?",
      a: "Yes. When a work order closes, the invoice generates from the billable items tied to the work — technician hours by method and level, equipment day rates, per-diem, travel, consumables — using rate cards that differ by client contract. The invoice attaches to the final inspection report so the client receives both together, or separately if the client prefers invoice-only to AP and report-only to engineering. QuickBooks Online, NetSuite, Sage Intacct, and Microsoft Dynamics 365 Business Central integrations available. Aged receivables dashboards surface clients with open invoices older than 45 days."
    },
    {
      q: "Can I dispatch technicians across multiple client sites from the same schedule?",
      a: "Yes. The dispatch view shows all open jobs across all clients with the required method, level, and certification scope on each. Technician availability, current qualifications, geographic home base, and travel-readiness (current TWIC, current medical if required) filter the assignable pool. Drag-and-drop dispatch from the calendar assigns a technician to a job and triggers the cert-gap check before confirming. For service providers running 30+ active jobs per week across 6+ clients, the dispatcher's calendar is the most-used screen in the platform."
    },
    {
      q: "What about subcontractor management when I put out-of-region work to a partner?",
      a: "Subcontractor partners have their own tenant scope with a restricted role that lets them see only the jobs you have subcontracted to them. They complete the work in your workflow under your written practice, submit records for your Level III review, and the records close under your quality system. Payment to the subcontractor tracks as a vendor transaction and can push to your AP system. This pattern is common for service providers covering wide geography with a core staff plus a network of 10-40 partner contractors — Atlantis keeps the quality system single-source while letting the network execute."
    },
    {
      q: "Can I track ISO 9712 certifications for international work?",
      a: "Yes. Many service providers operate across US and international clients and hold technicians certified under ISO 9712 in addition to SNT-TC-1A or CP-189. The cert record supports ISO 9712 alongside the ASNT schemes, with method, sector, level, issuing certification body, and 5-year recertification clock all tracked. For work under European or IACS-rule clients the ISO 9712 certification is usually what the client accepts, and the system routes assignment decisions against it automatically rather than requiring the dispatcher to know which scheme applies."
    },
    {
      q: "Is there API access for integration with my own customer portal or BI tool?",
      a: "Yes. Atlantis exposes a full REST API covering every object (clients, technicians, jobs, records, invoices) and every state transition, plus a webhook system for event-driven integration. Service providers who run their own marketing-facing customer portal or who pipe data into a BI tool like Power BI, Tableau, or Looker use the API to keep their own surface integrated without maintaining a parallel data entry workflow. API keys scope by role, rate limits are generous for normal use, and the documentation is published publicly at the API reference URL."
    },
    {
      q: "What does pricing look like for a 25-technician NDE service provider?",
      a: "Pricing is per active technician seat with volume discounting above 20 seats, plus a per-client fee for the white-labeled portal, plus remote ASNT Level III review hours packaged at a monthly commit with overage billing. A typical 25-technician regional NDE service provider with 30-60 active clients lands in the range where the platform pays for itself against two things: the 20-25 percent reduction in dispatch-cycle labor and the 60-70 percent reduction in Nadcap audit prep hours. We do not publish list prices on the website because the shape of the commit varies meaningfully by how Level III hours stack up, but a quote turns around in 48 hours after a scoping call."
    }
  ];

  return (
    <>
      <SEOHead
        title="NDT ERP for NDE Service Providers 2026 — SNT-TC-1A, CP-189"
        description="NDT ERP for NDE service providers — SNT-TC-1A cert tracking, CP-189, Nadcap AC7114, multi-client scheduling. 30/60/90-day remote deploy."
        canonical="https://atlantisndt.com/ndt-erp-for-nde-service-providers"
        breadcrumb={[
          { name: "Home", url: "https://atlantisndt.com/" },
          { name: "NDT ERP Solution", url: "https://atlantisndt.com/ndt-erp-solution" },
          { name: "NDE Service Providers", url: "https://atlantisndt.com/ndt-erp-for-nde-service-providers" },
        ]}
        faq={faq}
        software={{
          name: "Atlantis NDT ERP for NDE Service Providers",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Windows, macOS, iOS, Android",
          offers: { price: "0", priceCurrency: "USD", priceNote: "Custom pricing — request a quote" }
        }}
      />
      <Navigation />
      <PillarHubNav active="ndt-erp" />
      <main className="mx-auto max-w-5xl px-4 py-10 prose prose-slate">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          NDT ERP Software for NDE Service Providers — Customizable for Every ASNT-Accredited Provider
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          Atlantis NDT ERP is a remote-first inspection data platform built for the third-party NDE service
          providers that deliver field inspection to industry — ASNT-accredited independent inspection companies,
          Nadcap-accredited aerospace NDE contractors, multi-site regional NDE houses that service refineries
          and power stations across a territory, and specialty PAUT/advanced-UT shops that sell Level III
          authority as a service. The platform is configured around the codes that govern how these providers
          operate — ASNT SNT-TC-1A Rev 2020 as the baseline personnel qualification standard, ASNT CP-189 where
          the client contract calls for central certification, ISO 9712 for international work, and Nadcap
          AC7114 supplements for aerospace work — so technician certifications, multi-client scheduling,
          invoice-linked report delivery, and subcontractor management live in one place instead of a dozen
          spreadsheets on a dispatcher's laptop.
        </p>
        <p className="text-lg leading-relaxed mb-8">
          NDE service providers are the PRIMARY customer for Atlantis. The rest of the platform's verticals — refineries,
          aerospace MRO, shipyards, power generation — are the clients the providers serve. The software is built
          to be white-labeled: your subdomain, your branding, your report letterhead. For your clients it is your
          NDE company's platform. For you it is your ERP.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The inspection-data problem for NDE service providers</h2>
        <p className="mb-4">
          A 25-technician regional NDE service provider typically services 30 to 60 active clients across 4 to 8
          adjacent verticals — refineries, petrochemical plants, pipelines, power stations, fab shops, shipyards,
          offshore platforms, wind farms. Each client has its own written practice requirements, its own preferred
          report format, its own rate card, its own billing terms, and its own audit requirements. Each technician
          has a method-by-method certification record that has to satisfy whichever standard the client contract
          invokes. Every job generates a work order, a technician assignment, field records, a Level III review,
          a client-facing report, and an invoice. The paperwork-to-productive-hours ratio in a typical provider
          without an ERP runs 1:3 — for every three hours a Level II spends on tools, the back office spends an
          hour on paperwork.
        </p>
        <p className="mb-4">
          The failure mode is not any single task. It is that the cross-client coordination happens in a
          dispatcher's head. Tech A is certified in PAUT under the 2018 written practice but the client Acme
          Refinery requires the 2022 written practice — does Tech A requalify, or does the job go to Tech B?
          Tech C's 5-year CP-189 Level III is expiring next month — does the company's UT coverage hold if the
          recert slips? Client XYZ's Nadcap AC7114/3 audit is in 8 weeks — can the evidence packet be generated
          in time? These questions live in a dispatcher's head because the data lives in eight systems, and when
          the dispatcher is out sick for a week the business moves at 40 percent capacity.
        </p>
        <p className="mb-4">
          Invoicing and report delivery compounds the problem. Clients want the final inspection report and the
          invoice in two different channels — the report to engineering, the invoice to AP — and they want the
          invoice priced against their specific contract rate card. Service providers who cannot reliably get
          both artifacts out within 48 hours of job completion lose repeat business to competitors who can.
          Atlantis was designed first and foremost to close this loop.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How Atlantis NDT ERP is built for NDE service providers</h2>
        <p className="mb-4">
          <strong>Multi-client tenancy.</strong> Every record carries a client attribute. User access scopes by
          role plus client. The dispatcher sees all jobs across all clients; the client's own maintenance manager
          sees only their records via the white-labeled portal; technicians see only the jobs assigned to them.
          Partitioning survives PDF exports — no accidental cross-client data bleed.
        </p>
        <p className="mb-4">
          <strong>White-labeled client portal.</strong> Your subdomain (portal.yourndtcompany.com), your logo,
          your colors, your letterhead. Your clients never see the Atlantis brand. Report PDFs render with your
          branding. Invoice PDFs render with your branding. For the client it is your platform.
        </p>
        <p className="mb-4">
          <strong>Certification lifecycle by technician.</strong> SNT-TC-1A written-practice certifications,
          ASNT CP-189 central certifications, ISO 9712 international certifications, and NAS 410 aerospace
          certifications all coexist on the same technician record per method. Expiry alerts fire at 90/60/30
          days. Annual written-practice audits and near-vision/color-vision exams track. Assignment is blocked
          automatically when the tech does not hold the cert the client contract requires.
        </p>
        <p className="mb-4">
          <strong>Dispatch and multi-client scheduling.</strong> The dispatcher's calendar is the most-used
          screen — all open jobs across all clients with required method, level, and scope. Technician
          availability, current certs, geographic home base, and travel-readiness filter the assignable pool.
          Drag-and-drop assignment runs the cert-gap check before confirming.
        </p>
        <p className="mb-4">
          <strong>Invoice-linked report delivery.</strong> When a work order closes, the invoice generates from
          billable items tied to the work using rate cards that differ by client contract. Invoice attaches to
          final report for delivery. Aged receivables dashboards surface slow-pay clients.
        </p>
        <p className="mb-4">
          <strong>Subcontractor network management.</strong> Partner contractors have their own tenant scope with
          a restricted role that lets them see only the jobs subcontracted to them. They complete work in your
          workflow under your written practice and submit for your Level III review. Payment tracks as a vendor
          transaction to your AP system.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Codes and frameworks we support out of the box</h2>
        <p className="mb-4">
          The Atlantis NDE service provider configuration ships with the personnel-qualification and
          audit-framework templates that govern how providers operate, plus every client-side code set they are
          likely to execute against. When ASNT revises SNT-TC-1A or CP-189, or when Nadcap rolls out a new
          AC7114 supplement revision, the updated template publishes to all tenants. Each provider still layers
          its own written practice on top.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>ASNT SNT-TC-1A (current edition) — Personnel Qualification and Certification</li>
          <li>ANSI/ASNT CP-189 — Central Certification Program qualification</li>
          <li>ISO 9712 — International certification of NDT personnel</li>
          <li>Nadcap AC7114 baseline + AC7114/1 (PT), /2 (MT), /3 (UT), /4 (RT), /5 (ET)</li>
          <li>NAS 410 Rev 4 / Rev 5 — where aerospace clients require it</li>
          <li>ASME Section V — as the client-side NDE methodology backbone</li>
          <li>API 510, 570, 653 — oil-gas client scope</li>
          <li>AWS D1.1 — structural welding client scope</li>
          <li>ASME Section XI — nuclear client scope</li>
          <li>ABS, DNV, LR — marine client scope</li>
          <li>ISO 17636, ISO 17640 — European / IACS client scope</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Integration with existing stacks</h2>
        <p className="mb-4">
          NDE service providers typically run a lighter back-office stack than their industrial clients — QuickBooks
          Online, NetSuite, Sage Intacct, or Microsoft Dynamics 365 Business Central for accounting; a CRM like
          HubSpot or Salesforce for client pipeline; maybe a dedicated field-service management tool like ServiceMax
          or FieldAware; and a document-storage system like SharePoint or Google Drive. Atlantis bridges the
          inspection-execution layer across these and into the clients' own systems.
        </p>
        <p className="mb-4">
          QuickBooks Online integration uses the QBO API for invoice push and AR sync. NetSuite uses the
          SuiteTalk REST API. Sage Intacct uses the Sage Intacct Web Services API. Dynamics 365 Business Central
          uses the Microsoft Graph API. For CRM, HubSpot integrates through the HubSpot API for client-record
          sync, Salesforce through the Salesforce REST API. Field-service management overlap is usually handled
          by using Atlantis as the authoritative system for NDE work and the FSM tool for non-NDE field service.
          On the client-facing side, if a client runs their own ERP (SAP, Maximo, Oracle) that wants the NDE
          record back inside it, the integration runs through whatever integration pattern the client exposes —
          typically REST API, sometimes SFTP flat file. Atlantis does not replace your accounting or CRM. It
          bridges the NDE data layer between field execution and back office.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">30/60/90-day remote deployment plan</h2>
        <p className="mb-4">
          <strong>Days 0-30 — pilot scope.</strong> One client, one method (usually UT thickness on a refinery or
          pipeline client), the full technician roster for that client's work onboarded with current certifications,
          rate card for that client loaded. Written practice uploaded and revision-controlled. Report template
          configured with your letterhead.
        </p>
        <p className="mb-4">
          <strong>Days 30-60 — client portal rollout and accounting integration.</strong> White-labeled client
          portal live on your subdomain, first pilot client given access. QuickBooks / NetSuite / Sage / Dynamics
          365 integration live for invoice push. Full technician roster onboarded (typically 20-50 technicians
          for a regional provider) with all current certifications. First three to five additional clients
          onboarded with their respective rate cards and report formats.
        </p>
        <p className="mb-4">
          <strong>Days 60-90 — full roster, full client list, Nadcap audit prep.</strong> All active clients
          onboarded. Subcontractor partners onboarded with restricted-scope tenants. Nadcap AC7114 audit prep
          module dry-run against your next scheduled audit window. Dispatcher's calendar in daily production use.
          Level III remote review cycle live with defined SLAs (48-hour standard, 24-hour critical). SSO against
          your corporate IdP live.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What Atlantis's ASNT Level III review adds</h2>
        <p className="mb-4">
          Software without expert review is a shiny database. For NDE service providers specifically, remote
          Level III review hours are available as a bundled service — you can sell Level III authority to your
          clients without carrying a full-time Level III employee on your payroll. Atlantis ASNT Level IIIs
          cover UT, PAUT, TOFD, RT, MT, PT, VT, and ET with a 48-hour standard turnaround and a 24-hour
          outage-critical lane. For aerospace-certified providers, NAS 410 Level III hours are available on the
          same basis. This is how many 15-to-30-technician regional providers scale into markets (nuclear,
          aerospace, pressure-vessel-code-stamped) they could not otherwise serve.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Customization — ERP that fits your service business</h2>
        <p className="mb-4">
          Every NDE service provider has its own written practice, its own brand identity, its own client rate
          cards, and its own operating geography. Atlantis is configured against those choices — the platform is
          an ERP that bends to your business, not a workflow your business has to bend to fit. Custom inspection
          types drop into the data model through a no-code schema editor. Custom report templates render with
          your letterhead and your signature block order. Custom rate card structures (hourly, per-weld, per-shot,
          per-diem, equipment day rate, flat-fee project) all configure per client. Custom workflow states — for
          example, a client that requires a separate maintenance-manager sign-off between your Level III review
          and final delivery — add through the workflow designer.
        </p>
        <p className="mb-4">
          The platform is API-first and white-labelable end-to-end. Your subdomain, your branding, your report
          and invoice PDFs. The REST API and webhook system let you connect to your own website, your own CRM,
          your own BI stack, or a bespoke client portal you already operate. The integration pattern scales from
          a single-location 10-tech shop to a multi-state 200-tech operation with a network of subcontractor
          partners — the same platform, more seats.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Cities we serve this vertical from</h2>
        <p className="mb-4">
          Atlantis supports NDE service providers across every major US metro. Service providers are remote-first
          by nature of the business — technicians go to the asset, not the other way around — so our city
          presence maps to the dispatch corridors where providers concentrate their back-office and where clients
          cluster densely:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-houston">Houston, TX</Link> — oil-gas and petrochemical corridor</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-dallas">Dallas, TX</Link> — North Texas industrial corridor</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-chicago">Chicago, IL</Link> — Midwest manufacturing and power</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-los-angeles">Los Angeles, CA</Link> — aerospace and Southern California refining</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-new-york">New York, NY</Link> — Northeast industrial corridor</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-philadelphia">Philadelphia, PA</Link> — Mid-Atlantic industrial and pharma</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-atlanta">Atlanta, GA</Link> — Southeast manufacturing and power corridor</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-pittsburgh">Pittsburgh, PA</Link> — steel, power, and OEM heritage</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-denver">Denver, CO</Link> — Mountain West oil-gas and aerospace</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Frequently asked questions</h2>
        <div className="space-y-4">
          {faq.map((item, idx) => (
            <div key={idx} className="border border-slate-200 rounded-lg p-4">
              <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
              <p className="text-slate-700">{item.a}</p>
            </div>
          ))}
        </div>

        <section className="mt-12 p-8 bg-slate-50 rounded-xl text-center">
          <h2 className="text-2xl font-semibold mb-3">Ready to see a demo for your NDE service business?</h2>
          <p className="mb-6 text-slate-700">
            Book a 30-minute walkthrough against your own client list, your technician roster, and your next
            Nadcap audit window. We will show multi-client dispatch, the white-labeled client portal, and Level
            III remote review on a sample work order.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="inline-block rounded-lg bg-blue-600 text-white px-6 py-3 hover:bg-blue-700">Book a demo</Link>
            <Link to="/ndt-erp-solution" className="inline-block rounded-lg border border-slate-300 text-slate-800 px-6 py-3 hover:bg-slate-100">See our ERP hub</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
