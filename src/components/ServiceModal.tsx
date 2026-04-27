import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Magnetic from "./Magnetic";

interface ServiceModalProps {
  service: {
    id: string;
    icon: string;
    title: string;
    description: string;
    price: string;
    gallery: string[];
    features: string[];
    packages?: { name: string; rate: string }[];
  } | null;
  onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const constraintsRef = React.useRef<HTMLDivElement>(null);

  // Reset index and scroll position when service changes
  React.useEffect(() => {
    setCurrentIndex(0);
    if (constraintsRef.current) {
      constraintsRef.current.scrollLeft = 0;
    }
  }, [service?.id]);

  // Body Scroll Lock
  React.useEffect(() => {
    if (service) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [service]);

  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-0 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/95 backdrop-blur-[20px]"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-7xl h-[92vh] md:h-[85vh] lg:h-[82vh] glass rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gallery Section */}
            <div 
              className="w-full md:w-1/2 h-[45vh] md:h-full flex-shrink-0 relative group/gallery"
            >
              {service.gallery.length > 0 ? (
                <>
                  <div 
                    ref={constraintsRef}
                    className="flex h-full overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar"
                    onScroll={(e) => {
                      const target = e.currentTarget;
                      const index = Math.round(target.scrollLeft / target.clientWidth);
                      if (index !== currentIndex) setCurrentIndex(index);
                    }}
                  >
                    {service.gallery.map((item, idx) => (
                      <div key={idx} className="min-w-full h-full snap-start snap-always relative flex-shrink-0">
                        {item.endsWith(".mp4") ? (
                          <video
                            src={item}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                          />
                        ) : (
                          <div className="relative w-full h-full bg-white/[0.03] overflow-hidden">
                            <motion.img
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.6 }}
                              src={item}
                              alt={`${service.title} gallery ${idx}`}
                              className="w-full h-full object-cover select-none transition-opacity duration-700"
                              loading={idx === 0 ? "eager" : "lazy"}
                              {...(idx === 0 ? { fetchpriority: "high" } : {})}
                              draggable="false"
                              onLoad={(e) => {
                                (e.target as HTMLImageElement).style.opacity = "1";
                                (e.target as HTMLImageElement).parentElement?.querySelector('.animate-shimmer')?.remove();
                              }}
                            />
                            {/* Subtle Pulse Loader */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full animate-shimmer" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Navigation Arrows (Visible on hover) */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-6 opacity-0 group-hover/gallery:opacity-100 transition-opacity duration-500">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const container = constraintsRef.current;
                        if (container) container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
                      }}
                      className={`w-12 h-12 rounded-full glass flex items-center justify-center text-white pointer-events-auto transition-transform hover:scale-110 active:scale-95 ${currentIndex === 0 ? "opacity-20 cursor-not-allowed" : "opacity-100"}`}
                    >
                      ←
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        const container = constraintsRef.current;
                        if (container) container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
                      }}
                      className={`w-12 h-12 rounded-full glass flex items-center justify-center text-white pointer-events-auto transition-transform hover:scale-110 active:scale-95 ${currentIndex === service.gallery.length - 1 ? "opacity-20 cursor-not-allowed" : "opacity-100"}`}
                    >
                      →
                    </button>
                  </div>
                  
                  {/* Pagination Dots */}
                  <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-2 z-30 pointer-events-none">
                    {service.gallery.map((_, idx) => (
                      <div 
                        key={idx}
                        className={`transition-all duration-500 rounded-full h-1 ${
                          idx === currentIndex 
                            ? "w-10 bg-accent shadow-[0_0_15px_rgba(226,194,133,0.5)]" 
                            : "w-2 bg-white/20"
                        }`} 
                      />
                    ))}
                  </div>

                  {/* Swipe Hint */}
                  {service.gallery.length > 1 && (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: currentIndex === 0 ? 1 : 0 }}
                      className="absolute bottom-16 left-1/2 -translate-x-1/2 text-[10px] text-white/40 uppercase tracking-[0.4em] font-bold pointer-events-none"
                    >
                      Swipe to Explore
                    </motion.div>
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-bg via-bg/95 to-bg/90 overflow-hidden border-r border-white/5">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2" />
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative z-10 max-w-md px-6"
                  >
                    <span className="text-5xl text-accent/40 block mb-6 font-display italic">❝</span>
                    <p className="text-2xl md:text-3xl lg:text-4xl font-display italic leading-relaxed tracking-tight text-white/90 mb-6">
                      Where Every <span className="gold-gradient">Frame</span><br/> Becomes a Memory.
                    </p>
                    <span className="text-5xl text-accent/40 block mt-2 font-display italic">❞</span>
                    <div className="w-16 h-[1px] bg-accent/30 mx-auto mt-10" />
                    <span className="block text-[10px] uppercase tracking-[0.4em] text-accent mt-6 font-bold">
                      {service.title}
                    </span>
                  </motion.div>
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent md:hidden pointer-events-none" />
            </div>

            {/* Info Section */}
            <div className="flex-1 p-6 md:p-8 lg:p-12 overflow-hidden h-full">
              <div className="h-full flex flex-col md:flex-row gap-8 lg:gap-12">
                
                {/* Left Side: Basic Info */}
                <div className="w-full md:w-[42%] flex flex-col items-start text-left min-h-0">
                  <div className="flex items-center gap-3 mb-3 md:mb-4 flex-shrink-0">
                    <span className="text-xl md:text-2xl">{service.icon}</span>
                    <div className="px-3 py-1 rounded-full bg-accent/5 border border-accent/10">
                      <span className="text-accent text-[9px] font-bold uppercase tracking-[0.4em]">
                        Signature
                      </span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-display italic leading-tight tracking-tighter mb-4 md:mb-6 gold-gradient text-left w-full flex-shrink-0">
                    {service.title}
                  </h2>

                  <div className="overflow-y-auto custom-scrollbar-hidden mb-6 flex-grow">
                    <p className="text-text-secondary text-sm md:text-base lg:text-lg leading-relaxed font-light opacity-90 text-left w-full">
                      {service.description}
                    </p>
                  </div>

                  {/* Desktop Booking Actions */}
                  <div className="hidden md:flex flex-col gap-2.5 w-full mt-auto pt-4 flex-shrink-0">
                    <Magnetic>
                      <a
                        href={`https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20am%20interested%20in%20your%20${service.title}`}
                        target="_blank"
                        className="w-full py-3.5 rounded-full gold-gradient text-white font-bold text-[9px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 shadow-xl hover:scale-[1.02] transition-transform"
                      >
                        💬 Book Experience
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a
                        href="tel:+917483343412"
                        className="w-full py-3.5 rounded-full glass text-white font-bold text-[9px] uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
                      >
                        📞 Direct Inquiries
                      </a>
                    </Magnetic>
                  </div>
                </div>

                {/* Right Side: Compact Pricing & Features */}
                <div className="w-full md:w-[58%] flex flex-col overflow-y-auto custom-scrollbar md:pr-2">
                  <div className="p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 flex flex-col items-center text-center mb-6 flex-shrink-0">
                    <span className="text-[9px] text-accent uppercase tracking-[0.6em] mb-2 font-bold">Base Rate</span>
                    <div className="text-4xl md:text-5xl lg:text-6xl font-display italic text-white leading-none">{service.price}</div>
                  </div>

                  {service.packages && (
                    <div className="grid grid-cols-2 gap-2.5 mb-5">
                      {service.packages.map((pkg, i) => (
                        <div key={i} className="p-3.5 rounded-[1.2rem] glass border border-white/5 text-center group hover:bg-white/[0.05] transition-all">
                          <span className="text-[8px] text-accent uppercase tracking-[0.3em] font-black block mb-1 opacity-60">{pkg.name}</span>
                          <span className="text-base md:text-lg font-display italic text-white leading-none group-hover:gold-gradient transition-all">{pkg.rate}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mb-6 flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-[1px] bg-accent/30" />
                      <span className="text-[10px] text-white/50 uppercase tracking-[0.5em] font-bold">Highlights</span>
                    </div>
                    <div className="grid grid-cols-1 gap-y-4">
                      {service.features.map((feat, i) => (
                        <div key={i} className="flex items-start gap-4">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent/60 mt-1.5 flex-shrink-0" />
                          <span className="text-sm md:text-base lg:text-lg text-text-primary/90 font-light tracking-tight leading-relaxed">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile Booking Actions */}
                  <div className="flex flex-col gap-2.5 md:hidden pb-4">
                    <Magnetic>
                      <a
                        href={`https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20am%20interested%20in%20your%20${service.title}`}
                        target="_blank"
                        className="w-full py-3.5 rounded-full gold-gradient text-white font-bold text-[9px] uppercase tracking-[0.3em] flex items-center justify-center gap-2"
                      >
                        💬 Book Now
                      </a>
                    </Magnetic>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 md:top-8 md:right-8 w-10 h-10 rounded-full glass hover:bg-white/10 flex items-center justify-center text-white transition-all transform hover:rotate-90 z-50"
                >
                  ✕
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
