import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import SelectedWorks from "./components/SelectedWorks";
import Reviews from "./components/Reviews";
import Stats from "./components/Stats";
import Explorations from "./components/Explorations";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="bg-bg min-h-screen text-text-primary selection:bg-white selection:text-bg font-body">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loader" onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.main
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col"
          >
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
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
