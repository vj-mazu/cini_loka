import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-xl flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative max-w-4xl w-full max-h-[80vh] glass rounded-[3rem] overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="p-10 md:p-16 overflow-y-auto custom-scrollbar">
              <h2 className="text-4xl md:text-6xl font-display italic gold-gradient mb-10 tracking-tighter">
                Privacy Policy
              </h2>
              
              <div className="space-y-8 text-text-secondary font-light leading-relaxed">
                <section>
                  <h3 className="text-white text-xl font-bold mb-4">1. Data Collection</h3>
                  <p>
                    We collect minimal personal information necessary to process your bookings, 
                    such as your name, phone number, and event preferences.
                  </p>
                </section>

                <section>
                  <h3 className="text-white text-xl font-bold mb-4">2. Usage of Information</h3>
                  <p>
                    Your data is strictly used for service delivery and communication regarding 
                    your event at Cini Loka. We do not sell or share your data with third parties.
                  </p>
                </section>

                <section>
                  <h3 className="text-white text-xl font-bold mb-4">3. Media Rights</h3>
                  <p>
                    With your consent, we may capture photos or videos of your event setups for 
                    our portfolio. You have the right to request the removal of such media at any time.
                  </p>
                </section>

                <section>
                  <h3 className="text-white text-xl font-bold mb-4">4. Security</h3>
                  <p>
                    We implement standard security measures to protect your information from 
                    unauthorized access or disclosure.
                  </p>
                </section>
              </div>
            </div>

            <div className="p-8 border-t border-white/5 flex justify-end">
              <button
                onClick={onClose}
                className="px-10 py-4 rounded-full border border-white/10 glass-dark text-white text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Close
              </button>
            </div>

            <button
              onClick={onClose}
              className="absolute top-8 right-8 w-12 h-12 rounded-full glass hover:bg-white/10 flex items-center justify-center text-white text-2xl transition-all"
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PrivacyModal;
