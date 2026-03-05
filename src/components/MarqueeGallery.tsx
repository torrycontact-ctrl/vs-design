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

const SCALE = 0.42;

export default function MarqueeGallery({
  widths,
  images,
  gap = 16,
  speed = 40,
}: MarqueeGalleryProps) {
  const rawId = useId();
  const uid = rawId.replace(/:/g, "");

  const items = useMemo(() => {
    if (images && images.length > 0) {
      return images.map((img) => ({
        img,
        w: img.width * SCALE,
        h: img.height * SCALE,
        ratio: img.width / img.height,
      }));
    }
    return (widths ?? []).map((w) => ({
      img: null as GalleryImage | null,
      w: w * SCALE,
      h: (w / 1.5) * SCALE,
      ratio: 1.5,
    }));
  }, [images, widths]);

  const totalWidth = useMemo(
    () => items.reduce((sum, { w }) => sum + w + gap, 0),
    [items, gap],
  );

  return (
    <div className="overflow-hidden">
      <div
        data-marquee={uid}
        className="flex items-end"
        style={{ gap, width: "max-content" }}
      >
        {[0, 1].map((copy) =>
          items.map(({ img, w, h, ratio }, i) => (
            <div
              key={`${copy}-${i}`}
              className={[
                "shrink-0 rounded-xl relative overflow-hidden",
                !img ? "bg-[#5a79e6]" : "",
              ].join(" ")}
              style={{ width: w, height: h, aspectRatio: ratio }}
            >
              {img && (
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              )}
            </div>
          )),
        )}
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-marquee="${uid}"] {
              animation: marquee-${uid} ${totalWidth / speed}s linear infinite;
            }
            @keyframes marquee-${uid} {
              0%   { transform: translateX(0); }
              100% { transform: translateX(-${totalWidth}px); }
            }
            @media (prefers-reduced-motion: reduce) {
              [data-marquee="${uid}"] { animation: none; }
            }
          `,
        }}
      />
    </div>
  );
}
