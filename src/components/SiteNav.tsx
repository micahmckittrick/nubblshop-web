"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";

function isActive(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      <ul className="hidden md:flex items-center gap-1">
        {nav.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`inline-flex items-center min-h-10 px-3 rounded-full text-sm font-medium transition-colors ${
                  active ? "bg-sage-soft text-ink" : "text-slate hover:text-ink hover:bg-paper"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      <button
        type="button"
        className="md:hidden inline-flex items-center gap-2 min-h-10 px-4 rounded-full border border-line bg-paper text-sm font-semibold text-ink"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M3 3l10 10M13 3L3 13" /> : <path d="M2 4h12M2 8h12M2 12h12" />}
        </svg>
        Menu
      </button>

      {open && (
        <div id="mobile-nav" className="md:hidden absolute inset-x-0 top-full border-b border-line bg-cream shadow-sm">
          <ul className="max-w-6xl mx-auto px-4 py-3 flex flex-col">
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={`flex items-center min-h-12 px-3 rounded-xl text-base font-medium ${
                      active ? "bg-sage-soft text-ink" : "text-slate"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
}
