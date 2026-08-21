import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { WhatsAppMessages } from '../../utils/whatsapp';
import { businessInfo } from '../../data/businessInfo';
import { luxuryEase, smoothEase } from '../../animations/transitions';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Cakes', href: '#offerings' },
    { name: 'Gifts', href: '#services' },
    { name: 'Delivery', href: '#delivery' },
    { name: 'Services', href: '#services' },
    { name: 'Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'FAQ', href: '#faq' },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: luxuryEase },
    },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-[#ede1e4]/70 py-2.5'
          : 'bg-[#faf6f3]/85 backdrop-blur-sm py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src={businessInfo.logo}
            alt="Berry Luxe Treats Logo"
            className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-wider uppercase text-[#661f31] font-heading leading-tight">
              Berry Luxe
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#916127] font-semibold -mt-0.5">
              Treats • Cameroon
            </span>
          </div>
        </a>

        {/* Center Floating Navigation Pill (Desktop) */}
        <nav className="hidden md:flex items-center bg-gradient-to-r from-[#661f31] to-[#822a41] rounded-full px-7 py-2.5 shadow-md shadow-[#661f31]/15 gap-8">
          {navLinks.slice(0, 5).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-white font-semibold text-sm tracking-wide transition-colors duration-150 relative py-0.5 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c69255] hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <motion.a
            href={WhatsAppMessages.chatWithBaker()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { y: -1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="bg-gradient-to-r from-[#c69255] to-[#dfb079] hover:from-[#b07c40] hover:to-[#c69255] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md shadow-[#c69255]/20 hover:shadow-lg transition-colors cursor-pointer"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-base" />
            <span>Chat with a Baker</span>
          </motion.a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={WhatsAppMessages.chatWithBaker()}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-[#661f31] text-white shadow-sm active:scale-95 transition-transform"
            aria-label="Chat With a Baker on WhatsApp"
          >
            <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
          </a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2.5 rounded-full text-[#661f31] hover:bg-[#661f31]/10 transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <FontAwesomeIcon icon={faXmark} className="w-5 h-5 text-xl" />
            ) : (
              <FontAwesomeIcon icon={faBars} className="w-5 h-5 text-lg" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: smoothEase }}
            className="md:hidden overflow-hidden bg-white/95 backdrop-blur-xl border-b border-[#ede1e4] px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between text-base font-semibold text-[#1f1418] hover:text-[#661f31] py-2 border-b border-neutral-100"
                >
                  <span>{link.name}</span>
                  <FontAwesomeIcon icon={faChevronRight} className="w-3.5 h-3.5 text-[#916127]" />
                </a>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={WhatsAppMessages.chatWithBaker()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-gradient-to-r from-[#661f31] to-[#822a41] text-white py-3.5 px-6 rounded-full font-bold text-sm flex items-center justify-center gap-2 shadow-md shadow-[#661f31]/20 active:scale-98 transition-transform"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4 text-base" />
                <span>Chat with a Baker on WhatsApp</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
