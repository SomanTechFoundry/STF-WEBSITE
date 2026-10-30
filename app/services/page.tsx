import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI agents, websites, business operations, automation, reporting, and custom enterprise apps — built by a small senior team.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-slate-800/60">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">
            Services
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Six services. <span className="text-slate-400">One focused team.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-400">
            AI agents, online presence, operations, automation, reporting, and custom apps. Pick one or
            combine them.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ id, icon: Icon, title, summary, tags }, i) => (
            <Link
              key={id}
              id={id}
              href="/contact"
              aria-label={`${title} — start a project`}
              className="group relative flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-emerald-500/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              {/* hover glow */}
              <span
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-emerald-500/0 blur-3xl transition-colors duration-500 group-hover:bg-emerald-500/15"
              />

              <div className="relative flex items-start justify-between">
                <span className="grid size-12 place-items-center rounded-xl border border-slate-800/60 bg-slate-950 text-emerald-500 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-500/40 group-hover:bg-emerald-500 group-hover:text-slate-950">
                  <Icon className="size-6" />
                </span>
                <ArrowUpRight className="size-5 text-slate-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-400" />
              </div>

              <p className="relative mt-6 font-mono text-xs text-slate-600">0{i + 1}</p>
              <h2 className="relative mt-1 text-xl font-bold text-white">{title}</h2>
              <p className="relative mt-2 flex-1 text-slate-400">{summary}</p>

              <ul className="relative mt-6 flex flex-wrap gap-2 border-t border-slate-800/60 pt-5">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md border border-slate-800/60 bg-slate-950/60 px-2.5 py-1 font-mono text-xs text-slate-400 transition-colors group-hover:border-emerald-500/20 group-hover:text-emerald-300"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-slate-800/60 bg-slate-900/30 p-7 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-white">Not sure what you need?</h2>
            <p className="mt-1 text-slate-400">Describe the problem. We&apos;ll suggest the shortest path.</p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
          >
            Get in Touch
            <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
