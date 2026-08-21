import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTiktok, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Container from '../common/Container';
import WhatsAppButton from '../common/WhatsAppButton';
import { businessInfo } from '../../data/businessInfo';
import { WhatsAppMessages } from '../../utils/whatsapp';
import { luxuryEase, smoothEase } from '../../animations/transitions';

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  // Container orchestrating staggered hero entry
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.65,
        ease: luxuryEase,
      },
    },
  };

  const imageContainerVariants = {
    hidden: { opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.8,
        ease: luxuryEase,
      },
    },
  };

  return (
    <section className="relative min-h-[750px] flex items-center justify-center pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#faf6f3] via-[#fcf2f4]/60 to-[#faf6f3]">
      {/* Ambient Decorative Blur Circles */}
      <div className="absolute top-12 right-0 w-80 h-80 bg-[#c69255]/15 rounded-full blur-3xl pointer-events-none -z-10 translate-x-1/3" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#661f31]/10 rounded-full blur-3xl pointer-events-none -z-10 -translate-x-1/3" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Owner / Head Baker Portrait */}
          <div className="lg:col-span-5 relative group order-2 lg:order-1 flex justify-center">
            {/* Glow Aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-[#661f31]/20 via-[#c69255]/20 to-transparent rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity" />

            <motion.div
              variants={imageContainerVariants}
              initial="hidden"
              animate="visible"
              className="relative w-full max-w-md rounded-[3rem_1rem_3rem_1rem] overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#fbf2f4] via-[#fdf7f4] to-[#f7e6ea] flex items-end justify-center pt-6"
            >
              {/* Subtle radiant background accent */}
              <div className="absolute top-1/4 w-64 h-64 bg-[#c69255]/20 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-[#661f31]/10 to-transparent pointer-events-none" />

              <img
                src="/images/berry-baker-hero.png"
                srcSet="/images/berry-baker-hero.png 1x, /images/berry-baker-hero@2x.png 2x"
                alt="Berry, Founder and Head Baker of Berry Luxe Treats"
                className="relative z-10 w-full h-auto aspect-4/5 object-cover object-top drop-shadow-md group-hover:scale-103 transition-transform duration-700"
              />
            </motion.div>

            {/* Baker Badge (Pill Card) */}
            <motion.div
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.35, duration: 0.55, ease: luxuryEase }}
              className="absolute -bottom-5 -right-2 sm:right-4 bg-white/95 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg border border-[#ede1e4] flex items-center gap-3 z-20"
            >
              <div className="w-10 h-10 rounded-full bg-[#fdf2f4] border border-[#f4c4ce] flex items-center justify-center text-[#661f31] font-bold text-sm">
                BLT
              </div>
              <div>
                <p className="font-bold text-sm text-[#1f1418] font-heading leading-tight">
                  {businessInfo.founder}
                </p>
                <p className="text-[11px] text-[#64555b] font-medium">
                  {businessInfo.founderTitle}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Brand Headline & CTAs (5-Second Immediate Clarity) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left order-1 lg:order-2"
          >
            {/* Direct 3-Pillar Category Indicator */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase tracking-[0.22em] text-[#c69255] mb-3"
            >
              <span>CAKES</span>
              <span className="text-[#661f31]">•</span>
              <span>PASTRIES</span>
              <span className="text-[#661f31]">•</span>
              <span>CATERING</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#661f31] font-heading leading-[1.12]"
            >
              Made for your moments.{' '}
              <span className="text-[#1f1418] block sm:inline font-extrabold">
                Baked with love.
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-base sm:text-xl text-[#64555b] max-w-xl leading-relaxed"
            >
              Custom cakes, fresh pastries and full-service catering for birthdays, weddings, corporate events and every celebration in between.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <WhatsAppButton
                message={WhatsAppMessages.generalOrder()}
                size="lg"
                variant="primary"
                className="shadow-lg shadow-[#661f31]/25 hover:shadow-xl hover:shadow-[#661f31]/35"
              >
                Order on WhatsApp
              </WhatsAppButton>

              <motion.a
                href="#offerings"
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="px-8 py-4 rounded-full text-sm sm:text-base font-bold text-[#661f31] border-2 border-[#661f31]/30 hover:border-[#661f31] hover:bg-[#661f31]/5 transition-colors text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Menu</span>
                <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
              </motion.a>
            </motion.div>

            {/* Social Media Handles Row under CTAs */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-[#64555b] mr-1">
                Follow Us:
              </span>
              <motion.a
                href={businessInfo.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede1e4] hover:border-[#661f31] text-[#1f1418] hover:text-[#661f31] text-xs font-semibold shadow-2xs hover:shadow-xs transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faTiktok} className="w-3.5 h-3.5 text-[#1f1418]" />
                <span>TikTok</span>
              </motion.a>

              <motion.a
                href={businessInfo.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede1e4] hover:border-[#661f31] text-[#1f1418] hover:text-[#661f31] text-xs font-semibold shadow-2xs hover:shadow-xs transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faFacebookF} className="w-3.5 h-3.5 text-[#1877F2]" />
                <span>Facebook</span>
              </motion.a>

              <motion.a
                href={businessInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={shouldReduceMotion ? {} : { y: -1 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#ede1e4] hover:border-[#661f31] text-[#1f1418] hover:text-[#661f31] text-xs font-semibold shadow-2xs hover:shadow-xs transition-colors duration-200"
              >
                <FontAwesomeIcon icon={faInstagram} className="w-3.5 h-3.5 text-[#E1306C]" />
                <span>Instagram</span>
              </motion.a>
            </motion.div>

            {/* Delivery Footnote */}
            <motion.div
              variants={itemVariants}
              className="mt-8 pt-5 border-t border-[#ede1e4]/80 w-full flex items-center gap-2 text-xs text-[#64555b] font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Baking in Buea • Delivering to Limbe, Tiko, Douala & Beyond</span>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
