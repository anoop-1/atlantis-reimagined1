import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Asset Integrity Digital Hub | Digital Twins & NDT Software',
  description: 'Complete resource for digital transformation in asset integrity management. Learn about digital twins, ERP solutions, and NDT software for inspection companies.',
  keywords: 'digital twins, ERP software, NDT software, asset integrity, reporting tools, NDTConnect',
  openGraph: {
    title: 'Asset Integrity Digital Hub',
    description: 'Digital transformation for inspection and asset integrity management',
    type: 'website',
    locale: 'en_US',
  },
}

function Navigation() {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/digital-twins', label: 'Digital Twins' },
    { href: '/erp-solutions', label: 'ERP Solutions' },
    { href: '/ndt-software', label: 'NDT Software' },
    { href: '/blog', label: 'Blog' },
  ]

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold gradient-text no-underline">
              Asset Integrity Hub
            </a>
          </div>
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors no-underline"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-primary-600">
              ☰
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Asset Integrity Hub</h3>
            <p className="text-gray-600 text-sm">Digital transformation resource for NDT and inspection companies.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/digital-twins">Digital Twins</a></li>
              <li><a href="/erp-solutions">ERP Solutions</a></li>
              <li><a href="/ndt-software">NDT Software</a></li>
              <li><a href="/blog">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Technology Partners</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://atlantisndt.com/digital-twins">Digital Twin Platform</a></li>
              <li><a href="https://atlantisndt.com/ndt-erp-solution">NDT ERP Solution</a></li>
              <li><a href="https://ndt-connect.com">NDTConnect Platform</a></li>
              <li><a href="https://atlantisndt.com/intelligent-reporting-software">Reporting Software</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Learn More</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://atlantisndt.com/digital-twin-reporting">DT Reporting</a></li>
              <li><a href="https://atlantisndt.com/blog">AtlantisNDT Blog</a></li>
              <li><a href="https://atlantisndt.com">AtlantisNDT</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Related Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://power-generation-ndt.com" target="_blank" rel="noopener">Power Generation NDT</a></li>
              <li><a href="https://corrosion-management-ndt.com" target="_blank" rel="noopener">Corrosion Management NDT</a></li>
              <li><a href="https://industrial-inspection-resources.com" target="_blank" rel="noopener">Industrial Inspection Resources</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8">
          <p className="text-center text-gray-600 text-sm">
            &copy; 2026 Asset Integrity Digital Hub. All rights reserved. | 
            <a href="https://atlantisndt.com" rel="noopener" className="ml-2">atlantisndt.com</a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE" />
      </head>
      <body>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EF92RXSVR" />
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1EF92RXSVR');
      `}} />

        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
