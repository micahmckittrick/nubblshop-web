import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — NubblShop",
  description: "Terms of Service for NubblShop LLC and The Fuzzy.",
  alternates: { canonical: "https://www.nubblshop.com/terms" },
};

export default function Terms() {
  return (
    <main className="min-h-screen px-6 py-16 bg-[#fdfbf7] text-[#2c3e50]">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-sm text-[#4a6b8c] hover:text-[#2c3e50]">
          ← NubblShop
        </Link>
        <h1 className="text-3xl font-bold mt-6 mb-1">Terms of Service</h1>
        <p className="text-sm text-[#8ba6c1] mb-10">Last updated: July 18, 2026</p>

        <div className="space-y-6 text-[#5c7a99] leading-relaxed">
          <p>
            These Terms of Service (&quot;Terms&quot;) govern your use of
            nubblshop.com, operated by NubblShop LLC (&quot;we,&quot;
            &quot;us,&quot; or &quot;our&quot;). By using this website, you agree
            to these Terms.
          </p>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Use of the Site
            </h2>
            <p>
              This website provides information about NubblShop products,
              including The Fuzzy, and links to third-party platforms where our
              products are sold. You agree to use the site only for lawful
              purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Purchases
            </h2>
            <p>
              Purchases are completed on third-party platforms such as Etsy.
              Those transactions are subject to the terms, policies, shipping,
              and return practices of the platform where the purchase is made. We
              are not responsible for the operation of those platforms.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
              Intellectual Property
            </h2>
            <p>
              All content on this site, including the NubblShop and The Fuzzy
              names, logos, images, and text, is owned by NubblShop LLC and may
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
              To the maximum extent permitted by law, NubblShop LLC shall not be
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
              Questions? Contact us at{" "}
              <a
                href="mailto:support@nubblshop.com"
                className="text-[#4a6b8c] underline"
              >
                support@nubblshop.com
              </a>
              .
            </p>
          </section>
        </div>

        <p className="mt-12 text-xs text-[#8ba6c1]">© 2026 NubblShop LLC</p>
      </div>
    </main>
  );
}
