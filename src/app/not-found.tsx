import Link from "next/link";
import { buttonPrimary, buttonSecondary } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-widest text-sage-ink">404</p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">
        This page got tied in a knot.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-slate">
        We couldn&apos;t find what you were looking for.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link href="/" className={buttonPrimary}>Home</Link>
        <Link href="/knots" className={buttonSecondary}>Knot guides</Link>
      </div>
    </div>
  );
}
