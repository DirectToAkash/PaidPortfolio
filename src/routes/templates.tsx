import { createFileRoute } from "@tanstack/react-router";
import Templates from "@/pages/templates";

const title = 'Portfolio Website Designs & Pricing | PaidPortfolio';
const description =
  'Browse ready-to-personalise portfolio website designs for doctors, lawyers, designers, developers and creators in India. Enquire for pricing and timelines.';

export const Route = createFileRoute("/templates")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/templates" },
    ],
    links: [{ rel: "canonical", href: "/templates" }],
  }),
  component: Templates,
});
