import type { Metadata } from "next";

export const siteUrl = "https://www.nubblshop.com";
export const siteName = "NubblShop";
export const llcUrl = "https://www.mckittrick.co";

// One-line description of the product, used in metadata and the home page.
export const productLine =
  "A soft, stretchy strip of fuzzy fabric you can squish, stretch and tie into knots.";
export const tagline =
  "A better way to fidget. Designed for adult sensory seekers, BFRB, and ADHD.";

// Set this to the Etsy listing (or shop) URL at launch. While it's null the
// site shows "Coming soon to Etsy" instead of a buy button.
export const etsyUrl: string | null = null;

// Draft content (unconfirmed facts, placeholder slots) renders on local dev
// and Vercel Preview only; production builds leave it out.
export const isProduction = process.env.VERCEL_ENV === "production";

export const contact = {
  support: "mailto:support@nubblshop.com",
  feedback: "mailto:feedback@nubblshop.com",
  privacy: "mailto:privacy@nubblshop.com",
};

export const ogImage = {
  url: "/logo.png",
  width: 1407,
  height: 768,
  alt: "The Fuzzy by NubblShop",
};

export const nav = [
  { href: "/how-to-fuzzy", label: "How to Fuzzy" },
  { href: "/knots", label: "Knot guides" },
  { href: "/demos", label: "Demos" },
  { href: "/about", label: "Our story" },
  { href: "/faq", label: "FAQ" },
];

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteUrl}${path}`;
  const fullTitle = `${title} — ${siteName}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName,
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
