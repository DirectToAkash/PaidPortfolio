import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { CustomCursor } from "@/components/custom-cursor";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SplashScreen } from "@/components/splash-screen";
import { Navbar } from "@/components/navbar";
import Home from "@/pages/home";
import Templates from "@/pages/templates";
import Custom from "@/pages/custom";
import Contact from "@/pages/contact";
import RefundPolicy from "@/pages/refund-policy";
import Terms from "@/pages/terms";
import Privacy from "@/pages/privacy";
import NotFound from "@/pages/not-found";
import Book from "@/pages/book";
import Success from "@/pages/success";
import Blog from "@/pages/blog/index";
import BlogPremiumPortfolio from "@/pages/blog/best-premium-portfolio-website-india";
import BlogDoctorPortfolio from "@/pages/blog/portfolio-website-for-doctors-india";
import BlogLawyerPortfolio from "@/pages/blog/portfolio-website-for-lawyers-india";
import BlogTeacherPortfolio from "@/pages/blog/portfolio-website-for-teachers-india";
import BlogArchitectPortfolio from "@/pages/blog/portfolio-website-for-architects-india";
import BlogCAPortfolio from "@/pages/blog/portfolio-website-for-ca-india";
import BlogDigitalMarketerPortfolio from "@/pages/blog/portfolio-website-for-digital-marketers-india";
import BlogSoftwareDeveloperPortfolio from "@/pages/blog/portfolio-website-for-software-developers-india";
import BlogGraphicDesignerPortfolio from "@/pages/blog/portfolio-website-for-graphic-designers-india";
import BlogPhotographerPortfolio from "@/pages/blog/portfolio-website-for-photographers-india";
import BlogInteriorDesignerPortfolio from "@/pages/blog/portfolio-website-for-interior-designers-india";
import BlogUIUXDesignerPortfolio from "@/pages/blog/portfolio-website-for-uiux-designers-india";
import BlogDataScientistPortfolio from "@/pages/blog/portfolio-website-for-data-scientists-india";
import BlogContentWriterPortfolio from "@/pages/blog/portfolio-website-for-content-writers-india";
import BlogMBAPortfolio from "@/pages/blog/portfolio-website-for-mba-graduates-india";
import BlogCivilEngineerPortfolio from "@/pages/blog/portfolio-website-for-civil-engineers-india";
import BlogDentistPortfolio from "@/pages/blog/portfolio-website-for-dentists-india";
import BlogPsychologistPortfolio from "@/pages/blog/portfolio-website-for-psychologists-india";
import BlogNutritionistPortfolio from "@/pages/blog/portfolio-website-for-nutritionists-india";
import BlogFashionDesignerPortfolio from "@/pages/blog/portfolio-website-for-fashion-designers-india";
import BlogFinancialAdvisorPortfolio from "@/pages/blog/portfolio-website-for-financial-advisors-india";
import BlogHRPortfolio from "@/pages/blog/portfolio-website-for-hr-professionals-india";
import BlogNursePortfolio from "@/pages/blog/portfolio-website-for-nurses-india";
import { useState } from "react";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/templates" component={Templates} />
      <Route path="/custom" component={Custom} />
      <Route path="/contact" component={Contact} />
      <Route path="/refund-policy" component={RefundPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/book" component={Book} />
      <Route path="/success" component={Success} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/best-premium-portfolio-website-india" component={BlogPremiumPortfolio} />
      <Route path="/blog/portfolio-website-for-doctors-india" component={BlogDoctorPortfolio} />
      <Route path="/blog/portfolio-website-for-lawyers-india" component={BlogLawyerPortfolio} />
      <Route path="/blog/portfolio-website-for-teachers-india" component={BlogTeacherPortfolio} />
      <Route path="/blog/portfolio-website-for-architects-india" component={BlogArchitectPortfolio} />
      <Route path="/blog/portfolio-website-for-ca-india" component={BlogCAPortfolio} />
      <Route path="/blog/portfolio-website-for-digital-marketers-india" component={BlogDigitalMarketerPortfolio} />
      <Route path="/blog/portfolio-website-for-software-developers-india" component={BlogSoftwareDeveloperPortfolio} />
      <Route path="/blog/portfolio-website-for-graphic-designers-india" component={BlogGraphicDesignerPortfolio} />
      <Route path="/blog/portfolio-website-for-photographers-india" component={BlogPhotographerPortfolio} />
      <Route path="/blog/portfolio-website-for-interior-designers-india" component={BlogInteriorDesignerPortfolio} />
      <Route path="/blog/portfolio-website-for-uiux-designers-india" component={BlogUIUXDesignerPortfolio} />
      <Route path="/blog/portfolio-website-for-data-scientists-india" component={BlogDataScientistPortfolio} />
      <Route path="/blog/portfolio-website-for-content-writers-india" component={BlogContentWriterPortfolio} />
      <Route path="/blog/portfolio-website-for-mba-graduates-india" component={BlogMBAPortfolio} />
      <Route path="/blog/portfolio-website-for-civil-engineers-india" component={BlogCivilEngineerPortfolio} />
      <Route path="/blog/portfolio-website-for-dentists-india" component={BlogDentistPortfolio} />
      <Route path="/blog/portfolio-website-for-psychologists-india" component={BlogPsychologistPortfolio} />
      <Route path="/blog/portfolio-website-for-nutritionists-india" component={BlogNutritionistPortfolio} />
      <Route path="/blog/portfolio-website-for-fashion-designers-india" component={BlogFashionDesignerPortfolio} />
      <Route path="/blog/portfolio-website-for-financial-advisors-india" component={BlogFinancialAdvisorPortfolio} />
      <Route path="/blog/portfolio-website-for-hr-professionals-india" component={BlogHRPortfolio} />
      <Route path="/blog/portfolio-website-for-nurses-india" component={BlogNursePortfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-black text-white">
          <AnimatePresence>
            {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
          </AnimatePresence>
          <Navbar showSplash={showSplash} />
          <Toaster />
          <CustomCursor />
          <WhatsAppButton />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
