import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

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
          className="text-center mb-12"
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

        <div className="relative group">
          <div className="overflow-hidden p-2 -m-2" ref={emblaRef}>
            <div className="flex touch-pan-y -ml-4 md:-ml-6">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] pl-4 md:pl-6 min-w-0"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="h-full"
                  >
                    <div className="glass rounded-xl p-6 h-full relative overflow-hidden hover:bg-white/5 transition-colors border border-white/10 hover:border-white/20">
                      <Quote className="absolute top-4 right-4 w-8 h-8 text-white/10" />

                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-white text-white" />
                        ))}
                      </div>

                      <p className="text-white/80 mb-6 leading-relaxed min-h-[80px]">
                        &ldquo;{testimonial.content}&rdquo;
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white font-semibold text-sm ring-1 ring-white/20">
                          {testimonial.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-sm text-white/50">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 items-center justify-center text-white/70 hover:text-white hover:bg-black hover:border-white/30 transition-all backdrop-blur-sm shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={scrollNext}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 rounded-full bg-black/50 border border-white/10 items-center justify-center text-white/70 hover:text-white hover:bg-black hover:border-white/30 transition-all backdrop-blur-sm shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-8 bg-white" : "bg-white/20 hover:bg-white/40"
                }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
