import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 rounded-full blur-[100px]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-12 md:p-16 glow-lg"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm text-white/80">Start Your Journey Today</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Build Your
            <br />
            <span className="text-glow">Dream Portfolio?</span>
          </h2>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
            Join hundreds of professionals who have transformed their careers with a stunning portfolio website. 
            Your next opportunity is just a click away.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/templates">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-white text-black hover:bg-white/90 glow-sm group px-8"
                data-testid="button-cta-templates"
              >
                Explore Templates
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/custom">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 text-white hover:bg-white/10 px-8"
                data-testid="button-cta-custom"
              >
                Get Custom Portfolio
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
