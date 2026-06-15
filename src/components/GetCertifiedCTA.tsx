import { Link } from "react-router-dom";
import { Award, ArrowRight } from "lucide-react";

/**
 * Cannibalization-fix CTA. Place on informational blog posts that compete
 * with their sibling commercial certification page. Pushes the buyer-intent
 * user from blog → cert page where conversion happens.
 */
export default function GetCertifiedCTA({
  cert,
  href,
  benefit,
}: {
  cert: string; // e.g. "API 653"
  href: string; // e.g. "/api-653-certification"
  benefit?: string; // e.g. "Authorized Tank Inspector"
}) {
  return (
    <aside
      className="my-8 sm:my-10 rounded-xl bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/40 dark:to-orange-950/40 border border-amber-300/60 dark:border-amber-700/60 p-5 sm:p-6 shadow-sm"
      role="complementary"
    >
      <div className="flex items-start gap-4">
        <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-lg bg-amber-200/50 dark:bg-amber-800/40 flex-shrink-0">
          <Award className="w-6 h-6 text-amber-700 dark:text-amber-300" aria-hidden />
        </div>
        <div className="flex-1">
          <h2 className="text-lg sm:text-xl font-bold text-amber-900 dark:text-amber-100 mb-1">
            Get your {cert} certification — fast track
          </h2>
          <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 mb-3 leading-relaxed">
            ASNT Level III-led prep + practice exams{benefit ? ` to qualify as ${benefit}` : ""}. Affordable, accessible, fully customizable cohorts — online + in-person.
          </p>
          <Link
            to={href}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-semibold transition-colors text-sm sm:text-base"
          >
            See {cert} prep program <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
}
