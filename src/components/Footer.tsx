import React, { useEffect, useRef } from "react";
import Hls from "hls.js";
import gsap from "gsap";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const hlsUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";
      if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(hlsUrl);
        hls.attachMedia(video);
      } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
        video.src = hlsUrl;
      }
    }

    const marquee = marqueeRef.current;
    if (marquee) {
      gsap.to(marquee, {
        xPercent: -50,
        repeat: -1,
        duration: 45,
        ease: "none",
      });
    }
  }, []);

  return (
    <footer className="relative bg-bg pt-24 pb-16 overflow-hidden border-t border-white/5">
      {/* Flipped Background Video for mirrored effect */}
      <div className="absolute inset-0 z-0 scale-y-[-1] pointer-events-none opacity-40">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-bg/80" />
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Marquee with Gold Gradient */}
        <div className="overflow-hidden whitespace-nowrap mb-24 md:mb-32 opacity-20">
          <div ref={marqueeRef} className="inline-block">
            {Array(10).fill("").map((_, i) => (
              <span key={i} className="text-8xl md:text-[15rem] font-display italic gold-gradient tracking-tighter uppercase px-20 select-none leading-none opacity-50">
                CINI LOKA • RAICHUR • 
              </span>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-32 md:mb-48">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-6xl md:text-9xl lg:text-[11rem] font-display text-text-primary leading-[0.8] tracking-tighter mb-20 select-none">
              Let's craft <span className="italic gold-gradient">magic</span> together
            </h2>

            {/* Quick action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-20">
              <a
                href="https://wa.me/917483343412"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 glass p-8 rounded-[2.5rem] hover:bg-[#25D366]/10 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white text-xl">💬</div>
                <span className="text-[11px] text-white/60 font-bold uppercase tracking-[0.3em]">WhatsApp</span>
                <span className="text-lg font-medium">+91 74833 43412</span>
              </a>

              <a
                href="tel:+917483343412"
                className="group flex flex-col items-center gap-4 glass p-8 rounded-[2.5rem] hover:bg-white/5 transition-all duration-500"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white text-xl">📞</div>
                <span className="text-[11px] text-white/60 font-bold uppercase tracking-[0.3em]">Call Us</span>
                <span className="text-lg font-medium">+91 74833 43412</span>
              </a>

              <a
                href="https://www.google.com/maps/place/CINI+LOKA"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 glass p-8 rounded-[2.5rem] hover:bg-white/5 transition-all duration-500 lg:col-span-1"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white text-xl">📍</div>
                <span className="text-[11px] text-white/60 font-bold uppercase tracking-[0.3em]">Visit Us</span>
                <span className="text-lg font-medium">Ashok Nagar, Raichur</span>
              </a>
            </div>

            <a
              href="mailto:hello@ciniloka.com"
              className="group relative inline-flex items-center gap-10 px-12 md:px-20 py-10 md:py-16 rounded-[4rem] glass hover:bg-white/[0.08] transition-all duration-700 shadow-2xl"
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-accent tracking-[0.6em] font-black uppercase mb-4 opacity-80">Direct Line</span>
                <span className="text-3xl md:text-5xl font-display italic text-text-primary group-hover:gold-gradient transition-all duration-700">hello@ciniloka.com</span>
              </div>
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full gold-gradient p-[2px] flex items-center justify-center transition-transform duration-1000 group-hover:rotate-45">
                <div className="w-full h-full bg-bg rounded-full flex items-center justify-center">
                   <span className="text-4xl">→</span>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Business Info Bar */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 border-t border-white/5 pt-16 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left text-text-secondary/70">
            <div className="md:col-span-2">
              <span className="text-[10px] text-white tracking-[0.5em] uppercase font-bold block mb-6">Raichur Elite Cinema</span>
              <p className="text-base leading-relaxed font-light">
                Mallikarjun Towers, beside AME'S Dental College,<br />
                Ashok Nagar, Raichur, Karnataka 584103
              </p>
            </div>
            <div>
              <span className="text-[10px] text-white tracking-[0.5em] uppercase font-bold block mb-6">Experience Time</span>
              <p className="text-base font-light">10:00 AM – 10:00 PM<br />Seven days a week</p>
            </div>
            <div>
              <span className="text-[10px] text-white tracking-[0.5em] uppercase font-bold block mb-6">Availability</span>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></span>
                </div>
                <span className="text-xs uppercase tracking-widest font-medium">Accepting Bookings</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 pb-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <span className="text-[10px] text-muted tracking-[0.5em] uppercase font-bold">© 2026 CINI LOKA</span>
            
            <div className="flex items-center gap-12">
              {["WhatsApp", "Instagram", "Google"].map((social) => (
                <a key={social} href="#" className="text-[10px] text-muted hover:text-accent transition-all duration-500 font-bold tracking-[0.3em] uppercase">
                  {social}
                </a>
              ))}
            </div>

            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="text-[8px] text-muted/30 tracking-[0.6em] uppercase">RAICHUR, KA 584103</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
