import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flamingo-crm.com.ua";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 0,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


// import { MetadataRoute } from "next";

// const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://flamingo-crm.com.ua";

// export default function robots(): MetadataRoute.Robots {
//   return {
//     rules: [
//       {
//         userAgent: "*",
//         allow: "/",
//         disallow: ["/api/", "/admin/"],
//       },
//     ],
//     sitemap: `${baseUrl}/sitemap.xml`,
//   };
// }
