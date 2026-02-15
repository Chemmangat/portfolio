import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hari Manoj - SDE-1 | Frontend Specialist",
  description: "Building Enterprise-Grade Web Applications That Scale & Perform Flawlessly. Expert in Next.js, React, Azure, and modern web technologies.",
  keywords: ["SDE-1", "Software Engineer", "Frontend Developer", "Next.js", "React", "Azure", "TypeScript", "Tailwind CSS"],
  authors: [{ name: "Hari Manoj" }],
  openGraph: {
    title: "Hari Manoj - SDE-1 | Frontend Specialist",
    description: "Building Enterprise-Grade Web Applications That Scale & Perform Flawlessly",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
