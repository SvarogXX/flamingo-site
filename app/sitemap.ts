import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flamingo-crm.com.ua";

// Blog posts - in production this would come from a CMS
const blogPosts = [
  { slug: "yak-obrati-crm-systemu", date: "2026-03-03" },
  { slug: "avtomatyzatsiya-prodazhiv", date: "2026-02-08" },
  { slug: "analityka-v-crm", date: "2026-02-05" },
  { slug: "integratsiya-crm-z-inshymy-servisamy", date: "2026-02-01" },
  { slug: "upravlinnya-komandoyu-v-crm", date: "2026-01-28" },
  { slug: "mobilnyy-crm", date: "2026-01-25" },
  { slug: "voronka-prodazhiv-v-crm", date: "2026-03-01" },
  { slug: "vprovadzhennya-crm-z-nulya", date: "2026-02-25" },
  { slug: "baza-kliyentiv-upravlinnya", date: "2026-02-20" },
  { slug: "kpi-viddilu-prodazhiv", date: "2026-02-15" },
  { slug: "chomu-vtrachayutsya-lidy", date: "2026-02-10" },
  { slug: "yak-pidvishchiti-konversiyu-v-prodazhah", date: "2026-03-08" },
  { slug: "upravlinnya-zavdannyamy-v-crm", date: "2026-03-08" },
  { slug: "zvitnist-dashbordy-v-crm", date: "2026-03-08" },
  { slug: "vybir-crm-sistemu-porivnyannya", date: "2026-03-08" },
  { slug: "avtomatyzatsiya-obrobky-lidiv", date: "2026-03-08" },
  { slug: "crm-dlya-agenstv", date: "2026-03-08" },
  { slug: "bezpeka-danikh-v-crm", date: "2026-03-08" },
  { slug: "crm-email-marketing", date: "2026-03-08" },
  { slug: "shvidka-reaktsiya-na-zayavku", date: "2026-03-08" },
  { slug: "crm-malogo-biznesu-oglyad", date: "2026-03-08" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/ukrainesupport`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/features`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/for-whom`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    // { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/testimonials`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
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
