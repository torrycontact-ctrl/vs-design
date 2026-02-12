const dotColors: Record<string, string> = {
  blue: "bg-blue-500",
  green: "bg-green-500",
  orange: "bg-orange-500",
  purple: "bg-purple-500",
  red: "bg-red-500",
};

interface ServiceTagProps {
  label: string;
  dotColor: string;
}

export default function ServiceTag({ label, dotColor }: ServiceTagProps) {
  const dotClass = dotColors[dotColor] ?? dotColor;

  return (
    <span className="inline-flex items-center gap-2 rounded-[154px] border border-[var(--color-black)] px-4 py-2 dark:border-[var(--color-white)]">
      <span className={`h-2 w-2 shrink-0 rounded-full ${dotClass}`} />
      <span className="font-sans text-base leading-6">{label}</span>
    </span>
  );
}
