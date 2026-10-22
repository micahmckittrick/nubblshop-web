import Link from "next/link";
import type { Knot, KnotLevel } from "@/content/knots";
import { etsyUrl } from "@/lib/site";
import { instagramUrl } from "./SocialLinks";

export const buttonPrimary =
  "inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full bg-ink text-cream font-semibold hover:bg-slate transition-colors";
export const buttonSecondary =
  "inline-flex items-center justify-center gap-2 min-h-12 px-6 rounded-full border-2 border-ink/15 bg-paper text-ink font-semibold hover:border-ink/40 transition-colors";

export function EtsyButton() {
  if (etsyUrl) {
    return (
      <a href={etsyUrl} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
        Buy on Etsy
      </a>
    );
  }
  return (
    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={buttonPrimary}>
      Follow for the Etsy launch
    </a>
  );
}

export function PageHeader({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="max-w-3xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-widest text-sage-ink">{eyebrow}</p>
      )}
      <h1 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">{title}</h1>
      {children && <div className="mt-4 text-lg leading-relaxed text-slate">{children}</div>}
    </header>
  );
}

export function SectionHeading({
  title,
  intro,
  id,
}: {
  title: string;
  intro?: string;
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink">
        {title}
      </h2>
      {intro && <p className="mt-2 text-slate leading-relaxed">{intro}</p>}
    </div>
  );
}

const levelStyles: Record<KnotLevel, string> = {
  Easy: "bg-sage-soft text-sage-ink",
  Medium: "bg-lav-soft text-lav-ink",
  Tricky: "bg-ink/10 text-ink",
};

export function LevelBadge({ level }: { level: KnotLevel }) {
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${levelStyles[level]}`}>
      {level}
    </span>
  );
}

export function KnotCard({ knot, index }: { knot: Knot; index: number }) {
  return (
    <Link
      href={`/knots/${knot.slug}`}
      className="group flex h-full flex-col rounded-3xl border border-line bg-paper p-6 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-3">
        <span
          className={`font-display text-3xl font-bold ${index % 2 === 0 ? "text-sage" : "text-lav"}`}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex items-center gap-2">
          {knot.favorite && (
            <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
              Our favorite
            </span>
          )}
          <LevelBadge level={knot.level} />
        </div>
      </div>
      <h3 className="mt-4 font-display text-xl font-bold text-ink group-hover:underline">{knot.name}</h3>
      {knot.aka && <p className="text-sm text-mist">{knot.aka}</p>}
      <p className="mt-3 flex-1 text-slate leading-relaxed">{knot.summary}</p>
      <p className="mt-4 text-xs font-medium text-mist">
        {knot.time}
        {knot.needs && ` · ${knot.needs}`}
      </p>
    </Link>
  );
}
