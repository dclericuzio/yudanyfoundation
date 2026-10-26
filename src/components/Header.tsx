"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full max-w-[100vw] border-b border-line/80 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/images/brand/logo.png"
            alt="Yudany Foundation"
            width={109}
            height={63}
            priority
            className="h-12 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.72rem] font-semibold uppercase tracking-[0.18em] transition-colors ${
                  active ? "text-navy" : "text-ink/70 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <Link
            href="/give"
            className="rounded-full bg-green px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-white hover:bg-navy"
          >
            Donate
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="relative block h-3.5 w-4">
            <span className={`absolute left-0 h-px w-4 bg-ink transition ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-px w-4 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-px w-4 bg-ink transition ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="border-t border-line px-5 py-4 lg:hidden" aria-label="Mobile">
          <div className="mx-auto flex max-w-6xl flex-col gap-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold uppercase tracking-[0.16em] hover:bg-paper-deep"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
