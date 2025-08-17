"use client";

import { useEffect, useRef, useState } from "react";
import { setCookie, getCookie } from "../lib/utils";

export default function AgeGate() {
  const [open, setOpen] = useState(false);
  const firstButtonRef = useRef<HTMLButtonElement | null>(null);
  const lastButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const verified = getCookie("llz_age_verified") === "true";
    if (!verified) setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const focusable = firstButtonRef.current;
    focusable?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        if (document.activeElement === lastButtonRef.current && !e.shiftKey) {
          e.preventDefault();
          firstButtonRef.current?.focus();
        } else if (
          document.activeElement === firstButtonRef.current &&
          e.shiftKey
        ) {
          e.preventDefault();
          lastButtonRef.current?.focus();
        }
      }
      if (e.key === "Escape") {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-title"
      className="fixed inset-0 z-50 grid place-items-center p-6 bg-black/70"
    >
      <div className="max-w-md w-full rounded-2xl glass-strong p-6 text-center">
        <h2 id="age-title" className="text-2xl md:text-3xl font-bold mb-2">
          21+ only
        </h2>
        <p className="text-sm opacity-80 mb-6">
          You must be 21 years of age or older to enter this site.
        </p>
        <div className="flex gap-3 justify-center">
          <button
            ref={firstButtonRef}
            className="px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-white focus-ring"
            onClick={() => {
              setCookie("llz_age_verified", "true", 30);
              setOpen(false);
            }}
          >
            Yes, I’m 21+
          </button>
          <a
            ref={lastButtonRef}
            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 focus-ring"
            href="https://www.google.com"
          >
            No
          </a>
        </div>
      </div>
    </div>
  );
}


