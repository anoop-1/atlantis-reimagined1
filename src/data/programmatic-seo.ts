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
