import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCakeCandles, faComments, faTruckFast, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import WhatsAppButton from '../common/WhatsAppButton';
import { orderSteps } from '../../data/howToOrder';
import { WhatsAppMessages } from '../../utils/whatsapp';
import { cardGridViewport } from '../../animations/motionConfig';
import { luxuryEase, smoothEase } from '../../animations/transitions';

const stepIcons = {
  Cake: faCakeCandles,
  MessageSquare: faComments,
  Truck: faTruckFast
};

export default function HowToOrderSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.08,
      },
    },
  };

  const stepCardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.65, ease: luxuryEase },
    },
  };

  return (
    <section id="how-to-order" className="py-20 md:py-28 bg-[#fffbf8] border-t border-[#ede1e4] relative overflow-hidden">
      <Container>
        <SectionHeading
          title="How Ordering Works"
          subtitle="We make ordering personalized cakes and celebration treats effortless through a direct chat with our bakery team."
          className="mb-14 md:mb-16"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={cardGridViewport}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
        >
          {orderSteps.map((step, idx) => {
            const faIcon = stepIcons[step.icon] || faCakeCandles;
            return (
              <motion.div
                key={step.step}
                variants={stepCardVariants}
                whileHover={shouldReduceMotion ? {} : { y: -3, transition: { duration: 0.25, ease: smoothEase } }}
                className="bg-white rounded-3xl p-8 border border-[#ede1e4] ambient-shadow hover:ambient-shadow-lg transition-shadow duration-300 flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#fdf2f4] border border-[#f4c4ce] flex items-center justify-center text-[#661f31] group-hover:scale-108 transition-transform duration-300">
                      <FontAwesomeIcon icon={faIcon} className="w-6 h-6 text-2xl" />
                    </div>
                    <span className="text-3xl font-black text-[#c69255]/40 font-heading">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1f1418] mb-3 group-hover:text-[#661f31] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#64555b] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#ede1e4]/70 flex items-center gap-2 text-xs font-semibold text-[#c69255]">
                  <FontAwesomeIcon icon={faCircleCheck} className="w-3.5 h-3.5" />
                  <span>Step {idx + 1} of 3</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Action Callout */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={cardGridViewport}
          transition={{ duration: 0.6, delay: 0.2, ease: luxuryEase }}
          className="mt-14 text-center"
        >
          <WhatsAppButton
            message={WhatsAppMessages.chatWithBaker()}
            size="lg"
            variant="primary"
            className="shadow-lg shadow-[#661f31]/25 hover:shadow-xl hover:shadow-[#661f31]/35"
          >
            Chat With a Baker to Order
          </WhatsAppButton>
        </motion.div>
      </Container>
    </section>
  );
}
