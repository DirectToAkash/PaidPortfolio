import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Star, Search, Filter, ExternalLink, ShoppingCart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { PortfolioTemplate } from "@shared/schema";

const categories = ["All", "Developer", "Designer", "Minimal", "Creative", "Modern", "Personal"];

export default function Templates() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data: templates, isLoading } = useQuery<PortfolioTemplate[]>({
    queryKey: ["/api/templates"],
  });

  const filteredTemplates = templates?.filter((template) => {
    const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Helmet>
        <title>Portfolio Templates - Buy Premium Portfolio Designs | PaidPortfolio</title>
        <meta
          name="description"
          content="Browse our collection of stunning portfolio website templates. Professional designs for developers, designers, and creatives. One-time purchase, lifetime access."
        />
        <meta
          name="keywords"
          content="buy portfolio website, portfolio templates, developer portfolio, designer portfolio, website templates"
        />
        <link rel="canonical" href="https://paidportfolio.com/templates" />
      </Helmet>

      <main className="min-h-screen pt-24 pb-16">
        <div className="absolute inset-0 bg-black grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Portfolio<span className="text-glow"> Templates</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Choose from our collection of premium, hand-crafted portfolio templates.
              All templates are fully responsive and easy to customize.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col lg:flex-row gap-4 mb-12"
          >
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="search"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 h-12"
                data-testid="input-search-templates"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <Filter className="w-5 h-5 text-white/40" />
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={
                    selectedCategory === category
                      ? "bg-white text-black hover:bg-white/90"
                      : "border-white/20 text-white hover:bg-white/10"
                  }
                  data-testid={`button-filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="glass rounded-xl overflow-hidden">
                  <Skeleton className="h-48 w-full bg-white/5" />
                  <div className="p-5 space-y-3">
                    <Skeleton className="h-6 w-2/3 bg-white/5" />
                    <Skeleton className="h-4 w-full bg-white/5" />
                    <div className="flex justify-between">
                      <Skeleton className="h-6 w-16 bg-white/5" />
                      <Skeleton className="h-9 w-24 bg-white/5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates?.map((template, index) => (
                <motion.div
                  key={template.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <div className="glass rounded-xl overflow-hidden hover:glow transition-all duration-300">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={template.previewImage}
                        alt={template.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20">
                          {template.category}
                        </span>
                      </div>
                      {template.isFeatured && (
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 rounded-full text-xs font-medium bg-white text-black">
                            Featured
                          </span>
                        </div>
                      )}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-white/20 text-white hover:bg-white/10"
                            data-testid={`button-preview-${template.id}`}
                          >
                            <ExternalLink className="w-4 h-4 mr-1" />
                            Preview
                          </Button>
                          <Button
                            size="sm"
                            className="bg-white text-black hover:bg-white/90"
                            data-testid={`button-buy-${template.id}`}
                          >
                            <ShoppingCart className="w-4 h-4 mr-1" />
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-white">{template.name}</h3>
                        <span className="text-xl font-bold text-white">${template.price}</span>
                      </div>
                      <p className="text-sm text-white/50 mb-3 line-clamp-2">{template.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < (template.rating || 5) ? "fill-white text-white" : "text-white/30"
                                }`}
                            />
                          ))}
                          <span className="text-xs text-white/50 ml-1">
                            ({template.reviewCount || 0})
                          </span>
                        </div>
                        {template.techStack && (
                          <div className="flex gap-1">
                            {template.techStack.slice(0, 3).map((tech, i) => (
                              <span
                                key={i}
                                className="text-xs px-2 py-0.5 rounded bg-white/5 text-white/50"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {filteredTemplates?.length === 0 && !isLoading && (
            <div className="text-center py-16">
              <p className="text-white/60">No templates found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
