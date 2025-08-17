"use client";

const FLAVORS = [
  "Electric Berry",
  "Peach Buzz",
  "Pineapple Wave",
  "Grape Nebula",
  "Mango Ice",
];

export default function FlavorTicker() {
  return (
    <section id="flavors" className="relative py-10 overflow-hidden">
      <div className="marquee whitespace-nowrap text-sm md:text-base opacity-90">
        {Array.from({ length: 2 }).map((_, r) => (
          <span key={r} className="inline-block mr-8">
            {FLAVORS.map((f, i) => (
              <span key={f + i} className="inline-block px-3 py-1 mx-2 rounded-full glass">
                {f}
                <span className="mx-3 opacity-40">•</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </section>
  );
}


