import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Container from '../common/Container';
import { businessInfo } from '../../data/businessInfo';
import { WhatsAppMessages } from '../../utils/whatsapp';
import { defaultViewport } from '../../animations/motionConfig';
import { luxuryEase, smoothEase } from '../../animations/transitions';

export default function FinalCTA() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.98 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.75,
        ease: luxuryEase,
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const headingVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.6, ease: luxuryEase },
    },
  };

  const descVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.6, ease: luxuryEase },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.2 : 0.6, ease: luxuryEase },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-[#faf6f3] relative overflow-hidden">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#661f31] via-[#7d263c] to-[#42101d] text-white p-10 sm:p-14 lg:p-20 shadow-2xl border-4 border-white"
        >
          {/* Ambient Glow & Gold Leaf Accents */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c69255]/25 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/30 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
            <motion.h2
              variants={headingVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-heading leading-tight"
            >
              &ldquo;{businessInfo.coreMessage}&rdquo;
            </motion.h2>

            <motion.p
              variants={descVariants}
              className="text-base sm:text-xl text-[#faf6f3]/90 leading-relaxed max-w-2xl mx-auto"
            >
              Whether you need a bespoke wedding centerpiece, custom birthday cake, surprise money bouquet, or fresh party pastries — we are one message away.
            </motion.p>

            <motion.div
              variants={buttonVariants}
              className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href={WhatsAppMessages.chatWithBaker()}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#25d366] to-[#128c7e] hover:from-[#20ba5a] hover:to-[#0f756a] text-white font-bold text-base shadow-xl shadow-emerald-950/30 hover:shadow-2xl transition-colors flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5 text-xl" />
                <span>Chat With a Baker & Order Now</span>
              </motion.a>

              <motion.a
                href="#offerings"
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-base border border-white/30 backdrop-blur-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Browse Menu</span>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>

            <motion.div variants={descVariants} className="pt-6 text-xs text-[#dfb079] font-medium">
              <span>Delivering with care to Buea • Limbe • Tiko • Douala • & Beyond</span>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
