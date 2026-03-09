import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Industrial Inspection Resources | NDT & Asset Integrity',
  description: 'Comprehensive guides on NDT, asset integrity, and inspection technologies for oil & gas, aerospace, power generation, and manufacturing industries.',
  keywords: 'industrial inspection, NDT, asset integrity, oil and gas, aerospace, power generation, manufacturing, inspection standards',
  openGraph: {
    title: 'Industrial Inspection Resources | NDT & Asset Integrity',
    description: 'Expert guidance on non-destructive testing and inspection across major industries.',
    type: 'website',
    locale: 'en_US',
  },
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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold text-teal-700">
                  <a href="/">Industrial Inspection Resources</a>
                </h1>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/industries" className="text-gray-700 hover:text-teal-600 font-medium">Industries</a>
                <a href="/standards" className="text-gray-700 hover:text-teal-600 font-medium">Standards</a>
                <a href="/case-studies" className="text-gray-700 hover:text-teal-600 font-medium">Case Studies</a>
                <a href="/technology" className="text-gray-700 hover:text-teal-600 font-medium">Technology</a>
                <a href="/about" className="text-gray-700 hover:text-teal-600 font-medium">About</a>
              </div>
            </div>
          </nav>
        </header>

        <main>
          {children}
        </main>

        <footer className="bg-teal-900 text-white mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-bold mb-4">Industries</h3>
                <ul className="space-y-2 text-teal-100">
                  <li><a href="/industries/oil-gas-inspection" className="hover:text-white">Oil & Gas</a></li>
                  <li><a href="/industries/aerospace-inspection" className="hover:text-white">Aerospace</a></li>
                  <li><a href="/industries/power-generation-inspection" className="hover:text-white">Power Generation</a></li>
                  <li><a href="/industries" className="hover:text-white">Manufacturing</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Standards</h3>
                <ul className="space-y-2 text-teal-100">
                  <li><a href="/standards/api-inspection-codes" className="hover:text-white">API Codes</a></li>
                  <li><a href="/standards/asme-codes-ndt" className="hover:text-white">ASME Standards</a></li>
                  <li><a href="/standards" className="hover:text-white">All Standards</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Technology</h3>
                <ul className="space-y-2 text-teal-100">
                  <li><a href="/technology/digital-twins-asset-management" className="hover:text-white">Digital Twins</a></li>
                  <li><a href="/technology/ndt-reporting-software" className="hover:text-white">Reporting Software</a></li>
                  <li><a href="/technology/erp-for-inspection-companies" className="hover:text-white">ERP Solutions</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Partner Services</h3>
                <ul className="space-y-2 text-teal-100">
                  <li><a href="https://atlantisndt.com" className="hover:text-white">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/consulting" className="hover:text-white">NDT Consulting</a></li>
                  <li><a href="https://atlantisndt.com/training" className="hover:text-white">Training Programs</a></li>
                  <li><a href="https://atlantisndt.com/ndt-erp-solution" className="hover:text-white">ERP Solutions</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Related Resources</h3>
                <ul className="space-y-2 text-teal-100">
                  <li><a href="https://asset-integrity-hub.com" target="_blank" rel="noopener" className="hover:text-white">Asset Integrity Hub</a></li>
                  <li><a href="https://power-generation-ndt.com" target="_blank" rel="noopener" className="hover:text-white">Power Generation NDT</a></li>
                  <li><a href="https://construction-ndt-guide.com" target="_blank" rel="noopener" className="hover:text-white">Construction NDT Guide</a></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-teal-800 pt-8">
              <p className="text-teal-100 text-center">
                &copy; 2026 Industrial Inspection Resources. All rights reserved. | 
                <a href="https://atlantisndt.com" className="text-white hover:underline ml-2">Learn more at Atlantis NDT</a>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
