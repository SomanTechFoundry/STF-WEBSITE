"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Plus } from "lucide-react";
import { services } from "@/lib/services";

export default function ServiceShowcase() {
  const [openId, setOpenId] = useState(services[0].id);

  return (
    <ul className="divide-y divide-slate-800/60 border-y border-slate-800/60">
      {services.map(({ id, icon: Icon, title, summary, detail, deliverables }, i) => {
        const open = id === openId;
        const panelId = `service-panel-${id}`;
        return (
          <li key={id}>
            <h3>
              <button
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? "" : id)}
                className="group flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-7"
              >
                <span className="hidden w-12 shrink-0 font-mono text-sm text-slate-600 sm:block">
                  ({String(i + 1).padStart(2, "0")})
                </span>
                <span
                  className={`grid size-11 shrink-0 place-items-center rounded-xl border transition-colors ${
                    open
                      ? "border-emerald-500 bg-emerald-500 text-slate-950"
                      : "border-slate-800/60 bg-slate-900/40 text-emerald-500 group-hover:border-emerald-500/40"
                  }`}
                >
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block text-xl font-bold transition-colors sm:text-2xl ${
                      open ? "text-white" : "text-slate-300 group-hover:text-white"
                    }`}
                  >
                    {title}
                  </span>
                  <span className="mt-1 block text-sm text-slate-400 sm:text-base">{summary}</span>
                </span>
                <Plus
                  className={`size-6 shrink-0 transition-all duration-300 ${
                    open ? "rotate-45 text-emerald-400" : "text-slate-500 group-hover:text-white"
                  }`}
                />
              </button>
            </h3>

            <div
              id={panelId}
              inert={!open}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-6 pb-8 sm:pl-[4.5rem] md:grid-cols-2 md:gap-10 lg:pl-[8.5rem]">
                  <div>
                    <p className="text-slate-300">{detail}</p>
                    <Link
                      href={`/services#${id}`}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                    >
                      Explore service
                      <ArrowUpRight className="size-4" />
                    </Link>
                  </div>
                  <ul className="grid gap-2.5 sm:grid-cols-2 md:grid-cols-1">
                    {deliverables.map((d) => (
                      <li key={d} className="flex items-center gap-2.5 text-sm text-slate-300">
                        <Check className="size-4 shrink-0 text-emerald-500" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
