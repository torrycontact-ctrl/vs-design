"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useMemo, useRef, useState } from "react";
import SiteFooter from "@/components/SiteFooter";


const stackCards = [
  { src: "/images/Contact/1.png", alt: "Testimonial 1" },
  { src: "/images/Contact/2.png", alt: "Testimonial 2" },
  { src: "/images/Contact/3.png", alt: "Testimonial 3" },
  { src: "/images/Contact/4.png", alt: "Testimonial 4" },
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
      <div className="relative w-full aspect-[25/18] md:aspect-auto md:h-[288px]">
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
                  className="object-contain"
                  sizes="(max-width: 768px) calc(100vw - 48px), 400px"
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
      <div className="relative mx-auto flex w-full max-w-desktop flex-1 items-start px-6 pt-[119px] md:items-center md:px-20 lg:px-[var(--container-padding-desktop)]">
        <div className="flex w-full flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-20">

          {/* Left: text content */}
          <div className="flex max-w-[640px] flex-col">
            <div>
              <h1 className="hero-reveal font-serif text-[length:clamp(40px,14px+6.5vw,72px)] leading-[clamp(40px,14px+6.5vw,72px)] tracking-[var(--font-tracking-normal)] text-[var(--color-black)] dark:text-[var(--color-white)] lg:tracking-[var(--font-tracking-tight)]">
                Let&apos;s Talk About
              </h1>
              <h1 className="hero-reveal font-serif italic text-[length:clamp(40px,14px+6.5vw,72px)] leading-[clamp(40px,14px+6.5vw,72px)] tracking-[var(--font-tracking-normal)] text-[var(--color-black)] dark:text-[var(--color-white)] lg:tracking-[var(--font-tracking-tight)]">
                Your Product
              </h1>
            </div>

            <p className="hero-reveal hero-reveal-delay-1 p2 mt-6 max-w-[599px]">
              Whether you&apos;re launching something new or improving an existing
              product, I&apos;m here to help. It usually starts with a short message
              about your project, followed by a 30-minute call to define
              direction.
            </p>

            <p className="hero-reveal hero-reveal-delay-1 p2-bold mt-6">
              I work flexible hours that overlap with US time zones.
            </p>

            <div className="hero-reveal hero-reveal-delay-2 mt-10">
              <Link
                href="mailto:torry.contact@gmail.com"
                className="btn-primary"
              >
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
          <div className="flex w-full flex-col gap-6 md:w-[400px] md:shrink-0 md:items-start">
            <p className="font-[family-name:var(--font-mono)] text-[12px] leading-[20px] tracking-[0.08em] text-[rgba(0,0,0,0.5)] dark:text-[rgba(255,255,255,0.5)]">
              WHAT MY CLIENTS SAY
            </p>
            <div className="w-3/4 md:w-full">
              <CardStack />
            </div>
          </div>

        </div>
      </div>

      <SiteFooter />
    </section>
  );
}
