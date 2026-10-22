import Link from "next/link";
import { Cord } from "@/components/Cord";
import { Draft } from "@/components/Draft";
import { PageHeader, SectionHeading, buttonSecondary } from "@/components/ui";
import { llcUrl, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Why we made The Fuzzy",
  description:
    "Why The Fuzzy exists, how it helps adult sensory seekers and people with BFRBs or ADHD, and what we're aiming for: a quiet, safe and easy fidget.",
  path: "/about",
});

const helps = [
  {
    title: "Something for your hands",
    body: "Restless hands are easier to live with when they have a job. Squishing, stretching and tying give your fingers something to do through meetings, reading, studying or TV.",
  },
  {
    title: "Something else to reach for",
    body: "Body-focused repetitive behaviors (BFRBs) like hair pulling, skin picking and nail biting often happen on autopilot. Habit reversal training, a common approach for BFRBs, includes a “competing response”: something else to do with your hands when the urge shows up. The Fuzzy is made to be an easy one to keep within reach.",
  },
  {
    title: "Texture to explore",
    body: "For sensory seekers, the soft fuzz and the give of the stretch are steady input for your fingers, and many people find that soothing.",
  },
  {
    title: "Movement while you focus",
    body: "Many people with ADHD find it easier to stay with a task when their hands can move. The Fuzzy gives them a quiet way to do it.",
  },
];

const goals = [
  { title: "Quiet", body: "Nothing that clicks, pops or rattles. Use it in a meeting and nobody hears it." },
  { title: "Safe", body: "Soft fabric only. No hard plastic, sharp edges or batteries." },
  { title: "Easy", body: "It works the moment you pick it up. Knots are there when you want more." },
  { title: "Grown-up", body: "Made for adults, and calm enough to leave out on your desk." },
  { title: "Yours", body: "There's no right way to use it. Ball it, stretch it, knot it, combine it." },
  { title: "Made by hand", body: "Every Fuzzy is made by hand." },
];

export default function About() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-12 sm:pt-16">
        <PageHeader eyebrow="Our story" title="Why we made The Fuzzy">
          <p>
            Most fidget toys are made for kids: bright plastic, clicks and pops, and hard to use in a
            meeting without someone noticing. Plenty of adults still need something for their hands.
            The Fuzzy is our answer: a strip of soft, stretchy fabric that&apos;s quiet, safe and
            easy to use anywhere.
          </p>
        </PageHeader>
        <div className="mt-8 max-w-3xl">
          <Draft note="Add a short note in your own words: who The Fuzzy was first made for, how you landed on the fabric and why it matters to you. This box only shows on Preview." />
        </div>
      </div>

      <Cord />

      <section aria-labelledby="helps-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <SectionHeading id="helps-heading" title="How it helps" />
        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {helps.map((h, i) => (
            <li key={h.title} className={`rounded-3xl p-6 sm:p-8 ${i % 3 === 0 ? "bg-sage-soft" : "bg-lav-soft"}`}>
              <h3 className="font-display text-xl font-bold text-ink">{h.title}</h3>
              <p className="mt-2 text-slate leading-relaxed">{h.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="goals-heading" className="bg-paper/70 border-y border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
          <SectionHeading
            id="goals-heading"
            title="What we're aiming for"
            intro="The goals every Fuzzy is held to."
          />
          <dl className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {goals.map((g, i) => (
              <div key={g.title} className="border-l-4 pl-4" style={{ borderColor: i % 2 === 0 ? "var(--color-sage)" : "var(--color-lav)" }}>
                <dt className="font-display text-lg font-bold text-ink">{g.title}</dt>
                <dd className="mt-1 text-slate leading-relaxed">{g.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="health-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="max-w-3xl">
          <SectionHeading id="health-heading" title="A note on health" />
          <p className="mt-4 text-slate leading-relaxed">
            The Fuzzy is a fidget, not a medical device or a treatment. If BFRBs, ADHD or anxiety are
            getting in the way of your life, talk to a doctor or therapist. These nonprofits are a
            good place to start:
          </p>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="https://www.bfrb.org" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center font-semibold text-ink underline underline-offset-4 hover:text-slate">
                The TLC Foundation for Body-Focused Repetitive Behaviors
              </a>
            </li>
            <li>
              <a href="https://chadd.org" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-8 items-center font-semibold text-ink underline underline-offset-4 hover:text-slate">
                CHADD: Children and Adults with ADHD
              </a>
            </li>
          </ul>

          <h2 className="mt-14 font-display text-2xl font-bold text-ink">Who makes it</h2>
          <p className="mt-4 text-slate leading-relaxed">
            NubblShop is a trade name of{" "}
            <a href={llcUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-ink underline underline-offset-4 hover:text-slate">
              McKittrick LLC
            </a>
            , an independent company.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/how-to-fuzzy" className={buttonSecondary}>How to Fuzzy</Link>
            <Link href="/faq" className={buttonSecondary}>FAQ</Link>
          </div>
        </div>
      </section>
    </>
  );
}
