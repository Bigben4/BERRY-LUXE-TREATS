import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import OfferingCard from '../products/OfferingCard';
import { offerings, menuCategories } from '../../data/offerings';
import { cardGridViewport } from '../../animations/motionConfig';
import { luxuryEase, smoothEase } from '../../animations/transitions';

export default function OfferingsSection() {
  const [activeCategory, setActiveCategory] = useState('All Menu');
  const shouldReduceMotion = useReducedMotion();

  const filteredOfferings =
    activeCategory === 'All Menu'
      ? offerings
      : offerings.filter((item) => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  return (
    <section id="offerings" className="py-20 md:py-28 bg-[#fcf8f5] border-t border-[#ede1e4]/70">
      <Container>
        <SectionHeading
          title="Our Bakery Menu & Pricing"
          subtitle="Handcrafted cakes, fresh pastries, and curated celebration gifts made to order in Buea & Limbe. Explore our transparent pricing and order directly via WhatsApp."
          className="mb-10 md:mb-12"
        />

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {menuCategories.map((category) => (
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

        {/* 3-Column Bento Grid displaying filtered menu items with staggered reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={cardGridViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredOfferings.map((offering) => (
              <OfferingCard key={offering.id} offering={offering} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
