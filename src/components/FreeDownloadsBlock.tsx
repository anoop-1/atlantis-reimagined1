// Free downloads + "request custom templates" quotation CTA (owner, 2026-10-24).
// Same data and markup as scripts/free-downloads-2026-10.mjs injects into the crawler
// <main>: src/data/free-downloads-2026-10.mjs. Mounted once in App.tsx outside <Routes>.
// Clicks are tracked by GA4EventTracker (template_download for /templates and /downloads files,
// contact_cta_click with cta_variant "custom-templates-quote"), which also covers the crawler copy.
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { downloadsFor, DOWNLOADS_COPY } from "@/data/free-downloads-2026-10.mjs";

// Same inline colours as the crawler markup (DL_STYLE in the data module).
const S_BUTTON = { color: "#ffffff", textDecoration: "none" } as const;
const S_CTA = { color: "#0f172a", textDecoration: "none" } as const;
const S_DARK = { color: "#ffffff" } as const;
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

export default function FreeDownloadsBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  // Published pages render the prerendered <main>, which already carries this block.
  const b = usesPublishedContent(path) && !import.meta.env.DEV ? null : downloadsFor(path);
  const slot = useMainSlot(`downloads:${path}`, Boolean(b));
  if (!b) return null;
  const c = DOWNLOADS_COPY.cta;
  const block = (
    <section data-free-downloads="2026-10" className="py-10">
      <div className="container mx-auto max-w-5xl px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{DOWNLOADS_COPY.h2}</h2>
        <p className="text-slate-600 mb-5">{DOWNLOADS_COPY.intro}</p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 list-none p-0">
          {b.items.map((it) => (
            <li key={it.key} className="rounded-xl border border-slate-200 bg-white p-4 flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-wide text-primary">{it.badge}</span>
              <span className="font-semibold text-slate-900">{it.title}</span>
              <span className="text-sm text-slate-600">{it.note}</span>
              <span className="mt-auto flex flex-wrap gap-3 text-sm">
                <a
                  href={it.file}
                  download
                  data-download={it.key}
                  style={S_BUTTON}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-primary text-primary-foreground font-semibold"
                >
                  Download {it.badge === "Excel" ? ".xlsx" : "PDF"}
                </a>
                {it.page && <Link to={it.page} className="text-primary underline self-center">About this template</Link>}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6 rounded-xl bg-slate-900 text-white p-6" data-template-quote="2026-10">
          <h3 className="text-xl font-bold mb-2">{c.h3}</h3>
          <p className="text-slate-200 mb-4">{c.p}</p>
          <p className="flex flex-wrap items-center gap-4">
            <Link
              to={c.href}
              data-cta-variant="custom-templates-quote"
              style={S_CTA}
              className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-slate-900 font-semibold"
            >
              {c.button}
            </Link>
            {b.secondary.length > 0 && (
              <span className="text-sm text-slate-300">
                {b.secondary.map(([h, l], i) => (
                  <span key={h}>{i > 0 && " · "}<Link to={h} className="text-white underline" style={S_DARK}>{l}</Link></span>
                ))}
              </span>
            )}
          </p>
        </div>
      </div>
    </section>
  );
  return slot ? createPortal(block, slot) : block;
}
