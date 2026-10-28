"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  BarChart3,
  Bot,
  ChevronDown,
  CircleHelp,
  Info,
  Layers,
  Mail,
  Menu,
  Route,
  Users,
  X,
  type LucideIcon,
} from "lucide-react";
import Logo from "@/components/logo";
import { services } from "@/lib/services";

type MenuItem = { href: string; label: string; description: string; icon: LucideIcon };

type MenuGroup = {
  id: string;
  label: string;
  items: MenuItem[];
  footer?: { href: string; label: string };
  wide?: boolean;
  isActive: (pathname: string) => boolean;
};

const menus: MenuGroup[] = [
  {
    id: "services",
    label: "Services",
    wide: true,
    items: services.map(({ id, icon, title, summary }) => ({
      href: `/services#${id}`,
      label: title,
      description: summary,
      icon,
    })),
    footer: { href: "/services", label: "All services" },
    isActive: (p) => p.startsWith("/services"),
  },
  {
    id: "company",
    label: "Company",
    items: [
      { href: "/#about", label: "About us", description: "Who we are and how we work", icon: Info },
      { href: "/#team", label: "Team", description: "The people you'll work with", icon: Users },
      { href: "/#process", label: "Process", description: "From first call to launch", icon: Route },
      { href: "/contact", label: "Contact", description: "Start a project with us", icon: Mail },
    ],
    isActive: (p) => p.startsWith("/contact"),
  },
  {
    id: "resources",
    label: "Resources",
    items: [
      { href: "/services", label: "What we deliver", description: "Everything each project includes", icon: Layers },
      { href: "/#stack", label: "Our AI approach", description: "How we use AI, safely", icon: Bot },
      { href: "/#numbers", label: "Our commitments", description: "Response times and delivery rhythm", icon: BarChart3 },
      { href: "/#faq", label: "FAQ", description: "Answers to common questions", icon: CircleHelp },
    ],
    isActive: () => false,
  },
];

const work = { href: "/work", label: "Our Work" };
const careers = { href: "/careers", label: "Careers" };

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileGroup, setMobileGroup] = useState<string | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!openMenu) return;
    const onPointer = (e: PointerEvent) => {
      if (!desktopNavRef.current?.contains(e.target as Node)) setOpenMenu(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenMenu(null);
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [openMenu]);

  const closeAll = () => {
    setOpenMenu(null);
    setMobileOpen(false);
  };

  const workActive = pathname.startsWith(work.href);
  const careersActive = pathname.startsWith(careers.href);

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full border border-slate-800/60 bg-slate-900/80 pl-5 pr-2 shadow-lg shadow-slate-950/50 backdrop-blur-xl sm:pl-6"
      >
        <Logo />

        <ul ref={desktopNavRef} className="hidden items-center gap-1 lg:flex">
          {menus.map((menu) => {
            const open = openMenu === menu.id;
            const active = menu.isActive(pathname);
            return (
              <li
                key={menu.id}
                className="relative"
                onMouseEnter={() => setOpenMenu(menu.id)}
                onMouseLeave={() => setOpenMenu((current) => (current === menu.id ? null : current))}
              >
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`${menu.id}-menu`}
                  onClick={() => setOpenMenu(open ? null : menu.id)}
                  className={`inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white ${
                    active ? "text-emerald-400" : open ? "text-white" : "text-slate-400"
                  }`}
                >
                  {menu.label}
                  <ChevronDown className={`size-4 transition-transform ${open ? "rotate-180" : ""}`} />
                </button>

                <div
                  id={`${menu.id}-menu`}
                  hidden={!open}
                  className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 ${menu.wide ? "w-[34rem]" : "w-80"}`}
                >
                  <div className="rounded-3xl border border-slate-800/60 bg-slate-900 p-3 shadow-2xl shadow-slate-950/60">
                    <ul className={`grid gap-1 ${menu.wide ? "grid-cols-2" : "grid-cols-1"}`}>
                      {menu.items.map(({ href, label, description, icon: Icon }) => (
                        <li key={href + label}>
                          <Link
                            href={href}
                            onClick={closeAll}
                            className="group flex gap-3 rounded-2xl p-3 transition-colors hover:bg-slate-800/60"
                          >
                            <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-slate-800/60 bg-slate-950 text-emerald-500 transition-colors group-hover:border-emerald-500/40">
                              <Icon className="size-4" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-white">{label}</span>
                              <span className="mt-0.5 block text-xs leading-snug text-slate-400">{description}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {menu.footer && (
                      <Link
                        href={menu.footer.href}
                        onClick={closeAll}
                        className="mt-2 flex items-center justify-between rounded-2xl border border-slate-800/60 px-4 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/40 hover:text-emerald-400"
                      >
                        {menu.footer.label}
                        <ArrowUpRight className="size-4" />
                      </Link>
                    )}
                  </div>
                </div>
              </li>
            );
          })}

          <li>
            <Link
              href={work.href}
              aria-current={workActive ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white ${
                workActive ? "text-emerald-400" : "text-slate-400"
              }`}
            >
              {work.label}
            </Link>
          </li>

          <li>
            <Link
              href={careers.href}
              aria-current={careersActive ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-white ${
                careersActive ? "text-emerald-400" : "text-slate-400"
              }`}
            >
              {careers.label}
            </Link>
          </li>
        </ul>

        <Link
          href="/contact"
          className="hidden items-center gap-1.5 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 lg:inline-flex"
        >
          Start a Project
          <ArrowUpRight className="size-4" />
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="grid size-12 place-items-center rounded-full bg-slate-800/70 text-white transition-colors hover:bg-slate-800 lg:hidden"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        hidden={!mobileOpen}
        className="mx-auto mt-2 max-h-[calc(100dvh-6rem)] max-w-6xl overflow-y-auto rounded-3xl border border-slate-800/60 bg-slate-900 p-3 shadow-2xl lg:hidden"
      >
        <ul className="divide-y divide-slate-800/60">
          {menus.map((menu) => {
            const open = mobileGroup === menu.id;
            return (
              <li key={menu.id}>
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`mobile-${menu.id}`}
                  onClick={() => setMobileGroup(open ? null : menu.id)}
                  className="flex w-full items-center justify-between px-3 py-4 text-lg font-semibold text-white"
                >
                  {menu.label}
                  <ChevronDown
                    className={`size-5 transition-transform ${open ? "rotate-180 text-emerald-400" : "text-slate-400"}`}
                  />
                </button>
                <ul id={`mobile-${menu.id}`} hidden={!open} className="grid gap-1 pb-3">
                  {menu.items.map(({ href, label, description, icon: Icon }) => (
                    <li key={href + label}>
                      <Link
                        href={href}
                        onClick={closeAll}
                        className="flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-slate-800/60"
                      >
                        <span className="grid size-9 shrink-0 place-items-center rounded-lg border border-slate-800/60 bg-slate-950 text-emerald-500">
                          <Icon className="size-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-white">{label}</span>
                          <span className="block text-xs text-slate-400">{description}</span>
                        </span>
                      </Link>
                    </li>
                  ))}
                  {menu.footer && (
                    <li>
                      <Link
                        href={menu.footer.href}
                        onClick={closeAll}
                        className="flex items-center gap-1.5 px-3 py-2.5 text-sm font-semibold text-emerald-400"
                      >
                        {menu.footer.label}
                        <ArrowUpRight className="size-4" />
                      </Link>
                    </li>
                  )}
                </ul>
              </li>
            );
          })}
          <li>
            <Link
              href={work.href}
              onClick={closeAll}
              className="flex items-center justify-between px-3 py-4 text-lg font-semibold text-white"
            >
              {work.label}
              <ArrowUpRight className="size-5 text-slate-400" />
            </Link>
          </li>
          <li>
            <Link
              href={careers.href}
              onClick={closeAll}
              className="flex items-center justify-between px-3 py-4 text-lg font-semibold text-white"
            >
              {careers.label}
              <ArrowUpRight className="size-5 text-slate-400" />
            </Link>
          </li>
        </ul>

        <Link
          href="/contact"
          onClick={closeAll}
          className="mt-2 flex items-center justify-center gap-2 rounded-full bg-emerald-500 py-3.5 font-semibold text-slate-950"
        >
          Start a Project
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </header>
  );
}
