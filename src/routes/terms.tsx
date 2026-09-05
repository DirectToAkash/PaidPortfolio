import { createFileRoute } from "@tanstack/react-router";
import Terms from "@/pages/terms";

const title = 'Terms of Service | PaidPortfolio';
const description =
  "The terms that apply when you use PaidPortfolio's website and portfolio design services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});
