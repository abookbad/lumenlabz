import { BatteryCharging, FlaskConical, Leaf, Usb } from "lucide-react";

export default function MaterialsTech() {
  return (
    <section id="tech" className="py-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Lab-grade hardware. Cloud-nine draw.
          </h2>
          <p className="opacity-80 mb-6">
            Built for smooth, consistent pulls. Engineered to keep flavor true and sessions seamless.
          </p>
          <ul className="grid gap-3 text-sm">
            <li className="flex items-center gap-2"><FlaskConical size={18} /> Clog-resistant ceramic coil</li>
            <li className="flex items-center gap-2"><Leaf size={18} /> True strain flavors</li>
            <li className="flex items-center gap-2"><Usb size={18} /> USB-C quick charge</li>
            <li className="flex items-center gap-2"><BatteryCharging size={18} /> Zero heavy-metal taste</li>
          </ul>
        </div>
        <div className="rounded-[var(--radius)] glass p-8">
          <div className="grid grid-cols-2 gap-6 text-center">
            <TechCard title="Ceramic Core" caption="Clog-resistant" />
            <TechCard title="USB-C" caption="Quick charge" />
            <TechCard title="Low-temp" caption="Flavor first" />
            <TechCard title="Tuned Airflow" caption="Smooth draw" />
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCard({ title, caption }: { title: string; caption: string }) {
  return (
    <div className="p-6 rounded-[var(--radius)] bg-white/5 hover:bg-white/10 transition-colors border border-white/10">
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-xs opacity-70">{caption}</div>
    </div>
  );
}


