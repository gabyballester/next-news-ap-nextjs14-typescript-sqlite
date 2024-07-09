"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
}

export const NavLink = ({ href, children }: Props) => {
  const path = usePathname();
  return (
    <Link className={path.startsWith(href) ? "active" : undefined} href={href}>
      {children}
    </Link>
  );
};
