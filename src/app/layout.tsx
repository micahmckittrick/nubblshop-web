import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nubblshop.com"),
  title: "The Fuzzy by NubblShop | Adult sensory fidget",
  description: "Meet The Fuzzy, a fidget for adult sensory seekers. Coming soon to Etsy; follow NubblShop’s existing social channels for launch updates.",
  openGraph: {
    title: "The Fuzzy by NubblShop",
    description: "An adult sensory fidget, currently prelaunch. Visit our social channels for updates.",
    siteName: "NubblShop", type: "website",
    images: [{ url: "/logo.png", alt: "The Fuzzy by NubblShop brand mark" }],
  },
  twitter: { card: "summary", title: "The Fuzzy by NubblShop", description: "An adult sensory fidget, currently prelaunch.", images: ["/logo.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}{process.env.VERCEL_ENV === "production" && <><Analytics /><SpeedInsights /></>}</body>
    </html>
  );
}
