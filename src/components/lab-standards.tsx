export default function LabStandards() {
  return (
    <section id="lab" className="relative py-20 overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-20"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/FactoryPouring.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">Lab Standards</h2>
        <p className="opacity-80 max-w-2xl mx-auto">
          We test, then we test again. Every batch is screened by third-party labs to ensure purity, potency, and consistency.
        </p>
        <ul className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
          <li className="glass p-4 rounded-[var(--radius)]">Heavy metals screening</li>
          <li className="glass p-4 rounded-[var(--radius)]">Residual solvents</li>
          <li className="glass p-4 rounded-[var(--radius)]">Microbial contaminants</li>
          <li className="glass p-4 rounded-[var(--radius)]">Pesticides</li>
        </ul>
        <div className="mt-6">
          <a href="/legal" className="btn btn-ghost">Read full details</a>
        </div>
      </div>
    </section>
  );
}


