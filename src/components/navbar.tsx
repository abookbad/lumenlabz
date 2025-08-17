"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "../lib/utils";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-transform duration-700",
        visible ? "translate-y-0" : "-translate-y-10"
      )}
      role="navigation"
      aria-label="Primary"
    >
      <div className="mx-auto max-w-7xl px-4 py-2">
        <div className="backdrop-blur-xl bg-white/5 dark:bg-black/20 border border-white/10 rounded-[var(--radius)] px-4 py-2 flex items-center justify-between">
          <Link href="#" className="font-semibold tracking-wide text-gradient-animated">
            Lumin Labz
          </Link>
          <nav className="hidden md:flex gap-5 text-sm">
            <a href="#flavors" className="nav-link focus-ring">Flavors</a>
            <a href="#tech" className="nav-link focus-ring">Tech</a>
            <a href="#lab" className="nav-link focus-ring">Lab</a>
            <a href="#faqs" className="nav-link focus-ring">FAQs</a>
          </nav>
          <button
            aria-label="Toggle theme"
            className="p-2 rounded-[var(--radius)] focus-ring border border-white/10 bg-white/5 hover:bg-white/10"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {mounted && theme === "light" ? (
              <Moon size={18} />
            ) : (
              <Sun size={18} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


