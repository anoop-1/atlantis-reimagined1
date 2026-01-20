import { Navigation } from "@/components/Navigation";
import { SEOHead } from "@/components/SEOHead";
import { Link } from "react-router-dom";
import { Home, BookOpen, Users, Phone, Search, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const helpfulLinks = [
    { name: "Home", href: "/", icon: Home, description: "Return to homepage" },
    { name: "Training", href: "/training", icon: BookOpen, description: "NDT certification courses" },
    { name: "Consulting", href: "/consulting", icon: Users, description: "ASNT Level III services" },
    { name: "Contact Us", href: "/contact", icon: Phone, description: "Get in touch with our team" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <SEOHead
        title="404 - Page Not Found | Atlantis NDT"
        description="The page you're looking for doesn't exist. Find NDT training, consulting, and digital twins services from Atlantis NDT."
        keywords="404, page not found, Atlantis NDT"
        canonical="https://atlantisndt.com/404"
      />

      <main className="pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          {/* 404 Hero */}
          <div className="mb-12">
            <h1 className="text-9xl font-bold text-[#004aad] mb-4">404</h1>
            <h2 className="text-3xl font-semibold text-slate-800 mb-4">
              Page Not Found
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Sorry, the page you're looking for doesn't exist or has been moved.
              Don't worry — let's get you back on track!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button asChild className="bg-[#004aad] hover:bg-[#003580]">
                <Link to="/">
                  <Home className="mr-2 w-5 h-5" />
                  Go to Homepage
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="mr-2 w-5 h-5" />
                Go Back
              </Button>
            </div>
          </div>

          {/* Helpful Links */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-xl font-semibold mb-6 text-slate-800 flex items-center justify-center gap-2">
              <Search className="w-5 h-5 text-[#004aad]" />
              Maybe you were looking for:
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {helpfulLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="flex items-start gap-4 p-4 rounded-lg border border-slate-200 hover:border-[#004aad] hover:bg-slate-50 transition group"
                >
                  <div className="bg-[#004aad]/10 p-2 rounded-lg group-hover:bg-[#004aad]/20 transition">
                    <link.icon className="w-5 h-5 text-[#004aad]" />
                  </div>
                  <div className="text-left">
                    <div className="font-medium text-slate-800 group-hover:text-[#004aad] transition">
                      {link.name}
                    </div>
                    <div className="text-sm text-slate-500">
                      {link.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Popular Pages */}
          <div className="mt-8 text-sm text-slate-500">
            <p className="mb-2">Popular pages:</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/blog/ultrasonic-testing" className="hover:text-[#004aad] hover:underline">
                Ultrasonic Testing
              </Link>
              <Link to="/blog/eddy-current-testing" className="hover:text-[#004aad] hover:underline">
                Eddy Current Testing
              </Link>
              <Link to="/digital-twins" className="hover:text-[#004aad] hover:underline">
                Digital Twins
              </Link>
              <Link to="/consulting-usa" className="hover:text-[#004aad] hover:underline">
                Houston Consulting
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
