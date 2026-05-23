import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import glossary from '@/data/glossary.json';

interface GlossaryEntry {
  slug: string;
  term: string;
  shortDefinition: string;
  definition: string;
  relatedTerms: string[];
  relatedBlogs: string[];
  category: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  method: 'NDT Methods',
  equipment: 'Equipment & Probes',
  procedure: 'Procedures & Techniques',
  physics: 'Physics & Theory',
  defect: 'Defects & Damage',
  standard: 'Codes & Standards',
  certification: 'Certification & Qualification',
  data: 'Inspection Data & Assessment',
  safety: 'Safety & Compliance',
  'asset-type': 'Asset Types & Equipment',
};

const CATEGORY_ORDER = [
  'method',
  'equipment',
  'procedure',
  'physics',
  'defect',
  'standard',
  'certification',
  'data',
  'safety',
  'asset-type',
];

export default function Glossary() {
  const [query, setQuery] = useState('');

  const entries = glossary as GlossaryEntry[];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) =>
        e.term.toLowerCase().includes(q) ||
        e.slug.toLowerCase().includes(q) ||
        e.shortDefinition.toLowerCase().includes(q),
    );
  }, [entries, query]);

  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryEntry[]>();
    for (const cat of CATEGORY_ORDER) map.set(cat, []);
    for (const entry of filtered) {
      if (!map.has(entry.category)) map.set(entry.category, []);
      map.get(entry.category)!.push(entry);
    }
    for (const arr of map.values()) {
      arr.sort((a, b) => a.term.localeCompare(b.term));
    }
    return map;
  }, [filtered]);

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'DefinedTermSet',
          name: 'Atlantis NDT Glossary',
          description:
            'Comprehensive glossary of non-destructive testing (NDT) terminology covering methods, equipment, defects, standards, certifications, and asset types.',
          url: 'https://atlantisndt.com/glossary',
          inDefinedTermSet: 'https://atlantisndt.com/glossary',
          hasDefinedTerm: entries.slice(0, 50).map((e) => ({
            '@type': 'DefinedTerm',
            name: e.term,
            url: `https://atlantisndt.com/glossary/${e.slug}`,
            description: e.shortDefinition,
            termCode: e.slug,
          })),
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://atlantisndt.com' },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Glossary',
              item: 'https://atlantisndt.com/glossary',
            },
          ],
        },
      ],
    }),
    [entries],
  );

  const totalCount = entries.length;

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title="NDT Glossary - 200+ Non-Destructive Testing Terms Defined"
        description="Comprehensive NDT glossary with 200+ terms covering ultrasonic, radiographic, magnetic particle, penetrant, and eddy current testing methods, equipment, defects, standards, and certifications."
        keywords="NDT glossary, non-destructive testing terms, NDT definitions, UT RT MT PT ET terminology, ASME ASTM API glossary"
        canonical="https://atlantisndt.com/glossary"
        structuredData={structuredData}
      />

      <section className="py-12 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span>Glossary</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">NDT Glossary</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            {totalCount}+ non-destructive testing terms defined by ASNT Level III professionals — covering
            ultrasonic, radiographic, magnetic particle, penetrant, and eddy current testing, plus codes
            (ASME, API, ISO, AWS), defects, certifications, and asset types.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mb-8">
            <Input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search terms — e.g. PAUT, ASME Section V, lift-off, MAWP..."
              aria-label="Search glossary"
              className="text-lg py-6"
            />
            {query && (
              <p className="text-sm text-muted-foreground mt-2">
                {filtered.length} of {totalCount} terms match "{query}"
              </p>
            )}
          </div>

          {CATEGORY_ORDER.map((cat) => {
            const items = grouped.get(cat) || [];
            if (items.length === 0) return null;
            return (
              <div key={cat} className="mb-10">
                <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-primary/30">
                  {CATEGORY_LABELS[cat] || cat} ({items.length})
                </h2>
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                      {items.map((entry) => (
                        <li key={entry.slug}>
                          <Link
                            to={`/glossary/${entry.slug}`}
                            className="text-primary hover:underline font-medium"
                          >
                            {entry.term}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-10">
              No terms match "{query}". Try a different keyword.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
