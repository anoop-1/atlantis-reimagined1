import { Link } from "react-router-dom";
import geoHubs from "@/data/geo-hubs.json";

/**
 * "Find {Family} by state, province or country" — React twin of
 * scripts/geo-hub-directory.mjs (crawler layer). Keep labels, heading and
 * intro text identical to that module.
 */
type GeoHub = { path: string; family: string; name: string; region: string; country: string; title: string };

const LABEL: Record<string, string> = {
  training: "NDT Training",
  consulting: "NDT Level III Consulting",
  inspection: "NDT Inspection Services",
  erp: "NDT ERP",
  practical: "Practical NDT",
};
const COUNTRY_NAMES: Record<string, string> = {
  US: "United States", USA: "United States", CA: "Canada", UK: "United Kingdom", GB: "United Kingdom", AU: "Australia", NZ: "New Zealand",
};
const countryLabel = (c: string) => COUNTRY_NAMES[String(c || "").toUpperCase()] || c || "Other";
const INTRO =
  "Each page covers the local industries, the regulators and codes that apply there, the cities we support and how Atlantis NDT works with employers in that region.";

export default function GeoHubDirectory({ family }: { family: keyof typeof LABEL | string }) {
  const label = LABEL[family];
  const hubs = (geoHubs as GeoHub[]).filter((h) => h.family === family);
  if (!label || !hubs.length) return null;

  const groups = new Map<string, GeoHub[]>();
  for (const h of hubs) {
    const k = countryLabel(h.country);
    if (!groups.has(k)) groups.set(k, []);
    groups.get(k)!.push(h);
  }
  const order = (k: string) => (k === "United States" ? 0 : k === "Canada" ? 1 : 2);
  const sorted = [...groups.entries()]
    .sort((a, b) => order(a[0]) - order(b[0]) || a[0].localeCompare(b[0]))
    .map(([country, list]) => ({ country, list: [...list].sort((a, b) => a.name.localeCompare(b.name)) }));
  const showHeads = sorted.length > 1 || sorted[0].country !== "United States";

  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-3">Find {label} by state, province or country</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">{INTRO}</p>
        {sorted.map((g) => (
          <div key={g.country} className="mb-8">
            {showHeads ? <h3 className="font-semibold mb-3">{g.country}</h3> : null}
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-1 text-sm">
              {g.list.map((h) => (
                <li key={h.path}>
                  <Link to={h.path} className="text-muted-foreground hover:text-primary">
                    {label} in {h.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
