import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import ServiceCard from '../products/ServiceCard';
import { premiumServices } from '../../data/services';
import { cardGridViewport } from '../../animations/motionConfig';

export default function PremiumServicesSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#fbf0f4] border-t border-[#ede1e4]">
      <Container>
        <SectionHeading
          title="Premium Services"
          subtitle="Specialized event catering, custom money bouquets, and curated gift hampers designed to elevate your milestones into unforgettable experiences."
          className="mb-14 md:mb-16"
        />

        {/* 4-Card Responsive Grid with Staggered Scroll Reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={cardGridViewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {premiumServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
