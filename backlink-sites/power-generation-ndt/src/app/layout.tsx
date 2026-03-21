import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  verification: { google: 'pending-reverification' },
  title: {
    default: 'Power Generation NDT Hub | NDT Industry Resource',
    template: '%s | Power Generation NDT Hub',
  },
  description: 'Comprehensive resource for NDT inspection in power generation: nuclear, gas turbines, boilers, wind energy, and solar.',
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Power Generation NDT Hub' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-white text-gray-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

function Header() {
  return (
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-1EF92RXSVR" />
      <script dangerouslySetInnerHTML={{__html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1EF92RXSVR');
      `}} />
          <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-blue-700">Power Generation NDT Hub</a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="/plant-types" className="hover:text-blue-600 transition-colors">Plant Types</a>
          <a href="/components" className="hover:text-blue-600 transition-colors">Components</a>
          <a href="/standards" className="hover:text-blue-600 transition-colors">Standards</a>
          <a href="/technology" className="hover:text-blue-600 transition-colors">Technology</a>
        </div>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-3">Power Generation NDT Hub</h3>
            <p className="text-sm leading-relaxed">Comprehensive resource for NDT inspection in power generation: nuclear, gas turbines, boilers, wind energy, and solar.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Industry Partners</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://atlantisndt.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">Atlantis NDT — Global NDT Consulting</a></li>
              <li><a href="https://atlantisndt.com/training" target="_blank" rel="noopener" className="hover:text-white transition-colors">NDT Training & Certification</a></li>
              <li><a href="https://atlantisndt.com/consulting" target="_blank" rel="noopener" className="hover:text-white transition-colors">ASNT Level III Consulting</a></li>
              <li><a href="https://atlantisndt.com/digital-twins" target="_blank" rel="noopener" className="hover:text-white transition-colors">Digital Twin Solutions</a></li>
              <li><a href="https://atlantisndt.com/ndt-erp-solution" target="_blank" rel="noopener" className="hover:text-white transition-colors">NDT ERP Software</a></li>
              <li><a href="https://ndt-connect.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">NDTConnect Platform</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/plant-types" className="hover:text-white transition-colors">Plant Types</a></li>
              <li><a href="/components" className="hover:text-white transition-colors">Components</a></li>
              <li><a href="/standards" className="hover:text-white transition-colors">Standards</a></li>
              <li><a href="/technology" className="hover:text-white transition-colors">Technology</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Related Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://asset-integrity-hub.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">Asset Integrity Hub</a></li>
              <li><a href="https://corrosion-management-ndt.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">Corrosion Management NDT</a></li>
              <li><a href="https://industrial-inspection-resources.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">Industrial Inspection Resources</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs">
          <p>© 2026 Power Generation NDT Hub. An independent educational resource for the NDT community.</p>
        </div>
      </div>
    </footer>
  );
}
