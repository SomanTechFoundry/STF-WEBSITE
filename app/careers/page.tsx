import type { Metadata } from "next";
import { Globe2, Rocket, Users, Wallet, type LucideIcon } from "lucide-react";
import JobListings from "@/components/job-listings";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join a remote-first studio. Open roles in engineering, design and video.",
};

const perks: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Globe2, title: "Remote-first", text: "Work from anywhere. Async by default." },
  { icon: Users, title: "Tiny team", text: "No layers. Your work ships under your name." },
  { icon: Rocket, title: "Real ownership", text: "Own projects from kickoff to launch." },
  { icon: Wallet, title: "Fair pay", text: "Competitive pay. Flexible hours." },
];

export default function CareersPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-slate-800/60">
        <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
        <div className="mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24">
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">
            Careers
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build great work, <span className="text-slate-400">from anywhere.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-slate-400">
            We&apos;re a small, remote-first team. Everyone here is a builder.
          </p>
          <a
            href="#open-roles"
            className="mt-8 inline-flex rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
          >
            See open roles
          </a>
        </div>
      </section>

      {/* Workspace overview */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="max-w-2xl">
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">
            Our workspace
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Your desk. Your rules.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-800/60 bg-slate-900/30 p-6 transition-colors hover:border-emerald-500/40 hover:bg-slate-900/60"
            >
              <Icon className="size-6 text-emerald-500" />
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-1.5 text-sm text-slate-400">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Open roles */}
      <section
        id="open-roles"
        className="scroll-mt-20 border-t border-slate-800/60"
      >
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="mb-8 max-w-2xl">
            <p className="font-mono text-sm font-medium uppercase tracking-widest text-emerald-500">
              Open roles
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Join the crew.
            </h2>
          </div>
          <JobListings />
        </div>
      </section>
    </>
  );
}
