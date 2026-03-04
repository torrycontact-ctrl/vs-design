import Link from "next/link";

interface ProjectMetaProps {
  client?: string;
  website?: { label: string; url: string };
  industry?: string;
  services: string;
  timeline?: string;
}

function MetaItem({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <span className="font-[family-name:var(--font-mono)] text-[14px] leading-[20px] uppercase opacity-70 text-[var(--color-fg)] md:text-[12px] md:tracking-[0.12em] md:opacity-100 md:text-[var(--color-gray-400)]">
        {label}
      </span>
      <span className="text-[16px] leading-[24px] text-[var(--color-fg)]">
        {children}
      </span>
    </div>
  );
}

export default function ProjectMeta({
  client,
  website,
  industry,
  services,
  timeline,
}: ProjectMetaProps) {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:flex-nowrap md:items-start md:justify-between md:w-full">
      <MetaItem label="Tags">
        {services.split(" • ").join(", ")}
      </MetaItem>

      {timeline && <MetaItem label="Timeline">{timeline}</MetaItem>}

      {industry && <div className="md:max-w-[400px]"><MetaItem label="Tagline">{industry}</MetaItem></div>}
    </div>
  );
}
