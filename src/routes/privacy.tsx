import { createFileRoute } from "@tanstack/react-router";
import Privacy from "@/pages/privacy";

const title = 'Privacy Policy | PaidPortfolio';
const description =
  'How PaidPortfolio collects, uses and protects the information you share with us.';

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});
