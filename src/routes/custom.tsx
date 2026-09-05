import { createFileRoute } from "@tanstack/react-router";
import Custom from "@/pages/custom";

const title = 'Custom Portfolio Website Design Service | PaidPortfolio';
const description =
  "Get a fully custom portfolio website designed and built from scratch for your profession, brand and goals. Tell us what you need and we'll reply within 24 hours.";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/custom" },
    ],
    links: [{ rel: "canonical", href: "/custom" }],
  }),
  component: Custom,
});
