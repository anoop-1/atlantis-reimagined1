// 2026-10-18 (owner): /training is global; country pages carry the country-specific content.
// Same list as the crawler copy (src/data/training-countries-2026-10.json →
// scripts/training-release-2026-10.mjs, rule training-regions).
import { Link } from "react-router-dom";
import data from "@/data/training-countries-2026-10.json";

type Group = { name: string; links: [string, string][] };

export default function TrainingByCountry() {
  const groups = data.groups as Group[];
  return (
    <section id="training-by-country" aria-label={data.h2} className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-slate-900/10">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">{data.h2}</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-10">{data.intro}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g) => (
            <div key={g.name} className="rounded-xl border bg-card p-5">
              <h3 className="font-semibold text-primary mb-3">{g.name}</h3>
              <ul className="space-y-2 text-sm">
                {g.links.map(([href, label]) => (
                  <li key={href}>
                    <Link to={href} className="underline underline-offset-2 hover:text-primary">
                      NDT training in {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
