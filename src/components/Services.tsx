import React from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "movie",
    icon: "🎬",
    title: "Private Movie Screenings",
    description: "Enjoy your favorite movies or personal videos in our cozy luxury sofa environment with premium surround sound. Perfect for couples and families.",
    price: "₹500",
    gallery: [],
    features: ["4K HDR Projection", "7.1 Atmos Surround", "Premium Luxury Sofa Seating", "Fully Air Conditioned"],
    packages: [
      { name: "Couple Room", rate: "₹1,000 / 3 hrs" },
      { name: "Family Room", rate: "₹1,300 / 3 hrs" },
      { name: "Birthday Special", rate: "Decor + Screening" }
    ]
  },
  {
    id: "birthday",
    icon: "🎂",
    title: "Birthday Celebrations",
    description: "Create unforgettable birthday memories with our customizable decor. Pricing starts from ₹500.",
    price: "₹500",
    gallery: [
      "/assets/user_images/image3.jpg",
      "/assets/user_images/image4.jpg",
      "/assets/user_images/image5.jpg",
      "/assets/venue-video-1.mp4",
      "/assets/venue-video-2.mp4",
      "/assets/bday-custom-1.jpg",
      "/assets/bday-custom-2.jpg",
      "/assets/cini-2.jpg",
      "/assets/cini-4.jpg"
    ],
    features: ["Custom Decor Packages", "Fog Entry", "Bubble Show Available", "Catering Available (20+ Plates)"],
    packages: [
      { name: "Couple Birthday", rate: "₹800" },
      { name: "Family Birthday", rate: "₹1,000" },
      { name: "Birthday + Movie", rate: "Special Rates" }
    ]
  },
  {
    id: "anniversary",
    icon: "💍",
    title: "Anniversary & Weddings",
    description: "Celebrate your love story with elegant romantic setups. Exclusive themes available.",
    price: "₹500",
    features: ["Fog Entry", "Bubble Show Available", "Catering Available (20+ Plates)", "Romantic Floral Decor"],
    gallery: [
      "/assets/ai-anniversary-1.png",
      "/assets/anni-custom-2.jpg",
      "/assets/ai-anniversary-3.png"
    ],
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
    description: "Bespoke themed experiences tailored to your vision. Specialized in Traditional Functions and elegant setups.",
    price: "₹500",
    gallery: [
      "/assets/user_images/image1.jpg",
      "/assets/user_images/image2.jpg",
      "/assets/cini-1.jpg",
      "/assets/cini-4.jpg",
      "/assets/cini-2.jpg"
    ],
    features: ["Fog Entry", "Bubble Show Available", "Catering Available (20+ Plates)", "Traditional Function Themes"],
  },
  {
    id: "kids",
    icon: "👶",
    title: "Kids-Friendly Experiences",
    description: "A safe, fun, and beautifully decorated space for children's parties.",
    price: "₹500",
    gallery: ["/assets/user_images/image6.jpg", "/assets/cini-2.jpg", "/assets/bday-custom-2.jpg"],
    features: ["Child-Safe Environment", "Colorful Themed Decor", "Cartoon Screenings"],
  },
];

import ServiceModal from "./ServiceModal";

interface ServicesProps {
  selectedServiceId: string | null;
  onServiceSelect: (id: string | null) => void;
}

const Services: React.FC<ServicesProps> = ({ selectedServiceId, onServiceSelect }) => {
  const selectedService = SERVICES.find(s => s.id === selectedServiceId) || null;

  return (
    <section id="services" className="bg-bg py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-24"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-[1.5px] bg-accent/30" />
              <span className="text-[11px] text-accent tracking-[0.6em] font-bold uppercase opacity-80">
                Bespoke Experiences
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[1.1] tracking-tighter pb-4">
              <span className="text-white/20">Our</span> <span className="gold-gradient">Services</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-xl mt-10 leading-relaxed font-light">
              Crafting immersive cinematic and event experiences in the heart of Raichur. 
              Every detail, tailored to your story.
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
              onClick={() => onServiceSelect(service.id)}
              className="group relative glass rounded-[3rem] p-10 md:p-14 transition-all duration-700 cursor-pointer hover:bg-white/[0.08] hover:border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[3rem]" />
              
              {/* Icon with float animation */}
              <div className="text-6xl mb-10 group-hover:scale-110 transition-transform duration-700 ease-out group-hover:animate-float">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className={`text-3xl md:text-4xl font-display italic mb-6 tracking-tight leading-tight transition-colors duration-500 text-text-primary group-hover:text-accent-light`}>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-text-secondary text-base leading-relaxed font-light mb-10 group-hover:text-text-primary/80 transition-colors">
                {service.description}
              </p>

              {/* Feature Tags - Subtle preview */}
              <div className="flex flex-wrap gap-2 mb-10">
                {service.features.slice(0, 2).map((feature, fidx) => (
                  <span key={fidx} className="text-[10px] text-muted border border-white/5 px-3 py-1 rounded-full uppercase tracking-tighter">
                    {feature}
                  </span>
                ))}
              </div>

              {/* Discover Link */}
              <div className="flex items-center gap-4 opacity-40 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all duration-700">
                <span className="text-[11px] text-accent font-bold tracking-[0.4em] uppercase">
                  Discover
                </span>
                <div className="w-8 h-[1px] bg-accent/50 group-hover:w-12 transition-all duration-700" />
              </div>

              {/* Top Accent Line */}
              <div className="absolute top-0 left-14 right-14 h-[2px] gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Premium CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <a
            href="https://wa.me/917483343412?text=Hi%20CINI%20LOKA%2C%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-center w-full sm:w-auto px-12 py-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105"
          >
            <span className="absolute inset-0 bg-[#25D366] opacity-90 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10 text-white text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-4">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp Support
            </span>
          </a>

          <a
            href="tel:+917483343412"
            className="group relative flex items-center justify-center w-full sm:w-auto px-12 py-6 rounded-full border border-white/10 glass-dark transition-all duration-500 hover:scale-105"
          >
            <span className="absolute inset-0 opacity-0 group-hover:opacity-20 accent-gradient transition-opacity rounded-full" />
            <span className="relative z-10 text-text-primary text-xs font-bold tracking-[0.2em] uppercase flex items-center gap-4">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.82 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Quick Inquiries
            </span>
          </a>
        </motion.div>
      </div>

      <ServiceModal 
        service={selectedService} 
        onClose={() => onServiceSelect(null)} 
      />
    </section>
  );
};

export default Services;
