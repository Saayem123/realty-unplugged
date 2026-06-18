"use client";

import { useEffect } from "react";

/**
 * Adds a subtle staggered fade-up as elements scroll into view.
 * Progressive enhancement: if JS is disabled or the user prefers
 * reduced motion, content simply renders in its final state.
 */
export default function Reveal() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || typeof IntersectionObserver === "undefined") return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal] > *")
    );
    if (!targets.length) return;

    targets.forEach((el, i) => {
      el.classList.add("reveal-init");
      el.style.transitionDelay = `${Math.min(i * 45, 240)}ms`;
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.remove("reveal-init");
            el.classList.add("reveal-in");
            io.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    targets.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
