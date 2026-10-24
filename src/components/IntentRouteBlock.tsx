// Intent routing (owner, 2026-10-24): reading pages point at the Atlantis product their
// readers buy next: careers -> training + Practical NDT, calculators -> consulting or ERP,
// codes -> procedure writing + inspection + training, and so on. Same rules, copy and
// markup as scripts/intent-routes-2026-10.mjs injects into the crawler <main>:
// src/data/intent-routes-2026-10.mjs. Mounted once in App.tsx outside <Routes>.
// Clicks are tracked by GA4EventTracker (intent_route_click, or contact_cta_click with
// cta_variant "route-<kind>" for links to /contact).
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { intentRouteFor } from "@/data/intent-routes-2026-10.mjs";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

export default function IntentRouteBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  // Published pages render the prerendered <main>, which already carries this block.
  const b = usesPublishedContent(path) && !import.meta.env.DEV ? null : intentRouteFor(path);
  const slot = useMainSlot(`route:${path}`, Boolean(b));
  if (!b) return null;
  const block = (
    <section data-intent-route="2026-10" data-route-kind={b.kind} className="container mx-auto max-w-4xl px-6 py-6" aria-label={b.h}>
      <div className="rounded-xl border-l-4 border-primary bg-primary/5 p-6">
        <h2 className="text-xl md:text-2xl font-bold mb-2">{b.h}</h2>
        <p className="text-slate-700 mb-3">{b.p}</p>
        <ul className="list-disc pl-6 space-y-1">
          {b.links.map(([href, label]) => (
            <li key={href}>
              <Link to={href} data-route-link={b.kind} data-cta-variant={`route-${b.kind}`} className="text-primary underline underline-offset-2 hover:no-underline">{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
  return slot ? createPortal(block, slot) : block;
}
