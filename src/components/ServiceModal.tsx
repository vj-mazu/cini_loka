import React from "react";
import { motion, AnimatePresence } from "framer-motion";

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
  const constraintsRef = React.useRef(null);

  // Reset index when service changes
  React.useEffect(() => {
    setCurrentIndex(0);
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
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full md:max-w-6xl h-full md:h-[85vh] glass md:border border-white/10 md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Gallery Section */}
            <div 
              ref={constraintsRef}
              className="w-full md:w-1/2 h-[45vh] md:h-full flex-shrink-0 relative overflow-hidden rounded-b-[3rem] md:rounded-l-[3.8rem] md:rounded-r-none"
            >
              <motion.div 
                className="flex h-full cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={constraintsRef}
                dragElastic={0.1}
                dragMomentum={false}
                onDragEnd={(_, info) => {
                  const threshold = 50;
                  const velocityThreshold = 500;
                  
                  if (info.offset.x < -threshold || info.velocity.x < -velocityThreshold) {
                    if (currentIndex < service.gallery.length - 1) setCurrentIndex(prev => prev + 1);
                  } else if (info.offset.x > threshold || info.velocity.x > velocityThreshold) {
                    if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
                  }
                }}
                animate={{ x: `-${currentIndex * 100}%` }}
                transition={{ type: "spring", damping: 30, stiffness: 200 }}
              >
                {service.gallery.map((item, idx) => (
                  <div key={idx} className="min-w-full h-full relative">
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
                      <img
                        src={item}
                        alt={`${service.title} gallery ${idx}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    )}
                  </div>
                ))}
              </motion.div>

              {/* Side Navigation Overlays */}
              <div className="absolute inset-y-0 left-0 w-1/4 z-10 cursor-pointer" onClick={(e) => {
                e.stopPropagation();
                if (currentIndex > 0) setCurrentIndex(prev => prev - 1);
              }} />
              <div className="absolute inset-y-0 right-0 w-1/4 z-10 cursor-pointer" onClick={(e) => {
                e.stopPropagation();
                if (currentIndex < service.gallery.length - 1) setCurrentIndex(prev => prev + 1);
              }} />
              
              <button
                onClick={onClose}
                className="absolute top-8 right-8 z-30 w-14 h-14 rounded-full glass hover:bg-white/10 flex items-center justify-center text-white md:hidden shadow-2xl transition-all duration-300"
              >
                <span className="text-2xl">✕</span>
              </button>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                {service.gallery.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 transition-all duration-500 rounded-full cursor-pointer p-0 border-none outline-none ${
                      idx === currentIndex ? "w-8 bg-accent shadow-[0_0_15px_rgba(226,194,133,0.5)]" : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`} 
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent md:hidden" />
            </div>

            {/* Info Section */}
            <div className="flex-1 p-8 md:p-16 overflow-y-auto custom-scrollbar flex flex-col">
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-5">
                  <span className="text-5xl">{service.icon}</span>
                  <div className="px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-accent text-[11px] font-bold uppercase tracking-[0.4em]">
                      Signature Level
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="hidden md:flex w-14 h-14 rounded-full glass hover:bg-white/10 items-center justify-center text-white transition-all duration-300 transform hover:rotate-90"
                >
                  ✕
                </button>
              </div>

              <h2 className="text-4xl md:text-6xl font-display italic leading-tight tracking-tighter mb-8 gold-gradient">
                {service.title}
              </h2>

              <p className="text-text-secondary text-base md:text-xl mb-12 leading-relaxed font-light">
                {service.description}
              </p>

              {/* Pricing & Features Grid */}
              <div className="grid grid-cols-1 gap-12 mb-12">
                <div className="p-10 rounded-[3rem] bg-white/[0.04] border border-white/5 flex flex-col items-center text-center shadow-xl">
                  <div className="text-[10px] text-accent uppercase tracking-[0.6em] mb-4 font-black">Experience Baseline</div>
                  <div className="text-6xl md:text-7xl font-display italic text-white leading-none mb-4">{service.price}</div>
                  <div className="text-[11px] text-text-secondary tracking-widest uppercase font-medium opacity-50">Base Package Rates</div>
                </div>

                {service.packages && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {service.packages.map((pkg, i) => (
                      <div key={i} className="p-8 rounded-[2.5rem] glass hover:bg-white/[0.08] transition-all duration-500 border border-white/5 group">
                        <span className="text-[10px] text-accent uppercase tracking-[0.5em] font-black block mb-2">{pkg.name}</span>
                        <span className="text-3xl font-display italic text-white group-hover:gold-gradient transition-all duration-500">{pkg.rate}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="pt-4">
                  <div className="flex items-center gap-5 mb-10">
                    <div className="w-12 h-[1px] gold-gradient" />
                    <span className="text-[11px] text-white uppercase tracking-[0.6em] font-bold">Experience Highlights</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-5 group">
                        <div className="w-2 h-2 rounded-full gold-gradient shadow-[0_0_15px_rgba(226,194,133,0.5)] group-hover:scale-125 transition-transform duration-500" />
                        <span className="text-sm md:text-base text-text-secondary group-hover:text-text-primary transition-colors duration-500 font-light tracking-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Actions */}
              <div className="flex flex-col sm:flex-row gap-6 mt-auto pt-10">
                <a
                  href={`https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20am%20interested%20in%20your%20${service.title}`}
                  target="_blank"
                  className="flex-1 py-6 rounded-full gold-gradient text-white font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-500 hover:scale-[1.02] shadow-2xl active:scale-95"
                >
                  💬 Book Experience
                </a>
                <a
                  href="tel:+917483343412"
                  className="flex-1 py-6 rounded-full glass text-white font-bold text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all duration-500 hover:bg-white/10 active:scale-95 shadow-xl"
                >
                  📞 Direct Inquiries
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;
