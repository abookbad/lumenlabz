import Image from "next/image";

export default function BrandStory() {
  return (
    <section className="py-20" aria-labelledby="brand-title">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 id="brand-title" className="text-3xl md:text-5xl font-extrabold mb-4">
            Beyond <span className="glyph-alt">THCeory</span>
          </h2>
          <p className="opacity-85 mb-6 max-w-prose">
            Lumin Labz is neon‑futuristic street‑lux. We design premium THC disposables with lab‑grade hardware and true strain flavor science—built for adults 21+ who care about flow, feel, and finish.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <StoryCard title="Flavor" body="True strain profiles at low temp for bright, honest taste." />
            <StoryCard title="Hardware" body="Clog‑resistant ceramic, tuned airflow, USB‑C quick charge." />
            <StoryCard title="Standards" body="Third‑party tested—metals, solvents, microbials, pesticides." />
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-[var(--radius)] overflow-hidden glass">
          <Image src="/boxes/packaging.png" alt="Lumin Labz packaging" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 p-4 text-sm opacity-80">Press play on your vibe</div>
        </div>
      </div>
    </section>
  );
}

function StoryCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-4 rounded-[var(--radius)] glass">
      <div className="font-semibold mb-1">{title}</div>
      <div className="text-xs opacity-80 leading-relaxed">{body}</div>
    </div>
  );
}


