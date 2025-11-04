"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./mobile-menu";
import { NavLinks } from "./nav-links";
import { NavButton } from "./nav-button";

export const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Pricing", href: "/pricing" },
    { name: "For Freelancers", href: "/freelancers" },
    { name: "Resources", href: "/resources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/30 backdrop-blur-xl border-b border-white/20">
      <nav className="flex items-center justify-between mx-auto py-3 px-4 sm:px-6 lg:px-8 max-w-[95%]">
        {/* Left: Mobile menu + Logo */}
        <div className="flex items-center space-x-3">
          <div className="md:hidden">
            <MobileMenu navLinks={navLinks} pathname={pathname} />
          </div>

          <Link href="/" className="hidden lg:flex items-center">
            <Image
              src="/images/logo.png"
              alt="NovaPay Logo"
              width={65}
              height={44}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Center: Desktop Links */}
        <NavLinks navLinks={navLinks} pathname={pathname} />

        {/* Right: Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <NavButton href="/login" variant="ghost">
            Login
          </NavButton>
          <NavButton href="/get-started" variant="primary" icon>
            Get Started
          </NavButton>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
