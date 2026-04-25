import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const PROJECTS = [
  {
    title: "Anniversary Celebrations",
    category: "Events",
    image: "/assets/cini-1.jpg",
    span: "md:col-span-7",
    serviceId: "anniversary"
  },
  {
    title: "Matured Function",
    category: "Themed Design",
    image: "/assets/user_images/image1.jpg",
    span: "md:col-span-5",
    serviceId: "themed"
  },
  {
    title: "Kids Birthday Setup",
    category: "Kids Events",
    image: "/assets/user_images/image6.jpg",
    span: "md:col-span-5",
    serviceId: "birthday"
  },
  {
    title: "Birthday Setup",
    category: "Decorations",
    image: "/assets/user_images/image4.jpg",
    span: "md:col-span-7",
    serviceId: "birthday"
  },
  {
    title: "Couple Birthday Room",
    category: "Celebrations",
    image: "/assets/cini-2.jpg",
    span: "md:col-span-6",
    serviceId: "birthday"
  },
  {
    title: "Private Theater Experience",
    category: "Cinema",
    image: "/assets/cini-3.jpg",
    span: "md:col-span-6",
    serviceId: "movie"
  }
];

const ProjectCard = ({ project, idx, onServiceSelect }: { project: any; idx: number; onServiceSelect: any }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.8,
        delay: idx * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      onClick={() => onServiceSelect(project.serviceId)}
      className={`${project.span} group relative overflow-hidden rounded-[3rem] bg-surface border border-white/5 min-h-[450px] md:min-h-[550px] cursor-pointer shadow-2xl transition-all duration-700 hover:border-white/20 hover:shadow-accent/5`}
    >
      <motion.img
        src={project.image}
        alt={project.title}
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
      />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/40 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-700" />

      {/* Card Content */}
      <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14 flex items-end justify-between">
        <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out">
          <span className="text-[10px] text-accent-light uppercase tracking-[0.5em] font-bold block mb-4 opacity-70">
            {project.category}
          </span>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-display italic text-white tracking-tighter leading-[1.1] mb-2 pb-2">
            {project.title}
          </h3>
        </div>
        
        <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center glass-dark opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0 shadow-lg">
          <span className="text-white text-2xl group-hover:scale-110 transition-transform duration-500">↗</span>
        </div>
      </div>

      <div className="absolute top-0 left-14 right-14 h-[1px] gold-gradient opacity-20 group-hover:opacity-100 transition-opacity duration-700" />
    </motion.div>
  );
};

const SelectedWorks: React.FC<{ onServiceSelect: (id: string | null) => void }> = ({ onServiceSelect }) => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="works" className="bg-bg py-24 md:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-[1.5px] bg-accent/30" />
              <span className="text-[11px] text-accent tracking-[0.6em] font-bold uppercase opacity-80">
                Visual Journey
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[1.1] tracking-tighter pb-8">
              <span className="text-white/20">Our</span> <span className="gold-gradient">Space</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-xl mt-10 leading-relaxed font-light">
              Step into Raichur's most exclusive venue. From grand celebrations to 
              intimate cinema nights, our space adapts to your every mood.
            </p>
          </div>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={idx} project={project} idx={idx} onServiceSelect={onServiceSelect} />
          ))}
        </div>

        {/* Final Touch: Explore All Guest Feedback Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-20 md:mt-32 p-12 md:p-24 rounded-[4rem] glass-dark border border-white/5 relative overflow-hidden flex flex-col items-center text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-accent/10 blur-[120px] rounded-full" />
          
          <div className="relative z-10 max-w-3xl">
            <span className="text-[11px] text-accent font-bold uppercase tracking-[0.6em] mb-8 block opacity-80">Voices of Luxury</span>
            <h3 className="text-5xl md:text-8xl font-display italic text-white mb-10 tracking-tighter leading-none">
              Explore All <span className="gold-gradient">Guest</span> Feedback
            </h3>
            <p className="text-text-secondary text-lg md:text-xl font-light leading-relaxed mb-16 opacity-70">
              Our guests' experiences are our greatest pride. Read authentic reviews 
              and see why we are Raichur's top-rated destination for celebrations.
            </p>
            
            <motion.a
              href="https://maps.app.goo.gl/uN7Q9kHv3gDmn8jw9"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-6 px-12 py-6 rounded-full gold-gradient text-white text-xs font-bold uppercase tracking-[0.3em] shadow-2xl shadow-accent/20"
            >
              Read Reviews on Google Maps
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-2xl flex items-center justify-center p-6 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-6xl w-full max-h-[90vh] glass rounded-[3rem] overflow-hidden shadow-2xl p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={PROJECTS[lightbox].image}
                alt={PROJECTS[lightbox].title}
                className="w-full h-full object-contain rounded-[2.8rem]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-12 md:p-16 bg-gradient-to-t from-bg/95 via-bg/40 to-transparent">
                <span className="text-[11px] text-accent uppercase tracking-[0.6em] font-black block mb-4">
                  {PROJECTS[lightbox].category}
                </span>
                <h3 className="text-5xl md:text-7xl font-display italic text-white mb-4 tracking-tighter">
                  {PROJECTS[lightbox].title}
                </h3>
              </div>
              
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-8 right-8 w-14 h-14 rounded-full glass hover:bg-white/10 flex items-center justify-center text-white text-3xl transition-all duration-300 transform hover:rotate-90"
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
