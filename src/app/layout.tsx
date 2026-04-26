import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Footer from "@/components/sections/Footer";
import Navigation from "@/components/sections/Navigation";
import { SITE_CONFIG } from "@/config/constants";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const font = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} - Website Feedback Inside Chrome`,
  description: `${SITE_CONFIG.description}`,
  keywords: SITE_CONFIG.keywords,
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  applicationName: SITE_CONFIG.name,
  openGraph: {
    title: `${SITE_CONFIG.name} - Website Feedback Inside Chrome`,
    description: SITE_CONFIG.description,
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "icon",
      url: "/logo.png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        font.variable,
        "font-sans",
        geist.variable,
      )}
    >
      <body
        className="flex flex-col min-h-screen text-foreground"
        suppressHydrationWarning
      >
        <Navigation />
        <main className="mt-16 flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
