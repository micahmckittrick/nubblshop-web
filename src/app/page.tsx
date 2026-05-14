import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#fdfbf7] text-[#2c3e50]">
      {/* Logo / Brand */}
      <div className="mb-8">
        <Image 
          src="/logo.png" 
          alt="The Fuzzy by NubblShop" 
          width={300} 
          height={300} 
          className="mx-auto rounded-full shadow-sm"
          priority
        />
      </div>

      <h1 className="text-5xl font-bold tracking-tight mb-2 text-[#2c3e50]">
        NubblShop
      </h1>

      <p className="text-xl font-medium mb-6 text-[#4a6b8c] italic">
        Home of The Fuzzy.
      </p>

      <p className="max-w-md text-base text-[#5c7a99] leading-relaxed mb-10">
        A better way to fidget. Designed for adult sensory seekers, BFRB, and ADHD.
      </p>

      <div className="inline-block border-2 border-[#8ba6c1] text-[#4a6b8c] px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase mb-12 bg-white">
        Coming Soon to Etsy
      </div>

      {/* Social Links */}
      <div className="flex gap-6">
        <a
          href="https://www.instagram.com/nubbleshop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#5c7a99] hover:text-[#2c3e50] transition-colors font-medium text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
          </svg>
          @nubbleshop
        </a>

        <a
          href="https://www.tiktok.com/@nubbleshop"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[#5c7a99] hover:text-[#2c3e50] transition-colors font-medium text-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.53V6.75a4.86 4.86 0 01-1.02-.06z"/>
          </svg>
          @nubbleshop
        </a>
      </div>

      <p className="mt-16 text-xs text-[#8ba6c1]">© 2026 NubblShop LLC</p>
    </main>
  );
}
