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
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const cards = gsap.utils.toArray(".showcase-card");
    
    const scroll = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: `+=${cards.length * 100}%`,
      pin: true,
      scrub: 1,
      snap: {
        snapTo: 1 / (cards.length - 1),
        duration: 0.5,
        delay: 0.1,
        ease: "power2.inOut"
      },
      onUpdate: (self) => {
        const progress = self.progress;
        const index = Math.round(progress * (cards.length - 1));
        setActiveIdx(index);
      }
    });

    cards.forEach((card: any, i: number) => {
      if (i === 0) return;
      
      gsap.fromTo(card, 
        { yPercent: 100, opacity: 0 },
        { 
          yPercent: 0, 
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: () => `top+=${i * window.innerHeight} top`,
            end: () => `top+=${(i + 1) * window.innerHeight} top`,
            scrub: true,
          }
        }
      );

      gsap.to(cards[i-1] as any, {
        scale: 0.85,
        opacity: 0.4,
        filter: "blur(15px)",
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: () => `top+=${i * window.innerHeight} top`,
          end: () => `top+=${(i + 1) * window.innerHeight} top`,
          scrub: true,
        }
      });
    });

    return () => {
      scroll.kill();
    };
  }, []);

  return (
    <section ref={triggerRef} className="bg-bg relative overflow-hidden">
      <div ref={containerRef} className="h-screen w-full relative">
        {SHOWCASE_ITEMS.map((item, index) => (
          <div 
            key={index} 
            className="showcase-card absolute inset-0 h-screen w-full flex items-center justify-center p-4 md:p-20 bg-bg"
            style={{ zIndex: index }}
          >
            <div className="absolute inset-0 z-0">
              <img 
                src={item.image} 
                alt="" 
                className="w-full h-full object-cover opacity-15 md:opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-bg/95 via-bg/40 to-bg" />
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center max-w-[1500px] mx-auto w-full px-4 md:px-0">
              <div className="space-y-4 md:space-y-12 order-2 md:order-1">
                <div className="space-y-2 md:space-y-6">
                  <div className="flex items-center gap-4">
                     <span className="text-accent text-[9px] md:text-sm font-bold uppercase tracking-[0.4em] md:tracking-[0.6em]">
                      {item.subtitle}
                    </span>
                    <div className="h-[1px] w-8 md:w-12 bg-accent/30" />
                  </div>
                  <h2 className="text-4xl md:text-[7rem] lg:text-[10rem] font-display italic gold-gradient leading-[0.85] tracking-tighter">
                    {item.title}
                  </h2>
                </div>
                <p className="text-text-secondary text-sm md:text-2xl font-light leading-relaxed max-w-xl opacity-90">
                  {item.description}
                </p>
                
                <div className="flex items-center gap-4 md:gap-10">
                  <div className="w-10 md:w-20 h-[1.5px] gold-gradient" />
                  <span className="text-xs md:text-lg text-white font-display italic tracking-[0.2em]">
                    0{index + 1} <span className="text-white/20 px-1 md:px-2">/</span> 04
                  </span>
                </div>
              </div>

              <div className="relative aspect-[4/3] md:aspect-[4/5] rounded-[2rem] md:rounded-[5rem] overflow-hidden border border-white/10 shadow-2xl group shadow-accent/5 order-1 md:order-2">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-60 md:opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 md:bottom-20 left-1/2 -translate-x-1/2 z-[100] flex gap-3 md:gap-6 pointer-events-none">
        {[0,1,2,3].map((i) => (
          <div 
            key={i} 
            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all duration-500 ${
              activeIdx === i ? "bg-accent w-6 md:w-10" : "bg-white/20"
            }`} 
          />
        ))}
      </div>
    </section>
  );
};

export default HorizontalShowcase;
