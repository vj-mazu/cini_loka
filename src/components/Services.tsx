import React, { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "movie",
    icon: "🎬",
    title: "Private Movie Screenings",
    description: "Enjoy your favorite movies or personal videos in our cozy chair environment with premium surround sound. Perfect for couples and families.",
    price: "₹500",
    gallery: [
      "/assets/ai-movie-1.png",
      "/assets/cini-1.jpg",
      "/assets/cini-2.jpg",
      "/assets/cini-3.jpg",
      "/assets/cini-4.jpg"
    ],
    features: ["4K HDR Projection", "7.1 Atmos Surround", "Premium Recliner Seating", "Fully Air Conditioned"],
    packages: [
      { name: "Couple Room", rate: "₹800/hr" },
      { name: "Family Room", rate: "₹1,000/hr" }
    ]
  },
  {
    id: "birthday",
    icon: "🎂",
    title: "Birthday Celebrations",
    description: "Create unforgettable birthday memories with our customizable decor. Pricing starts from ₹500.",
    price: "₹500",
    gallery: [
      "/assets/venue-video-1.mp4",
      "/assets/venue-video-2.mp4",
      "/assets/bday-custom-1.jpg",
      "/assets/bday-custom-2.jpg",
      "/assets/cini-2.jpg",
      "/assets/cini-4.jpg"
    ],
    features: ["Custom Decor Packages", "Ambient Lighting Controls", "Party Music System", "Outside Food Allowed"],
  },
  {
    id: "anniversary",
    icon: "💍",
    title: "Anniversary & Weddings",
    description: "Celebrate your love story with elegant romantic setups. Exclusive themes available.",
    price: "₹500",
    gallery: [
      "/assets/anni-custom-1.png",
      "/assets/anni-custom-2.jpg",
      "/assets/anni-custom-3.png",
      "/assets/ai-anniversary-1.png"
    ],
    features: ["Romantic Floral Decor", "Personalized Welcome Screen", "Private Dining Setup", "Professional Photography Support"],
  },
  {
    id: "corporate",
    icon: "🏢",
    title: "Corporate Events",
    description: "Professional meetings and team celebrations in a sophisticated venue.",
    price: "₹500",
    gallery: ["/assets/cini-4.jpg", "/assets/cini-1.jpg", "/assets/cini-3.jpg"],
    features: ["Presentation Equipment", "High-Speed Wifi", "Refreshment Support", "Flexible Seating Layouts"],
  },
  {
    id: "themed",
    icon: "🎨",
    title: "Themed Party Design",
    description: "Bespoke themed experiences tailored to your vision.",
    price: "₹500",
    gallery: ["/assets/cini-1.jpg", "/assets/cini-4.jpg", "/assets/cini-2.jpg"],
    features: ["Expert Consultation", "Custom Backdrop Design", "Theme-based Lighting"],
  },
  {
    id: "kids",
    icon: "👶",
    title: "Kids-Friendly Experiences",
    description: "A safe, fun, and beautifully decorated space for children's parties.",
    price: "₹500",
    gallery: ["/assets/cini-2.jpg", "/assets/bday-custom-2.jpg", "/assets/cini-1.jpg"],
    features: ["Child-Safe Environment", "Colorful Themed Decor", "Cartoon Screenings"],
  },
];

import ServiceModal from "./ServiceModal";

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<typeof SERVICES[0] | null>(null);

  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header content... */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-12 md:mb-16"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1.5px] bg-stroke/50" />
              <span className="text-[10px] text-muted uppercase tracking-[0.4em] font-black">
                What We Offer
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display italic text-text-primary leading-[0.9] tracking-tighter">
              Our <span className="text-white/30">Services</span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-lg mt-8 leading-relaxed font-light">
              We provide end-to-end event experiences — from private screenings to
              lavish decor — crafted for your special moments.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: idx * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              onClick={() => setSelectedService(service)}
              className="group relative bg-surface/30 hover:bg-surface border border-stroke/50 hover:border-stroke rounded-[2.5rem] p-10 md:p-12 transition-all duration-700 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-5xl mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-2xl md:text-3xl font-display italic mb-5 tracking-tight leading-tight transition-colors duration-500 ${service.title === "Birthday Celebrations" ? "text-accent" : "text-text-primary group-hover:text-white"}`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted text-sm md:text-base leading-relaxed font-light">
                {service.description}
              </p>

              {/* Hover arrow */}
              <div className="mt-8 flex items-center gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span className="text-[10px] text-accent font-black tracking-[0.25em] uppercase">
                  View Details
                </span>
                <span className="text-accent text-lg">→</span>
              </div>

              {/* Accent line on hover */}
              <div className="absolute top-0 left-10 right-10 h-[2px] accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-green-600" />
            <span className="relative z-10 text-white text-sm font-bold tracking-tight flex items-center gap-3">
              💬 WhatsApp Us
            </span>
          </a>

          <a
            href="tel:+917483343412"
            className="group inline-flex items-center gap-4 px-10 py-5 rounded-full border border-stroke bg-bg/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:bg-surface active:scale-95"
          >
            <span className="text-text-primary text-sm font-bold tracking-tight flex items-center gap-3">
              📞 Call Now
            </span>
          </a>
        </motion.div>
      </div>

      {/* Service Details Modal */}
      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </section>
  );
};

export default Services;
