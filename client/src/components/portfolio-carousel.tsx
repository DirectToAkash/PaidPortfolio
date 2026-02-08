import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const portfolioItems = [
  {
    id: 1,
    name: "Creative Studio",
    category: "Designer",
    price: 10,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=500&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    name: "Open Book Portfolio",
    category: "Personal",
    price: 10,
    image: "/portfolio-creative.png",
    rating: 5,
    link: "https://directtoakash.github.io/NewPortfolio/",
  },
  {
    id: 3,
    name: "Advocate Portfolio",
    category: "Professional",
    price: 10,
    image: "/portfolio-advocate.png",
    rating: 5,
    link: "https://advocateportfolio.lovable.app/",
  },
  {
    id: 4,
    name: "Dentist Portfolio",
    category: "Medical",
    price: 10,
    image: "/portfolio-dentist.png",
    rating: 5,
    link: "https://dentistportfolio.lovable.app/",
  },
  {
    id: 5,
    name: "Student Portfolio",
    category: "Student",
    price: 10,
    image: "/portfolio-aman.png",
    rating: 5,
    link: "https://aman-yadav.vercel.app/",
  },
];

export function PortfolioCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const isMobile = useIsMobile();

  // Touch handling state
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
  }, []);

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setIsPaused(false);
      return;
    }

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
    setIsPaused(false);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const getCardStyle = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = ((diff + portfolioItems.length) % portfolioItems.length);
    const adjustedDiff = normalizedDiff > portfolioItems.length / 2
      ? normalizedDiff - portfolioItems.length
      : normalizedDiff;

    // Mobile-specific adjustments (stacked cards/simpler view) or just adjusted scaling/position
    if (isMobile) {
      if (adjustedDiff === 0) {
        return {
          x: 0,
          scale: 1,
          rotateY: 0,
          z: 100,
          opacity: 1,
        };
      } else if (adjustedDiff === 1 || adjustedDiff === -1 * (portfolioItems.length - 1)) {
        return {
          x: 100, // Reduced translation
          scale: 0.9,
          rotateY: 0, // No rotation to avoid clipping 
          z: 50,
          opacity: 0.5,
        };
      } else if (adjustedDiff === -1 || adjustedDiff === portfolioItems.length - 1) {
        return {
          x: -100, // Reduced translation
          scale: 0.9,
          rotateY: 0,
          z: 50,
          opacity: 0.5,
        };
      } else {
        return {
          x: adjustedDiff > 0 ? 200 : -200,
          scale: 0.8,
          rotateY: 0,
          z: -50,
          opacity: 0,
        };
      }
    }

    // Desktop styles (preserved)
    if (adjustedDiff === 0) {
      return {
        x: 0,
        scale: 1,
        rotateY: 0,
        z: 100,
        opacity: 1,
      };
    } else if (adjustedDiff === 1 || adjustedDiff === -1 * (portfolioItems.length - 1)) {
      return {
        x: 320,
        scale: 0.85,
        rotateY: -25,
        z: 50,
        opacity: 0.7,
      };
    } else if (adjustedDiff === -1 || adjustedDiff === portfolioItems.length - 1) {
      return {
        x: -320,
        scale: 0.85,
        rotateY: 25,
        z: 50,
        opacity: 0.7,
      };
    } else if (adjustedDiff === 2 || adjustedDiff === -1 * (portfolioItems.length - 2)) {
      return {
        x: 550,
        scale: 0.7,
        rotateY: -35,
        z: 0,
        opacity: 0.4,
      };
    } else if (adjustedDiff === -2 || adjustedDiff === portfolioItems.length - 2) {
      return {
        x: -550,
        scale: 0.7,
        rotateY: 35,
        z: 0,
        opacity: 0.4,
      };
    }
    return {
      x: adjustedDiff > 0 ? 700 : -700,
      scale: 0.5,
      rotateY: adjustedDiff > 0 ? -45 : 45,
      z: -50,
      opacity: 0,
    };
  };

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Explore Our Portfolio Designs
            <span className="text-glow"> in Action</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Browse through our collection of stunning portfolio templates designed to make you stand out
          </p>
        </motion.div>

        <div
          className="relative h-[450px] perspective-1000 touch-pan-y"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ perspective: "1000px" }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {portfolioItems.map((item, index) => {
              const style = getCardStyle(index);
              return (
                <motion.div
                  key={item.id}
                  className="absolute w-[300px] sm:w-[380px] cursor-pointer"
                  animate={{
                    x: style.x,
                    scale: style.scale,
                    rotateY: style.rotateY,
                    zIndex: Math.round(style.z),
                    opacity: style.opacity,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => setCurrentIndex(index)}
                  data-testid={`card-portfolio-${item.id}`}
                >
                  <div
                    className={`glass rounded-xl overflow-hidden ${index === currentIndex ? "glow-white animate-pulse-glow" : ""
                      }`}
                  >
                    <div className="relative h-48 sm:h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                      <div className="absolute top-3 right-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                        <div className="flex items-center gap-1">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-white text-white" />
                          ))}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-white">${item.price}</span>
                        {item.link ? (
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              className="bg-white text-black hover:bg-white/90"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              Preview
                            </Button>
                          </a>
                        ) : (
                          <Button
                            size="sm"
                            className="bg-white text-black hover:bg-white/90"
                            data-testid={`button-preview-${item.id}`}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Preview
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-black/90 border border-white/30 items-center justify-center text-white transition-all hover:bg-white hover:text-black hover:scale-110 shadow-lg hover:shadow-white/25 backdrop-blur-sm"
            data-testid="button-carousel-prev"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-black/90 border border-white/30 items-center justify-center text-white transition-all hover:bg-white hover:text-black hover:scale-110 shadow-lg hover:shadow-white/25 backdrop-blur-sm"
            data-testid="button-carousel-next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-8">
          {portfolioItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentIndex
                ? "w-8 bg-white"
                : "bg-white/30 hover:bg-white/50"
                }`}
              data-testid={`button-dot-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

