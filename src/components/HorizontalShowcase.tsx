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
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
          anticipatePin: 1,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);

  return (
    <section className="overflow-hidden bg-bg">
      <div ref={triggerRef}>
        <div ref={sectionRef} className="h-screen w-[400vw] flex flex-row relative">
          {SHOWCASE_ITEMS.map((item, index) => (
            <div key={index} className="h-screen w-screen flex-shrink-0 flex items-center justify-center p-10 md:p-20 relative">
              <div className="absolute inset-0 z-0">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover opacity-60 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/40 to-bg" />
              </div>

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-end md:items-center max-w-[1600px] mx-auto h-full">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="space-y-6 md:space-y-10 pb-20 md:pb-0"
                >
                  <div className="space-y-2 md:space-y-4">
                    <span className="text-accent text-[10px] md:text-sm font-bold uppercase tracking-[0.6em] block">
                      {item.subtitle}
                    </span>
                    <h2 className="text-4xl md:text-[10rem] font-display italic gold-gradient leading-none tracking-tighter">
                      {item.title}
                    </h2>
                  </div>
                  <p className="text-text-secondary text-base md:text-2xl font-light leading-relaxed max-w-xl opacity-80">
                    {item.description}
                  </p>
                  
                  <div className="flex items-center gap-6 md:gap-10">
                    <div className="w-12 md:w-20 h-[1px] gold-gradient" />
                    <span className="text-[10px] text-white/40 uppercase tracking-[0.4em] font-bold">
                      0{index + 1} / 04
                    </span>
                  </div>
                </motion.div>

                <div className="hidden md:block relative aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl group">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
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
