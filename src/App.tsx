import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import GlobalEnquireCTA from "./components/GlobalEnquireCTA";
// 2026-10-10 §52: the four path-driven content blocks load as their own chunks (with their
// data files) so they stay out of the entry bundle (Lighthouse: entry 349 KB gz, TBT ~1 s).
const TrainingAvailabilityBlock = lazy(() => import("./components/TrainingAvailabilityBlock"));
const NextStepsBlock = lazy(() => import("./components/NextStepsBlock")); // §48
const GeoDepthBlock = lazy(() => import("./components/GeoDepthBlock")); // 2026-10-24 researched local blocks on earning geo pages
const IntentRouteBlock = lazy(() => import("./components/IntentRouteBlock")); // 2026-10-24 reading pages -> the product their readers buy next
const FreeDownloadsBlock = lazy(() => import("./components/FreeDownloadsBlock")); // 2026-10-24 free templates + practice PDFs + custom-templates CTA
const CompetitiveCoverageBlock = lazy(() => import("./components/CompetitiveCoverageBlock")); // §49
const KeywordLinksBlock = lazy(() => import("./components/KeywordLinksBlock")); // §50
const InspectionRegionalLinks = lazy(() => import("./components/InspectionRegionalLinks")); // 2026-10-19 regional inspection pages → /inspection section
const ConsultingServicesBlock = lazy(() => import("./components/ConsultingSectionBlocks").then((m) => ({ default: m.ConsultingServicesBlock }))); // 2026-10-19 Level III consulting topics
const ConsultingTopicLinks = lazy(() => import("./components/ConsultingSectionBlocks").then((m) => ({ default: m.ConsultingTopicLinks })));
const ProductVideoBlock = lazy(() => import("./components/ProductVideoBlock")); // §52
const ProductScreenshotsBlock = lazy(() => import("./components/ProductScreenshotsBlock")); // §53
const TrainingUpgradeBlock = lazy(() => import("./components/TrainingUpgradeBlock")); // 2026-10-16 training upgrade
const TrainingCtaBar = lazy(() => import("./components/TrainingCtaBar")); // 2026-10-18 eligibility · FAQs · Register & Buy Now on training city/regional pages
import SoftwareCompareLinks from "./components/SoftwareCompareLinks";
import CustomAppNotice from "./components/CustomAppNotice";
import { lazy, Suspense } from "react";
import { AuthProvider } from "./context/AuthContext";
import PublicationBoundary from "./components/PublicationBoundary";
import GA4EventTracker from "./components/GA4EventTracker";

import PageRoutes from "./PageRoutes";
const PageLoader = () => (
   <div data-page-loader="" className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="text-center">
         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
         <p className="text-muted-foreground">Loading...</p>
      </div>
   </div>
);

const queryClient = new QueryClient();

const App = () => (
   <AuthProvider>
      <QueryClientProvider client={queryClient}>
         <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
               <GA4EventTracker />
               <Suspense fallback={<PageLoader />}>
                  <PublicationBoundary><PageRoutes /></PublicationBoundary>
               </Suspense>
               {/* Every route gets an enquiry CTA. Mounted outside <Routes> so
                   all 6,743 indexable pages and every future page are covered
                   without touching a page component. GA4EventTracker already
                   reports its /contact click as erp_demo_request_click. */}
               <SoftwareCompareLinks />
               <Suspense fallback={null}>
                  <ProductVideoBlock />
                  <ProductScreenshotsBlock />
                  <GeoDepthBlock />
                  <IntentRouteBlock />
                  <FreeDownloadsBlock />
                  <CompetitiveCoverageBlock />
                  <ConsultingServicesBlock />
                  <ConsultingTopicLinks />
                  <InspectionRegionalLinks />
                  <KeywordLinksBlock />
                  <NextStepsBlock />
                  <TrainingAvailabilityBlock />
                  <TrainingUpgradeBlock />
                  <TrainingCtaBar />
               </Suspense>
               <GlobalEnquireCTA />
               <CustomAppNotice />
            </BrowserRouter>
         </TooltipProvider>
      </QueryClientProvider>
   </AuthProvider>
);

export default App;
