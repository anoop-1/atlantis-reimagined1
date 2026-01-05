import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface BreadcrumbsProps {
    items?: BreadcrumbItem[];
    className?: string;
}

// Route to readable label mapping
const routeLabels: Record<string, string> = {
    '': 'Home',
    'about': 'About Us',
    'training': 'Training',
    'training-usa': 'USA Training',
    'training-me': 'Middle East Training',
    'training-india': 'India Training',
    'consulting': 'Consulting',
    'consulting-usa': 'USA Consulting',
    'consulting-me': 'Middle East Consulting',
    'consulting-india': 'India Consulting',
    'blog': 'Blog',
    'faq': 'FAQ',
    'ndt-methods': 'NDT Methods',
    'contact': 'Contact',
    'digital-twins': 'Digital Twins',
    'ultrasonic-testing': 'Ultrasonic Testing',
    'radiographic-testing': 'Radiographic Testing',
    'magnetic-particle-testing': 'Magnetic Particle Testing',
    'penetrant-testing': 'Penetrant Testing',
    'eddy-current-testing': 'Eddy Current Testing',
    'visual-testing': 'Visual Testing',
};

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items, className = '' }) => {
    const location = useLocation();

    // Auto-generate breadcrumbs from current path if items not provided
    const breadcrumbItems: BreadcrumbItem[] = items || (() => {
        const pathSegments = location.pathname.split('/').filter(Boolean);
        const crumbs: BreadcrumbItem[] = [{ label: 'Home', href: '/' }];

        let currentPath = '';
        pathSegments.forEach((segment, index) => {
            currentPath += `/${segment}`;
            const label = routeLabels[segment] || segment.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

            // Last item has no href (current page)
            if (index === pathSegments.length - 1) {
                crumbs.push({ label });
            } else {
                crumbs.push({ label, href: currentPath });
            }
        });

        return crumbs;
    })();

    // Generate BreadcrumbList structured data
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.label,
            "item": item.href
                ? `https://atlantisndt.com${item.href}`
                : `https://atlantisndt.com${location.pathname}`
        }))
    };

    // Don't show breadcrumbs on homepage
    if (location.pathname === '/') {
        return null;
    }

    return (
        <>
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />

            {/* Visual Breadcrumbs */}
            <nav
                aria-label="Breadcrumb"
                className={`pt-20 py-3 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b ${className}`}
            >
                <ol className="flex items-center gap-1 text-sm max-w-6xl mx-auto flex-wrap">
                    {breadcrumbItems.map((item, index) => (
                        <li key={index} className="flex items-center">
                            {index > 0 && (
                                <ChevronRight className="w-4 h-4 mx-1 text-slate-400 flex-shrink-0" />
                            )}

                            {index === 0 && (
                                <Home className="w-4 h-4 mr-1 text-slate-500" />
                            )}

                            {item.href ? (
                                <Link
                                    to={item.href}
                                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-slate-600 font-medium" aria-current="page">
                                    {item.label}
                                </span>
                            )}
                        </li>
                    ))}
                </ol>
            </nav>
        </>
    );
};

export default Breadcrumbs;
