import { Navigation } from "@/components/Navigation";
import PillarHubNav from "@/components/PillarHubNav";
import { SEOHead } from "@/components/SEOHead";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ContactDetails from "@/components/ContactDetails";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle, Users, FileText, Shield, Award, Target, MapPin, Building, Globe, AlertTriangle, Briefcase, BookOpen, Phone, Clock, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { keyLocations } from "@/data/programmatic-seo";
import { isCuratedCity } from '@/data/curated-cities';
import { RelatedCityProducts } from '@/components/RelatedProducts';
import { ErpDtCrossPromoBlock } from '@/components/ErpDtCrossPromoBlock';

// Happy client logos - trusted global brands
const clientLogos = [
    { name: "Qatar Energy", logoUrl: "https://upload.wikimedia.org/wikipedia/en/5/57/QatarEnergy_logo.svg" },
    { name: "ADNOC", logoUrl: "https://upload.wikimedia.org/wikipedia/en/3/3c/ADNOC_logo.svg" },
    { name: "Chevron", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/b/be/Chevron_Logo.svg" },
    { name: "TÜV Rheinland", logoUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8c/T%C3%9CV_Rheinland_Logo.svg" },
    { name: "Metrosteel", logoUrl: "/logos/metrosteel-logo.png" }
];

// Location-specific intros for unique content (ensures 450+ words per page)
const locationIntros: Record<string, { intro: string; marketInsight: string; regionalChallenge: string }> = {
    "houston": {
        intro: "Houston stands as the global epicenter of the oil and gas industry, hosting the headquarters of major energy companies and a vast network of refineries, petrochemical complexes, and midstream operations. The concentration of critical infrastructure demands the highest standards of NDT program quality.",
        marketInsight: "With over 500 chemical plants and refineries in the greater Houston area, the demand for qualified Level III consulting continues to grow as aging infrastructure requires more sophisticated inspection strategies.",
        regionalChallenge: "Houston's humid subtropical climate and proximity to the Gulf of Mexico create unique corrosion challenges requiring specialized inspection approaches for atmospheric and under-insulation corrosion."
    },
    "dubai": {
        intro: "Dubai serves as the commercial hub for the Middle East's expansive oil and gas sector, with world-class infrastructure supporting operations across the UAE and broader GCC region. The emirate's position as a logistics and business center makes it ideal for regional NDT consulting support.",
        marketInsight: "The UAE's Vision 2030 initiatives drive continued investment in downstream and petrochemical capabilities, requiring sophisticated NDT programs to ensure asset integrity across new and existing facilities.",
        regionalChallenge: "Extreme desert temperatures and coastal humidity create demanding inspection conditions, requiring consultants familiar with thermal cycling effects and specialized techniques for high-temperature applications."
    },
    "saudi-arabia": {
        intro: "Saudi Arabia operates the world's largest integrated oil and gas network, from the massive Ghawar field through extensive refining complexes at Yanbu, Jubail, and Ras Tanura. The Kingdom's Vision 2030 emphasizes local content and operational excellence.",
        marketInsight: "Saudi Aramco's expansion programs and SABIC's petrochemical investments create sustained demand for Level III expertise in procedure development and program management.",
        regionalChallenge: "Remote locations, extreme temperatures, and the scale of Saudi operations require consultants experienced in large program management and desert environment inspection considerations."
    },
    "singapore": {
        intro: "Singapore's Jurong Island hosts one of the world's largest integrated petrochemical complexes, serving as a refining and manufacturing hub for the Asia-Pacific region. The city-state's regulatory environment sets high standards for inspection program quality.",
        marketInsight: "Singapore's position as a bunkering and trading hub ensures continued infrastructure investment, while strict environmental and safety regulations drive demand for best-practice NDT programs.",
        regionalChallenge: "High humidity, space constraints, and the complexity of integrated facilities require consultants skilled in efficient inspection planning and advanced technique application."
    },
    "norway": {
        intro: "Norway's North Sea operations represent some of the most technically demanding offshore environments globally, with mature platforms requiring sophisticated integrity management and life extension strategies.",
        marketInsight: "The Norwegian offshore sector's focus on extending field life while maintaining safety standards creates strong demand for specialized integrity assessment and advanced NDT consulting.",
        regionalChallenge: "Harsh offshore conditions, aging infrastructure, and stringent NORSOK requirements demand consultants experienced in subsea, splash zone, and topside inspection challenges."
    },
    "uk": {
        intro: "The United Kingdom's North Sea sector, nuclear industry, and aerospace manufacturing create diverse demand for NDT consulting expertise across multiple regulatory frameworks and application types.",
        marketInsight: "Decommissioning activities, offshore wind development, and advanced manufacturing initiatives provide varied consulting opportunities across the UK industrial landscape.",
        regionalChallenge: "Multi-sector expertise is essential in the UK, requiring consultants fluent in offshore, nuclear, and aerospace standards while navigating evolving post-Brexit regulatory requirements."
    },
    "calgary": {
        intro: "Calgary serves as the administrative hub for Canada's oil sands and conventional petroleum operations, with major operators headquartered in the city and extensive midstream infrastructure connecting production to markets.",
        marketInsight: "Environmental considerations and competitive pressures drive focus on operational efficiency and safety performance, creating demand for optimized NDT programs that balance rigor with practicality.",
        regionalChallenge: "Extreme cold weather, remote locations, and the unique characteristics of oil sands processing equipment require specialized inspection approaches and Arctic-capable consulting support."
    },
    "mumbai": {
        intro: "Mumbai anchors India's western industrial corridor, with major refineries, petrochemical complexes, and offshore operations supporting the nation's rapidly growing energy demands.",
        marketInsight: "India's refining capacity expansion and infrastructure modernization create significant demand for Level III expertise in establishing robust, scalable NDT programs.",
        regionalChallenge: "Monsoon conditions, high-traffic facilities, and diverse equipment vintages require consultants skilled in adapting international standards to local operational contexts."
    },
    "aberdeen": {
        intro: "Aberdeen remains the undisputed capital of the UK offshore industry, with deep expertise in harsh environment operations cultivated over five decades of North Sea activity.",
        marketInsight: "The energy transition adds complexity to Aberdeen's traditional oil and gas focus, with offshore wind and hydrogen projects creating new consulting opportunities.",
        regionalChallenge: "Subsea inspection, floater integrity, and decommissioning challenges require consultants experienced in the full lifecycle of offshore assets."
    },
    "qatar": {
        intro: "Qatar's position as the world's largest LNG exporter creates unique NDT requirements across the entire natural gas value chain, from massive offshore platforms to Ras Laffan's industrial complex and export terminals.",
        marketInsight: "The North Field expansion, the world's largest LNG project, drives unprecedented demand for Level III consulting in cryogenic piping, pressure vessels, and storage tank inspection programs.",
        regionalChallenge: "LNG cryogenic service, high-pressure systems, and the critical nature of export infrastructure require consultants with specialized experience in gas processing facilities."
    },
    "kuwait": {
        intro: "Kuwait's refining modernization program and the Kuwait Integrated Petroleum Industries Company (KIPIC) Al-Zour complex represent significant investments requiring world-class NDT program development.",
        marketInsight: "The clean fuels project and ongoing maintenance of mature oilfields create sustained demand for Level III expertise across refining and upstream operations.",
        regionalChallenge: "High sulfur crude processing, extreme temperatures, and the integration of new facilities with existing infrastructure require comprehensive inspection strategies."
    },
    "abu-dhabi": {
        intro: "Abu Dhabi holds 94% of the UAE's oil reserves, with ADNOC operating the nation's upstream, midstream, and downstream assets across Ruwais industrial complex and numerous offshore platforms.",
        marketInsight: "ADNOC's downstream expansion and the Ruwais refinery projects create strong demand for consulting expertise in procedure development and program establishment for new facilities.",
        regionalChallenge: "Sour gas processing, offshore operations, and the scale of integrated facilities require consultants experienced with both conventional and advanced NDT methods."
    },
    "bahrain": {
        intro: "Bahrain's strategic position in the Gulf and its long history of petroleum refining make it a significant hub for regional oil and gas operations and aluminum manufacturing.",
        marketInsight: "BAPCO's refinery modernization and the growing aluminum sector drive demand for Level III consulting across multiple industrial applications.",
        regionalChallenge: "Coastal humidity, aging refinery infrastructure, and the mix of petroleum and metals industries require versatile consulting expertise."
    },
    "oman": {
        intro: "Oman's diverse petroleum sector includes enhanced oil recovery operations, LNG production at Sur, and growing petrochemical investments at Duqm and Sohar industrial cities.",
        marketInsight: "The Duqm Special Economic Zone and Petroleum Development Oman's mature field operations create varied consulting opportunities across the sultanate.",
        regionalChallenge: "Remote desert locations, aging wells, and the development of new industrial zones require consultants adaptable to both greenfield and brownfield scenarios."
    },
    "chennai": {
        intro: "Chennai serves as the gateway to South India's industrial sector, with major automotive manufacturing, power generation facilities, and the growing Chennai Petroleum Corporation refinery complex.",
        marketInsight: "India's manufacturing push and infrastructure development in Tamil Nadu create expanding demand for NDT consulting across automotive, power, and refining sectors.",
        regionalChallenge: "High humidity, cyclone exposure, and diverse industry requirements demand consultants with broad experience across multiple application types."
    },
    "bangalore": {
        intro: "Bangalore's aerospace corridor hosts India's premier aerospace and defense manufacturing facilities, including HAL, ISRO suppliers, and numerous Tier 1 aerospace component manufacturers.",
        marketInsight: "India's indigenous aerospace programs and growing defense manufacturing create specialized demand for Level III consulting in aerospace NDT applications.",
        regionalChallenge: "Stringent aerospace quality requirements, composite materials, and precision manufacturing demand consultants with aerospace-specific certifications and experience."
    },
    "delhi": {
        intro: "The National Capital Region serves as India's administrative center with significant refining capacity at Indian Oil's Mathura and Panipat refineries and extensive pipeline infrastructure.",
        marketInsight: "Refinery capacity expansion and the development of new pipeline networks across North India drive demand for Level III consulting services.",
        regionalChallenge: "Diverse industrial applications, extreme temperature variations between seasons, and high-traffic facilities require flexible consulting approaches."
    },
    "kolkata": {
        intro: "Kolkata anchors eastern India's heavy-engineering, steel and power-generation cluster, with Tata Steel's Jamshedpur works two hours away, the IOCL Haldia refinery 50 km south, the IOCL Barauni and Bongaigaon refineries within reach, CESC's thermal power fleet, Damodar Valley Corporation power assets, and major boiler / pressure-vessel fabricators (BHEL Haridwar, IBR-certified Kolkata-based fabricators).",
        marketInsight: "IOCL Haldia's continuous turnarounds, BHEL's nuclear and thermal boiler fabrication, the eastern coal-fired and combined-cycle power buildout and the Kolkata Port Trust's marine infrastructure all create Level III consulting demand for IBR (Indian Boiler Regulations) inspection, API 510/570/653 program design, ASME Section I and Section VIII Division 1 weld procedure qualification, and FFS per API 579-1 for ageing thermal-power and refinery assets. Welder qualification per ASME IX and IBR is a constant workload.",
        regionalChallenge: "Eastern India's high-humidity, salt-laden Bay-of-Bengal atmosphere drives aggressive CUI and external corrosion on insulated piping and tankage. Consultants must combine deep familiarity with IBR statutory inspection cycles, PESO oversight, OISD standards for oil and gas, and the international API/ASME framework — and translate that across Bengali/Hindi-language documentation environments and the BHEL/PSU procurement-and-approval culture."
    },
    "los-angeles": {
        intro: "Los Angeles hosts major refining operations at Torrance, Wilmington, and Carson, processing crude from Alaskan and international sources for the West Coast fuel market.",
        marketInsight: "California's stringent environmental regulations and the transition to renewable fuels create unique consulting opportunities for compliance-focused NDT programs.",
        regionalChallenge: "Seismic considerations, strict air quality requirements, and aging infrastructure require consultants familiar with California's regulatory environment."
    },
    "new-orleans": {
        intro: "The New Orleans corridor along the lower Mississippi River hosts major refineries, petrochemical facilities, and LNG export terminals serving the Gulf Coast energy hub.",
        marketInsight: "LNG export expansion and the concentration of petrochemical investment along the river create growing demand for Level III consulting services.",
        regionalChallenge: "Hurricane exposure, high humidity, and the critical nature of export infrastructure require consultants experienced in Gulf Coast operations."
    },
    "chicago": {
        intro: "Chicago's refining complex in Whiting and Lemont processes heavy Canadian crude, while the city's manufacturing base includes major steel production and industrial equipment manufacturing.",
        marketInsight: "The Midwest refining sector's focus on heavy crude processing and manufacturing quality demands create diverse consulting opportunities.",
        regionalChallenge: "Extreme seasonal temperature variations, heavy crude corrosivity, and aging infrastructure require specialized inspection approaches."
    },
    "seattle": {
        intro: "Seattle and the Pacific Northwest host major aerospace manufacturing including Boeing's facilities, along with significant petroleum refining at Cherry Point and Anacortes.",
        marketInsight: "Aerospace production volume and refinery operations create sustained demand for Level III consulting across both high-tech and heavy industrial sectors.",
        regionalChallenge: "Coastal humidity, seismic considerations, and the mix of aerospace precision and refinery applications require versatile consulting expertise."
    },
    "dallas": {
        intro: "The Dallas-Fort Worth metroplex serves as a hub for aerospace manufacturing, with major facilities for Lockheed Martin, Bell Helicopter, and numerous defense contractors.",
        marketInsight: "Defense manufacturing programs and the region's growing industrial base create expanding demand for Level III consulting services.",
        regionalChallenge: "Aerospace precision requirements, composite materials, and the integration of advanced manufacturing technologies demand specialized consulting approaches."
    },
    "denver": {
        intro: "Denver serves Colorado's diverse energy sector including oil and gas operations in the DJ Basin, renewable energy manufacturing, and significant aerospace activity.",
        marketInsight: "The energy transition and aerospace industry growth create varied consulting opportunities across traditional and emerging sectors.",
        regionalChallenge: "High altitude operations, extreme temperature variations, and the mix of energy and aerospace applications require adaptable consulting expertise."
    },
    "germany": {
        intro: "Germany's industrial heartland hosts major chemical complexes at Ludwigshafen and Leverkusen, automotive manufacturing, and rigorous engineering quality standards recognized globally.",
        marketInsight: "German engineering excellence and strict quality requirements create demand for Level III consulting aligned with DIN, EN, and international standards.",
        regionalChallenge: "High regulatory standards, complex chemical processing, and the precision requirements of German industry demand consultants with European certification expertise."
    },
    "netherlands": {
        intro: "Rotterdam's Europoort refining complex is Europe's largest, with Shell, ExxonMobil, and BP operations processing crude for continental markets alongside major chemical production.",
        marketInsight: "Energy transition investments and Europe's largest refining complex create diverse consulting opportunities for Level III expertise.",
        regionalChallenge: "North Sea climate, aging infrastructure, and strict environmental regulations require consultants familiar with European operational standards."
    },
    "france": {
        intro: "France's nuclear fleet represents the world's largest nuclear power program, with EDF operating 56 reactors while Total Energies maintains significant refining capacity.",
        marketInsight: "Nuclear plant life extension programs and refinery maintenance create specialized demand for Level III consulting with nuclear and petroleum expertise.",
        regionalChallenge: "Nuclear regulatory requirements, aging reactor vessels, and strict safety standards demand consultants with specific nuclear industry qualifications."
    },
    "italy": {
        intro: "Italy's refining sector at Augusta, Gela, and Sarroch serves Mediterranean markets, while ENI's integrated operations span upstream through chemicals.",
        marketInsight: "Refinery optimization and the growing renewable energy sector create varied consulting opportunities across traditional and emerging energy applications.",
        regionalChallenge: "Mediterranean climate, aging infrastructure, and the transition toward cleaner operations require adaptable consulting approaches."
    },
    "australia": {
        intro: "Australia's LNG industry at Gladstone, Curtis Island, and the North West Shelf represents massive cryogenic infrastructure requiring specialized NDT program expertise.",
        marketInsight: "LNG production, mining sector maintenance, and aging infrastructure create sustained demand for Level III consulting across multiple sectors.",
        regionalChallenge: "Remote operations, tropical and arid conditions, and the scale of LNG and mining operations require consultants with diverse environmental experience."
    },
    "japan": {
        intro: "Japan's industrial base includes major refineries, petrochemical complexes, and world-leading manufacturing quality standards recognized through JIS and proprietary specifications.",
        marketInsight: "Manufacturing excellence and aging infrastructure create demand for Level III consulting aligned with Japanese quality traditions.",
        regionalChallenge: "Seismic requirements, aging petrochemical facilities, and exacting quality standards demand consultants familiar with Japanese industrial expectations."
    },
    "south-korea": {
        intro: "South Korea's refining hub at Ulsan includes the world's largest single-location refinery complex, with Samsung, Hyundai, and SK operations serving Asian markets.",
        marketInsight: "Mega-scale refining operations and shipbuilding industry demand create significant opportunities for Level III consulting services.",
        regionalChallenge: "Large-scale facilities, high throughput operations, and the integration of refining with petrochemicals require consultants experienced with complex integrated sites."
    },
    "malaysia": {
        intro: "Malaysia's Petronas operates integrated refining and petrochemical complexes at Kerteh and Melaka, alongside significant offshore production in the South China Sea.",
        marketInsight: "Downstream expansion and ongoing offshore operations create sustained demand for Level III consulting across the petroleum value chain.",
        regionalChallenge: "Tropical humidity, offshore operations, and the mix of onshore and offshore requirements demand versatile consulting expertise."
    },
    "indonesia": {
        intro: "Indonesia's archipelago hosts major refining at Balikpapan, Cilacap, and Dumai, with extensive offshore operations across multiple basins serving the region's energy needs.",
        marketInsight: "Refinery modernization and the development of new facilities create growing demand for Level III consulting services.",
        regionalChallenge: "Maritime logistics, tropical conditions, and aging infrastructure require consultants adaptable to challenging operational environments."
    },
    "thailand": {
        intro: "Thailand's Map Ta Phut industrial complex hosts major petrochemical production, with PTT and Thai Oil operating significant refining capacity serving Southeast Asian markets.",
        marketInsight: "Petrochemical expansion and refinery maintenance create sustained demand for Level III consulting expertise.",
        regionalChallenge: "Tropical climate, integrated petrochemical operations, and strict Thai regulatory requirements demand experienced consulting support."
    },
    "vietnam": {
        intro: "Vietnam's developing petroleum sector includes the Dung Quat and Nghi Son refineries, with expanding exploration and production in the South China Sea.",
        marketInsight: "New facility development and the modernization of existing operations create growing demand for Level III consulting as the sector matures.",
        regionalChallenge: "Developing regulatory frameworks, new facility commissioning, and tropical conditions require consultants experienced in program establishment."
    },
    "brazil": {
        intro: "Brazil's Petrobras operates major refining capacity at REPLAN, RLAM, and REGAP, while pre-salt deepwater operations represent some of the world's most challenging offshore environments.",
        marketInsight: "Pre-salt development and refinery maintenance create significant demand for Level III consulting across offshore and onshore operations.",
        regionalChallenge: "Ultra-deepwater operations, pre-salt well conditions, and the scale of Brazilian operations require consultants with specialized offshore expertise."
    },
    "nigeria": {
        intro: "Nigeria's petroleum sector includes major refining capacity at Port Harcourt and Warri, with extensive onshore and offshore production in the Niger Delta and deepwater blocks.",
        marketInsight: "Infrastructure renewal and the development of new refining capacity create demand for Level III consulting to establish robust inspection programs.",
        regionalChallenge: "Challenging operating conditions, security considerations, and aging infrastructure require experienced consultants familiar with African operations."
    },
    "south-africa": {
        intro: "South Africa's Sasol operates the world's largest coal-to-liquids facility at Secunda, while refineries at Durban and Cape Town serve Southern African fuel markets.",
        marketInsight: "Unique synthetic fuel production and refinery operations create specialized demand for Level III consulting expertise.",
        regionalChallenge: "High-temperature coal gasification, diverse feedstocks, and aging infrastructure require consultants with specialized synfuels experience."
    },
    "egypt": {
        intro: "Egypt's petroleum sector spans Mediterranean and Red Sea operations, with significant refining capacity at Alexandria and Suez serving regional fuel requirements.",
        marketInsight: "Gas development and refinery modernization create growing demand for Level III consulting services across the Egyptian petroleum sector.",
        regionalChallenge: "Desert conditions, aging infrastructure, and the mix of gas and petroleum operations require versatile consulting expertise."
    },
    "toronto": {
        intro: "Toronto and the Golden Horseshoe region host major manufacturing operations including automotive plants, steel production, and significant industrial infrastructure.",
        marketInsight: "Automotive manufacturing quality requirements and infrastructure maintenance create sustained demand for Level III consulting.",
        regionalChallenge: "Cold weather operations, automotive precision requirements, and diverse industrial applications demand versatile consulting approaches."
    },
    "vancouver": {
        intro: "Vancouver serves as Canada's Pacific gateway with major port facilities, pipeline terminals, and Trans Mountain expansion infrastructure serving energy exports.",
        marketInsight: "Pipeline expansion and port infrastructure development create demand for Level III consulting services across diverse applications.",
        regionalChallenge: "Seismic requirements, coastal environment, and stringent Canadian regulations require experienced consulting support."
    },
    "edmonton": {
        intro: "Edmonton anchors Alberta's oil sands processing sector with major upgraders, refineries, and petrochemical facilities serving North American markets.",
        marketInsight: "Oil sands processing and petrochemical operations create sustained demand for Level III consulting in heavy crude applications.",
        regionalChallenge: "Extreme cold, oil sands processing conditions, and hydrogen high-temperature service require specialized consulting expertise."
    },
    "perth": {
        intro: "Perth is the gateway to Western Australia's massive mining and LNG sector, with major projects like Gorgon, Wheatstone, and North West Shelf driving industrial NDT demand across offshore and onshore operations.",
        marketInsight: "Australia's LNG expansion and ongoing mining operations create strong demand for Level III consulting expertise in remote and offshore environments.",
        regionalChallenge: "Remote locations, extreme heat, and the scale of LNG and mining operations require consultants experienced in large-scale asset integrity programs."
    },
    "melbourne": {
        intro: "Melbourne serves as Australia's manufacturing and engineering hub, with major automotive, aerospace, and heavy industrial operations concentrated in the greater metropolitan area.",
        marketInsight: "Advanced manufacturing, defense contracts, and infrastructure development create diverse consulting opportunities across multiple industrial sectors.",
        regionalChallenge: "Diverse industry requirements, stringent Australian standards, and the transition to advanced manufacturing demand versatile Level III consulting expertise."
    },
    "sydney": {
        intro: "Sydney anchors New South Wales' industrial infrastructure, with major power generation, manufacturing, and port facilities serving Australia's largest economy.",
        marketInsight: "Infrastructure maintenance and energy sector modernization create sustained demand for Level III consulting services across diverse applications.",
        regionalChallenge: "Coastal environment, aging infrastructure, and diverse industrial applications require consultants familiar with Australian regulatory frameworks and multiple industry codes."
    },
    "brisbane": {
        intro: "Brisbane serves as the operational hub for Queensland's extensive mining, LNG, and energy sectors, including Curtis Island LNG facilities and major coal and mineral operations.",
        marketInsight: "Queensland's LNG export facilities and expanding mining operations drive demand for Level III consulting in both onshore and offshore applications.",
        regionalChallenge: "Tropical climate, remote operational sites, and the unique challenges of LNG and mining operations require specialized consulting approaches."
    },
    "beijing": {
        intro: "Beijing serves as the administrative and strategic center for China's petroleum industry, home to the headquarters of CNPC, Sinopec, and other major state-owned energy enterprises.",
        marketInsight: "China's massive refining expansion and pipeline infrastructure create significant demand for Level III consulting to ensure compliance with evolving national standards.",
        regionalChallenge: "Rapidly evolving regulatory frameworks, scale of operations, and the integration of international codes with Chinese national standards require experienced consulting support."
    },
    "shanghai": {
        intro: "Shanghai is China's industrial powerhouse, hosting major petrochemical complexes at Shanghai Chemical Industry Park and significant shipbuilding and manufacturing operations along the Yangtze River.",
        marketInsight: "Petrochemical expansion, advanced manufacturing, and shipbuilding create diverse Level III consulting demand in China's most commercially active city.",
        regionalChallenge: "Coastal humidity, high-density industrial zones, and the blend of international and domestic standards require consultants skilled in multi-code compliance."
    },
    "shenzhen": {
        intro: "Shenzhen anchors South China's manufacturing and technology corridor, with electronics manufacturing, energy infrastructure, and advanced materials operations driving industrial growth.",
        marketInsight: "High-tech manufacturing and energy infrastructure development create growing demand for advanced NDT consulting services in quality-critical applications.",
        regionalChallenge: "Subtropical climate, rapid industrial expansion, and stringent quality requirements for electronics and precision manufacturing demand specialized consulting expertise."
    },
    "hong-kong": {
        intro: "Hong Kong's strategic position as an international business hub provides access to South China's vast industrial operations and serves as a gateway for regional NDT consulting across Asia-Pacific.",
        marketInsight: "Infrastructure maintenance, marine operations, and the region's position as a logistics hub create diverse consulting demand leveraging international standards.",
        regionalChallenge: "Maritime environment, limited industrial space, and the need to comply with both international and mainland Chinese standards require versatile consulting approaches."
    },
    "taipei": {
        intro: "Taipei serves as the hub for Taiwan's semiconductor, petrochemical, and advanced manufacturing sectors, with major industrial operations at Mailiao and Kaohsiung petrochemical complexes.",
        marketInsight: "Semiconductor fabrication facility maintenance and petrochemical operations create specialized demand for Level III consulting in precision-critical applications.",
        regionalChallenge: "Seismic considerations, semiconductor clean room requirements, and stringent quality expectations demand consultants experienced in high-precision industrial NDT."
    },
    "manila": {
        intro: "Manila serves as the Philippines' industrial center, with major refining operations, power generation facilities, and growing manufacturing infrastructure across the metropolitan region.",
        marketInsight: "Infrastructure development, refinery maintenance, and power sector expansion create growing demand for Level III consulting services in the Philippines.",
        regionalChallenge: "Tropical climate, seismic activity, and developing regulatory frameworks require consultants experienced in establishing robust NDT programs from the ground up."
    },
    "jakarta": {
        intro: "Jakarta anchors Indonesia's industrial and energy sector, coordinating operations for Pertamina's extensive refining network and the country's diverse onshore and offshore petroleum operations.",
        marketInsight: "Refinery modernization, new facility development, and expanding offshore operations create significant consulting opportunities across Indonesia's archipelago.",
        regionalChallenge: "Maritime logistics, tropical conditions, and the geographic spread of operations require consultants adaptable to remote and challenging operational environments."
    },
    "bangkok": {
        intro: "Bangkok coordinates Thailand's petrochemical and manufacturing operations, including the massive Map Ta Phut industrial complex and major automotive manufacturing facilities in the Eastern Seaboard.",
        marketInsight: "Petrochemical expansion, automotive quality requirements, and energy sector investment create sustained demand for Level III consulting expertise.",
        regionalChallenge: "Tropical climate, integrated petrochemical operations, and Thai regulatory requirements demand experienced consulting support across multiple industrial sectors."
    },
    "ho-chi-minh": {
        intro: "Ho Chi Minh City is the commercial hub for southern Vietnam's industrial corridor, anchoring PetroVietnam's downstream and EPC operations, Doosan Vina's heavy-equipment fabrication and the Long Son Petrochemicals (SCG/SCG-Vina) complex at Vung Tau. The Cat Lai port, Hiep Phuoc industrial zone and the new Nhon Trach gas-fired power generation cluster cluster around the city.",
        marketInsight: "Long Son Petrochemicals' start-up, PetroVietnam's expansion of Dung Quat 2 and Nghi Son refineries, and Vietnam's accelerated LNG-to-power buildout create growing Level III consulting demand for ASME IX welder qualification, API 510/570/653 in-service inspection program design, FFS per API 579-1 for ageing PetroVietnam assets, and personnel certification per ISO 9712 and SNT-TC-1A. PAUT/TOFD procedure approval is in particular demand for thick-wall hydrocracker and cracker reactor welds.",
        regionalChallenge: "Vietnam's regulatory environment is a hybrid of QCVN national codes, Russian/Soviet legacy standards from older PetroVietnam assets, and contemporary ASME/API specifications imposed by international JV partners. Consultants must translate code requirements across these traditions, support Vietnamese-language documentation needs, and operate in the high-humidity, monsoon-driven climate that aggressively drives CUI on insulated piping and tankage."
    },
    "sao-paulo": {
        intro: "São Paulo is Brazil's industrial heartbeat, hosting major petrochemical complexes, automotive manufacturing, and serving as the business hub for Petrobras and other energy companies.",
        marketInsight: "Petrochemical operations, automotive manufacturing quality requirements, and infrastructure maintenance create diverse Level III consulting demand.",
        regionalChallenge: "Scale of operations, diverse industrial applications, and Brazilian regulatory requirements demand versatile consulting expertise across multiple sectors."
    },
    "rio-de-janeiro": {
        intro: "Rio de Janeiro serves as the operational center for Brazil's offshore petroleum industry, with Petrobras' pre-salt deepwater operations representing some of the world's most technically challenging inspection environments.",
        marketInsight: "Pre-salt deepwater development and offshore platform maintenance create strong demand for Level III consulting specialized in subsea and FPSO operations.",
        regionalChallenge: "Ultra-deepwater operations, FPSO integrity, and the technical complexity of pre-salt wells require consultants with specialized offshore expertise."
    },
    "buenos-aires": {
        intro: "Buenos Aires serves as the administrative hub for Argentina's petroleum sector, with YPF's operations spanning conventional production and the rapidly developing Vaca Muerta shale basin.",
        marketInsight: "Vaca Muerta shale development and refinery maintenance create growing demand for Level III consulting in both conventional and unconventional operations.",
        regionalChallenge: "Remote shale operations, aging refinery infrastructure, and the development of unconventional resources require consultants experienced in diverse operational environments."
    },
    "bogota": {
        intro: "Bogotá coordinates Colombia's petroleum operations, with Ecopetrol managing significant refining capacity at Barrancabermeja and expanding exploration programs across the country.",
        marketInsight: "Refinery modernization, pipeline infrastructure, and growing production create sustained demand for Level III consulting across Colombia's petroleum value chain.",
        regionalChallenge: "Geographical diversity, security considerations, and the mix of aging and new infrastructure require experienced consultants familiar with Latin American operations."
    },
    "lima": {
        intro: "Lima serves as the hub for Peru's mining and energy industries, with major copper and gold mining operations alongside growing petroleum and LNG infrastructure.",
        marketInsight: "Mining operations, LNG production, and infrastructure development create diverse consulting demand across Peru's industrial sectors.",
        regionalChallenge: "High-altitude mining operations, seismic activity, and diverse geographical conditions require consultants adaptable to challenging Andean environments."
    },
    "santiago": {
        intro: "Santiago coordinates Chile's significant mining sector, the world's largest copper producer, alongside growing renewable energy infrastructure and petrochemical operations.",
        marketInsight: "Copper mining operations, lithium extraction, and energy sector investment create specialized demand for Level III consulting expertise.",
        regionalChallenge: "High-altitude mining, seismic considerations, and extreme desert conditions in northern Chile require consultants experienced in harsh environment operations."
    },
    "lagos": {
        intro: "Lagos serves as the commercial hub for Nigeria's petroleum industry, coordinating onshore and offshore operations across the Niger Delta and deepwater blocks in the Gulf of Guinea.",
        marketInsight: "Dangote Refinery commissioning, offshore development, and infrastructure renewal create unprecedented demand for Level III consulting in West Africa.",
        regionalChallenge: "Challenging operating conditions, harsh coastal environment, and the complexity of offshore operations require consultants with specialized African and deepwater expertise."
    },
    "johannesburg": {
        intro: "Johannesburg anchors South Africa's mining and manufacturing sector, with major operations across the Witwatersrand basin and connections to Sasol's coal-to-liquids facilities.",
        marketInsight: "Mining infrastructure, synthetic fuel production, and industrial manufacturing create diverse consulting demand across Southern Africa's most industrialized region.",
        regionalChallenge: "Unique synfuels processing, aging mining infrastructure, and diverse industrial applications require versatile Level III consulting expertise."
    },
    "cape-town": {
        intro: "Cape Town serves as South Africa's maritime and energy hub, with port facilities, offshore services, and connections to PetroSA's gas-to-liquids operations at Mossel Bay.",
        marketInsight: "Maritime operations, offshore exploration, and growing renewable energy infrastructure create diverse consulting opportunities in the Western Cape region.",
        regionalChallenge: "Marine environment, offshore operations, and the development of new energy infrastructure require consultants experienced in both conventional and emerging sectors."
    },
    "nairobi": {
        intro: "Nairobi serves as East Africa's commercial center, coordinating growing oil and gas exploration, geothermal energy development, and significant infrastructure investment across the region.",
        marketInsight: "Kenya's geothermal development, oil exploration in Turkana, and regional infrastructure investment create emerging demand for Level III consulting expertise.",
        regionalChallenge: "Emerging petroleum sector, geothermal operations, and developing regulatory frameworks require consultants experienced in program establishment and capacity building."
    },
    "accra": {
        intro: "Accra coordinates Ghana's growing petroleum sector, including the Jubilee and TEN offshore fields, alongside mining and expanding industrial infrastructure.",
        marketInsight: "Offshore petroleum development and industrial growth create increasing demand for Level III consulting in West Africa's most stable economy.",
        regionalChallenge: "Offshore operations, tropical conditions, and developing inspection infrastructure require consultants experienced in establishing NDT programs in emerging markets."
    },
    "casablanca": {
        intro: "Casablanca serves as Morocco's industrial capital, with major phosphate processing, automotive manufacturing, and growing energy infrastructure across the country.",
        marketInsight: "Industrial diversification, renewable energy investment, and OCP's phosphate operations create diverse consulting demand in North Africa.",
        regionalChallenge: "Diverse industrial applications, proximity to European standards, and growing manufacturing sectors require consultants familiar with both African and European regulatory frameworks."
    },
    "austin": {
        intro: "Austin's rapidly expanding semiconductor fabrication, data center construction, and advanced manufacturing sector make it one of the fastest-growing NDT markets in the southern United States. Samsung's $17 billion fab and Tesla's Gigafactory drive demand for precision inspection programs.",
        marketInsight: "The semiconductor boom and defense manufacturing growth in Central Texas create specialized consulting needs for cleanroom-compatible NDT, thin-wall tubing inspection, and advanced composite evaluation.",
        regionalChallenge: "Rapid growth strains the available pool of qualified inspectors, while diverse industry requirements—from chip fabs to oil field equipment—demand consultants skilled in multiple codes and standards."
    },
    "san-antonio": {
        intro: "San Antonio anchors a major defense and aerospace corridor, with Joint Base San Antonio, Boeing, and Lockheed Martin operations driving demand for ASNT Level III consulting in military and aviation applications.",
        marketInsight: "Sustained defense spending and the Eagle Ford Shale's midstream infrastructure create dual-track consulting opportunities across aerospace and petroleum sectors.",
        regionalChallenge: "Meeting both DoD and commercial aerospace quality requirements alongside oil and gas codes demands consultants fluent in NAS 410, SNT-TC-1A, and API standards simultaneously."
    },
    "fort-worth": {
        intro: "Fort Worth's industrial landscape combines Lockheed Martin's F-35 production line, Bell's tiltrotor manufacturing, and a robust refining corridor that collectively sustain year-round NDT consulting demand.",
        marketInsight: "The F-35 full-rate production ramp and expanding LNG export infrastructure create premium opportunities for Level III consultants with aerospace and energy sector dual expertise.",
        regionalChallenge: "Advanced composite inspection for aerospace platforms alongside traditional weld inspection for petrochemical facilities requires consultants with breadth across multiple NDT methods."
    },
    "midland": {
        intro: "Midland sits at the heart of the Permian Basin, the most productive oil field in the United States, where thousands of miles of pipeline, tank batteries, and processing facilities require continuous NDT oversight.",
        marketInsight: "Record Permian production volumes and new pipeline construction projects drive relentless demand for Level III consulting in welding procedure qualification and in-service inspection programs.",
        regionalChallenge: "Remote desert operations, extreme summer heat, and a highly competitive labor market for certified inspectors require consultants experienced in efficient program management under challenging conditions."
    },
    "sacramento": {
        intro: "Sacramento and California's Central Valley host significant power generation infrastructure, water treatment facilities, and growing clean energy manufacturing that require ASNT Level III program oversight.",
        marketInsight: "California's aggressive decarbonization mandates drive investment in hydrogen pipelines, battery storage, and renewable energy infrastructure—all requiring specialized NDT consulting.",
        regionalChallenge: "Seismic design requirements, stringent CalOSHA regulations, and the state's unique environmental compliance framework demand consultants well-versed in California-specific codes."
    },
    "orlando": {
        intro: "Orlando and Central Florida support a thriving aerospace and defense sector anchored by Lockheed Martin, Northrop Grumman, and the Kennedy Space Center supply chain, alongside growing power generation infrastructure.",
        marketInsight: "Commercial space launch vehicle production and defense electronics manufacturing create niche consulting opportunities for advanced NDT methods including phased array and digital radiography.",
        regionalChallenge: "High humidity, hurricane preparedness, and the precision demands of space hardware inspection require consultants experienced in controlled-environment NDT applications."
    },
    "norfolk": {
        intro: "Norfolk and the Hampton Roads region host the world's largest naval base and a major shipbuilding corridor led by Huntington Ingalls Industries, driving specialized NDT requirements for nuclear and conventional naval vessels.",
        marketInsight: "Navy shipbuilding programs, submarine construction, and fleet maintenance contracts create sustained demand for Level III consultants with NAVSEA and nuclear quality program experience.",
        regionalChallenge: "Nuclear-grade inspection requirements, classified program restrictions, and the unique demands of shipyard environments require consultants with active security clearances and maritime experience."
    },
    "huntsville": {
        intro: "Huntsville, Alabama—'Rocket City'—is home to NASA's Marshall Space Flight Center, Redstone Arsenal, and a growing constellation of aerospace and defense manufacturers requiring precision NDT programs.",
        marketInsight: "The Space Launch System, hypersonic weapons programs, and the influx of defense contractors to Cummings Research Park create premium consulting opportunities in aerospace NDT.",
        regionalChallenge: "Exotic alloy welding, additive manufacturing qualification, and the exacting standards of space-rated hardware demand consultants with advanced aerospace materials expertise."
    },
    "mobile": {
        intro: "Mobile's Gulf Coast industrial corridor combines Airbus A320 final assembly, major shipbuilding operations at Austal USA, and petrochemical facilities along the Mobile River.",
        marketInsight: "Airbus production ramp-up and naval shipbuilding contracts create growing demand for Level III consulting bridging aerospace and marine inspection disciplines.",
        regionalChallenge: "Coastal humidity, hurricane exposure, and the need to bridge aerospace precision with heavy industrial inspection require versatile consultants with multi-code expertise."
    },
    "oklahoma-city": {
        intro: "Oklahoma City anchors the state's petroleum midstream hub and hosts Tinker Air Force Base, the world's largest military aircraft maintenance depot, creating dual-sector NDT demand.",
        marketInsight: "Air Force sustainment programs and the Oklahoma pipeline network drive sustained consulting opportunities across both defense and oil and gas sectors.",
        regionalChallenge: "Tornado-zone resilience requirements, aging military aircraft inspection, and midstream pipeline integrity programs demand consultants with both military and commercial experience."
    },
    "colorado-springs": {
        intro: "Colorado Springs hosts significant aerospace and defense operations including the Air Force Academy, Space Command, and numerous satellite and missile defense contractors requiring specialized NDT programs.",
        marketInsight: "Space systems manufacturing and defense electronics create specialized consulting needs for advanced NDT methods on precision components and exotic materials.",
        regionalChallenge: "High-altitude environmental effects on materials, classified program requirements, and the precision demands of space hardware require consultants with defense-sector clearances and expertise."
    },
    "savannah": {
        intro: "Savannah combines Gulfstream Aerospace's business jet manufacturing with one of the busiest container ports on the U.S. East Coast and a growing industrial corridor along the Georgia coast.",
        marketInsight: "Gulfstream production expansion and port infrastructure development create consulting opportunities spanning aerospace NDT and heavy structural inspection.",
        regionalChallenge: "Coastal corrosion, aerospace precision requirements, and the seasonal demands of port infrastructure maintenance require consultants with diverse inspection capabilities."
    },
    "raleigh": {
        intro: "The Raleigh-Durham Research Triangle hosts advanced pharmaceutical manufacturing, semiconductor fabrication, and growing energy infrastructure supporting North Carolina's industrial expansion.",
        marketInsight: "Pharmaceutical process piping, semiconductor cleanroom systems, and nuclear power operations at nearby Harris plant create diverse Level III consulting opportunities.",
        regionalChallenge: "Cleanroom-compatible inspection methods, pharmaceutical validation requirements, and nuclear regulatory compliance demand consultants with specialized industry credentials."
    },
    "nashville": {
        intro: "Nashville and Middle Tennessee host a growing automotive manufacturing corridor led by Nissan and GM, alongside significant healthcare infrastructure and expanding industrial operations.",
        marketInsight: "Automotive stamping and assembly quality requirements and healthcare facility infrastructure create consulting demand across manufacturing and construction sectors.",
        regionalChallenge: "Automotive production quality demands, diverse manufacturing applications, and the region's rapid industrial growth require consultants adaptable to multiple industry sectors."
    },
    "lake-charles": {
        intro: "Lake Charles sits at the nexus of Louisiana's LNG export boom and legacy petrochemical corridor, with massive capital projects at Cameron LNG, Driftwood LNG, and numerous chemical facilities.",
        marketInsight: "Multi-billion-dollar LNG terminal construction and ongoing refinery turnarounds create intense, sustained demand for Level III consulting in both greenfield and brownfield environments.",
        regionalChallenge: "Hurricane exposure, extreme humidity, and the simultaneous demands of construction and maintenance inspection require consultants experienced in large-project mobilization and Gulf Coast conditions."
    },
    // === Consulting expansion 2026-05-24 — 15 enriched city contexts (Saudi/UAE/Oman/India/Canada) ===
    "riyadh": {
        intro: "Riyadh is the corporate and engineering nerve centre of Saudi Aramco, SABIC, Ma'aden and the Public Investment Fund (PIF). Vision 2030 megaprojects — NEOM, the Red Sea Project, Diriyah Gate and the King Salman Park — converge in the capital alongside Aramco's central engineering, drilling services and downstream business units. The NDT consulting workload here is heavily skewed toward procedure approval, RBI program design under API 580/581, and Aramco SAEP / 01-SAMSS material compliance reviews for projects executed across the Kingdom.",
        marketInsight: "Aramco's accelerated In-Kingdom Total Value Add (IKTVA) program and the SABIC-Aramco merger created sustained demand for ASNT Level III consultants who can stand in front of Aramco's Inspection Department, sign procedures that withstand SAES audits, and develop FFS per API 579-1 for legacy plants. PIF-backed industrial cities (King Salman Energy Park, SPARK) add steady greenfield consulting work for piping QA/QC, tank API 650/653 construction inspection, and personnel certification per SNT-TC-1A and ISO 9712.",
        regionalChallenge: "Riyadh's projects are managed from the capital but executed across thousands of kilometres — Khurais, Shaybah, Jafurah, Yanbu, Jubail. Effective consultants here must understand Aramco's contractor approval pipeline, SAP-PM integration of inspection findings, Arabic-language documentation requirements, and the practical reality of mobilising NDT crews into hot, remote, sour-service environments."
    },
    "jubail": {
        intro: "Jubail Industrial City is the largest civil engineering project in modern history and the operational heart of SABIC, HADEED, Marafiq, the Royal Commission for Jubail and Yanbu (RCJY), and Saudi Aramco's eastern downstream complex. With more than 80 petrochemical plants, the SADARA joint venture, IGCC power, desalination trains and the Ras Al-Khair maritime industrial zone next door, Jubail concentrates more pressure equipment per square kilometre than almost anywhere else on earth.",
        marketInsight: "RCJY's strict pre-commissioning inspection regime and SABIC's plant-life-extension initiatives keep API 510 / 570 / 653 RBI consulting in high demand. PAUT corrosion mapping, HTHA assessment of reformer outlet headers, hydrogen-induced cracking (HIC) surveys per NACE TM0284, and FFS per API 579-1 dominate the consulting scope. SADARA's restart and SABIC's polycarbonate expansions add significant procedure-development workload.",
        regionalChallenge: "The Jubail consulting market rewards consultants who understand RCJY Construction Specifications, ARAMCO 01-SAMSS / 02-SAMSS material standards, and the difference between SAES-W-011 and ASME B31.3 weld acceptance. Sour service, high ambient temperatures, and tight turnaround windows demand procedures that pass audit AND are physically executable on the deck."
    },
    "yanbu": {
        intro: "Yanbu on the Red Sea hosts SAMREF (Saudi Aramco-Mobil), YANPET (SABIC-ExxonMobil), Yanbu Aramco Sinopec Refinery (YASREF), Yanbu National Petrochemical (YANSAB) and the eastern terminus of the East-West Crude pipeline. The Royal Commission's industrial expansion plan continues to add petrochemical, refining and aluminium capacity, while Saudi Aramco's marine terminals export much of the Kingdom's crude through Yanbu.",
        marketInsight: "Yanbu's mature refining assets create consistent FFS, RBI and turnaround consulting demand under API 510/570/653, while greenfield expansions require Level III oversight on welder qualification per ASME IX, PWHT verification, and PMI for low-temperature/sour service. Aramco's IKTVA targets drive local consultant development — a meaningful share of consulting engagements blend technical delivery with knowledge-transfer obligations.",
        regionalChallenge: "Coastal humidity, salt-laden atmospheres and tight Red Sea logistics complicate inspection planning. Consultants working Yanbu must reconcile Aramco SAES with EN/ISO codes used by European EPCs, and be ready to operate inside SAMREF/YASREF turnarounds where every hour of critical-path inspection drives millions in deferred revenue."
    },
    "dammam": {
        intro: "Dammam and the surrounding Eastern Province (Khobar, Dhahran, Qatif) host the headquarters of Saudi Aramco, the largest concentration of upstream operations on the planet, and the dense industrial corridor stretching from Abqaiq through Ras Tanura. Major drilling, well-services, fabrication and modular-construction yards serving Aramco are clustered around Dammam's First, Second and Third Industrial Cities.",
        marketInsight: "Aramco's well-completion programs, the Jafurah unconventional gas development and constant upgrade of GOSPs (gas-oil separation plants) drive sustained demand for ASNT Level III consulting in API 5L line-pipe inspection, API Spec Q1 supplier audits, and sour-service material verification per NACE MR0175 / ISO 15156. Dammam-based fabricators routinely need Level III sign-off to qualify for Aramco's IRMS approved vendor list.",
        regionalChallenge: "Procedure approval here is gated by Aramco's Inspection Department and the SAES family of standards. Consultants must be fluent in 01-SAMSS, 02-SAMSS and the practical realities of inspecting equipment built for high-H2S service, sea-water cooling, and the desert thermal cycle."
    },
    "khobar": {
        intro: "Al Khobar serves as the residential and commercial base for the engineering services community supporting Saudi Aramco's Dhahran headquarters. The city hosts the Middle East offices of Schlumberger, Halliburton, Baker Hughes, Weatherford, McDermott, Worley and the major NDT vendors, making it a logistical hub for inspection mobilisation across the Eastern Province.",
        marketInsight: "Khobar-based EPCs and well-services contractors regularly need ASNT Level III consultants to sign and approve NDT procedures for Aramco bids, support pre-job qualifications, and provide technical authority for high-end advanced UT (PAUT/TOFD), digital radiography, and corrosion-under-insulation (CUI) inspection campaigns.",
        regionalChallenge: "The competitive bid environment in Khobar demands turn-around of audit-ready procedures and personnel qualification records on tight timelines. Consultants must align documentation with both Aramco's SAES standards and the international codes (ASME, API, ISO 9712) that international contractors bring to the table."
    },
    "ras-tanura": {
        intro: "Ras Tanura is home to one of the largest oil refineries and crude export terminals in the world, anchoring Saudi Aramco's downstream operations on the Arabian Gulf. The refinery, the gas plant, the bulk plant and the deep-water Sea Island terminal together handle a meaningful fraction of global seaborne crude.",
        marketInsight: "Continuous turnaround cycles at Ras Tanura, plus the proximity of Abqaiq's stabilisation trains and Ras Al-Khair industrial city, generate persistent demand for Level III consulting on RBI program updates under API 580/581, FFS for aged reformer and FCC equipment per API 579, and inspection planning for offshore loading platforms, mooring buoys and submarine pipelines.",
        regionalChallenge: "Tide-zone corrosion, salt fog, and the operational sensitivity of an export terminal handling more than a percent of global oil supply mean inspection windows are short and procedural rigour is unforgiving. Consultants must understand both refinery and marine-terminal inspection codes (API 570, API 653, DNV)."
    },
    "jebel-ali": {
        intro: "Jebel Ali Free Zone (JAFZA) and Jebel Ali Port form the largest man-made harbour in the world and the busiest container port between Singapore and Rotterdam. The adjacent industrial area hosts ENOC's refinery and terminals, EMARAT, EGA's aluminium smelter at Jebel Ali, DEWA's M-Station power and desalination complex, and hundreds of oilfield services, fabrication and steel-structure yards.",
        marketInsight: "ENOC's condensate refinery, EGA's smelter pots and rectifiers, and DEWA's combined-cycle plants drive steady consulting demand for ASNT Level III oversight of in-service inspection programs under API 510/570/653 and EFCC, plus boiler and pressure-vessel surveys for DEWA. JAFZA fabricators servicing Middle East EPCs require Level III approval of welding and NDT procedures to meet international client codes (ASME, EN, DNV).",
        regionalChallenge: "Jebel Ali's environment combines coastal humidity, brackish-water intake systems, and high-temperature compressor service. Consultants must navigate the UAE's MoIAT registration scheme, civil-defence and DEWA permitting, and increasingly bind their work to EmiratesIA Level III certification alongside ASNT credentials."
    },
    "mussafah": {
        intro: "Mussafah Industrial Area in Abu Dhabi is the largest oilfield-services and heavy-fabrication hub in the UAE, home to Senaat, Emirates Steel, Lamprell yards, and hundreds of ADNOC-approved contractors. The area supplies skids, pressure vessels, modules, line pipe and structural fabrications to ADNOC's onshore, offshore and downstream operations.",
        marketInsight: "ADNOC's contractor-qualification regime — including 30-04 and 30-99 NDT standards — drives constant demand for Level III consultants who can write and approve procedures that pass ADNOC Inspection Department review, supervise PAUT/TOFD qualification on representative weld coupons, and develop NDT personnel certification schemes aligned with ISO 9712 and CSWIP.",
        regionalChallenge: "Mussafah's fabricators serve simultaneous projects under ADNOC, Aramco, Petrobras and European codes. Consultants must reconcile ADNOC AGES-SP-09-007, Aramco 01-SAMSS, ASME B31.3 and EN 13445 weld acceptance criteria — and translate findings into procedures fabricators can actually execute on a busy yard floor."
    },
    "ruwais": {
        intro: "Ruwais Industrial City on Abu Dhabi's western coast hosts ADNOC Refining (one of the world's largest single-site refineries), Borouge (polyolefins), Fertiglobe (urea/ammonia) and the upcoming Ruwais LNG and Ta'ziz chemicals projects. The Ruwais expansion is among the largest downstream capital programmes in the world.",
        marketInsight: "Ruwais 2030 expansion, the Borouge 4 project and the Ta'ziz chemicals platform create continuous demand for Level III consultants in greenfield welder qualification per ASME IX, PWHT and hardness surveys, NACE MR0175 sour-service compliance, and in-service RBI / FFS programs for the mature refinery trains.",
        regionalChallenge: "Coastal salt fog, sour-service materials, ammonia and cryogenic LNG service all coexist on a single industrial estate. Consultants must master ADNOC's AGES and AOSR standards, support both Asian-EPC and Western-EPC contractor models, and operate inside Ruwais's strict permit-to-work and security regime."
    },
    "sharjah": {
        intro: "Sharjah hosts Sharjah National Oil Corporation (SNOC), Crescent Petroleum and Dana Gas — the UAE's largest private upstream and midstream operators — alongside the Hamriyah Free Zone's heavy fabrication and oilfield-services cluster. The Sajaa gas plant and the new Sharjah LNG import terminal anchor a growing midstream footprint.",
        marketInsight: "SNOC's Mahani and Moveyeid gas developments, plus Sharjah's LNG import infrastructure, create steady consulting demand for ASNT Level III procedure approval, API 510/570 in-service inspection programs and CO2/H2S material verification per NACE MR0175. Hamriyah fabricators chasing Aramco and ADNOC pre-qualification rely on Level III consultants for QMS and NDT procedure approval.",
        regionalChallenge: "Sharjah's mid-sized operators expect Level III consultants who can deliver Aramco/ADNOC-grade rigour with the agility of a smaller team. Coastal humidity, lean inspection budgets and the need to support multiple operator codes (SNOC, ADNOC, Aramco) in parallel require versatile consulting expertise."
    },
    "manama": {
        intro: "Manama is the operational hub for Bahrain Petroleum Company (BAPCO), which is completing the multi-billion-dollar Bahrain Modernization Program — one of the most significant downstream upgrades in the GCC. Aluminium Bahrain (Alba) and Tatweer Petroleum, the operator of the legacy Bahrain Field, round out the industrial base.",
        marketInsight: "BAPCO's modernization adds new hydrocrackers, hydrotreaters and sulphur recovery units that all require Level III consulting on welder qualification, PWHT verification, advanced UT for thick-wall hydrocracker shells, and HTHA monitoring per API RP 941. Alba's Line 6 expansion and Tatweer's enhanced-oil-recovery programme add steady RBI / FFS workload.",
        regionalChallenge: "Bahrain combines refinery, smelter and mature-field upstream operations on a single island, with tight tide-zone corrosion, salt fog and high ambient temperatures. Consultants must reconcile BAPCO's specifications with ASME, API and DNV codes used by international EPCs delivering the modernization program."
    },
    "muscat": {
        intro: "Muscat is the headquarters of Petroleum Development Oman (PDO), Oman LNG, OQ (Oman's integrated energy company) and the Ministry of Energy and Minerals. The capital coordinates Oman's mature onshore oilfields, the Mukhaizna and Marmul EOR projects, the Qalhat LNG complex and the new petrochemical investments at Sohar and Duqm.",
        marketInsight: "PDO's continuous well-completion and pipeline integrity programs, OQ's Liwa Plastics complex and Oman LNG's debottlenecking projects drive consistent demand for Level III consulting on API 570 in-service piping inspection, sour-service material verification, and ISO 9712-based personnel certification. Oman's local-content (ICV) programme adds knowledge-transfer obligations to most consulting scopes.",
        regionalChallenge: "Oman's mature fields use steam-assisted EOR with extreme thermal and erosion challenges; the cryogenic LNG side carries different code obligations. Consultants must navigate Omani local-content rules, ICV reporting, and the practical mobilisation logistics of remote Wusta and Dhofar fields."
    },
    "pune": {
        intro: "Pune anchors Maharashtra's automotive, heavy-engineering and aerospace cluster. The city hosts Tata Motors, Bajaj Auto, Bharat Forge, Mahindra & Mahindra, Thermax, Kirloskar, and the Indian Air Force's Lohegaon base, while the Talegaon and Chakan industrial belts host hundreds of Tier-1 suppliers to global OEMs.",
        marketInsight: "India's defence-manufacturing push (HAL, DRDO, BEL programs), the Tata Air India Airbus assembly project and ongoing automotive electrification create growing demand for Level III consulting in aerospace NDT (NAS 410), forging inspection, casting RT and UT, and welding qualification under ASME IX, AWS D1.1 and EN 15614.",
        regionalChallenge: "Pune's manufacturers serve simultaneous customer codes — Boeing, Airbus, Caterpillar, GE, Daimler — each with its own NDT requirements. Consultants here must translate global aerospace and automotive standards into procedures Indian shop floors can execute, while supporting ISO 9712 / Indian Society for NDT (ISNT) personnel certification."
    },
    "vadodara": {
        intro: "Vadodara (Baroda) sits at the centre of Gujarat's petrochemical and chemical industrial corridor, with IOCL's Gujarat Refinery, Gujarat State Fertilizer Corporation (GSFC), ONGC, Reliance, GACL, IPCL and dozens of specialty-chemical plants. The Petroleum, Chemicals and Petrochemical Investment Region (PCPIR) and the Dahej / Hazira clusters connect through Vadodara.",
        marketInsight: "IOCL Gujarat Refinery's BS-VI revamp, GSFC's ammonia/urea revamps and the PCPIR expansion drive steady consulting demand for API 510/570/653 in-service inspection, RBI per API 580, FFS per API 579-1 for ageing pressure equipment, and welder qualification under ASME IX. The chemical-park ecosystem also generates significant PMI and HIC survey work.",
        regionalChallenge: "Monsoon-driven CUI, the high temperatures of Gujarat summers, and the mix of legacy 1960s plants alongside modern grass-roots units require consultants familiar with both PESO/IBR/IBR-1950 statutory inspection obligations and international API/ASME RBI frameworks."
    },
    "fort-mcmurray": {
        intro: "Fort McMurray is the operational base for Canada's oil sands — Suncor, Syncrude, Canadian Natural Resources (CNRL), Imperial Oil, MEG Energy and Cenovus. The surrounding mines and SAGD (steam-assisted gravity drainage) developments feed upgraders, dilbit pipelines and the Trans Mountain export system.",
        marketInsight: "Oil-sands upgraders host some of the most punishing inspection environments in industry — high-temperature hydrogen, naphthenic-acid corrosion, sulphidation, and erosion-corrosion in slurry service. Consulting demand here focuses on API 510 / API 570 / API 580 RBI, FFS per API 579, HTHA monitoring per API RP 941, and weld procedure qualification per CSA W178.2 alongside ASME IX.",
        regionalChallenge: "Sub-arctic winter temperatures, fly-in/fly-out crew logistics, and Canadian provincial pressure-equipment legislation (ABSA in Alberta) mean consultants must combine deep technical expertise with strong familiarity with CSA codes, Alberta Pressure Equipment Safety Regulation, and the Authorized Inspection Body framework."
    },
    // === Consulting day-2 expansion 2026-05-24 — 10 enriched city contexts (Saudi/Kuwait/Indonesia/Malaysia/Vietnam/India) ===
    "shaybah": {
        intro: "Shaybah is Saudi Aramco's flagship Empty Quarter (Rub' al-Khali) oilfield, producing roughly 1 million barrels per day of Arabian Extra Light crude from a remote desert complex 800 km southeast of Dhahran. The field includes three gas-oil separation plants (GOSPs), the world's largest single-train NGL recovery plant (~275 MBPD), and dedicated power and water infrastructure that runs entirely off-grid.",
        marketInsight: "Shaybah's NGL expansion, the upcoming Jafurah unconventional gas integration and Aramco's continuous well-completion program drive sustained consulting demand for ASNT Level III oversight of API 5L / API 5CT line-pipe and OCTG inspection, sour-service material verification per NACE MR0175 / ISO 15156, HIC and SSC test interpretation, and welding qualification on duplex and CRA materials. RBI under API 580/581 for the GOSPs and FFS per API 579-1 for legacy equipment round out the workload.",
        regionalChallenge: "Working Shaybah means flying contractors into a sand-sea airstrip, executing inspection campaigns in 50°C summer heat and managing equipment that has to perform without realistic short-notice maintenance support. Consultants must align procedures with Aramco SAEP, 01-SAMSS, 02-SAMSS and the practical realities of a fly-in/fly-out workforce — and design RBI and FFS programs that minimise unplanned shutdown of a strategically critical national asset."
    },
    "khurais": {
        intro: "Khurais is Saudi Aramco's second-largest onshore oilfield, producing approximately 1.5 million barrels per day of Arabian Light crude. The complex integrates three GOSPs (Khurais, Abu Jifan and Mazalij), one of the world's largest sea-water injection systems (~4.5 MBPD of injected water from Qurayyah), and dedicated gas processing for associated and non-associated gas.",
        marketInsight: "Continuous in-service inspection of Khurais's seawater-injection trunk lines, GOSP separators, dehydration units and high-pressure gas compression trains creates steady Level III consulting demand under API 570 for piping, API 510 for pressure vessels and API 580/581 for RBI. The 2019 Abqaiq–Khurais incident produced ongoing security-and-integrity reviews — adding consulting workload around critical-equipment hardening, redundant inspection planning and FFS per API 579-1 for damaged or repaired components.",
        regionalChallenge: "Khurais sits in a high-water-cut, high-bicarbonate-corrosion environment with massive seawater-injection infrastructure that is particularly sensitive to internal corrosion, MIC and erosion-corrosion. Consultants here must combine deep familiarity with Aramco's SAES family and 01/02-SAMSS material standards with practical experience in CRA cladding inspection, IRIS / EMAT tube inspection for heat exchangers, and the logistical reality of mobilising crews across hundreds of kilometres of remote desert pipeline."
    },
    "al-zour": {
        intro: "Al-Zour on Kuwait's southern coast is home to KIPIC's Al-Zour Refinery — at 615,000 BPD the largest refinery in the Middle East — alongside the new Al-Zour LNG import terminal (the largest in the Middle East at 22 MTPA capacity) and a large IWPP (independent water and power project). KIPIC, a subsidiary of Kuwait Petroleum Corporation, operates the integrated complex as the cornerstone of Kuwait's Clean Fuels Project.",
        marketInsight: "Al-Zour's Phase 1 commissioning and Phase 2 ramp-up create intense, sustained demand for Level III consulting on weld procedure qualification per ASME IX, PWHT and hardness surveys per NACE MR0175 for sour service, HTHA monitoring per API RP 941, and FFS per API 579-1 for new units bedding in. The LNG import side adds cryogenic piping and tank inspection workload under API 625 and API 620. Critical RBI programs under API 580/581 are being stood up for the first time across the complex.",
        regionalChallenge: "Al-Zour's coastal location, sour Kuwaiti heavy crude feed, very-high-sulphur fuel oil legacy operations and the integration of refining + LNG + power on a single site demand consultants fluent in KOC, KNPC and KIPIC specifications alongside ASME, API and DNV codes. Hurricane-grade wind events from shamal storms, salt-fog atmospheric corrosion and the political sensitivity of Kuwait's largest single capital project keep audit rigour at the maximum."
    },
    "cilacap": {
        intro: "Cilacap on Java's south coast is the largest refinery in Indonesia — Pertamina Refinery Unit IV (RU-IV) — with crude distillation capacity of 348,000 BPD, integrated lube-oil base-stock production, and the country's main aviation-fuel and asphalt manufacturing units. The refinery sits inside Pertamina's RDMP (Refinery Development Master Plan) modernization programme alongside Balikpapan and Balongan.",
        marketInsight: "Pertamina's RDMP-Cilacap upgrade (in partnership with Saudi Aramco) and the ongoing turnaround cycle for RU-IV's CDU, HCU and FCC units drive sustained Level III consulting demand on API 510/570/653 in-service inspection, RBI per API 580/581, HTHA monitoring on hydrotreater reactors per API RP 941 and FFS per API 579-1 for the heavily-cycled lube-oil units. Welder qualification under ASME IX and SNI Indonesian welding standards is a recurring consulting workload.",
        regionalChallenge: "Cilacap's location on the seismically active south Javan coast, with monsoon humidity and salt fog from the Indian Ocean, makes CUI, external chloride SCC of austenitic piping and seismic-event-driven FFS critical inspection drivers. Consultants must reconcile Migas (Indonesian oil & gas directorate) and SNI codes with API/ASME and the Aramco specifications imported via the RDMP partnership — a multi-code environment that rewards experienced authority figures."
    },
    "pengerang": {
        intro: "Pengerang Integrated Complex (PIC) in southern Johor is the centrepiece of Petronas's RAPID downstream investment — a 300,000 BPD refinery, a 3 MTPA steam cracker, derivatives plants, an LNG regasification terminal and the Pengerang Deepwater Petroleum Terminal. The JV with Saudi Aramco makes PRefChem one of Asia's largest integrated refining-and-petrochemical complexes.",
        marketInsight: "PIC's startup-and-stabilisation phase, the ongoing Pengerang Energy Complex (PEC) Phase 2 buildout and the Petronas LNG bunkering hub create sustained Level III consulting demand for ASME IX weld qualification on cracker and reactor welds, API 510/570/580/653 inspection program design for new units bedding in, FFS per API 579-1 for any early-life issues, and personnel certification per ISO 9712, CSWIP and PCN as international contractors rotate through the site.",
        regionalChallenge: "Pengerang combines Aramco specifications (via the JV), Petronas Technical Standards (PTS), JKKP Malaysian regulatory codes and the international EPC code book (ASME, API, DNV, EN) on a single integrated site. Consultants must operate fluently across all four traditions, support a mostly Malaysian workforce with rotating international SMEs, and design RBI / FFS programs that fit Malaysia's PESO equivalent (JKKP) statutory inspection regime."
    },
    "bintulu": {
        intro: "Bintulu in Sarawak hosts the Petronas LNG Complex — at 30 MTPA the world's second-largest single-site LNG operation — alongside Shell's Middle Distillate Synthesis (MDS) gas-to-liquids plant, ASEAN Bintulu Fertilizer (ABF) urea-ammonia complex, and Sarawak's major petrochemical and methanol production. The Bintulu Port and the offshore Sarawak gas fields feed the complex.",
        marketInsight: "MLNG's plant-life extension programmes, the Shell MDS turnaround cycles and ABF's ammonia / urea revamps generate consistent Level III consulting demand on cryogenic piping and storage tank inspection per API 625 / API 620, FFS per API 579-1 for ageing LNG trains, HTHA monitoring of MDS hydrogen service per API RP 941, and welder qualification per ASME IX with Petronas PTS overlays. Personnel certification under ISO 9712, JKKP and ASNT SNT-TC-1A is a recurring scope.",
        regionalChallenge: "Bintulu combines cryogenic LNG service, high-pressure hydrogen, ammonia/urea sour service and a tropical-rainforest climate with daily heavy rainfall — a combination that drives aggressive CUI, microbial corrosion of cooling-water systems and brittle-fracture risk in older LNG trains. Consultants must navigate Petronas PTS, Malaysian JKKP regulatory codes, Shell DEPs and the contracting standards of the JV partners simultaneously."
    },
    "jamnagar": {
        intro: "Jamnagar in Gujarat hosts Reliance Industries' twin-refinery complex — at a combined ~1.4 million BPD capacity, the largest refining hub in the world — plus the integrated petrochemical complex, the world's largest paraxylene plant, and Essar Oil's Vadinar refinery 40 km west. The cluster also includes major LNG receiving and crude import infrastructure on the Gulf of Kachchh.",
        marketInsight: "Reliance's continuous turnaround cycles across DTA and SEZ refineries, the J3 cracker integration and the Essar/Nayara Vadinar revamps drive intense consulting demand for API 510/570/580/653 in-service inspection and RBI program design, FFS per API 579-1 for high-temperature hydrocracker and FCC equipment, HTHA monitoring per API RP 941, and welder qualification per ASME IX. The hydrogen-and-petrochemicals expansion adds significant cryogenic and high-pressure inspection scope.",
        regionalChallenge: "Jamnagar's coastal Gulf-of-Kachchh location with high-chloride atmospheres, monsoon-driven CUI, and the operational scale of running the world's largest refinery without unplanned downtime keep procedural rigour at a maximum. Consultants must reconcile PESO/IBR/IBR-1950 statutory Indian inspection obligations with international API/ASME RBI frameworks, support both Reliance's internal RIL-Spec and the international JV partner specifications, and design FFS programs that survive Gujarat State Pollution Control Board and PNGRB regulatory scrutiny."
    },
    "ahmedabad": {
        intro: "Ahmedabad anchors Gujarat's industrial growth corridor, with the GSPC LNG terminal at Mundra, ONGC's Ahmedabad asset, Cairn Vedanta's Rajasthan crude pipelines passing through, Torrent Power's combined-cycle plants, and a dense pharmaceutical and specialty-chemical manufacturing base. The Sanand and Becharaji automotive clusters add structural-steel and forging NDT requirements.",
        marketInsight: "Gujarat's PCPIR programme, GSPC's gas pipeline expansion, Adani Group's port and power assets and ONGC's onshore production all generate steady Level III consulting demand for API 570 in-service piping inspection, API 653 storage-tank programmes, RBI per API 580/581 for compressor stations and metering skids, and welder qualification per ASME IX and IBR for combined-cycle power assets. Pharmaceutical reactor and clean-utility piping inspection per ASME BPE adds a parallel revenue stream.",
        regionalChallenge: "Ahmedabad consulting demands fluency across PESO, OISD, IBR (Indian Boiler Regulations), CPCB and PNGRB regulatory frameworks alongside API/ASME. Monsoon-driven CUI, the diverse mix of automotive, pharmaceutical, petrochemical and power-sector clients, and the practical reality of supporting Hindi/Gujarati-speaking shop floors mean consultants must combine deep code knowledge with strong cross-sector adaptability and local-language documentation support."
    },
};

// Generic fallback for locations without specific content
// Helper function to generate dynamic location content for unmapped locations
const generateDynamicConsultingContent = (location: any): { intro: string; marketInsight: string; regionalChallenge: string } => {
    const { name, industries, region, companies } = location;
    const primaryIndustry = industries[0] || 'industrial';
    const secondaryIndustry = industries[1] || 'manufacturing';
    const mainCompanies = companies.slice(0, 2).join(' and ');

    return {
        intro: `${name} serves as a significant hub for the ${primaryIndustry.toLowerCase()} and ${secondaryIndustry.toLowerCase()} sectors, with major facilities requiring rigorous NDT programs to ensure operational safety, regulatory compliance, and asset integrity management. The ${region} region's industrial landscape demands comprehensive Level III consulting expertise.`,
        marketInsight: `Investment in ${primaryIndustry.toLowerCase()} operations and ongoing modernization across ${secondaryIndustry.toLowerCase()} facilities in the ${region} region create sustained demand for qualified Level III consulting expertise. Major operators including ${mainCompanies} require specialized NDT program development and compliance support.`,
        regionalChallenge: `The ${region} industrial environment presents unique inspection challenges including climate-specific corrosion factors, regulatory requirements aligned with international and regional standards, and the complexity of diverse equipment and applications. Experienced consultants familiar with both ${industries.join(' and ')} sector requirements are essential for effective NDT program management in ${name}.`
    };
};

const defaultLocationContent = {
    intro: "This strategic location serves as a significant hub for industrial operations, with major facilities requiring rigorous NDT programs to ensure operational safety and regulatory compliance.",
    marketInsight: "Growing infrastructure investment and evolving regulatory requirements create sustained demand for qualified Level III consulting expertise in this region.",
    regionalChallenge: "Local environmental conditions throughout this region and the complexity of industrial operations require experienced consultants familiar with both international standards and regional practices."
};

const colorMap: Record<string, { bg: string; text: string; light: string; border: string }> = {
    amber: { bg: "from-amber-700 to-amber-900", text: "text-amber-600", light: "bg-amber-50", border: "border-amber-500" },
    blue: { bg: "from-blue-700 to-blue-900", text: "text-blue-600", light: "bg-blue-50", border: "border-blue-500" },
    purple: { bg: "from-purple-700 to-purple-900", text: "text-purple-600", light: "bg-purple-50", border: "border-purple-500" },
    emerald: { bg: "from-emerald-700 to-emerald-900", text: "text-emerald-600", light: "bg-emerald-50", border: "border-emerald-500" },
    green: { bg: "from-green-700 to-green-900", text: "text-green-600", light: "bg-green-50", border: "border-green-500" },
    indigo: { bg: "from-indigo-700 to-indigo-900", text: "text-indigo-600", light: "bg-indigo-50", border: "border-indigo-500" },
    orange: { bg: "from-orange-700 to-orange-900", text: "text-orange-600", light: "bg-orange-50", border: "border-orange-500" },
    rose: { bg: "from-rose-700 to-rose-900", text: "text-rose-600", light: "bg-rose-50", border: "border-rose-500" },
    red: { bg: "from-red-700 to-red-900", text: "text-red-600", light: "bg-red-50", border: "border-red-500" },
    slate: { bg: "from-slate-700 to-slate-900", text: "text-slate-600", light: "bg-slate-50", border: "border-slate-500" }
};

const consultingServices = [
    {
        title: "Written Practice & Procedure Development",
        description: "Development and review of NDT written practices and procedures compliant with ASNT SNT-TC-1A, CP-189, NAS-410, and industry-specific codes including API, ASME Section V, and AWS D1.1. Our Level III consultants create customized documentation that addresses your specific equipment, personnel qualifications, and inspection requirements.",
        icon: FileText
    },
    {
        title: "NDT Program Audits & Assessments",
        description: "Comprehensive third-party audits of existing NDT programs to identify compliance gaps, improvement opportunities, and risk areas. We evaluate personnel qualifications, equipment calibration records, procedure adequacy, and documentation practices against applicable codes and client specifications.",
        icon: Shield
    },
    {
        title: "Technique Development & Qualification",
        description: "Custom NDT technique development for challenging applications including complex geometries, dissimilar metal welds, high-temperature components, and composite materials. Includes demonstration testing and written qualification records per ASME Section V Article 14 or equivalent.",
        icon: Target
    },
    {
        title: "Personnel Certification Program Management",
        description: "Design and implementation of employer-based certification programs per SNT-TC-1A, CP-189, or ISO 9712. Includes training curriculum development, examination preparation, practical demonstration requirements, and ongoing re-certification management.",
        icon: Award
    },
    {
        title: "Expert Witness & Litigation Support",
        description: "Technical expert services for legal proceedings involving NDT-related disputes, failure analysis investigations, and insurance claims. Our Level III experts provide depositions, written opinions, and courtroom testimony on inspection adequacy and industry standards.",
        icon: Users
    },
    {
        title: "Regulatory Compliance & Code Interpretation",
        description: "Guidance on regulatory compliance for API 510/570/653, ASME Section V, AWS D1.1/D1.5, ASNT standards, and client-specific requirements. We help organizations understand code requirements and implement compliant inspection programs.",
        icon: BookOpen
    }
];

const whyChoosePoints = [
    {
        title: "50+ Certified Level III Experts",
        description: "Access our global network of ASNT Level III certified professionals with expertise across all conventional and advanced NDT methods."
    },
    {
        title: "30+ Years Industry Experience",
        description: "Decades of hands-on experience in oil & gas, petrochemical, power generation, aerospace, and manufacturing inspection programs."
    },
    {
        title: "Code Committee Participation",
        description: "Our consultants actively participate in ASNT, API, and ASME code committees, ensuring current knowledge of evolving standards."
    },
    {
        title: "Rapid Response Availability",
        description: "Emergency consulting support available for urgent audit preparation, incident investigation, and regulatory compliance issues."
    }
];

interface ConsultingLocationPageProps {
    locationSlug: string;
}

export default function ConsultingLocationPage({ locationSlug }: ConsultingLocationPageProps) {
    const location = keyLocations.find(l => l.slug === locationSlug);

    if (!location) {
        return <div>Location not found</div>;
    }

    const colors = colorMap[location.color] || colorMap.slate;

    // Location-specific optimized titles and descriptions for better CTR
    // 2026-05-24: titles rewritten to lead with API codes (510/570/580/653/579) and RBI/FFS
    // which are the top consulting search intents driving 9%+ CTR on /ndt-consulting-accra
    const titleMap: Record<string, string> = {
        "houston": "NDT Consulting Houston — ASNT Level III, API 510/570/653 RBI, FFS Audits | Atlantis NDT",
        "dubai": "NDT Consulting Dubai — ASNT Level III, API 510/570/580/653 RBI, FFS Audits | Atlantis NDT",
        "saudi-arabia": "NDT Consulting Saudi Arabia — ASNT Level III, API RBI, FFS per API 579 | Atlantis NDT",
        "singapore": "NDT Consulting Singapore — ASNT Level III, API 510/570/653 RBI, FFS Audits | Atlantis NDT",
        "abu-dhabi": "NDT Consulting Abu Dhabi — ASNT Level III, API 510/570/580/653 RBI, FFS Audits | Atlantis NDT",
        "dallas": "NDT Consulting Dallas — ASNT Level III, API 510/570/653 RBI, FFS Audits | Atlantis NDT",
        "nigeria": "NDT Consulting Nigeria — ASNT Level III, API RBI, Offshore FFS Audits | Atlantis NDT"
    };

    const descMap: Record<string, string> = {
        "houston": "Atlantis NDT consulting in Houston: ASNT Level III SME support, API 510/570/580/653 RBI program design, fitness-for-service per API 579, code consulting. Trusted by Gulf Coast refiners. Quote: info@atlantisndt.com",
        "dubai": "Atlantis NDT consulting in Dubai: ASNT Level III SME support, API RBI program design, fitness-for-service per API 579, code consulting. Trusted by UAE oil & gas operators. Quote: info@atlantisndt.com",
        "saudi-arabia": "Atlantis NDT consulting in Saudi Arabia: ASNT Level III SME support, API 510/570/653 RBI design, FFS per API 579, Aramco SAEP compliance. Quote: info@atlantisndt.com",
        "singapore": "Atlantis NDT consulting in Singapore: ASNT Level III SME support, API RBI program design, fitness-for-service per API 579, code consulting. Trusted by Jurong Island operators. Quote: info@atlantisndt.com",
        "abu-dhabi": "Atlantis NDT consulting in Abu Dhabi: ASNT Level III SME, API RBI program design, FFS per API 579, ADNOC code consulting. Quote: info@atlantisndt.com",
        "dallas": "Atlantis NDT consulting in Dallas: ASNT Level III SME support, API 510/570/653 RBI design, FFS per API 579, NAS 410 aerospace consulting. Quote: info@atlantisndt.com",
        "nigeria": "Atlantis NDT consulting in Nigeria: ASNT Level III SME, API RBI program design, offshore FFS per API 579, NCDMB local content. Quote: info@atlantisndt.com"
    };

    // Cascade CTR formula — applies to all consulting city pages without an explicit titleMap entry
    const pageTitle = titleMap[location.slug] || `NDT Consulting in ${location.name} — ASNT Level III, API 510/570/580/653 RBI, FFS Audits | Atlantis NDT`;
    const pageDesc = descMap[location.slug] || `Atlantis NDT consulting in ${location.name}: ASNT Level III SME support, API RBI program design, fitness-for-service per API 579, code consulting. Trusted by ${location.industries[0].toLowerCase()} operators. Quote: info@atlantisndt.com`;
    const keywords = `NDT consulting ${location.name}, Level III consulting ${location.name}, NDT procedure development ${location.name}, NDT audit ${location.name}, ASNT consulting ${location.name}, NDT expert witness ${location.name}`;
    const canonical = `https://atlantisndt.com/consulting/ndt-consulting-${location.slug}`;

    // Generate hreflang links for multi-regional SEO
    const hreflangLinks = [
        { hreflang: `en-${location.country}`, href: canonical },
        { hreflang: 'x-default', href: canonical },
        { hreflang: 'en', href: canonical }
    ];

    const faqs = [
        {
            question: `What NDT consulting services do you offer in ${location.name}?`,
            answer: `We provide comprehensive NDT Level III consulting services in ${location.name} including written practice and procedure development per SNT-TC-1A and CP-189, third-party NDT program audits, technique development and qualification, personnel certification program management, expert witness services, and regulatory compliance guidance for API, ASME, and AWS codes. Our consultants have extensive experience with ${location.industries.join(", ")} applications specific to the ${location.region} region.`
        },
        {
            question: `Do you provide on-site NDT consulting in ${location.name}?`,
            answer: `Yes, our Level III consultants are available for on-site engagements throughout ${location.name} and the broader ${location.region} region. We offer both short-term project support and long-term embedded consulting arrangements. Remote consulting services are also available for documentation review, procedure development, and technical guidance when on-site presence is not required.`
        },
        {
            question: `Which industries do you serve in ${location.name}?`,
            answer: `We serve ${location.industries.join(", ")} and related sectors requiring NDT expertise in ${location.name}. Our consultants have direct experience with major operators in the region including ${location.companies.slice(0, 2).join(" and ")}, understanding local regulatory requirements and industry-specific inspection challenges.`
        },
        {
            question: "Can you develop employer-based NDT certification programs?",
            answer: "Absolutely. We specialize in designing and implementing employer-based NDT certification programs compliant with ASNT SNT-TC-1A, CP-189, ISO 9712, or NAS-410 requirements. This includes developing training curricula, written and practical examinations, qualification records, and ongoing recertification procedures tailored to your organization's specific needs and inspection scope."
        },
        {
            question: "How quickly can you respond to urgent consulting needs?",
            answer: "We maintain rapid response capability for urgent situations including pre-audit preparation, regulatory compliance issues, and incident investigations. For emergency consulting needs, we can typically deploy a qualified Level III consultant within 24-72 hours depending on location and availability. Contact us directly for time-sensitive requirements."
        },
        {
            question: "What certifications do your consultants hold?",
            answer: "Our consultants hold ASNT Level III certifications in multiple NDT methods including UT, RT, MT, PT, ET, and VT. Many also hold additional credentials including API 510/570/653 certifications, AWS CWI, CSWIP, and PCN qualifications. All consultants meet or exceed the experience requirements specified in SNT-TC-1A for their respective certification levels."
        }
    ];

    const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "ProfessionalService",
                "name": `NDT Level III Consulting in ${location.name}`,
                "provider": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "url": "https://atlantisndt.com"
                },
                "description": pageDesc,
                "areaServed": {
                    "@type": "Place",
                    "name": location.name
                },
                "serviceType": "NDT Level III Consulting",
                "hasOfferCatalog": {
                    "@type": "OfferCatalog",
                    "name": "NDT Consulting Services",
                    "itemListElement": consultingServices.map(service => ({
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": service.title
                        }
                    }))
                }
            },
            {
                "@type": "LocalBusiness",
                "@id": `https://atlantisndt.com/consulting/ndt-consulting-${location.slug}#business`,
                "name": `Atlantis NDT - ${location.name}`,
                "description": `Professional NDT consulting services in ${location.name}`,
                "url": `https://atlantisndt.com/ndt-consulting-${location.slug}`,
                "telephone": "+1-281-840-8969",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": location.name,
                    "addressCountry": location.country
                },
                "priceRange": "$$",
                "parentOrganization": {
                    "@type": "Organization",
                    "name": "Atlantis NDT",
                    "url": "https://atlantisndt.com"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "127",
                    "bestRating": "5"
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    const problemsWeSolve = [
        {
            title: "Audit Non-Conformances",
            description: "Facing procedure deficiencies or personnel qualification issues during third-party or client audits? We help remediate findings and prevent recurrence."
        },
        {
            title: "Inconsistent Inspection Quality",
            description: "Variation in inspector interpretation and technique application? We standardize procedures and provide ongoing technical oversight."
        },
        {
            title: "Regulatory Compliance Gaps",
            description: "Uncertainty about evolving code requirements? We provide current interpretation and implementation guidance for API, ASME, and industry standards."
        },
        {
            title: "Complex Application Challenges",
            description: "Difficult geometries, new materials, or unique inspection scenarios? We develop and qualify custom techniques for challenging applications."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50">
            <Navigation />
      <PillarHubNav active="consulting" />
            <SEOHead
                title={pageTitle}
                description={pageDesc}
                keywords={keywords}
                canonical={canonical}
                structuredData={structuredData}
                hreflangLinks={hreflangLinks}
                noindex={!isCuratedCity(locationSlug)}
            />
            <Breadcrumbs />

            {/* Hero */}
            <section className={`bg-gradient-to-br ${colors.bg} text-white pt-24 pb-16`}>
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                        <div className="flex items-center gap-2 text-white/80 mb-4">
                            <MapPin className="w-5 h-5" />
                            <span>NDT Level III Consulting</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            NDT Level III Consulting in {location.name}
                        </h1>
                        <p className="text-xl text-white/90 max-w-3xl mb-4">
                            Expert ASNT Level III consulting for procedure development, program audits, technique qualification, and technical oversight. Trusted by {location.industries[0].toLowerCase()} leaders across {location.region}.
                        </p>
                        <p className="text-lg text-white/70 max-w-2xl mb-8">
                            Our certified Level III consultants bring 30+ years of combined experience serving {location.industries.join(", ")} industries. We understand the unique inspection challenges and regulatory requirements in {location.name}.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-800 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition text-center shadow-lg">
                                <Phone className="w-5 h-5" />
                                Get Free Quote (24hr Response)
                            </Link>
                            <Link to="/consulting" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition justify-center">
                                <Clock className="w-5 h-5" />
                                View All Consulting Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-12 bg-white border-b">
                <div className="container mx-auto max-w-6xl px-6">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>50+</div><div className="text-slate-600">Certified Level III Experts</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>30+</div><div className="text-slate-600">Years Combined Experience</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>100%</div><div className="text-slate-600">Audit Success Rate</div></div>
                        <div><div className={`text-4xl font-bold ${colors.text} mb-2`}>All</div><div className="text-slate-600">NDT Methods Covered</div></div>
                    </div>
                </div>
            </section>

            {/* Trusted Clients Logos */}
            <section className="py-10 bg-slate-50 border-b">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-8"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide">Trusted by Industry Leaders Worldwide</p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                        {clientLogos.map((client, index) => (
                            <motion.div
                                key={client.name}
                                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 0.7, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <img
                                    src={client.logoUrl}
                                    alt={`${client.name} - NDT Consulting Client`}
                                    className="h-10 md:h-12 w-auto max-w-[140px] object-contain"
                                    loading="lazy"
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location-Specific Content - Unique per location */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-6">NDT Consulting Market in {location.name}</h2>
                        <div className="prose prose-lg max-w-none">
                            <p className="text-slate-700 leading-relaxed mb-6">
                                {locationIntros[location.slug]?.intro || generateDynamicConsultingContent(location).intro}
                            </p>
                            <div className="grid md:grid-cols-2 gap-8 mt-8">
                                <Card className={`border-l-4 ${colors.border}`}>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <Target className={`w-5 h-5 ${colors.text}`} />
                                            Market Insight
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600">
                                            {locationIntros[location.slug]?.marketInsight || generateDynamicConsultingContent(location).marketInsight}
                                        </p>
                                    </CardContent>
                                </Card>
                                <Card className={`border-l-4 ${colors.border}`}>
                                    <CardHeader className="pb-2">
                                        <CardTitle className="text-lg flex items-center gap-2">
                                            <AlertTriangle className={`w-5 h-5 ${colors.text}`} />
                                            Regional Challenges
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600">
                                            {locationIntros[location.slug]?.regionalChallenge || generateDynamicConsultingContent(location).regionalChallenge}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Problems We Solve */}
            <section className="py-16 bg-slate-100">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">NDT Challenges We Help You Solve</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            Organizations in {location.name} trust our Level III consultants to address critical inspection program challenges.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {problemsWeSolve.map((problem, index) => (
                            <motion.div
                                key={problem.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className={`h-full border-l-4 ${colors.border} hover:shadow-lg transition`}>
                                    <CardHeader className="pb-2">
                                        <div className="flex items-center gap-3">
                                            <AlertTriangle className={`w-6 h-6 ${colors.text}`} />
                                            <CardTitle className="text-lg">{problem.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600">{problem.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Level III Consulting Services in {location.name}</h2>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Our ASNT Level III consultants provide comprehensive technical support for {location.industries[0]} and related industries throughout the {location.region} region. Each engagement is tailored to your specific operational requirements and regulatory environment.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {consultingServices.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="h-full hover:shadow-lg transition group">
                                    <CardHeader className="pb-2">
                                        <service.icon className={`w-10 h-10 ${colors.text} mb-3 group-hover:scale-110 transition`} />
                                        <CardTitle className="text-lg">{service.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries & Companies */}
            <section className={`py-16 ${colors.light}`}>
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Industries We Serve in {location.name}</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            {location.name} is a strategic hub for {location.industries.join(", ").toLowerCase()} operations. Our consultants understand the specific inspection challenges, regulatory requirements, and quality expectations of operators in this region.
                        </p>
                    </motion.div>
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {location.industries.map((ind) => (
                            <motion.div
                                key={ind}
                                className="bg-white px-8 py-4 rounded-lg font-semibold shadow-sm border"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                            >
                                {ind}
                            </motion.div>
                        ))}
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h3 className="text-xl font-bold mb-6 text-center">Experience with Major Operators</h3>
                        <p className="text-slate-600 text-center mb-6">
                            Our consultants have direct project experience supporting NDT programs for leading companies in {location.region}:
                        </p>
                        <div className="flex flex-wrap justify-center gap-8">
                            {location.companies.map((company) => (
                                <div key={company} className="flex items-center gap-3 text-slate-700">
                                    <Building className={`w-5 h-5 ${colors.text}`} />
                                    <span className="font-medium">{company}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto max-w-6xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Why Choose Atlantis NDT for Consulting in {location.name}</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto">
                            When your inspection program quality and regulatory compliance are at stake, you need consultants with proven expertise and industry credibility.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-6">
                        {whyChoosePoints.map((point, index) => (
                            <motion.div
                                key={point.title}
                                className="bg-slate-800 p-6 rounded-xl"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <div className="flex items-start gap-4">
                                    <CheckCircle className={`w-6 h-6 ${colors.text} flex-shrink-0 mt-1`} />
                                    <div>
                                        <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                                        <p className="text-slate-400">{point.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 bg-white">
                <div className="container mx-auto max-w-4xl px-6">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-slate-600">Common questions about our NDT consulting services in {location.name}</p>
                    </motion.div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="bg-slate-50 p-6 rounded-lg"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05 }}
                            >
                                <h3 className="font-bold text-lg mb-3">{faq.question}</h3>
                                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related NDT Methods for this Location */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-2xl font-bold mb-6 text-center">Related NDT Services in {location.name}</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Link to={`/ultrasonic-testing-${location.slug}`} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-blue-700">Ultrasonic Testing</h3>
                            <p className="text-sm text-gray-600 mt-1">UT services for weld inspection and thickness gauging</p>
                        </Link>
                        <Link to={`/radiographic-testing-${location.slug}`} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-blue-700">Radiographic Testing</h3>
                            <p className="text-sm text-gray-600 mt-1">RT for weld and casting inspection</p>
                        </Link>
                        <Link to={`/magnetic-particle-testing-${location.slug}`} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-blue-700">Magnetic Particle Testing</h3>
                            <p className="text-sm text-gray-600 mt-1">MT for surface defect detection</p>
                        </Link>
                        <Link to={`/penetrant-testing-${location.slug}`} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-blue-700">Liquid Penetrant Testing</h3>
                            <p className="text-sm text-gray-600 mt-1">PT for surface-breaking flaw detection</p>
                        </Link>
                        <Link to={`/eddy-current-testing-${location.slug}`} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-blue-700">Eddy Current Testing</h3>
                            <p className="text-sm text-gray-600 mt-1">ET for tube and surface inspection</p>
                        </Link>
                        <Link to={`/visual-testing-${location.slug}`} className="p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow">
                            <h3 className="font-semibold text-blue-700">Visual Testing</h3>
                            <p className="text-sm text-gray-600 mt-1">VT for surface condition assessment</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Linking: Locations Network */}
            <section className="py-12 bg-white border-t">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-2xl font-bold text-center mb-6">NDT Consulting Across the United States</h2>
                    <p className="text-slate-600 text-center mb-8 max-w-3xl mx-auto">Atlantis NDT provides Level III consulting services nationwide. Explore our state and city-specific consulting pages for localized expertise.</p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> State Consulting Pages</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    { name: 'Texas', slug: 'texas' }, { name: 'California', slug: 'california' },
                                    { name: 'Louisiana', slug: 'louisiana' }, { name: 'Ohio', slug: 'ohio' },
                                    { name: 'Pennsylvania', slug: 'pennsylvania' }, { name: 'Florida', slug: 'florida' },
                                    { name: 'New York', slug: 'new-york-state' }, { name: 'Illinois', slug: 'illinois' },
                                    { name: 'Michigan', slug: 'michigan' }, { name: 'Colorado', slug: 'colorado' },
                                    { name: 'Georgia', slug: 'georgia' }, { name: 'Virginia', slug: 'virginia' },
                                    { name: 'Alabama', slug: 'alabama' }, { name: 'Tennessee', slug: 'tennessee' },
                                    { name: 'Oklahoma', slug: 'oklahoma' }, { name: 'Washington', slug: 'washington' },
                                    { name: 'New Jersey', slug: 'new-jersey' }, { name: 'North Carolina', slug: 'north-carolina' },
                                    { name: 'Minnesota', slug: 'minnesota' }, { name: 'Wisconsin', slug: 'wisconsin' },
                                ].map(s => (
                                    <Link key={s.slug} to={`/ndt-consulting-${s.slug}`} className="text-sm px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition">
                                        {s.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><Globe className="w-4 h-4 text-blue-600" /> Popular Consulting Cities</h3>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Houston', 'Dallas', 'Los Angeles', 'Chicago', 'Denver', 'Seattle',
                                    'New Orleans', 'Dubai', 'Singapore', 'Mumbai', 'Aberdeen', 'Calgary',
                                    'Austin', 'Midland', 'Orlando', 'Nashville', 'Huntsville', 'Norfolk',
                                ].map(city => {
                                    const citySlug = city.toLowerCase().replace(/\s+/g, '-');
                                    return (
                                        <Link key={citySlug} to={`/consulting/ndt-consulting-${citySlug}`} className="text-sm px-3 py-1.5 bg-slate-100 text-slate-700 rounded-full hover:bg-slate-200 transition">
                                            {city}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="mt-8">
                        <h3 className="font-semibold text-lg mb-3 flex items-center gap-2"><BookOpen className="w-4 h-4 text-blue-600" /> NDT Knowledge Resources</h3>
                        <div className="grid md:grid-cols-3 gap-3">
                            <Link to="/blog/ultrasonic-testing-ultimate-guide" className="text-sm p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition text-slate-700">
                                Ultrasonic Testing Complete Guide
                            </Link>
                            <Link to="/blog/eddy-current-testing-complete-guide" className="text-sm p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition text-slate-700">
                                Eddy Current Testing Guide
                            </Link>
                            <Link to="/blog/api-653-certification-complete-guide" className="text-sm p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition text-slate-700">
                                API 653 Certification Guide
                            </Link>
                            <Link to="/ndt-certification-guide" className="text-sm p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition text-slate-700">
                                NDT Certification Requirements
                            </Link>
                            <Link to="/ndt-complete-guide" className="text-sm p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition text-slate-700">
                                Complete NDT Methods Guide
                            </Link>
                            <Link to="/ndt-standards-comparison" className="text-sm p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition text-slate-700">
                                NDT Standards Comparison
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Pages */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto max-w-6xl px-6">
                    <h2 className="text-3xl font-bold text-center mb-8">Explore Related Services</h2>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link to="/training">
                            <Card className="h-full hover:shadow-lg transition group text-center">
                                <CardHeader>
                                    <Briefcase className={`w-10 h-10 ${colors.text} mx-auto mb-2 group-hover:scale-110 transition`} />
                                    <CardTitle className="text-lg">NDT Training</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">Level I, II, III certification courses per SNT-TC-1A</p></CardContent>
                            </Card>
                        </Link>
                        <Link to="/consulting/ndt-consulting-level-iii">
                            <Card className="h-full hover:shadow-lg transition group text-center">
                                <CardHeader>
                                    <Users className={`w-10 h-10 ${colors.text} mx-auto mb-2 group-hover:scale-110 transition`} />
                                    <CardTitle className="text-lg">Global Level III Consulting</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">Worldwide consulting support and resources</p></CardContent>
                            </Card>
                        </Link>
                        <Link to="/intelligent-reporting-software">
                            <Card className="h-full hover:shadow-lg transition group text-center">
                                <CardHeader>
                                    <Globe className={`w-10 h-10 ${colors.text} mx-auto mb-2 group-hover:scale-110 transition`} />
                                    <CardTitle className="text-lg">Intelligent Reporting</CardTitle>
                                </CardHeader>
                                <CardContent><p className="text-slate-600 text-sm">Advanced NDT reporting and documentation software</p></CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={`py-16 bg-gradient-to-r ${colors.bg} text-white text-center`}>
                <div className="container mx-auto max-w-4xl px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Strengthen Your NDT Program in {location.name}?</h2>
                    <p className="text-white/80 mb-8 text-lg max-w-2xl mx-auto">
                        Our Level III consultants are ready to help with procedure development, program audits, and technical challenges. Request a consultation to discuss your specific requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-slate-800 px-10 py-4 rounded-lg font-semibold hover:bg-slate-100 transition shadow-lg">
                            <Phone className="w-5 h-5" />
                            Get Free Quote (24hr Response)
                        </Link>
                        <a href="mailto:info@atlantisndt.com" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                            <Star className="w-5 h-5" />
                            Email Directly
                        </a>
                    </div>
                </div>
            </section>

            {/* ── Sibling-city cross-links (Digital Twin / ERP / Reporting / Training) ── */}
            <section className="py-8 bg-white border-t border-slate-200">
                <div className="container mx-auto max-w-6xl px-6">
                    <RelatedCityProducts
                        currentProduct="consulting"
                        citySlug={locationSlug}
                        city={location.name}
                    />
                </div>
            </section>

            {/* 2026-05-23: ERP/DT cross-promo block — SEO link-equity distribution */}
            <section className="bg-white py-4">
                <div className="container mx-auto max-w-6xl px-6">
                    <ErpDtCrossPromoBlock
                        relevantApp="Project Management"
                        relevantAppHref="/erp/project-management-for-ndt-companies"
                    />
                </div>
            </section>

            <ContactDetails />
        </div>
    );
}
