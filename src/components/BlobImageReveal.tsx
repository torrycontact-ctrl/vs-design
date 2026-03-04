import Image from "next/image";

interface BlobImageRevealProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  trigger?: string;
  duration?: number;
  delay?: number;
}

export default function BlobImageReveal({ src, alt, priority, className }: BlobImageRevealProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={`object-cover ${className ?? ""}`}
      sizes="100vw"
    />
  );
}
