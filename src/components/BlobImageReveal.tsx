"use client";

import Image from "next/image";
import {
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { seededRandom } from "@/utils/seededRandom";

interface BlobImageRevealProps {
  src: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  blobCount?: number;
  seed?: number;
  duration?: number;
  delay?: number;
  trigger?: "mount" | "inView";
  replay?: boolean;
}

const clamp = (v: number, min: number, max: number) =>
  Math.min(max, Math.max(min, v));

const cornerDist = (x: number, y: number, w: number, h: number) =>
  Math.max(
    Math.hypot(x, y),
    Math.hypot(x - w, y),
    Math.hypot(x, y - h),
    Math.hypot(x - w, y - h),
  );

export default function BlobImageReveal({
  src,
  alt = "",
  className,
  priority = false,
  blobCount = 6,
  seed = 1,
  duration = 3,
  delay = 0,
  trigger = "inView",
  replay = false,
}: BlobImageRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [play, setPlay] = useState(trigger === "mount");
  const hasPlayedRef = useRef(trigger === "mount");

  const safeCount = clamp(blobCount, 1, 12);
  const rawId = useId();
  const uid = rawId.replace(/:/g, "");
  const maskId = `bm-${uid}`;
  const filterId = `bf-${uid}`;

  // ── Measure container ──────────────────────────────────────
  useEffect(() => {
    const node = wrapperRef.current;
    if (!node) return;

    const measure = () => {
      const r = node.getBoundingClientRect();
      setSize({ w: r.width, h: r.height });
    };
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(node);
    return () => ro.disconnect();
  }, []);

  // ── IntersectionObserver ───────────────────────────────────
  useEffect(() => {
    if (trigger === "mount") return;
    const node = wrapperRef.current;
    if (!node) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!hasPlayedRef.current || replay) {
            setPlay(true);
            hasPlayedRef.current = true;
          }
        } else if (replay && entry.intersectionRatio === 0) {
          setPlay(false);
          hasPlayedRef.current = false;
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );

    io.observe(node);
    return () => io.disconnect();
  }, [replay, trigger]);

  // ── Seed-based blob geometry ───────────────────────────────
  const blobs = useMemo(() => {
    if (!size.w || !size.h) return [];
    const rand = seededRandom(seed);
    const cx = size.w / 2;
    const cy = size.h / 2;

    return Array.from({ length: safeCount }, () => {
      const rawX = rand() * size.w;
      const rawY = rand() * size.h;
      const pull = 0.35 + rand() * 0.45;
      const endX = clamp(
        rawX + (cx - rawX) * pull + (rand() - 0.5) * size.w * 0.2,
        0,
        size.w,
      );
      const endY = clamp(
        rawY + (cy - rawY) * pull + (rand() - 0.5) * size.h * 0.2,
        0,
        size.h,
      );
      const endR = cornerDist(endX, endY, size.w, size.h) * (1.05 + rand() * 0.35);
      const stagger = rand() * 0.25;

      return { startX: rawX, startY: rawY, endX, endY, endR, stagger };
    });
  }, [seed, safeCount, size.w, size.h]);

  const ready = size.w > 0 && size.h > 0;
  const active = play && ready;
  const vw = Math.max(size.w, 1);
  const vh = Math.max(size.h, 1);

  return (
    <div
      ref={wrapperRef}
      data-blob-scope={uid}
      className={["relative overflow-hidden", className].filter(Boolean).join(" ")}
    >
      {/* Masked image layer */}
      <div
        className="absolute inset-0"
        style={{
          WebkitMaskImage: `url(#${maskId})`,
          maskImage: `url(#${maskId})`,
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskPosition: "0 0",
          maskPosition: "0 0",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* SVG mask with goo filter */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox={`0 0 ${vw} ${vh}`}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -10"
              result="goo"
            />
          </filter>

          <mask
            id={maskId}
            x="0"
            y="0"
            width={vw}
            height={vh}
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse"
          >
            <rect width={vw} height={vh} fill="black" />
            <g filter={`url(#${filterId})`} fill="white">
              {blobs.map((b, i) => (
                <circle
                  key={i}
                  cx="0"
                  cy="0"
                  r={b.endR}
                  className={active ? "blob-circle-animate" : "blob-circle-hidden"}
                  style={
                    {
                      "--sx": `${b.startX}px`,
                      "--sy": `${b.startY}px`,
                      "--ex": `${b.endX}px`,
                      "--ey": `${b.endY}px`,
                      "--d": `${active ? duration : 0}s`,
                      "--t": `${active ? delay + b.stagger : 0}s`,
                    } as CSSProperties
                  }
                />
              ))}
            </g>
          </mask>
        </defs>
      </svg>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-blob-scope="${uid}"] .blob-circle-hidden {
              transform: translate(var(--sx), var(--sy)) scale(0);
            }
            [data-blob-scope="${uid}"] .blob-circle-animate {
              transform: translate(var(--sx), var(--sy)) scale(0);
              animation: blob-grow-${uid} var(--d) cubic-bezier(0.16, 1, 0.3, 1) var(--t) forwards;
            }
            @keyframes blob-grow-${uid} {
              0% { transform: translate(var(--sx), var(--sy)) scale(0); }
              100% { transform: translate(var(--ex), var(--ey)) scale(1); }
            }
            @media (prefers-reduced-motion: reduce) {
              [data-blob-scope="${uid}"] .blob-circle-animate {
                animation: none !important;
                transform: translate(var(--ex), var(--ey)) scale(1);
              }
            }
          `,
        }}
      />
    </div>
  );
}
