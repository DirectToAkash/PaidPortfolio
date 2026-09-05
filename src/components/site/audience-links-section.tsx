import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { audiences } from "@/data/audiences";

export function AudienceLinksSection() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          Portfolio websites built for your field
        </h2>
        <p className="text-white/45 text-sm sm:text-base mb-8 max-w-2xl">
          Every portfolio is shaped around the person who will read it. Find yours below.
        </p>

        <div className="flex flex-wrap gap-3">
          {audiences.map((audience) => (
            <Link
              key={audience.slug}
              to="/for/$audience"
              params={{ audience: audience.slug }}
              className="text-sm text-white/60 border border-white/15 rounded-full px-4 py-2 hover:text-white hover:border-white/35 transition-colors"
            >
              {audience.label}
            </Link>
          ))}
        </div>

        <Link
          to="/for"
          className="inline-flex items-center gap-2 text-white/70 text-sm mt-8 hover:text-white transition-colors"
        >
          See everyone we build for <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
