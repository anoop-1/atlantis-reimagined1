// "Nationwide" block for the national owner pages (/training,
// /ndt-training-online, /snt-tc-1a-training-certification,
// /asnt-level-iii-training, /corporate-ndt-training, employer programme):
// links out to every North American city/state/region training page.
// Mirrors nationwideBlockHtml() in scripts/training-na.mjs.
import { Link } from "react-router-dom";
import { allNaTrainingMeta, type NaTrainingMeta } from "@/lib/na-training";

const GROUPS: [string, (m: NaTrainingMeta) => boolean][] = [
  ["United States — cities", (m) => m.country === "USA" && m.kind === "city"],
  ["United States — states and regions", (m) => m.country === "USA" && (m.kind === "state" || m.kind === "region")],
  ["Canada", (m) => m.country === "Canada"],
];

export default function NaTrainingNationwide() {
  const all = allNaTrainingMeta();
  return (
    <section className="py-12 bg-secondary/20" aria-label="NDT training nationwide">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Nationwide: NDT training by city, state and region</h2>
        <p className="text-muted-foreground mb-6">
          Every programme below is delivered live online or onsite at the employer&apos;s facility under ASNT Level III
          oversight — Atlantis does not run walk-in training centres. Pick your market for local industries, codes and
          employer requirements.
        </p>
        {GROUPS.map(([heading, f]) => (
          <div key={heading} className="mb-6">
            <h3 className="font-semibold mb-2">{heading}</h3>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-1 text-sm">
              {all
                .filter(f)
                .sort((a, b) => a.label.localeCompare(b.label))
                .map((m) => (
                  <li key={m.slug}>
                    <Link className="text-primary hover:underline" to={`/ndt-training-${m.slug}`}>
                      NDT training in {m.label}
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
