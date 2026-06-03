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
