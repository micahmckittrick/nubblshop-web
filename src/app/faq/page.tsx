import Link from "next/link";
import { instagramUrl } from "@/components/SocialLinks";
import { PageHeader } from "@/components/ui";
import { contact, etsyUrl, isProduction, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers about The Fuzzy: what it is, size, who it's for, how to use it, safety and where to buy it.",
  path: "/faq",
});

const link = "font-semibold text-ink underline underline-offset-4 hover:text-slate";

// `draft: true` entries aren't confirmed yet. They show on Preview with a
// Draft label and are left out of production builds.
const faqs: { q: string; a: React.ReactNode; draft?: boolean }[] = [
  {
    q: "What is The Fuzzy?",
    a: (
      <>
        A strip of soft, stretchy, fuzzy fabric made for fidgeting. Squish it, stretch it, twist it or
        tie it into knots. It&apos;s quiet, safe and easy to use anywhere.
      </>
    ),
  },
  {
    q: "Who is it for?",
    a: (
      <>
        It&apos;s designed for adult sensory seekers and people with BFRBs (like hair pulling, skin
        picking or nail biting) or ADHD. Anyone who likes having something in their hands is welcome.
      </>
    ),
  },
  {
    q: "How big is it?",
    a: (
      <>
        About 1.5 × 8 inches (4 × 20 cm) before stretching. It stretches both ways, most along its
        length.
      </>
    ),
  },
  {
    q: "Is there a bigger size?",
    draft: true,
    a: (
      <>
        Extra Large, about 2 × 12 to 16 inches, with room for bigger rings, bracelets and longer knot
        stacks. (From the notebook; confirm before launch.)
      </>
    ),
  },
  {
    q: "What's it made of?",
    draft: true,
    a: <>Soft, fuzzy fleece with two-way stretch. (Confirm the exact fabric before launch.)</>,
  },
  {
    q: "How do I use it?",
    a: (
      <>
        However you like. Start with the <Link href="/how-to-fuzzy" className={link}>basic moves</Link>,
        then try the <Link href="/knots" className={link}>knot guides</Link>. Our favorite is to
        stretch it and tie the ends into a ring.
      </>
    ),
  },
  {
    q: "Can I use more than one?",
    a: (
      <>
        Yes. Tie them end to end, link them into a chain of rings or braid three together. See{" "}
        <Link href="/knots#group-combine" className={link}>combining Fuzzies</Link>.
      </>
    ),
  },
  {
    q: "Is it quiet enough for work or school?",
    a: <>Yes. It&apos;s fabric, so there&apos;s nothing to click, pop or rattle.</>,
  },
  {
    q: "Is it a treatment for BFRBs or ADHD?",
    a: (
      <>
        No. The Fuzzy is a fidget, not a medical device or treatment. It can be an easy thing to keep
        your hands busy with, but if BFRBs or ADHD are affecting your life, please talk to a doctor or
        therapist. <Link href="/about#health-heading" className={link}>Resources</Link>.
      </>
    ),
  },
  {
    q: "Is it safe for kids?",
    a: (
      <>
        The Fuzzy is designed for adults. Keep it away from small children and pets who might chew
        it, and don&apos;t wrap it tightly around fingers, wrists or anything else.
      </>
    ),
  },
  {
    q: "What age is it recommended for?",
    draft: true,
    a: <>Ages 10 and up. (From the notebook; confirm before launch.)</>,
  },
  {
    q: "How do I clean it?",
    draft: true,
    a: <>Add washing and drying instructions once they&apos;re tested.</>,
  },
  {
    q: "Where can I buy it?",
    a: etsyUrl ? (
      <>
        On{" "}
        <a href={etsyUrl} target="_blank" rel="noopener noreferrer" className={link}>
          Etsy
        </a>
        .
      </>
    ) : (
      <>
        The Fuzzy is coming soon to Etsy. Follow{" "}
        <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className={link}>
          @nubblshop
        </a>{" "}
        to hear when it launches.
      </>
    ),
  },
  {
    q: "I need help with an order.",
    a: (
      <>
        Orders are handled through Etsy, so message us there or contact{" "}
        <a href={contact.support} className={link}>Support</a>.
      </>
    ),
  },
  {
    q: "Can I suggest a knot or share what I made?",
    a: (
      <>
        Please do. Post it with #FuzzyFriday and tag @nubblshop, or send it to{" "}
        <a href={contact.feedback} className={link}>Feedback</a>.
      </>
    ),
  },
];

export default function Faq() {
  const visible = faqs.filter((f) => !(f.draft && isProduction));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-16 sm:pt-16">
      <PageHeader eyebrow="Help" title="Frequently asked questions" />
      <div className="mt-10 max-w-3xl space-y-3">
        {visible.map((f) => (
          <details
            key={f.q}
            className={`group rounded-2xl border p-5 open:shadow-sm ${
              f.draft ? "border-dashed border-amber-500/70 bg-amber-50/70" : "border-line bg-paper"
            }`}
          >
            <summary className="flex min-h-8 cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold text-ink [&::-webkit-details-marker]:hidden">
              <span>
                {f.q}
                {f.draft && (
                  <span className="ml-2 align-middle text-xs font-semibold uppercase tracking-wider text-amber-800">
                    Draft
                  </span>
                )}
              </span>
              <span aria-hidden="true" className="text-2xl leading-none text-slate transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-3 text-slate leading-relaxed">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mt-10 text-slate">
        Didn&apos;t find it? Contact <a href={contact.support} className={link}>Support</a>.
      </p>
    </div>
  );
}
