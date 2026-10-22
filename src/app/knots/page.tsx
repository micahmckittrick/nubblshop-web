import { Cord } from "@/components/Cord";
import { KnotCard, PageHeader, SectionHeading } from "@/components/ui";
import { knotGroups, knots } from "@/content/knots";
import { contact, pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Knot guides",
  description:
    "Step-by-step guides for tying The Fuzzy: the ring, center knot, slip knot, knot stacks, linked rings, braids and more. Plus how to untie each one.",
  path: "/knots",
});

export default function Knots() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-4 sm:pt-16">
        <PageHeader eyebrow="Learn" title="Knot guides">
          <p>
            The Fuzzy stretches, so every knot can be as loose or as tight as you like. Each guide
            shows how to tie it, how to undo it and a few ways to play. New here? Start with the
            ring.
          </p>
        </PageHeader>
      </div>

      {knotGroups.map((group) => (
        <section
          key={group.id}
          aria-labelledby={`group-${group.id}`}
          className="max-w-6xl mx-auto px-4 sm:px-6 py-12"
        >
          <SectionHeading id={`group-${group.id}`} title={group.title} intro={group.intro} />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {knots.map((knot, i) =>
              knot.group === group.id ? (
                <li key={knot.slug}>
                  <KnotCard knot={knot} index={i} />
                </li>
              ) : null,
            )}
          </ul>
        </section>
      ))}

      <Cord className="mt-4" />

      <section aria-labelledby="share-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl bg-lav-soft p-8">
            <h2 id="share-heading" className="font-display text-2xl font-bold text-ink">
              Share your Fuzzy
            </h2>
            <p className="mt-2 text-slate leading-relaxed">
              Made something we haven&apos;t thought of? Post it with <strong className="text-ink">#FuzzyFriday</strong>{" "}
              and tag <strong className="text-ink">@nubblshop</strong>.
            </p>
          </div>
          <div className="rounded-3xl bg-sage-soft p-8">
            <h2 className="font-display text-2xl font-bold text-ink">Suggest a knot</h2>
            <p className="mt-2 text-slate leading-relaxed">
              Know a knot that works well with The Fuzzy? Send it our way and we may add a guide.
            </p>
            <a href={contact.feedback} className="mt-3 inline-flex min-h-8 items-center font-semibold text-ink underline underline-offset-4 hover:text-slate">
              Feedback
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
