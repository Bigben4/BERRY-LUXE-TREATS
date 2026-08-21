import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import Badge from './Badge';
import { luxuryEase } from '../../animations/transitions';
import { sectionHeadingViewport } from '../../animations/motionConfig';

export default function SectionHeading({
  badge,
  badgeIcon,
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
  light = false
}) {
  const shouldReduceMotion = useReducedMotion();

  const alignmentClass =
    align === 'left'
      ? 'text-left items-start'
      : align === 'right'
      ? 'text-right items-end'
      : 'text-center items-center';

  const containerVariants = {
    hidden: { opacity: shouldReduceMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.6,
        ease: luxuryEase,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={sectionHeadingViewport}
      className={`flex flex-col max-w-3xl ${align === 'center' ? 'mx-auto' : ''} ${alignmentClass} ${className}`}
    >
      {badge && (
        <motion.div variants={itemVariants} className="mb-3">
          <Badge variant={light ? 'gold' : 'primary'} icon={badgeIcon}>
            {badge}
          </Badge>
        </motion.div>
      )}

      {title && (
        <motion.h2
          variants={itemVariants}
          className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
            light ? 'text-white' : 'text-[#1f1418]'
          } ${titleClassName}`}
        >
          {title}
        </motion.h2>
      )}

      {subtitle && (
        <motion.p
          variants={itemVariants}
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            light ? 'text-[#fdf2f4]/90' : 'text-[#64555b]'
          } ${subtitleClassName}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
