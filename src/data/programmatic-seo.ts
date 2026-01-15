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
    // USA
    { name: "Houston", slug: "houston", country: "US", region: "Texas", color: "amber", industries: ["Oil & Gas", "Petrochemical", "Refining"], companies: ["ExxonMobil", "Chevron", "Shell", "BP"] },
    { name: "Los Angeles", slug: "los-angeles", country: "US", region: "California", color: "blue", industries: ["Aerospace", "Defense", "Manufacturing"], companies: ["Boeing", "Lockheed Martin", "Northrop Grumman"] },
    { name: "New Orleans", slug: "new-orleans", country: "US", region: "Louisiana", color: "purple", industries: ["Offshore", "Marine", "Petrochemical"], companies: ["Shell", "Chevron", "CF Industries"] },

    // Middle East
    { name: "Dubai", slug: "dubai", country: "AE", region: "UAE", color: "emerald", industries: ["Oil & Gas", "Construction", "Aviation"], companies: ["ADNOC", "Emirates", "DP World"] },
    { name: "Saudi Arabia", slug: "saudi-arabia", country: "SA", region: "GCC", color: "green", industries: ["Oil & Gas", "Petrochemical"], companies: ["Saudi Aramco", "SABIC", "Ma'aden"] },
    { name: "Qatar", slug: "qatar", country: "QA", region: "GCC", color: "indigo", industries: ["LNG", "Oil & Gas"], companies: ["QatarEnergy", "QatarGas", "RasGas"] },

    // India
    { name: "Mumbai", slug: "mumbai", country: "IN", region: "Maharashtra", color: "orange", industries: ["Oil & Gas", "Manufacturing", "Power"], companies: ["BPCL", "HPCL", "Reliance"] },
    { name: "Chennai", slug: "chennai", country: "IN", region: "Tamil Nadu", color: "rose", industries: ["Automotive", "Manufacturing", "Marine"], companies: ["Hyundai", "Ford", "Ashok Leyland"] },

    // International
    { name: "Singapore", slug: "singapore", country: "SG", region: "SEA", color: "red", industries: ["Marine", "Aerospace", "Petrochemical"], companies: ["Keppel", "Sembcorp", "Shell"] },
    { name: "UK", slug: "uk", country: "GB", region: "Europe", color: "slate", industries: ["North Sea Offshore", "Nuclear", "Aerospace"], companies: ["BP", "Shell", "Rolls-Royce"] }
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
