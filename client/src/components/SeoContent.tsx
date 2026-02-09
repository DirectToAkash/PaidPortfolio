export default function SeoContent() {
  return (
    <section className="relative py-12 overflow-hidden">
      {/* Subtle background effects */}
      <div className="absolute inset-0 dot-pattern opacity-20" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Grid layout for separate boxes */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Box 1: Main SEO content */}
          <div className="glass rounded-2xl p-6 md:p-8 border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-lg hover:shadow-white/5">
            {/* H1 - Primary SEO heading */}
            <h1 className="text-xl md:text-2xl font-bold text-white/90 mb-3 leading-tight">
              Professional Portfolio Website Templates & Custom Portfolio Design
            </h1>

            {/* Primary description */}
            <p className="text-white/50 text-sm leading-relaxed">
              PaidPortfolio offers modern portfolio website templates for students, developers,
              designers, and freelancers. Whether you want to buy a ready-made portfolio website
              or need a custom portfolio design for jobs and clients, we help you stand out online.
            </p>
          </div>

          {/* Box 2: Secondary SEO content */}
          <div className="glass rounded-2xl p-6 md:p-8 border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-lg hover:shadow-white/5">
            {/* H2 - Secondary SEO heading */}
            <h2 className="text-xl md:text-2xl font-semibold text-white/90 mb-3 leading-tight">
              Portfolio Website Templates for Students & Professionals
            </h2>

            {/* Secondary description */}
            <p className="text-white/50 text-sm leading-relaxed">
              Our portfolio templates are optimized for job applications, freelancing, and personal branding.
              Showcase your skills, projects, and experience with a professional portfolio website design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}