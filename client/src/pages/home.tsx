import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { PortfolioCarousel } from "@/components/portfolio-carousel";
import { WhyPortfolioSection } from "@/components/why-portfolio-section";
import { TemplatesPreviewSection } from "@/components/templates-preview-section";
import { CustomServiceSection } from "@/components/custom-service-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { PricingSection } from "@/components/pricing-section";
import { CTASection } from "@/components/cta-section";
import SeoContent from "@/components/SeoContent";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio Website Templates & Portfolio Design Services | PaidPortfolio</title>
        <meta name="description" content="Buy modern portfolio website templates or get a custom portfolio design. Perfect for students, developers, freelancers, Professionals, and job seekers." />
        <meta name="keywords" content="portfolio website templates, portfolio design, developer portfolio website, student portfolio website, buy portfolio website, free portfolio templates, premium and luxury portfolio design" />
        <meta property="og:title" content="PaidPortfolio - Premium Portfolio Websites" />
        <meta
          property="og:description"
          content="Craft job-winning portfolio websites. Buy templates or get a custom design."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://paidportfolio.com" />
      </Helmet>

      <main>
        <HeroSection />
        <SeoContent /> 
        <PortfolioCarousel />
        <WhyPortfolioSection />
        <TemplatesPreviewSection />
        <CustomServiceSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
