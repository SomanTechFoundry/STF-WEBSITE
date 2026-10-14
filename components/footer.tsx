import Link from "next/link";
import { Globe2, Mail, Terminal } from "lucide-react";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/#about", label: "About us" },
      { href: "/#team", label: "Team" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#web-development", label: "Web Development" },
      { href: "/services#mobile-apps", label: "Mobile Apps" },
      { href: "/services#ai-solutions", label: "AI Solutions" },
      { href: "/services", label: "All services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/#process", label: "Process" },
      { href: "/#stack", label: "How we use AI" },
      { href: "/#faq", label: "FAQ" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 lg:grid-cols-5">
        <div className="space-y-5 lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5 text-lg font-bold tracking-tight">
            <span className="grid size-8 place-items-center rounded-lg bg-emerald-500 text-slate-950">
              <Terminal className="size-4" strokeWidth={2.75} />
            </span>
            <span>
              STF<span className="text-emerald-500">.</span>
            </span>
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            A remote-first tech studio building websites, apps, enterprise software and AI tools.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:hola@yourcompany.com"
                className="inline-flex items-center gap-2 text-white transition-colors hover:text-emerald-400"
              >
                <Mail className="size-4 text-emerald-500" />
                hola@yourcompany.com
              </a>
            </li>
            <li className="inline-flex items-center gap-2 text-slate-400">
              <Globe2 className="size-4 text-emerald-500" />
              Remote, worldwide
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
          {columns.map(({ title, links }) => (
            <div key={title}>
              <h2 className="text-sm font-semibold text-white">{title}</h2>
              <ul className="mt-4 space-y-3 text-sm text-slate-400">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} className="transition-colors hover:text-emerald-400">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-800/60">
        <p className="mx-auto max-w-6xl px-5 py-6 text-xs text-slate-500 sm:px-8">
          © {new Date().getFullYear()} STF. Small Team, Big Solutions.
        </p>
      </div>
    </footer>
  );
}
