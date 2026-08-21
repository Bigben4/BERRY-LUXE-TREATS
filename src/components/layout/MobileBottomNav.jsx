import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faGift, faTruckFast, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { WhatsAppMessages } from '../../utils/whatsapp';
import { luxuryEase, smoothEase } from '../../animations/transitions';

export default function MobileBottomNav() {
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      // Show floating WhatsApp button after scrolling past hero section (approx 300px)
      setShowFloatingButton(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Cakes', href: '#offerings', icon: faCakeCandles },
    { name: 'Gifts', href: '#services', icon: faGift },
    { name: 'Delivery', href: '#delivery', icon: faTruckFast },
    { name: 'Story', href: '#story', icon: faBookOpen },
  ];

  return (
    <>
      {/* Floating WhatsApp CTA Button (Mobile & Tablet) - Smooth single scroll entrance, no constant pinging */}
      <AnimatePresence>
        {showFloatingButton && (
          <motion.aside
            aria-label="WhatsApp Quick Order"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.88, y: shouldReduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.88, y: shouldReduceMotion ? 0 : 12 }}
            transition={{ duration: 0.35, ease: luxuryEase }}
            className="fixed bottom-20 right-4 z-40 md:bottom-8 md:right-8"
          >
            <motion.a
              href={WhatsAppMessages.chatWithBaker()}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={shouldReduceMotion ? {} : { y: -2, transition: { duration: 0.18, ease: smoothEase } }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
              className="group flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl shadow-emerald-900/30 transition-colors duration-200 cursor-pointer"
              aria-label="Chat With a Baker"
            >
              <div className="relative">
                <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6 text-2xl" />
              </div>
              <span className="hidden sm:inline font-bold text-sm tracking-wide">
                Chat With a Baker
              </span>
            </motion.a>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Fixed Bottom Navigation Bar (Mobile Only) */}
      <nav aria-label="Mobile Navigation" className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-xl border-t border-[#ede1e4] py-1.5 px-4 shadow-[0px_-4px_20px_rgba(0,0,0,0.06)]">
        <div className="flex items-center justify-around">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex flex-col items-center justify-center p-1.5 rounded-xl text-[#64555b] hover:text-[#661f31] hover:bg-[#fdf2f4] active:scale-90 transition-all duration-150"
            >
              <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-base" />
              <span className="text-[11px] font-semibold mt-0.5">{item.name}</span>
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
