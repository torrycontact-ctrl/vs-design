import Link from "next/link";

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

export default function ContactSection() {
  return (
    <section className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      {/* ── Hero + Image row ───────────────────────────────────── */}
      <div className="relative mx-auto flex w-full max-w-[var(--max-w-desktop)] flex-1 items-start px-6 pt-[119px] md:items-center md:px-20">
        <div className="flex w-full flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-20">
          {/* Left: text content */}
          <div className="flex max-w-[640px] flex-col">
            <div>
              <h1 className="h1 text-[48px] leading-[1.1] md:text-[var(--font-size-7xl)] md:leading-[80px]">Ready to Make</h1>
              <h1 className="h1 text-[48px] leading-[1.1] text-[var(--color-gray-400)] md:text-[var(--font-size-7xl)] md:leading-[80px]">
                Something Exciting?
              </h1>
            </div>

            <p className="p1 mt-6 max-w-[599px]">
              Have a great idea? Whether it&apos;s an app, a website, or a
              custom interface – I can help you to bring your vision to life.
              Simply press the button below to email me and schedule a 30 min
              call. I can help you with a brief and product design plan.
            </p>

            <p className="p1-bold mt-6">
              My working hours are flexible for US timezones. Can&apos;t wait to
              collaborate!
            </p>

            <div className="mt-10">
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

          {/* Right: decorative gradient */}
          <div className="flex justify-center md:block">
            <div className="h-[280px] w-[320px] rounded-3xl bg-gradient-to-b from-[#1d2644] to-[#999fcf] md:h-[448px] md:w-[512px]" />
          </div>
        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <div className="mx-auto w-full max-w-[var(--max-w-desktop)] px-6 pb-8 md:px-20">
        <hr className="mb-6 border-t border-[color:rgba(0,0,0,0.1)] dark:border-[color:rgba(255,255,255,0.1)]" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Social links */}
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-8">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link inline-flex items-center gap-1 text-[14px] leading-[20px]"
              >
                {s.label}
                <ArrowUpRight />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[14px] leading-[20px] text-[var(--color-gray-500)] dark:text-[var(--color-neutral-400)]">
            © 2025. Crafted with love by Victoria Samoilenko
          </p>
        </div>
      </div>
    </section>
  );
}
