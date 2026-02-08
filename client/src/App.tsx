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
