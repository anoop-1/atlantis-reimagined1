// Renders trusted, repo-authored HTML from src/data/software-assets/*.json.
// The same HTML is emitted by scripts/software-assets-routes.mjs for crawlers.
// Internal links are routed client-side so the SPA does not reload.
import { MouseEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function RichHtml({ html, className = "" }: { html: string; className?: string }) {
  const navigate = useNavigate();
  const onClick = (e: MouseEvent<HTMLDivElement>) => {
    const a = (e.target as HTMLElement).closest("a");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    if (!href.startsWith("/") || href.startsWith("//") || a.hasAttribute("download") || /\.(html|csv|pdf|docx|xlsx)$/i.test(href.split("?")[0])) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
    e.preventDefault();
    navigate(href);
  };
  return (
    <div
      onClick={onClick}
      className={`prose prose-lg max-w-none prose-headings:font-bold prose-a:text-primary prose-table:text-sm prose-th:bg-muted/60 prose-th:p-2 prose-td:p-2 prose-caption:text-left prose-caption:font-semibold ${className}`}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
