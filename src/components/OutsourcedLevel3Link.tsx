// One contextual "outsourced Level III" link from the SNT-TC-1A written-practice pages to the
// Level III page (2026-10-12, SEO audit action 9). Same words as the crawler HTML:
// src/data/money-pages-2026-10.json -> writtenPracticeLink (scripts/money-pages-2026-10.mjs).
import { Link } from "react-router-dom";
import MP from "@/data/money-pages-2026-10.json";

export default function OutsourcedLevel3Link({ className = "" }: { className?: string }) {
  const w = MP.writtenPracticeLink;
  return (
    <p className={className}>
      {w.before}
      <Link to={w.href} className="text-[#004aad] underline">{w.anchor}</Link>
      {w.after}
    </p>
  );
}
