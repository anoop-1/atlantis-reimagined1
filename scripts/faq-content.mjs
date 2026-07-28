/**
 * Authored FAQ content — 2026-07-28.
 * ─────────────────────────────────────────────────────────────────────────────
 * The post-pass can only derive FAQ schema from Q&A a page already renders. 69
 * pages with 150+ impressions/90d had none to derive from, including the site's
 * highest-impression method guide (/blog/visual-testing, 6,012 impressions).
 *
 * This module supplies the missing Q&A as REAL, visible content — rendered into
 * the page body, with the schema generated from it afterwards by the existing
 * post-pass. Questions are taken from each page's actual highest-impression
 * queries in the GSC page x query data, so they answer what searchers are
 * genuinely asking rather than what is convenient to answer.
 *
 * Two mechanisms:
 *   AUTHORED  — hand-written sets for pages with a distinct subject.
 *   FAMILIES  — parameterised sets for repeating page types (3D scanning city,
 *               training city, method x city). Parameterised does not mean
 *               generic: each answer is specific about method, code and process.
 *
 * Pricing policy (CLAUDE.md §18): no Atlantis price appears in any answer.
 */

const esc = (s) =>
  String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const ACRONYMS = new Set(['ndt', 'ut', 'rt', 'mt', 'pt', 'vt', 'et', 'paut', 'tofd', 'uae', 'usa', 'uk', 'api', 'asme', 'iso', 'llc']);
const label = (slug) =>
  String(slug).split('-').map((w) => (ACRONYMS.has(w.toLowerCase()) ? w.toUpperCase() : w.charAt(0).toUpperCase() + w.slice(1))).join(' ');

/* ────────────────────────────────────────────────────────────────────────────
 * AUTHORED — hand-written, one set per page
 * ────────────────────────────────────────────────────────────────────────── */

export const AUTHORED_FAQS = {
  // top queries: "visual inspection ndt" 141i p31, "asme section v article 9" 53i p5
  '/blog/visual-testing': [
    ['What is visual testing in NDT?',
      'Visual testing (VT) is the examination of a component using the eye, either directly or through remote aids such as borescopes, mirrors, cameras and drones, performed against a written procedure with defined lighting, surface preparation and access requirements. It is the most frequently applied NDT method and, done properly, detects a substantial share of the conditions that matter before any other method is deployed — weld profile defects, surface cracking, arc strikes, corrosion, coating breakdown, distortion, misalignment and evidence of leakage.'],
    ['What does ASME Section V Article 9 require for visual examination?',
      'Article 9 requires a written procedure covering how the examination is performed, the surface condition required, the method of examination (direct or remote), the lighting level at the surface, the equipment used, and the sequence of performing the examination. It also requires that the procedure be demonstrated capable of resolving a specified artificial flaw or a line of defined width at the maximum examination distance, which is what turns visual examination from "looking at it" into a qualified NDT method.'],
    ['What lighting is required for visual testing?',
      'The governing requirement is that the illumination be sufficient to resolve the specified verification target at the examination distance, and the level actually achieved at the surface must be measured and recorded rather than assumed. Many procedures specify a minimum white-light level at the examination surface; the important discipline is measuring it at the work location with a calibrated light meter, since ambient plant lighting rarely matches what the procedure assumed.'],
    ['What is the difference between direct and remote visual examination?',
      'Direct visual examination is performed with the eye close enough to the surface to meet the procedure\'s distance and angle requirements — typically within arm\'s reach and at not less than a specified viewing angle. Remote visual examination uses borescopes, fibrescopes, cameras or drones where access prevents that, and must be demonstrated to have resolution at least equivalent to direct examination. The demonstration is the part most commonly missing when remote VT is challenged in an audit.'],
    ['What qualification does a visual inspector need?',
      'Under ASNT SNT-TC-1A or ISO 9712 a VT inspector is certified by method and level like any other NDT method, with an annual near-vision acuity examination and a colour-contrast or shade-differentiation examination as applicable. In practice the vision examination is the item most often found expired during a client gate check, because it runs on a shorter cycle than the method certification it supports.'],
    ['When is visual testing not sufficient on its own?',
      'Whenever the credible damage mechanism produces no surface evidence at the stage you need to detect it. Internal wall loss, embedded weld defects, sub-surface cracking, corrosion under insulation and hydrogen damage all require a volumetric or surface-enhanced method — UT, radiography, magnetic particle, penetrant or eddy current. Visual examination remains the first step because it directs where those methods are then applied.'],
  ],

  // top queries: "phased array ultrasonic testing" 178i p72, "paut" 121i p53, "paut equipment" 96i p14
  '/blog/phased-array-ultrasonic-testing-paut-guide': [
    ['What is phased array ultrasonic testing?',
      'PAUT uses a probe containing many small piezoelectric elements that are pulsed with controlled time delays, which steers and focuses the ultrasonic beam electronically. A single probe position can sweep a range of angles (a sectorial scan) or step a focal law along the array (a linear scan), producing an imaged cross-section of the weld or component rather than the single trace a conventional probe returns.'],
    ['What equipment does PAUT require?',
      'A phased array instrument with sufficient channels for the probe in use, a probe with an element count and frequency matched to the material and thickness, a wedge selected for the required refraction angle range, an encoder where scans must be positionally reproducible, and calibration blocks appropriate to the technique. The instrument, probe, wedge and calibration blocks all require calibration records; holding a certificate for the instrument alone is one of the most common audit findings.'],
    ['Is PAUT better than conventional UT?',
      'For imaged, encoded, reproducible data — repeat corrosion surveys, weld examination replacing radiography, or geometry that defeats fixed-angle probes — yes. For a straightforward thickness survey or a routine weld examination where access and speed matter more than imaging, conventional UT is faster, cheaper and entirely adequate. Specifying PAUT where conventional UT would do is a common and expensive habit.'],
    ['Can PAUT replace radiography?',
      'Frequently, and that is one of its main commercial drivers, since it removes radiation-safety exclusion zones and the associated production downtime. ASME Code Case 2235 and ASME Section V Article 4 Mandatory Appendices IV and V provide the framework for ultrasonic examination in lieu of radiography. The substitution has to be justified by a documented scan plan demonstrating coverage of the required weld volume, not simply asserted.'],
    ['What qualification does a PAUT technician need?',
      'Method-level certification in ultrasonic testing under ASNT SNT-TC-1A or ISO 9712, plus documented phased-array-specific training and practical qualification. Many clients also require demonstration on representative specimens before mobilisation. PAUT data interpreted by someone certified in conventional UT but not qualified on phased array is a recurring source of both missed and over-called indications.'],
    ['What is a scan plan and why does it matter?',
      'A scan plan models the focal laws, probe positions and beam coverage against the actual joint geometry to demonstrate that the required volume is examined. It matters because a phased array display can look thorough while leaving a volume unexamined — coverage is a property of the geometry and the focal laws, not of how busy the screen looks. Auditors increasingly ask for the scan plan rather than the report.'],
  ],

  // top query: "ship hull inspection" 550i p52, "hull inspection" 191i p60
  '/blog/ship-hull-and-propulsion-system-inspection': [
    ['What does a ship hull inspection involve?',
      'A hull inspection combines close-up visual examination of structure and coatings with ultrasonic thickness measurement of plating and stiffeners, magnetic particle or penetrant examination of critical welds, and examination of the propulsion train — shafting, stern tube, propeller and rudder. Scope and frequency are driven by the class society\'s survey regime and the vessel\'s age, with special surveys requiring substantially more gauging than intermediate ones.'],
    ['How is hull thickness measured and who can do it?',
      'By ultrasonic thickness gauging at defined locations on plating, frames, girders and stiffeners, following a gauging plan agreed with the class surveyor. The measurements must be taken by a firm approved by the class society for thickness measurement, with technicians certified under ISO 9712 or an equivalent scheme, and the report presented in the class society\'s required format with diminution calculated against original scantlings.'],
    ['What is the difference between drydock and in-water inspection?',
      'Drydock inspection gives full access to the underwater hull, allowing complete visual examination, thickness gauging and NDE of any area. In-water surveys use divers or ROVs with cameras and, where accepted, underwater thickness measurement, and are permitted by class societies in defined circumstances as an alternative to one of the two dockings in a five-year cycle. Not all findings can be dispositioned in the water, so the risk of an in-water survey is discovering a condition that forces an unplanned docking.'],
    ['Which defects matter most on a hull?',
      'Corrosion diminution of plating and internal structure against class allowable limits; fatigue cracking at hard points, bracket toes and hatch corners; coating breakdown in ballast tanks that accelerates the corrosion behind it; grooving corrosion along weld lines; and, in the propulsion train, shaft cracking and stern tube bearing wear. The structural items are what determine whether the vessel passes survey; the propulsion items are what determine whether it stays operational between surveys.'],
    ['How do class societies accept NDT reports?',
      'Under the IACS framework, class societies expect the examination to be performed to an approved procedure by a certified technician using calibrated equipment, with the report presented in a defined document set — commonly including the technical report, the calibration record and the technician certification. Reports missing the certification or calibration evidence are routinely returned regardless of the technical quality of the examination.'],
  ],

  // top queries: "heat exchanger inspection" 96i p42, "heat exchanger testing" 71i p66
  '/blog/heat-exchanger-tube-inspection-methods-procedures': [
    ['Which method should be used for heat exchanger tube inspection?',
      'It depends on tube material. Eddy current (ECT) is the standard choice for non-ferromagnetic tubes such as copper alloys, titanium and austenitic stainless. Remote field testing (RFT) handles ferromagnetic tubes such as carbon steel where conventional ECT cannot penetrate. IRIS ultrasonic gives quantitative wall thickness on any material and is used where sizing accuracy matters or to confirm ECT indications. Magnetic flux leakage suits ferromagnetic tubes where speed matters more than sizing precision.'],
    ['How many tubes need to be inspected?',
      'A sampling approach is normal — commonly a defined percentage of the bundle weighted toward the areas historically most degraded, such as the inlet region, the U-bends and the tubes adjacent to baffles. Sampling is expanded when the sample rate of defects exceeds a threshold agreed beforehand. Defining that expansion rule before the campaign, rather than during it, is what keeps the scope controllable.'],
    ['What preparation does the bundle need?',
      'Tubes must be cleaned to a standard that allows the probe to pass and the signal to be interpretable — typically hydroblasting, with mechanical cleaning where deposits are hard. Inadequate cleaning is the most common cause of an aborted or unreliable campaign, and it is worth agreeing the cleanliness standard and who verifies it before the crew mobilises rather than discovering the problem on the day.'],
    ['What do the results actually decide?',
      'Whether individual tubes are plugged, whether the bundle is retubed, and when the exchanger is next opened. Those decisions turn on the percentage of wall loss, the distribution of defects across the bundle, and the trend against previous campaigns — which requires that tube numbering be consistent between inspections. Bundles renumbered between campaigns lose their history, and with it the ability to trend degradation.'],
    ['Can heat exchanger tubes be inspected without removing the bundle?',
      'Tube inspection generally requires access to the tube ends, which means the channel head is opened but the bundle need not always be pulled. Bundle removal is required where shell-side examination, external tube condition or full access to the U-bends is needed. Whether the bundle is pulled is usually decided by the exchanger design and by what the previous campaign found, not by the inspection method itself.'],
  ],

  // top queries: "wind turbine blade inspection" 98i p50, "blade inspection" 95i p50
  '/blog/wind-turbine-blade-inspection-and-monitoring': [
    ['How are wind turbine blades inspected?',
      'By a combination of methods matched to access and defect type: ground-based and drone photographic survey for external damage, close-up visual by rope access or platform, tap testing and ultrasonic examination for bond-line and laminate condition, thermography for sub-surface disbond and moisture ingress, and internal inspection of the spar and web where access allows. Drone survey has largely displaced routine rope access for screening, with rope access reserved for repair and detailed examination.'],
    ['What defects are found in wind turbine blades?',
      'Leading-edge erosion, which degrades aerodynamic performance long before it threatens structure; laminate cracking and delamination; adhesive bond-line disbond at the shear web and trailing edge, which is the most structurally significant common defect; lightning-strike damage and receptor failure; and water ingress that accelerates all of the above through freeze-thaw cycling.'],
    ['How often should blades be inspected?',
      'Typical practice is an annual external survey with more detailed examination at longer intervals, adjusted for site conditions and blade history. Sites with high erosion exposure, heavy lightning activity or a known blade-model issue justify a shorter interval. The economically important point is that leading-edge erosion degrades yield continuously, so the inspection interval is often set by energy loss rather than by structural risk.'],
    ['What is the difference between onshore and offshore blade inspection?',
      'Access cost dominates offshore, which shifts the balance decisively toward drone and remote methods and makes campaign planning far more consequential — a mobilisation that finds nothing actionable is expensive in a way onshore work is not. Offshore campaigns also carry weather windows that constrain when work can be done, so scope has to be prioritised before the vessel sails.'],
    ['Does blade inspection data support life extension?',
      'It can, provided the data is quantitative and trended rather than a series of photographic surveys. Life-extension cases rest on demonstrating that degradation rates are known and bounded, which requires consistent defect location identity between campaigns and measurements rather than descriptions. Programmes that only hold photographs generally cannot support the case when it is eventually needed.'],
  ],

  // top queries: "aerospace composite inspection" 112i p36
  '/blog/aerospace-composite-inspection-ndt-methods-guide': [
    ['How are aerospace composites inspected?',
      'Pulse-echo ultrasonic and phased array are the primary methods for delamination, disbond and porosity, with through-transmission ultrasonic used where access to both surfaces exists and attenuation is high. Bond testers address bond-line integrity where ultrasonic response is poor, thermography screens large areas quickly, and shearography detects disbond in honeycomb and sandwich structures. Radiography contributes on core condition and water ingress.'],
    ['What is barely visible impact damage and why does it matter?',
      'BVID is impact damage that leaves little or no visible surface indication while producing significant sub-surface delamination. It matters because visual inspection — the method most likely to be applied in service — will not find it, and because compression-after-impact strength can be substantially reduced. Detection requires an ultrasonic, thermographic or shearographic method, which is why impact-damage inspection intervals are specified rather than left to visual survey.'],
    ['What personnel qualification applies to aerospace NDT?',
      'NAS 410 in North America and EN 4179 in Europe govern qualification and certification of aerospace NDT personnel, with the employer\'s written practice, a designated Level 3, annual vision examinations and documented experience hours. Nadcap accreditation of the process adds audit requirements over and above the personnel scheme, and Nadcap audits examine the technique sheets and process control as closely as the certifications.'],
    ['How does composite inspection differ from metal inspection?',
      'Composites attenuate ultrasound heavily and anisotropically, so frequency selection and coupling matter more; the defect types are different (delamination, disbond, porosity and fibre breakage rather than cracking and corrosion); acceptance criteria are usually defined by the OEM process specification rather than a general code; and the structure often cannot be assumed homogeneous, so reference standards must represent the actual layup.'],
    ['Who sets the acceptance criteria?',
      'Almost always the OEM process specification for that part, not a general industry code. That is a significant practical difference from pressure equipment work: the same defect can be acceptable on one programme and rejectable on another, and the technique sheet must cite the specific specification and revision it was written against.'],
  ],

  // top queries: "corrosion under insulation pipeline inspection" 170i p33
  '/blog/corrosion-under-insulation-cui-detection-guide': [
    ['How is corrosion under insulation detected without removing insulation?',
      'Pulsed eddy current measures average wall thickness through insulation and cladding and is the most widely used screening method. Real-time and digital radiography give a profile image through the insulation, useful on small-bore lines and at supports. Guided wave screens long runs from a single access point. Infrared thermography finds wet insulation, which is a strong CUI precursor rather than CUI itself. Each of these screens; confirmation and sizing still require insulation removal and conventional UT at the locations they flag.'],
    ['Where is CUI most likely?',
      'In the temperature bands where water can be present and evaporation is incomplete — broadly the range in which carbon steel stays wet under insulation, with the risk highest around cyclic and intermittent service. Physically, the high-risk locations are penetrations, terminations, supports, deadlegs, low points, damaged cladding, vertical-to-horizontal transitions and anywhere water can enter and not drain. API RP 583 sets out the susceptibility framework.'],
    ['Is stainless steel immune to CUI?',
      'No. Austenitic stainless steel under insulation is susceptible to external chloride stress-corrosion cracking, which is a different and often more serious failure mode than the general wall loss seen on carbon steel. Chloride can be leached from the insulation itself, so material selection of the insulation matters as much as the pipe metallurgy.'],
    ['How should a CUI programme be prioritised?',
      'By susceptibility and consequence rather than by uniform coverage. Rank circuits using operating temperature and cycling, insulation and cladding condition, external environment, coating condition and consequence of failure, then target inspection at the highest-ranked locations. Programmes that inspect an equal proportion of every insulated line spend most of their budget where CUI is not credible.'],
    ['What is the most cost-effective CUI strategy?',
      'Preventing water ingress and maintaining coatings under the insulation is far cheaper than detecting the corrosion afterwards. Where inspection is the only option, screening broadly with pulsed eddy current or guided wave and confirming narrowly with UT costs a fraction of removing insulation across a system, and produces a better-targeted repair scope.'],
  ],

  // top queries: "api 579 analysis" 48i p33, "api 579 part 11 fire damage" 27i p24
  '/blog/api-579-fitness-for-service-guide': [
    ['What is API 579 fitness-for-service?',
      'API 579-1/ASME FFS-1 is the engineering standard for assessing whether equipment containing a flaw or damage is fit to remain in service. It provides quantitative procedures for specific damage types — general and local metal loss, pitting, blisters and laminations, weld misalignment, crack-like flaws, creep, fire damage and more — and returns a run, repair, alter or replace decision with a defensible technical basis.'],
    ['What is the difference between Level 1, 2 and 3 assessments?',
      'Level 1 is a screening assessment using conservative, tabulated criteria and minimal input data; it either passes the component or escalates. Level 2 uses more detailed calculation and more input data, and typically passes components that Level 1 rejects. Level 3 uses detailed numerical analysis, usually finite element, and is applied when Level 2 fails or where the geometry and loading are outside the scope of the simpler levels.'],
    ['What data is needed before an FFS assessment?',
      'Design and construction data including the code of construction, material specification and design conditions; current operating conditions; the damage characterisation itself — thickness profile, flaw dimensions and orientation, measured rather than estimated; and the inspection provenance behind those measurements. Assessments delayed by data gathering are the norm, and the gap is almost always the quality of the thickness data rather than the design records.'],
    ['Does API 579 cover fire damage?',
      'Yes — Part 11 addresses fire damage, including the heat exposure zones, assessment of material property changes, and the procedures for determining whether affected equipment can be returned to service. It is one of the more commonly invoked parts after an incident because the alternative, wholesale replacement of everything within the fire envelope, is rarely economic.'],
    ['Who is qualified to perform an FFS assessment?',
      'The standard expects assessments to be performed by engineers competent in the relevant technical areas, with Level 3 assessments in particular requiring stress-analysis competence. In practice inspection organisations perform Level 1 routinely, Level 2 with engineering support, and refer Level 3 to specialists. The inspector\'s role is to supply damage characterisation of sufficient quality that the assessment is meaningful.'],
  ],

  // top queries: "nde aerospace forgings" 45i p29, "forging lap defect" 38i p7
  '/blog/forging-defect-detection-and-assessment': [
    ['What are the common defects in forgings?',
      'Laps, formed when metal folds over on itself during forging and is not welded shut; seams, elongated surface discontinuities originating in the bar stock; bursts and internal cracking from forging at incorrect temperature or excessive reduction; inclusions carried from the melt; flow-line disruption from poor die design; and cracking from quenching during heat treatment.'],
    ['How is a lap distinguished from a crack?',
      'A lap typically follows the flow lines, meets the surface at an angle rather than perpendicular, and is often filled with oxide, which affects how it responds to penetrant and magnetic particle examination. A crack is generally perpendicular to the surface and follows stress rather than flow. Metallographic sectioning is definitive; in the field, orientation, geometry and the response to different methods are the practical discriminators.'],
    ['Which NDT methods apply to forgings?',
      'Ultrasonic testing for internal defects, usually with immersion or contact scanning against a documented sensitivity based on flat-bottom-hole or side-drilled-hole reference standards; magnetic particle for surface and near-surface indications on ferromagnetic material; liquid penetrant on non-ferromagnetic material; and eddy current for surface examination where speed matters. Aerospace forgings normally require ultrasonic examination to a specific class defined by the OEM.'],
    ['At what stage should forgings be inspected?',
      'Usually after final heat treatment and rough machining, so that the surface condition supports the examination and any defects introduced by heat treatment are present. Inspecting before heat treatment misses quench cracking; inspecting after final machining risks scrapping value already added. The sequence is normally fixed by the process specification rather than chosen per part.'],
    ['What acceptance criteria apply?',
      'For aerospace, the OEM or airframe process specification and the applicable material specification, which define the ultrasonic class and the permissible indication sizes. For general industrial forgings, ASTM specifications for the material and examination method, plus any purchaser requirements. As with composites, the same indication can be acceptable under one specification and rejectable under another, so the technique sheet must cite the specification and revision applied.'],
  ],

  // top queries: "which quality assurance services provide code acceptance" 32i p3
  '/blog/weld-inspection-acceptance-criteria-aws-vs-asme': [
    ['What is the difference between AWS D1.1 and ASME acceptance criteria?',
      'AWS D1.1 governs structural steel welding and its acceptance criteria are framed for structural performance, with separate criteria for statically and cyclically loaded connections. ASME Section VIII and Section IX govern pressure-retaining welds, where the acceptance criteria are tied to the construction code and the required examination. The practical consequence is that the same weld indication can be acceptable structurally and rejectable in pressure service, so the governing code must be established before the examination, not after.'],
    ['Which code applies to my weld?',
      'The code of construction for the item. A structural member on a pipe rack falls under AWS D1.1; a pressure vessel weld falls under ASME Section VIII Division 1; process piping falls under ASME B31.3; a pipeline girth weld usually falls under API 1104. Where a fabrication spans more than one, each weld is assessed under the code governing the item it belongs to — a distinction that is routinely blurred on multidiscipline sites.'],
    ['Do acceptance criteria differ between examination methods?',
      'Yes, substantially. Radiographic and ultrasonic acceptance criteria address different defect characteristics — radiography is generally better on volumetric defects and ultrasonic on planar ones — so a weld can pass one and fail the other legitimately. Substituting one method for another is a code question, not an operational preference, and where it is permitted the substitution normally carries additional requirements.'],
    ['How are acceptance decisions defended in an audit?',
      'By producing the procedure and revision in force, the technician\'s certification for the method and level as at the date of examination, the calibration status of the equipment used, and the specific code clause and edition against which the indication was dispositioned. Programmes that record the disposition without the clause and edition tend to lose the argument, even when the original decision was correct.'],
    ['Who decides whether an indication is a defect?',
      'An indication becomes a defect only when it exceeds the acceptance criteria of the governing code. That determination is made by qualified personnel against the written procedure, and the terminology matters contractually: reports that describe every indication as a defect create commercial problems that the underlying examination does not justify.'],
  ],

  // top queries: "asnt level iii consulting" 11i, "asnt ndt level iii certification requirements" 6i
  '/blog/ndt-level-iii-certification-requirements-guide': [
    ['What are the requirements for ASNT NDT Level III certification?',
      'Under ASNT\'s scheme a candidate passes a Basic examination plus a method examination for each method sought, and meets education and experience requirements that vary by academic background — a candidate with an engineering degree needs fewer documented years than one entering from the shop floor. A current near-vision acuity and colour-contrast examination is required, as it is at every level. Certification is then either through ASNT directly or employer-based under a written practice, and the two are not interchangeable.'],
    ['What does the Basic examination cover?',
      'Materials and processes, common discontinuities and their origins, the certification schemes themselves — particularly SNT-TC-1A and ANSI/ASNT CP-189 — and a general awareness of methods the candidate is not certifying in. Candidates from a single-method background consistently underestimate the materials and processes content, which is the most common reason for a Basic failure.'],
    ['How is ASNT Level III different from ISO 9712 Level 3?',
      'ASNT Level III is predominantly employer-based certification governed by the employer\'s written practice, with ASNT itself offering central certification as an option. ISO 9712 Level 3 is third-party certification issued by an accredited certification body independent of the employer. Both are widely recognised, but which one a client accepts is determined by their own specification, and in several regions the specification names one explicitly.'],
    ['What responsibilities come with Level III certification?',
      'Approving procedures and written practices, qualifying and certifying Level I and Level II personnel, selecting methods and techniques, interpreting codes and specifications, and being technically accountable when the programme is audited. If you will be named on a written practice, that accountability is real rather than nominal, which is why many companies engage an outsourced Level III alongside developing the capability internally.'],
    ['How long does it take to become a Level III?',
      'The binding constraint is documented experience rather than study time. Most candidates reach Level III after several years working at Level II in the methods concerned, and then prepare for several months for the Basic and each method examination. Candidates already holding API 510, API 570 or API 653 usually find the codes-and-standards content substantially easier.'],
    ['Does Level III certification expire?',
      'Yes — certification is valid for a defined period and requires recertification, by examination or by documented continuing activity depending on the scheme and the employer\'s written practice. Recertification lapses are a routine audit finding, and they are avoidable: the recertification date should be tracked in the same system that blocks dispatch on any other expired qualification.'],
  ],

  // top queries: "ndt oil and gas" 35i, "ndt services for oil and gas" 31i
  '/ndt-for-oil-gas': [
    ['Which NDT methods are used in oil and gas?',
      'Ultrasonic testing and phased array for wall thickness and weld examination; radiography for weld volumetric examination and for profile imaging of small-bore and insulated lines; magnetic particle and liquid penetrant for surface examination; eddy current and IRIS for heat exchanger tubing; guided wave for screening long insulated or buried runs; magnetic flux leakage for tank floors and in-line pipeline inspection; and visual examination throughout, which directs where the others are applied.'],
    ['What codes govern NDT in oil and gas?',
      'ASME Section V for the examination methods themselves; ASME Section VIII and B31.3 for construction acceptance; API 510 for pressure vessels, API 570 for piping and API 653 for aboveground storage tanks in service; API 1104 for pipeline girth welds; API 579 for fitness-for-service; and API 580/581 for risk-based inspection. API RP 571 defines the damage mechanisms that determine which examination is actually worth performing where.'],
    ['What damage mechanisms drive inspection planning?',
      'In refining, high-temperature sulfidation, naphthenic acid corrosion, high-temperature hydrogen attack, wet H2S cracking including HIC and SOHIC, chloride stress-corrosion cracking of austenitic stainless, corrosion under insulation, and erosion-corrosion at elbows and reducers. Upstream and midstream add CO2 and microbiologically influenced corrosion, top-of-line corrosion in wet gas, and external corrosion under coating and disbonded wrap.'],
    ['How are inspection intervals set?',
      'Under API 510, API 570 and API 653 the interval derives from measured corrosion rate and remaining life, subject to code maxima — not from a fixed calendar. That makes the quality of the thickness data decisive: readings that cannot be proven to come from the same corrosion monitoring location cannot support a defensible corrosion rate, and therefore cannot support the interval derived from it.'],
    ['What qualifications should an oil and gas NDT contractor hold?',
      'Technicians certified per method and level under ASNT SNT-TC-1A or ISO 9712 against a current written practice; inspectors holding API 510, 570 or 653 as the scope requires; ISO 17020 or ISO 17025 accreditation where third-party inspection is performed; and the operator-specific approvals that govern site access, which are separate from and additional to the certification scheme.'],
    ['Can inspection data feed our integrity management system?',
      'Yes. Results can be delivered as notifications or work orders into SAP PM, Oracle eAM, IBM Maximo or ServiceNow, or bound to locations on a 3D asset model where corrosion rates, remaining life and risk ranking update as new data arrives. The important design decision is that thickness readings attach to a persistent corrosion monitoring location rather than to a report, because that is what makes the time series usable years later.'],
  ],

  // top query: "asme ndt standards" p1 — page ranks but had no Q&A
  '/blog/asme-section-v-ndt-requirements-guide': [
    ['What does ASME Section V cover?',
      'Section V of the ASME Boiler and Pressure Vessel Code contains the nondestructive examination methods themselves, article by article: Article 2 radiography, Article 4 ultrasonic examination of welds, Article 5 ultrasonic thickness measurement, Article 6 liquid penetrant, Article 7 magnetic particle, Article 8 eddy current, Article 9 visual, Article 10 leak testing, and Articles 11 and 12 acoustic emission. It defines how an examination is performed, not whether the result is acceptable.'],
    ['Where do acceptance criteria come from if not Section V?',
      'From the referencing code section — Section VIII Division 1 for pressure vessels, Section I for power boilers, B31.1 or B31.3 for piping, and so on. This split catches people out regularly: a procedure can cite Section V correctly and still apply the wrong acceptance criteria, which is one of the most common findings in a procedure review.'],
    ['Does Section V require written procedures?',
      'Yes. Each article specifies the elements a written procedure must address, and several require the procedure to be demonstrated or qualified. Procedures also have to be specific to the materials, thickness ranges and configurations in scope — a single generic procedure covering everything the shop might ever examine will not survive scrutiny.'],
    ['How do Section V and Section IX relate?',
      'Section IX governs welding and brazing qualification — the WPS, PQR and welder performance qualification. Section V governs the examination of the resulting weld. Both are usually in play on the same joint, and an audit that starts with an NDE report frequently ends up in the Section IX records, so keeping the two record sets linked to the same weld identity saves considerable time.'],
    ['Which edition applies to work already performed?',
      'The edition in force when the work was performed and accepted. New work moves to a new edition from a defined effective date recorded by the organisation; historical dispositions stay assessed under the edition then applicable. Retrospectively applying a new edition invalidates the original acceptance decision and creates a far larger problem than it solves.'],
  ],

  // top queries: "ndt procedure development and review" 9i, "ndt procedure writing" 7i
  '/blog/ndt-procedure-writing-guide-asme-section-v': [
    ['What must an NDT procedure contain?',
      'The elements the governing article of ASME Section V lists as requiring specification — which vary by method but generally include the materials, thickness range and configurations covered, the equipment and consumables including manufacturer and type where relevant, surface preparation, technique details such as angles, frequencies and scanning patterns, calibration and sensitivity setting, the personnel qualification required, the recording and reporting requirements, and the acceptance criteria reference.'],
    ['How specific does a procedure need to be?',
      'Specific enough that two qualified technicians following it independently would perform the same examination. Procedures that cover an unrealistically wide range of materials, thicknesses and geometries fail this test, and it is exactly what a demonstration or a witnessed examination exposes. Narrow, well-bounded procedures with separate technique sheets for particular applications are easier to defend than a single all-encompassing document.'],
    ['Who approves an NDT procedure?',
      'An ASNT NDT Level III or ISO 9712 Level 3 in the method, named in the written practice, with the approval recorded and dated. Where a client or a construction code requires it, the procedure may also need client or Authorised Inspector approval before use — a step that is frequently discovered late and delays mobilisation.'],
    ['How should procedure revisions be controlled?',
      'Under the same document control as the rest of the quality system, with superseded revisions retained permanently and the revision in force bound to each inspection record as it is created. The test is whether you can state, for an inspection performed two years ago, which revision governed it. If that requires reading effective dates across a stack of archived files, the control is nominal.'],
    ['What is the difference between a procedure and a technique sheet?',
      'The procedure defines the qualified method and its bounds; the technique sheet defines how it is applied to a specific job, joint or component — probe, angle, scan plan, reference block, coverage. Technique sheets change far more often than procedures and are the document most commonly found circulating in uncontrolled versions, which quietly undermines the controlled procedure above them.'],
  ],
};

/* ────────────────────────────────────────────────────────────────────────────
 * FAMILIES — parameterised but specific
 * ────────────────────────────────────────────────────────────────────────── */

const SCANNING_FAQS = (city) => [
  [`What 3D scanning services are available in ${city}?`,
    `Terrestrial laser scanning for survey-grade dimensional capture of process plant, structures and confined spaces; photogrammetry where surface condition and colour matter as much as dimension; and drone or UAV capture for elevated structures, tank roofs, flare stacks and anything that would otherwise need scaffold or rope access. Deliverables in ${city} are agreed against the use case — registered point clouds, as-built models, deformation comparison, or geometry prepared for a digital twin.`],
  ['What accuracy can I expect from a laser scan?',
    'Survey-grade terrestrial scanning delivers registration accuracy in the low millimetres across a typical plant area, but the number that matters is the accuracy of the registered network rather than the single-scan specification quoted by the instrument manufacturer. Registration accuracy is reported with the deliverable, and any tolerance the downstream engineering depends on should be stated before capture rather than discovered afterwards.'],
  ['What deliverable formats are provided?',
    'Registered point clouds in LAS, E57, RCP or RCS; as-built models in Revit, IFC, AutoCAD or MicroStation at an agreed level of detail; deformation and dimensional comparison against design or a previous scan; and, where the scan feeds an integrity programme, geometry prepared for ingestion into a digital twin so inspection data can be bound to locations on the model.'],
  ['How long does a scan take?',
    'Capture is usually the short part — a typical process unit is scanned in days rather than weeks. Registration, quality control and as-built modelling take longer and scale with the level of detail requested, which is why agreeing the level of detail against the actual downstream use is the single biggest lever on both cost and schedule.'],
  ['Should I scan the whole site or start smaller?',
    'Start with the units where condition data justifies it. The most common way to overspend on reality capture is to scan an entire plant at high density before deciding what data will be attached to the geometry. On integrity programmes the constraint is almost always reconciling the corrosion monitoring location register, not capturing geometry.'],
];

const TRAINING_FAQS = (city) => [
  [`Where can I take NDT training in ${city}?`,
    `Atlantis NDT runs ASNT and ISO 9712 aligned programmes for candidates in ${city} in three delivery formats: public classroom cohorts, on-site corporate cohorts run at your own facility using your equipment and specimens, and blended delivery where theory is completed online and the practical block is supervised in person. Method-level Level I and Level II across UT, RT, MT, PT, VT and ET, plus API 510, API 570 and API 653 inspector preparation.`],
  ['How long does NDT certification take?',
    'The training hours and industrial experience required depend on method and level under SNT-TC-1A or ISO 9712, and experience is usually the binding constraint rather than classroom time. A candidate starting from zero should plan in months rather than weeks for a first Level II, because documented on-the-job hours have to accumulate alongside the training and examinations.'],
  ['What does the certification actually require beyond passing an exam?',
    'A general examination, a specific examination on the employer\'s procedures, and a practical examination; documented training hours; documented on-the-job experience hours; and a current near-vision acuity and colour-contrast examination. Under SNT-TC-1A the employer certifies against its own written practice, so the written practice is part of the requirement rather than background paperwork.'],
  ['Is on-site corporate training better than sending people to public courses?',
    'For groups, almost always. The crew is qualified together against the written practice they actually work to, on your own equipment and specimens, which removes both the travel cost and the inconsistency that comes from sending technicians to different providers over several years. It also produces a personnel record with consistent documentation, which is what a client audit examines.'],
  ['Which certification should I take first?',
    'For most people a method-level Level II in the method their work actually uses — usually UT or RT in fixed equipment, MT or PT in fabrication. API 510, API 570 or API 653 come later, once documented inspection experience exists, because those certifications assume it. Taking an API inspector certification before the underlying experience exists is a common and expensive sequencing mistake.'],
];

const METHOD_CITY_FAQS = (method, city) => [
  [`Do you provide ${method} services in ${city}?`,
    `Yes. ${method} examinations in ${city} are performed to written procedures qualified against the governing code, by technicians certified for the method and level under ASNT SNT-TC-1A or ISO 9712, using instruments, probes and reference blocks with current calibration traceable under ISO 17025. An ASNT NDT Level III reviews and signs the final disposition.`],
  ['How quickly can a crew mobilise?',
    'Mobilisation depends far more on site access requirements than on crew availability — permits, inductions, client-specific approvals and, where radiography is involved, radiation-safety arrangements typically govern the schedule. Those requirements are confirmed at quotation stage so the timeline reflects reality rather than an optimistic assumption about gate access.'],
  ['What do I receive at the end of the examination?',
    'A report in your required format with indications located against the component and, where relevant, against a persistent corrosion monitoring location so trends stay continuous between campaigns; raw data in the instrument-native format plus an open export; and the procedure revision, technician certification state and instrument calibration status applicable at the time of examination — which is the bundle a client or accreditation audit asks for.'],
  ['Can results be delivered into our own maintenance system?',
    'Yes. Findings can be delivered as notifications or work orders into SAP PM, Oracle eAM, IBM Maximo or ServiceNow, or onto a 3D asset model where remaining life and risk-based inspection ranking update as new data arrives. The intent is that results land where your team already works rather than in a separate report archive.'],
  ['Which code will the examination be performed to?',
    'The code governing the item — ASME Section VIII for pressure vessels, ASME B31.3 for process piping, API 510, API 570 or API 653 in service, AWS D1.1 for structural steel, API 1104 for pipeline girth welds. The applicable code and edition are agreed before mobilisation and recorded against the examination so the disposition can be reconstructed later.'],
];

/* ────────────────────────────────────────────────────────────────────────────
 * Renderer
 * ────────────────────────────────────────────────────────────────────────── */

const METHOD_LABELS = {
  'ultrasonic-testing': 'Ultrasonic testing',
  'radiographic-testing': 'Radiographic testing',
  'magnetic-particle-testing': 'Magnetic particle testing',
  'penetrant-testing': 'Liquid penetrant testing',
  'eddy-current-testing': 'Eddy current testing',
  'visual-testing': 'Visual testing',
};

function faqsFor(path) {
  if (AUTHORED_FAQS[path]) return AUTHORED_FAQS[path];

  let m = path.match(/^\/3d-scanning-([a-z0-9-]+)$/);
  if (m && m[1] !== 'services') return SCANNING_FAQS(label(m[1]));

  m = path.match(/^\/ndt-training-([a-z0-9-]+)$/);
  if (m) return TRAINING_FAQS(label(m[1]));

  m = path.match(/^\/(ultrasonic-testing|radiographic-testing|magnetic-particle-testing|penetrant-testing|eddy-current-testing|visual-testing)-([a-z0-9-]+)$/);
  if (m) return METHOD_CITY_FAQS(METHOD_LABELS[m[1]], label(m[2]));

  return null;
}

/**
 * Render authored Q&A into pages that have real demand but no Q&A of their own.
 * The post-pass then derives FAQPage schema from what is now visible, so page
 * and schema cannot disagree.
 *
 * @param routes  final prerender route list
 * @param append  the append(route, html) helper from thin-page-upgrade
 * @param demand  GSC page-level snapshot, keyed by path
 */
export function addAuthoredFaqs(routes, append, demand = {}, { minImpressions = 100 } = {}) {
  let n = 0;
  for (const r of routes) {
    if (r.path.includes(':') || r.noindex || !r.bodyContent) continue;
    if (/Frequently [Aa]sked/.test(r.bodyContent)) continue;
    const authored = AUTHORED_FAQS[r.path];
    if (!authored && (demand[r.path]?.i || 0) < minImpressions) continue;
    const faqs = faqsFor(r.path);
    if (!faqs || faqs.length < 3) continue;

    append(r, `
    <section aria-label="Frequently asked questions">
      <h2>Frequently Asked Questions</h2>
      ${faqs.map(([q, a]) => `<div><h3>${esc(q)}</h3><p>${esc(a)}</p></div>`).join('\n      ')}
    </section>`);
    n++;
  }
  return n;
}
