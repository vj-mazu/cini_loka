import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/80 pl-3 pr-2 py-2 transition-all duration-300 ${
          isScrolled ? "shadow-2xl shadow-black/40 ring-1 ring-white/10" : ""
        }`}
      >
        {/* Logo */}
        <motion.div 
          className="relative w-9 h-9 rounded-full overflow-hidden group cursor-pointer"
          whileHover={{ scale: 1.1 }}
        >
          <div className="absolute inset-0 accent-gradient p-[1px] rounded-full group-hover:rotate-180 transition-transform duration-700">
            <div className="w-full h-full bg-bg rounded-full flex items-center justify-center">
              <span className="font-display italic text-[11px] font-bold text-text-primary tracking-tighter">CL</span>
            </div>
          </div>
        </motion.div>

        <div className="hidden md:block w-px h-5 bg-stroke mx-2" />

        {/* Links */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {[
            { name: "Home", href: "#home" },
            { name: "Services", href: "#services" },
            { name: "Gallery", href: "#works" },
            { name: "Reviews", href: "#reviews" },
          ].map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm rounded-full transition-colors font-medium text-muted hover:text-text-primary hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="w-px h-5 bg-stroke mx-1 sm:mx-2" />

        <div className="flex items-center gap-0.5 sm:gap-2 pr-1">
          {/* Call Action */}
          <a
            href="tel:+917483343412"
            className="flex relative group px-2 md:px-4 py-2 text-[10px] md:text-sm rounded-full font-medium transition-all text-text-primary hover:bg-white/5"
          >
            <span className="md:hidden">📞</span>
            <span className="hidden md:inline">Call Us</span>
          </a>

          {/* Action Button — WhatsApp */}
          <a
            href="https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20would%20like%20to%20book%20an%20event"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group px-2 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm rounded-full font-medium transition-all"
          >
            <span className="absolute inset-x-0 inset-y-0 -m-[1px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity rounded-full -z-10" />
            <span className="absolute inset-0 bg-surface rounded-full opacity-0 group-hover:opacity-100 -z-1" />
            <span className="relative z-10 flex items-center gap-1.5 text-text-primary uppercase tracking-tighter sm:tracking-normal font-black sm:font-medium">
              Hi <span className="hidden sm:inline text-[10px] opacity-60">↗</span>
            </span>
          </a>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
