"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, X } from "lucide-react";

type Props = {
  role: string | null;
  onClose: () => void;
};

type Status = "idle" | "sending" | "sent";

export default function ApplyModal({ role, onClose }: Props) {
  const titleId = useId();
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  // Reset form state each time a new role is opened.
  useEffect(() => {
    if (role) setStatus("idle");
  }, [role]);

  // Escape to close, focus first field, lock scroll.
  useEffect(() => {
    if (!role) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [role, onClose]);

  if (!role) return null;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Mock submission — swap for a real API call when a backend is ready.
    setTimeout(() => setStatus("sent"), 900);
  }

  const field =
    "w-full rounded-xl border border-slate-800/60 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-600 transition-colors focus:border-emerald-500/70 focus:outline-none focus:ring-2 focus:ring-emerald-500/20";

  return (
    <div
      className="fixed inset-0 z-[60] grid place-items-end bg-slate-950/80 backdrop-blur-sm sm:place-items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="animate-fade-up max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border border-slate-800/60 bg-slate-900 p-6 shadow-2xl sm:max-w-lg sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-500">Apply</p>
            <h2 id={titleId} className="mt-1 text-xl font-bold text-white">
              {role}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid size-9 shrink-0 place-items-center rounded-lg border border-slate-800/60 text-slate-400 transition-colors hover:border-slate-700 hover:text-white"
          >
            <X className="size-4" />
          </button>
        </div>

        {status === "sent" ? (
          <div className="py-10 text-center">
            <CheckCircle2 className="mx-auto size-12 text-emerald-500" />
            <h3 className="mt-4 text-xl font-bold text-white">Application sent</h3>
            <p className="mt-2 text-slate-400">Thanks! We&apos;ll reply within 5 business days.</p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-emerald-400"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="apply-name" className="mb-1.5 block text-sm font-medium text-slate-300">
                Full name
              </label>
              <input
                ref={firstFieldRef}
                id="apply-name"
                name="name"
                required
                autoComplete="name"
                placeholder="Jane Doe"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="apply-email" className="mb-1.5 block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="apply-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@example.com"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="apply-link" className="mb-1.5 block text-sm font-medium text-slate-300">
                Portfolio or LinkedIn
              </label>
              <input
                id="apply-link"
                name="link"
                type="url"
                required
                placeholder="https://"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="apply-note" className="mb-1.5 block text-sm font-medium text-slate-300">
                Why you? <span className="text-slate-600">(optional)</span>
              </label>
              <textarea
                id="apply-note"
                name="note"
                rows={3}
                placeholder="Two lines is plenty."
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
                "Submit application"
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
