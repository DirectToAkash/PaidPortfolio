import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/site/footer";
import { audiences } from "@/data/audiences";

const title = "Who We Build Portfolio Websites For | PaidPortfolio";
const description =
  "Done-for-you portfolio websites for students, freshers, developers, designers, freelancers, MBA graduates and clinicians across India.";

export const Route = createFileRoute("/for/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/for" },
    ],
    links: [{ rel: "canonical", href: "/for" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Who we build for", item: "/for" },
          ],
        }),
      },
    ],
  }),
  component: AudienceIndex,
});

function AudienceIndex() {
  return (
    <>
      <main className="min-h-screen bg-black pt-28 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-14 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-5">
              Who we build portfolio websites for
            </h1>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed">
              Every portfolio is built around the person reading it. Pick the one closest to
              you and see exactly what your site would include.
            </p>
          </header>

          <div className="grid gap-4 sm:grid-cols-2">
            {audiences.map((audience) => (
              <Link
                key={audience.slug}
                to="/for/$audience"
                params={{ audience: audience.slug }}
                className="glass border border-white/10 rounded-2xl p-6 hover:border-white/25 transition-colors"
              >
                <h2 className="text-white font-semibold text-lg mb-2">{audience.heading}</h2>
                <p className="text-white/45 text-sm leading-relaxed">{audience.description}</p>
                <span className="inline-flex items-center gap-2 text-white/60 text-sm mt-4">
                  See what's included <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-14 glass border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Not on the list?</h2>
            <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
              We build for any profession. Tell us what you do and we'll come back with a
              plan, a price and a timeline.
            </p>
            <Link to="/custom">
              <Button className="bg-white text-black hover:bg-white/90">
                Start a custom portfolio
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
