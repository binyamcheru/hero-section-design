import Navbar from "@/components/navbar";
import HeroContent from "@/components/hero/hero-content";
import HeroSocialProof from "@/components/hero/hero-social-proof";
import PartnerLogos from "@/components/hero/partner-logos";
import Image from "next/image";

export default function HeroSection() {
  return (
    <>
      <Navbar />

      <section className="relative w-full pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left content section */}
          <div className="w-full max-w-xl flex flex-col items-center lg:items-start text-center lg:text-left mx-auto">
            <HeroContent />
            <HeroSocialProof />
          </div>

          {/* Right illustration */}
          <div className="w-full max-w-lg justify-center lg:justify-end mx-auto hidden lg:flex">
            <Image
              src="/images/freelancer-world.png"
              alt="Freelancer payment world map"
              width={600}
              height={350}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Partner Logos - full width visual section */}
        <div className="mt-16 w-full px-6 md:px-12">
          <PartnerLogos />
        </div>
      </section>
    </>
  );
}
