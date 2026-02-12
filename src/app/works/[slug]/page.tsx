import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import type { Metadata } from "next";
import ProjectMeta from "@/components/ProjectMeta";
import ImageGallery from "@/components/ImageGallery";

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

  return (
    <main className="flex flex-1 flex-col overflow-y-auto bg-[var(--color-bg)]">
      {/* ── Hero Image + Title ─────────────────────────────────── */}
      <section className="pt-[64px]">
        {project.heroImage && (
          <div className="relative h-[176px] w-full overflow-hidden md:h-[520px]">
            <Image
              src={project.heroImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        )}

        <div className="mx-auto w-full max-w-[var(--max-w-desktop)] px-6 md:px-20">
          <h1 className="font-serif mt-8 text-[48px] leading-[48px] md:mt-12 md:text-center md:text-[96px] md:leading-[96px] md:mx-auto md:max-w-[941px] md:tracking-[-0.8px]">
            {project.title}
          </h1>

          {/* ── Metadata Row ─────────────────────────────────── */}
          <div className="mt-9 md:mt-8">
            <ProjectMeta
              client={project.client}
              website={project.website}
              industry={project.industry}
              services={project.services}
              timeline={project.timeline}
            />
          </div>

          {/* ── Divider ────────────────────────────────────────── */}
          <hr className="mt-8 border-[var(--color-border)] md:mt-[36px]" />
        </div>
      </section>

      <div className="mx-auto w-full max-w-[var(--max-w-desktop)] px-6 md:px-20">
        {/* ── Content Blocks ─────────────────────────────────── */}
        {project.contentBlocks?.map((block, i) => (
          <div key={`content-${i}`}>
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

        {/* ── Image Blocks ─────────────────────────────────────── */}
        {project.imageBlocks?.map((block, i) => (
          <div
            key={`img-${i}`}
            className={i === 0 ? "mt-10 md:mt-[48px]" : "mt-6 md:mt-[24px]"}
          >
            {block.type === "single" && (
              <div
                className={`relative w-full overflow-hidden rounded-3xl h-[200px] ${block.height ? "md:h-[672px]" : "md:h-[768px]"}`}
              >
                <Image
                  src={block.images[0].src}
                  alt={block.images[0].alt}
                  fill
                  className="object-cover"
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
                      className="object-cover"
                      sizes="(max-width: 768px) 50vw, 620px"
                    />
                  </div>
                ))}
              </div>
            )}

            {block.type === "full" && (
              <div className="relative h-[200px] w-full overflow-hidden rounded-3xl md:h-[896px]">
                <Image
                  src={block.images[0].src}
                  alt={block.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1280px"
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── Horizontal Gallery ───────────────────────────────── */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <div className="mt-16 px-6 md:mt-24 md:px-20">
          <ImageGallery images={project.galleryImages} />
        </div>
      )}

      {/* ── Results Section ──────────────────────────────────── */}
      {project.results && (
        <>
          <div className="mx-auto w-full max-w-[var(--max-w-desktop)] px-6 md:px-20">
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

          {/* Results gallery */}
          {project.results && project.resultsGalleryImages && (
            <div className="mt-10 px-6 md:mt-[48px] md:px-20">
              <ImageGallery images={project.resultsGalleryImages} />
            </div>
          )}
          {project.results && !project.resultsGalleryImages && (
            <div className="mt-10 md:mt-[48px] pl-6 md:pl-20">
              <div className="flex gap-[16px] overflow-x-auto scroll-smooth scrollbar-hide h-[160px] md:h-[600px]">
                {resultsGalleryWidths.map((w, i) => (
                  <div
                    key={i}
                    className="shrink-0 rounded-3xl bg-[#5a79e6] h-full"
                    style={{ width: w }}
                  />
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* ── CTA + Footer Section ───────────────────────────────── */}
      <section className="mt-16 bg-[var(--color-custom-butter-yellow)] px-6 pt-12 pb-6 md:mt-24 md:px-20 md:pt-[80px] md:pb-[48px]">
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
                  href="mailto:hello@vsdesign.com"
                  className="btn-primary"
                >
                  get in touch
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
                  { label: "X", href: "https://x.com/torrypixels" },
                  { label: "LINKEDIN", href: "https://www.linkedin.com/in/victoria-samoilenko/" },
                  { label: "INSTAGRAM", href: "https://www.instagram.com/vs.pixels" },
                  { label: "DRIBBBLE", href: "https://dribbble.com/torrydesign" },
                  { label: "BEHANCE", href: "https://www.behance.net/torrydesign" },
                ].map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-black inline-flex items-center gap-[16px]"
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
                © 2025. Crafted with love by Victoria Samoilenko
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
