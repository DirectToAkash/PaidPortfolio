import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    content: "My portfolio from PaidPortfolio helped me land interviews at top tech companies. The design is stunning and recruiters always compliment it.",
    avatar: "SC",
    rating: 5,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "UX Designer at Apple",
    content: "I went from getting zero callbacks to multiple offers. The custom portfolio they built for me truly showcases my work in the best light.",
    avatar: "MJ",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Freelance Developer",
    content: "Worth every penny! My client inquiries increased 10x after launching my new portfolio. The ROI is incredible.",
    avatar: "ER",
    rating: 5,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Full Stack Developer",
    content: "The attention to detail is remarkable. Every animation, every transition is perfect. I couldn't be happier with my portfolio.",
    avatar: "DK",
    rating: 5,
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Product Designer",
    content: "The team understood exactly what I needed. My portfolio now reflects my personal brand perfectly. Highly recommended!",
    avatar: "PP",
    rating: 5,
  },
  {
    id: 6,
    name: "Alex Thompson",
    role: "Frontend Developer",
    content: "I purchased a template and customized it easily. The code quality is excellent and the documentation is super helpful.",
    avatar: "AT",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 dot-pattern opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Loved by<span className="text-glow"> Professionals</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="glass rounded-xl p-6 h-full relative overflow-hidden group hover:bg-white/5 transition-colors">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-white/10" />
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-white text-white" />
                  ))}
                </div>
                
                <p className="text-white/80 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/50">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
