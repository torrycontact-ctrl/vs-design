import React from "react";

export interface PastelGradientBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function PastelGradientBackground({
  children,
  className,
  ...props
}: PastelGradientBackgroundProps) {
  const rootClassName = ["pastel-gradient-root", className]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName} {...props}>
      <div className="pastel-gradient-overlay" aria-hidden="true" />
      <div
        className="pastel-gradient-layer pastel-gradient-layer-1"
        aria-hidden="true"
      />
      <div
        className="pastel-gradient-layer pastel-gradient-layer-2"
        aria-hidden="true"
      />
      <div className="pastel-gradient-content">{children}</div>
    </div>
  );
}
