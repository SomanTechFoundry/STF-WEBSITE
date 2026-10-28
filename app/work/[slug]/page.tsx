import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { getDemoUrl, getWorkApp, statusLabel, workApps } from "@/lib/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return workApps.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const app = getWorkApp(slug);
  if (!app) return { title: "Our Work" };
  return {
    title: app.title,
    description: app.summary,
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const app = getWorkApp(slug);
  if (!app) notFound();

  const Icon = app.icon;
  const demoUrl = getDemoUrl(app);
  const canDemo = app.status !== "coming-soon";

  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <Link
          href="/work"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-400 transition-colors hover:text-emerald-400"
        >
          <ArrowLeft className="size-4" />
          All products
        </Link>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="grid size-14 place-items-center rounded-2xl border border-slate-800/60 bg-slate-900/60 text-emerald-500">
                <Icon className="size-7" />
              </span>
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-emerald-400">
                {statusLabel(app.status)}
              </span>
            </div>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {app.title}
            </h1>
            <p className="mt-4 text-lg text-slate-400">{app.description}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {app.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-slate-800/60 bg-slate-950/60 px-2.5 py-1 text-xs font-medium text-slate-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex w-full max-w-xs flex-col gap-3 sm:w-auto">
            {canDemo ? (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
              >
                Try live demo
                <ExternalLink className="size-4" />
              </a>
            ) : null}
            <Link
              href={`/contact?product=${app.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/40 px-6 py-3.5 text-sm font-semibold text-emerald-400 transition-colors hover:border-emerald-500 hover:bg-emerald-500/10"
            >
              Get this product
              <ArrowUpRight className="size-4" />
            </Link>
            <p className="text-center text-xs text-slate-500">
              Demo is public. Paid access is provisioned by STF.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 rounded-2xl border border-slate-800/60 bg-slate-900/30 p-7 sm:grid-cols-2">
          {app.highlights.map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-slate-300">
              <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-400">
                <Check className="size-3.5" />
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
