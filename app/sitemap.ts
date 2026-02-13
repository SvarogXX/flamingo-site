import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://crm-system.com";

// Blog posts - in production this would come from a CMS
const blogPosts = [
  { slug: "yak-obrati-crm-systemu", date: "2026-02-10" },
  { slug: "avtomatyzatsiya-prodazhiv", date: "2026-02-08" },
  { slug: "analityka-v-crm", date: "2026-02-05" },
  { slug: "integratsiya-crm-z-inshymy-servisamy", date: "2026-02-01" },
  { slug: "upravlinnya-komandoyu-v-crm", date: "2026-01-28" },
  { slug: "mobilnyy-crm", date: "2026-01-25" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...blogPages];
}
