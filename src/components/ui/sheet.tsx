"use client";

export function Sheet({ open, onOpenChange, children }: { open: boolean; onOpenChange: (v: boolean) => void; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/60" onClick={() => onOpenChange(false)} />
      <div className="absolute right-0 top-0 h-full w-[90%] sm:w-[420px] glass-strong p-6">
        {children}
      </div>
    </div>
  );
}

export default Sheet;


