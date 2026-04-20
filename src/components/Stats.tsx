import React from "react";
import { motion } from "framer-motion";

const STATS = [
  { label: "Google Rating", value: "4.8" },
  { label: "Events Hosted", value: "250+" },
  { label: "Happy Clients", value: "500+" },
  { label: "Open Every Day", value: "365" },
];

const Stats: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 text-center">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col gap-8 relative"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-[1.5px] bg-stroke group-hover:w-32 group-hover:bg-accent transition-all duration-700" />
              <div className="flex flex-col gap-2">
                <span className="text-7xl md:text-9xl font-display italic text-text-primary tracking-tighter leading-none group-hover:scale-105 transition-transform duration-700 select-none">
                  {stat.value}
                </span>
                <span className="text-[10px] md:text-xs text-muted uppercase tracking-[0.5em] font-black group-hover:text-accent transition-colors duration-500">
                  {stat.label}
                </span>
              </div>
              <div className="mx-auto w-1.5 h-1.5 rounded-full bg-stroke group-hover:bg-accent group-hover:scale-150 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
