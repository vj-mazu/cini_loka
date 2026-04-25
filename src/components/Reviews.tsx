import React from "react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Absolutely amazing experience! The decor for my daughter's birthday was beyond expectations. Every detail was perfect — lighting, backdrop, everything!",
    event: "Birthday Party",
  },
  {
    name: "Rahul Reddy",
    rating: 5,
    text: "Best private theater experience in Raichur! The sound quality and setup is top-notch. Celebrated our anniversary here and it was magical.",
    event: "Anniversary",
  },
  {
    name: "Sneha Patil",
    rating: 5,
    text: "CINI LOKA is next level! Booked for a surprise birthday and the team handled every single detail. The atmosphere was absolutely premium.",
    event: "Surprise Party",
  },
  {
    name: "Arjun Kumar",
    rating: 4,
    text: "Had a great corporate team event here. Professional setup, clean space, and the staff was incredibly accommodating. Highly recommended!",
    event: "Corporate Event",
  },
  {
    name: "Meena Devi",
    rating: 5,
    text: "My kids loved it! Safe, fun, and beautifully decorated. The themed party was a huge hit. All the parents were impressed.",
    event: "Kids Party",
  },
  {
    name: "Karthik Gowda",
    rating: 5,
    text: "Watched a movie here with friends — felt like a luxury cinema. The private setting, comfy seating, and the vibe is unmatched in Raichur.",
    event: "Movie Screening",
  },
];

const StarRating: React.FC<{ rating: number }> = ({ rating }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`text-sm ${star <= rating ? "gold-gradient bg-clip-text text-transparent" : "text-white/10"}`}
        style={{ textShadow: star <= rating ? "0 0 10px rgba(226, 194, 133, 0.4)" : "none" }}
      >
        ★
      </span>
    ))}
  </div>
);

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="bg-bg py-24 md:py-32 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-1/2 h-1/2 bg-accent/5 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-24"
        >
          <div className="max-w-3xl">
            <div className="flex items-center gap-5 mb-8">
              <div className="w-16 h-[1.5px] bg-accent/30" />
              <span className="text-[11px] text-accent tracking-[0.6em] font-bold uppercase opacity-80">
                Testimonials
              </span>
            </div>
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-display italic leading-[1.1] tracking-tighter pb-4">
              <span className="text-white/20">Guest</span> <span className="gold-gradient">Stories</span>
            </h2>
            <p className="text-text-secondary text-lg md:text-xl max-w-xl mt-10 leading-relaxed font-light">
              Exceptional moments shared by our guests. Rated 4.8 stars from 
              21+ verified Google reviews in Raichur.
            </p>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 glass-dark p-10 md:p-12 rounded-[3.5rem] border border-accent/20 shadow-[0_0_50px_rgba(226,194,133,0.1)] hover:shadow-accent/20 transition-all duration-1000 group relative"
          >
            <div className="absolute inset-0 bg-accent/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <span className="text-7xl md:text-8xl font-display italic gold-gradient leading-none relative z-10">
              4.8
            </span>
            <div className="relative z-10">
              <StarRating rating={5} />
            </div>
            <span className="text-[10px] text-accent tracking-[0.5em] uppercase font-bold mt-2 opacity-80 relative z-10">
              Google Verified
            </span>
          </motion.div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {REVIEWS.map((review, idx) => (
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
              className="group glass rounded-[2.8rem] p-12 transition-all duration-700 hover:bg-white/[0.08]"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full gold-gradient shadow-lg flex items-center justify-center text-white font-bold text-sm">
                    {review.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <h4 className="text-text-primary font-medium text-lg leading-none mb-2">
                      {review.name}
                    </h4>
                    <span className="text-[10px] text-accent uppercase tracking-[0.2em] font-bold opacity-60">
                      {review.event}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <StarRating rating={review.rating} />
              </div>

              <p className="text-text-secondary text-base leading-relaxed font-light italic group-hover:text-text-primary transition-colors duration-500">
                "{review.text}"
              </p>
              
              <div className="mt-8 pt-8 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <div className="w-8 h-[1px] gold-gradient" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 flex justify-center"
        >
          <a
            href="https://maps.app.goo.gl/uN7Q9kHv3gDmn8jw9"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-6 px-12 py-6 rounded-full border border-white/10 glass-dark text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white hover:text-bg transition-all duration-700"
          >
            <span>Explore All Guest Feedback</span>
            <span className="group-hover:translate-x-2 transition-transform duration-500">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
