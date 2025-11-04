"use client";

import { Button } from "@/components/ui/button";

export default function HeroContent() {
  return (
    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
      {/* Badge */}
      <div className="bg-blue-100/70 text-blue-700 text-sm font-medium rounded-full px-4 py-1 w-fit">
        Trusted by 10K+ freelancers worldwide — instant credibility.
      </div>

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
        Freelancer payments made{" "}
        <span className="text-[#3D8BFF]">effortless.</span>
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 text-base md:text-lg max-w-md">
        Send and receive payments globally — fast, secure, and with zero hidden
        fees.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
        <Button className="flex items-center justify-center bg-[#3D8BFF] hover:bg-[#3D8BFF]/90 text-white rounded-full px-8 py-5 text-base font-medium transition-all duration-300">
          <span>Get Paid Instantly</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>

        <Button
          variant="outline"
          className="border-[#3D8BFF] text-[#3D8BFF] hover:bg-[#3D8BFF]/10 rounded-full px-6 py-5 text-base"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}
