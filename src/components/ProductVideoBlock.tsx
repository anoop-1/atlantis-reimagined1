// Product video facade (2026-10-10, CLAUDE.md §52). YouTube hosts the file, so the VPS serves
// no video bytes; the iframe (youtube-nocookie.com) loads only after the visitor clicks play.
// Same data as the crawler HTML: src/data/product-videos.json via scripts/product-videos.mjs.
import { useState } from "react";
import { createPortal } from "react-dom";
import { useLocation } from "react-router-dom";
import data from "@/data/product-videos.json";
import { usesPublishedContent } from "@/lib/published-pages";
import { useMainSlot } from "@/lib/use-main-slot";
import { trackEngagement } from "@/lib/enquiry-analytics";

type Video = { youtubeId: string; name: string; description: string; heading: string; pages: string[] };
const VIDEOS = Object.values(data.videos as Record<string, Video>);

export function videoFor(path: string): Video | undefined {
  return VIDEOS.find((v) => v.youtubeId && v.pages.includes(path));
}

export default function ProductVideoBlock() {
  const { pathname } = useLocation();
  const path = pathname.replace(/\/$/, "") || "/";
  const v = usesPublishedContent(path) && !import.meta.env.DEV ? undefined : videoFor(path);
  const slot = useMainSlot(`video:${path}`, Boolean(v));
  const [playing, setPlaying] = useState(false);
  if (!v) return null;
  const block = (
    <section className="container mx-auto max-w-4xl px-6 py-10" data-product-video="2026-10" aria-label={v.heading}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">{v.heading}</h2>
      <div className="relative w-full overflow-hidden rounded-xl border border-border bg-black" style={{ aspectRatio: "16 / 9" }}>
        {playing ? (
          <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${v.youtubeId}?autoplay=1&rel=0`}
            title={v.name} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
        ) : (
          <button type="button" className="group absolute inset-0 h-full w-full" aria-label={`Play video: ${v.name}`}
            onClick={() => { setPlaying(true); trackEngagement("product_video_play", { video: v.youtubeId, page_path: path }); }}>
            <img src={`https://i.ytimg.com/vi/${v.youtubeId}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover opacity-90 group-hover:opacity-100" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground shadow-lg">▶ Play</span>
          </button>
        )}
      </div>
      <p className="mt-3 text-muted-foreground">{v.description}</p>
    </section>
  );
  return slot ? createPortal(block, slot) : block;
}
