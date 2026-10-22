import Image from "next/image";
import Link from "next/link";
import { contact, llcUrl } from "@/lib/site";
import { SocialLinks } from "./SocialLinks";

const linkClass = "inline-flex items-center min-h-8 text-sm text-slate hover:text-ink";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line bg-paper/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image src="/badge.png" alt="" width={36} height={36} className="rounded-full" />
            <span className="font-display font-bold text-ink">NubblShop</span>
          </Link>
          <p className="mt-3 max-w-xs text-sm text-slate">Home of The Fuzzy. A better way to fidget.</p>
          <div className="mt-5">
            <SocialLinks />
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-mist">Learn</h2>
          <ul className="mt-3">
            <li><Link href="/how-to-fuzzy" className={linkClass}>How to Fuzzy</Link></li>
            <li><Link href="/knots" className={linkClass}>Knot guides</Link></li>
            <li><Link href="/demos" className={linkClass}>Demos</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-mist">About</h2>
          <ul className="mt-3">
            <li><Link href="/about" className={linkClass}>Our story</Link></li>
            <li><Link href="/faq" className={linkClass}>FAQ</Link></li>
            <li><a href={contact.support} className={linkClass}>Support</a></li>
            <li><a href={contact.feedback} className={linkClass}>Feedback</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-mist">Legal</h2>
          <ul className="mt-3">
            <li><Link href="/privacy" className={linkClass}>Privacy</Link></li>
            <li><Link href="/terms" className={linkClass}>Terms</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 py-5 text-xs text-slate">
          © 2026{" "}
          <a href={llcUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-6 underline hover:text-ink">
            McKittrick LLC
          </a>
          . NubblShop is a trade name of McKittrick LLC.
        </p>
      </div>
    </footer>
  );
}
