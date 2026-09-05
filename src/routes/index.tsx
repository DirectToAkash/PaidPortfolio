import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/home";

const title = "Portfolio Websites for Professionals in India | PaidPortfolio";
const description =
  "PaidPortfolio designs job-winning portfolio websites for doctors, lawyers, designers, developers and other professionals in India. Pay after you approve the work.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});
