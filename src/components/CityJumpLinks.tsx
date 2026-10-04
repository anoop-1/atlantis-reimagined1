// City jump links 2026-10-04 — React twin of scripts/city-jump-links.mjs
// (two-layer rule). Renders an exact-anchor link to the city training page
// directly under the H1 of a regional / Level III page that outranks it.
import { Link } from "react-router-dom";
import cityJumpLinks from "@/data/city-jump-links.json";

type Entry = { lead: string; links: { href: string; anchor: string }[] };
const MAP = cityJumpLinks as Record<string, Entry>;

export default function CityJumpLinks({ path, className }: { path: string; className?: string }) {
  const entry = MAP[path.replace(/\/+$/, "")];
  if (!entry) return null;
  return (
    <p className={className ?? "city-jump-links mb-4"}>
      <strong>{entry.lead}</strong>{" "}
      {entry.links.map((l, i) => (
        <span key={l.href}>
          {i > 0 && " · "}
          <Link to={l.href} className="underline font-semibold">{l.anchor}</Link>
        </span>
      ))}
    </p>
  );
}
