import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-1 flex-col overflow-hidden px-[var(--container-padding-mobile)] lg:px-[var(--container-padding-desktop)]">
      {/* Content grid — pt accounts for fixed 64px navbar */}
      <div className="mx-auto flex flex-1 max-w-[var(--max-w-desktop)] grid-cols-1 flex-col items-center gap-10 pt-[calc(64px+24px)] lg:grid lg:grid-cols-2 lg:gap-16 lg:pt-[calc(64px+70px)]">
        {/* ── Left: Text content ──────────────────── */}
        <div className="flex flex-col gap-5 lg:gap-8 lg:self-center">
          <h1 className="font-serif text-[length:clamp(48px,18.47px+7.57vw,96px)] leading-[clamp(48px,18.47px+7.57vw,96px)] tracking-[var(--font-tracking-normal)] text-[var(--color-black)] dark:text-[var(--color-white)] lg:tracking-[var(--font-tracking-tight)]">
            When Beauty<br />
            Meets <em className="italic">Innovation</em>
          </h1>

          <p className="text-[length:var(--font-size-sm)] leading-[var(--font-leading-5)] lg:text-[length:var(--font-size-xl)] lg:leading-[var(--font-leading-7)] lg:max-w-[555px]">
            I&apos;m Victoria, a senior product designer with 9+ years of
            experience, based in Kraków, Poland. I work with startups and
            growing teams to turn complex ideas into clear, usable, and
            thoughtfully designed, future-ready web and mobile products.
          </p>

         <div>
            <Link
              href="/works"
              className="btn-primary group w-[200px] lg:w-auto"
            >
              My Works
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="transition-colors duration-200">
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
              <source src="/videos/showreel.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
