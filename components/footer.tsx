import Link from "next/link";
import { Mail, Terminal } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact Us" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div className="space-y-3">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg bg-emerald-500 text-slate-950">
              <Terminal className="size-4" strokeWidth={2.75} />
            </span>
            <span>
              STF<span className="text-emerald-500">.</span>
            </span>
          </Link>
          <p className="text-sm text-slate-400">Small team. Big solutions. Remote-first.</p>
        </div>

        <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-400">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link href={href} className="transition-colors hover:text-emerald-400">
                {label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="mailto:hola@yourcompany.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-emerald-400"
            >
              <Mail className="size-4" />
              hola@yourcompany.com
            </a>
          </li>
        </ul>
      </div>
      <div className="border-t border-slate-800/60">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-slate-500 sm:px-8">
          © {new Date().getFullYear()} STF. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
