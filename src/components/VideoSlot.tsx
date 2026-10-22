import type { Demo } from "@/content/demos";
import { isProduction } from "@/lib/site";

export function VideoSlot({ demo, showText = true }: { demo: Demo; showText?: boolean }) {
  const aspect = demo.landscape ? "aspect-video" : "aspect-[9/16]";

  return (
    <figure>
      {demo.video ? (
        <video
          controls
          playsInline
          preload="metadata"
          poster={demo.poster}
          className={`w-full ${aspect} rounded-2xl bg-ink object-cover`}
        >
          <source src={demo.video} type="video/mp4" />
        </video>
      ) : (
        <div
          className={`w-full ${aspect} rounded-2xl border border-line bg-gradient-to-br from-sage-soft via-paper to-lav-soft flex flex-col items-center justify-center gap-3 p-6 text-center`}
        >
          <span className="flex size-14 items-center justify-center rounded-full bg-paper shadow-sm ring-1 ring-line">
            <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M6 4l10 6-10 6z" fill="var(--color-slate)" />
            </svg>
          </span>
          <span className="text-sm font-semibold text-slate">Video coming soon</span>
          {!isProduction && (
            <span className="text-xs text-amber-800">
              Draft: add public/videos/{demo.slug}.mp4 and set <code>video</code> in src/content/demos.ts
            </span>
          )}
        </div>
      )}
      {showText && (
        <figcaption className="mt-3">
          <span className="block font-semibold text-ink">{demo.title}</span>
          <span className="block text-sm text-slate">{demo.description}</span>
        </figcaption>
      )}
    </figure>
  );
}
