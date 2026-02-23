"use client";

import { useRef, useState, useCallback, useMemo } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  className?: string;
  fit?: "cover" | "contain";
}

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = "Before",
  afterAlt = "After",
  className = "",
  fit = "cover",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.min(100, Math.max(0, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      e.preventDefault();
      setIsDragging(true);
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      updatePosition(e.clientX);
    },
    [updatePosition],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging) return;
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition],
  );

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Blur intensity: 0 at center, max at edges
  const MAX_BLUR = 12; // px
  const blurAmount = useMemo(() => {
    const offset = Math.abs(position - 50) / 50; // 0..1
    return offset * MAX_BLUR;
  }, [position]);

  // Which side gets blurred: the one that's shrinking
  // position < 50 → before is shrinking → blur before side
  // position > 50 → after is shrinking → blur after side
  const blurBefore = position < 50 ? blurAmount : 0;
  const blurAfter = position > 50 ? blurAmount : 0;

  // Keyboard support
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setPosition((p) => Math.max(0, p - 2));
    } else if (e.key === "ArrowRight") {
      setPosition((p) => Math.min(100, p + 2));
    }
  }, []);

  const fitClass = fit === "contain" ? "object-contain" : "object-cover";

  return (
    <div
      ref={containerRef}
      className={`before-after-slider relative select-none overflow-hidden rounded-3xl ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
    >
      {/* After image (full, behind) */}
      <Image
        src={afterSrc}
        alt={afterAlt}
        fill
        className={`${fitClass} pointer-events-none`}
        sizes="(max-width: 768px) 100vw, 1280px"
        priority
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image
          src={beforeSrc}
          alt={beforeAlt}
          fill
          className={`${fitClass} pointer-events-none`}
          sizes="(max-width: 768px) 100vw, 1280px"
          priority
        />
      </div>

      {/* Blur on before side — covers from left edge to handle, fades from handle toward left */}
      {blurBefore > 0 && (
        <div
          className="absolute inset-y-0 left-0 z-[5] pointer-events-none"
          style={{
            width: `${position}%`,
            backdropFilter: `blur(${blurBefore}px)`,
            WebkitBackdropFilter: `blur(${blurBefore}px)`,
            maskImage: `linear-gradient(to right, black ${Math.max(0, 100 - (position / 50) * 100)}%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to right, black ${Math.max(0, 100 - (position / 50) * 100)}%, transparent 100%)`,
          }}
        />
      )}

      {/* Blur on after side — covers from handle to right edge, fades from handle toward right */}
      {blurAfter > 0 && (
        <div
          className="absolute inset-y-0 right-0 z-[5] pointer-events-none"
          style={{
            width: `${100 - position}%`,
            backdropFilter: `blur(${blurAfter}px)`,
            WebkitBackdropFilter: `blur(${blurAfter}px)`,
            maskImage: `linear-gradient(to left, black ${Math.max(0, 100 - ((100 - position) / 50) * 100)}%, transparent 100%)`,
            WebkitMaskImage: `linear-gradient(to left, black ${Math.max(0, 100 - ((100 - position) / 50) * 100)}%, transparent 100%)`,
          }}
        />
      )}

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-10"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >

        {/* Visible line */}
        <div className="absolute inset-y-0 -left-[1px] w-[2px] bg-white/90" />

        {/* Handle — centered on the line */}
        <div
          className="absolute top-1/2 flex items-center justify-center w-[48px] h-[48px] rounded-full bg-white shadow-[0_2px_12px_rgba(0,0,0,0.25)] transition-transform duration-150"
          style={{ left: "0px", transform: `translate(-50%, -50%) scale(${isDragging ? 1.1 : 1})` }}
        >
          {/* Arrow icons */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H16M8 12L10.5 9.5M8 12L10.5 14.5M16 12L13.5 9.5M16 12L13.5 14.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-10 rounded-full bg-black/50 px-3 py-1 text-[12px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
        Before
      </div>
      <div className="absolute top-4 right-4 z-10 rounded-full bg-black/50 px-3 py-1 text-[12px] font-medium uppercase tracking-wider text-white backdrop-blur-sm">
        After
      </div>
    </div>
  );
}
