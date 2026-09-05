import { motion } from "framer-motion";
import { Briefcase, TrendingUp, Users, Award, Globe, Zap } from "lucide-react";

const benefits = [
  {
    icon: Briefcase,
    title: "Land Your Dream Job",
    description: "Recruiters spend just 6 seconds reviewing a resume. A portfolio makes you memorable.",
  },
  {
    icon: TrendingUp,
    title: "Showcase Your Growth",
    description: "Display your best projects, skills, and achievements in an interactive format.",
  },
  {
    icon: Users,
    title: "Stand Out From Competition",
    description: "Only 7% of job seekers have a portfolio. Be in the top tier of applicants.",
  },
  {
    icon: Award,
    title: "Build Credibility",
    description: "A professional portfolio establishes trust and demonstrates your expertise.",
  },
  {
    icon: Globe,
    title: "24/7 Global Presence",
    description: "Your portfolio works around the clock, showcasing your work to the world.",
  },
  {
    icon: Zap,
    title: "Instant Updates",
    description: "Easily update your portfolio as you grow and complete new projects.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function WhyPortfolioSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4 block">
            Why You Need This
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Why You Need a<span className="text-glow"> Portfolio Website</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            In today&apos;s competitive job market, a resume alone isn&apos;t enough. 
            Here&apos;s why a portfolio website is essential for your career.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
            >
              <div className="glass rounded-xl p-6 h-full hover:bg-white/5 transition-all duration-300 gradient-border">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/60">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
