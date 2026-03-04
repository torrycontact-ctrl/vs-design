"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import RevealOnScroll from "@/components/RevealOnScroll";
import SiteFooter from "@/components/SiteFooter";

function shortTags(services: string) {
  return services.split("•").slice(0, 2).map((t) => t.trim().toUpperCase()).join(", ");
}

export default function WorksSection() {
  return (
    <section className="relative flex flex-col overflow-hidden">
      <RevealOnScroll>
        <div className="mx-auto w-full max-w-desktop px-[var(--container-padding-mobile)] pt-[calc(64px+24px)] lg:px-[var(--container-padding-desktop)] lg:pt-[calc(64px+70px)]">
          <div data-reveal className="hero-reveal-scroll">
            <h2 className="h2 lg:hidden">Selected Works</h2>
            <h2 className="hidden lg:block h1">Selected Works</h2>
          </div>
        </div>

        {/* Mobile: vertical stack */}
        <div
          data-reveal
          className="hero-reveal-scroll hero-reveal-delay-2 mx-auto w-full max-w-desktop mt-8 px-[var(--container-padding-mobile)] pb-16 lg:hidden"
        >
          <div className="flex flex-col gap-1.5">
            {projects.map((project, i) => (
              <Link
                key={project.slug}
                href={`/works/${project.slug}`}
                data-card
                className="stagger-card group relative h-[513px] w-full overflow-hidden rounded-[16px]"
                style={{ "--stagger-delay": `${i * 80}ms` } as React.CSSProperties}
              >
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  fill
                  className="object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-110 group-hover:blur-[2px]"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6 text-white">
                  <h3 className="h3 italic md:text-[36px] md:leading-[40px]">{project.title}</h3>
                  <p className="case-caption truncate">{shortTags(project.services)}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Desktop: auto-scrolling marquee */}
        <div
          data-reveal
          className="hero-reveal-scroll hero-reveal-delay-2 hidden lg:block mt-12 pb-24"
        >
          <div className="works-marquee">
            <div className="works-marquee-track">
              {[...projects, ...projects].map((project, i) => (
                <Link
                  key={`${project.slug}-${i}`}
                  href={`/works/${project.slug}`}
                  className="group relative h-[616px] w-[400px] flex-shrink-0 overflow-hidden rounded-[16px]"
                >
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover transition-[transform,filter] duration-500 ease-out group-hover:scale-110 group-hover:blur-[2px]"
                    sizes="400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6 text-white">
                    <h3 className="h3 italic md:text-[36px] md:leading-[40px]">{project.title}</h3>
                    <p className="case-caption truncate">{shortTags(project.services)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </RevealOnScroll>
      <SiteFooter />
    </section>
  );
}
