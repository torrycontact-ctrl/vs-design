"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";

/* ── Shared external-store helpers ─────────────────────────────── */
function subscribeDarkMode(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

function getDarkSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getDarkServerSnapshot() {
  return false;
}

const noopSubscribe = () => () => {};
const getMountedSnapshot = () => true;
const getMountedServerSnapshot = () => false;

/* ── Logo icon — exact SVG from Figma (40×40) ────────────────── */
function LogoIcon() {
  const dark = useSyncExternalStore(subscribeDarkMode, getDarkSnapshot, getDarkServerSnapshot);
  const logoColor = dark ? "#fff" : "#000";

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="no-transition"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M28.0964 36.3171C29.0087 34.9261 29.3948 33.0679 29.0493 31.7305C28.7476 30.5626 27.9525 29.4012 27.4179 27.8458C26.5401 25.292 26.6979 21.8841 27.323 21.256C28.215 20.3598 28.6466 22.2831 28.419 24.3094C28.2547 25.7712 28.2349 26.3029 28.3076 27.3009C28.4245 28.9076 28.8713 29.7481 29.9501 30.3907C31.2304 31.1533 32.6209 30.9937 34.1064 29.9138C34.7645 29.4355 36.0836 28.1704 36.4579 27.6586C36.8066 27.1819 37.3397 26.421 37.5911 26.0606C37.6728 25.9436 37.6589 25.785 37.5588 25.6835L35.5747 23.6727L34.0114 22.1175C33.8863 21.993 33.6812 22.0059 33.5721 22.1448C33.3715 22.4002 33.0882 22.7581 33.0359 22.8097C32.8146 23.028 32.4751 23.1875 32.1104 23.1394C31.3637 23.0408 31.2664 22.4128 31.4422 21.2935C31.5459 20.6334 31.5175 20.0883 31.356 19.6398C31.2247 19.275 31.094 19.1252 30.8439 18.8614C29.9954 17.9664 28.3047 18.1154 27.7394 18.327C26.5205 18.7833 24.6163 21.0473 24.6395 23.618C24.6465 24.3951 25.5983 28.1569 24.9202 29.9903C24.6243 30.7904 24.2247 31.5055 23.8213 31.8764C23.5236 32.1501 22.4432 32.799 21.8974 33.1202C21.7337 33.2166 21.7008 33.4406 21.83 33.5801L23.8319 35.741L25.9326 37.8304C26.0265 37.9237 26.1704 37.9429 26.2834 37.8742C26.5577 37.7074 27.0634 37.3855 27.3809 37.0965C27.6863 36.8185 28.0163 36.4392 28.0964 36.3171Z" fill="#DA2777"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12.0478 3.68026C11.1355 5.07133 10.7494 6.92946 11.0949 8.26686C11.3966 9.43475 12.1917 10.5962 12.7263 12.1516C13.6042 14.7054 13.4463 18.1133 12.8212 18.7414C11.9292 19.6376 11.4976 17.7143 11.7253 15.688C11.8895 14.2262 11.9093 13.6944 11.8367 12.6965C11.7198 11.0898 11.2729 10.2493 10.1941 9.6067C8.91383 8.84414 7.52337 9.00366 6.03784 10.0836C5.37972 10.5619 4.06059 11.827 3.6863 12.3388C3.33761 12.8154 2.80456 13.5764 2.5531 13.9368C2.47143 14.0538 2.48531 14.2124 2.58547 14.3139L4.56956 16.3247L6.13279 17.8799C6.25794 18.0044 6.46306 17.9915 6.57217 17.8526C6.77274 17.5972 7.05601 17.2393 7.10834 17.1877C7.3296 16.9694 7.66911 16.8099 8.0338 16.858C8.78051 16.9566 8.87784 17.5845 8.70202 18.7039C8.59832 19.364 8.62673 19.909 8.7882 20.3576C8.91949 20.7224 9.05022 20.8722 9.30035 21.136C10.1488 22.031 11.8395 21.882 12.4049 21.6704C13.6238 21.2141 15.528 18.9501 15.5047 16.3794C15.4977 15.6023 14.546 11.8405 15.224 10.0071C15.5199 9.20701 15.9195 8.49189 16.3229 8.12099C16.6206 7.84728 17.701 7.19843 18.2469 6.87716C18.4105 6.78084 18.4434 6.55683 18.3142 6.41734L16.3123 4.2564L14.2116 2.16703C14.1177 2.07364 13.9738 2.05446 13.8608 2.12319C13.5866 2.28996 13.0808 2.61188 12.7633 2.9009C12.4579 3.1789 12.1279 3.55816 12.0478 3.68026Z" fill="#DA2777"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M35.3159 12.5096C33.9317 11.5927 32.0829 11.2048 30.7521 11.552C29.59 11.8552 28.4344 12.6542 26.8867 13.1916C24.3456 14.0738 20.9547 13.9151 20.3297 13.2869C19.438 12.3904 21.3517 11.9566 23.3679 12.1855C24.8225 12.3506 25.3515 12.3704 26.3445 12.2974C27.9432 12.1799 28.7795 11.7308 29.4189 10.6466C30.1777 9.35997 30.019 7.96256 28.9445 6.4696C28.4684 5.80818 27.2097 4.48246 26.7005 4.1063C26.2262 3.75586 25.469 3.22015 25.1104 2.96743C24.9939 2.88535 24.8362 2.8993 24.7352 2.99996L22.7344 4.99397L21.1869 6.56502C21.063 6.6908 21.0758 6.89694 21.2141 7.0066C21.4682 7.20818 21.8243 7.49286 21.8756 7.54545C22.0929 7.76782 22.2516 8.10903 22.2037 8.47554C22.1057 9.22599 21.4808 9.32381 20.367 9.1471C19.7102 9.04288 19.1679 9.07144 18.7215 9.23372C18.3585 9.36566 18.2095 9.49705 17.947 9.74843C17.0564 10.6012 17.2047 12.3003 17.4153 12.8685C17.8693 14.0935 20.1221 16.0072 22.6799 15.9838C23.4532 15.9768 27.1962 15.0203 29.0205 15.7017C29.8166 15.9991 30.5282 16.4007 30.8973 16.8061C31.1696 17.1053 31.8152 18.1911 32.1349 18.7397C32.2307 18.9041 32.4536 18.9373 32.5924 18.8074L34.7426 16.7955L36.8216 14.6842C36.9145 14.5899 36.9336 14.4453 36.8652 14.3317C36.6993 14.0561 36.3789 13.5478 36.0914 13.2287C35.8147 12.9218 35.4374 12.5901 35.3159 12.5096Z" fill={logoColor}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.09028 27.3834C5.47442 28.3003 7.3233 28.6883 8.65405 28.3411C9.81612 28.0379 10.9718 27.2388 12.5195 26.7015C15.0606 25.8193 18.4515 25.9779 19.0764 26.6061C19.9682 27.5026 18.0544 27.9364 16.0383 27.7076C14.5837 27.5425 14.0546 27.5226 13.0617 27.5956C11.463 27.7131 10.6267 28.1622 9.98722 29.2464C9.22845 30.5331 9.38718 31.9305 10.4617 33.4234C10.9377 34.0849 12.1965 35.4106 12.7057 35.7868C13.18 36.1372 13.9372 36.6729 14.2958 36.9256C14.4122 37.0077 14.57 36.9938 14.671 36.8931L16.6717 34.8991L18.2192 33.328C18.3431 33.2023 18.3303 32.9961 18.1921 32.8864C17.938 32.6849 17.5819 32.4002 17.5305 32.3476C17.3132 32.1252 17.1546 31.784 17.2024 31.4175C17.3005 30.6671 17.9254 30.5692 19.0392 30.7459C19.6959 30.8502 20.2383 30.8216 20.6847 30.6593C21.0476 30.5274 21.1966 30.396 21.4592 30.1446C22.3497 29.2919 22.2014 27.5928 21.9908 27.0246C21.5369 25.7996 19.2841 23.8859 16.7262 23.9092C15.953 23.9163 12.2099 24.8728 10.3856 24.1913C9.58952 23.8939 8.87796 23.4923 8.5089 23.0869C8.23656 22.7877 7.59094 21.7019 7.27127 21.1534C7.17542 20.9889 6.95253 20.9558 6.81373 21.0857L4.66355 23.0976L2.58458 25.2088C2.49165 25.3032 2.47256 25.4478 2.54095 25.5614C2.7069 25.837 3.02721 26.3453 3.31479 26.6644C3.59141 26.9713 3.96879 27.3029 4.09028 27.3834Z" fill={logoColor}/>
    </svg>
  );
}

/* ── Main nav links ──────────────────────────────────────────── */
const NAV_LINKS = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/* ── Dark-mode toggle (moon/sun pill) ────────────────────────── */
function ThemeToggle() {
  const mounted = useSyncExternalStore(noopSubscribe, getMountedSnapshot, getMountedServerSnapshot);
  const dark = useSyncExternalStore(subscribeDarkMode, getDarkSnapshot, getDarkServerSnapshot);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark =
      stored === "dark" ||
      (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  if (!mounted) return <div className="h-7 w-[52px]" />;

  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`relative flex h-7 w-[52px] items-center rounded-full transition-colors ${
        dark ? "bg-white" : "bg-black"
      }`}
    >
      {/* Black circle (always left) with moon icon */}
      <span className="absolute left-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-black z-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M13.9903 8.32394C13.9278 9.48137 13.5314 10.5959 12.849 11.5329C12.1666 12.4698 11.2274 13.1891 10.145 13.6036C9.06254 14.0182 7.88319 14.1104 6.74948 13.869C5.61578 13.6276 4.57627 13.063 3.75661 12.2434C2.93695 11.4238 2.37223 10.3844 2.13071 9.25068C1.8892 8.117 1.98123 6.93764 2.39569 5.85515C2.81014 4.77266 3.52927 3.8334 4.46615 3.1509C5.40303 2.4684 6.51754 2.07188 7.67497 2.00927C7.94497 1.99461 8.0863 2.31594 7.94297 2.54461C7.46356 3.31164 7.25828 4.21852 7.36063 5.11724C7.46298 6.01596 7.86692 6.85346 8.50652 7.49306C9.14612 8.13266 9.98361 8.53659 10.8823 8.63894C11.7811 8.74129 12.6879 8.53601 13.455 8.05661C13.6843 7.91327 14.005 8.05394 13.9903 8.32394Z" stroke="white" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
      {/* White circle (right, light mode only) with sun icon on top */}
      <span className={`absolute right-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-opacity duration-200 ${
        dark ? "opacity-0" : "opacity-100"
      }`} />
      {/* Sun icon (always right) */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="absolute right-[6px] z-10">
        <path d="M8 2V2.66667M8 13.3333V14M2 8H2.66667M13.3333 8H14M12.2427 3.75733L11.7713 4.22867M4.22867 11.7713L3.75733 12.2427M3.75733 3.75733L4.22867 4.22867M11.7713 11.7713L12.2427 12.2427M10.6667 8C10.6667 9.47276 9.47276 10.6667 8 10.6667C6.52724 10.6667 5.33333 9.47276 5.33333 8C5.33333 6.52724 6.52724 5.33333 8 5.33333C9.47276 5.33333 10.6667 6.52724 10.6667 8Z" stroke="black" strokeWidth="0.666667" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isProjectPage = /^\/works\/[^/]+$/.test(pathname);

  const subscribeScroll = useCallback(
    (callback: () => void) => {
      if (!isProjectPage) return () => {};
      const scrollContainer = document.querySelector("main");
      if (!scrollContainer) return () => {};
      scrollContainer.addEventListener("scroll", callback, { passive: true });
      return () => scrollContainer.removeEventListener("scroll", callback);
    },
    [isProjectPage],
  );

  const getScrollSnapshot = useCallback(() => {
    if (!isProjectPage) return false;
    const el = document.querySelector("main");
    return el ? el.scrollTop > 10 : false;
  }, [isProjectPage]);

  const scrolled = useSyncExternalStore(subscribeScroll, getScrollSnapshot, () => false);

  const headerBg = isProjectPage && scrolled
    ? "bg-white dark:bg-black transition-colors duration-200"
    : "";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${headerBg}`}>
      <nav className="mx-auto flex h-16 max-w-[var(--max-w-desktop)] items-center justify-between px-[var(--container-padding-mobile)] lg:px-[var(--container-padding-desktop)]">
        {/* ── Logo ────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3">
          <LogoIcon />
          <span className="link-black">
            VS DESIGN
          </span>
        </Link>

        {/* ── Desktop links (centered) ────────────── */}
        <ul className="hidden lg:flex items-center gap-16">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="link-black transition-opacity hover:opacity-60"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Desktop right side: toggle + EMAIL ─── */}
        <div className="hidden lg:flex items-center gap-5">
          <ThemeToggle />
          <Link
            href="mailto:torry.contact@gmail.com"
            className="link-black flex items-center gap-1.5 transition-opacity hover:opacity-60"
          >
            Email
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M5.83301 5.83337H14.1663M14.1663 5.83337V14.1667M14.1663 5.83337L5.83301 14.1667" stroke="currentColor" strokeWidth="0.833333" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* ── Mobile hamburger / close ───────────── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="relative z-[60] flex h-10 w-10 items-center justify-center lg:hidden"
        >
          {menuOpen ? (
            <X size={24} strokeWidth={1.5} />
          ) : (
            <Menu size={24} strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* ── Mobile menu overlay ───────────────────── */}
      <MobileMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  );
}
