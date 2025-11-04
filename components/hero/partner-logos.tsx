"use client";

import Image from "next/image";

const partnerLogos = [
  "/logos/assiboine.png",
  "/logos/uni.png",
  "/logos/fusion.png",
  "/logos/bayview.png",
  "/logos/desjardins.png",
];

export default function PartnerLogos() {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 mt-10 opacity-80">
      {partnerLogos.map((logo, i) => (
        <div
          key={i}
          className="transition-transform hover:scale-105 duration-300"
        >
          <Image
            src={logo}
            alt="Partner logo"
            width={120}
            height={100}
            className="object-contain grayscale hover:grayscale-0 transition-all w-20 sm:w-24 md:w-28 lg:w-36 xl:w-40 h-auto"
          />
        </div>
      ))}
    </div>
  );
}
