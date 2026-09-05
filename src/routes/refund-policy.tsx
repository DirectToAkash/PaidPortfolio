import { createFileRoute } from "@tanstack/react-router";
import RefundPolicy from "@/pages/refund-policy";

const title = 'Refund Policy | PaidPortfolio';
const description =
  "When and how refunds apply to PaidPortfolio's portfolio website design services.";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPolicy,
});
