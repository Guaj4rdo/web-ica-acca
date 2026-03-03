import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: process.env.SEO_TITLE_TEMPLATE || "%s | ICA-ACCA 2026",
        default: process.env.SEO_TITLE_DEFAULT || "ICA-ACCA 2026 - Congreso Internacional de Computación y Automática",
    },
    description: process.env.SEO_DESCRIPTION || "Congreso Internacional de Computación y Automática",
    keywords: process.env.SEO_KEYWORDS?.split(",").map((k) => k.trim()) || ["Congreso", "ICA-ACCA"],
    alternates: {
        canonical: process.env.SEO_CANONICAL_URL || "https://tudominio.com",
    },
    openGraph: {
        title: process.env.SEO_TITLE_DEFAULT || "ICA-ACCA 2026 - Congreso Internacional de Computación y Automática",
        description: process.env.SEO_DESCRIPTION || "Congreso Internacional de Computación y Automática",
        url: process.env.SEO_CANONICAL_URL || "https://tudominio.com",
        siteName: "ICA-ACCA",
        locale: "es_ES",
        type: "website",
    },
};

import { Providers } from "../components/Providers";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
