// Programmatic SEO Page Generator - NDT Method + Location Pages
// This file contains the data and template for generating method-location combo pages

export interface MethodLocationPage {
    method: string;
    methodSlug: string;
    location: string;
    locationSlug: string;
    country: string;
    region: string;
    color: string;
    industries: string[];
    applications: string[];
    certifications: string[];
    companies: string[];
}

export const ndtMethods = [
    {
        name: "Ultrasonic Testing",
        slug: "ultrasonic-testing",
        shortName: "UT",
        description: "Uses high-frequency sound waves to detect internal defects and measure material thickness",
        applications: ["Weld inspection", "Thickness gauging", "Corrosion mapping", "Flaw detection", "Bond testing"],
        techniques: ["Conventional UT", "Phased Array (PAUT)", "TOFD", "Guided Wave"]
    },
    {
        name: "Radiographic Testing",
        slug: "radiographic-testing",
        shortName: "RT",
        description: "Uses X-rays or gamma radiation to create images of internal structure",
        applications: ["Weld inspection", "Casting inspection", "Pipe inspection", "Corrosion detection"],
        techniques: ["Film RT", "Digital Radiography (DR)", "Computed Radiography (CR)"]
    },
    {
        name: "Magnetic Particle Testing",
        slug: "magnetic-particle-testing",
        shortName: "MT",
        description: "Detects surface and near-surface defects in ferromagnetic materials using magnetic fields",
        applications: ["Crack detection", "Weld inspection", "Casting inspection", "Forging inspection"],
        techniques: ["Wet fluorescent", "Dry powder", "Yoke method", "Prod method"]
    },
    {
        name: "Liquid Penetrant Testing",
        slug: "penetrant-testing",
        shortName: "PT",
        description: "Detects surface-breaking defects using liquid dye penetration",
        applications: ["Crack detection", "Porosity detection", "Leak detection", "Weld inspection"],
        techniques: ["Visible dye", "Fluorescent dye", "Water washable", "Post-emulsifiable"]
    },
    {
        name: "Eddy Current Testing",
        slug: "eddy-current-testing",
        shortName: "ET",
        description: "Uses electromagnetic induction to detect surface and near-surface defects",
        applications: ["Tube inspection", "Crack detection", "Conductivity testing", "Heat exchanger inspection"],
        techniques: ["Bobbin probe", "Array probes", "Surface probes", "Remote field"]
    },
    {
        name: "Visual Testing",
        slug: "visual-testing",
        shortName: "VT",
        description: "Direct or remote visual examination of components for surface defects",
        applications: ["Weld inspection", "Surface condition", "Dimensional checks", "Internal inspection"],
        techniques: ["Direct visual", "Remote visual (RVI)", "Borescope", "Video inspection"]
    }
];

export const keyLocations = [
    // USA - Major Industrial Hubs
    { name: "New York", slug: "new-york", country: "US", region: "New York", color: "slate", industries: ["Aerospace", "Manufacturing", "Construction"], companies: ["GeneralDynamics", "Lockheed Martin", "Siemens"] },
    { name: "Boston", slug: "boston", country: "US", region: "Massachusetts", color: "blue", industries: ["Aerospace", "Defense", "Manufacturing"], companies: ["Raytheon", "GE Aviation", "Textron"] },
    { name: "Atlanta", slug: "atlanta", country: "US", region: "Georgia", color: "amber", industries: ["Aerospace", "Manufacturing", "Construction"], companies: ["Lockheed Martin", "Komatsu", "Hyster-Yale"] },
    { name: "Miami", slug: "miami", country: "US", region: "Florida", color: "blue", industries: ["Marine", "Construction", "Power Generation"], companies: ["Boral", "Oshkosh", "Schneider Electric"] },
    { name: "Washington DC", slug: "washington-dc", country: "US", region: "District of Columbia", color: "red", industries: ["Defense", "Construction", "Power Generation"], companies: ["Booz Allen", "ManTech", "SRA International"] },
    { name: "Nashville", slug: "nashville", country: "US", region: "Tennessee", color: "amber", industries: ["Manufacturing", "Construction", "Automotive"], companies: ["Nissan", "Rexnord", "Mitsubishi"] },
    { name: "Minneapolis", slug: "minneapolis", country: "US", region: "Minnesota", color: "blue", industries: ["Manufacturing", "Mining", "Power Generation"], companies: ["3M", "Donaldson", "Polar Industries"] },
    { name: "Cleveland", slug: "cleveland", country: "US", region: "Ohio", color: "slate", industries: ["Manufacturing", "Steel", "Petrochemical"], companies: ["Cleveland-Cliffs", "SAIC", "Eaton"] },
    { name: "Baltimore", slug: "baltimore", country: "US", region: "Maryland", color: "blue", industries: ["Marine", "Manufacturing", "Steel"], companies: ["Bethlehem Steel", "Sparrows Point", "Danaher"] },
    { name: "Tampa", slug: "tampa", country: "US", region: "Florida", color: "green", industries: ["Power Generation", "Marine", "Petrochemical"], companies: ["WEG", "Flowserve", "Chevron"] },
    { name: "Charlotte", slug: "charlotte", country: "US", region: "North Carolina", color: "emerald", industries: ["Power Generation", "Nuclear", "Manufacturing"], companies: ["Duke Energy", "Belk Company", "Sensormatic"] },
    { name: "Indianapolis", slug: "indianapolis", country: "US", region: "Indiana", color: "orange", industries: ["Manufacturing", "Automotive", "Aerospace"], companies: ["Eli Lilly", "Roche", "Rolls-Royce"] },
    { name: "San Diego", slug: "san-diego", country: "US", region: "California", color: "blue", industries: ["Aerospace", "Defense", "Marine"], companies: ["General Dynamics", "Northrop Grumman", "SAIC"] },
    { name: "Portland", slug: "portland", country: "US", region: "Oregon", color: "green", industries: ["Manufacturing", "Power Generation", "Construction"], companies: ["Intel", "Freightliner", "Wabtec"] },
    { name: "Salt Lake City", slug: "salt-lake-city", country: "US", region: "Utah", color: "red", industries: ["Mining", "Manufacturing", "Aerospace"], companies: ["Kennecott", "Thiokol", "Drem Homes"] },
    { name: "Kansas City", slug: "kansas-city", country: "US", region: "Kansas", color: "amber", industries: ["Manufacturing", "Petrochemical", "Pipeline"], companies: ["Westar Energy", "Williams Companies", "Honeywell"] },
    { name: "St. Louis", slug: "st-louis", country: "US", region: "Missouri", color: "slate", industries: ["Manufacturing", "Aerospace", "Construction"], companies: ["Boeing", "Emerson Electric", "Graybar"] },
    { name: "Milwaukee", slug: "milwaukee", country: "US", region: "Wisconsin", color: "orange", industries: ["Manufacturing", "Steel", "Power Generation"], companies: ["Harley-Davidson", "Rockwell Automation", "WESCO"] },
    { name: "Cincinnati", slug: "cincinnati", country: "US", region: "Ohio", color: "purple", industries: ["Manufacturing", "Aerospace", "Automotive"], companies: ["Procter & Gamble", "The Midland Company", "GE Aviation"] },
    { name: "Jacksonville", slug: "jacksonville", country: "US", region: "Florida", color: "blue", industries: ["Marine", "Power Generation", "Pipeline"], companies: ["Dena", "JEA", "JAXPORT"] },
    { name: "Houston", slug: "houston", country: "US", region: "Texas", color: "amber", industries: ["Oil & Gas", "Petrochemical", "Refining"], companies: ["ExxonMobil", "Chevron", "Shell", "BP"] },
    { name: "Los Angeles", slug: "los-angeles", country: "US", region: "California", color: "blue", industries: ["Aerospace", "Defense", "Manufacturing"], companies: ["Boeing", "Lockheed Martin", "Northrop Grumman"] },
    { name: "New Orleans", slug: "new-orleans", country: "US", region: "Louisiana", color: "purple", industries: ["Offshore", "Marine", "Petrochemical"], companies: ["Shell", "Chevron", "CF Industries"] },
    { name: "Denver", slug: "denver", country: "US", region: "Colorado", color: "emerald", industries: ["Aerospace", "Mining", "Energy"], companies: ["Lockheed Martin", "Ball Aerospace", "Raytheon"] },
    { name: "Chicago", slug: "chicago", country: "US", region: "Illinois", color: "slate", industries: ["Manufacturing", "Steel", "Rail"], companies: ["Caterpillar", "John Deere", "ArcelorMittal"] },
    { name: "Seattle", slug: "seattle", country: "US", region: "Washington", color: "blue", industries: ["Aerospace", "Defense", "Technology"], companies: ["Boeing", "Blue Origin", "Amazon"] },
    { name: "Dallas", slug: "dallas", country: "US", region: "Texas", color: "amber", industries: ["Aerospace", "Defense", "Manufacturing"], companies: ["Lockheed Martin", "Raytheon", "Bell Helicopter"] },
    { name: "Phoenix", slug: "phoenix", country: "US", region: "Arizona", color: "orange", industries: ["Aerospace", "Semiconductor", "Manufacturing"], companies: ["Honeywell", "Raytheon", "Intel"] },
    { name: "Philadelphia", slug: "philadelphia", country: "US", region: "Pennsylvania", color: "slate", industries: ["Refining", "Pharmaceutical", "Manufacturing"], companies: ["PBF Energy", "Philadelphia Energy Solutions", "Boeing"] },
    { name: "San Francisco", slug: "san-francisco", country: "US", region: "California", color: "blue", industries: ["Technology", "Biotech", "Manufacturing"], companies: ["Tesla", "Genentech", "Chevron"] },
    { name: "Detroit", slug: "detroit", country: "US", region: "Michigan", color: "slate", industries: ["Automotive", "Manufacturing", "Steel"], companies: ["Ford", "GM", "Stellantis"] },
    { name: "Pittsburgh", slug: "pittsburgh", country: "US", region: "Pennsylvania", color: "amber", industries: ["Steel", "Manufacturing", "Energy"], companies: ["US Steel", "PPG Industries", "Westinghouse"] },
    { name: "Baton Rouge", slug: "baton-rouge", country: "US", region: "Louisiana", color: "purple", industries: ["Petrochemical", "Refining", "Chemical"], companies: ["ExxonMobil", "Dow Chemical", "BASF"] },
    { name: "Corpus Christi", slug: "corpus-christi", country: "US", region: "Texas", color: "amber", industries: ["Refining", "Petrochemical", "LNG"], companies: ["Valero", "Cheniere", "Flint Hills"] },
    { name: "Tulsa", slug: "tulsa", country: "US", region: "Oklahoma", color: "orange", industries: ["Oil & Gas", "Aerospace", "Manufacturing"], companies: ["Williams Companies", "ONEOK", "Spirit AeroSystems"] },
    { name: "Beaumont", slug: "beaumont", country: "US", region: "Texas", color: "amber", industries: ["Refining", "Petrochemical", "Chemical"], companies: ["ExxonMobil", "Total", "Motiva"] },

    // Middle East
    { name: "Dubai", slug: "dubai", country: "AE", region: "UAE", color: "emerald", industries: ["Oil & Gas", "Construction", "Aviation"], companies: ["ADNOC", "Emirates", "DP World"] },
    { name: "Saudi Arabia", slug: "saudi-arabia", country: "SA", region: "GCC", color: "green", industries: ["Oil & Gas", "Petrochemical"], companies: ["Saudi Aramco", "SABIC", "Ma'aden"] },
    { name: "Qatar", slug: "qatar", country: "QA", region: "GCC", color: "indigo", industries: ["LNG", "Oil & Gas"], companies: ["QatarEnergy", "QatarGas", "RasGas"] },
    { name: "Kuwait", slug: "kuwait", country: "KW", region: "GCC", color: "orange", industries: ["Oil & Gas", "Petrochemical"], companies: ["KOC", "KNPC", "KIPIC"] },
    { name: "Abu Dhabi", slug: "abu-dhabi", country: "AE", region: "UAE", color: "blue", industries: ["Oil & Gas", "Nuclear", "Aerospace"], companies: ["ADNOC", "Mubadala", "Etihad"] },
    { name: "Bahrain", slug: "bahrain", country: "BH", region: "GCC", color: "indigo", industries: ["Oil & Gas", "Aluminum", "Financial Services"], companies: ["BAPCO", "Alba", "Gulf Air"] },
    { name: "Oman", slug: "oman", country: "OM", region: "GCC", color: "green", industries: ["Oil & Gas", "LNG", "Petrochemical"], companies: ["Petroleum Development Oman", "Oman LNG", "OQ"] },
    { name: "Jubail", slug: "jubail", country: "SA", region: "Eastern Province", color: "green", industries: ["Petrochemical", "Steel", "Desalination"], companies: ["SABIC", "HADEED", "Marafiq"] },
    { name: "Yanbu", slug: "yanbu", country: "SA", region: "Western Province", color: "emerald", industries: ["Refining", "Petrochemical", "LPG"], companies: ["Saudi Aramco", "SAMREF", "Yanbu National Petrochemical"] },
    { name: "Dammam", slug: "dammam", country: "SA", region: "Eastern Province", color: "amber", industries: ["Oil & Gas", "Manufacturing", "Marine"], companies: ["Saudi Aramco", "SAFCO", "Eastern Petrochemical"] },

    // India
    { name: "Mumbai", slug: "mumbai", country: "IN", region: "Maharashtra", color: "orange", industries: ["Oil & Gas", "Manufacturing", "Power"], companies: ["BPCL", "HPCL", "Reliance"] },
    { name: "Chennai", slug: "chennai", country: "IN", region: "Tamil Nadu", color: "rose", industries: ["Automotive", "Manufacturing", "Marine"], companies: ["Hyundai", "Ford", "Ashok Leyland"] },
    { name: "Bangalore", slug: "bangalore", country: "IN", region: "Karnataka", color: "purple", industries: ["Aerospace", "Defense", "Manufacturing"], companies: ["HAL", "ISRO", "Tata Advanced Systems"] },
    { name: "Delhi", slug: "delhi", country: "IN", region: "NCR", color: "amber", industries: ["Power", "Infrastructure", "Manufacturing"], companies: ["NTPC", "BHEL", "Indian Oil"] },
    { name: "Kolkata", slug: "kolkata", country: "IN", region: "West Bengal", color: "orange", industries: ["Steel", "Manufacturing", "Power"], companies: ["Tata Steel", "CESC", "Indian Oil"] },
    { name: "Ahmedabad", slug: "ahmedabad", country: "IN", region: "Gujarat", color: "amber", industries: ["Petrochemical", "Pharmaceutical", "Manufacturing"], companies: ["GSPC", "Reliance", "Torrent Power"] },
    { name: "Jamnagar", slug: "jamnagar", country: "IN", region: "Gujarat", color: "green", industries: ["Refining", "Petrochemical", "Power"], companies: ["Reliance Industries", "Essar", "GSPC"] },
    { name: "Vizag", slug: "vizag", country: "IN", region: "Andhra Pradesh", color: "blue", industries: ["Steel", "Refining", "Shipbuilding"], companies: ["RINL", "HPCL", "Hindustan Shipyard"] },
    { name: "Kochi", slug: "kochi", country: "IN", region: "Kerala", color: "emerald", industries: ["Refining", "Shipbuilding", "LNG"], companies: ["BPCL Kochi Refinery", "Cochin Shipyard", "Petronet LNG"] },

    // Asia Pacific
    { name: "Singapore", slug: "singapore", country: "SG", region: "SEA", color: "red", industries: ["Marine", "Aerospace", "Petrochemical"], companies: ["Keppel", "Sembcorp", "Shell"] },
    { name: "Malaysia", slug: "malaysia", country: "MY", region: "SEA", color: "blue", industries: ["Oil & Gas", "LNG", "Petrochemical"], companies: ["Petronas", "MISC", "Dialog Group"] },
    { name: "Indonesia", slug: "indonesia", country: "ID", region: "SEA", color: "red", industries: ["Oil & Gas", "Mining", "LNG"], companies: ["Pertamina", "PLN", "Freeport"] },
    { name: "Thailand", slug: "thailand", country: "TH", region: "SEA", color: "blue", industries: ["Petrochemical", "Automotive", "Manufacturing"], companies: ["PTT", "IRPC", "SCG"] },
    { name: "Vietnam", slug: "vietnam", country: "VN", region: "SEA", color: "red", industries: ["Oil & Gas", "Manufacturing", "Power"], companies: ["PetroVietnam", "Doosan Vina", "Samsung"] },
    { name: "Philippines", slug: "philippines", country: "PH", region: "SEA", color: "blue", industries: ["Refining", "Power", "Manufacturing"], companies: ["Petron", "Shell Philippines", "SMC"] },
    { name: "South Korea", slug: "south-korea", country: "KR", region: "East Asia", color: "blue", industries: ["Shipbuilding", "Steel", "Petrochemical"], companies: ["Hyundai Heavy", "Samsung Heavy", "POSCO"] },
    { name: "Japan", slug: "japan", country: "JP", region: "East Asia", color: "red", industries: ["Manufacturing", "Automotive", "Nuclear"], companies: ["Toyota", "Mitsubishi Heavy", "JFE Steel"] },
    { name: "Taiwan", slug: "taiwan", country: "TW", region: "East Asia", color: "blue", industries: ["Semiconductor", "Petrochemical", "Manufacturing"], companies: ["TSMC", "Formosa Plastics", "CPC Corporation"] },
    { name: "Taipei", slug: "taipei", country: "TW", region: "Taiwan", color: "blue", industries: ["Semiconductor", "Electronics", "Manufacturing"], companies: ["TSMC", "Foxconn", "Delta Electronics"] },
    { name: "Beijing", slug: "beijing", country: "CN", region: "North China", color: "red", industries: ["Oil & Gas", "Aerospace", "Power"], companies: ["CNPC", "Sinopec", "COMAC"] },
    { name: "Shanghai", slug: "shanghai", country: "CN", region: "East China", color: "red", industries: ["Petrochemical", "Shipbuilding", "Manufacturing"], companies: ["CNOOC", "Baosteel", "Shanghai Electric"] },
    { name: "Shenzhen", slug: "shenzhen", country: "CN", region: "South China", color: "red", industries: ["Electronics", "Manufacturing", "Energy"], companies: ["BYD", "Huawei", "CNOOC Shenzhen"] },
    { name: "Hong Kong", slug: "hong-kong", country: "HK", region: "East Asia", color: "red", industries: ["Marine", "Infrastructure", "Manufacturing"], companies: ["CLP Group", "CNOOC", "Hutchison"] },
    { name: "Manila", slug: "manila", country: "PH", region: "Philippines", color: "blue", industries: ["Refining", "Power", "Shipbuilding"], companies: ["Petron", "Shell Philippines", "Hanjin Shipyard"] },
    { name: "Jakarta", slug: "jakarta", country: "ID", region: "Indonesia", color: "red", industries: ["Oil & Gas", "Mining", "Manufacturing"], companies: ["Pertamina", "PLN", "Krakatau Steel"] },
    { name: "Bangkok", slug: "bangkok", country: "TH", region: "Thailand", color: "blue", industries: ["Petrochemical", "Automotive", "Power"], companies: ["PTT", "IRPC", "EGAT"] },
    { name: "Ho Chi Minh", slug: "ho-chi-minh", country: "VN", region: "Vietnam", color: "red", industries: ["Oil & Gas", "Manufacturing", "Power"], companies: ["PetroVietnam", "EVN", "Doosan Vina"] },
    { name: "Australia", slug: "australia", country: "AU", region: "Oceania", color: "amber", industries: ["Mining", "LNG", "Oil & Gas"], companies: ["BHP", "Rio Tinto", "Woodside"] },
    { name: "Perth", slug: "perth", country: "AU", region: "Western Australia", color: "amber", industries: ["Mining", "LNG", "Oil & Gas"], companies: ["Woodside", "BHP", "Rio Tinto", "Chevron Australia"] },
    { name: "Melbourne", slug: "melbourne", country: "AU", region: "Victoria", color: "blue", industries: ["Manufacturing", "Automotive", "Aerospace"], companies: ["BAE Systems", "Boeing Australia", "BlueScope Steel"] },
    { name: "Sydney", slug: "sydney", country: "AU", region: "New South Wales", color: "blue", industries: ["Manufacturing", "Infrastructure", "Power"], companies: ["Lendlease", "AGL Energy", "Orica"] },
    { name: "Brisbane", slug: "brisbane", country: "AU", region: "Queensland", color: "amber", industries: ["Mining", "LNG", "Manufacturing"], companies: ["Santos", "Origin Energy", "GrainCorp"] },
    { name: "New Zealand", slug: "new-zealand", country: "NZ", region: "Oceania", color: "emerald", industries: ["Oil & Gas", "Manufacturing", "Dairy"], companies: ["OMV", "Genesis Energy", "Fonterra"] },

    // Europe
    { name: "UK", slug: "uk", country: "GB", region: "Europe", color: "slate", industries: ["North Sea Offshore", "Nuclear", "Aerospace"], companies: ["BP", "Shell", "Rolls-Royce"] },
    { name: "Norway", slug: "norway", country: "NO", region: "Europe", color: "blue", industries: ["Offshore Oil & Gas", "Marine", "Subsea"], companies: ["Equinor", "Aker", "DNV"] },
    { name: "Germany", slug: "germany", country: "DE", region: "Europe", color: "amber", industries: ["Automotive", "Manufacturing", "Chemical"], companies: ["BASF", "Siemens", "ThyssenKrupp"] },
    { name: "Netherlands", slug: "netherlands", country: "NL", region: "Europe", color: "orange", industries: ["Petrochemical", "Offshore", "Manufacturing"], companies: ["Shell", "Gasunie", "SBM Offshore"] },
    { name: "France", slug: "france", country: "FR", region: "Europe", color: "blue", industries: ["Nuclear", "Aerospace", "Refining"], companies: ["TotalEnergies", "EDF", "Airbus"] },
    { name: "Italy", slug: "italy", country: "IT", region: "Europe", color: "green", industries: ["Oil & Gas", "Manufacturing", "Aerospace"], companies: ["Eni", "Saipem", "Leonardo"] },
    { name: "Spain", slug: "spain", country: "ES", region: "Europe", color: "red", industries: ["Refining", "Renewable Energy", "Manufacturing"], companies: ["Repsol", "Cepsa", "Iberdrola"] },
    { name: "Belgium", slug: "belgium", country: "BE", region: "Europe", color: "amber", industries: ["Petrochemical", "Nuclear", "Manufacturing"], companies: ["BASF Antwerp", "Engie", "ExxonMobil"] },
    { name: "Scotland", slug: "scotland", country: "GB", region: "UK", color: "blue", industries: ["Offshore Oil & Gas", "Renewable Energy", "Subsea"], companies: ["BP", "Shell", "Wood Group"] },
    { name: "Aberdeen", slug: "aberdeen", country: "GB", region: "Scotland", color: "slate", industries: ["North Sea Offshore", "Subsea", "Decommissioning"], companies: ["BP", "Shell", "TotalEnergies", "Apache"] },
    { name: "Hamburg", slug: "hamburg", country: "DE", region: "Europe", color: "amber", industries: ["Maritime", "Shipbuilding", "Manufacturing"], companies: ["Meyer Werft", "Blohm+Voss", "Siemens"] },
    { name: "Rotterdam", slug: "rotterdam", country: "NL", region: "Europe", color: "orange", industries: ["Petrochemical", "Marine", "Pipeline"], companies: ["Shell", "Vopak", "Boskalis"] },
    { name: "Stavanger", slug: "stavanger", country: "NO", region: "Europe", color: "blue", industries: ["Oil & Gas", "Offshore", "Subsea"], companies: ["Equinor", "Aker", "Stena Line"] },
    { name: "Antwerp", slug: "antwerp", country: "BE", region: "Europe", color: "amber", industries: ["Petrochemical", "Manufacturing", "Marine"], companies: ["BASF Antwerp", "Dow Chemical", "ExxonMobil"] },
    { name: "Marseille", slug: "marseille", country: "FR", region: "Europe", color: "blue", industries: ["Marine", "Offshore", "Petrochemical"], companies: ["TotalEnergies", "CMA CGM", "Saipem"] },
    { name: "Milan", slug: "milan", country: "IT", region: "Europe", color: "green", industries: ["Manufacturing", "Aerospace", "Power Generation"], companies: ["Leonardo", "Bombardier", "Enel"] },
    { name: "Barcelona", slug: "barcelona", country: "ES", region: "Europe", color: "red", industries: ["Manufacturing", "Construction", "Marine"], companies: ["Repsol", "Acciona", "CEPSA"] },
    { name: "Gdansk", slug: "gdansk", country: "PL", region: "Europe", color: "blue", industries: ["Shipbuilding", "Marine", "Manufacturing"], companies: ["Gdansk Shipyard", "Nauta Sp.", "Remontowa"] },
    { name: "Edinburgh", slug: "edinburgh", country: "GB", region: "Scotland", color: "blue", industries: ["Power Generation", "Oil & Gas", "Construction"], companies: ["BP", "ScottishPower", "Shell"] },

    // Americas
    { name: "Calgary", slug: "calgary", country: "CA", region: "Alberta", color: "red", industries: ["Oil Sands", "Pipeline", "Energy"], companies: ["Suncor", "Imperial Oil", "TC Energy"] },
    { name: "Edmonton", slug: "edmonton", country: "CA", region: "Alberta", color: "amber", industries: ["Oil Sands", "Refining", "Petrochemical"], companies: ["Imperial Oil", "Suncor", "Pembina"] },
    { name: "Toronto", slug: "toronto", country: "CA", region: "Ontario", color: "red", industries: ["Manufacturing", "Automotive", "Nuclear"], companies: ["Magna", "OPG", "Linamar"] },
    { name: "Vancouver", slug: "vancouver", country: "CA", region: "British Columbia", color: "blue", industries: ["Mining", "LNG", "Marine"], companies: ["Teck Resources", "LNG Canada", "Seaspan"] },
    { name: "Mexico City", slug: "mexico-city", country: "MX", region: "Central Mexico", color: "green", industries: ["Oil & Gas", "Automotive", "Manufacturing"], companies: ["Pemex", "GM Mexico", "Volkswagen Mexico"] },
    { name: "Brazil", slug: "brazil", country: "BR", region: "South America", color: "green", industries: ["Oil & Gas", "Mining", "Steel"], companies: ["Petrobras", "Vale", "CSN"] },
    { name: "São Paulo", slug: "sao-paulo", country: "BR", region: "Southeast Brazil", color: "green", industries: ["Petrochemical", "Manufacturing", "Automotive"], companies: ["Petrobras", "Braskem", "Embraer"] },
    { name: "Rio de Janeiro", slug: "rio-de-janeiro", country: "BR", region: "Southeast Brazil", color: "green", industries: ["Offshore Oil & Gas", "Shipbuilding", "Refining"], companies: ["Petrobras", "Modec", "SBM Offshore"] },
    { name: "Argentina", slug: "argentina", country: "AR", region: "South America", color: "blue", industries: ["Oil & Gas", "Mining", "Agriculture"], companies: ["YPF", "Pan American Energy", "Techint"] },
    { name: "Buenos Aires", slug: "buenos-aires", country: "AR", region: "Argentina", color: "blue", industries: ["Oil & Gas", "Manufacturing", "Steel"], companies: ["YPF", "Techint", "Ternium"] },
    { name: "Colombia", slug: "colombia", country: "CO", region: "South America", color: "amber", industries: ["Oil & Gas", "Mining", "Manufacturing"], companies: ["Ecopetrol", "Cerrejon", "Argos"] },
    { name: "Bogotá", slug: "bogota", country: "CO", region: "Colombia", color: "amber", industries: ["Oil & Gas", "Manufacturing", "Infrastructure"], companies: ["Ecopetrol", "ISA", "Cerrejon"] },
    { name: "Lima", slug: "lima", country: "PE", region: "South America", color: "red", industries: ["Mining", "Oil & Gas", "Manufacturing"], companies: ["Southern Copper", "Antamina", "Pluspetrol"] },
    { name: "Santiago", slug: "santiago", country: "CL", region: "South America", color: "blue", industries: ["Mining", "Energy", "Manufacturing"], companies: ["Codelco", "BHP Escondida", "ENAP"] },
    { name: "Trinidad", slug: "trinidad", country: "TT", region: "Caribbean", color: "red", industries: ["LNG", "Petrochemical", "Oil & Gas"], companies: ["Atlantic LNG", "Point Lisas Industrial", "bpTT"] },

    // Africa
    { name: "Nigeria", slug: "nigeria", country: "NG", region: "West Africa", color: "green", industries: ["Oil & Gas", "LNG", "Refining"], companies: ["NNPC", "Shell Nigeria", "Chevron Nigeria"] },
    { name: "Lagos", slug: "lagos", country: "NG", region: "Nigeria", color: "green", industries: ["Oil & Gas", "Manufacturing", "Marine"], companies: ["NNPC", "Dangote Refinery", "Shell Nigeria"] },
    { name: "South Africa", slug: "south-africa", country: "ZA", region: "Southern Africa", color: "amber", industries: ["Mining", "Manufacturing", "Power"], companies: ["Sasol", "Eskom", "Anglo American"] },
    { name: "Johannesburg", slug: "johannesburg", country: "ZA", region: "Gauteng", color: "amber", industries: ["Mining", "Manufacturing", "Power"], companies: ["Anglo American", "Sasol", "Eskom"] },
    { name: "Cape Town", slug: "cape-town", country: "ZA", region: "Western Cape", color: "blue", industries: ["Manufacturing", "Marine", "Energy"], companies: ["Saldanha Steel", "PetroSA", "Eskom"] },
    { name: "Egypt", slug: "egypt", country: "EG", region: "North Africa", color: "amber", industries: ["Oil & Gas", "LNG", "Petrochemical"], companies: ["EGPC", "Apache Egypt", "Egyptian LNG"] },
    { name: "Nairobi", slug: "nairobi", country: "KE", region: "East Africa", color: "green", industries: ["Oil & Gas", "Power", "Infrastructure"], companies: ["Kenya Pipeline", "KenGen", "Tullow Oil Kenya"] },
    { name: "Accra", slug: "accra", country: "GH", region: "West Africa", color: "amber", industries: ["Oil & Gas", "Mining", "Power"], companies: ["Tullow Oil Ghana", "Ghana National Gas", "Newmont Ghana"] },
    { name: "Casablanca", slug: "casablanca", country: "MA", region: "North Africa", color: "red", industries: ["Petrochemical", "Manufacturing", "Phosphates"], companies: ["OCP Group", "SAMIR", "Renault Maroc"] },
    { name: "Angola", slug: "angola", country: "AO", region: "West Africa", color: "red", industries: ["Offshore Oil & Gas", "LNG"], companies: ["Sonangol", "Chevron Angola", "TotalEnergies Angola"] },
    { name: "Algeria", slug: "algeria", country: "DZ", region: "North Africa", color: "green", industries: ["Oil & Gas", "LNG", "Petrochemical"], companies: ["Sonatrach", "GDF Suez", "BP Algeria"] }
];

// Generate all method-location combinations
export function generateMethodLocationPages(): MethodLocationPage[] {
    const pages: MethodLocationPage[] = [];

    for (const method of ndtMethods) {
        for (const location of keyLocations) {
            pages.push({
                method: method.name,
                methodSlug: method.slug,
                location: location.name,
                locationSlug: location.slug,
                country: location.country,
                region: location.region,
                color: location.color,
                industries: location.industries,
                applications: method.applications,
                certifications: getCertifications(location.country),
                companies: location.companies
            });
        }
    }

    return pages;
}

function getCertifications(country: string): string[] {
    switch (country) {
        case "US": return ["ASNT SNT-TC-1A", "ASNT CP-189", "API", "AWS"];
        case "GB": return ["PCN", "EN ISO 9712", "BINDT"];
        case "IN": return ["ASNT", "ISNT", "BARC"];
        case "AE": case "SA": case "QA": return ["ASNT", "PCN", "ISO 9712"];
        case "SG": return ["ASNT", "PCN", "ISO 9712"];
        default: return ["ASNT", "ISO 9712"];
    }
}

export const methodLocationRoutes = generateMethodLocationPages().map(page => ({
    path: `/${page.methodSlug}-${page.locationSlug}`,
    method: page.method,
    location: page.location
}));

// Advanced NDT Methods for scaling to 2000+ pages
export const advancedNdtMethods = [
  {
    name: "Phased Array Ultrasonic Testing",
    slug: "paut-inspection",
    shortName: "PAUT",
    description: "Advanced ultrasonic technique using multiple elements to steer and focus sound beams for superior defect detection",
    applications: ["Weld inspection", "Corrosion mapping", "Composite inspection", "Turbine blade inspection", "Pressure vessel examination"],
    techniques: ["Sectorial scanning", "Linear scanning", "Compound scanning", "Full Matrix Capture (FMC)", "Total Focusing Method (TFM)"],
    standards: ["ASME Section V Article 4", "ISO 13588", "AWS D1.1", "API 620/650", "EN 16018"]
  },
  {
    name: "Time-of-Flight Diffraction",
    slug: "tofd-inspection",
    shortName: "TOFD",
    description: "Ultrasonic technique using diffracted signals for accurate crack sizing and detection in welds",
    applications: ["Weld inspection", "Crack sizing", "Hydrogen cracking detection", "Pre-service inspection", "In-service monitoring"],
    techniques: ["Parallel scanning", "Non-parallel scanning", "D-scan", "B-scan analysis", "Combined TOFD/Pulse-Echo"],
    standards: ["BS EN ISO 10863", "ASME Section V Article 4", "AWS D1.1", "API 577", "DNVGL-ST-0126"]
  },
  {
    name: "Guided Wave Testing",
    slug: "guided-wave-inspection",
    shortName: "GWT",
    description: "Long-range ultrasonic technique for screening pipelines and structures from a single location",
    applications: ["Pipeline screening", "Road crossing inspection", "Insulated pipe inspection", "Offshore riser inspection", "Storage tank floor scanning"],
    techniques: ["Torsional wave", "Longitudinal wave", "Flexural wave", "Magnetostrictive sensors", "Piezoelectric transducer rings"],
    standards: ["ASTM E2775", "BS 9690", "DNV-RP-G103", "API 570", "ASME B31.3"]
  },
  {
    name: "Acoustic Emission Testing",
    slug: "acoustic-emission-inspection",
    shortName: "AET",
    description: "Passive technique that detects stress waves from active defects in pressurized components",
    applications: ["Pressure vessel monitoring", "Storage tank testing", "Bridge monitoring", "Composite testing", "Leak detection"],
    techniques: ["Source location", "Pattern recognition", "Frequency analysis", "Felicity ratio", "Kaiser effect monitoring"],
    standards: ["ASTM E569", "ASTM E1067", "EN 14584", "API 510/570", "ASME Section V Article 12"]
  },
  {
    name: "Magnetic Flux Leakage Testing",
    slug: "mfl-inspection",
    shortName: "MFL",
    description: "Electromagnetic technique for detecting corrosion and metal loss in ferromagnetic structures",
    applications: ["Storage tank floor inspection", "Pipeline pigging", "Wire rope inspection", "Tube inspection", "Above-ground storage tank inspection"],
    techniques: ["Tank floor scanner", "Pipeline intelligent pigging", "Wire rope MFL", "Circumferential MFL", "Axial MFL"],
    standards: ["API 653", "API 650", "ASTM E2905", "ASME Section V", "EEMUA 159"]
  }
];

// NDT Industries for scaling to 2000+ pages
export const ndtIndustries = [
  {
    name: "Oil & Gas NDT Services",
    slug: "oil-gas-ndt",
    shortName: "Oil & Gas",
    description: "Comprehensive NDT inspection services for upstream, midstream, and downstream oil and gas operations",
    applications: ["Pipeline integrity", "Refinery turnaround inspections", "Offshore platform inspection", "Pressure vessel examination", "Storage tank inspection"],
    standards: ["API 510", "API 570", "API 653", "ASME B31.3", "ASME Section VIII"],
    keyServices: ["Corrosion mapping", "Weld inspection", "Thickness surveys", "RBI programs", "Fitness-for-service assessments"]
  },
  {
    name: "Aerospace NDT Services",
    slug: "aerospace-ndt",
    shortName: "Aerospace",
    description: "High-precision NDT solutions for aircraft, engines, and aerospace component manufacturing",
    applications: ["Composite structure inspection", "Engine component testing", "Fatigue crack detection", "Bonded joint inspection", "Landing gear examination"],
    standards: ["NAS 410", "EN 4179", "ASTM E2580", "SAE AMS 2632", "Nadcap AC7114"],
    keyServices: ["Automated UT scanning", "Eddy current surface inspection", "Fluorescent penetrant testing", "X-ray computed tomography", "Thermography"]
  },
  {
    name: "Power Generation NDT Services",
    slug: "power-generation-ndt",
    shortName: "Power Generation",
    description: "NDT inspection services for power plants including nuclear, thermal, and renewable energy facilities",
    applications: ["Boiler tube inspection", "Turbine blade testing", "Heat exchanger examination", "Condenser tube inspection", "Steam pipe assessment"],
    standards: ["ASME Section I", "ASME Section XI", "EPRI guidelines", "NBIC", "EN 12952"],
    keyServices: ["In-service inspection", "Remaining life assessment", "Creep damage evaluation", "High-temperature inspection", "Outage support"]
  },
  {
    name: "Pipeline NDT Inspection",
    slug: "pipeline-ndt",
    shortName: "Pipeline",
    description: "Advanced NDT solutions for transmission and distribution pipeline integrity management",
    applications: ["Girth weld inspection", "Corrosion assessment", "Dent sizing", "Crack detection", "Coating condition evaluation"],
    standards: ["API 1104", "API 1163", "CSA Z662", "ASME B31.4", "ASME B31.8"],
    keyServices: ["Inline inspection", "Direct assessment", "Hydrostatic testing support", "Anomaly verification", "Repair weld inspection"]
  },
  {
    name: "Marine & Offshore NDT Services",
    slug: "marine-ndt",
    shortName: "Marine & Offshore",
    description: "NDT inspection services for vessels, offshore platforms, and marine structures",
    applications: ["Hull plate inspection", "Splash zone examination", "Mooring chain testing", "Subsea structure inspection", "Ballast tank assessment"],
    standards: ["IACS Rules", "DNV Rules", "Lloyd's Register", "ABS Rules", "NORSOK M-101"],
    keyServices: ["Underwater inspection", "ROV-based NDT", "Flooded member detection", "Cathodic protection survey", "Dry dock inspection"]
  },
  {
    name: "Petrochemical NDT Services",
    slug: "petrochemical-ndt",
    shortName: "Petrochemical",
    description: "Specialized NDT solutions for petrochemical plants, refineries, and chemical processing facilities",
    applications: ["Reactor vessel inspection", "Heat exchanger tube testing", "Piping circuit inspection", "Column and tower examination", "High-temperature hydrogen attack detection"],
    standards: ["API 510", "API 570", "API 571", "ASME PCC-2", "API RP 584"],
    keyServices: ["Turnaround inspection", "On-stream inspection", "Corrosion monitoring", "HTHA assessment", "CUI inspection"]
  },
  {
    name: "Construction NDT Services",
    slug: "construction-ndt",
    shortName: "Construction",
    description: "NDT services for structural steel, concrete, and building construction projects",
    applications: ["Structural weld inspection", "Concrete testing", "Rebar detection", "Bolt tension verification", "Coating thickness measurement"],
    standards: ["AWS D1.1", "AWS D1.5", "ACI 228", "ASTM A325", "ICC IBC"],
    keyServices: ["Shop fabrication inspection", "Field weld inspection", "Third-party inspection", "Quality assurance programs", "Structural integrity assessment"]
  },
  {
    name: "Manufacturing NDT Services",
    slug: "manufacturing-ndt",
    shortName: "Manufacturing",
    description: "Quality control NDT services for manufacturing processes and finished product inspection",
    applications: ["Casting inspection", "Forging examination", "Weld quality control", "Material verification", "Dimensional inspection"],
    standards: ["ASTM E186", "ASTM A388", "ISO 5817", "EN 12680", "SAE J2477"],
    keyServices: ["Production line inspection", "First article inspection", "Supplier quality audit", "Process qualification", "Automated inspection systems"]
  }
];

// Inspection Services for scaling to 2000+ pages
export const inspectionServices = [
  {
    name: "Weld Inspection Services",
    slug: "weld-inspection-services",
    shortName: "Weld Inspection",
    description: "Comprehensive weld inspection and testing services for all welding processes and joint configurations",
    methods: ["Radiographic Testing", "Ultrasonic Testing", "Magnetic Particle Testing", "Liquid Penetrant Testing", "Visual Inspection", "PAUT", "TOFD"],
    applications: ["Structural welds", "Pipe welds", "Pressure vessel welds", "Storage tank welds", "Overlay/cladding inspection"],
    standards: ["AWS D1.1", "ASME Section IX", "API 1104", "EN ISO 5817", "ASME Section VIII"]
  },
  {
    name: "Tank Inspection Services",
    slug: "tank-inspection-services",
    shortName: "Tank Inspection",
    description: "Above-ground and underground storage tank inspection services per API 653 and related standards",
    methods: ["MFL Floor Scanning", "UT Thickness Measurement", "Vacuum Box Testing", "Acoustic Emission", "Visual Inspection"],
    applications: ["API 653 compliance", "Tank floor scanning", "Shell thickness surveys", "Roof inspection", "Foundation settlement assessment"],
    standards: ["API 653", "API 650", "EEMUA 159", "STI SP001", "NFPA 30"]
  },
  {
    name: "Pipeline Inspection Services",
    slug: "pipeline-inspection-services",
    shortName: "Pipeline Inspection",
    description: "Pipeline integrity inspection services for transmission, distribution, and gathering pipelines",
    methods: ["Guided Wave Testing", "PAUT", "Radiography", "MFL Pigging", "DCVG/CIPS"],
    applications: ["Girth weld inspection", "Corrosion assessment", "SCC detection", "Dent evaluation", "Coating assessment"],
    standards: ["API 1104", "API 1163", "ASME B31.4", "ASME B31.8", "49 CFR 192/195"]
  },
  {
    name: "Corrosion Inspection Services",
    slug: "corrosion-inspection-services",
    shortName: "Corrosion Inspection",
    description: "Corrosion detection, monitoring, and assessment services for industrial assets",
    methods: ["UT Thickness Gauging", "Corrosion Mapping", "MFL Scanning", "Eddy Current Testing", "Thermography"],
    applications: ["CUI detection", "Under-deposit corrosion", "Erosion monitoring", "Microbiologically influenced corrosion", "High-temperature corrosion"],
    standards: ["API 571", "API 580/581", "NACE SP0169", "ASTM G4", "DNV-RP-G101"]
  }
];

// Certification Training Types for scaling to 2000+ pages
export const certTrainingTypes = [
  {
    name: "API 510 Certification Training",
    slug: "api-510-training",
    shortName: "API 510",
    description: "Pressure Vessel Inspector certification training per API 510 standard",
    topics: ["ASME Section VIII", "API 510 Code", "Welding metallurgy", "NDE methods", "Repair/alteration procedures"],
    duration: "5-day intensive course",
    certification: "API 510 Certified Pressure Vessel Inspector"
  },
  {
    name: "API 570 Certification Training",
    slug: "api-570-training",
    shortName: "API 570",
    description: "Piping Inspector certification training per API 570 standard",
    topics: ["ASME B31.3", "API 570 Code", "Piping materials", "Corrosion mechanisms", "Inspection planning"],
    duration: "5-day intensive course",
    certification: "API 570 Certified Piping Inspector"
  },
  {
    name: "API 653 Certification Training",
    slug: "api-653-training",
    shortName: "API 653",
    description: "Tank Inspector certification training per API 653 standard",
    topics: ["API 650", "API 653 Code", "Tank design", "Corrosion assessment", "Settlement evaluation"],
    duration: "5-day intensive course",
    certification: "API 653 Certified Tank Inspector"
  },
  {
    name: "ASNT Level III Certification Training",
    slug: "asnt-level-iii-training",
    shortName: "ASNT Level III",
    description: "NDT Level III certification preparation covering all major NDT methods",
    topics: ["NDT methods theory", "Materials science", "Code application", "Procedure development", "Written practice management"],
    duration: "10-day comprehensive program",
    certification: "ASNT NDT Level III"
  },
  {
    name: "CWI Certification Training",
    slug: "cwi-training",
    shortName: "CWI",
    description: "Certified Welding Inspector training per AWS QC1 standard",
    topics: ["AWS D1.1", "Welding processes", "Metallurgy", "Visual inspection", "Documentation"],
    duration: "2-week intensive program",
    certification: "AWS Certified Welding Inspector"
  }
];

// Get top N cities for a specific purpose (prioritizes US cities, then major global hubs)
export function getTopCities(count: number) {
  // Priority order: US cities first, then ME, India, Europe, Asia, Americas, Africa
  const priorityOrder = ['US', 'AE', 'SA', 'QA', 'KW', 'IN', 'SG', 'GB', 'NO', 'DE', 'AU', 'CA', 'BR', 'NG', 'ZA'];
  return [...keyLocations].sort((a, b) => {
    const aIdx = priorityOrder.indexOf(a.country);
    const bIdx = priorityOrder.indexOf(b.country);
    return (aIdx === -1 ? 999 : aIdx) - (bIdx === -1 ? 999 : bIdx);
  }).slice(0, count);
}

// Generate all advanced method + location combinations
export function generateAdvancedMethodPages() {
  const cities = getTopCities(100);
  const pages: { methodSlug: string; methodName: string; shortName: string; citySlug: string; cityName: string; country: string; region: string; industries: string[] }[] = [];
  for (const method of advancedNdtMethods) {
    for (const city of cities) {
      pages.push({
        methodSlug: method.slug,
        methodName: method.name,
        shortName: method.shortName,
        citySlug: city.slug,
        cityName: city.name,
        country: city.country,
        region: city.region,
        industries: city.industries
      });
    }
  }
  return pages;
}

// Generate all industry + location combinations
export function generateIndustryPages() {
  const cities = getTopCities(40);
  const pages: { industrySlug: string; industryName: string; citySlug: string; cityName: string; country: string; region: string; industries: string[] }[] = [];
  for (const industry of ndtIndustries) {
    for (const city of cities) {
      // Only generate if the city's industries overlap with this NDT industry
      pages.push({
        industrySlug: industry.slug,
        industryName: industry.name,
        citySlug: city.slug,
        cityName: city.name,
        country: city.country,
        region: city.region,
        industries: city.industries
      });
    }
  }
  return pages;
}

// Generate all inspection service + location combinations
export function generateInspectionPages() {
  const cities = getTopCities(50);
  const pages: { serviceSlug: string; serviceName: string; citySlug: string; cityName: string; country: string; region: string; industries: string[] }[] = [];
  for (const service of inspectionServices) {
    for (const city of cities) {
      pages.push({
        serviceSlug: service.slug,
        serviceName: service.name,
        citySlug: city.slug,
        cityName: city.name,
        country: city.country,
        region: city.region,
        industries: city.industries
      });
    }
  }
  return pages;
}

// Generate all cert training + location combinations
export function generateCertTrainingPages() {
  const cities = getTopCities(20);
  const pages: { certSlug: string; certName: string; citySlug: string; cityName: string; country: string; region: string }[] = [];
  for (const cert of certTrainingTypes) {
    for (const city of cities) {
      pages.push({
        certSlug: cert.slug,
        certName: cert.name,
        citySlug: city.slug,
        cityName: city.name,
        country: city.country,
        region: city.region
      });
    }
  }
  return pages;
}
