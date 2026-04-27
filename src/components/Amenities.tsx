import React from 'react';
import { Utensils, Book, Gift, PartyPopper, Star, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const amenities = [
  { 
    icon: <Utensils size={24} />, 
    title: "Outside Food Allowed", 
    desc: "Bring your own food & beverages — no restrictions" 
  },
  { 
    icon: <Star size={24} />, 
    title: "Birthday Props", 
    desc: "Themed props and accessories for your celebrations" 
  },
  { 
    icon: <Book size={24} />, 
    title: "Book Section", 
    desc: "A dedicated reading corner for waiting guests" 
  },
  { 
    icon: <Gift size={24} />, 
    title: "Free Basic Décor", 
    desc: "Complimentary decoration for all celebrations" 
  },
  { 
    icon: <PartyPopper size={24} />, 
    title: "Party Essentials", 
    desc: "Dance floor, balloons, LED lights & music system" 
  },
  { 
    icon: <Shield size={24} />, 
    title: "Elite Privacy", 
    desc: "100% exclusive access for your group only" 
  },
];

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 md:py-32 bg-bg relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24"
        >
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-[1.5px] bg-accent/30" />
            <span className="text-[11px] text-accent tracking-[0.6em] font-bold uppercase opacity-80">
              What's Included
            </span>
          </div>
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-display italic text-white tracking-tighter leading-[1.1]">
            In-Theatre <span className="gold-gradient">Amenities</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-6 p-10 md:p-12 rounded-[2.5rem] glass hover:bg-white/[0.06] transition-all duration-700 group relative overflow-hidden"
            >
              <div className="text-accent/60 group-hover:text-accent transition-all duration-500 group-hover:scale-110 transform mt-1">
                {item.icon}
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-display italic text-white tracking-tight leading-tight group-hover:text-accent-light transition-colors">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed font-light opacity-60 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </div>
              
              {/* Subtle hover background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute bottom-0 left-0 right-0 h-[2px] gold-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
