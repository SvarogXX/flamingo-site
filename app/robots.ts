import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://crm-system.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}


// import { MetadataRoute } from "next";

// const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://crm-system.com";

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
