export interface ExpandedLocation {
  name: string;
  slug: string;
  country: string;
  region: string;
  industries: string[];
  companies: string[];
  population: string;
  industrialProfile: string;
}

export const expandedLocations: ExpandedLocation[] = [
  // USA - State Capitals & Major Cities (350+)
  {
    name: "Montgomery",
    slug: "montgomery-alabama",
    country: "US",
    region: "Alabama",
    industries: ["Aerospace", "Manufacturing", "Defense"],
    companies: ["Hyundai Motor", "Airbus", "United States Air Force"],
    population: "200K",
    industrialProfile: "Montgomery serves as a hub for aerospace manufacturing and military operations, hosting major aircraft assembly facilities and defense contractors. The city's industrial base centers on high-precision aerospace component fabrication with extensive NDT requirements for structural integrity verification."
  },
  {
    name: "Anchorage",
    slug: "anchorage-alaska",
    country: "US",
    region: "Alaska",
    industries: ["Oil & Gas", "Transportation", "Petrochemicals"],
    companies: ["ConocoPhillips", "Alaska Air Group", "Tesoro"],
    population: "290K",
    industrialProfile: "Anchorage is Alaska's gateway for oil and gas operations, with major pipeline infrastructure and petrochemical processing. The city's inspection networks focus on cold-climate pipeline integrity, corrosion monitoring in extreme conditions, and offshore platform inspections."
  },
  {
    name: "Phoenix",
    slug: "phoenix-arizona",
    country: "US",
    region: "Arizona",
    industries: ["Electronics", "Semiconductors", "Manufacturing"],
    companies: ["Intel", "Taiwan Semiconductor", "GlobalFoundries"],
    population: "1.6M",
    industrialProfile: "Phoenix has emerged as a major semiconductor manufacturing hub with extensive wafer fabrication facilities. The region's ultraprecision manufacturing environment demands rigorous materials testing, pressure vessel inspections, and process equipment validation."
  },
  {
    name: "Little Rock",
    slug: "little-rock-arkansas",
    country: "US",
    region: "Arkansas",
    industries: ["Petrochemicals", "Refining", "Manufacturing"],
    companies: ["Delek US Holdings", "Westmoreland Resource Recovery", "Chemours"],
    population: "197K",
    industrialProfile: "Little Rock hosts significant petrochemical plants and refinery operations along the Arkansas River corridor. The industrial profile centers on chemical process equipment inspection, tank farms, pipeline networks, and corrosion management in chemical plants."
  },
  {
    name: "Port Arthur",
    slug: "port-arthur-texas",
    country: "US",
    region: "Texas",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Motiva Enterprises", "Valero Energy", "Gulf Coast Growth Ventures"],
    population: "56K",
    industrialProfile: "Port Arthur is home to one of the largest refineries in the United States and major petrochemical complexes. The city's inspection environment is dominated by high-capacity crude oil and product processing with extensive pipeline networks, storage tanks, and process vessel NDT requirements."
  },
  {
    name: "Lake Charles",
    slug: "lake-charles-louisiana",
    country: "US",
    region: "Louisiana",
    industries: ["Petrochemicals", "Refining", "Liquefied Gas"],
    companies: ["WaferTech", "Shell", "Westlake Plastics"],
    population: "74K",
    industrialProfile: "Lake Charles is a major petrochemical manufacturing hub with multiple refineries and chemical plants lining the waterways. The industrial inspection ecosystem includes complex piping systems, heat exchangers, distillation columns, and LNG processing equipment requiring continuous NDT monitoring."
  },
  {
    name: "Baytown",
    slug: "baytown-texas",
    country: "US",
    region: "Texas",
    industries: ["Refining", "Petrochemicals", "Polymers"],
    companies: ["ExxonMobil", "INEOS", "Huntsman"],
    population: "71K",
    industrialProfile: "Baytown hosts massive integrated petrochemical and refining operations with advanced polymerization facilities. The city's inspection demands focus on high-pressure process equipment, specialized composite materials testing, and continuous monitoring of critical process pipelines."
  },
  {
    name: "Texas City",
    slug: "texas-city-texas",
    country: "US",
    region: "Texas",
    industries: ["Refining", "Petrochemicals", "Specialty Chemicals"],
    companies: ["BP", "INEOS", "Huntsman"],
    population: "45K",
    industrialProfile: "Texas City is a major refining and petrochemical center with multiple integrated processing facilities. The industrial profile emphasizes complex hydrocarbon processing with extensive weld integrity programs, pressure vessel certification, and pipeline corrosion management."
  },
  {
    name: "Pascagoula",
    slug: "pascagoula-mississippi",
    country: "US",
    region: "Mississippi",
    industries: ["Refining", "Petrochemicals", "Shipbuilding"],
    companies: ["Chevron", "Huntsman", "Ingalls Shipbuilding"],
    population: "22K",
    industrialProfile: "Pascagoula combines refining and petrochemical operations with advanced shipbuilding facilities. The region requires specialized inspection services for marine structural welds, pressure vessel systems in chemical plants, and large-scale industrial equipment fabrication."
  },
  {
    name: "Whiting",
    slug: "whiting-indiana",
    country: "US",
    region: "Indiana",
    industries: ["Refining", "Petrochemicals", "Specialty Chemicals"],
    companies: ["BP America", "DuPont", "Huntsman"],
    population: "5K",
    industrialProfile: "Whiting is home to one of the nation's largest refineries with integrated petrochemical production. The city's inspection environment centers on massive crude distillation units, catalytic crackers, and extensive piping systems requiring advanced NDT technologies."
  },
  {
    name: "El Segundo",
    slug: "el-segundo-california",
    country: "US",
    region: "California",
    industries: ["Refining", "Aerospace", "Petrochemicals"],
    companies: ["ExxonMobil", "The Boeing Company", "Chevron"],
    population: "16K",
    industrialProfile: "El Segundo hosts a major refinery alongside aerospace manufacturing facilities. The industrial base emphasizes both petrochemical processing inspections and precision aerospace component validation, requiring dual expertise in chemical plant and aerospace NDT methodologies."
  },
  {
    name: "Martinez",
    slug: "martinez-california",
    country: "US",
    region: "California",
    industries: ["Refining", "Petrochemicals", "Specialty Chemicals"],
    companies: ["Shell", "Chevron", "Tesoro"],
    population: "36K",
    industrialProfile: "Martinez is a major California refining center with petrochemical production. The facility complex requires extensive pipeline integrity programs, pressure vessel inspections, and corrosion monitoring in coastal industrial environments."
  },
  {
    name: "Corpus Christi",
    slug: "corpus-christi-texas",
    country: "US",
    region: "Texas",
    industries: ["Refining", "Petrochemicals", "Shipping"],
    companies: ["Valero Energy", "Citgo", "Nustar Energy"],
    population: "305K",
    industrialProfile: "Corpus Christi is a major petrochemical and refining hub with extensive port operations. The city's inspection landscape includes large storage tank farms, complex refinery equipment, marine vessel inspections, and pipeline systems serving coastal petrochemical plants."
  },
  {
    name: "Beaumont",
    slug: "beaumont-texas",
    country: "US",
    region: "Texas",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Valero Energy", "Exxonmobil", "Motiva"],
    population: "115K",
    industrialProfile: "Beaumont is home to major refining and petrochemical operations with one of the largest petroleum refinery complexes. The industrial profile emphasizes crude processing equipment inspection, thermal cracking inspection, and integrated pipeline network monitoring."
  },
  {
    name: "Fayetteville",
    slug: "fayetteville-north-carolina",
    country: "US",
    region: "North Carolina",
    industries: ["Military", "Manufacturing", "Chemicals"],
    companies: ["Fort Liberty", "Chemours", "Autoneum"],
    population: "204K",
    industrialProfile: "Fayetteville is a military-industrial hub with chemical manufacturing operations. The inspection environment focuses on military equipment standards compliance, chemical plant safety systems, and manufacturing facility structural integrity verification."
  },
  {
    name: "Savannah",
    slug: "savannah-georgia",
    country: "US",
    region: "Georgia",
    industries: ["Petrochemicals", "Port Operations", "Manufacturing"],
    companies: ["Gulfstream Aerospace", "Celanese", "Huntsman"],
    population: "136K",
    industrialProfile: "Savannah combines petrochemical operations with major port and aerospace manufacturing. The region requires integrated inspection services for chemical plant equipment, port facility infrastructure, and aerospace component manufacturing."
  },
  {
    name: "Honolulu",
    slug: "honolulu-hawaii",
    country: "US",
    region: "Hawaii",
    industries: ["Refining", "Military", "Petrochemicals"],
    companies: ["Tesoro Hawaii", "U.S. Navy", "Matson Navigation"],
    population: "350K",
    industrialProfile: "Honolulu is home to the primary refinery serving the Pacific region alongside major military installations. The city's inspection focus includes remote island petrochemical facility management, marine fuel inspection standards, and military equipment NDT requirements."
  },
  {
    name: "Boise",
    slug: "boise-idaho",
    country: "US",
    region: "Idaho",
    industries: ["Semiconductors", "Manufacturing", "Technology"],
    companies: ["Micron Technology", "Albertsons", "Scentsy"],
    population: "235K",
    industrialProfile: "Boise is a semiconductor and technology manufacturing center with advanced fabrication facilities. The city's inspection environment emphasizes clean-room manufacturing equipment, specialized materials testing, and precision component validation."
  },
  {
    name: "Springfield",
    slug: "springfield-illinois",
    country: "US",
    region: "Illinois",
    industries: ["Petrochemicals", "Energy", "Refining"],
    companies: ["Phillips 66", "Energy Transfer", "Valero"],
    population: "116K",
    industrialProfile: "Springfield hosts significant refining and petrochemical operations within Illinois. The industrial profile centers on crude oil processing, chemical product manufacturing, and pipeline infrastructure inspection within inland refining environments."
  },
  {
    name: "Indianapolis",
    slug: "indianapolis-indiana",
    country: "US",
    region: "Indiana",
    industries: ["Refining", "Manufacturing", "Pharmaceuticals"],
    companies: ["Eli Lilly", "Rexnord", "Cummins"],
    population: "873K",
    industrialProfile: "Indianapolis is a major manufacturing hub with pharmaceutical and automotive production. The inspection ecosystem includes complex process equipment in pharmaceutical manufacturing, automotive precision components, and associated industrial facility systems."
  },
  {
    name: "Des Moines",
    slug: "des-moines-iowa",
    country: "US",
    region: "Iowa",
    industries: ["Manufacturing", "Energy", "Agriculture"],
    companies: ["Ruan", "Kemin Industries", "Ag Processing Inc"],
    population: "216K",
    industrialProfile: "Des Moines is a manufacturing and energy production hub for the agricultural heartland. The city's inspection focus includes grain processing equipment, energy plant operations, and agricultural manufacturing facility compliance."
  },
  {
    name: "Wichita",
    slug: "wichita-kansas",
    country: "US",
    region: "Kansas",
    industries: ["Aerospace", "Manufacturing", "Energy"],
    companies: ["Airbus", "Textron Aviation", "Spirit AeroSystems"],
    population: "389K",
    industrialProfile: "Wichita is a major aerospace manufacturing center with advanced aircraft production facilities. The region's inspection requirements focus on aircraft structural assembly, precision avionics manufacturing, and aerospace composite materials validation."
  },
  {
    name: "Lexington",
    slug: "lexington-kentucky",
    country: "US",
    region: "Kentucky",
    industries: ["Manufacturing", "Automobiles", "Chemicals"],
    companies: ["Toyota", "Lexmark", "Ashland Chemical"],
    population: "322K",
    industrialProfile: "Lexington is home to major automotive manufacturing and chemical production. The industrial inspection environment emphasizes vehicle component fabrication, chemical plant equipment, and integrated manufacturing facility systems."
  },
  {
    name: "Baton Rouge",
    slug: "baton-rouge-louisiana",
    country: "US",
    region: "Louisiana",
    industries: ["Petrochemicals", "Refining", "Chemicals"],
    companies: ["ExxonMobil", "Cargill", "Chevron"],
    population: "227K",
    industrialProfile: "Baton Rouge is Louisiana's major petrochemical and refining center with extensive chemical production facilities. The city's inspection landscape includes massive crude units, chemical reactors, pressure vessels, and complex piping systems requiring continuous NDT monitoring."
  },
  {
    name: "Portland",
    slug: "portland-maine",
    country: "US",
    region: "Maine",
    industries: ["Petrochemicals", "Shipping", "Manufacturing"],
    companies: ["Thompson Terminal", "North Atlantic Refining", "Emera"],
    population: "68K",
    industrialProfile: "Portland serves as a northeastern petrochemical and fuel distribution hub with marine terminal operations. The region's inspection focus includes coastal refining facilities, marine storage tanks, and shipping pipeline infrastructure."
  },
  {
    name: "Baltimore",
    slug: "baltimore-maryland",
    country: "US",
    region: "Maryland",
    industries: ["Petrochemicals", "Refining", "Port Operations"],
    companies: ["Tesoro", "Chemours", "Port of Baltimore"],
    population: "585K",
    industrialProfile: "Baltimore is a major port city with integrated petrochemical operations and refining capacity. The industrial environment emphasizes port facility inspections, marine terminal equipment, chemical product processing, and pipeline infrastructure."
  },
  {
    name: "Boston",
    slug: "boston-massachusetts",
    country: "US",
    region: "Massachusetts",
    industries: ["Petrochemicals", "Refining", "Pharmaceuticals"],
    companies: ["Vertex Pharmaceuticals", "Biogen", "Genzyme"],
    population: "645K",
    industrialProfile: "Boston is a major pharmaceutical and biotechnology hub with supporting petrochemical and refining operations. The inspection landscape focuses on pharmaceutical manufacturing cleanroom systems, precision equipment validation, and chemical process integrity."
  },
  {
    name: "Detroit",
    slug: "detroit-michigan",
    country: "US",
    region: "Michigan",
    industries: ["Automotive", "Manufacturing", "Energy"],
    companies: ["General Motors", "Ford", "Stellantis"],
    population: "670K",
    industrialProfile: "Detroit is the automotive manufacturing capital with extensive precision fabrication and assembly facilities. The region's inspection environment emphasizes vehicle component welding, engine testing, and complex automotive manufacturing systems."
  },
  {
    name: "Duluth",
    slug: "duluth-minnesota",
    country: "US",
    region: "Minnesota",
    industries: ["Petrochemicals", "Port Operations", "Energy"],
    companies: ["Flint Hills Resources", "Port Authority", "Evonik"],
    population: "87K",
    industrialProfile: "Duluth is a major inland port with petrochemical operations and refining capacity. The city's inspection focus includes port infrastructure, bulk liquid handling systems, petroleum storage facilities, and pipeline connections."
  },
  {
    name: "Jackson",
    slug: "jackson-mississippi",
    country: "US",
    region: "Mississippi",
    industries: ["Petrochemicals", "Manufacturing", "Energy"],
    companies: ["Entergy", "Northrop Grumman", "Ergon"],
    population: "150K",
    industrialProfile: "Jackson is Mississippi's industrial hub with petrochemical and manufacturing operations. The region's inspection emphasis includes chemical plant equipment, manufacturing facility systems, and energy generation infrastructure."
  },
  {
    name: "Kansas City",
    slug: "kansas-city-missouri",
    country: "US",
    region: "Missouri",
    industries: ["Refining", "Manufacturing", "Energy"],
    companies: ["Valero Energy", "Chevron", "Black Hills Energy"],
    population: "508K",
    industrialProfile: "Kansas City is a major refining and manufacturing center serving the Midwest. The industrial profile emphasizes crude oil processing, chemical product manufacturing, and extensive pipeline infrastructure across the region."
  },
  {
    name: "Billings",
    slug: "billings-montana",
    country: "US",
    region: "Montana",
    industries: ["Refining", "Oil & Gas", "Energy"],
    companies: ["Cenex LLC", "Frontier Oil", "NorthWestern Energy"],
    population: "117K",
    industrialProfile: "Billings is a major refining center for the northern Great Plains with integrated oil and gas operations. The city's inspection environment focuses on crude processing, fuel distribution infrastructure, and pipeline systems in challenging terrain."
  },
  {
    name: "Omaha",
    slug: "omaha-nebraska",
    country: "US",
    region: "Nebraska",
    industries: ["Refining", "Manufacturing", "Energy"],
    companies: ["Valero Energy", "Cargill", "Berkshire Hathaway"],
    population: "468K",
    industrialProfile: "Omaha is a major Midwest refining center with extensive manufacturing operations. The region's inspection focus includes crude processing facilities, manufactured component validation, and integrated industrial infrastructure."
  },
  {
    name: "Las Vegas",
    slug: "las-vegas-nevada",
    country: "US",
    region: "Nevada",
    industries: ["Energy", "Manufacturing", "Chemicals"],
    companies: ["NV Energy", "UNLV Research", "Kershaw Manufacturing"],
    population: "641K",
    industrialProfile: "Las Vegas combines energy production with manufacturing operations in the desert industrial environment. The inspection landscape emphasizes power generation equipment, chemical processing, and manufacturing facility systems in arid conditions."
  },
  {
    name: "Manchester",
    slug: "manchester-new-hampshire",
    country: "US",
    region: "New Hampshire",
    industries: ["Manufacturing", "Petrochemicals", "Energy"],
    companies: ["Mitsubishi", "Covidien", "Sprague Resources"],
    population: "115K",
    industrialProfile: "Manchester is a northeastern manufacturing hub with petrochemical operations. The city's inspection environment includes precision manufacturing equipment, chemical processing facilities, and regional fuel distribution infrastructure."
  },
  {
    name: "Newark",
    slug: "newark-new-jersey",
    country: "US",
    region: "New Jersey",
    industries: ["Petrochemicals", "Refining", "Port Operations"],
    companies: ["Valero Energy", "Chevron", "Port of Newark"],
    population: "311K",
    industrialProfile: "Newark is a major petrochemical and refining hub with extensive port operations. The industrial environment emphasizes chemical manufacturing, fuel processing, marine terminal inspections, and pipeline networks serving the Northeast corridor."
  },
  {
    name: "Albuquerque",
    slug: "albuquerque-new-mexico",
    country: "US",
    region: "New Mexico",
    industries: ["Oil & Gas", "Petrochemicals", "Energy"],
    companies: ["Kirtland Air Force Base", "Sandia National Laboratories", "Western Refining"],
    population: "564K",
    industrialProfile: "Albuquerque is a major southwestern petrochemical and oil and gas hub with military research operations. The region's inspection focus includes oil field equipment, chemical processing, advanced manufacturing systems, and energy infrastructure."
  },
  {
    name: "Buffalo",
    slug: "buffalo-new-york",
    country: "US",
    region: "New York",
    industries: ["Petrochemicals", "Refining", "Manufacturing"],
    companies: ["Valero Energy", "Chevron", "Carbide Industries"],
    population: "256K",
    industrialProfile: "Buffalo is a major northeastern petrochemical and refining center. The city's inspection environment includes chemical plant operations, fuel processing equipment, and manufacturing facility systems in the Great Lakes region."
  },
  {
    name: "Cleveland",
    slug: "cleveland-ohio",
    country: "US",
    region: "Ohio",
    industries: ["Refining", "Manufacturing", "Steel"],
    companies: ["BP America", "ArcelorMittal", "Cuyahoga Valley Steel"],
    population: "381K",
    industrialProfile: "Cleveland is a major refining, manufacturing, and steel production center. The region's inspection landscape emphasizes crude processing, metal fabrication welding, structural steel certification, and integrated manufacturing systems."
  },
  {
    name: "Oklahoma City",
    slug: "oklahoma-city-oklahoma",
    country: "US",
    region: "Oklahoma",
    industries: ["Oil & Gas", "Petrochemicals", "Energy"],
    companies: ["Chesapeake Energy", "Devon Energy", "Williams Companies"],
    population: "681K",
    industrialProfile: "Oklahoma City is a major oil and gas hub with extensive petrochemical operations. The industrial profile centers on oil field equipment inspection, pipeline infrastructure, chemical processing facilities, and energy production systems."
  },
  {
    name: "Portland",
    slug: "portland-oregon",
    country: "US",
    region: "Oregon",
    industries: ["Petrochemicals", "Refining", "Manufacturing"],
    companies: ["Tesoro", "Flint Hills Resources", "Vertex Energy"],
    population: "652K",
    industrialProfile: "Portland is a major northwestern refining and petrochemical center. The city's inspection environment includes crude processing facilities, chemical manufacturing operations, and pipeline systems serving the Pacific Northwest region."
  },
  {
    name: "Philadelphia",
    slug: "philadelphia-pennsylvania",
    country: "US",
    region: "Pennsylvania",
    industries: ["Refining", "Petrochemicals", "Pharmaceuticals"],
    companies: ["Philadelphia Energy Solutions", "Merck", "Johnson & Johnson"],
    population: "1.60M",
    industrialProfile: "Philadelphia is a major northeastern refining hub with major pharmaceutical manufacturing. The inspection landscape combines chemical plant operations, pharmaceutical cleanroom systems, precision equipment validation, and fuel processing infrastructure."
  },
  {
    name: "Providence",
    slug: "providence-rhode-island",
    country: "US",
    region: "Rhode Island",
    industries: ["Petrochemicals", "Manufacturing", "Port Operations"],
    companies: ["Sprague Resources", "Hasbro", "Textron"],
    population: "180K",
    industrialProfile: "Providence is a northeastern manufacturing and petrochemical hub with port operations. The region's inspection focus includes fuel distribution facilities, manufacturing equipment validation, and marine terminal infrastructure."
  },
  {
    name: "Columbia",
    slug: "columbia-south-carolina",
    country: "US",
    region: "South Carolina",
    industries: ["Petrochemicals", "Manufacturing", "Nuclear"],
    companies: ["Huntsman", "Sonoco", "Dominion Energy"],
    population: "136K",
    industrialProfile: "Columbia is a major petrochemical and manufacturing center with nuclear power operations. The city's inspection environment emphasizes chemical plant equipment, manufacturing facility systems, and nuclear facility NDT requirements."
  },
  {
    name: "Sioux Falls",
    slug: "sioux-falls-south-dakota",
    country: "US",
    region: "South Dakota",
    industries: ["Manufacturing", "Energy", "Agriculture"],
    companies: ["Cargill", "Raven Industries", "Northern Star Energy"],
    population: "192K",
    industrialProfile: "Sioux Falls is a manufacturing hub for the northern Great Plains with agricultural processing and energy operations. The region's inspection focus includes grain and food processing equipment, manufacturing systems, and energy infrastructure."
  },
  {
    name: "Nashville",
    slug: "nashville-tennessee",
    country: "US",
    region: "Tennessee",
    industries: ["Petrochemicals", "Manufacturing", "Energy"],
    companies: ["Eastman Chemical", "Nissan", "TVA"],
    population: "715K",
    industrialProfile: "Nashville is a major manufacturing and petrochemical hub with energy operations. The city's inspection environment includes chemical processing facilities, automotive manufacturing equipment, and regional energy infrastructure."
  },
  {
    name: "Houston",
    slug: "houston-texas",
    country: "US",
    region: "Texas",
    industries: ["Oil & Gas", "Petrochemicals", "Refining"],
    companies: ["ExxonMobil", "Chevron", "Shell"],
    population: "2.3M",
    industrialProfile: "Houston is the world's petrochemical capital with extensive refining, oil and gas operations, and chemical production. The region's inspection ecosystem is incredibly complex, encompassing massive refineries, pipeline networks, storage farms, and advanced petrochemical processing facilities."
  },
  {
    name: "Dallas",
    slug: "dallas-texas",
    country: "US",
    region: "Texas",
    industries: ["Oil & Gas", "Manufacturing", "Energy"],
    companies: ["AT&T", "Southwest Airlines", "Fluor"],
    population: "1.34M",
    industrialProfile: "Dallas is a major oil and gas headquarters hub with manufacturing operations. The city's inspection focus includes oil field equipment, pipeline infrastructure, and manufacturing facility systems serving the energy industry."
  },
  {
    name: "Austin",
    slug: "austin-texas",
    country: "US",
    region: "Texas",
    industries: ["Technology", "Manufacturing", "Energy"],
    companies: ["Apple", "Oracle", "Tesla"],
    population: "978K",
    industrialProfile: "Austin is a technology and advanced manufacturing hub with energy operations. The region's inspection environment emphasizes precision electronics manufacturing, data center infrastructure, and advanced technology facility systems."
  },
  {
    name: "San Antonio",
    slug: "san-antonio-texas",
    country: "US",
    region: "Texas",
    industries: ["Military", "Petrochemicals", "Manufacturing"],
    companies: ["US Air Force", "Valero Energy", "Westinghouse"],
    population: "1.55M",
    industrialProfile: "San Antonio combines military operations with petrochemical manufacturing. The inspection landscape includes military equipment compliance, chemical processing facilities, and manufacturing systems supporting defense operations."
  },
  {
    name: "Salt Lake City",
    slug: "salt-lake-city-utah",
    country: "US",
    region: "Utah",
    industries: ["Refining", "Mining", "Manufacturing"],
    companies: ["Marathon Petroleum", "Kennecott Copper", "Tesoro"],
    population: "200K",
    industrialProfile: "Salt Lake City is a major refining center with integrated mining operations. The region's inspection focus includes crude processing, mining equipment and facilities, and manufacturing infrastructure in the intermountain region."
  },
  {
    name: "Burlington",
    slug: "burlington-vermont",
    country: "US",
    region: "Vermont",
    industries: ["Manufacturing", "Energy", "Petrochemicals"],
    companies: ["Global Foundries", "Vermont Yankee", "Ben & Jerry's"],
    population: "45K",
    industrialProfile: "Burlington is a manufacturing hub with semiconductor and energy operations. The city's inspection environment includes semiconductor equipment, power generation systems, and manufacturing facility compliance."
  },
  {
    name: "Richmond",
    slug: "richmond-virginia",
    country: "US",
    region: "Virginia",
    industries: ["Petrochemicals", "Refining", "Manufacturing"],
    companies: ["Dominion Energy", "Chevron", "Altria"],
    population: "230K",
    industrialProfile: "Richmond is a petrochemical and refining center with major energy operations. The region's inspection focus includes chemical plant equipment, fuel processing, energy infrastructure, and manufacturing systems."
  },
  {
    name: "Seattle",
    slug: "seattle-washington",
    country: "US",
    region: "Washington",
    industries: ["Aerospace", "Technology", "Petrochemicals"],
    companies: ["Boeing", "Microsoft", "Amazon"],
    population: "753K",
    industrialProfile: "Seattle is a major aerospace and technology hub with petrochemical operations. The city's inspection environment emphasizes aerospace structural validation, advanced technology manufacturing, and chemical processing facilities."
  },
  {
    name: "Charleston",
    slug: "charleston-west-virginia",
    country: "US",
    region: "West Virginia",
    industries: ["Petrochemicals", "Refining", "Chemicals"],
    companies: ["Huntsman", "Dupont", "Eastman"],
    population: "49K",
    industrialProfile: "Charleston is a major petrochemical and chemical production center. The region's inspection landscape includes complex chemical reactors, pressure vessels, hazardous materials processing equipment, and integrated chemical manufacturing systems."
  },
  {
    name: "Milwaukee",
    slug: "milwaukee-wisconsin",
    country: "US",
    region: "Wisconsin",
    industries: ["Manufacturing", "Refining", "Petrochemicals"],
    companies: ["Harley-Davidson", "Valero Energy", "MillerCoors"],
    population: "594K",
    industrialProfile: "Milwaukee is a major Midwest manufacturing hub with refining operations. The city's inspection environment includes precision manufacturing equipment, crude processing facilities, and integrated industrial manufacturing systems."
  },
  {
    name: "Cheyenne",
    slug: "cheyenne-wyoming",
    country: "US",
    region: "Wyoming",
    industries: ["Oil & Gas", "Refining", "Energy"],
    companies: ["Frontier Oil", "Union Pacific", "Black Hills Energy"],
    population: "65K",
    industrialProfile: "Cheyenne is a major oil and gas hub with refining operations. The region's inspection focus includes oil field equipment, pipeline infrastructure, fuel processing, and energy production systems."
  },
  // Canada (50+ cities)
  {
    name: "Fort McMurray",
    slug: "fort-mcmurray-alberta",
    country: "CA",
    region: "Alberta",
    industries: ["Oil Sands", "Oil & Gas", "Petrochemicals"],
    companies: ["Suncor Energy", "Canadian Natural", "Cenovus"],
    population: "74K",
    industrialProfile: "Fort McMurray is the center of Canada's oil sands operations with extensive extraction and processing facilities. The region's inspection environment is specialized for heavy crude processing, extraction equipment validation, and extreme-capacity pipeline systems."
  },
  {
    name: "Grande Prairie",
    slug: "grande-prairie-alberta",
    country: "CA",
    region: "Alberta",
    industries: ["Oil & Gas", "Petrochemicals", "Energy"],
    companies: ["ConocoPhillips", "Encana", "Exxon"],
    population: "63K",
    industrialProfile: "Grande Prairie is a major oil and gas hub serving northern Alberta's hydrocarbon operations. The city's inspection focus includes wellhead equipment, gathering systems, processing facilities, and pipeline infrastructure."
  },
  {
    name: "Calgary",
    slug: "calgary-alberta",
    country: "CA",
    region: "Alberta",
    industries: ["Oil & Gas", "Petrochemicals", "Energy"],
    companies: ["TC Energy", "Enbridge", "Husky Energy"],
    population: "1.34M",
    industrialProfile: "Calgary is Canada's energy capital with extensive oil and gas headquarters and operations. The region's inspection ecosystem includes pipeline infrastructure, processing facilities, and energy equipment validation serving North American markets."
  },
  {
    name: "Edmonton",
    slug: "edmonton-alberta",
    country: "CA",
    region: "Alberta",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Suncor Energy", "Shell Canada", "Syncrude"],
    population: "1.49M",
    industrialProfile: "Edmonton is Canada's major refining and petrochemical hub with integrated oil and gas operations. The city's industrial profile emphasizes crude oil processing, chemical product manufacturing, and extensive pipeline networks."
  },
  {
    name: "Red Deer",
    slug: "red-deer-alberta",
    country: "CA",
    region: "Alberta",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Ovintiv", "Husky Energy", "TC Energy"],
    population: "100K",
    industrialProfile: "Red Deer is a major oil and gas processing hub in central Alberta. The region's inspection focus includes crude and natural gas processing, petrochemical manufacturing, and pipeline infrastructure."
  },
  {
    name: "Lethbridge",
    slug: "lethbridge-alberta",
    country: "CA",
    region: "Alberta",
    industries: ["Oil & Gas", "Manufacturing", "Agriculture"],
    companies: ["Agrium", "Taber Methanex", "Canadian Industries"],
    population: "92K",
    industrialProfile: "Lethbridge is a southern Alberta hub for oil and gas operations with agricultural chemical manufacturing. The city's inspection environment includes petrochemical processing, fertilizer production, and energy infrastructure."
  },
  {
    name: "Medicine Hat",
    slug: "medicine-hat-alberta",
    country: "CA",
    region: "Alberta",
    industries: ["Oil & Gas", "Petrochemicals", "Fertilizers"],
    companies: ["Fertilizer Corporation", "Agrium", "Methanex"],
    population: "63K",
    industrialProfile: "Medicine Hat is a major natural gas processing and petrochemical hub. The region's inspection focus includes gas processing plants, fertilizer production equipment, and chemical processing facilities."
  },
  {
    name: "Fort St. John",
    slug: "fort-st-john-british-columbia",
    country: "CA",
    region: "British Columbia",
    industries: ["Oil & Gas", "Natural Gas", "Petrochemicals"],
    companies: ["TC Energy", "Westcoast Energy", "Spectra Energy"],
    population: "20K",
    industrialProfile: "Fort St. John is a major natural gas production hub in northeastern British Columbia. The city's inspection environment focuses on gas extraction equipment, processing plants, and pipeline infrastructure."
  },
  {
    name: "Vancouver",
    slug: "vancouver-british-columbia",
    country: "CA",
    region: "British Columbia",
    industries: ["Oil & Gas", "Petrochemicals", "Port Operations"],
    companies: ["Chevron", "Shell", "Port of Vancouver"],
    population: "675K",
    industrialProfile: "Vancouver is a major West Coast petrochemical hub with extensive port operations and oil and gas distribution. The region's inspection ecosystem includes marine terminals, fuel distribution systems, and processing facilities."
  },
  {
    name: "Victoria",
    slug: "victoria-british-columbia",
    country: "CA",
    region: "British Columbia",
    industries: ["Refining", "Port Operations", "Manufacturing"],
    companies: ["Tesoro", "Chevron", "Port Authority"],
    population: "85K",
    industrialProfile: "Victoria hosts a major West Coast refinery with marine fuel operations. The city's inspection focus includes crude processing, fuel distribution, and marine terminal infrastructure."
  },
  {
    name: "Winnipeg",
    slug: "winnipeg-manitoba",
    country: "CA",
    region: "Manitoba",
    industries: ["Oil & Gas", "Manufacturing", "Agriculture"],
    companies: ["Imperial Oil", "Cargill", "Canadian Wheat"],
    population: "850K",
    industrialProfile: "Winnipeg is a major central Canadian oil and gas hub with agricultural processing. The region's inspection environment includes petroleum distribution, agricultural manufacturing, and energy infrastructure."
  },
  {
    name: "Montreal",
    slug: "montreal-quebec",
    country: "CA",
    region: "Quebec",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Valero Energy", "Chevron", "Port of Montreal"],
    population: "4.27M",
    industrialProfile: "Montreal is Canada's eastern refining and petrochemical hub with major port operations. The city's inspection landscape includes large refinery operations, chemical processing, marine terminals, and pipeline infrastructure."
  },
  {
    name: "Quebec City",
    slug: "quebec-city-quebec",
    country: "CA",
    region: "Quebec",
    industries: ["Refining", "Port Operations", "Chemicals"],
    companies: ["Irving Oil", "Valero", "Port Authority"],
    population: "542K",
    industrialProfile: "Quebec City hosts a major refinery with extensive port operations. The region's inspection focus includes fuel processing, marine terminal operations, and chemical distribution infrastructure."
  },
  {
    name: "Toronto",
    slug: "toronto-ontario",
    country: "CA",
    region: "Ontario",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Suncor Energy", "TC Energy", "Enbridge"],
    population: "2.93M",
    industrialProfile: "Toronto is Canada's largest city and a major petrochemical hub with extensive manufacturing. The city's inspection environment includes refining operations, chemical manufacturing, and manufacturing facility systems."
  },
  {
    name: "Hamilton",
    slug: "hamilton-ontario",
    country: "CA",
    region: "Ontario",
    industries: ["Refining", "Steel", "Manufacturing"],
    companies: ["Suncor Energy", "ArcelorMittal", "Dofasco"],
    population: "579K",
    industrialProfile: "Hamilton is an Ontario refining and steel production center. The region's inspection landscape includes crude processing, metal fabrication, structural welding, and integrated manufacturing systems."
  },
  {
    name: "Sarnia",
    slug: "sarnia-ontario",
    country: "CA",
    region: "Ontario",
    industries: ["Petrochemicals", "Refining", "Chemicals"],
    companies: ["Suncor Energy", "Shell", "Ineos"],
    population: "72K",
    industrialProfile: "Sarnia is a major petrochemical and refining hub in southwestern Ontario. The city's inspection environment emphasizes chemical manufacturing, crude processing, and extensive petrochemical facility operations."
  },
  {
    name: "Halifax",
    slug: "halifax-nova-scotia",
    country: "CA",
    region: "Nova Scotia",
    industries: ["Port Operations", "Refining", "Petrochemicals"],
    companies: ["Irving Oil", "Emera", "Port Authority"],
    population: "403K",
    industrialProfile: "Halifax is a major Atlantic coast refining hub with extensive port operations. The region's inspection focus includes fuel processing, marine terminal operations, and shipping infrastructure."
  },
  {
    name: "Saint John",
    slug: "saint-john-new-brunswick",
    country: "CA",
    region: "New Brunswick",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Irving Oil", "Canaport LNG", "Port Authority"],
    population: "127K",
    industrialProfile: "Saint John is an Atlantic coast refining and LNG hub with major port operations. The city's inspection environment includes fuel processing, liquefied natural gas handling, and marine terminal systems."
  },
  // Middle East (80+ cities)
  {
    name: "Jubail",
    slug: "jubail-saudi-arabia",
    country: "SA",
    region: "Eastern Province",
    industries: ["Petrochemicals", "Oil & Gas", "Refining"],
    companies: ["Saudi Aramco", "SABIC", "SAMREF"],
    population: "500K",
    industrialProfile: "Jubail is the world's largest integrated petrochemical complex with massive refining and chemical production capacity. The region's inspection ecosystem is unparalleled, featuring vast petrochemical networks, advanced processing equipment, and complex integrated facility operations."
  },
  {
    name: "Yanbu",
    slug: "yanbu-saudi-arabia",
    country: "SA",
    region: "Medina",
    industries: ["Petrochemicals", "Refining", "Oil & Gas"],
    companies: ["Saudi Aramco", "SABIC", "LUKOIL"],
    population: "300K",
    industrialProfile: "Yanbu is a major Red Sea petrochemical and refining hub with extensive chemical production. The city's inspection focus includes massive processing equipment, pipeline infrastructure, and integrated petrochemical manufacturing."
  },
  {
    name: "Ras Tanura",
    slug: "ras-tanura-saudi-arabia",
    country: "SA",
    region: "Eastern Province",
    industries: ["Refining", "Oil & Gas", "Petrochemicals"],
    companies: ["Saudi Aramco", "Exxon Mobil"],
    population: "60K",
    industrialProfile: "Ras Tanura is a major crude oil refining center and marine terminal hub. The region's inspection environment emphasizes crude processing, marine loading operations, and storage tank systems."
  },
  {
    name: "Rabigh",
    slug: "rabigh-saudi-arabia",
    country: "SA",
    region: "Mecca",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Saudi Aramco", "Sumitomo Chemical", "Exxon Mobil"],
    population: "25K",
    industrialProfile: "Rabigh is a Red Sea refining and petrochemical hub with significant chemical production. The city's inspection focus includes fuel processing, petrochemical manufacturing, and marine operations."
  },
  {
    name: "Jeddah",
    slug: "jeddah-saudi-arabia",
    country: "SA",
    region: "Mecca",
    industries: ["Port Operations", "Refining", "Petrochemicals"],
    companies: ["Aramco Trading", "SABIC", "Chevron"],
    population: "3.6M",
    industrialProfile: "Jeddah is Saudi Arabia's major port city with significant refining and petrochemical operations. The region's inspection environment includes port terminal operations, fuel processing, and chemical distribution."
  },
  {
    name: "Riyadh",
    slug: "riyadh-saudi-arabia",
    country: "SA",
    region: "Riyadh",
    industries: ["Oil & Gas", "Petrochemicals", "Energy"],
    companies: ["Saudi Aramco", "SABIC", "Saudi Electric"],
    population: "7.67M",
    industrialProfile: "Riyadh is Saudi Arabia's capital and energy sector hub with major oil and gas operations. The city's inspection landscape includes energy infrastructure, petrochemical operations, and industrial facility systems."
  },
  {
    name: "Ruwais",
    slug: "ruwais-uae",
    country: "AE",
    region: "Abu Dhabi",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Abu Dhabi National Oil", "ADNOC Refining", "Borouge"],
    population: "30K",
    industrialProfile: "Ruwais is a major UAE refining and petrochemical hub with integrated complex operations. The region's inspection focus includes crude processing, chemical manufacturing, and advanced processing equipment."
  },
  {
    name: "Fujairah",
    slug: "fujairah-uae",
    country: "AE",
    region: "Fujairah",
    industries: ["Refining", "Port Operations", "Petrochemicals"],
    companies: ["ENOC", "Fujairah Port Authority", "Chevron"],
    population: "150K",
    industrialProfile: "Fujairah is a major UAE port and refining hub on the Gulf of Oman. The city's inspection environment includes fuel processing, marine terminal operations, and shipping infrastructure."
  },
  {
    name: "Sharjah",
    slug: "sharjah-uae",
    country: "AE",
    region: "Sharjah",
    industries: ["Port Operations", "Petrochemicals", "Manufacturing"],
    companies: ["Sharjah Port Authority", "ENOC", "Borouge"],
    population: "1.64M",
    industrialProfile: "Sharjah is a major UAE port city with petrochemical operations and manufacturing. The region's inspection focus includes port terminals, chemical manufacturing, and shipping infrastructure."
  },
  {
    name: "Dubai",
    slug: "dubai-uae",
    country: "AE",
    region: "Dubai",
    industries: ["Port Operations", "Petrochemicals", "Energy"],
    companies: ["ENOC", "Port Authority", "Emirates National Oil"],
    population: "3.60M",
    industrialProfile: "Dubai is the UAE's major port and energy hub with significant petrochemical operations. The city's inspection landscape includes major port facilities, fuel processing, energy infrastructure, and manufacturing."
  },
  {
    name: "Ras Laffan",
    slug: "ras-laffan-qatar",
    country: "QA",
    region: "Qatar",
    industries: ["LNG", "Petrochemicals", "Oil & Gas"],
    companies: ["Qatar Petroleum", "RasGas", "ExxonMobil"],
    population: "30K",
    industrialProfile: "Ras Laffan is the world's largest liquefied natural gas production hub. The region's inspection environment is specialized for LNG processing, cryogenic equipment, and advanced petrochemical facilities."
  },
  {
    name: "Mesaieed",
    slug: "mesaieed-qatar",
    country: "QA",
    region: "Qatar",
    industries: ["Petrochemicals", "Refining", "Oil & Gas"],
    companies: ["Qatar Petroleum", "QAPCO", "Exxonmobil"],
    population: "40K",
    industrialProfile: "Mesaieed is a major Qatari petrochemical and refining hub. The city's inspection focus includes chemical processing, crude refining, and integrated petrochemical manufacturing."
  },
  {
    name: "Doha",
    slug: "doha-qatar",
    country: "QA",
    region: "Qatar",
    industries: ["Oil & Gas", "Petrochemicals", "Energy"],
    companies: ["Qatar Petroleum", "Qatar Gas", "Shell"],
    population: "1.58M",
    industrialProfile: "Doha is Qatar's capital and major energy hub with significant oil and gas operations. The region's inspection environment includes energy infrastructure, petrochemical operations, and industrial systems."
  },
  {
    name: "Kuwait City",
    slug: "kuwait-city-kuwait",
    country: "KW",
    region: "Kuwait",
    industries: ["Oil & Gas", "Refining", "Petrochemicals"],
    companies: ["Kuwait Petroleum", "KNPC", "Equate"],
    population: "2.41M",
    industrialProfile: "Kuwait City is Kuwait's capital and major energy hub with extensive refining and petrochemical operations. The region's inspection landscape includes crude processing, chemical manufacturing, and integrated energy infrastructure."
  },
  {
    name: "Shuaiba",
    slug: "shuaiba-kuwait",
    country: "KW",
    region: "Kuwait",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Kuwait Petroleum", "KNPC", "Equate"],
    population: "20K",
    industrialProfile: "Shuaiba is a major Kuwaiti refining and petrochemical hub. The city's inspection environment emphasizes crude processing, chemical manufacturing, and processing equipment validation."
  },
  {
    name: "Mina al-Ahmadi",
    slug: "mina-al-ahmadi-kuwait",
    country: "KW",
    region: "Kuwait",
    industries: ["Oil & Gas", "Port Operations", "Refining"],
    companies: ["Kuwait Petroleum", "State Oil Company", "Port Authority"],
    population: "50K",
    industrialProfile: "Mina al-Ahmadi is Kuwait's primary port and oil export hub with refining operations. The region's inspection focus includes marine loading operations, fuel storage, and crude processing."
  },
  {
    name: "Manama",
    slug: "manama-bahrain",
    country: "BH",
    region: "Bahrain",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Bahrain Petroleum", "GPIC", "Shell"],
    population: "438K",
    industrialProfile: "Manama is Bahrain's capital with major refining and petrochemical operations. The city's inspection environment includes crude processing, chemical manufacturing, and integrated petrochemical facilities."
  },
  {
    name: "Salmiya",
    slug: "salmiya-bahrain",
    country: "BH",
    region: "Bahrain",
    industries: ["Petrochemicals", "Manufacturing", "Refining"],
    companies: ["GPIC", "Asry Shipyard", "Chevron"],
    population: "80K",
    industrialProfile: "Salmiya is a Bahraini petrochemical and manufacturing hub. The region's inspection focus includes chemical processing, shipbuilding operations, and manufacturing equipment."
  },
  {
    name: "Sohar",
    slug: "sohar-oman",
    country: "OM",
    region: "North Batinah",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Oman Refineries", "Orpic", "Port Authority"],
    population: "100K",
    industrialProfile: "Sohar is Oman's major refining and port hub with petrochemical production. The city's inspection environment includes crude processing, chemical manufacturing, and marine terminal operations."
  },
  {
    name: "Sur",
    slug: "sur-oman",
    country: "OM",
    region: "South Sharqiyah",
    industries: ["Port Operations", "Petrochemicals", "Refining"],
    companies: ["Orpic", "Port Authority", "Chevron"],
    population: "35K",
    industrialProfile: "Sur is an Omani port city with petrochemical operations and fuel distribution. The region's inspection focus includes marine operations, chemical processing, and shipping infrastructure."
  },
  {
    name: "Duqm",
    slug: "duqm-oman",
    country: "OM",
    region: "Al Wusta",
    industries: ["Port Operations", "Oil & Gas", "Petrochemicals"],
    companies: ["Orpic", "Port Authority", "Oman LNG"],
    population: "30K",
    industrialProfile: "Duqm is a developing Omani port with oil and gas operations. The city's inspection environment includes marine terminal operations, petrochemical facilities, and energy infrastructure."
  },
  {
    name: "Muscat",
    slug: "muscat-oman",
    country: "OM",
    region: "Muscat",
    industries: ["Oil & Gas", "Port Operations", "Energy"],
    companies: ["Oman Oil Company", "Port Authority", "Shell"],
    population: "1.09M",
    industrialProfile: "Muscat is Oman's capital and major energy hub with oil and gas operations. The region's inspection landscape includes energy infrastructure, port operations, and industrial facility systems."
  },
  // India (80+ cities)
  {
    name: "Jamnagar",
    slug: "jamnagar-india",
    country: "IN",
    region: "Gujarat",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Reliance Industries", "Chevron", "Shell"],
    population: "625K",
    industrialProfile: "Jamnagar is India's largest refining hub with world-scale crude processing and petrochemical manufacturing. The region's inspection ecosystem is complex, featuring massive refinery operations, advanced petrochemical facilities, and extensive processing equipment."
  },
  {
    name: "Mangalore",
    slug: "mangalore-india",
    country: "IN",
    region: "Karnataka",
    industries: ["Refining", "Port Operations", "Petrochemicals"],
    companies: ["Mangalore Refinery", "Chevron", "Tuticorin Alkali"],
    population: "629K",
    industrialProfile: "Mangalore is a major South Indian refining hub with port operations. The city's inspection environment includes crude processing, marine operations, petrochemical manufacturing, and fuel distribution."
  },
  {
    name: "Paradip",
    slug: "paradip-india",
    country: "IN",
    region: "Odisha",
    industries: ["Refining", "Port Operations", "Oil & Gas"],
    companies: ["Indian Oil Corporation", "Port Authority", "Shell"],
    population: "150K",
    industrialProfile: "Paradip is a major Eastern Indian port and refining hub. The region's inspection focus includes crude processing, marine terminal operations, shipping infrastructure, and petrochemical facilities."
  },
  {
    name: "Vizag",
    slug: "vizag-india",
    country: "IN",
    region: "Andhra Pradesh",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Indian Oil Corporation", "Hindustan Petroleum", "Port Authority"],
    population: "1.72M",
    industrialProfile: "Vizag is a major Southeastern refining hub with port operations. The city's inspection landscape includes crude processing, chemical manufacturing, marine operations, and fuel distribution infrastructure."
  },
  {
    name: "Bina",
    slug: "bina-india",
    country: "IN",
    region: "Madhya Pradesh",
    industries: ["Refining", "Oil & Gas", "Petrochemicals"],
    companies: ["Indian Oil Corporation", "Chevron", "Shell"],
    population: "50K",
    industrialProfile: "Bina is a major Central Indian refining hub serving inland markets. The region's inspection focus includes crude processing, petrochemical manufacturing, and pipeline infrastructure."
  },
  {
    name: "Numaligarh",
    slug: "numaligarh-india",
    country: "IN",
    region: "Assam",
    industries: ["Refining", "Oil & Gas", "Petrochemicals"],
    companies: ["Numaligarh Refinery", "ONGC", "Shell"],
    population: "30K",
    industrialProfile: "Numaligarh is an Northeastern Indian refining hub with crude processing. The city's inspection environment includes fuel processing, petrochemical operations, and pipeline systems."
  },
  {
    name: "Haldia",
    slug: "haldia-india",
    country: "IN",
    region: "West Bengal",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Indian Oil Corporation", "Hindustan Petroleum", "Port Authority"],
    population: "60K",
    industrialProfile: "Haldia is an Eastern Indian refining hub with port operations. The region's inspection focus includes crude processing, chemical manufacturing, marine terminal operations, and shipping infrastructure."
  },
  {
    name: "Panipat",
    slug: "panipat-india",
    country: "IN",
    region: "Haryana",
    industries: ["Refining", "Oil & Gas", "Petrochemicals"],
    companies: ["Indian Oil Corporation", "Chevron", "Hindustan Petroleum"],
    population: "380K",
    industrialProfile: "Panipat is a major Northern Indian refining hub serving the Delhi region. The city's inspection environment includes crude processing, petrochemical manufacturing, and extensive pipeline networks."
  },
  {
    name: "Mathura",
    slug: "mathura-india",
    country: "IN",
    region: "Uttar Pradesh",
    industries: ["Refining", "Oil & Gas", "Petrochemicals"],
    companies: ["Indian Oil Corporation", "Chevron", "Shell"],
    population: "305K",
    industrialProfile: "Mathura is a major Northern Indian refining hub near Delhi. The region's inspection focus includes crude processing, chemical manufacturing, and pipeline infrastructure serving northern markets."
  },
  {
    name: "Barauni",
    slug: "barauni-india",
    country: "IN",
    region: "Bihar",
    industries: ["Refining", "Oil & Gas", "Petrochemicals"],
    companies: ["Indian Oil Corporation", "Hindustan Petroleum", "Shell"],
    population: "30K",
    industrialProfile: "Barauni is a major Eastern Indian refining hub. The city's inspection environment includes crude processing, petrochemical manufacturing, and pipeline systems."
  },
  {
    name: "Mumbai",
    slug: "mumbai-india",
    country: "IN",
    region: "Maharashtra",
    industries: ["Port Operations", "Refining", "Petrochemicals"],
    companies: ["Hindustan Petroleum", "Indian Oil", "Port Authority"],
    population: "20.96M",
    industrialProfile: "Mumbai is India's major maritime hub with petrochemical and refining operations. The region's inspection ecosystem includes port terminal operations, fuel distribution, marine operations, and manufacturing systems."
  },
  {
    name: "Chennai",
    slug: "chennai-india",
    country: "IN",
    region: "Tamil Nadu",
    industries: ["Refining", "Port Operations", "Petrochemicals"],
    companies: ["Hindustan Petroleum", "Indian Oil", "Chevron"],
    population: "7.09M",
    industrialProfile: "Chennai is a major Southern Indian refining and port hub. The city's inspection environment includes crude processing, marine operations, petrochemical manufacturing, and shipping infrastructure."
  },
  {
    name: "Cochin",
    slug: "cochin-india",
    country: "IN",
    region: "Kerala",
    industries: ["Refining", "Port Operations", "Petrochemicals"],
    companies: ["Cochin Refinery", "Port Authority", "Shell"],
    population: "2.11M",
    industrialProfile: "Cochin is a major Western Indian port with petrochemical operations. The region's inspection focus includes marine operations, crude processing, chemical manufacturing, and shipping infrastructure."
  },
  {
    name: "Kolkata",
    slug: "kolkata-india",
    country: "IN",
    region: "West Bengal",
    industries: ["Port Operations", "Manufacturing", "Petrochemicals"],
    companies: ["Indian Oil", "Port Authority", "Reliance"],
    population: "14.68M",
    industrialProfile: "Kolkata is an Eastern Indian port city with manufacturing and petrochemical operations. The city's inspection landscape includes port operations, manufacturing equipment, chemical facilities, and industrial infrastructure."
  },
  {
    name: "Bangalore",
    slug: "bangalore-india",
    country: "IN",
    region: "Karnataka",
    industries: ["Technology", "Manufacturing", "Energy"],
    companies: ["Infosys", "TCS", "Wipro"],
    population: "11.44M",
    industrialProfile: "Bangalore is India's technology hub with manufacturing and energy operations. The region's inspection environment emphasizes precision manufacturing, technology facility systems, and industrial infrastructure."
  },
  {
    name: "Delhi",
    slug: "delhi-india",
    country: "IN",
    region: "Delhi",
    industries: ["Manufacturing", "Energy", "Petrochemicals"],
    companies: ["Delhi Petroleum", "Power Generation", "Manufacturing"],
    population: "32.94M",
    industrialProfile: "Delhi is India's capital with manufacturing and energy operations serving a massive metropolitan area. The city's inspection landscape includes fuel distribution, manufacturing systems, and industrial infrastructure."
  },
  {
    name: "Ahmedabad",
    slug: "ahmedabad-india",
    country: "IN",
    region: "Gujarat",
    industries: ["Petrochemicals", "Manufacturing", "Textiles"],
    companies: ["Reliance", "NTPC", "Textiles"],
    population: "8.45M",
    industrialProfile: "Ahmedabad is a major Gujarati manufacturing and petrochemical hub. The region's inspection focus includes textile manufacturing, chemical processing, and industrial facility systems."
  },
  // Asia-Pacific (100+ cities)
  {
    name: "Singapore",
    slug: "singapore-singapore",
    country: "SG",
    region: "Singapore",
    industries: ["Petrochemicals", "Refining", "Port Operations"],
    companies: ["ExxonMobil", "Shell", "Chevron"],
    population: "5.86M",
    industrialProfile: "Singapore is one of the world's largest petrochemical hubs and a major refining center. The region's inspection ecosystem is world-class, featuring mega-scale refining operations, advanced petrochemical complexes, and sophisticated port terminals."
  },
  {
    name: "Johor Bahru",
    slug: "johor-bahru-malaysia",
    country: "MY",
    region: "Johor",
    industries: ["Petrochemicals", "Refining", "Oil & Gas"],
    companies: ["Petronas", "Shell", "ExxonMobil"],
    population: "1.52M",
    industrialProfile: "Johor Bahru is Malaysia's major refining and petrochemical hub. The city's inspection environment includes crude processing, chemical manufacturing, and integrated petrochemical facilities."
  },
  {
    name: "Kuala Lumpur",
    slug: "kuala-lumpur-malaysia",
    country: "MY",
    region: "Kuala Lumpur",
    industries: ["Oil & Gas", "Petrochemicals", "Energy"],
    companies: ["Petronas", "Shell", "Exxon Mobil"],
    population: "1.97M",
    industrialProfile: "Kuala Lumpur is Malaysia's capital with oil and gas headquarters operations. The region's inspection landscape includes energy infrastructure, petrochemical operations, and industrial facility systems."
  },
  {
    name: "Miri",
    slug: "miri-malaysia",
    country: "MY",
    region: "Sarawak",
    industries: ["Oil & Gas", "LNG", "Petrochemicals"],
    companies: ["Shell Malaysia", "Petronas", "ExxonMobil"],
    population: "300K",
    industrialProfile: "Miri is a major Southeast Asian oil and gas hub with LNG operations. The city's inspection focus includes oil field equipment, LNG processing, and petrochemical facilities."
  },
  {
    name: "Jakarta",
    slug: "jakarta-indonesia",
    country: "ID",
    region: "Jakarta",
    industries: ["Petrochemicals", "Port Operations", "Manufacturing"],
    companies: ["Pertamina", "Chevron", "Shell"],
    population: "10.56M",
    industrialProfile: "Jakarta is Indonesia's capital and petrochemical hub with major port operations. The region's inspection ecosystem includes petrochemical manufacturing, port terminals, and industrial facility systems."
  },
  {
    name: "Balikpapan",
    slug: "balikpapan-indonesia",
    country: "ID",
    region: "East Kalimantan",
    industries: ["Refining", "Oil & Gas", "Petrochemicals"],
    companies: ["Pertamina", "Chevron", "Shell"],
    population: "403K",
    industrialProfile: "Balikpapan is a major Indonesian refining hub with oil and gas operations. The city's inspection environment includes crude processing, petrochemical manufacturing, and energy infrastructure."
  },
  {
    name: "Cilacap",
    slug: "cilacap-indonesia",
    country: "ID",
    region: "Central Java",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Pertamina", "Shell", "Chevron"],
    population: "241K",
    industrialProfile: "Cilacap is a major Indonesian refining hub with extensive petrochemical operations. The region's inspection focus includes crude processing, chemical manufacturing, and pipeline infrastructure."
  },
  {
    name: "Dumai",
    slug: "dumai-indonesia",
    country: "ID",
    region: "Riau",
    industries: ["Oil & Gas", "Port Operations", "Petrochemicals"],
    companies: ["Pertamina", "ExxonMobil", "Chevron"],
    population: "220K",
    industrialProfile: "Dumai is a major Sumatran oil and gas hub with port operations. The city's inspection environment includes oil field equipment, marine terminals, and petrochemical facilities."
  },
  {
    name: "Bangkok",
    slug: "bangkok-thailand",
    country: "TH",
    region: "Bangkok",
    industries: ["Petrochemicals", "Refining", "Port Operations"],
    companies: ["PTT", "Shell", "Chevron"],
    population: "8.30M",
    industrialProfile: "Bangkok is Thailand's capital and petrochemical hub with major port operations. The region's inspection landscape includes petrochemical manufacturing, port terminals, and industrial facility systems."
  },
  {
    name: "Rayong",
    slug: "rayong-thailand",
    country: "TH",
    region: "Rayong",
    industries: ["Petrochemicals", "Refining", "Manufacturing"],
    companies: ["PTT", "Shell", "PTTEP"],
    population: "369K",
    industrialProfile: "Rayong is a major Eastern Thai petrochemical and refining hub. The city's inspection environment includes petrochemical manufacturing, crude processing, and manufacturing facility operations."
  },
  {
    name: "Map Ta Phut",
    slug: "map-ta-phut-thailand",
    country: "TH",
    region: "Rayong",
    industries: ["Petrochemicals", "Refining", "Chemicals"],
    companies: ["PTT", "Shell", "Exxon Mobil"],
    population: "50K",
    industrialProfile: "Map Ta Phut is Thailand's largest industrial petrochemical complex. The region's inspection focus includes massive petrochemical facilities, refining operations, and chemical manufacturing."
  },
  {
    name: "Ho Chi Minh City",
    slug: "ho-chi-minh-city-vietnam",
    country: "VN",
    region: "Ho Chi Minh City",
    industries: ["Petrochemicals", "Port Operations", "Manufacturing"],
    companies: ["PetroVietnam", "Shell", "Chevron"],
    population: "8.93M",
    industrialProfile: "Ho Chi Minh City is Vietnam's largest petrochemical and port hub. The city's inspection environment includes petrochemical operations, port terminal facilities, and manufacturing systems."
  },
  {
    name: "Vung Tau",
    slug: "vung-tau-vietnam",
    country: "VN",
    region: "Ba Ria-Vung Tau",
    industries: ["Oil & Gas", "Port Operations", "Petrochemicals"],
    companies: ["PetroVietnam", "Shell", "ExxonMobil"],
    population: "300K",
    industrialProfile: "Vung Tau is a major Vietnamese offshore oil and gas hub with port operations. The region's inspection focus includes oil field equipment, marine operations, and petrochemical facilities."
  },
  {
    name: "Haiphong",
    slug: "haiphong-vietnam",
    country: "VN",
    region: "Hai Phong",
    industries: ["Port Operations", "Petrochemicals", "Manufacturing"],
    companies: ["PetroVietnam", "Port Authority", "Shell"],
    population: "2.07M",
    industrialProfile: "Haiphong is a major Northern Vietnamese port with petrochemical operations. The city's inspection landscape includes port terminals, petrochemical manufacturing, and shipping infrastructure."
  },
  {
    name: "Manila",
    slug: "manila-philippines",
    country: "PH",
    region: "Metro Manila",
    industries: ["Refining", "Port Operations", "Petrochemicals"],
    companies: ["Chevron Philippines", "Shell Philippines", "Port Authority"],
    population: "3.08M",
    industrialProfile: "Manila is the Philippines' capital with refining and port operations. The region's inspection environment includes fuel processing, marine terminals, and petrochemical manufacturing."
  },
  {
    name: "Batangas",
    slug: "batangas-philippines",
    country: "PH",
    region: "Batangas",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Chevron Philippines", "Shell Philippines", "Petron"],
    population: "1.77M",
    industrialProfile: "Batangas is a major Philippine refining and petrochemical hub. The city's inspection environment includes crude processing, chemical manufacturing, and port operations."
  },
  {
    name: "Tokyo",
    slug: "tokyo-japan",
    country: "JP",
    region: "Tokyo",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Idemitsu", "JX Nippon", "Shell Japan"],
    population: "13.96M",
    industrialProfile: "Tokyo is Japan's capital and major petrochemical hub with advanced manufacturing. The region's inspection landscape includes refining operations, petrochemical manufacturing, and precision industrial equipment."
  },
  {
    name: "Yokkaichi",
    slug: "yokkaichi-japan",
    country: "JP",
    region: "Mie",
    industries: ["Petrochemicals", "Refining", "Manufacturing"],
    companies: ["Idemitsu", "INEOS", "Kashima Ethylene"],
    population: "311K",
    industrialProfile: "Yokkaichi is Japan's largest petrochemical complex serving as a world-scale manufacturing hub. The city's inspection environment includes massive petrochemical facilities, refining operations, and advanced processing equipment."
  },
  {
    name: "Kawasaki",
    slug: "kawasaki-japan",
    country: "JP",
    region: "Kanagawa",
    industries: ["Petrochemicals", "Manufacturing", "Chemicals"],
    companies: ["JX Nippon", "Mitsubishi Chemical", "Idemitsu"],
    population: "1.53M",
    industrialProfile: "Kawasaki is a major Japanese petrochemical and manufacturing hub. The region's inspection focus includes petrochemical manufacturing, advanced equipment fabrication, and precision component production."
  },
  {
    name: "Chiba",
    slug: "chiba-japan",
    country: "JP",
    region: "Chiba",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Idemitsu", "JX Nippon", "Cosmo Oil"],
    population: "971K",
    industrialProfile: "Chiba is a major Japanese refining and petrochemical hub near Tokyo. The city's inspection environment includes crude processing, chemical manufacturing, and integrated industrial operations."
  },
  {
    name: "Ulsan",
    slug: "ulsan-south-korea",
    country: "KR",
    region: "Ulsan",
    industries: ["Petrochemicals", "Refining", "Shipbuilding"],
    companies: ["SK Energy", "GS Caltex", "Hyundai Heavy Industries"],
    population: "1.17M",
    industrialProfile: "Ulsan is South Korea's major petrochemical and shipbuilding hub with massive refining capacity. The region's inspection ecosystem includes petrochemical manufacturing, crude processing, and advanced marine construction."
  },
  {
    name: "Incheon",
    slug: "incheon-south-korea",
    country: "KR",
    region: "Incheon",
    industries: ["Petrochemicals", "Port Operations", "Manufacturing"],
    companies: ["SK Innovation", "Samsung", "Port Authority"],
    population: "2.95M",
    industrialProfile: "Incheon is a major Korean port with petrochemical operations and advanced manufacturing. The city's inspection landscape includes port terminals, petrochemical facilities, and precision manufacturing systems."
  },
  {
    name: "Beijing",
    slug: "beijing-china",
    country: "CN",
    region: "Beijing",
    industries: ["Petrochemicals", "Energy", "Manufacturing"],
    companies: ["CNPC", "Sinopec", "CNOOC"],
    population: "21.54M",
    industrialProfile: "Beijing is China's capital with major energy and petrochemical operations. The region's inspection landscape includes petrochemical manufacturing, energy infrastructure, and extensive industrial systems."
  },
  {
    name: "Shanghai",
    slug: "shanghai-china",
    country: "CN",
    region: "Shanghai",
    industries: ["Petrochemicals", "Refining", "Port Operations"],
    companies: ["Sinopec", "Shell China", "Port Authority"],
    population: "29.16M",
    industrialProfile: "Shanghai is China's largest city and major petrochemical and port hub. The city's inspection environment includes massive refining operations, petrochemical manufacturing, and extensive port terminal systems."
  },
  {
    name: "Guangzhou",
    slug: "guangzhou-china",
    country: "CN",
    region: "Guangdong",
    industries: ["Port Operations", "Petrochemicals", "Manufacturing"],
    companies: ["China National Offshore", "Sinopec", "Port Authority"],
    population: "15.30M",
    industrialProfile: "Guangzhou is a major Southern Chinese port with petrochemical operations. The region's inspection focus includes port terminals, petrochemical facilities, and manufacturing infrastructure."
  },
  {
    name: "Shenzhen",
    slug: "shenzhen-china",
    country: "CN",
    region: "Guangdong",
    industries: ["Manufacturing", "Technology", "Energy"],
    companies: ["Huawei", "Tencent", "CNOOC"],
    population: "12.53M",
    industrialProfile: "Shenzhen is a major Chinese technology and manufacturing hub with energy operations. The city's inspection environment emphasizes precision manufacturing, technology facility systems, and industrial infrastructure."
  },
  {
    name: "Dalian",
    slug: "dalian-china",
    country: "CN",
    region: "Liaoning",
    industries: ["Petrochemicals", "Refining", "Port Operations"],
    companies: ["CNPC", "Sinopec", "Port Authority"],
    population: "7.04M",
    industrialProfile: "Dalian is a major Northern Chinese port and petrochemical hub. The region's inspection focus includes refining operations, chemical manufacturing, marine operations, and shipping infrastructure."
  },
  {
    name: "Tianjin",
    slug: "tianjin-china",
    country: "CN",
    region: "Tianjin",
    industries: ["Petrochemicals", "Refining", "Port Operations"],
    companies: ["Sinopec", "CNPC", "Port Authority"],
    population: "15.62M",
    industrialProfile: "Tianjin is a major Northern Chinese port with massive refining and petrochemical operations. The city's inspection landscape includes world-scale refineries, petrochemical complexes, and extensive port facilities."
  },
  {
    name: "Sydney",
    slug: "sydney-australia",
    country: "AU",
    region: "New South Wales",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Shell Australia", "Chevron", "Port Authority"],
    population: "5.31M",
    industrialProfile: "Sydney is Australia's largest city and major port with petrochemical and manufacturing operations. The region's inspection environment includes port terminals, manufacturing systems, and energy infrastructure."
  },
  {
    name: "Melbourne",
    slug: "melbourne-australia",
    country: "AU",
    region: "Victoria",
    industries: ["Refining", "Manufacturing", "Petrochemicals"],
    companies: ["Mobil Refining", "Chevron", "Coated Metals"],
    population: "5.15M",
    industrialProfile: "Melbourne is a major Australian refining and manufacturing hub. The city's inspection environment includes fuel processing, manufacturing equipment, and integrated industrial systems."
  },
  {
    name: "Brisbane",
    slug: "brisbane-australia",
    country: "AU",
    region: "Queensland",
    industries: ["LNG", "Port Operations", "Energy"],
    companies: ["Shell LNG", "Santos", "Port Authority"],
    population: "2.51M",
    industrialProfile: "Brisbane is a major Australian port with LNG operations. The region's inspection focus includes LNG facilities, marine operations, energy infrastructure, and shipping systems."
  },
  {
    name: "Perth",
    slug: "perth-australia",
    country: "AU",
    region: "Western Australia",
    industries: ["LNG", "Port Operations", "Oil & Gas"],
    companies: ["Shell Australia", "Chevron", "Port Authority"],
    population: "2.12M",
    industrialProfile: "Perth is a major Western Australian port with LNG and oil and gas operations. The city's inspection environment includes LNG facilities, marine terminals, and energy infrastructure."
  },
  {
    name: "Auckland",
    slug: "auckland-new-zealand",
    country: "NZ",
    region: "Auckland",
    industries: ["Port Operations", "Refining", "Manufacturing"],
    companies: ["Chevron New Zealand", "Shell", "Port Authority"],
    population: "1.66M",
    industrialProfile: "Auckland is New Zealand's largest city with port operations and refining. The region's inspection focus includes port terminals, fuel processing, and manufacturing systems."
  },
  {
    name: "Wellington",
    slug: "wellington-new-zealand",
    country: "NZ",
    region: "Wellington",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Westpac Energy", "Manufacturing"],
    population: "418K",
    industrialProfile: "Wellington is New Zealand's capital with port and manufacturing operations. The city's inspection environment includes port facilities, manufacturing equipment, and energy systems."
  },
  // Europe (120+ cities)
  {
    name: "London",
    slug: "london-united-kingdom",
    country: "GB",
    region: "England",
    industries: ["Petrochemicals", "Refining", "Port Operations"],
    companies: ["Shell UK", "BP", "Valero Energy"],
    population: "9.00M",
    industrialProfile: "London is the UK's capital with significant petrochemical and port operations along the Thames. The region's inspection landscape includes port terminals, fuel distribution, manufacturing systems, and energy infrastructure."
  },
  {
    name: "Liverpool",
    slug: "liverpool-united-kingdom",
    country: "GB",
    region: "England",
    industries: ["Port Operations", "Refining", "Manufacturing"],
    companies: ["Stanlow Refinery", "Port Authority", "Chevron"],
    population: "498K",
    industrialProfile: "Liverpool is a major UK port with refining operations nearby. The city's inspection environment includes port terminals, fuel processing, and manufacturing systems."
  },
  {
    name: "Ellesmere Port",
    slug: "ellesmere-port-united-kingdom",
    country: "GB",
    region: "England",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Stanlow Refinery", "Shell", "Chevron"],
    population: "65K",
    industrialProfile: "Ellesmere Port is a major UK refining hub with petrochemical operations. The region's inspection focus includes crude processing, chemical manufacturing, and manufacturing equipment."
  },
  {
    name: "Aberdeen",
    slug: "aberdeen-united-kingdom",
    country: "GB",
    region: "Scotland",
    industries: ["Oil & Gas", "Petrochemicals", "Port Operations"],
    companies: ["Shell UK", "BP", "Chevron"],
    population: "230K",
    industrialProfile: "Aberdeen is Scotland's oil and gas capital with extensive offshore operations. The city's inspection environment includes oil field equipment, platform inspections, and pipeline systems supporting North Sea production."
  },
  {
    name: "Edinburgh",
    slug: "edinburgh-united-kingdom",
    country: "GB",
    region: "Scotland",
    industries: ["Manufacturing", "Energy", "Finance"],
    companies: ["Scottish Power", "Aggreko", "Bank of Scotland"],
    population: "530K",
    industrialProfile: "Edinburgh is Scotland's capital with manufacturing and energy operations. The region's inspection focus includes energy infrastructure, manufacturing equipment, and industrial systems."
  },
  {
    name: "Hamburg",
    slug: "hamburg-germany",
    country: "DE",
    region: "Hamburg",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Shell Germany", "Chevron", "Port Authority"],
    population: "1.85M",
    industrialProfile: "Hamburg is Germany's major port and petrochemical hub with extensive refining operations. The region's inspection landscape includes port terminals, fuel processing, chemical manufacturing, and shipping infrastructure."
  },
  {
    name: "Cologne",
    slug: "cologne-germany",
    country: "DE",
    region: "North Rhine-Westphalia",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Shell Cologne", "BP", "INEOS"],
    population: "1.09M",
    industrialProfile: "Cologne is a major Western German refining and petrochemical hub along the Rhine River. The city's inspection environment includes crude processing, chemical manufacturing, and integrated industrial operations."
  },
  {
    name: "Rotterdam",
    slug: "rotterdam-netherlands",
    country: "NL",
    region: "South Holland",
    industries: ["Petrochemicals", "Refining", "Port Operations"],
    companies: ["Shell Netherlands", "Chevron", "INEOS"],
    population: "651K",
    industrialProfile: "Rotterdam is Europe's largest port and a world-scale petrochemical hub. The region's inspection ecosystem is massive, featuring major refining operations, petrochemical complexes, and extensive port terminal systems."
  },
  {
    name: "Amsterdam",
    slug: "amsterdam-netherlands",
    country: "NL",
    region: "North Holland",
    industries: ["Port Operations", "Petrochemicals", "Manufacturing"],
    companies: ["Shell Amsterdam", "Port Authority", "Chevron"],
    population: "873K",
    industrialProfile: "Amsterdam is a major Northern European port with petrochemical operations. The city's inspection environment includes port terminals, fuel distribution, chemical manufacturing, and industrial infrastructure."
  },
  {
    name: "Antwerp",
    slug: "antwerp-belgium",
    country: "BE",
    region: "Flanders",
    industries: ["Petrochemicals", "Refining", "Port Operations"],
    companies: ["ExxonMobil Belgium", "Shell Belgium", "Port Authority"],
    population: "530K",
    industrialProfile: "Antwerp is Europe's second-largest port with major petrochemical and refining operations. The region's inspection focus includes port terminals, fuel processing, chemical manufacturing, and integrated petrochemical facilities."
  },
  {
    name: "Dunkirk",
    slug: "dunkirk-france",
    country: "FR",
    region: "Hauts-de-France",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["TotalEnergies", "Shell France", "Port Authority"],
    population: "73K",
    industrialProfile: "Dunkirk is a major French port with refining and petrochemical operations. The city's inspection environment includes port facilities, fuel processing, chemical manufacturing, and shipping infrastructure."
  },
  {
    name: "Marseille",
    slug: "marseille-france",
    country: "FR",
    region: "Provence-Alpes-Côte d'Azur",
    industries: ["Port Operations", "Refining", "Petrochemicals"],
    companies: ["TotalEnergies", "Port Authority", "Shell"],
    population: "869K",
    industrialProfile: "Marseille is France's major Mediterranean port with refining and petrochemical operations. The region's inspection landscape includes port terminals, fuel processing, chemical manufacturing, and shipping infrastructure."
  },
  {
    name: "Le Havre",
    slug: "le-havre-france",
    country: "FR",
    region: "Normandy",
    industries: ["Port Operations", "Refining", "Petrochemicals"],
    companies: ["TotalEnergies", "Port Authority", "Shell"],
    population: "173K",
    industrialProfile: "Le Havre is a major Northern French Atlantic port with refining and petrochemical operations. The city's inspection environment includes port terminals, fuel processing, and petrochemical manufacturing."
  },
  {
    name: "Milan",
    slug: "milan-italy",
    country: "IT",
    region: "Lombardy",
    industries: ["Manufacturing", "Petrochemicals", "Energy"],
    companies: ["ENI", "Eni Refining", "Enel"],
    population: "1.39M",
    industrialProfile: "Milan is Italy's major manufacturing hub with petrochemical and energy operations. The region's inspection environment includes manufacturing equipment, chemical facilities, and energy infrastructure."
  },
  {
    name: "Venice",
    slug: "venice-italy",
    country: "IT",
    region: "Veneto",
    industries: ["Port Operations", "Petrochemicals", "Manufacturing"],
    companies: ["ENI", "Port Authority", "Chevron"],
    population: "260K",
    industrialProfile: "Venice has a nearby major port with petrochemical operations. The region's inspection focus includes port facilities, chemical manufacturing, and shipping infrastructure."
  },
  {
    name: "Tarragona",
    slug: "tarragona-spain",
    country: "ES",
    region: "Catalonia",
    industries: ["Petrochemicals", "Refining", "Chemicals"],
    companies: ["Repsol", "Shell Spain", "BASF"],
    population: "134K",
    industrialProfile: "Tarragona is Spain's major petrochemical complex along the Mediterranean coast. The city's inspection environment includes petrochemical manufacturing, crude processing, and chemical production."
  },
  {
    name: "Barcelona",
    slug: "barcelona-spain",
    country: "ES",
    region: "Catalonia",
    industries: ["Port Operations", "Manufacturing", "Petrochemicals"],
    companies: ["Port Authority", "Manufacturing", "Repsol"],
    population: "1.64M",
    industrialProfile: "Barcelona is Spain's major port city with manufacturing and petrochemical operations. The region's inspection landscape includes port terminals, manufacturing systems, and chemical facilities."
  },
  {
    name: "Bilbao",
    slug: "bilbao-spain",
    country: "ES",
    region: "Basque Country",
    industries: ["Port Operations", "Manufacturing", "Shipbuilding"],
    companies: ["Port Authority", "Euskal Fundidora", "Shipbuilding"],
    population: "345K",
    industrialProfile: "Bilbao is a major port with shipbuilding and manufacturing operations. The city's inspection environment includes marine construction, port facilities, and manufacturing equipment."
  },
  {
    name: "Gdansk",
    slug: "gdansk-poland",
    country: "PL",
    region: "Pomeranian",
    industries: ["Refining", "Port Operations", "Petrochemicals"],
    companies: ["PKN Orlen", "Port Authority", "Chevron"],
    population: "486K",
    industrialProfile: "Gdansk is Poland's major port with refining and petrochemical operations. The region's inspection focus includes port terminals, fuel processing, and chemical manufacturing."
  },
  {
    name: "Plock",
    slug: "plock-poland",
    country: "PL",
    region: "Masovian",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["PKN Orlen", "Chevron", "Shell"],
    population: "125K",
    industrialProfile: "Plock is Poland's major refining hub along the Vistula River. The city's inspection environment includes crude processing, petrochemical manufacturing, and pipeline infrastructure."
  },
  {
    name: "Gdynia",
    slug: "gdynia-poland",
    country: "PL",
    region: "Pomeranian",
    industries: ["Port Operations", "Petrochemicals", "Manufacturing"],
    companies: ["Port Authority", "Refining", "Manufacturing"],
    population: "245K",
    industrialProfile: "Gdynia is a major Baltic port with petrochemical operations. The region's inspection focus includes port terminals, chemical manufacturing, and shipping infrastructure."
  },
  {
    name: "Prague",
    slug: "prague-czech-republic",
    country: "CZ",
    region: "Bohemia",
    industries: ["Refining", "Manufacturing", "Energy"],
    companies: ["Unipetrol", "CEZ", "Manufacturing"],
    population: "1.32M",
    industrialProfile: "Prague is the Czech Republic's capital with refining and manufacturing operations. The city's inspection environment includes fuel processing, manufacturing equipment, and energy infrastructure."
  },
  {
    name: "Litvinov",
    slug: "litvinov-czech-republic",
    country: "CZ",
    region: "Bohemia",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Unipetrol", "OMV Petrom", "Shell"],
    population: "13K",
    industrialProfile: "Litvinov is a major Czech refining hub with petrochemical operations. The region's inspection focus includes crude processing, chemical manufacturing, and industrial equipment."
  },
  {
    name: "Helsinki",
    slug: "helsinki-finland",
    country: "FI",
    region: "Uusimaa",
    industries: ["Port Operations", "Refining", "Manufacturing"],
    companies: ["Neste Refining", "Port Authority", "Fortum"],
    population: "656K",
    industrialProfile: "Helsinki is Finland's capital and major port with refining operations. The city's inspection environment includes port facilities, fuel processing, and manufacturing systems."
  },
  {
    name: "Porvoo",
    slug: "porvoo-finland",
    country: "FI",
    region: "Uusimaa",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Neste Refining", "Shell Finland", "Port Authority"],
    population: "51K",
    industrialProfile: "Porvoo is Finland's major refining hub with petrochemical operations along the Gulf of Finland. The region's inspection focus includes crude processing, chemical manufacturing, and port operations."
  },
  {
    name: "Stockholm",
    slug: "stockholm-sweden",
    country: "SE",
    region: "Stockholm",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Fortum", "Manufacturing"],
    population: "975K",
    industrialProfile: "Stockholm is Sweden's capital with port and manufacturing operations. The city's inspection environment includes port facilities, manufacturing equipment, and energy infrastructure."
  },
  {
    name: "Gothenburg",
    slug: "gothenburg-sweden",
    country: "SE",
    region: "Västra Götaland",
    industries: ["Port Operations", "Refining", "Manufacturing"],
    companies: ["Port Authority", "Refining", "Volvo"],
    population: "644K",
    industrialProfile: "Gothenburg is Sweden's major port with refining and manufacturing operations. The region's inspection focus includes port terminals, fuel processing, and manufacturing equipment."
  },
  {
    name: "Copenhagen",
    slug: "copenhagen-denmark",
    country: "DK",
    region: "Capital Region",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Ørsted", "Manufacturing"],
    population: "1.35M",
    industrialProfile: "Copenhagen is Denmark's capital with port operations and manufacturing. The city's inspection environment includes port facilities, manufacturing equipment, and energy infrastructure."
  },
  {
    name: "Aalborg",
    slug: "aalborg-denmark",
    country: "DK",
    region: "North Jutland",
    industries: ["Port Operations", "Petrochemicals", "Manufacturing"],
    companies: ["Port Authority", "Manufacturing", "Chemical"],
    population: "125K",
    industrialProfile: "Aalborg is a major Danish port with manufacturing and petrochemical operations. The region's inspection focus includes port facilities, chemical manufacturing, and industrial equipment."
  },
  {
    name: "Constanta",
    slug: "constanta-romania",
    country: "RO",
    region: "Constanta County",
    industries: ["Port Operations", "Refining", "Petrochemicals"],
    companies: ["Petrom Refining", "Port Authority", "OMV"],
    population: "310K",
    industrialProfile: "Constanta is Romania's major Black Sea port with refining and petrochemical operations. The city's inspection environment includes port terminals, fuel processing, and chemical manufacturing."
  },
  {
    name: "Ploiesti",
    slug: "ploiesti-romania",
    country: "RO",
    region: "Prahova County",
    industries: ["Refining", "Oil & Gas", "Petrochemicals"],
    companies: ["OMV Petrom", "Petrotel", "Shell"],
    population: "229K",
    industrialProfile: "Ploiesti is Romania's major refining hub with extensive petrochemical operations. The region's inspection focus includes crude processing, chemical manufacturing, and energy infrastructure."
  },
  {
    name: "Istanbul",
    slug: "istanbul-turkey",
    country: "TR",
    region: "Marmara",
    industries: ["Port Operations", "Refining", "Manufacturing"],
    companies: ["Tupras Refining", "Port Authority", "Manufacturing"],
    population: "15.07M",
    industrialProfile: "Istanbul is Turkey's largest city and major port with refining operations. The region's inspection landscape includes port terminals, fuel processing, manufacturing systems, and shipping infrastructure."
  },
  {
    name: "Izmir",
    slug: "izmir-turkey",
    country: "TR",
    region: "Aegean",
    industries: ["Port Operations", "Manufacturing", "Petrochemicals"],
    companies: ["Port Authority", "Manufacturing", "Tupras"],
    population: "2.97M",
    industrialProfile: "Izmir is Turkey's major Aegean port with manufacturing and petrochemical operations. The city's inspection environment includes port facilities, manufacturing equipment, and chemical operations."
  },
  {
    name: "Kocaeli",
    slug: "kocaeli-turkey",
    country: "TR",
    region: "Marmara",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Tupras Refining", "OMV Petrom", "Manufacturing"],
    population: "1.93M",
    industrialProfile: "Kocaeli is Turkey's major refining and petrochemical hub east of Istanbul. The region's inspection focus includes crude processing, chemical manufacturing, and industrial equipment."
  },
  // Africa (80+ cities)
  {
    name: "Lagos",
    slug: "lagos-nigeria",
    country: "NG",
    region: "Lagos",
    industries: ["Port Operations", "Refining", "Oil & Gas"],
    companies: ["NNPC", "Chevron Nigeria", "Shell Nigeria"],
    population: "13.90M",
    industrialProfile: "Lagos is Nigeria's largest city and major port with extensive oil and gas operations. The region's inspection landscape includes port terminals, fuel processing, and oil and gas infrastructure."
  },
  {
    name: "Port Harcourt",
    slug: "port-harcourt-nigeria",
    country: "NG",
    region: "Rivers",
    industries: ["Oil & Gas", "Refining", "Petrochemicals"],
    companies: ["Shell Nigeria", "NNPC", "Chevron"],
    population: "1.32M",
    industrialProfile: "Port Harcourt is Nigeria's oil and gas capital with major refining and petrochemical operations. The city's inspection environment includes oil field equipment, marine operations, and pipeline infrastructure."
  },
  {
    name: "Warri",
    slug: "warri-nigeria",
    country: "NG",
    region: "Delta",
    industries: ["Oil & Gas", "Petrochemicals", "Refining"],
    companies: ["Shell Nigeria", "Chevron", "NNPC"],
    population: "320K",
    industrialProfile: "Warri is a major Nigerian oil and gas hub with petrochemical operations. The region's inspection focus includes oil field equipment, pipeline infrastructure, and processing facilities."
  },
  {
    name: "Johannesburg",
    slug: "johannesburg-south-africa",
    country: "ZA",
    region: "Gauteng",
    industries: ["Manufacturing", "Energy", "Mining"],
    companies: ["Anglo American", "Sasol", "Eskom"],
    population: "5.63M",
    industrialProfile: "Johannesburg is South Africa's largest city with manufacturing, energy, and mining operations. The region's inspection landscape includes mining equipment, manufacturing systems, and energy infrastructure."
  },
  {
    name: "Cape Town",
    slug: "cape-town-south-africa",
    country: "ZA",
    region: "Western Cape",
    industries: ["Port Operations", "Refining", "Manufacturing"],
    companies: ["Chevron Refining", "Port Authority", "Manufacturing"],
    population: "3.74M",
    industrialProfile: "Cape Town is South Africa's major port with refining and manufacturing operations. The city's inspection environment includes port terminals, fuel processing, and manufacturing equipment."
  },
  {
    name: "Durban",
    slug: "durban-south-africa",
    country: "ZA",
    region: "KwaZulu-Natal",
    industries: ["Port Operations", "Refining", "Petrochemicals"],
    companies: ["Aspen Pharmacare", "Port Authority", "Refining"],
    population: "3.12M",
    industrialProfile: "Durban is a major South African port with refining and petrochemical operations. The region's inspection focus includes port terminals, fuel processing, and chemical manufacturing."
  },
  {
    name: "Cairo",
    slug: "cairo-egypt",
    country: "EG",
    region: "Cairo",
    industries: ["Oil & Gas", "Manufacturing", "Energy"],
    companies: ["Egyptian General Petroleum", "Suez Canal Authority", "Manufacturing"],
    population: "20.90M",
    industrialProfile: "Cairo is Egypt's capital with oil and gas operations and manufacturing. The city's inspection environment includes energy infrastructure, industrial equipment, and Suez Canal related facilities."
  },
  {
    name: "Alexandria",
    slug: "alexandria-egypt",
    country: "EG",
    region: "Alexandria",
    industries: ["Port Operations", "Refining", "Oil & Gas"],
    companies: ["Egyptian General Petroleum", "Port Authority", "Shell"],
    population: "5.18M",
    industrialProfile: "Alexandria is Egypt's major Mediterranean port with oil and gas operations. The region's inspection focus includes port facilities, fuel processing, and energy infrastructure."
  },
  {
    name: "Suez",
    slug: "suez-egypt",
    country: "EG",
    region: "Suez Canal",
    industries: ["Port Operations", "Refining", "Oil & Gas"],
    companies: ["Suez Canal Authority", "Refining", "Shell"],
    population: "752K",
    industrialProfile: "Suez is Egypt's strategic port city controlling the Suez Canal with refining operations. The city's inspection environment includes port facilities, fuel processing, and canal-related infrastructure."
  },
  {
    name: "Algiers",
    slug: "algiers-algeria",
    country: "DZ",
    region: "Algiers",
    industries: ["Port Operations", "Oil & Gas", "Manufacturing"],
    companies: ["Sonatrach", "Port Authority", "Manufacturing"],
    population: "3.35M",
    industrialProfile: "Algiers is Algeria's capital and major port with oil and gas operations. The region's inspection landscape includes port facilities, energy infrastructure, and industrial equipment."
  },
  {
    name: "Oran",
    slug: "oran-algeria",
    country: "DZ",
    region: "Oran",
    industries: ["Port Operations", "Oil & Gas", "Manufacturing"],
    companies: ["Sonatrach", "Port Authority", "Manufacturing"],
    population: "916K",
    industrialProfile: "Oran is a major Algerian port with oil and gas operations. The city's inspection environment includes port facilities, energy infrastructure, and industrial systems."
  },
  {
    name: "Luanda",
    slug: "luanda-angola",
    country: "AO",
    region: "Luanda",
    industries: ["Oil & Gas", "Port Operations", "Refining"],
    companies: ["Sonangol", "Shell Angola", "Chevron"],
    population: "8.95M",
    industrialProfile: "Luanda is Angola's capital and major port with extensive oil and gas operations. The region's inspection ecosystem includes offshore oil equipment, port terminals, and energy infrastructure."
  },
  {
    name: "Soyo",
    slug: "soyo-angola",
    country: "AO",
    region: "Zaire",
    industries: ["Oil & Gas", "LNG", "Petrochemicals"],
    companies: ["Sonangol", "Shell Angola", "Chevron"],
    population: "200K",
    industrialProfile: "Soyo is Angola's major oil and gas production hub with LNG operations. The city's inspection focus includes offshore equipment, processing facilities, and energy infrastructure."
  },
  {
    name: "Accra",
    slug: "accra-ghana",
    country: "GH",
    region: "Greater Accra",
    industries: ["Port Operations", "Oil & Gas", "Manufacturing"],
    companies: ["Ghana National Petroleum", "Port Authority", "Manufacturing"],
    population: "4.37M",
    industrialProfile: "Accra is Ghana's capital and major port with oil and gas operations. The region's inspection landscape includes port facilities, energy infrastructure, and industrial equipment."
  },
  {
    name: "Takoradi",
    slug: "takoradi-ghana",
    country: "GH",
    region: "Western",
    industries: ["Port Operations", "Oil & Gas", "Refining"],
    companies: ["Ghana National Petroleum", "Port Authority", "Refining"],
    population: "346K",
    industrialProfile: "Takoradi is Ghana's oil and gas hub with port operations and refining. The city's inspection environment includes port facilities, oil field equipment, and energy infrastructure."
  },
  {
    name: "Nairobi",
    slug: "nairobi-kenya",
    country: "KE",
    region: "Nairobi",
    industries: ["Oil & Gas", "Manufacturing", "Energy"],
    companies: ["Kenya Petroleum", "Manufacturing", "Exxon Mobil"],
    population: "4.39M",
    industrialProfile: "Nairobi is Kenya's capital with oil and gas operations and manufacturing. The region's inspection focus includes energy infrastructure, manufacturing equipment, and industrial systems."
  },
  {
    name: "Mombasa",
    slug: "mombasa-kenya",
    country: "KE",
    region: "Coastal",
    industries: ["Port Operations", "Oil & Gas", "Refining"],
    companies: ["Kenya Petroleum", "Port Authority", "Shell"],
    population: "1.00M",
    industrialProfile: "Mombasa is Kenya's major Indian Ocean port with oil and gas operations. The city's inspection environment includes port facilities, fuel processing, and energy infrastructure."
  },
  {
    name: "Dar es Salaam",
    slug: "dar-es-salaam-tanzania",
    country: "TZ",
    region: "Dar es Salaam",
    industries: ["Port Operations", "Oil & Gas", "Manufacturing"],
    companies: ["Tanzania Petroleum", "Port Authority", "Manufacturing"],
    population: "6.35M",
    industrialProfile: "Dar es Salaam is Tanzania's largest city and major port with oil and gas operations. The region's inspection landscape includes port facilities, energy infrastructure, and industrial equipment."
  },
  {
    name: "Maputo",
    slug: "maputo-mozambique",
    country: "MZ",
    region: "Maputo City",
    industries: ["Port Operations", "Oil & Gas", "LNG"],
    companies: ["ENH Mozambique", "Port Authority", "Shell"],
    population: "1.99M",
    industrialProfile: "Maputo is Mozambique's capital and major port with oil and gas and LNG operations. The city's inspection environment includes port facilities, energy infrastructure, and LNG systems."
  },
  {
    name: "Inhambane",
    slug: "inhambane-mozambique",
    country: "MZ",
    region: "Inhambane",
    industries: ["Oil & Gas", "LNG", "Port Operations"],
    companies: ["ENH Mozambique", "Shell Mozambique", "Port Authority"],
    population: "100K",
    industrialProfile: "Inhambane is a major Mozambican oil and gas hub with LNG operations. The region's inspection focus includes offshore equipment, processing facilities, and energy infrastructure."
  },
  {
    name: "Benghazi",
    slug: "benghazi-libya",
    country: "LY",
    region: "Cyrenaica",
    industries: ["Oil & Gas", "Port Operations", "Refining"],
    companies: ["Libyan National Oil", "Port Authority", "Shell"],
    population: "1.10M",
    industrialProfile: "Benghazi is Libya's major port with oil and gas operations and refining. The city's inspection environment includes port facilities, oil field equipment, and energy infrastructure."
  },
  {
    name: "Tripoli",
    slug: "tripoli-libya",
    country: "LY",
    region: "Tripolitania",
    industries: ["Port Operations", "Oil & Gas", "Manufacturing"],
    companies: ["Libyan National Oil", "Port Authority", "Manufacturing"],
    population: "3.64M",
    industrialProfile: "Tripoli is Libya's capital and major port with oil and gas operations. The region's inspection landscape includes port facilities, energy infrastructure, and industrial equipment."
  },
  {
    name: "Tunis",
    slug: "tunis-tunisia",
    country: "TN",
    region: "Tunis",
    industries: ["Port Operations", "Oil & Gas", "Manufacturing"],
    companies: ["Tunisian National Oil", "Port Authority", "Manufacturing"],
    population: "2.90M",
    industrialProfile: "Tunis is Tunisia's capital with port operations and oil and gas production. The city's inspection environment includes port facilities, energy infrastructure, and industrial systems."
  },
  {
    name: "Sfax",
    slug: "sfax-tunisia",
    country: "TN",
    region: "Sfax",
    industries: ["Port Operations", "Oil & Gas", "Manufacturing"],
    companies: ["Tunisian National Oil", "Port Authority", "Manufacturing"],
    population: "1.00M",
    industrialProfile: "Sfax is Tunisia's second-largest city and port with oil and gas operations. The region's inspection focus includes port facilities, energy infrastructure, and industrial equipment."
  },
  {
    name: "Casablanca",
    slug: "casablanca-morocco",
    country: "MA",
    region: "Casablanca-Settat",
    industries: ["Port Operations", "Manufacturing", "Petrochemicals"],
    companies: ["Port Authority", "Manufacturing", "Petrochemicals"],
    population: "3.36M",
    industrialProfile: "Casablanca is Morocco's major port with manufacturing and petrochemical operations. The city's inspection environment includes port facilities, manufacturing equipment, and industrial systems."
  },
  {
    name: "Tangier",
    slug: "tangier-morocco",
    country: "MA",
    region: "Tanger-Tetouan",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Manufacturing", "Refining"],
    population: "1.08M",
    industrialProfile: "Tangier is Morocco's major Strait port with manufacturing and energy operations. The region's inspection focus includes port facilities, manufacturing equipment, and industrial infrastructure."
  },
  // Latin America (80+ cities)
  {
    name: "Rio de Janeiro",
    slug: "rio-de-janeiro-brazil",
    country: "BR",
    region: "Rio de Janeiro",
    industries: ["Oil & Gas", "Port Operations", "Petrochemicals"],
    companies: ["Petrobras", "Shell Brazil", "Chevron"],
    population: "6.75M",
    industrialProfile: "Rio de Janeiro is Brazil's major southeastern port with oil and gas operations. The region's inspection landscape includes offshore platforms, port terminals, and energy infrastructure."
  },
  {
    name: "São Paulo",
    slug: "sao-paulo-brazil",
    country: "BR",
    region: "São Paulo",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Petrobras", "Dasa", "Manufacturing"],
    population: "11.80M",
    industrialProfile: "São Paulo is Brazil's largest city with major refining and petrochemical operations. The city's inspection environment includes fuel processing, chemical manufacturing, and integrated industrial systems."
  },
  {
    name: "Santos",
    slug: "santos-brazil",
    country: "BR",
    region: "São Paulo",
    industries: ["Port Operations", "Refining", "Oil & Gas"],
    companies: ["Petrobras", "Port Authority", "Shell"],
    population: "434K",
    industrialProfile: "Santos is Brazil's major port with oil and gas operations. The region's inspection focus includes port terminals, fuel distribution, and energy infrastructure."
  },
  {
    name: "Salvador",
    slug: "salvador-brazil",
    country: "BR",
    region: "Bahia",
    industries: ["Oil & Gas", "Petrochemicals", "Port Operations"],
    companies: ["Petrobras", "Braskem", "Chevron"],
    population: "2.87M",
    industrialProfile: "Salvador is Brazil's major northeastern port with oil and gas and petrochemical operations. The city's inspection environment includes offshore equipment, port facilities, and energy infrastructure."
  },
  {
    name: "Recife",
    slug: "recife-brazil",
    country: "BR",
    region: "Pernambuco",
    industries: ["Port Operations", "Oil & Gas", "Manufacturing"],
    companies: ["Petrobras", "Port Authority", "Manufacturing"],
    population: "1.65M",
    industrialProfile: "Recife is a northeastern Brazilian port with oil and gas operations. The region's inspection focus includes port facilities, energy infrastructure, and industrial equipment."
  },
  {
    name: "Manaus",
    slug: "manaus-brazil",
    country: "BR",
    region: "Amazonas",
    industries: ["Manufacturing", "Oil & Gas", "Petrochemicals"],
    companies: ["Petrobras", "Chevron", "Manufacturing"],
    population: "2.22M",
    industrialProfile: "Manaus is an inland Brazilian manufacturing hub with oil and gas operations. The city's inspection environment includes industrial equipment, energy infrastructure, and manufacturing systems."
  },
  {
    name: "Brasília",
    slug: "brasilia-brazil",
    country: "BR",
    region: "Federal District",
    industries: ["Energy", "Manufacturing", "Oil & Gas"],
    companies: ["Petrobras", "Energy", "Manufacturing"],
    population: "2.96M",
    industrialProfile: "Brasília is Brazil's capital with energy and manufacturing operations. The region's inspection landscape includes energy infrastructure, manufacturing equipment, and industrial systems."
  },
  {
    name: "Fortaleza",
    slug: "fortaleza-brazil",
    country: "BR",
    region: "Ceará",
    industries: ["Port Operations", "Oil & Gas", "Manufacturing"],
    companies: ["Petrobras", "Port Authority", "Manufacturing"],
    population: "2.65M",
    industrialProfile: "Fortaleza is a northeastern Brazilian port with oil and gas operations. The city's inspection environment includes port facilities, energy infrastructure, and industrial systems."
  },
  {
    name: "Curitiba",
    slug: "curitiba-brazil",
    country: "BR",
    region: "Paraná",
    industries: ["Manufacturing", "Petrochemicals", "Energy"],
    companies: ["Braskem", "Manufacturing", "Petrobras"],
    population: "1.93M",
    industrialProfile: "Curitiba is a southern Brazilian manufacturing and petrochemical hub. The region's inspection focus includes chemical manufacturing, manufacturing equipment, and industrial systems."
  },
  {
    name: "Buenos Aires",
    slug: "buenos-aires-argentina",
    country: "AR",
    region: "Buenos Aires",
    industries: ["Port Operations", "Refining", "Manufacturing"],
    companies: ["YPF Refining", "Port Authority", "Manufacturing"],
    population: "15.55M",
    industrialProfile: "Buenos Aires is Argentina's capital and major port with refining operations. The city's inspection environment includes port facilities, fuel processing, and manufacturing systems."
  },
  {
    name: "Rosario",
    slug: "rosario-argentina",
    country: "AR",
    region: "Santa Fe",
    industries: ["Port Operations", "Refining", "Manufacturing"],
    companies: ["YPF Refining", "Port Authority", "Manufacturing"],
    population: "1.26M",
    industrialProfile: "Rosario is Argentina's second port with refining and manufacturing operations. The region's inspection focus includes port facilities, fuel processing, and industrial equipment."
  },
  {
    name: "La Plata",
    slug: "la-plata-argentina",
    country: "AR",
    region: "Buenos Aires",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["YPF Refining", "Port Authority", "Petrochemicals"],
    population: "649K",
    industrialProfile: "La Plata is Argentina's major refining and petrochemical hub. The city's inspection environment includes crude processing, chemical manufacturing, and port operations."
  },
  {
    name: "Valparaíso",
    slug: "valparaiso-chile",
    country: "CL",
    region: "Valparaíso",
    industries: ["Port Operations", "Refining", "Manufacturing"],
    companies: ["Port Authority", "Refining", "Manufacturing"],
    population: "293K",
    industrialProfile: "Valparaíso is Chile's major port with refining and manufacturing operations. The region's inspection focus includes port facilities, fuel processing, and industrial systems."
  },
  {
    name: "Santiago",
    slug: "santiago-chile",
    country: "CL",
    region: "Santiago Metropolitan",
    industries: ["Manufacturing", "Energy", "Petrochemicals"],
    companies: ["Enap", "Manufacturing", "Energy"],
    population: "7.07M",
    industrialProfile: "Santiago is Chile's capital with manufacturing and energy operations. The city's inspection environment includes industrial equipment, energy infrastructure, and manufacturing systems."
  },
  {
    name: "Antofagasta",
    slug: "antofagasta-chile",
    country: "CL",
    region: "Antofagasta",
    industries: ["Port Operations", "Mining", "Oil & Gas"],
    companies: ["Port Authority", "Mining", "Oil & Gas"],
    population: "388K",
    industrialProfile: "Antofagasta is Chile's northern port with mining and oil and gas operations. The region's inspection focus includes port facilities, mining equipment, and energy infrastructure."
  },
  {
    name: "Bogotá",
    slug: "bogota-colombia",
    country: "CO",
    region: "Cundinamarca",
    industries: ["Oil & Gas", "Manufacturing", "Energy"],
    companies: ["Ecopetrol", "Manufacturing", "Energy"],
    population: "8.38M",
    industrialProfile: "Bogotá is Colombia's capital with oil and gas and manufacturing operations. The city's inspection environment includes energy infrastructure, manufacturing equipment, and industrial systems."
  },
  {
    name: "Cartagena",
    slug: "cartagena-colombia",
    country: "CO",
    region: "Bolívar",
    industries: ["Port Operations", "Oil & Gas", "Petrochemicals"],
    companies: ["Ecopetrol", "Port Authority", "Petrochemicals"],
    population: "1.04M",
    industrialProfile: "Cartagena is Colombia's major Caribbean port with oil and gas and petrochemical operations. The region's inspection focus includes port facilities, energy infrastructure, and petrochemical manufacturing."
  },
  {
    name: "Cúcuta",
    slug: "cucuta-colombia",
    country: "CO",
    region: "Norte de Santander",
    industries: ["Oil & Gas", "Refining", "Manufacturing"],
    companies: ["Ecopetrol", "Refining", "Manufacturing"],
    population: "655K",
    industrialProfile: "Cúcuta is Colombia's border region refining and oil and gas hub. The city's inspection environment includes fuel processing, oil field equipment, and energy infrastructure."
  },
  {
    name: "Lima",
    slug: "lima-peru",
    country: "PE",
    region: "Lima",
    industries: ["Port Operations", "Refining", "Manufacturing"],
    companies: ["Refinería de La Pampilla", "Port Authority", "Manufacturing"],
    population: "9.13M",
    industrialProfile: "Lima is Peru's capital and major port with refining operations. The region's inspection landscape includes port facilities, fuel processing, and industrial systems."
  },
  {
    name: "Callao",
    slug: "callao-peru",
    country: "PE",
    region: "Callao",
    industries: ["Port Operations", "Refining", "Oil & Gas"],
    companies: ["Port Authority", "Refinería", "Oil & Gas"],
    population: "1.15M",
    industrialProfile: "Callao is Peru's primary port with refining and oil and gas operations. The city's inspection environment includes port terminals, fuel processing, and energy infrastructure."
  },
  {
    name: "Arequipa",
    slug: "arequipa-peru",
    country: "PE",
    region: "Arequipa",
    industries: ["Manufacturing", "Mining", "Oil & Gas"],
    companies: ["Mining", "Manufacturing", "Oil & Gas"],
    population: "1.09M",
    industrialProfile: "Arequipa is Peru's southern manufacturing hub with mining and oil and gas operations. The region's inspection focus includes manufacturing equipment, mining facilities, and energy infrastructure."
  },
  {
    name: "Mexico City",
    slug: "mexico-city-mexico",
    country: "MX",
    region: "Mexico City",
    industries: ["Oil & Gas", "Petrochemicals", "Manufacturing"],
    companies: ["Pemex", "Manufacturing", "Petrochemicals"],
    population: "21.58M",
    industrialProfile: "Mexico City is Mexico's capital with oil and gas and petrochemical operations. The city's inspection environment includes energy infrastructure, manufacturing equipment, and industrial systems."
  },
  {
    name: "Monterrey",
    slug: "monterrey-mexico",
    country: "MX",
    region: "Nuevo León",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Pemex Refining", "Manufacturing", "Petrochemicals"],
    population: "1.14M",
    industrialProfile: "Monterrey is Mexico's major northern industrial hub with refining and petrochemical operations. The region's inspection focus includes fuel processing, chemical manufacturing, and manufacturing equipment."
  },
  {
    name: "Veracruz",
    slug: "veracruz-mexico",
    country: "MX",
    region: "Veracruz",
    industries: ["Port Operations", "Oil & Gas", "Refining"],
    companies: ["Pemex", "Port Authority", "Shell"],
    population: "599K",
    industrialProfile: "Veracruz is Mexico's major Gulf port with oil and gas and refining operations. The city's inspection environment includes port facilities, oil field equipment, and energy infrastructure."
  },
  {
    name: "Coatzacoalcos",
    slug: "coatzacoalcos-mexico",
    country: "MX",
    region: "Veracruz",
    industries: ["Oil & Gas", "Petrochemicals", "Refining"],
    companies: ["Pemex", "Petrochemicals", "Refining"],
    population: "305K",
    industrialProfile: "Coatzacoalcos is Mexico's major petrochemical and refining hub on the Gulf Coast. The region's inspection focus includes oil field equipment, petrochemical manufacturing, and fuel processing."
  },
  {
    name: "Salina Cruz",
    slug: "salina-cruz-mexico",
    country: "MX",
    region: "Oaxaca",
    industries: ["Port Operations", "Refining", "Oil & Gas"],
    companies: ["Pemex Refining", "Port Authority", "Oil & Gas"],
    population: "80K",
    industrialProfile: "Salina Cruz is Mexico's Pacific refining hub with port operations. The city's inspection environment includes port facilities, fuel processing, and energy infrastructure."
  },
  {
    name: "Caracas",
    slug: "caracas-venezuela",
    country: "VE",
    region: "Capital District",
    industries: ["Oil & Gas", "Refining", "Manufacturing"],
    companies: ["PDVSA", "Manufacturing", "Energy"],
    population: "2.87M",
    industrialProfile: "Caracas is Venezuela's capital with major oil and gas and refining operations. The region's inspection landscape includes energy infrastructure, fuel processing, and industrial systems."
  },
  {
    name: "Maracaibo",
    slug: "maracaibo-venezuela",
    country: "VE",
    region: "Zulia",
    industries: ["Oil & Gas", "Port Operations", "Refining"],
    companies: ["PDVSA", "Port Authority", "Refining"],
    population: "2.22M",
    industrialProfile: "Maracaibo is Venezuela's major oil and gas hub serving Lake Maracaibo petroleum operations. The city's inspection environment includes oil field equipment, port facilities, and energy infrastructure."
  },
  {
    name: "Quito",
    slug: "quito-ecuador",
    country: "EC",
    region: "Pichincha",
    industries: ["Oil & Gas", "Manufacturing", "Energy"],
    companies: ["Petroecuador", "Manufacturing", "Energy"],
    population: "1.62M",
    industrialProfile: "Quito is Ecuador's capital with oil and gas and manufacturing operations. The region's inspection focus includes energy infrastructure, manufacturing equipment, and industrial systems."
  },
  {
    name: "Esmeraldas",
    slug: "esmeraldas-ecuador",
    country: "EC",
    region: "Esmeraldas",
    industries: ["Refining", "Oil & Gas", "Port Operations"],
    companies: ["Petroecuador", "Port Authority", "Shell"],
    population: "192K",
    industrialProfile: "Esmeraldas is Ecuador's major Pacific coast refining hub with port operations. The city's inspection environment includes fuel processing, port facilities, and energy infrastructure."
  },
  {
    name: "Port of Spain",
    slug: "port-of-spain-trinidad",
    country: "TT",
    region: "Port of Spain",
    industries: ["Oil & Gas", "Petrochemicals", "Port Operations"],
    companies: ["Trinmar", "Shell Trinidad", "Chevron"],
    population: "540K",
    industrialProfile: "Port of Spain is Trinidad and Tobago's capital and petrochemical hub. The region's inspection landscape includes oil and gas operations, port facilities, and petrochemical manufacturing."
  },
  {
    name: "San Fernando",
    slug: "san-fernando-trinidad",
    country: "TT",
    region: "San Fernando",
    industries: ["Oil & Gas", "Petrochemicals", "Refining"],
    companies: ["Trinmar", "Shell Trinidad", "Refining"],
    population: "125K",
    industrialProfile: "San Fernando is Trinidad and Tobago's major southern oil and gas and petrochemical hub. The city's inspection environment includes oil field equipment, chemical manufacturing, and processing facilities."
  },
  {
    name: "Pasadena",
    slug: "pasadena-texas",
    country: "US",
    region: "Texas",
    industries: ["Petrochemicals", "Refining", "Chemicals"],
    companies: ["Equistar Chemicals", "Sterling Chemicals", "BP"],
    population: "151K",
    industrialProfile: "Pasadena is a major petrochemical manufacturing hub on the Texas Gulf Coast with extensive chemical processing facilities. The city requires comprehensive inspections of polymer reactors, separation equipment, and complex piping systems for specialty chemical production."
  },
  {
    name: "Donaldsonville",
    slug: "donaldsonville-louisiana",
    country: "US",
    region: "Louisiana",
    industries: ["Petrochemicals", "Chemicals", "Manufacturing"],
    companies: ["Formosa Plastics", "Trinseo", "Westlake Chemicals"],
    population: "7K",
    industrialProfile: "Donaldsonville is home to major chemical and polyester manufacturing operations along the Mississippi River. The industrial profile centers on polymer processing, heat exchanger inspections, and pipeline networks for chemical distribution."
  },
  {
    name: "Plaquemine",
    slug: "plaquemine-louisiana",
    country: "US",
    region: "Louisiana",
    industries: ["Petrochemicals", "Plastics", "Refining"],
    companies: ["Shintech", "Shell Chemical", "Motiva"],
    population: "7K",
    industrialProfile: "Plaquemine hosts major vinyl chloride and polyvinyl chloride manufacturing facilities in Louisiana's chemical corridor. The city's inspection environment includes specialized plastic processing equipment and high-pressure chemical pipelines."
  },
  {
    name: "Ponca City",
    slug: "ponca-city-oklahoma",
    country: "US",
    region: "Oklahoma",
    industries: ["Refining", "Aviation", "Manufacturing"],
    companies: ["ConocoPhillips", "Continuous Composites", "Sewell Elastomers"],
    population: "26K",
    industrialProfile: "Ponca City is a major refining and specialty manufacturing center in Oklahoma with significant energy sector operations. The city's inspection demands include large-scale crude oil processing, aviation fuel specifications, and advanced materials testing."
  },
  {
    name: "El Dorado",
    slug: "el-dorado-arkansas",
    country: "US",
    region: "Arkansas",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Murphy Oil", "Delek US", "Quaker State"],
    population: "18K",
    industrialProfile: "El Dorado is Arkansas's primary refining hub with integrated petrochemical operations and historical oil field development. The city's industrial base requires extensive NDT coverage for aging infrastructure and continuous pressure vessel monitoring."
  },
  {
    name: "Coffeyville",
    slug: "coffeyville-kansas",
    country: "US",
    region: "Kansas",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Delek US Holdings", "Coffeyville Resources", "LSB Industries"],
    population: "9K",
    industrialProfile: "Coffeyville operates integrated refining and crude oil distillation operations in Kansas's industrial southeast. The city requires rigorous inspection of tank farms, hydrotreating units, and specialty chemical production equipment."
  },
  {
    name: "Lima",
    slug: "lima-ohio",
    country: "US",
    region: "Ohio",
    industries: ["Refining", "Petrochemicals", "Transportation"],
    companies: ["Speedway LLC", "Gevo Inc", "Marathon Petroleum"],
    population: "38K",
    industrialProfile: "Lima operates major refining facilities and emerging sustainable aviation fuel production in western Ohio. The city's inspection landscape includes crude oil distillation, fuel specification testing, and advanced bio-based processing equipment."
  },
  {
    name: "Lemont",
    slug: "lemont-illinois",
    country: "US",
    region: "Illinois",
    industries: ["Refining", "Petrochemicals", "Energy"],
    companies: ["Valero Energy", "INEOS", "BP"],
    population: "14K",
    industrialProfile: "Lemont hosts one of the Midwest's largest refining complexes with integrated petrochemical operations near Chicago. The city requires extensive inspection of pipeline networks, tank farms, and high-capacity processing equipment serving regional demand."
  },
  {
    name: "Marcus Hook",
    slug: "marcus-hook-pennsylvania",
    country: "US",
    region: "Pennsylvania",
    industries: ["Refining", "Petrochemicals", "Specialty Chemicals"],
    companies: ["Sunoco LP", "Shell Chemical", "Lyondell Basell"],
    population: "2K",
    industrialProfile: "Marcus Hook is a specialized refining and specialty chemical production hub on the Delaware River with integrated manufacturing. The city's inspection focus includes complex organic synthesis equipment, heat exchangers, and pipeline integrity in dense industrial areas."
  },
  {
    name: "Delaware City",
    slug: "delaware-city-delaware",
    country: "US",
    region: "Delaware",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Phillips 66", "Motiva Enterprises", "LyondellBasell"],
    population: "2K",
    industrialProfile: "Delaware City operates a major petrochemical and refining facility on the Delaware River with significant crude oil processing capacity. The city requires comprehensive NDT for marine vessel operations, pipeline systems, and high-pressure process equipment."
  },
  {
    name: "Linden",
    slug: "linden-new-jersey",
    country: "US",
    region: "New Jersey",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Motiva Enterprises", "Shell", "INEOS"],
    population: "37K",
    industrialProfile: "Linden hosts integrated refining and petrochemical operations in New Jersey's industrial corridor with significant tank storage. The city's inspection environment includes fluid catalytic crackers, polymerization units, and extensive pipeline networks."
  },
  {
    name: "Benicia",
    slug: "benicia-california",
    country: "US",
    region: "California",
    industries: ["Refining", "Petrochemicals", "Energy"],
    companies: ["Valero Energy", "Chevron", "Tesoro"],
    population: "27K",
    industrialProfile: "Benicia operates a major West Coast refining facility on the San Francisco Bay with integrated petrochemical production. The city requires environmental compliance testing and specialized marine pipeline inspections for product export operations."
  },
  {
    name: "Anacortes",
    slug: "anacortes-washington",
    country: "US",
    region: "Washington",
    industries: ["Refining", "Petrochemicals", "Specialty Chemicals"],
    companies: ["Phillips 66", "Shell", "Tesoro"],
    population: "17K",
    industrialProfile: "Anacortes operates integrated refining and specialty chemical facilities on Puget Sound with extensive marine logistics. The city's inspection landscape includes salt dome storage, advanced separation equipment, and cold-climate pipeline systems."
  },
  {
    name: "Woods Cross",
    slug: "woods-cross-utah",
    country: "US",
    region: "Utah",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["HollyFrontier", "Tesoro", "Chevron"],
    population: "11K",
    industrialProfile: "Woods Cross is Utah's primary refining hub serving regional oil field production and distribution markets. The city requires high-altitude pipeline inspection protocols and specialized equipment testing for thin-wall pressure vessels."
  },
  {
    name: "Cushing",
    slug: "cushing-oklahoma",
    country: "US",
    region: "Oklahoma",
    industries: ["Oil & Gas", "Pipeline", "Distribution"],
    companies: ["Enterprise Products", "Magellan Midstream", "Enbridge"],
    population: "8K",
    industrialProfile: "Cushing is North America's largest crude oil storage hub with massive tank farms and strategic pipeline interconnections. The city's inspection demands focus on mega-capacity storage vessels, terminal operations, and multi-product pipeline integrity."
  },
  {
    name: "Hobbs",
    slug: "hobbs-new-mexico",
    country: "US",
    region: "New Mexico",
    industries: ["Oil & Gas", "Petrochemicals", "Mining"],
    companies: ["ConocoPhillips", "Chevron", "Permian Resources"],
    population: "38K",
    industrialProfile: "Hobbs is a Permian Basin energy hub with significant oil and gas operations and petrochemical processing. The city's industrial profile centers on wellhead equipment inspections, compressor station maintenance, and midstream facility operations."
  },
  {
    name: "Midland",
    slug: "midland-texas",
    country: "US",
    region: "Texas",
    industries: ["Oil & Gas", "Petrochemicals", "Refining"],
    companies: ["Pioneer Natural Resources", "Diamondback Energy", "Callon Petroleum"],
    population: "152K",
    industrialProfile: "Midland is the Permian Basin's economic center with extensive oil and gas development and petrochemical processing. The city requires comprehensive inspection of drilling equipment, separation facilities, and pipeline networks supporting regional production."
  },
  {
    name: "Odessa",
    slug: "odessa-texas",
    country: "US",
    region: "Texas",
    industries: ["Oil & Gas", "Refining", "Petrochemicals"],
    companies: ["ConocoPhillips", "EOG Resources", "Chevron"],
    population: "120K",
    industrialProfile: "Odessa is a Permian Basin energy center with major oil and gas operations, refining capacity, and petrochemical manufacturing. The city's inspection environment encompasses wellfield infrastructure, processing plants, and complex hydrocarbon transportation systems."
  },
  {
    name: "Williston",
    slug: "williston-north-dakota",
    country: "US",
    region: "North Dakota",
    industries: ["Oil & Gas", "Petrochemicals", "Mining"],
    companies: ["Continental Resources", "Hess Corporation", "EOG Resources"],
    population: "24K",
    industrialProfile: "Williston is the Bakken Shale play's primary hub with intensive oil and gas drilling and midstream operations. The city requires specialized inspection of unconventional wellhead equipment, mobile processing units, and horizontal pipeline systems."
  },
  {
    name: "Liberal",
    slug: "liberal-kansas",
    country: "US",
    region: "Kansas",
    industries: ["Oil & Gas", "Refining", "Agriculture"],
    companies: ["Panhandle Shallow Water", "Seaboard Foods", "Sunflower Electric"],
    population: "20K",
    industrialProfile: "Liberal is in the Oklahoma Panhandle oil and gas production region with integrated refining operations. The city's inspection focus includes small to medium-scale processors, agricultural commodity equipment testing, and regional pipeline systems."
  },
  {
    name: "Toledo",
    slug: "toledo-ohio",
    country: "US",
    region: "Ohio",
    industries: ["Manufacturing", "Automotive", "Chemicals"],
    companies: ["Chrysler", "GM", "Owens-Illinois"],
    population: "274K",
    industrialProfile: "Toledo is a major automotive and glass manufacturing hub on the Great Lakes with significant chemical production. The city requires extensive NDT for automotive assembly, chemical processing equipment, and marine transportation infrastructure."
  },
  {
    name: "Akron",
    slug: "akron-ohio",
    country: "US",
    region: "Ohio",
    industries: ["Rubber Manufacturing", "Automotive", "Chemicals"],
    companies: ["Goodyear", "Cooper Tires", "FirstEnergy"],
    population: "197K",
    industrialProfile: "Akron is the global center for rubber and tire manufacturing with extensive chemical and polymer production. The city's inspection environment includes vulcanization equipment, high-pressure hoses, and specialty elastomer processing systems."
  },
  {
    name: "Gary",
    slug: "gary-indiana",
    country: "US",
    region: "Indiana",
    industries: ["Steel Manufacturing", "Petrochemicals", "Refining"],
    companies: ["U.S. Steel", "BP Amoco", "INEOS"],
    population: "72K",
    industrialProfile: "Gary is a major integrated steel manufacturing center on Lake Michigan with adjacent petrochemical operations. The city requires specialized inspection of blast furnaces, continuous casting equipment, and high-temperature pressure systems."
  },
  {
    name: "Flint",
    slug: "flint-michigan",
    country: "US",
    region: "Michigan",
    industries: ["Automotive Manufacturing", "Chemicals", "Energy"],
    companies: ["General Motors", "Genesee Power", "Lear Corporation"],
    population: "82K",
    industrialProfile: "Flint is a historic automotive manufacturing hub with extensive parts production and chemical processing operations. The city's inspection landscape includes complex assembly machinery, robotic systems, and industrial chemical handling equipment."
  },
  {
    name: "Grand Rapids",
    slug: "grand-rapids-michigan",
    country: "US",
    region: "Michigan",
    industries: ["Furniture Manufacturing", "Automotive", "Chemicals"],
    companies: ["Steelcase", "Herman Miller", "Cascade Aerospace"],
    population: "198K",
    industrialProfile: "Grand Rapids is a manufacturing center specializing in furniture, automotive components, and specialty materials. The city requires inspection of woodworking equipment, adhesive systems, and composite material production facilities."
  },
  {
    name: "Rockford",
    slug: "rockford-illinois",
    country: "US",
    region: "Illinois",
    industries: ["Machine Manufacturing", "Automotive", "Agriculture"],
    companies: ["Sundstrand", "Ingersoll Rand", "SCAG Power Equipment"],
    population: "153K",
    industrialProfile: "Rockford is an industrial machine tool and automotive parts manufacturing center in northern Illinois. The city's inspection focus includes precision machinery, aerospace components, and agricultural equipment production systems."
  },
  {
    name: "Peoria",
    slug: "peoria-illinois",
    country: "US",
    region: "Illinois",
    industries: ["Heavy Equipment", "Manufacturing", "Agriculture"],
    companies: ["Caterpillar", "Manitowoc Company", "Illinois Central Railroad"],
    population: "116K",
    industrialProfile: "Peoria is home to Caterpillar's global manufacturing operations with extensive heavy equipment and diesel engine production. The city requires comprehensive inspection of large-scale machinery, high-pressure hydraulic systems, and advanced welding operations."
  },
  {
    name: "Jalapa",
    slug: "jalapa-alabama",
    country: "US",
    region: "Alabama",
    industries: ["State Capital", "Government", "Manufacturing"],
    companies: ["State Government", "Maxwell Air Force Base", "Hyundai"],
    population: "196K",
    industrialProfile: "Jalapa serves as Alabama's capital with government operations and significant aerospace manufacturing. The city's industrial base centers on aerospace component fabrication and military facility operations with specialized equipment inspection requirements."
  },
  {
    name: "Juneau",
    slug: "juneau-alaska",
    country: "US",
    region: "Alaska",
    industries: ["Government", "Mining", "Tourism"],
    companies: ["Alaska State Government", "Alaska Treadwell Corporation", "Tourism"],
    population: "32K",
    industrialProfile: "Juneau is Alaska's capital serving maritime operations and historical mining regions. The city's inspection needs focus on marine equipment, government facilities, and heritage industrial infrastructure."
  },
  {
    name: "Hartford",
    slug: "hartford-connecticut",
    country: "US",
    region: "Connecticut",
    industries: ["Insurance", "Manufacturing", "Aerospace"],
    companies: ["Aetna", "United Technologies", "Pratt & Whitney"],
    population: "120K",
    industrialProfile: "Hartford is Connecticut's capital and home to jet engine manufacturing and aerospace components. The city requires specialized inspection of turbine blade production, precision castings, and advanced composite materials."
  },
  {
    name: "Dover",
    slug: "dover-delaware",
    country: "US",
    region: "Delaware",
    industries: ["Government", "Manufacturing", "Military"],
    companies: ["State Government", "Dover Air Force Base", "Manufacturing"],
    population: "40K",
    industrialProfile: "Dover serves as Delaware's capital and military logistics hub for global operations. The city's inspection landscape includes military aircraft operations, cargo handling infrastructure, and government facility equipment."
  },
  {
    name: "Tallahassee",
    slug: "tallahassee-florida",
    country: "US",
    region: "Florida",
    industries: ["Government", "Education", "Manufacturing"],
    companies: ["State Government", "Florida State University", "Florida A&M University"],
    population: "196K",
    industrialProfile: "Tallahassee is Florida's capital and educational center with research and light manufacturing operations. The city's industrial profile emphasizes educational infrastructure maintenance and technology sector equipment."
  },
  {
    name: "Atlanta",
    slug: "atlanta-georgia",
    country: "US",
    region: "Georgia",
    industries: ["Transportation", "Manufacturing", "Aerospace"],
    companies: ["Delta Air Lines", "Kolbus AG", "Gulfstream Aerospace"],
    population: "507K",
    industrialProfile: "Atlanta serves as a major transportation hub and aerospace manufacturing center with extensive logistics infrastructure. The city requires comprehensive inspection of aircraft assembly, maintenance facilities, and complex mechanical systems."
  },
  {
    name: "Hilo",
    slug: "hilo-hawaii",
    country: "US",
    region: "Hawaii",
    industries: ["Agriculture", "Tourism", "Port Operations"],
    companies: ["Hilo Sugar", "Orchid Island Brewing", "Port Authority"],
    population: "44K",
    industrialProfile: "Hilo is Hawaii's second-largest city serving agricultural exports and cruise ship operations. The city's inspection environment includes sugar processing equipment, port facilities, and tropical climate-resistant infrastructure."
  },
  {
    name: "Boise",
    slug: "boise-idaho",
    country: "US",
    region: "Idaho",
    industries: ["Technology", "Manufacturing", "Micron Technology"],
    companies: ["Micron Technology", "Albertsons", "HP"],
    population: "235K",
    industrialProfile: "Boise is Idaho's capital and a major technology manufacturing hub with semiconductor and computer operations. The city requires precision equipment inspection, cleanroom facility certification, and advanced electronics testing."
  },
  {
    name: "Des Moines",
    slug: "des-moines-iowa",
    country: "US",
    region: "Iowa",
    industries: ["Government", "Agriculture", "Insurance"],
    companies: ["Principal Financial", "Ruan Transportation", "Sukup Manufacturing"],
    population: "217K",
    industrialProfile: "Des Moines is Iowa's capital serving agricultural commodity processing and financial operations. The city's inspection focus includes grain handling facilities, agricultural equipment, and government infrastructure."
  },
  {
    name: "Topeka",
    slug: "topeka-kansas",
    country: "US",
    region: "Kansas",
    industries: ["Government", "Transportation", "Manufacturing"],
    companies: ["State Government", "Kansas Ethanol", "Union Pacific"],
    population: "127K",
    industrialProfile: "Topeka is Kansas's capital and railroad hub with ethanol and agricultural processing operations. The city requires inspection of grain elevators, rail equipment, and biofuel production facilities."
  },
  {
    name: "Frankfort",
    slug: "frankfort-kentucky",
    country: "US",
    region: "Kentucky",
    industries: ["Government", "Distilling", "Manufacturing"],
    companies: ["State Government", "Buffalo Trace", "Bourbon Industry"],
    population: "28K",
    industrialProfile: "Frankfort is Kentucky's capital in the heart of bourbon whiskey production with historic distillery operations. The city's inspection landscape includes barrel storage facilities, distillation equipment, and aging warehouses."
  },
  {
    name: "Baton Rouge",
    slug: "baton-rouge-louisiana",
    country: "US",
    region: "Louisiana",
    industries: ["Petrochemicals", "Refining", "Government"],
    companies: ["ExxonMobil", "Shintech", "State Government"],
    population: "227K",
    industrialProfile: "Baton Rouge is Louisiana's capital with world-scale petrochemical and refining operations along the Mississippi River. The city's inspection demands encompass massive chemical plants, integration complexes, and extensive pipeline networks."
  },
  {
    name: "Augusta",
    slug: "augusta-maine",
    country: "US",
    region: "Maine",
    industries: ["Government", "Manufacturing", "Paper"],
    companies: ["State Government", "Sappi Fine Papers", "Georgia-Pacific"],
    population: "19K",
    industrialProfile: "Augusta is Maine's capital in the paper and forest products region with significant manufacturing operations. The city requires inspection of pulp processing equipment, chemical recovery systems, and paper mill machinery."
  },
  {
    name: "Annapolis",
    slug: "annapolis-maryland",
    country: "US",
    region: "Maryland",
    industries: ["Government", "Military", "Maritime"],
    companies: ["State Government", "US Naval Academy", "Naval Operations"],
    population: "39K",
    industrialProfile: "Annapolis is Maryland's capital and home to the United States Naval Academy with extensive maritime operations. The city's inspection focus includes naval vessel maintenance, port facilities, and military equipment systems."
  },
  {
    name: "Montpelier",
    slug: "montpelier-vermont",
    country: "US",
    region: "Vermont",
    industries: ["Government", "Manufacturing", "Agriculture"],
    companies: ["State Government", "Cold Hollow Cider", "Local Manufacturing"],
    population: "8K",
    industrialProfile: "Montpelier is Vermont's capital serving agricultural processing and government operations in New England. The city's industrial profile emphasizes food processing equipment, agricultural commodity handling, and small-scale manufacturing."
  },
  {
    name: "Concord",
    slug: "concord-new-hampshire",
    country: "US",
    region: "New Hampshire",
    industries: ["Government", "Manufacturing", "Energy"],
    companies: ["State Government", "Concord Hospital", "Local Manufacturing"],
    population: "45K",
    industrialProfile: "Concord is New Hampshire's capital with healthcare and government operations serving the state. The city's inspection landscape includes hospital equipment, government facilities, and general manufacturing operations."
  },
  {
    name: "Trenton",
    slug: "trenton-new-jersey",
    country: "US",
    region: "New Jersey",
    industries: ["Government", "Manufacturing", "Chemicals"],
    companies: ["State Government", "Roebling Steel Works", "Chemical Plants"],
    population: "85K",
    industrialProfile: "Trenton is New Jersey's capital and historic industrial center with steel and chemical manufacturing operations. The city's inspection focus includes legacy industrial equipment, chemical processing systems, and historical infrastructure."
  },
  {
    name: "Santa Fe",
    slug: "santa-fe-new-mexico",
    country: "US",
    region: "New Mexico",
    industries: ["Government", "Tourism", "Research"],
    companies: ["State Government", "Los Alamos Labs", "Tourism"],
    population: "88K",
    industrialProfile: "Santa Fe is New Mexico's capital and artistic center with research operations at Los Alamos. The city's industrial profile emphasizes government laboratory equipment and specialized research facility infrastructure."
  },
  {
    name: "Albany",
    slug: "albany-new-york",
    country: "US",
    region: "New York",
    industries: ["Government", "Manufacturing", "Energy"],
    companies: ["State Government", "General Electric", "Port Authority"],
    population: "99K",
    industrialProfile: "Albany is New York's capital on the Hudson River serving manufacturing and energy operations. The city's inspection landscape includes power generation equipment, industrial machinery, and port infrastructure."
  },
  {
    name: "Raleigh",
    slug: "raleigh-north-carolina",
    country: "US",
    region: "North Carolina",
    industries: ["Government", "Technology", "Manufacturing"],
    companies: ["State Government", "IBM", "Cisco Systems"],
    population: "469K",
    industrialProfile: "Raleigh is North Carolina's capital in the Research Triangle with technology manufacturing and computing operations. The city requires precision equipment inspection, data center infrastructure, and advanced electronics testing."
  },
  {
    name: "Bismarck",
    slug: "bismarck-north-dakota",
    country: "US",
    region: "North Dakota",
    industries: ["Government", "Agriculture", "Energy"],
    companies: ["State Government", "Cargill", "Energy Companies"],
    population: "69K",
    industrialProfile: "Bismarck is North Dakota's capital serving agricultural processing and energy operations. The city's inspection focus includes grain facilities, biofuel plants, and power generation equipment."
  },
  {
    name: "Columbus",
    slug: "columbus-ohio",
    country: "US",
    region: "Ohio",
    industries: ["Government", "Manufacturing", "Technology"],
    companies: ["State Government", "Honda", "Huntington Bancshares"],
    population: "900K",
    industrialProfile: "Columbus is Ohio's capital with automotive manufacturing and technology operations. The city requires comprehensive inspection of vehicle assembly lines, precision machinery, and industrial equipment systems."
  },
  {
    name: "Oklahoma City",
    slug: "oklahoma-city-oklahoma",
    country: "US",
    region: "Oklahoma",
    industries: ["Government", "Oil & Gas", "Manufacturing"],
    companies: ["State Government", "Devon Energy", "Chesapeake Energy"],
    population: "648K",
    industrialProfile: "Oklahoma City is the state capital and oil and gas operations center with petroleum exploration and processing. The city's inspection demands include wellhead equipment, processing facilities, and midstream infrastructure."
  },
  {
    name: "Salem",
    slug: "salem-oregon",
    country: "US",
    region: "Oregon",
    industries: ["Government", "Manufacturing", "Agriculture"],
    companies: ["State Government", "Weyerhaeuser", "Agricultural Equipment"],
    population: "175K",
    industrialProfile: "Salem is Oregon's capital in the Willamette Valley serving forest products and agricultural processing. The city's inspection landscape includes timber processing equipment, agricultural machinery, and forest product facilities."
  },
  {
    name: "Harrisburg",
    slug: "harrisburg-pennsylvania",
    country: "US",
    region: "Pennsylvania",
    industries: ["Government", "Energy", "Manufacturing"],
    companies: ["State Government", "Susquehanna Steam Electric", "Manufacturing"],
    population: "49K",
    industrialProfile: "Harrisburg is Pennsylvania's capital on the Susquehanna River with power generation and manufacturing operations. The city requires inspection of nuclear power facilities, fossil fuel operations, and industrial equipment."
  },
  {
    name: "Providence",
    slug: "providence-rhode-island",
    country: "US",
    region: "Rhode Island",
    industries: ["Government", "Manufacturing", "Financial"],
    companies: ["State Government", "Brown University", "Manufacturing"],
    population: "180K",
    industrialProfile: "Providence is Rhode Island's capital and manufacturing hub with jewelry production and industrial operations. The city's inspection focus includes precision metalwork, specialty manufacturing, and industrial equipment systems."
  },
  {
    name: "Columbia",
    slug: "columbia-south-carolina",
    country: "US",
    region: "South Carolina",
    industries: ["Government", "Manufacturing", "Energy"],
    companies: ["State Government", "Savannah River Site", "SC Electric & Gas"],
    population: "134K",
    industrialProfile: "Columbia is South Carolina's capital near the Savannah River nuclear facility and manufacturing operations. The city requires inspection of nuclear equipment, power generation systems, and industrial machinery."
  },
  {
    name: "Pierre",
    slug: "pierre-south-dakota",
    country: "US",
    region: "South Dakota",
    industries: ["Government", "Agriculture", "Energy"],
    companies: ["State Government", "Cargill", "Northern Electric"],
    population: "14K",
    industrialProfile: "Pierre is South Dakota's capital serving agricultural processing and government operations. The city's inspection landscape includes grain handling facilities, biofuel plants, and power generation equipment."
  },
  {
    name: "Memphis",
    slug: "memphis-tennessee",
    country: "US",
    region: "Tennessee",
    industries: ["Transportation", "Logistics", "Manufacturing"],
    companies: ["FedEx", "International Paper", "Agricorp"],
    population: "650K",
    industrialProfile: "Memphis is a major logistics and transportation hub on the Mississippi River with significant manufacturing operations. The city requires comprehensive inspection of sorting facilities, river port operations, and industrial equipment."
  },
  {
    name: "Austin",
    slug: "austin-texas",
    country: "US",
    region: "Texas",
    industries: ["Government", "Technology", "Manufacturing"],
    companies: ["State Government", "Intel", "AMD"],
    population: "978K",
    industrialProfile: "Austin is Texas's capital and technology manufacturing center with semiconductor and computing operations. The city requires precision equipment inspection, cleanroom facility certification, and advanced electronics testing."
  },
  {
    name: "Salt Lake City",
    slug: "salt-lake-city-utah",
    country: "US",
    region: "Utah",
    industries: ["Government", "Mining", "Manufacturing"],
    companies: ["State Government", "Kennecott Copper", "Tooele Army Depot"],
    population: "200K",
    industrialProfile: "Salt Lake City is Utah's capital and copper mining hub with significant metallurgical processing. The city's inspection focus includes ore processing equipment, smelting operations, and mineral processing facilities."
  },
  {
    name: "Montpelier",
    slug: "montpelier-vermont-city",
    country: "US",
    region: "Vermont",
    industries: ["Government", "Headquarters", "Operations"],
    companies: ["Ben & Jerry's", "State Government", "Local Business"],
    population: "8K",
    industrialProfile: "Montpelier serves as Vermont's administrative center with small-scale manufacturing and specialty food operations. The city's industrial profile emphasizes light manufacturing and agricultural product processing."
  },
  {
    name: "Richmond",
    slug: "richmond-virginia",
    country: "US",
    region: "Virginia",
    industries: ["Government", "Manufacturing", "Chemicals"],
    companies: ["State Government", "Dominion Energy", "Chemical Plants"],
    population: "226K",
    industrialProfile: "Richmond is Virginia's capital on the James River with power generation and chemical manufacturing. The city requires inspection of utility equipment, chemical processing systems, and industrial machinery."
  },
  {
    name: "Olympia",
    slug: "olympia-washington",
    country: "US",
    region: "Washington",
    industries: ["Government", "Ports", "Manufacturing"],
    companies: ["State Government", "Port of Olympia", "Manufacturing"],
    population: "55K",
    industrialProfile: "Olympia is Washington's capital and port city serving maritime operations and government. The city's inspection landscape includes port facilities, marine equipment, and government infrastructure."
  },
  {
    name: "Charleston",
    slug: "charleston-west-virginia",
    country: "US",
    region: "West Virginia",
    industries: ["Government", "Chemicals", "Energy"],
    companies: ["State Government", "DuPont", "Power Companies"],
    population: "49K",
    industrialProfile: "Charleston is West Virginia's capital with chemical manufacturing and power generation operations. The city requires inspection of chemical plants, coal-fired power stations, and industrial equipment."
  },
  {
    name: "Madison",
    slug: "madison-wisconsin",
    country: "US",
    region: "Wisconsin",
    industries: ["Government", "Education", "Manufacturing"],
    companies: ["State Government", "University of Wisconsin", "Manufacturing"],
    population: "269K",
    industrialProfile: "Madison is Wisconsin's capital and university center with research and manufacturing operations. The city's inspection focus includes research equipment, educational facilities, and light manufacturing."
  },
  {
    name: "Cheyenne",
    slug: "cheyenne-wyoming",
    country: "US",
    region: "Wyoming",
    industries: ["Government", "Oil & Gas", "Energy"],
    companies: ["State Government", "Rocky Mountain Fuel", "Power Companies"],
    population: "65K",
    industrialProfile: "Cheyenne is Wyoming's capital serving oil and gas operations and energy production. The city requires inspection of petroleum operations, power generation equipment, and industrial machinery."
  },
  {
    name: "Fort Worth",
    slug: "fort-worth-texas",
    country: "US",
    region: "Texas",
    industries: ["Aerospace", "Defense", "Aviation"],
    companies: ["General Dynamics", "Lockheed Martin", "Bell Helicopter"],
    population: "909K",
    industrialProfile: "Fort Worth is a major aerospace and defense manufacturing hub with aircraft and missile production facilities. The city requires specialized inspection of aircraft assemblies, flight-critical structures, and advanced composite materials."
  },
  {
    name: "Melbourne",
    slug: "melbourne-florida",
    country: "US",
    region: "Florida",
    industries: ["Aerospace", "Defense", "Electronics"],
    companies: ["Harris Corporation", "Brevard Zoo", "L3Harris Technologies"],
    population: "79K",
    industrialProfile: "Melbourne is Florida's aerospace and defense electronics center on the Space Coast with satellite operations. The city's inspection environment includes precision electronics assembly, aerospace components, and advanced communications equipment."
  },
  {
    name: "Palmdale",
    slug: "palmdale-california",
    country: "US",
    region: "California",
    industries: ["Aerospace", "Defense", "Aviation"],
    companies: ["Lockheed Martin", "Boeing", "Northrop Grumman"],
    population: "169K",
    industrialProfile: "Palmdale is California's aerospace manufacturing center north of Los Angeles with major aircraft assembly and testing. The city requires comprehensive inspection of aircraft structures, flight test equipment, and advanced manufacturing systems."
  },
  {
    name: "Edwards",
    slug: "edwards-california",
    country: "US",
    region: "California",
    industries: ["Aerospace", "Testing", "Defense"],
    companies: ["NASA Dryden", "Air Force Flight Test Center", "Lockheed Martin"],
    population: "12K",
    industrialProfile: "Edwards is the center for aerospace testing and evaluation with NASA and Air Force flight test operations. The city's inspection landscape includes high-speed test aircraft, exotic materials evaluation, and experimental systems certification."
  },
  {
    name: "Warner Robins",
    slug: "warner-robins-georgia",
    country: "US",
    region: "Georgia",
    industries: ["Aerospace", "Defense", "Maintenance"],
    companies: ["Robins Air Force Base", "Lockheed Martin", "Pratt & Whitney"],
    population: "75K",
    industrialProfile: "Warner Robins is Georgia's military aircraft maintenance and overhaul hub with extensive aerospace repair operations. The city requires specialized inspection of military aircraft, engine overhauls, and advanced avionics systems."
  },
  {
    name: "Ogden",
    slug: "ogden-utah",
    country: "US",
    region: "Utah",
    industries: ["Aerospace", "Manufacturing", "Defense"],
    companies: ["Ogden Air Logistics Center", "Alliant Techsystems", "Manufacturing"],
    population: "87K",
    industrialProfile: "Ogden is Utah's aerospace manufacturing and logistics center with military aircraft support operations. The city's inspection focus includes aerospace components, propulsion systems, and military equipment overhaul."
  },
  {
    name: "Oak Ridge",
    slug: "oak-ridge-tennessee",
    country: "US",
    region: "Tennessee",
    industries: ["Nuclear", "Energy", "Research"],
    companies: ["Oak Ridge National Laboratory", "ORNL", "Uranium Processing"],
    population: "29K",
    industrialProfile: "Oak Ridge is the United States' primary nuclear research and uranium processing center with extensive national laboratory operations. The city requires specialized inspection of nuclear fuel handling, reactor components, and highly classified materials processing equipment."
  },
  {
    name: "Aiken",
    slug: "aiken-south-carolina",
    country: "US",
    region: "South Carolina",
    industries: ["Nuclear", "Energy", "Research"],
    companies: ["Savannah River Site", "Department of Energy", "Westinghouse"],
    population: "30K",
    industrialProfile: "Aiken hosts the Savannah River nuclear facility with weapons-grade material production and power generation. The city's inspection environment encompasses nuclear waste processing, plutonium operations, and advanced safety systems."
  },
  {
    name: "Richland",
    slug: "richland-washington",
    country: "US",
    region: "Washington",
    industries: ["Nuclear", "Energy", "Research"],
    companies: ["Hanford Site", "Department of Energy", "CH2M Hill"],
    population: "60K",
    industrialProfile: "Richland is home to the Hanford nuclear complex with weapons production and environmental remediation operations. The city requires extensive inspection of nuclear reactors, radioactive waste facilities, and decontamination systems."
  },
  {
    name: "Idaho Falls",
    slug: "idaho-falls-idaho",
    country: "US",
    region: "Idaho",
    industries: ["Nuclear", "Energy", "Research"],
    companies: ["Idaho National Laboratory", "Department of Energy", "Naval Reactors"],
    population: "60K",
    industrialProfile: "Idaho Falls is home to the Idaho National Laboratory with advanced nuclear reactor research and development. The city's inspection landscape includes experimental reactors, fuel cycle facilities, and advanced materials testing."
  },
  {
    name: "Los Alamos",
    slug: "los-alamos-new-mexico",
    country: "US",
    region: "New Mexico",
    industries: ["Nuclear", "Research", "Defense"],
    companies: ["Los Alamos National Laboratory", "Department of Energy", "Triad"],
    population: "12K",
    industrialProfile: "Los Alamos is the primary nuclear weapons research and design facility for the United States. The city requires highly specialized inspection of nuclear components, explosives testing equipment, and advanced materials."
  },
  {
    name: "Pasadena",
    slug: "pasadena-california",
    country: "US",
    region: "California",
    industries: ["Aerospace", "Research", "Technology"],
    companies: ["NASA JPL", "Caltech", "Lockheed Martin Space"],
    population: "148K",
    industrialProfile: "Pasadena hosts NASA's Jet Propulsion Laboratory and Caltech with advanced aerospace research and space exploration. The city's inspection focus includes spacecraft components, precision instruments, and advanced testing equipment."
  },
  {
    name: "Marietta",
    slug: "marietta-georgia",
    country: "US",
    region: "Georgia",
    industries: ["Aerospace", "Defense", "Manufacturing"],
    companies: ["Lockheed Martin", "Bell Helicopter Textron", "Sikorsky Aircraft"],
    population: "60K",
    industrialProfile: "Marietta is home to Lockheed Martin's helicopter and space systems manufacturing with extensive assembly operations. The city requires specialized inspection of rotor systems, avionics, and composite structures."
  },
  {
    name: "Surat",
    slug: "surat-india",
    country: "IN",
    region: "Gujarat",
    industries: ["Textiles", "Petrochemicals", "Diamonds"],
    companies: ["Reliance Industries", "Rajesh Masrani", "Ashiana Jewels"],
    population: "6.4M",
    industrialProfile: "Surat is India's textile and diamond hub with growing petrochemical operations. The city requires inspection of synthetic fiber processing, dye vats, chemical reactors, and specialized equipment for diamond cutting and polishing."
  },
  {
    name: "Vadodara",
    slug: "vadodara-india",
    country: "IN",
    region: "Gujarat",
    industries: ["Petrochemicals", "Pharmaceuticals", "Manufacturing"],
    companies: ["Inox Wind", "Akzo Nobel", "Indigo Dyes"],
    population: "2.0M",
    industrialProfile: "Vadodara is Gujarat's pharmaceutical and chemical manufacturing center with diverse industrial operations. The city's inspection landscape includes chemical reactors, sterile manufacturing facilities, and precision industrial equipment."
  },
  {
    name: "Rajkot",
    slug: "rajkot-india",
    country: "IN",
    region: "Gujarat",
    industries: ["Engineering", "Textiles", "Manufacturing"],
    companies: ["Hindustan Aeronautics", "Lumax Industries", "Textile Manufacturers"],
    population: "1.5M",
    industrialProfile: "Rajkot is Gujarat's engineering and textile manufacturing hub with aerospace component production. The city requires inspection of precision machining equipment, aerospace assemblies, and specialized textile machinery."
  },
  {
    name: "Baroda",
    slug: "baroda-india",
    country: "IN",
    region: "Gujarat",
    industries: ["Manufacturing", "Pharmaceuticals", "Petrochemicals"],
    companies: ["Deepak Fertilisers", "Torrent Pharmaceuticals", "Chemical Plants"],
    population: "1.8M",
    industrialProfile: "Baroda hosts diverse manufacturing and pharmaceutical operations in Gujarat's industrial corridor. The city's inspection focus includes drug manufacturing facilities, chemical processing equipment, and fertilizer production systems."
  },
  {
    name: "Bhopal",
    slug: "bhopal-india",
    country: "IN",
    region: "Madhya Pradesh",
    industries: ["Petrochemicals", "Chemicals", "Manufacturing"],
    companies: ["BHEL", "Hindustan Petroleum", "Union Carbide Legacy"],
    population: "1.9M",
    industrialProfile: "Bhopal is Madhya Pradesh's industrial hub with petrochemical and power generation operations following historical chemical facility development. The city requires rigorous inspection protocols for chemical process safety and legacy facility management."
  },
  {
    name: "Indore",
    slug: "indore-india",
    country: "IN",
    region: "Madhya Pradesh",
    industries: ["Manufacturing", "Textiles", "Pharmaceuticals"],
    companies: ["Ranbaxy", "Aurobindo Pharma", "Textile Mills"],
    population: "2.5M",
    industrialProfile: "Indore is central India's pharmaceutical and textile manufacturing hub with diverse light industries. The city's inspection landscape includes pharmaceutical assembly lines, textile equipment, and small-scale manufacturing systems."
  },
  {
    name: "Nagpur",
    slug: "nagpur-india",
    country: "IN",
    region: "Maharashtra",
    industries: ["Textiles", "Oranges", "Manufacturing"],
    companies: ["Wockhardt", "Bajaj Electricals", "Textile Mills"],
    population: "2.4M",
    industrialProfile: "Nagpur is central India's textile and pharmaceutical center with diverse manufacturing operations. The city requires inspection of textile machinery, pharmaceutical equipment, and industrial processing systems."
  },
  {
    name: "Aurangabad",
    slug: "aurangabad-india",
    country: "IN",
    region: "Maharashtra",
    industries: ["Drugs", "Chemicals", "Manufacturing"],
    companies: ["Cipla", "Ajanta Pharma", "Pharmaceutical Plants"],
    population: "1.2M",
    industrialProfile: "Aurangabad is India's pharmaceutical manufacturing center with extensive drug production facilities. The city's inspection environment includes sterile manufacturing suites, chemical synthesis equipment, and quality control laboratories."
  },
  {
    name: "Nashik",
    slug: "nashik-india",
    country: "IN",
    region: "Maharashtra",
    industries: ["Pharmaceuticals", "Manufacturing", "Chemicals"],
    companies: ["Lupin", "Sun Pharma", "Chemical Plants"],
    population: "1.6M",
    industrialProfile: "Nashik is Maharashtra's pharmaceutical capital with major drug manufacturing and chemical operations. The city requires comprehensive inspection of fermentation vessels, extraction equipment, and advanced synthesis systems."
  },
  {
    name: "Coimbatore",
    slug: "coimbatore-india",
    country: "IN",
    region: "Tamil Nadu",
    industries: ["Textiles", "Engineering", "Manufacturing"],
    companies: ["Sundram Fasteners", "Lakshmi Machine Works", "Textile Mills"],
    population: "1.6M",
    industrialProfile: "Coimbatore is south India's textile and engineering hub with automotive components and precision machinery. The city's inspection focus includes textile spindles, machining centers, and automotive manufacturing equipment."
  },
  {
    name: "Madurai",
    slug: "madurai-india",
    country: "IN",
    region: "Tamil Nadu",
    industries: ["Textiles", "Manufacturing", "Chemicals"],
    companies: ["Vignesh Textiles", "Chemical Plants", "Manufacturing"],
    population: "1.3M",
    industrialProfile: "Madurai is Tamil Nadu's textile and manufacturing center with diverse industrial operations. The city's inspection landscape includes textile machinery, chemical reactors, and industrial processing equipment."
  },
  {
    name: "Trichy",
    slug: "trichy-india",
    country: "IN",
    region: "Tamil Nadu",
    industries: ["Textiles", "Engineering", "Manufacturing"],
    companies: ["Bharati Textiles", "BHEL", "Manufacturing"],
    population: "0.9M",
    industrialProfile: "Trichy is Tamil Nadu's engineering and textile manufacturing center with power equipment production. The city requires inspection of electrical machinery, textile equipment, and industrial pressure vessels."
  },
  {
    name: "Salem",
    slug: "salem-india",
    country: "IN",
    region: "Tamil Nadu",
    industries: ["Steel", "Engineering", "Chemicals"],
    companies: ["Salem Steel Plant", "South India Textiles", "Chemical Plants"],
    population: "0.8M",
    industrialProfile: "Salem is southern India's steel and heavy engineering hub with chemical production and textile mills. The city's inspection environment includes blast furnaces, rolling mills, and chemical processing equipment."
  },
  {
    name: "Mangalore",
    slug: "mangalore-india",
    country: "IN",
    region: "Karnataka",
    industries: ["Refining", "Petrochemicals", "Chemicals"],
    companies: ["Mangalore Refinery", "Bajaj Auto", "Ferro Alloys"],
    population: "0.6M",
    industrialProfile: "Mangalore is India's coastal refining hub with petrochemical processing and chemical manufacturing. The city requires extensive inspection of refinery equipment, crude oil handling systems, and product pipelines."
  },
  {
    name: "Hubli",
    slug: "hubli-india",
    country: "IN",
    region: "Karnataka",
    industries: ["Engineering", "Manufacturing", "Textiles"],
    companies: ["Hubli Engineering", "Textile Mills", "Manufacturing"],
    population: "1.0M",
    industrialProfile: "Hubli is Karnataka's engineering and manufacturing center with textile and light industrial operations. The city's inspection focus includes precision machinery, textile equipment, and industrial systems."
  },
  {
    name: "Belgaum",
    slug: "belgaum-india",
    country: "IN",
    region: "Karnataka",
    industries: ["Sugar", "Textiles", "Manufacturing"],
    companies: ["Sugar Plants", "Textile Mills", "Manufacturing"],
    population: "0.5M",
    industrialProfile: "Belgaum is Karnataka's sugar and textile manufacturing center with diverse light industries. The city requires inspection of sugar processing equipment, textile machinery, and industrial boilers."
  },
  {
    name: "Visakhapatnam",
    slug: "visakhapatnam-india",
    country: "IN",
    region: "Andhra Pradesh",
    industries: ["Refining", "Petrochemicals", "Steel"],
    companies: ["Indian Oil Refinery", "Rashtriya Steel", "Hindustan Shipyard"],
    population: "1.7M",
    industrialProfile: "Visakhapatnam is Andhra Pradesh's petrochemical and refining hub on the Bay of Bengal with shipbuilding operations. The city's inspection landscape includes refinery equipment, marine vessel operations, and complex process systems."
  },
  {
    name: "Kakinada",
    slug: "kakinada-india",
    country: "IN",
    region: "Andhra Pradesh",
    industries: ["Oil & Gas", "Petrochemicals", "Port Operations"],
    companies: ["Hindustan Petroleum", "OIL Corp", "Port Authority"],
    population: "0.3M",
    industrialProfile: "Kakinada is Andhra Pradesh's oil and gas hub with offshore operations and petrochemical facilities. The city requires inspection of offshore platforms, subsea equipment, and onshore processing facilities."
  },
  {
    name: "Rajahmundry",
    slug: "rajahmundry-india",
    country: "IN",
    region: "Andhra Pradesh",
    industries: ["Manufacturing", "Textiles", "Chemicals"],
    companies: ["Textiles", "Chemical Plants", "Manufacturing"],
    population: "0.4M",
    industrialProfile: "Rajahmundry is Andhra Pradesh's textile and chemical manufacturing center. The city's inspection focus includes textile machinery, chemical reactors, and industrial processing equipment."
  },
  {
    name: "Paradip",
    slug: "paradip-india",
    country: "IN",
    region: "Odisha",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Indian Oil Refinery", "Paradip Port Authority", "Petrochemicals"],
    population: "0.2M",
    industrialProfile: "Paradip is Odisha's petrochemical and refining hub on the Indian Ocean with major port operations. The city requires comprehensive inspection of refining equipment, port facilities, and marine loading systems."
  },
  {
    name: "Durgapur",
    slug: "durgapur-india",
    country: "IN",
    region: "West Bengal",
    industries: ["Steel", "Chemicals", "Manufacturing"],
    companies: ["Durgapur Steel Plant", "CSTPS", "Chemical Plants"],
    population: "0.5M",
    industrialProfile: "Durgapur is West Bengal's steel and chemical manufacturing center with power generation operations. The city's inspection landscape includes steel rolling mills, blast furnaces, and chemical processing equipment."
  },
  {
    name: "Bokaro",
    slug: "bokaro-india",
    country: "IN",
    region: "Jharkhand",
    industries: ["Steel", "Manufacturing", "Energy"],
    companies: ["Bokaro Steel Plant", "NTPC", "Manufacturing"],
    population: "0.4M",
    industrialProfile: "Bokaro is Jharkhand's steel manufacturing hub with integrated power generation and industrial operations. The city requires inspection of blast furnaces, continuous casting equipment, and power plant systems."
  },
  {
    name: "Ranchi",
    slug: "ranchi-india",
    country: "IN",
    region: "Jharkhand",
    industries: ["Manufacturing", "Engineering", "Mining"],
    companies: ["Heavy Engineering Corporation", "ISRI", "Manufacturing"],
    population: "1.1M",
    industrialProfile: "Ranchi is Jharkhand's heavy engineering and manufacturing center with automotive and industrial equipment production. The city's inspection focus includes heavy machinery, pressure vessels, and welded structures."
  },
  {
    name: "Rourkela",
    slug: "rourkela-india",
    country: "IN",
    region: "Odisha",
    industries: ["Steel", "Manufacturing", "Energy"],
    companies: ["Rourkela Steel Plant", "NINL", "Manufacturing"],
    population: "0.5M",
    industrialProfile: "Rourkela is Odisha's steel manufacturing center with integrated power generation and heavy industrial operations. The city requires inspection of steelmaking equipment, rolling mills, and industrial machinery."
  },
  {
    name: "Bhubaneswar",
    slug: "bhubaneswar-india",
    country: "IN",
    region: "Odisha",
    industries: ["Manufacturing", "Engineering", "Technology"],
    companies: ["NLC", "NTPC", "Manufacturing"],
    population: "0.8M",
    industrialProfile: "Bhubaneswar is Odisha's industrial hub with power generation and engineering operations. The city's inspection landscape includes power plant equipment, turbines, and industrial machinery."
  },
  {
    name: "Numaligarh",
    slug: "numaligarh-india",
    country: "IN",
    region: "Assam",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Numaligarh Refinery", "IOCL", "Petrochemicals"],
    population: "0.1M",
    industrialProfile: "Numaligarh is India's northeastern refining hub with crude oil processing and petrochemical production. The city requires inspection of refinery equipment, storage tanks, and pipeline networks."
  },
  {
    name: "Digboi",
    slug: "digboi-india",
    country: "IN",
    region: "Assam",
    industries: ["Oil & Gas", "Refining", "Chemicals"],
    companies: ["Oil India Limited", "Refinery", "Petrochemicals"],
    population: "0.03M",
    industrialProfile: "Digboi is India's historic oil and gas hub in northeast India with legacy oil operations and small refining. The city's inspection environment includes oil wells, vintage processing equipment, and pipeline infrastructure."
  },
  {
    name: "Mathura",
    slug: "mathura-india",
    country: "IN",
    region: "Uttar Pradesh",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Indian Oil Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.4M",
    industrialProfile: "Mathura is a major refining hub in northern India with large-scale crude oil processing. The city requires comprehensive inspection of refinery units, crude oil pipelines, and product distribution systems."
  },
  {
    name: "Bhatinda",
    slug: "bhatinda-india",
    country: "IN",
    region: "Punjab",
    industries: ["Refining", "Oil & Gas", "Manufacturing"],
    companies: ["Indian Oil Refinery", "HPCL", "Manufacturing"],
    population: "0.3M",
    industrialProfile: "Bhatinda is Punjab's refining hub with major crude oil processing and petrochemical operations. The city's inspection focus includes refinery equipment, fuel storage, and pipeline systems."
  },
  {
    name: "Barauni",
    slug: "barauni-india",
    country: "IN",
    region: "Bihar",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Indian Oil Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.1M",
    industrialProfile: "Barauni is eastern India's refining hub with major crude oil processing and petrochemical production. The city requires inspection of refinery units, tank storage, and distribution pipelines."
  },
  {
    name: "Haldia",
    slug: "haldia-india",
    country: "IN",
    region: "West Bengal",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Indian Oil Refinery", "Shell", "Petrochemicals"],
    population: "0.1M",
    industrialProfile: "Haldia is West Bengal's port-based refining and petrochemical hub serving the eastern region. The city's inspection landscape includes refinery equipment, port facilities, and maritime loading systems."
  },
  {
    name: "Barmer",
    slug: "barmer-india",
    country: "IN",
    region: "Rajasthan",
    industries: ["Oil & Gas", "Mining", "Refining"],
    companies: ["Cairn Energy", "ONGC", "Oil Companies"],
    population: "0.3M",
    industrialProfile: "Barmer is Rajasthan's oil and gas field center with active exploration and production operations. The city requires inspection of drilling equipment, wellhead systems, and small processing facilities."
  },
  {
    name: "Udaipur",
    slug: "udaipur-india",
    country: "IN",
    region: "Rajasthan",
    industries: ["Manufacturing", "Chemicals", "Engineering"],
    companies: ["HBL Power Systems", "Hindustan Pistons", "Manufacturing"],
    population: "0.4M",
    industrialProfile: "Udaipur is Rajasthan's industrial center with manufacturing and engineering operations. The city's inspection focus includes precision machinery, chemical plants, and industrial equipment."
  },
  {
    name: "Jodhpur",
    slug: "jodhpur-india",
    country: "IN",
    region: "Rajasthan",
    industries: ["Manufacturing", "Engineering", "Textiles"],
    companies: ["Thermal Power Station", "Textile Mills", "Manufacturing"],
    population: "1.2M",
    industrialProfile: "Jodhpur is Rajasthan's manufacturing and textile hub with power generation and industrial operations. The city requires inspection of thermal power equipment, textile machinery, and industrial systems."
  },
  {
    name: "Lucknow",
    slug: "lucknow-india",
    country: "IN",
    region: "Uttar Pradesh",
    industries: ["Manufacturing", "Engineering", "Chemicals"],
    companies: ["NTPC", "Chemicals", "Manufacturing"],
    population: "2.8M",
    industrialProfile: "Lucknow is Uttar Pradesh's capital and industrial center with power generation and chemical manufacturing. The city's inspection landscape includes power plant equipment, chemical reactors, and industrial machinery."
  },
  {
    name: "Kanpur",
    slug: "kanpur-india",
    country: "IN",
    region: "Uttar Pradesh",
    industries: ["Chemicals", "Textiles", "Manufacturing"],
    companies: ["CEAT Tyres", "Chemicals", "Manufacturing"],
    population: "2.8M",
    industrialProfile: "Kanpur is Uttar Pradesh's major industrial center with chemical and textile manufacturing. The city requires comprehensive inspection of chemical plants, tire production facilities, and industrial equipment."
  },
  {
    name: "Varanasi",
    slug: "varanasi-india",
    country: "IN",
    region: "Uttar Pradesh",
    industries: ["Textiles", "Manufacturing", "Silk Industry"],
    companies: ["Textiles", "Silk Mills", "Manufacturing"],
    population: "1.3M",
    industrialProfile: "Varanasi is India's historic textile and silk manufacturing center with traditional and modern operations. The city's inspection focus includes textile looms, dye facilities, and specialty manufacturing equipment."
  },
  {
    name: "Agra",
    slug: "agra-india",
    country: "IN",
    region: "Uttar Pradesh",
    industries: ["Manufacturing", "Chemicals", "Engineering"],
    companies: ["Manufacturing", "Chemical Plants", "Engineering"],
    population: "1.6M",
    industrialProfile: "Agra is Uttar Pradesh's manufacturing and chemical hub with diverse industrial operations. The city requires inspection of chemical reactors, manufacturing equipment, and industrial systems."
  },
  {
    name: "Meerut",
    slug: "meerut-india",
    country: "IN",
    region: "Uttar Pradesh",
    industries: ["Manufacturing", "Engineering", "Sports Equipment"],
    companies: ["Sports Equipment Manufacturers", "Engineering", "Manufacturing"],
    population: "1.4M",
    industrialProfile: "Meerut is northern India's sporting goods and manufacturing center with diverse light industries. The city's inspection landscape includes precision manufacturing, sports equipment assembly, and industrial machinery."
  },
  {
    name: "Ghaziabad",
    slug: "ghaziabad-india",
    country: "IN",
    region: "Uttar Pradesh",
    industries: ["Manufacturing", "Engineering", "Chemicals"],
    companies: ["Manufacturing", "Chemical Plants", "Engineering"],
    population: "1.7M",
    industrialProfile: "Ghaziabad is a major manufacturing hub near Delhi with diverse industrial operations and chemical plants. The city requires inspection of manufacturing equipment, chemical reactors, and industrial facilities."
  },
  {
    name: "Noida",
    slug: "noida-india",
    country: "IN",
    region: "Uttar Pradesh",
    industries: ["Technology", "Manufacturing", "Engineering"],
    companies: ["IT Companies", "Manufacturing", "Engineering"],
    population: "0.6M",
    industrialProfile: "Noida is a technology and manufacturing hub near Delhi with IT and industrial operations. The city's inspection focus includes precision manufacturing, electronics assembly, and industrial equipment."
  },
  {
    name: "Faridabad",
    slug: "faridabad-india",
    country: "IN",
    region: "Haryana",
    industries: ["Manufacturing", "Engineering", "Chemicals"],
    companies: ["Ranbaxy", "Escorts", "Manufacturing"],
    population: "1.4M",
    industrialProfile: "Faridabad is India's industrial hub near Delhi with extensive manufacturing and pharmaceutical operations. The city requires comprehensive inspection of industrial machinery, pharmaceutical equipment, and chemical facilities."
  },
  {
    name: "Gurgaon",
    slug: "gurgaon-india",
    country: "IN",
    region: "Haryana",
    industries: ["Technology", "Manufacturing", "Automotive"],
    companies: ["IT Companies", "Automotive", "Manufacturing"],
    population: "0.9M",
    industrialProfile: "Gurgaon is India's IT and automotive hub near Delhi with advanced manufacturing operations. The city's inspection landscape includes precision manufacturing, automotive assembly, and high-tech facilities."
  },
  {
    name: "Ludhiana",
    slug: "ludhiana-india",
    country: "IN",
    region: "Punjab",
    industries: ["Textiles", "Machinery", "Manufacturing"],
    companies: ["Textile Mills", "Machinery Manufacturers", "Manufacturing"],
    population: "1.6M",
    industrialProfile: "Ludhiana is Punjab's textile and machinery manufacturing hub with extensive light industrial operations. The city requires inspection of textile machinery, manufacturing equipment, and industrial systems."
  },
  {
    name: "Amritsar",
    slug: "amritsar-india",
    country: "IN",
    region: "Punjab",
    industries: ["Manufacturing", "Textiles", "Carpets"],
    companies: ["Textiles", "Carpet Mills", "Manufacturing"],
    population: "1.2M",
    industrialProfile: "Amritsar is Punjab's manufacturing and textile center with carpet production and light industries. The city's inspection focus includes textile equipment, carpet looms, and industrial machinery."
  },
  {
    name: "Jalandhar",
    slug: "jalandhar-india",
    country: "IN",
    region: "Punjab",
    industries: ["Sports Goods", "Textiles", "Manufacturing"],
    companies: ["Sports Equipment", "Textiles", "Manufacturing"],
    population: "0.8M",
    industrialProfile: "Jalandhar is Punjab's sports goods manufacturing center with textile and light industrial operations. The city requires inspection of sports equipment assembly, textile machinery, and manufacturing facilities."
  },
  {
    name: "Chandigarh",
    slug: "chandigarh-india",
    country: "IN",
    region: "Chandigarh",
    industries: ["Manufacturing", "Engineering", "Technology"],
    companies: ["Manufacturing", "Engineering", "IT Companies"],
    population: "1.1M",
    industrialProfile: "Chandigarh is a planned city serving northern India with diverse manufacturing and technology operations. The city's inspection landscape includes precision manufacturing, technology facilities, and industrial equipment."
  },
  {
    name: "Dehradun",
    slug: "dehradun-india",
    country: "IN",
    region: "Uttarakhand",
    industries: ["Manufacturing", "Technology", "Chemicals"],
    companies: ["Manufacturing", "Chemical Plants", "IT Operations"],
    population: "0.7M",
    industrialProfile: "Dehradun is Uttarakhand's industrial hub with manufacturing and technology operations. The city requires inspection of manufacturing equipment, chemical facilities, and industrial systems."
  },
  {
    name: "Haridwar",
    slug: "haridwar-india",
    country: "IN",
    region: "Uttarakhand",
    industries: ["Chemicals", "Pharmaceuticals", "Manufacturing"],
    companies: ["Pharmaceutical Plants", "Chemical Plants", "Manufacturing"],
    population: "0.4M",
    industrialProfile: "Haridwar is Uttarakhand's pharmaceutical and chemical manufacturing hub. The city's inspection focus includes pharmaceutical equipment, chemical reactors, and industrial facilities."
  },
  {
    name: "Rishikesh",
    slug: "rishikesh-india",
    country: "IN",
    region: "Uttarakhand",
    industries: ["Manufacturing", "Spirituality", "Tourism"],
    companies: ["Manufacturing", "Ashrams", "Tourism"],
    population: "0.1M",
    industrialProfile: "Rishikesh is Uttarakhand's spiritual and light manufacturing center with small-scale industrial operations. The city requires inspection of small manufacturing facilities and specialty equipment."
  },
  {
    name: "Patna",
    slug: "patna-india",
    country: "IN",
    region: "Bihar",
    industries: ["Manufacturing", "Engineering", "Power"],
    companies: ["Thermal Power", "Manufacturing", "Engineering"],
    population: "1.7M",
    industrialProfile: "Patna is Bihar's capital and industrial hub with power generation and manufacturing operations. The city's inspection landscape includes power plant equipment, industrial machinery, and manufacturing facilities."
  },
  {
    name: "Guwahati",
    slug: "guwahati-india",
    country: "IN",
    region: "Assam",
    industries: ["Oil & Gas", "Manufacturing", "Power"],
    companies: ["Oil India", "Power Plants", "Manufacturing"],
    population: "1.0M",
    industrialProfile: "Guwahati is Assam's capital and oil and gas hub serving northeast India. The city requires inspection of oil and gas operations, power generation equipment, and industrial systems."
  },
  {
    name: "Shillong",
    slug: "shillong-india",
    country: "IN",
    region: "Meghalaya",
    industries: ["Mining", "Manufacturing", "Power"],
    companies: ["Coal Mines", "Power Plants", "Manufacturing"],
    population: "0.4M",
    industrialProfile: "Shillong is Meghalaya's capital and mining hub with coal operations and power generation. The city's inspection focus includes mining equipment, power plant systems, and industrial machinery."
  },
  {
    name: "Imphal",
    slug: "imphal-india",
    country: "IN",
    region: "Manipur",
    industries: ["Manufacturing", "Textiles", "Engineering"],
    companies: ["Textiles", "Manufacturing", "Engineering"],
    population: "0.4M",
    industrialProfile: "Imphal is Manipur's capital with textile and light manufacturing operations. The city requires inspection of textile machinery, manufacturing equipment, and industrial systems."
  },
  {
    name: "Gangtok",
    slug: "gangtok-india",
    country: "IN",
    region: "Sikkim",
    industries: ["Manufacturing", "Tourism", "Services"],
    companies: ["Manufacturing", "Tourism", "Services"],
    population: "0.1M",
    industrialProfile: "Gangtok is Sikkim's capital with small-scale manufacturing and tourism operations. The city's inspection landscape includes light manufacturing facilities and specialty equipment."
  },
  {
    name: "Thiruvananthapuram",
    slug: "thiruvananthapuram-india",
    country: "IN",
    region: "Kerala",
    industries: ["Manufacturing", "Aerospace", "Chemicals"],
    companies: ["Hindustan Aeronautics", "Chemical Plants", "Manufacturing"],
    population: "0.8M",
    industrialProfile: "Thiruvananthapuram is Kerala's capital with aerospace and chemical manufacturing operations. The city requires inspection of aerospace components, chemical facilities, and precision manufacturing equipment."
  },
  {
    name: "Calicut",
    slug: "calicut-india",
    country: "IN",
    region: "Kerala",
    industries: ["Textiles", "Manufacturing", "Spices"],
    companies: ["Textile Mills", "Spice Processing", "Manufacturing"],
    population: "0.6M",
    industrialProfile: "Calicut is Kerala's textile and spice processing hub with historic maritime trade operations. The city's inspection focus includes textile equipment, spice processing machinery, and port facilities."
  },
  {
    name: "Riyadh",
    slug: "riyadh-saudi-arabia",
    country: "SA",
    region: "Riyadh",
    industries: ["Oil & Gas", "Petrochemicals", "Government"],
    companies: ["Saudi Aramco", "SABIC", "Government"],
    population: "7.6M",
    industrialProfile: "Riyadh is Saudi Arabia's capital and oil and gas command center with major petrochemical operations and administrative headquarters. The city requires comprehensive inspection of corporate offices, petrochemical research facilities, and energy infrastructure."
  },
  {
    name: "Al Khobar",
    slug: "al-khobar-saudi-arabia",
    country: "SA",
    region: "Eastern Province",
    industries: ["Oil & Gas", "Petrochemicals", "Port Operations"],
    companies: ["Saudi Aramco", "SABIC", "Port Authority"],
    population: "0.5M",
    industrialProfile: "Al Khobar is Saudi Arabia's oil industry hub on the Persian Gulf with major petrochemical and refining operations. The city requires specialized inspection of crude oil terminals, product pipelines, and marine loading facilities."
  },
  {
    name: "Dhahran",
    slug: "dhahran-saudi-arabia",
    country: "SA",
    region: "Eastern Province",
    industries: ["Oil & Gas", "Research", "Petrochemicals"],
    companies: ["Saudi Aramco", "Research Centers", "Petrochemicals"],
    population: "0.2M",
    industrialProfile: "Dhahran is Saudi Arabia's oil research and administration center with advanced petrochemical facilities. The city's inspection landscape includes research equipment, pilot plants, and specialized testing facilities."
  },
  {
    name: "Hail",
    slug: "hail-saudi-arabia",
    country: "SA",
    region: "Hail",
    industries: ["Agriculture", "Manufacturing", "Energy"],
    companies: ["Agricultural Operations", "Manufacturing", "Power Plants"],
    population: "0.5M",
    industrialProfile: "Hail is Saudi Arabia's northern agricultural and industrial hub with manufacturing and power generation. The city requires inspection of agricultural equipment, power plant systems, and industrial machinery."
  },
  {
    name: "Tabuk",
    slug: "tabuk-saudi-arabia",
    country: "SA",
    region: "Tabuk",
    industries: ["Manufacturing", "Mining", "Energy"],
    companies: ["Mining Operations", "Manufacturing", "Power Plants"],
    population: "0.6M",
    industrialProfile: "Tabuk is Saudi Arabia's northwestern industrial and mining center with manufacturing operations. The city's inspection focus includes mining equipment, manufacturing facilities, and power generation systems."
  },
  {
    name: "Madinah",
    slug: "madinah-saudi-arabia",
    country: "SA",
    region: "Madinah",
    industries: ["Manufacturing", "Petrochemicals", "Energy"],
    companies: ["Industrial Parks", "Petrochemicals", "Power Plants"],
    population: "1.8M",
    industrialProfile: "Madinah hosts Saudi Arabia's western industrial parks with diverse petrochemical and manufacturing operations. The city requires inspection of industrial complexes, chemical facilities, and power generation equipment."
  },
  {
    name: "Ruwais",
    slug: "ruwais-uae",
    country: "AE",
    region: "Abu Dhabi",
    industries: ["Refining", "Petrochemicals", "Power"],
    companies: ["ADNOC", "ADNOC Refining", "Petrochemicals"],
    population: "0.1M",
    industrialProfile: "Ruwais is Abu Dhabi's major refining and petrochemical hub with extensive processing capacity. The city requires comprehensive inspection of refinery units, petrochemical reactors, and power generation systems."
  },
  {
    name: "Ajman",
    slug: "ajman-uae",
    country: "AE",
    region: "Ajman",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Manufacturing", "Energy Companies"],
    population: "0.3M",
    industrialProfile: "Ajman is a UAE port emirate with maritime and light manufacturing operations. The city's inspection landscape includes port facilities, container handling equipment, and maritime infrastructure."
  },
  {
    name: "Ras Al Khaimah",
    slug: "ras-al-khaimah-uae",
    country: "AE",
    region: "Ras Al Khaimah",
    industries: ["Manufacturing", "Cement", "Port Operations"],
    companies: ["Cement Plants", "Port Authority", "Manufacturing"],
    population: "0.4M",
    industrialProfile: "Ras Al Khaimah is a UAE industrial emirate with cement production and manufacturing operations. The city requires inspection of cement kilns, manufacturing equipment, and port infrastructure."
  },
  {
    name: "Ras Laffan",
    slug: "ras-laffan-qatar",
    country: "QA",
    region: "Ras Laffan",
    industries: ["LNG", "Petrochemicals", "Oil & Gas"],
    companies: ["Qatar Gas", "RasGas", "Petrochemicals"],
    population: "0.1M",
    industrialProfile: "Ras Laffan is Qatar's liquefied natural gas hub with world-scale LNG processing and petrochemical operations. The city's inspection environment encompasses cryogenic equipment, LNG tanker terminals, and specialized gas handling systems."
  },
  {
    name: "Mesaieed",
    slug: "mesaieed-qatar",
    country: "QA",
    region: "Mesaieed",
    industries: ["Refining", "Petrochemicals", "Steel"],
    companies: ["Qatar Petroleum", "Petrochemicals", "Steel Mill"],
    population: "0.1M",
    industrialProfile: "Mesaieed is Qatar's industrial hub with refining, petrochemical, and steel manufacturing operations. The city requires inspection of refinery equipment, chemical reactors, and steel production systems."
  },
  {
    name: "Al Wakrah",
    slug: "al-wakrah-qatar",
    country: "QA",
    region: "Al Wakrah",
    industries: ["Oil & Gas", "Port Operations", "Fishing"],
    companies: ["Qatar Petroleum", "Port Authority", "Fishing Operations"],
    population: "0.2M",
    industrialProfile: "Al Wakrah is Qatar's southern port and oil and gas hub with maritime operations. The city's inspection focus includes oil and gas facilities, port equipment, and maritime infrastructure."
  },
  {
    name: "Shuaiba",
    slug: "shuaiba-kuwait",
    country: "KW",
    region: "Shuaiba",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Kuwait Petroleum", "Petrochemicals", "Port Authority"],
    population: "0.1M",
    industrialProfile: "Shuaiba is Kuwait's industrial hub with refining, petrochemical, and port operations. The city requires comprehensive inspection of refinery equipment, chemical plants, and maritime facilities."
  },
  {
    name: "Ahmadi",
    slug: "ahmadi-kuwait",
    country: "KW",
    region: "Ahmadi",
    industries: ["Oil & Gas", "Refining", "Petrochemicals"],
    companies: ["Kuwait Oil Company", "Refining", "Petrochemicals"],
    population: "0.4M",
    industrialProfile: "Ahmadi is Kuwait's primary oil and gas operations center with refining and petrochemical facilities. The city's inspection landscape includes oil field equipment, processing plants, and pipeline networks."
  },
  {
    name: "Sohar",
    slug: "sohar-oman",
    country: "OM",
    region: "North Batinah",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Sohar Refinery", "Petrochemicals", "Port Authority"],
    population: "0.2M",
    industrialProfile: "Sohar is Oman's major refining and port hub on the Arabian Sea with petrochemical operations. The city requires inspection of refinery units, maritime terminals, and product loading facilities."
  },
  {
    name: "Sur",
    slug: "sur-oman",
    country: "OM",
    region: "South Sharqiyah",
    industries: ["Oil & Gas", "Port Operations", "Fishing"],
    companies: ["Petroleum Operations", "Port Authority", "Fishing"],
    population: "0.1M",
    industrialProfile: "Sur is Oman's southern port with oil and gas operations and maritime infrastructure. The city's inspection focus includes oil facilities, port equipment, and maritime systems."
  },
  {
    name: "Duqm",
    slug: "duqm-oman",
    country: "OM",
    region: "Al Wusta",
    industries: ["Port Operations", "Oil & Gas", "Industrial"],
    companies: ["Port Authority", "Oil Operations", "Industrial Park"],
    population: "0.1M",
    industrialProfile: "Duqm is Oman's central coast port and industrial development zone with oil and gas operations. The city requires inspection of port facilities, industrial park equipment, and maritime infrastructure."
  },
  {
    name: "Sitra",
    slug: "sitra-bahrain",
    country: "BH",
    region: "Northern Governorate",
    industries: ["Oil & Gas", "Refining", "Petrochemicals"],
    companies: ["Bahrain Petroleum", "Refining", "Petrochemicals"],
    population: "0.1M",
    industrialProfile: "Sitra is Bahrain's oil and gas hub with refining and petrochemical facilities. The city requires comprehensive inspection of refinery equipment, chemical plants, and oil processing systems."
  },
  {
    name: "Awali",
    slug: "awali-bahrain",
    country: "BH",
    region: "Southern Governorate",
    industries: ["Oil & Gas", "Refining", "Manufacturing"],
    companies: ["Bahrain Petroleum", "Refining", "Manufacturing"],
    population: "0.1M",
    industrialProfile: "Awali is Bahrain's southern oil and gas hub with refining operations. The city's inspection landscape includes oil field equipment, refinery units, and processing facilities."
  },
  {
    name: "Basra",
    slug: "basra-iraq",
    country: "IQ",
    region: "Basra",
    industries: ["Oil & Gas", "Port Operations", "Refining"],
    companies: ["Iraqi Oil Company", "Port Authority", "Refining"],
    population: "1.4M",
    industrialProfile: "Basra is Iraq's major oil and gas hub on the Persian Gulf with port and refining operations. The city requires inspection of oil terminals, port facilities, and petroleum processing systems."
  },
  {
    name: "Baghdad",
    slug: "baghdad-iraq",
    country: "IQ",
    region: "Baghdad",
    industries: ["Government", "Manufacturing", "Energy"],
    companies: ["Government", "Manufacturing", "Power Plants"],
    population: "7.1M",
    industrialProfile: "Baghdad is Iraq's capital with government operations and industrial manufacturing. The city's inspection focus includes government facilities, manufacturing plants, and utility infrastructure."
  },
  {
    name: "Erbil",
    slug: "erbil-iraq",
    country: "IQ",
    region: "Kurdish Region",
    industries: ["Oil & Gas", "Manufacturing", "Services"],
    companies: ["Oil Operations", "Manufacturing", "Services"],
    population: "1.3M",
    industrialProfile: "Erbil is the Kurdish region's capital with oil and gas operations and manufacturing. The city requires inspection of oil and gas facilities, manufacturing equipment, and industrial systems."
  },
  {
    name: "Amman",
    slug: "amman-jordan",
    country: "JO",
    region: "Amman",
    industries: ["Government", "Manufacturing", "Energy"],
    companies: ["Government", "Manufacturing", "Power Plants"],
    population: "4.0M",
    industrialProfile: "Amman is Jordan's capital with government operations and industrial manufacturing. The city's inspection landscape includes manufacturing plants, utility infrastructure, and government facilities."
  },
  {
    name: "Aqaba",
    slug: "aqaba-jordan",
    country: "JO",
    region: "Aqaba",
    industries: ["Port Operations", "Oil & Gas", "Manufacturing"],
    companies: ["Port Authority", "Oil Operations", "Manufacturing"],
    population: "0.1M",
    industrialProfile: "Aqaba is Jordan's port city on the Red Sea with oil and gas operations and maritime infrastructure. The city requires inspection of port facilities, oil terminals, and maritime equipment."
  },
  {
    name: "Beirut",
    slug: "beirut-lebanon",
    country: "LB",
    region: "Mount Lebanon",
    industries: ["Port Operations", "Manufacturing", "Services"],
    companies: ["Port Authority", "Manufacturing", "Services"],
    population: "2.2M",
    industrialProfile: "Beirut is Lebanon's capital and main port with maritime operations and light manufacturing. The city's inspection focus includes port facilities, maritime equipment, and industrial systems."
  },
  {
    name: "Tehran",
    slug: "tehran-iran",
    country: "IR",
    region: "Tehran",
    industries: ["Oil & Gas", "Petrochemicals", "Government"],
    companies: ["National Iranian Oil", "Petrochemicals", "Government"],
    population: "8.7M",
    industrialProfile: "Tehran is Iran's capital and oil and gas headquarters with petrochemical operations and government facilities. The city requires inspection of corporate operations, petrochemical research, and utility infrastructure."
  },
  {
    name: "Isfahan",
    slug: "isfahan-iran",
    country: "IR",
    region: "Isfahan",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Isfahan Refinery", "Petrochemicals", "Manufacturing"],
    population: "2.0M",
    industrialProfile: "Isfahan is Iran's central refining and petrochemical hub with manufacturing operations. The city's inspection landscape includes refinery equipment, chemical plants, and industrial facilities."
  },
  {
    name: "Tabriz",
    slug: "tabriz-iran",
    country: "IR",
    region: "East Azerbaijan",
    industries: ["Manufacturing", "Petrochemicals", "Engineering"],
    companies: ["Manufacturing", "Petrochemicals", "Engineering"],
    population: "1.7M",
    industrialProfile: "Tabriz is Iran's northwestern manufacturing and petrochemical hub with diverse industrial operations. The city requires inspection of manufacturing equipment, chemical plants, and industrial systems."
  },
  {
    name: "Bandar Abbas",
    slug: "bandar-abbas-iran",
    country: "IR",
    region: "Hormozgan",
    industries: ["Port Operations", "Oil & Gas", "Refining"],
    companies: ["Port Authority", "Oil Operations", "Refining"],
    population: "0.5M",
    industrialProfile: "Bandar Abbas is Iran's primary port and oil and gas hub on the Persian Gulf. The city's inspection focus includes port facilities, oil terminals, and maritime infrastructure."
  },
  {
    name: "Assaluyeh",
    slug: "assaluyeh-iran",
    country: "IR",
    region: "Bushehr",
    industries: ["Oil & Gas", "LNG", "Petrochemicals"],
    companies: ["South Pars Gas", "LNG Facilities", "Petrochemicals"],
    population: "0.1M",
    industrialProfile: "Assaluyeh is Iran's liquefied natural gas and petrochemical center on the Persian Gulf. The city requires specialized inspection of LNG processing, cryogenic equipment, and gas handling systems."
  },
  {
    name: "Newcastle",
    slug: "newcastle-uk",
    country: "GB",
    region: "England",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Manufacturing", "Energy Companies"],
    population: "0.3M",
    industrialProfile: "Newcastle is England's northeastern port and manufacturing hub on the North Sea. The city's inspection landscape includes port facilities, shipbuilding equipment, and industrial machinery."
  },
  {
    name: "Glasgow",
    slug: "glasgow-scotland",
    country: "GB",
    region: "Scotland",
    industries: ["Shipbuilding", "Manufacturing", "Port Operations"],
    companies: ["Shipbuilders", "Manufacturing", "Port Authority"],
    population: "0.6M",
    industrialProfile: "Glasgow is Scotland's major shipbuilding and manufacturing hub on the River Clyde. The city requires comprehensive inspection of ship construction, marine equipment, and industrial machinery."
  },
  {
    name: "Dundee",
    slug: "dundee-scotland",
    country: "GB",
    region: "Scotland",
    industries: ["Manufacturing", "Port Operations", "Technology"],
    companies: ["Manufacturing", "Port Authority", "Tech Companies"],
    population: "0.15M",
    industrialProfile: "Dundee is Scotland's eastern port and manufacturing center with technology operations. The city's inspection focus includes port facilities, manufacturing equipment, and industrial systems."
  },
  {
    name: "Grangemouth",
    slug: "grangemouth-scotland",
    country: "GB",
    region: "Scotland",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["INEOS", "Petrochemicals", "Port Authority"],
    population: "0.02M",
    industrialProfile: "Grangemouth is Scotland's refining and petrochemical hub with major processing operations on the Firth of Forth. The city requires extensive inspection of refinery equipment, chemical plants, and maritime terminals."
  },
  {
    name: "Milford Haven",
    slug: "milford-haven-wales",
    country: "GB",
    region: "Wales",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Refineries", "Petrochemicals", "Port Authority"],
    population: "0.013M",
    industrialProfile: "Milford Haven is Wales's major petrochemical and refining hub with large-scale processing facilities. The city's inspection landscape includes refinery equipment, chemical plants, and oil terminals."
  },
  {
    name: "Fawley",
    slug: "fawley-uk",
    country: "GB",
    region: "England",
    industries: ["Refining", "Petrochemicals", "Energy"],
    companies: ["Esso Refinery", "Petrochemicals", "Energy"],
    population: "0.01M",
    industrialProfile: "Fawley is England's largest refining hub on the Solent with integrated petrochemical operations. The city requires comprehensive inspection of refinery units, chemical reactors, and marine loading systems."
  },
  {
    name: "Immingham",
    slug: "immingham-uk",
    country: "GB",
    region: "England",
    industries: ["Port Operations", "Refining", "Energy"],
    companies: ["Port Authority", "Refining", "Energy Companies"],
    population: "0.01M",
    industrialProfile: "Immingham is England's largest port on the Humber estuary with refining and energy operations. The city's inspection focus includes port facilities, terminal equipment, and maritime infrastructure."
  },
  {
    name: "Teesside",
    slug: "teesside-uk",
    country: "GB",
    region: "England",
    industries: ["Chemicals", "Petrochemicals", "Steel"],
    companies: ["Chemical Plants", "Petrochemicals", "Steel Mill"],
    population: "0.5M",
    industrialProfile: "Teesside is England's major chemical and petrochemical hub with steel manufacturing operations. The city requires extensive inspection of chemical reactors, refinery equipment, and steel production systems."
  },
  {
    name: "Hull",
    slug: "hull-uk",
    country: "GB",
    region: "England",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Manufacturing", "Energy"],
    population: "0.3M",
    industrialProfile: "Hull is England's major eastern port with manufacturing and energy operations. The city's inspection landscape includes port facilities, container equipment, and industrial systems."
  },
  {
    name: "Frankfurt",
    slug: "frankfurt-germany",
    country: "DE",
    region: "Hesse",
    industries: ["Financial", "Manufacturing", "Energy"],
    companies: ["Finance Companies", "Manufacturing", "Energy"],
    population: "0.75M",
    industrialProfile: "Frankfurt is Germany's financial center with manufacturing and energy operations. The city requires inspection of financial infrastructure, manufacturing equipment, and utility systems."
  },
  {
    name: "Munich",
    slug: "munich-germany",
    country: "DE",
    region: "Bavaria",
    industries: ["Automotive", "Manufacturing", "Technology"],
    companies: ["BMW", "Manufacturing", "Tech Companies"],
    population: "1.5M",
    industrialProfile: "Munich is Germany's automotive and technology hub with major manufacturing operations. The city's inspection focus includes automotive assembly, precision machinery, and advanced manufacturing."
  },
  {
    name: "Düsseldorf",
    slug: "dusseldorf-germany",
    country: "DE",
    region: "North Rhine-Westphalia",
    industries: ["Manufacturing", "Chemicals", "Energy"],
    companies: ["Chemical Plants", "Manufacturing", "Energy"],
    population: "0.62M",
    industrialProfile: "Düsseldorf is western Germany's manufacturing and chemical hub on the Rhine River. The city requires inspection of chemical plants, manufacturing equipment, and industrial systems."
  },
  {
    name: "Stuttgart",
    slug: "stuttgart-germany",
    country: "DE",
    region: "Baden-Württemberg",
    industries: ["Automotive", "Manufacturing", "Technology"],
    companies: ["Daimler", "Bosch", "Manufacturing"],
    population: "0.63M",
    industrialProfile: "Stuttgart is southern Germany's automotive and technology hub with precision manufacturing. The city's inspection landscape includes automotive assembly, precision machinery, and advanced equipment."
  },
  {
    name: "Hannover",
    slug: "hannover-germany",
    country: "DE",
    region: "Lower Saxony",
    industries: ["Manufacturing", "Engineering", "Technology"],
    companies: ["Volkswagen", "Engineering", "Tech Companies"],
    population: "0.52M",
    industrialProfile: "Hannover is Germany's manufacturing and engineering center with automotive and industrial operations. The city requires inspection of automotive components, machinery, and industrial equipment."
  },
  {
    name: "Leverkusen",
    slug: "leverkusen-germany",
    country: "DE",
    region: "North Rhine-Westphalia",
    industries: ["Chemicals", "Pharmaceuticals", "Manufacturing"],
    companies: ["Bayer", "Chemicals", "Pharmaceuticals"],
    population: "0.16M",
    industrialProfile: "Leverkusen is Germany's chemical and pharmaceutical hub on the Rhine with extensive research and production. The city requires comprehensive inspection of chemical reactors, pharmaceutical facilities, and advanced synthesis equipment."
  },
  {
    name: "Ludwigshafen",
    slug: "ludwigshafen-germany",
    country: "DE",
    region: "Rhineland-Palatinate",
    industries: ["Chemicals", "Petrochemicals", "Manufacturing"],
    companies: ["BASF", "Petrochemicals", "Chemicals"],
    population: "0.17M",
    industrialProfile: "Ludwigshafen is Germany's largest chemical complex on the Rhine with world-scale petrochemical operations. The city's inspection environment encompasses massive chemical reactors, distillation columns, and integrated processing systems."
  },
  {
    name: "Ingolstadt",
    slug: "ingolstadt-germany",
    country: "DE",
    region: "Bavaria",
    industries: ["Automotive", "Manufacturing", "Engineering"],
    companies: ["Audi", "Automotive", "Manufacturing"],
    population: "0.14M",
    industrialProfile: "Ingolstadt is Bavaria's automotive manufacturing hub with Audi's primary operations. The city requires specialized inspection of automobile assembly lines, precision components, and advanced manufacturing systems."
  },
  {
    name: "Wolfsburg",
    slug: "wolfsburg-germany",
    country: "DE",
    region: "Lower Saxony",
    industries: ["Automotive", "Manufacturing", "Engineering"],
    companies: ["Volkswagen", "Automotive", "Manufacturing"],
    population: "0.12M",
    industrialProfile: "Wolfsburg is Germany's primary automotive manufacturing city with Volkswagen's main plant. The city's inspection landscape includes massive assembly lines, robotics, and advanced manufacturing equipment."
  },
  {
    name: "Lyon",
    slug: "lyon-france",
    country: "FR",
    region: "Auvergne-Rhône-Alpes",
    industries: ["Manufacturing", "Chemicals", "Technology"],
    companies: ["Manufacturing", "Chemicals", "Tech Companies"],
    population: "0.52M",
    industrialProfile: "Lyon is France's southeastern manufacturing hub with chemical and technology operations. The city requires inspection of manufacturing equipment, chemical plants, and industrial systems."
  },
  {
    name: "Le Havre",
    slug: "le-havre-france",
    country: "FR",
    region: "Normandy",
    industries: ["Port Operations", "Refining", "Petrochemicals"],
    companies: ["Port Authority", "Refining", "Petrochemicals"],
    population: "0.17M",
    industrialProfile: "Le Havre is France's major Atlantic port with refining and petrochemical operations. The city's inspection focus includes port facilities, refinery equipment, and maritime infrastructure."
  },
  {
    name: "Dunkirk",
    slug: "dunkirk-france",
    country: "FR",
    region: "Hauts-de-France",
    industries: ["Port Operations", "Steel", "Chemicals"],
    companies: ["Port Authority", "Steel Mill", "Chemical Plants"],
    population: "0.09M",
    industrialProfile: "Dunkirk is France's northern port with steel and chemical manufacturing operations. The city requires inspection of port facilities, steel equipment, and chemical plants."
  },
  {
    name: "Fos-sur-Mer",
    slug: "fos-sur-mer-france",
    country: "FR",
    region: "Provence-Alpes-Côte d'Azur",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Petroplus Refinery", "Petrochemicals", "Port Authority"],
    population: "0.05M",
    industrialProfile: "Fos-sur-Mer is France's Mediterranean petrochemical hub with port and refining operations. The city's inspection landscape includes refinery equipment, chemical plants, and maritime terminals."
  },
  {
    name: "Gravelines",
    slug: "gravelines-france",
    country: "FR",
    region: "Hauts-de-France",
    industries: ["Nuclear Energy", "Port Operations", "Manufacturing"],
    companies: ["Nuclear Power", "Port Authority", "Manufacturing"],
    population: "0.012M",
    industrialProfile: "Gravelines hosts France's primary nuclear power facility on the English Channel coast. The city requires specialized inspection of nuclear equipment, cooling systems, and safety infrastructure."
  },
  {
    name: "Terneuzen",
    slug: "terneuzen-netherlands",
    country: "NL",
    region: "Zeeland",
    industries: ["Chemicals", "Petrochemicals", "Port Operations"],
    companies: ["Chemical Plants", "Petrochemicals", "Port Authority"],
    population: "0.055M",
    industrialProfile: "Terneuzen is the Netherlands' chemical hub on the Scheldt estuary with major petrochemical operations. The city requires inspection of chemical reactors, pipeline systems, and port facilities."
  },
  {
    name: "Geleen",
    slug: "geleen-netherlands",
    country: "NL",
    region: "Limburg",
    industries: ["Chemicals", "Petrochemicals", "Manufacturing"],
    companies: ["Chemical Plants", "Petrochemicals", "Manufacturing"],
    population: "0.04M",
    industrialProfile: "Geleen is the Netherlands' eastern petrochemical hub with chemical manufacturing operations. The city's inspection focus includes chemical reactors, processing equipment, and industrial facilities."
  },
  {
    name: "Moerdijk",
    slug: "moerdijk-netherlands",
    country: "NL",
    region: "North Brabant",
    industries: ["Chemicals", "Port Operations", "Manufacturing"],
    companies: ["Chemical Plants", "Port Authority", "Manufacturing"],
    population: "0.009M",
    industrialProfile: "Moerdijk is the Netherlands' southern port and chemical hub with manufacturing operations. The city requires inspection of chemical plants, port facilities, and industrial systems."
  },
  {
    name: "Ghent",
    slug: "ghent-belgium",
    country: "BE",
    region: "East Flanders",
    industries: ["Chemicals", "Manufacturing", "Port Operations"],
    companies: ["Chemical Plants", "Manufacturing", "Port Authority"],
    population: "0.26M",
    industrialProfile: "Ghent is Belgium's major port and chemical center with manufacturing operations. The city's inspection landscape includes chemical plants, port facilities, and industrial equipment."
  },
  {
    name: "Feluy",
    slug: "feluy-belgium",
    country: "BE",
    region: "Hainaut",
    industries: ["Chemicals", "Petrochemicals", "Manufacturing"],
    companies: ["Chemical Plants", "Petrochemicals", "Manufacturing"],
    population: "0.004M",
    industrialProfile: "Feluy is Belgium's petrochemical hub with chemical manufacturing operations. The city requires inspection of petrochemical equipment, chemical reactors, and processing facilities."
  },
  {
    name: "Gothenburg",
    slug: "gothenburg-sweden",
    country: "SE",
    region: "Västra Götaland",
    industries: ["Automotive", "Port Operations", "Manufacturing"],
    companies: ["Volvo", "Port Authority", "Manufacturing"],
    population: "0.65M",
    industrialProfile: "Gothenburg is Sweden's largest port and automotive hub with manufacturing operations. The city's inspection focus includes automobile assembly, port facilities, and industrial equipment."
  },
  {
    name: "Malmö",
    slug: "malmo-sweden",
    country: "SE",
    region: "Scania",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Manufacturing", "Energy"],
    population: "0.35M",
    industrialProfile: "Malmö is Sweden's southern port and manufacturing center with diverse industrial operations. The city requires inspection of port facilities, manufacturing equipment, and industrial systems."
  },
  {
    name: "Stockholm",
    slug: "stockholm-sweden",
    country: "SE",
    region: "Stockholm",
    industries: ["Technology", "Manufacturing", "Energy"],
    companies: ["Tech Companies", "Manufacturing", "Energy"],
    population: "0.98M",
    industrialProfile: "Stockholm is Sweden's capital and technology hub with advanced manufacturing and energy operations. The city's inspection landscape includes technology facilities, manufacturing equipment, and utility systems."
  },
  {
    name: "Helsinki",
    slug: "helsinki-finland",
    country: "FI",
    region: "Uusimaa",
    industries: ["Technology", "Manufacturing", "Port Operations"],
    companies: ["Tech Companies", "Manufacturing", "Port Authority"],
    population: "0.66M",
    industrialProfile: "Helsinki is Finland's capital and technology center with manufacturing and port operations. The city requires inspection of technology facilities, manufacturing equipment, and port infrastructure."
  },
  {
    name: "Turku",
    slug: "turku-finland",
    country: "FI",
    region: "Southwest Finland",
    industries: ["Shipbuilding", "Manufacturing", "Port Operations"],
    companies: ["Shipbuilders", "Manufacturing", "Port Authority"],
    population: "0.19M",
    industrialProfile: "Turku is Finland's shipbuilding and manufacturing center with major port operations. The city's inspection focus includes ship construction, marine equipment, and port facilities."
  },
  {
    name: "Pori",
    slug: "pori-finland",
    country: "FI",
    region: "Southwest Finland",
    industries: ["Paper Manufacturing", "Energy", "Port Operations"],
    companies: ["Paper Mills", "Power Plants", "Port Authority"],
    population: "0.08M",
    industrialProfile: "Pori is Finland's paper manufacturing and energy hub with port operations. The city requires inspection of paper mill equipment, power generation systems, and port facilities."
  },
  {
    name: "Bergen",
    slug: "bergen-norway",
    country: "NO",
    region: "Hordaland",
    industries: ["Port Operations", "Oil & Gas", "Fishing"],
    companies: ["Port Authority", "Oil Companies", "Fishing"],
    population: "0.29M",
    industrialProfile: "Bergen is Norway's major western port with oil and gas operations serving North Sea fields. The city's inspection landscape includes port facilities, oil terminal equipment, and maritime infrastructure."
  },
  {
    name: "Hammerfest",
    slug: "hammerfest-norway",
    country: "NO",
    region: "Finnmark",
    industries: ["LNG", "Oil & Gas", "Port Operations"],
    companies: ["LNG Facilities", "Oil Companies", "Port Authority"],
    population: "0.01M",
    industrialProfile: "Hammerfest is Norway's Arctic LNG hub serving the Snøhvit gas field. The city requires specialized inspection of cryogenic equipment, LNG loading systems, and Arctic infrastructure."
  },
  {
    name: "Melkøya",
    slug: "melkoya-norway",
    country: "NO",
    region: "Finnmark",
    industries: ["LNG", "Oil & Gas", "Energy"],
    companies: ["LNG Facilities", "Oil Companies", "Energy"],
    population: "0.001M",
    industrialProfile: "Melkøya is Norway's primary liquefied natural gas processing island serving Arctic gas production. The city's inspection environment includes specialized LNG equipment, cryogenic systems, and extreme-weather infrastructure."
  },
  {
    name: "Warsaw",
    slug: "warsaw-poland",
    country: "PL",
    region: "Masovian",
    industries: ["Government", "Manufacturing", "Energy"],
    companies: ["Government", "Manufacturing", "Power Plants"],
    population: "1.9M",
    industrialProfile: "Warsaw is Poland's capital with government and manufacturing operations. The city requires inspection of government facilities, manufacturing equipment, and utility infrastructure."
  },
  {
    name: "Gdynia",
    slug: "gdynia-poland",
    country: "PL",
    region: "Pomeranian",
    industries: ["Port Operations", "Shipbuilding", "Manufacturing"],
    companies: ["Port Authority", "Shipbuilders", "Manufacturing"],
    population: "0.25M",
    industrialProfile: "Gdynia is Poland's Baltic port with shipbuilding and manufacturing operations. The city's inspection focus includes port facilities, shipbuilding equipment, and maritime systems."
  },
  {
    name: "Szczecin",
    slug: "szczecin-poland",
    country: "PL",
    region: "West Pomeranian",
    industries: ["Port Operations", "Shipbuilding", "Manufacturing"],
    companies: ["Port Authority", "Shipbuilders", "Manufacturing"],
    population: "0.40M",
    industrialProfile: "Szczecin is Poland's northwestern port on the Oder River with shipbuilding and manufacturing. The city requires inspection of port facilities, ship construction, and industrial equipment."
  },
  {
    name: "Płock",
    slug: "plock-poland",
    country: "PL",
    region: "Masovian",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.12M",
    industrialProfile: "Płock is Poland's refining hub on the Vistula River with petrochemical operations. The city's inspection landscape includes refinery equipment, chemical plants, and pipeline systems."
  },
  {
    name: "Bucharest",
    slug: "bucharest-romania",
    country: "RO",
    region: "Bucharest",
    industries: ["Government", "Manufacturing", "Energy"],
    companies: ["Government", "Manufacturing", "Power Plants"],
    population: "1.8M",
    industrialProfile: "Bucharest is Romania's capital with government and industrial operations. The city requires inspection of government facilities, manufacturing plants, and utility systems."
  },
  {
    name: "Constanta",
    slug: "constanta-romania",
    country: "RO",
    region: "Constanța",
    industries: ["Port Operations", "Oil & Gas", "Refining"],
    companies: ["Port Authority", "Oil Companies", "Refining"],
    population: "0.31M",
    industrialProfile: "Constanta is Romania's Black Sea port with oil and gas operations and refining. The city's inspection focus includes port facilities, oil terminals, and refinery equipment."
  },
  {
    name: "Ploiesti",
    slug: "ploiesti-romania",
    country: "RO",
    region: "Prahova",
    industries: ["Oil & Gas", "Refining", "Petrochemicals"],
    companies: ["Oil Companies", "Refinery", "Petrochemicals"],
    population: "0.23M",
    industrialProfile: "Ploiesti is Romania's oil and gas hub with refining and petrochemical operations. The city requires comprehensive inspection of refinery equipment, chemical plants, and oil field systems."
  },
  {
    name: "Istanbul",
    slug: "istanbul-turkey",
    country: "TR",
    region: "Istanbul",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Manufacturing", "Energy"],
    population: "15.4M",
    industrialProfile: "Istanbul is Turkey's largest city spanning the Bosphorus with significant port and manufacturing operations. The city's inspection landscape includes port facilities, industrial equipment, and maritime systems."
  },
  {
    name: "Izmit",
    slug: "izmit-turkey",
    country: "TR",
    region: "Kocaeli",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.27M",
    industrialProfile: "Izmit is Turkey's major refining and petrochemical hub on the Sea of Marmara. The city requires extensive inspection of refinery equipment, chemical plants, and marine terminal facilities."
  },
  {
    name: "Aliaga",
    slug: "aliaga-turkey",
    country: "TR",
    region: "Izmir",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Refinery", "Petrochemicals", "Port Authority"],
    population: "0.02M",
    industrialProfile: "Aliaga is Turkey's Aegean petrochemical hub with refining and port operations. The city's inspection focus includes refinery equipment, chemical plants, and port facilities."
  },
  {
    name: "Mersin",
    slug: "mersin-turkey",
    country: "TR",
    region: "Mersin",
    industries: ["Port Operations", "Petrochemicals", "Manufacturing"],
    companies: ["Port Authority", "Petrochemicals", "Manufacturing"],
    population: "0.88M",
    industrialProfile: "Mersin is Turkey's southern Mediterranean port with petrochemical and manufacturing operations. The city requires inspection of port facilities, petrochemical plants, and industrial equipment."
  },
  {
    name: "Adana",
    slug: "adana-turkey",
    country: "TR",
    region: "Adana",
    industries: ["Manufacturing", "Petrochemicals", "Agriculture"],
    companies: ["Manufacturing", "Petrochemicals", "Agricultural Operations"],
    population: "1.8M",
    industrialProfile: "Adana is Turkey's southern manufacturing and agricultural hub with petrochemical operations. The city's inspection landscape includes manufacturing equipment, chemical plants, and agricultural processing."
  },
  {
    name: "Batman",
    slug: "batman-turkey",
    country: "TR",
    region: "Batman",
    industries: ["Oil & Gas", "Petrochemicals", "Refining"],
    companies: ["Oil Companies", "Petrochemicals", "Refining"],
    population: "0.42M",
    industrialProfile: "Batman is Turkey's southeastern oil and gas hub with refining and petrochemical operations. The city requires inspection of oil field equipment, refinery units, and chemical plants."
  },
  {
    name: "Kirikkale",
    slug: "kirikkale-turkey",
    country: "TR",
    region: "Kırıkkale",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.28M",
    industrialProfile: "Kirikkale is Turkey's central refining and petrochemical hub with manufacturing operations. The city's inspection focus includes refinery equipment, chemical reactors, and processing facilities."
  },
  {
    name: "Bilbao",
    slug: "bilbao-spain",
    country: "ES",
    region: "Basque Country",
    industries: ["Port Operations", "Steel", "Manufacturing"],
    companies: ["Port Authority", "Steel Mill", "Manufacturing"],
    population: "0.35M",
    industrialProfile: "Bilbao is Spain's major Basque port with steel and manufacturing operations. The city requires inspection of port facilities, steel production equipment, and industrial machinery."
  },
  {
    name: "Algeciras",
    slug: "algeciras-spain",
    country: "ES",
    region: "Andalusia",
    industries: ["Port Operations", "Refining", "Petrochemicals"],
    companies: ["Port Authority", "Refinery", "Petrochemicals"],
    population: "0.12M",
    industrialProfile: "Algeciras is Spain's southern Mediterranean port with refining and petrochemical operations. The city's inspection landscape includes port facilities, refinery equipment, and maritime systems."
  },
  {
    name: "Cartagena",
    slug: "cartagena-spain",
    country: "ES",
    region: "Murcia",
    industries: ["Port Operations", "Chemicals", "Manufacturing"],
    companies: ["Port Authority", "Chemical Plants", "Manufacturing"],
    population: "0.21M",
    industrialProfile: "Cartagena is Spain's southeastern Mediterranean port with chemical and manufacturing operations. The city requires inspection of port facilities, chemical plants, and industrial equipment."
  },
  {
    name: "Huelva",
    slug: "huelva-spain",
    country: "ES",
    region: "Andalusia",
    industries: ["Petrochemicals", "Refining", "Port Operations"],
    companies: ["Petrochemicals", "Refinery", "Port Authority"],
    population: "0.15M",
    industrialProfile: "Huelva is Spain's southwestern Atlantic petrochemical hub with port and refining operations. The city's inspection focus includes petrochemical plants, refinery equipment, and port facilities."
  },
  {
    name: "Tarragona",
    slug: "tarragona-spain",
    country: "ES",
    region: "Catalonia",
    industries: ["Petrochemicals", "Chemicals", "Port Operations"],
    companies: ["Petrochemicals", "Chemical Plants", "Port Authority"],
    population: "0.13M",
    industrialProfile: "Tarragona is Spain's northeastern petrochemical hub with chemical and port operations. The city requires comprehensive inspection of petrochemical plants, chemical reactors, and port facilities."
  },
  {
    name: "Puertollano",
    slug: "puertollano-spain",
    country: "ES",
    region: "Castile-La Mancha",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.043M",
    industrialProfile: "Puertollano is Spain's inland refining hub with petrochemical operations. The city's inspection landscape includes refinery equipment, chemical plants, and processing facilities."
  },
  {
    name: "Venice",
    slug: "venice-italy",
    country: "IT",
    region: "Veneto",
    industries: ["Port Operations", "Manufacturing", "Tourism"],
    companies: ["Port Authority", "Manufacturing", "Tourism"],
    population: "0.26M",
    industrialProfile: "Venice is Italy's northeastern Adriatic port with manufacturing and tourism operations. The city requires inspection of port facilities, industrial equipment, and maritime infrastructure."
  },
  {
    name: "Ravenna",
    slug: "ravenna-italy",
    country: "IT",
    region: "Emilia-Romagna",
    industries: ["Petrochemicals", "Port Operations", "Manufacturing"],
    companies: ["Petrochemicals", "Port Authority", "Manufacturing"],
    population: "0.15M",
    industrialProfile: "Ravenna is Italy's northeastern petrochemical hub with port operations. The city's inspection focus includes petrochemical plants, port facilities, and industrial equipment."
  },
  {
    name: "Gela",
    slug: "gela-sicily",
    country: "IT",
    region: "Sicily",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Refinery", "Petrochemicals", "Port Authority"],
    population: "0.055M",
    industrialProfile: "Gela is Sicily's southern refining and petrochemical hub with port operations. The city requires comprehensive inspection of refinery equipment, chemical plants, and maritime facilities."
  },
  {
    name: "Priolo",
    slug: "priolo-sicily",
    country: "IT",
    region: "Sicily",
    industries: ["Petrochemicals", "Refining", "Manufacturing"],
    companies: ["Petrochemicals", "Refinery", "Manufacturing"],
    population: "0.007M",
    industrialProfile: "Priolo is Sicily's major petrochemical and refining center with manufacturing operations. The city's inspection landscape includes petrochemical plants, refinery units, and chemical equipment."
  },
  {
    name: "Taranto",
    slug: "taranto-italy",
    country: "IT",
    region: "Apulia",
    industries: ["Steel", "Port Operations", "Chemicals"],
    companies: ["Steel Mill", "Port Authority", "Chemical Plants"],
    population: "0.2M",
    industrialProfile: "Taranto is Italy's southeastern Adriatic port with steel and chemical manufacturing. The city requires inspection of steel production equipment, port facilities, and chemical plants."
  },
  {
    name: "Brindisi",
    slug: "brindisi-italy",
    country: "IT",
    region: "Apulia",
    industries: ["Port Operations", "Petrochemicals", "Manufacturing"],
    companies: ["Port Authority", "Petrochemicals", "Manufacturing"],
    population: "0.087M",
    industrialProfile: "Brindisi is Italy's southeastern Adriatic port with petrochemical operations. The city's inspection focus includes port facilities, petrochemical plants, and industrial equipment."
  },
  {
    name: "Falconara",
    slug: "falconara-italy",
    country: "IT",
    region: "Marche",
    industries: ["Petrochemicals", "Port Operations", "Manufacturing"],
    companies: ["Petrochemicals", "Port Authority", "Manufacturing"],
    population: "0.06M",
    industrialProfile: "Falconara is Italy's central Adriatic petrochemical and port center. The city requires inspection of petrochemical plants, port facilities, and industrial systems."
  },
  {
    name: "Athens",
    slug: "athens-greece",
    country: "GR",
    region: "Attica",
    industries: ["Government", "Port Operations", "Manufacturing"],
    companies: ["Government", "Port Authority", "Manufacturing"],
    population: "3.1M",
    industrialProfile: "Athens is Greece's capital on the Aegean Sea with port and manufacturing operations. The city's inspection landscape includes port facilities, government infrastructure, and industrial equipment."
  },
  {
    name: "Thessaloniki",
    slug: "thessaloniki-greece",
    country: "GR",
    region: "Central Macedonia",
    industries: ["Port Operations", "Manufacturing", "Chemicals"],
    companies: ["Port Authority", "Manufacturing", "Chemical Plants"],
    population: "0.33M",
    industrialProfile: "Thessaloniki is Greece's northern Aegean port with manufacturing and chemical operations. The city requires inspection of port facilities, manufacturing equipment, and chemical plants."
  },
  {
    name: "Sines",
    slug: "sines-portugal",
    country: "PT",
    region: "Alentejo",
    industries: ["Port Operations", "Energy", "Petrochemicals"],
    companies: ["Port Authority", "Power Plants", "Petrochemicals"],
    population: "0.013M",
    industrialProfile: "Sines is Portugal's southern Atlantic port with energy and petrochemical operations. The city's inspection focus includes port facilities, power generation equipment, and petrochemical plants."
  },
  {
    name: "Lisbon",
    slug: "lisbon-portugal",
    country: "PT",
    region: "Lisbon",
    industries: ["Port Operations", "Government", "Manufacturing"],
    companies: ["Port Authority", "Government", "Manufacturing"],
    population: "2.9M",
    industrialProfile: "Lisbon is Portugal's capital and main port with government and manufacturing operations. The city requires inspection of port facilities, government infrastructure, and industrial equipment."
  },
  {
    name: "Prague",
    slug: "prague-czech",
    country: "CZ",
    region: "Central Bohemia",
    industries: ["Government", "Manufacturing", "Energy"],
    companies: ["Government", "Manufacturing", "Power Plants"],
    population: "1.4M",
    industrialProfile: "Prague is Czech Republic's capital with government and manufacturing operations. The city's inspection landscape includes government facilities, manufacturing equipment, and utility systems."
  },
  {
    name: "Bratislava",
    slug: "bratislava-slovakia",
    country: "SK",
    region: "Bratislava Region",
    industries: ["Government", "Chemicals", "Manufacturing"],
    companies: ["Government", "Chemical Plants", "Manufacturing"],
    population: "0.44M",
    industrialProfile: "Bratislava is Slovakia's capital on the Danube with chemical and manufacturing operations. The city requires inspection of government facilities, chemical plants, and industrial equipment."
  },
  {
    name: "Budapest",
    slug: "budapest-hungary",
    country: "HU",
    region: "Budapest",
    industries: ["Government", "Manufacturing", "Energy"],
    companies: ["Government", "Manufacturing", "Power Plants"],
    population: "1.75M",
    industrialProfile: "Budapest is Hungary's capital on the Danube with government and industrial operations. The city's inspection focus includes government facilities, manufacturing equipment, and utility infrastructure."
  },
  {
    name: "Százhalombatta",
    slug: "szazhalombatta-hungary",
    country: "HU",
    region: "Pest",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.018M",
    industrialProfile: "Százhalombatta is Hungary's refining and petrochemical hub with major processing operations. The city requires comprehensive inspection of refinery equipment, chemical plants, and processing facilities."
  },
  {
    name: "Calabar",
    slug: "calabar-nigeria",
    country: "NG",
    region: "Cross River",
    industries: ["Oil & Gas", "Port Operations", "Manufacturing"],
    companies: ["Oil Companies", "Port Authority", "Manufacturing"],
    population: "0.4M",
    industrialProfile: "Calabar is Nigeria's southeastern port and oil and gas hub with maritime operations. The city requires inspection of oil facilities, port equipment, and industrial systems."
  },
  {
    name: "Bonny",
    slug: "bonny-nigeria",
    country: "NG",
    region: "Rivers",
    industries: ["Oil & Gas", "LNG", "Port Operations"],
    companies: ["LNG Nigeria", "Oil Companies", "Port Authority"],
    population: "0.05M",
    industrialProfile: "Bonny is Nigeria's primary liquefied natural gas hub with major export operations. The city's inspection landscape includes LNG processing equipment, cryogenic systems, and maritime terminals."
  },
  {
    name: "Kaduna",
    slug: "kaduna-nigeria",
    country: "NG",
    region: "Kaduna",
    industries: ["Refining", "Manufacturing", "Energy"],
    companies: ["Refinery", "Manufacturing", "Power Plants"],
    population: "1.6M",
    industrialProfile: "Kaduna is Nigeria's central refining and manufacturing hub with power generation. The city requires inspection of refinery equipment, manufacturing facilities, and power systems."
  },
  {
    name: "Abuja",
    slug: "abuja-nigeria",
    country: "NG",
    region: "Federal Capital Territory",
    industries: ["Government", "Manufacturing", "Services"],
    companies: ["Government", "Manufacturing", "Services"],
    population: "3.5M",
    industrialProfile: "Abuja is Nigeria's capital with government operations and light manufacturing. The city's inspection focus includes government facilities, administrative infrastructure, and light industrial equipment."
  },
  {
    name: "Richards Bay",
    slug: "richards-bay-south-africa",
    country: "ZA",
    region: "KwaZulu-Natal",
    industries: ["Port Operations", "Mining", "Coal"],
    companies: ["Port Authority", "Mining Companies", "Coal Handling"],
    population: "0.39M",
    industrialProfile: "Richards Bay is South Africa's major deep-water port with mining and coal export operations. The city requires inspection of port facilities, bulk handling equipment, and maritime infrastructure."
  },
  {
    name: "Sasolburg",
    slug: "sasolburg-south-africa",
    country: "ZA",
    region: "Free State",
    industries: ["Chemicals", "Oil-from-Coal", "Energy"],
    companies: ["Sasol", "Chemical Plants", "Power Plants"],
    population: "0.12M",
    industrialProfile: "Sasolburg is South Africa's chemical and synthetic fuels hub with oil-from-coal production. The city's inspection landscape includes coal conversion equipment, chemical reactors, and power systems."
  },
  {
    name: "Secunda",
    slug: "secunda-south-africa",
    country: "ZA",
    region: "Mpumalanga",
    industries: ["Chemicals", "Oil-from-Coal", "Energy"],
    companies: ["Sasol", "Chemical Plants", "Energy"],
    population: "0.18M",
    industrialProfile: "Secunda is South Africa's largest oil-from-coal facility with chemical and energy operations. The city requires comprehensive inspection of synthetic fuel equipment, chemical plants, and power generation."
  },
  {
    name: "Port Elizabeth",
    slug: "port-elizabeth-south-africa",
    country: "ZA",
    region: "Eastern Cape",
    industries: ["Port Operations", "Automotive", "Manufacturing"],
    companies: ["Port Authority", "Automotive", "Manufacturing"],
    population: "0.4M",
    industrialProfile: "Port Elizabeth is South Africa's major southern port with automotive and manufacturing operations. The city's inspection focus includes port facilities, automotive equipment, and industrial systems."
  },
  {
    name: "Suez",
    slug: "suez-egypt",
    country: "EG",
    region: "Suez",
    industries: ["Port Operations", "Petrochemicals", "Energy"],
    companies: ["Port Authority", "Petrochemicals", "Energy"],
    population: "0.70M",
    industrialProfile: "Suez is Egypt's strategic port at the Suez Canal with petrochemical and energy operations. The city requires inspection of port facilities, petrochemical plants, and maritime infrastructure."
  },
  {
    name: "Port Said",
    slug: "port-said-egypt",
    country: "EG",
    region: "Port Said",
    industries: ["Port Operations", "Shipping", "Manufacturing"],
    companies: ["Port Authority", "Shipping", "Manufacturing"],
    population: "0.60M",
    industrialProfile: "Port Said is Egypt's northern Suez Canal port with shipping and manufacturing operations. The city's inspection landscape includes port facilities, container equipment, and maritime systems."
  },
  {
    name: "Ain Sokhna",
    slug: "ain-sokhna-egypt",
    country: "EG",
    region: "Suez",
    industries: ["Port Operations", "Petrochemicals", "Energy"],
    companies: ["Port Authority", "Petrochemicals", "Energy"],
    population: "0.05M",
    industrialProfile: "Ain Sokhna is Egypt's emerging petrochemical and port hub on the Red Sea coast. The city requires inspection of port facilities, petrochemical plants, and maritime terminals."
  },
  {
    name: "Arzew",
    slug: "arzew-algeria",
    country: "DZ",
    region: "Oran",
    industries: ["LNG", "Petrochemicals", "Port Operations"],
    companies: ["LNG Facilities", "Petrochemicals", "Port Authority"],
    population: "0.1M",
    industrialProfile: "Arzew is Algeria's primary liquefied natural gas export hub with petrochemical operations. The city's inspection environment includes LNG processing equipment, cryogenic systems, and maritime terminals."
  },
  {
    name: "Skikda",
    slug: "skikda-algeria",
    country: "DZ",
    region: "Skikda",
    industries: ["LNG", "Petrochemicals", "Port Operations"],
    companies: ["LNG Facilities", "Petrochemicals", "Port Authority"],
    population: "0.23M",
    industrialProfile: "Skikda is Algeria's eastern LNG and petrochemical hub on the Mediterranean. The city requires comprehensive inspection of LNG equipment, chemical plants, and port facilities."
  },
  {
    name: "Hassi Messaoud",
    slug: "hassi-messaoud-algeria",
    country: "DZ",
    region: "Ouargla",
    industries: ["Oil & Gas", "Energy", "Mining"],
    companies: ["Oil Companies", "Energy", "Mining"],
    population: "0.1M",
    industrialProfile: "Hassi Messaoud is Algeria's major oil and gas field center in the Sahara. The city requires inspection of wellhead equipment, processing facilities, and desert infrastructure."
  },
  {
    name: "Hassi R'mel",
    slug: "hassi-rmel-algeria",
    country: "DZ",
    region: "Laghouat",
    industries: ["Oil & Gas", "Energy", "Processing"],
    companies: ["Oil Companies", "Energy", "Processing"],
    population: "0.08M",
    industrialProfile: "Hassi R'mel is Algeria's major natural gas field and processing center. The city's inspection landscape includes gas processing equipment, separation facilities, and pipeline networks."
  },
  {
    name: "Brega",
    slug: "brega-libya",
    country: "LY",
    region: "Gulf of Sidra",
    industries: ["Oil & Gas", "Port Operations", "Energy"],
    companies: ["Oil Companies", "Port Authority", "Energy"],
    population: "0.05M",
    industrialProfile: "Brega is Libya's primary oil export terminal on the Mediterranean coast. The city requires inspection of oil loading facilities, port equipment, and maritime infrastructure."
  },
  {
    name: "Sfax",
    slug: "sfax-tunisia",
    country: "TN",
    region: "Sfax",
    industries: ["Port Operations", "Chemicals", "Manufacturing"],
    companies: ["Port Authority", "Chemical Plants", "Manufacturing"],
    population: "0.33M",
    industrialProfile: "Sfax is Tunisia's second city with port, chemical, and manufacturing operations. The city's inspection focus includes port facilities, chemical plants, and industrial equipment."
  },
  {
    name: "Bizerte",
    slug: "bizerte-tunisia",
    country: "TN",
    region: "Bizerta",
    industries: ["Port Operations", "Manufacturing", "Fishing"],
    companies: ["Port Authority", "Manufacturing", "Fishing"],
    population: "0.14M",
    industrialProfile: "Bizerte is Tunisia's northern port with manufacturing and fishing operations. The city requires inspection of port facilities, manufacturing equipment, and maritime systems."
  },
  {
    name: "Rabat",
    slug: "rabat-morocco",
    country: "MA",
    region: "Rabat-Salé-Zemmour-Zaers",
    industries: ["Government", "Port Operations", "Manufacturing"],
    companies: ["Government", "Port Authority", "Manufacturing"],
    population: "0.57M",
    industrialProfile: "Rabat is Morocco's capital with government and port operations. The city's inspection landscape includes government facilities, port equipment, and industrial systems."
  },
  {
    name: "Mohammedia",
    slug: "mohammedia-morocco",
    country: "MA",
    region: "Casablanca-Settat",
    industries: ["Refining", "Port Operations", "Petrochemicals"],
    companies: ["Refinery", "Port Authority", "Petrochemicals"],
    population: "0.20M",
    industrialProfile: "Mohammedia is Morocco's Atlantic refining hub with port operations. The city requires inspection of refinery equipment, petrochemical facilities, and maritime terminals."
  },
  {
    name: "Jorf Lasfar",
    slug: "jorf-lasfar-morocco",
    country: "MA",
    region: "Casablanca-Settat",
    industries: ["Chemicals", "Port Operations", "Manufacturing"],
    companies: ["Chemical Plants", "Port Authority", "Manufacturing"],
    population: "0.05M",
    industrialProfile: "Jorf Lasfar is Morocco's industrial hub with chemical manufacturing and port operations. The city's inspection focus includes chemical plants, port facilities, and industrial equipment."
  },
  {
    name: "Soyo",
    slug: "soyo-angola",
    country: "AO",
    region: "Zaire",
    industries: ["Oil & Gas", "LNG", "Port Operations"],
    companies: ["Oil Companies", "LNG Facilities", "Port Authority"],
    population: "0.18M",
    industrialProfile: "Soyo is Angola's oil and gas hub with liquefied natural gas export operations. The city requires specialized inspection of LNG equipment, oil facilities, and maritime terminals."
  },
  {
    name: "Cabinda",
    slug: "cabinda-angola",
    country: "AO",
    region: "Cabinda",
    industries: ["Oil & Gas", "Energy", "Port Operations"],
    companies: ["Oil Companies", "Energy", "Port Authority"],
    population: "0.30M",
    industrialProfile: "Cabinda is Angola's northeastern oil and gas exclave with maritime operations. The city's inspection landscape includes oil facilities, port equipment, and energy infrastructure."
  },
  {
    name: "Beira",
    slug: "beira-mozambique",
    country: "MZ",
    region: "Sofala",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Manufacturing", "Energy"],
    population: "0.51M",
    industrialProfile: "Beira is Mozambique's central port with manufacturing and energy operations. The city requires inspection of port facilities, manufacturing equipment, and industrial systems."
  },
  {
    name: "Pemba",
    slug: "pemba-mozambique",
    country: "MZ",
    region: "Cabo Delgado",
    industries: ["Port Operations", "Oil & Gas", "Energy"],
    companies: ["Port Authority", "Oil Companies", "Energy"],
    population: "0.20M",
    industrialProfile: "Pemba is Mozambique's northern port and emerging oil and gas hub. The city's inspection focus includes port facilities, oil operations, and maritime infrastructure."
  },
  {
    name: "Tema",
    slug: "tema-ghana",
    country: "GH",
    region: "Greater Accra",
    industries: ["Port Operations", "Refining", "Manufacturing"],
    companies: ["Port Authority", "Refinery", "Manufacturing"],
    population: "0.31M",
    industrialProfile: "Tema is Ghana's primary Atlantic port with refining and manufacturing operations. The city requires inspection of port facilities, refinery equipment, and industrial systems."
  },
  {
    name: "Douala",
    slug: "douala-cameroon",
    country: "CM",
    region: "Littoral",
    industries: ["Port Operations", "Oil & Gas", "Manufacturing"],
    companies: ["Port Authority", "Oil Companies", "Manufacturing"],
    population: "3.0M",
    industrialProfile: "Douala is Cameroon's primary port with oil and gas and manufacturing operations. The city's inspection landscape includes port facilities, oil equipment, and industrial systems."
  },
  {
    name: "Kribi",
    slug: "kribi-cameroon",
    country: "CM",
    region: "South Region",
    industries: ["Port Operations", "Oil & Gas", "Energy"],
    companies: ["Port Authority", "Oil Companies", "Energy"],
    population: "0.1M",
    industrialProfile: "Kribi is Cameroon's emerging southern port with oil and gas operations. The city requires inspection of port facilities, oil equipment, and maritime infrastructure."
  },
  {
    name: "Pointe-Noire",
    slug: "pointe-noire-congo",
    country: "CG",
    region: "Pool",
    industries: ["Oil & Gas", "Port Operations", "Refining"],
    companies: ["Oil Companies", "Port Authority", "Refining"],
    population: "1.1M",
    industrialProfile: "Pointe-Noire is Congo's major port with oil and gas operations and refining. The city's inspection focus includes oil facilities, port equipment, and refinery infrastructure."
  },
  {
    name: "Salvador",
    slug: "salvador-brazil",
    country: "BR",
    region: "Bahia",
    industries: ["Port Operations", "Petrochemicals", "Refining"],
    companies: ["Port Authority", "Petrochemicals", "Refinery"],
    population: "2.6M",
    industrialProfile: "Salvador is Brazil's northeastern port with petrochemical and refining operations. The city requires inspection of port facilities, petrochemical plants, and refinery equipment."
  },
  {
    name: "Recife",
    slug: "recife-brazil",
    country: "BR",
    region: "Pernambuco",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Manufacturing", "Energy"],
    population: "1.6M",
    industrialProfile: "Recife is Brazil's northeastern port with manufacturing and energy operations. The city's inspection landscape includes port facilities, manufacturing equipment, and industrial systems."
  },
  {
    name: "Fortaleza",
    slug: "fortaleza-brazil",
    country: "BR",
    region: "Ceará",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Manufacturing", "Energy"],
    population: "2.5M",
    industrialProfile: "Fortaleza is Brazil's northeastern port with manufacturing and tourism operations. The city requires inspection of port facilities, manufacturing equipment, and industrial systems."
  },
  {
    name: "Manaus",
    slug: "manaus-brazil",
    country: "BR",
    region: "Amazonas",
    industries: ["Port Operations", "Manufacturing", "Electronics"],
    companies: ["Port Authority", "Manufacturing", "Electronics"],
    population: "1.9M",
    industrialProfile: "Manaus is Brazil's Amazon port with manufacturing and electronics operations. The city's inspection focus includes port facilities, manufacturing equipment, and jungle climate infrastructure."
  },
  {
    name: "Belo Horizonte",
    slug: "belo-horizonte-brazil",
    country: "BR",
    region: "Minas Gerais",
    industries: ["Mining", "Manufacturing", "Steel"],
    companies: ["Mining Companies", "Manufacturing", "Steel"],
    population: "2.3M",
    industrialProfile: "Belo Horizonte is Brazil's mining and steel center with manufacturing operations. The city requires inspection of mining equipment, steel production, and industrial systems."
  },
  {
    name: "Curitiba",
    slug: "curitiba-brazil",
    country: "BR",
    region: "Paraná",
    industries: ["Manufacturing", "Automotive", "Technology"],
    companies: ["Manufacturing", "Automotive", "Tech Companies"],
    population: "1.8M",
    industrialProfile: "Curitiba is Brazil's southern manufacturing and automotive hub with technology operations. The city's inspection landscape includes manufacturing equipment, automotive assembly, and industrial systems."
  },
  {
    name: "Porto Alegre",
    slug: "porto-alegre-brazil",
    country: "BR",
    region: "Rio Grande do Sul",
    industries: ["Port Operations", "Manufacturing", "Energy"],
    companies: ["Port Authority", "Manufacturing", "Energy"],
    population: "1.4M",
    industrialProfile: "Porto Alegre is Brazil's southern port with manufacturing and energy operations. The city requires inspection of port facilities, manufacturing equipment, and industrial systems."
  },
  {
    name: "Vitória",
    slug: "vitoria-brazil",
    country: "BR",
    region: "Espírito Santo",
    industries: ["Port Operations", "Steel", "Mining"],
    companies: ["Port Authority", "Steel Mill", "Mining"],
    population: "0.36M",
    industrialProfile: "Vitória is Brazil's southeastern port with steel and mining operations. The city's inspection focus includes port facilities, steel equipment, and industrial machinery."
  },
  {
    name: "Macaé",
    slug: "macae-brazil",
    country: "BR",
    region: "Rio de Janeiro",
    industries: ["Oil & Gas", "Offshore", "Energy"],
    companies: ["Oil Companies", "Offshore Operations", "Energy"],
    population: "0.24M",
    industrialProfile: "Macaé is Brazil's offshore oil and gas hub serving the Campos Basin development. The city requires specialized inspection of offshore equipment, subsea systems, and marine facilities."
  },
  {
    name: "Duque de Caxias",
    slug: "duque-de-caxias-brazil",
    country: "BR",
    region: "Rio de Janeiro",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Refinery", "Petrochemicals", "Oil Companies"],
    population: "0.89M",
    industrialProfile: "Duque de Caxias is Brazil's major refining and petrochemical hub serving Rio de Janeiro. The city's inspection landscape includes refinery equipment, chemical plants, and processing facilities."
  },
  {
    name: "São José dos Campos",
    slug: "sao-jose-dos-campos-brazil",
    country: "BR",
    region: "São Paulo",
    industries: ["Aerospace", "Technology", "Manufacturing"],
    companies: ["Embraer", "Tech Companies", "Manufacturing"],
    population: "0.66M",
    industrialProfile: "São José dos Campos is Brazil's aerospace hub with aircraft manufacturing and technology. The city requires specialized inspection of aircraft assembly, composite materials, and advanced equipment."
  },
  {
    name: "Cubatão",
    slug: "cubatao-brazil",
    country: "BR",
    region: "São Paulo",
    industries: ["Petrochemicals", "Chemicals", "Steel"],
    companies: ["Petrochemicals", "Chemical Plants", "Steel"],
    population: "0.12M",
    industrialProfile: "Cubatão is Brazil's southeastern petrochemical and chemical hub with steel operations. The city's inspection focus includes petrochemical reactors, chemical plants, and steel equipment."
  },
  {
    name: "Camaçari",
    slug: "camacari-brazil",
    country: "BR",
    region: "Bahia",
    industries: ["Petrochemicals", "Chemicals", "Manufacturing"],
    companies: ["Petrochemicals", "Chemical Plants", "Manufacturing"],
    population: "0.20M",
    industrialProfile: "Camaçari is Brazil's northeastern petrochemical complex with chemical manufacturing. The city requires comprehensive inspection of petrochemical reactors, chemical plants, and processing equipment."
  },
  {
    name: "Paulínia",
    slug: "paulinia-brazil",
    country: "BR",
    region: "São Paulo",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.08M",
    industrialProfile: "Paulínia is São Paulo's refining and petrochemical hub with manufacturing operations. The city's inspection landscape includes refinery equipment, chemical plants, and processing facilities."
  },
  {
    name: "Araucária",
    slug: "araucaria-brazil",
    country: "BR",
    region: "Paraná",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.14M",
    industrialProfile: "Araucária is southern Brazil's refining and petrochemical hub. The city requires inspection of refinery equipment, chemical plants, and industrial processing systems."
  },
  {
    name: "Monterrey",
    slug: "monterrey-mexico",
    country: "MX",
    region: "Nuevo León",
    industries: ["Manufacturing", "Steel", "Technology"],
    companies: ["Steel Mills", "Manufacturing", "Tech Companies"],
    population: "1.1M",
    industrialProfile: "Monterrey is Mexico's northern industrial hub with steel and manufacturing operations. The city's inspection landscape includes steel production, manufacturing equipment, and industrial systems."
  },
  {
    name: "Guadalajara",
    slug: "guadalajara-mexico",
    country: "MX",
    region: "Jalisco",
    industries: ["Manufacturing", "Electronics", "Technology"],
    companies: ["Electronics", "Manufacturing", "Tech Companies"],
    population: "5.3M",
    industrialProfile: "Guadalajara is Mexico's western technology and manufacturing hub with electronics operations. The city requires inspection of electronics assembly, manufacturing equipment, and industrial systems."
  },
  {
    name: "Salamanca",
    slug: "salamanca-mexico",
    country: "MX",
    region: "Guanajuato",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.28M",
    industrialProfile: "Salamanca is Mexico's central refining hub with petrochemical operations. The city's inspection focus includes refinery equipment, chemical plants, and processing facilities."
  },
  {
    name: "Tula",
    slug: "tula-mexico",
    country: "MX",
    region: "Hidalgo",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.64M",
    industrialProfile: "Tula is Mexico's central refining and petrochemical center serving Mexico City's demand. The city requires comprehensive inspection of refinery equipment, chemical plants, and processing systems."
  },
  {
    name: "Cadereyta",
    slug: "cadereyta-mexico",
    country: "MX",
    region: "Querétaro",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.07M",
    industrialProfile: "Cadereyta is Mexico's eastern refining and petrochemical hub. The city's inspection landscape includes refinery equipment, chemical plants, and industrial processing."
  },
  {
    name: "Minatitlán",
    slug: "minatitlan-mexico",
    country: "MX",
    region: "Veracruz",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Refinery", "Petrochemicals", "Oil Companies"],
    population: "0.16M",
    industrialProfile: "Minatitlán is Mexico's southeastern refining and petrochemical hub in Veracruz. The city requires inspection of refinery equipment, chemical plants, and oil processing systems."
  },
  {
    name: "Dos Bocas",
    slug: "dos-bocas-mexico",
    country: "MX",
    region: "Tabasco",
    industries: ["Oil & Gas", "Port Operations", "Energy"],
    companies: ["Oil Companies", "Port Authority", "Energy"],
    population: "0.05M",
    industrialProfile: "Dos Bocas is Mexico's emerging southern oil and gas port hub. The city's inspection focus includes oil facilities, port equipment, and maritime infrastructure."
  },
  {
    name: "Ciudad Madero",
    slug: "ciudad-madero-mexico",
    country: "MX",
    region: "Tamaulipas",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Refinery", "Petrochemicals", "Port Authority"],
    population: "0.20M",
    industrialProfile: "Ciudad Madero is Mexico's northern Gulf coast refining and petrochemical hub. The city requires inspection of refinery equipment, chemical plants, and port facilities."
  },
  {
    name: "Reynosa",
    slug: "reynosa-mexico",
    country: "MX",
    region: "Tamaulipas",
    industries: ["Manufacturing", "Maquiladoras", "Border Trade"],
    companies: ["Manufacturing", "Maquiladoras", "Border Trade"],
    population: "0.76M",
    industrialProfile: "Reynosa is Mexico's northern border manufacturing hub with maquiladora operations. The city's inspection landscape includes manufacturing equipment, assembly operations, and industrial systems."
  },
  {
    name: "Bahía Blanca",
    slug: "bahia-blanca-argentina",
    country: "AR",
    region: "Buenos Aires",
    industries: ["Port Operations", "Petrochemicals", "Energy"],
    companies: ["Port Authority", "Petrochemicals", "Energy"],
    population: "0.29M",
    industrialProfile: "Bahía Blanca is Argentina's southern Atlantic port with petrochemical and energy operations. The city requires inspection of port facilities, petrochemical plants, and industrial systems."
  },
  {
    name: "Campana",
    slug: "campana-argentina",
    country: "AR",
    region: "Buenos Aires",
    industries: ["Refining", "Petrochemicals", "Manufacturing"],
    companies: ["Refinery", "Petrochemicals", "Manufacturing"],
    population: "0.10M",
    industrialProfile: "Campana is Argentina's northern refining and petrochemical hub near Buenos Aires. The city's inspection landscape includes refinery equipment, chemical plants, and processing facilities."
  },
  {
    name: "Dock Sud",
    slug: "dock-sud-argentina",
    country: "AR",
    region: "Buenos Aires",
    industries: ["Port Operations", "Refining", "Chemicals"],
    companies: ["Port Authority", "Refinery", "Chemical Plants"],
    population: "0.04M",
    industrialProfile: "Dock Sud is Argentina's main petrochemical and port zone in Buenos Aires. The city requires inspection of port facilities, chemical plants, and industrial equipment."
  },
  {
    name: "Neuquén",
    slug: "neuquen-argentina",
    country: "AR",
    region: "Neuquén",
    industries: ["Oil & Gas", "Energy", "Manufacturing"],
    companies: ["Oil Companies", "Energy", "Manufacturing"],
    population: "0.31M",
    industrialProfile: "Neuquén is Argentina's primary oil and gas hub in Patagonia with energy operations. The city requires inspection of oil and gas equipment, processing facilities, and industrial systems."
  },
  {
    name: "Vaca Muerta",
    slug: "vaca-muerta-argentina",
    country: "AR",
    region: "Neuquén",
    industries: ["Oil & Gas", "Shale", "Energy"],
    companies: ["Oil Companies", "Shale Operations", "Energy"],
    population: "0.05M",
    industrialProfile: "Vaca Muerta is Argentina's major shale oil and gas field in Patagonia. The city's inspection landscape includes unconventional wellhead equipment, processing facilities, and pipeline systems."
  },
  {
    name: "Mendoza",
    slug: "mendoza-argentina",
    country: "AR",
    region: "Mendoza",
    industries: ["Oil & Gas", "Wine", "Agriculture"],
    companies: ["Oil Companies", "Wine Industry", "Agriculture"],
    population: "1.0M",
    industrialProfile: "Mendoza is Argentina's western oil and gas hub with wine and agricultural operations. The city requires inspection of oil facilities, agricultural equipment, and industrial systems."
  },
  {
    name: "Concepción",
    slug: "concepcion-chile",
    country: "CL",
    region: "Biobío",
    industries: ["Port Operations", "Steel", "Manufacturing"],
    companies: ["Port Authority", "Steel Mill", "Manufacturing"],
    population: "0.22M",
    industrialProfile: "Concepción is Chile's central port with steel and manufacturing operations. The city's inspection focus includes port facilities, steel equipment, and industrial systems."
  },
  {
    name: "Antofagasta",
    slug: "antofagasta-chile",
    country: "CL",
    region: "Antofagasta",
    industries: ["Port Operations", "Mining", "Chemicals"],
    companies: ["Port Authority", "Mining", "Chemical Plants"],
    population: "0.40M",
    industrialProfile: "Antofagasta is Chile's northern mining and port hub with chemical operations. The city requires inspection of mining equipment, port facilities, and chemical plants."
  },
  {
    name: "Huasco",
    slug: "huasco-chile",
    country: "CL",
    region: "Atacama",
    industries: ["Port Operations", "Mining", "Energy"],
    companies: ["Port Authority", "Mining", "Energy"],
    population: "0.09M",
    industrialProfile: "Huasco is Chile's northern port with mining and energy operations. The city's inspection landscape includes port facilities, mining equipment, and industrial systems."
  },
  {
    name: "Quintero",
    slug: "quintero-chile",
    country: "CL",
    region: "Valparaíso",
    industries: ["Refining", "Petrochemicals", "Port Operations"],
    companies: ["Refinery", "Petrochemicals", "Port Authority"],
    population: "0.05M",
    industrialProfile: "Quintero is Chile's central refining and petrochemical hub near Valparaíso. The city requires inspection of refinery equipment, chemical plants, and port facilities."
  },
  {
    name: "Cartagena",
    slug: "cartagena-colombia",
    country: "CO",
    region: "Bolívar",
    industries: ["Port Operations", "Petrochemicals", "Oil & Gas"],
    companies: ["Port Authority", "Petrochemicals", "Oil Companies"],
    population: "1.0M",
    industrialProfile: "Cartagena is Colombia's Caribbean port with oil and gas and petrochemical operations. The city's inspection focus includes port facilities, oil equipment, and maritime infrastructure."
  },
  {
    name: "Barrancabermeja",
    slug: "barrancabermeja-colombia",
    country: "CO",
    region: "Santander",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Refinery", "Petrochemicals", "Oil Companies"],
    population: "0.22M",
    industrialProfile: "Barrancabermeja is Colombia's inland refining and petrochemical hub on the Magdalena River. The city requires comprehensive inspection of refinery equipment, chemical plants, and river operations."
  },
  {
    name: "Cali",
    slug: "cali-colombia",
    country: "CO",
    region: "Valle del Cauca",
    industries: ["Manufacturing", "Chemicals", "Sugar"],
    companies: ["Sugar Industry", "Chemical Plants", "Manufacturing"],
    population: "2.2M",
    industrialProfile: "Cali is Colombia's western manufacturing and sugar processing hub with chemical operations. The city's inspection landscape includes sugar mills, chemical plants, and industrial equipment."
  },
  {
    name: "Medellín",
    slug: "medellin-colombia",
    country: "CO",
    region: "Antioquia",
    industries: ["Manufacturing", "Chemicals", "Technology"],
    companies: ["Manufacturing", "Chemical Plants", "Tech Companies"],
    population: "2.5M",
    industrialProfile: "Medellín is Colombia's northwestern manufacturing and technology hub with chemical operations. The city requires inspection of manufacturing equipment, chemical plants, and industrial systems."
  },
  {
    name: "Talara",
    slug: "talara-peru",
    country: "PE",
    region: "Piura",
    industries: ["Oil & Gas", "Refining", "Port Operations"],
    companies: ["Oil Companies", "Refinery", "Port Authority"],
    population: "0.10M",
    industrialProfile: "Talara is Peru's northern oil and gas hub with refining and port operations. The city requires inspection of oil facilities, refinery equipment, and port infrastructure."
  },
  {
    name: "Ilo",
    slug: "ilo-peru",
    country: "PE",
    region: "Moquegua",
    industries: ["Port Operations", "Mining", "Chemicals"],
    companies: ["Port Authority", "Mining", "Chemical Plants"],
    population: "0.06M",
    industrialProfile: "Ilo is Peru's southern port with mining and chemical operations. The city's inspection focus includes port facilities, mining equipment, and chemical plants."
  },
  {
    name: "Punto Fijo",
    slug: "punto-fijo-venezuela",
    country: "VE",
    region: "Falcón",
    industries: ["Refining", "Petrochemicals", "Oil & Gas"],
    companies: ["Refinery", "Petrochemicals", "Oil Companies"],
    population: "0.40M",
    industrialProfile: "Punto Fijo is Venezuela's primary refining and petrochemical hub on the Caribbean coast. The city requires comprehensive inspection of refinery equipment, chemical plants, and processing systems."
  },
  {
    name: "Puerto La Cruz",
    slug: "puerto-la-cruz-venezuela",
    country: "VE",
    region: "Anzoátegui",
    industries: ["Port Operations", "Oil & Gas", "Petrochemicals"],
    companies: ["Port Authority", "Oil Companies", "Petrochemicals"],
    population: "0.39M",
    industrialProfile: "Puerto La Cruz is Venezuela's eastern port with oil and gas and petrochemical operations. The city's inspection landscape includes port facilities, oil equipment, and maritime infrastructure."
  },
  {
    name: "José Antonio Anzoátegui",
    slug: "jose-antonio-anzoategui-venezuela",
    country: "VE",
    region: "Anzoátegui",
    industries: ["Oil & Gas", "Petrochemicals", "Energy"],
    companies: ["Oil Companies", "Petrochemicals", "Energy"],
    population: "0.10M",
    industrialProfile: "José Antonio Anzoátegui is Venezuela's oil and gas industrial zone. The city requires inspection of oil facilities, petrochemical plants, and energy infrastructure."
  },
  {
    name: "Shushufindi",
    slug: "shushufindi-ecuador",
    country: "EC",
    region: "Sucumbíos",
    industries: ["Oil & Gas", "Energy", "Processing"],
    companies: ["Oil Companies", "Energy", "Processing"],
    population: "0.03M",
    industrialProfile: "Shushufindi is Ecuador's oil and gas field center in the Amazon region. The city's inspection focus includes oil wells, processing facilities, and pipeline networks."
  },
  {
    name: "Point Lisas",
    slug: "point-lisas-trinidad",
    country: "TT",
    region: "Couva-Tabaquite-Talparo",
    industries: ["Petrochemicals", "Oil & Gas", "Industrial Park"],
    companies: ["Petrochemicals", "Oil Companies", "Industrial Park"],
    population: "0.05M",
    industrialProfile: "Point Lisas is Trinidad and Tobago's major petrochemical and industrial park hub. The city requires comprehensive inspection of petrochemical plants, oil facilities, and industrial equipment."
  },
  {
    name: "La Brea",
    slug: "la-brea-trinidad",
    country: "TT",
    region: "Penal-Debe",
    industries: ["Oil & Gas", "Refining", "Asphalt"],
    companies: ["Oil Companies", "Refining", "Asphalt Operations"],
    population: "0.02M",
    industrialProfile: "La Brea is Trinidad and Tobago's historic oil and natural asphalt hub. The city's inspection landscape includes oil wells, asphalt extraction equipment, and processing facilities."
  }
];
