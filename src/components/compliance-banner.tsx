"use client";

import { useEffect, useState } from "react";

export default function ComplianceBanner() {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("llz_compliance_dismissed");
      setDismissed(v === "true");
    } catch {}
  }, []);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-2 inset-x-2 z-40">
      <div className="glass-strong rounded-[var(--radius)] px-3 py-1.5 text-xs leading-normal flex items-center gap-2">
        <div className="flex-1 text-center whitespace-nowrap">
          <span className="font-medium">For adults 21+.</span> <span>Keep out of reach of children. Contains THC.</span>
        </div>
        <button
          className="ml-auto shrink-0 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/15 focus-ring"
          onClick={() => {
            try {
              localStorage.setItem("llz_compliance_dismissed", "true");
            } catch {}
            setDismissed(true);
          }}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}


