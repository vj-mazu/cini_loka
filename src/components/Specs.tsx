import React from 'react';
import { Maximize, Music, Monitor, Wind, Tv, Armchair } from 'lucide-react';
import { motion } from 'framer-motion';

const specs = [
  { icon: <Maximize size={24} />, label: "Screen", value: "150 INCH", detail: "4K Ultra HD Cinematic Screen" },
  { icon: <Music size={24} />, label: "Audio", value: "DOLBY ATMOS", detail: "Immersive Surround Sound System" },
  { icon: <Monitor size={24} />, label: "Visuals", value: "4K ULTRA HD", detail: "Crystal-clear HDR Picture" },
  { icon: <Wind size={24} />, label: "Comfort", value: "FULL AC", detail: "100% Private Air-Conditioned" },
  { icon: <Tv size={24} />, label: "Content", value: "ALL OTT", detail: "Netflix, Prime, Hotstar & More" },
  { icon: <Armchair size={24} />, label: "Seating", value: "LUXURY SOFAS", detail: "Premium Luxury Sofa Seating" },
];

const Specs: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-5 mb-16 md:mb-20"
        >
          <div className="w-16 h-[1.5px] bg-accent/30" />
          <span className="text-[11px] text-accent tracking-[0.6em] font-bold uppercase opacity-80">
            Theatre Specifications
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-start gap-4 p-8 md:p-10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-700 group relative"
            >
              <div className="text-accent/60 group-hover:text-accent transition-colors duration-500 group-hover:scale-110 transform">
                {spec.icon}
              </div>
              <div className="mt-4">
                <span className="text-muted font-display italic text-xs uppercase tracking-[0.2em] block mb-2 opacity-60">{spec.label}</span>
                <p className="text-xl md:text-2xl font-display italic text-white tracking-tight uppercase leading-tight font-bold group-hover:text-accent-light transition-colors">
                  {spec.value}
                </p>
                <span className="text-text-secondary text-[10px] uppercase tracking-widest block mt-3 leading-relaxed opacity-40 group-hover:opacity-60 transition-opacity">
                  {spec.detail}
                </span>
              </div>
              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specs;
