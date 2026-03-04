import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt?: string;
  afterAlt?: string;
  fit?: string;
  className?: string;
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt = "Before", afterAlt = "After", className }: BeforeAfterSliderProps) {
  return (
    <div className={`relative flex ${className ?? ""}`}>
      <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
      <Image src={afterSrc} alt={afterAlt} fill className="object-cover opacity-0 hover:opacity-100 transition-opacity duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  );
}
