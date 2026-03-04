import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface MarqueeGalleryProps {
  images?: GalleryImage[];
  widths?: number[];
}

export default function MarqueeGallery({ images }: MarqueeGalleryProps) {
  if (!images || images.length === 0) return null;
  return (
    <div className="flex gap-4 overflow-x-auto">
      {images.map((img, i) => (
        <div key={i} className="flex-shrink-0 overflow-hidden rounded-2xl">
          <Image
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
            style={{ width: "auto", height: "320px" }}
          />
        </div>
      ))}
    </div>
  );
}
