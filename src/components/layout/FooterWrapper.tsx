"use client";

import { usePathname } from "next/navigation";
import FooterSection from "@/components/sections/FooterSection";

export default function FooterWrapper() {
  const pathname = usePathname();

  if (pathname === "/works" || pathname === "/about") {
    return null;
  }

  return <FooterSection />;
}
