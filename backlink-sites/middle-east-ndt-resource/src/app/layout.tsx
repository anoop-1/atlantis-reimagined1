import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Middle East NDT Resource Center | NDT Industry Resource',
    template: '%s | Middle East NDT Resource Center',
  },
  description: 'Comprehensive resource for middle east ndt resource center — NDT methods, standards, career guides, and industry best practices.',
  openGraph: { type: 'website', locale: 'en_US', siteName: 'Middle East NDT Resource Center' },
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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold text-blue-700">Middle East NDT Resource Center</a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="/" className="hover:text-blue-600 transition-colors">Home</a>
          <a href="/countries" className="hover:text-blue-600 transition-colors">NDT by Country</a>
          <a href="/cities" className="hover:text-blue-600 transition-colors">NDT by City</a>
          <a href="/industry" className="hover:text-blue-600 transition-colors">Middle East NDT Indu</a>
          <a href="/certification" className="hover:text-blue-600 transition-colors">NDT Certification in</a>
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
            <h3 className="text-white font-bold mb-3">Middle East NDT Resource Center</h3>
            <p className="text-sm leading-relaxed">Comprehensive resource for middle east ndt resource center — NDT methods, standards, career guides, and industry best practices.</p>
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
              <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="/countries" className="hover:text-white transition-colors">NDT by Country</a></li>
              <li><a href="/cities" className="hover:text-white transition-colors">NDT by City</a></li>
              <li><a href="/industry" className="hover:text-white transition-colors">Middle East NDT Indu</a></li>
              <li><a href="/certification" className="hover:text-white transition-colors">NDT Certification in</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Related Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://oil-gas-inspection-guide.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">Oil & Gas Inspection Guide</a></li>
              <li><a href="https://ndt-training-academy.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">NDT Training Academy</a></li>
              <li><a href="https://ndt-careers-portal.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">NDT Careers Portal</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs">
          <p>© 2026 Middle East NDT Resource Center. An independent educational resource for the NDT community.</p>
        </div>
      </div>
    </footer>
  );
}
