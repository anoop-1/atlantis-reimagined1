// ERP/Software/CRM SEO Page Generator
// Generates programmatic pages for NDT ERP and software solutions across cities

export type ERPPageType = 'erp' | 'crm' | 'sales' | 'marketing' | 'quotation' | 'inventory' | 'reporting' | 'certification-tracking' | 'equipment-management' | 'calibration-tracking';

export interface ERPSoftwarePage {
    slug: string;           // e.g., "ndt-erp-houston" or "ndt-crm-houston"
    pageType: ERPPageType;
    cityName: string;
    country: string;
    title: string;
    description: string;
    h1: string;
    introText: string;
    features: string[];     // 5 features specific to this page type
    benefits: string[];     // 3 benefits
    industryContext: string; // How this software helps local industry
    keywords: string[];     // Target keywords
}

// Software type definitions with descriptions
export const softwareCategories: Record<ERPPageType, {
    name: string;
    shortDescription: string;
    fullDescription: string;
}> = {
    "erp": {
        name: "NDT ERP Solution",
        shortDescription: "Complete enterprise resource planning for NDT service companies",
        fullDescription: "Full-suite ERP system designed specifically for Non-Destructive Testing companies, integrating project management, resource allocation, equipment tracking, certification management, and financial reporting"
    },
    "crm": {
        name: "NDT CRM",
        shortDescription: "Customer relationship management for NDT inspection services",
        fullDescription: "Purpose-built CRM system for NDT service providers, managing customer accounts, project history, inspection requirements, compliance documentation, and long-term service relationships"
    },
    "sales": {
        name: "NDT Sales Management",
        shortDescription: "Sales pipeline and proposal tracking for NDT companies",
        fullDescription: "Specialized sales management platform for NDT firms, tracking opportunity pipelines, generating proposals, managing win rates, tracking inspection pricing, and coordinating complex multi-location bids"
    },
    "marketing": {
        name: "NDT Marketing Automation",
        shortDescription: "Lead generation and email marketing for NDT services",
        fullDescription: "Marketing automation platform designed for NDT companies to nurture leads, manage email campaigns, track buyer journeys, and demonstrate expertise to industrial customers"
    },
    "quotation": {
        name: "NDT Quotation Software",
        shortDescription: "Automated estimate generation and pricing management",
        fullDescription: "Intelligent quotation system for NDT services that generates accurate estimates based on inspection type, location, equipment requirements, and certification standards"
    },
    "inventory": {
        name: "NDT Inventory Tracker",
        shortDescription: "Consumables and equipment inventory management",
        fullDescription: "Comprehensive inventory system for NDT consumables (penetrants, developers, couplants), equipment tracking, equipment lifecycle management, and automated reordering"
    },
    "reporting": {
        name: "NDT Reporting Software",
        shortDescription: "Digital inspection report generation and documentation",
        fullDescription: "Cloud-based reporting platform for NDT inspections, capturing photos, measurements, findings, and generating professional inspection reports with regulatory compliance"
    },
    "certification-tracking": {
        name: "NDT Certification Tracking",
        shortDescription: "Personnel qualifications and certification expiry management",
        fullDescription: "Automated system tracking NDT technician certifications (ASNT SNT-TC-1A, ISO 9712, etc.), expiry dates, training requirements, and compliance with customer-specific qualification needs"
    },
    "equipment-management": {
        name: "NDT Equipment Management",
        shortDescription: "Calibration scheduling and maintenance for NDT instruments",
        fullDescription: "Equipment lifecycle management system for NDT instruments, tracking calibration schedules, maintenance histories, asset locations, and equipment performance metrics"
    },
    "calibration-tracking": {
        name: "NDT Calibration Tracking",
        shortDescription: "Instrument calibration records and traceability",
        fullDescription: "Comprehensive calibration management for NDT instruments, tracking calibration dates, results, standards compliance, and generating certificates of calibration for traceability"
    }
};

// Feature templates for each software type
const featuresByType: Record<ERPPageType, {
    baseFeatures: string[];
    industrySpecific: Record<string, string[]>;
}> = {
    "erp": {
        baseFeatures: [
            "Integrated project management with timeline tracking",
            "Resource planning and technician scheduling",
            "Equipment and asset lifecycle management",
            "Financial reporting and project profitability analysis",
            "Compliance and certification documentation"
        ],
        industrySpecific: {
            "Oil & Gas": ["Turnover planning for refinery shutdowns", "Offshore asset allocation", "API 510/570/653 compliance tracking"],
            "Aerospace": ["Aircraft component traceability", "Nadcap qualification management", "Complex assembly scheduling"],
            "Manufacturing": ["Production schedule integration", "Quality control workflow", "Supplier management"],
            "Marine": ["Dry dock scheduling", "Vessel inspection coordination", "IMO compliance reporting"],
            "default": ["Project costing and margin analysis", "Multi-site resource optimization", "Regulatory compliance management"]
        }
    },
    "crm": {
        baseFeatures: [
            "Customer account management with inspection history",
            "Contract and service agreement tracking",
            "Inspection requirement documentation",
            "Compliance certification requirements by customer",
            "Service history and recurring inspection scheduling"
        ],
        industrySpecific: {
            "Oil & Gas": ["Refinery customer relationship management", "Offshore operator account handling", "Supply chain vendor integration"],
            "Aerospace": ["OEM and supplier quality requirements", "Design specification documentation", "Nadcap audit readiness"],
            "Construction": ["General contractor relationship management", "Project-based customer coordination", "Payment tracking"],
            "Power Generation": ["Plant operator account management", "Outage scheduling coordination", "License and permit tracking"],
            "default": ["Historical inspection data", "Customer preference tracking", "Seasonal demand forecasting"]
        }
    },
    "sales": {
        baseFeatures: [
            "Opportunity pipeline management and forecasting",
            "Proposal generation and version control",
            "Win-loss analysis and sales metrics",
            "Quote approval workflow and pricing control",
            "Sales territory and quota management"
        ],
        industrySpecific: {
            "Oil & Gas": ["Refinery turnaround bidding", "Long-term service contract tracking", "Competitive pricing analysis"],
            "Aerospace": ["Multi-year qualification bids", "Performance-based contracting", "Cost-plus pricing models"],
            "Manufacturing": ["Volume discount management", "Production schedule alignment", "Quality improvement incentives"],
            "Defense": ["Government contracting and CAGE codes", "Security clearance requirements", "Compliance documentation"],
            "default": ["Custom service package bundling", "Multi-location project coordination", "Customer ROI demonstration"]
        }
    },
    "marketing": {
        baseFeatures: [
            "Email campaign management and automation",
            "Lead scoring and nurturing workflows",
            "Industry content management and distribution",
            "Campaign performance tracking and ROI",
            "Integration with sales pipeline"
        ],
        industrySpecific: {
            "Oil & Gas": ["Technical webinar promotion", "Industry event sponsorship tracking", "Certification and expertise marketing"],
            "Aerospace": ["Nadcap certification promotion", "Technical capabilities showcase", "Quality achievement marketing"],
            "Manufacturing": ["Cost reduction case studies", "Efficiency improvement demonstrations", "Quality improvement storytelling"],
            "Power Generation": ["Operational reliability messaging", "Downtime prevention marketing", "Extended lifecycle benefits"],
            "default": ["Compliance and certification messaging", "Industry-specific case studies", "Thought leadership content"]
        }
    },
    "quotation": {
        baseFeatures: [
            "Automated estimate calculation based on inspection type",
            "Technician hour and travel cost estimation",
            "Equipment and consumable cost inclusion",
            "Certification requirement pricing adjustments",
            "Multi-site and volume discount logic"
        ],
        industrySpecific: {
            "Oil & Gas": ["Refinery complexity pricing", "Offshore location surcharges", "Emergency response premium pricing"],
            "Aerospace": ["Nadcap requirement premium", "First-article inspection surcharges", "Documentation overhead pricing"],
            "Manufacturing": ["Volume-based pricing tiers", "Production schedule synchronization", "Continuous service discounts"],
            "Construction": ["Location-based pricing", "Structural complexity assessment", "Rush service premiums"],
            "default": ["Travel distance calculation", "Certification level adjustments", "Rush delivery pricing"]
        }
    },
    "inventory": {
        baseFeatures: [
            "Consumable tracking with expiration date management",
            "Equipment maintenance history logging",
            "Automated reorder point alerts",
            "Supplier integration and purchase order generation",
            "Usage tracking and cost allocation to projects"
        ],
        industrySpecific: {
            "Oil & Gas": ["Penetrant and developer inventory", "Coupling compound management", "Film storage and handling tracking"],
            "Aerospace": ["Consumable segregation for different processes", "Certification-specific material tracking", "Environmental control requirements"],
            "Manufacturing": ["High-volume consumable management", "Bulk purchasing optimization", "Waste reduction tracking"],
            "Marine": ["Salt-spray resistant material storage", "Dry dock supply management", "Temperature-controlled storage"],
            "default": ["Consumable shelf-life management", "Equipment calibration tracking", "Cost-per-use analytics"]
        }
    },
    "reporting": {
        baseFeatures: [
            "Digital inspection report templates by method",
            "Photo and image integration with measurements",
            "Finding categorization and severity classification",
            "PDF generation with company branding",
            "Report archival and retrieval with search"
        ],
        industrySpecific: {
            "Oil & Gas": ["API 510/570/653 compliance reporting", "Corrosion mapping visualization", "Risk assessment integration"],
            "Aerospace": ["Nadcap report formatting", "Design specification compliance statements", "Traceability documentation"],
            "Construction": ["AWS D1.1 compliance formatting", "Pass/fail determination per standards", "Corrective action tracking"],
            "Manufacturing": ["Receiving inspection reports", "Lot acceptance/rejection documentation", "Supplier quality feedback"],
            "default": ["Findings summary with recommendations", "Certification compliance statements", "Digital signature and timestamp"]
        }
    },
    "certification-tracking": {
        baseFeatures: [
            "Personnel ASNT SNT-TC-1A and ISO 9712 certification tracking",
            "Expiration date alerts and renewal reminders",
            "Training and exam requirement management",
            "Customer-specific qualification requirements",
            "Compliance reporting and audit trails"
        ],
        industrySpecific: {
            "Oil & Gas": ["API Inspector certifications (510/570/653)", "NACE corrosion specialist tracking", "Pressure equipment directive compliance"],
            "Aerospace": ["Nadcap certification requirements", "Design-specific qualification tracking", "Engineering review documentation"],
            "Defense": ["Security clearance requirement tracking", "DCID training compliance", "TS/SCI qualification management"],
            "Power Generation": ["ASME certification tracking", "EPRI qualification requirements", "Outage-specific qualifications"],
            "default": ["Multiple method certification coordination", "Geographic/market-specific certifications", "Recertification interval management"]
        }
    },
    "equipment-management": {
        baseFeatures: [
            "Equipment asset registry with serial numbers and location",
            "Calibration schedule and interval management",
            "Maintenance history and repair tracking",
            "Equipment downtime and replacement planning",
            "Performance metrics and efficiency monitoring"
        ],
        industrySpecific: {
            "Oil & Gas": ["UT probe calibration schedules", "Thickness gauge drift tracking", "High-temperature equipment management"],
            "Aerospace": ["Eddy current probe qualification tracking", "MFL pigging tool maintenance", "Portable radiography safety device checks"],
            "Manufacturing": ["Production line equipment criticality", "Preventive maintenance scheduling", "Equipment availability metrics"],
            "Marine": ["Subsea equipment corrosion monitoring", "ROV equipment serviceability checks", "Environmental exposure tracking"],
            "default": ["Warranty and service contract tracking", "Equipment age and lifecycle prediction", "Utilization rate analysis"]
        }
    },
    "calibration-tracking": {
        baseFeatures: [
            "Calibration certificate generation with standards traceability",
            "Calibration interval management and scheduling",
            "Out-of-spec detection and alert generation",
            "Calibration data trending and analysis",
            "Third-party calibration integration"
        ],
        industrySpecific: {
            "Oil & Gas": ["API RP 1104 calibration compliance", "Thickness gauge block verification", "Temperature probe qualification tracking"],
            "Aerospace": ["Nadcap calibration requirements", "Eddy current standard block tracking", "Radiography film density standards"],
            "Manufacturing": ["Receiving inspection calibration requirements", "Process control monitoring calibration", "Statistical process control"],
            "Power Generation": ["Temperature sensor calibration", "Pressure transducer verification", "Vibration monitoring calibration"],
            "default": ["Traceable standards documentation", "Calibration uncertainty reporting", "Digital certificate management"]
        }
    }
};

// Location data from programmatic-seo.ts
export const keyLocations = [
    // USA - Major Industrial Hubs
    { name: "New York", slug: "new-york", country: "US", region: "New York", industries: ["Aerospace", "Manufacturing", "Construction"] },
    { name: "Boston", slug: "boston", country: "US", region: "Massachusetts", industries: ["Aerospace", "Defense", "Manufacturing"] },
    { name: "Atlanta", slug: "atlanta", country: "US", region: "Georgia", industries: ["Aerospace", "Manufacturing", "Construction"] },
    { name: "Miami", slug: "miami", country: "US", region: "Florida", industries: ["Marine", "Construction", "Power Generation"] },
    { name: "Washington DC", slug: "washington-dc", country: "US", region: "District of Columbia", industries: ["Defense", "Construction", "Power Generation"] },
    { name: "Nashville", slug: "nashville", country: "US", region: "Tennessee", industries: ["Manufacturing", "Construction", "Automotive"] },
    { name: "Minneapolis", slug: "minneapolis", country: "US", region: "Minnesota", industries: ["Manufacturing", "Mining", "Power Generation"] },
    { name: "Cleveland", slug: "cleveland", country: "US", region: "Ohio", industries: ["Manufacturing", "Steel", "Petrochemical"] },
    { name: "Baltimore", slug: "baltimore", country: "US", region: "Maryland", industries: ["Marine", "Manufacturing", "Steel"] },
    { name: "Tampa", slug: "tampa", country: "US", region: "Florida", industries: ["Power Generation", "Marine", "Petrochemical"] },
    { name: "Charlotte", slug: "charlotte", country: "US", region: "North Carolina", industries: ["Power Generation", "Nuclear", "Manufacturing"] },
    { name: "Indianapolis", slug: "indianapolis", country: "US", region: "Indiana", industries: ["Manufacturing", "Automotive", "Aerospace"] },
    { name: "San Diego", slug: "san-diego", country: "US", region: "California", industries: ["Aerospace", "Defense", "Marine"] },
    { name: "Portland", slug: "portland", country: "US", region: "Oregon", industries: ["Manufacturing", "Power Generation", "Construction"] },
    { name: "Salt Lake City", slug: "salt-lake-city", country: "US", region: "Utah", industries: ["Mining", "Manufacturing", "Aerospace"] },
    { name: "Kansas City", slug: "kansas-city", country: "US", region: "Kansas", industries: ["Manufacturing", "Petrochemical", "Pipeline"] },
    { name: "St. Louis", slug: "st-louis", country: "US", region: "Missouri", industries: ["Manufacturing", "Aerospace", "Construction"] },
    { name: "Milwaukee", slug: "milwaukee", country: "US", region: "Wisconsin", industries: ["Manufacturing", "Steel", "Power Generation"] },
    { name: "Cincinnati", slug: "cincinnati", country: "US", region: "Ohio", industries: ["Manufacturing", "Aerospace", "Automotive"] },
    { name: "Jacksonville", slug: "jacksonville", country: "US", region: "Florida", industries: ["Marine", "Power Generation", "Pipeline"] },
    { name: "Houston", slug: "houston", country: "US", region: "Texas", industries: ["Oil & Gas", "Petrochemical", "Refining"] },
    { name: "Los Angeles", slug: "los-angeles", country: "US", region: "California", industries: ["Aerospace", "Defense", "Manufacturing"] },
    { name: "New Orleans", slug: "new-orleans", country: "US", region: "Louisiana", industries: ["Offshore", "Marine", "Petrochemical"] },
    { name: "Denver", slug: "denver", country: "US", region: "Colorado", industries: ["Aerospace", "Mining", "Energy"] },
    { name: "Chicago", slug: "chicago", country: "US", region: "Illinois", industries: ["Manufacturing", "Steel", "Rail"] },
    { name: "Seattle", slug: "seattle", country: "US", region: "Washington", industries: ["Aerospace", "Defense", "Technology"] },
    { name: "Dallas", slug: "dallas", country: "US", region: "Texas", industries: ["Aerospace", "Defense", "Manufacturing"] },
    { name: "Phoenix", slug: "phoenix", country: "US", region: "Arizona", industries: ["Aerospace", "Semiconductor", "Manufacturing"] },
    { name: "Philadelphia", slug: "philadelphia", country: "US", region: "Pennsylvania", industries: ["Refining", "Pharmaceutical", "Manufacturing"] },
    { name: "San Francisco", slug: "san-francisco", country: "US", region: "California", industries: ["Technology", "Biotech", "Manufacturing"] },
    { name: "Detroit", slug: "detroit", country: "US", region: "Michigan", industries: ["Automotive", "Manufacturing", "Steel"] },
    { name: "Pittsburgh", slug: "pittsburgh", country: "US", region: "Pennsylvania", industries: ["Steel", "Manufacturing", "Energy"] },
    { name: "Baton Rouge", slug: "baton-rouge", country: "US", region: "Louisiana", industries: ["Petrochemical", "Refining", "Chemical"] },
    { name: "Corpus Christi", slug: "corpus-christi", country: "US", region: "Texas", industries: ["Refining", "Petrochemical", "LNG"] },
    { name: "Tulsa", slug: "tulsa", country: "US", region: "Oklahoma", industries: ["Oil & Gas", "Aerospace", "Manufacturing"] },
    { name: "Beaumont", slug: "beaumont", country: "US", region: "Texas", industries: ["Refining", "Petrochemical", "Chemical"] },

    // Middle East
    { name: "Dubai", slug: "dubai", country: "AE", region: "UAE", industries: ["Oil & Gas", "Construction", "Aviation"] },
    { name: "Saudi Arabia", slug: "saudi-arabia", country: "SA", region: "GCC", industries: ["Oil & Gas", "Petrochemical"] },
    { name: "Qatar", slug: "qatar", country: "QA", region: "GCC", industries: ["LNG", "Oil & Gas"] },
    { name: "Kuwait", slug: "kuwait", country: "KW", region: "GCC", industries: ["Oil & Gas", "Petrochemical"] },
    { name: "Abu Dhabi", slug: "abu-dhabi", country: "AE", region: "UAE", industries: ["Oil & Gas", "Nuclear", "Aerospace"] },
    { name: "Bahrain", slug: "bahrain", country: "BH", region: "GCC", industries: ["Oil & Gas", "Aluminum", "Financial Services"] },
    { name: "Oman", slug: "oman", country: "OM", region: "GCC", industries: ["Oil & Gas", "LNG", "Petrochemical"] },
    { name: "Jubail", slug: "jubail", country: "SA", region: "Eastern Province", industries: ["Petrochemical", "Steel", "Desalination"] },
    { name: "Yanbu", slug: "yanbu", country: "SA", region: "Western Province", industries: ["Refining", "Petrochemical", "LPG"] },
    { name: "Dammam", slug: "dammam", country: "SA", region: "Eastern Province", industries: ["Oil & Gas", "Manufacturing", "Marine"] },

    // India
    { name: "Mumbai", slug: "mumbai", country: "IN", region: "Maharashtra", industries: ["Oil & Gas", "Manufacturing", "Power"] },
    { name: "Chennai", slug: "chennai", country: "IN", region: "Tamil Nadu", industries: ["Automotive", "Manufacturing", "Marine"] },
    { name: "Bangalore", slug: "bangalore", country: "IN", region: "Karnataka", industries: ["Aerospace", "Defense", "Manufacturing"] },
    { name: "Delhi", slug: "delhi", country: "IN", region: "NCR", industries: ["Power", "Infrastructure", "Manufacturing"] },
    { name: "Kolkata", slug: "kolkata", country: "IN", region: "West Bengal", industries: ["Steel", "Manufacturing", "Power"] },
    { name: "Ahmedabad", slug: "ahmedabad", country: "IN", region: "Gujarat", industries: ["Petrochemical", "Pharmaceutical", "Manufacturing"] },
    { name: "Jamnagar", slug: "jamnagar", country: "IN", region: "Gujarat", industries: ["Refining", "Petrochemical", "Power"] },
    { name: "Vizag", slug: "vizag", country: "IN", region: "Andhra Pradesh", industries: ["Steel", "Refining", "Shipbuilding"] },
    { name: "Kochi", slug: "kochi", country: "IN", region: "Kerala", industries: ["Refining", "Shipbuilding", "LNG"] },

    // Asia Pacific
    { name: "Singapore", slug: "singapore", country: "SG", region: "SEA", industries: ["Marine", "Aerospace", "Petrochemical"] },
    { name: "Malaysia", slug: "malaysia", country: "MY", region: "SEA", industries: ["Oil & Gas", "LNG", "Petrochemical"] },
    { name: "Indonesia", slug: "indonesia", country: "ID", region: "SEA", industries: ["Oil & Gas", "Mining", "LNG"] },
    { name: "Thailand", slug: "thailand", country: "TH", region: "SEA", industries: ["Petrochemical", "Automotive", "Manufacturing"] },
    { name: "Vietnam", slug: "vietnam", country: "VN", region: "SEA", industries: ["Oil & Gas", "Manufacturing", "Power"] },
    { name: "Philippines", slug: "philippines", country: "PH", region: "SEA", industries: ["Refining", "Power", "Manufacturing"] },
    { name: "South Korea", slug: "south-korea", country: "KR", region: "East Asia", industries: ["Shipbuilding", "Steel", "Petrochemical"] },
    { name: "Japan", slug: "japan", country: "JP", region: "East Asia", industries: ["Manufacturing", "Automotive", "Nuclear"] },
    { name: "Taiwan", slug: "taiwan", country: "TW", region: "East Asia", industries: ["Semiconductor", "Petrochemical", "Manufacturing"] },
    { name: "Beijing", slug: "beijing", country: "CN", region: "North China", industries: ["Oil & Gas", "Aerospace", "Power"] },
    { name: "Shanghai", slug: "shanghai", country: "CN", region: "East China", industries: ["Petrochemical", "Shipbuilding", "Manufacturing"] },
    { name: "Shenzhen", slug: "shenzhen", country: "CN", region: "South China", industries: ["Electronics", "Manufacturing", "Energy"] },
    { name: "Hong Kong", slug: "hong-kong", country: "HK", region: "East Asia", industries: ["Marine", "Infrastructure", "Manufacturing"] },
    { name: "Manila", slug: "manila", country: "PH", region: "Philippines", industries: ["Refining", "Power", "Shipbuilding"] },
    { name: "Jakarta", slug: "jakarta", country: "ID", region: "Indonesia", industries: ["Oil & Gas", "Mining", "Manufacturing"] },
    { name: "Bangkok", slug: "bangkok", country: "TH", region: "Thailand", industries: ["Petrochemical", "Automotive", "Power"] },
    { name: "Ho Chi Minh", slug: "ho-chi-minh", country: "VN", region: "Vietnam", industries: ["Oil & Gas", "Manufacturing", "Power"] },
    { name: "Perth", slug: "perth", country: "AU", region: "Western Australia", industries: ["Mining", "LNG", "Oil & Gas"] },
    { name: "Melbourne", slug: "melbourne", country: "AU", region: "Victoria", industries: ["Manufacturing", "Automotive", "Aerospace"] },
    { name: "Sydney", slug: "sydney", country: "AU", region: "New South Wales", industries: ["Manufacturing", "Infrastructure", "Power"] },
    { name: "Brisbane", slug: "brisbane", country: "AU", region: "Queensland", industries: ["Mining", "LNG", "Manufacturing"] },

    // Europe
    { name: "UK", slug: "uk", country: "GB", region: "Europe", industries: ["North Sea Offshore", "Nuclear", "Aerospace"] },
    { name: "Norway", slug: "norway", country: "NO", region: "Europe", industries: ["Offshore Oil & Gas", "Marine", "Subsea"] },
    { name: "Germany", slug: "germany", country: "DE", region: "Europe", industries: ["Automotive", "Manufacturing", "Chemical"] },
    { name: "Netherlands", slug: "netherlands", country: "NL", region: "Europe", industries: ["Petrochemical", "Offshore", "Manufacturing"] },
    { name: "France", slug: "france", country: "FR", region: "Europe", industries: ["Nuclear", "Aerospace", "Refining"] },
    { name: "Italy", slug: "italy", country: "IT", region: "Europe", industries: ["Oil & Gas", "Manufacturing", "Aerospace"] },
    { name: "Spain", slug: "spain", country: "ES", region: "Europe", industries: ["Refining", "Renewable Energy", "Manufacturing"] },
    { name: "Belgium", slug: "belgium", country: "BE", region: "Europe", industries: ["Petrochemical", "Nuclear", "Manufacturing"] },
    { name: "Scotland", slug: "scotland", country: "GB", region: "UK", industries: ["Offshore Oil & Gas", "Renewable Energy", "Subsea"] },
    { name: "Aberdeen", slug: "aberdeen", country: "GB", region: "Scotland", industries: ["North Sea Offshore", "Subsea", "Decommissioning"] },
    { name: "London", slug: "london", country: "GB", region: "England", industries: ["Aerospace", "Construction", "Nuclear", "Rail"] },
    { name: "Hamburg", slug: "hamburg", country: "DE", region: "Europe", industries: ["Maritime", "Shipbuilding", "Manufacturing"] },
    { name: "Rotterdam", slug: "rotterdam", country: "NL", region: "Europe", industries: ["Petrochemical", "Marine", "Pipeline"] },
    { name: "Stavanger", slug: "stavanger", country: "NO", region: "Europe", industries: ["Oil & Gas", "Offshore", "Subsea"] },
    { name: "Antwerp", slug: "antwerp", country: "BE", region: "Europe", industries: ["Petrochemical", "Manufacturing", "Marine"] },
    { name: "Marseille", slug: "marseille", country: "FR", region: "Europe", industries: ["Marine", "Offshore", "Petrochemical"] },
    { name: "Milan", slug: "milan", country: "IT", region: "Europe", industries: ["Manufacturing", "Aerospace", "Power Generation"] },
    { name: "Barcelona", slug: "barcelona", country: "ES", region: "Europe", industries: ["Manufacturing", "Construction", "Marine"] },

    // Americas
    { name: "Calgary", slug: "calgary", country: "CA", region: "Alberta", industries: ["Oil Sands", "Pipeline", "Energy"] },
    { name: "Edmonton", slug: "edmonton", country: "CA", region: "Alberta", industries: ["Oil Sands", "Refining", "Petrochemical"] },
    { name: "Toronto", slug: "toronto", country: "CA", region: "Ontario", industries: ["Manufacturing", "Automotive", "Nuclear"] },
    { name: "Vancouver", slug: "vancouver", country: "CA", region: "British Columbia", industries: ["Mining", "LNG", "Marine"] },
    { name: "Mexico City", slug: "mexico-city", country: "MX", region: "Central Mexico", industries: ["Oil & Gas", "Automotive", "Manufacturing"] },
    { name: "Brazil", slug: "brazil", country: "BR", region: "South America", industries: ["Oil & Gas", "Mining", "Steel"] },
    { name: "São Paulo", slug: "sao-paulo", country: "BR", region: "Southeast Brazil", industries: ["Petrochemical", "Manufacturing", "Automotive"] },
    { name: "Rio de Janeiro", slug: "rio-de-janeiro", country: "BR", region: "Southeast Brazil", industries: ["Offshore Oil & Gas", "Shipbuilding", "Refining"] },
    { name: "Argentina", slug: "argentina", country: "AR", region: "South America", industries: ["Oil & Gas", "Mining", "Agriculture"] },
    { name: "Buenos Aires", slug: "buenos-aires", country: "AR", region: "Argentina", industries: ["Oil & Gas", "Manufacturing", "Steel"] },
    { name: "Colombia", slug: "colombia", country: "CO", region: "South America", industries: ["Oil & Gas", "Mining", "Manufacturing"] },
    { name: "Lima", slug: "lima", country: "PE", region: "South America", industries: ["Mining", "Oil & Gas", "Manufacturing"] },
    { name: "Santiago", slug: "santiago", country: "CL", region: "South America", industries: ["Mining", "Energy", "Manufacturing"] },
    { name: "Trinidad", slug: "trinidad", country: "TT", region: "Caribbean", industries: ["LNG", "Petrochemical", "Oil & Gas"] },

    // Africa
    { name: "Nigeria", slug: "nigeria", country: "NG", region: "West Africa", industries: ["Oil & Gas", "LNG", "Refining"] },
    { name: "Lagos", slug: "lagos", country: "NG", region: "Nigeria", industries: ["Oil & Gas", "Manufacturing", "Marine"] },
    { name: "South Africa", slug: "south-africa", country: "ZA", region: "Southern Africa", industries: ["Mining", "Manufacturing", "Power"] },
    { name: "Johannesburg", slug: "johannesburg", country: "ZA", region: "Gauteng", industries: ["Mining", "Manufacturing", "Power"] },
    { name: "Cape Town", slug: "cape-town", country: "ZA", region: "Western Cape", industries: ["Manufacturing", "Marine", "Energy"] },
    { name: "Egypt", slug: "egypt", country: "EG", region: "North Africa", industries: ["Oil & Gas", "LNG", "Petrochemical"] },
    { name: "Angola", slug: "angola", country: "AO", region: "West Africa", industries: ["Offshore Oil & Gas", "LNG"] }
];

// Generate pages for a single software type across all locations
export function generatePagesForSoftwareType(pageType: ERPPageType): ERPSoftwarePage[] {
    const pages: ERPSoftwarePage[] = [];
    const softwareInfo = softwareCategories[pageType];
    const features = featuresByType[pageType];

    for (const location of keyLocations) {
        const slug = `ndt-${pageType}-${location.slug}`;

        // Select relevant features based on location industries
        let relevantFeatures = [...features.baseFeatures];
        let industryContext = `NDT ${softwareInfo.name} solution for ${location.name} provides comprehensive functionality for ${location.industries.slice(0, 2).join(" and ")} operations.`;

        for (const industry of location.industries) {
            if (features.industrySpecific[industry]) {
                const industryFeatures = features.industrySpecific[industry];
                relevantFeatures = [...new Set([...relevantFeatures, ...industryFeatures])].slice(0, 5);
                industryContext = `In ${location.name}'s ${industry.toLowerCase()} sector, NDT ${softwareInfo.name} delivers specialized capabilities including ${industryFeatures.slice(0, 2).join(" and ")}, enabling precise compliance with industry-specific requirements and customer expectations.`;
                break;
            }
        }

        const benefits = [
            `Streamline NDT ${pageType === 'certification-tracking' ? 'personnel' : 'operations'} management across ${location.name}`,
            `Improve compliance with local regulations and industry standards in ${location.region}`,
            `Increase efficiency and reduce operational costs for ${location.industries[0]?.toLowerCase() || 'industrial'} operations`
        ];

        const keywords = [
            `NDT ${softwareInfo.name.toLowerCase()} ${location.name.toLowerCase()}`,
            `${pageType.replace(/-/g, ' ')} software for ${location.industries[0]?.toLowerCase()}`,
            `Non-destructive testing ${pageType.replace(/-/g, ' ')} ${location.name.toLowerCase()}`,
            `NDT ${pageType.replace(/-/g, ' ')} solution ${location.region.toLowerCase()}`,
            `inspection ${pageType.replace(/-/g, ' ')} management system`
        ];

        const title = `NDT ${softwareInfo.name} for ${location.name} | Industry-Specific Software`;
        const description = `${softwareInfo.name} solution for ${location.name}. Streamline ${pageType.replace(/-/g, ' ')} management for ${location.industries.slice(0, 2).join(" and ")} industries with our purpose-built NDT software.`;
        const h1 = `NDT ${softwareInfo.name} for ${location.name}`;
        const introText = `${location.name}'s ${location.industries.join(", ")} operations demand specialized software solutions that integrate seamlessly with NDT workflows. ${softwareInfo.name} provides purpose-built functionality for managing complex inspection operations, ensuring compliance, and maximizing efficiency. From ${location.name} to the broader ${location.region} region, our platform helps NDT service providers and industrial operators coordinate their inspection operations with precision.`;

        pages.push({
            slug,
            pageType,
            cityName: location.name,
            country: location.country,
            title,
            description,
            h1,
            introText,
            features: relevantFeatures.slice(0, 5),
            benefits,
            industryContext,
            keywords
        });
    }

    return pages;
}

// Generate all ERP software pages across all types and locations
export function generateERPPages(): ERPSoftwarePage[] {
    const allPages: ERPSoftwarePage[] = [];
    const pageTypes: ERPPageType[] = [
        'erp',
        'crm',
        'sales',
        'marketing',
        'quotation',
        'inventory',
        'reporting',
        'certification-tracking',
        'equipment-management',
        'calibration-tracking'
    ];

    for (const pageType of pageTypes) {
        allPages.push(...generatePagesForSoftwareType(pageType));
    }

    return allPages;
}

// Generate summary statistics for total pages
export function getERPPagesSummary() {
    const allPages = generateERPPages();
    const pageTypeCounts = new Map<ERPPageType, number>();

    for (const page of allPages) {
        pageTypeCounts.set(page.pageType, (pageTypeCounts.get(page.pageType) || 0) + 1);
    }

    return {
        totalPages: allPages.length,
        totalLocations: keyLocations.length,
        softwareCategories: Object.keys(softwareCategories).length,
        pagesByType: Object.fromEntries(pageTypeCounts)
    };
}

// Generate routes for all ERP pages
export const erpRoutes = generateERPPages().map(page => ({
    path: `/ndt-${page.pageType}-${page.slug.split('-').slice(2).join('-')}`,
    softwareType: page.pageType,
    city: page.cityName,
    region: page.description
}));
