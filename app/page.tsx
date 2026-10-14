import Link from "next/link";
import { ArrowRight, Gem, Rocket, Zap, type LucideIcon } from "lucide-react";

const pillars: {
  icon: LucideIcon;
  title: string;
  tagline: string;
  points: string[];
}[] = [
  {
    icon: Gem,
    title: "Quality",
    tagline: "Built to last, not to demo.",
    points: ["Typed, tested, reviewed code", "Accessible and secure by default", "Clean handoff and documentation"],
  },
  {
    icon: Rocket,
    title: "Innovation",
    tagline: "Modern tools, pragmatic choices.",
    points: ["AI-assisted workflows", "Proven stacks, fresh thinking", "Prototypes before promises"],
  },
  {
    icon: Zap,
    title: "Speed",
    tagline: "Ship in weeks, not quarters.",
    points: ["Senior-only, no handoff lag", "Weekly demos and releases", "Zero meeting bloat"],
  },
];

const stats = [
  { value: "1:1", label: "Senior access" },
  { value: "Weekly", label: "Shipped demos" },
  { value: "100%", label: "Remote-first" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-800/60">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="absolute left-1/2 top-0 -z-10 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="mx-auto max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28 lg:pt-36">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-slate-800/60 bg-slate-900/50 px-3.5 py-1.5 text-xs font-medium text-slate-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Now booking new projects
          </p>

          <h1
            className="animate-fade-up mt-6 max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Small Team, <span className="text-emerald-500">Big Solutions.</span>
          </h1>

          <p
            className="animate-fade-up mt-6 max-w-xl text-lg leading-relaxed text-slate-400 sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            We design and build web, mobile and AI products. Senior engineers. Direct communication. Fast delivery.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 text-base font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:shadow-emerald-400/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-400"
            >
              Get in Touch
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-slate-800/60 px-7 py-3.5 text-base font-semibold text-white transition-colors hover:border-slate-700 hover:bg-slate-900/60"
            >
              Explore Services
            </Link>
          </div>

          <dl
            className="animate-fade-up mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-slate-800/60 pt-8"
            style={{ animationDelay: "320ms" }}
          >
            {stats.map(({ value, label }) => (
              <div key={label}>
                <dt className="sr-only">{label}</dt>
                <dd className="text-2xl font-bold text-white sm:text-3xl">{value}</dd>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</p>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">
            Our philosophy
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Three principles. Every project.
          </h2>
          <p className="mt-4 text-lg text-slate-400">No fluff. Just how we work.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, tagline, points }, i) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-2xl border border-slate-800/60 bg-slate-900/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-slate-900/60"
            >
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-xl border border-slate-800/60 bg-slate-950 text-emerald-500 transition-colors group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10">
                  <Icon className="size-6" />
                </span>
                <span className="font-mono text-sm text-slate-600">0{i + 1}</span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-white">{title}</h3>
              <p className="mt-1 text-slate-400">{tagline}</p>
              <ul className="mt-6 space-y-2.5 border-t border-slate-800/60 pt-6 text-sm text-slate-300">
                {points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40 px-6 py-14 text-center sm:px-12">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
          />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="relative mx-auto mt-3 max-w-md text-slate-400">
            Tell us what you&apos;re building. We reply within one business day.
          </p>
          <Link
            href="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-7 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
          >
            Get in Touch
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
