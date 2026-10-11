// Owner links (2026-10-12 owner-links release): the in-body paragraph that points a competing
// guide at the page that should win its buyer search, plus the softened title/H1.
// Copy and rules live in src/data/owner-links-2026-10.mjs, which
// scripts/owner-links-2026-10.mjs also renders into the crawler HTML, so both match.
import { ownerEntryFor, renderOwnerInline, dtCityMeta } from "@/data/owner-links-2026-10.mjs";

/** Softened title/H1 for a path, or null when the page keeps its own. */
export function ownerMetaFor(path: string): { title?: string; h1?: string; description?: string } | null {
  const e = ownerEntryFor(path);
  if (!e) return null;
  return { title: e.title, h1: e.h1 ?? (e.source === "blog" ? e.title : undefined), description: e.description };
}

export { dtCityMeta };

export default function OwnerLinkParagraph({ path, text, className }: { path?: string; text?: string; className?: string }) {
  const p = text ?? (path ? ownerEntryFor(path)?.p : undefined);
  if (!p) return null;
  return (
    <p
      className={className ?? "owner-link text-slate-700 text-lg leading-relaxed mb-6 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-2"}
      data-owner-link="2026-10"
      dangerouslySetInnerHTML={{ __html: renderOwnerInline(p) }}
    />
  );
}
