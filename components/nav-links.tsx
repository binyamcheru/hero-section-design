"use client";

import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

interface NavLinksProps {
  navLinks: NavLink[];
  pathname: string;
}

export const NavLinks = ({ navLinks, pathname }: NavLinksProps) => (
  <ul className="hidden md:flex items-center font-medium md:space-x-5 lg:space-x-8 text-[14px] lg:text-[15px]">
    {navLinks.map((link) => {
      const isActive = pathname === link.href;
      return (
        <li key={link.name}>
          <Link
            href={link.href}
            className={`transition-colors ${
              isActive
                ? "text-[#3D8BFF] font-semibold"
                : "text-black hover:text-[#3D8BFF]"
            }`}
          >
            {link.name}
          </Link>
        </li>
      );
    })}
  </ul>
);
