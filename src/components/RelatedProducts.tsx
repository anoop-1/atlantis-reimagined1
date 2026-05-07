import { Link } from "react-router-dom";
import { Database, Cog, Shield, FileText, GraduationCap } from "lucide-react";

/**
 * Cross-link block for blog posts → product pillars.
 * Inserted at end of every blog post to distribute PageRank
 * from blog content cluster (high authority) to product pillars
 * (Reporting / ERP / Digital Twins / Consulting / Training).
 */

interface Product {
  href: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

const ALL_PRODUCTS: Product[] = [
  {
    href: "/best-ndt-reporting-software-2026",
    title: "NDT Reporting Software",
    description: "API 510/570/653 + ASME V templates, mobile offline capture, eIDAS signing, AI-drafted findings with Level III approval gate.",
    icon: FileText,
  },
  {
    href: "/ndt-erp-solution",
    title: "NDT ERP Software",
    description: "ASNT SNT-TC-1A certification matrix, ASTM E797 calibration tracking, project P&L, native QuickBooks/SAP/Maximo integrations.",
    icon: Database,
  },
  {
    href: "/digital-twins",
    title: "NDT Digital Twins",
    description: "3D asset visualization with live UT thickness heat-maps, RT defect overlay, API 579-1 FFS, API 581 RBI, predictive maintenance.",
    icon: Cog,
  },
  {
    href: "/consulting",
    title: "ASNT Level III Consulting",
    description: "Independent Level III procedure approval, written-practice authoring, audit support for ADNOC/Aramco/QatarEnergy/NRC.",
    icon: Shield,
  },
  {
    href: "/training",
    title: "NDT Training Programs",
    description: "Level I/II/III courses across UT, RT, MT, PT, ET, VT. ASNT SNT-TC-1A + ISO 9712 + NAS 410 aligned. Online + onsite.",
    icon: GraduationCap,
  },
];

interface RelatedProductsProps {
  /** Tags from the blog post — used to weight which products surface first. */
  tags?: string[];
  /** How many products to show. Default 3. */
  count?: number;
  /** Optional headline override. */
  heading?: string;
}

function pickRelevant(tags: string[] = [], count = 3): Product[] {
  const lower = tags.map(t => t.toLowerCase()).join(" ");

  // Score each product by tag relevance — products always have a baseline so
  // every blog post still surfaces a 3-card block (no empty state).
  const scored = ALL_PRODUCTS.map(p => {
    let score = 1; // baseline so we always have ≥3 candidates
    if (/(report|inspection.report|api.510|api.570|api.653|asme.*v)/i.test(lower)) {
      if (p.href.includes("reporting")) score += 5;
    }
    if (/(erp|business|invoice|certification|calibration|project.management)/i.test(lower)) {
      if (p.href.includes("erp")) score += 5;
    }
    if (/(digital.twin|3d|visuali|rbi|ffs|api.579|api.581|asset.integrity)/i.test(lower)) {
      if (p.href.includes("digital-twins")) score += 5;
    }
    if (/(level.iii|consulting|written.practice|audit|procedure|asnt)/i.test(lower)) {
      if (p.href.includes("consulting")) score += 4;
    }
    if (/(training|course|level.i|level.ii|exam|certification|asnt|iso.9712|cwi)/i.test(lower)) {
      if (p.href.includes("training")) score += 4;
    }
    return { p, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map(x => x.p);
}

export function RelatedProducts({ tags = [], count = 3, heading = "Atlantis NDT Platforms" }: RelatedProductsProps) {
  const products = pickRelevant(tags, count);
  return (
    <aside aria-label="Related Atlantis NDT platforms" className="mt-12 mb-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{heading}</h3>
        <p className="text-sm text-slate-600">
          Software and services from the Atlantis NDT team — built by ASNT Level III practitioners.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map(p => {
          const Icon = p.icon;
          return (
            <Link
              key={p.href}
              to={p.href}
              className="block bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md hover:border-primary/40 transition group"
            >
              <Icon className="w-7 h-7 text-primary mb-3" />
              <h4 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition">
                {p.title}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">{p.description}</p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
