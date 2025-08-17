"use client";

import Particles from "./particles";
import { motion, useReducedMotion } from "framer-motion";

export default function Hero() {
  const reduce = useReducedMotion();
  return (
    <section className="relative h-[90svh] w-full overflow-hidden rounded-none">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        playsInline
        muted
        loop
      >
        <source src="/LuminHeroBG.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60" />
      <Particles />
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 grid place-content-center text-center">
        <motion.h1
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold leading-tight text-gradient-animated kinetic-outline display-prefer-local"
        >
          Turn on the <span className="glyph-alt">Lumin</span>
        </motion.h1>
        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-4 max-w-2xl mx-auto opacity-90"
        >
          Premium THC disposables engineered for flavor, flow, and feel. For adults 21+.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#flavors" className="btn btn-primary">Explore Flavors</a>
          <a href="#tech" className="btn btn-ghost">See the Tech</a>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-80 text-xs animate-bounce">
          Scroll
        </div>
      </div>
    </section>
  );
}


