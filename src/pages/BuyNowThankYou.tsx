import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SEOHead } from "@/components/SEOHead";
import { Navigation } from "@/components/Navigation";
import ContactDetails from "@/components/ContactDetails";

export default function BuyNowThankYou() {
   useEffect(() => {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
         window.gtag("event", "purchase", {
            page_location: window.location.href,
            page_path: window.location.pathname,
         });
      }
   }, []);

   return (
      <div className="min-h-screen pt-20">
         <Navigation />
         <SEOHead
            title="Thank You — Course Access Confirmed | Atlantis NDT"
            description="Your NDT training course bundle purchase is confirmed. Learn what happens next."
            canonical="https://atlantisndt.com/training/buy-now/thank-you"
            noindex
         />
         <section className="py-24">
            <div className="container mx-auto px-6 max-w-2xl text-center">
               <CheckCircle className="w-16 h-16 text-primary mx-auto mb-6" />
               <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You — You're All Set</h1>
               <p className="text-lg text-muted-foreground mb-8">
                  Your course bundle purchase is confirmed. You'll receive an email with your
                  learner login for our eLearning portal shortly. If you don't see it within a
                  business day, check your spam folder first, then reach out to us directly.
               </p>
               <Button asChild size="lg">
                  <a href="mailto:info@atlantisndt.com">Contact info@atlantisndt.com for support</a>
               </Button>
               <p className="mt-8">
                  <Link to="/training" className="text-primary underline">
                     Back to Training
                  </Link>
               </p>
            </div>
         </section>
         <ContactDetails />
      </div>
   );
}
