import { Fragment } from "react";
import { Link } from "react-router-dom";
import directory from "@/data/practical-ndt-directory.json";
import geoHubs from "@/data/geo-hubs.json";
import { WHERE, whereGroups } from "@/data/practical-ndt-where-2026-10.mjs";

type Group = { slug: string | null; name: string; cities: { slug: string; city: string }[] };
type GeoHub = { path: string; family: string; name: string; country: string };

// React twin of scripts/practical-ndt-directory.mjs; both render whereGroups() from
// src/data/practical-ndt-where-2026-10.mjs (2026-10-18: one compact list, no per-state H3s).
export default function PracticalNdtDirectory() {
  const groups = whereGroups(directory as Group[], geoHubs as GeoHub[]);
  if (!groups.length) return null;
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-3">{WHERE.h2}</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">{WHERE.intro}</p>
        {groups.map((g) => (
          <p key={g.label} className="text-sm text-muted-foreground mb-4 leading-relaxed">
            <strong className="text-foreground">{g.label}:</strong>{" "}
            {g.links.map(([href, name], i) => (
              <Fragment key={href}>
                {i > 0 && " · "}
                <Link to={href} className="hover:text-primary">
                  {name}
                </Link>
              </Fragment>
            ))}
          </p>
        ))}
      </div>
    </section>
  );
}
