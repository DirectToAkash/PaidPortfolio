import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Footer } from "@/components/footer";
import {
  CheckCircle2,
  XCircle,
  Mail,
  AlertTriangle,
  FileText,
  Shield,
  Clock,
  RefreshCw
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

export default function RefundPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Refund Policy | PaidPortfolio</title>
        <meta
          name="description"
          content="Read our refund policy for digital portfolio products and services. Understand when refunds may be provided and our terms of service."
        />
        <link rel="canonical" href="https://paidportfolio.com/refund-policy" />
      </Helmet>

      <main className="min-h-screen bg-black text-white overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none">
          {/* Gradient orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tl from-gray-500/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/3 to-transparent rounded-full blur-3xl" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}
          />

          {/* Floating particles */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-white/20 rounded-full animate-float" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-white/30 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
          <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-white/15 rounded-full animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/25 rounded-full animate-float" style={{ animationDelay: "1.5s" }} />
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
              <Shield className="w-4 h-4 text-white/70" />
              <span className="text-sm text-white/70">Legal Information</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl font-bold mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Refund{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
                Policy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto"
            >
              Understanding our terms for digital portfolio products and services
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

        {/* Policy Content */}
        <section className="relative py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              {/* Introduction */}
              <motion.div
                variants={fadeInUp}
                className="glass-strong rounded-2xl p-8 border border-white/10"
              >
                <p className="text-gray-300 leading-relaxed">
                  Thank you for purchasing from PaidPortfolio. We sell digital portfolio products and related services.
                  Because our products are digital and often delivered instantly or custom-prepared, our refund policy
                  is limited and applies only under specific conditions described below.
                </p>
              </motion.div>

              {/* Section 1: General Policy */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <FileText className="w-5 h-5 text-white/70" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    1. General Policy
                  </h2>
                </div>
                <div className="glass rounded-xl p-6 border border-white/5 ml-13">
                  <p className="text-gray-300 leading-relaxed">
                    All purchases made on PaidPortfolio are considered <strong className="text-white">final and non-refundable</strong>,
                    except in situations where we are unable to fully deliver the purchased product or there is a verified issue
                    with the final delivery.
                  </p>
                  <p className="text-gray-400 mt-4 text-sm">
                    By making a purchase, you agree to this refund policy.
                  </p>
                </div>
              </motion.div>

              {/* Section 2: When Refund May Be Provided */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    2. When a Refund May Be Provided
                  </h2>
                </div>
                <div className="space-y-4 ml-13">
                  <p className="text-gray-400">A refund will only be considered in the following cases:</p>

                  <div className="glass rounded-xl p-6 border border-green-500/10 hover:border-green-500/20 transition-colors">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">A. Non-Delivery of Product</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          If we are unable to deliver the product completely due to a technical issue, system failure,
                          or an internal error from our side, you may be eligible for a full or partial refund.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="glass rounded-xl p-6 border border-green-500/10 hover:border-green-500/20 transition-colors">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h3 className="font-semibold text-white mb-2">B. Major Issue with Final Delivery</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-3">
                          If the final delivered product has a serious functional or technical issue that:
                        </p>
                        <ul className="text-gray-400 text-sm space-y-1 ml-4">
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            Prevents you from accessing or using the portfolio, and
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                            Cannot be resolved by our support team within a reasonable time
                          </li>
                        </ul>
                        <p className="text-gray-400 text-sm mt-3">then you may qualify for a refund.</p>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-500 text-sm italic">
                    We reserve the right to first attempt to fix, replace, or re-deliver the product before issuing a refund.
                  </p>
                </div>
              </motion.div>

              {/* Section 3: No Refund Situations */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center border border-red-500/20">
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    3. Situations Where Refunds Will NOT Be Provided
                  </h2>
                </div>
                <div className="glass rounded-xl p-6 border border-red-500/10 ml-13">
                  <p className="text-gray-400 mb-4">Refunds will not be issued in the following cases:</p>
                  <ul className="space-y-3">
                    {[
                      "You changed your mind after purchase",
                      "You no longer need the portfolio",
                      "You expected additional features not listed on the product page",
                      "You lack the technical knowledge to use the portfolio",
                      "Minor design preferences (colors, layout style, fonts, etc.)",
                      "Delay in response from your side during custom delivery process",
                      "Downloaded or delivered files have already been accessed successfully"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                        <XCircle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-500 text-sm mt-6 pt-4 border-t border-white/5">
                    Because our products are digital and non-returnable, we cannot accept returns once delivery is completed successfully.
                  </p>
                </div>
              </motion.div>

              {/* Section 4: Custom Portfolios */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <RefreshCw className="w-5 h-5 text-white/70" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    4. Custom or Personalized Portfolios
                  </h2>
                </div>
                <div className="glass rounded-xl p-6 border border-white/5 ml-13">
                  <p className="text-gray-400 mb-4">For custom-built or personalized portfolio services:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0" />
                      Work already completed is non-refundable
                    </li>
                    <li className="flex items-start gap-3 text-gray-300">
                      <span className="w-1.5 h-1.5 bg-white/50 rounded-full mt-2 flex-shrink-0" />
                      If a project is canceled midway, only the undelivered portion (if any) may be considered for partial refund — solely at our discretion
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* Section 5: Refund Request Process */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                    <Mail className="w-5 h-5 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    5. Refund Request Process
                  </h2>
                </div>
                <div className="glass rounded-xl p-6 border border-blue-500/10 ml-13">
                  <p className="text-gray-300 mb-4">
                    To request a refund, you must contact us within <strong className="text-white">7 days</strong> of delivery at:
                  </p>
                  <div className="bg-white/5 rounded-lg p-4 mb-4 border border-white/10">
                    <p className="text-white font-medium flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      support@paidportfolio.com
                    </p>
                  </div>
                  <p className="text-gray-400 mb-3">Include:</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Your order number
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Description of the issue
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      Screenshots or proof (if applicable)
                    </li>
                  </ul>
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/5 text-gray-400 text-sm">
                    <Clock className="w-4 h-4" />
                    Our team will review your request and respond within 3–5 business days.
                  </div>
                </div>
              </motion.div>

              {/* Section 6: Chargebacks */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    6. Chargebacks & Disputes
                  </h2>
                </div>
                <div className="glass rounded-xl p-6 border border-yellow-500/10 ml-13">
                  <p className="text-gray-300 mb-4">
                    Initiating a chargeback without contacting us first may result in:
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm mb-4">
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      Suspension of services
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      Permanent restriction from future purchases
                    </li>
                    <li className="flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                      Submission of proof of delivery to the payment provider
                    </li>
                  </ul>
                  <p className="text-gray-400 text-sm italic">
                    We encourage you to contact us first so we can resolve the issue quickly.
                  </p>
                </div>
              </motion.div>

              {/* Section 7: Policy Updates */}
              <motion.div variants={fadeInUp} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <RefreshCw className="w-5 h-5 text-white/70" />
                  </div>
                  <h2 className="text-2xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    7. Policy Updates
                  </h2>
                </div>
                <div className="glass rounded-xl p-6 border border-white/5 ml-13">
                  <p className="text-gray-300 leading-relaxed">
                    PaidPortfolio reserves the right to update or modify this refund policy at any time without prior notice.
                    Continued use of our services means you accept the updated policy.
                  </p>
                </div>
              </motion.div>

              {/* Contact CTA */}
              <motion.div
                variants={fadeInUp}
                className="glass-strong rounded-2xl p-8 border border-white/10 text-center mt-16"
              >
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Have Questions?
                </h3>
                <p className="text-gray-400 mb-6">
                  If you have any questions about our refund policy, please don't hesitate to reach out.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-colors"
                  data-testid="link-contact"
                >
                  <Mail className="w-4 h-4" />
                  Contact Support
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
