/**
 * Homepage "see it working first" strip — 2026-10-09 sprint (Day 3).
 * One honest proof point per business line: the interactive tools and funnels
 * shipped in this sprint, linked by their anchors. Mirrored in the crawler HTML by
 * scripts/sprint-2026-10.mjs. Content: src/data/sprint-funnels.json (home).
 */
import { Link } from "react-router-dom";
import data from "@/data/sprint-funnels.json";

export default function SeeItFirst() {
  const h = data.home;
  return (
    <section id={h.id} className="py-14 bg-white border-b" aria-labelledby={`${h.id}-h`}>
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 id={`${h.id}-h`} className="text-2xl md:text-3xl font-bold mb-2 text-center">{h.heading}</h2>
        <p className="text-muted-foreground text-center mb-8">{h.intro}</p>
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {h.items.map((it) => (
            <li key={it.href}>
              <Link to={it.href} className="block h-full rounded-xl border-2 border-primary/20 bg-card p-5 hover:border-primary transition">
                <span className="block font-semibold text-primary mb-1">{it.label} →</span>
                <span className="block text-sm text-muted-foreground">{it.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
