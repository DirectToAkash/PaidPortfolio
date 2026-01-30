import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { 
  FileText, 
  ShoppingBag, 
  Lock, 
  Clock, 
  RefreshCw,
  Shield,
  AlertTriangle,
  Scale
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const sections = [
  {
    icon: FileText,
    title: "Agreement",
    content: "By purchasing from PaidPortfolio, you agree to the following terms."
  },
  {
    icon: ShoppingBag,
    title: "Digital Products",
    content: "All products sold are digital portfolio templates or related services. Access is provided electronically after successful payment. Because these are digital items, they cannot be returned once delivered."
  },
  {
    icon: Lock,
    title: "Usage Rights",
    content: "You may use the purchased portfolio for your personal or professional presentation only. You may not resell, redistribute, share, or claim the design as your own."
  },
  {
    icon: Clock,
    title: "Custom Services",
    content: "For custom services, delivery timelines depend on project scope and your timely communication. Revisions are limited to what is included in the selected package."
  },
  {
    icon: RefreshCw,
    title: "Refunds",
    content: "Refunds are only issued if we are unable to deliver the product completely or if there is a serious issue with the final delivery that cannot be resolved. Please see our Refund Policy for full details.",
    link: { text: "View Refund Policy", href: "/refund-policy" }
  },
  {
    icon: Shield,
    title: "Disclaimer",
    content: "PaidPortfolio is not responsible for results such as job offers, client conversions, or business outcomes from using our portfolios."
  },
  {
    icon: AlertTriangle,
    title: "Service Refusal",
    content: "We reserve the right to refuse service or cancel orders in cases of misuse, fraud, or violation of these terms."
  },
  {
    icon: Scale,
    title: "Acceptance",
    content: "By using this website, you agree to these Terms."
  }
];

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Service | PaidPortfolio</title>
        <meta
          name="description"
          content="Read our Terms of Service for using PaidPortfolio's digital portfolio products and services."
        />
        <link rel="canonical" href="https://paidportfolio.com/terms" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-bl from-blue-500/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/3 to-transparent rounded-full blur-3xl" />
          
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />
          
          <div className="absolute top-32 right-20 w-2 h-2 bg-blue-400/20 rounded-full animate-float" />
          <div className="absolute top-60 left-10 w-1 h-1 bg-purple-400/30 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-60 right-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        </div>

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
            >
              <Scale className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70">Legal Information</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Terms of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
                Service
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Please read these terms carefully before using our services
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-sm text-gray-500 mt-4"
            >
              Last Updated: January 2026
            </motion.p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="relative py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {sections.map((section, index) => (
                <motion.div 
                  key={index}
                  variants={fadeInUp}
                  className="glass rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center border border-white/10 flex-shrink-0">
                      <section.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {section.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                      {section.link && (
                        <a 
                          href={section.link.href}
                          className="inline-flex items-center gap-2 mt-3 text-blue-400 hover:text-blue-300 transition-colors text-sm"
                        >
                          {section.link.text}
                          <span>→</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Contact Section */}
              <motion.div 
                variants={fadeInUp}
                className="glass-strong rounded-2xl p-8 border border-white/10 text-center mt-12"
              >
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Questions About Our Terms?
                </h3>
                <p className="text-gray-400 mb-6">
                  If you have any questions about these Terms of Service, please contact us.
                </p>
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                  data-testid="link-contact"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
