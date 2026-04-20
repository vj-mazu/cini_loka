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
        duration: 40,
        ease: "none",
      });
    }
  }, []);

  return (
    <footer className="relative bg-bg pt-12 pb-12 overflow-hidden border-t border-stroke/30">
      {/* Flipped Background Video */}
      <div className="absolute inset-0 z-0 scale-y-[-1] pointer-events-none">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-bg to-transparent" />
      </div>

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden whitespace-nowrap mb-16 md:mb-24">
          <div ref={marqueeRef} className="inline-block">
            {Array(10).fill("").map((_, i) => (
              <span key={i} className="text-7xl md:text-[12rem] font-display italic text-white/5 tracking-tighter uppercase px-16 select-none leading-none">
                CINI LOKA • RAICHUR • 
              </span>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center mb-24 md:mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-5xl md:text-9xl font-display text-text-primary leading-[0.85] tracking-tighter mb-16 select-none">
              Let's create <span className="italic text-white/20">magic</span>
            </h2>

            {/* Quick action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-16">
              {/* WhatsApp */}
              <a
                href="https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20would%20like%20to%20book%20an%20event"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
              >
                <span className="absolute inset-0 bg-green-600" />
                <span className="relative z-10 text-white text-sm font-bold tracking-tight">💬 WhatsApp Us</span>
              </a>

              {/* Call */}
              <a
                href="tel:+917483343412"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full border border-stroke bg-bg/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-surface active:scale-95"
              >
                <span className="text-text-primary text-sm font-bold tracking-tight">📞 +91 74833 43412</span>
              </a>

              {/* Google Maps */}
              <a
                href="https://www.google.com/maps/place/CINI+LOKA/@16.2024,76.5856,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full border border-stroke bg-bg/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-surface active:scale-95"
              >
                <span className="text-text-primary text-sm font-bold tracking-tight">📍 Get Directions</span>
              </a>
            </div>

            {/* Email */}
            <a
              href="mailto:hello@ciniloka.com"
              className="group relative inline-flex items-center gap-10 px-10 md:px-16 py-8 md:py-12 rounded-full bg-surface/30 backdrop-blur-2xl border border-stroke/50 hover:bg-surface/50 hover:border-white transition-all duration-700"
            >
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-muted tracking-[0.5em] font-black uppercase mb-3">Email Us</span>
                <span className="text-2xl md:text-4xl font-display italic text-text-primary group-hover:text-white transition-colors duration-500">hello@ciniloka.com</span>
              </div>
              <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden flex items-center justify-center transition-all duration-700">
                <div className="absolute inset-0 accent-gradient p-[1px] rounded-full group-hover:rotate-[135deg] transition-transform duration-1000">
                  <div className="w-full h-full bg-bg rounded-full" />
                </div>
                <span className="relative z-10 text-4xl group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-700">→</span>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Business Info Bar */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 border-t border-stroke/20 pt-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <span className="text-[9px] text-muted tracking-[0.4em] uppercase font-black block mb-3">Address</span>
              <a
                href="https://www.google.com/maps/place/CINI+LOKA/@16.2024,76.5856,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-primary/70 hover:text-white transition-colors leading-relaxed font-light"
              >
                Mallikarjun Towers, beside AME'S Dental College,<br />
                Ashok Nagar, Raichur, Karnataka 584103
              </a>
            </div>
            <div>
              <span className="text-[9px] text-muted tracking-[0.4em] uppercase font-black block mb-3">Hours</span>
              <span className="text-sm text-text-primary/70 font-light">10:00 AM – 10:00 PM<br />All days of the week</span>
            </div>
            <div>
              <span className="text-[9px] text-muted tracking-[0.4em] uppercase font-black block mb-3">Contact</span>
              <a href="tel:+917483343412" className="text-sm text-text-primary/70 hover:text-white transition-colors block font-light">+91 74833 43412</a>
              <a href="mailto:hello@ciniloka.com" className="text-sm text-text-primary/70 hover:text-white transition-colors block font-light">hello@ciniloka.com</a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 border-t border-stroke/20 pt-10">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">
            {/* Availability */}
            <div className="flex items-center justify-center md:justify-start gap-5">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]"></span>
              </div>
              <span className="text-[10px] text-muted font-black tracking-[0.35em] uppercase">Accepting Bookings</span>
            </div>

            {/* Socials */}
            <div className="flex items-center justify-center gap-10">
              {[
                { name: "WhatsApp", url: "https://wa.me/917483343412" },
                { name: "Instagram", url: "#" },
                { name: "Google Maps", url: "https://www.google.com/maps/place/CINI+LOKA/@16.2024,76.5856,17z" },
              ].map((link) => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-[10px] text-muted hover:text-white transition-all duration-300 font-black tracking-[0.25em] uppercase border-b border-transparent hover:border-white/20 pb-1">
                  {link.name}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-center md:items-end gap-1">
              <span className="text-[9px] text-muted tracking-[0.45em] uppercase font-black">© 2026 CINI LOKA</span>
              <span className="text-[8px] text-muted/30 tracking-widest uppercase">RAICHUR, KARNATAKA 584103</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
