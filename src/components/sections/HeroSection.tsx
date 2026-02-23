import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex flex-1 flex-col overflow-x-clip px-[var(--container-padding-mobile)] lg:px-[var(--container-padding-desktop)]">
      {/* Content grid — padding accounts for fixed 64px navbar */}
      <div className="mx-auto flex flex-1 max-w-[var(--max-w-desktop)] grid-cols-1 flex-col items-center gap-10 min-h-[calc(100vh-64px)] justify-center py-[calc(64px+24px)] lg:grid lg:grid-cols-2 lg:gap-16 lg:py-[calc(64px+70px)] lg:content-center lg:justify-start">
        {/* ── Left: Text content ──────────────────── */}
        <div className="flex flex-col lg:self-center">
          <div className="flex flex-col gap-5 lg:gap-8">
            <h1 className="hero-reveal font-serif text-[length:clamp(48px,18.47px+7.57vw,96px)] leading-[clamp(48px,18.47px+7.57vw,96px)] tracking-[var(--font-tracking-normal)] text-[var(--color-black)] dark:text-[var(--color-white)] lg:tracking-[var(--font-tracking-tight)]">
              When Beauty<br />
              Meets <em className="italic">Innovation</em>
            </h1>

            <p className="hero-reveal hero-reveal-delay-1 text-[length:var(--font-size-sm)] leading-[var(--font-leading-5)] lg:text-[length:var(--font-size-xl)] lg:leading-[var(--font-leading-7)] lg:max-w-[555px]">
              I&apos;m Victoria &mdash; a Senior Product Designer helping AI and
              SaaS startups move from concept to scalable product fast. I
              turn early-stage chaos into structured UX, intuitive
              interfaces, and design systems that support growth. From first
              wireframe to dev-ready UI, I design with clarity, speed, and
              long-term scalability in mind.
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
            <Link
              href="https://calendly.com/torry-contact/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex-1 sm:flex-none sm:min-w-[185px] justify-center"
            >
              BOOK A CALL
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
              <source src="/videos/showreel.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
