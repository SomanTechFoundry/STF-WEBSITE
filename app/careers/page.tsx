import type { Metadata } from "next";
import { Clock, Globe2, Mail, Rocket, Users, Wallet, type LucideIcon } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join a remote-first studio. Contact our HR team the same way clients start a project.",
};

const perks: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Globe2, title: "Remote-first", text: "Work from anywhere. Async by default." },
  { icon: Users, title: "Tiny team", text: "No layers. Your work ships under your name." },
  { icon: Rocket, title: "Real ownership", text: "Own projects from kickoff to launch." },
  { icon: Wallet, title: "Fair pay", text: "Competitive pay. Flexible hours." },
];

const details: { icon: LucideIcon; label: string; value: string; href?: string }[] = [
  {
    icon: Mail,
    label: "HR email",
    value: "somandeepakofficial@gmail.com",
    href: "mailto:somandeepakofficial@gmail.com?subject=STF%20careers",
  },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
  { icon: Globe2, label: "Location", value: "Remote — worldwide" },
];

const steps = ["Send a short intro", "HR replies in 1 business day", "Intro chat if it’s a fit"];

export default function CareersPage() {
  return (
    <>
      {/* First screen: Careers + workspace — no scroll needed */}
      <section className="relative isolate flex min-h-[calc(100svh-5.5rem)] flex-col overflow-hidden border-b border-slate-800/60">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center gap-10 px-5 py-10 sm:gap-12 sm:px-8 sm:py-12 lg:gap-14">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">
                Careers
              </p>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.05]">
                Build with us. <span className="text-slate-400">Start with HR.</span>
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
                We don&apos;t post a fixed job board. Reach our HR team the same way clients request a
                product — tell us who you are, and we&apos;ll take it from there.
              </p>
            </div>
            <a
              href="#contact-hr"
              className="inline-flex shrink-0 self-start rounded-full bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-400 sm:self-auto"
            >
              Contact HR
            </a>
          </div>

          <div>
            <div className="max-w-2xl">
              <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">
                Our workspace
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Your desk. Your rules.
              </h2>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
              {perks.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-slate-800/60 bg-slate-900/30 p-5 transition-colors hover:border-emerald-500/40 hover:bg-slate-900/60"
                >
                  <Icon className="size-5 text-emerald-500" />
                  <h3 className="mt-3 text-base font-bold text-white">{title}</h3>
                  <p className="mt-1 text-sm text-slate-400">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next section: reached via Contact HR */}
      <section id="contact-hr" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">
            Contact HR
          </p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Same simple form. Different team on the other end.
          </h2>
          <p className="mt-4 max-w-xl text-lg text-slate-400">
            Share your background and what you want to work on. Our HR team replies within one business day —
            just like we do for product access requests.
          </p>

          <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-3">
              <ContactForm intent="careers" />
            </div>

            <aside className="space-y-8 lg:col-span-2">
              <ul className="space-y-3">
                {details.map(({ icon: Icon, label, value, href }) => {
                  const content = (
                    <>
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-slate-800/60 bg-slate-950 text-emerald-500 transition-colors group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                          {label}
                        </span>
                        <span className="block truncate font-semibold text-white">{value}</span>
                      </span>
                    </>
                  );
                  const cls =
                    "group flex items-center gap-4 rounded-2xl border border-slate-800/60 bg-slate-900/30 p-4 transition-colors";
                  return (
                    <li key={label}>
                      {href ? (
                        <a href={href} className={`${cls} hover:border-emerald-500/40 hover:bg-slate-900/60`}>
                          {content}
                        </a>
                      ) : (
                        <div className={cls}>{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>

              <div className="rounded-2xl border border-slate-800/60 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                  What happens next
                </h3>
                <ol className="mt-5 space-y-4">
                  {steps.map((step, i) => (
                    <li key={step} className="flex items-center gap-4 text-white">
                      <span className="grid size-7 shrink-0 place-items-center rounded-full border border-emerald-500/40 bg-emerald-500/10 font-mono text-xs font-semibold text-emerald-400">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
