"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send } from "lucide-react";

type Status = "idle" | "sending" | "sent";

const field =
  "w-full rounded-xl border border-slate-800/60 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-600 transition-colors focus:border-emerald-500/70 focus:outline-none focus:ring-2 focus:ring-emerald-500/20";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Mock submission — swap for a real API call when a backend is ready.
    setTimeout(() => setStatus("sent"), 900);
  }

  if (status === "sent") {
    return (
      <div className="flex min-h-[26rem] flex-col items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
        <CheckCircle2 className="size-14 text-emerald-500" />
        <h2 className="mt-5 text-2xl font-bold text-white">Message sent</h2>
        <p className="mt-2 max-w-xs text-slate-400">Thanks! We&apos;ll reply within one business day.</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-xl border border-slate-800/60 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-emerald-500/60 hover:text-emerald-400"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-slate-800/60 bg-slate-900/30 p-6 sm:p-8"
    >
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-300">
          Name
        </label>
        <input id="name" name="name" required autoComplete="name" placeholder="Jane Doe" className={field} />
      </div>
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-300">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@company.com"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="details" className="mb-1.5 block text-sm font-medium text-slate-300">
          Project details
        </label>
        <textarea
          id="details"
          name="details"
          required
          rows={6}
          placeholder="What are you building? Goals, timeline, budget range."
          className={`${field} resize-none`}
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? (
          <>
            <Loader2 className="size-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            Send message
            <Send className="size-4" />
          </>
        )}
      </button>
    </form>
  );
}
