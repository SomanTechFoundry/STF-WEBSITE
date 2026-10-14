import type { Metadata } from "next";
import { Clock, Globe2, Mail, type LucideIcon } from "lucide-react";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Tell us about your project. We reply within one business day.",
};

const details: { icon: LucideIcon; label: string; value: string; href?: string }[] = [
  { icon: Mail, label: "Email", value: "hola@yourcompany.com", href: "mailto:hola@yourcompany.com" },
  { icon: Clock, label: "Response time", value: "Within 1 business day" },
  { icon: Globe2, label: "Location", value: "Remote — worldwide" },
];

const steps = ["Send us the brief", "Intro call in 48 hours", "Proposal in 5 days"];

export default function ContactPage() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">
          Contact
        </p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Let&apos;s build <span className="text-slate-400">something great.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-slate-400">
          Share the basics. We&apos;ll take it from there.
        </p>

        <div className="mt-12 grid gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-3">
            <ContactForm />
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
              <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">What happens next</h2>
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
  );
}
