// Decorative divider: the sage and lavender strands from the logo, twisting
// around each other.
function wave(width: number, amplitude: number) {
  let d = `M0 20 Q25 ${20 - amplitude} 50 20`;
  for (let x = 100; x <= width; x += 50) d += ` T${x} 20`;
  return d;
}

export function Cord({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 40"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={`block w-full h-6 ${className}`}
    >
      <path d={wave(600, 16)} fill="none" stroke="var(--color-sage)" strokeWidth="7" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      <path d={wave(600, -16)} fill="none" stroke="var(--color-lav)" strokeWidth="7" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
