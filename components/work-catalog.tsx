"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ExternalLink, Play } from "lucide-react";
import { services } from "@/lib/services";
import { getWorkAppsForService, statusLabel, type WorkApp } from "@/lib/work";

function DemoCard({ app, demoUrl }: { app: WorkApp; demoUrl: string }) {
  const Icon = app.icon;
  const canDemo = app.status !== "coming-soon";
  const serviceTitle = services.find((s) => s.id === app.serviceId)?.title;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950/70 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/10 sm:p-7">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 size-48 rounded-full bg-emerald-500/0 blur-3xl transition-colors duration-500 group-hover:bg-emerald-500/20"
      />

      <div className="relative flex items-start justify-between gap-3">
        <span className="grid size-12 place-items-center rounded-xl border border-slate-800/60 bg-slate-900 text-emerald-500 transition-all duration-300 group-hover:scale-105 group-hover:border-emerald-500/40 group-hover:bg-emerald-500 group-hover:text-slate-950">
          <Icon className="size-6" />
        </span>
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-emerald-400">
          {statusLabel(app.status)}
        </span>
      </div>

      {serviceTitle ? (
        <p className="relative mt-5 font-mono text-[11px] font-medium uppercase tracking-widest text-slate-500">
          {serviceTitle}
        </p>
      ) : null}

      <h2 className="relative mt-1.5 text-xl font-bold text-white sm:text-2xl">{app.title}</h2>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-400">{app.summary}</p>

      <ul className="relative mt-4 flex flex-wrap gap-1.5">
        {app.tags.slice(0, 3).map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-slate-800/60 bg-slate-900/60 px-2.5 py-1 text-[11px] font-medium text-slate-400"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
        {canDemo ? (
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
          >
            <Play className="size-4 fill-current" />
            Try live demo
            <ExternalLink className="size-3.5" />
          </a>
        ) : null}
        <Link
          href={`/contact?product=${app.slug}`}
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-emerald-500/40 px-5 py-3 text-sm font-semibold text-emerald-400 transition-colors hover:border-emerald-500 hover:bg-emerald-500/10"
        >
          Get access
          <ArrowUpRight className="size-4" />
        </Link>
        <Link
          href={`/work/${app.slug}`}
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-800/60 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-400"
        >
          Details
          <ArrowRight className="size-3.5" />
        </Link>
      </div>
    </article>
  );
}

type Props = {
  /** Resolved on the server so Client Components don't re-read env (hydration-safe). */
  demoUrls: Record<string, string>;
};

export default function WorkCatalog({ demoUrls }: Props) {
  const [activeId, setActiveId] = useState("ai-agents");
  const activeService = services.find((s) => s.id === activeId) ?? services[0];
  const panelApps = getWorkAppsForService(activeId);

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]">
      <aside className="lg:sticky lg:top-28 lg:self-start">
        <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-slate-500">
          Browse by service
        </p>
        <nav aria-label="Services" className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
          {services.map(({ id, icon: Icon, title }) => {
            const count = getWorkAppsForService(id).length;
            const active = id === activeId;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveId(id)}
                className={`flex shrink-0 items-center gap-2.5 rounded-full border px-4 py-2.5 text-left text-sm font-semibold transition-colors lg:w-full lg:rounded-xl ${
                  active
                    ? "border-emerald-500 bg-emerald-500 text-slate-950"
                    : "border-slate-800/60 bg-slate-950/40 text-slate-300 hover:border-emerald-500/40 hover:text-white"
                }`}
              >
                <Icon className="size-4 shrink-0" />
                <span className="min-w-0 flex-1 truncate">{title}</span>
                {count > 0 ? (
                  <span
                    className={`font-mono text-[11px] ${active ? "text-slate-800" : "text-emerald-400"}`}
                  >
                    ●
                  </span>
                ) : null}
              </button>
            );
          })}
        </nav>
      </aside>

      <div className="min-w-0">
        <div className="mb-5">
          <p className="font-mono text-[11px] font-medium uppercase tracking-widest text-emerald-500">
            {activeService?.title}
          </p>
          <h2 className="mt-1 text-2xl font-bold tracking-tight text-white sm:text-3xl">
            {panelApps.length > 0 ? "Sample projects for this service" : "Demo coming soon"}
          </h2>
        </div>

        {panelApps.length > 0 ? (
          <ul
            className={`grid gap-4 ${panelApps.length > 1 ? "md:grid-cols-2" : "max-w-xl"}`}
          >
            {panelApps.map((app) => (
              <li key={app.slug}>
                <DemoCard app={app} demoUrl={demoUrls[app.slug] ?? app.demoUrlProduction} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex min-h-[14rem] flex-col justify-between rounded-2xl border border-dashed border-slate-800/60 bg-slate-950/40 p-7 sm:flex-row sm:items-center sm:gap-8">
            <div className="max-w-md">
              <p className="text-lg font-bold text-white">No public sample yet</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">
                {activeService?.summary} Tell us what you need — we&apos;ll show a relevant build or spin up
                a walkthrough.
              </p>
            </div>
            <Link
              href={`/contact?service=${activeId}`}
              className="mt-6 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400 sm:mt-0"
            >
              Talk to us
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
