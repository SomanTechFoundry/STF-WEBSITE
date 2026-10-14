"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What does STF build?",
    a: "Websites, web apps, portals, mobile apps, internal enterprise tools and AI features, plus the marketing to launch them.",
  },
  {
    q: "Where are your clients?",
    a: "Anywhere. We're remote-first and plan overlap hours around your time zone.",
  },
  {
    q: "How do we stay in touch during a project?",
    a: "A shared channel for daily questions, a weekly demo call, and a written update every Friday.",
  },
  {
    q: "Who will I actually work with?",
    a: "The engineers and designers doing the work. No account managers in between.",
  },
  {
    q: "How do I get started?",
    a: "Send a short brief through the contact page or email hola@yourcompany.com. We'll set up an intro call within 48 hours.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <ul className="divide-y divide-slate-800/60 rounded-2xl border border-slate-800/60 bg-slate-900/30">
      {faqs.map(({ q, a }, i) => {
        const isOpen = open === i;
        return (
          <li key={q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="group flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span
                  className={`font-semibold transition-colors ${
                    isOpen ? "text-white" : "text-slate-300 group-hover:text-white"
                  }`}
                >
                  {q}
                </span>
                <Plus
                  className={`size-5 shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-45 text-emerald-400" : "text-slate-500"
                  }`}
                />
              </button>
            </h3>
            <div
              id={`faq-${i}`}
              inert={!isOpen}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <p className="overflow-hidden px-6 text-slate-400">
                <span className="block pb-5">{a}</span>
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
