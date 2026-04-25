import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ITEMS = [
  { image: "/assets/cini-1.jpg", initialRotate: -15, side: "left" },
  { image: "/assets/cini-2.jpg", initialRotate: 10, side: "right" },
  { image: "/assets/cini-3.jpg", initialRotate: -8, side: "left" },
  { image: "/assets/cini-4.jpg", initialRotate: 12, side: "right" },
  { image: "/assets/cini-1.jpg", initialRotate: -10, side: "left" },
  { image: "/assets/cini-2.jpg", initialRotate: 8, side: "right" },
];

const Explorations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Unique Animation for each image
    itemRefs.current.forEach((item, idx) => {
      if (!item) return;
      
      const config = ITEMS[idx];
      
      // Image entrance animation
      gsap.fromTo(item,
        { 
          rotation: config.initialRotate,
          scale: 0.7,
          opacity: 0,
          filter: "blur(20px)",
        },
        {
          rotation: 0,
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "top center",
            scrub: 1.5,
          }
        }
      );

      // Parallax movement for the image container - Moving DOWN for safety
      gsap.to(item, {
        y: window.innerWidth < 768 ? 50 : 150,
        ease: "none",
        scrollTrigger: {
          trigger: item,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="relative min-h-[110vh] md:min-h-[150vh] bg-bg overflow-hidden flex flex-col items-center pt-24 pb-0 md:py-48">
      
      {/* Header */}
      <div className="relative z-20 max-w-[1400px] mx-auto px-6 text-center mb-32 md:mb-56">
        <div className="flex items-center justify-center gap-5 mb-8">
          <div className="w-16 h-[1.5px] bg-accent/30" />
          <span className="text-[11px] text-accent tracking-[0.6em] font-bold uppercase opacity-80">
            Gallery
          </span>
          <div className="w-16 h-[1.5px] bg-accent/30" />
        </div>
        <h2 className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[1.1] tracking-tighter pb-10">
          Visual <span className="gold-gradient">Journey</span>
        </h2>
      </div>

      {/* Parallax Images Column Layout */}
      <div className="relative z-0 w-full max-w-[1500px] mx-auto px-6 mt-10 mb-[10vh]">
        <div className="grid grid-cols-2 gap-10 md:gap-48 pt-20 md:pt-0">
          
          {/* Left Column */}
          <div className="flex flex-col gap-10 md:gap-[20vh] pt-10 md:pt-0">
            {ITEMS.filter(item => item.side === "left").map((item) => {
              const globalIdx = ITEMS.indexOf(item);
              return (
                <div 
                  key={globalIdx} 
                  ref={el => { itemRefs.current[globalIdx] = el; }}
                  className="group relative w-full aspect-[4/5] rounded-[3rem] md:rounded-[6rem] overflow-hidden border border-white/5 shadow-2xl glass"
                >
                  <img src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-40 transition-opacity group-hover:opacity-20" />
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-10 md:gap-[20vh] pt-[25vh]">
            {ITEMS.filter(item => item.side === "right").map((item) => {
              const globalIdx = ITEMS.indexOf(item);
              return (
                <div 
                  key={globalIdx} 
                  ref={el => { itemRefs.current[globalIdx] = el; }}
                  className="group relative w-full aspect-[4/5] rounded-[3rem] md:rounded-[7rem] overflow-hidden border border-white/5 shadow-2xl glass"
                >
                  <img src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-40 transition-opacity group-hover:opacity-20" />
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* Subtle overlay to prevent harsh cuts */}
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg pointer-events-none z-20 opacity-40" />
    </section>
  );
};

export default Explorations;
