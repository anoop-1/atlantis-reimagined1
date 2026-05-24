import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PillarHubNav from "@/components/PillarHubNav";
import SEOHead from "@/components/SEOHead";

export default function NdtErpForShipyards() {
  const faq = [
    {
      q: "Does Atlantis NDT ERP support ABS, DNV, and Lloyd's Register survey scheduling?",
      a: "Yes. The class-society module carries ABS Rules for Building and Classing Steel Vessels, DNV Rules for Classification of Ships, and Lloyd's Register Rules and Regulations for the Classification of Ships as first-class frameworks. Each hull carries its class society, its survey cycle (annual, intermediate, special, docking), and the specific chapter and section that governs the NDE scope for the next survey. The system generates a 90-day look-ahead for each upcoming survey, coordinates with the surveyor's calendar where the class society allows it, and bundles the NDE evidence packet the attending surveyor expects to see on arrival."
    },
    {
      q: "How does NAVSEA T9074-AS-GIB-010/271 weld inspection integrate?",
      a: "NAVSEA T9074-AS-GIB-010/271 is the Navy's requirements document for fabrication welding and inspection of ships, boats, and craft, and it governs most US Navy and Military Sealift Command shipyard work. Atlantis ships with the T9074/271 weld joint inspection matrix built in: joint type, base material, welding process, examination method (VT, MT, PT, UT, RT), acceptance criteria, and reporting requirements all map to the T9074/271 structure. Findings roll up to the NAVSEA NDT record format directly, so Navy shipyards do not hand-transcribe from a commercial system into a T9074 format."
    },
    {
      q: "Can it handle weld traceability from plate mill to final launch?",
      a: "Yes. The weld record carries full material traceability: mill cert for the plate and the consumable (reference to the ASTM, AWS, or shipyard-specific material spec), WPS and PQR used, welder ID and current qualification range under AWS D1.1 or the shipyard's NAVSEA-approved WQTR, the NDE record, and the hull and block number. For Navy work under T9074/271, the traceability chain goes further — heat number, melt source, and any required additional testing such as Charpy impact or dynamic tear. This chain survives from subassembly through erection, launch, and lifetime service."
    },
    {
      q: "What about the hull-coating inspection and ballast-tank NDE workflow?",
      a: "The hull coating inspection module tracks coating thickness readings (dry film by magnetic gauge, ultrasonic on non-ferrous), holiday detection results, and adhesion pull-off test values against the coating specification. For ballast tanks under the IMO Performance Standard for Protective Coatings (PSPC), the survey evidence includes coating condition over the lifecycle. Atlantis stores the PSPC Coating Technical File references so that the class-society surveyor and any future ship-purchase due-diligence audit can reconstruct the tank's protective coating history from shipyard handover forward."
    },
    {
      q: "Does the system support ISO 17636 radiography and ISO 17640 ultrasonic acceptance?",
      a: "Yes. ISO 17636-1 for radiographic examination of welds and ISO 17640 for ultrasonic examination of welds are built into the acceptance-criteria library alongside ASME Section V, ASME Section IX, and AWS D1.1. Shipyards working to European or IACS unified requirements typically default to the ISO stack; Navy work defaults to the NAVSEA T9074/271 criteria; commercial US work often defaults to AWS D1.1. The code selection is per-weld, so a vessel being built to IACS rules with Navy subsystems can hold mixed acceptance criteria correctly across different welds on the same hull."
    },
    {
      q: "How does it integrate with shipyard ERPs like ShipConstructor or AVEVA Marine?",
      a: "ShipConstructor (now part of SSI) exports weld maps, block breakdowns, and material lists through its data exchange framework, and Atlantis ingests these to seed the weld record structure before fabrication starts. AVEVA Marine and AVEVA Enterprise Resource Management integrate through AVEVA's OData services. Siemens Teamcenter for marine integrates through TcXML. The pattern is the same across stacks: Atlantis does not replace the design or ERP system — it populates the weld register from the design model and pushes NDE findings back as nonconformance records the production planner can act on."
    },
    {
      q: "Can Atlantis track welder qualifications under AWS D1.1 and NAVSEA?",
      a: "Yes. Each welder record carries qualification range per AWS D1.1 clause 4 or NAVSEA-approved Welder Qualification Test Record (WQTR) under T9074/271, including process (SMAW, FCAW, GMAW, GTAW, SAW), material grouping, thickness range, position range, diameter range, and renewal/continuity requirements. Continuity under AWS D1.1 clause 4.2.3.4 requires the welder to have performed a qualifying weld within 6 months, and Atlantis tracks that automatically — if a welder goes cold, the system flags the disqualification before an assignment is made."
    },
    {
      q: "Is there a workflow for dry-dock and wet-berth survey planning?",
      a: "Yes. The survey-planning module distinguishes between out-of-water (dry-dock or graving-dock) scope — typically hull-plating UT, seachest and thruster NDE, rudder stock UT, propeller shaft UT — and in-water scope. Each survey instance carries the hull's current dock cycle (5-year special survey, intermediate survey, annual survey), the class-society scope letter, and the NDE work package that falls under it. For Navy vessels in USN drydock at Newport News or Norfolk Naval Shipyard, the scope follows the Navy Standard Item process rather than class-society rules, and Atlantis supports both in parallel."
    },
    {
      q: "What about cathodic protection survey records?",
      a: "Cathodic protection surveys — impressed current and sacrificial anode — capture as NDE-adjacent records with potential readings at reference electrodes, current draw by zone, and anode consumption measurements. These tie to the hull's ICCP system and feed into the in-service coating and corrosion management record. Class societies require CP records as part of the hull survey evidence, and Atlantis generates the class-expected report format for ABS, DNV, and LR directly from the captured readings rather than through a parallel CP-specific tool."
    },
    {
      q: "Can the platform handle classified work on Navy or Coast Guard hulls?",
      a: "Up to CUI (Controlled Unclassified Information) Atlantis is deployable in the standard platform. For SECRET-level work, we deploy a separate tenant on AWS GovCloud US with the customer's cleared admins, and the data never leaves the GovCloud boundary. We do not currently hold a DoD Impact Level 6 or higher authorization, so TOP SECRET/SCI work stays on the customer's existing classified systems. For the large majority of commercial hull work and a significant portion of unclassified Navy work at Huntington Ingalls, Austal USA, and General Dynamics yards, the standard platform is appropriate."
    }
  ];

  return (
    <>
      <SEOHead
        title="NDT ERP for Shipyards 2026 — ABS, DNV, LR, NAVSEA"
        description="NDT ERP for shipyards — class-society survey scheduling, NAVSEA T9074 workflow, ABS/DNV/LR integration. 30/60/90-day remote deploy."
        canonical="https://atlantisndt.com/ndt-erp-for-shipyards"
        breadcrumb={[
          { name: "Home", url: "https://atlantisndt.com/" },
          { name: "NDT ERP Solution", url: "https://atlantisndt.com/ndt-erp-solution" },
          { name: "Shipyards", url: "https://atlantisndt.com/ndt-erp-for-shipyards" },
        ]}
        faq={faq}
        software={{
          name: "Atlantis NDT ERP for Shipyards",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web, Windows, macOS, iOS, Android",
          offers: { price: "0", priceCurrency: "USD", priceNote: "Custom pricing — request a quote" }
        }}
      />
      <Navigation />
      <PillarHubNav active="ndt-erp" />
      <main className="mx-auto max-w-5xl px-4 py-10 prose prose-slate">
        <h1 className="text-4xl font-bold tracking-tight mb-6">
          NDT ERP Software for Shipyards — Customizable for Every Class-Society-Audited Yard
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          Atlantis NDT ERP is a remote-first inspection data platform built for commercial and Navy shipyards,
          naval-aviation depot maintenance facilities, offshore-vessel fabrication yards, and the third-party NDE
          providers that feed them. The platform is configured around the rule stack these yards operate under —
          ABS Rules for Building and Classing Steel Vessels, DNV (formerly DNV-GL) Rules for Classification of
          Ships, Lloyd's Register Rules and Regulations for the Classification of Ships, NAVSEA T9074-AS-GIB-010/271
          for Navy fabrication welding inspection, ISO 17636 for radiographic examination of welds, ISO 17640 for
          ultrasonic examination, and AWS D1.1 for structural welding — so weld maps, welder qualifications, NDE
          findings, and class-society survey evidence all live in the same record instead of seven separate
          systems.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">The inspection-data problem in shipyards</h2>
        <p className="mb-4">
          A mid-sized commercial shipyard laying down a 180,000-DWT bulk carrier will generate 18,000 to 35,000
          production welds across a 14 to 20 month construction window, of which roughly 8 percent require NDE —
          1,400 to 2,800 individual NDE records per hull. A Navy shipyard building a DDG-51 Arleigh Burke-class
          destroyer will generate considerably more, and each record has to satisfy NAVSEA T9074/271 traceability
          requirements that are stricter than any commercial rule. The class-society survey cycle means that at
          every intermediate and special survey — on a 30-year service life, that is six to eight formal survey
          events — the yard or the operator has to reproduce NDE evidence from construction and from each prior
          survey. Most yards cannot.
        </p>
        <p className="mb-4">
          The failure mode is not lack of NDE data during construction. Yards take the pictures, they just cannot
          find them 12 years later. Weld records live in the fabrication QA office's paper binders. Welder
          qualifications live in a separate HR-adjacent database. Class-society survey records live with the
          attending surveyor's own files. Coating Technical File under the IMO PSPC lives somewhere else again.
          When the owner does a hull due-diligence audit before a sale, or when a class society asks for
          construction-era evidence during a renewal survey, weeks of archaeology precede the answer.
        </p>
        <p className="mb-4">
          Navy work layers an additional problem. NAVSEA T9074/271 acceptance differs from commercial AWS D1.1
          acceptance for the same joint, and the traceability chain Navy expects — heat number, melt source,
          Charpy results for impact-critical welds — is deeper than most commercial yards collect natively. Yards
          that fabricate both Navy and commercial hulls in adjacent berths effectively run two documentation
          standards in parallel, and the boundary between them is where error concentrates. Atlantis resolves this
          by handling both acceptance regimes in the same weld register with the code selection at the weld level.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">How Atlantis NDT ERP is built for shipyards</h2>
        <p className="mb-4">
          <strong>Class-society survey scheduling.</strong> ABS, DNV, and LR survey cycles drive the calendar.
          Each hull carries its assigned class society, its current notation, its 5-year special survey date, and
          the specific rule chapters governing the next survey. A 90-day look-ahead bundles the NDE evidence the
          attending surveyor will request, reducing surveyor-on-site time from a typical 3-4 days to under 48
          hours.
        </p>
        <p className="mb-4">
          <strong>NAVSEA T9074-AS-GIB-010/271 weld register.</strong> For Navy work, the weld register runs under
          T9074/271 acceptance criteria with the full heat-number-to-launch traceability chain. WPS, PQR, welder
          WQTR, and NDE records all link. T9074/271 reports generate in the format the Navy DCMA inspector
          accepts, with no hand transcription from a commercial format.
        </p>
        <p className="mb-4">
          <strong>Material traceability from plate mill to launch.</strong> Plate mill certs (EN 10204 3.1 or 3.2),
          consumable certs, and heat numbers attach to every weld. For Navy work or high-spec commercial work
          requiring Charpy impact or dynamic tear data, the supplementary test results attach as well. The chain
          survives through subassembly, erection, launch, and lifetime in-service survey.
        </p>
        <p className="mb-4">
          <strong>Welder qualification tracking under AWS D1.1 and NAVSEA.</strong> Each welder record carries
          qualification range per AWS D1.1 clause 4 or the NAVSEA-approved WQTR, with process, material group,
          thickness, position, diameter, and continuity tracking. AWS D1.1 clause 4.2.3.4 continuity (6-month
          rule) enforces automatically.
        </p>
        <p className="mb-4">
          <strong>Hull coating and ballast-tank workflow.</strong> Coating thickness, holiday detection, and
          adhesion pull-off test values capture against the coating specification. For ballast tanks under the
          IMO PSPC, the Coating Technical File references store so that the class surveyor and any future
          purchase due-diligence audit can reconstruct the coating history from yard handover forward.
        </p>
        <p className="mb-4">
          <strong>Dry-dock and wet-berth survey planning.</strong> The survey planner distinguishes out-of-water
          scope (hull-plating UT, seachest and thruster NDE, rudder stock UT, propeller shaft UT) from in-water
          scope. For Navy vessels on Navy Standard Items, the alternate planning track runs in parallel.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Codes and frameworks we support out of the box</h2>
        <p className="mb-4">
          The Atlantis shipyard configuration ships with acceptance criteria, survey cycles, and report templates
          for the commercial and naval rule stacks side by side. When IACS issues a Unified Requirement update
          that flows through ABS, DNV, and LR simultaneously, or when NAVSEA reissues T9074/271, the updated
          template publishes to all tenants. Each yard still layers its own quality manual and WPS library on top.
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li>ABS Rules for Building and Classing Steel Vessels</li>
          <li>DNV Rules for Classification of Ships (formerly DNV-GL)</li>
          <li>Lloyd's Register Rules and Regulations for the Classification of Ships</li>
          <li>NAVSEA T9074-AS-GIB-010/271 — Navy fabrication welding inspection</li>
          <li>NAVSEA Standard Items — for Navy in-service and depot work</li>
          <li>ISO 17636-1 and 17636-2 — Radiographic examination of welds</li>
          <li>ISO 17640 — Ultrasonic examination of welds</li>
          <li>ISO 17643 — ECT examination of welds</li>
          <li>AWS D1.1 — Structural Welding Code, Steel</li>
          <li>AWS D3.6M — Underwater Welding Code (for in-water repair)</li>
          <li>ASME Section V and IX — NDE methodology and welder qualification (where applicable)</li>
          <li>IMO PSPC — Performance Standard for Protective Coatings</li>
          <li>IACS UR W27 — non-destructive examination unified requirement</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Integration with existing stacks</h2>
        <p className="mb-4">
          Shipyards typically run a design-side stack (ShipConstructor/SSI, AVEVA Marine, Siemens NX for Marine,
          or Dassault CATIA for some Navy work), a production-side ERP (SAP S/4HANA, IFS Applications, or a
          custom yard ERP), and a document-control system (AVEVA Enterprise Resource Management, Siemens
          Teamcenter, or SharePoint for smaller yards). Atlantis bridges the NDE data layer across them.
        </p>
        <p className="mb-4">
          ShipConstructor integration pulls weld maps, block breakdowns, and material lists through the SSI data
          exchange framework so the weld register seeds before fabrication. AVEVA Marine integrates through
          AVEVA's OData services; Teamcenter through TcXML; NX for Marine through Siemens Open API. For the ERP
          side, SAP S/4HANA integration uses OData, IFS uses its public API, and custom yard ERPs connect through
          our documented REST API and webhook system. The pattern is consistent: Atlantis is the inspection data
          layer; the existing systems stay as they are. For yards running legacy AVEVA PDMS or systems that
          predate modern APIs, we support flat-file exchange with audit reconciliation.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">30/60/90-day remote deployment plan</h2>
        <p className="mb-4">
          <strong>Days 0-30 — pilot scope.</strong> One berth or one block, one code stack (commercial with AWS
          D1.1 + ABS is a typical first pilot; Navy with NAVSEA T9074/271 is an alternate), one inspection method
          end-to-end (VT + MT + UT for structural welds). Weld register seeded from ShipConstructor or AVEVA
          Marine export, welder roster onboarded with current qualifications.
        </p>
        <p className="mb-4">
          <strong>Days 30-60 — design-system and ERP connection, historical import.</strong> Design-system
          integration goes live, production ERP integration live, two to three hulls of historical NDE records
          imported (typically 4,000 to 12,000 records per hull). Parallel run of inspection cycle against legacy
          system.
        </p>
        <p className="mb-4">
          <strong>Days 60-90 — full cutover, class-society survey mode, audit export.</strong> Class-society
          survey calendar onboarded for all in-yard hulls. Dry-dock scope and in-water scope differentiated.
          Coating Technical File module live for ballast tanks. SSO/SAML against the yard's corporate IdP.
          AWS GovCloud tenant live for classified Navy work if in scope. First Atlantis-of-record class-society
          survey runs in production.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">What Atlantis's ASNT Level III review adds</h2>
        <p className="mb-4">
          Software without expert review is a shiny database. Every Atlantis shipyard deployment includes remote
          ASNT Level III review coverage in UT, PAUT, TOFD, RT, MT, PT, VT, and ECT, with a 48-hour standard
          turnaround and a 24-hour launch-critical lane. The Level III reviews scan data and interpretation
          inside the same record the technician submitted it in, with redline annotations directly on the scan
          or radiograph. For class-society survey weeks the remote Level III is on-call daily to clear findings
          ahead of the surveyor's walk-down. This catches the mistakes paper-based review misses and it keeps
          the yard defensible at the next class or NAVSEA audit.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Customization — ERP that fits your yard</h2>
        <p className="mb-4">
          Every shipyard has its own quality manual, its own WPS library, its own welder qualification program,
          and its own class-society or NAVSEA audit history. Atlantis is configured against those choices rather
          than forcing a generic template. Custom weld types and custom hull-zone breakdowns drop into the data
          model through a no-code schema editor. Custom report templates render with the yard's letterhead, the
          class-society-accepted signature block order, and the T9074/271 metadata where Navy work is in scope.
          Custom workflow states — for example, a yard that requires an attending surveyor pre-clearance before
          weld release — add through the workflow designer.
        </p>
        <p className="mb-4">
          The platform is API-first. Every record that can be created in the UI can be created through the REST
          API, and every state change fires a webhook that downstream systems — your design tool, your yard ERP,
          your class-society portal if the class exposes one — can subscribe to. For yards running classified
          Navy work, the GovCloud tenant exposes the same API set inside its security boundary.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">Cities we serve this vertical from</h2>
        <p className="mb-4">
          Atlantis supports shipyards across the US coastal and Great Lakes fabrication footprint. Remote
          deployment means your location is not limited by our city presence — but the following Tier-1 cities
          have the densest shipyard footprint and the most Atlantis customer references:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-1">
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-newport-news">Newport News, VA</Link> — Huntington Ingalls Newport News Shipbuilding</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-norfolk">Norfolk, VA</Link> — Norfolk Naval Shipyard</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-mobile">Mobile, AL</Link> — Austal USA</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-pascagoula">Pascagoula, MS</Link> — Ingalls Shipbuilding</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-seattle">Seattle, WA</Link> — Vigor Industrial / commercial yards</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-san-diego">San Diego, CA</Link> — General Dynamics NASSCO</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-groton">Groton, CT</Link> — General Dynamics Electric Boat</li>
          <li><Link className="text-blue-600 hover:underline" to="/ndt-erp-philadelphia">Philadelphia, PA</Link> — Philly Shipyard</li>
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
          <h2 className="text-2xl font-semibold mb-3">Ready to see a demo for your shipyard?</h2>
          <p className="mb-6 text-slate-700">
            Book a 30-minute walkthrough against your own class-society scope, your WPS library, and your next
            upcoming survey. We will show weld register import from ShipConstructor or AVEVA Marine and Level III
            remote review on a sample hull.
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
