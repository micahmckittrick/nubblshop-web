import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cord } from "@/components/Cord";
import { SocialLinks } from "@/components/SocialLinks";
import { VideoSlot } from "@/components/VideoSlot";
import { EtsyButton, KnotCard, SectionHeading, buttonSecondary } from "@/components/ui";
import { demosFor } from "@/content/demos";
import { knots } from "@/content/knots";
import { etsyUrl, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: siteUrl },
};

const facts = [
  { value: "1.5 × 8 in", label: "About 4 × 20 cm, before stretching" },
  { value: "Two-way stretch", label: "Most along its length, a little across" },
  { value: "Soft & fuzzy", label: "No hard parts, no clicks, no batteries" },
];

const reasons = [
  {
    title: "Quiet",
    body: "Fabric doesn't click, snap or rattle. Fidget through a meeting, a class or a call and nobody hears a thing.",
    tone: "bg-sage-soft",
  },
  {
    title: "Safe",
    body: "Just soft, stretchy fabric. Nothing hard, sharp or electronic.",
    tone: "bg-lav-soft",
  },
  {
    title: "Easy",
    body: "Nothing to learn before you start. Squish it right away and pick up knots when you want something new.",
    tone: "bg-sage-soft",
  },
  {
    title: "Feels good",
    body: "The fuzzy texture gives your fingers something to feel, and the stretch gives them something to work against.",
    tone: "bg-lav-soft",
  },
];

export default function Home() {
  const [featuredDemo] = demosFor("basics");

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pt-20 sm:pb-24 grid items-center gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-sage-ink">Home of The Fuzzy</p>
            <h1 className="mt-3 font-display text-5xl sm:text-6xl font-bold tracking-tight text-ink">
              A better way to fidget.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
              The Fuzzy is a soft, stretchy strip of fuzzy fabric you can squish, stretch and tie
              into knots. Quiet, safe and easy, designed for adult sensory seekers, BFRB and ADHD.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <EtsyButton />
              <Link href="/how-to-fuzzy" className={buttonSecondary}>
                Learn to fuzzy
              </Link>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[16rem] sm:max-w-sm">
            <div aria-hidden="true" className="absolute -left-6 -top-6 size-48 rounded-full bg-sage/40 blur-2xl" />
            <div aria-hidden="true" className="absolute -bottom-8 -right-4 size-56 rounded-full bg-lav/40 blur-2xl" />
            <Image
              src="/badge.png"
              alt="The Fuzzy by NubblShop logo: two soft strands tied in a knot"
              width={512}
              height={512}
              priority
              className="relative w-full rounded-full shadow-lg ring-8 ring-paper"
            />
          </div>
        </div>
      </section>

      <Cord />

      <section aria-labelledby="what-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeading
          id="what-heading"
          title="What is The Fuzzy?"
          intro="A strip of soft, stretchy fabric that feels good in your hands. Hold it, ball it up, stretch it out or tie it in knots. However you use it is the right way."
        />
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.value} className="rounded-3xl border border-line bg-paper p-6">
              <dt className="font-display text-2xl font-bold text-ink">{f.value}</dt>
              <dd className="mt-1 text-slate">{f.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="why-heading" className="bg-paper/70 border-y border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
          <SectionHeading id="why-heading" title="Made to keep your hands busy" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <li key={r.title} className={`rounded-3xl p-6 ${r.tone}`}>
                <h3 className="font-display text-xl font-bold text-ink">{r.title}</h3>
                <p className="mt-2 text-slate leading-relaxed">{r.body}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/about" className="font-semibold text-ink underline underline-offset-4 hover:text-slate">
              Why we made it and how it helps →
            </Link>
          </p>
        </div>
      </section>

      <section aria-labelledby="knots-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            id="knots-heading"
            title="Learn a few knots"
            intro="Stretch it, tie it, pick it apart, repeat. Start with the ring and work your way up."
          />
          <Link href="/knots" className={buttonSecondary}>
            All knot guides
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {knots.slice(0, 3).map((knot, i) => (
            <li key={knot.slug}>
              <KnotCard knot={knot} index={i} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="demo-heading" className="bg-paper/70 border-y border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid items-center gap-10 md:grid-cols-[1fr_20rem]">
          <div>
            <SectionHeading
              id="demo-heading"
              title="See it in action"
              intro="Short videos of the basic moves and every knot, so you can follow along with a Fuzzy in your hands."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/demos" className={buttonSecondary}>
                Watch the demos
              </Link>
              <Link href="/how-to-fuzzy" className={buttonSecondary}>
                How to Fuzzy
              </Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-xs">
            <VideoSlot demo={featuredDemo} />
          </div>
        </div>
      </section>

      <section aria-labelledby="follow-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className="rounded-[2rem] bg-ink px-6 py-12 sm:px-12 text-center">
          <h2 id="follow-heading" className="font-display text-3xl font-bold text-cream">
            {etsyUrl ? "Get The Fuzzy on Etsy" : "Coming soon to Etsy"}
          </h2>
          {etsyUrl && (
            <a
              href={etsyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center min-h-12 px-6 rounded-full bg-cream text-ink font-semibold hover:bg-sage-soft transition-colors"
            >
              Buy on Etsy
            </a>
          )}
          <p className="mx-auto mt-3 max-w-md text-cream/85">
            Follow @nubblshop for {etsyUrl ? "" : "launch news, "}new knots and demos.
          </p>
          <div className="mt-6 flex justify-center [&_a]:text-cream [&_a:hover]:text-sage">
            <SocialLinks showNames />
          </div>
        </div>
      </section>
    </>
  );
}
