// Digital Twin Services SEO Page Generator
// Generates programmatic pages for Digital Twin services across cities

export interface DigitalTwinPage {
    slug: string;           // e.g., "digital-twin-houston"
    cityName: string;
    country: string;
    region: string;
    industries: string[];
    useCases: string[];     // 5 specific digital twin use cases for this city
    title: string;          // Unique SEO title
    description: string;    // Unique meta description
    h1: string;            // Unique H1
    introText: string;     // 3-4 sentence unique intro paragraph
    industryContext: string; // 2-3 sentences about why DT matters HERE specifically
    roiData: { metric: string; value: string; }[]; // 3 ROI data points
}

// Hardcoded unique city profiles with specialized content
export const digitalTwinCityProfiles: Record<string, Partial<DigitalTwinPage>> = {
    "houston": {
        useCases: [
            "Real-time refinery unit visualization for optimized turnaround planning",
            "Predictive maintenance for offshore platform equipment with weather integration",
            "3D asset mapping of petrochemical complexes spanning multiple production units",
            "Pipeline corridor modeling with integrated SCADA data for leak prediction",
            "Cracking unit efficiency optimization through digital process simulation"
        ],
        industryContext: "Houston's energy sector relies on complex refinery operations where unplanned downtime is extremely costly. Digital twins enable precision maintenance scheduling during turnarounds and real-time optimization of cracking units, directly impacting the bottom line of ExxonMobil, Chevron, Shell, and BP operations.",
        roiData: [
            { metric: "Refinery Turnaround Cost Savings", value: "15-20% reduction in planned maintenance downtime" },
            { metric: "Unplanned Downtime Prevention", value: "Up to 30% fewer emergency shutdowns through predictive analytics" },
            { metric: "Production Optimization", value: "2-5% yield improvement through digital process modeling" }
        ]
    },

    "dubai": {
        useCases: [
            "Construction phase digital twin for mega-projects and tall structures",
            "Smart city infrastructure monitoring across Dubai's integrated developments",
            "Port and logistics facility optimization for DP World operations",
            "HVAC and building systems efficiency in extreme climate conditions",
            "Tourism venue capacity and safety management during peak seasons"
        ],
        industryContext: "Dubai's rapid urbanization and construction boom demand sophisticated asset tracking. Digital twins manage the complexities of building operations in extreme heat, optimize energy consumption in the region's climate, and enable safety monitoring across massive transport and tourism infrastructure.",
        roiData: [
            { metric: "Energy Consumption Reduction", value: "25-35% savings in HVAC costs through predictive optimization" },
            { metric: "Construction Timeline Accuracy", value: "10-15% improvement in project schedule adherence" },
            { metric: "Logistics Throughput", value: "20% increase in port processing efficiency via digital modeling" }
        ]
    },

    "singapore": {
        useCases: [
            "Petrochemical complex integrated production optimization across Jurong Island",
            "Air traffic management and maintenance scheduling for Changi Airport operations",
            "Marine vessel monitoring and predictive maintenance for Keppel shipyard",
            "Semiconductor fab environmental control and yield optimization",
            "Energy grid balancing with integrated renewable and conventional sources"
        ],
        industryContext: "Singapore's compact geography and high-density operations require ultra-efficient asset management. Digital twins optimize petrochemical production flows, manage Keppel's maritime vessel lifecycles, and ensure precision environmental control in semiconductor fabrication—where nano-scale variations matter enormously.",
        roiData: [
            { metric: "Fab Yield Improvement", value: "3-7% increase through environmental micro-management" },
            { metric: "Vessel Maintenance Efficiency", value: "40% reduction in unplanned maintenance events" },
            { metric: "Production Chain Integration", value: "18% faster response time to supply chain disruptions" }
        ]
    },

    "aberdeen": {
        useCases: [
            "North Sea offshore platform decommissioning planning and execution",
            "Subsea equipment condition monitoring in harsh marine environments",
            "Field rejuvenation strategy modeling for aging North Sea assets",
            "Wellhead pressure and flow prediction for extended field life",
            "Recycling and materials recovery planning for platform components"
        ],
        industryContext: "Aberdeen's mature North Sea operations face the challenge of extracting maximum value from aging fields while managing decommissioning complexity. Digital twins model subsea equipment stress patterns, predict component remaining useful life, and optimize the transition to field abandonment—critical for BP, Shell, and TotalEnergies operations.",
        roiData: [
            { metric: "Field Life Extension", value: "2-4 additional years of production through optimal management" },
            { metric: "Decommissioning Cost Savings", value: "10-15% reduction through precise planning" },
            { metric: "Subsea Incident Prevention", value: "60% reduction in emergency interventions via predictive maintenance" }
        ]
    },

    "calgary": {
        useCases: [
            "Oil sands operation visualization for Suncor and Imperial Oil facilities",
            "Pipeline integrity monitoring across Alberta's transportation networks",
            "Tailings pond management with real-time environmental monitoring",
            "Steam injection optimization in heavy oil recovery",
            "Equipment condition monitoring in extreme cold weather conditions"
        ],
        industryContext: "Calgary's oil sands operations demand massive infrastructure coordination across extraction, processing, and transportation. Digital twins model complex steam distribution systems, predict equipment failure in sub-zero conditions, and optimize the energy-intensive separation processes critical to Suncor, Imperial Oil, and TC Energy.",
        roiData: [
            { metric: "Steam System Efficiency", value: "8-12% reduction in energy consumption through optimization" },
            { metric: "Equipment Reliability", value: "25% improvement in mean time between failures" },
            { metric: "Environmental Compliance", value: "Real-time tailings monitoring prevents regulatory exceedances" }
        ]
    },

    "mumbai": {
        useCases: [
            "Refinery operations monitoring for BPCL, HPCL, and Reliance facilities",
            "Port cargo handling efficiency optimization across Mumbai's docks",
            "Manufacturing facility layout optimization for automotive production",
            "Power generation plant efficiency in tropical conditions",
            "Supply chain visibility from refinery to distribution terminals"
        ],
        industryContext: "Mumbai's petrochemical and manufacturing sector serves a population of over 20 million, requiring precision in refinery operations and logistics. Digital twins optimize refinery production flows, manage port congestion through predictive analytics, and coordinate multi-facility manufacturing networks for companies like Reliance, BPCL, and HPCL.",
        roiData: [
            { metric: "Refinery Throughput", value: "5-8% increase in daily processing capacity" },
            { metric: "Port Logistics Optimization", value: "30% faster cargo turnaround time" },
            { metric: "Supply Chain Response", value: "40% reduction in stockout incidents through demand forecasting" }
        ]
    },

    "rotterdam": {
        useCases: [
            "Petrochemical complex integration across Shell, BASF, and Dow operations",
            "Port automation and vessel traffic optimization for Europe's largest port",
            "Tank farm monitoring and product allocation across hundreds of tanks",
            "Pipeline network management across Dutch petrochemical corridors",
            "Barge and vessel scheduling for efficient product distribution"
        ],
        industryContext: "Rotterdam's integrated petrochemical complex processes millions of tons annually, making digital coordination essential. Digital twins model the interdependencies across Shell's facilities, BASF's production units, and Dow's operations, while optimizing port logistics that handle 14 million containers yearly.",
        roiData: [
            { metric: "Port Vessel Coordination", value: "20% reduction in waiting times through predictive scheduling" },
            { metric: "Complex Integration Efficiency", value: "12% improvement in cross-facility product flow" },
            { metric: "Tank Optimization", value: "15% increase in storage utilization through smart allocation" }
        ]
    },

    "stavanger": {
        useCases: [
            "Offshore platform operation across Equinor and operator-partner fields",
            "Subsea pipeline integrity monitoring in Norwegian waters",
            "Helicopter operations and personnel logistics optimization",
            "Reservoir simulation and production optimization modeling",
            "Emergency response planning and contingency scenario testing"
        ],
        industryContext: "Stavanger's offshore operations occur in harsh North Sea conditions where safety and reliability are paramount. Digital twins model reservoir behavior, predict subsea equipment fatigue, optimize helicopter and personnel logistics, and enable Equinor and its partners to manage billion-dollar offshore assets with precision.",
        roiData: [
            { metric: "Production Optimization", value: "3-6% improvement in reservoir recovery through advanced modeling" },
            { metric: "Logistics Cost Reduction", value: "22% savings in helicopter and personnel operations" },
            { metric: "Safety Assurance", value: "Continuous monitoring prevents 80% of potential emergency scenarios" }
        ]
    },

    "new-york": {
        useCases: [
            "Financial district building systems optimization for multiple skyscrapers",
            "Airport operations coordination for LaGuardia and JFK logistics",
            "Water utility infrastructure monitoring for the city system",
            "Pharmaceutical manufacturing facility quality assurance",
            "Construction project management for major urban developments"
        ],
        industryContext: "New York's complex urban infrastructure demands integrated digital management. From pharmaceutical manufacturing to airport logistics and skyscraper operations, digital twins coordinate thousands of interdependent systems, ensuring efficiency in the world's most expensive real estate market.",
        roiData: [
            { metric: "Building System Efficiency", value: "20-25% reduction in operating costs" },
            { metric: "Airport Throughput", value: "15% improvement in on-time performance metrics" },
            { metric: "Pharma Production Quality", value: "99.8% batch consistency through digital control" }
        ]
    },

    "los-angeles": {
        useCases: [
            "Aerospace manufacturing floor optimization for Boeing and Northrop Grumman",
            "Port operations coordination for America's busiest container terminal",
            "Entertainment venue production and logistics management",
            "Automotive manufacturing facility optimization",
            "Refinery and petrochemical operation in nearby Long Beach"
        ],
        industryContext: "Los Angeles's aerospace, port, and manufacturing sectors form the engine of Southern California's economy. Digital twins coordinate Boeing's massive assembly operations, optimize port logistics handling 10+ million containers yearly, and manage the precision required in aerospace manufacturing.",
        roiData: [
            { metric: "Manufacturing Throughput", value: "18% increase in aircraft components completed" },
            { metric: "Port Processing Speed", value: "25% reduction in container dwell time" },
            { metric: "Equipment Utilization", value: "35% improvement through predictive scheduling" }
        ]
    },

    "tokyo": {
        useCases: [
            "Automotive manufacturing precision control for Toyota and Nissan",
            "Train station and metro system capacity management",
            "High-precision semiconductor manufacturing environmental control",
            "Building earthquake resilience monitoring and response",
            "Retail supply chain optimization across massive distribution networks"
        ],
        industryContext: "Tokyo's hypermodern manufacturing infrastructure demands millimeter-precision engineering. Digital twins control automotive production flows, manage seismic resilience in earthquake-prone conditions, and optimize the logistics networks serving 37 million people across the metropolitan area.",
        roiData: [
            { metric: "Manufacturing Defect Rate", value: "35% reduction through real-time process control" },
            { metric: "Supply Chain Efficiency", value: "28% improvement in inventory turns" },
            { metric: "System Resilience", value: "99.95% uptime for critical infrastructure" }
        ]
    }
};

// Template for generating content for other cities
interface DigitalTwinTemplate {
    generateUseCases(cityName: string, industries: string[]): string[];
    generateIndustryContext(cityName: string, industries: string[], region: string): string;
    generateROI(industries: string[]): { metric: string; value: string; }[];
}

const digitalTwinTemplate: DigitalTwinTemplate = {
    generateUseCases(cityName: string, industries: string[]): string[] {
        const useCasesMap: Record<string, string[]> = {
            "Oil & Gas": [
                `Predictive maintenance scheduling for ${cityName} region oil and gas facilities`,
                `Production equipment lifecycle modeling and optimization`,
                `Environmental compliance monitoring and real-time reporting`,
                `Supply chain coordination from extraction to distribution`,
                `Emergency response scenario modeling and contingency planning`
            ],
            "Petrochemical": [
                `Integrated production line visualization across multiple units`,
                `Process control optimization for chemical reactions`,
                `Feedstock allocation and product flow management`,
                `Heat recovery system efficiency optimization`,
                `Waste stream reduction through digital process modeling`
            ],
            "Aerospace": [
                `Aircraft assembly line coordination and quality control`,
                `Component traceability throughout manufacturing`,
                `Equipment precision maintenance and calibration`,
                `Supply chain synchronization for on-time delivery`,
                `Engineering change management and implementation tracking`
            ],
            "Manufacturing": [
                `Factory floor layout optimization and workflow improvement`,
                `Equipment condition monitoring and predictive maintenance`,
                `Production scheduling and capacity planning`,
                `Quality assurance and defect detection`,
                `Labor efficiency analysis and process optimization`
            ],
            "Power Generation": [
                `Turbine performance monitoring and efficiency optimization`,
                `Grid load balancing and demand forecasting`,
                `Maintenance scheduling for maximum uptime`,
                `Environmental emission compliance monitoring`,
                `Renewable energy integration and storage optimization`
            ],
            "Marine": [
                `Vessel performance monitoring and fuel optimization`,
                `Port operations coordination and berth management`,
                `Cargo handling efficiency and logistics`,
                `Ship lifecycle management and maintenance planning`,
                `Route optimization and weather-based decision support`
            ],
            "Defense": [
                `Military equipment condition and readiness monitoring`,
                `Supply chain security and asset tracking`,
                `Training facility operations and scheduling`,
                `Logistics network optimization`,
                `Emergency response coordination`
            ],
            "Construction": [
                `Building information modeling with real-time progress tracking`,
                `Equipment and resource utilization optimization`,
                `Safety compliance monitoring across job sites`,
                `Supply chain management for materials delivery`,
                `Budget and schedule adherence tracking`
            ],
            "Mining": [
                `Mine operations optimization and safety monitoring`,
                `Equipment maintenance scheduling in harsh conditions`,
                `Ore processing and enrichment optimization`,
                `Waste management and environmental compliance`,
                `Production forecasting and resource planning`
            ],
            "default": [
                `Real-time asset monitoring and condition assessment for ${cityName}`,
                `Predictive maintenance planning and resource optimization`,
                `Operational efficiency improvement through digital modeling`,
                `Supply chain visibility and coordination`,
                `Emergency response planning and scenario testing`
            ]
        };

        const relevantUseCases: string[] = [];
        for (const industry of industries) {
            if (useCasesMap[industry]) {
                relevantUseCases.push(...useCasesMap[industry].slice(0, 1));
            }
        }

        // Fill remaining slots with default use cases
        while (relevantUseCases.length < 5) {
            relevantUseCases.push(useCasesMap["default"][relevantUseCases.length % useCasesMap["default"].length]);
        }

        return relevantUseCases.slice(0, 5);
    },

    generateIndustryContext(cityName: string, industries: string[], region: string): string {
        const industryPhrases: Record<string, string> = {
            "Oil & Gas": `${cityName}'s oil and gas sector requires continuous equipment monitoring and predictive maintenance to minimize unplanned downtime. Digital twins enable operators to anticipate failures before they occur, directly improving the bottom line.`,
            "Petrochemical": `${cityName}'s petrochemical industry demands precision in process control and optimization. Digital twins coordinate complex production flows, ensuring maximum yield and safety compliance across integrated facilities.`,
            "Aerospace": `${cityName}'s aerospace manufacturing requires exacting quality standards and precision coordination. Digital twins manage assembly sequences, equipment calibration, and supply chain synchronization essential to this high-margin industry.`,
            "Manufacturing": `${cityName}'s manufacturing sector competes on efficiency and quality. Digital twins optimize factory floor operations, predict equipment failures, and coordinate complex supply chains.`,
            "Power Generation": `${cityName}'s power generation facilities must balance cost efficiency with reliability. Digital twins optimize turbine performance, predict maintenance needs, and coordinate grid operations.`,
            "Marine": `${cityName}'s maritime operations involve vessels, ports, and complex logistics. Digital twins optimize every stage from vessel operations to cargo handling.`,
            "Defense": `${cityName}'s defense sector requires constant equipment readiness and supply chain security. Digital twins monitor asset condition and coordinate complex logistics networks.`,
            "Construction": `${cityName}'s construction industry faces schedule pressures and cost overruns. Digital twins track progress, optimize resource allocation, and ensure safety compliance.`,
            "Mining": `${cityName}'s mining operations must balance production with safety in harsh conditions. Digital twins monitor equipment health, optimize ore processing, and ensure environmental compliance.`,
            "default": `${cityName}'s industrial sector increasingly relies on digital transformation. Digital twins integrate real-time data across operations, enabling data-driven decision-making and optimization.`
        };

        let context = industryPhrases["default"];
        for (const industry of industries) {
            if (industryPhrases[industry]) {
                context = industryPhrases[industry];
                break;
            }
        }

        return context;
    },

    generateROI(industries: string[]): { metric: string; value: string; }[] {
        const roiByIndustry: Record<string, { metric: string; value: string; }[]> = {
            "Oil & Gas": [
                { metric: "Unplanned Downtime Prevention", value: "25-35% reduction through predictive maintenance" },
                { metric: "Maintenance Cost Optimization", value: "15-20% savings in maintenance spending" },
                { metric: "Production Capacity", value: "3-5% increase through efficiency optimization" }
            ],
            "Petrochemical": [
                { metric: "Yield Improvement", value: "2-4% increase through process optimization" },
                { metric: "Energy Efficiency", value: "10-15% reduction in utility consumption" },
                { metric: "Downtime Reduction", value: "20-30% fewer unplanned shutdowns" }
            ],
            "Aerospace": [
                { metric: "Manufacturing Throughput", value: "12-18% increase in completed units" },
                { metric: "Quality Improvement", value: "40% reduction in defect rates" },
                { metric: "Schedule Adherence", value: "95%+ on-time delivery performance" }
            ],
            "Manufacturing": [
                { metric: "Equipment Uptime", value: "15-25% improvement in availability" },
                { metric: "Production Efficiency", value: "10-20% increase in output per hour" },
                { metric: "Scrap Reduction", value: "30-40% decrease in defective units" }
            ],
            "Power Generation": [
                { metric: "Capacity Factor", value: "2-5% improvement in generation efficiency" },
                { metric: "Maintenance Costs", value: "20% reduction in planned maintenance spending" },
                { metric: "Forced Outages", value: "40-50% reduction in emergency shutdowns" }
            ],
            "Marine": [
                { metric: "Fuel Efficiency", value: "5-8% improvement in fuel consumption" },
                { metric: "Port Throughput", value: "15-25% increase in container processing" },
                { metric: "Vessel Availability", value: "20% improvement in vessel utilization" }
            ],
            "Defense": [
                { metric: "Equipment Readiness", value: "15-20% improvement in availability" },
                { metric: "Maintenance Planning", value: "30-40% improvement in schedule predictability" },
                { metric: "Operational Cost", value: "10-15% reduction in logistics costs" }
            ],
            "Construction": [
                { metric: "Schedule Adherence", value: "15-20% improvement in on-time completion" },
                { metric: "Cost Overruns", value: "10-15% reduction in budget variance" },
                { metric: "Safety Incidents", value: "25-35% reduction in reportable events" }
            ],
            "Mining": [
                { metric: "Equipment Availability", value: "20-25% improvement in uptime" },
                { metric: "Production Rate", value: "8-12% increase in tons processed" },
                { metric: "Safety Metrics", value: "40% reduction in lost-time incidents" }
            ],
            "default": [
                { metric: "Operational Efficiency", value: "10-20% improvement through optimization" },
                { metric: "Downtime Reduction", value: "25-35% fewer unplanned interruptions" },
                { metric: "Maintenance Costs", value: "15-25% savings through predictive scheduling" }
            ]
        };

        for (const industry of industries) {
            if (roiByIndustry[industry]) {
                return roiByIndustry[industry];
            }
        }

        return roiByIndustry["default"];
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
    { name: "Taipei", slug: "taipei", country: "TW", region: "Taiwan", industries: ["Semiconductor", "Electronics", "Manufacturing"] },
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

// Generate all digital twin pages
export function generateDigitalTwinPages(): DigitalTwinPage[] {
    const pages: DigitalTwinPage[] = [];

    for (const location of keyLocations) {
        const slug = `digital-twin-${location.slug}`;

        // Check if we have a hardcoded profile for this city
        let useCases: string[];
        let industryContext: string;
        let roiData: { metric: string; value: string; }[];

        if (digitalTwinCityProfiles[location.slug]) {
            const profile = digitalTwinCityProfiles[location.slug];
            useCases = profile.useCases || [];
            industryContext = profile.industryContext || "";
            roiData = profile.roiData || [];
        } else {
            // Generate using template
            useCases = digitalTwinTemplate.generateUseCases(location.name, location.industries);
            industryContext = digitalTwinTemplate.generateIndustryContext(location.name, location.industries, location.region);
            roiData = digitalTwinTemplate.generateROI(location.industries);
        }

        const title = `Digital Twin Solutions for ${location.name} | Asset Optimization & Predictive Maintenance`;
        const description = `Digital twin services in ${location.name}, ${location.region}. Real-time asset monitoring, predictive maintenance, and operational optimization for ${location.industries.slice(0, 2).join(" and ")} industries.`;
        const h1 = `Digital Twin Services in ${location.name}`;
        const introText = `${location.name} is a major hub for ${location.industries.join(", ")} operations, where precision asset management drives competitive advantage. Our digital twin solutions provide real-time visualization, predictive analytics, and optimization capabilities tailored to the region's industrial needs. From refinery optimization to offshore platform monitoring, we enable data-driven decision-making that maximizes uptime and efficiency. Transform your operations with integrated digital twin technology designed for ${location.name}'s unique industrial ecosystem.`;

        pages.push({
            slug,
            cityName: location.name,
            country: location.country,
            region: location.region,
            industries: location.industries,
            useCases,
            title,
            description,
            h1,
            introText,
            industryContext,
            roiData
        });
    }

    return pages;
}

export const digitalTwinRoutes = generateDigitalTwinPages().map(page => ({
    path: `/digital-twin-${page.slug}`,
    city: page.cityName,
    region: page.region
}));
