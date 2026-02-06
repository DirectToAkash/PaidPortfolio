import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/3 rounded-full blur-3xl" />

      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-white rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-1 h-1 bg-white rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 right-10 w-1.5 h-1.5 bg-white rounded-full"
        animate={{
          y: [0, -25, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/10 mb-8"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-white/80">Premium Portfolio Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Your Skills Deserve
            <br />
            <span className="text-glow">More Than a Resume.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10"
          >
            We craft job-winning portfolio websites for students, developers, and creators.
            Stand out from the crowd with a stunning, professional online presence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/templates">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-black hover:bg-white/90 glow-sm group px-8"
                data-testid="button-view-designs"
              >
                View Portfolio Designs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/custom">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 group px-8"
                data-testid="button-get-custom"
              >
                <Play className="mr-2 w-4 h-4" />
                Get Custom Portfolio
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex items-center justify-center"
          >
            <div className="glass px-6 py-3 rounded-full flex items-center gap-3 border border-white/10 hover:border-white/30 transition-colors">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <div className="text-sm text-white/80">
                <span className="font-semibold text-white">Trust Guarantee:</span> Pay after work completion available.
                <Link href="/book" className="ml-1 underline decoration-white/30 underline-offset-4 hover:text-white transition-colors"> Connect on call to apply.</Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-16 flex items-center justify-center gap-8"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-white/50">Portfolios Created</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-sm text-white/50">Client Satisfaction</div>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-sm text-white/50">Templates Available</div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
          <motion.div
            className="w-1.5 h-2 bg-white rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
