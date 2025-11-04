"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function HeroSocialProof() {
  return (
    <Card className="relative w-fit mx-auto lg:mx-0 mt-6 border border-white/20 bg-white/10 backdrop-blur-xl shadow-sm">
      <CardContent className="flex items-center gap-4 px-6 py-4">
        {/* Avatars */}
        <div className="flex -space-x-3">
          <Avatar className="w-10 h-10 border-2 border-white/70 shadow-sm">
            <AvatarImage src="/avatars/user1.jpg" alt="user" />
            <AvatarFallback>U1</AvatarFallback>
          </Avatar>
          <Avatar className="w-10 h-10 border-2 border-white/70 shadow-sm">
            <AvatarImage src="/avatars/user2.jpg" alt="user" />
            <AvatarFallback>U2</AvatarFallback>
          </Avatar>
          <Avatar className="w-10 h-10 border-2 border-white/70 shadow-sm">
            <AvatarImage src="/avatars/user3.jpg" alt="user" />
            <AvatarFallback>U3</AvatarFallback>
          </Avatar>
        </div>

        {/* Text */}
        <div>
          <p className="font-semibold leading-tight text-lg drop-shadow">
            10K+
          </p>
          <p className="text-sm text-gray-500">
            Trusted freelancers in 80+ countries
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
