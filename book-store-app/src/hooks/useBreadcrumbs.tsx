"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

type BreadcrumbItem = {
  title: string;
  link: string;
};

// This allows to add custom title as well
const routeMapping: Record<string, BreadcrumbItem[]> = {
  "/dashboard": [{ title: "Dashboard", link: "/dashboard/overview" }],
  "/dashboard/overview": [
    { title: "Dashboard", link: "/dashboard/overview" },
    { title: "Overview", link: "/dashboard/overview" },
  ],
  "/dashboard/book": [
    { title: "Dashboard", link: "/dashboard/overview" },
    { title: "Book", link: "/dashboard/book" },
  ],
  "/dashboard/author": [
    { title: "Dashboard", link: "/dashboard/overview" },
    { title: "Author", link: "/dashboard/author" },
  ],
  "/dashboard/user": [
    { title: "Dashboard", link: "/dashboard/overview" },
    { title: "User", link: "/dashboard/user" },
  ],
};

export function useBreadcrumbs() {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    // Check if we have a custom mapping for this exact path
    if (routeMapping[pathname]) {
      return routeMapping[pathname];
    }

    // If no exact match, fall back to generating breadcrumbs from the path
    const segments = pathname.split("/").filter(Boolean);
    return segments.map((segment, index) => {
      const path = `/${segments.slice(0, index + 1).join("/")}`;
      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1),
        link: path,
      };
    });
  }, [pathname]);

  return breadcrumbs;
}
