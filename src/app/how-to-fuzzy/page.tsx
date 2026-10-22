import Link from "next/link";
import { Cord } from "@/components/Cord";
import { Draft } from "@/components/Draft";
import { VideoSlot } from "@/components/VideoSlot";
import { PageHeader, SectionHeading, buttonPrimary } from "@/components/ui";
import { demosFor } from "@/content/demos";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "How to Fuzzy",
  description:
    "There's no wrong way to use The Fuzzy. Squish it, stretch it, twist it or tie it into knots: the basic moves, demo videos and tips for making it a habit.",
  path: "/how-to-fuzzy",
});

const moves = [
  {
    name: "Squish",
    body: "Ball it up in your palm and squeeze. Let go and feel it spring back open.",
  },
  {
    name: "Stretch",
    body: "Pull it long, then let it relax. It stretches most along its length and a little across.",
  },
  {
    name: "Rub",
    body: "Run it between your thumb and fingers and feel the fuzz.",
  },
  {
    name: "Twist",
    body: "Twist it into a tight rope, then let it unwind in your fingers.",
  },
  {
    name: "Wrap",
    body: "Loop it loosely around a finger and slide it off. Keep it loose, never tight.",
  },
  {
    name: "Tie",
    body: "Stretch it out and tie a knot, or tie the ends together into a ring for your fingers.",
    href: "/knots",
  },
];

const habits = [
  {
    title: "Keep it where you need it",
    body: "On your desk, by the couch, in a bag or a pocket. It helps most when it's already within reach.",
  },
  {
    title: "Notice, then reach",
    body: "When you catch your hands heading for your hair, skin or nails, reach for The Fuzzy instead.",
  },
  {
    title: "Give your hands a job",
    body: "Meetings, calls, reading, studying, TV: anywhere your hands get restless while your mind needs to stay put.",
  },
  {
    title: "Untying counts",
    body: "Picking a knot apart is as good a fidget as tying it. Tie, untie, repeat.",
  },
];

export default function HowToFuzzy() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-12 sm:pt-16">
        <PageHeader eyebrow="Learn" title="How to Fuzzy">
          <p>
            There&apos;s no wrong way to fuzzy. Some people ball it up, some stretch it, some tie it
            in knots. Start with the moves below and see what your hands like.
          </p>
        </PageHeader>
      </div>

      <section aria-labelledby="moves-heading" className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <h2 id="moves-heading" className="sr-only">The basic moves</h2>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moves.map((m, i) => (
            <li key={m.name} className="rounded-3xl border border-line bg-paper p-6">
              <span
                aria-hidden="true"
                className={`font-display text-3xl font-bold ${i % 2 === 0 ? "text-sage" : "text-lav"}`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-ink">{m.name}</h3>
              <p className="mt-2 text-slate leading-relaxed">{m.body}</p>
              {m.href && (
                <Link href={m.href} className="mt-3 inline-flex min-h-8 items-center font-semibold text-ink underline underline-offset-4 hover:text-slate">
                  Knot guides →
                </Link>
              )}
            </li>
          ))}
        </ol>
      </section>

      <Cord />

      <section aria-labelledby="watch-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading id="watch-heading" title="Watch the basics" intro="Short clips to follow along with." />
        <ul className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {demosFor("basics").map((demo) => (
            <li key={demo.slug} className="mx-auto w-full max-w-xs">
              <VideoSlot demo={demo} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="habit-heading" className="bg-paper/70 border-y border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <SectionHeading
            id="habit-heading"
            title="Making it a habit"
            intro="A fidget works best when it's the easy thing to grab. A few ideas:"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {habits.map((h, i) => (
              <li key={h.title} className={`rounded-3xl p-6 ${i % 2 === 0 ? "bg-sage-soft" : "bg-lav-soft"}`}>
                <h3 className="font-display text-lg font-bold text-ink">{h.title}</h3>
                <p className="mt-2 text-slate leading-relaxed">{h.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="care-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading id="care-heading" title="Keep it safe" />
        <ul className="mt-6 max-w-2xl list-disc space-y-2 pl-5 text-slate leading-relaxed">
          <li>Keep wraps loose. Don&apos;t wrap it tightly around fingers, wrists or anything else.</li>
          <li>Keep it away from small children and pets who might chew it.</li>
          <li>If the fabric starts to tear or fray, it&apos;s time for a new one.</li>
        </ul>
        <div className="mt-6 max-w-2xl">
          <Draft note="Add washing and care instructions (machine wash? air dry?) and confirm the age guidance before launch." />
        </div>
        <div className="mt-10">
          <Link href="/knots" className={buttonPrimary}>
            Try a knot →
          </Link>
        </div>
      </section>
    </>
  );
}
