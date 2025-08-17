"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Particles() {
  const reduce = useReducedMotion();
  const dots = new Array(20).fill(0).map((_, i) => i);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((i) => {
        const x = (i * 37) % 100;
        const y = (i * 53) % 100;
        const delay = (i % 5) * 0.4;
        const size = 2 + (i % 3);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              width: size,
              height: size,
              boxShadow: "0 0 16px 6px rgba(124,58,237,0.3)",
              background:
                i % 2 === 0 ? "#7C3AED" : i % 3 === 0 ? "#00F5D4" : "#FFE45E",
              opacity: 0.7,
            }}
            animate={reduce ? undefined : { y: [0, -15, 0], x: [0, 8, 0], opacity: [0.7, 0.5, 0.7] }}
            transition={{ duration: 6 + (i % 4), repeat: Infinity, delay }}
          />
        );
      })}
    </div>
  );
}


