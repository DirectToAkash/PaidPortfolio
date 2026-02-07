import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Footer } from "@/components/footer";
import {
  Shield,
  Database,
  CreditCard,
  Cookie,
  Share2,
  UserCheck,
  Mail,
  Lock
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
    icon: Shield,
    title: "Our Commitment",
    content: "PaidPortfolio respects your privacy and is committed to protecting your personal information."
  },
  {
    icon: Database,
    title: "Information We Collect",
    content: "When you purchase a product or contact us, we may collect details such as your name, email address, payment information, and project requirements. This information is used only to process orders, deliver services, provide support, and improve our website."
  },
  {
    icon: Lock,
    title: "Data Protection",
    content: "We do not sell, rent, or trade your personal information to third parties."
  },
  {
    icon: CreditCard,
    title: "Payment Security",
    content: "Payments are processed through secure third-party payment providers. We do not store your full card or payment details on our servers."
  },
  {
    icon: Cookie,
    title: "Cookies & Analytics",
    content: "We may use cookies or basic analytics tools to understand website traffic and improve user experience."
  },
  {
    icon: Share2,
    title: "When We Share Information",
    content: "Your information may be shared only when necessary to deliver our services, comply with legal obligations, or prevent fraud or misuse.",
    bullets: [
      "Deliver our services",
      "Comply with legal obligations",
      "Prevent fraud or misuse"
    ]
  },
  {
    icon: UserCheck,
    title: "Your Responsibility",
    content: "You are responsible for providing accurate information during purchase or communication."
  },
  {
    icon: Shield,
    title: "Consent",
    content: "By using our website, you consent to this Privacy Policy."
  }
];

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | PaidPortfolio</title>
        <meta
          name="description"
          content="Learn how PaidPortfolio collects, uses, and protects your personal information. We are committed to your privacy."
        />
        <link rel="canonical" href="https://paidportfolio.com/privacy" />
      </Helmet>

      <main className="min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-teal-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/3 to-transparent rounded-full blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          <div className="absolute top-24 left-20 w-2 h-2 bg-emerald-400/20 rounded-full animate-float" />
          <div className="absolute top-48 right-16 w-1 h-1 bg-teal-400/30 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-48 left-1/4 w-1.5 h-1.5 bg-white/15 rounded-full animate-float" style={{ animationDelay: "1s" }} />
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
              <Lock className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70">Your Data, Protected</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Privacy{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400">
                Policy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              How we collect, use, and protect your personal information
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

        {/* Privacy Content */}
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
                  className="glass rounded-2xl p-6 border border-white/10 hover:border-emerald-500/20 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 flex items-center justify-center border border-white/10 flex-shrink-0">
                      <section.icon className="w-6 h-6 text-emerald-400" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                        {section.title}
                      </h2>
                      <p className="text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                      {section.bullets && (
                        <ul className="mt-3 space-y-2">
                          {section.bullets.map((bullet, i) => (
                            <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
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
                  Questions About Your Data?
                </h3>
                <p className="text-gray-400 mb-6">
                  If you have any questions about your data or this Privacy Policy, contact us at:
                </p>
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-lg border border-white/10 mb-6">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <span className="text-white font-medium">directtoakash@gmail.com</span>
                </div>
                <div className="block">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
                    data-testid="link-contact"
                  >
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
