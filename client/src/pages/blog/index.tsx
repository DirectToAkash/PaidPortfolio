import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Clock, Tag } from "lucide-react";

const blogPosts = [
  {
    slug: "best-premium-portfolio-website-india",
    title: "Best Premium Portfolio Website for Students, Doctors, Teachers & Professionals in India",
    description: "Looking for a premium portfolio website? PaidPortfolio builds the best paid portfolio websites for students, doctors, teachers, and experienced professionals in India.",
    date: "April 20, 2025",
    readTime: "8 min read",
    tags: ["Premium Portfolio", "Portfolio Design", "India"],
    featured: true,
  },
  {
  slug: "portfolio-website-for-doctors-india",
  title: "Portfolio Website for Doctors in India — Complete Guide 2025",
  description: "Over 80% of patients search online before choosing a doctor. Get a complete guide to building a professional portfolio website for doctors in India.",
  date: "April 21, 2025",
  readTime: "9 min read",
  tags: ["Doctor Website", "Medical Portfolio", "India"],
  featured: false,
}
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-black pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Portfolio Tips & Insights
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Expert guides on getting the best premium portfolio website — for students, professionals, doctors, teachers, and more.
          </p>
        </motion.div>

        <div className="grid gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="glass border border-white/10 hover:border-white/25 rounded-2xl p-7 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-white/5 group">
                  {post.featured && (
                    <span className="inline-block text-xs font-semibold text-black bg-white rounded-full px-3 py-1 mb-4">
                      Featured
                    </span>
                  )}
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors leading-snug">
                    {post.title}
                  </h2>
                  <p className="text-white/50 text-sm mb-5 leading-relaxed">
                    {post.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-white/40">
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                    <span>{post.date}</span>
                    {post.tags.map(tag => (
                      <span key={tag} className="flex items-center gap-1"><Tag className="w-3 h-3" />{tag}</span>
                    ))}
                    <span className="ml-auto flex items-center gap-1 text-white/60 group-hover:text-white transition-colors font-medium">
                      Read article <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
