"use client";

import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

interface NavLink {
  name: string;
  href: string;
}

interface MobileMenuProps {
  navLinks: NavLink[];
  pathname: string;
}

export const MobileMenu = ({ navLinks, pathname }: MobileMenuProps) => (
  <Sheet>
    <SheetTrigger asChild>
      <button aria-label="Open menu">
        <Image src="/hamburger.svg" alt="Menu" width={28} height={28} />
      </button>
    </SheetTrigger>

    <SheetContent side="left" className="bg-white/80 backdrop-blur-md w-[80%] sm:w-[60%] p-6">
      <div className="flex flex-col mt-8 space-y-6">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <SheetClose asChild key={link.name}>
              <Link
                href={link.href}
                className={`text-lg ${
                  isActive
                    ? "text-[#3D8BFF] font-semibold"
                    : "text-gray-800 hover:text-[#3D8BFF]"
                }`}
              >
                {link.name}
              </Link>
            </SheetClose>
          );
        })}
      </div>
    </SheetContent>
  </Sheet>
);
