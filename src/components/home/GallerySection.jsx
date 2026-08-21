import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { galleryCategories, galleryItems } from '../../data/gallery';
import { WhatsAppMessages } from '../../utils/whatsapp';
import { cardGridViewport } from '../../animations/motionConfig';
import { luxuryEase, smoothEase } from '../../animations/transitions';

export default function GallerySection({ onSelectImage }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const shouldReduceMotion = useReducedMotion();

  const filteredItems =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.04,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.6, ease: luxuryEase },
    },
    exit: {
      opacity: 0,
      scale: 0.96,
      transition: { duration: 0.2, ease: smoothEase },
    },
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-[#fef9f1] border-t border-[#ede1e4]">
      <Container>
        <SectionHeading
          title="Our Real Treats Showcase"
          subtitle="A glimpse into recent orders handcrafted with love in our kitchen — from graduation cakes to surprise money bouquets and corporate platters."
          className="mb-10 md:mb-12"
        />

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {galleryCategories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={shouldReduceMotion ? {} : { y: -1 }}
              whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                activeCategory === category
                  ? 'bg-[#661f31] text-white shadow-md shadow-[#661f31]/20'
                  : 'bg-white text-[#64555b] border border-[#ede1e4] hover:border-[#661f31]/40 hover:text-[#661f31]'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Gallery Bento Grid with Staggered Scroll Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={cardGridViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                variants={itemVariants}
                onClick={() => onSelectImage && onSelectImage(item)}
                whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.25, ease: smoothEase } }}
                className={`group bg-white rounded-3xl overflow-hidden border border-[#ede1e4] ambient-shadow hover:ambient-shadow-lg transition-shadow duration-300 relative cursor-pointer ${
                  index % 4 === 0 ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="h-72 sm:h-80 relative overflow-hidden bg-[#fdf2f4]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#661f31] border border-[#f4c4ce] shadow-sm">
                      {item.tag}
                    </span>
                  </div>

                  {/* Hover Details & WhatsApp Action */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-xs font-semibold text-[#dfb079] uppercase tracking-wider">
                      {item.category}
                    </p>
                    <h4 className="text-lg font-bold text-white mb-3">
                      {item.title}
                    </h4>
                    <motion.a
                      href={WhatsAppMessages.galleryItemInquiry(item.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={shouldReduceMotion ? {} : { y: -1 }}
                      whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                      className="inline-flex items-center gap-2 bg-[#25d366] hover:bg-[#20ba5a] text-white px-4 py-2 rounded-full text-xs font-bold shadow-md transition-colors"
                    >
                      <FontAwesomeIcon icon={faWhatsapp} className="w-3.5 h-3.5 text-sm" />
                      <span>
                        {item.category === 'Cakes'
                          ? 'Ask About This Cake'
                          : item.category === 'Money Bouquets & Hampers'
                          ? 'Order This Bouquet'
                          : item.category === 'Catering & Events'
                          ? 'Get a Catering Quote'
                          : 'Order Fresh Pastries'}
                      </span>
                      <FontAwesomeIcon icon={faArrowRight} className="w-2.5 h-2.5 ml-1" />
                    </motion.a>
                  </div>
                </div>

                {/* Bottom Caption for mobile view */}
                <div className="p-4 sm:hidden flex items-center justify-between bg-white border-t border-[#ede1e4]">
                  <div>
                    <h4 className="text-sm font-bold text-[#1f1418]">{item.title}</h4>
                    <p className="text-[11px] text-[#64555b]">{item.tag}</p>
                  </div>
                  <a
                    href={WhatsAppMessages.galleryItemInquiry(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#661f31] text-white flex items-center justify-center active:scale-95"
                    aria-label={`Order ${item.title}`}
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
