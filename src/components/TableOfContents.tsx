import { List } from "lucide-react";

export interface TocItem {
  id: string;
  label: string;
  /** Optional sub-items for nested TOC */
  children?: TocItem[];
}

/**
 * Table of Contents — SERP jump-link sitelinks bait.
 * Place near top of long-form pages. Each anchor must match an H2/H3 `id`.
 * Google extracts these anchors as sitelinks under the main result.
 */
export default function TableOfContents({ items, heading = "On this page" }: { items: TocItem[]; heading?: string }) {
  if (!items || items.length === 0) return null;
  return (
    <nav
      aria-label={heading}
      className="my-6 sm:my-8 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-900/60 p-5 sm:p-6"
    >
      <div className="flex items-center gap-2 mb-3">
        <List className="w-4 h-4 text-slate-500 dark:text-slate-400" aria-hidden />
        <h2 className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 uppercase tracking-wide">
          {heading}
        </h2>
      </div>
      <ol className="space-y-1.5 text-sm sm:text-base">
        {items.map((item, i) => (
          <li key={i}>
            <a
              href={`#${item.id}`}
              className="text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors"
            >
              {i + 1}. {item.label}
            </a>
            {item.children && item.children.length > 0 && (
              <ol className="mt-1 ml-6 space-y-1 text-sm">
                {item.children.map((sub, j) => (
                  <li key={j}>
                    <a
                      href={`#${sub.id}`}
                      className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline transition-colors"
                    >
                      {i + 1}.{j + 1} {sub.label}
                    </a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
