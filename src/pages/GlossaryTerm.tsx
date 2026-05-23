import { useMemo } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import glossary from '@/data/glossary.json';
import blogs from '@/data/blogs.json';

interface GlossaryEntry {
  slug: string;
  term: string;
  shortDefinition: string;
  definition: string;
  relatedTerms: string[];
  relatedBlogs: string[];
  category: string;
}

interface BlogEntry {
  slug: string;
  title: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  method: 'NDT Method',
  equipment: 'Equipment',
  procedure: 'Procedure',
  physics: 'Physics & Theory',
  defect: 'Defect / Damage Mechanism',
  standard: 'Code / Standard',
  certification: 'Certification',
  data: 'Inspection Data',
  safety: 'Safety',
  'asset-type': 'Asset Type',
};

export default function GlossaryTerm() {
  const { slug } = useParams<{ slug: string }>();
  const entries = glossary as GlossaryEntry[];
  const allBlogs = blogs as BlogEntry[];

  const entry = useMemo(() => entries.find((e) => e.slug === slug), [entries, slug]);

  const relatedTermEntries = useMemo(() => {
    if (!entry) return [];
    return entry.relatedTerms
      .map((s) => entries.find((e) => e.slug === s))
      .filter((e): e is GlossaryEntry => !!e);
  }, [entry, entries]);

  const relatedBlogEntries = useMemo(() => {
    if (!entry) return [];
    return entry.relatedBlogs
      .map((s) => allBlogs.find((b) => b.slug === s))
      .filter((b): b is BlogEntry => !!b);
  }, [entry, allBlogs]);

  const structuredData = useMemo(() => {
    if (!entry) return null;
    return {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'DefinedTerm',
          '@id': `https://atlantisndt.com/glossary/${entry.slug}`,
          name: entry.term,
          url: `https://atlantisndt.com/glossary/${entry.slug}`,
          description: entry.shortDefinition,
          termCode: entry.slug,
          inDefinedTermSet: 'https://atlantisndt.com/glossary',
        },
        {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://atlantisndt.com' },
            { '@type': 'ListItem', position: 2, name: 'Glossary', item: 'https://atlantisndt.com/glossary' },
            {
              '@type': 'ListItem',
              position: 3,
              name: entry.term,
              item: `https://atlantisndt.com/glossary/${entry.slug}`,
            },
          ],
        },
      ],
    };
  }, [entry]);

  if (!slug) return <Navigate to="/glossary" replace />;
  if (!entry) {
    return (
      <div className="min-h-screen pt-20">
        <Navigation />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Term not found</h1>
          <p className="text-muted-foreground mb-6">
            The glossary term "{slug}" does not exist.
          </p>
          <Link to="/glossary">
            <Button>Back to Glossary</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <Navigation />
      <SEOHead
        title={`${entry.term} - Definition & Meaning | Atlantis NDT Glossary`}
        description={`${entry.shortDefinition} | Atlantis NDT Glossary`}
        keywords={`${entry.term}, ${entry.term} definition, what is ${entry.term}, NDT, non-destructive testing, ${entry.category}`}
        canonical={`https://atlantisndt.com/glossary/${entry.slug}`}
        structuredData={structuredData || undefined}
      />

      <section className="py-10 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/glossary" className="hover:text-primary">
              Glossary
            </Link>
            <span className="mx-2">/</span>
            <span>{entry.term}</span>
          </nav>
          <Link to="/glossary">
            <Button variant="ghost" className="mb-4 gap-2">
              <ChevronLeft size={20} />
              All Glossary Terms
            </Button>
          </Link>
          <span className="inline-block text-xs uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 text-primary mb-3">
            {CATEGORY_LABELS[entry.category] || entry.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{entry.term}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{entry.shortDefinition}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 md:p-10">
                  <div
                    className="glossary-content"
                    dangerouslySetInnerHTML={{ __html: entry.definition }}
                  />
                </CardContent>
              </Card>

              <div className="mt-10 p-6 rounded-lg bg-primary/5 border border-primary/20">
                <h3 className="text-xl font-bold mb-2">Need expert help with {entry.term}?</h3>
                <p className="text-muted-foreground mb-4">
                  Our ASNT Level III certified team provides inspection services, procedure development,
                  and training in {entry.term} and related NDT topics.
                </p>
                <Link to="/contact">
                  <Button className="btn-primary">Talk to a Level III Expert</Button>
                </Link>
              </div>
            </article>

            <aside className="lg:col-span-1 space-y-6">
              {relatedTermEntries.length > 0 && (
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-bold mb-4">Related Terms</h2>
                    <ul className="space-y-2">
                      {relatedTermEntries.map((rt) => (
                        <li key={rt.slug}>
                          <Link
                            to={`/glossary/${rt.slug}`}
                            className="text-primary hover:underline text-sm"
                          >
                            {rt.term}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {relatedBlogEntries.length > 0 && (
                <Card className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <h2 className="text-lg font-bold mb-4">Related Articles</h2>
                    <ul className="space-y-3">
                      {relatedBlogEntries.map((rb) => (
                        <li key={rb.slug}>
                          <Link
                            to={`/blog/${rb.slug}`}
                            className="text-primary hover:underline text-sm"
                          >
                            {rb.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              <Card className="border-0 shadow-sm bg-muted/40">
                <CardContent className="p-6">
                  <h2 className="text-lg font-bold mb-2">Explore the Glossary</h2>
                  <p className="text-sm text-muted-foreground mb-3">
                    200+ NDT terms across 10 categories.
                  </p>
                  <Link to="/glossary">
                    <Button variant="outline" size="sm">
                      Browse All Terms
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <style>{`
        .glossary-content {
          color: hsl(var(--foreground));
          line-height: 1.8;
          font-size: 1.05rem;
        }
        .glossary-content h2 {
          font-size: 1.6rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 0.85rem;
          padding-bottom: 0.4rem;
          border-bottom: 2px solid hsl(var(--primary) / 0.2);
          color: hsl(var(--foreground));
        }
        .glossary-content h2:first-child {
          margin-top: 0;
        }
        .glossary-content h3 {
          font-size: 1.2rem;
          font-weight: 600;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          color: hsl(var(--foreground));
        }
        .glossary-content p {
          margin-bottom: 1rem;
          color: hsl(var(--muted-foreground));
        }
        .glossary-content ul,
        .glossary-content ol {
          margin-bottom: 1.25rem;
          padding-left: 1.5rem;
        }
        .glossary-content ul {
          list-style-type: disc;
        }
        .glossary-content li {
          margin-bottom: 0.4rem;
          color: hsl(var(--muted-foreground));
        }
        .glossary-content a {
          color: hsl(var(--primary));
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .glossary-content a:hover {
          opacity: 0.8;
        }
        .glossary-content strong {
          color: hsl(var(--foreground));
        }
      `}</style>
    </div>
  );
}
