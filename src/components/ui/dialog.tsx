"use client";

import { useEffect } from "react";

export function Dialog({ open, onOpenChange, children }: { open: boolean; onOpenChange: (v: boolean) => void; children: React.ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);
  if (!open) return null;
  return (
    <div role="dialog" aria-modal className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6">
      <div className="glass-strong rounded-2xl p-6 w-full max-w-lg">
        {children}
      </div>
    </div>
  );
}

export default Dialog;


