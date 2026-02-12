"use client";

import { useRef } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/projects";

interface ImageGalleryProps {
  images: GalleryImage[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

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

  return (
    <div className="relative">
      {/* Navigation buttons — desktop only */}
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

      {/* Scrollable gallery */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
      >
        {images.map((img, i) => (
          <div
            key={i}
            data-gallery-item
            className="shrink-0 snap-start overflow-hidden rounded-2xl"
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
