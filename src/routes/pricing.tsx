import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/site/footer";
import { templates } from "@/data/templates";

const title = "Portfolio Website Cost in India | PaidPortfolio Pricing";
const description =
  "What a portfolio website costs in India. Ready-made designs start at Rs 950; custom builds are quoted after your enquiry. No advance payment before you see the work.";

const readyMadePrice = Math.min(...templates.map((t) => t.priceInr));

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Pricing", item: "/pricing" },
          ],
        }),
      },
    ],
  }),
  component: PricingPage,
});

const costFactors = [
  {
    title: "How many pages you need",
    body: "A single-page portfolio is quicker to build than a site with separate case study pages, a blog and a services section.",
  },
  {
    title: "Whether the content is ready",
    body: "If your project write-ups, photos and resume are ready to send, the build is faster and cheaper than one where we shape the content with you.",
  },
  {
    title: "Ready-made design or custom",
    body: "Personalising one of our existing designs costs less than a layout designed from scratch around your work.",
  },
  {
    title: "Extras like booking or payments",
    body: "Appointment forms, blogs, multi-language pages or payment links add build time and are quoted separately.",
  },
];

export default function PricingPage() {
  return (
    <>
      <main className="min-h-screen bg-black pt-28 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-14 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight mb-5">
              How much a portfolio website costs in India
            </h1>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed">
              Straight answer: personalising one of our ready-made designs starts at Rs{" "}
              {readyMadePrice}. A fully custom portfolio is quoted after you tell us what you
              need, because the price depends on how much there is to build.
            </p>
          </header>

          <section className="grid gap-4 sm:grid-cols-2 mb-16">
            <div className="glass border border-white/10 rounded-2xl p-7">
              <h2 className="text-white font-semibold text-lg mb-1">Ready-made design</h2>
              <p className="text-3xl font-bold text-white mb-4">
                Rs {readyMadePrice}
                <span className="text-white/40 text-sm font-normal"> onwards</span>
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Pick a design built for your profession",
                  "We fill it with your content and photos",
                  "Live on your own domain",
                  "Mobile-first and fast loading",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-white/50 text-sm">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-white/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/templates">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 w-full"
                >
                  Browse designs
                </Button>
              </Link>
            </div>

            <div className="glass border border-white/20 rounded-2xl p-7">
              <h2 className="text-white font-semibold text-lg mb-1">Custom portfolio</h2>
              <p className="text-3xl font-bold text-white mb-4">
                Quoted
                <span className="text-white/40 text-sm font-normal"> after your enquiry</span>
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Layout designed around your work",
                  "Case studies, blog or booking if you need them",
                  "Copy structured with you before we build",
                  "One fixed price agreed before work starts",
                ].map((item) => (
                  <li key={item} className="flex gap-2 text-white/50 text-sm">
                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-white/70" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/custom">
                <Button className="bg-white text-black hover:bg-white/90 w-full">
                  Get a quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">What changes the price</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {costFactors.map((factor) => (
                <div key={factor.title} className="border-b border-white/10 pb-5">
                  <h3 className="text-white font-medium mb-2 text-base">{factor.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{factor.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              How our pricing compares to the alternatives
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-white/40 border-b border-white/10">
                  <tr>
                    <th className="py-3 pr-4 font-medium">Option</th>
                    <th className="py-3 pr-4 font-medium">What you pay for</th>
                    <th className="py-3 font-medium">Your effort</th>
                  </tr>
                </thead>
                <tbody className="text-white/50">
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white/80">Free website builder</td>
                    <td className="py-3 pr-4">
                      Nothing up front, then a yearly plan to remove their branding
                    </td>
                    <td className="py-3">You design, write and maintain everything</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white/80">Building it yourself</td>
                    <td className="py-3 pr-4">Domain and hosting only</td>
                    <td className="py-3">Several weekends, plus every future update</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-3 pr-4 text-white/80">Agency</td>
                    <td className="py-3 pr-4">A full project process built for companies</td>
                    <td className="py-3">Meetings, briefs and longer timelines</td>
                  </tr>
                  <tr>
                    <td className="py-3 pr-4 text-white/80">PaidPortfolio</td>
                    <td className="py-3 pr-4">
                      A finished portfolio on your own domain, at a price agreed up front
                    </td>
                    <td className="py-3">Send your details, review, approve</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-6">Pricing questions</h2>
            <div className="space-y-5">
              {[
                {
                  q: "Do I pay before you start?",
                  a: "You see the finished work before you pay for it. The exact terms are confirmed in writing when we agree the quote.",
                },
                {
                  q: "Is the domain and hosting included in the price?",
                  a: "Tell us in your enquiry whether you already own a domain. If not, we will include what it costs in the quote so there are no surprises.",
                },
                {
                  q: "Are there ongoing monthly fees?",
                  a: "The build is a one-time price. Anything recurring, like a domain renewal, is listed separately in the quote.",
                },
                {
                  q: "What if I want changes after it goes live?",
                  a: "Small text and image updates are usually quick. Anything larger is quoted before we do it.",
                },
              ].map((faq) => (
                <div key={faq.q} className="border-b border-white/10 pb-5">
                  <h3 className="text-white font-medium mb-2 text-base">{faq.q}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          <div className="glass border border-white/10 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Get an exact price</h2>
            <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
              Tell us what you do and what you need. We reply with a fixed price and a
              timeline before anything starts.
            </p>
            <Link to="/custom">
              <Button className="bg-white text-black hover:bg-white/90">
                Get my quote
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
