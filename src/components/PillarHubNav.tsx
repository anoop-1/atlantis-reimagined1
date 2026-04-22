import { Link } from "react-router-dom";
import {
  Briefcase,
  GraduationCap,
  Layers,
  FileText,
  Database,
} from "lucide-react";

/**
 * PillarHubNav — 5-pillar link row shown on every city/state/industry/method
 * template page. Funnels internal link equity from ~400 programmatic pages
 * into the 5 pillar hubs so head terms ("ndt consulting", "ndt training",
 * "digital twin ndt", "ndt reporting software", "ndt erp") consolidate on
 * the hub URLs instead of sprinkling across city pages.
 *
 * Rendered in subtle gray strip so it doesn't compete with primary CTAs
 * but still provides crawlable anchor text on every page.
 */
interface PillarHubNavProps {
  /** Optional active pillar to visually highlight the current one */
  active?: "consulting" | "training" | "digital-twins" | "ndt-reporting" | "ndt-erp";
  /** Optional custom label row prefix */
  label?: string;
}

const PILLARS = [
  {
    slug: "consulting",
    to: "/consulting",
    label: "NDT Consulting",
    icon: Briefcase,
  },
  {
    slug: "training",
    to: "/ndt-training",
    label: "NDT Training",
    icon: GraduationCap,
  },
  {
    slug: "digital-twins",
    to: "/digital-twins",
    label: "Digital Twin NDT",
    icon: Layers,
  },
  {
    slug: "ndt-reporting",
    to: "/best-ndt-reporting-software-2026",
    label: "NDT Reporting Software",
    icon: FileText,
  },
  {
    slug: "ndt-erp",
    to: "/ndt-erp-solution",
    label: "NDT ERP Software",
    icon: Database,
  },
] as const;

export default function PillarHubNav({ active, label = "Explore our 5 NDT solution pillars:" }: PillarHubNavProps) {
  return (
    <nav
      aria-label="NDT solution pillars"
      className="bg-slate-50 border-y border-slate-200 py-4"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-2 sm:gap-4">
          <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
            {label}
          </span>
          <ul className="flex flex-wrap gap-2">
            {PILLARS.map(({ slug, to, label: pillarLabel, icon: Icon }) => {
              const isActive = active === slug;
              return (
                <li key={slug}>
                  <Link
                    to={to}
                    className={
                      "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition " +
                      (isActive
                        ? "bg-[#004aad] text-white"
                        : "bg-white text-[#004aad] border border-slate-200 hover:bg-slate-100")
                    }
                    aria-current={isActive ? "page" : undefined}
                  >
                    <Icon className="w-4 h-4" />
                    {pillarLabel}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
