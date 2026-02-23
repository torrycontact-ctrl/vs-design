"use client";

import { useEffect, useRef } from "react";

interface RevealOnScrollProps {
  children: React.ReactNode;
  selector?: string;
  rootMargin?: string;
  threshold?: number;
  replay?: boolean;
}

const DEFAULT_SELECTOR = "[data-reveal]";

export default function RevealOnScroll({
  children,
  selector = DEFAULT_SELECTOR,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.2,
  replay = false,
}: RevealOnScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = wrapperRef.current;
    if (!root) return;

    const elements = Array.from(root.querySelectorAll<HTMLElement>(selector));
    if (!elements.length) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      elements.forEach((el) => el.classList.add("reveal-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            target.classList.add("reveal-visible");
            if (!replay) observer.unobserve(target);
          } else if (replay && entry.intersectionRatio === 0) {
            target.classList.remove("reveal-visible");
          }
        });
      },
      { rootMargin, threshold },
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [replay, rootMargin, selector, threshold]);

  return <div ref={wrapperRef}>{children}</div>;
}
