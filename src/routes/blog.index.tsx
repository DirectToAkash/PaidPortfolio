import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/site/footer";
import { blogPosts } from "@/data/blog";

const title = "Portfolio Website Guides for Indian Professions | PaidPortfolio Blog";
const description =
  "Profession-by-profession guides to building a portfolio website in India — what to include, what it costs, and how it wins you work.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const posts = [...blogPosts].sort((a, b) => b.isoDate.localeCompare(a.isoDate));

  return (
    <>
      <main className="min-h-screen bg-black pt-28 pb-20">
        <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-14 text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Portfolio <span className="text-glow">Guides</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Practical, profession-specific guides on building a portfolio website in India —
              what to put on it, what it should cost, and how it brings you work.
            </p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(index * 0.03, 0.3) }}
                className="glass border border-white/10 rounded-2xl p-6 hover:border-white/30 transition-colors"
              >
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white/10 text-white/60 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-lg font-semibold text-white mb-2 leading-snug">
                  <Link to="/blog/$slug" params={{ slug: post.slug }}>
                    {post.heading}
                  </Link>
                </h2>
                <p className="text-sm text-white/50 mb-4 line-clamp-3">{post.description}</p>
                <div className="flex items-center justify-between text-xs text-white/30">
                  <span>
                    {post.date} · {post.readTime}
                  </span>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors"
                  >
                    Read guide <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
