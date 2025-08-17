import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="opacity-80 text-sm">© {new Date().getFullYear()} Lumin Labz</div>
        <nav className="flex gap-6 text-sm">
          <Link href="/legal" className="hover:opacity-80 focus-ring">Legal</Link>
          <a href="#" className="hover:opacity-80 focus-ring">Brand Guidelines</a>
          <a href="#" className="hover:opacity-80 focus-ring">Contact</a>
          <div className="opacity-60">@luminlabz</div>
        </nav>
      </div>
    </footer>
  );
}


