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
      <span className="text-[14px] leading-[20px] uppercase opacity-70 text-[var(--color-fg)] md:text-[12px] md:tracking-[0.12em] md:opacity-100 md:text-[var(--color-gray-400)]">
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
    <div className="flex flex-col gap-6 md:flex-row md:flex-nowrap md:items-start md:gap-[96px]">
      {client && <MetaItem label="Client">{client}</MetaItem>}

      {website && (
        <MetaItem label="Website">
          <Link
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-opacity hover:opacity-60"
          >
            <span className="font-medium">{website.label}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
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
        </MetaItem>
      )}

      {industry && <MetaItem label="Industry">{industry}</MetaItem>}

      <MetaItem label="Services">
        {services}
      </MetaItem>

      {timeline && <MetaItem label="Timeline">{timeline}</MetaItem>}
    </div>
  );
}
