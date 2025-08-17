"use client";

type SwitchProps = {
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
  id?: string;
};

export default function Switch({ checked, onCheckedChange, id }: SwitchProps) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={checked}
      onClick={() => onCheckedChange(!checked)}
      className={`inline-flex h-6 w-11 items-center rounded-full transition bg-white/20 ${checked ? "bg-violet-600" : "bg-white/20"}`}
    >
      <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition ${checked ? "translate-x-5" : "translate-x-1"}`} />
    </button>
  );
}


