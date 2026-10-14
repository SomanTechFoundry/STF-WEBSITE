"use client";

import { useCallback, useState } from "react";
import {
  ArrowRight,
  Clapperboard,
  Clock,
  Code2,
  MapPin,
  Palette,
  ServerCog,
  type LucideIcon,
} from "lucide-react";
import ApplyModal from "@/components/apply-modal";

type Job = {
  title: string;
  team: "Engineering" | "Creative Design" | "Social Media";
  icon: LucideIcon;
  type: string;
  summary: string;
  skills: string[];
};

const jobs: Job[] = [
  {
    title: "Senior Full-Stack Engineer",
    team: "Engineering",
    icon: Code2,
    type: "Full-time",
    summary: "Ship web products end to end with React, Next.js and Node.",
    skills: ["TypeScript", "Next.js", "PostgreSQL"],
  },
  {
    title: "Mobile Engineer",
    team: "Engineering",
    icon: ServerCog,
    type: "Full-time",
    summary: "Build polished iOS and Android apps used by thousands.",
    skills: ["React Native", "Swift/Kotlin", "REST/GraphQL"],
  },
  {
    title: "Product & UI Designer",
    team: "Creative Design",
    icon: Palette,
    type: "Full-time",
    summary: "Design crisp interfaces and systems, from wireframe to handoff.",
    skills: ["Figma", "Design systems", "Prototyping"],
  },
  {
    title: "Social Media Video Editor",
    team: "Social Media",
    icon: Clapperboard,
    type: "Contract",
    summary: "Cut short-form video that stops the scroll for us and our clients.",
    skills: ["Premiere / DaVinci", "After Effects", "Reels & Shorts"],
  },
];

const teams = ["All", "Engineering", "Creative Design", "Social Media"] as const;

export default function JobListings() {
  const [filter, setFilter] = useState<(typeof teams)[number]>("All");
  const [applyingTo, setApplyingTo] = useState<string | null>(null);
  const closeModal = useCallback(() => setApplyingTo(null), []);

  const visible = filter === "All" ? jobs : jobs.filter((j) => j.team === filter);

  return (
    <>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter roles by team">
        {teams.map((team) => {
          const active = team === filter;
          return (
            <button
              key={team}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(team)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                active
                  ? "border-emerald-500 bg-emerald-500 text-slate-950"
                  : "border-slate-800/60 text-slate-400 hover:border-slate-700 hover:text-white"
              }`}
            >
              {team}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {visible.map(({ title, team, icon: Icon, type, summary, skills }) => (
          <article
            key={title}
            className="group flex flex-col rounded-2xl border border-slate-800/60 bg-slate-900/30 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:bg-slate-900/60"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="grid size-11 place-items-center rounded-xl border border-slate-800/60 bg-slate-950 text-emerald-500 transition-colors group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10">
                <Icon className="size-5" />
              </span>
              <span className="rounded-full border border-slate-800/60 px-3 py-1 text-xs font-medium text-slate-400">
                {team}
              </span>
            </div>

            <h3 className="mt-5 text-xl font-bold text-white">{title}</h3>
            <p className="mt-2 text-slate-400">{summary}</p>

            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-slate-800/60 bg-slate-950/60 px-2.5 py-1 font-mono text-xs text-slate-400"
                >
                  {s}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/60 pt-5">
              <p className="flex items-center gap-4 text-sm text-slate-400">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="size-4" />
                  Remote
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {type}
                </span>
              </p>
              <button
                type="button"
                onClick={() => setApplyingTo(title)}
                className="group/btn inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
              >
                Apply Now
                <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </article>
        ))}
      </div>

      <ApplyModal role={applyingTo} onClose={closeModal} />
    </>
  );
}
