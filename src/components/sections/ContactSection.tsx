"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";

/* ── Social links data ────────────────────────────────────── */
const socials = [
  { label: "X", href: "https://x.com/torrypixels" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/victoria-samoilenko/" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/vs.pixels" },
  { label: "DRIBBBLE", href: "https://dribbble.com/torrydesign" },
  { label: "BEHANCE", href: "https://www.behance.net/torrydesign" },
];

function ArrowUpRight() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M7 7H17M17 7V17M17 7L7 17"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const stackCards = [
  { src: "/images/Contact/testimonial 1.png", alt: "Testimonial 1" },
  { src: "/images/Contact/testimonial 2.png", alt: "Testimonial 2" },
  { src: "/images/Contact/testimonial 3.png", alt: "Testimonial 3" },
  { src: "/images/Contact/testimonial 4.png", alt: "Testimonial 4" },
];

/* ── Card stack constants ─────────────────────────────────── */
const SWIPE_THRESHOLD = 80;
const VISIBLE_CARDS = 4;
const CARD_OFFSET = 8;    // thin peek strips matching Figma
const CARD_SCALE_STEP = 0; // all strips same width as front card
const CARD_DIM_STEP = 0;

function CardStack() {
  const [active, setActive] = useState(0);
  const [drag, setDrag] = useState({ x: 0, y: 0 });
  const [exiting, setExiting] = useState(false);
  const dragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const didDrag = useRef(false);
  const count = stackCards.length;

  const ordered = useMemo(
    () => stackCards.map((card, i) => ({ card, index: i, pos: (i - active + count) % count })),
    [active, count],
  );

  const advance = useCallback(() => {
    if (exiting) return;
    setExiting(true);
    setTimeout(() => {
      setActive((prev) => (prev + 1) % count);
      setExiting(false);
    }, 280);
  }, [count, exiting]);

  const onPointerDown = useCallback((event: React.PointerEvent<HTMLButtonElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    dragging.current = true;
    didDrag.current = false;
    startPos.current = { x: event.clientX, y: event.clientY };
    setDrag({ x: 0, y: 0 });
  }, []);

  const onPointerMove = useCallback((event: React.PointerEvent<HTMLButtonElement>) => {
    if (!dragging.current) return;
    const dx = event.clientX - startPos.current.x;
    const dy = event.clientY - startPos.current.y;
    if (Math.hypot(dx, dy) > 3) didDrag.current = true;
    setDrag({ x: dx, y: dy });
  }, []);

  const onPointerUp = useCallback(() => {
    if (!dragging.current) return;
    dragging.current = false;
    const distance = Math.hypot(drag.x, drag.y);
    if (distance > SWIPE_THRESHOLD) {
      advance();
    }
    setDrag({ x: 0, y: 0 });
  }, [drag.x, drag.y, advance]);

  /* pt-6 reserves space above for the peeking strips */
  return (
    <div className="relative w-full pt-6">
      <div className="relative w-full aspect-8/7">
        {ordered.map(({ card, pos }) => {
          if (pos >= VISIBLE_CARDS) return null;

          const isTop = pos === 0;
          const offsetY = -(pos * CARD_OFFSET);
          const scale = 1 - pos * CARD_SCALE_STEP;
          const dim = 1 - pos * CARD_DIM_STEP;
          const zIndex = 10 - pos;

          const dragX = isTop ? drag.x : 0;
          const dragY = isTop ? drag.y : 0;
          const rotate = isTop ? drag.x * 0.06 : 0;

          const exitX = isTop && exiting ? drag.x * 4 || 300 : 0;
          const exitY = isTop && exiting ? drag.y * 4 || -100 : 0;
          const exitRotate = isTop && exiting ? (drag.x * 0.2 || 15) : 0;
          const exitOpacity = isTop && exiting ? 0 : 1;

          const transition =
            isTop && dragging.current
              ? "none"
              : "transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 280ms ease, filter 320ms ease";

          return (
            <button
              key={card.src}
              type="button"
              onClick={() => {
                if (!didDrag.current && !exiting) advance();
              }}
              onPointerDown={isTop ? onPointerDown : undefined}
              onPointerMove={isTop ? onPointerMove : undefined}
              onPointerUp={isTop ? onPointerUp : undefined}
              onPointerCancel={isTop ? onPointerUp : undefined}
              className="absolute left-0 top-0 h-full w-full cursor-pointer select-none"
              style={{
                transform: `translate(${exitX || dragX}px, ${(exitY || dragY) + offsetY}px) scale(${scale}) rotate(${exitRotate || rotate}deg)`,
                opacity: exitOpacity,
                zIndex,
                filter: `brightness(${dim})`,
                transition,
                ...(isTop ? { touchAction: "none" } : {}),
              }}
              aria-label="Shuffle cards"
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <Image
                  src={card.src}
                  alt={card.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) calc(100vw - 48px), 500px"
                  priority={pos === 0}
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function ContactSection() {
  return (
    <section className="relative flex flex-1 flex-col overflow-y-auto overflow-x-clip">
      {/* ── Content row ─────────────────────────────────────────── */}
      <div className="relative mx-auto flex w-full max-w-[var(--max-w-desktop)] flex-1 items-start px-6 pt-[119px] md:items-center md:px-20">
        <div className="flex w-full flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-20">

          {/* Left: text content */}
          <div className="flex max-w-[640px] flex-col">
            <div>
              <h1 className="hero-reveal h1 text-[48px] leading-[1.1] md:text-(--font-size-7xl) md:leading-[80px]">
                Let&apos;s Talk About
              </h1>
              <h1 className="hero-reveal h1 italic text-[48px] leading-[1.1] md:text-(--font-size-7xl) md:leading-[80px]">
                Your Product
              </h1>
            </div>

            <p className="hero-reveal hero-reveal-delay-1 p1 mt-6 max-w-[599px]">
              Whether you&apos;re launching something new or fixing a product that
              isn&apos;t &ndash; I&apos;m here to help. Here&apos;s how it usually starts: you
              send me a quick note about your project, and we jump on a 30-minute
              call. I&apos;ll come prepared with initial thoughts and a rough
              direction.
            </p>

            <p className="hero-reveal hero-reveal-delay-1 p1-bold mt-6">
              I work flexible hours that overlap with US timezones.
            </p>

            <div className="hero-reveal hero-reveal-delay-2 mt-10">
              <Link href="mailto:torry.contact@gmail.com" className="btn-primary">
                GET IN TOUCH
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M7 7H17M17 7V17M17 7L7 17"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Right: card stack — full-width on mobile, fixed 500px on desktop */}
          <div className="flex w-full flex-col gap-3 md:w-[500px] md:shrink-0 md:items-start">
            <p className="p2 text-[rgba(0,0,0,0.5)] dark:text-[rgba(255,255,255,0.5)]">
              WHAT MY CLIENTS SAY
            </p>
            <CardStack />
          </div>

        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[var(--max-w-desktop)] px-6 pb-8 md:px-20">
        <hr className="mb-6 border-t border-[color:rgba(0,0,0,0.1)] dark:border-[color:rgba(255,255,255,0.1)]" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Social links — stacked on mobile, row on desktop */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow-rotate link inline-flex items-center gap-1 text-[14px] leading-[20px]"
              >
                {s.label}
                <ArrowUpRight />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[14px] leading-[20px] text-[var(--color-gray-500)] dark:text-[var(--color-neutral-400)]">
            © 2026. Crafted with love by Victoria Samoilenko
          </p>
        </div>
      </div>
    </section>
  );
}
