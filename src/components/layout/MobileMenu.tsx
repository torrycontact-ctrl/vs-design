"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
}

/* ── Shared external-store helpers ─────────────────────────────── */
function subscribeDarkMode(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getDarkSnapshot() {
  return document.documentElement.classList.contains("dark");
}

const getDarkServerSnapshot = () => false;
const noopSubscribe = () => () => {};
const getMountedSnapshot = () => true;
const getMountedServerSnapshot = () => false;

/* ── Theme toggle (larger version for mobile menu: 80×40) ──── */
function MobileThemeToggle() {
  const mounted = useSyncExternalStore(noopSubscribe, getMountedSnapshot, getMountedServerSnapshot);
  const dark = useSyncExternalStore(subscribeDarkMode, getDarkSnapshot, getDarkServerSnapshot);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return <div className="h-10 w-[80px]" />;

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-10 w-[80px] items-center rounded-[70px] transition-colors ${
        dark ? "bg-white" : "bg-black"
      }`}
    >
      {/* Black circle (left) with moon */}
      <span className="absolute left-[3.5px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-black z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 16 16" fill="none">
          <path d="M13.9903 8.32394C13.9278 9.48137 13.5314 10.5959 12.849 11.5329C12.1666 12.4698 11.2274 13.1891 10.145 13.6036C9.06254 14.0182 7.88319 14.1104 6.74948 13.869C5.61578 13.6276 4.57627 13.063 3.75661 12.2434C2.93695 11.4238 2.37223 10.3844 2.13071 9.25068C1.8892 8.117 1.98123 6.93764 2.39569 5.85515C2.81014 4.77266 3.52927 3.8334 4.46615 3.1509C5.40303 2.4684 6.51754 2.07188 7.67497 2.00927C7.94497 1.99461 8.0863 2.31594 7.94297 2.54461C7.46356 3.31164 7.25828 4.21852 7.36063 5.11724C7.46298 6.01596 7.86692 6.85346 8.50652 7.49306C9.14612 8.13266 9.98361 8.53659 10.8823 8.63894C11.7811 8.74129 12.6879 8.53601 13.455 8.05661C13.6843 7.91327 14.005 8.05394 13.9903 8.32394Z" stroke="white" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      {/* White circle (right, light mode only) */}
      <span className={`absolute right-[3.5px] flex h-[34px] w-[34px] items-center justify-center rounded-full bg-white transition-opacity duration-200 ${
        dark ? "opacity-0" : "opacity-100"
      }`} />
      {/* Sun icon (always right) */}
      <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 16 16" fill="none" className="absolute right-[12px] z-10">
        <path d="M8 2V2.66667M8 13.3333V14M2 8H2.66667M13.3333 8H14M12.2427 3.75733L11.7713 4.22867M4.22867 11.7713L3.75733 12.2427M3.75733 3.75733L4.22867 4.22867M11.7713 11.7713L12.2427 12.2427M10.6667 8C10.6667 9.47276 9.47276 10.6667 8 10.6667C6.52724 10.6667 5.33333 9.47276 5.33333 8C5.33333 6.52724 6.52724 5.33333 8 5.33333C9.47276 5.33333 10.6667 6.52724 10.6667 8Z" stroke="black" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

export default function MobileMenu({
  isOpen,
  onClose,
  links,
}: MobileMenuProps) {
  /* Lock body scroll when open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-50 backdrop-blur-[32px] bg-white/12 transition-all duration-500 no-color-transition lg:hidden ${
        isOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
      style={{ height: "471px" }}
    >
      {/* Spacer for navbar height */}
      <div className="h-16" />

      {/* Nav links + Email + Toggle — centered */}
      <nav className="flex flex-col items-center px-[var(--container-padding-mobile)] pt-12">
        {/* Nav links */}
        <div className="flex flex-col items-center gap-10">
          {links.map(({ href, label }, i) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={`link-black text-center transition-all duration-500 ${
                isOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${(i + 1) * 80}ms` }}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Email + Toggle */}
        <div
          className={`flex flex-col items-center gap-9 mt-14 transition-all duration-500 ${
            isOpen
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
          }`}
          style={{ transitionDelay: "320ms" }}
        >
          {/* EMAIL ↗ */}
          <Link
            href="mailto:torry.contact@gmail.com"
            onClick={onClose}
            className="link-black flex items-center gap-1"
          >
            EMAIL
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5.83301 5.83337H14.1663M14.1663 5.83337V14.1667M14.1663 5.83337L5.83301 14.1667" stroke="currentColor" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          {/* Theme toggle (80×40) */}
          <MobileThemeToggle />
        </div>
      </nav>
    </div>
  );
}
