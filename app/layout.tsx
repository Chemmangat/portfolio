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

export const metadata: Metadata = {
  title: "Hari Manoj — Software Engineer",
  description:
    "SDE-1 specializing in production-grade frontend architecture. Next.js, React, Azure.",
  keywords: ["SDE-1", "Software Engineer", "Frontend", "Next.js", "React", "Azure", "TypeScript"],
  authors: [{ name: "Hari Manoj" }],
  openGraph: {
    title: "Hari Manoj — Software Engineer",
    description: "SDE-1 specializing in production-grade frontend architecture.",
    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>{children}</body>
    </html>
  );
}
