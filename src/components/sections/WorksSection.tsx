"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect } from "react";
import { projects } from "@/lib/projects";
import RevealOnScroll from "@/components/RevealOnScroll";
import SiteFooter from "@/components/SiteFooter";

const CARD_W = 400;
const CARD_GAP = 16;
const SCROLL_BY = CARD_W + CARD_GAP;
const AUTO_SPEED = 0.6; // px per frame

function shortTags(services: string) {
  return services.split("•").slice(0, 2).map((t) => t.trim().toUpperCase()).join(", ");
}

function ArrowButton({ dir, onClick }: { dir: "left" | "right"; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      className="flex h-[52px] w-[52px] items-center justify-center rounded-full border border-black dark:border-white transition-colors duration-200 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-black dark:text-white"
    >
      {dir === "left" ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 12H5M5 12l7 7M5 12l7-7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );
}

export default function WorksSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const tick = () => {
      if (!pausedRef.current && el) {
        el.scrollLeft += AUTO_SPEED;
        // infinite loop: when scrolled past the first set, reset to start
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) el.scrollLeft -= half;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const scroll = (dir: "left" | "right") => {
    pausedRef.current = true;
    trackRef.current?.scrollBy({ left: dir === "left" ? -SCROLL_BY : SCROLL_BY, behavior: "smooth" });
    // resume auto-scroll after interaction
    setTimeout(() => { pausedRef.current = false; }, 1200);
  };

  return (
    <section className="relative flex flex-col overflow-x-hidden">
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-desktop px-[var(--container-padding-mobile)] pt-[calc(64px+24px)] lg:px-[var(--container-padding-desktop)] lg:pt-[calc(64px+70px)]">
          <div data-reveal className="hero-reveal-scroll flex items-center justify-between">
            <div>
              <h2 className="h2 lg:hidden">Selected Works</h2>
              <h2 className="hidden lg:block h1">Selected Works</h2>
            </div>
            {/* Prev / Next controls — desktop only */}
            <div className="hidden lg:flex items-center gap-3">
              <ArrowButton dir="left" onClick={() => scroll("left")} />
              <ArrowButton dir="right" onClick={() => scroll("right")} />
            </div>
          </div>
        </div>

        {/* Mobile: vertical stack — each card individually observed */}
        <div className="mx-auto w-full max-w-desktop mt-8 px-[var(--container-padding-mobile)] pb-16 lg:hidden">
          <div className="flex flex-col gap-1.5">
            {projects.map((project, i) => (
              <RevealOnScroll key={project.slug}>
                <Link
                  href={`/works/${project.slug}`}
                  data-reveal
                  className="reveal-item hero-reveal-scroll group relative flex h-[420px] w-full overflow-hidden rounded-[16px]"
                  style={{ "--stagger-delay": `${i * 60}ms` } as React.CSSProperties}
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-110 group-hover:blur-[2px]"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6 text-white">
                    <h3 className="h3 italic">{project.title}</h3>
                    <p className="case-caption truncate">{shortTags(project.services)}</p>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Desktop: auto-scrolling strip with prev/next control */}
        <div
          data-reveal
          className="hero-reveal-scroll hero-reveal-delay-2 hidden lg:block mt-12 pb-24"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto pl-[var(--container-padding-desktop)]"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
          >
            {[...projects, ...projects].map((project, i) => (
              <Link
                key={`${project.slug}-${i}`}
                href={`/works/${project.slug}`}
                className="group relative h-[616px] w-[400px] flex-shrink-0 overflow-hidden rounded-[16px]"
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-110 group-hover:blur-[2px]"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6 text-white">
                  <h3 className="h3 italic md:text-[36px] md:leading-[40px]">{project.title}</h3>
                  <p className="case-caption truncate">{shortTags(project.services)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </RevealOnScroll>
      <SiteFooter />
    </section>
  );
}
