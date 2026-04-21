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
  const quoteRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Pinning the center quote
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      pin: quoteRef.current,
      pinSpacing: false,
    });

    // Fade in/out logic for the quote
    gsap.fromTo(quoteRef.current,
      { opacity: 0, scale: 0.9, y: 50, filter: "blur(20px)" },
      {
        opacity: 1, scale: 1, y: 0, filter: "blur(0px)",
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 40%",
          end: "top 10%",
          scrub: 1.5,
        }
      }
    );

    // Fade out quote at the end
    gsap.to(quoteRef.current, {
      opacity: 0,
      y: -100,
      scale: 0.9,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: 1,
      }
    });

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

      // Parallax movement for the image container
      gsap.to(item, {
        y: -200,
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
    <section ref={containerRef} className="relative min-h-[100vh] bg-bg overflow-hidden flex flex-col items-center py-24">
      
      {/* Central Floating Quote - Pinned */}
      <div 
        ref={quoteRef} 
        className="fixed top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center max-w-5xl px-10 pointer-events-none"
      >
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="w-12 h-[1px] gold-gradient" />
          <span className="text-[11px] text-accent tracking-[0.6em] font-bold uppercase opacity-80">
            Visionary Experience
          </span>
          <div className="w-12 h-[1px] gold-gradient" />
        </div>
        <h2 className="text-4xl md:text-8xl lg:text-9xl font-display italic text-text-primary leading-[0.85] tracking-tighter">
          "Where every <span className="gold-gradient">moment</span> becomes a <span className="text-white/20">cinematic</span> masterpiece."
        </h2>
      </div>

      {/* Parallax Images Column Layout */}
      <div className="relative z-0 w-full max-w-[1500px] mx-auto px-6 mt-[-100px] mb-[10vh]">
        <div className="grid grid-cols-2 gap-10 md:gap-48">
          
          {/* Left Column */}
          <div className="flex flex-col gap-10 md:gap-[20vh] pt-0">
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
