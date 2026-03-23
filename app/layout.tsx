import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://chemmangathari.in"; // update to your actual domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hari Manoj — Software Engineer | SDE-1 at Terawe Technologies",
    template: "%s | Hari Manoj",
  },
  description:
    "Hari Manoj (Chemmangat Hari) — Software Development Engineer at Terawe Technologies. Full Stack Engineer specializing in Next.js, React, TypeScript, and Azure. 2× Global Award Winner.",
  keywords: [
    "Hari Manoj",
    "Chemmangat Hari",
    "chemmangathari",
    "SDE-1",
    "Software Engineer",
    "Terawe Technologies",
    "Frontend Developer",
    "Full Stack Engineer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Azure",
    "npm packages",
    "Portfolio",
  ],
  authors: [{ name: "Hari Manoj", url: siteUrl }],
  creator: "Hari Manoj",
  publisher: "Hari Manoj",
  verification: {
    google: "hxJTImZHXst6sVO7GgC8INmzlVlVqKi9T0G6VnLUAxs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Hari Manoj — Software Engineer | SDE-1 at Terawe Technologies",
    description:
      "Full Stack Engineer specializing in Next.js, React, TypeScript, and Azure. 2× Global Award Winner. 4k+ npm downloads.",
    url: siteUrl,
    siteName: "Hari Manoj Portfolio",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hari Manoj — Software Engineer",
    description:
      "Full Stack Engineer specializing in Next.js, React, TypeScript, and Azure. 2× Global Award Winner.",
    creator: "@chemmangathari",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD structured data — tells Google exactly who this page is about
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hari Manoj",
  alternateName: "Chemmangat Hari",
  url: siteUrl,
  jobTitle: "Software Development Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Terawe Technologies",
  },
  sameAs: [
    "https://github.com/Chemmangat",
    "https://www.linkedin.com/in/chemmangat-hari/",
    "https://www.npmjs.com/~chemmangat",
  ],
  knowsAbout: ["Next.js", "React", "TypeScript", "Azure", "Node.js", "Full Stack Development"],
  award: ["Global Team Player Award 2024", "Global Team Player Award 2025"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
