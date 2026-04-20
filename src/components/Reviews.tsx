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
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`text-sm ${star <= rating ? "text-yellow-400" : "text-stroke"}`}
      >
        ★
      </span>
    ))}
  </div>
);

const Reviews: React.FC = () => {
  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke/20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16 md:mb-20"
        >
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1.5px] bg-stroke/50" />
              <span className="text-[10px] text-muted uppercase tracking-[0.4em] font-black">
                Testimonials
              </span>
            </div>
            <h2 className="text-5xl md:text-8xl font-display italic text-text-primary leading-[0.9] tracking-tighter">
              What People <span className="text-white/30">Say</span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-lg mt-8 leading-relaxed font-light">
              Rated 4.8 stars from 21+ verified Google reviews. Real experiences
              from our valued guests.
            </p>
          </div>

          {/* Overall Rating Badge */}
          <div className="flex flex-col items-center gap-3 bg-surface/30 border border-stroke/50 rounded-[2rem] px-10 py-8">
            <span className="text-6xl font-display italic text-text-primary leading-none">
              4.8
            </span>
            <StarRating rating={5} />
            <span className="text-[10px] text-muted tracking-[0.3em] uppercase font-black mt-1">
              Google Reviews
            </span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="group bg-surface/20 hover:bg-surface/50 border border-stroke/30 hover:border-stroke rounded-[2.5rem] p-10 transition-all duration-700"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full accent-gradient flex items-center justify-center text-bg font-bold text-sm shrink-0">
                    {review.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <h4 className="text-text-primary font-medium text-base">
                    {review.name}
                  </h4>
                </div>
                <StarRating rating={review.rating} />
              </div>

              {/* Event Badge */}
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-stroke/30 mb-5">
                <span className="text-[9px] text-accent font-black tracking-[0.2em] uppercase">
                  {review.event}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-muted text-sm leading-relaxed font-light">
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* Google review link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="https://www.google.com/maps/place/CINI+LOKA/@16.2024,76.5856,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 rounded-full border border-stroke text-[10px] font-black tracking-[0.2em] uppercase hover:bg-white hover:text-bg transition-all duration-500"
          >
            See All Reviews on Google Maps →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;
