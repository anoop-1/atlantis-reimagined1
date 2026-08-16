import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Tank Inspection Resource — API 653, Floor Scanning & Tank Integrity',
  description:
    'Articles on aboveground storage tank inspection: API 653 programme practice, floor scanning and MFL, settlement evaluation, fitness-for-service and the records that survive an audit.',
  keywords:
    'tank inspection blog, api 653, storage tank integrity, mfl floor scanning, tank settlement, fitness for service',
}

export default function BlogPage() {
  const articles = [
    {
      title: 'The Tank Programme Evidence Chain: What Auditors Actually Read',
      excerpt:
        'API 653 programmes rarely fail on the inspection. They fail on whether the record can be reconstructed years later — here is the chain auditors follow.',
      date: 'August 2026',
      readTime: '7 min read',
      href: '/blog/tank-programme-evidence-chain-what-auditors-read',
      category: 'Tank Integrity',
    },
  ]

  return (
    <>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="breadcrumb mb-8">
          <a href="/">Home</a>
          <span>/</span>
          <span>Blog</span>
        </nav>

        <h1 className="text-4xl font-bold text-gray-900 mb-6">Tank Inspection Resource Blog</h1>
        <p className="text-lg text-gray-600 mb-12">
          Practical writing on aboveground storage tank integrity — API 653 programme design, floor
          scanning and thickness survey practice, settlement evaluation, fitness-for-service, and the
          documentation habits that decide whether an inspection stands up years after it was
          performed.
        </p>

        <div className="space-y-8">
          {articles.map((article) => (
            <article key={article.title} className="card hover:shadow-lg transition-shadow">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h2 className="text-2xl font-bold">
                  <a href={article.href} className="no-underline hover:text-primary-700">
                    {article.title}
                  </a>
                </h2>
                <span className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">
                  {article.category}
                </span>
              </div>
              <div className="flex gap-4 text-sm text-gray-600 mb-4">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
              <a
                href={article.href}
                className="text-primary-600 hover:text-primary-700 font-semibold inline-block"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
