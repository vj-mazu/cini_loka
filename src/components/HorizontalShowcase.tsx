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
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply horizontal scroll on desktop
    const isMobile = window.innerWidth < 768;
    
    if (!isMobile) {
      const pin = gsap.fromTo(
        sectionRef.current,
        { translateX: 0 },
        {
          translateX: "-300vw",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "2000 top",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        }
      );
      return () => {
        pin.kill();
      };
    }
  }, []);

  return (
    <section className="overflow-hidden bg-bg">
      <div ref={triggerRef}>
        <div 
          ref={sectionRef} 
          className="md:h-screen md:w-[400vw] flex flex-col md:flex-row relative"
          style={{ willChange: "transform" }}
        >
          {SHOWCASE_ITEMS.map((item, index) => (
            <div 
              key={index} 
              className="min-h-[70vh] md:h-screen w-full md:w-screen flex-shrink-0 flex items-center justify-center p-6 md:p-20 relative overflow-hidden"
            >
              {/* Background with optimized rendering */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt="" 
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover opacity-30 md:opacity-60 transition-transform duration-[2000ms]"
                  style={{ transform: "scale(1.1)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-bg via-bg/60 to-bg" />
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center max-w-[1600px] mx-auto h-full w-full">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="space-y-4 md:space-y-10"
                >
                  <div className="space-y-2 md:space-y-4">
                    <span className="text-accent text-[10px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em] block">
                      {item.subtitle}
                    </span>
                    <h2 className="text-4xl md:text-[8rem] lg:text-[10rem] font-display italic gold-gradient leading-none tracking-tighter">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-text-secondary text-sm md:text-2xl font-light leading-relaxed max-w-xl opacity-80">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-6 md:gap-10">
                    <div className="w-12 md:w-20 h-[1px] gold-gradient" />
                    <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-bold">
                      0{index + 1} / 04
                    </span>
                  </div>
                </motion.div>

                {/* Visible on both but styled differently */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4 }}
                  className="relative aspect-[16/9] md:aspect-[4/5] rounded-[2rem] md:rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group"
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent opacity-40 md:opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;
