import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Printer, FileText, Download, CheckCircle } from "lucide-react";

export default function NDTSafetyChecklist() {
  useEffect(() => {
    const style = document.createElement('style');
    style.setAttribute('data-print', 'true');
    style.textContent = `
      @media print {
        nav, footer, .no-print, .breadcrumbs { display: none !important; }
        body { font-size: 11pt; line-height: 1.4; color: #000; }
        h1 { font-size: 18pt; }
        h2 { font-size: 14pt; page-break-after: avoid; }
        table { font-size: 9pt; page-break-inside: avoid; }
        .print-header { display: block !important; }
      }
    `;
    document.head.appendChild(style);
    return () => { document.head.removeChild(style); };
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "NDT Safety Checklist | Radiation, Electrical & Worksite Safety",
    "description": "Comprehensive safety checklist for NDT operations covering general worksite safety, radiation safety for RT, electrical safety, chemical safety for PT/MT, confined space entry, and working at heights.",
    "author": { "@type": "Organization", "name": "Atlantis NDT" },
    "publisher": { "@type": "Organization", "name": "Atlantis NDT", "logo": { "@type": "ImageObject", "url": "https://atlantisndt.com/og-image.jpg" } },
    "datePublished": "2026-02-01",
    "dateModified": "2026-02-28"
  };

  const sections = [
    {
      title: "1. General Worksite Safety",
      color: "text-[#004aad]",
      description: "Applicable to all NDT methods and all job sites. Complete these items before starting any examination work.",
      items: [
        { item: "PPE verified and worn", detail: "Hard hat, safety glasses, steel-toe boots, hearing protection (where required), fire-resistant clothing (where required). Verify PPE is in good condition and appropriate for the specific hazards present." },
        { item: "Work permits obtained", detail: "Ensure all required permits are in place before starting work: general work permit, hot work permit (if grinding/welding nearby), confined space permit, excavation permit, radiation work permit. Verify permits are current and signed." },
        { item: "Job hazard assessment completed", detail: "Conduct or review the Job Safety Analysis (JSA) or Job Hazard Analysis (JHA) for the specific work scope. Identify all hazards: fall, electrical, chemical, radiation, pinch points, overhead loads, energized equipment." },
        { item: "Emergency procedures reviewed", detail: "Know the location of emergency assembly points, first aid stations, fire extinguishers, eye wash stations, and emergency showers. Confirm emergency contact numbers and radio channels." },
        { item: "Buddy system established", detail: "For high-risk work (confined space, radiation, remote locations), ensure a second person is designated as a standby/safety watch. Confirm communication method between workers." },
        { item: "Communication equipment tested", detail: "Verify radios, phones, or other communication devices are functional and charged. Confirm communication with control room, safety watch, and emergency response team." },
        { item: "Weather conditions assessed", detail: "Check wind speed (affects RT boundary, elevated work), lightning risk, rain/ice (affects electrical safety, surface conditions), extreme temperatures (affects equipment performance, heat stress)." },
        { item: "Adequate lighting verified", detail: "Confirm lighting levels meet requirements: general work areas minimum 50 lux, VT examination minimum 500 lux (50 fc), fluorescent inspection requires UV-A light level verification and white light below 2 fc." },
      ]
    },
    {
      title: "2. Radiation Safety (RT-Specific)",
      color: "text-red-700",
      description: "Required for all radiographic testing operations. These items are in addition to general safety requirements.",
      items: [
        { item: "Pre-exposure radiation survey completed", detail: "Survey the source storage container (camera/projector) with a calibrated survey meter before transporting to the work site. Verify background radiation levels. Check for any nearby radiation sources." },
        { item: "Controlled area boundary established", detail: "Calculate and establish the restricted area boundary based on source activity, exposure time, and scatter radiation. Use the inverse square law. Boundary must be at 2 mR/hr or as specified by regulations." },
        { item: "Radiation warning signs and barriers posted", detail: "Post \"CAUTION: RADIATION AREA\" and \"DANGER: HIGH RADIATION AREA\" signs at appropriate locations. Use rope barriers, barricades, and flashing lights. Signs must be visible from all approach directions." },
        { item: "Dosimeter and survey meter functional", detail: "Verify alarming dosimeter (APD/EPD) is functional, charged, and reset. Verify survey meter is calibrated (within 12 months) and battery is adequate. Perform check on known source to confirm meter is responding." },
        { item: "Emergency source retrieval procedure reviewed", detail: "Review the emergency procedure for source retraction failure. Ensure emergency retrieval tools are available and accessible. Know the location of emergency equipment (long-handled tools, emergency container)." },
        { item: "Radiation Safety Officer (RSO) notified", detail: "Notify the site RSO and/or client radiation safety personnel of planned radiographic operations. Confirm communication method with RSO during exposure." },
        { item: "TLD/OSL badges current and worn", detail: "Verify personnel thermoluminescent dosimeter (TLD) or optically stimulated luminescence (OSL) badge is current (within monitoring period). Badge must be worn at collar level, outside PPE." },
        { item: "Exposure records up to date", detail: "Confirm cumulative dose records are current. Verify personnel have not exceeded dose limits: occupational limit 5 rem/year (50 mSv/year) total effective dose equivalent; ALARA target typically 10% of limit." },
      ]
    },
    {
      title: "3. Electrical Safety (ET/UT/General)",
      color: "text-yellow-700",
      description: "Applicable to all methods using electrically powered equipment, with special emphasis on eddy current and ultrasonic testing.",
      items: [
        { item: "Equipment properly grounded", detail: "Verify all instruments, power supplies, and metallic equipment are properly grounded. Use three-prong plugs or GFCI (Ground Fault Circuit Interrupter) protection. Check ground continuity on extension cords." },
        { item: "Cable and cord condition inspected", detail: "Inspect all power cables, instrument cables, and probe leads for damage: cracked insulation, exposed conductors, loose connections, or strain relief damage. Replace any damaged cables before use." },
        { item: "Power source safety verified", detail: "Confirm voltage, frequency, and amperage of available power match equipment requirements. Use voltage regulators or UPS where power quality is poor. Verify circuit breaker capacity is adequate." },
        { item: "Wet condition protocols in place", detail: "When working in rain, near water, or on wet surfaces: use GFCI protection, elevate equipment off wet surfaces, wear insulated gloves, use extra caution with prod-type MT equipment. Consider postponing work if conditions are hazardous." },
        { item: "Emergency disconnect location known", detail: "Identify the nearest electrical disconnect or circuit breaker for the power source being used. Ensure it is accessible and clearly labeled. For generator power, know the emergency stop procedure." },
      ]
    },
    {
      title: "4. Chemical Safety (PT/MT-Specific)",
      color: "text-orange-700",
      description: "Required when using penetrant testing or magnetic particle testing consumables containing solvents, developers, or aerosol propellants.",
      items: [
        { item: "Safety Data Sheets (SDS) reviewed and accessible", detail: "Review SDS for all penetrant, developer, cleaner, emulsifier, and magnetic particle consumables. SDS must be readily available at the work location. Note first aid measures, exposure limits, and fire hazards for each product." },
        { item: "Ventilation requirements met", detail: "Ensure adequate ventilation when using solvent-based penetrants, cleaners, or aerosol developers. In enclosed areas, measure airborne solvent concentrations. Use forced ventilation or supplied air if concentrations exceed PEL/TLV." },
        { item: "Skin and eye protection worn", detail: "Wear chemical-resistant gloves (nitrile or neoprene) when handling penetrants, solvents, and developers. Wear splash-proof safety glasses or goggles. Use face shield when spraying overhead." },
        { item: "Chemical storage and handling proper", detail: "Store flammable consumables in approved flammable storage cabinets. Keep ignition sources away from solvent-based materials. Do not store penetrant materials in direct sunlight or above recommended temperature. Keep containers closed when not in use." },
        { item: "Disposal procedures followed", detail: "Dispose of used penetrant, developer residue, cleaning rags, and other contaminated materials per local environmental regulations. Do not pour solvents down drains. Use approved waste containers with proper labels." },
      ]
    },
    {
      title: "5. Confined Space Entry",
      color: "text-purple-700",
      description: "Required when performing any NDT work inside vessels, tanks, columns, heat exchangers, or other permit-required confined spaces.",
      items: [
        { item: "Confined space entry permit obtained", detail: "Obtain a valid confined space entry permit signed by the entry supervisor. Verify the permit covers the specific space, time period, and work to be performed. Review all permit conditions and restrictions." },
        { item: "Atmosphere testing completed and continuous", detail: "Test atmosphere for oxygen (19.5-23.5%), LEL (below 10% of LEL), and toxic gases (H2S, CO, benzene, etc.) before entry. Continue continuous atmospheric monitoring throughout the entry. Calibrate gas detectors before use." },
        { item: "Ventilation adequate and continuous", detail: "Establish and maintain forced ventilation (mechanical blowers) before and during entry. Position air supply to provide fresh air to the breathing zone. Do not use pure oxygen for ventilation." },
        { item: "Standby attendant (hole watch) in place", detail: "Designate a trained attendant at the entry point for the entire duration of the entry. The attendant must maintain continuous communication with entrants, monitor conditions, and be prepared to summon rescue. The attendant must never enter the space." },
        { item: "Rescue equipment available and accessible", detail: "Full-body harness and retrieval line connected for each entrant (where feasible). Self-contained breathing apparatus (SCBA) available for rescue team. Rescue tripod and winch in place at the entry point for vertical entries." },
        { item: "Communication plan established", detail: "Confirm two-way communication between entrants and the attendant: voice, radio, or signal line. Test communication devices before entry. Establish emergency signals and evacuation procedures." },
      ]
    },
    {
      title: "6. Working at Heights",
      color: "text-sky-700",
      description: "Required when performing NDT work on scaffolding, elevated platforms, ladders, or at heights above 6 feet (1.8 meters).",
      items: [
        { item: "Fall protection in place", detail: "When working above 6 ft (1.8 m): use full-body harness with shock-absorbing lanyard or self-retracting lifeline (SRL) connected to an adequate anchor point. Verify anchor point can support 5,000 lbs or is designed per OSHA 1926.502." },
        { item: "Scaffold inspection current", detail: "Verify scaffold has been inspected by a competent person within the last 7 days (or per site requirements) and has a current green tag. Check planking, guardrails, toe boards, and access ladder/stair. Do not use scaffolds with red or yellow tags." },
        { item: "Ladder safety verified", detail: "Inspect ladder before use: no bent rungs, cracked rails, or missing feet. Extend 3 feet above landing. Maintain 3-point contact at all times. Secure ladder at top or have someone hold the base. Do not carry heavy equipment up ladders -- use a tag line." },
        { item: "Tools and equipment tethered", detail: "Tether all tools and instruments to prevent dropped objects. Use wrist straps on probes, couplant bottles, and handheld equipment. Establish a drop zone below the work area with barricade and signage." },
        { item: "Weather limitations observed", detail: "Do not work at heights when wind speed exceeds 25 mph (40 km/h) or during lightning activity. Wet or icy surfaces require additional fall protection measures. Stop work if conditions deteriorate." },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="NDT Safety Checklist | Radiation, Electrical & Worksite Safety | Free Download"
        description="Free NDT safety checklist covering general worksite safety, radiation safety for RT, electrical safety, chemical safety for PT/MT, confined space entry, and working at heights. Essential for every NDT operation."
        keywords="NDT safety checklist, NDT safety, radiation safety checklist, RT safety, NDT PPE, confined space NDT, working at heights NDT, electrical safety NDT, chemical safety PT"
        canonical="https://atlantisndt.com/resources/ndt-safety-checklist"
        structuredData={structuredData}
      />
      <Breadcrumbs items={[
        { label: "Home", href: "/" },
        { label: "Resources", href: "/resources" },
        { label: "NDT Safety Checklist" }
      ]} />

      {/* Print Header */}
      <div className="print-header hidden">
        <h1 style={{ textAlign: 'center', borderBottom: '2px solid #004aad', paddingBottom: '8px' }}>
          NDT Safety Checklist - Atlantis NDT
        </h1>
      </div>

      {/* Hero */}
      <section className="bg-[#004aad] text-white py-16 pt-8 no-print">
        <div className="container mx-auto max-w-6xl px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-2 text-blue-200 mb-4">
              <FileText className="w-5 h-5" />
              <span>Free Resource - Safety Checklist</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">NDT Safety Checklist</h1>
            <p className="text-xl text-blue-100 max-w-3xl mb-8">
              A comprehensive safety checklist for NDT operations covering general worksite safety, radiation safety (RT), electrical safety (ET/UT), chemical safety (PT/MT), confined space entry, and working at heights. Every NDT professional should review this before mobilizing to a job site.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 bg-white text-[#004aad] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                <Printer className="w-5 h-5" />
                Download PDF
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
              >
                <Download className="w-5 h-5" />
                Get Editable Version
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-10">
              {sections.map((section, sIdx) => (
                <motion.div
                  key={sIdx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-xl shadow border border-slate-100 p-8"
                >
                  <h2 className={`text-2xl font-bold ${section.color} mb-2`}>{section.title}</h2>
                  <p className="text-slate-600 mb-6">{section.description}</p>
                  <div className="space-y-4">
                    {section.items.map((entry, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-slate-50 transition">
                        <CheckCircle className="w-6 h-6 text-[#004aad] flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold text-slate-800">{entry.item}</p>
                          <p className="text-sm text-slate-600 mt-1">{entry.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Emergency Contacts Template */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl shadow border border-slate-100 p-8"
              >
                <h2 className="text-2xl font-bold text-red-700 mb-6">Emergency Contact Information</h2>
                <p className="text-slate-600 mb-4">Fill in before arriving at each job site. Keep a copy on your person and in the vehicle.</p>
                <div className="overflow-x-auto rounded-xl border border-slate-200 shadow">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-red-700 text-white">
                        <th className="px-4 py-3 text-left font-semibold">Contact</th>
                        <th className="px-4 py-3 text-left font-semibold">Name</th>
                        <th className="px-4 py-3 text-left font-semibold">Phone / Radio</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Site Emergency Number",
                        "Local Hospital / Clinic",
                        "Poison Control Center",
                        "Radiation Safety Officer",
                        "Fire Department",
                        "Company HSE Manager",
                        "Client Safety Representative",
                        "Supervisor / Team Lead",
                      ].map((contact, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-700 font-medium">{contact}</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-400">___________________</td>
                          <td className="px-4 py-2 border-b border-slate-200 text-slate-400">___________________</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="md:col-span-1 space-y-6 no-print">
              <div className="bg-white rounded-xl shadow border border-slate-100 p-6 sticky top-24">
                <h3 className="font-bold text-lg text-slate-800 mb-4">Safety Sections</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="#" className="text-[#004aad] hover:underline">1. General Worksite Safety</a></li>
                  <li><a href="#" className="text-red-700 hover:underline">2. Radiation Safety (RT)</a></li>
                  <li><a href="#" className="text-yellow-700 hover:underline">3. Electrical Safety</a></li>
                  <li><a href="#" className="text-orange-700 hover:underline">4. Chemical Safety (PT/MT)</a></li>
                  <li><a href="#" className="text-purple-700 hover:underline">5. Confined Space Entry</a></li>
                  <li><a href="#" className="text-sky-700 hover:underline">6. Working at Heights</a></li>
                  <li><a href="#" className="text-red-700 hover:underline">Emergency Contacts</a></li>
                </ul>

                <hr className="my-6 border-slate-200" />

                <h3 className="font-bold text-lg text-slate-800 mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/resources/ndt-inspection-checklist" className="text-[#004aad] hover:underline">NDT Inspection Checklist</Link></li>
                  <li><Link to="/resources/ndt-procedure-template" className="text-[#004aad] hover:underline">NDT Procedure Template</Link></li>
                  <li><Link to="/resources/training-requirements-matrix" className="text-[#004aad] hover:underline">Training Requirements Matrix</Link></li>
                </ul>

                <hr className="my-6 border-slate-200" />

                <div className="bg-red-50 border border-red-200 rounded-lg p-5">
                  <h3 className="font-bold text-red-800 mb-2">Safety First</h3>
                  <p className="text-sm text-red-700">This checklist is a guide only. Always follow your employer's safety program, site-specific requirements, and applicable OSHA regulations. When in doubt, stop work and consult your safety officer.</p>
                </div>

                <div className="mt-6 bg-[#004aad] text-white rounded-lg p-5">
                  <h3 className="font-bold mb-2">Safety Training</h3>
                  <p className="text-sm text-blue-100 mb-4">Atlantis NDT offers radiation safety officer (RSO) training, confined space awareness, and site-specific NDT safety programs.</p>
                  <Link to="/contact" className="inline-block bg-white text-[#004aad] px-4 py-2 rounded font-semibold text-sm hover:bg-blue-50 transition">
                    Inquire About Training
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#004aad] text-white text-center no-print">
        <div className="container mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-bold mb-4">Get the Editable Version</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Need this safety checklist in an editable format? Contact us for a customizable version you can brand with your company logo and adapt to your specific safety requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-2 bg-white text-[#004aad] px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              <Printer className="w-5 h-5" />
              Print / Save as PDF
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              Get Editable Version
            </Link>
          </div>
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
