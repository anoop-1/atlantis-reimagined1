import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Wrench, ClipboardCheck, Award } from "lucide-react";

/**
 * NdtConnectCrosslink
 * -------------------------------------------------------------------------
 * Sidebar / inline contextual block that links Atlantis city/method pages
 * to the matching ndt-connect.com /free-tools/[feature]/[citySlug-state]
 * page. Both properties are owned by the same operator (Atlantis NDT family).
 *
 * Server-renderable: pure functional component, no client-only APIs (works
 * with the prerender pipeline at scripts/prerender.mjs).
 *
 * SLUG MAPPING:
 *   Atlantis cities use a state-less slug (e.g. "houston"). NDT Connect's
 *   free-tools URLs use "houston-tx" (state abbreviation appended). When a
 *   `state` prop is supplied, we lowercase + kebab-it and append. If the
 *   caller does not know the abbreviation, the FULL_STATE_TO_ABBR map below
 *   converts the Atlantis `region` field ("Texas") -> "tx".
 *
 * TODO: Per-method per-city pages under src/pages/* (e.g.
 *   ultrasonic-testing-houston.tsx, radiographic-testing-dubai.tsx, ...) are
 *   individually-curated and DO NOT flow through a shared template. They
 *   each need a manual sweep to render <NdtConnectCrosslink ... /> alongside
 *   their existing content. Skip non-US pages — ndt-connect city slugs are
 *   currently keyed on US state abbreviations.
 */

interface NdtConnectCrosslinkProps {
  /** Atlantis city slug, kebab-case, NO state suffix. e.g. "houston" */
  citySlug: string;
  /** Display name of the city. e.g. "Houston" */
  cityName: string;
  /**
   * Either a US 2-letter abbreviation ("TX") or full state name ("Texas").
   * If full name, it is converted via FULL_STATE_TO_ABBR. Lowercased for
   * the final URL. Optional — if omitted, the bare citySlug is used.
   */
  state?: string;
  /** Optional. If country is supplied and is NOT "US"/"USA", the block is
   *  not rendered (ndt-connect free-tools currently US-only). */
  country?: string;
}

const FULL_STATE_TO_ABBR: Record<string, string> = {
  alabama: "al", alaska: "ak", arizona: "az", arkansas: "ar", california: "ca",
  colorado: "co", connecticut: "ct", delaware: "de", "district of columbia": "dc",
  florida: "fl", georgia: "ga", hawaii: "hi", idaho: "id", illinois: "il",
  indiana: "in", iowa: "ia", kansas: "ks", kentucky: "ky", louisiana: "la",
  maine: "me", maryland: "md", massachusetts: "ma", michigan: "mi",
  minnesota: "mn", mississippi: "ms", missouri: "mo", montana: "mt",
  nebraska: "ne", nevada: "nv", "new hampshire": "nh", "new jersey": "nj",
  "new mexico": "nm", "new york": "ny", "north carolina": "nc",
  "north dakota": "nd", ohio: "oh", oklahoma: "ok", oregon: "or",
  pennsylvania: "pa", "rhode island": "ri", "south carolina": "sc",
  "south dakota": "sd", tennessee: "tn", texas: "tx", utah: "ut",
  vermont: "vt", virginia: "va", washington: "wa", "west virginia": "wv",
  wisconsin: "wi", wyoming: "wy"
};

const FREE_TOOLS_BASE = "https://ndt-connect.com/free-tools";

const FEATURES: Array<{
  slug: "equipment-management" | "calibration-tracking" | "certificate-management";
  Icon: React.ComponentType<{ className?: string }>;
  label: (city: string) => string;
}> = [
  {
    slug: "equipment-management",
    Icon: Wrench,
    label: (city) => `Free equipment management software for NDT in ${city}`
  },
  {
    slug: "calibration-tracking",
    Icon: ClipboardCheck,
    label: (city) => `Free calibration tracking for NDT companies in ${city}`
  },
  {
    slug: "certificate-management",
    Icon: Award,
    label: (city) => `Free certificate management — manpower & company certs in ${city}`
  }
];

const normaliseState = (state?: string): string | null => {
  if (!state) return null;
  const trimmed = state.trim().toLowerCase();
  if (!trimmed) return null;
  if (trimmed.length === 2) return trimmed;
  return FULL_STATE_TO_ABBR[trimmed] ?? null;
};

const NdtConnectCrosslink: React.FC<NdtConnectCrosslinkProps> = ({
  citySlug,
  cityName,
  state,
  country
}) => {
  // Currently only render for US cities — ndt-connect's free-tools city
  // pages are US-keyed at the moment. Tweak this gate as that expands.
  if (country && !["us", "usa", "united states"].includes(country.trim().toLowerCase())) {
    return null;
  }

  const stateAbbr = normaliseState(state);
  const ndtConnectSlug = stateAbbr ? `${citySlug}-${stateAbbr}` : citySlug;

  return (
    <section className="py-12 bg-slate-50">
      <div className="container mx-auto max-w-6xl px-6">
        <Card className="border-primary/20 bg-white shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-primary" />
              Free NDT operations tools for {cityName} inspection companies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-slate-600 mb-4">
              Run an NDT inspection company in {cityName}? Use these free, ready-to-go tools from NDT Connect — no credit card, no per-seat fees.
            </p>
            <ul className="space-y-3">
              {FEATURES.map(({ slug, Icon, label }) => (
                <li key={slug}>
                  <a
                    href={`${FREE_TOOLS_BASE}/${slug}/${ndtConnectSlug}`}
                    target="_blank"
                    rel="noopener"
                    className="group flex items-start gap-3 rounded-md border border-slate-200 p-3 hover:border-primary hover:bg-slate-50 transition"
                  >
                    <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 group-hover:text-primary font-medium">
                      {label(cityName)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-slate-500 italic">
              NDT Connect is part of the Atlantis NDT family. Free tier — user ID only.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NdtConnectCrosslink;
export { NdtConnectCrosslink };
