"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-20" aria-labelledby="newsletter-title">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 id="newsletter-title" className="text-3xl md:text-5xl font-extrabold mb-4">
          Press play on updates
        </h2>
        <p className="opacity-80 mb-8">
          Subscribe for drops, flavors, and lab news. For adults 21+ only.
        </p>

        {!submitted ? (
          <form
            className="glass rounded-[var(--radius)] p-3 md:p-4 flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-center"
            onSubmit={(e) => {
              e.preventDefault();
              // In production, post to your ESP endpoint
              setSubmitted(true);
            }}
          >
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              inputMode="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@lumin.example"
              className="min-w-0 flex-1 bg-transparent border border-white/15 rounded-[var(--radius)] px-3 py-2 outline-none focus-ring"
            />
            <button type="submit" className="btn btn-primary w-full md:w-auto">
              Get updates
            </button>
          </form>
        ) : (
          <div className="glass rounded-[var(--radius)] p-4">
            <div className="font-semibold">Subscribed.</div>
            <div className="text-sm opacity-80">Welcome to Lumin Labz. Check your inbox to confirm.</div>
          </div>
        )}

        <p className="text-2xs md:text-xs opacity-60 mt-3">By subscribing you confirm you are 21+ and agree to receive informational emails. No purchase information will be sent.</p>
      </div>
    </section>
  );
}


