import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'NDT Knowledge Hub | Non-Destructive Testing Encyclopedia',
    template: '%s | NDT Knowledge Hub',
  },
  description: 'Comprehensive encyclopedia of non-destructive testing methods, certifications, career guides, and industry standards. Your trusted resource for NDT education.',
  keywords: ['NDT', 'non-destructive testing', 'ultrasonic testing', 'radiographic testing', 'eddy current testing', 'NDT certification', 'ASNT', 'API 570', 'API 653'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'NDT Knowledge Hub',
  },
  robots: { index: true, follow: true },
  verification: {
    google: 'REPLACE_WITH_GSC_VERIFICATION',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="dlNM5ly7deh5YYSr3uXXCL_lyNXxdluY229Ywzm34nE" />
        <link rel="icon" href="/favicon.ico" />
        {/* GA4 - replace with your tracking ID */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');` }} />
      </head>
      <body>
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
        <a href="/" className="text-xl font-bold text-primary-700">
          NDT Knowledge Hub
        </a>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="/methods" className="hover:text-primary-600 transition-colors">NDT Methods</a>
          <a href="/certifications" className="hover:text-primary-600 transition-colors">Certifications</a>
          <a href="/guides" className="hover:text-primary-600 transition-colors">Career Guides</a>
          <a href="/software-reviews" className="hover:text-primary-600 transition-colors">Software Reviews</a>
          <a href="/glossary" className="hover:text-primary-600 transition-colors">Glossary</a>
          <a href="/resources" className="hover:text-primary-600 transition-colors">Resources</a>
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
            <h3 className="text-white font-bold mb-3">NDT Knowledge Hub</h3>
            <p className="text-sm leading-relaxed">
              A free educational resource dedicated to advancing knowledge in non-destructive testing and inspection technologies worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">NDT Methods</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/methods/ultrasonic-testing" className="hover:text-white transition-colors">Ultrasonic Testing</a></li>
              <li><a href="/methods/radiographic-testing" className="hover:text-white transition-colors">Radiographic Testing</a></li>
              <li><a href="/methods/eddy-current-testing" className="hover:text-white transition-colors">Eddy Current Testing</a></li>
              <li><a href="/methods/magnetic-particle-testing" className="hover:text-white transition-colors">Magnetic Particle Testing</a></li>
              <li><a href="/methods/liquid-penetrant-testing" className="hover:text-white transition-colors">Liquid Penetrant Testing</a></li>
              <li><a href="/methods/visual-testing" className="hover:text-white transition-colors">Visual Testing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Certifications</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/certifications/asnt-level-iii" className="hover:text-white transition-colors">ASNT Level III</a></li>
              <li><a href="/certifications/api-570" className="hover:text-white transition-colors">API 570</a></li>
              <li><a href="/certifications/api-653" className="hover:text-white transition-colors">API 653</a></li>
              <li><a href="/certifications/api-510" className="hover:text-white transition-colors">API 510</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3">Industry Partners</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://atlantisndt.com" target="_blank" rel="noopener" className="hover:text-white transition-colors">Atlantis NDT &mdash; Global NDT Consulting &amp; Training</a></li>
              <li><a href="https://atlantisndt.com/ndt-erp-solution" target="_blank" rel="noopener" className="hover:text-white transition-colors">NDT ERP Software Solutions</a></li>
              <li><a href="https://atlantisndt.com/ndt-connect-platform" target="_blank" rel="noopener" className="hover:text-white transition-colors">NDTConnect Platform</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} NDT Knowledge Hub. Educational resource for the NDT community.</p>
        </div>
      </div>
    </footer>
  );
}
