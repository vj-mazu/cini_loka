import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PROJECTS = [
  {
    title: "Anniversary Celebrations",
    category: "Events",
    image: "/assets/cini-1.jpg",
    span: "md:col-span-7",
  },
  {
    title: "Private Theater",
    category: "Screenings",
    image: "/assets/cini-2.jpg",
    span: "md:col-span-5",
  },
  {
    title: "Birthday Setup",
    category: "Decorations",
    image: "/assets/cini-3.jpg",
    span: "md:col-span-5",
  },
  {
    title: "Grand Themed Decor",
    category: "Design",
    image: "/assets/cini-4.jpg",
    span: "md:col-span-7",
  },
];

const SelectedWorks: React.FC = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12 md:mb-20"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1.5px] bg-stroke/50" />
              <span className="text-[10px] text-muted uppercase tracking-[0.4em] font-black">
                Gallery
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display italic text-text-primary mb-6 leading-[0.9] tracking-tighter">
              Our <span className="text-white/30">Space</span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-lg leading-relaxed font-light">
              A glimpse into the world of CINI LOKA — where every celebration
              becomes a masterpiece.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setLightbox(idx)}
              className={`${project.span} group relative overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-surface border border-stroke/50 min-h-[380px] md:min-h-[500px] cursor-pointer`}
            >
              {/* Full-color image */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
              />

              {/* Subtle bottom gradient only — keeps image visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

              {/* Card label at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 flex items-end justify-between">
                <div>
                  <span className="text-[9px] text-white/60 uppercase tracking-[0.35em] font-black block mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-display italic text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                  <span className="text-white text-xl">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-5xl w-full max-h-[85vh] rounded-3xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PROJECTS[lightbox].image}
                alt={PROJECTS[lightbox].title}
                className="w-full h-full object-contain rounded-3xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-3xl md:text-5xl font-display italic text-white mb-3">
                  {PROJECTS[lightbox].title}
                </h3>
                <span className="text-xs text-white/60 uppercase tracking-[0.3em] font-black">
                  {PROJECTS[lightbox].category}
                </span>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white text-2xl hover:bg-white/20 transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default SelectedWorks;
