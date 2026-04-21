import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Ready from "@/components/sections/Ready";
import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";

const font = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SiteReview | Chrome extension for page review",
  description:
    "SiteReview is a Chrome extension for anchored page comments, screenshots, review sessions, and PDF exports.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.variable} h-full antialiased`}>
      <body className="min-h-screen text-foreground" suppressHydrationWarning>
        <Navigation />
        <main className="mt-16">{children}</main>
        <Ready />
        <Footer />
      </body>
    </html>
  );
}
