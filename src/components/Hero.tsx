import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const ROLES = [
  { text: "Private Theater", color: "text-accent" },
  { text: "Event Venue", color: "text-blue-300" },
  { text: "Birthday Hub", color: "text-rose-400" },
  { text: "Movie Space", color: "text-emerald-400" },
];

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const hlsUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

    if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsUrl;
    }

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    
    tl.fromTo(".name-reveal", 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
    );
    
    tl.fromTo(".blur-in", 
      { opacity: 0, filter: "blur(10px)", y: 20 }, 
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1 }, 
      "-=0.8"
    );

    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2000);

    return () => {
      clearInterval(roleInterval);
    };
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        <div className="blur-in text-[10px] md:text-xs text-muted uppercase tracking-[0.4em] mb-10 font-medium">
          PREMIUM EXPERIENCE RAICHUR
        </div>
        
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-[10rem] font-display italic leading-[0.85] tracking-tighter text-text-primary mb-12 select-none">
          CINI LOKA
        </h1>

        <div className="blur-in flex flex-col md:flex-row items-center justify-center gap-3 text-lg md:text-2xl text-text-primary font-medium mb-12">
          <span>A premier</span>
          <div className="h-10 overflow-hidden inline-flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex].text}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -24, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`font-display italic text-3xl md:text-5xl px-2 ${ROLES[roleIndex].color}`}
              >
                {ROLES[roleIndex].text}
              </motion.span>
            </AnimatePresence>
          </div>
          <span>in Raichur.</span>
        </div>

        <p className="blur-in text-sm md:text-base text-muted max-w-lg mx-auto mb-14 leading-relaxed font-body font-light">
          Redefining intimate celebrations. From private theater screenings to 
          luxurious event decorations, we bring your vision to life.
        </p>

        <div className="blur-in flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20would%20like%20to%20book%20an%20event"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-64 px-8 py-5 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105 active:scale-95 text-center"
          >
            <span className="absolute inset-0 bg-white" />
            <span className="relative z-10 text-bg font-bold tracking-tight text-sm">BOOK YOUR EVENT</span>
          </a>
          
          <a
            href="#works"
            className="group relative w-64 px-8 py-5 rounded-full border border-stroke bg-bg/20 backdrop-blur-xl transition-all duration-300 transform hover:scale-105 active:scale-95 text-center"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-10 accent-gradient transition-opacity rounded-full" />
            <span className="relative z-10 text-text-primary font-bold tracking-tight text-sm">EXPLORE GALLERY</span>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5">
        <span className="text-[9px] text-muted tracking-[0.5em] uppercase font-bold">Scroll</span>
        <div className="w-[1.5px] h-12 bg-stroke/30 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-[30%] accent-gradient animate-scroll-down rounded-full shadow-[0_0_10px_rgba(137,170,204,0.5)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
