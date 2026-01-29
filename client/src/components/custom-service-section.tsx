import { motion } from "framer-motion";
import { MessageSquare, Palette, Code, Rocket, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Discovery Call",
    description: "We discuss your goals, style preferences, and project requirements in detail.",
    color: "from-white/20 to-transparent",
  },
  {
    number: "02",
    icon: Palette,
    title: "Design Phase",
    description: "Our designers create a custom mockup based on your brand and vision.",
    color: "from-white/15 to-transparent",
  },
  {
    number: "03",
    icon: Code,
    title: "Development",
    description: "We build your portfolio with clean code, animations, and SEO optimization.",
    color: "from-white/10 to-transparent",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Support",
    description: "We deploy your portfolio and provide ongoing support and updates.",
    color: "from-white/5 to-transparent",
  },
];

export function CustomServiceSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-white/3 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/2 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4 block">
            Custom Service
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Want a<span className="text-glow"> Custom Portfolio?</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Get a fully custom portfolio website designed and built from scratch, 
            tailored to your unique style and professional needs.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent hidden lg:block" />
          
          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div
                    className={`glass rounded-xl p-6 inline-block max-w-md ${
                      index % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="text-xs text-white/40 font-mono">{step.number}</span>
                        <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-white/60">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 w-16 h-16 rounded-full glass flex items-center justify-center border-2 border-white/20 glow-sm">
                  <span className="text-lg font-bold text-white">{step.number}</span>
                </div>

                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
            <p className="text-white/60 mb-6">
              Tell us about your vision and we&apos;ll create a portfolio that helps you land your dream opportunity.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle className="w-4 h-4 text-white" />
                <span className="text-sm">Unlimited Revisions</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle className="w-4 h-4 text-white" />
                <span className="text-sm">SEO Optimized</span>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <CheckCircle className="w-4 h-4 text-white" />
                <span className="text-sm">Mobile Responsive</span>
              </div>
            </div>
            <Link href="/custom">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 glow-sm"
                data-testid="button-request-custom"
              >
                Request Custom Portfolio
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
