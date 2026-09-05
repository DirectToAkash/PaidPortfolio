import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/contact";

const title = 'Contact PaidPortfolio — Talk to Our Team';
const description =
  'Questions about a portfolio website? Message the PaidPortfolio team in Noida, India. We usually reply within 24 hours.';

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});
