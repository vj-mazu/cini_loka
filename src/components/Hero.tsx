import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

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

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    
    tl.fromTo(".name-reveal", 
      { opacity: 0, y: 100, scale: 0.95, filter: "blur(20px)" }, 
      { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", duration: 2 }
    );
    
    tl.fromTo(".blur-in", 
      { opacity: 0, filter: "blur(10px)", y: 30 }, 
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1.2, stagger: 0.15 }, 
      "-=1.5"
    );

    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2500);

    return () => {
      clearInterval(roleInterval);
    };
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen w-full overflow-hidden flex items-center justify-center py-20 md:py-32">
      {/* Background Video with Sophisticated Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/cini-1.jpg"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-85"
        />
        {/* Multilayered Gradeints for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-bg/60 via-bg/10 to-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-bg/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-6xl pt-10 md:pt-20 pb-16 md:pb-24">
        <div className="blur-in inline-block text-[9px] md:text-xs lg:text-sm text-accent tracking-[0.4em] md:tracking-[0.6em] mb-4 md:mb-12 font-bold opacity-100 uppercase border-b border-accent/30 pb-2 md:pb-6">
          Elite Private Cinema & Events
        </div>
        
        <h1 className="name-reveal gold-gradient text-6xl md:text-9xl lg:text-[13rem] font-display italic leading-[0.8] tracking-tighter mb-6 md:mb-16 select-none drop-shadow-[0_0_50px_rgba(226,194,133,0.25)]">
          CINI LOKA
        </h1>

        <div className="blur-in flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-base md:text-2xl lg:text-3xl text-text-primary/90 font-light mb-6 md:mb-16">
          <span className="opacity-80">Experience the magic of a</span>
          <div className="h-8 md:h-14 overflow-hidden inline-flex items-center min-w-[180px] md:min-w-[300px] justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.span
                key={ROLES[roleIndex].text}
                initial={{ y: 30, opacity: 0, rotateX: 45 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                exit={{ y: -30, opacity: 0, rotateX: -45 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className={`font-display italic text-2xl md:text-5xl lg:text-6xl px-3 ${ROLES[roleIndex].color} drop-shadow-sm whitespace-nowrap`}
              >
                {ROLES[roleIndex].text}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        <p className="blur-in text-xs md:text-lg text-text-secondary max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed font-body font-light px-6 opacity-70">
          Redefining celebrations in Raichur. From cinematic private theater screenings 
          to bespoke event designs, we craft moments that linger forever.
        </p>

        <div className="blur-in grid grid-cols-1 sm:flex sm:flex-row items-center justify-center gap-8 md:gap-12 mb-16 md:mb-0 max-w-sm sm:max-w-none mx-auto">
          <div className="w-full sm:w-auto flex justify-center">
            <Magnetic>
              <a
                href="https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20would%20like%20to%20book%20an%20event"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-full max-w-[280px] sm:w-auto sm:min-w-[240px] md:w-80 px-10 py-4 md:py-6 rounded-full overflow-hidden transition-all duration-500 transform hover:scale-105 active:scale-95 text-center shadow-xl shadow-accent/10"
              >
                <span className="absolute inset-0 gold-gradient opacity-90 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 text-white font-bold tracking-widest text-[10px] md:text-xs uppercase letter-spacing-[0.2em]">Reserve Private Cinema</span>
              </a>
            </Magnetic>
          </div>
          
          <div className="w-full sm:w-auto flex justify-center">
            <Magnetic>
              <a
                href="#works"
                className="group relative w-full max-w-[280px] sm:w-auto sm:min-w-[240px] md:w-80 px-10 py-4 md:py-6 rounded-full border border-white/10 glass-dark transition-all duration-500 transform hover:scale-105 active:scale-95 text-center"
              >
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 accent-gradient transition-opacity rounded-full" />
                <span className="relative z-10 text-text-primary font-bold tracking-widest text-[10px] md:text-xs uppercase">View Celebrations</span>
              </a>
            </Magnetic>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6 opacity-60">
        <span className="text-[10px] text-muted tracking-[0.6em] uppercase font-bold">Discover</span>
        <div className="w-[1.5px] h-16 bg-white/10 relative overflow-hidden rounded-full">
          <div className="absolute top-0 left-0 w-full h-[40%] bg-accent animate-scroll-down rounded-full shadow-[0_0_15px_rgba(226,194,133,0.5)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
