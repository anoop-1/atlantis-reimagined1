import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PillarHubNav from "@/components/PillarHubNav";
import SEOHead from "@/components/SEOHead";

export default function NdtErpForRefineries() {
  const faq = [
    {
      q: "Does Atlantis NDT ERP support API 510, 570, and 653 inspection intervals natively?",
      a: "Yes. The data model ships with native API 510 pressure vessel, API 570 piping, and API 653 aboveground storage tank entity types. Each asset record carries the interval clock (e.g., API 653 10-year external, 20-year internal), last inspection date, next due date calculated against corrosion rate, and automatic re-intervaling when a remaining-life calculation triggers a reduced-interval rule under API 510 section 6.4 or API 570 section 6.3. The system generates due-date dashboards filtered by unit, turnaround window, and code, and pushes due-date events to IBM Maximo or SAP PM as work order triggers 90 days ahead of expiry."
    },
    {
      q: "Can I import historical PAUT and TOFD weld records from existing scan storage?",
      a: "Yes. We ingest Olympus OmniScan, Zetec Topaz, M2M Gekko, and Eddyfi M2M Panther native scan files (.rdt, .etfm, .mcd) plus the ISO 17643 DICONDE wrapper used by many refinery archives. Bulk import runs in batches of up to 5,000 welds per job and preserves scan plan metadata, probe IDs, wedge angles, and calibration block traceability. The import includes a reconciliation report so that when a legacy weld map references a location not yet in the asset register, Atlantis creates a stub record for Level III approval before the scan is accepted into the permanent record."
    },
    {
      q: "How does it integrate with IBM Maximo for turnaround planning?",
      a: "Atlantis integrates with Maximo through MAS 8 REST APIs and, for legacy on-prem Maximo 7.6, through the MIF integration framework. Inspection due dates push as PM records, findings push as corrective work orders with severity-mapped priority, and Maximo asset hierarchy flows back into Atlantis as the canonical equipment tree. During turnaround mode, a single Maximo work package becomes an Atlantis inspection job with nested weld and thickness-reading records, keeping the turnaround planner's Gantt aligned with the field data as it is collected."
    },
    {
      q: "Does the system handle Risk-Based Inspection under API 580/581?",
      a: "Atlantis is an inspection-execution and records system, not an RBI engine — we do not replace Meridium APM or Bentley AssetWise APM for probability-of-failure modeling. What we do is consume RBI outputs (next inspection date, inspection scope, damage mechanism flags) via API or flat-file import and drive the field workflow off them. Findings flow back out so your RBI model gets fed real inspection evidence, not stale assumptions. This is the integration pattern most Gulf Coast refiners already run between their RBI platform and their CMMS — we slot in as the inspection data layer in the middle."
    },
    {
      q: "Can Atlantis track Level II and Level III technician certifications under SNT-TC-1A?",
      a: "Yes. Each technician record stores method-by-method certification (UT, PAUT, TOFD, RT, MT, PT, VT, ET), level, issue date, expiry date, written practice reference, and the specific employer written practice revision they certified under. Expiry alerts fire 90, 60, 30, and 7 days out. The system blocks a technician from being assigned to a job that requires a method they are not currently certified in, and the block includes the specific certification gap so a dispatcher can correct the assignment in a single click."
    },
    {
      q: "What about tank bottom scanning — MFL, UT, and API 653 integration?",
      a: "Tank bottom scans from Silverwing Floormap3Di, Eddyfi TankPac, and Jireh Navic systems ingest as overlay grids tied to the tank plate layout. Remaining thickness heatmaps generate against the original plate thickness schedule, and critical zone findings (plate thinning greater than 50 percent under API 653 section 6.4.1.2) flag automatically with a repair-recommendation template pre-populated for Level III review. The out-of-service inspection report bundles scan data, visual findings, settlement survey results, and shell course UT readings into the single API 653 out-of-service report."
    },
    {
      q: "Does it support ASME B31.3 process piping with circuit-based tracking?",
      a: "Yes. Piping circuits are first-class objects — each circuit holds its service description, design conditions, materials of construction, CML (condition monitoring location) list, and damage-mechanism tags drawn from API RP 571. Thickness readings post per-CML with automatic long-term and short-term corrosion rate calculations, remaining life to minimum thickness, and half-life retest intervals. B31.3 repair categories map to the repair work order template so that when a finding triggers a temporary repair, the documentation flow follows the code-required sequence through to permanent repair closeout."
    },
    {
      q: "How does remote Level III review work during a live turnaround?",
      a: "During turnaround, field technicians upload scan data and findings to Atlantis from the unit as work progresses. An Atlantis ASNT Level III reviews the data remotely within a service-level of 48 hours — or 12 hours for turnaround-critical welds flagged by the turnaround coordinator. Review notes return to the technician inside the same record, with redline annotations on the scan image. If the Level III requires a reshoot, the job returns to open status with a specific instruction rather than a generic rejection, which is the single biggest time-saver versus paper-based review cycles."
    },
    {
      q: "Is the platform hosted in a way that satisfies refinery IT security reviews?",
      a: "Atlantis runs on AWS in US regions with SOC 2 Type II controls, data encrypted at rest with AES-256 and in transit with TLS 1.3, SSO via SAML 2.0 or OIDC against your corporate IdP (Azure AD, Okta, Ping), role-based access control mapped to your org structure, and full audit logging of every record change. For refiners with stricter requirements, we offer private-tenant deployment in a dedicated AWS account and, in limited cases, customer-managed KMS keys. No inspection data is used for model training or shared across tenants."
    },
    {
      q: "What does a 30/60/90-day remote deployment actually look like for a refinery?",
      a: "Days 0-30: we onboard one unit (typically a crude or FCC unit), one code scope (usually API 570 piping), and map the equipment tree from your Maximo or SAP PM instance. Days 30-60: connect the CMMS integration, import two to five years of historical inspection records, run a parallel cycle against your current system so data discrepancies surface before cutover. Days 60-90: expand to API 510 vessels and API 653 tanks, stand up SSO, turn on Level III review workflow, and run the first Atlantis-of-record inspection campaign. No on-site consulting required."
    }
  ];

  return (
    <>
      <SEOHead
        title="NDT ERP Software for Refineries 2026 — API 510/570/653"
        description="Atlantis NDT ERP for refineries — API 510, 570, 653 + ASME V/VIII turnaround workflow. Maximo + SAP PM integration, 30/60/90-day remote deploy."
        canonical="https://atlantisndt.com/ndt-erp-for-refineries"
        breadcrumb={[
          { name: "Home", url: "https://atlantisndt.com/" },
          { name: "NDT ERP Solution", url: "https://atlantisndt.com/ndt-erp-solution" },
          { name: "Refineries", url: "https://atlantisndt.com/ndt-erp-for-refineries" },
        ]}
        faq={faq}
        software={{
          name: "Atlantis NDT ERP for Refineries",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Windows, macOS, iOS, Android",
          offers: { price: "0", priceCurrency: "USD", priceNote: "Custom pricing — request a quote" }
        }}
      />
      <Navigation />
      <PillarHubNav active="ndt-erp" />
      <main className="mx-auto max-w-5xl px-4 py-10 prose prose-slate">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          NDT ERP Software for Refineries — Customizable for Every Refining Unit
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          Atlantis NDT ERP is a remote-first inspection data platform built for the facilities that keep fuel moving
          through North America: hydroskimming and deep-conversion refineries, catalytic reforming complexes, FCC
          and coker units, aboveground tank farms, and the connected midstream terminals that feed them. The platform
          is configured out of the box around the codes that govern these assets — API 510 for pressure vessels, API
          570 for process piping, API 653 for aboveground storage tanks, ASME Section V for NDE methodology, ASME
          Section VIII Division 1 and 2 for boiler and pressure vessel construction, and ASME B31.3 for process piping
          design — so Level II technicians, Level III reviewers, reliability engineers, and turnaround planners all
          work off the same inspection record instead of the eight spreadsheets most refiners ship with today.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The inspection-data problem in refining</h2>
        <p className="mb-4">
          Every North American refiner runs a turnaround cycle on a 4-, 5-, or 6-year clock. Inside a 21-day T/A
          window, a single 150,000-barrel-per-day unit will generate 800 to 2,400 weld radiographs, 3,000 to 8,000
          thickness readings, 40 to 120 PAUT scan packages, and a vessel-count of internal inspection reports that
          lands somewhere north of 60 individual vessels touched. Those records have to survive three audiences: the
          reliability engineer who needs them for next year's RBI update, the jurisdictional inspector who can show
          up with a week's notice, and the unit manager who needs repair closeout signed off before startup.
        </p>
        <p className="mb-4">
          The failure mode is not lack of data. It is that the data lives in seven places — OmniScan laptops in a
          field office, a contractor's report folder on SharePoint, the prior year's T/A binder in the inspection
          department, Maximo PM records for the work packages, SAP QM for the material certs, a standalone UT
          thickness database from 2009, and the RBI platform's historical tab — and nothing reconciles them. When
          API RP 584 damage mechanism evidence needs to roll up into the next RBI cycle, half of it cannot be found.
        </p>
        <p className="mb-4">
          Refiners also sit on top of code drift. API 510 went through three revisions between 2014 and 2022, API
          570 revised in 2016 and again in 2023, API 653 revised in 2020. Each revision touched interval rules,
          repair rules, or inspector qualification. A paper-forms inspection program that was compliant in 2018
          is almost certainly out of compliance with at least one current edition, and nobody knows which records
          are affected without a full audit. Atlantis solves this by versioning the code itself inside the platform
          — every inspection record is pinned to the edition and addenda in force at the time of inspection.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How Atlantis NDT ERP is built for refineries</h2>
        <p className="mb-4">
          <strong>API-code-native data model.</strong> Pressure vessels, piping circuits, and aboveground storage
          tanks are distinct entity types with their own interval logic, their own CML structure, and their own
          report templates. A 48-inch FCC reactor is not a generic "asset" — it is an API 510 vessel with specific
          internal inspection scope for coking damage, erosion-corrosion at the slide-valve region, and creep at
          the riser termination. The data model knows that.
        </p>
        <p className="mb-4">
          <strong>Turnaround mode with Maximo synchronization.</strong> When a T/A window opens, Atlantis switches
          to turnaround mode for the affected unit. Work packages pulled from Maximo become inspection jobs. Each
          inspection record ties to the Maximo work order so that turnaround coordinators see inspection progress
          without leaving their planning tool. API 653 out-of-service calendar sync pushes the tank's next external
          inspection date directly into the Maximo PM record as a 90-day-ahead trigger.
        </p>
        <p className="mb-4">
          <strong>PAUT and TOFD weld record capture.</strong> Scan data from Olympus OmniScan MX2, OmniScan X3, Zetec
          Topaz 64, and M2M Gekko ingests in native format. Scan plans pre-populate from the weld procedure
          specification, and acceptance criteria follow ASME Section V Article 4 for UT and ASME Section VIII
          Division 1 UW-53 or UW-11 for vessel welds. The captured scan, the scan plan, the calibration block
          traceability, and the reporter's interpretation travel together as a single immutable record.
        </p>
        <p className="mb-4">
          <strong>Tank inspection workflow.</strong> For API 653, Atlantis handles the full external-to-internal
          lifecycle: 5-year external formal inspection, settlement monitoring with tilt survey points, routine
          monthly external checks, and out-of-service internal inspection with bottom scan, shell course UT, roof
          plate thickness grid, and critical-zone remaining thickness. Tank bottom MFL scans from Silverwing or
          Eddyfi ingest as plate-mapped heatmaps.
        </p>
        <p className="mb-4">
          <strong>Piping circuit management.</strong> Process piping follows API 570 circuit-based tracking, with
          CMLs tagged to damage mechanisms from API RP 571 (sulfidation, naphthenic acid corrosion, HTHA, creep,
          carburization, etc.). Long-term and short-term corrosion rates recalculate on every new reading, and the
          retest interval updates against the API 570 half-life rule automatically.
        </p>
        <p className="mb-4">
          <strong>Damage mechanism rollup for RBI.</strong> Findings tagged by API RP 571 damage mechanism export
          to Meridium, Bentley AssetWise APM, or PCMS for RBI model updates. This is the feedback loop most
          refineries run manually through spreadsheet email — Atlantis replaces the spreadsheet with a scheduled
          push so the RBI engineer is working off this month's evidence, not last year's.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Codes and frameworks we support out of the box</h2>
        <p className="mb-4">
          The Atlantis refinery configuration ships with pre-built templates, interval logic, and report formats for
          the full API and ASME stack that governs downstream hydrocarbon assets. When a new edition of a code
          drops, we publish the updated template to all tenants — no per-site customization work. Each refinery can
          still layer its own Owner/User written practice on top.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>API 510 — Pressure Vessel Inspection Code</li>
          <li>API 570 — Piping Inspection Code</li>
          <li>API 580 — Risk-Based Inspection (integration only)</li>
          <li>API 653 — Tank Inspection, Repair, Alteration, and Reconstruction</li>
          <li>API RP 571 — Damage Mechanisms Affecting Fixed Equipment</li>
          <li>API RP 572 — Inspection Practices for Pressure Vessels</li>
          <li>API RP 574 — Inspection Practices for Piping System Components</li>
          <li>API RP 577 — Welding Inspection and Metallurgy</li>
          <li>API RP 580 / 581 — RBI methodology reference</li>
          <li>API RP 584 — Integrity Operating Windows</li>
          <li>ASME Section V — Nondestructive Examination</li>
          <li>ASME Section VIII Division 1 and Division 2 — Pressure Vessels</li>
          <li>ASME B31.3 — Process Piping</li>
          <li>ASNT SNT-TC-1A — Personnel Qualification and Certification</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Integration with existing stacks</h2>
        <p className="mb-4">
          Atlantis does not replace your CMMS, RBI, or ERP. It bridges the inspection data layer between them. Most
          refiners already run a capital stack of three to five systems that each hold part of the asset truth:
          IBM Maximo or SAP PM for work management, Meridium APM or Bentley AssetWise APM for RBI and reliability,
          Oracle E-Business Suite or Infor EAM for financials and procurement, Hexagon SmartPlant or Bentley
          OpenPlant for engineering documents, and sometimes a legacy Avantis or Ivara installation that still
          holds ten years of inspection history the business cannot walk away from.
        </p>
        <p className="mb-4">
          The Maximo integration runs through MAS 8 REST APIs for current installations and through MIF for Maximo
          7.6 environments that have not yet migrated. SAP integrations use OData services or IDoc where the
          customer's SAP team prefers the classic integration pattern. Meridium integration runs through its data
          import framework with scheduled findings pushes. Hexagon SmartPlant document linking lets an inspector
          click from an Atlantis weld record back to the current-revision isometric in the engineering document
          system. We publish a documented REST API and webhook system so the things we do not integrate with
          natively can still be connected by your integration team in days, not months.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">30/60/90-day remote deployment plan</h2>
        <p className="mb-4">
          <strong>Days 0-30 — pilot scope.</strong> One unit, one code (most refiners start with API 570 piping on
          a single hydrotreater or crude unit), one inspection method (UT thickness with PAUT for critical welds).
          Equipment tree pulled from Maximo or SAP PM, CMLs seeded from the prior year's thickness database, damage
          mechanism tags set against API RP 571. Two data-mapping workshops, remote.
        </p>
        <p className="mb-4">
          <strong>Days 30-60 — CMMS connection and historical import.</strong> Maximo or SAP PM integration live,
          two to five years of historical inspection records imported and reconciled, parallel run of inspection
          cycle against legacy system. Any discrepancy between Atlantis and legacy flagged for Level III review
          before it becomes an audit finding. Typical import: 40,000 to 120,000 thickness readings and 600 to
          1,800 weld records per unit.
        </p>
        <p className="mb-4">
          <strong>Days 60-90 — full cutover and expansion.</strong> API 510 vessel scope and API 653 tank scope
          onboarded, SSO/SAML against corporate IdP, audit mode enabled, Level III remote review turnaround set
          at 48 hours standard / 12 hours T/A-critical. First Atlantis-of-record inspection campaign runs in
          production. No on-site consulting — the entire deployment is remote-led with configuration workshops
          over video and async data exchange.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What Atlantis's ASNT Level III review adds</h2>
        <p className="mb-4">
          Software without expert review is a shiny database. Every Atlantis refinery deployment includes remote
          ASNT Level III review coverage in UT, PAUT, TOFD, RT, MT, PT, and VT, with a 48-hour standard turnaround
          and a 12-hour turnaround-critical lane. The Level III reviews scan data and interpretation inside the
          same record the technician submitted it in, with redline annotations directly on the scan. This catches
          the mistakes paper-based review misses — probe wedge angle reported wrong, calibration block traceability
          broken, scan plan skipped a region the WPS requires, reporter called a geometric indication a planar
          flaw. The Level III layer is what turns a records system into a compliance system.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Customization — ERP that fits your refinery</h2>
        <p className="mb-4">
          Every refinery has its own Owner/User inspection written practice, its own unit nomenclature, its own
          criticality ranking, and its own report format the jurisdiction is used to seeing. Atlantis is configured,
          not coded, against those choices. Custom inspection types drop into the data model through a no-code
          schema editor. Custom report templates render through a template engine that accepts the refinery's
          letterhead, its signature block order, its required appendix structure. Custom workflow states — for
          example, a refiner that requires a separate reliability-engineer sign-off between Level II and Level III
          — add through the workflow designer.
        </p>
        <p className="mb-4">
          The platform is API-first. Every record that can be created in the UI can be created through the REST
          API, and every state change fires a webhook that downstream systems — your RBI platform, your corporate
          data lake, your asset-performance dashboard — can subscribe to. The integration pattern scales from a
          single unit with Maximo alone to a corporate rollout across eight refineries with shared master data
          governance.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Cities we serve this vertical from</h2>
        <p className="mb-4">
          Atlantis supports the refining corridor from the Gulf Coast up through the Midwest and Mid-Continent.
          Remote deployment means you are not limited by our city presence — but the following Tier-1 cities have
          the densest refining footprint and the most Atlantis customer references:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-houston">Houston, TX</Link> — HQ of the Gulf Coast refining cluster</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-baton-rouge">Baton Rouge, LA</Link> — ExxonMobil complex</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-port-arthur">Port Arthur, TX</Link> — Motiva, Valero, Total</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-beaumont">Beaumont, TX</Link> — ExxonMobil, Valero</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-lake-charles">Lake Charles, LA</Link> — Citgo, Phillips 66</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-new-orleans">New Orleans, LA</Link> — Norco and Chalmette</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-toledo">Toledo, OH</Link> — BP-Husky, PBF</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-billings">Billings, MT</Link> — Phillips 66, ExxonMobil, CHS</li>
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
          <h2 className="text-2xl font-semibold mb-3">Ready to see a demo for your refinery?</h2>
          <p className="mb-6 text-slate-700">
            Book a 30-minute walkthrough against your own API 510/570/653 scope. We will show Maximo integration,
            PAUT scan capture, and Level III remote review on a sample unit — or your unit, if you bring redacted
            data to the call.
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
