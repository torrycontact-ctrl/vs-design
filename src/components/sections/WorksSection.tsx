"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function WorksSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const style = window.getComputedStyle(container);
    const gap = parseFloat(style.columnGap || style.gap || "0");
    const cssCardWidth = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--card-w-desktop"),
    );
    const cardWidth = container.querySelector<HTMLElement>("[data-card]")?.offsetWidth ?? 0;
    const scrollAmount = (cardWidth || cssCardWidth || container.clientWidth) + gap;
    const delta = direction === "left" ? -scrollAmount : scrollAmount;

    container.scrollBy({ left: delta, behavior: "smooth" });
  };

  return (
    <section className="relative flex flex-col overflow-hidden bg-[linear-gradient(180deg,#FFF9FE_0%,#F4C5F7_44.27%,#CFCDFA_100%)] dark:bg-none">
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-[var(--max-w-desktop)] px-[var(--container-padding-mobile)] pt-[calc(64px+24px)] lg:px-[var(--container-padding-desktop)] lg:pt-[calc(64px+70px)]">
          <div className="flex items-end justify-between gap-6">
            <div data-reveal className="hero-reveal-scroll">
              <h2 className="h2 lg:hidden">Selected Works</h2>
              <h2 className="hidden lg:block h1">Selected Works</h2>
            </div>

            <div data-reveal className="hero-reveal-scroll hero-reveal-delay-1 hidden lg:flex items-center gap-3">
              <button
                type="button"
                aria-label="Scroll works left"
                onClick={() => scroll("left")}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-black)] dark:border-[var(--color-white)] transition-all duration-200 hover:bg-[var(--color-black)] dark:hover:bg-[var(--color-white)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-[var(--color-black)] dark:stroke-[var(--color-white)] group-hover:stroke-[var(--color-white)] dark:group-hover:stroke-[var(--color-black)] transition-all duration-200"
                >
                  <path
                    d="M19 12H5M5 12L12 5M5 12L12 19"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Scroll works right"
                onClick={() => scroll("right")}
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-black)] dark:border-[var(--color-white)] transition-all duration-200 hover:bg-[var(--color-black)] dark:hover:bg-[var(--color-white)]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-[var(--color-black)] dark:stroke-[var(--color-white)] group-hover:stroke-[var(--color-white)] dark:group-hover:stroke-[var(--color-black)] transition-all duration-200"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          data-reveal
          className="hero-reveal-scroll hero-reveal-delay-2 mt-8 px-[var(--container-padding-mobile)] pb-16 lg:mt-12 lg:pl-[var(--container-padding-desktop)] lg:pr-0 lg:pb-24"
        >
          <div
            ref={scrollRef}
            className="flex flex-col gap-1.5 lg:flex-row lg:gap-1 lg:overflow-x-auto lg:pb-2 lg:snap-x lg:snap-mandatory scrollbar-hide"
          >
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/works/${project.slug}`}
                data-card
                className="stagger-card group relative h-[513px] w-full overflow-hidden rounded-[16px] lg:h-[var(--container-xl,616px)] lg:w-[var(--container-sm,400px)] lg:flex-shrink-0 lg:snap-start"
                style={{ "--stagger-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-110 group-hover:blur-[2px]"
                  sizes="(min-width: 1024px) 400px, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6 text-white">
                  <h3 className="h3 italic">{project.title}</h3>
                  <p className="case-caption truncate">{project.services}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
