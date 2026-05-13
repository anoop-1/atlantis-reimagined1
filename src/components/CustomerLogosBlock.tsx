import React from "react";

/**
 * CustomerLogosBlock — anonymized E-E-A-T trust block.
 *
 * Renders neutral SVG "logo cards" with anonymized labels (no specific
 * customer names) plus an MNDA disclaimer. Optional `industry` prop
 * filters the list to the most relevant 8-10 anonymized labels.
 */
export interface CustomerLogosBlockProps {
  title?: string;
  /** Optional industry slug — filters which anonymized labels are shown */
  industry?: string;
  /** Optional subtitle / supporting line */
  subtitle?: string;
}

interface LogoEntry {
  label: string;
  /** Short 2-3 letter initials for the SVG glyph */
  initials: string;
  /** Industry slugs this entry is most relevant to */
  industries: string[];
}

const ALL_LOGOS: LogoEntry[] = [
  { label: "Major Gulf Coast Refinery", initials: "GCR", industries: ["ndt-inspection-companies", "industrial-coatings-inspection", "pipeline-integrity-services", "construction-quality-assurance"] },
  { label: "ADNOC-Approved Inspection Contractor", initials: "AIC", industries: ["ndt-inspection-companies", "pipeline-integrity-services", "industrial-coatings-inspection", "oilfield-services"] },
  { label: "Saudi Aramco SAEP-1142 Vendor", initials: "ARA", industries: ["ndt-inspection-companies", "welding-fabrication-shops", "industrial-coatings-inspection", "pipeline-integrity-services"] },
  { label: "Boeing Tier-1 Aerospace NDT Supplier", initials: "AER", industries: ["aerospace-quality-control", "ndt-inspection-companies"] },
  { label: "Singapore Jurong Petrochem Operator", initials: "JPC", industries: ["ndt-inspection-companies", "industrial-coatings-inspection", "welding-fabrication-shops"] },
  { label: "Calgary Pipeline Integrity Firm", initials: "CPI", industries: ["pipeline-integrity-services", "oilfield-services", "industrial-coatings-inspection"] },
  { label: "Hyderabad ISO 17025 Calibration Lab", initials: "HCL", industries: ["calibration-laboratories", "metrology-laboratories", "environmental-testing-labs"] },
  { label: "UK Offshore EPC Contractor", initials: "EPC", industries: ["construction-quality-assurance", "marine-survey-companies", "welding-fabrication-shops"] },
  { label: "Norwegian NCS Asset Owner", initials: "NCS", industries: ["marine-survey-companies", "pipeline-integrity-services", "ndt-inspection-companies"] },
  { label: "Indonesian LNG Operator", initials: "LNG", industries: ["ndt-inspection-companies", "welding-fabrication-shops", "marine-survey-companies"] },
  { label: "ANAB-Accredited Metrology Lab (USA)", initials: "MET", industries: ["metrology-laboratories", "calibration-laboratories"] },
  { label: "Gulf-Coast Welding & Fabrication Shop", initials: "WFS", industries: ["welding-fabrication-shops", "construction-quality-assurance"] },
  { label: "Aberdeen North Sea Inspection Provider", initials: "NSI", industries: ["marine-survey-companies", "ndt-inspection-companies", "pipeline-integrity-services"] },
  { label: "Houston Midstream Pipeline Operator", initials: "MPO", industries: ["pipeline-integrity-services", "oilfield-services"] },
  { label: "Australian Geotechnical Engineering Firm", initials: "GEO", industries: ["geotechnical-engineering", "construction-quality-assurance"] },
  { label: "UAE EPA-Aligned Environmental Lab", initials: "ENV", industries: ["environmental-testing-labs", "metrology-laboratories"] },
  { label: "Permian OCTG Drilling Inspection Co.", initials: "OCT", industries: ["oilfield-services", "ndt-inspection-companies"] },
  { label: "European AS9100D Aerospace MRO", initials: "MRO", industries: ["aerospace-quality-control"] },
  { label: "Mid-East Construction QA Consultancy", initials: "CQA", industries: ["construction-quality-assurance", "geotechnical-engineering"] },
];

/** Stable, deterministic colour pick from a string seed */
function paletteFor(seed: string) {
  const palette = [
    { bg: "#1d4ed8", fg: "#ffffff" }, // blue-700
    { bg: "#0f172a", fg: "#cbd5e1" }, // slate-900
    { bg: "#334155", fg: "#f8fafc" }, // slate-700
    { bg: "#475569", fg: "#f1f5f9" }, // slate-600
    { bg: "#1e3a8a", fg: "#bfdbfe" }, // blue-900
    { bg: "#3730a3", fg: "#e0e7ff" }, // indigo-800
    { bg: "#0c4a6e", fg: "#e0f2fe" }, // sky-900
  ];
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) | 0;
  return palette[Math.abs(h) % palette.length];
}

export const CustomerLogosBlock: React.FC<CustomerLogosBlockProps> = ({
  title = "Trusted by inspection teams in 80+ cities",
  industry,
  subtitle,
}) => {
  // Pick logos: industry-filtered first, then top up to 10 from the remaining
  // pool so the grid always renders a full row of anonymized cards.
  const filtered = industry
    ? ALL_LOGOS.filter((l) => l.industries.includes(industry))
    : ALL_LOGOS;

  const seen = new Set<string>();
  const picks: LogoEntry[] = [];
  for (const l of filtered) {
    if (picks.length >= 10) break;
    if (seen.has(l.label)) continue;
    seen.add(l.label);
    picks.push(l);
  }
  if (picks.length < 8) {
    for (const l of ALL_LOGOS) {
      if (picks.length >= 10) break;
      if (seen.has(l.label)) continue;
      seen.add(l.label);
      picks.push(l);
    }
  }

  return (
    <section className="py-12 bg-white border-y border-slate-200" aria-labelledby="customer-logos-title">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-8">
          <h2
            id="customer-logos-title"
            className="text-xl md:text-2xl font-semibold text-slate-800"
          >
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto">{subtitle}</p>
          ) : null}
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          role="list"
        >
          {picks.map((logo) => {
            const { bg, fg } = paletteFor(logo.initials);
            return (
              <div
                key={logo.label}
                role="listitem"
                className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-lg px-3 py-3 hover:shadow-sm transition"
                aria-label={logo.label}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="flex-shrink-0"
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                >
                  <circle cx="20" cy="20" r="20" fill={bg} />
                  <text
                    x="20"
                    y="25"
                    textAnchor="middle"
                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
                    fontSize="13"
                    fontWeight="700"
                    fill={fg}
                  >
                    {logo.initials}
                  </text>
                </svg>
                <span className="text-xs text-slate-700 leading-tight font-medium">
                  {logo.label}
                </span>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-[11px] text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Logos representative of customer industries; specific customer names omitted under MNDA.
          Atlantis NDT does not publicly disclose individual customer identities without prior
          written consent.
        </p>
      </div>
    </section>
  );
};

export default CustomerLogosBlock;
