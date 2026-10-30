import Link from "next/link";
import { Globe2, Mail } from "lucide-react";
import Logo from "@/components/logo";

const columns = [
  {
    title: "Company",
    links: [
      { href: "/#about", label: "About us" },
      { href: "/#team", label: "Team" },
      { href: "/work", label: "Our Work" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { href: "/services#ai-agents", label: "AI Agents" },
      { href: "/services#website-online-presence", label: "Websites & Presence" },
      { href: "/services#business-operations", label: "Operations & POS" },
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
          <Logo />
          <p className="max-w-xs text-sm leading-relaxed text-slate-400">
            A remote-first tech studio building AI agents, websites, operations systems, automation and
            custom enterprise apps.
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:somandeepakofficial@gmail.com"
                className="inline-flex items-center gap-2 text-white transition-colors hover:text-emerald-400"
              >
                <Mail className="size-4 text-emerald-500" />
                somandeepakofficial@gmail.com
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
