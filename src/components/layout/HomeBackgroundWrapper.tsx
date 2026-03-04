"use client";

import { useSyncExternalStore } from "react";
import GrainientBackground from "@/components/GrainientBackground";
import ColorBendsBackground from "@/components/ColorBendsBackground";

function subscribeDarkMode(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getDarkSnapshot() {
  return document.documentElement.classList.contains("dark");
}

interface HomeBackgroundWrapperProps {
  children: React.ReactNode;
}

export default function HomeBackgroundWrapper({
  children,
}: HomeBackgroundWrapperProps) {
  const dark = useSyncExternalStore(subscribeDarkMode, getDarkSnapshot, () => true);

  if (dark) {
    return (
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <ColorBendsBackground />
        <div className="relative flex min-h-0 flex-1 flex-col" style={{ zIndex: 1 }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
      <GrainientBackground />
      <div className="relative flex min-h-0 flex-1 flex-col" style={{ zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
}
