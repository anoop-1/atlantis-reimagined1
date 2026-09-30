import { Link } from "react-router-dom";
import directory from "@/data/practical-ndt-directory.json";

type Group = { slug: string | null; name: string; cities: { slug: string; city: string }[] };

// React twin of scripts/practical-ndt-directory.mjs — keep the two in step.
export default function PracticalNdtDirectory() {
  const groups = directory as Group[];
  if (!groups.length) return null;
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-3">Practical NDT across North America</h2>
        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          Browse the NDT simulator by state or province, or go straight to your city. Every page covers the
          local industries, regulators and the environments and methods that match the work there.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((g) => (
            <div key={g.slug ?? g.name}>
              <h3 className="font-semibold mb-2">
                {g.slug ? (
                  <Link to={`/practical-ndt-${g.slug}`} className="hover:text-primary">
                    Practical NDT in {g.name}
                  </Link>
                ) : (
                  g.name
                )}
              </h3>
              <ul className="text-sm space-y-1">
                {g.cities.map((c) => (
                  <li key={c.slug}>
                    <Link to={`/practical-ndt-${c.slug}`} className="text-muted-foreground hover:text-primary">
                      {c.city}
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
