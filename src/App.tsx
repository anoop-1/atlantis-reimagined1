import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import DigitalTwins from "./pages/DigitalTwins";
import Erp from "./pages/Erp";
import NDTConnect from "./pages/NDTConnect";
import BlogPage from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import UltrasonicTesting from "./pages/ultrasonic-testing";
import MagneticParticleTesting from "./pages/magnetic-particle-testing";
import VisualTesting from "./pages/visual-testing";
import RadiographicTesting from "./pages/radiographic-testing";
import EddyCurrentTesting from "./pages/eddy-current-testing";
import PenetrantTesting from "./pages/penetrant-testing";
import ConsultingServices from "./pages/ConsultingServices";
import ConsultingServicesUSA from "./pages/ConsultingServices-USA";
import ConsultingServicesMiddleEast from "./pages/ConsultingServices-ME";
import ConsultingServicesIndia from "./pages/ConsultingServices-India";
import TrainingUSA from "./pages/Training-USA";
import TrainingMiddleEast from "./pages/Training-ME";
import TrainingIndia from "./pages/Training-India";
import FAQPage from "./pages/FAQ";
import NDTMethodsPage from "./pages/NDTMethods";
import HoustonServices from "./pages/HoustonServices";
import HyderabadTraining from "./pages/HyderabadTraining";
import MiddleEastServices from "./pages/MiddleEastServices";
import CaseStudies from "./pages/CaseStudies";
import IndustrialAnimation from "./components/IndustrialAnimation";
import { AuthProvider } from "./context/AuthContext";
import { lazy } from "react";

const DigitalTwinsNDT = lazy(() => import("./pages/digital-twins-ndt"));
const queryClient = new QueryClient();

const App = () => (
   <AuthProvider>
      <QueryClientProvider client={queryClient}>
         <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
               <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/industry" element={<IndustrialAnimation />} />
                  <Route path="/training" element={<Training />} />
                  <Route path="/training-usa" element={<TrainingUSA />} />
                  <Route path="/training-me" element={<TrainingMiddleEast />} />
                  <Route path="/training-india" element={<TrainingIndia />} />
                  <Route path="/consulting" element={<ConsultingServices />} />
                  <Route path="/consulting-usa" element={<ConsultingServicesUSA />} />
                  <Route path="/consulting-me" element={<ConsultingServicesMiddleEast />} />
                  <Route path="/consulting-india" element={<ConsultingServicesIndia />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/blog" element={<BlogPage />} />
                  <Route path="/blog/:slug" element={<BlogDetail />} />
                  <Route
                     path="/blog/ultrasonic-testing"
                     element={<UltrasonicTesting />}
                  />
                  <Route
                     path="/blog/magnetic-particle-testing"
                     element={<MagneticParticleTesting />}
                  />
                  <Route path="/blog/visual-testing" element={<VisualTesting />} />
                  <Route
                     path="/blog/radiographic-testing"
                     element={<RadiographicTesting />}
                  />
                  <Route
                     path="/blog/eddy-current-testing"
                     element={<EddyCurrentTesting />}
                  />
                  <Route
                     path="/blog/penetrant-testing"
                     element={<PenetrantTesting />}
                  />
                  <Route
                     path="/digital-twins"
                     element={<DigitalTwins />}
                  />
                  <Route path="/erp" element={<Erp />} />
                  <Route path="/ndt-connect" element={<NDTConnect />} />
                  <Route path="/admin/login" element={<AdminLogin />} />
                  <Route path="/admin/dashboard" element={<AdminDashboard />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/ndt-methods" element={<NDTMethodsPage />} />
                  <Route path="/ndt-services-houston" element={<HoustonServices />} />
                  <Route path="/ndt-training-hyderabad" element={<HyderabadTraining />} />
                  <Route path="/ndt-services-middle-east" element={<MiddleEastServices />} />
                  <Route path="/case-studies" element={<CaseStudies />} />
                  <Route path="/404" element={<NotFound />} />
                  <Route path="*" element={<NotFound />} />
               </Routes>
            </BrowserRouter>
         </TooltipProvider>
      </QueryClientProvider>
   </AuthProvider>
);

export default App;
