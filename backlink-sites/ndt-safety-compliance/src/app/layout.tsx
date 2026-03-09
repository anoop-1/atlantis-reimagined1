import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NDT Safety & Compliance | Regulatory Standards',
  description: 'Safety protocols, compliance frameworks, and regulatory requirements for NDT operations.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <header className="bg-red-600 text-white">
          <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">NDT Safety & Compliance</h1>
            <div className="space-x-6">
              <a href="/" className="hover:text-red-200">Home</a>
              <a href="/regulations" className="hover:text-red-200">Regulations</a>
              <a href="/certifications" className="hover:text-red-200">Certifications</a>
              <a href="/best-practices" className="hover:text-red-200">Best Practices</a>
            </div>
          </nav>
        </header>

        <main className="max-w-6xl mx-auto px-6 py-12">
          {children}
        </main>

        <footer className="bg-gray-100 text-gray-800 mt-16 py-12">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="text-red-600 hover:underline">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/consulting" rel="noopener" className="text-red-600 hover:underline">Compliance Consulting</a></li>
                  <li><a href="https://atlantisndt.com/training" rel="noopener" className="text-red-600 hover:underline">Certified Training</a></li>
                  <li><a href="https://atlantisndt.com/digital-twins" rel="noopener" className="text-red-600 hover:underline">Digital Systems</a></li>
                  <li><a href="https://atlantisndt.com/ndt-connect" rel="noopener" className="text-red-600 hover:underline">Management Platform</a></li>
                  <li><a href="https://atlantisndt.com/erp" rel="noopener" className="text-red-600 hover:underline">Documentation Systems</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://api-certification-guide.local" rel="noopener" className="text-red-600 hover:underline">API Certifications</a></li>
                  <li><a href="https://weld-quality-resource.local" rel="noopener" className="text-red-600 hover:underline">Weld Quality Standards</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4">About</h3>
                <p className="text-sm text-gray-600">Comprehensive safety and compliance guidance for NDT professionals.</p>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-gray-600">
              <p>&copy; 2026 NDT Safety & Compliance. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}