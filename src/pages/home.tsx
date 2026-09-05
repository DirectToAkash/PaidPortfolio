import { useEffect } from "react";
import { Footer } from "@/components/site/footer";
import { HeroSection } from "@/components/site/hero-section";
import { PortfolioCarousel } from "@/components/site/portfolio-carousel";
import { WhyPortfolioSection } from "@/components/site/why-portfolio-section";
import { TemplatesPreviewSection } from "@/components/site/templates-preview-section";
import { CustomServiceSection } from "@/components/site/custom-service-section";
import { FeaturesSection } from "@/components/site/features-section";
import { PricingSection } from "@/components/site/pricing-section";
import { CTASection } from "@/components/site/cta-section";
import SeoContent from "@/components/site/SeoContent";
import { AudienceLinksSection } from "@/components/site/audience-links-section";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>

      <main>
        <HeroSection />
        <SeoContent /> 
        <PortfolioCarousel />
        <WhyPortfolioSection />
        <TemplatesPreviewSection />
        <CustomServiceSection />
        <FeaturesSection />
        <PricingSection />
        <AudienceLinksSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
