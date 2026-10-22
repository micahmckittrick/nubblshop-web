import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VideoSlot } from "@/components/VideoSlot";
import { LevelBadge } from "@/components/ui";
import { demoForKnot } from "@/content/demos";
import { getKnot, knots } from "@/content/knots";
import { isProduction, pageMetadata } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return knots.map((k) => ({ slug: k.slug }));
}

export async function generateMetadata({ params }: PageProps<"/knots/[slug]">) {
  const { slug } = await params;
  const knot = getKnot(slug);
  if (!knot) return {};
  return pageMetadata({
    title: `${knot.name}: knot guide`,
    description: `${knot.summary} Step-by-step guide for The Fuzzy, plus how to untie it.`,
    path: `/knots/${knot.slug}`,
  });
}

export default async function KnotPage({ params }: PageProps<"/knots/[slug]">) {
  const { slug } = await params;
  const knot = getKnot(slug);
  if (!knot) notFound();

  const demo = demoForKnot(knot.slug);
  const index = knots.findIndex((k) => k.slug === knot.slug);
  const prev = knots[index - 1];
  const next = knots[index + 1];

  return (
    <article className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-16 sm:pt-12">
      <nav aria-label="Breadcrumb" className="text-sm text-slate">
        <Link href="/knots" className="inline-flex min-h-8 items-center hover:text-ink">
          ← Knot guides
        </Link>
      </nav>

      <header className="mt-4 max-w-3xl">
        <div className="flex flex-wrap items-center gap-2">
          <LevelBadge level={knot.level} />
          <span className="text-sm text-slate">{knot.time}</span>
          {knot.needs && <span className="text-sm text-slate">· {knot.needs}</span>}
          {knot.favorite && (
            <span className="inline-flex items-center rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
              Our favorite
            </span>
          )}
        </div>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink">{knot.name}</h1>
        {knot.aka && <p className="mt-1 text-lg text-slate">{knot.aka}</p>}
        <p className="mt-4 text-lg leading-relaxed text-slate">{knot.summary}</p>
      </header>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_20rem]">
        <div>
          <section aria-labelledby="steps-heading">
            <h2 id="steps-heading" className="font-display text-2xl font-bold text-ink">How to tie it</h2>
            <ol className="mt-6 space-y-6">
              {knot.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    aria-hidden="true"
                    className={`flex size-10 shrink-0 items-center justify-center rounded-full font-display font-bold text-ink ${
                      i % 2 === 0 ? "bg-sage" : "bg-lav"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="flex-1 pt-1.5">
                    <p className="text-lg leading-relaxed text-ink">{step.text}</p>
                    {step.image ? (
                      <Image
                        src={step.image}
                        alt={`Step ${i + 1}: ${step.text}`}
                        width={800}
                        height={600}
                        className="mt-4 w-full max-w-md rounded-2xl border border-line"
                      />
                    ) : (
                      !isProduction && (
                        <div className="mt-3 max-w-md rounded-2xl border border-dashed border-amber-500/70 bg-amber-50/70 px-4 py-3 text-xs text-amber-900">
                          Draft: step photo slot. Add public/knots/{knot.slug}/{i + 1}.jpg and set{" "}
                          <code>image</code> on this step.
                        </div>
                      )
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section aria-labelledby="untie-heading" className="mt-12 rounded-3xl bg-sage-soft p-6 sm:p-8">
            <h2 id="untie-heading" className="font-display text-xl font-bold text-ink">How to undo it</h2>
            <p className="mt-2 leading-relaxed text-slate">{knot.untie}</p>
          </section>

          <section aria-labelledby="tips-heading" className="mt-6 rounded-3xl bg-lav-soft p-6 sm:p-8">
            <h2 id="tips-heading" className="font-display text-xl font-bold text-ink">Ways to play</h2>
            <p className="mt-2 leading-relaxed text-slate">{knot.whyItFidgets}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 leading-relaxed text-slate">
              {knot.tips.map((tip) => (
                <li key={tip}>{tip}</li>
              ))}
            </ul>
          </section>
        </div>

        {demo && (
          <aside aria-label="Video" className="lg:sticky lg:top-24 lg:self-start">
            <div className="mx-auto w-full max-w-xs">
              <VideoSlot demo={{ ...demo, title: "Watch it", description: `${knot.name}, tied and untied.` }} />
            </div>
          </aside>
        )}
      </div>

      <nav aria-label="More knots" className="mt-16 grid gap-4 border-t border-line pt-8 sm:grid-cols-2">
        {prev ? (
          <Link href={`/knots/${prev.slug}`} className="rounded-2xl border border-line bg-paper p-5 hover:shadow-md transition">
            <span className="text-sm text-slate">← Previous</span>
            <span className="mt-1 block font-display font-bold text-ink">{prev.name}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link href={`/knots/${next.slug}`} className="rounded-2xl border border-line bg-paper p-5 text-right hover:shadow-md transition">
            <span className="text-sm text-slate">Next →</span>
            <span className="mt-1 block font-display font-bold text-ink">{next.name}</span>
          </Link>
        )}
      </nav>
    </article>
  );
}
