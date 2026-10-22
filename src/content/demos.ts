import { knots } from "./knots";

// Demo videos, shown on /demos, on /how-to-fuzzy (basics) and on the matching
// knot page. To add one: put an .mp4 in public/videos/ (or upload it to
// Vercel Blob) and set `video` to its URL. `poster` is an optional still
// shown before play. Phone videos are portrait; set `landscape: true` for
// wide ones. Demos without a video show a "coming soon" card.

export type Demo = {
  slug: string;
  title: string;
  description: string;
  category: "basics" | "knots";
  knot?: string;
  video?: string;
  poster?: string;
  landscape?: boolean;
};

const basics: Demo[] = [
  {
    slug: "meet-the-fuzzy",
    title: "Meet The Fuzzy",
    description: "What it is, how it feels and the first few things to try.",
    category: "basics",
  },
  {
    slug: "ways-to-fuzzy",
    title: "Squish, stretch, twist, tie",
    description: "The basic moves, one after another.",
    category: "basics",
  },
  {
    slug: "how-to-untie",
    title: "How to untie any knot",
    description: "Loosen, open, slide out. Even the tight ones.",
    category: "basics",
  },
  {
    slug: "fuzzy-at-your-desk",
    title: "Fuzzying at your desk",
    description: "Quiet moves for meetings, calls and long reads.",
    category: "basics",
  },
];

// One demo per knot guide. Add `video` (and optionally `poster`) here when a
// knot's video is ready.
const knotVideos: Record<string, Pick<Demo, "video" | "poster" | "landscape">> = {};

export const demos: Demo[] = [
  ...basics,
  ...knots.map((k) => ({
    slug: k.slug,
    title: k.name,
    description: k.summary,
    category: "knots" as const,
    knot: k.slug,
    ...knotVideos[k.slug],
  })),
];

export function demosFor(category: Demo["category"]) {
  return demos.filter((d) => d.category === category);
}

export function demoForKnot(slug: string) {
  return demos.find((d) => d.knot === slug);
}
