// Real product screenshots (2026-10-10, CLAUDE.md §53). Captured read-only from the live portal,
// ERP, LMS and Practical NDT; client details are blurred in the images. Same data as the crawler
// HTML: src/data/product-screenshots.json via scripts/product-screenshots.mjs.
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import data from "@/data/product-screenshots.json";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";

type Shot = { src: string; alt: string; caption: string };
type Gallery = { id: string; heading: string; intro: string; pages: string[]; shots: string[] };
const SHOTS = data.shots as Record<string, Shot>;
const GALLERIES = data.galleries as Gallery[];

export function galleryFor(path: string): Gallery | undefined {
  return GALLERIES.find((g) => g.pages.includes(path));
}

export default function ProductScreenshotsBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const g = usesPublishedContent(path) && !import.meta.env.DEV ? undefined : galleryFor(path);
  const slot = useMainSlot(`shots:${path}`, Boolean(g));
  if (!g) return null;
  const block = (
    <section className="container mx-auto max-w-6xl px-6 py-10" data-product-screens="2026-10" aria-label={g.heading}>
      <h2 className="text-2xl md:text-3xl font-bold mb-2">{g.heading}</h2>
      <p className="text-muted-foreground mb-6">{g.intro}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {g.shots.map((id) => {
          const s = SHOTS[id];
          if (!s) return null;
          return (
            <figure key={id} className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
              <a href={s.src} target="_blank" rel="noopener" aria-label={`Open full-size screenshot: ${s.alt}`}>
                <img src={s.src} alt={s.alt} width={data.width} height={data.height} loading="lazy" decoding="async"
                  className="w-full h-auto block" />
              </a>
              <figcaption className="p-4 text-sm text-muted-foreground">{s.caption}</figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
  return slot ? createPortal(block, slot) : block;
}
