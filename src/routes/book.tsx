import { createFileRoute } from "@tanstack/react-router";
import Book from "@/pages/book";

const title = 'Book a Free Consultation Call | PaidPortfolio';
const description =
  "Pick a date and time for a free consultation call about your portfolio website. We'll discuss your goals, timeline and budget.";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: Book,
});
