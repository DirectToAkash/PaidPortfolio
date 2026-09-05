import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { templates as allTemplates, type Template } from "@/data/templates";

export function TemplatesPreviewSection() {

  const templates = allTemplates;
  const isLoading = false;

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#050505] to-black" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12"
        >
          <div>
            <span className="text-sm font-medium text-white/50 uppercase tracking-widest mb-4 block">
              Template Store
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Pre-Made<span className="text-glow"> Portfolio Templates</span>
            </h2>
          </div>
          <Link to="/templates">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 group"
              data-testid="button-view-all-templates"
            >
              View All Templates
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.slice(0, 6).map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {template.demoUrl ? (
                      <a href={template.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          className="bg-white text-black hover:bg-white/90"
                        >
                          Quick View
                        </Button>
                      </a>
                    ) : (
                      <Button
                        size="sm"
                        className="bg-white text-black hover:bg-white/90"
                        data-testid={`button-quick-view-${template.id}`}
                      >
                        Quick View
                      </Button>
                    )}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white group-hover:text-glow transition-all mb-2">
                    {template.name}
                  </h3>
                  <p className="text-sm text-white/50 line-clamp-2">{template.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

