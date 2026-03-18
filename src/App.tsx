import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/contexts/AuthContext";
import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import Services from "./pages/Services.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import Disclaimer from "./pages/Disclaimer.tsx";
import Gallery from "./pages/Gallery.tsx";
import Reviews from "./pages/Reviews.tsx";
import NotFound from "./pages/NotFound.tsx";

// Admin
import Login from "./pages/admin/Login.tsx";
import DashboardLayout from "./pages/admin/DashboardLayout.tsx";
import DashboardHome from "./pages/admin/DashboardHome.tsx";
import EditHomePage from "./pages/admin/EditHomePage.tsx";
import EditServicesPage from "./pages/admin/EditServicesPage.tsx";
import EditAboutPage from "./pages/admin/EditAboutPage.tsx";
import EditContactPage from "./pages/admin/EditContactPage.tsx";
import EditGalleryPage from "./pages/admin/EditGalleryPage.tsx";
import EditHeaderFooter from "./pages/admin/EditHeaderFooter.tsx";
import EditLegalPages from "./pages/admin/EditLegalPages.tsx";
import EditSettings from "./pages/admin/EditSettings.tsx";
import EditReviews from "./pages/admin/EditReviews.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Layout><Index /></Layout>} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            {/* Admin routes */}
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin" element={<DashboardLayout><DashboardHome /></DashboardLayout>} />
            <Route path="/admin/home" element={<DashboardLayout><EditHomePage /></DashboardLayout>} />
            <Route path="/admin/services" element={<DashboardLayout><EditServicesPage /></DashboardLayout>} />
            <Route path="/admin/about" element={<DashboardLayout><EditAboutPage /></DashboardLayout>} />
            <Route path="/admin/contact" element={<DashboardLayout><EditContactPage /></DashboardLayout>} />
            <Route path="/admin/gallery" element={<DashboardLayout><EditGalleryPage /></DashboardLayout>} />
            <Route path="/admin/reviews" element={<DashboardLayout><EditReviews /></DashboardLayout>} />
            <Route path="/admin/header-footer" element={<DashboardLayout><EditHeaderFooter /></DashboardLayout>} />
            <Route path="/admin/legal" element={<DashboardLayout><EditLegalPages /></DashboardLayout>} />
            <Route path="/admin/settings" element={<DashboardLayout><EditSettings /></DashboardLayout>} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
