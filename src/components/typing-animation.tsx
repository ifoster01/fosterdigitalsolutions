"use client";

import { useEffect, useState } from "react";

const phrases = [
  "Next.js & TypeScript Applications",
  "AI-Augmented Development",
  "Modern Web Architecture",
  "Full-Stack Product Engineering",
];

export function TypingAnimation() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const phrase = phrases[phraseIndex];

    if (!isDeleting && charIndex === phrase.length) {
      const timeout = setTimeout(() => setIsDeleting(true), 2800);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => setCharIndex((prev) => prev + (isDeleting ? -1 : 1)),
      isDeleting ? 30 : 65
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, mounted]);

  if (!mounted) {
    return (
      <span className="font-mono text-primary">
        <span className="animate-[blink_1s_step-end_infinite]">_</span>
      </span>
    );
  }

  return (
    <span className="font-mono text-primary">
      {phrases[phraseIndex].substring(0, charIndex)}
      <span className="animate-[blink_1s_step-end_infinite]">_</span>
    </span>
  );
}
