import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const TextRibbon: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (marquee) {
      gsap.to(marquee, {
        xPercent: -50,
        repeat: -1,
        duration: 30,
        ease: "none",
      });
    }
  }, []);

  return (
    <div className="bg-accent py-6 md:py-10 overflow-hidden whitespace-nowrap relative z-20 border-y border-white/10">
      <div ref={marqueeRef} className="inline-block">
        {Array(10).fill("").map((_, i) => (
          <span key={i} className="text-2xl md:text-5xl font-display italic text-bg tracking-tighter uppercase px-12 select-none leading-none">
            Unforgettable Moments • Luxury Cinema • Bespoke Events • Premium Experience • 
          </span>
        ))}
      </div>
    </div>
  );
};

export default TextRibbon;
