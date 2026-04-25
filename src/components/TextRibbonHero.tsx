import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const TextRibbonHero: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      gsap.to(marquee, {
        xPercent: -50,
        repeat: -1,
        duration: 40,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="bg-bg py-4 md:py-6 overflow-hidden whitespace-nowrap relative z-20 border-y border-white/5 opacity-40">
      <div ref={marqueeRef} className="inline-block">
        {Array(10).fill("").map((_, i) => (
          <span key={i} className="text-xl md:text-3xl font-display italic text-text-primary tracking-[0.2em] uppercase px-16 select-none leading-none">
            Raichur's Finest Private Cinema • Bespoke Luxury Decor • Exclusive Milestone Celebrations • 
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextRibbonHero;
