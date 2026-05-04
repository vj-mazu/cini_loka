import React, { useEffect, useRef, useState } from "react";
import { attachHls } from "../utils/hlsLoader";
import gsap from "gsap";
import { motion } from "framer-motion";

interface FooterProps {
  onPrivacyOpen: () => void;
}

const Footer: React.FC<FooterProps> = ({ onPrivacyOpen }) => {
  const [isCopied, setIsCopied] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const copyEmail = () => {
    // We let the default mailto: trigger, but also copy to clipboard
    navigator.clipboard.writeText("ciniloka.raichur@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      attachHls(video);
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
            <h2 className="text-6xl md:text-9xl lg:text-[11rem] font-display text-text-primary leading-[1.1] tracking-tighter mb-20 select-none">
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
                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white p-2.5 shadow-lg shadow-[#25D366]/20">
                  <svg className="w-full h-full fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
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
                href="https://maps.app.goo.gl/uN7Q9kHv3gDmn8jw9"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-4 glass p-8 rounded-[2.5rem] hover:bg-white/5 transition-all duration-500 lg:col-span-1"
              >
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white text-xl">📍</div>
                <span className="text-[11px] text-white/60 font-bold uppercase tracking-[0.3em]">Location</span>
                <span className="text-lg font-medium">Ashok Nagar, Raichur</span>
              </a>
            </div>

            <a
              href="mailto:ciniloka.raichur@gmail.com"
              onClick={copyEmail}
              className="group relative flex flex-col sm:flex-row items-center justify-between gap-8 px-8 md:px-16 py-10 md:py-12 rounded-[2.5rem] md:rounded-[3rem] glass hover:bg-white/[0.08] transition-all duration-700 shadow-2xl cursor-pointer z-10 w-full max-w-2xl mx-auto"
            >
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left min-w-0">
                <span className="text-[10px] text-accent tracking-[0.6em] font-black uppercase mb-3 opacity-80">
                  {isCopied ? "Email Copied!" : "Email"}
                </span>
                <span className="text-xl md:text-4xl font-display italic text-text-primary group-hover:gold-gradient transition-all duration-700 break-all sm:break-normal">
                  ciniloka.raichur@gmail.com
                </span>
              </div>
              <div className="w-12 h-12 md:w-20 md:h-20 rounded-full gold-gradient p-[1px] flex-shrink-0 flex items-center justify-center transition-transform duration-1000 group-hover:rotate-45 shadow-lg shadow-accent/20">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                   <svg className="w-5 h-5 md:w-8 md:h-8 text-bg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <line x1="7" y1="17" x2="17" y2="7"></line>
                     <polyline points="7 7 17 7 17 17"></polyline>
                   </svg>
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
              <a 
                href="https://maps.app.goo.gl/uN7Q9kHv3gDmn8jw9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base leading-relaxed font-light hover:text-accent transition-colors duration-300 block"
              >
                Mallikarjun Towers, beside AME'S Dental College,<br />
                Ashok Nagar, Raichur, Karnataka 584103
              </a>
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
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
               <span className="text-[10px] text-muted tracking-[0.5em] uppercase font-bold">© 2026 CINI LOKA</span>
               <button 
                onClick={onPrivacyOpen}
                className="text-[10px] text-muted hover:text-white transition-all tracking-[0.5em] uppercase font-bold border-b border-transparent hover:border-white/20 pb-1"
               >
                 Privacy Policy
               </button>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
              <a 
                href="https://wa.me/917483343412" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 text-[10px] text-muted hover:text-[#25D366] transition-all duration-500 font-bold tracking-[0.3em] uppercase"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/cini_loka_raichur?igsh=YXN5Y3BkM3o4cHg2" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 text-[10px] text-muted hover:text-rose-500 transition-all duration-500 font-bold tracking-[0.3em] uppercase"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
              <a 
                href="https://maps.app.goo.gl/uN7Q9kHv3gDmn8jw9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center gap-3 text-[10px] text-muted hover:text-blue-400 transition-all duration-500 font-bold tracking-[0.3em] uppercase"
              >
                <svg className="w-4 h-4 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Google Maps
              </a>
            </div>

            <div className="flex flex-col items-center md:items-end gap-2">
              <span className="text-[10px] text-muted/40 tracking-[0.5em] uppercase">RAICHUR, KA 584103</span>
              <div className="text-[10px] text-muted/50 font-bold tracking-[0.15em] uppercase text-center md:text-right">
                Designed & Developed by <span className="text-accent/60">Manjunath Patil</span><br />
                <a href="tel:+919448986953" className="hover:text-white transition-colors">+91 94489 86953</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
