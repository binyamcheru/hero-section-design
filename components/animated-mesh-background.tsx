"use client";

import { useEffect } from "react";

export default function AnimatedMeshBackground() {
  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>(".interactive");
    if (!interBubble) return;

    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    const move = () => {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(curX)}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(move);
    };

    window.addEventListener("mousemove", (e) => {
      tgX = e.clientX;
      tgY = e.clientY;
    });

    move();
    return () => window.removeEventListener("mousemove", () => {});
  }, []);

  return (
    <div className="gradient-bg absolute inset-0 -z-10 overflow-hidden">
      {/* SVG Filter */}
      <svg className="absolute w-0 h-0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  
                    0 1 0 0 0  
                    0 0 1 0 0  
                    0 0 0 20 -10"
            result="goo"
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      {/* Gradient circles */}
      <div className="gradients-container w-full min-h-full filter-[url(#goo)] blur-2xl">
        <div className="g1"></div>
        <div className="g2"></div>
        <div className="g3"></div>
        <div className="g4"></div>
        <div className="g5"></div>
        <div className="interactive"></div>
      </div>
    </div>
  );
}
