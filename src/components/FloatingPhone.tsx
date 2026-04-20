import React from "react";
import { motion } from "framer-motion";

const FloatingPhone: React.FC = () => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="fixed bottom-6 right-6 z-[999] md:bottom-10 md:right-10 overflow-visible"
    >
      <a
        href="tel:+917483343412"
        className="group relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center rounded-full bg-white text-bg shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
      >
        {/* Animated Inner Pulse */}
        <div className="absolute inset-0 z-0 animate-pulse bg-white/10" />
        
        {/* Phone Icon */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="relative z-10 h-6 w-6 md:h-7 md:w-7 transition-transform group-hover:rotate-12"
        >
          <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
        </svg>

        {/* Shine Sweep Effect */}
        <div className="absolute inset-0 z-20 -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
      </a>

      {/* External Ping Effect */}
      <div className="absolute inset-0 -z-10 animate-ping rounded-full bg-white/20 duration-[2000ms]" />
    </motion.div>
  );
};

export default FloatingPhone;
