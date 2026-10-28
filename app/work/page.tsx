import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import { getDemoUrl, statusLabel, workApps } from "@/lib/work";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Apps and products built by Soman Tech Foundry. Try public demos, then ask us for access.",
};

export default function WorkPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-slate-800/60">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">
            Our Work
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Product catalog. <span className="text-slate-400">Try demos. Buy through us.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate-400">
            Each app lives in its own repo and deploy. Open a demo to see it working. If you want it for
            your business, request access — we provision real accounts ourselves.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <ul className="grid gap-4 sm:grid-cols-2">
          {workApps.map((app) => {
            const Icon = app.icon;
            const demoUrl = getDemoUrl(app);
            const canDemo = app.status !== "coming-soon";

            return (
              <li key={app.slug}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/50 hover:bg-slate-900/70 hover:shadow-xl hover:shadow-emerald-500/5">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-emerald-500/0 blur-3xl transition-colors duration-500 group-hover:bg-emerald-500/15"
                  />

                  <div className="relative flex items-start justify-between gap-3">
                    <span className="grid size-12 place-items-center rounded-xl border border-slate-800/60 bg-slate-950 text-emerald-500 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-500/40 group-hover:bg-emerald-500 group-hover:text-slate-950">
                      <Icon className="size-6" />
                    </span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-emerald-400">
                      {statusLabel(app.status)}
                    </span>
                  </div>

                  <h2 className="relative mt-5 text-xl font-bold text-white">{app.title}</h2>
                  <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-400">{app.summary}</p>

                  <ul className="relative mt-4 flex flex-wrap gap-2">
                    {app.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-slate-800/60 bg-slate-950/60 px-2.5 py-1 text-xs font-medium text-slate-400"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <div className="relative mt-6 flex flex-wrap gap-3">
                    <Link
                      href={`/work/${app.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-slate-800/60 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-400"
                    >
                      Details
                      <ArrowRight className="size-4" />
                    </Link>
                    {canDemo ? (
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
                      >
                        Try demo
                        <ExternalLink className="size-3.5" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center rounded-full border border-slate-800/60 px-4 py-2.5 text-sm font-semibold text-slate-600">
                        Demo soon
                      </span>
                    )}
                    <Link
                      href={`/contact?product=${app.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 px-4 py-2.5 text-sm font-semibold text-emerald-400 transition-colors hover:border-emerald-500 hover:bg-emerald-500/10"
                    >
                      Get this product
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
