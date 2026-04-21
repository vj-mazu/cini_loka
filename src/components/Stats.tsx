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
    <section className="bg-bg py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-30" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-16 md:gap-24 text-center">
          {STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col gap-10 relative"
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-16 h-[1px] gold-gradient opacity-20 group-hover:w-32 group-hover:opacity-100 transition-all duration-1000" />
              
              <div className="flex flex-col gap-6 relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                
                <span className="text-8xl md:text-9xl lg:text-[11rem] font-display italic gold-gradient tracking-tighter leading-[0.8] group-hover:scale-105 transition-transform duration-1000 select-none relative z-10">
                  {stat.value}
                </span>
                <span className="text-[11px] md:text-xs text-text-secondary uppercase tracking-[0.6em] font-bold group-hover:text-white group-hover:tracking-[0.8em] transition-all duration-700 relative z-10">
                  {stat.label}
                </span>
              </div>
              
              <div className="mx-auto w-2 h-2 rounded-full border border-white/10 group-hover:bg-accent group-hover:scale-150 transition-all duration-1000 shadow-[0_0_20px_rgba(226,194,133,0)] group-hover:shadow-[0_0_30px_rgba(226,194,133,0.6)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
