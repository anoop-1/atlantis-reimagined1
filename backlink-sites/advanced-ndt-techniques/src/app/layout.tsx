import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Advanced NDT Techniques | Phased Array, Automation',
  description: 'Modern NDT technologies including phased array ultrasonics, automation systems, and AI-enabled inspection.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-violet-50 to-white">
        <header className="border-b border-violet-200 bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-violet-700">Advanced NDT Techniques</h1>
            <div className="flex gap-6 text-sm">
              <a href="/" className="text-violet-600 hover:text-violet-800">Home</a>
              <a href="/phased-array" className="text-violet-600 hover:text-violet-800">Phased Array</a>
              <a href="/automation" className="text-violet-600 hover:text-violet-800">Automation</a>
              <a href="/software" className="text-violet-600 hover:text-violet-800">Software</a>
            </div>
          </nav>
        </header>
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-12">{children}</main>
        <footer className="bg-violet-900 text-white mt-20 py-12">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-violet-200">Industry Partners</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://atlantisndt.com" rel="noopener" className="hover:text-violet-200">Atlantis NDT</a></li>
                  <li><a href="https://atlantisndt.com/training" rel="noopener" className="hover:text-violet-200">Training</a></li>
                  <li><a href="https://atlantisndt.com/consulting" rel="noopener" className="hover:text-violet-200">Consulting</a></li>
                  <li><a href="https://atlantisndt.com/digital-twins" rel="noopener" className="hover:text-violet-200">Digital Twins</a></li>
                  <li><a href="https://ndt-connect.com" rel="noopener" className="hover:text-violet-200">NDTConnect</a></li>
                  <li><a href="https://atlantisndt.com/ultrasonic-testing" rel="noopener" className="hover:text-violet-200">Ultrasonic</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-violet-200">Related Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><a href="https://ndt-standards-library.com" rel="noopener" className="hover:text-violet-200">Standards</a></li>
                  <li><a href="https://nuclear-ndt-resource.com" rel="noopener" className="hover:text-violet-200">Nuclear NDT</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-violet-200">About</h3>
                <p className="text-sm text-violet-100">Modern NDT technology innovation hub.</p>
              </div>
            </div>
            <div className="border-t border-violet-700 pt-8 text-center text-sm text-violet-200">
              <p>&copy; 2026 Advanced NDT Techniques. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
