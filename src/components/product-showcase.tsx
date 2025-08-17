"use client";

import Image from "next/image";
import { PRODUCTS } from "../data/products";
import { motion, useReducedMotion } from "framer-motion";

export default function ProductShowcase() {
  const reduce = useReducedMotion();
  return (
    <section className="py-16" aria-labelledby="products-title">
      <div className="max-w-7xl mx-auto px-6">
        <h2 id="products-title" className="text-3xl md:text-5xl font-extrabold mb-6">
          Press play on your vibe
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p, idx) => (
            <TiltCard key={p.id} index={idx}>
              <div className="relative aspect-[4/5] rounded-[var(--radius)] overflow-hidden glass group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-aqua-500/10" />
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: "radial-gradient(600px circle at var(--x) var(--y), rgba(255,255,255,.15), transparent 40%)" }} />
                <div className="p-4 absolute z-10">
                  <div className="flex gap-2 text-xs">
                    <span className="badge">{p.strain}</span>
                    <span className="badge">{p.potency}</span>
                  </div>
                </div>
                <div className="absolute inset-0 grid place-items-center">
                  <Image src={p.image} alt={`${p.flavor} device`} width={480} height={600} className="w-2/3 h-auto drop-shadow-[0_20px_60px_rgba(124,58,237,0.35)]" />
                </div>
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm opacity-70">{p.name}</p>
                      <h3 className="text-xl font-bold">{p.flavor}</h3>
                    </div>
                    <span className="text-xs opacity-75">Pull once. Smile twice.</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
        <div className="mt-8 overflow-x-auto snap-x snap-mandatory flex gap-4 pb-2 md:hidden">
          {PRODUCTS.map((p) => (
            <div key={p.id} className="snap-start min-w-[75%] rounded-2xl glass p-4">
              <div className="flex items-center gap-4">
                <Image src={p.image} alt={`${p.flavor} device`} width={120} height={160} className="h-32 w-auto" />
                <div>
                  <div className="text-xs opacity-70">{p.potency} • {p.strain}</div>
                  <div className="text-lg font-bold">{p.flavor}</div>
                  <div className="text-xs opacity-75">No harsh flex. Just smooth.</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ children, index }: { children: React.ReactNode; index: number }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? undefined : { opacity: 0, y: 20 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="relative"
      onMouseMove={(e) => {
        const el = e.currentTarget as HTMLElement;
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        el.style.setProperty("--x", `${x}px`);
        el.style.setProperty("--y", `${y}px`);
        const rotateX = ((y - rect.height / 2) / rect.height) * -8;
        const rotateY = ((x - rect.width / 2) / rect.width) * 8;
        el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
      }}
      style={{ transition: "transform 300ms ease" }}
    >
      {children}
    </motion.div>
  );
}


