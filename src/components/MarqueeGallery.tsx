"use client";

import { useMemo, useId } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/projects";

interface MarqueeGalleryProps {
  widths?: number[];
  images?: GalleryImage[];
  gap?: number;
  speed?: number;
}

export default function MarqueeGallery({
  widths,
  images,
  gap = 16,
  speed = 40,
}: MarqueeGalleryProps) {
  const rawId = useId();
  const uid = rawId.replace(/:/g, "");

  const itemWidths = useMemo(
    () => (images && images.length > 0 ? images.map((img) => img.width) : widths ?? []),
    [images, widths],
  );

  const totalWidth = useMemo(
    () => itemWidths.reduce((sum, w) => sum + w + gap, 0),
    [itemWidths, gap],
  );

  const duration = totalWidth / speed;

  return (
    <div className="overflow-hidden">
      <div
        data-marquee={uid}
        className="flex"
        style={{ gap, width: "max-content" }}
      >
        {[0, 1].map((copy) =>
          itemWidths.map((w, i) => {
            const img = images?.[i];
            return (
              <div
                key={`${copy}-${i}`}
                className={[
                  "shrink-0 rounded-3xl h-[160px] md:h-[600px]",
                  img ? "relative overflow-hidden" : "bg-[#5a79e6]",
                ].join(" ")}
                style={{ width: w }}
              >
                {img && (
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80vw, 600px"
                  />
                )}
              </div>
            );
          }),
        )}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-marquee="${uid}"] {
              animation: marquee-${uid} ${duration}s linear infinite;
            }
            @keyframes marquee-${uid} {
              0% { transform: translateX(0); }
              100% { transform: translateX(-${totalWidth}px); }
            }
          `,
        }}
      />
    </div>
  );
}
