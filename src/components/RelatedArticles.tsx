import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Article {
    title: string;
    href: string;
    description?: string;
}

interface RelatedArticlesProps {
    currentSlug?: string;
    category?: 'ndt-methods' | 'training' | 'consulting' | 'digital-twins';
    maxArticles?: number;
    className?: string;
}

// Define all articles grouped by category
const articlesByCategory: Record<string, Article[]> = {
    'ndt-methods': [
        { title: 'Ultrasonic Testing (UT) Guide', href: '/blog/ultrasonic-testing', description: 'High-frequency sound wave inspection for welds and thickness measurement.' },
        { title: 'Radiographic Testing (RT) Guide', href: '/blog/radiographic-testing', description: 'X-ray and gamma ray imaging for internal defect detection.' },
        { title: 'Magnetic Particle Testing (MT) Guide', href: '/blog/magnetic-particle-testing', description: 'Surface and near-surface defect detection in ferromagnetic materials.' },
        { title: 'Penetrant Testing (PT) Guide', href: '/blog/penetrant-testing', description: 'Liquid dye inspection for surface-breaking defects.' },
        { title: 'Eddy Current Testing (ET) Guide', href: '/blog/eddy-current-testing', description: 'Electromagnetic inspection for tubing and conductivity testing.' },
        { title: 'Visual Testing (VT) Guide', href: '/blog/visual-testing', description: 'Direct visual and remote inspection methods.' },
    ],
    'training': [
        { title: 'NDT Training Complete Guide', href: '/blog/ndt-training-complete-guide-courses-certification-global', description: 'Comprehensive guide to NDT training and certification.' },
        { title: 'NDT Career Guide 2025', href: '/blog/ndt-career-top-choice-2025-global-market-trends', description: 'Career opportunities in non-destructive testing.' },
        { title: 'NDT Training vs Certification', href: '/blog/ndt-training-vs-certification-2025-oil-gas-expectations', description: 'Understanding the difference between training and certification.' },
        { title: 'NDT Salary Guide', href: '/blog/ndt-salary-guide-2025-global-level-1-2-3', description: 'Salary expectations for NDT professionals worldwide.' },
    ],
    'consulting': [
        { title: 'ASNT Level III Consulting Guide', href: '/blog/asnt-level-iii-ndt-consulting-guide', description: 'Expert guide to Level III consulting services.' },
        { title: 'NDT Level III Services Guide', href: '/blog/ndt-level-iii-consulting-services-guide', description: 'Comprehensive Level III consulting overview.' },
        { title: 'NDT Consulting Q&A', href: '/blog/ndt-consulting-questions-answered-by-level-iii-expert', description: 'Common questions answered by Level III experts.' },
    ],
    'digital-twins': [
        { title: 'Digital Twins for NDT Reporting', href: '/blog/digital-twins-ndt-reporting-oil-gas-asset-integrity', description: 'How digital twins transform NDT reporting.' },
        { title: 'Digital Twins Reduce Turnaround Time', href: '/blog/digital-twins-reduce-refinery-turnaround-time', description: 'Using digital twins for faster refinery turnarounds.' },
        { title: 'Ultimate Guide to NDT Digital Twins', href: '/blog/ultimate-guide-ndt-digital-twins-asset-integrity-2025', description: 'Complete guide to implementing digital twins for NDT.' },
        { title: 'Digital Twin Roadmap', href: '/blog/digital-twin-roadmap-oil-gas-companies-asset-integrity', description: 'Implementation roadmap for oil and gas companies.' },
    ],
};

// Determine category from slug
const getCategoryFromSlug = (slug: string): string => {
    const ndtMethods = ['ultrasonic', 'radiographic', 'magnetic', 'penetrant', 'eddy', 'visual'];
    if (ndtMethods.some(method => slug.includes(method))) return 'ndt-methods';
    if (slug.includes('training') || slug.includes('career') || slug.includes('salary')) return 'training';
    if (slug.includes('consulting') || slug.includes('level-iii')) return 'consulting';
    if (slug.includes('digital-twin')) return 'digital-twins';
    return 'ndt-methods'; // default
};

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({
    currentSlug = '',
    category,
    maxArticles = 3,
    className = ''
}) => {
    // Determine category from prop or infer from currentSlug
    const effectiveCategory = category || getCategoryFromSlug(currentSlug);

    // Get articles for category and filter out current article
    const articles = (articlesByCategory[effectiveCategory] || articlesByCategory['ndt-methods'])
        .filter(article => !article.href.includes(currentSlug))
        .slice(0, maxArticles);

    if (articles.length === 0) return null;

    return (
        <section className={`bg-slate-100 rounded-xl p-6 ${className}`}>
            <h3 className="text-xl font-bold mb-4 text-slate-900">Related Articles</h3>
            <ul className="space-y-4">
                {articles.map((article, index) => (
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
