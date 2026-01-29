import { Helmet } from "react-helmet";
import { Navbar } from "@/components/navbar";
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

export default function Home() {
  return (
    <>
      <Helmet>
        <title>PaidPortfolio - Premium Portfolio Websites for Students & Developers</title>
        <meta
          name="description"
          content="Buy stunning portfolio website templates or get a fully custom portfolio built. Perfect for students, developers, and creators looking to land their dream job."
        />
        <meta
          name="keywords"
          content="portfolio website for students, developer portfolio website, buy portfolio website, custom portfolio website service, personal portfolio for job"
        />
        <meta property="og:title" content="PaidPortfolio - Premium Portfolio Websites" />
        <meta
          property="og:description"
          content="Craft job-winning portfolio websites. Buy templates or get a custom design."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://paidportfolio.com" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
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
