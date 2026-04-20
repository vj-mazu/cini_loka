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
  return (
    <AnimatePresence>
      {service && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/90 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="relative w-full md:max-w-5xl h-full md:h-[min(850px,90vh)] bg-surface md:border border-white/10 md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Gallery Section */}
            <div className="w-full md:w-1/2 h-[45vh] md:h-full flex-shrink-0 relative bg-bg">
              <div className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {service.gallery.map((item, idx) => (
                  <div key={idx} className="min-w-full h-full snap-center">
                    {item.endsWith(".mp4") ? (
                      <video
                        src={item}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                      />
                    ) : (
                      <img
                        src={item}
                        alt={`${service.title} gallery ${idx}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>
              
              {/* Close Button - Floating on mobile */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white md:hidden shadow-2xl"
              >
                <span className="text-xl">✕</span>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {service.gallery.map((_, idx) => (
                  <div key={idx} className="w-2 h-2 rounded-full bg-white/40 border border-white/10 shadow-sm" />
                ))}
              </div>

              {/* Gradient Overlay for text readability on image */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface via-transparent to-transparent md:hidden" />
            </div>

            {/* Info Section */}
            <div className="flex-1 p-6 md:p-14 overflow-y-auto custom-scrollbar bg-surface flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-4">
                  <span className="text-4xl">{service.icon}</span>
                  <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                    <span className="text-accent text-[10px] font-black uppercase tracking-widest">
                      Premium Service
                    </span>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="hidden md:flex w-12 h-12 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  ✕
                </button>
              </div>

              <h2 className="text-3xl md:text-5xl font-display italic text-white mb-6 leading-tight tracking-tighter">
                {service.title}
              </h2>

              <p className="text-muted text-sm md:text-lg mb-10 leading-relaxed font-light">
                {service.description}
              </p>

              {/* Pricing & Features Grid */}
              <div className="grid grid-cols-1 gap-8 mb-12">
                {/* Starting Price */}
                <div className="p-6 rounded-[2.5rem] bg-white/[0.03] border border-white/5 flex flex-col items-center text-center">
                  <div className="text-[10px] text-muted uppercase tracking-[0.3em] mb-2 font-black">Starting Price</div>
                  <div className="text-5xl font-display italic text-accent leading-none mb-2">{service.price}</div>
                  <div className="text-[10px] text-muted tracking-wide opacity-50 uppercase font-bold">Standard Entry</div>
                </div>

                {/* Specific Packages (if available) */}
                {service.packages && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.packages.map((pkg, i) => (
                      <div key={i} className="p-5 rounded-3xl bg-accent/5 border border-accent/10 flex flex-col items-center">
                        <span className="text-[10px] text-accent/70 uppercase tracking-widest font-black mb-1">{pkg.name}</span>
                        <span className="text-2xl font-display italic text-white">{pkg.rate}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Features */}
                <div className="pt-4">
                  <div className="text-[10px] text-muted uppercase tracking-[0.3em] mb-6 font-black pl-2">Experience Highlights</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-4 p-3 rounded-2xl bg-white/[0.02] border border-white/[0.05]">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                        <span className="text-xs md:text-sm text-text-primary/90 font-medium tracking-tight">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Actions */}
              <div className="flex flex-col sm:flex-row gap-4 mt-auto pt-8">
                <a
                  href={`https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20am%20interested%20in%20your%20${service.title}`}
                  target="_blank"
                  className="flex-1 py-5 rounded-full bg-[#25D366] text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-green-900/20"
                >
                  💬 WhatsApp Booking
                </a>
                <a
                  href="tel:+917483343412"
                  className="flex-1 py-5 rounded-full bg-white text-bg font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-white/90 active:scale-95 transition-all shadow-xl"
                >
                  📞 Call Now
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
