import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_WORDS = ["Cinematic", "Celebrations", "Memories"];

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 3000; // Exact 3 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      setCount(Math.floor(progress * 100));

      // Synchronize word changes with progress
      // 0-33%: Word 0, 33-66%: Word 1, 66-100%: Word 2
      const newIndex = Math.min(Math.floor(progress * LOADING_WORDS.length), LOADING_WORDS.length - 1);
      setWordIndex(newIndex);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setTimeout(onComplete, 500);
      }
    };

    const requestId = window.requestAnimationFrame(step);

    return () => {
      window.cancelAnimationFrame(requestId);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-12 overflow-hidden">
      {/* Top Label */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-xs text-muted uppercase tracking-[0.3em]"
      >
        CINI LOKA
      </motion.div>

      {/* Center Rotating Words with Staggered 3D Effects */}
      <div className="flex-1 flex items-center justify-center perspective-[1200px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={LOADING_WORDS[wordIndex]}
            className="flex gap-[0.05em] overflow-hidden py-4"
          >
            {LOADING_WORDS[wordIndex].split("").map((char, i) => (
              <motion.span
                key={i}
                initial={{ 
                  y: "100%", 
                  opacity: 0, 
                  rotateX: 90,
                  rotateY: 10,
                  filter: "blur(4px)"
                }}
                animate={{ 
                  y: 0, 
                  opacity: 1, 
                  rotateX: 0,
                  rotateY: 0,
                  filter: "blur(0px)"
                }}
                exit={{ 
                  y: "-100%", 
                  opacity: 0, 
                  rotateX: -90,
                  rotateY: -10,
                  filter: "blur(4px)"
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.05 
                }}
                className="text-6xl md:text-8xl lg:text-[10rem] font-display italic gold-gradient drop-shadow-[0_0_30px_rgba(226,194,133,0.3)] leading-none inline-block origin-bottom"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Display */}
      <div className="flex flex-col gap-8 pb-4">
        {/* Progress Bar */}
        <div className="relative h-[2px] bg-white/5 w-full overflow-hidden rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full gold-gradient"
            style={{ transformOrigin: "left", boxShadow: "0 0 20px rgba(226, 194, 133, 0.5)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: count / 100 }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
