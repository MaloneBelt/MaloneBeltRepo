"use client";

import { usePathname } from "next/navigation";

/* Suppresses layout chrome (e.g. the footer) on specific routes —
   used while /coming-soon runs as a full-bleed splash page. */
export function HideOnRoute({
  routes,
  children,
}: {
  routes: string[];
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  if (routes.includes(pathname)) {
    return null;
  }
  return <>{children}</>;
}
