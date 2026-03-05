import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import ProjectMeta from "@/components/ProjectMeta";
import BlobImageReveal from "@/components/BlobImageReveal";
import RevealOnScroll from "@/components/RevealOnScroll";
import MarqueeGallery from "@/components/MarqueeGallery";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";

type Props = {
  params: Promise<{ slug: string }>;
};

const slugMeta: Record<string, { title: string; description: string; og: string }> = {
  astoria: {
    title: "Astoria Health — AI Clinic Platform",
    description: "Case study: Designing a role-based AI clinic platform with three dashboards for front desk, nurse, and doctor workflows. Healthcare UX with AI voice transcription.",
    og: "/og/og-astoria.jpg",
  },
  teams: {
    title: "Teams — SaaS CRM Redesign",
    description: "Case study: Redesigning a SaaS CRM platform from feature chaos to system-level clarity. 243 components, full design system, 6-month engagement.",
    og: "/og/og-teams.jpg",
  },
  qoria: {
    title: "Qoria — Dance Competition App",
    description: "Case study: Building a gamified dance competition app with structured voting mechanics, monetization flows, and community engagement loops.",
    og: "/og/og-qoria.jpg",
  },
  recordless: {
    title: "Recordless — AI Music Player",
    description: "Case study: Designing an AI-powered music player that adapts to mood and activity. Mobile app UX with invisible AI and intuitive dark-mode interface.",
    og: "/og/og-recordless.jpg",
  },
  invamia: {
    title: "Invamia — Ad Platform Redesign",
    description: "Case study: Redesigning an ad publishing platform for media owners. Dashboard UX, design system, and responsive design. 65% increase in user success rate.",
    og: "/og/og-invamia.jpg",
  },
  ibnb: {
    title: "iBNB — DeFi Finance App",
    description: "Case study: Designing a DeFi finance app for daily dividend collection. Mobile, web, and dashboard redesign with clear financial UX.",
    og: "/og/og-ibnb.jpg",
  },
  vidverto: {
    title: "Vidverto — Ad-Tech Platform & Branding",
    description: "Case study: Redesigning an enterprise ad-tech platform and building the brand identity. Website, pitch decks, social assets. 97% PageSpeed score.",
    og: "/og/og-vidverto.jpg",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };

  const meta = slugMeta[slug];
  const title = meta?.title ?? `${project.title} — Product Design Case Study`;
  const description = meta?.description ?? project.services;
  const ogImage = meta?.og ?? "/og/og-home.jpg";
  const url = `https://torry.design/works/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | Victoria Samoilenko`,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
  };
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();
  const resultsGalleryWidths = project.resultsGalleryWidths ?? [512, 576, 320, 384, 512, 576];
  const contentBlocks = project.contentBlocks ?? [];

  return (
    <main className="project-page flex flex-1 flex-col overflow-y-auto bg-[var(--color-bg)] dark:bg-black">
      {/* ── Hero Image + Title ─────────────────────────────────── */}
      <section className="pt-[64px]">
        {project.heroImage && (
          <div className="w-full aspect-[9/4]">
            <BlobImageReveal
              src={project.heroImage}
              alt={project.title}
              priority
              className="h-full w-full"
              trigger="mount"
              duration={4.5}
              delay={0.15}
            />
          </div>
        )}

        <div className="mx-auto w-full max-w-desktop px-6 md:px-20 lg:px-[var(--container-padding-desktop)]">
          <h1 className="hero-reveal font-serif mt-8 text-[48px] leading-[48px] md:mt-12 md:text-center md:text-[72px] md:leading-[72px] md:mx-auto md:max-w-[941px] md:tracking-[-0.8px]">
            {project.title}
          </h1>

          {/* ── Metadata Row ─────────────────────────────────── */}
          <div className="hero-reveal mt-9 md:mt-8" style={{ animationDelay: "900ms" }}>
            <ProjectMeta
              client={project.client}
              website={project.website}
              industry={project.industry}
              services={project.services}
              timeline={project.timeline}
            />
          </div>

          {/* ── Divider ────────────────────────────────────────── */}
          <hr className="hero-reveal mt-8 border-[var(--color-border)] md:mt-[36px]" style={{ animationDelay: "1050ms" }} />
        </div>
      </section>

      <RevealOnScroll>
        <div className="mx-auto w-full max-w-desktop px-6 md:px-20 lg:px-[var(--container-padding-desktop)]">
          {/* ── Content blocks interleaved with image blocks ────── */}
          {(() => {
            const imageBlocks = project.imageBlocks ?? [];
            const maxLen = Math.max(contentBlocks.length, imageBlocks.length);
            const items = [];

            for (let i = 0; i < maxLen; i++) {
              const contentBlock = contentBlocks[i];
              const block = imageBlocks[i];

              // Text block first
              if (contentBlock) {
                items.push(
                  <div key={`content-${i}`} data-reveal className="reveal-item">
                    <div className="mt-12 flex flex-col gap-4 md:mt-[80px] md:flex-row md:justify-between md:gap-8">
                      <h2 className="font-serif text-[48px] leading-[48px] shrink-0 md:text-[48px] md:leading-[48px] md:tracking-[-0.8px] md:max-w-[384px]">{contentBlock.heading}</h2>
                      <div className="flex flex-col gap-[8px] md:max-w-[484px]">
                        {contentBlock.paragraphs.map((p, j) => (
                          <p key={j} className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] text-[var(--color-fg)]">
                            {p}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              // Image block after text
              if (block) {
items.push(
                  <div
                    key={`img-${i}`}
                    data-reveal
                    className="reveal-item mt-10 md:mt-[48px]"
                  >
                    {block.type === "single" && (
                      <div className="w-full overflow-hidden rounded-xl">
                        <Image
                          src={block.images[0].src}
                          alt={block.images[0].alt}
                          width={block.images[0].width}
                          height={block.images[0].height}
                          style={{ width: "100%", height: "auto" }}
                          sizes="(max-width: 768px) 100vw, 1280px"
                        />
                      </div>
                    )}

                    {block.type === "double" && (
                      <div className="flex flex-col gap-3 md:flex-row md:gap-[16px]">
                        {block.images.map((img, k) => (
                          <div
                            key={k}
                            className="w-full overflow-hidden rounded-xl md:w-[calc(50%-8px)]"
                          >
                            <Image
                              src={img.src}
                              alt={img.alt}
                              width={img.width}
                              height={img.height}
                              style={{ width: "100%", height: "auto" }}
                              sizes="(max-width: 768px) 100vw, 620px"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    {block.type === "beforeAfter" && block.images.length >= 2 && (
                      <div
                        className="relative w-full overflow-hidden rounded-xl"
                        style={{ aspectRatio: `${block.images[0].width} / ${block.images[0].height}` }}
                      >
                        <BeforeAfterSlider
                          beforeSrc={block.images[0].src}
                          afterSrc={block.images[1].src}
                          beforeAlt={block.images[0].alt}
                          afterAlt={block.images[1].alt}
                          fit={block.fit}
                          className="h-full w-full"
                        />
                      </div>
                    )}

                    {block.type === "full" && (
                      <div className="w-full overflow-hidden rounded-xl">
                        <Image
                          src={block.images[0].src}
                          alt={block.images[0].alt}
                          width={block.images[0].width}
                          height={block.images[0].height}
                          style={{ width: "100%", height: "auto" }}
                          sizes="(max-width: 768px) 100vw, 1280px"
                        />
                      </div>
                    )}
                  </div>
                );
              }
            }

            return items;
          })()}
        </div>
      </RevealOnScroll>

      {/* ── Results Section ──────────────────────────────────── */}
      {project.results && (
        <>
          <RevealOnScroll>
            <div className="mx-auto w-full max-w-desktop px-6 md:px-20 lg:px-[var(--container-padding-desktop)] reveal-item" data-reveal>
              <div className="mt-12 flex flex-col gap-4 md:mt-[80px] md:flex-row md:justify-between md:gap-8">
                <h2 className="font-serif text-[48px] leading-[48px] shrink-0 md:text-[48px] md:leading-[48px] md:tracking-[-0.8px] md:max-w-[384px]">{project.results.heading}</h2>
                <div className="flex flex-col gap-[8px] md:max-w-[484px]">
                  {project.results.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-[14px] leading-[20px] md:text-[16px] md:leading-[24px] text-[var(--color-fg)]"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* ── Single Gallery (prefer resultsGalleryImages) ──── */}
          {project.results && project.resultsGalleryImages && (
            <RevealOnScroll>
              <div className="mt-10 md:mt-[48px] reveal-item" data-reveal>
                <MarqueeGallery images={project.resultsGalleryImages} />
              </div>
            </RevealOnScroll>
          )}
          {project.results && !project.resultsGalleryImages && project.galleryImages && project.galleryImages.length > 0 && (
            <RevealOnScroll>
              <div className="mt-10 md:mt-[48px] reveal-item" data-reveal>
                <MarqueeGallery images={project.galleryImages} />
              </div>
            </RevealOnScroll>
          )}
          {project.results && !project.resultsGalleryImages && (!project.galleryImages || project.galleryImages.length === 0) && (
            <RevealOnScroll>
              <div className="mt-10 md:mt-[48px] reveal-item" data-reveal>
                <MarqueeGallery widths={resultsGalleryWidths} />
              </div>
            </RevealOnScroll>
          )}
        </>
      )}

      {/* ── CTA + Footer Section ───────────────────────────────── */}
      <RevealOnScroll>
        <section className="mt-16 bg-[var(--color-custom-butter-yellow)] px-6 pt-12 pb-6 md:mt-24 md:px-20 lg:px-[var(--container-padding-desktop)] md:pt-[80px] md:pb-[48px] reveal-item" data-reveal>
        <div className="mx-auto w-full max-w-desktop">
          {/* CTA Content */}
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            {/* Left: text content */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-[24px]">
                <div>
                  <h2 className="font-serif text-[48px] leading-[48px] text-[var(--color-black)] md:text-[48px] md:leading-[1.2] md:tracking-[-0.8px]">
                    Let&rsquo;s Talk About
                  </h2>
                  <h2 className="font-serif text-[48px] leading-[48px] text-[var(--color-black)] md:text-[48px] md:leading-[1.2] md:tracking-[-0.8px]">
                    Your Product
                  </h2>
                </div>

                <div className="flex flex-col gap-[12px] md:max-w-[448px]">
                  <p className="p2 text-[var(--color-black)] dark:!text-[var(--color-black)]">
                    Whether you&apos;re launching something new or improving an
                    existing product, I&apos;m here to help. It usually starts with
                    a short message about your project, followed by a 30-minute
                    call to define direction.
                  </p>

                  <p className="p2-bold text-[var(--color-black)]">
                    I work flexible hours that overlap with US time zones.
                  </p>
                </div>
              </div>

              <div className="mt-6 md:mt-[64px]">
                <Link
                  href="mailto:torry.contact@gmail.com"
                  className="btn-primary dark:!bg-black dark:!text-white dark:hover:!bg-black dark:hover:!text-white"
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

            {/* Right: video */}
            <div className="flex justify-start md:justify-center md:block shrink-0">
              <div className="relative h-[240px] w-[240px] overflow-hidden rounded-3xl md:h-[448px] md:w-[512px]">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="/images/Work/ready/works.webm" type="video/webm" />
                </video>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-16 md:mt-[48px] flex flex-col gap-[40px]">
            <hr className="border-[var(--color-black)] opacity-20" />
            <div className="flex flex-col gap-9 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-6 items-center md:flex-row md:gap-[24px]">
                {[
                  { label: "CALENDLY", href: "https://calendly.com/torry-contact/30min" },
                  { label: "LINKEDIN", href: "https://www.linkedin.com/in/victoria-samoilenko/" },
                  { label: "INSTAGRAM", href: "https://www.instagram.com/vs.pixels" },
                  { label: "DRIBBBLE", href: "https://dribbble.com/torrydesign" },
                  { label: "BEHANCE", href: "https://www.behance.net/torrydesign" },
                  { label: "X", href: "https://x.com/torrypixels" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow-rotate link-black inline-flex items-center gap-[16px] dark:!text-[var(--color-black)]"
                  >
                    {s.label}
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
                ))}
              </div>
              <p className="text-[14px] leading-[20px] text-[var(--color-gray-700)]">
                © 2026. Victoria Samoilenko
              </p>
            </div>
          </div>
        </div>
        </section>
      </RevealOnScroll>
    </main>
  );
}
