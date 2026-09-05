import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/site/footer";
import { getBlogPost } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Guide unavailable | PaidPortfolio" }, { name: "robots", content: "noindex" }],
      };
    }
    const { post } = loaderData;
    const url = `/blog/${params.slug}`;
    return {
      meta: [
        { title: `${post.title} | PaidPortfolio` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.heading,
            description: post.description,
            datePublished: post.isoDate,
            author: { "@type": "Organization", name: "PaidPortfolio" },
            publisher: { "@type": "Organization", name: "PaidPortfolio" },
            mainEntityOfPage: url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "/blog" },
              { "@type": "ListItem", position: 3, name: post.heading, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="min-h-screen bg-black pt-32 pb-20 text-center">
      <h1 className="text-2xl font-bold text-white mb-4">Guide not found</h1>
      <Link to="/blog" className="text-white/60 underline hover:text-white">
        Back to all guides
      </Link>
    </main>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <>
      <main className="min-h-screen bg-black pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-10 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-white/10 text-white/60 rounded-full px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              {post.heading}
            </h1>
            {post.intro ? (
              <p className="text-white/50 text-base leading-relaxed mb-5">{post.intro}</p>
            ) : null}
            <div className="flex items-center gap-4 text-sm text-white/30 border-t border-white/10 pt-5">
              <time dateTime={post.isoDate}>{post.date}</time>
              <span>·</span>
              <span>{post.readTime}</span>
              <span>·</span>
              <span>PaidPortfolio</span>
            </div>
          </motion.header>

          {/* Static, author-written article markup shipped with the app. */}
          <article
            className="prose-custom"
            dangerouslySetInnerHTML={{ __html: post.bodyHtml }}
          />

          <div className="mt-14 glass border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Get your portfolio website</h2>
            <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
              Tell us about your work and we'll reply with a plan, a price and a timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/custom">
                <Button className="bg-white text-black hover:bg-white/90">
                  Start a custom portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/templates">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Browse designs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
