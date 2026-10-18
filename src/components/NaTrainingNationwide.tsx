// "Nationwide" block for the national owner pages (/training,
// /ndt-training-online, /snt-tc-1a-training-certification,
// /asnt-level-iii-training, /corporate-ndt-training, employer programme):
// links out to every North American city/state/region training page.
// Mirrors nationwideBlockHtml() in scripts/training-na.mjs.
import { Link } from "react-router-dom";
import { allNaTrainingMeta, EMPLOYER_PROGRAM_PATH, type NaTrainingMeta } from "@/lib/na-training";
import geoHubs from "@/data/geo-hubs.json";
// 2026-10-18: the training state/province hubs are merged into this one directory (shared with the crawler).
import { nationwideHubEntries, NATIONWIDE_INTRO } from "@/data/training-nationwide-2026-10.mjs";

const GROUPS: [string, (m: NaTrainingMeta) => boolean, "usCity" | "usState" | "canada"][] = [
  ["United States — cities", (m) => m.country === "USA" && m.kind === "city", "usCity"],
  ["United States — states and regions", (m) => m.country === "USA" && (m.kind === "state" || m.kind === "region"), "usState"],
  ["Canada", (m) => m.country === "Canada", "canada"],
];

export default function NaTrainingNationwide({ hideEmployerLink = false }: { hideEmployerLink?: boolean }) {
  const all = allNaTrainingMeta();
  const hubs = nationwideHubEntries(geoHubs, new Set(all.map((m) => `/ndt-training-${m.slug}`)));
  return (
    <section className="py-12 bg-secondary/20" aria-label="NDT training nationwide">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Nationwide: NDT training by city, state and region</h2>
        <p className="text-muted-foreground mb-6">{NATIONWIDE_INTRO}</p>
        {GROUPS.map(([heading, f, group]) => (
          <div key={heading} className="mb-6">
            <h3 className="font-semibold mb-2">{heading}</h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-1 text-sm">
              {all
                .filter(f)
                .map((m) => ({ path: `/ndt-training-${m.slug}`, label: m.label }))
                .concat(hubs.filter((h) => h.group === group))
                .sort((a, b) => a.label.localeCompare(b.label))
                .map((m) => (
                  <li key={m.path}>
                    <Link className="text-primary hover:underline" to={m.path}>
                      NDT training in {m.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        ))}
        {!hideEmployerLink && (
          <p className="text-sm">
            Certifying a whole crew? See the{" "}
            <Link className="text-primary underline" to={EMPLOYER_PROGRAM_PATH}>SNT-TC-1A certification programme for NDT companies</Link>.
          </p>
        )}
      </div>
    </section>
  );
}
