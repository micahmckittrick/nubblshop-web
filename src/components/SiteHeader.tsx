import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "./SiteNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-cream/90 backdrop-blur">
      <nav aria-label="Main" className="relative max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <Image src="/badge.png" alt="" width={40} height={40} className="rounded-full" priority />
          <span className="font-display font-bold text-lg tracking-tight text-ink">NubblShop</span>
        </Link>
        <SiteNav />
      </nav>
    </header>
  );
}
