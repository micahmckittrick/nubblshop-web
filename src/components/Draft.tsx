import { isProduction } from "@/lib/site";

// Content that isn't confirmed yet. Shown with a "Draft" label on local dev
// and Vercel Preview; left out of production builds entirely.
export function Draft({ children, note }: { children?: React.ReactNode; note?: string }) {
  if (isProduction) return null;
  return (
    <div className="rounded-2xl border border-dashed border-amber-500/70 bg-amber-50/70 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-amber-800">
        Draft · not shown on production
      </p>
      {note && <p className="mt-1 text-sm text-amber-900">{note}</p>}
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
