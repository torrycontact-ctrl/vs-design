export default function FooterSection() {
  return (
    <footer className="mt-auto bg-transparent px-[var(--container-padding-mobile)] mb-6 pt-4 lg:px-[var(--container-padding-desktop)]">
      <div className="mx-auto flex max-w-[var(--max-w-desktop)] flex-col items-center gap-4 lg:flex-row lg:justify-between">
        {/* Availability status badge */}
        <div className="flex h-9 items-center justify-center gap-2 rounded-[6px] bg-[var(--color-gray-50)] px-3 dark:bg-[var(--color-neutral-800)]">
          <span className="relative flex h-[5px] w-[5px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-emerald-500)] opacity-75" />
            <span className="relative inline-flex h-[5px] w-[5px] rounded-full bg-[var(--color-emerald-500)]" />
          </span>
          <span className="text-[14px] leading-[20px] text-[var(--color-gray-700)] dark:text-[var(--color-neutral-300)]">
            Open for New Projects
          </span>
          <span className="w-px h-3 bg-[var(--color-gray-500)] dark:bg-[var(--color-neutral-600)]" />
          <span className="text-[14px] leading-[20px] text-[var(--color-gray-700)] dark:text-[var(--color-neutral-300)]">
            GMT (+01:00)
          </span>
        </div>

        {/* Copyright */}
        <p className="text-[14px] leading-[20px] text-[var(--color-gray-500)] dark:text-[var(--color-neutral-400)]">
          © 2025. Crafted with love by Victoria Samoilenko
        </p>
      </div>
    </footer>
  );
}
