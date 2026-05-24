import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import type { LangCode } from "@/data/language-map";
import { LANGUAGES, hasTranslation } from "@/data/language-map";

interface LanguageDropdownProps {
  routeKey: string;               // e.g. "ndt-erp-houston"
  slug: string;                   // e.g. "ndt-erp-houston"
  supportedLangs: LangCode[];     // city's languages array
  currentLang: LangCode;          // usually "en"; set per route
  className?: string;
}

export default function LanguageDropdown({ routeKey, slug, supportedLangs, currentLang, className = "" }: LanguageDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Only show dropdown if city has >1 supported language
  if (supportedLangs.length < 2) return null;

  const current = LANGUAGES[currentLang];

  function onSelect(lang: LangCode) {
    if (!hasTranslation(routeKey, lang)) return; // grayed-out option — noop
    setOpen(false);
    const to = lang === "en" ? `/${slug}` : `/${lang}/${slug}`;
    if (location.pathname !== to) navigate(to);
  }

  return (
    <div ref={ref} className={`relative inline-block ${className}`}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {/* globe icon (inline SVG — no lucide dep) */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm6.32 6h-2.48a12.9 12.9 0 00-1.1-3.42A6.02 6.02 0 0116.32 8zM10 4c.77 0 1.78 1.47 2.22 4H7.78C8.22 5.47 9.23 4 10 4zM4.02 12h2.48c.12 1.25.48 2.41 1.02 3.42A6.02 6.02 0 014.02 12zm0-4a6.02 6.02 0 013.5-3.42c-.54 1-.9 2.17-1.02 3.42H4.02zM10 16c-.77 0-1.78-1.47-2.22-4h4.44c-.44 2.53-1.45 4-2.22 4zm2.3-.58c.54-1 .9-2.17 1.02-3.42h2.48a6.02 6.02 0 01-3.5 3.42z" />
        </svg>
        <span>{current.flag}</span>
        <span>{current.nativeName}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4 text-slate-500">
          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 011.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-20 mt-2 w-56 rounded-lg border border-slate-200 bg-white py-1 shadow-lg"
        >
          {supportedLangs.map(lang => {
            const meta = LANGUAGES[lang];
            const available = hasTranslation(routeKey, lang);
            const isCurrent = lang === currentLang;
            return (
              <li key={lang}>
                <button
                  type="button"
                  role="option"
                  aria-selected={isCurrent}
                  onClick={() => onSelect(lang)}
                  disabled={!available}
                  className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-sm ${
                    available
                      ? "cursor-pointer hover:bg-slate-100 text-slate-800"
                      : "cursor-not-allowed text-slate-400"
                  } ${isCurrent ? "font-semibold bg-blue-50" : ""}`}
                >
                  <span className="flex items-center gap-2">
                    <span className="text-base">{meta.flag}</span>
                    <span>{meta.nativeName}</span>
                    <span className="text-xs text-slate-500">({meta.name})</span>
                  </span>
                  {!available && <span className="text-xs italic">coming soon</span>}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
