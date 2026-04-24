import React from "react";
import { motion } from "framer-motion";

const ENTRIES = [
  {
    title: "Art of Surprise: Planning Birthdays",
    date: "APR 20, 2026",
    readTime: "5 MIN READ",
    image: "/assets/cini-1.jpg"
  },
  {
    title: "Cinematic Luxury in raichur city",
    date: "APR 15, 2026",
    readTime: "6 MIN READ",
    image: "/assets/user_images/image2.jpg"
  },
  {
    title: "The Power of Atmosphere & Decor",
    date: "APR 10, 2026",
    readTime: "4 MIN READ",
    image: "/assets/cini-3.jpg"
  },
  {
    title: "Creating Intimate Moments at CINI",
    date: "APR 05, 2026",
    readTime: "7 MIN READ",
    image: "/assets/cini-4.jpg"
  }
];

const Journal: React.FC = () => {
  return (
    <section className="bg-bg py-24 md:py-40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-28"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1.5px] bg-stroke/50" />
              <span className="text-[10px] text-muted uppercase tracking-[0.4em] font-black">Stories</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display text-text-primary leading-[0.9] tracking-tighter">
              Journal & <span className="italic text-white/30">Thoughts</span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-lg mt-10 leading-relaxed font-light">
              Diving deep into the craft of event curation, venue design, 
              and the philosophy of celebration.
            </p>
          </div>
          
          <button className="hidden md:inline-flex px-10 py-4 rounded-full border border-stroke text-[10px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-bg transition-all duration-500 ease-[0.22, 1, 0.36, 1]">
            VIEW ALL STORIES
          </button>
        </motion.div>

        {/* Entries List */}
        <div className="flex flex-col gap-6">
          {ENTRIES.map((entry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group flex flex-col sm:flex-row items-center gap-8 p-5 md:p-6 bg-surface/20 hover:bg-surface border border-stroke rounded-[3rem] sm:rounded-full transition-all duration-700 ease-[0.22, 1, 0.36, 1] cursor-pointer"
            >
              {/* Image Pill */}
              <div className="w-full sm:w-48 h-32 md:h-28 overflow-hidden rounded-[2rem] sm:rounded-full border border-stroke/50">
                <img 
                  src={entry.image} 
                  alt={entry.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-115" 
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-6 px-6 pb-6 sm:pb-0 w-full">
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl md:text-3xl font-display italic text-text-primary group-hover:text-white transition-colors duration-500 tracking-tight leading-none">
                    {entry.title}
                  </h3>
                  <div className="flex items-center gap-5 text-[9px] text-muted font-black tracking-[0.25em] uppercase">
                    <span className="text-accent/60">{entry.date}</span>
                    <span className="w-1 h-1 bg-stroke rounded-full" />
                    <span>{entry.readTime}</span>
                  </div>
                </div>

                <div className="hidden lg:flex w-16 h-16 rounded-full border border-stroke items-center justify-center bg-bg group-hover:bg-white group-hover:border-white transition-all duration-700 ease-[0.22, 1, 0.36, 1] shadow-xl">
                  <span className="text-2xl group-hover:text-bg group-hover:translate-x-1 transition-all duration-500">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
