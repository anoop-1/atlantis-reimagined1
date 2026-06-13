import { Link } from "react-router-dom";
import { Database, Boxes, GraduationCap, Briefcase, BookOpen, Sparkles, ArrowRight } from "lucide-react";

export type RelatedGuideIcon = "erp" | "dt" | "cert" | "consulting" | "blog" | "training";

export interface RelatedGuide {
  title: string;
  href: string;
  description?: string;
  icon?: RelatedGuideIcon;
}

const ICONS: Record<RelatedGuideIcon, React.ComponentType<{ className?: string }>> = {
  erp: Database,
  dt: Sparkles,
  cert: GraduationCap,
  consulting: Briefcase,
  blog: BookOpen,
  training: Boxes,
};

const ACCENT: Record<RelatedGuideIcon, string> = {
  erp: "from-emerald-500/10 to-emerald-500/5 border-emerald-500/30 text-emerald-300 hover:border-emerald-500/60",
  dt: "from-blue-500/10 to-blue-500/5 border-blue-500/30 text-blue-300 hover:border-blue-500/60",
  cert: "from-amber-500/10 to-amber-500/5 border-amber-500/30 text-amber-300 hover:border-amber-500/60",
  consulting: "from-purple-500/10 to-purple-500/5 border-purple-500/30 text-purple-300 hover:border-purple-500/60",
  blog: "from-slate-500/10 to-slate-500/5 border-slate-500/30 text-slate-300 hover:border-slate-500/60",
  training: "from-rose-500/10 to-rose-500/5 border-rose-500/30 text-rose-300 hover:border-rose-500/60",
};

export default function RelatedGuidesBlock({ links, heading = "Related guides" }: { links: RelatedGuide[]; heading?: string }) {
  if (!links || links.length === 0) return null;
  return (
    <section className="my-12 sm:my-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-900 dark:text-white">{heading}</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {links.map((link, i) => {
          const iconKey = link.icon || "blog";
          const Icon = ICONS[iconKey];
          const accent = ACCENT[iconKey];
          return (
            <Link
              key={i}
              to={link.href}
              className={`group block p-5 rounded-xl bg-gradient-to-br ${accent} border transition-colors`}
            >
              <div className="flex items-start gap-3 mb-2">
                <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <h3 className="font-semibold text-base leading-snug">{link.title}</h3>
              </div>
              {link.description && (
                <p className="text-sm opacity-80 mb-3 leading-relaxed">{link.description}</p>
              )}
              <span className="inline-flex items-center gap-1 text-sm font-medium opacity-90 group-hover:opacity-100">
                Read <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
