import type { Metadata } from "next";
import { Geist, Unbounded, Tilt_Neon } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { baseMetadata, buildJsonLd } from "../lib/meta";
import Navbar from "../components/navbar";
import ComplianceBanner from "../components/compliance-banner";
import AgeGate from "../components/age-gate";

const display = Unbounded({
  subsets: ["latin"],
  variable: "--font-display",
});

const body = Geist({
  subsets: ["latin"],
  variable: "--font-body",
});

const accent = Tilt_Neon({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-accent",
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
      </head>
      <body className={`${display.variable} ${body.variable} ${accent.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <AgeGate />
          {children}
          <ComplianceBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
