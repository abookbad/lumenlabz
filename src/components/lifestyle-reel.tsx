import Image from "next/image";

const REEL = [
  { src: "/media/hero.jpg", alt: "Neon city vibes" },
  { src: "/media/hero.jpg", alt: "Night out" },
  { src: "/media/hero.jpg", alt: "Studio glow" },
  { src: "/media/hero.jpg", alt: "Street lux" },
];

export default function LifestyleReel() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
          {REEL.map((m, i) => (
            <figure key={i} className="relative snap-start min-w-[75%] md:min-w-[40%] aspect-[4/3] rounded-[var(--radius)] overflow-hidden glass">
              <Image src={m.src} alt={m.alt} fill className="object-cover" />
              <figcaption className="absolute bottom-3 left-3 text-sm glyph-alt bg-black/40 px-2 py-1 rounded">
                {m.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


