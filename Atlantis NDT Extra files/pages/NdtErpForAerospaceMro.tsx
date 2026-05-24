import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PillarHubNav from "@/components/PillarHubNav";
import SEOHead from "@/components/SEOHead";

export default function NdtErpForAerospaceMro() {
  const faq = [
    {
      q: "Does Atlantis NDT ERP track NAS 410 Level II and Level III certifications correctly?",
      a: "Yes. The technician certification module stores NAS 410 Rev 4 and Rev 5 certifications per method (UT, PAUT, ET, RT, MT, PT, VT, thermography, shearography), with employer written practice reference, general/specific/practical exam scores and dates, near-vision and color-vision exam dates, on-the-job training hours, annual experience logs, and recertification due dates at 3-year and 5-year intervals. The system blocks assignment to a task requiring a method the technician is not currently certified in under the active written practice, and the block cites the specific clause of the employer NAS 410 written practice that the assignment would violate."
    },
    {
      q: "How does it support FAA 14 CFR Part 145 repair-station audits?",
      a: "Atlantis generates the Part 145 documentation set that the FAA Principal Inspector expects to see during a repair station surveillance audit: the inspection procedures manual references tied to each task, the technician roster with current NAS 410 certifications and authorized methods, the calibration history of every piece of NDT equipment used, the work order with entries signed by the approved inspector, and the repair-station release record. The audit export bundles these into a single PDF per work order with the RSM-required 14 CFR 145.219 records retention metadata already embedded."
    },
    {
      q: "Is it compatible with Nadcap AC7114 audit requirements?",
      a: "Yes. The platform is built against Nadcap AC7114/1 through /5 checklists, including the NDT method-specific supplements (/1 PT, /2 MT, /3 UT, /4 RT, /5 ET). Procedures, technique sheets, and written practices carry the AC7114 checklist mapping as metadata, and the audit prep module generates the exact evidence packet the Nadcap auditor requests: a sample of work-order records by method, calibration certs traceable to NIST, reference standards with current verification, and training records. Customers using Atlantis to prep for Nadcap typically report a 60-70 percent reduction in audit-prep hours versus their prior manual process."
    },
    {
      q: "Can it handle composite PAUT, thermography, and shearography records for NAS 999 bond inspection?",
      a: "Yes. Composite NDE is a first-class workflow. PAUT scan data from Olympus OmniScan X3 with composite-appropriate probe configurations, IR thermography data from FLIR A655sc or InfraTec VarioCAM systems, and shearography data from Dantec Q-800 or Laser Technology systems all ingest natively. Bond-line records under NAS 999 track disbond size, location against the engineering drawing, and comparison to the acceptance criteria from the part's engineering drawing or structural repair manual. All findings cross-reference to the AMOC or DER-approved disposition."
    },
    {
      q: "Does it integrate with PTC Windchill or Siemens Teamcenter?",
      a: "Yes. Windchill integration runs through the Info*Engine REST APIs and pulls the engineering drawing revision, the structural repair manual reference, and the bill of materials context for each part number a technician is inspecting. Teamcenter integration uses TcXML or the Teamcenter REST services. In both cases, the pattern is the same: when a technician opens a work order for part number 123-4567, Atlantis shows the current engineering drawing revision from PLM in the same screen, so nobody is inspecting against a three-revision-stale print. Findings push back to PLM as non-conformance records."
    },
    {
      q: "Can it export inspection records in AS9102 first-article inspection format?",
      a: "Yes. Atlantis does not replace the FAI authoring tools (Net-Inspect, Discus, or a full QMS like IQMS) but exports NDE results in AS9102 Rev C Form 3 characteristic accountability format so that the NDE rows in the FAI package pull directly from Atlantis instead of being hand-transcribed. This is particularly relevant for first-article composite parts where PAUT and thermography results contribute to the FAI sign-off. The export supports both AS9102B legacy format and current AS9102C, with the XML schema updates applied automatically."
    },
    {
      q: "Is the platform FDA 21 CFR Part 11 compliant for dual-use aerospace-medical work?",
      a: "The core audit-trail, e-signature, and record-retention controls are built to satisfy 21 CFR Part 11 for the subset of MRO customers doing aerospace-medical dual-use work (typically on pharmaceutical manufacturing equipment shared with aerospace contract work, or on medical device components). E-signatures use cryptographic signing with user re-authentication, the audit trail is immutable and time-stamped, and the record-retention policy enforces the longer of the customer's NAS 410 and Part 11 retention requirements. A formal Part 11 validation package is available on request with IQ/OQ/PQ documentation."
    },
    {
      q: "What about rotable parts traceability — birth certificate to teardown?",
      a: "Each rotable serial number carries its full NDE history: factory-level acceptance record (if the OEM shares it), every subsequent shop visit, accumulated inspection findings, and any repair dispositions. For engine hot-section parts the lifecycle can run 15-20 shop visits over a 25-year service life, and the system keeps them all on a single part-serial record. The lifecycle view matters most for life-limited parts under FAA AD and OEM service bulletin compliance, where the next inspection scope often depends on what was found three shop visits ago."
    },
    {
      q: "Which engine MRO customers can you reference?",
      a: "Atlantis has deployed in repair-station environments that support engine platforms across the CFM56, CFM LEAP, GE90, GEnx, GE Passport, Rolls-Royce Trent 700/1000/XWB, Pratt & Whitney PW1000G, PW2000, PW4000, and V2500 families, as well as APU lines (Honeywell 131-9, GTCP 85). We are not at liberty to name specific Tier 1 MRO customers publicly, but engagement patterns at shops in the Delta TechOps / Pratt & Whitney / Rolls-Royce LibertyWorks tier inform how the engine hot-section NDE workflow is configured. Ask for references under NDA during the demo cycle."
    },
    {
      q: "How does a remote MRO deployment handle ITAR and export-control data?",
      a: "ITAR-regulated data is flagged at the record level and stored in a US-only AWS region (us-east-1 or us-west-2) with access restricted by nationality attribute passed through the SAML SSO claim. Non-US persons cannot access flagged records even if they hold a general platform role. The access control log is exportable for the customer's DDTC or BIS compliance review. For customers with ECCN-controlled rather than USML-controlled data, the same mechanism applies with the EAR attribute set. We do not host ITAR data outside US jurisdiction and we do not permit subprocessor access to flagged records."
    }
  ];

  return (
    <>
      <SEOHead
        title="NDT ERP for Aerospace MRO 2026 — NAS 410, AS9100, FAA 145"
        description="NDT ERP for aerospace MRO — NAS 410 cert tracking, AS9100D audit export, FAA 14 CFR Part 145 workflow. 30/60/90-day remote deploy."
        canonical="https://atlantisndt.com/ndt-erp-for-aerospace-mro"
        breadcrumb={[
          { name: "Home", url: "https://atlantisndt.com/" },
          { name: "NDT ERP Solution", url: "https://atlantisndt.com/ndt-erp-solution" },
          { name: "Aerospace MRO", url: "https://atlantisndt.com/ndt-erp-for-aerospace-mro" },
        ]}
        faq={faq}
        software={{
          name: "Atlantis NDT ERP for Aerospace MRO",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Windows, macOS, iOS, Android",
          offers: { price: "0", priceCurrency: "USD", priceNote: "Custom pricing — request a quote" }
        }}
      />
      <Navigation />
      <PillarHubNav active="ndt-erp" />
      <main className="mx-auto max-w-5xl px-4 py-10 prose prose-slate">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          NDT ERP Software for Aerospace MRO — Customizable for Every FAA-Certified Repair Station
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          Atlantis NDT ERP is a remote-first inspection data platform built for the repair stations, engine overhaul
          shops, composite repair centers, and component MRO facilities that hold FAA 14 CFR Part 145 authorization
          and EASA Part 145 approval. The platform is configured for the code stack these shops operate under —
          NAS 410 Rev 5 for personnel qualification, AS9100D Rev F for quality management, FAA AC 43.13-1B and 2B
          for acceptable methods of inspection, 14 CFR Part 145 for the repair-station operating rules themselves,
          ASNT SNT-TC-1A where it applies as the underlying personnel standard, and NAS 999 for adhesive-bonded
          composite bond inspection — so the technician roster, the calibration records, the work-order sign-offs,
          and the Nadcap AC7114 audit package all live in the same record instead of across a dozen spreadsheets.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The inspection-data problem in aerospace MRO</h2>
        <p className="mb-4">
          A Part 145 repair station runs three documentation burdens in parallel and most shops run them with
          completely disconnected systems. First, AS9100D clause 8.7 nonconforming output and clause 8.5.1
          production and service provision require traceable evidence for every accepted and rejected part,
          typically across 15 to 40 active work orders per technician per week. Second, 14 CFR 145.219 mandates
          record retention for two years for each maintenance task, and the FAA PMI's surveillance audit will
          sample records at random and demand the full chain — work order, technician cert, calibration cert,
          procedure revision, reference standard — for each. Third, NAS 410 Rev 5 clause 7 requires the employer
          to maintain a written practice and a certification record for every NDT technician, updated on every
          recertification, every method addition, and every annual vision exam.
        </p>
        <p className="mb-4">
          The failure mode is not missing records. It is that the records cannot be produced on demand in the
          form the auditor wants. A spreadsheet of NAS 410 certifications is not evidence; the auditor wants to
          see the written practice the tech certified under, the exam records, the eye-exam, and the OJT log —
          all tied to the specific tasks the tech performed over the past audit period. Composite work is even
          harder: NAS 999 bond inspection records have to correlate to the engineering drawing revision in
          Windchill or Teamcenter, and if the PLM system revved the drawing mid-repair, the evidence trail has
          to show which revision governed the inspection.
        </p>
        <p className="mb-4">
          Nadcap adds a fourth burden. An AC7114/3 UT audit can ask for twelve specific record samples across
          the 12-month audit window and expect response within the audit week. Shops that cannot generate those
          samples cleanly lose their Nadcap approval and lose OEM work within weeks. Atlantis was built, among
          other things, to collapse these four documentation burdens into a single record.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How Atlantis NDT ERP is built for aerospace MRO</h2>
        <p className="mb-4">
          <strong>NAS 410 certification lifecycle.</strong> Every technician record carries per-method certification
          under the employer NAS 410 written practice: exam scores, general/specific/practical dates, near-vision
          and color-vision exam dates, OJT hours, annual experience logs, and 3-year (Level II) or 5-year
          (Level III) recertification clocks. Alerts fire at 90/60/30 days. The system refuses task assignment
          when the assignment would violate the written practice.
        </p>
        <p className="mb-4">
          <strong>FAA 14 CFR Part 145 audit export.</strong> For any work order or any date range, the audit export
          bundles the full 145.219 record set — task card, approved procedure revision, technician cert at time of
          work, equipment calibration cert, reference standard record, and inspector sign-off — into a single
          audit-ready PDF. This is the artifact the PMI wants, and Atlantis generates it in under 30 seconds for
          any sampled record.
        </p>
        <p className="mb-4">
          <strong>AS9100D Rev F clause 8.7 nonconformance workflow.</strong> NDE findings that result in a
          nonconforming product route into the AS9100 nonconformance flow with disposition options (use-as-is via
          DER, rework, repair, scrap), MRB approval signatures, and retention controls that satisfy clause 8.5.1.
          The nonconformance record links back to the original inspection record so that the NDE evidence follows
          the disposition.
        </p>
        <p className="mb-4">
          <strong>Composite PAUT, thermography, and shearography.</strong> NAS 999 adhesive-bonded structure
          inspection has a dedicated workflow. Disbonds record against a part-geometry overlay, cross-referenced
          to the engineering drawing revision pulled from PTC Windchill or Siemens Teamcenter. The acceptance
          criteria template drives from the part-specific structural repair manual rather than a generic code.
        </p>
        <p className="mb-4">
          <strong>Nadcap AC7114 audit prep.</strong> A dedicated audit-prep module generates the evidence packet
          for AC7114/1 (PT), /2 (MT), /3 (UT), /4 (RT), and /5 (ET) against a user-selected audit window. Sample
          records, calibration traceability to NIST, reference standard verification, and training records bundle
          in the checklist order the PRI auditor walks.
        </p>
        <p className="mb-4">
          <strong>Rotable and life-limited parts lifecycle.</strong> Each serial number carries its full NDE
          history across shop visits, from birth certificate (when the OEM shares it) through each subsequent
          overhaul. For life-limited parts under FAA AD or OEM service bulletin compliance, the next inspection
          scope calculates from the accumulated history, not just the current visit.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Codes and frameworks we support out of the box</h2>
        <p className="mb-4">
          The Atlantis aerospace MRO configuration ships with pre-built templates, interval logic, written-practice
          scaffolds, and audit-export formats for the full code stack that governs Part 145 work. When a new
          revision of NAS 410 or AS9100 drops, we publish the updated template to all tenants and flag any
          existing records that need migration. Each repair station can still layer its own written practice and
          procedures on top of the baseline.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>NAS 410 Rev 4 and Rev 5 — NDT Personnel Qualification and Certification</li>
          <li>AS9100D Rev F — Aerospace Quality Management Systems</li>
          <li>FAA AC 43.13-1B — Acceptable Methods for Aircraft Inspection and Repair</li>
          <li>FAA AC 43.13-2B — Acceptable Methods for Aircraft Alterations</li>
          <li>14 CFR Part 145 — Repair Stations (operating rules and 145.219 records)</li>
          <li>ASNT SNT-TC-1A — Personnel Qualification (baseline under NAS 410)</li>
          <li>NAS 999 — Nondestructive Inspection of Advanced Composite Aircraft Structure</li>
          <li>AS9102 Rev C — First Article Inspection Requirement (Form 3 NDE export)</li>
          <li>Nadcap AC7114/1 through /5 — NDT audit checklists</li>
          <li>AMS 2642, AMS 2647 — fluorescent penetrant and magnetic particle materials</li>
          <li>ISO 9712 — secondary framework for overseas certifications</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Integration with existing stacks</h2>
        <p className="mb-4">
          Aerospace MRO shops typically run a stack of five to seven systems, and Atlantis is designed to slot
          into the inspection data layer without displacing any of them. PTC Windchill or Siemens Teamcenter holds
          the engineering drawing master, the structural repair manual, and the bill of materials. An ERP like
          SAP S/4HANA Aerospace, IFS Applications, or Infor CloudSuite Aerospace holds the financial work-order
          and parts procurement layer. A dedicated MRO system like TRAX, AMOS, Ramco Aviation, or Swiss AviationSoftware
          AMOS holds the task card and the tech log. A QMS tool like Net-Inspect or Discus handles AS9102 FAI
          authoring. Atlantis bridges the NDE data layer across these.
        </p>
        <p className="mb-4">
          Windchill integration runs through Info*Engine or the current Windchill REST services, pulling drawing
          revision and SRM context at work-order open time and pushing NDE findings back as non-conformance
          records. Teamcenter integration uses TcXML or the Teamcenter REST services. SAP S/4HANA integrates via
          OData, Ramco via its public API set, TRAX via flat-file or REST depending on the customer's TRAX
          hosting model. We do not replace the MRO system — we feed it clean NDE evidence and consume its task
          card context so the technician works in one window instead of four.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">30/60/90-day remote deployment plan</h2>
        <p className="mb-4">
          <strong>Days 0-30 — pilot scope.</strong> One shop area (typically PT or MT on a single product line),
          one certification scope (NAS 410 under the customer's current written practice), and one inspection
          method end-to-end. We onboard the technician roster, certifications, and the current written practice
          revision. Two data-mapping workshops, remote.
        </p>
        <p className="mb-4">
          <strong>Days 30-60 — MRO system connection and historical import.</strong> The primary MRO system
          integration goes live (TRAX, AMOS, Ramco, or the customer's ERP). Two to three years of historical NDE
          records import — typically 8,000 to 25,000 records for a mid-sized repair station. Parallel run of
          inspection cycle. AS9100D clause 8.7 nonconformance flow tests against recent rejection cases.
        </p>
        <p className="mb-4">
          <strong>Days 60-90 — full cutover and audit-mode.</strong> PAUT, UT, and RT onboarded for the expanded
          product scope, NAS 999 composite flow configured if the shop does bond work, Nadcap AC7114 audit-prep
          module dry-run against the upcoming audit window, 14 CFR 145.219 audit export validated with the
          customer's quality manager, SSO/SAML live, ITAR flagging live if in scope. First Atlantis-of-record
          audit cycle runs in production.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What Atlantis's ASNT Level III review adds</h2>
        <p className="mb-4">
          Software without expert review is a shiny database. Every Atlantis aerospace MRO deployment includes
          remote ASNT and NAS 410 Level III review coverage in UT, PAUT, ET, RT, MT, PT, VT, thermography, and
          shearography, with a 48-hour standard turnaround and a 24-hour AOG-critical lane. The Level III reviews
          scan data and interpretation inside the same record the technician submitted it in, with redline
          annotations directly on the scan. For AOG cases the remote Level III is on-call around the clock. This
          catches the mistakes paper-based review misses and it keeps the repair station defensible at the next
          FAA PMI visit.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Customization — ERP that fits your repair station</h2>
        <p className="mb-4">
          Every Part 145 repair station has its own written practice, its own task-card format, its own
          engineering-drawing revision control rhythm, and its own Nadcap audit history. Atlantis is configured
          against those choices rather than forcing a generic template. Custom inspection types drop into the
          data model through a no-code schema editor. Custom report templates render with the repair-station
          letterhead, the signature block order the FAA accepts, and the required 145.219 metadata already
          embedded. Custom workflow states — for example, a station that requires an authorized inspector
          sign-off before Level III review — add through the workflow designer.
        </p>
        <p className="mb-4">
          The platform is API-first. Every record that can be created in the UI can be created through the REST
          API, and every state change fires a webhook that downstream systems — your MRO system, your QMS, your
          corporate data lake — can subscribe to. For customers with DER or EASA Part 21 design authority,
          engineering dispositions flow through the same record rather than a separate paper trail.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Cities we serve this vertical from</h2>
        <p className="mb-4">
          Atlantis supports aerospace MRO across the major US repair-station clusters. Remote deployment means
          your location is not limited by our city presence — but the following Tier-1 cities have the densest
          MRO footprint and the most Atlantis customer references:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-atlanta">Atlanta, GA</Link> — Delta TechOps</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-huntsville">Huntsville, AL</Link> — aerospace and defense corridor</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-fort-worth">Fort Worth, TX</Link> — Lockheed, Bell, AA TechOps</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-mobile">Mobile, AL</Link> — Airbus US final assembly</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-seattle">Seattle, WA</Link> — Boeing Commercial Airplanes</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-indianapolis">Indianapolis, IN</Link> — Rolls-Royce LibertyWorks</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-hartford">Hartford, CT</Link> — Pratt & Whitney corridor</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-phoenix">Phoenix, AZ</Link> — Honeywell Aerospace</li>
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
          <h2 className="text-2xl font-semibold mb-3">Ready to see a demo for your repair station?</h2>
          <p className="mb-6 text-slate-700">
            Book a 30-minute walkthrough against your own NAS 410 written practice, your PLM stack, and your
            Nadcap audit window. We will show certification tracking, composite PAUT capture, and Level III
            remote review on a sample work order.
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
