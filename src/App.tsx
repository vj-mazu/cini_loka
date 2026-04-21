import React, { useState, useEffect, Suspense } from "react";
import LoadingScreen from "./components/LoadingScreen";
import { motion, AnimatePresence } from "framer-motion";

// Lazy load components for performance
const Navbar = React.lazy(() => import("./components/Navbar"));
const Hero = React.lazy(() => import("./components/Hero"));
const Services = React.lazy(() => import("./components/Services"));
const SelectedWorks = React.lazy(() => import("./components/SelectedWorks"));
const Reviews = React.lazy(() => import("./components/Reviews"));
const Stats = React.lazy(() => import("./components/Stats"));
const Explorations = React.lazy(() => import("./components/Explorations"));
const Footer = React.lazy(() => import("./components/Footer"));
const FloatingPhone = React.lazy(() => import("./components/FloatingPhone"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isLoading]);

  return (
    <div className="bg-bg min-h-screen text-text-primary selection:bg-accent selection:text-white font-body">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <Suspense fallback={<div className="h-screen bg-bg" />}>
            <motion.main
              key="content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.22, 1, 0.36, 1],
                opacity: { duration: 1.5 }
              }}
              className="flex flex-col relative"
            >
              <div className="fixed inset-0 pointer-events-none z-[-1] opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent-light/10 blur-[120px] rounded-full" />
              </div>
              
              <Navbar />
              <div id="home">
                <Hero />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="works">
                <SelectedWorks />
              </div>
              <div id="reviews">
                <Reviews />
              </div>
              <div id="gallery">
                <Explorations />
              </div>
              <div id="stats">
                <Stats />
              </div>
              <Footer />
              <FloatingPhone />
            </motion.main>
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
