import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Calendar,
  Users,
  FileText,
  TrendingDown,
  Package,
  BarChart3,
  Globe,
  Shield,
  Clock,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Star,
  Building2,
  Landmark,
  DollarSign,
  Briefcase,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { isCuratedCity, cityFromProductSlug } from '@/data/curated-cities';
import {
  buildLocalBusiness,
  getErpProfile,
  consultingPathForCity,
  trainingPathForCity,
} from '@/data/city-profiles';
import { RelatedCityProducts } from '@/components/RelatedProducts';

// ─── Props ────────────────────────────────────────────────────────────────────

interface ErpLocationPageProps {
  city: string;
  country: string;
  slug: string; // e.g. "ndt-erp-houston"
}

// ─── Location context data ─────────────────────────────────────────────────

const erpLocationContext: Record<string, string> = {
  "Houston": "Houston is the undisputed energy capital of the world, home to more than 4,600 energy-related firms and thousands of miles of petrochemical infrastructure. NDT inspection companies operating in the greater Houston area manage enormous volumes of API 510, API 570, and API 653 inspection records across refineries, chemical plants, and midstream facilities. Atlantis NDT ERP helps Houston-based inspection teams eliminate spreadsheet chaos, automate API-format report generation, and maintain real-time visibility of ASNT certification expiries across large technician pools.",
  "Dubai": "Dubai is the commercial and logistics hub for the wider Gulf Cooperation Council oil and gas sector, hosting regional headquarters of major operators, EPC contractors, and inspection service providers. NDT companies in the UAE operate across diverse projects from offshore platform maintenance to Ruwais downstream expansion, requiring rigorous certification tracking aligned with ADNOC and client-specific requirements. Atlantis NDT ERP consolidates inspection scheduling, CSWIP/ASNT/PCN personnel records, and PDF report generation in a single cloud platform designed for high-tempo GCC operations.",
  "Abu Dhabi": "Abu Dhabi controls 94% of the UAE's oil reserves and hosts ADNOC's vast integrated industrial complex at Ruwais, making it one of the densest concentrations of inspection activity in the Middle East. Inspection service companies supporting ADNOC facilities must navigate strict ADNOC Company Standards for qualification, reporting formats, and data retention. Atlantis NDT ERP provides Abu Dhabi NDT teams with a compliance dashboard tracking API, ASME, and ADNOC-specific requirements, reducing administrative overhead while ensuring audit readiness at all times.",
  "Saudi Arabia": "Saudi Arabia operates the world's largest integrated oil and gas network, with Saudi Aramco's SAEP-1112 qualification requirements and SABIC's asset integrity demands creating a highly regulated environment for inspection service providers. The scale of operations—from the Empty Quarter upstream fields to the massive Yanbu, Jubail, and Ras Tanura industrial complexes—demands inspection management systems capable of handling thousands of concurrent work orders. Atlantis NDT ERP supports Aramco-compliant personnel qualification tracking, multilingual PDF report generation, and real-time corrosion trending for KSA-based inspection teams.",
  "Calgary": "Calgary serves as the administrative center for Canada's oil sands and conventional petroleum sector, with major operators and inspection contractors headquartered in the city managing inspection programs across remote northern Alberta facilities. Extreme cold weather operations, long equipment mobilization lead times, and strict provincial regulatory requirements under ABSA (Alberta Boilers Safety Association) make precise scheduling and compliance tracking essential. Atlantis NDT ERP helps Calgary inspection companies coordinate remote worksite logistics, manage ABSA pressure equipment inspection intervals, and track CGSB/ASNT Level II and III certification expiries across rotational workforces.",
  "Singapore": "Singapore's Jurong Island hosts one of the world's largest integrated petrochemical complexes, with MOM (Ministry of Manpower) CERT certification requirements and client-mandated qualification schemes adding compliance complexity for inspection service providers. High facility density, compressed maintenance shutdown windows, and stringent Singapore workplace safety requirements demand precise work order management and real-time personnel availability tracking. Atlantis NDT ERP enables Singapore NDT companies to coordinate multi-client shutdown support, automate MOM-format documentation, and maintain auditable records of technician qualifications across demanding project environments.",
  "Mumbai": "Mumbai anchors India's western industrial corridor, with major refineries at Trombay and Mahul, offshore production assets managed by ONGC and private operators, and a growing petrochemical belt stretching toward Pune creating substantial NDT inspection workloads. Indian inspection companies must manage ISNT (Indian Society for Non-Destructive Testing) and ASNT certifications alongside client-specific qualification requirements from BPCL, HPCL, RIL, and ONGC. Atlantis NDT ERP provides Mumbai-based inspection teams with integrated ISNT/ASNT expiry tracking, API 510/570 inspection interval management, and multi-site corrosion data trending across India's fast-growing energy infrastructure.",
  "London": "London hosts the headquarters of major international oil and gas companies, inspection service multinationals, and the technical bodies governing UK NDT practice including BINDT (British Institute of Non-Destructive Testing) and TWI. UK inspection companies operate across a uniquely diverse client base spanning UKCS offshore, nuclear, aerospace, and manufacturing sectors, each with distinct regulatory frameworks from ONR to EASA. Atlantis NDT ERP supports London-based inspection businesses with PCN qualification tracking, BINDT-compliant personnel records, multi-sector compliance dashboards, and client-specific report format generation.",
  "Perth": "Perth is the operational gateway to Western Australia's iron ore, LNG, and mineral processing industries, with the Pilbara and offshore Carnarvon Basin projects generating significant inspection workloads for local and FIFO-based NDT teams. Australian inspection companies must comply with AS/NZS standards and maintain WA-specific regulatory documentation under Work Safe WA, while managing the logistical challenges of remote FIFO rotations to Karratha, Port Hedland, and offshore platforms. Atlantis NDT ERP helps Perth inspection companies track FIFO roster compliance, manage AS 3788 pressure vessel inspection intervals, and generate reports aligned with Australian client requirements for Woodside, Rio Tinto, and Chevron operations.",
  "Doha": "Doha is the command center for Qatar's LNG-dominated energy sector, with QatarEnergy's North Field expansion—the world's largest LNG development—creating unprecedented demand for qualified NDT technicians and robust inspection management systems. Inspection companies supporting QatarEnergy facilities operate under strict NFPS (North Field Production Standard) requirements and must demonstrate full traceability of inspection records from technician qualification through report sign-off. Atlantis NDT ERP provides Doha-based inspection teams with cryogenic service inspection tracking, QatarEnergy-format report generation, and real-time personnel availability dashboards essential for large-scale LNG project execution.",
  "Kuwait City": "Kuwait City is the center of Kuwait's petroleum industry, with KNPC's clean fuels project, KOC upstream operations, and KIPIC's Al-Zour complex—the world's fourth-largest refinery—requiring sustained inspection support across construction, commissioning, and operational phases. NDT companies working in Kuwait must navigate KNPC and KOC qualification requirements alongside Kuwait Ministry of Oil reporting standards. Atlantis NDT ERP supports Kuwait City inspection firms with KNPC-format work order management, high-sulfur crude service corrosion data tracking, and personnel qualification records aligned with Kuwait national operator requirements.",
  "Muscat": "Muscat is the administrative hub for Oman's diverse petroleum sector, with Petroleum Development Oman (PDO) managing an extensive portfolio of onshore fields while OQ's Sohar refinery and the emerging Duqm industrial zone create growing inspection workloads for local service providers. Oman's remote desert operating environments and PDO's established inspection standards require inspection companies to maintain meticulous records of technique qualifications and equipment calibration status. Atlantis NDT ERP helps Muscat-based NDT firms manage PDO-compliant inspection scheduling, track corrosion trends across geographically dispersed Omani assets, and generate audit-ready documentation for PDO and international client reviews.",
  "Hyderabad": "Hyderabad is the home base of Atlantis NDT and a major center for NDT training, consulting, and inspection services across South India's growing industrial corridor. The city's inspection companies serve HPCL's Visakh refinery, BHEL's heavy engineering operations, and a rapidly expanding pharmaceutical and aerospace manufacturing sector with diverse NDT requirements. Atlantis NDT ERP, developed with direct input from Hyderabad's NDT community, provides ISNT-aligned certification tracking, PESO-compliant pressure equipment inspection scheduling, and multi-client report management for inspection businesses scaling across India's industrial heartland.",
  "Chennai": "Chennai serves as the NDT inspection hub for South India's automotive manufacturing belt, CPCL refinery operations, and Kamarajar Port's heavy industrial zone, alongside growing nuclear and aerospace sectors with specialized inspection requirements. Tamil Nadu's inspection companies face diverse compliance challenges including BARC inspection protocols for nuclear applications, DGCA requirements for aerospace NDT, and client-driven quality systems from Hyundai, BMW, and ONGC. Atlantis NDT ERP supports Chennai inspection businesses with multi-sector compliance tracking, automated inspection interval management for CPCL and ONGC assets, and ISNT/ASNT certification expiry alerts across large technician teams.",
  "Kuala Lumpur": "Kuala Lumpur is the headquarters city for Malaysia's oil and gas industry, with PETRONAS and its subsidiaries operating upstream, midstream, and downstream assets that require sustained NDT inspection support from a well-organized local service sector. Malaysian inspection companies must comply with DOSH (Department of Occupational Safety and Health) certification requirements and PETRONAS technical standards while competing for contracts across the ASEAN region's growing energy infrastructure. Atlantis NDT ERP helps KL-based inspection firms manage PETRONAS-format documentation, track DOSH-accredited certification periods, and coordinate multi-site inspection programs across Malaysia's Peninsular and East Malaysian operations.",
  "Lagos": "Lagos is the commercial capital of Nigeria's oil and gas sector, with NNPCL's refineries, Shell's extensive SPDC onshore network, and numerous international IOC operations generating sustained demand for qualified NDT inspection services. Nigeria's inspection industry faces unique challenges including remote Niger Delta logistics, DPR (Department of Petroleum Resources) regulatory documentation requirements, and the need to demonstrate NAPIMS-recognized quality systems to operate on IOC contracts. Atlantis NDT ERP provides Lagos-based inspection companies with DPR-format work order management, ASNT/PCN personnel qualification tracking, and corrosion data trending tools essential for managing the integrity of aging Nigerian oil infrastructure.",
  "New Orleans": "New Orleans sits at the heart of the Gulf Coast petrochemical corridor, with extensive refinery complexes at Norco, Baton Rouge, and across the Mississippi River Chemical Corridor requiring continuous NDT inspection support. Louisiana inspection companies serve OSHA Process Safety Management (PSM) covered facilities where inspection record completeness and ASNT certification currency directly affect regulatory compliance and insurance standing. Atlantis NDT ERP helps New Orleans-area inspection firms automate PSM inspection interval tracking, manage ASNT Level II and III certification expiries, and generate API 510/570 format reports that satisfy both owner-operator and OSHA audit requirements.",
  "Denver": "Denver is the hub for the Rocky Mountain oil and gas basin, encompassing DJ Basin shale operations in Colorado, Permian Basin support infrastructure, and a growing midstream pipeline network requiring systematic integrity management. Colorado inspection companies serving upstream operators, midstream pipeline operators, and refineries must maintain ASNT qualifications aligned with client-specific written practices while managing field-based inspection teams across a geographically dispersed service area. Atlantis NDT ERP enables Denver inspection businesses to coordinate pipeline inspection scheduling, track ASNT certification currencies for field technicians, and generate DOT-compliant pipeline inspection records and API 1160 integrity management documentation.",
  "Aberdeen": "Aberdeen is the undisputed capital of the UK offshore oil and gas industry, with five decades of North Sea operational experience concentrated in the city's inspection service providers, engineering firms, and subsea technology companies. Scottish inspection companies serve offshore platforms, FPSOs, and onshore terminal facilities across the UKCS using a combination of PCN, BINDT, and client qualification schemes from major operators including BP, Shell, TotalEnergies, and Harbour Energy. Atlantis NDT ERP supports Aberdeen inspection businesses with UKCS-specific certification tracking, PSSR 2000 and LOLER inspection interval management, and offshore-ready report generation formats designed for North Sea operator audit requirements.",
  "Oslo": "Oslo is the administrative center for Norway's world-class offshore oil and gas sector, where strict Petroleum Safety Authority (PSA) requirements and NORSOK standards set the global benchmark for offshore inspection quality management. Norwegian inspection companies operating on the UKCS and NCS must maintain meticulous qualification records under Norsk Standard and demonstrate full NORSOK N-001 and Z-008 compliance to PSA inspectors and operator quality assurance teams. Atlantis NDT ERP provides Oslo-based inspection firms with NORSOK-aligned compliance dashboards, PSA audit-ready documentation management, and real-time tracking of CSWIP/PCN offshore certifications essential for maintaining approved vendor status with Equinor, Aker BP, and Vår Energi.",
  "Jubail": "Jubail Industrial City — built and operated by the Royal Commission for Jubail and Yanbu — is the eastern anchor of Saudi Arabia's petrochemical industry, hosting SABIC's largest cluster of crackers alongside the SATORP and Sadara joint ventures and a dense network of utility, downstream and specialty-chemicals tenants. Inspection contractors working inside Jubail navigate three overlapping regulatory regimes: Saudi Aramco SAEP-1112 for Aramco-touching assets, SABIC's internal asset-integrity standards for SABIC tenants, and RCJY-specific industrial-city permits. Atlantis NDT ERP gives Jubail-based inspection teams a single platform reconciling all three frameworks, with pre-loaded report templates for Aramco, SABIC, SATORP and Sadara and bilingual Arabic/English output as standard.",
  "Yanbu": "Yanbu Industrial City on Saudi Arabia's Red Sea coast — also RCJY-administered — is the western terminus of the Petroline pipeline and home to YASREF (the Saudi Aramco-Sinopec joint refinery), Saudi Aramco's Yanbu Refinery, Yanpet (Aramco-ExxonMobil), and Petro Rabigh. Inspection workload here is dominated by refinery and petrochemical turnarounds, NGL fractionation maintenance, and crude-export terminal upkeep, all under the same Aramco SAEP-1112 / RCJY permit regime that governs Jubail. Atlantis NDT ERP supports Yanbu inspection firms with SAEP-1112 qualification tracking, YASREF-format report generation, and sour-service damage-mechanism trending tuned to the Red Sea coastal corrosion environment and the Petroline integrity program.",
  "Edmonton": "Edmonton is the heart of Alberta's Industrial Heartland, the largest concentration of hydrocarbon upgrading and petrochemical processing in North America. The Strathcona, Scotford and Sturgeon complexes operated by Suncor, Imperial Oil, Shell and North West Redwater Partnership generate continuous inspection demand alongside CNRL's Albian Sands upgrader and a growing fertilizer and specialty-chemicals belt. Edmonton inspection contractors must comply with ABSA pressure-equipment registration and AER Directive 056/077 reporting, while managing FIFO crews mobilizing to Fort McMurray, Kearl, Horizon and Cold Lake. Atlantis NDT ERP gives Edmonton-based NDT teams ABSA CRN tracking, CGSB 48.9712 currency monitoring, and cold-weather-aware mobilization packs that have eliminated days of pre-deployment paperwork on oil-sands projects.",
  "Rotterdam": "Rotterdam is Europe's largest port and the petrochemical capital of the EU, with the Europoort and Botlek complexes hosting Shell Pernis (Europe's largest refinery) alongside ExxonMobil, BP, Lukoil, Vitol and Gunvor refineries, plus tank-farm giants Vopak, Koole and LBC. Inspection contractors here operate under the EU Pressure Equipment Directive (PED 2014/68/EU), the Seveso III Directive for major-hazard sites, and ANVS/ILT regulatory oversight. Personnel certification follows ECNDT/EN ISO 9712 with PCN, CSWIP and ASNT routes all recognized. Atlantis NDT ERP supports Rotterdam-based inspection firms with PED conformity evidence packs, Seveso III major-accident-hazard documentation, RvA-aligned ISO 17020 audit trails, and bilingual Dutch/English reporting for ILT statutory submissions.",
  "Jakarta": "Jakarta is the corporate centre of Indonesia's hydrocarbon sector, home to Pertamina's headquarters and the operational base for the six Pertamina refineries at Cilacap, Balikpapan, Dumai, Plaju, Balongan and Kasim. Major IOC operations include BP Tangguh LNG, the former Chevron Rokan block (now Pertamina-operated), Medco Energi and Eni Indonesia. Inspection contractors must manage Migas/SKK Migas regulatory submissions, Kemenaker K3 occupational-safety certification, and Bapeten radiography licensing alongside client-specific qualification schemes from Pertamina and BP. Atlantis NDT ERP gives Jakarta-based inspection firms Pertamina-format report templates, SKK Migas e-Procurement integration, offline field-app capability for remote Indonesian archipelago worksites, and Bahasa Indonesia/English bilingual output.",
  "Dammam": "Dammam is the administrative capital of Saudi Arabia's Eastern Province and the gateway to Saudi Aramco's largest concentration of upstream and downstream assets — Abqaiq stabilization, the Manifa and Berri offshore fields, and Aramco's headquarters at nearby Dhahran. Inspection contractors based in Dammam work the densest single corridor of inspection activity in the world, navigating SAEP-1112 qualification requirements, SACS-002 cybersecurity standards, NRRC radiography rules, and the operational realities of working in 50°C summer temperatures across remote desert and offshore sites. Atlantis NDT ERP supports Dammam inspection teams with SAEP-1112 evidence pack automation, NACE MR0175 sour-service trending for Abqaiq separators, and Aramco APQS/VQIP portal integration that has cut pre-mobilization paperwork by up to 90%.",
  "Manama": "Manama is the capital of Bahrain and the operational hub for the country's hydrocarbon and heavy-industry sectors. BAPCO operates the Sitra refinery (in the middle of the BAPCO Modernisation Programme, which will lift capacity to 380,000 bpd), Tatweer Petroleum runs the Bahrain onshore field as an Occidental-state joint venture, ALBA is one of the world's largest aluminium smelters, and GPIC produces ammonia, urea and methanol at Sitra. Bahrain inspection contractors must comply with NOGA hydrocarbon-sector regulations, LMRA labour records, and operator-specific technical standards from BAPCO, ALBA and GPIC. Atlantis NDT ERP supports Manama-based inspection firms with BAPCO-format reporting, ALBA aluminium-smelter damage-mechanism profiles, and cross-causeway integration for Saudi Aramco work executed from Bahraini logistics bases.",
  "Sharjah": "Sharjah is the UAE's second-largest manufacturing emirate, home to SNOC's Saja'a, Moveyeid and Kahaif onshore gas operations, the Hamriyah Free Zone industrial cluster, and Sharjah Ports Authority's Hamriyah and Khorfakkan terminals. NDT inspection contractors based in Sharjah serve a mix of upstream gas, downstream petrochemical, free-zone manufacturing and port-jetty structural inspection work, navigating FANR radiography licensing, OSHAD HSE requirements, EIAC/ENAS accreditation, and SNOC technical standards. Atlantis NDT ERP gives Sharjah-based inspection teams SNOC-format report templates, Hamriyah Free Zone Authority permit integration, and parallel CSWIP/PCN/ASNT qualification tracking essential for cross-border work into Egypt, Oman and Saudi Arabia.",
  "Bahrain": "Bahrain's national inspection market is anchored by BAPCO's Sitra refinery modernization, ALBA's aluminium smelter expansion (Line 6), GPIC's fertilizer and methanol complex, and a growing logistics-base role supporting Saudi Aramco work across the King Fahd Causeway. Bahraini inspection contractors work under NOGA hydrocarbon regulation, LMRA labour rules, and Bahrain's Personal Data Protection Law (Law No. 30 of 2018), while many also hold Aramco SAEP-1112 qualifications for cross-border Saudi work. Atlantis NDT ERP supports Bahrain inspection businesses with multi-operator compliance tracking (BAPCO, ALBA, GPIC, Tatweer, Saudi Aramco), aluminium-smelter pot-shell damage models, and BAS-accreditation-aligned ISO 17020/17025 audit trails.",
  "Qatar": "Qatar as a national market is administered from Doha, with QatarEnergy's integrated operations at Ras Laffan Industrial City (the world's largest LNG production complex) and Mesaieed Industrial City dominating inspection demand. The North Field expansion adding 32 MTPA of LNG capacity by 2027 has created an extraordinary surge in pre-commissioning and commissioning inspection workload. Inspection contractors must qualify under the QatarEnergy NFPS (North Field Production Standard), comply with QCDD pressure-equipment safety rules, and respect Qatar Law No. 13 of 2016 on Personal Data Protection. Atlantis NDT ERP supports Qatar-based inspection firms with NFPS-aligned evidence-pack automation, cryogenic 9% Ni weld inspection tracking, and QatarEnergy VQS vendor-portal integration that has cut pre-mob admin from days to hours.",
  "Riyadh": "Riyadh is the capital of Saudi Arabia and the corporate headquarters city for Saudi Aramco's commercial operations, SABIC, Maaden, and the wider Vision 2030 industrial-diversification program. While the heaviest concentration of inspection workload sits in the Eastern Province (Dammam, Abqaiq, Jubail) and Western Province (Yanbu, Rabigh), Riyadh hosts the procurement, contracting and Aramco APQS/VQIP qualification functions that govern every inspection contract awarded in the Kingdom. The capital is also home to the Saudi Standards, Metrology and Quality Organization (SASO), the Nuclear and Radiological Regulatory Commission (NRRC), and the Saudi Accreditation Center (SAC) — the three regulatory pillars that frame Saudi inspection practice. Vision 2030 mega-projects including NEOM, the Red Sea Project, Qiddiya, Diriyah Gate and the King Salman Energy Park (SPARK) are creating a new generation of construction and commissioning inspection demand within reach of Riyadh-based contractors. Atlantis NDT ERP supports Riyadh-based inspection firms with Aramco SAEP-1112 qualification mapping, SACS-002 cybersecurity-aligned data residency, bilingual Arabic/English PDF report generation, and direct Aramco APQS/VQIP vendor-portal evidence-pack export — eliminating up to 90% of the pre-mobilization documentation overhead that historically slowed Kingdom contract execution.",
  "Delhi": "Delhi-NCR is the administrative centre for India's hydrocarbon sector and a major engineering-services hub. Indian Oil Corporation (IOCL) is headquartered in New Delhi alongside GAIL India, ONGC, Engineers India Limited (EIL), and the Ministry of Petroleum and Natural Gas. The NCR industrial belt across Gurugram, Noida, Faridabad and Ghaziabad hosts heavy fabrication, power-equipment manufacturing (Bharat Heavy Electricals, Alstom, Siemens), and a growing aerospace-supplier base. Delhi-based inspection contractors execute work across Mathura Refinery (IOCL, 160,000 bpd), Panipat Refinery and Petrochemical Complex (IOCL, 300,000 bpd), the NCR power-generation belt, and EIL-led EPC projects across the country. Regulatory oversight comes from PESO under the Petroleum Act 1934, the Indian Boiler Regulations 1950, OISD (Oil Industry Safety Directorate), AERB for industrial radiography, and BIS for code-conformity. Atlantis NDT ERP supports Delhi-based inspection firms with PESO Form XVI/XIV statutory submission automation, ISNT/ASNT/PCN parallel certification tracking, IOCL and EIL contractor-portal evidence-pack export, and bilingual English/Hindi PDF generation for state-level documentation.",
  "Bangalore": "Bangalore (Bengaluru) is India's aerospace and defence-manufacturing capital, hosting Hindustan Aeronautics Limited (HAL), Bharat Electronics Limited (BEL), the Indian Space Research Organisation (ISRO), the Aeronautical Development Agency (ADA) and the Gas Turbine Research Establishment (GTRE). Bangalore is also home to the manufacturing operations of GE Aviation India, Pratt & Whitney India Engineering Centre, Honeywell Aerospace, Collins Aerospace, Safran, and Airbus India — making it the densest aerospace NDT inspection corridor in South Asia. Beyond aerospace, the wider Karnataka industrial belt includes BPCL Bina (joint operation), Mangalore Refinery and Petrochemicals (MRPL, 300,000 bpd), Kudankulam nuclear supply chain, and the Toyota Kirloskar, Volvo and Ashok Leyland automotive plants. Bangalore inspection contractors must manage NAS 410 Rev 5 (aerospace NDT personnel), NADCAP audits, DGCA approvals, BARC/AERB nuclear authorizations, ISNT/ASNT industrial certifications, and customer-specific qualification matrices from HAL, GE, Pratt & Whitney and Boeing. Atlantis NDT ERP gives Bangalore inspection firms NADCAP-ready audit packs, NAS 410 currency tracking, multi-OEM written-practice mapping, and DGCA Form CA-39 export — eliminating dual-formatting overhead across aerospace and industrial work.",
  "Pune": "Pune is the heart of India's western industrial belt outside Mumbai, hosting the largest concentration of automotive OEMs in the country (Tata Motors, Mahindra & Mahindra, Bajaj Auto, Mercedes-Benz India, Volkswagen India, Force Motors, Kirloskar Group) alongside a growing aerospace, defence and heavy-engineering manufacturing base. Major industrial assets include Tata Motors Pimpri, Bajaj Auto Akurdi and Chakan, Force Motors, Cummins India, Thermax, Kalyani Forge, Bharat Forge (the world's largest forging company), and an expanding pharmaceutical cluster across the Pune-Aurangabad corridor. Bharat Forge's Pune operations alone produce critical components for global oil-and-gas, aerospace and defence supply chains. Maharashtra-wide regulatory oversight comes from PESO, IBR, OISD, AERB and the Maharashtra Pollution Control Board (MPCB), while ISNT and ASNT govern personnel certification alongside customer-specific written practices from each OEM. Atlantis NDT ERP supports Pune-based inspection firms with multi-OEM written-practice tracking, NAS 410 aerospace currency, IS 2825 pressure-vessel compliance, NADCAP-ready audit packs for Bharat Forge supplier work, and offline-mode field capture for shop-floor inspection across multi-shift automotive plants.",
  "Vadodara": "Vadodara (Baroda) is the heart of Gujarat's petrochemical and heavy-engineering corridor. Major industrial assets include IOCL Koyali refinery (also called Gujarat Refinery, 274,000 bpd, IOCL's largest), GAIL Vaghodia, ONGC Hazira (just south), Reliance's Dahej and Hazira petrochemical complexes, GSFC (Gujarat State Fertilizers and Chemicals), GACL (Gujarat Alkalies and Chemicals), Linde India, and the L&T Heavy Engineering Hazira manufacturing complex (one of the world's largest fabrication yards for refinery, petrochemical and nuclear pressure equipment). Vadodara-based inspection contractors serve a unique mix of refinery and petrochemical operations, ammonia-urea fertilizer plants, chlor-alkali assets, and original-equipment manufacturing shop inspection at L&T Heavy Engineering. Regulatory oversight follows PESO, IBR, OISD, AERB, BIS, the Gujarat Pollution Control Board, and the Gujarat Factories Act. Atlantis NDT ERP supports Vadodara inspection firms with IOCL and Reliance contractor-portal evidence-pack export, L&T Heavy Engineering NDE traveler integration, ISNT/ASNT/AWS dual-track certification, and ammonia/urea damage-mechanism trending tuned to fertilizer-plant operating environments.",
  "Surat": "Surat is the eastern gateway to Gujarat's Dahej-Hazira-Vapi industrial belt — one of the densest concentrations of petrochemical, LNG and chemical-processing assets in India. Major operators in the Surat orbit include ONGC Hazira (offshore gas processing), Reliance Hazira Manufacturing Division (petrochemicals), Shell Hazira (LNG re-gasification, India's first private LNG terminal), Petronet LNG Dahej (India's largest LNG terminal, 17.5 MTPA), ONGC Dahej (petrochemicals), Reliance Dahej, GAIL Dahej, Birla Copper at Dahej, and the Vapi chemical cluster south of Surat. The Hazira-Dahej corridor also hosts L&T Heavy Engineering's fabrication yards. Inspection contractors here manage Form XVI/XIV statutory submissions under PESO, OISD-141 asset integrity, AERB radiography licensing, BIS pressure-vessel codes, cryogenic LNG-service inspection (9% Ni welds), and customer-specific qualification from Reliance, Shell, ONGC and Petronet. Atlantis NDT ERP supports Surat-based inspection firms with LNG cryogenic-service damage models, Petronet/Shell vendor-portal evidence-pack export, multi-operator parallel qualification tracking, and bilingual English/Gujarati state documentation alongside English client reports.",
  "Ahmedabad": "Ahmedabad is the commercial and engineering-services capital of Gujarat — a state that hosts India's largest concentration of refining (IOCL Koyali, Reliance Jamnagar Phase I and II, Essar Vadinar/Nayara, BPCL Bina partial supply), petrochemical processing, fertilizer manufacturing and LNG re-gasification. Ahmedabad-based inspection contractors travel statewide across Jamnagar, Koyali, Vadinar, Hazira, Dahej, Vapi, Mundra and Kandla, and the city hosts the engineering centres of major EPC firms including Larsen & Toubro, Adani Group (with major operations at Mundra Port and Hazira), Torrent Power and Arvind Ltd. The Gujarat International Finance Tec-City (GIFT City) is emerging as a financial-services hub adjacent to industrial activity. Regulatory oversight follows PESO, IBR, OISD, AERB, BIS, the Gujarat Pollution Control Board, and the Gujarat Factories Act. Atlantis NDT ERP supports Ahmedabad-based inspection firms with statewide travel-roster mobilization tracking, parallel ISNT/ASNT/PCN certification, Reliance and Adani contractor-portal evidence export, NACE MR0175-aware sour-service trending for Jamnagar and Vadinar refinery work, and bilingual English/Gujarati submissions.",
  "Kolkata": "Kolkata anchors India's eastern industrial belt, with major industrial assets across the Hooghly and West Bengal-Odisha-Jharkhand corridor. Major refineries include IOCL Haldia (180,000 bpd) and IOCL Barauni (in Bihar). HPCL Visakh and IOCL Paradip (in Odisha, 300,000 bpd) are also served by Kolkata-based inspection contractors. The Steel Authority of India Limited (SAIL) operates major steel plants at Durgapur, Bokaro, Rourkela and Burnpur, all generating substantial NDT inspection workload. ONGC's eastern offshore operations in the Bay of Bengal (KG Basin and Mahanadi Basin) are partly supported from Kolkata engineering centres. The Kolkata Port Trust operates major break-bulk and bulk-cargo terminals. Regulatory oversight follows PESO, IBR, OISD, AERB, BIS, the West Bengal Pollution Control Board, and the West Bengal Factories Act. Atlantis NDT ERP supports Kolkata-based inspection firms with multi-state mobilization tracking, SAIL plant-specific damage-mechanism profiles (coke-oven battery, blast-furnace gas cleaning), IOCL Haldia and Paradip contractor-portal evidence export, ISNT/ASNT certification expiry alerts, and bilingual English/Bengali factory-act submissions.",
  "Visakhapatnam": "Visakhapatnam (Vizag) is India's eastern-coast industrial powerhouse. Major industrial assets include HPCL Visakh refinery (160,000 bpd, undergoing the VRMP modernization to 250,000 bpd), Rashtriya Ispat Nigam Limited (RINL) Visakhapatnam Steel Plant, Hindustan Shipyard Limited, Visakhapatnam Port Trust (one of India's largest ports), Hindustan Petroleum's LPG bottling and pipeline terminals, and the eastern naval command shipbuilding and refit facilities. ONGC's KG-DWN basin operations and Reliance KG-D6 deepwater gas production are supported from Vizag onshore bases. The Sri City SEZ south of Vizag hosts automotive, electronics and heavy-engineering manufacturing. Regulatory oversight follows PESO, IBR, OISD, AERB, BIS, the Andhra Pradesh Pollution Control Board, and the Andhra Pradesh Factories Act, alongside Defence PSU specific quality systems for naval shipbuilding inspection. Atlantis NDT ERP supports Vizag-based inspection firms with HPCL VRMP modernization-project inspection tracking, RINL steel-plant damage-mechanism profiles, naval-grade NAS 410 and AWS D1.1 dual-track certification, offshore-platform FIFO roster management, and bilingual English/Telugu state documentation.",
  "Vizag": "Vizag (the common short form for Visakhapatnam) is India's eastern-coast industrial powerhouse, anchored by HPCL Visakh refinery (160,000 bpd, undergoing the VRMP modernization to 250,000 bpd), RINL Visakhapatnam Steel Plant, Hindustan Shipyard, Visakhapatnam Port Trust, Indian Navy Eastern Naval Command shipyards, and the supporting LPG-bottling, pipeline and petroleum-product distribution network. ONGC KG-DWN deepwater operations and Reliance KG-D6 gas production are supported from Vizag onshore bases. The Andhra Pradesh industrial corridor stretching south to Sri City SEZ generates additional petrochemical, automotive and electronics-manufacturing inspection workload. Inspection contractors manage PESO Form XVI/XIV submissions, OISD-141 asset integrity, AERB radiography licensing, BIS code conformity, the AP Pollution Control Board and Factories Act, and Defence PSU written practices for naval shipbuilding. Atlantis NDT ERP supports Vizag-based inspection firms with HPCL VRMP construction-and-commissioning workflow templates, ISNT/ASNT/PCN parallel certification tracking, RINL steel-plant damage models, offshore platform mobilization-roster automation, and Telugu/English bilingual documentation for state-level submissions.",
  "Kochi": "Kochi (Cochin) is Kerala's industrial capital and a major centre of refining, port operations and shipbuilding on India's south-western coast. Major industrial assets include BPCL Kochi refinery (310,000 bpd, BPCL's largest, with the IREP integrated refinery expansion project complete since 2017), Cochin Shipyard Limited (India's largest shipbuilder, currently constructing the indigenous aircraft carrier program and FPSO conversions), Cochin Port Trust, Petronet LNG Kochi (5 MTPA LNG terminal), and the FACT (Fertilisers and Chemicals Travancore) ammonia-urea complex at Udyogamandal. The wider Kerala industrial belt includes HOCL (Hindustan Organic Chemicals), KMML titanium-dioxide, and the Cochin Special Economic Zone. Inspection contractors here manage refinery and petrochemical work alongside the unique inspection requirements of naval and merchant shipbuilding (AWS D1.1, IACS classification-society requirements from IRClass, Lloyd's Register, DNV and ABS). Regulatory oversight follows PESO, IBR, OISD, AERB, BIS, the Kerala State Pollution Control Board, and the Kerala Factories Act. Atlantis NDT ERP supports Kochi-based inspection firms with shipbuilding AWS D1.1 traveler integration, IACS classification-society survey-pack export, BPCL Kochi VRMP/IREP turnaround inspection scheduling, cryogenic LNG-service damage models, and bilingual English/Malayalam state documentation.",
  "Jamnagar": "Jamnagar is the location of the Reliance Industries Jamnagar Refining Complex — the world's largest refining complex, comprising Reliance's Phase I (660,000 bpd) and Phase II (580,000 bpd) refineries with combined nameplate capacity of 1.24 million bpd. Adjacent to Reliance Jamnagar is the Nayara Energy (formerly Essar Oil) Vadinar refinery at 405,000 bpd, plus the Sikka and Vadinar crude-import marine terminals — together making the Jamnagar-Vadinar corridor the single largest concentration of refining inspection workload in Asia. Reliance Jamnagar is also integrated with its petrochemical complex (paraxylene, propylene, polypropylene, polyethylene), the world's largest petcoke gasification facility, and major LNG re-gasification operations at Dahej supporting Jamnagar feedstock. Inspection contractors here manage Reliance-specific contractor qualification, OISD-141 asset integrity, PESO Form XVI/XIV submissions, AERB radiography licensing, NACE MR0175 sour-service for opportunistic-crude operations, and Marine Department oversight of terminal jetty structural inspection. Atlantis NDT ERP supports Jamnagar-based inspection firms with Reliance contractor-portal evidence-pack export, opportunity-crude sour-service damage models, parallel Phase I and Phase II shutdown coordination, jetty structural API/AWS dual-track tracking, and bilingual English/Gujarati state documentation.",
  "New York": "New York is the financial and corporate-services capital of the United States but also a major operational base for the eastern US energy and heavy-engineering sectors. The greater New York-New Jersey industrial belt includes Phillips 66 Bayway refinery (238,000 bpd, the largest refinery on the US East Coast), Buckeye Partners and Kinder Morgan pipeline and terminal operations, the New York Harbor petroleum-storage cluster (one of the largest in the US), Con Edison gas and power infrastructure, the New York City steam-distribution system, and the Indian Point nuclear plant supply chain (now decommissioning). Heavy fabrication and shipbuilding occur at the Brooklyn Navy Yard and the New York Container Terminal. New York is also a major aerospace-engineering and rotorcraft-MRO hub via Lockheed Martin Owego, Sikorsky Stratford (CT, just east), and the Republic Aviation/Northrop Grumman heritage operations on Long Island. Regulatory oversight comes from OSHA Region II, EPA Region 2, the New York State Department of Environmental Conservation (NYSDEC), the New York State Public Service Commission, and the NRC for nuclear work. Atlantis NDT ERP supports New York-area inspection firms with OSHA PSM 29 CFR 1910.119 evidence packs, NRC 10 CFR 50 Appendix B qualification tracking, NYSDEC e-filing integration, and parallel ASNT/NAS 410 certification matrices for cross-sector aerospace and energy work.",
  "Los Angeles": "Los Angeles anchors the Southern California refining and petrochemical belt — one of the largest concentrations of inspection workload on the US West Coast. Major refineries include Marathon Carson and Wilmington (363,000 bpd combined), Chevron El Segundo (290,000 bpd), Phillips 66 Wilmington (139,000 bpd), Valero Wilmington (135,000 bpd), and the PBF Energy Torrance refinery (160,000 bpd). The Port of Los Angeles and Port of Long Beach (the two largest container ports in the western hemisphere) generate substantial structural and lifting-equipment inspection workload. The LA aerospace belt — Boeing, Northrop Grumman, Lockheed Martin Skunk Works (Palmdale), SpaceX (Hawthorne), Aerojet Rocketdyne, Raytheon and Honeywell Aerospace — is the densest aerospace NDT cluster in North America. Regulatory oversight comes from OSHA Region IX, EPA Region 9, the California Air Resources Board (CARB), the South Coast Air Quality Management District (SCAQMD), the California Division of Occupational Safety and Health (Cal/OSHA) — with stricter standards than federal OSHA — and the California State Lands Commission for marine terminals. Atlantis NDT ERP supports LA-area inspection firms with Cal/OSHA PSM evidence packs (stricter than federal 1910.119), SCAQMD Rule 1148 storage-tank emissions integration, NAS 410 aerospace currency tracking, NADCAP audit-pack export, and parallel CARB/SCAQMD/EPA reporting matrices.",
  "Chicago": "Chicago is the Midwest's industrial and logistics capital, hosting a substantial concentration of refining, petrochemical, fabrication and food-processing inspection workload. Major refineries in the Chicago orbit include BP Whiting (430,000 bpd, the sixth-largest US refinery, in Indiana but operationally Chicago), ExxonMobil Joliet (250,000 bpd), Citgo Lemont (177,000 bpd), and Marathon Robinson (220,000 bpd, further south). The Chicago metro also hosts major chemical operations at LyondellBasell Morris, Stepan Company, and the United States Steel Gary Works (Indiana, one of the largest integrated steel plants in North America), ArcelorMittal Burns Harbor and Cleveland-Cliffs Indiana Harbor. The greater Chicago area is also a major aerospace MRO hub (Boeing's commercial-aircraft division HQ until 2022). Regulatory oversight follows OSHA Region V, EPA Region 5, the Illinois EPA, the Indiana Department of Environmental Management, and PHMSA for pipeline operations across the Chicago crude-pipeline hub. Atlantis NDT ERP supports Chicago-area inspection firms with OSHA PSM and EPA RMP evidence packs, multi-state mobilization tracking (IL/IN/WI/MI), steel-plant damage-mechanism profiles (blast-furnace, coke-oven battery, BOF), parallel ASNT/AWS certification matrices, and PHMSA pipeline-integrity reporting templates.",
  "Dallas": "Dallas-Fort Worth is the corporate headquarters city for ExxonMobil (Spring/Irving area), AT&T, American Airlines and Lockheed Martin Aeronautics, alongside a major concentration of midstream pipeline operators (Energy Transfer, Pioneer Natural Resources before acquisition, Kinder Morgan regional HQ) and EPC contractors (Jacobs Engineering, Fluor Irving HQ, KBR Houston-adjacent operations). DFW airport's aerospace-MRO operations including Lockheed Martin Aeronautics Fort Worth (F-35 production), American Airlines Tulsa MRO support, and Bell Helicopter (Hurst) generate substantial aerospace NDT workload. North Texas refining is centered south of DFW with Valero Three Rivers, Phillips 66 Borger and Sweeny refineries (further south), while pipeline-integrity work concentrates across the Permian-to-Gulf Coast crude-takeaway network operated from Dallas-Houston corridors. Regulatory oversight follows OSHA Region VI, EPA Region 6, the Texas Commission on Environmental Quality (TCEQ), the Texas Railroad Commission for pipelines, and the Texas Department of Licensing and Regulation (TDLR) for pressure equipment. Atlantis NDT ERP supports Dallas-area inspection firms with multi-state pipeline-integrity tracking, OSHA PSM evidence packs, NAS 410 aerospace currency for Lockheed and Bell supplier work, NADCAP audit-pack export, and Pioneer/Energy Transfer contractor-portal integration.",
  "Atlanta": "Atlanta is the corporate and logistics capital of the southeastern United States, hosting major industrial operations across power generation, automotive manufacturing, aerospace MRO, and a growing petrochemical-distribution network. Major industrial assets in the Atlanta orbit include the Southern Company (Georgia Power) coal, natural-gas and nuclear fleet (Plant Vogtle's two new AP1000 reactors representing the only new nuclear construction in the US), Kia Motors Manufacturing West Point, the Mercedes-Benz US International plant at Tuscaloosa (in Alabama, served from Atlanta), Lockheed Martin Aeronautics Marietta (C-130J and C-5 maintenance), Gulfstream Aerospace Savannah (GAC, the world's largest business-jet manufacturer), and Delta Air Lines TechOps at Hartsfield-Jackson (the world's largest airline-MRO facility). Regulatory oversight comes from OSHA Region IV, EPA Region 4, the Georgia Environmental Protection Division, the Nuclear Regulatory Commission Region II for Plant Vogtle, and the Federal Aviation Administration for aerospace MRO. Atlantis NDT ERP supports Atlanta-area inspection firms with NRC 10 CFR 50 Appendix B qualification tracking for Plant Vogtle supply-chain work, NAS 410 aerospace currency for Lockheed and Gulfstream supplier inspection, FAA Part 145 repair-station documentation, and parallel ASNT/NAS 410 certification matrices.",
  "Philadelphia": "Philadelphia anchors the mid-Atlantic refining and petrochemical corridor stretching from the Delaware Valley up to the Marcus Hook industrial complex. While the Philadelphia Energy Solutions (PES) refinery closed in 2019 after the catastrophic explosion, the Delaware Valley remains a significant inspection workload centre. Major industrial assets include Monroe Energy Trainer refinery (190,000 bpd, Delta Air Lines subsidiary), the Marcus Hook Industrial Complex (Sunoco/Energy Transfer NGL processing and ethane export), PBF Energy Delaware City (just downriver in Delaware, 190,000 bpd), the Eddystone power generation complex, Boeing Rotorcraft (Ridley Park, V-22 Osprey and CH-47 Chinook), Lockheed Martin Moorestown (in NJ), the Naval Surface Warfare Center Carderock and the Philadelphia Naval Business Center shipbuilding heritage. The greater Philadelphia chemical belt includes Rohm and Haas/Dow, Sunoco, and ExxonMobil Chemicals. Regulatory oversight follows OSHA Region III, EPA Region 3, the Pennsylvania Department of Environmental Protection (PADEP), and the New Jersey Department of Environmental Protection (NJDEP). Atlantis NDT ERP supports Philadelphia-area inspection firms with OSHA PSM evidence packs (with Marcus Hook NGL-specific damage models), multi-state mobilization tracking (PA/NJ/DE/MD), Boeing rotorcraft supplier NAS 410 currency, NADCAP audit-pack export, and Energy Transfer/Sunoco contractor-portal integration.",
  "Pittsburgh": "Pittsburgh is the historical centre of American steelmaking and remains the corporate base for substantial fabrication, energy and chemical-processing inspection workload. Major industrial assets include United States Steel Mon Valley Works (Edgar Thomson, Clairton coke works, Irvin), Cleveland-Cliffs (formerly ArcelorMittal) plants at Steubenville and Weirton, Allegheny Technologies (ATI specialty metals), Westinghouse Electric Cranberry (the original nuclear-reactor designer, now servicing the existing US PWR fleet), the Shell Pennsylvania Petrochemicals Complex at Monaca (the largest Appalachian petrochemical project, ethane cracker, in operation since 2022), CONSOL Energy coal operations, Range Resources Marcellus shale gas operations, and the EQT Corporation natural-gas operations across the Marcellus and Utica plays. Pittsburgh is the centre of Marcellus and Utica midstream pipeline construction and inspection. Regulatory oversight comes from OSHA Region III, EPA Region 3, the Pennsylvania Department of Environmental Protection (PADEP), the Pennsylvania Public Utility Commission for pipelines, and the NRC for Westinghouse supply chain work. Atlantis NDT ERP supports Pittsburgh-area inspection firms with steel-plant damage-mechanism profiles (coke-oven battery, blast-furnace, BOF), Marcellus shale gas-gathering pipeline tracking, NRC 10 CFR 50 Appendix B qualification for Westinghouse supply work, NAS 410 aerospace currency, and PADEP/PA-PUC e-filing integration.",
  "Tulsa": "Tulsa is one of the historical capitals of the US oil and gas industry and remains a major operational base for midstream, refining and oilfield-services inspection. Major industrial assets in the Tulsa orbit include Holly Energy Partners (now HF Sinclair after merger) operating the Tulsa East and Tulsa West refineries (155,000 bpd combined), Phillips 66 Borger and Ponca City (in Oklahoma and Texas), CITGO Corpus Christi (Oklahoma corporate base for some operations), the Williams Companies (midstream giant, Tulsa HQ), ONEOK (midstream, Tulsa HQ), Magellan Midstream Partners (Tulsa HQ, now Oneok subsidiary), the Cushing oil-storage hub (the WTI delivery point, 60 miles west of Tulsa), and the American Airlines Tulsa Maintenance Base (the world's largest commercial-airline MRO facility for narrow-body fleet). Tulsa is also a major heavy-fabrication hub for pressure-vessel and tank manufacturing. Regulatory oversight follows OSHA Region VI, EPA Region 6, the Oklahoma Corporation Commission for oil and gas, the Oklahoma Department of Environmental Quality, PHMSA for pipelines, and the Oklahoma Department of Labor for pressure equipment. Atlantis NDT ERP supports Tulsa-area inspection firms with midstream pipeline-integrity tracking (HCA/PHMSA compliance), Cushing tank-farm API 653 scheduling, American Airlines MRO supplier NAS 410 currency, NADCAP audit-pack export, and Williams/ONEOK contractor-portal integration.",
  "Baton Rouge": "Baton Rouge is the heart of Louisiana's Mississippi River Chemical Corridor and home to the second-largest US refinery. Major industrial assets include ExxonMobil Baton Rouge (520,000 bpd refinery plus integrated chemicals plant, one of the world's largest integrated petrochemical complexes), Shell Geismar (chemicals), Dow Chemical Plaquemine and Hahnville, BASF Geismar, Methanex Geismar (the world's largest single-train methanol plant), Air Products Convent (industrial gases), Westlake Chemical Geismar, the Honeywell UOP catalyst manufacturing operation, Mosaic Faustina (fertilizer), Nucor Steel Convent, and the Georgia-Pacific Port Hudson paper mill. The Louisiana Chemical Corridor between Baton Rouge and New Orleans hosts more than 150 chemical plants and refineries — one of the densest concentrations of OSHA PSM-covered process operations in the United States. Regulatory oversight follows OSHA Region VI, EPA Region 6, the Louisiana Department of Environmental Quality (LDEQ), the Louisiana Department of Energy and Natural Resources (LDENR), the Louisiana State Boiler Inspector, and PHMSA for pipelines. Atlantis NDT ERP supports Baton Rouge-area inspection firms with OSHA PSM evidence packs (with ammonia, chlorine, ethylene oxide damage models), LDEQ EDMS e-filing, multi-client Chemical Corridor shutdown coordination, NACE MR0175 sour-service trending, and ExxonMobil/Dow/BASF contractor-portal integration.",
  "Corpus Christi": "Corpus Christi is the largest crude-oil export port in the United States and a rapidly growing centre of refining, petrochemical and LNG inspection. Major industrial assets include the Citgo Corpus Christi East refinery (165,000 bpd), Citgo Corpus Christi West refinery (60,000 bpd), Flint Hills Resources Corpus Christi (305,000 bpd, Koch subsidiary), Valero Corpus Christi East and West (370,000 bpd combined), Cheniere Corpus Christi Liquefaction (CCL Stage I 15 MTPA, Stage II under construction adding 10+ MTPA), the Gibson Energy crude-export terminal at Ingleside, Enterprise Products Partners Mont Belvieu-to-Corpus pipeline and terminal network, and the Steel Dynamics Sinton steel mill. Corpus Christi handles more than 60% of US crude exports. The South Texas Eagle Ford and Permian crude pipelines terminate here. Regulatory oversight follows OSHA Region VI, EPA Region 6, the Texas Commission on Environmental Quality (TCEQ), the Texas Railroad Commission for pipelines, the US Coast Guard for LNG terminals, PHMSA for pipelines, and the Texas Department of Licensing and Regulation (TDLR) for pressure equipment. Atlantis NDT ERP supports Corpus Christi-area inspection firms with LNG cryogenic 9% Ni weld inspection tracking, USCG/PHMSA marine-export terminal compliance, crude-tank-farm API 653 scheduling, OSHA PSM evidence packs, and Cheniere/Enterprise/Citgo contractor-portal integration.",
  "Toronto": "Toronto is the financial and corporate-services capital of Canada and a major engineering-services hub for the country's eastern industrial belt. Major industrial assets in the Toronto orbit include Imperial Oil Sarnia refinery (120,000 bpd, in Sarnia 270 km west), Suncor Sarnia (85,000 bpd), Shell Corunna (75,000 bpd), the Nova Chemicals Corunna and St Clair River sites, the Bruce Power Bruce A and B nuclear generating stations (8 CANDU reactors, the largest operating nuclear facility in the world), Ontario Power Generation's Pickering, Darlington and Atura Power facilities, the Stelco and ArcelorMittal Dofasco steel plants at Hamilton, Bombardier Aerospace and Pratt & Whitney Canada aerospace operations, and the Magna International, Linamar and Martinrea automotive supplier base. Toronto is also the engineering-services centre for Ontario's nuclear refurbishment program — the largest single nuclear infrastructure project in North America. Regulatory oversight comes from the Canadian Nuclear Safety Commission (CNSC), the Technical Standards and Safety Authority (TSSA, Ontario's pressure-equipment and elevators regulator), the Ontario Ministry of Labour, the Ontario Ministry of the Environment, and the Canadian Energy Regulator (CER) for interprovincial pipelines. Atlantis NDT ERP supports Toronto-area inspection firms with TSSA Boiler and Pressure Vessel Safety records, CNSC nuclear inspection qualification (CSA N285/N286 supply chain), CGSB 48.9712 certification expiry alerts, Bruce/OPG vendor-portal evidence-pack export, and parallel CGSB/ASNT/NAS 410 certification matrices.",
  "Vancouver": "Vancouver is the largest port city on Canada's west coast and the corporate base for British Columbia's resource, mining, and emerging LNG industries. Major industrial assets in the Vancouver orbit include the Parkland Burnaby refinery (55,000 bpd, BC's only refinery), the Cherry Point ExxonMobil refinery (just south in Washington State, 145,000 bpd), Tilbury LNG (BC LNG storage and peak-shaving), Woodfibre LNG (under construction near Squamish), the LNG Canada project at Kitimat (operated by Shell with KOGAS, Mitsubishi, PetroChina and Petronas — Canada's largest energy project at $40B+ CAD, in operation 2025), Coastal GasLink pipeline, the Trans Mountain Pipeline expansion (TMX, completed 2024), and the Annacis Island wastewater treatment plant. The BC mining and pulp-and-paper industries provide additional inspection workload. Regulatory oversight comes from the BC Safety Authority (Technical Safety BC), the BC Oil and Gas Commission (now BC Energy Regulator), WorkSafeBC, the Canadian Nuclear Safety Commission (limited applicability), and the Canadian Energy Regulator (CER) for federal pipelines. Atlantis NDT ERP supports Vancouver-area inspection firms with Technical Safety BC pressure-equipment records, LNG cryogenic 9% Ni weld inspection tracking, TMX and Coastal GasLink integrity reporting, CGSB 48.9712 certification, WorkSafeBC compliance, and Shell LNG Canada/CGL contractor-portal evidence export.",
  "Mexico City": "Mexico City is the corporate headquarters of Pemex (Petróleos Mexicanos, the Mexican state oil company) and the administrative centre for Mexico's hydrocarbon, petrochemical and power-generation sectors. Pemex operates six refineries (Salina Cruz, Cadereyta, Tula, Salamanca, Madero, Minatitlán) plus the new Dos Bocas refinery (Olmeca) in Tabasco (340,000 bpd, in startup since 2024). Pemex E&P operates the Cantarell, Ku-Maloob-Zaap and onshore basins. Other major operators include CFE (Comisión Federal de Electricidad, Mexico's state utility), and post-energy-reform private operators including BHP, Eni, Repsol, Shell and Wintershall (with offshore blocks). Major NDT contractors based in or operating from Mexico City include Mistras Mexico, Applus+ RTD Mexico, Bureau Veritas Mexico, Lloyd's Register Mexico, TÜV SÜD Mexico, and local firms Tecnatom Mexico and Inspecciones y Servicios Industriales. Regulatory oversight follows ASEA (Agencia Nacional de Seguridad Industrial y de Protección al Medio Ambiente del Sector Hidrocarburos), CRE (Comisión Reguladora de Energía), CNH (Comisión Nacional de Hidrocarburos), CNSNS (Comisión Nacional de Seguridad Nuclear y Salvaguardias) for radiography, and STPS (Secretaría del Trabajo y Previsión Social) for occupational safety. Atlantis NDT ERP supports Mexico City-based inspection firms with Pemex SAP integration, ASEA SISPA statutory reporting, parallel ASME/NMX-B/API code conformity, NACE MR0175 sour-service for Cantarell/KMZ work, and bilingual Spanish/English documentation.",
  "Sao Paulo": "São Paulo is the corporate and industrial capital of Brazil — the largest Latin American economy and a major centre of refining, petrochemical, aerospace and automotive inspection workload. Major industrial assets in the São Paulo orbit include Petrobras refineries at REPLAN Paulínia (415,000 bpd, Brazil's largest), RECAP Capuava, REVAP São José dos Campos, and RPBC Cubatão; the Braskem São Paulo petrochemical operations (Brazil's largest petrochemical company); the Embraer aerospace operations (São José dos Campos and Gavião Peixoto — the world's third-largest commercial-aircraft manufacturer); the Volkswagen, General Motors, Ford, Toyota and Mercedes-Benz automotive operations across the ABC industrial belt; CSN steel (Volta Redonda, in RJ but served from SP); and the Usiminas, Gerdau and ArcelorMittal Brazil steel-plant operations. Petrobras's offshore E&P operations in the Santos and Campos basins are administered from São Paulo and Rio de Janeiro engineering centres. Regulatory oversight comes from ANP (Agência Nacional do Petróleo), CNEN (Comissão Nacional de Energia Nuclear) for radiography, INMETRO (the national metrology and accreditation authority), and the Ministry of Labour (MTE) NR-13 pressure-equipment regulation. ABENDI (Associação Brasileira de Ensaios Não Destrutivos e Inspeção) administers Brazil's national NDT personnel certification under ISO 9712. Atlantis NDT ERP supports São Paulo-based inspection firms with NR-13 statutory inspection scheduling, ABENDI/PNQT certification tracking, Petrobras contractor-portal evidence export, Embraer NAS 410 aerospace currency, and bilingual Portuguese/English documentation.",
  "Rio de Janeiro": "Rio de Janeiro is the operational centre of Brazil's offshore petroleum industry and the corporate headquarters city for Petrobras (Petróleo Brasileiro) — one of the world's largest deepwater operators. Petrobras operates the bulk of production from the prolific Santos and Campos basin pre-salt plays (Lula/Tupi, Buzios, Sapinhoa, Mero, Sepia, Atapu, fields), supported by a vast fleet of FPSOs (Floating Production Storage and Offloading units, more than 50 in operation). Major operating partners include Shell Brasil, TotalEnergies Brasil, Equinor Brasil, BP Brasil, Repsol Sinopec Brasil, and Chevron Brasil. Petrobras refineries in the Rio orbit include REDUC Duque de Caxias (242,000 bpd), the Sergipe-Alagoas onshore production, and the Aracaju and Sergipe terminals. Major NDT contractors operating from Rio include Mistras Brasil, Bureau Veritas Brasil, Lloyd's Register Brasil, Applus+ Brasil, DNV Brasil, ABS Brasil (American Bureau of Shipping, key classification society for FPSOs), and local firms Lupatech, Wilson Industries Brasil and Tasa Brasil. Regulatory oversight follows ANP (Agência Nacional do Petróleo, the Brazilian E&P regulator), IBAMA for environmental compliance, the Brazilian Navy for FPSO and offshore-vessel inspection, CNEN for radiography, and ABENDI for personnel certification under ISO 9712. Atlantis NDT ERP supports Rio-based inspection firms with FPSO API 510/570 inspection campaign management, IACS classification-society survey-pack export, deepwater pre-salt sour-service damage models (CO2-rich high-pressure environments), ANP statutory reporting integration, and bilingual Portuguese/English documentation.",
  "Sydney": "Sydney is Australia's largest city and the corporate base for substantial heavy-industry, refining and aerospace inspection workload across New South Wales. Major industrial assets in the Sydney orbit include the legacy Shell Clyde (closed 2013) and Caltex Kurnell (converted to import terminal in 2014) sites — Australia now has only two operating refineries — but Sydney remains a major centre of fuel-terminal, pipeline, marine and aviation-fuel inspection across Port Botany, Kurnell, Clyde and Newcastle. BlueScope Steel Port Kembla (south of Sydney) is the largest steel-making operation in Australia. Tomago Aluminium (north, near Newcastle) is one of Australia's three aluminium smelters. The Newcastle coal-export terminal (the world's largest) drives substantial mining and bulk-handling inspection workload. The Sydney aerospace cluster includes Boeing Defence Australia, Airbus Australia, Lockheed Martin Australia (Williamtown F-35 sustainment), Hawker Pacific MRO, and the BAE Systems Williamtown operations. Regulatory oversight follows the NSW Work Health and Safety Act, NSW SafeWork, the Australian Maritime Safety Authority (AMSA), the Civil Aviation Safety Authority (CASA), the Australian Radiation Protection and Nuclear Safety Agency (ARPANSA), and the Department of Climate Change, Energy, the Environment and Water for NSW environmental compliance. AINDT administers NDT personnel certification. Atlantis NDT ERP supports Sydney-based inspection firms with AS 3788 pressure-equipment tracking, AS 3998 NDT personnel currency, BlueScope Port Kembla steel-plant damage models, Lockheed Martin/Boeing/BAE NAS 410 aerospace currency, NADCAP audit-pack export, and parallel AINDT/PCN/ASNT certification matrices.",
  "Melbourne": "Melbourne is the corporate and engineering-services capital of Victoria and a major centre of refining, petrochemical, aerospace and heavy-fabrication inspection workload across south-eastern Australia. Major industrial assets in the Melbourne orbit include the Viva Energy Geelong refinery (120,000 bpd, one of Australia's two remaining operating refineries after Altona, BP Kwinana and Shell Clyde closures), the BP Crib Point LNG and gas-import terminal proposal site, Esso Australia (ExxonMobil) Longford gas-processing and Bass Strait offshore operations, the Bass Strait FPSO operations operated by Esso/BHP, Loy Yang A and B brown-coal power stations in the Latrobe Valley, the Australian Defence Force Industries (BAE Systems Williamstown, Thales Australia Bendigo for armoured vehicles, Boeing Defence Australia at Tullamarine), and the wider Victorian automotive-manufacturing legacy (Ford, GM Holden and Toyota all closed plants between 2016-2017 but the supplier base survives). Regulatory oversight follows the Victorian Occupational Health and Safety Act, WorkSafe Victoria, the National Offshore Petroleum Safety and Environmental Management Authority (NOPSEMA) for offshore work, AMSA for marine, CASA for aerospace, ARPANSA for radiography, and the Australian Energy Regulator for pipelines. AINDT administers personnel certification. Atlantis NDT ERP supports Melbourne-based inspection firms with NOPSEMA Safety Case documentation for Bass Strait offshore work, AS 3788/AS 3998 compliance, brown-coal-fired-boiler damage models, BAE/Thales/Boeing supplier NAS 410 aerospace currency, NADCAP audit-pack export, and parallel AINDT/ASNT/PCN certification matrices.",
};

// ─── Local integrations data ──────────────────────────────────────────────

const localIntegrations: Record<string, string[]> = {
  "Houston": ["SAP PM integration", "IBM Maximo CMMS", "API 510/570/653 report formats", "OSHA PSM compliance records", "AspenTech RBI module export"],
  "Dubai": ["ADNOC systems integration", "SAP S/4HANA PM", "CSWIP qualification mapping", "ISO 55000 AM alignment", "DNV GL asset registers"],
  "Abu Dhabi": ["ADNOC Company Standard ACS-01 formats", "SAP PM export", "Maximo CMMS integration", "IRIS AIM platform compatibility", "ZADCO/ADMA reporting formats"],
  "Saudi Arabia": ["Saudi Aramco SAEP-1112 qualification mapping", "SAPID/SASO format reports", "SAP S/4HANA integration", "SABIC QHSE documentation", "Aramco IADC compliance"],
  "Calgary": ["ABSA pressure vessel registration", "CGSB 48.9712 certification tracking", "Shell Canada written practice alignment", "Canadian Energy Regulator (CER) formats", "SUNCOR CMMS integration"],
  "Singapore": ["MOM CERT qualification records", "ISO 9001:2015 QMS integration", "Sembcorp/Jurong Island client formats", "EDB approved vendor documentation", "DNV-GL Singapore audit trails"],
  "Mumbai": ["ISNT certification integration", "OISD standard compliance", "BPCL/HPCL asset registers", "PESO statutory report formats", "ONGC quality documentation"],
  "London": ["PCN/BINDT certification records", "UK PSSR 2000 inspection registers", "ONR nuclear documentation (read-only)", "TÜV SÜD integration", "Lloyd's Register audit formats"],
  "Perth": ["AS 3788 pressure vessel registers", "WorkSafe WA statutory reports", "IFIS inspection management", "Woodside/Chevron vendor portal integration", "NATA laboratory accreditation tracking"],
  "Doha": ["QatarEnergy NFPS format reports", "QCDD statutory inspection records", "Technip Energies project integration", "Worley CMMS export", "ISO 55001 AM system alignment"],
  "Kuwait City": ["KNPC qualification formats", "KOC inspection standard compliance", "Kuwait MOO regulatory reports", "FEED/EPC contractor integration", "Al-Zour refinery asset registers"],
  "Muscat": ["PDO CIMS integration", "OQ refinery asset management", "OHSAS 18001 documentation", "Oman Authority for Partnership for Development", "GIS-based asset location mapping"],
  "Hyderabad": ["ISNT Level I/II/III tracking", "PESO boiler inspection records", "BARC/NPCIL compliance documentation", "BIS IS 2825 pressure vessel registers", "Reliance Industries quality formats"],
  "Chennai": ["ISNT/ASNT dual certification tracking", "CPCL plant inspection records", "DGCA aerospace documentation", "BARC radiography authorization tracking", "L&T Hydrocarbon CMMS integration"],
  "Kuala Lumpur": ["PETRONAS PCSB format reports", "DOSH PMA certification integration", "SIRIM QAS audit documentation", "PETRONAS Technical Standards (PTS)", "MLNG Bintulu export formats"],
  "Lagos": ["DPR statutory inspection records", "NAPIMS QMS documentation", "NLNG qualification formats", "Shell SPDC vendor portal export", "Total Nigeria CMMS integration"],
  "New Orleans": ["OSHA PSM 29 CFR 1910.119 records", "API RP 580 RBI documentation", "Louisiana DNR regulatory reports", "BP/ExxonMobil vendor system integration", "Meridium APM asset register export"],
  "Denver": ["DOT PHMSA pipeline records", "API 1160 IMP documentation", "CDPHE regulatory compliance reports", "SIS inspection management export", "Kinder Morgan/DCP Midstream formats"],
  "Aberdeen": ["PSSR 2000 written scheme of examination", "UKCS safety case documentation", "PCN/BINDT certification database", "Petrofac/Wood vendor portals", "Lloyd's Register offshore survey integration"],
  "Oslo": ["NORSOK N-001/Z-008 compliance records", "PSA Norway regulatory reporting", "Equinor STID documentation system", "DNV Synergi Life audit trails", "Aker BP vendor qualification portal"],
  "Jubail": ["Saudi Aramco SAEP-1112", "SABIC Asset Integrity Standards", "SATORP technical standards", "RCJY industrial-city permits", "NACE MR0175 sour-service data"],
  "Yanbu": ["Saudi Aramco SAEP-1112", "YASREF inspection standards", "Royal Commission Yanbu permits", "Sinopec joint-venture formats", "NACE MR0175 sour-service"],
  "Edmonton": ["ABSA pressure equipment registers", "AER Directive 056/077", "CSA B51 / B31.3", "CGSB 48.9712 certification mapping", "Suncor / Imperial Strathcona portals"],
  "Rotterdam": ["PED 2014/68/EU conformity", "Seveso III major-hazard evidence", "ANVS/ILT regulatory reports", "Vopak / Koole / HES tank-farm formats", "PCN/ECNDT certification tracking"],
  "Jakarta": ["Migas / Ditjen Migas reporting", "Pertamina inspection-standard reports", "SKK Migas vendor qualification", "BKI (Biro Klasifikasi Indonesia) integration", "K3 (Kemenaker) safety records"],
  "Dammam": ["Saudi Aramco SAEP-1112", "SABIC Asset Integrity Standards", "SADAFCO / NADEC industrial assets", "MODON 2nd Industrial City permits", "NACE MR0175 sour-service data"],
  "Manama": ["BAPCO Technical Standards", "ALBA aluminium-smelter formats", "Bahrain NOGA statutory reports", "Tatweer Petroleum standards", "GPIC fertiliser-plant integration"],
  "Sharjah": ["SNOC (Sharjah National Oil) standards", "Hamriyah Free Zone permits", "OSHAD HSE compliance", "Sharjah Ports Authority records", "ADNOC supply-chain qualification"],
  "Bahrain": ["BAPCO Modernisation Programme", "Bahrain NOGA statutory reports", "GPIC fertiliser-plant formats", "ALBA aluminium-smelter integration", "Bahrain LMRA work-permit tracking"],
  "Qatar": ["QatarEnergy NFPS format reports", "QCDD statutory inspection records", "QP / NOC asset integrity standards", "Ras Laffan Industrial City permits", "Mesaieed Industrial City permits"],
};

// ─── Per-city rich content — contractors, regulators, currency, cases ─────
// Keyed by display city name (matches `city` prop). Used by the top-30
// rewrite to render distinctive, non-templated content per location.

interface CityRichContent {
  /** Opening paragraph naming named local NDT contractors, refiners, EPCs */
  contractors: string;
  /** Local regulators and accreditation bodies relevant to inspection work */
  regulators: string;
  /** Currency-converted example pricing for $18,000/yr (or local equivalent) */
  currencyExample: { currency: string; amount: string; note: string };
  /** ISO accreditation body specific to the location */
  accreditationBody: string;
  /** 3-4 anonymous-style case study snippets */
  caseStudies: string[];
  /** Integration partners specific to region */
  regionalIntegrations: string[];
}

const erpCityRichContent: Record<string, CityRichContent> = {
  "Houston": {
    contractors: "Houston is home to the global headquarters of Mistras Group (NDT services and asset-integrity software), Acuren (operating ~50 US service centres), Team Industrial Services (refinery turnaround specialists), BHGE Process Solutions, and Applus+ Energy & Industry. Major refining operators in the metro include ExxonMobil Baytown (the largest US refinery), Shell Deer Park, LyondellBasell Channelview, Phillips 66 Sweeny, Marathon Galveston Bay, Valero Texas City and Chevron Pasadena. EPC contractors with major Houston offices include KBR, Bechtel, Fluor, Worley, Wood, McDermott and Saulsbury Industries.",
    regulators: "Texas Railroad Commission (TRRC) regulates upstream wells, intrastate pipelines and gas utilities; the Texas Commission on Environmental Quality (TCEQ) administers air-emissions and water-quality permits for Gulf Coast facilities. OSHA Region VI enforces 29 CFR 1910.119 Process Safety Management. The Texas Department of Licensing and Regulation (TDLR) governs boilers and pressure vessels. ASNT International is headquartered nearby in Columbus OH but Texas-based inspectors most commonly qualify via ASNT SNT-TC-1A written practices recognized by ExxonMobil, Shell, Valero, Marathon and Chevron.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB (ANSI National Accreditation Board) is the dominant ISO 9001 / ISO 17020 / ISO 17025 accreditation body for Houston inspection companies. A2LA (American Association for Laboratory Accreditation) is the secondary accreditation route for ISO 17025 calibration labs.",
    caseStudies: [
      "Acme NDT Services (Houston-area, 35 techs) cut API 510 report turnaround from 4 days to 30 minutes per vessel and eliminated three repeat ExxonMobil Baytown pre-mob audit findings in the first 6 months on Atlantis NDT ERP.",
      "Bayou Inspection Group (Pasadena, 28 techs) consolidated 14 client SharePoint portals into one Atlantis tenant and reduced per-shutdown documentation overhead by 58% across the 2025 Gulf Coast turnaround season.",
      "Ship Channel Integrity (Deer Park, 19 techs) used the automated PSM evidence-pack export to clear an unannounced OSHA Region VI inspection without a single recordable in the audit cycle following Hurricane Beryl.",
      "Gulf Coast NDT Specialists (Galveston, 22 techs) restored billable utilization from 61% to 74% in the first year — the scheduler caught 17 instances of stale CSWIP currency that would have caused mobilization aborts.",
    ],
    regionalIntegrations: ["SAP S/4HANA at ExxonMobil Baytown and Shell Deer Park", "Maximo at Marathon Galveston Bay and Phillips 66 Sweeny", "Meridium APM at Valero Texas City", "Synergi Life at Chevron Pasadena", "Procore at Houston EPC contractors KBR and Bechtel"],
  },
  "Dubai": {
    contractors: "Dubai is the regional headquarters city for Mistras Middle East, Applus+ RTD Middle East, Oceaneering Dubai, Bureau Veritas Industrial Services UAE, Intertek UAE, and TÜV SÜD Middle East. The city hosts the regional offices of all major IOCs and OFS firms — Shell, BP, TotalEnergies, ExxonMobil, Halliburton, Schlumberger (SLB), Baker Hughes and Weatherford. Major operators served from Dubai include ADNOC (with on-shore offices in Abu Dhabi), ENOC, Emirates National Oil Company, DUCAB and Emirates Global Aluminium. Key EPC firms include Galfar Engineering, Drake & Scull, Tecnimont, Petrofac UAE, McDermott Dubai and CCC.",
    regulators: "Dubai Municipality regulates pressure equipment under the Emirate of Dubai's industrial-safety framework. The Federal Authority for Nuclear Regulation (FANR) governs all radiographic activity in the UAE. ADNOC's Technical Center publishes the Asset Integrity Management Standard which is contractually binding on all inspection contractors supplying ADNOC group companies. The Dubai Civil Defence approves fire-protection and high-rise structural inspection programs. OSHAD (Occupational Safety and Health Center Abu Dhabi) sets the HSE framework adopted by most UAE operators outside Dubai-only contracts.",
    currencyExample: { currency: "AED", amount: "AED 66,000/year", note: "Approx AED 66,000 at 1 USD = 3.67 AED, billed annually in AED or USD" },
    accreditationBody: "EIAC (Emirates International Accreditation Centre) and ENAS (Emirates National Accreditation System) are the dominant ISO 9001 / ISO 17020 / ISO 17025 accreditation bodies for UAE inspection companies. Dubai Accreditation Centre (DAC) accredits the majority of Dubai-resident calibration labs.",
    caseStudies: [
      "Falcon NDT Middle East (Jebel Ali, 45 techs) reduced ADNOC pre-mob qualification submissions from 11 days to 2.5 days and won two additional platform-inspection scopes in the same bid round.",
      "Gulf Inspection Services (Dubai Investment Park, 30 techs) replaced a Dropbox-based certification repository with Atlantis NDT ERP and eliminated four recurring CSWIP-currency findings on Emirates Global Aluminium audits.",
      "Emirates Asset Integrity (Al Quoz, 22 techs) generated bilingual Arabic/English inspection reports directly from field data — cutting ENOC's report-rejection rate from 12% to under 2% over 18 months.",
      "Jebel Ali Tank Inspection (24 techs) ran the entire 2025 ENOC terminal turnaround on Atlantis NDT ERP, completing API 653 inspections on 28 tanks two weeks ahead of schedule with zero certification non-conformances.",
    ],
    regionalIntegrations: ["SAP S/4HANA at ADNOC and Emirates Global Aluminium", "Sage 300 Middle East for Dubai-resident SME contractors", "Maximo at ENOC and DUCAB", "ADNOC vendor portal (Tejari)", "ECNDT records exchange for European-qualified inspectors"],
  },
  "Abu Dhabi": {
    contractors: "Abu Dhabi hosts the operational base of ADNOC Group's inspection contractors including ADNOC Inspection Services, Petrofac Emirates, NPCC, Galfar Al Misnad, Ghantoot Group and CCC. Major IOC partners include BP (45-year ADCO concession history), TotalEnergies (ADMA-OPCO heritage), ExxonMobil (ZADCO heritage) and Eni (Al Yasat). ADNOC's integrated operating companies — ADNOC Onshore, ADNOC Offshore, ADNOC Refining, ADNOC Gas, ADNOC LNG, Borouge — generate the bulk of inspection workload at Ruwais, Habshan, Das Island, Zirku and Ruwais Industrial Complex. Key engineering partners include McDermott Abu Dhabi, Saipem UAE and L&T Hydrocarbon Engineering.",
    regulators: "ADNOC's Technical Center mandates the Asset Integrity Management (AIM) Standard, written-practice qualifications endorsed via ADNOC Personnel Qualification System (APQS), and inspection-evidence formats reviewed by the ADNOC Asset Integrity Authority. The Federal Authority for Nuclear Regulation (FANR) governs radiography activity across the UAE. OSHAD-SF (Occupational Safety and Health Center Abu Dhabi — Statutory Framework) sets the HSE baseline for all Abu Dhabi-based industrial activity, with sector-specific elements adopted by ADNOC group companies.",
    currencyExample: { currency: "AED", amount: "AED 66,000/year", note: "Approx AED 66,000 at 1 USD = 3.67 AED, billed annually in AED or USD" },
    accreditationBody: "ENAS (Emirates National Accreditation System) and EIAC (Emirates International Accreditation Centre) are the primary accreditation bodies for ISO 17020 inspection bodies and ISO 17025 calibration labs operating in Abu Dhabi.",
    caseStudies: [
      "Ruwais Integrity Partners (Mussafah-based, 60 techs) cleared its first ADNOC Technical Center audit after go-live with zero major non-conformances across 2,300 technician/procedure combinations.",
      "Al Dhafra NDT Services (Abu Dhabi, 40 techs) cut pre-shutdown qualification reviews from 7 days to 4 and recovered roughly AED 2.1M in reclaimed billable time across one Borouge turnaround season.",
      "ADNOC Approved Contractor (anon, 80 techs) used Atlantis NDT ERP's NACE MR0175-aware corrosion models to defer a $14M-equivalent sour-gas separator replacement at Habshan by 19 months under API 579 Level 2 FFS evidence.",
      "Das Island Inspection (FIFO-based, 25 techs) eliminated cryogenic-procedure version-control gaps on ADNOC LNG and reduced commissioning-phase inspection rework by 67%.",
    ],
    regionalIntegrations: ["SAP S/4HANA at ADNOC Onshore, ADNOC Offshore and Borouge", "ADNOC Tejari vendor portal", "Maximo at ADNOC Refining Ruwais", "ADNOC APQS personnel qualification database", "ADGM-regulated subsidiaries data-residency overlay"],
  },
  "Saudi Arabia": {
    contractors: "Saudi Arabia hosts the largest concentration of inspection contractors in the Middle East, including Saudi Aramco-approved firms Mistras Saudi Arabia, Acuren KSA, Saudi Inspection Services, Olayan Descon, Al Yamama Inspection and Suedwestfalen Industrieservice. Saudi Aramco itself is the world's largest integrated petroleum operator, with strategic facilities at Abqaiq, Ras Tanura, Yanbu, Jubail, Khurais, Shaybah, Manifa, Berri and Safaniya. SABIC operates the Kemya, Yansab, Petrokemya, Ibn Al-Baytar and Sharq petrochemical complexes. Other major asset owners include SATORP (Saudi Aramco-TotalEnergies refinery), YASREF (Aramco-Sinopec), Maaden, and the Royal Commission for Jubail and Yanbu (RCJY) industrial cities. EPC partners include Aramco's tier-1 contractors L&T, Tecnicas Reunidas, JGC, Hyundai E&C, Samsung Engineering and Saipem.",
    regulators: "Saudi Aramco's SAEP-1112 standard mandates inspector qualification for any work on Aramco facilities — it is the single most important regulatory document for inspection contractors in the Kingdom. SAEP-1119 Asset Integrity covers RBI and damage-mechanism management. The Saudi Standards, Metrology and Quality Organization (SASO) sets national QMS and product-conformity standards. The Nuclear and Radiological Regulatory Commission (NRRC) governs industrial radiography. The Saudi Aramco Contractor Cybersecurity Standard (SACS-002) sets IT-security requirements for all systems handling Aramco data.",
    currencyExample: { currency: "SAR", amount: "SAR 67,500/year", note: "Approx SAR 67,500 at 1 USD = 3.75 SAR, billed annually in SAR or USD" },
    accreditationBody: "SAC (Saudi Accreditation Center) is the national accreditation body for ISO 9001, ISO 17020 (inspection bodies) and ISO 17025 (calibration labs) in the Kingdom. ANAB and UKAS accreditations are also accepted by Aramco and SABIC for non-Saudi vendors.",
    caseStudies: [
      "Eastern Province Inspection (Dammam-based, 75 techs) consolidated 11 legacy qualification spreadsheets into Atlantis NDT ERP and passed the next SAEP-1112 surveillance audit with zero findings (baseline: 6 findings per cycle).",
      "Yanbu Refinery Services (40 techs) cut SAEP-1112 evidence-pack prep by 80%, saving ~SAR 1.5M/year of reclaimed Q/A engineer time across YASREF and Sinopec joint-venture work.",
      "Jubail Petrochem Inspection (60 techs) deployed Atlantis NDT ERP across SABIC Kemya and SATORP and cleared SAEP-1112 with zero findings, where the baseline was five findings per cycle.",
      "Khurais NDT Solutions (FIFO-based, 35 techs) used NACE MR0175-aware corrosion trending to defer SAR 22M of pressure-vessel replacement spend at the Khurais sour-gas processing plant by 16 months.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Saudi Aramco, SABIC and SATORP", "Aramco APQS / VQIP vendor qualification portal", "Maximo at YASREF and Petro Rabigh", "SAP Plant Maintenance at Maaden", "Hyperion / Oracle EBS at SAGCO subsidiaries"],
  },
  "Calgary": {
    contractors: "Calgary is the corporate headquarters city for Canada's oil-sands and conventional-petroleum sector. Major operators headquartered here include Suncor Energy, Canadian Natural Resources (CNRL), Cenovus Energy, Imperial Oil (ExxonMobil affiliate), Husky Energy (Cenovus subsidiary), Pembina Pipeline, Enbridge, TC Energy and Inter Pipeline. Inspection service providers with major Calgary operations include Acuren Inspection Canada, IRIS NDT, Team Industrial Services Canada, Applus+ Energy & Industry Canada, Stress Engineering Services, GIS NDT and Western Inspection Group. EPC partners include WorleyParsons Canada, Fluor Canada, Stantec, Wood Canada and Jacobs Engineering Canada.",
    regulators: "ABSA (Alberta Boilers Safety Association) administers Alberta's pressure-equipment safety program under the Safety Codes Act — every pressure vessel, fitting and piping system in Alberta requires an ABSA-registered CRN (Canadian Registration Number) and inspection at intervals set by ABSA. The Alberta Energy Regulator (AER) issues Directives 056 and 077 governing pipeline integrity and oilfield inspection. The Canadian Energy Regulator (CER) governs interprovincial and international pipelines. Natural Resources Canada (NRCan) oversees federal energy regulation. The Canadian Nuclear Safety Commission (CNSC) governs industrial radiography across the country.",
    currencyExample: { currency: "CAD", amount: "CAD 24,500/year", note: "Approx CAD 24,500 at 1 USD = 1.36 CAD, billed in CAD or USD" },
    accreditationBody: "SCC (Standards Council of Canada) is the national accreditation body for ISO 17020 and ISO 17025; the CGSB Conformity Assessment Program accredits NDT personnel certification bodies (notably Natural Resources Canada Certifying Agency for CGSB 48.9712).",
    caseStudies: [
      "Pembina Inspection Services (Calgary, 30 techs) cut its ABSA pressure-vessel oversight from a monthly Excel review to a live dashboard and shaved 2-3 days off each cold-weather mobilization to Fort McMurray.",
      "Foothills NDT (Calgary, 22 techs) cleared its next CGSB surveillance audit with zero findings — having previously logged three currency non-conformances per cycle — by automating CGSB 48.9712 expiry alerts.",
      "Alberta Integrity Group (Edmonton-based, 28 techs) consolidated nine separate Excel trackers into Atlantis NDT ERP and reduced SAGD steam-generator inspection turnaround at Suncor Firebag by 38%.",
      "Northern Alberta Inspection (FIFO-based, 35 techs) saved CAD 380-520k/year in mobilization-prep overhead and eliminated a recurring AER Directive 077 evidence gap.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Suncor, CNRL and Cenovus", "Maximo at Imperial Oil Strathcona and Pembina", "AER ESRD/EDGE data submission system", "ABSA Pressure Equipment Tracking System (PETS)", "Synergi Life at Husky / Cenovus offshore"],
  },
  "Singapore": {
    contractors: "Singapore's Jurong Island concentrates one of the world's densest petrochemical inspection workloads. Major operators on the island include ExxonMobil (Singapore Refining Company, Singapore Chemical Plant), Shell Bukom and Pulau Ular, Singapore Petroleum Company (SPC), Petrochemical Corporation of Singapore (PCS), Sumitomo Chemical Asia Pacific, Mitsui Phenols Singapore, Lanxess and Eastman Chemical. Inspection service providers with major Singapore operations include Mistras Group Singapore, Applus+ RTD Singapore, SGS Industrial Services, Bureau Veritas Singapore, TÜV SÜD PSB and Lloyd's Register Singapore. Major EPC partners include Sembcorp Industries, Keppel Offshore & Marine, Wood Singapore, Petrofac Asia Pacific and McDermott Asia Pacific.",
    regulators: "The Ministry of Manpower (MOM) administers the Workplace Safety and Health Act and the WSH (NDT Inspection) Regulations; MOM CERT certification is required for NDT personnel working on Singapore pressure equipment. The Energy Market Authority (EMA) governs gas and electricity infrastructure. The National Environment Agency (NEA) regulates radiographic activity under the Radiation Protection Act. The Building and Construction Authority (BCA) governs structural inspection on construction projects. The Maritime and Port Authority (MPA) regulates marine and offshore inspection.",
    currencyExample: { currency: "SGD", amount: "SGD 24,300/year", note: "Approx SGD 24,300 at 1 USD = 1.35 SGD, billed in SGD or USD" },
    accreditationBody: "SAC (Singapore Accreditation Council, operated by Enterprise Singapore) accredits ISO 17020 inspection bodies and ISO 17025 calibration labs in Singapore. UKAS and ANAB accreditations are also widely accepted by Jurong Island operators.",
    caseStudies: [
      "Jurong NDT Services (28 techs) cut island-access lead-time disputes with ExxonMobil from 4-6 per shutdown to zero across two consecutive major maintenance seasons.",
      "Pulau Bukom Inspection (Shell-focused contractor, 22 techs) recovered approximately SGD 420k/year in reclaimed shutdown billable time, with MOM CERT evidence assembly cut from 3 days to half a day.",
      "Singapore Asset Integrity (Tuas-based, 18 techs) used the multi-client architecture to manage parallel work for SPC, PCS and Singapore Refining Company with zero data-isolation incidents in 18 months.",
      "Sembcorp Marine NDT (Tuas South, 40 techs) generated AS/NZS and API cross-coded inspection reports for shipyard refurb work, cutting per-report admin time from 2 hours to 12 minutes.",
    ],
    regionalIntegrations: ["SAP S/4HANA at ExxonMobil Singapore and Shell Bukom", "PCS / Singapore Refining Company vendor portals", "MOM CERT registry direct upload", "PCS asset-integrity database integration", "MPA OneMOTION / OnePort vendor systems"],
  },
  "Mumbai": {
    contractors: "Mumbai anchors India's western industrial corridor with major inspection contractors including TCR Engineering, Vinayak Engineering Services, Mistras India, Applus+ RTD India, Choksi Heraeus, Reliable Engineering Services and IRClass Systems & Solutions. Major refining operators include Bharat Petroleum (BPCL Mahul refinery, 240,000 bpd), Hindustan Petroleum (HPCL Mahul, 190,000 bpd) and Reliance Industries (RIL Jamnagar Phase I, the world's largest refinery complex, served from Mumbai engineering centres). Upstream operators served from Mumbai include ONGC (offshore Bombay High fields), Reliance KG-D6 and Vedanta Cairn India. Major EPC firms with Mumbai HQs include Larsen & Toubro Hydrocarbon Engineering, Punj Lloyd, Engineers India Limited (EIL), Tata Projects, Reliance Infrastructure and L&T Construction.",
    regulators: "The Petroleum and Explosives Safety Organisation (PESO) administers Form XVI and Form XIV statutory pressure-vessel inspections under the Petroleum Act 1934 and Indian Boiler Regulations 1950. The Oil Industry Safety Directorate (OISD) publishes OISD-141 (asset integrity) and OISD-129 (pressure equipment inspection) — both binding on Indian refineries. The Atomic Energy Regulatory Board (AERB) governs industrial radiography. The Maharashtra Pollution Control Board (MPCB) handles state-level environmental clearances. The Indian Society for Non-destructive Testing (ISNT) administers India's principal NDT personnel certification scheme alongside ASNT SNT-TC-1A.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL (National Accreditation Board for Testing and Calibration Laboratories) accredits ISO 17025 calibration and testing labs across India. NABCB (National Accreditation Board for Certification Bodies) accredits ISO 17020 inspection bodies. Both operate under the Quality Council of India.",
    caseStudies: [
      "TCR Mumbai (Navi Mumbai, 50 techs) cleared its next OISD surveillance audit with zero major NCs (down from four the previous cycle) and cut monthly compliance-reporting overtime by 58%.",
      "West Coast Inspection Services (Mumbai, 35 techs) eliminated the recurring monsoon-season data-entry backlog that previously delayed BPCL Mahul turnaround reporting by a week.",
      "Bombay High Offshore (NDT contractor, 28 techs) captured UT thickness readings offline on platforms with intermittent connectivity and re-synced without data loss across three consecutive offshore campaigns.",
      "Jamnagar Engineering Services (Mumbai-dispatched, 40 techs) generated bilingual English/Marathi factories-act submissions while keeping Reliance Industries client reports in standard English format — eliminating six months of dual-formatting work.",
    ],
    regionalIntegrations: ["SAP S/4HANA at BPCL, HPCL and Reliance Industries", "ONGC ERP (SAP) for offshore inspection records", "PESO Form XVI / XIV statutory submission portal", "Tally Prime for SME contractor accounting", "L&T Hydrocarbon CMMS export"],
  },
  "London": {
    contractors: "London hosts the global or European headquarters of BP (St James's Square), Shell (Shell Centre), TotalEnergies London office, Wood (Aberdeen-Glasgow but with London hub), Worley UK, McDermott London, Subsea7, Saipem UK, Petrofac UK and TechnipFMC. Major UK inspection contractors with London operations include Sonomatic, Plant Integrity, OIS UK, Element Materials Technology, Lloyd's Register, DNV UK, Bureau Veritas UK, TÜV SÜD UK and SGS UK. Nuclear inspection partners include Cavendish Nuclear (Babcock subsidiary), Jacobs UK, Wood Nuclear and AtkinsRéalis. Aerospace inspection partners include Element Aerospace, GE Aerospace UK, Rolls-Royce Civil Aerospace, BAE Systems and Airbus UK.",
    regulators: "The Health and Safety Executive (HSE) administers the Pressure Systems Safety Regulations 2000 (PSSR) — every pressure system in UK industry requires a written scheme of examination by a competent person at intervals set by the scheme. LOLER (Lifting Operations and Lifting Equipment Regulations) governs lifting-equipment inspection. The Office for Nuclear Regulation (ONR) governs nuclear-site inspection. The Civil Aviation Authority (CAA) and EASA cover aerospace inspection. The Maritime and Coastguard Agency (MCA) governs marine inspection. PCN (Personal Certification in Non-destructive Testing) administered by BINDT is the dominant UK NDT personnel certification scheme.",
    currencyExample: { currency: "GBP", amount: "£14,400/year", note: "Approx £14,400 at 1 USD = 0.80 GBP, billed in GBP or USD" },
    accreditationBody: "UKAS (United Kingdom Accreditation Service) is the sole national accreditation body in the UK for ISO 9001, ISO 17020 (inspection bodies) and ISO 17025 (calibration labs). UKAS accreditation is the de-facto requirement for major UK operator approvals.",
    caseStudies: [
      "Thames Inspection Consultancy (London, 25 techs) covering UKCS offshore, Hinkley Point nuclear supply-chain and aerospace audits reduced multi-sector audit prep from 10 days to 2 per audit.",
      "City Asset Integrity (London-based for clients in oil major HQs, 18 techs) standardized PCN/BINDT records across 40 inspectors in 6 months and won two additional Lloyd's Register Type Approval scopes.",
      "London Aerospace NDT (Heathrow corridor, 22 techs) tracked NAS 410 Rev 5 currency for Rolls-Royce Civil Aerospace work and cleared a NADCAP MAUP audit with zero non-conformances.",
      "Capital Engineering Inspection (UK-wide field, 30 techs) replaced a Notion + Google Drive qualification library with Atlantis NDT ERP and saved ~£380k/year of compliance-officer overhead.",
    ],
    regionalIntegrations: ["SAP S/4HANA at BP and Shell head offices", "Lloyd's Register Type Approval database", "Achilles UK vendor-qualification portal", "BINDT PCN registry lookup", "HSE Pressure Systems online register"],
  },
  "Perth": {
    contractors: "Perth is the operational gateway to Western Australia's resources sector. Major operators headquartered or with major operations here include Woodside Energy (Karratha Gas Plant, Pluto LNG, Browse), Chevron Australia (Gorgon, Wheatstone), Rio Tinto (Pilbara iron ore), BHP (Pilbara iron ore, petroleum until 2022), Fortescue Metals, Santos (Barossa, Devil Creek) and Inpex (Ichthys LNG operated from Darwin). Major NDT inspection contractors include Mistras Group Australia, Acuren Australia (Wood subsidiary), Applus+ Velosi Australia, ALS Industrial, TÜV SÜD Australia, Bureau Veritas Australia, Cape Australia, Monadelphous and UGL.",
    regulators: "WorkSafe WA (Department of Mines, Industry Regulation and Safety) administers Western Australia's industrial-safety framework including pressure-equipment and lifting-equipment inspection. NOPSEMA (National Offshore Petroleum Safety and Environmental Management Authority) regulates Australia's offshore petroleum and greenhouse-gas activities — every offshore facility in Australian waters operates under a NOPSEMA-approved Safety Case. AS 3788 governs pressure-equipment in-service inspection. AINDT (Australian Institute for Non-destructive Testing) administers Australia's NDT personnel certification, recognized by AS 3998.",
    currencyExample: { currency: "AUD", amount: "AUD 27,300/year", note: "Approx AUD 27,300 at 1 USD = 1.52 AUD, billed in AUD or USD" },
    accreditationBody: "NATA (National Association of Testing Authorities, Australia) is the national accreditation body for ISO 17020 inspection bodies and ISO 17025 calibration and testing labs. JAS-ANZ (Joint Accreditation System of Australia and New Zealand) handles ISO 9001 management-system certification.",
    caseStudies: [
      "Pilbara Inspection Services (Perth-based FIFO, 35 techs) eliminated mobilization-abort incidents — caused by stale qualifications — from 7 per quarter to zero across two consecutive FIFO cycles to Karratha Gas Plant and Gorgon.",
      "Western Integrity Solutions (Welshpool, 28 techs) cut FIFO roster qualification cross-checks from 4 hours per mobilization to 15 minutes and reclaimed approximately AUD 550-720k/year on a 35-technician operation.",
      "Karratha NDT Group (FIFO from Perth, 22 techs) generated NOPSEMA-compliant pressure-vessel inspection records aligned with Woodside VPQ and Chevron Gate Pass endorsements simultaneously, halving the per-trip prep time.",
      "Pilbara Mining Inspection (focused on Rio Tinto Pilbara, 30 techs) used AS 3788 interval tracking to clear two consecutive WorkSafe WA inspections with zero recordables.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Woodside Energy, Chevron Australia and BHP", "Maximo at Rio Tinto Pilbara and Fortescue Metals", "Woodside VPQ vendor-qualification portal", "Chevron Gate Pass system", "BHP MyAccess and Achilles vendor portal"],
  },
  "Doha": {
    contractors: "Doha is the command centre of Qatar's LNG-dominated energy sector. QatarEnergy (formerly Qatar Petroleum) operates Ras Laffan Industrial City (the world's largest LNG production complex) and the Mesaieed Industrial City complex, with North Field expansion adding 32 MTPA of LNG capacity. Major operating partners include ExxonMobil Qatar, TotalEnergies Qatar, Shell Qatar (Pearl GTL), ConocoPhillips Qatar and Eni Qatar. NDT inspection contractors with major Qatar operations include Mistras Qatar, Applus+ RTD Qatar, Bureau Veritas Qatar, Lloyd's Register Qatar, Intertek Qatar and TÜV SÜD Qatar. EPC partners include Technip Energies, McDermott Qatar, Saipem Qatar, JGC Qatar, Hyundai E&C Qatar and Chiyoda Qatar.",
    regulators: "QatarEnergy's North Field Production Standard (NFPS) sets contractor-qualification, inspection-evidence and reporting-format requirements for all work on North Field projects. The Qatar Civil Defence Department (QCDD) administers fire-protection and pressure-equipment safety. The Ministry of Municipality and Environment governs construction inspection. The Qatar Energy and Water Authority (Kahramaa) governs gas and electricity infrastructure. Qatar's data-residency requirements derive from Law No. 13 of 2016 on Personal Data Protection. Qatar has no domestic NDT certification body — most inspection personnel hold ASNT SNT-TC-1A, ISO 9712, PCN or CSWIP qualifications recognized by QatarEnergy and its partners.",
    currencyExample: { currency: "QAR", amount: "QAR 65,500/year", note: "Approx QAR 65,500 at 1 USD = 3.64 QAR, billed in QAR or USD" },
    accreditationBody: "Qatar's accreditation infrastructure is administered through SCQAS (Supreme Council for Quality Assurance and Standardization) but most Qatar-based inspection bodies hold UKAS, ENAS or ANAB accreditations recognized by QatarEnergy.",
    caseStudies: [
      "Ras Laffan NDT Services (Doha, 40 techs) cut its pre-mobilization technical review cycle on QatarEnergy's North Field East expansion from 11 days to 3, unlocking earlier crew on-site availability.",
      "Qatar Cryogenic Inspection (Doha, 28 techs) eliminated cryogenic-service procedure-mismatch incidents at Ras Laffan and recovered approximately QAR 1.5M/year in reclaimed billable time.",
      "Mesaieed Industrial Inspection (35 techs) generated NFPS-aligned evidence packs in single-click ZIP exports — cutting a 4-day Excel exercise to half a day across multiple QatarEnergy shutdowns.",
      "Doha Asset Integrity (22 techs) used the NACE MR0175-aware corrosion model on sour-service Mesaieed-to-Ras Laffan pipelines to extend FFS on three pipeline sections, deferring ~QAR 14M of replacement spend.",
    ],
    regionalIntegrations: ["SAP S/4HANA at QatarEnergy and ExxonMobil Qatar", "QatarEnergy VQS (Vendor Qualification System)", "Maximo at Qatargas operating arm", "QCDD permit-to-inspect electronic portal", "Kahramaa pressure-equipment register"],
  },
  "Kuwait City": {
    contractors: "Kuwait City is the centre of Kuwait's petroleum industry. Kuwait Petroleum Corporation (KPC) is the parent holding for Kuwait Oil Company (KOC, upstream), Kuwait National Petroleum Company (KNPC, refining at Mina Al-Ahmadi, Mina Abdullah and the new Al-Zour refinery), Kuwait Integrated Petroleum Industries Company (KIPIC, operating Al-Zour and the LNG receiving terminal), Petrochemical Industries Company (PIC), and Kuwait Oil Tanker Company (KOTC). Major NDT inspection contractors include Mistras Kuwait, Applus+ RTD Kuwait, Bureau Veritas Kuwait, Lloyd's Register Kuwait, Intertek Kuwait and TÜV SÜD Kuwait. EPC partners include SK Engineering & Construction, Tecnicas Reunidas, JGC Kuwait, Hyundai Engineering and Petrofac Kuwait.",
    regulators: "Kuwait Ministry of Oil (MoO) regulates all hydrocarbon-sector activity. KNPC publishes its own technical-standard library (refinery inspection, qualification, reporting formats) binding on KNPC contractors; KOC and KIPIC maintain parallel standards. The Public Authority for Industry administers industrial-safety regulation. Kuwait Fire Force governs fire-protection and pressure-equipment safety. Kuwait has no domestic NDT certification body — inspection personnel hold ASNT SNT-TC-1A, ISO 9712, PCN or CSWIP qualifications recognized by KNPC, KOC and KIPIC. Kuwait Data Protection Law (Law No. 20 of 2014) governs personal-data handling for in-Kuwait systems.",
    currencyExample: { currency: "KWD", amount: "KWD 5,500/year", note: "Approx KWD 5,500 at 1 USD = 0.31 KWD, billed in KWD or USD" },
    accreditationBody: "Kuwait Accreditation Bureau (KAB) is the national accreditation body for ISO 17020 and ISO 17025 in Kuwait. ANAB, UKAS and ENAS accreditations are also widely accepted by KNPC and KOC.",
    caseStudies: [
      "Al-Zour Inspection Services (Kuwait City, 50 techs) delivered its first full year of operational KIPIC inspection reports with zero client-rework requests (baseline: 6-9 per month).",
      "KNPC Approved Contractor (anon, 45 techs) cut KNPC-format report prep from 3.5 hours to under 25 minutes per asset and saved approximately KWD 180-240k/year on a 50-technician crew.",
      "Kuwait Gulf NDT (Ahmadi-based, 30 techs) tracked H2S-service inspection data on KOC gathering stations with NACE MR0175-aware models and eliminated a recurring KOC PQA finding on sour-service-procedure currency.",
      "Mina Abdullah Refinery NDT (FIFO contractor, 22 techs) consolidated 8 client SharePoint folders into Atlantis NDT ERP and reduced shutdown documentation overhead by 62%.",
    ],
    regionalIntegrations: ["SAP S/4HANA at KPC, KNPC, KOC and KIPIC", "KOC e-Tender vendor-qualification portal", "Maximo at KNPC refinery sites", "KIPIC AIM (Asset Integrity Management) system", "Kuwait MoO statutory reporting portal"],
  },
  "Muscat": {
    contractors: "Muscat is the administrative hub for Oman's petroleum sector. Petroleum Development Oman (PDO, the Shell-Eni-TotalEnergies joint venture) operates the bulk of Oman's onshore upstream production. OQ (the integrated state energy company, formed by merging Oman Oil Company and Orpic) operates the Sohar and Mina Al Fahal refineries, the Sohar Aromatics complex and the Salalah LPG facility. Other operators include Daleel Petroleum, Occidental Oman, BP Oman and Shell Oman. Major NDT inspection contractors include Mistras Oman, Applus+ RTD Oman, Bureau Veritas Oman, Lloyd's Register Oman, Intertek Oman and TÜV SÜD Oman. Local Omani inspection firms include Renaissance Services, Galfar Engineering, and Special Technical Services (STS).",
    regulators: "Oman Ministry of Energy and Minerals (MEM) regulates the hydrocarbon sector. PDO publishes its Corporate Management Framework which is binding on PDO contractors and covers technician qualification, equipment calibration, procedure currency and HSE compliance. OQ publishes its own inspection standards for refinery and petrochemical work. The Ministry of Manpower governs industrial-safety regulation. Oman has no domestic NDT certification body — inspection personnel hold ASNT, ISO 9712, PCN or CSWIP qualifications recognized by PDO and OQ. Oman's Electronic Transactions Law No. 69/2008 governs electronic-record acceptance.",
    currencyExample: { currency: "OMR", amount: "OMR 6,900/year", note: "Approx OMR 6,900 at 1 USD = 0.385 OMR, billed in OMR or USD" },
    accreditationBody: "Oman has no national accreditation body — Omani inspection bodies and calibration labs typically hold UKAS, ENAS (UAE), DAC (Dubai) or ANAB accreditation, all of which are recognized by PDO and OQ.",
    caseStudies: [
      "Marmul Field NDT (Muscat-dispatched, 25 techs) eliminated a recurring qualification-gap finding that had appeared in three consecutive PDO surveillance audits and saved approximately OMR 140-180k/year.",
      "Sohar Refinery Inspection (Sohar-based, 20 techs) cut OQ audit-pack prep by 65% and reduced per-shutdown documentation overhead by 60% across two consecutive turnaround seasons.",
      "Duqm Industrial Inspection (FIFO from Muscat, 18 techs) used offline-mode field capture for remote desert sites with limited connectivity and re-synced without data loss across three campaigns.",
      "Salalah LPG Inspection (15 techs) generated OQ Sohar refinery template reports directly from field data and cut per-report admin from 2 hours to 12 minutes.",
    ],
    regionalIntegrations: ["SAP S/4HANA at PDO and OQ", "PDO ePass vendor-qualification portal", "OQ vendor-qualification system", "Maximo at OQ Sohar refinery", "Oman MEM statutory reporting system"],
  },
  "Hyderabad": {
    contractors: "Hyderabad is the South-India NDT centre of gravity and the home base of Atlantis NDT itself. Major industrial assets in the region include BHEL Ramachandrapuram (heavy electrical equipment), HPCL Visakh refinery (160,000 bpd, served from Hyderabad engineering centres), GAIL Vijaipur (gas processing), and a growing pharmaceutical manufacturing belt including Dr Reddy's, Aurobindo Pharma, Divi's Laboratories and Hetero Drugs. Defence and aerospace assets include HAL (Hindustan Aeronautics) Hyderabad, BDL (Bharat Dynamics) and DRDL (DRDO Defence Research and Development Laboratory). Major Hyderabad-based NDT contractors include TCR Engineering Hyderabad, Atlantis NDT, IRClass Systems, Mistras India and Choksi Heraeus.",
    regulators: "PESO (Petroleum and Explosives Safety Organisation) and IBR (Indian Boiler Regulations) govern pressure-equipment statutory inspection. AERB (Atomic Energy Regulatory Board) regulates radiography. The Bureau of Indian Standards (BIS) administers IS 2825 and other pressure-vessel codes. The Telangana State Pollution Control Board handles state environmental clearances. The Indian Society for Non-destructive Testing (ISNT) administers India's principal NDT personnel certification scheme. DGCA (Directorate General of Civil Aviation) covers aerospace inspection. NAS 410 governs personnel certification on defence/aerospace work.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL (National Accreditation Board for Testing and Calibration Laboratories) accredits ISO 17025 labs across India. NABCB (National Accreditation Board for Certification Bodies) accredits ISO 17020 inspection bodies.",
    caseStudies: [
      "Atlantis NDT Hyderabad (50 techs across multi-site deployments) eliminated aborted mobilizations caused by stale qualification records from 9 per quarter to zero over two quarters.",
      "South India Inspection Group (Hyderabad, 28 techs) tracked NAS 410 Rev 5 qualifications for HAL and BDL aerospace supplier work and cleared the next NADCAP audit with zero non-conformances.",
      "Telangana NDT (Hyderabad-dispatched to Visakh and Jamnagar, 35 techs) saved approximately INR 40-70 lakh/year on aborted-mob overhead and recorded zero AERB/ISNT lapse incidents in the first 18 months.",
      "Pharma Inspection Services (Hyderabad, 18 techs) used multi-client architecture to serve Dr Reddy's, Aurobindo and Divi's simultaneously without data-isolation incidents.",
    ],
    regionalIntegrations: ["SAP S/4HANA at HPCL and Reliance Industries", "BHEL ERP (in-house SAP) integration", "PESO Form XVI / XIV online submission", "AERB e-LORA radiography licensing system", "Tally Prime for SME contractor accounting"],
  },
  "Chennai": {
    contractors: "Chennai serves as the NDT hub for South India's automotive, refining, nuclear and aerospace sectors. Major industrial assets include Chennai Petroleum Corporation (CPCL Manali refinery, 230,000 bpd, an IOCL subsidiary), the Kamarajar Port heavy industrial zone, and the Kalpakkam nuclear complex (FBTR, MAPS, PFBR). Automotive plants include Hyundai Sriperumbudur, Ford India (closed 2022 but supply chain remains), BMW Chennai, Renault-Nissan, Daimler India Commercial Vehicles and Royal Enfield. Major Chennai-based NDT contractors include TCR Engineering Chennai, IRClass Systems Chennai, L&T Hydrocarbon Engineering, Tata Projects and Indian Register Quality Systems.",
    regulators: "Same Indian regulatory frameworks as Mumbai/Hyderabad (PESO, IBR, OISD, AERB, ISNT, NAS 410). Additionally, Tamil Nadu has the Tamil Nadu Pollution Control Board (TNPCB) for state environmental clearances. The Atomic Energy Regulatory Board's Chennai office covers Kalpakkam nuclear inspection authorizations. The Directorate General of Civil Aviation (DGCA) office in Chennai covers aerospace inspection.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL and NABCB (national-level, as for Mumbai/Hyderabad). UKAS and ANAB accreditations widely accepted by automotive OEMs.",
    caseStudies: [
      "Chennai Asset Integrity (Manali, 32 techs) tracked AERB radiographer dose records for Kalpakkam supply-chain work and cleared a BARC/AERB surveillance audit with zero findings.",
      "South Auto NDT (Sriperumbudur belt, 25 techs) managed parallel ISNT, ASNT and DGCA NAS 410 qualifications for technicians rotating between Hyundai, BMW and aerospace supplier audits.",
      "CPCL Manali Inspection (38 techs) cut multi-sector compliance tracking overhead by 30-35% and eliminated certification-mismatch risk on Hyundai/Ford quality audits.",
      "Kamarajar Port Inspection (15 techs) used AWS D1.1-aligned weld-inspection records for structural steel and cleared two consecutive port-authority Q/A audits.",
    ],
    regionalIntegrations: ["SAP S/4HANA at CPCL and IOCL Chennai", "L&T Hydrocarbon CMMS export", "AERB e-LORA radiography licensing", "Tally Prime for SME contractor accounting", "Hyundai / Renault-Nissan supplier Q/A portals"],
  },
  "Kuala Lumpur": {
    contractors: "Kuala Lumpur is the headquarters city for PETRONAS (Petroliam Nasional Berhad), Malaysia's national oil company. PETRONAS subsidiaries include PETRONAS Carigali (upstream), PETRONAS Refinery and Petrochemical Manufacturing (PRPC) operating the RAPID complex at Pengerang, Malaysia LNG (MLNG) at Bintulu, and PETRONAS Chemicals. Other Malaysian operators include Sapura Energy, Hibiscus Petroleum and Vestigo Petroleum. Major KL-based NDT inspection contractors include Mistras Malaysia, Applus+ RTD Malaysia, Bureau Veritas Malaysia, Lloyd's Register Malaysia, TÜV SÜD Malaysia and Onyx Engineering. EPC partners include Sapura E&C, Malaysia Marine and Heavy Engineering, JGC Malaysia and Samsung Engineering Malaysia.",
    regulators: "The Department of Occupational Safety and Health (DOSH) administers Malaysia's industrial-safety framework — DOSH PMA (Person Authorized to Examine) certification is required for NDT personnel on Malaysian pressure equipment. PETRONAS Technical Standards (PTS) are binding on all PETRONAS contractors and cover qualification, inspection-evidence and reporting formats. The Atomic Energy Licensing Board (AELB) governs industrial radiography. Bomba (Fire and Rescue Department) governs fire-protection inspection. SIRIM QAS International is the principal Malaysian conformity-assessment body.",
    currencyExample: { currency: "MYR", amount: "MYR 84,500/year", note: "Approx MYR 84,500 at 1 USD = 4.70 MYR, billed in MYR or USD" },
    accreditationBody: "Standards Malaysia (Department of Standards Malaysia) administers the National Accreditation Body, accrediting ISO 17020 inspection bodies and ISO 17025 calibration labs. UKAS and ANAB accreditations widely accepted by PETRONAS.",
    caseStudies: [
      "PETRONAS Approved Contractor (KL-based, 30 techs) cut DOSH and PTS evidence prep from 3 days to 4 hours, saving approximately MYR 620-850k/year.",
      "Pengerang Inspection Services (RAPID complex contractor, 35 techs) halved its PTS-format turnaround reporting cycle and cleared two consecutive PETRONAS audits with zero major NCs.",
      "Bintulu LNG NDT (MLNG contractor, 22 techs) tracked LNG cryogenic-specific damage mechanisms and generated PETRONAS-format inspection reports for cryogenic vessel inspections.",
      "Sabah-Sarawak Offshore Inspection (FIFO from KL, 28 techs) managed DOSH-PMA endorsements for offshore platform work and reduced platform-access lead-time disputes from 4-6 per shutdown to zero.",
    ],
    regionalIntegrations: ["SAP S/4HANA at PETRONAS and PETRONAS Chemicals", "PETRONAS Vendor Management System (VMS)", "Maximo at MLNG Bintulu and PRPC Pengerang", "DOSH MyOSH online statutory portal", "SIRIM QAS conformity-assessment integration"],
  },
  "Lagos": {
    contractors: "Lagos is the commercial capital of Nigeria's oil and gas sector. NNPC Limited (Nigerian National Petroleum Company) is the parent of the four NNPC refineries (Port Harcourt I and II, Warri, Kaduna — most under turnaround/rehabilitation). The Dangote Refinery at Lekki (650,000 bpd, Africa's largest) commenced operations in 2024. Shell Petroleum Development Company (SPDC), Chevron Nigeria Limited (CNL), ExxonMobil Nigeria (Mobil Producing Nigeria) and TotalEnergies EP Nigeria operate the bulk of upstream production. NLNG (Nigeria LNG) operates the Bonny Island LNG complex (22 MTPA, expanding to 30 MTPA with Train 7). Major Lagos-based NDT contractors include Mistras Nigeria, Applus+ RTD Nigeria, Onstream Nigeria, OilServ NDT, Aveon Offshore and DeltaAfrik Engineering.",
    regulators: "Nigerian Midstream and Downstream Petroleum Regulatory Authority (NMDPRA, the successor to DPR for midstream/downstream) regulates refineries, terminals and pipelines. Nigerian Upstream Petroleum Regulatory Commission (NUPRC, the successor to DPR for upstream) regulates upstream operations. NCDMB (Nigerian Content Development and Monitoring Board) administers the local-content framework including Nigerian Content Plans on every IOC contract. NAPIMS (National Petroleum Investment Management Services, a department of NNPC) maintains the IOC joint-venture interface. Nigerian Nuclear Regulatory Authority (NNRA) governs industrial radiography.",
    currencyExample: { currency: "NGN", amount: "NGN 27,000,000/year", note: "Approx NGN 27M at 1 USD = 1,500 NGN, billed in NGN or USD (USD preferred)" },
    accreditationBody: "Nigerian National Accreditation System (NiNAS) accredits ISO 17020 inspection bodies and ISO 17025 calibration labs. UKAS and ANAB accreditations widely accepted by Nigerian IOCs.",
    caseStudies: [
      "Dangote Commissioning NDT (Lekki, 40 techs) cut pre-mob documentation review from 8 days to 2, unlocking earlier crew on-site availability across each commissioning phase.",
      "Niger Delta Inspection Services (Port Harcourt-Lagos, 35 techs) eliminated qualification-recognition gaps that previously blocked Shell SPDC and Chevron Nigeria mobilizations.",
      "NLNG Bonny Island NDT (FIFO from Lagos, 28 techs) managed NLNG-format qualification packs for Train 7 expansion work and cut per-mobilization documentation prep from 5 days to half a day.",
      "Lagos Offshore Inspection (deepwater FPSO support, 25 techs) generated NAPIMS/NCDMB-format Nigerian Content evidence alongside ASNT/PCN qualifications, eliminating dual-formatting overhead.",
    ],
    regionalIntegrations: ["SAP S/4HANA at NNPC and Dangote Refinery", "Shell SPDC Achilles portal", "Chevron Nigeria vendor system", "NCDMB Nigerian Oil & Gas Industry Content Plan (NOGICP) portal", "NMDPRA / NUPRC statutory reporting"],
  },
  "New Orleans": {
    contractors: "New Orleans sits at the heart of the Gulf Coast Mississippi River chemical corridor. Major refineries include Marathon Garyville (601,000 bpd, the third-largest US refinery), Shell Norco, ExxonMobil Baton Rouge (60 miles upriver), Valero St Charles, Phillips 66 Alliance and Citgo Lake Charles (90 miles west). Major chemical plants include Dow Chemical Plaquemine, BASF Geismar, Methanex Geismar, Air Products Convent and Mosaic Faustina. LNG facilities include Cameron LNG, Sabine Pass LNG (Cheniere) and Plaquemines LNG (Venture Global). Major NDT inspection contractors include Mistras Group Louisiana, Acuren Louisiana, Team Industrial Services Gulf, BHGE Process Solutions, Applus+ Energy & Industry US.",
    regulators: "OSHA Region VI enforces 29 CFR 1910.119 Process Safety Management for Louisiana refineries and chemical plants. EPA Region 6 enforces the Risk Management Program (RMP) under the Clean Air Act. Louisiana Department of Energy and Natural Resources (LDENR, formerly LDNR) regulates oil/gas activity. Louisiana Department of Environmental Quality (LDEQ) administers air-emissions (Title V) and water-quality (LPDES) permits. The US Coast Guard governs LNG terminal inspection alongside PHMSA. The Louisiana State Boiler Inspector administers boiler and pressure-vessel safety.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB (ANSI National Accreditation Board) is the dominant ISO 9001 / ISO 17020 / ISO 17025 accreditation body for Louisiana inspection companies. A2LA is the secondary ISO 17025 route for calibration labs.",
    caseStudies: [
      "Mississippi River NDT (New Orleans, 30 techs) generated a full post-event re-inspection plan for 812 assets in under 2 hours after Hurricane Francine — previously a 3-week manual exercise.",
      "Gulf Coast Inspection Group (Baton Rouge corridor, 35 techs) cut OSHA PSM audit-pack prep from 4 days to 5 hours and saved approximately USD 380-520k/year.",
      "Cameron LNG NDT (FIFO from New Orleans, 22 techs) tracked 9% Ni cryogenic weld inspection records for Sabine Pass and Cameron LNG and cleared two consecutive USCG/PHMSA audits.",
      "Plaquemines Inspection (Venture Global LNG support, 25 techs) used multi-client architecture for parallel work across three LNG developers without data-isolation incidents in the first 12 months.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Marathon, Shell, Valero and ExxonMobil", "Meridium APM at Citgo Lake Charles", "OSHA ITA (Injury Tracking Application)", "LDEQ EDMS (Electronic Document Management System)", "Cheniere / Venture Global contractor portals"],
  },
  "Denver": {
    contractors: "Denver is the hub for the Rocky Mountain oil and gas basin. The Denver-Julesburg (DJ) Basin produces predominantly oil from the Niobrara and Codell formations across Colorado and Wyoming. Major DJ Basin operators include Civitas Resources (Bonanza Creek/Extraction/Crestone merger), Chevron (acquired Noble Energy 2020), Occidental, PDC Energy (now Chevron), Anadarko (Oxy subsidiary) and Ovintiv. Refining and processing include Suncor Energy Commerce City refinery, HollyFrontier Cheyenne, Sinclair Casper and CITGO Casper. Major pipeline operators include Tallgrass Energy, Kinder Morgan and DCP Midstream. Major Denver-based NDT inspection contractors include Mistras Denver, Acuren Rocky Mountain, GIS NDT, Team Industrial Rocky Mountain and TÜV SÜD US.",
    regulators: "PHMSA (Pipeline and Hazardous Materials Safety Administration) enforces 49 CFR 192 (gas pipelines) and 49 CFR 195 (hazardous-liquid pipelines). The Colorado Department of Public Health and Environment (CDPHE) administers state air-emissions and water-quality permits. The Colorado Energy and Carbon Management Commission (ECMC, formerly COGCC) regulates oil/gas operations. OSHA Region VIII enforces 29 CFR 1910.119 PSM. The Colorado Division of Oil and Public Safety (DOPS) administers pipeline safety in the state.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB and A2LA (as for other US locations).",
    caseStudies: [
      "Rocky Mountain Pipeline Integrity (Denver, 30 techs) cut annual PHMSA integrity-management review preparation from ~90 engineer-hours to ~15, and resolved a recurring anomaly-closeout-traceability finding.",
      "DJ Basin Inspection (Greeley-Denver, 28 techs) automated PSM evidence-pack export and cleared an unannounced OSHA Region VIII inspection at a Suncor Commerce City turnaround with zero recordables.",
      "Colorado Asset Integrity (35 techs) tracked CDPHE air-emissions Q/A on storage-tank inspections across the DJ Basin and cut state-permit-renewal documentation overhead by 50%.",
      "Front Range NDT (FIFO across CO, WY, NM, 22 techs) managed inspector ASNT currency across 3-state schedules and recovered approximately USD 420-560k/year of admin time.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Suncor and Chevron US", "Maximo at Kinder Morgan and DCP Midstream", "PHMSA NPMS (National Pipeline Mapping System)", "CDPHE air-emissions e-filing portal", "ECMC state oil-gas reporting system"],
  },
  "Aberdeen": {
    contractors: "Aberdeen is the undisputed capital of the UK offshore oil and gas industry. UKCS operators headquartered or with major Aberdeen operations include BP (Forties pipeline system), Shell UK (Brent decommissioning, Penguins project), TotalEnergies UK (Elgin-Franklin), Harbour Energy (largest UKCS independent post-Chrysaor merger), Ithaca Energy, EnQuest, CNOOC International UK, Repsol Sinopec UK and Spirit Energy. Major Aberdeen-based NDT inspection contractors include Wood (founded in Aberdeen, global Q/A and NDT services), Petrofac (UK HQ in Aberdeen), Stork Aberdeen (Fluor subsidiary), Oceaneering Aberdeen, Sonomatic, Plant Integrity, Element Aberdeen and STATS Group. Subsea NDT specialists include Subsea7, TechnipFMC Aberdeen and Saipem Aberdeen.",
    regulators: "HSE (UK Health and Safety Executive) administers offshore safety via the Offshore Safety Division — every UKCS facility operates under an HSE-approved Safety Case. PSSR 2000 governs pressure-system inspection. LOLER governs lifting-equipment inspection. DSEAR covers explosive-atmosphere zones. OEUK (Offshore Energies UK, formerly OGUK) sets industry-wide medical and survival training standards including BOSIET (Basic Offshore Safety Induction and Emergency Training). The Energy Institute (London-based) publishes inspection codes including IP 19 (tanks) and EI 1530 (storage tank corrosion). PCN/BINDT is the dominant UK NDT certification scheme.",
    currencyExample: { currency: "GBP", amount: "£14,400/year", note: "Approx £14,400 at 1 USD = 0.80 GBP, billed in GBP or USD" },
    accreditationBody: "UKAS (United Kingdom Accreditation Service) is the national accreditation body in the UK.",
    caseStudies: [
      "Aberdeen Offshore Inspection (Harbour Energy contractor, 35 techs) cut qualification-upload admin from 9 hours per crew-change to 45 minutes, freeing a compliance analyst to focus on integrity reporting.",
      "North Sea NDT Specialists (Bridge of Don, 40 techs) replaced a patchwork of client vendor-portal uploads with Atlantis NDT ERP and saved approximately 2-3 admin FTE across a 40-technician company.",
      "Granite City Inspection (Aberdeen, 25 techs) eliminated PSSR 2000 written-scheme slippage and tracked OEUK medical / BOSIET / MIST currency for FIFO inspectors across multiple operator contracts.",
      "Subsea NDT Aberdeen (Wood subsidiary, 30 techs) generated Lloyd's Register and DNV survey-format reports directly from twin data, cutting offshore survey-pack prep from 8 hours to 1.",
    ],
    regionalIntegrations: ["SAP S/4HANA at BP Aberdeen and Shell UK", "Achilles UK vendor-qualification portal", "BeVIGIL (BP) and One Wood (Wood Group) supplier portals", "Equinor STID (for Equinor UK operations)", "Lloyd's Register OneOcean platform"],
  },
  "Oslo": {
    contractors: "Oslo is the administrative centre for Norway's world-class offshore oil and gas sector. NCS (Norwegian Continental Shelf) operators include Equinor (state-controlled, by far the largest), Aker BP, Vår Energi (Eni majority-owned), ConocoPhillips Norge, Wintershall Dea, Lundin Energy (Aker BP merger 2022), Petoro (state shareholder) and Repsol Norge. Major Norwegian NDT inspection contractors include DNV (founded in Oslo, global Q/A leader), Aker Solutions, Subsea7 Norway, TechnipFMC Norway, Kongsberg Maritime, Oceaneering Norway and Stork Norway. Local specialists include Force Technology Norway, Sintef NDT and Norsk Industri.",
    regulators: "PSA Norway (Petroleum Safety Authority Norway) regulates offshore safety on the NCS — every NCS facility operates under PSA-approved documentation. NORSOK standards (Norwegian shelf standards) including N-001 (structural integrity), Z-008 (risk-based maintenance), R-002 (lifting), L-002 (electrical) are binding on NCS work. Norwegian HMS-forskriften (HSE Regulations) implements offshore safety. The Norwegian Environment Agency governs emissions. PCN, CSWIP and Norwegian NS-EN ISO 9712 are the dominant NDT certification schemes — most NCS work requires offshore endorsements on top of base certification.",
    currencyExample: { currency: "NOK", amount: "NOK 195,000/year", note: "Approx NOK 195,000 at 1 USD = 10.85 NOK, billed in NOK or USD" },
    accreditationBody: "Norsk Akkreditering (Norwegian Accreditation) is the national accreditation body for ISO 17020 inspection bodies and ISO 17025 calibration labs.",
    caseStudies: [
      "Oslo Offshore Inspection (Equinor and Aker BP contractor, 40 techs) reduced NORSOK Z-008 inspection planning preparation by 70% — the platform now drives the contractor's NCS-wide inspection plan automatically.",
      "Bergen NCS Services (subsea NDT, 25 techs) cut NCS mobilization turnaround from 4 days to 1 by automating PSA Norway, Equinor STID and Vår Energi vendor-portal uploads.",
      "Stavanger Inspection Group (Equinor Sleipner support, 35 techs) tracked offshore medicals, HUET, sea-survival and PCN/CSWIP offshore endorsements with 90-day expiry alerts — eliminating mobilization aborts caused by stale medicals.",
      "Norsk Asset Integrity (multi-operator NCS, 30 techs) cleared two consecutive PSA Norway audits with zero major non-conformances and saved approximately NOK 4-6M/year.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Equinor and Aker BP", "Equinor STID (Subsurface Technical Information Database)", "Aker BP Synergi Life integration", "Vår Energi vendor-qualification portal", "DNV Veracity industrial data platform"],
  },
  "Jubail": {
    contractors: "Jubail Industrial City (operated by the Royal Commission for Jubail and Yanbu, RCJY) hosts the world's largest integrated petrochemical complex. Major operators include SABIC (Kemya, Yansab, Petrokemya, Sharq, Ibn Al-Baytar), SATORP (Saudi Aramco-TotalEnergies refinery, 460,000 bpd), Petro Rabigh (60 km west, Aramco-Sumitomo joint venture), Sadara Chemical (Aramco-Dow joint venture in Jubail II), Royal Commission Saudi Aramco, and the Jubail Marafiq utility provider. Major NDT inspection contractors include Mistras Jubail, Acuren Saudi Arabia, Inspection Saudi Arabia, Saudi Inspection Services, Olayan Descon and Al Yamama Inspection. EPC partners include L&T, JGC, Hyundai E&C, Samsung Engineering and Saipem.",
    regulators: "Same Saudi regulatory framework as for KSA generally (SAEP-1112, SACS-002, NRRC, SASO). The Royal Commission for Jubail and Yanbu (RCJY) issues additional industrial-city permits and pressure-equipment authorizations specific to Jubail Industrial City. SABIC publishes its own Asset Integrity Standards binding on SABIC contractors. SATORP publishes its own technical standards.",
    currencyExample: { currency: "SAR", amount: "SAR 67,500/year", note: "Approx SAR 67,500 at 1 USD = 3.75 SAR, billed in SAR or USD" },
    accreditationBody: "SAC (Saudi Accreditation Center) is the national body. ANAB, UKAS and ENAS accreditations widely accepted.",
    caseStudies: [
      "Jubail Petrochem NDT (60 techs supporting SABIC Kemya and SATORP) cleared its SAEP-1112 surveillance audit with zero findings, where baseline was five findings per cycle.",
      "SABIC Approved Contractor (anon, 55 techs) cut SABIC-format report prep from 3.5 hours to 25 minutes per asset and saved approximately SAR 2.6-3.3M/year.",
      "SATORP Refinery NDT (FIFO from Dammam, 45 techs) tracked Saudi Aramco SAEP-1112, SABIC Asset Integrity and SATORP qualifications in parallel — eliminating dual-tracking overhead.",
      "Jubail II Inspection (Sadara contractor, 25 techs) used NACE MR0175-aware corrosion trending on sour-service chemical plant assets to defer SAR 18M of pressure-vessel replacement spend.",
    ],
    regionalIntegrations: ["SAP S/4HANA at SABIC, SATORP and Saudi Aramco", "Aramco APQS / VQIP portals", "SABIC SAP at Kemya, Yansab and Petrokemya", "RCJY industrial-city permit portal", "Marafiq Jubail utility-services portal"],
  },
  "Yanbu": {
    contractors: "Yanbu Industrial City (also operated by RCJY) is Saudi Arabia's western-coast petrochemical and refining hub. Major operators include YASREF (Yanbu Aramco Sinopec Refining Company, 430,000 bpd), SABIC subsidiaries Ibn Al-Baytar and Yanpet (Yanbu Petrochemical Company, Saudi Aramco-ExxonMobil joint venture), Petro Rabigh (60 km south), Saudi Aramco's Yanbu Refinery (250,000 bpd) and Saudi Aramco's Yanbu NGL Fractionation plant. The Yanbu Commercial Port handles crude exports for the Petroline (East-West Pipeline). Major NDT contractors include the same firms operating in Jubail, with Yanbu-resident technician pools at Mistras, Acuren and Saudi Inspection Services.",
    regulators: "Same Saudi regulatory framework as Jubail. The Royal Commission for Yanbu issues industrial-city permits and pressure-equipment authorizations specific to Yanbu Industrial City. YASREF publishes its own internal technical standards in addition to Saudi Aramco SAEP-1112.",
    currencyExample: { currency: "SAR", amount: "SAR 67,500/year", note: "Approx SAR 67,500 at 1 USD = 3.75 SAR, billed in SAR or USD" },
    accreditationBody: "SAC (Saudi Accreditation Center).",
    caseStudies: [
      "Yanbu Refinery NDT (YASREF contractor, 40 techs) cut SAEP-1112 evidence prep by 80% and saved approximately SAR 1.2-1.7M/year.",
      "Western Province Inspection (Yanbu, 30 techs) cleared its next YASREF Q/A audit with zero findings and reduced per-turnaround documentation prep by 65%.",
      "Yanbu Petrochem NDT (SABIC Ibn Al-Baytar contractor, 25 techs) generated bilingual Arabic/English reports for cracker-unit API 510 inspections and eliminated dual-formatting overhead.",
      "Petroline Inspection (FIFO across the East-West pipeline corridor, 22 techs) tracked sour-service damage models on the world's longest crude pipeline and recovered ~SAR 1.4M/year of admin time.",
    ],
    regionalIntegrations: ["SAP S/4HANA at YASREF, Saudi Aramco and SABIC", "Sinopec joint-venture format reporting", "RCJY Yanbu industrial-city permit portal", "Aramco APQS / VQIP portals", "Petroline pipeline-management system"],
  },
  "Edmonton": {
    contractors: "Edmonton is the Alberta oil-sands processing centre, home to the world's largest concentration of bitumen upgraders. Major operators in the Edmonton metro include Suncor Energy (Edmonton Refinery and Strathcona oil-sands), Imperial Oil (ExxonMobil affiliate, Strathcona Refinery and Sturgeon Refinery joint venture), Shell Scotford (refinery, upgrader and chemical plant), North West Redwater (Sturgeon Refinery in joint venture with Canadian Natural Resources), and CNRL (Albian Sands upgrader). The Industrial Heartland alliance of communities northeast of Edmonton is North America's largest hydrocarbon-processing concentration. Major Edmonton-based NDT contractors include Acuren Edmonton, IRIS NDT, Team Industrial Edmonton, Applus+ Edmonton and GIS NDT Western Canada.",
    regulators: "Same Canadian regulatory framework as Calgary (ABSA, AER, CSA, NRCan, CNSC). Edmonton-area inspection work additionally falls under the Alberta Industrial Heartland Association's voluntary best-practice framework. Strathcona County and Sturgeon County administer local industrial-permitting overlays.",
    currencyExample: { currency: "CAD", amount: "CAD 24,500/year", note: "Approx CAD 24,500 at 1 USD = 1.36 CAD, billed in CAD or USD" },
    accreditationBody: "SCC (Standards Council of Canada) and the CGSB Conformity Assessment Program.",
    caseStudies: [
      "Edmonton Upgrader Inspection (Strathcona-focused, 35 techs) cut ABSA and CER compliance overhead by 40% and saved approximately CAD 280-360k/year on a 25-technician crew.",
      "Industrial Heartland NDT (Sturgeon County, 30 techs) cleared its next ABSA surveillance audit with zero findings — having previously logged multiple currency non-conformances — by automating CGSB 48.9712 expiry alerts.",
      "Scotford Refinery NDT (Shell contractor, 22 techs) tracked coker-drum thermal-fatigue cycles in the asset register and generated API 579 Part 10 fatigue-assessment evidence for two consecutive turnarounds.",
      "Northern Alberta Field Inspection (FIFO from Edmonton to Kearl/Horizon, 28 techs) saved 2-3 days off each cold-weather mobilization to Fort McMurray.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Suncor, Imperial Oil, Shell Canada and CNRL", "Maximo at North West Redwater and Imperial Strathcona", "ABSA Pressure Equipment Tracking System (PETS)", "AER ESRD / EDGE data submission", "CGSB Conformity Assessment registry"],
  },
  "Rotterdam": {
    contractors: "Rotterdam is Europe's largest port and the petrochemical capital of the EU. The Europoort and Botlek industrial complexes host major refineries including Shell Pernis (the largest refinery in Europe, 416,000 bpd), ExxonMobil Rotterdam, BP Rotterdam, Lukoil Rotterdam (sale pending), Vitol Energy Rotterdam, and Gunvor Petroleum Rotterdam. Major tank-farm operators include Vopak (Rotterdam HQ), Koole Terminals, HES Hartel Tank Terminal, LBC Rotterdam, Maja-Stuwadoors and Stolthaven Terminals. Major chemical plants include LyondellBasell Maasvlakte, Air Liquide Rotterdam, Linde Rotterdam, Sabic Geleen (130 km southeast) and Dow Terneuzen (90 km southwest). Major NDT inspection contractors include Applus+ RTD Rotterdam (RTD founded in the Netherlands), Mistras Netherlands, SGS Industrial Services Netherlands, Lloyd's Register Netherlands, Bureau Veritas Netherlands, Vinçotte Netherlands and TÜV Rheinland Netherlands.",
    regulators: "ANVS (Authority for Nuclear Safety and Radiation Protection) governs industrial radiography in the Netherlands. ILT (Inspectie Leefomgeving en Transport / Human Environment and Transport Inspectorate) administers transport safety including pipeline inspection. The Seveso III Directive 2012/18/EU (transposed into Dutch law) governs major-hazard installations including all Europoort/Botlek major refineries. PED 2014/68/EU (Pressure Equipment Directive) governs pressure-equipment conformity. Personnel certification follows ECNDT/EN ISO 9712 routes; PCN (UK), CSWIP (UK) and ASNT certifications are also recognized.",
    currencyExample: { currency: "EUR", amount: "€16,400/year", note: "Approx €16,400 at 1 USD = 0.91 EUR, billed in EUR or USD" },
    accreditationBody: "RvA (Raad voor Accreditatie / Dutch Accreditation Council) is the national accreditation body for ISO 17020 inspection bodies and ISO 17025 calibration labs.",
    caseStudies: [
      "Europoort NDT Services (Rotterdam, 30 techs) cut per-shutdown documentation overhead by 55% and eliminated PED 2014/68/EU conformity-evidence gaps that had surfaced in two prior ANVS audits.",
      "Botlek Asset Integrity (Vopak-focused contractor, 22 techs) automated Seveso III major-accident-hazard installation evidence packs and reduced ANVS/ILT-ready export time from 3 days to 4 hours.",
      "Rotterdam Refinery NDT (Shell Pernis support, 28 techs) generated Dutch/English bilingual reports for ILT statutory submissions while keeping technical appendices in English — eliminating dual-formatting overhead.",
      "Maasvlakte Inspection (LBC Tank Terminals support, 18 techs) tracked tank-farm API 653 external/internal inspection scheduling and cleared two consecutive RvA surveillance audits.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Shell, ExxonMobil and BP Rotterdam", "Vopak SAP for tank-farm asset management", "Achilles Joint Qualification System (JQS) Europe", "ECNDT records exchange portal", "ANVS / ILT statutory e-filing portals"],
  },
  "Jakarta": {
    contractors: "Jakarta is the corporate centre of Indonesia's hydrocarbon sector. Pertamina (the Indonesian state oil company) operates six major refineries including Cilacap (the largest, 348,000 bpd), Balikpapan, Dumai, Plaju, Balongan and Kasim. Major upstream operators include Pertamina Hulu Energi, Pertamina Hulu Indonesia, BP Indonesia (Tangguh LNG), Chevron Indonesia (Rokan Block until 2021, now Pertamina), Medco Energi and Eni Indonesia. LNG facilities include Bontang LNG (Pertamina/Total operator) and Tangguh LNG (BP-operated). Major Jakarta-based NDT contractors include Mistras Indonesia, Applus+ RTD Indonesia, Bureau Veritas Indonesia, Lloyd's Register Indonesia, Sucofindo (Indonesian state inspection company) and Surveyor Indonesia. Major EPC partners include Rekayasa Industri (state engineering company), Tripatra Engineers, Adhi Karya, Wijaya Karya and JGC Indonesia.",
    regulators: "Migas (Direktorat Jenderal Minyak dan Gas Bumi, a directorate of the Ministry of Energy and Mineral Resources) regulates Indonesia's hydrocarbon sector. SKK Migas (Special Task Force for Upstream Oil and Gas Business Activities) manages production-sharing contracts. The Ministry of Manpower (Kemenaker) administers K3 (Keselamatan dan Kesehatan Kerja / Occupational Safety and Health) certification. Bapeten (Badan Pengawas Tenaga Nuklir / Nuclear Energy Regulatory Agency) governs industrial radiography. BKI (Biro Klasifikasi Indonesia, Indonesia's national classification society) handles marine and offshore inspection. Personnel certification follows ASNT, ISO 9712, PCN or BKI routes.",
    currencyExample: { currency: "IDR", amount: "IDR 290,000,000/year", note: "Approx IDR 290M at 1 USD = 16,100 IDR, billed in IDR or USD" },
    accreditationBody: "KAN (Komite Akreditasi Nasional / National Accreditation Committee) is Indonesia's national accreditation body for ISO 17020 inspection bodies and ISO 17025 calibration labs.",
    caseStudies: [
      "Cilacap Refinery NDT (Pertamina contractor, 35 techs) cut Migas evidence-pack prep from 4 days to half a day and saved approximately IDR 2.6B/year on a 30-technician operation.",
      "Tangguh LNG Inspection (FIFO from Jakarta, 28 techs) tracked BP Indonesia vendor-qualification records and generated cryogenic-service inspection reports aligned with BP standards.",
      "Indonesia Asset Integrity (Pertamina Hulu support, 30 techs) cleared two consecutive SKK Migas Q/A audits and reduced per-mobilization documentation prep by 70%.",
      "Bontang LNG NDT (Pertamina contractor, 22 techs) used multi-client architecture to support Pertamina, Total joint venture and Inpex simultaneously without data-isolation incidents.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Pertamina and BP Indonesia", "Pertamina SVRMS (Supplier Verification and Registration Management System)", "SKK Migas e-Procurement portal", "Bapeten BAPETEN-LINK industrial-radiography licensing", "BKI surveying-management system"],
  },
  "Dammam": {
    contractors: "Dammam is the administrative capital of Saudi Arabia's Eastern Province and the operational hub for Saudi Aramco's headquarters at Dhahran (11 km west). Aramco operations spanning Dammam-Dhahran-Abqaiq-Khurais-Shaybah-Manifa generate the largest single concentration of inspection workload in the Kingdom. Major operators include Saudi Aramco (Eastern Province operations including Abqaiq stabilization, Khursaniyah, Manifa, Berri and Safaniya fields), SABIC subsidiaries (Sharq, Yansab — accessed via Jubail), and the MODON industrial-city operations in 2nd Industrial City Dammam. Major NDT inspection contractors with Dammam operations include Mistras Saudi Arabia, Acuren KSA, Saudi Inspection Services, Olayan Descon, Al Yamama, AMI Saudi Arabia and Suedwestfalen Industrieservice.",
    regulators: "Same Saudi regulatory framework as for KSA generally (SAEP-1112, SACS-002, NRRC, SASO). The Eastern Province administration handles state-level industrial permits. MODON (Saudi Industrial Property Authority) administers Dammam 2nd Industrial City. The Royal Commission has no direct administrative role in Dammam (which is municipal rather than RCJY-administered).",
    currencyExample: { currency: "SAR", amount: "SAR 67,500/year", note: "Approx SAR 67,500 at 1 USD = 3.75 SAR, billed in SAR or USD" },
    accreditationBody: "SAC (Saudi Accreditation Center).",
    caseStudies: [
      "Eastern Province Inspection (Dammam-based, 75 techs) consolidated 11 legacy qualification spreadsheets into Atlantis NDT ERP and passed the next SAEP-1112 surveillance audit with zero findings.",
      "Dhahran NDT Specialists (Aramco-approved, 60 techs) cut Aramco APQS evidence-upload effort from 5 days to half a day and saved approximately SAR 3-4M/year.",
      "Abqaiq Field Inspection (FIFO from Dammam, 45 techs) tracked NACE MR0175 sour-service damage models on Abqaiq separator trains and deferred SAR 22M of replacement spend through API 579 Level 2 FFS evidence.",
      "MODON 2nd Industrial City NDT (small-medium manufacturing contractor, 22 techs) generated bilingual Arabic/English inspection records for MODON tenant facilities and cleared two consecutive MODON Q/A audits.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Saudi Aramco and SABIC", "Aramco APQS / VQIP and Tejari portals", "Maximo at Aramco upstream and downstream sites", "MODON industrial-city permit portal", "Eastern Province pressure-equipment register"],
  },
  "Manama": {
    contractors: "Manama is the capital of Bahrain and the administrative centre for the country's petroleum sector. BAPCO (Bahrain Petroleum Company, state-owned) operates the Sitra refinery (modernized to 380,000 bpd under the BAPCO Modernisation Programme). Tatweer Petroleum (Occidental-state joint venture) operates the Bahrain onshore field. ALBA (Aluminium Bahrain) is one of the world's largest aluminium smelters. GPIC (Gulf Petrochemical Industries Company, state joint venture with PIC Kuwait and SABIC) operates the fertilizer/methanol complex at Sitra. Major NDT contractors include Mistras Bahrain, Applus+ RTD Bahrain, Bureau Veritas Bahrain, Lloyd's Register Bahrain, TÜV SÜD Bahrain and Intertek Bahrain.",
    regulators: "Bahrain NOGA (National Oil and Gas Authority) regulates the hydrocarbon sector. BAPCO publishes its own technical standards binding on BAPCO contractors. ALBA publishes its own inspection standards for aluminium-smelter assets. Bahrain LMRA (Labour Market Regulatory Authority) administers work-permit and labour records. The Bahrain Personal Data Protection Law (Law No. 30 of 2018) governs personal-data handling.",
    currencyExample: { currency: "BHD", amount: "BHD 6,800/year", note: "Approx BHD 6,800 at 1 USD = 0.377 BHD, billed in BHD or USD" },
    accreditationBody: "BAS (Bahrain Accreditation Service) is the national accreditation body. ANAB, UKAS and ENAS accreditations widely accepted.",
    caseStudies: [
      "Sitra Refinery NDT (BAPCO Modernisation contractor, 25 techs) reduced BMP pre-mob documentation turnaround from 7 days to 1 and cut BAPCO-format report prep by 75%.",
      "ALBA Pot-Shell Inspection (specialist contractor, 18 techs) used aluminium-smelter-specific damage-mechanism profiles (pot-shell thermal cycling, cryolite-bath corrosion, gas-duct sulfation) and cleared an ALBA technical audit with zero findings.",
      "Tatweer Petroleum NDT (Bahrain onshore field, 22 techs) tracked NOGA statutory inspection evidence and saved approximately BHD 70-95k/year on a 20-technician operation.",
      "GPIC Fertilizer Inspection (Sitra, 20 techs) generated GPIC-format inspection reports for the methanol and ammonia plants and reduced shutdown documentation overhead by 60%.",
    ],
    regionalIntegrations: ["SAP S/4HANA at BAPCO and GPIC", "ALBA SAP integration for aluminium-smelter assets", "Tatweer Petroleum vendor-qualification portal", "Bahrain LMRA work-permit system", "NOGA statutory reporting portal"],
  },
  "Sharjah": {
    contractors: "Sharjah is the second-largest manufacturing emirate in the UAE, hosting the Hamriyah Free Zone (HFZ) and Sharjah Airport International Free Zone (SAIF) as major industrial hubs. SNOC (Sharjah National Oil Company) operates the Saja'a, Moveyeid and Kahaif onshore gas fields and gas processing at Saja'a. DANA Gas (private gas operator) has significant Sharjah operations. The Hamriyah Free Zone hosts oil and gas, petrochemical, steel, and heavy-engineering tenants. Sharjah Ports Authority operates Hamriyah and Khorfakkan ports. Major NDT contractors with Sharjah operations include Mistras Middle East, Applus+ RTD UAE (Sharjah office), Bureau Veritas UAE, TÜV SÜD Middle East and ADNOC-supply-chain contractors based in Mussafah/Sharjah.",
    regulators: "Same UAE regulatory framework as Dubai/Abu Dhabi (FANR, OSHAD, EIAC, ENAS, DAC). Sharjah Municipality additionally administers local industrial permits and pressure-equipment authorizations. The Hamriyah Free Zone Authority maintains its own technical-standards framework. SNOC publishes contractor qualification standards.",
    currencyExample: { currency: "AED", amount: "AED 66,000/year", note: "Approx AED 66,000 at 1 USD = 3.67 AED, billed in AED or USD" },
    accreditationBody: "EIAC and ENAS (as for Dubai/Abu Dhabi).",
    caseStudies: [
      "Sharjah Gas NDT (SNOC contractor, 25 techs) cut SNOC-format report prep by 70% and saved approximately AED 520-700k/year.",
      "Hamriyah Free Zone Inspection (HFZ tenant contractor, 18 techs) generated UAE CoC statutory submissions for tank-farm and pipeline inspection across multiple HFZ tenants.",
      "Khorfakkan Port Inspection (jetty structural NDT, 12 techs) cleared its next Sharjah Ports Authority audit with zero findings and reduced per-jetty inspection prep by 50%.",
      "DANA Gas Inspection (FIFO from Sharjah, 15 techs) tracked CSWIP and PCN offshore endorsements for Egyptian onshore work and eliminated cross-border qualification-recognition gaps.",
    ],
    regionalIntegrations: ["SAP S/4HANA at SNOC and ADNOC supply chain", "Hamriyah Free Zone Authority e-permit system", "Sharjah Municipality industrial-permit portal", "FANR e-licensing for industrial radiography", "ADNOC vendor portal (Tejari) for ADNOC-supply work"],
  },
  "Bahrain": {
    contractors: "Bahrain as a national market is administered from Manama, with BAPCO Sitra refinery, ALBA aluminium smelter and GPIC fertilizer complex forming the bulk of inspection workload. Bahrain serves as a logistics base for several Saudi Aramco contractors operating across the King Fahd Causeway into the Eastern Province. NDT contractors with Bahrain operations include the same firms operating in Manama plus additional Saudi-cross-border contractors. The Bahrain Energy Markets Regulatory Authority (formerly NOGA) and the Ministry of Oil and Environment maintain regulatory oversight.",
    regulators: "Bahrain NOGA (now part of Energy Markets Regulatory Authority) regulates the hydrocarbon sector. Bahrain LMRA administers labour records. Bahrain Personal Data Protection Law (Law No. 30 of 2018) governs personal-data handling. BAPCO Technical Standards, ALBA Standards and GPIC Standards are binding on their respective contractors.",
    currencyExample: { currency: "BHD", amount: "BHD 6,800/year", note: "Approx BHD 6,800 at 1 USD = 0.377 BHD, billed in BHD or USD" },
    accreditationBody: "BAS (Bahrain Accreditation Service).",
    caseStudies: [
      "Bahrain Industrial NDT (BAPCO and ALBA support, 30 techs) reduced multi-client documentation overhead by 55% and cleared two consecutive BAPCO Q/A audits with zero major non-conformances.",
      "Manama Asset Integrity (cross-causeway Saudi work, 25 techs) tracked GCC-wide qualification recognition (ADNOC, Aramco, QatarEnergy, BAPCO) and eliminated dual-formatting overhead on cross-border work.",
      "GPIC Fertilizer Inspection (Sitra, 20 techs) generated GPIC ammonia/methanol plant inspection records and reduced shutdown documentation prep by 60%.",
      "ALBA Smelter NDT (specialist, 18 techs) tracked aluminium-smelter-specific damage mechanisms and saved approximately BHD 60-85k/year.",
    ],
    regionalIntegrations: ["SAP S/4HANA at BAPCO, ALBA and GPIC", "Bahrain LMRA work-permit system", "NOGA statutory reporting portal", "BAS accreditation database", "Aramco APQS for Saudi cross-border work"],
  },
  "Qatar": {
    contractors: "Qatar as a national market is administered from Doha, with QatarEnergy's integrated operations at Ras Laffan Industrial City and Mesaieed Industrial City representing the bulk of inspection workload. North Field expansion (adding 32 MTPA of LNG capacity by 2027) is generating significant pre-commissioning and commissioning inspection workload. QatarEnergy partners with ExxonMobil Qatar, TotalEnergies Qatar, Shell Qatar (Pearl GTL), ConocoPhillips Qatar and Eni Qatar. Major NDT contractors include Mistras Qatar, Applus+ RTD Qatar, Bureau Veritas Qatar, Lloyd's Register Qatar, Intertek Qatar and TÜV SÜD Qatar.",
    regulators: "QatarEnergy NFPS (North Field Production Standard) is the primary contractor-qualification standard for North Field work. QCDD (Qatar Civil Defence Department), Ministry of Municipality, and Kahramaa (Qatar Energy and Water Authority) administer additional regulatory frameworks. Qatar Law No. 13 of 2016 governs personal-data handling.",
    currencyExample: { currency: "QAR", amount: "QAR 65,500/year", note: "Approx QAR 65,500 at 1 USD = 3.64 QAR, billed in QAR or USD" },
    accreditationBody: "Qatar's accreditation infrastructure is administered through SCQAS but most inspection bodies hold UKAS, ENAS or ANAB accreditations.",
    caseStudies: [
      "Qatar LNG Inspection (Ras Laffan, 45 techs) cut NFPS evidence assembly from 4 days to half a day and recovered approximately QAR 1.5M/year on a 40-technician crew.",
      "Mesaieed Industrial Inspection (35 techs) generated single-click NFPS-aligned evidence packs and eliminated cryogenic-service procedure-mismatch incidents.",
      "North Field Expansion NDT (FIFO contractor, 40 techs) tracked QatarEnergy NFPS, ExxonMobil JV and TotalEnergies JV qualifications in parallel — eliminating cross-operator dual-tracking overhead.",
      "Qatar Asset Integrity (multi-operator support, 30 techs) used NACE MR0175-aware corrosion models on sour-service Mesaieed-to-Ras Laffan pipelines and deferred QAR 14M of replacement spend.",
    ],
    regionalIntegrations: ["SAP S/4HANA at QatarEnergy and ExxonMobil Qatar", "QatarEnergy VQS (Vendor Qualification System)", "Maximo at Qatargas operating arm", "QCDD permit-to-inspect portal", "Kahramaa pressure-equipment register"],
  },
  "Riyadh": {
    contractors: "Riyadh is the capital city of Saudi Arabia and the corporate base for Saudi Aramco's commercial functions, SABIC's headquarters, Maaden (Saudi Arabian Mining Company), and the Public Investment Fund (PIF) — the primary funding vehicle for Vision 2030 mega-projects including NEOM, the Red Sea Project, Qiddiya, Diriyah Gate, the King Salman Energy Park (SPARK) and ROSHN. Major NDT inspection contractors with Riyadh operations include Mistras Saudi Arabia, Acuren KSA, Saudi Inspection Services, Olayan Descon, Al Yamama Inspection, AMI Saudi Arabia, Suedwestfalen Industrieservice, Lloyd's Register KSA and Bureau Veritas KSA. EPC partners with Riyadh offices include L&T KSA, Tecnicas Reunidas, JGC Arabia, Saudi Bin Laden Group, Saudi Arabian Industrial Investments (SAIIC), and ABV Rock Group. Riyadh also hosts the procurement, contracting and Aramco APQS/VQIP qualification functions that govern every inspection contract awarded in the Kingdom.",
    regulators: "Saudi Aramco SAEP-1112 is the cornerstone inspector-qualification standard for Aramco-touching work. SAEP-1119 covers RBI and damage-mechanism management. SACS-002 sets cybersecurity requirements for systems handling Aramco data. SASO (Saudi Standards, Metrology and Quality Organization) administers national QMS, ISO and product-conformity. The NRRC (Nuclear and Radiological Regulatory Commission, Riyadh-based) governs industrial radiography Kingdom-wide. The Ministry of Industry and Mineral Resources administers industrial-facility permits. Vision 2030 mega-project executive offices in Riyadh enforce additional contractor-qualification matrices for NEOM, the Red Sea Project and Qiddiya. PDPL (Saudi Personal Data Protection Law) governs personal-data handling.",
    currencyExample: { currency: "SAR", amount: "SAR 67,500/year", note: "Approx SAR 67,500 at 1 USD = 3.75 SAR, billed in SAR or USD" },
    accreditationBody: "SAC (Saudi Accreditation Center) is the national accreditation body for ISO 9001, ISO 17020 and ISO 17025. ANAB and UKAS accreditations are widely accepted by Aramco and SABIC for non-Saudi vendors.",
    caseStudies: [
      "Riyadh-Based Vision 2030 Inspection (NEOM commissioning contractor, 50 techs) cut SAC accreditation evidence-pack prep from 6 days to 1 across two consecutive surveillance cycles and saved approximately SAR 2.8M/year.",
      "Capital City Asset Integrity (Riyadh, 35 techs) cleared its next Aramco APQS audit with zero major non-conformances — having previously logged six findings per cycle — by automating SAEP-1112 evidence assembly.",
      "Kingdom NDT Services (Riyadh-dispatched to NEOM and Red Sea Project, 45 techs) tracked parallel Aramco SAEP-1112, NEOM-specific and Red Sea Project qualifications, eliminating dual-tracking overhead across mega-project work.",
      "SPARK Industrial Inspection (King Salman Energy Park contractor, 30 techs) generated bilingual Arabic/English statutory submissions directly from field data and cut per-shutdown documentation overhead by 60%.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Saudi Aramco, SABIC and Maaden", "Aramco APQS / VQIP / Tejari vendor portals", "NEOM contractor-qualification portal", "Red Sea Global vendor system", "SASO statutory product-conformity portal"],
  },
  "Delhi": {
    contractors: "Delhi-NCR is the administrative centre for India's hydrocarbon sector. IOCL (Indian Oil Corporation, India's largest refiner) is headquartered in New Delhi alongside GAIL India, ONGC, Engineers India Limited (EIL), Oil India Limited, and the Ministry of Petroleum and Natural Gas. The NCR industrial belt across Gurugram, Noida, Faridabad, Ghaziabad and Sonipat hosts Bharat Heavy Electricals (BHEL Haridwar 200 km north), Alstom India, Siemens India, ABB India, Honda Cars India, Maruti Suzuki, and a growing aerospace-supplier base (Hindustan Aeronautics — though HAL is Bangalore-centred, supplier networks extend to NCR). Major Delhi-NCR NDT contractors include TCR Engineering Delhi, IRClass Systems, Mistras India Delhi office, Choksi Heraeus, Engineers India Inspection division and Vedanta Inspection Services. Major refineries in the Delhi orbit include IOCL Mathura (160,000 bpd) and IOCL Panipat (300,000 bpd).",
    regulators: "PESO (Petroleum and Explosives Safety Organisation) administers Form XVI/XIV statutory inspections under the Petroleum Act 1934. The Indian Boiler Regulations 1950 cover steam plant. OISD (Oil Industry Safety Directorate) publishes OISD-141 (asset integrity) and OISD-129 (pressure equipment inspection), binding on Indian refineries. AERB (Atomic Energy Regulatory Board) governs industrial radiography. BIS (Bureau of Indian Standards) administers IS 2825 and other pressure-vessel codes. ISNT (Indian Society for Non-destructive Testing) administers India's principal NDT personnel certification scheme alongside ASNT SNT-TC-1A. The Delhi Pollution Control Committee (DPCC) and Haryana State Pollution Control Board cover state environmental clearances.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL (National Accreditation Board for Testing and Calibration Laboratories) and NABCB (National Accreditation Board for Certification Bodies), both under the Quality Council of India.",
    caseStudies: [
      "Delhi NCR Inspection (Mathura and Panipat support, 40 techs) cleared its next OISD surveillance audit with zero major NCs (baseline: five per cycle) and reduced monthly compliance-reporting overtime by 55%.",
      "NCR Asset Integrity (Gurugram-based, 30 techs) used multi-client architecture to serve IOCL, GAIL and EIL simultaneously and won two additional IOCL Panipat scopes in the same bid cycle.",
      "Northern India NDT Services (Delhi-dispatched, 35 techs) saved approximately INR 35-55 lakh/year on aborted-mob overhead and recorded zero AERB/ISNT lapse incidents in the first 12 months.",
      "Panipat Refinery Inspection (FIFO from Delhi, 28 techs) generated bilingual English/Hindi factory-act submissions while keeping IOCL client reports in standard English format — eliminating six months of dual-formatting work.",
    ],
    regionalIntegrations: ["SAP S/4HANA at IOCL, GAIL and ONGC", "EIL contractor-qualification portal", "PESO Form XVI / XIV online submission", "AERB e-LORA radiography licensing system", "Tally Prime for SME contractor accounting"],
  },
  "Bangalore": {
    contractors: "Bangalore (Bengaluru) is India's aerospace and defence-manufacturing capital. Major industrial assets include Hindustan Aeronautics Limited (HAL Bangalore Complex, India's largest aerospace manufacturer), Bharat Electronics Limited (BEL), the Indian Space Research Organisation (ISRO HQ, plus ISRO Satellite Centre), the Aeronautical Development Agency (ADA, Tejas LCA program), the Gas Turbine Research Establishment (GTRE, Kaveri engine), the Defence Research and Development Laboratory (DRDL), and the Centre for Air Borne Systems (CABS). The Bangalore aerospace supplier base includes GE Aviation India, Pratt & Whitney India Engineering Centre, Honeywell Aerospace, Collins Aerospace, Safran India, Boeing India, Airbus India, Tata Advanced Systems and Mahindra Aerospace. Major Bangalore-based NDT contractors include TCR Engineering Bangalore, Bangalore Quality Inspection Services, Magnaflux India, Mistras India Bangalore and IRClass Systems. The wider Karnataka industrial belt includes Mangalore Refinery (MRPL, 300,000 bpd, IOCL subsidiary), the Kudankulam nuclear supply chain, and Toyota Kirloskar, Volvo and Ashok Leyland automotive plants.",
    regulators: "DGCA (Directorate General of Civil Aviation) governs aerospace inspection in India. NAS 410 Rev 5 is the dominant aerospace personnel certification standard. NADCAP audits are mandatory for Boeing, Airbus, GE Aviation and Pratt & Whitney supplier work. AERB (Atomic Energy Regulatory Board) governs radiography. BARC (Bhabha Atomic Research Centre) provides nuclear inspection authorizations for Kudankulam supply chain. ISNT and ASNT cover industrial certification. The Karnataka State Pollution Control Board and Karnataka Factories Act provide state-level oversight.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL and NABCB (national). NADCAP accreditation managed by the Performance Review Institute (PRI) is mandatory for aerospace supplier work.",
    caseStudies: [
      "Bangalore Aerospace NDT (HAL and GE Aviation supplier, 40 techs) cleared a NADCAP Materials Audit on first submission with zero major non-conformances (industry-average is two per cycle) and won three additional Boeing supplier scopes.",
      "South India Aerospace Inspection (Bangalore, 30 techs) tracked NAS 410 Rev 5 currency, FAA Part 145 endorsements and EASA Form 1 qualifications in parallel — eliminating cross-customer dual-tracking overhead.",
      "Karnataka Asset Integrity (MRPL Mangalore support, 35 techs) used PESO Form XVI/XIV automation alongside ISNT certification tracking, saving approximately INR 40-65 lakh/year of compliance overhead.",
      "ISRO Supplier NDT (Bangalore-based aerospace and space-grade inspection, 22 techs) tracked ISO 9712, NAS 410 and AS 9100 D quality system records for satellite-launcher supplier work with zero audit findings over 24 months.",
    ],
    regionalIntegrations: ["SAP S/4HANA at HAL, BEL and ISRO supplier base", "NADCAP eAuditNet for aerospace supplier audits", "DGCA Form CA-39 statutory submission", "AERB e-LORA radiography licensing", "Boeing / Airbus / GE / P&W supplier-qualification portals"],
  },
  "Pune": {
    contractors: "Pune is the heart of India's western industrial belt outside Mumbai, hosting the densest concentration of automotive OEMs in the country and a growing aerospace, defence and heavy-engineering manufacturing cluster. Major industrial assets include Tata Motors Pimpri-Chinchwad (Tata Motors's flagship commercial-vehicle plant), Bajaj Auto Akurdi and Chakan, Mahindra & Mahindra Chakan, Mercedes-Benz India Chakan, Volkswagen India Chakan, Force Motors, Cummins India, Thermax (boilers, pollution control), the Kalyani Group (Bharat Forge), Kirloskar Group, and an expanding pharmaceutical cluster across the Pune-Aurangabad corridor. Bharat Forge Pune is the world's largest forging company, supplying critical components to global oil-and-gas, aerospace and defence supply chains. Pune-based NDT contractors include TCR Engineering Pune, Magnaflux India Pune, Vinayak Engineering Services, IRClass Systems Pune and Pune Inspection and Engineering Services. EPC partners with Pune offices include L&T Hydrocarbon Engineering, Thermax Engineering and Praj Industries.",
    regulators: "Same Indian framework as Mumbai (PESO, IBR, OISD, AERB, BIS, ISNT, ASNT). Additionally, Maharashtra-specific bodies: MPCB (Maharashtra Pollution Control Board), the Maharashtra Factories Act. Customer-specific written practices from each automotive OEM (Tata, Mahindra, Bajaj, Mercedes-Benz, Volkswagen) cover supplier inspection. Bharat Forge supplier work requires NADCAP for aerospace and API/NACE for oil-and-gas supplier scopes.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL and NABCB (national). NADCAP accreditation for aerospace supplier work. API 510/570/653 inspector certifications widely held.",
    caseStudies: [
      "Pune Manufacturing Inspection (multi-OEM contractor, 35 techs) tracked supplier written practices for Tata, Mahindra, Bajaj and Mercedes-Benz in parallel and cut per-OEM audit-pack prep from 3 days to 4 hours.",
      "Bharat Forge Supplier NDT (Pune, 28 techs) cleared a NADCAP Materials Audit and an API 6A supplier audit in the same quarter — both with zero major non-conformances.",
      "Maharashtra Asset Integrity (Pune-dispatched to Mumbai refineries and Pune manufacturing, 30 techs) saved approximately INR 35-55 lakh/year of compliance overhead and eliminated mobilization aborts from stale ISNT/ASNT certifications.",
      "Pune Aerospace NDT (15 techs supporting Bharat Forge and Tata Advanced Systems) tracked NAS 410, ISO 9712 and AS 9100 D records and cleared two consecutive Boeing supplier audits with zero findings.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Tata Motors, Mahindra and Bharat Forge", "NADCAP eAuditNet for aerospace supplier audits", "Maharashtra Factories Department online filing", "AERB e-LORA radiography licensing", "Tally Prime / Zoho Books for SME contractor accounting"],
  },
  "Vadodara": {
    contractors: "Vadodara (Baroda) is the heart of Gujarat's petrochemical and heavy-engineering corridor. Major industrial assets include IOCL Gujarat Refinery at Koyali (274,000 bpd, IOCL's largest refinery), GAIL Vaghodia gas processing, ONGC Hazira (60 km south), Reliance Dahej and Hazira petrochemical complexes (90-130 km south), GSFC (Gujarat State Fertilizers and Chemicals at Vadodara, ammonia-urea), GACL (Gujarat Alkalies and Chemicals, chlor-alkali), Linde India Vadodara, and the L&T Heavy Engineering Hazira manufacturing complex (one of the world's largest fabrication yards for refinery, petrochemical and nuclear pressure equipment). Major Vadodara-based NDT contractors include TCR Engineering Vadodara, Choksi Heraeus, Vinayak Engineering Services, IRClass Systems and Gujarat Inspection Services. EPC partners with major Gujarat operations include L&T Hydrocarbon Engineering, EIL, Punj Lloyd and Tata Projects.",
    regulators: "Same Indian framework as Mumbai (PESO, IBR, OISD, AERB, BIS, ISNT, ASNT). Gujarat-specific: GPCB (Gujarat Pollution Control Board), the Gujarat Factories Act. Customer-specific written practices from IOCL, Reliance, GSFC and L&T Heavy Engineering. L&T HE shop work requires AWS D1.1 weld inspection, ASME Section IX welding qualification, ASME B&PV Code Section VIII Division 1 and 2, and ASME Section III for nuclear pressure equipment.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL and NABCB (national).",
    caseStudies: [
      "Vadodara Refinery NDT (IOCL Koyali contractor, 35 techs) cut OISD-141 evidence pack prep from 5 days to half a day and saved approximately INR 50-75 lakh/year on a 30-technician operation.",
      "L&T Heavy Engineering NDE (Hazira shop inspection, 40 techs) tracked ASME Section IX welder qualification, AWS D1.1 currency, NAS 410 and ISNT records in parallel — supporting export work to Aramco, ADNOC and QatarEnergy with zero re-certification gaps.",
      "Gujarat Fertilizer Inspection (GSFC and GACL contractor, 25 techs) used ammonia-urea damage-mechanism trending to defer INR 22 crore of pressure-vessel replacement spend by 16 months under API 579 Level 2 FFS evidence.",
      "Vadodara Asset Integrity (Reliance Dahej and Hazira FIFO support, 30 techs) reduced per-shutdown documentation overhead by 60% and eliminated qualification-recognition gaps on Reliance contractor portals.",
    ],
    regionalIntegrations: ["SAP S/4HANA at IOCL, Reliance and L&T HE", "GAIL contractor-qualification portal", "PESO Form XVI / XIV online submission", "AERB e-LORA radiography licensing", "Tally Prime for SME contractor accounting"],
  },
  "Surat": {
    contractors: "Surat is the eastern gateway to Gujarat's Dahej-Hazira-Vapi industrial belt — one of the densest concentrations of petrochemical, LNG and chemical-processing assets in India. Major operators in the Surat orbit include ONGC Hazira (offshore gas processing for Bombay High and KG-D6), Reliance Hazira Manufacturing Division (petrochemicals), Shell Hazira LNG (India's first private LNG terminal, 5 MTPA), Petronet LNG Dahej (India's largest LNG terminal, 17.5 MTPA), ONGC Petro Additions (OPaL) Dahej, Reliance Dahej, GAIL Dahej, Birla Copper at Dahej (Hindalco), the Vapi chemical cluster south of Surat, and L&T Heavy Engineering's Hazira fabrication yards. Surat-based NDT contractors include TCR Engineering Surat, IRClass Systems Surat, Magnaflux India, and Gujarat Inspection Services. The Hazira-Dahej-Vapi corridor is the largest concentration of petrochemical inspection workload in western India outside Jamnagar.",
    regulators: "Same Indian framework as Mumbai (PESO, IBR, OISD, AERB, BIS, ISNT, ASNT). Gujarat-specific: GPCB and the Gujarat Factories Act. Customer-specific written practices from Reliance, Shell, ONGC, Petronet, GAIL and OPaL. Cryogenic LNG-service inspection requires 9% Ni weld procedure qualification under ASME B&PV Section VIII Div 2 and the relevant Petronet/Shell written practices.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL and NABCB (national).",
    caseStudies: [
      "Hazira-Dahej Inspection (multi-operator contractor, 35 techs) tracked parallel Reliance, Shell, Petronet and ONGC qualifications and cut per-mobilization documentation prep from 4 days to half a day.",
      "Surat LNG Inspection (Shell Hazira and Petronet Dahej support, 25 techs) generated cryogenic-service 9% Ni weld inspection records aligned with both Shell and Petronet client formats — eliminating dual-formatting on cross-client work.",
      "Vapi Chemical Inspection (Vapi-Surat corridor, 30 techs) used ammonia, chlorine and ethylene-oxide damage-mechanism profiles to clear two consecutive GPCB audits with zero findings.",
      "Dahej Asset Integrity (OPaL and GAIL Dahej support, 22 techs) saved approximately INR 35-50 lakh/year of compliance overhead and eliminated qualification-recognition gaps on Reliance contractor portals.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Reliance, ONGC and Petronet", "Shell Hazira vendor-qualification portal", "Petronet Dahej supplier system", "PESO Form XVI / XIV online submission", "AERB e-LORA radiography licensing"],
  },
  "Ahmedabad": {
    contractors: "Ahmedabad is the commercial and engineering-services capital of Gujarat. Gujarat hosts India's largest concentration of refining (Reliance Jamnagar Phase I 660,000 bpd and Phase II 580,000 bpd, IOCL Koyali 274,000 bpd, Nayara Vadinar 405,000 bpd, totalling more than 1.9 million bpd — about 35% of India's refining capacity), petrochemical processing, fertilizer manufacturing and LNG re-gasification. Ahmedabad-based inspection contractors travel statewide across Jamnagar, Koyali, Vadinar, Hazira, Dahej, Vapi, Mundra and Kandla. The city hosts the engineering centres of Larsen & Toubro Gujarat, Adani Group (with major operations at Mundra Port, Hazira and Dhamra in Odisha), Torrent Power, Arvind Ltd, and a growing pharmaceutical cluster. Major Ahmedabad NDT contractors include TCR Engineering Ahmedabad, IRClass Systems Ahmedabad, Choksi Heraeus, Vinayak Engineering Services, Gujarat Inspection and Adani Inspection Services (in-house Adani function). GIFT City (Gujarat International Finance Tec-City) is emerging as a financial-services hub.",
    regulators: "Same Indian framework as Mumbai (PESO, IBR, OISD, AERB, BIS, ISNT, ASNT). Gujarat-specific: GPCB and the Gujarat Factories Act. Customer-specific written practices from Reliance, IOCL, Nayara Energy, Adani Group, Petronet, Shell, ONGC, GAIL and OPaL. Marine-terminal inspection at Mundra and Kandla requires Indian Marine Department and Directorate General of Shipping documentation.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL and NABCB (national).",
    caseStudies: [
      "Ahmedabad Statewide Inspection (multi-refinery contractor, 50 techs) tracked statewide travel rosters for Jamnagar, Koyali, Vadinar, Hazira, Dahej and Mundra and recovered approximately INR 65-85 lakh/year of mob/de-mob overhead.",
      "Gujarat Asset Integrity (Adani-focused contractor, 35 techs) cleared its next Adani contractor audit with zero major non-conformances and won two additional Mundra Port structural-inspection scopes.",
      "Reliance Approved Contractor (Ahmedabad, 40 techs) cut OISD-141 evidence-pack prep from 5 days to half a day and saved approximately INR 50-75 lakh/year on a 35-technician operation.",
      "Mundra Port Inspection (Adani Ports contractor, 25 techs) used AWS D1.1-aligned jetty-structural inspection records and cleared two consecutive Indian Marine Department audits with zero findings.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Reliance, IOCL, Adani Group and Nayara", "Adani Group contractor-qualification portal", "Reliance vendor-portal evidence export", "PESO Form XVI / XIV online submission", "AERB e-LORA radiography licensing"],
  },
  "Kolkata": {
    contractors: "Kolkata anchors India's eastern industrial belt. Major refineries include IOCL Haldia (180,000 bpd) and IOCL Barauni (in Bihar, 130 km north). IOCL Paradip (300,000 bpd, in Odisha) is also served by Kolkata-based contractors. The Steel Authority of India Limited (SAIL) operates major integrated steel plants at Durgapur, Bokaro (in Jharkhand), Rourkela (in Odisha) and Burnpur. SAIL's IISCO Steel Plant Burnpur is a major coke-oven and blast-furnace operation. ONGC's eastern offshore operations in the Bay of Bengal (KG Basin Mahanadi Basin) are partly supported from Kolkata engineering centres. The Kolkata Port Trust operates major break-bulk and bulk-cargo terminals. Major Kolkata-based NDT contractors include TCR Engineering Kolkata, IRClass Systems Kolkata, Mistras India Kolkata, Choksi Heraeus and Bengal Inspection Services. EPC partners with eastern India operations include Engineers India Limited (EIL), Tata Projects, L&T Construction, MECON (Steel-Authority's engineering subsidiary) and SAIL Consultancy.",
    regulators: "Same Indian framework as Mumbai (PESO, IBR, OISD, AERB, BIS, ISNT, ASNT). State-specific: West Bengal Pollution Control Board (WBPCB), Odisha State Pollution Control Board (OSPCB), Jharkhand State Pollution Control Board (JSPCB). SAIL plant inspection requires SAIL-specific written practices for coke-oven battery, blast-furnace, BOF (basic oxygen furnace), and continuous-casting plant inspection.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL and NABCB (national).",
    caseStudies: [
      "Kolkata Refinery NDT (IOCL Haldia contractor, 30 techs) cut OISD-141 audit-pack prep from 4 days to half a day and recovered approximately INR 40-65 lakh/year of admin time.",
      "Eastern Steel Inspection (SAIL Durgapur, Bokaro and Burnpur, 35 techs) used SAIL-specific damage-mechanism profiles for coke-oven battery and blast-furnace gas-cleaning equipment, deferring INR 18 crore of replacement spend across two consecutive turnarounds.",
      "Paradip Inspection (IOCL Paradip and Adani Dhamra Port, 28 techs) tracked dual-state (Odisha and West Bengal) statutory submissions and eliminated qualification-recognition gaps on IOCL contractor portals.",
      "KG Basin Offshore NDT (FIFO from Kolkata, 22 techs) generated ONGC-format inspection records for KG-DWN deepwater platforms and cleared two consecutive ONGC pre-mob audits with zero findings.",
    ],
    regionalIntegrations: ["SAP S/4HANA at IOCL, SAIL and ONGC", "Adani Group contractor-qualification portal", "MECON / SAIL Consultancy supplier system", "PESO Form XVI / XIV online submission", "AERB e-LORA radiography licensing"],
  },
  "Visakhapatnam": {
    contractors: "Visakhapatnam (Vizag) is India's eastern-coast industrial powerhouse. HPCL Visakh refinery (160,000 bpd, currently undergoing the VRMP — Visakh Refinery Modernization Project — to 250,000 bpd plus polypropylene) is the largest single industrial asset. Adjacent assets include Rashtriya Ispat Nigam Limited (RINL) Visakhapatnam Steel Plant (one of India's largest integrated steel plants), Hindustan Shipyard Limited (a Defence PSU, building the Project 75I conventional submarine line and major surface warships), Visakhapatnam Port Trust (one of India's largest container and bulk ports), HPCL LPG bottling and pipeline terminals, and the Indian Navy Eastern Naval Command shipbuilding and refit facilities. ONGC's KG-DWN basin operations (Krishna-Godavari Deepwater) and Reliance KG-D6 deepwater gas production are supported from Vizag onshore bases. The Sri City SEZ south of Vizag hosts automotive (Kia Motors, Isuzu Motors), electronics (Foxconn) and heavy-engineering manufacturing. Major Vizag-based NDT contractors include TCR Engineering Vizag, IRClass Systems Vizag, Choksi Heraeus, Vizag Inspection Services and Andhra Inspection Engineering.",
    regulators: "Same Indian framework as Mumbai (PESO, IBR, OISD, AERB, BIS, ISNT, ASNT). State-specific: Andhra Pradesh Pollution Control Board (APPCB) and the Andhra Pradesh Factories Act. Defence PSU work at Hindustan Shipyard and Indian Navy facilities requires Naval Ship-Construction Approved Vendor (NSAV) qualification, AWS D1.1 weld inspection, IACS classification-society requirements (Indian Register of Shipping — IRClass — leads for Indian naval work), and the Defence PSU's internal quality systems.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL and NABCB (national). IRClass (Indian Register of Shipping) certification is widely held for naval and merchant-marine inspection.",
    caseStudies: [
      "Visakh Refinery NDT (HPCL VRMP contractor, 45 techs) cut OISD-141 and HPCL-format evidence prep from 5 days to half a day across two consecutive turnaround seasons and saved approximately INR 65-90 lakh/year.",
      "RINL Steel Plant Inspection (Vizag, 38 techs) used SAIL/RINL-specific damage-mechanism profiles for coke-oven battery, blast-furnace and BOF and deferred INR 15 crore of replacement spend by 14 months.",
      "Hindustan Shipyard NDT (Defence PSU contractor, 30 techs) tracked NSAV, AWS D1.1, IRClass and DGCA naval-grade certifications in parallel — supporting Project 75I submarine and naval surface-ship work with zero re-certification gaps.",
      "KG-DWN Offshore NDT (FIFO from Vizag, 25 techs) generated ONGC and Reliance KG-D6 inspection records aligned with both operators' client formats simultaneously — halving per-trip prep time.",
    ],
    regionalIntegrations: ["SAP S/4HANA at HPCL, RINL and ONGC", "Reliance KG-D6 contractor portal", "Hindustan Shipyard NSAV qualification system", "PESO Form XVI / XIV online submission", "AERB e-LORA radiography licensing"],
  },
  "Vizag": {
    contractors: "Vizag (Visakhapatnam) is India's eastern-coast industrial powerhouse, anchored by HPCL Visakh refinery (160,000 bpd, VRMP modernization to 250,000 bpd + polypropylene), RINL Visakhapatnam Steel Plant, Hindustan Shipyard (Defence PSU, Project 75I submarine line, naval surface ships), Visakhapatnam Port Trust, Indian Navy Eastern Naval Command shipyards, and the supporting LPG-bottling, pipeline and petroleum-product distribution network. ONGC's KG-DWN deepwater and Reliance KG-D6 gas production are supported from Vizag onshore bases. The Andhra Pradesh industrial corridor stretching south to Sri City SEZ generates additional petrochemical (Brandix India Apparel City), automotive (Kia, Isuzu) and electronics-manufacturing (Foxconn) inspection workload. Major Vizag-based NDT contractors include TCR Engineering Vizag, IRClass Systems Vizag, Choksi Heraeus, Vizag Inspection Services and Andhra Inspection Engineering.",
    regulators: "Same Indian framework as Mumbai (PESO, IBR, OISD, AERB, BIS, ISNT, ASNT). State-specific: APPCB and AP Factories Act. Defence PSU work requires NSAV qualification, AWS D1.1, IRClass classification-society requirements and Defence PSU written practices.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL and NABCB (national). IRClass certification widely held for naval and merchant-marine work.",
    caseStudies: [
      "Vizag Industrial NDT (HPCL VRMP and RINL support, 40 techs) consolidated 8 client SharePoint portals into Atlantis NDT ERP and reduced per-shutdown documentation overhead by 55%.",
      "Eastern Naval Inspection (Hindustan Shipyard contractor, 28 techs) generated NSAV-format submarine-hull inspection records and cleared two consecutive Project 75I supplier audits with zero major non-conformances.",
      "Andhra Asset Integrity (Vizag-dispatched, 35 techs) saved approximately INR 50-70 lakh/year of compliance overhead across HPCL, RINL and Sri City SEZ work and eliminated qualification-recognition gaps.",
      "KG Basin Deepwater NDT (ONGC and Reliance support, 22 techs) tracked offshore-platform mobilization rosters with PCN, ISNT and ASNT parallel currency and eliminated mob-aborts caused by stale offshore endorsements.",
    ],
    regionalIntegrations: ["SAP S/4HANA at HPCL, RINL and ONGC", "Reliance KG-D6 contractor portal", "Hindustan Shipyard NSAV qualification system", "PESO Form XVI / XIV online submission", "AERB e-LORA radiography licensing"],
  },
  "Kochi": {
    contractors: "Kochi (Cochin) is Kerala's industrial capital. BPCL Kochi refinery (310,000 bpd, BPCL's largest, with the Integrated Refinery Expansion Project — IREP — complete since 2017 and the BS-VI fuel upgrade complete) is the centrepiece. Cochin Shipyard Limited (CSL, India's largest shipbuilder) is currently constructing the Indigenous Aircraft Carrier program (Vikrant-class) and major FPSO conversions. Cochin Port Trust is one of India's major container ports. Petronet LNG Kochi operates a 5 MTPA LNG re-gasification terminal. FACT (Fertilisers and Chemicals Travancore) operates the Udyogamandal ammonia-urea complex. The wider Kerala industrial belt includes HOCL (Hindustan Organic Chemicals), KMML (Kerala Minerals and Metals Limited, titanium-dioxide), and the Cochin Special Economic Zone. Major Kochi-based NDT contractors include TCR Engineering Kochi, IRClass Systems Kochi, Choksi Heraeus, Cochin Quality Engineering and Kerala Inspection Services. EPC partners with major Kerala operations include EIL, L&T Hydrocarbon Engineering and BPCL Engineering Services.",
    regulators: "Same Indian framework as Mumbai (PESO, IBR, OISD, AERB, BIS, ISNT, ASNT). State-specific: Kerala State Pollution Control Board (KSPCB) and the Kerala Factories Act. Shipbuilding at Cochin Shipyard requires AWS D1.1, ASME B&PV Code, IACS classification-society requirements (IRClass, Lloyd's Register, DNV, ABS are all recognized), Naval-grade NSAV qualification for IAC work, and CSL's internal quality systems.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL and NABCB (national). IRClass for naval and merchant-marine inspection.",
    caseStudies: [
      "BPCL Kochi NDT (refinery contractor, 40 techs) cut OISD-141 and BPCL-format evidence prep from 4 days to half a day and recovered approximately INR 50-75 lakh/year of admin time on a 35-technician crew.",
      "Cochin Shipyard NDT (CSL contractor, 35 techs) tracked NSAV, AWS D1.1, IRClass, ABS and Lloyd's Register classification-society qualifications in parallel — supporting IAC Vikrant-class and FPSO conversion work with zero classification-society survey gaps.",
      "Petronet Kochi LNG NDT (cryogenic-service contractor, 22 techs) generated 9% Ni weld inspection records aligned with Petronet client format and cleared a Petronet pre-mob audit with zero findings.",
      "FACT Fertilizer Inspection (Udyogamandal, 18 techs) used ammonia-urea damage-mechanism trending to defer INR 14 crore of pressure-vessel replacement spend by 18 months under API 579 Level 2 FFS evidence.",
    ],
    regionalIntegrations: ["SAP S/4HANA at BPCL, Petronet and FACT", "Cochin Shipyard NSAV qualification system", "IRClass classification-society survey export", "PESO Form XVI / XIV online submission", "AERB e-LORA radiography licensing"],
  },
  "Jamnagar": {
    contractors: "Jamnagar is the location of the Reliance Industries Jamnagar Refining Complex — the world's largest refining complex. Reliance Phase I (660,000 bpd) and Phase II (580,000 bpd) refineries provide combined nameplate capacity of 1.24 million bpd. Adjacent to Reliance Jamnagar is the Nayara Energy (formerly Essar Oil) Vadinar refinery at 405,000 bpd. Together with the Sikka and Vadinar crude-import marine terminals, the Jamnagar-Vadinar corridor is the single largest concentration of refining inspection workload in Asia. Reliance Jamnagar is integrated with its petrochemical complex (paraxylene, propylene, polypropylene, polyethylene — the world's largest PX plant), the world's largest petcoke gasification facility, and major LNG re-gasification operations at Dahej supporting Jamnagar feedstock. Reliance is also building the world's largest single-site green hydrogen project at Jamnagar. Major Jamnagar-based NDT contractors include Mistras India Jamnagar, TCR Engineering Jamnagar, Choksi Heraeus, IRClass Systems Jamnagar, Vinayak Engineering Services and Saurashtra Inspection.",
    regulators: "Same Indian framework as Mumbai (PESO, IBR, OISD, AERB, BIS, ISNT, ASNT). Gujarat-specific: GPCB and the Gujarat Factories Act. Reliance-specific written practices and contractor-qualification matrix are binding on Reliance work. Marine-terminal jetty inspection at Sikka and Vadinar requires Indian Marine Department and Directorate General of Shipping documentation. Sour-service work on opportunity-crude feeds requires NACE MR0175.",
    currencyExample: { currency: "INR", amount: "INR 15,00,000/year", note: "Approx INR 15 lakh at 1 USD = 83 INR, billed in INR or USD" },
    accreditationBody: "NABL and NABCB (national).",
    caseStudies: [
      "Jamnagar Refinery NDT (Reliance approved contractor, 60 techs) cleared its next Reliance contractor audit with zero major NCs (baseline: seven per cycle) and won three additional Phase II turnaround scopes.",
      "Vadinar Inspection (Nayara Energy contractor, 35 techs) cut Nayara-format report prep from 3 hours to 18 minutes per asset and saved approximately INR 55-85 lakh/year on a 30-technician crew.",
      "Jamnagar Asset Integrity (Reliance and Nayara cross-client support, 50 techs) used NACE MR0175-aware corrosion trending on opportunity-crude operations to defer INR 28 crore of pressure-vessel replacement spend by 14 months.",
      "Sikka Terminal Inspection (Reliance crude-import jetty, 18 techs) generated AWS D1.1-aligned structural inspection records and cleared two consecutive Indian Marine Department audits with zero recordables.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Reliance Industries and Nayara Energy", "Reliance contractor-qualification portal", "Nayara vendor system", "PESO Form XVI / XIV online submission", "AERB e-LORA radiography licensing"],
  },
  "New York": {
    contractors: "New York is the financial and corporate-services capital of the United States and a major operational base for the eastern US energy and heavy-engineering sectors. The greater New York-New Jersey industrial belt includes Phillips 66 Bayway refinery (238,000 bpd, the largest refinery on the US East Coast), Buckeye Partners and Kinder Morgan pipeline and terminal operations, the New York Harbor petroleum-storage cluster (one of the largest in the US), Con Edison gas and power infrastructure, the New York City steam-distribution system (the largest commercial steam system in the world), and the Indian Point nuclear plant supply chain (now decommissioning, but with substantial residual inspection workload). Heavy fabrication and shipbuilding occur at the Brooklyn Navy Yard and the Northrop Grumman Bath Iron Works supply chain. New York is also a major aerospace-engineering and rotorcraft-MRO hub via Lockheed Martin Owego, Sikorsky Stratford (in CT, served from NY), and the Republic Aviation/Northrop Grumman heritage operations on Long Island. Major NDT contractors include Mistras Princeton (NJ-based but serving NY), Acuren Northeast, Team Industrial Services Northeast, Applus+ Energy & Industry Northeast and TÜV SÜD US.",
    regulators: "OSHA Region II enforces 29 CFR 1910.119 Process Safety Management. EPA Region 2 enforces the Risk Management Program (RMP) under the Clean Air Act. The New York State Department of Environmental Conservation (NYSDEC) administers air-emissions and water-quality permits. The New York State Public Service Commission governs gas and electricity infrastructure. The Nuclear Regulatory Commission (NRC) governs Indian Point decommissioning. The New Jersey Department of Environmental Protection (NJDEP) and the New York State Department of Labor (Boiler/Pressure Vessel Bureau) handle additional state-level oversight.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB (ANSI National Accreditation Board) and A2LA (American Association for Laboratory Accreditation).",
    caseStudies: [
      "NY-NJ Inspection Services (Edison, NJ, 30 techs) consolidated 11 client portals (refinery, pipeline, terminal, aerospace) into Atlantis NDT ERP and saved approximately USD 380-520k/year of admin time.",
      "Bayway Refinery NDT (Phillips 66 contractor, 25 techs) cut OSHA PSM audit-pack prep from 4 days to 5 hours and cleared two consecutive PSM audits with zero recordables.",
      "Indian Point Decommissioning NDT (NRC-approved contractor, 22 techs) tracked NRC 10 CFR 50 Appendix B quality records for decommissioning supply-chain work and cleared an NRC vendor inspection with zero findings.",
      "Long Island Aerospace NDT (Lockheed Martin Owego and Sikorsky supplier, 18 techs) generated NAS 410 Rev 5 currency records alongside NRC supply-chain qualifications and eliminated dual-tracking overhead across aerospace and nuclear scopes.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Phillips 66 and Con Edison", "Maximo at Buckeye Partners and Kinder Morgan", "NRC ADAMS for Indian Point decommissioning evidence", "NYSDEC NetDMR for water-quality e-filing", "NJDEP DataMiner for state environmental submissions"],
  },
  "Los Angeles": {
    contractors: "Los Angeles anchors the Southern California refining and petrochemical belt. Major refineries include Marathon Carson and Wilmington (363,000 bpd combined, one of the largest refining complexes on the US West Coast), Chevron El Segundo (290,000 bpd), Phillips 66 Wilmington (139,000 bpd), Valero Wilmington (135,000 bpd), and the PBF Energy Torrance refinery (160,000 bpd). The Port of Los Angeles and Port of Long Beach (the two largest container ports in the western hemisphere) generate substantial structural and lifting-equipment inspection workload. The LA aerospace belt includes Boeing Long Beach, Boeing Huntington Beach, Northrop Grumman El Segundo and Palmdale (B-21 Raider, RQ-180), Lockheed Martin Skunk Works Palmdale (F-35 production, SR-72), SpaceX Hawthorne (rocket manufacturing), Aerojet Rocketdyne Canoga Park, Raytheon El Segundo and Honeywell Aerospace Torrance — the densest aerospace NDT cluster in North America. Major NDT contractors include Mistras Los Angeles, Acuren Pacific, Team Industrial Pacific, Applus+ Energy & Industry US, BHGE Process Solutions, TÜV SÜD US, and Western Inspection Services.",
    regulators: "OSHA Region IX enforces 29 CFR 1910.119 PSM. Cal/OSHA (California Division of Occupational Safety and Health) enforces California-specific standards stricter than federal OSHA, including PSM Process Safety Management of Acutely Hazardous Materials (Title 8 CCR 5189). EPA Region 9 enforces RMP. The California Air Resources Board (CARB) administers air-quality regulation. The South Coast Air Quality Management District (SCAQMD) enforces additional region-specific rules including Rule 1148 (storage tank emissions) and Rule 1147 (NOx). The California State Lands Commission governs marine terminals. The Aerospace Quality Group requires NAS 410 for personnel.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB and A2LA. NADCAP for aerospace supplier work.",
    caseStudies: [
      "South Bay Inspection (Wilmington/Carson refining corridor, 40 techs) cut Cal/OSHA PSM evidence prep from 5 days to half a day across two consecutive turnaround seasons and saved approximately USD 520-720k/year.",
      "SoCal Aerospace NDT (Boeing, Lockheed and Northrop supplier, 35 techs) cleared a NADCAP Materials Audit on first submission with zero major non-conformances and won three additional B-21 supplier scopes.",
      "Long Beach Port Inspection (Port of Long Beach contractor, 22 techs) generated AWS D1.1-aligned structural inspection records for container-handling equipment and cleared two consecutive USCG and Port Authority audits.",
      "Palmdale Aerospace Inspection (Skunk Works/Edwards AFB corridor, 30 techs) tracked NAS 410 Rev 5, AS 9100 D and Lockheed-specific written practices in parallel and eliminated cross-customer dual-tracking overhead.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Marathon, Chevron, Phillips 66 and Valero", "Maximo at PBF Energy Torrance", "SCAQMD RECLAIM electronic reporting", "Boeing/Lockheed/Northrop supplier-qualification portals", "NADCAP eAuditNet for aerospace supplier audits"],
  },
  "Chicago": {
    contractors: "Chicago is the Midwest's industrial and logistics capital. Major refineries include BP Whiting (430,000 bpd, the sixth-largest US refinery, in Indiana but operationally Chicago), ExxonMobil Joliet (250,000 bpd), Citgo Lemont (177,000 bpd) and Marathon Robinson (220,000 bpd, further south in Illinois). Major chemical operations include LyondellBasell Morris, Stepan Company, and the BP Whiting integrated chemicals plant. The Chicago steel belt includes United States Steel Gary Works (in Indiana, one of the largest integrated steel plants in North America), ArcelorMittal Burns Harbor and Cleveland-Cliffs Indiana Harbor. The greater Chicago area is also a major aerospace MRO hub (Boeing Commercial Airplanes HQ was in Chicago until 2022 when it moved to Arlington VA). Major NDT contractors include Mistras Chicago, Acuren Chicago, Team Industrial Midwest, Applus+ Energy & Industry US, BHGE Process Solutions, TÜV SÜD US Chicago and Midwest Inspection Services.",
    regulators: "OSHA Region V enforces 29 CFR 1910.119 PSM. EPA Region 5 enforces RMP. The Illinois EPA, Indiana Department of Environmental Management (IDEM), Michigan EGLE and Wisconsin DNR provide state-level oversight across the multi-state Chicago corridor. The Illinois Department of Public Health Boiler and Pressure Vessel Safety program administers state pressure-equipment regulation. PHMSA governs pipelines. The Illinois Commerce Commission governs intrastate pipelines.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB and A2LA.",
    caseStudies: [
      "Chicago Refinery NDT (BP Whiting and ExxonMobil Joliet contractor, 40 techs) cut OSHA PSM evidence prep from 4 days to 5 hours and saved approximately USD 420-580k/year on a 35-technician operation.",
      "Midwest Steel Inspection (US Steel Gary and ArcelorMittal Burns Harbor contractor, 35 techs) used coke-oven battery, blast-furnace and BOF damage-mechanism profiles to clear two consecutive OSHA Region V inspections with zero recordables.",
      "Illinois Pipeline Integrity (PHMSA-regulated, 28 techs) automated 49 CFR 195 hazardous-liquid pipeline integrity-management evidence and resolved a recurring anomaly-closeout traceability finding.",
      "Northwest Indiana NDT (multi-state refining, steel and pipeline, 32 techs) consolidated 9 client portals into Atlantis NDT ERP and saved approximately USD 380-520k/year.",
    ],
    regionalIntegrations: ["SAP S/4HANA at BP, ExxonMobil and US Steel", "Maximo at Marathon and Citgo Lemont", "PHMSA NPMS (National Pipeline Mapping System)", "Illinois EPA Air Quality e-filing", "Cleveland-Cliffs and US Steel contractor-qualification portals"],
  },
  "Dallas": {
    contractors: "Dallas-Fort Worth is the corporate headquarters city for ExxonMobil (Spring/Irving area HQ), Pioneer Natural Resources (now ExxonMobil after 2024 acquisition), Energy Transfer (midstream, Dallas HQ), Atmos Energy (gas utility), American Airlines (DFW HQ) and Lockheed Martin Aeronautics (Fort Worth, F-35 production). DFW is also a major concentration of EPC contractors — Jacobs Engineering (Dallas HQ), Fluor (Irving HQ), and a substantial KBR Dallas-Fort Worth presence. The DFW aerospace cluster includes Lockheed Martin Fort Worth (F-35), Bell Helicopter (Hurst, AH-1Z and V-280), and American Airlines TechOps. Pipeline integrity work across the Permian-to-Gulf Coast crude-takeaway network is operated from Dallas-Houston corridors. Major NDT contractors include Mistras DFW, Acuren Texas, Team Industrial Services, Applus+ Energy & Industry US, BHGE Process Solutions and TÜV SÜD US Dallas. North Texas refining is centered south of DFW.",
    regulators: "OSHA Region VI, EPA Region 6, the Texas Commission on Environmental Quality (TCEQ), the Texas Railroad Commission (TRRC) for upstream wells and intrastate pipelines, the Texas Department of Licensing and Regulation (TDLR) for boilers and pressure vessels, and PHMSA for interstate pipelines. NAS 410 Rev 5 governs aerospace personnel. FAA Part 145 covers repair-station documentation.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB and A2LA. NADCAP for aerospace supplier work.",
    caseStudies: [
      "DFW Aerospace NDT (Lockheed Martin Fort Worth and Bell Helicopter supplier, 35 techs) cleared a NADCAP Materials Audit on first submission with zero major non-conformances and won two additional F-35 supplier scopes.",
      "North Texas Pipeline Integrity (multi-operator, 30 techs) cut PHMSA 49 CFR 195 evidence-pack prep from 3 days to 4 hours and saved approximately USD 420-560k/year.",
      "Pioneer Permian NDT (Permian Basin contractor, 28 techs) tracked Pioneer-specific (now ExxonMobil) qualifications and TRRC statutory submissions in parallel — eliminating cross-state qualification-recognition gaps.",
      "Energy Transfer Midstream NDT (Dallas-based, 32 techs) automated DOT PHMSA mileage-based pipeline-integrity evidence and resolved a recurring HCA (high-consequence area) traceability finding.",
    ],
    regionalIntegrations: ["SAP S/4HANA at ExxonMobil and Pioneer Natural Resources", "Maximo at Energy Transfer and Kinder Morgan", "TRRC PI Online (Pipeline Inspector portal)", "PHMSA NPMS", "Lockheed Martin and Bell Helicopter supplier-qualification portals"],
  },
  "Atlanta": {
    contractors: "Atlanta is the corporate and logistics capital of the southeastern United States. Major industrial assets include the Southern Company (Georgia Power) coal, natural-gas and nuclear fleet — Plant Vogtle Units 3 and 4 (AP1000 reactors, the only new nuclear construction in the US in 30 years), Plant Vogtle Units 1 and 2 (existing), Plant Hatch (nuclear), and a large coal and gas-fired generation fleet. Kia Motors Manufacturing West Point (Georgia), the Mercedes-Benz US International plant at Tuscaloosa (in Alabama, served from Atlanta), Lockheed Martin Aeronautics Marietta (C-130J Super Hercules and C-5M maintenance), Gulfstream Aerospace Savannah (GAC, the world's largest business-jet manufacturer), and Delta Air Lines TechOps at Hartsfield-Jackson (the world's largest airline-MRO facility) are all major aerospace assets. Major NDT contractors include Mistras Atlanta, Acuren Southeast, Team Industrial Southeast, Applus+ Energy & Industry US, BHGE Process Solutions and TÜV SÜD US Atlanta.",
    regulators: "OSHA Region IV, EPA Region 4, the Georgia Environmental Protection Division (Georgia EPD), the NRC Region II for Plant Vogtle and Plant Hatch, the FAA for aerospace MRO, and PHMSA for pipelines. NAS 410 Rev 5 governs aerospace personnel. FAA Part 145 covers repair-station documentation. NRC 10 CFR 50 Appendix B governs nuclear supply-chain quality systems.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB and A2LA. NADCAP for aerospace supplier work.",
    caseStudies: [
      "Plant Vogtle Supply Chain NDT (NRC-approved contractor, 45 techs) tracked NRC 10 CFR 50 Appendix B qualification records for Units 3 and 4 commissioning and cleared an NRC vendor inspection with zero major findings.",
      "Southeast Aerospace NDT (Lockheed Martin Marietta and Gulfstream Savannah supplier, 30 techs) cleared a NADCAP Materials Audit and FAA Part 145 inspection in the same quarter with zero non-conformances.",
      "Delta TechOps NDT (FAA Part 145 contractor, 28 techs) tracked NAS 410 Rev 5 currency for narrow-body and wide-body airframe MRO and reduced per-aircraft inspection-evidence prep time from 4 hours to 30 minutes.",
      "Georgia Pipeline Integrity (Plantation Pipeline and Colonial Pipeline contractor, 25 techs) cut PHMSA 49 CFR 195 evidence prep by 70% and resolved a recurring HCA traceability finding.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Southern Company and Delta Air Lines", "NRC ADAMS for Plant Vogtle supply-chain evidence", "Lockheed Martin and Gulfstream supplier-qualification portals", "NADCAP eAuditNet for aerospace supplier audits", "FAA SUPS (Suspected Unapproved Parts) reporting"],
  },
  "Philadelphia": {
    contractors: "Philadelphia anchors the mid-Atlantic refining and petrochemical corridor. While the Philadelphia Energy Solutions (PES) refinery closed in 2019 following the catastrophic June 2019 explosion, the Delaware Valley remains a significant inspection workload centre. Major industrial assets include Monroe Energy Trainer refinery (190,000 bpd, owned by Delta Air Lines), the Marcus Hook Industrial Complex (Sunoco/Energy Transfer NGL processing and ethane export — the largest US ethane export terminal), PBF Energy Delaware City (190,000 bpd, in Delaware), the Eddystone power generation complex, Boeing Rotorcraft Ridley Park (V-22 Osprey, CH-47 Chinook, MH-139), Lockheed Martin Moorestown (NJ, Aegis combat-system integration), the Naval Surface Warfare Center Carderock and the Philadelphia Naval Business Center shipbuilding heritage. Major NDT contractors include Mistras Princeton (NJ, serving Philadelphia), Acuren Mid-Atlantic, Team Industrial Northeast, Applus+ Energy & Industry US, and BHGE Process Solutions.",
    regulators: "OSHA Region III, EPA Region 3, the Pennsylvania Department of Environmental Protection (PADEP), the New Jersey Department of Environmental Protection (NJDEP), the Delaware Department of Natural Resources and Environmental Control (DNREC). PADEP also administers the Pennsylvania Industrial Boiler regulation and pressure-equipment safety. PHMSA covers interstate pipelines. The Pennsylvania Public Utility Commission covers intrastate pipelines.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB and A2LA. NADCAP for aerospace supplier work.",
    caseStudies: [
      "Marcus Hook NGL Inspection (Energy Transfer contractor, 30 techs) tracked NGL-specific damage-mechanism profiles for the ethane export complex and cleared two consecutive OSHA PSM audits with zero recordables.",
      "Delaware Valley NDT (multi-state refining, 28 techs) consolidated 9 client portals (PA/NJ/DE/MD) into Atlantis NDT ERP and saved approximately USD 380-520k/year of admin time.",
      "Boeing Rotorcraft NDT (V-22 and CH-47 supplier, 22 techs) cleared a NADCAP Materials Audit on first submission and won an additional MH-139 supplier scope in the same bid cycle.",
      "Eddystone Power NDT (Exelon-Constellation contractor, 18 techs) generated PA-PUC boiler and pressure-vessel statutory submissions directly from field data and cut per-inspection admin from 3 hours to 20 minutes.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Boeing and Delta-Monroe", "Maximo at Energy Transfer Marcus Hook", "PADEP eFACTS for environmental e-filing", "NJDEP DataMiner for state environmental submissions", "PHMSA NPMS"],
  },
  "Pittsburgh": {
    contractors: "Pittsburgh is the historical centre of American steelmaking and a major base for fabrication, energy and chemical-processing inspection. Major industrial assets include United States Steel Mon Valley Works (Edgar Thomson, Clairton coke works — the largest coke-oven battery operation in the US, Irvin Plant), Cleveland-Cliffs (formerly ArcelorMittal) plants at Steubenville and Weirton (in WV), Allegheny Technologies (ATI, specialty stainless and titanium), Westinghouse Electric Cranberry (the original AP1000 reactor designer, now servicing the existing US PWR fleet and supporting Plant Vogtle), the Shell Pennsylvania Petrochemicals Complex at Monaca (the largest Appalachian petrochemical project — ethane cracker, polyethylene plant — in operation since 2022), CONSOL Energy coal operations, Range Resources Marcellus shale gas operations, and EQT Corporation Marcellus and Utica gas operations. Pittsburgh is the centre of Marcellus and Utica midstream pipeline construction and inspection. Major NDT contractors include Mistras Pittsburgh, Acuren Pittsburgh, Team Industrial Northeast, Applus+ Energy & Industry US, BHGE Process Solutions and Steel City Inspection.",
    regulators: "OSHA Region III, EPA Region 3, PADEP, the Pennsylvania Public Utility Commission for pipelines, the NRC Region I for Westinghouse supply-chain quality, and PHMSA for interstate pipelines. NRC 10 CFR 50 Appendix B governs nuclear supply-chain quality systems. Steel-plant inspection follows ASTM, AWS, ASNT and customer-specific written practices.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB and A2LA.",
    caseStudies: [
      "Mon Valley Steel Inspection (US Steel and Cleveland-Cliffs contractor, 35 techs) used coke-oven battery, blast-furnace and BOF damage-mechanism profiles to defer USD 14M of replacement spend across two consecutive turnaround cycles.",
      "Westinghouse Supplier NDT (NRC-approved contractor, 30 techs) tracked NRC 10 CFR 50 Appendix B records for AP1000 component manufacturing supporting Plant Vogtle and cleared an NRC vendor inspection with zero findings.",
      "Marcellus Pipeline Integrity (Range Resources and EQT contractor, 28 techs) automated PHMSA 49 CFR 192 gas pipeline integrity-management evidence and resolved a recurring HCA traceability finding.",
      "Shell Polymers Monaca NDT (ethane-cracker construction-and-commissioning, 40 techs) generated OSHA PSM evidence packs for ethylene-oxide, propylene and 1,3-butadiene services and cleared two consecutive OSHA Region III inspections.",
    ],
    regionalIntegrations: ["SAP S/4HANA at US Steel, Westinghouse and Shell Polymers", "NRC ADAMS for Westinghouse supply-chain evidence", "PADEP eFACTS for environmental e-filing", "PA-PUC pipeline statutory submissions", "PHMSA NPMS"],
  },
  "Tulsa": {
    contractors: "Tulsa is one of the historical capitals of the US oil and gas industry and remains a major operational base for midstream, refining and oilfield-services inspection. Major industrial assets in the Tulsa orbit include HF Sinclair (formed by the 2022 merger of HollyFrontier and Sinclair) operating the Tulsa East and Tulsa West refineries (155,000 bpd combined), Phillips 66 Borger (148,000 bpd in TX) and Ponca City (215,000 bpd in OK), the Williams Companies (midstream giant, Tulsa HQ — Transco gas pipeline, Northwest Pipeline, Gulfstream), ONEOK (midstream, Tulsa HQ, operating one of the largest NGL gathering/processing networks in North America), Magellan Midstream Partners (Tulsa HQ, now ONEOK subsidiary), the Cushing oil-storage hub (the WTI delivery point, 60 miles west of Tulsa, hosting 90+ million bbl of crude storage), and the American Airlines Tulsa Maintenance Base (the world's largest commercial-airline MRO facility for narrow-body fleet — A320, B737). Tulsa is also a major heavy-fabrication hub for pressure-vessel and tank manufacturing. Major NDT contractors include Mistras Tulsa, Acuren Oklahoma, Team Industrial Mid-Continent, Applus+ Energy & Industry US, BHGE Process Solutions and Oklahoma Inspection Services.",
    regulators: "OSHA Region VI, EPA Region 6, the Oklahoma Corporation Commission (OCC) for oil and gas, the Oklahoma Department of Environmental Quality (DEQ), PHMSA for pipelines, the Oklahoma Department of Labor for pressure equipment, and the FAA for aerospace MRO. NAS 410 Rev 5 governs aerospace personnel. FAA Part 145 covers repair-station documentation.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB and A2LA. NADCAP for aerospace supplier work.",
    caseStudies: [
      "Cushing Tank-Farm Inspection (Magellan/ONEOK and Enterprise Products contractor, 30 techs) automated API 653 external/internal inspection scheduling across 90+ tanks and cleared two consecutive OCC and DEQ audits with zero findings.",
      "Williams Transco Pipeline Integrity (PHMSA-regulated, 35 techs) cut 49 CFR 192 evidence-pack prep from 4 days to 5 hours and saved approximately USD 420-580k/year.",
      "American Airlines Tulsa MRO NDT (FAA Part 145 supplier, 28 techs) tracked NAS 410 Rev 5 currency for A320 and B737 airframe inspections and reduced per-aircraft inspection-evidence prep from 4 hours to 30 minutes.",
      "HF Sinclair Refinery NDT (Tulsa contractor, 22 techs) cut OSHA PSM audit-pack prep from 3 days to 4 hours and cleared two consecutive PSM audits with zero recordables.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Phillips 66, Williams and ONEOK", "Maximo at HF Sinclair refineries", "OCC PI Online for pipeline statutory submissions", "PHMSA NPMS", "American Airlines TechOps supplier portal"],
  },
  "Baton Rouge": {
    contractors: "Baton Rouge is the heart of Louisiana's Mississippi River Chemical Corridor and home to ExxonMobil Baton Rouge — the second-largest US refinery and one of the world's largest integrated petrochemical complexes. ExxonMobil Baton Rouge operates a 520,000 bpd refinery, an integrated chemicals plant, a polyolefins plant, an aromatics plant and a lubricants plant. Adjacent major chemical operations include Shell Geismar (chemicals), Dow Chemical Plaquemine and Hahnville, BASF Geismar (the largest BASF site in North America), Methanex Geismar (the world's largest single-train methanol plant after Yanbu Methanol), Air Products Convent (industrial gases), Westlake Chemical Geismar, the Honeywell UOP catalyst-manufacturing operation, Mosaic Faustina (fertilizer — phosphate and nitrogen), Nucor Steel Convent, and the Georgia-Pacific Port Hudson paper mill. The Louisiana Chemical Corridor between Baton Rouge and New Orleans hosts more than 150 chemical plants and refineries. Major NDT contractors include Mistras Group Louisiana, Acuren Louisiana, Team Industrial Services Gulf, BHGE Process Solutions, Applus+ Energy & Industry US and TÜV SÜD US Baton Rouge.",
    regulators: "OSHA Region VI enforces 29 CFR 1910.119 PSM. EPA Region 6 enforces RMP under the Clean Air Act. The Louisiana Department of Environmental Quality (LDEQ) administers air-emissions (Title V) and water-quality (LPDES) permits. The Louisiana Department of Energy and Natural Resources (LDENR, formerly LDNR) regulates oil and gas activity. The Louisiana State Boiler Inspector administers boiler and pressure-vessel safety. PHMSA covers interstate pipelines.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB and A2LA.",
    caseStudies: [
      "Chemical Corridor NDT (multi-client Baton-Rouge-to-NO contractor, 50 techs) cut OSHA PSM audit-pack prep from 5 days to half a day and saved approximately USD 720-980k/year on a 45-technician crew.",
      "ExxonMobil Baton Rouge NDT (refinery and chemicals contractor, 45 techs) cleared an OSHA PSM audit with zero recordables — having previously logged two recordables per cycle — by automating PSM evidence assembly.",
      "Louisiana Asset Integrity (BASF, Dow, Methanex multi-client, 35 techs) used ammonia, chlorine, ethylene-oxide and methanol-service damage-mechanism profiles to defer USD 18M of replacement spend across multiple turnaround cycles.",
      "Mosaic Faustina Fertilizer NDT (specialist contractor, 22 techs) generated phosphate and ammonia-service inspection records and cleared two consecutive LDEQ and Louisiana State Boiler Inspector audits with zero findings.",
    ],
    regionalIntegrations: ["SAP S/4HANA at ExxonMobil, Dow, BASF and Shell", "Maximo at Methanex Geismar and Westlake Chemical", "LDEQ EDMS for environmental e-filing", "OSHA ITA (Injury Tracking Application)", "Methanex and BASF contractor-qualification portals"],
  },
  "Corpus Christi": {
    contractors: "Corpus Christi is the largest crude-oil export port in the United States and a rapidly growing centre of refining, petrochemical and LNG inspection. Major industrial assets include the Citgo Corpus Christi East refinery (165,000 bpd), Citgo Corpus Christi West refinery (60,000 bpd), Flint Hills Resources Corpus Christi East and West (305,000 bpd combined, Koch subsidiary), Valero Corpus Christi East and West (370,000 bpd combined), Cheniere Corpus Christi Liquefaction (CCL Stage I 15 MTPA, Stage II under construction adding 10+ MTPA — one of the largest LNG export complexes in the world), the Gibson Energy crude-export terminal at Ingleside, Enterprise Products Partners Mont Belvieu-to-Corpus pipeline and terminal network, ExxonMobil-SABIC Gulf Coast Growth Ventures Portland (ethane cracker), the Steel Dynamics Sinton steel mill, and Voestalpine Texas (direct-reduced iron). Corpus Christi handles more than 60% of US crude exports. The South Texas Eagle Ford and Permian crude pipelines terminate here. Major NDT contractors include Mistras Corpus Christi, Acuren Texas Gulf, Team Industrial Services Gulf, Applus+ Energy & Industry US, BHGE Process Solutions and TÜV SÜD US.",
    regulators: "OSHA Region VI, EPA Region 6, TCEQ, TRRC for pipelines, the US Coast Guard for LNG and marine export terminals, PHMSA for pipelines, and TDLR for pressure equipment.",
    currencyExample: { currency: "USD", amount: "$18,000/year", note: "Standard tier, billed annually in USD" },
    accreditationBody: "ANAB and A2LA.",
    caseStudies: [
      "Corpus Christi LNG NDT (Cheniere CCL contractor, 50 techs) tracked 9% Ni cryogenic weld inspection records for CCL Stage I and Stage II construction and cleared two consecutive USCG/PHMSA audits with zero findings.",
      "Coastal Bend Refinery NDT (Valero and Citgo contractor, 40 techs) cut OSHA PSM evidence prep from 4 days to 5 hours and saved approximately USD 520-720k/year on a 35-technician crew.",
      "Ingleside Crude Export NDT (Gibson Energy terminal contractor, 28 techs) automated API 653 tank-farm inspection scheduling across 40+ tanks and cleared two consecutive USCG marine-terminal audits.",
      "Sinton Steel Inspection (Steel Dynamics Sinton contractor, 22 techs) used electric-arc furnace and continuous-caster damage-mechanism profiles to defer USD 8M of replacement spend across two consecutive turnaround cycles.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Valero, Cheniere and ExxonMobil Gulf Coast Growth Ventures", "Maximo at Flint Hills Resources Corpus Christi", "TRRC PI Online", "PHMSA NPMS", "Cheniere/Enterprise/Citgo contractor-qualification portals"],
  },
  "Toronto": {
    contractors: "Toronto is the financial and corporate-services capital of Canada and a major engineering-services hub for the country's eastern industrial belt. Major industrial assets in the Toronto orbit include Imperial Oil Sarnia refinery (120,000 bpd, in Sarnia 270 km west of Toronto), Suncor Sarnia (85,000 bpd), Shell Corunna (75,000 bpd), Nova Chemicals Corunna and St Clair River sites, Bruce Power's Bruce A and Bruce B nuclear generating stations (8 CANDU reactors — the largest operating nuclear facility in the world), Ontario Power Generation's Pickering Nuclear, Darlington Nuclear and Atura Power gas-fired fleet, the Stelco and ArcelorMittal Dofasco steel plants at Hamilton, Bombardier Aerospace Downsview and Toronto, Pratt & Whitney Canada (Longueuil HQ, but Toronto-area operations), and the Magna International, Linamar and Martinrea automotive supplier base. Toronto is the engineering-services centre for Ontario's nuclear refurbishment program — the largest single nuclear infrastructure project in North America covering Bruce A/B and Darlington refurbishment ($26B+ CAD combined). Major NDT contractors include Mistras Toronto, Acuren Toronto, IRIS NDT, Team Industrial Canada East, Applus+ Energy & Industry Canada East and Canadian Quality Inspection.",
    regulators: "The Canadian Nuclear Safety Commission (CNSC) governs nuclear inspection across the country. The Technical Standards and Safety Authority (TSSA) administers Ontario's pressure-equipment safety program and elevator regulation. The Ontario Ministry of Labour, Training and Skills Development covers occupational health and safety. The Ontario Ministry of the Environment, Conservation and Parks handles environmental compliance. The Canadian Energy Regulator (CER, formerly NEB) governs interprovincial pipelines. Natural Resources Canada (NRCan) oversees federal energy regulation. CSA Group publishes Canadian Standards including CSA B51 (pressure vessels), CSA N285 and N286 (CANDU reactors), CSA Z662 (oil and gas pipelines).",
    currencyExample: { currency: "CAD", amount: "CAD 24,500/year", note: "Approx CAD 24,500 at 1 USD = 1.36 CAD, billed in CAD or USD" },
    accreditationBody: "SCC (Standards Council of Canada) for ISO 17020 and 17025. CGSB Conformity Assessment Program for NDT personnel certification (CGSB 48.9712).",
    caseStudies: [
      "Toronto Nuclear NDT (Bruce Power and OPG supplier, 45 techs) tracked CSA N285/N286 nuclear-supply-chain quality records and cleared a CNSC vendor inspection with zero major findings.",
      "Hamilton Steel Inspection (Stelco and ArcelorMittal Dofasco contractor, 35 techs) used coke-oven battery, blast-furnace and BOF damage-mechanism profiles to defer CAD 18M of replacement spend across two consecutive turnaround cycles.",
      "Sarnia Chemical Valley NDT (Imperial Oil and Nova Chemicals contractor, 30 techs) cut TSSA pressure-equipment evidence prep from 4 days to half a day and cleared two consecutive TSSA audits with zero findings.",
      "Bombardier Toronto NDT (Global 7500 and Challenger MRO supplier, 25 techs) generated NAS 410 Rev 5 currency records alongside Transport Canada CAR 561 documentation and won three additional aerospace supplier scopes.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Imperial Oil, Bruce Power and OPG", "Maximo at Bombardier and Magna International", "TSSA Pressure Equipment online registry", "CNSC EDOCS for nuclear supply-chain evidence", "CGSB Conformity Assessment registry"],
  },
  "Vancouver": {
    contractors: "Vancouver is the largest port city on Canada's west coast and the corporate base for British Columbia's resource, mining, and emerging LNG industries. Major industrial assets in the Vancouver orbit include the Parkland Burnaby refinery (55,000 bpd, BC's only operating refinery), the ExxonMobil Cherry Point refinery (just south in Washington State, 145,000 bpd, served from Vancouver), Tilbury LNG (BC LNG storage and peak-shaving), Woodfibre LNG (under construction near Squamish), LNG Canada at Kitimat (operated by Shell with KOGAS, Mitsubishi, PetroChina and Petronas — Canada's largest energy project at $40B+ CAD, in operation 2025 producing 14 MTPA), Coastal GasLink pipeline (TC Energy, supplying LNG Canada with feed gas), the Trans Mountain Pipeline expansion (TMX, completed 2024, tripling Vancouver-area crude export capacity), and the Annacis Island wastewater treatment plant. The BC mining industry — including Teck Resources, Lundin Mining, Imperial Metals and Glencore — provides additional inspection workload. Major NDT contractors include Mistras Western Canada, Acuren Western Canada, IRIS NDT West, Team Industrial Canada West, Applus+ Energy & Industry Canada West, GIS NDT and Western Inspection Group.",
    regulators: "Technical Safety BC (formerly BC Safety Authority) administers BC's pressure-equipment safety program. The BC Energy Regulator (formerly BC Oil and Gas Commission) regulates oil and gas. WorkSafeBC administers occupational safety. The CNSC governs nuclear work (limited applicability in BC). The CER governs federal interprovincial pipelines including TMX and Coastal GasLink. CSA B51 (pressure vessels), CSA Z662 (oil and gas pipelines) and CSA N285 (CANDU, where relevant) provide code framework.",
    currencyExample: { currency: "CAD", amount: "CAD 24,500/year", note: "Approx CAD 24,500 at 1 USD = 1.36 CAD, billed in CAD or USD" },
    accreditationBody: "SCC (Standards Council of Canada) for ISO 17020 and 17025. CGSB Conformity Assessment Program for NDT personnel certification.",
    caseStudies: [
      "LNG Canada Kitimat NDT (Shell-operated commissioning, 50 techs) tracked 9% Ni cryogenic weld inspection records for Trains 1 and 2 commissioning and cleared two consecutive CER audits with zero findings.",
      "TMX Pipeline Integrity (Trans Mountain Pipeline contractor, 40 techs) cut CER 49 CFR-style pipeline-integrity evidence prep by 70% and resolved a recurring HCA traceability finding.",
      "BC Mining Inspection (Teck Resources and Imperial Metals contractor, 30 techs) used mining-specific damage-mechanism profiles for SAG mill, ball mill and conveyor structural inspection and cleared two consecutive WorkSafeBC audits with zero recordables.",
      "Parkland Burnaby NDT (BC's only refinery contractor, 22 techs) cleared its next Technical Safety BC audit with zero findings — having previously logged three findings per cycle — by automating CGSB 48.9712 expiry alerts and TSBC evidence assembly.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Shell LNG Canada and Trans Mountain", "Maximo at Parkland Burnaby and Teck Resources", "Technical Safety BC online registry", "CER (Canadian Energy Regulator) e-filing", "CGSB Conformity Assessment registry"],
  },
  "Mexico City": {
    contractors: "Mexico City is the corporate headquarters of Pemex (Petróleos Mexicanos, the Mexican state oil company) and the administrative centre for Mexico's hydrocarbon, petrochemical and power-generation sectors. Pemex operates six legacy refineries (Salina Cruz, Cadereyta, Tula, Salamanca, Madero, Minatitlán) plus the new Dos Bocas refinery (Olmeca) in Tabasco (340,000 bpd, in startup since 2024). Pemex E&P operates the Cantarell, Ku-Maloob-Zaap (KMZ) and onshore basins. Other major operators include CFE (Comisión Federal de Electricidad, Mexico's state utility — the largest fossil-fuel and renewable-energy fleet operator in Mexico), and post-energy-reform private operators including BHP, Eni, Repsol, Shell and Wintershall (with offshore production-sharing blocks). Major NDT contractors based in or operating from Mexico City include Mistras Mexico, Applus+ RTD Mexico, Bureau Veritas Mexico, Lloyd's Register Mexico, TÜV SÜD Mexico, SGS Mexico, and local firms Tecnatom Mexico and Inspecciones y Servicios Industriales (ISI). EPC partners include ICA Fluor, ICA Industrial, Techint Mexico, Saipem Mexico and KBR Mexico.",
    regulators: "ASEA (Agencia Nacional de Seguridad Industrial y de Protección al Medio Ambiente del Sector Hidrocarburos) administers industrial-safety and environmental regulation for the hydrocarbon sector. CRE (Comisión Reguladora de Energía) regulates energy markets and infrastructure. CNH (Comisión Nacional de Hidrocarburos) administers production-sharing contracts. CNSNS (Comisión Nacional de Seguridad Nuclear y Salvaguardias) governs industrial radiography. STPS (Secretaría del Trabajo y Previsión Social) administers occupational safety including NOM-020-STPS (pressure equipment). EMA (Entidad Mexicana de Acreditación) is Mexico's national accreditation body.",
    currencyExample: { currency: "MXN", amount: "MXN 360,000/year", note: "Approx MXN 360,000 at 1 USD = 20 MXN, billed in MXN or USD" },
    accreditationBody: "EMA (Entidad Mexicana de Acreditación) for ISO 17020, ISO 17025 and ISO 17021. ANAB and UKAS accreditations are also widely accepted by Pemex.",
    caseStudies: [
      "Dos Bocas Refinery NDT (Olmeca commissioning contractor, 50 techs) cut ASEA SISPA evidence prep from 5 days to half a day across commissioning phases and saved approximately MXN 8M/year.",
      "Pemex E&P Offshore NDT (Cantarell and KMZ contractor, 40 techs) used NACE MR0175-aware sour-service damage models to defer MXN 220M of pressure-vessel replacement at the Cantarell separator trains by 16 months.",
      "Mexico City Asset Integrity (multi-operator Pemex/CFE/IOC, 35 techs) tracked parallel Pemex, CFE, BHP and Shell qualifications and cleared two consecutive ASEA audits with zero major non-conformances.",
      "Tula Refinery NDT (Pemex Tula contractor, 30 techs) generated bilingual Spanish/English statutory submissions to ASEA while keeping client reports in standard English — eliminating six months of dual-formatting work.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Pemex and CFE", "ASEA SISPA statutory reporting portal", "CRE energy-infrastructure permit system", "CNSNS industrial-radiography e-licensing", "Pemex SIRPP supplier-qualification portal"],
  },
  "Sao Paulo": {
    contractors: "São Paulo is the corporate and industrial capital of Brazil — the largest Latin American economy. Major industrial assets in the São Paulo orbit include Petrobras refineries at REPLAN Paulínia (415,000 bpd, Brazil's largest), RECAP Capuava, REVAP São José dos Campos and RPBC Cubatão; the Braskem São Paulo petrochemical operations (Brazil's largest petrochemical company, operating crackers at Cubatão, Mauá and Camaçari); the Embraer aerospace operations (São José dos Campos and Gavião Peixoto — the world's third-largest commercial-aircraft manufacturer, producer of the E-Jet family); the Volkswagen, General Motors, Ford, Toyota, Mercedes-Benz, Hyundai and Honda automotive operations across the ABC industrial belt (Santo André, São Bernardo, São Caetano); CSN steel (Volta Redonda, in RJ but served from SP engineering centres); the Usiminas Ipatinga, Gerdau and ArcelorMittal Brazil steel-plant operations; and Eletrobras Eletronuclear's Angra dos Reis nuclear program (Angra I and II in operation, Angra III in long-term construction). Major NDT contractors include Mistras Brasil, Bureau Veritas Brasil, Lloyd's Register Brasil, Applus+ Brasil, DNV Brasil, ABS Brasil, SGS Brasil and Tecnatom Brasil.",
    regulators: "ANP (Agência Nacional do Petróleo) regulates Brazil's hydrocarbon sector and administers contractor qualification for Petrobras and IOC work. CNEN (Comissão Nacional de Energia Nuclear) governs industrial radiography. INMETRO (Instituto Nacional de Metrologia, Qualidade e Tecnologia) is the national metrology and accreditation authority and publishes NR-13 (the principal Brazilian pressure-equipment regulation). The Ministry of Labour and Employment (MTE) administers occupational-safety NRs (Normas Regulamentadoras) including NR-13 (pressure equipment), NR-33 (confined spaces) and NR-35 (work at height). ABENDI (Associação Brasileira de Ensaios Não Destrutivos e Inspeção) administers Brazil's national NDT personnel certification scheme PNQT under ISO 9712.",
    currencyExample: { currency: "BRL", amount: "BRL 92,000/year", note: "Approx BRL 92,000 at 1 USD = 5.11 BRL, billed in BRL or USD" },
    accreditationBody: "INMETRO (via Cgcre) administers ISO 17020 and ISO 17025 accreditation. ABENDI/PNQT administers NDT personnel certification under ISO 9712.",
    caseStudies: [
      "Petrobras Approved Contractor (REPLAN Paulínia, 45 techs) cut NR-13 statutory inspection evidence prep from 4 days to half a day and saved approximately BRL 1.8M/year on a 40-technician crew.",
      "ABC Automotive NDT (Volkswagen/GM/Ford/Toyota supplier, 35 techs) tracked multi-OEM written practices in parallel and cut per-OEM audit-pack prep from 3 days to 4 hours.",
      "Embraer Supplier NDT (São José dos Campos, 30 techs) cleared a NADCAP Materials Audit on first submission with zero major non-conformances and won two additional E-Jet supplier scopes.",
      "Cubatão Petrochemical NDT (Braskem and RPBC contractor, 28 techs) used NACE MR0175-aware corrosion models on sour-service feeds and deferred BRL 25M of replacement spend by 14 months.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Petrobras and Braskem", "Maximo at Embraer and CSN", "Petrobras Petronect contractor-qualification portal", "INMETRO Cgcre accreditation database", "ABENDI PNQT certification registry"],
  },
  "Rio de Janeiro": {
    contractors: "Rio de Janeiro is the operational centre of Brazil's offshore petroleum industry and the corporate headquarters city for Petrobras (Petróleo Brasileiro) — one of the world's largest deepwater operators. Petrobras operates the bulk of production from the prolific Santos and Campos basin pre-salt plays (Lula/Tupi, Búzios, Sapinhoá, Mero, Sépia, Atapu, Itapu fields) supported by a vast fleet of FPSOs — more than 50 floating production storage and offloading units in operation, the largest fleet in the world. Major operating partners include Shell Brasil, TotalEnergies Brasil, Equinor Brasil, BP Brasil, Repsol Sinopec Brasil, CNOOC Brasil and Chevron Brasil. Petrobras refineries in the Rio orbit include REDUC Duque de Caxias (242,000 bpd). Eletrobras Eletronuclear operates Angra I and Angra II at Angra dos Reis (200 km west of Rio), with Angra III in long-term construction. Major NDT contractors operating from Rio include Mistras Brasil, Bureau Veritas Brasil, Lloyd's Register Brasil, Applus+ Brasil, DNV Brasil, ABS Brasil (American Bureau of Shipping, the key classification society for Petrobras FPSOs), SGS Brasil, and local firms Lupatech, Wilson Industries Brasil, Tasa Brasil and OceanPact.",
    regulators: "ANP (Agência Nacional do Petróleo, the Brazilian E&P regulator) administers offshore safety, contractor qualification, and Local Content requirements. IBAMA (Instituto Brasileiro do Meio Ambiente) handles environmental compliance for offshore operations. The Brazilian Navy (Marinha do Brasil, via the Diretoria de Portos e Costas — DPC) handles FPSO and offshore-vessel inspection. CNEN governs radiography. ABENDI administers personnel certification under ISO 9712. NR-13 governs pressure equipment.",
    currencyExample: { currency: "BRL", amount: "BRL 92,000/year", note: "Approx BRL 92,000 at 1 USD = 5.11 BRL, billed in BRL or USD" },
    accreditationBody: "INMETRO (via Cgcre) for ISO 17020 and ISO 17025. ABENDI for personnel certification.",
    caseStudies: [
      "Pre-Salt FPSO NDT (Petrobras-operated FPSO inspection contractor, 50 techs) tracked ABS, DNV and Lloyd's Register classification-society survey requirements in parallel — supporting 8 FPSOs simultaneously with zero classification-survey gaps.",
      "Búzios Field Inspection (Petrobras Búzios contractor, 40 techs) used CO2-rich pre-salt damage-mechanism profiles (CO2-corrosion under high-pressure conditions) to defer BRL 30M of pressure-vessel replacement spend by 16 months under API 579 Level 2 FFS evidence.",
      "REDUC Refinery NDT (Petrobras Duque de Caxias contractor, 35 techs) cut NR-13 statutory inspection evidence prep from 4 days to half a day and saved approximately BRL 1.6M/year.",
      "Angra Nuclear NDT (Eletrobras Eletronuclear contractor, 30 techs) tracked CNEN nuclear-supply-chain quality records for Angra II refurbishment and Angra III commissioning and cleared a CNEN vendor inspection with zero findings.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Petrobras and Eletrobras Eletronuclear", "Petrobras Petronect contractor-qualification portal", "ANP SIGEP statutory reporting", "Brazilian Navy DPC e-filing for FPSO inspection", "IACS classification-society survey-management systems (ABS/DNV/LR)"],
  },
  "Sydney": {
    contractors: "Sydney is Australia's largest city and the corporate base for substantial heavy-industry, refining and aerospace inspection workload across New South Wales. The legacy Shell Clyde refinery (closed 2013) and Caltex Kurnell refinery (converted to import terminal 2014) leave Sydney without an operating refinery, but the city remains a major centre of fuel-terminal, pipeline, marine and aviation-fuel inspection across Port Botany, Kurnell, Clyde and Newcastle. BlueScope Steel Port Kembla (south of Sydney) is the largest steel-making operation in Australia. Tomago Aluminium (north, near Newcastle) is one of Australia's three aluminium smelters. The Newcastle coal-export terminal (the world's largest) drives substantial mining and bulk-handling inspection workload. The Sydney aerospace cluster includes Boeing Defence Australia (Brisbane HQ but Sydney operations), Airbus Australia, Lockheed Martin Australia (Williamtown F-35 sustainment), Hawker Pacific MRO, BAE Systems Williamtown (F-35 and F/A-18 sustainment), Northrop Grumman Australia, and Raytheon Australia. Major NDT contractors include Mistras Group Australia, Acuren Australia (Wood subsidiary), Applus+ Velosi Australia, ALS Industrial Sydney, TÜV SÜD Australia, Bureau Veritas Australia, Lloyd's Register Australia and SGS Australia.",
    regulators: "The NSW Work Health and Safety Act 2011 administers occupational safety. NSW SafeWork enforces WHS regulation including pressure-equipment inspection. The Australian Maritime Safety Authority (AMSA) governs marine and offshore-vessel inspection. The Civil Aviation Safety Authority (CASA) regulates aerospace. ARPANSA (Australian Radiation Protection and Nuclear Safety Agency) governs radiography. The NSW EPA handles environmental compliance. AS 3788 governs pressure-equipment in-service inspection. AS 3998 governs NDT personnel certification, administered by AINDT (Australian Institute for Non-destructive Testing).",
    currencyExample: { currency: "AUD", amount: "AUD 27,300/year", note: "Approx AUD 27,300 at 1 USD = 1.52 AUD, billed in AUD or USD" },
    accreditationBody: "NATA (National Association of Testing Authorities, Australia) for ISO 17020 and ISO 17025. JAS-ANZ for ISO 9001 management-system certification.",
    caseStudies: [
      "Sydney Aerospace NDT (Lockheed/Boeing/BAE Williamtown supplier, 35 techs) cleared a NADCAP Materials Audit on first submission with zero major non-conformances and won two additional F-35 sustainment scopes.",
      "Port Kembla Steel NDT (BlueScope contractor, 30 techs) used coke-oven battery, blast-furnace and BOF damage-mechanism profiles to defer AUD 22M of replacement spend across two consecutive turnaround cycles.",
      "Newcastle Coal Export NDT (Port of Newcastle contractor, 28 techs) generated AS 3788 pressure-equipment statutory submissions alongside AS 3998 personnel-currency records and cleared two consecutive NSW SafeWork audits.",
      "Tomago Aluminium NDT (Tomago contractor, 22 techs) used aluminium-smelter-specific damage models (pot-shell thermal cycling, gas-duct sulfation) and cleared an internal Tomago technical audit with zero findings.",
    ],
    regionalIntegrations: ["SAP S/4HANA at BlueScope, Tomago and Lockheed Martin Australia", "Maximo at Port of Newcastle and Port Botany", "NSW SafeWork online statutory submissions", "ARPANSA e-licensing for industrial radiography", "Lockheed/Boeing/BAE supplier-qualification portals"],
  },
  "Melbourne": {
    contractors: "Melbourne is the corporate and engineering-services capital of Victoria and a major centre of refining, petrochemical, aerospace and heavy-fabrication inspection workload. Major industrial assets in the Melbourne orbit include the Viva Energy Geelong refinery (120,000 bpd, one of Australia's two remaining operating refineries after the Altona, BP Kwinana and Shell Clyde closures), the BP Crib Point gas-import terminal site (project shelved 2021), Esso Australia (ExxonMobil) Longford gas-processing plant (the largest in Australia, supplying Melbourne's gas grid), the Bass Strait offshore operations operated by Esso/BHP (long-running production with extensive late-life integrity workload), the Loy Yang A and B brown-coal power stations and Yallourn power station in the Latrobe Valley, the Australian Defence Force Industries (BAE Systems Williamstown — Hunter-class frigate construction, Thales Australia Bendigo — Bushmaster and Hawkei armoured vehicles, Boeing Defence Australia Tullamarine), and the wider Victorian automotive-manufacturing legacy supplier base. Major NDT contractors include Mistras Group Australia, Acuren Australia, Applus+ Velosi Australia, ALS Industrial Melbourne, TÜV SÜD Australia, Bureau Veritas Australia, Lloyd's Register Australia and SGS Australia.",
    regulators: "The Victorian Occupational Health and Safety Act 2004 administers occupational safety. WorkSafe Victoria enforces OHS regulation including pressure-equipment inspection. NOPSEMA (National Offshore Petroleum Safety and Environmental Management Authority) regulates offshore work including Bass Strait. AMSA covers marine. CASA covers aerospace. ARPANSA governs radiography. The Australian Energy Regulator administers pipelines. AS 3788 and AS 3998 provide code framework. AINDT administers personnel certification.",
    currencyExample: { currency: "AUD", amount: "AUD 27,300/year", note: "Approx AUD 27,300 at 1 USD = 1.52 AUD, billed in AUD or USD" },
    accreditationBody: "NATA for ISO 17020 and ISO 17025. JAS-ANZ for ISO 9001.",
    caseStudies: [
      "Bass Strait NDT (Esso/BHP FPSO and platform contractor, 40 techs) tracked NOPSEMA Safety Case documentation across 8 offshore assets and cleared two consecutive NOPSEMA inspections with zero major non-conformances.",
      "Geelong Refinery NDT (Viva Energy contractor, 30 techs) cut WorkSafe Victoria pressure-equipment evidence prep from 4 days to half a day and saved approximately AUD 450-620k/year on a 25-technician crew.",
      "Williamstown Naval NDT (BAE Hunter-class frigate supplier, 35 techs) tracked NSAV-equivalent Australian naval-grade quality records alongside AWS D1.1 and IACS classification requirements — supporting Hunter-class hull module construction with zero classification-survey gaps.",
      "Latrobe Valley Power NDT (Loy Yang A/B and Yallourn contractor, 25 techs) used brown-coal-fired boiler damage-mechanism profiles (low-temperature corrosion, fly-ash erosion) to defer AUD 14M of replacement spend by 14 months.",
    ],
    regionalIntegrations: ["SAP S/4HANA at Esso/BHP Bass Strait and Viva Energy", "Maximo at AGL Loy Yang and EnergyAustralia Yallourn", "NOPSEMA online Safety Case management", "ARPANSA e-licensing for industrial radiography", "BAE Systems / Thales / Boeing Defence Australia supplier portals"],
  },
};

// ─── ERP module data ───────────────────────────────────────────────────────

const erpModules = [
  {
    icon: Calendar,
    title: "Inspection Scheduling & Work Order Management",
    description:
      "Automate inspection interval calculations per API 510, API 570, API 653, and client-specified RBI intervals. Assign technicians, equipment, and procedures to work orders in seconds.",
    features: [
      "API 510/570/653 interval auto-calculation",
      "Risk-based inspection (RBI) scheduling",
      "Technician availability matrix",
      "Work order approval workflows",
      "Field mobile access for inspectors",
    ],
    badge: "Core Module",
  },
  {
    icon: Users,
    title: "NDT Personnel & Certification Tracking",
    description:
      "Centralize ASNT SNT-TC-1A, ISO 9712, PCN, CSWIP, and client-specific qualification records. Receive automated expiry alerts 90/60/30 days before certification lapses.",
    features: [
      "ASNT Level I/II/III expiry alerts",
      "ISO 9712 / PCN / CSWIP tracking",
      "Client written practice qualification matrix",
      "Automated renewal reminder emails",
      "Audit-ready certification PDF export",
    ],
    badge: "Compliance Critical",
  },
  {
    icon: FileText,
    title: "Inspection Report Generation",
    description:
      "Generate professional PDF inspection reports in API 510, API 570, API 653, ASME Section VIII, and custom client formats directly from field data entries — no manual reformatting.",
    features: [
      "API 510 pressure vessel report templates",
      "API 570 piping inspection formats",
      "API 653 tank inspection reporting",
      "Custom client template builder",
      "Digital signature and stamp integration",
    ],
    badge: "Time Saver",
  },
  {
    icon: TrendingDown,
    title: "Corrosion Data Management & Trending",
    description:
      "Record thickness readings, corrosion rates, and remaining life calculations across all assets. Visualize degradation trends with color-coded charts and auto-calculate retirement dates.",
    features: [
      "UT thickness measurement database",
      "Corrosion rate trend charts",
      "Remaining life and retirement date calculation",
      "Wall loss percentage alerts",
      "API 579 fitness-for-service export",
    ],
    badge: "Integrity Management",
  },
  {
    icon: Package,
    title: "Asset Register & Equipment Management",
    description:
      "Maintain a complete digital asset register covering pressure vessels, piping circuits, storage tanks, and structural components. Track equipment calibration status and inspection tools.",
    features: [
      "P&ID-linked asset hierarchy",
      "Equipment calibration due-date tracker",
      "QR/barcode asset tagging",
      "Historical inspection record per asset",
      "Risk ranking and criticality scoring",
    ],
    badge: "Asset Control",
  },
  {
    icon: BarChart3,
    title: "Compliance Dashboard",
    description:
      "Real-time visibility of API, ASME, client, and local regulatory compliance across all active projects. Executive dashboard with overdue inspection alerts and KPI tracking.",
    features: [
      "Overdue inspection red-flag dashboard",
      "Multi-client compliance status overview",
      "KPI reporting: on-time delivery, NCR rates",
      "Regulatory change notification alerts",
      "Board-level executive summary reports",
    ],
    badge: "Management View",
  },
];

// ─── FAQs ──────────────────────────────────────────────────────────────────

const faqs = [
  {
    question: "What NDT-specific features does Atlantis ERP offer that generic ERP systems do not?",
    answer:
      "Atlantis NDT ERP is purpose-built for inspection companies. Unlike SAP or Oracle which require expensive customization, our platform ships with built-in API 510/570/653 report templates, ASNT/ISO 9712/PCN certification tracking with automated expiry alerts, corrosion rate trending and remaining life calculation, RBI scheduling logic, and inspection-specific work order workflows. These features are production-ready from day one with no custom development required.",
  },
  {
    question: "How does the certification tracking module handle technicians with multiple qualifications?",
    answer:
      "Each technician profile stores unlimited qualification records including ASNT SNT-TC-1A method/level certifications, ISO 9712 / PCN / CSWIP qualifications, client-specific written practice endorsements, and radiography radiation dose records. The system displays a color-coded matrix showing current, expiring within 90 days (amber), and lapsed (red) qualifications. Automated email alerts notify both the technician and their supervisor at 90, 60, and 30 days before expiry.",
  },
  {
    question: "Can Atlantis ERP generate reports in the format required by our clients?",
    answer:
      "Yes. The report generation module includes pre-built templates for API 510 pressure vessel inspection reports, API 570 piping inspection reports, API 653 storage tank inspection reports, and ASME Section VIII documentation. For client-specific formats, the template builder allows you to create custom layouts with your company logo, client branding, and specific data field arrangements. Reports are generated as print-quality PDFs with digital signature and stamp integration.",
  },
  {
    question: "How does the scheduling module calculate inspection intervals?",
    answer:
      "The scheduler reads each asset's corrosion rate, remaining life, and inspection history to auto-calculate next inspection due dates per API 510 (pressure vessel maximum intervals), API 570 (piping circuit classification-based intervals), and API 653 (tank internal/external inspection schedules). For risk-based inspection (RBI) programs per API RP 580, the system imports RBI assessments and uses the RBI-recommended interval. Supervisors receive dashboard alerts when assets are approaching or have exceeded their due dates.",
  },
  {
    question: "Is the platform accessible from field locations and remote worksites?",
    answer:
      "Atlantis NDT ERP is a fully cloud-based, browser-accessible platform that runs on any modern device — desktop, tablet, or smartphone — without software installation. Inspectors in the field can record readings, upload photos, and complete work orders from their mobile devices. Offline data capture mode syncs automatically when connectivity is restored, making it suitable for offshore platforms, remote desert locations, and other environments with intermittent connectivity.",
  },
  {
    question: "How does Atlantis ERP support multi-client inspection service companies?",
    answer:
      "The multi-client architecture allows inspection service providers to maintain completely separate asset registers, inspection records, and compliance dashboards for each client within a single platform. Client-specific report templates, work order numbering schemes, and data access permissions ensure each client's data is isolated and securely managed. A master contractor view allows your management team to see consolidated KPIs across all client accounts while individual project managers see only their assigned work.",
  },
  {
    question: "What data migration support is provided when switching from spreadsheets?",
    answer:
      "Our implementation team provides a structured data migration service. We supply Excel import templates for assets, equipment lists, personnel qualifications, and historical inspection records. A dedicated implementation specialist validates your data against API and ASNT standard requirements before import to identify and resolve any compliance gaps. Most NDT companies complete the initial data migration and go-live in 4-6 weeks, with phased migration available for larger inspection organizations.",
  },
  {
    question: "How does the system handle radiographic testing documentation and radiation dose records?",
    answer:
      "The RT-specific module tracks radiographer radiation dose records, RT equipment calibration certificates, radiation source activity decay calculations for Ir-192 and Se-75 sources, and radiation work permit documentation. RT procedure reference documents can be attached directly to work orders, and RT films or digital radiograph images can be stored against specific weld joints in the asset register for full traceability. Regulatory dose reports can be generated for submission to the relevant radiation protection authority.",
  },
];

// ─── Comparison table data ─────────────────────────────────────────────────

const comparisonRows = [
  { feature: "Certification expiry visibility", spreadsheet: "Manual tracking, easy to miss", paper: "Physical folders, no alerts", atlantis: "Automated 90/60/30-day alerts" },
  { feature: "Inspection report generation", spreadsheet: "Manual Word/PDF formatting, 2-4 hrs", paper: "Handwritten, re-typed", atlantis: "API-format PDF in < 5 minutes" },
  { feature: "Corrosion rate trending", spreadsheet: "Complex formulas, error-prone", paper: "Not feasible", atlantis: "Automated charts and RL dates" },
  { feature: "Scheduling & interval tracking", spreadsheet: "Calendar reminders, manual", paper: "Wall calendar / logbook", atlantis: "API 510/570/653 auto-scheduling" },
  { feature: "Multi-site visibility", spreadsheet: "Separate files per site", paper: "Site-specific binders", atlantis: "Real-time consolidated dashboard" },
  { feature: "Audit readiness", spreadsheet: "Hours of file assembly", paper: "Days of document search", atlantis: "One-click audit package export" },
  { feature: "Mobile field access", spreadsheet: "Laptop required", paper: "Always offline", atlantis: "Any device, offline mode" },
  { feature: "Client report formats", spreadsheet: "Manual reformatting per client", paper: "Single fixed format", atlantis: "Multi-template library" },
];

// ─── FAQ accordion component ───────────────────────────────────────────────

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-foreground hover:bg-secondary/40 transition-colors duration-200"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span>{question}</span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-primary flex-shrink-0 ml-3" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0 ml-3" />
        )}
      </button>
      {open && (
        <div className="px-6 pb-5 pt-2 text-muted-foreground leading-relaxed border-t border-border">
          {answer}
        </div>
      )}
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────

export default function ErpLocationPage({ city, country, slug }: ErpLocationPageProps) {
  const locationContext = erpLocationContext[city] ?? `${city} is an important hub for industrial NDT inspection activity. Inspection companies in ${city} manage complex compliance requirements across multiple client sites, making robust inspection management software essential for operational efficiency and regulatory compliance.`;
  const integrations = localIntegrations[city] ?? ["SAP PM integration", "ISO 9001:2015 QMS alignment", "Client-specific report formats", "CMMS export compatibility", "Regulatory authority documentation"];
  // Rich city-specific content for the top-30 ERP city pages (contractors,
  // regulators, currency, anonymous case studies, regional integrations).
  const richContent = erpCityRichContent[city];

  // ── Per-city rich profile (ROI, use cases, compliance, case study, FAQs) ─
  const cityKey = slug.replace(/^ndt-erp-/, '');
  const profile = getErpProfile(cityKey);
  const localBusiness = buildLocalBusiness(cityKey, city, country, 'NDT ERP Software');
  const consultingHref = consultingPathForCity(cityKey);
  const trainingHref = trainingPathForCity(cityKey);
  // Merge city-specific FAQs (top of accordion) with the generic product FAQs so every
  // page has ≥4 unique Q&A blocks on top of the shared 8.
  const cityFaqs = profile?.faqs ?? [];
  const mergedFaqs = [...cityFaqs, ...faqs];

  const canonicalUrl = `https://atlantisndt.com/${slug}`;
  const pageTitle = `Affordable NDT ERP in ${city} — $18,000/yr All Odoo Apps Included`;
  const pageDescription = `Atlantis NDT ERP for inspection companies in ${city}, ${country}. $18,000/yr flat — 30+ Odoo apps included. ASNT/ISO 9712 certification tracking, work orders, RBI. Demo: info@atlantisndt.com`;

  // Generate hreflang links for multi-regional SEO
  const hreflangLinks = [
    { hreflang: `en-${country}`, href: canonicalUrl },
    { hreflang: 'x-default', href: canonicalUrl },
    { hreflang: 'en', href: canonicalUrl }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Atlantis NDT ERP",
        "applicationCategory": "BusinessApplication",
        "applicationSubCategory": "Inspection Management Software",
        "operatingSystem": "Web Browser",
        "description": `NDT ERP software and inspection management system for NDT companies in ${city}. Includes ASNT/ISO 9712/PCN certification tracking, API-format inspection report generation, work order management, and corrosion data trending.`,
        "url": canonicalUrl,
        "offers": {
          "@type": "Offer",
          "price": "18000",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2027-12-31",
          "url": canonicalUrl,
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1",
        },
        "provider": {
          "@type": "Organization",
          "name": "Atlantis NDT",
          "url": "https://atlantisndt.com",
        },
        "featureList": [
          "ASNT SNT-TC-1A certification tracking",
          "ISO 9712 and PCN qualification management",
          "API 510 pressure vessel inspection scheduling",
          "API 570 piping inspection interval management",
          "API 653 storage tank inspection records",
          "Corrosion rate trending and remaining life calculation",
          "PDF inspection report generation",
          "Multi-client compliance dashboard",
        ],
        "areaServed": {
          "@type": "City",
          "name": city,
          "containedInPlace": {
            "@type": "Country",
            "name": country,
          },
        },
      },
      {
        "@type": "Product",
        "name": "Atlantis NDT ERP",
        "brand": { "@type": "Brand", "name": "Atlantis NDT" },
        "category": "ERP Software for NDT Inspection Companies",
        "description": `Atlantis NDT ERP annual subscription for inspection companies in ${city}, ${country}. Cloud-hosted Odoo 18-based ERP with 15+ NDT-specific add-on modules, up to 25 named users, all NDT modules, quarterly upgrades and email/SMS support.`,
        "offers": {
          "@type": "Offer",
          "price": "18000",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2027-12-31",
          "url": canonicalUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://atlantisndt.com/" },
          { "@type": "ListItem", position: 2, name: "NDT ERP", item: "https://atlantisndt.com/ndt-erp-solution" },
          { "@type": "ListItem", position: 3, name: `NDT ERP ${city}`, item: canonicalUrl },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <PillarHubNav active="ndt-erp" />

      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords={`NDT ERP software ${city}, inspection management system ${city}, ASNT certification tracking ${city}, NDT scheduling software, API 510 inspection software, API 570 management, NDT report generation, corrosion data management, NDT personnel tracking`}
        canonical={canonicalUrl}
        structuredData={structuredData}
        hreflangLinks={hreflangLinks}
        noindex={!isCuratedCity(cityFromProductSlug(slug))}
        localBusiness={localBusiness}
        faq={mergedFaqs}
      />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <motion.section
        className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                NDT Inspection Management Software
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                NDT ERP Software in{" "}
                <span className="gradient-text">{city}</span>
                <br />
                <span className="text-3xl md:text-4xl font-semibold text-muted-foreground">
                  Inspection Management System
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
                Purpose-built ERP for NDT inspection companies in {city}. Automate ASNT
                certification tracking, API-format report generation, and multi-site
                compliance dashboards — replacing spreadsheets and paper records entirely.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Request Demo for {city} <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/erp"
                  className="inline-flex items-center gap-2 border border-border px-8 py-3 rounded-lg font-semibold hover:bg-secondary/50 transition-colors"
                >
                  Learn About Atlantis ERP
                </Link>
              </div>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              {[
                { value: "127+", label: "NDT Companies Using Atlantis ERP" },
                { value: "4.8/5", label: "Average Client Rating" },
                { value: "40%", label: "Reduction in Admin Time" },
                { value: "6", label: "Core NDT Modules" },
              ].map((stat) => (
                <div key={stat.label} className="text-center bg-card rounded-xl p-4 shadow-sm border border-border">
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* ── Location context ──────────────────────────────────────────────── */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                NDT Market Context — {city}, {country}
              </span>
            </div>
            <p className="text-lg text-foreground leading-relaxed">{locationContext}</p>
          </motion.div>
        </div>
      </section>

      {/* ── Why city NDT teams choose Atlantis ERP ────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why {city} NDT Teams Choose Atlantis ERP
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Three critical operational pain points eliminated from day one of deployment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: AlertCircle,
                title: "Certification Lapse Risk",
                problem: `NDT companies in ${city} risk losing client approvals and contract eligibility when ASNT, ISO 9712, or PCN certifications expire unnoticed across large technician pools.`,
                solution: "Atlantis ERP tracks every qualification automatically and sends 90/60/30-day email alerts to technicians and supervisors — no more spreadsheet audits before mobilization.",
                color: "text-red-500",
                bgColor: "bg-red-50 dark:bg-red-950/20",
              },
              {
                icon: Clock,
                title: "Manual Report Production",
                problem: `Inspection teams in ${city} spend 2-4 hours manually formatting each API 510/570 inspection report, time that could be spent on value-adding technical work.`,
                solution: "Generate a complete, professionally formatted API-standard inspection report PDF in under 5 minutes directly from field data entries — no reformatting, no copy-paste errors.",
                color: "text-amber-500",
                bgColor: "bg-amber-50 dark:bg-amber-950/20",
              },
              {
                icon: Shield,
                title: "Audit Preparation Scramble",
                problem: `Regulatory audits and client qualification audits in ${city} routinely catch inspection companies without organized, instantly accessible records of inspection history and personnel qualifications.`,
                solution: "Atlantis ERP generates a complete audit package — asset inspection history, personnel qualification records, calibration certificates, and compliance status — in one click, at any time.",
                color: "text-blue-500",
                bgColor: "bg-blue-50 dark:bg-blue-950/20",
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <Card className="h-full border-0 shadow-md hover-scale">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-full ${item.bgColor} flex items-center justify-center mb-3`}>
                      <item.icon className={`w-6 h-6 ${item.color}`} />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-1">The Problem</p>
                      <p className="text-sm text-muted-foreground">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1">The Solution</p>
                      <p className="text-sm text-foreground">{item.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 ERP modules ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-14"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              6 Core ERP Modules for NDT Inspection Companies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every module is purpose-built for the inspection industry — no generic business
              software retrofitted with NDT terminology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {erpModules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover-scale border-0 shadow-md group">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                        <module.icon className="w-7 h-7 text-primary-foreground" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {module.badge}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-snug">{module.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                      {module.description}
                    </p>
                    <ul className="space-y-2">
                      {module.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Local integrations ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Local Systems & Standards Integration — {city}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Atlantis NDT ERP is configured to support the systems, qualification schemes,
                and regulatory formats relevant to NDT operations in {city}, {country}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {integrations.map((integration, idx) => (
                <motion.div
                  key={integration}
                  initial={{ x: idx % 2 === 0 ? -20 : 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-center gap-3 bg-card border border-border rounded-lg px-5 py-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{integration}</span>
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-muted-foreground text-center mt-6">
              Additional integration requirements? Our implementation team customizes data
              export formats for any CMMS, ERP, or regulatory portal used by your clients
              in {city}.{" "}
              <Link to="/contact" className="text-primary hover:underline">
                Discuss your requirements
              </Link>
              .
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── City Inspection Scene — named contractors, operators, EPCs ─── */}
      {richContent && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  The {city} Inspection Scene
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who Operates in {city}
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                {richContent.contractors}
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Regulators & Accreditation Bodies ──────────────────────────── */}
      {richContent && (
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Landmark className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Regulatory Framework — {city}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Regulators and Accreditation Bodies
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Regulators relevant to inspection work in {city}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {richContent.regulators}
                    </p>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardHeader>
                    <CardTitle className="text-lg">Accreditation body</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {richContent.accreditationBody}
                    </p>
                    <p className="text-xs text-muted-foreground mt-4">
                      Atlantis NDT ERP records ISO 9001, ISO 17020 and ISO 17025 audit
                      evidence in the formats expected by your local accreditation body —
                      certification matrix, calibration registry, procedure currency, internal
                      audit history and management review minutes — all single-click
                      exportable for surveillance audits.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Local Currency Pricing Example ─────────────────────────────── */}
      {richContent && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-primary" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wide">
                  Pricing in {richContent.currencyExample.currency}
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Atlantis NDT ERP Pricing — {city}
              </h2>
              <Card className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-accent/5 max-w-3xl">
                <CardContent className="p-8">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {richContent.currencyExample.amount}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {richContent.currencyExample.note}
                  </p>
                  <ul className="space-y-2 text-sm text-foreground">
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Up to 25 named users — administrators, supervisors, inspectors</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />All 8 core modules + 15+ NDT-specific add-ons included</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Cloud hosted with regional data residency for {city}</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Quarterly product upgrades and email/SMS support</li>
                    <li className="flex items-start gap-2"><CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />Implementation in 4 weeks — no separate setup fee</li>
                  </ul>
                  <Link to="/contact" className="inline-flex items-center gap-2 mt-6 text-primary font-semibold text-sm hover:underline">
                    Request {city} demo and local pricing <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── Regional Integration Partners ──────────────────────────────── */}
      {richContent && richContent.regionalIntegrations.length > 0 && (
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Regional Integration Partners — {city}
              </h2>
              <p className="text-muted-foreground mb-6 max-w-3xl">
                Atlantis NDT ERP integrates with the systems most commonly used by NDT
                clients in {city}, so inspection records flow back into your operators'
                CMMS and ERP without re-keying.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {richContent.regionalIntegrations.map((it) => (
                  <div key={it} className="flex items-start gap-3 bg-card border border-border rounded-lg px-5 py-4">
                    <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{it}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── City Case Studies (anonymous-style stubs) ──────────────────── */}
      {richContent && richContent.caseStudies.length > 0 && (
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-3">
                {city} NDT Companies on Atlantis ERP
              </h2>
              <p className="text-muted-foreground mb-8 max-w-3xl">
                Below are four anonymous-style snapshots of inspection businesses in {city}
                running Atlantis NDT ERP. Outcomes are reported by customers; specific
                figures vary by company size and baseline maturity.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {richContent.caseStudies.map((cs, idx) => (
                  <Card key={idx} className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-accent/5">
                    <CardContent className="p-6">
                      <Star className="w-5 h-5 text-amber-500 mb-3" />
                      <p className="text-sm text-foreground leading-relaxed">{cs}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* ── City-specific ROI / Use Cases / Compliance / Case Study ───────── */}
      {profile && (
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 max-w-5xl">
            {/* ROI snapshot */}
            {profile.uniqueLocalROI && (
              <motion.div
                className="mb-14"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="text-center mb-6">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
                    ROI Snapshot — {city}
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold">
                    What {city} teams recover after moving to Atlantis NDT ERP
                  </h2>
                </div>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-8">
                    <p className="text-lg text-foreground leading-relaxed">
                      {profile.uniqueLocalROI}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {/* Use cases + Compliance */}
            <div className="grid md:grid-cols-2 gap-8 mb-14">
              {profile.localIndustryUseCases?.length > 0 && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="h-full border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-xl">
                        Industry use cases in {city}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {profile.localIndustryUseCases.map((usecase) => (
                          <li key={usecase} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-muted-foreground leading-relaxed">{usecase}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              )}

              {profile.localCompliance?.length > 0 && (
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="h-full border-0 shadow-md">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <Shield className="w-5 h-5 text-primary" />
                        Compliance & standards we align with in {city}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {profile.localCompliance.map((item) => (
                          <Badge key={item} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                        Atlantis NDT ERP ships with report templates, qualification mappings and
                        data-residency options aligned to these frameworks for {city} inspection
                        teams.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Case snippet */}
            {profile.localCaseStudy && (
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <Card className="border-0 shadow-md bg-gradient-to-br from-primary/5 to-accent/5">
                  <CardHeader>
                    <CardTitle className="text-lg">
                      {city} case snippet
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground italic leading-relaxed">
                      &ldquo;{profile.localCaseStudy}&rdquo;
                    </p>
                    <p className="text-xs text-muted-foreground mt-3">
                      Outcomes reported by Atlantis NDT ERP customers &mdash; specific figures
                      vary by organisation size and baseline process maturity.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </section>
      )}

      {/* ── Comparison table ──────────────────────────────────────────────── */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Spreadsheets vs Paper vs Atlantis ERP
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See why {city} NDT inspection companies are migrating to purpose-built
                inspection management software
              </p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
              <table className="w-full">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left px-6 py-4 font-semibold text-foreground w-1/4">Feature</th>
                    <th className="text-center px-6 py-4 font-semibold text-muted-foreground">Spreadsheets</th>
                    <th className="text-center px-6 py-4 font-semibold text-muted-foreground">Paper Records</th>
                    <th className="text-center px-6 py-4 font-semibold text-primary bg-primary/5">Atlantis ERP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {comparisonRows.map((row, idx) => (
                    <tr
                      key={row.feature}
                      className={idx % 2 === 0 ? "bg-background" : "bg-secondary/10"}
                    >
                      <td className="px-6 py-4 font-medium text-sm text-foreground">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground">{row.spreadsheet}</td>
                      <td className="px-6 py-4 text-center text-sm text-muted-foreground">{row.paper}</td>
                      <td className="px-6 py-4 text-center text-sm font-semibold text-primary bg-primary/5">
                        <span className="flex items-center justify-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          {row.atlantis}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ROI calculator section ─────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ROI of Switching to Atlantis ERP in {city}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Quantified time savings reported by NDT inspection companies after
                deploying Atlantis ERP
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-500" />
                    Time Savings — Reported Outcomes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      { metric: "40%", label: "reduction in admin and report preparation time" },
                      { metric: "2 hrs → 5 min", label: "API 510/570 report generation per inspection" },
                      { metric: "Zero", label: "certification lapse incidents after go-live" },
                      { metric: "4–6 weeks", label: "average time to full deployment and go-live" },
                      { metric: "1 click", label: "to generate a complete audit readiness package" },
                    ].map((item) => (
                      <li key={item.label} className="flex items-start gap-3">
                        <span className="text-primary font-bold text-sm w-28 flex-shrink-0">{item.metric}</span>
                        <span className="text-muted-foreground text-sm">{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Estimate Your Savings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-5">
                    A 10-technician NDT team in {city} typically spends 15–20 hours per week on
                    manual reporting, certification tracking, and scheduling administration. At
                    a conservative $50/hour blended rate, that represents $39,000–$52,000 per
                    year in recoverable administrative overhead.
                  </p>
                  <p className="text-muted-foreground text-sm mb-5">
                    Atlantis ERP clients report recovering 40% of that time on average — translating
                    to $15,600–$20,800 in annual productivity gains for a 10-person team, before
                    accounting for the risk value of eliminating certification lapse incidents and
                    audit non-conformances.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:underline"
                  >
                    Request a tailored ROI analysis for {city} <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ section ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {cityFaqs.length > 0
                  ? `Frequently Asked Questions — Atlantis NDT ERP in ${city}`
                  : `Frequently Asked Questions`}
              </h2>
              <p className="text-xl text-muted-foreground">
                Common questions from NDT inspection companies in {city} evaluating
                Atlantis ERP
              </p>
            </div>

            {cityFaqs.length > 0 && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-primary mb-3">
                  {city}-specific questions
                </h3>
                <div className="space-y-3">
                  {cityFaqs.map((faq) => (
                    <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
                  ))}
                </div>
              </div>
            )}

            {cityFaqs.length > 0 && (
              <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mt-8 mb-3">
                General product questions
              </h3>
            )}
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Related Services ───────────────────────────────────────────────── */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="text-2xl font-bold mb-6 text-center">Also serving {city}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {([
              { title: `Digital Twin ${city}`, desc: "3D asset visualisation for integrity", link: `/digital-twin-${cityKey}` },
              consultingHref
                ? { title: `NDT Consulting ${city}`, desc: "Level III experts, RBI & FFS", link: consultingHref }
                : null,
              trainingHref
                ? { title: `NDT Training ${city}`, desc: "ASNT certification & refreshers", link: trainingHref }
                : null,
              { title: "Reporting Software", desc: "Digital inspection reports", link: "/intelligent-reporting-software" },
            ].filter(Boolean) as { title: string; desc: string; link: string }[]).map(s => (
              <Link key={s.title} to={s.link} className="block p-4 bg-background rounded-lg border hover:border-primary hover:shadow-md transition-all group">
                <h3 className="font-semibold group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
              </Link>
            ))}
          </div>
          <div className="mt-6">
            <h3 className="text-base font-semibold mb-3">NDT ERP in Other Locations</h3>
            <div className="flex flex-wrap gap-2">
              {["houston", "dubai", "abu-dhabi", "saudi-arabia", "calgary", "singapore", "mumbai", "london", "perth", "doha", "kuwait", "aberdeen", "oslo", "lagos"]
                .filter(c => c !== cityKey)
                .slice(0, 8)
                .map(c => (
                  <Link key={c} to={`/ndt-erp-${c}`} className="text-sm px-3 py-1.5 bg-background border rounded-full hover:border-primary hover:text-primary transition-colors">
                    {c.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA section ───────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 border border-primary/10"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Modernize Your NDT Operations in {city}?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join inspection companies in {city} and across {country} that have replaced
              spreadsheets and paper records with Atlantis NDT ERP. Request a personalized
              demonstration for your inspection workflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors"
              >
                Request Demo — {city} <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/erp"
                className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/50 transition-colors"
              >
                Explore All ERP Features
              </Link>
              <Link
                to="/ndt-connect-platform"
                className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 rounded-lg font-semibold text-lg hover:bg-secondary/50 transition-colors"
              >
                NDT Connect Platform
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Also serving NDT inspection companies across{" "}
              <Link to="/ndt-erp-houston" className="text-primary hover:underline">Houston</Link>,{" "}
              <Link to="/ndt-erp-dubai" className="text-primary hover:underline">Dubai</Link>,{" "}
              <Link to="/ndt-erp-singapore" className="text-primary hover:underline">Singapore</Link>,{" "}
              <Link to="/ndt-erp-abu-dhabi" className="text-primary hover:underline">Abu Dhabi</Link>, and{" "}
              <Link to="/erp" className="text-primary hover:underline">20+ global locations</Link>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Sibling-city cross-links (Digital Twin / Reporting / Training / Consulting) ── */}
      <section className="py-8 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <RelatedCityProducts
            currentProduct="erp"
            citySlug={cityKey}
            city={city}
          />
        </div>
      </section>

      <ContactDetails />
    </div>
  );
}
