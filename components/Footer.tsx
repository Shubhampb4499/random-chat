"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  // Chat page वर footer दाखवू नको
  if (pathname === "/chat") {
    return null;
  }

  return null;
}