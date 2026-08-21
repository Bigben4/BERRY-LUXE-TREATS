import React, { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Container from '../common/Container';
import SectionHeading from '../common/SectionHeading';
import { faqs } from '../../data/faqs';
import { WhatsAppMessages } from '../../utils/whatsapp';
import { defaultViewport } from '../../animations/motionConfig';
import { luxuryEase, smoothEase } from '../../animations/transitions';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.07,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.55, ease: luxuryEase },
    },
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#faf6f3] border-t border-[#ede1e4]">
      <Container size="narrow">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our ordering process, advance notice, delivery routes, and custom designs."
          className="mb-12"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="space-y-4"
        >
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white rounded-2xl border border-[#ede1e4] overflow-hidden ambient-shadow transition-shadow duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#fdf2f4]/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-[#1f1418] font-heading">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: luxuryEase }}
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      isOpen
                        ? 'bg-[#661f31] text-white'
                        : 'bg-[#fdf2f4] text-[#661f31]'
                    }`}
                  >
                    <FontAwesomeIcon icon={faChevronDown} className="w-3.5 h-3.5" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: 'auto',
                        opacity: 1,
                        transition: {
                          height: { duration: shouldReduceMotion ? 0.15 : 0.35, ease: luxuryEase },
                          opacity: { duration: shouldReduceMotion ? 0.15 : 0.25, delay: shouldReduceMotion ? 0 : 0.05 },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: shouldReduceMotion ? 0.15 : 0.25, ease: luxuryEase },
                          opacity: { duration: shouldReduceMotion ? 0.1 : 0.15 },
                        },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#64555b] leading-relaxed border-t border-[#ede1e4]/60">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional help callout */}
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={defaultViewport}
          transition={{ duration: 0.55, delay: 0.2, ease: luxuryEase }}
          className="mt-12 text-center p-6 rounded-3xl bg-[#fdf2f4] border border-[#f4c4ce]"
        >
          <p className="text-sm font-semibold text-[#1f1418]">
            Have a custom design or question not listed here?
          </p>
          <p className="text-xs text-[#64555b] mt-1 mb-4">
            Chat directly with our baker on WhatsApp for personalized support.
          </p>
          <motion.a
            href={WhatsAppMessages.chatWithBaker()}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={shouldReduceMotion ? {} : { y: -1 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            className="inline-flex items-center gap-2 bg-[#661f31] hover:bg-[#501624] text-white px-6 py-2.5 rounded-full text-xs font-bold shadow-sm transition-colors cursor-pointer"
          >
            <span>Chat With a Baker</span>
          </motion.a>
        </motion.div>
      </Container>
    </section>
  );
}
