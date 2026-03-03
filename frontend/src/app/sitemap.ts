import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.SEO_CANONICAL_URL || "https://icca-acca.guaj4rdo.dev";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        // If you had more pages like /about or /committee, you would add them here:
        // {
        //     url: `${baseUrl}/about`,
        //     lastModified: new Date(),
        //     changeFrequency: "monthly",
        //     priority: 0.8,
        // },
    ];
}
