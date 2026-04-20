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
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative w-full max-w-5xl h-fit md:h-[min(850px,90vh)] bg-surface border border-white/10 rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl flex flex-col md:flex-row"
          >
            {/* Gallery Section */}
            <div className="w-full md:w-1/2 aspect-[16/11] md:aspect-auto md:h-full relative bg-bg">
              <div className="absolute inset-0 flex overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                {service.gallery.map((img, idx) => (
                  <div key={idx} className="min-w-full h-full snap-center">
                    <img
                      src={img}
                      alt={`${service.title} gallery ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              
              {/* Close Button - Floating on mobile */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white md:hidden"
              >
                ✕
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                {service.gallery.map((_, idx) => (
                  <div key={idx} className="w-1.5 h-1.5 rounded-full bg-white/40 border border-white/10" />
                ))}
              </div>
            </div>

            {/* Info Section */}
            <div className="flex-1 p-6 md:p-14 overflow-y-auto custom-scrollbar">
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
                  className="hidden md:flex w-10 h-10 rounded-full bg-white/5 border border-white/10 items-center justify-center text-white hover:bg-white/10 transition-colors"
                >
                  ✕
                </button>
              </div>

              <h2 className="text-4xl md:text-5xl font-display italic text-white mb-6 leading-tight">
                {service.title}
              </h2>

              <p className="text-muted text-base md:text-lg mb-10 leading-relaxed font-light">
                {service.description}
              </p>

              {/* Pricing & Features Grid */}
              <div className="grid grid-cols-1 gap-10 mb-12">
                {/* Pricing */}
                <div className="p-6 rounded-3xl bg-white/5 border border-white/5">
                  <div className="text-xs text-muted uppercase tracking-[0.2em] mb-2 font-medium">Starting Price</div>
                  <div className="text-4xl font-display italic text-accent">{service.price}</div>
                  <div className="text-[10px] text-muted mt-2 tracking-wide">*Customization charges extra</div>
                </div>

                {/* Features */}
                <div>
                  <div className="text-xs text-muted uppercase tracking-[0.2em] mb-6 font-medium">What's Included</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="text-sm text-text-primary/80 font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Booking Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20am%20interested%20in%20your%20${service.title}`}
                  target="_blank"
                  className="flex-1 py-5 rounded-full bg-green-600 text-white font-bold text-sm tracking-tight flex items-center justify-center gap-3 hover:bg-green-700 transition-colors"
                >
                  💬 WhatsApp to Book
                </a>
                <a
                  href="tel:+917483343412"
                  className="flex-1 py-5 rounded-full bg-white text-bg font-bold text-sm tracking-tight flex items-center justify-center gap-3 hover:bg-surface transition-colors"
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
