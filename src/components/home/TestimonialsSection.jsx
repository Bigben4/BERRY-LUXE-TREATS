import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { testimonials } from '../../data/testimonials';
import { cardGridViewport } from '../../animations/motionConfig';
import { luxuryEase, smoothEase } from '../../animations/transitions';

export default function TestimonialsSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.09,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.6, ease: luxuryEase },
    },
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#fbf0f4] border-t border-[#ede1e4]">
      <Container>
        <SectionHeading
          title="Celebrated Across Cameroon"
          subtitle="Real reviews from families, event hosts, and sweet lovers who celebrated their milestones with Berry Luxe Treats."
          className="mb-14 md:mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={cardGridViewport}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={cardVariants}
              whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.25, ease: smoothEase } }}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#ede1e4] ambient-shadow hover:ambient-shadow-lg transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-[#c69255] mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <FontAwesomeIcon key={i} icon={faStar} className="w-3.5 h-3.5 text-[#c69255]" />
                  ))}
                </div>

                <p className="text-sm text-[#1f1418] leading-relaxed italic mb-6">
                  &ldquo;{t.review}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#ede1e4]/70 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#661f31]">{t.name}</h4>
                  <span className="text-[11px] font-medium text-[#c69255] block">
                    {t.event}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#64555b]">
                  <FontAwesomeIcon icon={faLocationDot} className="w-3 h-3 text-[#c69255]" />
                  <span>{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
