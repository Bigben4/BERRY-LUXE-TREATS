import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faGift, faMoneyBillWave, faCakeCandles } from '@fortawesome/free-solid-svg-icons';
import WhatsAppButton from '../common/WhatsAppButton';
import { luxuryEase, smoothEase } from '../../animations/transitions';

const iconMap = {
  UtensilsCrossed: faUtensils,
  Gift: faGift,
  Banknote: faMoneyBillWave,
  Cake: faCakeCandles,
};

export default function ServiceCard({ service }) {
  const shouldReduceMotion = useReducedMotion();
  const { title, description, priceText, image, imageAlt, icon, badge } = service;
  const faIcon = iconMap[icon] || faCakeCandles;

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.6, ease: luxuryEase },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.25, ease: smoothEase } }}
      className="bg-white rounded-2xl border border-[#ede1e4] shadow-xs hover:shadow-md hover:border-[#661f31]/30 transition-shadow duration-300 flex flex-col justify-between overflow-hidden group"
    >
      <div>
        {/* Card Image */}
        <div className="h-52 overflow-hidden relative bg-[#fdf2f4]">
          <img
            src={image}
            alt={imageAlt || title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          {badge && (
            <div className="absolute top-3 right-3">
              <span className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] font-bold text-[#661f31] border border-[#f4c4ce] shadow-2xs">
                {badge}
              </span>
            </div>
          )}

          {priceText && (
            <div className="absolute bottom-3 left-3">
              <span className="bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#661f31] border border-[#f4c4ce] shadow-xs">
                {priceText}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Icon Circle */}
          <div className="w-12 h-12 rounded-full bg-[#fdf2f4] border border-[#f4c4ce] flex items-center justify-center -mt-12 mb-4 relative z-10 shadow-xs text-[#661f31] group-hover:scale-105 transition-transform duration-300">
            <FontAwesomeIcon icon={faIcon} className="w-4 h-4 text-base" />
          </div>

          <h3 className="text-xl font-bold text-[#1f1418] mb-2 group-hover:text-[#661f31] transition-colors">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-[#64555b] leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Button */}
      <div className="p-6 pt-0">
        <WhatsAppButton
          message={service.customMessage || `Hi! I'd like to ask about ${title}.`}
          fullWidth
          variant="gold"
          size="sm"
        >
          {service.ctaText || `Inquire About ${title}`}
        </WhatsAppButton>
      </div>
    </motion.div>
  );
}
