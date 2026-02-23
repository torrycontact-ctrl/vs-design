"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/projects";

interface ImageGalleryProps {
  images: GalleryImage[];
  autoScroll?: boolean;
  autoScrollSpeed?: number;
  pauseOnHover?: boolean;
}

export default function ImageGallery({
  images,
  autoScroll = true,
  autoScrollSpeed = 28,
  pauseOnHover = true,
}: ImageGalleryProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    const style = window.getComputedStyle(container);
    const gap = parseFloat(style.columnGap || style.gap || "0");
    const firstChild = container.querySelector<HTMLElement>("[data-gallery-item]");
    const scrollAmount = (firstChild?.offsetWidth ?? container.clientWidth) + gap;
    const delta = direction === "left" ? -scrollAmount : scrollAmount;

    container.scrollBy({ left: delta, behavior: "smooth" });
  };

  useEffect(() => {
    if (!autoScroll) return;
    const container = scrollRef.current;
    if (!container) return;

    const step = (time: number) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time;
      const delta = time - lastTimeRef.current;
      lastTimeRef.current = time;

      if (!isPaused) {
        const trackWidth = container.scrollWidth / 2;
        if (trackWidth > container.clientWidth + 1) {
          container.scrollLeft += (autoScrollSpeed * delta) / 1000;
          if (container.scrollLeft >= trackWidth) {
            container.scrollLeft -= trackWidth;
          }
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [autoScroll, autoScrollSpeed, isPaused, images.length]);

  return (
    <div className="relative">
      {/* Navigation buttons — desktop only */}
      {!autoScroll && (
        <div className="hidden lg:flex items-center gap-3 justify-end mb-6">
        <button
          type="button"
          aria-label="Scroll gallery left"
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
            <path d="M19 12H5M5 12L12 19M5 12L12 5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Scroll gallery right"
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
            <path d="M5 12H19M19 12L12 5M19 12L12 19" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        </div>
      )}

      {/* Scrollable gallery */}
      <div
        ref={scrollRef}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
        className={[
          "flex gap-4",
          autoScroll
            ? "overflow-hidden"
            : "overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide",
        ].join(" ")}
      >
        {(autoScroll ? [...images, ...images] : images).map((img, i) => (
          <div
            key={`${img.src}-${i}`}
            data-gallery-item
            className={[
              "shrink-0 overflow-hidden rounded-2xl",
              autoScroll ? "" : "snap-start",
            ].join(" ")}
            style={{ width: img.width, height: img.height }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
