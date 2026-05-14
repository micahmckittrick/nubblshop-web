export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#1a1209] text-[#f5e6d0]">
      {/* Logo / Brand */}
      <div className="mb-8">
        <span className="text-7xl">🧸</span>
      </div>

      <h1 className="text-5xl font-bold tracking-tight mb-2 text-[#f5c68a]">
        NubblShop
      </h1>

      <p className="text-xl font-medium mb-6 text-[#e8c99a] italic">
        Home of The Fuzzy.
      </p>

      <p className="max-w-md text-base text-[#c9a97a] leading-relaxed mb-10">
        A better way to fidget. Designed for adult sensory seekers, BFRB, and ADHD.
      </p>

      <div className="inline-block border border-[#c9854a] text-[#f5c68a] px-6 py-2 rounded-full text-sm font-semibold tracking-widest uppercase mb-12">
        Coming Soon to Etsy
      </div>

      {/* Social Links */}
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/nubbleshop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#c9a97a] hover:text-[#f5c68a] transition-colors text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
          @nubbleshop
        </a>

        <a
          href="https://www.tiktok.com/@nubbleshop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#c9a97a] hover:text-[#f5c68a] transition-colors text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.75a4.86 4.86 0 01-1.02-.06z"/>
          </svg>
          @nubbleshop
        </a>
      </div>

      <p className="mt-16 text-xs text-[#7a5c3a]">© 2026 NubblShop LLC</p>
    </main>
  );
}
