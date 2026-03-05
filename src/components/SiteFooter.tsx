import Link from "next/link";

const socials = [
  { label: "CALENDLY", href: "https://calendly.com/torry-contact/30min" },
  { label: "LINKEDIN", href: "https://www.linkedin.com/in/victoria-samoilenko/" },
  { label: "INSTAGRAM", href: "https://www.instagram.com/vs.pixels" },
  { label: "DRIBBBLE", href: "https://dribbble.com/torrydesign" },
  { label: "BEHANCE", href: "https://www.behance.net/torrydesign" },
  { label: "X", href: "https://x.com/torrypixels" },
];

function ArrowUpRight() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M7 7H17M17 7V17M17 7L7 17" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <div className="mx-auto w-full max-w-desktop px-6 pb-8 md:px-20 lg:px-[var(--container-padding-desktop)]">
      <hr className="mb-6 border-t border-[color:rgba(0,0,0,0.1)] dark:border-[color:rgba(255,255,255,0.1)]" />
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
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
        <p className="text-[14px] leading-[20px] text-[var(--color-gray-500)] dark:text-[var(--color-neutral-400)]">
          © 2026. Victoria Samoilenko
        </p>
      </div>
    </div>
  );
}
