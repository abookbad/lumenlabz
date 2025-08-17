"use client";

import { useEffect, useState } from "react";

export default function KineticType({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2300);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className="relative inline-block word-swap">
      <span key={index} className="glyph-alt">
        {words[index]}
      </span>
    </span>
  );
}


