import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.SEO_CANONICAL_URL || "https://icca-acca.guaj4rdo.dev";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            // Disallow private or internal routes if any are added in the future
            // disallow: ['/private/', '/admin/'],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
