import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AnimatedMeshBackground from "@/components/animated-mesh-background"; // 👈 import your mesh background

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NovaPay | Seamless Payment Solutions",
  description:
    "Empowering freelancers and businesses with modern, secure, and efficient payment solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative min-h-screen overflow-x-hidden antialiased`}
      >
        {/* Background behind everything */}
        <AnimatedMeshBackground />

        {/* All content above background */}
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
