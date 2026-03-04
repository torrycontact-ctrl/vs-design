import Link from "next/link";
import SiteFooter from "@/components/SiteFooter";

export default function HeroSection() {
  return (
    <section className="relative flex flex-1 flex-col overflow-x-clip">
      {/* Content grid — padding accounts for fixed 64px navbar */}
      <div className="mx-auto flex flex-1 w-full max-w-desktop px-[var(--container-padding-mobile)] lg:px-[var(--container-padding-desktop)] grid-cols-1 flex-col items-center gap-10 min-h-[calc(100vh-64px)] justify-center py-[calc(64px+24px)] lg:grid lg:grid-cols-2 lg:gap-16 lg:py-[calc(64px+70px)] lg:content-center lg:justify-start">
        {/* ── Left: Text content ──────────────────── */}
        <div className="flex flex-col lg:self-center">
          <div className="flex flex-col gap-5 lg:gap-8">
            <h1 className="hero-reveal font-serif text-[length:clamp(40px,14px+6.5vw,72px)] leading-[clamp(40px,14px+6.5vw,72px)] tracking-[var(--font-tracking-normal)] text-[var(--color-black)] dark:text-[var(--color-white)] lg:tracking-[var(--font-tracking-tight)]">
              <span className="block whitespace-nowrap">When Beauty</span>
              <span className="block whitespace-nowrap">
                Meets <em className="italic">Innovation</em>
              </span>
            </h1>

            <p className="hero-reveal hero-reveal-delay-1 p2 lg:max-w-[448px]">
              Hi, I&apos;m Victoria, a Senior Product Designer based in Europe. For
              over a decade, I&apos;ve helped companies evolve ideas into clear,
              scalable product design solutions. I specialize in defining
              product architecture, user flows, user interfaces, and design
              systems with a polished visual direction that supports
              long-term growth.
            </p>
          </div>

          <div className="hero-reveal hero-reveal-delay-2 mt-5 lg:mt-8 xl:mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/works"
              className="btn-primary flex-1 sm:flex-none sm:min-w-[185px] justify-center"
            >
              SEE MY WORKS
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M7 7H17M17 7V17M17 7L7 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      

        {/* ── Right: Video ────────────────────────── */}
        <div className="relative w-full mx-auto lg:self-center">
          <div className="overflow-hidden rounded-[16px] lg:rounded-2xl dark:ring-1 dark:ring-white/10">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/images/Home/promo.webm" type="video/webm" />
            </video>
          </div>
        </div>
      </div>
      <SiteFooter />
    </section>
  );
}
