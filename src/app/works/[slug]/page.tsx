import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Not Found" };

  return {
    title: `${project.title} – VS Design`,
    description: project.services,
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
  const [primaryBlock, ...secondaryBlocks] = project.contentBlocks ?? [];

  return (
    <main className="project-page flex flex-1 flex-col overflow-y-auto bg-[var(--color-bg)]">
      {/* ── Hero Image + Title ─────────────────────────────────── */}
      <section className="pt-[64px]">
        {project.heroImage && (
          <div className="h-[176px] w-full md:h-[520px]">
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

        <div className="mx-auto w-full max-w-[var(--max-w-desktop)] px-6 md:px-20">
          <h1 className="hero-reveal font-serif mt-8 text-[48px] leading-[48px] md:mt-12 md:text-center md:text-[96px] md:leading-[96px] md:mx-auto md:max-w-[941px] md:tracking-[-0.8px]">
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
        <div className="mx-auto w-full max-w-[var(--max-w-desktop)] px-6 md:px-20">
          {/* ── Content Blocks ─────────────────────────────────── */}
          {primaryBlock && (
            <div key="content-primary" data-reveal className="reveal-item">
              <div className="mt-12 flex flex-col gap-4 md:mt-[80px] md:flex-row md:justify-between md:gap-8">
                <h2 className="font-serif text-[48px] leading-[48px] shrink-0 md:text-[72px] md:leading-[72px] md:tracking-[-0.8px] md:w-[484px]">{primaryBlock.heading}</h2>
                <div className="flex flex-col gap-[8px] md:w-[609px]">
                  {primaryBlock.paragraphs.map((p, j) => (
                    <p key={j} className="text-[14px] leading-[20px] md:text-[18px] md:leading-[28px] text-[var(--color-fg)]">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── Image Blocks ─────────────────────────────────────── */}
          {project.imageBlocks?.map((block, i) => {
            const fitClass = block.fit === "contain" ? "object-contain" : "object-cover";

            return (
              <div
                key={`img-${i}`}
                data-reveal
                className={`reveal-item ${i === 0 ? "mt-10 md:mt-[48px]" : "mt-6 md:mt-[24px]"}`}
              >
              {block.type === "single" && (
                <div
                  className={`relative w-full overflow-hidden rounded-3xl h-[200px] ${block.height ? "md:h-[672px]" : "md:h-[768px]"}`}
                >
                  <Image
                    src={block.images[0].src}
                    alt={block.images[0].alt}
                    fill
                    className={fitClass}
                    sizes="(max-width: 768px) 100vw, 1280px"
                  />
                </div>
              )}

              {block.type === "double" && (
                <div className="flex flex-row gap-3 md:gap-[40px]">
                  {block.images.map((img, k) => (
                    <div
                      key={k}
                      className="relative h-[160px] w-[calc(50%-6px)] overflow-hidden rounded-3xl md:h-[600px] md:w-[calc(50%-20px)]"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className={fitClass}
                        sizes="(max-width: 768px) 50vw, 620px"
                      />
                    </div>
                  ))}
                </div>
              )}

              {block.type === "beforeAfter" && block.images.length >= 2 && (
                <div
                  className="relative h-[200px] w-full overflow-hidden rounded-3xl md:h-[var(--block-h,896px)]"
                  style={
                    block.height
                      ? ({ "--block-h": `${block.height}px` } as CSSProperties)
                      : undefined
                  }
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
                <div
                  className="relative h-[200px] w-full overflow-hidden rounded-3xl md:h-[var(--block-h,896px)]"
                  style={
                    block.height
                      ? ({ "--block-h": `${block.height}px` } as CSSProperties)
                      : undefined
                  }
                >
                  <Image
                    src={block.images[0].src}
                    alt={block.images[0].alt}
                    fill
                    className={fitClass}
                    sizes="(max-width: 768px) 100vw, 1280px"
                  />
                </div>
              )}
              {i === 0 && secondaryBlocks.length > 0 && (
                <div className="mt-10 md:mt-[48px]">
                  {secondaryBlocks.map((block, idx) => (
                    <div key={`content-secondary-${idx}`} data-reveal className="reveal-item">
                      <div className="mt-12 flex flex-col gap-4 md:mt-[80px] md:flex-row md:justify-between md:gap-8">
                        <h2 className="font-serif text-[48px] leading-[48px] shrink-0 md:text-[72px] md:leading-[72px] md:tracking-[-0.8px] md:w-[484px]">{block.heading}</h2>
                        <div className="flex flex-col gap-[8px] md:w-[609px]">
                          {block.paragraphs.map((p, j) => (
                            <p key={j} className="text-[14px] leading-[20px] md:text-[18px] md:leading-[28px] text-[var(--color-fg)]">
                              {p}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              </div>
            );
          })}
        </div>
      </RevealOnScroll>

      {/* ── Results Section ──────────────────────────────────── */}
      {project.results && (
        <>
          <RevealOnScroll>
            <div className="mx-auto w-full max-w-[var(--max-w-desktop)] px-6 md:px-20 reveal-item" data-reveal>
              <div className="mt-16 md:mt-[80px]">
                <h2 className="font-serif text-[48px] leading-[48px] md:text-[72px] md:leading-[72px] md:tracking-[-0.8px]">{project.results.heading}</h2>
                <div className="mt-4 flex flex-col gap-1 md:mt-[36px] md:flex-row md:gap-[80px]">
                  {project.results.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      className="text-[14px] leading-[20px] md:text-[18px] md:leading-[28px] text-[var(--color-fg)] md:max-w-[600px] md:w-full"
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
        <section className="mt-16 bg-[var(--color-custom-butter-yellow)] px-6 pt-12 pb-6 md:mt-24 md:px-20 md:pt-[80px] md:pb-[48px] reveal-item" data-reveal>
        <div className="mx-auto w-full max-w-[var(--max-w-desktop)]">
          {/* CTA Content */}
          <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
            {/* Left: text content */}
            <div className="flex flex-col">
              <div className="flex flex-col gap-[24px]">
                <div>
                  <h2 className="font-serif text-[48px] leading-[48px] text-[var(--color-black)] md:text-[72px] md:leading-[1.2] md:tracking-[-0.8px]">
                    Ready to Make
                  </h2>
                  <h2 className="font-serif text-[48px] leading-[48px] text-[var(--color-black)] md:text-[72px] md:leading-[1.2] md:tracking-[-0.8px]">
                    Something Exciting?
                  </h2>
                </div>

                <div className="flex flex-col gap-[12px] max-w-[599px]">
                  <p className="text-[14px] leading-[20px] md:text-[20px] md:leading-[28px] text-[var(--color-black)]">
                    Have a great idea? Whether it&apos;s an app, a website, or a
                    custom interface – I can help you to bring your vision to
                    life. Simply press the button below to email me and schedule
                    a 30 min call. I can help you with a brief and product
                    design plan.
                  </p>

                  <p className="text-[14px] leading-[20px] font-medium md:text-[20px] md:leading-[28px] text-[var(--color-black)]">
                    My working hours are flexible for US timezones. Can&apos;t
                    wait to collaborate!
                  </p>
                </div>
              </div>

              <div className="mt-6 md:mt-[64px]">
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

            {/* Right: image */}
            <div className="flex justify-start md:justify-center md:block shrink-0">
              {project.heroImage ? (
                <div className="relative h-[240px] w-[240px] overflow-hidden rounded-3xl md:h-[448px] md:w-[512px]">
                  <Image
                    src={project.heroImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 240px, 512px"
                  />
                </div>
              ) : (
                <div className="h-[240px] w-[240px] rounded-3xl bg-gradient-to-b from-[#1d2644] to-[#999fcf] md:h-[448px] md:w-[512px]" />
              )}
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
                    className="link-arrow-rotate link-black inline-flex items-center gap-[16px]"
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
                © 2026. Crafted with love by Victoria Samoilenko
              </p>
            </div>
          </div>
        </div>
        </section>
      </RevealOnScroll>
    </main>
  );
}
