import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useMemo, useEffect } from "react";
import { CheckCircle, MapPin, Award, Zap, Shield, TrendingUp, Microscope, AlertCircle, Users, Settings, FileText, Briefcase } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { keyLocations } from "@/data/programmatic-seo";
import { isCuratedCity } from '@/data/curated-cities';

const colorMap: Record<string, { bg: string; text: string; light: string }> = {
  amber: { bg: "from-amber-600 to-amber-700", text: "text-amber-600", light: "bg-amber-50" },
  blue: { bg: "from-blue-600 to-blue-700", text: "text-blue-600", light: "bg-blue-50" },
  purple: { bg: "from-purple-600 to-purple-700", text: "text-purple-600", light: "bg-purple-50" },
  emerald: { bg: "from-emerald-600 to-emerald-700", text: "text-emerald-600", light: "bg-emerald-50" },
  green: { bg: "from-green-600 to-green-700", text: "text-green-600", light: "bg-green-50" },
  indigo: { bg: "from-indigo-600 to-indigo-700", text: "text-indigo-600", light: "bg-indigo-50" },
  orange: { bg: "from-orange-600 to-orange-700", text: "text-orange-600", light: "bg-orange-50" },
  rose: { bg: "from-rose-600 to-rose-700", text: "text-rose-600", light: "bg-rose-50" },
  red: { bg: "from-red-600 to-red-700", text: "text-red-600", light: "bg-red-50" },
  slate: { bg: "from-slate-600 to-slate-700", text: "text-slate-600", light: "bg-slate-50" }
};

interface ServiceContent {
  title: string;
  shortName: string;
  description: string;
  methods: Array<{ name: string; code: string; description: string }>;
  standards: string[];
  defects: string[];
  weldTypes?: string[];
  industries: string[];
  components?: string[];
  process: string;
  localContext: string;
}

const serviceDatabase: Record<string, ServiceContent> = {
  "weld-inspection-services": {
    title: "Weld Inspection Services",
    shortName: "WIS",
    description: "Comprehensive weld integrity assessment using advanced NDT methods",
    methods: [
      {
        name: "Radiographic Testing",
        code: "RT",
        description: "Uses X-ray or gamma radiation to detect internal defects like lack of fusion, porosity, and inclusions. Provides permanent radiographic record suitable for regulatory compliance."
      },
      {
        name: "Ultrasonic Testing",
        code: "UT",
        description: "Employs high-frequency sound waves to detect discontinuities throughout weld thickness. Excellent for detecting cracks, lack of penetration, and laminations with high sensitivity."
      },
      {
        name: "Phased Array Ultrasonic Testing",
        code: "PAUT",
        description: "Advanced UT technique using multiple transducers to create electronic scanning patterns. Superior for complex geometries, fast-track inspection, and precise flaw characterization."
      },
      {
        name: "Time-of-Flight Diffraction",
        code: "TOFD",
        description: "Precision ultrasonic technique that detects and sizes small defects with high accuracy. Gold standard for crack detection and sizing in critical weld applications."
      },
      {
        name: "Magnetic Particle Testing",
        code: "MT",
        description: "Detects surface and near-surface defects in ferromagnetic materials. Highly sensitive to cracks, undercuts, and surface porosity; requires magnetic permeability."
      },
      {
        name: "Liquid Penetrant Testing",
        code: "PT",
        description: "Fluorescent or visible dye penetrant reveals surface-breaking defects. Essential for non-ferromagnetic materials and detection of micro-cracks."
      },
      {
        name: "Visual Testing",
        code: "VT",
        description: "Direct visual examination for surface conditions, dimensions, and visible defects. Often performed with magnification and borescopes for internal access."
      },
      {
        name: "Eddy Current Testing",
        code: "ET",
        description: "Electromagnetic induction detects surface and near-surface defects in conductive materials. Sensitive to cracks and material property changes."
      }
    ],
    standards: ["AWS D1.1 - Structural Steel Welding Code", "ASME IX - Boiler and Pressure Vessel Code", "API 1104 - Pipeline Welding Code", "EN ISO 5817 - Weld Defect Classification", "ASME VIII - Pressure Vessel Design", "AWS D1.5 - Bridge Welding Code"],
    defects: [
      "Lack of fusion (LOF) - inadequate weld metal fusion with base material",
      "Lack of penetration (LOP) - insufficient weld metal depth into base material",
      "Porosity - gas pockets entrapped in weld metal",
      "Slag inclusions - non-metallic material trapped in weld",
      "Undercut - groove melted into base metal at weld edge",
      "Hot cracks - tears occurring during cooling due to restraint",
      "Cold cracks - delayed cracking from hydrogen and stress",
      "Incomplete root penetration - root pass failure to fuse completely",
      "Spatter - molten metal projections scattered around weld"
    ],
    weldTypes: ["Butt welds", "Fillet welds", "Socket welds", "Overlay and cladding welds", "Dissimilar metal welds", "Root/hot pass/fill/cap passes"],
    industries: ["Oil & Gas Pipelines", "Petrochemical Processing", "Power Generation", "Construction & Structural Steel", "Pressure Vessel Manufacturing", "Pipeline Transportation", "Offshore Production"],
    process: "Weld inspection protocols follow rigorous standards requiring initial visual examination, dimensional verification, and surface preparation before advanced NDT. Full penetration butt welds typically require multiple complementary methods—radiographic for internal defects, ultrasonic for crack detection, and liquid penetrant for surface-breaking discontinuities. Fillet welds undergo visual, magnetic particle, and penetrant examination. Critical welds in pressure vessels demand 100% volumetric examination. Inspection occurs at specific stages: root pass verification, intermediate layer inspection, and final weld acceptance testing.",
    localContext: "Weld inspection demand varies dramatically by region based on industrial infrastructure. Petrochemical refining centers require the highest inspection standards with 100% volumetric examination on critical welds. Structural steel fabrication shops demand rapid turnaround with efficient multi-method approaches. Offshore and pipeline regions emphasize defect sizing and fitness-for-service calculations. Local regulatory bodies may impose additional requirements beyond consensus codes."
  },
  "tank-inspection-services": {
    title: "Tank Inspection Services",
    shortName: "TIS",
    description: "API 653 storage tank inspection covering structural integrity and corrosion assessment",
    methods: [
      {
        name: "Magnetic Flux Leakage",
        code: "MFL",
        description: "Automated scanning of tank floors and bottom plates to detect corrosion, pitting, and metal loss. Provides rapid large-area coverage with precise defect location mapping."
      },
      {
        name: "Ultrasonic Thickness Measurement",
        code: "UT Thickness",
        description: "Point-by-point or scanning measurement of remaining wall thickness. Enables precise corrosion rate calculations and remaining life assessment for tank shell courses."
      },
      {
        name: "Vacuum Box Testing",
        code: "Vacuum Box",
        description: "Detects through-wall and near-surface defects on accessible surfaces. Creates visual indication of leakage paths and helps identify critical repair areas."
      },
      {
        name: "Acoustic Emission Testing",
        code: "AET",
        description: "Monitors stress waves from active crack growth during pressure testing. Detects propagating defects that static methods might miss."
      },
      {
        name: "Visual Inspection",
        code: "VT",
        description: "Comprehensive visual examination identifying corrosion, fouling deposits, external damage, and component condition. Foundation assessment and settlement measurement."
      }
    ],
    standards: ["API 653 - Tank Inspection, Repair, Alteration, and Reconstruction", "API 650 - Welded Steel Tanks for Oil Storage", "EEMUA 159 - Inspection of Atmospheric Flat-Bottomed Steel Cylindrical Storage Tanks", "STI SP001 - Standard for Aboveground Storage Tanks", "ASME VIII - Pressure Vessel Code"],
    defects: [
      "Generalized corrosion - uniform metal loss across exposed surfaces",
      "Pitting corrosion - localized deep pitting attacking floor plates",
      "Galvanic corrosion - accelerated attack at dissimilar metal interfaces",
      "Microbiologically influenced corrosion (MIC) - bacterial-induced localized attack",
      "Stress corrosion cracking - sustained stress plus corrosive environment",
      "Fatigue cracking - cyclic loading failures at stress concentrations",
      "Lap weld corrosion - accelerated attack beneath overlapping seams",
      "Settlement-induced distortion - floor dish and shell buckling",
      "Shell blistering - subsurface hydrogen absorption causing delamination"
    ],
    components: ["Tank floor plates and bottom annulus", "Shell courses (bottom, middle, top)", "Roof structure and decking", "Nozzles and connections", "Foundation and support structure", "Internal components and baffles", "Floating roof mechanisms"],
    industries: ["Petroleum Storage", "Chemical Processing", "Water Treatment", "Biofuel Production", "Wastewater Management", "Bulk Liquid Transportation"],
    process: "Tank inspection follows a defined routine based on corrosion history and environmental factors. Initial visual examination assesses external condition, foundation settlement, and obvious corrosion. MFL scanning identifies floor plate corrosion with high resolution mapping. Ultrasonic thickness measurement at grid points establishes corrosion rates and safe operating margins. Shell course examination via ultrasonic and visual methods determines remaining life. Nozzle and weld inspection ensures connection integrity. Settlement measurements verify tank levelness. Fitness-for-service calculations determine safe operation or required repairs.",
    localContext: "Storage tank inspection intensity depends on stored product chemistry and regional climate. Crude oil and refined product tanks in coastal petrochemical centers face aggressive corrosion requiring aggressive inspection intervals. Inland storage facilities may experience less severe attack. Sulfidic crude processing demands MIC-specific inspection strategies. Saltwater exposure accelerates corrosion significantly. Local regulations may mandate API 653 inspection at specific intervals. Environmental regulations drive cleanup urgency."
  },
  "pipeline-inspection-services": {
    title: "Pipeline Inspection Services",
    shortName: "PIS",
    description: "Comprehensive pipeline integrity assessment including ILI validation and direct assessment",
    methods: [
      {
        name: "Phased Array Ultrasonic Testing",
        code: "PAUT",
        description: "Electronic scanning of girth welds and seam welds for crack detection. High-speed examination enables full pipeline coverage with precise defect characterization and sizing."
      },
      {
        name: "Radiographic Testing",
        code: "RT",
        description: "Digital or film radiography of critical girth welds and suspected defect areas. Provides permanent record of internal weld quality for regulatory compliance and traceability."
      },
      {
        name: "Guided Wave Inspection",
        code: "GW",
        description: "Long-range ultrasonic screening of pipelines over hundreds of meters. Rapid defect detection in corrosion, cracks, and anomalies enables targeted excavation planning."
      },
      {
        name: "In-Line Inspection",
        code: "ILI/Pigging",
        description: "Magnetic flux leakage and ultrasonic tools travel through pressurized pipelines detecting corrosion, cracks, dents, and anomalies. Industry gold standard for continuous monitoring."
      },
      {
        name: "Direct Excavation & Assessment",
        code: "DEA/Direct Assessment",
        description: "Controlled excavation of suspected anomalies with direct visual, ultrasonic, and radiographic examination. Confirms tool indications and validates inspection protocols."
      },
      {
        name: "DC Voltage Gradient / Cathodic Inspection",
        code: "DCVG/CIPS",
        description: "Electrochemical surface potential survey detects areas of compromised coating or active corrosion. Identifies holiday locations requiring remediation."
      }
    ],
    standards: ["API 1104 - Welding Code for Pipeline Systems", "ASME B31.4 - Liquid Transportation Systems Code", "ASME B31.8 - Gas Transmission and Distribution Code", "49 CFR 192/195 - Federal Pipeline Safety Regulations", "Pipeline and Hazardous Materials Safety Administration (PHMSA) Guidance"],
    defects: [
      "External corrosion - loss of wall thickness from outside surfaces",
      "Internal corrosion - loss of wall thickness from product side",
      "Selective seam weld corrosion - accelerated attack on seam weld HAZ",
      "Hydrogen-assisted cracking - brittle fracture in HAZ or weld metal",
      "Stress corrosion cracking (SCC) - brittle failure under sustained stress",
      "Dents - mechanical deformation reducing wall thickness locally",
      "Laminations - through-wall separations in seam weld structure",
      "Girth weld cracking - circumferential cracks at pipe-to-pipe joints",
      "Fatigue cracking - cyclic stress failures at stress concentrations"
    ],
    industries: ["Natural Gas Transmission", "Crude Oil Transportation", "Refined Products Pipelines", "Chemical Liquid Lines", "CO2 Transport", "Water and Wastewater", "Hydrogen Pipelines"],
    process: "Pipeline integrity management begins with baseline characterization via ILI tools establishing anomaly database. Direct assessment validates tool performance and guides risk modeling. Girth weld screening via guided wave identifies candidates for detailed PAUT or RT examination. High-risk girth welds receive 100% volumetric examination. Corrosion direct assessment in high-risk areas combines external surveys, coating inspection, and soil analysis. Strain-based assessment evaluates post-deformation integrity. Fitness-for-service calculations determine safe operating pressures.",
    localContext: "Pipeline inspection strategy varies based on service fluid and infrastructure age. Natural gas transmission pipelines in populated areas face stringent PHMSA regulations and higher inspection frequency requirements. Crude oil lines in refining centers require aggressive corrosion monitoring. High-pressure systems and thick-wall pipes demand advanced ultrasonic techniques. Aging pipeline infrastructure (>30 years) typically requires comprehensive ILI campaigns every 3-5 years. Regional soil chemistry and climate affect corrosion rates significantly."
  },
  "pressure-vessel-inspection-services": {
    title: "Pressure Vessel Inspection Services",
    shortName: "PVIS",
    description: "API 510 in-service pressure vessel inspection covering internal, external, and on-stream examination",
    methods: [
      {
        name: "Ultrasonic Thickness Measurement",
        code: "UT Thickness",
        description: "Grid-pattern wall thickness surveys on shell courses, heads, and nozzles. Establishes corrosion rates and remaining life per API 510 fitness-for-service criteria."
      },
      {
        name: "Radiographic Testing",
        code: "RT",
        description: "Volumetric examination of shell and head welds, nozzle attachment welds, and repair welds. Required for new construction verification and post-repair acceptance."
      },
      {
        name: "Phased Array Ultrasonic Testing",
        code: "PAUT",
        description: "Weld seam and nozzle-to-shell junction examination with electronic beam steering. Detects and sizes cracking, lack of fusion, and HAZ damage without radiation exclusion zones."
      },
      {
        name: "Magnetic Particle Testing",
        code: "MT",
        description: "Surface and near-surface crack detection on nozzles, welds, and high-stress areas. Standard method for in-service crack screening on ferromagnetic vessel shells."
      },
      {
        name: "Internal Visual Inspection",
        code: "VT-Internal",
        description: "Direct or remote-camera internal examination during vessel entry or shutdown. Identifies internal corrosion, cladding disbondment, and internal attachment condition."
      },
      {
        name: "Acoustic Emission Testing",
        code: "AET",
        description: "On-stream monitoring of active flaw growth under pressure without taking the vessel out of service. Screens for developing cracks between scheduled shutdowns."
      }
    ],
    standards: ["API 510 - Pressure Vessel Inspection Code (In-Service Inspection, Rating, Repair, Alteration)", "ASME BPVC Section VIII Division 1/2 - Rules for Construction of Pressure Vessels", "API 572 - Inspection Practices for Pressure Vessels", "API 576 - Inspection of Pressure-Relieving Devices", "API 579-1/ASME FFS-1 - Fitness-For-Service", "NB-23 - National Board Inspection Code (repairs and alterations)"],
    defects: [
      "Internal corrosion - product-side wall loss from process fluid chemistry",
      "External corrosion - atmospheric or under-insulation attack on the shell",
      "Hydrogen blistering - subsurface hydrogen accumulation in wet H2S service",
      "Stress corrosion cracking - caustic, amine, or chloride-induced cracking at welds and HAZ",
      "Nozzle-to-shell crack initiation - fatigue and thermal-cycling cracking at high-stress junctions",
      "Cladding disbondment - separation of corrosion-resistant overlay from base metal",
      "Creep damage - high-temperature service deformation and cavitation",
      "Lamination - mid-wall separation from original plate manufacture",
      "Pitting corrosion - localized attack at low points, nozzles, and weld toes"
    ],
    components: ["Shell courses and formed heads", "Nozzles and reinforcement pads", "Manways and access openings", "Internal trays, baffles, and supports", "Pressure-relief device connections", "Support skirts and saddles", "Cladding and weld overlay"],
    industries: ["Refining & Hydroprocessing", "Petrochemical Processing", "Gas Processing & LNG", "Chemical Manufacturing", "Power Generation (boilers/HRSGs)", "Offshore Production Platforms"],
    process: "API 510 in-service inspection follows a risk-based interval set by corrosion rate, RBI study (API 580/581), and jurisdictional requirements. External inspection covers insulation condition, nozzle leaks, foundation, and visible corrosion at intervals up to 5 years. Internal or on-stream inspection (in lieu of internal entry, where AET or advanced UT qualifies) examines shell, heads, and internals at intervals up to 10 years, adjusted by calculated corrosion rate and remaining life. Thickness data is compared against required minimum thickness per the original design code to compute remaining corrosion allowance. Repairs and alterations are scoped and documented per API 510 Part 7-8, with an Authorized Inspector or ASNT Level III sign-off before the vessel returns to service.",
    localContext: "Pressure vessel inspection scope and interval depend heavily on process service. Sour (wet H2S) service in refining and gas processing drives hydrogen-damage-specific monitoring and shorter intervals. High-temperature hydroprocessing units require creep and temper-embrittlement screening in addition to standard corrosion monitoring. Coastal and offshore installations add external CUI (corrosion-under-insulation) and atmospheric corrosion to the inspection scope. Jurisdictional requirements (state, provincial, or national pressure-equipment authorities) can set minimum inspection intervals independent of API 510's RBI-adjusted schedule."
  },
  "piping-inspection-services": {
    title: "Piping Inspection Services",
    shortName: "PIPS",
    description: "API 570 in-service piping inspection covering CML thickness monitoring, CUI, and injection-point circuits",
    methods: [
      {
        name: "Ultrasonic Thickness Measurement",
        code: "UT Thickness",
        description: "Condition-monitoring-location (CML) readings at fixed points along piping circuits. Trended over time to calculate corrosion rate and set re-inspection dates per circuit."
      },
      {
        name: "Automated Ultrasonic Scanning",
        code: "AUT / Corrosion Mapping",
        description: "Grid-based scanning at high-risk locations — elbows, tees, injection points, dead legs. Produces detailed thickness profiles beyond single-point CML readings."
      },
      {
        name: "Radiographic Testing",
        code: "RT / Profile RT",
        description: "Tangential or profile radiography of insulated or inaccessible piping to detect wall loss and CUI without insulation removal on every location."
      },
      {
        name: "Guided Wave Testing",
        code: "GWT / LRUT",
        description: "Long-range screening of piping runs, road crossings, and pipe supports from a single access point. Rapid screening tool to prioritize direct examination locations."
      },
      {
        name: "Infrared Thermography",
        code: "IRT",
        description: "Non-contact screening for corrosion-under-insulation (CUI) hotspots and moisture ingress across large insulated piping runs before targeted UT confirmation."
      },
      {
        name: "Magnetic Particle / Liquid Penetrant Testing",
        code: "MT / PT",
        description: "Surface examination of piping welds, especially at injection points, socket welds, and small-bore connections prone to fatigue and vibration cracking."
      }
    ],
    standards: ["API 570 - Piping Inspection Code (In-Service Inspection, Rating, Repair, Alteration)", "ASME B31.3 - Process Piping Code", "ASME B31.1 - Power Piping Code", "API 574 - Inspection Practices for Piping System Components", "API 571 - Damage Mechanisms Affecting Fixed Equipment", "API 579-1/ASME FFS-1 - Fitness-For-Service"],
    defects: [
      "Injection-point circuit corrosion - accelerated localized attack downstream of chemical injection",
      "Corrosion-under-insulation (CUI) - hidden wall loss beneath weatherproofed insulation jacketing",
      "Dead-leg corrosion - stagnant-flow sections with disproportionate localized attack",
      "Erosion-corrosion - accelerated wall loss at elbows, tees, and flow-restriction points",
      "Flow-accelerated corrosion - single/two-phase flow attack in carbon steel condensate and steam piping",
      "Small-bore connection fatigue cracking - vibration-induced cracking at socket welds and threadolets",
      "External atmospheric corrosion - uncoated or coating-failure wall loss on exposed piping",
      "Sulfidation - high-temperature sulfur attack in refinery crude and vacuum unit piping",
      "Amine/caustic stress corrosion cracking - cracking at welds in specific chemical services"
    ],
    components: ["Straight runs and condition-monitoring-location grids", "Elbows, tees, and reducers", "Injection points and mix points", "Dead legs and low-flow branches", "Small-bore connections and instrument taps", "Insulated and jacketed sections", "Supports, hangers, and expansion joints"],
    industries: ["Refining & Hydroprocessing", "Petrochemical Processing", "Gas Processing & LNG", "Chemical Manufacturing", "Power Generation (steam/condensate)", "Midstream Gathering & Processing"],
    process: "API 570 piping inspection organizes piping into circuits grouped by service, material, and damage mechanism, each assigned a piping class (1, 2, or 3) that sets the required inspection interval and Inspector qualification. Condition-monitoring locations are established at points most representative of, or most susceptible to, the governing damage mechanism — typically elbows, tees, injection points, and low-point drains. Thickness readings at each CML are trended against prior surveys to calculate short-term and long-term corrosion rates, which set the next inspection date and remaining life. CUI-prone circuits (carbon steel, intermittent service, coastal/humid environments) receive a dedicated CUI inspection program per API 583 alongside the standard CML schedule. Class 1 circuits (highest consequence of failure) receive the most frequent and rigorous examination.",
    localContext: "Piping inspection programs are shaped by process service and circuit criticality. Refining and petrochemical circuits carrying sour, caustic, or amine streams require damage-mechanism-specific CML placement beyond generic corrosion monitoring. Humid, coastal, and cyclic-temperature climates accelerate CUI, making insulation condition surveys a standing part of the inspection scope. Cold climates add freeze-related considerations for dead legs and low-point drains. High-vibration areas near rotating equipment require added attention to small-bore connection fatigue, regardless of region."
  },
  "corrosion-inspection-services": {
    title: "Corrosion Inspection Services",
    shortName: "CIS",
    description: "Specialized corrosion detection and monitoring including CUI, under-deposit corrosion, and MIC assessment",
    methods: [
      {
        name: "Ultrasonic Thickness Measurement",
        code: "UT Thickness",
        description: "Precise point measurements or scanning of remaining wall thickness. Enables quantitative corrosion rate determination and remaining life calculations essential for RBI programs."
      },
      {
        name: "Corrosion Mapping",
        code: "Corrosion Mapping",
        description: "Systematic grid-based thickness measurement creating detailed corrosion profiles. Visualizes loss patterns, predicts failure areas, and guides maintenance prioritization."
      },
      {
        name: "Magnetic Flux Leakage",
        code: "MFL",
        description: "Automated high-resolution detection of metal loss and pitting. Provides rapid large-area assessment of corroded surfaces with precise defect location."
      },
      {
        name: "Eddy Current Testing",
        code: "ET",
        description: "Non-contact detection of surface and near-surface metal loss. Sensitive to localized attack and material property changes from corrosion processes."
      },
      {
        name: "Infrared Thermography",
        code: "Thermography",
        description: "Detects subsurface corrosion, under-insulation corrosion (CUI), and fouling deposits through temperature differential imaging. Non-contact full-surface screening."
      }
    ],
    standards: ["API 571 - Damage Mechanisms Affecting Fixed Equipment in the Refining Industry", "API 580 - Risk-Based Inspection Technology", "API 581 - Risk-Based Inspection Base Resource Document", "NACE SP0170 - Protection of Austenitic Stainless Steel from Corrosion", "ASTM G48 - Ferric Chloride Pitting Corrosion Tests", "ASME PCC-2 - Repair of Pressure Equipment and Piping"],
    defects: [
      "Crevice corrosion - aggressive attack under deposits, gaskets, and insulation",
      "Pitting corrosion - localized penetrating attack creating deep cavities",
      "Uniform corrosion - general surface loss across exposed areas",
      "Galvanic corrosion - accelerated attack from dissimilar metal couples",
      "Erosion-corrosion - combined mechanical and chemical attack increasing rate",
      "Microbiologically influenced corrosion (MIC) - bacterial metabolite attack",
      "Hydrogen embrittlement - subsurface hydrogen causing delayed cracking",
      "Corrosion fatigue - reduced fatigue strength in corrosive environment",
      "Under-deposit corrosion - localized attack beneath calcium carbonate or biological deposits"
    ],
    industries: ["Petrochemical Refining", "Power Generation", "Pressure Vessel Manufacturing", "Heat Exchanger Operations", "Cooling Water Systems", "Marine Environments", "Chemical Processing"],
    process: "Corrosion management integrates risk-based inspection (RBI) methodologies with targeted examination. Initial baseline establishes corrosion rate through historical inspection data and current thickness surveys. Corrosion rate determination guides reinspection intervals—high-rate locations receive aggressive monitoring. Under-insulation corrosion (CUI) screening combines visual inspection, thermography, and localized thickness measurement. Deposit analysis identifies corrosion-causing chemistry. Microbiologically influenced corrosion (MIC) assessment includes iron-oxidizing bacteria culture testing. Remaining life calculations project service life based on current loss rates.",
    localContext: "Corrosion severity varies dramatically by location and service environment. Coastal petrochemical facilities face accelerated atmospheric corrosion plus chloride-induced pitting. Inland power generation facilities experience milder atmospheric corrosion but aggressive internal corrosion from cooling water chemistry. High-temperature refinery equipment demands specialized CUI monitoring. Tropical climates accelerate MIC in biofilm-prone cooling systems. Industrial air pollution and proximity to salt spray significantly impact inspection frequency and methodology selection."
  }
};

const serviceSlugMap: Record<string, string> = {
  "weld-inspection-services": "weld-inspection-services",
  "weld-inspection": "weld-inspection-services",
  "tank-inspection-services": "tank-inspection-services",
  "tank-inspection": "tank-inspection-services",
  "pipeline-inspection-services": "pipeline-inspection-services",
  "pipeline-inspection": "pipeline-inspection-services",
  "corrosion-inspection-services": "corrosion-inspection-services",
  "corrosion-inspection": "corrosion-inspection-services",
  "pressure-vessel-inspection-services": "pressure-vessel-inspection-services",
  "pressure-vessel-inspection": "pressure-vessel-inspection-services",
  "api-510-inspection-services": "pressure-vessel-inspection-services",
  "piping-inspection-services": "piping-inspection-services",
  "piping-inspection": "piping-inspection-services",
  "api-570-inspection-services": "piping-inspection-services"
};

function getCityContext(city: string, service: string): string {
  const contextMap: Record<string, Record<string, string>> = {
    "Houston": {
      "weld-inspection-services": "Houston's dominant petrochemical and refining industry demands world-class weld inspection standards. With ExxonMobil, Chevron, Shell, and BP major operations, the region requires specialists in API 1104 pipeline welding and ASME IX pressure vessel code compliance.",
      "tank-inspection-services": "As a major storage hub for crude oil and refined products, Houston requires extensive tank farm monitoring. API 653 tank inspection is critical infrastructure work supporting the region's multibillion-dollar refining and trading operations.",
      "pipeline-inspection-services": "Houston's extensive pipeline network connecting regional refineries demands continuous integrity management. ILI validation and direct assessment protocols are essential for safe operation of critical transportation infrastructure.",
      "corrosion-inspection-services": "Aggressive corrosion from the Gulf Coast environment and chemical processing requires sophisticated RBI programs. Local refineries implement continuous corrosion monitoring on their most critical assets.",
      "pressure-vessel-inspection-services": "Houston Ship Channel refineries and petrochemical complexes run dense populations of API 510 pressure vessels in sour, hydrocarbon, and high-temperature hydroprocessing service. Turnaround-driven inspection scheduling and wet H2S damage-mechanism screening are standard requirements here.",
      "piping-inspection-services": "Houston's refining and petrochemical corridor runs extensive API 570 piping circuits, many in sour, caustic, or amine service. CML programs, injection-point monitoring, and CUI surveys on insulated Gulf Coast piping runs are a routine part of turnaround planning."
    },
    "Dubai": {
      "weld-inspection-services": "Dubai's offshore production platforms and infrastructure projects require highest international standards. ADNOC and international operators demand certified ASNT Level III inspectors with API 1104 expertise.",
      "tank-inspection-services": "Desert storage facilities and marine terminals require advanced inspection under extreme temperature and solar radiation conditions. API 653 compliance with modifications for arid climate challenges.",
      "pipeline-inspection-services": "Extensive onshore and offshore pipeline networks serve production, processing, and export operations. Saltwater corrosion and high-temperature service require specialized integrity management programs.",
      "corrosion-inspection-services": "Extreme desert and marine environments accelerate corrosion significantly. Continuous RBI-based monitoring prevents production disruptions and safety incidents.",
      "pressure-vessel-inspection-services": "Dubai's refining, gas processing, and petrochemical operations run pressure vessels under extreme ambient temperature swings alongside process-side corrosion. API 510 external inspection intervals often tighten to account for solar loading and desert atmospheric exposure on top of standard corrosion-rate calculations.",
      "piping-inspection-services": "Onshore process piping and offshore platform piping both see aggressive service in the region — high-salinity marine exposure offshore, high-temperature desert exposure onshore. API 570 CUI surveys are a standing requirement given jacketed and insulated piping across both environments."
    },
    "New York": {
      "weld-inspection-services": "Aerospace and defense manufacturing centers require NAS 410 compliance alongside AWS standards. Construction and infrastructure projects demand certified inspectors for structural steel acceptance.",
      "tank-inspection-services": "Industrial storage and hazardous material handling facilities require strict API 653 and regulatory compliance. Environmental regulations demand rigorous inspection documentation.",
      "pipeline-inspection-services": "Gas and liquid distribution networks serving metropolitan infrastructure require ASME B31.4 and B31.8 compliance. Regulatory scrutiny is intense.",
      "corrosion-inspection-services": "Industrial waterfront facilities face severe salt spray corrosion. Aging infrastructure requires aggressive monitoring and fitness-for-service analysis.",
      "pressure-vessel-inspection-services": "Power generation, chemical processing, and industrial waterfront facilities in the metro area run API 510-governed pressure vessels under close regulatory scrutiny. Aging infrastructure and dense urban siting make documented, audit-ready inspection records a priority.",
      "piping-inspection-services": "Industrial and utility piping circuits in the region face salt-spray exposure near waterfront facilities plus the freeze-thaw cycling of a Northeast climate. API 570 CML programs account for both external atmospheric attack and internal process-driven corrosion."
    },
    "Dammam": {
      "pressure-vessel-inspection-services": "Dammam and the wider Eastern Province refining and petrochemical corridor run some of the region's highest-density pressure-vessel populations, much of it in sour and high-H2S service. API 510 wet-H2S damage-mechanism screening and hydrogen-blistering surveys are core to the inspection scope here.",
      "piping-inspection-services": "Eastern Province refining, gas processing, and petrochemical piping circuits run extensive sour and amine service, driving damage-mechanism-specific API 570 CML placement well beyond generic thickness monitoring.",
      "tank-inspection-services": "Aramco-scale crude and product storage terminals across the Eastern Province run continuous API 653 tank inspection programs, with floor MFL scanning and settlement monitoring standard on large-diameter tanks.",
      "weld-inspection-services": "New-construction and turnaround weld inspection across the Eastern Province petrochemical corridor runs to API 1104 and ASME IX, with high-volume radiographic and phased-array coverage during major turnarounds.",
      "pipeline-inspection-services": "Cross-country and gathering pipeline networks connecting Eastern Province fields to processing and export terminals require continuous ILI and direct-assessment integrity management.",
      "corrosion-inspection-services": "Sour service, high ambient temperatures, and coastal humidity combine to make RBI-driven corrosion monitoring a standing requirement across Eastern Province refining and petrochemical assets."
    },
    "Abu Dhabi": {
      "pressure-vessel-inspection-services": "ADNOC-scale upstream, gas processing, and downstream operations across Abu Dhabi run extensive API 510 pressure-vessel fleets, with sour-service damage-mechanism screening a standard part of the inspection scope on gas-processing and refining assets.",
      "piping-inspection-services": "Onshore gathering and process piping alongside offshore platform piping both see extensive API 570 coverage, with CUI surveys a priority given widespread insulated and jacketed piping in the region's climate.",
      "tank-inspection-services": "Crude and product storage terminals serving Abu Dhabi's export infrastructure run API 653 inspection programs sized to the region's large-diameter tank population.",
      "weld-inspection-services": "New-build and turnaround welding across upstream, midstream, and downstream assets runs to API 1104 and ASME IX, supporting major EPC and turnaround projects across the emirate.",
      "pipeline-inspection-services": "Extensive onshore and offshore pipeline networks connecting production to processing and export terminals require continuous ILI validation and direct assessment.",
      "corrosion-inspection-services": "High ambient temperatures, sour service, and marine exposure on offshore assets combine to drive RBI-based corrosion monitoring programs across the emirate's oil and gas infrastructure."
    },
    "Mumbai": {
      "pressure-vessel-inspection-services": "Mumbai and the greater Mumbai High offshore basin run a dense population of refining, petrochemical, and offshore-platform pressure vessels. API 510 inspection here spans both onshore refinery turnarounds and offshore platform access-constrained inspection windows.",
      "piping-inspection-services": "Refining and petrochemical piping circuits across the Mumbai corridor run extensive API 570 CML programs, with monsoon-season humidity adding CUI risk on insulated piping runs.",
      "tank-inspection-services": "Coastal crude and product storage terminals serving Mumbai's refining and import infrastructure run API 653 programs accounting for monsoon exposure and coastal atmospheric corrosion.",
      "weld-inspection-services": "New-construction and offshore-platform weld inspection in the region runs to API 1104 and ASME IX, with offshore work adding access and logistics constraints to standard inspection planning.",
      "pipeline-inspection-services": "Onshore and offshore pipeline networks connecting Mumbai High production to shore-based processing require continuous ILI and direct-assessment integrity management.",
      "corrosion-inspection-services": "Coastal humidity, monsoon exposure, and offshore marine conditions combine to accelerate corrosion across the region's refining, petrochemical, and offshore infrastructure, driving RBI-based monitoring programs."
    },
    "Baton Rouge": {
      "pressure-vessel-inspection-services": "Baton Rouge's concentrated refining and petrochemical corridor along the Mississippi River runs dense API 510 pressure-vessel populations, much of it in sour and high-temperature hydroprocessing service tied to major turnaround cycles.",
      "piping-inspection-services": "Refining and petrochemical piping circuits along the river corridor run extensive API 570 programs, with Gulf Coast humidity and insulated piping runs making CUI surveys a standing part of the inspection scope.",
      "tank-inspection-services": "Crude, intermediate, and product storage terminals along the Mississippi River corridor run API 653 inspection programs sized to the region's dense tank-farm population.",
      "weld-inspection-services": "Turnaround and new-construction weld inspection across the Baton Rouge petrochemical corridor runs to API 1104 and ASME IX, with high seasonal turnaround volumes driving inspection capacity planning.",
      "pipeline-inspection-services": "Pipeline networks connecting Baton Rouge refineries and petrochemical plants to Gulf Coast terminals and interstate systems require continuous ILI validation and direct assessment.",
      "corrosion-inspection-services": "Gulf Coast humidity, sour service, and dense petrochemical processing combine to drive RBI-based corrosion monitoring across the Baton Rouge corridor's refining and chemical manufacturing assets."
    }
  };

  return contextMap[city]?.[service] || `${city} requires professional NDT inspection services meeting industry standards for asset integrity and safety compliance.`;
}

export const InspectionServiceLocationPage = () => {
  const { slug } = useParams<{ slug: string }>();

  const pageData = useMemo(() => {
    if (!slug) return null;

    // Parse slug: "weld-inspection-services-houston"
    const parts = slug.split("-");
    let serviceSlug = "";
    let citySlug = "";

    // Find service slug (longest matching prefix)
    const possibleServices = Object.keys(serviceSlugMap).filter(s => slug.startsWith(s));
    if (possibleServices.length > 0) {
      serviceSlug = possibleServices.sort((a, b) => b.length - a.length)[0];
      citySlug = slug.replace(serviceSlug + "-", "");
    }

    const normalizedService = serviceSlugMap[serviceSlug];
    const service = normalizedService ? serviceDatabase[normalizedService] : null;
    const city = keyLocations.find(loc => loc.slug === citySlug);

    if (!service || !city) {
      return null;
    }

    return { service, city, serviceSlug: normalizedService, citySlug };
  }, [slug]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!pageData) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <Navigation />
      <PillarHubNav />
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
          <p className="text-xl mb-8">This inspection service page could not be found.</p>
          <Link to="/" className="text-blue-400 hover:text-blue-300">Return to Home</Link>
        </div>
      </div>
    );
  }

  const { service, city, serviceSlug, citySlug } = pageData;
  const colorScheme = colorMap[city.color];
  const cityName = city.name;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `${service.title} in ${cityName}`,
    "provider": {
      "@type": "Organization",
      "name": "Atlantis NDT",
      "url": "https://atlantisndt.com"
    },
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "addressCountry": city.country
    },
    "knowsAbout": service.methods.map(m => m.name),
    "description": `Professional ${service.title.toLowerCase()} in ${cityName}. Certified inspectors using ${service.methods.map(m => m.code).join(", ")} methods.`
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://atlantisndt.com" },
      { "@type": "ListItem", "position": 2, "name": "Inspection Services", "item": "https://atlantisndt.com/inspection" },
      { "@type": "ListItem", "position": 3, "name": service.title, "item": `https://atlantisndt.com/inspection/${serviceSlug}` },
      { "@type": "ListItem", "position": 4, "name": cityName, "item": `https://atlantisndt.com/inspection/${slug}` }
    ]
  };

  const allServices = Object.entries(serviceDatabase).map(([key, val]) => ({
    slug: key,
    ...val
  }));

  const relatedServices = allServices.filter(s => s.slug !== serviceSlug);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <SEOHead
        title={`${service.title} in ${cityName} | Atlantis NDT`}
        description={`Professional ${service.title.toLowerCase()} in ${cityName} using ${service.methods.map(m => m.code).join(", ")} methods. Certified Level III inspectors. ${service.description}`}
        keywords={`${service.title}, ${cityName}, ${service.methods.map(m => m.code).join(", ")}, NDT inspection, certified inspectors, ${city.industries.join(", ")}`}
        canonical={`/inspection/${slug}`}
        structuredData={[structuredData, breadcrumbData]}
        noindex={!isCuratedCity(citySlug)}
      />
      <Navigation />
      <PillarHubNav />

      <div className="pt-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Inspection Services", href: "/inspection" },
            { label: service.title, href: `/inspection/${serviceSlug}` },
            { label: cityName, href: `/inspection/${slug}` }
          ]}
        />

        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`bg-gradient-to-r ${colorScheme.bg} py-20 px-4`}
        >
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className={`px-4 py-2 ${colorScheme.light} ${colorScheme.text} rounded-lg font-semibold`}>
                {service.title}
              </div>
              <div className="px-4 py-2 bg-slate-700 text-slate-100 rounded-lg font-semibold flex items-center gap-2">
                <MapPin size={16} /> {cityName}
              </div>
            </div>
            <h1 className="text-5xl font-bold mb-4">{service.title} in {cityName}</h1>
            <p className="text-xl text-slate-200 max-w-3xl">{service.description}</p>
          </div>
        </motion.section>

        {/* Service Overview */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4 border-b border-slate-800"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Service Overview</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-slate-300 leading-relaxed mb-6">{service.process}</p>
              </div>
              <div>
                <p className="text-slate-300 leading-relaxed mb-6">{getCityContext(cityName, serviceSlug)}</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Inspection Methods */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4 border-b border-slate-800"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Inspection Methods Used</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.methods.map((method, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${colorScheme.text} flex-shrink-0`}>
                      <Microscope size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                        {method.name}
                        <span className={`${colorScheme.text} font-mono text-sm`}>({method.code})</span>
                      </h3>
                      <p className="text-slate-400">{method.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Applicable Standards */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4 border-b border-slate-800 bg-slate-900/50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Applicable Standards & Codes</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.standards.map((standard, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <Award className={`${colorScheme.text} flex-shrink-0 mt-1`} size={20} />
                  <span className="text-slate-200">{standard}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Typical Defects & Findings */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4 border-b border-slate-800"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Typical Defects & Findings</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.defects.map((defect, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="flex items-start gap-3 bg-slate-900 border border-slate-800 p-4 rounded"
                >
                  <AlertCircle className={`${colorScheme.text} flex-shrink-0 mt-0.5`} size={18} />
                  <span className="text-slate-300">{defect}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Industries Served */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4 border-b border-slate-800 bg-slate-900/50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Industries Served</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {service.industries.map((industry, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-4 ${colorScheme.light} rounded-lg border ${colorScheme.text} border-opacity-30`}
                >
                  <div className="flex items-center gap-2">
                    <Briefcase className={colorScheme.text} size={20} />
                    <span className="font-semibold">{industry}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Related Inspection Services */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4 border-b border-slate-800"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Other Inspection Services</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((relService, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="group"
                >
                  <Link to={`/inspection/${relService.slug}-${pageData.citySlug}`}>
                    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 h-full hover:border-slate-600 transition cursor-pointer">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-400 transition">{relService.title}</h3>
                      <p className="text-slate-400 text-sm mb-4">{relService.description}</p>
                      <div className="flex items-center gap-2 text-blue-400 group-hover:gap-3 transition">
                        <span>Learn More</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Same Service in Other Cities */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="py-16 px-4 border-b border-slate-800 bg-slate-900/50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">{service.title} in Other Cities</h2>
            <div className="grid md:grid-cols-4 gap-4">
              {[keyLocations[0], keyLocations[20], keyLocations[25], pageData.city]
                .filter((c, idx, self) => idx === self.findIndex(t => t.slug === c?.slug))
                .map((loc, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Link to={`/inspection/${serviceSlug}-${loc.slug}`}>
                      <div className="bg-slate-900 border border-slate-800 p-4 rounded-lg hover:border-slate-600 transition cursor-pointer text-center">
                        <MapPin className="mx-auto mb-2 text-blue-400" size={20} />
                        <p className="font-semibold">{loc.name}</p>
                        <p className="text-sm text-slate-400">{loc.region}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`bg-gradient-to-r ${colorScheme.bg} py-16 px-4`}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need {service.title} in {cityName}?</h2>
            <p className="text-xl text-slate-200 mb-8">
              Atlantis NDT provides certified Level III inspectors with expertise in {service.methods.map(m => m.code).join(", ")} methods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className={`px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition`}
              >
                Request Inspection Quote
              </Link>
              <Link
                to="/about"
                className="px-8 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-bold transition"
              >
                Learn About Our Team
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Contact Section */}
        <section className="py-16 px-4 border-t border-slate-800">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
              <ContactDetails />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InspectionServiceLocationPage;
