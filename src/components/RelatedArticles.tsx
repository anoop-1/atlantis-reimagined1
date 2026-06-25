import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import blogsData from '@/data/blogs.json';

interface Article {
    title: string;
    href: string;
    description?: string;
}

interface RelatedArticlesProps {
    currentSlug?: string;
    category?: string;
    maxArticles?: number;
    className?: string;
}

/**
 * Round-3 Phase 6 — slug-keyword classifier-driven Related Articles.
 *
 * Replaces the prior 24-article hand-coded category map (which left 250+
 * blogs falling through to a default UT-only bucket showing irrelevant
 * suggestions). Now classifies every blog by slug + title + category
 * keywords into one of ~20 topic clusters, then picks 3 siblings from the
 * same cluster.
 *
 * Falls back to `general` cluster (sampling across all blogs) if the
 * cluster has no other entries.
 */

type ClusterKey =
    | 'asnt-cert'
    | 'api-code'
    | 'cswip-aws'
    | 'nace-coating'
    | 'method-ut'
    | 'method-rt'
    | 'method-mt-pt-vt-et'
    | 'consulting'
    | 'rbi-ffs'
    | 'digital-twin'
    | 'erp-reporting'
    | 'marine-offshore'
    | 'aerospace'
    | 'refining-petrochem'
    | 'lng-hydrogen-ccs'
    | 'power-gen'
    | 'mining'
    | 'training-career'
    | 'roi-case-study'
    | 'compare'
    | 'general';

function classify(slug: string, title: string = '', category: string = ''): ClusterKey {
    const s = (slug + ' ' + title + ' ' + category).toLowerCase();

    if (/asnt|snt-tc-1a|cp-189|level\s*(i|ii|iii|3)/.test(s)) return 'asnt-cert';
    if (/api[- ]?(510|570|580|581|579|653|571|936|1169|icp)/.test(s)) return 'api-code';
    if (/cswip|cwi|scwi|aws[- ]?d/.test(s)) return 'cswip-aws';
    if (/nace|ampp|cip|sp02|sour|mr0175|mr0103|coating|bgas/.test(s)) return 'nace-coating';
    if (/paut|tofd|ultrasonic|\but\b|lrut|immersion|guided[- ]wave|eca/.test(s)) return 'method-ut';
    if (/radiograph|\brt\b|gamma|x-?ray|iqi/.test(s)) return 'method-rt';
    if (/magnetic[- ]particle|\bmt\b|penetrant|\bpt\b|visual\s+(test|inspec)|\bvt\b|eddy[- ]current|\bet\b|acoustic[- ]emission|\bae\b|leak[- ]test|irt|thermograph|holiday/.test(s)) return 'method-mt-pt-vt-et';
    if (/consulting|level\s*iii\s*consult|outsourced[- ]?level/.test(s)) return 'consulting';
    if (/\brbi\b|api\s*581|fitness[- ]for[- ]service|\bffs\b|api\s*579|damage[- ]mechanism|api\s*571/.test(s)) return 'rbi-ffs';
    if (/digital[- ]twin|3d[- ]model|3d[- ]scan|lidar|photogrammet/.test(s)) return 'digital-twin';
    if (/\berp\b|inspection[- ]software|reporting[- ]software|cmms|eam|atlantis[- ]ndt/.test(s)) return 'erp-reporting';
    if (/marine|offshore|fpso|drydock|jackup|subsea|iacs|class[- ]society/.test(s)) return 'marine-offshore';
    if (/aerospace|aviation|aircraft|airbus|boeing|nas[- ]?410|en[- ]?4179/.test(s)) return 'aerospace';
    if (/refining|refinery|petrochem|fcc|cracker|reformer|amine/.test(s)) return 'refining-petrochem';
    if (/\blng\b|hydrogen|electrolys|\bccs\b|carbon[- ]capture|co2/.test(s)) return 'lng-hydrogen-ccs';
    if (/power[- ]gen|boiler|hrsg|condens|turbine|nuclear/.test(s)) return 'power-gen';
    if (/mining|haul[- ]?truck|drag[- ]?line|tailings/.test(s)) return 'mining';
    if (/training|cohort|exam|course|career|salary/.test(s)) return 'training-career';
    if (/case[- ]?study|roi|outcomes|customer/.test(s)) return 'roi-case-study';
    if (/\bvs\b|compare|comparison|versus|compared/.test(s)) return 'compare';
    return 'general';
}

// Build cluster index once from the imported blogs.json
const ALL_BLOGS = (blogsData as any[]).filter(b => b && b.slug && b.title);

const CLUSTER_INDEX: Partial<Record<ClusterKey, Article[]>> = {};
for (const b of ALL_BLOGS) {
    const k = classify(b.slug, b.title || '', b.category || '');
    if (!CLUSTER_INDEX[k]) CLUSTER_INDEX[k] = [];
    CLUSTER_INDEX[k]!.push({
        title: b.title.replace(/\s*\|\s*Atlantis.*$/i, '').trim(),
        href: `/blog/${b.slug}`,
        description: (b.metaDescription || b.snippet || '').slice(0, 140),
    });
}

// Build general fallback by sampling across the 5 largest non-general clusters
const GENERAL_FALLBACK: Article[] = (() => {
    const sortedClusters = (Object.keys(CLUSTER_INDEX) as ClusterKey[])
        .filter(k => k !== 'general')
        .sort((a, b) => (CLUSTER_INDEX[b]?.length || 0) - (CLUSTER_INDEX[a]?.length || 0))
        .slice(0, 5);
    const out: Article[] = [];
    for (const k of sortedClusters) {
        const items = CLUSTER_INDEX[k] || [];
        if (items.length > 0) out.push(items[0]);
    }
    return out;
})();

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
    currentSlug = '',
    category,
    maxArticles = 3,
    className = '',
}) => {
    const cluster = (category as ClusterKey) || classify(currentSlug);
    const pool = CLUSTER_INDEX[cluster] || [];
    const articles = pool
        .filter(a => !a.href.endsWith('/' + currentSlug))
        .slice(0, maxArticles);

    // Fallback to general pool if cluster too thin
    const finalArticles = articles.length >= maxArticles
        ? articles
        : [...articles, ...GENERAL_FALLBACK.filter(a => !a.href.endsWith('/' + currentSlug))].slice(0, maxArticles);

    if (finalArticles.length === 0) return null;

    return (
        <section className={`bg-slate-100 rounded-xl p-6 ${className}`}>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Related Articles</h3>
            <ul className="space-y-4">
                {finalArticles.map((article, index) => (
                    <li key={index}>
                        <Link
                            to={article.href}
                            className="group block hover:bg-white p-3 rounded-lg transition -m-3"
                        >
                            <h4 className="font-medium text-[#004aad] group-hover:underline flex items-center gap-1">
                                {article.title}
                                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                            </h4>
                            {article.description && (
                                <p className="text-sm text-slate-600 mt-1">{article.description}</p>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default RelatedArticles;
