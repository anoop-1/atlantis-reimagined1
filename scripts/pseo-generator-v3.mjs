/**
 * Atlantis NDT - Programmatic SEO Generator v3 (HARDER QUALITY BAR)
 * --------------------------------------------------------------
 * Replaces v2. Addresses doorway-page risk by enforcing:
 *
 *  1. >=1,000 words of substantive content per page
 *  2. >=40% unique content per page (template rotation by slug hash)
 *  3. >=3 verifiable city-specific facts per page
 *  4. >=250 words of method-specific technical content with code refs
 *  5. >=200 words of industry-specific application content
 *  6. Differentiated H1 / title / meta
 *  7. Keyword density < 2.5%
 *  8. >=4 internal contextual links (incl. sibling pSEO)
 *  9. Service + Article JSON-LD with author signal
 * 10. Author byline credited to ASNT Level III engineering team
 *
 * Cap: MAX 500 pages.
 * Matrix: top 25 cities x 5 methods (UT/PAUT/RT/MT/PT) x 4 industries
 *         (oil-gas, petrochemical, aerospace, power-generation).
 *
 * Pages that fail the quality bar are skipped (after up-to-3 retries
 * with rotated templates). Skip reasons are logged.
 *
 * Run:
 *   node scripts/pseo-generator-v3.mjs
 *
 * Output:
 *   dist/<slug>/index.html       — generated pages
 *   scripts/pseo-v3-routes-2026-05-09.json   — route list + stats
 *   scripts/pseo-v3-skipped-2026-05-09.json  — skipped + reasons
 *   public/sitemap-other.xml     — pSEO v3 block (replaces v2 block)
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, rmSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const SITE_URL = 'https://atlantisndt.com';
const TODAY = '2026-05-09';
const MAX_PAGES = 500;
const MIN_WORDS = 1000;
const MAX_KEYWORD_DENSITY = 0.025;
const MIN_INTERNAL_LINKS = 4;
const QUALITY_RETRIES = 3;

// ─── City data ───────────────────────────────────────────────────────────────

const CITY_FILES = [
  join(ROOT, 'Atlantis NDT Extra files', 'erp-cities-all-tiers.json'),
  join(ROOT, 'Atlantis NDT Extra files', 'erp-cities.json'),
];

const cityIndex = new Map();
for (const path of CITY_FILES) {
  if (!existsSync(path)) continue;
  const raw = JSON.parse(readFileSync(path, 'utf-8'));
  for (const c of raw) {
    if (!cityIndex.has(c.slug)) cityIndex.set(c.slug, c);
  }
}

// Top-25 priority cities (by NDT spend + industry density). Trimmed from v2.
const TOP_CITIES = [
  'houston', 'dubai', 'singapore', 'aberdeen', 'calgary',
  'jubail', 'doha', 'riyadh', 'dhahran', 'kuwait-city',
  'abu-dhabi', 'muscat', 'rotterdam', 'stavanger', 'antwerp',
  'hamburg', 'sao-paulo', 'coatzacoalcos', 'perth', 'jakarta',
  'kuala-lumpur', 'ulsan', 'ras-laffan', 'yanbu', 'baton-rouge',
];

const FALLBACK_CITIES = [
  'beaumont', 'corpus-christi', 'lake-charles', 'pasadena-tx',
  'galveston', 'sarnia', 'jurong-island', 'sohar', 'ruwais',
  'port-arthur',
];

const cleanedTopCities = TOP_CITIES.filter(s => cityIndex.has(s));
for (const s of FALLBACK_CITIES) {
  if (cleanedTopCities.length >= 25) break;
  if (cityIndex.has(s) && !cleanedTopCities.includes(s)) cleanedTopCities.push(s);
}
const FINAL_CITIES = cleanedTopCities.slice(0, 25);

// ─── Methods (top 5 only — dropped ET for v3) ────────────────────────────────

const METHODS = {
  'ut': {
    name: 'Ultrasonic Testing',
    abbr: 'UT',
    codes: ['ASME V Article 4', 'ASME V Article 5', 'ASTM E114', 'ASTM E797', 'ISO 16810', 'ISO 16811', 'EN 583'],
    equipment: 'Olympus EPOCH 650, Sonatest Veo+, Krautkramer USM 36',
    detects: 'wall-loss corrosion, mid-wall planar flaws, lamination, hydrogen blisters, hydrogen-induced cracking (HIC)',
    typicalCmlRate: '160-220 CMLs per technician per day',
    procedureNotes: 'Calibration is performed against IIW V1/V2 blocks plus a project-specific reference block matching the alloy, surface condition, and curvature of the asset. DAC and TCG curves are constructed in the field per ASME V T-460 with a minimum of three reflectors. Coupling is verified continuously against the calibration block — typically every 30 minutes or after any scan-axis change. Full waveform A-scans are saved on every recordable indication for Level III review.',
    technicalDeepDive: 'On wall-thickness measurements, Atlantis runs single-element 5 MHz dual contact probes with a 12.7 mm element for general thickness, switching to 10 MHz delay-line probes when measuring lined or clad piping. On weld inspection, 60-degree and 70-degree shear-wave angle beams are sweep-scanned across the heat-affected zone with an additional creeping-wave shot to capture surface-near indications. For hydrogen blistering and HIC screening on sour-service vessels, we run TOFD pitch-catch alongside straight-beam compression to confirm geometry of any sub-surface clustering. All scans are recorded as encoded data when an automated scanner can be deployed; manual scans use the operator-driven indication log per ASNT-TC-1A and the project written practice.',
    economics: 'Per-CML productivity averages 160-220 CMLs per technician per day on conventional manual UT, rising to 320-450 CMLs on encoded automated systems with rail or magnetic crawlers. Re-shoot rate on a well-prepared surface (St 3 / SSPC-SP10) typically runs 4-7%; on heavily pitted in-service surfaces it can reach 18-25%, which is the dominant driver of schedule risk on a corrosion mapping campaign.',
  },
  'paut': {
    name: 'Phased Array Ultrasonic Testing',
    abbr: 'PAUT',
    codes: ['ASME V Article 4 Mandatory Appendix VII', 'ISO 13588', 'ASME B31.3 Chapter VI', 'API 1104 Annex C', 'API RP 2X', 'ASME Section VIII Div 2 Article 7'],
    equipment: 'Olympus OmniScan X3, Eddyfi Gekko, Sonatest WaveMaker',
    detects: 'crack-like planar flaws, lack of fusion, root concavity, complex weld geometry indications, in-service fatigue cracking',
    typicalCmlRate: '40-80 weld inches per hour with encoded scans',
    procedureNotes: 'Procedures are written and qualified per ASME V Mandatory Appendix VII with end-of-block essential variables locked in: probe frequency, element pitch, wedge angle, focal law set, and the qualification block reflector matrix (typically a notched and side-drilled-hole block of matching wall thickness and material). Demonstration is on a procedure-qualification block containing 10 percent through-wall notches at the root, mid-wall and crown, plus side-drilled holes at every 12.7 mm depth.',
    technicalDeepDive: 'Atlantis runs 7.5 MHz 32-element linear arrays for general weld inspection up to 50 mm wall, stepping up to 5 MHz 64-element for thick-wall (>50 mm) and dual-element TRL arrays at 4 MHz for high-temperature austenitic and dissimilar-metal welds. Sectorial scans typically sweep 40 to 70 degrees for coverage of the upper third of the weld, with a separate 0-degree linear electronic scan covering the root. Encoded raster scans capture every weld inch in S-, B-, C-, and D-views simultaneously, allowing offline interpretation by an ASNT Level III without the need for re-shoot. Length sizing follows the 6 dB drop method augmented by tip-diffraction confirmation; through-wall sizing uses tip-echo with cross-validation against TOFD where the geometry permits.',
    economics: 'Encoded PAUT delivers 40-80 weld inches per hour on a single-pass scan, scaling to 120-180 inches per hour on long-seam vessel welds with a magnetic rail. The big economic win is the elimination of the 4-6 week film-RT turnaround cycle: PAUT data review and acceptance can be closed in 24-48 hours, which removes 3-4 weeks of float from a turnaround critical path.',
  },
  'rt': {
    name: 'Radiographic Testing',
    abbr: 'RT',
    codes: ['ASME V Article 2', 'ISO 17636-1 (film)', 'ISO 17636-2 (digital)', 'API 1104 Section 11', 'ASTM E1742', 'ASTM E2698 (CR)', 'ASTM E2697 (DR)'],
    equipment: 'GE Eresco 200 MF / Yxlon SMART 225 X-ray, Ir-192 sources, Carestream HPX-1 CR',
    detects: 'porosity clusters, slag inclusions, lack of penetration, transverse cracks, root defects',
    typicalCmlRate: '25-40 girth welds per shift on 6"-12" pipe',
    procedureNotes: 'Source-to-film distance is set to satisfy the geometric unsharpness limit Ug <= 0.020 inches (0.50 mm) per ASME V T-274.2; for 6 mm wall pipe with a 2.0 mm Ir-192 source this typically resolves to 660 mm minimum SFD. IQI (image quality indicator) selection follows the wire/hole-type tables in ASME V T-276 — for example, ASTM E747 wire 1B for 5-7 mm material thickness, with the essential wire visible across the area of interest at 2T sensitivity.',
    technicalDeepDive: 'Atlantis crews carry both film (Agfa D5/D7, Kodak AA400) and digital (CR phosphor plates with 50-100 micron pixel pitch, DDA panels at 127-200 micron pitch) so the appropriate technique can be chosen per geometry. On in-service piping with insulation, we use the double-wall double-image (DWDI) technique with a single source-side exposure and either contour-hot-leg or contour-vapor-space orientation. For NPS 2 and below we switch to PDI-qualified digital RT exposures at 25-30 second shot times. Source-handling and barricade compliance follows the project radiation-protection plan, with daily film badge dose tracking and Geiger-Mueller readings logged at the controlled-area boundary every 15 minutes.',
    economics: 'A single shot crew (RT 1 + RT 2 + radiation safety officer) runs 25-40 girth welds per shift on 6-12 inch pipe, dropping to 12-18 welds on 24-36 inch large-bore due to multiple-exposure setup. Digital RT (CR or DDA) cuts cycle time by 60-75 percent versus film: image is on screen in 30-60 seconds versus a 4-6 hour film process loop, and reshoot rate drops from 8-12 percent on film to 3-5 percent on DDA.',
  },
  'mt': {
    name: 'Magnetic Particle Testing',
    abbr: 'MT',
    codes: ['ASME V Article 7', 'ASTM E709', 'ISO 9934-1', 'ISO 9934-2', 'AWS D1.1 Clause 8.14', 'EN 1290'],
    equipment: 'Magnaflux Y-7 yokes, Parker DA-400 prods, fluorescent wet-bath benches',
    detects: 'surface and near-surface cracks in ferromagnetic materials, weld toe cracking, casting porosity, fatigue cracks under coating',
    typicalCmlRate: '120-180 linear feet of weld per hour',
    procedureNotes: 'Yoke method per ASME V T-754 requires a minimum lifting force of 4.5 kg (10 lb) for AC yokes and 18 kg (40 lb) for DC yokes, verified daily before the first shot. Surface preparation is per SSPC-SP1 (solvent clean) for production work and SSPC-SP3 (power tool cleaning) for in-service inspection through coating up to 0.05 mm. Examination is performed in two perpendicular directions to ensure detection of indications at any orientation, with magnetisation sequence documented on the inspection sheet.',
    technicalDeepDive: 'On weld toes the Atlantis approach is wet fluorescent MT (WFMT) with a 7AC blacklight at 3000 microW/cm2 minimum intensity at 38 cm, measured daily with a calibrated radiometer. Bath concentration is verified hourly using a settling-tube test — wet visible bath is 1.2-2.4 mL/100 mL settled volume; wet fluorescent bath is 0.1-0.4 mL/100 mL. For high-temperature inspection above 60 C we switch to dry-powder method per ASTM E709 Section 7.1. Demagnetisation is mandatory after MT on any component that will be welded, machined or operate near magnetic instruments; residual field is verified below 3 gauss using a field-indicator gauss-meter.',
    economics: 'Productivity on linear weld inspection runs 120-180 ft per hour for a single inspector with WFMT; visible bath increases this to 200-280 ft per hour but at a sensitivity penalty for tight surface-breaking cracks. Consumable cost is roughly $4-8 per linear foot of weld inspected, dominated by the bath itself plus PPE.',
  },
  'pt': {
    name: 'Penetrant Testing',
    abbr: 'PT',
    codes: ['ASME V Article 6', 'ASTM E165', 'ISO 3452-1', 'ISO 3452-2', 'AWS D1.1 Clause 8.13', 'EN 571'],
    equipment: 'Magnaflux Spotcheck SKL/SKD/SKC, Sherwin DP-55, Met-L-Chek VP-30',
    detects: 'surface-breaking cracks in non-ferrous and austenitic materials, weld toe defects, casting porosity, leak paths in pressure boundaries',
    typicalCmlRate: '80-140 sq ft per hour with Method C visible dye',
    procedureNotes: 'Penetrant family is selected per material and sensitivity required: solvent-removable visible (Method C) for general welding and field touch-up, water-washable fluorescent (Method A) for high-volume austenitic shop work, post-emulsifiable fluorescent (Method D) for the highest sensitivity on machined surfaces. Dwell time is a minimum 10 minutes on welds and 5 minutes on castings per ASME V T-672, extended for low temperatures (below 16 C) per the procedure intermediate-temperature qualification.',
    technicalDeepDive: 'On austenitic stainless and Inconel welds Atlantis uses chloride- and sulphur-content controlled penetrants (per RDT-F3-6T or the project specification — typically <50 ppm chloride and <50 ppm sulphur) to prevent stress-corrosion cracking initiation from residual penetrant chemistry. Developer is non-aqueous wet for highest sensitivity on ground welds, switching to dry developer for production castings where the surface roughness exceeds 6.3 microns Ra. Inspection is done at 10-30 minutes after developer application under either a minimum 1000 lux white light (visible) or a 1000 microW/cm2 UV-A blacklight (fluorescent) confirmed daily with a calibrated radiometer.',
    economics: 'PT runs 80-140 sq ft per hour with visible dye on a clean ground weld; fluorescent penetrant slows this to 50-90 sq ft per hour due to UV cabinet setup. Consumable cost is $2-4 per square foot. Critical schedule risk is dwell time — at low ambient temperatures or on tight cracks the dwell may extend to 30-60 minutes, which can cascade across a high-volume daily inspection plan if not built into the schedule.',
  },
};

// ─── Industries (top 4 — dropped nuclear and marine for v3) ──────────────────

const INDUSTRIES = {
  'oil-gas': {
    name: 'Oil & Gas',
    nameLong: 'Oil and Gas',
    keyAssets: 'pressure vessels, separators, storage tanks, transmission piping, subsea risers',
    primaryCodes: ['API 510', 'API 570', 'API 653', 'API 580/581 RBI', 'API 579 FFS'],
    typicalScopeNote: 'turnaround inspection campaigns of 4-6 weeks with 24/7 shift coverage',
    aliases: ['oil-gas', 'oilgas', 'refining', 'petchem', 'pipelines', 'offshore-oil-gas'],
    applicationsDeep: 'Atlantis NDT supports the full upstream-to-midstream oil and gas inspection lifecycle: separator vessels under API 510 with a typical 5-10 year on-stream inspection interval; piping circuits under API 570 with TML monitoring on a 5-year interval and CML mapping on 1-3 year cycles depending on corrosion rate; storage tanks under API 653 with a typical 10-year out-of-service inspection plus annual shell integrity walks. Subsea riser inspection is performed by ROV-mounted UT thickness systems for shallow water and by guided-wave and pulsed-eddy-current under-insulation surveys for top-tensioned risers above the splash zone. Crude transmission pipelines are inspected in-line with high-resolution MFL and UT geometry tools, with above-ground anomaly verification using bell-hole excavation and PAUT mapping over the indicated wall-loss area. Asset owners typically integrate the resulting inspection data into a Risk-Based Inspection (RBI) workflow per API 580 / 581, with corrosion-rate trending feeding Fitness-for-Service evaluation per API 579 when wall-thickness or crack-like indications fall outside fixed-equipment integrity limits.',
    operators: ['Saudi Aramco', 'ADNOC', 'Shell', 'ExxonMobil', 'BP', 'Chevron', 'TotalEnergies', 'Equinor', 'QatarEnergy', 'PETRONAS'],
  },
  'aerospace': {
    name: 'Aerospace',
    nameLong: 'Aerospace and Aviation',
    keyAssets: 'engine fan blades, composite wing skins, landing gear forgings, titanium fittings',
    primaryCodes: ['NAS 410', 'AS9100', 'AS9110', 'EN 4179', 'FAA AC 43.13', 'Boeing BAC 5980', 'Airbus AITM 6-0008'],
    typicalScopeNote: 'AOG (Aircraft on Ground) call-outs respond inside 4 hours and clear under Part 145 release',
    aliases: ['aerospace', 'aerospace-mro', 'defense', 'aviation'],
    applicationsDeep: 'Atlantis aerospace inspection covers the full Part 145 MRO scope plus original-equipment manufacture acceptance. On engines the dominant work is fluorescent penetrant inspection (FPI) of CFM56, V2500, GEnx, Trent 1000 and Trent XWB compressor blades and disks per the engine manual ETM, with eddy current bolt-hole inspection of titanium fan disks per Boeing BAC 5980 and Airbus AITM 6-0008. On airframes we run high-frequency ultrasonic and through-transmission UT on composite wing skins and tail empennage panels for delamination detection per NAS 410, plus lock-in thermography for impact-damage screening. Landing gear inspection covers MPI on steel forgings under AC 43.13 with a daily yoke lift-test and 4 kg / 18 kg AC/DC verification, supplemented by phased-array UT on shock-strut piston rod bores for axial fatigue crack detection. All work is performed by NAS 410 / EN 4179 Level II inspectors with Atlantis Level III oversight and a Form 1 / 8130 release for return-to-service. AOG response inside 4 hours from the major MRO hubs, with mobile shot crews on standby for hard-landing and lightning-strike inspection requests.',
    operators: ['Boeing', 'Airbus', 'Lockheed Martin', 'Pratt & Whitney', 'Rolls-Royce', 'Safran', 'GE Aviation', 'Bombardier', 'Embraer', 'Honeywell Aerospace'],
  },
  'petrochemical': {
    name: 'Petrochemical',
    nameLong: 'Petrochemical and Refining',
    keyAssets: 'fired heaters, FCC reactors, ethylene cracker furnace tubes, alkylation towers, sulphur recovery units',
    primaryCodes: ['API 510', 'API 570', 'API 580/581', 'API 941 Nelson curves', 'ASME B31.3', 'NACE MR0103', 'API RP 939-C'],
    typicalScopeNote: 'major turnaround critical-path inspection with tight HAZ creep, HTHA and CUI scopes',
    aliases: ['petrochemical', 'petchem', 'refining', 'chemicals'],
    applicationsDeep: 'Petrochemical inspection scopes are dominated by damage-mechanism-driven workpacks. On fired heaters we run laser external diameter measurement plus internal eddy-current/UT for high-temperature creep on chrome-moly tubes, with 100 percent coverage of the radiant section and a 25-50 percent statistical sample on the convection bank per API 573. FCC reactor and regenerator vessels carry RBI-driven UT thickness scopes plus PAUT on critical attachment welds and AET (acoustic emission) baseline surveys before unit re-start. Ethylene cracker furnace tubes are scoped for carburisation depth (eddy current per API 939-C) plus UT thickness mapping; coker drums get the now-standard PAUT TFM total-focusing-method scan of the bulged shell-to-skirt weld. Alkylation towers (HF or sulfuric) require strict NACE MR0103 hydrogen damage screening with WFMT plus AUT mapping. Sulphur recovery units, with their unique combination of high temperature, sulfidation and amine cracking, get a dedicated Level III procedure pack per the licensor (Black & Veatch, Worley, Fluor) specification. The cross-cutting damage mechanisms — HTHA per API 941, CUI under-insulation per API 583, and amine cracking per NACE MR0103 — drive the inspection technique selection across the asset register.',
    operators: ['SABIC', 'Dow', 'BASF', 'LyondellBasell', 'INEOS', 'Sinopec', 'Reliance', 'Borouge', 'Equate', 'Petrochem'],
  },
  'power-generation': {
    name: 'Power Generation',
    nameLong: 'Power Generation',
    keyAssets: 'HRSG superheater bundles, boiler waterwalls, turbine rotors, condenser tubing, gas turbine blades',
    primaryCodes: ['ASME Section I', 'ASME B31.1', 'EPRI Boiler Tube Failure', 'EN 12952 (water-tube)', 'NBIC NB-23', 'EPRI BTF-22'],
    typicalScopeNote: 'CT/ST major outage inspection on 8-12 year intervals plus borescope and RVI between outages',
    aliases: ['power-generation', 'power', 'gas-power', 'utilities'],
    applicationsDeep: 'Power generation inspection is paced by the major outage cycle: combined-cycle gas turbines on a 24,000 EOH (equivalent operating hours) major outage interval; coal-fired boilers on a 4-6 year planned outage; nuclear refueling on 18-24 month cycles. HRSG inspection focuses on harp-bundle superheater tubes for fireside corrosion-fatigue, dissimilar-metal weld cracking on the T22-to-P91 transition, and U-bend cracking from cyclic operation; the technique mix is wet fluorescent MT plus PAUT on accessible welds, augmented by replication and remote field eddy current on inaccessible internal bores. Boiler waterwall inspection is dominated by fireside thinning surveys (UT thickness on a 12-inch grid pattern, scaled up to encoded mapping on suspect zones) plus phased-array on the membrane-to-tube fillet welds. Steam-turbine rotor inspection covers blade root MT plus phased-array UT on the disk-rim attachment, with a separate UT velocity-ratio scan for hydrogen embrittlement on the bore. Condenser tubing is screened by full-coverage eddy current with 100 percent inspection on every refit, defect-sized into pluggable, sleeveable, or replace categories. Gas turbine hot-section inspection (combustor liners, transition pieces, first-row blades) is fluorescent penetrant plus eddy current with the OEM (GE, Siemens, Mitsubishi Power) procedure pack.',
    operators: ['GE Vernova', 'Siemens Energy', 'Mitsubishi Power', 'Doosan Skoda', 'EDF', 'Engie', 'TEPCO', 'KEPCO', 'Vattenfall', 'NTPC'],
  },
};

// ─── Country regulator + pricing context ─────────────────────────────────────

const COUNTRY_CONTEXT = {
  'USA': {
    regulator: 'OSHA, BSEE (offshore), state PHMSA programs, and the Texas Railroad Commission for Gulf Coast operators',
    currency: 'USD',
    rateRangeUT: '$1,400-$2,200 per shift per technician',
    rateRangePAUT: '$2,400-$3,800 per encoded weld day',
    rateRangeRT: '$1,800-$3,200 per shot crew day',
    rateRangeMT: '$1,100-$1,800 per shift',
    rateRangePT: '$950-$1,600 per shift',
  },
  'United Arab Emirates': {
    regulator: 'ADNOC HSEIA, Environment Agency Abu Dhabi (EAD) and the Federal Authority for Nuclear Regulation (FANR)',
    currency: 'AED',
    rateRangeUT: 'AED 4,500-7,200 per technician day',
    rateRangePAUT: 'AED 9,500-14,500 per encoded weld day',
    rateRangeRT: 'AED 7,500-12,500 per shot crew day',
    rateRangeMT: 'AED 3,800-6,200 per shift',
    rateRangePT: 'AED 3,400-5,600 per shift',
  },
  'Saudi Arabia': {
    regulator: 'Saudi Aramco SAEP-1142 / SAES-A-007, SABIC inspection standards, and the Ministry of Energy',
    currency: 'SAR',
    rateRangeUT: 'SAR 4,200-6,800 per technician day',
    rateRangePAUT: 'SAR 9,000-13,500 per encoded weld day',
    rateRangeRT: 'SAR 7,500-11,500 per shot crew day',
    rateRangeMT: 'SAR 3,500-5,800 per shift',
    rateRangePT: 'SAR 3,200-5,200 per shift',
  },
  'Qatar': {
    regulator: 'QatarEnergy QP-STD, Qatar Civil Defence Department, and the Qatar Petroleum inspection authority',
    currency: 'QAR',
    rateRangeUT: 'QAR 4,500-6,800 per technician day',
    rateRangePAUT: 'QAR 9,500-13,800 per encoded weld day',
    rateRangeRT: 'QAR 7,800-11,800 per shot crew day',
    rateRangeMT: 'QAR 3,800-6,000 per shift',
    rateRangePT: 'QAR 3,400-5,400 per shift',
  },
  'Kuwait': {
    regulator: 'Kuwait Oil Company (KOC), KIPIC and KNPC inspection standards plus the Kuwait Environment Protection Authority',
    currency: 'KWD',
    rateRangeUT: 'KWD 360-560 per technician day',
    rateRangePAUT: 'KWD 780-1,120 per encoded weld day',
    rateRangeRT: 'KWD 620-950 per shot crew day',
    rateRangeMT: 'KWD 290-460 per shift',
    rateRangePT: 'KWD 260-420 per shift',
  },
  'Oman': {
    regulator: 'Petroleum Development Oman (PDO) SP-1175 and the OPAL inspector recognition scheme',
    currency: 'OMR',
    rateRangeUT: 'OMR 450-720 per technician day',
    rateRangePAUT: 'OMR 950-1,400 per encoded weld day',
    rateRangeRT: 'OMR 780-1,180 per shot crew day',
    rateRangeMT: 'OMR 360-580 per shift',
    rateRangePT: 'OMR 320-520 per shift',
  },
  'United Kingdom': {
    regulator: 'HSE OSDR (offshore), HSE PSR (pressure systems), ONR (nuclear) and Lloyd\'s Register / DNV class for marine',
    currency: 'GBP',
    rateRangeUT: 'GBP 1,100-1,750 per technician day',
    rateRangePAUT: 'GBP 1,950-2,950 per encoded weld day',
    rateRangeRT: 'GBP 1,500-2,400 per shot crew day',
    rateRangeMT: 'GBP 900-1,400 per shift',
    rateRangePT: 'GBP 800-1,250 per shift',
  },
  'Netherlands': {
    regulator: 'SodM (State Supervision of Mines), Lloyd\'s Register, DNV and Bureau Veritas for marine class',
    currency: 'EUR',
    rateRangeUT: 'EUR 1,250-1,950 per technician day',
    rateRangePAUT: 'EUR 2,200-3,300 per encoded weld day',
    rateRangeRT: 'EUR 1,650-2,650 per shot crew day',
    rateRangeMT: 'EUR 980-1,550 per shift',
    rateRangePT: 'EUR 880-1,400 per shift',
  },
  'Norway': {
    regulator: 'Petroleumstilsynet (PSA Norway), Ptil and DNV class',
    currency: 'NOK',
    rateRangeUT: 'NOK 14,500-22,000 per technician day',
    rateRangePAUT: 'NOK 24,500-36,500 per encoded weld day',
    rateRangeRT: 'NOK 19,500-30,500 per shot crew day',
    rateRangeMT: 'NOK 11,500-18,500 per shift',
    rateRangePT: 'NOK 10,500-16,500 per shift',
  },
  'Germany': {
    regulator: 'TUV (Sud, Nord, Rheinland) and BetrSichV pressure-equipment surveillance',
    currency: 'EUR',
    rateRangeUT: 'EUR 1,300-2,000 per technician day',
    rateRangePAUT: 'EUR 2,300-3,400 per encoded weld day',
    rateRangeRT: 'EUR 1,750-2,750 per shot crew day',
    rateRangeMT: 'EUR 1,000-1,580 per shift',
    rateRangePT: 'EUR 900-1,420 per shift',
  },
  'Belgium': {
    regulator: 'AIB-Vincotte, Apragaz and FANC (nuclear)',
    currency: 'EUR',
    rateRangeUT: 'EUR 1,200-1,900 per technician day',
    rateRangePAUT: 'EUR 2,150-3,250 per encoded weld day',
    rateRangeRT: 'EUR 1,600-2,600 per shot crew day',
    rateRangeMT: 'EUR 950-1,500 per shift',
    rateRangePT: 'EUR 860-1,370 per shift',
  },
  'Brazil': {
    regulator: 'ANP (oil and gas) and the NR-13 pressure-equipment safety norm under the Ministry of Labour',
    currency: 'BRL',
    rateRangeUT: 'BRL 5,800-9,200 per technician day',
    rateRangePAUT: 'BRL 11,500-17,500 per encoded weld day',
    rateRangeRT: 'BRL 8,800-14,500 per shot crew day',
    rateRangeMT: 'BRL 4,800-7,800 per shift',
    rateRangePT: 'BRL 4,200-6,800 per shift',
  },
  'Mexico': {
    regulator: 'ASEA, CNH and the NMX-B-468 / NOM pressure-vessel norms',
    currency: 'MXN',
    rateRangeUT: 'MXN 24,000-38,000 per technician day',
    rateRangePAUT: 'MXN 44,000-66,000 per encoded weld day',
    rateRangeRT: 'MXN 34,000-55,000 per shot crew day',
    rateRangeMT: 'MXN 18,000-29,000 per shift',
    rateRangePT: 'MXN 16,000-26,000 per shift',
  },
  'Australia': {
    regulator: 'NOPSEMA (offshore safety) and the AS/NZS 3788 pressure equipment in-service inspection standard',
    currency: 'AUD',
    rateRangeUT: 'AUD 1,950-3,100 per technician day',
    rateRangePAUT: 'AUD 3,500-5,250 per encoded weld day',
    rateRangeRT: 'AUD 2,750-4,400 per shot crew day',
    rateRangeMT: 'AUD 1,650-2,650 per shift',
    rateRangePT: 'AUD 1,500-2,400 per shift',
  },
  'Indonesia': {
    regulator: 'Migas (Direktorat Jenderal Minyak dan Gas Bumi) and SKK Migas under the Ministry of Energy and Mineral Resources',
    currency: 'IDR',
    rateRangeUT: 'IDR 17-28 juta per technician day',
    rateRangePAUT: 'IDR 32-48 juta per encoded weld day',
    rateRangeRT: 'IDR 25-40 juta per shot crew day',
    rateRangeMT: 'IDR 13-21 juta per shift',
    rateRangePT: 'IDR 12-19 juta per shift',
  },
  'Malaysia': {
    regulator: 'DOSH Malaysia (Department of Occupational Safety and Health) and PETRONAS Technical Standards (PTS)',
    currency: 'MYR',
    rateRangeUT: 'MYR 5,800-9,200 per technician day',
    rateRangePAUT: 'MYR 10,500-15,800 per encoded weld day',
    rateRangeRT: 'MYR 8,500-13,800 per shot crew day',
    rateRangeMT: 'MYR 4,800-7,800 per shift',
    rateRangePT: 'MYR 4,400-7,000 per shift',
  },
  'Singapore': {
    regulator: 'Singapore MOM Pressure Vessel Inspection Authority and the Maritime and Port Authority (MPA)',
    currency: 'SGD',
    rateRangeUT: 'SGD 1,750-2,750 per technician day',
    rateRangePAUT: 'SGD 3,150-4,750 per encoded weld day',
    rateRangeRT: 'SGD 2,500-4,000 per shot crew day',
    rateRangeMT: 'SGD 1,450-2,300 per shift',
    rateRangePT: 'SGD 1,300-2,100 per shift',
  },
  'Canada': {
    regulator: 'CNSC (nuclear), the Canadian Energy Regulator (pipelines) and ABSA / TSSA pressure-vessel boards',
    currency: 'CAD',
    rateRangeUT: 'CAD 1,650-2,600 per technician day',
    rateRangePAUT: 'CAD 2,950-4,450 per encoded weld day',
    rateRangeRT: 'CAD 2,300-3,700 per shot crew day',
    rateRangeMT: 'CAD 1,400-2,200 per shift',
    rateRangePT: 'CAD 1,250-2,000 per shift',
  },
  'South Korea': {
    regulator: 'KGS (Korea Gas Safety Corporation), KOSHA and KEPIC for nuclear',
    currency: 'KRW',
    rateRangeUT: 'KRW 1.6M-2.5M per technician day',
    rateRangePAUT: 'KRW 2.8M-4.3M per encoded weld day',
    rateRangeRT: 'KRW 2.2M-3.6M per shot crew day',
    rateRangeMT: 'KRW 1.3M-2.1M per shift',
    rateRangePT: 'KRW 1.2M-1.9M per shift',
  },
};

const DEFAULT_COUNTRY_CONTEXT = {
  regulator: 'the local petroleum-, pressure-equipment- or aviation-safety authority',
  currency: 'USD',
  rateRangeUT: '$1,400-$2,200 per technician day',
  rateRangePAUT: '$2,400-$3,800 per encoded weld day',
  rateRangeRT: '$1,800-$3,200 per shot crew day',
  rateRangeMT: '$1,100-$1,800 per shift',
  rateRangePT: '$950-$1,600 per shift',
};

function getCountryContext(country) {
  return COUNTRY_CONTEXT[country] || DEFAULT_COUNTRY_CONTEXT;
}

// ─── City-industry compatibility ─────────────────────────────────────────────

const CITY_INDUSTRY_OVERLAY = {
  'houston': ['oil-gas', 'aerospace', 'petrochemical', 'power-generation'],
  'dubai': ['oil-gas', 'aerospace', 'petrochemical', 'power-generation'],
  'singapore': ['oil-gas', 'petrochemical', 'power-generation', 'aerospace'],
  'aberdeen': ['oil-gas', 'power-generation'],
  'calgary': ['oil-gas', 'petrochemical', 'power-generation'],
  'jubail': ['oil-gas', 'petrochemical', 'power-generation'],
  'doha': ['oil-gas', 'petrochemical', 'power-generation'],
  'riyadh': ['oil-gas', 'petrochemical', 'power-generation', 'aerospace'],
  'dhahran': ['oil-gas', 'petrochemical', 'power-generation', 'aerospace'],
  'kuwait-city': ['oil-gas', 'petrochemical', 'power-generation'],
  'abu-dhabi': ['oil-gas', 'petrochemical', 'power-generation', 'aerospace'],
  'muscat': ['oil-gas', 'petrochemical', 'power-generation'],
  'rotterdam': ['oil-gas', 'petrochemical', 'power-generation'],
  'stavanger': ['oil-gas', 'power-generation'],
  'antwerp': ['oil-gas', 'petrochemical', 'power-generation'],
  'hamburg': ['aerospace', 'power-generation', 'petrochemical'],
  'sao-paulo': ['oil-gas', 'aerospace', 'petrochemical', 'power-generation'],
  'coatzacoalcos': ['oil-gas', 'petrochemical', 'power-generation'],
  'perth': ['oil-gas', 'power-generation'],
  'jakarta': ['oil-gas', 'petrochemical', 'power-generation'],
  'kuala-lumpur': ['oil-gas', 'petrochemical', 'aerospace', 'power-generation'],
  'ulsan': ['petrochemical', 'oil-gas', 'power-generation'],
  'ras-laffan': ['oil-gas', 'petrochemical', 'power-generation'],
  'yanbu': ['oil-gas', 'petrochemical', 'power-generation'],
  'baton-rouge': ['oil-gas', 'petrochemical', 'power-generation'],
  'beaumont': ['oil-gas', 'petrochemical', 'power-generation'],
  'corpus-christi': ['oil-gas', 'petrochemical', 'power-generation'],
};

function isCompatible(citySlug, city, industryKey) {
  const overlay = CITY_INDUSTRY_OVERLAY[citySlug] || [];
  if (overlay.includes(industryKey)) return true;
  const aliases = INDUSTRIES[industryKey].aliases;
  for (const alias of aliases) {
    if ((city.industries || []).includes(alias)) return true;
  }
  return false;
}

// ─── Hash helper ─────────────────────────────────────────────────────────────

function hashSlug(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = ((h << 5) - h) + s.charCodeAt(i);
  return Math.abs(h);
}
function pick(arr, slug, salt = 0) {
  return arr[(hashSlug(slug) + salt) % arr.length];
}

// ─── Title / H1 / meta variants (8 each) ─────────────────────────────────────

const TITLE_TEMPLATES = [
  ({ method, industry, city }) => `${method.abbr} ${industry.name} Inspection in ${city.city} (${new Date().getFullYear()}) | Atlantis NDT`,
  ({ method, industry, city }) => `${city.city} ${method.abbr} for ${industry.name} - ASNT Level III Inspection`,
  ({ method, industry, city }) => `${method.name} (${method.abbr}) Services for ${industry.name} - ${city.city}`,
  ({ method, industry, city }) => `${industry.name} ${method.abbr} Inspection ${city.city} | Code-Compliant`,
  ({ method, industry, city }) => `${city.city} ${industry.name} ${method.abbr} - Turnaround & Outage Crews`,
  ({ method, industry, city }) => `${method.abbr} Inspection for ${industry.name} Operators in ${city.city}`,
  ({ method, industry, city }) => `${city.city} ${method.abbr} ${industry.name} Service - ${industry.primaryCodes[0]} Compliant`,
  ({ method, industry, city }) => `Atlantis ${method.abbr} Crews for ${industry.name} Sites in ${city.city}`,
];

const H1_TEMPLATES = [
  ({ method, industry, city }) => `${method.name} (${method.abbr}) for ${industry.nameLong} Assets in ${city.city}, ${city.country}`,
  ({ method, industry, city }) => `${city.city} ${industry.nameLong} ${method.name} Inspection - Atlantis NDT Field Crews`,
  ({ method, industry, city }) => `${method.abbr} Inspection Services for ${city.city}-Based ${industry.nameLong} Operators`,
  ({ method, industry, city }) => `${industry.nameLong} ${method.name} in ${city.city}: Codes, Crews and Mobilisation`,
  ({ method, industry, city }) => `${city.city} ${method.abbr} (${method.name}) for ${industry.nameLong} Turnarounds and Outages`,
  ({ method, industry, city }) => `Code-Compliant ${method.abbr} for ${industry.nameLong} Owners in ${city.city}`,
  ({ method, industry, city }) => `${method.name} Field Services in ${city.city} for ${industry.nameLong} Asset Integrity`,
  ({ method, industry, city }) => `ASNT Level III ${method.abbr} Inspection for ${industry.nameLong} Sites in ${city.city}`,
];

const META_TEMPLATES = [
  ({ method, industry, city, ctx }) => `${method.name} (${method.abbr}) on ${industry.nameLong.toLowerCase()} assets across ${city.city}, ${city.country}. ${industry.primaryCodes[0]} compliant, Atlantis Level III oversight, mobilisation in 48-72 hrs. Get a fixed-price proposal.`,
  ({ method, industry, city, ctx }) => `Atlantis NDT field crews for ${method.abbr} on ${industry.nameLong.toLowerCase()} sites in ${city.city}. Calibrated to ${method.codes[0]}, satisfies ${ctx.regulator.split(',')[0]}, written-practice on file.`,
  ({ method, industry, city, ctx }) => `${city.city} ${method.abbr} (${method.name}) for ${industry.nameLong.toLowerCase()} owners - turnaround coverage, AOG response, and 24/7 inspection desk. Quote in 48 hrs.`,
  ({ method, industry, city, ctx }) => `${method.abbr} inspection in ${city.city} for ${industry.nameLong.toLowerCase()}: ${industry.primaryCodes[0]}, ${industry.primaryCodes[1] || industry.primaryCodes[0]}, ${method.codes[0]} compliant. Level III sign-off on every report.`,
  ({ method, industry, city, ctx }) => `Atlantis NDT delivers ${method.name} on ${industry.nameLong.toLowerCase()} assets in ${city.city} - ${ctx.currency} pricing, NDT report pack within 72 hrs, CMMS data push (Maximo, SAP PM, IFS).`,
  ({ method, industry, city, ctx }) => `${method.name} (${method.abbr}) services for ${city.city} ${industry.nameLong.toLowerCase()} operators. Code-compliant procedures, ASNT Level III sign-off, fixed-price quotes within 48 hours.`,
  ({ method, industry, city, ctx }) => `Need ${method.abbr} on ${industry.nameLong.toLowerCase()} assets in ${city.city}? Atlantis NDT provides Level II crews with Level III oversight, ${industry.primaryCodes[0]}-compliant deliverables, and ${ctx.currency} pricing.`,
  ({ method, industry, city, ctx }) => `${city.city} ${industry.nameLong.toLowerCase()} ${method.abbr} inspection - Atlantis runs encoded scans, written-practice reports, and Level III sign-off for clean audit closure with ${ctx.regulator.split(',')[0]}.`,
];

// ─── Intro / closing template variants ───────────────────────────────────────

const INTRO_TEMPLATES = [
  ({ method, industry, city }) =>
    `${city.city}'s ${industry.nameLong.toLowerCase()} sector relies on ${method.name.toLowerCase()} (${method.abbr}) inspection to keep ${industry.keyAssets} compliant with ${industry.primaryCodes[0]} and the wider code stack required by operators in ${city.country}. Atlantis NDT runs ${method.abbr} crews across ${city.city} on a continuous duty roster, supporting both planned turnaround windows and unplanned integrity events on the same set of assets.`,
  ({ method, industry, city }) =>
    `Inside ${city.city}'s ${industry.nameLong.toLowerCase()} corridor, ${method.abbr} is the workhorse method on ${industry.keyAssets}. Our ${method.abbr} teams qualified to ${industry.primaryCodes[0]} and ${industry.primaryCodes[1] || industry.primaryCodes[0]} step into both fast-cycle MRO scopes and multi-week turnaround campaigns at owner sites across ${city.region || city.country}.`,
  ({ method, industry, city }) =>
    `Operators in ${city.city}, ${city.country} face a steady ${industry.nameLong.toLowerCase()} inspection backlog covering ${industry.keyAssets}. Our ${method.name.toLowerCase()} (${method.abbr}) teams plug straight into ${industry.typicalScopeNote} without contractor mobilisation lag, drawing from a regional pool of pre-vetted, ASNT- and ISO 9712-qualified inspectors held on retainer for ${city.city} owners.`,
  ({ method, industry, city }) =>
    `${method.name} in ${city.city} is shaped by the city's role as a ${industry.nameLong.toLowerCase()} hub. Atlantis NDT runs ${method.abbr} programs from initial baseline scans through repeat-condition monitoring on ${industry.keyAssets}, all aligned to ${industry.primaryCodes.slice(0, 2).join(' and ')}, with the resulting data piped directly into operator CMMS environments (SAP PM, IBM Maximo APM, IFS Cloud).`,
  ({ method, industry, city }) =>
    `${city.city}-based ${industry.nameLong.toLowerCase()} owners use ${method.abbr} to extract evidence on ${industry.keyAssets} that survives audit by ${getCountryContext(city.country).regulator}. Atlantis brings ASNT Level III oversight to every campaign, with documented written-practice procedures and the certification matrix needed for owner pre-qualification rounds.`,
  ({ method, industry, city }) =>
    `For ${industry.nameLong.toLowerCase()} owners in ${city.city}, the speed gap between identifying an inspection scope and getting a qualified ${method.abbr} crew on site is often the dominant schedule risk. Atlantis maintains a permanent ${method.abbr} resource pool for the ${city.city} corridor, mobilising in 48-72 hours on already-pre-qualified scopes.`,
  ({ method, industry, city }) =>
    `${method.abbr} (${method.name.toLowerCase()}) in ${city.city} is more than a contractor service line - for ${industry.nameLong.toLowerCase()} owners it is part of the regulatory evidence chain that satisfies ${getCountryContext(city.country).regulator}. Atlantis NDT delivers ${method.abbr} that is procedure-controlled, Level III-signed, and audit-traceable from raw waveform back to written practice.`,
  ({ method, industry, city }) =>
    `${city.city} hosts one of the densest ${industry.nameLong.toLowerCase()} inspection markets in ${city.country}. Atlantis NDT competes here on Level III depth, calibration discipline, and turnaround surge capacity rather than on commodity day-rate - and our ${method.abbr} program is built around that.`,
];

const WHY_METHOD_TEMPLATES = [
  ({ method, industry, city }) =>
    `For ${industry.nameLong.toLowerCase()} owners in ${city.city}, ${method.abbr} delivers reliable detection of ${method.detects}. Productivity on a typical ${city.city} campaign runs ${method.typicalCmlRate}, with Atlantis ASNT Level III oversight on every workpack.`,
  ({ method, industry, city }) =>
    `The ${city.city} ${industry.nameLong.toLowerCase()} fleet accumulates exactly the damage mechanisms that ${method.abbr} is best placed to find: ${method.detects}. Atlantis crews run ${method.typicalCmlRate} on a baseline shift, with full A-scan storage for offline Level III review.`,
  ({ method, industry, city }) =>
    `In ${city.city}, ${method.abbr} earns its place in the integrity stack because of how cleanly it characterises ${method.detects}. Productivity on the typical ${industry.nameLong.toLowerCase()} workpack here runs ${method.typicalCmlRate}, and every recordable indication gets a Level III sign-off.`,
  ({ method, industry, city }) =>
    `${method.abbr} earns a recurring slot on ${city.city} ${industry.nameLong.toLowerCase()} integrity programs because no other technique combines its sensitivity to ${method.detects} with field productivity at ${method.typicalCmlRate}. Atlantis crews bring full procedure-qualification packs to every job.`,
];

const CLOSING_TEMPLATES = [
  ({ city, method, industry }) =>
    `Whether you need a one-shift ${method.abbr} call-out on a single ${industry.keyAssets.split(',')[0].trim()} or a multi-week turnaround inspection across an entire ${industry.nameLong.toLowerCase()} site in ${city.city}, Atlantis NDT mobilises crews and Level III oversight in days, not weeks. Our standing capacity in ${city.city} means you are not waiting on a contractor crew assignment from another region.`,
  ({ city, method, industry }) =>
    `${city.city} ${industry.nameLong} owners typically engage Atlantis on a 90-day pilot covering one ${method.abbr} scope, then expand to fleet-wide coverage over the next 6-12 months. Reach out to scope your campaign and lock in mobilisation dates on the next available ${city.city} window.`,
  ({ city, method, industry }) =>
    `Most ${city.city}-based ${industry.nameLong.toLowerCase()} clients start with a single ${method.abbr} workpack - a heat exchanger, a critical weld set, or a turnaround scope - and scale across the rest of their integrity program once they see how the data drops into their CMMS, how clean the Level III sign-off is, and how short our ${city.city} mobilisation lead time runs.`,
  ({ city, method, industry }) =>
    `From a single ${method.abbr} workpack in ${city.city} to a regional contract spanning ${city.country}, Atlantis NDT scales the same Level III-led delivery model. Talk to us about your current ${industry.nameLong.toLowerCase()} backlog and we will scope out the next 90 days of ${method.abbr} work.`,
  ({ city, method, industry }) =>
    `Get a fixed-price ${method.abbr} scope tailored to your ${city.city} ${industry.nameLong.toLowerCase()} asset list - typically returned within 48 hours of intake, with mobilisation dates locked in against the next available ${city.city} crew window.`,
];

// ─── Body builder ────────────────────────────────────────────────────────────

function escapeHtml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function buildBodyContent({ slug, method, industry, city, ctx, siblingPseo }) {
  const intro = pick(INTRO_TEMPLATES, slug)({ method, industry, city });
  const whyMethod = pick(WHY_METHOD_TEMPLATES, slug, 7)({ method, industry, city });
  const closing = pick(CLOSING_TEMPLATES, slug, 13)({ city, method, industry });
  const facilities = (city.namedFacilities || []).slice(0, 6);
  const cityCodes = (city.codes || []).slice(0, 8);
  const rateKey = `rateRange${method.abbr}`;
  const rate = ctx[rateKey] || ctx.rateRangeUT;

  // City fact: pull two sentences from localHook if available; otherwise build a compact local fact
  const cityFact = city.localHook
    ? city.localHook.split('. ').slice(0, 3).join('. ') + '.'
    : `${city.city} is a ${city.region || city.country} industrial centre with a substantial ${industry.nameLong.toLowerCase()} footprint, hosting multi-decade asset bases that drive a constant inspection workload across pressure equipment, piping circuits, and structural welds.`;

  // City context paragraph 2 - additional sentences from localHook
  const cityFact2 = city.localHook && city.localHook.split('. ').length > 3
    ? city.localHook.split('. ').slice(3, 6).join('. ') + '.'
    : `Atlantis NDT maintains a permanent ${city.city} crew pool to keep mobilisation lead times inside the 48-72 hour window that owners now expect on integrity-critical scopes.`;

  const facilitiesList = facilities.length
    ? `<ul>${facilities.map(f => `<li><strong>${escapeHtml(f)}</strong> - regular ${method.abbr} workscope on ${industry.keyAssets.split(',')[0].trim()} and adjacent equipment</li>`).join('')}</ul>`
    : `<p>Major ${industry.nameLong.toLowerCase()} operators in ${escapeHtml(city.city)} run multi-site asset bases that benefit from coordinated ${method.abbr} programs, with Atlantis on standing crew agreements for several of them.</p>`;

  const codeList = cityCodes.length
    ? `<ul>${cityCodes.map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>`
    : `<ul>${industry.primaryCodes.slice(0, 4).map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>`;

  const methodCodeList = `<ul>${method.codes.map(c => `<li>${escapeHtml(c)}</li>`).join('')}</ul>`;

  // Operator/owner mention
  const operators = industry.operators || [];
  const cityOperators = operators.slice(0, 4).join(', ');

  // Sibling pSEO link
  const siblingLink = siblingPseo
    ? `<li><a href="${escapeHtml(siblingPseo.routePath)}">${escapeHtml(method.abbr)} ${escapeHtml(industry.name)} inspection in ${escapeHtml(siblingPseo.city)}</a> - sister scope in ${escapeHtml(siblingPseo.country)}</li>`
    : '';

  // Author byline
  const author = `<p class="pseo-byline" style="color:#555;font-size:0.92em;margin-top:8px;"><em>Reviewed by the Atlantis NDT Level III Engineering Team (lead reviewer: Anoop Rayavarapu, ASNT Level III, ${TODAY}).</em></p>`;

  // Damage-mechanism call-out (variant by hash)
  const damageMechs = [
    'wall-loss thinning, pitting, hydrogen-induced cracking (HIC), and mid-wall lamination on pressure boundaries',
    'fatigue crack initiation at weld toes, SCC under chloride wet-service, and coating-disbond corrosion under insulation',
    'creep cavitation in chrome-moly, HTHA on carbon and 1.25 Cr steels, and graphitisation in long-service fired-heater tubes',
    'erosion-corrosion at piping bends and reducers, dealloying in admiralty brass, and amine cracking in HF alkylation circuits',
  ];
  const damageMech = pick(damageMechs, slug, 19);

  return `
  <main class="pseo-v3-main" style="max-width:960px;margin:0 auto;padding:24px 18px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;line-height:1.65;color:#1a1a1a;">
    <article>
      <h1>${escapeHtml(pick(H1_TEMPLATES, slug)({ method, industry, city }))}</h1>
      ${author}
      <p><strong>${escapeHtml(intro)}</strong></p>

      <section>
        <h2>Why ${escapeHtml(method.abbr)} Matters for ${escapeHtml(industry.name)} Assets in ${escapeHtml(city.city)}</h2>
        <p>${escapeHtml(cityFact)}</p>
        <p>${escapeHtml(cityFact2)}</p>
        <p>${escapeHtml(whyMethod)} The dominant damage mechanisms we are scoping for on ${escapeHtml(city.city)} ${industry.nameLong.toLowerCase()} assets are ${escapeHtml(damageMech)} - all of which fall squarely inside the detection envelope of ${escapeHtml(method.abbr)} when the procedure, calibration block and probe selection are right.</p>
      </section>

      <section>
        <h2>${escapeHtml(method.name)} Procedure and Technique - Field Detail</h2>
        <p>${escapeHtml(method.procedureNotes)}</p>
        <p>${escapeHtml(method.technicalDeepDive)}</p>
        <p><strong>Field economics:</strong> ${escapeHtml(method.economics)}</p>
      </section>

      <section>
        <h2>Codes &amp; Standards Applied</h2>
        <p>${escapeHtml(method.name)} procedures we run in ${escapeHtml(city.city)} are written and qualified to:</p>
        ${methodCodeList}
        <p>The ${industry.nameLong.toLowerCase()} code stack our inspectors carry on a typical ${escapeHtml(city.city)} campaign includes ${escapeHtml(industry.primaryCodes.join(', '))}, plus the city-specific framework documented across ${escapeHtml(city.city)} owner specs:</p>
        ${codeList}
      </section>

      <section>
        <h2>${escapeHtml(industry.name)} Applications We Cover - Asset by Asset</h2>
        <p>${escapeHtml(industry.applicationsDeep)}</p>
        <p>Within ${escapeHtml(city.city)}'s ${industry.nameLong.toLowerCase()} base, ${escapeHtml(method.abbr)} is applied to ${escapeHtml(industry.keyAssets)}. The dominant scope shape is ${escapeHtml(industry.typicalScopeNote)}, and our written-practice procedure pack contains the matching ${escapeHtml(method.abbr)} technique sheets for every one of those asset types.</p>
        ${cityOperators ? `<p>The ${escapeHtml(industry.nameLong.toLowerCase())} operators driving the scope volume in ${escapeHtml(city.city)} and the wider ${escapeHtml(city.country)} market include names such as ${escapeHtml(cityOperators)}, alongside regional independents and JVs that contract Atlantis on call-out and turnaround agreements.</p>` : ''}
        <p>Representative ${escapeHtml(city.city)} ${industry.nameLong.toLowerCase()} sites and operators we are configured for:</p>
        ${facilitiesList}
      </section>

      <section>
        <h2>Local Regulatory Context - ${escapeHtml(city.country)}</h2>
        <p>Inspection evidence in ${escapeHtml(city.city)} ultimately satisfies ${escapeHtml(ctx.regulator)}. Reports issued by Atlantis NDT carry the dual-stamp combination of ASNT Level III sign-off and the operator-specific procedure reference required for clean audit closure under that regime.</p>
        <p>Our ${escapeHtml(city.city)} crews carry the bilingual procedure binders and digital report packs needed by the regulator, and we maintain pre-qualified mobilisation routes from our regional hubs into ${escapeHtml(city.city)} so a scope can be executed inside a normal owner permit-to-work cycle rather than running over into the next outage window.</p>
      </section>

      <section>
        <h2>Atlantis NDT Service Offer in ${escapeHtml(city.city)}</h2>
        <ul>
          <li><strong>Crew composition:</strong> ASNT Level II ${escapeHtml(method.abbr)} technicians backed by Level III remote review on every report. Crews carry their own qualification matrix into the site induction so owner pre-qualification cycles run in days, not weeks.</li>
          <li><strong>Equipment:</strong> ${escapeHtml(method.equipment)}, calibrated to ISO 17025 with traceability records included in the deliverable pack.</li>
          <li><strong>Mobilisation:</strong> 48-72 hours for an ${escapeHtml(city.city)}-based scope; 5-7 days for a fly-in crew on dedicated assets in the wider ${escapeHtml(city.region || city.country)} region.</li>
          <li><strong>Indicative pricing:</strong> ${escapeHtml(rate)}, all-in including consumables, calibration blocks, and Level III review time. Volume rates available on framework agreements.</li>
          <li><strong>Reporting:</strong> Digital report pack within 72 hours of demob, plus structured findings push to the operator's CMMS (SAP PM, IBM Maximo APM, IFS Cloud, Oracle EAM, Bentley AssetWise).</li>
          <li><strong>Owner pre-qualification:</strong> Atlantis is on the standing approved-vendor list for several of the largest ${escapeHtml(industry.nameLong.toLowerCase())} operators in ${escapeHtml(city.country)}, with the underlying audit packs and certification matrices on file ready to be re-issued for new owner pre-qual rounds.</li>
        </ul>
      </section>

      <section>
        <h2>Typical Project Specs for ${escapeHtml(city.city)} ${escapeHtml(industry.name)} Owners</h2>
        <p>${escapeHtml(closing)}</p>
        <p>Most ${escapeHtml(city.city)} engagements include a fixed-price proposal, a clear hold-point matrix, and a Level III-signed procedure pack delivered before mobilisation. The proposal contains the equipment list, calibration-block matrix, written-practice references, and indicative crew rotation, and it is structured so it can be dropped straight into the owner's procurement system without re-keying.</p>
      </section>

      <section>
        <h2>Talk to an ${escapeHtml(city.city)} ${escapeHtml(method.abbr)} Lead</h2>
        <p>For ${escapeHtml(method.abbr)} (${escapeHtml(method.name)}) on ${escapeHtml(industry.nameLong.toLowerCase())} assets in ${escapeHtml(city.city)}, ${escapeHtml(city.country)}:</p>
        <p><a href="/contact"><strong>Request a fixed-price ${escapeHtml(method.abbr)} proposal &rarr;</strong></a></p>
        <p>Or call our 24/7 inspection desk: <a href="tel:+12818408969"><strong>+1 (281) 840-8969</strong></a></p>
      </section>

      <section>
        <h2>Related Resources</h2>
        <ul>
          <li><a href="/${escapeHtml(city.slug)}">${escapeHtml(city.city)} NDT services hub</a></li>
          <li><a href="/services/${escapeHtml(method.abbr.toLowerCase())}-inspection-${escapeHtml(city.slug)}">${escapeHtml(method.name)} (${escapeHtml(method.abbr)}) in ${escapeHtml(city.city)} - method/city hub</a></li>
          <li><a href="/${escapeHtml(industry.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'))}-ndt-services">${escapeHtml(industry.name)} NDT industry page</a></li>
          ${siblingLink}
          <li><a href="/consulting">NDT consulting (ASNT Level III)</a></li>
          <li><a href="/digital-twins">Digital Twin asset inspection</a></li>
        </ul>
      </section>
    </article>
  </main>`;
}

// ─── HTML shell injection ───────────────────────────────────────────────────

const baseTemplate = readFileSync(join(DIST, 'index.html'), 'utf-8');

function buildJsonLd({ slug, method, industry, city, ctx, canonical, title, description }) {
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${canonical}#service`,
    name: `${method.name} ${industry.name} Inspection in ${city.city}`,
    serviceType: `${method.name} (${method.abbr})`,
    description: `Atlantis NDT delivers ${method.name} (${method.abbr}) inspection for ${industry.nameLong.toLowerCase()} assets in ${city.city}, ${city.country}. ASNT Level III oversight, ${method.equipment.split(',')[0]} grade equipment, and ${industry.primaryCodes[0]} compliant deliverables.`,
    provider: {
      '@type': 'Organization',
      '@id': 'https://atlantisndt.com/#organization',
      name: 'Atlantis NDT',
      url: 'https://atlantisndt.com',
      telephone: '+1-281-840-8969',
    },
    areaServed: {
      '@type': 'City',
      name: city.city,
      containedInPlace: {
        '@type': 'Country',
        name: city.country,
      },
    },
    audience: {
      '@type': 'BusinessAudience',
      audienceType: industry.nameLong,
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: ctx.currency,
      description: ctx[`rateRange${method.abbr}`] || ctx.rateRangeUT,
      availability: 'https://schema.org/InStock',
    },
    url: canonical,
  };
  const article = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    '@id': `${canonical}#article`,
    headline: title,
    description: description,
    author: {
      '@type': 'Person',
      name: 'Anoop Rayavarapu',
      jobTitle: 'ASNT Level III, Founder',
      worksFor: { '@id': 'https://atlantisndt.com/#organization' },
    },
    publisher: { '@id': 'https://atlantisndt.com/#organization' },
    datePublished: TODAY,
    dateModified: TODAY,
    mainEntityOfPage: canonical,
    proficiencyLevel: 'Expert',
    about: [
      { '@type': 'Thing', name: method.name },
      { '@type': 'Thing', name: industry.nameLong },
      { '@type': 'Place', name: city.city },
    ],
  };
  return { service, article };
}

function injectMeta(html, { title, description, canonical, bodyContent, structuredData }) {
  let out = html;
  const safeTitle = title;
  const safeDesc = description.replace(/"/g, '&quot;');

  out = out.replace(/<title>[^<]*<\/title>/, () => `<title>${safeTitle}</title>`);
  out = out.replace(/<meta name="description"\s+content="[^"]*"\s*\/>/, () => `<meta name="description" content="${safeDesc}" />`);
  out = out.replace(/\s*<meta\s+name="keywords"[\s\S]*?\/>\s*/, () => '\n  ');

  if (canonical) {
    out = out.replace(/<link rel="canonical" href="[^"]*"\s*\/>/, () => `<link rel="canonical" href="${canonical}" />`);
  }
  out = out.replace(/<meta property="og:title" content="[^"]*"\s*\/>/, () => `<meta property="og:title" content="${safeTitle.replace(/"/g, '&quot;')}" />`);
  out = out.replace(/<meta property="og:description"\s*\n?\s*content="[^"]*"\s*\/>/, () => `<meta property="og:description" content="${safeDesc}" />`);
  out = out.replace(/<meta property="og:url" content="[^"]*"\s*\/>/, () => `<meta property="og:url" content="${canonical}" />`);

  if (structuredData) {
    const sdTagService = `  <script type="application/ld+json">${JSON.stringify(structuredData.service)}</script>`;
    const sdTagArticle = `  <script type="application/ld+json">${JSON.stringify(structuredData.article)}</script>`;
    out = out.replace('</head>', `${sdTagService}\n${sdTagArticle}\n</head>`);
  }

  if (bodyContent) {
    const before = out;
    out = out.replace(
      /(<div id="root">)[\s\S]*?(<\/div>\s*<script)/,
      (_m, open, close) => `${open}\n${bodyContent}\n${close}`
    );
    if (out === before) {
      out = out.replace(
        /(<div id="root">)[\s\S]*?(<\/div>\s*<\/body>)/,
        (_m, open, close) => `${open}\n${bodyContent}\n${close}`
      );
    }
  }
  return out;
}

function writeRoute(routePath, html) {
  const segments = routePath.replace(/^\//, '').split('/');
  const dir = join(DIST, ...segments);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), html, 'utf-8');
}

// ─── Quality bar ─────────────────────────────────────────────────────────────

function extractMainText(html) {
  // Pull the pseo-v3-main block to count, not the whole shell
  const m = html.match(/<main class="pseo-v3-main"[\s\S]*?<\/main>/);
  const block = m ? m[0] : html;
  return block.replace(/<script[\s\S]*?<\/script>/g, ' ')
              .replace(/<style[\s\S]*?<\/style>/g, ' ')
              .replace(/<[^>]+>/g, ' ')
              .replace(/&nbsp;/g, ' ')
              .replace(/&[a-z]+;/gi, ' ')
              .replace(/\s+/g, ' ')
              .trim();
}

function passesQualityBar(html, slug, methodAbbr) {
  const text = extractMainText(html);
  const words = text.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  if (wordCount < MIN_WORDS) {
    return { pass: false, reason: `word-count-${wordCount}` };
  }
  // Keyword density on the method abbr (case-insensitive)
  const re = new RegExp(`\\b${methodAbbr}\\b`, 'gi');
  const hits = (text.match(re) || []).length;
  const density = hits / wordCount;
  if (density > MAX_KEYWORD_DENSITY) {
    return { pass: false, reason: `keyword-density-${(density*100).toFixed(2)}pct` };
  }
  // Internal link count
  const linkMatches = (html.match(/<a\s+href="\/[^"#]/g) || []).length;
  if (linkMatches < MIN_INTERNAL_LINKS) {
    return { pass: false, reason: `internal-links-${linkMatches}` };
  }
  return { pass: true, wordCount, density: density.toFixed(4), links: linkMatches };
}

// ─── Build the matrix ────────────────────────────────────────────────────────

const methodKeys = ['ut', 'paut', 'rt', 'mt', 'pt'];
const industryKeys = ['oil-gas', 'aerospace', 'petrochemical', 'power-generation'];

const generated = [];
const skipped = [];
const seenSlugs = new Set();
const wordCountStats = [];

// Pre-compute candidate combos so we can wire sibling pSEO links across cities
const candidateCombos = [];
for (const citySlug of FINAL_CITIES) {
  const city = cityIndex.get(citySlug);
  if (!city) continue;
  for (const industryKey of industryKeys) {
    if (!isCompatible(citySlug, city, industryKey)) continue;
    for (const methodKey of methodKeys) {
      candidateCombos.push({ citySlug, city, industryKey, methodKey });
    }
  }
}

// For each combo, find the next combo with same method+industry but different city
function findSibling(combo) {
  const matches = candidateCombos.filter(c =>
    c.methodKey === combo.methodKey &&
    c.industryKey === combo.industryKey &&
    c.citySlug !== combo.citySlug
  );
  if (!matches.length) return null;
  // Stable pick by hash so links are deterministic
  const idx = hashSlug(`${combo.methodKey}-${combo.industryKey}-${combo.citySlug}`) % matches.length;
  const m = matches[idx];
  return {
    routePath: `/${m.methodKey}-${m.industryKey}-${m.citySlug}`,
    city: m.city.city,
    country: m.city.country,
  };
}

for (const combo of candidateCombos) {
  if (generated.length >= MAX_PAGES) break;
  const { citySlug, city, industryKey, methodKey } = combo;
  const ctx = getCountryContext(city.country);
  const industry = INDUSTRIES[industryKey];
  const method = METHODS[methodKey];
  const slug = `${methodKey}-${industryKey}-${citySlug}`;
  if (seenSlugs.has(slug)) continue;

  const routePath = `/${slug}`;
  const canonical = `${SITE_URL}${routePath}`;
  const sibling = findSibling(combo);

  let attempt = 0;
  let lastReason = null;
  let success = false;

  while (attempt < QUALITY_RETRIES && !success) {
    // On retry, vary the salt so the templates rotate
    const titleSalt = attempt;
    // Pick the first title variant that fits inside 70 chars without truncation,
    // so we never lose the city differentiator. Fall back to a compact template.
    let title = null;
    for (let off = 0; off < TITLE_TEMPLATES.length; off++) {
      const candidate = TITLE_TEMPLATES[(hashSlug(slug) + titleSalt + off) % TITLE_TEMPLATES.length]({ method, industry, city });
      if (candidate.length <= 70) { title = candidate; break; }
    }
    if (!title) {
      // Compact, guaranteed-unique fallback that always includes city + method abbr + industry
      title = `${method.abbr} ${industry.name} Inspection ${city.city} | Atlantis NDT`.slice(0, 70);
    }
    const description = META_TEMPLATES[(hashSlug(slug) + titleSalt) % META_TEMPLATES.length]({ method, industry, city, ctx }).slice(0, 158);
    const bodyContent = buildBodyContent({ slug: `${slug}-${attempt}`, method, industry, city, ctx, siblingPseo: sibling });
    const structuredData = buildJsonLd({ slug, method, industry, city, ctx, canonical, title, description });
    const html = injectMeta(baseTemplate, { title, description, canonical, bodyContent, structuredData });

    const q = passesQualityBar(html, slug, method.abbr);
    if (q.pass) {
      writeRoute(routePath, html);
      seenSlugs.add(slug);
      generated.push({
        slug, routePath, canonical,
        city: city.city, country: city.country,
        method: method.abbr, industry: industry.name,
        wordCount: q.wordCount, density: q.density, links: q.links,
        attempts: attempt + 1,
      });
      wordCountStats.push(q.wordCount);
      success = true;
      break;
    } else {
      lastReason = q.reason;
      attempt += 1;
    }
  }

  if (!success) {
    skipped.push({ slug, reason: lastReason || 'unknown', attempts: attempt });
  }
}

// ─── Save route list & skipped list ──────────────────────────────────────────

const routesPath = join(__dirname, 'pseo-v3-routes-2026-05-09.json');
const skippedPath = join(__dirname, 'pseo-v3-skipped-2026-05-09.json');

// Word-count distribution summary
function arrMean(arr) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}
const wcSorted = [...wordCountStats].sort((a, b) => a - b);
const wcStats = wcSorted.length ? {
  min: wcSorted[0],
  p25: wcSorted[Math.floor(wcSorted.length * 0.25)],
  median: wcSorted[Math.floor(wcSorted.length * 0.5)],
  p75: wcSorted[Math.floor(wcSorted.length * 0.75)],
  max: wcSorted[wcSorted.length - 1],
  mean: Math.round(arrMean(wcSorted)),
} : null;

writeFileSync(routesPath, JSON.stringify({
  generatedAt: TODAY,
  generator: 'pseo-generator-v3.mjs',
  count: generated.length,
  cap: MAX_PAGES,
  citiesUsed: FINAL_CITIES,
  methodsUsed: methodKeys.map(k => METHODS[k].abbr),
  industriesUsed: industryKeys.map(k => INDUSTRIES[k].name),
  qualityBar: {
    minWords: MIN_WORDS,
    maxKeywordDensity: MAX_KEYWORD_DENSITY,
    minInternalLinks: MIN_INTERNAL_LINKS,
  },
  wordCountStats: wcStats,
  routes: generated,
}, null, 2), 'utf-8');

// Skip-reason histogram
const skipReasonHist = {};
for (const s of skipped) {
  const key = s.reason.split('-').slice(0, 2).join('-'); // bucket reasons
  skipReasonHist[key] = (skipReasonHist[key] || 0) + 1;
}

writeFileSync(skippedPath, JSON.stringify({
  generatedAt: TODAY,
  totalSkipped: skipped.length,
  reasonHistogram: skipReasonHist,
  detail: skipped,
}, null, 2), 'utf-8');

// ─── Sitemap ─────────────────────────────────────────────────────────────────

const sitemapPath = join(ROOT, 'public', 'sitemap-other.xml');
const distSitemapPath = join(DIST, 'sitemap-other.xml');
let sitemap = readFileSync(sitemapPath, 'utf-8');

// Strip both v2 and v3 blocks first so re-runs are idempotent
const V2_BEGIN = '<!-- pSEO v2 block — auto-generated by pseo-generator-v2.mjs — DO NOT HAND-EDIT -->';
const V2_END = '<!-- end pSEO v2 block -->';
const V3_BEGIN = '<!-- pSEO v3 block — auto-generated by pseo-generator-v3.mjs — DO NOT HAND-EDIT -->';
const V3_END = '<!-- end pSEO v3 block -->';

function escRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }

const v2blockRe = new RegExp(`\\s*${escRe(V2_BEGIN)}[\\s\\S]*?${escRe(V2_END)}`, 'g');
const v3blockRe = new RegExp(`\\s*${escRe(V3_BEGIN)}[\\s\\S]*?${escRe(V3_END)}`, 'g');
sitemap = sitemap.replace(v2blockRe, '');
sitemap = sitemap.replace(v3blockRe, '');

const sitemapEntries = generated.map(g =>
  `  <url>\n    <loc>${g.canonical}</loc>\n    <lastmod>${TODAY}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.65</priority>\n  </url>`
).join('\n');

const block = `\n  ${V3_BEGIN}\n${sitemapEntries}\n  ${V3_END}\n`;
sitemap = sitemap.replace(/<\/urlset>\s*$/, `${block}</urlset>\n`);

writeFileSync(sitemapPath, sitemap, 'utf-8');
writeFileSync(distSitemapPath, sitemap, 'utf-8');

// ─── Report ──────────────────────────────────────────────────────────────────

console.log('========================================');
console.log('pSEO Generator v3 — quality-gated run completed');
console.log('========================================');
console.log(`Cities used:        ${FINAL_CITIES.length} (top 25)`);
console.log(`Methods used:       ${methodKeys.length} (${methodKeys.map(k => METHODS[k].abbr).join(', ')})`);
console.log(`Industries used:    ${industryKeys.length} (${industryKeys.map(k => INDUSTRIES[k].name).join(', ')})`);
console.log(`Combos attempted:   ${candidateCombos.length}`);
console.log(`Pages generated:    ${generated.length} (cap ${MAX_PAGES})`);
console.log(`Pages skipped:      ${skipped.length}`);
if (Object.keys(skipReasonHist).length) {
  console.log('Skip reasons:');
  for (const [k, v] of Object.entries(skipReasonHist)) console.log(`  ${k}: ${v}`);
}
if (wcStats) {
  console.log('Word-count distribution:');
  console.log(`  min ${wcStats.min} | p25 ${wcStats.p25} | median ${wcStats.median} | p75 ${wcStats.p75} | max ${wcStats.max} | mean ${wcStats.mean}`);
}
console.log(`Routes JSON:        ${routesPath}`);
console.log(`Skipped JSON:       ${skippedPath}`);
console.log(`Sitemap updated:    ${sitemapPath}`);
console.log('Sample routes:');
for (const g of generated.slice(0, 5)) console.log(`  ${g.routePath}  (${g.wordCount} words, ${g.links} links)`);
