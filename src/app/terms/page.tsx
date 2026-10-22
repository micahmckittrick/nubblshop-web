import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — NubblShop",
  description: "Terms of Service for McKittrick LLC, doing business as NubblShop, and The Fuzzy.",
  alternates: { canonical: "https://www.nubblshop.com/terms" },
  openGraph: {
    title: "Terms of Service — NubblShop",
    description: "Terms of Service for McKittrick LLC, doing business as NubblShop, and The Fuzzy.",
    url: "https://www.nubblshop.com/terms",
    siteName: "NubblShop",
    type: "website",
    images: [{ url: "/logo.png", width: 1407, height: 768, alt: "The Fuzzy by NubblShop" }],
  },
};

export default function Terms() {
  return (
    <div className="px-4 sm:px-6 py-12 sm:py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-4xl font-bold tracking-tight mb-1">Terms of Service</h1>
        <p className="text-sm text-[#4a6b8c] mb-10">Last updated: October 22, 2026</p>

        <div className="space-y-6 text-[#4a6b8c] leading-relaxed">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of
            nubblshop.com, operated by McKittrick LLC, doing business as
            NubblShop (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By
            using this website, you agree to these Terms.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Use of the Site
            </h2>
            <p>
              This website provides information about NubblShop products,
              including The Fuzzy, with guides and demos for using it. It is
              currently a prelaunch informational site, not a checkout, and does
              not link an available product listing.
              You agree to use the site only for lawful purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Purchases
            </h2>
            <p>
              When an owned marketplace listing becomes available, review that
              listing&apos;s price, availability, product specifications, shipping,
              returns and seller contact information before ordering. Marketplace
              transaction rules and the seller&apos;s fulfillment commitments are
              distinct; using a third-party platform does not remove the
              seller&apos;s responsibilities. This prelaunch website does not yet
              make delivery, stock or return-window commitments.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Intellectual Property
            </h2>
            <p>
              All content on this site, including the NubblShop and The Fuzzy
              names, logos, images, and text, is owned by McKittrick LLC and may
              not be used without permission.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Disclaimer of Warranties
            </h2>
            <p>
              The site is provided &quot;as is&quot; without warranties of any
              kind, express or implied. We do not guarantee that the site will be
              uninterrupted or error-free. Product descriptions are for
              informational purposes; the selling platform&apos;s listing governs
              the actual sale.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, McKittrick LLC shall not be
              liable for any indirect, incidental, or consequential damages
              arising out of your use of this website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Changes to These Terms
            </h2>
            <p>
              We may update these Terms from time to time. Continued use of the
              site after changes take effect constitutes acceptance of the
              revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">Contact</h2>
            <p>
              Questions? Contact{" "}
              <a
                href="mailto:support@nubblshop.com"
                className="text-[#4a6b8c] underline"
              >
                Support
              </a>
              .
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
