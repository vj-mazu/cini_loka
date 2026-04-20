import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LOADING_WORDS = ["Design", "Create", "Inspire"];

const LoadingScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 2700;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        // Short delay before completion to let the 100 settle
        setTimeout(onComplete, 400);
      }
    };

    const requestId = window.requestAnimationFrame(step);

    const wordInterval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % LOADING_WORDS.length);
    }, 900);

    return () => {
      window.cancelAnimationFrame(requestId);
      clearInterval(wordInterval);
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

      {/* Center Rotating Words */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={LOADING_WORDS[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {LOADING_WORDS[wordIndex]}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Bottom Display */}
      <div className="flex flex-col gap-8">
        {/* Counter removed per user request */}
        
        {/* Progress Bar */}
        <div className="relative h-[3px] bg-stroke/50 w-full">
          <motion.div
            className="absolute top-0 left-0 h-full accent-gradient"
            style={{ transformOrigin: "left", boxShadow: "0 0 12px rgba(137, 170, 204, 0.4)" }}
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
