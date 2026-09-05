import { motion } from "framer-motion";
import { 
  Smartphone, 
  Zap, 
  Target, 
  Palette, 
  Search, 
  Shield,
  Layers,
  Sparkles
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Perfectly responsive on all devices - phones, tablets, and desktops.",
  },
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Lightning-fast load times with optimized code and assets.",
  },
  {
    icon: Target,
    title: "Recruiter-Focused",
    description: "Designed to highlight what recruiters want to see.",
  },
  {
    icon: Palette,
    title: "Modern Design",
    description: "Clean, contemporary aesthetics that make a lasting impression.",
  },
  {
    icon: Search,
    title: "SEO Ready",
    description: "Built with search engine optimization best practices.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "SSL secured with 99.9% uptime guarantee.",
  },
  {
    icon: Layers,
    title: "Easy to Update",
    description: "Simple interface to update your content anytime.",
  },
  {
    icon: Sparkles,
    title: "Premium Animations",
    description: "Smooth, professional animations that captivate visitors.",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4 block">
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to<span className="text-glow"> Succeed</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Our portfolios come packed with features that help you stand out and get noticed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="glass rounded-xl p-6 h-full text-center hover:bg-white/5 transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/10 group-hover:glow-sm transition-all">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/60">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
