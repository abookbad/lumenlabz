import type { Metadata } from "next";
import { PRODUCTS } from "../data/products";

export const siteName = "Lumin Labz";
export const siteUrl = "https://lumin.example";
export const siteDescription =
  "Premium THC disposables engineered for flavor, flow, and feel. For adults 21+ only.";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Turn on the Lumin`,
    template: `%s — ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Lumin Labz",
    "THC disposable",
    "vape",
    "neon",
    "live resin",
    "21+",
  ],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0B0F" },
    { media: "(prefers-color-scheme: light)", color: "#111827" },
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} — Press play on your vibe`,
    description: siteDescription,
    siteName,
    images: [
      {
        url: "/brand/logo.svg",
        width: 1200,
        height: 630,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Beyond THCeory`,
    description: siteDescription,
    images: ["/brand/logo.svg"],
  },
};

export function buildJsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/brand/logo.svg`,
  };

  const products = PRODUCTS.map((p) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    brand: siteName,
    name: `${siteName} Disposable — ${p.flavor}`,
    description: `${p.potency} • ${p.strain}`,
    image: `${siteUrl}${p.image}`,
  }));

  return [organization, ...products];
}


