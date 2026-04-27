import { motion } from 'framer-motion';
import { Play, Camera } from 'lucide-react';

const reels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DHGY5AABc1J/?igsh=MThjMTV3bnh3aHRsag==",
    coverImage: "/assets/reel-cover.jpg",
    title: "Live Match Experience",
    views: "21.5K"
  }
];

export const InstagramReels = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-bg relative overflow-hidden border-t border-white/5">
      {/* Broad Aesthetic Highlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      
      {/* Decorative Background Text */}
      <div className="absolute top-20 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.02]">
        <h3 className="text-[200px] font-display text-text-primary whitespace-nowrap -ml-20 italic">
          INSTAGRAM FEED INSTAGRAM FEED
        </h3>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16 md:mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[1.5px] bg-accent/30" />
            <span className="text-accent font-sans text-[10px] uppercase tracking-[5px] font-bold flex items-center gap-2">
              <Camera size={14} /> @CineCentralRaichur
            </span>
            <div className="w-8 h-[1.5px] bg-accent/30" />
          </div>
          <h2 className="text-6xl md:text-8xl font-display italic text-text-primary leading-tight relative">
            Follow the <span className="gold-gradient">Experience</span>
          </h2>
          <p className="mt-8 text-text-secondary font-sans text-lg max-w-xl leading-relaxed font-light">
            Watch our latest reels to see how we turn ordinary moments into extraordinary cinematic memories.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <div className="w-full max-w-sm">
          {reels.map((reel, index) => (
            <motion.div
              key={reel.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: index * 0.1, type: "spring", bounce: 0.4 }}
              className="relative group"
            >
              <motion.a
                href={reel.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover="hover"
                className="relative block aspect-[9/16] rounded-[2.5rem] p-2 bg-white/5 glass shadow-[0_20px_50px_rgba(0,0,0,0.3)] ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_40px_80px_rgba(226,194,133,0.2)]"
              >
                {/* Dual Aesthetic Border */}
                <div className="absolute inset-0 rounded-[2.5rem] ring-2 ring-accent/20 group-hover:ring-accent transition-all duration-500" />
                
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                  <motion.img
                    src={reel.coverImage}
                    alt={reel.title}
                    className="w-full h-full object-cover contrast-[1.1] saturate-[1.1] transition-transform duration-[2s] group-hover:scale-110"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Instagram Icon Top Right */}
                  <div className="absolute top-6 right-6 text-white/80 group-hover:text-accent transition-colors duration-500">
                    <Camera size={20} />
                  </div>

                  {/* Play Button Center */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      variants={{
                        hover: { scale: 1.1, backgroundColor: "rgba(226,194,133,0.4)", borderColor: "rgba(226,194,133,0.8)" }
                      }}
                      className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 transition-all duration-500 shadow-2xl"
                    >
                      <Play size={20} className="ml-1 fill-white" />
                    </motion.div>
                  </div>

                  {/* Content Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-4 h-[1px] bg-accent" />
                      <span className="text-white/60 font-sans text-[10px] uppercase tracking-[2px] font-bold">
                        {reel.views} Views
                      </span>
                    </div>
                    <h3 className="text-white font-display italic text-2xl font-bold leading-tight group-hover:text-accent-light transition-colors duration-500">
                      {reel.title}
                    </h3>
                  </div>
                </div>
              </motion.a>
            </motion.div>
          ))}
          </div>
        </div>
        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-20 flex flex-col items-center"
        >
          <a
            href="https://www.instagram.com/ciniloka/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-4 bg-white text-black px-12 py-6 rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl active:scale-95"
          >
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="relative z-10 font-sans text-xs font-bold uppercase tracking-[4px] group-hover:text-white transition-colors duration-500">
              Join the Community
            </span>
            <Camera size={18} className="relative z-10 group-hover:text-white transition-colors duration-500" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramReels;
