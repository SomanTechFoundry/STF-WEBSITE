import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import WorkCatalog from "@/components/work-catalog";
import { getDemoUrl, workApps } from "@/lib/work";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Try live STF demos in one click — AI agents, POS, and more. Then request access for your business.",
};

export default function WorkPage() {
  const demoUrls = Object.fromEntries(workApps.map((app) => [app.slug, getDemoUrl(app)]));

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">
              Our Work
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
              Try it live. <span className="text-emerald-500">Buy through us.</span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Pick a service, hit try demo — no scrolling hunting. Real accounts are provisioned by STF when
              you&apos;re ready.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-full border border-slate-800/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-400 sm:self-auto"
          >
            Need something custom?
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 sm:mt-12">
          <WorkCatalog demoUrls={demoUrls} />
        </div>
      </div>
    </section>
  );
}
