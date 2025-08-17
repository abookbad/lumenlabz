export const metadata = {
  title: "Legal",
  description: "Compliance and legal information for Lumin Labz.",
};

export default function LegalPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-5xl font-extrabold mb-6">Legal & Compliance</h1>
      <p className="opacity-80 mb-4">
        Lumin Labz products are intended for adults 21+ only. Keep out of reach of children and pets.
      </p>
      <p className="opacity-80 mb-4">
        Certificates of Analysis (COA) are available upon request. Where not available, placeholders are indicated.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Third-party lab testing for every batch</li>
        <li>No sale or purchase functions on this site</li>
        <li>Marketing compliant to applicable adult-use regulations</li>
      </ul>
    </main>
  );
}


