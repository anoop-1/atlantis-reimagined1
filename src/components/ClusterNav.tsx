import { Link, useLocation } from "react-router-dom";
import { ArrowRight, Layers } from "lucide-react";

/**
 * ClusterNav — internal-link cluster module rendered near the bottom of every
 * page belonging to a topic hub (API 510, API 570, API 653). Push hub authority
 * across siblings, give Google a clean topic graph, and surface contextual
 * sibling pages to readers. Active page (matched against react-router's
 * useLocation pathname) is rendered as <span aria-current="page"> instead of
 * an anchor — avoids self-links while keeping the visual cluster intact.
 *
 * Pure presentational. No data fetching, no side effects.
 */

type ClusterKey = "api-510" | "api-570" | "api-653";

interface ClusterDef {
    title: string;
    accent: string;          // Tailwind text colour for accents (text-red-700 etc.)
    accentBg: string;        // Tailwind bg colour for the heading icon (bg-red-50 etc.)
    accentBorder: string;    // Tailwind left-border colour
    hoverText: string;       // Static hover text class (Tailwind JIT cannot scan interpolated class names)
    hoverArrow: string;      // Static hover text class for the arrow icon
    hub: { href: string; label: string };
    links: { href: string; label: string }[];
}

const CLUSTERS: Record<ClusterKey, ClusterDef> = {
    "api-510": {
        title: "Related API 510 Resources",
        accent: "text-red-700",
        accentBg: "bg-red-50",
        accentBorder: "border-l-red-500",
        hoverText: "hover:text-red-700",
        hoverArrow: "group-hover:text-red-700",
        hub: { href: "/api-510-certification", label: "API 510 Certification (Hub)" },
        links: [
            { href: "/api-510-certification", label: "API 510 Certification Overview" },
            { href: "/api-510-training", label: "API 510 Training Course" },
            { href: "/blog/api-510-pressure-vessel-inspection-code", label: "API 510 Pressure Vessel Inspection Code" },
            { href: "/blog/api-510-exam-prep-study-guide-tips", label: "API 510 Exam Prep & Study Guide" },
            { href: "/blog/api-510-practice-questions", label: "API 510 Practice Questions" },
            { href: "/blog/api-510-vs-570-comparison", label: "API 510 vs API 570 Comparison" },
        ],
    },
    "api-570": {
        title: "Related API 570 Resources",
        accent: "text-blue-700",
        accentBg: "bg-blue-50",
        accentBorder: "border-l-blue-600",
        hoverText: "hover:text-blue-700",
        hoverArrow: "group-hover:text-blue-700",
        hub: { href: "/api-570-certification", label: "API 570 Certification (Hub)" },
        links: [
            { href: "/api-570-certification", label: "API 570 Certification Overview" },
            { href: "/api-570-training", label: "API 570 Training Course" },
            { href: "/blog/api-570-piping-inspection-code-requirements", label: "API 570 Piping Inspection Code Requirements" },
            { href: "/blog/api-570-piping-inspector-exam-requirements", label: "API 570 Piping Inspector Exam Requirements" },
            { href: "/blog/api-570-practice-questions", label: "API 570 Practice Questions" },
            { href: "/blog/api-510-vs-570-comparison", label: "API 510 vs API 570 Comparison" },
        ],
    },
    "api-653": {
        title: "Related API 653 Resources",
        accent: "text-amber-700",
        accentBg: "bg-amber-50",
        accentBorder: "border-l-amber-500",
        hoverText: "hover:text-amber-700",
        hoverArrow: "group-hover:text-amber-700",
        hub: { href: "/api-653-certification", label: "API 653 Certification (Hub)" },
        links: [
            { href: "/api-653-certification", label: "API 653 Certification Overview" },
            { href: "/api-653-training", label: "API 653 Training Course" },
            { href: "/api-653-tank-inspection-guide", label: "API 653 Tank Inspection Guide" },
            { href: "/blog/api-653-certification-complete-guide", label: "API 653 Certification: Complete Guide" },
            { href: "/blog/api-653-practice-questions", label: "API 653 Practice Questions" },
            { href: "/blog/api-653-storage-tank-inspector-certification", label: "API 653 Storage Tank Inspector Certification" },
            { href: "/blog/api-653-tank-inspection-guide", label: "API 653 Tank Inspection Guide (Blog)" },
        ],
    },
};

interface ClusterNavProps {
    cluster: ClusterKey;
}

export default function ClusterNav({ cluster }: ClusterNavProps) {
    const def = CLUSTERS[cluster];
    const location = useLocation();
    const currentPath = location.pathname.replace(/\/+$/, "") || "/";

    if (!def) return null;

    return (
        <section className="py-12 bg-slate-50" aria-label={def.title}>
            <div className="container mx-auto max-w-5xl px-6">
                <div className={`rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden border-l-4 ${def.accentBorder}`}>
                    <div className={`flex items-center gap-3 px-6 py-4 ${def.accentBg} border-b border-slate-100`}>
                        <Layers className={`w-5 h-5 ${def.accent}`} />
                        <h2 className={`text-lg font-bold ${def.accent} m-0`}>{def.title}</h2>
                    </div>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 p-6 m-0 list-none">
                        {def.links.map((l) => {
                            const normalised = l.href.replace(/\/+$/, "") || "/";
                            const isActive = normalised === currentPath;
                            return (
                                <li key={l.href} className="border-b border-slate-100 last:border-b-0 sm:border-b-0">
                                    {isActive ? (
                                        <span
                                            aria-current="page"
                                            className={`flex items-center justify-between gap-2 py-2 text-sm font-semibold ${def.accent}`}
                                        >
                                            <span className="truncate">{l.label}</span>
                                            <span className="text-xs uppercase tracking-wide opacity-70">Current</span>
                                        </span>
                                    ) : (
                                        <Link
                                            to={l.href}
                                            className={`group flex items-center justify-between gap-2 py-2 text-sm text-slate-700 ${def.hoverText} transition`}
                                        >
                                            <span className="truncate group-hover:underline">{l.label}</span>
                                            <ArrowRight className={`w-4 h-4 text-slate-400 ${def.hoverArrow} transition flex-shrink-0`} />
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
}
