import { createFileRoute } from "@tanstack/react-router";
import Success from "@/pages/success";

const title = 'Thank You | PaidPortfolio';
const description =
  "Your request has been received. We'll be in touch shortly.";

export const Route = createFileRoute("/success")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/success" },
      { name: "robots", content: "noindex" },
    ],
    links: [{ rel: "canonical", href: "/success" }],
  }),
  component: Success,
});
