import { createFileRoute } from "@tanstack/react-router";
import { blogPosts } from "@/data/blog";
import { audiences } from "@/data/audiences";

const BASE_URL = "https://paid-portfolio-pro.lovable.app";

const staticPaths = [
  "/",
  "/templates",
  "/pricing",
  "/custom",
  "/for",
  "/book",
  "/contact",
  "/blog",
  "/privacy",
  "/terms",
  "/refund-policy",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: () => {
        const urls = [
          ...staticPaths.map((path) => `  <url><loc>${BASE_URL}${path}</loc></url>`),
          ...audiences.map(
            (audience) => `  <url><loc>${BASE_URL}/for/${audience.slug}</loc></url>`,
          ),
          ...blogPosts.map(
            (post) => `  <url><loc>${BASE_URL}/blog/${post.slug}</loc></url>`,
          ),
        ].join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

        return new Response(xml, {
          headers: { "Content-Type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
