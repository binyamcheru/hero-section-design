"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  icon?: boolean;
}

export const NavButton = ({
  href,
  children,
  variant = "primary",
  icon = false,
}: NavButtonProps) => {
  const baseStyles =
    "rounded-full px-4 py-2 text-xs md:text-sm transition-all font-medium";

  const variants = {
    primary: "bg-[#3D8BFF] hover:bg-[#3D8BFF]/90 text-white",
    ghost:
      "bg-transparent text-[#3D8BFF] border border-[#3D8BFF] hover:bg-[#3D8BFF]/10",
  };

  return (
    <Link href={href} className={cn(baseStyles, variants[variant])}>
      {children}
      {icon && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="ml-1 inline"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      )}
    </Link>
  );
};
