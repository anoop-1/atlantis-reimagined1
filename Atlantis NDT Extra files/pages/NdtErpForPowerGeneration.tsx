import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PillarHubNav from "@/components/PillarHubNav";
import SEOHead from "@/components/SEOHead";

export default function NdtErpForPowerGeneration() {
  const faq = [
    {
      q: "Does Atlantis NDT ERP support ASME Section XI pre-service and in-service inspection records?",
      a: "Yes. ASME Section XI is the backbone of the nuclear power workflow in the platform. Pre-service inspection (PSI) under IWA-2000 captures the baseline for Class 1, Class 2, and Class 3 components before the plant goes critical, and in-service inspection (ISI) under the 10-year interval structure captures the examinations across the subsequent operating period. The data model holds the ISI program, the inspection intervals, the examination categories (B-A through B-Q for Class 1, C-A through C-H for Class 2), the selected components, the examination method assigned, and the acceptance criteria by component — all the elements an ASME XI audit expects to see reconcile."
    },
    {
      q: "How does the platform handle NERC CIP data classification and handling?",
      a: "NERC CIP-011 Information Protection governs the handling of BES Cyber System Information, and Atlantis treats any record flagged as BCSI with access restricted by NERC CIP-004 personnel risk assessment clearance, audit logging per CIP-007 and CIP-010, and data-at-rest encryption that satisfies the current CIP-011 interpretation. The platform tenant for a NERC-registered Generator Operator can be deployed in an isolated AWS region with customer-managed KMS keys and a documented control mapping to CIP-002 through CIP-014. For sites with Low-Impact BES Cyber Systems the lighter CIP-003 Attachment 1 controls apply; for Medium- and High-Impact sites the full control set does."
    },
    {
      q: "Can it integrate with Meridium APM for the nuclear reliability workflow?",
      a: "Yes. Meridium (now GE Vernova APM) is the dominant reliability platform in the US nuclear fleet and Atlantis is designed to feed its inspection evidence rather than replace it. Integration runs through the APM Connect framework and pushes findings keyed to the APM functional location hierarchy. Findings that fall under an active degradation mechanism in APM get tagged so the reliability engineer sees the new evidence on the next risk review. This is the same pattern Atlantis uses with Meridium in oil-and-gas — the only difference in the nuclear deployment is the stricter access control mapping and the Section XI category metadata."
    },
    {
      q: "Does it support ASME B31.1 power piping for fossil and combined-cycle plants?",
      a: "Yes. ASME B31.1 Power Piping governs the main steam, reheat, feedwater, and condensate piping in fossil, combined-cycle, and the non-safety-related piping in nuclear plants. Atlantis holds B31.1 circuits with their design conditions, service temperature, creep-range flag (over 800F for steel alloys), and CML structure. For high-temperature creep-range piping the workflow runs against API RP 579-1/ASME FFS-1 remaining-life assessments with TOA (time of accumulated operation) and creep damage tracking, which matters for the aging coal and HRSG fleet where outlet headers and steam leads are the dominant life-limiting components."
    },
    {
      q: "How does outage planning work for nuclear refueling and fossil overhauls?",
      a: "Outage mode activates for a unit when a refueling outage (typically 18- or 24-month fuel cycle for nuclear) or a major overhaul (typically 4-year cycle for combustion turbines, longer for steam turbines) opens. The ASME XI selected-component list for that outage's ISI window pre-populates, inspection work packages generate, and each record ties back to the outage work control package in Maximo, eAM, or the site's work management system. For combustion turbine hot-section overhauls under OEM service bulletins (GE, Siemens Energy, Mitsubishi Power), the borescope and hot-gas-path NDE scope follows the OEM SB rather than ASME code, and Atlantis handles both schemes."
    },
    {
      q: "What about 10 CFR 50 Appendix B and NEI 03-08?",
      a: "10 CFR 50 Appendix B is the NRC quality assurance requirement for nuclear safety-related work, and NEI 03-08 is the industry guideline for materials reliability programs. The Atlantis nuclear configuration includes the Appendix B document-control and record-retention settings (records retained for the life of the plant, controlled document distribution, traceability of non-conforming items to CAP closure) and the NEI 03-08 materials-reliability category structure (mandatory, needed, and good-practice implementation) so that the site's inspection evidence rolls up into the fleet-level materials reliability reporting the utility's corporate office expects."
    },
    {
      q: "Does it handle NDE under ASME Section V for all methods?",
      a: "Yes. ASME Section V is the NDE methodology backbone across all ASME-governed work — Section XI for nuclear, Section VIII for boilers and pressure vessels, B31.1 for power piping. The Section V article references (Article 2 for RT, Article 4 for UT including the 2013+ revisions covering phased-array, Article 6 for LPT, Article 7 for MT, Article 8 for ET, Article 9 for VT, Article 23 for UT of nozzles) all map to the method selection so that the acceptance criteria and procedural requirements apply correctly from the moment the inspection is assigned."
    },
    {
      q: "Can the platform handle both nuclear and fossil sites in the same utility tenant?",
      a: "Yes. A utility running a mixed fleet — say, a PWR nuclear unit, a combined-cycle HRSG site, and a coal unit with SCR — can operate all three under a single tenant with site-level configuration. The nuclear site runs ASME Section XI and 10 CFR 50 Appendix B under NERC CIP-protected access; the combined-cycle site runs ASME B31.1 with OEM service-bulletin overlays; the coal site runs ASME B31.1 with creep-life assessment. Master data for technicians, procedures, and Level III reviewers shares across sites where personnel certification allows, and isolates where NRC or NERC rules require."
    },
    {
      q: "What NDE methods are covered for combustion turbine hot-section and generator rotor?",
      a: "Combustion turbine hot-section NDE under OEM service bulletins typically includes borescope inspection, fluorescent penetrant, eddy current array on first-stage buckets, and dimensional inspection per the SB. Generator rotor inspection under EPRI guidance covers retaining-ring ET, rotor body UT, and end-winding visual inspection. The Atlantis power-gen configuration includes these workflows as OEM-SB-driven templates rather than as ASME-code-driven templates, because that is how the work is governed in practice. For steam turbine in-service inspection the templates follow EPRI and OEM overhaul guidance for disc-rim ET, blade-root PT, and rotor bore UT."
    },
    {
      q: "Is there a workflow for ASME Section III — new nuclear construction?",
      a: "Yes, though the customer base for ASME Section III new-build work is small — Vogtle 3 and 4, SMR deployments under way, a handful of DOE projects. The Section III workflow covers Class 1, Class 2, and Class 3 component construction under the NCA general requirements and the NB, NC, and ND subsections. Material certs, welder qualification under Section IX, NDE under Section V, and Authorized Nuclear Inspector hold-point sign-offs all link in the fabrication sequence. On handover from construction to operations, the Section III construction records convert to the Section XI pre-service inspection baseline rather than being re-collected."
    }
  ];

  return (
    <>
      <SEOHead
        title="NDT ERP for Power Gen 2026 — ASME XI, NERC CIP, Section V"
        description="NDT ERP for power generation — ASME Section XI nuclear workflow, NERC CIP data, outage planning. 30/60/90-day remote deploy."
        canonical="https://atlantisndt.com/ndt-erp-for-power-generation"
        breadcrumb={[
          { name: "Home", url: "https://atlantisndt.com/" },
          { name: "NDT ERP Solution", url: "https://atlantisndt.com/ndt-erp-solution" },
          { name: "Power Generation", url: "https://atlantisndt.com/ndt-erp-for-power-generation" },
        ]}
        faq={faq}
        software={{
          name: "Atlantis NDT ERP for Power Generation",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Windows, macOS, iOS, Android",
          offers: { price: "0", priceCurrency: "USD", priceNote: "Custom pricing — request a quote" }
        }}
      />
      <Navigation />
      <PillarHubNav active="ndt-erp" />
      <main className="mx-auto max-w-5xl px-4 py-10 prose prose-slate">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          NDT ERP Software for Power Generation — Customizable for Every NERC-Regulated Generating Station
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          Atlantis NDT ERP is a remote-first inspection data platform built for the generating stations that sit
          under NERC registration and the codes that govern them: operating nuclear PWR and BWR units, combined-cycle
          HRSG and frame-turbine facilities, aging coal-fired units under extended service, hydroelectric generating
          stations, and the grid-critical transmission substations whose protective relays and bus assets increasingly
          land under NDT scope. The platform is configured out of the box around ASME Section XI for nuclear
          in-service inspection, ASME Section V for NDE methodology, ASME B31.1 for power piping, 10 CFR 50 Appendix
          B for nuclear QA, NEI 03-08 for materials reliability, and NERC CIP-002 through CIP-014 for cyber and
          information protection — so inspection records, outage work packages, and reliability evidence all live
          in one place instead of across eight disconnected systems.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The inspection-data problem in power generation</h2>
        <p className="mb-4">
          A single US PWR unit running a 24-month fuel cycle generates 400 to 900 ASME Section XI inspection
          records per refueling outage and roughly another 1,200 to 2,000 supporting NDE records across secondary
          side and balance of plant in the same outage window. A 2,200 MW HRSG combined-cycle site running a
          major combustion turbine inspection (MI) on a 24,000-hour cycle generates a further 300 to 600 records
          per unit per outage, driven by OEM service bulletin scope. Coal-fired units under extended service
          generate the deepest records of all because creep-life assessment of high-temperature headers, steam
          leads, and desuperheater piping requires continuous thickness and replication tracking.
        </p>
        <p className="mb-4">
          The data-management problem is that none of this reconciles cleanly. Nuclear Section XI records have
          to satisfy 10 CFR 50 Appendix B life-of-plant retention under NRC access. NEI 03-08 wants the materials
          reliability evidence aggregated at fleet level. NERC CIP-011 wants BCSI-tagged records handled under
          a separate access control regime from non-CIP records on the same site. Meridium or a similar APM
          platform wants the findings as degradation-mechanism evidence for the next risk review. The outage
          work control package in Maximo, eAM, or Primavera wants inspection task closure as a predecessor to
          unit startup. Each of these audiences asks for a different view of the same evidence.
        </p>
        <p className="mb-4">
          Code drift compounds the issue. ASME Section XI has been issued every two years since the 1960s; NRC
          endorsement via 10 CFR 50.55a lags and pins plants to specific editions; NEI 03-08 categories shift
          as industry operating experience accumulates; NERC CIP version rollups (CIP v5, v6, v7, and beyond)
          change information protection requirements that directly affect how inspection records are stored and
          transmitted. A records system built around the 2013 edition of Section XI is almost certainly
          non-compliant with something the current licensing basis demands. Atlantis addresses this by versioning
          the code inside the platform — every inspection record pins to the edition, addenda, and 10 CFR 50.55a
          endorsement condition in force at the time of inspection.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How Atlantis NDT ERP is built for power generation</h2>
        <p className="mb-4">
          <strong>ASME Section XI ISI program management.</strong> The nuclear ISI program is a first-class object
          in the data model. 10-year interval structure, 40-month period structure, selected component list by
          examination category, method assignment, and acceptance criteria all track per-unit. Pre-service
          inspection under IWA-2000 and in-service examinations under IWB, IWC, IWD, IWE, and IWF all route
          correctly. Risk-informed ISI programs under ASME Code Case N-578 or N-716 supported where licensees
          operate under them.
        </p>
        <p className="mb-4">
          <strong>Outage mode with work control integration.</strong> When a refueling outage or major overhaul
          opens, the Section XI selected-component list or the OEM service bulletin scope pre-populates the
          inspection work package. Each Atlantis record ties back to the outage work control package in Maximo,
          Oracle eAM, SAP PM, or the site's work management system so that outage coordinators see inspection
          task closure live.
        </p>
        <p className="mb-4">
          <strong>NERC CIP-compliant data handling.</strong> Records flagged as BCSI under CIP-011 route through
          a separate access-control tier with CIP-004 personnel risk assessment clearance gating. Audit logging
          satisfies CIP-007 and CIP-010. For Medium- and High-Impact BES Cyber Systems a dedicated tenant in
          an isolated AWS region with customer-managed KMS keys is available.
        </p>
        <p className="mb-4">
          <strong>Creep-life assessment for high-temperature piping.</strong> For aging fossil units and
          combined-cycle HRSGs the ASME B31.1 creep-range workflow tracks thickness, replication findings, hardness
          traverses, and time-of-accumulated-operation against API RP 579-1/ASME FFS-1 remaining-life models. Header
          outlet and steam lead assessments run on the cycle the site's reliability engineer defines.
        </p>
        <p className="mb-4">
          <strong>Combustion turbine and generator workflow.</strong> OEM service bulletins from GE Vernova,
          Siemens Energy, and Mitsubishi Power drive hot-section NDE rather than ASME code. Borescope, fluorescent
          PT, EC array, and dimensional records follow the SB template. Generator rotor ET (retaining ring), rotor
          body UT, and end-winding VT follow EPRI guidance.
        </p>
        <p className="mb-4">
          <strong>Reliability-platform feedback.</strong> Findings push to Meridium (GE Vernova APM), Bentley
          AssetWise APM, or ABB Ability as degradation-mechanism evidence. The feedback loop closes so that the
          reliability engineer is working off this outage's evidence, not last outage's.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Codes and frameworks we support out of the box</h2>
        <p className="mb-4">
          The Atlantis power-gen configuration ships with pre-built templates, interval logic, and report formats
          for the ASME, NRC, and NERC stacks that govern US generating stations. When ASME issues a new edition
          of Section XI, or when NERC publishes a new CIP version with an effective date, the updated template
          publishes to all tenants and records are migrated with audit trail. Each site can still layer its own
          quality manual and written practice on top.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>ASME Section XI — Rules for Inservice Inspection of Nuclear Power Plant Components</li>
          <li>ASME Section V — Nondestructive Examination</li>
          <li>ASME Section III — Nuclear new construction (NCA, NB, NC, ND, NF)</li>
          <li>ASME Section VIII Division 1 and 2 — Pressure Vessels</li>
          <li>ASME Section IX — Welding and Brazing Qualifications</li>
          <li>ASME B31.1 — Power Piping</li>
          <li>10 CFR 50 Appendix B — Nuclear QA criteria</li>
          <li>10 CFR 50.55a — NRC endorsement of ASME codes</li>
          <li>NEI 03-08 — Materials Reliability Program</li>
          <li>NERC CIP-002 through CIP-014 — Cyber and information protection</li>
          <li>API RP 579-1 / ASME FFS-1 — Fitness-for-Service</li>
          <li>EPRI guidance for steam turbine, generator rotor, and BOP assets</li>
          <li>ASNT SNT-TC-1A and CP-189 — Personnel certification</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Integration with existing stacks</h2>
        <p className="mb-4">
          Power generation sites run a deeper and more fragmented capital stack than most other verticals.
          Nuclear sites typically run Meridium (GE Vernova APM) or an equivalent reliability platform, Maximo or
          SAP PM for work management, Asset Suite (from Bentley/Hitachi) for the configuration management and
          plant records side, Primavera P6 for outage scheduling, and a site-specific ePMS. Fossil and
          combined-cycle sites typically run Maximo or Oracle eAM, Bentley AssetWise APM or Hexagon EAM, and
          site-level historians (OSIsoft PI, GE Historian). Atlantis bridges the NDE data layer without replacing
          any of them.
        </p>
        <p className="mb-4">
          Maximo integration runs through MAS 8 REST APIs or the MIF for 7.6 instances. SAP PM uses OData or IDoc.
          Meridium runs through APM Connect. Asset Suite integrates through its REST API or flat-file exchange
          where the customer prefers it. For primary historian connection — where thickness readings from
          continuous monitoring systems feed corrosion-rate calculations — we connect to OSIsoft PI via the
          PI Web API. For the outage Primavera schedule side, work-package milestone synchronization runs through
          Primavera's P6 API. The platform exposes a documented REST API and webhook system for anything not
          integrated natively.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">30/60/90-day remote deployment plan</h2>
        <p className="mb-4">
          <strong>Days 0-30 — pilot scope.</strong> For a nuclear site: one non-safety system (usually condensate
          or feedwater piping under ASME B31.1) and one ASME Section V method (UT thickness), to let the QA and
          records teams validate the workflow outside the CIP boundary before flagged records enter the platform.
          For a fossil or combined-cycle site: one HRSG or one turbine overhaul scope, one method, one code.
        </p>
        <p className="mb-4">
          <strong>Days 30-60 — work-management connection and historical import.</strong> Maximo, SAP PM, or Oracle
          eAM integration goes live. Two to three outage cycles of historical inspection records import (typically
          1,500 to 4,000 records per unit). For nuclear: Meridium or APM Connect integration live, Asset Suite
          reference established if used on site.
        </p>
        <p className="mb-4">
          <strong>Days 60-90 — full cutover, outage mode, and CIP boundary where in scope.</strong> ASME Section
          XI ISI program loaded for the site's current 10-year interval. Outage mode tested against the upcoming
          refueling outage scope or CT MI scope. SSO/SAML against corporate IdP. For nuclear with NERC CIP scope:
          BCSI tagging live, dedicated tenant in isolated AWS region stood up, CIP-004 access control validated.
          First Atlantis-of-record outage runs in production.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What Atlantis's ASNT Level III review adds</h2>
        <p className="mb-4">
          Software without expert review is a shiny database. Every Atlantis power-generation deployment includes
          remote ASNT and CP-189 Level III review coverage in UT, PAUT, TOFD, RT, MT, PT, VT, and ET, with a
          48-hour standard turnaround and a 12-hour outage-critical lane. During refueling outages and major CT
          overhauls the Level III is on-call daily to clear findings ahead of the critical path. For ASME Section
          XI flaw evaluation under IWB-3500 and IWC-3500, the Level III's acceptance or rejection drives directly
          into the record rather than through a separate memo trail. This catches the mistakes paper-based review
          misses and it keeps the site defensible at the next NRC or NERC audit.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Customization — ERP that fits your station</h2>
        <p className="mb-4">
          Every generating station has its own licensing basis, its own procedures, its own Level III authority
          structure, and its own history of regulatory audits. Atlantis is configured against those choices
          rather than forcing a generic template. Custom examination categories for ASME Section XI risk-informed
          programs, custom OEM service bulletin templates for CT and steam turbine work, and custom B31.1 circuit
          breakdowns all drop into the data model through a no-code schema editor. Custom report templates render
          with the site's letterhead, the NRC-accepted signature block order, and the 10 CFR 50.55a endorsement
          metadata where it applies.
        </p>
        <p className="mb-4">
          The platform is API-first. Every record that can be created in the UI can be created through the REST
          API, and every state change fires a webhook that downstream systems — APM, work management, site
          historian, corporate reliability data lake — can subscribe to. For NERC CIP-scoped deployments, the
          same API set is available inside the CIP boundary with access gated by CIP-004 clearance rather than
          general platform role.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Cities we serve this vertical from</h2>
        <p className="mb-4">
          Atlantis supports generating stations across the major US power footprints — Southeast nuclear, Mid-Atlantic
          fleet, Midwest coal and combined-cycle, Gulf Coast combined-cycle, and the expanding SMR pilot sites.
          Remote deployment means your site is not limited by our city presence — but the following Tier-1 cities
          have the densest power-gen footprint and the most Atlantis customer references:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-atlanta">Atlanta, GA</Link> — Vogtle 3/4 and Southeast nuclear fleet corridor</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-baltimore">Baltimore, MD</Link> — Calvert Cliffs, Mid-Atlantic fleet</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-pittsburgh">Pittsburgh, PA</Link> — Westinghouse Electric Company HQ and Beaver Valley</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-charlotte">Charlotte, NC</Link> — Duke Energy fleet corporate</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-chicago">Chicago, IL</Link> — Exelon / Constellation fleet corridor</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-birmingham">Birmingham, AL</Link> — Southern Company fossil and nuclear</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-phoenix">Phoenix, AZ</Link> — Palo Verde three-unit site</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-richmond">Richmond, VA</Link> — Dominion Energy fleet corporate</li>
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
          <h2 className="text-2xl font-semibold mb-3">Ready to see a demo for your station?</h2>
          <p className="mb-6 text-slate-700">
            Book a 30-minute walkthrough against your own ASME Section XI program, your work management system,
            and your NERC CIP boundary if in scope. We will show outage mode, Section V capture, and Level III
            remote review on a sample unit.
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
