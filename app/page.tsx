import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Code2,
  Compass,
  ExternalLink,
  Hammer,
  Mail,
  Megaphone,
  MessageSquare,
  Palette,
  Rocket,
  ShieldCheck,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import Counter from "@/components/counter";
import Faq from "@/components/faq";
import ServiceShowcase from "@/components/service-showcase";
import { getDemoUrl, statusLabel, workApps } from "@/lib/work";

const heroStats = [
  { to: 6, suffix: "", label: "Service lines under one roof" },
  { to: 100, suffix: "%", label: "Remote-first team" },
  { to: 48, suffix: "h", label: "To your intro call" },
];

const marqueeItems = [
  "Marketing Websites",
  "Web Apps",
  "E-commerce",
  "iOS & Android",
  "AI Assistants",
  "Internal Tools",
  "Customer Portals",
  "Headless CMS",
  "API Integrations",
  "SEO & Content",
  "Short-form Video",
  "UI/UX Design",
  "Brand Identity",
  "Press & PR",
];

const aboutPoints = [
  "Senior engineers and designers only",
  "One shared channel, no account managers",
  "Fixed scope, clear timeline, honest pricing",
  "Support after launch, not just a handoff",
];

const process: { step: string; label: string; title: string; text: string; icon: LucideIcon }[] = [
  {
    step: ".01",
    label: "Clarity before code",
    title: "Discovery call & clear scope",
    text: "One call to understand your goals. A written plan with scope, timeline and price.",
    icon: Compass,
  },
  {
    step: ".02",
    label: "Weekly demos",
    title: "Design & build in short sprints",
    text: "Working software every week. You see progress and steer as we go.",
    icon: Hammer,
  },
  {
    step: ".03",
    label: "Launch & beyond",
    title: "Launch, support & keep growing",
    text: "We ship, monitor and iterate. Ongoing support when you need it.",
    icon: Rocket,
  },
];

const stack: { icon: LucideIcon; title: string; text: string }[] = [
  {
    icon: Code2,
    title: "AI-assisted engineering",
    text: "AI speeds up prototyping. Engineers review and test every line before it ships.",
  },
  {
    icon: Bot,
    title: "AI inside your product",
    text: "Assistants, smart search and document processing on leading model APIs.",
  },
  {
    icon: Workflow,
    title: "Automate the busywork",
    text: "Workflows that read, sort and route information so your team can focus on customers.",
  },
  {
    icon: ShieldCheck,
    title: "Human-reviewed, privacy-first",
    text: "Models and hosting chosen to fit your data rules. People check what matters.",
  },
];

const team: { icon: LucideIcon; role: string; text: string }[] = [
  { icon: Code2, role: "Engineering", text: "Full-stack, mobile and cloud." },
  { icon: Palette, role: "Design", text: "Product, UI/UX and brand." },
  { icon: Sparkles, role: "AI", text: "Assistants, automation and data." },
  { icon: Megaphone, role: "Growth & PR", text: "SEO, social video and press." },
];

const numbers: { to?: number; text?: string; suffix?: string; label: string }[] = [
  { to: 48, suffix: "h", label: "From brief to intro call" },
  { to: 5, suffix: " days", label: "From call to written proposal" },
  { text: "Weekly", label: "Live demos of working software" },
  { to: 100, suffix: "%", label: "Senior people on every project" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">{children}</p>
  );
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate -mt-20 overflow-hidden pt-20">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div
          aria-hidden
          className="absolute left-1/2 top-0 -z-10 h-96 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="mx-auto max-w-4xl px-5 pb-16 pt-20 text-center sm:px-8 sm:pt-28 lg:pt-32">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-slate-800/60 bg-slate-900/50 px-3.5 py-1.5 text-xs font-medium text-slate-400">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Now booking new projects
          </p>

          <h1
            className="animate-fade-up mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "80ms" }}
          >
            Small Team, <span className="text-emerald-500">Big Solutions.</span>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 sm:text-xl"
            style={{ animationDelay: "160ms" }}
          >
            Web, mobile and AI products built by senior engineers. Direct communication. Weekly progress. No
            jargon.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition-all hover:bg-emerald-400"
            >
              Get in Touch
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-slate-800/60 px-7 py-3.5 font-semibold text-white transition-colors hover:border-slate-700 hover:bg-slate-900/60"
            >
              Our Services
            </Link>
          </div>

          <dl
            className="animate-fade-up mx-auto mt-16 grid max-w-3xl grid-cols-3 divide-x divide-slate-800/60 rounded-2xl border border-slate-800/60 bg-slate-900/30"
            style={{ animationDelay: "320ms" }}
          >
            {heroStats.map(({ to, suffix, label }) => (
              <div key={label} className="flex flex-col-reverse px-3 py-6 sm:px-6">
                <dt className="mt-1 text-xs text-slate-400 sm:text-sm">{label}</dt>
                <dd className="text-3xl font-bold text-white sm:text-4xl">
                  <Counter to={to} suffix={suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Marquee */}
        <div className="marquee-mask overflow-hidden border-y border-slate-800/60 py-5" aria-label="What we build">
          <ul className="animate-marquee flex w-max gap-3">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <li
                key={`${item}-${i}`}
                aria-hidden={i >= marqueeItems.length}
                className="flex items-center gap-3 whitespace-nowrap rounded-full border border-slate-800/60 bg-slate-900/40 px-5 py-2 text-sm font-medium text-slate-300"
              >
                <span className="size-1.5 rounded-full bg-emerald-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* About */}
      <section id="about" className="scroll-mt-28 mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionLabel>About us</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              From idea to launch, built by the people you talk to.
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-slate-400">
              STF is a remote-first studio. We keep the team small on purpose, so every project gets senior
              attention from kickoff to launch.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutPoints.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-slate-800/60 bg-slate-900/30 p-4 text-sm text-slate-300"
                >
                  <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-emerald-500" />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/careers"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              Learn more about how we work
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Services</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Six capabilities. One focused team.
              </h2>
              <p className="mt-4 text-lg text-slate-400">Design, build and grow, without juggling vendors.</p>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-800/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-400"
            >
              All services
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12">
            <ServiceShowcase />
          </div>
        </div>
      </section>

      {/* Our Work */}
      <section id="work" className="scroll-mt-28 border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <SectionLabel>Our Work</SectionLabel>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Products you can try. Access we control.
              </h2>
              <p className="mt-4 text-lg text-slate-400">
                Open a live demo. If you want it for your business, request access and we provision it.
              </p>
            </div>
            <Link
              href="/work"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-slate-800/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-400"
            >
              Full catalog
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <ul className="mt-12 grid gap-4 md:grid-cols-2">
            {workApps.map((app) => {
              const Icon = app.icon;
              const demoUrl = getDemoUrl(app);
              const canDemo = app.status !== "coming-soon";
              return (
                <li key={app.slug}>
                  <article className="flex h-full flex-col rounded-2xl border border-slate-800/60 bg-slate-950/40 p-7 transition-colors hover:border-emerald-500/40">
                    <div className="flex items-start justify-between gap-3">
                      <span className="grid size-12 place-items-center rounded-xl border border-slate-800/60 bg-slate-900 text-emerald-500">
                        <Icon className="size-6" />
                      </span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 font-mono text-[11px] font-medium uppercase tracking-wider text-emerald-400">
                        {statusLabel(app.status)}
                      </span>
                    </div>
                    <h3 className="mt-5 text-xl font-bold text-white">{app.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{app.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
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
                      ) : null}
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="scroll-mt-28 border-t border-slate-800/60 bg-slate-900/20">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <SectionLabel>How we work</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              From first call to launch in three steps.
            </h2>
            <p className="mt-4 text-lg text-slate-400">A clear plan, weekly demos, support after launch.</p>
          </div>

          <ol className="mt-12 grid gap-4 md:grid-cols-3">
            {process.map(({ step, label, title, text, icon: Icon }) => (
              <li
                key={step}
                className="group relative flex flex-col rounded-2xl border border-slate-800/60 bg-slate-950 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    {label}
                  </span>
                  <span className="font-mono text-2xl font-bold text-slate-700 transition-colors group-hover:text-emerald-500">
                    {step}
                  </span>
                </div>
                <Icon className="mt-8 size-7 text-emerald-500" />
                <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
                <p className="mt-2 text-slate-400">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* AI stack */}
      <section id="stack" className="scroll-mt-28 border-t border-slate-800/60">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <SectionLabel>Our AI approach</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              AI speed. Engineer judgment.
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Faster results without cutting corners. Every output is reviewed by a person.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {stack.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="rounded-2xl border border-slate-800/60 bg-slate-900/30 p-6 transition-colors hover:border-emerald-500/40 hover:bg-slate-900/60"
              >
                <Icon className="size-6 text-emerald-500" />
                <h3 className="mt-4 font-bold text-white">{title}</h3>
                <p className="mt-1.5 text-sm text-slate-400">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="scroll-mt-28 border-t border-slate-800/60 bg-slate-900/20">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="max-w-2xl">
            <SectionLabel>Our team</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Who you&apos;ll work with.
            </h2>
            <p className="mt-4 text-lg text-slate-400">Four disciplines, one team, on every project.</p>
          </div>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {team.map(({ icon: Icon, role, text }) => (
              <li
                key={role}
                className="group overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-950 transition-colors hover:border-emerald-500/40"
              >
                <div className="grid aspect-[4/3] place-items-center bg-gradient-to-br from-slate-900 to-slate-950">
                  <span className="grid size-20 place-items-center rounded-full border border-slate-800/60 bg-slate-900 text-emerald-500 transition-all duration-300 group-hover:scale-110 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10">
                    <Icon className="size-8" />
                  </span>
                </div>
                <div className="border-t border-slate-800/60 p-5">
                  <h3 className="font-bold text-white">{role}</h3>
                  <p className="mt-1 text-sm text-slate-400">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Numbers */}
      <section id="numbers" className="scroll-mt-28 border-t border-slate-800/60">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
          <div className="max-w-2xl">
            <SectionLabel>By the numbers</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Small team, clear commitments.
            </h2>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-800/60 lg:grid-cols-4">
            {numbers.map(({ to, text, suffix, label }) => (
              <div key={label} className="flex flex-col-reverse bg-slate-950 p-6 sm:p-8">
                <dt className="mt-2 text-sm text-slate-400">{label}</dt>
                <dd className="text-3xl font-bold text-white sm:text-4xl">
                  {to !== undefined ? <Counter to={to} suffix={suffix} /> : text}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-28 border-t border-slate-800/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionLabel>FAQ</SectionLabel>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Clarity before you start.
            </h2>
            <p className="mt-4 text-lg text-slate-400">What to expect from working with us.</p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
            >
              Ask us anything
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <div className="lg:col-span-3">
            <Faq />
          </div>
        </div>
      </section>

      {/* CTA + contact channels */}
      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800/60 bg-slate-900/40">
          <div
            aria-hidden
            className="absolute left-1/2 top-0 h-48 w-[32rem] max-w-full -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl"
          />
          <div className="relative grid gap-10 p-8 sm:p-12 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to build something that grows with you?
              </h2>
              <p className="mt-4 max-w-lg text-slate-400">
                Tell us your goals. We&apos;ll map the shortest path from idea to launch.
              </p>
              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-7 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
              >
                Start your project
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">Let&apos;s stay in touch</h3>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href="mailto:hola@yourcompany.com"
                    className="group flex items-center gap-4 rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4 transition-colors hover:border-emerald-500/40"
                  >
                    <Mail className="size-5 text-emerald-500" />
                    <span className="min-w-0">
                      <span className="block text-xs text-slate-500">Email us</span>
                      <span className="block truncate font-semibold text-white">hola@yourcompany.com</span>
                    </span>
                  </a>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="group flex items-center gap-4 rounded-2xl border border-slate-800/60 bg-slate-950/60 p-4 transition-colors hover:border-emerald-500/40"
                  >
                    <MessageSquare className="size-5 text-emerald-500" />
                    <span>
                      <span className="block text-xs text-slate-500">Send a brief</span>
                      <span className="block font-semibold text-white">Contact form</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
