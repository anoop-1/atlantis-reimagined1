import { CheckCircle } from "lucide-react";
import SECTORS from "@/data/client-sectors-2026-10.json";

// 2026-10-12 (owner): client names and logos are not shown on the site. This anonymised
// sector list replaces the client-logo carousels on /, /consulting and the consulting
// location pages. Same data as the crawler HTML (scripts/money-pages-2026-10.mjs).
export default function SectorsServed({ id = "sectors-served", compact = false }: { id?: string; compact?: boolean }) {
  return (
    <section id={id} className={`${compact ? "py-10" : "py-12"} bg-slate-50 border-t border-b`}>
      <div className="container mx-auto max-w-5xl px-6 text-center">
        <h2 className={`${compact ? "text-lg" : "text-xl md:text-2xl"} font-bold mb-2`}>{SECTORS.heading}</h2>
        <p className="text-sm text-muted-foreground mb-6">{SECTORS.sub}</p>
        <ul className="flex flex-wrap justify-center gap-3">
          {SECTORS.items.map((s) => (
            <li key={s} className="inline-flex items-center gap-2 rounded-full border bg-white px-4 py-2 text-sm text-slate-700">
              <CheckCircle className="h-4 w-4 text-primary" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
