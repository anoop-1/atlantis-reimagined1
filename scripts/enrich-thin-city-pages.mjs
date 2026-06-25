#!/usr/bin/env node
/**
 * Enrich thin ERP + DT city pages — add missing entries to erpLocationContext
 * (src/components/ErpLocationPage.tsx) and digitalTwinLocationContext
 * (src/data/dt-city-data.mjs).
 *
 * Reads the gap from identify-thin-city-pages.mjs logic, then appends archetype-
 * derived intro paragraphs to the respective maps.
 *
 * Idempotent — keys already present in maps are skipped.
 */
import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ─── Region archetypes for ERP intro paragraphs ─────────────────────────────

const ERP_REGIONS = {
  'gulf-coast': city => `${city} is a Gulf Coast industrial centre with concentrated refining, petrochem, and downstream activity. NDT inspection contractors in ${city} support API 510 pressure vessel, API 570 piping, and API 653 storage tank programs across operator facilities including ExxonMobil, Chevron, Phillips 66, Marathon, Valero, Shell, Motiva, and LyondellBasell. Atlantis NDT ERP delivers Aramco-, ADNOC-, and US-operator-aligned inspection management with affordable, accessible, fully customizable workflows for cert tracking, work orders, and audit-ready records.`,
  'us-refining': city => `${city} hosts US refining, petrochem, and heavy industrial operations alongside maritime + terminal infrastructure. Inspection contractors in ${city} manage ASNT + API 510 + 570 + 653 + AWS CWI cert rosters, deliver into Phillips 66, ExxonMobil, Chevron, Marathon, and BP operator standards, and handle complex multi-client work-order portfolios. Atlantis NDT ERP — affordable, accessible, fully customizable — automates cert tracking, audit-trail recording, and report assembly for ${city} inspection businesses.`,
  'middle-east': city => `${city} is a Middle East energy + petrochem + offshore hub serving Saudi Aramco, ADNOC, KOC + KNPC, Bapco, NIOC, or QatarEnergy operator standards. NDT inspection contractors in ${city} navigate stringent operator pre-qualification (SAEP, ADNOC Company Standards, KNPC procedures), dual-scheme ASNT + ISO 9712 cert rosters, and high-tempo turnaround + EPC project demand. Atlantis NDT ERP supports operator-format report generation, Aramco/ADNOC-aligned cert tracking, and multi-language reporting — affordable, accessible, fully customizable.`,
  'india-refining': city => `${city} is part of India's industrial corridor with refining, petrochem, heavy fabrication, and offshore + LNG context. Inspection contractors in ${city} manage ISNT + ASNT + API ICP dual-scheme certification rosters, deliver into Reliance, IOCL, BPCL, HPCL, ONGC, and L&T operator standards, and support global EPC modular fabrication. Atlantis NDT ERP — affordable, accessible, fully customizable — automates ISNT/ASNT cert tracking, work-order management, and multi-client report assembly for ${city} inspection businesses.`,
  'india-other': city => `${city} anchors regional industrial + infrastructure + heavy fabrication activity in India. Inspection businesses serve refining + petrochem + manufacturing + metro/rail + nuclear + aerospace operators alongside heavy-fab EPC modular work. Atlantis NDT ERP supports ${city} contractors with ISNT + ASNT dual-scheme cert tracking, BARC + DGCA + PESO compliance, and multi-sector workflow management — affordable, accessible, fully customizable.`,
  'china-heavy': city => `${city} is part of China's industrial + petrochem + heavy-fabrication + shipyard ecosystem with Sinopec, CNPC, PetroChina, CNOOC, COSCO Shipping, and Yangzijiang context. Inspection contractors in ${city} navigate GB + ASME + API dual-stack cert + procedure requirements alongside local AQSIQ + TSG (Special Equipment Manufacture License) regulations. Atlantis NDT ERP — affordable, accessible, fully customizable — supports multi-language workflow, GB-aligned cert tracking, and dual-stack report formatting.`,
  'sea-marine': city => `${city} is a Southeast Asian marine, offshore, refining, or EPC hub serving Petronas, Pertamina, PTT, Keppel, or Sembcorp operator standards. NDT inspection contractors in ${city} support shipyard + drydock + FPSO + petrochem + LNG operations with PCN, ASNT, and ISO 9712 cert schemes. Atlantis NDT ERP — affordable, accessible, fully customizable — automates Petronas + Pertamina + PTT-aligned cert tracking, dual-scheme rostering, and multi-client workflow.`,
  'uk-scotland': city => `${city} serves UK offshore, decommissioning, refining, nuclear, or heritage infrastructure markets. NDT inspection contractors in ${city} manage PCN (BINDT) + ASNT dual-scheme cert rosters, deliver into Shell, BP, TotalEnergies, Equinor, Sellafield, and Network Rail standards, and handle UKCS offshore + onshore portfolio mix. Atlantis NDT ERP — affordable, accessible, fully customizable — supports PCN cert tracking, UKCS operator-format reporting, and multi-sector inspection scheduling.`,
  'europe-refining': city => `${city} serves European refining, petrochem, heavy industrial, marine, or infrastructure markets. NDT inspection businesses in ${city} navigate EN 13445 + EN 13480 + ISO 9712 + EN ISO 9712 cert + procedure stack alongside operator standards from Shell, TotalEnergies, BP, ENI, Repsol, OMV, BASF, INEOS, and Bayer. Atlantis NDT ERP — affordable, accessible, fully customizable — automates EN-aligned cert tracking, multi-language workflow, and EU-format report assembly.`,
  'norway-offshore': city => `${city} is part of the Norwegian Continental Shelf offshore + LNG + decommissioning ecosystem with Equinor, Aker BP, Aker Solutions, Aibel, and Subsea 7 operator presence. NDT inspection contractors in ${city} navigate NORSOK + DNV + ISO 19011 cert + procedure stack with multi-language workflow. Atlantis NDT ERP — affordable, accessible, fully customizable — supports NORSOK-aligned cert tracking, DNV-format reporting, and offshore + subsea inspection scheduling.`,
  'australia-lng': city => `${city} is part of Western Australia's LNG + mining + offshore ecosystem with Woodside, Chevron, BHP, Rio Tinto, FMG, and Wesfarmers operator presence. NDT inspection contractors in ${city} navigate AS/NZS + AINDT + ASNT dual-scheme cert rosters alongside FIFO logistics and remote-site scheduling. Atlantis NDT ERP — affordable, accessible, fully customizable — supports FIFO roster compliance, AS 3788 + AS 1554 cert tracking, and Woodside + BHP-format reporting.`,
  'australia-east': city => `${city} is part of Australia's east-coast industrial, marine, refining, infrastructure, or heritage ecosystem with Viva Energy, ExxonMobil, AGL, EnergyAustralia, BHP, and Tier-1 port + rail + tunnel infrastructure operator context. NDT inspection contractors in ${city} manage AS/NZS + AINDT + ASNT cert rosters and deliver multi-sector inspection workflows. Atlantis NDT ERP — affordable, accessible, fully customizable — supports AS-aligned cert tracking, AINDT compliance, and multi-sector workflow management.`,
  'africa-energy': city => `${city} is an African energy, refining, mining, or maritime hub serving Sonatrach, NNPC, Sasol, Sapref, Engen, Sonangol, Tullow, Anglo American, or Glencore operator standards. NDT inspection contractors in ${city} navigate dual-scheme ASNT + ISO 9712 + PCN cert rosters and operate across diverse regional regulatory frameworks. Atlantis NDT ERP — affordable, accessible, fully customizable — supports multi-region cert tracking, multi-currency invoicing, and operator-format report generation.`,
  'latam-energy': city => `${city} is a Latin American refining, offshore, mining, or infrastructure centre serving Petrobras, PDVSA, Pemex, Ecopetrol, ENAP, Codelco, Vale, or Buenaventura operator standards. NDT inspection contractors in ${city} navigate dual-scheme ASNT + ABENDI + ISO 9712 cert rosters alongside multi-language workflow demands. Atlantis NDT ERP — affordable, accessible, fully customizable — supports ABENDI-aligned cert tracking, multi-language workflow, and Petrobras + Pemex-format reporting.`,
  'canada-energy': city => `${city} serves Canada's oil sands, offshore, refining, or heavy industrial markets with Suncor, Cenovus, CNRL, Imperial Oil, Hibernia, ConocoPhillips, and Husky Energy operator presence. NDT inspection contractors in ${city} navigate ABSA + TSSA + provincial regulator stack alongside ASNT + CGSB + API ICP cert rosters. Atlantis NDT ERP — affordable, accessible, fully customizable — supports ABSA + TSSA cert tracking, CGSB compliance, and Canadian operator-format reporting.`,
  'japan-korea': city => `${city} serves Japanese + Korean refining, petrochem, shipbuilding, automotive, or nuclear/power markets with JX Holdings, ENEOS, Idemitsu, S-Oil, GS Caltex, SK Energy, Hyundai Oilbank, Hyundai Heavy, Samsung Heavy, Daewoo, Nippon Steel, POSCO operator presence. NDT inspection contractors in ${city} navigate ASNT + JSNDI/KSNT dual-scheme cert rosters alongside JIS + KS + ISO + ASME stack. Atlantis NDT ERP — affordable, accessible, fully customizable — supports JIS/KS-aligned cert tracking, multi-language workflow, and heavy-fab + shipyard scheduling.`,
  'russia-cis': city => `${city} serves Russia + CIS oil, gas, refining, or offshore markets with Rosneft, Lukoil, Gazprom Neft, Tatneft, Surgutneftegas, KazMunayGas, SOCAR operator presence. NDT inspection contractors in ${city} navigate GOST + ISO 9712 + ASNT dual/triple-scheme cert rosters alongside Russian-language + Cyrillic workflow demands. Atlantis NDT ERP — affordable, accessible, fully customizable — supports GOST-aligned cert tracking, Cyrillic workflow, and multi-region reporting.`,
  'heritage-civic': city => `${city} hosts heritage, civic, commercial real-estate, hospitals, universities, and infrastructure work. Inspection contractors in ${city} manage diverse code-stack workflows spanning ASME + EN + ISO + national heritage agency requirements. Atlantis NDT ERP — affordable, accessible, fully customizable — supports multi-sector cert tracking, heritage-agency compliance, and civic + commercial inspection workflow management.`,
  'generic-industrial': city => `${city} hosts regional industrial, manufacturing, or EPC delivery activity. NDT inspection contractors in ${city} manage diverse cert rosters and multi-client work-order portfolios. Atlantis NDT ERP — affordable, accessible, fully customizable — supports dual-scheme cert tracking, audit-trail recording, and multi-sector inspection workflow management for inspection businesses of any size.`,
};

const DT_REGIONS = {
  'gulf-coast': city => `${city} hosts dense Gulf Coast refining + petrochem + tank-farm + LNG infrastructure where digital-twin-driven RBI, FFS, and inspection-data integration deliver measurable ROI on multi-billion-dollar asset bases. Atlantis NDT Digital Twin platform overlays inspection + corrosion + RBI data on 3D asset models for ExxonMobil, Chevron, Phillips 66, Marathon, Valero, Shell, and Motiva tier operators. Affordable, accessible, fully customizable.`,
  'us-refining': city => `${city} serves US refining + petrochem + heavy industrial + offshore markets where digital twin overlay of inspection + RBI + FFS data delivers measurable lift on inspection-planning + audit + insurance + reliability outcomes. Atlantis NDT Digital Twin platform — affordable, accessible, fully customizable — integrates with operator stacks across Phillips 66, ExxonMobil, Chevron, Marathon, BP, Valero tier facilities.`,
  'middle-east': city => `${city} is a Middle East operator centre where digital twin overlay of inspection + RBI + FFS data integrates with Aramco, ADNOC, KOC, KNPC, Bapco, NIOC, QatarEnergy operator stacks. Atlantis NDT Digital Twin platform — affordable, accessible, fully customizable — delivers operator-format dashboards, multi-language inspection workflow visualisation, and audit-ready RBI cycle automation.`,
  'india-refining': city => `${city} is part of India's refining + petrochem + offshore + LNG operator stack where Atlantis NDT Digital Twin platform integrates inspection + RBI + FFS data with Reliance, IOCL, BPCL, HPCL, ONGC + L&T operator workflows. Affordable, accessible, fully customizable — multi-language workflow + ISNT-aligned reporting + Indian regulatory compliance support.`,
  'india-other': city => `${city} hosts industrial, infrastructure, and heavy-fabrication operations where Atlantis NDT Digital Twin platform delivers inspection + RBI + FFS overlay on asset 3D models. Affordable, accessible, fully customizable — multi-sector workflow, BIM + IFC + Revit integration, ISNT-aligned reporting.`,
  'china-heavy': city => `${city} is part of China's refining + petrochem + heavy-industrial + shipyard ecosystem where Atlantis NDT Digital Twin platform delivers inspection + RBI overlay aligned with Sinopec + CNPC + PetroChina + CNOOC operator stacks. Affordable, accessible, fully customizable — multi-language workflow + GB-aligned reporting + dual-stack code support.`,
  'sea-marine': city => `${city} serves Southeast Asia marine, offshore, refining, and EPC markets where Atlantis NDT Digital Twin platform overlays inspection + RBI + FFS data on Petronas, Pertamina, PTT, Keppel, Sembcorp operator stacks. Affordable, accessible, fully customizable — multi-language workflow + IACS-marine class-society integration.`,
  'uk-scotland': city => `${city} serves UK offshore, decommissioning, refining, nuclear, or heritage infrastructure markets where Atlantis NDT Digital Twin platform delivers inspection + RBI + FFS overlay aligned with Shell, BP, TotalEnergies, Equinor, Sellafield, and Network Rail standards. Affordable, accessible, fully customizable.`,
  'europe-refining': city => `${city} serves European refining, petrochem, marine, or infrastructure markets where Atlantis NDT Digital Twin platform delivers inspection + RBI + FFS overlay aligned with Shell, TotalEnergies, BP, ENI, Repsol, OMV, BASF, INEOS, Bayer operator stacks. Affordable, accessible, fully customizable — multi-language workflow + EN-aligned reporting.`,
  'norway-offshore': city => `${city} is part of the Norwegian Continental Shelf offshore + LNG + decommissioning ecosystem where Atlantis NDT Digital Twin platform integrates inspection + RBI + FFS data with Equinor, Aker BP, Aker Solutions, Aibel, Subsea 7 operator workflows. Affordable, accessible, fully customizable — NORSOK + DNV-aligned reporting.`,
  'australia-lng': city => `${city} is part of Western Australia's LNG + mining + offshore ecosystem where Atlantis NDT Digital Twin platform delivers inspection + RBI + FFS overlay aligned with Woodside, Chevron, BHP, Rio Tinto, FMG operator workflows. Affordable, accessible, fully customizable — FIFO-friendly + AS/NZS-aligned reporting.`,
  'australia-east': city => `${city} serves Australia east-coast industrial, marine, refining, infrastructure, or heritage markets where Atlantis NDT Digital Twin platform delivers inspection + RBI + FFS overlay aligned with Viva Energy, ExxonMobil, AGL, EnergyAustralia, BHP, and Tier-1 port + rail + tunnel operator workflows. Affordable, accessible, fully customizable.`,
  'africa-energy': city => `${city} serves African energy, refining, mining, or maritime operator workflows where Atlantis NDT Digital Twin platform integrates inspection + RBI + FFS data with Sonatrach, NNPC, Sasol, Sapref, Engen, Sonangol, Tullow, Anglo American, Glencore operator stacks. Affordable, accessible, fully customizable.`,
  'latam-energy': city => `${city} serves Latin American refining, offshore, mining, or infrastructure operator workflows where Atlantis NDT Digital Twin platform delivers inspection + RBI + FFS overlay aligned with Petrobras, PDVSA, Pemex, Ecopetrol, ENAP, Codelco, Vale, Buenaventura operator stacks. Affordable, accessible, fully customizable — multi-language workflow + ABENDI-aligned reporting.`,
  'canada-energy': city => `${city} serves Canada's oil sands, offshore, refining, or heavy industrial markets where Atlantis NDT Digital Twin platform delivers inspection + RBI + FFS overlay aligned with Suncor, Cenovus, CNRL, Imperial Oil, Hibernia, ConocoPhillips, Husky Energy operator stacks. Affordable, accessible, fully customizable — ABSA + TSSA + CGSB compliance.`,
  'japan-korea': city => `${city} serves Japanese + Korean refining, petrochem, shipbuilding, automotive, or nuclear/power markets where Atlantis NDT Digital Twin platform delivers inspection + RBI + FFS overlay aligned with JX Holdings, ENEOS, Idemitsu, S-Oil, GS Caltex, SK Energy, Hyundai Oilbank, Hyundai Heavy, Samsung Heavy, Daewoo, Nippon Steel, POSCO operator stacks. Affordable, accessible, fully customizable.`,
  'russia-cis': city => `${city} serves Russia + CIS oil, gas, refining, or offshore markets where Atlantis NDT Digital Twin platform delivers inspection + RBI + FFS overlay aligned with Rosneft, Lukoil, Gazprom Neft, Tatneft, Surgutneftegas, KazMunayGas, SOCAR operator stacks. Affordable, accessible, fully customizable — GOST + ISO 9712 + Cyrillic workflow support.`,
  'heritage-civic': city => `${city} hosts heritage, civic, commercial real-estate, hospitals, universities, and infrastructure work where Atlantis NDT Digital Twin platform delivers inspection + structural + heritage-asset overlay on 3D asset models. Affordable, accessible, fully customizable — heritage-agency compliance + multi-sector workflow integration.`,
  'generic-industrial': city => `${city} hosts regional industrial, manufacturing, or EPC delivery activity where Atlantis NDT Digital Twin platform delivers inspection + RBI + FFS overlay on 3D asset models. Affordable, accessible, fully customizable — multi-sector workflow + dual-scheme cert integration + audit-trail recording.`,
};

// City slug → region archetype rules (reuses 3D-scan classifier patterns)
const REGION_RULES = [
  [/^(houston|baytown|texas-city|pasadena|deer-park|la-porte|channelview|sugar-land|pearland|conroe|galveston|port-arthur|freeport-texas|orange-texas|beaumont|corpus-christi|lake-charles|baton-rouge|new-orleans|geismar|st-james|garyville|convent|gonzales|mont-belvieu|sweeny|alvin|seabrook|texas|louisiana|mississippi|alabama|mobile|pensacola)$/i, 'gulf-coast'],
  [/^(long-beach|carson|wilmington-california|torrance|el-segundo|vernon|richmond-california|martinez|benicia|los-angeles|san-francisco|san-diego|bakersfield|oakland|seattle|tacoma|anchorage|portland-oregon|california|washington|oregon|alaska|chicago|joliet|hammond|east-chicago|trainer|marcus-hook|philadelphia|new-york|new-jersey|boston|pittsburgh|cleveland|detroit|toledo|cincinnati|st-louis|kansas-city|minneapolis|milwaukee|indianapolis|columbus-ohio|memphis|nashville|atlanta|charlotte|raleigh|tampa|orlando|miami|jacksonville|virginia|maryland|usa|united-states|austin|salt-lake-city|denver|phoenix|las-vegas|albuquerque|tulsa|oklahoma-city|midland|odessa|wichita|el-paso|san-antonio|fort-worth|dallas|louisville|columbus)$/i, 'us-refining'],
  [/^(saudi|saudi-arabia|riyadh|jubail|jeddah|dammam|yanbu|jazan|tabuk|mecca|medina|ras-tanura|khobar|al-khobar|abu-dhabi|dubai|sharjah|ajman|ras-al-khaimah|fujairah|umm-al-quwain|uae|kuwait|kuwait-city|ahmadi|mina-abdulla|bahrain|manama|sitra|qatar|doha|ras-laffan|mesaieed|oman|muscat|sohar|salalah|sur|nizwa|iran|tehran|abadan|isfahan|shiraz|tabriz|ahvaz|iraq|baghdad|basra|basrah|erbil|kirkuk|mosul|yemen|sanaa|aden|jordan|amman|aqaba|lebanon|beirut|syria|damascus|israel|tel-aviv|haifa|middle-east)$/i, 'middle-east'],
  [/^(mumbai|navi-mumbai|thane|pune|nashik|aurangabad|jamnagar|surat|vadodara|ahmedabad|rajkot|kandla|gandhinagar|gujarat|maharashtra|chennai|coimbatore|madurai|salem|tirupur|tamil-nadu|bangalore|bengaluru|mysore|hubli|karnataka|kochi|cochin|thiruvananthapuram|kerala|hyderabad|secunderabad|visakhapatnam|vizag|andhra-pradesh|telangana|kolkata|haldia|west-bengal|paradip|bhubaneswar|odisha|jamshedpur|jharkhand|delhi|new-delhi|gurgaon|gurugram|panipat|haryana|punjab|amritsar|chandigarh|india)$/i, 'india-refining'],
  [/^(jaipur|udaipur|jodhpur|rajasthan|lucknow|kanpur|varanasi|agra|noida|ghaziabad|uttar-pradesh|patna|ranchi|bihar|guwahati|assam|raipur|chhattisgarh|bhopal|indore|madhya-pradesh|nagpur|nashik|kolhapur|sangli|amravati|bhavnagar|cuttack|gaya|bilaspur|ujjain|gwalior|jabalpur)$/i, 'india-other'],
  [/^(beijing|shanghai|tianjin|shenzhen|guangzhou|shenyang|wuhan|chongqing|hangzhou|chengdu|nanjing|xian|qingdao|dalian|ningbo|xiamen|fuzhou|jinan|harbin|changchun|kunming|nanchang|hefei|zhengzhou|lanzhou|urumqi|hong-kong|macau|china)$/i, 'china-heavy'],
  [/^(singapore|jurong|tuas|kuala-lumpur|kl|johor|penang|melaka|kuching|kota-kinabalu|malacca|malaysia|jakarta|surabaya|bandung|medan|semarang|palembang|makassar|cilacap|balikpapan|bontang|cilegon|tuban|cepu|indonesia|bangkok|chonburi|rayong|map-ta-phut|chiang-mai|laem-chabang|songkhla|hat-yai|thailand|manila|cebu|davao|batangas|subic|cagayan-de-oro|iloilo|philippines|ho-chi-minh|hanoi|haiphong|da-nang|can-tho|vung-tau|vietnam|yangon|mandalay|myanmar|burma|phnom-penh|sihanoukville|cambodia|vientiane|laos|brunei)$/i, 'sea-marine'],
  [/^(london|aberdeen|glasgow|edinburgh|dundee|invergordon|nigg|peterhead|fife|cromarty|firth|stornoway|orkney|shetland|grangemouth|hull|teesside|middlesbrough|hartlepool|liverpool|manchester|leeds|sheffield|birmingham|bristol|cardiff|swansea|belfast|dublin|cork|limerick|galway|waterford|england|scotland|wales|northern-ireland|ireland|united-kingdom|uk|britain)$/i, 'uk-scotland'],
  [/^(oslo|bergen|stavanger|trondheim|tromso|hammerfest|kristiansand|sandnes|alesund|drammen|kristiansund|haugesund|norway|stockholm|gothenburg|malmo|sweden|copenhagen|aarhus|aalborg|esbjerg|denmark|helsinki|tampere|turku|oulu|finland|reykjavik|iceland|scandinavia|nordic)$/i, 'norway-offshore'],
  [/^(rotterdam|amsterdam|the-hague|utrecht|eindhoven|antwerp|brussels|ghent|liege|hamburg|bremen|bremerhaven|wilhelmshaven|cologne|dusseldorf|frankfurt|stuttgart|munich|berlin|leipzig|leuna|ludwigshafen|gelsenkirchen|essen|duisburg|paris|le-havre|marseille|lyon|toulouse|lille|nantes|bordeaux|nice|strasbourg|milan|rome|naples|turin|genoa|venice|sicily|sardinia|madrid|barcelona|valencia|seville|bilbao|cartagena|tarragona|cadiz|huelva|porto|lisbon|sines|geneva|zurich|basel|vienna|graz|linz|salzburg|warsaw|krakow|gdansk|katowice|wroclaw|poznan|lodz|szczecin|prague|brno|ostrava|bratislava|budapest|debrecen|miskolc|szeged|pecs|athens|thessaloniki|piraeus|patras|crete|bucharest|cluj|timisoara|iasi|constanta|sofia|plovdiv|varna|burgas|belgrade|novi-sad|nis|zagreb|split|rijeka|sarajevo|ljubljana|skopje|tirana|durres|netherlands|belgium|germany|france|italy|spain|portugal|switzerland|austria|poland|czech|slovakia|hungary|greece|romania|bulgaria|serbia|croatia|bosnia|slovenia|macedonia|albania|europe)$/i, 'europe-refining'],
  [/^(perth|karratha|dampier|port-hedland|fremantle|broome|bunbury|albany|geraldton|esperance|kalgoorlie|kwinana|pluto|wheatstone|gorgon|onslow|darwin|katherine|alice-springs|cairns|townsville|mackay|rockhampton|gladstone|barossa|portland-australia)$/i, 'australia-lng'],
  [/^(sydney|newcastle|wollongong|melbourne|geelong|ballarat|bendigo|launceston|hobart|adelaide|brisbane|sunshine-coast|gold-coast|toowoomba|moranbah|emerald|chinchilla|moomba|gippsland|latrobe-valley|whyalla|port-pirie|mount-isa|port-augusta|olympic-dam|australia|new-zealand|auckland|wellington|christchurch|hamilton-nz|tauranga|dunedin|new-plymouth|napier|invercargill|whangarei|nz)$/i, 'australia-east'],
  [/^(lagos|abuja|kano|ibadan|port-harcourt|warri|kaduna|onne|bonny|calabar|nigeria|algiers|oran|hassi-messaoud|arzew|skikda|annaba|algeria|tripoli|benghazi|misurata|sirte|libya|cairo|alexandria|suez|port-said|damietta|egypt|casablanca|rabat|tangier|mohammedia|jorf-lasfar|morocco|tunis|sfax|gabes|tunisia|nairobi|mombasa|nakuru|kisumu|kenya|dar-es-salaam|arusha|mwanza|tanzania|accra|takoradi|tema|kumasi|ghana|abidjan|yamoussoukro|cote-divoire|ivory-coast|dakar|senegal|cape-town|johannesburg|pretoria|durban|port-elizabeth|gqeberha|east-london-sa|saldanha|sasolburg|secunda|south-africa|luanda|cabinda|soyo|angola|maputo|beira|nacala|mozambique|kampala|uganda|kigali|rwanda|harare|bulawayo|zimbabwe|lusaka|zambia|gaborone|botswana|windhoek|namibia|africa)$/i, 'africa-energy'],
  [/^(sao-paulo|rio|rio-de-janeiro|salvador|fortaleza|recife|manaus|belo-horizonte|brasilia|porto-alegre|curitiba|campinas|santos|macae|campos|aracaju|natal|joao-pessoa|maceio|guarulhos|paulinia|brazil|buenos-aires|cordoba|rosario|mendoza|neuquen|comodoro|argentina|santiago|valparaiso|antofagasta|iquique|concepcion|chile|lima|callao|talara|cusco|trujillo|arequipa|piura|peru|bogota|medellin|cali|cartagena|barranquilla|bucaramanga|cucuta|colombia|caracas|maracaibo|barquisimeto|maturin|puerto-ordaz|venezuela|quito|guayaquil|esmeraldas|cuenca|ecuador|asuncion|paraguay|montevideo|uruguay|la-paz|santa-cruz|cochabamba|bolivia|mexico-city|guadalajara|monterrey|tijuana|merida|veracruz|tampico|salina-cruz|cadereyta|salamanca-mexico|coatzacoalcos|minatitlan|tula|mexico|panama|panama-city|colon|san-jose-costa-rica|costa-rica|tegucigalpa|honduras|san-salvador|el-salvador|guatemala-city|guatemala|managua|nicaragua|kingston|jamaica|port-of-spain|trinidad|nassau|bahamas|santo-domingo|dominican|havana|cuba|san-juan|puerto-rico|latam|latin-america|south-america|central-america)$/i, 'latam-energy'],
  [/^(calgary|edmonton|fort-mcmurray|grande-prairie|red-deer|lloydminster|medicine-hat|lethbridge|cold-lake|peace-river|alberta|toronto|hamilton|mississauga|brampton|ottawa|kitchener|london-ontario|windsor|sarnia|sudbury|thunder-bay|kingston-ontario|niagara|ontario|montreal|quebec-city|laval|gatineau|sherbrooke|trois-rivieres|saguenay|levis|quebec|vancouver|victoria|burnaby|surrey|richmond-canada|abbotsford|kelowna|nanaimo|kamloops|prince-george|kitimat|prince-rupert|british-columbia|winnipeg|brandon|manitoba|regina|saskatoon|moose-jaw|saskatchewan|st-johns|halifax|moncton|fredericton|charlottetown|newfoundland|nova-scotia|new-brunswick|prince-edward|yellowknife|whitehorse|iqaluit|northwest-territories|yukon|nunavut|canada)$/i, 'canada-energy'],
  [/^(tokyo|yokohama|kawasaki|saitama|chiba|nagoya|osaka|kobe|kyoto|sapporo|sendai|hiroshima|fukuoka|kitakyushu|niigata|hamamatsu|shizuoka|okayama|sakai|kawagoe|matsuyama|kanazawa|utsunomiya|toyohashi|nara|himeji|mie|wakayama|mito|akita|aomori|morioka|yamagata|fukushima|tochigi|gunma|ibaraki|kanagawa|yamanashi|nagano|gifu|aichi|shiga|hyogo|tottori|shimane|yamaguchi|tokushima|kagawa|ehime|kochi|saga|nagasaki|kumamoto|oita|miyazaki|kagoshima|okinawa|japan|seoul|busan|incheon|daegu|daejeon|gwangju|ulsan|suwon|changwon|seongnam|goyang|yongin|bucheon|ansan|cheongju|jeonju|cheonan|namyangju|hwaseong|pyeongtaek|jeju|geoje|gimcheon|gyeongju|gimhae|pohang|jinju|tongyeong|sacheon|south-korea|korea)$/i, 'japan-korea'],
  [/^(moscow|st-petersburg|novosibirsk|yekaterinburg|nizhny-novgorod|kazan|chelyabinsk|omsk|samara|rostov-on-don|ufa|krasnoyarsk|perm|voronezh|volgograd|krasnodar|saratov|tyumen|tolyatti|izhevsk|barnaul|ulyanovsk|irkutsk|khabarovsk|yaroslavl|vladivostok|makhachkala|tomsk|orenburg|kemerovo|novokuznetsk|ryazan|astrakhan|naberezhnye-chelny|penza|lipetsk|kirov|cheboksary|kaliningrad|tula|stavropol|sochi|murmansk|arkhangelsk|surgut|nizhnevartovsk|nefteyugansk|noyabrsk|salekhard|yamal|sakhalin|yuzhno-sakhalinsk|petropavlovsk|magadan|chita|russia|kiev|kyiv|kharkiv|odesa|odessa|dnipro|donetsk|lviv|zaporizhzhia|kryvyi-rih|mykolaiv|mariupol|ukraine|minsk|gomel|brest|grodno|belarus|astana|nur-sultan|almaty|atyrau|aktau|aktobe|shymkent|karaganda|pavlodar|temirtau|kazakhstan|baku|sumqayit|ganja|azerbaijan|yerevan|gyumri|armenia|tbilisi|batumi|kutaisi|georgia|tashkent|samarkand|bukhara|uzbekistan|ashgabat|turkmenabat|turkmenistan|bishkek|osh|kyrgyzstan|dushanbe|khujand|tajikistan|cis|russia-cis)$/i, 'russia-cis'],
];

function resolveRegion(slug) {
  for (const [re, key] of REGION_RULES) if (re.test(slug)) return key;
  return 'generic-industrial';
}

function slugToTitleCase(slug) {
  return slug.split('-').map(w => {
    if (['and', 'of', 'the', 'in', 'on'].includes(w)) return w;
    if (/^(usa|uae|uk|nz|cis|al|el|st)$/i.test(w)) return w.toUpperCase();
    return w.charAt(0).toUpperCase() + w.slice(1);
  }).join(' ');
}

// ─── Read curated city sets + existing maps ─────────────────────────────────

function readCuratedSet(name) {
  const txt = readFileSync(join(ROOT, 'src', 'data', 'curated-cities.ts'), 'utf-8');
  const m = txt.match(new RegExp('export const ' + name + '[^=]*=\\s*new Set\\(\\[([\\s\\S]*?)\\]\\)'));
  if (!m) return new Set();
  return new Set([...m[1].matchAll(/['"]([^'"]+)['"]/g)].map(x => x[1]));
}

function existingErpKeys() {
  const txt = readFileSync(join(ROOT, 'src', 'components', 'ErpLocationPage.tsx'), 'utf-8');
  const m = txt.match(/const erpLocationContext[^=]*=\s*\{([\s\S]*?)\n\};/);
  if (!m) return new Set();
  const quoted = [...m[1].matchAll(/['"]([^'"]+)['"]\s*:/g)].map(x => x[1]);
  return new Set(quoted.map(s => s.toLowerCase().replace(/[\s_]+/g, '-')));
}

function existingDtKeys() {
  const txt = readFileSync(join(ROOT, 'src', 'data', 'dt-city-data.mjs'), 'utf-8');
  const m = txt.match(/const digitalTwinLocationContext[^=]*=\s*\{([\s\S]*?)\n\};/);
  if (!m) return new Set();
  const quoted = [...m[1].matchAll(/['"]([^'"]+)['"]\s*:/g)].map(x => x[1]);
  const bare = [...m[1].matchAll(/^\s*([a-z][a-z0-9_-]*)\s*:/gm)].map(x => x[1]);
  return new Set([...quoted, ...bare].map(s => s.toLowerCase().replace(/[\s_]+/g, '-')));
}

const erpSlugs = readCuratedSet('ERP_CITY_PAGE_SLUGS');
const dtSlugs = readCuratedSet('DT_CITY_PAGE_SLUGS');
const erpMap = existingErpKeys();
const dtMap = existingDtKeys();

const missingErp = [...erpSlugs].filter(s => !erpMap.has(s)).sort();
const missingDt = [...dtSlugs].filter(s => !dtMap.has(s)).sort();

console.log(`ERP missing entries: ${missingErp.length}`);
console.log(`DT  missing entries: ${missingDt.length}`);

// ─── Generate ERP appendage block ───────────────────────────────────────────

function buildErpAppendBlock() {
  const lines = ['', '  // === Quality Round-2 Phase B — archetype-derived enrichment (2026-06-25) ==='];
  for (const slug of missingErp) {
    const region = resolveRegion(slug);
    const gen = ERP_REGIONS[region] || ERP_REGIONS['generic-industrial'];
    const title = slugToTitleCase(slug);
    const text = gen(title).replace(/"/g, '\\"');
    lines.push(`  "${title}": "${text}",`);
  }
  return lines.join('\n');
}

function buildDtAppendBlock() {
  const lines = ['', '  // === Quality Round-2 Phase B — archetype-derived enrichment (2026-06-25) ==='];
  for (const slug of missingDt) {
    const region = resolveRegion(slug);
    const gen = DT_REGIONS[region] || DT_REGIONS['generic-industrial'];
    const text = gen(slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')).replace(/"/g, '\\"');
    // dt-city-data.mjs uses kebab-case keys
    lines.push(`  "${slug}": "${text}",`);
  }
  return lines.join('\n');
}

// ─── Inject into source files ──────────────────────────────────────────────

if (missingErp.length > 0) {
  const file = join(ROOT, 'src', 'components', 'ErpLocationPage.tsx');
  let txt = readFileSync(file, 'utf-8');
  if (txt.includes('Quality Round-2 Phase B')) {
    console.log('ERP file already has Phase B block — skipping injection');
  } else {
    const appendBlock = buildErpAppendBlock();
    // Insert immediately before the closing `};` of erpLocationContext
    const re = /(const erpLocationContext[^=]*=\s*\{[\s\S]*?)\n\};/;
    txt = txt.replace(re, `$1\n${appendBlock}\n};`);
    writeFileSync(file, txt, 'utf-8');
    console.log(`✓ Injected ${missingErp.length} entries into ErpLocationPage.tsx`);
  }
}

if (missingDt.length > 0) {
  const file = join(ROOT, 'src', 'data', 'dt-city-data.mjs');
  let txt = readFileSync(file, 'utf-8');
  if (txt.includes('Quality Round-2 Phase B')) {
    console.log('DT file already has Phase B block — skipping injection');
  } else {
    const appendBlock = buildDtAppendBlock();
    const re = /(const digitalTwinLocationContext[^=]*=\s*\{[\s\S]*?)\n\};/;
    txt = txt.replace(re, `$1\n${appendBlock}\n};`);
    writeFileSync(file, txt, 'utf-8');
    console.log(`✓ Injected ${missingDt.length} entries into dt-city-data.mjs`);
  }
}

console.log('\nDone. Run identify-thin-city-pages.mjs to verify gap closed.');
