import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/site/footer";
import { getAudience, audiencesBySlug } from "@/data/audiences";
import { getBlogPost } from "@/data/blog";

export const Route = createFileRoute("/for/$audience")({
  loader: ({ params }) => {
    const audience = getAudience(params.audience);
    if (!audience) throw notFound();
    return { audience };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Page unavailable | PaidPortfolio" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { audience } = loaderData;
    const url = `/for/${params.audience}`;
    return {
      meta: [
        { title: audience.title },
        { name: "description", content: audience.description },
        { property: "og:title", content: audience.title },
        { property: "og:description", content: audience.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: audience.heading,
            description: audience.description,
            serviceType: "Portfolio website design and development",
            areaServed: "IN",
            provider: { "@type": "Organization", name: "PaidPortfolio" },
            url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "/" },
              { "@type": "ListItem", position: 2, name: "Who we build for", item: "/for" },
              { "@type": "ListItem", position: 3, name: audience.label, item: url },
            ],
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="min-h-screen bg-black pt-32 pb-20 text-center">
      <h1 className="text-2xl font-bold text-white mb-4">Page not found</h1>
      <Link to="/for" className="text-white/60 underline hover:text-white">
        See who we build portfolios for
      </Link>
    </main>
  ),
  component: AudiencePage,
});

function AudiencePage() {
  const { audience } = Route.useLoaderData();
  const related = audience.relatedSlugs
    .map((slug) => audiencesBySlug[slug])
    .filter((item): item is NonNullable<typeof item> => Boolean(item));
  const guides = audience.guideSlugs
    .map((slug) => getBlogPost(slug))
    .filter((post): post is NonNullable<ReturnType<typeof getBlogPost>> => Boolean(post));

  return (
    <>
      <main className="min-h-screen bg-black pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-xs text-white/30 mb-8">
            <Link to="/" className="hover:text-white/70">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/for" className="hover:text-white/70">
              Who we build for
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/50">{audience.label}</span>
          </nav>

          <header className="mb-14">
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
              {audience.heading}
            </h1>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed max-w-2xl">
              {audience.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link to="/custom">
                <Button className="bg-white text-black hover:bg-white/90 w-full sm:w-auto">
                  Get a quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/templates">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  Browse designs
                </Button>
              </Link>
            </div>
          </header>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              What usually goes wrong
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {audience.problems.map((problem) => (
                <div
                  key={problem.title}
                  className="glass border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-white font-semibold mb-2 text-base">
                    {problem.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{problem.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              What your portfolio includes
            </h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {audience.includes.map((item) => (
                <li key={item} className="flex gap-3 text-white/55 text-sm leading-relaxed">
                  <Check className="w-4 h-4 mt-0.5 shrink-0 text-white/70" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">How it works</h2>
            <ol className="space-y-5">
              {audience.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="shrink-0 w-8 h-8 rounded-full border border-white/15 text-white/60 text-sm flex items-center justify-center">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-white font-semibold text-base mb-1">{step.title}</h3>
                    <p className="text-white/45 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Common questions</h2>
            <div className="space-y-5">
              {audience.faqs.map((faq) => (
                <div key={faq.q} className="border-b border-white/10 pb-5">
                  <h3 className="text-white font-medium mb-2 text-base">{faq.q}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {guides.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">Related reading</h2>
              <div className="space-y-3">
                {guides.map((post) => (
                  <Link
                    key={post.slug}
                    to="/blog/$slug"
                    params={{ slug: post.slug }}
                    className="block glass border border-white/10 rounded-xl p-5 hover:border-white/25 transition-colors"
                  >
                    <span className="text-white text-sm font-medium">{post.title}</span>
                    <p className="text-white/40 text-sm mt-1">{post.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {related.length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-white mb-6">
                We also build portfolios for
              </h2>
              <div className="flex flex-wrap gap-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to="/for/$audience"
                    params={{ audience: item.slug }}
                    className="text-sm text-white/60 border border-white/15 rounded-full px-4 py-2 hover:text-white hover:border-white/35 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="glass border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">
              Ready to get yours built?
            </h2>
            <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
              Send us what you have. We reply with a plan, a price and a timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/custom">
                <Button className="bg-white text-black hover:bg-white/90">
                  Start your portfolio
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  See pricing
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
