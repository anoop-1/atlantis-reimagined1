import { Link } from "react-router-dom";
import { Database, Cog, Shield, FileText, GraduationCap } from "lucide-react";
import {
  cityHasProductPage,
  productCityHref,
  type CityProduct,
} from "@/data/curated-cities";

/**
 * Cross-link block for blog posts → product pillars.
 * Inserted at end of every blog post to distribute PageRank
 * from blog content cluster (high authority) to product pillars
 * (Reporting / ERP / Digital Twins / Consulting / Training).
 *
 * NOTE: There are now TWO modes:
 *
 *   1. <RelatedProducts tags={...} />               → blog-page mode (legacy)
 *      Picks 3 product pillars based on post tags. Unchanged.
 *
 *   2. <RelatedCityProducts currentProduct="..." citySlug="..." city="..." />
 *      City-page sibling-link mode. Renders up to 4 sibling-city links —
 *      one per other product line that has a page for this city.
 *      ONLY renders links whose target page actually exists
 *      (gated by cityHasProductPage in src/data/curated-cities.ts),
 *      so it never emits a broken internal link.
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

// ─────────────────────────────────────────────────────────────────────────────
// City-sibling mode
// ─────────────────────────────────────────────────────────────────────────────

/** Metadata for each product line in the city-sibling block. */
const CITY_PRODUCT_META: Record<CityProduct, { title: string; description: (city: string) => string; icon: React.ComponentType<{ className?: string }> }> = {
  "digital-twin": {
    title: "NDT Digital Twin",
    description: (city) => `3D asset visualisation with live UT, RT and FFS data for ${city} operators.`,
    icon: Cog,
  },
  "erp": {
    title: "NDT ERP Software",
    description: (city) => `Inspection management, certification tracking and API-format reporting for ${city} NDT teams.`,
    icon: Database,
  },
  "reporting": {
    title: "NDT Reporting Software",
    description: (city) => `Mobile offline capture and API 510/570/653 PDF auto-generation in ${city}.`,
    icon: FileText,
  },
  "training": {
    title: "NDT Training",
    description: (city) => `ASNT Level I/II/III certification courses delivered in ${city}.`,
    icon: GraduationCap,
  },
  "consulting": {
    title: "ASNT Level III Consulting",
    description: (city) => `Independent Level III procedure approval and audit support in ${city}.`,
    icon: Shield,
  },
};

/** Fixed display order for sibling-city links. */
const PRODUCT_ORDER: readonly CityProduct[] = [
  "digital-twin",
  "erp",
  "reporting",
  "training",
  "consulting",
];

interface RelatedCityProductsProps {
  /** The product line of the page rendering this block — excluded from siblings. */
  currentProduct: CityProduct;
  /** Slug of the city (e.g. "houston", "abu-dhabi"). */
  citySlug: string;
  /** Display name of the city (e.g. "Houston"). Defaults to title-cased slug. */
  city?: string;
  /** Optional max number of sibling links to render. Default 4. */
  maxLinks?: number;
  /** Optional headline override. */
  heading?: string;
}

/**
 * Title-case a slug fragment when no explicit city name is provided.
 * "abu-dhabi" → "Abu Dhabi"
 */
function slugToDisplayName(slug: string): string {
  return slug
    .split("-")
    .map((w) => (w.length === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)))
    .join(" ");
}

/**
 * City-scoped sibling-product cross-link block. Renders up to `maxLinks`
 * sibling-city links — one for each product line OTHER than `currentProduct`
 * that actually has a page for `citySlug`. Links whose target page does not
 * exist are silently dropped, so this never emits a broken internal link.
 *
 * If no siblings exist for this city, nothing is rendered.
 */
export function RelatedCityProducts({
  currentProduct,
  citySlug,
  city,
  maxLinks = 4,
  heading,
}: RelatedCityProductsProps) {
  const cityName = city ?? slugToDisplayName(citySlug);

  const siblings = PRODUCT_ORDER
    .filter((p) => p !== currentProduct)
    .filter((p) => cityHasProductPage(p, citySlug))
    .slice(0, maxLinks)
    .map((p) => ({
      product: p,
      href: productCityHref(p, citySlug),
      meta: CITY_PRODUCT_META[p],
    }));

  if (siblings.length === 0) {
    return null;
  }

  const finalHeading = heading ?? `Related Atlantis NDT Solutions in ${cityName}`;

  return (
    <aside
      aria-label={`Related Atlantis NDT solutions in ${cityName}`}
      className="my-12 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200"
    >
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">{finalHeading}</h2>
        <p className="text-sm text-slate-600 max-w-2xl mx-auto">
          Explore the full Atlantis NDT platform for {cityName} — built by ASNT
          Level III practitioners for inspection teams in your region.
        </p>
      </div>
      <div className={`grid gap-4 sm:grid-cols-2 ${siblings.length >= 4 ? "lg:grid-cols-4" : siblings.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2"}`}>
        {siblings.map(({ product, href, meta }) => {
          const Icon = meta.icon;
          return (
            <Link
              key={product}
              to={href}
              aria-label={`${meta.title} in ${cityName}`}
              className="block bg-white p-5 rounded-xl border border-slate-200 hover:shadow-md hover:border-primary/40 transition group"
            >
              <Icon className="w-7 h-7 text-primary mb-3" aria-hidden="true" />
              <h3 className="font-bold text-slate-900 mb-2 group-hover:text-primary transition">
                {meta.title} {cityName}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {meta.description(cityName)}
              </p>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
