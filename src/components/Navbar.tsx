import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Magnetic from "./Magnetic";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-2 md:px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
        className={`inline-flex items-center rounded-full glass transition-all duration-700 max-w-[98vw] md:max-w-none p-2 md:p-2 px-3 md:px-5 ${
          isScrolled ? "bg-bg/60 border-white/20 shadow-2xl shadow-accent/5" : "bg-white/5 border-white/5"
        }`}
      >
        {/* Logo */}
        <Magnetic>
          <motion.div 
            className="relative w-9 h-9 md:w-11 md:h-11 rounded-full overflow-hidden group cursor-pointer p-[1px] flex-shrink-0"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 gold-gradient group-hover:rotate-180 transition-transform duration-1000" />
            <div className="w-full h-full bg-bg rounded-full flex items-center justify-center relative z-10">
              <span className="font-display italic text-[10px] md:text-xs font-bold text-text-primary tracking-tighter gold-gradient">CL</span>
            </div>
          </motion.div>
        </Magnetic>

        <div className="hidden md:block w-[1px] h-6 bg-white/10 mx-4" />

        {/* Links */}
        <div className="flex items-center gap-1">
          {[
            { name: "Home", href: "#home", desktopOnly: false },
            { name: "Services", href: "#services", desktopOnly: false },
            { name: "Gallery", href: "#works", desktopOnly: false },
            { name: "Reviews", href: "#reviews", desktopOnly: true },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`px-2.5 md:px-4 py-2 text-[10px] md:text-[13px] rounded-full transition-all duration-300 font-bold uppercase tracking-[0.1em] md:tracking-[0.2em] text-white/50 hover:text-white hover:bg-white/5 ${
                link.desktopOnly ? "hidden lg:block" : ""
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="w-[1px] h-6 bg-white/10 mx-1 md:mx-4" />

        <div className="flex items-center gap-2 md:gap-2 pr-1 md:pr-2">
          {/* Call Action */}
          <a
            href="tel:+917483343412"
            className="flex relative group px-2 md:px-6 py-2.5 text-[11px] md:text-xs rounded-full font-bold uppercase tracking-[0.15em] transition-all text-text-primary/70 hover:text-white hover:bg-white/5"
          >
            <span className="md:hidden">📞</span>
            <span className="hidden md:inline">Contact</span>
          </a>

          {/* Action Button — WhatsApp */}
          <Magnetic>
            <a
              href="https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20would%20like%20to%20book%20an%20event"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group px-4 md:px-8 py-2 md:py-3 rounded-full overflow-hidden transition-all duration-500 shadow-lg shadow-accent/10 flex-shrink-0"
            >
              <span className="absolute inset-0 gold-gradient opacity-90 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 text-white text-[9px] md:text-[11px] font-bold tracking-widest uppercase">
                Book <span className="hidden sm:inline">Now</span>
              </span>
            </a>
          </Magnetic>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
