"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PRODUCTS } from "../data/products";
import { isReducedMotion } from "../lib/utils";

export default function FlavorCarousel() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  // Duplicate slides to enable seamless loop
  const slides = [...PRODUCTS, ...PRODUCTS];

  // Continuous autoplay using requestAnimationFrame with easing on hover
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let rafId = 0;
    const GAP = 24; // gap-6
    const stepRef = { current: 0 } as { current: number };
    const totalRef = { current: 0 } as { current: number };
    const offsetRef = { current: 0 } as { current: number };
    const lastRef = { current: performance.now() } as { current: number };
    const speedRef = { current: isReducedMotion() ? 0 : 0.18 } as { current: number };
    const targetSpeedRef = { current: speedRef.current } as { current: number };

    const recalc = () => {
      const firstCard = track.querySelector<HTMLElement>("[data-card]");
      if (!firstCard) return;
      const cardWidth = firstCard.getBoundingClientRect().width;
      stepRef.current = cardWidth + GAP;
      totalRef.current = stepRef.current * PRODUCTS.length; // one full set width
    };
    recalc();
    const onResize = () => recalc();
    window.addEventListener("resize", onResize);

    const loop = (now: number) => {
      const dt = now - lastRef.current;
      lastRef.current = now;
      // ease speed toward target for a natural feel
      speedRef.current += (targetSpeedRef.current - speedRef.current) * 0.08;
      const delta = speedRef.current * dt;
      offsetRef.current += delta;
      if (offsetRef.current >= totalRef.current) offsetRef.current -= totalRef.current;
      if (offsetRef.current < 0) offsetRef.current += totalRef.current;
      track.style.transform = `translateX(-${offsetRef.current}px)`;
      const newIndex = Math.floor((offsetRef.current / stepRef.current) % PRODUCTS.length);
      if (newIndex !== index) setIndex(newIndex);
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    // Expose controls via dataset to access in handlers (typed)
    (track as unknown as { _llz_controls?: { targetSpeedRef: { current: number }; stepRef: { current: number }; offsetRef: { current: number } } })._llz_controls = {
      targetSpeedRef,
      stepRef,
      offsetRef,
    };

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <section id="flavors" className="py-10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-4xl font-extrabold mb-4">Flavors</h2>
      </div>
      <div
        ref={wrapperRef}
        className="overflow-hidden px-6 pb-4"
        aria-label="Flavor carousel"
        onMouseEnter={() => {
          const controls = (trackRef.current as unknown as { _llz_controls?: { targetSpeedRef: { current: number } } })?._llz_controls;
          if (controls) controls.targetSpeedRef.current = 0; // ease to stop
        }}
        onMouseLeave={() => {
          const controls = (trackRef.current as unknown as { _llz_controls?: { targetSpeedRef: { current: number } } })?._llz_controls;
          if (controls) controls.targetSpeedRef.current = isReducedMotion() ? 0 : 0.18; // ease back to cruising
        }}
      >
        <div ref={trackRef} className="flex gap-6 will-change-transform">
          {slides.map((p, i) => (
            <article
              key={`${p.id}-${i}`}
              data-card
              className="relative shrink-0 h-[70vh] aspect-[1/2] w-auto rounded-[var(--radius)] overflow-hidden glass"
            >
              <Image src={p.image} alt={`${p.flavor} device`} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-sm opacity-80">{p.potency} • {p.strain}</div>
                <h3 className="text-3xl font-extrabold">{p.flavor}</h3>
                <p className="text-xs opacity-80">Pull once. Smile twice.</p>
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="mt-2 flex items-center justify-center gap-2">
        {PRODUCTS.map((p, i) => (
          <button
            key={p.id}
            aria-label={`Go to ${p.flavor}`}
            className={`h-1.5 rounded-full transition-all ${i === index ? "w-8 bg-white" : "w-3 bg-white/40"}`}
            onClick={() => {
              const controls = (trackRef.current as unknown as { _llz_controls?: { targetSpeedRef: { current: number }; stepRef: { current: number }; offsetRef: { current: number } } })?._llz_controls;
              if (!controls) return;
              controls.targetSpeedRef.current = 0;
              controls.offsetRef.current = i * controls.stepRef.current;
              if (trackRef.current)
                (trackRef.current as HTMLElement).style.transform = `translateX(-${controls.offsetRef.current}px)`;
              setIndex(i);
            }}
          />
        ))}
      </div>
    </section>
  );
}


