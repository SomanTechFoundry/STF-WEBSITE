"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight, Menu, Terminal, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
      >
        <Link
          href="/"
          className="group flex items-center gap-2.5 text-lg font-bold tracking-tight text-white"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-emerald-500 text-slate-950 transition-transform group-hover:rotate-6">
            <Terminal className="size-4" strokeWidth={2.75} />
          </span>
          <span>
            STF<span className="text-emerald-500">.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-colors hover:text-white ${
                    active ? "text-emerald-400" : "text-slate-400"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800/60 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-400"
          >
            Start a project
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-10 place-items-center rounded-lg border border-slate-800/60 text-slate-300 transition-colors hover:border-emerald-500/60 hover:text-emerald-400 md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-slate-800/60 bg-slate-950 md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 sm:px-8">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <li key={href} className="border-b border-slate-800/60 last:border-0">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between py-4 text-lg font-semibold ${
                    active ? "text-emerald-400" : "text-white"
                  }`}
                >
                  {label}
                  <ArrowUpRight className="size-5 text-slate-400" />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
