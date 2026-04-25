import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const SHOWCASE_ITEMS = [
  {
    title: "Cinematic Luxury",
    subtitle: "Premium Sofa Seating",
    image: "/assets/user_images/image7.jpg",
    description: "Experience films in unparalleled comfort with our signature luxury sofa arrangements."
  },
  {
    title: "Matured Functions",
    subtitle: "Elegant Event Design",
    image: "/assets/user_images/image1.jpg",
    description: "Sophisticated setups for life's most meaningful milestones and mature celebrations."
  },
  {
    title: "Themed Magic",
    subtitle: "Bespoke Decorations",
    image: "/assets/user_images/image2.jpg",
    description: "Transforming spaces into dreamscapes with custom-crafted theme designs."
  },
  {
    title: "Private Moments",
    subtitle: "Exclusive Access",
    image: "/assets/user_images/image6.jpg",
    description: "Your own private world for birthdays and anniversaries."
  },
];
const HorizontalShowcase: React.FC = () => {
  useEffect(() => {
    const items = gsap.utils.toArray(".showcase-item");
    
    items.forEach((item: any) => {
      const imgContainer = item.querySelector(".showcase-img-container");
      const img = item.querySelector(".parallax-img");
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Unique 3D Reveal
      tl.fromTo(imgContainer,
        { 
          clipPath: "inset(100% 0% 0% 0%)", 
          scale: 0.8, 
          rotateX: -20,
          transformOrigin: "bottom center"
        },
        { 
          clipPath: "inset(0% 0% 0% 0%)", 
          scale: 1, 
          rotateX: 0,
          duration: 2, 
          ease: "expo.out" 
        }
      )
      .fromTo(item.querySelector(".showcase-subtitle"),
        { opacity: 0, x: -30, filter: "blur(10px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
        "-=1.4"
      )
      .fromTo(item.querySelector(".showcase-title"),
        { opacity: 0, x: -50, filter: "blur(15px)" },
        { opacity: 1, x: 0, filter: "blur(0px)", duration: 1.2, ease: "power3.out" },
        "-=1.2"
      )
      .fromTo(item.querySelector(".showcase-desc"),
        { opacity: 0, y: 20, opacity: 0 },
        { opacity: 1, y: 0, opacity: 0.8, duration: 0.8, ease: "power3.out" },
        "-=1"
      );

      // Advanced Parallax with Depth
      if (img) {
        gsap.to(img, {
          y: 100,
          scale: 1.2,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        });
      }
    });

    // Disable right click for "Security" as requested
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  return (
    <section id="works" className="bg-bg py-24 md:py-48 border-t border-white/5 selection:bg-accent selection:text-bg [perspective:2000px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col gap-32 md:gap-64">
          {SHOWCASE_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="showcase-item group relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center will-change-transform"
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Text Side */}
              <div className={`space-y-8 md:space-y-12 ${index % 2 !== 0 ? "md:order-2" : ""}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <span className="text-accent text-[11px] font-bold uppercase tracking-[0.4em]">
                      0{index + 1} / 04
                    </span>
                    <div className="w-12 h-[1px] bg-accent/30" />
                  </div>
                  <span className="showcase-subtitle text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.6em] block">
                    {item.subtitle}
                  </span>
                  <h2 className="showcase-title text-5xl md:text-8xl lg:text-[10rem] font-display italic gold-gradient leading-[1.1] tracking-tighter pb-4">
                    {item.title}
                  </h2>
                </div>
                
                <p className="showcase-desc text-base md:text-xl lg:text-2xl font-light leading-relaxed max-w-xl opacity-80">
                  {item.description}
                </p>

                <div className="pt-2 md:pt-6">
                   <div className="w-20 h-[1px] gold-gradient opacity-30" />
                </div>
              </div>

              {/* Image Side */}
              <div className={`showcase-img-container relative aspect-square md:aspect-[3/4] rounded-[2.5rem] md:rounded-[5rem] overflow-hidden border border-white/5 shadow-2xl glass will-change-[clip-path,transform] ${index % 2 !== 0 ? "md:order-1" : ""}`}>
                <div className="parallax-img absolute inset-0 z-0 will-change-transform">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    onLoad={(e) => {
                      (e.target as HTMLImageElement).classList.add('opacity-100');
                    }}
                    className="w-full h-full object-cover scale-110 opacity-0 transition-opacity duration-1000 group-hover:scale-105" 
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                
                {/* Floating Decorative Elements */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-10 hidden sm:block">
                   <div className="glass-dark px-4 md:px-6 py-2 md:py-3 rounded-full border border-white/10 backdrop-blur-md">
                      <span className="text-[9px] md:text-[10px] text-white/60 tracking-widest uppercase font-bold">Secure Content</span>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;
