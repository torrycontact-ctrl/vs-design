"use client";

import { usePathname } from "next/navigation";
import { useSyncExternalStore } from "react";
import PastelGradientBackground from "@/components/ui/PastelGradientBackground";

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
  const pathname = usePathname();
  const dark = useSyncExternalStore(subscribeDarkMode, getDarkSnapshot, () => true);

  if (pathname !== "/") {
    return <>{children}</>;
  }

  if (dark) {
    return (
      <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          style={{ zIndex: 0 }}
          autoPlay
          loop
          muted
          playsInline
        >
          {/* .mov served as mp4 first (H.264 container), then quicktime fallback */}
          <source src="/images/Home/bg.mov" type="video/mp4" />
          <source src="/images/Home/bg.mov" type="video/quicktime" />
        </video>
        <div className="relative flex min-h-0 flex-1 flex-col" style={{ zIndex: 1 }}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <PastelGradientBackground className="flex min-h-0 flex-1 flex-col">
      {children}
    </PastelGradientBackground>
  );
}
