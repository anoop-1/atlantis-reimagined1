/**
 * Method × Industry — the axis the owner named, built on research that already
 * existed — 2026-08-16.
 * ─────────────────────────────────────────────────────────────────────────────
 * `scripts/method-city-depth.mjs` has carried a METHOD_IN_INDUSTRY matrix since
 * §26.1: 13 industries × 6 methods = **78 verified cells**, each describing what
 * that method is actually used for in that sector. Until now those cells were
 * only ever emitted as one-paragraph fragments inside city pages. They are the
 * best-researched content on the site that has no page of its own.
 *
 * This file supplies the per-industry and per-method framing those cells need
 * to become real pages: the sector's damage mechanisms and governing regime,
 * and each method's physics, limits and codes. The cell itself stays the
 * centrepiece — it is the part written from actual sector knowledge.
 *
 * WHY THIS AXIS RATHER THAN MORE CITIES. Measured impressions per indexed page
 * (2026-08-16 coverage audit): blog 305 · 3D-scan city 51.8 · training city
 * 44.1 · **method×city 21.8** · consulting city 13.8 · ERP city 6.1 ·
 * industry×city 0.7. Method×city earns; the industry dimension is how buyers
 * actually describe the problem ("UT for refinery piping", not "UT in Tulsa"),
 * and it is the dimension with 78 cells of research already banked.
 *
 * §18 no pricing · §24.2 mobilised delivery, no fabricated presence.
 */

export const METHODS = {
  'ultrasonic-testing': {
    name: 'Ultrasonic Testing', short: 'UT',
    physics: `Ultrasonic testing sends high-frequency sound into the material and times what comes back. Because sound reflects at any interface where acoustic impedance changes — a back wall, a lamination, the face of a crack — UT measures remaining wall thickness and finds planar defects that other methods cannot see, from one accessible surface.`,
    limits: `What UT will not do: it needs coupling to the surface, so paint, scale and severe roughness degrade it; it struggles with coarse-grained and austenitic material where the grain scatters the beam; and it is orientation-sensitive — a planar flaw lying parallel to the beam can be missed entirely, which is why technique and scan plan matter more than instrument quality.`,
    codes: `ASME Section V Article 4 supplies the method rules most referencing codes point at; AWS D1.1 governs structural weld acceptance; API 5xx in-service codes govern thickness evaluation and remaining-life calculation.`,
  },
  'radiographic-testing': {
    name: 'Radiographic Testing', short: 'RT',
    physics: `Radiography passes X-rays or gamma radiation through the component onto film or a digital detector. Density differences in the image reveal what the material contains — porosity, slag, lack of fusion, and the internal geometry of a weld — producing the one thing no other method gives: a permanent, reviewable image of the volume examined.`,
    limits: `What RT will not do reliably: find tight planar defects lying perpendicular to the beam, because a crack with no measurable width casts almost no shadow. It also requires access to both sides, controlled radiation areas that shut down surrounding work, and licensed sources — which is why RT is scheduled around the plant rather than the plant around RT.`,
    codes: `ASME Section V Articles 2 and 22 for technique; ASME Section VIII and B31.3 for acceptance; API 1104 for pipeline girth welds; ISO 17636 in international scopes.`,
  },
  'magnetic-particle-testing': {
    name: 'Magnetic Particle Testing', short: 'MT',
    physics: `MT magnetises a ferromagnetic component and applies iron particles, which gather at the flux leakage a surface-breaking or near-surface discontinuity creates. It is fast, inexpensive per square metre, and unusually good at what it does: finding cracks in steel that a visual examination would miss.`,
    limits: `What MT will not do: work on non-magnetic material at all — no stainless austenitics, no aluminium, no nickel alloys — and it finds nothing meaningfully below the surface. Coatings degrade sensitivity, and flaws parallel to the flux direction are invisible, which is why examination in two directions is standard practice rather than diligence.`,
    codes: `ASME Section V Article 7; AWS D1.1 for structural work; ASTM E1444 in aerospace and general industry; ASTM E709 as the practice reference.`,
  },
  'penetrant-testing': {
    name: 'Penetrant Testing', short: 'PT',
    physics: `Penetrant testing draws a low-viscosity liquid into surface-breaking discontinuities by capillary action, then blots it back out onto a developer where the indication becomes visible — under white light for visible dye, under UV-A for fluorescent systems. It works on any non-porous material, which is precisely why it exists alongside MT.`,
    limits: `What PT will not do: find anything that does not break the surface, work on porous or heavily coated material, or survive a poor clean — the examination is only as good as the pre-cleaning, and most PT failures are cleaning failures. Dwell and developer times are process parameters, not suggestions.`,
    codes: `ASME Section V Article 6; ASTM E1417 for the process; ISO 3452 internationally; aerospace scopes add OEM and NAS 410 process controls above all of these.`,
  },
  'visual-testing': {
    name: 'Visual Testing', short: 'VT',
    physics: `Visual testing is the examination every other method is deployed against: direct or remote observation under controlled lighting and access, judged against written acceptance criteria. It finds the majority of reportable conditions in most programmes — weld profile, corrosion, mechanical damage, coating breakdown, leakage evidence — and it decides where volumetric examination is worth performing.`,
    limits: `What VT will not do: see beneath the surface, quantify wall loss, or substitute for a volumetric method where the code requires one. Its weakness is human rather than physical — inconsistent lighting, inadequate access, and acceptance criteria applied from memory rather than from the document.`,
    codes: `ASME Section V Article 9; AWS D1.1 for structural acceptance; API 510/570/653 for in-service external and internal examination; ASME B31.3 for process piping.`,
  },
  'eddy-current-testing': {
    name: 'Eddy Current Testing', short: 'ET',
    physics: `Eddy current testing induces circulating currents in a conductive material and reads the impedance change a discontinuity causes. It needs no couplant and no contact, which makes it the fastest surface and near-surface method available — and, in tube form, the only practical way to screen thousands of heat-exchanger tubes inside a shutdown window.`,
    limits: `What ET will not do: examine non-conductive material, penetrate deeply (the effect is confined near the surface, more so as frequency rises), or produce results anyone can interpret without training — signal interpretation is the whole skill, and lift-off, edge effects and permeability variation all masquerade as indications.`,
    codes: `ASME Section V Article 8 for tubing; ASTM E243 and E571 for specific product forms; aerospace surface examination runs under NAS 410 with OEM technique requirements.`,
  },
};

/** The 13 real industries in the §26.1 matrix (the rest of its keys are cities). */
export const INDUSTRIES = {
  refining: {
    name: 'Refining',
    assets: `Crude and vacuum units, cokers, reformers, hydrotreaters, the piping circuits between them, fired heaters, exchanger trains, and the tank farm at the end of it.`,
    mechanisms: `Corrosion is the governing story — sulphidic and naphthenic attack on hot circuits, aqueous corrosion in overheads, corrosion under insulation everywhere insulation exists — with wet H2S cracking, high-temperature hydrogen attack and creep in specific services.`,
    regime: `API 510 (vessels), 570 (piping) and 653 (tanks) govern in-service inspection, with ASME Section V supplying method rules and Section VIII / B31.3 the acceptance criteria. Operator contractor-approval gates site access above the codes.`,
  },
  petrochemical: {
    name: 'Petrochemical',
    assets: `Crackers and their furnaces, polymer trains, reactors and columns, compressor stations, and the utilities and storage that support them.`,
    mechanisms: `High-temperature degradation dominates — creep and carburisation in furnace tubing, thermal fatigue at cyclic services — alongside chloride stress corrosion cracking in austenitic systems and erosion in catalyst-handling circuits.`,
    regime: `API in-service codes with ASME construction acceptance, plus process-specific licensor requirements that frequently exceed the code minimum on critical equipment.`,
  },
  lng: {
    name: 'LNG',
    assets: `Liquefaction trains, cryogenic storage tanks, loading lines and jetties, boil-off handling, and the marine interface.`,
    mechanisms: `Cryogenic service changes the question: brittle fracture risk drives material and toughness concerns, thermal cycling fatigues connections, and external corrosion under cryogenic insulation is difficult to detect precisely because access is difficult.`,
    regime: `API 625 and 620 for cryogenic tanks, ASME for pressure equipment, plus jurisdictional and marine-terminal requirements at the interface.`,
  },
  offshore: {
    name: 'Offshore',
    assets: `Platform topsides and process modules, structural jackets and risers, subsea infrastructure, and FPSO hulls and turrets.`,
    mechanisms: `Fatigue is the defining mechanism — wave loading cycles structural nodes continuously — with seawater corrosion, splash-zone attack, and CUI on topside process equipment.`,
    regime: `Class societies and, in the US Gulf, BSEE regulation; API RP 2X-family guidance for structural examination; operator standards above all of it. Access and weather windows shape scope as much as the code does.`,
  },
  pipeline: {
    name: 'Pipeline',
    assets: `Transmission and gathering lines, girth welds by the thousand, station piping, pig traps and the dig sites where inspection actually happens.`,
    mechanisms: `External and internal corrosion, stress corrosion cracking on susceptible coatings and soils, seam-weld anomalies in older pipe, and mechanical damage from third parties.`,
    regime: `API 1104 for construction welding acceptance; PHMSA integrity-management regulation driving dig programmes; operator IMPs translating both into scope.`,
  },
  marine: {
    name: 'Marine & Shipbuilding',
    assets: `Hull structure and plating, ballast and cargo tanks, propulsion and shafting, deck machinery, and the yard's own new-construction welding.`,
    mechanisms: `Fatigue at structural details, corrosion in ballast spaces and at the waterline, coating breakdown, and construction defects that surface as in-service cracking.`,
    regime: `Classification societies (ABS above all in US work) for commercial survey and acceptance; NAVSEA technical publications on naval work, with qualification layered over SNT-TC-1A.`,
  },
  aviation: {
    name: 'Aviation & Aerospace',
    assets: `Airframe structure and fastener rows, engine hardware — discs, blades, cases — landing gear, wheels, and the growing composite content on both structure and control surfaces.`,
    mechanisms: `Fatigue cracking at stress concentrations is the mechanism the entire inspection programme exists to catch, with corrosion in structure, disbonds in composite repairs, and thermal damage in hot sections.`,
    regime: `NAS 410 or EN 4179 for personnel with a named responsible Level 3; Nadcap accrediting the process; FAA Part 145 governing the repair station; OEM maintenance manuals supplying acceptance criteria rather than a code.`,
  },
  power: {
    name: 'Power Generation',
    assets: `Boilers and HRSGs, headers and steam piping, turbine rotors and blading, generators, condensers and feedwater heaters, and the structural steel around them.`,
    mechanisms: `Creep and thermal fatigue in high-temperature circuits, flow-accelerated corrosion in secondary systems, tube degradation in condensers and exchangers, and fatigue in rotating equipment.`,
    regime: `ASME construction codes for pressure parts, Section XI where the plant is nuclear, and fleet-specific programmes that frequently add examination beyond code minimum. The outage window governs everything operationally.`,
  },
  mining: {
    name: 'Mining & Minerals',
    assets: `Draglines, shovels and haul-truck structures, conveyor systems, crushers and mills, process vessels and tailings infrastructure.`,
    mechanisms: `Wear and abrasion first, then fatigue in heavily cycled structures, weld cracking in repaired high-stress components, and corrosion in wet process circuits.`,
    regime: `Jurisdictional mine-safety regulation plus manufacturer requirements on mobile plant; AWS and ASME acceptance on fabricated and pressure equipment respectively.`,
  },
  fabrication: {
    name: 'Fabrication & Welding',
    assets: `Structural steel, pressure vessels and pipe spools, skids and modules — everything examined before it ever enters service.`,
    mechanisms: `Construction defects rather than degradation: lack of fusion and penetration, porosity and slag, cracking from restraint or hydrogen, and dimensional non-conformance.`,
    regime: `AWS D1.1 for structural steel, ASME Section VIII and IX for pressure equipment and procedure qualification, B31.3 for process piping, plus customer specifications that routinely tighten all three.`,
  },
  automotive: {
    name: 'Automotive Manufacturing',
    assets: `Powertrain castings and forgings, structural body components and their joints, safety-critical suspension and steering parts, and increasingly battery-system enclosures.`,
    mechanisms: `Casting and forging soundness, weld and joint integrity at production rates, and fatigue performance of safety-critical components.`,
    regime: `IATF 16949 quality-system requirements and OEM specifications drive the examination programme; production volume makes automation and cycle time as important as detection capability.`,
  },
  steel: {
    name: 'Steel & Primary Metals',
    assets: `Continuous casters, rolling mills and their rolls, furnace shells and ducting, cranes, and the plate, bar and tube the mill produces.`,
    mechanisms: `Product soundness — laminations, inclusions and surface defects — alongside plant-side thermal fatigue, wear, and structural fatigue in heavily loaded cranes and mill housings.`,
    regime: `Product examination runs to ASTM and customer specifications, often inline and automated; plant maintenance examination runs to ASME and jurisdictional requirements.`,
  },
  rail: {
    name: 'Rail',
    assets: `Rail itself and its welds, wheelsets and axles, bogies, and rolling-stock structure — plus the fixed infrastructure of bridges and depots.`,
    mechanisms: `Rolling contact fatigue and internal rail defects, axle and wheel fatigue, weld defects at rail joints, and corrosion in structure.`,
    regime: `National rail-safety regulation with operator maintenance standards; examination is frequently high-throughput and time-limited by track possession rather than by scope.`,
  },
};

/** Which industries genuinely merit a page per method. All 13 have research. */
export const INDUSTRY_ORDER = Object.keys(INDUSTRIES);

export const DELIVERY_NOTE = `Atlantis mobilises examination teams to your site under Atlantis procedures with ASNT Level III oversight — we do not claim a depot or laboratory in every market, and say so plainly. What you receive is the examination performed to a qualified procedure, findings evaluated against the acceptance criteria your contract names, and records structured to survive a client audit years later.`;
