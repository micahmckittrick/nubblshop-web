import Link from "next/link";
import { Draft } from "@/components/Draft";
import { VideoSlot } from "@/components/VideoSlot";
import { PageHeader, SectionHeading } from "@/components/ui";
import { demosFor } from "@/content/demos";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Demos",
  description:
    "Videos of The Fuzzy in action: the basic moves, how to untie, quiet desk fidgeting and every knot guide.",
  path: "/demos",
});

export default function Demos() {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12 pb-4 sm:pt-16">
        <PageHeader eyebrow="Watch" title="Demos">
          <p>Short videos to follow along with, Fuzzy in hand. Start with the basics, then pick a knot.</p>
        </PageHeader>
        <div className="mt-6 max-w-3xl">
          <Draft note="Video slots fill in as you add files. Each card says where its file goes. Short portrait phone clips (the same ones you post to TikTok or Instagram) work well here; keep each under about 20 MB or upload to Vercel Blob." />
        </div>
      </div>

      <section aria-labelledby="basics-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeading id="basics-heading" title="The basics" />
        <ul className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {demosFor("basics").map((demo) => (
            <li key={demo.slug} className="mx-auto w-full max-w-xs">
              <VideoSlot demo={demo} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="knot-demos-heading" className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeading id="knot-demos-heading" title="Knots" intro="Each one has a step-by-step guide too." />
        <ul className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {demosFor("knots").map((demo) => (
            <li key={demo.slug} className="mx-auto w-full max-w-xs">
              <VideoSlot demo={demo} />
              <Link
                href={`/knots/${demo.knot}`}
                className="mt-1 inline-flex min-h-8 items-center text-sm font-semibold text-ink underline underline-offset-4 hover:text-slate"
              >
                Read the guide →
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
