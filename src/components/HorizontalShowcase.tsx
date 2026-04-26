import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SHOWCASE_ITEMS = [
  {
    title: "Cinematic Luxury",
    subtitle: "Premium Sofa Seating",
    image: "/assets/user_images/image7.jpg",
    description: "Experience films in unparalleled comfort with our signature luxury sofa arrangements."
  },
  {
    title: "Traditional Functions",
    subtitle: "Elegant Event Design",
    images: ["/assets/user_images/image1.jpg", "/assets/user_images/image2.jpg"],
    description: "Sophisticated and culturally rich setups for traditional ceremonies and milestones."
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
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".showcase-item");

      items.forEach((item, i) => {
        const imgContainer = item.querySelector(".showcase-img-container");
        const images = item.querySelectorAll(".parallax-img");
        const isEven = i % 2 === 0;

        // ─── Staggered Cinematic Entrance Timeline ───
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });

        // Image: curtain wipe from bottom + scale + blur
        tl.fromTo(
          imgContainer,
          {
            clipPath: "inset(100% 0% 0% 0%)",
            scale: 0.92,
            filter: "blur(8px)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            filter: "blur(0px)",
            duration: 1.6,
            ease: "power4.inOut",
          }
        );

        // Subtitle: slide in from left with letter-spacing squeeze
        tl.fromTo(
          item.querySelector(".showcase-subtitle"),
          { opacity: 0, x: isEven ? -40 : 40, letterSpacing: "1.2em" },
          { opacity: 1, x: 0, letterSpacing: "0.6em", duration: 0.9, ease: "power3.out" },
          "-=0.9"
        );

        // Title: dramatic skew entrance
        tl.fromTo(
          item.querySelector(".showcase-title"),
          { opacity: 0, y: 60, skewY: isEven ? 5 : -5 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.2, ease: "power4.out" },
          "-=0.7"
        );

        // Description: gentle fade-slide
        tl.fromTo(
          item.querySelector(".showcase-desc"),
          { opacity: 0, y: 20 },
          { opacity: 0.8, y: 0, duration: 0.8, ease: "power3.out" },
          "-=0.6"
        );

        // Gold line: width reveal
        tl.fromTo(
          item.querySelector(".showcase-line"),
          { scaleX: 0 },
          { scaleX: 1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );

        // ─── Subtle continuous float on the image card ───
        gsap.to(imgContainer, {
          y: -15,
          duration: 3 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.3,
        });

        // ─── Internal parallax on the images ───
        images.forEach((img) => {
          gsap.fromTo(
            img,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      });
    });

    // Security: disable right-click
    const handleContextMenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    return () => {
      ctx.revert();
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, []);

  return (
    <section
      id="showcase"
      className="bg-bg py-24 md:py-48 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col gap-36 md:gap-56">
          {SHOWCASE_ITEMS.map((item, index) => (
            <div
              key={index}
              className="showcase-item group relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center"
            >
              {/* ── Text Side ── */}
              <div
                className={`space-y-6 md:space-y-10 ${
                  index % 2 !== 0 ? "md:order-2" : ""
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-4">
                    <span className="text-accent text-[11px] font-bold uppercase tracking-[0.4em]">
                      0{index + 1} / 03
                    </span>
                    <div className="w-12 h-[1px] bg-accent/30" />
                  </div>
                  <span className="showcase-subtitle text-white/40 text-xs md:text-sm font-bold uppercase tracking-[0.6em] block">
                    {item.subtitle}
                  </span>
                  <h2 className="showcase-title text-5xl md:text-7xl lg:text-[8rem] font-display italic gold-gradient leading-[1.15] tracking-tighter pr-4 pb-2">
                    {item.title}
                  </h2>
                </div>

                <p className="showcase-desc text-base md:text-lg lg:text-xl font-light leading-relaxed max-w-lg opacity-80">
                  {item.description}
                </p>

                <div className="pt-2 md:pt-4">
                  <div className="showcase-line w-20 h-[1px] gold-gradient opacity-40 origin-left" />
                </div>
              </div>

              {/* ── Image Side ── */}
              <div
                className={`showcase-img-container relative aspect-[4/5] md:aspect-[3/4] rounded-3xl md:rounded-[4rem] overflow-hidden border border-white/5 shadow-2xl ${
                  index % 2 !== 0 ? "md:order-1" : ""
                }`}
              >
                {"images" in item ? (
                  <div className="absolute inset-0 z-0 flex gap-2 h-full p-0">
                    {item.images.map((img, i) => (
                      <div key={i} className="parallax-img relative overflow-hidden flex-1">
                        <img
                          src={img}
                          alt={`${item.title} ${i}`}
                          loading="lazy"
                          onLoad={(e) => (e.target as HTMLImageElement).classList.add("loaded")}
                          className="w-full h-full object-cover scale-110 opacity-0 transition-opacity duration-700 [&.loaded]:opacity-100"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="parallax-img absolute inset-0 z-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      onLoad={(e) =>
                        (e.target as HTMLImageElement).classList.add("loaded")
                      }
                      className="w-full h-full object-cover scale-110 opacity-0 transition-opacity duration-700 [&.loaded]:opacity-100"
                    />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/50 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-700" />

                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-white/10 rounded-tr-[4rem] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-white/10 rounded-bl-[4rem] pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;
