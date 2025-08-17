const QUOTES = [
  { quote: "Flavor hits like neon.", author: "Local tastemaker" },
  { quote: "Draw is smooth, zero harsh flex.", author: "Studio friend" },
  { quote: "Vibe feels engineered—because it is.", author: "Sneakerhead" },
];

export default function Shoutouts() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Shoutouts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {QUOTES.map((q, i) => (
            <blockquote key={i} className="glass p-6 rounded-2xl">
              <p className="text-lg">“{q.quote}”</p>
              <footer className="text-xs opacity-70 mt-2">— {q.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


